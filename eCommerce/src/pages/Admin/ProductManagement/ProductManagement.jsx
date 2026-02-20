import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  Input,
  Button,
  Space,
  Popconfirm,
  Typography,
  Image,
  Modal,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
} from "../../../apis/product.api";
import useDebounce from "../../../hooks/useDebounce";
import ProductForm from "../../../components/ProductForm/ProductForm";

const { Title } = Typography;
const { Search } = Input;

const ProductManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("keyword") || ""
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const keyword = searchParams.get("keyword") || "";
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 4;

  useEffect(() => {
    if (debouncedSearchTerm !== keyword) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (debouncedSearchTerm) {
          newParams.set("keyword", debouncedSearchTerm);
        } else {
          newParams.delete("keyword");
        }
        newParams.set("page", 1);
        return newParams;
      });
    }
  }, [debouncedSearchTerm, keyword, setSearchParams]);

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products", { keyword, page, pageSize }],
    queryFn: () => getProducts({ keyword, pageNum: page, pageSize }),
    keepPreviousData: true,
  });

  const createMutation = useMutation({
    mutationFn: (body) => createProduct(body),
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setIsModalOpen(false);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create product");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, body }) => updateProduct(id, body),
    onSuccess: () => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setIsModalOpen(false);
      setEditingProduct(null);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to update product");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to delete product");
    },
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTableChange = (pagination) => {
    setSearchParams({
      keyword,
      page: pagination.current,
    });
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = async (id) => {
    try {
      const res = await getProductById(id);
      setEditingProduct(res.data);
      setIsModalOpen(true);
    } catch (error) {
      toast.error("Failed to fetch product details");
    }
  };

  const handleViewProduct = async (id) => {
    try {
      const res = await getProductById(id);
      Modal.info({
        title: "Product Details",
        width: 600,
        content: (
          <div className="mt-4 space-y-2">
            <p>
              <strong>Name:</strong> {res.data.name}
            </p>
            <p>
              <strong>Description:</strong>
            </p>
            <p className="whitespace-pre-line">
              {res.data.description?.replace(/\|/g, "\n- ")}
            </p>
            <p>
              <strong>Price:</strong> ₹{res.data.price?.toLocaleString()}
            </p>
            <p>
              <strong>Stock:</strong> {res.data.stockQuantity}
            </p>
            <p>
              <strong>Category:</strong> {res.data.categoryName}
            </p>
            {res.data.imageUrl && <Image src={res.data.imageUrl} width={200} />}
          </div>
        ),
        onOk() {},
      });
    } catch (error) {
      toast.error("Failed to fetch product details");
    }
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSubmitForm = (formData) => {
    if (editingProduct) {
      updateMutation.mutate({ id: editingProduct.id, body: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "image",
      render: (imageUrl) => (
        <Image
          width={60}
          height={60}
          src={imageUrl || "https://via.placeholder.com/150"}
          alt="product"
          style={{ objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price?.toLocaleString()}`,
    },
    { title: "Stock", dataIndex: "stockQuantity", key: "stockQuantity" },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleViewProduct(record.id)}
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditProduct(record.id)}
          />
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={() => deleteMutation.mutate(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              icon={<DeleteOutlined />}
              loading={deleteMutation.isPending}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Title level={2}>Product Management</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-[#ee4d2d]"
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </div>
      <div className="mb-4">
        <Search
          placeholder="Search by product name"
          allowClear
          size="large"
          onChange={handleSearchChange}
          value={searchTerm}
          className="max-w-md"
        />
      </div>
      <Table
        columns={columns}
        dataSource={productsData?.data?.items || []}
        rowKey="id"
        pagination={{
          current: page,
          pageSize: pageSize,
          total: productsData?.data?.meta?.totalElements || 0,
          showSizeChanger: false,
        }}
        loading={isLoading}
        onChange={handleTableChange}
      />
      {isModalOpen && (
        <ProductForm
          open={isModalOpen}
          onCancel={handleCancelModal}
          onSubmit={handleSubmitForm}
          initialValues={editingProduct}
          loading={createMutation.isPending || updateMutation.isPending}
        />
      )}
    </div>
  );
};

export default ProductManagement;
