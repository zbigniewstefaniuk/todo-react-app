import { useState, useEffect } from 'react'

// Custom useStaate hook that will save passed data to local storage

function useStickyState(deafultValue, key) {
    const [value, setValue] = useState(() => {
        const stickyValue = window.localStorage.getItem(key)

        return stickyValue !== null && stickyValue
            ? JSON.parse(stickyValue)
            : deafultValue
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}

export default useStickyState
