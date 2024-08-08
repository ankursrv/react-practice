const SectionTtl =({sectionTtlText})=>{
    return (
        <>
        <h1 className="text-4xl font-bold text-center mt-12 mb-14"><span className='shadow-2xl p-4'>{sectionTtlText}</span></h1>
        </>
    )
}

const SectionTtlSecondary =({sectionTtlText2})=>{
    return (
        <>
        <h1 className="text-4xl font-bold text-center mt-12 mb-14"><span className='p-4'>{sectionTtlText2}</span></h1>
        </>
    )
}
export {SectionTtl, SectionTtlSecondary} 