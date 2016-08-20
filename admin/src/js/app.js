var App = function() {
    var t, e = !1,
        o = !1,
        a = !1,
        i = !1,
        n = [],
        l = "../assets/",
        s = "global/img/",
        r = "global/plugins/",
        c = "global/css/",
        d = {
            blue: "#89C4F4",
            red: "#F3565D",
            green: "#1bbc9b",
            purple: "#9b59b6",
            grey: "#95a5a6",
            yellow: "#F8CB00"
        },
        h = function() {
            "rtl" === $("body").css("direction") && (e = !0), o = !!navigator.userAgent.match(/MSIE 8.0/), a = !!navigator.userAgent.match(/MSIE 9.0/), i = !!navigator.userAgent.match(/MSIE 10.0/), i && $("html").addClass("ie10"), (i || a || o) && $("html").addClass("ie")
        },
        p = function() {
            for (var t = 0; t < n.length; t++) {
                var e = n[t];
                e.call()
            }
        },
        u = function() {
            var t;
            if (o) {
                var e;
                $(window).resize(function() {
                    e != document.documentElement.clientHeight && (t && clearTimeout(t), t = setTimeout(function() {
                        p()
                    }, 50), e = document.documentElement.clientHeight)
                })
            } else $(window).resize(function() {
                t && clearTimeout(t), t = setTimeout(function() {
                    p()
                }, 50)
            })
        },
        f = function() {
            $("body").on("click", ".portlet > .portlet-title > .tools > a.remove", function(t) {
                t.preventDefault();
                var e = $(this).closest(".portlet");
                $("body").hasClass("page-portlet-fullscreen") && $("body").removeClass("page-portlet-fullscreen"), e.find(".portlet-title .fullscreen").tooltip("destroy"), e.find(".portlet-title > .tools > .reload").tooltip("destroy"), e.find(".portlet-title > .tools > .remove").tooltip("destroy"), e.find(".portlet-title > .tools > .config").tooltip("destroy"), e.find(".portlet-title > .tools > .collapse, .portlet > .portlet-title > .tools > .expand").tooltip("destroy"), e.remove()
            }), $("body").on("click", ".portlet > .portlet-title .fullscreen", function(t) {
                t.preventDefault();
                var e = $(this).closest(".portlet");
                if (e.hasClass("portlet-fullscreen")) $(this).removeClass("on"), e.removeClass("portlet-fullscreen"), $("body").removeClass("page-portlet-fullscreen"), e.children(".portlet-body").css("height", "auto");
                else {
                    var o = App.getViewPort().height - e.children(".portlet-title").outerHeight() - parseInt(e.children(".portlet-body").css("padding-top")) - parseInt(e.children(".portlet-body").css("padding-bottom"));
                    $(this).addClass("on"), e.addClass("portlet-fullscreen"), $("body").addClass("page-portlet-fullscreen"), e.children(".portlet-body").css("height", o)
                }
            }), $("body").on("click", ".portlet > .portlet-title > .tools > a.reload", function(t) {
                t.preventDefault();
                var e = $(this).closest(".portlet").children(".portlet-body"),
                    o = $(this).attr("data-url"),
                    a = $(this).attr("data-error-display");
                o ? (App.blockUI({
                    target: e,
                    animate: !0,
                    overlayColor: "none"
                }), $.ajax({
                    type: "GET",
                    cache: !1,
                    url: o,
                    dataType: "html",
                    success: function(t) {
                        App.unblockUI(e), e.html(t), App.initAjax()
                    },
                    error: function(t, o, i) {
                        App.unblockUI(e);
                        var n = "Error on reloading the content. Please check your connection and try again.";
                        "toastr" == a && toastr ? toastr.error(n) : "notific8" == a && $.notific8 ? ($.notific8("zindex", 11500), $.notific8(n, {
                            theme: "ruby",
                            life: 3e3
                        })) : alert(n)
                    }
                })) : (App.blockUI({
                    target: e,
                    animate: !0,
                    overlayColor: "none"
                }), window.setTimeout(function() {
                    App.unblockUI(e)
                }, 1e3))
            }), $('.portlet .portlet-title a.reload[data-load="true"]').click(), $("body").on("click", ".portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand", function(t) {
                t.preventDefault();
                var e = $(this).closest(".portlet").children(".portlet-body");
                $(this).hasClass("collapse") ? ($(this).removeClass("collapse").addClass("expand"), e.slideUp(200)) : ($(this).removeClass("expand").addClass("collapse"), e.slideDown(200))
            })
        },
        b = function() {
            if ($().uniform) {
                var t = $("input[type=checkbox]:not(.toggle, .md-check, .md-radiobtn, .make-switch, .icheck), input[type=radio]:not(.toggle, .md-check, .md-radiobtn, .star, .make-switch, .icheck)");
                t.size() > 0 && t.each(function() {
                    0 === $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
                })
            }
        },
        g = function() {
            if ($("body").on("click", ".md-checkbox > label, .md-radio > label", function() {
                    var t = $(this),
                        e = $(this).children("span:first-child");
                    e.addClass("inc");
                    var o = e.clone(!0);
                    e.before(o), $("." + e.attr("class") + ":last", t).remove()
                }), $("body").hasClass("page-md")) {
                var t, e, o, a, i;
                $("body").on("click", "a.btn, button.btn, input.btn, label.btn", function(n) {
                    t = $(this), 0 == t.find(".md-click-circle").length && t.prepend("<span class='md-click-circle'></span>"), e = t.find(".md-click-circle"), e.removeClass("md-click-animate"), e.height() || e.width() || (o = Math.max(t.outerWidth(), t.outerHeight()), e.css({
                        height: o,
                        width: o
                    })), a = n.pageX - t.offset().left - e.width() / 2, i = n.pageY - t.offset().top - e.height() / 2, e.css({
                        top: i + "px",
                        left: a + "px"
                    }).addClass("md-click-animate"), setTimeout(function() {
                        e.remove()
                    }, 1e3)
                })
            }
            var n = function(t) {
                "" != t.val() ? t.addClass("edited") : t.removeClass("edited")
            };
            $("body").on("keydown", ".form-md-floating-label .form-control", function(t) {
                n($(this))
            }), $("body").on("blur", ".form-md-floating-label .form-control", function(t) {
                n($(this))
            }), $(".form-md-floating-label .form-control").each(function() {
                $(this).val().length > 0 && $(this).addClass("edited")
            })
        },
        m = function() {
            $().iCheck && $(".icheck").each(function() {
                var t = $(this).attr("data-checkbox") ? $(this).attr("data-checkbox") : "icheckbox_minimal-grey",
                    e = $(this).attr("data-radio") ? $(this).attr("data-radio") : "iradio_minimal-grey";
                t.indexOf("_line") > -1 || e.indexOf("_line") > -1 ? $(this).iCheck({
                    checkboxClass: t,
                    radioClass: e,
                    insert: '<div class="icheck_line-icon"></div>' + $(this).attr("data-label")
                }) : $(this).iCheck({
                    checkboxClass: t,
                    radioClass: e
                })
            })
        },
        v = function() {
            $().bootstrapSwitch && $(".make-switch").bootstrapSwitch()
        },
        y = function() {
            $().confirmation && $("[data-toggle=confirmation]").confirmation({
                container: "body",
                btnOkClass: "btn btn-sm btn-success",
                btnCancelClass: "btn btn-sm btn-danger"
            })
        },
        C = function() {
            $("body").on("shown.bs.collapse", ".accordion.scrollable", function(t) {
                App.scrollTo($(t.target))
            })
        },
        k = function() {
        },
        x = function() {
            $("body").on("hide.bs.modal", function() {
                $(".modal:visible").size() > 1 && $("html").hasClass("modal-open") === !1 ? $("html").addClass("modal-open") : $(".modal:visible").size() <= 1 && $("html").removeClass("modal-open")
            }), $("body").on("show.bs.modal", ".modal", function() {
                $(this).hasClass("modal-scroll") && $("body").addClass("modal-open-noscroll")
            }), $("body").on("hide.bs.modal", ".modal", function() {
                $("body").removeClass("modal-open-noscroll")
            }), $("body").on("hidden.bs.modal", ".modal:not(.modal-cached)", function() {
                $(this).removeData("bs.modal")
            })
        },
        w = function() {
            $(".tooltips").tooltip(), $(".portlet > .portlet-title .fullscreen").tooltip({
                container: "body",
                title: "Fullscreen"
            }), $(".portlet > .portlet-title > .tools > .reload").tooltip({
                container: "body",
                title: "Reload"
            }), $(".portlet > .portlet-title > .tools > .remove").tooltip({
                container: "body",
                title: "Remove"
            }), $(".portlet > .portlet-title > .tools > .config").tooltip({
                container: "body",
                title: "Settings"
            }), $(".portlet > .portlet-title > .tools > .collapse, .portlet > .portlet-title > .tools > .expand").tooltip({
                container: "body",
                title: "Collapse/Expand"
            })
        },
        I = function() {
            $("body").on("click", ".dropdown-menu.hold-on-click", function(t) {
                t.stopPropagation()
            })
        },
        z = function() {
            $("body").on("click", '[data-close="alert"]', function(t) {
                $(this).parent(".alert").hide(), $(this).closest(".note").hide(), t.preventDefault()
            }), $("body").on("click", '[data-close="note"]', function(t) {
                $(this).closest(".note").hide(), t.preventDefault()
            }), $("body").on("click", '[data-remove="note"]', function(t) {
                $(this).closest(".note").remove(), t.preventDefault()
            })
        },
        A = function() {
            $('[data-hover="dropdown"]').not(".hover-initialized").each(function() {
                $(this).dropdownHover(), $(this).addClass("hover-initialized")
            })
        },
        S = function() {
            "function" == typeof autosize && autosize(document.querySelector("textarea.autosizeme"))
        },
        P = function() {
            $(".popovers").popover(), $(document).on("click.bs.popover.data-api", function(e) {
                t && t.popover("hide")
            })
        },
        T = function() {
            App.initSlimScroll(".scroller")
        },
        U = function() {
            jQuery.fancybox && $(".fancybox-button").size() > 0 && $(".fancybox-button").fancybox({
                groupAttr: "data-rel",
                prevEffect: "none",
                nextEffect: "none",
                closeBtn: !0,
                helpers: {
                    title: {
                        type: "inside"
                    }
                }
            })
        },
        D = function() {
            $().counterUp && $("[data-counter='counterup']").counterUp({
                delay: 10,
                time: 1e3
            })
        },
        E = function() {
            (o || a) && $("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function() {
                var t = $(this);
                "" === t.val() && "" !== t.attr("placeholder") && t.addClass("placeholder").val(t.attr("placeholder")), t.focus(function() {
                    t.val() == t.attr("placeholder") && t.val("")
                }), t.blur(function() {
                    ("" === t.val() || t.val() == t.attr("placeholder")) && t.val(t.attr("placeholder"))
                })
            })
        },
        G = function() {
            $().select2 && ($.fn.select2.defaults.set("theme", "bootstrap"), $(".select2me").select2({
                placeholder: "Select",
                width: "auto",
                allowClear: !0
            }))
        },
        H = function() {
            $("[data-auto-height]").each(function() {
                var t = $(this),
                    e = $("[data-height]", t),
                    o = 0,
                    a = t.attr("data-mode"),
                    i = parseInt(t.attr("data-offset") ? t.attr("data-offset") : 0);
                e.each(function() {
                    "height" == $(this).attr("data-height") ? $(this).css("height", "") : $(this).css("min-height", "");
                    var t = "base-height" == a ? $(this).outerHeight() : $(this).outerHeight(!0);
                    t > o && (o = t)
                }), o += i, e.each(function() {
                    "height" == $(this).attr("data-height") ? $(this).css("height", o) : $(this).css("min-height", o)
                }), t.attr("data-related") && $(t.attr("data-related")).css("height", t.height())
            })
        };
    return {
        init: function() {
            h(), u(), g(), b(), m(), v(), T(), U(), G(), f(), z(), I(), k(), w(), P(), C(), x(), y(), S(), D(), this.addResizeHandler(H), E()
        },
        initAjax: function() {
            b(), m(), v(), A(), T(), G(), U(), I(), w(), P(), C(), y()
        },
        initComponents: function() {
            this.initAjax()
        },
        setLastPopedPopover: function(e) {
            t = e
        },
        addResizeHandler: function(t) {
            n.push(t)
        },
        runResizeHandlers: function() {
            p()
        },
        scrollTo: function(t, e) {
            var o = t && t.size() > 0 ? t.offset().top : 0;
            t && ($("body").hasClass("page-header-fixed") ? o -= $(".page-header").height() : $("body").hasClass("page-header-top-fixed") ? o -= $(".page-header-top").height() : $("body").hasClass("page-header-menu-fixed") && (o -= $(".page-header-menu").height()), o += e ? e : -1 * t.height()), $("html,body").animate({
                scrollTop: o
            }, "slow")
        },
        initSlimScroll: function(t) {
            $(t).each(function() {
                if (!$(this).attr("data-initialized")) {
                    var t;
                    t = $(this).attr("data-height") ? $(this).attr("data-height") : $(this).css("height"), $(this).slimScroll({
                        allowPageScroll: !0,
                        size: "7px",
                        color: $(this).attr("data-handle-color") ? $(this).attr("data-handle-color") : "#bbb",
                        wrapperClass: $(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : "slimScrollDiv",
                        railColor: $(this).attr("data-rail-color") ? $(this).attr("data-rail-color") : "#eaeaea",
                        position: e ? "left" : "right",
                        height: t,
                        alwaysVisible: "1" == $(this).attr("data-always-visible") ? !0 : !1,
                        railVisible: "1" == $(this).attr("data-rail-visible") ? !0 : !1,
                        disableFadeOut: !0
                    }), $(this).attr("data-initialized", "1")
                }
            })
        },
        destroySlimScroll: function(t) {
            $(t).each(function() {
                if ("1" === $(this).attr("data-initialized")) {
                    $(this).removeAttr("data-initialized"), $(this).removeAttr("style");
                    var t = {};
                    $(this).attr("data-handle-color") && (t["data-handle-color"] = $(this).attr("data-handle-color")), $(this).attr("data-wrapper-class") && (t["data-wrapper-class"] = $(this).attr("data-wrapper-class")), $(this).attr("data-rail-color") && (t["data-rail-color"] = $(this).attr("data-rail-color")), $(this).attr("data-always-visible") && (t["data-always-visible"] = $(this).attr("data-always-visible")), $(this).attr("data-rail-visible") && (t["data-rail-visible"] = $(this).attr("data-rail-visible")), $(this).slimScroll({
                        wrapperClass: $(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : "slimScrollDiv",
                        destroy: !0
                    });
                    var e = $(this);
                    $.each(t, function(t, o) {
                        e.attr(t, o)
                    })
                }
            })
        },
        scrollTop: function() {
            App.scrollTo()
        },
        blockUI: function(t) {
            t = $.extend(!0, {}, t);
            var e = "";
            if (e = t.animate ? '<div class="loading-message ' + (t.boxed ? "loading-message-boxed" : "") + '"><div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>' : t.iconOnly ? '<div class="loading-message ' + (t.boxed ? "loading-message-boxed" : "") + '"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""></div>' : t.textOnly ? '<div class="loading-message ' + (t.boxed ? "loading-message-boxed" : "") + '"><span>&nbsp;&nbsp;' + (t.message ? t.message : "LOADING...") + "</span></div>" : '<div class="loading-message ' + (t.boxed ? "loading-message-boxed" : "") + '"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (t.message ? t.message : "LOADING...") + "</span></div>", t.target) {
                var o = $(t.target);
                o.height() <= $(window).height() && (t.cenrerY = !0), o.block({
                    message: e,
                    baseZ: t.zIndex ? t.zIndex : 1e3,
                    centerY: void 0 !== t.cenrerY ? t.cenrerY : !1,
                    css: {
                        top: "10%",
                        border: "0",
                        padding: "0",
                        backgroundColor: "none"
                    },
                    overlayCSS: {
                        backgroundColor: t.overlayColor ? t.overlayColor : "#555",
                        opacity: t.boxed ? .05 : .1,
                        cursor: "wait"
                    }
                })
            } else $.blockUI({
                message: e,
                baseZ: t.zIndex ? t.zIndex : 1e3,
                css: {
                    border: "0",
                    padding: "0",
                    backgroundColor: "none"
                },
                overlayCSS: {
                    backgroundColor: t.overlayColor ? t.overlayColor : "#555",
                    opacity: t.boxed ? .05 : .1,
                    cursor: "wait"
                }
            })
        },
        unblockUI: function(t) {
            t ? $(t).unblock({
                onUnblock: function() {
                    $(t).css("position", ""), $(t).css("zoom", "")
                }
            }) : $.unblockUI()
        },
        startPageLoading: function(t) {
            t && t.animate ? ($(".page-spinner-bar").remove(), $("body").append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')) : ($(".page-loading").remove(), $("body").append('<div class="page-loading"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (t && t.message ? t.message : "Loading...") + "</span></div>"))
        },
        stopPageLoading: function() {
            $(".page-loading, .page-spinner-bar").remove()
        },
        alert: function(t) {
            t = $.extend(!0, {
                container: "",
                place: "append",
                type: "success",
                message: "",
                close: !0,
                reset: !0,
                focus: !0,
                closeInSeconds: 0,
                icon: ""
            }, t);
            var e = App.getUniqueID("App_alert"),
                o = '<div id="' + e + '" class="custom-alerts alert alert-' + t.type + ' fade in">' + (t.close ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' : "") + ("" !== t.icon ? '<i class="fa-lg fa fa-' + t.icon + '"></i>  ' : "") + t.message + "</div>";
            return t.reset && $(".custom-alerts").remove(), t.container ? "append" == t.place ? $(t.container).append(o) : $(t.container).prepend(o) : 1 === $(".page-fixed-main-content").size() ? $(".page-fixed-main-content").prepend(o) : ($("body").hasClass("page-container-bg-solid") || $("body").hasClass("page-content-white")) && 0 === $(".page-head").size() ? $(".page-title").after(o) : $(".page-bar").size() > 0 ? $(".page-bar").after(o) : $(".page-breadcrumb, .breadcrumbs").after(o), t.focus && App.scrollTo($("#" + e)), t.closeInSeconds > 0 && setTimeout(function() {
                $("#" + e).remove()
            }, 1e3 * t.closeInSeconds), e
        },
        initUniform: function(t) {
            t ? $(t).each(function() {
                0 === $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
            }) : b()
        },
        updateUniform: function(t) {
            $.uniform.update(t)
        },
        initFancybox: function() {
            U()
        },
        getActualVal: function(t) {
            return t = $(t), t.val() === t.attr("placeholder") ? "" : t.val()
        },
        getURLParameter: function(t) {
            var e, o, a = window.location.search.substring(1),
                i = a.split("&");
            for (e = 0; e < i.length; e++)
                if (o = i[e].split("="), o[0] == t) return unescape(o[1]);
            return null
        },
        isTouchDevice: function() {
            try {
                return document.createEvent("TouchEvent"), !0
            } catch (t) {
                return !1
            }
        },
        getViewPort: function() {
            var t = window,
                e = "inner";
            return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                width: t[e + "Width"],
                height: t[e + "Height"]
            }
        },
        getUniqueID: function(t) {
            return "prefix_" + Math.floor(Math.random() * (new Date).getTime())
        },
        isIE8: function() {
            return o
        },
        isIE9: function() {
            return a
        },
        isRTL: function() {
            return e
        },
        isAngularJsApp: function() {
            return "undefined" == typeof angular ? !1 : !0
        },
        getAssetsPath: function() {
            return l
        },
        setAssetsPath: function(t) {
            l = t
        },
        setGlobalImgPath: function(t) {
            s = t
        },
        getGlobalImgPath: function() {
            return l + s
        },
        setGlobalPluginsPath: function(t) {
            r = t
        },
        getGlobalPluginsPath: function() {
            return l + r
        },
        getGlobalCssPath: function() {
            return l + c
        },
        getBrandColor: function(t) {
            return d[t] ? d[t] : ""
        },
        getResponsiveBreakpoint: function(t) {
            var e = {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200
            };
            return e[t] ? e[t] : 0
        }
    }
}();
jQuery(document).ready(function() {});
var Layout = function() {
    var e = "layouts/layout/img/",
        a = "layouts/layout/css/",
        t = App.getResponsiveBreakpoint("md"),
        i = function() {
            var e, a = $(".page-content"),
                i = $(".page-sidebar"),
                s = $("body");
            if (s.hasClass("page-footer-fixed") === !0 && s.hasClass("page-sidebar-fixed") === !1) {
                var o = App.getViewPort().height - $(".page-footer").outerHeight() - $(".page-header").outerHeight();
                a.height() < o && a.attr("style", "min-height:" + o + "px")
            } else {
                if (s.hasClass("page-sidebar-fixed")) e = n(), s.hasClass("page-footer-fixed") === !1 && (e -= $(".page-footer").outerHeight());
                else {
                    var r = $(".page-header").outerHeight(),
                        d = $(".page-footer").outerHeight();
                    e = App.getViewPort().width < t ? App.getViewPort().height - r - d : i.height() + 20, e + r + d <= App.getViewPort().height && (e = App.getViewPort().height - r - d)
                }
                a.attr("style", "min-height:" + e + "px")
            }
        },
        s = function(e, a) {
            var i = location.hash.toLowerCase(),
                s = $(".page-sidebar-menu");
            if ("click" === e || "set" === e ? a = $(a) : "match" === e && s.find("li > a").each(function() {
                    var e = $(this).attr("href").toLowerCase();
                    return e.length > 1 && i.substr(1, e.length - 1) == e.substr(1) ? void(a = $(this)) : void 0
                }), a && 0 != a.size() && "javascript:;" !== a.attr("href").toLowerCase() && "#" !== a.attr("href").toLowerCase()) {
                parseInt(s.data("slide-speed")), s.data("keep-expanded");
                s.hasClass("page-sidebar-menu-hover-submenu") === !1 ? s.find("li.nav-item.open").each(function() {
                    var e = !1;
                    $(this).find("li").each(function() {
                        return $(this).find(" > a").attr("href") === a.attr("href") ? void(e = !0) : void 0
                    }), e !== !0 && ($(this).removeClass("open"), $(this).find("> a > .arrow.open").removeClass("open"), $(this).find("> .sub-menu").slideUp())
                }) : s.find("li.open").removeClass("open"), s.find("li.active").removeClass("active"), s.find("li > a > .selected").remove(), a.parents("li").each(function() {
                    $(this).addClass("active"), $(this).find("> a > span.arrow").addClass("open"), 1 === $(this).parent("ul.page-sidebar-menu").size() && $(this).find("> a").append('<span class="selected"></span>'), 1 === $(this).children("ul.sub-menu").size() && $(this).addClass("open")
                }), "click" === e && App.getViewPort().width < t && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click()
            }
        },
        o = function() {
            $(".page-sidebar-menu").on("click", "li > a.nav-toggle, li > a > span.nav-toggle", function(e) {
                var a = $(this).closest(".nav-item").children(".nav-link");
                if (!(App.getViewPort().width >= t && !$(".page-sidebar-menu").attr("data-initialized") && $("body").hasClass("page-sidebar-closed") && 1 === a.parent("li").parent(".page-sidebar-menu").size())) {
                    var s = a.next().hasClass("sub-menu");
                    if (!(App.getViewPort().width >= t && 1 === a.parents(".page-sidebar-menu-hover-submenu").size())) {
                        if (s === !1) return void(App.getViewPort().width < t && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click());
                        var o = a.parent().parent(),
                            n = a,
                            r = $(".page-sidebar-menu"),
                            d = a.next(),
                            p = r.data("auto-scroll"),
                            l = parseInt(r.data("slide-speed")),
                            c = r.data("keep-expanded");
                        c || (o.children("li.open").children("a").children(".arrow").removeClass("open"), o.children("li.open").children(".sub-menu:not(.always-open)").slideUp(l), o.children("li.open").removeClass("open"));
                        var h = -200;
                        d.is(":visible") ? ($(".arrow", n).removeClass("open"), n.parent().removeClass("open"), d.slideUp(l, function() {
                            p === !0 && $("body").hasClass("page-sidebar-closed") === !1 && ($("body").hasClass("page-sidebar-fixed") ? r.slimScroll({
                                scrollTo: n.position().top
                            }) : App.scrollTo(n, h)), i()
                        })) : s && ($(".arrow", n).addClass("open"), n.parent().addClass("open"), d.slideDown(l, function() {
                            p === !0 && $("body").hasClass("page-sidebar-closed") === !1 && ($("body").hasClass("page-sidebar-fixed") ? r.slimScroll({
                                scrollTo: n.position().top
                            }) : App.scrollTo(n, h)), i()
                        })), e.preventDefault()
                    }
                }
            }), App.isAngularJsApp() && $(".page-sidebar-menu li > a").on("click", function(e) {
                App.getViewPort().width < t && $(this).next().hasClass("sub-menu") === !1 && $(".page-header .responsive-toggler").click()
            }), $(".page-sidebar").on("click", " li > a.ajaxify", function(e) {
                e.preventDefault(), App.scrollTop();
                var a = $(this).attr("href"),
                    i = $(".page-sidebar ul"),
                    s = ($(".page-content"), $(".page-content .page-content-body"));
                i.children("li.active").removeClass("active"), i.children("arrow.open").removeClass("open"), $(this).parents("li").each(function() {
                    $(this).addClass("active"), $(this).children("a > span.arrow").addClass("open")
                }), $(this).parents("li").addClass("active"), App.getViewPort().width < t && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click(), App.startPageLoading();
                var o = $(this);
                $.ajax({
                    type: "GET",
                    cache: !1,
                    url: a,
                    dataType: "html",
                    success: function(e) {
                        0 === o.parents("li.open").size() && $(".page-sidebar-menu > li.open > a").click(), App.stopPageLoading(), s.html(e), Layout.fixContentHeight(), App.initAjax()
                    },
                    error: function(e, a, t) {
                        App.stopPageLoading(), s.html("<h4>Could not load the requested content.</h4>")
                    }
                })
            }), $(".page-content").on("click", ".ajaxify", function(e) {
                e.preventDefault(), App.scrollTop();
                var a = $(this).attr("href"),
                    i = ($(".page-content"), $(".page-content .page-content-body"));
                App.startPageLoading(), App.getViewPort().width < t && $(".page-sidebar").hasClass("in") && $(".page-header .responsive-toggler").click(), $.ajax({
                    type: "GET",
                    cache: !1,
                    url: a,
                    dataType: "html",
                    success: function(e) {
                        App.stopPageLoading(), i.html(e), Layout.fixContentHeight(), App.initAjax()
                    },
                    error: function(e, a, t) {
                        i.html("<h4>Could not load the requested content.</h4>"), App.stopPageLoading()
                    }
                })
            }), $(document).on("click", ".page-header-fixed-mobile .page-header .responsive-toggler", function() {
                App.scrollTop()
            }), d(), $(".page-sidebar").on("click", ".sidebar-search .remove", function(e) {
                e.preventDefault(), $(".sidebar-search").removeClass("open")
            }), $(".page-sidebar .sidebar-search").on("keypress", "input.form-control", function(e) {
                return 13 == e.which ? ($(".sidebar-search").submit(), !1) : void 0
            }), $(".sidebar-search .submit").on("click", function(e) {
                e.preventDefault(), $("body").hasClass("page-sidebar-closed") && $(".sidebar-search").hasClass("open") === !1 ? (1 === $(".page-sidebar-fixed").size() && $(".page-sidebar .sidebar-toggler").click(), $(".sidebar-search").addClass("open")) : $(".sidebar-search").submit()
            }), 0 !== $(".sidebar-search").size() && ($(".sidebar-search .input-group").on("click", function(e) {
                e.stopPropagation()
            }), $("body").on("click", function() {
                $(".sidebar-search").hasClass("open") && $(".sidebar-search").removeClass("open")
            }))
        },
        n = function() {
            var e = App.getViewPort().height - $(".page-header").outerHeight(!0);
            return $("body").hasClass("page-footer-fixed") && (e -= $(".page-footer").outerHeight()), e
        },
        r = function() {
            var e = $(".page-sidebar-menu");
            return App.destroySlimScroll(e), 0 === $(".page-sidebar-fixed").size() ? void i() : void(App.getViewPort().width >= t && (e.attr("data-height", n()), App.initSlimScroll(e), i()))
        },
        d = function() {
            var e = $("body");
            e.hasClass("page-sidebar-fixed") && $(".page-sidebar").on("mouseenter", function() {
                e.hasClass("page-sidebar-closed") && $(this).find(".page-sidebar-menu").removeClass("page-sidebar-menu-closed")
            }).on("mouseleave", function() {
                e.hasClass("page-sidebar-closed") && $(this).find(".page-sidebar-menu").addClass("page-sidebar-menu-closed")
            })
        },
        p = function() {
            var e = $("body");
            $.cookie && "1" === $.cookie("sidebar_closed") && App.getViewPort().width >= t && ($("body").addClass("page-sidebar-closed"), $(".page-sidebar-menu").addClass("page-sidebar-menu-closed")), $("body").on("click", ".sidebar-toggler", function(a) {
                var t = $(".page-sidebar"),
                    i = $(".page-sidebar-menu");
                $(".sidebar-search", t).removeClass("open"), e.hasClass("page-sidebar-closed") ? (e.removeClass("page-sidebar-closed"), i.removeClass("page-sidebar-menu-closed"), $.cookie && $.cookie("sidebar_closed", "0")) : (e.addClass("page-sidebar-closed"), i.addClass("page-sidebar-menu-closed"), e.hasClass("page-sidebar-fixed") && i.trigger("mouseleave"), $.cookie && $.cookie("sidebar_closed", "1")), $(window).trigger("resize")
            })
        },
        l = function() {
            $(".page-header").on("click", '.hor-menu a[data-toggle="tab"]', function(e) {
                e.preventDefault();
                var a = $(".hor-menu .nav"),
                    t = a.find("li.current");
                $("li.active", t).removeClass("active"), $(".selected", t).remove();
                var i = $(this).parents("li").last();
                i.addClass("current"), i.find("a:first").append('<span class="selected"></span>')
            }), $(".page-header").on("click", ".search-form", function(e) {
                $(this).addClass("open"), $(this).find(".form-control").focus(), $(".page-header .search-form .form-control").on("blur", function(e) {
                    $(this).closest(".search-form").removeClass("open"), $(this).unbind("blur")
                })
            }), $(".page-header").on("keypress", ".hor-menu .search-form .form-control", function(e) {
                return 13 == e.which ? ($(this).closest(".search-form").submit(), !1) : void 0
            }), $(".page-header").on("mousedown", ".search-form.open .submit", function(e) {
                e.preventDefault(), e.stopPropagation(), $(this).closest(".search-form").submit()
            }), $('[data-hover="megamenu-dropdown"]').not(".hover-initialized").each(function() {
                $(this).dropdownHover(), $(this).addClass("hover-initialized")
            }), $(document).on("click", ".mega-menu-dropdown .dropdown-menu", function(e) {
                e.stopPropagation()
            })
        },
        c = function() {
            $("body").on("shown.bs.tab", 'a[data-toggle="tab"]', function() {
                i()
            })
        },
        h = function() {
            var e = 300,
                a = 500;
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ? $(window).bind("touchend touchcancel touchleave", function(t) {
                $(this).scrollTop() > e ? $(".scroll-to-top").fadeIn(a) : $(".scroll-to-top").fadeOut(a)
            }) : $(window).scroll(function() {
                $(this).scrollTop() > e ? $(".scroll-to-top").fadeIn(a) : $(".scroll-to-top").fadeOut(a)
            }), $(".scroll-to-top").click(function(e) {
                return e.preventDefault(), $("html, body").animate({
                    scrollTop: 0
                }, a), !1
            })
        },
        g = function() {
            $(".full-height-content").each(function() {
                var e, a = $(this);
                if (e = App.getViewPort().height - $(".page-header").outerHeight(!0) - $(".page-footer").outerHeight(!0) - $(".page-title").outerHeight(!0) - $(".page-bar").outerHeight(!0), a.hasClass("portlet")) {
                    var i = a.find(".portlet-body");
                    App.destroySlimScroll(i.find(".full-height-content-body")), e = e - a.find(".portlet-title").outerHeight(!0) - parseInt(a.find(".portlet-body").css("padding-top")) - parseInt(a.find(".portlet-body").css("padding-bottom")) - 5, App.getViewPort().width >= t && a.hasClass("full-height-content-scrollable") ? (e -= 35, i.find(".full-height-content-body").css("height", e), App.initSlimScroll(i.find(".full-height-content-body"))) : i.css("min-height", e)
                } else App.destroySlimScroll(a.find(".full-height-content-body")), App.getViewPort().width >= t && a.hasClass("full-height-content-scrollable") ? (e -= 35, a.find(".full-height-content-body").css("height", e), App.initSlimScroll(a.find(".full-height-content-body"))) : a.css("min-height", e)
            })
        };
    return {
        initHeader: function() {
            l()
        },
        setSidebarMenuActiveLink: function(e, a) {
            s(e, a)
        },
        initSidebar: function() {
            r(), o(), p(), App.isAngularJsApp() && s("match"), App.addResizeHandler(r)
        },
        initContent: function() {
            g(), c(), App.addResizeHandler(i), App.addResizeHandler(g)
        },
        initFooter: function() {
            h()
        },
        init: function() {
            this.initHeader(), this.initSidebar(), this.initContent(), this.initFooter()
        },
        fixContentHeight: function() {
            i()
        },
        initFixedSidebarHoverEffect: function() {
            d()
        },
        initFixedSidebar: function() {
            r()
        },
        getLayoutImgPath: function() {
            return App.getAssetsPath() + e
        },
        getLayoutCssPath: function() {
            return App.getAssetsPath() + a
        }
    }
}();
App.isAngularJsApp() === !1 && jQuery(document).ready(function() {});
var QuickSidebar = function() {
    var i = function() {
            $(".dropdown-quick-sidebar-toggler a, .page-quick-sidebar-toggler, .quick-sidebar-toggler").click(function(i) {
                $("body").toggleClass("page-quick-sidebar-open")
            })
        },
        a = function() {
            var i = $(".page-quick-sidebar-wrapper"),
                a = i.find(".page-quick-sidebar-chat"),
                e = function() {
                    var e, t = i.find(".page-quick-sidebar-chat-users");
                    e = i.height() - i.find(".nav-tabs").outerHeight(!0), App.destroySlimScroll(t), t.attr("data-height", e), App.initSlimScroll(t);
                    var r = a.find(".page-quick-sidebar-chat-user-messages"),
                        s = e - a.find(".page-quick-sidebar-chat-user-form").outerHeight(!0);
                    s -= a.find(".page-quick-sidebar-nav").outerHeight(!0), App.destroySlimScroll(r), r.attr("data-height", s), App.initSlimScroll(r)
                };
            e(), App.addResizeHandler(e), i.find(".page-quick-sidebar-chat-users .media-list > .media").click(function() {
                a.addClass("page-quick-sidebar-content-item-shown")
            }), i.find(".page-quick-sidebar-chat-user .page-quick-sidebar-back-to-list").click(function() {
                a.removeClass("page-quick-sidebar-content-item-shown")
            });
            var t = function(i) {
                i.preventDefault();
                var e = a.find(".page-quick-sidebar-chat-user-messages"),
                    t = a.find(".page-quick-sidebar-chat-user-form .form-control"),
                    r = t.val();
                if (0 !== r.length) {
                    var s = function(i, a, e, t, r) {
                            var s = "";
                            return s += '<div class="post ' + i + '">', s += '<img class="avatar" alt="" src="' + Layout.getLayoutImgPath() + t + '.jpg"/>', s += '<div class="message">', s += '<span class="arrow"></span>', s += '<a href="#" class="name">Bob Nilson</a>&nbsp;', s += '<span class="datetime">' + a + "</span>", s += '<span class="body">', s += r, s += "</span>", s += "</div>", s += "</div>"
                        },
                        n = new Date,
                        c = s("out", n.getHours() + ":" + n.getMinutes(), "Bob Nilson", "avatar3", r);
                    c = $(c), e.append(c), e.slimScroll({
                        scrollTo: "1000000px"
                    }), t.val(""), setTimeout(function() {
                        var i = new Date,
                            a = s("in", i.getHours() + ":" + i.getMinutes(), "Ella Wong", "avatar2", "Lorem ipsum doloriam nibh...");
                        a = $(a), e.append(a), e.slimScroll({
                            scrollTo: "1000000px"
                        })
                    }, 3e3)
                }
            };
            a.find(".page-quick-sidebar-chat-user-form .btn").click(t), a.find(".page-quick-sidebar-chat-user-form .form-control").keypress(function(i) {
                return 13 == i.which ? (t(i), !1) : void 0
            })
        },
        e = function() {
            var i = $(".page-quick-sidebar-wrapper"),
                a = (i.find(".page-quick-sidebar-alerts"), function() {
                    var a, e = i.find(".page-quick-sidebar-alerts-list");
                    a = i.height() - i.find(".nav-justified > .nav-tabs").outerHeight(), App.destroySlimScroll(e), e.attr("data-height", a), App.initSlimScroll(e)
                });
            a(), App.addResizeHandler(a)
        },
        t = function() {
            var i = $(".page-quick-sidebar-wrapper"),
                a = (i.find(".page-quick-sidebar-settings"), function() {
                    var a, e = i.find(".page-quick-sidebar-settings-list");
                    a = i.height() - i.find(".nav-justified > .nav-tabs").outerHeight(), App.destroySlimScroll(e), e.attr("data-height", a), App.initSlimScroll(e)
                });
            a(), App.addResizeHandler(a)
        };
    return {
        init: function() {
            i(), a(), e(), t()
        }
    }
}();
App.isAngularJsApp() === !1 && jQuery(document).ready(function() {});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Improved by keenthemes for Metronic Theme
 * Version: 1.3.2
 *
 */
