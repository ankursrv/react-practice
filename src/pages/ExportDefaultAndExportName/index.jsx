import React from 'react'
import {SectionTtl} from '../../component/SectionTtl'

const ExportDefaultAndExportName = () => {
    return (
        <section className="max-w-[1320px] mx-auto my-10">
            <SectionTtl sectionTtlText='ExportDefaultAndExportName' />
            <div className='grid md:grid-cols-2 mt-5 md:gap-8'>
                <div>
                    <h4 className='text-lg font-bold'>ExportDefault</h4>
                    <ul className='mt-4'>
                        <li>
                            <span className='text-xl font-bold'>1. </span>
                            Ek module me sirf ek default export ho sakta hai.
                            <figure className='mt-5'>
                                <img src="./images/exportDefault.png" alt="" />
                            </figure>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold'>ExportName</h4>
                    <ul className='mt-4'>
                        <li>
                            <span className='text-xl font-bold'>1. </span>
                            Ek module me ek se zyada named exports ho sakte hain.</li>
                        <li>
                            <span className='text-xl font-bold'>2. </span>
                            Import karte waqt exact named exports aur curly braces { } ka use hota hai.
                            (Example: <span className='text-pinkPrimary'>import  {`myData, additionalData`} from './someFile';</span> )
                            <figure className='mt-5'>
                                <img src="./images/exportName.png" alt="" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ExportDefaultAndExportName
