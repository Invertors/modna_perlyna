const form = document.getElementById('order_form');
const userName = document.getElementById('userName');
const phoneNumber = document.getElementById('phoneNumber');
const color = document.getElementById('color');
const size = document.getElementById('size');

phoneNumber.oninput = function(){
    this.value = this.value.replace(/[^0-9\+]/g, '');
}

const sendForm = async ()=>{
    try{

        await fetch('/',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                [userName.name]: userName.value.trim(),
                [phoneNumber.name]: phoneNumber.value.trim(),
                [color.name]: color.value.trim(),
                [size.name]:size.value,
            })
        }).then(response =>{
                if (response.status >= 200 && response.status < 300){
                    form.reset();
                }else{
                    alert('Ошибка');
                }
            }
        );
    }catch(ex){
        console.error(ex);
    }
}


form.onsubmit = (event) => {
        event.preventDefault();
        let nameVal = userName.value.trim();
        let phoneVal = phoneNumber.value.trim();
        let colorVal = color.value;
        let sizeVal = size.value;

        console.log(nameVal, phoneVal, colorVal, sizeVal)

    return false;
}