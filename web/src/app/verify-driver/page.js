'use client'
import { FInput, FButton, FStepper, FFileupload } from "../../component";
import Link from "next/link";
export default function (){
    return(
        <>
            <div>
                <FStepper activeStep={1}/>
            </div>
            <div className="text-center mt-5" >
                <h1 className="text-2xl font-bold">Verify driver identity</h1>
                <p className="text-zinc-400 text-sm">Please upload a photo of your ID card & drive
                    <br/>license to confirm your identity</p>
            </div>
            <p className="ml-3 text-sm mt-5 font-bold">Upload driver's license</p>
            <div className=" flex flex-col items-center justify-center">
            
                <div className=" flex flex-row items-center justify-center gap-5">
                    
                    <div>
                        <FFileupload height={100}/>
                        <p className="text-center">Front side</p>
                    </div>
                    
                    <div>
                        <FFileupload height={100}/>
                        <p className="text-center">Back side</p>
                    </div>
                </div>
                <div className="absolute bottom-10">
                    <FButton width={310} content={'Verify ID card'} />
                </div>
                {/* <Link className="text-zinc-400" href={'#'}>Forgot your password</Link> */}
            </div>
            {/* <div className="absolute bottom-10 "> */}
                {/* <FButton width={310} content={'Verify ID card'} /> */}
            {/* </div> */}
        </>
    )
}