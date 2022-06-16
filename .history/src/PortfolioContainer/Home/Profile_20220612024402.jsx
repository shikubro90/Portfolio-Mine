import React from 'react';
import Typical from 'react-typical'

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details text-center'>
                    <div className='colz'>
                        <a href='www.facebook.com'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'm  <span className='highlighted-text'>Shiku</span>
                        </span>
                    </div>

                    <div className='profile-details-rol'>
                        <span className='primary-text'>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={}
                            />
                        </span>
                    </div>

                        
                </div> 
                {/* profile details end */}
            </div>
            {/* profile parent */}
        </div>
    );
};

export default Profile;