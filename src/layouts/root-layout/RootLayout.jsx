import React from "react";

import SuspenseWithOutlet from "@/components/suspense-with-outlet/SuspenseWithOutlet.jsx";
import Navbar from "@/layouts/navbar/Navbar.jsx";
import Footer from "@/layouts/footer/Footer.jsx";

function HomeTemplate() {
  return (
    <>
      <Navbar />
      <SuspenseWithOutlet/>
      <Footer />
    </>
  );
}

export default HomeTemplate;
