import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './MainLayout.css';
import { Link } from 'react-router-dom';
import ClinicList from '../ClinicList/ClinicList';

const { Header, Content, Footer, Sider } = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

const MenuItem = [
  {
    label: "DASHBOARD",
    key: "dashboard",
    path: '/productManagement/programmeManagement'
   
  },
  {
    label: "LOCATION",
    key: "location",
    path: '/productManagement/programmeManagement'
  },
  {
    label: "CLINIC LIST",
    key: "cliniclist",
    path: '/productManagement/programmeManagement'
  },
  {
    label: "USERS",
    key: "users",
    path: '/productManagement/programmeManagement'
  },
];



const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className='mainlayout-container'>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu  theme="dark" mode="horizontal"  items={MenuItem} />
        <Menu>
          
        </Menu>
      </Header>
      <Content style={{ padding: '0 20px' }}>
        
        <Layout style={{ background: colorBgContainer }}>
          
          <Content style={{  minHeight: 280 }}>
            <ClinicList />
          </Content>
        </Layout>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
    </Layout>
    </div>
  );
};

export default MainLayout;