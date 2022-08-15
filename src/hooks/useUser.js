import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useUser = () => {
    const [user] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery(['users'], () => axios(`http://localhost:5000/users/${user?.email}`))
    const userInfo = data?.data;
    return [userInfo, isLoading, refetch]
}
export default useUser