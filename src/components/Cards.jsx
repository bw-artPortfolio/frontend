import React from 'react'
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
`

const Image = styled.img`
width: 100%;
object-fit: cover ;
background-color: #F6F6F6;
padding: 2em;
`



function Cards(props) {
    return (
        
        <Paragraph>
        <Image src={props.url} alt="card" />
        <b>{props.artistName}</b> 
        {'\n'}
        {props.title} 
        {'\n'}
        </Paragraph>
        
    )
}





export default Cards