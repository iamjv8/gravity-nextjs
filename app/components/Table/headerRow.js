import React, { useState } from "react";
import { Select, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NewTransaction from "../ModalContent/new-transaction";

const HeaderRow = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
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
        title="New Transaction"
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
        <NewTransaction />
      </Modal>
    </span>
  );
};

export default HeaderRow;
