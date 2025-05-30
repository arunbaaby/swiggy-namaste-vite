import "../assets/shimmer.css";

const Shimmer = () => {
    return (
        <section className="res-wrap">
            <div className="res-details-card shimmer-card">
                <div className="res-info shimmer-info">
                    <div className="shimmer-title shimmer-bg"></div>
                    <div className="shimmer-text shimmer-bg"></div>
                    <div className="shimmer-text shimmer-bg"></div>
                </div>
                <div className="res-image-wrapper shimmer-img-wrapper">
                    <div className="shimmer-img shimmer-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default Shimmer;
