import { Flex, Typography, Statistic, Progress } from "antd";
import "./total.scss";

const Total = () => {
  return (
    <Flex align="center" vertical={false} className="total-section">
      <Statistic
        title="Net Total"
        value={112893}
        precision={2}
        suffix={<span className="details"> +1.3% from last year</span>}
        className="statistics"
      />
      <Flex justify="end" align="center" gap="middle" className="total-section">
        <Progress percent={100} />
      </Flex>
    </Flex>
  );
};

export default Total;
