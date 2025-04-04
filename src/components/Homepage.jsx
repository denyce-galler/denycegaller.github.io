import React from 'react'
import myPhoto from '../../src/'

const Homepage = () => {
  return (
    <>
      <body>
        <div className="container-1">
          <div className="nav-bar">
            <h1 className="name">Denyce Galler</h1>
            <a href="#about-me">About me</a>
            <a href="#projects">Projects</a>
            <a href="">CV</a>
            <a href="https://www.linkedin.com/in/denyce-galler-8a620a229/">
              Linkedin
            </a>
            <a href="https://github.com/denyce-galler">Github</a>
          </div>
        </div>
        <div className="container-2">
          <p className="welcome">Welcome to my</p>
          <p className="portfolio">portfolio</p>
        </div>
        <div className="container-3">
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
                I began my career in tech as a Graduate Software Developer for
                New Zealand Customs almost 2 years ago.
                <br />
                <br />
                Prior to working at my current role, I was a Registered Nurse,
                with a working background in Mental Health and GP Nursing. This
                career transition was made possible after my completion of a New
                Zealand Certificate in Applied Software Development at Dev
                Academy,
                <br />
                <br />
                The impact of technology has been more apparent these recent
                years as many technological advancements have become more
                accessible to us. Observing this, alongside having close friends
                and family working in technology (who create & support a lot of
                cool products), has inspired me to question myself: how cool
                would it be if I got to contribute to this too?
                <br />
                <br />
              </p>
            </div>
          </div>
          <p className="prompt">
            I am now based in 📍Melbourne Australia, and I am looking for my
            next role as a Junior Developer.
          </p>
        </div>
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
        <div id="projects">
          <h1 className="projects-heading">Projects</h1>
          <div className="project-one">
            <div className="description">
              <h2 className="project-title-one">Pocket Doro</h2>
              <p className="project-p">Pomodoro timer</p>
              <ul className="project-p">
                <li>
                  Currently work in progress for deployment. Watch
                  <a
                    href="https://www.youtube.com/watch?v=OWKpgauWFA4"
                    className="project-links"
                  >
                    here
                  </a>
                  for the demo of the app
                </li>
              </ul>
              <a
                href="https://github.com/whai-2023/Pocket-Doro"
                className="project-links"
              >
                See source code
              </a>
            </div>
            <img
              src="/pocketdoro.png"
              alt="pocketdoro screenshot"
              width="600"
              height="350"
              className="project-photo"
            />
          </div>
        </div>
        <div id="projects">
          <div className="project-one">
            <div className="description">
              <h2 className="project-title-one">Recipe-Book</h2>
              <p className="project-p">Pomodoro timer</p>
              <ul className="project-p">
                <li>
                  Ongoing project. An app that allows you to store your
                  favourite recipes Watch
                </li>
              </ul>
              <a
                href="https://github.com/whai-2023/Pocket-Doro"
                className="project-links"
              >
                See source code
              </a>
            </div>
            <img
              src="/pocketdoro.png"
              alt="pocketdoro screenshot"
              width="600"
              height="350"
              className="project-photo"
            />
          </div>
        </div>
      </body>
      <footer>
        <p>hello</p>
      </footer>
    </>
  )
}

export default Homepage
