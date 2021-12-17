import React from "react";
import AWS from "../../assets/images/AWS.png";
import boot from "../../assets/images/Bootstrap.png";
import CSS from "../../assets/images/CSS.png";
import fire from "../../assets/images/Firebase.png";
import git from "../../assets/images/Github.png";
import html from "../../assets/images/HTML.png";
import jq from "../../assets/images/Jquerry.png";
import mongo from "../../assets/images/MongoDB.jpeg";
import NodeJS from "../../assets/images/NodeJS.png";
import post from "../../assets/images/PostgreSQL.png";
import react from "../../assets/images/React.png";
import ruby from "../../assets/images/Ruby.png";
import rubyrail from "../../assets/images/RubyRails.jpeg";
import vue from "../../assets/images/Vue.png";
import "./skills.css";
function Skills() {
  return (
    <div>
      <div className="main__container">
        <img src={AWS} alt="" className="skills__image" />
        <img src={boot} alt="" className="skills__image" />
        <img src={CSS} alt="" className="skills__image" />
        <img src={fire} alt="" className="skills__image" />
        <img src={git} alt="" className="skills__image" />
        <img src={html} alt="" className="skills__image" />
        <img src={jq} alt="" className="skills__image" />
        <img src={mongo} alt="" className="skills__image" />
        <img src={NodeJS} alt="" className="skills__image" />
        <img src={post} alt="" className="skills__image" />
        <img src={react} alt="" className="skills__image" />
        <img src={ruby} alt="" className="skills__image" />
        <img src={rubyrail} alt="" className="skills__image" />
        <img src={vue} alt="" className="skills__image" />
      </div>
    </div>
  );
}

export default Skills;
