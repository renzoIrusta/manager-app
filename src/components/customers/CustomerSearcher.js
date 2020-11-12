import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { customersSearcher } from '../../actions/customers';
import { db } from '../../firebase/config';

export const CustomerSearcher = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        db.collection("users").orderBy('data.name').startAt('R').endAt('R'+'\uf8ff')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

    }

    return (
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
    )
}
