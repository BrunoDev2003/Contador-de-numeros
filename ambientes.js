function contar() {
    let Ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resultado = document.getElementById('resultado');

    if (Ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO FALTAM DADOS');
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(Ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        for(let c = i; c<= f; c+= p) {
            resultado.innerHTML += `${c} \u{1F449}`
        }
    }
}