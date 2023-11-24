import axios from "axios";

const baseurl = 'https://global-api-java.azurewebsites.net'

export async function UserLogin(email, password) {
    axios.post(`${baseurl}/auth/login`, {
        "email": email,
        "password": password
    }).then((response) => {
        console.log(response.data.token)
        return(response.data)
    }).catch((error) => {
        console.log(error)
        return null;
    })
   
}

export async function UserRegister() {}
