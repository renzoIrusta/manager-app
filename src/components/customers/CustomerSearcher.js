import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { customersSearcher } from '../../actions/customers';
import { UserCard } from '../users/UserCard';

export const CustomerSearcher = () => {

    const customers = useSelector(state => state.customers)
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {

        dispatch(customersSearcher(data.search));

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
                    customers.map(customer => (

                        <UserCard
                            key={customer.id}
                            photoUrl={customer.data.photoUrl}
                            name={customer.data.firstName}
                            email={customer.data.email}
                            phone={customer.data.phone}
                            color={customer.data.color}
                        />

                    ))
                }
            </div>
        </>
    )
}
