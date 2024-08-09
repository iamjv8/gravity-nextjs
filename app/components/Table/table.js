import React from "react";
import { useSelector } from "react-redux";
import { Flex, Typography, Table } from "antd";
import HeaderRow from "./headerRow";

const columns = [
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (text) => <b>{text}</b>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text, record) => <>{getAmount(text, record)}</>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];
const getAmount = (text, record) => {
  if (record.type === "Expense") {
    return <span style={{ color: "red" }}>-${text}</span>;
  } else if (record.type === "Income") {
    return <span style={{ color: "green" }}>+${text}</span>;
  }
};
const DataTable = () => {
  const { Title } = Typography;
  const transactions = useSelector(
    (state) => state.transaction.filteredTransactions
  );

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
      <Table
        columns={columns}
        dataSource={transactions}
        dataIndex="id"
        rowKey="id"
      />
    </>
  );
};

export default DataTable;
