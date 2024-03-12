"use client";
import { Layout, Flex } from "antd";
import { useRouter } from "next/navigation";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
import Total from "../components/Total/total";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import Statistics from "../components/Statistics/statistics";
import { getAllTypes, getAllCategories } from "../services/api";

import "./dashboard.scss";
import { useEffect, useState } from "react";

const { Content } = Layout;
const Dashboard = () => {
  const router = useRouter();
  const [allTypes, setAllTypes] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

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
  const fetchData = async () => {
    const typeResponse = await getAllTypes();
    const categoryResponse = await getAllCategories();
    // if (
    //   typeResponse.response.status === 403 ||
    //   categoryResponse.response.status === 403
    // ) {
    //   router.replace("/login");
    // }
    setAllTypes(typeResponse.data);
    setAllCategories(categoryResponse.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Promise.all([getTypes(), getCategories()]).then(
  //   ([types, categories]) => {

  //   },
  //   (error) => {
  //     if (error.response.status === 403) {
  //       router.replace("/login");
  //     }
  //   }
  // );
  return (
    <div className="layout">
      <Content className="dashboard-container">
        <Menu />
        <Header />
        <Total />
        <Flex align="center" vertical={false} justify="space-between">
          <Statistics statisticsData={statisticsData} />
        </Flex>
        <DataTable types={allTypes} categories={allCategories} />
      </Content>
    </div>
  );
};

export default Dashboard;
