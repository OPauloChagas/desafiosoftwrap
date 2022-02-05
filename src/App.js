import { Layout } from "antd";
import { UserTable, Header as HeaderContent } from "./Containers";
const { Header, Content } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Content>
          <UserTable />
        </Content>
      </Layout>
    </>
  );
};

export default App;
