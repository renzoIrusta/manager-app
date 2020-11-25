import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { uiCloseSecondModal } from '../../actions/ui';

import { TextArea } from '../auth/inputs/TextArea';
import { TextInput } from '../auth/inputs/TextInput';
import { customerCreateService } from '../../actions/customers';

const minDate = moment().hours(-72)
const now = moment().minutes(0).seconds(0);

export const CustomerServiceModal = () => {
    const dispatch = useDispatch();

    const { secondModalState } = useSelector(state => state.ui);
    const { customerActive } = useSelector(state => state.customers);
    const users = useSelector(state => state.users);

    const [ date, setDate ] = useState( now.toDate() );

    const { register, errors, handleSubmit, reset } = useForm();

    const closeModal = () => {

        dispatch(uiCloseSecondModal())
        reset();
    }

    const handleDate = (e) => {

        setDate(e)

    }


    // const handleDelete = () => {
    //    dispatch( calendarDeleteEvent( activeEvent.id ) )
    //    dispatch(uiCloseModal());
    // }

    const onSubmit = (data, e) => {

        const service = { ...data, date }
        
        dispatch( customerCreateService( service, customerActive.id ) )
        dispatch( uiCloseSecondModal() )
    }

    return (
        <div className={`modal animate__animated ${secondModalState && 'is-active animate__fadeIn'}`}>
            <div
                className="modal-background"
                onClick={closeModal}
            ></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-warning">
                    <p className="modal-card-title"> Nuevo servicio </p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={closeModal}
                    ></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="field mt-5">
                            <label className="label">Fecha del servicio</label>
                            <div className="control">
                                <DateTimePicker
                                    minDate={minDate.toDate()}
                                    onChange={ handleDate }
                                    value={ date }
                                    disableClock= {true}
                                />
                            </div>
                        </div>
                        <TextInput
                            errors={errors}
                            register={register}
                            name="name"
                            label="Servicio"
                            textColor="has-text-grey-dark"
                        // value={name}
                        />
                        <TextArea
                            errors={errors}
                            register={register}
                            label="Descripción del servicio"
                            textColor="has-text-grey-dark"
                        // value={textarea}
                        />
                        <div className="field mt-5">
                            <label className="label">Elegir profesional a cargo</label>
                            <div className="select is-fullwidth">
                                <select
                                    name="profesional"
                                    ref={register}
                                >
                                    {users.map(user => (
                                        <option
                                            key={user.id}
                                            value={user.data.name}
                                        // selected={user.data.name === profesional ? profesional : undefined}
                                        >{user.data.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot has-background-grey-light is-justify-content-space-between">
                    <div>
                        <button
                            className="button is-link has-text-white"
                            onClick={handleSubmit(onSubmit)}
                        // disabled={(errors.name) ? true : (errors.phone) ? true : (errors.textarea) ? true : false}
                        >
                            Crear
                        </button>
                        <button
                            className="button is-dark"
                            onClick={closeModal}
                        >Cancelar</button>
                    </div>
                    <div>
                        {/* {
                            activeEvent
                            &&
                            <button
                                className="button is-danger"
                                // onClick={ handleDelete }
                            >
                                Eliminar
                            </button>
                        } */}
                    </div>
                </footer>
            </div>
        </div>

    )
}

