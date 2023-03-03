import React, { useContext } from 'react'
import Header from '../components/Header'
import myprojects from '../data/MyProjectsData'
import styled from 'styled-components'
import PortfolioContext from '../context/PortfolioContext';

const MyProjectsContainer = styled.div`
  height: 100vh;
  background-color: ${({ color }) => color}; // desestruturando color direto do props
  padding-bottom: 100px;
   //height: 100vh; // nao coloque height 100vh deixe no automatico !!

   @media (max-width: 600px) {
    height: 100%;
  }
`;

const MyProjectsArea = styled.div`
  /* height: 100%; */
  width: 80%;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  gap: 1.5em;

  div {
    text-align: center;
    padding: 10px;
    a {
      text-decoration: none;
      font-size: 19px;
      color: ${({ color }) => color};
      font-weight: 500;
      &:hover {
        color: ${(props) => props.color === 'black' ? '#0a626f' : '#2caa7a'} // com o props
      }
    }
    img {
      width: 350px;
      height: 219px;
      border-radius: 7px;
      box-shadow: 1px 1px 10px 1px  ${(props) => props.color === 'black' ? 'gray' : 'grey'};
    }

    #e3 {
      background-color: #002c33;
      height: 200px;
      padding: 10px;
    }
  }

  @media (max-width: 600px) {
    display: block;
    width: 95%;
    gap: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));

    div {
      img {
        width: 300px;
      }
    }
  }
`

function MyProjects() {
  const { color, subColor } = useContext(PortfolioContext);
  return (
    <MyProjectsContainer color={color}>
      <Header />

      <MyProjectsArea color={subColor}>
        {
          myprojects.map((e) => (
            <div
              key={e.id}
            >
              <img src={e.img}  id={'e' + e.id} alt={e.title} />
              <p>
                <a rel="noopener noreferrer" target="_blank" href={e.link}>{e.title}</a>
              </p>
            </div>
          ))
        }
      </MyProjectsArea>
    </MyProjectsContainer>
  )
}

export default MyProjects