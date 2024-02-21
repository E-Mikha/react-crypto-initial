import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Layout, Card, Statistic } from "antd";

const siderStyle = {
  padding: "1rem",
};

export default function AppSider() {
  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Card style={{ marginBottom: "1rem" }}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>

      <Card>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: "#cf1322",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Layout.Sider>
  );
}
