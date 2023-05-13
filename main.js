const GenerateBtn=document.querySelector(".generator-btn")
const url="https://api.quotable.io/random"
async function getQ(url){
    const response= await fetch(url)
    const data= await response.json()
    console.log(data)
    document.querySelector(".quotes").textContent=`'${data.content}'`
    document.querySelector(".author").textContent=`-${data.author}`

}

GenerateBtn.addEventListener("click", function(){
    getQ(url)
})
