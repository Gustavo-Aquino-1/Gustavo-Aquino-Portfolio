import React from 'react'
import Header from '../components/Header'
import myprojects from '../data/MyProjectsData'
import styled from 'styled-components'

const MyProjectsContainer = styled.div`
  height: 100vh;
  background-color: #1b5480;
`;

const MyProjectsArea = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  gap: 1.5em;

  div {
    text-align: center;
    a {
      text-decoration: none;
      color: white;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    img {
      width: 350px;
      border-radius: 10px;
    }
  }
`

function MyProjects() {
  return (
    <MyProjectsContainer>
      <Header />

      <MyProjectsArea>
        {
          myprojects.map((e) => (
            <div
              key={e.id}
            >
              <img src={e.img} alt={e.title} />
              <p>
                <a href={e.link}>{e.title}</a>
              </p>
            </div>
          ))
        }
      </MyProjectsArea>
    </MyProjectsContainer>
  )
}

export default MyProjects