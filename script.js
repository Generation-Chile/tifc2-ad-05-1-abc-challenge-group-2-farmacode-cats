
function colorAleatorio() {
    const colors = ["green", "blue", "red"];
    const h5Elementos = document.querySelectorAll("h5");

    h5Elementos.forEach(h5 => { 
        h5.addEventListener("click", () => {
            const indiceAlea = Math.floor(Math.random() * colors.length);
            h5.style.color = colors[indiceAlea];
        });
    });
}

colorAleatorio();