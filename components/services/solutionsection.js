import { useState } from "react"
import serviceDetail from "../../constant/services/serviceDetail"
import StudentForm from "../header/StudentForm";

const SolutionArea=({ title, image, description })=>{
    const [showForm, setShowForm] = useState(false);
    const handleImageClick = () => {
        setShowForm(true);
      };
    const handleCloseForm = () => {
        setShowForm(false);
      };
return(
<>
<div className="solutions-area positioning pb-100">
<div className="container">
<div className="row justify-content-between align-items-center">
<div className="col-xxl-4 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className="hrdd-section-title text-capitalize wow animate fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
        <h1 dangerouslySetInnerHTML={{__html: serviceDetail.Title}}></h1>
    </div>
    <div className="collaborate-info">
        <p>{serviceDetail.subTitle}</p>
    </div>
    <div className="solutions-btn-wrap d-xl-flex align-items-center justify-content-xl-between g-1 wow animate fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
        <a className="common-btn btn-hrrd-1" onClick={handleImageClick}>{serviceDetail.btnTextOne}</a>
        <a href="https://www.youtube.com/watch?v=bboVVCjt9nA&t=10s&ab_channel=ZENITHINSTITUTE" target="_blank" rel="noopener noreferrer" className="common-btn btn-hrrd-2 popup-youtube">
            <i className="bi bi-play-circle-fill"></i>{serviceDetail.btnTextTwo}
        </a>
    </div>
</div>
<div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
    <div className="collaborate-img-wrap">
        {image ? 
            <img src={image} alt="" className="img-fluid w-100"/> 
            : 
            <img src={serviceDetail.coverImage} alt="" className="img-fluid w-100"/>
        }
        {/* <div className="engagement-cart">
            <img src="assets/images/engagement-cart.png" alt=""/>
        </div> */}
        <div className="testimonial-cart">
            <div className="testimonial-cart-people">
                <h3>Zenith Institute</h3>
                {description?
                <h6>{description}</h6>
                :
                <h6>Zenith Howrah</h6>
                }
            </div>
            <p>An Altar for Science Enthusiasts</p>
            <i className="bx bxs-quote-right"></i>
        </div>
    </div>
</div>
{showForm && <StudentForm onClose={handleCloseForm} />}
</div> 
</div>
</div>
</>
)
}
export default SolutionArea