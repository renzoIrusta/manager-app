import Swal from "sweetalert2";

 export const fireSwal = ( file ) => {

    Swal.fire({
        title: `${ file ? 'Subiendo imagen...' : 'Creando' }`,
        text: 'Por favor espere...',
        allowOutsideClick: false,
        willOpen: () => {
            Swal.showLoading();
        } 
    });

 }