import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #111;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 500;
  color: #fff;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #fff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #fff;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Bio Food Products</Logo>
        <Desc>
          With over 8 years of experience, we supply, sell, hire, and install
          sound/ audio equipment for places of worship, entertainment joints,
          campign vehicles/ trucks, live events, podcasts, studios, live
          streaming and home use with a warranty inclusive of discounted
          installation and consultation rates. We also offer 24hr support for
          all our customers. Karibu sana.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/live" style={{ textDecoration: "none", color: "#fff" }}>
              LIVE & PA
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/studio"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              STUDIO
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/studio"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/dj-equipment"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              DJ-EQUIPMENT
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/musical-isntruments"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Order Tracking
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/personal"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              PERSONAL
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              My Account
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/myOrders"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              MUSICAL INSTRUMENTS
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="terms&conditions"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Terms
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", color: "#fff" }} /> Luthuli Ave ,
          Nairobi, Kenya
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px", color: "#fff" }} /> +254 706 547
          204
        </ContactItem>
        {/* <ContactItem>
          <MailOutline style={{ marginRight: "10px", color: "#fff" }} />{" "}
          contact@strik3r.dev
        </ContactItem> */}
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
