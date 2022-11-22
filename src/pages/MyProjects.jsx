import React from 'react'
import Header from '../components/Header'
import myprojects from '../data/MyProjectsData'
import styled from 'styled-components'

const MyProjectsContainer = styled.div`
  background-color: #1b5480;
`;

const MyProjectsArea = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
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
      border: 2px solid white;
      width: 350px;
      border-radius: 10px;
      box-shadow: 1px 1px 5px 1px  white;
    }
  }

  @media (max-width: 600px) {
    display: block;
    width: 90%;
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