function Tech({ Title, Description, ImagePath, backgroundColor }: { Title: string, Description: string, ImagePath: string, backgroundColor: string }) {
    return (
        <>
            <div className='flex gap-4 p-3 bg-[#1a1a1a] rounded-lg'>
                <div className='p-3 rounded-lg w-fit' style={{ backgroundColor: `#${backgroundColor}` }}>
                    <img src={ImagePath} loading='lazy' alt={Title} className='size-8' />
                </div>
                <div className='text-white'>
                    <div className='text-xl'>{Title}</div>
                    <div className='text-white/60 text-sm'>{Description}</div>
                </div>
            </div>
        </>
    );
}

export default Tech;