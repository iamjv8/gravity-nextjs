import React from "react";
import { Flex, Typography, Space, Table, Tag } from "antd";
import HeaderRow from "./headerRow";

const columns = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];
const data = [
  {
    key: "1",
    description: "Car Petrol",
    type: "expense",
    category: "Car",
    amount: 2300,
  },
  {
    key: "2",
    description: "Vegitables",
    type: "expense",
    category: "Grocery",
    amount: 250,
  },
  {
    key: "3",
    description: "Light Bill",
    type: "expense",
    category: "Essentials",
    amount: 1200,
  },
  {
    key: "4",
    description: "Salary",
    type: "income",
    category: "Salary",
    amount: 80000,
  },
];
const DataTable = () => {
  const { Title } = Typography;

  return (
    <>
      <Flex align="center" vertical={false} className="header-section">
        <Title level={4} className="title">
          Transactions
        </Title>
        <Flex
          justify="end"
          align="center"
          gap="middle"
          className="header-section"
        >
          <HeaderRow />
        </Flex>
      </Flex>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default DataTable;
