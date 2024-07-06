let inputField=document.getElementById('input');
let button=document.querySelectorAll('button');
let str ="";
button.forEach((particular_button) => {
    particular_button.addEventListener ("click",()=> {
        if (particular_button.value == "="){
            try {
                str = eval(str);
                inputField.vlaue = str;
                str = "";

            } catch (e) {
                inputField.value = "Error";
                str = "";
            }
        } else {
            console.log(particular_button.value);
            str = str + particular_button.value;
            inputField.value =str;
        }
    });
});

