console.log("hej")

const image = document.querySelector("img");

    image.addEventListener("click", function(){
        const source = image.getAttribute("src");

        if (source === "./sun.jpg"){
           image.setAttribute("src", "./moon.jpg");
        }else{
           
           image.setAttribute("src", "./sun.jpg");

        }
    })

