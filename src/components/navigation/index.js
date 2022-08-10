import React from "react"

const Navigation = () => {

    return (
        <>
            <div className="hidden md:flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-light">
                <div className="grid justify-items-center w-full">
                    <div className="flex gap-3 cursor-pointer text-white text-lg">
                        <div className="px-2">
                        {/* <img src="/images/icon.PNG" width="23"  alt="icon"/> */}

                        </div>
                        <a href="/">
                            LEADERBOARD
                        </a>
                        <div>|</div>
                        <div className="text-gray-500">
                            HALL OF CHAMPIONS
                        </div>
                        <div>|</div>
                        <div className="text-gray-500">
                            MATCH HISTORY
                        </div>
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