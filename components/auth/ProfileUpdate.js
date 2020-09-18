import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';

const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        password: '',
        oldPassword: '',
        error: false,
        success: false,
        loading: false,
        userData: process.browser && new FormData()
    });

    const token = getCookie('token');
    const { 
        username, 
        name,
        password, 
        oldPassword,
        error, 
        success, 
        loading,  
        userData 
    } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    name: data.name,
                });
            }
        });
    };

    useEffect(() => {
        init();
        setValues({ ...values, userData: new FormData() });
    }, []);

    const handleChange = name => e => {
        const value = e.target.value;
        //let userFormData = new FormData();
        userData.set(name, value);
        console.log(...userData);
        setValues({ ...values, [name]: value, userData, error: false, success: false });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                console.log('data.error', data.error);
                setValues({ ...values, error: data.error, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        password: '',
                        oldPassword: '',
                        success: true,
                        loading: false
                    });
                }); 
            }
        });
    };

    const profileUpdateForm = () => (
        <form style={{width: '50vw', paddingTop: '50px'}} onSubmit={handleSubmit}>
            <div>
                <div className="form-group">
                    <label className="text-muted">Username</label>
                    <input onChange={handleChange('username')} type="text" value={username} className="form-control" />
                </div>
            </div>
            <div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange('name')} type="text" value={name} className="form-control" />
                </div>
            </div>
            <div className='card pl-2 pr-2 pb-2 pt-2 changePassword' >
                <div className="form-group">
                    <label className="text-muted">Old Password</label>
                    <input onChange={handleChange('oldPassword')} type="password" value={oldPassword} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">New Password</label>
                    <input onChange={handleChange('password')} type="password" value={password} className="form-control" />
                </div>
            </div>
            <div>
                {showSuccess()}
                {showError()}
                {showLoading()}
            </div>
            <div>
                <button type="submit" className="btn btn-primary mt-3" disabled={!username || !name}>
                    Update
                </button>
            </div>
        </form>
    );

    const showError = () => (
        <div className='alert alert-danger mt-2' style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className='alert alert-success mt-2' style={{ display: success ? '' : 'none' }}>
            Profile Updated
        </div>
    );

    const showLoading = () => (
        <div className='alert alert-info mt-2' style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );


    return (
        <React.Fragment>
            <div className="container" style={{display: "flex", placeContent: 'center', width: '800px'}}>
                <div>
                    {profileUpdateForm()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfileUpdate;