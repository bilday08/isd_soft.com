(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    'use strict';
    var n;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ca(this);

    function r(a, b) {
        if (b) a: {
            var c = fa;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    r("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    });

    function ha(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function u(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ia(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    function ja(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ja(d, e) && (a[e] = d[e])
        }
        return a
    };
    r("Object.assign", function(a) {
        return a || ka
    });
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function v(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.N = b.prototype
    }

    function ra() {
        this.s = !1;
        this.j = null;
        this.h = void 0;
        this.g = 1;
        this.m = this.l = 0;
        this.G = this.i = null
    }

    function ta(a) {
        if (a.s) throw new TypeError("Generator is already running");
        a.s = !0
    }
    ra.prototype.B = function(a) {
        this.h = a
    };

    function ua(a, b) {
        a.i = {
            Ua: b,
            ab: !0
        };
        a.g = a.l || a.m
    }
    ra.prototype.return = function(a) {
        this.i = {
            return: a
        };
        this.g = this.m
    };

    function x(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
    ra.prototype.v = function(a) {
        this.g = a
    };

    function wa(a, b, c) {
        a.l = b;
        void 0 != c && (a.m = c)
    }

    function xa(a, b) {
        a.g = b;
        a.l = 0
    }

    function za(a) {
        a.l = 0;
        var b = a.i.Ua;
        a.i = null;
        return b
    }

    function Aa(a) {
        a.G = [a.i];
        a.l = 0;
        a.m = 0
    }

    function Ba(a) {
        var b = a.G.splice(0)[0];
        (b = a.i = a.i || b) ? b.ab ? a.g = a.l || a.m : void 0 != b.v && a.m < b.v ? (a.g = b.v, a.i = null) : a.g = a.m: a.g = 0
    }

    function Ca(a) {
        this.g = new ra;
        this.h = a
    }

    function Da(a, b) {
        ta(a.g);
        var c = a.g.j;
        if (c) return Ea(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return Fa(a)
    }

    function Ea(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.s = !1, e;
            var f = e.value
        } catch (g) {
            return a.g.j = null, ua(a.g, g), Fa(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return Fa(a)
    }

    function Fa(a) {
        for (; a.g.g;) try {
            var b = a.h(a.g);
            if (b) return a.g.s = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.h = void 0, ua(a.g, c)
        }
        a.g.s = !1;
        if (a.g.i) {
            b = a.g.i;
            a.g.i = null;
            if (b.ab) throw b.Ua;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ga(a) {
        this.next = function(b) {
            ta(a.g);
            a.g.j ? b = Ea(a, a.g.j.next, b, a.g.B) : (a.g.B(b), b = Fa(a));
            return b
        };
        this.throw = function(b) {
            ta(a.g);
            a.g.j ? b = Ea(a, a.g.j["throw"], b, a.g.B) : (ua(a.g, b), b = Fa(a));
            return b
        };
        this.return = function(b) {
            return Da(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Ha(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function y(a) {
        return Ha(new Ga(new Ca(a)))
    }

    function Ia() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    r("Reflect.setPrototypeOf", function(a) {
        return a ? a : qa ? function(b, c) {
            try {
                return qa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    r("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.i = void 0;
            this.h = [];
            this.s = !1;
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.g = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.i(function() {
                    h.m()
                })
            }
            this.g.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.i = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.g = null
        };
        c.prototype.j = function(g) {
            this.i(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Ga),
                reject: g(this.m)
            }
        };
        b.prototype.Ga = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.kb(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Fa(g) : this.l(g)
            }
        };
        b.prototype.Fa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.lb(h, g) : this.l(g)
        };
        b.prototype.m = function(g) {
            this.B(2, g)
        };
        b.prototype.l = function(g) {
            this.B(1, g)
        };
        b.prototype.B = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.i = h;
            2 === this.g && this.Ha();
            this.G()
        };
        b.prototype.Ha = function() {
            var g = this;
            e(function() {
                if (g.Z()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.i)
                }
            }, 1)
        };
        b.prototype.Z = function() {
            if (this.s) return !1;
            var g = fa.CustomEvent,
                h = fa.Event,
                k = fa.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.i;
            return k(g)
        };
        b.prototype.G = function() {
            if (null != this.h) {
                for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
                this.h = null
            }
        };
        var f = new c;
        b.prototype.kb = function(g) {
            var h = this.j();
            g.va(h.resolve, h.reject)
        };
        b.prototype.lb = function(g, h) {
            var k = this.j();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(t, q) {
                return "function" == typeof t ? function(w) {
                    try {
                        l(t(w))
                    } catch (A) {
                        m(A)
                    }
                } : q
            }
            var l, m, p = new b(function(t, q) {
                l = t;
                m = q
            });
            this.va(k(g, l), k(h, m));
            return p
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.va = function(g, h) {
            function k() {
                switch (l.g) {
                    case 1:
                        g(l.i);
                        break;
                    case 2:
                        h(l.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.g);
                }
            }
            var l = this;
            null == this.h ? f.h(k) : this.h.push(k);
            this.s = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).va(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function p(w) {
                    return function(A) {
                        t[w] = A;
                        q--;
                        0 == q && l(t)
                    }
                }
                var t = [],
                    q = 0;
                do t.push(void 0), q++, d(k.value).va(p(t.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return b
    });
    r("WeakMap", function(a) {
        function b(k) {
            this.g = (h += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }

        function c() {}

        function d(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function e(k) {
            if (!ja(k, g)) {
                var l = new c;
                ba(k, g, {
                    value: l
                })
            }
        }

        function f(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof c) return m;
                Object.isExtensible(m) && e(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(k) || 3 != m.get(l)) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && 4 == m.get(l)
                } catch (p) {
                    return !1
                }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, l) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!ja(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.g] = l;
            return this
        };
        b.prototype.get = function(k) {
            return d(k) && ja(k, g) ? k[g][this.g] : void 0
        };
        b.prototype.has = function(k) {
            return d(k) && ja(k, g) && ja(k[g], this.g)
        };
        b.prototype.delete = function(k) {
            return d(k) && ja(k, g) && ja(k[g], this.g) ? delete k[g][this.g] : !1
        };
        return b
    });
    r("Map", function(a) {
        function b() {
            var h = {};
            return h.previous = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.g;
            return ha(function() {
                if (l) {
                    for (; l.head != h.g;) l = l.previous;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.data_[l];
            if (m && ja(h.data_, l))
                for (h = 0; h < m.length; h++) {
                    var p = m[h];
                    if (k !== k && p.key !== p.key || k === p.key) return {
                        id: l,
                        list: m,
                        index: h,
                        entry: p
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                entry: void 0
            }
        }

        function e(h) {
            this.data_ = {};
            this.g = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.data_[l.id] = []);
            l.entry ? l.entry.value = k : (l.entry = {
                next: this.g,
                previous: this.g.previous,
                head: this.g,
                key: h,
                value: k
            }, l.list.push(l.entry), this.g.previous.next = l.entry, this.g.previous = l.entry, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.data_ = {};
            this.g = this.g.previous = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).entry
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).entry) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });

    function La(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    r("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    r("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    r("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    r("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    r("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });

    function Ma(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    r("Object.setPrototypeOf", function(a) {
        return a || qa
    });
    r("Set", function(a) {
        function b(c) {
            this.g = new Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== La(this, b, "includes").indexOf(b, c || 0)
        }
    });
    var z = this || self;

    function B(a, b, c) {
        a = a.split(".");
        c = c || z;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function C(a, b) {
        a = a.split(".");
        b = b || z;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Na(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Oa(a) {
        var b = Na(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Pa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Qa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ra) && a[Ra] || (a[Ra] = ++Sa)
    }
    var Ra = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Sa = 0;

    function Ta(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ua(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Va(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Va = Ta : Va = Ua;
        return Va.apply(null, arguments)
    }

    function D(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.N = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ac = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Wa(a) {
        return a
    };

    function Xa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Xa);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    D(Xa, Error);
    Xa.prototype.name = "CustomError";

    function Za(a) {
        a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.i = !b && /[?&]ae=1(&|$)/.test(a);
        this.j = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
            try {
                var c = decodeURIComponent(this.g[1])
            } catch (d) {
                c = null
            }
            this.h = c
        }
    };

    function $a() {}

    function ab(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var bb = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        E = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        cb = Array.prototype.map ? function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        db = Array.prototype.reduce ? function(a, b, c) {
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c) {
            var d = c;
            E(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        eb = Array.prototype.every ? function(a, b) {
            return Array.prototype.every.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };

    function fb(a, b) {
        b = bb(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function gb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function hb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ib(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Oa(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    };

    function jb(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function lb(a) {
        var b = mb,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function nb(a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    }

    function ob(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        if (a instanceof Date) return new Date(a.getTime());
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = ob(a[c]);
        return b
    }
    var pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function qb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < pb.length; f++) c = pb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wb;

    function xb() {}

    function yb(a) {
        return new xb(zb, a)
    }
    var zb = {};
    yb("");
    var Ab = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Bb = /&/g,
        Cb = /</g,
        Db = />/g,
        Eb = /"/g,
        Fb = /'/g,
        Gb = /\x00/g,
        Hb = /[\x00&<>"']/;

    function Ib(a, b) {
        this.g = b === Jb ? a : ""
    }
    Ib.prototype.toString = function() {
        return this.g.toString()
    };
    var Jb = {},
        Kb = new Ib("about:invalid#zClosurez", Jb);

    function Lb() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function F(a) {
        return -1 != Lb().indexOf(a)
    };

    function Mb() {
        return (F("Chrome") || F("CriOS")) && !F("Edge") || F("Silk")
    };
    var Rb = {};

    function Sb(a) {
        this.g = Rb === Rb ? a : ""
    }
    Sb.prototype.toString = function() {
        return this.g.toString()
    };
    var Tb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ub(a) {
        return a ? decodeURI(a) : a
    }

    function Vb(a) {
        return Ub(a.match(Tb)[3] || null)
    }

    function Wb(a) {
        var b = a.match(Tb);
        a = b[1];
        var c = b[2],
            d = b[3];
        b = b[4];
        var e = "";
        a && (e += a + ":");
        d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
        return e
    }

    function Xb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Xb(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Yb(a) {
        var b = [],
            c;
        for (c in a) Xb(c, a[c], b);
        return b.join("&")
    }
    var Zb = /#|$/;

    function $b(a, b) {
        var c = a.search(Zb);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function ac(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    };

    function bc() {
        return F("iPhone") && !F("iPod") && !F("iPad")
    };

    function cc(a) {
        cc[" "](a);
        return a
    }
    cc[" "] = function() {};
    var dc = F("Opera"),
        ec = F("Trident") || F("MSIE"),
        fc = F("Edge"),
        gc = F("Gecko") && !(-1 != Lb().toLowerCase().indexOf("webkit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
        hc = -1 != Lb().toLowerCase().indexOf("webkit") && !F("Edge");

    function ic() {
        var a = z.document;
        return a ? a.documentMode : void 0
    }
    var jc;
    a: {
        var kc = "",
            lc = function() {
                var a = Lb();
                if (gc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (fc) return /Edge\/([\d\.]+)/.exec(a);
                if (ec) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (hc) return /WebKit\/(\S+)/.exec(a);
                if (dc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        lc && (kc = lc ? lc[1] : "");
        if (ec) {
            var mc = ic();
            if (null != mc && mc > parseFloat(kc)) {
                jc = String(mc);
                break a
            }
        }
        jc = kc
    }
    var nc = jc,
        oc;
    if (z.document && ec) {
        var qc = ic();
        oc = qc ? qc : parseInt(nc, 10) || void 0
    } else oc = void 0;
    var rc = oc;
    var sc = bc() || F("iPod"),
        tc = F("iPad");
    !F("Android") || Mb();
    Mb();
    var uc = F("Safari") && !(Mb() || F("Coast") || F("Opera") || F("Edge") || F("Edg/") || F("OPR") || F("Firefox") || F("FxiOS") || F("Silk") || F("Android")) && !(bc() || F("iPad") || F("iPod"));
    var vc = {},
        wc = null;

    function xc(a, b) {
        Oa(a);
        void 0 === b && (b = 0);
        yc();
        b = vc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = "" + l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function zc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        Ac(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function Ac(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = wc[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        yc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function yc() {
        if (!wc) {
            wc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                vc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === wc[f] && (wc[f] = e)
                }
            }
        }
    };
    var Bc = "undefined" !== typeof Uint8Array;

    function Cc(a) {
        return Bc && null != a && a instanceof Uint8Array
    }
    var Dc = {};
    var Ec;

    function Fc() {
        if (Dc !== Dc) throw Error("illegal external caller");
    }

    function Gc(a) {
        Fc();
        this.oa = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    Gc.prototype.za = function() {
        return null == this.oa
    };
    Gc.prototype.sizeBytes = function() {
        Fc();
        var a = this.oa;
        null == a || Cc(a) || ("string" === typeof a ? a = zc(a) : (Na(a), a = null));
        return (a = null == a ? a : this.oa = a) ? a.length : 0
    };
    var Hc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function Lc(a, b) {
        Object.isFrozen(a) || (Hc ? a[Hc] |= b : void 0 !== a.L ? a.L |= b : Object.defineProperties(a, {
            L: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function Mc(a, b) {
        Object.isExtensible(a) && (Hc ? a[Hc] && (a[Hc] &= ~b) : void 0 !== a.L && (a.L &= ~b))
    }

    function H(a) {
        var b;
        Hc ? b = a[Hc] : b = a.L;
        return null == b ? 0 : b
    }

    function Nc(a, b) {
        Hc ? a[Hc] = b : void 0 !== a.L ? a.L = b : Object.defineProperties(a, {
            L: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Oc(a) {
        Lc(a, 1);
        return a
    }

    function Pc(a) {
        Lc(a, 17);
        return a
    }

    function I(a) {
        return a ? !!(H(a) & 2) : !1
    }

    function Qc(a) {
        Lc(a, 16);
        return a
    }

    function Rc(a, b) {
        Nc(b, (H(a) | 0) & -51)
    }

    function Sc(a, b) {
        Nc(b, (H(a) | 18) & -33)
    };
    var Tc = {};

    function Uc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Vc, Wc = Object,
        Xc = Wc.freeze,
        Yc = [];
    Lc(Yc, 3);
    var Zc = Xc.call(Wc, Yc);

    function $c(a) {
        if (I(a.o)) throw Error("Cannot mutate an immutable Message");
    };

    function ad(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function bd(a, b) {
        if (!(a instanceof b)) throw Error("Expected instanceof " + ad(b) + " but got " + (a && ad(a.constructor)));
        return a
    };

    function cd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Cc(a)) return xc(a);
                    if (a instanceof Gc) {
                        var b = a.oa;
                        return null == b ? "" : "string" === typeof b ? b : a.oa = xc(b)
                    }
                }
        }
        return a
    };

    function dd(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = ed(a, b, c, void 0 !== d);
            else if (Uc(a)) {
                var e = {},
                    f;
                for (f in a) e[f] = dd(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function ed(a, b, c, d) {
        d = d ? !!(H(a) & 16) : void 0;
        var e = Array.prototype.slice.call(a);
        c(a, e);
        for (a = 0; a < e.length; a++) e[a] = dd(e[a], b, c, d);
        return e
    }

    function fd(a) {
        return a.Aa === Tc ? a.toJSON() : cd(a)
    }

    function gd(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (Cc(a)) return new Uint8Array(a);
            if (a.Aa === Tc) return a.clone()
        }
        return a
    }

    function hd() {};

    function id(a, b, c) {
        return -1 === b ? null : b >= a.V ? a.D ? a.D[b] : void 0 : (void 0 === c ? 0 : c) && a.D && (c = a.D[b], null != c) ? c : a.o[b + a.R]
    }

    function J(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || $c(a);
        a.h && (a.h = void 0);
        if (b >= a.V || d) return (a.D || (a.D = a.o[a.V + a.R] = {}))[b] = c, a;
        void 0 !== a.D && a.V >= a.o.length ? (d = a.o.length - 1, e = b + a.R, e >= d ? (a.o[d] = void 0, a.o[e] = c, a.o.push(a.D)) : a.o[e] = c) : a.o[b + a.R] = c;
        void 0 !== a.D && b in a.D && delete a.D[b];
        return a
    }

    function jd(a, b, c, d) {
        var e = id(a, b, d);
        Array.isArray(e) || (e = Zc);
        var f = H(e);
        f & 1 || Oc(e);
        if (I(a.o)) f & 2 || Lc(e, 2), c & 1 || Object.freeze(e);
        else if (!(c & 1) && f & 2) e = Oc(Array.prototype.slice.call(e)), J(a, b, e, d);
        else if (!(c & 2) && f & 16) {
            a = e;
            if (!Array.isArray(a)) throw Error("cannot mark non-array as shared mutably");
            Mc(a, 16)
        }
        return e
    }

    function kd(a, b, c, d) {
        $c(a);
        (c = ld(a, c)) && c !== b && null != d && J(a, c, void 0, !1);
        J(a, b, d)
    }

    function ld(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != id(a, e) && (0 !== c && J(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function md(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = id(a, c, d);
        var f = !1;
        var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Aa !== Tc ? f ? new b(e) : void 0 : e;
        g !== e && null != g && (J(a, c, g, d, !0), Lc(g.o, H(a.o) & -33));
        b = g;
        if (null == b) return b;
        I(b.o) && !I(a.o) && (b = nd(b), J(a, c, b, d));
        return b
    }

    function od(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        a.g || (a.g = {});
        var f = a.g[c],
            g = jd(a, c, 3, d),
            h = I(a.o);
        if (f) h || (Object.isFrozen(f) ? e || (f = Array.prototype.slice.call(f), a.g[c] = f) : e && Object.freeze(f));
        else {
            f = [];
            var k = !!(H(a.o) & 16),
                l = I(g);
            !h && l && (g = Oc(Array.prototype.slice.call(g)), J(a, c, g, d));
            d = l;
            for (var m = 0; m < g.length; m++) {
                var p = g[m];
                d = d || I(p);
                var t = b,
                    q = k,
                    w = !1;
                w = void 0 === w ? !1 : w;
                q = void 0 === q ? !1 : q;
                p = Array.isArray(p) ? new t(q ? Qc(p) : p) : w ? new t : void 0;
                void 0 !== p && (f.push(p), l && Lc(p.o, 2))
            }
            a.g[c] = f;
            a = g;
            b = !d;
            Object.isFrozen(a) ||
                (c = H(a) | 33, Nc(a, b ? c | 8 : c & -9));
            (h || e && l) && Lc(f, 2);
            (h || e) && Object.freeze(f)
        }
        return f
    }

    function L(a, b, c, d) {
        $c(a);
        null != d ? bd(d, b) : d = void 0;
        return J(a, c, d)
    }

    function pd(a, b, c, d, e) {
        $c(a);
        null != e ? bd(e, b) : e = void 0;
        kd(a, c, d, e)
    }

    function qd(a, b, c, d, e) {
        $c(a);
        if (null != d) {
            var f = Oc([]);
            for (var g = !1, h = 0; h < d.length; h++) f[h] = bd(d[h], b).o, g = g || I(f[h]);
            a.g || (a.g = {});
            a.g[c] = d;
            b = f;
            g ? Mc(b, 8) : Lc(b, 8)
        } else a.g && (a.g[c] = void 0), f = Zc;
        return J(a, c, f, e)
    }

    function rd(a, b, c, d) {
        $c(a);
        var e = od(a, c, b, void 0, !1);
        c = null != d ? bd(d, c) : new c;
        a = jd(a, b, 2);
        e.push(c);
        a.push(c.o);
        I(c.o) && Mc(a, 8)
    }

    function sd(a, b) {
        return id(a, b)
    }

    function td(a, b) {
        a = id(a, b);
        return null == a ? "" : a
    };

    function ud(a, b) {
        if (null != a) {
            if (Bc && a instanceof Uint8Array) return a.length ? new Gc(new Uint8Array(a)) : Ec || (Ec = new Gc(null));
            if (Array.isArray(a)) {
                if (I(a)) return a;
                b && (b = H(a), b = !(b & 32) && (!!(b & 16) || 0 === b));
                if (b) return Lc(a, 2), a;
                a = ed(a, ud, Sc);
                H(a) & 4 && Object.freeze(a);
                return a
            }
            return a.Aa === Tc ? vd(a) : a
        }
    }

    function wd(a, b, c, d, e, f) {
        (a = a.g && a.g[c]) ? (d = 0 < a.length ? a[0].constructor : void 0, I(a) && Object.isFrozen(a) || (f = cb(a, vd), Sc(a, f), Object.freeze(f), a = f), qd(b, d, c, a, e)) : J(b, c, ud(d, f), e)
    }

    function vd(a) {
        if (I(a.o)) return a;
        a = xd(a);
        Lc(a.o, 2);
        return a
    }

    function xd(a) {
        var b = new a.constructor;
        a.ia && (b.ia = a.ia.slice());
        for (var c = a.o, d = !!(H(c) & 16), e = 0; e < c.length; e++) {
            var f = c[e];
            if (e === c.length - 1 && Uc(f))
                for (var g in f) {
                    var h = +g;
                    Number.isNaN(h) ? (b.D || (b.D = b.o[b.V + b.R] = {}))[h] = f[h] : wd(a, b, h, f[g], !0, d)
                } else wd(a, b, e - a.R, f, !1, d)
        }
        return b
    };

    function N(a, b, c) {
        null == a && (a = yd);
        yd = null;
        var d = this.constructor.g || 0,
            e = 0 < d,
            f = this.constructor.h,
            g = !1;
        if (null == a) {
            var h = f ? [f] : [];
            Lc(h, 48);
            a = h;
            h = !0
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            if (h = !!(H(a) & 16)) g = H(a), Nc(a, g | 32), g = !!(g & 32)
        }
        e && 0 < a.length && Uc(a[a.length - 1]) && "g" in a[a.length - 1] && (d = 0);
        this.R = (f ? 0 : -1) - d;
        this.g = void 0;
        this.o = a;
        a: {
            f = this.o.length;d = f - 1;
            if (f && (f = this.o[d], Uc(f))) {
                this.D = f;
                b = Object.keys(f);
                0 < b.length && eb(b, isNaN) ? this.V = Number.MAX_VALUE : this.V = d - this.R;
                break a
            }
            void 0 !== b && -1 < b ? (this.V = Math.max(b, d + 1 - this.R), this.D = void 0) : this.V = Number.MAX_VALUE
        }
        if (!e && this.D && "g" in this.D) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c)
            for (e = h && !g ? Pc : Oc, b = 0; b < c.length; b++) h = c[b], (g = id(this, h)) ? Array.isArray(g) && e(g) : J(this, h, Zc, !1, !0)
    }
    N.prototype.toJSON = function() {
        var a = this.o,
            b;
        Vc ? b = a : b = ed(a, fd, hd);
        return b
    };

    function zd(a) {
        Vc = !0;
        try {
            return JSON.stringify(a.toJSON(), Ad)
        } finally {
            Vc = !1
        }
    }
    N.prototype.clone = function() {
        var a = ed(this.o, gd, Rc);
        Qc(a);
        yd = a;
        a = new this.constructor(a);
        yd = null;
        Bd(a, this);
        return a
    };

    function nd(a) {
        if (I(a.o)) {
            var b = xd(a);
            b.h = a;
            a = b
        }
        return a
    }
    N.prototype.Aa = Tc;
    N.prototype.toString = function() {
        return this.o.toString()
    };

    function Ad(a, b) {
        return cd(b)
    }

    function Bd(a, b) {
        b.ia && (a.ia = b.ia.slice());
        var c = b.g;
        if (c) {
            b = b.D;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length) {
                            var h = a,
                                k = f;
                            k = void 0 === k ? !1 : k;
                            var l = I(h.o);
                            f = od(h, e[0].constructor, g, k, l);
                            g = jd(h, g, 3, k);
                            if (h = !l && g) {
                                if (!g) throw Error("cannot check mutability state of non-array");
                                h = !(H(g) & 8)
                            }
                            if (h) {
                                for (h = 0; h < f.length; h++)(l = f[h]) && I(l.o) && (f[h] = nd(f[h]), g[h] = f[h].o);
                                Lc(g, 8)
                            }
                            for (g = 0; g < Math.min(f.length, e.length); g++) Bd(f[g], e[g])
                        }
                    } else throw Error("unexpected object: type: " +
                        Na(e) + ": " + e);
                }
            }
        }
    }
    var yd;
    var Cd = window;
    yb("csi.gstatic.com");
    yb("googleads.g.doubleclick.net");
    yb("partner.googleadservices.com");
    yb("pubads.g.doubleclick.net");
    yb("securepubads.g.doubleclick.net");
    yb("tpc.googlesyndication.com");

    function Dd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    n = Dd.prototype;
    n.clone = function() {
        return new Dd(this.x, this.y)
    };
    n.equals = function(a) {
        return a instanceof Dd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Ed(a, b) {
        this.width = a;
        this.height = b
    }
    n = Ed.prototype;
    n.clone = function() {
        return new Ed(this.width, this.height)
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.za = function() {
        return !(this.width * this.height)
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Fd() {
        var a = document;
        var b = "IFRAME";
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Gd(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };

    function Hd(a) {
        var b = C("window.location.href");
        null == a && (a = 'Unknown Error of type "null/undefined"');
        if ("string" === typeof a) return {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: b,
            stack: "Not available"
        };
        var c = !1;
        try {
            var d = a.lineNumber || a.line || "Not available"
        } catch (g) {
            d = "Not available", c = !0
        }
        try {
            var e = a.fileName || a.filename || a.sourceURL || z.$googDebugFname || b
        } catch (g) {
            e = "Not available", c = !0
        }
        b = Id(a);
        if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
            c = a.message;
            if (null ==
                c) {
                if (a.constructor && a.constructor instanceof Function) {
                    if (a.constructor.name) c = a.constructor.name;
                    else if (c = a.constructor, Jd[c]) c = Jd[c];
                    else {
                        c = String(c);
                        if (!Jd[c]) {
                            var f = /function\s+([^\(]+)/m.exec(c);
                            Jd[c] = f ? f[1] : "[Anonymous]"
                        }
                        c = Jd[c]
                    }
                    c = 'Unknown Error of type "' + c + '"'
                } else c = "Unknown Error of unknown type";
                "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
            }
            return {
                message: c,
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: b || "Not available"
            }
        }
        a.stack =
            b;
        return {
            message: a.message,
            name: a.name,
            lineNumber: a.lineNumber,
            fileName: a.fileName,
            stack: a.stack
        }
    }

    function Id(a, b) {
        b || (b = {});
        b[Kd(a)] = !0;
        var c = a.stack || "";
        (a = a.cause) && !b[Kd(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += Id(a, b));
        return c
    }

    function Kd(a) {
        var b = "";
        "function" === typeof a.toString && (b = "" + a);
        return b + a.stack
    }
    var Jd = {};
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Ld;
    try {
        new URL("s://g"), Ld = !0
    } catch (a) {
        Ld = !1
    }
    var Md = Ld;

    function Pd(a, b) {
        a.removeAttribute("srcdoc");
        if (b instanceof Ib) b instanceof Ib && b.constructor === Ib ? b = b.g : (Na(b), b = "type_error:SafeUrl");
        else {
            b: if (Md) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    c = "https:";
                    break b
                }
                c = c.protocol
            } else c: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    c = void 0;
                    break c
                }
                c = c.protocol;c = ":" === c || "" === c ? "https:" : c
            }
            b = "javascript:" !== c ? b : void 0
        }
        void 0 !== b && (a.src = b);
        for (b = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 <
            a.sandbox.length;) a.sandbox.remove(a.sandbox.item(0));
        for (c = 0; c < b.length; c++) a.sandbox.supports && !a.sandbox.supports(b[c]) || a.sandbox.add(b[c])
    };

    function Qd(a) {
        var b = Rd;
        if (b)
            for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && a(b[c], c, b)
    }

    function Sd() {
        var a = [];
        Qd(function(b) {
            a.push(b)
        });
        return a
    }
    var Rd = {
            Ib: "allow-forms",
            Jb: "allow-modals",
            Kb: "allow-orientation-lock",
            Lb: "allow-pointer-lock",
            Mb: "allow-popups",
            Nb: "allow-popups-to-escape-sandbox",
            Ob: "allow-presentation",
            Pb: "allow-same-origin",
            Qb: "allow-scripts",
            Rb: "allow-top-navigation",
            Sb: "allow-top-navigation-by-user-activation"
        },
        Td = ab(function() {
            return Sd()
        });

    function Ud() {
        var a = Vd(),
            b = {};
        E(Td(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }

    function Vd() {
        var a = void 0 === a ? document : a;
        return a.createElement("iframe")
    };

    function Wd(a) {
        this.Bb = a
    }

    function Xd(a) {
        return new Wd(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Yd = [Xd("data"), Xd("http"), Xd("https"), Xd("mailto"), Xd("ftp"), new Wd(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Zd(a, b) {
        b = void 0 === b ? Yd : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Wd && d.Bb(a)) return new Ib(a, Jb)
        }
    }

    function $d(a) {
        var b = void 0 === b ? Yd : b;
        return Zd(a, b) || Kb
    };
    var ae = (new Date).getTime();

    function be(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
            c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };
    var ce = "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");
    ia(ce);

    function de() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            m = l = 0
        }

        function b(p) {
            for (var t = g, q = 0; 64 > q; q += 4) t[q / 4] = p[q] << 24 | p[q + 1] << 16 | p[q + 2] << 8 | p[q + 3];
            for (q = 16; 80 > q; q++) p = t[q - 3] ^ t[q - 8] ^ t[q - 14] ^ t[q - 16], t[q] = (p << 1 | p >>> 31) & 4294967295;
            p = e[0];
            var w = e[1],
                A = e[2],
                G = e[3],
                K = e[4];
            for (q = 0; 80 > q; q++) {
                if (40 > q)
                    if (20 > q) {
                        var M = G ^ w & (A ^ G);
                        var O = 1518500249
                    } else M = w ^ A ^ G, O = 1859775393;
                else 60 > q ? (M = w & A | G & (w | A), O = 2400959708) : (M = w ^ A ^ G, O = 3395469782);
                M = ((p << 5 | p >>> 27) & 4294967295) + M + K + O + t[q] & 4294967295;
                K = G;
                G = A;
                A = (w << 30 | w >>> 2) & 4294967295;
                w = p;
                p = M
            }
            e[0] = e[0] + p & 4294967295;
            e[1] = e[1] + w & 4294967295;
            e[2] =
                e[2] + A & 4294967295;
            e[3] = e[3] + G & 4294967295;
            e[4] = e[4] + K & 4294967295
        }

        function c(p, t) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var q = [], w = 0, A = p.length; w < A; ++w) q.push(p.charCodeAt(w));
                p = q
            }
            t || (t = p.length);
            q = 0;
            if (0 == l)
                for (; q + 64 < t;) b(p.slice(q, q + 64)), q += 64, m += 64;
            for (; q < t;)
                if (f[l++] = p[q++], m++, 64 == l)
                    for (l = 0, b(f); q + 64 < t;) b(p.slice(q, q + 64)), q += 64, m += 64
        }

        function d() {
            var p = [],
                t = 8 * m;
            56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
            for (var q = 63; 56 <= q; q--) f[q] = t & 255, t >>>= 8;
            b(f);
            for (q = t = 0; 5 > q; q++)
                for (var w = 24; 0 <= w; w -= 8) p[t++] = e[q] >> w & 255;
            return p
        }
        for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
        var l, m;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            qb: function() {
                for (var p = d(), t = "", q = 0; q < p.length; q++) t += "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) + "0123456789ABCDEF".charAt(p[q] % 16);
                return t
            }
        }
    };

    function ee(a, b, c) {
        var d = String(z.location.href);
        return d && a && b ? [b, fe(be(d), a, c || null)].join(" ") : null
    }

    function fe(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], E(d, function(h) {
            e.push(h)
        }), ge(e.join(" "));
        var f = [],
            g = [];
        E(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        E(d, function(h) {
            e.push(h)
        });
        a = ge(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    }

    function ge(a) {
        var b = de();
        b.update(a);
        return b.qb().toLowerCase()
    };
    var he = {};

    function ie(a) {
        this.g = a || {
            cookie: ""
        }
    }
    n = ie.prototype;
    n.isEnabled = function() {
        if (!z.navigator.cookieEnabled) return !1;
        if (!this.za()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            Ka: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    n.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.jc;
            d = c.secure || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ka
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" +
            e : "")
    };
    n.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ab(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    n.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Ka: 0,
            path: b,
            domain: c
        });
        return d
    };
    n.za = function() {
        return !this.g.cookie
    };
    n.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ab(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };
    var je = new ie("undefined" == typeof document ? null : document);

    function ke(a) {
        return !!he.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    }

    function le(a, b, c, d) {
        (a = z[a]) || (a = (new ie(document)).get(b));
        return a ? ee(a, c, d) : null
    }

    function me(a) {
        var b = void 0 === b ? !1 : b;
        var c = be(String(z.location.href)),
            d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f = z.__SAPISID || z.__APISID || z.__3PSAPISID || z.__OVERRIDE_SID;
        ke(e) && (f = f || z.__1PSAPISID);
        if (f) e = !0;
        else {
            var g = new ie(document);
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID");
            ke(e) && (f = f || g.get("__Secure-1PAPISID"));
            e = !!f
        }
        e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? z.__SAPISID : z.__APISID, e || (e = new ie(document),
            e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? ee(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && ke(b) && ((b = le("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = le("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
        return 0 == d.length ? null : d.join(" ")
    };

    function ne() {
        this.i = this.i;
        this.m = this.m
    }
    ne.prototype.i = !1;
    ne.prototype.dispose = function() {
        this.i || (this.i = !0, this.ca())
    };
    ne.prototype.ca = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };

    function oe(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = this.i = !1
    }
    oe.prototype.stopPropagation = function() {
        this.i = !0
    };
    oe.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var pe = function() {
        if (!z.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            z.addEventListener("test", function() {}, b), z.removeEventListener("test", function() {}, b)
        } catch (c) {}
        return a
    }();

    function qe(a, b) {
        oe.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        a && this.init(a, b)
    }
    D(qe, oe);
    var re = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    qe.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        if (b = a.relatedTarget) {
            if (gc) {
                a: {
                    try {
                        cc(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY ||
            0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : re[a.pointerType] || "";
        this.state = a.state;
        this.h = a;
        a.defaultPrevented && qe.N.preventDefault.call(this)
    };
    qe.prototype.stopPropagation = function() {
        qe.N.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
    };
    qe.prototype.preventDefault = function() {
        qe.N.preventDefault.call(this);
        var a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var se = "closure_listenable_" + (1E6 * Math.random() | 0);
    var te = 0;

    function ue(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ya = e;
        this.key = ++te;
        this.ka = this.ta = !1
    }

    function ve(a) {
        a.ka = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ya = null
    };

    function we(a) {
        this.src = a;
        this.listeners = {};
        this.g = 0
    }
    we.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.listeners[f];
        a || (a = this.listeners[f] = [], this.g++);
        var g = xe(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ta = !1)) : (b = new ue(b, this.src, f, !!d, e), b.ta = c, a.push(b));
        return b
    };
    we.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.listeners)) return !1;
        var e = this.listeners[a];
        b = xe(e, b, c, d);
        return -1 < b ? (ve(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.listeners[a], this.g--), !0) : !1
    };

    function ye(a, b) {
        var c = b.type;
        c in a.listeners && fb(a.listeners[c], b) && (ve(b), 0 == a.listeners[c].length && (delete a.listeners[c], a.g--))
    }

    function xe(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ka && f.listener == b && f.capture == !!c && f.ya == d) return e
        }
        return -1
    };
    var ze = "closure_lm_" + (1E6 * Math.random() | 0),
        Ae = {},
        Be = 0;

    function Ce(a, b, c, d, e) {
        if (d && d.once) De(a, b, c, d, e);
        else if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ce(a, b[f], c, d, e);
        else c = Ee(c), a && a[se] ? a.X(b, c, Pa(d) ? !!d.capture : !!d, e) : Fe(a, b, c, !1, d, e)
    }

    function Fe(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Pa(e) ? !!e.capture : !!e,
            h = Ge(a);
        h || (a[ze] = h = new we(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = He();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) pe || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ie(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Be++
        }
    }

    function He() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Je;
        return a
    }

    function De(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) De(a, b[f], c, d, e);
        else c = Ee(c), a && a[se] ? a.g.add(String(b), c, !0, Pa(d) ? !!d.capture : !!d, e) : Fe(a, b, c, !0, d, e)
    }

    function Ke(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Ke(a, b[f], c, d, e);
        else(d = Pa(d) ? !!d.capture : !!d, c = Ee(c), a && a[se]) ? a.g.remove(String(b), c, d, e) : a && (a = Ge(a)) && (b = a.listeners[b.toString()], a = -1, b && (a = xe(b, c, d, e)), (c = -1 < a ? b[a] : null) && Le(c))
    }

    function Le(a) {
        if ("number" !== typeof a && a && !a.ka) {
            var b = a.src;
            if (b && b[se]) ye(b.g, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ie(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Be--;
                (c = Ge(b)) ? (ye(c, a), 0 == c.g && (c.src = null, b[ze] = null)) : ve(a)
            }
        }
    }

    function Ie(a) {
        return a in Ae ? Ae[a] : Ae[a] = "on" + a
    }

    function Je(a, b) {
        if (a.ka) a = !0;
        else {
            b = new qe(b, this);
            var c = a.listener,
                d = a.ya || a.src;
            a.ta && Le(a);
            a = c.call(d, b)
        }
        return a
    }

    function Ge(a) {
        a = a[ze];
        return a instanceof we ? a : null
    }
    var Me = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ee(a) {
        if ("function" === typeof a) return a;
        a[Me] || (a[Me] = function(b) {
            return a.handleEvent(b)
        });
        return a[Me]
    };

    function Ne() {
        ne.call(this);
        this.g = new we(this);
        this.Z = this;
        this.B = null
    }
    D(Ne, ne);
    Ne.prototype[se] = !0;
    Ne.prototype.addEventListener = function(a, b, c, d) {
        Ce(this, a, b, c, d)
    };
    Ne.prototype.removeEventListener = function(a, b, c, d) {
        Ke(this, a, b, c, d)
    };

    function Oe(a, b) {
        var c = a.B;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.B) d.push(c), ++e
        }
        a = a.Z;
        c = b.type || b;
        "string" === typeof b ? b = new oe(b, a) : b instanceof oe ? b.target = b.target || a : (e = b, b = new oe(c, a), qb(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.i && 0 <= f; f--) {
                var g = b.g = d[f];
                e = Pe(g, c, !0, b) && e
            }
        b.i || (g = b.g = a, e = Pe(g, c, !0, b) && e, b.i || (e = Pe(g, c, !1, b) && e));
        if (d)
            for (f = 0; !b.i && f < d.length; f++) g = b.g = d[f], e = Pe(g, c, !1, b) && e
    }
    Ne.prototype.ca = function() {
        Ne.N.ca.call(this);
        if (this.g) {
            var a = this.g,
                b = 0,
                c;
            for (c in a.listeners) {
                for (var d = a.listeners[c], e = 0; e < d.length; e++) ++b, ve(d[e]);
                delete a.listeners[c];
                a.g--
            }
        }
        this.B = null
    };
    Ne.prototype.X = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };

    function Pe(a, b, c, d) {
        b = a.g.listeners[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ka && g.capture == c) {
                var h = g.listener,
                    k = g.ya || g.src;
                g.ta && ye(a.g, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };

    function Qe(a) {
        Ne.call(this);
        var b = this;
        this.G = this.j = 0;
        this.J = null != a ? a : {
            P: function(e, f) {
                return setTimeout(e, f)
            },
            aa: function(e) {
                clearTimeout(e)
            }
        };
        var c, d;
        this.h = null != (d = null == (c = window.navigator) ? void 0 : c.onLine) ? d : !0;
        this.l = function() {
            return y(function(e) {
                return x(e, Re(b), 0)
            })
        };
        window.addEventListener("offline", this.l);
        window.addEventListener("online", this.l);
        this.G || Se(this)
    }
    v(Qe, Ne);

    function Te() {
        var a = Ue;
        Qe.g || (Qe.g = new Qe(a));
        return Qe.g
    }
    Qe.prototype.dispose = function() {
        window.removeEventListener("offline", this.l);
        window.removeEventListener("online", this.l);
        this.J.aa(this.G);
        delete Qe.g
    };
    Qe.prototype.I = function() {
        return this.h
    };

    function Se(a) {
        a.G = a.J.P(function() {
            var b;
            return y(function(c) {
                if (1 == c.g) return a.h ? (null == (b = window.navigator) ? 0 : b.onLine) ? c.v(3) : x(c, Re(a), 3) : x(c, Re(a), 3);
                Se(a);
                c.g = 0
            })
        }, 3E4)
    }

    function Re(a, b) {
        return a.s ? a.s : a.s = new Promise(function(c) {
            var d, e, f, g;
            return y(function(h) {
                switch (h.g) {
                    case 1:
                        return d = window.AbortController ? new window.AbortController : void 0, f = null == (e = d) ? void 0 : e.signal, g = !1, wa(h, 2, 3), d && (a.j = a.J.P(function() {
                            d.abort()
                        }, b || 2E4)), x(h, fetch("/generate_204", {
                            method: "HEAD",
                            signal: f
                        }), 5);
                    case 5:
                        g = !0;
                    case 3:
                        Aa(h);
                        a.s = void 0;
                        a.j && (a.J.aa(a.j), a.j = 0);
                        g !== a.h && (a.h = g, a.h ? Oe(a, "networkstatus-online") : Oe(a, "networkstatus-offline"));
                        c(g);
                        Ba(h);
                        break;
                    case 2:
                        za(h), g = !1, h.v(3)
                }
            })
        })
    };

    function Ve() {
        this.data_ = [];
        this.g = -1
    }
    Ve.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && Number.isInteger(a) && this.data_[a] !== b && (this.data_[a] = b, this.g = -1)
    };
    Ve.prototype.get = function(a) {
        return !!this.data_[a]
    };

    function We(a) {
        -1 === a.g && (a.g = db(a.data_, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }, 0));
        return a.g
    };

    function Xe(a) {
        N.call(this, a, -1, Ye)
    }
    v(Xe, N);

    function Ze(a, b) {
        return J(a, 2, b)
    }

    function $e(a, b) {
        return J(a, 3, b)
    }

    function af(a, b) {
        return J(a, 4, b)
    }

    function bf(a, b) {
        return J(a, 5, b)
    }

    function cf(a, b) {
        return J(a, 9, b)
    }

    function df(a, b) {
        return qd(a, ef, 10, b)
    }

    function ff(a, b) {
        return J(a, 11, b)
    }

    function gf(a, b) {
        return J(a, 1, b)
    }

    function hf(a, b) {
        return J(a, 7, b)
    }

    function ef(a) {
        N.call(this, a)
    }
    v(ef, N);
    var Ye = [10, 6];
    var jf = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function kf(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function lf(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function mf() {
        var a = window;
        if (!lf(a)) return null;
        var b = kf(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(jf).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function nf(a) {
        var b;
        return ff(df(bf(Ze(gf(af(hf(cf($e(new Xe, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new ef;
            d = J(d, 1, c.brand);
            return J(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function of () {
        var a, b;
        return null != (b = null == (a = mf()) ? void 0 : a.then(function(c) {
            return nf(c)
        })) ? b : null
    };

    function pf(a, b) {
        this.i = a;
        this.j = b;
        this.h = 0;
        this.g = null
    }
    pf.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.i();
        return a
    };

    function qf(a, b) {
        a.j(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var rf;

    function sf() {
        var a = z.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
            var e = Fd();
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = Va(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !F("Trident") && !F("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Sa;
                    c.Sa = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Sa: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            z.setTimeout(e, 0)
        }
    };

    function tf() {
        this.h = this.g = null
    }
    tf.prototype.add = function(a, b) {
        var c = uf.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    tf.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
        return a
    };
    var uf = new pf(function() {
        return new vf
    }, function(a) {
        return a.reset()
    });

    function vf() {
        this.next = this.scope = this.g = null
    }
    vf.prototype.set = function(a, b) {
        this.g = a;
        this.scope = b;
        this.next = null
    };
    vf.prototype.reset = function() {
        this.next = this.scope = this.g = null
    };
    var wf, xf = !1,
        yf = new tf;

    function zf(a, b) {
        wf || Af();
        xf || (wf(), xf = !0);
        yf.add(a, b)
    }

    function Af() {
        if (z.Promise && z.Promise.resolve) {
            var a = z.Promise.resolve(void 0);
            wf = function() {
                a.then(Bf)
            }
        } else wf = function() {
            var b = Bf;
            "function" !== typeof z.setImmediate || z.Window && z.Window.prototype && !F("Edge") && z.Window.prototype.setImmediate == z.setImmediate ? (rf || (rf = sf()), rf(b)) : z.setImmediate(b)
        }
    }

    function Bf() {
        for (var a; a = yf.remove();) {
            try {
                a.g.call(a.scope)
            } catch (b) {
                ac(b)
            }
            qf(uf, a)
        }
        xf = !1
    };

    function Cf(a, b) {
        this.g = a[z.Symbol.iterator]();
        this.h = b
    }
    Cf.prototype[Symbol.iterator] = function() {
        return this
    };
    Cf.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.h.call(void 0, a.value),
            done: a.done
        }
    };

    function Df(a, b) {
        return new Cf(a, b)
    };

    function Ef() {
        this.blockSize = -1
    };

    function Ff() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.m = [];
        this.l = [];
        this.i = [];
        this.i[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.i[a] = 0;
        this.j = this.h = 0;
        this.reset()
    }
    D(Ff, Ef);
    Ff.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.j = this.h = 0
    };

    function Gf(a, b, c) {
        c || (c = 0);
        var d = a.l;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            h = a.g[3],
            k = a.g[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = h ^ c & (g ^ h);
                    var l = 1518500249
                } else f = c ^ g ^ h, l = 1859775393;
            else 60 > e ? (f = c & g | h & (c | g), l = 2400959708) :
                (f = c ^ g ^ h, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + k + l + d[e] & 4294967295;
            k = h;
            h = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + h & 4294967295;
        a.g[4] = a.g[4] + k & 4294967295
    }
    Ff.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.m, f = this.h; d < b;) {
                if (0 == f)
                    for (; d <= c;) Gf(this, a, d), d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Gf(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Gf(this, e);
                                f = 0;
                                break
                            }
            }
            this.h = f;
            this.j += b
        }
    };
    Ff.prototype.digest = function() {
        var a = [],
            b = 8 * this.j;
        56 > this.h ? this.update(this.i, 56 - this.h) : this.update(this.i, this.blockSize - (this.h - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--) this.m[c] = b & 255, b /= 256;
        Gf(this, this.m);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };

    function Hf() {}
    Hf.prototype.next = function() {
        return If
    };
    var If = {
        done: !0,
        value: void 0
    };

    function Jf(a) {
        return {
            value: a,
            done: !1
        }
    }
    Hf.prototype.K = function() {
        return this
    };

    function Kf(a) {
        if (a instanceof hg || a instanceof ig || a instanceof jg) return a;
        if ("function" == typeof a.next) return new hg(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new hg(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.K) return new hg(function() {
            return a.K()
        });
        throw Error("Not an iterator or iterable.");
    }

    function hg(a) {
        this.h = a
    }
    hg.prototype.K = function() {
        return new ig(this.h())
    };
    hg.prototype[Symbol.iterator] = function() {
        return new jg(this.h())
    };
    hg.prototype.g = function() {
        return new jg(this.h())
    };

    function ig(a) {
        this.h = a
    }
    v(ig, Hf);
    ig.prototype.next = function() {
        return this.h.next()
    };
    ig.prototype[Symbol.iterator] = function() {
        return new jg(this.h)
    };
    ig.prototype.g = function() {
        return new jg(this.h)
    };

    function jg(a) {
        hg.call(this, function() {
            return a
        });
        this.i = a
    }
    v(jg, hg);
    jg.prototype.next = function() {
        return this.i.next()
    };

    function kg(a, b) {
        this.h = {};
        this.g = [];
        this.i = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof kg)
                for (c = lg(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }

    function lg(a) {
        mg(a);
        return a.g.concat()
    }
    n = kg.prototype;
    n.has = function(a) {
        return ng(this.h, a)
    };
    n.equals = function(a, b) {
        if (this === a) return !0;
        if (this.size != a.size) return !1;
        b = b || og;
        mg(this);
        for (var c, d = 0; c = this.g[d]; d++)
            if (!b(this.get(c), a.get(c))) return !1;
        return !0
    };

    function og(a, b) {
        return a === b
    }
    n.za = function() {
        return 0 == this.size
    };
    n.clear = function() {
        this.h = {};
        this.i = this.size = this.g.length = 0
    };
    n.remove = function(a) {
        return this.delete(a)
    };
    n.delete = function(a) {
        return ng(this.h, a) ? (delete this.h[a], --this.size, this.i++, this.g.length > 2 * this.size && mg(this), !0) : !1
    };

    function mg(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                ng(a.h, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], ng(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    n.get = function(a, b) {
        return ng(this.h, a) ? this.h[a] : b
    };
    n.set = function(a, b) {
        ng(this.h, a) || (this.size += 1, this.g.push(a), this.i++);
        this.h[a] = b
    };
    n.forEach = function(a, b) {
        for (var c = lg(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    n.clone = function() {
        return new kg(this)
    };
    n.keys = function() {
        return Kf(this.K(!0)).g()
    };
    n.values = function() {
        return Kf(this.K(!1)).g()
    };
    n.entries = function() {
        var a = this;
        return Df(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    n.K = function(a) {
        mg(this);
        var b = 0,
            c = this.i,
            d = this,
            e = new Hf;
        e.next = function() {
            if (c != d.i) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return If;
            var f = d.g[b++];
            return Jf(a ? f : d.h[f])
        };
        return e
    };

    function ng(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var pg = z.JSON.stringify;

    function qg() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function rg(a) {
        this.g = 0;
        this.s = void 0;
        this.j = this.h = this.i = null;
        this.m = this.l = !1;
        if (a != $a) try {
            var b = this;
            a.call(void 0, function(c) {
                sg(b, 2, c)
            }, function(c) {
                sg(b, 3, c)
            })
        } catch (c) {
            sg(this, 3, c)
        }
    }

    function tg() {
        this.next = this.context = this.h = this.i = this.g = null;
        this.j = !1
    }
    tg.prototype.reset = function() {
        this.context = this.h = this.i = this.g = null;
        this.j = !1
    };
    var ug = new pf(function() {
        return new tg
    }, function(a) {
        a.reset()
    });

    function vg(a, b, c) {
        var d = ug.get();
        d.i = a;
        d.h = b;
        d.context = c;
        return d
    }
    rg.prototype.then = function(a, b, c) {
        return wg(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    rg.prototype.$goog_Thenable = !0;
    rg.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new xg(a);
            zf(function() {
                yg(this, b)
            }, this)
        }
    };

    function yg(a, b) {
        if (0 == a.g)
            if (a.i) {
                var c = a.i;
                if (c.h) {
                    for (var d = 0, e = null, f = null, g = c.h; g && (g.j || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.g && 1 == d ? yg(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : zg(c), Ag(c, e, 3, b)))
                }
                a.i = null
            } else sg(a, 3, b)
    }

    function Bg(a, b) {
        a.h || 2 != a.g && 3 != a.g || Cg(a);
        a.j ? a.j.next = b : a.h = b;
        a.j = b
    }

    function wg(a, b, c, d) {
        var e = vg(null, null, null);
        e.g = new rg(function(f, g) {
            e.i = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (l) {
                    g(l)
                }
            } : f;
            e.h = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof xg ? g(h) : f(k)
                } catch (l) {
                    g(l)
                }
            } : g
        });
        e.g.i = a;
        Bg(a, e);
        return e.g
    }
    rg.prototype.G = function(a) {
        this.g = 0;
        sg(this, 2, a)
    };
    rg.prototype.Z = function(a) {
        this.g = 0;
        sg(this, 3, a)
    };

    function sg(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c,
                    e = a.G,
                    f = a.Z;
                if (d instanceof rg) {
                    Bg(d, vg(e || $a, f || null, a));
                    var g = !0
                } else {
                    if (d) try {
                        var h = !!d.$goog_Thenable
                    } catch (l) {
                        h = !1
                    } else h = !1;
                    if (h) d.then(e, f, a), g = !0;
                    else {
                        if (Pa(d)) try {
                            var k = d.then;
                            if ("function" === typeof k) {
                                Dg(d, k, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
            }
            g || (a.s = c, a.g = b, a.i = null, Cg(a), 3 != b || c instanceof xg || Eg(a, c))
        }
    }

    function Dg(a, b, c, d, e) {
        function f(k) {
            h || (h = !0, d.call(e, k))
        }

        function g(k) {
            h || (h = !0, c.call(e, k))
        }
        var h = !1;
        try {
            b.call(a, g, f)
        } catch (k) {
            f(k)
        }
    }

    function Cg(a) {
        a.l || (a.l = !0, zf(a.B, a))
    }

    function zg(a) {
        var b = null;
        a.h && (b = a.h, a.h = b.next, b.next = null);
        a.h || (a.j = null);
        return b
    }
    rg.prototype.B = function() {
        for (var a; a = zg(this);) Ag(this, a, this.g, this.s);
        this.l = !1
    };

    function Ag(a, b, c, d) {
        if (3 == c && b.h && !b.j)
            for (; a && a.m; a = a.i) a.m = !1;
        if (b.g) b.g.i = null, Fg(b, c, d);
        else try {
            b.j ? b.i.call(b.context) : Fg(b, c, d)
        } catch (e) {
            Gg.call(null, e)
        }
        qf(ug, b)
    }

    function Fg(a, b, c) {
        2 == b ? a.i.call(a.context, c) : a.h && a.h.call(a.context, c)
    }

    function Eg(a, b) {
        a.m = !0;
        zf(function() {
            a.m && Gg.call(null, b)
        })
    }
    var Gg = ac;

    function xg(a) {
        Xa.call(this, a)
    }
    D(xg, Xa);
    xg.prototype.name = "cancel";

    function P(a) {
        ne.call(this);
        this.s = 1;
        this.j = [];
        this.l = 0;
        this.g = [];
        this.h = {};
        this.B = !!a
    }
    D(P, ne);
    n = P.prototype;
    n.subscribe = function(a, b, c) {
        var d = this.h[a];
        d || (d = this.h[a] = []);
        var e = this.s;
        this.g[e] = a;
        this.g[e + 1] = b;
        this.g[e + 2] = c;
        this.s = e + 3;
        d.push(e);
        return e
    };

    function Hg(a, b, c) {
        var d = Ig;
        if (a = d.h[a]) {
            var e = d.g;
            (a = a.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && d.na(a)
        }
    }
    n.na = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.h[b];
            0 != this.l ? (this.j.push(a), this.g[a + 1] = function() {}) : (c && fb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    n.ea = function(a, b) {
        var c = this.h[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.B)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    Jg(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.l++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.i; e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.l--, 0 < this.j.length && 0 == this.l)
                            for (; c = this.j.pop();) this.na(c)
                    }
                }
            return 0 != e
        }
        return !1
    };

    function Jg(a, b, c) {
        zf(function() {
            a.apply(b, c)
        })
    }
    n.clear = function(a) {
        if (a) {
            var b = this.h[a];
            b && (b.forEach(this.na, this), delete this.h[a])
        } else this.g.length = 0, this.h = {}
    };
    n.ca = function() {
        P.N.ca.call(this);
        this.clear();
        this.j.length = 0
    };

    function Kg(a) {
        this.g = a
    }
    Kg.prototype.set = function(a, b) {
        void 0 === b ? this.g.remove(a) : this.g.set(a, pg(b))
    };
    Kg.prototype.get = function(a) {
        try {
            var b = this.g.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return JSON.parse(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    Kg.prototype.remove = function(a) {
        this.g.remove(a)
    };

    function Lg(a) {
        this.g = a
    }
    D(Lg, Kg);

    function Mg(a) {
        this.data = a
    }

    function Ng(a) {
        return void 0 === a || a instanceof Mg ? a : new Mg(a)
    }
    Lg.prototype.set = function(a, b) {
        Lg.N.set.call(this, a, Ng(b))
    };
    Lg.prototype.h = function(a) {
        a = Lg.N.get.call(this, a);
        if (void 0 === a || a instanceof Object) return a;
        throw "Storage: Invalid value was encountered";
    };
    Lg.prototype.get = function(a) {
        if (a = this.h(a)) {
            if (a = a.data, void 0 === a) throw "Storage: Invalid value was encountered";
        } else a = void 0;
        return a
    };

    function Og(a) {
        this.g = a
    }
    D(Og, Lg);
    Og.prototype.set = function(a, b, c) {
        if (b = Ng(b)) {
            if (c) {
                if (c < Date.now()) {
                    Og.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = Date.now()
        }
        Og.N.set.call(this, a, b)
    };
    Og.prototype.h = function(a) {
        var b = Og.N.h.call(this, a);
        if (b) {
            var c = b.creation,
                d = b.expiration;
            if (d && d < Date.now() || c && c > Date.now()) Og.prototype.remove.call(this, a);
            else return b
        }
    };

    function Pg() {};

    function Qg() {}
    D(Qg, Pg);
    Qg.prototype[Symbol.iterator] = function() {
        return Kf(this.K(!0)).g()
    };
    Qg.prototype.clear = function() {
        var a = Array.from(this);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) this.remove(b.value)
    };

    function Rg(a) {
        this.g = a
    }
    D(Rg, Qg);
    n = Rg.prototype;
    n.set = function(a, b) {
        try {
            this.g.setItem(a, b)
        } catch (c) {
            if (0 == this.g.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    n.get = function(a) {
        a = this.g.getItem(a);
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    n.remove = function(a) {
        this.g.removeItem(a)
    };
    n.K = function(a) {
        var b = 0,
            c = this.g,
            d = new Hf;
        d.next = function() {
            if (b >= c.length) return If;
            var e = c.key(b++);
            if (a) return Jf(e);
            e = c.getItem(e);
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Jf(e)
        };
        return d
    };
    n.clear = function() {
        this.g.clear()
    };
    n.key = function(a) {
        return this.g.key(a)
    };

    function Sg() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.g = a
    }
    D(Sg, Rg);

    function Tg(a, b) {
        this.h = a;
        this.g = null;
        var c;
        if (c = ec) c = !(9 <= Number(rc));
        if (c) {
            Ug || (Ug = new kg);
            this.g = Ug.get(a);
            this.g || (b ? this.g = document.getElementById(b) : (this.g = document.createElement("userdata"), this.g.addBehavior("#default#userData"), document.body.appendChild(this.g)), Ug.set(a, this.g));
            try {
                this.g.load(this.h)
            } catch (d) {
                this.g = null
            }
        }
    }
    D(Tg, Qg);
    var Vg = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Ug = null;

    function Wg(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(b) {
            return Vg[b]
        })
    }
    n = Tg.prototype;
    n.set = function(a, b) {
        this.g.setAttribute(Wg(a), b);
        Xg(this)
    };
    n.get = function(a) {
        a = this.g.getAttribute(Wg(a));
        if ("string" !== typeof a && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    n.remove = function(a) {
        this.g.removeAttribute(Wg(a));
        Xg(this)
    };
    n.K = function(a) {
        var b = 0,
            c = this.g.XMLDocument.documentElement.attributes,
            d = new Hf;
        d.next = function() {
            if (b >= c.length) return If;
            var e = c[b++];
            if (a) return Jf(decodeURIComponent(e.nodeName.replace(/\./g, "%")).slice(1));
            e = e.nodeValue;
            if ("string" !== typeof e) throw "Storage mechanism: Invalid value was encountered";
            return Jf(e)
        };
        return d
    };
    n.clear = function() {
        for (var a = this.g.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Xg(this)
    };

    function Xg(a) {
        try {
            a.g.save(a.h)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function Yg(a, b) {
        this.h = a;
        this.g = b + "::"
    }
    D(Yg, Qg);
    Yg.prototype.set = function(a, b) {
        this.h.set(this.g + a, b)
    };
    Yg.prototype.get = function(a) {
        return this.h.get(this.g + a)
    };
    Yg.prototype.remove = function(a) {
        this.h.remove(this.g + a)
    };
    Yg.prototype.K = function(a) {
        var b = this.h[Symbol.iterator](),
            c = this,
            d = new Hf;
        d.next = function() {
            var e = b.next();
            if (e.done) return e;
            for (e = e.value; e.slice(0, c.g.length) != c.g;) {
                e = b.next();
                if (e.done) return e;
                e = e.value
            }
            return Jf(a ? e.slice(c.g.length) : c.h.get(e))
        };
        return d
    };

    function Zg(a) {
        N.call(this, a)
    }
    v(Zg, N);
    Zg.prototype.getKey = function() {
        return id(this, 1)
    };
    Zg.prototype.T = function() {
        return sd(this, 2 === ld(this, $g) ? 2 : -1)
    };
    var $g = [2, 3, 4, 5, 6];

    function ah(a) {
        N.call(this, a)
    }
    v(ah, N);

    function bh(a) {
        N.call(this, a)
    }
    v(bh, N);

    function ch(a) {
        N.call(this, a, -1, dh)
    }
    v(ch, N);
    var dh = [2];

    function eh(a) {
        N.call(this, a, -1, fh)
    }
    v(eh, N);
    eh.prototype.getPlayerType = function() {
        return id(this, 36)
    };
    eh.prototype.setHomeGroupInfo = function(a) {
        return L(this, ch, 81, a)
    };
    var fh = [9, 66, 24, 32, 86, 100, 101];

    function gh(a) {
        N.call(this, a, -1, hh)
    }
    v(gh, N);
    var hh = [15, 26, 28];

    function ih(a) {
        N.call(this, a)
    }
    v(ih, N);

    function jh(a) {
        N.call(this, a, -1, kh)
    }
    v(jh, N);
    jh.prototype.setSafetyMode = function(a) {
        return J(this, 5, a)
    };
    var kh = [12];

    function lh(a) {
        N.call(this, a, -1, mh)
    }
    v(lh, N);
    var mh = [12];
    var nh = {
        Xb: "WEB_DISPLAY_MODE_UNKNOWN",
        Tb: "WEB_DISPLAY_MODE_BROWSER",
        Vb: "WEB_DISPLAY_MODE_MINIMAL_UI",
        Wb: "WEB_DISPLAY_MODE_STANDALONE",
        Ub: "WEB_DISPLAY_MODE_FULLSCREEN"
    };

    function oh(a) {
        N.call(this, a, -1, ph)
    }
    v(oh, N);

    function qh(a) {
        N.call(this, a)
    }
    v(qh, N);
    qh.prototype.getKey = function() {
        return td(this, 1)
    };
    qh.prototype.T = function() {
        return td(this, 2)
    };
    var ph = [4, 5];

    function rh(a) {
        N.call(this, a)
    }
    v(rh, N);

    function sh(a) {
        N.call(this, a)
    }
    v(sh, N);
    var th = [2, 3, 4];

    function uh(a) {
        N.call(this, a)
    }
    v(uh, N);

    function vh(a) {
        N.call(this, a)
    }
    v(vh, N);

    function wh(a) {
        N.call(this, a)
    }
    v(wh, N);

    function xh(a) {
        N.call(this, a, -1, yh)
    }
    v(xh, N);
    var yh = [10, 17];

    function zh(a) {
        N.call(this, a)
    }
    v(zh, N);

    function Ah(a) {
        N.call(this, a)
    }
    v(Ah, N);

    function Bh(a) {
        N.call(this, a)
    }
    v(Bh, N);

    function Ch(a) {
        N.call(this, a, 449)
    }
    v(Ch, N);
    var Dh = [23, 24, 11, 6, 7, 5, 2, 3, 13, 20, 21, 22, 28, 32, 37, 229, 241, 45, 59, 225, 288, 72, 73, 78, 208, 156, 202, 215, 74, 76, 79, 80, 111, 85, 91, 97, 100, 102, 105, 119, 126, 127, 136, 146, 148, 151, 157, 158, 159, 163, 164, 168, 444, 176, 222, 383, 177, 178, 179, 411, 184, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 402, 320, 203, 204, 205, 206, 258, 259, 260, 261, 327, 209, 219, 226, 227, 232, 233, 234, 240, 244, 247, 248, 249, 251, 256, 257, 266, 254, 255, 270, 272, 278, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314, 319, 321, 323, 324, 328, 330, 331, 332, 334, 337, 338, 340, 344, 348, 350, 351,
        352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369, 370, 373, 374, 375, 378, 380, 381, 388, 389, 403, 410, 412, 429, 413, 414, 415, 416, 417, 418, 430, 423, 424, 425, 426, 427, 431, 117, 439, 441, 448
    ];

    function Eh(a) {
        N.call(this, a)
    }
    v(Eh, N);

    function Fh(a) {
        N.call(this, a)
    }
    v(Fh, N);
    Fh.prototype.getPlaylistId = function() {
        return sd(this, 2 === ld(this, Gh) ? 2 : -1)
    };
    var Gh = [1, 2];

    function Hh(a) {
        N.call(this, a, -1, Ih)
    }
    v(Hh, N);
    var Ih = [3];
    var Jh = z.window,
        Kh, Lh, Mh = (null == Jh ? void 0 : null == (Kh = Jh.yt) ? void 0 : Kh.config_) || (null == Jh ? void 0 : null == (Lh = Jh.ytcfg) ? void 0 : Lh.data_) || {};
    B("yt.config_", Mh);

    function Nh() {
        var a = arguments;
        1 < a.length ? Mh[a[0]] = a[1] : 1 === a.length && Object.assign(Mh, a[0])
    }

    function R(a, b) {
        return a in Mh ? Mh[a] : b
    }

    function Oh() {
        return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")
    }

    function Ph() {
        var a = Mh.EXPERIMENT_FLAGS;
        return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0
    };
    var Qh = [];

    function Rh(a) {
        Qh.forEach(function(b) {
            return b(a)
        })
    }

    function Sh(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                Th(b)
            }
        } : a
    }

    function Th(a, b, c, d) {
        var e = C("yt.logging.errors.log");
        e ? e(a, "ERROR", b, c, d) : (e = R("ERRORS", []), e.push([a, "ERROR", b, c, d]), Nh("ERRORS", e));
        Rh(a)
    }

    function Uh(a, b, c, d) {
        var e = C("yt.logging.errors.log");
        e ? e(a, "WARNING", b, c, d) : (e = R("ERRORS", []), e.push([a, "WARNING", b, c, d]), Nh("ERRORS", e))
    };
    var Vh = 0;
    B("ytDomDomGetNextId", C("ytDomDomGetNextId") || function() {
        return ++Vh
    });
    var Wh = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        screenX: 1,
        screenY: 1,
        scale: 1,
        rotation: 1,
        webkitMovementX: 1,
        webkitMovementY: 1
    };

    function Xh(a) {
        this.type = "";
        this.state = this.source = this.data = this.currentTarget = this.relatedTarget = this.target = null;
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.ctrlKey = this.altKey = !1;
        this.clientY = this.clientX = 0;
        this.changedTouches = this.touches = null;
        try {
            if (a = a || window.event) {
                this.event = a;
                for (var b in a) b in Wh || (this[b] = a[b]);
                var c = a.target || a.srcElement;
                c && 3 == c.nodeType && (c = c.parentNode);
                this.target = c;
                var d = a.relatedTarget;
                if (d) try {
                    d = d.nodeName ? d : null
                } catch (e) {
                    d = null
                } else "mouseover" ==
                    this.type ? d = a.fromElement : "mouseout" == this.type && (d = a.toElement);
                this.relatedTarget = d;
                this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
                this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
                this.keyCode = a.keyCode ? a.keyCode : a.which;
                this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
                this.altKey = a.altKey;
                this.ctrlKey = a.ctrlKey;
                this.shiftKey = a.shiftKey;
                this.metaKey = a.metaKey;
                this.g = a.pageX;
                this.h = a.pageY
            }
        } catch (e) {}
    }

    function Yh(a) {
        if (document.body && document.documentElement) {
            var b = document.body.scrollTop + document.documentElement.scrollTop;
            a.g = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            a.h = a.clientY + b
        }
    }
    Xh.prototype.preventDefault = function() {
        this.event && (this.event.returnValue = !1, this.event.preventDefault && this.event.preventDefault())
    };
    Xh.prototype.stopPropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopPropagation && this.event.stopPropagation())
    };
    Xh.prototype.stopImmediatePropagation = function() {
        this.event && (this.event.cancelBubble = !0, this.event.stopImmediatePropagation && this.event.stopImmediatePropagation())
    };
    var mb = z.ytEventsEventsListeners || {};
    B("ytEventsEventsListeners", mb);
    var Zh = z.ytEventsEventsCounter || {
        count: 0
    };
    B("ytEventsEventsCounter", Zh);

    function $h(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.addEventListener && ("mouseenter" != b || "onmouseenter" in document ? "mouseleave" != b || "onmouseenter" in document ? "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll") : b = "mouseout" : b = "mouseover");
        return lb(function(e) {
            var f = "boolean" === typeof e[4] && e[4] == !!d,
                g = Pa(e[4]) && Pa(d) && nb(e[4], d);
            return !!e.length && e[0] == a && e[1] == b && e[2] == c && (f || g)
        })
    }

    function ai(a) {
        a && ("string" == typeof a && (a = [a]), E(a, function(b) {
            if (b in mb) {
                var c = mb[b],
                    d = c[0],
                    e = c[1],
                    f = c[3];
                c = c[4];
                d.removeEventListener ? bi() || "boolean" === typeof c ? d.removeEventListener(e, f, c) : d.removeEventListener(e, f, !!c.capture) : d.detachEvent && d.detachEvent("on" + e, f);
                delete mb[b]
            }
        }))
    }
    var bi = ab(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "capture", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function ci(a, b, c, d) {
        d = void 0 === d ? {} : d;
        if (!a || !a.addEventListener && !a.attachEvent) return "";
        var e = $h(a, b, c, d);
        if (e) return e;
        e = ++Zh.count + "";
        var f = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document);
        var g = f ? function(h) {
            h = new Xh(h);
            if (!Gd(h.relatedTarget, function(k) {
                    return k == a
                })) return h.currentTarget = a, h.type = b, c.call(a, h)
        } : function(h) {
            h = new Xh(h);
            h.currentTarget = a;
            return c.call(a, h)
        };
        g = Sh(g);
        a.addEventListener ? ("mouseenter" == b && f ? b = "mouseover" : "mouseleave" == b && f ? b = "mouseout" : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style && (b = "MozMousePixelScroll"), bi() || "boolean" === typeof d ? a.addEventListener(b, g, d) : a.addEventListener(b, g, !!d.capture)) : a.attachEvent("on" + b, g);
        mb[e] = [a, b, c, g, d];
        return e
    };

    function di(a, b) {
        "function" === typeof a && (a = Sh(a));
        return window.setTimeout(a, b)
    }

    function ei(a, b) {
        "function" === typeof a && (a = Sh(a));
        return window.setInterval(a, b)
    };
    var fi = /^[\w.]*$/,
        gi = {
            q: !0,
            search_query: !0
        };

    function hi(a, b) {
        b = a.split(b);
        for (var c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d].split("=");
            if (1 == f.length && f[0] || 2 == f.length) try {
                var g = ii(f[0] || ""),
                    h = ii(f[1] || "");
                g in c ? Array.isArray(c[g]) ? ib(c[g], h) : c[g] = [c[g], h] : c[g] = h
            } catch (p) {
                var k = p,
                    l = f[0],
                    m = String(hi);
                k.args = [{
                    key: l,
                    value: f[1],
                    query: a,
                    method: ji == m ? "unchanged" : m
                }];
                gi.hasOwnProperty(l) || Uh(k)
            }
        }
        return c
    }
    var ji = String(hi);

    function ki(a) {
        var b = [];
        jb(a, function(c, d) {
            var e = encodeURIComponent(String(d)),
                f;
            Array.isArray(c) ? f = c : f = [c];
            E(f, function(g) {
                "" == g ? b.push(e) : b.push(e + "=" + encodeURIComponent(String(g)))
            })
        });
        return b.join("&")
    }

    function li(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        return hi(a, "&")
    }

    function mi(a, b, c) {
        var d = a.split("#", 2);
        a = d[0];
        d = 1 < d.length ? "#" + d[1] : "";
        var e = a.split("?", 2);
        a = e[0];
        e = li(e[1] || "");
        for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
        b = a;
        a = Yb(e);
        a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
        return a + d
    }

    function ni(a) {
        if (!b) var b = window.location.href;
        var c = a.match(Tb)[1] || null,
            d = Vb(a);
        c && d ? (a = a.match(Tb), b = b.match(Tb), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Vb(b) == d && (Number(b.match(Tb)[4] || null) || null) == (Number(a.match(Tb)[4] || null) || null) : !0;
        return a
    }

    function ii(a) {
        return a && a.match(fi) ? a : decodeURIComponent(a.replace(/\+/g, " "))
    };

    function T(a) {
        a = oi(a);
        return "string" === typeof a && "false" === a ? !1 : !!a
    }

    function pi(a, b) {
        a = oi(a);
        return void 0 === a && void 0 !== b ? b : Number(a || 0)
    }

    function oi(a) {
        var b = R("EXPERIMENTS_FORCED_FLAGS", {});
        return void 0 !== b[a] ? b[a] : R("EXPERIMENT_FLAGS", {})[a]
    }

    function qi() {
        var a = [],
            b = R("EXPERIMENTS_FORCED_FLAGS", {});
        for (c in b) a.push({
            key: c,
            value: String(b[c])
        });
        var c = R("EXPERIMENT_FLAGS", {});
        for (var d in c) d.startsWith("force_") && void 0 === b[d] && a.push({
            key: d,
            value: String(c[d])
        });
        return a
    };

    function ri(a) {
        var b = si;
        a = void 0 === a ? C("yt.ads.biscotti.lastId_") || "" : a;
        var c = Object,
            d = c.assign,
            e = {};
        e.dt = ae;
        e.flash = "0";
        a: {
            try {
                var f = b.g.top.location.href
            } catch (X) {
                f = 2;
                break a
            }
            f = f ? f === b.h.location.href ? 0 : 1 : 2
        }
        e = (e.frm = f, e);
        try {
            e.u_tz = -(new Date).getTimezoneOffset();
            var g = void 0 === g ? Cd : g;
            try {
                var h = g.history.length
            } catch (X) {
                h = 0
            }
            e.u_his = h;
            var k;
            e.u_h = null == (k = Cd.screen) ? void 0 : k.height;
            var l;
            e.u_w = null == (l = Cd.screen) ? void 0 : l.width;
            var m;
            e.u_ah = null == (m = Cd.screen) ? void 0 : m.availHeight;
            var p;
            e.u_aw = null ==
                (p = Cd.screen) ? void 0 : p.availWidth;
            var t;
            e.u_cd = null == (t = Cd.screen) ? void 0 : t.colorDepth
        } catch (X) {}
        h = b.g;
        try {
            var q = h.screenX;
            var w = h.screenY
        } catch (X) {}
        try {
            var A = h.outerWidth;
            var G = h.outerHeight
        } catch (X) {}
        try {
            var K = h.innerWidth;
            var M = h.innerHeight
        } catch (X) {}
        try {
            var O = h.screenLeft;
            var kb = h.screenTop
        } catch (X) {}
        try {
            K = h.innerWidth, M = h.innerHeight
        } catch (X) {}
        try {
            var pc = h.screen.availWidth;
            var ya = h.screen.availTop
        } catch (X) {}
        q = [O, kb, q, w, pc, ya, A, G, K, M];
        w = b.g.top;
        try {
            var sa = (w || window).document,
                Y = "CSS1Compat" ==
                sa.compatMode ? sa.documentElement : sa.body;
            var da = (new Ed(Y.clientWidth, Y.clientHeight)).round()
        } catch (X) {
            da = new Ed(-12245933, -12245933)
        }
        sa = da;
        da = {};
        var ea = void 0 === ea ? z : ea;
        Y = new Ve;
        ea.SVGElement && ea.document.createElementNS && Y.set(0);
        w = Ud();
        w["allow-top-navigation-by-user-activation"] && Y.set(1);
        w["allow-popups-to-escape-sandbox"] && Y.set(2);
        ea.crypto && ea.crypto.subtle && Y.set(3);
        ea.TextDecoder && ea.TextEncoder && Y.set(4);
        ea = We(Y);
        da.bc = ea;
        da.bih = sa.height;
        da.biw = sa.width;
        da.brdim = q.join();
        b = b.h;
        b = (da.vis =
            b.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0, da.wgl = !!Cd.WebGLRenderingContext, da);
        c = d.call(c, e, b);
        c.ca_type = "image";
        a && (c.bid = a);
        return c
    }
    var si = new function() {
        var a = window.document;
        this.g = window;
        this.h = a
    };
    B("yt.ads_.signals_.getAdSignalsString", function(a) {
        return ki(ri(a))
    });
    Date.now();
    var ti = "XMLHttpRequest" in z ? function() {
        return new XMLHttpRequest
    } : null;

    function ui() {
        if (!ti) return null;
        var a = ti();
        return "open" in a ? a : null
    };
    var vi = {
            Authorization: "AUTHORIZATION",
            "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
            "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
            "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
            "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
            "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
            "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
            "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
            "X-YouTube-Device": "DEVICE",
            "X-Youtube-Identity-Token": "ID_TOKEN",
            "X-YouTube-Page-CL": "PAGE_CL",
            "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
            "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
        },
        wi = "app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(ce)),
        xi = !1;

    function yi(a, b) {
        b = void 0 === b ? {} : b;
        var c = ni(a),
            d = T("web_ajax_ignore_global_headers_if_set"),
            e;
        for (e in vi) {
            var f = R(vi[e]);
            "X-Goog-Visitor-Id" !== e || f || (f = R("VISITOR_DATA"));
            !f || !c && Vb(a) || d && void 0 !== b[e] || (b[e] = f)
        }
        "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
        if (c || !Vb(a)) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
        if (c || !Vb(a)) {
            try {
                var g = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (h) {}
            g && (b["X-YouTube-Time-Zone"] = g)
        }
        document.location.hostname.endsWith("youtubeeducation.com") ||
            !c && Vb(a) || (b["X-YouTube-Ad-Signals"] = ki(ri()));
        return b
    }

    function zi(a) {
        var b = window.location.search,
            c = Vb(a);
        T("debug_handle_relative_url_for_query_forward_killswitch") || !c && ni(a) && (c = document.location.hostname);
        var d = Ub(a.match(Tb)[5] || null);
        d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
        if (!c || d) return a;
        var e = li(b),
            f = {};
        E(wi, function(g) {
            e[g] && (f[g] = e[g])
        });
        return mi(a, f || {}, !1)
    }

    function Ai(a, b) {
        var c = b.format || "JSON";
        a = Bi(a, b);
        var d = Ci(a, b),
            e = !1,
            f = Di(a, function(k) {
                if (!e) {
                    e = !0;
                    h && window.clearTimeout(h);
                    a: switch (k && "status" in k ? k.status : -1) {
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 304:
                            var l = !0;
                            break a;
                        default:
                            l = !1
                    }
                    var m = null,
                        p = 400 <= k.status && 500 > k.status,
                        t = 500 <= k.status && 600 > k.status;
                    if (l || p || t) m = Ei(a, c, k, b.convertToSafeHtml);
                    if (l) a: if (k && 204 == k.status) l = !0;
                        else {
                            switch (c) {
                                case "XML":
                                    l = 0 == parseInt(m && m.return_code, 10);
                                    break a;
                                case "RAW":
                                    l = !0;
                                    break a
                            }
                            l = !!m
                        }
                    m = m || {};
                    p = b.context || z;
                    l ? b.onSuccess && b.onSuccess.call(p, k, m) : b.onError && b.onError.call(p, k, m);
                    b.onFinish && b.onFinish.call(p, k, m)
                }
            }, b.method, d, b.headers, b.responseType, b.withCredentials);
        d = b.timeout || 0;
        if (b.onTimeout && 0 < d) {
            var g = b.onTimeout;
            var h = di(function() {
                e || (e = !0, f.abort(), window.clearTimeout(h), g.call(b.context || z, f))
            }, d)
        }
    }

    function Bi(a, b) {
        b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var c = R("XSRF_FIELD_NAME");
        if (b = b.urlParams) b[c] && delete b[c], a = mi(a, b || {}, !0);
        return a
    }

    function Ci(a, b) {
        var c = R("XSRF_FIELD_NAME"),
            d = R("XSRF_TOKEN"),
            e = b.postBody || "",
            f = b.postParams,
            g = R("XSRF_FIELD_NAME"),
            h;
        b.headers && (h = b.headers["Content-Type"]);
        b.excludeXsrf || Vb(a) && !b.withCredentials && Vb(a) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
        (T("ajax_parse_query_data_only_when_filled") && f && 0 < Object.keys(f).length || f) && "string" === typeof e && (e = li(e), qb(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ?
            JSON.stringify(e) : Yb(e));
        if (!(a = e) && (a = f)) {
            a: {
                for (var k in f) {
                    f = !1;
                    break a
                }
                f = !0
            }
            a = !f
        }!xi && a && "POST" != b.method && (xi = !0, Th(Error("AJAX request with postData should use POST")));
        return e
    }

    function Ei(a, b, c, d) {
        var e = null;
        switch (b) {
            case "JSON":
                try {
                    var f = c.responseText
                } catch (g) {
                    throw d = Error("Error reading responseText"), d.params = a, Uh(d), g;
                }
                a = c.getResponseHeader("Content-Type") || "";
                f && 0 <= a.indexOf("json") && (")]}'\n" === f.substring(0, 5) && (f = f.substring(5)), e = JSON.parse(f));
                break;
            case "XML":
                if (a = (a = c.responseXML) ? Fi(a) : null) e = {}, E(a.getElementsByTagName("*"), function(g) {
                    e[g.tagName] = Gi(g)
                })
        }
        d && Hi(e);
        return e
    }

    function Hi(a) {
        if (Pa(a))
            for (var b in a) {
                var c;
                (c = "html_content" == b) || (c = b.length - 5, c = 0 <= c && b.indexOf("_html", c) == c);
                if (c) {
                    c = b;
                    yb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");
                    var d = a[b];
                    if (void 0 === wb) {
                        var e = null;
                        var f = z.trustedTypes;
                        if (f && f.createPolicy) {
                            try {
                                e = f.createPolicy("goog#html", {
                                    createHTML: Wa,
                                    createScript: Wa,
                                    createScriptURL: Wa
                                })
                            } catch (g) {
                                z.console && z.console.error(g.message)
                            }
                            wb = e
                        } else wb = e
                    }
                    d = (e = wb) ? e.createHTML(d) : d;
                    a[c] = new Sb(d)
                } else Hi(a[b])
            }
    }

    function Fi(a) {
        return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }

    function Gi(a) {
        var b = "";
        E(a.childNodes, function(c) {
            b += c.nodeValue
        });
        return b
    }

    function Di(a, b, c, d, e, f, g) {
        function h() {
            4 == (k && "readyState" in k ? k.readyState : 0) && b && Sh(b)(k)
        }
        c = void 0 === c ? "GET" : c;
        d = void 0 === d ? "" : d;
        var k = ui();
        if (!k) return null;
        "onloadend" in k ? k.addEventListener("loadend", h, !1) : k.onreadystatechange = h;
        T("debug_forward_web_query_parameters") && (a = zi(a));
        k.open(c, a, !0);
        f && (k.responseType = f);
        g && (k.withCredentials = !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = yi(a, e))
            for (var l in e) k.setRequestHeader(l, e[l]), "content-type" == l.toLowerCase() && (c = !1);
        c && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        k.send(d);
        return k
    };

    function Ii() {
        if (!z.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
        try {
            return z.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : z.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : z.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : z.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
        } catch (a) {
            return "WEB_DISPLAY_MODE_UNKNOWN"
        }
    };
    B("ytglobal.prefsUserPrefsPrefs_", C("ytglobal.prefsUserPrefsPrefs_") || {});
    var Ji = {
            bluetooth: "CONN_DISCO",
            cellular: "CONN_CELLULAR_UNKNOWN",
            ethernet: "CONN_WIFI",
            none: "CONN_NONE",
            wifi: "CONN_WIFI",
            wimax: "CONN_CELLULAR_4G",
            other: "CONN_UNKNOWN",
            unknown: "CONN_UNKNOWN",
            "slow-2g": "CONN_CELLULAR_2G",
            "2g": "CONN_CELLULAR_2G",
            "3g": "CONN_CELLULAR_3G",
            "4g": "CONN_CELLULAR_4G"
        },
        Ki = {
            CONN_DEFAULT: 0,
            CONN_UNKNOWN: 1,
            CONN_NONE: 2,
            CONN_WIFI: 3,
            CONN_CELLULAR_2G: 4,
            CONN_CELLULAR_3G: 5,
            CONN_CELLULAR_4G: 6,
            CONN_CELLULAR_UNKNOWN: 7,
            CONN_DISCO: 8,
            CONN_CELLULAR_5G: 9,
            CONN_WIFI_METERED: 10,
            CONN_CELLULAR_5G_SA: 11,
            CONN_CELLULAR_5G_NSA: 12,
            CONN_INVALID: 31
        },
        Li = {
            EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
            EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
            EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
            EFFECTIVE_CONNECTION_TYPE_2G: 3,
            EFFECTIVE_CONNECTION_TYPE_3G: 4,
            EFFECTIVE_CONNECTION_TYPE_4G: 5
        },
        Mi = {
            "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
            "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
            "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
            "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
        };

    function Ni() {
        var a = z.navigator;
        return a ? a.connection : void 0
    };

    function Oi() {}

    function Pi(a, b) {
        return Qi(a, 0, b)
    }
    Oi.prototype.P = function(a, b) {
        return Qi(a, 1, b)
    };

    function Ri(a, b) {
        Qi(a, 2, b)
    };

    function Si() {
        Oi.apply(this, arguments)
    }
    v(Si, Oi);

    function Ti() {
        Si.g || (Si.g = new Si);
        return Si.g
    }

    function Qi(a, b, c) {
        void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
        var d = C("yt.scheduler.instance.addJob");
        return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : di(a, c || 0)
    }
    Si.prototype.aa = function(a) {
        if (void 0 === a || !Number.isNaN(Number(a))) {
            var b = C("yt.scheduler.instance.cancelJob");
            b ? b(a) : window.clearTimeout(a)
        }
    };
    Si.prototype.start = function() {
        var a = C("yt.scheduler.instance.start");
        a && a()
    };
    var Ue = Ti();

    function Ui(a) {
        var b = Ia.apply(1, arguments);
        var c = Error.call(this, a);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.args = [].concat(ia(b))
    }
    v(Ui, Error);

    function Vi() {
        try {
            return Wi(), !0
        } catch (a) {
            return !1
        }
    }

    function Wi() {
        if (void 0 !== R("DATASYNC_ID")) return R("DATASYNC_ID");
        throw new Ui("Datasync ID not set", "unknown");
    };
    var Xi = sc || tc;

    function Yi(a) {
        var b = new Sg;
        if (b.g) try {
            b.g.setItem("__sak", "1");
            b.g.removeItem("__sak");
            var c = !0
        } catch (d) {
            c = !1
        } else c = !1;
        (b = c ? a ? new Yg(b, a) : b : null) || (a = new Tg(a || "UserDataSharedStore"), b = a.g ? a : null);
        this.g = (a = b) ? new Og(a) : null;
        this.h = document.domain || window.location.hostname
    }
    Yi.prototype.set = function(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.g) try {
            this.g.set(a, b, Date.now() + 1E3 * c);
            return
        } catch (f) {}
        var e = "";
        if (d) try {
            e = escape(pg(b))
        } catch (f) {
            return
        } else e = escape(b);
        b = this.h;
        je.set("" + a, e, {
            Ka: c,
            path: "/",
            domain: void 0 === b ? "youtube.com" : b,
            secure: !1
        })
    };
    Yi.prototype.get = function(a, b) {
        var c = void 0,
            d = !this.g;
        if (!d) try {
            c = this.g.get(a)
        } catch (e) {
            d = !0
        }
        if (d && (c = je.get("" + a, void 0)) && (c = unescape(c), b)) try {
            c = JSON.parse(c)
        } catch (e) {
            this.remove(a), c = void 0
        }
        return c
    };
    Yi.prototype.remove = function(a) {
        this.g && this.g.remove(a);
        var b = this.h;
        je.remove("" + a, "/", void 0 === b ? "youtube.com" : b)
    };
    var Zi = function() {
        var a;
        return function() {
            a || (a = new Yi("ytidb"));
            return a
        }
    }();

    function $i() {
        var a;
        return null == (a = Zi()) ? void 0 : a.get("LAST_RESULT_ENTRY_KEY", !0)
    };
    var aj = [],
        bj = !1;

    function cj(a) {
        bj || (aj.push({
            type: "ERROR",
            payload: a
        }), 10 < aj.length && aj.shift())
    }

    function dj(a, b) {
        bj || (aj.push({
            type: "EVENT",
            eventType: a,
            payload: b
        }), 10 < aj.length && aj.shift())
    };

    function ej(a) {
        if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
    }

    function fj(a) {
        return a.substr(0, a.indexOf(":")) || a
    };
    var gj = {},
        hj = (gj.AUTH_INVALID = "No user identifier specified.", gj.EXPLICIT_ABORT = "Transaction was explicitly aborted.", gj.IDB_NOT_SUPPORTED = "IndexedDB is not supported.", gj.MISSING_INDEX = "Index not created.", gj.MISSING_OBJECT_STORES = "Object stores not created.", gj.DB_DELETED_BY_MISSING_OBJECT_STORES = "Database is deleted because expected object stores were not created.", gj.DB_REOPENED_BY_MISSING_OBJECT_STORES = "Database is reopened because expected object stores were not created.", gj.UNKNOWN_ABORT = "Transaction was aborted for unknown reasons.",
            gj.QUOTA_EXCEEDED = "The current transaction exceeded its quota limitations.", gj.QUOTA_MAYBE_EXCEEDED = "The current transaction may have failed because of exceeding quota limitations.", gj.EXECUTE_TRANSACTION_ON_CLOSED_DB = "Can't start a transaction on a closed database", gj.INCOMPATIBLE_DB_VERSION = "The binary is incompatible with the database version", gj),
        ij = {},
        jj = (ij.AUTH_INVALID = "ERROR", ij.EXECUTE_TRANSACTION_ON_CLOSED_DB = "WARNING", ij.EXPLICIT_ABORT = "IGNORED", ij.IDB_NOT_SUPPORTED = "ERROR", ij.MISSING_INDEX =
            "WARNING", ij.MISSING_OBJECT_STORES = "ERROR", ij.DB_DELETED_BY_MISSING_OBJECT_STORES = "WARNING", ij.DB_REOPENED_BY_MISSING_OBJECT_STORES = "WARNING", ij.QUOTA_EXCEEDED = "WARNING", ij.QUOTA_MAYBE_EXCEEDED = "WARNING", ij.UNKNOWN_ABORT = "WARNING", ij.INCOMPATIBLE_DB_VERSION = "WARNING", ij),
        kj = {},
        lj = (kj.AUTH_INVALID = !1, kj.EXECUTE_TRANSACTION_ON_CLOSED_DB = !1, kj.EXPLICIT_ABORT = !1, kj.IDB_NOT_SUPPORTED = !1, kj.MISSING_INDEX = !1, kj.MISSING_OBJECT_STORES = !1, kj.DB_DELETED_BY_MISSING_OBJECT_STORES = !1, kj.DB_REOPENED_BY_MISSING_OBJECT_STORES = !1, kj.QUOTA_EXCEEDED = !1, kj.QUOTA_MAYBE_EXCEEDED = !0, kj.UNKNOWN_ABORT = !0, kj.INCOMPATIBLE_DB_VERSION = !1, kj);

    function U(a, b, c, d, e) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? hj[a] : c;
        d = void 0 === d ? jj[a] : d;
        e = void 0 === e ? lj[a] : e;
        Ui.call(this, c, Object.assign({}, {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a
        }, b));
        this.type = a;
        this.message = c;
        this.level = d;
        this.g = e;
        Object.setPrototypeOf(this, U.prototype)
    }
    v(U, Ui);

    function mj(a, b) {
        U.call(this, "MISSING_OBJECT_STORES", {
            expectedObjectStores: b,
            foundObjectStores: a
        }, hj.MISSING_OBJECT_STORES);
        Object.setPrototypeOf(this, mj.prototype)
    }
    v(mj, U);

    function nj(a, b) {
        var c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.index = a;
        this.objectStore = b;
        Object.setPrototypeOf(this, nj.prototype)
    }
    v(nj, Error);
    var oj = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

    function pj(a, b, c, d) {
        b = fj(b);
        var e = a instanceof Error ? a : Error("Unexpected error: " + a);
        if (e instanceof U) return e;
        a = {
            objectStoreNames: c,
            dbName: b,
            dbVersion: d
        };
        if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
        if (uc && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
        if (e instanceof nj) return new U("MISSING_INDEX", Object.assign({}, a, {
            objectStore: e.objectStore,
            index: e.index
        }));
        if ("InvalidStateError" === e.name && oj.some(function(f) {
                return e.message.includes(f)
            })) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
            a);
        if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
        e.args = [Object.assign({}, a, {
            name: "IdbError",
            hc: e.name
        })];
        e.level = "WARNING";
        return e
    }

    function qj(a, b, c) {
        var d = $i();
        return new U("IDB_NOT_SUPPORTED", {
            context: {
                caller: a,
                publicName: b,
                version: c,
                hasSucceededOnce: null == d ? void 0 : d.hasSucceededOnce
            }
        })
    };

    function rj(a) {
        if (!a) throw Error();
        throw a;
    }

    function sj(a) {
        return a
    }

    function tj(a) {
        this.g = a
    }

    function uj(a) {
        function b(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "REJECTED",
                    reason: e
                };
                e = u(d.h);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }

        function c(e) {
            if ("PENDING" === d.state.status) {
                d.state = {
                    status: "FULFILLED",
                    value: e
                };
                e = u(d.g);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, f()
            }
        }
        var d = this;
        this.state = {
            status: "PENDING"
        };
        this.g = [];
        this.h = [];
        a = a.g;
        try {
            a(c, b)
        } catch (e) {
            b(e)
        }
    }
    uj.resolve = function(a) {
        return new uj(new tj(function(b, c) {
            a instanceof uj ? a.then(b, c) : b(a)
        }))
    };
    uj.reject = function(a) {
        return new uj(new tj(function(b, c) {
            c(a)
        }))
    };
    uj.prototype.then = function(a, b) {
        var c = this,
            d = null != a ? a : sj,
            e = null != b ? b : rj;
        return new uj(new tj(function(f, g) {
            "PENDING" === c.state.status ? (c.g.push(function() {
                vj(c, c, d, f, g)
            }), c.h.push(function() {
                wj(c, c, e, f, g)
            })) : "FULFILLED" === c.state.status ? vj(c, c, d, f, g) : "REJECTED" === c.state.status && wj(c, c, e, f, g)
        }))
    };

    function xj(a, b) {
        a.then(void 0, b)
    }

    function vj(a, b, c, d, e) {
        try {
            if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
            var f = c(a.state.value);
            f instanceof uj ? yj(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function wj(a, b, c, d, e) {
        try {
            if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
            var f = c(a.state.reason);
            f instanceof uj ? yj(a, b, f, d, e) : d(f)
        } catch (g) {
            e(g)
        }
    }

    function yj(a, b, c, d, e) {
        b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function(f) {
            f instanceof uj ? yj(a, b, f, d, e) : d(f)
        }, function(f) {
            e(f)
        })
    };

    function zj(a, b, c) {
        function d() {
            c(a.error);
            f()
        }

        function e() {
            b(a.result);
            f()
        }

        function f() {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", d)
            } catch (g) {}
        }
        a.addEventListener("success", e);
        a.addEventListener("error", d)
    }

    function Aj(a) {
        return new Promise(function(b, c) {
            zj(a, b, c)
        })
    }

    function Bj(a) {
        return new uj(new tj(function(b, c) {
            zj(a, b, c)
        }))
    };

    function Cj(a, b) {
        return new uj(new tj(function(c, d) {
            function e() {
                var f = a ? b(a) : null;
                f ? f.then(function(g) {
                    a = g;
                    e()
                }, d) : c()
            }
            e()
        }))
    };
    var Dj = window,
        V = Dj.ytcsi && Dj.ytcsi.now ? Dj.ytcsi.now : Dj.performance && Dj.performance.timing && Dj.performance.now && Dj.performance.timing.navigationStart ? function() {
            return Dj.performance.timing.navigationStart + Dj.performance.now()
        } : function() {
            return (new Date).getTime()
        };

    function Ej(a, b) {
        this.g = a;
        this.options = b;
        this.transactionCount = 0;
        this.i = Math.round(V());
        this.h = !1
    }
    n = Ej.prototype;
    n.add = function(a, b, c) {
        return Fj(this, [a], {
            mode: "readwrite",
            H: !0
        }, function(d) {
            return d.objectStore(a).add(b, c)
        })
    };
    n.clear = function(a) {
        return Fj(this, [a], {
            mode: "readwrite",
            H: !0
        }, function(b) {
            return b.objectStore(a).clear()
        })
    };
    n.close = function() {
        this.g.close();
        var a;
        (null == (a = this.options) ? 0 : a.closed) && this.options.closed()
    };

    function uk(a, b, c) {
        a = a.g.createObjectStore(b, c);
        return new vk(a)
    }
    n.delete = function(a, b) {
        return Fj(this, [a], {
            mode: "readwrite",
            H: !0
        }, function(c) {
            return c.objectStore(a).delete(b)
        })
    };
    n.get = function(a, b) {
        return Fj(this, [a], {
            mode: "readonly",
            H: !0
        }, function(c) {
            return c.objectStore(a).get(b)
        })
    };

    function wk(a, b) {
        return Fj(a, ["LogsRequestsStore"], {
            mode: "readwrite",
            H: !0
        }, function(c) {
            c = c.objectStore("LogsRequestsStore");
            return Bj(c.g.put(b, void 0))
        })
    }
    n.objectStoreNames = function() {
        return Array.from(this.g.objectStoreNames)
    };

    function Fj(a, b, c, d) {
        var e, f, g, h, k, l, m, p, t, q, w, A;
        return y(function(G) {
            switch (G.g) {
                case 1:
                    var K = {
                        mode: "readonly",
                        H: !1,
                        tag: "IDB_TRANSACTION_TAG_UNKNOWN"
                    };
                    "string" === typeof c ? K.mode = c : Object.assign(K, c);
                    e = K;
                    a.transactionCount++;
                    f = e.H ? 3 : 1;
                    g = 0;
                case 2:
                    if (h) {
                        G.v(3);
                        break
                    }
                    g++;
                    k = Math.round(V());
                    wa(G, 4);
                    l = a.g.transaction(b, e.mode);
                    K = new xk(l);
                    K = yk(K, d);
                    return x(G, K, 6);
                case 6:
                    return m = G.h, p = Math.round(V()), zk(a, k, p, g, void 0, b.join(), e), G.return(m);
                case 4:
                    t = za(G);
                    q = Math.round(V());
                    w = pj(t, a.g.name, b.join(), a.g.version);
                    if ((A = w instanceof U && !w.g) || g >= f) zk(a, k, q, g, w, b.join(), e), h = w;
                    G.v(2);
                    break;
                case 3:
                    return G.return(Promise.reject(h))
            }
        })
    }

    function zk(a, b, c, d, e, f, g) {
        b = c - b;
        e ? (e instanceof U && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && dj("QUOTA_EXCEEDED", {
            dbName: fj(a.g.name),
            objectStoreNames: f,
            transactionCount: a.transactionCount,
            transactionMode: g.mode
        }), e instanceof U && "UNKNOWN_ABORT" === e.type && (c -= a.i, 0 > c && c >= Math.pow(2, 31) && (c = 0), dj("TRANSACTION_UNEXPECTEDLY_ABORTED", {
            objectStoreNames: f,
            transactionDuration: b,
            transactionCount: a.transactionCount,
            dbDuration: c
        }), a.h = !0), Ak(a, !1, d, f, b, g.tag), cj(e)) : Ak(a, !0, d, f, b, g.tag)
    }

    function Ak(a, b, c, d, e, f) {
        dj("TRANSACTION_ENDED", {
            objectStoreNames: d,
            connectionHasUnknownAbortedTransaction: a.h,
            duration: e,
            isSuccessful: b,
            tryCount: c,
            tag: void 0 === f ? "IDB_TRANSACTION_TAG_UNKNOWN" : f
        })
    }
    n.getName = function() {
        return this.g.name
    };

    function vk(a) {
        this.g = a
    }
    n = vk.prototype;
    n.add = function(a, b) {
        return Bj(this.g.add(a, b))
    };
    n.autoIncrement = function() {
        return this.g.autoIncrement
    };
    n.clear = function() {
        return Bj(this.g.clear()).then(function() {})
    };

    function Bk(a, b) {
        return Ck(a, {
            query: b
        }, function(c) {
            return c.delete().then(function() {
                return c.continue()
            })
        }).then(function() {})
    }
    n.delete = function(a) {
        return a instanceof IDBKeyRange ? Bk(this, a) : Bj(this.g.delete(a))
    };
    n.get = function(a) {
        return Bj(this.g.get(a))
    };
    n.index = function(a) {
        try {
            return new Dk(this.g.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new nj(a, this.g.name);
            throw b;
        }
    };
    n.getName = function() {
        return this.g.name
    };
    n.keyPath = function() {
        return this.g.keyPath
    };

    function Ck(a, b, c) {
        a = a.g.openCursor(b.query, b.direction);
        return Ek(a).then(function(d) {
            return Cj(d, c)
        })
    }

    function xk(a) {
        var b = this;
        this.g = a;
        this.i = new Map;
        this.h = !1;
        this.done = new Promise(function(c, d) {
            b.g.addEventListener("complete", function() {
                c()
            });
            b.g.addEventListener("error", function(e) {
                e.currentTarget === e.target && d(b.g.error)
            });
            b.g.addEventListener("abort", function() {
                var e = b.g.error;
                if (e) d(e);
                else if (!b.h) {
                    e = U;
                    for (var f = b.g.objectStoreNames, g = [], h = 0; h < f.length; h++) {
                        var k = f.item(h);
                        if (null === k) throw Error("Invariant: item in DOMStringList is null");
                        g.push(k)
                    }
                    e = new e("UNKNOWN_ABORT", {
                        objectStoreNames: g.join(),
                        dbName: b.g.db.name,
                        mode: b.g.mode
                    });
                    d(e)
                }
            })
        })
    }

    function yk(a, b) {
        var c = new Promise(function(d, e) {
            try {
                xj(b(a).then(function(f) {
                    d(f)
                }), e)
            } catch (f) {
                e(f), a.abort()
            }
        });
        return Promise.all([c, a.done]).then(function(d) {
            return u(d).next().value
        })
    }
    xk.prototype.abort = function() {
        this.g.abort();
        this.h = !0;
        throw new U("EXPLICIT_ABORT");
    };
    xk.prototype.objectStore = function(a) {
        a = this.g.objectStore(a);
        var b = this.i.get(a);
        b || (b = new vk(a), this.i.set(a, b));
        return b
    };

    function Dk(a) {
        this.g = a
    }
    n = Dk.prototype;
    n.delete = function(a) {
        return Fk(this, {
            query: a
        }, function(b) {
            return b.delete().then(function() {
                return b.continue()
            })
        })
    };
    n.get = function(a) {
        return Bj(this.g.get(a))
    };
    n.getKey = function(a) {
        return Bj(this.g.getKey(a))
    };
    n.keyPath = function() {
        return this.g.keyPath
    };
    n.unique = function() {
        return this.g.unique
    };

    function Fk(a, b, c) {
        a = a.g.openCursor(void 0 === b.query ? null : b.query, void 0 === b.direction ? "next" : b.direction);
        return Ek(a).then(function(d) {
            return Cj(d, c)
        })
    }

    function Gk(a, b) {
        this.request = a;
        this.cursor = b
    }

    function Ek(a) {
        return Bj(a).then(function(b) {
            return b ? new Gk(a, b) : null
        })
    }
    n = Gk.prototype;
    n.advance = function(a) {
        this.cursor.advance(a);
        return Ek(this.request)
    };
    n.continue = function(a) {
        this.cursor.continue(a);
        return Ek(this.request)
    };
    n.delete = function() {
        return Bj(this.cursor.delete()).then(function() {})
    };
    n.getKey = function() {
        return this.cursor.key
    };
    n.T = function() {
        return this.cursor.value
    };
    n.update = function(a) {
        return Bj(this.cursor.update(a))
    };

    function Hk(a, b, c) {
        return new Promise(function(d, e) {
            function f() {
                t || (t = new Ej(g.result, {
                    closed: p
                }));
                return t
            }
            var g = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
            var h = c.mb,
                k = c.nb,
                l = c.Gb,
                m = c.upgrade,
                p = c.closed,
                t;
            g.addEventListener("upgradeneeded", function(q) {
                try {
                    if (null === q.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                    if (null === g.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                    q.dataLoss && "none" !== q.dataLoss && dj("IDB_DATA_CORRUPTED", {
                        reason: q.dataLossMessage || "unknown reason",
                        dbName: fj(a)
                    });
                    var w = f(),
                        A = new xk(g.transaction);
                    m &&
                        m(w, function(G) {
                            return q.oldVersion < G && q.newVersion >= G
                        }, A);
                    A.done.catch(function(G) {
                        e(G)
                    })
                } catch (G) {
                    e(G)
                }
            });
            g.addEventListener("success", function() {
                var q = g.result;
                k && q.addEventListener("versionchange", function() {
                    k(f())
                });
                q.addEventListener("close", function() {
                    dj("IDB_UNEXPECTEDLY_CLOSED", {
                        dbName: fj(a),
                        dbVersion: q.version
                    });
                    l && l()
                });
                d(f())
            });
            g.addEventListener("error", function() {
                e(g.error)
            });
            h && g.addEventListener("blocked", function() {
                h()
            })
        })
    }

    function Ik(a, b, c) {
        c = void 0 === c ? {} : c;
        return Hk(a, b, c)
    }

    function Jk(a, b) {
        b = void 0 === b ? {} : b;
        var c, d, e, f;
        return y(function(g) {
            if (1 == g.g) return wa(g, 2), c = self.indexedDB.deleteDatabase(a), d = b, (e = d.mb) && c.addEventListener("blocked", function() {
                e()
            }), x(g, Aj(c), 4);
            if (2 != g.g) return xa(g, 0);
            f = za(g);
            throw pj(f, a, "", -1);
        })
    };

    function Kk(a) {
        return new Promise(function(b) {
            Ri(function() {
                b()
            }, a)
        })
    }

    function Lk(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.l = this.m = 0;
        this.h = 500
    }
    Lk.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return Ik(a, b, c)
    };
    Lk.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return Jk(this.name, a)
    };

    function Mk(a, b) {
        return new U("INCOMPATIBLE_DB_VERSION", {
            dbName: a.name,
            oldVersion: a.options.version,
            newVersion: b
        })
    }

    function Nk(a, b) {
        if (!b) throw qj("openWithToken", fj(a.name));
        return Ok(a)
    }

    function Ok(a) {
        function b() {
            var f, g, h, k, l, m, p, t, q, w;
            return y(function(A) {
                switch (A.g) {
                    case 1:
                        return g = null != (f = Error().stack) ? f : "", wa(A, 2), x(A, a.i(a.name, a.options.version, d), 4);
                    case 4:
                        h = A.h;
                        for (var G = a.options, K = [], M = u(Object.keys(G.ja)), O = M.next(); !O.done; O = M.next()) {
                            O = O.value;
                            var kb = G.ja[O],
                                pc = void 0 === kb.Eb ? Number.MAX_VALUE : kb.Eb;
                            !(h.g.version >= kb.Ia) || h.g.version >= pc || h.g.objectStoreNames.contains(O) || K.push(O)
                        }
                        k = K;
                        if (0 === k.length) {
                            A.v(5);
                            break
                        }
                        l = Object.keys(a.options.ja);
                        m = h.objectStoreNames();
                        if (a.l < pi("ytidb_reopen_db_retries", 0)) return a.l++, h.close(), cj(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), A.return(b());
                        if (!(a.m < pi("ytidb_remake_db_retries", 1))) {
                            A.v(6);
                            break
                        }
                        a.m++;
                        if (!T("ytidb_remake_db_enable_backoff_delay")) {
                            A.v(7);
                            break
                        }
                        return x(A, Kk(a.h), 8);
                    case 8:
                        a.h *= 2;
                    case 7:
                        return x(A, a.delete(), 9);
                    case 9:
                        return cj(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                            dbName: a.name,
                            expectedObjectStores: l,
                            foundObjectStores: m
                        })), A.return(b());
                    case 6:
                        throw new mj(m, l);
                    case 5:
                        return A.return(h);
                    case 2:
                        p = za(A);
                        if (p instanceof DOMException ? "VersionError" !== p.name : "DOMError" in self && p instanceof DOMError ? "VersionError" !== p.name : !(p instanceof Object && "message" in p) || "An attempt was made to open a database using a lower version than the existing version." !== p.message) {
                            A.v(10);
                            break
                        }
                        return x(A, a.i(a.name, void 0, Object.assign({}, d, {
                            upgrade: void 0
                        })), 11);
                    case 11:
                        t = A.h;
                        q = t.g.version;
                        if (void 0 !== a.options.version && q > a.options.version + 1) throw t.close(),
                            a.j = !1, Mk(a, q);
                        return A.return(t);
                    case 10:
                        throw c(), p instanceof Error && !T("ytidb_async_stack_killswitch") && (p.stack = p.stack + "\n" + g.substring(g.indexOf("\n") + 1)), pj(p, a.name, "", null != (w = a.options.version) ? w : -1);
                }
            })
        }

        function c() {
            a.g === e && (a.g = void 0)
        }
        if (!a.j) throw Mk(a);
        if (a.g) return a.g;
        var d = {
            nb: function(f) {
                f.close()
            },
            closed: c,
            Gb: c,
            upgrade: a.options.upgrade
        };
        var e = b();
        a.g = e;
        return a.g
    };
    var Pk = new Lk("YtIdbMeta", {
        ja: {
            databases: {
                Ia: 1
            }
        },
        upgrade: function(a, b) {
            b(1) && uk(a, "databases", {
                keyPath: "actualName"
            })
        }
    });

    function Qk(a, b) {
        var c;
        return y(function(d) {
            if (1 == d.g) return x(d, Nk(Pk, b), 2);
            c = d.h;
            return d.return(Fj(c, ["databases"], {
                H: !0,
                mode: "readwrite"
            }, function(e) {
                var f = e.objectStore("databases");
                return f.get(a.actualName).then(function(g) {
                    if (g ? a.actualName !== g.actualName || a.publicName !== g.publicName || a.userIdentifier !== g.userIdentifier : 1) return Bj(f.g.put(a, void 0)).then(function() {})
                })
            }))
        })
    }

    function Rk(a, b) {
        var c;
        return y(function(d) {
            if (1 == d.g) return a ? x(d, Nk(Pk, b), 2) : d.return();
            c = d.h;
            return d.return(c.delete("databases", a))
        })
    }

    function Sk(a, b) {
        var c, d;
        return y(function(e) {
            return 1 == e.g ? (c = [], x(e, Nk(Pk, b), 2)) : 3 != e.g ? (d = e.h, x(e, Fj(d, ["databases"], {
                H: !0,
                mode: "readonly"
            }, function(f) {
                c.length = 0;
                return Ck(f.objectStore("databases"), {}, function(g) {
                    a(g.T()) && c.push(g.T());
                    return g.continue()
                })
            }), 3)) : e.return(c)
        })
    }

    function Tk(a) {
        return Sk(function(b) {
            return "LogsDatabaseV2" === b.publicName && void 0 !== b.userIdentifier
        }, a)
    };
    var Uk, Vk = new function() {}(new function() {});

    function Wk() {
        var a, b, c, d;
        return y(function(e) {
            switch (e.g) {
                case 1:
                    a = $i();
                    if (null == (b = a) ? 0 : b.hasSucceededOnce) return e.return(!0);
                    var f;
                    if (f = Xi) f = /WebKit\/([0-9]+)/.exec(Lb()), f = !!(f && 600 <= parseInt(f[1], 10));
                    f && (f = /WebKit\/([0-9]+)/.exec(Lb()), f = !(f && 602 <= parseInt(f[1], 10)));
                    if (f || fc) return e.return(!1);
                    try {
                        if (c = self, !(c.indexedDB && c.IDBIndex && c.IDBKeyRange && c.IDBObjectStore)) return e.return(!1)
                    } catch (g) {
                        return e.return(!1)
                    }
                    if (!("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype)) return e.return(!1);
                    wa(e, 2);
                    d = {
                        actualName: "yt-idb-test-do-not-use",
                        publicName: "yt-idb-test-do-not-use",
                        userIdentifier: void 0
                    };
                    return x(e, Qk(d, Vk), 4);
                case 4:
                    return x(e, Rk("yt-idb-test-do-not-use", Vk), 5);
                case 5:
                    return e.return(!0);
                case 2:
                    return za(e), e.return(!1)
            }
        })
    }

    function Xk() {
        if (void 0 !== Uk) return Uk;
        bj = !0;
        return Uk = Wk().then(function(a) {
            bj = !1;
            var b;
            if (null != (b = Zi()) && b.g) {
                var c;
                b = {
                    hasSucceededOnce: (null == (c = $i()) ? void 0 : c.hasSucceededOnce) || a
                };
                var d;
                null == (d = Zi()) || d.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0)
            }
            return a
        })
    }

    function Yk() {
        var a = C("ytglobal.idbToken_") || void 0;
        return a ? Promise.resolve(a) : Xk().then(function(b) {
            (b = b ? Vk : void 0) && B("ytglobal.idbToken_", b);
            return b
        })
    };
    new qg;

    function Zk(a) {
        if (!Vi()) throw a = new U("AUTH_INVALID", {
            dbName: a
        }), cj(a), a;
        var b = Wi();
        return {
            actualName: a + ":" + b,
            publicName: a,
            userIdentifier: b
        }
    }

    function $k(a, b, c, d) {
        var e, f, g, h, k, l;
        return y(function(m) {
            switch (m.g) {
                case 1:
                    return f = null != (e = Error().stack) ? e : "", x(m, Yk(), 2);
                case 2:
                    g = m.h;
                    if (!g) throw h = qj("openDbImpl", a, b), T("ytidb_async_stack_killswitch") || (h.stack = h.stack + "\n" + f.substring(f.indexOf("\n") + 1)), cj(h), h;
                    ej(a);
                    k = c ? {
                        actualName: a,
                        publicName: a,
                        userIdentifier: void 0
                    } : Zk(a);
                    wa(m, 3);
                    return x(m, Qk(k, g), 5);
                case 5:
                    return x(m, Ik(k.actualName, b, d), 6);
                case 6:
                    return m.return(m.h);
                case 3:
                    return l = za(m), wa(m, 7), x(m, Rk(k.actualName, g), 9);
                case 9:
                    xa(m,
                        8);
                    break;
                case 7:
                    za(m);
                case 8:
                    throw l;
            }
        })
    }

    function al(a, b, c) {
        c = void 0 === c ? {} : c;
        return $k(a, b, !1, c)
    }

    function bl(a, b, c) {
        c = void 0 === c ? {} : c;
        return $k(a, b, !0, c)
    }

    function cl(a, b) {
        b = void 0 === b ? {} : b;
        var c, d;
        return y(function(e) {
            if (1 == e.g) return x(e, Yk(), 2);
            if (3 != e.g) {
                c = e.h;
                if (!c) return e.return();
                ej(a);
                d = Zk(a);
                return x(e, Jk(d.actualName, b), 3)
            }
            return x(e, Rk(d.actualName, c), 0)
        })
    }

    function dl(a, b, c) {
        a = a.map(function(d) {
            return y(function(e) {
                return 1 == e.g ? x(e, Jk(d.actualName, b), 2) : x(e, Rk(d.actualName, c), 0)
            })
        });
        return Promise.all(a).then(function() {})
    }

    function el() {
        var a = void 0 === a ? {} : a;
        var b, c;
        return y(function(d) {
            if (1 == d.g) return x(d, Yk(), 2);
            if (3 != d.g) {
                b = d.h;
                if (!b) return d.return();
                ej("LogsDatabaseV2");
                return x(d, Tk(b), 3)
            }
            c = d.h;
            return x(d, dl(c, a, b), 0)
        })
    }

    function fl(a, b) {
        b = void 0 === b ? {} : b;
        var c;
        return y(function(d) {
            if (1 == d.g) return x(d, Yk(), 2);
            if (3 != d.g) {
                c = d.h;
                if (!c) return d.return();
                ej(a);
                return x(d, Jk(a, b), 3)
            }
            return x(d, Rk(a, c), 0)
        })
    };

    function gl(a, b) {
        Lk.call(this, a, b);
        this.options = b;
        ej(a)
    }
    v(gl, Lk);

    function hl(a, b) {
        var c;
        return function() {
            c || (c = new gl(a, b));
            return c
        }
    }
    gl.prototype.i = function(a, b, c) {
        c = void 0 === c ? {} : c;
        return (this.options.Pa ? bl : al)(a, b, Object.assign({}, c))
    };
    gl.prototype.delete = function(a) {
        a = void 0 === a ? {} : a;
        return (this.options.Pa ? fl : cl)(this.name, a)
    };

    function il(a, b) {
        return hl(a, b)
    };

    function jl() {};

    function kl() {
        return "INNERTUBE_API_KEY" in Mh && "INNERTUBE_API_VERSION" in Mh
    }

    function ll() {
        return {
            vb: R("INNERTUBE_API_KEY"),
            wb: R("INNERTUBE_API_VERSION"),
            Ja: R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
            Wa: R("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
            xb: R("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
            Xa: R("INNERTUBE_CONTEXT_CLIENT_VERSION"),
            Za: R("INNERTUBE_CONTEXT_HL"),
            Ya: R("INNERTUBE_CONTEXT_GL"),
            yb: R("INNERTUBE_HOST_OVERRIDE") || "",
            Ab: !!R("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
            zb: !!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
            appInstallData: R("SERIALIZED_CLIENT_CONFIG_DATA")
        }
    }

    function ml(a) {
        var b = {
            client: {
                hl: a.Za,
                gl: a.Ya,
                clientName: a.Wa,
                clientVersion: a.Xa,
                configInfo: a.Ja
            }
        };
        navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
        var c = z.devicePixelRatio;
        c && 1 != c && (b.client.screenDensityFloat = String(c));
        c = R("EXPERIMENTS_TOKEN", "");
        "" !== c && (b.client.experimentsToken = c);
        c = qi();
        0 < c.length && (b.request = {
            internalExperimentFlags: c
        });
        nl(a, void 0, b);
        ol(void 0, b);
        pl(a, void 0, b);
        ql(void 0, b);
        T("start_sending_config_hash") && rl(void 0, b);
        R("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") &&
            (b.user = {
                onBehalfOfUser: R("DELEGATED_SESSION_ID")
            });
        a = Object;
        c = a.assign;
        for (var d = b.client, e = {}, f = u(Object.entries(li(R("DEVICE", "")))), g = f.next(); !g.done; g = f.next()) {
            var h = u(g.value);
            g = h.next().value;
            h = h.next().value;
            "cbrand" === g ? e.deviceMake = h : "cmodel" === g ? e.deviceModel = h : "cbr" === g ? e.browserName = h : "cbrver" === g ? e.browserVersion = h : "cos" === g ? e.osName = h : "cosver" === g ? e.osVersion = h : "cplatform" === g && (e.platform = h)
        }
        b.client = c.call(a, d, e);
        return b
    }

    function sl(a) {
        var b = new lh,
            c = new eh;
        J(c, 1, a.Za);
        J(c, 2, a.Ya);
        J(c, 16, a.xb);
        J(c, 17, a.Xa);
        if (a.Ja) {
            var d = a.Ja,
                e = new ah;
            d.coldConfigData && J(e, 1, d.coldConfigData);
            d.appInstallData && J(e, 6, d.appInstallData);
            d.coldHashData && J(e, 3, d.coldHashData);
            d.hotHashData && J(e, 5, d.hotHashData);
            L(c, ah, 62, e)
        }(d = z.devicePixelRatio) && 1 != d && J(c, 65, d);
        d = R("EXPERIMENTS_TOKEN", "");
        "" !== d && J(c, 54, d);
        d = qi();
        if (0 < d.length) {
            e = new gh;
            for (var f = 0; f < d.length; f++) {
                var g = new Zg;
                J(g, 1, d[f].key);
                kd(g, 2, $g, d[f].value);
                rd(e, 15, Zg, g)
            }
            L(b,
                gh, 5, e)
        }
        nl(a, c);
        ol(c);
        pl(a, c);
        ql(c);
        T("start_sending_config_hash") && rl(c);
        R("DELEGATED_SESSION_ID") && !T("pageid_as_header_web") && (a = new jh, J(a, 3, R("DELEGATED_SESSION_ID")));
        a = u(Object.entries(li(R("DEVICE", ""))));
        for (d = a.next(); !d.done; d = a.next()) e = u(d.value), d = e.next().value, e = e.next().value, "cbrand" === d ? J(c, 12, e) : "cmodel" === d ? J(c, 13, e) : "cbr" === d ? J(c, 87, e) : "cbrver" === d ? J(c, 88, e) : "cos" === d ? J(c, 18, e) : "cosver" === d ? J(c, 19, e) : "cplatform" === d && J(c, 42, e);
        L(b, eh, 1, c);
        return b
    }

    function nl(a, b, c) {
        a = a.Wa;
        if ("WEB" === a || "MWEB" === a || 1 === a || 2 === a)
            if (b) {
                c = md(b, bh, 96) || new bh;
                var d = Ii();
                d = Object.keys(nh).indexOf(d);
                d = -1 === d ? null : d;
                null !== d && J(c, 3, d);
                L(b, bh, 96, c)
            } else c && (c.client.mainAppWebInfo = null != (d = c.client.mainAppWebInfo) ? d : {}, c.client.mainAppWebInfo.webDisplayMode = Ii())
    }

    function ol(a, b) {
        var c;
        if (T("web_log_memory_total_kbytes") && (null == (c = z.navigator) ? 0 : c.deviceMemory)) {
            var d;
            c = null == (d = z.navigator) ? void 0 : d.deviceMemory;
            a ? J(a, 95, 1E6 * c) : b && (b.client.memoryTotalKbytes = "" + 1E6 * c)
        }
    }

    function pl(a, b, c) {
        if (a.appInstallData)
            if (b) {
                var d;
                c = null != (d = md(b, ah, 62)) ? d : new ah;
                J(c, 6, a.appInstallData);
                L(b, ah, 62, c)
            } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
    }

    function ql(a, b) {
        a: {
            var c = Ni();
            if (c) {
                var d = Ji[c.type || "unknown"] || "CONN_UNKNOWN";
                c = Ji[c.effectiveType || "unknown"] || "CONN_UNKNOWN";
                "CONN_CELLULAR_UNKNOWN" === d && "CONN_UNKNOWN" !== c && (d = c);
                if ("CONN_UNKNOWN" !== d) break a;
                if ("CONN_UNKNOWN" !== c) {
                    d = c;
                    break a
                }
            }
            d = void 0
        }
        d && (a ? J(a, 61, Ki[d]) : b && (b.client.connectionType = d));T("web_log_effective_connection_type") && (d = Ni(), d = null != d && d.effectiveType ? Mi.hasOwnProperty(d.effectiveType) ? Mi[d.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, d && (a ? J(a, 94, Li[d]) :
            b && (b.client.effectiveConnectionType = d)))
    }

    function tl(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = {};
        R("EOM_VISITOR_DATA") ? d = {
            "X-Goog-EOM-Visitor-Id": R("EOM_VISITOR_DATA")
        } : d = {
            "X-Goog-Visitor-Id": c.visitorData || R("VISITOR_DATA", "")
        };
        if (b && b.includes("www.youtube-nocookie.com")) return d;
        (b = c.Zb || R("AUTHORIZATION")) || (a ? b = "Bearer " + C("gapi.auth.getToken")().Yb : b = me([]));
        b && (d.Authorization = b, d["X-Goog-AuthUser"] = R("SESSION_INDEX", 0), T("pageid_as_header_web") && (d["X-Goog-PageId"] = R("DELEGATED_SESSION_ID")));
        return d
    }

    function rl(a, b) {
        jl.g || (jl.g = new jl);
        var c = C("yt.gcf.config.coldConfigData");
        var d = C("yt.gcf.config.hotHashData");
        var e = C("yt.gcf.config.coldHashData");
        if (c && e && d)
            if (a) {
                var f;
                b = null != (f = md(a, ah, 62)) ? f : new ah;
                J(b, 1, c);
                J(b, 3, e);
                J(b, 5, d);
                L(a, ah, 62, b)
            } else b && (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.coldConfigData = c, b.client.configInfo.coldHashData = e, b.client.configInfo.hotHashData = d)
    };

    function ul(a) {
        a = Object.assign({}, a);
        delete a.Authorization;
        var b = me();
        if (b) {
            var c = new Ff;
            c.update(R("INNERTUBE_API_KEY"));
            c.update(b);
            a.hash = xc(c.digest(), 3)
        }
        return a
    };
    var vl;

    function wl() {
        vl || (vl = new Yi("yt.innertube"));
        return vl
    }

    function xl(a, b, c, d) {
        if (d) return null;
        d = wl().get("nextId", !0) || 1;
        var e = wl().get("requests", !0) || {};
        e[d] = {
            method: a,
            request: b,
            authState: ul(c),
            requestTime: Math.round(V())
        };
        wl().set("nextId", d + 1, 86400, !0);
        wl().set("requests", e, 86400, !0);
        return d
    }

    function yl(a) {
        var b = wl().get("requests", !0) || {};
        delete b[a];
        wl().set("requests", b, 86400, !0)
    }

    function zl(a) {
        var b = wl().get("requests", !0);
        if (b) {
            for (var c in b) {
                var d = b[c];
                if (!(6E4 > Math.round(V()) - d.requestTime)) {
                    var e = d.authState,
                        f = ul(tl(!1));
                    nb(e, f) && (e = d.request, "requestTimeMs" in e && (e.requestTimeMs = Math.round(V())), Al(a, d.method, e, {}));
                    delete b[c]
                }
            }
            wl().set("requests", b, 86400, !0)
        }
    };

    function Bl(a) {
        this.sa = this.g = !1;
        this.potentialEsfErrorCounter = this.h = 0;
        this.handleError = function() {};
        this.da = function() {};
        this.now = Date.now;
        this.ha = !1;
        var b;
        this.ib = null != (b = a.ib) ? b : 100;
        var c;
        this.hb = null != (c = a.hb) ? c : 1;
        var d;
        this.fb = null != (d = a.fb) ? d : 2592E6;
        var e;
        this.eb = null != (e = a.eb) ? e : 12E4;
        var f;
        this.gb = null != (f = a.gb) ? f : 5E3;
        var g;
        this.u = null != (g = a.u) ? g : void 0;
        this.xa = !!a.xa;
        var h;
        this.wa = null != (h = a.wa) ? h : .1;
        var k;
        this.Ca = null != (k = a.Ca) ? k : 10;
        a.handleError && (this.handleError = a.handleError);
        a.da && (this.da = a.da);
        a.ha && (this.ha = a.ha);
        a.sa && (this.sa = a.sa);
        this.A = a.A;
        this.J = a.J;
        this.C = a.C;
        this.F = a.F;
        this.O = a.O;
        this.Na = a.Na;
        this.Ma = a.Ma;
        Cl(this) && (!this.A || this.A("networkless_logging")) && Dl(this)
    }

    function Dl(a) {
        Cl(a) && !a.ha && (a.g = !0, a.xa && Math.random() <= a.wa && a.C.pb(a.u), El(a), a.F.I() && a.ma(), a.F.X(a.Na, a.ma.bind(a)), a.F.X(a.Ma, a.Ra.bind(a)))
    }
    n = Bl.prototype;
    n.writeThenSend = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (Cl(this) && this.g) {
            var d = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.C.set(d, this.u).then(function(e) {
                d.id = e;
                c.F.I() && Fl(c, d)
            }).catch(function(e) {
                Fl(c, d);
                Gl(c, e)
            })
        } else this.O(a, b)
    };
    n.sendThenWrite = function(a, b, c) {
        var d = this;
        b = void 0 === b ? {} : b;
        if (Cl(this) && this.g) {
            var e = {
                url: a,
                options: b,
                timestamp: this.now(),
                status: "NEW",
                sendCount: 0
            };
            this.A && this.A("nwl_skip_retry") && (e.skipRetry = c);
            if (this.F.I() || this.A && this.A("nwl_aggressive_send_then_write") && !e.skipRetry) {
                if (!e.skipRetry) {
                    var f = b.onError ? b.onError : function() {};
                    b.onError = function(g, h) {
                        return y(function(k) {
                            if (1 == k.g) return x(k, d.C.set(e, d.u).catch(function(l) {
                                Gl(d, l)
                            }), 2);
                            f(g, h);
                            k.g = 0
                        })
                    }
                }
                this.O(a, b, e.skipRetry)
            } else this.C.set(e, this.u).catch(function(g) {
                d.O(a, b, e.skipRetry);
                Gl(d, g)
            })
        } else this.O(a, b, this.A && this.A("nwl_skip_retry") && c)
    };
    n.sendAndWrite = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        if (Cl(this) && this.g) {
            var d = {
                    url: a,
                    options: b,
                    timestamp: this.now(),
                    status: "NEW",
                    sendCount: 0
                },
                e = !1,
                f = b.onSuccess ? b.onSuccess : function() {};
            d.options.onSuccess = function(g, h) {
                void 0 !== d.id ? c.C.ba(d.id, c.u) : e = !0;
                c.F.Y && c.A && c.A("vss_network_hint") && c.F.Y(!0);
                f(g, h)
            };
            this.O(d.url, d.options);
            this.C.set(d, this.u).then(function(g) {
                d.id = g;
                e && c.C.ba(d.id, c.u)
            }).catch(function(g) {
                Gl(c, g)
            })
        } else this.O(a, b)
    };
    n.ma = function() {
        var a = this;
        if (!Cl(this)) throw qj("throttleSend");
        this.h || (this.h = this.J.P(function() {
            var b;
            return y(function(c) {
                if (1 == c.g) return x(c, a.C.Va("NEW", a.u), 2);
                if (3 != c.g) return b = c.h, b ? x(c, Fl(a, b), 3) : (a.Ra(), c.return());
                a.h && (a.h = 0, a.ma());
                c.g = 0
            })
        }, this.ib))
    };
    n.Ra = function() {
        this.J.aa(this.h);
        this.h = 0
    };

    function Fl(a, b) {
        var c, d;
        return y(function(e) {
            switch (e.g) {
                case 1:
                    if (!Cl(a)) throw c = qj("immediateSend"), c;
                    if (void 0 === b.id) {
                        e.v(2);
                        break
                    }
                    return x(e, a.C.Cb(b.id, a.u), 3);
                case 3:
                    (d = e.h) ? b = d: a.da(Error("The request cannot be found in the database."));
                case 2:
                    if (Hl(a, b, a.fb)) {
                        e.v(4);
                        break
                    }
                    a.da(Error("Networkless Logging: Stored logs request expired age limit"));
                    if (void 0 === b.id) {
                        e.v(5);
                        break
                    }
                    return x(e, a.C.ba(b.id, a.u), 5);
                case 5:
                    return e.return();
                case 4:
                    b.skipRetry || (b = Il(a, b));
                    if (!b) {
                        e.v(0);
                        break
                    }
                    if (!b.skipRetry ||
                        void 0 === b.id) {
                        e.v(8);
                        break
                    }
                    return x(e, a.C.ba(b.id, a.u), 8);
                case 8:
                    a.O(b.url, b.options, !!b.skipRetry), e.g = 0
            }
        })
    }

    function Il(a, b) {
        if (!Cl(a)) throw qj("updateRequestHandlers");
        var c = b.options.onError ? b.options.onError : function() {};
        b.options.onError = function(e, f) {
            var g, h, k;
            return y(function(l) {
                switch (l.g) {
                    case 1:
                        g = Jl(f);
                        if (!(a.A && a.A("nwl_consider_error_code") && g || a.A && !a.A("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.Ca)) {
                            l.v(2);
                            break
                        }
                        if (!a.F.Ea) {
                            l.v(3);
                            break
                        }
                        return x(l, a.F.Ea(), 3);
                    case 3:
                        if (a.F.I()) {
                            l.v(2);
                            break
                        }
                        c(e, f);
                        if (!a.A || !a.A("nwl_consider_error_code") || void 0 === (null == (h = b) ? void 0 : h.id)) {
                            l.v(6);
                            break
                        }
                        return x(l, a.C.Oa(b.id, a.u, !1), 6);
                    case 6:
                        return l.return();
                    case 2:
                        if (a.A && a.A("nwl_consider_error_code") &&
                            !g && a.potentialEsfErrorCounter > a.Ca) return l.return();
                        a.potentialEsfErrorCounter++;
                        if (void 0 === (null == (k = b) ? void 0 : k.id)) {
                            l.v(8);
                            break
                        }
                        return b.sendCount < a.hb ? x(l, a.C.Oa(b.id, a.u), 12) : x(l, a.C.ba(b.id, a.u), 8);
                    case 12:
                        a.J.P(function() {
                            a.F.I() && a.ma()
                        }, a.gb);
                    case 8:
                        c(e, f), l.g = 0
                }
            })
        };
        var d = b.options.onSuccess ? b.options.onSuccess : function() {};
        b.options.onSuccess = function(e, f) {
            var g;
            return y(function(h) {
                if (1 == h.g) return void 0 === (null == (g = b) ? void 0 : g.id) ? h.v(2) : x(h, a.C.ba(b.id, a.u), 2);
                a.F.Y && a.A && a.A("vss_network_hint") && a.F.Y(!0);
                d(e, f);
                h.g = 0
            })
        };
        return b
    }

    function Hl(a, b, c) {
        b = b.timestamp;
        return a.now() - b >= c ? !1 : !0
    }

    function El(a) {
        if (!Cl(a)) throw qj("retryQueuedRequests");
        a.C.Va("QUEUED", a.u).then(function(b) {
            b && !Hl(a, b, a.eb) ? a.J.P(function() {
                return y(function(c) {
                    if (1 == c.g) return void 0 === b.id ? c.v(2) : x(c, a.C.Oa(b.id, a.u), 2);
                    El(a);
                    c.g = 0
                })
            }) : a.F.I() && a.ma()
        })
    }

    function Gl(a, b) {
        a.jb && !a.F.I() ? a.jb(b) : a.handleError(b)
    }

    function Cl(a) {
        return !!a.u || a.sa
    }

    function Jl(a) {
        var b;
        return (a = null == a ? void 0 : null == (b = a.error) ? void 0 : b.code) && 400 <= a && 599 >= a ? !1 : !0
    };
    var Kl = C("ytPubsub2Pubsub2Instance") || new P;
    P.prototype.subscribe = P.prototype.subscribe;
    P.prototype.unsubscribeByKey = P.prototype.na;
    P.prototype.publish = P.prototype.ea;
    P.prototype.clear = P.prototype.clear;
    B("ytPubsub2Pubsub2Instance", Kl);
    B("ytPubsub2Pubsub2SubscribedKeys", C("ytPubsub2Pubsub2SubscribedKeys") || {});
    B("ytPubsub2Pubsub2TopicToKeys", C("ytPubsub2Pubsub2TopicToKeys") || {});
    B("ytPubsub2Pubsub2IsAsync", C("ytPubsub2Pubsub2IsAsync") || {});
    B("ytPubsub2Pubsub2SkipSubKey", null);
    var Ll;

    function Ml() {
        if (Ll) return Ll();
        var a = {};
        Ll = il("LogsDatabaseV2", {
            ja: (a.LogsRequestsStore = {
                Ia: 2
            }, a),
            Pa: !1,
            upgrade: function(b, c, d) {
                c(2) && uk(b, "LogsRequestsStore", {
                    keyPath: "id",
                    autoIncrement: !0
                });
                c(3);
                c(5) && (d = d.objectStore("LogsRequestsStore"), d.g.indexNames.contains("newRequest") && d.g.deleteIndex("newRequest"), d.g.createIndex("newRequestV2", ["status", "interface", "timestamp"], {
                    unique: !1
                }));
                c(7) && b.g.objectStoreNames.contains("sapisid") && b.g.deleteObjectStore("sapisid");
                c(9) && b.g.objectStoreNames.contains("SWHealthLog") && b.g.deleteObjectStore("SWHealthLog")
            },
            version: 9
        });
        return Ll()
    };

    function Nl(a) {
        return Nk(Ml(), a)
    }

    function Ol(a, b) {
        var c, d, e, f;
        return y(function(g) {
            if (1 == g.g) return c = {
                startTime: V(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
            }, x(g, Nl(b), 2);
            if (3 != g.g) return d = g.h, e = Object.assign({}, a, {
                options: JSON.parse(JSON.stringify(a.options)),
                interface: R("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            }), x(g, wk(d, e), 3);
            f = g.h;
            c.Hb = V();
            Pl(c);
            return g.return(f)
        })
    }

    function Ql(a, b) {
        var c, d, e, f, g, h, k;
        return y(function(l) {
            if (1 == l.g) return c = {
                startTime: V(),
                transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
            }, x(l, Nl(b), 2);
            if (3 != l.g) return d = l.h, e = R("INNERTUBE_CONTEXT_CLIENT_NAME", 0), f = [a, e, 0], g = [a, e, V()], h = IDBKeyRange.bound(f, g), k = void 0, x(l, Fj(d, ["LogsRequestsStore"], {
                    mode: "readwrite",
                    H: !0
                }, function(m) {
                    return Fk(m.objectStore("LogsRequestsStore").index("newRequestV2"), {
                        query: h,
                        direction: "prev"
                    }, function(p) {
                        p.T() && (k = p.T(), "NEW" === a && (k.status = "QUEUED", p.update(k)))
                    })
                }),
                3);
            c.Hb = V();
            Pl(c);
            return l.return(k)
        })
    }

    function Rl(a, b) {
        var c;
        return y(function(d) {
            if (1 == d.g) return x(d, Nl(b), 2);
            c = d.h;
            return d.return(Fj(c, ["LogsRequestsStore"], {
                mode: "readwrite",
                H: !0
            }, function(e) {
                var f = e.objectStore("LogsRequestsStore");
                return f.get(a).then(function(g) {
                    if (g) return g.status = "QUEUED", Bj(f.g.put(g, void 0)).then(function() {
                        return g
                    })
                })
            }))
        })
    }

    function Sl(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d;
        return y(function(e) {
            if (1 == e.g) return x(e, Nl(b), 2);
            d = e.h;
            return e.return(Fj(d, ["LogsRequestsStore"], {
                mode: "readwrite",
                H: !0
            }, function(f) {
                var g = f.objectStore("LogsRequestsStore");
                return g.get(a).then(function(h) {
                    return h ? (h.status = "NEW", c && (h.sendCount += 1), Bj(g.g.put(h, void 0)).then(function() {
                        return h
                    })) : uj.resolve(void 0)
                })
            }))
        })
    }

    function Tl(a, b) {
        var c;
        return y(function(d) {
            if (1 == d.g) return x(d, Nl(b), 2);
            c = d.h;
            return d.return(c.delete("LogsRequestsStore", a))
        })
    }

    function Ul(a) {
        var b, c;
        return y(function(d) {
            if (1 == d.g) return x(d, Nl(a), 2);
            b = d.h;
            c = V() - 2592E6;
            return x(d, Fj(b, ["LogsRequestsStore"], {
                mode: "readwrite",
                H: !0
            }, function(e) {
                return Ck(e.objectStore("LogsRequestsStore"), {}, function(f) {
                    if (f.T().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function Vl() {
        y(function(a) {
            return x(a, el(), 0)
        })
    }

    function Pl(a) {
        if (!T("nwl_csi_killswitch") && .01 >= Math.random()) {
            var b = C("ytPubsub2Pubsub2Instance");
            b && b.publish.call(b, "nwl_transaction_latency_payload".toString(), "nwl_transaction_latency_payload", a)
        }
    };
    var Wl = {},
        Xl = il("ServiceWorkerLogsDatabase", {
            ja: (Wl.SWHealthLog = {
                Ia: 1
            }, Wl),
            Pa: !0,
            upgrade: function(a, b) {
                b(1) && uk(a, "SWHealthLog", {
                    keyPath: "id",
                    autoIncrement: !0
                }).g.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
                    unique: !1
                })
            },
            version: 1
        });

    function Yl(a) {
        return Nk(Xl(), a)
    }

    function Zl(a) {
        var b, c;
        y(function(d) {
            if (1 == d.g) return x(d, Yl(a), 2);
            b = d.h;
            c = V() - 2592E6;
            return x(d, Fj(b, ["SWHealthLog"], {
                mode: "readwrite",
                H: !0
            }, function(e) {
                return Ck(e.objectStore("SWHealthLog"), {}, function(f) {
                    if (f.T().timestamp <= c) return f.delete().then(function() {
                        return f.continue()
                    })
                })
            }), 0)
        })
    }

    function $l(a) {
        var b;
        return y(function(c) {
            if (1 == c.g) return x(c, Yl(a), 2);
            b = c.h;
            return x(c, b.clear("SWHealthLog"), 0)
        })
    };
    var am = {},
        bm = 0;

    function cm(a) {
        var b = new Image,
            c = "" + bm++;
        am[c] = b;
        b.onload = b.onerror = function() {
            delete am[c]
        };
        b.src = a
    };

    function W() {
        this.g = new Map;
        this.h = !1
    }

    function dm() {
        if (!W.g) {
            var a = C("yt.networkRequestMonitor.instance") || new W;
            B("yt.networkRequestMonitor.instance", a);
            W.g = a
        }
        return W.g
    }
    W.prototype.requestComplete = function(a, b) {
        b && (this.h = !0);
        a = this.removeParams(a);
        this.g.get(a) || this.g.set(a, b)
    };
    W.prototype.isEndpointCFR = function(a) {
        a = this.removeParams(a);
        return (a = this.g.get(a)) ? !1 : !1 === a && this.h ? !0 : null
    };
    W.prototype.removeParams = function(a) {
        return a.split("?")[0]
    };
    W.prototype.removeParams = W.prototype.removeParams;
    W.prototype.isEndpointCFR = W.prototype.isEndpointCFR;
    W.prototype.requestComplete = W.prototype.requestComplete;
    W.getInstance = dm;
    var em;

    function fm() {
        em || (em = new Yi("yt.offline"));
        return em
    }

    function gm(a) {
        if (T("offline_error_handling")) {
            var b = fm().get("errors", !0) || {};
            b[a.message] = {
                name: a.name,
                stack: a.stack
            };
            a.level && (b[a.message].level = a.level);
            fm().set("errors", b, 2592E3, !0)
        }
    };

    function Z() {
        Ne.call(this);
        var a = this;
        this.j = !1;
        this.h = Te();
        this.h.X("networkstatus-online", function() {
            if (a.j && T("offline_error_handling")) {
                var b = fm().get("errors", !0);
                if (b) {
                    for (var c in b)
                        if (b[c]) {
                            var d = new Ui(c, "sent via offline_errors");
                            d.name = b[c].name;
                            d.stack = b[c].stack;
                            d.level = b[c].level;
                            Th(d)
                        }
                    fm().set("errors", {}, 2592E3, !0)
                }
            }
        })
    }
    v(Z, Ne);

    function hm() {
        if (!Z.g) {
            var a = C("yt.networkStatusManager.instance") || new Z;
            B("yt.networkStatusManager.instance", a);
            Z.g = a
        }
        return Z.g
    }
    n = Z.prototype;
    n.I = function() {
        return this.h.I()
    };
    n.Y = function(a) {
        this.h.h = a
    };
    n.ub = function() {
        var a = window.navigator.onLine;
        return void 0 === a ? !0 : a
    };
    n.rb = function() {
        this.j = !0
    };
    n.X = function(a, b) {
        return this.h.X(a, b)
    };
    n.Ea = function(a) {
        a = Re(this.h, a);
        a.then(function(b) {
            T("use_cfr_monitor") && dm().requestComplete("generate_204", b)
        });
        return a
    };
    Z.prototype.sendNetworkCheckRequest = Z.prototype.Ea;
    Z.prototype.listen = Z.prototype.X;
    Z.prototype.enableErrorFlushing = Z.prototype.rb;
    Z.prototype.getWindowStatus = Z.prototype.ub;
    Z.prototype.networkStatusHint = Z.prototype.Y;
    Z.prototype.isNetworkAvailable = Z.prototype.I;
    Z.getInstance = hm;

    function im(a) {
        a = void 0 === a ? {} : a;
        Ne.call(this);
        var b = this;
        this.h = this.s = 0;
        this.j = hm();
        var c = C("yt.networkStatusManager.instance.listen").bind(this.j);
        c && (a.Da ? (this.Da = a.Da, c("networkstatus-online", function() {
            jm(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            jm(b, "publicytnetworkstatus-offline")
        })) : (c("networkstatus-online", function() {
            Oe(b, "publicytnetworkstatus-online")
        }), c("networkstatus-offline", function() {
            Oe(b, "publicytnetworkstatus-offline")
        })))
    }
    v(im, Ne);
    im.prototype.I = function() {
        var a = C("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.j)() : !0
    };
    im.prototype.Y = function(a) {
        var b = C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);
        b && b(a)
    };
    im.prototype.Ea = function(a) {
        var b = this,
            c;
        return y(function(d) {
            c = C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);
            return T("skip_network_check_if_cfr") && dm().isEndpointCFR("generate_204") ? d.return(new Promise(function(e) {
                var f;
                b.Y((null == (f = window.navigator) ? void 0 : f.onLine) || !0);
                e(b.I())
            })) : c ? d.return(c(a)) : d.return(!0)
        })
    };

    function jm(a, b) {
        a.Da ? a.h ? (Ue.aa(a.s), a.s = Ue.P(function() {
            a.l !== b && (Oe(a, b), a.l = b, a.h = V())
        }, a.Da - (V() - a.h))) : (Oe(a, b), a.l = b, a.h = V()) : Oe(a, b)
    };
    var km;

    function lm() {
        var a = Bl.call;
        km || (km = new im({
            ec: !0,
            dc: !0
        }));
        a.call(Bl, this, {
            C: {
                pb: Ul,
                ba: Tl,
                Va: Ql,
                Cb: Rl,
                Oa: Sl,
                set: Ol
            },
            F: km,
            handleError: Th,
            da: Uh,
            O: mm,
            now: V,
            jb: gm,
            J: Ti(),
            Na: "publicytnetworkstatus-online",
            Ma: "publicytnetworkstatus-offline",
            xa: !0,
            wa: .1,
            Ca: pi("potential_esf_error_limit", 10),
            A: T,
            ha: !(Vi() && "www.youtube-nocookie.com" !== Vb(document.location.toString()))
        });
        this.i = new qg;
        T("networkless_immediately_drop_all_requests") && Vl();
        fl("LogsDatabaseV2")
    }
    v(lm, Bl);

    function nm() {
        var a = C("yt.networklessRequestController.instance");
        a || (a = new lm, B("yt.networklessRequestController.instance", a), T("networkless_logging") && Yk().then(function(b) {
            a.u = b;
            Dl(a);
            a.i.resolve();
            a.xa && Math.random() <= a.wa && a.u && Zl(a.u);
            T("networkless_immediately_drop_sw_health_store") && om(a)
        }));
        return a
    }
    lm.prototype.writeThenSend = function(a, b) {
        b || (b = {});
        Vi() || (this.g = !1);
        Bl.prototype.writeThenSend.call(this, a, b)
    };
    lm.prototype.sendThenWrite = function(a, b, c) {
        b || (b = {});
        Vi() || (this.g = !1);
        Bl.prototype.sendThenWrite.call(this, a, b, c)
    };
    lm.prototype.sendAndWrite = function(a, b) {
        b || (b = {});
        Vi() || (this.g = !1);
        Bl.prototype.sendAndWrite.call(this, a, b)
    };
    lm.prototype.awaitInitialization = function() {
        return this.i.promise
    };

    function om(a) {
        var b;
        y(function(c) {
            if (!a.u) throw b = qj("clearSWHealthLogsDb"), b;
            return c.return($l(a.u).catch(function(d) {
                a.handleError(d)
            }))
        })
    }

    function mm(a, b, c) {
        T("use_cfr_monitor") && pm(a, b);
        if (T("use_request_time_ms_header")) b.headers && (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(V())));
        else {
            var d;
            if (null == (d = b.postParams) ? 0 : d.requestTimeMs) b.postParams.requestTimeMs = Math.round(V())
        }
        if (c && 0 === Object.keys(b).length) {
            var e = void 0 === e ? "" : e;
            var f = void 0 === f ? !1 : f;
            if (a)
                if (e) Di(a, void 0, "POST", e);
                else if (R("USE_NET_AJAX_FOR_PING_TRANSPORT", !1)) Di(a, void 0, "GET", "", void 0, void 0, f);
            else {
                b: {
                    try {
                        var g = new Za({
                            url: a
                        });
                        if (g.i && g.h ||
                            g.j) {
                            var h = Ub(a.match(Tb)[5] || null);
                            var k = !(!h || !h.endsWith("/aclk") || "1" !== $b(a, "ri"));
                            break b
                        }
                    } catch (m) {}
                    k = !1
                }
                if (k) {
                    b: {
                        try {
                            if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, "")) {
                                var l = !0;
                                break b
                            }
                        } catch (m) {}
                        l = !1
                    }
                    c = l ? !0 : !1
                }
                else c = !1;c || cm(a)
            }
        } else Ai(a, b)
    }

    function pm(a, b) {
        var c = b.onError ? b.onError : function() {};
        b.onError = function(e, f) {
            dm().requestComplete(a, !1);
            c(e, f)
        };
        var d = b.onSuccess ? b.onSuccess : function() {};
        b.onSuccess = function(e, f) {
            dm().requestComplete(a, !0);
            d(e, f)
        }
    };
    var qm = z.ytNetworklessLoggingInitializationOptions || {
        isNwlInitialized: !1
    };
    B("ytNetworklessLoggingInitializationOptions", qm);

    function rm(a) {
        var b = this;
        this.config_ = null;
        a ? this.config_ = a : kl() && (this.config_ = ll());
        Pi(function() {
            zl(b)
        }, 5E3)
    }
    rm.prototype.isReady = function() {
        !this.config_ && kl() && (this.config_ = ll());
        return !!this.config_
    };

    function Al(a, b, c, d) {
        function e(w) {
            w = void 0 === w ? !1 : w;
            var A;
            if (d.retry && "www.youtube-nocookie.com" != h && (w || T("skip_ls_gel_retry") || "application/json" !== g.headers["Content-Type"] || (A = xl(b, c, l, k)), A)) {
                var G = g.onSuccess,
                    K = g.onFetchSuccess;
                g.onSuccess = function(M, O) {
                    yl(A);
                    G(M, O)
                };
                c.onFetchSuccess = function(M, O) {
                    yl(A);
                    K(M, O)
                }
            }
            try {
                w && d.retry && !d.bb.bypassNetworkless ? (g.method = "POST", d.bb.writeThenSend ? nm().writeThenSend(q, g) : nm().sendAndWrite(q, g)) : T("web_all_payloads_via_jspb") ? Ai(q, g) : (g.method = "POST", g.postParams || (g.postParams = {}), Ai(q, g))
            } catch (M) {
                if ("InvalidAccessError" == M.name) A && (yl(A), A = 0), Uh(Error("An extension is blocking network request."));
                else throw M;
            }
            A && Pi(function() {
                zl(a)
            }, 5E3)
        }!R("VISITOR_DATA") && "visitor_id" !== b && .01 > Math.random() && Uh(new Ui("Missing VISITOR_DATA when sending innertube request.", b, c, d));
        if (!a.isReady()) {
            var f = new Ui("innertube xhrclient not ready", b, c, d);
            Th(f);
            throw f;
        }
        var g = {
            headers: d.headers || {},
            method: "POST",
            postParams: c,
            postBody: d.postBody,
            postBodyFormat: d.postBodyFormat || "JSON",
            onTimeout: function() {
                d.onTimeout()
            },
            onFetchTimeout: d.onTimeout,
            onSuccess: function(w, A) {
                if (d.onSuccess) d.onSuccess(A)
            },
            onFetchSuccess: function(w) {
                if (d.onSuccess) d.onSuccess(w)
            },
            onError: function(w, A) {
                if (d.onError) d.onError(A)
            },
            onFetchError: function(w) {
                if (d.onError) d.onError(w)
            },
            timeout: d.timeout,
            withCredentials: !0
        };
        g.headers["Content-Type"] || (g.headers["Content-Type"] = "application/json");
        var h = "";
        (f = a.config_.yb) && (h = f);
        var k = a.config_.Ab || !1,
            l = tl(k, h, d);
        Object.assign(g.headers, l);
        (f = g.headers.Authorization) && !h && (g.headers["x-origin"] = window.location.origin);
        var m = "/youtubei/" + a.config_.wb + "/" + b,
            p = {
                alt: "json"
            },
            t = a.config_.zb && f;
        t = t && f.startsWith("Bearer");
        t || (p.key = a.config_.vb);
        var q = mi("" + h + m, p || {}, !0);
        C("ytNetworklessLoggingInitializationOptions") && qm.isNwlInitialized ?
            Xk().then(function(w) {
                e(w)
            }) : e(!1)
    };
    var sm = window.ytcsi && window.ytcsi.now ? window.ytcsi.now : window.performance && window.performance.timing && window.performance.now && window.performance.timing.navigationStart ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };

    function tm(a) {
        this.G = a;
        this.g = null;
        this.l = 0;
        this.B = null;
        this.s = 0;
        this.h = [];
        for (a = 0; 4 > a; a++) this.h.push(0);
        this.j = 0;
        this.Fa = ci(window, "mousemove", Va(this.Ga, this));
        this.Ha = ei(Va(this.Z, this), 25)
    }
    D(tm, ne);
    tm.prototype.Ga = function(a) {
        void 0 === a.g && Yh(a);
        var b = a.g;
        void 0 === a.h && Yh(a);
        this.g = new Dd(b, a.h)
    };
    tm.prototype.Z = function() {
        if (this.g) {
            var a = sm();
            if (0 != this.l) {
                var b = this.B,
                    c = this.g,
                    d = b.x - c.x;
                b = b.y - c.y;
                d = Math.sqrt(d * d + b * b) / (a - this.l);
                this.h[this.j] = .5 < Math.abs((d - this.s) / this.s) ? 1 : 0;
                for (c = b = 0; 4 > c; c++) b += this.h[c] || 0;
                3 <= b && this.G();
                this.s = d
            }
            this.l = a;
            this.B = this.g;
            this.j = (this.j + 1) % 4
        }
    };
    tm.prototype.ca = function() {
        window.clearInterval(this.Ha);
        ai(this.Fa)
    };
    var um = {};

    function vm() {
        var a = {},
            b = void 0 === a.Db ? !1 : a.Db;
        a = void 0 === a.sb ? !0 : a.sb;
        if (null == C("_lact", window)) {
            var c = parseInt(R("LACT"), 10);
            c = isFinite(c) ? Date.now() - Math.max(c, 0) : -1;
            B("_lact", c, window);
            B("_fact", c, window); - 1 == c && wm();
            ci(document, "keydown", wm);
            ci(document, "keyup", wm);
            ci(document, "mousedown", wm);
            ci(document, "mouseup", wm);
            b ? ci(window, "touchmove", function() {
                xm("touchmove", 200)
            }, {
                passive: !0
            }) : (ci(window, "resize", function() {
                xm("resize", 200)
            }), a && ci(window, "scroll", function() {
                xm("scroll", 200)
            }));
            new tm(function() {
                xm("mouse", 100)
            });
            ci(document, "touchstart", wm, {
                passive: !0
            });
            ci(document, "touchend", wm, {
                passive: !0
            })
        }
    }

    function xm(a, b) {
        um[a] || (um[a] = !0, Ue.P(function() {
            wm();
            um[a] = !1
        }, b))
    }

    function wm() {
        null == C("_lact", window) && vm();
        var a = Date.now();
        B("_lact", a, window); - 1 == C("_fact", window) && B("_fact", a, window);
        (a = C("ytglobal.ytUtilActivityCallback_")) && a()
    }

    function ym() {
        var a = C("_lact", window);
        return null == a ? -1 : Math.max(Date.now() - a, 0)
    };
    var zm = z.ytPubsubPubsubInstance || new P,
        Am = z.ytPubsubPubsubSubscribedKeys || {},
        Bm = z.ytPubsubPubsubTopicToKeys || {},
        Cm = z.ytPubsubPubsubIsSynchronous || {};
    P.prototype.subscribe = P.prototype.subscribe;
    P.prototype.unsubscribeByKey = P.prototype.na;
    P.prototype.publish = P.prototype.ea;
    P.prototype.clear = P.prototype.clear;
    B("ytPubsubPubsubInstance", zm);
    B("ytPubsubPubsubTopicToKeys", Bm);
    B("ytPubsubPubsubIsSynchronous", Cm);
    B("ytPubsubPubsubSubscribedKeys", Am);

    function Dm() {
        this.store = {};
        this.g = {}
    }
    Dm.prototype.storePayload = function(a, b) {
        a = Em(a);
        this.store[a] ? this.store[a].push(b) : (this.g = {}, this.store[a] = [b]);
        return a
    };
    Dm.prototype.extractMatchingEntries = function(a) {
        a = Fm(this, a);
        for (var b = [], c = 0; c < a.length; c++) this.store[a[c]] && (b.push.apply(b, ia(this.store[a[c]])), delete this.store[a[c]]);
        return b
    };
    Dm.prototype.getSequenceCount = function(a) {
        a = Fm(this, a);
        for (var b = 0, c = 0; c < a.length; c++) b += this.store[a[c]].length || 0;
        return b
    };

    function Fm(a, b) {
        var c = Em(b);
        if (a.g[c]) return a.g[c];
        var d = Object.keys(a.store) || [];
        if (1 >= d.length && Em(b) === d[0]) return d;
        for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].split("/");
            if (Gm(b.auth, g[0])) {
                var h = b.isJspb;
                Gm(void 0 === h ? "undefined" : h ? "true" : "false", g[1]) && Gm(b.cttAuthInfo, g[2]) && e.push(d[f])
            }
        }
        return a.g[c] = e
    }

    function Gm(a, b) {
        return void 0 === a || "undefined" === a ? !0 : a === b
    }
    Dm.prototype.getSequenceCount = Dm.prototype.getSequenceCount;
    Dm.prototype.extractMatchingEntries = Dm.prototype.extractMatchingEntries;
    Dm.prototype.storePayload = Dm.prototype.storePayload;

    function Em(a) {
        return [void 0 === a.auth ? "undefined" : a.auth, void 0 === a.isJspb ? "undefined" : a.isJspb, void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo].join("/")
    };
    var Hm = pi("initial_gel_batch_timeout", 2E3),
        Im = Math.pow(2, 16) - 1,
        Jm = void 0;

    function Km() {
        this.i = this.g = this.h = 0
    }
    var Lm = new Km,
        Mm = new Km,
        Nm, Om = !0,
        Pm = z.ytLoggingTransportGELQueue_ || new Map;
    B("ytLoggingTransportGELQueue_", Pm);
    var Qm = z.ytLoggingTransportGELProtoQueue_ || new Map;
    B("ytLoggingTransportGELProtoQueue_", Qm);
    var Rm = z.ytLoggingTransportTokensToCttTargetIds_ || {};
    B("ytLoggingTransportTokensToCttTargetIds_", Rm);
    var Sm = z.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
    B("ytLoggingTransportTokensToJspbCttTargetIds_", Sm);
    var Tm = {};

    function Um() {
        var a = C("yt.logging.ims");
        a || (a = new Dm, B("yt.logging.ims", a));
        return a
    }

    function Vm(a, b) {
        T("web_all_payloads_via_jspb") && Uh(new Ui("transport.log called for JSON in JSPB only experiment"));
        if ("log_event" === a.endpoint) {
            Wm(a);
            var c = Xm(a);
            if (T("use_new_in_memory_storage")) {
                Tm[c] = !0;
                var d = {
                    cttAuthInfo: c,
                    isJspb: !1
                };
                Um().storePayload(d, a.payload);
                Ym(b, [], c, !1, d)
            } else d = Pm.get(c) || [], Pm.set(c, d), d.push(a.payload), Ym(b, d, c)
        }
    }

    function Zm(a, b) {
        if ("log_event" === a.endpoint) {
            Wm(void 0, a);
            var c = Xm(a, !0);
            if (T("use_new_in_memory_storage")) {
                Tm[c] = !0;
                var d = {
                    cttAuthInfo: c,
                    isJspb: !0
                };
                Um().storePayload(d, a.payload.toJSON());
                Ym(b, [], c, !0, d)
            } else d = Qm.get(c) || [], Qm.set(c, d), a = a.payload.toJSON(), d.push(a), Ym(b, d, c, !0)
        }
    }

    function Ym(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        a && (Jm = new a);
        a = pi("tvhtml5_logging_max_batch") || pi("web_logging_max_batch") || 100;
        var f = V(),
            g = d ? Mm.i : Lm.i;
        b = b.length;
        e && (b = Um().getSequenceCount(e));
        b >= a ? T("background_thread_flush_logs_due_to_batch_limit") ? Nm || (Nm = $m(function() {
            an({
                writeThenSend: !0
            }, T("flush_only_full_queue") ? c : void 0, d);
            Nm = void 0
        }, 0)) : an({
            writeThenSend: !0
        }, T("flush_only_full_queue") ? c : void 0, d) : 10 <= f - g && (bn(d), d ? Mm.i = f : Lm.i = f)
    }

    function cn(a, b) {
        T("web_all_payloads_via_jspb") && Uh(new Ui("transport.logIsolatedGelPayload called in JSPB only experiment"));
        if ("log_event" === a.endpoint) {
            Wm(a);
            var c = Xm(a),
                d = new Map;
            d.set(c, [a.payload]);
            b && (Jm = new b);
            return new rg(function(e, f) {
                Jm && Jm.isReady() ? dn(d, Jm, e, f, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function en(a, b) {
        if ("log_event" === a.endpoint) {
            Wm(void 0, a);
            var c = Xm(a, !0),
                d = new Map;
            d.set(c, [a.payload.toJSON()]);
            b && (Jm = new b);
            return new rg(function(e) {
                Jm && Jm.isReady() ? fn(d, Jm, e, {
                    bypassNetworkless: !0
                }, !0) : e()
            })
        }
    }

    function Xm(a, b) {
        var c = "";
        if (a.ga) c = "visitorOnlyApprovedKey";
        else if (a.cttAuthInfo) {
            if (void 0 === b ? 0 : b) {
                b = a.cttAuthInfo.token;
                c = a.cttAuthInfo;
                var d = new Fh;
                c.videoId ? kd(d, 1, Gh, c.videoId) : c.playlistId && kd(d, 2, Gh, c.playlistId);
                Sm[b] = d
            } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), Rm[a.cttAuthInfo.token] = c;
            c = a.cttAuthInfo.token
        }
        return c
    }

    function an(a, b, c) {
        a = void 0 === a ? {} : a;
        c = void 0 === c ? !1 : c;
        !c && T("web_all_payloads_via_jspb") && Uh(new Ui("transport.flushLogs called for JSON in JSPB only experiment"));
        new rg(function(d, e) {
            c ? (gn(Mm.h), gn(Mm.g), Mm.g = 0) : (gn(Lm.h), gn(Lm.g), Lm.g = 0);
            if (Jm && Jm.isReady())
                if (T("use_new_in_memory_storage")) {
                    var f = a,
                        g = c,
                        h = Jm;
                    f = void 0 === f ? {} : f;
                    g = void 0 === g ? !1 : g;
                    var k = new Map,
                        l = new Map;
                    if (void 0 !== b) g ? (e = Um().extractMatchingEntries({
                        isJspb: g,
                        cttAuthInfo: b
                    }), k.set(b, e), fn(k, h, d, f)) : (k = Um().extractMatchingEntries({
                        isJspb: g,
                        cttAuthInfo: b
                    }), l.set(b, k), dn(l, h, d, e, f));
                    else if (g) {
                        e = u(Object.keys(Tm));
                        for (g = e.next(); !g.done; g = e.next()) l = g.value, g = Um().extractMatchingEntries({
                            isJspb: !0,
                            cttAuthInfo: l
                        }), 0 < g.length && k.set(l, g), delete Tm[l];
                        fn(k, h, d, f)
                    } else {
                        k = u(Object.keys(Tm));
                        for (g = k.next(); !g.done; g = k.next()) {
                            g = g.value;
                            var m = Um().extractMatchingEntries({
                                isJspb: !1,
                                cttAuthInfo: g
                            });
                            0 < m.length && l.set(g, m);
                            delete Tm[g]
                        }
                        dn(l, h, d, e, f)
                    }
                } else f = a, k = c, h = Jm, f = void 0 === f ? {} : f, k = void 0 === k ? !1 : k, void 0 !== b ? k ? (e = new Map, k = Qm.get(b) || [], e.set(b,
                    k), fn(e, h, d, f), Qm.delete(b)) : (k = new Map, l = Pm.get(b) || [], k.set(b, l), dn(k, h, d, e, f), Pm.delete(b)) : k ? (fn(Qm, h, d, f), Qm.clear()) : (dn(Pm, h, d, e, f), Pm.clear());
            else bn(c), d()
        })
    }

    function bn(a) {
        a = void 0 === a ? !1 : a;
        if (T("web_gel_timeout_cap") && (!a && !Lm.g || a && !Mm.g)) {
            var b = $m(function() {
                an({
                    writeThenSend: !0
                }, void 0, a)
            }, 6E4);
            a ? Mm.g = b : Lm.g = b
        }
        gn(a ? Mm.h : Lm.h);
        b = R("LOGGING_BATCH_TIMEOUT", pi("web_gel_debounce_ms", 1E4));
        T("shorten_initial_gel_batch_timeout") && Om && (b = Hm);
        b = $m(function() {
            an({
                writeThenSend: !0
            }, void 0, a)
        }, b);
        a ? Mm.h = b : Lm.h = b
    }

    function dn(a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        var g = Math.round(V()),
            h = a.size,
            k = {};
        a = u(a);
        for (var l = a.next(); !l.done; k = {
                pa: k.pa,
                W: k.W,
                fa: k.fa,
                ra: k.ra,
                qa: k.qa
            }, l = a.next()) {
            var m = u(l.value);
            l = m.next().value;
            m = m.next().value;
            k.W = ob({
                context: ml(b.config_ || ll())
            });
            if (!Oa(m) && !T("throw_err_when_logevent_malformed_killswitch")) {
                d();
                break
            }
            k.W.events = m;
            (m = Rm[l]) && hn(k.W, l, m);
            delete Rm[l];
            k.fa = "visitorOnlyApprovedKey" === l;
            jn(k.W, g, k.fa);
            kn(e);
            k.ra = function() {
                h--;
                h || c()
            };
            k.pa = 0;
            k.qa = function(p) {
                return function() {
                    p.pa++;
                    if (e.bypassNetworkless && 1 === p.pa) try {
                        Al(b, "log_event", p.W, ln({
                            writeThenSend: !0
                        }, p.fa, p.ra, p.qa, f)), Om = !1
                    } catch (t) {
                        Th(t), d()
                    }
                    h--;
                    h || c()
                }
            }(k);
            try {
                Al(b, "log_event", k.W, ln(e, k.fa, k.ra, k.qa, f)), Om = !1
            } catch (p) {
                Th(p), d()
            }
        }
    }

    function fn(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        var f = Math.round(V()),
            g = a.size,
            h = new Map([].concat(ia(a)));
        h = u(h);
        for (var k = h.next(); !k.done; k = h.next()) {
            var l = u(k.value).next().value,
                m = a.get(l);
            k = new Hh;
            var p = sl(b.config_ || ll());
            L(k, lh, 1, p);
            m = m ? mn(m) : [];
            m = u(m);
            for (p = m.next(); !p.done; p = m.next()) rd(k, 3, Ch, p.value);
            (m = Sm[l]) && nn(k, l, m);
            delete Sm[l];
            l = "visitorOnlyApprovedKey" === l;
            on(k, f, l);
            kn(d);
            k = zd(k);
            l = ln(d, l, function() {
                g--;
                g || c()
            }, function() {
                g--;
                g || c()
            }, e);
            l.headers["Content-Type"] = "application/json+protobuf";
            l.postBodyFormat = "JSPB";
            l.postBody = k;
            Al(b, "log_event", "", l);
            Om = !1
        }
    }

    function kn(a) {
        T("always_send_and_write") && (a.writeThenSend = !1)
    }

    function ln(a, b, c, d, e) {
        a = {
            retry: !0,
            onSuccess: c,
            onError: d,
            bb: a,
            ga: b,
            cc: !!e,
            headers: {},
            postBodyFormat: "",
            postBody: ""
        };
        pn() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(V())));
        return a
    }

    function jn(a, b, c) {
        pn() || (a.requestTimeMs = String(b));
        T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
        !c && (b = R("EVENT_ID")) && (c = qn(), a.serializedClientEventId = {
            serializedEventId: b,
            clientCounter: String(c)
        })
    }

    function on(a, b, c) {
        pn() || J(a, 2, b);
        if (!c && (b = R("EVENT_ID"))) {
            c = qn();
            var d = new Eh;
            J(d, 1, b);
            J(d, 2, c);
            L(a, Eh, 5, d)
        }
    }

    function qn() {
        var a = R("BATCH_CLIENT_COUNTER") || 0;
        a || (a = Math.floor(Math.random() * Im / 2));
        a++;
        a > Im && (a = 1);
        Nh("BATCH_CLIENT_COUNTER", a);
        return a
    }

    function hn(a, b, c) {
        if (c.videoId) var d = "VIDEO";
        else if (c.playlistId) d = "PLAYLIST";
        else return;
        a.credentialTransferTokenTargetId = c;
        a.context = a.context || {};
        a.context.user = a.context.user || {};
        a.context.user.credentialTransferTokens = [{
            token: b,
            scope: d
        }]
    }

    function nn(a, b, c) {
        if (sd(c, 1 === ld(c, Gh) ? 1 : -1)) var d = 1;
        else if (c.getPlaylistId()) d = 2;
        else return;
        L(a, Fh, 4, c);
        a = md(a, lh, 1) || new lh;
        c = md(a, jh, 3) || new jh;
        var e = new ih;
        J(e, 2, b);
        J(e, 1, d);
        rd(c, 12, ih, e);
        L(a, jh, 3, c)
    }

    function mn(a) {
        for (var b = [], c = 0; c < a.length; c++) try {
            b.push(new Ch(a[c]))
        } catch (d) {
            Th(new Ui("Transport failed to deserialize " + String(a[c])))
        }
        return b
    }

    function Wm(a, b) {
        if (C("yt.logging.transport.enableScrapingForTest")) {
            var c = C("yt.logging.transport.scrapedPayloadsForTesting"),
                d = C("yt.logging.transport.payloadToScrape", "");
            b && (b = C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)()) && c.push(b);
            a && a.payload[d] && c.push((null == a ? void 0 : a.payload)[d]);
            B("yt.logging.transport.scrapedPayloadsForTesting", c)
        }
    }

    function pn() {
        return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header")
    }

    function $m(a, b) {
        return T("transport_use_scheduler") ? Pi(a, b) : di(a, b)
    }

    function gn(a) {
        T("transport_use_scheduler") ? Ue.aa(a) : window.clearTimeout(a)
    };
    var rn = z.ytLoggingGelSequenceIdObj_ || {};
    B("ytLoggingGelSequenceIdObj_", rn);

    function sn(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = Math.round(d.timestamp || V());
        e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
        e[a] = b;
        T("enable_unknown_lact_fix_on_html5") && vm();
        a = ym();
        e.context = {
            lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
        };
        T("log_sequence_info_on_gel_web") && d.la && (a = e.context, b = d.la, b = {
            index: tn(b),
            groupKey: b
        }, a.sequence = b, d.tb && delete rn[d.la]);
        (d.Fb ? cn : Vm)({
            endpoint: "log_event",
            payload: e,
            cttAuthInfo: d.cttAuthInfo,
            ga: d.ga
        }, c)
    }

    function un(a) {
        an(void 0, void 0, void 0 === a ? !1 : a)
    }

    function tn(a) {
        rn[a] = a in rn ? rn[a] + 1 : 0;
        return rn[a]
    };
    var vn = [];
    var wn = z.ytLoggingGelSequenceIdObj_ || {};
    B("ytLoggingGelSequenceIdObj_", wn);

    function xn(a) {
        var b = void 0;
        b = void 0 === b ? {} : b;
        var c = !1;
        R("ytLoggingEventsDefaultDisabled", !1) && (c = !0);
        c = c ? null : rm;
        b = void 0 === b ? {} : b;
        var d = Math.round(b.timestamp || V());
        J(a, 1, d < Number.MAX_SAFE_INTEGER ? d : 0);
        var e = ym();
        d = new Bh;
        J(d, 1, b.timestamp || !isFinite(e) ? -1 : e);
        if (T("log_sequence_info_on_gel_web") && b.la) {
            e = b.la;
            var f = tn(e),
                g = new Ah;
            J(g, 2, f);
            J(g, 1, e);
            L(d, Ah, 3, g);
            b.tb && delete wn[b.la]
        }
        L(a, Bh, 33, d);
        (b.Fb ? en : Zm)({
            endpoint: "log_event",
            payload: a,
            cttAuthInfo: b.cttAuthInfo,
            ga: b.ga
        }, c)
    };

    function yn(a, b) {
        var c = void 0 === c ? {} : c;
        if (T("migrate_events_to_ts")) {
            c = void 0 === c ? {} : c;
            var d = rm;
            R("ytLoggingEventsDefaultDisabled", !1) && rm === rm && (d = null);
            T("web_all_payloads_via_jspb") ? vn.push({
                ic: a,
                payload: b,
                options: c
            }) : sn(a, b, d, c)
        } else d = rm, R("ytLoggingEventsDefaultDisabled", !1) && rm == rm && (d = null), sn(a, b, d, c)
    };
    var zn = [{
        La: function(a) {
            return "Cannot read property '" + a.key + "'"
        },
        Ba: {
            Error: [{
                regexp: /(Permission denied) to access property "([^']+)"/,
                groups: ["reason", "key"]
            }],
            TypeError: [{
                regexp: /Cannot read property '([^']+)' of (null|undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
                groups: ["value", "key"]
            }, {
                regexp: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
                groups: ["value", "key"]
            }, {
                regexp: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
                groups: ["key"]
            }, {
                regexp: /Unable to get property '([^']+)' of (undefined or null) reference/,
                groups: ["key", "value"]
            }, {
                regexp: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
                groups: ["value", "base", "key"]
            }]
        }
    }, {
        La: function(a) {
            return "Cannot call '" + a.key + "'"
        },
        Ba: {
            TypeError: [{
                regexp: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
                groups: ["base", "key"]
            }, {
                regexp: /([^ ]+) called on (null or undefined)/,
                groups: ["key", "value"]
            }, {
                regexp: /Object (.*) has no method '([^ ]+)'/,
                groups: ["base", "key"]
            }, {
                regexp: /Object doesn't support property or method '([^ ]+)'/,
                groups: ["key"]
            }, {
                regexp: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
                groups: ["key"]
            }, {
                regexp: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
                groups: ["key"]
            }]
        }
    }, {
        La: function(a) {
            return a.key + " is not defined"
        },
        Ba: {
            ReferenceError: [{
                regexp: /(.*) is not defined/,
                groups: ["key"]
            }, {
                regexp: /Can't find variable: (.*)/,
                groups: ["key"]
            }]
        }
    }];
    var Bn = {
        U: [],
        S: [{
            ob: An,
            weight: 500
        }]
    };

    function An(a) {
        if ("JavaException" === a.name) return !0;
        a = a.stack;
        return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
    };

    function Cn() {
        this.S = [];
        this.U = []
    }
    var Dn;

    function En() {
        if (!Dn) {
            var a = Dn = new Cn;
            a.U.length = 0;
            a.S.length = 0;
            Bn.U && a.U.push.apply(a.U, Bn.U);
            Bn.S && a.S.push.apply(a.S, Bn.S)
        }
        return Dn
    };
    var Fn = new P;

    function Gn(a) {
        function b() {
            return a.charCodeAt(d++)
        }
        var c = a.length,
            d = 0;
        do {
            var e = Hn(b);
            if (Infinity === e) break;
            var f = e >> 3;
            switch (e & 7) {
                case 0:
                    e = Hn(b);
                    if (2 === f) return e;
                    break;
                case 1:
                    if (2 === f) return;
                    d += 8;
                    break;
                case 2:
                    e = Hn(b);
                    if (2 === f) return a.substr(d, e);
                    d += e;
                    break;
                case 5:
                    if (2 === f) return;
                    d += 4;
                    break;
                default:
                    return
            }
        } while (d < c)
    }

    function Hn(a) {
        var b = a(),
            c = b & 127;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 7;
        if (128 > b) return c;
        b = a();
        c |= (b & 127) << 14;
        if (128 > b) return c;
        b = a();
        return 128 > b ? c | (b & 127) << 21 : Infinity
    };

    function In(a, b, c, d) {
        if (a)
            if (Array.isArray(a)) {
                var e = d;
                for (d = 0; d < a.length && !(a[d] && (e += Jn(d, a[d], b, c), 500 < e)); d++);
                d = e
            } else if ("object" === typeof a)
            for (e in a) {
                if (a[e]) {
                    var f = a[e];
                    var g = b;
                    var h = c;
                    g = "string" !== typeof f || "clickTrackingParams" !== e && "trackingParams" !== e ? 0 : (f = Gn(atob(f.replace(/-/g, "+").replace(/_/g, "/")))) ? Jn(e + ".ve", f, g, h) : 0;
                    d += g;
                    d += Jn(e, a[e], b, c);
                    if (500 < d) break
                }
            } else c[b] = Kn(a), d += c[b].length;
        else c[b] = Kn(a), d += c[b].length;
        return d
    }

    function Jn(a, b, c, d) {
        c += "." + a;
        a = Kn(b);
        d[c] = a;
        return c.length + a.length
    }

    function Kn(a) {
        try {
            return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
        } catch (b) {
            return "unable to serialize " + typeof a + " (" + b.message + ")"
        }
    };
    var Ln = new Set,
        Mn = 0,
        Nn = 0,
        On = 0,
        Pn = [],
        Qn = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

    function Rn() {
        for (var a = u(Qn), b = a.next(); !b.done; b = a.next()) {
            var c = Lb();
            if (c && 0 <= c.toLowerCase().indexOf(b.value.toLowerCase())) return !0
        }
        return !1
    };

    function Sn() {
        var a;
        return y(function(b) {
            return (a = of ()) ? b.return(a.then(function(c) {
                c = zd(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255, g >>= 8);
                    d[e++] = g
                }
                return xc(d, 3)
            })) : b.return(Promise.resolve(null))
        })
    };
    var Tn = {};

    function Un(a) {
        return Tn[a] || (Tn[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        }))
    };
    var Vn = {},
        Wn = [],
        Ig = new P,
        Xn = {};

    function Yn() {
        for (var a = u(Wn), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    }

    function Zn(a, b) {
        var c;
        "yt:" === a.tagName.toLowerCase().substr(0, 3) ? c = a.getAttribute(b) : c = a ? a.dataset ? a.dataset[Un(b)] : a.getAttribute("data-" + b) : null;
        return c
    }

    function $n(a) {
        Ig.ea.apply(Ig, arguments)
    };

    function ao(a) {
        this.g = a || {};
        a = [this.g, window.YTConfig || {}];
        for (var b = 0; b < a.length; b++) a[b].host && (a[b].host = a[b].host.toString().replace("http://", "https://"))
    }

    function bo(a, b) {
        a = [a.g, window.YTConfig || {}];
        for (var c = 0; c < a.length; c++) {
            var d = a[c][b];
            if (void 0 !== d) return d
        }
        return null
    }

    function co(a, b, c) {
        eo || (eo = {}, ci(window, "message", function(d) {
            a: {
                if (d.origin === bo(a, "host")) {
                    try {
                        var e = JSON.parse(d.data)
                    } catch (f) {
                        e = void 0;
                        break a
                    }
                    if (d = eo[e.id]) d.s = !0, d.s && (E(d.l, d.sendMessage, d), d.l.length = 0), d.Qa(e)
                }
                e = void 0
            }
            return e
        }));
        eo[c] = b
    }
    var eo = null;
    var fo = window;

    function go(a, b, c) {
        this.m = this.g = this.h = null;
        this.i = 0;
        this.s = !1;
        this.l = [];
        this.j = null;
        this.G = {};
        if (!a) throw Error("YouTube player element ID required.");
        this.id = Qa(this);
        this.B = c;
        c = document;
        if (a = "string" === typeof a ? c.getElementById(a) : a)
            if (c = "iframe" === a.tagName.toLowerCase(), b.host || (b.host = c ? Wb(a.src) : "https://www.youtube.com"), this.h = new ao(b), c || (b = ho(this, a), this.m = a, (c = a.parentNode) && c.replaceChild(b, a), a = b), this.g = a, this.g.id || (this.g.id = "widget" + Qa(this.g)), Vn[this.g.id] = this, window.postMessage) {
                this.j =
                    new P;
                io(this);
                b = bo(this.h, "events");
                for (var d in b) b.hasOwnProperty(d) && this.addEventListener(d, b[d]);
                for (var e in Xn) Xn.hasOwnProperty(e) && jo(this, e)
            }
    }
    n = go.prototype;
    n.setSize = function(a, b) {
        this.g.width = a.toString();
        this.g.height = b.toString();
        return this
    };
    n.getIframe = function() {
        return this.g
    };
    n.Qa = function(a) {
        ko(this, a.event, a)
    };
    n.addEventListener = function(a, b) {
        var c = b;
        "string" === typeof b && (c = function() {
            window[b].apply(window, arguments)
        });
        if (!c) return this;
        this.j.subscribe(a, c);
        lo(this, a);
        return this
    };

    function jo(a, b) {
        b = b.split(".");
        if (2 === b.length) {
            var c = b[1];
            a.B === b[0] && lo(a, c)
        }
    }
    n.destroy = function() {
        this.g && this.g.id && (Vn[this.g.id] = null);
        var a = this.j;
        a && "function" == typeof a.dispose && a.dispose();
        if (this.m) {
            a = this.g;
            var b = a.parentNode;
            b && b.replaceChild(this.m, a)
        } else(a = this.g) && a.parentNode && a.parentNode.removeChild(a);
        eo && (eo[this.id] = null);
        this.h = null;
        a = this.g;
        for (var c in mb) mb[c][0] == a && ai(c);
        this.m = this.g = null
    };
    n.Ta = function() {
        return {}
    };

    function mo(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {
            event: "command",
            func: b,
            args: c
        };
        a.s ? a.sendMessage(b) : a.l.push(b)
    }

    function ko(a, b, c) {
        a.j.i || (c = {
            target: a,
            data: c
        }, a.j.ea(b, c), $n(a.B + "." + b, c))
    }

    function ho(a, b) {
        var c = document.createElement("iframe");
        b = b.attributes;
        for (var d = 0, e = b.length; d < e; d++) {
            var f = b[d].value;
            null != f && "" !== f && "null" !== f && c.setAttribute(b[d].name, f)
        }
        c.setAttribute("frameBorder", "0");
        c.setAttribute("allowfullscreen", "1");
        c.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        c.setAttribute("title", "YouTube " + bo(a.h, "title"));
        (b = bo(a.h, "width")) && c.setAttribute("width", b.toString());
        (b = bo(a.h, "height")) && c.setAttribute("height",
            b.toString());
        var g = a.Ta();
        g.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (g.origin = window.location.protocol + "//" + window.location.host);
        g.widgetid = a.id;
        window.location.href && E(["debugjs", "debugcss"], function(k) {
            var l = $b(window.location.href, k);
            null !== l && (g[k] = l)
        });
        var h = "" + bo(a.h, "host") + ("/embed/" + bo(a.h, "videoId")) + "?" + Yb(g);
        fo.yt_embedsEnableUaChProbe ? Sn().then(function(k) {
            var l = new URL(h),
                m = Number(l.searchParams.get("reloads"));
            isNaN(m) && (m = 0);
            l.searchParams.set("reloads", (m + 1).toString());
            k && l.searchParams.set("uach", k);
            l.searchParams.set("uats", Math.floor(window.performance.timeOrigin).toString());
            k = Zd(l.href).toString();
            Pd(c, $d(k));
            return k
        }) : fo.yt_embedsEnableIframeSrcWithIntent ? Pd(c, $d(h)) : c.src = h;
        return c
    }
    n.cb = function() {
        this.g && this.g.contentWindow ? this.sendMessage({
            event: "listening"
        }) : window.clearInterval(this.i)
    };

    function io(a) {
        co(a.h, a, a.id);
        a.i = ei(a.cb.bind(a), 250);
        ci(a.g, "load", function() {
            window.clearInterval(a.i);
            a.i = ei(a.cb.bind(a), 250)
        })
    }

    function lo(a, b) {
        a.G[b] || (a.G[b] = !0, mo(a, "addEventListener", [b]))
    }
    n.sendMessage = function(a) {
        a.id = this.id;
        a.channel = "widget";
        var b = JSON.stringify(a),
            c = [Wb(this.g.src || "").replace("http:", "https:")];
        if (this.g.contentWindow)
            for (var d = 0; d < c.length; d++) try {
                this.g.contentWindow.postMessage(b, c[d])
            } catch (Nb) {
                if (Nb.name && "SyntaxError" === Nb.name) {
                    if (!(Nb.message && 0 < Nb.message.indexOf("target origin ''"))) {
                        var e = void 0,
                            f = Nb;
                        e = void 0 === e ? {} : e;
                        e.name = R("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
                        e.version = R("INNERTUBE_CONTEXT_CLIENT_VERSION");
                        var g = e || {},
                            h = "WARNING";
                        h = void 0 === h ? "ERROR" :
                            h;
                        if (f) {
                            f.hasOwnProperty("level") && f.level && (h = f.level);
                            if (T("console_log_js_exceptions")) {
                                var k = f,
                                    l = [];
                                l.push("Name: " + k.name);
                                l.push("Message: " + k.message);
                                k.hasOwnProperty("params") && l.push("Error Params: " + JSON.stringify(k.params));
                                k.hasOwnProperty("args") && l.push("Error args: " + JSON.stringify(k.args));
                                l.push("File name: " + k.fileName);
                                l.push("Stacktrace: " + k.stack);
                                window.console.log(l.join("\n"), k)
                            }
                            if (!(5 <= Mn)) {
                                var m = void 0,
                                    p = void 0,
                                    t = f,
                                    q = g,
                                    w = Hd(t),
                                    A = w.message || "Unknown Error",
                                    G = w.name || "UnknownError",
                                    K = w.stack || t.h || "Not available";
                                if (K.startsWith(G + ": " + A)) {
                                    var M = K.split("\n");
                                    M.shift();
                                    K = M.join("\n")
                                }
                                var O = w.lineNumber || "Not available",
                                    kb = w.fileName || "Not available",
                                    pc = K,
                                    ya = 0;
                                if (t.hasOwnProperty("args") && t.args && t.args.length)
                                    for (var sa = 0; sa < t.args.length && !(ya = In(t.args[sa], "params." + sa, q, ya), 500 <= ya); sa++);
                                else if (t.hasOwnProperty("params") && t.params) {
                                    var Y = t.params;
                                    if ("object" === typeof t.params)
                                        for (p in Y) {
                                            if (Y[p]) {
                                                var da = "params." + p,
                                                    ea = Kn(Y[p]);
                                                q[da] = ea;
                                                ya += da.length + ea.length;
                                                if (500 < ya) break
                                            }
                                        } else q.params =
                                            Kn(Y)
                                }
                                if (Pn.length)
                                    for (var X = 0; X < Pn.length && !(ya = In(Pn[X], "params.context." + X, q, ya), 500 <= ya); X++);
                                navigator.vendor && !q.hasOwnProperty("vendor") && (q["device.vendor"] = navigator.vendor);
                                var S = {
                                        message: A,
                                        name: G,
                                        lineNumber: O,
                                        fileName: kb,
                                        stack: pc,
                                        params: q,
                                        sampleWeight: 1
                                    },
                                    Gj = Number(t.columnNumber);
                                isNaN(Gj) || (S.lineNumber = S.lineNumber + ":" + Gj);
                                if ("IGNORED" === t.level) m = 0;
                                else a: {
                                    for (var Hj = En(), Ij = u(Hj.U), Lf = Ij.next(); !Lf.done; Lf = Ij.next()) {
                                        var Jj = Lf.value;
                                        if (S.message && S.message.match(Jj.fc)) {
                                            m = Jj.weight;
                                            break a
                                        }
                                    }
                                    for (var Kj = u(Hj.S), Mf = Kj.next(); !Mf.done; Mf = Kj.next()) {
                                        var Lj = Mf.value;
                                        if (Lj.ob(S)) {
                                            m = Lj.weight;
                                            break a
                                        }
                                    }
                                    m = 1
                                }
                                S.sampleWeight = m;
                                for (var Mj = u(zn), Nf = Mj.next(); !Nf.done; Nf = Mj.next()) {
                                    var Of = Nf.value;
                                    if (Of.Ba[S.name])
                                        for (var Nj = u(Of.Ba[S.name]), Pf = Nj.next(); !Pf.done; Pf = Nj.next()) {
                                            var Oj = Pf.value,
                                                Nd = S.message.match(Oj.regexp);
                                            if (Nd) {
                                                S.params["params.error.original"] = Nd[0];
                                                for (var Qf = Oj.groups, Pj = {}, Ob = 0; Ob < Qf.length; Ob++) Pj[Qf[Ob]] = Nd[Ob + 1], S.params["params.error." + Qf[Ob]] = Nd[Ob + 1];
                                                S.message = Of.La(Pj);
                                                break
                                            }
                                        }
                                }
                                S.params || (S.params = {});
                                var Qj = En();
                                S.params["params.errorServiceSignature"] = "msg=" + Qj.U.length + "&cb=" + Qj.S.length;
                                S.params["params.serviceWorker"] = "false";
                                z.document && z.document.querySelectorAll && (S.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
                                yb("sample").constructor !== xb && (S.params["params.fconst"] = "true");
                                var va = S;
                                window.yterr && "function" === typeof window.yterr && window.yterr(va);
                                if (0 !== va.sampleWeight && !Ln.has(va.message)) {
                                    if ("ERROR" === h) {
                                        Fn.ea("handleError",
                                            va);
                                        if (T("record_app_crashed_web") && 0 === On && 1 === va.sampleWeight)
                                            if (On++, T("errors_via_jspb")) {
                                                var Rf = new zh;
                                                J(Rf, 1, 1);
                                                if (!T("report_client_error_with_app_crash_ks")) {
                                                    var Rj = new uh;
                                                    J(Rj, 1, va.message);
                                                    var Sj = new vh;
                                                    L(Sj, uh, 3, Rj);
                                                    var Tj = new wh;
                                                    L(Tj, vh, 5, Sj);
                                                    var Uj = new xh;
                                                    L(Uj, wh, 9, Tj);
                                                    L(Rf, xh, 4, Uj)
                                                }
                                                var so = Rf,
                                                    Vj = new Ch;
                                                pd(Vj, zh, 20, Dh, so);
                                                xn(Vj)
                                            } else {
                                                var Wj = {
                                                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                                                };
                                                T("report_client_error_with_app_crash_ks") || (Wj.systemHealth = {
                                                    crashData: {
                                                        clientError: {
                                                            logMessage: {
                                                                message: va.message
                                                            }
                                                        }
                                                    }
                                                });
                                                yn("appCrashed", Wj)
                                            }
                                        Nn++
                                    } else "WARNING" === h && Fn.ea("handleWarning", va);
                                    if (T("kevlar_gel_error_routing")) a: {
                                        var Sf = void 0,
                                            Tf = void 0,
                                            Ic = h,
                                            Q = va;
                                        if (T("errors_via_jspb")) {
                                            if (Rn()) Tf = void 0;
                                            else {
                                                var Pb = new rh;
                                                J(Pb, 1, Q.stack);
                                                Q.fileName && J(Pb, 4, Q.fileName);
                                                var Ja = Q.lineNumber && Q.lineNumber.split ? Q.lineNumber.split(":") : [];
                                                0 !== Ja.length && (1 !== Ja.length || isNaN(Number(Ja[0])) ? 2 !== Ja.length || isNaN(Number(Ja[0])) || isNaN(Number(Ja[1])) || (J(Pb, 2, Number(Ja[0])), J(Pb, 3, Number(Ja[1]))) : J(Pb, 2, Number(Ja[0])));
                                                var rb =
                                                    new uh;
                                                J(rb, 1, Q.message);
                                                J(rb, 3, Q.name);
                                                J(rb, 6, Q.sampleWeight);
                                                "ERROR" === Ic ? J(rb, 2, 2) : "WARNING" === Ic ? J(rb, 2, 1) : J(rb, 2, 0);
                                                var Uf = new sh;
                                                J(Uf, 1, !0);
                                                pd(Uf, rh, 3, th, Pb);
                                                var sb = new oh;
                                                J(sb, 3, window.location.href);
                                                for (var Xj = R("FEXP_EXPERIMENTS", []), Vf = 0; Vf < Xj.length; Vf++) {
                                                    var Yj = sb,
                                                        to = Xj[Vf];
                                                    $c(Yj);
                                                    jd(Yj, 5, 2, !1).push(to)
                                                }
                                                var Wf = Oh();
                                                if (!Ph() && Wf)
                                                    for (var Zj = u(Object.keys(Wf)), tb = Zj.next(); !tb.done; tb = Zj.next()) {
                                                        var ak = tb.value,
                                                            Xf = new qh;
                                                        J(Xf, 1, ak);
                                                        J(Xf, 2, String(Wf[ak]));
                                                        rd(sb, 4, qh, Xf)
                                                    }
                                                var Yf = Q.params;
                                                if (Yf) {
                                                    var bk =
                                                        u(Object.keys(Yf));
                                                    for (tb = bk.next(); !tb.done; tb = bk.next()) {
                                                        var ck = tb.value,
                                                            Zf = new qh;
                                                        J(Zf, 1, "client." + ck);
                                                        J(Zf, 2, String(Yf[ck]));
                                                        rd(sb, 4, qh, Zf)
                                                    }
                                                }
                                                var dk = R("SERVER_NAME"),
                                                    ek = R("SERVER_VERSION");
                                                if (dk && ek) {
                                                    var $f = new qh;
                                                    J($f, 1, "server.name");
                                                    J($f, 2, dk);
                                                    rd(sb, 4, qh, $f);
                                                    var ag = new qh;
                                                    J(ag, 1, "server.version");
                                                    J(ag, 2, ek);
                                                    rd(sb, 4, qh, ag)
                                                }
                                                var Od = new vh;
                                                L(Od, oh, 1, sb);
                                                L(Od, sh, 2, Uf);
                                                L(Od, uh, 3, rb);
                                                Tf = Od
                                            }
                                            var fk = Tf;
                                            if (!fk) break a;
                                            var gk = new Ch;
                                            pd(gk, vh, 163, Dh, fk);
                                            xn(gk)
                                        } else {
                                            if (Rn()) Sf = void 0;
                                            else {
                                                var Jc = {
                                                    stackTrace: Q.stack
                                                };
                                                Q.fileName && (Jc.filename = Q.fileName);
                                                var Ka = Q.lineNumber && Q.lineNumber.split ? Q.lineNumber.split(":") : [];
                                                0 !== Ka.length && (1 !== Ka.length || isNaN(Number(Ka[0])) ? 2 !== Ka.length || isNaN(Number(Ka[0])) || isNaN(Number(Ka[1])) || (Jc.lineNumber = Number(Ka[0]), Jc.columnNumber = Number(Ka[1])) : Jc.lineNumber = Number(Ka[0]));
                                                var bg = {
                                                    level: "ERROR_LEVEL_UNKNOWN",
                                                    message: Q.message,
                                                    errorClassName: Q.name,
                                                    sampleWeight: Q.sampleWeight
                                                };
                                                "ERROR" === Ic ? bg.level = "ERROR_LEVEL_ERROR" : "WARNING" === Ic && (bg.level = "ERROR_LEVEL_WARNNING");
                                                var uo = {
                                                        isObfuscated: !0,
                                                        browserStackInfo: Jc
                                                    },
                                                    Qb = {
                                                        pageUrl: window.location.href,
                                                        kvPairs: []
                                                    };
                                                R("FEXP_EXPERIMENTS") && (Qb.experimentIds = R("FEXP_EXPERIMENTS"));
                                                var cg = Oh();
                                                if (!Ph() && cg)
                                                    for (var hk = u(Object.keys(cg)), ub = hk.next(); !ub.done; ub = hk.next()) {
                                                        var ik = ub.value;
                                                        Qb.kvPairs.push({
                                                            key: ik,
                                                            value: String(cg[ik])
                                                        })
                                                    }
                                                var dg = Q.params;
                                                if (dg) {
                                                    var jk = u(Object.keys(dg));
                                                    for (ub = jk.next(); !ub.done; ub = jk.next()) {
                                                        var kk = ub.value;
                                                        Qb.kvPairs.push({
                                                            key: "client." + kk,
                                                            value: String(dg[kk])
                                                        })
                                                    }
                                                }
                                                var lk = R("SERVER_NAME"),
                                                    mk = R("SERVER_VERSION");
                                                lk && mk && (Qb.kvPairs.push({
                                                    key: "server.name",
                                                    value: lk
                                                }), Qb.kvPairs.push({
                                                    key: "server.version",
                                                    value: mk
                                                }));
                                                Sf = {
                                                    errorMetadata: Qb,
                                                    stackTrace: uo,
                                                    logMessage: bg
                                                }
                                            }
                                            var nk = Sf;
                                            if (!nk) break a;
                                            yn("clientError", nk)
                                        }
                                        if ("ERROR" === Ic || T("errors_flush_gel_always_killswitch")) b: if (T("migrate_events_to_ts")) c: {
                                            if (T("web_fp_via_jspb") && (un(!0), !T("web_fp_via_jspb_and_json"))) break c;un()
                                        }
                                        else {
                                            if (T("web_fp_via_jspb") && (un(!0), !T("web_fp_via_jspb_and_json"))) break b;
                                            un()
                                        }
                                    }
                                    if (!T("suppress_error_204_logging")) {
                                        var vb = va,
                                            Kc = vb.params || {},
                                            Ya = {
                                                urlParams: {
                                                    a: "logerror",
                                                    t: "jserror",
                                                    type: vb.name,
                                                    msg: vb.message.substr(0, 250),
                                                    line: vb.lineNumber,
                                                    level: h,
                                                    "client.name": Kc.name
                                                },
                                                postParams: {
                                                    url: R("PAGE_NAME", window.location.href),
                                                    file: vb.fileName
                                                },
                                                method: "POST"
                                            };
                                        Kc.version && (Ya["client.version"] = Kc.version);
                                        if (Ya.postParams) {
                                            vb.stack && (Ya.postParams.stack = vb.stack);
                                            for (var ok = u(Object.keys(Kc)), eg = ok.next(); !eg.done; eg = ok.next()) {
                                                var pk = eg.value;
                                                Ya.postParams["client." + pk] = Kc[pk]
                                            }
                                            var fg = Oh();
                                            if (fg)
                                                for (var qk = u(Object.keys(fg)),
                                                        gg = qk.next(); !gg.done; gg = qk.next()) {
                                                    var rk = gg.value;
                                                    Ya.postParams[rk] = fg[rk]
                                                }
                                            var sk = R("SERVER_NAME"),
                                                tk = R("SERVER_VERSION");
                                            sk && tk && (Ya.postParams["server.name"] = sk, Ya.postParams["server.version"] = tk)
                                        }
                                        Ai(R("ECATCHER_REPORT_HOST", "") + "/error_204", Ya)
                                    }
                                    try {
                                        Ln.add(va.message)
                                    } catch (zo) {}
                                    Mn++
                                }
                            }
                        }
                    }
                } else throw Nb;
            } else console && console.warn && console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")
    };

    function no(a) {
        return (0 === a.search("cue") || 0 === a.search("load")) && "loadModule" !== a
    }

    function oo(a) {
        return 0 === a.search("get") || 0 === a.search("is")
    };

    function po(a, b) {
        go.call(this, a, Object.assign({
            title: "video player",
            videoId: "",
            width: 640,
            height: 360
        }, b || {}), "player");
        this.M = {};
        this.playerInfo = {};
        this.videoTitle = ""
    }
    v(po, go);
    n = po.prototype;
    n.Ta = function() {
        var a = bo(this.h, "playerVars");
        if (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            a = b
        } else a = {};
        window !== window.top && document.referrer && (a.widget_referrer = document.referrer.substring(0, 256));
        if (c = bo(this.h, "embedConfig")) {
            if (Pa(c)) try {
                c = JSON.stringify(c)
            } catch (d) {
                console.error("Invalid embed config JSON", d)
            }
            a.embed_config = c
        }
        return a
    };
    n.Qa = function(a) {
        var b = a.event;
        a = a.info;
        switch (b) {
            case "apiInfoDelivery":
                if (Pa(a))
                    for (var c in a) a.hasOwnProperty(c) && (this.M[c] = a[c]);
                break;
            case "infoDelivery":
                qo(this, a);
                break;
            case "initialDelivery":
                Pa(a) && (window.clearInterval(this.i), this.playerInfo = {}, this.M = {}, ro(this, a.apiInterface), qo(this, a));
                break;
            default:
                ko(this, b, a)
        }
    };

    function qo(a, b) {
        if (Pa(b)) {
            for (var c in b) b.hasOwnProperty(c) && (a.playerInfo[c] = b[c]);
            a.playerInfo.hasOwnProperty("videoData") && (b = a.playerInfo.videoData, b.hasOwnProperty("title") && b.title ? (b = b.title, b !== a.videoTitle && (a.videoTitle = b, a.g.setAttribute("title", b))) : (a.videoTitle = "", a.g.setAttribute("title", "YouTube " + bo(a.h, "title"))))
        }
    }

    function ro(a, b) {
        E(b, function(c) {
            this[c] || ("getCurrentTime" === c ? this[c] = function() {
                var d = this.playerInfo.currentTime;
                if (1 === this.playerInfo.playerState) {
                    var e = (Date.now() / 1E3 - this.playerInfo.currentTimeLastUpdated_) * this.playerInfo.playbackRate;
                    0 < e && (d += Math.min(e, 1))
                }
                return d
            } : no(c) ? this[c] = function() {
                this.playerInfo = {};
                this.M = {};
                mo(this, c, arguments);
                return this
            } : oo(c) ? this[c] = function() {
                var d = 0;
                0 === c.search("get") ? d = 3 : 0 === c.search("is") && (d = 2);
                return this.playerInfo[c.charAt(d).toLowerCase() + c.substr(d + 1)]
            } : this[c] = function() {
                mo(this, c, arguments);
                return this
            })
        }, a)
    }
    n.getVideoEmbedCode = function() {
        var a = bo(this.h, "host") + ("/embed/" + bo(this.h, "videoId")),
            b = Number(bo(this.h, "width")),
            c = Number(bo(this.h, "height"));
        if (isNaN(b) || isNaN(c)) throw Error("Invalid width or height property");
        b = Math.floor(b);
        c = Math.floor(c);
        var d = this.videoTitle;
        Hb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Bb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Cb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Db, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Eb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Fb,
            "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Gb, "&#0;")));
        return '<iframe width="' + b + '" height="' + c + '" src="' + a + '" title="' + ((null != d ? d : "YouTube video player") + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    };
    n.getOptions = function(a) {
        return this.M.namespaces ? a ? this.M[a] ? this.M[a].options || [] : [] : this.M.namespaces || [] : []
    };
    n.getOption = function(a, b) {
        if (this.M.namespaces && a && b && this.M[a]) return this.M[a][b]
    };

    function vo(a) {
        if ("iframe" !== a.tagName.toLowerCase()) {
            var b = Zn(a, "videoid");
            b && (b = {
                videoId: b,
                width: Zn(a, "width"),
                height: Zn(a, "height")
            }, new po(a, b))
        }
    };
    B("YT.PlayerState.UNSTARTED", -1);
    B("YT.PlayerState.ENDED", 0);
    B("YT.PlayerState.PLAYING", 1);
    B("YT.PlayerState.PAUSED", 2);
    B("YT.PlayerState.BUFFERING", 3);
    B("YT.PlayerState.CUED", 5);
    B("YT.get", function(a) {
        return Vn[a]
    });
    B("YT.scan", Yn);
    B("YT.subscribe", function(a, b, c) {
        Ig.subscribe(a, b, c);
        Xn[a] = !0;
        for (var d in Vn) Vn.hasOwnProperty(d) && jo(Vn[d], a)
    });
    B("YT.unsubscribe", function(a, b, c) {
        Hg(a, b, c)
    });
    B("YT.Player", po);
    go.prototype.destroy = go.prototype.destroy;
    go.prototype.setSize = go.prototype.setSize;
    go.prototype.getIframe = go.prototype.getIframe;
    go.prototype.addEventListener = go.prototype.addEventListener;
    po.prototype.getVideoEmbedCode = po.prototype.getVideoEmbedCode;
    po.prototype.getOptions = po.prototype.getOptions;
    po.prototype.getOption = po.prototype.getOption;
    Wn.push(function(a) {
        var b = a;
        b || (b = document);
        a = hb(b.getElementsByTagName("yt:player"));
        var c = b || document;
        if (c.querySelectorAll && c.querySelector) b = c.querySelectorAll(".yt-player");
        else {
            var d;
            c = document;
            b = b || c;
            if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll(".yt-player");
            else if (b.getElementsByClassName) {
                var e = b.getElementsByClassName("yt-player");
                b = e
            } else {
                e = b.getElementsByTagName("*");
                var f = {};
                for (c = d = 0; b = e[c]; c++) {
                    var g = b.className,
                        h;
                    if (h = "function" == typeof g.split) h = 0 <= bb(g.split(/\s+/),
                        "yt-player");
                    h && (f[d++] = b)
                }
                f.length = d;
                b = f
            }
        }
        b = hb(b);
        E(gb(a, b), vo)
    });
    "undefined" != typeof YTConfig && YTConfig.parsetags && "onload" != YTConfig.parsetags || Yn();
    var wo = z.onYTReady;
    wo && wo();
    var xo = z.onYouTubeIframeAPIReady;
    xo && xo();
    var yo = z.onYouTubePlayerAPIReady;
    yo && yo();
}).call(this);