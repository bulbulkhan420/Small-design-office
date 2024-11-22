'use client';
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "./ToastFile/Toast";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect, useState } from "react";




export default function RootLayout({ children }) {
  
 
  return (
    <html lang="en">
      <body>
       
       
        {children}
        <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
        />
       
      </body>
    </html>
  );
}
