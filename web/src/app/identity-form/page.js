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
                <p className="text-zinc-400 text-sm ">Please upload a photo of your ID card to
                    to confirm your identity</p>
            </div>
            {/* <p className="ml-5 text-sm mt-5 font-bold">Upload driver's license</p> */}
            <div className="flex-grow flex flex-col items-center justify-center">
            
                <div className="row"> 
                    <div>
                        <FInput type={'text'} label={'Full name'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'Date of Birth'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'GST number'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'Address'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'City'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'State'}/>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center space-y-2 mb-4">
                    <FButton color={'#fff'} backgroundColor={'black'} width={310} content={'Correct'} />
                    <FButton color={'#000'} backgroundColor={'#edf2fa'} width={310} content={'Retake'} />
                </div>
                {/* <Link className="text-zinc-400" href={'#'}>Forgot your password</Link> */}
            </div>
            {/* <div className="absolute bottom-10 "> */}
                {/* <FButton width={310} content={'Verify ID card'} /> */}
            {/* </div> */}
        </>
    )
}