import React, {useState} from "react";

const List = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState ([]);
	 
	return (
		<div className="container">
			<h1>To-Do List</h1>
			<div>
			<ul>
				<li>
					<input 
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => e.key === "Enter" ? setTodos(todos.concat(inputValue)) (setInputValue("")) : null}								
					placeholder="Add a task">
						</input>			
					</li>
					{todos.map((item, index) => (
						<li>
							 {item}{""} 
							 <i className="fas fa-trash"  onClick={() => 
								setTodos(todos.filter((t, currentIndex) =>	index != currentIndex))
								}></i>
								</li>
					))}
							
			</ul></div>
			<div><p>
			{!todos.length ? <h5>No tasks, add a task</h5> : todos.length + " jobs to do"}
			</p></div>
		</div>
	);
};

export default List;
