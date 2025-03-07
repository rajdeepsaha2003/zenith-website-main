import HomeConstantTwo from "../../../constant/home/DetailTwo"

const DetailTwoImg=()=>{
return(
<>
<div className="col-xxl-7 col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mobt-50">
<div className="collaborate-img-wrap">
    <img src={HomeConstantTwo.CoverImage} alt="" />
    <div className="engagement-cart">
        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fengagement-cart.png?alt=media&token=6417cfa2-885d-42b9-8605-86071a9bf620" alt="" />
    </div>
    <div className="testimonial-cart">
        <div className="testimonial-cart-people">
            <h3>Zenith Institute</h3>
            <h6>Zenith Howrah</h6>
        </div>
        <p>An Altar for Science Enthusiasts</p>
        <i className="bx bxs-quote-right"></i>
    </div>
</div>
</div>
</>
)
}
export default DetailTwoImg