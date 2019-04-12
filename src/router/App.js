import React from 'react'
import Header from '../views/home/Header.js'
import Side from '../views/home/Side.js'
import '../style/App.scss'

class App extends React.Component {
    constructor(props, context) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="index-main">
                    <Side></Side>
                    <div className="index-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default App