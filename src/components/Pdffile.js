import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "../styles/pdf.css";
import PDF from "../assets/sam.pdf";

import CancelIcon from "@material-ui/icons/Cancel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdffile() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // const nextPage = () => {
  //   if (pageNumber < numPages) {
  //     setPageNumber(pageNumber + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (pageNumber > 1) {
  //     setPageNumber(pageNumber - 1);
  //   }
  // };

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const onOff = () => setShowResults(false);

  return (
    <div className="resume">
      {/*<div className="controls">
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>

      <Document
        file={PDF}
        height="10%"
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className="pdf-container"
      >
        <Page pageNumber={pageNumber} />
  </Document>*/}

      <div>
        <button class="btn btn-link" onClick={onClick}>
          Resume
        </button>
        <CancelIcon onClick={onOff} />
      </div>

      {showResults ? <Showresume /> : null}

      {/*<embed
        src={PDF}
        type="application/pdf"
        height={500}
        className="pdf-container"
      />*/}
    </div>
  );
}

function Showresume() {
  return (
    <embed
      src={PDF}
      type="application/pdf"
      height={800}
      className="pdf-container"
    />
  );
}

export default Pdffile;
