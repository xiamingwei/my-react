import { Menu, Icon, Layout } from 'antd';
import React from 'react'
import '../../style/Side.scss'
import pages from '../../router/Menu.js'
import { withRouter } from 'react-router-dom'

class Side extends React.Component {
    constructor(props, context) {
        super(props)
        const { location } = props
        let route = location.pathname
        let defaultKeys = []
        // 展开菜单栏
        pages.menus.forEach((menu, index) => {
            if(menu.children) {
                menu.children.forEach(m => {
                    if(m.key === route) {
                        defaultKeys.push(index.toString())
                    }
                })
            }
        })
        this.state = {
            collapsed: false,
            route: route,
            defaultOpenKeys: defaultKeys
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    goRoute = (route) => {
        this.props.history.push(route.key)
    } 

    render() {
        let selectKey = this.state.route !== "/" ? this.state.route : "/list";

        return (
            <div>
                <Sider collapsed={this.state.collapsed} trigger={null}>
                    <div className="collapsed-area" onClick={this.toggleCollapsed}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} className="collapsed-button"/>
                    </div>
                    <Menu
                        defaultOpenKeys={this.state.defaultOpenKeys}
                        defaultSelectedKeys={[selectKey]}
                        mode="inline"
                        theme="dark"
                        className="index-menu"
                        onSelect={(item) => { this.goRoute(item) }}
                        >
                        {MenuItems}
                    </Menu>
                </Sider>
            </div>
    )
  }
}
const { Sider } = Layout
const SubMenu = Menu.SubMenu;


const MenuItems = pages.menus.map((menu, index) => {
    if(menu.children) {
        let menuItems = menu.children.map(m => {
            return (
                <Menu.Item key={m.key}>
                    {m.name}
                </Menu.Item>
            )
        })
        return (
            <SubMenu key={index} title={<span><Icon type={menu.icon}></Icon><span>{menu.name}</span></span>}>
                   {menuItems}
            </SubMenu>
        )
    } else {
        return (
            <Menu.Item key={menu.key}>
                <Icon type={menu.icon}></Icon>
                <span>{menu.name}</span>
            </Menu.Item>
        )
    }
})

export default withRouter(Side)