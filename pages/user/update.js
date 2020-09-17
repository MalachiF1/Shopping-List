import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';
import Head from 'next/head';

const UserProfileUpdate = () => {

    return (
        <React.Fragment>
            {<Head>
                <title>Update Your Profile</title>
            </Head>}
            <Layout>
                <Private>
                    <div className='updatePage'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <ProfileUpdate />
                            </div>
                        </div>
                    </div>
                </Private>
            </Layout>
        </React.Fragment>
    );
};


export default UserProfileUpdate;