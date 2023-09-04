import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import CardSerie from "../../components/CardSerie/CardSerie";

function Detail() {
  return (
    <React.Fragment>
        <Navbar/>
        <h1>Detail</h1>

        <Card/>
        <CardSerie/>

        <Footer/>
    </React.Fragment>
  );
}

export default Detail;