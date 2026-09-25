import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="container py-4 py-lg-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
