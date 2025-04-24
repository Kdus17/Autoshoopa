'use client'
import {useState} from "react";
import Link from "next/link";
import {useAuthContext} from "@/hooks/useAuthContext";
import {useRouter} from "next/navigation";

export default function register(){
    const context = useAuthContext();
    const router = useRouter();
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = async(e) => {
        e.preventDefault();
        const post_options = {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username, email, password
            })
        }
        const response = await fetch("https://ecommerce-backend-er55.onrender.com/api/auth/register", post_options)
        const json_response = await response.json();
        if(response.ok){
            context.dispatch({
                type:'LOGIN',
                payload: json_response.token,
            })
            localStorage.setItem("autoshoppa-token", json_response.token);
            router.push("/shop")
            console.log(json_response)
        }


    }

    return (
        <div>
        <form action="" className="p-4 border border-gray-100 rounded-md flex flex-col h-screen justify-center items-center bg-white" onSubmit={handleChange}>
           <div className="flex flex-col w-1/3 px-10 py-10 rounded-md shadow-lg">
            <h3 className="text-2xl text-center font-semibold "> Register</h3>

            <label htmlFor="username" className="text-xl mt-4">username:</label>
            <input type="text" id="username" value={username}
                   onChange={(e)=>setUser(e.target.value)}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md"/>

            <label htmlFor="email" className="text-xl mt-4">Email:</label>
            <input type="text" id="email" value={email}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md"
                   onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password" className="mt-4 text-xl">Password:</label>
            <input type="password" id="password"
                   className="border border-gray-200 outline-none px-3 py-2 rounded-md"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button disabled={false} className="px-3 py-2 rounded-md border border-gray-100 w-fit mt-4 bg-lime-200 text-gray-600 cursor-pointer self-center" onClick={handleChange}>Register</button>
            <p className="self-center py-3"> Already have an account?<Link href="/login" className="text-yellow-500">Login</Link></p>
            </div>
        </form>
        </div>
    )
}