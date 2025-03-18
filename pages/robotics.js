import EducationHeader from '../components/layout/EducationHeader';
import Robotics from '../components/Education/Robotics';
import Footer from '../components/layout/footer';

import BreadCrumb from '../components/header/breadcrumb';
import Header from '../components/layout/header';
import AllCounter from '../components/services/Allcounter';
import ServicePricing from '../components/services/AllPricing';
import AllServices from '../components/services/Allservices';
import ServiceNewsletterRobotics from '../components/services/NewsletterRobotics';
import SolutionArea from '../components/services/solutionsection';
import TestimonialClient from '../components/services/TestimonialClient';

import AboutFutured from '../components/about/AboutFutured';

const RoboticsPage = () => {
    return (
        <>
            <EducationHeader />
            <Robotics />
            <ServicePricing />
            <AllCounter />
            
            <AboutFutured />
            <ServiceNewsletterRobotics />
            <Footer />
        </>
    );
};

export default RoboticsPage;
