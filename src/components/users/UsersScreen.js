import React from 'react'
import { UserCard } from './UserCard'

export const UsersScreen = () => {
    return (
        <div className="container p-5">
            <h1 className="title has-text-white">Users Screen</h1>
            <div className="custom-container">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            </div>
        </div>
    )
}
