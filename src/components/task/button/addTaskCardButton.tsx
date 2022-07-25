import React from 'react'
import { v4 as uuid } from "uuid";
import { taskCardsList } from '../taskCards';


type Props = {
  taskCardsList: taskCardsList[]
  setTaskCardsList: React.Dispatch<React.SetStateAction<taskCardsList[]>>
}

export const AddTaskCardButton: React.FC<Props> = ({ taskCardsList, setTaskCardsList }) => {

  const addTaskCard = () => {
    const taskCardId = uuid()
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      }
    ])
  }

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
    </div>
  )
}
