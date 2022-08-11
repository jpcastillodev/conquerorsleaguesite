import React, { useEffect, useState } from "react"
import axios from "axios"
import { doc, getDoc } from "firebase/firestore"
import db from '../../tools/firebase.config';

const Dashboard = () => {


    const [ranking, setRanking] = useState([])
    const [filterPlayer, setFilterPlayer] = useState("")

    useEffect(() => {
        (async () => {
            try {
                const { data: ranking } = await axios.post("https://us-central1-efektivos-qa.cloudfunctions.net/api/v1/config/ranking")
                setRanking(ranking.payload)
            } catch (err) {
                console.log(err)
            }


        })()
    }, [])

    if (!ranking.length) {
        return <>
        </>
    }
    return (
        <>
            <div className="hidden md:flex justify-center bg-black">
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
                <span className="text-center px-8 z-10  title  py-7 ">
                    <span className="grid grid-cols-1 gap-2 place-content-center h-48 ">
                        <img src="/images/icon.png" width="75" className="m-auto" alt="icon" />
                        <span className="text-3xl md:text-8xl italic text-yellow-400 ">
                            CONQUERORS
                        </span>
                        <span className="text-3xl text-white italic ">QUEUE</span>
                    </span>
                </span>
            </div>
            <section className="container text-center  pt-[1vw]">

                <a className="text-white font-light cursor-pointer text-2xl " href="https://twitter.com/AureliusEsport">
                    powered by <b className="highlight font-light">Aurelius</b>
                </a>
            </section>
            <section className="container place-content-center  pt-[1vw] px-4 md:px-0">

                <div className="grid grid-cols-1 md:grid-cols-5 ">
                    <div className="md:col-span-3 title-block title-container">
                        <div className="mt-4" >
                            <div className="leading-champions-title text-white font-semi text-center">Leading Conquerors</div>
                            <div className="pb-4 subtitle text-center">2022 Off Season</div>
                        </div>
                    </div>
                    <div className="md:col-span-2 first-block flex">

                        <div className="py-6 pl-6 ">

                            <div className="rank">1st</div>
                            <div className="player-name">{ranking[0].nick}</div>
                            <div className="season-points">MMR: {ranking[0].mmr}</div>
                        </div>
                        <div className="py-6 px-2 ">

                            <img src="/images/conqueror.png" width="150" height="75" alt="conqueror" />
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">2ND</div>
                            <div className="player-name">{ranking[1].nick}</div>
                            <div className="season-points">MMR: {ranking[1].mmr}</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">3RD</div>
                            <div className="player-name">{ranking[2].nick}</div>
                            <div className="season-points">MMR: {ranking[2].mmr}</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">4TH</div>
                            <div className="player-name">{ranking[3].nick}</div>
                            <div className="season-points">MMR: {ranking[3].mmr}</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">5TH</div>
                            <div className="player-name">{ranking[4].nick}</div>
                            <div className="season-points">MMR: {ranking[4].mmr}</div>
                        </div>
                    </div>
                    <div className="...">
                        <div className="bottom-row-player">
                            <div className="rank">6TH</div>
                            <div className="player-name">{ranking[5].nick}</div>
                            <div className="season-points">MMR: {ranking[5].mmr}</div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="container pt-[4vw] px-4 md:px-0">
                <div className=" subtitle">2022 Off Season | SPLIT 1 </div>
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
                        <input type="text" placeholder="Search player name" onChange={(ev) => setFilterPlayer(ev.target.value)} />
                    </div>
                </div>
                <div className="table">
                    <div className="headers">
                        <button className="header sortable rank">Split rank</button>
                        <button className="header sortable lp">Role</button>
                        <button className="header sortable seasonPoints">MMR</button>
                        <div className="header name">Name</div>
                        <div className="header socials">Socials</div>
                    </div>


                    {
                        ranking
                            .map((player, index) => (
                                <PlayerRow
                                    show={(!filterPlayer || player.nick.toLowerCase().includes(filterPlayer.toLowerCase()))}
                                    rank={index + 1}
                                    player={player}
                                    className={index === 0 && !filterPlayer ? "first with-divider" : 0}

                                />
                            ))
                    }

                </div>
            </section>
        </>
    )
}



const PlayerRow = ({ rank, player, className, show }) => {


    const role = {
        BOT: "ADC",
        SUP: "SUPPORT",
        TOP: "TOPLANER",
        MID: "MIDLANER",
        JGL: "JUNGLER"
    }



    const [socials, setSocials] = useState({})

    useEffect(() => {
        (async () => {

            const nick = player.nick.toUpperCase().replace(/\s/g, "");
            try {

                const docRef = doc(db, "player", nick)
                const docSnap = await getDoc(docRef);
                if (!docSnap.exists()) {
                    return
                }

                const profile = docSnap.data()
                setSocials(profile)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [player.nick])
    if (!show) {
        return (
            <>
            </>
        )
    }
    return (
        <div className={["player-row", className, (show ? "hidden" : "")].join(" ")}>
            <div className="info-small">
                <div className="small-top-row">
                    <div className="small-rank">#{rank}</div>
                    <div className="small-name">{player.nick}</div>
                </div>
                <div>
                    <div>MMR: {player.mmr}</div>
                </div>
            </div>
            <div className="row-cell rank">#{rank}</div>
            <div className="row-cell lp">{role[player.role]}</div>

            <div className="row-cell stat seasonPoints">{player.mmr}</div>
            <div className="row-cell name">{player.nick}</div>
            <div className="row-cell socials ">
                {socials.twitter &&
                    <a href={socials.twitter} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i className="fa-brands fa-twitter fa-xl"></i>
                    </a>}
                {socials.youtube &&
                    <a href={socials.youtube} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i class="fa-brands fa-youtube fa-xl"></i>
                    </a>}
                {socials.twitch &&
                    <a href={socials.twitch} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i class="fa-brands fa-twitch fa-xl"></i>
                    </a>}
                {socials.facebook &&
                    <a href={socials.facebook} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1 ">
                        <i class="fa-brands fa-facebook-f fa-lg"></i>
                    </a>}

                {socials.leaguepedia &&
                    <a href={socials.leaguepedia} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i class="fa-solid fa-trophy fa-lg"></i>
                    </a>}
            </div>
        </div>
    )
}
export default Dashboard