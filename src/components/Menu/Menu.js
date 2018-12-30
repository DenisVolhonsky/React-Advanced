import React, { Component } from 'react'

import DropdownMenu from './DropdownMenu'
import ResultMenu from './ResultMenu'
import FilterMenu from './FilterMenu'
import CardMenu from './CardMenu'

const categories = [
  '...', 
  'Супы', 
  'Салаты', 
  'Холодные закуски', 
  'Горячие закуски', 
  'Гарнир', 
  'Мясные блюда', 
  'Рыбные блюда', 
  'Алкогольные напитки', 
  'Безалкогольные напитки'
]

class Menu extends Component {
  state = {
    selectedCategories: [],
  }

  handleChange = e => {
    if(this.state.selectedCategories.indexOf(e.target.value)=== -1) {
      this.setState({
        selectedCategories: [...this.state.selectedCategories, e.target.value]
      })
    }
  }

  handleDelete = item => {
    this.setState({
      selectedCategories: this.state.selectedCategories.filter(el => el !== item )
    })
  }
  
  render() {
    console.log(this.state.selectedCategories)
    return (
      <div>
        <DropdownMenu allCategories={categories} onSelect={this.handleChange} />
        <ResultMenu selectedCategories={this.state.selectedCategories} deleteMenuItem={this.handleDelete} />
        {/* <FilterMenu/>
        <CardMenu/> */}
      </div>
    )
  }
}

export default Menu;