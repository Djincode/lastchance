


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import FormContainer from '../components/FormContainer';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     emailjs.send(
//       'service_rllzss3', 
//       'template_xkyl9ut', 
//       formData, 
//       'YpS8KUApmuOFM82a2'
//     ).then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//     }).catch((err) => {
//       console.log('FAILED...', err);
//     });
//   };

//   return (
//     <>
//       <Link to='/admin/productlist' className='btn btn-light my-3'>
//         Go Back
//       </Link>
//       <FormContainer>
//         <h1>Send Us Email</h1>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId='name'>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type='text'
//               name='name'
//               placeholder='Enter name'
//               value={formData.name}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='surname'>
//             <Form.Label>Your Email address</Form.Label>
//             <Form.Control
//               type='email'
//               name='surname'
//               placeholder='example@mail.com'
//               value={formData.surname}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='message'>
//             <Form.Label>Your Message</Form.Label>
//             <Form.Control
//               as='textarea'
//               name='message'
//               rows={7}
//               placeholder='Enter your message'
//               maxLength={200}
//               value={formData.message}
//               onChange={handleChange}
//               style={{ resize: 'none' }}
//             ></Form.Control>
//           </Form.Group>

//           <Button
//             type='submit'
//             variant='primary'
//             style={{ marginTop: '1rem' }}
//           >
//             Send
//           </Button>
//         </Form>
//       </FormContainer>
//     </>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {toast} from 'react-toastify'
import emailjs from 'emailjs-com';
import '../assets/styles/style.css'
import {FaWhatsapp}  from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Mail sent');
    const emailParams = {
      to_name: 'Admin', 
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_rllzss3', 
      'template_xkyl9ut', 
      emailParams, 
      'YpS8KUApmuOFM82a2'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      console.log('FAILED...', err);
    });
  };

  const handleWhatsappClick = () => {
   
    const phoneNumber = '+994553194157';

    
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

  
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Send Us Email</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Enter name'
              value={formData.name}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Your Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='example@mail.com'
              value={formData.email}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='message'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as='textarea'
              name='message'
              rows={7}
              placeholder='Enter your message'
              maxLength={200}
              value={formData.message}
              onChange={handleChange}
              style={{ resize: 'none' }}
            ></Form.Control>
          </Form.Group>

          <Button
            type='submit'
            variant='primary'
            style={{ marginTop: '1rem' }}
          >
            Send
          </Button>
        </Form>
         <div className="form-wp">
            <h4>Or:</h4>
            <FaWhatsapp onClick={handleWhatsappClick} size={40} style={{cursor: "pointer"}}/>
         </div>
      </FormContainer>
     
    </>
  );
}

export default Contact;


