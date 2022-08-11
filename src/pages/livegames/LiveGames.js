import React, { useEffect, useState } from "react"
import axios from "axios"
import { doc, getDoc } from "firebase/firestore"
import db from '../../tools/firebase.config';
const Dashboard = () => {


    const [games, setGames] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {

        (async () => {
            try {
                const { data: ranking } = await axios.post("https://us-central1-efektivos-qa.cloudfunctions.net/api/v1/config/live-games")
                setGames(Object.entries(ranking.payload))
                setisLoading(false)
            } catch (err) {
                console.log(err)
            }


        })()
    }, [])


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
                            LIVE GAMES
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

                <div className="grid grid-cols-1 md:grid-cols-5 ">



                </div>
            </section>


            <section className="container px-4 md:px-0">

                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
                    {!games.length && (
                        <div className="text-white text-6xl pt-6 text-center">
                            {isLoading ? "LOADING..." : "NO LIVE GAMES : ("}

                        </div>
                    )}
                    {games.map(([id, game]) => {

                        const redside = game.filter(player => player.side === "RED")
                        const blueside = game.filter(player => player.side === "BLUE")

                        return (

                            <div className="bg-black p-6 text-white text-center">
                                <h1 className="text-3xl">
                                    JUEGO #{id}
                                </h1>
                                <div className="pt-4">
                                    <div className="grid grid-cols-3 text-xl gap-0">
                                        <Versus
                                            blueside={blueside}
                                            redside={redside}
                                            role="TOP"
                                            icon="top"
                                        />
                                        <Versus
                                            blueside={blueside}
                                            redside={redside}
                                            role="JGL"
                                            icon="jungle"
                                        />
                                        <Versus
                                            blueside={blueside}
                                            redside={redside}
                                            role="MID"
                                            icon="middle"
                                        />
                                        <Versus
                                            blueside={blueside}
                                            redside={redside}
                                            role="BOT"
                                            icon="bottom"
                                        />
                                        <Versus
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


const Versus = ({ role, icon, redside, blueside }) => {

    return (
        <>
            <div className="text-right box">
                <PlayerRow player={blueside.find(s => s.role === role)} />
            </div>
            <div className="grid justify-items-center w-full">
                <img
                    className="intro-animation active"
                    alt="icon"
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${icon}.svg`} width="30" />
            </div>
            <div className="text-left box">
                <PlayerRow player={redside.find(s => s.role === role)} />
            </div>
        </>
    )
}


const PlayerRow = ({ player }) => {



    const [online, setIsOnline] = useState(false)

    useEffect(() => {
        (async () => {

            const nick = player.name.toUpperCase().replace(/\s/g, "");
            try {

                const docRef = doc(db, "player", nick)
                const docSnap = await getDoc(docRef);
                if (!docSnap.exists()) {
                    return
                }
                const profile = docSnap.data()
                if (profile.twitch) {
                    setIsOnline(profile.twitch)

                }

            } catch (err) {
                // console.log(err)
            }
        })()
    }, [player.name])

    return (
        <span>
            {player.name} {online &&
                <a href={online} target="_blank" rel="noreferrer" className="link inverted cursor-pointer px-1">
                    <i className="fa-brands fa-twitch fa-xs"></i>
                </a>}
        </span>
    )
}
export default Dashboard