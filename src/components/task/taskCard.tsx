import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskCardDeleteButton } from './button/taskCardDeleteButton'
import { TaskAddInput } from './input/taskAddInput'
import { taskCardsList } from './taskCards'
import { TaskCardTitle } from './taskCardTitle'
import { Tasks } from './tasks'

export type task = {
  id: string,
  draggableId: string,
  text: string
}

export type taskCardProps = {
  index: number
  taskCardsList: taskCardsList[]
  setTaskCardsList: React.Dispatch<React.SetStateAction<taskCardsList[]>>
  taskCard: taskCardsList
}

export const TaskCard: React.FC<taskCardProps> = ({ index, taskCardsList, setTaskCardsList, taskCard }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState<Array<task>>([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="taskCardTitleAndTaskCardDeleteeButton"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              index={index}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks
            setTaskList={setTaskList}
            taskList={taskList}
          />
        </div>
      )}
    </Draggable>
  )
}
