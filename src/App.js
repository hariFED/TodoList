import React from "react";
import './App.css';
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

{/*
 1.First We are creating a function Todo in which we are going pass the parameters which are functions that we are going to implement in this todo project
 2.We are going to first list a todo so we are creating a todo function 
 */}


function Todo({ todo, index, markTodo, removeTodo }) {
  return (

    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} >{todo.text}</span>
      <div className>
        <Button variant="outline-success" onClick={() => markTodo(index)}>"Done"</Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>"Delete"</Button>
      </div>
    </div>
  )
}
function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handelSubmit = e => {
    e.preventDefault()
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <Form onSubmit={handelSubmit}>
      <Form.Group>
        <Form.Label>
          <b>AddTodo</b>
        </Form.Label>

        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new text" />
        <Button className="col-3 text-align-center" variant="primary my-3" type="submit">
          Submit
        </Button>

      </Form.Group>
    </Form>
  )
}

function App() {
  const [todos, setTodos] = React.useState([{
    text: "This is nothing but a sample",
    isDone: false
  }])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="container text-center">
        <h1 className="text-center mb-4">To Do List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo} />
              </Card.Body>
            </card>
          ))}
        </div>
      </div>
    </div>
  )

}



export default App;
