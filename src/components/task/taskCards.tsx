import React, { useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { AddTaskCardButton } from './button/addTaskCardButton'
import { TaskCard } from './taskCard'

export type taskCardsList = {
  id: string,
  draggableId: string,
}

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState<taskCardsList[]>([]);

  const handleOnDragEnd = (result: DropResult) => {
    const remove = taskCardsList.splice(result.source.index, 1);
    taskCardsList.splice(result.destination?.index ?? result.source.index, 0, remove[0]);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
          {
            taskCardsList.map((taskCard, index) => {
              return (
                <TaskCard
                  key={taskCard.id}
                  index={index}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCard={taskCard}
                />
              )
            })
          }
          {provided.placeholder}
          <AddTaskCardButton
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
          />
        </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
