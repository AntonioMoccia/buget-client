import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, theme, Button } from 'antd';
import React, { useState } from 'react';
import Menu from './Menu/index'
import { Link } from 'react-router-dom'


const { Header, Content, Footer } = Layout;

const LayoutApp = ({ ContentChild }) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout hasSider>
      <Menu />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
        <Content
          style={{
            overflow: 'initial',
          }}
        >
          <div className="App flex align-middle justify-center pt-7 bg-indigo-100 min-h-screen">
            <div className="w-[80vw]">
              {ContentChild}
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Antonio Moccia
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutApp;