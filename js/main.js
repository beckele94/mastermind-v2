let chiffreAlea = [];
let answer = [];
let win = [];
let cptWin;
let cptTour = 0;

for (let i = 0; i < 4; i++) {
    chiffreAlea.push(parseInt(Math.random() * 9));
    console.log(chiffreAlea[i]);
}

const valid  = () => {
    win = [0,0,0,0];
    cptWin = 0;
    cptTour++;
    let strSelection = ".answer";

    if(cptTour <= 8){
        for(let i = 0; i<4; i++)
        {
            answer[i] = document.querySelector(strSelection.concat("",i+1)).value;
            for(let j = 0; j<4; j++){
                if(answer[i] == chiffreAlea[j]){
                    if(i == j)
                    {
                        win[i] = 1
                        cptWin++;
                    }
                }
            }
            if(win[i] != 1){
                for(let j =0; j<4; j++){
                    if(answer[i] == chiffreAlea[j]){
                        win[i] = '.';
                    }
                }       
            }
        }
    
        let indic = document.createElement('div');
        indic.innerHTML = "Tour : " + cptTour + "<br>" + answer[0] + " - " + answer[1] + " - " + answer[2] + " - " + answer[3] + "<br>" + win[0] + " - " + win[1] + " - " + win[2] + " - " + win[3] + "<br><br>";
        document.getElementById('indications').appendChild(indic);    
    }

    if(cptWin == 4){
        document.getElementById('resultat').innerHTML = "VICTOIRE !";
    }

    if(cptTour >= 8){
        document.getElementById('resultat').innerHTML = "DEFAITE !";
    }
}