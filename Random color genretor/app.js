color = () => {
    const firstColor = Math.floor(Math.random() * 255);
    const secondColor = "," + Math.floor(Math.random() * 255);
    const thirdColor = "," + Math.floor(Math.random() * 255) + ")";
    const rgv = "rgb(";
    const rancolor = (rgv + firstColor + secondColor + thirdColor);
    document.getElementById("text").innerText = rancolor;
    document.body.style.backgroundColor = rancolor
};

document.getElementById("button").addEventListener("click", color);
color();
