import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick = () => {
    setIsClick(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlor = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            type="text"
            onChange={handleChange}
            onBlur={handleBlor}
            value={ inputCardTitle }
            autoFocus maxLength={10}
          />
        </form>
      ) : <h3>{ inputCardTitle }</h3>}
    </div>
  )
}
