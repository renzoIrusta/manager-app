import React from 'react'
import { UserMediaCard } from './UserMediaCard'

export const UserCard = ({ photoUrl, name, email, phone, color }) => {
    return (
            <div className="card card__size mb-4">
                <div className="card-image">
                    <figure className="image is-4by3" style={{height: "330px"}}>
                        <img src={ photoUrl } alt="imagen" />
                    </figure>
                </div>
                <div 
                className="card-content"
                >
                            <UserMediaCard 
                            icon= {<i 
                                className="far fa-user"
                                style={color && {color: `${color}`}}
                            ></i>}
                            className= "title is-4"
                            content={ name }
                            />
                            <UserMediaCard 
                            icon= {<i 
                                className="far fa-envelope"
                                style={color && {color: `${color}`}}
                                ></i>}
                            className= "subtitle is-4"
                            content={email}
                            />
                            <UserMediaCard 
                            icon={ <i 
                                className="fas fa-mobile-alt"
                                style={color && {color: `${color}`}}
                                ></i> }
                            className= "subtitle is-4"
                            content={ phone }
                            />             
                </div>
            </div>
    )
}
