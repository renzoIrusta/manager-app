import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadData } from '../../helpers/loadInfo'
import { UserCard } from './UserCard'

export const UsersScreen = () => {

    const [data, setData] = useState([])

    const bringData = async () => {

        const data = await loadData('users')
        setData(data)
    }

    useEffect(() => {
        bringData()
    }, [setData])

    console.log(data);

    return (
        <div className="container p-5">
            <h1 className="title has-text-white">Users Screen</h1>
            <div className="custom-container">
                {
                    data.map(user => (

                        <UserCard
                            key={user.idData}
                            photoUrl={user.data.photoUrl}
                            name={user.data.name}
                            email={user.data.email}
                            phone={user.data.phone}
                            color={user.data.color}
                        />

                    ))
                }

            </div>
        </div>
    )
}
