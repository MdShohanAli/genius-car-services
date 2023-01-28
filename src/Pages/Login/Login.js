
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    let location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        <div>
            <p>Error: {error.message}</p>
        </div>

    }



    return (
        <div className='container w-50 ' >
            <h1 className='text-center mt-5 text-primary'>Login Form</h1>
            <div className='mx-auto mt-5  '  >
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                    <p>New to genius Car <Link to='/signup' className='text-danger text-decoration-none pe-auto'> Please Register</Link> </p>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-danger'>{error.message}</p>
                </Form>
            </div>
        </div>
    );
};

export default Login;