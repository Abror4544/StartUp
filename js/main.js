$(function () {
    let title = document.querySelector('.header_text h1');
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('header .menu_btn_bars').show();
            $('header .menu_btn_close').hide();
        }
        if ($(window).width() > 992) {
            $('header .menu_btn_bars').hide();
            $('header .menu_btn_close').hide();
        }
    })
    $('.menu_btn_bars').click(function () {
        $('header .menu_btn_bars').hide();
        $('header .menu_btn_bars').css('transform', 'rotate(180deg)');
        $('header .menu_btn_close').show();
        $('header .menu_ul').show(300);
        $('header .menu_ul').css('transform', 'translateX(0%)');
        title.style.zIndex = '-1'
    })
    $('.menu_btn_close').click(function () {
        $('header .menu_btn_close').hide();
        $('header .menu_btn_bars').show();
        $('header .menu_ul').fadeOut();
        $('header .menu_ul').css('transform', 'translateX(100%)');
        title.style.zIndex = '1'
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
    $('.top_btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    let link = $('nav ul li #link');

    link.on('click', function (e) {
        e.preventDefault();

        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);

        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    });

    let comments = document.querySelectorAll('.one');
    let a = document.querySelectorAll('.a');
    let b = document.querySelectorAll('.b');
    let c = document.querySelectorAll('.c');
    let left = document.querySelector('.section_four .leftBtn');
    let right = document.querySelector('.section_four .rightBtn');
    for (let i = 0; i < comments.length; i++) {
        left.addEventListener('click', function (e) {
            e.preventDefault();
            if (a[i].style.display = 'block') {
                $(a)[i].style.display = 'none';
                $(c)[i].style.display = 'block';
            }
            if (c[i].style.display = 'block') {
                c[i].style.display = 'none';
                b[i].style.display = 'block';
            }
        })
    }
    for (let i = 0; i < comments.length; i++) {
        right.addEventListener('click', function (e) {
            e.preventDefault();
            if (a[i].style.display = 'block') {
                a[i].style.display = 'none';
                b[i].style.display = 'block';
            }
            if (b[i].style.display = 'block') {
                b[i].style.display = 'none';
                c[i].style.display = 'block';
            }
        })
    }

})
