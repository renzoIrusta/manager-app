import React from 'react'
import { Link } from 'react-router-dom'
import { avatarDefault } from '../../helpers/imageDefault'
import { UserMediaCard } from './UserMediaCard'

export const UserCard = ({ photoUrl, name, email, phone, color, onClickFunction, path }) => {

    const handleClick = () => {

        onClickFunction();

    }

    return (
        <Link
            to={ path }
        >
            <div
                className="card card__size mb-4 pointer"
                onClick={handleClick}
            >
                <div className="card-image">
                    <figure className="image is-4by3" style={{ height: "330px" }}>
                        <img src={photoUrl ? photoUrl : avatarDefault} alt='avatar' />
                    </figure>
                </div>
                <div
                    className="card-content"
                >
                    <UserMediaCard
                        icon={<i
                            className="far fa-user"
                            style={color && { color: `${color}` }}
                        ></i>}
                        iconClassName="mr-3"
                        className="title is-4 capitalize"
                        content={name}
                    />
                    <UserMediaCard
                        icon={<i
                            className="far fa-envelope"
                            style={color && { color: `${color}` }}
                        ></i>}
                        className="subtitle is-4"
                        content={email}
                    />
                    <UserMediaCard
                        icon={<i
                            className="fas fa-mobile-alt"
                            style={color && { color: `${color}` }}
                        ></i>}
                        className="subtitle is-4"
                        content={phone}
                    />
                </div>
            </div>
        </Link>
    )
}
