import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import Head from 'next/head';
import { APP_NAME } from '../config';


const Signup = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>{APP_NAME} | Signup</title>
            </Head>}
            <Layout>
                <div className='signupPage'>
                    <h2 className='text-center pt-4 pb-4'>Signup</h2>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <SignupComponent />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};


export default Signup;