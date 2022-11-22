import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { GoHome } from 'react-icons/go'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineProject } from 'react-icons/ai';

const HeaderArea = styled.header`
  width: 100%;
  background-color: #2876cf;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: white;
    font-weight: 800;

    div {
      display: flex;
      gap: 0.5em;
      align-items: center;
      justify-content: center;
    }
  }

  
`;


function Header() {
  return (
    <HeaderArea>
        <Link to="/">
          <div>
            <GoHome />
            <span>Home</span>
          </div>
        </Link>

        <Link to="/about/me">
          <div>
            <CgProfile />
            <span>Sobre mim</span>
          </div>
        </Link>

        <Link to="/my/projects">
          <div>
            <AiOutlineProject />
            <span>Meus Projetos</span>
          </div>
        </Link>
    </HeaderArea>
  )
}

export default Header