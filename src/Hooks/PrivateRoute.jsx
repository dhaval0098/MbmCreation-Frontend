import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const useAuth = ()=>{
    const [authstate, setauthstate] = useState({isloggedin : false ,Role:""})
    const [isloading, setisloading] = useState(true)

    useEffect(()=>{
        const useremail = localStorage.getItem("userEmail")
        const password = localStorage.getItem("userPassword")

        if(useremail){
            setauthstate({isloggedin:true,useremail})
        }
        setisloading(false)
    },[])
    return{...authstate,isloading}
}
const PrivateRoutes =()=>{
    const auth = useAuth()

    if(auth.isloading){
        return <h1>loading....</h1>
    }
    return auth.isloggedin?<Outlet/>:<Navigate to  = "/login"/>
}
export default PrivateRoutes