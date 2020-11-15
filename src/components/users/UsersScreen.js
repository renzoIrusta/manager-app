import React from 'react'
import { useSelector } from 'react-redux'
import { UserCard } from './UserCard'

export const UsersScreen = () => {

    const users = useSelector(state => state.users)

    return (
        <div className="container p-5">
            <h1 className="title has-text-white">Colaboradores</h1>
            <div className="custom-container">
                {
                    users.map(user => (

                        <UserCard
                            key={user.id}
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
