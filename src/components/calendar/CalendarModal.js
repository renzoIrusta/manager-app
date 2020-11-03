import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiCloseModal } from '../../actions/ui';

export const CalendarModal = () => {

    const { modalState } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    return (
        <div class={`modal animate__animated ${modalState && 'is-active animate__fadeIn'}`}>
            <div
                class="modal-background"
                onClick={ closeModal }
            ></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button 
                    class="delete" 
                    aria-label="close"
                    onClick={ closeModal }
                    ></button>
                </header>
                <section class="modal-card-body">

                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button 
                    class="button"
                    onClick={ closeModal }
                    >Cancel</button>
                </footer>
            </div>
        </div>
    )
}
