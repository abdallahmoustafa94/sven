import React from "react";

const Screenshots = ({ isHome }) => {
  return (
    <section className="screenshots style-14 section-padding">
      <div className="container">
        <div className="about-row mb-150">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="img">
                <div className="row gx-0">
                  <div className="col-12 ">
                    <img
                      src="/assets/img/about-3.jpg"
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
                  <p className="color-red1 text-uppercase fw-bold mb-10">
                    Willkommen bei Sven
                  </p>
                  <h2 className="fs-1">
                    {" "}
                    Wo Sauberkeit auf Professionalität trifft
                  </h2>
                </div>
                <div className="text">
                  Bei Sven sind wir darauf spezialisiert, makellose Sauberkeit
                  mit einem Hauch von Professionalität zu bieten. Mit unserem
                  engagierten Team und jahrelanger Expertise sorgen wir dafür,
                  dass jeder Raum, den wir berühren, sich in einen makellosen
                  Rückzugsort verwandelt. Von gemütlichen Wohnungen bis hin zu
                  belebten Büros sind unsere erstklassigen Dienstleistungen
                  darauf ausgerichtet, Ihre individuellen Bedürfnisse zu
                  erfüllen. Erleben Sie den Unterschied und lassen Sie uns für
                  Sie die Sauberkeit neu definieren. Willkommen in einer Welt,
                  wo Sauberkeit auf Professionalität trifft.
                </div>
                {isHome && (
                  <a
                    href="#0"
                    className="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30"
                    target="_blank"
                  >
                    <small>
                      {" "}
                      Mehr <i className="fal fa-long-arrow-left me-1"></i>{" "}
                    </small>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="about-row">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <div className="section-head mb-40">
                  <p className="color-red1 text-uppercase fw-bold mb-10">
                    Warum Uns Wählen?
                  </p>
                </div>
                <h2 className="fs-5"> Professionelle Reinigungserfahrung:</h2>
                <div className="text">
                  Unser Team verfügt über umfangreiche Erfahrung in der
                  professionellen Reinigung. Wir wissen, wie wichtig Sauberkeit
                  für Ihr Zuhause oder Büro ist und setzen unser Fachwissen ein,
                  um optimale Ergebnisse zu erzielen.
                </div>
                <h2 className="fs-5">Zuverlässigkeit:</h2>
                <div className="text">
                  Wir sind stets pünktlich und zuverlässig. Sie können sich
                  darauf verlassen, dass wir die vereinbarten Reinigungszeiten
                  einhalten und Ihre Räumlichkeiten stets gründlich gereinigt
                  hinterlassen.
                </div>
                <h2 className="fs-5">Umweltfreundliche Reinigungsmittel:</h2>
                <div className="text">
                  Wir verwenden umweltfreundliche Reinigungsmittel und
                  -techniken, die sowohl effektiv als auch schonend sind. Ihre
                  Gesundheit und der Schutz der Umwelt liegen uns am Herzen.
                </div>
                {isHome && (
                  <a
                    href="#0"
                    className="btn rounded-pill text-dark bg-white hover-red1 fw-bold border-1 brd-gray mt-30"
                    target="_blank"
                  >
                    <small>
                      {" "}
                      Mehr <i className="fal fa-long-arrow-left me-1"></i>{" "}
                    </small>
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-5 mt-lg-0">
                <div className="row gx-0">
                  <div className="col-12">
                    <img
                      src="/assets/img/about-4.jpg"
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
  );
};

export default Screenshots;
