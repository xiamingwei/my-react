import asyncComponent from '../util/aysncComponent.js'
const Detail = asyncComponent(() =>import("../views/Detail.js"))
const List = asyncComponent(() =>import("../views/List.js"))
const Login = asyncComponent(() =>import("../views/Login.js"))
const Riven = asyncComponent(() =>import("../views/Riven.js"))
const Zed = asyncComponent(() =>import("../views/Zed.js"))

const pages = {
    singlePages: [{
        name: '登录',
        key: '/login',
        component: Login
    }],

    menus: [{
        name: '列表',
        key: '/list',
        icon: 'pie-chart',
        component: List
    },{
        name: '详情',
        key: '/detail',
        icon: 'desktop',
        component: Detail
    },{
        name: 'Heros',
        icon: 'inbox',
        children: [{
            name: 'Riven',
            key: '/riven',
            component: Riven
        }, {
            name: 'Zed',
            key: '/zed',
            component: Zed
        }]
    }]
    
}

export default pages