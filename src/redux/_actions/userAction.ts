import { REGISTER_USER } from "./userType";
// import { instance } from "../../components/api/axios.instance";

const USER_URL = "/api/user";

export const registerUser = () => {
    // const data = instance.( );

    return {
        type: REGISTER_USER,
        // payload: data,
    };
}

