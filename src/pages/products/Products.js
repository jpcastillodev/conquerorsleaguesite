import React, { useState } from "react"
import useTimeout from "../../tools/useTimeout"
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true)

    useTimeout(() => {
        setLoading(false);
    }, 2500);


    return (
        <>
            <div className="pt-6 px-2 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center ">

                    {[...Array(6)].map((_, index) => {
                        const image = index + 1
                        const isOdd = index % 2 === 0
                        return (
                            <div key={image} onClick={() => navigate(`/product/${image}`)}>
                                {isLoading ?
                                    <div className="animate-pulse text-center py-16">
                                        <i className="fa-solid fa-shirt fa-10x"></i>
                                    </div> :
                                    <img className="m-auto w-[32rem] md:w-[24rem] z-40 cursor-pointer transition-all duration-500 transform hover:scale-125 drop-shadow-xl" src={`/images/lycaste/${image}.png`} />}

                                {isOdd ?
                                    <h6 className="text-gray-300 text-center font-semibold text-sm md:text-base cursor-pointer">
                                        PROXIMAMENTE
                                    </h6>
                                    : <h6 className="text-gray-500 text-center font-semibold text-sm md:text-base">
                                        YA DISPONIBLE
                                    </h6>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products