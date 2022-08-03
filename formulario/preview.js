window.addEventListener('DOMContentLoaded', function(){
    var arqImg = document.getElementById('arquivo')
    arqImg.addEventListener('change', function(){
        var file = arqImg.files.item(0)
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(event){
            var prev = document.getElementById('preview')
            prev.src = event.target.result
        }
    })
})