const ResShimmer = () => {
    return (
        <section className="flex justify-center my-16">
            <div className="flex justify-between w-[480px]">
                <div className="p-4 flex flex-col gap-2">
                    <div className="res-title">
                        <div className='shimmer-bg h-4 w-32 rounded'></div>
                    </div>
                    <div className="res-cuisine">
                        <div className='shimmer-bg h-4 w-32 rounded'></div>
                    </div>
                    <div className="res-rating">
                        <div className='shimmer-bg h-4 w-32 rounded'></div>
                    </div>
                    {/* <p className="res-delivery-time">{sla.minDeliveryTime} - {sla.maxDeliveryTime}</p> */}
                </div>
                <div className="res-image-wrapper">
                    <div className='shimmer-bg rounded-xl h-[144px] w-[156px]'></div>
                </div>
            </div>
        </section>
    )
}

export default ResShimmer;