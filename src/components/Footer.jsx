import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
import { SiGmail } from 'react-icons/si'
import styled from 'styled-components'

const FooterArea = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;

  a {
    font-size: 38px;
    color: white;

  }
`;

function Footer() {
  return (
    <FooterArea>
      <a href="https://google.com"><BsLinkedin /></a>
      <a href="https://google.com"><VscGithubInverted /></a>
      <a href="https://google.com"><SiGmail /></a>
    </FooterArea>
  )
}

export default Footer