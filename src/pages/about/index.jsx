import MainLayout from "@layouts/Main";
import Navbar from "@components/Navbars/PaymentSolutionsNav";
import Screenshots from "@components/PaymentSolutions/Screenshots";
import Footer from "@components/PaymentSolutions/Footer";
import Head from "next/head";
const About = () => {
  return (
    <MainLayout title={"sven | Über Uns "}>
      <Navbar />
      <main style={{ paddingTop: "150px" }}>
        <div className="m-auto w-50">
          <h1
            style={{
              width: "30%",
              borderBottom: "dashed 4px #f9a41f",
              paddingBottom: 6,
              margin: "auto",
            }}
            className="text-center"
          >
            Über Uns
          </h1>
          {/* <img src="/assets/img/mada-icon.png" alt="" className='w-25 m-auto d-block'/> */}
        </div>
        <Screenshots isHome={false} />
      </main>
      <Footer />
    </MainLayout>
  );
};
export default About;
