var next = document.getElementById('next')
var prev = document.getElementById('prev')

prev.onclick = function() {
    prev.style.opacity = '0'
    next.style.opacity = '1'

}

next.onclick = function() {
    prev.style.opacity = '1'
    next.style.opacity = '0'
}