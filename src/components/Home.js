import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlader from './ImgSlader'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import "firebase/compat/firestore"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


function Home() {

  useEffect(() => {

    db.collection("movies")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })
  
    // onSnapshot(doc(db, "movies"), (doc) => {
    //   let tempMovies = snapshot.docs.map((doc)=>{
    //         console.log(doc.data());
    //         return { id: doc.id, ...doc.data()}
    //       })
    //       console.log(tempMovies);


    // db.collection("movies").onSnapshot((snapshot)=>{
    //   let tempMovies = snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //     return { id: doc.id, ...doc.data()}
    //   })
    //   console.log(tempMovies);
    // })
  
  return (
    <Container>
      <ImgSlader />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

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
`
