import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typography, Skeleton, Button } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import { getCategoriesWithProducts } from "../../apis/category.api";
import ProductList from "../../components/ProductList/ProductList";

const { Title } = Typography;

const Home = () => {
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ["categories", "with-products"],
    queryFn: getCategoriesWithProducts,
  });

  const categories = categoriesData?.data || [];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Title level={4} style={{ marginBottom: "1rem" }}>
          Categories
        </Title>

        {isLoading ? (
          <div className="grid grid-cols-2 gap-3 pb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton.Button
                key={index}
                active
                block
                style={{ height: 96 }}
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={2}
            navigation
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-10"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link
                  to={`/products?categoryId=${category.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="flex h-24 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 p-2 text-center transition-all hover:border-[#ee4d2d] hover:bg-white hover:shadow-md">
                    <span className="text-sm font-medium text-gray-700 line-clamp-2">
                      {category.name}
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <ProductList />

      <div className="mt-8 text-center">
        <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
          <Button type="default" size="large">
            Watch More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
