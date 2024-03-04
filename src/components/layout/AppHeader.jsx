import { Layout } from "antd";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "1rem",
  display: "flex",
  background: "white",
  justifyContent: "space-beetween",
  alignItems: "center",
};

export default function AppHeader() {
  return <Layout.Header style={headerStyle}>Header</Layout.Header>;
}
