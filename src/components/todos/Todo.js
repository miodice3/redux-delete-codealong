import React from 'react'

const Todo = props => {
    return(
        <div>
        {console.log(props)}
        <span>{props.todo.text.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
      </div>
    )
}

export default Todo;
