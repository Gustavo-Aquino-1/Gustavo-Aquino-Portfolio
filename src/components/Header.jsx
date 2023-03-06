import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GoHome } from 'react-icons/go'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineProject } from 'react-icons/ai'
import { MdLightMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import PortfolioContext from '../context/PortfolioContext'

const HeaderArea = styled.header`
  width: 100%;
  background-color: ${(props) => props.colors.color};
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 50px; */

  a {
    text-decoration: none;
    color: ${({ colors }) => colors.subColor };
    font-weight: 800;

    &:hover {
      color: ${({colors}) => colors.color === 'black' ? '#0d8f5d' : '#0a626f' }
    }

    div {
      display: flex;
      gap: 0.5em;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  @media(max-width: 600px) {
    width: 100%;
    margin: auto; // margin auto corrigiu o erro de estar bugando na outa de trocar de pagina projetos para sobre mim por exemplo!!
    a {
      font-size: 16px;
    }
  } 
`

function Header() {
  const { color, subColor, changeTheme } = useContext(PortfolioContext)
  return (
    <>
      <HeaderArea colors={{ color, subColor }}>
        <div title={color === 'white' ? 'darkmode': 'lightmode'} onClick={changeTheme}>
          {color === 'white' ? (
            <MdLightMode
              color={color === 'black' ? 'white' : 'black'}
              style={{ cursor: 'pointer' }}
              size={22}
            />
          ) : (
            <MdOutlineLightMode
              color={color === 'black' ? 'white' : 'black'}
              style={{ cursor: 'pointer' }}
              size={22}
            />
          )}
        </div>

        <Link to='/'>
          <div>
            <GoHome />
            <span>Home</span>
          </div>
        </Link>

        <Link to='/about/me'>
          <div>
            <CgProfile />
            <span>Sobre mim</span>
          </div>
        </Link>

        <Link to='/my/projects'>
          <div>
            <AiOutlineProject />
            <span>Projetos</span>
          </div>
        </Link>
      </HeaderArea>
    </>
  )
}

export default Header
