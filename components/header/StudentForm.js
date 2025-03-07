import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXef3y3j0J63NdHhxdn1mo-EneEal3DQE",
    authDomain: "cloud-profiler-demo-399610.firebaseapp.com",
    databaseURL: "https://cloud-profiler-demo-399610-default-rtdb.firebaseio.com",
    projectId: "cloud-profiler-demo-399610",
    storageBucket: "cloud-profiler-demo-399610.appspot.com",
    messagingSenderId: "572657056042",
    appId: "1:572657056042:web:a95784619518744992c653",
    measurementId: "G-481VZRX0FE"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addData(collectionName, data) {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  

  const SnackbarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.severity === 'success' ? '#4caf50' : '#f44336'};
  color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
`;

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Form = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4"><path fill="%23007CB2" d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

const StudentForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      school: '',
      class: '',
      centre: '',
      course: '',
      phoneNumber: '',
      email: '',
    });
  
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);
    const [snackbar, setSnackbar] = useState({
        show: false,
        message: '',
        severity: 'success',
      });
  
    const classOptions = ['Class 1-4','Class 5-6', 'Class 7-8', 'Class 9-10', 'Class 11-12','12 Pass'];
    const centreOptions = ['Howrah', 'Phoolbagan', 'Serampore', 'Andul', 'Saltlake', 'Chandannagar', 'Mogra', 'Rampurhat', 'Raiganj','Balurghat'];
    const courseOptions = ['IIT JEE', 'NEET','Foundation', 'Boards' ,'Olympiad','Robotics ', 'Artificial Intelligence', 'Coding', 'Maths & Aptitude'];
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      // Phone number regex verification
      if (name === 'phoneNumber') {
        const phoneRegex = /^[0-9]{0,10}$/;
        if (!phoneRegex.test(value)) {
          setErrors({ ...errors, phoneNumber: 'Please enter a valid 10-digit phone number' });
        } else {
          setErrors({ ...errors, phoneNumber: undefined });
        }
      }
    };
  
    const validateForm = () => {
      let formErrors = {};
      
      if (!formData.name.trim()) {
        formErrors.name = 'Name is required';
      }
  
      if (!formData.phoneNumber.trim()) {
        formErrors.phoneNumber = 'Phone number is required';
      } else if (formData.phoneNumber.length !== 10) {
        formErrors.phoneNumber = 'Phone number must be 10 digits';
      }
  
    //   if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    //     formErrors.email = 'Please enter a valid email address';
    //   }
  
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataWithTimestamp = {
          ...formData,
          createdAt: serverTimestamp()
        };

        // Submit to Firebase
        const docRef = await addDoc(collection(db, 'zenithForm'), formDataWithTimestamp);
        console.log('Document written with ID: ', docRef.id);

        // Send to Telegram
        const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        // Format the message without timestamp
        const messageLines = Object.entries(formData).map(([key, value]) => `${key}: ${value}`);
        const message = `New form submission:\n\n${messageLines.join('\n')}`;

        console.log('Sending to Telegram:', {
          url: `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          body: { chat_id: chatId, text: message }
        });

        const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });

        console.log('Telegram API response:', {
          status: response.status,
          statusText: response.statusText,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Telegram API Error:', errorData);
          throw new Error(`Failed to send message to Telegram: ${response.status} ${response.statusText}`);
        }

        setSnackbar({
          show: true,
          message: 'Form submitted successfully, we will reach you soon!',
          severity: 'success',
        });
        setTimeout(() => {
          setSnackbar({ ...snackbar, show: false });
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Error submitting form: ', error);
        setSnackbar({
          show: true,
          message: 'An error occurred while submitting the form. Please try again.',
          severity: 'error',
        });
        setTimeout(() => {
          setSnackbar({ ...snackbar, show: false });
        }, 3000);
      }
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  useEffect(() => {
    if (snackbar.show) {
      const timer = setTimeout(() => {
        setSnackbar({ ...snackbar, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbar]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>🚀 Book Your Free Counseling Session!</FormTitle>
        
        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Name*</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="school">School</Label>
            <Input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="class">Class</Label>
            <Select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              <option value="">Select a class</option>
              {classOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="centre">Centre</Label>
            <Select
              id="centre"
              name="centre"
              value={formData.centre}
              onChange={handleChange}
            >
              <option value="">Select a centre</option>
              {centreOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="course">Course</Label>
            <Select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select a course</option>
              {courseOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number*</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              maxLength="10"
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
          </FormGroup>

          <FormGroup style={{ gridColumn: '1 / -1' }}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
        </FormGrid>

        <ButtonGroup>
          <Button type="button" onClick={onClose} style={{ backgroundColor: '#6c757d' }}>Maybe Later</Button>
          <Button type="submit" style={{ backgroundColor: '#ffa600' }}>Submit</Button>
        </ButtonGroup>
      </Form>
      <SnackbarContainer show={snackbar.show} severity={snackbar.severity}>
  {snackbar.message}
</SnackbarContainer>
    </FormContainer>
  );
};

export default StudentForm;