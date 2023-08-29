import React, { useContext } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { VscGithubInverted } from 'react-icons/vsc'
// import { SiGmail } from 'react-icons/si'
import styled from 'styled-components'
import PortfolioContext from '../context/PortfolioContext'

const FooterArea = styled.footer`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  a {
    font-size: 38px;
    color: white;
  }

  #icon {
    opacity: 0.8;
    &:hover {
      opacity: 1.0;
    }
  }

  @media (max-width: 600px) {
    margin-top: 0;
    a {
      font-size: 30px;
    }
  }
`

function Footer() {
  const { color, subColor } = useContext(PortfolioContext)
  return (
    <FooterArea>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/gustavo--aquino/'
      >
        <BsLinkedin id='icon' color={subColor} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://github.com/Gustavo-Aquino-1'
      >
        <VscGithubInverted id='icon' color={subColor} />
      </a>
    </FooterArea>
  )
}

export default Footer
