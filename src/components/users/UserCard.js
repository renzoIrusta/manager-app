import React from 'react'
import { UserMediaCard } from './UserMediaCard'

export const UserCard = () => {
    return (
            <div className="card card__size mb-4">
                <div className="card-image">
                    <figure className="image is-4by3" style={{height: "330px"}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/manager-app-510cf.appspot.com/o/20180820_221321.jpg?alt=media&token=42729b5b-b326-4799-b191-e33f0f3859e7" alt="imagen" />
                    </figure>
                </div>
                <div className="card-content">
                            <UserMediaCard 
                            icon= {<i className="far fa-user"></i>}
                            className= "title is-4"
                            content= "Contenido"
                            />
                            <UserMediaCard 
                            icon= {<i className="far fa-envelope"></i>}
                            className= "subtitle is-4"
                            content= "@contenido"
                            />
                            <UserMediaCard 
                            icon={ <i className="fas fa-mobile-alt"></i> }
                            className= "subtitle is-4"
                            content= "123456789"
                            />             
                </div>
            </div>
    )
}
