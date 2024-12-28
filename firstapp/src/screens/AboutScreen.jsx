import React from "react";
import "./styleAbout.css";
import pizzaBackground from "./images/pizza.webp"; // Import de l'image

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ marginTop: '90px',marginBottom:'40px' }}>
      <div className="about-us-text">
        <h1 className="about-us-title">À propos de nous</h1>
        <div className="about-us-content">
          <p>
            Bienvenue chez <strong>Pizza Délice</strong>, votre destination
            préférée pour des pizzas délicieuses et des moments inoubliables !
            Depuis notre création, nous avons pour mission de réinventer la pizza
            en utilisant des ingrédients frais, locaux et des recettes authentiques.
          </p>
          <p>
            Notre passion ? Vous offrir une expérience culinaire exceptionnelle,
            que ce soit sur place ou chez vous. Nos chefs expérimentés préparent
            chaque pizza avec amour, en combinant créativité et tradition.
          </p>
          <p>
            Chez <strong>Pizza Délice</strong>, la satisfaction de nos clients est
            notre priorité. C’est pourquoi nous proposons une variété de choix,
            incluant des options végétariennes, véganes et sans gluten.
          </p>
          <p>
            Nous croyons également en l’importance de la communauté. Nous
            collaborons avec des producteurs locaux et soutenons des initiatives
            pour promouvoir le bien-être et le développement durable.
          </p>
          <p>
            Que vous cherchiez à savourer une pizza classique ou à essayer une
            création originale, nous sommes là pour vous satisfaire.
            Merci de nous faire confiance pour vos moments gourmands !
          </p>
        </div>
      </div>
      <div className="about-us-image">
        <img src={pizzaBackground} alt="Pizza savoureuse" className="pizza-image" />
      </div>
      
    </div>
  );
};

export default AboutUs;
