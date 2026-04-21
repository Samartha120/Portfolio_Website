import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Loader } from '../common/Loader';
import { Modal } from '../common/Modal';

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-primary/30 selection:text-white relative font-sans antialiased overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz4KPC9zdmc+')]"></div>
      
      <Navbar />
      <Sidebar />
      <Modal />
      
      <main className="flex-grow relative z-10 w-full flex flex-col pt-24">
        <AnimatePresence mode="wait">
          <motion.div
             key={location.pathname}
             initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
             exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
             transition={{ duration: 0.4 }}
             className="w-full h-full flex flex-col flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};