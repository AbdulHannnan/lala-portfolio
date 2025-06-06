import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/muhammad-zeeshan-9a9298261/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="http://github.com/Aflaaaton" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials