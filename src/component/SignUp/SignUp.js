import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='global'>
          <div className='container w-2/4 '>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className=" text-white">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="bg-primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </div>
    );
};

export default SignUp;