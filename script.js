function add(value){
    document.getElementById('display').value += value;
}
function clr(){
    document.getElementById('display').value = "";
}
function calc(){
    let disres = document.getElementById('display').value;
    let updated = disres.trim();
    let ans = eval(updated);
    document.getElementById('display').value =ans;

}
function bs(){
    let cv = document.getElementById('display').value;
    let backspace = cv.slice(0,-1);
    document.getElementById('display').value = backspace;
}