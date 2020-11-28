import React from 'react';

import { avatarDefault } from '../../helpers/imageDefault';
import { UserMediaCard } from '../users/UserMediaCard';

export const ProfileCards = ( {profile} ) => {

    return (
        <div className="flex-container is-justify-content-space-evenly">
            <div className="box box__image">
                <figure className="image is-4by5">
                    <img src={ profile.data.photoUrl ? profile.data.photoUrl : avatarDefault} alt='avatar' />
                </figure>
            </div>
            <div className="box box__data">
                <UserMediaCard
                    icon={<i className="far fa-user"></i>}
                    content={`${profile.data.firstName} ${profile.data.lastName}`}
                    className="title is-4"
                    iconClassName="mr-3"
                />
                <UserMediaCard
                    icon={<i className="fas fa-mobile-alt"></i>}
                    content={profile.data.phone}
                    className="subtitle is-4"
                    iconClassName="mr-3"
                />
                <UserMediaCard
                    icon={<i className="far fa-envelope"></i>}
                    content={profile.data.email}
                    className="subtitle is-4"
                    iconClassName="mr-3"
                />
            </div>
        </div>
    )
}
