require.config({
    baseUrl:"./js",
    paths:{
        header:"header",
        content:"content",
        footer:"footer"
    }
})




require (['header','content','footer'],function(header,content,footer){
    let ABC=document.querySelectorAll("#box div")

    ABC[0].onclick=function(){
        header("123")
    }
})
