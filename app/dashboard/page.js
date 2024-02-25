"use client";
import { Layout, Flex, Select, Typography } from "antd";
import Menu from "../components/Menu/menu";
import "./dashboard.scss";
import Header from "../components/Header/header";
import Total from "../components/NetTotal/netTotal";

const { Content } = Layout;
const { Title } = Typography;
const Dashboard = () => {
  return (
    <div className="layout">
      <Content className="container">
        <Menu />
        <Header />
        <Total />
      </Content>
    </div>
  );
};

export default Dashboard;
