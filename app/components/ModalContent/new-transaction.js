import { useState } from "react";
import {
  Flex,
  InputNumber,
  DatePicker,
  Segmented,
  Input,
  Tooltip,
  Select,
  Button,
} from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  RiseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import variables from "./../../variables.module.scss";

import "./new-transaction.scss";
const NewTransaction = () => {
  const [selectedSegment, setSelectedSegment] = useState("expense");
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onSegmentedChange = (value) => {
    setSelectedSegment(value);
  };
  const onCategoryChange = (value) => {
    console.log(value);
  };
  return (
    <Flex vertical className="new-transaction-wrapper">
      <InputNumber
        size="large"
        variant="borderless"
        controls={false}
        min={1}
        max={1000000}
        placeholder="0"
      />
      <DatePicker onChange={onDateChange} styles={{}} size="large" />
      <Segmented
        options={[
          {
            label: "Expense",
            value: "expense",
            icon: (
              <ArrowDownOutlined
                style={{
                  color:
                    selectedSegment === "expense"
                      ? variables.redColor
                      : variables.secondaryColor,
                }}
              />
            ),
          },
          {
            label: "Income",
            value: "income",
            icon: (
              <ArrowUpOutlined
                style={{
                  color:
                    selectedSegment === "income"
                      ? variables.greenColor
                      : variables.secondaryColor,
                }}
              />
            ),
          },
          {
            label: "Investment",
            value: "investment",
            icon: (
              <RiseOutlined
                style={{
                  color:
                    selectedSegment === "investment"
                      ? variables.purpuleColor
                      : variables.secondaryColor,
                }}
              />
            ),
          },
        ]}
        value={selectedSegment}
        block
        onChange={onSegmentedChange}
        size="large"
      />
      <Input
        placeholder="Description"
        suffix={
          <Tooltip title={`Description about ${selectedSegment}`}>
            <InfoCircleOutlined
              style={{
                color: "rgba(0,0,0,.45)",
              }}
            />
          </Tooltip>
        }
        size="large"
      />
      <Select
        style={{
          width: "100%",
        }}
        size="large"
        placeholder="Category"
        onChange={onCategoryChange}
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
      <Button
        type="primary"
        size="large"
        block
        style={{
          background: variables.primaryColor,
        }}
      >
        Primary
      </Button>
    </Flex>
  );
};

export default NewTransaction;
