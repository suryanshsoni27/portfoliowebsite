import React from "react";
import Info from "./Info";
import "react-bootstrap";
import "../styles/infocard.css";
import Fade from "react-reveal/Fade";

function InfoCard() {
  return (
    <div className="card__config" id="card__config">
      <Fade left>
        <Info
          header={"What Is My Profession and Education background ?"}
          info={
            "I am a Software engineering major from Auburn University Alabama "
          }
          title={""}
          image={""}
        />
      </Fade>
      <Fade right>
        <Info
          header={"Coding languages"}
          info={"Python , C++ , Swift , Java and JavaScript"}
          title={""}
          image={""}
        />
      </Fade>
      <Fade left>
        <Info
          header={"Frameworks /Backend/ Frontend/ Databases"}
          info={"React, React native, Django,  Flask, Node, SQL and mongoDB "}
          title={""}
          image={""}
        />
      </Fade>
      <Fade right>
        <Info
          header={"What I Am Interested In ?"}
          info={
            "I am a Data Science and Artificial intelligence enthusiast. I also play with stocks in my free time."
          }
          title={""}
          image={""}
        />
      </Fade>
      <Fade left>
        <Info
          header={"What languages do i speak?"}
          info={"English , Hindi , Gujarati, and little bit of Spanish. "}
          title={""}
          image={""}
        />
      </Fade>
    </div>
  );
}

export default InfoCard;
