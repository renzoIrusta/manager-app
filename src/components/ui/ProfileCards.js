import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { customerGetServices } from '../../actions/customers';
import { uiOpenSecondModal } from '../../actions/ui';
import { avatarDefault } from '../../helpers/imageDefault';
import { CustomerServiceModal } from '../customers/CustomerServiceModal';
import { UserMediaCard } from '../users/UserMediaCard';

export const ProfileCards = () => {

    const dispatch = useDispatch();

    const { customerActive, customerServices } = useSelector(state => state.customers);

    useEffect(() => {
        dispatch(customerGetServices(customerActive.id))
    }, [customerActive, dispatch])

    const openSecondModal = () => {

        dispatch(uiOpenSecondModal())

    }

    return (
        <div className="container">
            <div className="flex-container is-justify-content-space-around">
                <div className="box mr-3 box__image">
                    <figure className="image is-4by5">
                        <img src={customerActive ? customerActive.data.photoUrl : avatarDefault} alt='avatar' />
                    </figure>
                </div>
                <div className="box mr-3 box__data">
                    <UserMediaCard
                        icon={<i className="far fa-user"></i>}
                        content={`${customerActive.data.firstName} ${customerActive.data.lastName}`}
                        className="title is-4"
                        iconClassName="mr-3"
                    />
                    <UserMediaCard
                        icon={<i className="fas fa-mobile-alt"></i>}
                        content={customerActive.data.phone}
                        className="subtitle is-4"
                        iconClassName="mr-3"
                    />
                    <UserMediaCard
                        icon={<i className="far fa-envelope"></i>}
                        content={customerActive.data.email}
                        className="subtitle is-4"
                        iconClassName="mr-3"
                    />
                </div>
                <button className="button is-fullwidth mb-3 is-link is-outlined">Editar cliente</button>
                <button
                    className="button is-fullwidth mb-5 is-warning is-outlined"
                    onClick={openSecondModal}
                >Agregar Servicio</button>
                {
                    customerServices.map(service => (

                        <div
                            className="box box__service"
                            key={service.id}
                        >
                            <article className="media">
                                <div className="media-left">
                                    {/* <p>{service.date}</p> */}
                                    <figure className="image is-64x64 mb-1">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="dale" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p><strong>{ service.name }</strong></p>
                                    <p>{ service.textarea }</p>
                                </div>
                            </article>
                        </div>

                    ))
                }
            </div>
            <CustomerServiceModal />
        </div>
    )
}
