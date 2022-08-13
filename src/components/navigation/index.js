import React from "react"

const Navigation = () => {

    return (
        <>
            <div className="justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-light">
                <div className="grid justify-items-center w-full">
                    <div className="flex gap-3  text-white text-sm mdtext-lg">
                        <a href="/" className="cursor-pointer">
                            LEADERBOARD
                        </a>
                        <div>|</div>
                        <a href="/live-games" className="cursor-pointer">
                            LIVE GAMES
                        </a>
                        <div>|</div>
                        <a href="/match-history" className="cursor-pointer">
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