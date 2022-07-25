import React from 'react'
import { taskCardProps } from '../taskCard'


export const TaskCardDeleteButton: React.FC<taskCardProps> = ({
  taskCardsList,
  setTaskCardsList,
  taskCard
}) => {

  const taskCardDelete = (id: string) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }

  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => taskCardDelete(taskCard.id)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}
