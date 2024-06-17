var cell1=document.querySelector("#cell1");
var cell2=document.querySelector("#cell2");
var cell3=document.querySelector("#cell3");
var cell4=document.querySelector("#cell4");
var cell5=document.querySelector("#cell5");
var cell6=document.querySelector("#cell6");
var cell7=document.querySelector("#cell7");
var cell8=document.querySelector("#cell8");
var content=document.querySelector(".p8-bottom-up-content");

cell1.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Data Science";
    p.innerText = "Extracting insights from data to solve problems.";
})

cell2.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Generative AI";
    p.innerText = "Creating AI that can tackle various tasks.";
})

cell3.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Deep Learning";
    p.innerText = "Artificial neural networks modeled after the human brain.";
})

cell4.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Natural Language Processing";
    p.innerText = "Making computers understand human language.";
})

cell5.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Computer Vision";
    p.innerText = "Equipping computers with the ability to 'see' and interpret visual data.";
})

cell6.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Large Language Model";
    p.innerText = "AI models trained on massive amounts of text data for advanced language processing.";
})

cell7.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "MLOps";
    p.innerText = "Automating the development and deployment of machine learning models.";
})

cell8.addEventListener("click",function(){
    var div = content.querySelector("div");
    var span = div.querySelector("span");
    var p = div.querySelector("p");
    span.innerText = "Compatative Kaggle";
    p.innerText = "Online platform for data science competitions and collaboration.";
})
