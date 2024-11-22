import axios from "axios"
import { BASE_URL, DELETE_USER, GET_USER, POST_USER } from "../constant"

let get_user = async (action) => {
    let { data, status } = await axios.get(BASE_URL + GET_USER)
    console.log(data);
    return { data, status }
}

let post_user = async (action) => {
    let { data, status } = await axios.post(BASE_URL + POST_USER, action.payload)
    return { data, status }
}

let delete_user = async (action) => {
    let { data, status } = await axios.delete(BASE_URL + DELETE_USER + action.payload)
    return { data, status }
}
export { get_user, post_user, delete_user }