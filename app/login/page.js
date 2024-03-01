"use client";
import {
  AuthorizerProvider,
  Authorizer,
} from "@authorizerdev/authorizer-react";
import { useRouter } from "next/navigation";
import { Flex, Typography } from "antd";
import "./login.scss";

const LoginPage = () => {
  const router = useRouter();
  const onLoginSuccess = (values) => {
    router.push("/dashboard");
  };

  const { Title } = Typography;
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
              redirectURL: "https://gravity-nextjs.onrender.com/dashboard",
              clientID: "13371d2a-ba7e-46f3-bb4d-e23d16b0b5a6", // obtain your client id from authorizer dashboard
              extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
            }}
          >
            <Authorizer onLogin={onLoginSuccess} />
          </AuthorizerProvider>
        </Flex>
      </div>
    </div>
  );
};

export default LoginPage;
