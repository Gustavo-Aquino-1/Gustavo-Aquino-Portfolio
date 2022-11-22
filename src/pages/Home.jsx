import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import my_pic from '../imgs/my_pic.png'

const HomeArea = styled.div`
  background-color: #1b5480;
  height: 100vh;

  main {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: auto;
    gap: 70px;
    padding: 0 20px;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }

  #my_infos {
    color: white;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 20px;
    }

    img {
      width: 160px;
    }

    main {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: auto;
    gap: 20px;
    padding: 0 20px;
  }
  }
`

function Home() {
  return (
    <HomeArea>
      <Header />

      <main>
        <div id='my_picture'>
          <img src={my_pic} alt="my_profile-pic" />
        </div>

        <div id='my_infos'>
          <h1>Gustavo Aquino</h1>
          <h2>Desenvolvedor FullStack</h2>
        </div>
      </main>

      <Footer />
    </HomeArea>    
  )
}

export default Home;