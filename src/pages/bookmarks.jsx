import { useState } from "react";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Search from "../components/layout/explore/search";
import InfoPanel from "../components/layout/info-panel/InfoPanel";
import SaveLater from "../components/layout/bookmarks/saveLater";

export default function Bookmarks() {
  return (
    <main className="main">
      <Sidebar />

      <div className="main__center">
        <Search placeholder={"Search Bookmarks"} />
        <SaveLater />
      </div>

      <InfoPanel />
    </main>
  );
}
