import Head from "next/head";
import MainLayout from "@layouts/Main";
import Navbar from "@components/Navbars/PaymentSolutionsNav";
import Footer from "@components/PaymentSolutions/Footer";

const Services = () => {
  return (
    <>
      <Head>
        <title>SVEN | Dienstleistungen</title>
      </Head>

      <MainLayout>
        <Navbar />
        <h1
          style={{
            width: "30%",
            paddingTop: "150px",
            borderBottom: "dashed 4px #2978d0",
            paddingBottom: 6,
            margin: "auto",
          }}
          className="text-center"
        >
          Dienstleistungen
        </h1>
        <section className="screenshots style-14 section-padding">
          <div className="container">
            <div className="about-row mb-150">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="img">
                    <div className="row gx-0">
                      <div className="col-12 ">
                        <img
                          src="/assets/img/house-service.jpg"
                          alt=""
                          className="main-img "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info mt-5 mt-lg-0">
                    <div className="section-head mb-40">
                      <h2 className="fs-1"> Wohnungsreinigung</h2>
                    </div>
                    <div className="text">
                      Unser Team bietet eine umfassende Wohnungsreinigung an, um
                      Ihr Zuhause glänzend sauber zu halten. Wir reinigen
                      gründlich alle Bereiche, einschließlich Wohnzimmer, Küche,
                      Schlafzimmer und Badezimmer. Unsere Dienstleistungen
                      umfassen Staubwischen, Staubsaugen, Bodenreinigung,
                      Oberflächenabwischen, Abfallentsorgung und vieles mehr.
                      Wir verwenden hochwertige Reinigungsmittel, um
                      sicherzustellen, dass Ihre Wohnräume strahlend und frisch
                      duftend sind.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="info">
                    <div className="section-head mb-40">
                      <h2 className="fs-1"> Büroreinigung</h2>
                    </div>
                    <div className="text">
                      Unsere professionelle Büroreinigung zielt darauf ab, eine
                      saubere und angenehme Arbeitsumgebung für Ihr Unternehmen
                      zu schaffen. Wir reinigen Büros, Konferenzräume,
                      Empfangsbereiche, Arbeitsstationen und sanitäre Anlagen.
                      Zu unseren Dienstleistungen gehören das Staubwischen, das
                      Leeren von Papierkörben, das Reinigen von Büromöbeln, das
                      Wischen von Oberflächen und das Desinfizieren von häufig
                      berührten Bereichen. Wir arbeiten diskret und effizient,
                      um Ihren Betrieb sauber und professionell zu halten.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img mt-5 mt-lg-0">
                    <div className="row gx-0">
                      <div className="col-12">
                        <img
                          src="/assets/img/office-service.jpg"
                          alt=""
                          className="main-img slide_up_down"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row mt-150">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="img">
                    <div className="row gx-0">
                      <div className="col-12 ">
                        <img
                          src="/assets/img/carpet-service.jpg"
                          alt=""
                          className="main-img "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info mt-5 mt-lg-0">
                    <div className="section-head mb-40">
                      <h2 className="fs-1"> Teppich- und Polsterreinigung</h2>
                    </div>
                    <div className="text">
                      Unsere spezialisierte Teppich- und Polsterreinigung hilft
                      dabei, Ihre Textilien in bestem Zustand zu erhalten. Wir
                      verwenden schonende, aber wirksame Reinigungsmethoden, um
                      Flecken, Schmutz und Gerüche von Teppichen, Sofas, Stühlen
                      und anderen Polstermöbeln zu entfernen. Unsere
                      Dienstleistungen verlängern die Lebensdauer Ihrer Möbel
                      und sorgen für ein frisches Aussehen.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row mt-150">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="info">
                    <div className="section-head mb-40">
                      <h2 className="fs-1"> Umzugs- und Endreinigung</h2>
                    </div>
                    <div className="text">
                      Planen Sie einen Umzug? Unser Team steht Ihnen zur
                      Verfügung, um Ihre alte oder neue Unterkunft gründlich zu
                      reinigen. Wir bieten Umzugsreinigungen an, um die
                      Immobilie für den nächsten Mieter oder Eigentümer
                      vorzubereiten. Unsere Endreinigungsdienste umfassen das
                      Reinigen von Wänden, Böden, Schränken, Geräten und
                      sanitären Anlagen, um sicherzustellen, dass alles in
                      makellosem Zustand übergeben wird.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img mt-5 mt-lg-0">
                    <div className="row gx-0">
                      <div className="col-12">
                        <img
                          src="/assets/img/window-service.jpg"
                          alt=""
                          className="main-img slide_up_down"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row mt-150">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="img">
                    <div className="row gx-0">
                      <div className="col-12 ">
                        <img
                          src="/assets/img/movein-service.jpg"
                          alt=""
                          className="main-img "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info mt-5 mt-lg-0">
                    <div className="section-head mb-40">
                      <h2 className="fs-1">
                        {" "}
                        Grundreinigung und Sonderreinigungen
                      </h2>
                    </div>
                    <div className="text">
                      Bei Bedarf bieten wir auch Grundreinigungen und spezielle
                      Reinigungen an. Dies kann die Reinigung besonders
                      verschmutzter Räume, wie Keller oder Garagen, oder
                      spezielle Reinigungen nach Renovierungen oder Bauarbeiten
                      umfassen. Wir verwenden die richtigen Reinigungsmittel und
                      Techniken, um selbst die anspruchsvollsten
                      Reinigungsaufgaben zu bewältigen.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-row mt-150">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="info">
                    <div className="section-head mb-40">
                      <h2 className="fs-1">Fensterreinigung</h2>
                    </div>
                    <div className="text">
                      Wir bieten professionelle Fensterreinigungsdienste für
                      Wohn- und Geschäftsgebäude an. Unsere Fachleute reinigen
                      Fenster gründlich von innen und außen, um Streifen und
                      Schmutz zu beseitigen. Wir verwenden spezielle
                      Reinigungsmittel und Werkzeuge, um klare und strahlende
                      Fenster zu garantieren, die mehr Licht in Ihre Räume
                      bringen.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img mt-5 mt-lg-0">
                    <div className="row gx-0">
                      <div className="col-12">
                        <img
                          src="/assets/img/deep-service.jpg"
                          alt=""
                          className="main-img slide_up_down"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Services;
