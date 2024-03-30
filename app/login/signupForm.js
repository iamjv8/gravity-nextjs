/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { signup } from "../services/api";

const Signup = () => {
  const onFinish = async (values) => {
    const data = await signup(values);
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signup-container">
      <Form
        name="signup"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="signup-form"
      >
        <Form.Item
          name="display_name"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input placeholder="Full Name" size="large" />
        </Form.Item>
        <Form.Item
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please input your mobile number!",
            },
          ]}
        >
          <InputNumber
            placeholder="Mobile Number"
            size="large"
            controls={false}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please confirm password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
