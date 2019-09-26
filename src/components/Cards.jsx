import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.span`
  font-size: 1.1em;
  margin: 1em;
  width: 15em;
  height: 15em;
  padding: 2em;
  background-color: white;
  white-space: pre-wrap;
  display: inline-block;
  /* border: 2px black solid; */
  /* border-radius: 6px;
box-shadow: 1px 2px #888888; */
  color: black;
  vertical-align: top;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin: 10px 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #f6f6f6;
  padding: 0em;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
`;

function Cards(props) {
  return (
    <Card>
      <Image src={props.url} alt='card' />
      <p>
        <b>{props.artistName}</b>
      </p>
      {/* {'\n'} */}
      <p>{props.title}</p>
      {/* {'\n'} */}
    </Card>
  );
}

export default Cards;
