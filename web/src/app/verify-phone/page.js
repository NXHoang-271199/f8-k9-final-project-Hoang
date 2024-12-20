'use client'
import { FInput, FButton, FStepper, FOTPInput } from "../../component";
import Link from "next/link";
export default function (){
    return(
        <>
            <div>
                <FStepper activeStep={0} />
            </div>
            <div className="text-center mt-5" >
                <h1 className={'text-2xl font-bold'}>Verify phone number</h1>
                <p className="text-zinc-400 text-sm">Enter the 6-digit code sent to ****123456</p>
            </div>

            <div className=" flex flex-col items-center justify-center mt-10">
                <FOTPInput/>
                <p className={'text-zinc-400 mt-5'}>Didn't receive a code?</p>
                <Link className="text-black font-bold mt-5" href={'#'}>Resend in 30 seconds</Link>
                <div className={'mt-5'}>
                    <FButton content={'verify code'} width={310}/>
                </div>
            </div>
            <div className="absolute bottom-10 left-0 right-0">
                <p className="text-zinc-400 text-center">Need help?
                    <Link href={'#'} className="text-black font-bold">Contact Support</Link></p>
            </div>
        </>
    )
}