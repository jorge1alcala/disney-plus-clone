import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlader from "./ImgSlader";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore"; 
import db from "../firebase";

function Home() {
  // useEffect(() => {
  //   db.collection("novies").onSnapshot((snapshot) => {
  //     let tempMovies = snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //       return { id: doc.id, ...doc.data() };
  //     });
  //     console.log(tempMovies);
  //   });
  // });

  // const asyncFunction = async () => {

  //     const querySnapshot = await getDocs(collection(db, "movies"))
  //       let tempMovies = querySnapshot.forEach((doc) => {
  //         return { id: doc.id, ...doc.data()}
  //       });
  //  console.log(tempMovies);
  //   }

  useEffect(() => {

    async function getMovies() {
      const movieCol = collection(db, 'movies');
      const moviesSnapshot = await getDocs(movieCol);
      const tempMovies = moviesSnapshot.docs.map((doc) => {
         return {id: doc.id, ...doc.data()};
    })
    console.log(tempMovies);
  };
     getMovies();
  }, [])
   
  return (
    <Container>
      <ImgSlader />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
