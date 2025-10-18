// let son2 =4.5
// console.log(Math.round(son2)); //5
// let son1=4.4
// console.log(Math.round(son1)); //4


// let son3=4.9
// console.log(Math.ceil(son3));//5
// let son4=4.2
// console.log(Math.ceil(son4));//5

// let son5 =4.7
// console.log(Math.floor(son5));//4
// let son6 =4.2
// console.log(Math.floor(son6));//4



// console.log(Math.max(0,150,30,20,-8,-200));
// console.log(Math.min(0,150,30,20,-8,-200));


// console.log(Math.floor(Math.random()*5));



// let i =document.querySelector('.i')
// i.onchange =function(){
//    let info =i.value
//    let natija2 = 2025-info
//     console.log(natija2);
    
// }


// let body =document.querySelector('body')
// let i =document.querySelector(".i")
// i.onchange =function(){
//     let info=i.value
//     if (info == "qizil") {
//          body.style.backgroundColor= "red"
  
//     } else if (info == "kok") {
//          body.style.backgroundColor= "blue"
  
//     } else {
//           body.style.backgroundColor= "white"
//     }
// }



let i =document.querySelector(".i")
let s1=document.querySelector(".s1")
s1.onclick =function () {
    i.setAttribute('type','text')
}
let s2=document.querySelector(".s2")
s2.onclick =function () {
    i.setAttribute('type','password')
}


let t1 =document.querySelector(".t1")
let t2 =document.querySelector(".t2")
let t3 =document.querySelector(".t3")
let t4 =document.querySelector(".t4")
let t5 =document.querySelector(".t5")
let t6 =document.querySelector(".t6")
let t7 =document.querySelector(".t7")
let bt =document.querySelector(".bt")

bt.onclick =function () {
    let res = document.querySelector(".res")
    res.style.width ="400px"
    res.style.height ="350px"
    res.style.position = "absolute";         
    res.style.top = "50px";                 
    res.style.left = "50px"; 
    res.style.borderRadius = "10px"; 
    
    

    res.style.margin = "20px auto";
    res.style.padding = "20px";
    res.style.fontFamily = "monospace";
    res.innerHTML =`
    <br>
    <br>
    Kiritilgan malumotla haqida ✅ <br>
    Ism :${t1.value}  <br>
    Familya :${t2.value} <br>
    Email :${t3.value} <br>
    Tel raqami :${t4.value} <br>
    Kun soat:${t5.value} <br>
    Ayni soat:${t6.value} <br>
    Kod:${t7.value} <br>
    <a href="index2.html" class="btn btn-success tqlash">Tastiqlash</a>

    `
}




