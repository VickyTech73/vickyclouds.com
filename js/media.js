window.onload = function() {
    
    var nothingDialogue = document.querySelector('.nothing')
    var content = document.querySelector('.content')
    var isThereAnything = content.id

    if(isThereAnything === 'false'){
        nothingDialogue.style.display = 'block'
        content.style.display = 'none'
    }
    else{
        nothingDialogue.style.display = 'none'
        content.style.display = 'inline-flex'
    }
}