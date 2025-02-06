import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardText from "react-bootstrap/esm/CardText";
import CardBody from "react-bootstrap/esm/CardBody";
import CardSubtitle from "react-bootstrap/esm/CardSubtitle";


const QRCodePage = () => {
  return (
    <div>
      
      <>
      
     <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/ANPI_logo.jpeg"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Anpi Saluzzo e Valle Po
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    <div>
     
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-black px-3">
    <div>
    <Card >
        <div className="bg-white shadow-lg">
        <CardBody>
          <CardTitle style={{fontStyle:'bold', textAlign:"center"}} ><h2>Roberto Blanchi di Roascio</h2></CardTitle>
          <CardSubtitle style={{fontStyle:'italic', textAlign:"center"}}>Dronero 7.07.1922 - Saluzzo 9.03.1944</CardSubtitle>
          {' '}
          <CardText>
            Lo studente universitario Roberto Carlo Blanchi di Roascio era figlio di Mario,
            industriale e politico di area liberale, discendente dall’antica famiglia dei conti 
            infeudati delle terre di Roascio e Dezeno e della consignoria di Ceva alla fine del 1400, 
            con tanto di stemma azzurro e oro recante un bianchissimo ermellino.
            Era anche fratello di Paolo (Dronero, 26.07.1919 – Russia, 31.01.1943), 
            sergente degli Alpini nel 2° Reggimento della Divisione Cuneense distrutta nella campagna di Russia,
            e alla sua scelta resistenziale contribuirono la sorte del fratello e i racconti degli ufficiali reduci quali Nuto Revelli.
            Raggiunse dunque fra i primi la Brigata Italia Libera, nucleo originario di aggregazione delle divisioni di Giustizia e Libertà,
            costituita fin dal 12 settembre da un pugno di  esponenti del Partito d’Azione con la guida di Duccio Galimberti 
            e dislocata a Madonna del Colletto. In quei primi momenti, a chi gli faceva  notare il numero esiguo dei ribelli 
            e chiedeva se ne valesse la pena,rispondeva:  “Val la pena, purché si dica che c’è stato qualcuno che ha combattuto i tedeschi” 
            (test. della staffetta Carla GajaTravaglini, “Laura”).  
            Nominato comandante di distretto nei ruoli della II Divisione GL Brigata val Maira,“Roberto” 
            prese parte a decine di azioni. Nel tardo pomeriggio del  9 marzo 1944 si trovava alla guida di un camioncino 
            Balilla,diretto a compiere un attentato all’aeroporto di Levaldigi. Nel cassone, fra materiale compromettente, 
            era celato il compagno di brigata Umberto Giovenale Lamberto “Gucia”(n. Centallo il 25.01.1924, operaio).
            Giunto a Villafalletto all’incrocio tra corso Umberto e via Ruderi del Castello, il veicolo s’imbatté, sembra per pura fatalità,
            nel milite Renzo Lingua, assegnato alla scorta del podestà conte Corrado Falletti. 
            L’uomo intimò l’alt, avvicinandosi poi per controllare.
            “Quando costui alzò il telone si sentì bene: Mani in alto! intimato da una persona all’interno del cassone”  
            (test. del barbiere Giacomo Barbero, civile).
            Lingua reagì aprendo il fuoco. Umberto morì sul colpo, mentre Roberto
            fu trasportato all’Ospedale di Saluzzo, dove si spense poche ore dopo, dissanguato.
            Si racconta che le sue ultime parole furono: “Per me non c’è più nulla fa fare, andate avanti voi”, 
            rivolte ai sanitari, che cercavano invano di prestargli soccorso, impediti dai tedeschi accorsi 
            (test. di C.GajaTravaglini). 
            A Blanchi di Roascio fu intitolatala Brigata GL comandata daLuigi Ventre“Gigi”, Medaglia d’Argento al VM.

        </CardText>
        </CardBody>
        
      </div>
      </Card>
    </div>
    </Container>
    </div>
    
    </div>
  );
};

export default QRCodePage;
