import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";



import Bisection from './componentjs/Bisection';
import false_po from './componentjs/False_position';
import One_point from './componentjs/One_point';
import Cramer_r from './componentjs/Cramer_r';
import Newton_r from './componentjs/Newton_rap';
import Secant from './componentjs/Secant';
import Gauss_em from './componentjs/Gauss_em';
import Gauss_jordan from './componentjs/Gauss_jordan';
import Ludecom from './componentjs/Ludecom';
import Jacobi from './componentjs/Jacobi';
import Gauss_seidel from './componentjs/Guass_seidel';
import Conjugate from './componentjs/Conjugate';
import Newton_devide from './componentjs/์Newton_devide';
import Lagrange from './componentjs/Lagrange';
import Spline from './componentjs/Spline';
import Linear from './componentjs/Linear';
import Polynomial from './componentjs/Polynomial';
import Multiple from './componentjs/Multiple';
import Swagersee from './model/swager'



import './css/layout.css';









const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Lay extends React.Component {
    render() {
        return (
            <HashRouter>

                <Layout>

                    <Layout>
                        <Sider width={200} className="site-layout-background">

                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                className="menu"
                                theme="dark"
                            >
                                <SubMenu key="sub1" title="Root of equation" className="menu">
                                    <Menu.Item key="1"><Link to='/componentjs/Bisection'>Bisection</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/componentjs/False_position'>False-Position</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to='/componentjs/One_point'></Link> One-point iteration</Menu.Item>
                                    <Menu.Item key="4"><Link to='/componentjs/Newton_rap'></Link>Newton Raphson</Menu.Item>
                                    <Menu.Item key="5"><Link to='/componentjs/Secant'></Link>Secant</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title="matrix">
                                    <Menu.Item key="6"><Link to='/componentjs/Cramer_r'></Link>Cramer</Menu.Item>
                                    <Menu.Item key="7"><Link to='/componentjs/Gauss_em'></Link>Guass-Eli</Menu.Item>
                                    <Menu.Item key="8"><Link to='/componentjs/Gauss_jordan'></Link>Gauss-jordan</Menu.Item>
                                    <Menu.Item key="9"><Link to='/componentjs/Ludecom'></Link>LU-Decompo</Menu.Item>
                                    <Menu.Item key="10"><Link to='/componentjs/Jacobi'></Link>Jacobi</Menu.Item>
                                    <Menu.Item key="11"><Link to='/componentjs/Gauss_seidel'></Link>Gauss_seidel</Menu.Item>
                                    <Menu.Item key="12"><Link to='/componentjs/Conjugate'></Link>Conjugate</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title="Interpolation">
                                    <Menu.Item key="13"><Link to='/componentjs/Newton_devide'></Link>Newton-Devide</Menu.Item>
                                    <Menu.Item key="14"><Link to='/componentjs/Lagrange'></Link>Lagrange</Menu.Item>
                                    <Menu.Item key="15"><Link to='/componentjs/Spline'></Link>Spline</Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub4" title="Regresstion">
                                    <Menu.Item key="16"><Link to='/componentjs/Linear'></Link>Linear</Menu.Item>
                                    <Menu.Item key="17"><Link to='/componentjs/Polynomial'></Link>Polynomial</Menu.Item>
                                    <Menu.Item key="18"><Link to='/componentjs/Multiple'></Link>Multiple</Menu.Item>


                                </SubMenu>
                                <Menu.Item key="19" ><Link to='/model/swager'></Link>
                                        Swager
                                </Menu.Item>
                            </Menu>
                        </Sider>

                        <Content
                            className="site-layout-background bg"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 720,
                            }}
                        >

                            <Route exact path='/componentjs/Bisection' component={Bisection}></Route>
                            <Route exact path='/componentjs/False_position' component={false_po}></Route>
                            <Route exact path='/componentjs/One_point' component={One_point}></Route>
                            <Route exact path='/componentjs/Cramer_r' component={Cramer_r}></Route>
                            <Route exact path='/componentjs/Newton_rap' component={Newton_r}></Route>
                            <Route exact path='/componentjs/Secant' component={Secant}></Route>
                            <Route exact path='/componentjs/Gauss_em' component={Gauss_em}></Route>
                            <Route exact path='/componentjs/Gauss_jordan' component={Gauss_jordan}></Route>
                            <Route exact path='/componentjs/Ludecom' component={Ludecom}></Route>
                            <Route exact path='/componentjs/Jacobi' component={Jacobi}></Route>
                            <Route exact path='/componentjs/Gauss_seidel' component={Gauss_seidel}></Route>
                            <Route exact path='/componentjs/Conjugate' component={Conjugate}></Route>
                            <Route exact path='/componentjs/Newton_devide' component={Newton_devide}></Route>
                            <Route exact path='/componentjs/Lagrange' component={Lagrange}></Route>
                            <Route exact path='/componentjs/Spline' component={Spline}></Route>
                            <Route exact path='/componentjs/Linear' component={Linear}></Route>
                            <Route exact path='/componentjs/Polynomial' component={Polynomial}></Route>
                            <Route exact path='/componentjs/Multiple' component={Multiple}></Route>
                            <Route exact path='/model/swager' component={Swagersee}></Route>
                        </Content>

                    </Layout>
                </Layout>


            </HashRouter>
        );
    }
}
export default Lay