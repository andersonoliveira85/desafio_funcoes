// Desafio Funções Potência Tech / DIO

var vitorias = 50;
var derrotas = 5;

function ranqueada(v, d){

    saldo = v - d;

    if (saldo < 10){
    msg="Ferro";
    } else if ( saldo < 20){
        msg="Bronze"
    }else if ( saldo < 50){
        msg="Prata"
    }else if ( saldo < 80){
        msg="Ouro"
    }else if ( saldo < 90){
        msg="Diamante"
    }else if ( saldo < 100){
        msg="Lendário"
    }else {
        msg="Imortal"
    }
    return msg;
    
}   


console.log(ranqueada(vitorias, derrotas));