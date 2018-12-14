import React, { Component } from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

export default class Appp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
        const todoItem = this.state.todos.map(item => <TodoItem key={item.key} item={item} handleChange={this.handleChange} />)
        return(
            <div className='todo-list'>
                {todoItem}
            </div>
        )
    }
}