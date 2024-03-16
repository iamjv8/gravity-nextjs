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
const DataTable = (props) => {
  const { Title } = Typography;
  const { types, categories, transactions, transactionTrigger } = props;
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
          <HeaderRow
            types={types}
            categories={categories}
            transactionTrigger={transactionTrigger}
          />
        </Flex>
      </Flex>
      <Table columns={columns} dataSource={transactions} dataIndex="id" />
    </>
  );
};

export default DataTable;
