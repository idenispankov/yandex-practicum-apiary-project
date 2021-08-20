import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
