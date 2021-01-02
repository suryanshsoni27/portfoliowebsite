import React, { useState } from "react";
import PDF from "../assets/sam.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeViewer() {
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
  return (
    <div>
      {" "}
      *
      <div className="controls">
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
      <Document
        file={PDF}
        download={PDF}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}

export default ResumeViewer;
