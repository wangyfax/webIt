/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu, Row, Col, Input } from "antd";
import Carousels from "./component/Carousel/Carousel";
const { Search } = Input;
const { Header, Content } = Layout;

const { SubMenu } = Menu;
class App extends React.Component {
  state = {
    current: "mail",
    //imgs: [img1, img2, img3, img4, img5, img6, img7, img8],
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout
        className="App"
        data-test="holin"
        data-testid="holin"
        title="holin"
      >
        <Header style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="logo">
            <span>Holin</span>
          </div>
          <Menu
            // theme="dark"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">网站首页</Menu.Item>
            <Menu.Item key="app">技术分享</Menu.Item>
            <SubMenu title="个人博客">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">时间轴</Menu.Item>
            <Menu.Item key="about_me">关于我</Menu.Item>
          </Menu>
          <Search
            className="search"
            placeholder="请输入关键字"
            onSearch={(value) => console.log(value)}
          />
        </Header>
        <Content className="content" style={{ padding: "0 50px" }}>
          <Row>
            <Col span={12}>
              {/* autoplay */}
              <Carousels></Carousels>
            </Col>
            <Col span={8}>col</Col>
            <Col span={4}>col</Col>
          </Row>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    );
  }
}

export default App;
