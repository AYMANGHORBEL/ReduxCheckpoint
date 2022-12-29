import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/action'
import EditTask from './EditTask'

const Task = ({tache}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <h3  className={tache.isDone? "done":""} >  {tache.action} </h3>
        <button onClick={()=>dispatch(deleteTask(tache.id))}  >Delete</button>
        <button onClick={()=>dispatch(completeTask(tache.id))}>Complete</button>
        {/* <button>Edit</button> */}
        <EditTask tache={tache} />
    </div>
  )
}

export default Task