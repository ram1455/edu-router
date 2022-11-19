import React from "react";
import styled from "styled-components";

const Wadah = styled.div
`
    background-color:white;
    width:auto;
    height:100%;
    margin:0 px auto;
    padding: 40px;
    
`
const Ome = styled.h1
`
color:black;
font-family:century-gothic;
font-weight:bold;
width:fit-content;
margin:0px auto;
display:block;
`

const Home = ()=>{
    return(
        <div style={{height:'1000px'}}>
        <Wadah className="main">
            <Ome>INI HOME</Ome>
            <p>Selamat Datang!</p>
        </Wadah>
        </div>
    )
}

export default Home;