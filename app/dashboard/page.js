"use client";
import { Layout, Flex } from "antd";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
import Total from "../components/Total/total";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import Statistics from "../components/Statistics/statistics";
import { getAllTypes, getAllCategories } from "../services/api";

import "./dashboard.scss";
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
  const getTypes = () => {
    return getAllTypes();
  };

  const getCategories = () => {
    return getAllCategories("/user/12345/permissions");
  };

  Promise.all([getTypes(), getCategories()]).then(([types, categories]) => {
    // console.log(types, categories);
  });
  return (
    <div className="layout">
      <Content className="dashboard-container">
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
