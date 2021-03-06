import { connect } from 'react-redux';
import { addTodoAction } from '../actions';
import React from 'react';

let AddTodoContainer = ({dispatch}) => {
	let input = ''; 
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addTodoAction(input.value)); //因为已经把this.ref.node的值已经赋值给了input，所以就可以直接input.value
				input.value = '';
			}}>
				<input ref={node=>{input=node}}/>
				<button type='submit'>
					Add Todo
				</button>
			</form>
		</div>
	);
};

AddTodoContainer = connect()(AddTodoContainer);

export default AddTodoContainer;