import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Pdffile() {
  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  return (
    <div>
      <a
        href="../../public/Finessescmkr_suryanshsoni_2021.pdf"
        download
        open={true}
      >
        Download
      </a>
      <iframe src="https://github.com/suryanshsoni27/portfoliowebsite/blob/master/public/Finessescmkr_suryanshsoni_2021.pdf"></iframe>
    </div>
  );
}

export default Pdffile;
