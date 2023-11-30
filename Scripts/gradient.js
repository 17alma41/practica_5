function newGradient(){
    const R0 = document.querySelector("#R0input").value
    const G0 = document.querySelector("#G0input").value
    const B0 = document.querySelector("#B0input").value
    const R1 = document.querySelector("#R1input").value
    const G1 = document.querySelector("#G1input").value
    const B1 = document.querySelector("#B1input").value
    const deg = document.querySelector("#Deg-input").value
    
    // console.log(R0, G0, B0, R1, B1, G1)
    const seccion = document.querySelector("#gradient")
    // console.log(seccion)
    seccion.style.background = `linear-gradient(${deg}deg, rgb(${R0}, ${G0}, ${B0}), rgb(${R1}, ${G1}, ${B1}))`
}