(function(g) {
    var window = this;
    'use strict';
    var U5a = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        V5a = function(a) {
            return g.IG(a) ? g.qF(a.experiments, "web_player_caption_language_preference_stickiness_duration") : 0
        },
        W5a = function(a, b) {
            var c = new g.bH;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            a.xtags && (c.xtags = a.xtags);
            return c
        },
        X5a = function(a, b) {
            var c, d, e;
            return g.A(function(f) {
                if (1 == f.j) return c = a + "|" + b, g.y(f, g.Hw(), 2);
                if (3 != f.j) {
                    d = f.u;
                    if (!d) throw g.hw("gct");
                    return g.y(f, g.NH(d), 3)
                }
                e = f.u;
                return f.return(e.get("captions", c))
            })
        },
        Y5a = function(a, b, c) {
            X5a(a, b).then(function(d) {
                d && c(d.trackData, new g.bH(d.metadata))
            })
        },
        a6a = function(a) {
            if (!Z5a.test(a)) throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace($5a, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        b6a = function() {
            return g.Yz("yt-player-caption-display-settings")
        },
        o5 = function() {
            this.segments = []
        },
        c6a = function(a, b) {
            var c = g.mc(a.segments, b);
            0 <= c || 0 > c && 1 === (-c - 1) % 2 || (c = -c - 1, 0 < c && 1 === b - a.segments[c - 1] && c < a.segments.length && 1 === a.segments[c] - b ? (g.Yb(a.segments, c), g.Yb(a.segments, c - 1)) : 0 < c && 1 === b - a.segments[c - 1] ? a.segments[c - 1] = b : c < a.segments.length && 1 === a.segments[c] - b ? a.segments[c] = b : (g.ic(a.segments, c, 0, b), g.ic(a.segments, c + 1, 0, b)))
        },
        d6a = function(a, b, c, d, e, f) {
            g.K.call(this);
            this.policy = a;
            this.player = b;
            this.ea = c;
            this.T = d;
            this.D = e;
            this.Y = f;
            this.Z = this.player.V();
            this.C = new o5;
            this.I = -1;
            this.B = this.u = this.j = null;
            this.J = new g.$n(this.kR, 1E3, this);
            this.events = new g.pE(this);
            g.L(this, this.J);
            g.L(this, this.events);
            this.events.S(b, "SEEK_COMPLETE", this.Zw);
            this.Zw();
            this.kR()
        },
        e6a = function(a) {
            return a.j && a.j.B ? a.j.B + a.player.Bd() < a.player.getCurrentTime() : !1
        },
        f6a = function(a, b) {
            var c = g.AD(b, a.policy, {}).De(),
                d = {
                    format: "RAW",
                    withCredentials: !0
                };
            a.policy.Wa && (d.method = "POST", d.postBody = b.Zs() || (0, g.TV)([120, 0]));
            a.D && (d.responseType = "arraybuffer");
            a.B = g.Ou(c, d, 3, 100).then(function(e) {
                a: {
                    e = e.xhr;a.isDisposed();
                    if (a.u) {
                        var f = !(a.D ? e.response : e.responseText) || 400 <= e.status,
                            h = g.zya(e);
                        if (h) {
                            e = g.AD(a.u, a.policy, {});
                            a.u.zk(e, h);
                            f6a(a, a.u);
                            break a
                        }
                        f ? a.player.va("capfail", {
                            status: e.status
                        }) : (a.player.vj().Di("fcb_r"), h = a.u.Ya[0].Na, null != a.T && a.I !== h && (f = a.u.Ya[0], a.D ? a.T(e.response, 1E3 * (f.startTime + a.player.Bd())) : a.T(e.responseText,
                            1E3 * (f.startTime + a.player.Bd())), a.I = h))
                    }
                    a.u = null;a.B = null
                }
            }).ij(function(e) {
                a.u = null;
                a.B = null;
                var f;
                a.player.va("capfail", {
                    status: null == (f = e.xhr) ? void 0 : f.status
                })
            });
            a.u = b;
            c6a(a.C, a.u.Ya[0].Na)
        },
        p5 = function(a, b) {
            g.WO.call(this, b.V());
            this.u = a;
            this.G = b;
            this.B = null;
            this.D = !1;
            this.I = g.KG(this.G.V()) && !this.u.isManifestless
        },
        h6a = function(a, b) {
            var c = [],
                d;
            for (d in a.u.j)
                if (a.u.j.hasOwnProperty(d)) {
                    var e = a.u.j[d];
                    if (g.ZO(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "",
                            n = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.G.V().N("html5_expose_xtags_through_caption_track") && (n = e.xtags);
                        else {
                            e = f;
                            var p = g.V3a.get(e);
                            null == p && (p = g6a[e] || g6a[e.replace(/-/g, "_")], g.V3a.set(e, p));
                            h = p || h
                        }
                        c.push(new g.bH({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m,
                            xtags: n
                        }))
                    }
                }
            return c
        },
        i6a = function(a,
            b) {
            return null != b && b in a.u.j ? a.u.j[b] : null
        },
        j6a = function(a, b, c) {
            var d = [],
                e;
            for (e in a.u.j)
                if (a.u.j.hasOwnProperty(e)) {
                    var f = a.u.j[e];
                    if (g.ZO(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        q5 = function(a, b, c, d, e, f, h) {
            var l = {};
            Object.assign(l, b);
            Object.assign(l, a.params);
            Object.assign(l, c);
            var m = {};
            Object.assign(m, b.ke);
            a.params.ke && Object.assign(m, a.params.ke);
            Object.assign(m, c.ke);
            l.ke = m;
            g.W.call(this, {
                F: "div",
                K: "caption-window",
                X: {
                    id: "caption-window-" + a.id,
                    dir: 1 === l.Ch ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: l.lang
                },
                W: [{
                    F: "span",
                    K: "captions-text",
                    X: {
                        style: "word-wrap: normal; display: block;"
                    }
                }]
            });
            this.D = [];
            this.Ba = !1;
            this.u = a;
            this.Ma = this.Ja = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.I = null;
            this.maxWidth = .96 * f;
            this.Wa = .96 *
                h;
            this.j = l;
            this.Vb = c;
            this.ea = b;
            this.C = this.Da("captions-text");
            this.yb = "" !== this.C.style.getPropertyValue("box-decoration-break") || "" !== this.C.style.getPropertyValue("-webkit-box-decoration-break");
            this.oa = e / 360 * 16;
            e >= d && (this.oa = f / 640 * 16);
            this.type = 0;
            this.bb = this.oa * k6a(m);
            a = new g.pz(this.element, !0);
            g.L(this, a);
            a.subscribe("dragstart", this.yV, this);
            a.subscribe("dragmove", this.xV, this);
            a.subscribe("dragend", this.wV, this);
            this.kb = this.ib = 0;
            b = "";
            this.j.windowOpacity && (a = a6a(this.j.windowColor), b = "rgba(" +
                a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            a = {
                "background-color": b,
                display: !1 === this.j.isVisible ? "none" : "",
                "text-align": l6a[this.j.textAlign]
            };
            this.yb && (a["border-radius"] = b ? this.bb / 8 + "px" : "");
            if (this.B = 2 === this.u.params.Ch || 3 === this.u.params.Ch) b = this.element, c = "vertical-rl", 1 === this.j.cM && (c = "vertical-lr"), g.Rg && (c = "vertical-lr" === c ? "tb-lr" : "tb-rl"), g.Al(b, "-o-writing-mode", c), g.Al(b, "-webkit-writing-mode", c), g.Al(b, "writing-mode", c), g.Al(b, "text-orientation", "upright"), g.io(b, "ytp-vertical-caption"),
                3 === this.u.params.Ch && (g.Al(b, "text-orientation", ""), g.Al(b, "transform", "rotate(180deg)"));
            g.Al(this.element, a);
            switch (this.j.nk) {
                case 0:
                case 1:
                case 2:
                    g.io(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.io(this.element, "ytp-caption-window-bottom")
            }
        },
        k6a = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (0 === a.offset || 2 === a.offset) b *= .8;
            return b
        },
        m6a = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.ke.background;
            if (null != b.backgroundOpacity || b.background) {
                var e = null != b.backgroundOpacity ? b.backgroundOpacity : a.j.ke.backgroundOpacity;
                d = a6a(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.yb && (c["box-decoration-break"] = "clone", c["border-radius"] = a.bb / 8 + "px")
            }
            if (null != b.fontSizeIncrement || null != b.offset) c["font-size"] = a.oa * k6a(b) + "px";
            d = 1;
            e = b.color || a.j.ke.color;
            if (b.color || null != b.textOpacity) e = a6a(e), d = null == b.textOpacity ? a.j.ke.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            0 === f && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.EH && (h = e = b.EH);
                var l = a.oa / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = 2 <= window.devicePixelRatio ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; 5 > p; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.Zu() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            null == e && (e = a.j.ke.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            7 === b.fontFamily && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] =
                "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.l_ && (c.visibility = "hidden");
            1 === b.HQ && a.B && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.MG || g.fw, 3 === a.u.params.Ch ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (1 === b.lm || 2 === b.lm || 3 === b.lm || 4 === b.lm || 5 === b.lm)
                if (g.MG) c["font-weight"] = "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.lm) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] =
                            "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        n6a = function(a) {
            a.I = g.Vg("SPAN");
            g.Al(a.I, {
                display: "block"
            });
            g.io(a.I, "caption-visual-line");
            a.C.appendChild(a.I)
        },
        o6a = function(a, b) {
            var c = g.Vg("SPAN");
            g.Al(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.Al(c, m6a(a, b));
            c.classList.add("ytp-caption-segment");
            a.I.appendChild(c);
            c.previousElementSibling && (g.Al(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.Al(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        p6a = function(a, b, c) {
            a.Ba = a.Ba || !!c;
            var d = {};
            Object.assign(d, a.j.ke);
            Object.assign(d, c || b.j);
            Object.assign(d, a.Vb.ke);
            (c = !a.I) && n6a(a);
            for (var e = a.Ja && a.Ma && g.pf(d, a.Ma) ? a.Ja : o6a(a, d), f = "string" === typeof b.text, h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = 0 < l || !b.append,
                    n = h[l];
                m && !c ? (n6a(a), e = o6a(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.Wg(n) : n), f || "RUBY" !== n.tagName || 4 !== n.childElementCount || g.MG || !g.Cl(n.children[2], "text-emphasis") || (m = a.B ? "padding-right" : "padding-top", g.Cl(n.children[2], "text-emphasis-position") && (m =
                    a.B ? "padding-left" : "padding-bottom"), g.Xe ? g.Al(e, m, "1em") : g.Al(e, m, "0.5em")))
            }
            a.Ma = d;
            a.Ja = e;
            a.D.push(b)
        },
        r5 = function(a, b, c, d) {
            g.WO.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Ua = d;
            this.C = b.CH
        },
        s5 = function(a, b, c, d, e, f, h, l) {
            q5.call(this, a, b, c, d, e, f, h, l);
            this.type = 1
        },
        t5 = function(a, b, c, d, e, f, h, l) {
            q5.call(this, a, b, c, d, e, f, h, l);
            this.type = 2;
            this.J = [];
            this.Y = this.T = this.Oa = 0;
            this.Aa = NaN;
            this.ob = 0;
            this.Mb = null;
            this.Sa = new g.$n(this.t2, 433, this);
            g.io(this.element, "ytp-caption-window-rollup");
            g.L(this, this.Sa);
            g.Al(this.element, "overflow", "hidden")
        },
        q6a = function(a, b) {
            if (!b) return "";
            a.B && 1 !== a.u.params.cM && (b *= -1);
            return "translate" + (a.B ? "X" : "Y") + "(" + b + "px)"
        },
        r6a = function(a) {
            a.J = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.u.params.yp, c = 0, d = 0, e = a.J.length - 1; c < b && -1 < e;) {
                var f = a.J[e];
                d += a.B ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.J.length < b && (d *= b / a.J.length);
            a.T = d;
            b = Math;
            c = b.max;
            isNaN(a.Aa) && ((d = a.j.cq) ? (e = g.Vg("SPAN"), g.bh(e, "\u2013".repeat(d)), g.Al(e, m6a(a, a.j.ke)), a.C.appendChild(e), a.Aa = e.offsetWidth, a.C.removeChild(e)) : a.Aa = 0);
            d = a.C;
            a.Y = c.call(b, a.Aa, a.ob, (a.B ? d.offsetHeight : d.offsetWidth) + 1)
        },
        s6a = function(a, b) {
            r6a(a);
            var c = a.J.reduce(function(e, f) {
                return (a.B ? f.offsetWidth : f.offsetHeight) + e
            }, 0);
            c = a.T - c;
            if (c !== a.Oa) {
                var d = 0 < c && 0 === a.Oa;
                b || isNaN(c) || d || (g.io(a.element, "ytp-rollup-mode"), g.ao(a.Sa));
                g.Al(a.C, "transform", q6a(a, c));
                a.Oa = c
            }
            r6a(a)
        },
        u5 = function(a, b, c, d, e, f, h) {
            f = void 0 === f ? !1 : f;
            h = void 0 === h ? null : h;
            g.AA.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        v5 = function(a, b, c, d, e) {
            g.AA.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        t6a = function(a) {
            var b = "_" + w5++;
            return new v5(0, 0x8000000000000, 0, b, a)
        },
        v6a = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (1 === m.rf) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = u6a(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new u5(a, b, e, c, l, d, m)
            }
            switch (m.rf) {
                case 9:
                case 10:
                    m.lm = 1;
                    break;
                case 11:
                    m.lm = 2;
                    break;
                case 12:
                    m.lm = 3;
                    break;
                case 13:
                    m.lm = 4;
                    break;
                case 14:
                    m.lm = 5
            }
            return new u5(a, b, e, c, l.textContent || "", d, m)
        },
        u6a = function(a, b, c, d, e) {
            var f = g.Zu(),
                h =
                f ? g.Vg("DIV") : g.Vg("RUBY"),
                l = g.Vg("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.Vg("DIV") : g.Vg("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.Vg("DIV") : g.Vg("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.rf;
            if (10 === c || 11 === c || 12 === c || 13 === c || 14 === c)
                if (g.Al(b, "text-emphasis-style", "filled circle"), g.Al(b, "text-emphasis-color", "currentcolor"), g.Al(b, "webkit-text-emphasis", "filled circle"), 11 === e.rf || 13 === e.rf) g.Al(b, "webkit-text-emphasis-position", "under left"), g.Al(b, "text-emphasis-position", "under left");
            c = !0;
            if (4 === e.rf || 7 === e.rf || 12 === e.rf ||
                14 === e.rf) g.Al(h, "ruby-position", "over"), g.Al(h, "-webkit-ruby-position", "before");
            else if (5 === e.rf || 6 === e.rf || 11 === e.rf || 13 === e.rf) g.Al(h, "ruby-position", "under"), g.Al(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.Vg("DIV") : g.Vg("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.Al(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.Al(f, "display", "none"), f = f.nextElementSibling, g.Al(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.Al(h.lastElementChild, "display", "none"), d ? (g.Al(h, "padding-top", "0.6em"), g.Al(f, "top", "0")) : (g.Al(h, "padding-bottom", "0.6em"), g.Al(f, "bottom", "0")));
            return h
        },
        x5 = function() {
            g.K.apply(this, arguments)
        },
        y5 = function(a) {
            x5.call(this);
            this.C = a;
            this.pens = {};
            this.T = {};
            this.Y = {};
            this.D = "_" + w5++;
            this.J = {};
            this.B = this.j = null;
            this.I = !0
        },
        z5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return Number(a)
        },
        A5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return "1" === a
        },
        B5 = function(a, b) {
            a = z5(a, b);
            return void 0 !== a ? a : null
        },
        D5 = function(a, b) {
            a = a.getAttribute(b);
            if (null != a) return C5.test(a), a
        },
        w6a = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.Y[d] : a.C);
            a = B5(b, "mh");
            null != a && (c.Uw = a);
            a = B5(b, "ju");
            null != a && (c.textAlign = a);
            a = B5(b, "pd");
            null != a && (c.Ch = a);
            a = B5(b, "sd");
            null != a && (c.cM = a);
            a = D5(b, "wfc");
            null != a && (c.windowColor = a);
            b = z5(b, "wfo");
            void 0 !== b && (c.windowOpacity = b / 255);
            return c
        },
        x6a = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.T[d]);
            a = B5(b, "ap");
            null != a && (c.nk = a);
            a = z5(b, "cc");
            null != a && (c.cq = a);
            a = z5(b, "ah");
            null != a && (c.Yi = a);
            a = z5(b, "rc");
            null != a && (c.yp = a);
            b = z5(b, "av");
            null != b && (c.mm = b);
            return c
        },
        y6a = function(a, b, c, d) {
            var e = {};
            Object.assign(e, x6a(a, b));
            Object.assign(e, w6a(a, b));
            d ? g.pf(e, a.C) ? (d = a.D, e = a.C) : d = "_" + w5++ : d = b.getAttribute("id") || "_" + w5++;
            a = z5(b, "t") + c;
            b = z5(b, "d") || 0x8000000000000;
            if (2 === e.Ch || 3 === e.Ch) c = e.yp, e.yp = e.cq, e.cq = c;
            return new v5(a, b, 0, d, e)
        },
        E5 = function(a) {
            x5.call(this);
            this.I = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        F5 = function(a) {
            a = g.sg(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        z6a = function(a, b, c, d, e) {
            0 === d && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            void 0 !== a && (f.yp = a);
            b = b.ccColCount;
            void 0 !== b && (f.cq = b);
            if (2 === f.Ch || 3 === f.Ch) b = f.yp, f.yp = f.cq, f.cq = b;
            return new v5(c, d, 0, e, f)
        },
        B6a = function() {
            this.B = this.time = this.mode = this.u = 0;
            this.C = new A6a(this);
            this.D = new A6a(this);
            this.j = [];
            this.clear()
        },
        D6a = function(a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Cs: a,
                Yp: b,
                result: 0
            };
            a = C6a[a];
            b = C6a[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.isValid() && c.Yp === d;
                if (d) return {
                    Cs: a,
                    Yp: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Cs: a,
                Yp: b,
                result: 2
            };
            return {
                Cs: a,
                Yp: b,
                result: 3
            }
        },
        F6a = function(a, b, c, d) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.B && a.reset(), a.C.u.clear(), a.D.u.clear()) : (a.B = 0, E6a(a.C, b, c, d))
        },
        G6a = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return 0 === h ? e.order - f.order : h
            });
            for (var c = g.t(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, 0 === d.type ? F6a(a, d.fP, d.gP, b) : 1 === d.type && a.u & 496 && E6a(a.D, d.fP, d.gP, b);
            a.j.length = 0
        },
        G5 = function() {
            this.type = 0
        },
        H5 = function() {
            this.state = this.Yp = this.Cs = 0
        },
        H6a = function() {
            this.timestamp = this.j = 0
        },
        I5 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.u = this.row = 0;
            this.style = new G5;
            for (a = this.C = 0; 15 >= a; a++) {
                this.B[a] = [];
                for (var b = 0; 32 >= b; b++) this.B[a][b] = new H6a
            }
        },
        J5 = function(a, b) {
            if (3 === a.style.type) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; 15 >= m; ++m) {
                    for (var n = !1, p = d ? d : 1; 32 >= p; ++p) {
                        var q = a.B[m][p];
                        if (0 !== q.j) {
                            0 === c && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var r = q.timestamp;
                            r < e && (e = r);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((0 === q.j || 32 === p) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.C(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; 15 >= h; ++h)
                    for (l = "", m = 1; 32 >= m; ++m)
                        if (p = a.B[h][m], q = p.j, 0 !== q && (0 === c && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), 32 === m || 0 === q) l && b.C(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        M6a = function(a, b) {
            switch (a) {
                case 0:
                    return I6a[(b & 127) - 32];
                case 1:
                    return J6a[b & 15];
                case 2:
                    return K6a[b & 31];
                case 3:
                    return L6a[b & 31]
            }
            return 0
        },
        K5 = function(a) {
            return a.B[a.row][a.u]
        },
        L5 = function(a, b, c) {
            2 <= b && 1 < a.u && (--a.u, K5(a).j = 0);
            var d = K5(a);
            d.timestamp = a.D.time + 0;
            d.j = M6a(b, c);
            32 > a.u && a.u++
        },
        N6a = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        M5 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.B[b + d][e].reset()
        },
        O6a = function(a) {
            a.row = 0 < a.j ? a.j : 1;
            a.u = 1;
            M5(a, 0, 15)
        },
        P6a = function(a) {
            this.B = a;
            this.D = 0;
            this.style = new G5;
            this.I = new I5(this.B);
            this.J = new I5(this.B);
            this.text = new I5(this.B);
            this.u = this.I;
            this.C = this.J;
            this.j = this.u
        },
        Q6a = function(a, b, c) {
            var d = a.u,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    4 === a.style.get() && 0 < d.j || (J5(d, c), O6a(a.u), O6a(a.C), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.B.mode = 1 << d.C;
            e ? d.u = 1 : d.j !== b && (d.j > b ? (J5(d, c), M5(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        R6a = function(a) {
            a.style.set(1);
            a.j = a.C;
            a.j.j = 0;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        S6a = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.B.mode = 1 << a.j.C
        },
        A6a = function(a) {
            this.j = a;
            this.D = 0;
            this.B = new P6a(this.j);
            this.I = new P6a(this.j);
            this.u = new H5;
            this.C = this.B
        },
        E6a = function(a, b, c, d) {
            a.u.update();
            b = D6a(b, c, a.u);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.Cs;
            c = b.Yp;
            if (32 <= e || !e) a.j.mode & a.j.u && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.C.j, b & 96 && L5(a, 0, b), c & 96 && L5(a, 0, c), 0 !== b && 0 !== c && 3 === a.style.type && J5(a, d));
            else if (e & 16) a: if (!a.u.matches(e, c) && (b = a.u, b.Cs = e, b.Yp = c, b.state = 2, b = e & 8 ? a.I : a.B, a.C = b, a.j.mode = 1 << (a.D << 2) + (b.D << 1) + (4 === b.style.type ? 1 : 0), (a.j.mode | 1 << (a.D << 2) + (b.D << 1) + (4 !== b.style.type ? 1 : 0)) & a.j.u))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                N6a(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, 0 < f && (b += f, e -= f)) : (f = f + e - h, 0 < f && (e -= f));
                                M5(c, b, e)
                            }
                    }
                    c.row = d;
                    c.u = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                L5(b.j, 0, 32);
                                break a;
                            case 48:
                                57 === c ? (d = b.j, K5(d).j = 0, 32 > d.u && d.u++) : L5(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && L5(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && L5(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && 47 >= c) switch (c) {
                            case 32:
                                R6a(b);
                                break;
                            case 33:
                                d = b.j;
                                1 < d.u && (--d.u, K5(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = K5(d);
                                for (a = 0; 15 >= a; a++)
                                    for (c = 0; 32 >= c; c++)
                                        if (d.B[a][c] === b) {
                                            for (; 32 >= c; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Q6a(b, 2, d);
                                break;
                            case 38:
                                Q6a(b, 3, d);
                                break;
                            case 39:
                                Q6a(b, 4, d);
                                break;
                            case 40:
                                L5(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.u;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.B.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                O6a(d);
                                S6a(b);
                                break;
                            case 43:
                                S6a(b);
                                break;
                            case 44:
                                a = b.u;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        J5(a, d)
                                }
                                M5(a,
                                    0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (15 > a.row) {
                                                ++a.row;
                                                a.u = 1;
                                                break b
                                            }
                                        case 3:
                                    }
                                    2 > a.j && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;J5(a, d);N6a(a, b, b + 1, a.j - 1);M5(a, a.row, 1)
                                }
                                break;
                            case 46:
                                M5(b.C, 0, 15);
                                break;
                            case 47:
                                J5(b.u, d), b.C.updateTime(b.B.time + 0), d = b.C, b.C = b.u, b.u = d, R6a(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, 32 < (d.u += c & 3) && (d.u = 32)
                        }
                }
        },
        T6a = function() {},
        N5 = function(a, b, c) {
            this.trackData = a;
            this.I = c;
            this.version = this.D = this.B = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.u = []
        },
        O5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        P5 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        Q5 = function(a, b) {
            x5.call(this);
            this.B = a;
            this.C = b;
            this.track = "CC3" === this.C.languageName ? 4 : 0;
            this.j = new B6a;
            this.j.u = 1 << this.track
        },
        V6a = function(a) {
            if ("string" === typeof a) return !1;
            a = new N5(a, 8, 0);
            return U6a(a)
        },
        U6a = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || 1380139777 !== P5(a)) return !1;
            a.version = O5(a);
            if (1 < a.version) return !1;
            O5(a);
            O5(a);
            O5(a);
            return !0
        },
        R5 = function() {
            x5.call(this)
        },
        W6a = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (3 === p.nodeType) p = new u5(b, c, d, e.id, p.nodeValue, f || 0 < n, g.lf(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    W6a(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        X6a = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.t(b);
            for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + Number(c.value);
            return 1E3 * a
        },
        Y6a = function(a, b, c, d) {
            d = Object.assign({
                Uw: 0
            }, d);
            return new v5(a, b, c, "_" + w5++, d)
        },
        S5 = function(a, b) {
            g.K.call(this);
            this.G = a;
            this.Z = b;
            this.parser = null;
            this.j = this.G.zw()
        },
        d7a = function(a, b, c, d, e) {
            d = d || 0;
            e = e || 0;
            if (a.j && b) {
                var f = e,
                    h = Z6a(a, b, d),
                    l = [];
                try {
                    for (var m = g.t(h), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value,
                            q = p.trackData,
                            r = p.TL;
                        l = "string" !== typeof q ? l.concat($6a(a, c, q, r, f)) : "WEBVTT" === q.substring(0, 6) ? l.concat(a7a(a, q, r)) : l.concat(b7a(a, c, q, r))
                    }
                    var w = l
                } catch (x) {
                    g.zz(x), a.clear(), w = []
                }
                if (0 !== w.length) return w
            }
            b = c7a(b);
            if (!b) return [];
            try {
                return "string" !== typeof b ? $6a(a, c, b, d, e) : "WEBVTT" === b.substring(0, 6) ? a7a(a, b, d) : b7a(a, c, b, d)
            } catch (x) {
                return g.zz(x), a.clear(), []
            }
        },
        c7a = function(a) {
            if ("string" ===
                typeof a || V6a(a)) return a;
            var b = new DataView(a);
            if (8 >= b.byteLength || 1718909296 !== b.getUint32(4)) return "";
            b = g.CC(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.nC(a)
        },
        Z6a = function(a, b, c) {
            if ("string" === typeof b || V6a(b)) return [{
                trackData: b,
                TL: c
            }];
            var d = new DataView(b);
            if (8 >= d.byteLength || 1718909296 !== d.getUint32(4)) return [];
            var e = g.pxa(d);
            if (a.j && e) {
                var f = g.hxa(e),
                    h = g.ixa(e);
                e = e.j;
                f && e && a.j.yB(e, f, h)
            }
            f = g.LC(d, 1835295092);
            if (!f || !f.length || !f[0].size) return [];
            a = [];
            f = g.t(f.entries());
            for (h = f.next(); !h.done; h = f.next()) e = g.t(h.value), h = e.next().value, e = e.next().value, e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.nC(e), a.push({
                trackData: e,
                TL: c + 1E3 * h
            });
            e7a(d, a, c);
            return a = a.filter(function(l) {
                return !!l.trackData
            })
        },
        e7a = function(a, b, c) {
            var d = g.CC(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.DC(d) || 9E4);
            d = 0;
            var f = g.LC(a, 1836019558);
            f = g.t(f.entries());
            for (var h = f.next(); !h.done; h = f.next()) {
                var l = g.t(h.value);
                h = l.next().value;
                l = l.next().value;
                h < b.length && (l = g.CC(a, l.dataOffset, 1953653094)) && (l = g.CC(a, l.dataOffset, 1952867444)) && (l = g.JC(l) / e * 1E3, 0 === h && (d = l), b[h].TL = l - d + c || c * h * 1E3)
            }
        },
        $6a = function(a, b, c, d, e) {
            if (!V6a(c)) throw Error("Invalid binary caption track data");
            a.parser || (a.parser = new Q5(e, b));
            return a.parser.u(c, d)
        },
        a7a = function(a, b, c) {
            a.parser || (a.parser = new R5);
            a = a.parser.u(b, c);
            .01 > Math.random() && g.Az(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        b7a = function(a, b, c, d) {
            if ("{" === c[0]) try {
                return a.parser || (a.parser = new E5(f7a(b))), a.parser.u(c, d)
            } catch (f) {
                return g.zz(f), []
            }
            var e = g.C_a(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if ("timedtext" === e.firstChild.tagName) {
                if (3 === Number(e.firstChild.getAttribute("format"))) return a.parser || (a.parser = new y5(f7a(b), a.Z)), a.parser.u(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if ("transcript" === e.firstChild.tagName) throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        f7a = function(a) {
            var b = {};
            if (a = g.eH(a)) b.lang = a, g.X0a.test(a) && (b.Ch = 1);
            return b
        },
        T5 = function(a) {
            g.TO.call(this, a);
            var b = this;
            this.G = a;
            this.Z = this.G.V();
            this.videoData = this.G.getVideoData();
            this.ob = this.G.fb();
            this.B = {
                ke: {}
            };
            this.D = {
                ke: {}
            };
            this.Ba = [];
            this.Y = {};
            this.Sa = {};
            this.ya = !1;
            this.lc = g.QI(this.videoData);
            this.ib = g.sIa(this.videoData, this.G);
            this.Vb = !!this.videoData.captionTracks.length;
            this.wc = !!this.videoData.Nd;
            this.Wa = "3" === this.Z.controlsType;
            this.u = this.I = this.J = this.Oa = this.kb = null;
            this.bb = new S5(this.G, this.Z);
            this.j = null;
            this.Aa = new g.pE(this);
            this.ea = new g.W({
                F: "div",
                K: "ytp-caption-window-container",
                X: {
                    id: "ytp-caption-window-container"
                }
            });
            this.T = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            var c = null,
                d = g.To("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.Ho(d));
            this.storage = c;
            var e;
            this.yb = !(null == (e = a.Xd()) || !e.rB());
            this.C = g7a(this);
            this.oa = !this.C && this.Wa && this.yb && this.ib;
            g.L(this, this.bb);
            this.C ? this.Ma = this.Ja = null : (this.Ja = new g.Yn(this.tM, void 0, this), g.L(this, this.Ja), this.Ma = new g.$n(this.S3, 2E3, this), g.L(this, this.Ma));
            g.L(this, this.Aa);
            this.Z.N("caption_window_container_killswitch") ||
                g.nO(this.player, this.ea.element, 4);
            g.L(this, this.ea);
            this.C || this.Aa.S(a, "resize", this.wM);
            (this.Mb = g.nG(this.Z) && !g.ez() && !this.G.isFullscreen() && !this.C && !this.oa) && this.Aa.S(a, "resize", this.v1);
            this.Aa.S(a, "onPlaybackAudioChange", this.I0);
            this.Aa.S(a, g.CA("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.Aa.S(a, g.DA("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            h7a(this, b6a() || {})
        },
        k7a = function(a) {
            if (1 === a.Z.ib || 1 === a.videoData.xJ || "alwayson" === g.zI(a.videoData, "yt:cc")) return !0;
            if (a.videoData.captionTracks.length) var b = a.player.getAudioTrack().B;
            if (2 === a.Z.ib) {
                if (g.IG(a.Z)) var c = i7a(a);
                else if (a.storage) try {
                    c = a.storage.get("module-enabled")
                } catch (e) {
                    a.storage.remove("module-enabled")
                } else c = null;
                if (null != c) return !!c
            }
            c = U5a(a.player.getAudioTrack(), g.IG(a.Z));
            var d = g.zI(a.videoData, "yt:cc");
            if (void 0 === j7a(a)) {
                if ("CAPTIONS_INITIAL_STATE_ON_RECOMMENDED" === c) return d ? "on" === d : !0;
                if ("CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED" === c) return "on" === d
            } else return "on" === d;
            return "ON" ===
                b || "on" === g.zI(a.videoData, "yt:cc")
        },
        U5 = function(a, b) {
            if (a.j && (void 0 === b || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.player.getAudioTrack();
            return !!a.u || "FORCED_ON" === a.B
        },
        j7a = function(a) {
            var b = void 0,
                c = g.Cv(g.Bv.getInstance(), 65);
            if (g.IG(a.Z) && null != c) {
                if (null != i7a(a)) return !1;
                b = !c
            }
            return b
        },
        l7a = function(a) {
            var b;
            a.lc ? b = new r5(a.Z, a.videoData, a.player.getAudioTrack(), a.player) : a.ib ? b = new p5(a.videoData.j, a.player) : a.Vb ? b = new g.XO(a.Z, a.videoData, a.player.getAudioTrack()) : b = new g.$O(a.Z, a.videoData.Nd, a.videoData.videoId, g.PCa(a.videoData), a.videoData.ul);
            return b
        },
        W5 = function(a, b) {
            if (a.u) {
                if (a.I && a.I.C) return a.I.C;
                b || (b = a.wc ? !1 : a.Vb ? !1 : !0);
                b = b || !!g.Cv(g.Bv.getInstance(), 66);
                b = g.UO(a.u.j, b);
                if (V5a(a.Z)) {
                    var c = a.G.isInline() ? void 0 : g.Yz("yt-player-caption-sticky-language");
                    c = [c, a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.zI(a.videoData, "yt:cc_default_lang")];
                    for (var d = !1, e = 0; e < c.length; e++) {
                        var f = c[e];
                        if (f) {
                            d = !0;
                            for (var h = 0; h < b.length; h++)
                                if (g.eH(b[h]) === f) return b[h];
                            f = f.split("-")[0];
                            for (h = 0; h < b.length; h++)
                                if (g.eH(b[h]) === f) return b[h]
                        }
                    }
                    if (d) {
                        var l;
                        return (null == (l = a.I) ? void 0 : l.j) ||
                            V5(a)
                    }
                } else
                    for (l = [a.videoData.captionsLanguagePreference, a.Z.captionsLanguagePreference, g.zI(a.videoData, "yt:cc_default_lang")], c = 0; c < l.length; c++)
                        for (d = 0; d < b.length; d++)
                            if (g.eH(b[d]) === l[c]) return b[d];
                return a.I && a.I.j ? a.I.j : (l = b.find(function(m) {
                    return m.isDefault
                })) ? l : b[0] || V5(a)
            }
            return null
        },
        V5 = function(a) {
            return a.I && a.I.u
        },
        X5 = function(a) {
            var b = V5(a);
            return !!b && a.j === b
        },
        m7a = function(a) {
            g.UO(a.u.j, !0);
            var b = U5a(a.player.getAudioTrack(), g.IG(a.Z)),
                c;
            "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === b ? c = W5(a, a.ya) : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === b && U5(a) ? c = V5(a) : j7a(a) || a.ya || k7a(a) ? c = W5(a, a.ya) : U5(a) && (c = V5(a));
            if (a.C || a.oa) {
                var d = g.UO(a.u.j, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.Vg("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.cH(f));
                    h.setAttribute("srclang", g.eH(f));
                    h.setAttribute("id", f.toString());
                    a.oa || h.setAttribute("src", a.u.Ys(f, "vtt"));
                    f === c && h.setAttribute("default",
                        "1");
                    b.push(h)
                }
                c = a.G.Xd();
                c.Ny(b);
                c = c.Bf();
                a.yb && a.Aa.S(c.textTracks, "change", a.e3)
            } else !a.j && c && Y5(a, c), a.player.Pa("onCaptionsTrackListChanged"), a.player.Pa("onApiChange")
        },
        n7a = function(a, b) {
            var c = a.G.Xd().Bf().textTracks;
            a = a.j.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? "showing" !== e.mode && (e.mode = "showing") : "showing" === e.mode && (e.mode = "disabled"))
            }
        },
        Y5 = function(a, b, c) {
            a.loaded && a.unload();
            null != c && (a.ya = c, a.ya && (g.IG(a.Z) ? Z5(a, !!b) : $5(a, !!b)));
            a.j = b;
            U5(a) && (a.j = V5(a));
            a.load()
        },
        p7a = function(a, b) {
            if (b instanceof v5) {
                var c = a.Y[b.id];
                c && c.u !== b && (c.dispose(), delete a.Y[b.id], c = null);
                c || (c = o7a(a, b)) && (a.Y[b.id] = c)
            } else c = b.windowId, a.Sa[c] || (a.Sa[c] = []), a.Sa[c].push(b)
        },
        q7a = function(a, b) {
            a.Z.N("caption_window_container_killswitch") ? g.nO(a.player, b, 4) : a.ea.element.appendChild(b)
        },
        o7a = function(a, b) {
            var c = a.ob.getVideoContentRect(!0).height,
                d = a.ob.getVideoContentRect(!0).width;
            if (!c || !d) return null;
            var e = a.j ? g.eH(a.j) : null;
            e && g.X0a.test(e) && (b.params.Ch = 1);
            var f = a.ob.getPlayerSize();
            c *= a.T.height;
            d *= a.T.width;
            e = f.height * a.T.height;
            f = f.width * a.T.width;
            "google-live" !== a.Z.playerStyle || a.B.isDefault || Object.assign(b.params, a.B);
            switch (null != b.params.Uw ? b.params.Uw : 1 < b.j.length ? 1 : 0) {
                case 1:
                    return new s5(b, a.B, a.D, d, c, f, e, a.Z.experiments);
                case 2:
                    return new t5(b, a.B, a.D, d, c, f, e, a.Z.experiments);
                default:
                    return new q5(b, a.B, a.D, d, c, f, e, a.Z.experiments)
            }
        },
        h7a = function(a, b, c) {
            c =
                void 0 === c ? !1 : c;
            var d = a6.ke;
            a.B = {};
            Object.assign(a.B, a6);
            a.B.ke = {};
            Object.assign(a.B.ke, d);
            a.D = {
                ke: {}
            };
            var e = b.backgroundOverride ? a.D : a.B,
                f = b.background || d.background;
            C5.test(f);
            e.ke.background = f;
            e = b.colorOverride ? a.D : a.B;
            f = b.color || d.color;
            C5.test(f);
            e.ke.color = f;
            e = b.windowColorOverride ? a.D : a.B;
            f = b.windowColor || a6.windowColor;
            C5.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.D : a.B;
            f = b.backgroundOpacity;
            null == f && (f = d.backgroundOpacity);
            e.ke.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.D : a.B;
            f = b.fontSizeIncrement;
            null == f && (f = d.fontSizeIncrement);
            e.ke.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.D : a.B;
            e = b.fontStyle;
            null == e && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.ke;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.D : a.B;
            f = b.textOpacity;
            null == f && (f = d.textOpacity);
            e.ke.textOpacity = f;
            e = b.windowOpacityOverride ? a.D : a.B;
            f = b.windowOpacity;
            null == f && (f = a6.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.D : a.B;
            f = b.charEdgeStyle;
            null == f && (f = d.charEdgeStyle);
            e.ke.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.D : a.B;
            f = b.fontFamily;
            null == f && (f = d.fontFamily);
            e.ke.fontFamily = f;
            a.loaded && a.wM();
            c && g.Xz("yt-player-caption-display-settings", b, 2592E3)
        },
        s7a = function(a, b, c) {
            b && !a.J ? (b = t6a({
                Ch: 0,
                lang: "vi"
            }), a.J = [b, new u5(b.start, b.end - b.start, 0, b.id, null != c ? c : "Ph\u1ee5 \u0111\u1ec1 tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0y")], a.player.qe(a.J)) : !b && a.J && (r7a(a, a.J), a.J = null)
        },
        r7a = function(a, b) {
            a.player.Ah(b);
            b = g.t(b);
            for (var c = b.next(); !c.done; c = b.next()) g.Zb(a.Ba, c.value);
            g.Zn(a.Ja)
        },
        t7a = function(a, b) {
            b && (a.T = {
                top: b.top,
                right: b.right,
                bottom: b.bottom,
                left: b.left,
                width: 1 - b.left - b.right,
                height: 1 - b.top - b.bottom
            }, a.ea.element.style.top = 100 * a.T.top + "%", a.ea.element.style.left = 100 * a.T.left + "%", a.ea.element.style.width = 100 * a.T.width + "%", a.ea.element.style.height = 100 * a.T.height + "%")
        },
        $5 = function(a, b) {
            if (a.storage) try {
                a.storage.set("module-enabled", b)
            } catch (c) {}
        },
        Z5 = function(a, b) {
            a.G.isInline() || g.Xz("yt-player-sticky-caption", b, 2592E3)
        },
        i7a = function(a) {
            if (!a.G.isInline()) return g.Yz("yt-player-sticky-caption")
        },
        g7a = function(a) {
            var b,
                c = !(null == (b = a.G.Xd()) || !b.qB());
            return a.Wa && c && !a.ib
        };
    g.zT.prototype.zz = g.ba(39, function(a) {
        var b = 2;
        this.Ma.has(a) ? b = 0 : g.YLa(this, a) && (b = 1);
        return b
    });
    g.EW.prototype.zz = g.ba(38, function(a) {
        return this.md.zz(a)
    });
    g.zT.prototype.yB = g.ba(37, function(a, b, c) {
        this.Ba.set(a, {
            Ps: b,
            Ky: c
        })
    });
    g.EW.prototype.yB = g.ba(36, function(a, b, c) {
        this.md.yB(a, b, c)
    });
    g.nP.prototype.Pv = g.ba(31, function() {
        for (var a = g.Ng(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.Zg(a[b])
    });
    g.jT.prototype.Pv = g.ba(30, function() {
        this.mediaElement.Pv()
    });
    g.nP.prototype.rB = g.ba(29, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.jT.prototype.rB = g.ba(28, function() {
        return this.mediaElement.rB()
    });
    g.nP.prototype.qB = g.ba(27, function() {
        return !!this.j.textTracks
    });
    g.jT.prototype.qB = g.ba(26, function() {
        return this.mediaElement.qB()
    });
    g.nP.prototype.Ny = g.ba(25, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.jT.prototype.Ny = g.ba(24, function(a) {
        this.mediaElement.Ny(a)
    });
    g.WO.prototype.WK = g.ba(23, function() {
        return !1
    });
    g.WO.prototype.Sq = g.ba(22, function() {});
    g.XO.prototype.Sq = g.ba(21, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Ys(a, b);
        this.Ip();
        this.u = g.Lu(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.$O.prototype.Sq = g.ba(20, function(a, b, c) {
        var d = this;
        this.isDisposed();
        b = this.Ys(a, b);
        this.Ip();
        this.u = g.Lu(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.u = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.rW.prototype.Oz = g.ba(10, function() {
        return this.I
    });
    g.SY.prototype.Oz = g.ba(9, function() {
        var a;
        return (null == (a = g.NN(this)) ? void 0 : a.zw()) || null
    });
    g.gO.prototype.zw = g.ba(8, function() {
        return this.app.Oz()
    });
    g.tY.prototype.zw = g.ba(7, function() {
        var a;
        return (null == (a = this.Ia) ? void 0 : a.Oz()) || null
    });
    g.aC.prototype.vD = g.ba(3, function(a) {
        return (a = this.dn(a)) ? a.j : 0
    });
    g.OD.prototype.vD = g.ba(2, function() {
        return 0
    });
    var $5a = /#(.)(.)(.)/,
        Z5a = /^#(?:[0-9a-f]{3}){1,2}$/i,
        g6a = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Achinese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksika",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            ckb_Arab: "Central Kurdish (Arabic)",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fulah",
            ff_Adlm: "Fulah (Adlam)",
            ff_Latn: "Fulah (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Lahnda",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lkt: "Lakota",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaq",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Sakha",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    o5.prototype.contains = function(a) {
        a = g.mc(this.segments, a);
        return 0 <= a || 0 > a && 1 === (-a - 1) % 2
    };
    o5.prototype.length = function() {
        return this.segments.length / 2
    };
    g.v(d6a, g.K);
    g.k = d6a.prototype;
    g.k.ra = function() {
        g.K.prototype.ra.call(this);
        this.B && this.B.cancel()
    };
    g.k.Zw = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Bd();
        var b = this.j;
        this.j = g.Qb(this.ea.Po(a).Ya);
        b !== this.j && this.Y && this.Y()
    };
    g.k.reset = function() {
        this.C = new o5;
        this.I = -1;
        this.B && (this.B.cancel(), this.B = null)
    };
    g.k.kR = function() {
        this.isDisposed();
        var a;
        if (a = null != this.j) a = this.j, a = a.j.Rp(a);
        if (a && !this.B && !(this.j && 30 < this.j.startTime - this.player.getCurrentTime())) {
            a = this.j;
            a = a.j.Cy(a);
            var b;
            if (null == (b = this.player.getVideoData()) ? 0 : b.enableServerStitchedDai)
                if (b = this.player.zw()) {
                    var c = a.Ya[0].j.info.id,
                        d = a.Ya[0].Na,
                        e = a.Ya[0].C;
                    if (this.policy.Wa) {
                        if (b = b.Zs(e, d, c, 3)) a.J = b
                    } else if (c = b.hn(e, d, c, 3))
                        if (b = b.zz(d), 0 === b) c && (a.u = new g.UB(c));
                        else if (2 === b) {
                        this.J.start();
                        e6a(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            a.Ya[0].duration ? (this.C.contains(a.Ya[0].Na) || f6a(this, a), this.j = g.Qb(a.Ya)) : !this.Z.N("force_caption_seek_for_live_killswitch") && e6a(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.J.start()
    };
    g.v(p5, g.WO);
    g.k = p5.prototype;
    g.k.Sq = function(a, b, c) {
        var d = this;
        this.Ip();
        b = i6a(this, a.getId());
        b || (b = a.languageCode, b = this.u.isManifestless ? j6a(this, b, "386") : j6a(this, b));
        if (b) {
            var e = 1E3 * (b.index.vD(b.index.El()) - b.index.getStartTime(b.index.El())),
                f = new g.YO(this.Z);
            this.B = new d6a(f, this.G, b, function(h, l) {
                c(h, a, l, e)
            }, this.I || g.MD(b.info), function() {
                d.B && d.B.reset();
                d.D = !0
            })
        }
    };
    g.k.WK = function() {
        var a = this.D;
        this.D = !1;
        return a
    };
    g.k.Rw = function(a) {
        var b = this.I ? [new g.bH({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.bH({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.u.isManifestless ? h6a(this, "386") : h6a(this);
        b = g.t(b);
        for (var c = b.next(); !c.done; c = b.next()) g.VO(this.j, c.value);
        a()
    };
    g.k.Ip = function() {
        this.B && (this.B.dispose(), this.B = null)
    };
    g.k.Ys = function() {
        return ""
    };
    var C5 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var l6a = ["left", "right", "center", "justify"];
    g.v(q5, g.W);
    g.k = q5.prototype;
    g.k.yV = function(a, b) {
        var c = g.Jl(this.element, this.element.parentElement);
        this.ib = a - c.x;
        this.kb = b - c.y;
        g.io(this.element, "ytp-dragging")
    };
    g.k.xV = function(a, b) {
        var c = g.Ll(this.element);
        a = a - this.ib - .02 * this.playerWidth;
        var d = b - this.kb - .02 * this.playerHeight,
            e = (a + c.width / 2) / this.maxWidth * 3;
        e = Math.floor(g.sg(e, 0, 2));
        var f = (d + c.height / 2) / this.Wa * 3;
        f = Math.floor(g.sg(f, 0, 2));
        b = e + 3 * f;
        a = (a + e / 2 * c.width) / this.maxWidth;
        a = 100 * g.sg(a, 0, 1);
        c = (d + f / 2 * c.height) / this.Wa;
        c = 100 * g.sg(c, 0, 1);
        this.u.params.nk = b;
        this.u.params.mm = c;
        this.u.params.Yi = a;
        this.u.params.isDefault = !1;
        this.j.nk = b;
        this.j.mm = c;
        this.j.Yi = a;
        this.j.isDefault = !1;
        this.ea.nk = b;
        this.ea.mm = c;
        this.ea.Yi = a;
        this.ea.isDefault = !1;
        this.iT()
    };
    g.k.wV = function() {
        g.ko(this.element, "ytp-dragging")
    };
    g.k.iT = function() {
        this.Bx(this.D)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.Bx = function(a) {
        var b = Math.min(this.aQ(), this.maxWidth),
            c = this.ZP(),
            d = "";
        3 === this.u.params.Ch && (d = "rotate(180deg)");
        g.Al(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "96%",
            "max-height": "96%",
            margin: "",
            transform: ""
        });
        this.mH(a);
        a = {
            transform: d,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var e = .96 * this.j.Yi + 2;
        d = this.j.nk;
        switch (d) {
            case 0:
            case 3:
            case 6:
                (b = this.j.ke.fontSizeIncrement) && 0 < b && 2 !== this.j.Ch && 3 !==
                    this.j.Ch && (e = Math.max(e / (1 + 2 * b), 2));
                a.left = e + "%";
                break;
            case 1:
            case 4:
            case 7:
                a.left = e + "%";
                e = this.C.offsetWidth;
                b || e ? (b = b || e + 1, a.width = b + "px", a["margin-left"] = b / -2 + "px") : a.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                a.right = 100 - e + "%"
        }
        b = .96 * this.j.mm + 2;
        switch (d) {
            case 0:
            case 1:
            case 2:
                a.top = b + "%";
                break;
            case 3:
            case 4:
            case 5:
                a.top = b + "%";
                (c = c || this.element.clientHeight) ? (a.height = c + "px", a["margin-top"] = c / -2 + "px") : a.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                a.bottom = 100 - b + "%"
        }
        g.Al(this.element,
            a)
    };
    g.k.mH = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.D[b]; b++);
        if (this.Ba || this.D.length > b) b = 0, this.Ba = !1, this.D = [], this.I = this.Ma = this.Ja = null, g.Xg(this.C);
        for (; b < a.length; b++) p6a(this, a[b])
    };
    g.k.aQ = function() {
        return 0
    };
    g.k.ZP = function() {
        return 0
    };
    g.k.toString = function() {
        return g.W.prototype.toString.call(this)
    };
    g.v(r5, g.WO);
    r5.prototype.Sq = function(a, b, c) {
        Y5a(this.videoData.videoId, a.vssId, c)
    };
    r5.prototype.Rw = function(a) {
        if (this.audioTrack)
            for (var b = g.t(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.VO(this.j, c.value);
        a()
    };
    g.v(s5, q5);
    s5.prototype.mH = function(a) {
        var b = this.u.j;
        q5.prototype.mH.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, u7a);
                var e = c.j;
                var f = d
            }
            p6a(this, c, d)
        }
    };
    var u7a = {
        l_: !0
    };
    g.v(t5, q5);
    g.k = t5.prototype;
    g.k.iT = function() {
        g.bo(this.Sa)
    };
    g.k.t2 = function() {
        g.ko(this.element, "ytp-rollup-mode");
        this.Bx(this.Mb, !0)
    };
    g.k.ZP = function() {
        return this.B ? this.Y : this.T
    };
    g.k.aQ = function() {
        return this.B ? this.T : this.Y
    };
    g.k.Bx = function(a, b) {
        this.Mb = a;
        if (this.u.params.yp) {
            for (var c = 0, d = 0; d < this.D.length && c < a.length; d++) this.D[d] === a[c] && c++;
            0 < c && c < a.length && (a = this.D.concat(a.slice(c)));
            this.ob = this.Y;
            this.T = this.Y = 0;
            q5.prototype.Bx.call(this, a);
            s6a(this, b)
        }
        q5.prototype.Bx.call(this, a)
    };
    g.v(u5, g.AA);
    u5.prototype.toString = function() {
        return g.AA.prototype.toString.call(this)
    };
    g.v(v5, g.AA);
    v5.prototype.toString = function() {
        return g.AA.prototype.toString.call(this)
    };
    var w5 = 0;
    g.v(x5, g.K);
    x5.prototype.u = function() {
        return []
    };
    x5.prototype.reset = function() {};
    g.v(y5, x5);
    y5.prototype.reset = function() {
        this.J = {};
        this.B = this.j = null;
        this.I = !0
    };
    y5.prototype.u = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.t(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, 1 === c.nodeType) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.t(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = A5(a, "b");
                        null != l && (h.bold = l);
                        l = A5(a, "i");
                        null != l && (h.italic = l);
                        l = A5(a, "u");
                        null != l && (h.underline = l);
                        l = B5(a, "et");
                        null != l && (h.charEdgeStyle = l);
                        l = B5(a, "of");
                        null != l && (h.offset = l);
                        l = D5(a, "bc");
                        null != l && (h.background = l);
                        l = D5(a, "ec");
                        null != l && (h.EH = l);
                        l = D5(a, "fc");
                        null != l && (h.color = l);
                        l = B5(a, "fs");
                        null != l && 0 !== l && (h.fontFamily = l);
                        l = z5(a, "sz");
                        void 0 !== l && (h.fontSizeIncrement = l / 100 - 1);
                        l = z5(a, "bo");
                        void 0 !== l && (h.backgroundOpacity = l / 255);
                        l = z5(a, "fo");
                        void 0 !== l && (h.textOpacity = l / 255);
                        l = B5(a, "rb");
                        null != l && 10 !== l &&
                            0 !== l && (h.rf = 10 < l ? l - 1 : l);
                        a = B5(a, "hg");
                        null != a && (h.HQ = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.Y[c] = w6a(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.T[c] = x6a(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.t(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, 1 === a.nodeType) switch (a.tagName) {
                    case "w":
                        this.j = y6a(this, a, b, !1);
                        (a = this.J[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.J[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        l = b;
                        c = [];
                        f = a.getAttribute("w") || this.D;
                        h = !!A5(a, "a");
                        l = (z5(a, "t") || 0) + l;
                        var m = z5(a, "d") || 5E3;
                        h || (!this.I && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && "\n" === this.B.text && (this.B.text = ""));
                        var n = h ? 6 : 5,
                            p = a.getAttribute("p");
                        p = p ? this.pens[p] : null;
                        var q = Array.from(a.childNodes);
                        q.length && (this.I = null != a.getAttribute("d"));
                        for (var r = 0; r < q.length; r++) {
                            var w = q[r],
                                x = void 0;
                            0 < r && (h = !0);
                            var z = void 0;
                            1 === w.nodeType && (z = w);
                            if (z && "s" === z.tagName) {
                                if ((w = (w = z.getAttribute("p")) ? this.pens[w] : null) && w.rf && (1 === w.rf ? (w = q.slice(r, r +
                                        4), 4 === w.length && (x = v6a(l, m, f, h, n, w, this.pens), r += 3)) : x = v6a(l, m, f, h, n, [z], this.pens)), !x) {
                                    var B = z;
                                    x = l;
                                    z = m;
                                    w = f;
                                    var D = h,
                                        G = n,
                                        E = B.textContent ? B.textContent : "",
                                        J = B.getAttribute("p");
                                    J = J ? this.pens[J] : null;
                                    B = z5(B, "t") || 0;
                                    x = new u5(x + B, z - B, G, w, E, D, J)
                                }
                            } else x = new u5(l, m, n, f, w.textContent || "", h, p);
                            c.push(x);
                            this.B = x
                        }
                        if (0 < c.length)
                            for (c[0].windowId === this.D && (this.j = y6a(this, a, b, !0), d.push(this.j)), a = g.t(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var v7a = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.v(E5, x5);
    E5.prototype.reset = function() {
        this.B.clear()
    };
    E5.prototype.u = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.t(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                null != h && (f.offset = h);
                void 0 !== e.szPenSize && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                null != h && (f.charEdgeStyle = h);
                void 0 !== e.ecEdgeColor && (f.EH = F5(e.ecEdgeColor));
                h = e.fsFontStyle;
                null != h && 0 !== h && (f.fontFamily =
                    h);
                void 0 !== e.fcForeColor && (f.color = F5(e.fcForeColor));
                void 0 !== e.foForeAlpha && (f.textOpacity = e.foForeAlpha / 255);
                void 0 !== e.bcBackColor && (f.background = F5(e.bcBackColor));
                void 0 !== e.boBackAlpha && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && 10 !== h && (f.rf = 10 < h ? h - 1 : h, f.lm = v7a.get(f.rf));
                e.hgHorizGroup && (f.HQ = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.t(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.I), void 0 !== e.mhModeHint && (f.Uw = e.mhModeHint), void 0 !== e.juJustifCode && (f.textAlign = e.juJustifCode), void 0 !== e.pdPrintDir && (f.Ch = e.pdPrintDir), void 0 !== e.sdScrollDir && (f.cM = e.sdScrollDir), void 0 !== e.wfcWinFillColor && (f.windowColor = F5(e.wfcWinFillColor)), void 0 !== e.wfoWinFillAlpha && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.t(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), void 0 !== e.ahHorPos &&
                (f.Yi = e.ahHorPos), void 0 !== e.apPoint && (f.nk = e.apPoint), void 0 !== e.avVerPos && (f.mm = e.avVerPos), void 0 !== e.ccCols && (f.cq = e.ccCols), void 0 !== e.rcRows && (f.yp = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.t(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                d = (l.tStartMs || 0) + b;
                e = l.dDurationMs || 0;
                if (l.id) f = String(l.id), d = z6a(this, l, d, e, f), a.push(d), this.B.set(f, d);
                else {
                    l.wWinId ? f = l.wWinId.toString() : (f = "_" + w5++, h = z6a(this, l, d, e, f), a.push(h), this.B.set(f, h));
                    0 === e && (e = 5E3);
                    h = this.B.get(f);
                    var m = !!l.aAppend,
                        n = m ? 6 : 5,
                        p = l.segs,
                        q = null;
                    l.pPenId && (q = this.j.get(l.pPenId));
                    for (l = 0; l < p.length; l++) {
                        var r = p[l],
                            w = r.utf8;
                        if (w) {
                            var x = r.tOffsetMs || 0,
                                z = null;
                            r.pPenId && (z = this.j.get(r.pPenId));
                            if (2 === (null != h.params.Uw ? h.params.Uw : 1 < h.j.length ? 1 : 0) && m && "\n" === w) continue;
                            if (r = z && 1 === z.rf)
                                if (r = l, r + 3 >= p.length || !p[r + 1].pPenId || !p[r + 2].pPenId || !p[r + 3].pPenId) r = !1;
                                else {
                                    var B = p[r + 1].pPenId;
                                    (B = this.j.get(B)) && B.rf && 2 === B.rf ? (B = p[r + 2].pPenId, B = this.j.get(B), !B || !B.rf || 3 > B.rf ? r = !1 : (B = p[r + 3].pPenId, r = (B = this.j.get(B)) &&
                                        B.rf && 2 === B.rf ? !0 : !1)) : r = !1
                                }
                            if (r) {
                                x = p[l + 1].utf8;
                                r = p[l + 3].utf8;
                                B = p[l + 2].utf8;
                                var D = this.j.get(p[l + 2].pPenId);
                                w = u6a(w, x, B, r, D);
                                m = new u5(d, e, n, f, w, m, z);
                                l += 3
                            } else m = new u5(d + x, e - x, n, h.id, w, m, z || q);
                            m && (a.push(m), h.j.push(m))
                        }
                        m = !0
                    }
                }
            }
            b = a
        } else b = [];
        return b
    };
    B6a.prototype.clear = function() {
        this.B = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    B6a.prototype.reset = function() {
        this.mode = 0;
        this.C.reset(0);
        this.D.reset(1)
    };
    var C6a = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    G5.prototype.set = function(a) {
        this.type = a
    };
    G5.prototype.get = function() {
        return this.type
    };
    H5.prototype.clear = function() {
        this.state = 0
    };
    H5.prototype.update = function() {
        this.state = 2 === this.state ? 1 : 0
    };
    H5.prototype.isValid = function() {
        return 0 !== this.state
    };
    H5.prototype.matches = function(a, b) {
        return this.isValid() && a === this.Cs && b === this.Yp
    };
    H6a.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    I5.prototype.updateTime = function(a) {
        for (var b = 1; 15 >= b; ++b)
            for (var c = 1; 32 >= c; ++c) this.B[b][c].timestamp = a
    };
    I5.prototype.debugString = function() {
        for (var a = "\n", b = 1; 15 >= b; ++b) {
            for (var c = 1; 32 >= c; ++c) {
                var d = this.B[b][c];
                a = 0 === d.j ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    I5.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.u = this.row = 1
    };
    var I6a = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        J6a = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        K6a = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        L6a = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    P6a.prototype.reset = function(a, b) {
        this.D = b;
        this.style.set(2);
        this.u = this.I;
        this.C = this.J;
        this.j = this.u;
        var c = (a << 2) + (b << 1);
        this.I.reset(c);
        this.J.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    A6a.prototype.reset = function(a) {
        this.D = a;
        this.u.clear();
        this.C = this.B;
        this.B.reset(a, 0);
        this.I.reset(a, 1)
    };
    T6a.prototype.C = function() {};
    g.v(N5, T6a);
    N5.prototype.C = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + w5++;
            c = c / 1E3 - this.I;
            d = d / 1E3 - this.I;
            a = new v5(c, d - c, 5, f, {
                textAlign: 0,
                nk: 0,
                Yi: 2.5 * b,
                mm: 5.33 * a
            });
            e = new u5(c, d - c, 5, f, e);
            this.u.push(a);
            this.u.push(e)
        }
    };
    g.v(Q5, x5);
    Q5.prototype.u = function(a) {
        a = new N5(a, a.byteLength, this.B);
        if (U6a(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (0 === a.version ? a.B = P5(a) * (1E3 / 45) : 1 === a.version && (a.B = 4294967296 * P5(a) + P5(a)), a.D = O5(a); 0 < a.D; a.D--) {
                    var b = O5(a),
                        c = O5(a),
                        d = O5(a);
                    b & 4 && (b & 3) === this.track && (0 === this.track || 1 === this.track) && (b = this.j, b.j.push({
                        time: a.B,
                        type: this.track,
                        fP: c,
                        gP: d,
                        order: b.j.length
                    }))
                }
            G6a(this.j, a);
            return a.u
        }
        return []
    };
    Q5.prototype.reset = function() {
        this.j.clear()
    };
    g.v(R5, x5);
    R5.prototype.u = function(a, b) {
        var c = [];
        a = a.split(w7a);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if ("" !== e && !x7a.test(e)) {
                var h = y7a.exec(e);
                if (h && 4 <= h.length) {
                    var l = X6a(h[1]),
                        m = X6a(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var r = null,
                        w = "";
                    n = g.t(n);
                    for (var x = n.next(); !x.done; x = n.next())
                        if (x = x.value.split(":"), 2 === x.length) {
                            var z = x[1];
                            switch (x[0]) {
                                case "line":
                                    x = z.split(",");
                                    x[0].endsWith("%") && (p = x[0], h.mm = Number.parseInt(p, 10), 2 === x.length && (q = x[1].trim()));
                                    break;
                                case "position":
                                    x =
                                        z.split(",");
                                    r = x[0];
                                    h.Yi = Number.parseInt(r, 10);
                                    2 === x.length && (w = x[1].trim());
                                    break;
                                case "align":
                                    switch (z) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!r) switch (h.textAlign) {
                        case 0:
                            h.Yi = 0;
                            break;
                        case 1:
                            h.Yi = 100;
                            break;
                        case 2:
                            h.Yi = 50
                    }
                    if (null != h.textAlign) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (w) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = 0 > p || 8 < p ? 7 : p;
                        h.nk = q
                    }
                    e = e.substring(y7a.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    w = h;
                    h = e;
                    e = {};
                    if (0 > h.indexOf("<") && 0 > h.indexOf("&")) f = Y6a(l, m, 5, w), m = new u5(l, m, 5, f.id, h, !1, g.lf(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(z7a), 1 === q.length ? (h = 5, w = Y6a(l, m, h, w)) : (p = h = 6, w = Object.assign({
                                cq: 32
                            }, w), w = new v5(l, m, p, "_" + w5++, w)), c.push(w), p = l, r = 0; r < q.length; r++) n = q[r], 0 === r % 2 ? (x = g.C_a("<html>" + n + "</html>"), x.getElementsByTagName("parsererror").length ?
                            (z = x.createElement("span"), z.appendChild(x.createTextNode(n))) : z = x.firstChild, W6a(this, p, m - (p - l), h, w, 0 < r, z, e, c)) : p = X6a(n) + f
                }
                y7a.lastIndex = 0
            }
        }
        return c
    };
    var x7a = /^NOTE/,
        w7a = /(?:\r\n|\r|\n){2,}/,
        y7a = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        z7a = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.lT.KD(R5, {
        u: "wvppt"
    });
    g.v(S5, g.K);
    S5.prototype.clear = function() {
        this.parser && this.parser.dispose();
        this.parser = null
    };
    S5.prototype.reset = function() {
        this.parser && this.parser.reset()
    };
    S5.prototype.ra = function() {
        g.K.prototype.ra.call(this);
        this.clear()
    };
    var a6 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        nk: 7,
        Yi: 50,
        mm: 100,
        isDefault: !0,
        ke: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.v(T5, g.TO);
    g.k = T5.prototype;
    g.k.ra = function() {
        if (this.C || this.oa) {
            var a = this.G.Xd();
            a && !a.isDisposed() && a.Pv()
        } else s7a(this, !1);
        g.TO.prototype.ra.call(this)
    };
    g.k.nu = function() {
        if (this.Wa) return this.C || this.oa;
        var a = U5a(this.player.getAudioTrack(), g.IG(this.Z));
        return "CAPTIONS_INITIAL_STATE_ON_REQUIRED" === a ? !0 : "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" === a ? U5(this) : j7a(this) || U5(this) ? !0 : k7a(this)
    };
    g.k.load = function() {
        var a = this;
        g.TO.prototype.load.call(this);
        this.I = this.player.getAudioTrack();
        this.u ? this.j && (this.bb.clear(), this.C ? n7a(this, !0) : 3 !== this.player.getPresentingPlayerType() && this.u.Sq(this.j, "json3", function(b, c, d, e) {
            if (b) {
                a.u.WK() && (a.Ba = [], a.G.Af("captions"), g.Zn(a.Ja), a.bb.reset());
                b = d7a(a.bb, b, c, d, e);
                a.player.qe(b, void 0, a.ib);
                if (!(!a.ya || a.oa || X5(a) || g.yG(a.Z) || g.qG(a.Z))) {
                    g.co(a.Ma);
                    b = t6a({
                        nk: 0,
                        Yi: 5,
                        mm: 5,
                        yp: 2,
                        textAlign: 0,
                        Ch: 0,
                        lang: "vi"
                    });
                    a.Oa = [b];
                    d = ["Nh\u00e2\u0301p va\u0300o ",
                        " \u0111\u00ea\u0309 bi\u00ea\u0301t ca\u0300i \u0111\u0103\u0323t"
                    ];
                    a.kb || (e = new g.AL(g.SL()), g.L(a, e), a.kb = e.element);
                    e = b.end - b.start;
                    var f = g.cH(a.j);
                    f && a.Oa.push(new u5(b.start, e, 0, b.id, f));
                    a.Oa.push(new u5(b.start, e, 0, b.id, d[0]), new u5(b.start, e, 0, b.id, a.kb, !0), new u5(b.start, e, 0, b.id, d[1], !0));
                    a.player.qe(a.Oa);
                    g.ao(a.Ma)
                }!a.ya || a.oa || X5(a) || (g.IG(a.Z) ? Z5(a, !0) : $5(a, !0), a.I && (a.I.C = a.j), a.player.Au());
                var h;
                null == (h = a.G.Lc()) || h.va("cc", {
                    kind: c.kind
                });
                a.ya = !1
            }
        }), this.C || this.oa || X5(this) || this.player.Pa("captionschanged",
            g.dH(this.j))) : (this.u = l7a(this), g.L(this, this.u), this.u.Rw(function() {
            m7a(a)
        }))
    };
    g.k.unload = function() {
        this.C && this.j ? n7a(this, !1) : (this.Ma && g.co(this.Ma), this.player.Af("captions"), this.Ba = [], this.u && this.u.Ip(), this.bb.clear(), this.J && this.player.qe(this.J), this.wM());
        g.TO.prototype.unload.call(this);
        this.player.Au();
        this.player.Pa("captionschanged", {})
    };
    g.k.create = function() {
        this.nu() && this.load()
    };
    g.k.e3 = function() {
        for (var a = this.G.Xd().Bf().textTracks, b = null, c = 0; c < a.length; c++)
            if ("showing" === a[c].mode) a: {
                b = a[c].id;
                for (var d = g.UO(this.u.j, !0), e = 0; e < d.length; e++)
                    if (d[e].toString() === b) {
                        b = d[e];
                        break a
                    }
                b = null
            }(this.loaded ? this.j : null) !== b && Y5(this, b, !0)
    };
    g.k.W4 = function() {
        !this.j && this.C || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Ba.push(a);
        g.Zn(this.Ja)
    };
    g.k.onCueRangeExit = function(a) {
        g.Zb(this.Ba, a);
        this.u instanceof p5 && this.u.I && this.player.Ah([a]);
        g.Zn(this.Ja)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.ea.element.id
    };
    g.k.S3 = function() {
        r7a(this, this.Oa);
        this.Oa = null
    };
    g.k.tM = function() {
        var a = this;
        if (!this.Mb || !this.C) {
            this.Ja.stop();
            g.Ica(this.Sa);
            this.Ba.sort(g.BA);
            var b = this.Ba;
            if (this.J) {
                var c = g.vm(b, function(f) {
                    return -1 === this.J.indexOf(f)
                }, this);
                c.length && (b = c)
            }
            b = g.t(b);
            for (c = b.next(); !c.done; c = b.next()) p7a(this, c.value);
            b = {};
            c = g.t(Object.entries(this.Y));
            for (var d = c.next(); !d.done; b = {
                    Vr: b.Vr,
                    jl: b.jl
                }, d = c.next()) {
                var e = g.t(d.value);
                d = e.next().value;
                e = e.next().value;
                b.Vr = d;
                b.jl = e;
                this.Sa[b.Vr] ? (b.jl.element.parentNode || (b.jl instanceof t5 || b.jl instanceof s5 || g.df(this.Y, function(f) {
                    return function(h, l) {
                        l !== f.Vr && h.u.params.nk === f.jl.u.params.nk && h.u.params.Yi === f.jl.u.params.Yi && h.u.params.mm === f.jl.u.params.mm && (h.dispose(), delete a.Y[l]);
                        return l === f.Vr
                    }
                }(b), this), q7a(this, b.jl.element)), b.jl.Bx(this.Sa[b.Vr])) : (b.jl.dispose(), delete this.Y[b.Vr])
            }
        }
    };
    g.k.W3 = function() {
        h7a(this, {}, !0);
        this.Z.N("web_player_disable_publish_captions_settings_changed_on_reset") || this.player.Pa("captionssettingschanged")
    };
    g.k.IZ = function() {
        var a = a6.ke;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: a6.windowColor,
            windowOpacity: a6.windowOpacity
        };
        var b = b6a() || {};
        null != b.background && (a.background = b.background);
        null != b.backgroundOverride && (a.backgroundOverride = b.backgroundOverride);
        null != b.backgroundOpacity && (a.backgroundOpacity =
            b.backgroundOpacity);
        null != b.backgroundOpacityOverride && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        null != b.charEdgeStyle && (a.charEdgeStyle = b.charEdgeStyle);
        null != b.charEdgeStyleOverride && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        null != b.color && (a.color = b.color);
        null != b.colorOverride && (a.colorOverride = b.colorOverride);
        null != b.fontFamily && (a.fontFamily = b.fontFamily);
        null != b.fontFamilyOverride && (a.fontFamilyOverride = b.fontFamilyOverride);
        null != b.fontSizeIncrement && (a.fontSizeIncrement =
            b.fontSizeIncrement);
        null != b.fontSizeIncrementOverride && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        null != b.fontStyle && (a.fontStyle = b.fontStyle);
        null != b.fontStyleOverride && (a.fontStyleOverride = b.fontStyleOverride);
        null != b.textOpacity && (a.textOpacity = b.textOpacity);
        null != b.textOpacityOverride && (a.textOpacityOverride = b.textOpacityOverride);
        null != b.windowColor && (a.windowColor = b.windowColor);
        null != b.windowColorOverride && (a.windowColorOverride = b.windowColorOverride);
        null != b.windowOpacity &&
            (a.windowOpacity = b.windowOpacity);
        null != b.windowOpacityOverride && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.xU = function(a, b) {
        var c = {};
        Object.assign(c, b6a());
        Object.assign(c, a);
        h7a(this, c, b);
        this.player.Pa("captionssettingschanged")
    };
    g.k.wM = function() {
        !this.C && this.loaded && (g.af(this.Y, function(a, b) {
            a.dispose();
            delete this.Y[b]
        }, this), this.tM())
    };
    g.k.Kg = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.sg(b, -2, 4);
                this.xU({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.C && Y5(this, this.j, !0);
                break;
            case "stickyLoading":
                void 0 !== b && this.Z.D && (g.IG(this.Z) ? Z5(this, !!b) : $5(this, !!b));
                break;
            case "track":
                if (!this.u) return {};
                if (b) {
                    if (this.C) break;
                    if (!g.Na(b)) break;
                    if (g.lf(b)) {
                        Y5(this, null, !0);
                        break
                    }
                    a = g.UO(this.u.j, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.languageCode !== b.languageCode || c && e.languageName !== b.languageName ||
                            (c = b.translationLanguage ? W5a(e, b.translationLanguage) : e)
                    }
                    t7a(this, b.position);
                    !c || c === this.j && this.loaded || (b = g.gza(), a = g.eH(c), b.length && a === b[b.length - 1] || (b.push(a), g.Xz("yt-player-caption-language-preferences", b)), V5a(this.Z) && !this.G.isInline() && g.Xz("yt-player-caption-sticky-language", a), Y5(this, c, !0))
                } else return this.loaded && this.j && !X5(this) ? g.dH(this.j) : {};
                return "";
            case "tracklist":
                return this.u ? g.Pd(g.UO(this.u.j, !(!b || !b.includeAsr)), function(f) {
                    return g.dH(f)
                }) : [];
            case "translationLanguages":
                return this.u ? this.u.C.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.C || void 0 === b || s7a(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.C || s7a(this, !!b, b)
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.Z.D && a.push("stickyLoading");
        return a
    };
    g.k.QI = function() {
        var a = this.j;
        if (a) {
            var b = a.vssId;
            a.translationLanguage && b && !this.Z.N("auto_translation_logging_killswitch") && (b = "t" + b + "." + g.eH(a));
            return {
                cc: b
            }
        }
        return {}
    };
    g.k.J4 = function() {
        this.loaded && this.j && !X5(this) ? (g.IG(this.Z) ? Z5(this, !1) : $5(this, !1), this.unload(), U5(this, !0) && Y5(this, V5(this), !1)) : this.bU()
    };
    g.k.bU = function() {
        this.loaded && this.j && !X5(this) || Y5(this, X5(this) || !this.j ? W5(this, !0) : this.j, !0)
    };
    g.k.I0 = function() {
        var a = X5(this);
        U5(this, a) ? Y5(this, this.player.getAudioTrack().u, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.nu() && (a ? Y5(this, W5(this), !1) : this.load()))
    };
    g.k.v1 = function() {
        var a = this.G.Xd();
        a && !a.isDisposed() && a.Pv();
        this.G.isFullscreen() ? (this.C = this.Wa = !0, this.loaded && m7a(this)) : (this.Wa = "3" === this.Z.controlsType, this.C = g7a(this));
        Y5(this, this.j)
    };
    g.lT.KD(T5, {
        tM: "smucd"
    });
    g.SO("captions", T5);
})(_yt_player);