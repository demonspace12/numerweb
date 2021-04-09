import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

import Home from './home';

import Home2 from './home2';

import './css/layout.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Lay extends React.Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header className="menu">
                        <div className="logo" />

                    </Header>
                    <Content className="design">
                        
                        <Layout className="site-layout-background" >
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                    className="menu"
                                >
                                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1" className="menu">
                                        <Menu.Item key="1"><Link to='/home'>home</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to='/home2'>home2</Link></Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                        <Menu.Item key="5">option5</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                <Route exact path='/home' component={Home}></Route>
                                <Route exact path='/home2' component={Home2}></Route>
                            </Content>
                        </Layout>
                    </Content>
                    
                </Layout>


            </HashRouter>
        );
    }
}
export default Lay