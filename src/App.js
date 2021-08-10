import React, { useState, useEffect } from "react";
import img from "./images/image_14.png";
import logo1 from "./images/Vector.png";
import logo2 from "./images/Vector_2.png";
import logo3cp1 from "./images/Vector_3.png";
import logo3cp2 from "./images/Vector_3.png";
import logo3cp3 from "./images/Vector_3.png";
import logo4 from "./images/Vector_4.png";
import search from "./images/search.png";
import vector_del from "./images/Vector_del.png";
import arrow from "./images/Vector_arrow.png";
import down_arrow from "./images/Vector_down_arrow.png";
import search_last from "./images/search.png";

import "./App.css";

function App() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function fz() {
      let api_get = await fetch(
        "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
      );
      let final_api = await api_get.json();
      setItem(final_api.data);
    }

    fz();
  }, []);

  return (
    <div className="App">
      <div className="wrapper-test">
        <div className="top-left-section">
          <div className="left-most">
            <img src={img} />
            <p>TermMonitor</p>
          </div>

          <div className="left-least">
            <p>KEYWORDS</p>
            <div className="least-right">
              <input className="ip" disabled />
              <button className="bt">
                Submit
                <span>
                  <img src={arrow} />
                </span>
              </button>

              <h6 className="h6">A</h6>
            </div>
          </div>
        </div>

        <div className="bottom-left-section">
          <div className="bottom-leftmost">
            <ul>
              <li>
                <span>
                  <img src={logo1} />
                </span>
                <a>Add Keywords</a>
              </li>
              <li>
                <span>
                  <img src={logo2} />
                </span>
                <a>Matches</a>
              </li>

              <li>
                <span>
                  <img src={logo3cp1} />
                </span>
                <a>Manage Sources</a>
              </li>
              <li>
                <span>
                  <img src={logo3cp2} />
                </span>
                <a>Integration</a>
              </li>
              <li>
                <span>
                  <img src={logo3cp3} />
                </span>
                <a>Alerts</a>
              </li>
            </ul>

            <p>
              <span>
                <img src={logo4} />
              </span>
              Settings
              <span style={{ marginLeft: "100px" }}>
                <img src={down_arrow} />
              </span>
            </p>
            <p style={{ fontSize: "14px" }}>Billings</p>
          </div>

          <div className="bottom-rightmost">
            <div className="br-content">
              <div className="top-one">
                <p>
                  Add Another Keyword <span className="ln">1/3</span> UPGRADE
                </p>
                <p>Advance search</p>
              </div>

              <div className="input-box">
                <div className="searchbar">
                  <img src={search} />

                  <input type="text" placeholder="Enter your filters here" />
                </div>

                <button className="bottom-btn">SAVE FILTERS</button>
              </div>

              <div className="bottom-most">
                <div className="api-bottom-content">
                  <div className="bottom-hdng">
                    <p>The terms you are tracking</p>
                    <p>The data will refresh every 5 min</p>
                  </div>

                  <div className="bottom-table">
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        textAlign: "center",
                        borderCollapse: "collapse",
                        boxShadow: "0px 1px 5px 0px #0000001F",

                        boxShadow: "0px 2px 2px 0px #00000024",

                        boxShadow: "0px 3px 1px -2px #00000033",
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            height: "56px",
                            paddingLeft: "75px",
                            textAlign: "left",
                            fontWeight: "600",
                          }}
                        >
                          Keywords
                        </td>
                        <td
                          style={{
                            height: "56px",
                            width: "200px",
                            fontWeight: "600",
                          }}
                        >
                          Goal
                        </td>
                        <td
                          style={{
                            height: "56px",
                            width: "200px",
                            fontWeight: "600",
                          }}
                        >
                          Matches
                        </td>
                        <td
                          style={{
                            height: "56px",
                            width: "200px",
                            fontWeight: "600",
                          }}
                        >
                          Search Status
                        </td>
                        <td
                          style={{
                            height: "56px",
                            width: "200px",
                            fontWeight: "600",
                          }}
                        >
                          Delete Keyword
                        </td>
                      </tr>

                      {item.map((item) => {
                        return (
                          <>
                            <tr key={item.id} style={{ fontWeight: "400" }}>
                              <td className="seperate_style">
                                <p className="exp">{item.keyword}</p>

                                <span className="seperate_style_inline">
                                  <img src={search_last} />
                                </span>
                              </td>
                              <td>{item.goal}</td>
                              <td>{item.matches}</td>
                              <td>{item.search_status}</td>
                              <td>
                                <img src={vector_del} />
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>

              <div className="bottom-last-btn">
                <button>View Results</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
