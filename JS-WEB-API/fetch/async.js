const display = document.getElementById("display");

async function getData() {
    const res = await fetch("http://localhost:5500/JS-WEB-API/fetch/data.txt");
    const data = await res.text();

    display.innerText = data;
}