! function(e) {
    jQuery.fn.extend({
        slimScroll: function(i) {
            var o = {
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px",
                    animate: !0
                },
                a = e.extend(o, i);
            return this.each(function() {
                function o(t) {
                    if (u) {
                        var t = t || window.event,
                            i = 0;
                        t.wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3);
                        var o = t.target || t.srcTarget || t.srcElement;
                        e(o).closest("." + a.wrapperClass).is(S.parent()) && r(i, !0), t.preventDefault && !y && t.preventDefault(), y || (t.returnValue = !1)
                    }
                }

                function r(e, t, i) {
                    y = !1;
                    var o = e,
                        r = S.outerHeight() - M.outerHeight();
                    if (t && (o = parseInt(M.css("top")) + e * parseInt(a.wheelStep) / 100 * M.outerHeight(), o = Math.min(Math.max(o, 0), r), o = e > 0 ? Math.ceil(o) : Math.floor(o), M.css({
                            top: o + "px"
                        })), v = parseInt(M.css("top")) / (S.outerHeight() - M.outerHeight()), o = v * (S[0].scrollHeight - S.outerHeight()), i) {
                        o = e;
                        var s = o / S[0].scrollHeight * S.outerHeight();
                        s = Math.min(Math.max(s, 0), r), M.css({
                            top: s + "px"
                        })
                    }
                    "scrollTo" in a && a.animate ? S.animate({
                        scrollTop: o
                    }) : S.scrollTop(o), S.trigger("slimscrolling", ~~o), l(), c()
                }

                function s() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }

                function n() {
                    f = Math.max(S.outerHeight() / S[0].scrollHeight * S.outerHeight(), m), M.css({
                        height: f + "px"
                    });
                    var e = f == S.outerHeight() ? "none" : "block";
                    M.css({
                        display: e
                    })
                }

                function l() {
                    if (n(), clearTimeout(p), v == ~~v) {
                        if (y = a.allowPageScroll, b != v) {
                            var e = 0 == ~~v ? "top" : "bottom";
                            S.trigger("slimscroll", e)
                        }
                    } else y = !1;
                    return b = v, f >= S.outerHeight() ? void(y = !0) : (M.stop(!0, !0).fadeIn("fast"), void(a.railVisible && H.stop(!0, !0).fadeIn("fast")))
                }

                function c() {
                    a.alwaysVisible || (p = setTimeout(function() {
                        a.disableFadeOut && u || h || d || (M.fadeOut("slow"), H.fadeOut("slow"))
                    }, 1e3))
                }
                var u, h, d, p, g, f, v, b, w = "<div></div>",
                    m = 30,
                    y = !1,
                    S = e(this);
                if ("ontouchstart" in window && window.navigator.msPointerEnabled && S.css("-ms-touch-action", "none"), S.parent().hasClass(a.wrapperClass)) {
                    var E = S.scrollTop();
                    if (M = S.parent().find("." + a.barClass), H = S.parent().find("." + a.railClass), n(), e.isPlainObject(i)) {
                        if ("height" in i && "auto" == i.height) {
                            S.parent().css("height", "auto"), S.css("height", "auto");
                            var x = S.parent().parent().height();
                            S.parent().css("height", x), S.css("height", x)
                        }
                        if ("scrollTo" in i) E = parseInt(a.scrollTo);
                        else if ("scrollBy" in i) E += parseInt(a.scrollBy);
                        else if ("destroy" in i) return M.remove(), H.remove(), void S.unwrap();
                        r(E, !1, !0)
                    }
                } else {
                    a.height = "auto" == i.height ? S.parent().height() : i.height;
                    var C = e(w).addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    S.css({
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    var H = e(w).addClass(a.railClass).css({
                            width: a.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: a.alwaysVisible && a.railVisible ? "block" : "none",
                            "border-radius": a.railBorderRadius,
                            background: a.railColor,
                            opacity: a.railOpacity,
                            zIndex: 90
                        }),
                        M = e(w).addClass(a.barClass).css({
                            background: a.color,
                            width: a.size,
                            position: "absolute",
                            top: 0,
                            opacity: a.opacity,
                            display: a.alwaysVisible ? "block" : "none",
                            "border-radius": a.borderRadius,
                            BorderRadius: a.borderRadius,
                            MozBorderRadius: a.borderRadius,
                            WebkitBorderRadius: a.borderRadius,
                            zIndex: 99
                        }),
                        D = "right" == a.position ? {
                            right: a.distance
                        } : {
                            left: a.distance
                        };
                    H.css(D), M.css(D), S.wrap(C), S.parent().append(M), S.parent().append(H), a.railDraggable && M.bind("mousedown", function(i) {
                        var o = e(document);
                        return d = !0, t = parseFloat(M.css("top")), pageY = i.pageY, o.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY, M.css("top", currTop), r(0, M.position().top, !1)
                        }), o.bind("mouseup.slimscroll", function() {
                            d = !1, c(), o.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function(e) {
                        return e.stopPropagation(), e.preventDefault(), !1
                    }), "ontouchstart" in window && window.navigator.msPointerEnabled && (S.bind("MSPointerDown", function(e) {
                        g = e.originalEvent.pageY
                    }), S.bind("MSPointerMove", function(e) {
                        e.originalEvent.preventDefault();
                        var t = (g - e.originalEvent.pageY) / a.touchScrollStep;
                        r(t, !0), g = e.originalEvent.pageY
                    })), H.hover(function() {
                        l()
                    }, function() {
                        c()
                    }), M.hover(function() {
                        h = !0
                    }, function() {
                        h = !1
                    }), S.hover(function() {
                        u = !0, l(), c()
                    }, function() {
                        u = !1, c()
                    }), S.bind("touchstart", function(e) {
                        e.originalEvent.touches.length && (g = e.originalEvent.touches[0].pageY)
                    }), S.bind("touchmove", function(e) {
                        if (y || e.originalEvent.preventDefault(), e.originalEvent.touches.length) {
                            var t = (g - e.originalEvent.touches[0].pageY) / a.touchScrollStep;
                            r(t, !0), g = e.originalEvent.touches[0].pageY
                        }
                    }), n(), "bottom" === a.start ? (M.css({
                        top: S.outerHeight() - M.outerHeight()
                    }), r(0, !0)) : "top" !== a.start && (r(e(a.start).position().top, null, !0), a.alwaysVisible || M.hide()), s()
                }
            }), this
        }
    }), jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
}(jQuery);