import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import { useAuth } from '../utils/context/authContext';

function RegisterForm() {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    uid: user.fbUser.uid,
    name: '',
    email: '',
    seller: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(formData).then(() => updateUser(user.fbUser.uid));
    console.warn(user.uid, user.fbUser.uid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Registration</Form.Label><br />
        <Form.Text className="text-muted">Please enter your name</Form.Text>
        <Form.Control type="text" name="FirstName" required placeholder="Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your email address</Form.Text>
        <Form.Control type="email" name="Email" required placeholder="Enter Email Address" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your address</Form.Text><br />
        <Form.Check
          className="seller?"
          type="switch"
          label="Will you be selling products?"
          id="seller"
          name="isSeller"
          checked={formData.isSeller}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              isSeller: e.target.checked,
            }));
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    fbUser: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      userName: PropTypes.string,
      profileImgUrl: PropTypes.string,
      address: PropTypes.string,
      isSeller: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default RegisterForm;
