let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')

let photo = document.querySelector('.photo')
console.log(photo);

btn1.onclick = () => {
    photo.classList.remove('photo','photo1','photo2','photo3','photo4','photo5')
    photo.classList.add('photo1')
}
btn2.onclick = () => {
    photo.classList.remove('photo','photo1','photo2','photo3','photo4','photo5')
    photo.classList.add('photo2')
}
btn3.onclick = () => {
    photo.classList.remove('photo','photo1','photo2','photo3','photo4','photo5')
    photo.classList.add('photo3')
}
btn4.onclick = () => {
    photo.classList.remove('photo','photo1','photo2','photo3','photo4','photo5')
    photo.classList.add('photo4')
}
btn5.onclick = () => {
    photo.classList.remove('photo','photo1','photo2','photo3','photo4','photo5')
    photo.classList.add('photo5')
}

let link = document.querySelector('.link')
let background = document.querySelector('.background')
let x = document.querySelector('.x')
let body = document.querySelector('body')

link.onclick = () => {
    background.style = 'display: block'
}
x.onclick = () => {
    background.style = 'display: none'
}

document.querySelectorAll('.head').forEach((item) => 
    item.addEventListener('click', () => {
            const child = document.querySelector('.ip-info')
            child.classList.toggle('disp-block')
          }
    )
)

document.querySelectorAll('.head2').forEach((item) => 
    item.addEventListener('click', () => {
            const child = document.querySelector('.ip-info2')
            child.classList.toggle('disp-block')
          }
    )
)