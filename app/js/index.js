console.log(navigator)
console.log(window)


info()


function info(){
document.getElementById("OS").innerHTML += `
${Osimage(navigator.platform)}

`

document.getElementById("main-footer").innerHTML +=`
<span><b>language:</b> ${navigator.language}</span> 
<span><b>vendor:</b> ${navigator.vendor}</span> 
<span><b>Memory:</b> ${navigator.deviceMemory}GB</span> 
<span><b>Connection:</b> ${navigator.connection.effectiveType}</span> 
<span><b>App Code name:</b> ${navigator.appCodeName}</span> 
<span><b>App name:</b> ${navigator.appName}</span> 
<span style="text-align:center"><b style="display: flex; justify-content: center;">App version:</b> ${navigator.appVersion}</span> 
`
document.getElementById("other-info").innerHTML += `
<div class="col-6 ">
<span><b>languages</b> <input class="form-control" type="text" value="${navigator.languages}" disabled ></span>

<span><b>product</b> <input class="form-control" type="text" value="${navigator.product}" disabled ></span> 

<span><b>product sub</b> <input class="form-control" type="text" value="${navigator.productSub}" disabled ></span>  

<span><b>cookie </b> <input class="form-control" type="text" value="${yes_no(navigator.cookieEnabled)}" disabled ></span>  
</div>

<div class="col-6" id="foreach-area">

</div>
`
// ${echFunction()}
let forEach_area = document.getElementById("foreach-area")
navigator.userAgentData.brands.forEach((element,index)=> {
forEach_area.innerHTML +=`
<span><b>explorer ${index+1}</b> <input class="form-control" type="text" value="${element.brand} version ${element.version}" disabled ></span>  
`
});

let plugin_area = document.getElementById("plugins-area")

const pluginsLength = navigator.plugins.length;


for (let i = 0; i < pluginsLength; i++) {

plugin_area.innerHTML +=`
<div class="plugin-item">
<span class="plugin-span">${navigator.plugins[i].name}</span>
<label class="plugin-label">${navigator.plugins[i].description}</label>
</div>

`




}






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

//  function echFunction(data){

//     data.forEach(element => {
//      let data =    element.brand
//      console.log(data)
//         return data
    
//     });
//  }

function yes_no(bool){
if(bool== true){
    return "yes"
}
else{

    return "no"
}


}