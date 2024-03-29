import React, { useEffect, useState } from "react"
import axios from "axios"

const Dashboard = () => {


    const [games, setGames] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {

        (async () => {
            try {
                const { data: ranking } = await axios.post("https://us-central1-conquerorsqueue.cloudfunctions.net/api/match-history")
                setGames(Object.entries(ranking.payload).reverse())
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
                           MATCH HISTORY
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
                    {[...games].map(([id, game]) => {

                        const redside = game.filter(player => player.side === "RED")
                        const blueside = game.filter(player => player.side === "BLUE")

                        return (

                            <div className="bg-black p-6 text-white text-center">
                                <h1 className="text-3xl">
                                    JUEGO #{id}
                                </h1>
                                <h1 className="text-3xl">
                                    {game[0].winner === "BLUE" ? <span className="highlight">1</span>:  <span>0</span>}
                                    {" "}-{" "}
                                    {game[0].winner === "RED" ? <span className="highlight">1</span>:  <span>0</span>}
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
                <PlayerRow player={blueside.find(s => s.role === role)} side="blue"/>
            </div>
            <div className="grid justify-items-center w-full">
                <img
                    className="intro-animation active"
                    alt="icon"
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/svg/position-${icon}.svg`} width="30" />
            </div>
            <div className="text-left box">
                <PlayerRow player={redside.find(s => s.role === role)} side="red"/>
            </div>
        </>
    )
}


const PlayerRow = ({ player, side }) => {




    return (
        <span>
        
            {player.name} 
        </span>
    )
}
export default Dashboard