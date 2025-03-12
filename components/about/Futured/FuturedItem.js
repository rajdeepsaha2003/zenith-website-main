import Link from "next/link";

const FuturedItem = (props) => {
  return (
    <>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow animate fadeInUp"
        data-wow-delay="400ms"
        data-wow-duration="1500ms"
      >
        <div className="featured-box">
          <div className="featured-icon">
            <img src={props.icon} alt={props.title} />
          </div>
          <div className="featured-content">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>

            {/* Left-Aligned Know More Button */}
            {props.link && (
              <div style={{ marginTop: "10px", textAlign: "left" }}>
                <Link legacyBehavior href={props.link} passHref>
                  <a
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      backgroundColor: "#ffa600",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      transition: "0.3s",
                    }}
                  >
                    Know More →
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FuturedItem;
