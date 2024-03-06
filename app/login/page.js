"use client";
import { useState } from "react";
import {
  Flex,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Typography,
  Modal,
} from "antd";
import "./login.scss";
import Signup from "./signupForm";

const LoginPage = () => {
  const { Title, Text } = Typography;
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main">
      <div className="container">
        <Flex justify="space-between" vertical align="flex-middle">
          <Title level={2} styles={{ marginBottom: "2rem" }}>
            Login
          </Title>
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="login-form"
          >
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                },
              ]}
            >
              {/* <InputNumber placeholder="mobile" size="large" /> */}
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
            <Text>
              {`Don't have an account,`}{" "}
              <span
                type="link"
                onClick={showModal}
                style={{ color: "#1677ff", cursor: "pointer" }}
              >
                create new account
              </span>
            </Text>
            <Modal
              title="Create Account"
              open={open}
              onCancel={handleCancel}
              footer={null}
            >
              <Signup />
            </Modal>
          </Form>
        </Flex>
      </div>
    </div>
  );
};

export default LoginPage;
