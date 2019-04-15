import React from 'react'
import { Input, Checkbox } from 'antd'
import '../style/List.scss'

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function ProductTilte(props) {
    return <h4>{props.category}</h4>
}

function OneProduct(props) {
    return (
        <div className="product-list">
            <p className={!props.stocked ? "highlight-product" : ""}>{props.name}</p>
            <p style={{marginLeft: 10}}>{props.price}</p>
        </div>
    )
}

function SideBar(props) {
    return props.children
}

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: products,
            saveProducts: products,
            isChecked: false,
            search: ''
        }
    }

    filterProducts = (stockStatus = this.state.isChecked, search = this.state.search) => {
        let isFilter = stockStatus || search
        let filters = []
        if(isFilter) {
            for(let product of this.state.saveProducts) {
                if(stockStatus && product.stocked !== stockStatus) continue
                if(search && product.name.indexOf(search) === -1) continue
                filters.push(product)
            }
            this.setState({
                products: filters
            })
        } else {
            this.setState({
                products: this.state.saveProducts
            })
        }
    }

    onChange = (e) => {
        let checked = e.target.checked
        this.setState({
            isChecked: checked
        }, () => {
            this.filterProducts(this.state.isChecked, this.state.search)
        })   
    }

    inputOnChange = (e) => {
        let search = e.target.value
        this.setState({
            search: search
        }, () => {
            this.filterProducts(this.state.isChecked, this.state.search)
        })
    }

    render() {
        let myProducts = this.state.products.map((product, index) => {
            return (
                <div key={product.name} >
                    {(index === 0 || index === 3) && <ProductTilte category={product.category}></ProductTilte>}
                    <OneProduct stocked={product.stocked} name={product.name} price={product.price}></OneProduct>
                </div>
            )
        })

        return (
            <div>
                <SideBar>
                    <Input onChange={this.inputOnChange} placeholder="请输入检索的商品"></Input>
                    <Checkbox onChange={this.onChange}>Only show products in stock</Checkbox>
                </SideBar>
                <div>
                    {myProducts}
                </div>
            </div>
        )
    }
}

export default Detail