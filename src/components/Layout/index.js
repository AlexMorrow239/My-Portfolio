import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import NotificationBanner from "../NotificationBanner";

export default function Layout() {
  return (
    <div className="App">
      <NotificationBanner />
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}
