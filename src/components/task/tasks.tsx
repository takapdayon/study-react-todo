import React from 'react'
import { Task } from './task'
import { task } from './taskCard'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

type Props = {
  setTaskList: React.Dispatch<React.SetStateAction<task[]>>
  taskList: task[]
}

export const Tasks: React.FC<Props> = ({ setTaskList, taskList }) => {

  const handleOnDragEnd = (result: DropResult) => {
    const remove = taskList.splice(result.source.index, 1);
    taskList.splice(result.destination?.index ?? result.source.index, 0, remove[0]);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                taskList.map((task, index) => {
                  return (
                    <div key={task.id}>
                      <Task
                        index={index}
                        id={task.id}
                        draggableId={task.draggableId}
                        task={task.text}
                        taskList={taskList}
                        setTaskList={setTaskList}
                      />
                    </div>
                  )
                })
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
