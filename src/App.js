import React from "react";
import "./App.css";
import profilePic from "./profilePic.jpeg";
import crypto from "./crypto.jpeg";
import { Element } from "react-scroll";
import hangman from "./hangman.png";
import worldhelp from "./worldhelp.png";
import lifeafterga from "./lifeafterga.png";
import Resume from "./DemetriGerasCV2023SE.pdf";
import proseed from "./proseed.png";
import { useState } from "react";
import party from "./party.jpeg";
function App() {
  return (
    <div className="App">
      <div className="homepage">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sideprofile">
              <h3>Demetri Geras</h3>
              <p>Software Engineer</p>
            </div>
            <ul>
              
                <a href="#aboutMe">
                  <span className="icon">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="item">About me</span>
                </a>
              

             
                <a href="#skills">
                  <span className="item">Skills</span>
                </a>
             

             
                <a href="#projects">
                  <span className="item">Projects</span>
                </a>
            

              
                <a href="#contact">
                  <span className="item">Contact</span>
                </a>
            
              
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  <span className="item">Resume</span>
                </a>
              
            </ul>
          </div>

          <div className="content">
            <div className="fullbody">
              <h1>Demetri Geras</h1>
              <h2>Software Engineer</h2>

              <div className="demetri">
                <img src={profilePic} alt="profile image" />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <main>
              <Element name="aboutMe" className="section">
                <section id="aboutMe">
                  <h1>About</h1>
                  <div className="container">
                    <div className="aboutd">
                      <p>
                        I'm a passionate software engineer with a knack for
                        solving complex problems and debugging my peers' errors.
                        I thrive in collaborative environments and believe in
                        creating warm and supportive spaces that foster
                        creativity and innovation. When I'm not coding, you can
                        find me playing soccer, chess, or exploring new parts of
                        the world.
                      </p>
                      {/* <img src='https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpBnU3Ou.png'></img> */}
                    </div>
                  </div>
                </section>
              </Element>

              <Element name="skills" className="section">
                <section id="skills">
                  <h1>Skills</h1>
                  <div className="container">
                    <div className="skill-card-card-border">
                      <img
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                        alt="HTML 5"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                        alt="CSS3"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                        alt="JavaScript"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        alt="React"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                        alt="Python"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                        alt="PostgreSQL"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
                        alt="Mongodb"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png"
                        alt="Flask"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://d1wrxu8gicsgam.cloudfront.net/wp-content/files/django-logo-big.jpg"
                        alt="Django"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://miro.medium.com/v2/resize:fit:800/0*Z9gFgZ9I_GxIyzmE.png"
                        alt="Node.js"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png"
                        alt="Github"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://www.flowgear.net/wp-content/uploads/2019/03/Rest-API-Large.png"
                        alt="Rest-Api"
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-card-card-border">
                      <img
                        src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
                        alt="Next.js"
                        className="skill-icon"
                      />
                      </div>

                    <div className="skill-card-card-border">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                        alt="TS"
                        className="skill-icon"
                      />
                      </div>
                      <div className="skill-card-card-border">
                      <img
                        src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                        alt="AWS"
                        className="skill-icon"
                      />
                      </div>
                      <div className="skill-card-card-border">
                      <img
                        src="https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png"
                        alt="GO"
                        className="skill-icon"
                      />
                      </div>
                  </div>
                  
                </section>
              </Element>

              <Element name="projects" className="section">
                <section id="projects">
                  <h1>Projects</h1>
                  <div className="container">
                    <div className="myprojects">
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>Hangman</p>
                        </div>
                        <div className="project-details">
                          <a
                            href="https://demetrigeras.github.io/Hangman/"
                            target="_blank"
                            className="project-link"
                          >
                            <img src={hangman} alt="hangman" className="pro" />
                          </a>
                          <div className="project-des">
                            <p>
                              Created a hangman game using Vanilla JavaScript,
                              HTML, and CSS, leveraging a 3rd party API to fetch
                              random words for the game. Used 6 pictures that
                              switch every time a player guesses a letter wrong.
                            </p>
                          </div>
                        </div>

                        <a
                          href="https://github.com/demetrigeras/Hangman"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Front-end
                        </a>
                      </div>
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>World Help</p>
                        </div>
                        <div className="project-details">
                          <a
                            href="https://world-help-charities.netlify.app/"
                            target="_blank"
                            className="project-link"
                          >
                            <img
                              src={worldhelp}
                              alt="worldhelp"
                              className="pro"
                            />
                          </a>
                          <div className="project-des">
                            <p>
                              Collaborated in building a web application using
                              React.js, MongoDB, and Express to create "World
                              Help," a platform where users can make pledges and
                              add charities. Utilized React.js to develop an
                              interactive user interface with dynamic components
                              and seamless nav. Integrated MongoDB for data
                              storage and Express for server-side functionality,
                              ensuring efficient data management and smooth user
                              interactions
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://github.com/demetrigeras/world-help-front"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Front-end
                        </a>
                        <a
                          href="https://github.com/demetrigeras/World-help"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Back-end
                        </a>
                      </div>
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>Life After GA</p>
                        </div>
                        <div className="project-details">
                          <img
                            src={lifeafterga}
                            alt="lifeafterga"
                            className="pro"
                          />
                          <div className="project-des">
                            <p>
                              Developing "Life After GA," a social media clone,
                              designed for bootcamp graduates to interact and
                              connect Utilizing React.js and Django frameworks
                              to build an user interface and handle backend
                              functionalities
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://github.com/demetrigeras/GA-LAGA"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Front-end{" "}
                        </a>
                        <a
                          href="https://github.com/demetrigeras/GA-LAGA-BE"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Back-end{" "}
                        </a>
                      </div>
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>Proseed</p>
                        </div>
                        <div className="project-details">
                          <a
                            href="https://proseed.netlify.app/"
                            target="_blank"
                            className="project-link"
                          >
                            <img src={proseed} alt="proseed" className="pro" />
                          </a>
                          <div className="project-des">
                            <p>
                              I've spearheaded the Proseed project, a dynamic
                              MERN stack platform for Investment Banking. My
                              pivotal achievement is the seamless integration of
                              AI technology for automated prospectus generation.
                              Within the platform, users can easily create
                              projects and navigate to "View Tasks," where
                              specific financial documents trigger the
                              generation of detailed prospectuses presented in
                              intuitive text modals. Notably, one of these
                              modals focuses on "Risk Factors," providing a
                              comprehensive overview. To achieve this, I
                              utilized MongoDB for efficient data management,
                              leveraged Express.js for robust server-side
                              operations, harnessed React.js to create a
                              user-friendly interface, and employed Node.js for
                              powerful backend functionality.
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://github.com/demetrigeras/Proseed-FE"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Front-end
                        </a>
                        <a
                          href="https://github.com/demetrigeras/Proseed-BE"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Back-end
                        </a>
                      </div>
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>Ethereum-Wallet-Tracker</p>
                        </div>
                        <div className="project-details">
                          <a target="_blank" className="project-link">
                            <img src={crypto} alt="proseed" className="pro" />
                          </a>
                          <div className="project-des">
                            <p>
                              The Ethereum Wallet Tracker is an innovative
                              application designed for tracking Ethereum
                              transactions. Developed using Go, Pongo2, and Gin,
                              this project leverages the Infura.io and Etherscan
                              APIs to fetch and display transaction data,
                              offering a seamless experience for monitoring
                              Ethereum wallets.
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://github.com/demetrigeras/ethereum-wallet-tracker-"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github
                        </a>
                      </div>
                      <div className="allprojectdivs">
                        <div className="protitle">
                          <p>Dion Party Scheduling App</p>
                        </div>
                        <div className="project-details">
                          <a target="_blank" className="project-link">
                            <img src={party} alt="proseed" className="pro" />
                          </a>
                          <div className="project-des">
                            <p>
                              Dion is a sophisticated Party Scheduling app that
                              enables users to create personalized profiles and
                              organize events with ease. It offers a seamless
                              browsing experience where users can view other
                              profiles and express interest in attending events.
                              As a host, you have complete control over guest
                              approvals, ensuring each event aligns with your
                              preferences. Built on the MERN stack (MongoDB,
                              Express.js, React, Node.js), Dion combines
                              advanced technology with user-centric design,
                              making it an efficient tool for event
                              planning and networking.
                            </p>
                          </div>
                        </div>
                        <a
                          href="https://github.com/demetrigeras/partynisi-fe"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Front-end
                        </a>
                        <a
                          href="https://github.com/demetrigeras/partnisi-BE"
                          target="_blank"
                          className="gitlinks"
                        >
                          Github Back-end
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </Element>

              <Element name="contact" className="section">
                <section id="contact">
                  <h1>Contact</h1>
                  <div className="allcontactme">
                    <div className="container">
                      <div className="contactme">
                        {/* <h1>Contact</h1> */}
                        <div className="logolink">
                          <img
                            src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png"
                            alt="gitlogo"
                            className="logo"
                          />

                          <a
                            href="https://github.com/demetrigeras"
                            target="_blank"
                            className="contactme"
                          >
                            https://github.com/demetrigeras
                          </a>
                          <br />

                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                            alt="gitlogo"
                            className="logo"
                          />

                          <a
                            href="https://www.linkedin.com/in/demetri-geras/"
                            target="_blank"
                            className="contactme"
                          >
                            https://www.linkedin.com/in/demetri-geras/
                          </a>
                          <br />

                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                            alt="gitlogo"
                            className="logo"
                          />
                          <a
                            href="mailto:demetrijgeras@gmail.com"
                            className="contactme"
                          >
                            demetrijgeras@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="chessthings">
                 <p>Can you solve the problem? Whites Move! </p><br/>
                 <p>Add me on chess.com</p>
                  <img src='https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpBnU3Ou.png'className="chesslogo"></img>
                  </div> */}
                  </div>
                </section>
              </Element>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
