import Link from "next/link"
import TestimonialClientList from "../layout/TestimonialClientList"
import Carousel from 'react-slick';

const TestimonialClient=()=>{

const SliderSetting = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 1224,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
};    

return(
<>
<div className="about-testimonial-area">
<div className="container py-5">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>What  our <span>Students</span> say</h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>Students appreciate the supportive environment, engaging teaching methods, and personalized attention, highlighting how these factors enhance their learning experience significantly.
            </p>
        </div>
    </div>
</div>
<div className="row pt-50">
<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
<div className="inner-slide-wrap">

 <Carousel
  {...SliderSetting}
 >   
  <TestimonialClientList
   name="Rakhi Ghosh"
   pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Frakhi.png?alt=media&token=264612a7-0320-49da-aa88-263063be7aab"
   position="Kalyani Medical College"
   review="When I came here just before 12 I couldn't think of clearing NEET. Now I am among the 10% who clears neet in 1st attempt. From scaring physics to clearing JEE mainly for it. Thank you to the entire team."
  /> 

  <TestimonialClientList
   name="Atiksh Agarwal"
   pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2FAtik.png?alt=media&token=e5327fae-0f9c-44e4-af58-5756fe8789ac"
   position="IIT Delhi"
   review="When I joined zenith I was struggling with physics. Soon enough, through the help and guidance I received it became my most scoring subject. Highly recommended. Wouldn't be in IITD without Team Zenith."
  /> 

  <TestimonialClientList
   name="Shreya Sinha"
   pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fshreya.png?alt=media&token=54d07779-486e-47b8-8007-509b1032f839"
   position="National Medical College"
   review="I owe all my success to my mentors at Zenith and my parents. Varun Sir is one of the best teacher I have met. The way he delivers the lecture and his notes are sufficient for establishing firm base in concepts for Physics."
  /> 

  <TestimonialClientList
   name="Rishabh Agarwal"
   pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Frishabh.png?alt=media&token=587b335d-8e73-4d90-95f6-261f5e078cf1"
   position="IIT Kharagpur"
   review="The mentors at Zenith helped me throughout the 2 years. The credit for my success goes to all the three mentors Varun Sir, Radhesh Sir, Amit Sir. They were available at every stage for any query that I had whilst guiding me on how to crack the examination."
  /> 

  <TestimonialClientList
   name="Pranay Agarwal"
   pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fpranay.png?alt=media&token=faa6b533-7a46-4dc8-b148-909520916cd4"
   position="IIT Kanpur"
   review="I joined Zenith and after attending classes for a month, I felt motivated that I could do it and it helped me work even harder. The teachers motivated me at every step and helped me get to the level."
  /> 


 </Carousel> 


</div>
</div>
</div>
</div>
</div>
</>
)
}
export default TestimonialClient