import React from "react";
import { HomeStyled } from "./HomeStyled.js";
import { VscGithubAlt } from "react-icons/vsc";
import Main from "./Main/Main.jsx";

function Home() {
  return (
    <HomeStyled>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/86984902?s=40&v=4"
          alt=""
        />
        <span>
          <b>fernando</b>
        </span>
      </header>
      <main>
        <Main></Main>
      </main>
      <footer>
        <span>
          Developed by
          <a href="https://github.com/FerrnA">
            <VscGithubAlt /> FerrnA
          </a>
        </span>
      </footer>
    </HomeStyled>
  );
}

export default Home;
