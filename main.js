const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const historys= $('.header-history')
const searchs= $('.header-search.header-search_input')
const forms=$('.modal-form')
const logins=$$('.header__navbar-item-bold')
const login1=$('.auth-form__body-nhap')
const registrations1=$('.auth-form__body-ky')
const backs=$$('.auth-form__control .btn-back')



//search
 searchs.onclick=function(){
        historys.style.display="block";
 }
 //login-signin
 logins[0].onclick=function(){
    forms.style.display="block";
    login1.style.display="block" ;
}

 logins[1].onclick=function(){
    forms.style.display="block";
    registrations1.style.display="block" ;
}

 logins[2].onclick=function(){
   forms.style.display="block";
    login1.style.display="block" ;
}

for(var i=0;i<backs.length;i++){
 backs[i].onclick=function(){
    forms.style.display="none";
    login1.style.display="none" ;
    registrations1.style.display="none" ;
 };
}
//tha tim
const hearts=$$('.product-item__icon')
     hearts.forEach((heart,index) => {
        heart.onclick= function(){
         if($('.product-item__icon.product-item__iconed') != null){
         $('.product-item__icon.product-item__iconed').classList.remove('product-item__iconed')
         }else{
           this.classList.add('product-item__iconed')
         }
        }
     });

// tìm kiếm theo giá
     const price= $('.filter-select__list')
     const prices= $('.filter-select')

     prices.onclick= function(){
        if(price.style.display=='block'){
         price.style.display='none';
        }
        else{
         price.style.display='block';
        }
     }
   

// thanh trượt

     const truot= $$('.header__sort-item')
     const thanh= $('.header__sort-item.header__sort-active')
     const line= $('.line')
     line.style.left= thanh.offsetLeft+'px';
     line.style.width= thanh.offsetWidth+'px';

     truot.forEach((truots, index) =>{
        truots.onclick= function(){
         $('.header__sort-item.header__sort-active').classList.remove('header__sort-active')
         line.style.left= truots.offsetLeft+'px';
         line.style.width= truots.offsetWidth+'px';
         this.classList.add('header__sort-active')
        }
     })

   //   xem thêm

   const sees = $$('.btn_review')
   sees.forEach((see, index) =>{
      see.onclick= function(){
         $('.container').style.display='none';
         $('.container-product').style.display='block';
         $('.header__sort-bar').style.display='none';
         $('.see-mobile').style.display='none';
         $('.product-header').style.display='block';
      }
   })

   // tìm kiếm trên điện thoại

   const search_mobile= $('.icon__search')

   search_mobile.onclick=function(){
      $('.sensi_mobile').style.display='none';
      $('.signin-mobile').style.display='none';
      $('.icon__search').style.display='none';
      $('.header-search').style.display='flex';
   }
   

  // menu

   const menu_mobile= $('.list__icon')
   const quit_mobile= $('.quit-mobile')
   const overlay_mobile= $('.overlayin-quit')

   menu_mobile.onclick=function(){
      $('.tab-mobile').style.display='block';
   }

   quit_mobile.onclick=function(){
      $('.tab-mobile').style.display='none';
   }

   overlay_mobile.onclick=function(){
      $('.tab-mobile').style.display='none';
   }