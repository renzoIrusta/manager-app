import React from 'react'

export const UserMediaCard = ({ icon, className, content }) => {
    return (
        <div className="card__content mb-3">
            <p>{icon}</p>
            <p className={className}>{content}</p>
        </div>
    )
}
