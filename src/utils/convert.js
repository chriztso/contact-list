const convertToUSD = (currency, value) => {
    if(currency === "aud"){
        return Math.round(0.73 * value);
    } else if(currency === "eur"){
        return Math.round(1.18 * value)
    } 
}

export default convertToUSD