import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = evenet => {
        evenet.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Anything you wan to remember?'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange} 
                    ref={inputRef}
                    />
                <button className='todo-button'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
