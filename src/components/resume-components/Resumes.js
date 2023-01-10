import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Resumes = () => {
  const [pdfLinks, setPdfLinks] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);

  async function handleFileUpload(event) {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('pdf', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    setPdfLinks([...pdfLinks, data.link]);
    setPdfFiles([...pdfFiles, file]);
  }

  // Retrieve PDF files from local storage on component mount
  useEffect(() => {
    const storedPdfFiles = JSON.parse(localStorage.getItem('pdfFiles')) || [];
    setPdfFiles(storedPdfFiles);
    setPdfLinks(storedPdfFiles.map(file => URL.createObjectURL(file)));
  }, []);

  function handleCheckboxChange(event) {
    const index = Number(event.target.value);
    const updatedPdfFiles = [...pdfFiles];
    updatedPdfFiles[index].selected = !updatedPdfFiles[index].selected;
    setPdfFiles(updatedPdfFiles);
  }

  return (
    <div>
      <form>
        <label htmlFor="pdf-upload">Upload a PDF:</label>
        <input type="file" id="pdf-upload" accept="application/pdf" onChange={handleFileUpload} />
      </form>
      {pdfLinks.map((link, index) => (
        <div key={link}>
          <input type="checkbox" value={index} onChange={handleCheckboxChange} />
          <a href={link} target="_blank">View PDF</a>
        </div>
      ))}
    </div>
  );
}

;


