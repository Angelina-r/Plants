const iconMenu = document.querySelector('.menu-icon');
const headerBag = document.querySelector('.header-bag');
const selectIcon = document.querySelector(".select-icon")
if(iconMenu) {
  const headerBag = document.querySelector('.header-bag');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerBag.classList.toggle('_active') ;

  });
}
headerBag.addEventListener('click', event  => {
    headerBag.classList.remove('_active');  
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock');
});


  let select = function() {
      let selectHeader = document.querySelectorAll('.select__header');
      let selectItem = document.querySelectorAll('.select__item');
    
  selectHeader.forEach(item => {
    item.addEventListener('click',  selectToggle); 
     
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose) 
  });

  function selectToggle () {
    const selectIcon = document.querySelector('.select__icon');
    this.parentElement.classList.toggle('is-active');
    selectIcon.classList.toggle('is-active')
    const descriptionTown = document.querySelector('.disctiption__city');
    descriptionTown.classList.remove('is-active');
    selectHeader[0].style.background = '#C1E698';
  }

  function selectChoose () {
    let nameCity = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector ('.select__current')
    currentText.innerText = nameCity;
    const selectIcon = document.querySelector('.select__icon');
    select.classList.remove('is-active');
    selectIcon.classList.toggle('is-active')
    const descriptionTown = document.querySelector('.disctiption__city');
    descriptionTown.classList.add('is-active');
    descriptionCity(nameCity);
  }
};

select();

const descriptionCity = (city) => {
  const mapdescriptionCity = new Map();
  mapdescriptionCity.set('Canandaigua, NY', ['+1	585	393 0001', '151 Charlotte Street']);
  mapdescriptionCity.set('Yonkers, NY', ['+1	914	678 0003', '511 Warburton Ave']);
  mapdescriptionCity.set('Sherrill, NY', ['+1	315	908 0004', '14 WEST Noyes BLVD']);
  mapdescriptionCity.set('New York City', ['+1	212	456 0002', '9 East 91st Street']);
  
  document.querySelector('.discription-name-city').textContent = city;
  document.querySelector('.discription-name-phone').textContent = mapdescriptionCity.get(city)[0];
  document.querySelector('.discription-name-adress').textContent = mapdescriptionCity.get(city)[1];

  call(mapdescriptionCity.get(city)[0]);

}

const call = function(phoneNumber) {
  const btnCall = document.querySelector('.discription-btn-a');
  btnCall.addEventListener('click', function(e) {
    btnCall.setAttribute('href','tel:' + phoneNumber);
  })
}



const priceListFirstElement = document.querySelector('.prices-list li:first-child');
const priceListFirstElementCircle = document.querySelector('.prices-list-svg-span-first');
const priceAccordeonFirstElement = document.querySelector('.accordion-block');
const priceAccordeonCloseElement = document.querySelector('.prices-list-svg-span-two-first')
if (priceListFirstElement) {
  priceListFirstElementCircle.addEventListener('click', function (e) {
    priceAccordeonFirstElement.classList.remove('hidden');
  });
}
  if (priceAccordeonFirstElement) {
    priceAccordeonCloseElement.addEventListener('click', function (e) {
      priceAccordeonFirstElement.classList.add('hidden');
    });
}

const priceLisSecondElement = document.querySelector('.prices-list li:nth-last-child(2)');
const priceListSecodElementCircle = document.querySelector('.prices-list-svg-span-second');
const priceAccordeonSecondElement = document.querySelector('.accordion-block-standart');
const priceAccordeonCloseElementSecond = document.querySelector('.prices-list-svg-span-two-second')
if (priceLisSecondElement) {
  priceListSecodElementCircle.addEventListener('click', function (e) {
    priceAccordeonSecondElement.classList.remove('hidden');
  });
}
  if (priceLisSecondElement) {
    priceAccordeonCloseElementSecond.addEventListener('click', function (e) {
      priceAccordeonSecondElement.classList.add('hidden');
    });
}

const priceLisThirdElement = document.querySelector('.prices-list li:nth-last-child(1)');
const priceListThirdElementCircle = document.querySelector('.prices-list-svg-span-third');
const priceAccordeonThirdElement = document.querySelector('.accordion-block-procare');
const priceAccordeonCloseElemenThird = document.querySelector('.prices-list-svg-span-two-third')
if (priceLisThirdElement) {
  priceListThirdElementCircle.addEventListener('click', function (e) {
    priceAccordeonThirdElement.classList.remove('hidden');
  });
}
  if (priceLisThirdElement) {
    priceAccordeonCloseElemenThird.addEventListener('click', function (e) {
      priceAccordeonThirdElement.classList.add('hidden');
    });
}

const priceAccordeonFirst = document.querySelector('.accordion-block');
const priceAccordeonSecond = document.querySelector('.accordion-block-standart');
const priceAccordeonThird = document.querySelector('.accordion-block-procare');
const priceListThirdElementCircle3 = document.querySelector('.prices-list-svg-span-third');
const priceListSecodElementCircle2 = document.querySelector('.prices-list-svg-span-second');
const priceListFirstElementCircle1 = document.querySelector('.prices-list-svg-span-first');

if (priceAccordeonFirst) {
  priceListSecodElementCircle2.addEventListener('click', function (e) {
    priceAccordeonFirst.classList.add('hidden');
  });
}
  if (priceAccordeonFirst) {
    priceListThirdElementCircle3.addEventListener('click', function (e) {
      priceAccordeonFirst.classList.add('hidden');
    });
}

if (priceAccordeonSecond) {
  priceListFirstElementCircle1.addEventListener('click', function (e) {
    priceAccordeonSecond.classList.add('hidden');
  });
}
if (priceAccordeonSecond) {
  priceListThirdElementCircle3.addEventListener('click', function (e) {
    priceAccordeonSecond.classList.add('hidden');
  });
}

if (priceAccordeonThird) {
  priceListFirstElementCircle1.addEventListener('click', function (e) {
    priceAccordeonThird.classList.add('hidden');
  });
}

if (priceAccordeonThird) {
  priceListSecodElementCircle2.addEventListener('click', function (e) {
    priceAccordeonThird.classList.add('hidden');
  });
}



const links = document.querySelectorAll('.main-second-block-navigation-list a');
const gardens = document.querySelectorAll('.garden');
let count = 0;


links.forEach((link) => {
  link.addEventListener('click', event => {
    lightButton(link);
    blurGarden(event.target.textContent);
  });
});


function lightButton(link) {
  const btn = document.querySelectorAll('.active-btn');
  count++;
  if (count <= 1) {
    link.classList.add('active-btn');
  } else if (count == 2 && link.classList.contains('active-btn')) {
    link.classList.remove('active-btn');
  } else if (count == 2 && !link.classList.contains('active-btn')) {
    link.classList.add('active-btn');
  } else if (count == 3 && link.classList.contains('active-btn')) {
    link.classList.remove('active-btn');
    count = 1;
  } else {
    btn.forEach(item => item.classList.remove('active-btn'));
    count = 0;
    link.classList.add('active-btn');
    count++;
  }
}

function blurGarden(text) {

  const btn = document.querySelectorAll('.active-btn');
  gardens.forEach(item => {

  if (item.getAttribute('data-project') === text && item.classList.contains('is-not-active')) {
    item.classList.remove('is-not-active');
  }
  if (btn.length  == 1) {
    if (btn[0]?.textContent != item.getAttribute('data-project') )  {
      item.classList.add('is-not-active');
    }
  } 
  if (btn.length  == 0) {
    item.classList.remove('is-not-active');
  }

});

}
