import axios from 'axios'
const apiEp ='https://randomuser.me/api/?results=10&gender='

export const fetchData = async(str) =>{

    try {
        const response = await axios(apiEp + str)
        return response.data       
    } catch (error) {
        console.log(error)
        return error.message;
    }
}