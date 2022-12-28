import React, { useEffect, useState } from "react"
import axios from "axios"
import { doc, getDoc } from "firebase/firestore"
import db from '../../tools/firebase.config';
import { useParams } from "react-router-dom";

const Dashboard = () => {

    const { uid } = useParams();

    const [games, setGames] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [profile, setProfile] = useState({})
    const [socials, setSocials] = useState({})

    useEffect(() => {
        (async () => {
            if (!uid) {
                return
            }
            try {
                const { data: player } = await axios.post(`https://us-central1-conquerorsqueue.cloudfunctions.net/api/profile/${uid}`)
                setGames(Object.entries(player.payload).reverse())
                setProfile(player.profile)
                setisLoading(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [uid])
    useEffect(() => {
        (async () => {

            const nick = profile.name.toUpperCase().replace(/\s/g, "");
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
    }, [profile.name])


    function getPlayerByCondition(games, ally = true) {
        return games.map(([_, players]) => {
            const current_player = players.find(player => player.player_id === uid)
            const side_players = players.filter(player => player.side === current_player.side)
            const against_players = players.filter(player => player.side !== current_player.side)

            return ally ? side_players : against_players
        })
            .flat()
            .filter(player => player.player_id !== uid)
    }

    function getScoreFromPlayer(games) {

        let _games_winrates = {}
        for (const player of games) {
            if (_games_winrates[player.name]) {
                continue
            }
            const player_games = games.filter(game => game.player_id === player.player_id)
            const wins = player_games.filter(game => game.side === game.winner).length
            const looses = player_games.length - wins
            const total_games = wins + looses
            const wr = Number(((wins / (total_games || 1)) * 100).toFixed(0))

            _games_winrates[player.name] = {
                role: player.role,
                name: player.name,
                wr,
                wins,
                looses,
                total_games
            }

        }
        const [best] = Object.values(_games_winrates)
            .sort((a, b) => a.looses - b.looses)
            .sort((a, b) => b.wins - a.wins)
            .sort((a, b) => b.wr - a.wr)
        return best || {}
    }
    const role = {
        BOT: "bottom",
        SUP: "utility",
        TOP: "top",
        MID: "middle",
        JGL: "jungle"
    }
    const total_games = profile.wins + profile.looses
    const wr = ((profile.wins / (total_games || 1)) * 100).toFixed(0)


    const allies = getPlayerByCondition(games)
    const enemys = getPlayerByCondition(games, false)

    const best_duo = getScoreFromPlayer(allies)
    const archenemy = getScoreFromPlayer(enemys)



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
                            PROFILE
                        </span>
                    </span>
                </span>
            </div>
            <section className="container text-center pt-[1vw]">
                <a className="text-white font-light cursor-pointer text-2xl " href="https://twitter.com/AureliusEsport">
                    powered by <b className="highlight font-light">Aurelius</b>
                </a>
            </section>
            <section className="container place-content-center  pt-[1vw] px-4 md:px-0">


            </section>


            <section className="container px-4 md:px-0">
                <div className="grid grid-cols-3  text-white gap-4">
                    <div className="bg-black p-5 col-span-3 md:col-span-2">
                        <div className="flex justify-between">
                            <div className="text-2xl md:text-8xl">
                                {profile.name}
                            </div>

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
                        <div className="flex text-white align-bottom gap-3">
                            <div>
                                <span className="text-gray-500">role</span>
                                <img
                                    className="intro-animation active first-icon pb-2"
                                    alt="icon"
                                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${role[profile.role]}.svg`} width="55" />
                            </div>
                            <div className="columns-1">
                                <div>
                                    <span className="text-gray-500">mmr</span>
                                </div>

                                <span className="text-2xl md:text-6xl inline-block align-bottom px-2">
                                    {profile.mmr}
                                </span>

                            </div>
                            <div className="columns-1">
                                <div>
                                    <span className="text-gray-500">w/L</span>
                                </div>
                                <span className="text-2xl md:text-6xl inline-block align-bottom px-2">

                                    {profile.wins}-{profile.looses}
                                </span>
                            </div>
                            <div className="columns-1">
                                <div>
                                    <span className="text-gray-500">WIN%</span>
                                </div>
                                <span className="text-2xl md:text-6xl inline-block align-bottom px-2">

                                    {wr}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2  col-span-3 md:col-span-1 gap-4">
                        <div className="bg-black p-5">
                            <div className="text-2xl  break-word">
                                BEST DUO
                            </div>
                            {best_duo.name && <img
                                className="intro-animation active first-icon pb-2"
                                alt="icon"
                                src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${role[best_duo.role]}.svg`} width="45" />}

                            <div className="text-4xl break-all">
                                {best_duo.name ? best_duo.name : "no data"}
                            </div>
                            <div className="text-2xl break-all">
                                {best_duo.name ? <>W/L: {best_duo.wins}-{best_duo.looses} </> : ""}
                            </div>
                            <div className="text-2xl break-all">
                                {best_duo.name ? <>WR: {best_duo.wr}% </> : ""}
                            </div>

                        </div>
                        <div className="bg-black p-5">
                            <div className="text-2xl  break-word">
                                ARCH ENEMY
                            </div>
                            {archenemy.name && <img
                                className="intro-animation active first-icon pb-2"
                                alt="icon"
                                src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${role[archenemy.role]}.svg`} width="45" />}

                            <div className="text-4xl break-all">
                                {archenemy.name ? archenemy.name : "no data"}
                            </div>
                            <div className="text-2xl break-all">
                                {archenemy.name ? <>W/L: {archenemy.looses}-{archenemy.wins} </> : ""}
                            </div>
                            <div className="text-2xl break-all">
                                {archenemy.name ? <>LR: {archenemy.wr}% </> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container text-center pt-[1vw]">
                <a className="text-white font-light cursor-pointer text-2xl " href="https://twitter.com/AureliusEsport">
                    MATCH HISTORY
                </a>
            </section>
            <section className="container px-4 md:px-0">

                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 mt-4">
                    {!games.length && (
                        <div className="text-white text-6xl pt-6 text-center">
                            {isLoading ? "LOADING..." : "NO LIVE GAMES : ("}

                        </div>
                    )}
                    {[...games].map(([id, game]) => {

                        const redside = game.filter(player => player.side === "RED")
                        const blueside = game.filter(player => player.side === "BLUE")

                        return (

                            <div className="bg-black p-6 text-white text-center">
                                <h1 className="text-3xl">
                                    JUEGO #{id}
                                </h1>
                                <h1 className="text-3xl">
                                    {game[0].winner === "BLUE" ? <span className="highlight">1</span> : <span>0</span>}
                                    {" "}-{" "}
                                    {game[0].winner === "RED" ? <span className="highlight">1</span> : <span>0</span>}
                                </h1>
                                <div className="pt-4">
                                    <div className="grid grid-cols-3 text-xl gap-0">
                                        <Versus
                                            currentPlayer={uid}
                                            blueside={blueside}
                                            redside={redside}
                                            role="TOP"
                                            icon="top"
                                        />
                                        <Versus
                                            currentPlayer={uid}
                                            blueside={blueside}
                                            redside={redside}
                                            role="JGL"
                                            icon="jungle"
                                        />
                                        <Versus
                                            currentPlayer={uid}
                                            blueside={blueside}
                                            redside={redside}
                                            role="MID"
                                            icon="middle"
                                        />
                                        <Versus
                                            currentPlayer={uid}
                                            blueside={blueside}
                                            redside={redside}
                                            role="BOT"
                                            icon="bottom"
                                        />
                                        <Versus
                                            currentPlayer={uid}
                                            blueside={blueside}
                                            redside={redside}
                                            role="SUP"
                                            icon="utility"
                                        />


                                    </div>
                                </div>


                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    )
}


const Versus = ({ role, icon, redside, blueside, currentPlayer }) => {

    const blueside_player = blueside.find(s => s.role === role)
    const redside_player = redside.find(s => s.role === role)

    return (
        <>
            <div className="text-right box">
                <PlayerRow currentPlayer={blueside_player.player_id === currentPlayer} player={blueside_player} side="blue" />
            </div>
            <div className="grid justify-items-center w-full">
                <img
                    className="intro-animation active"
                    alt="icon"
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${icon}.svg`} width="30" />
            </div>
            <div className="text-left box">
                <PlayerRow currentPlayer={redside_player.player_id === currentPlayer} player={redside_player} side="red" />
            </div>
        </>
    )
}


const PlayerRow = ({ player, side, currentPlayer }) => {



    const [online] = useState(false)


    return (
        <span>
            {online && side === "blue" &&
                <a href={online} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                    <i className="fa-brands fa-twitch fa-xs"></i>
                </a>}
            {currentPlayer ? <span className="highlight">{player.name}</span> : player.name} {online && side === "red" &&
                <a href={online} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                    <i className="fa-brands fa-twitch fa-xs"></i>
                </a>}
        </span>
    )
}
export default Dashboard