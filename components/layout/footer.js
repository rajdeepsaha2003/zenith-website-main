import Link from "next/link"
import FooterConstant from "../../constant/FooterConstant/FooterConstant"

const Footer=()=>{
return (
    <div className="footer-area hrrd-footer-area positioning pb-100">
        <div className="container">
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
        <div className="footer-wrap">
        <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="single-widget">
                    <div className="footer-logo">
                        <Link href="/"legacyBehavior>
                        <a><img src={FooterConstant.Logo} alt=""/></a>
                        </Link>
                        <p>{FooterConstant.subTitle}</p>
                        <div className="footer-social wow animate flipInX" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <ul>
                                <li><Link href={FooterConstant.GoogleLink}legacyBehavior><a><i className="bi bi-google"></i></a></Link></li>
                                <li><Link href={FooterConstant.LinkedinLink}legacyBehavior><a><i className="bi bi-linkedin"></i></a></Link></li>
                                <li><Link href={FooterConstant.TwitterLink}legacyBehavior><a><i className="bi bi-youtube"></i></a></Link></li>
                                <li><Link href={FooterConstant.InstagramLink}legacyBehavior><a><i className="bi bi-instagram"></i></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="single-widget">
                    <div className="footer-title">
                        <h3>Courses</h3>
                    </div>
                    <div className="footer-link">
                        <ul>
                            <li><Link href="/"legacyBehavior><a>IITJEE</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>WBJEE</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>NEET</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Foundation</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Robotics & AI</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Olympiads - SOF</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="single-widget">
                    <div className="footer-title">
                        <h3>Company</h3>
                    </div>
                    <div className="footer-link">
                        <ul>
                            <li><Link href="/"legacyBehavior><a>About</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Results</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Franchisee</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Job Openings</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>Privacy Policy</a></Link></li>
                            <li><Link href="/"legacyBehavior><a>School Tie-up</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="single-widget">
                    <div className="footer-title">
                        <h3>Centres</h3>
                    </div>
                    <div className="footer-link">
                        <ul>
                        <li><Link href="/about/saltlake">Saltlake</Link></li>
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
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6"> 
                <div className="single-widget">
                    <div className="footer-title">
                        <h3>Contact</h3>
                    </div>
                    <div className="contact-info">
                        <ul>
                            <li><a href="tel:+919051509444">Call : <span>9051509444</span></a></li>
                            <li><a href="mailto:zenithinsti@gmail.com">Email : <span>zenithinsti@gmail.com</span></a></li>
                            <li>Address : <span>India</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="copy-right-area">
        <p className="copy-text">{FooterConstant.copyrightText}</p>
        </div>
        </div>
        </div>
        </div>
        <img className="shape hrrd-footer-shape" src="/assets/images/shape/hrrd-footer.png" alt=""/>
    </div>
);
}
export default Footer