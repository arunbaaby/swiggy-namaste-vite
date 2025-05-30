import "../assets/body-shimmer.css";

const BodyShimmmer = () => {
    // Create 12 placeholder cards
    return (
        <section className="res-container">
            {Array(12).fill("").map((_, index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-img shimmer-bg"></div>
                    <div className="shimmer-line shimmer-bg short"></div>
                    <div className="shimmer-line shimmer-bg medium"></div>
                    <div className="shimmer-line shimmer-bg long"></div>
                </div>
            ))}
        </section>
    );
};

export default BodyShimmmer;
