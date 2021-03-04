import React from "react";
import { stockData } from "./Data";

export const Stocks = () => {
    return (
        <>
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return (
                        <div key={key}>
                            {data.iconKey +
                            " , " +
                            data.header +
                            " ," +
                            data.posts.header +
                            ", " +
                            data.header}
                        </div>
                    );
                })}
            </div>
        </>
    );
};