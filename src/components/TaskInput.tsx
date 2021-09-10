import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'
import styled from 'styled-components';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch()
  //[変数名, 関数名]
  const [inputTitle, setInputTitle] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(addTask(inputTitle))
    setInputTitle('')
  }

  return (
    <Inputform className="input-form">
      <InputformInner className="inner">
        <InputformInput
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
          placeholder="please input TODO"
        />
        <ButtonIsPrimary onClick={handleSubmit} className="btn is-primary">add</ButtonIsPrimary>
      </InputformInner>
    </Inputform>
  )
}


const Inputform = styled.div`
  margin-bottom: 40px;
  background: #f9f3ee;
  padding: 40px 0;
  border-bottom: 1px solid #d7d2cd;
`

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const InputformInner = styled(Inner)`
  display: flex;
  position: relative;
`

const InputformInput = styled.input`
  width: 80%;
  font-size: 15px;
  outline: none;
  border: solid 3px #d7d2cd;
  padding: 10px;
  border-radius: 7px;
  margin-right: 10px;
  &:focus {
    background: #f9f9f0;
  }
`


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

const ButtonIsPrimary = styled(Button)`
  width: 20%;
`

export default TaskInput