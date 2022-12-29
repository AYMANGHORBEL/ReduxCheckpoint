import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask } from '../redux/action'
import Task from './Task'

const TaskList = () => {
    const {tasks,isFiltered}=useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(tasks)
  return (
    <div>
      <button onClick={()=>dispatch(filterTask())}  > {isFiltered? "All":"Unfinished tasks"}  </button>
        {
          isFiltered ? 
          <div>
                  {tasks.filter(task=>!task.isDone).map(el=>
                  <Task key={el.id} tache={el}  />
                  )}
          </div>

            :<div>
              {tasks.map(el=>
                  <Task key={el.id} tache={el}  />
                  )}
            </div>
        }
        <h3>Finished tasks: {tasks.filter(el=>el.isDone).length} </h3>
        <h3>Unfinished tasks: {tasks.filter(el=>el.isDone===false).length} </h3>
    </div>
  )
}

export default TaskList