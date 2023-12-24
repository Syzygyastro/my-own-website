'use client'
// `app/resume/page.tsx` is the UI for the `/resume` URL
// export default function Page() {
//     return <h1>Hello, this is my Resume Page!</h1>
//   }

  // pages/resume.tsx

// pages/resume.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import  PDFReader from 'react-pdf-js'; // Import PDFReader

const ResumePage: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setResumeFile(selectedFile);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black min-h-screen text-white">
      <Head>
        <title>My Resume - Syzz.io</title>
      </Head>
      <header className="bg-gradient-to-b from-gray-700 via-gray-900 to-black py-4 text-center">
        <div className="container mx-auto px-4">
          <div className=" text-white text-center py-2 rounded-md shadow-md">
            <h1 className="text-3xl font-semibold">My Resume</h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <section className="bg-white bg-opacity-20 backdrop-blur-md rounded-md p-6 shadow-md">
          {/* Other resume sections */}
        </section>

        <section className="mt-8 bg-white bg-opacity-20 backdrop-blur-md rounded-md p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Upload Resume</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="mt-2 p-2 border rounded-md bg-gray-800 text-white"
            onChange={handleFileUpload}
          />
          {resumeFile && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Selected Resume</h3>
              {/* Apply styling to the PDF viewer */}
              <div className="border border-gray-300 rounded-md p-2">
                {/* Ensure the container matches the dimensions of the PDF */}
                <div style={{ width: '100%', height: '500px' }}>
                  <PDFReader file={URL.createObjectURL(resumeFile)} />
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ResumePage;