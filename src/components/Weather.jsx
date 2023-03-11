import React from "react";


const weather = ({data}) => {
    return (
        <div>
            
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@4x.png`} alt="" />

            <h2 className="text">
                <span>Descripción:</span></h2>
            <h1 className="description_value">{data?.weather?.[0].description}</h1>

            <h2 className="city">
                <span className="text">ciudad:</span>
            {data?.name}</h2>

            <h2 className="temperature">
                <span className="text">temperatura:</span>
            {data?.main?.temp} </h2>


        </div>
    );
};

export default weather;