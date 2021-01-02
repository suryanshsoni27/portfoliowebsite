import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "../styles/pdf.css";
import PDF from "../assets/sam.pdf";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import CancelIcon from "@material-ui/icons/Cancel";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Pdffile() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);
  const onOff = () => setShowResults(false);

  if (isMobile) {
    return (
      <div className="resume">
        <Link to="/Resume">Resume</Link>
      </div>
    );
  }

  return (
    <div className="resume">
      <div>
        <button class="btn btn-link" onClick={onClick}>
          Resume
        </button>
        <CancelIcon onClick={onOff} />
      </div>
      {showResults ? <Showresume /> : null}
    </div>
  );
}

function Showresume() {
  return (
    <div>
      <embed
        src={PDF}
        type="application/pdf"
        height={800}
        width={400}
        className="pdf-container"
      />
    </div>
  );
}

export default Pdffile;
