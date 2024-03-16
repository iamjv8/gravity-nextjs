import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Button, Avatar, Drawer } from "antd";
import {
  CodeSandboxOutlined,
  HomeOutlined,
  DollarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./menu.scss";

const Menu = () => {
  const router = useRouter();
  const [selectedMenuItem, selectMenu] = useState(0);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setOpen(false);
    router.replace("/");
  };
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
        <Avatar
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
          onClick={showDrawer}
        />
        <Drawer title="Welcome User" onClose={onClose} open={open}>
          <Button variant="outline" onClick={logout} danger>
            Logout
          </Button>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Menu;
