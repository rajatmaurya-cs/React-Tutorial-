// import React, { useState } from 'react'

import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [list , setList] = useState([]);
  const [task , setTask] = useState('')

  const HandleSubmit = (e)=>{
   e.preventDefault()
    if(task === '') return ;
      const id = crypto.randomUUID();

    setList([...list ,{task: task , id : id}])
    setTask("")
    sessionStorage.ke
  }

  useEffect(() => {
    const savedList = sessionStorage.getItem("todoList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);


 useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);


  const handleDelete = (_id)=>{
   const result = list.filter((item)=>item.id!=_id)
    setList(result)
  }
  







  return (
    <div className='flex  flex-col justify-center items-center h-screen'>
      <form 
      onSubmit={(e)=>HandleSubmit(e)}

      action=""
      className="w-[1300px] flex justify-center items-center mb-30"
      >

      <div>
        <input type="text"
          placeholder="Enter You Task"
          className="border border-blue-700 p-5 min-w-2xl rounded-4xl transition-all duration-300 hover:shadow-[0_0_15px_#3b82f6,0_0_30px_#facc15]"
          value = {task}
          onChange={(e)=>setTask(e.target.value)}

        />
        <button
          className="bg-amber-300 p-5 rounded-3xl ml-5 transition-all duration-300 hover:shadow-[0_0_25px_#facc15]"
        >Submit</button>

    </div>
      </form>

    

        {
          list.map((item)=>{
            return (
            

              <div className="flex items-center space-x-5 mb-10">
  <div
    className="border border-pink-500 p-5 rounded-4xl transition-all duration-300 hover:shadow-[0_0_25px_#ec4899]"
  >
    {item.task}
  </div>

  <button
    onClick={() => handleDelete(item.id)}
    className="transition-all duration-300 hover:scale-110 hover:text-red-500"
  >
    <MdDeleteForever className="w-10 h-10" />
  </button>
</div>

            )
          })
        }


    </div>
  )
}

export default Todo
