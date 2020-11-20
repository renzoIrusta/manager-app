import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenSecondModal } from '../../actions/ui'
import { avatarDefault } from '../../helpers/imageDefault'
import { CustomerServiceModal } from '../customers/CustomerServiceModal'
import { UserMediaCard } from '../users/UserMediaCard'

export const ProfileCards = () => {

    const dispatch = useDispatch();
    
    const { customerActive } = useSelector(state => state.customers);

    const openSecondModal = () => {

        dispatch( uiOpenSecondModal() )

    }

    return (
        <div className="container">
            <div className="flex-container is-justify-content-space-around">
                <div className="box mr-3 box__image">
                    <figure className="image is-4by5">
                        <img src={ customerActive ? customerActive.data.photoUrl : avatarDefault} alt='avatar' />
                    </figure>
                </div>
                <div className="box mr-3 box__data">
                    <UserMediaCard 
                        icon= {<i class="far fa-user"></i>}
                        content={ `${customerActive.data.firstName} ${customerActive.data.lastName}` }
                        className= "title is-4"
                        iconClassName="mr-3"
                    />
                    <UserMediaCard 
                        icon= {<i class="fas fa-mobile-alt"></i>}
                        content={ customerActive.data.phone }
                        className= "subtitle is-4"
                        iconClassName="mr-3"
                    />
                    <UserMediaCard 
                        icon= {<i class="far fa-envelope"></i>}
                        content={ customerActive.data.email }
                        className= "subtitle is-4"
                        iconClassName="mr-3"
                    />
                </div>
                <button className="button is-fullwidth mb-3 is-link is-outlined">Editar cliente</button>
                <button 
                className="button is-fullwidth mb-3 is-warning is-outlined"
                onClick={ openSecondModal }
                >Agregar Servicio</button>
            </div>
            <CustomerServiceModal />
        </div>
    )
}
