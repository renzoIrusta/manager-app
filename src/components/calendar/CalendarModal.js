import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { uiCloseModal } from '../../actions/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../auth/inputs/TextInput';
import { PhoneInput } from '../auth/inputs/PhoneInput';
import { TextArea } from '../auth/inputs/TextArea';
import { calendarCreateEvent, calendarDeleteEvent, calendarUpdateEvent, clearActiveEvent } from '../../actions/calendar';

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const endInit = now.clone().add(.5, 'hours');

const initEvent = {
    name: '',
    phone: '',
    textarea: '',
    profesional: '',
    start: now.toDate(),
    end: endInit.toDate()
}

export const CalendarModal = () => {

    const dispatch = useDispatch();

    const { modalState } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);

    const users = useSelector(state => state.users);

    const { register, errors, handleSubmit, reset } = useForm();

    const [formValues, setFormValues] = useState(initEvent);

    const { start, end, name, phone, textarea, profesional } = formValues;

    useEffect(() => {

        if (activeEvent) {
            setFormValues(activeEvent)
        } else {
            setFormValues(initEvent)
        }

    }, [activeEvent, setFormValues])

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(clearActiveEvent());
        setFormValues(initEvent);
        reset();
    }

    const handleEndDate = (e) => {
        // setDateEnd(e)
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleStartDate = (e) => {
        // setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleDelete = () => {
       dispatch( calendarDeleteEvent( activeEvent.id ) )
       dispatch(uiCloseModal());
    }

    const onSubmit = (data, e) => {

        const userData = JSON.parse(data.pros);
        delete data.pros
        const event = {
            start,
            end,
            ...data,
            ...userData
        }

        if (activeEvent) {
            dispatch(calendarUpdateEvent(activeEvent.id, event))
        } else {
            dispatch(calendarCreateEvent(event));
        }

        reset();
        dispatch(uiCloseModal());
    }

    return (
        <div className={`modal animate__animated ${modalState && 'is-active animate__fadeIn'}`}>
            <div
                className="modal-background"
                onClick={closeModal}
            ></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-warning">
                    <p className="modal-card-title">{activeEvent ? 'Actualizar turno' : 'Crear turno'}</p>
                    <button
                        className="delete"
                        aria-label="close"
                        onClick={closeModal}
                    ></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="field mt-5">
                            <label className="label">Fecha y hora inicio</label>
                            <div className="control">
                                <DateTimePicker
                                    minDate={now.toDate()}
                                    onChange={handleStartDate}
                                    value={start}
                                />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Fecha y hora fin</label>
                            <div className="control">
                                <DateTimePicker
                                    onChange={handleEndDate}
                                    minDate={start}
                                    value={end}
                                />
                            </div>
                        </div>
                        <TextInput
                            errors={errors}
                            register={register}
                            name="name"
                            label="Nombre completo"
                            textColor="has-text-grey-dark"
                            value={name}
                        />
                        <PhoneInput
                            errors={errors}
                            register={register}
                            textColor="has-text-grey-dark"
                            value={phone}
                        />
                        <TextArea
                            errors={errors}
                            register={register}
                            label="Servicio"
                            textColor="has-text-grey-dark"
                            value={textarea}
                        />
                        <div className="field mt-5">
                            <label className="label">Elegir un profesional</label>
                            <div className="select is-fullwidth">
                                <select
                                    name="pros"
                                    ref={register}
                                >
                                    {users.map(user => (
                                        <option
                                            key={user.id}
                                            value={
                                                `{"profesional":"${user.data.name}", "bgcolor":"${user.data.color}"}`
                                            }
                                            selected={user.data.name === profesional ? profesional : undefined}
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
                            disabled={(errors.name) ? true : (errors.phone) ? true : (errors.textarea) ? true : false}
                        >
                            { activeEvent ? 'Editar' : 'Crear' }
                        </button>
                        <button
                            className="button is-dark"
                            onClick={closeModal}
                        >Cancelar</button>
                    </div>
                    <div>
                        {
                            activeEvent
                            &&
                            <button
                                className="button is-danger"
                                onClick={ handleDelete }
                            >
                                Eliminar
                            </button>
                        }
                    </div>
                </footer>
            </div>
        </div>

    )
}
