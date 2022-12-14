import React from 'react'
import Header from '../components/Header';
import styled from 'styled-components';
import { BsFillInfoCircleFill, BsController } from 'react-icons/bs';
import { ImHeadphones } from 'react-icons/im'
import { GiCommercialAirplane } from 'react-icons/gi'

const AboutMeArea = styled.div`
  width: 100%;
  background-color: #1b5480;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  header {
    position: fixed;
    top: 0;
  }

  h1 {
    margin-top: 5em;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;
  }

  #informacoes {
    height: 30em;
    width: 40%;
    border-radius: 1em;
    padding: 20px;
    color: #bbc2c5;
    line-height: 30px;
    font-size: 21px;
    text-align: left;
    display: flex;
    flex-direction: column;

    details {
      cursor: pointer;
      li {
        margin-left: 10px;
      }
      p {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }

  @media (max-width: 750px) {
    #informacoes {
      width: 80%;
    }

    h1 {
      font-size: 25px;
      margin-top: 4em;
      width: 80%;
    }
    padding-bottom: 100px;
  }
`


function AboutMe() {
  return (
    <>
      <AboutMeArea>
      <Header />
          <h1>
            Minhas Informações
            <span><BsFillInfoCircleFill /></span>
          </h1>

        <div id='informacoes'>
          <p>
            Prazer , Sou o Gustavo Aquino , natural de São Paulo (SP) , tenho 18 anos de idade e atualmente sou estudante de desenvolvimento web full-stack na Trybe , sou uma pessoa apaixonada por tecnologia e por coisas futurísticas , sempre tive 
            e sempre terei muita curiosidade para aprender coisas novas e me aventurar no desconhecido, afinal conhecimento é poder!
          </p>

          <p>Dentre as minhas habilidades estão: Javascript , HTML/CSS , React, TypeScript, Redux, Styled-components, RTL, Docker, MySql , entre outras tecnologias.</p>

          <details>
            <summary> Meus Hobbies</summary>
             <ul>
              <li><p>Ouvir musicas <span><ImHeadphones /></span></p></li>
              <li><p>Viajar<span><GiCommercialAirplane /></span></p></li>
              <li><p>Jogar videogame <span><BsController /></span></p></li>
             </ul>   
          </details>
        </div>



      </AboutMeArea>
    </>
  )
}

export default AboutMe;
