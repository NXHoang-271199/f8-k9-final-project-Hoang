'use client'
import { FInput, FButton, FStepper, FFileupload, FCard, FContainer } from "../../component";
import Link from "next/link";

export default function () {
    return (
        <div className="h-full">
            <div className="w-full bg-black text-white h-1/2 pt-5 pb-5 rounded-b-lg">
                <FContainer>
                    <h3 className="">Wellcome Hai</h3>
                    <p>Statistics from October, 2024</p>
                    <div className="mt-5 flex justify-start flex-wrap gap-3">
                        <FCard maxWidth={175} maxHeight={100} title={'Amount to be sent'} content={'139.792 INR'}/>
                        <FCard maxWidth={175} maxHeight={100} title={'Total orders'} content={'375'}/>
                        <FCard maxWidth={175} maxHeight={100} title={'Rate in each order'} content={'370 INR'}/>                        
                    </div>
                    <p>
                        72.894 INR available to withdraw <span className="text-white font-bold">Withdraw</span>
                    </p>
                </FContainer>
            </div>
            <div className="w-full h-1/2">

            </div>
            
        </div>
    )
}