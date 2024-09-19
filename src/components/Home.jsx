/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css_style/Home.css";
import RegisterButton from "./RegisterButton";
import ExploreButton from "./ExploreButton";

function Home() {
  return (
    <div className="home-container">
      <header className="jumbotron text-center">
        <h1 className="display-4">Welcome to SkillSwap</h1>
        <p className="lead">
          Exchange skills, grow together. No money involved!
        </p>
        <div className="button-container">
          <RegisterButton />
          <ExploreButton />
        </div>
      </header>

      <section className="featured-skills container mt-5">
        <h2 className="text-center mb-4">Featured Skills</h2>
        <div className="row">
          {/* This is where you would map through featured skills */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Learn to build modern websites.</p>
                <Link
                  to="/skill/web-development"
                  className="btn btn-outline-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* Repeat for other featured skills */}
        </div>
      </section>

      <section className="how-it-works container mt-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>1. List Your Skills</h3>
            <p>Share what you're good at and what you can teach others.</p>
          </div>
          <div className="col-md-4">
            <h3>2. Find Skills to Learn</h3>
            <p>Browse through skills offered by other users.</p>
          </div>
          <div className="col-md-4">
            <h3>3. Make an Exchange</h3>
            <p>Connect with others and start learning and teaching!</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-5">
        <p>&copy; 2024 SkillSwap. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
