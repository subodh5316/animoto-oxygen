//var pointer_on_create=document.getElementsByClassName('create')





pointer_on_create.addEventListener('mouseover',create_div)





function learn_div(){
    var parent = document.getElementById('parent')

    var div =document.createElement('div')
    div.setAttribute('class','learn_div')
    parent.appendChild(div)


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
