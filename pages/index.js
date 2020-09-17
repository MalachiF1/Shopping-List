import Layout from '../components/Layout';
import Private from '../components/auth/Private';
import Main from '../components/Main';
import Head from 'next/head';
import { APP_NAME } from '../config';

const Index = () => {
    return (
        <Private>
            <Head>
                <title>{APP_NAME}</title>
            </Head>
            <Layout>
                <div className='app'>
                    <div className='app__body pr-1 pl-1'>
                        <Main  />
                    </div>
                </div>
            </Layout>
        </Private>
    );
};


export default Index;