add.addEventlisner('click',function(){
    one.classList.add('bg');

})

function names(){
    var text1=document.createElement("p");
    var text2=document.createTextNode("Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its ...");
    text1.appendChild(text2);
    document.getElementById('one').appendChild(text2)
    document.getElementById("butt").style.display="none";
    document.getElementById("one").style.color="white";
    var tron=document.getElementById("one");
    tron.classList.add('bg');
}

function tonic(){
   document.getElementById('box').classList.toggle('nick');
   document.getElementById('show').style.display="block";
}

function show(){
   document.getElementById('two').classList.toggle('three');
   document.getElementById('two').style.display="block";
}

function capt(){
   var alpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
     'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
     0,1,2,3,4,5,6,7,8,9];
    var i;
    for (i=0;i<4;i++){
        var a=alpha[Math.floor(Math.random() * alpha.length)];
        var b=alpha[Math.floor(Math.random() * alpha.length)];
        var c=alpha[Math.floor(Math.random() * alpha.length)];
        var d=alpha[Math.floor(Math.random() * alpha.length)];
        var e=alpha[Math.floor(Math.random() * alpha.length)];

    }

    var code =a+' '+b+' '+c+' '+d+' '+e;
    document.getElementById('captcha').value=code;
}


