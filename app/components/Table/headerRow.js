import React, { useState } from "react";
import { Select, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NewTransaction from "../ModalContent/new-transaction";

const HeaderRow = (props) => {
  const { types, categories } = props;
  // console.log(types, categories);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const formatData = (data, labelKey) => {
    const formattedData = data.map((item) => {
      return {
        value: item.id,
        label: item[labelKey],
      };
    });
    formattedData.sort((a, b) =>
      a.label > b.label ? 1 : b.label > a.label ? -1 : 0
    );
    return formattedData;
  };

  console.log(formatData(categories, "category_name"));

  return (
    <span>
      <Select
        defaultValue="Type"
        style={{
          width: 120,
        }}
        //   onChange={handleChange}
        options={formatData(types, "type")}
      />
      &nbsp;
      <Select
        defaultValue="Category"
        style={{
          width: 120,
        }}
        //   onChange={handleChange}
        options={formatData(categories, "category_name")}
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
        <NewTransaction
          callback={handleCancel}
          categories={formatData(categories, "category_name")}
        />
      </Modal>
    </span>
  );
};

export default HeaderRow;
