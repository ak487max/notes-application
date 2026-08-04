import React, { useState } from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(title);
    console.log(details);
    setTitle('')
    setDetails('')
  }
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const [task,setTask]=useState([])
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen flex flex-col lg:flex-row bg-white text-black'>
     
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex gap-4 px-10 py-10 lg:w-1/2 flex-col items-start p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input 
        type='text' 
        placeholder='Enter Notes heading' 
        className='px-5 py-2 font-medium w-full outline-none border-2 rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        >

        </input>

        <textarea type="text" 
        className='px-5 w-full py-2 font-medium flex items-start flex-row h-32 outline-none border-2 rounded'
        placeholder='enter details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        >
        </textarea>
        <button className='bg-black active:bg-gray-300 w-full outline-none text-white px-5 py-2 rounded'>
          ADD Notes</button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Your notes..</h1>
      <div className='flex flex-wrap items-start justify-start h-full gap-5 mt-5 overflow-auto'>
        {task.map(function(elem,idx){
          return(
             <div 
             key={idx} 
             className="relative h-52 w-40 text-white py-5 px-4 rounded-2xl bg-cover bg-[url('https://template.canva.com/EAFy0Dt_K-k/1/0/1131w-gOyPWxb9UyI.jpg')]">
              <h2 className='active:bg-gray-100 absolute top-5 right-5 rounded-full p-0.5 bg-pink-200 text-xs'>
                <button onClick={()=>{
                  deleteNote(idx);
                }}><i class="fa-duotone fa-solid fa-x"></i></button></h2>
            <h3 className='mt-3 leading-tight text-black text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-medium text-gray-400'>{elem.details}</p>
            </div>
          );
        })}
        
      </div>
      </div>
    </div>
  )
}

export default App
