const questions = [
    {
      id: 1,
      title: 'Do I have to allow the use of cookies?',
      info:
        'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
    },
    {
      id: 2,
      title: 'How do I change my My Page password?',
      info:
        'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
    },
    {
      id: 3,
      title: 'What is BankID?',
      info:
        'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
    },
    {
      id: 4,
      title: 'Whose birth number can I use?',
      info:
        'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
    },
    {
      id: 5,
      title: 'When do I recieve a password ordered by letter?',
      info:
        'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
    },
  ]
  
const accordianwrapper=document.querySelector('.accordian')

function createaccordiandata(){
  accordianwrapper.innerHTML=questions.map(dataItem=>`
      <div class='accordian_item'>
          <div class='accordian_title'>
             <h3>${dataItem.title}</h3>
             <i>+</i>
          </div>
          <div class="accordian_info">
              <p>${dataItem.info}</p>
          </div>
      </div>
  `).join(" ")
}
createaccordiandata();

const getaccordiantitle=document.querySelectorAll('.accordian_title')

getaccordiantitle.forEach(currentItem=>{
    currentItem.addEventListener('click',(event)=>{
      if(currentItem.classList.contains('active')){
        currentItem.classList.remove('active')
      }else{
        let getAlreadyAddedAcriveClassess=document.querySelectorAll('.active')
        getAlreadyAddedAcriveClassess.forEach(currentActiveItem=>{
          currentActiveItem.classList.remove('active')
        })
        currentItem.classList.add('active')
      }
    })
})