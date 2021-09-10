import React from 'react';
import { Task } from '../Types'
import { useDispatch } from 'react-redux'
import { doneTask } from '../modules/tasksModule'
import { deleteTask } from '../modules/tasksModule'
import styled from 'styled-components';

type Props = {
  task: Task
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <li className={task.done ? 'done' : ''}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => dispatch(doneTask(task))}
          defaultChecked={ task.done }
        />
        <span className="checkbox-label">{ task.title }</span>
      </label>
      <DeleteButton
       onClick={() => dispatch(deleteTask(task))}
       className="btn is-delete">delete</DeleteButton>
    </li>
  )
}

/*
const CheckboxLabel = styled.span`
  position: relative;
  margin-right: 30px;
  top: -10px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #d7d2cd;
    border-radius: 4px;
  }
`
*/

/*
const TaskListItemInput = styled.input`
  display: block;
  width: 100%;
  font-size: 15px;
  outline: none;
  border: solid 1px #d7d2cd;
  padding: 7px;
  border-radius: 4px;
  margin-top: -6px;
  &:focus {
  background: #f9f9f0;
}
`
*/

const Button = styled.button`
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border: none;
  border-bottom: solid 4px #485879;
  border-radius: 7px;
  outline: none;
  &:active{
    transform: translateY(4px);
    border-bottom: none;
    margin-bottom: 4px;
  }
`

const TaskListButton = styled(Button)`
  width: 80px;
  padding: .5em 1em .4em;
  margin-left: 5px;
  font-size: 13px;
  z-index: 10;
`

const DeleteButton = styled(TaskListButton)`
  background-color: #d86681;
  border-bottom-color: #956270;
`

export default TaskItem
