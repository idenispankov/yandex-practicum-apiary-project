import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useState } from 'react';

export default function Layout({ children, setIsModalOpen }) {
  return (
    <>
      <Navbar setIsModalOpen={setIsModalOpen} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
