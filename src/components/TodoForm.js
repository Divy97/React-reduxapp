import React,{useState} from 'react'
import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup
} from "reactstrap";

import {v4} from 'uuid';
import {connect} from 'react-redux';
import {addTodo} from "../action/Todo";

const TodoForm = ({addTodo}) => {

    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(title === ""){
            alert("Please add a todo");
        }

        const todo = {
            title,
            id : v4()
        }

        addTodo(todo);
        setTitle('');
    }
  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeHolder="your next todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <InputGroup addOnType="append">
                    <Button color="primary" onClick={handleSubmit}>ADD</Button>   
                </InputGroup>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)








