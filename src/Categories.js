import React from 'react'



export default class Categories extends React.Component {

    category = () => {
    this.props.categories.map(c => {
        console.log(c)
    })
    }

    render(){

        return (<div className="categories">
            <h5>Category Filters</h5>
    <button className="button">{this.props.categories}</button>
        </div>)
    }
}



