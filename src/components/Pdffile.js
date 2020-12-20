import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";
import "../styles/pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Pdffile() {
  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  return (
    <div className="resume">
      <a href="../asset/Finessescmkr_suryanshsoni_2021.pdf" download>
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
