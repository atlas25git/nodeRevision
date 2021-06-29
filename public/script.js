console.log('script Loaded');

document.querySelector('#btnLoad').addEventListener('click',()=>{
    getDinoName();
    getDinoImage();
})

async function getDinoName(){
    const response = await fetch('/dinoname');
    const data = await response.json();
    let dinoname = data[0].join(' ');
    console.log(dinoname);
    document.querySelector('#dinoName').textContent=dinoname;
}
async function getDinoImage(){
    const response = await fetch('/dinoimage');
    const data = await response.json();
    let dinoimage = data.value[Math.floor(Math.random()*data.value.length)];
    let dinoimageurl = dinoimage.thumbnailUrl;
    let dinoalt = dinoimage.name;
    console.log(dinoimage);

    if(document.querySelector('#dinoimage')!==null)
        {document.querySelector('#dinoimage').remove();}

    let img = document.createElement('img');
    img.id = 'dinoimage';
    img.src = dinoimageurl;
    img.alt = dinoalt;
    document.querySelector('.generator').appendChild(img);
}