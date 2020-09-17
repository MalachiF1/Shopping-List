import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Layout from '../../../../components/Layout';
import { withRouter } from 'next/router';
import { signup } from '../../../../actions/auth';


const ActivateAccount = ({ router }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const { name, token, error, loading, success, showButton } = values;

    useEffect(() => {
        let token = router.query.id;
        if(token) {
            const { name } = jwt.decode(token);
            setValues({ ...values, name, token })
        }
    }, [router]);

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loadin: true, error: false });
        signup({token}).then(data => {
            if(data.error) {
                setValues({ ...values, error: data.error, loading: false, showButton: false });
            } else {
                setValues({ ...values, loading: false, success: true, showButton: false });
            }
        });
    };

    const showLoading = () => (loading ? <div className='alert alert-info'>Loading...</div> : '');
    const showError = () => (error ? <div className='alert alert-danger'>{error}</div> : '');
    const showSuccess = () => (success ? <div className='alert alert-success'>Signup success! Email has been sent to user informing them the account has been activated.</div> : '');

    return (
        <Layout>
            <div className='activateAcountPage'>
                <div className='container pt-5'>
                    <h3>Ready to activate {name}'s account?</h3>
                    <hr  className='pb-4'/>
                    {showLoading()}
                    {showError()}
                    {showSuccess()}
                    {showButton && <button className='btn btn-primary' onClick={clickSubmit}>Activate Account</button>}
                </div>
            </div>
        </Layout>
    );
};

export default withRouter(ActivateAccount);