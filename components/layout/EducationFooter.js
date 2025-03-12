import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const EducationFooter=()=>{
return(
<>
<div className="edu-footer-style">
<div className="container">
<div className="edu-footer-main-wrap">
<div className="row">
<div className="col-lg-3 col-md-7">
    <div className="edu-footer-about">
        <div className="logo">
            <Link href="/"legacyBehavior><a>
            <img src={FooterConstant.Logo} alt=""/>
            </a>
            </Link>
        </div>
        <p className="f-about-texts">{FooterConstant.subTitle}</p>
        <ul className="footer-social-links d-flex gap-3 ">
            <li><Link href={FooterConstant.GoogleLink}legacyBehavior><a><i className="bi bi-google"></i></a></Link></li>
            <li><Link href={FooterConstant.TwitterLink}legacyBehavior><a><i className="bi bi-youtube"></i></a></Link></li>
            <li><Link href={FooterConstant.InstagramLink}legacyBehavior><a><i className="bi bi-instagram"></i></a></Link></li>
            <li><Link href={FooterConstant.LinkedinLink}legacyBehavior><a><i className="bi bi-linkedin"></i></a></Link></li>
        </ul>
    </div>
</div>
<div className="col-lg-6">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Courses</h4>
                <ul className="footer-links">
                    <li><Link href="/"legacyBehavior><a>IIT JEE</a></Link></li>
                    <li><Link href="/"legacyBehavior><a>WBJEE</a></Link></li>
                    <li><Link href="/"legacyBehavior><a>NEET</a></Link></li>
                    <li><Link href="/"legacyBehavior><a>Foundation</a></Link></li>
                    <li><Link href="/robotics" legacyBehavior><a>Robotics & AI</a></Link></li>
                    <li><Link href="/"legacyBehavior><a>Olympiads - SOF</a></Link></li>
                </ul>
            </div>
        </div>  
        <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget ">
                <h4 className="footer-widget-title">Company</h4>
                <ul className="footer-links">
                    <li><Link href="/about"legacyBehavior><a>About</a></Link></li>
                    <li><Link href="/results"legacyBehavior><a>Results</a></Link></li>
                    <li><Link href="/franchisee"legacyBehavior><a>Franchisee</a></Link></li>
                    <li><Link href="/job-openings"legacyBehavior><a>Job Openings</a></Link></li>  
                    <li><Link href="/privacy-policy"legacyBehavior><a>Privacy Policy</a></Link></li>  
                    <li><Link href="/school-tie-up"legacyBehavior><a>School Tie-up	</a></Link></li>       
                </ul>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 d-flex justify-content-lg-center pt-4 pt-lg-0">
            <div className="footer-widget">
                <h4 className="footer-widget-title">Centres</h4>
                <ul className="footer-links">
                    <li><Link href="/about/saltlake"legacyBehavior><a>Saltlake</a></Link></li>
                    <li><Link href="/about/phoolbagan"legacyBehavior><a>Phoolbagan</a></Link></li>
                    <li><Link href="/about/howrah"legacyBehavior><a>Howrah</a></Link></li>
                    <li><Link href="/about/andul"legacyBehavior><a>Andul</a></Link></li>
                    <li><Link href="/about/Serampore"legacyBehavior><a>Serampore</a></Link></li>
                    <li><Link href="/about/chandannagar"legacyBehavior><a>Chandannagar</a></Link></li>
                    <li><Link href="/about/mogra"legacyBehavior><a>Mogra</a></Link></li>
                    <li><Link href="/about/rampurHat"legacyBehavior><a>Rampurhat</a></Link></li>
                    <li><Link href="/about/Raiganj"legacyBehavior><a>Raiganj</a></Link></li>
                    <li><Link href="/about/Balurghat"legacyBehavior><a>Balurghat</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="col-lg-3 col-md-6 d-lg-flex justify-content-end pt-4 pt-lg-0">
    <div className="footer-widget">
        <h4 className="footer-widget-title">Contact</h4>
        <ul className="footer-contact-links">
            <li><span>Call :</span><Link href="/"legacyBehavior><a> {FooterConstant.phone}</a></Link></li>
            <li><span>Email :</span><Link href="/"legacyBehavior><a> {FooterConstant.email}</a></Link></li>
            <li><span>Address :</span><Link href="/"legacyBehavior><a> {FooterConstant.address[0]}</a></Link></li>
        </ul>
    </div>

</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
    <div className="footer-copyright text-center" dangerouslySetInnerHTML={{__html: FooterConstant.copyrightTwo}}>
    </div>
</div>
</div>
</div>
</div>
</>
)
}
export default EducationFooter