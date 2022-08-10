import React, { useEffect, useState } from "react"
import db from '../../tools/firebase.config';
import { collection, getDocs } from "firebase/firestore"


const Admin = () => {



    return (
        <>

            <InputData />

        </>
    )
}


const InputData = () => {

    const [matches, setMatchs] = useState([])

    useEffect(() => {
        (async () => {



            const query = await getDocs(collection(db, 'matches'))
            const matchs = query.docs.map(doc => doc.data())
            setMatchs(matchs)

        })()
    }, [])
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

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
                        {/* <img src="/images/icon.PNG" width="75" className="m-auto" alt="icon"/> */}
                        <span className="text-8xl italic font-black text-yellow-400">MATCH HISTORY</span>

                    </span>

                </span>

            </div>
            <section className="container pt-[3vw] place-content-center px-4 md:px-8">
                <a className="text-white font-light cursor-pointer text-4xl " href="https://twitter.com/AureliusEsport">
                    powered by <b className="highlight ">Aurelius</b>
                </a>



                {matches.map(match => {
                    console.log(capitalizeFirstLetter(match.blueTeam.players[0].champion))
                    const url = `https://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/`
                    return (


                        <div className="bg-black h-[150px] text-center cursor-pointer mt-2">
                            <div className=" text-white container-match">
                                <div className="team left">
                                    <div className="player-avatars">
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.blueTeam.players[0].champion)}.png`}
                                                alt={match.blueTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.blueTeam.players[1].champion)}.png`}
                                                alt={match.blueTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.blueTeam.players[2].champion)}.png`}
                                                alt={match.blueTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.blueTeam.players[3].champion)}.png`}
                                                alt={match.blueTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.blueTeam.players[4].champion)}.png`}
                                                alt={match.blueTeam.players[0].champion} />
                                        </div>
                                    </div>
                                    <div className="player-names text-gray-300">
                                        <span className="player-name">{match.blueTeam.players[0].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.blueTeam.players[1].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.blueTeam.players[2].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.blueTeam.players[3].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.blueTeam.players[4].nick}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 cursor-pointer text-white text-4xl pt-2 px-5">
                                    <span

                                        className={false ? "highlight" : ""} >
                                        {match.blueTeam.win ? "1" : "0"}
                                    </span>
                                    -
                                    <span
                                        className={true? "highlight" : ""}>
                                        {match.redTeam.win ? "1" : "0"}
                                    </span>
                                </div>
                                <div className="team right ">
                                <div className="player-avatars">
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.redTeam.players[0].champion)}.png`}
                                                alt={match.redTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.redTeam.players[1].champion)}.png`}
                                                alt={match.redTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.redTeam.players[2].champion)}.png`}
                                                alt={match.redTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.redTeam.players[3].champion)}.png`}
                                                alt={match.redTeam.players[0].champion} />
                                        </div>
                                        <div className="image">
                                            <img
                                                src={`${url}${capitalizeFirstLetter(match.redTeam.players[4].champion)}.png`}
                                                alt={match.redTeam.players[0].champion} />
                                        </div>
                                    </div>
                                    <div className="player-names text-gray-300">
                                        <span className="player-name">{match.redTeam.players[0].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.redTeam.players[1].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.redTeam.players[2].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.redTeam.players[3].nick}</span>
                                        <span className="divider">|</span>
                                        <span className="player-name">{match.redTeam.players[4].nick}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
            </section>
        </>


    )

}



export default Admin