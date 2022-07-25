import React from 'react'
import { task } from '../taskCard'
import { v4 as uuid } from 'uuid'

type Props = {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  taskList: Array<task>
  setTaskList: React.Dispatch<React.SetStateAction<task[]>>
}

export const TaskAddInput = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskId = uuid();
    e.preventDefault()
    if(props.inputText === "") {
      return
    }
    props.setTaskList([
      ...props.taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: props.inputText
      }
    ])
    props.setInputText("")
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setInputText(e.currentTarget.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder='add a task'
          onChange={handleChange}
          value={props.inputText}
        />
      </form>
    </div>
  )
}
