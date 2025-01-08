import React from "react";
import "./index.scss";

const NotificationBanner = () => {
  return (
    <div className="notification-banner">
      <p>
        ⚠️ This is an old version of my portfolio. Please visit my new website
        at{" "}
        <a
          href="https://alex-morrow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          alex-morrow.com
        </a>
      </p>
    </div>
  );
};

export default NotificationBanner;
