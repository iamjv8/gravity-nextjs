import React from "react";
import { Statistic, Card } from "antd";
// import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
// import variables from "./../../variables.module.scss";
import "./statistics.scss";
const Stat = (props) => {
  // const { title, number, description, progress, titleColor } = props;
  const { title, number, titleColor } = props;
  return (
    <>
      <Statistic
        title={
          <span
            style={{ color: titleColor, fontSize: "16px", fontWeight: 600 }}
          >
            {title}
          </span>
        }
        value={number}
        precision={2}
        className="statistics"
        valueStyle={{ fontSize: "18px" }}
      />
      {/* <span className="statistics-details">
        {progress ? (
          <ArrowUpOutlined style={{ color: variables.greenColor }} />
        ) : (
          <ArrowDownOutlined style={{ color: variables.redColor }} />
        )}
        {description}
      </span> */}
    </>
  );
};

const Statistics = (props) => {
  const { statisticsData } = props;
  return statisticsData.map((item, index) => {
    return (
      <Card
        key={`State-${index}`}
        bordered={false}
        styles={{ body: { paddingLeft: 0 } }}
        className="statistics-card"
        style={{ boxShadow: "none" }}
      >
        {" "}
        <Stat
          title={item.title}
          number={item.number}
          precision={2}
          description={item.description}
          progress={item.progress}
          titleColor={item.titleColor}
        />
      </Card>
    );
  });
};

export default Statistics;
