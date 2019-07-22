import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing:false,
            stars:props.data.stars||0,
            comment:props.data.comment||""
        }
        this.handleCommentChange=this.handleCommentChange.bind(this)
    }
    render() {
        const {shop,product,price,picture,ifCommented}=this.props.data;
        return (
            <div className="orderitem">
                <div style={{display:'flex',alignItems: 'center'}}>
                    <div className="orderitem_pic">
                        <img src={picture} alt=""/>
                    </div>
                    <div className="orderitem_cont">
                        <div className="orderitem_name">{product}</div>
                        <div className="orderitem_shop">{shop}</div>
                        <div className="orderitem_detail">
                            <span className="orderitem_price">￥{price}</span>
                            {
                                ifCommented?(
                                    <button className="orderitem_btn orderitem_btn-grey">已评价</button>
                                ):(
                                    <button className="orderitem_btn orderitem_btn-red" onClick={this.handleOpenEdit}>评价</button>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
                {this.state.editing?this.renderEditArea():null}
            </div>
        );
    }
    renderEditArea(){
        return(
            <div className="orderitem_commentCont">
                <textarea className="orderitem_comment" onChange={this.handleCommentChange} value={this.state.comment}/>
                {this.renderStars()}
                <button className='orderitem_btn orderitem_btn-red' onClick={this.handleSubmitComment}>提交</button>
                <button className='orderitem_btn orderitem_btn-grey' onClick={this.handleCancleComment}>取消</button>
            </div>
        )
    }

    renderStars(){
        const {stars} =this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light=stars>=item?"orderitem_star-light":"";
                        return(
                            <span className={"orderitem_star "+light} key={index} onClick={this.handleClickStars.bind(this,item)}>★</span>
                        )
                    })
                }
                
            </div>
        )
    }
    handleOpenEdit=()=>{
        this.setState({
            editing:true
        })
    }
    handleCommentChange(e){
        this.setState({
            comment:e.target.value
        })
    }
    handleClickStars=(stars)=>{
        this.setState({
            stars:stars
        },function(){
            console.log(this.state.stars)
        })
        
    }
    handleCancleComment=()=>{
        this.setState({
            editing:false,
            stars:this.props.data.stars||0,
            comment:this.props.data.comment||""
        })
    }
    handleSubmitComment=()=>{
        const {id}=this.props.data;
        const {comment,stars}=this.state;
        this.setState({
            editing:false
        })
        this.props.onSubmit(id,comment,stars)
    }
}
 
export default OrderItem;