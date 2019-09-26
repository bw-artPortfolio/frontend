import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.span`
font-size: 1.1em;
margin: 2em;
width: 12em;
padding: 2em;
background-color: black;
white-space: pre-wrap;
display: inline-block;
border: 2px black solid;
border-radius: 6px;
box-shadow: 1px 2px #888888;
color: white;
`



function Cards(props) {
    return (
        
        <Paragraph><b>{props.name}</b> {'\n'}Born {props.birth_year} {'\n'}{props.gender}</Paragraph>
        
    )
}





export default Cards