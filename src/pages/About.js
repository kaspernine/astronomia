import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <h1>A PROPOS</h1>
      <br />
      <p>
        Je m'appel Mathurin Bourgouin. J'étudie le développement informatique en
        licence professionnnelle à l'IUT de Nantes. Ce site à été créer à
        l'occasion d'un projet d'étude sur React.
      </p>
      <p>
        Vous pouvez retrouver mes différents projets sur mon GitHub en suivant{" "}
        <a href="https://github.com/kaspernine">ce lien</a>.
      </p>
      <Footer />
    </div>
  );
};

export default About;
