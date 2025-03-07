import HOMEHEADER from '../../constant/HeaderConstant/HomeHeader';
import Link from 'next/link';
import Image from 'next/image';

const HBottom = () => {
  return (
    <>
      <div className="hrrd-hero positioning d-lg-block d-none d-sm-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hrrd-hero-content">
                <h1>{HOMEHEADER.HomeTitle}</h1>
                <p>{HOMEHEADER.HomeSubtitle}</p>
                <div className="hrrd-hero-btn-wrap">
                  <Link href="/"legacyBehavior>
                    <a className="common-btn btn-hrrd-1">
                      {HOMEHEADER.ActionBtnText}
                    </a>
                  </Link>
                </div>
                <div className="hrrd-hero-client-logo">
                  <ul>
                    <li>
                      <Image src={HOMEHEADER.Logo1} width="90" height="22" />
                    </li>
                    <li>
                      <Image src={HOMEHEADER.Logo2} width="90" height="22" />
                    </li>
                    <li>
                      <Image src={HOMEHEADER.Logo3} width="90" height="22" />
                    </li>
                    <li>
                      <Image src={HOMEHEADER.Logo4} width="90" height="22" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hrrd-hero-img-wrap">
                <div className="hrrd-hero-img">
                  <Image src={HOMEHEADER.ConverImage} alt="" width={100} height={50} />
                  <div className="hrrd-hero-post">
                    <h4>Post Type</h4>
                    <div className="hrrd-hero-post-shape">
                      <Image
                        src="assets/images/shape/hrrd-hero-post.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                      <Link href="/"legacyBehavior>
                        <a>
                          <i className="bi bi-download"></i>
                        </a>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <span></span>
                        <Link href="/"legacyBehavior>
                          <a>Images</a>
                        </Link>
                      </li>
                      <li>
                        <span></span>
                        <Link href="/"legacyBehavior>
                          <a>Videos</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="like-cart hero-like-cart">
                    <div className="like-cart-box">
                      <div className="like-cart-icon">
                        <i className="bx bxs-like"></i>
                      </div>
                      <div className="like-cart-content">
                        <h4>398K</h4>
                        <h6>Total Likes</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="shape hrrd-hero-shape"
          src="assets/images/shape/hrrd-hero-shape.png"
          alt=""
          width={100}
          height={50}
        />
        <Image
          className="shape hrrd-hero-shape-top"
          src="assets/images/shape/hrrd-hero-shape-top.png"
          alt=""
          width={100}
          height={50}
        />
      </div>

      <div className="hrrd-hero positioning d-lg-none d-block d-sm-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="hrrd-hero-img-wrap-mobile">
                <div className="hrrd-hero-img">
                  <Image src="assets/images/hrrd-hero-img-mobile.png" alt="" width={100} height={50} />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="hrrd-hero-content">
                <h1>Start Your \n        IIT JEE | NEET Preparation</h1>
                <div className="hrrd-hero-btn-wrap">
                  <a className="common-btn btn-hrrd-1" href="services.html">
                    Get 15 Day Trial
                  </a>
                </div>
                <div className="hrrd-hero-client-logo">
                  <ul>
                    <li>
                      <Image
                        src="assets/images/client-logo/hrrd-client-logo-1.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </li>
                    <li>
                      <Image
                        src="assets/images/client-logo/hrrd-client-logo-2.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </li>
                    <li>
                      <Image
                        src="assets/images/client-logo/hrrd-client-logo-1.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </li>
                    <li>
                      <Image
                        src="assets/images/client-logo/hrrd-client-logo-2.png"
                        alt=""
                        width={100}
                        height={50}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="shape hrrd-hero-shape"
          src="/assets/images/shape/hrrd-hero-shape.png"
          alt=""
          width={100}
          height={50}
        />
      </div>
    </>
  );
};
export default HBottom;
