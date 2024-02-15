AOS.init();
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasRestantes = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutosRestantes = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosRestantes = Math.floor(distanciaAteOEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento encerrado";
    } else {
        document.getElementById("dias").innerHTML = `${diasAteOEvento} Dias`;
        document.getElementById("horas").innerHTML = `${horasRestantes} Horas `;
        document.getElementById("minutos").innerHTML = `:${minutosRestantes}`;
        document.getElementById("segundos").innerHTML = ` : ${segundosRestantes}`;
    }
}, 1000);

//# sourceMappingURL=index.900caf0b.js.map
