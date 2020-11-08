import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

import { uiCloseModal } from '../../actions/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../auth/inputs/TextInput';
import { PhoneInput } from '../auth/inputs/PhoneInput';
import { TextArea } from '../auth/inputs/TextArea';

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const endInit = now.clone().add(1, 'hours');

const initEvent = {
    name: '',
    phone: '',
    services: '',
    start: now.toDate(),
    end: endInit.toDate()
}

export const CalendarModal = () => {

    const { modalState } = useSelector(state => state.ui);
    const users = useSelector(state => state.users);

    const { register, errors, handleSubmit } = useForm();

    const [formValues, setFormValues] = useState(initEvent);

    const { start, end } = formValues;

    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(uiCloseModal());
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

    const onSubmit = (data, e) => {
        let datas = JSON.parse(data.pros);
        console.log(datas);
        // console.log(start);
        // console.log(end);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`modal animate__animated ${modalState && 'is-active animate__fadeIn'}`}>
                <div
                    className="modal-background"
                    onClick={closeModal}
                ></div>
                <div className="modal-card">
                    <header className="modal-card-head has-background-warning">
                        <p className="modal-card-title">Crear nuevo turno</p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={closeModal}
                        ></button>
                    </header>
                    <section className="modal-card-body">
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
                        />
                        <PhoneInput
                            errors={errors}
                            register={register}
                            textColor="has-text-grey-dark"
                        />
                        <TextArea
                            errors={errors}
                            register={register}
                            label="Servicio"
                            textColor="has-text-grey-dark"
                        />
                        <div className="select">
                            <select 
                            name="pros"
                            ref={register}
                            >
                                {users.map( user => (
                                    <option
                                    key={user.idData}
                                    value={
                                        `{"nombre":"${user.data.name}", "color":"${user.data.color}"}`
                                    }
                                    >{user.data.name}</option>
                                 ) )}
                            </select>
                        </div>
                    </section>
                    <footer className="modal-card-foot has-background-grey-light">
                        <button
                            className="button is-link"
                            type="submit"
                            disabled={(errors.name) ? true : (errors.phone) ? true : (errors.textarea) ? true : false}
                        >Guardar</button>
                        <button
                            className="button is-danger"
                            onClick={closeModal}
                        >Cancelar</button>
                    </footer>
                </div>
            </div>
        </form>
    )
}
