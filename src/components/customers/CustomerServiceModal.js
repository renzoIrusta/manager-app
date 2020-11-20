import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseSecondModal } from '../../actions/ui';

import { TextArea } from '../auth/inputs/TextArea';
import { TextInput } from '../auth/inputs/TextInput';

export const CustomerServiceModal = () => {
    const dispatch = useDispatch();

    const { secondModalState } = useSelector(state => state.ui);

    const { users } = useSelector(state => state.users);

    // const { register, errors, handleSubmit, reset } = useForm();

    const closeModal = () => {

        dispatch(uiCloseSecondModal())

    }


    // const handleDelete = () => {
    //    dispatch( calendarDeleteEvent( activeEvent.id ) )
    //    dispatch(uiCloseModal());
    // }

    // const onSubmit = (data, e) => {

    //     dispatch(uiCloseModal());

    // }

    return (
        <div className={`modal animate__animated ${ secondModalState && 'is-active animate__fadeIn'}`}>
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
                        onClick={ closeModal }
                    ></button>
                </header>
                <section className="modal-card-body">
                    <form>
                        {/* <TextInput
                            // errors={errors}
                            // register={register}
                            name="name"
                            label="Nombre completo"
                            textColor="has-text-grey-dark"
                            // value={name}
                        /> */}
                        {/* <TextArea
                            // errors={errors}
                            // register={register}
                            label="Servicio"
                            textColor="has-text-grey-dark"
                            // value={textarea}
                        /> */}
                        <div className="field mt-5">
                            <label className="label">Elegir un profesional</label>
                            <div className="select is-fullwidth">
                                {/* <select
                                    name="pros"
                                    // ref={register}
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
                                </select> */}
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot has-background-grey-light is-justify-content-space-between">
                    <div>
                        <button
                            className="button is-link has-text-white"
                            // onClick={handleSubmit(onSubmit)}
                            // disabled={(errors.name) ? true : (errors.phone) ? true : (errors.textarea) ? true : false}
                        >
                            {/* { activeEvent ? 'Editar' : 'Crear' } */}
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

