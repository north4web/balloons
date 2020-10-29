function getImage(event) {
    // event.preventDefault();

    let img = document.createElement("img");
//all lines below in one line 
    img.setAttribute("src", "images/img" + (Math.round((Math.random()) * 2)) + ".png");
    
//long way: 
    // let imageFile1 = "images/img0.png";
    // let imageFile2 = "images/img1.png";
    // let imageFile3 = "images/img2.png";
       

    // let randomNumber = Math.floor((Math.random()) * 10);

    // let imageFile; 

    // if (randomNumber < 4) { 
    //     imageFile = imageFile1;
    // }
    // else if (randomNumber < 7) {
    //     imageFile = imageFile2;
    // }
    // else {
    //     imageFile = imageFile3;
    // }

        // // img.setAttribute("src", "images/purple.jpg");
        //      img.setAttribute("src", imageFile);
        //      img.setAttribute("width", "150");
        //      img.setAttribute("height", "200");

    let box = document.getElementById("box");

    box.appendChild(img);
}

function removeImage(event) {
    // let box = document.getElementById("box");
    box.removeChild(box.childNodes[0]);
}

function removeAll(event) {
    event.preventDefault()
    let box = document.getElementById("box");
    box.innerHTML="";

}