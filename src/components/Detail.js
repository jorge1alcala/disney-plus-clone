import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setMovie(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    getMovie();
  }, [id]);

  return (
    <Container>
      {movie && ( //this is because backgroundImg did not exist
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="bao logo" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="play icon" />
              <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="play icon" />
              <span>Trailer</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>
            <span>{movie.subTitle}</span>
          </SubTitle>
          <Description>
            <span>{movie.description}</span>
          </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  /* this is temporary */
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover,
  &:active {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

  &:hover,
  &:active {
    color: #333;
    font-weight: 500;
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover,
  &:active {
    color: #333;
    font-weight: 500;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);

  &:hover,
  &:active {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.6;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
