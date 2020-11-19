import React from 'react'
import { useSelector } from 'react-redux'
import { avatarDefault } from '../../helpers/imageDefault'

export const ProfileCards = () => {

    const { customerActive } = useSelector(state => state.customers)

    return (
        <div className="container">
            <div className="flex-container">
                <div className="box mx-3 box__image">
                    <figure className="image is-4by5">
                        <img src={ customerActive ? customerActive.data.photoUrl : avatarDefault} alt='avatar' />
                    </figure>
                </div>
                <div className="box mx-3 box__data">
                    <p>Soy la caja de datos</p>
                </div>
            </div>
        </div>
    )
}
