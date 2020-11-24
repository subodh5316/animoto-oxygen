// Ahmad
function learn_div(){
    var parent = document.getElementById('parent')

    var div =document.createElement('div')
    div.setAttribute('class','learn_div')
    parent.appendChild(div)
    var p = document.createElement('p')
    div.appendChild(p)
    p.textContent='asdaf'

    var arr = ['Promo Video','Holiday video','Business','E-commerce','Slideshow video','Birthday video','real estate','education','social media','Graduation','photography','non-profit']
    for(var i=0; i<12;i++){
        var pv = document.createElement('div')
        
        pv.textContent =arr[i]
        pv.setAttribute('id','p'+(i+1))
        pv.style.color ='rgb(88, 110, 168)'
        pv.style.fontSize ='20px'
        pv.style.fontFamily ='arial,helvetica,sans-serif'
        pv.style.lineHeight = '30px'
        
        div.appendChild(pv)
    }

    
}

function learn_out(){
    
    var parent = document.getElementById('parent')
    var div =document.getElementsByClassName('learn_div')

    for(var i=0;i<div.length;i++)
    {
        parent.removeChild(div[i])
    }

}

function on_create(){
    var parent = document.getElementById('parent')

    var div =document.createElement('div')
    div.setAttribute('class','learn_div')
    parent.appendChild(div)
    var p1 = document.createElement('p')
    div.appendChild(p1)
    p1.textContent='asdaf'
    p1.style.float='left'
    var p2 =document.createElement('p')
    p2.textContent =' aoplkj'
    div.appendChild(p2) 
    
    var p3 =document.createElement('p')
    div.appendChild(p3)
    p3.textContent ='tttttt'
    p3.style.float='left'
    //p2.style.float ='left'
    

var arr = ['Promo Video','Holiday video','Business','E-commerce','Slideshow video','Birthday video','real estate','education','social media','Graduation','photography','non-profit']
    for(var i=0; i<12;i++){
        var pv = document.createElement('div')
        
        pv.textContent =arr[i]
        pv.setAttribute('id','p'+(i+1))
        pv.style.color ='rgb(88, 110, 168)'
        pv.style.fontSize ='20px'
        pv.style.fontFamily ='arial,helvetica,sans-serif'
        pv.style.lineHeight = '30px'
        
        div.appendChild(pv)
    }

}

function out_create(){
    
    var parent = document.getElementById('parent')
    var div =document.getElementsByClassName('learn_div')

    for(var i=0;i<div.length;i++)
    {
        parent.removeChild(div[i])
    }

}
// subodh_dev
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

