import React, { useState, useContext, } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'

const Getdata = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [name, setName] = useState('')

    const getData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${name}`)
            const data = await response.json()
            setUser(data)
            // console.log(data)
            setName('')
            navigate('/profile')
           
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center border-2 bg-slate-300 border-black rounded-md h-70 w-120 p-7 m-auto mt-20'>

                <div className=''>
                    <input className='border-2 border-black rounded-md p-5 bg-slate-200' type="text" id="getName" placeholder='Enter Github User Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='bg-emerald-500 text-white p-5 rounded-lg font-medium hover:bg-emerald-600 active:scale-95 transition-all duration-150 cursor-pointer' onClick={getData}>Get</button>

                </div>
            </div>

        </>
    )
}

export default Getdata