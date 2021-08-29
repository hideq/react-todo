import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'

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
    <div className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
          placeholder="please input TODO"
        />
        <button onClick={handleSubmit} className="btn is-primary">add</button>
      </div>
    </div>
  )
}

export default TaskInput
