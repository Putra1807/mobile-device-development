function BMI (berat, tinggi){
    return berat / (tinggi * tinggi);
}
function KBMI(bmi){
    if(bmi < 18.5){
        return "DiBawah Normal";
    }else if (bmi >= 18.5 && bmi < 25){
        return "Normall"
    }else if(bmi >= 25 && bmi < 30){
        return " Diatas Normal"
    }else{
        return "obesitas"
    }
}

module.exports ={BMI, KBMI};

