import { useRef } from "react";
import Carousel from "react-slick"

const EducationTestimonial=()=>{
const carouselRef = useRef(null)

const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
    }
    };
    
    const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(items.length);
    }
    };    

return(
<>
<div className="edu-testimonial-style">
<div className="vactor-shape position-absolute d-none d-lg-block end-0 wow fadeInRight" data-wow-duration="2000ms">
    <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fedu-vactor4.svg?alt=media&token=385354b9-12ca-4afd-af89-f14d8341f222edu-vactor4.svg" alt=""/>
</div>
<div className="container">

<div className="row align-items-center justify-content-between gy-4">
<div className="col-xxl-7 col-lg-7">
<div className="edu-testimonial-carusol-wrap position-relative">
    {/* <div className="edu-testimonial-card floted-testmonial-card d-none d-md-block animated wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2500ms">
        <div className="testi-card-header">
            <div className="reviwer-info">
                <div className="reviewer-avater">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fstudent3.png?alt=media&token=25e04ef2-d934-4350-854b-11cb1c72cfa2" alt=""/>
                </div>
                <div className="reviewer-self">
                    <h4>Pranay Agarwal
                    </h4>
                    <span>BHS | IIT Kanpur
                    </span>
                </div>
            </div>
            <ul className="reviewer-rating d-flex ">
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
                <li><i className="bi bi-star-fill"></i></li>
            </ul>
        </div>
        <div className="testi-card-body">
            <p>
                “I joined Zenith and after attending classes for a month, I felt motivated that I could do it and it helped me work even harder. The teachers motivated me at every step and helped me get to the level.” 
            </p>
        </div>
    </div> */}
    <div className="edu-testimonial-silder">
       <Carousel
        vertical={true}
        speed={1000}
       >
        <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fstudent3.png?alt=media&token=25e04ef2-d934-4350-854b-11cb1c72cfa2" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Pranay Agarwal</h4>
                        <span>IIT Kanpur
                        </span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                “I joined Zenith and after attending classes for a month, I felt motivated that I could do it and it helped me work even harder. The teachers motivated me at every step and helped me get to the level.” 
                </p>
            </div>
        </div>
        <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fstudent2.png?alt=media&token=334975e1-e9bd-43a7-b704-7b56213d0ba5" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Shreya Sinha</h4>
                        <span>MBBS | National Medical College
                        </span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                “I owe all my success to my mentors at Zenith and my parents. Varun Sir is one of the best teacher I have met. The way he delivers the lecture and his notes are sufficient for establishing firm base in concepts for Physics.” 
                </p>
            </div>
        </div>
        <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fstudent1.png?alt=media&token=4fa94dec-c979-47ec-abc0-9071550209d0" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Rishabh Agarwal
                        </h4>
                        <span>DPS | IIT Kharagpur
                        </span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                “The mentors at Zenith helped me throughout the 2 years. The credit for my success goes to all the three mentors Varun Sir, Radhesh Sir, Amit Sir. They were available at every stage for any query that I had whilst guiding me on how to crack the examination.” 
                </p>
            </div>
        </div>
        {/* <div className="edu-testimonial-card">
            <div className="testi-card-header">
                <div className="reviwer-info">
                    <div className="reviewer-avater">
                        <img src="assets/images/education/reviewer-avater.png" alt=""/>
                    </div>
                    <div className="reviewer-self">
                        <h4>Pranay Agarwal
                        </h4>
                        <span>BHS | IIT Kanpur
                        </span>
                    </div>
                </div>
                <ul className="reviewer-rating d-flex">
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                    <li><i className="bi bi-star-fill"></i></li>
                </ul>
            </div>
            <div className="testi-card-body">
                <p>
                “I joined Zenith and after attending classes for a month, I felt motivated that I could do it and it helped me work even harder. The teachers motivated me at every step and helped me get to the level.” 
                </p>
            </div>
        </div> */}
        </Carousel>

    </div>
</div>
</div>
<div className="col-xxl-4 col-lg-5">
<div className="edu-testimonial-right">
    <h2 className="edu-section-title text-start">Reviews from
        Our Beloved Students!</h2>
    <p>We have a never ending relationship with our students, they keep coming back to us even during their college and beyond.</p>
</div>
</div>
</div>
</div>
</div>
</>
)
}
export default EducationTestimonial