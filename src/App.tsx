import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import Member from './Member';

const backend = import.meta.env.VITE_OKNESSET_BACKEND || 'http://127.0.0.1:5000'

const fetchMembers = () => {
    return axios.get(`${backend}/members`)
}

function App() {
  const { isLoading, data, isError } = useQuery('members', fetchMembers)


  if(isLoading) {
        return <h2>Loading</h2>
    }
    
    if(isError) {
        return <h2>error</h2>
    }
    
    if(!data) {
        return <h2>No data</h2>
    }

  return (
    <div className="App">
      <div>
        {!isLoading && <h1>Members List</h1>}
      </div>
      <div>
        {!isLoading && <Member data={data.data.data} />}
      </div>
            
    </div>
  )
}

export default App
