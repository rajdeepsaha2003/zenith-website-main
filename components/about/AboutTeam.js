import Carousel from 'react-slick';
import AboutTeamItem from './Team/item';

const AboutTeam=()=>{

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
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
<div className="about-team-area pb-100 pt-100">
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="hrdd-section-title text-capitalize">
            <h1>Best Dedicated <span>Mentors</span></h1>
        </div>
    </div>
    <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-24">
        <div className="section-text wow animate flipInX" data-wow-delay="300ms" data-wow-duration="1500ms">
            <p>The faculty members at Zenith are dedicated educators, fostering a collaborative environment that encourages critical thinking and personal growth among students.</p>
        </div>
    </div>
</div>
<div className="row pt-50">
    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
     <Carousel
      {...SliderSetting}
     >


    <AboutTeamItem 
       pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins1.png?alt=media&token=1ee73676-393f-4a21-a614-2a799f55543e"
       name="Varun Goenka"
       position={
        <>
            Chief Mentor Physics <br />
            IIT Kharagpur, NIT Trichy
        </>
    }
    />
        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins2.png?alt=media&token=5d1a6b55-f73a-4998-ab56-8ce006339799"
            name="Amit Bachhawat"
            position={
                <>
                    Chief Mentor Mathematics<br />
                    IIT Roorkee
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fins3.png?alt=media&token=b5fe4a3b-dbf6-466d-b2b0-8cfd9ea60e25"
            name="Dr Ritesh Pandey"
            position={
                <>
                    Chief Mentor Chemistry<br />
                    St Xavier’s College
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F1.%20Payel%20Kundu%20-%20Mentor%20Biology%20-%20M.Sc%20in%20Zoology.png?alt=media&token=0cab216d-c43b-4a09-adb7-7863754613db"
            name="Payel Kundu"
            position={
                <>
                    Biology Mentor<br />
                    MSc Calcutta University
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F2.%20Sandipan%20Shah%20-%20Mentor%20Physics%20-%20M.Sc%20Astrophysics.png?alt=media&token=0c70dc58-14bb-4737-8ee0-f4fd9a96f781"
            name="Sandipan Shah"
            position={
                <>
                    Physics Mentor<br />
                    MSc Astrophysics
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2F3.%20Swagata%20Saha%20-%20M.Sc%20in%20Chemistry%20-%20IIT%20Hyderabad.png?alt=media&token=1bcfa030-ff4b-4b6f-8048-d125ab8360cc"
            name="Swagata Saha"
            position={
                <>
                    Chemistry Mentor<br />
                    IIT Hyderabad
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2FAmit%20Sarkar%20-%20Mentor%20Maths%20-%20Msc%20Mathematics.png?alt=media&token=f4ce300c-2066-4b10-843a-c561d2d97d8c"
            name="Amit Sarkar"
            position={
                <>  
                    Mathematics Mentor<br />
                    MSc Mathematics
                </>
            }
        />

        <AboutTeamItem 
            pic="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2FAlpheswar%20Pandit%20-%20Administration%20Head%20-%20University%20of%20Bath.png?alt=media&token=8404d374-e969-4ede-96e0-c5bfb810807f"
            name="Alpheswar Pandit"
            position={
                <>
                    Career Counsellor<br />
                    University of Bath
                </>
            }
        />
     </Carousel>
    </div>
</div>
</div>
</div>
</>
)
}
export default AboutTeam