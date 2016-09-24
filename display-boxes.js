




function newBox(type,content){

var box = document.createElement("div");
document.body.appendChild(box);
box.className = "display-boxes";

if(type == 'math'){
    
    box.innerHTML = content;
    
}


updatePositions();

}




function updatePositions(){
    
    var dispboxes = document.getElementsByClassName('display-boxes');
    var amount = dispboxes.length;
    
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    var sWidth = searchId.offsetWidth;
    var sHeight = searchId.offsetHeight;
    var hHeight = document.getElementById("page-header").offsetHeight;
    
    var middleX = (wWidth/2)-(sWidth/2);
    var middleY = ((((wHeight-hHeight)/2)-(sHeight/2))+hHeight);

    
    for (var i=0;i<amount;i++){
        
        var currentBox = dispboxes[i];
        var angle = (i+1)/amount*2*Math.PI;
        
        var firstX = Math.cos(angle)*sWidth+middleX;
        var firstY = Math.sin(angle)*sHeight+middleY;
        
        var secondX = Math.cos(angle)*wWidth;
        var secondY = Math.sin(angle)*(wHeight-hHeight)+hHeight;
        
        currentBox.style.top = 0-96+(firstY+secondY)/2 + 'px';
        currentBox.style.left = 0-96+(firstX+secondX)/2 + 'px';
        
    }
    
}





function deleteAll(){

var dispboxes = document.getElementsByClassName('display-boxes');

while(dispboxes[0]) {
    dispboxes[0].parentNode.removeChild(dispboxes[0]);
}

}