$.get("sample_products.txt", function (data) {
    var veri = JSON.parse(data);

    var divAp = $('#section1'), product = "";
   
    $.each(veri, function (index, data) {
        var discount = data.oldPrice > 0 ? Math.round(((data.price / data.oldPrice) * 100 - 100)) + "%" : "hidden";
        var likeCount = typeof data.params === 'undefined' ? "hidden" : (data.params.likeCount > 0 ? "♡ " + data.params.likeCount : "hidden")       
        var isNew = typeof data.params === 'undefined' ? "hidden" : (data.params.isNew == "true" ? "NEU" : "hidden")        
        var oldPricePush = data.oldPrice > 0 ? data.oldPriceText.slice(1) : "hidden";
        var basePrice = typeof data.params === 'undefined' ? "hidden" : data.params.basePrice

        var paramsSatement ="";
        var separator = " | ";
        if(typeof data.params ==! 'undefined'){
        paramsSatement = data.params.land !="" ? paramsSatement = data.params.land :paramsSatement;
        paramsSatement = data.params.region !="" ? paramsSatement +(separator + data.params.region ):paramsSatement;
        paramsSatement = data.params.art !="" ? paramsSatement += (separator + data.params.art ):paramsSatement;
        paramsSatement = data.params.rebsorte !="" ? paramsSatement += (separator + data.params.rebsorte ):paramsSatement;
        }
           
        product += '<li>\
       <div class="productWindow">\
           <div class="divImgProduct">\
               <div>\
                   <div class="divSale" id="divSale'+ index + '"  ' + discount + ' > ' + discount + ' </div>\
                   <div class="likeCount" id="likeCount'+ index + '" ' + likeCount + ' > ' + likeCount + '</div>\
                   <div class="isNew" id="isNew'+ index + '" ' + isNew + ' > ' + isNew + '</div>\
               </div>\
               <img src="'+ data.imageS + '" class="image" id="img' + index + '" alt="yüklenemedi">\
           </div>\
           <div class="divProductName" id="name'+ index + '">' + data.name + '</div>\
           <div class="divParams" id="param'+ index + '">' + paramsSatement + '</div>\
           <div class="row justify-content-center">\
               <div class="divPriceText" id="priceText'+ index + '">' + data.priceText.slice(1) + " €* " + '</div>\
               <div class="divOldPriceText" id="oldPrice'+ index + '" ' + oldPricePush + ' >' + oldPricePush + " €* " + '</div>\
           </div>\
           <div class="divBasePrice" id="basePrice'+ index + '" ' + basePrice + ' >' + basePrice + '</div>\
           <div class="divBottomSpace"></div>\
       </div>\
        </li>'
    })

    for (let i = 1; i < 4; i++) {
        divAp.append('<ul id="content-slider' + i + '" class="content-slider"> ' + product + ' </ul>');
    }

})

$(document).ready(function () {
    $("#content-slider1").lightSlider({
        loop: true,
        keyPress: true
    });
    $("#content-slider2").lightSlider({
        loop: true,
        keyPress: true
    });
    $("#content-slider3").lightSlider({
        loop: true,
        keyPress: true
    });
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        speed: 500,
        auto: true,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
});

$(document).ready(function () {
    $("#lightSlider").lightSlider();
});

$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl: false,
        adaptiveHeight: false,

        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,

        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    });
});

$(document).ready(function () {
    var slider = $("#lightSlider").lightSlider();
    slider.goToSlide(5);
    slider.goToPrevSlide();
    slider.goToNextSlide();
    slider.getCurrentSlideCount();
    slider.refresh();
    slider.play();
    slider.pause();
});