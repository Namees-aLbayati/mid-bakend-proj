const containerImg=document.getElementById('container');
console.log(containerImg)


const getProjects=async function(){
const response=await fetch('/project',{
    method:'GET'
});
const result=await response.json()
const parsedData=JSON.parse(result)

    createCards(parsedData)


    


//     const hyperLink=document.createElement('a');
//     const imgEl=document.createElement('img');
// const descrption=document.createElement('div')
// descrption.innerHTML=`<p>Add desc</p>`
// descrption.style.margin='13px'
//     hyperLink.setAttribute('href','www.google.com')
// containerImg.style.border=' 1px solid gray'
// containerImg.style.boxShadow=' rgba(173, 216, 230, 0.2) 15px 15px, rgba(182, 208, 226, 0.1) 20px 20px, rgba(240, 255, 255, 0.05) 25px 25px';
// containerImg.style.borderRadius='40px'

   
// imgEl.setAttribute('class','d-block');
// imgEl.style.width='100%';
// imgEl.style.height='300px';
// imgEl.style.opacity='0.5'
// imgEl.setAttribute('src','./projectsImage/food.png')

// hyperLink.appendChild(imgEl)
// divEl.appendChild(hyperLink)
// divEl.appendChild(descrption)


  
}
getProjects()

function createCards(data){
    console.log('data',data)
  for(var i=1;i<data.length;i++){
    const divEl=document.createElement('div');
    divEl.classList.add('carousel-item');
    divEl.setAttribute('data-bs-interval','2000');

    const ahref=document.createElement('a');
    ahref.setAttribute('href',data[i].github);

    const image=document.createElement('img');
    image.setAttribute('src',`./projectsImage/${data[i].image}`);
    image.setAttribute('class','d-block')
    image.style.width='100%';
    image.style.height='300px';
    ahref.appendChild(image)
    
const div2=document.createElement('div');

div2.setAttribute("class",'mx-3');
div2.setAttribute('class','text-center')
const header5=document.createElement('h5');
header5.innerHTML=`${data[i].name} <a href=${data[i].url}><li class='fa-solid fa-link '></li></a> `;

const desc=document.createElement('p');
desc.style.paddingTop='6px';
desc.textContent=data[i].description



const br=document.createElement('br')

const techn=document.createElement('p')
techn.innerHTML=`Used Technologies:${data[i].tech}`

div2.appendChild(header5)

div2.appendChild(desc)
// div2.innerHTML=`<a href=${data[i].url}><li class='fa-solid fa-link fa-xl'></li></a>`

div2.appendChild(techn)


divEl.appendChild(ahref)
divEl.appendChild(div2)


containerImg.appendChild(divEl)


  }

   


}

const CV=document.getElementById('resume');
CV.addEventListener('click',()=>{
window.open('./Namees MAlbayati-Dev.pdf')})

