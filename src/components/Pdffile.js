import React, { useState } from "react";

import "react-pdf/dist/umd/Page/AnnotationLayer.css";

import "../styles/pdf.css";

function Pdffile() {
  return (
    <div className="resume">
      <a href="../asset/sam.pdf" download>
        <a
          className="pdf__a"
          id="port__resume"
          href="../asset/Finessescmkr_suryanshsoni_2021.pdf"
          download
          open={true}
        >
          Resume
        </a>
      </a>
    </div>
  );
}

export default Pdffile;
