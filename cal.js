let display =document.getElementById("display");
//-----------------------------------------------------------------------------
//for entering the key
document.getElementById("display").addEventListener("keydown", function(event) {
    // Check if the Enter key (key code 13 or key 'Enter') is pressed
    if (event.key === "Enter") {
        evaluate(); // Call the evaluate function
    }
});
function evaluate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value); 
    } catch (e) {
        display.value = "Error"; 
    }
}
//--------------------------------------------------------------------------------
function appendtodisplay(input){
display.value +=input;
}

function cleardisplay(){
    display.value = "";
}

function clearlast(){
    let display = document.getElementById("display");
    let cursorposition =display.selectionStart;
    let currentvalue=display.value;
    if(cursorposition==-1 && cursorposition>=0){
        display.value = currentvalue.slice(0, cursorposition -1)+currentvalue.slice(cursorposition+1);
        display.setselectionrange(cursorposition -1,cursorposition-1);
    }else{
        display.value=display.value.slice(0,-1);
        console.log("current position",display.value);
    }

}
function  calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
    
    
}