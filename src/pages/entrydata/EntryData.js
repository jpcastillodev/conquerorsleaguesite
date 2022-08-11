import React, { useState } from "react"
import db from '../../tools/firebase.config';
import { collection, addDoc } from "firebase/firestore"

const champs = ["Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "Draven", "DrMundo", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "MonkeyKing", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renata", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]

const Admin = () => {



    return (
        <>

            <InputData />

        </>
    )
}


const InputData = () => {

    const base = {
        champion: "",
        nick: "",
        kills: 0,
        deaths: 0,
        assists: 0,
        cs: 0,
        gold: 0
    }
    const [blueTeam, setBlueTeam] = useState({
        win: null,
        players: [base, base, base, base, base]
    })
    const [redTeam, setRedTeam] = useState({
        win: null,
        players: [base, base, base, base, base]
    })


    const updatePLayer = (team, index, field, value) => {

        if (team === "blue") {
            const temp = blueTeam.players
            const player = temp.find((_, idx) => idx === index)

            temp[index] = {
                ...player,
                [field]: value
            }
            setBlueTeam(prev => ({
                ...prev,
                players: temp
            }))
        }
        if (team === "red") {
            const temp = redTeam.players
            const player = temp.find((_, idx) => idx === index)

            temp[index] = {
                ...player,
                [field]: value
            }
            setRedTeam(prev => ({
                ...prev,
                players: temp
            }))
        }
    }

    async function LoadData() {


        await addDoc(collection(db, 'matches'), {
            blueTeam: blueTeam,
            redTeam: redTeam,
            created: new Date()
        })

        setBlueTeam({
            win: null,
            players: [base, base, base, base, base]
        })
        setRedTeam({
            win: null,
            players: [base, base, base, base, base]
        })
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
                        <span className="text-8xl italic font-black text-yellow-400">ENTRY DATA</span>

                    </span>

                </span>

            </div>
            <section className="container pt-[3vw] place-content-center px-4 md:px-8">
                <a className="text-white font-light cursor-pointer text-4xl " href="https://twitter.com/AureliusEsport">
                    powered by <b className="highlight ">Aurelius</b>
                </a>



                <div className="bg-black h-auto text-center font-light text-2xl">

                    <h1 className="text-6xl text-blue-500 pt-6">
                        BLUE TEAM
                    </h1>
                    <div className="text-white">
                        <input type="checkbox" checked={blueTeam.win} onClick={() => {
                            setBlueTeam(prev => ({ ...prev, win: !blueTeam.win }))
                            setRedTeam(prev => ({ ...prev, win: blueTeam.win }))

                        }} />
                        <span className="px-2">
                            Ganador
                        </span>
                    </div>
                    <hr />
                    <table className="table-auto text-white w-full mt-6">
                        <thead>
                            <tr>
                                <th>Champion</th>
                                <th>Nick</th>
                                <th>Kills</th>
                                <th>Deatch</th>
                                <th>Assists</th>
                                <th>CS</th>
                                <th>Gold</th>

                            </tr>
                        </thead>
                        <tbody>
                            {blueTeam.players.map((player, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <select
                                                className="entry-select"
                                                type="text"
                                                name="champion"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.champion} >
                                                {champs.map(champ => (
                                                    <option value={champ}>{champ}</option>

                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="nick"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.nick} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="kills"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.kills} />

                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="deaths"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.deaths} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="assists"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.assists} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="cs"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.cs} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="gold"
                                                onChange={({ target }) => updatePLayer("blue", index, target.name, target.value)}
                                                value={player.gold} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1 className="text-6xl text-red-500 pt-6">
                        RED TEAM
                    </h1>
                    <div className="text-white">
                        <input type="checkbox" checked={redTeam.win} onClick={() => {
                            setRedTeam(prev => ({ ...prev, win: !redTeam.win }))
                            setBlueTeam(prev => ({ ...prev, win: redTeam.win }))

                        }} />
                        <span className="px-2">
                            Ganador
                        </span>
                    </div>
                    <hr />
                    <table className="table-auto text-white w-full mt-6">
                        <thead>
                            <tr>
                                <th>Champion</th>
                                <th>Nick</th>
                                <th>Kills</th>
                                <th>Deatch</th>
                                <th>Assists</th>
                                <th>CS</th>
                                <th>Gold</th>

                            </tr>
                        </thead>
                        <tbody>
                            {redTeam.players.map((player, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <select
                                                className="entry-select"
                                                type="text"
                                                name="champion"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.champion} >
                                                {champs.map(champ => (
                                                    <option value={champ}>{champ}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="nick"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.nick} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="kills"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.kills} />

                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="deaths"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.deaths} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="assists"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.assists} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="cs"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.cs} />
                                        </td>
                                        <td>
                                            <input
                                                className="entry-data"
                                                type="text"
                                                name="gold"
                                                onChange={({ target }) => updatePLayer("red", index, target.name, target.value)}
                                                value={player.gold} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button className="button btn text-black my-4 bg-yellow-400 px-4 py-1" onClick={LoadData}>
                        Enviar data
                    </button>
                </div>
            </section>
        </>


    )

}



export default Admin