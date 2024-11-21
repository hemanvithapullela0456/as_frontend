import React, { useState } from "react";
import "./DocumentGenerator.css";

const DocumentGenerator = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      title: "Quotation",
      description:
        "Looking for a ready-to-use, professionally designed quotation? Create a quote in less than a minute with Smart Docs.",
    },
    {
      title: "Proforma Invoice",
      description:
        "A proforma invoice works as an invoice draft. It lets customers know the final price and allows vendors to proceed.",
    },
    {
      title: "Commercial Invoice",
      description:
        "Ready to start invoicing? Create and send professional invoices in less than a minute with the Smart Docs invoicing tool.",
    },
    {
      title: "Purchase Order",
      description:
        "Make a seamless order transaction with your suppliers by using our purchase order template.",
    },
    {
      title: "Gross Mass Declaration",
      description:
        "Looking for a ready-to-use accurate verified gross weight declaration template? Create the document instantly.",
    },
    {
      title: "Bill of Lading",
      description:
        "Create a customizable bill of lading form, quickly submitting your shipping transactions.",
    },
  ];

  return (
    <div className="document-generator-container">
      {/* Left Section */}
      <div className="text-section">
        <h1>Smart Documents</h1>
        <p>
          Streamline Your Shipping with our Smart Documents. Smart Documents is
          an innovative logistics tool that <b>automates your intelligent document generation process</b>.
        </p>
        <p>
          Say goodbye to paperwork delays with automated document processing.
          Smart Documentation eliminates manual errors and generates accurate
          shipment documents quickly and easily, offering numerous advantages.
        </p>
        <div className="document-options">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`option ${selectedDoc === doc.title ? "active" : ""}`}

              onClick={() => setSelectedDoc(doc.title)}
            >
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      {selectedDoc && (
        <div className="form-section">
        <div className="form-header">
          <h3>{selectedDoc}</h3>
          <div className="form-buttons">
            <button className="edit-btn">Edit</button>
            <button className="preview-btn">Preview</button>
          </div>
        </div>
        <form className="form-container">
          <div className="form-grid">
            <div className="form-row">
              <label>From</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form-row">
              <label>Invoice Number</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-row">
              <label>Pages</label>
              <p>1 of 1</p>
            </div>
      
            <div className="form-row">
              <label>From</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form-row">
              <label>Buyer Reference</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Delivery Date</label>
              <input type="date" />
            </div>
      
            <div className="form-row">
              <label>Invoice Number</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Port of Loading</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form-row">
              <label>Port of Discharge</label>
              <select>
                <option>Select</option>
              </select>
            </div>
            <div className="form-row">
              <label>Packing Information</label>
              <input type="text" />
            </div>
      
            <div className="form-row">
              <label>Product Code</label>
              <input type="text" />
            </div>
            <div className="form-row">
              <label>Guidelines</label>
              <textarea rows="3"></textarea>
            </div>
          </div>
          <button className="upload-btn">Upload</button>
        </form>
      </div>
      
      )}
    </div>
  );
};

export default DocumentGenerator;