AOS.init();

const dataDoEvento = new Date("april 16, 2024 16:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distaciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distaciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distaciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distaciaAteOEvento %  horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distaciaAteOEvento % minutosEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    if (distaciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'evento expirado'
    }
}, 1000);