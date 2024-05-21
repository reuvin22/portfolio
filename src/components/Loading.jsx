import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Loading() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout (() => {
            setLoading(true)
        }, 2000)
        navigate('/home')
    })
  return (
    <div>Loading</div>
  )
}

export default Loading