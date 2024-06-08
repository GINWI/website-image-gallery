const gambarBesar = document.querySelector('.big')
const gambarKecil = document.getElementsByClassName('small')

for (let i = 0; i < gambarKecil.length; i++) {
    gambarKecil[i].addEventListener('click', function (e){
        ubahGambar(i + 1);
        })};

function ubahGambar(nomorGambar) {
    gambarBesar.setAttribute('src', 'img/gambar' + nomorGambar + '.jpg');
    gambarBesar.classList.add('fade');
    setTimeout(function () {
        gambarBesar.classList.remove('fade');
    }, 500)
}
