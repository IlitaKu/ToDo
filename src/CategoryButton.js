import React from 'react'


export default class CategoryButton extends React.Component {

    render(){
    return (
        <button className="selected" onClick = {() => {this.props.onClickFunction(this.props.category)}}>{this.props.category} </button>
   )
    }
}
