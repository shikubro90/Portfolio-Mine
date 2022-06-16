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
                            
                            Hello I'm  <span className='highlighted-text'>Shiku</span>
                        </span>
                    </div>

                    <div className='profile-details-rol'>
                        <span className='primary-text'>
                           <h1>
                           <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic",
                                1000,
                                "Mearn Stack Developer",
                                2000,
                                "Corss Platform",
                                3000,
                                "React / Native Developer",
                                5000,
                            ]}
                            wrapper="p"
                            />
                           </h1>
                           <span className='profile-role-tagline'>
                                Full Stack web developer with very good design sense !
                           </span>
                        </span>
                    </div>
                    
                    <div className='profile-option'>
                        <button className='btn primary-btn'>Hire Me</button>
                        <a href='.pdf' download="Ehizcv ehizcv.pdf">
                            <button className='btn highlighted-btn'>See Resume</button>
                        </a>
                    </div>
                        
                </div> 
                {/* profile details end */}
            </div>
            {/* profile parent */}
        </div>
    );
};

export default Profile;