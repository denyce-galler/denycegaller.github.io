import React from 'react'
import myPhoto from '../../src/'

const Homepage = () => {
  return (
    <>
      <body>
        <div className="nav-bar">
          <h1 className="name">Denyce Galler</h1>
          <a href="#about-me" className="a-nav-bar">
            About me
          </a>
          <a href="#projects" className="a-nav-bar">
            Projects
          </a>
          <a href="" className="a-nav-bar">
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/denyce-galler-8a620a229/"
            className="a-nav-bar"
          >
            Linkedin
          </a>
          <a href="https://github.com/denyce-galler" className="a-nav-bar">
            Github
          </a>
        </div>
        <div className="container-2">
          <p className="welcome">Welcome to my</p>
          <p className="portfolio">portfolio</p>
        </div>
        <div className="container-4">
          <img
            src="/IMG_6671.jpg"
            alt="Me in Switzerland"
            width="500"
            height="800"
            className="display-picture"
          />
          <div className="container-5">
            <div className="container-6">
              <h1 id="about-me">HI!</h1>
              <h1 className="greeting"> nice to meet you.</h1>
            </div>
            <p className="about-me-p">
              <br />
              I'm Denyce and I am a Graduate Software Developer.
              <br />
              <br />
              I began my career in tech as a Graduate Software Developer for New
              Zealand Customs almost 2 years ago.
              <br />
              <br />
              Prior to working at my current role, I was a Registered Nurse,
              with a working background in Mental Health and GP Nursing. This
              career transition was made possible after my completion of a New
              Zealand Certificate in Applied Software Development at Dev
              Academy,
              <br />
              <br />
              The impact of technology has been more apparent these recent years
              as many technological advancements have become more accessible to
              us. Observing this, alongside having close friends and family
              working in technology (who create & support a lot of cool
              products), has inspired me to question myself: how cool would it
              be if I got to contribute to this too?
              <br />
              <br />
            </p>
          </div>
        </div>
        <p className="prompt">
          I am now based in 📍Melbourne Australia, and I am looking for my next
          role as a Junior Developer.
        </p>
        <div className="container-7">
          <h1 className="dark-background-h1">My Current Technology Stack:</h1>
          <ul className="tech-stack">
            <li>Java, SQL, React, JavaScript, HTML, CSS</li>
            <li>Mockito, Express.js, </li>
            <li>REST API’s</li>
            <li>Git, Gitlab, Github</li>
            <li>Intellij,Visual Studio code, Maven, Postman, ThunderClient </li>
          </ul>
        </div>
        <div className="images">
          <img
            src="/java.jpg"
            alt="java logo"
            width="100"
            height="50"
            className="icons"
          />
          <img
            src="/sql copy.jpg"
            alt="sql logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/react.jpg"
            alt="react logo"
            width="60"
            height="50"
            className="icons"
          />
          <img
            src="/javascript.png"
            alt="javascript logo"
            width="60"
            height="50"
            className="icons"
          />
          <img
            src="/html.png"
            alt="html logo"
            width="60"
            height="50"
            className="icons"
          />
          <img
            src="/css.png"
            alt="css logo"
            width="60"
            height="50"
            className="icons"
          />
          <img
            src="/mockito.png"
            alt="mockito logo"
            width="100"
            height="50"
            className="icons"
          />
          <img
            src="/express.png"
            alt="express logo"
            width="150"
            height="50"
            className="icons"
          />
          <img
            src="/git.png"
            alt="git logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/gitlab.png"
            alt="gitlab logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/github.jpeg"
            alt="github logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/intellij.png"
            alt="intellij logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/vscode.png"
            alt="vscode logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/maven.png"
            alt="maven logo"
            width="150"
            height="50"
            className="icons"
          />
          <img
            src="/postman copy.png"
            alt="postman logo"
            width="50"
            height="50"
            className="icons"
          />
          <img
            src="/thunderclient.png"
            alt="thunderclient logo"
            width="50"
            height="50"
            className="icons"
          />
        </div>
        <div className="container-8">
          <h1 className="projects-heading">Projects</h1>
          <p className="project-title">Pocket Doro</p>
          <div className="project-photo-container">
            <img
              src="/pocketdoro.png"
              alt="pocketdoro screenshot"
              width="600"
              height="350"
              className="project-photo"
            />
            <video
              className="project-photo"
              width="600"
              height="350"
              controls
              autoplay
              muted
            >
              <source src="/Screen Record 2.mov" type="video/mov" />
            </video>
          </div>
          <div className="project-description">
            <ul>
              <li>Group project from Dev Academy</li>
              <li>Pomodoro timer - made for studying.</li>
              <li>
                See source code {''}
                <a
                  href="https://github.com/whai-2023/Pocket-Doro"
                  className="project-links"
                >
                  here
                </a>
              </li>
              <li>
                Watch a video of the app or watch it {''}
                <a
                  href="https://www.youtube.com/watch?v=OWKpgauWFA4"
                  className="project-links"
                >
                  here {''}
                </a>
                for the demo of the app
              </li>
            </ul>
          </div>

          <div>
            <p className="project-title-two">Recipe Book</p>
            <div className="project-photo-container-two">
              <img
                src="/homepage.png"
                alt="pocketdoro screenshot"
                width="600"
                height="350"
                className="project-photo"
              />
              <img
                src="/recipe.png"
                alt="recipe-book screenshot"
                width="600"
                height="350"
                className="project-photo"
              />
              <img
                src="/add-recipe.png"
                alt="recipe-book screenshot"
                width="600"
                height="350"
                className="project-photo"
              />
              <img
                src="/recipes-glossary.png"
                alt="recipe-book screenshot"
                width="600"
                height="350"
                className="project-photo"
              />
            </div>
            <div className="project-description">
              <ul>
                <li>Ongoing personal project</li>
                <li>Website design made with Figma</li>
                <li>
                  Recipe Book - made for storing recipes you've made that you
                  love to <br /> keep making!
                </li>
                <li>
                  See source code {''}
                  <a
                    href="https://github.com/denyce-galler/Recipe-Book"
                    className="project-links"
                  >
                    here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <p className="footer-text">©️ Denyce Galler 2025</p>
        </footer>
      </body>
    </>
  )
}

export default Homepage
