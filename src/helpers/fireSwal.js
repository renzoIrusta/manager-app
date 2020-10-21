import Swal from "sweetalert2";

 export const fireSwal = ( file ) => {

    Swal.fire({
        title: `${ file ? 'Creando perfil con imagen...' : 'Creando perfil...' }`,
        text: 'Por favor espere...',
        allowOutsideClick: false,
        willOpen: () => {
            Swal.showLoading();
        } 
    });

 }