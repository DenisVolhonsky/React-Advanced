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


const filtereNodes = (nodes, filter) => {
  return nodes.filter(item => item.toLowerCase().includes(filter.toLowerCase()))
}

class Menu extends Component {
  state = {
    selectedCategories: [],
    filter: '',
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

  handleFilterChange = e => {
    if(this.state.selectedCategories)
      this.setState({
        filter: e.target.value
      })
  }
  
  render() {
    const {selectedCategories, filter} = this.state;
    const filteredNodes = filtereNodes(selectedCategories, filter)
    return (
      <div>
        <DropdownMenu allCategories={categories} onSelect={this.handleChange} />
        <ResultMenu selectedCategories={filteredNodes} deleteMenuItem={this.handleDelete} />
        <FilterMenu onFilterChange={this.handleFilterChange} filter={this.state.filter} />
        <CardMenu/>
      </div>
    )
  }
}

export default Menu;