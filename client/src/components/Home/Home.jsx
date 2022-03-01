import React, { useEffect } from "react";
import { HomeStyled } from "./HomeStyled.js";
import { VscGithubAlt } from "react-icons/vsc";
import Main from "./Main/Main.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllTransactions,
  getUserBalance,
} from "../../redux/reducers/transactions/actions.js";

function Home() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.transactions.transactions);
  let balance = useSelector((state) => state.transactions.userBalance);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchAllTransactions());
      dispatch(getUserBalance());
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeStyled>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/86984902?s=40&v=4"
          alt=""
        />
        <span>
          <b>fer</b>
        </span>
      </header>
      <main>
        <Main data={data} balance={balance}></Main>
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
