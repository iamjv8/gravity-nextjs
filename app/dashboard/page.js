"use client";
import { Layout, Flex, Card } from "antd";
import Menu from "../components/Menu/menu";
import Header from "../components/Header/header";
import Total from "../components/Total/total";
import Stat from "../components/Statistics/statistics";
import variables from "./../variables.module.scss";
import DataTable from "../components/Table/table";
import "./dashboard.scss";

const { Content } = Layout;
const Dashboard = () => {
  return (
    <div className="layout">
      <Content className="container">
        <Menu />
        <Header />
        <Total />
        <Flex align="center" vertical={false} justify="space-between">
          <Card
            bordered={false}
            styles={{ body: { paddingLeft: 0 } }}
            className="statistics-card"
            style={{ boxShadow: "none" }}
          >
            <Stat
              title="Income"
              number="137000"
              description="+13% vs Last Year"
              progress={true}
              titleColor={variables.greenColor}
            />
          </Card>
          <Card
            bordered={false}
            styles={{ body: { paddingLeft: 0 } }}
            className="statistics-card"
            style={{ boxShadow: "none" }}
          >
            <Stat
              title="Expenses"
              number="37000"
              description="-10% vs Last Year"
              progress={false}
              titleColor={variables.redColor}
            />
          </Card>
          <Card
            bordered={false}
            styles={{ body: { paddingLeft: 0 } }}
            className="statistics-card"
            style={{ boxShadow: "none" }}
          >
            <Stat
              title="Investment"
              number="110000"
              description="-8% vs Last Year"
              progress={false}
              titleColor={variables.redColor}
            />
          </Card>
          <Card
            bordered={false}
            styles={{ body: { paddingLeft: 0 } }}
            className="statistics-card"
            style={{ boxShadow: "none" }}
          >
            <Stat
              title="Saving"
              number="20000"
              description="+3% vs Last Year"
              progress={true}
              titleColor={variables.greenColor}
            />
          </Card>
        </Flex>
        <DataTable />
      </Content>
    </div>
  );
};

export default Dashboard;
