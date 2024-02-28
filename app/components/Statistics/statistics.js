import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import variables from "./../../variables.module.scss";
import "./statistics.scss";
const Stat = (props) => {
  const { title, number, description, progress, titleColor } = props;
  return (
    <>
      <Statistic
        title={
          <span style={{ color: titleColor, fontSize: "16px" }}>{title}</span>
        }
        value={number}
        precision={2}
        className="statistics"
        valueStyle={{ fontSize: "18px" }}
      />
      <span className="statistics-details">
        {progress ? (
          <ArrowUpOutlined style={{ color: variables.greenColor }} />
        ) : (
          <ArrowDownOutlined style={{ color: variables.redColor }} />
        )}
        {description}
      </span>
    </>
  );
};

export default Stat;
