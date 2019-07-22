import React, { Component } from 'react';
import './style.css'
import OrderItem from '../OrderItem'

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('/mock/order.json').then((res)=>{
            // console.log(res)
            if(res.ok){
                res.json().then((data)=>{
                    this.setState({
                        data
                    })
                })
            }
        })
    }
    render() { 
        return (
            <div className="orderlist">
                {
                    this.state.data.map((item)=>{
                        return (<OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>)
                    })
                }
            </div>
        );
    }
    handleSubmit=(id,comment,stars)=>{
        fetch('/saveComment').then(()=>{
            
        })
        const newData=this.state.data.map(item=>{
            return item.id===id?
            {
                ...item,comment,stars,ifCommented:true
            }:item;
        });
        this.setState({
            data:newData
        })
    }
}
 
export default OrderList;