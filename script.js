let rng = document.querySelector(".estimation__range");
let num = document.querySelector(".estimation__range-text_number");
let price = document.querySelector(".estimation__range-text_price");
let slider = document.querySelector(".slider_valued");
let bigPrice = document.querySelector( ".card__price_big");
let cardS = document.querySelector( ".card_s");
let cardB = document.querySelector( ".card_b");
let selectUsd = document.querySelector(".select_usd");
let selectEur = document.querySelector(".select_eur");
let selectGbt = document.querySelector(".select_gbt");
let usd = document.querySelector(".usd");
let eur = document.querySelector(".eur");
let gbt = document.querySelector(".gbt");
let currency;
let yearPrice;


/*price range */
  function getPrice() {
    
    num.innerHTML = `${rng.value} user`;
    let result =  new Intl.NumberFormat("en").format(rng.value*yearPrice);
    price.innerHTML = `${currency}${result}/year`;

    if (rng.value > 1 && rng.value <= 20) {
        num.innerHTML = `${rng.value} users`;
        cardS.classList.remove("inactive");
        cardB.classList.add("inactive");
       if (rng.value < 4) {
        console.log( rng.value*2 +'px')
        num.style.left =  rng.value*2 +'px'
        price.style.left = rng.value*2 +'px'
      }
        else if (rng.value >= 4 && rng.value <=9) {
          num.style.left =  rng.value*10 +'px'
          price.style.left = rng.value*10 +'px'
        }
        else if (rng.value >= 10 && rng.value <=20) {
          num.style.left =  rng.value*13 +'px'
          price.style.left = rng.value*13 +'px'
        }
      }

    else if (rng.value > 20) {
        num.innerHTML = "More than 20?";
        price.innerHTML = "Get a Custom Quote";
        cardS.classList.add("inactive");
        cardB.classList.remove("inactive");
    }   
  }

  setCurUSD();
  getPrice();

/*currency filter*/
  function setCurUSD(){
    currency = '$';
    yearPrice = 420;
    bigPrice.innerHTML = "$35";
    selectUsd.style.display="block";
    selectEur.style.display="none";
    selectGbt.style.display="none";
    usd.classList.add('active');
    eur.classList.remove('active')
    gbt.classList.remove('active')
    getPrice()
  }

  function setCurEUR() {
    currency = '€';
    yearPrice = 384;
    bigPrice.innerHTML = "€32";
    selectEur.style.display="block";
    selectUsd.style.display="none";
    selectGbt.style.display="none";
    eur.classList.add('active');
    usd.classList.remove('active')
    gbt.classList.remove('active')
    getPrice()
  }

  function setCurGBT() {
    currency = '£';
    yearPrice = 348;
    bigPrice.innerHTML = "£29";
    selectGbt.style.display="block";
    selectUsd.style.display="none";
    selectEur.style.display="none";
    gbt.classList.add('active');
    usd.classList.remove('active')
    eur.classList.remove('active')
    getPrice()
  }
 let numb = document.querySelector('.num')
/*select*/
jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();

      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
    

  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
         
      }
  });
});



if (window.screen.width <= 426) {
  cardB.classList.remove("inactive");
}