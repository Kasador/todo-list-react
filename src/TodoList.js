import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
import { catchClause } from '@babel/types';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== '') {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = '';

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        const styles = {
            borderBottom: '2px solid #333',
            color: '#333',
            padding: '10px'
        }
        const styles1 = {
            fontSize: '12px',
            color: '#777',
            marginBottom: '10px'
        }
        
        return (
            <div className="todoListMain">
                <div className="header">
                    <h1 style={styles}>Simple Todo List Application</h1>
                    <span style={styles1}>click to delete items</span>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter Task"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                            delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;