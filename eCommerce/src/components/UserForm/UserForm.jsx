import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, Form, Input, Button, Select } from "antd";
import { userSchema } from "../../utils/userValidation";

const UserForm = ({ open, onCancel, onSubmit, initialValues, loading }) => {
  const isEditing = !!initialValues;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema(isEditing)),
    defaultValues: initialValues
      ? {
          ...initialValues,
          role:
            initialValues.role ||
            (initialValues.roles && initialValues.roles[0]) ||
            "USER",
        }
      : { username: "", email: "", fullName: "", password: "", role: "USER" },
  });

  useEffect(() => {
    if (open) {
      if (initialValues) {
        reset({
          ...initialValues,
          role:
            initialValues.role ||
            (initialValues.roles && initialValues.roles[0]) ||
            "USER",
        });
      } else {
        reset({
          username: "",
          email: "",
          fullName: "",
          password: "",
          role: "USER",
        });
      }
    }
  }, [initialValues, open, reset]);

  const handleFormSubmit = (data) => {
    if (isEditing && !data.password) {
      delete data.password;
    }
    onSubmit(data);
  };

  return (
    <Modal
      open={open}
      title={isEditing ? "Edit User" : "Add User"}
      onCancel={onCancel}
      destroyOnHidden
      styles={{footer: {marginTop: '2rem'}}}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit(handleFormSubmit)}
          className="bg-[#ee4d2d]"
        >
          Submit
        </Button>,
      ]}
    >
      <Form layout="vertical" onFinish={handleSubmit(handleFormSubmit)}>
        <Form.Item
          label="Username"
          required
          validateStatus={errors.username ? "error" : ""}
          help={errors.username?.message}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          required
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Full Name"
          required
          validateStatus={errors.fullName ? "error" : ""}
          help={errors.fullName?.message}
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          required={!isEditing}
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder={
                  isEditing ? "Leave blank to keep current password" : ""
                }
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Role"
          required
          validateStatus={errors.role ? "error" : ""}
          help={errors.role?.message}
        >
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "USER", label: "USER" },
                  { value: "ADMIN", label: "ADMIN" },
                ]}
              />
            )}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
