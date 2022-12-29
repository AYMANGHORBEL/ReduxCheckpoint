import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'

const AddTask = () => {
    const [text, setText] = useState("")
const dispatch = useDispatch()
const handleSubmit = (e)=> {
    e.preventDefault();
    const newTask = {
        id:Math.random(),
        action:text,
        isDone:false
    }
    text.length &&
    dispatch(addTask(newTask))
setText('')

}

  return (
    <div>
        <form action=""  onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button>Add Task</button>
        </form>
    </div>
  )
}

export default AddTask