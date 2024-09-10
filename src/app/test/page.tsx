'use client'

import { useState } from "react"

interface email {
    id: string
    email:string
}

export default function Page() 
{

    const [users, setUsers] = useState<email[]>([])
    const [email, setEmail] = useState<string>('')

    console.log(users);
    
    const fetchUsers = async () => 
    {
        const user = await fetch('api/users')

        const data = await user.json()

        setUsers(data)
    }

    const addUsers = async () =>
    {
        await fetch('api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })

    }

    return <div className="flex flex-col text-white">
        <h1>how are you mate</h1>
        <input 
        className="p-4 text-black "
        type="email"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={fetchUsers} className="border border-white p-4 mt-4 hover:bg-cyan-400">Fetch Users</button>
        <button onClick={addUsers} className="border border-white p-4 mt-4 hover:bg-amber-400">Add Users</button>
    </div>
}