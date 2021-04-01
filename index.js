addEventListener("onload", fetch("products.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        appendData(data);
    }));





function appendData(data) {
    let main = document.getElementById("json");

    for (let i = 0; i < data.length; i++) {
        let p = document.createElement("p");
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = data[i].img;
        img.height = '300';
        img.width = '300';
        p.innerHTML =
            "Name: " + data[i].Name + "<br>" +
            "Price: " + data[i].Price + "<br>" +
            "Description:" + data[i].Description + "<br>" +
            "Features: " + data[i].Features + "<br>";


        div.appendChild(p);
        div.appendChild(img);
        main.appendChild(div);
    }
}