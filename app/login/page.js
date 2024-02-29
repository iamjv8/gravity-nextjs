"use client";
import { Flex, Button, Checkbox, Form, Input, Typography } from "antd";

import "./login.scss";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Title } = Typography;
  return (
    <div className="main">
      <div className="container">
        <Flex justify="space-between" vertical align="flex-middle">
          <Title level={2} styles={{ h2: { marginBottom: "2rem" } }}>
            Login
          </Title>
          <Form
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
          </Form>
        </Flex>
      </div>
    </div>
  );
};

export default LoginPage;
