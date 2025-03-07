import TrustedCompanList from './TrustedCompany/Item';

const TrustedCompany = () => {
  return (
    <>
      <div className="edu-client-logo-style">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h2 className="edu-section-title text-center">
                Courses We Offer
              </h2>
            </div>
          </div>
          <div className="edu-client-logo-row mt-5">
            <TrustedCompanList val="IITJEE" />
            <TrustedCompanList val="WBJEE" />
            <TrustedCompanList val="NEET" />
            <TrustedCompanList val="FOUNDATION" />
            <TrustedCompanList val="ROBOTICS & AI" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TrustedCompany;
