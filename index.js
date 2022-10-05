let segundos = 0
let minutos = 0
let horas = 0
let intervalo

function start () {
    contador() // Chamo a função contador para não esperar 1s no início
    intervalo = setInterval(contador, 100) // Chama a função contador a cada 1s
}

function pause () {
    clearInterval(intervalo)
}

function stop () {
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    document.getElementById('cronometro').innerHTML = '00:00:00'
}

function doisDigitos (digito) {
    if (digito < 10) {
        return('0' + digito)
    } else {
        return(digito)
    }
}

function contador() {
    segundos++
    if (segundos == 60) {
        segundos = 0
        minutos++
        if (minutos == 60) {            
            minutos = 0
            horas++    
        }
    }
    document.getElementById('cronometro').innerHTML = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos)
}


