"use client";
import { Layout, Flex } from "antd";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
import Total from "../components/Total/total";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import "./dashboard.scss";
import Statistics from "../components/Statistics/statistics";
const statisticsData = [
  {
    title: "Income",
    number: "1200000",
    description: "+13% vs Last Year",
    progress: true,
    titleColor: variables.greenColor,
  },
  {
    title: "Expenses",
    number: "700000",
    description: "+5% vs Last Year",
    progress: true,
    titleColor: variables.redColor,
  },
  {
    title: "Investment",
    number: "100000",
    description: "-10% vs Last Year",
    progress: false,
    titleColor: variables.purpuleColor,
  },
  {
    title: "Saving",
    number: "87000",
    description: "+7% vs Last Year",
    progress: true,
    titleColor: variables.emberColor,
  },
];

const { Content } = Layout;
const Dashboard = () => {
  return (
    <div className="layout">
      <Content className="container">
        <Menu />
        <Header />
        <Total />
        <Flex align="center" vertical={false} justify="space-between">
          <Statistics statisticsData={statisticsData} />
        </Flex>
        <DataTable />
      </Content>
    </div>
  );
};

export default Dashboard;
