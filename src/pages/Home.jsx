import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import my_pic from '../imgs/my_pic.png'

const HomeArea = styled.div`
  background-color: #095274;
  height: 100vh;

  main {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 70px;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }

  #my_picture {
  }

  #my_infos {
    color: white;

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