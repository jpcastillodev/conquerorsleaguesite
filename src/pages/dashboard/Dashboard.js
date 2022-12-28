import React, { useEffect, useState } from "react"
import axios from "axios"
import { doc, getDoc } from "firebase/firestore"
import db from '../../tools/firebase.config';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {


    const [ranking, setRanking] = useState([])
    const [filterPlayer, setFilterPlayer] = useState("")
    const [filterRole, setRole] = useState("")

    useEffect(() => {



        (async () => {

            // const csv = ``

            // const lines = csv.split("\n")
            // lines.forEach(async line => {

            //     const [
            //         date,
            //         nick,
            //         twitter,
            //         facebook,
            //         leaguepedia,
            //         twitch
            //     ] = line.split(',')

            //     const payload = {
            //         date: date.trim(),
            //         nick: nick.trim(),
            //         twitter: twitter.trim(),
            //         facebook: facebook.trim(),
            //         leaguepedia: leaguepedia.trim(),
            //         twitch: twitch.trim()
            //     }
            //     const alias = nick.toUpperCase().replace(/\s/g, "");
            //     console.log(alias)
            //      setDoc(doc(db, "player", alias), payload)
            // })

            try {
                const { data: ranking } = await axios.post("https://us-central1-conquerorsqueue.cloudfunctions.net/api/ranking")
                setRanking(ranking.payload)
            } catch (err) {
                console.log(err)
            }


        })()
    }, [])


    function isInFilter(player, filterPlayer) {
        return player.nick.toLowerCase().includes(filterPlayer.toLowerCase())
    }
    function isInRole(player, role) {
        return player.role === role
    }
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
                        <div className="mt-2 md:mt-7" >
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
                        <div className="py-6 px-2 flex justify-end  w-full">

                            <img src="/images/conqueror.png" width="160" height="75" alt="conqueror" />
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
                    <div className="right-side">
                        <div className="px-3 ">
                            <select
                                defaultValue=""
                                onChange={(ev) => setRole(ev.target.value)}
                                id="roles"
                                className="container-select bg-main text-white text-sm block w-full p-2.5 dark:bg-main dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                                <option value="" selected>ROLE</option>
                                <option value="TOP">TOP</option>
                                <option value="JGL">JUNGLE</option>
                                <option value="MID">MID</option>
                                <option value="BOT">ADC</option>
                                <option value="SUP">SUP</option>

                            </select>
                        </div>
                        <div className="container-search ">
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
                </div>
                <div className="table">
                    <div className="headers">
                        <button className="header sortable rank">rank</button>
                        <button className="header sortable lp">Role</button>
                        <div className="header name">Name</div>
                        <button className="header sortable seasonPoints">MMR</button>
                        <button className="header sortable lp">WINRATE</button>
                        <button className="header sortable lp">W/L</button>
                        <div className="header socials">Socials</div>
                    </div>


                    {
                        ranking
                            .map((player, index) => (
                                <PlayerRow
                                    key={index}
                                    show={(!filterPlayer || isInFilter(player, filterPlayer)) && (!filterRole || isInRole(player, filterRole))}
                                    rank={index + 1}
                                    player={player}
                                    isFirst={index === 0}
                                    className={index === 0 && !filterPlayer ? "first with-divider" : 0}

                                />
                            ))
                    }

                </div>
            </section>
        </>
    )
}



const PlayerRow = ({ rank, player, className, show, isFirst }) => {

    const navigate = useNavigate();

    const role = {
        BOT: "bottom",
        SUP: "utility",
        TOP: "top",
        MID: "middle",
        JGL: "jungle"
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
                // console.log(err)
            }
        })()
    }, [player.nick])
    if (!show) {
        return (
            <>
            </>
        )
    }
    const goToProfile = () => {
        navigate(`/profile/${player.id}`);
    }
    const games = player.wins + player.looses
    const wr = ((player.wins / (games || 1)) * 100).toFixed(0)
    return (
        <div
            onClick={() => {
                goToProfile()
            }}
            key={rank} className={["player-row cursor-pointer hover:scale-105  ease-in duration-200", className, (show ? "hidden" : "")].join(" ")}>
            <div className="info-small">
                <div className="small-top-row">
                    <div className="small-rank">{rank}
                    </div>
                    <div className="small-name">{player.nick}</div>
                </div>
                <div>
                    <div className="text-2xl">MMR: {player.mmr} </div>
                </div>
            </div>
            <div className="row-cell rank">{rank}</div>
            <div className="row-cell lp ">
                <div className="grid justify-items-start md:justify-items-center w-full ">
                    {
                        isFirst ?
                            <img
                                className="intro-animation active first-icon"
                                alt="icon"
                                src={`/images/${role[player.role]}.svg`} width="30" />
                            : <img
                                className="intro-animation active first-icon"
                                alt="icon"
                                src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${role[player.role]}.svg`} width="30" />
                    }
                </div>
            </div>
            <div className="row-cell name">{player.nick}</div>

            <div className="row-cell stat seasonPoints">{player.mmr}</div>
            <div className="row-cell stat seasonPoints">{wr}% </div>
            <div className="row-cell stat seasonPoints">{player.wins}-{player.looses}</div>


            <div className="row-cell socials ">
                {socials.twitter &&
                    <a href={socials.twitter} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i className="fa-brands fa-twitter fa-xl"></i>
                    </a>}
                {socials.youtube &&
                    <a href={socials.youtube} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i className="fa-brands fa-youtube fa-xl"></i>
                    </a>}
                {socials.twitch &&
                    <a href={socials.twitch} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i className="fa-brands fa-twitch fa-xl"></i>
                    </a>}
                {socials.facebook &&
                    <a href={socials.facebook} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1 ">
                        <i className="fa-brands fa-facebook-f fa-lg"></i>
                    </a>}

                {socials.leaguepedia &&
                    <a href={socials.leaguepedia} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                        <i className="fa-solid fa-trophy fa-lg"></i>
                    </a>}
            </div>
        </div>
    )
}
export default Dashboard