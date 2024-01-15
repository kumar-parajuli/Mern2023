import React from "react";
import { useAuth } from "../store/auth";
const Service = () => {
  const { services } = useAuth();

  // console.log(services);
  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.data.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src="/images/design.png" alt="desginer" width="200" />
              </div>
              <div className="card-details">
                <div className="grid grid-two-card">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
