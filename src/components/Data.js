import React, { useEffect } from 'react'
import c3 from "c3";

export const Data = () => {

    useEffect(() => {
        c3.generate({
            bindto: "#chart",
            data: {
              columns: [
                ["data1", 30, 200, 100, 400, 150, 250, 500,500,500],
              ],
              type: "line",
            },
          });
    }, [])

    return (
        <div id="chart" />
    )
}
