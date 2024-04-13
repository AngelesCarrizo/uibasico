import { addSession } from "../utils/sessionStorage.controller.js";
//import { alert,handleAlert,handleCloseAlert } from "../components/alert.js";

const btnLogin = document.getElementById('btnLogin')
//const alertContainer = document.getElementById('alert_container')
//alertContainer.innerHTML = alert('bg-rose-500')

const btnCloseAlert = document.getElementById('btnCloseAlert')
/*
input = lo que ingresa el usuario por medio de los txt
output = la info de los json en base al usuario ingresado
*/
const auth = async({name, pass})=>{
    const user = await fetch('http://localhost:3000/user/login',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "userName": name,"pass": pass})
    }).then((res)=>{
        if(!res.ok){
            throw new Error("Error en la petición");
        }
        return res.json()
    }).catch(error => {
        console.error("Error:", error)
        throw new Error("Error en la petición");
    });

    return user
}

//btnCloseAlert.addEventListener('click', ()=>{
 //   handleCloseAlert()
//})

btnLogin.addEventListener('click', async () => {
    const name = document.getElementById('txtName').value
    const pass = document.getElementById('txtPass').value

    if(name != '' && pass != ''){
        /*Se hace la busqueda */
        try{
            const user = await auth({name, pass}) 
            addSession(user)
            window.location.href="../pages/home/"
        }catch(error){
            alert('Hubo un problema para iniciar sesion')
        }
    }else{
        alert('Hay campos incompletos')
    }
})