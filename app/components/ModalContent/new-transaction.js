import React, { useState, useEffect, useContext } from "react";
import {
  Flex,
  InputNumber,
  DatePicker,
  Segmented,
  Input,
  Tooltip,
  Select,
  Button,
  message,
  Form,
  Spin,
} from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  RiseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { TransactionDispatchContext } from "@/app/contexts/transaction-context";

import variables from "./../../variables.module.scss";
import dayjs from "dayjs";
import { addTransaction } from "@/app/services/api";
import "./new-transaction.scss";

const NewTransaction = ({ callback, categories, trigger }) => {
  const [selectedSegment, setSelectedSegment] = useState("Expense");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useContext(TransactionDispatchContext);
  const [form] = Form.useForm();

  useEffect(() => {
    if (trigger) {
      form.resetFields();
    }
  }, [trigger]);

  const onDateChange = (date) => {
    form.setFieldsValue({
      date: date,
    });
  };
  const onSegmentedChange = (value) => {
    setSelectedSegment(value);
    form.setFieldsValue({
      type: value,
    });
  };
  const onCategoryChange = (value) => {
    form.setFieldsValue({
      category: value,
    });
  };

  const addNewTransaction = async (values) => {
    setIsLoading(true);
    const transactionData = {
      user_id: parseInt(localStorage.getItem("user")),
      amount: values.amount,
      date: dayjs(values.date).toISOString(),
      type: values.type,
      description: values.description,
      category_id: values.category,
    };
    const response = await addTransaction(transactionData);
    message.success("Transaction added successfully.!");
    callback();
    dispatch({ ...response.data.data, type: "added" });
    setIsLoading(false);
  };

  return (
    <>
      {getSpinner(isLoading)}
      <Flex vertical className="new-transaction-wrapper">
        <Form
          form={form}
          name="login"
          initialValues={{ type: "Expense" }}
          onFinish={addNewTransaction}
        >
          <Form.Item
            name="amount"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              size="large"
              variant="borderless"
              controls={false}
              min={1}
              max={1000000}
              placeholder="0"
              name="amount"
            />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              onChange={onDateChange}
              styles={{}}
              size="large"
              initialValues={dayjs()}
              format="DD-MM-YYYY"
            />
          </Form.Item>
          <Form.Item
            name="type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Segmented
              options={[
                {
                  label: "Expense",
                  value: "Expense",
                  icon: (
                    <ArrowDownOutlined
                      style={{
                        color:
                          selectedSegment === "Expense"
                            ? variables.redColor
                            : variables.secondaryColor,
                      }}
                    />
                  ),
                },
                {
                  label: "Income",
                  value: "Income",
                  icon: (
                    <ArrowUpOutlined
                      style={{
                        color:
                          selectedSegment === "Income"
                            ? variables.greenColor
                            : variables.secondaryColor,
                      }}
                    />
                  ),
                },
                {
                  label: "Investment",
                  value: "Investment",
                  icon: (
                    <RiseOutlined
                      style={{
                        color:
                          selectedSegment === "Investment"
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
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
              },
            ]}
          >
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
              name="description"
            />
          </Form.Item>
          <Form.Item
            name="category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              style={{
                width: "100%",
              }}
              size="large"
              placeholder="Category"
              onChange={onCategoryChange}
              options={categories}
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{
                background: variables.primaryColor,
              }}
            >
              Add Transaction
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </>
  );
};

const getSpinner = (isLoading) => {
  if (isLoading) {
    return <Spin fullscreen="true" size="large" />;
  }
};

export default NewTransaction;
