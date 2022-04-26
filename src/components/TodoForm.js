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
  return (
    <Form>
        <FormGroup>
            <InputGroup>
                <Input
                type="text"
                name="todo"
                id="todo"
                placeHolder="your next todo"
                />
                <InputGroup addOnType="append">
                    <Button color="primary">ADD</Button>
                </InputGroup>
            </InputGroup>
        </FormGroup>
    </Form>
  )
}

export default TodoForm; //TODO:








