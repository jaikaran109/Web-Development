import React,{useEffect, useState} from 'react'
import axios from 'axios';


const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);    
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 font-xl'>No User Available</h3>
  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return <div key = {idx}>
                <a href={elem.url} target='_blank'>
                    <div className='h-40 w-40 overflow-hidden rounded-xl'>
                        <img  className='h-full w-full object-cover' src={elem.download_url} alt="" />
                    </div>
                    <h2 className='bg-amber-100 text-amber-900 font-serif rounded m-1 p-0.5' >{elem.author}</h2>
                </a>
            </div>
            
    })
  }

  return (
    <div className='bg-black h-screen w-screen p-4 text-white overflow-auto'>

      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>
      <div className='flex gap-5 justify-center items-center p-4'>
        <button 
        onClick={() => {
          if(index > 1){
            setIndex(index - 1)
          }}
        }
        className='bg-amber-400 text-black rounded px-2 text-sm cursor-pointer py-0.5 active:scale-95'
        >
          Prev
        </button>

        <button 
        onClick={() => {
          setIndex(index + 1)          
        }}
        className='bg-amber-400 text-black rounded px-2 text-sm cursor-pointer py-0.5 active:scale-95'
        >
          Next
        </button>
      </div>
    </div>

  )
}

export default App