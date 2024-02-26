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
            defaultValue="2024"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "2020",
                label: "2020",
              },
              {
                value: "2021",
                label: "2021",
              },
              {
                value: "2022",
                label: "2022",
              },
              {
                value: "2023",
                label: "2023",
              },
              {
                value: "2024",
                label: "2024",
              },
            ]}
          />
        </span>
      </Flex>
    </Flex>
  );
};

export default Header;
