import { useState } from "react";
import { Flex, Button, Avatar } from "antd";
import {
  CodeSandboxOutlined,
  HomeOutlined,
  DollarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./menu.scss";

const Menu = () => {
  const [selectedMenuItem, selectMenu] = useState(0);

  return (
    <Flex align="center" vertical={false} className="menu">
      <CodeSandboxOutlined className="logo" />
      <Flex className="menu" justify="end" align="center" gap="middle">
        <span className={selectedMenuItem === 0 ? "selected" : "menu-item"}>
          <Button type="Link" onClick={() => selectMenu(0)}>
            <HomeOutlined />
            Home
          </Button>
        </span>
        <span
          className={selectedMenuItem === 1 ? "selected" : "menu-item disabled"}
        >
          <Button type="Link" onClick={() => selectMenu(1)} disabled>
            <DollarOutlined />
            Cashflow
          </Button>
        </span>
        <span
          className={selectedMenuItem === 2 ? "selected" : "menu-item disabled"}
        >
          <Button type="Link" onClick={() => selectMenu(2)} disabled>
            <BarChartOutlined />
            Networth
          </Button>
        </span>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      </Flex>
    </Flex>
  );
};

export default Menu;
