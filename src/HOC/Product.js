import React, { Component } from 'react'
const Purchase=(Service)=>{
class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            Prodname:"IPhone",
            ProdId:"1000",
            Rate:"70000",
             Company:"Amazon"
        }
    }
    Exchageto=()=>{
        this.setState({
            Prodname:" Samsung",
            ProdId:"2000",
            Rate:"50000",
            Company:"Flipkart"
        })
    }
    // SearchProd=()=>{
    //     this.setState({
    //         Prodname:"",
    //         ProdId :"2000",
    //         Rate:"50000",
    //         Company:"Flipkart"
    //     }
    //     )
    // }

    render() {
        return (
            <div >
                
                <Service
                prod1={this.state.Prodname} 
                prod2={this.state.ProdId}
                prod3={this.state.Rate}
                prod4={this.state.Company}
                exchageto={this.Exchageto}
                prdsearch={this.SearchProd}
                
                />
            </div>
        )
    }
}
return Product;
};

export default Purchase