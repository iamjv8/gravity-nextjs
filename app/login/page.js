"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Flex,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Typography,
  Modal,
  Spin,
} from "antd";
import "./login.scss";
import Signup from "./signupForm";
import { login } from "../services/api";

const LoginPage = () => {
  const { Title, Text } = Typography;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onFinish = async (values) => {
    setIsLoading(true);
    const response = await login(values);
    localStorage.setItem("token", response.data.token);
    router.push("/dashboard");
    setIsLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return isLoading ? (
    <Spin fullscreen="true" size="large" />
  ) : (
    <div className="login-wrapper">
      <div className="login-container">
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
