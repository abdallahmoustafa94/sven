import React from "react";
import chooseusData from "@data/PaymentSolutions/chooseus.json";

const ChooseUs = () => {
  return (
    <section className="choose-us style-14 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head text-center mb-40">
              <p className="color-red1 text-uppercase fw-bold mb-10">
                {" "}
                Unsere Dienstleistungen
              </p>
              <h2 className="fs-1">Unsere Reinigungsdienstleistungen</h2>
              <p className="mt-3">
                Unser Reinigungsunternehmen bietet eine Vielzahl von
                professionellen Dienstleistungen für Ihr Zuhause oder Ihr
                Unternehmen an. Wir sind darauf spezialisiert, eine saubere und
                gesunde Umgebung zu schaffen, damit Sie sich in Ihren
                Räumlichkeiten wohlfühlen können. Hier sind einige der
                Hauptdienstleistungen, die wir anbieten:
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            {chooseusData.map((choice, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div>
                  <div className="icon">
                    <img
                      src={choice.icon}
                      alt=""
                      style={{
                        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                      }}
                    />
                  </div>
                  <div className="info">
                    <h5
                      style={{
                        textAlign: "center",
                        marginTop: 12,
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {choice.title}{" "}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
