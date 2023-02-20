import React from "react";
import styled from "styled-components";

function login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Discription>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Discription>
        <CTALogoTwo src="/images/cta-logo-two.png" />
        <MyOtherSites>
          <Heading>This Are My Other Projects</Heading>

          <MyOder>
            <Cards>
              <Atag
                target="_blank"
                href="https://jorgealcala.com/"
                rel="noreferrer"
              >
                <Picture src="/images/OmnifoodMinipage.png" alt="" />
                <PictureContent>
                  <h3>OmniFood Web App</h3>
                  <p>An App to order food</p>
                </PictureContent>
              </Atag>
            </Cards>

            <Cards>
              <Atag
                target="_blank"
                href="https://disneyclonejorge.netlify.app/"
                rel="noreferrer"
              >
                <Picture src="/images/disnay-cloneMiniPage.png" alt="" />{" "}
                <PictureContent>
                  <h2>Disnay Clone</h2>
                  <p>A Clone of Disny+Plus</p>
                </PictureContent>
              </Atag>
            </Cards>
          </MyOder>
        </MyOtherSites>
      </CTA>
    </Container>
  );
}

export default login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
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
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img`
  margin-bottom: 15px;
`;
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
    opacity: 0.8;
  }
  &:hover {
    background-color: #016cf9;
  }
`;
const Discription = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
const MyOtherSites = styled.div``;

const Heading = styled.h2`
  text-align: center;
  font-size: 4.4rem;
  line-height: 1.2;
  margin-top: 14rem;
  margin-bottom: 6rem;
`;
const MyOder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  padding: 1.6rem;

  max-width: 120rem;
  padding: 0 3.2rem;
  margin-bottom: 10rem;
`;
const Cards = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  transition: all 0.4s;
  background-color: #fff;
  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }
`;
const Picture = styled.img`
  border-top-right-radius: 11px;
  border-top-left-radius: 11px;
  width: 450px;
`;
const PictureContent = styled.div`
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;
`;
const Atag = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-waight: 400;
  line-height: 1;
  color: #555;
`;
