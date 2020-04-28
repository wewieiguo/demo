import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import styles from "./App.module.less";
import { demoList } from "./config";
import Transition from "./component/transition";
function App() {
  return (
    <div className={styles.container}>
      <div className={styles["app"]}>
        <h1>css3动画</h1>
        <header className={styles["app-header"]}>
          {demoList.map((elem, index) => {
            return (
              <div key={elem.key} className={styles["item-style"]}>
                <div
                  className={styles["item-aside"]}
                  style={{
                    borderColor: elem.color,
                    borderBottomColor: "transparent"
                  }}
                >
                  <div
                    className={styles["item-center"]}
                    style={{
                      borderColor: elem.centerColor,
                      borderBottomColor: "transparent"
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </header>
        <h1>css3过渡</h1>
        <Transition />
      </div>
    </div>
  );
}

export default App;
