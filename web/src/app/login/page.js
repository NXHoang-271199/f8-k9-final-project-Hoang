'use client'
import { FInput, FButton } from "../../component";
import Link from "next/link";
export default function (){
    return(
        <>
            <div className="text-center mt-14" >
                <h1 >Welcome to scrap plan</h1>
                <p className="text-zinc-400">Create an acount or login to join your orders</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <FInput label='username' />
                <FInput label={'password'}/>
                <FButton content={'Submit'} width={310}/>
                <Link className="text-zinc-400" href={'#'}>Forgot your password</Link>
            </div>
            <div className="absolute bottom-10 left-0 right-0">
                <p className="text-zinc-400 text-center">Don't have an account? <Link href={'#'} className="text-black font-bold">Register here</Link></p>
            </div>
        </>
    )
}