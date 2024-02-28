import React, { useState } from "react";
import {
  Flex,
  Typography,
  Space,
  Table,
  Tag,
  Select,
  Button,
  Modal,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const DataTable = () => {
  const { Title } = Typography;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
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
          <span>
            <Select
              defaultValue="Type"
              style={{
                width: 120,
              }}
              //   onChange={handleChange}
              options={[
                {
                  value: "2020",
                  label: "2020",
                },
                {
                  value: "2021",
                  label: "2021",
                },
                {
                  value: "2022",
                  label: "2022",
                },
                {
                  value: "2023",
                  label: "2023",
                },
                {
                  value: "2024",
                  label: "2024",
                },
              ]}
            />
            &nbsp;
            <Select
              defaultValue="Category"
              style={{
                width: 120,
              }}
              //   onChange={handleChange}
              options={[
                {
                  value: "2020",
                  label: "2020",
                },
                {
                  value: "2021",
                  label: "2021",
                },
                {
                  value: "2022",
                  label: "2022",
                },
                {
                  value: "2023",
                  label: "2023",
                },
                {
                  value: "2024",
                  label: "2024",
                },
              ]}
            />
            &nbsp;
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="default"
              style={{ background: "black" }}
              onClick={showModal}
            >
              Add
            </Button>
            <Modal
              title="Title"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
            </Modal>
          </span>
        </Flex>
      </Flex>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default DataTable;
