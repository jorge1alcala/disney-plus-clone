import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice"


function Movies() {

  const movies = useSelector(selectMovies);
  console.log("this are movies", movies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>

      { movies && 
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <img
              src={movie.cardImg} alt={movie.title}/>
            </Wrap>
          ))
      }
         
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
        <Wrap>
        <a href="/detail" >
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
            alt="the simsoms"
          />
          </a>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
  margin-bottom: 24px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    boder-color: rgba(249, 249, 249, 0.8);
  }
`;
