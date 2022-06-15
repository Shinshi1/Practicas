let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0; // creamos una variable height que tenga el valor por defecto de 0 
        let menu = listElement.nextElementSibling; // selecionamos al hermano adyacente de menu
        if(menu.clientHeight == "0"){   // y creamos una condicional con if, si el alto de menu es =0, entonces...
            height=menu.scrollHeight; // entonces quiero que el alto o la variable height, cambie al alto minimo que debe tener menu por eso el "height=menu.scrollHeight", pero si no entra en esta condicional es porque el alto actual de menu, es más alto. Y si el alto actual de menu es más alto que 0 entonces ya se muestra el menu. Bueno y si eso pasa...
        }


        menu.style.height = `${height}px` // si eso pasa yo no quiero que lo mustres y vuelve a la variable que creamos al principio de height = 0

    })
});