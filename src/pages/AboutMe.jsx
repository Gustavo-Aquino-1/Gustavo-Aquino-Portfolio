import React from 'react'
import Header from '../components/Header';
import styled from 'styled-components';
import { BsFillInfoCircleFill, BsController } from 'react-icons/bs';
import { ImHeadphones } from 'react-icons/im'
import { GiCommercialAirplane } from 'react-icons/gi'

const AboutMeArea = styled.div`
  width: 100%;
  background-color: #175572;
  box-sizing: border-box;
  height: 100vh;
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
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;
  }

  #informacoes {
    height: 36em;
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
      p {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
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
            <p> - Ouvir musicas <span><ImHeadphones /></span></p>
            <p> - Viajar<span><GiCommercialAirplane /></span></p>
            <p> - Jogar videogame <span><BsController /></span></p>
          </details>
        </div>



      </AboutMeArea>
    </>
  )
}

export default AboutMe;
