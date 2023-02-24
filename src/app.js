/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/

var radiusInput=document.querySelector("#radius");
var heightInput=document.querySelector("#height");
var areaInput=document.querySelector("#area");
var calcButton=document.querySelector("#calcButton");

calcButton.addEventListener('click',()=>{
    console.log('Terület: ')
    const radius=Number(radiusInput.value);
    const height=Number(heightInput.value);
    let area=1/3*Math.pow(radius,2)*Math.PI*height;
    areaInput.value=area
    console.log(area)
})