document.addEventListener("DOMContentLoaded", function() {
    const listenerDiv = document.querySelector("#listener-closed");
    console.log(listenerDiv);
    
    listenerDiv.addEventListener("click", (e) => {
        console.log("listener clicked");
        const userFeatures = document.querySelector(".user-feat");
        if(listenerDiv.id === "listener-closed"){
            listenerDiv.id = "listener-opened";
            listenerDiv.classList.add("listener-options");
            listenerDiv.getElementsByTagName("img")[1].src = "images/dropup_arrow.png";

            let div = document.createElement("div");
            div.classList.add("listener-options");
        
            let a = document.createElement("a");
            a.href = "preferences.html";
        
            let img = document.createElement("img");
            img.src = "images/help.png";
            img.alt = "preferences";
            a.appendChild(img);
            
            let text = document.createTextNode("Preferences");
            let p = document.createElement("p");
            p.appendChild(text);
            a.appendChild(p);
            div.appendChild(a);
        
            userFeatures.appendChild(div);

            div = document.createElement("div");
            div.classList.add("listener-options");
        
            a = document.createElement("a");
            a.href = "recommended.html";
        
            img = document.createElement("img");
            img.src = "images/help.png";
            img.alt = "help";
            a.appendChild(img);
            
            text = document.createTextNode("Recommended");
            p = document.createElement("p");
            p.appendChild(text);
            a.appendChild(p);
            div.appendChild(a);
        
            userFeatures.appendChild(div);

            div = document.createElement("div");
            div.classList.add("listener-options");
        
            a = document.createElement("a");
            a.href = "likes.html";
        
            img = document.createElement("img");
            img.src = "images/help.png";
            img.alt = "help";
            a.appendChild(img);
            
            text = document.createTextNode("Likes");
            p = document.createElement("p");
            p.appendChild(text);
            a.appendChild(p);
            div.appendChild(a);
        
            userFeatures.appendChild(div);

            
        }

        else if(listenerDiv.id === "listener-opened"){
            listenerDiv.id = "listener-closed";
            listenerDiv.classList.remove("listener-options");
            listenerDiv.getElementsByTagName("img")[1].src = "images/dropdown_arrow.png";
            userFeatures.removeChild(userFeatures.lastChild);
            userFeatures.removeChild(userFeatures.lastChild);
            userFeatures.removeChild(userFeatures.lastChild);
        }
    });
});