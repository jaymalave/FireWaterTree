import React from "react"

const OptionImage = ({element}) => {
    return (
        <>
    <img src={`/assets/${element}.png`} className="el-img"/>
        </>
    )
}

export default OptionImage;