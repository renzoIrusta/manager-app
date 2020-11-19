import React from 'react'

export const UserMediaCard = ({ icon, className, content, iconClassName }) => {
    return (
        <div className="card__content mb-3">
            <p className={ iconClassName }>{ icon }</p>
            <p className={ className }>{ content }</p>
        </div>
    )
}
