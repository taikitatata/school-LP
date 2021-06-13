$(function() {
  // スムーススクロール
  $("a").on("click", function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var speed = 500;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // ham
  $(function() {
    var $hamClose = $(".js-ham__img--close"),
      $hamOpen = $(".js-ham__img--open"),
      $hamItem = $(".js-ham__listItem").find("a"),
      $hamList = $(".js-ham__list");

    $($hamOpen).on("click", function() {
      $hamList.slideDown();
      $hamClose.show();
      $hamOpen.hide();
    });
    $($hamClose).on("click", function() {
      $hamList.slideUp();
      $hamClose.hide();
      $hamOpen.show();
    });
    $($hamItem).on("click", function() {
      $hamList.slideUp();
      $hamClose.hide();
      $hamOpen.show();
    });
    $(window).on("resize", function() {
      var width = $(window).width();
      if (999 <= width) {
        $hamList.hide();
        $hamClose.hide();
        $hamOpen.show();
      }
    });
  });

  // ham-hover
  $(".js-hover").on({
    mouseover: function() {
      $(this).css("color", "#E8663B");
    },
    mouseout: function() {
      $(this).css("color", "#0086FC");
    }
  });

  // faq
  $(".js-faq__listItem").on("click", function() {
    var $answer = $(this).next(".js-faq__answer"),
      $listItem = $(".js-faq__listItem"),
      open = $(".faq__img--open"),
      close = $(".faq__img--close");

    if ($(this).hasClass(".faq--open")) {
      $(this)
        .find(close)
        .hide();
      $(this)
        .find(open)
        .show();
      $answer.slideUp();
      $(this).removeClass(".faq--open");
    } else {
      $listItem.removeClass(".faq--open");
      $listItem.find(open).show();
      $listItem.find(close).hide();
      $(this)
        .find(open)
        .hide();
      $(this)
        .find(close)
        .show();
      $listItem.next(".js-faq__answer").slideUp();
      $answer.slideDown();
      $(this).addClass(".faq--open");
    }
  });
  // 追従cv・fotter
  $(window).on("scroll", function() {
    var $horming = $(".js-horming"),
      $footer = $(".js-footer--horming"),
      startPosition = $(".main__bunner").offset().top,
      windowScrolltop = $(window).scrollTop(),
      hoverHeight = $(".service__list").offset().top,
      width = $("body").width();
    if (windowScrolltop >= startPosition && width > 600) {
      $horming.fadeIn();
    } else {
      $horming.fadeOut();
    }
    if (width < 600 && windowScrolltop >= startPosition) {
      $footer.fadeIn();
    } else {
      $footer.fadeOut();
    }
  });
  $(".js-horming").on({
    mouseover: function() {
      $(".js-horming")
        .find("a")
        .removeClass("btn--horming");
      $(".js-horming")
        .find("a")
        .addClass("btn--hover");
    },
    mouseout: function() {
      $(".js-horming")
        .find("a")
        .removeClass("btn--hover");
      $(".js-horming")
        .find("a")
        .addClass("btn--horming");
    }
  });
  // モーダル表示
  $(function() {
    var $modal = $(".js-modal__wrap"),
      urlModal = $modal.attr("data-modal"),
      urlParam = location.search.substring();
    $(window).on("load", function() {
      if (urlModal == urlParam) {
        $modal.addClass("show");
      }
    });
    // モーダル閉じる
    $(".js-modal__close").on("click", function() {
      $modal.hide();
    });
    $(".modal__btn").on("click", function() {
      $modal.hide();
    });
  });
  //お客様の声ボタン
  $(".js-course").on("click", function() {
    var text = $(this).text();
    $(".js-course").removeClass("reveiw__backcolor");
    $(this).addClass("reveiw__backcolor");
    if (text === "WEB制作コース") {
      text = "WEB制作コース。";
      $(".review__boxRight span").text(text);
    } else {
      text = "Coming Soon";
      $(".review__boxRight span").text(text);
    }
  });
});
