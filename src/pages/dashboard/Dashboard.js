import React from "react"


const Dashboard = () => {


    return (
        <>
            <div className="flex justify-center bg-black py-7 ">
                <div aria-hidden="true" className="hidden md:block kaisa-image overflow-hidden" >
                    <picture>
                        <img
                            src="https://championsqueue.lolesports.com/static/aae331cbfdcb06e9eba1dc46705c5bfc/9be5e/kaisa.webp"
                            alt="Kai'Sa" />
                    </picture>
                </div>
                <div aria-hidden="true" className="hidden md:block lucian-image overflow-hidden" >
                    <picture>
                        <img
                            src="https://championsqueue.lolesports.com/static/86e93384760f80683f32d796d96efaa6/521ee/lucian.webp"
                            alt="Lucian" />
                    </picture>
                </div>
                <span className="text-center px-8 z-10 ">
                    <span className="grid grid-cols-1 gap-2 place-content-center h-48">
                        <img src="/images/icon.PNG" width="75" className="m-auto" alt="icon"/>
                        <span className="text-7xl italic font-black text-yellow-400">CONQUERORS</span>
                        <span className="text-3xl text-white ">QUEUE</span>
                    </span>

                </span>

            </div>
            <section className="container pt-[3vw] place-content-center px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 ">
                    <div className="md:col-span-3 title-block title-container">
                        <div className="mt-4" >
                            <div className="leading-champions-title text-white font-semi text-center">Leading Conquerors</div>
                            <div className="pb-4 subtitle text-center">2022 Off Season</div>
                        </div>
                    </div>
                    <div className="md:col-span-2 first-block">
                        <div className="p-6">
                            <div className="rank">1st</div>
                            <div className="player-name">IMT Arrow</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">2ND</div>
                            <div className="player-name">C9 Copy</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">3RD</div>
                            <div className="player-name">C9 Copy</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">4TH</div>
                            <div className="player-name">C9 Copy</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">5TH</div>
                            <div className="player-name">C9 Copy</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">6TH</div>
                            <div className="player-name">C9 Copy</div>
                            <div className="season-points">Season points: 50</div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="container pt-[4vw] px-4 md:px-8">
                <div className=" subtitle">2022 Off Season | SPLIT 1 | N DAYS REMAINING</div>
                <div className="header-row">

                    <div className="leading-champions-subtitle text-white text-2xl">LEADERBOARD</div>
                    <div className="container-search right-side">
                        <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained ">
                            <div style={{ display: "block", maxWidth: "24px" }}>
                                <i className="fa-solid fa-magnifying-glass fa-xl secondary-color"></i>

                            </div>
                            <div aria-hidden="true" data-placeholder-image="" >

                            </div>


                        </div>
                        <input type="text" placeholder="Search player name" />
                    </div>
                </div>
                <div className="table">
                    <div className="headers">
                        <button className="header sortable rank">Split rank</button>
                        <button className="header sortable lp">LP</button>
                        <button className="header sortable seasonPoints">Season points</button>
                        <div className="header name">Name</div>
                        <div className="header socials">Socials</div>
                    </div>

                    <div className="player-row first with-divider">
                        <div className="info-small">
                            <div className="small-top-row">
                                <div className="small-rank">1st place</div>
                                <div className="small-name">IMT Arrow</div>
                            </div>
                            <div>
                                <div>LP: 2,159</div>
                                <div>Season points: 50</div>
                            </div>
                        </div>
                        <div className="row-cell rank">1</div>
                        <div className="row-cell stat lp">2,159</div>
                        <div className="row-cell stat seasonPoints">50</div>
                        <div className="row-cell name">IMT Arrow</div>
                        <div className="row-cell socials">
                            <a href="https://twitch.tv/arrowioi" target="_blank"  rel="noreferrer" className="link inverted">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="player-row ">
                        <div className="info-small">
                            <div className="small-top-row">
                                <div className="small-rank">2nd place</div>
                                <div className="small-name">IMT Arrow</div>
                            </div>
                            <div>
                                <div>LP: 2,159</div>
                                <div>Season points: 50</div>
                            </div>
                        </div>
                        <div className="row-cell rank">2</div>
                        <div className="row-cell stat lp">2,159</div>
                        <div className="row-cell stat seasonPoints">50</div>
                        <div className="row-cell name">IMT Arrow</div>
                        <div className="row-cell socials">
                            <a href="https://twitch.tv/arrowioi" target="_blank"  rel="noreferrer" className="link inverted">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="player-row ">
                        <div className="info-small">
                            <div className="small-top-row">
                                <div className="small-rank">3rd place</div>
                                <div className="small-name">IMT Arrow</div>
                            </div>
                            <div>
                                <div>LP: 2,159</div>
                                <div>Season points: 50</div>
                            </div>
                        </div>
                        <div className="row-cell rank">3</div>
                        <div className="row-cell stat lp">2,159</div>
                        <div className="row-cell stat seasonPoints">50</div>
                        <div className="row-cell name">IMT Arrow</div>
                        <div className="row-cell socials">
                            <a href="https://twitch.tv/arrowioi" target="_blank"  rel="noreferrer" className="link inverted">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="player-row ">
                        <div className="info-small">
                            <div className="small-top-row">
                                <div className="small-rank">4th place</div>
                                <div className="small-name">IMT Arrow</div>
                            </div>
                            <div>
                                <div>LP: 2,159</div>
                                <div>Season points: 50</div>
                            </div>
                        </div>
                        <div className="row-cell rank">4</div>
                        <div className="row-cell stat lp">2,159</div>
                        <div className="row-cell stat seasonPoints">50</div>
                        <div className="row-cell name">IMT Arrow</div>
                        <div className="row-cell socials">
                            <a href="https://twitch.tv/arrowioi" target="_blank"  rel="noreferrer" className="link inverted">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard