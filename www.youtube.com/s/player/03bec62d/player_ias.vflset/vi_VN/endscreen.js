(function(g) {
    var window = this;
    'use strict';
    var Q7a = function(a, b) {
            a.Pa("onAutonavCoundownStarted", b)
        },
        k6 = function(a, b, c) {
            g.oo(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.Ef(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.mH && (b.lengthText ? (e = b.lengthText || null, f = b.Ct || null) : b.lengthSeconds && (e = g.FM(b.lengthSeconds), f = g.FM(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && "RD" === g.kH(d).type;
            var l = b instanceof g.mH ? b.isLivePlayback : null,
                m = b instanceof g.mH ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                w = [];
            n && r.push(n);
            p && (r.push(p), w.push(p));
            q && w.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.dK("Xem $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.un(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: w.join(" \u2022 "),
                autoplayAlternativeHeader: b.Xp
            };
            b instanceof g.lH && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        l6 = function(a) {
            var b = a.V(),
                c = b.B;
            g.W.call(this, {
                F: "a",
                K: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.T : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    F: "div",
                    Ga: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    W: [{
                            F: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Ga: ["ytp-autonav-timestamp"],
                            qa: "{{duration}}"
                        }, {
                            F: "div",
                            Ga: ["ytp-autonav-live-stamp"],
                            qa: "Tr\u1ef1c ti\u1ebfp"
                        },
                        {
                            F: "div",
                            Ga: ["ytp-autonav-upcoming-stamp"],
                            qa: "S\u1eafp di\u1ec5n ra"
                        }, {
                            F: "div",
                            K: "ytp-autonav-list-overlay",
                            W: [{
                                F: "div",
                                K: "ytp-autonav-mix-text",
                                qa: "T\u1ed5ng h\u1ee3p"
                            }, {
                                F: "div",
                                K: "ytp-autonav-mix-icon"
                            }]
                        }
                    ]
                }, {
                    F: "div",
                    Ga: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    qa: "{{title}}"
                }, {
                    F: "div",
                    Ga: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    qa: "{{author}}"
                }, {
                    F: "div",
                    Ga: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    qa: "{{views_and_publish_time}}"
                }]
            });
            this.G = a;
            this.suggestion = null;
            this.j = c;
            this.Qa("click", this.onClick);
            this.Qa("keypress", this.onKeyPress)
        },
        m6 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g.W.call(this, {
                F: "div",
                K: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.I = b;
            this.D = void 0;
            this.B = 0;
            this.container = new g.W({
                F: "div",
                K: "ytp-autonav-endscreen-countdown-container"
            });
            g.L(this, this.container);
            this.container.Ca(this.element);
            b = a.V();
            var d = b.B;
            this.G = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.G.getVideoData());
            this.S(a, "videodatachange", this.onVideoDataChange);
            var e = ["ytp-autonav-endscreen-upnext-thumbnail"];
            b.N("web_rounded_thumbnails") && e.push("rounded-thumbnail");
            this.j = new g.W({
                F: "div",
                K: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                W: [{
                    F: "div",
                    K: "ytp-autonav-endscreen-upnext-header"
                }, {
                    F: "div",
                    K: "ytp-autonav-endscreen-upnext-alternative-header",
                    qa: "{{autoplayAlternativeHeader}}"
                }, {
                    F: "a",
                    K: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.T : ""
                    },
                    W: [{
                        F: "div",
                        Ga: e,
                        X: {
                            style: "{{background}}"
                        },
                        W: [{
                            F: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            Ga: ["ytp-autonav-timestamp"],
                            qa: "{{duration}}"
                        }, {
                            F: "div",
                            Ga: ["ytp-autonav-live-stamp"],
                            qa: "Tr\u1ef1c ti\u1ebfp"
                        }, {
                            F: "div",
                            Ga: ["ytp-autonav-upcoming-stamp"],
                            qa: "S\u1eafp di\u1ec5n ra"
                        }]
                    }, {
                        F: "div",
                        K: "ytp-autonav-endscreen-video-info",
                        W: [{
                                F: "div",
                                K: "ytp-autonav-endscreen-premium-badge"
                            }, {
                                F: "div",
                                K: "ytp-autonav-endscreen-upnext-title",
                                qa: "{{title}}"
                            }, {
                                F: "div",
                                K: "ytp-autonav-endscreen-upnext-author",
                                qa: "{{author}}"
                            }, {
                                F: "div",
                                K: "ytp-autonav-view-and-date",
                                qa: "{{views_and_publish_time}}"
                            },
                            {
                                F: "div",
                                K: "ytp-autonav-author-and-view",
                                qa: "{{author_and_views}}"
                            }
                        ]
                    }]
                }]
            });
            g.L(this, this.j);
            this.j.Ca(this.container.element);
            d || this.S(this.j.Da("ytp-autonav-endscreen-link-container"), "click", this.iN);
            this.G.rb(this.container.element, this, 115127);
            this.G.rb(this.j.Da("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.W({
                F: "div",
                K: "ytp-autonav-overlay"
            });
            g.L(this, this.overlay);
            this.overlay.Ca(this.container.element);
            this.u = new g.W({
                F: "div",
                K: "ytp-autonav-endscreen-button-container"
            });
            g.L(this, this.u);
            this.u.Ca(this.container.element);
            this.cancelButton = new g.W({
                F: "button",
                Ga: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.N("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t"
                },
                qa: "H\u1ee7y"
            });
            g.L(this, this.cancelButton);
            this.cancelButton.Ca(this.u.element);
            this.cancelButton.Qa("click", this.CV, this);
            this.G.rb(this.cancelButton.element, this, 115129);
            this.playButton =
                new g.W({
                    F: "a",
                    Ga: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button", b.N("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                    X: {
                        href: "{{url}}",
                        role: "button",
                        "aria-label": "Ph\u00e1t video ti\u1ebfp theo"
                    },
                    qa: "Ph\u00e1t ngay"
                });
            g.L(this, this.playButton);
            this.playButton.Ca(this.u.element);
            this.playButton.Qa("click", this.iN, this);
            this.G.rb(this.playButton.element, this, 115130);
            this.C = new g.$n(function() {
                R7a(c)
            }, 500);
            g.L(this, this.C);
            this.hN();
            this.S(a, "autonavvisibility", this.hN);
            this.G.N("web_autonav_color_transition") && (this.S(a, "autonavchange", this.BV), this.S(a, "onAutonavCoundownStarted", this.J0))
        },
        n6 = function(a) {
            var b = a.G.zj(!0, a.G.isFullscreen());
            g.oo(a.container.element, "ytp-autonav-endscreen-small-mode", a.wg(b));
            g.oo(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.nF);
            g.oo(a.G.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.G.nf());
            g.oo(a.G.getRootNode(), "countdown-running", a.Dj());
            g.oo(a.container.element, "ytp-player-content", a.G.nf());
            g.Al(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Dj()) {
                a.G.nf() ? S7a(a, Math.round(T7a(a) / 1E3)) : S7a(a);
                b = !!a.suggestion && !!a.suggestion.Xp;
                var c = a.G.nf() || !b;
                g.oo(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.oo(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.DL(a.u, a.G.nf());
                g.oo(a.element, "ytp-enable-w2w-color-transitions", U7a(a))
            }
        },
        R7a = function(a) {
            var b = T7a(a),
                c = Math,
                d = c.min;
            var e = a.B ? Date.now() - a.B : 0;
            c = d.call(c, e, b);
            S7a(a, Math.ceil((b - c) / 1E3));
            500 >= b - c && a.Dj() ? a.select(!0) : a.Dj() && a.C.start()
        },
        T7a = function(a) {
            if (a.G.isFullscreen()) {
                var b;
                a = null == (b = a.G.getVideoData()) ? void 0 : b.FM;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.G.tq() ? a.G.tq() : g.qF(a.G.V().experiments, "autoplay_time") || 1E4
        },
        U7a = function(a) {
            var b;
            return !(null == (b = a.G.getVideoData()) || !b.watchToWatchTransitionRenderer)
        },
        S7a = function(a, b) {
            b = void 0 === b ? -1 : b;
            a = a.j.Da("ytp-autonav-endscreen-upnext-header");
            g.Xg(a);
            if (0 <= b) {
                b = String(b);
                var c = "Video ti\u1ebfp theo sau $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Video ti\u1ebfp theo sau $SECONDS".indexOf(c);
                if (0 <= d) {
                    a.appendChild(g.Wg("Video ti\u1ebfp theo sau $SECONDS".slice(0, d)));
                    var e = g.Vg("span");
                    g.go(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.bh(e, b);
                    a.appendChild(e);
                    a.appendChild(g.Wg("Video ti\u1ebfp theo sau $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.bh(a, "Ti\u1ebfp theo")
        },
        o6 =
        function(a, b) {
            g.W.call(this, {
                F: "div",
                Ga: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        p6 = function(a) {
            g.W.call(this, {
                F: "div",
                Ga: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                W: [{
                    F: "div",
                    K: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    F: "span",
                    K: "ytp-upnext-top",
                    W: [{
                        F: "span",
                        K: "ytp-upnext-header",
                        qa: "Ti\u1ebfp theo"
                    }, {
                        F: "span",
                        K: "ytp-upnext-title",
                        qa: "{{title}}"
                    }, {
                        F: "span",
                        K: "ytp-upnext-author",
                        qa: "{{author}}"
                    }]
                }, {
                    F: "a",
                    K: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Ph\u00e1t video ti\u1ebfp theo"
                    },
                    W: [{
                        F: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        W: [{
                            F: "circle",
                            K: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            F: "circle",
                            K: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            F: "path",
                            K: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    F: "span",
                    K: "ytp-upnext-bottom",
                    W: [{
                        F: "span",
                        K: "ytp-upnext-cancel"
                    }, {
                        F: "span",
                        K: "ytp-upnext-paused",
                        qa: "T\u1ef1 \u0111\u1ed9ng ph\u00e1t b\u1ecb t\u1ea1m d\u1eebng"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.D = this.Da("ytp-svg-autoplay-ring");
            this.B = this.notification = this.j = this.suggestion = null;
            this.C = new g.$n(this.GC, 5E3, this);
            this.u = 0;
            var b = this.Da("ytp-upnext-cancel");
            this.cancelButton = new g.W({
                F: "button",
                Ga: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "H\u1ee7y t\u1ef1 \u0111\u1ed9ng ph\u00e1t"
                },
                qa: "H\u1ee7y"
            });
            g.L(this, this.cancelButton);
            this.cancelButton.Qa("click",
                this.EV, this);
            this.cancelButton.Ca(b);
            this.cancelButton && this.api.rb(this.cancelButton.element, this, 115129);
            g.L(this, this.C);
            this.api.rb(this.element, this, 18788);
            b = this.Da("ytp-upnext-autoplay-icon");
            this.S(b, "click", this.FV);
            this.api.rb(b, this, 115130);
            this.jN();
            this.S(a, "autonavvisibility", this.jN);
            this.S(a, "mdxnowautoplaying", this.z1);
            this.S(a, "mdxautoplaycanceled", this.A1);
            g.oo(this.element, "ytp-upnext-mobile", this.api.V().isMobile)
        },
        V7a = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = null == (c = a.api.getVideoData()) ? void 0 : c.FM;
                return -1 === a || void 0 === a ? 8E3 : a
            }
            return 0 <= a.api.tq() ? a.api.tq() : g.qF(a.api.V().experiments, "autoplay_time") || 1E4
        },
        W7a = function(a, b) {
            b = V7a(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.Q)() - a.u;
            c = d.call(c, e, b);
            b = 0 === b ? 1 : Math.min(c / b, 1);
            a.D.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            1 <= b && a.Dj() && 3 !== a.api.getPresentingPlayerType() ? a.select(!0) : a.Dj() && a.j.start()
        },
        q6 = function(a) {
            o6.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.W({
                F: "div",
                K: "ytp-suggestion-panel",
                W: [{
                    F: "div",
                    Ga: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    qa: "Video kh\u00e1c"
                }]
            });
            this.J = new g.W({
                F: "div",
                K: "ytp-suggestions-container"
            });
            this.videos = [];
            this.B = null;
            this.D = this.I = !1;
            this.u = new m6(this.player);
            g.L(this, this.u);
            this.u.Ca(this.element);
            a.getVideoData().Ve ? this.j = this.u : (this.j = new p6(a), g.nO(this.player, this.j.element, 4), g.L(this, this.j));
            this.overlay = new g.W({
                F: "div",
                K: "ytp-autonav-overlay-cancelled-state"
            });
            g.L(this, this.overlay);
            this.overlay.Ca(this.element);
            this.C = new g.pE(this);
            g.L(this, this.C);
            g.L(this, this.table);
            this.table.Ca(this.element);
            this.table.show();
            g.L(this, this.J);
            this.J.Ca(this.table.element);
            this.hide()
        },
        r6 = function(a) {
            var b = a.nf();
            b !== a.D && (a.D = b, a.player.ma("autonavvisibility"), a.D ? (a.u !== a.j && a.u.hide(), a.table.hide()) : (a.u !== a.j && a.u.show(), a.table.show()))
        },
        s6 = function(a, b) {
            g.W.call(this, {
                F: "button",
                Ga: ["ytp-watch-on-youtube-button", "ytp-button"],
                X: {
                    title: "{{message}}"
                },
                qa: "{{content}}"
            });
            this.G = a;
            this.buttonType = this.buttonType = b;
            switch (this.buttonType) {
                case 1:
                    a = "Xem l\u1ea1i tr\u00ean YouTube";
                    b = 156915;
                    break;
                case 2:
                    a = "Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube";
                    b = 156942;
                    break;
                default:
                    a = "Ti\u1ebfp t\u1ee5c xem tr\u00ean YouTube", b = 156942
            }
            this.update({
                message: a,
                content: a
            });
            this.G.rb(this.element, this, b);
            this.Qa("click", this.onClick);
            g.DL(this, !0)
        },
        t6 = function(a, b) {
            o6.call(this, a, "embeds-lite-endscreen");
            this.G = a;
            this.j = b;
            this.G.rb(this.element, this, 156943);
            this.watchButton = new s6(a, 2);
            g.L(this, this.watchButton);
            this.watchButton.Ca(this.element);
            this.hide()
        },
        X7a = function(a) {
            o6.call(this, a, "subscribecard-endscreen");
            this.j = new g.W({
                F: "div",
                K: "ytp-subscribe-card",
                W: [{
                    F: "img",
                    K: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    F: "div",
                    K: "ytp-subscribe-card-right",
                    W: [{
                        F: "div",
                        K: "ytp-author-name",
                        qa: "{{author}}"
                    }, {
                        F: "div",
                        K: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.L(this, this.j);
            this.j.Ca(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.WP("\u0110\u0103ng k\u00fd", null, "H\u1ee7y \u0111\u0103ng k\u00fd", null, !0, !1, b.Xk, b.subscribed, "trailer-endscreen", null, null, a);
            g.L(this, this.subscribeButton);
            this.subscribeButton.Ca(this.j.Da("html5-subscribe-button-container"));
            this.S(a, "videodatachange", this.Ka);
            this.Ka();
            this.hide()
        },
        u6 = function(a) {
            var b = a.V(),
                c = g.sE || g.gG ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.B,
                e = ["ytp-videowall-still"];
            b.isMobile && e.push("ytp-videowall-show-text");
            g.W.call(this, {
                F: "a",
                Ga: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.T : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                W: [{
                    F: "div",
                    K: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    F: "span",
                    K: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        F: "span",
                        K: "ytp-videowall-still-info-bg",
                        W: [{
                            F: "span",
                            K: "ytp-videowall-still-info-content",
                            X: c,
                            W: [{
                                F: "span",
                                K: "ytp-videowall-still-info-title",
                                qa: "{{title}}"
                            }, {
                                F: "span",
                                K: "ytp-videowall-still-info-author",
                                qa: "{{author_and_views}}"
                            }, {
                                F: "span",
                                K: "ytp-videowall-still-info-live",
                                qa: "Tr\u1ef1c ti\u1ebfp"
                            }, {
                                F: "span",
                                K: "ytp-videowall-still-info-duration",
                                qa: "{{duration}}"
                            }]
                        }]
                    }]
                }, {
                    F: "span",
                    Ga: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        F: "span",
                        K: "ytp-videowall-still-listlabel-icon"
                    }, "Danh s\u00e1ch ph\u00e1t", {
                        F: "span",
                        K: "ytp-videowall-still-listlabel-length",
                        W: [" (", {
                                F: "span",
                                qa: "{{playlist_length}}"
                            },
                            ")"
                        ]
                    }]
                }, {
                    F: "span",
                    Ga: ["ytp-videowall-still-listlabel-mix", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    W: [{
                        F: "span",
                        K: "ytp-videowall-still-listlabel-mix-icon"
                    }, "T\u1ed5ng h\u1ee3p", {
                        F: "span",
                        K: "ytp-videowall-still-listlabel-length",
                        qa: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.u = d;
            this.api = a;
            this.j = new g.pE(this);
            g.L(this, this.j);
            this.Qa("click", this.onClick);
            this.Qa("keypress", this.onKeyPress);
            this.j.S(a, "videodatachange", this.onVideoDataChange);
            a.rg(this.element, this);
            this.onVideoDataChange()
        },
        v6 = function(a) {
            o6.call(this, a, "videowall-endscreen");
            var b = this;
            this.G = a;
            this.B = 0;
            this.stills = [];
            this.C = this.videoData = null;
            this.D = this.J = !1;
            this.T = null;
            this.u = new g.pE(this);
            g.L(this, this.u);
            this.Y = a.N("web_rounded_thumbnails");
            this.I = new g.$n(function() {
                g.io(b.element, "ytp-show-tiles")
            }, 0);
            g.L(this, this.I);
            var c = new g.W({
                F: "button",
                Ga: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Tr\u01b0\u1edbc"
                },
                W: [g.IL()]
            });
            g.L(this, c);
            c.Ca(this.element);
            c.Qa("click", this.JV, this);
            this.table = new g.AL({
                F: "div",
                K: "ytp-endscreen-content"
            });
            g.L(this, this.table);
            this.table.Ca(this.element);
            c = new g.W({
                F: "button",
                Ga: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Ti\u1ebfp theo"
                },
                W: [g.JL()]
            });
            g.L(this, c);
            c.Ca(this.element);
            c.Qa("click", this.IV, this);
            a.getVideoData().Ve ? this.j = new m6(a, !0) :
                this.j = new p6(a);
            g.L(this, this.j);
            g.nO(this.player, this.j.element, 4);
            a.rb(this.element, this, 158789);
            this.hide()
        },
        w6 = function(a) {
            return g.oO(a.player) && a.Py() && !a.C
        },
        Y7a = function(a) {
            var b, c, d, e;
            return (null == (b = a.videoData) ? 0 : null == (c = b.suggestions) ? 0 : c.length) ? null == (d = a.videoData) ? void 0 : d.suggestions : [null == (e = a.videoData) ? void 0 : g.jI(e)]
        },
        x6 = function(a) {
            var b = a.nf();
            b !== a.J && (a.J = b, a.player.ma("autonavvisibility"))
        },
        y6 = function(a) {
            o6.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new s6(a, 1);
            g.L(this, this.watchButton);
            this.watchButton.Ca(this.element);
            g.D_a(a) && (this.j = new g.H2(a, g.dO(a)), g.L(this, this.j), this.u = new g.W({
                F: "div",
                Ga: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                W: [this.j]
            }), g.L(this, this.u), this.j.Ca(this.u.element), this.u.Ca(this.element));
            a.rb(this.element, this, 156914);
            this.hide()
        },
        b8a = function(a) {
            g.TO.call(this, a);
            var b = this;
            this.endScreen = null;
            this.u = this.j = this.B = this.C = !1;
            this.listeners = new g.pE(this);
            g.L(this, this.listeners);
            var c = a.V(),
                d = a.getVideoData();
            d = d && 0 !== d.endSeconds;
            if (g.uv(g.BG(c)) && d && !g.kO(a)) this.u = !0, this.endScreen = new t6(a, g.dO(a));
            else {
                var e;
                (null == (e = g.dO(a)) ? 0 : e.Cj()) ? this.endScreen = new y6(a): Z7a(a) ? (this.C = !0, $7a(this), this.j ? this.endScreen = new q6(a) : this.endScreen = new v6(a)) : c.Pf ? this.endScreen = new X7a(a) : this.endScreen = new o6(a)
            }
            g.L(this, this.endScreen);
            g.nO(a, this.endScreen.element,
                4);
            a8a(this);
            this.listeners.S(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.S(a, g.CA("endscreen"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.listeners.S(a, g.DA("endscreen"), function(f) {
                b.onCueRangeExit(f)
            })
        },
        $7a = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.bl && a.B === b.Ve) return !1;
            a.j = b.bl;
            a.B = b.Ve;
            return !0
        },
        Z7a = function(a) {
            a = a.V();
            return a.Dc && !a.Pf
        },
        a8a = function(a) {
            a.player.Af("endscreen");
            var b = a.player.getVideoData();
            b = new g.AA(Math.max(1E3 * (b.lengthSeconds - 10), 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.AA(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.qe([b, c])
        };
    g.XS.prototype.xx = g.ba(35, function(a) {
        this.MK !== a && (this.MK = a, this.Xj())
    });
    g.WS.prototype.Dp = g.ba(34, function(a) {
        this.u !== a && (this.u = a, this.Hy())
    });
    g.XS.prototype.Dp = g.ba(33, function(a) {
        this.al && this.al.Dp(a)
    });
    g.IP.prototype.hB = g.ba(32, function(a) {
        this.NK !== a && (this.NK = a, this.Wn())
    });
    g.gO.prototype.tq = g.ba(6, function() {
        return this.app.tq()
    });
    g.SY.prototype.tq = g.ba(5, function() {
        return this.getVideoData().bN
    });
    g.v(l6, g.W);
    l6.prototype.select = function() {
        this.G.wm(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.mz || void 0) && this.G.tb(this.element)
    };
    l6.prototype.onClick = function(a) {
        g.tP(a, this.G, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    l6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.Cx(a) || (this.select(), g.xx(a))
        }
    };
    g.v(m6, g.W);
    g.k = m6.prototype;
    g.k.QB = function(a) {
        this.suggestion !== a && (this.suggestion = a, k6(this.j, a), this.playButton.updateValue("url", this.suggestion.un()), n6(this))
    };
    g.k.Dj = function() {
        return 0 < this.B
    };
    g.k.Dx = function() {
        this.Dj() || (this.B = Date.now(), R7a(this), Q7a(this.G, T7a(this)), g.oo(this.G.getRootNode(), "countdown-running", this.Dj()))
    };
    g.k.Ot = function() {
        this.Gp();
        R7a(this);
        var a = this.j.Da("ytp-autonav-endscreen-upnext-header");
        a && g.bh(a, "Ti\u1ebfp theo")
    };
    g.k.Gp = function() {
        this.Dj() && (this.C.stop(), this.B = 0)
    };
    g.k.select = function(a) {
        this.G.nextVideo(!1, void 0 === a ? !1 : a);
        this.Gp()
    };
    g.k.iN = function(a) {
        g.tP(a, this.G) && (a.currentTarget === this.playButton.element ? this.G.tb(this.playButton.element) : a.currentTarget === this.j.Da("ytp-autonav-endscreen-link-container") && (a = this.j.Da("ytp-autonav-endscreen-link-container"), this.G.Va(a, !0), this.G.tb(a)), this.select())
    };
    g.k.CV = function() {
        this.G.tb(this.cancelButton.element);
        g.iO(this.G, !0);
        this.D && this.G.Pa("innertubeCommand", this.D)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c;
        this.D = null == (c = b.yX) ? void 0 : c.command
    };
    g.k.J0 = function(a) {
        if (U7a(this)) {
            var b = this.G.getVideoData().watchToWatchTransitionRenderer,
                c = null == b ? void 0 : b.fromColorPaletteDark;
            b = null == b ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.QM(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.QM(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.QM(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.QM(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.QM(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.QM(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.oo(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.BV = function(a) {
        this.G.N("web_autonav_color_transition") && 2 !== a && g.oo(this.element, "ytp-w2w-animate", !1)
    };
    g.k.hN = function() {
        var a = this.G.nf();
        this.I && this.sb !== a && g.DL(this, a);
        n6(this);
        this.G.Va(this.container.element, a);
        this.G.Va(this.cancelButton.element, a);
        this.G.Va(this.j.Da("ytp-autonav-endscreen-link-container"), a);
        this.G.Va(this.playButton.element, a)
    };
    g.k.wg = function(a) {
        return 400 > a.width || 459 > a.height
    };
    g.v(o6, g.W);
    g.k = o6.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.Py = function() {
        return !1
    };
    g.k.nf = function() {
        return !1
    };
    g.k.ZQ = function() {
        return !1
    };
    g.v(p6, g.W);
    g.k = p6.prototype;
    g.k.GC = function() {
        this.notification && (this.C.stop(), this.zc(this.B), this.B = null, this.notification.close(), this.notification = null)
    };
    g.k.QB = function(a) {
        this.suggestion = a;
        k6(this, a, "hqdefault.jpg")
    };
    g.k.jN = function() {
        g.DL(this, this.api.nf());
        this.api.Va(this.element, this.api.nf());
        this.api.Va(this.Da("ytp-upnext-autoplay-icon"), this.api.nf());
        this.cancelButton && this.api.Va(this.cancelButton.element, this.api.nf())
    };
    g.k.I1 = function() {
        window.focus();
        this.GC()
    };
    g.k.Dx = function(a) {
        var b = this;
        this.Dj() || (g.Rx("a11y-announce", "Ti\u1ebfp theo " + this.suggestion.title), this.u = (0, g.Q)(), this.j = new g.$n(function() {
            W7a(b, a)
        }, 25), W7a(this, a), Q7a(this.api, V7a(this, a)));
        g.ko(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.W.prototype.hide.call(this)
    };
    g.k.Dj = function() {
        return !!this.j
    };
    g.k.Ot = function() {
        this.Gp();
        this.u = (0, g.Q)();
        W7a(this);
        g.io(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.Gp = function() {
        this.Dj() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = void 0 === a ? !1 : a;
        if (this.api.V().N("autonav_notifications") && a && window.Notification && "function" === typeof document.hasFocus) {
            var b = Notification.permission;
            "default" === b ? Notification.requestPermission() : "granted" !== b || document.hasFocus() || (this.GC(), this.notification = new Notification("Ti\u1ebfp theo", {
                body: this.suggestion.title,
                icon: this.suggestion.Ef()
            }), this.B = this.S(this.notification, "click", this.I1), this.C.start())
        }
        this.Gp();
        this.api.nextVideo(!1, a)
    };
    g.k.FV = function(a) {
        !g.ah(this.cancelButton.element, g.tx(a)) && g.tP(a, this.api) && (this.api.nf() && this.api.tb(this.Da("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.EV = function() {
        this.api.nf() && this.cancelButton && this.api.tb(this.cancelButton.element);
        g.iO(this.api, !0)
    };
    g.k.z1 = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.Dx(a)
    };
    g.k.A1 = function() {
        this.api.getPresentingPlayerType();
        this.Gp();
        this.hide()
    };
    g.k.ra = function() {
        this.Gp();
        this.GC();
        g.W.prototype.ra.call(this)
    };
    g.v(q6, o6);
    g.k = q6.prototype;
    g.k.create = function() {
        o6.prototype.create.call(this);
        this.C.S(this.player, "appresize", this.py);
        this.C.S(this.player, "onVideoAreaChange", this.py);
        this.C.S(this.player, "videodatachange", this.onVideoDataChange);
        this.C.S(this.player, "autonavchange", this.kN);
        this.C.S(this.player, "autonavcancel", this.GV);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        o6.prototype.show.call(this);
        (this.I || this.B && this.B !== this.videoData.clientPlaybackNonce) && g.iO(this.player, !1);
        g.oO(this.player) && this.Py() && !this.B ? (r6(this), 2 === this.videoData.autonavState ? this.player.V().N("fast_autonav_in_background") && 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.Dx() : 3 === this.videoData.autonavState && this.j.Ot()) : (g.iO(this.player, !0), r6(this));
        this.py()
    };
    g.k.hide = function() {
        o6.prototype.hide.call(this);
        this.j.Ot();
        r6(this)
    };
    g.k.py = function() {
        var a = this.player.zj(!0, this.player.isFullscreen());
        r6(this);
        n6(this.u);
        g.oo(this.element, "ytp-autonav-cancelled-small-mode", this.wg(a));
        g.oo(this.element, "ytp-autonav-cancelled-tiny-mode", this.RD(a));
        g.oo(this.element, "ytp-autonav-cancelled-mini-mode", 400 >= a.width || 360 >= a.height);
        this.overlay && g.Al(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.D) {
            a = g.t(this.videos.entries());
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = g.t(b.value);
                b = c.next().value;
                c = c.next().value;
                g.oo(c.element,
                    "ytp-suggestion-card-with-margin", 1 === b % 2)
            }
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length) {
                var b = g.jI(this.videoData);
                b && (this.j.QB(b), this.j !== this.u && this.u.QB(b));
                for (b = 0; b < c8a.length; ++b) {
                    var c = c8a[b];
                    if (a && a[c]) {
                        this.videos[b] = new l6(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, k6(d, c));
                        g.L(this, this.videos[b]);
                        this.videos[b].Ca(this.J.element)
                    }
                }
            }
            this.py()
        }
    };
    g.k.kN = function(a) {
        1 === a ? (this.I = !1, this.B = this.videoData.clientPlaybackNonce, this.j.Gp(), this.sb && this.py()) : (this.I = !0, this.nf() && (2 === a ? this.j.Dx() : 3 === a && this.j.Ot()))
    };
    g.k.GV = function(a) {
        a ? this.kN(1) : (this.B = null, this.I = !1)
    };
    g.k.Py = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.wg = function(a) {
        return (910 > a.width || 459 > a.height) && !this.RD(a) && !(400 >= a.width || 360 >= a.height)
    };
    g.k.RD = function(a) {
        return 800 > a.width && !(400 >= a.width || 360 >= a.height)
    };
    g.k.nf = function() {
        return this.sb && g.oO(this.player) && this.Py() && !this.B
    };
    var c8a = [1, 3, 2, 4];
    g.v(s6, g.W);
    g.k = s6.prototype;
    g.k.onClick = function(a) {
        g.uP(this.getVideoUrl(), this.G, a);
        this.G.tb(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.G.getVideoUrl(a, !1, !1, !0);
        var b = this.G.V();
        if (g.iG(b) || g.sG(b)) {
            var c = {};
            b.ya && g.iG(b) && g.BN(c, b.loaderUrl);
            a: {
                switch (this.buttonType) {
                    case 2:
                        b = "emb_ytp_continue_watching";
                        break a
                }
                b = "emb_ytp_watch_again"
            }
            g.AN(c, b);
            a = g.ni(a, c)
        }
        return a
    };
    g.k.Va = function() {
        this.G.Va(this.element, this.sb && this.ya)
    };
    g.k.show = function() {
        g.W.prototype.show.call(this);
        this.Va()
    };
    g.k.hide = function() {
        g.W.prototype.hide.call(this);
        this.Va()
    };
    g.k.Wb = function(a) {
        g.W.prototype.Wb.call(this, a);
        this.Va()
    };
    g.v(t6, o6);
    t6.prototype.show = function() {
        3 !== this.player.getPlayerState() && (o6.prototype.show.call(this), this.j.xx(!0), this.j.Dp(!0), this.G.Va(this.element, !0), this.watchButton.Wb(!0))
    };
    t6.prototype.hide = function() {
        o6.prototype.hide.call(this);
        this.j.xx(!1);
        this.j.Dp(!1);
        this.G.Va(this.element, !1);
        this.watchButton.Wb(!1)
    };
    g.v(X7a, o6);
    X7a.prototype.Ka = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.Xk;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.u()
    };
    g.v(u6, g.W);
    u6.prototype.select = function() {
        this.api.wm(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.mz || void 0) && this.api.tb(this.element)
    };
    u6.prototype.onClick = function(a) {
        g.tP(a, this.api, this.u, this.suggestion.sessionData || void 0) && this.select()
    };
    u6.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                g.Cx(a) || (this.select(), g.xx(a))
        }
    };
    u6.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.u = a.D ? !1 : b.B
    };
    g.v(v6, o6);
    g.k = v6.prototype;
    g.k.create = function() {
        o6.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.po();
        this.u.S(this.player, "appresize", this.po);
        this.u.S(this.player, "onVideoAreaChange", this.po);
        this.u.S(this.player, "videodatachange", this.onVideoDataChange);
        this.u.S(this.player, "autonavchange", this.eG);
        this.u.S(this.player, "autonavcancel", this.HV);
        a = this.videoData.autonavState;
        a !== this.T && this.eG(a);
        this.u.S(this.element, "transitionend", this.f3)
    };
    g.k.destroy = function() {
        g.kz(this.u);
        g.Te(this.stills);
        this.stills = [];
        o6.prototype.destroy.call(this);
        g.ko(this.element, "ytp-show-tiles");
        this.I.stop();
        this.T = this.videoData.autonavState
    };
    g.k.Py = function() {
        return 1 !== this.videoData.autonavState
    };
    g.k.show = function() {
        var a = this.sb;
        o6.prototype.show.call(this);
        Y7a(this);
        g.ko(this.element, "ytp-show-tiles");
        this.player.V().isMobile ? g.bo(this.I) : this.I.start();
        (this.D || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.iO(this.player, !1);
        w6(this) ? (x6(this), 2 === this.videoData.autonavState ? this.player.V().N("fast_autonav_in_background") && 3 === this.player.getVisibilityState() ? this.j.select(!0) : this.j.Dx() : 3 === this.videoData.autonavState && this.j.Ot()) : (g.iO(this.player, !0), x6(this));
        a !== this.sb &&
            this.player.Va(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.sb;
        o6.prototype.hide.call(this);
        this.j.Ot();
        x6(this);
        a !== this.sb && this.player.Va(this.element, !1)
    };
    g.k.f3 = function(a) {
        g.tx(a) === this.element && this.po()
    };
    g.k.po = function() {
        var a = Y7a(this);
        if (a.length) {
            g.io(this.element, "ytp-endscreen-paginate");
            var b = this.G.zj(!0, this.G.isFullscreen()),
                c = g.dO(this.G);
            c && (c = c.Ff() ? 48 : 32, b.width -= 2 * c);
            var d = b.width / b.height,
                e = 96 / 54,
                f = c = 2,
                h = Math.max(b.width / 96, 2),
                l = Math.max(b.height / 54, 2),
                m = a.length,
                n = Math.pow(2, 2);
            var p = m * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) - n;
            for (p -= n; 0 < p && (c < h || f < l);) {
                var q = c / 2,
                    r = f / 2,
                    w = c <= h - 2 && p >= r * n,
                    x = f <= l - 2 && p >= q * n;
                if ((q + 1) / r * e / d > d / (q / (r + 1) * e) && x) p -= q * n, f += 2;
                else if (w) p -= r * n, c += 2;
                else if (x) p -= q *
                    n, f += 2;
                else break
            }
            e = !1;
            p >= 3 * n && 6 >= m * n - p && (4 <= f || 4 <= c) && (e = !0);
            n = 96 * c;
            p = 54 * f;
            d = n / p < d ? b.height / p : b.width / n;
            d = Math.min(d, 2);
            n = Math.floor(Math.min(b.width, n * d));
            p = Math.floor(Math.min(b.height, p * d));
            b = this.table.element;
            b.ariaLive = "polite";
            g.Kl(b, n, p);
            g.Al(b, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.QB(g.jI(this.videoData));
            this.j instanceof m6 && n6(this.j);
            g.oo(this.element, "ytp-endscreen-takeover", w6(this));
            x6(this);
            n += 4;
            p += 4;
            d = 0;
            b.ariaBusy = "true";
            for (h = 0; h < c; h++)
                for (l = 0; l < f; l++)
                    if (q = d, w = 0, e &&
                        h >= c - 2 && l >= f - 2 ? w = 1 : 0 === l % 2 && 0 === h % 2 && (2 > l && 2 > h ? 0 === l && 0 === h && (w = 2) : w = 2), q = g.tg(q + this.B, m), 0 !== w) {
                        r = this.stills[d];
                        r || (r = new u6(this.player), this.stills[d] = r, b.appendChild(r.element));
                        x = Math.floor(p * l / f);
                        var z = Math.floor(n * h / c),
                            B = Math.floor(p * (l + w) / f) - x - 4,
                            D = Math.floor(n * (h + w) / c) - z - 4;
                        g.Gl(r.element, z, x);
                        g.Kl(r.element, D, B);
                        g.Al(r.element, "transitionDelay", (l + h) / 20 + "s");
                        g.oo(r.element, "ytp-videowall-still-mini", 1 === w);
                        g.oo(r.element, "ytp-videowall-still-large", 2 < w);
                        this.Y && (w = Math.max(D, B), g.oo(r.element,
                            "ytp-videowall-still-round-large", 256 <= w), g.oo(r.element, "ytp-videowall-still-round-medium", 96 < w && 256 > w), g.oo(r.element, "ytp-videowall-still-round-small", 96 >= w));
                        q = a[q];
                        r.suggestion !== q && (r.suggestion = q, w = r.api.V(), x = g.ho(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", k6(r, q, x), g.iG(w) && (x = q.un(), z = {}, w.ya && g.BN(z, w.loaderUrl), x = g.ni(x, g.AN(z, "emb_rel_end")), r.updateValue("url", x)), (q = (q = q.sessionData) && q.itct) && r.api.Bh(r.element, q));
                        d++
                    }
            b.ariaBusy = "false";
            g.oo(this.element,
                "ytp-endscreen-paginate", d < m);
            for (a = this.stills.length - 1; a >= d; a--) c = this.stills[a], g.Zg(c.element), g.Se(c);
            this.stills.length = d
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        this.videoData !== a && (this.B = 0, this.videoData = a, this.po())
    };
    g.k.IV = function() {
        this.B += this.stills.length;
        this.po()
    };
    g.k.JV = function() {
        this.B -= this.stills.length;
        this.po()
    };
    g.k.ZQ = function() {
        return this.j.Dj()
    };
    g.k.eG = function(a) {
        1 === a ? (this.D = !1, this.C = this.videoData.clientPlaybackNonce, this.j.Gp(), this.sb && this.po()) : (this.D = !0, this.sb && w6(this) && (2 === a ? this.j.Dx() : 3 === a && this.j.Ot()))
    };
    g.k.HV = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.G.Va(this.stills[a].element, !0);
            this.eG(1)
        } else this.C = null, this.D = !1;
        this.po()
    };
    g.k.nf = function() {
        return this.sb && w6(this)
    };
    g.v(y6, o6);
    y6.prototype.show = function() {
        if (3 !== this.player.getPlayerState()) {
            o6.prototype.show.call(this);
            var a = this.u;
            if (a) {
                var b = 0 < this.j.suggestionData.length;
                g.oo(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            null == (c = g.dO(this.player)) || c.hB(!0);
            this.player.Va(this.element, !0);
            this.watchButton.Wb(!0)
        }
    };
    y6.prototype.hide = function() {
        o6.prototype.hide.call(this);
        var a;
        null == (a = g.dO(this.player)) || a.hB(!1);
        this.player.Va(this.element, !1);
        this.watchButton.Wb(!1)
    };
    g.v(b8a, g.TO);
    g.k = b8a.prototype;
    g.k.nu = function() {
        var a;
        if ((null == (a = g.dO(this.player)) ? 0 : a.Cj()) || this.u) return !0;
        a = this.player.getVideoData();
        var b;
        var c = !!((null == a ? 0 : g.jI(a)) || (null == a ? 0 : null == (b = a.suggestions) ? 0 : b.length));
        b = !Z7a(this.player) || c;
        c = a.Qi || g.sG(a.u);
        var d = this.player.wz();
        a = a.mutedAutoplay;
        return b && !c && !d && !a
    };
    g.k.nf = function() {
        return this.endScreen.nf()
    };
    g.k.u_ = function() {
        return this.nf() ? this.endScreen.ZQ() : !1
    };
    g.k.ra = function() {
        this.player.Af("endscreen");
        g.TO.prototype.ra.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.vb().Fe.get("heartbeat"),
                d = g.jI(a);
            !d || b.videoId !== d.videoId || a.jR ? (this.player.wm(b.videoId, void 0, void 0, !0, !0, b), c && c.WD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.TO.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.TO.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.nu() && (this.endScreen.created || this.endScreen.create(), "load" === a.getId() && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        "load" === a.getId() && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        a8a(this);
        this.C && $7a(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new q6(this.player) : this.endScreen = new v6(this.player), g.L(this, this.endScreen), g.nO(this.player, this.endScreen.element, 4))
    };
    g.SO("endscreen", b8a);
})(_yt_player);