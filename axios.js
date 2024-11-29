let url = "https://official-joke-api.appspot.com/jokes/random/1";

async function getData() {
    try {
        let res = await axios.get(url); // no need to parse the data
        return `Setup: ${res.data[0].setup}\n Punchline: ${res.data[0].punchline}`;;

    } catch (error) {
        console.log(error);
        return "Sorry, something went wrong. Try again!";
    }
}

let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', async function () {
    let joke = await getData();
    p.innerText = joke;
    p.style.display = 'block';
});

