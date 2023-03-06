import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { BsFillInfoCircleFill, BsController } from 'react-icons/bs'
import { ImHeadphones } from 'react-icons/im'
import { GiCommercialAirplane } from 'react-icons/gi'
import { useContext } from 'react'
import PortfolioContext from '../context/PortfolioContext'
import api from '../api'
import { HiComputerDesktop } from 'react-icons/hi2';


const AboutMeArea = styled.div`
  min-height: 100vh; // tava fincando branco quando estendia o details pois ela so suportava 100vh e o details extendia a pagina para uns 105vh logo ficava branco, é melhor deixar a height no automatico mesmo!! */
  height: 100%; */ // em vez de 100vh coloque 100% !!
  width: 100%;
  background-color: ${({ colors }) =>
    colors.color}; // simples , quando for chamalo voce passa a props e aqui voce pega como nome que salvou
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding-bottom: 140px; */

   header {
    position: fixed;
    top: 0;
  }

  #h1 {
    margin-top: 4em;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: ${({ colors }) => colors.subColor};
  }

  #h12 {
    margin-top: 3em;
    margin-bottom: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }


  #stacks {
      margin-top: 40px;
      background-color: ${({ colors }) => colors.color === 'black' ? '#115660' : '#38396f'};
      width: 100%;
      color: white;
      h1 {
        color: white;
      }
      padding-bottom: 100px;
    }

  #informacoes {
    /* height: 80%; */
    width: 40%;
    border-radius: 1em;
    padding: 20px;
    color: ${({ colors }) => colors.subColor};
    line-height: 30px;
    font-size: 23px;
    line-height: 40px ;
    text-align: left;
    display: flex;
    flex-direction: column;
    text-align: justify;
    padding-bottom: 80px;

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

    margin-bottom: 100px;
  } 

  #stacks_list {
    padding-top: 50px;
    width: 55%;
    gap: 50px;
    display: block;
    margin: auto;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (max-width: 600px) {
    /* height: 100%; */
    font-size: 21px;
    #informacoes {
      text-align: left;
      width: 70%;
    }

    #h1 {
      font-size: 25px;
      margin-top: 4em;
    }

    #h12 {
      font-size: 25px;
      margin-top: 4em;
    }

  }
`

function AboutMe() {
  const { color, subColor } = useContext(PortfolioContext)
  const [stacks, setStacks] = useState([])

  useEffect(() => {
    const get = async () => {
      const { data } = await api.get('/stacks')
      setStacks(data)
    }
    get()
  })

  return (
    <>
      <AboutMeArea colors={{ color, subColor }}>
        <Header />
        <h1 id='h1'>
          Minhas Informações
          <span>
            <BsFillInfoCircleFill style={{ marginTop: 10 }} color='gray' />
          </span>
        </h1>

        <div id='informacoes'>
          <p>
            Prazer , Sou o Gustavo Aquino , natural de São Paulo (SP) , tenho 18
            anos de idade e atualmente sou estudante de desenvolvimento web
            full-stack na Trybe , sou uma pessoa apaixonada por tecnologia e por
            coisas futurísticas , sempre tive e sempre terei muita curiosidade
            para aprender coisas novas e me aventurar no desconhecido, afinal
            conhecimento é poder!
          </p>

          {/* <p>
            Dentre as minhas habilidades estão: Javascript , HTML/CSS , React,
            TypeScript, Redux, Styled-components, RTL, Docker, MySql , entre
            outras tecnologias.
          </p> */}
          <details>
            <summary> Meus Hobbies</summary>
            <ul>
              <li>
                <p>
                  Ouvir musicas{' '}
                  <span>
                    <ImHeadphones />
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Viajar
                  <span>
                    <GiCommercialAirplane />
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Jogar videogame{' '}
                  <span>
                    <BsController />
                  </span>
                </p>
              </li>
            </ul>
          </details>
        </div>

        <div id='stacks'>
          <h1 id='h12'>
            Minhas Stacks
            <span>
              <HiComputerDesktop style={{ marginTop: 10 }} color='gray' />
            </span>
          </h1>
          <div>
            <section id='stacks_list'>
              {stacks?.map((e) => (
                <div key={e.id}>
                  <img width={50} height={50} src={e.img} alt={e.name} />
                  <p>{e.name}</p>
                </div>
              ))}
            </section>
          </div>

        </div>
      </AboutMeArea>
    </>
  )
}

export default AboutMe
