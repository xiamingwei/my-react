import React from 'react'
import { Menu, Dropdown, Icon  } from 'antd';
import {withRouter} from 'react-router-dom'
import '../../style/Header.scss'

class Header extends React.Component {
    constructor(props, context) {
        super(props)
            
    }

    operateDropdown = (val) => {
        if(val.key === 'logout') {
            this.props.history.push('/login')
        }
    }
  
    render() {
        let menuItem = menus.map(menu => {
            return (
                <Menu.Item key={menu.value}>{menu.label}</Menu.Item>
            )
        })

        let dropdownMenus = (
            <Menu onClick={(item) => {this.operateDropdown(item)}}>
                {menuItem}
            </Menu>
        )   
        return (
            <header className="header">
                <Dropdown overlay={dropdownMenus} placement="bottomCenter">
                    <span>React<Icon type="down" style={{marginLeft: '5px'}}/></span>
                </Dropdown>
            </header>
        )
    }
}

const menus = [{
    label: '我的React',
    value: 'react'
}, {
    label: '退出登录',
    value: 'logout'
}]

export default withRouter(Header)