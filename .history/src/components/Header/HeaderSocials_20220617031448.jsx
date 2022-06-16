import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="blank">{BsLinkedin}</a>
        <a href="https://github.com" target="blank"></a>
        <a href="https://twitter.com" target="blank"></a>
    </div>
  )
}

export default HeaderSocials