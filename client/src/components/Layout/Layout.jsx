import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LayoutStyled } from "./LayoutStyled.js";
import { VscGithubAlt } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLastTransactions,
  getUserBalance,
} from "../../redux/reducers/transactions/actions.js";
import Header from "./Header/Header.jsx";

function Layout() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.transactions.lasttransactions);
  let balance = useSelector((state) => state.transactions.userBalance);
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchLastTransactions());
      dispatch(getUserBalance());
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutStyled>
      <header>
        <Header />
      </header>
      <main>
        <Outlet context={{ data, balance }} />
      </main>
      <footer>
        <span>
          Developed by
          <a href="https://github.com/FerrnA">
            <VscGithubAlt /> FerrnA
          </a>
        </span>
      </footer>
    </LayoutStyled>
  );
}

export default Layout;
