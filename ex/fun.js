function add(){
    var num1,num2,res;
    num1 = parseInt(document.getElementById('n1').value);
    num2 = parseInt(document.getElementById('n2').value);
    res = num1+num2;
    document.getElementById('r').innerHTML = res;
}
