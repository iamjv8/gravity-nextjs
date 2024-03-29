"use client";
import React from "react";
import { Layout, Flex, Spin } from "antd";
import { useRouter } from "next/navigation";
import { TransactionProvider } from "../contexts/transaction-context";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
import Total from "../components/Total/total";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import Statistics from "../components/Statistics/statistics";
import {
  getAllTypes,
  getAllCategories,
  getAllTransactions,
} from "../services/api";

import "./dashboard.scss";
import { useEffect, useState } from "react";

const { Content } = Layout;
const Dashboard = () => {
  const router = useRouter();
  const [allTypes, setAllTypes] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactionTrigger, setTransactionTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      getAllTypes(),
      getAllCategories(),
      getAllTransactions({ user_id: localStorage.getItem("user") }),
    ]).then(
      ([typeResponse, categoryResponse, transactionsResponse]) => {
        setAllTypes(typeResponse.data);
        setAllCategories(categoryResponse.data);
        setAllTransactions(transactionsResponse.data);
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
    <TransactionProvider initialTransactions={allTransactions}>
      <div className="layout">
        <Content className="dashboard-container">
          <Menu />
          <Header />
          <Total />
          <Flex align="center" vertical={false} justify="space-between">
            <Statistics statisticsData={statisticsData} />
          </Flex>
          <DataTable
            types={allTypes}
            categories={allCategories}
            transactionTrigger={() =>
              setTransactionTrigger(!transactionTrigger)
            }
          />
        </Content>
      </div>
    </TransactionProvider>
  );
};

export default Dashboard;
