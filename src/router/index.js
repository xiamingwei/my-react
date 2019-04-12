import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import Pages from './Menu.js'
import App from './App.js'

class Main extends React.Component {
    constructor(props, context) {
        super(props);
        this.titleObj = {}
    }

    componentWillReceiveProps(props) {
        const { location } = props
        window.document.title = this.titleObj[location.pathname]
    }

    render () {
        let singleList = Pages.singlePages.map((single, index) => {
            this.titleObj[single.key] = single.name
            return (
                <Route key={index} path={single.key} component={single.component}></Route>
            )
        })

        let routes = []
        Pages.menus.forEach((menu, index) => {
            if(menu.children && menu.children.length > 0) {
                menu.children.forEach((m, i) => {
                    this.titleObj[m.key] = m.name
                    let route = <Route key={ index + '-' + i } path={m.key} component={m.component}></Route>
                    routes.push(route)
                })
            } else {
                this.titleObj[menu.key] = menu.name
                let route = <Route key={index} path={menu.key} component={menu.component}></Route>
                routes.push(route)
            }
        })

        return (
            <Switch>
                {singleList}
                <App>
                    <Switch>
                        {routes}
                        <Redirect to="/list"></Redirect>
                    </Switch>
                </App>
            </Switch>
        )
    }
}


export default Main
