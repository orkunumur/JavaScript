let  formDOM = document.querySelector("#myForm");
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault()
    console.log("İşlem gerçekleşti")
}