import Link from "next/link"
import EducationDepertmentItem from "./Deperments/Item"

const EducationDepertment=()=>{
return(
<>
<div className="edu-department-style position-relative ">
<div className="vactor-shape position-absolute d-none d-lg-block end-0 wow animated fadeInRight" data-wow-duration="2000ms">
    <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fedu-vactor2.svg?alt=media&token=491c79eb-37d8-4869-9670-1d19b3401769" alt=""/>
</div>
<div className="container">
    <div className="row justify-content-center">
        <div className="col-xxl-4 col-lg-6">
            <h2 className="edu-section-title">Why Zenith?</h2>
        </div>
    </div>
    <div className="row gy-4 mt-45">

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F1.%20Experienced%20Mentors.png?alt=media&token=69b7486d-51cf-45a0-a849-efb83cbeb494"
     name="Experienced Mentors"
     desc="Our Mentors have immense experience of guiding students to premiere institutes of India and abroad."
    />

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F2.%20Structured%20Course.png?alt=media&token=ed51d2bb-8682-4851-a83b-a6a896c25cb0"
     name="Structured Course"
     desc="Our course is designed for in depth understanding and application of concepts for entrance as well as boards."
    />

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F3.%20Hybrid%20Learning.png?alt=media&token=fbecaf3d-16e3-4dc6-8cbb-b4b540e8665d"
     name="Hybrid Learning"
     desc="We offer live and recorded classes with doubt-clearing sessions, supporting remote learners and ensuring comprehensive understanding."
    />

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F4.%20Regular%20Mock%20Test.png?alt=media&token=96c5a1fd-83a8-4aea-9dc1-ad2138077e18"
     name="Regular Mock Test"
     desc="Our course includes regular proctored mock tests so that students can gauge themselves and improve upon the exam taking strategy."
    />

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F5.%20Scholarship.png?alt=media&token=50647271-37fb-480f-ad8e-75ce25ff835e"
     name="Scholarship"
     desc="ZST - Zenith Scholarship Test can be taken in offline or online mode, it helps meritorious students in their preparation."
    />

    <EducationDepertmentItem
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F6.%20Best%20Results.png?alt=media&token=30cd34b5-dea6-47a6-906d-02940a418f19"
     name="Best Results"
     desc="We have consistently produced best results in Kolkata for JEE/ NEET examination by each passing year since our inception."
    />

    </div>

    {/* <div className="row justify-content-center mt-60">
        <div className="col-lg-5 text-center">
            <div className="view-more-btn">
                <Link href="/"legacyBehavior><a className="edu-btn-fill">View All Department</a></Link>
            </div>
        </div>
    </div> */}
</div>
</div>
</>
)
}
export default EducationDepertment