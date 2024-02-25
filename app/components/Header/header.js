import { Flex, Select, Typography } from "antd";
import "./header.scss";
const { Title } = Typography;

const Header = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Flex align="center" vertical={false} className="header-section">
      <Title level={3} className="title">
        Summary
      </Title>
      <Flex
        justify="end"
        align="center"
        gap="middle"
        className="header-section"
      >
        <span>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
        </span>
      </Flex>
    </Flex>
  );
};

export default Header;
