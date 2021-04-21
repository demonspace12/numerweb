import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";



import Bisection from './componentjs/Bisection';
import false_po from './componentjs/False_position';
import One_point from './componentjs/One_point';
import Cramer_r from './componentjs/Cramer_r';

import Home2 from './home2';

import './css/layout.css';
//import { import } from 'mathjs';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Lay extends React.Component {
    render() {
        return (
            <HashRouter>
                
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <div className="numer">
                                Numer
                            </div>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                className="menu"
                            >
                                <SubMenu key="sub1"  title="Root of equation" className="menu">
                                    <Menu.Item key="1"><Link to='/componentjs/Bisection'>Bisection</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/componentjs/False_position'>False-Position</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/componentjs/One_point'></Link> One-point iteration</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="matrix">
                                    <Menu.Item key="5"><Link to='/componentjs/Cramer_r'></Link>Cramer</Menu.Item>
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
                        
                            <Content
                                className="site-layout-background bg"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 657,
                                }}
                            >
                                <Route exact path='/componentjs/Bisection' component={Bisection}></Route>
                                <Route exact path='/componentjs/False_position' component={false_po}></Route>
                                <Route exact path='/componentjs/One_point' component={One_point}></Route>
                                <Route exact path='/componentjs/Cramer_r' component={Cramer_r}></Route>
                            </Content>
                        
                    </Layout>
                </Layout>


            </HashRouter>
        );
    }
}
export default Lay