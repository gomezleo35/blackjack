export const resultadoApostar= (cartaPropia, cartaCrupier) => {
    let resultado;
    let pedir = 'Pedir otra carta';
    let doblar = 'Doblar';
    let plantarse = 'Plantarse'
    let separar = 'Separar'
    
    var todos = [ 2 ,7 , 8, 9 ,10 , 11]
    var dosTres = [2,3]
    var dosCuatro = [2,3,4]
    var dosSeis = [2, 3, 4, 5, 6]
    var dosSiete = [2, 3, 4, 5, 6,7]
    var dosNueve = [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
    
    var diezOnce = [10,11]
    var treceDieciseis = [13, 14, 15 ,16]
   
    var sieteOcho = [7,8]
    
    var dosDosTresTres  = [25 , 26]
    var cuatroSeies = [4,5,6]
    var cuatroSiete = [4,5,6,7]
    var nueveA = [9,10,11]
    var sieteA = [7,8,9,10,11]
    var diezA = [10,11]
    var cincoSeies = [5,6]
    var tresSeis = [3,4,5,6]
    var sinSiete = [2,3,4,5,6,8,9]
    var sinDiez = [2,3,4,5,6,7,8,9,11]
    var ochoA = [8,9,10,11]
    var sieteDiezA = [7,10,11]
    
    var aDosATres = [18,19]
    var aCuatroACinco = [20,21]
    if ((cartaPropia === 8)) {
        resultado = pedir;
        return resultado;
    }
    if (cartaPropia === 9) {
    
        if (todos.indexOf(cartaCrupier) > -1) {
            resultado = pedir;
        return resultado;
        } else {
            resultado = doblar;
            return resultado;
        }
        
    }
    if ((cartaPropia === 10) && (dosNueve.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((cartaPropia === 10) && (diezOnce.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 11) && (dosNueve.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((cartaPropia === 11) && (diezOnce.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 12) && (dosTres.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 12) && (cuatroSeies.indexOf(cartaCrupier) > -1)) {
        resultado = plantarse;
        return resultado;
    }
    if ((cartaPropia === 12) && (sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((treceDieciseis.indexOf(cartaPropia) > -1) && (dosSeis.indexOf(cartaCrupier) > -1)) {
        resultado = plantarse;
        return resultado;
    }
    if ((treceDieciseis.indexOf(cartaPropia) > -1) && (sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if (cartaPropia === 17) {
        resultado = plantarse;
        return resultado;
    }
    if((aDosATres.indexOf(cartaPropia) > -1) && (dosCuatro.indexOf(cartaCrupier) > -1 )) {
        resultado = pedir;
        return resultado;
    }
    if ((aDosATres.indexOf(cartaPropia) > -1) && (cincoSeies.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((aDosATres.indexOf(cartaPropia) > -1) && (sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((aCuatroACinco.indexOf(cartaPropia) > -1) && (dosTres.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((aCuatroACinco.indexOf(cartaPropia) > -1) && ( cuatroSeies.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((aCuatroACinco.indexOf(cartaPropia) > -1) && ( sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 22) && ( cartaCrupier === 2)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 22) && (tresSeis.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((cartaPropia === 22) && (sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if((cartaPropia === 23) && ( cartaCrupier === 2)){
        resultado = plantarse;
        return resultado;
    }
    if ((cartaPropia === 23) && ( tresSeis.indexOf(cartaCrupier) > -1)) {
        resultado = doblar
        return resultado;
    }
    if ((cartaPropia === 23) && (sieteOcho.indexOf(cartaCrupier) > -1)) {
        resultado = plantarse;
        return resultado;
    }
    if ((cartaPropia === 23) && ( nueveA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir
        return resultado;
    }
    if ((cartaPropia === 24)) {
        resultado = plantarse;
        return resultado;
    }
    if ((dosDosTresTres.indexOf(cartaPropia) > -1) && ( dosTres.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((dosDosTresTres.indexOf(cartaPropia) > -1)  && (cuatroSiete.indexOf(cartaCrupier) > -1)) {
        resultado = separar;
        return resultado;
    }
    if ((dosDosTresTres.indexOf(cartaPropia) > -1)  && (ochoA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 27)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 28) && ( dosNueve.indexOf(cartaCrupier) > -1)) {
        resultado = doblar;
        return resultado;
    }
    if ((cartaPropia === 28) && (diezA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 34) && ( cartaCrupier === 2)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 34) && ( tresSeis.indexOf(cartaCrupier) >-1)) {
        resultado = separar;
        return resultado;
    }
    if ((cartaPropia === 34) && (sieteA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 29) && ( dosSiete.indexOf(cartaCrupier) > -1)) {
        resultado = separar;
        return resultado;
    }
    if ((cartaPropia === 29) && (ochoA.indexOf(cartaCrupier) > -1)) {
        resultado = pedir;
        return resultado;
    }
    if ((cartaPropia === 30) && ( sinDiez.indexOf(cartaCrupier) > -1)) {
        resultado = separar;
        return resultado;
    }
    if ((cartaPropia === 30) && ( cartaCrupier === 10)) {
        resultado = pedir;
        return resultado;
    }
    
    if ((cartaPropia === 31) && (sinSiete.indexOf(cartaCrupier) > -1)) {
        resultado = separar;
        return resultado;
    }
    if ((cartaPropia === 31) && ( sieteDiezA.indexOf(cartaCrupier) > -1)) {
        resultado = plantarse;
        return resultado;
    }
    if ((cartaPropia === 32)) {
        resultado = plantarse;
        return resultado;
    }
    if ((cartaPropia === 33)) {
        resultado = separar;
        return resultado;
    }
    
    
}