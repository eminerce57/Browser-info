console.log(navigator)
console.log(window)


info()


function info(){
document.getElementById("OS").innerHTML += `
${Osimage(navigator.platform)}

`

document.getElementById("main-footer").innerHTML +=`
<span><b>language:</b> ${navigator.language}</span> 
<span><b>language:</b> ${}</span> 

`

}

function Osimage(platform){

    console.log(platform)

    if (navigator.platform.indexOf("win")) {
        console.log("win")
        return `<img class="img-responsive"  src="img/win-logo.png">`
    }
    else if (navigator.platform.indexOf("mac")) {
        console.log("mac")
        return `<img class="img-responsive"  src="img/apple-logo.png">`
    }
    else if (navigator.platform.indexOf("linux")) {

        console.log("linux")
        return `<img class="img-responsive"  src="img/linux-logo.png">`
    }
    else{
        return "unknown"
    }

}