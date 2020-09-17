import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {

    return (
        <React.Fragment>
            <Head>
                <title>Contact Form</title>
            </Head>
            <Layout>
                <div className='contactPage'>
                    <div className='container-fluid pt-5'>
                        <div className='row'>
                            <div className='col-md-8 offset-md-2'>
                                <h2>Contact Form</h2>
                                <hr />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Contact;