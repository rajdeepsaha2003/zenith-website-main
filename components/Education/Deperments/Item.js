import { useState } from 'react';
import StudentForm from '../../header/StudentForm';

const EducationDepertmentItem = ({ img, name, desc }) => {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className="col-lg-4 col-md-6" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <div className="edu-department-single wow animated fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                    <div className="department-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="department-content">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            {showForm && <StudentForm onClose={handleCloseForm} />}
        </>
    );
};

export default EducationDepertmentItem;