import FutureItem from './futured/item';

const Futured = () => {
  return (
    <>
      <div className="featured-area positioning  pb-76">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="hrdd-section-title text-center wow animate fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h1>
                  <span>Courses</span> We Provide
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-50">
            <FutureItem
              AnimeDelay="400ms"
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-1.png?alt=media&token=450a2226-0579-4d1f-a18c-b42701aa6cc2"
              title="IIT JEE"
              desc="Assertively parallel task synergistic deliverables after high-quality"
            />

            <FutureItem
              AnimeDelay="500ms"
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="NEET"
              desc="Assertively parallel task synergistic deliverables after high-quality"
            />

            <FutureItem
              AnimeDelay="600ms"
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="WBJEE"
              desc="Assertively parallel task synergistic deliverables after high-quality"
            />

            <FutureItem
              AnimeDelay="700ms"
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-4.png?alt=media&token=e65c9cfe-8ef6-45cd-acb5-b951370e6dc3"
              title="Foundation Class 7-10"
              desc="Assertively parallel task synergistic deliverables after high-quality"
            />

            <FutureItem
              AnimeDelay="800ms"
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-5.png?alt=media&token=24aec600-e1ea-4a96-8114-592b7b1642ee"
              title="Olympiad"
              desc="Assertively parallel task synergistic deliverables after high-quality"
            />
          </div>
        </div>
        <img
          className="shape featured-shape"
          src="assets/images/shape/feasured-hrrd.png"
          alt=""
        />
      </div>
    </>
  );
};
export default Futured;
