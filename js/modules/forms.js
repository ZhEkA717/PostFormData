import {postData} from "../services/serveces";

function forms(formSelector){
    const form = document.querySelector(formSelector);

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const formData = new FormData(form);// объект
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            alert("Form send!")
        }).catch(() => {
            alert("error!")
        }).finally(() => {
            form.reset();
        });
    });

}

export default forms;