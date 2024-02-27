import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import variables from "./../../variables.module.scss";
const Stat = (props) => {
  const { title, number, description, progress, valueColor } = props;
  return (
    <>
      <Statistic
        title={title}
        value={number}
        precision={2}
        className="statistics"
        valueStyle={{ color: valueColor }}
      />
      {progress ? (
        <ArrowUpOutlined style={{ color: variables.greenColor }} />
      ) : (
        <ArrowDownOutlined style={{ color: variables.redColor }} />
      )}
      <span className="details">{description}</span>
    </>
  );
};

export default Stat;
