import React from "react"

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import MatchHistory from "../../pages/matchhistory/MatchHistory";
import EntryData from "../../pages/entrydata/EntryData";
import LiveGames from "../../pages/livegames/LiveGames";

import Navigation from "../navigation";
class Header extends React.Component {
    render() {
        return (
            <div className="">
                <div>
                    <Navigation />
                </div>

                <div className=" py-5 min-h-max">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route exact path="/match-history" element={<MatchHistory />} />
                        <Route exact path="/live-games" element={<LiveGames />} />
                        <Route exact path="/entry-data" element={<EntryData />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
              
            </div>
        );
    }
}

export default Header