import React, { useState } from 'react'
import { useEffect } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = () => {
        
    }

    return (
        <div class="home">
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='checkbox' onClick={handleEdit}>
                                {/* <BsCircleFill className='icon' /> */}
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                {/* <span><BsFilTrashFill class="ion" /></span> */}
                            </div>
                        </div>

                    ))
            }
        </div>
    )
}

export default Home