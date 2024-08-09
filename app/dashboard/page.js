"use client";
import React from "react";
import { Layout, Flex, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
// import Total from "../components/Total/total";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import Statistics from "../components/Statistics/statistics";
import {
  getAllTypes,
  getAllCategories,
  getAllTransactions,
  getStatistics,
} from "../services/api";
import "./dashboard.scss";
import { useEffect, useState } from "react";
import { setCategories } from "../redux/categorySlice";
import { setType } from "../redux/typeSlice";
import {
  setAllTransactions,
  setFilteredTransactions,
} from "../redux/transactionSlice";

const { Content } = Layout;
const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [statisticsData, setStatisticsData] = useState([]);
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);
  const allTypes = useSelector((state) => state.type);

  const setStatistics = (data) => {
    setStatisticsData([
      {
        title: "Income",
        number: data.income,
        description: "+13% vs Last Year",
        progress: true,
        titleColor: variables.greenColor,
      },
      {
        title: "Expenses",
        number: data.expense,
        description: "+5% vs Last Year",
        progress: true,
        titleColor: variables.redColor,
      },
      {
        title: "Investment",
        number: data.investment,
        description: "-10% vs Last Year",
        progress: false,
        titleColor: variables.purpuleColor,
      },
      {
        title: "Saving",
        number: data.saving,
        description: "+7% vs Last Year",
        progress: true,
        titleColor: variables.emberColor,
      },
    ]);
  };
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getAllTypes(),
      getAllCategories(),
      getAllTransactions({ user_id: localStorage.getItem("user") }),
      getStatistics({ user_id: localStorage.getItem("user") }),
    ]).then(
      ([
        typeResponse,
        categoryResponse,
        transactionsResponse,
        statisticsResponse,
      ]) => {
        dispatch(setType(typeResponse.data));
        dispatch(setCategories(categoryResponse.data));
        dispatch(setAllTransactions(transactionsResponse.data));
        dispatch(setFilteredTransactions(transactionsResponse.data));
        // console.log(statisticsResponse);
        setStatistics(statisticsResponse.data);
        setIsLoading(false);
      },
      (error) => {
        if (error.response.status === 403) {
          router.replace("/");
        }
      }
    );
  }, []);

  return isLoading ? (
    <Spin fullscreen="true" size="large" />
  ) : (
    // <TransactionProvider initialTransactions={allTransactions}>
    <div className="layout">
      <Content className="dashboard-container">
        <Menu />
        <Header />
        {/* <Total /> */}
        <Flex align="center" vertical={false} justify="space-between">
          <Statistics statisticsData={statisticsData} />
        </Flex>
        <DataTable types={allTypes} categories={allCategories} />
      </Content>
    </div>
    // </TransactionProvider>
  );
};

export default Dashboard;
