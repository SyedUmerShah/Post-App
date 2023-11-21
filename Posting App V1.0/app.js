const text = document.getElementById("text")
function color1() {
    text.setAttribute("class", "one")
}
function color2() {
    text.setAttribute("class", "two")
}
function color3() {
    text.setAttribute("class", "three")
}
function color4() {
    text.setAttribute("class", "four")
}
function color5() {
    text.setAttribute("class", "five")
}
function color6() {
    text.setAttribute("class", "six")
}

function post() {
    var posts = document.getElementsByClassName("posts")
    var createPost = document.getElementById("show-post")
    createPost.setAttribute("class", "check")
    var div1 = document.createElement("div")
    div1.setAttribute("class", "p-head")
    var h6 = document.createElement("h6")
    var img = document.createElement("img")
    img.setAttribute("class", "img")
    img.setAttribute("src", "img/man.png")
    var name = document.createTextNode("Syed Umer Shah")
    var p = document.createElement("p")
    p.setAttribute("class", "p-body")
    var pNode = document.createTextNode(text.value)
    p.appendChild(pNode)
    h6.appendChild(name)
    div1.appendChild(img)
    div1.appendChild(h6)
    createPost.appendChild(div1)
    createPost.appendChild(p)
    if (text.className == "default") {
        p.className += ' default'
    }
   else if (text.className == "one") {
        p.className += ' one'
    }
    else if(text.className == "two")
    {
        p.className += ' two' 
    }
    else if(text.className == "three")
    {
        p.className += ' three' 
    }
    else if(text.className == "four")
    {
        p.className += ' four' 
    }
    else if(text.className == "five")
    {
        p.className += ' five' 
    }
    else if(text.className == "six")
    {
        p.className += ' six' 
    }
}