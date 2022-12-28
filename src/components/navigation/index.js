import React from "react"
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-light">
                <div className="grid justify-items-center w-full">
                    <div className="flex gap-3  text-white text-sm mdtext-lg">
                        <div
                            onClick={() => navigate("/")}

                            href="/" className="cursor-pointer">
                            LEADERBOARD
                        </div>
                        <div>|</div>
                        <div
                            onClick={() => navigate("/live-games")}
                            href="/live-games" className="cursor-pointer">
                            LIVE GAMES
                        </div>
                        <div>|</div>
                        <a
                            onClick={() => navigate("/match-history")}
                            href="/match-history" className="cursor-pointer">
                            MATCH HISTORY
                        </a>
                        <div>|</div>
                        <div className="text-gray-500">
                            ABOUT
                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}


export default Navigation