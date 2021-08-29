import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { RootState } from '../rootReducer'


const TaskList: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks)

  return (
    <div className="innner">
      {
        tasks.length <= 0 ? 'all done!!':
        <ul className="task-list">
        { tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        )) }
        </ul>
      }
    </div>
  )
}

export default TaskList
