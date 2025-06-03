import '../assets/res-shimmer.css';

const ResShimmer = () => {
    return (
        <section className="res-wrap skelton">
            <div className="res-details-card">
                <div className="res-info">
                    <div className="res-title">
                        <div className='skeleton skeleton-text'></div>
                    </div>
                    <div className="res-cuisine">
                        <div className='skeleton skeleton-text'></div>
                    </div>
                    <div className="res-rating">
                        <div className='skeleton skeleton-text'></div>
                    </div>
                    {/* <p className="res-delivery-time">{sla.minDeliveryTime} - {sla.maxDeliveryTime}</p> */}
                </div>
                <div className="res-image-wrapper">
                    <div className='res-image skeleton'></div>
                </div>
            </div>
        </section>
    )
}

export default ResShimmer;