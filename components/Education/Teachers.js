import Link from "next/link"
import EduTeacherItem from "./Teacher/item"

const EducationTeacher=()=>{
return(
<>
<div className="edu-instructor-style position-relative">
<div className="vactor-shape position-absolute d-none d-lg-block start-0 top-0 wow animated fadeInLeft" data-wow-duration="2000ms">
<img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fedu-vactor3.svg?alt=media&token=5cd1290e-ffa1-4e14-bcdc-373689fab2b3" alt=""/>
</div>
<div className="container">
<div className="row align-items-center gy-4">
    <div className="col-xxl-4 col-lg-5">
    <div className="edu-section-title text-start">Our Mentors</div>
    </div>
    <div className="col-xxl-8 col-lg-7 text-lg-end">
        <div className="more-btn">
            <a href="about" className="edu-btn-fill">View All Mentors</a>
        </div>
    </div>
</div>
<div className="row mt-45 gy-4 ">
    
    <EduTeacherItem 
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e"
     name="Varun Goenka"
     position="Chief Mentor Physics"
    />

    <EduTeacherItem 
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins2.png?alt=media&token=5d1a6b55-f73a-4998-ab56-8ce006339799"
     name="Amit Bachhawat"
     position="Chief Mentor Maths"
    />

    <EduTeacherItem 
     img="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins3.png?alt=media&token=b5fe4a3b-dbf6-466d-b2b0-8cfd9ea60e25"
     name="Dr. Ritesh Pandey"
     position="Chief Mentor Chemistry"
    />
</div>
</div>
</div>
</>
)
}
export default EducationTeacher