import React, { Component } from 'react'
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  GithubOutlined,
  FacebookOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export class TabForm extends Component {
    state = {
        current: 'portfolio',
    };
    render() {
        return (
            <Menu selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="portfolio">
              <HeartOutlined />
              PORTFOLIO || FAVORITE ^_^
            </Menu.Item>
            <Menu.Item key="work" disabled={false}>
              <AppstoreOutlined />
              WORK_PRODUCTs
            </Menu.Item>

            <SubMenu
              key="about"
              title={
                <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  ABOUT
                </span>
              }
            >
              <Menu.ItemGroup title="Education">
                <Menu.Item key="setting:1">University</Menu.Item>
                <Menu.Item key="setting:2">High School</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="All about my self">
                <Menu.Item key="setting:3">Address</Menu.Item>
                <Menu.Item key="setting:4">Experance</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="github">
              <GithubOutlined />
              <a href="https://github.com/apisitaom" target="_gitgub">
                GitHub
              </a>
            </Menu.Item>
            <Menu.Item key="facebook">
              <FacebookOutlined />
              <a href="https://web.facebook.com/apisit.prompha" target="_facebook" rel="noopener noreferrer">
                Facebook
              </a>
            </Menu.Item>
          </Menu>
        )
    }
}

export default TabForm
