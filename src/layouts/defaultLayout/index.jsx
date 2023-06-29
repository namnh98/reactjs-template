import Footer from '../../components/footer';
import Header from '../../components/header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
