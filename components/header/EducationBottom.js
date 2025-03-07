import React, { useState, useEffect } from 'react';
import Link from "next/link";
import EducationDetailOne from "../../constant/education/DetailOne";
import StudentForm from './StudentForm';  // Make sure to adjust the import path as needed
import Slider from 'react-slick/lib/slider';
import EducationDetailOne2 from '../../constant/education/DetailOne2';
import EducationDetailOne3 from '../../constant/education/DetailOne3';

const EducationHeaderBottom = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleActionButtonClick = (e) => {
    e?.preventDefault();
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="edu-hero-style">
        <Slider
        infinite={true}
        arrows={false}
        dots={true}
       >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center pb-5 pb-lg-0">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="edu-hero-content">
                <h2 className="edu-hero-title">
                  {EducationDetailOne.Title}
                </h2>
                <p>
                  {EducationDetailOne.subTitle}
                </p>
                <div className="edu-hero-btn">
                  <a href="#" className="edu-btn-fill" onClick={handleActionButtonClick}>
                    {EducationDetailOne.actionBtn}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-10 py-lg-5 py-4 order-0 order-lg-1">
              <div className="ag-hero-figure">
                <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fedu-hero-figure.png?alt=media&token=3795d40f-815f-434e-9951-b68bcf352813" alt="" className="img-fulid"/>

                <div className="florting-mail-label" onClick={handleActionButtonClick} style={{ cursor: 'pointer' }}>
                  <div className="icon"><i className="bi bi-envelope"></i></div>
                  <h6>{EducationDetailOne.flotingMail.title}</h6>
                  <p>{EducationDetailOne.flotingMail.subTitle}</p>
                </div>
                <div className="florting-mail-label-two">
                  <div className="icon"><i className="bi bi-heart"></i></div>
                  <h4>{EducationDetailOne.flotingStudent.number}</h4>
                  <p>{EducationDetailOne.flotingStudent.title}</p>
                  <img src={EducationDetailOne.flotingStudent.groupImg} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-lg-between align-items-center pb-5 pb-lg-0">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="edu-hero-content">
                <h2 className="edu-hero-title">
                  {EducationDetailOne2.Title}
                </h2>
                <p>
                  {EducationDetailOne2.subTitle}
                </p>
                <div className="edu-hero-btn">
                  <a href="#" className="edu-btn-fill" onClick={handleActionButtonClick}>
                    {EducationDetailOne2.actionBtn}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-10 py-lg-5 py-4 order-0 order-lg-1">
              <div className="ag-hero-figure">
                <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Frobotics.png?alt=media&token=b546ddac-d547-47ce-b0ec-5bf981b0546c" alt="" className="img-fulid"/>

                <div className="florting-mail-label" onClick={handleActionButtonClick} style={{ cursor: 'pointer' }}>
                  <div className="icon"><i className="bi bi-envelope"></i></div>
                  <h6>{EducationDetailOne2.flotingMail.title}</h6>
                  <p>{EducationDetailOne2.flotingMail.subTitle}</p>
                </div>
                <div className="florting-mail-label-two">
                  <div className="icon"><i className="bi bi-heart"></i></div>
                  <h4>{EducationDetailOne2.flotingStudent.number}</h4>
                  <p>{EducationDetailOne2.flotingStudent.title}</p>
                  <img src={EducationDetailOne2.flotingStudent.groupImg} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="container">
          <div className="row justify-content-lg-between align-items-center pb-5 pb-lg-0">
            <div className="col-lg-5 order-1 order-lg-0">
              <div className="edu-hero-content">
                <h2 className="edu-hero-title">
                  {EducationDetailOne3.Title}
                </h2>
                <p>
                  {EducationDetailOne3.subTitle}
                </p>
                <div className="edu-hero-btn">
                  <a href="#" className="edu-btn-fill" onClick={handleActionButtonClick}>
                    {EducationDetailOne3.actionBtn}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-10 py-lg-5 py-4 order-0 order-lg-1">
              <div className="ag-hero-figure">
                <img src="https://firebasestorage.googleapis.com/v0/b/cloud-profiler-demo-399610.appspot.com/o/zenith-website%2Fnew-centre.png?alt=media&token=17f0814b-8cbc-4e23-8d6f-4e81de78b717" alt="" className="img-fulid"/>

                <div className="florting-mail-label" onClick={handleActionButtonClick} style={{ cursor: 'pointer' }}>
                  <div className="icon"><i className="bi bi-envelope"></i></div>
                  <h6>{EducationDetailOne3.flotingMail.title}</h6>
                  <p>{EducationDetailOne3.flotingMail.subTitle}</p>
                </div>
                <div className="florting-mail-label-two">
                  <div className="icon"><i className="bi bi-heart"></i></div>
                  <h4>{EducationDetailOne3.flotingStudent.number}</h4>
                  <p>{EducationDetailOne3.flotingStudent.title}</p>
                  <img src={EducationDetailOne3.flotingStudent.groupImg} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
      {showForm && <StudentForm onClose={handleCloseForm} />}
    </>
  );
};

export default EducationHeaderBottom;