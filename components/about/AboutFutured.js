import FuturedItem from './Futured/FuturedItem';
import Link from "next/link";
const AboutFutured = () => {
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
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-1.png?alt=media&token=450a2226-0579-4d1f-a18c-b42701aa6cc2"
              title="IIT JEE"
              desc="Engineering aspirants preparing for IITJEE, WBJEE, BITSAT, COMEDK etc."
              link="/"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-2.png?alt=media&token=ff0569aa-55d0-4d4d-89ba-9d1340dfdc1d"
              title="NEET"
              desc="Medical aspirants aiming to get into AIIMS and Govt Medical college."
              link="/"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-3.png?alt=media&token=8c945ab4-9c2b-4c43-9a9d-208137f25e43"
              title="Robotics & AI"
              desc="This course sparks curiosity in science and math for early learners in grades 3-10."
              link="/robotics"
            />
            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-4.png?alt=media&token=e65c9cfe-8ef6-45cd-acb5-b951370e6dc3"
              title="Foundation Class 7-10"
              desc="This course is apt for students aspiring for Engineering & Medical Entrance Exams."
              link="/"
            />

            <FuturedItem
              icon="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Ffeatured-icon-5.png?alt=media&token=24aec600-e1ea-4a96-8114-592b7b1642ee"
              title="Olympiad"
              desc="Foundation courses are apt for students taking Science & Maths Olympiads."
              link="/"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutFutured;
