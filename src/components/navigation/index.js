import React from "react"

const Navigation = () => {

    return (
        <>
            <div className="hidden md:flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-semibold">
                <div className="grid justify-items-center w-full">
                    <div className="flex gap-3 cursor-pointer text-white text-sm">
                        <div className="px-2">
                        <img src="/images/icon.PNG" width="23"  alt="icon"/>

                        </div>
                        <div>
                            LEADERBOARD
                        </div>
                        <div>|</div>
                        <div>
                            HALL OF CHAMPIONS
                        </div>
                        <div>|</div>
                        <div>
                            MATCH HISTORY
                        </div>
                        <div>|</div>
                        <div>
                            ABOUT
                        </div>
                    </div>
                </div>


            </div>
    

        </>
    )

}


export default Navigation