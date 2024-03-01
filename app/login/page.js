"use client";
import { useEffect } from "react";
import {
  AuthorizerProvider,
  Authorizer,
} from "@authorizerdev/authorizer-react";
import { Flex, Button, Checkbox, Form, Input, Typography } from "antd";

import "./login.scss";

const Profile = () => {};

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title } = Typography;

  // let redirectURL = "";
  // useEffect(() => {
  //   redirectURL = `${window.location.origin}/dashboard`;
  // });
  return (
    <div className="main">
      <div className="container">
        <Flex justify="space-between" vertical align="flex-middle">
          <Title level={2} styles={{ h2: { marginBottom: "2rem" } }}>
            Login
          </Title>
          <AuthorizerProvider
            config={{
              authorizerURL: "https://authorizer-oknc.onrender.com",
              redirectURL: "https://gravity-nextjs.onrender.com",
              clientID: "13371d2a-ba7e-46f3-bb4d-e23d16b0b5a6", // obtain your client id from authorizer dashboard
              extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
            }}
          >
            <Authorizer />
            <Profile />
          </AuthorizerProvider>
          {/* <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="login-form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Username" size="large" />
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
          </Form> */}
        </Flex>
      </div>
    </div>
  );
};

export default LoginPage;
