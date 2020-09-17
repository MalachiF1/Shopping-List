import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';
import Head from 'next/head';
import { APP_NAME } from '../config';

const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if(router.query.message) {
            return <div className='alert alert-danger'>{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <React.Fragment>
            {<Head>
                <title>{APP_NAME} | Signin</title>
            </Head>}
            <Layout>
                <div className='signinPage'>
                    <h2 className='text-center pt-4 pb-4'>Signin</h2>

                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            {showRedirectMessage()}
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <SigninComponent />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};


export default withRouter(Signin);