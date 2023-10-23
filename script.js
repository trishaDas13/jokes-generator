let joke = document.querySelector('p');
let btn = document.querySelectorAll('button');
let body = document.body;

let opt = {
    headers: { 'X-Api-Key': 'CRUeJoIOF7fEoktRpm6JK6VUxoXT7gRrsO7snMRL'},
    method: 'GET',
}
//todo ---------- To generate the Jokes ----------
btn[0].addEventListener('click',  () => {
    joke.innerText = "😂";
    setTimeout(async function() {
        let data = await fetch('https://api.api-ninjas.com/v1/dadjokes', opt);
        let res = await data.json();
        joke.innerText = res[0].joke;
    }, 500);
});

//todo ---------- To share the jokes on whats app ----------
btn[1].addEventListener("click", () => {
    window.open (`whatsapp://send?text= ${joke.innerText}`);
});

//todo ---------- To toggle between dark mode and light mode ----------
btn[2].addEventListener("click", () => {
    body.classList.toggle("dark");
});
