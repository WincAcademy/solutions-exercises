//script.js
const doSomethingWithData = async function () {
    const data = await getData();
    console.log("here is your data to do something:", data);
};

doSomethingWithData();

// api-client.js
const API_KEY = "jouw api key";

const getData = async function () {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};