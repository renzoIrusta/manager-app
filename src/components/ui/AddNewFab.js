import React from 'react';
import { useDispatch } from 'react-redux';

import { uiOpenModal } from '../../actions/ui';


export const AddNewFab = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( uiOpenModal() );
    }

    return (
        <button
        className="button is-link ui__button-fab"
        onClick={ handleClick }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}