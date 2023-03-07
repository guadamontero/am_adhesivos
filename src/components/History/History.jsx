import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./history.module.css";

const History = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const activeLinkClassName = "activeLink";
  const notActiveLinkClassName = "link";

  return (
    <section className={styles.history}>
      <div className={styles.timeline}>
        <NavLink
          to="/historia/1985"
          className={({ isActive }) =>
          isActive ? activeLinkClassName : notActiveLinkClassName
        }
        >
          1985
        </NavLink>
        <NavLink
          to="/historia/1999"
          className={({ isActive }) =>
          isActive ? activeLinkClassName : notActiveLinkClassName
        }
        >
          1999
        </NavLink>
        <NavLink
          to="/historia/2002"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          2002
        </NavLink>
        <NavLink
          to="/historia/2013"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          2013
        </NavLink>
        <NavLink
          to="/historia/2020"
          className={({ isActive }) =>
          isActive ? activeLinkClassName : notActiveLinkClassName
        }
        >
          2020
        </NavLink>
        <NavLink
          to="/historia/2023"
          className={({ isActive }) =>
          isActive ? activeLinkClassName : notActiveLinkClassName
        }
        >
          2023
        </NavLink>
      </div>
    </section>
  );
};

export default History;
