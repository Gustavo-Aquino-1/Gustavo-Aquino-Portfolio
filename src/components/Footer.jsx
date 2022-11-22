import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
// import { SiGmail } from 'react-icons/si'
import styled from 'styled-components'

const FooterArea = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  a {
    font-size: 38px;
    color: white;

  }

  @media (max-width: 600px) {
    a {
      font-size: 30px;
    }
  }
`;

function Footer() {
  return (
    <FooterArea>
      <a href="https://www.linkedin.com/in/gustavo-henrique-aquino/"><BsLinkedin /></a>
      <a href="https://github.com/Gustavo-Aquino-1"><VscGithubInverted /></a>
    </FooterArea>
  )
}

export default Footer