import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <div className="content">
        <h1>A PROPOS</h1>
        <br />
        <p>
          Je m'appel Mathurin Bourgouin. J'étudie le développement informatique
          en licence professionnnelle à l'IUT de Nantes. Ce site à été créer à
          l'occasion d'un projet d'étude sur React et a pour but d'afficher les
          données d'une API du système solaire. Cette API accessible à{" "}
          <a href="https://api.le-systeme-solaire.net/">cette adresse</a> nous
          renseigne sur les planètes, les asteroïdes, les étoiles et les
          commettes actuellemnt connu.
        </p>
        <p>
          Vous pouvez retrouver mes différents projets sur mon GitHub en suivant{" "}
          <a href="https://github.com/kaspernine">ce lien</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
