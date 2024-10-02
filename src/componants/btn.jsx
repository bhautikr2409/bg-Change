import React from "react";

function Btn({ setColor }) {
    let colorArr = [
        "red",
        "yellow",
        "pink",
        "green",
        "olive",
        "blue",
        "purple",
        "black",
        "gray",
        "lavender",
    ];




    return (
        <>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
                    {colorArr.map((clr) => {
                        return (
                            <button onClick={() => setColor(clr)}
                                className={`${clr === "black" || clr === "blue" ? "text-white" : "text-black"} px-6 py-3 shadow-lg outline-none rounded-3xl font-semibold`}
                                key={clr}
                                style={{ backgroundColor: clr }}>
                                {clr}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Btn;
