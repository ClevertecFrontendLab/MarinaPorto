import React, { useState, useEffect } from 'react';

import logo from './img/logo.png';
import logomob from './img/logo-mob.png';
import calendar from './img/icon-calendar.svg';
import heart from './img/heart.svg';
import achiv from './img/achiv.svg';
import profile from './img/profile.svg';
import exit from './img/exit.svg';

import './main-page.css';
import { Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { HeaderInner } from "../../components/header/header"
import { MainDescriptionCard } from '../../components/main-description-card/main-description-card';
import { MainSloganCard } from '../../components/main-slogan-card/main-slogan-card';
import { MainActivityCards } from '../../components/main-activity-cards/main-activity-cards';
import { AppLinkCard } from '../../components/app-link-card/app-link-card';
import { NavLink } from 'react-router-dom';
const { Header, Sider, Content, Footer } = Layout;


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dataTest = windowWidth > 400 ? 'sider-switch' : 'sider-switch-mobile';
    return (
        <>
            <div className="wrapper">
                <Layout className="antd_slider_menu">
                    <Sider trigger={null} collapsible collapsed={collapsed} width={208} collapsedWidth={64} className="sider-fit">
                        <div className="logo">
                            {
                                collapsed ? <img src={logomob} alt="logo" /> : <img src={logo} alt="logo" />
                            }
                        </div>
                        <Menu
                            mode="inline"
                            items={[
                                {
                                    key: '1',
                                    icon: <img src={calendar} alt="calendar" />,
                                    label: 'Календарь',
                                },
                                {
                                    key: '2',
                                    icon: <img src={heart} alt="heart" />,
                                    label: 'Тренировки',
                                },
                                {
                                    key: '3',
                                    icon: <img src={achiv} alt="achiv" />,
                                    label: 'Достижения',
                                },
                                {
                                    key: '4',
                                    icon: <img src={profile} alt="profile" />,
                                    label: 'Профиль',
                                },
                            ]}
                        />
                        <div className='exit-block'>
                            <Menu
                                mode="inline"
                                items={[
                                    {
                                        key: '5',
                                        icon: <img src={exit} alt="exit" />,
                                        label: 'Выход',
                                    }
                                ]}
                            />
                        </div>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            <div className={collapsed ? 'trigger trigger-btn trigger-btn-collapsed' : " trigger trigger-btn trigger-btn-open"} data-test-id={dataTest} onClick={() => setCollapsed(!collapsed)}>
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </div>
                            <HeaderInner />
                        </Header>
                        <Content className="site-layout-background main-content">
                            <MainDescriptionCard />
                            <MainSloganCard />
                            <MainActivityCards />
                        </Content>
                        <Footer>
                            <NavLink to={"#"} className="footer-link">Смотреть отзывы</NavLink>
                            <AppLinkCard />
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        </>
    );
};
