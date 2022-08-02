import React, { useState } from "react"
import useTimeout from "../../tools/useTimeout"
import { useParams } from 'react-router-dom';

const Products = () => {

    const [isLoading, setLoading] = useState(true)
    const params = useParams();

    console.log(params); // 👉️ {userId: '4200'}
    useTimeout(() => {
        setLoading(false);
    }, 2500);


    return (
        <>
            <div className="pt-6 px-2 md:px-[13rem]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <div className="col-start-1 col-end-1 flex h-100">
                        <div className="m-auto">
                            <h1 className="text-gray-400 font-semibold text-sm md:text-3xl text-right ">
                                LYCASTE SKINNERI BOMBEER JACKET
                            </h1>
                            <h6 className="text-gray-400 font-light text-sm md:text-xl text-right ">
                                $250
                            </h6>
                        </div>
                    </div>
                    <div className="col-start-2 col-span-3 ">
                        {isLoading ?
                            <div className="animate-pulse text-center py-16">
                                <i className="fa-solid fa-shirt fa-10x"></i>
                            </div> :
                            <>
                                <img className="absolute w-[32rem] md:w-[54rem] z-0 cursor-pointer top-0 " src={`/images/background.jpg`} />
                                <img className="m-auto w-[32rem] md:w-[42rem] z-40 cursor-pointer transition-all duration-500 transform hover:scale-105 drop-shadow-lg" src={`/images/lycaste/${params.id}.png`} />
                            </>
                        }
                    </div>
                    <div className="col-end-6 col-span-1 flex h-100">
                        <div className="m-auto text-gray-400 text-sm ">
                            <div className="py-2">

                                <b className="pt-2">
                                    DESCRIPCIÓN
                                </b>
                                <div className=" font-light text-xs">
                                    BOMBER JACKET DISEÑO DE PATRÓN DE LA COLECCIÓN
                                    LYCASTE SKINNERY CON BOLSILLOS EN LA PARTE
                                    DELANTERA
                                </div>
                            </div>

                            <div className="py-2">
                                <b>
                                    DETALLES
                                </b>
                                <div className=" font-light text-xs">
                                    - 100% POLYAMIDE
                                    - FORRO INTERIOR DRYFIT
                                    - CUELLO, PUÑOS Y CINTURA ACANALADOS
                                    - STYLE ID 2021SDJ1000
                                    - HECHO EN GUATEMALA
                                </div>
                            </div>
                            <div className="py-2">
                                <b>COLOR </b><span>NEGRO</span>
                            </div>
                            <div className="py-2">
                                <b>TALLAS </b>
                                <div className="flex pt-1 gap-1">
                                    <button type="button" className="border border-gray-600 py-2 px-6" >
                                        XS
                                    </button>
                                    <button type="button" className="border border-gray-600 py-2 px-6" >
                                        S
                                    </button>
                                    <button type="button" className="border border-gray-600 py-2 px-6" >
                                        M
                                    </button>
                                    <button type="button" className="border border-gray-600 py-2 px-6" >
                                        L
                                    </button>
                                    <button type="button" className="border border-gray-600 py-2 px-6" >
                                        XL
                                    </button>
                                </div>
                                <button type="button" className=" bg-black mt-2 py-2 px-6 font-semibold text-white w-full" >
                                    RESERVAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products