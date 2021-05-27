function sul(val){
    document.getElementById("screen").value+=val

}
function cleardisplay(val)
{
    document.getElementById("screen").value=""
}
function equalclick(val)
{
var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}