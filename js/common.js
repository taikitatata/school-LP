// slickの変更
$(function() {
  $(window).on("load resize", function() {
    var width = $(window).width();
    if (width <= 999) {
      $(".review__slider")
        .not(".slick-initialized")
        .slick({
          arrows: true,
          dots: true,
          nextArrow:
            '<div class="slide-arrow next-arrow"><img src="./img/review-next.svg"></div>',
          prevArrow:
            '<div class="slide-arrow prev-arrow"><img src="./img/review-prev.svg"></div>'
        });
    } else {
      $(".slick-initialized").slick("unslick");
    }
  });
});

// validateの変更

$(function() {
  $(".js-form").validate({
    rules: {
      firstname: {
        required: true
      },
      secondname: {
        required: true
      },
      firstnameSub: {
        required: true
      },
      secondnameSub: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      content: {
        required: true
      }
    },
    messages: {
      firstname: {
        required: "性を入力して下さい"
      },
      secondname: {
        required: "名を入力して下さい"
      },
      email: {
        required: "mailアドレスを入れてください"
      },
      firstnameSub: {
        required: "セイを入力して下さい"
      },
      secondnameSub: {
        required: "メイを入力して下さい"
      },
      content: {
        required: "文字を入力して下さい"
      }
    }
  });
  $(".js-form--sp").validate({
    rules: {
      firstnameSp: {
        required: true
      },
      secondnameSp: {
        required: true
      },
      firstnameSubSp: {
        required: true
      },
      secondnameSubSp: {
        required: true
      },
      emailSp: {
        required: true,
        email: true
      },
      contentSp: {
        required: true
      }
    },
    messages: {
      firstnameSp: {
        required: "性を入力して下さい"
      },
      secondnameSp: {
        required: "名を入力して下さい"
      },
      firstnameSubSp: {
        required: "セイを入力して下さい"
      },
      secondnameSubSp: {
        required: "メイを入力して下さい"
      },
      emailSp: {
        required: "mailアドレスを入れてください"
      },
      contentSp: {
        required: "文字を入力して下さい"
      }
    }
  });
  function handleTouchMove(event) {
    event.preventDefault();
  }
  document.addEventListener("touchstart", handleTouchMove, { passive: true });
  document.removeEventListener("touchstart", handleTouchMove, {
    passive: true
  });
});
