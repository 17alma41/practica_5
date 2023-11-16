function randomEmoji(){
    const emojis = ["🐱", "​😴​", "​🦔​", "​☃️​", "​☠️​"]
    //Generar un número aleatorio entre 0 y la longitud del array de emojis

    const randomNumber = Math.floor(Math.random() * emojis.length); // 0-longitud del array
    const emoji_aleatorio = emojis[randomNumber];
    document.querySelector("#emoji").innerHTML = emoji_aleatorio;
}