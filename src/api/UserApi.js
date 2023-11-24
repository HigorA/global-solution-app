import axios from "axios";



export function UserLogin(email, password) {
    axios.post(`${BASEURL}/auth/login`, {
        "email": email,
        "password": password
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}