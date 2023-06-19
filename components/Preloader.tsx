import React from "react";

function Preloader() {
  return (
    <>
      {/* start preloader */}
      <div className="preloader">
        <div className="inner">
          <span className="icon">
            <i className="fi flaticon-two" />
          </span>
        </div>
      </div>
      {/* end preloader */}
      {/* strat music-box */}
      <div className="music-box">
        <button className="music-box-toggle-btn">
          <i className="fa fa-music" />
        </button>
        <div className="music-holder">
          {<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/326494474&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false" />}
        </div>
      </div>
 
    </>
  );
}

export default Preloader;
