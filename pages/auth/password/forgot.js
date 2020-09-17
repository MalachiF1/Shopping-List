import { useState } from 'react';
import Layout from '../../../components/Layout';
import { forgotPassword } from '../../../actions/auth';
import Head from 'next/head';

const ForgotPassword = () => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;

    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });
        forgotPassword({ email }).then(data => {
            if(data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message, email: '', showForm: false })
            }
        });
    };

    const showError = () => (error ? <div className='alert alert-danger'>{error}</div> : '');
    const showMessage = () => (message ? <div className='alert alert-success'>{message}</div> : '');

    const passwordForgotForm = () => (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group pt-5'>
                    <input 
                        type='email' 
                        onChange={handleChange('email')} 
                        className='form-control' 
                        value={email} 
                        placeholder="Type your email" 
                        required 
                    />
                </div>
                <div>
                    <button className='btn btn-primary'>Send password reset link</button>
                </div>
            </form>
        </div>
    );

    return (
        <React.Fragment>
            <Head>
                <title>Forgot Password</title>
            </Head>
            <Layout>
                <div className='forgotPasswordPage'>
                    <div className='container pt-4'>
                        <h2>Forgot Password</h2>
                        <hr />
                        {showError()}
                        {showMessage()}
                        {showForm && passwordForgotForm()}
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ForgotPassword;