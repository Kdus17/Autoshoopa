"use client"

import {useState} from "react";
import Link from "next/link";
import {useAuthContext} from "@/hooks/useAuthContext";
import {useRouter} from "next/navigation";

export default function Login (){

    const context = useAuthContext()
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setIsLoading] = useState(false);


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(email);
        const post_options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })
        }
        const response = await fetch(`https://ecommerce-backend-er55.onrender.com/api/auth/login`, post_options)
        const json_response = await response.json()
        setIsLoading(false);
        if (response.ok){
            context.dispatch({
                type: "LOGIN",
                payload: json_response,
            })
            localStorage.setItem("autoshoppa-token", JSON.stringify(json_response))
             router.push("/")
             console.log(json_response)
        }
        else {
            alert("Login failed.")
        }
    }

    return (
        <form action="" className="p-4 grid content-around rounded-lg text-black h-screen bg-white font-mono" onSubmit={handleSubmitForm}>
            <div className="justify-center flex flex-col items-center bg-white">
            <div className="flex flex-col w-2/3 md:w-130 px-10 py-10 rounded-md shadow-xl">
            <h3 className="text-2xl text-center font-semibold "> Login</h3>

            <label htmlFor="email" className="text-xl mt-4">Email:</label>
            <input type="text" id="email" value={email}
                   className="border border-gray-200 focus:ring-2 focus:ring-yellow-400 shadow-md
                   px-3 py-2 outline-none rounded-md w-full"
                   onChange={(e) => setEmail(e.target.value)}/>


            <label htmlFor="password" className="mt-4 text-xl">Password:</label>
            <input type="password" id="password"
                   className="border border-gray-200 focus:ring-2 focus:ring-yellow-400 shadow-md
                    outline-none px-3 py-2 rounded-md w-full"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button disabled={loading} className="px-3 py-2 rounded-md border border-gray-100 shadow-md
            w-fit mt-4 bg-yellow-400 hover:bg-yellow-500  cursor-pointer self-center" onClick={handleSubmitForm}>
                {loading ? <div>Logging in...</div>:<div>Login</div>}
                </button>
            
           <p className="self-center py-3"> Don't have an account?<Link href="/register" className="text-yellow-500">Register</Link></p></div>
           </div>
        </form>
    )

}