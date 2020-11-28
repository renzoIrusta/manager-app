import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { customerGetServices } from '../../actions/customers';
import { uiOpenSecondModal } from '../../actions/ui';
import { ProfileCards } from '../ui/ProfileCards'
import { CustomerBoxService } from './CustomerBoxService';
import { CustomerServiceModal } from './CustomerServiceModal';

export const CustomerProfile = () => {

    const dispatch = useDispatch();

    const { customerActive, customerServices } = useSelector(state => state.customers);

    useEffect(() => {
        dispatch(customerGetServices(customerActive.id))
    }, [customerActive, dispatch])

    const openSecondModal = () => {

        dispatch(uiOpenSecondModal())

    }


    return (
        <div className="w_is10by10">
            <ProfileCards 
                profile={ customerActive }
            />
            <button className="button is-fullwidth mb-3 mt-5 is-link is-outlined"
            >Editar cliente
            </button>
            <button
                className="button is-fullwidth mb-5 is-warning is-outlined"
                onClick={openSecondModal}
            >Agregar Servicio
            </button>
            {
                customerServices.map( service => (

                    <CustomerBoxService 
                        service={ service }
                    />

                ))
            }
            <CustomerServiceModal />
        </div>
    )
}
