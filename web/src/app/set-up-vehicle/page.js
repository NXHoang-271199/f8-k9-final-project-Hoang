'use client'
import { FInput, FButton, FStepper, FFileupload } from "../../component";
import Link from "next/link";
export default function (){
    return(
        <>
            <div>
                <FStepper activeStep={2}/>
            </div>
            <div className="text-center mt-5" >
                <h1 className="text-2xl font-bold">Verify driver identity</h1>
                <p className="text-zinc-400 text-sm ">Please upload information of your vehicle</p>
            </div>
            {/* <p className="ml-5 text-sm mt-5 font-bold">Upload driver's license</p> */}
            <div className="flex-grow flex flex-col items-center justify-center mt-5">
            
                <div className="row"> 
                    <div>
                        <FInput label={'Vehicle Plate Number'}/>
                    </div>
                    <div>
                        <FInput type={'text'} label={'Color'}/>
                    </div>

                    <div className="">
                        <label className="ml-3 text-sm mt-5 font-bold">Vehicle's image</label>
                        <div className="flex flex-col items-center space-y-2 mb-4"><FFileupload height={80} width={ 320 }/></div>
                    </div>

                    <div>
                        <label className="ml-3 text-sm mt-5 font-bold">Vehicle's RC image</label>
                       <div className="flex flex-col items-center space-y-2 mb-4"><FFileupload height={80} width={ 320 }/></div>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center space-y-2 mb-4 mt-10">
                    <FButton color={'#fff'} backgroundColor={'black'} width={320} content={'Save & Continue'} />
                </div>
                {/* <Link className="text-zinc-400" href={'#'}>Forgot your password</Link> */}
            </div>
            {/* <div className="absolute bottom-10 "> */}
                {/* <FButton width={310} content={'Verify ID card'} /> */}
            {/* </div> */}
        </>
    )
}