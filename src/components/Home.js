import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <div className="jumbotron">
              <h2 className="i-intro">Welcome ! To</h2>
              <h1 className="i-name">Together</h1>

              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">We Hope</div>
                  <div className="i-title-item">You</div>
                  <div className="i-title-item">Enjoyed</div>
                  <div className="i-title-item">Our</div>
                  <div className="i-title-item">Website</div>
                </div>
              </div>
            </div>
            <p className="i-desc">
              We design this website to help students and office workers to save
              more time and data by using this app, as from this website they
              are going to manage the notes and files ,time-table on a single
              page instead of using many apps .
            </p>
          </div>
          <div className="nav-buttons">
            <button
              className="nav-link-btn"
              onClick={() => window.location.assign("/main-note")}
            >
              NOTES
            </button>

            <button
              onClick={() => window.location.assign("/time-table")}
              className="nav-link-btn"
            >
              CALENDAR
            </button>
            <button
              onClick={() => window.location.assign("/complaint-box")}
              className="nav-link-btn"
            >
              COMPLAINT BOX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
