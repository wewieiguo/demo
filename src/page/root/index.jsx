import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import styles from "./index.module.less";
import Animation from "../animation";
import Transition from "../transition";
import BorderContent from "../borderContent";
export default function Root(props) {
  return (
    <div className={styles.container}>
      <div className={styles["header"]}>
        <NavLink
          className={`${styles["menu-item"]}`}
          activeClassName={`${styles["menu-item-active"]}`}
          to={`/root/animation`}
        >
          动画
        </NavLink>
        <NavLink
          className={`${styles["menu-item"]}`}
          activeClassName={`${styles["menu-item-active"]}`}
          to={`/root/transition`}
        >
          过渡
        </NavLink>
        <NavLink
          className={`${styles["menu-item"]}`}
          activeClassName={`${styles["menu-item-active"]}`}
          to={`/root/border`}
        >
          边框
        </NavLink>
      </div>

      <div className={styles["content"]}>
        <div className={styles["content-container"]}>
          <Switch>
            <Route
              path={`/root/`}
              exact
              render={() => <Redirect to={`/root/animation`} />}
            />
            <Route path={`/root/animation`} component={Animation} />
            <Route path={`/root/transition`} component={Transition} />
            <Route path={`/root/border`} component={BorderContent} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
