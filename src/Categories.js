import React from 'react'
import CategoryButton from './CategoryButton'


export default class Categories extends React.Component {

    
    render(){
        const { categories, onClickFunction } = this.props

        const buttons = categories.map(category => 
            <CategoryButton  key={category} category={category} onClickFunction={onClickFunction}/>)
            
        return (<div className="categories">
            <h5>Category Filters </h5>
            <>{buttons}</>
        </div>)
    }
}



