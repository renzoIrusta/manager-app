import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { customerSelect, customersSearcher } from '../../actions/customers';
import { UserCard } from '../users/UserCard';

export const CustomerSearcher = () => {

    const { customersFound, customerActive } = useSelector(state => state.customers)
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {

        dispatch(customersSearcher(data.search.toLowerCase()));

    }

    const handleClick = ( id ) => {

        const customer = customersFound.find( customer => customer.id === id );
        
        dispatch( customerSelect( customer ) );

    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="auth__form"
            >
                <div className="field has-addons mt-5">
                    <div className="control is-expanded">
                        <input
                            autoComplete="off"
                            className='input'
                            name='search'
                            placeholder='Busca un cliente'
                            type="text"
                            ref={
                                register({
                                    required: {
                                        value: true,
                                    }
                                })
                            }
                        />
                    </div>
                    <div className='control'>
                        <button className="button is-link is-outlined">
                            Buscar
                    </button>
                    </div>
                </div>
            </form>
            <div className="custom-container mt-3">
                {
                    customersFound.map(customer => (

                        <UserCard
                            color={customer.data.color}
                            email={customer.data.email}
                            name={`${customer.data.firstName} ${customer.data.lastName}`}
                            key={customer.id}
                            onClickFunction={ () => ( handleClick( customer.id ) ) }
                            path="/customers/profile"
                            photoUrl={customer.data.photoUrl}
                            phone={customer.data.phone}
                        />

                    ))
                }
            </div>
        </>
    )
}
