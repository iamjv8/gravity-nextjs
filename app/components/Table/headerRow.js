import React, { useState } from "react";
import { Select, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import NewTransaction from "../ModalContent/new-transaction";
import { setFilteredTransactions } from "./../../redux/transactionSlice";
import { changeSelectedCategory } from "./../../redux/categorySlice";
import { changeSelectedType } from "./../../redux/typeSlice";

const HeaderRow = () => {
  const [open, setOpen] = useState(false);
  const [formResetTrigger, setFormResetTrigger] = useState(0);
  const categories = useSelector((state) => state.category.categories);
  const types = useSelector((state) => state.type.type);
  const allTransactions = useSelector(
    (state) => state.transaction.transactions
  );
  const selectedType = useSelector((state) => state.type.selectedType);
  const dispatch = useDispatch();
  let selectedValues = {
    category: null,
    type: null,
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setFormResetTrigger((formResetTrigger) => formResetTrigger + 1);
    setOpen(false);
  };

  const formatData = (data, labelKey) => {
    let formattedData = data.map((item) => {
      return {
        value: item.id,
        label: item[labelKey],
      };
    });
    formattedData.push({
      value: "all",
      label: "All",
    });
    formattedData.sort((a, b) =>
      a.label > b.label ? 1 : b.label > a.label ? -1 : 0
    );
    return formattedData;
  };

  const handleTypeChange = (event) => {
    selectedValues.type = types.filter((type) => type.id === event);
    if (!selectedValues.type.length) {
      dispatch(setFilteredTransactions(allTransactions));
      return;
    }
    const filteredTransactions = allTransactions.filter(
      (item) => item.typeId === selectedValues.type[0].id
    );
    dispatch(setFilteredTransactions(filteredTransactions));
    dispatch(changeSelectedType(event));
  };

  const handleCategoryChange = (event) => {
    selectedValues.category = categories.filter(
      (category) => category.id === event
    );
    if (!selectedValues.category.length) {
      dispatch(setFilteredTransactions(allTransactions));
      return;
    }
    const filteredTransactions = allTransactions.filter(
      (item) => item.categoryId === selectedValues.category[0].id
    );
    dispatch(setFilteredTransactions(filteredTransactions));
    dispatch(changeSelectedCategory(event));
  };

  return (
    <span>
      <Select
        defaultValue="Type"
        style={{
          width: 120,
        }}
        onChange={handleTypeChange}
        options={formatData(types, "type_name")}
      />
      &nbsp;
      <Select
        defaultValue="Category"
        style={{
          width: 120,
        }}
        onChange={handleCategoryChange}
        options={formatData(
          !selectedType || selectedType === "all"
            ? categories
            : categories.filter((category) => category.typeId === selectedType),
          "category_name"
        )}
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
          trigger={formResetTrigger}
        />
      </Modal>
    </span>
  );
};

export default HeaderRow;
