// function init() {
//     const form = document.querySelector('form');
//     // ne referim la formular
//     form.addEventListener('submit', handleSubmit);
//     const main = document.querySelector('main');
//     // main.addEventListener('click', handleClick);
//     // manenvram submit-ul
//   }



// function handleSubmit(event){
//     event.preventDefault();
//     const preferinta = document.querySelector('[name="preferinta"]').value;
//     console.log(preferinta);
//     const Kcal_total = document.querySelector('[name="Kcal_total"]').value;
//     const p = document.createElement('p');
//     // p.textContent = `Preferinta aleasa este ${preferinta}, iar numarul total de calorii
//     // pentru dieta de o zi este ${Kcal_total} `;
//     p.textContent = "SA mearga ceva";
//     const ptAppend = document.querySelector('.content_generator');
//     document.body.append(p);
    
// }

// function handleClick(event){
//     main.style.backgroundColour="red";
// }
// onload = init;  
// function init(){
//     // let lista = document.getElementsByTagName('a');
//     // let arr = [...lista];
//     // console.log(arr[0]);
//     let val = document.getElementsByClassName('header');
//     let m = val.textContent;
//     console.log(m);
// }
// onload=init();

// function init() {
//     const button = document.getElementById('touchButton');
//     button.addEventListener ('click', handleCLick);
//     const obosit = document.getElementById('obo');
//     obosit.addEventListener ('contextmenu', handleContextMenu);
//     const listElements = document.getElementsByTagName("a");
//     // iti faci o lista de elemente cu ce gasesti in li-uri
//     const firstElement = listElements[0].textContent;
//     console.log(firstElement);
//     // p = document.createElement('p');
//     for (let i = 0 ; i<listElements.length; i++){
        
//         obosit.textContent = obosit.textContent + " , "+ listElements[i].textContent;
//         console.log(obosit); 
//     }
//     // document.body.append(p);
//   }
 

// function handleCLick(event)  {
//     // preluăm și modificăm conținutul HTML unde stocăm numărul de apăsări
//     const touchCountElement = document.getElementById('touchCount');
//     let count = parseInt(touchCountElement.innerHTML);
//     touchCountElement.innerHTML = count + 1;
//   };
// function handleContextMenu(event){
//     const obosit = document.getElementById('obo');
//     obosit.innerHTML = "MUIE TALPAN";
//     // obosit.classList= "header";
// }

//   window.onload=init; 

function init(){
    const header = document.querySelector(".header");
    header.style.color = "gold";
    header.addEventListener("click", ()=>{
        header.style.backgroundColor = "red";
        header.style.color = "blue";
    });
    // document.addEventListener("keyup", (e)=>{
        // if (Number(e.key)==NaN) return;
        // asta nu merse
        // if (parseInt(e.key)==NaN) return;
        // nici asta nu merse, desi la Tema 6.1 merge, ma gandesc ca e de la modul de generare al functiei
        // ma chinui sa fac o verificare daca tasta apasata e cifra atunci sa se intample ceva
    //     document.addEventListener("keyup", function(e){
    //     if (parseInt(e.key)==NaN) return;
    //     {header.style.color = "white";
    //     header.style.backgroundColor = "#254de4";}
    // })
    // Nici asa nu merse mai incercam
        // document.addEventListener("keyup", handleKeyup);

    const unObiect = document.querySelectorAll(".menu ul li");
    console.log(unObiect);
    console.log(unObiect[0]);
    for (let i = 0; i<unObiect.length; i++)
    {unObiect[i].id=i+1;
    console.log(unObiect[i].id);}
    document.addEventListener('keydown', handleKeydown);
    // // luam in considerare evenimentul cand tasta este apasata
    document.addEventListener('keyup', handleKeyup);
    // // si cand tasta nu mai este apasata
    document.addEventListener("keyup", increaseFontSize);
    document.addEventListener("keyup", decreaseFontSize);
    document.addEventListener("contextmenu", ()=>{
            header.style.color = "white";
            header.style.backgroundColor = "#254de4";
    });
}



// function handleKeyup(event){
//     if (parseInt(event.key) == NaN) return;

//     header.style.color = "white";
//     header.style.backgroundColor = "#254de4";
// }
// acum nu mai merge deloc


function handleKeydown(event) {
    // if (parseInt(event.key) == NaN)
    // console.log(parseInt(event.key))
    if(parseInt(event.key)>0 && parseInt(event.key)<=4)
    {
        const schimbamCuloare = document.getElementById(event.key);
        console.log(schimbamCuloare);
        schimbamCuloare.style.backgroundColor = "red";
        // const pressed = document.querySelector('pressed');
        // pressed.style.backgroundColor="red";
    }
    // daca tasta apasata nu e numar ne oprim
    //   return;
    // const box = document.getElementById(event.key);
    // // luam elementul cu id-ul egal cu tasta apasata
    // box.classList.add('pressed');
    // // il bagam in clasa 'pressed' pe care o editam in css
  
  }
  
  function handleKeyup(event) {
    if(parseInt(event.key)>0 && parseInt(event.key)<=4){
        const schimbamCuloare = document.getElementById(event.key);
        schimbamCuloare.style.backgroundColor = "#3474e6";
    }
    // console.log(parseInt(event.key))
    // if (parseInt(event.key) == NaN)
    //   return;
    // const box = document.getElementById(event.key);
    // box.classList.remove('pressed');
    // cand se ia degetul de pe tasta o eliminam din clasa pressed
  }
//   const body = document.querySelector('body .header');
//   const styles = getComputedStyle(body);
//   var headerFontSize = styles.getPropertyValue('fontSize');
// o incercare nereusita de a salva font-sizeul header-ului
// intr-o variabila pentru a il refolosi mai tarziu
  function increaseFontSize(event){
      console.log(event.keyCode);
      // keyCode iti da numarul in "pseudoAscii"
      // key <==> code iti da fix ce scrie pe tastatura
    if(event.keyCode===187){
        const body = document.querySelector('body');
        const styles = window.getComputedStyle(body);
        const generalFontSize = styles.getPropertyValue("font-size");
        let floatFontSize= parseFloat(generalFontSize);
        floatFontSize+=0.5;
        body.style.fontSize = floatFontSize + "px"; 
        // const body = document.querySelector('body .header');
        // // body.style.fontSize = parseInt(document.body.style.fontSize) + 2 + "px";
        // body.style.fontSize = 100 + "px";
        // body.style.lineheight = 1.5; 
    }
  }

  function decreaseFontSize(event){
    if(event.key== "-"){
        const body = document.querySelector('body');
        const styles = window.getComputedStyle(body);
        const generalFontSize = styles.getPropertyValue("font-size");
        let floatFontSize= parseFloat(generalFontSize);
        floatFontSize-=0.5;
        body.style.fontSize = floatFontSize + "px"; 
        // console.log(generalFontSize);
        // console.log(styles);
        // body.style.fontSize = 30 + "px";
    }
  }
// increaseFontSize() si decreaseFontSize() functioneaza atat pentru =-
// cat si pentru +_
// interesant deci nu trebuie tinut apasat shiftul ca sa functioneze



window.onload = init;