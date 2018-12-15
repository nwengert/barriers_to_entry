import React, { Component } from 'react'
import Todoitem from './TodoItem'
import todosData from './todosData'

export default class Appppp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {

    }
    render() {
        
    }
}