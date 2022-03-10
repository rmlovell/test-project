import fetch from "node-fetch";

const getPeople = async fetch => {
    const getResponse = await fetch('https://swapi.dev/api/people');
    const data = await getResponse.json()
    console.log(data);
    return {
        count: data.count,
        results: data.results
        
    }
} 
getPeople(fetch);

module.exports = {
    getPeople
};