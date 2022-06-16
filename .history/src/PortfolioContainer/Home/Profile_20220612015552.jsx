import React from 'react';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
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
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;