function init(){

    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    let preferinta = localStorage.getItem('preferinta') || "niciuna";
    console.log(preferinta);
    let kcal_total = parseInt(localStorage.getItem('kcal_total'))||
                    Math.floor(Math.random()*1400+1600);
    console.log(kcal_total);
    // const tabel_proteine_nume = [...document.querySelectorAll
    //     ('#surse_proteine tr td:nth-of-type(1)')];
    // const tabel_proteine_nume = [...document.querySelectorAll
    //     ('#surse_proteine tr td:nth-of-type(1)')];
    // console.log(tabel_proteine_nume[0].textContent);

    // const tabel_proteine_grame = [...document.querySelectorAll
    //     ('#surse_proteine tr td:nth-of-type(2)')];
    // console.log(tabel_proteine_grame[0].textContent);

    // const tabel_proteine_kcal = [...document.querySelectorAll
    //     ('#surse_proteine tr td:nth-of-type(3)')];
    // console.log(tabel_proteine_kcal[0].textContent);  
    
    // const tabel_carbohidrati_nume = [...document.querySelectorAll
    //     ('#surse_carbohidrati tr td:nth-of-type(1)')];

    // const tabel_carbohidrati_grame = [...document.querySelectorAll
    //     ('#surse_carbohidrati tr td:nth-of-type(2)')];

    // const tabel_carbohidrati_kcal = [...document.querySelectorAll
    //     ('#surse_carbohidrati tr td:nth-of-type(3)')]; 
    
    // const tabel_lipide_nume = [...document.querySelectorAll
    //     ('#surse_lipide tr td:nth-of-type(1)')];

    // const tabel_lipide_grame = [...document.querySelectorAll
    //     ('#surse_lipide tr td:nth-of-type(2)')];

    // const tabel_lipide_kcal = [...document.querySelectorAll
    //     ('#surse_lipide tr td:nth-of-type(3)')];
    //     console.log(tabel_proteine_nume.length);
    // // let proteine = new Object();    
    // for (let i = 0 ; i < tabel_proteine_nume.length; i++){
    //     // let arr1 =
    //     //  [tabel_proteine_nume[i].textContent,
    //     //   tabel_proteine_grame[i].textContent,
    //     //   tabel_proteine_kcal[i].textContent  
    //     // ]
    //     // let array=[];
    //     // array.push(arr1);
    //     // const proteina = {
    //     //     nume_prot : tabel_proteine_nume[i].textContent,
    //     //     grame_prot: parseInt(tabel_proteine_grame[i].textContent),
    //     //     kcal_total: parseInt(tabel_proteine_kcal[i].textContent) 
    //     // }
    //     // proteine.assign(proteine, proteina);
    //     }
        
    // console.log(localStorage.getItem('preferinta'));
    // console.log(array);
                    

}

function handleSubmit(event){
    event.preventDefault();
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    const div = document.getElementById('result');
    div.textContent = `${input1} ${input2}`;
    localStorage.setItem('preferinta', input1);
    localStorage.setItem('kcal_total', input2);
    // setTimeout(deleteResult(),30000);
    setTimeout(()=>{
        let p = document.createElement('p');
        p.innerHTML = "Vrei sa stergi acest rezultat?";
        div.appendChild(p);
        let divv = document.createElement('div');
        let checkbox1 = document.createElement('input');
        checkbox1.setAttribute('type', 'checkbox');
        checkbox1.id = 'c1';
        let label1  = document.createElement('label');
        label1.htmlFor =  "c1" ;
        label1.innerHTML = "Yes";
        let divvv = document.createElement('div');
        let checkbox2 = document.createElement('input');
        checkbox2.setAttribute('type', 'checkbox');
        checkbox2.id = 'c1';
        let label2  = document.createElement('label');
        label2.htmlFor =  "c2" ;
        label2.innerHTML = "No";
        divv.appendChild(checkbox1);
        divv.appendChild(label1);
        divvv.appendChild(checkbox2);
        divvv.appendChild(label2);
        div.appendChild(divv);
        div.appendChild(divvv);
        setTimeout(()=>{
            if(checkbox1.checked === true || checkbox2.checked === true)
           { 
            label1.innerHTML = "Da";
            label2.innerHTML = "Nu";
        }else
        {
            setTimeout(()=>{
            let p2 = document.createElement('p');
            p2.innerHTML = "Rezultatul implicit este ca o sa se stearga, asadar trebuie sa iei o decizie!";
            div.appendChild(p2);
        },15000);
                        } // de la else
        },10000);
        setTimeout(()=>{
        if (checkbox2.checked === true){
            div.textContent = `${input1} ${input2}`;
            div.style.color = 'gold';
            div.style.fontSize = 30 + 'px';
            div.style.fontWeight= 'bold';
        }else{
            setTimeout(()=>{    
                div.textContent = " ";
                }, 30000);
                            } // de la else

        },29999);
    if(checkbox1.checked === false || checkbox2.checked === false){
        setTimeout(()=>{    
        div.textContent = " ";
        }, 30000)
    }
    }, 5000);


}


// function deleteResult(){
//     const div = document.getElementById('result');
//     div.textContent = " ";
// }

window.onload =  init;