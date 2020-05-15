!(function (e) {
    "use strict";
    var a = e("body"),
        i = e("a.scrollto, #site-navbar a"),
        s = !0,
        o = (e(".home-block"), e(".content-block"), e(".back-to-top")),
        t = e("#preloader"),
        n = 1200,
        l = 500;
    function r() {
        return Math.max(e(window).width(), window.innerWidth);
    }
    function c() {
        return Math.max(e(window).height(), window.innerHeight);
    }
    function d() {
        var i = e(".bg-image-holder");
        if (
            (i.length > 0 &&
                i.each(function () {
                    var a = e(this).children("img").attr("src");
                    e(this)
                        .css("background-image", "url(" + a + ")")
                        .children("img")
                        .hide();
                }),
            a.hasClass("slideshow-background") &&
                a.vegas({
                    preload: !0,
                    timer: !1,
                    delay: 5e3,
                    transition: "fade",
                    transitionDuration: 1e3,
                    slides: [{ src: "demo/images/image-15.jpg" }, { src: "demo/images/image-16.jpg" }, { src: "demo/images/image-17.jpg" }, { src: "demo/images/image-4.jpg" }],
                }),
            a.hasClass("slideshow-zoom-background") &&
                a.vegas({
                    preload: !0,
                    timer: !1,
                    delay: 7e3,
                    transition: "zoomOut",
                    transitionDuration: 4e3,
                    slides: [{ src: "demo/images/image-4.jpg" }, { src: "demo/images/image-16.jpg" }, { src: "demo/images/image-17.jpg" }, { src: "demo/images/image-15.jpg" }],
                }),
            a.hasClass("slideshow-video-background") &&
                a.vegas({
                    preload: !0,
                    timer: !1,
                    delay: 5e3,
                    transition: "fade",
                    transitionDuration: 1e3,
                    slides: [
                        { src: "demo/images/image-15.jpg" },
                        { src: "demo/video/marine.jpg", video: { src: ["demo/video/marine.mp4", "demo/video/marine.webm", "demo/video/marine.ogv"], loop: !1, mute: !0 } },
                        { src: "demo/images/image-16.jpg" },
                        { src: "demo/images/image-17.jpg" },
                    ],
                }),
            a.hasClass("kenburns-background"))
        ) {
            a.vegas({
                preload: !0,
                transition: "swirlLeft",
                transitionDuration: 4e3,
                timer: !1,
                delay: 1e4,
                slides: [
                    { src: "demo/images/image-15.jpg", valign: "center" },
                    { src: "demo/images/image-14.jpg", valign: "center" },
                    { src: "demo/images/image-17.jpg", valign: "center" },
                ],
                walk: function (e) {},
            });
        }
        if (e("#youtube-background").length > 0) {
            var s = [{ videoURL: "iXkJmJa4NvE", showControls: !1, containment: ".overlay-video", autoPlay: !0, mute: !0, startAt: 0, opacity: 1, loop: !0, showYTLogo: !1, realfullscreen: !0, addRaster: !0 }];
            e(".player").YTPlaylist(s, !0);
        }
        if (e("#youtube-multiple-background").length > 0) {
            s = [
                { videoURL: "CG20eBusRg0", showControls: !1, containment: ".overlay-video", autoPlay: !0, mute: !0, startAt: 0, opacity: 1, loop: !1, showYTLogo: !1, realfullscreen: !0, addRaster: !0 },
                { videoURL: "iXkJmJa4NvE", showControls: !1, containment: ".overlay-video", autoPlay: !0, mute: !0, startAt: 0, opacity: 1, loop: !1, showYTLogo: !1, realfullscreen: !0, addRaster: !0 },
            ];
            e(".player").YTPlaylist(s, !0);
        }
        a.hasClass("mobile") && e(".video-wrapper").css("display", "none"),
            e("[data-gradient-bg]").each(function (a, i) {
                var s = e(this),
                    o = "granim-" + a,
                    t = (t = (t = s.attr("data-gradient-bg")).replace(" ", "")).replace(/'/g, '"');
                (t = JSON.parse(t)), s.prepend('<canvas id="' + o + '"></canvas>');
                new Granim({ element: "#" + o, name: "basic-gradient", direction: "left-right", opacity: [1, 1], isPausedWhenNotInView: !0, states: { "default-state": { gradients: t } } });
            });
    }
    function u() {
        var i = e(".oli-fullpage");
        if (i.length > 0) {
            var s = [];
            i.children(".oli-section").each(function () {
                var a = e(this).data("anchor");
                void 0 !== a && s.push(a);
            }),
                r() >= 1200 && c() >= 768
                    ? (i.hasClass("fullpage-wrapper") && !i.hasClass("fp-destroyed")) ||
                      (e(".oli-section").each(function () {
                          var a = e(this);
                          parseInt(a.innerHeight(), 10) > c() && a.addClass("is-scrollable");
                      }),
                      a.addClass("oli-fullpage-active"),
                      i.fullpage({
                          menu: "#navigation",
                          lockAnchors: !1,
                          anchors: s,
                          scrollingSpeed: 700,
                          autoScrolling: !0,
                          fitToSection: !0,
                          fitToSectionDelay: 700,
                          scrollBar: !1,
                          easingcss3: "cubic-bezier(0.54, 0.18, 0.36, 0.81)",
                          loopBottom: !1,
                          loopTop: !1,
                          scrollOverflow: !0,
                          animateAnchor: !0,
                          recordHistory: !1,
                          controlArrows: !1,
                          verticalCentered: !1,
                          paddingTop: !1,
                          paddingBottom: !1,
                          sectionSelector: ".oli-section",
                          slideSelector: ".oli-slide",
                          onLeave: function (e, i, s) {
                              1 === i ? (a.addClass("oli-fullpage-intro-active"), o.removeClass("active")) : (a.removeClass("oli-fullpage-intro-active"), o.addClass("active"));
                          },
                          afterLoad: function (e, i) {
                              1 == i ? (a.addClass("oli-fullpage-intro-active"), o.removeClass("active")) : o.addClass("active");
                          },
                      }))
                    : i.hasClass("fullpage-wrapper") &&
                      !i.hasClass("fp-destroyed") &&
                      (a.removeClass("oli-fullpage-active oli-fullpage-intro-active ui-light ui-dark"), e.fn.fullpage.destroy("all"), e(".oli-section").removeClass("is-scrollable"), o.removeClass("active"));
        }
    }
    function m() {
        e("#site-navbar").on("show.bs.collapse hide.bs.collapse", function (a) {
            "show" == a.type ? e(".site-header .navbar-toggler").addClass("open") : e(".site-header .navbar-toggler").removeClass("open");
        }),
            i.off("click"),
            i.on("click", function (i) {
                if ("" !== this.hash) {
                    i.preventDefault();
                    var o = e(this).attr("href");
                    if (a.hasClass("oli-fullpage-active")) {
                        if (!e('[data-anchor="' + o.substr(1) + '"]').length > 0) return;
                        o = o.substr(1);
                        e.fn.fullpage.moveTo(o);
                    } else if (e('[data-anchor="' + o.substr(1) + '"]').length > 0) {
                        o = e('[data-anchor="' + o.substr(1) + '"]');
                        e(window).scrollTop(o.offset().top);
                    } else e(window).scrollTop(e(o).offset().top);
                    !0 === s && (r() >= 1200 || e(".site-header .navbar-toggler").trigger("click"));
                }
            }),
            o.off("click"),
            o.on("click", function (i) {
                if ((i.preventDefault(), r() >= 1200)) {
                    if (!a.hasClass("oli-fullpage-active")) return;
                    e.fn.fullpage.moveTo(1);
                } else e(window).scrollTop(0);
            });
    }
    function g() {
        var a = e(".slider");
        a.length > 0 &&
            (a.hasClass("slick-initialized") ||
                a.slick({
                    slidesToShow: 1,
                    infinite: !0,
                    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
                    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
                }),
            r() >= 576 || (a.hasClass("slick-initialized") && a.hasClass("unslick-sm") && a.slick("unslick")),
            r() >= 768 || (a.hasClass("slick-initialized") && a.hasClass("unslick-md") && a.slick("unslick")),
            r() >= 992 || (a.hasClass("slick-initialized") && a.hasClass("unslick-lg") && a.slick("unslick")),
            r() >= 1200 || (a.hasClass("slick-initialized") && a.hasClass("unslick-xl") && a.slick("unslick")));
    }
    function f() {
        var a = e(".countdown[data-countdown]");
        a.length > 0 &&
            a.each(function () {
                var a = e(this),
                    i = a.data("countdown");
                a.countdown(i, function (e) {
                    a.html(
                        e.strftime(
                            '<div class="countdown-container row"><div class="countdown-item col-6 col-sm"><div class="number">%-D</div><span>Day%!d</span></div><div class="countdown-item col-6 col-sm"><div class="number">%H</div><span>Hours</span></div><div class="countdown-item col-6 col-sm"><div class="number">%M</div><span>Minutes</span></div><div class="countdown-item col-6 col-sm"><div class="number">%S</div><span>Seconds</span></div></div>'
                        )
                    );
                });
            });
    }
    function v() {
        var a = e(".subscribe-form");
        if (a.length < 1) return !0;
        a.each(function () {
            var a = e(this),
                i = a.find(".subscribe-form-result");
            a.find("form").validate({
                submitHandler: function (a) {
                    i.fadeOut(500),
                        e(a).ajaxSubmit({
                            target: i,
                            dataType: "json",
                            resetForm: !0,
                            success: function (s) {
                                alert("ok2"),
                                    i.html(s.message).fadeIn(500),
                                    "error" != s.alert &&
                                        (e(a).clearForm(),
                                        setTimeout(function () {
                                            i.fadeOut(500);
                                        }, 5e3));
                            },
                        });
                },
            });
        });
    }
    function p() {
        var a = e(".contact-form");
        if (a.length < 1) return !0;
        a.each(function () {
            var a = e(this),
                i = a.find(".contact-form-result");
            a.find("form").validate({
                submitHandler: function (a) {
                    i.fadeOut(500),
                        e(a).ajaxSubmit({
                            target: i,
                            dataType: "json",
                            success: function (s) {
                                i.html(s.message).fadeIn(500),
                                    "error" != s.alert &&
                                        (e(a).clearForm(),
                                        setTimeout(function () {
                                            i.fadeOut(500);
                                        }, 5e3));
                            },
                        });
                },
            });
        });
    }
    jQuery(document).ready(function (e) {
        d(), u(), m(), g(), f(), v(), p();
    }),
        e(window).on("load", function () {
            t.delay(n).fadeOut(l);
        }),
        e(window).on("resize", function () {
            u(), m(), g();
        }),
        jQuery(document).ready(function (e) {
           
        });
})(jQuery);
