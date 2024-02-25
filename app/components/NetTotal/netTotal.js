import { Flex, Typography } from "antd";
const { Title } = Typography;

const Total = () => {
  return (
    <Flex justify="middle" vertical="true">
      <Title level={4}>Net Total</Title>
      <Title level={3}>$5540</Title>
      <Title level={6}>+1.3% from last year</Title>
    </Flex>
  );
};

export default Total;
