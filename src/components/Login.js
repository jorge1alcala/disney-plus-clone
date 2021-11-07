import React from 'react'
import styled from 'styled-components'


function login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Discription>
        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Discription>
        <CTALogoTwo src="/images/cta-logo-two.png" />

      </CTA>
    </Container>
  )
}

export default login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.9;
    z-index: -1;


  }

`
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CTALogoOne = styled.img`
  margin-bottom: 15px;
`
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px; 
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-bottom: 12px;

  &:active {
    opacity: .8;
  }
  &:hover {
    background-color: #016cf9;
  }
`
const Discription = styled.p`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height: 1.5;

`
const CTALogoTwo = styled.img`
  width: 90%;
`