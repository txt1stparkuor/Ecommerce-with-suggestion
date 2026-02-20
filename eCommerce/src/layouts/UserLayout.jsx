import React from "react";
import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const { Content } = Layout;

const UserLayout = () => {
  return (

      <Layout className="min-h-screen">
        <Header />
        <Content className="bg-gray-100">
          <Outlet />
        </Content>
        <Footer />
      </Layout>
  );
};

export default UserLayout;
