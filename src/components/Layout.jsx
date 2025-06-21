import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet /> {/* This is where nested routes will render */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
