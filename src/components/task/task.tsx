import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { task } from './taskCard'

type Props = {
  index: number,
  id: string,
  draggableId: string,
  task: string
  taskList: task[]
  setTaskList: React.Dispatch<React.SetStateAction<task[]>>
}

export const Task: React.FC<Props> = ({ index, id, draggableId, task, taskList, setTaskList }) => {

  const handleDelete = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  return (
    <Draggable index={index} draggableId={draggableId}>
      {(provided) => (
        <div
          className="taskBox"
          key={id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task}</p>
          <button className="taskTrashButton" onClick={() => handleDelete(id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}
