import React, { useRef } from 'react';

import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const SignUp = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const conformPasswordRef = useRef('')


    const handleFromSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const conformPassword = conformPasswordRef.current.value
    }

    return (
        <div className='container w-50' >
            <h1 className='text-center mt-5 text-primary '>SignUp Form</h1>

            <Form onSubmit={handleFromSubmit} className='mx-auto mt-5  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Conform Password</Form.Label>
                    <Form.Control type="password" ref={conformPasswordRef} placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p >already <Link className='text-danger text-decoration-none pe-auto' to='/login' >sign up ?</Link> </p>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

        </div>
    );
};

export default SignUp;