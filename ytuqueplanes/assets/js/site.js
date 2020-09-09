! function () {
    for (var e, t = function () { }, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], s = i.length, a = window.console = window.console || {}; s--;) a[e = i[s]] || (a[e] = t)
}(),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
    }(this, (function () {
        "use strict";
        var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function () { },
            removeEventListener: function () { },
            activeElement: {
                blur: function () { },
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () { }
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () { },
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
            t = "undefined" == typeof window ? {
                document: e,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () { },
                removeEventListener: function () { },
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () { },
                Date: function () { },
                screen: {},
                setTimeout: function () { },
                clearTimeout: function () { }
            } : window,
            i = function (e) {
                for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                return this.length = e.length, this
            };

        function s(s, a) {
            var n = [],
                r = 0;
            if (s && !a && s instanceof i) return s;
            if (s)
                if ("string" == typeof s) {
                    var l, o, h = s.trim();
                    if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
                        var d = "div";
                        for (0 === h.indexOf("<li") && (d = "ul"), 0 === h.indexOf("<tr") && (d = "tbody"), 0 !== h.indexOf("<td") && 0 !== h.indexOf("<th") || (d = "tr"), 0 === h.indexOf("<tbody") && (d = "table"), 0 === h.indexOf("<option") && (d = "select"), (o = e.createElement(d)).innerHTML = h, r = 0; r < o.childNodes.length; r += 1) n.push(o.childNodes[r])
                    } else
                        for (l = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], r = 0; r < l.length; r += 1) l[r] && n.push(l[r])
                } else if (s.nodeType || s === t || s === e) n.push(s);
                else if (s.length > 0 && s[0].nodeType)
                    for (r = 0; r < s.length; r += 1) n.push(s[r]);
            return new i(n)
        }

        function a(e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        s.fn = i.prototype, s.Class = i, s.Dom7 = i;
        var n = {
            addClass: function (e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
                return this
            },
            removeClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
                return this
            },
            hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
                return this
            },
            attr: function (e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var s = 0; s < this.length; s += 1)
                    if (2 === i.length) this[s].setAttribute(e, t);
                    else
                        for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
                return this
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function (e, t) {
                var i;
                if (void 0 !== t) {
                    for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e, i.transform = e
                }
                return this
            },
            transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e, i.transitionDuration = e
                }
                return this
            },
            on: function () {
                for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                var a = t[0],
                    n = t[1],
                    r = t[2],
                    l = t[3];

                function o(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(n)) r.apply(t, i);
                        else
                            for (var a = s(t).parents(), l = 0; l < a.length; l += 1) s(a[l]).is(n) && r.apply(a[l], i)
                    }
                }

                function h(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                }
                "function" == typeof t[1] && (a = (e = t)[0], r = e[1], l = e[2], n = void 0), l || (l = !1);
                for (var d, c = a.split(" "), p = 0; p < this.length; p += 1) {
                    var u = this[p];
                    if (n)
                        for (d = 0; d < c.length; d += 1) {
                            var m = c[d];
                            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[m] || (u.dom7LiveListeners[m] = []), u.dom7LiveListeners[m].push({
                                listener: r,
                                proxyListener: o
                            }), u.addEventListener(m, o, l)
                        } else
                        for (d = 0; d < c.length; d += 1) {
                            var v = c[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: r,
                                proxyListener: h
                            }), u.addEventListener(v, h, l)
                        }
                }
                return this
            },
            off: function () {
                for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
                var s = t[0],
                    a = t[1],
                    n = t[2],
                    r = t[3];
                "function" == typeof t[1] && (s = (e = t)[0], n = e[1], r = e[2], a = void 0), r || (r = !1);
                for (var l = s.split(" "), o = 0; o < l.length; o += 1)
                    for (var h = l[o], d = 0; d < this.length; d += 1) {
                        var c = this[d],
                            p = void 0;
                        if (!a && c.dom7Listeners ? p = c.dom7Listeners[h] : a && c.dom7LiveListeners && (p = c.dom7LiveListeners[h]), p && p.length)
                            for (var u = p.length - 1; u >= 0; u -= 1) {
                                var m = p[u];
                                n && m.listener === n || n && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === n ? (c.removeEventListener(h, m.proxyListener, r), p.splice(u, 1)) : n || (c.removeEventListener(h, m.proxyListener, r), p.splice(u, 1))
                            }
                    }
                return this
            },
            trigger: function () {
                for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
                for (var a = i[0].split(" "), n = i[1], r = 0; r < a.length; r += 1)
                    for (var l = a[r], o = 0; o < this.length; o += 1) {
                        var h = this[o],
                            d = void 0;
                        try {
                            d = new t.CustomEvent(l, {
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (d = e.createEvent("Event")).initEvent(l, !0, !0), d.detail = n
                        }
                        h.dom7EventData = i.filter((function (e, t) {
                            return t > 0
                        })), h.dispatchEvent(d), h.dom7EventData = [], delete h.dom7EventData
                    }
                return this
            },
            transitionEnd: function (e) {
                var t, i = ["webkitTransitionEnd", "transitionend"],
                    s = this;

                function a(n) {
                    if (n.target === this)
                        for (e.call(this, n), t = 0; t < i.length; t += 1) s.off(i[t], a)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1) s.on(i[t], a);
                return this
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function () {
                if (this.length > 0) {
                    var i = this[0],
                        s = i.getBoundingClientRect(),
                        a = e.body,
                        n = i.clientTop || a.clientTop || 0,
                        r = i.clientLeft || a.clientLeft || 0,
                        l = i === t ? t.scrollY : i.scrollTop,
                        o = i === t ? t.scrollX : i.scrollLeft;
                    return {
                        top: s.top + l - n,
                        left: s.left + o - r
                    }
                }
                return null
            },
            css: function (e, i) {
                var s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            for (var a in e) this[s].style[a] = e[a];
                        return this
                    }
                    if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                    return this
                }
                return this
            },
            each: function (e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function (a) {
                var n, r, l = this[0];
                if (!l || void 0 === a) return !1;
                if ("string" == typeof a) {
                    if (l.matches) return l.matches(a);
                    if (l.webkitMatchesSelector) return l.webkitMatchesSelector(a);
                    if (l.msMatchesSelector) return l.msMatchesSelector(a);
                    for (n = s(a), r = 0; r < n.length; r += 1)
                        if (n[r] === l) return !0;
                    return !1
                }
                if (a === e) return l === e;
                if (a === t) return l === t;
                if (a.nodeType || a instanceof i) {
                    for (n = a.nodeType ? [a] : a, r = 0; r < n.length; r += 1)
                        if (n[r] === l) return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t, s = this.length;
                return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function () {
                for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
                for (var n = 0; n < s.length; n += 1) {
                    t = s[n];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" == typeof t) {
                            var l = e.createElement("div");
                            for (l.innerHTML = t; l.firstChild;) this[r].appendChild(l.firstChild)
                        } else if (t instanceof i)
                            for (var o = 0; o < t.length; o += 1) this[r].appendChild(t[o]);
                        else this[r].appendChild(t)
                }
                return this
            },
            prepend: function (t) {
                var s, a;
                for (s = 0; s < this.length; s += 1)
                    if ("string" == typeof t) {
                        var n = e.createElement("div");
                        for (n.innerHTML = t, a = n.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(n.childNodes[a], this[s].childNodes[0])
                    } else if (t instanceof i)
                        for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
                    else this[s].insertBefore(t, this[s].childNodes[0]);
                return this
            },
            next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
            },
            nextAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return new i([]);
                for (; a.nextElementSibling;) {
                    var n = a.nextElementSibling;
                    e ? s(n).is(e) && t.push(n) : t.push(n), a = n
                }
                return new i(t)
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
                }
                return new i([])
            },
            prevAll: function (e) {
                var t = [],
                    a = this[0];
                if (!a) return new i([]);
                for (; a.previousElementSibling;) {
                    var n = a.previousElementSibling;
                    e ? s(n).is(e) && t.push(n) : t.push(n), a = n
                }
                return new i(t)
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return s(a(t))
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var n = this[i].parentNode; n;) e ? s(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                return s(a(t))
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function (e) {
                for (var t = [], s = 0; s < this.length; s += 1)
                    for (var a = this[s].querySelectorAll(e), n = 0; n < a.length; n += 1) t.push(a[n]);
                return new i(t)
            },
            children: function (e) {
                for (var t = [], n = 0; n < this.length; n += 1)
                    for (var r = this[n].childNodes, l = 0; l < r.length; l += 1) e ? 1 === r[l].nodeType && s(r[l]).is(e) && t.push(r[l]) : 1 === r[l].nodeType && t.push(r[l]);
                return new i(a(t))
            },
            filter: function (e) {
                for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
                return new i(t)
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                var i, a;
                for (i = 0; i < e.length; i += 1) {
                    var n = s(e[i]);
                    for (a = 0; a < n.length; a += 1) this[this.length] = n[a], this.length += 1
                }
                return this
            },
            styles: function () {
                return this[0] ? t.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(n).forEach((function (e) {
            s.fn[e] = s.fn[e] || n[e]
        }));
        var r = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach((function (e) {
                    try {
                        t[e] = null
                    } catch (e) { }
                    try {
                        delete t[e]
                    } catch (e) { }
                }))
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e, i) {
                var s, a, n;
                void 0 === i && (i = "x");
                var r = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = r.transform || r.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function (e) {
                    return e.replace(",", ".")
                })).join(", ")), n = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
            },
            parseUrlQuery: function (e) {
                var i, s, a, n, r = {},
                    l = e || t.location.href;
                if ("string" == typeof l && l.length)
                    for (n = (s = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                        return "" !== e
                    }))).length, i = 0; i < n; i += 1) a = s[i].replace(/#\S+/g, "").split("="), r[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return r
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (null != a)
                        for (var n = Object.keys(Object(a)), l = 0, o = n.length; l < o; l += 1) {
                            var h = n[l],
                                d = Object.getOwnPropertyDescriptor(a, h);
                            void 0 !== d && d.enumerable && (r.isObject(i[h]) && r.isObject(a[h]) ? r.extend(i[h], a[h]) : !r.isObject(i[h]) && r.isObject(a[h]) ? (i[h] = {}, r.extend(i[h], a[h])) : i[h] = a[h])
                        }
                }
                return i
            }
        },
            l = {
                touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
                observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                passiveListener: function () {
                    var e = !1;
                    try {
                        var i = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, i)
                    } catch (e) { }
                    return e
                }(),
                gestures: "ongesturestart" in t
            },
            o = function (e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
                    t.on(e, t.params.on[e])
                }))
            },
            h = {
                components: {
                    configurable: !0
                }
            };
        o.prototype.on = function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;
            var a = i ? "unshift" : "push";
            return e.split(" ").forEach((function (e) {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
            })), s
        }, o.prototype.once = function (e, t, i) {
            var s = this;
            if ("function" != typeof t) return s;

            function a() {
                for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
                s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
            }
            return a.f7proxy = t, s.on(e, a, i)
        }, o.prototype.off = function (e, t) {
            var i = this;
            return i.eventsListeners ? (e.split(" ").forEach((function (e) {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
                    (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
                }))
            })), i) : i
        }, o.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, s, a, n = this;
            if (!n.eventsListeners) return n;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = n) : (i = e[0].events, s = e[0].data, a = e[0].context || n);
            var r = Array.isArray(i) ? i : i.split(" ");
            return r.forEach((function (e) {
                if (n.eventsListeners && n.eventsListeners[e]) {
                    var t = [];
                    n.eventsListeners[e].forEach((function (e) {
                        t.push(e)
                    })), t.forEach((function (e) {
                        e.apply(a, s)
                    }))
                }
            })), n
        }, o.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules && Object.keys(t.modules).forEach((function (i) {
                var s = t.modules[i];
                s.params && r.extend(e, s.params)
            }))
        }, o.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules && Object.keys(t.modules).forEach((function (i) {
                var s = t.modules[i],
                    a = e[i] || {};
                s.instance && Object.keys(s.instance).forEach((function (e) {
                    var i = s.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                })), s.on && t.on && Object.keys(s.on).forEach((function (e) {
                    t.on(e, s.on[e])
                })), s.create && s.create.bind(t)(a)
            }))
        }, h.components.set = function (e) {
            this.use && this.use(e)
        }, o.installModule = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            var s = this;
            s.prototype.modules || (s.prototype.modules = {});
            var a = e.name || Object.keys(s.prototype.modules).length + "_" + r.now();
            return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
                s.prototype[t] = e.proto[t]
            })), e.static && Object.keys(e.static).forEach((function (t) {
                s[t] = e.static[t]
            })), e.install && e.install.apply(s, t), s
        }, o.use = function (e) {
            for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
            var s = this;
            return Array.isArray(e) ? (e.forEach((function (e) {
                return s.installModule(e)
            })), s) : s.installModule.apply(s, [e].concat(t))
        }, Object.defineProperties(o, h);
        var d, c, p, u, m, v, f, g, y, w, b, x, C, T, S, E = {
            updateSize: function () {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), r.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function () {
                var e = this.params,
                    i = this.$wrapperEl,
                    s = this.size,
                    a = this.rtlTranslate,
                    n = this.wrongRTL,
                    l = this.virtual && e.virtual.enabled,
                    o = l ? this.virtual.slides.length : this.slides.length,
                    h = i.children("." + this.params.slideClass),
                    d = l ? this.virtual.slides.length : h.length,
                    c = [],
                    p = [],
                    u = [];

                function m(t) {
                    return !e.cssMode || t !== h.length - 1
                }
                var v = e.slidesOffsetBefore;
                "function" == typeof v && (v = e.slidesOffsetBefore.call(this));
                var f = e.slidesOffsetAfter;
                "function" == typeof f && (f = e.slidesOffsetAfter.call(this));
                var g = this.snapGrid.length,
                    y = this.snapGrid.length,
                    w = e.spaceBetween,
                    b = -v,
                    x = 0,
                    C = 0;
                if (void 0 !== s) {
                    var T, S;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? h.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : h.css({
                        marginRight: "",
                        marginBottom: ""
                    }), e.slidesPerColumn > 1 && (T = Math.floor(d / e.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
                    for (var E, M = e.slidesPerColumn, k = T / M, _ = Math.floor(d / e.slidesPerColumn), D = 0; D < d; D += 1) {
                        S = 0;
                        var $ = h.eq(D);
                        if (e.slidesPerColumn > 1) {
                            var P = void 0,
                                z = void 0,
                                L = void 0;
                            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                var I = Math.floor(D / (e.slidesPerGroup * e.slidesPerColumn)),
                                    H = D - e.slidesPerColumn * e.slidesPerGroup * I,
                                    O = 0 === I ? e.slidesPerGroup : Math.min(Math.ceil((d - I * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                                P = (z = H - (L = Math.floor(H / O)) * O + I * e.slidesPerGroup) + L * T / M, $.css({
                                    "-webkit-box-ordinal-group": P,
                                    "-moz-box-ordinal-group": P,
                                    "-ms-flex-order": P,
                                    "-webkit-order": P,
                                    order: P
                                })
                            } else "column" === e.slidesPerColumnFill ? (L = D - (z = Math.floor(D / M)) * M, (z > _ || z === _ && L === M - 1) && (L += 1) >= M && (L = 0, z += 1)) : z = D - (L = Math.floor(D / k)) * k;
                            $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== L && e.spaceBetween && e.spaceBetween + "px")
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === e.slidesPerView) {
                                var B = t.getComputedStyle($[0], null),
                                    F = $[0].style.transform,
                                    A = $[0].style.webkitTransform;
                                if (F && ($[0].style.transform = "none"), A && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var V = parseFloat(B.getPropertyValue("width")),
                                        N = parseFloat(B.getPropertyValue("padding-left")),
                                        R = parseFloat(B.getPropertyValue("padding-right")),
                                        G = parseFloat(B.getPropertyValue("margin-left")),
                                        Y = parseFloat(B.getPropertyValue("margin-right")),
                                        X = B.getPropertyValue("box-sizing");
                                    S = X && "border-box" === X ? V + G + Y : V + N + R + G + Y
                                } else {
                                    var q = parseFloat(B.getPropertyValue("height")),
                                        W = parseFloat(B.getPropertyValue("padding-top")),
                                        j = parseFloat(B.getPropertyValue("padding-bottom")),
                                        U = parseFloat(B.getPropertyValue("margin-top")),
                                        K = parseFloat(B.getPropertyValue("margin-bottom")),
                                        Z = B.getPropertyValue("box-sizing");
                                    S = Z && "border-box" === Z ? q + U + K : q + W + j + U + K
                                }
                                F && ($[0].style.transform = F), A && ($[0].style.webkitTransform = A), e.roundLengths && (S = Math.floor(S))
                            } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), h[D] && (this.isHorizontal() ? h[D].style.width = S + "px" : h[D].style.height = S + "px");
                            h[D] && (h[D].swiperSlideSize = S), u.push(S), e.centeredSlides ? (b = b + S / 2 + x / 2 + w, 0 === x && 0 !== D && (b = b - s / 2 - w), 0 === D && (b = b - s / 2 - w), Math.abs(b) < .001 && (b = 0), e.roundLengths && (b = Math.floor(b)), C % e.slidesPerGroup == 0 && c.push(b), p.push(b)) : (e.roundLengths && (b = Math.floor(b)), C % e.slidesPerGroup == 0 && c.push(b), p.push(b), b = b + S + w), this.virtualSize += S + w, x = S, C += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, s) + f, a && n && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    }), e.centeredSlides)) {
                        E = [];
                        for (var J = 0; J < c.length; J += 1) {
                            var Q = c[J];
                            e.roundLengths && (Q = Math.floor(Q)), c[J] < this.virtualSize + c[0] && E.push(Q)
                        }
                        c = E
                    }
                    if (!e.centeredSlides) {
                        E = [];
                        for (var ee = 0; ee < c.length; ee += 1) {
                            var te = c[ee];
                            e.roundLengths && (te = Math.floor(te)), c[ee] <= this.virtualSize - s && E.push(te)
                        }
                        c = E, Math.floor(this.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(this.virtualSize - s)
                    }
                    if (0 === c.length && (c = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? h.filter(m).css({
                        marginLeft: w + "px"
                    }) : h.filter(m).css({
                        marginRight: w + "px"
                    }) : h.filter(m).css({
                        marginBottom: w + "px"
                    })), e.centeredSlides && e.centeredSlidesBounds) {
                        var ie = 0;
                        u.forEach((function (t) {
                            ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                        }));
                        var se = (ie -= e.spaceBetween) - s;
                        c = c.map((function (e) {
                            return e < 0 ? -v : e > se ? se + f : e
                        }))
                    }
                    if (e.centerInsufficientSlides) {
                        var ae = 0;
                        if (u.forEach((function (t) {
                            ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                        })), (ae -= e.spaceBetween) < s) {
                            var ne = (s - ae) / 2;
                            c.forEach((function (e, t) {
                                c[t] = e - ne
                            })), p.forEach((function (e, t) {
                                p[t] = e + ne
                            }))
                        }
                    }
                    r.extend(this, {
                        slides: h,
                        snapGrid: c,
                        slidesGrid: p,
                        slidesSizesGrid: u
                    }), d !== o && this.emit("slidesLengthChange"), c.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== y && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (e) {
                var t, i = [],
                    s = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                        var a = this.activeIndex + t;
                        if (a > this.slides.length) break;
                        i.push(this.slides.eq(a)[0])
                    } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var n = i[t].offsetHeight;
                        s = n > s ? n : s
                    } s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this.params,
                    i = this.slides,
                    a = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var n = -e;
                    a && (n = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var r = 0; r < i.length; r += 1) {
                        var l = i[r],
                            o = (n + (t.centeredSlides ? this.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var h = -(n - l.swiperSlideOffset),
                                d = h + this.slidesSizesGrid[r];
                            (h >= 0 && h < this.size - 1 || d > 1 && d <= this.size || h <= 0 && d >= this.size) && (this.visibleSlides.push(l), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                        }
                        l.progress = a ? -o : o
                    }
                    this.visibleSlides = s(this.visibleSlides)
                }
            },
            updateProgress: function (e) {
                if (void 0 === e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params,
                    s = this.maxTranslate() - this.minTranslate(),
                    a = this.progress,
                    n = this.isBeginning,
                    l = this.isEnd,
                    o = n,
                    h = l;
                0 === s ? (a = 0, n = !0, l = !0) : (n = (a = (e - this.minTranslate()) / s) <= 0, l = a >= 1), r.extend(this, {
                    progress: a,
                    isBeginning: n,
                    isEnd: l
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), n && !o && this.emit("reachBeginning toEdge"), l && !h && this.emit("reachEnd toEdge"), (o && !n || h && !l) && this.emit("fromEdge"), this.emit("progress", a)
            },
            updateSlidesClasses: function () {
                var e, t = this.slides,
                    i = this.params,
                    s = this.$wrapperEl,
                    a = this.activeIndex,
                    n = this.realIndex,
                    r = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
                var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                var o = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate,
                    s = this.slidesGrid,
                    a = this.snapGrid,
                    n = this.params,
                    l = this.activeIndex,
                    o = this.realIndex,
                    h = this.snapIndex,
                    d = e;
                if (void 0 === d) {
                    for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? d = c : i >= s[c] && i < s[c + 1] && (d = c + 1) : i >= s[c] && (d = c);
                    n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(d / n.slidesPerGroup)) >= a.length && (t = a.length - 1), d !== l) {
                    var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    r.extend(this, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: l,
                        activeIndex: d
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== p && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else t !== h && (this.snapIndex = t, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function (e) {
                var t = this.params,
                    i = s(e.target).closest("." + t.slideClass)[0],
                    a = !1;
                if (i)
                    for (var n = 0; n < this.slides.length; n += 1) this.slides[n] === i && (a = !0);
                if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
                this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
            M = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        i = this.rtlTranslate,
                        s = this.translate,
                        a = this.$wrapperEl;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    var n = r.getTranslate(a[0], e);
                    return i && (n = -n), n || 0
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        n = this.wrapperEl,
                        r = this.progress,
                        l = 0,
                        o = 0;
                    this.isHorizontal() ? l = i ? -e : e : o = e, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -o : s.virtualTranslate || a.transform("translate3d(" + l + "px, " + o + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : o;
                    var h = this.maxTranslate() - this.minTranslate();
                    (0 === h ? 0 : (e - this.minTranslate()) / h) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, i, s, a) {
                    var n;
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                    var r = this,
                        l = r.params,
                        o = r.wrapperEl;
                    if (r.animating && l.preventInteractionOnTransition) return !1;
                    var h, d = r.minTranslate(),
                        c = r.maxTranslate();
                    if (h = s && e > d ? d : s && e < c ? c : e, r.updateProgress(h), l.cssMode) {
                        var p = r.isHorizontal();
                        return 0 === t ? o[p ? "scrollLeft" : "scrollTop"] = -h : o.scrollTo ? o.scrollTo(((n = {})[p ? "left" : "top"] = -h, n.behavior = "smooth", n)) : o[p ? "scrollLeft" : "scrollTop"] = -h, !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(h), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(h), i && (r.emit("beforeTransitionStart", t, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            k = {
                slideTo: function (e, t, i, s) {
                    var a;
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var n = this,
                        r = e;
                    r < 0 && (r = 0);
                    var l = n.params,
                        o = n.snapGrid,
                        h = n.slidesGrid,
                        d = n.previousIndex,
                        c = n.activeIndex,
                        p = n.rtlTranslate,
                        u = n.wrapperEl;
                    if (n.animating && l.preventInteractionOnTransition) return !1;
                    var m = Math.floor(r / l.slidesPerGroup);
                    m >= o.length && (m = o.length - 1), (c || l.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
                    var v, f = -o[m];
                    if (n.updateProgress(f), l.normalizeSlideIndex)
                        for (var g = 0; g < h.length; g += 1) - Math.floor(100 * f) >= Math.floor(100 * h[g]) && (r = g);
                    if (n.initialized && r !== c) {
                        if (!n.allowSlideNext && f < n.translate && f < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (c || 0) !== r) return !1
                    }
                    if (v = r > c ? "next" : r < c ? "prev" : "reset", p && -f === n.translate || !p && f === n.translate) return n.updateActiveIndex(r), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(f), "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)), !1;
                    if (l.cssMode) {
                        var y = n.isHorizontal();
                        return 0 === t ? u[y ? "scrollLeft" : "scrollTop"] = -f : u.scrollTo ? u.scrollTo(((a = {})[y ? "left" : "top"] = -f, a.behavior = "smooth", a)) : u[y ? "scrollLeft" : "scrollTop"] = -f, !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.transitionEnd(i, v)) : (n.setTransition(t), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, v))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = e;
                    return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating;
                    return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params,
                        a = this.animating,
                        n = this.snapGrid,
                        r = this.slidesGrid,
                        l = this.rtlTranslate;
                    if (s.loop) {
                        if (a) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function o(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var h, d = o(l ? this.translate : -this.translate),
                        c = n.map((function (e) {
                            return o(e)
                        })),
                        p = (r.map((function (e) {
                            return o(e)
                        })), n[c.indexOf(d)], n[c.indexOf(d) - 1]);
                    return void 0 === p && s.cssMode && n.forEach((function (e) {
                        !p && d >= e && (p = e)
                    })), void 0 !== p && (h = r.indexOf(p)) < 0 && (h = this.activeIndex - 1), this.slideTo(h, e, t, i)
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function (e, t, i, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                    var a = this.activeIndex,
                        n = Math.floor(a / this.params.slidesPerGroup),
                        r = this.rtlTranslate ? this.translate : -this.translate;
                    if (r >= this.snapGrid[n]) {
                        var l = this.snapGrid[n];
                        r - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
                    } else {
                        var o = this.snapGrid[n - 1];
                        r - o <= (this.snapGrid[n] - o) * s && (a -= this.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function () {
                    var e, t = this,
                        i = t.params,
                        a = t.$wrapperEl,
                        n = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        l = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? l < t.loopedSlides - n / 2 || l > t.slides.length - t.loopedSlides + n / 2 ? (t.loopFix(), l = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick((function () {
                            t.slideTo(l)
                        }))) : t.slideTo(l) : l > t.slides.length - n ? (t.loopFix(), l = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick((function () {
                            t.slideTo(l)
                        }))) : t.slideTo(l)
                    } else t.slideTo(l)
                }
            },
            _ = {
                loopCreate: function () {
                    var t = this,
                        i = t.params,
                        a = t.$wrapperEl;
                    a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                    var n = a.children("." + i.slideClass);
                    if (i.loopFillGroupWithBlank) {
                        var r = i.slidesPerGroup - n.length % i.slidesPerGroup;
                        if (r !== i.slidesPerGroup) {
                            for (var l = 0; l < r; l += 1) {
                                var o = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                a.append(o)
                            }
                            n = a.children("." + i.slideClass)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = n.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > n.length && (t.loopedSlides = n.length);
                    var h = [],
                        d = [];
                    n.each((function (e, i) {
                        var a = s(i);
                        e < t.loopedSlides && d.push(i), e < n.length && e >= n.length - t.loopedSlides && h.push(i), a.attr("data-swiper-slide-index", e)
                    }));
                    for (var c = 0; c < d.length; c += 1) a.append(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (var p = h.length - 1; p >= 0; p -= 1) a.prepend(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function () {
                    this.emit("beforeLoopFix");
                    var e, t = this.activeIndex,
                        i = this.slides,
                        s = this.loopedSlides,
                        a = this.allowSlidePrev,
                        n = this.allowSlideNext,
                        r = this.snapGrid,
                        l = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var o = -r[t] - this.getTranslate();
                    t < s ? (e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o)) : t >= i.length - s && (e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== o && this.setTranslate((l ? -this.translate : this.translate) - o)), this.allowSlidePrev = a, this.allowSlideNext = n, this.emit("loopFix")
                },
                loopDestroy: function () {
                    var e = this.$wrapperEl,
                        t = this.params,
                        i = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            D = {
                setGrabCursor: function (e) {
                    if (!(l.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function () {
                    l.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
                }
            },
            $ = {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.loop && this.loopCreate(), i.observer && l.observer || this.update()
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var a = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                        a = s + e.length
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), t.observer && l.observer || this.update(), this.slideTo(a, 0, !1)
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                    var n = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= n) this.appendSlide(t);
                    else {
                        for (var r = a > e ? a + 1 : a, o = [], h = n - 1; h >= e; h -= 1) {
                            var d = this.slides.eq(h);
                            d.remove(), o.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                            r = a > e ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < o.length; p += 1) i.append(o[p]);
                        s.loop && this.loopCreate(), s.observer && l.observer || this.update(), s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                    var a, n = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) a = e[r], this.slides[a] && this.slides.eq(a).remove(), a < n && (n -= 1);
                        n = Math.max(n, 0)
                    } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < n && (n -= 1), n = Math.max(n, 0);
                    t.loop && this.loopCreate(), t.observer && l.observer || this.update(), t.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            P = (d = t.navigator.platform, c = t.navigator.userAgent, p = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                edge: !1,
                ie: !1,
                firefox: !1,
                macos: !1,
                windows: !1,
                cordova: !(!t.cordova && !t.phonegap),
                phonegap: !(!t.cordova && !t.phonegap),
                electron: !1
            }, u = t.screen.width, m = t.screen.height, v = c.match(/(Android);?[\s\/]+([\d.]+)?/), f = c.match(/(iPad).*OS\s([\d_]+)/), g = c.match(/(iPod)(.*OS\s([\d_]+))?/), y = !f && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/), w = c.indexOf("MSIE ") >= 0 || c.indexOf("Trident/") >= 0, b = c.indexOf("Edge/") >= 0, x = c.indexOf("Gecko/") >= 0 && c.indexOf("Firefox/") >= 0, C = "Win32" === d, T = c.toLowerCase().indexOf("electron") >= 0, S = "MacIntel" === d, !f && S && l.touch && (1024 === u && 1366 === m || 834 === u && 1194 === m || 834 === u && 1112 === m || 768 === u && 1024 === m) && (f = c.match(/(Version)\/([\d.]+)/), S = !1), p.ie = w, p.edge = b, p.firefox = x, v && !C && (p.os = "android", p.osVersion = v[2], p.android = !0, p.androidChrome = c.toLowerCase().indexOf("chrome") >= 0), (f || y || g) && (p.os = "ios", p.ios = !0), y && !g && (p.osVersion = y[2].replace(/_/g, "."), p.iphone = !0), f && (p.osVersion = f[2].replace(/_/g, "."), p.ipad = !0), g && (p.osVersion = g[3] ? g[3].replace(/_/g, ".") : null, p.ipod = !0), p.ios && p.osVersion && c.indexOf("Version/") >= 0 && "10" === p.osVersion.split(".")[0] && (p.osVersion = c.toLowerCase().split("version/")[1].split(" ")[0]), p.webView = !(!(y || f || g) || !c.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, p.webview = p.webView, p.standalone = p.webView, p.desktop = !(p.ios || p.android) || T, p.desktop && (p.electron = T, p.macos = S, p.windows = C, p.macos && (p.os = "macos"), p.windows && (p.os = "windows")), p.pixelRatio = t.devicePixelRatio || 1, p);

        function z(i) {
            var a = this.touchEventsData,
                n = this.params,
                l = this.touches;
            if (!this.animating || !n.preventInteractionOnTransition) {
                var o = i;
                o.originalEvent && (o = o.originalEvent);
                var h = s(o.target);
                if (("wrapper" !== n.touchEventsTarget || h.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!a.isTouchEvent && "button" in o && o.button > 0 || a.isTouched && a.isMoved)))
                    if (n.noSwiping && h.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) this.allowClick = !0;
                    else if (!n.swipeHandler || h.closest(n.swipeHandler)[0]) {
                        l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, l.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        var d = l.currentX,
                            c = l.currentY,
                            p = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                            u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                        if (!p || !(d <= u || d >= t.screen.width - u)) {
                            if (r.extend(a, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), l.startX = d, l.startY = c, a.touchStartTime = r.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var m = !0;
                                h.is(a.formElements) && (m = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== h[0] && e.activeElement.blur();
                                var v = m && this.allowTouchMove && n.touchStartPreventDefault;
                                (n.touchStartForcePreventDefault || v) && o.preventDefault()
                            }
                            this.emit("touchStart", o)
                        }
                    }
            }
        }

        function L(t) {
            var i = this.touchEventsData,
                a = this.params,
                n = this.touches,
                l = this.rtlTranslate,
                o = t;
            if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                if (!i.isTouchEvent || "mousemove" !== o.type) {
                    var h = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                        d = "touchmove" === o.type ? h.pageX : o.pageX,
                        c = "touchmove" === o.type ? h.pageY : o.pageY;
                    if (o.preventedByNestedSwiper) return n.startX = d, void (n.startY = c);
                    if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (r.extend(n, {
                        startX: d,
                        startY: c,
                        currentX: d,
                        currentY: c
                    }), i.touchStartTime = r.now()));
                    if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                        if (this.isVertical()) {
                            if (c < n.startY && this.translate <= this.maxTranslate() || c > n.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                        } else if (d < n.startX && this.translate <= this.maxTranslate() || d > n.startX && this.translate >= this.minTranslate()) return;
                    if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                    if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                        n.currentX = d, n.currentY = c;
                        var p, u = n.currentX - n.startX,
                            m = n.currentY - n.startY;
                        if (!(this.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(m, 2)) < this.params.threshold))
                            if (void 0 === i.isScrolling && (this.isHorizontal() && n.currentY === n.startY || this.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + m * m >= 25 && (p = 180 * Math.atan2(Math.abs(m), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1, a.cssMode || o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? u : m;
                                n.diff = v, v *= a.touchRatio, l && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0,
                                    g = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, g))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                                }
                                a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: n[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: n[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: r.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                            }
                    }
                }
            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
        }

        function I(e) {
            var t = this,
                i = t.touchEventsData,
                s = t.params,
                a = t.touches,
                n = t.rtlTranslate,
                l = t.$wrapperEl,
                o = t.slidesGrid,
                h = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var c, p = r.now(),
                u = p - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), u < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = r.now(), r.nextTick((function () {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = s.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
                if (s.freeMode) {
                    if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (c > -t.maxTranslate()) return void (t.slides.length < h.length ? t.slideTo(h.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var m = i.velocities.pop(),
                                v = i.velocities.pop(),
                                f = m.position - v.position,
                                g = m.time - v.time;
                            t.velocity = f / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || r.now() - m.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * s.freeModeMomentumRatio,
                            w = t.velocity * y,
                            b = t.translate + w;
                        n && (b = -b);
                        var x, C, T = !1,
                            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -S && (b = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (C = !0);
                        else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > S && (b = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (C = !0);
                        else if (s.freeModeSticky) {
                            for (var E, M = 0; M < h.length; M += 1)
                                if (h[M] > -b) {
                                    E = M;
                                    break
                                } b = -(b = Math.abs(h[E] - b) < Math.abs(h[E - 1] - b) || "next" === t.swipeDirection ? h[E] : h[E - 1])
                        }
                        if (C && t.once("transitionEnd", (function () {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                            if (y = n ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity), s.freeModeSticky) {
                                var k = Math.abs((n ? -b : b) - t.translate),
                                    _ = t.slidesSizesGrid[t.activeIndex];
                                y = k < _ ? s.speed : k < 2 * _ ? 1.5 * s.speed : 2.5 * s.speed
                            }
                        } else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd((function () {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), l.transitionEnd((function () {
                                t && !t.destroyed && t.transitionEnd()
                            })))
                        }))) : t.velocity ? (t.updateProgress(b), t.setTransition(y), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd((function () {
                            t && !t.destroyed && t.transitionEnd()
                        })))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var D = 0, $ = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? c >= o[P] && c < o[P + s.slidesPerGroup] && (D = P, $ = o[P + s.slidesPerGroup] - o[P]) : c >= o[P] && (D = P, $ = o[o.length - 1] - o[o.length - 2]);
                    var z = (c - o[D]) / $;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (z >= s.longSwipesRatio ? t.slideTo(D + s.slidesPerGroup) : t.slideTo(D)), "prev" === t.swipeDirection && (z > 1 - s.longSwipesRatio ? t.slideTo(D + s.slidesPerGroup) : t.slideTo(D))
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(D + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(D)) : d.target === t.navigation.nextEl ? t.slideTo(D + s.slidesPerGroup) : t.slideTo(D)
                    }
                }
        }

        function H() {
            var e = this.params,
                t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    s = this.allowSlidePrev,
                    a = this.snapGrid;
                this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
            }
        }

        function O(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }

        function B() {
            var e = this.wrapperEl;
            this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
            var t = this.maxTranslate() - this.minTranslate();
            (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
        }
        var F = !1;

        function A() { }
        var V = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
            N = {
                update: E,
                translate: M,
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.params,
                            a = this.previousIndex;
                        if (!s.cssMode) {
                            s.autoHeight && this.updateAutoHeight();
                            var n = t;
                            if (n || (n = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                                if ("reset" === n) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === n ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                            }
                        }
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex,
                            a = this.params;
                        if (this.animating = !1, !a.cssMode) {
                            this.setTransition(0);
                            var n = t;
                            if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                                if ("reset" === n) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                            }
                        }
                    }
                },
                slide: k,
                loop: _,
                grabCursor: D,
                manipulation: $,
                events: {
                    attachEvents: function () {
                        var t = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            a = this.wrapperEl;
                        this.onTouchStart = z.bind(this), this.onTouchMove = L.bind(this), this.onTouchEnd = I.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = O.bind(this);
                        var n = !!t.nested;
                        if (!l.touch && l.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, n), e.addEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (l.touch) {
                                var r = !("touchstart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                s.addEventListener(i.start, this.onTouchStart, r), s.addEventListener(i.move, this.onTouchMove, l.passiveListener ? {
                                    passive: !1,
                                    capture: n
                                } : n), s.addEventListener(i.end, this.onTouchEnd, r), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, r), F || (e.addEventListener("touchstart", A), F = !0)
                            } (t.simulateTouch && !P.ios && !P.android || t.simulateTouch && !l.touch && P.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, n), e.addEventListener("mouseup", this.onTouchEnd, !1))
                        } (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(P.ios || P.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : this.on("observerUpdate", H, !0)
                    },
                    detachEvents: function () {
                        var t = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            a = this.wrapperEl,
                            n = !!t.nested;
                        if (!l.touch && l.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (l.touch) {
                                var r = !("onTouchStart" !== i.start || !l.passiveListener || !t.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                s.removeEventListener(i.start, this.onTouchStart, r), s.removeEventListener(i.move, this.onTouchMove, n), s.removeEventListener(i.end, this.onTouchEnd, r), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, r)
                            } (t.simulateTouch && !P.ios && !P.android || t.simulateTouch && !l.touch && P.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                        } (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(P.ios || P.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H)
                    }
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e = this.activeIndex,
                            t = this.initialized,
                            i = this.loopedSlides;
                        void 0 === i && (i = 0);
                        var s = this.params,
                            a = this.$el,
                            n = s.breakpoints;
                        if (n && (!n || 0 !== Object.keys(n).length)) {
                            var l = this.getBreakpoint(n);
                            if (l && this.currentBreakpoint !== l) {
                                var o = l in n ? n[l] : void 0;
                                o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach((function (e) {
                                    var t = o[e];
                                    void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                }));
                                var h = o || this.originalParams,
                                    d = s.slidesPerColumn > 1,
                                    c = h.slidesPerColumn > 1;
                                d && !c ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !d && c && (a.addClass(s.containerModifierClass + "multirow"), "column" === h.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                                var p = h.direction && h.direction !== s.direction,
                                    u = s.loop && (h.slidesPerView !== s.slidesPerView || p);
                                p && t && this.changeDirection(), r.extend(this.params, h), r.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }), this.currentBreakpoint = l, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", h)
                            }
                        }
                    },
                    getBreakpoint: function (e) {
                        if (e) {
                            var i = !1,
                                s = [];
                            Object.keys(e).forEach((function (e) {
                                s.push(e)
                            })), s.sort((function (e, t) {
                                return parseInt(e, 10) - parseInt(t, 10)
                            }));
                            for (var a = 0; a < s.length; a += 1) {
                                var n = s[a];
                                n <= t.innerWidth && (i = n)
                            }
                            return i || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e = this.params,
                            t = this.isLocked,
                            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function () {
                        var e = this.classNames,
                            t = this.params,
                            i = this.rtl,
                            s = this.$el,
                            a = [];
                        a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), P.android && a.push("android"), P.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function (i) {
                            e.push(t.containerModifierClass + i)
                        })), s.addClass(e.join(" "))
                    },
                    removeClasses: function () {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "))
                    }
                },
                images: {
                    loadImage: function (e, i, s, a, n, r) {
                        var l;

                        function o() {
                            r && r()
                        }
                        e.complete && n ? o() : i ? ((l = new t.Image).onload = o, l.onerror = o, a && (l.sizes = a), s && (l.srcset = s), i && (l.src = i)) : o()
                    },
                    preloadImages: function () {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var s = e.imagesToLoad[i];
                            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            R = {},
            G = function (e) {
                function t() {
                    for (var i, a, n, o = [], h = arguments.length; h--;) o[h] = arguments[h];
                    1 === o.length && o[0].constructor && o[0].constructor === Object ? n = o[0] : (a = (i = o)[0], n = i[1]), n || (n = {}), n = r.extend({}, n), a && !n.el && (n.el = a), e.call(this, n), Object.keys(N).forEach((function (e) {
                        Object.keys(N[e]).forEach((function (i) {
                            t.prototype[i] || (t.prototype[i] = N[e][i])
                        }))
                    }));
                    var d = this;
                    void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach((function (e) {
                        var t = d.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in n) || !("enabled" in s)) return;
                            !0 === n[i] && (n[i] = {
                                enabled: !0
                            }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {
                                enabled: !1
                            })
                        }
                    }));
                    var c = r.extend({}, V);
                    d.useModulesParams(c), d.params = r.extend({}, c, R, n), d.originalParams = r.extend({}, d.params), d.passedParams = r.extend({}, n), d.$ = s;
                    var p = s(d.params.el);
                    if (a = p[0]) {
                        if (p.length > 1) {
                            var u = [];
                            return p.each((function (e, i) {
                                var s = r.extend({}, n, {
                                    el: i
                                });
                                u.push(new t(s))
                            })), u
                        }
                        var m, v, f;
                        return a.swiper = d, p.data("swiper", d), a && a.shadowRoot && a.shadowRoot.querySelector ? (m = s(a.shadowRoot.querySelector("." + d.params.wrapperClass))).children = function (e) {
                            return p.children(e)
                        } : m = p.children("." + d.params.wrapperClass), r.extend(d, {
                            $el: p,
                            el: a,
                            $wrapperEl: m,
                            wrapperEl: m[0],
                            classNames: [],
                            slides: s(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === d.params.direction
                            },
                            isVertical: function () {
                                return "vertical" === d.params.direction
                            },
                            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === p.css("direction"),
                            rtlTranslate: "horizontal" === d.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === p.css("direction")),
                            wrongRTL: "-webkit-box" === m.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: d.params.allowSlideNext,
                            allowSlidePrev: d.params.allowSlidePrev,
                            touchEvents: (v = ["touchstart", "touchmove", "touchend", "touchcancel"], f = ["mousedown", "mousemove", "mouseup"], l.pointerEvents && (f = ["pointerdown", "pointermove", "pointerup"]), d.touchEventsTouch = {
                                start: v[0],
                                move: v[1],
                                end: v[2],
                                cancel: v[3]
                            }, d.touchEventsDesktop = {
                                start: f[0],
                                move: f[1],
                                end: f[2]
                            }, l.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: r.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: d.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), d.useModules(), d.params.init && d.init(), d
                    }
                }
                e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                var i = {
                    extendedDefaults: {
                        configurable: !0
                    },
                    defaults: {
                        configurable: !0
                    },
                    Class: {
                        configurable: !0
                    },
                    $: {
                        configurable: !0
                    }
                };
                return t.prototype.slidesPerViewDynamic = function () {
                    var e = this.params,
                        t = this.slides,
                        i = this.slidesGrid,
                        s = this.size,
                        a = this.activeIndex,
                        n = 1;
                    if (e.centeredSlides) {
                        for (var r, l = t[a].swiperSlideSize, o = a + 1; o < t.length; o += 1) t[o] && !r && (n += 1, (l += t[o].swiperSlideSize) > s && (r = !0));
                        for (var h = a - 1; h >= 0; h -= 1) t[h] && !r && (n += 1, (l += t[h].swiperSlideSize) > s && (r = !0))
                    } else
                        for (var d = a + 1; d < t.length; d += 1) i[d] - i[a] < s && (n += 1);
                    return n
                }, t.prototype.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                    }

                    function s() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }, t.prototype.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function (t, i) {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    })), this.emit("changeDirection"), t && this.update()), this
                }, t.prototype.init = function () {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, t.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        n = i.$wrapperEl,
                        l = i.slides;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                        i.off(e)
                    })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), r.deleteProps(i)), i.destroyed = !0), null
                }, t.extendDefaults = function (e) {
                    r.extend(R, e)
                }, i.extendedDefaults.get = function () {
                    return R
                }, i.defaults.get = function () {
                    return V
                }, i.Class.get = function () {
                    return e
                }, i.$.get = function () {
                    return s
                }, Object.defineProperties(t, i), t
            }(o),
            Y = {
                name: "device",
                proto: {
                    device: P
                },
                static: {
                    device: P
                }
            },
            X = {
                name: "support",
                proto: {
                    support: l
                },
                static: {
                    support: l
                }
            },
            q = {
                isEdge: !!t.navigator.userAgent.match(/Edge/g),
                isSafari: function () {
                    var e = t.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            },
            W = {
                name: "browser",
                proto: {
                    browser: q
                },
                static: {
                    browser: q
                }
            },
            j = {
                name: "resize",
                create: function () {
                    var e = this;
                    r.extend(e, {
                        resize: {
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function () {
                        t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            U = {
                func: t.MutationObserver || t.WebkitMutationObserver,
                attach: function (e, i) {
                    void 0 === i && (i = {});
                    var s = this,
                        a = new (0, U.func)((function (e) {
                            if (1 !== e.length) {
                                var i = function () {
                                    s.emit("observerUpdate", e[0])
                                };
                                t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                            } else s.emit("observerUpdate", e[0])
                        }));
                    a.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), s.observer.observers.push(a)
                },
                init: function () {
                    if (l.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach((function (e) {
                        e.disconnect()
                    })), this.observer.observers = []
                }
            },
            K = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function () {
                    r.extend(this, {
                        observer: {
                            init: U.init.bind(this),
                            attach: U.attach.bind(this),
                            destroy: U.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function () {
                        this.observer.init()
                    },
                    destroy: function () {
                        this.observer.destroy()
                    }
                }
            },
            Z = {
                update: function (e) {
                    var t = this,
                        i = t.params,
                        s = i.slidesPerView,
                        a = i.slidesPerGroup,
                        n = i.centeredSlides,
                        l = t.params.virtual,
                        o = l.addSlidesBefore,
                        h = l.addSlidesAfter,
                        d = t.virtual,
                        c = d.from,
                        p = d.to,
                        u = d.slides,
                        m = d.slidesGrid,
                        v = d.renderSlide,
                        f = d.offset;
                    t.updateActiveIndex();
                    var g, y, w, b = t.activeIndex || 0;
                    g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", n ? (y = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + h) : (y = s + (a - 1) + o, w = a + h);
                    var x = Math.max((b || 0) - w, 0),
                        C = Math.min((b || 0) + y, u.length - 1),
                        T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                    function S() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                    }
                    if (r.extend(t.virtual, {
                        from: x,
                        to: C,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), c === x && p === C && !e) return t.slidesGrid !== m && T !== f && t.slides.css(g, T + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                        offset: T,
                        from: x,
                        to: C,
                        slides: function () {
                            for (var e = [], t = x; t <= C; t += 1) e.push(u[t]);
                            return e
                        }()
                    }), void S();
                    var E = [],
                        M = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else
                        for (var k = c; k <= p; k += 1)(k < x || k > C) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                    for (var _ = 0; _ < u.length; _ += 1) _ >= x && _ <= C && (void 0 === p || e ? M.push(_) : (_ > p && M.push(_), _ < c && E.push(_)));
                    M.forEach((function (e) {
                        t.$wrapperEl.append(v(u[e], e))
                    })), E.sort((function (e, t) {
                        return t - e
                    })).forEach((function (e) {
                        t.$wrapperEl.prepend(v(u[e], e))
                    })), t.$wrapperEl.children(".swiper-slide").css(g, T + "px"), S()
                },
                renderSlide: function (e, t) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
                },
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e)
                        for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                    else this.virtual.slides.push(e);
                    this.virtual.update(!0)
                },
                prependSlide: function (e) {
                    var t = this.activeIndex,
                        i = t + 1,
                        s = 1;
                    if (Array.isArray(e)) {
                        for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                        i = t + e.length, s = e.length
                    } else this.virtual.slides.unshift(e);
                    if (this.params.virtual.cache) {
                        var n = this.virtual.cache,
                            r = {};
                        Object.keys(n).forEach((function (e) {
                            var t = n[e],
                                i = t.attr("data-swiper-slide-index");
                            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), r[parseInt(e, 10) + s] = t
                        })), this.virtual.cache = r
                    }
                    this.virtual.update(!0), this.slideTo(i, 0)
                },
                removeSlide: function (e) {
                    if (null != e) {
                        var t = this.activeIndex;
                        if (Array.isArray(e))
                            for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                        else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                        this.virtual.update(!0), this.slideTo(t, 0)
                    }
                },
                removeAllSlides: function () {
                    this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
                }
            },
            J = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0
                    }
                },
                create: function () {
                    r.extend(this, {
                        virtual: {
                            update: Z.update.bind(this),
                            appendSlide: Z.appendSlide.bind(this),
                            prependSlide: Z.prependSlide.bind(this),
                            removeSlide: Z.removeSlide.bind(this),
                            removeAllSlides: Z.removeAllSlides.bind(this),
                            renderSlide: Z.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function () {
                        if (this.params.virtual.enabled) {
                            this.classNames.push(this.params.containerModifierClass + "virtual");
                            var e = {
                                watchSlidesProgress: !0
                            };
                            r.extend(this.params, e), r.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                        }
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update()
                    }
                }
            },
            Q = {
                handle: function (i) {
                    var s = this.rtlTranslate,
                        a = i;
                    a.originalEvent && (a = a.originalEvent);
                    var n = a.keyCode || a.charCode;
                    if (!this.allowSlideNext && (this.isHorizontal() && 39 === n || this.isVertical() && 40 === n || 34 === n)) return !1;
                    if (!this.allowSlidePrev && (this.isHorizontal() && 37 === n || this.isVertical() && 38 === n || 33 === n)) return !1;
                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                        if (this.params.keyboard.onlyInViewport && (33 === n || 34 === n || 37 === n || 39 === n || 38 === n || 40 === n)) {
                            var r = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var l = t.innerWidth,
                                o = t.innerHeight,
                                h = this.$el.offset();
                            s && (h.left -= this.$el[0].scrollLeft);
                            for (var d = [
                                [h.left, h.top],
                                [h.left + this.width, h.top],
                                [h.left, h.top + this.height],
                                [h.left + this.width, h.top + this.height]
                            ], c = 0; c < d.length; c += 1) {
                                var p = d[c];
                                p[0] >= 0 && p[0] <= l && p[1] >= 0 && p[1] <= o && (r = !0)
                            }
                            if (!r) return
                        }
                        this.isHorizontal() ? (33 !== n && 34 !== n && 37 !== n && 39 !== n || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== n && 39 !== n || s) && (33 !== n && 37 !== n || !s) || this.slideNext(), (33 !== n && 37 !== n || s) && (34 !== n && 39 !== n || !s) || this.slidePrev()) : (33 !== n && 34 !== n && 38 !== n && 40 !== n || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== n && 40 !== n || this.slideNext(), 33 !== n && 38 !== n || this.slidePrev()), this.emit("keyPress", n)
                    }
                },
                enable: function () {
                    this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
                },
                disable: function () {
                    this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
                }
            },
            ee = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0
                    }
                },
                create: function () {
                    r.extend(this, {
                        keyboard: {
                            enabled: !1,
                            enable: Q.enable.bind(this),
                            disable: Q.disable.bind(this),
                            handle: Q.handle.bind(this)
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable()
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable()
                    }
                }
            },
            te = {
                lastScrollTime: r.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function () {
                    return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                        var t = "onwheel" in e;
                        if (!t) {
                            var i = e.createElement("div");
                            i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                        }
                        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                    }() ? "wheel" : "mousewheel"
                },
                normalize: function (e) {
                    var t = 0,
                        i = 0,
                        s = 0,
                        a = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: a
                    }
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1
                },
                handle: function (e) {
                    var t = e,
                        i = this,
                        s = i.params.mousewheel;
                    if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var a = 0,
                        n = i.rtlTranslate ? -1 : 1,
                        l = te.normalize(t);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                            a = l.pixelX * n
                        } else {
                            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                            a = l.pixelY
                        }
                    else a = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
                    if (0 === a) return !0;
                    if (s.invert && (a = -a), i.params.freeMode) {
                        var o = {
                            time: r.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a)
                        },
                            h = i.mousewheel.lastEventBeforeSnap,
                            d = h && o.time < h.time + 500 && o.delta <= h.delta && o.direction === h.direction;
                        if (!d) {
                            i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                            var c = i.getTranslate() + a * s.sensitivity,
                                p = i.isBeginning,
                                u = i.isEnd;
                            if (c >= i.minTranslate() && (c = i.minTranslate()), c <= i.maxTranslate() && (c = i.maxTranslate()), i.setTransition(0), i.setTranslate(c), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!p && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                                clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                                var m = i.mousewheel.recentWheelEvents;
                                m.length >= 15 && m.shift();
                                var v = m.length ? m[m.length - 1] : void 0,
                                    f = m[0];
                                if (m.push(o), v && (o.delta > v.delta || o.direction !== v.direction)) m.splice(0);
                                else if (m.length >= 15 && o.time - f.time < 500 && f.delta - o.delta >= 1 && o.delta <= 6) {
                                    var g = a > 0 ? .8 : .2;
                                    i.mousewheel.lastEventBeforeSnap = o, m.splice(0), i.mousewheel.timeout = r.nextTick((function () {
                                        i.slideToClosest(i.params.speed, !0, void 0, g)
                                    }), 0)
                                }
                                i.mousewheel.timeout || (i.mousewheel.timeout = r.nextTick((function () {
                                    i.mousewheel.lastEventBeforeSnap = o, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (d || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), c === i.minTranslate() || c === i.maxTranslate()) return !0
                        }
                    } else {
                        var y = {
                            time: r.now(),
                            delta: Math.abs(a),
                            direction: Math.sign(a),
                            raw: e
                        },
                            w = i.mousewheel.recentWheelEvents;
                        w.length >= 2 && w.shift();
                        var b = w.length ? w[w.length - 1] : void 0;
                        if (w.push(y), b ? (y.direction !== b.direction || y.delta > b.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                animateSlider: function (e) {
                    return e.delta >= 6 && r.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
                },
                releaseScroll: function (e) {
                    var t = this.params.mousewheel;
                    if (e.direction < 0) {
                        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                    } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                    return !1
                },
                enable: function () {
                    var e = te.event();
                    if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                    if (!e) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                },
                disable: function () {
                    var e = te.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                    if (!e) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                }
            },
            ie = {
                update: function () {
                    var e = this.params.navigation;
                    if (!this.params.loop) {
                        var t = this.navigation,
                            i = t.$nextEl,
                            s = t.$prevEl;
                        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                    }
                },
                onPrevClick: function (e) {
                    e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
                },
                onNextClick: function (e) {
                    e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
                },
                init: function () {
                    var e, t, i = this.params.navigation;
                    (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), r.extend(this.navigation, {
                        $nextEl: e,
                        nextEl: e && e[0],
                        $prevEl: t,
                        prevEl: t && t[0]
                    }))
                },
                destroy: function () {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
                }
            },
            se = {
                update: function () {
                    var e = this.rtl,
                        t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            n = this.pagination.$el,
                            r = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var l, o, h, d = this.pagination.bullets;
                            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), l = i - this.pagination.dynamicBulletIndex, h = ((o = l + (Math.min(d.length, t.dynamicMainBullets) - 1)) + l) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), n.length > 1) d.each((function (e, a) {
                                var n = s(a),
                                    r = n.index();
                                r === i && n.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= l && r <= o && n.addClass(t.bulletActiveClass + "-main"), r === l && n.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === o && n.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                            }));
                            else {
                                var c = d.eq(i),
                                    p = c.index();
                                if (c.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                    for (var u = d.eq(l), m = d.eq(o), v = l; v <= o; v += 1) d.eq(v).addClass(t.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (p >= d.length - t.dynamicMainBullets) {
                                            for (var f = t.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                                            d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                        } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), m.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                    else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), m.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                                }
                            }
                            if (t.dynamicBullets) {
                                var g = Math.min(d.length, t.dynamicMainBullets + 4),
                                    y = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - h * this.pagination.bulletSize,
                                    w = e ? "right" : "left";
                                d.css(this.isHorizontal() ? w : "top", y + "px")
                            }
                        }
                        if ("fraction" === t.type && (n.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), n.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                            var b;
                            b = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                            var x = (i + 1) / r,
                                C = 1,
                                T = 1;
                            "horizontal" === b ? C = x : T = x, n.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + C + ") scaleY(" + T + ")").transition(this.params.speed)
                        }
                        "custom" === t.type && t.renderCustom ? (n.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, n[0])) : this.emit("paginationUpdate", this, n[0]), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                    }
                },
                render: function () {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            s = "";
                        if ("bullets" === e.type) {
                            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, n = 0; n < a; n += 1) e.renderBullet ? s += e.renderBullet.call(this, n, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function () {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el) {
                        var i = s(t.el);
                        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                            t.preventDefault();
                            var i = s(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                        })), r.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function () {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            ae = {
                setTranslate: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.rtlTranslate,
                            i = this.progress,
                            s = e.dragSize,
                            a = e.trackSize,
                            n = e.$dragEl,
                            r = e.$el,
                            l = this.params.scrollbar,
                            o = s,
                            h = (a - s) * i;
                        t ? (h = -h) > 0 ? (o = s - h, h = 0) : -h + s > a && (o = a + h) : h < 0 ? (o = s + h, h = 0) : h + s > a && (o = a - h), this.isHorizontal() ? (n.transform("translate3d(" + h + "px, 0, 0)"), n[0].style.width = o + "px") : (n.transform("translate3d(0px, " + h + "px, 0)"), n[0].style.height = o + "px"), l.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                            r[0].style.opacity = 0, r.transition(400)
                        }), 1e3))
                    }
                },
                setTransition: function (e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = e.$dragEl,
                            i = e.$el;
                        t[0].style.width = "", t[0].style.height = "";
                        var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            n = this.size / this.virtualSize,
                            l = n * (a / this.size);
                        s = "auto" === this.params.scrollbar.dragSize ? a * n : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), r.extend(e, {
                            trackSize: a,
                            divider: n,
                            moveDivider: l,
                            dragSize: s
                        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                getPointerPosition: function (e) {
                    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                },
                setDragPosition: function (e) {
                    var t, i = this.scrollbar,
                        s = this.rtlTranslate,
                        a = i.$el,
                        n = i.dragSize,
                        r = i.trackSize,
                        l = i.dragStartPos;
                    t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== l ? l : n / 2)) / (r - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                    var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                    this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el,
                        n = i.$dragEl;
                    this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
                },
                onDragMove: function (e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        s = t.$el,
                        a = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = r.nextTick((function () {
                        a.css("opacity", 0), a.transition(400)
                    }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            a = this.params,
                            n = t.$el[0],
                            r = !(!l.passiveListener || !a.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            o = !(!l.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        l.touch ? (n.addEventListener(i.start, this.scrollbar.onDragStart, r), n.addEventListener(i.move, this.scrollbar.onDragMove, r), n.addEventListener(i.end, this.scrollbar.onDragEnd, o)) : (n.addEventListener(s.start, this.scrollbar.onDragStart, r), e.addEventListener(s.move, this.scrollbar.onDragMove, r), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
                    }
                },
                disableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            a = this.params,
                            n = t.$el[0],
                            r = !(!l.passiveListener || !a.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            o = !(!l.passiveListener || !a.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        l.touch ? (n.removeEventListener(i.start, this.scrollbar.onDragStart, r), n.removeEventListener(i.move, this.scrollbar.onDragMove, r), n.removeEventListener(i.end, this.scrollbar.onDragEnd, o)) : (n.removeEventListener(s.start, this.scrollbar.onDragStart, r), e.removeEventListener(s.move, this.scrollbar.onDragMove, r), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
                    }
                },
                init: function () {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.$el,
                            i = this.params.scrollbar,
                            a = s(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                        var n = a.find("." + this.params.scrollbar.dragClass);
                        0 === n.length && (n = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(n)), r.extend(e, {
                            $el: a,
                            el: a[0],
                            $dragEl: n,
                            dragEl: n[0]
                        }), i.draggable && e.enableDraggable()
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable()
                }
            },
            ne = {
                setTransform: function (e, t) {
                    var i = this.rtl,
                        a = s(e),
                        n = i ? -1 : 1,
                        r = a.attr("data-swiper-parallax") || "0",
                        l = a.attr("data-swiper-parallax-x"),
                        o = a.attr("data-swiper-parallax-y"),
                        h = a.attr("data-swiper-parallax-scale"),
                        d = a.attr("data-swiper-parallax-opacity");
                    if (l || o ? (l = l || "0", o = o || "0") : this.isHorizontal() ? (l = r, o = "0") : (o = r, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t * n + "%" : l * t * n + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                        var c = d - (d - 1) * (1 - Math.abs(t));
                        a[0].style.opacity = c
                    }
                    if (null == h) a.transform("translate3d(" + l + ", " + o + ", 0px)");
                    else {
                        var p = h - (h - 1) * (1 - Math.abs(t));
                        a.transform("translate3d(" + l + ", " + o + ", 0px) scale(" + p + ")")
                    }
                },
                setTranslate: function () {
                    var e = this,
                        t = e.$el,
                        i = e.slides,
                        a = e.progress,
                        n = e.snapGrid;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                        e.parallax.setTransform(i, a)
                    })), i.each((function (t, i) {
                        var r = i.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - a * (n.length - 1)), r = Math.min(Math.max(r, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                            e.parallax.setTransform(i, r)
                        }))
                    }))
                },
                setTransition: function (e) {
                    void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                        var a = s(i),
                            n = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), a.transition(n)
                    }))
                }
            },
            re = {
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        a = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
                },
                onGestureStart: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        a = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !l.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, a.scaleStart = re.getDistanceBetweenTouches(e)
                    }
                    a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
                },
                onGestureChange: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!l.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, s.scaleMove = re.getDistanceBetweenTouches(e)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = l.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!l.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !P.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        s = t.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (P.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        s = t.image,
                        a = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = r.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = r.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                        var n = s.width * t.scale,
                            l = s.height * t.scale;
                        if (!(n < i.slideWidth && l < i.slideHeight)) {
                            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function () {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        s = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var a = 300,
                            n = 300,
                            r = s.x * a,
                            l = i.currentX + r,
                            o = s.y * n,
                            h = i.currentY + o;
                        0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)), 0 !== s.y && (n = Math.abs((h - i.currentY) / s.y));
                        var d = Math.max(a, n);
                        i.currentX = l, i.currentY = h;
                        var c = i.width * e.scale,
                            p = i.height * e.scale;
                        i.minX = Math.min(t.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function () {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                },
                toggle: function (e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function (e) {
                    var t, i, a, n, r, l, o, h, d, c, p, u, m, v, f, g, y = this.zoom,
                        w = this.params.zoom,
                        b = y.gesture,
                        x = y.image;
                    b.$slideEl || (b.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas"), b.$imageWrapEl = b.$imageEl.parent("." + w.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), y.scale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, y.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, a = b.$slideEl.offset().left + f / 2 - t, n = b.$slideEl.offset().top + g / 2 - i, o = b.$imageEl[0].offsetWidth, h = b.$imageEl[0].offsetHeight, d = o * y.scale, c = h * y.scale, m = -(p = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(g / 2 - c / 2, 0)), (r = a * y.scale) < p && (r = p), r > m && (r = m), (l = n * y.scale) < u && (l = u), l > v && (l = v)) : (r = 0, l = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + l + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
                },
                out: function () {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function () {
                    var e = this.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var t = !("touchstart" !== this.touchEvents.start || !l.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                            i = !l.passiveListener || {
                                passive: !1,
                                capture: !0
                            };
                        l.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                    }
                },
                disable: function () {
                    var e = this.zoom;
                    if (e.enabled) {
                        this.zoom.enabled = !1;
                        var t = !("touchstart" !== this.touchEvents.start || !l.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                            i = !l.passiveListener || {
                                passive: !1,
                                capture: !0
                            };
                        l.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                    }
                }
            },
            le = {
                loadInSlide: function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this,
                        a = i.params.lazy;
                    if (void 0 !== e && 0 !== i.slides.length) {
                        var n = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                            r = n.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                        !n.hasClass(a.elementClass) || n.hasClass(a.loadedClass) || n.hasClass(a.loadingClass) || (r = r.add(n[0])), 0 !== r.length && r.each((function (e, r) {
                            var l = s(r);
                            l.addClass(a.loadingClass);
                            var o = l.attr("data-background"),
                                h = l.attr("data-src"),
                                d = l.attr("data-srcset"),
                                c = l.attr("data-sizes");
                            i.loadImage(l[0], h || o, d, c, !1, (function () {
                                if (null != i && i && (!i || i.params) && !i.destroyed) {
                                    if (o ? (l.css("background-image", 'url("' + o + '")'), l.removeAttr("data-background")) : (d && (l.attr("srcset", d), l.removeAttr("data-srcset")), c && (l.attr("sizes", c), l.removeAttr("data-sizes")), h && (l.attr("src", h), l.removeAttr("data-src"))), l.addClass(a.loadedClass).removeClass(a.loadingClass), n.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                        var e = n.attr("data-swiper-slide-index");
                                        if (n.hasClass(i.params.slideDuplicateClass)) {
                                            var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(s.index(), !1)
                                        } else {
                                            var r = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(r.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", n[0], l[0])
                                }
                            })), i.emit("lazyImageLoad", n[0], l[0])
                        }))
                    }
                },
                load: function () {
                    var e = this,
                        t = e.$wrapperEl,
                        i = e.params,
                        a = e.slides,
                        n = e.activeIndex,
                        r = e.virtual && i.virtual.enabled,
                        l = i.lazy,
                        o = i.slidesPerView;

                    function h(e) {
                        if (r) {
                            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                        } else if (a[e]) return !0;
                        return !1
                    }

                    function d(e) {
                        return r ? s(e).attr("data-swiper-slide-index") : s(e).index()
                    }
                    if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
                        var a = r ? s(i).attr("data-swiper-slide-index") : s(i).index();
                        e.lazy.loadInSlide(a)
                    }));
                    else if (o > 1)
                        for (var c = n; c < n + o; c += 1) h(c) && e.lazy.loadInSlide(c);
                    else e.lazy.loadInSlide(n);
                    if (l.loadPrevNext)
                        if (o > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                            for (var p = l.loadPrevNextAmount, u = o, m = Math.min(n + u + Math.max(p, u), a.length), v = Math.max(n - Math.max(u, p), 0), f = n + o; f < m; f += 1) h(f) && e.lazy.loadInSlide(f);
                            for (var g = v; g < n; g += 1) h(g) && e.lazy.loadInSlide(g)
                        } else {
                            var y = t.children("." + i.slideNextClass);
                            y.length > 0 && e.lazy.loadInSlide(d(y));
                            var w = t.children("." + i.slidePrevClass);
                            w.length > 0 && e.lazy.loadInSlide(d(w))
                        }
                }
            },
            oe = {
                LinearSpline: function (e, t) {
                    var i, s, a, n, r;
                    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                        return e ? (r = function (e, t) {
                            for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                            return i
                        }(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                    }, this
                },
                getInterpolateFunction: function (e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new oe.LinearSpline(this.slidesGrid, e.slidesGrid) : new oe.LinearSpline(this.snapGrid, e.snapGrid))
                },
                setTranslate: function (e, t) {
                    var i, s, a = this,
                        n = a.controller.control;

                    function r(e) {
                        var t = a.rtlTranslate ? -a.translate : a.translate;
                        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(n))
                        for (var l = 0; l < n.length; l += 1) n[l] !== t && n[l] instanceof G && r(n[l]);
                    else n instanceof G && t !== n && r(n)
                },
                setTransition: function (e, t) {
                    var i, s = this,
                        a = s.controller.control;

                    function n(t) {
                        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && r.nextTick((function () {
                            t.updateAutoHeight()
                        })), t.$wrapperEl.transitionEnd((function () {
                            a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                        })))
                    }
                    if (Array.isArray(a))
                        for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof G && n(a[i]);
                    else a instanceof G && t !== a && n(a)
                }
            },
            he = {
                makeElFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e
                },
                addElRole: function (e, t) {
                    return e.attr("role", t), e
                },
                addElLabel: function (e, t) {
                    return e.attr("aria-label", t), e
                },
                disableEl: function (e) {
                    return e.attr("aria-disabled", !0), e
                },
                enableEl: function (e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function (e) {
                    var t = this.params.a11y;
                    if (13 === e.keyCode) {
                        var i = s(e.target);
                        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                    }
                },
                notify: function (e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                updateNavigation: function () {
                    if (!this.params.loop && this.navigation) {
                        var e = this.navigation,
                            t = e.$nextEl,
                            i = e.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                    }
                },
                updatePagination: function () {
                    var e = this,
                        t = e.params.a11y;
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, a) {
                        var n = s(a);
                        e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
                    }))
                },
                init: function () {
                    this.$el.append(this.a11y.liveRegion);
                    var e, t, i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                },
                destroy: function () {
                    var e, t;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
                }
            },
            de = {
                init: function () {
                    if (this.params.history) {
                        if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        e.initialized = !0, e.paths = de.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
                },
                setHistoryPopState: function () {
                    this.history.paths = de.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
                },
                getPathValues: function () {
                    var e = t.location.pathname.slice(1).split("/").filter((function (e) {
                        return "" !== e
                    })),
                        i = e.length;
                    return {
                        key: e[i - 2],
                        value: e[i - 1]
                    }
                },
                setHistory: function (e, i) {
                    if (this.history.initialized && this.params.history.enabled) {
                        var s = this.slides.eq(i),
                            a = de.slugify(s.attr("data-history"));
                        t.location.pathname.includes(e) || (a = e + "/" + a);
                        var n = t.history.state;
                        n && n.value === a || (this.params.history.replaceState ? t.history.replaceState({
                            value: a
                        }, null, a) : t.history.pushState({
                            value: a
                        }, null, a))
                    }
                },
                slugify: function (e) {
                    return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function (e, t, i) {
                    if (t)
                        for (var s = 0, a = this.slides.length; s < a; s += 1) {
                            var n = this.slides.eq(s);
                            if (de.slugify(n.attr("data-history")) === t && !n.hasClass(this.params.slideDuplicateClass)) {
                                var r = n.index();
                                this.slideTo(r, e, i)
                            }
                        } else this.slideTo(0, e, i)
                }
            },
            ce = {
                onHashCange: function () {
                    var t = e.location.hash.replace("#", "");
                    if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                        if (void 0 === i) return;
                        this.slideTo(i)
                    }
                },
                setHash: function () {
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                        else {
                            var i = this.slides.eq(this.activeIndex),
                                s = i.attr("data-hash") || i.attr("data-history");
                            e.location.hash = s || ""
                        }
                },
                init: function () {
                    if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                        this.hashNavigation.initialized = !0;
                        var i = e.location.hash.replace("#", "");
                        if (i)
                            for (var a = 0, n = this.slides.length; a < n; a += 1) {
                                var r = this.slides.eq(a);
                                if ((r.attr("data-hash") || r.attr("data-history")) === i && !r.hasClass(this.params.slideDuplicateClass)) {
                                    var l = r.index();
                                    this.slideTo(l, 0, this.params.runCallbacksOnInit, !0)
                                }
                            }
                        this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
                }
            },
            pe = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = r.nextTick((function () {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                    }), i)
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function () {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function (e) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            ue = {
                setTranslate: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = this.slides.eq(t),
                            s = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (s -= this.translate);
                        var a = 0;
                        this.isHorizontal() || (a = s, s = 0);
                        var n = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: n
                        }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                    }
                },
                setTransition: function (e) {
                    var t = this,
                        i = t.slides,
                        s = t.$wrapperEl;
                    if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        i.transitionEnd((function () {
                            if (!a && t && !t.destroyed) {
                                a = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                            }
                        }))
                    }
                }
            },
            me = {
                setTranslate: function () {
                    var e, t = this.$el,
                        i = this.$wrapperEl,
                        a = this.slides,
                        n = this.width,
                        r = this.height,
                        l = this.rtlTranslate,
                        o = this.size,
                        h = this.params.cubeEffect,
                        d = this.isHorizontal(),
                        c = this.virtual && this.params.virtual.enabled,
                        p = 0;
                    h.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                        height: n + "px"
                    })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                    for (var u = 0; u < a.length; u += 1) {
                        var m = a.eq(u),
                            v = u;
                        c && (v = parseInt(m.attr("data-swiper-slide-index"), 10));
                        var f = 90 * v,
                            g = Math.floor(f / 360);
                        l && (f = -f, g = Math.floor(-f / 360));
                        var y = Math.max(Math.min(m[0].progress, 1), -1),
                            w = 0,
                            b = 0,
                            x = 0;
                        v % 4 == 0 ? (w = 4 * -g * o, x = 0) : (v - 1) % 4 == 0 ? (w = 0, x = 4 * -g * o) : (v - 2) % 4 == 0 ? (w = o + 4 * g * o, x = o) : (v - 3) % 4 == 0 && (w = -o, x = 3 * o + 4 * o * g), l && (w = -w), d || (b = w, w = 0);
                        var C = "rotateX(" + (d ? 0 : -f) + "deg) rotateY(" + (d ? f : 0) + "deg) translate3d(" + w + "px, " + b + "px, " + x + "px)";
                        if (y <= 1 && y > -1 && (p = 90 * v + 90 * y, l && (p = 90 * -v - 90 * y)), m.transform(C), h.slideShadows) {
                            var T = d ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                                S = d ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                            0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), m.append(T)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), m.append(S)), T.length && (T[0].style.opacity = Math.max(-y, 0)), S.length && (S[0].style.opacity = Math.max(y, 0))
                        }
                    }
                    if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                        "transform-origin": "50% 50% -" + o / 2 + "px"
                    }), h.shadow)
                        if (d) e.transform("translate3d(0px, " + (n / 2 + h.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")");
                        else {
                            var E = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                M = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                                k = h.shadowScale,
                                _ = h.shadowScale / M,
                                D = h.shadowOffset;
                            e.transform("scale3d(" + k + ", 1, " + _ + ") translate3d(0px, " + (r / 2 + D) + "px, " + -r / 2 / _ + "px) rotateX(-90deg)")
                        } var $ = q.isSafari || q.isUiWebView ? -o / 2 : 0;
                    i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)")
                },
                setTransition: function (e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
                }
            },
            ve = {
                setTranslate: function () {
                    for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                        var a = e.eq(i),
                            n = a[0].progress;
                        this.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                        var r = -180 * n,
                            l = 0,
                            o = -a[0].swiperSlideOffset,
                            h = 0;
                        if (this.isHorizontal() ? t && (r = -r) : (h = o, o = 0, l = -r, r = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, this.params.flipEffect.slideShadows) {
                            var d = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                c = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                            0 === d.length && (d = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === c.length && (c = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(c)), d.length && (d[0].style.opacity = Math.max(-n, 0)), c.length && (c[0].style.opacity = Math.max(n, 0))
                        }
                        a.transform("translate3d(" + o + "px, " + h + "px, 0px) rotateX(" + l + "deg) rotateY(" + r + "deg)")
                    }
                },
                setTransition: function (e) {
                    var t = this,
                        i = t.slides,
                        s = t.activeIndex,
                        a = t.$wrapperEl;
                    if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                        var n = !1;
                        i.eq(s).transitionEnd((function () {
                            if (!n && t && !t.destroyed) {
                                n = !0, t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                            }
                        }))
                    }
                }
            },
            fe = {
                setTranslate: function () {
                    for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, n = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), h = this.translate, d = o ? e / 2 - h : t / 2 - h, c = o ? r.rotate : -r.rotate, p = r.depth, u = 0, m = i.length; u < m; u += 1) {
                        var v = i.eq(u),
                            f = n[u],
                            g = (d - v[0].swiperSlideOffset - f / 2) / f * r.modifier,
                            y = o ? c * g : 0,
                            w = o ? 0 : c * g,
                            b = -p * Math.abs(g),
                            x = o ? 0 : r.stretch * g,
                            C = o ? r.stretch * g : 0;
                        Math.abs(C) < .001 && (C = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0);
                        var T = "translate3d(" + C + "px," + x + "px," + b + "px)  rotateX(" + w + "deg) rotateY(" + y + "deg)";
                        if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
                            var S = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                E = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(S)), 0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(E)), S.length && (S[0].style.opacity = g > 0 ? g : 0), E.length && (E[0].style.opacity = -g > 0 ? -g : 0)
                        }
                    } (l.pointerEvents || l.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
                },
                setTransition: function (e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            },
            ge = {
                init: function () {
                    var e = this.params.thumbs,
                        t = this.constructor;
                    e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, r.extend(this.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), r.extend(this.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })) : r.isObject(e.swiper) && (this.thumbs.swiper = new t(r.extend({}, e.swiper, {
                        watchSlidesVisibility: !0,
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
                },
                onThumbClick: function () {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var t = e.clickedIndex,
                            i = e.clickedSlide;
                        if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                            var a;
                            if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                                var n = this.activeIndex;
                                this.slides.eq(n).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, n = this.activeIndex);
                                var r = this.slides.eq(n).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                    l = this.slides.eq(n).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                                a = void 0 === r ? l : void 0 === l ? r : l - n < n - r ? l : r
                            }
                            this.slideTo(a)
                        }
                    }
                },
                update: function (e) {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                        if (this.realIndex !== t.realIndex) {
                            var s, a = t.activeIndex;
                            if (t.params.loop) {
                                t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                                var n = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                    r = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                                s = void 0 === n ? r : void 0 === r ? n : r - a == a - n ? a : r - a < a - n ? r : n
                            } else s = this.realIndex;
                            t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                        }
                        var l = 1,
                            o = this.params.thumbs.slideThumbActiveClass;
                        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (l = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (l = 1), l = Math.floor(l), t.slides.removeClass(o), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                            for (var h = 0; h < l; h += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + h) + '"]').addClass(o);
                        else
                            for (var d = 0; d < l; d += 1) t.slides.eq(this.realIndex + d).addClass(o)
                    }
                }
            },
            ye = [Y, X, W, j, K, J, ee, {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function () {
                    r.extend(this, {
                        mousewheel: {
                            enabled: !1,
                            enable: te.enable.bind(this),
                            disable: te.disable.bind(this),
                            handle: te.handle.bind(this),
                            handleMouseEnter: te.handleMouseEnter.bind(this),
                            handleMouseLeave: te.handleMouseLeave.bind(this),
                            animateSlider: te.animateSlider.bind(this),
                            releaseScroll: te.releaseScroll.bind(this),
                            lastScrollTime: r.now(),
                            lastEventBeforeSnap: void 0,
                            recentWheelEvents: []
                        }
                    })
                },
                on: {
                    init: function () {
                        !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                    },
                    destroy: function () {
                        this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                    }
                }
            }, {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            navigation: {
                                init: ie.init.bind(this),
                                update: ie.update.bind(this),
                                destroy: ie.destroy.bind(this),
                                onNextClick: ie.onNextClick.bind(this),
                                onPrevClick: ie.onPrevClick.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.navigation.init(), this.navigation.update()
                        },
                        toEdge: function () {
                            this.navigation.update()
                        },
                        fromEdge: function () {
                            this.navigation.update()
                        },
                        destroy: function () {
                            this.navigation.destroy()
                        },
                        click: function (e) {
                            var t, i = this.navigation,
                                a = i.$nextEl,
                                n = i.$prevEl;
                            !this.params.navigation.hideOnClick || s(e.target).is(n) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : n && (t = n.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
                        }
                    }
                }, {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (e) {
                                return e
                            },
                            formatFractionTotal: function (e) {
                                return e
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            pagination: {
                                init: se.init.bind(this),
                                render: se.render.bind(this),
                                update: se.update.bind(this),
                                destroy: se.destroy.bind(this),
                                dynamicBulletIndex: 0
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.pagination.init(), this.pagination.render(), this.pagination.update()
                        },
                        activeIndexChange: function () {
                            (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                        },
                        snapIndexChange: function () {
                            this.params.loop || this.pagination.update()
                        },
                        slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(), this.pagination.update())
                        },
                        snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(), this.pagination.update())
                        },
                        destroy: function () {
                            this.pagination.destroy()
                        },
                        click: function (e) {
                            this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                        }
                    }
                }, {
                    name: "scrollbar",
                    params: {
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            scrollbar: {
                                init: ae.init.bind(this),
                                destroy: ae.destroy.bind(this),
                                updateSize: ae.updateSize.bind(this),
                                setTranslate: ae.setTranslate.bind(this),
                                setTransition: ae.setTransition.bind(this),
                                enableDraggable: ae.enableDraggable.bind(this),
                                disableDraggable: ae.disableDraggable.bind(this),
                                setDragPosition: ae.setDragPosition.bind(this),
                                getPointerPosition: ae.getPointerPosition.bind(this),
                                onDragStart: ae.onDragStart.bind(this),
                                onDragMove: ae.onDragMove.bind(this),
                                onDragEnd: ae.onDragEnd.bind(this),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                        },
                        update: function () {
                            this.scrollbar.updateSize()
                        },
                        resize: function () {
                            this.scrollbar.updateSize()
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize()
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate()
                        },
                        setTransition: function (e) {
                            this.scrollbar.setTransition(e)
                        },
                        destroy: function () {
                            this.scrollbar.destroy()
                        }
                    }
                }, {
                    name: "parallax",
                    params: {
                        parallax: {
                            enabled: !1
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            parallax: {
                                setTransform: ne.setTransform.bind(this),
                                setTranslate: ne.setTranslate.bind(this),
                                setTransition: ne.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                        },
                        init: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTranslate: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate()
                        },
                        setTransition: function (e) {
                            this.params.parallax.enabled && this.parallax.setTransition(e)
                        }
                    }
                }, {
                    name: "zoom",
                    params: {
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed"
                        }
                    },
                    create: function () {
                        var e = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    $slideEl: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    $imageEl: void 0,
                                    $imageWrapEl: void 0,
                                    maxRatio: 3
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                }
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                            t[i] = re[i].bind(e)
                        })), r.extend(e, {
                            zoom: t
                        });
                        var i = 1;
                        Object.defineProperty(e.zoom, "scale", {
                            get: function () {
                                return i
                            },
                            set: function (t) {
                                if (i !== t) {
                                    var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                        a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                    e.emit("zoomChange", t, s, a)
                                }
                                i = t
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable()
                        },
                        destroy: function () {
                            this.zoom.disable()
                        },
                        touchStart: function (e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e)
                        },
                        touchEnd: function (e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e)
                        },
                        doubleTap: function (e) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                        },
                        transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                        },
                        slideChange: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                        }
                    }
                }, {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            lazy: {
                                initialImageLoaded: !1,
                                load: le.load.bind(this),
                                loadInSlide: le.loadInSlide.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                        },
                        init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                        },
                        scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                        },
                        resize: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load()
                        },
                        transitionStart: function () {
                            this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                        },
                        transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                        },
                        slideChange: function () {
                            this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                        }
                    }
                }, {
                    name: "controller",
                    params: {
                        controller: {
                            control: void 0,
                            inverse: !1,
                            by: "slide"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            controller: {
                                control: this.params.controller.control,
                                getInterpolateFunction: oe.getInterpolateFunction.bind(this),
                                setTranslate: oe.setTranslate.bind(this),
                                setTransition: oe.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        resize: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        observerUpdate: function () {
                            this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                        },
                        setTranslate: function (e, t) {
                            this.controller.control && this.controller.setTranslate(e, t)
                        },
                        setTransition: function (e, t) {
                            this.controller.control && this.controller.setTransition(e, t)
                        }
                    }
                }, {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}"
                        }
                    },
                    create: function () {
                        var e = this;
                        r.extend(e, {
                            a11y: {
                                liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                            }
                        }), Object.keys(he).forEach((function (t) {
                            e.a11y[t] = he[t].bind(e)
                        }))
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                        },
                        toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation()
                        },
                        paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination()
                        },
                        destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy()
                        }
                    }
                }, {
                    name: "history",
                    params: {
                        history: {
                            enabled: !1,
                            replaceState: !1,
                            key: "slides"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            history: {
                                init: de.init.bind(this),
                                setHistory: de.setHistory.bind(this),
                                setHistoryPopState: de.setHistoryPopState.bind(this),
                                scrollToSlide: de.scrollToSlide.bind(this),
                                destroy: de.destroy.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init()
                        },
                        destroy: function () {
                            this.params.history.enabled && this.history.destroy()
                        },
                        transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                        },
                        slideChange: function () {
                            this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                        }
                    }
                }, {
                    name: "hash-navigation",
                    params: {
                        hashNavigation: {
                            enabled: !1,
                            replaceState: !1,
                            watchState: !1
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            hashNavigation: {
                                initialized: !1,
                                init: ce.init.bind(this),
                                destroy: ce.destroy.bind(this),
                                setHash: ce.setHash.bind(this),
                                onHashCange: ce.onHashCange.bind(this)
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init()
                        },
                        destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                        },
                        transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash()
                        },
                        slideChange: function () {
                            this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                        }
                    }
                }, {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function () {
                        var e = this;
                        r.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: pe.run.bind(e),
                                start: pe.start.bind(e),
                                stop: pe.stop.bind(e),
                                pause: pe.pause.bind(e),
                                onVisibilityChange: function () {
                                    "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                                },
                                onTransitionEnd: function (t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                        },
                        beforeTransitionStart: function (e, t) {
                            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                        },
                        sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                        },
                        touchEnd: function () {
                            this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                        },
                        destroy: function () {
                            this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                        }
                    }
                }, {
                    name: "effect-fade",
                    params: {
                        fadeEffect: {
                            crossFade: !1
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            fadeEffect: {
                                setTranslate: ue.setTranslate.bind(this),
                                setTransition: ue.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("fade" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "fade");
                                var e = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                r.extend(this.params, e), r.extend(this.originalParams, e)
                            }
                        },
                        setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate()
                        },
                        setTransition: function (e) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-cube",
                    params: {
                        cubeEffect: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            cubeEffect: {
                                setTranslate: me.setTranslate.bind(this),
                                setTransition: me.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("cube" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var e = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0
                                };
                                r.extend(this.params, e), r.extend(this.originalParams, e)
                            }
                        },
                        setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate()
                        },
                        setTransition: function (e) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-flip",
                    params: {
                        flipEffect: {
                            slideShadows: !0,
                            limitRotation: !0
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            flipEffect: {
                                setTranslate: ve.setTranslate.bind(this),
                                setTransition: ve.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            if ("flip" === this.params.effect) {
                                this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                                var e = {
                                    slidesPerView: 1,
                                    slidesPerColumn: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !0
                                };
                                r.extend(this.params, e), r.extend(this.originalParams, e)
                            }
                        },
                        setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate()
                        },
                        setTransition: function (e) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "effect-coverflow",
                    params: {
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            coverflowEffect: {
                                setTranslate: fe.setTranslate.bind(this),
                                setTransition: fe.setTransition.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                        },
                        setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                        },
                        setTransition: function (e) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                        }
                    }
                }, {
                    name: "thumbs",
                    params: {
                        thumbs: {
                            multipleActiveThumbs: !0,
                            swiper: null,
                            slideThumbActiveClass: "swiper-slide-thumb-active",
                            thumbsContainerClass: "swiper-container-thumbs"
                        }
                    },
                    create: function () {
                        r.extend(this, {
                            thumbs: {
                                swiper: null,
                                init: ge.init.bind(this),
                                update: ge.update.bind(this),
                                onThumbClick: ge.onThumbClick.bind(this)
                            }
                        })
                    },
                    on: {
                        beforeInit: function () {
                            var e = this.params.thumbs;
                            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                        },
                        slideChange: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        update: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        resize: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        observerUpdate: function () {
                            this.thumbs.swiper && this.thumbs.update()
                        },
                        setTransition: function (e) {
                            var t = this.thumbs.swiper;
                            t && t.setTransition(e)
                        },
                        beforeDestroy: function () {
                            var e = this.thumbs.swiper;
                            e && this.thumbs.swiperCreated && e && e.destroy()
                        }
                    }
                }];
        return void 0 === G.use && (G.use = G.Class.use, G.installModule = G.Class.installModule), G.use(ye), G
    })),
    function (e, t, i) {
        var s, a, n, r, l, o, h;
        r = !1, l = {
            classes: "",
            inline: !1,
            language: "ru",
            startDate: new Date,
            firstDay: "",
            weekends: [6, 0],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "@",
            toggleSelected: !0,
            keyboardNav: !0,
            position: "bottom left",
            offset: 12,
            view: "days",
            minView: "days",
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ",",
            range: !1,
            todayButton: !1,
            clearButton: !1,
            showEvent: "focus",
            autoClose: !1,
            monthsField: "monthsShort",
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: "",
            onShow: "",
            onHide: "",
            onChangeMonth: "",
            onChangeYear: "",
            onChangeDecade: "",
            onChangeView: "",
            onRenderCell: ""
        }, o = {
            ctrlRight: [17, 39],
            ctrlUp: [17, 38],
            ctrlLeft: [17, 37],
            ctrlDown: [17, 40],
            shiftRight: [16, 39],
            shiftUp: [16, 38],
            shiftLeft: [16, 37],
            shiftDown: [16, 40],
            altUp: [18, 38],
            altRight: [18, 39],
            altLeft: [18, 37],
            altDown: [18, 40],
            ctrlShiftUp: [16, 17, 38]
        }, (n = h = function (e, i) {
            this.el = e, this.$el = t(e), this.opts = t.extend(!0, {}, l, i, this.$el.data()), null == s && (s = t("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? t(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
        }).prototype = {
                VERSION: "2.2.0",
                viewIndexes: ["days", "months", "years"],
                init: function () {
                    r || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new t.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new t.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new t.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
                },
                _createShortCuts: function () {
                    this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
                },
                _bindEvents: function () {
                    this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), t(e).on("resize.adp", this._onResize.bind(this)), t("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
                },
                _bindKeyboardEvents: function () {
                    this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
                },
                _bindTimepickerEvents: function () {
                    this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
                },
                isWeekend: function (e) {
                    return -1 !== this.opts.weekends.indexOf(e)
                },
                _defineLocale: function (e) {
                    "string" == typeof e ? (this.loc = t.fn.datepicker.language[e], this.loc || (console.warn("Can't find language \"" + e + '" in Datepicker.language, will use "ru" instead'), this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru)), this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru, t.fn.datepicker.language[e])) : this.loc = t.extend(!0, {}, t.fn.datepicker.language.ru, e), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                    var i = this._getWordBoundaryRegExp;
                    (this.loc.timeFormat.match(i("aa")) || this.loc.timeFormat.match(i("AA"))) && (this.ampm = !0)
                },
                _buildDatepickersContainer: function () {
                    r = !0, s.append('<div class="datepickers-container" id="datepickers-container"></div>'), a = t("#datepickers-container")
                },
                _buildBaseHtml: function () {
                    var e, i = t('<div class="datepicker-inline">');
                    e = "INPUT" == this.el.nodeName ? this.opts.inline ? i.insertAfter(this.$el) : a : i.appendTo(this.$el), this.$datepicker = t('<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>').appendTo(e), this.$content = t(".datepicker--content", this.$datepicker), this.$nav = t(".datepicker--nav", this.$datepicker)
                },
                _triggerOnChange: function () {
                    if (!this.selectedDates.length) {
                        if ("" === this._prevOnSelectValue) return;
                        return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                    }
                    var e, t = this.selectedDates,
                        i = n.getParsedDate(t[0]),
                        s = this,
                        a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                    e = t.map((function (e) {
                        return s.formatDate(s.loc.dateFormat, e)
                    })).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (a = t.map((function (e) {
                        var t = n.getParsedDate(e);
                        return new Date(t.year, t.month, t.date, t.hours, t.minutes)
                    }))), this._prevOnSelectValue = e, this.opts.onSelect(e, a, this)
                },
                next: function () {
                    var e = this.parsedDate,
                        t = this.opts;
                    switch (this.view) {
                        case "days":
                            this.date = new Date(e.year, e.month + 1, 1), t.onChangeMonth && t.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                            break;
                        case "months":
                            this.date = new Date(e.year + 1, e.month, 1), t.onChangeYear && t.onChangeYear(this.parsedDate.year);
                            break;
                        case "years":
                            this.date = new Date(e.year + 10, 0, 1), t.onChangeDecade && t.onChangeDecade(this.curDecade)
                    }
                },
                prev: function () {
                    var e = this.parsedDate,
                        t = this.opts;
                    switch (this.view) {
                        case "days":
                            this.date = new Date(e.year, e.month - 1, 1), t.onChangeMonth && t.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                            break;
                        case "months":
                            this.date = new Date(e.year - 1, e.month, 1), t.onChangeYear && t.onChangeYear(this.parsedDate.year);
                            break;
                        case "years":
                            this.date = new Date(e.year - 10, 0, 1), t.onChangeDecade && t.onChangeDecade(this.curDecade)
                    }
                },
                formatDate: function (e, t) {
                    t = t || this.date;
                    var i, s = e,
                        a = this._getWordBoundaryRegExp,
                        r = this.loc,
                        l = n.getLeadingZeroNum,
                        o = n.getDecade(t),
                        h = n.getParsedDate(t),
                        d = h.fullHours,
                        c = h.hours,
                        p = e.match(a("aa")) || e.match(a("AA")),
                        u = "am";
                    switch (this.opts.timepicker && this.timepicker && p && (d = l((i = this.timepicker._getValidHoursFromDate(t, p)).hours), c = i.hours, u = i.dayPeriod), !0) {
                        case /@/.test(s):
                            s = s.replace(/@/, t.getTime());
                        case /aa/.test(s):
                            s = s.replace(a("aa"), u);
                        case /AA/.test(s):
                            s = s.replace(a("AA"), u.toUpperCase());
                        case /dd/.test(s):
                            s = s.replace(a("dd"), h.fullDate);
                        case /d/.test(s):
                            s = s.replace(a("d"), h.date);
                        case /DD/.test(s):
                            s = s.replace(a("DD"), r.days[h.day]);
                        case /D/.test(s):
                            s = s.replace(a("D"), r.daysShort[h.day]);
                        case /mm/.test(s):
                            s = s.replace(a("mm"), h.fullMonth);
                        case /m/.test(s):
                            s = s.replace(a("m"), h.month + 1);
                        case /MM/.test(s):
                            s = s.replace(a("MM"), this.loc.months[h.month]);
                        case /M/.test(s):
                            s = s.replace(a("M"), r.monthsShort[h.month]);
                        case /ii/.test(s):
                            s = s.replace(a("ii"), h.fullMinutes);
                        case /i/.test(s):
                            s = s.replace(a("i"), h.minutes);
                        case /hh/.test(s):
                            s = s.replace(a("hh"), d);
                        case /h/.test(s):
                            s = s.replace(a("h"), c);
                        case /yyyy/.test(s):
                            s = s.replace(a("yyyy"), h.year);
                        case /yyyy1/.test(s):
                            s = s.replace(a("yyyy1"), o[0]);
                        case /yyyy2/.test(s):
                            s = s.replace(a("yyyy2"), o[1]);
                        case /yy/.test(s):
                            s = s.replace(a("yy"), h.year.toString().slice(-2))
                    }
                    return s
                },
                _getWordBoundaryRegExp: function (e) {
                    return new RegExp("\\b(?=[a-zA-Z0-9Ã¡Ã¤Ã¶Ã¼ÃºÃÃŸÃ‰Ã„Ã–ÃœÃš<])" + e + "(?![>a-zA-Z0-9Ã¡Ã¤Ã¶Ã¼ÃÃŸÃ‰Ã„Ã–ÃœÃš])")
                },
                selectDate: function (e) {
                    var t = this,
                        i = t.opts,
                        s = t.parsedDate,
                        a = t.selectedDates.length,
                        r = "";
                    if (Array.isArray(e)) e.forEach((function (e) {
                        t.selectDate(e)
                    }));
                    else if (e instanceof Date) {
                        if (this.lastSelectedDate = e, this.timepicker && this.timepicker._setTime(e), t._trigger("selectDate", e), this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), "days" == t.view && e.getMonth() != s.month && i.moveToOtherMonthsOnSelect && (r = new Date(e.getFullYear(), e.getMonth(), 1)), "years" == t.view && e.getFullYear() != s.year && i.moveToOtherYearsOnSelect && (r = new Date(e.getFullYear(), 0, 1)), r && (t.silent = !0, t.date = r, t.silent = !1, t.nav._render()), i.multipleDates && !i.range) {
                            if (a === i.multipleDates) return;
                            t._isSelected(e) || t.selectedDates.push(e)
                        } else i.range ? 2 == a ? (t.selectedDates = [e], t.minRange = e, t.maxRange = "") : 1 == a ? (t.selectedDates.push(e), t.maxRange ? t.minRange = e : t.maxRange = e, n.bigger(t.maxRange, t.minRange) && (t.maxRange = t.minRange, t.minRange = e), t.selectedDates = [t.minRange, t.maxRange]) : (t.selectedDates = [e], t.minRange = e) : t.selectedDates = [e];
                        t._setInputValue(), i.onSelect && t._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == t.selectedDates.length && t.hide() : t.hide()), t.views[this.currentView]._render()
                    }
                },
                removeDate: function (e) {
                    var t = this.selectedDates,
                        i = this;
                    if (e instanceof Date) return t.some((function (s, a) {
                        if (n.isSame(s, e)) return t.splice(a, 1), i.selectedDates.length ? i.lastSelectedDate = i.selectedDates[i.selectedDates.length - 1] : (i.minRange = "", i.maxRange = "", i.lastSelectedDate = ""), i.views[i.currentView]._render(), i._setInputValue(), i.opts.onSelect && i._triggerOnChange(), !0
                    }))
                },
                today: function () {
                    this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
                },
                clear: function () {
                    this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
                },
                update: function (e, i) {
                    var s = arguments.length,
                        a = this.lastSelectedDate;
                    return 2 == s ? this.opts[e] = i : 1 == s && "object" == typeof e && (this.opts = t.extend(!0, this.opts, e)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (a && this.timepicker._handleDate(a), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), a && (a.setHours(this.timepicker.hours), a.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
                },
                _syncWithMinMaxDates: function () {
                    var e = this.date.getTime();
                    this.silent = !0, this.minTime > e && (this.date = this.minDate), this.maxTime < e && (this.date = this.maxDate), this.silent = !1
                },
                _isSelected: function (e, t) {
                    var i = !1;
                    return this.selectedDates.some((function (s) {
                        if (n.isSame(s, e, t)) return i = s, !0
                    })), i
                },
                _setInputValue: function () {
                    var e, t = this,
                        i = t.opts,
                        s = t.loc.dateFormat,
                        a = i.altFieldDateFormat,
                        n = t.selectedDates.map((function (e) {
                            return t.formatDate(s, e)
                        }));
                    i.altField && t.$altField.length && (e = (e = this.selectedDates.map((function (e) {
                        return t.formatDate(a, e)
                    }))).join(this.opts.multipleDatesSeparator), this.$altField.val(e)), n = n.join(this.opts.multipleDatesSeparator), this.$el.val(n)
                },
                _isInRange: function (e, t) {
                    var i = e.getTime(),
                        s = n.getParsedDate(e),
                        a = n.getParsedDate(this.minDate),
                        r = n.getParsedDate(this.maxDate),
                        l = new Date(s.year, s.month, a.date).getTime(),
                        o = new Date(s.year, s.month, r.date).getTime(),
                        h = {
                            day: i >= this.minTime && i <= this.maxTime,
                            month: l >= this.minTime && o <= this.maxTime,
                            year: s.year >= a.year && s.year <= r.year
                        };
                    return t ? h[t] : h.day
                },
                _getDimensions: function (e) {
                    var t = e.offset();
                    return {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        left: t.left,
                        top: t.top
                    }
                },
                _getDateFromCell: function (e) {
                    var t = this.parsedDate,
                        i = e.data("year") || t.year,
                        s = null == e.data("month") ? t.month : e.data("month"),
                        a = e.data("date") || 1;
                    return new Date(i, s, a)
                },
                _setPositionClasses: function (e) {
                    var t = (e = e.split(" "))[0],
                        i = "datepicker -" + t + "-" + e[1] + "- -from-" + t + "-";
                    this.visible && (i += " active"), this.$datepicker.removeAttr("class").addClass(i)
                },
                setPosition: function (e) {
                    e = e || this.opts.position;
                    var t, i, s = this._getDimensions(this.$el),
                        a = this._getDimensions(this.$datepicker),
                        n = e.split(" "),
                        r = this.opts.offset,
                        l = n[0],
                        o = n[1];
                    switch (l) {
                        case "top":
                            t = s.top - a.height - r;
                            break;
                        case "right":
                            i = s.left + s.width + r;
                            break;
                        case "bottom":
                            t = s.top + s.height + r;
                            break;
                        case "left":
                            i = s.left - a.width - r
                    }
                    switch (o) {
                        case "top":
                            t = s.top;
                            break;
                        case "right":
                            i = s.left + s.width - a.width;
                            break;
                        case "bottom":
                            t = s.top + s.height - a.height;
                            break;
                        case "left":
                            i = s.left;
                            break;
                        case "center":
                            /left|right/.test(l) ? t = s.top + s.height / 2 - a.height / 2 : i = s.left + s.width / 2 - a.width / 2
                    }
                    this.$datepicker.css({
                        left: i,
                        top: t
                    })
                },
                show: function () {
                    var e = this.opts.onShow;
                    this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, e && this._bindVisionEvents(e)
                },
                hide: function () {
                    var e = this.opts.onHide;
                    this.$datepicker.removeClass("active").css({
                        left: "-100000px"
                    }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), e && this._bindVisionEvents(e)
                },
                down: function (e) {
                    this._changeView(e, "down")
                },
                up: function (e) {
                    this._changeView(e, "up")
                },
                _bindVisionEvents: function (e) {
                    this.$datepicker.off("transitionend.dp"), e(this, !1), this.$datepicker.one("transitionend.dp", e.bind(this, this, !0))
                },
                _changeView: function (e, t) {
                    e = e || this.focused || this.date;
                    var i = "up" == t ? this.viewIndex + 1 : this.viewIndex - 1;
                    i > 2 && (i = 2), i < 0 && (i = 0), this.silent = !0, this.date = new Date(e.getFullYear(), e.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
                },
                _handleHotKey: function (e) {
                    var t, i, s, a = n.getParsedDate(this._getFocusedDate()),
                        r = this.opts,
                        l = !1,
                        o = !1,
                        h = !1,
                        d = a.year,
                        c = a.month,
                        p = a.date;
                    switch (e) {
                        case "ctrlRight":
                        case "ctrlUp":
                            c += 1, l = !0;
                            break;
                        case "ctrlLeft":
                        case "ctrlDown":
                            c -= 1, l = !0;
                            break;
                        case "shiftRight":
                        case "shiftUp":
                            o = !0, d += 1;
                            break;
                        case "shiftLeft":
                        case "shiftDown":
                            o = !0, d -= 1;
                            break;
                        case "altRight":
                        case "altUp":
                            h = !0, d += 10;
                            break;
                        case "altLeft":
                        case "altDown":
                            h = !0, d -= 10;
                            break;
                        case "ctrlShiftUp":
                            this.up()
                    }
                    s = n.getDaysCount(new Date(d, c)), i = new Date(d, c, p), s < p && (p = s), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, t = n.getParsedDate(i), l && r.onChangeMonth && r.onChangeMonth(t.month, t.year), o && r.onChangeYear && r.onChangeYear(t.year), h && r.onChangeDecade && r.onChangeDecade(this.curDecade)
                },
                _registerKey: function (e) {
                    this.keys.some((function (t) {
                        return t == e
                    })) || this.keys.push(e)
                },
                _unRegisterKey: function (e) {
                    var t = this.keys.indexOf(e);
                    this.keys.splice(t, 1)
                },
                _isHotKeyPressed: function () {
                    var e, t = !1,
                        i = this.keys.sort();
                    for (var s in o) e = o[s], i.length == e.length && e.every((function (e, t) {
                        return e == i[t]
                    })) && (this._trigger("hotKey", s), t = !0);
                    return t
                },
                _trigger: function (e, t) {
                    this.$el.trigger(e, t)
                },
                _focusNextCell: function (e, t) {
                    t = t || this.cellType;
                    var i = n.getParsedDate(this._getFocusedDate()),
                        s = i.year,
                        a = i.month,
                        r = i.date;
                    if (!this._isHotKeyPressed()) {
                        switch (e) {
                            case 37:
                                "day" == t && (r -= 1), "month" == t && (a -= 1), "year" == t && (s -= 1);
                                break;
                            case 38:
                                "day" == t && (r -= 7), "month" == t && (a -= 3), "year" == t && (s -= 4);
                                break;
                            case 39:
                                "day" == t && (r += 1), "month" == t && (a += 1), "year" == t && (s += 1);
                                break;
                            case 40:
                                "day" == t && (r += 7), "month" == t && (a += 3), "year" == t && (s += 4)
                        }
                        var l = new Date(s, a, r);
                        l.getTime() < this.minTime ? l = this.minDate : l.getTime() > this.maxTime && (l = this.maxDate), this.focused = l
                    }
                },
                _getFocusedDate: function () {
                    var e = this.focused || this.selectedDates[this.selectedDates.length - 1],
                        t = this.parsedDate;
                    if (!e) switch (this.view) {
                        case "days":
                            e = new Date(t.year, t.month, (new Date).getDate());
                            break;
                        case "months":
                            e = new Date(t.year, t.month, 1);
                            break;
                        case "years":
                            e = new Date(t.year, 0, 1)
                    }
                    return e
                },
                _getCell: function (e, i) {
                    i = i || this.cellType;
                    var s, a = n.getParsedDate(e),
                        r = '.datepicker--cell[data-year="' + a.year + '"]';
                    switch (i) {
                        case "month":
                            r = '[data-month="' + a.month + '"]';
                            break;
                        case "day":
                            r += '[data-month="' + a.month + '"][data-date="' + a.date + '"]'
                    }
                    return (s = this.views[this.currentView].$el.find(r)).length ? s : t("")
                },
                destroy: function () {
                    this.$el.off(".adp").data("datepicker", ""), this.selectedDates = [], this.focused = "", this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this.opts.inline || !this.elIsInput ? this.$datepicker.closest(".datepicker-inline").remove() : this.$datepicker.remove()
                },
                _handleAlreadySelectedDates: function (e, t) {
                    this.opts.range ? this.opts.toggleSelected ? this.removeDate(t) : 2 != this.selectedDates.length && this._trigger("clickCell", t) : this.opts.toggleSelected && this.removeDate(t), this.opts.toggleSelected || (this.lastSelectedDate = e, this.opts.timepicker && (this.timepicker._setTime(e), this.timepicker.update()))
                },
                _onShowEvent: function (e) {
                    this.visible || this.show()
                },
                _onBlur: function () {
                    !this.inFocus && this.visible && this.hide()
                },
                _onMouseDownDatepicker: function (e) {
                    this.inFocus = !0
                },
                _onMouseUpDatepicker: function (e) {
                    this.inFocus = !1, e.originalEvent.inFocus = !0, e.originalEvent.timepickerFocus || this.$el.focus()
                },
                _onKeyUpGeneral: function (e) {
                    this.$el.val() || this.clear()
                },
                _onResize: function () {
                    this.visible && this.setPosition()
                },
                _onMouseUpBody: function (e) {
                    e.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
                },
                _onMouseUpEl: function (e) {
                    e.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
                },
                _onKeyDown: function (e) {
                    var t = e.which;
                    if (this._registerKey(t), t >= 37 && t <= 40 && (e.preventDefault(), this._focusNextCell(t)), 13 == t && this.focused) {
                        if (this._getCell(this.focused).hasClass("-disabled-")) return;
                        if (this.view != this.opts.minView) this.down();
                        else {
                            var i = this._isSelected(this.focused, this.cellType);
                            if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                            this._handleAlreadySelectedDates(i, this.focused)
                        }
                    }
                    27 == t && this.hide()
                },
                _onKeyUp: function (e) {
                    var t = e.which;
                    this._unRegisterKey(t)
                },
                _onHotKey: function (e, t) {
                    this._handleHotKey(t)
                },
                _onMouseEnterCell: function (e) {
                    var i = t(e.target).closest(".datepicker--cell"),
                        s = this._getDateFromCell(i);
                    this.silent = !0, this.focused && (this.focused = ""), i.addClass("-focus-"), this.focused = s, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
                },
                _onMouseLeaveCell: function (e) {
                    t(e.target).closest(".datepicker--cell").removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
                },
                _onTimeChange: function (e, t, i) {
                    var s = new Date,
                        a = !1;
                    this.selectedDates.length && (a = !0, s = this.lastSelectedDate), s.setHours(t), s.setMinutes(i), a || this._getCell(s).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(s)
                },
                _onClickCell: function (e, t) {
                    this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), this.selectDate(t)
                },
                set focused(e) {
                    if (!e && this.focused) {
                        var t = this._getCell(this.focused);
                        t.length && t.removeClass("-focus-")
                    }
                    this._focused = e, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", n.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = e)
                },
                get focused() {
                    return this._focused
                },
                get parsedDate() {
                    return n.getParsedDate(this.date)
                },
                set date(e) {
                    if (e instanceof Date) return this.currentDate = e, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), e
                },
                get date() {
                    return this.currentDate
                },
                set view(e) {
                    if (this.viewIndex = this.viewIndexes.indexOf(e), !(this.viewIndex < 0)) return this.prevView = this.currentView, this.currentView = e, this.inited && (this.views[e] ? this.views[e]._render() : this.views[e] = new t.fn.datepicker.Body(this, e, this.opts), this.views[this.prevView].hide(), this.views[e].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(e), this.elIsInput && this.visible && this.setPosition()), e
                },
                get view() {
                    return this.currentView
                },
                get cellType() {
                    return this.view.substring(0, this.view.length - 1)
                },
                get minTime() {
                    var e = n.getParsedDate(this.minDate);
                    return new Date(e.year, e.month, e.date).getTime()
                },
                get maxTime() {
                    var e = n.getParsedDate(this.maxDate);
                    return new Date(e.year, e.month, e.date).getTime()
                },
                get curDecade() {
                    return n.getDecade(this.date)
                }
            }, n.getDaysCount = function (e) {
                return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
            }, n.getParsedDate = function (e) {
                return {
                    year: e.getFullYear(),
                    month: e.getMonth(),
                    fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                    date: e.getDate(),
                    fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                    day: e.getDay(),
                    hours: e.getHours(),
                    fullHours: e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                    minutes: e.getMinutes(),
                    fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                }
            }, n.getDecade = function (e) {
                var t = 10 * Math.floor(e.getFullYear() / 10);
                return [t, t + 9]
            }, n.template = function (e, t) {
                return e.replace(/#\{([\w]+)\}/g, (function (e, i) {
                    if (t[i] || 0 === t[i]) return t[i]
                }))
            }, n.isSame = function (e, t, i) {
                if (!e || !t) return !1;
                var s = n.getParsedDate(e),
                    a = n.getParsedDate(t),
                    r = i || "day";
                return {
                    day: s.date == a.date && s.month == a.month && s.year == a.year,
                    month: s.month == a.month && s.year == a.year,
                    year: s.year == a.year
                }[r]
            }, n.less = function (e, t, i) {
                return !(!e || !t) && t.getTime() < e.getTime()
            }, n.bigger = function (e, t, i) {
                return !(!e || !t) && t.getTime() > e.getTime()
            }, n.getLeadingZeroNum = function (e) {
                return parseInt(e) < 10 ? "0" + e : e
            }, n.resetTime = function (e) {
                if ("object" == typeof e) return e = n.getParsedDate(e), new Date(e.year, e.month, e.date)
            }, t.fn.datepicker = function (e) {
                return this.each((function () {
                    if (t.data(this, "datepicker")) {
                        var i = t.data(this, "datepicker");
                        i.opts = t.extend(!0, i.opts, e), i.update()
                    } else t.data(this, "datepicker", new h(this, e))
                }))
            }, t.fn.datepicker.Constructor = h, t.fn.datepicker.language = {
                ru: {
                    days: ["Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "Ð¡Ñ€ÐµÐ´Ð°", "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³", "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°", "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°"],
                    daysShort: ["Ð’Ð¾Ñ", "ÐŸÐ¾Ð½", "Ð’Ñ‚Ð¾", "Ð¡Ñ€Ðµ", "Ð§ÐµÑ‚", "ÐŸÑÑ‚", "Ð¡ÑƒÐ±"],
                    daysMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
                    months: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
                    monthsShort: ["Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"],
                    today: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
                    clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ",
                    dateFormat: "dd.mm.yyyy",
                    timeFormat: "hh:ii",
                    firstDay: 1
                }
            }, t((function () {
                t(".datepicker-here").datepicker()
            })),
            function () {
                var e = {
                    days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
                    months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
                    years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
                },
                    i = t.fn.datepicker,
                    s = i.Constructor;
                i.Body = function (e, i, s) {
                    this.d = e, this.type = i, this.opts = s, this.$el = t(""), this.opts.onlyTimepicker || this.init()
                }, i.Body.prototype = {
                    init: function () {
                        this._buildBaseHtml(), this._render(), this._bindEvents()
                    },
                    _bindEvents: function () {
                        this.$el.on("click", ".datepicker--cell", t.proxy(this._onClickCell, this))
                    },
                    _buildBaseHtml: function () {
                        this.$el = t(e[this.type]).appendTo(this.d.$content), this.$names = t(".datepicker--days-names", this.$el), this.$cells = t(".datepicker--cells", this.$el)
                    },
                    _getDayNamesHtml: function (e, t, i, s) {
                        return i = i || "", (s = null != s ? s : 0) > 7 ? i : 7 == (t = null != t ? t : e) ? this._getDayNamesHtml(e, 0, i, ++s) : (i += '<div class="datepicker--day-name' + (this.d.isWeekend(t) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[t] + "</div>", this._getDayNamesHtml(e, ++t, i, ++s))
                    },
                    _getCellContents: function (e, t) {
                        var i = "datepicker--cell datepicker--cell-" + t,
                            a = new Date,
                            n = this.d,
                            r = s.resetTime(n.minRange),
                            l = s.resetTime(n.maxRange),
                            o = n.opts,
                            h = s.getParsedDate(e),
                            d = {},
                            c = h.date;
                        switch (t) {
                            case "day":
                                n.isWeekend(h.day) && (i += " -weekend-"), h.month != this.d.parsedDate.month && (i += " -other-month-", o.selectOtherMonths || (i += " -disabled-"), o.showOtherMonths || (c = ""));
                                break;
                            case "month":
                                c = n.loc[n.opts.monthsField][h.month];
                                break;
                            case "year":
                                var p = n.curDecade;
                                c = h.year, (h.year < p[0] || h.year > p[1]) && (i += " -other-decade-", o.selectOtherYears || (i += " -disabled-"), o.showOtherYears || (c = ""))
                        }
                        return o.onRenderCell && (c = (d = o.onRenderCell(e, t) || {}).html ? d.html : c, i += d.classes ? " " + d.classes : ""), o.range && (s.isSame(r, e, t) && (i += " -range-from-"), s.isSame(l, e, t) && (i += " -range-to-"), 1 == n.selectedDates.length && n.focused ? ((s.bigger(r, e) && s.less(n.focused, e) || s.less(l, e) && s.bigger(n.focused, e)) && (i += " -in-range-"), s.less(l, e) && s.isSame(n.focused, e) && (i += " -range-from-"), s.bigger(r, e) && s.isSame(n.focused, e) && (i += " -range-to-")) : 2 == n.selectedDates.length && s.bigger(r, e) && s.less(l, e) && (i += " -in-range-")), s.isSame(a, e, t) && (i += " -current-"), n.focused && s.isSame(e, n.focused, t) && (i += " -focus-"), n._isSelected(e, t) && (i += " -selected-"), n._isInRange(e, t) && !d.disabled || (i += " -disabled-"), {
                            html: c,
                            classes: i
                        }
                    },
                    _getDaysHtml: function (e) {
                        for (var t, i, a = s.getDaysCount(e), n = new Date(e.getFullYear(), e.getMonth(), 1).getDay(), r = new Date(e.getFullYear(), e.getMonth(), a).getDay(), l = n - this.d.loc.firstDay, o = 6 - r + this.d.loc.firstDay, h = "", d = 1 - (l = l < 0 ? l + 7 : l), c = a + (o = o > 6 ? o - 7 : o); d <= c; d++) i = e.getFullYear(), t = e.getMonth(), h += this._getDayHtml(new Date(i, t, d));
                        return h
                    },
                    _getDayHtml: function (e) {
                        var t = this._getCellContents(e, "day");
                        return '<div class="' + t.classes + '" data-date="' + e.getDate() + '" data-month="' + e.getMonth() + '" data-year="' + e.getFullYear() + '">' + t.html + "</div>"
                    },
                    _getMonthsHtml: function (e) {
                        for (var t = "", i = s.getParsedDate(e), a = 0; a < 12;) t += this._getMonthHtml(new Date(i.year, a)), a++;
                        return t
                    },
                    _getMonthHtml: function (e) {
                        var t = this._getCellContents(e, "month");
                        return '<div class="' + t.classes + '" data-month="' + e.getMonth() + '">' + t.html + "</div>"
                    },
                    _getYearsHtml: function (e) {
                        s.getParsedDate(e);
                        for (var t = s.getDecade(e), i = "", a = t[0] - 1; a <= t[1] + 1; a++) i += this._getYearHtml(new Date(a, 0));
                        return i
                    },
                    _getYearHtml: function (e) {
                        var t = this._getCellContents(e, "year");
                        return '<div class="' + t.classes + '" data-year="' + e.getFullYear() + '">' + t.html + "</div>"
                    },
                    _renderTypes: {
                        days: function () {
                            var e = this._getDayNamesHtml(this.d.loc.firstDay),
                                t = this._getDaysHtml(this.d.currentDate);
                            this.$cells.html(t), this.$names.html(e)
                        },
                        months: function () {
                            var e = this._getMonthsHtml(this.d.currentDate);
                            this.$cells.html(e)
                        },
                        years: function () {
                            var e = this._getYearsHtml(this.d.currentDate);
                            this.$cells.html(e)
                        }
                    },
                    _render: function () {
                        this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
                    },
                    _update: function () {
                        var e, i, s, a = t(".datepicker--cell", this.$cells),
                            n = this;
                        a.each((function (a, r) {
                            i = t(this), s = n.d._getDateFromCell(t(this)), e = n._getCellContents(s, n.d.cellType), i.attr("class", e.classes)
                        }))
                    },
                    show: function () {
                        this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
                    },
                    hide: function () {
                        this.$el.removeClass("active"), this.active = !1
                    },
                    _handleClick: function (e) {
                        var t = e.data("date") || 1,
                            i = e.data("month") || 0,
                            s = e.data("year") || this.d.parsedDate.year,
                            a = this.d;
                        if (a.view == this.opts.minView) {
                            var n = new Date(s, i, t),
                                r = this.d._isSelected(n, this.d.cellType);
                            r ? a._handleAlreadySelectedDates.bind(a, r, n)() : a._trigger("clickCell", n)
                        } else a.down(new Date(s, i, t))
                    },
                    _onClickCell: function (e) {
                        var i = t(e.target).closest(".datepicker--cell");
                        i.hasClass("-disabled-") || this._handleClick.bind(this)(i)
                    }
                }
            }(),
            function () {
                var e = t.fn.datepicker,
                    i = e.Constructor;
                e.Navigation = function (e, t) {
                    this.d = e, this.opts = t, this.$buttonsContainer = "", this.init()
                }, e.Navigation.prototype = {
                    init: function () {
                        this._buildBaseHtml(), this._bindEvents()
                    },
                    _bindEvents: function () {
                        this.d.$nav.on("click", ".datepicker--nav-action", t.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", t.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", t.proxy(this._onClickNavButton, this))
                    },
                    _buildBaseHtml: function () {
                        this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
                    },
                    _addButtonsIfNeed: function () {
                        this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
                    },
                    _render: function () {
                        var e = this._getTitle(this.d.currentDate),
                            s = i.template('<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>', t.extend({
                                title: e
                            }, this.opts));
                        this.d.$nav.html(s), "years" == this.d.view && t(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
                    },
                    _getTitle: function (e) {
                        return this.d.formatDate(this.opts.navTitles[this.d.view], e)
                    },
                    _addButton: function (e) {
                        this.$buttonsContainer.length || this._addButtonsContainer();
                        var s = {
                            action: e,
                            label: this.d.loc[e]
                        },
                            a = i.template('<span class="datepicker--button" data-action="#{action}">#{label}</span>', s);
                        t("[data-action=" + e + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(a)
                    },
                    _addButtonsContainer: function () {
                        this.d.$datepicker.append('<div class="datepicker--buttons"></div>'), this.$buttonsContainer = t(".datepicker--buttons", this.d.$datepicker)
                    },
                    setNavStatus: function () {
                        if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                            var e = this.d.parsedDate,
                                t = e.month,
                                i = e.year,
                                s = e.date;
                            switch (this.d.view) {
                                case "days":
                                    this.d._isInRange(new Date(i, t - 1, s), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, t + 1, s), "month") || this._disableNav("next");
                                    break;
                                case "months":
                                    this.d._isInRange(new Date(i - 1, t, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, t, s), "year") || this._disableNav("next");
                                    break;
                                case "years":
                                    this.d._isInRange(new Date(i - 10, t, s), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 10, t, s), "year") || this._disableNav("next")
                            }
                        }
                    },
                    _disableNav: function (e) {
                        t('[data-action="' + e + '"]', this.d.$nav).addClass("-disabled-")
                    },
                    _activateNav: function (e) {
                        t('[data-action="' + e + '"]', this.d.$nav).removeClass("-disabled-")
                    },
                    _onClickNavButton: function (e) {
                        var i = t(e.target).closest("[data-action]").data("action");
                        this.d[i]()
                    },
                    _onClickNavTitle: function (e) {
                        if (!t(e.target).hasClass("-disabled-")) return "days" == this.d.view ? this.d.view = "months" : void (this.d.view = "years")
                    }
                }
            }(),
            function () {
                var e = t.fn.datepicker,
                    i = e.Constructor;
                e.Timepicker = function (e, t) {
                    this.d = e, this.opts = t, this.init()
                }, e.Timepicker.prototype = {
                    init: function () {
                        var e = "input";
                        this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (e = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(e, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
                    },
                    _setTime: function (e) {
                        var t = i.getParsedDate(e);
                        this._handleDate(e), this.hours = t.hours < this.minHours ? this.minHours : t.hours, this.minutes = t.minutes < this.minMinutes ? this.minMinutes : t.minutes
                    },
                    _setMinTimeFromDate: function (e) {
                        this.minHours = e.getHours(), this.minMinutes = e.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > e.getHours() && (this.minMinutes = this.opts.minMinutes)
                    },
                    _setMaxTimeFromDate: function (e) {
                        this.maxHours = e.getHours(), this.maxMinutes = e.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < e.getHours() && (this.maxMinutes = this.opts.maxMinutes)
                    },
                    _setDefaultMinMaxTime: function () {
                        var e = this.opts;
                        this.minHours = e.minHours < 0 || e.minHours > 23 ? 0 : e.minHours, this.minMinutes = e.minMinutes < 0 || e.minMinutes > 59 ? 0 : e.minMinutes, this.maxHours = e.maxHours < 0 || e.maxHours > 23 ? 23 : e.maxHours, this.maxMinutes = e.maxMinutes < 0 || e.maxMinutes > 59 ? 59 : e.maxMinutes
                    },
                    _validateHoursMinutes: function (e) {
                        this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
                    },
                    _buildHTML: function () {
                        var e = i.getLeadingZeroNum,
                            s = {
                                hourMin: this.minHours,
                                hourMax: e(this.maxHours),
                                hourStep: this.opts.hoursStep,
                                hourValue: this.hours,
                                hourVisible: e(this.displayHours),
                                minMin: this.minMinutes,
                                minMax: e(this.maxMinutes),
                                minStep: this.opts.minutesStep,
                                minValue: e(this.minutes)
                            },
                            a = i.template('<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>', s);
                        this.$timepicker = t(a).appendTo(this.d.$datepicker), this.$ranges = t('[type="range"]', this.$timepicker), this.$hours = t('[name="hours"]', this.$timepicker), this.$minutes = t('[name="minutes"]', this.$timepicker), this.$hoursText = t(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = t(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = t('<span class="datepicker--time-current-ampm">').appendTo(t(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
                    },
                    _updateCurrentTime: function () {
                        var e = i.getLeadingZeroNum(this.displayHours),
                            t = i.getLeadingZeroNum(this.minutes);
                        this.$hoursText.html(e), this.$minutesText.html(t), this.d.ampm && this.$ampm.html(this.dayPeriod)
                    },
                    _updateRanges: function () {
                        this.$hours.attr({
                            min: this.minHours,
                            max: this.maxHours
                        }).val(this.hours), this.$minutes.attr({
                            min: this.minMinutes,
                            max: this.maxMinutes
                        }).val(this.minutes)
                    },
                    _handleDate: function (e) {
                        this._setDefaultMinMaxTime(), e && (i.isSame(e, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : i.isSame(e, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(e)
                    },
                    update: function () {
                        this._updateRanges(), this._updateCurrentTime()
                    },
                    _getValidHoursFromDate: function (e, t) {
                        var s = e;
                        e instanceof Date && (s = i.getParsedDate(e).hours);
                        var a = "am";
                        if (t || this.d.ampm) switch (!0) {
                            case 0 == s:
                                s = 12;
                                break;
                            case 12 == s:
                                a = "pm";
                                break;
                            case s > 11:
                                s -= 12, a = "pm"
                        }
                        return {
                            hours: s,
                            dayPeriod: a
                        }
                    },
                    set hours(e) {
                        this._hours = e;
                        var t = this._getValidHoursFromDate(e);
                        this.displayHours = t.hours, this.dayPeriod = t.dayPeriod
                    },
                    get hours() {
                        return this._hours
                    },
                    _onChangeRange: function (e) {
                        var i = t(e.target),
                            s = i.attr("name");
                        this.d.timepickerIsActive = !0, this[s] = i.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
                    },
                    _onSelectDate: function (e, t) {
                        this._handleDate(t), this.update()
                    },
                    _onMouseEnterRange: function (e) {
                        var i = t(e.target).attr("name");
                        t(".datepicker--time-current-" + i, this.$timepicker).addClass("-focus-")
                    },
                    _onMouseOutRange: function (e) {
                        var i = t(e.target).attr("name");
                        this.d.inFocus || t(".datepicker--time-current-" + i, this.$timepicker).removeClass("-focus-")
                    },
                    _onMouseUpRange: function (e) {
                        this.d.timepickerIsActive = !1
                    }
                }
            }()
    }(window, jQuery), jQuery.fn.datepicker.language.es = {
        days: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"],
        daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        clear: "Limpiar",
        dateFormat: "mm/dd/yyyy",
        timeFormat: "hh:ii aa",
        firstDay: 0
    };
const headerMapa = '<svg class="header__mapa__tumbes"><use xlink:href="#map-tumbes" /></svg>\n                    <svg class="header__mapa__piura"><use xlink:href="#map-piura" /></svg>\n                    <svg class="header__mapa__lambayeque"><use xlink:href="#map-lambayeque" /></svg>\n                    <svg class="header__mapa__la-libertad"><use xlink:href="#map-la-libertad" /></svg>\n                    <svg class="header__mapa__cajamarca"><use xlink:href="#map-cajamarca" /></svg>\n                    <svg class="header__mapa__amazonas"><use xlink:href="#map-amazonas" /></svg>\n                    <svg class="header__mapa__san-martin"><use xlink:href="#map-san-martin" /></svg>\n                    <svg class="header__mapa__loreto"><use xlink:href="#map-loreto" /></svg>\n                    <svg class="header__mapa__ancash"><use xlink:href="#map-ancash" /></svg>\n                    <svg class="header__mapa__lima"><use xlink:href="#map-lima" /></svg>\n                    <svg class="header__mapa__huanuco"><use xlink:href="#map-huanuco" /></svg>\n                    <svg class="header__mapa__pasco"><use xlink:href="#map-pasco" /></svg>\n                    <svg class="header__mapa__junin"><use xlink:href="#map-junin" /></svg>\n                    <svg class="header__mapa__ucayali"><use xlink:href="#map-ucayali" /></svg>\n                    <svg class="header__mapa__ica"><use xlink:href="#map-ica" /></svg>\n                    <svg class="header__mapa__huancavelica"><use xlink:href="#map-huancavelica" /></svg>\n                    <svg class="header__mapa__ayacucho"><use xlink:href="#map-ayacucho" /></svg>\n                    <svg class="header__mapa__apurimac"><use xlink:href="#map-apurimac" /></svg>\n                    <svg class="header__mapa__cusco"><use xlink:href="#map-cusco" /></svg>\n                    <svg class="header__mapa__madre-de-dios"><use xlink:href="#map-madre-de-dios" /></svg>\n                    <svg class="header__mapa__arequipa"><use xlink:href="#map-arequipa" /></svg>\n                    <svg class="header__mapa__puno"><use xlink:href="#map-puno" /></svg>\n                    <svg class="header__mapa__moquegua"><use xlink:href="#map-moquegua" /></svg>\n                    <svg class="header__mapa__tacna"><use xlink:href="#map-tacna" /></svg>',
    mapaSVG = '<svg>\n        <symbol width="12" height="8" viewBox="0 0 12 8" id="map-tumbes">\n            <path fill-rule="evenodd" d="M1.82 7.17c-.105 0-.105 0-.21-.263C1.463 6.54.9 6.253.552 6.166c.052-.104.105-.206.164-.289.05-.072.317-.249.494-.365.29-.193.564-.374.713-.556.216-.265.468-.787.635-1.133l.084-.172c.105-.207.365-.518.64-.684.335-.203.457-.277 1.087-.427.027.003.058.005.094.005.214 0 .39-.082.499-.23.09-.133.096-.142.284-.194.078-.021.154-.038.223-.054.26-.058.653-.146.653-.533.006-.101.179-.448.348-.525.156-.071.388-.129.584-.179L7.2.791l.102.192c.07.085.176.132.294.132.102 0 .212-.035.338-.107.06-.035.143-.087.233-.144.135-.085.386-.244.459-.268h.007c.044 0 .13-.022.212-.044.04-.011.077-.022.104-.026-.045.008.126.132.269.31.217.268.504.757.52.886-.02.217.058.753.345.966.184.138.655.353.85.37.018.001.052.004.117.108.05.079.093.14.137.192-.832.207-1.09.329-1.211.446-.082.08-.13.152-.16.199-.037.004-.075.006-.111.006-.141 0-.272-.028-.403-.054-.202-.041-.403-.079-.538-.079h-.041l-.127.021c-.24.066-.785.359-.941.505-.018.017-.051.04-.092.07-.221.162-.57.42-.66.75-.22.021-.391.038-.47.048-.548.067-1.025.714-1.123.884-.073.129-.39.521-.523.681-.176.003-2.69.335-2.966.335"/>\n        </symbol>\n        <symbol width="29" height="19" viewBox="0 0 29 19" id="map-piura">\n            <path fill-rule="evenodd" d="M11.307 18.193c-.672-.157-1.124-.26-1.279-.282-.15-.02-.858-.192-1.427-.33-.409-.099-.807-.196-1.053-.25-.409-.093-.959-.139-1.402-.176-.247-.02-.457-.037-.573-.059l-.17-.027c-.072-.009-.095-.033-.15-.105-.052-.064-.12-.143-.196-.229-.13-.147-.402-.456-.425-.568-.02-.115.132-.45.302-.61.185-.175.52-.388.598-.415.014-.002.048-.009.084-.009.264.192.346.215.675.257.146.018.294.032.43.032.23 0 .397-.038.527-.117.081-.05.166-.125.25-.2.052-.049.14-.129.175-.143l.224-.079c.27-.08.33-.186.356-.23l.08-.134-.064-.169c.131-.097.221-.21.221-.45l.004-.107c.01-.193.028-.517-.287-.744l-.086-.064c.115-.034.183-.1.223-.157l.086-.125-.04-.185c-.07-.198-.243-.25-.66-.379-.466-.143-.695-.226-1.069-.452-.207-.124-.495-.287-.77-.442-.26-.146-.509-.286-.663-.38-.21-.129-.644-.346-.933-.346h-.069l-.132.043c-.057.027-.099.06-.13.091-.139-.043-.189-.06-.199-.064h.001c.016 0-.263-.189-.662-.272l-.094-.019c.016-.016.124-.146.124-.146l-.008-.16c-.016-.13-.099-.225-.194-.303.053-.105.065-.212.038-.32l.275-.07c.042 0 .087.008.135.023.315.1.375.1.407.1h.005c.182 0 .463-.033.62-.245.31-.367.327-.639.102-.869-.266-.27-.892-.585-.918-.598-.1-.128-.204-.24-.44-.24-.108 0-.332-.11-.396-.17-.18-.21-.387-.456-.79-.577l-.404-.12c.002 0-.038-.019-.083-.07-.192-.222-.48-.279-.71-.304-.042-.004-.09-.015-.144-.03l.038-.01.056-.133c.08-.187.191-.536.053-.775-.034-.059-.084-.124-.137-.19-.04-.05-.108-.133-.118-.168.002-.053.002-.08.156-.19.244-.175.358-.263.358-.263l.03-.085c.018-.053.173-.526-.009-.937-.069-.153-.108-.24-.113-.268.1-.003.372-.208.674-.436.372-.28.834-.63.975-.714.078-.047.137-.06.212-.078.103-.023.24-.054.371-.176.07.02.134.03.194.03.134.013.566.233.624.355.113.285.27.675.828.675.361 0 3.015-.358 3.128-.384.144-.033.255-.107.286-.129l.051-.036.037-.058c.004 0 .437-.52.565-.742.115-.198.448-.534.626-.555.08-.01.257-.028.483-.049.11.206.285.34.452.445.293.184.946.476 1.146.496h.04l-.06.056c-.362.3-.68.608-.68.916 0 .371.231.838.748 1.044.285.114.743.19 1.14.19.293 0 .52-.04.673-.122.247-.13.595-.425.85-.642.092-.077.166-.14.208-.172.573-.42.74-.644.787-.768l.39.003c.096 0 .337-.007.34-.007.34 0 .526.1.63.184.23.184.708.332 1.068.332.114-.002.202-.013.296-.024.097-.013.204-.027.315-.027.158 0 .283.031.393.097l.128.077c.322.194.576.348.89.348l.104-.005c.28-.03 1.656-.252 1.927-.345.145-.05.297-.079.42-.079.09 0 .137.015.157.025.152.07.6.21 1.368.427.066.037.295.271.43.426.047.056.164.211.288.378.167.222.347.46.42.54.042.045.08.081.114.113.061.058.061.06.07.085.06.221.296.398.677.663l.108.075c.055.04.113.104.174.173.154.175.367.415.76.46.116.013.43.02.833.022-.029.262-.054.494-.065.627-.078.06-.237.15-.312.192-.254.145-.42.24-.489.408-.123.306.15.546.69 1.024.157.14.307.267.362.337.121.156.377.612.536.935-.222-.017-.454-.046-.596-.063-.19-.023-.307-.035-.347-.035-.266 0-.457.24-.5.623 0 .09.014.18.046.306.021.085.085.234.162.405.08.173.155.34.198.47.044.131.04.463.013.723l-.005.052.013.065c.045.17.067.251.721.777.02.014.06.043.24.155-.013.03-.032.068-.052.1l-.058.06c-.003 0-.005-.002-.008-.003-.123-.038-.476-.09-.552-.1l-.134.002s-.083.018-.34.124c-.114.046-.186.08-.233.104-.042.004-.246.017-.25.017-.306 0-.757-.056-.865-.069-.003-.004-.097-.04-.352-.147-.149-.063-.288-.094-.427-.094-.098 0-.186.015-.274.033-.06.012-.115.024-.182.024-.126 0-.35-.1-.469-.172l-.154-.05c.037-.087.055-.18.05-.279-.008-.15-.073-.378-.334-.605-.274-.238-1.319-.872-1.454-.954.001 0-.07-.052-.263-.173-.207-.13-1.144-.359-1.893-.527l-.29-.039-.103-.005c-.213 0-.473.054-.475.055l-.235.052-.027.274v.107c0 .145.065.233.38.658.154.21.312.423.418.587.042.1-.088.505-.329.92l-.215.108c-.2.085-3.255.956-3.89 1.074-.64.12-1.222.578-1.286.63-.002.001-.069.062-.219.224-.075.08-.808.976-2.446 2.99"/>\n        </symbol>\n        <symbol width="20" height="13" viewBox="0 0 20 13" id="map-lambayeque">\n            <path fill-rule="evenodd" d="M13.966 12.733c.09-.371-.06-.674-.44-.888-.345-.195-1.042-.487-1.657-.746-.38-.16-.72-.303-.898-.39-.4-.195-.548-.403-.564-.444-.01-.126-.041-.233-.09-.303-.057-.064-.333-.31-.716-.495-.385-.187-1.866-.663-2.291-.771-.2-.05-.647-.108-1.164-.174-.588-.076-1.474-.19-1.65-.268-.405-.181-.71-.273-.931-.284-.142-.006-.221-.012-.243-.014-.002-.006-.35-.118-.5-.175-.173-.067-.254-.085-.288-.09-.325-.003-1.123-.016-1.848-.178-.197-.044-.422-.096-.656-.151 1.284-1.578 2.14-2.626 2.212-2.704.114-.122.167-.175.17-.18.12-.092.565-.396.968-.471.516-.096 3.809-1.001 4.076-1.14l.364-.18.06-.086c.173-.272.705-1.197.373-1.714-.117-.18-.29-.415-.443-.622C7.794.243 7.778.22 7.76.198l.138.017c.792.177 1.549.376 1.67.44.158.1.22.144.236.156.573.348 1.234.769 1.393.906.082.07.103.12.104.135-.121.105-.175.29-.127.464.028.1.118.288.41.372l.218.064c.034.03.4.234.74.234.117 0 .214-.017.305-.035.054-.01.099-.021.15-.021.03 0 .08.004.169.04.37.157.445.18.454.182.142.02.69.089.984.089.39-.021.457-.035.46-.036l.069-.014.072-.05c.004 0 .324-.133.364-.147.109.015.307.045.382.069h.003c.075.092.192.15.35.177.086.014.2.023.322.023.174 0 .42-.018.6-.105.056-.027.1-.055.144-.083.175.09.393.16.585.223l.147.048c-.111.12-.263.258-.322.287l-.28.14-.04.183c-.014.108.009.312.309.504.084.054.136.09.163.11l-.012-.001c-.074 0-.271.114-.802.36l-.11.053c-.272.089-.697.228-.603.612l.003.113.106.189c.11.108.212.246.224.299.076.366.337.516.576.628.277.13.353.139.38.142.492.1.989.21 1.228.273.004.086.004.19.005.274.003.21.008.417.029.534.073.422.303.54.574.642.05.018.089.036.119.052-.06.162-.127.38-.166.512l-.492.127c-.455.119-.7.336-.723.646-.004.04-.01.128.106.826h-.054c-.242 0-.304-.012-.307-.013-.135-.044-.207-.063-.221-.066-.013-.004-.188-.043-.384-.043-.192 0-.341.036-.458.11-.063.04-.233.136-.431.136-.275-.025-.35-.035-.371-.038h-.017c-.272 0-.572.1-.72.376-.04.056-.257.2-.374.279-.211.14-.342.23-.423.334-.085.11-.146.196-.18.273l-.35.542-.118-.008"/>\n        </symbol>\n        <symbol width="39" height="17" viewBox="0 0 39 17" id="map-la-libertad">\n            <path fill-rule="evenodd" d="M16.924 16.9c-.04-.04-.088-.08-.15-.117-.165-.104-.457-.225-.766-.352-.253-.105-.677-.28-.76-.354-.046-.043-.08-.076-.105-.103l.02-.155c.006-.046.109-1.026-.58-1.38-.154-.081-.287-.164-.424-.25-.31-.192-.66-.412-1.301-.627l-.047-.016c.026-.031.049-.066.066-.11.064-.158.016-.328-.142-.505-.303-.338-1.465-1.157-1.597-1.25l-.042-.03-.05-.013c-.72-.2-1.535-.44-1.654-.497l-.133-.065c-.808-.395-1.932-.93-2.36-1.026-.517-.117-.662-.138-.662-.138-.136-.018-.291-.051-.333-.07l-.121-.06c-.006-.003-1.404-.641-1.591-.717l-.071-.028.268-.112.024-.168c.014-.098.004-.353-.394-.59-.194-.116-1.151-.661-1.742-.996l-.458-.261c-.053-.055-.17-.357-.162-.456h.016c.099 0 .246-.087.257-.273l.01-.17-.07-.057c.048-.053.08-.121.082-.211.006-.254-.245-.352-.327-.384-.115-.045-.26-.125-.413-.21-.148-.08-.3-.163-.447-.231l.247-.387c.02-.037.046-.09.129-.195.029-.031.167-.123.258-.184.26-.173.498-.332.6-.525.009-.01.045-.023.084-.027.025.005.32.037.32.037l.113.005c.362 0 .65-.15.792-.24.005 0 .034-.006.096-.006.114 0 .224.022.235.025 0 0 .06.016.18.055.064.02.176.043.505.043l.15-.002c.076.629.136 1.188.144 1.346-.023.089-.02.209.054.365.114.245.305.402.51.422.047.005.136.006.26.006.219 0 .877.003 1.054.094.284.145.937.568 1.06.648l.349.187c.15.08.256.21.285.249.106.099.195.177.223.205.055.063.086.098.63.228-.071.108-.132.214-.132.34 0 .373.398.434.783.494.123.019.156.02.189.02.377 0 .606-.308.743-.493.054-.071.145-.172.604-.19.47-.017.702-.182.779-.251l.177-.072c.117-.056.674-.104 1.006-.111h.3c.228 0 .847-.155 1.019-.255.037-.006.372-.045.759-.07l.163.002c.124 0 .574.09.74.15.23.08 1.142.182 1.18.187.038.002.225.012.565.055.228.03.609.173.865.287.004 0 .122.06.333.116.065.017.142.026.238.026.239 0 .563-.058.583-.061.045-.012.12-.032.375-.092s1.73-.142 2.192-.152l.265-.004c.898-.01 1.35-.028 1.547-.111.192-.081.634-.313.593-.705-.018-.161-.061-.844-.061-1.113.092-.04.25-.09.337-.116.126-.04.243-.076.333-.114.168-.072.48-.205.48-.556 0-.102.002-.367-1.04-.72l.006-.015c.14-.423-.357-.78-1.184-1.323-.223-.147-.382-.231-.5-.28l-.005-.045c-.04-.355-.332-.58-.615-.798l-.125-.096c-.038-.03-.072-.066-.102-.104l2.105-.128c.31.383.639.809.707.938.11.208.47.467 1.432 1.094.237.154.425.275.5.335.247.192.97.904 1.107 1.062.123.142.432.294 1.123.606.183.082.355.158.41.19.022.033.106.227.104.296-.11.168-.252 1.06-.098 1.358.098.188.284.288.465.385.089.048.186.1.277.166.284.207.56.434.779.636.098.09.159.15.196.187.06.308.127.52.198.629l.167.258.182.022c.289.007 1.076.05 1.263.113.26.085.423.128.487.128.887.255 1.824.582 1.967.704.044.058.12.173.21.306.309.46.545.794.779.929.124.072.348.15.703.272.204.07.577.197.766.283l-.594.08c.03-.005-.092-.028-.245-.07l-.111-.031c-.301-.086-.917-.261-1.358-.261-.357 0-1.334.103-1.807.155-.167-.29-.663-.641-1.151-.794-.494-.153-1.014-.427-1.266-.665-.334-.317-.981-.484-1.452-.607 0 0-.248-.067-.277-.077l-.023-.027c-.003-.005-.043-.06-.134-.206-.12-.193-.441-.444-1.072-.84-.115-.072-.207-.097-.312-.097-.243 0-.555.136-.908.3-.31.145-.58.22-.73.22-.108-.014-.202-.021-.31-.021-.268 0-.66.043-.995.109-.426.085-1.627.568-1.763.623l-.066.027-.06.063c-.033.038-.076.102-.155.294-.038.092-.056.178-.063.254-.001 0-.003 0-.005.002-.98.549-1.16.716-1.223.897-.046.132-.036.269.026.385.029.053.07.1.118.14l.006.088c-.011.03-.083.145-.363.41-.172.164-.232.327-.284.47-.025.07-.065.18-.094.213-.04.042-.092.086-.147.134-.18.155-.383.329-.421.572-.02.122-.073.37-.111.528-.075.009-.197.017-.388.017-.603 0-.828.232-1.026.437-.147.147-.627.266-.913.336-.183.046-.372.093-.546.143-.573.168-.817.298-.844.666l-.007.138c-.023.565-.04.825-.052.946l-.212.083"/>\n        </symbol>\n        <symbol width="24" height="25" viewBox="0 0 24 25" id="map-cajamarca">\n            <path fill-rule="evenodd" d="M8.726 24.43c.08-.155.13-.342-.003-.516-.064-.083-.122-.145-.173-.184l-.053-.04-.077-.02c-.221-.052-.465-.11-.576-.142-.076-.07-.18-.155-.18-.156l.002.001c.013 0-.165-.227-.447-.377-.146-.078-.234-.125-.291-.153-.205-.133-.833-.537-1.128-.687-.295-.152-.831-.165-1.354-.167h-.173c.02-.172-.014-.58-.174-1.856-.085-.49-.151-.912-.163-1.042h.005c.023 0 .088-.032.218-.066l.68-.176.06-.042c.113-.093.174-.183.198-.276.022-.085.165-.552.21-.642.06-.118.068-.252.02-.377-.073-.187-.262-.338-.563-.45-.077-.028-.123-.049-.137-.06-.03-.162-.03-.329-.032-.49-.006-.425-.01-.619-.141-.755-.075-.079-.141-.147-1.655-.45-.01-.003-.068-.025-.201-.088-.192-.089-.198-.116-.207-.16-.031-.155-.127-.308-.22-.428.069-.023.113-.04.14-.055.77-.359 1.039-.513 1.149-.652.199-.247.12-.569-.006-.769l-.027-.042-.085-.07c.145-.127.277-.27.329-.334.233-.28.153-.636-.041-.827-.101-.099-.255-.149-.468-.218-.153-.05-.33-.109-.413-.162-.124-.08-.243-.12-.364-.12-.172 0-.295.08-.377.132-.045.026-.092.045-.146.058.059-.13.109-.304.074-.476-.03-.146-.117-.272-.246-.35-.2-.126-.253-.16-.261-.167-.202-.163-.37-.309-.453-.387.012-.169.039-.62-.056-.907C.869 9.132.782 8.94.705 8.77.642 8.632.589 8.52.574 8.461c-.01-.035-.015-.062-.02-.083l.088.011c.444.054.758.084.949.084.156 0 .317-.015.426-.13.384-.399-.693-1.884-.704-1.898-.071-.09-.243-.248-.446-.427-.073-.065-.233-.206-.358-.326l.045-.026c.346-.197.644-.367.644-.67 0-.075.034-.377.075-.727h.016c.819.002 2.057.005 2.246.052.234.088.735.235 1.03.235.374-.038.857-.194.857-.568 0-.089.02-.357.037-.51.122-.072.353-.185.417-.212l.232-.068.057-.13c0-.003.053-.123.105-.228.037-.075.05-.16.079-.348.02-.146.07-.489.132-.57.204-.119.282-.184.282-.184 1.31-.744 1.31-.965 1.31-1.11 0-.095-.024-.175-.05-.24.104-.037.224-.067.346-.094l.682 1.43c.115.224.32.711.302 1.011-.01.173-.086.306-.17.447-.096.17-.214.374-.192.633.036.413 1.014 2.531 1.255 2.895.203.308.284.5.31.59-.068.08-.16.195-.257.324-.123.162-.37.486-.448.544-.042.033-.101.07-.163.108-.276.174-.536.34-.582.591l-.023.13.1.19c.022.028.046.053.07.076-.12.07-.216.14-.277.23-.032.05-.08.112-.08.112l-.057.072-.014.107c-.055.291.033.813.513.944.292.08.476.203.509.251.1.203.325.31.562.424.08.037.153.072.222.111.052.028.089.09.146.188.076.133.18.314.398.386.078.026.173.04.28.04.253 0 .549-.075.678-.144l.049-.026c.057.02.097.04.11.05.164.156.29.226.627.252l.193.01c.157.008.567.028.665.083.158.211.377.487.74.57.169.04.259.078.303.101.04.167.173.272.265.346.026.021.069.056.08.07.014.1.106.533.72.602.079.01.182.016.3.025.309.022.883.063 1.09.176.12.065.177.123.24.188.094.095.21.214.445.273.275.07.555.181.624.222.293.324 1.437 1.337 1.714 1.58.013.067.023.202.029.28.016.212.03.407.098.557.085.188.17.51.177.536.02.084.147.551.52.846l.08.061c.208.16.402.31.41.383.032.284.05.337.057.36l.054.16.185.06h.113l.18-.073-.124.065c-.076.007.023.028.297.21.263.173.766.505.922.676-.057.157-.091.3-.02.452.083.17.24.237.352.273.105.033.25.09.389.15l-.027.008c-.368.114-.746.231-.8.56-.032.213.028 1.03.048 1.294-.032.025-.091.065-.182.104-.151.047-1.011.055-1.293.058l-.273.004c-.214.004-1.947.08-2.331.17-.146.034-.263.061-.351.091l.004-.006c-.017.003-.274.05-.457.05-.197-.039-.275-.073-.287-.079-.163-.073-.685-.296-1.066-.345-.396-.05-.61-.059-.61-.059-.27-.03-.887-.113-.996-.15-.182-.064-.714-.189-.962-.189h-.184c-.9.058-1.008.121-1.073.16-.09.043-.567.163-.684.163h-.308c-.234.006-.995.037-1.29.178l-.295.143-.045.042c-.004 0-.111.063-.35.072-.542.021-.87.14-1.061.387-.096.13-.21.283-.264.296l-.154-.024"/>\n        </symbol>\n        <symbol width="22" height="31" viewBox="0 0 22 31" id="map-amazonas">\n            <path fill-rule="evenodd" d="M12.17 30.445c-.039-.123-.088-.266-.137-.376-.02-.05-.033-.234-.041-.332-.022-.306-.042-.57-.236-.715-.133-.1-1.551-1.39-1.673-1.53-.085-.175-.572-.337-.96-.435-.051-.012-.06-.02-.13-.092-.075-.077-.188-.194-.4-.309-.333-.18-.9-.222-1.355-.254l-.278-.023c-.137-.016-.139-.027-.159-.119-.043-.207-.198-.33-.3-.412-.027-.388-.635-.528-.835-.575-.135-.03-.25-.177-.352-.307-.244-.3-.655-.338-1.173-.363l-.172-.01c-.134-.009-.166-.023-.169-.024-.197-.185-.442-.26-.576-.294h-.075l-.164.03-.165.09c-.039.018-.218.065-.364.065h-.002c-.047 0-.076-.052-.098-.089-.08-.137-.186-.32-.4-.44-.085-.047-.174-.09-.26-.13-.088-.043-.235-.113-.271-.149-.163-.338-.739-.52-.911-.568-.017-.015-.032-.075-.033-.148l.05-.073c.011 0 .119-.059.179-.09.138-.077.25-.14.335-.214l.125-.108.015-.247c-.022-.155-.124-.246-.231-.308l.09-.056c.077-.049.15-.096.204-.135.143-.107.321-.335.577-.67.109-.144.211-.28.262-.329.337-.313.025-.893-.285-1.363-.216-.33-1.107-2.302-1.146-2.588-.005-.047.048-.139.104-.236.102-.176.24-.413.259-.745.033-.563-.33-1.27-.372-1.35l-.613-1.283c.131-.04.218-.086.281-.152.16-.162.419-.425.419-.853 0-.214.177-1.21.289-1.789l.49-1.614c.017 0 .438-.619.459-1.105.008-.163.014-.25.019-.309.01-.11.012-.143-.001-.29-.019-.206-.007-.249.028-.267.013-.007 1.298-.764 1.256-1.298-.004-.059-.017-.167-.032-.303-.027-.237-.093-.817-.089-1.062.162.305.422.667.91.667.715-.032 1.218-.097 1.485-.315.139-.114.216-.187.262-.239.087-.067.235-.212.241-.433.004-.133-.044-.329-.299-.506-.056-.039-.198-.137-.284-.209l.055-.129c.127-.305.225-.468.29-.482l.198-.04c.538-.112.806-.179.947-.32C7.103 1.956 9.241.282 9.56.065c.257.594.258.757.257.776-.006.111-.017.224-.028.334-.047.457-.094.922.188 1.266.109.133.459.487.838.867.415.416 1.042 1.045 1.122 1.167.038.06.049.21.059.357.015.204.033.46.134.713.113.282.392.615.637.91.114.135.278.332.307.394L13 7.431c-.067.511-.135 1.034-.078 1.34.065.353.346.943.572 1.416.092.194.166.35.198.433-.007.023-.052.238-.491.973l-.081.141c-.01.015-.05.066-.098.13-.393.52-.809 1.102-.857 1.567-.052.488-.019 1.975.224 2.497.154.33.197.452.204.478l.048.102c.06.088.602.864.981 1.12.072.048.166.088.277.123l-.462.133-.064.195c-.326 1.461-.326 1.625-.326 1.678 0 .221.145.95.174 1.093l.024.116.109.09.19.141c.174.128.467.188.894.264.146.026.268.045.324.066l-.005.117.036.142c.108.125.82.706 1.018.767.061.02.163.038.467.038l.137-.002c-.001.006.027.02.068.04.022.021.101.113.179.202.261.294.418.462.62.485h.035c.338 0 .951-.054 1.047-.063l.234.048c.228.038 2.223.54 2.393.596h-.002c-.014 0-.004.047-.004.087 0 .156.06.235.599.901.111.137.295.364.436.545-.236.067-.565.156-.78.214-.474.128-.907.245-1.096.322-.253.101-.641.328-1.016.547-.319.187-.611.36-.804.447-.226.103-.515.155-.859.155-.128 0-.246-.006-.35-.015-.167-.012-.323-.03-.462-.046-.194-.023-.331-.038-.421-.038-.258.027-.383.133-.419.281-.06.231.107.383.295.522-.016.093-.077.264-.165.401-.06.076-.436.34-.959.64.001 0 .001-.002-.001-.002-.013 0-.13.04-.351.142-.421.195-.654.468-.654.77 0 .056 0 .17.18.553l-1.988.122z"/>\n        </symbol>\n        <symbol width="32" height="25" viewBox="0 0 32 25" id="map-san-martin">\n            <path fill-rule="evenodd" d="M26.51 23.535c-.158-.195-.435-.509-.897-.733.07-.298-.102-.482-.247-.536l-.18-.071c-.14-.176-.313-.367-.703-.367l-.109.004c-.299.027-.72.277-.84.574-.048.116-.09.408-.126.866-.179-.032-.552-.113-1.324-.309l-.37-.09c-.346-.083-1.314-.204-1.944-.204-.14 0-.262.008-.356.02-.469.063-1.71.733-2.166.986l-1.213.097c-.045-.068-.095-.15-.132-.223-.107-.211-.394-.324-1.187-.595-.266-.092-.5-.169-.59-.221-.118-.068-.414-.508-.556-.72-.1-.15-.188-.28-.256-.366-.269-.342-1.893-.798-2.385-.93-.035-.007-.13-.028-.369-.108-.254-.084-.888-.122-1.27-.139-.024-.06-.069-.233-.11-.462l-.014-.068-.049-.076c-.006-.01-.037-.055-.32-.319-.234-.218-.533-.462-.84-.686-.119-.087-.243-.154-.354-.212-.069-.038-.173-.094-.198-.122-.007-.082.058-.636.117-.765.206-.357-.122-.957-.312-1.104-.068-.051-.18-.105-.529-.26-.24-.11-.804-.361-.904-.447-.145-.168-.908-.918-1.189-1.14-.088-.067-.29-.2-.547-.368-.339-.22-1.107-.722-1.217-.863-.11-.213-.593-.815-.87-1.155-.128-.24-.279-.56-.308-.662.02 0 .084-.071.266-.155.213-.098.292-.122.303-.125.766-.424 1.17-.714 1.29-.9.127-.2.284-.546.271-.841.093.01.19.018.287.027.12.008.256.015.401.015.446 0 .818-.07 1.136-.214.21-.096.523-.277.855-.472.341-.2.726-.427.936-.512.176-.068.605-.183 1.021-.296 1.185-.319 1.366-.368 1.431-.616.054-.214-.034-.335-.74-1.207-.178-.217-.374-.458-.455-.571-.024-.255-.15-.532-.448-.63-.205-.067-2.235-.579-2.493-.62l-.298-.051-.115-.003c-.009 0-.697.063-.92.063.014-.008-.137-.179-.21-.26-.175-.199-.278-.31-.389-.365-.145-.07-.203-.088-.234-.096l-.257-.009c-.107 0-.23 0-.289-.01-.055-.036-.49-.374-.62-.482-.032-.258-.168-.45-.38-.53-.077-.028-.236-.06-.422-.094-.187-.032-.55-.096-.634-.147L.85 2.593c-.069-.356-.136-.747-.136-.835C.72 1.65.847 1.023.98.422L2.315.035c.167.037.475.11.631.21.212.135.381.302.56.48.235.233.476.47.814.634.544.265.744.311.793.32l.13.008c.61.031 3.963.2 4.682.23.19.008.405.008.634.008.625 0 1.476 0 1.75.202.16.115.364.256.581.404.413.281.895.611 1.086.799.417.406 2.095.82 2.797.82l.786-.008c.027.003.84.067 1.53.067.674 0 .894-.06 1.01-.113.25-.113.785-.408 1.215-.643.252-.138.47-.259.575-.311.148-.076.23-.113.271-.131l.076-.001c.193 0 .356.034.436.09l.197.145c.575.431 1.096.81 1.414.89.363.09.54.117.552.12l1.912.078c.06-.005 1.084-.125 1.632-.125.165 0 .216.01.221.013.372.092 2.418.81 2.644.973l.13.13c-.015.287-.046.916-.033 1.06-.002.04-.06.18-.1.272l-.089.218c-.153.404-.179.984.207 1.4.144.155.365.329.561.48l.056.043c-.275.11-.682.262-.979.36-.12.04-.243.088-.36.134-.142.053-.349.134-.414.138-.04-.04-.103-.07-.122-.079-.055-.022-1.452-.602-1.506-.626-.19-.082-1.128-.091-1.137-.091-.364 0-.464-.006-.476-.007-.318-.057-.924-.155-1.176-.155-.226.013-.334.033-.383.043-.262.015-.505.128-.608.397l-.115.3.017.108c.131.5.193.59.22.627.017.025.063.085.128.165.092.113.367.455.41.546.04.095.045.14.045.14.001.045-.009.201-.222.284l-.192.073c-.534.198-1.123.415-1.123.932 0 .415.314 1.394.363 1.507.065.15.186.254.386.427.11.094.246.21.418.372.44.412 1.385 1.512 1.498 1.72.116.216.592.575 1.614 1.298.24.17.43.304.508.368.085.068.251.18.446.309.298.198 1.014.671 1.108.835.104.24.264.768.326.99-.055.047-.169.134-.399.283-.533.342-1.877 1.767-2.035 2.04l-1.168 1.86c-.058.014-.17.025-.284.031.025-.255-.156-.472-.255-.59z"/>\n        </symbol>\n        <symbol width="108" height="67" viewBox="0 0 108 67" id="map-loreto">\n            <path fill-rule="evenodd" d="M31.703 66.717c.027-.042.06-.092.091-.148.101-.162 1.342-1.507 1.818-1.812.484-.311.774-.523.721-.857-.02-.134-.26-.927-.4-1.25-.128-.296-.607-.63-1.324-1.103-.197-.131-.345-.23-.42-.29-.084-.066-.276-.204-.522-.377-.41-.292-1.32-.936-1.44-1.097-.16-.298-1.176-1.46-1.62-1.878-.173-.161-.31-.28-.423-.377-.108-.094-.21-.182-.233-.214-.046-.113-.3-.972-.3-1.228.053-.071.47-.226.671-.3l.22-.083c.545-.213.661-.698.643-.951.001-.032-.01-.148-.094-.35-.062-.151-.25-.391-.49-.69l-.118-.147c-.008-.021-.05-.157-.09-.298l.045-.116h.17c-.009.003-.01.005-.006.005.014 0 .076-.01.191-.018.21 0 .937.119 1.104.149.057.006.166.013.56.013.397 0 .842.037.916.05-.007.003.586.248 1.016.427l.434.18.24.12.162.019c.18 0 .382-.08.64-.178.116-.046.23-.09.341-.127.056-.018 1.378-.455 1.571-.68l.086-.097.001-.178c-.02-.21-.193-.343-.535-.608-.169-.131-.36-.278-.48-.407-.23-.247-.1-.637-.073-.712l.065-.16c.101-.236.182-.428.165-.624-.005-.064.006-.437.042-1.106l.007-.127-.096-.128-.262-.26c-.31-.3-2.754-1.086-2.935-1.131-.088-.022-.21-.032-.387-.032-.604 0-1.648.126-1.658.127l-1.825-.077c.012 0-.147-.028-.447-.104-.213-.053-.895-.565-1.152-.757l-.234-.174c-.249-.177-.582-.214-.818-.214-.114 0-.194.009-.205.01-.066.016-.139.038-.447.194-.11.055-.336.179-.596.322-.452.248-.939.516-1.169.62-.013.005-.143.054-.72.054-.646 0-1.419-.06-1.512-.066l-.805.007c-.677 0-2.127-.42-2.344-.631-.237-.232-.737-.572-1.177-.873-.244-.166-.422-.288-.562-.391-.453-.33-1.313-.33-2.145-.33-.219 0-.427 0-.608-.008-.657-.026-3.527-.171-4.467-.218l-.293-.015c.01-.003-.165-.056-.58-.258-.238-.115-.42-.297-.634-.507-.188-.186-.399-.395-.67-.57-.178-.112-.423-.201-.788-.285l-.024-.03-.19-.015c-.164-.032-.33-.062-.49-.09-.293-.05-.726-.126-.82-.188-.178-.12-.522-.546-.778-.906-.027-.076-.088-.232-.223-.522-.155-.332-.22-1.635-.166-2.145.033-.318.531-.975.718-1.223.103-.137.154-.211.171-.244l.057-.098c.511-.858.653-1.265.541-1.555-.037-.097-.12-.271-.216-.474-.176-.37-.47-.988-.52-1.257-.04-.206.037-.786.082-1.132.063-.49.09-.712.051-.86-.043-.158-.17-.316-.434-.63-.203-.245-.455-.547-.529-.73-.062-.157-.075-.337-.087-.512-.016-.23-.033-.47-.165-.673-.107-.165-.508-.571-1.154-1.22-.39-.39-.744-.744-.85-.874-.106-.13-.074-.453-.04-.768.011-.122.024-.25.031-.372.007-.143-.02-.408-.315-1.085l.04-.005c.37-.038 6.957-1.813 8.274-2.17l4.922-1.462 1.622-.62 4.836-3.035 2.566-1.708 4.991-4.11c.006 0 .333-.196.527-.3.127-.068.83-.56.927-.82l.067-.19c.341-1.714.774-3.584.962-3.992l.164-.04c.028.002.092.008.197.027.081.015.19.023.311.023.028 0 .697-.002.934-.17.155-.108.222-.18.222-.18.107-.147.274-.421.253-.656-.02-.222-.219-.392-.43-.573-.063-.054-.124-.103-.159-.144-.028-.033-.047-.056-.06-.074 0 0-.16-.288-.225-.408.036-.401.042-.74-.154-.926-.04-.04-.075-.07-.103-.096l.088-.082-.003-.136c-.018-.687-.178-.815-.238-.863l-.113-.09c-.303-.125-.542-.235-.595-.282-.107-.124-.319-.37-.81-.455-.302-.051-1.057-.425-1.173-.502-.012-.01-.866-.605-1.109-.778.31.052.65.099.92.099.088 0 .17-.005.238-.016.14-.021 1.357-.215 1.827-.531.371-.25.416-.297.416-.297.201-.093.511-.224.594-.232.35 0 .812.04.966.115.49.24.92.44 1.262.472.108.01.194.013.27.015.163.006.217.007.346.074.3.154.866.195 1.153.195.127 0 .244-.007.338-.02.173-.023.75-.165.913-.462.026-.008.06-.015.082-.015.05.023.304.219.458.389.043.048.092.09.143.127-.037.04-.063.09-.075.153l-.036.18.174.163c.182.145.417.228.641.228.076 0 .151-.01.222-.03l.202-.054c.122.129.312.208.474.208.108 0 .206-.033.284-.095.052-.041.092-.088.127-.13h.01c.08 0 .188.066.305.136.166.098.346.205.521.282.048.02 1.165.507 1.482.524l.398-.011c.171 0 .221.03.231.04.051.044.06.08.08.176.016.077.036.172.094.266.098.157.281.273.458.385l.147.095c.022.1.06.275.255.362.04.017.084.03.141.042-.039.054-.065.118-.07.195l-.01.16.176.18c.132.1.326.146.551.2l.147.037c-.039.014-.079.032-.117.054-.112.064-.265.153-.264.35.001.196.153.28.264.343.046.026.107.06.184.109.113.073.121.166.12.299l.01.145c.03.133.077.335 1.101.372.141.005.807.086 1.16.183.307.085.554.14.76.14.195 0 .347-.053.452-.158.086-.086.142-.186.187-.266.018-.034.046-.083.06-.098-.006.013 0 .023.008.03-.012.153-.009.32.11.457.057.067.163.148.347.158h.005c.2 0 .37-.056.521-.105.014-.004.027-.01.04-.013l.111.163c.092.099.233.153.398.153.055 0 .137-.006.22-.036.023.198.137.369.474.513.42.178.681.197.912.215.188.015.278.04.373.069.112.033.24.07.381.078h.006c.267 0 .464-.072.578-.196.035.019.074.035.118.047l.037.009.116.01c.221 0 .361-.126.421-.181.13.112.263.163.396.163.075 0 .147-.017.212-.05.002.207.038.447.256.558.075.038.157.057.242.057.032 0 .063-.002.092-.007.001.027.006.055.014.084l.054.18.027.007c-.049.072-.077.16-.05.269.021.092.1.249.383.274h.081c.12 0 .192-.006.266-.014.072-.007.146-.015.217-.015.082 0 .122.012.141.022l.115.065c.122.072.227.133.448.133l.111-.003.091.052c.074.146.223.307.363.425-.247.203-.66.613-.687.886-.035.085-.094.237-.002.395.101.172.303.213.485.237.244.033.374.099.54.184.081.04.164.084.263.126.172.072.337.109.487.109.128 0 .22-.027.27-.041.022 0 .097.007.214.084.17.11.363.172.542.172.18 0 .337-.06.456-.173.058-.055.1-.111.13-.156.205.062.358.098.484.098h.106l.171-.09c.01 0 .163-.041.292-.041.166.039.28.046.374.047.001.1.03.22.127.339.136.166.345.188.498.204l.054.006c-.01.06-.017.134-.003.238.005.034.006.08.008.133.01.244.026.667.308.86-.294.155-.614.366-.597.713.002.057-.013.145-.029.23-.04.229-.118.656.274.835.222.1.528.24.615.313.298.25.574.379.82.379.367-.03.556-.274.67-.42.03-.002.061-.004.091-.004.132 0 .245.023.276.037.056.034.293.21.514.375.194.144.376.279.441.32.088.059.2.09.322.09.225 0 .52-.11.634-.351.02-.04.031-.076.04-.108l.347.02.005.007.192.012c.19 0 .32-.155.362-.205.04-.048.07-.077.091-.095-.004.02.013.048.03.075.065.108.176.29.404.29.106 0 .207-.042.301-.126.055-.05.105-.105.153-.16.035-.038.088-.097.11-.11-.025.03.058.115.12.177.138.143.282.29.482.29h.112l.136-.092c.032-.025.094-.056.162-.092.267-.142.597-.318.612-.618l.05.028c.162.09.346.192.54.206l.287.02c.272.022.617.048.802.056.074.003.088.009.117.023.076.034.16.065.326.068h.001c.213 0 .38-.068.5-.118.041-.017.098-.04.118-.044-.018.005.028.039.134.182.13.174.48.435.912.435.09 0 .18-.012.264-.035.114-.031.234-.053.346-.073.326-.057.633-.113.718-.393.012-.041.017-.08.017-.115.132-.027.24-.044.338-.06.17-.028.287-.048.374-.07.148.123.288.223.465.223.334-.037.483-.318.581-.504.021-.04.038-.075.055-.097.018-.024.045-.068.078-.126.087-.156.27-.478.51-.478.302.06.526.135.723.2.273.093.49.165.661.165h.093l.165-.073c.168-.115.233-.26.281-.366.015-.034.03-.07.054-.107.034-.032.3-.251 1.513-1.1 0 0 .257-.18.297-.204.135.236.318.544.631.544h.037l.372-.09.06-.066c.003 0 .08-.05.25-.065h.007c.166 0 .366.042.56.083.235.05.478.1.688.1l.39-.004.038-.006c-.012.2.006.398.13.537.082.09.197.14.323.14h.044l.114-.022c.352-.105.494-.37.578-.53.071-.102.136-.136.16-.137.05.09.245.364.22.514-.034.216 0 .387.104.509.088.104.217.16.365.16.08 0 .163-.015.258-.047.117-.04.282-.126.46-.223.188-.104.503-.276.625-.276.038.01.085.065.135.122.076.088.192.22.38.22h.124l.17-.13c.075-.075.127-.16.17-.23l.01-.017c.291.158.535.235.738.235.207 0 .341-.08.418-.147.04-.032.193-.09.295-.128.333-.126.711-.268.737-.62.003-.043.008-.08.012-.106l.068.025c.218.079.488.179.698.179.177 0 .282-.071.34-.13.22-.231.195-.606.097-.861.12.026.213.069.303.11.168.077.341.157.53.157.092 0 .18-.02.26-.06l.146-.073c.112-.056.307-.155.402-.19.045.01.09.014.137.017.133.01.24.023.292.093.168.218.68.385 2.025.66l.047.01c.017.129.08.286.281.378.074.035.15.055.218.07-.047.162-.065.339.044.496.066.096.202.21.472.21l.195-.011c.512-.04.955-.073.955-.49 0-.032-.003-.073-.009-.117.69.09.91.167.97.214.056.05.088.112.124.183.057.11.163.32.422.339h.006c.215 0 .368-.078.515-.154.063-.032.13-.067.205-.097-.066.06-.112.135-.122.235-.009.074-.002.26.233.39.142.08.324.12.541.12.297 0 .631-.08.83-.2.05-.03.114-.055.178-.073-.065.165-.145.462.135.632.146.088.338.14.517.14.148 0 .276-.035.374-.104.046.12.141.204.286.247.122.037.248.075.383.075.172 0 .327-.061.475-.187.105-.09.173-.197.228-.283l.004-.007c.025.036.052.09.094.176.03.06.062.128.1.197.091.163.233.244.37.287-.34.354-1.049 1.044-1.704 1.663l-6.526 7.807.83-.162s.728-.142.892-.163c.031-.004.07-.005.118-.005.096 0 .937.028.937.028.448 0 .865-.15 1.268-.293.187-.067.37-.133.543-.178.108-.028.213-.058.317-.09.306-.088.595-.172.942-.172.1 0 .206.006.32.022.72.098 1.553.485 1.658.633.18.337.561.706 1.02.98l.224.144c.314.204.61.395 1.114.406.511.01.717.027.845.17l.183.199c.193.21.418.452.472.534l.013.022c0 .032-.003.062-.006.086l-.049.048c-.094.093-.18.17-.29.17-.173-.025-.29-.054-.404-.08-.22-.052-.446-.105-.697-.105-.295 0-.962.123-1.165.408-.052.073-.08.156-.106.228l-.016.044c-.272-.12-.713-.402-.92-.577-.024-.025-.025-.17-.025-.23 0-.171-.003-.43-.228-.558-.2-.117-.564-.16-.745-.16-.14 0-.237.023-.312.074-.11-.02-.218-.035-.249-.042-.122-.038-.287-.088-.469-.088-.213 0-.398.07-.537.202-.118.112-.175.2-.213.259-.217.022-.36.038-.482.038-.085 0-.113-.01-.114-.01-.062-.1-.194-.26-.426-.26-.1 0-.203.032-.305.095-.13.08-.19.175-.222.249-.027.002-.065.004-.115.005h-.742c-.766 0-1.517.013-1.823.097-.355.098-.949.424-1.112.732l-.06.115.028.207c.02.056.051.118.085.18l.018.036c-.279.189-.429.267-.498.267-.054 0-.113-.01-.176-.018-.104-.015-.214-.03-.329-.03-.213 0-.398.05-.564.15-.456.279-.593.29-.599.29-.14.005-.857.038-1.188.196-.146.069-.21.152-.245.198l-.003-.001c-.018 0-.123.02-.42.026h-.025c-.295 0-.488-.015-.663-.03-.159-.011-.302-.022-.43-.022-.234 0-.528.03-.745.268-.13.144-.29.226-.438.226-.062 0-.119-.015-.17-.044-.212-.118-.58-.188-.99-.188-.222 0-.64.024-.964.18-.168.082-.337.189-.5.294-.248.158-.503.32-.676.32-.086-.001-.109-.01-.11-.01-.137-.091-.269-.158-.678-.182l-.145-.004c-.507 0-3.288.232-3.627.56-.154.15-.273.282-.329.347-1.382.79-2.955 1.623-3.224 1.66-.397.038-.506.042-.522.043h-.004c-.15 0-.495.028-.875.28-.12.079-.323.175-.538.278-.729.349-1.14.564-1.14.918 0 .188-.015.25-.027.27-.03-.003-.392-.005-.392-.005-.213 0-.466.01-.732.086l-.318.082c-.78.197-1.26.339-1.373.66-.032.094-.034.178-.022.25-.172.028-.36.04-.539.05-.336.022-.626.04-.834.144-.09.045-.19.11-.3.182-.209.138-.445.294-.679.32-.105.01-.212.018-.316.024-.383.023-.745.045-.953.299-.114.137-.276.334-.225.6.047.24.245.443.644.66.16.086.22.14.24.164-.013 0-.03.03-.044.055-.049.089-.116.21-.14.366-.057.368-.077.942-.04 1.158l-.004-.001c-.026 0-.15.143-.264.244-.38.628-.444.936-.43 1.096-.078.06-.229.134-.293.143-.41.004-1.175.009-1.598.416-.326.313-.878.512-1.04.566-.247.075-.73.222-.862.633-.064.2-.05.37-.04.506.007.106.013.183-.014.266-.127.373-.184.543-.097.72.04.078.097.125.16.157-.069.07-.142.214-.117.38.018.12.097.29.364.41.114.052.281.104.468.16.327.1.774.238.952.414l.138.14c.25.26.447.464.984.604.252.065.366.143.422.2-.06.23.028.453.272.714.156.166.323.282.463.37-.237.138-.59.298-.907.33-.188.018-.539.02-.928.023-.977.007-1.637.02-1.902.142-.338.154-.673.156-.676.156-.106 0-.236.042-.696.213l-.316.116c-.119.04-.298.093-.496.15-.366.105-.78.225-1.038.343l-.317.147c-.228.008-.483.06-.658.262-.102.118-.134.23-.155.305-.012.043-.04.072-.16.113-.157.052-.288.092-.408.129-.232.07-.427.13-.68.239-.283.12-.396.216-.516.317-.056.048-.12.103-.22.17-.075.052-.178.09-.268.125-.164.062-.387.147-.4.389-.015.245.22.366.308.412.124.064.26.112.387.157l.114.04-.006.007c-.213.252-.506.596-.434.984.041.219.188.399.436.534.135.073.267.14.39.204.254.13.601.308.653.398-.008.048.002.129.013.205.005.044.014.104.011.124l-.285.105c-.289.142-.965.472-1.117.497-.004-.003-.068-.014-.145-.026-.178-.03-.412-.065-.587-.065-.14 0-.338.018-.456.176l-.089.12.035.212c.063.209.245.368.422.522.035.03.08.07.117.105-.089.097-.26.238-.4.326-.41-.108-.736-.195-.804-.22-.033-.016-.175-.064-1.452-.478-.944-.305-2.014-.651-2.299-.758-.328-.123-.495-.186-.714-.186-.152 0-.305.03-.57.093-.217.052-.456.125-.537.348-.075.207.05.37.095.433.01.04.025.237.458.78.002.03.005.065.01.105.004.079-.022.647-.058 1.26 0 .33-.05.69-.103.77-.096.13-.625.499-1.155.805-.269.155-.906.244-1.248.292l-.203.03c-.264.044-1.605.619-2.683 1.095-1.46.505-3.23 1.123-3.347 1.19-.047.017-.394.093-.807.163.005-.003-.113-.006-.482-.024h-.004c-.63 0-1.42.317-1.649.414-.165.07-.319.184-.454.284-.122.09-.257.19-.353.22-.279.086-1.093.355-1.108.36-.094.05-.83.598-.914.95-.074.319.217.54.538.747l-.283.107-.199-.005c-.095-.003-.197-.09-.225-.12l-.036-.037-.06-.034-.269-.131c-.199-.096-.367-.156-.586-.156-.1 0-.212.012-.352.04-.369.074-1.626.619-1.978.858-.134.09-.38.27-.642.464-.3.219-.648.476-.735.525-.026.003-.287.047-.473.073l-.012-.02"/>\n        </symbol>\n        <symbol width="25" height="22" viewBox="0 0 25 22" id="map-ancash">\n            <path fill-rule="evenodd" d="M16.898 21.197c-.058-.293-.253-.867-.451-1.067-.232-.237-1.07-.333-1.455-.365l.006-.022.004-.083c.03-.038.198-.206.311-.28.219-.144.274-.43.145-.743-.045-.098-.116-.161-.22-.234-.093-.064-.22-.098-.635-.098-.203 0-.41.008-.482.012-.073.012-.168.035-.35.088-.425.122-.611.78-.614.786-.012.054-.024.223-.033.455-.01.235-.028.643-.059.797-.42-.274-.493-.373-.497-.378-.11-.323-.363-.535-.697-.565-.082-.012-.31-.12-.677-.32.042-.042.07-.097.082-.163.052-.283-.24-.394-.381-.447-.183-.07-.363-.112-.53-.151-.168-.04-.312-.074-.422-.128-.072-.034-.069-.047-.06-.097.063-.356-.815-.997-1.094-1.048-.215-.04-.282-.056-.296-.06-.013-.016-.245-.163-.364-.305l-.035-.04c.033-.05.047-.095.053-.12.019-.085.03-.31-.286-.507-.046-.03-.109-.063-.176-.1-.074-.04-.2-.108-.263-.154l-.024-.227-.159-.07c-.083-.037-.173-.081-.234-.114l.063-.073s-.073-.3-.1-.417c.183-.264.064-.49.016-.561-.144-.214-.373-.317-.689-.46l-.142-.064c-.057-.083-.102-.226-.314-.344-.103-.056-.271-.138-.448-.223-.23-.112-.475-.227-.567-.292-.152-.107-.32-.117-.432-.124H4.39c-.03 0-.07-.211-.09-.326-.016-.084-.028-.152-.041-.21.376-.011.586-.034.638-.28l.049-.231-.242-.128-.21-.1-.058-.004c-.177-.011-.387-.04-.439-.062-.021-.021-.131-.17-.237-.352-.116-.201-.449-.351-.668-.351h-.048l-.098.022c-.052.016-.095.037-.138.058l-.106.025-.123-.011c-.078-.04-.228-.113-.363-.18.187-.116.321-.277.244-.514-.084-.253-.386-.626-.764-.626h-.04l-.146.027c-.001-.09-.028-.196-.107-.314-.182-.271-.446-.42-.747-.42-.064 0-.13.007-.193.02l-.017.004c-.015-.098-.058-.2-.128-.301-.034-.05-.067-.098-.104-.141.414-.17.448-.22.494-.285.079-.113.103-.25.143-1.238l.006-.138c.052-.024.156-.065.369-.127.153-.045.321-.087.487-.128.54-.134.982-.242 1.2-.462.224-.231.29-.3.61-.3.54 0 .72-.063.816-.118.19-.111.29-.603.342-.997.014-.006.133-.108.197-.163.082-.07.15-.13.204-.19.12-.13.18-.297.229-.432.022-.063.055-.153.074-.178.328-.307.631-.625.612-.972-.015-.267-.034-.333-.05-.376L5.93 2.35c.117-.073.336-.21.729-.43.277-.16.31-.193.324-.207l.127-.127-.039-.208c.022-.07.039-.117.05-.151.467-.185 1.26-.486 1.525-.538.291-.06.64-.097.869-.097.06 0 .111.002.151.009.05.009.103.013.158.013.37 0 .81-.19.936-.248.41-.193.622-.273.7-.273.693.456.806.606.817.622.06.098.105.166.138.212.062.223.34.298.548.353l.145.038c.332.086.951.246 1.163.446.327.31.927.63 1.525.817.402.126.725.41.77.484-.005.014 0 .046.002.058v.086l.05.065.028.09.046-.003.76.514c.086.138.137.239.146.269.055.22.256.365.51.365h.005c.024 0 .09.01.247.043.1.034.476.278 1.113.724l.223.155c.012.013.052.092.076.139.045.087.095.182.168.259.04.043.15.163 2.17 1.012-.008.002.796.548 1.688.548l.206-.005c.434 0 .779.125.961.21l-.18.186c-.246.257-.246.514-.246.762-.018.024-.175.194-.35.329l-.27.312c-.254.303-.523 1.303-.552 1.747-.006.076-.131.249-.704.644-.114.076-.2.139-.243.179-.21.198-.393.538-.276.904.046.143.252.492.726 1.272.17.276.312.508.345.574.122.249.598.533.87.68.27.109.633.257.838.345-.003.157-.012.428-.027.719l-.831.352c-.035.003-.582.089-.942.146l-.53-.004c-.483 0-1.08.292-1.392.466-.405.227-.404.706-.402.91-.008.16.024.313.146.82.034.14.068.282.091.385-.068.04-.187.105-.392.202-.07.033-.125.06-.152.076.012-.007 0-.01-.031-.01-.042 0-.119.005-.228.005-.096 0-.193-.003-.27-.006l-.383.005c-.35.006-.77.119-.789.124l-.077.02-.07.066c-.024.024-.065.07-.156.21-.085.13-.14.366-.228.815l-.004.023c-.104.033-.28.08-.484.118-.04.01-.147.039-.275.067-.05.01-.137.035-.237.064-.12.035-.268.082-.357.098l-.006-.003z"/>\n        </symbol>\n        <symbol width="35" height="24" viewBox="0 0 35 24" id="map-lima">\n            <path fill-rule="evenodd" d="M26.788 23.277c-.2-.125-.389-.236-.496-.284-.088-.04-.233-.081-.393-.123-.143-.038-.429-.114-.526-.176l.027-.221c-.019-.276-.322-.327-.452-.35l-.28-.04c-.234-.031-.856-.114-.979-.208-.062-.057-.122-.103-.177-.144-.112-.085-.136-.102-.163-.23-.078-.358-.387-.988-.6-1.224-.196-.216-.399-.366-.807-.448-.242-.05-.342-.1-.38-.123l.012-.178c-.036-.288-.343-.305-.568-.317-.573-.031-.703-.12-.704-.12-.376-.38-.748-.63-1.1-.738l-.218-.062c.101-.078.23-.193.25-.377.014-.136-.033-.27-.143-.398-.233-.276-.472-.42-.683-.546l-.112-.068c-.045-.027-.072-.056-.11-.096-.137-.141-.28-.262-.662-.312l-.219-.028c-.46-.057-1.156-.144-1.533-.252-.222-.065-.54-.111-.835-.152-.214-.03-.508-.071-.58-.103-.05-.06-.266-.334-.336-.438l.007-.016-.067-.178c-.1-.204-.346-.29-.523-.335-.16-.042-.34-.068-.506-.09l-.09-.012c.007-.036.011-.073.011-.113 0-.146-.042-.323-.078-.48-.02-.087-.043-.167-.045-.217h.003c.04 0 .132-.12.092-.286l-.035-.144-.199-.115c-.175-.077-.265-.097-.296-.102-.004-.001-.208-.034-.386-.085.047-.075.074-.165.058-.265-.007-.045-.026-.106-.073-.166.018-.022.033-.047.046-.077l.074-.172-.137-.183c-.064-.074-.162-.138-.33-.246-.108-.068-.309-.196-.352-.253l-.014-.082v-.046c-.02-.26-.3-.327-.467-.366-.228-.054-.307-.074-.333-.081 0-.011-.346-.231-.523-.376-.173-.14-.459-.201-.843-.272-.119-.022-.28-.051-.325-.07-.067-.03-.14-.074-.216-.118-.149-.086-.304-.175-.46-.212l-.186-.043c-.328-.054-1.207-.221-1.57-.394-.32-.152-.83-.247-1.24-.324l-.197-.036c.011-.046.015-.094.01-.141-.003-.028-.01-.065-.025-.106.232-.06.387-.16.387-.375 0-.165-.158-.824-.635-.961l-.254-.07-.004-.108c-.036-.17-.177-.634-.454-.856-.153-.122-.385-.238-.609-.35-.128-.064-.248-.122-.32-.17-.077-.05-.182-.1-.293-.15-.094-.042-.27-.121-.307-.168l-.039-.13C2.19 5.693 2.08 5.335 1.8 5.2c-.167-.08-.805-.314-1.145-.438.02-.034.036-.07.047-.11.053-.187.071-.538.09-.98.006-.152.01-.288.018-.338.017-.066.12-.261.176-.301l.205-.052c.137-.006.28-.01.405-.01.062 0 .113.002.157.003-.168.146-.387.379-.402.605-.005.072-.005.135.001.189-.028.129-.038.314.072.466.082.116.218.184.371.184.23 0 1.053.114 1.203.2.057.076.236.596.251.727 0 .35.364.464.483.502l.044.014.101.01c.12 0 .27-.04.562-.126.101-.03.163-.048.201-.056.098-.021.187-.04.261-.065l-.002.002c.75-.14.927-.281.98-.48l.037-.18c.026-.137.1-.515.141-.6.006-.011.013-.02.02-.03.148-.033.358-.071.517-.074l.356-.006c.015 0 .146.007.293.007.365 0 .493-.032.582-.083l.11-.053c.492-.234.792-.398.792-.693 0-.095-.034-.246-.132-.653-.056-.234-.122-.496-.129-.584l.002-.081c0-.081-.003-.29.06-.325.331-.185.784-.382 1.066-.382l.583-.001c.307-.044 1.054-.163 1.09-.173.033-.01.636-.264.934-.391l.065-.027c.163.024.468.087.642.187.108.063.333.282.514.459.314.305.604.588.846.689.201.083.497.104.811.125.141.01.383.026.498.052l.02.01c.242.355 1.31 1.903 1.514 2.065.05.04.17.11.324.196.348.194.567.329.661.407l-.008.064c-.04.332-.105.884.3 1.19l.404.3c.365.16.64.312.75.388.036.145.123.262.193.346-.006.017-.01.034-.017.049-.034.104-.07.208-.079.312-.025.272.121.673.377.836.075.049.16.075.25.103.066.022.171.055.2.078-.002.49.132.864.367 1.039.192.142.516.24.836.325.09.026.125.046.167.068.133.069.316.164.516.193.236.034.324.035.34.035l.103-.015c.017-.006.414-.131.594-.168h.007c.26 0 .74.066 1.027.106l.195.026c.121.016.265.02.405.025l.113.003-.007.22c-.027.839-.025 1.072.005 1.19.046.175.062.22.063.224l.043.13.145.072c.086.038.463.22.63.373.058.054.115.133.178.215.188.25.42.558.837.714.505.188.587.2.617.204h.058l.11-.021c.14-.05.512-.192.665-.358.03-.031.051-.062.068-.091.071.003.144.012.24.026.237.034.573.107.93.184.654.142 1.362.295 1.861.326.34.02 1.007.063 1.251.127.053.155.16.398.343.8l.172.384c.124.299.178.39.184.402.185.326.361.739.362.848-.093.419-.156.997.084 1.256.103.11.322.239.653.38.011.237.032.487.077.616.025.074.015.224-.032.282-.088.113-.163.297-.142.836-.483.118-1.54.348-1.696.358-.038 0-.154-.03-.239-.052-.147-.038-.33-.086-.503-.086-.352.022-1.104.387-1.272.762-.102.228-.39.628-.733.738l-.588.186-1.295.652-1.416 1.07z"/>\n        </symbol>\n        <symbol width="40" height="17" viewBox="0 0 40 17" id="map-huanuco">\n            <path  fill-rule="evenodd" d="M11.71 16.676c-.149-.033-.337-.048-.583-.064-.219-.016-.505-.036-.603-.077-.125-.05-.418-.337-.632-.545-.245-.239-.47-.46-.65-.564-.206-.118-.467-.19-.675-.234.051-.979.016-1.015-.086-1.115-.05-.053-.084-.086-1.113-.498-.227-.125-.51-.317-.564-.387-.026-.057-.179-.31-.358-.603-.226-.37-.62-1.019-.667-1.14-.018-.057.035-.149.098-.209.028-.024.085-.062.155-.11.392-.27.97-.668 1.001-1.157.026-.396.28-1.22.4-1.362l.197-.238c.27-.213.577-.524.577-.83 0-.218.005-.243.061-.303l.182-.188.394-.346.005-.17-.008-.147-.133-.11-.222-.16c-.033-.023-.61-.4-1.48-.4l-.139.001c-.716 0-1.365-.414-1.436-.46-1.024-.44-1.909-.836-2.038-.917l.004.001c.011 0-.016-.05-.029-.078-.07-.134-.155-.298-.314-.399-.027-.017-.102-.069-.197-.136-.846-.593-1.173-.793-1.358-.83-.169-.037-.256-.05-.303-.057-.057-.128-.144-.273-.217-.385l-.036-.056-.098-.068c.434-.043.903-.085 1.11-.085.348 0 .926.166 1.172.237l.11.03c.154.042.392.095.457.095l1.216-.16 1.53-.122.07-.036c.547-.31 1.692-.903 1.994-.944.071-.01.162-.013.267-.013.558 0 1.482.111 1.79.184l.291.072c1.102.28 1.5.362 1.7.362h.075l.132-.046.264-.14.031-.19c.028-.422.073-.845.1-.93.03-.04.203-.145.276-.152l.141.008c.086.171.166.225.327.292l-.02.087c-.038.287.238.42.44.517.232.111.465.294.608.475l.15.184-.022.028c-.089.114-.223.286-.125.498.037.08.135.212.372.217l.168.006c.085-.003.577-.028.724-.062l.257-.06.086-.113.77-1.225.043.034.07.02c.45.237.815.48.88.562.051.103.111.613.137.831.034.283.05.412.08.5.076.235.608.952 1.632 1.157l.326.062c.382.071 1.09.204 1.153.351.01.104.006.19.003.26-.008.215-.024.597.528.683.147.023.38.038.651.055.39.024.861.054 1.106.116l.218.062c.397.117.84.248 1.193.248.188 0 .338-.036.458-.11.138-.087.23-.223.258-.386.034-.195.05-.389.063-.56.011-.15.027-.37.058-.428l.087-.109c.135-.063.257-.102.302-.102h.001c.328 0 .511-.272.596-.42.06-.02.162-.047.296-.047h.438c.775-.124.865-.208.92-.258.083-.075 1.011-.797 1.373-.977.137-.069.286-.133.43-.196.312-.134.587-.253.771-.396.095-.074.264-.253.458-.463.254-.278.66-.719.823-.798.171-.083.316-.2.444-.305.16-.132.312-.255.474-.277.32-.043.66-.136.931-.21l.542-.14c0 .007.451.011.771.067.125.021.307.034.517.05.272.018.83.057.948.137l.14.117h-.306l-.097.063c-.054.035-.624.414-.75.597-.03.043-.125.18-.456 1.673l-.006.112c.042.571.188 2.478.328 3.067.063.264.092.441.112.558.033.201.061.374.24.49l.096.065.108.046c1.195.28 2.28.545 2.943.716-1.378.497-2.426.827-2.659.831-2.333.044-3.658.145-3.935.3l-.179.103c-.275.162-.786.462-1.05.462-.102 0-.38-.004-.733-.01-.716-.012-1.727-.027-2.463-.027-.462 0-.819.007-.94.025-.31.043-1.408.315-1.686.635-.047.054-.287.236-.43.344-.598.453-.81.63-.858.842-.016.038-.06.063-.18.07l-1.063-.005c-.637 0-1.018.024-1.235.078-1.68.434-1.777.703-1.824.831-.107.297.101.676.456 1.266l.088.146c.207.352.517 1.045.612 1.352-.127.033-.38.084-.65.084-.086 0-.172-.005-.252-.017l-.634-.096c-.027-.004-.954-.119-1.389-.119-.09 0-.164.006-.212.015l-.364.07-.09.103c-.014.016-.09.085-.165.085-.366-.088-.612-.145-.617-.146-.085-.008-.684-.053-.866-.053-.184 0-.304.015-.33.017.018-.006-.404-.059-.828-.059-.386 0-.664.042-.852.13-.164.074-.357.18-.544.282-.197.108-.498.274-.584.293-.23.02-.404.094-.436.11l-.048.021-.987.847z"/>\n        </symbol>\n        <symbol width="33" height="14" viewBox="0 0 33 14" id="map-pasco">\n            <path fill-rule="evenodd" d="M4.307 13.338c-.112-.006-.43-.036-.563-.05-.233-.135-.528-.268-.654-.322l-.301-.238c-.1-.075-.057-.427-.04-.577.012-.093.019-.167.019-.223 0-.316-.32-.527-.998-.904-.11-.061-.206-.113-.246-.143-.118-.12-.955-1.296-1.286-1.778l.86-.736c-.004.007.003.01.017.01.026 0 .08-.011.132-.015.182-.015.406-.133.818-.36.2-.11.375-.206.523-.274.044-.02.187-.067.567-.067.406 0 .818.053.828.054h.049l.094-.012c-.013.003-.013.004-.001.004.024 0 .098-.005.194-.005.147 0 .605.034.74.044l.547.132c.065.016.132.024.199.024.274 0 .48-.14.592-.241l.15-.03h.024c.446 0 1.244.095 1.347.109.02.002.162.022.636.095.113.018.235.026.358.026.336 0 1.03-.077 1.256-.37.324-.421-.608-2.006-.648-2.073l-.087-.146c-.09-.15-.293-.49-.366-.673.216-.108.75-.293 1.323-.437.153-.04.518-.058 1.085-.058l.903.006.18-.002c.556-.03.74-.337.797-.591.04-.025.439-.326.609-.455.275-.208.447-.34.532-.44.117-.101.85-.353 1.274-.411.106-.015.429-.02.845-.02.74 0 1.76.018 2.432.028.38.006.664.01.768.01.444 0 .989-.32 1.387-.552l.166-.096c.186-.074 1.496-.175 3.623-.217.487-.01 2.348-.672 3.394-1.06.019.096.03.168.03.195l-.022.086c-.233 1.014-.257 1.484-.087 1.733.037.054.07.158.104.257.088.267.209.633.584.917.303.229.46.345.556.403.167.157.322.32.387.4-.005.174-.033.61-.057.988-.03.472-.054.87-.054.966 0 .213.119.909.485 1.149.209.137.327.206.327.206l.064.013c.448.107 1.26.288 1.607.303l.23.009c-.595.16-.807.222-.882.255-.296.133-.306.569-.283.828-.185.089-.424.139-.73.139-.235 0-.48-.028-.73-.058-.182-.021-.372-.043-.562-.055-.398-.026-1.242-.173-2.06-.315-1.038-.18-1.674-.288-1.944-.288-.533 0-5.165.564-5.726.678-.463.094-1.132.508-1.621.81l-.293.179c-.147.085-.376.128-.683.128-.162 0-.324-.012-.474-.026-.158-.015-.291-.023-.417-.023-.253 0-.485.033-.827.12-.272.07-1.15.26-1.867.416-.6.13-1.03.224-1.146.253-.033.006-.11.007-.21.007-.491 0-1.473-.058-2.136-.097-.422-.025-.695-.041-.77-.041-.353 0-.928.25-1.151.37-.096.054-.431.124-.78.164l-.36-.002c-.142 0-.27.06-.358.172-.154.197-.13.496-.09.686l-.014.112c-.033.032-.086.075-.118.1-.117.097-.224.184-.285.298-.02.038-.038.079-.056.12-.018.042-.04.089-.052.108.002-.004-.002-.005-.011-.005-.036 0-.151.028-.296.066-.762.197-1.3.31-1.3.31"/>\n        </symbol>\n        <symbol width="42" height="17" viewBox="0 0 42 17" id="map-junin">\n            <path fill-rule="evenodd" d="M14.697 16.213c-.136-.066-.214-.114-.236-.135.002-.03.01-.34.084-.678.068-.313-.2-.88-.437-1.3-.009-.015-.05-.094-.149-.328-.04-.094-.106-.24-.176-.395-.11-.246-.312-.686-.334-.785-.07-.429-.659-.466-1.829-.54-.45-.028-1.13-.176-1.73-.306-.386-.083-.749-.16-1.006-.2-.169-.024-.292-.034-.384-.034-.283 0-.452.107-.533.336-.013.003-.147.065-.292.121-.07-.023-.196-.066-.413-.147-.234-.088-.387-.29-.535-.486-.089-.118-.174-.227-.263-.31-.188-.17-.478-.33-.67-.425l-.014-.049c-.013-.093.004-.665.013-.972.012-.365.012-.556.006-.595-.05-.327-.386-.335-.74-.345-.135-.004-.255-.007-.355-.02l-.178-.024c-.353-.049-.829-.115-1.096-.115-.073 0-.129.004-.177.014-.16.034-.468.126-.6.168-.04-.004-.106-.012-.207-.026-.086-.012-.207-.074-.303-.124-.087-.046-.154-.08-.225-.1-.2-.054-.573-.152-.688-.238-.032-.032-.11-.228-.132-.612-.02-.412-.428-.54-.624-.6-.042-.015-.082-.025-.109-.039C.347 6.901.3 6.77.302 6.717c.003-.03.033-.117.047-.159.06-.177.121-.36.02-.532l-.015-.025c.184-.017.552-.103 1.42-.327.181-.047.307-.08.345-.088.286-.06.396-.317.455-.455.041-.08.112-.138.154-.172.161-.132.33-.268.352-.477l.034-.279s-.027-.133-.03-.165h.198c.033-.002.75-.072 1.063-.242.265-.144.685-.29.832-.29.07 0 .336.016.677.036.717.043 1.706.101 2.22.101.242 0 .326-.013.38-.026.115-.029 1.137-.25 1.137-.25.725-.158 1.606-.349 1.88-.42.286-.072.466-.099.663-.099.108 0 .221.008.355.02.167.015.351.028.534.028.432 0 .765-.07 1.017-.216.08-.046.184-.11.305-.186.398-.246 1.061-.657 1.41-.728.481-.097 5.116-.664 5.592-.664.233 0 1.07.146 1.808.274.841.147 1.71.298 2.153.327.173.011.347.031.516.051.287.033.555.063.816.063.27 0 .51-.032.728-.099v.001c-.027.613-.028.68-.015.743.08.421.838.44.845.44.255-.008.386-.024.432-.036.045-.014.224-.073.451-.073.048 0 .097.003.15.01.305.037.391.053.41.057.021.002.045.003.074.003.136 0 .372-.025.791-.143.258-.072.543-.112.803-.112.153 0 .288.014.39.041.014.004 1.28.311 1.951.311.255 0 .418-.043.53-.139.197-.17 1.31-2.038 1.431-2.54.17.028.378.056.57.056.12 0 .221-.01.312-.03.112-.027.208-.064.293-.097.088-.036.147-.06.185-.06.141.036.3.056.482.078.22.025.587.068.714.148.277.175.638.461.77.575.101.088.143.131.151.14.17.235.39.613.403.726 0 .305.02.386.021.39l.02.097.083.084c.39.333.676.601.724.663.05.106.085.164.087.168 0 0 .398.726.531.898.073.096.15.168.23.22l.108.652c-.158.176-.597.533-.73.58-.174.061-1.379.22-1.63.228-.162.006-.298.083-.376.21-.13.211-.048.467.013.6l.031.067.068.06.161.117c.04.03.16.117 1.552.837.06.03.225.12.33.193l-.009-.003c-.03 0-.02.132-.052.37-.02.061-.196.295-.359.467-.035.036-.098.126-.15.258-.032.081-.052.215-.15 1.024-.038.315-.073.613-.096.77-.278.152-1.188.538-1.349.592-.097.032-.816.247-1.036.311-.135.04-.224.101-.282.167-.418-.037-.909-.083-.99-.1l-.15-.016c-.218 0-.419.098-.549.18-.036-.017-.21-.08-.35-.13-.132-.046-.229-.062-.333-.062-.277 0-.559.11-.786.198l-.154.06H33.9c-.16 0-.34-.07-.532-.144-.127-.05-.258-.1-.394-.143-.128-.04-.246-.084-.36-.125-.323-.117-.61-.22-.914-.22-.26 0-.342-.039-.52-.12-.12-.056-.235-.078-.375-.078-.267 0-.542.082-.544.083l-.079.025-.232.241c-.107.114-.705.454-1.17.647-.65.27-.936.42-1.02.652-.016.036-.05.097-.09.16-.942-.357-1.768-.704-1.894-.798.04-.027.203-.356.291-.533.116-.234.326-.34.53-.443l.126-.065c.332-.18.538-.496.49-.75-.055-.28-.263-.36-1.538-.36h-.184c-.186.004-.538.07-1.096.177-.6.115-1.28.245-1.734.275-.12.008-.252.011-.388.011-.798 0-1.793-.117-2.07-.18-.096-.023-.192-.034-.285-.034-.343 0-.63.148-.716.367-.045.118-.068.352.28.606l.34.152c-.06.124-.255.382-.347.501-.052.026-.134.068-.258.134-.326.173-1.402 1.82-1.615 2.148l-.137.32c-.09.057-1.07.616-1.542.885-.477.272-.826.473-.948.558-.133.095-.22.197-.278.297"/>\n        </symbol>\n        <symbol width="76" height="31" viewBox="0 0 76 31" id="map-ucayali">\n            <path fill-rule="evenodd" d="M39.692 30.774c-.036 0-.123 0-.167-.006-.116-.157-.44-.73-.527-.892-.011-.02-.035-.064-.077-.149-.027-.054-.08-.162-.76-.749l-.002-.167c0-.304-.3-.787-.551-1.139-.035-.04-.086-.098-.234-.226-.143-.124-.539-.437-.85-.634-.255-.162-.645-.207-.992-.247-.141-.017-.263-.028-.337-.05-.074-.02-.149-.032-.223-.032-.167 0-.304.055-.423.103-.065.026-.128.052-.205.07-.029.007-.08.014-.164.014-.203 0-.434-.042-.565-.066l-.152-.018c-.119 0-.227.04-.315.112-.193.161-.193.423-.193.51-.07.194-.96 1.81-1.192 2.086h-.103c-.456 0-1.408-.189-1.79-.29-.159-.042-.347-.063-.56-.063-.32 0-.67.048-.984.136-.361.102-.551.121-.6.124.002-.004-.112-.024-.413-.06-.08-.01-.16-.015-.234-.015-.307 0-.557.072-.64.102.003-.002-.002-.003-.014-.003-.03 0-.212.01-.212.01-.072 0-.145-.014-.203-.03.01-.11.018-.295.025-.456.03-.634.029-.654.008-.725-.006-.04-.009-.17-.003-.266.145-.042.392-.109.643-.178.468-.127.87-.237.982-.277.327-.118.443-.36.443-.53v-.132l-.186-.19c-.075-.073-.179-.173-1.108-.182-.01 0-.114-.002-.477-.016-.287-.012-1.154-.208-1.472-.283.006-.005-.06-.047-.188-.13-.072-.066-.184-.416-.184-.592 0-.09.023-.47.05-.873.062-.964.068-1.13.059-1.206-.01-.084-.03-.24-.628-.79-.064-.046-.187-.124-.577-.419-.21-.16-.28-.37-.354-.594-.05-.15-.098-.296-.187-.425-.006-.035-.027-.273.187-1.206.024-.11.035-.156.036-.176.015-.105-.02-.33-.102-.669l.003-.005-.041-.15-.01-.01-.07-.177-.152-.014-.051-.04c-.059-.045-.196-.148-3.735-.976-.005-.022-.009-.047-.014-.078-.02-.126-.051-.318-.12-.603-.104-.438-.233-1.873-.312-2.969.15-.618.316-1.274.363-1.378.021-.014.238-.176.482-.344h.232c.23 0 .658 0 .732-.437.06-.337-.227-.575-.505-.804-.308-.257-.75-.302-1.397-.347-.175-.012-.342-.023-.45-.04-.4-.07-.916-.07-.92-.07l-.106.01-.544.137c-.28.077-.587.163-.876.202-.348.047-.592.245-.806.42-.11.09-.212.174-.313.223-.258.126-.597.481-1.01.932-.168.182-.311.341-.39.402-.117.091-.364.2-.605.302-.164.071-.33.143-.483.22-.437.216-1.441 1.002-1.53 1.084.003-.003-.002-.004-.01-.004-.05 0-.254.045-.511.09l-.383-.005c-.352 0-.649.117-.747.2l-.042.036-.065.11c-.018.03-.066.12-.095.142h-.039c-.214 0-.518.155-.58.188l-.05.027-.046.051-.149.187c-.148.19-.167.45-.193.777-.01.14-.021.291-.045.444H7.33c-.262 0-.687-.126-.967-.209-.11-.034-.206-.062-.283-.08-.304-.078-.79-.108-1.217-.136-.226-.014-.432-.026-.566-.044.004-.093.009-.208-.005-.35-.06-.638-.852-.787-1.69-.945l-.323-.062c-.72-.143-1.095-.636-1.134-.72-.01-.047-.026-.193-.045-.36-.065-.542-.115-.907-.232-1.1-.03-.05-.092-.155-.383-.355.09-.045.26-.165.833-.586.264-.193.497-.364.624-.45.278-.189 1.445-.697 1.733-.755.09-.018.16-.028.221-.028.086 0 .151.02.294.09l.215.104c.104.098.336.274.646.283l.32.011.063-.019c.57-.214.625-.254.66-.278.078-.047.295-.173.332-.405.023-.13-.02-.266-.122-.368-.06-.062-.149-.118-.281-.202-.062-.039-.187-.118-.28-.186.129-.129.37-.345.455-.407.009 0 .77-.25 1.037-.334.207-.062.39-.199.553-.32.11-.082.226-.168.318-.206.293-.126.947-.362 1.322-.362.458.02.569.022.595.022.94-.157 1.046-.219 1.098-.249.13-.057 1.974-.703 3.239-1.14 1.34-.59 2.407-1.033 2.568-1.065l.185-.027c.415-.059 1.107-.156 1.49-.376.182-.106 1.108-.649 1.357-.985.21-.283.233-.897.233-1.148.07-1.21.06-1.306.054-1.352-.01-.096-.012-.149-.012-.158V1.26l-.078-.106c-.17-.207-.35-.468-.375-.546 0-.015-.002-.029-.005-.042.174-.04.273-.06.348-.06.098 0 .193.034.458.133.315.118 1.398.47 2.352.78.675.216 1.312.422 1.398.456.026.013.063.032.824.232.12.208.422.352 1.027.496l.527.122c.673.155 1.928.444 2.12.591.106.132.186.331.178.391-.03-.012-.08-.016-.141-.016-.088 0-.195.01-.288.017-.24.021-.386.033-.494.128l-.108.093-.011.177c.006.2.158.315.41.503l.131.1c.239.183.456.212.707.246.132.017.287.037.484.087l.164.04c.485.117.723.185.854.425l.113.214c.145.278.248.48.557.72.157.122.35.207.535.288.152.067.404.177.434.25.026.062.045.12.063.171.07.203.176.51.566.522l.2.001c.249 0 .434.01.553.071.17.226.32.335.69.335.07 0 .155-.004.256-.012.063-.006.125-.009.185-.009.29 0 .503.063.625.114-.05.216-.078.561.196.77l.145.115c.295.243.742.611 1.15.653.057.006.116.008.175.008.08 0 .408-.017.49-.017.233 0 .394.041.54.138.155.103.43.331.744.59.792.653 1.426 1.163 1.815 1.31.307.118.789.301.982.41-.026.201-.09.594-.131.79-.18.046-.449.144-.663.334-.158.138-.229.252-.28.335-.045.072-.054.087-.113.118-.077.042-.176.07-.277.101-.22.067-.468.143-.62.326-.064.078-.138.173-.204.262-.07.09-.13.172-.164.206-.163.03-.4.125-.474.335l-.049.14.087.185c.106.163.305.193.66.193.535 0 1.366-.083 1.401-.087 1.533-.092 4.548-.267 4.902-.267.488 0 1.6.064 1.908.154.405.12 1.24.173 1.285.173.042.001 1.156.011 1.45.035.153.012.197.043.265.09l.091.06c.143.083.274.115.3.121l.051.012.087-.007c.14 0 .22.017.27.045.061.034.061.034.096.131.016.044.033.091.057.144.081.186.274.326.442.45.052.037.13.093.15.116-.001.016-.012.144-.05.215l-.069.123.046.19c.078.198.288.27.534.354.098.035.207.071.301.118.131.065.29.117.438.164.081.027.2.064.258.092.038.08.097.158.167.251.064.082.195.254.203.321-.096.182-.226.466-.084.688l.09.138.248.037c.185 0 8.52-.683 10.188-.82 1.521-.29 1.633-.344 1.669-.362.065-.03.188-.119.822-.586.364-.27.917-.678 1.012-.73.124-.058.823-.164 1.203-.19.323-.025.445-.049.445-.049l.258-.052-.016-.264s-.016-.22-.017-.32c.019-.002.066-.017.147-.028l.421-.053c.085 0 .315-.037.492-.285.066-.092.239-.178.477-.298l.179-.09c.148-.076.595-.306.595-.67v-.012c.061-.043.191-.126.431-.228.224-.093.47-.24.723-.39.323-.195.66-.395.938-.465l.222-.057c.359-.094.765-.2 1.043-.2.085 0 .137.01.163.02.102.03.186.058.254.083l-.05.014c-.247.07-.479.134-.611.295-.535.647-.226 1.051-.069 1.195l.176.151c.161.138.465.395.453.521-.031.395-.168.768-.304.833-.3.144-.422.46-.472.7l-1.516.158-.365.06c-.528.084-.829.65-.83.655l-.76 2.253-.293 1.057-1.122 1.334-2.197 1.088-4.584 1.852c-.122.038-2.24.695-2.67.79-.09.02-.35.052-1.114.052-.57 0-1.121-.018-1.148-.019h-.305c-.12 0-.428-.07-.941-.268-.184-.07-.373-.106-.574-.106-.104 0-.198.01-.28.018l-.103.01c-.36 0-.624.381-.678.656-.047.25.127.481.52.691.039.042.094.096.172.151-.015 0 .048.175.093.368.001.012.025.143.048.4-.06.09-.648.476-.821.54-.006-.01-.145-.063-.266-.13l-.045-.027-.053-.009h.001c.013 0-.077-.037-.339-.159-.168-.079-.353-.116-.584-.116-.173 0-.368.022-.593.048-.16.018-.337.038-.538.053-.758.057-2.284.294-2.704.395-.164.04-.375.046-.581.052-.267.008-.516.016-.72.086-.291.1-.411.297-.482.416-.102.073-.488.073-.694.073-.242 0-.466 0-.656.01-.37.02-.59.095-.715.244-.062.03-.148.066-.21.083-.123.031-.591.058-.68.064.015-.002-.056-.016-.242-.068-.127-.036-.26-.054-.383-.054-.178 0-.413.036-.526.208-.032.05-.062.112-.072.275-.422.06-1.405.186-2.518.321l-2.35.272z"/>\n        </symbol>\n        <symbol width="26" height="19" viewBox="0 0 26 19" id="map-ica">\n            <path fill-rule="evenodd" d="M.783 8.384c.042-.06.101-.138.182-.244l.11-.14c.008.087.043.16.101.218l-.065.034c-.092.058-.144.13-.178.177l-.15-.045m20.735 10.49c-.314-.035-.69-.094-.838-.136-.069-.02-.105-.037-.137-.052-.108-.05-.196-.084-.463-.11.004-.026.006-.051.005-.075-.007-.22-.189-.388-.54-.502-.187-.061-.419-.094-.629-.12.015-.034.027-.07.033-.11v-.003l.013-.006.013-.24c-.013-.258-.289-.348-.407-.386-.31-.101-.417-.128-.417-.128.003 0-.438-.154-.898-.222-.51-.075-1.08-.253-1.218-.38-.154-.143-.29-.223-.395-.277l-.016-.11c-.049-.112-.149-.186-.297-.22-.475-.11-.576-.186-.58-.19-.079-.071-.24-.177-.41-.286-.109-.07-.22-.143-.312-.208-.187-.231-.323-.271-.6-.305-.149-.017-.335-.024-.527-.031-.27-.01-.639-.022-.766-.081-.306-.141-1.088-.281-1.176-.296-.524-.037-1.133-.117-1.257-.183-.322-.186-.549-.201-.79-.201-.239 0-.417-.045-.559-.141-.15-.103-.2-.253-.207-.287.1-.305-.215-.458-.318-.51-.19-.092-.34-.282-.387-.387.05-.39-.2-.516-.417-.556-.215-.04-1.057-.383-1.372-.52-.02-.025-.066-.06-.145-.093.004-.005.09-.174.09-.174l-.104-.19c-.048-.071-.107-.158-2.108-1.231-.107-.036-.466-.126-.698-.126-.023 0-.066 0-.116.008.044-.371-.014-.488-.037-.534-.075-.152-.258-.292-.55-.505-.107-.077-.207-.145-.25-.191-.02-.061-.049-.14-.093-.21.125.018.268.03.387.03.148 0 .314-.015.423-.141.211-.246.07-.592.022-.706-.05-.122-.048-.215-.035-.235.046-.077.075-.104.075-.105.106-.085.27-.305.195-.576.096-.067.183-.197.192-.374.013-.271-.146-.718-.204-.823l-.105-.226c-.247-.536-.378-.807-.452-.901-.12-.151-.447-.425-.627-.557l-.129-.091 1.177-.895 1.14-.577c.082-.023.243-.075.593-.187.594-.191.995-.782 1.14-1.1.067-.104.51-.357.652-.368h.002c.097 0 .226.034.34.063.141.037.285.074.417.074.05 0 .168 0 1.165-.22L8.42.36c-.033.044-.089.099-.144.152-.188.185-.468.459-.426.87l.033.288c.023.193.066.542.043.633-.039.059-.363.408-.536.596-.377.406-.452.492-.488.588-.073.187.015.366.1.54.023.047.061.126.068.154.052.423.333.51.74.51.013 0 1.365-.001 1.861-.116l.198-.048c.33-.082.68-.17 1.067-.17l.676-.01c.216 0 .338.01.405.02-.002.152-.049.454-.078.557-.056.162-.045.665.331.834.013.004.023.034.001.11-.016.06-.052.132-.088.208-.129.272-.367.776.051 1.069.28.197.878.54 1.104.636.108.045.227.067.356.067.16 0 .291-.035.328-.048.51-.07 1.481-.196 1.827-.196.147.024.242.079.372.156.127.076.273.162.463.245.931.409 1.361.555 1.6.602l-.046.11c-.103.236-.21.484-.109.717.051.117.15.206.273.249.066.023.19.109.28.189-.276.197-.612.438-.538.789.034.164.068.276.103.342l.048.087.106.056.535.236c.15.065.27.18.283.229-.04.016-.132.106-.22.194-.244.245-.437.438-.424.68l.007.13.135.152c.2.194.371.319.912.319.546 0 1.506-.148 1.88-.332l.1-.052c.267-.136.9-.46 1.156-.46.153.058.188.085.195.092l-.034.12c-.025.13-.06.325.081.498.144.176.375.203.581.207l.497-.008c.122 0 .155.012.162.016.158.226.356.45.702.538.06.015.12.088.13.12-.004.089.15.864.246 1.166-.023.08-.088.248-.183.45-.214.043-.464.118-.64.18-.304.108-1.659.985-1.908 1.236-.236.235-.415.838-.502 1.184-.005 0-.059.11-.18.38-.015.034-.086.158-.394.454"/>\n        </symbol>\n        <symbol width="20" height="17" viewBox="0 0 20 17" id="map-huancavelica">\n            <path fill-rule="evenodd" d="M11.456 16.96c-.067-.008-.38-.072-1.503-.566-.158-.07-.281-.142-.39-.206-.161-.096-.311-.185-.502-.232-.054-.013-.12-.019-.212-.019-.53 0-1.976.216-1.99.219-.043.01-.1.025-.166.025-.267-.087-.813-.398-1.075-.582l.008.002c.047 0 .12-.154.16-.239.056-.118.104-.225.129-.315.13-.474-.1-.771-.361-.894l.009.002c.024 0 .019-.043.02-.067.008-.019.194-.743.032-1.08-.146-.302-.556-.328-1-.328l-.678.01c-.466 0-.86.098-1.207.184l-.208.05c-.32.075-1.31.099-1.712.099l-.094-.001c-.027-.11-.071-.199-.113-.285l-.03-.059c.062-.062.17-.177.272-.288.489-.529.643-.706.699-.834.087-.203.058-.501 0-.969l-.03-.271c-.008-.087.085-.186.228-.325.099-.097.195-.192.266-.309.182-.303.203-.698.205-.774-.043-.582.004-.711.006-.716.185-.231.203-.626.116-.879-.024-.078-.044-.425-.047-.628l-.002-.142-.004-.003c.012-.022.037-.048.079-.078.117-.083.473-.285.884-.519C4.83 5.04 5.009 4.906 5.083 4.725l.098-.236c.543-.826 1.217-1.784 1.37-1.908.18-.095.26-.131.275-.138l.07-.031.059-.069c.01-.015.355-.459.435-.597.069-.119.11-.235.118-.332.023-.116-.002-.28-.114-.426.479.069 1.25.139 1.88.139.153 0 .298-.004.432-.013.495-.032 1.195-.167 1.813-.285.418-.08.847-.163.99-.166 0 0 .467.002.609.006-.222.125-.482.312-.65.649-.224.456-.458.928-.184 1.274.058.075.196.251 2.406 1.073l.915.273c1.098.315 1.698.526 1.8.59.214.137 1.29.74 1.539.873.048.041.119.104.212.192.057.054.118.133.165.201-.243.208-.38.33-.432.479-.073.211.04.426.184.699.039.074.074.135.087.173.022.202.26.355.654.608l.235.153-.011.018c-.04.064-.135.175-.195.243l-.028.011s-.13-.056-.234-.097c-.153-.062-.41-.097-.548-.111l-.106.005-.342.062c-.524.098-.687.473-.748.614-.125.289.063.714.168.894l-.001.001c-.048.032-.31.149-.978.382l-1.485.323c-.021 0-.1.006-.245.024-.285.036-.365.205-.387.303-.036.154.033.312.179.413l.032.058c.132.165.376.212.83.288l.06.01-.01.033c-.163.007-.425.014-.682.014-.135 0-.245-.002-.287-.006-.02-.011-.163-.101-.24-.149-.11-.069-.22-.136-.31-.182-.08-.04-.204-.077-.561-.077-.434 0-1.015.057-1.055.061l-.301.083c-.368.106-.616.576-.683.717l-.05.106.033.136c-.001.187-.001.187 1.936 1.459.275.181 1.563 1.025 1.94 1.254-.033.1-.142.3-.2.404l-.101.189-.057.122c-.107.233-.155.339-.51.409-.608.122-1.251.349-1.464.518-.033.025-.222.1-.648.1-.314 0-.71.171-1.027.308-.116.05-.213.094-.277.114"/>\n        </symbol>\n        <symbol width="31" height="26" viewBox="0 0 31 26" id="map-ayacucho">\n            <path fill-rule="evenodd" d="M16.2 25.84c-.005-.029-.013-.057-.026-.087-.058-.124-.096-.164-.773-.47l-.222-.067-.096-.007c-.243 0-.617.163-.69.195l-.11.042c-.1.037-.753.192-1.1.192-.183-.015-.213-.05-.297-.17-.047-.065-.093-.127-.147-.18-.186-.185-.436-.186-.678-.186-.145 0-.299 0-.476-.032-.188-.033-.26-.147-.359-.33-.037-.07-.072-.136-.123-.195-.027-.03-.066-.087-.112-.15-.299-.425-.496-.68-.745-.72h-.034c-.295 0-.742.08-1.478.221l-.24.046c-.04.007-.082.01-.123.01-.19 0-.393-.066-.508-.122l-.065.116.06-.142-.069-.17c.258-.567.23-.726.17-.845-.044-.114-.208-.892-.218-1.015 0-.258-.257-.623-.628-.717-.117-.029-.199-.099-.326-.279-.207-.294-.545-.294-.707-.294 0 0-.462.007-.484.006l.008-.057c.057-.51-.272-.687-.584-.812-.074-.03-.158-.045-.25-.045-.389 0-.925.257-1.44.52l-.116.057c-.23.114-1.054.266-1.585.266-.138 0-.222-.008-.278-.02.044-.047.09-.092.12-.123.118-.119.238-.243.306-.342.104-.148.133-.328.083-.505-.087-.312-.396-.545-.656-.659l-.38-.167c.067-.062.187-.147.246-.189.108-.077.2-.146.254-.202.103-.105.141-.253.104-.404-.064-.272-.407-.544-.647-.68.021-.037.044-.092.061-.129.024-.056.048-.11.066-.16.043-.115.054-.237.037-.358l.048-.02c.236-.103.59-.257.766-.257.345 0 .81-.042 1.064-.243.088-.07.585-.268 1.18-.386.687-.137.852-.497.985-.786l.048-.104.074-.137c.181-.33.371-.675.28-.982-.04-.134-.127-.24-.25-.309-.202-.109-2.82-1.823-3.546-2.317.063-.095.126-.162.16-.177l.241-.07c.16-.01.607-.047.938-.047.211 0 .27.016.271.016.052.028.143.086.231.141.225.141.37.228.511.246.018.002.243.007.51.007.863 0 .974-.033 1.076-.179.044-.065.06-.128.08-.209.01-.035.026-.103.038-.126.17-.115.196-.289.18-.407-.013-.092-.07-.26-.309-.356-.033-.013-.073-.025-.118-.036l.781-.167c.131-.042 1-.338 1.21-.489l.232-.168.043-.086c.032-.075.112-.32-.08-.612-.079-.118-.13-.298-.128-.35.036-.066.071-.146.245-.178l.344-.063c.024.014.22.044.28.07l.187.078c-.006.002.114.078.285.078.076 0 .152-.015.225-.045l.205-.083.06-.063c.002 0 .231-.26.312-.389.324-.478.034-.774-.165-.91l-.264-.175c-.095-.06-.3-.192-.384-.262-.025-.074-.069-.156-.128-.269-.024-.046-.069-.13-.1-.198.051-.04.134-.112.181-.153.166-.142.24-.204.281-.3.157-.358-.405-.896-.41-.9-.004-.003-.243-.228-.308-.269-.27-.15-1.31-.727-1.544-.875-.307-.196-1.803-.62-1.973-.668l-.473-.14c.031-.058.053-.104.067-.14l.004.001c.038 0 .267-.11.647-.268.442-.183 1.174-.565 1.401-.805l.1-.106c.08-.018.184-.036.271-.036.303.115.484.198.893.198.186 0 .41.081.67.175.132.048.263.096.404.141.113.035.222.077.33.118.282.11.527.204.77.204.096 0 .186-.015.27-.045l.12-.045c.228-.089.445-.173.593-.173l.11.024c.217.078.423.151.615.151.121 0 .228-.029.32-.087.082-.052.156-.076.19-.076.13.03.798.09 1.244.127.11.092.192.172.212.198.011.133.212.22.576.377.103.045.192.082.238.11-.005-.004-.009-.005-.012-.005-.016 0-.008.036.001.07.05.17.107.375.292.495.132.086.33.112.64.147.087.011.232.028.324.045.036.135.12.322.401.431.23.09.466.242.557.33-.04.266.015.412.218.657.114.138.137.227.122.261-.347.494-.15.775.068.935.27.197.856.673.993.801.06.056.122.14.137.341.006.077.072.75.513.98.11.057.277.111.455.166.163.05.332.1.454.165.062.033.136.08.215.131.284.18.638.403 1.007.441.205.022.333.043.41.061.047.297.378.428.535.49.143.057.283.118.415.178-.087.003-.18.004-.283.004-.479 0-.752-.035-.812-.058-.055-.024-.135-.066-.237-.119-.387-.203-1.034-.544-1.684-.604l-.58-.056c-.947-.092-1.753-.168-2.04-.168l-.12.005-.179-.007c-.056 0-.228 0-.37.126-.115.105-.174.251-.185.452-.003.073-.013.148-.022.228-.044.345-.102.807.261 1.094.177.14.175.148.141.253-.176.542.22.731.64.931.11.052.266.118.431.187.132.056.368.155.56.245-.172.108-.36.215-.44.25-.178.076-.286.218-.299.39-.008.111.021.324.31.503.234.146 1.816 1.223 1.975 1.385.02.024.07.1.134.193.34.493.63.903.853 1.072.084.065.178.123.268.178.103.063.254.155.28.201.006.076-.024.56-.043.88-.07 1.18-.08 1.331.143 1.461.03.017.074.037.136.062.144.058.386.156.515.292.171.181.18.262.18.263-.12.065-.25.126-.376.186-.086.04-.158.075-.22.113-.2.124-.23.29-.23.377 0 .27.245.42.407.52.253.154.524.228.83.228l.225-.009c.38-.018.777-.038.907-.347.177-.432.23-.522.245-.543.038-.006.226-.116.467-.116.245.011.678.081 1.06.142.38.06.707.11.81.11.214 0 .265-.006.274-.006.432-.096.928-.232 1.13-.385.1-.078.177-.17.24-.246.088-.106.147-.173.222-.19.012-.003.05-.009.131-.009.311 0 .806.09.87.106-.002 0 1.418.506 1.641.558.028.007.066.014.11.023l-.003.002c-1.61.74-1.666.837-1.72.93-.107.187-.034.4.113.822.028.08.06.166.081.236-.107.084-.287.208-.367.262-.142.097-.276.19-.354.256-.083.07-.299.251-.406 1.791-.038.026-.088.06-.152.1-.033.011-.179.033-.612.033h-.354c-.164 0-.31.003-.413.015-.392.047-.548.205-.61.336-.025.027-.074.075-.16.147-.092.077-.305.176-.49.246-.073-.01-.196-.028-.392-.052-.079-.01-.154-.014-.222-.014-.296 0-.488.076-.524.091 0 0-.1.035-.298.12-.143.06-1.006.22-1.475.252-.357.025-.663.117-.988.215-.138.041-.273.082-.41.117-.273.07-1.056.126-1.743.153-.033-.02-.079-.052-.143-.097-.13-.09-.206-.177-.226-.2l-.157-.11-.199-.054c-.068-.018-.147-.027-.24-.027-.269 0-.609.074-.783.146-.23.095-.77.435-.777.438l-.09.057-.048.12c-.005.01-.013.022-.022.034"/>\n        </symbol>\n        <symbol width="24" height="11" viewBox="0 0 24 11" id="map-apurimac">\n            <path fill-rule="evenodd" d="M6.05 10.72c-.117 0-.225-.017-.325-.054.106-.056.219-.123.332-.211.149-.115.234-.27.248-.444.018-.24-.1-.491-.36-.768-.2-.213-.471-.338-.663-.418.008-.197.033-.618.048-.868.04-.673.055-.948.032-1.081-.055-.318-.33-.486-.572-.633-.083-.051-.158-.097-.224-.147-.157-.12-.537-.671-.7-.907-.092-.135-.145-.212-.176-.251-.15-.192-1.444-1.065-1.943-1.398.227-.131.512-.312.647-.438l.119-.11-.002-.235c-.05-.283-.365-.44-1.185-.784-.154-.064-.3-.125-.401-.173-.12-.057-.295-.141-.333-.177C.79 1.188.55.916.27.693.202.64.235.384.257.214.266.138.275.062.28-.011l.07.003.13-.005c.259 0 1.11.082 1.793.148l.756.073c.518.048 1.093.35 1.437.53.122.064.217.113.286.143.217.09.703.11 1.072.11.32 0 .889-.014 1.092-.11.109-.052.18-.12.227-.185.072.006.136.008.19.008.285 0 .485-.037.594-.111-.024.02.019.024.076.024h.014c.116-.001.25-.002.399-.017.357-.036.773-.17 1.035-.33l.19-.115c.15-.006.472-.017.693-.017.066 0 .122 0 .158.003.063.005.188.025.347.05.359.058.85.136 1.188.136.41 0 .735.047.966.138.28.11.402.154.41.156 1.184.15 1.268.15 1.304.15.033 0 .14.009.278.019.45.035 1.022.077 1.348.077.412 0 2.134.36 2.297.406.036.029.437.259.607.336.07.032.288.13 1.143.13l.14-.001c.293 0 .437.09.62.207.083.052.152.095.227.132.262.13.822.357 1.264.383.172.01.219.025.23.03-.017.025-.01.059-.001.093.04.164.104.425.367.59.072.046.117.08.144.104-.061.164-.114.333-.114.553 0 .15.067.376.195.794.08.263.229.743.224.863-.01.172-.36.815-.461.943-.044.03-.453.286-.554.323-.07.026-.122.04-.122.04-.024 0-.888.049-1.16.049-.434 0-.811.253-.838.565-.006.058 0 .118.009.188.003.029.009.082.01.127l-.054.02c-.09-.015-.224-.032-.357-.032-.2 0-.348.039-.455.12-.198.15-.45.5-.453.504l-.054.078-.006.114c-.002.035-.01.449.253.766.07.085.139.152.202.21l.01.009-.058.13-.394.019h-.23c-.086 0-.193-.015-.272-.027-.041-.044-.097-.102-.171-.176-.197-.2-.47-.222-.658-.222-.145 0-.308.016-.481.035-.133.014-.234.024-.336.03l-.1.004-.006-.014c-.046-.084-.162-.23-.42-.23-.062 0-.133.01-.205.022l-.115.015c-.067.006-.674.062-.987.26-.205.13-.271.344-.31.54-.18-.033-.386-.073-.48-.094-.15-.036-1.463-.497-1.574-.54-.128-.045-.723-.14-1.091-.14-.108 0-.197.007-.27.023-.303.067-.47.269-.593.416-.05.06-.092.11-.131.14-.068.05-.39.158-.81.255 0-.001-.105 0-.188 0-.088-.002-.371-.048-.676-.097-.437-.07-.898-.141-1.114-.153h-.008c-.502 0-.808.18-.923.25-.16.09-.25.26-.44.724-.1.019-.278.028-.364.032l-.191.008z"/>\n        </symbol>\n        <symbol width="47" height="32" viewBox="0 0 47 32" id="map-cusco">\n            <path fill-rule="evenodd" d="M41.06 31.489c-.259-.077-.755-.088-1.028-.088l.105.03c-.077-.021-.146-.037-.252-.061l.022-.11c.028-.13.06-.28.05-.42-.036-.51-.58-.66-.812-.723-.065-.018-.144-.027-.239-.027-.296 0-.754.092-1.239.19-.24.048-.357.06-.437.06l.013.02s-.194-.083-.296-.131l-.118-.06c-.346-.173-.672-.33-.892-.366-.214-.034-.643-.116-.692-.126l-.207-.116c-.146-.073-.304-.112-.458-.112-.269 0-.502.116-.594.295-.024.045-.078.153-.04.443l-.013.012c0-.007-.018-.01-.055-.01-.056 0-.158.006-.317.006-.437 0-1.102-.037-1.779-.1l-.545-.046c-.264-.022-.62-.052-.845-.077 0-.02 0-.037-.003-.057-.02-.168-.115-.407-.438-.62.403-.16.524-.25.55-.437.042-.285-.254-.435-.45-.534l-.099-.032-.34-.063c-.237-.045-.87-.253-1.212-.584-.204-.2-.384-.331-.605-.331-.088 0-.163.022-.23.045-.433.072-.544.417-.625.668-.025.077-.05.156-.083.23-.123.28-.034.48.091.614l-.129.026c-.197.039-.3.08-.385.113-.072.029-.095.038-.167.042-.017-.003-.058-.038-.087-.063-.076-.064-.176-.15-.324-.227-.159-.083-.299-.121-.442-.121-.144 0-.27.039-.403.08 0 0-.335.105-.442.14-.244.083-.492.166-.706.175l-.164.004c-.482 0-1.146-.065-1.379-.17l-.087-.038.067-.15c.153-.328-.092-.557-.209-.668-.047-.044-.096-.09-.143-.146-.053-.065-.08-.161-.092-.24.088-.111.188-.225.241-.266.164.015.305.038.363.05l.171-.01c.006 0 .13-.036.304-.114.338-.152.302-.55.28-.754.022-.004.083-.025.165-.025.288 0 1.22-.053 1.227-.053h.003c.038 0 .112-.014.282-.077.206-.075.706-.4.791-.475.13-.117.635-.971.66-1.377.011-.22-.093-.576-.252-1.096-.065-.21-.162-.525-.167-.605 0-.13.035-.22.076-.325l.036-.094c.096-.28-.057-.55-.454-.8-.029-.017-.043-.058-.07-.172-.019-.072-.035-.135-.059-.195-.147-.38-.43-.425-.783-.446-.278-.016-.717-.171-1.006-.315-.057-.028-.11-.062-.168-.098-.207-.131-.489-.31-.957-.31h-.19c-.557 0-.792-.05-.836-.07-.15-.068-.51-.275-.595-.323-.17-.098-2.164-.478-2.585-.478-.318 0-.879-.043-1.25-.071-.2-.015-.337-.025-.376-.025-.106-.004-.81-.09-1.167-.133l-.302-.127c-.31-.122-.718-.184-1.212-.184-.282 0-.742-.073-1.078-.127-.186-.03-.329-.051-.404-.057-.048-.004-.12-.005-.204-.005-.303 0-.789.019-.814.02l-.075.004-.08.043s-.062.036-.269.164c-.179.11-.495.208-.752.234-.124.012-.237.013-.328.013-.187 0-.335 0-.467.09.008-.006.001-.008-.019-.008-.036 0-.109.006-.2.006-.134 0-.228-.013-.27-.025-.106-.03-.269-.108-.46-.196-.2-.093-.429-.2-.669-.293-.045-.018-.079-.034-.104-.046 0-.046-.009-.1-.033-.155-.112-.258-.432-.337-.985-.393-.212-.022-.492-.2-.718-.342-.105-.067-.186-.118-.255-.155-.157-.084-.366-.151-.569-.214-.15-.046-.27-.081-.347-.121-.05-.032-.14-.236-.157-.44-.025-.322-.142-.584-.347-.775-.155-.147-.709-.596-1.004-.817.047-.071.072-.111.091-.151.097-.211.138-.547-.212-.97-.07-.084-.087-.113-.09-.12.136-.623-.846-1.02-.959-1.063-.014-.066-.044-.215-.187-.333-.137-.113-.346-.141-.704-.182-.11-.013-.293-.034-.36-.053.027 0 .008-.07-.002-.108-.042-.146-.089-.31-.228-.416-.074-.057-.185-.107-.375-.19-.084-.036-.203-.085-.278-.125-.02-.032-.055-.075-.11-.133.303-.09.685-.205.753-.228.017-.005 1.638-.577 1.761-.934.027-.078.048-.225.14-.981.046-.39.093-.794.114-.884.192-.216.506-.583.543-.86.07-.527.003-.843-.208-.992-.128-.091-.33-.202-.365-.22-.579-.3-1.07-.557-1.328-.7.482-.055 1.172-.152 1.375-.224.282-.101 1.02-.69 1.112-.888l.085-.205-.012-.102-.097-.581 2.245-.257c2.926-.355 2.926-.355 3.03-.527l.017-.028.056-.143.002-.095c.047.003.09.01.135.023.332.093.391.093.427.093.69-.044.804-.075.847-.086.16-.043.406-.164.426-.175l.192-.096v-.02c.041-.005.097-.012.17-.015.151-.008.324-.01.496-.01h.28c.45 0 .66-.021.798-.085.171-.08.255-.217.31-.31.054-.087.07-.11.128-.13.108-.036.314-.043.513-.05.237-.006.496-.014.727-.07.402-.095 1.867-.323 2.6-.377.211-.016.4-.038.565-.057.203-.023.372-.043.52-.043.127 0 .22.016.3.053.227.107.346.16.417.186.073.04.196.1.331.144-.022.927-.055 1.679-.079 1.797-.027.084-.054.124-.055.125-.165.23-.962 1.368-.962 1.894 0 .264.06.917.108 1.45.035.378.06.64.06.71 0 .626.31.9.57 1.02.235.109.676.164 1.321.233.26.028.616.066.715.098.216.067.292.098.313.107.275.17.588.394.645.466.172.409 1.383.61 1.434.619l.136.022c.78.118 1.088.207 1.203.269.016.439.282.938.615 1.13l.268.155 1.7.51c.491.17 1.69.566 2.13.566.196-.013.34-.038.48-.064.147-.027.288-.054.407-.054.318.144.848.218 1.63.316l.32.04c.476.064.69.108.725.116l.242.04c3.05.509 3.808.64 3.907.662.277.059.38.076.384.076.98.166 2.176.358 2.435.358h.628c.062.002.948.014 1.793.014 1.426 0 1.548-.034 1.614-.053.241-.066.481-.151.544-.39l.044-.164-.01-.013c.322-.004.8-.01 1.23-.01.143 0 .282 0 .408.003-.16.308-.335.66-.383.827-.12.432.227.973.53 1.172.148.096.255.169.333.224-.08.055-.152.099-.188.11-.182.026-1.06.402-1.154.464-.01.006-1.384.999-1.525 1.27-.069.132-.083.307-.098.49-.003.04-.01.12-.018.183l-.016.009c-1.63.877-1.813 1.04-1.896 1.177-.369.615-.15.944.012 1.086.094.08.24.167.38.248.064.036.17.096.233.14-.009.053-.026.125-.037.174-.032.133-.063.265-.063.387 0 .283.293.689.538.979.002.013-.004.106-.068.194-.204.277-.288.69-.288.85-.02.117-.257.846-.338.968-.12.155-.25.24-.402.266l-.335.055c-.094-.015-.27-.04-.437-.04-.172 0-.418.02-.563.195-.1.118-.126.282-.068.438.044.117-.093.536-.208.693-.027.036-.05.076-.075.118-.06.103-.097.167-.375.209-.157.023-.358.026-.553.03-.573.012-1.216.025-1.239.55-.019.449.106.653.515.842.125.058.197.18.197.334 0 .09 0 .329.19.479.087.069.197.104.326.104.088 0 .19-.015.33-.05.37-.09.43-.106.432-.107.012-.004.214-.063.396-.063l.282.022c.033.482.297 1.46.523 1.75.071.092.191.21.332.345.18.17.577.554.582.699.005.139-.06.345-.146.536-.289-.083-.735-.21-.91-.263"/>\n        </symbol>\n        <symbol width="50" height="26" viewBox="0 0 50 26" id="map-madre-de-dios">\n            <path fill-rule="evenodd" d="M38.175 25.922c-.173-.016-1.698-.345-3.892-.838-1.458-.315-6.033-1.3-6.388-1.337-.145-.016-.544-.022-.99-.022-.716 0-1.558.013-1.626.014l-.339.019-.143.19c-.058.11-.059.24 0 .388-.164.008-.526.018-1.318.018-.622 0-1.306-.006-1.785-.013h-.633c-.156 0-1.085-.14-2.314-.347-.036-.006-.136-.024-.366-.073-.282-.06-4.122-.697-4.16-.704.001 0-.217-.05-.766-.122l-.326-.042c-.343-.042-1.147-.142-1.297-.223-.113-.065-.248-.097-.414-.097-.155 0-.335.03-.52.064-.13.022-.25.045-.362.054-.305 0-1.452-.366-1.93-.533l-1.645-.486-.196-.122c-.13-.076-.293-.394-.28-.617.035-.592-.905-.734-1.734-.86l-.166-.025c-.417-.068-.895-.242-.986-.32.011-.006-.075-.202-.876-.69-.027-.015-.093-.053-.436-.161-.154-.048-.42-.08-.843-.125-.389-.042-.96-.104-1.113-.174-.059-.027-.183-.085-.183-.415 0-.081-.026-.376-.06-.75-.048-.514-.108-1.155-.108-1.41 0-.153.31-.753.828-1.493.025-.03.097-.135.162-.341.044-.14.08-.834.108-2.066.354-.188 1.095-.642 1.051-1.127-.03-.332-.062-.481-.063-.488-.14-.605-.3-.721-.353-.76-.055-.04-.078-.068-.078-.068l-.039-.05-.074-.05c-.07-.035-.133-.074-.18-.107.01-.013.02-.024.027-.03-.005.007.004.01.022.01.022 0 .055-.004.092-.007.06-.007.13-.015.208-.015.12 0 .227.019.335.06.54.208.936.313 1.18.313h.292c.073.003.61.02 1.163.02.638 0 1.048-.021 1.255-.067.49-.11 2.731-.808 2.753-.815l4.631-1.87 2.347-1.162 1.307-1.554.324-1.178.732-2.187c.044-.062.2-.237.326-.258l.347-.056L20.14.666l1.35 7.862.067.067c.04.04.182.168.373.168.15 0 .283-.078.365-.214.024-.038.046-.083.068-.131.02-.042.06-.13.082-.142.258.049.448.14.631.229.205.099.4.193.593.23.095.02.194.027.294.027l.328-.008c.113 0 .184.012.225.038.063.04.12.089.178.137.176.147.395.329.723.329.36-.008 2.727-.258 3.191-.343.422-.078.712-.295.904-.44l.101-.073c.153-.102.896-.414 1.477-.45.273-.017.701-.018 1.148-.02.632 0 1.286-.002 1.635-.046.46-.058 1.454-.118 1.791-.137l13.981 11.189c-.17.252-.355.469-.434.505-.059.015-.137.025-.21.036-.225.032-.459.066-.558.276l-.068.147.1.227c.07.115.191.217.32.326.017.015.04.033.061.053-.224.112-.5.252-.553.534-.025.132.004.275.038.44.02.103.06.294.04.352-.016-.014-.054-.017-.1-.017-.025 0-.05 0-.078.002-.175.005-.502.016-.626.429-.033.112-.06.24-.077.375l-8.43 3.068c-.334.113-.749.23-.894.23"/>\n        </symbol>\n        <symbol width="56" height="20" viewBox="0 0 56 20" id="map-arequipa">\n            <path fill-rule="evenodd" d="M48.673 19.908c-.59-.1-1.48-.248-1.902-.252-.456-.005-.554-.01-.57-.011-.01 0-.821-.031-1.195-.074-.327-.037-.406-.048-.42-.051-.241-.024-.618-.107-.737-.222-.332-.32-1.39-.598-1.4-.6-.348-.072-.978-.195-1.414-.222-.344-.021-.467-.174-.472-.181-.08-.08-.385-.338-.985-.48l-.294-.068c-.287-.065-.721-.163-.813-.23l-.026-.061v-.154l-.116-.02c-.02-.013-.196-.136-.432-.18-.105-.02-.41-.184-.471-.256-.12-.241-.421-.256-.967-.284l-.237-.012c-.36-.02-.656-.118-.873-.19-.113-.036-.206-.065-.278-.08-.255-.048-3.151-.158-3.408-.158-.306 0-.665-.076-.937-.2-.065-.028-.122-.06-.178-.091-.23-.126-.486-.268-1.108-.29-.18-.005-.361-.007-.537-.008-.463-.004-.941-.008-1.143-.106-.324-.157-.682-.29-.947-.387-.312-.116-1.118-.201-2.474-.284-.413-.026-.571-.131-.597-.17l-.024-.115-.081-.022c-.047-.033-.473-.323-.887-.333h-.015c-.167 0-.31.008-.461.018-.161.01-.331.02-.487.02-.101 0-.195-.003-.274-.017-.09-.017-.213-.051-.356-.09-.394-.108-.933-.255-1.446-.255-.373.01-.602.033-.8.052-.172.016-.318.03-.455.03-.07 0-.137-.003-.205-.013-.354-.054-.771-.194-1.01-.303-.29-.132-.345-.15-.345-.15-.161-.02-.414-.042-.558-.093-.045-.016-.058-.03-.105-.074-.07-.066-.165-.156-.363-.25-.152-.071-.531-.195-1.093-.375-.283-.092-.651-.21-.818-.272-.045-.134-.123-.303-.323-.41l-.188-.1c-.104-.042-.684-.251-1.017-.302l-.375-.058c-.098.003-.361.048-.595.048-.061 0-.12-.003-.168-.012-.216-.043-.478-.175-.62-.247-.192-.097-.232-.11-.264-.117l-.062-.014-.062.012s-.437.085-.53.11c-.052.009-.283.027-.537.027-.414 0-.582-.047-.635-.068-.296-.113-.502-.217-.58-.265-.054-.11-.145-.275-.145-.275l-.07-.124-.136-.023s-.37-.068-.538-.08c-.164-.011-.576-.06-.828-.125-.288-.075-1.06-.28-1.217-.322-.078-.021-.185-.03-.41-.03l-.308.003c-.235 0-.306-.01-.328-.014-.05-.015-.13-.058-.226-.107-.235-.117-.527-.263-.77-.286l-.178-.016c-.293-.026-.715-.063-.807-.082-.281-.112-.831-.317-1.12-.371l-.59-.113c.112-.136.16-.225.189-.29.139-.31.178-.384.184-.394l.024-.044.01-.06c.082-.326.242-.78.328-.868.176-.177 1.446-1.002 1.657-1.076.174-.061.367-.117.513-.15.069.13.177.252.33.328.246.12.546.19.805.19.082 0 .163-.005.242-.02l.214-.041c.95-.184 1.243-.221 1.328-.221-.001.03.207.324.286.434.075.106.123.173.155.21.149.277.352.654.87.747.222.039.422.04.583.04.096 0 .214 0 .249.014-.004.005.018.038.042.072.107.15.284.399.699.445.042.005.09.007.144.007.456 0 1.205-.186 1.338-.236l.128-.05c.165-.071.375-.14.436-.143l.086.03.35.168c-.012.218.006.393.117.522l.083.097.199.042c.323 0 .792-.381.895-.604.155-.095.446-.27.576-.324.108-.044.358-.094.53-.094l.156.032c.06.063.154.149.279.237.209.146.283.18.295.187l.063.03.16.002c.31-.011 1.468-.061 1.915-.174.149-.038.294-.081.434-.124.289-.087.563-.17.847-.19.477-.032 1.43-.195 1.688-.304.174-.073.262-.105.277-.11.02-.008.124-.047.29-.047.044 0 .09.003.139.009.305.037.424.058.443.06h.06l.128-.018c.002 0 .5-.17.759-.386.155-.132.259-.236.308-.312.022-.007.058-.015.113-.021.078-.01.19-.011.319-.011h.379c.479 0 .773-.02.955-.134.253-.158.342-.241.356-.257l.074-.073.023-.126c.047-.772.149-1.41.217-1.53.026-.012.137-.088.254-.168.47-.323.658-.46.69-.674.02-.134-.028-.282-.14-.602-.02-.058-.061-.175-.091-.272.244-.131.758-.383 1.31-.64.179-.016.589-.098.78-.484.044-.09.07-.18.088-.248.023-.088.039-.171.052-.25.014-.076.033-.187.05-.217.09-.05.423-.116.665-.137.044-.004.088-.01.13-.017.113.227.395.227.519.227.05 0 .11-.001.18-.006.113-.007.225-.018.333-.03.186-.02.324-.034.446-.034.148 0 .184.026.185.027.119.119.17.175.192.199l.06.102.163.039h-.001c-.002 0 .278.058.5.058h.245l.493-.022c.073.046.179.1.346.176.497.222 1.623.225 1.67.225l.175-.003c.307-.014.6-.112.885-.207.1-.034.433-.136.433-.136.092-.03.163-.052.205-.052.012 0 .044 0 .132.045.079.042.136.09.196.14.115.099.266.227.517.227.227-.013.326-.053.413-.087.06-.024.134-.053.274-.081l.122-.025c.113-.024.17-.035.226-.035.065 0 .155.017.309.06.172.047.313.07.43.07.14 0 .256-.034.345-.102l.118-.09.04-.227c0-.264-.232-.348-.457-.43-.087-.032-.267-.097-.313-.135-.072-.066-.158-.114-.227-.152L37.496.46c.03-.078.055-.155.079-.23.025-.076.063-.195.088-.225.003.007.01.01.023.01.024 0 .063-.013.099-.025.013.01.062.047.15.133.383.372 1.006.624 1.402.727-.082.078-.136.194-.147.329-.01.096-.01.433.36.654.137.08.174.147.176.163-.117.437.189.564.286.592.125.036.452.066 1.167.126l.542.046c.184.017 1.14.102 1.816.102.565 0 .73-.058.839-.162.169-.166.206-.214.232-.275l.038-.088s-.032-.182-.036-.214c.048.002.086.013.128.034l.302.148.12.036c.127.024.48.09.67.12.139.024.562.236.7.305 0 0 .27.13.307.145.095.065.225.097.396.097.114 0 .273-.015.494-.06.473-.095.948-.19 1.182-.19.13.023.348.082.386.14 0 .034-.022.14-.04.217-.048.232-.16.755.32.868.278.065.382.082.392.083.432 0 .78.027.902.063.2.059.75.216 1.024.295.306.765.489 1.202.547 1.3.532.892.634.94.715.98.099.048.185.053.912.058l.3.003c-.118.122-.2.259-.2.429 0 .27.06.37.107.422.166.347.35.599.507.689.064.037.289.149.55.278l.03.015c-.01.393-.03 1.153-.03 1.288-.024.129-.413 1.024-.701 1.43-.301.423-.545 1.035-.545 1.364 0 .197-.037.283-.051.3-.154.014-.781.045-1.21.045l-.147-.001c-.486 0-1.363.219-1.654.352-.081.036-1.251.627-1.445.869-.036.046-.24.152-.542.188-.407.05-1.028.308-1.305.613-.486.535-.657.992-.51 1.359.195.48 1.339 1.28 1.699 1.47.175.092.387.145.592.197.167.04.473.117.52.185-.026.22-.044.357-.056.437-.16.138-.467.418-.64.68-.09.139-.26.368-.415.575l-.248-.041z"/>\n        </symbol>\n        <symbol width="37" height="34" viewBox="0 0 37 34" id="map-puno">\n            <path fill-rule="evenodd" d="M24.18 33.655c-1.005-.017-2.79-.058-3.145-.105-.107-.014-.338-.112-.673-.604-.13-.179-.974-.927-1.147-1.036-.088-.055-.336-.158-.58-.256l-.114-.045c.123-.23.294-.543.375-.68.004-.007.396-.676.275-1.025-.1-.29-.445-.322-1.198-.39-.17-.017-.298-.028-.379-.04-.18-.054-.98-.716-1.338-1.069-.193-.192-.476-.219-.755-.219l-.294.004c-.064 0-.124-.002-.179-.008-.049-.006-.167-.068-.406-.417l-.088-.118c.117-.125.174-.29.174-.504.016-.179-.005-.306-.06-.404.355-.262.311-1.002.31-1.01-.03-.343-.438-.475-1.004-.659-.105-.035-.202-.067-.27-.093-.177-.068-.379-.102-.6-.102-.153 0-.307.017-.446.05l-.13.033c-.099.03-.135.04-.183.04-.032 0-.067-.005-.11-.012-.113-.02-.577-.25-.853-.387-.286-.14-.536-.263-.703-.329-.126-.05-.23-.073-.328-.073-.3 0-.425.223-.472.307-.148.13-.414.234-.565.253-.118 0-.419-.104-.585-.214-.087-.057-.365-.2-.67-.353l.003-.109-.303-.04s-.572-.284-.624-.314c-.039-.037-.187-.274-.29-.477.022-.04.144-.129.21-.177l.088-.066c.16-.122.375-.289.32-.553-.02-.09-.09-.254-.345-.318-.126-.03-.408-.037-1.022-.04-.24-.003-.479-.004-.614-.01-.108-.148-.33-.496-.445-.695-.04-.075-.25-.58-.507-1.222.12-.234.284-.624.273-.976-.016-.42-.424-.81-.784-1.155-.114-.109-.214-.203-.27-.276-.153-.196-.403-1.225-.389-1.425.03-.147-.01-.297-.113-.409-.136-.148-.335-.17-.44-.17H2.74l-.243-.022-.108-.005c-.3 0-.582.092-.584.093l-.422.104c-.048-.387-.259-.684-.577-.83-.097-.046-.125-.067-.132-.073 0 0 .002-.003.002-.01.145-.028.421-.034.584-.037.226-.004.46-.01.643-.038.547-.083.727-.319.852-.534.144-.203.39-.686.38-1.109.113.004.238.02.331.037l.1.004.406-.067c.32-.052.596-.227.824-.519.18-.232.475-1.2.475-1.374.002-.057.056-.316.16-.455.243-.335.26-.764.038-1.02-.172-.199-.36-.48-.38-.57 0-.023.027-.134.044-.207.044-.184.09-.375.042-.545-.06-.224-.289-.354-.554-.506-.103-.059-.21-.117-.274-.172h.001c.014 0 .03-.087.121-.238.024-.015.28-.202 1.6-.913l.164-.089c.215-.125.236-.383.26-.655.005-.079.016-.21.03-.25.102-.114 1.178-.93 1.3-1.013.083-.043.776-.334.9-.36.294-.044.768-.464.773-.468l.11-.097.014-.206c-.02-.24-.232-.414-.733-.738-.188-.123-.332-.387-.315-.473.023-.083.161-.383.467-.956 1.063.202 5.375 1.13 6.06 1.278 1.413.32 3.784.847 4.03.862h.002c.357 0 .976-.204 1.16-.267L28.517.326c.023.091.056.17.1.235.16.25.217.307.217.307l.027.028c-.002.01-.005.017-.008.026-.025.087-.077.27-.113.317-.145.026-.339.09-.404.29l-.047.145.116.214c.074.102.2.188.331.27-.06.071-.1.161-.096.28.012.238.2.38.311.463.061.2.046.26.038.276-.037.035-.06.044-.106.061-.156.058-.306.151-.345.44l-.015.126c-.017.164-.02.203-.14.318-.065.063-.129.115-.186.16-.16.13-.429.345-.284.665.044.096.126.274 1.271.914l.123.068c.092.051.205.113.286.165-.1.068-.243.148-.357.212-.339.191-.535.307-.616.474-.137.29-.163.947.276 1.231.13.084.461.242.804.403.302.141.758.355.842.423l-.003.008-.1.095c-.07.237.071.408.132.481-.19.046-.663.327-.732.568l-.032.133c-.063.293-.109.468-.137.52-.048.031-.386.166-.513.217l-.173.07c-.237.026-.493.054-.652.266-.109.145-.142.34-.099.575.048.265.141.444.207.565-.15.062-.386.112-.584.154-.43.092-.838.18-1.06.372l-.147.127.057.188c.022.077.07.352-.256.5-.185.084-.404.135-.615.184-.419.097-.993.23-.942.778.052.554.874 1.853 1.13 2.087.14.13.472.262 1.197.531.396.148.995.371 1.105.461.107.137.144.263.135.296l-.165.096c-.282.162-.668.385-.72.808-.013.098-.016.19-.018.272-.002.066-.005.157-.016.183l-.317.048c-.304.044-.648.094-.874.291-.284.247-.343.532-.307.701l.06.276.28-.043c.007 0 .095-.014.198-.014l.037.001c-.064.092-.155.23-.113.406.02.082.075.197.233.284.185.101.404.115.581.126.064.004.161.011.19.021.068.141.191.332.463.355H28c.18 0 .271-.03.346-.054.04-.013.076-.025.117-.034l-.017.248.27.108c.156.053.406.072.587.072.114 0 .218-.008.29-.022.056-.01.107-.029.151-.05.22.463.497.563.7.563l.264-.005c.058.154.184.243.332.305v.002c-.1.084-.077.215-.037.298.096.198.313.198.487.198l.551.006c.46 0 .645-.03.766-.127.023-.015.126-.046.216-.046.305.091.532.135.715.135.207 0 .355-.065.453-.108.05-.015.104-.025.162-.03-.07.028-.14.074-.197.147-.134.177-.197.254-.333.272-.103.015-.18.017-.246.017h-.126c-.076 0-.15.002-.237.017-.31.051-.389.248-.409.33-.02.082-.038.292.211.474.097.071.444.346.714.56l.534.417.162.008c.114 0 .237-.032.366-.096.072-.035.26-.085.454-.085.121 0 .223.02.287.055.23.126.354.194.552.194.064 0 .141-.008.248-.022.066-.01.15-.013.242-.013.113 0 .234.006.347.014-.019.062-.026.143.01.226-.029-.013-.05-.026-.07-.039-.08-.049-.189-.116-.356-.116l-.128.012c-.39.07-.718.126-.754.42-.008.068-.004.223.173.34-.03.015-.057.031-.083.047-.185.117-.31.196-.533.213-.172.013-.424.021-.65.028-.199.007-.377.013-.469.02-.07.006-.207.012-.354.018-.57.024-.624.03-.708.08l-.19.11.006.29c.03.13.135.29.478.318l.233.012c.135.005.388.016.455.052.044.057.19.224.205.292-.057.058-.09.122-.11.173l-.018.001c-.21 0-.438-.03-.625-.055-.153-.019-.283-.034-.366-.034-.046 0-.143-.013-.258-.028-.197-.024-.438-.052-.6-.052-.14 0-.3.017-.402.143l-.09.11.023.162c.037.185.2.31.39.451.07.053.186.141.212.18.016.022.04.06.057.09-.03.002-.09.02-.19.035-.75.108-1.467.745-1.497.772-.813.844-1.82 1.787-2.059 1.864-.08.014-.153.022-.21.03-.143.014-.304.032-.41.176-.103.138-.084.296-.059.433.012.06.015.094.015.114h-.004c-.02 0-.076.015-.18.027l-.12.014c-.432.05-.92.104-1.36.487l-.802.688-1.343-.02z"/>\n        </symbol>\n        <symbol width="20" height="16" viewBox="0 0 20 16" id="map-moquegua">\n            <path fill-rule="evenodd" d="M6.5 15.708c-.015-.002-.518-.038-.894-.164-.075-.024-.68-.224-1.05-.257.038-.084.063-.177.063-.28 0-.289 0-.888-.37-1.304-.205-.232-.338-.45-.396-.649-.083-.29-.48-.464-.798-.559-.15-.054-.337-.146-.38-.19-.03-.052-.058-.095-.09-.132.123-.164.238-.325.31-.434.144-.218.49-.52.6-.61l.082-.066.035-.122c.003-.016.028-.143.08-.616.07-.63-.584-.794-1.017-.9-.16-.04-.34-.086-.443-.14C1.782 9.047.924 8.35.84 8.155c-.015-.035.009-.249.384-.66.13-.145.576-.36.89-.4.342-.04.779-.177.985-.434.102-.095.889-.538 1.199-.678.224-.102 1.014-.293 1.34-.293l.183.002c.379 0 1.078-.025 1.353-.07.214-.036.576-.205.576-.943 0-.114.144-.586.423-.978.286-.402.824-1.507.824-1.816 0-.1.012-.57.023-.958.152.077.27.14.32.173.198.131.637.323.952.323.342-.037.716-.183.934-.337.086-.062.14-.135.178-.195.214.086.432.194.662.307.512.252.837.408 1.028.443.089.017.164.023.23.023.147 0 .254-.032.349-.059l.115-.032c.089-.02.194-.03.295-.03.136 0 .26.02.36.058.072.027.167.058.269.091.148.048.435.142.58.21-.007.112-.031.244-.056.306-.002 0-.04.005-.061.013-.181.058-.45.145-.467.424-.008.123.037.296.3.421l.034.016-.002.061c-.135.114-.218.213-.25.34-.055.241.11.442.219.576l.062.085c.146.211.448.65.877.7.08.01.167.013.256.013l.29-.003c.223 0 .284.022.3.031.004.005 1.206 1.17 1.697 1.247.09.015.233.028.399.044.26.023.456.044.59.063-.04.112-.098.248-.16.35-.042.073-.251.444-.401.73-.332-.165-.787-.379-1.021-.438-.07-.017-.121-.045-.172-.072-.084-.044-.188-.099-.325-.099-.153 0-.296.07-.436.213-.144.145-.862 1.035-.891 1.375-.04.185-.503 1.253-.704 1.427-.241.21-1.297.718-1.492.786-.13.045-.57.1-.896.1-.382 0-1.292.212-1.497.291-.175.067-.68.26-.541.86.02.081.053.188.09.312.055.172.194.617.16.74-.165.132-.827.637-.916.705-.04.03-1.533 1.111-1.67 1.206-.062.043-.082.05-.153.05l-.15-.006c-.246 0-.862.13-1.056.305-.028.026-.078.071-.535.66-.154-.02-.215-.026-.215-.026"/>\n        </symbol>\n        <symbol width="22" height="13" viewBox="0 0 22 13" id="map-tacna">\n            <path fill-rule="evenodd" d="M11.182 12.476c-.552-.172-1.153-.372-1.417-.478l-.044-.106c-.101-.166-.28-.166-.424-.166-.23 0-.786-.175-1.018-.265-.084-.032-.125-.052-.141-.062l-.422-.25c-.106-.062-.215-.09-.353-.124-.098-.025-.221-.056-.38-.11-.095-.033-.141-.07-.206-.123-.157-.127-.32-.234-.691-.258-.496-.03-1.025-.173-1.156-.253l-.087-.052c-.065-.208-.282-.322-.445-.392-.4-.17-.484-.202-.484-.202l-.761-.194c-.572-.009-1.18-.026-1.294-.054-.067-.017-.22-.079-.41-.155-.315-.125-.684-.272-.994-.362.123-.156.216-.273.25-.309.055-.025.43-.125.598-.125l.148.006c.21 0 .367-.049.54-.17.106-.072 1.674-1.208 1.674-1.208.107-.08.8-.612 1.017-.81.329-.299.149-.873-.01-1.379-.032-.106-.06-.195-.075-.262.002-.04.078-.068.118-.084.159-.06.994-.25 1.268-.25.3 0 .856-.048 1.114-.136.178-.063 1.36-.61 1.71-.913.363-.314.912-1.618.934-1.877.037-.093.464-.72.7-.962.049.047.154.103.297.138.182.046.712.297 1.139.517.073.053.193.102.497.223.194.077.414.162.487.207.124.078.852.731.943.833.378.56.75.85 1.144.903.433.057 2.38.096 3.198.11l1.373.022c.063.044.14.082.234.117.786.29 1.708.686 1.93.855l.029.17c.03.162.118.66.053.78-.067.032-.25.101-.447.178-.385.152-.782.308-.975.505-.096.098-.148.18-.181.237l-.35.022c-.846.036-1.314.07-1.517.16-.344.153-.55.417-.55.704 0 .301.13.542.422.78.138.114.369.304.365.38-.042.145-.085.274-.013.417.077.153.234.215.388.264l.134.042c.082.024.194.058.224.08-.156.158-.228.375-.294.581-.06.18-.114.35-.176.458-.115.198-1.091 1.067-1.265 1.167-.198.092-2.507.785-2.857.867-.182.042-1.017.081-1.72.081-.215 0-.384-.002-.446-.012-.11-.02-.267-.038-.425-.038-.257 0-.447.043-.58.132-.095.064-.226.147-.32.205"/>\n        </symbol>\n    </svg>',
    site = function () {
        const e = {
            active: "-activo-",
            rotadores: document.querySelectorAll(".fnSliderFree"),
            swiperrotadores: new Array,
            calendarioFiltro: "",
            calendarioFecha: {
                mes: (new Date).getMonth(),
                anio: (new Date).getFullYear()
            }
        },
            t = {
                calendario: function () {
                    Array.from(document.querySelectorAll(".fnCambiarMes")).forEach((function (e, t) {
                        e.addEventListener("click", (function () {
                            i(this.getAttribute("data-direccion"))
                        }))
                    })), i()
                },
                printers: function () {
                    if ($(".header__mapa").html(headerMapa), $(".header__mapa__fuente").html(mapaSVG), $(".header__nav__destinos__enlace.-activo-").length) {
                        const e = $(".header__nav__destinos__enlace.-activo-").data("mapa");
                        $(".header__mapa__" + e).addClass("-default-")
                    }
                    window.fbAsyncInit = function () {
                        FB.init({
                            appId: "2613846985498810",
                            autoLogAppEvents: !0,
                            xfbml: !0,
                            version: "v8.0"
                        })
                    }
                },
                setRotadores: function () {
                    e.rotadores.length && e.rotadores.forEach((function (t, i) {
                        e.swiperrotadores.push({
                            clase: t,
                            swiper: null
                        })
                    })), e.swiperrotadores.length && e.swiperrotadores.forEach((function (e, t) {
                        var i = "";
                        let s = e.clase.getAttribute("data-api-tipo");
                        s && $.ajax({
                            url: "https://devapi.joinnus.com/v2/search",
                            headers: {
                                brand: "ytqp",
                                "Content-Type": "application/json"
                            },
                            type: "GET",
                            dataType: "json",
                            data: JSON.parse(e.clase.getAttribute("data-api-data").replace(/['"]+/g, '"'))
                        }).done((function (t) {
                            var i = "";
                            switch (s) {
                                case "card-poster-tipo-1":
                                    $.each(t.data, (function (e, t) {
                                        i += function (e) {
                                            return `<div class="swiper-slide">\n                    <article class="card-poster m--tipo1">\n                        <img src="${e.images.activityImage.full.url}" alt="" class="card-poster__imagen">\n                        <strong class="card-poster__precio">\n                            S/ ${e.pricing.amountSale}\n                            <span class="card-poster__precio-anterior">Antes S/ ${e.pricing.amount}</span>\n                        </strong>\n                        <aside class="corazon m--blanco card-poster__corazon"><i class="fa fa-heart" aria-hidden="true"></i>10</aside>\n                        <header class="card-poster__header">\n                            <span class="card-poster__compra">Compra online</span>\n                            <strong class="card-poster__subtitulo">${e.activityType}</strong>\n                            <h1 class="card-poster__titulo">${e.title}</h1>\n                        </header>\n                        <a href="${e.url}" target="_blank" class="card-poster__mas-informacion">Más información</a>\n                    </article>\n                </div>`
                                        }(t)
                                    }));
                                    break;
                                case "card-poster-tipo-2":
                                    $.each(t.data, (function (e, t) {
                                        i += function (e) {
                                            return `<div class="swiper-slide">\n                    <article class="card-poster m--tipo2">\n                        <img src="${e.images.activityImage.full.url}" alt="" class="card-poster__imagen">\n                        <strong class="card-poster__precio">\n                            S/ ${e.pricing.amountSale}\n                            <span class="card-poster__precio-anterior">Antes S/ ${e.pricing.amount}</span>\n                        </strong>\n                        <aside class="corazon m--blanco card-poster__corazon"><i class="fa fa-heart" aria-hidden="true"></i>10</aside>\n                        <header class="card-poster__header">\n                            <span class="card-poster__compra">Compra online</span>\n                            <strong class="card-poster__subtitulo">${e.activityType}</strong>\n                            <h1 class="card-poster__titulo">${e.title}</h1>\n                        </header>\n                        <a href="${e.url}" target="_blank" class="card-poster__mas-informacion">Más información</a>\n                    </article>\n                </div>`
                                        }(t)
                                    }))
                            }
                            e.clase.querySelector(".swiper-wrapper").innerHTML = i
                        })), e.clase.classList[2], i = {
                            slidesPerView: "auto",
                            freeMode: !0,
                            navigation: {
                                nextEl: e.clase.parentElement.querySelector(".fnSliderDestinosDetalle__right"),
                                prevEl: e.clase.parentElement.querySelector(".fnSliderDestinosDetalle__left")
                            }
                        }, e.swiper = new Swiper(e.clase, i)
                    }))
                },
                swipers: function () {
                    let t = new Swiper(".fnSliderHome", {
                        effect: "fade",
                        speed: 1500,
                        autoplay: !0,
                        pagination: {
                            el: ".sliders__nav__items",
                            clickable: !0,
                            renderBullet: function (e, t) {
                                return '<div class="' + t + ' sliders__nav__item">' + (e + 1) + "</div>"
                            }
                        }
                    });
                    $(".fnSliderPlayPause").on("click", (function () {
                        $(this).toggleClass("-active-"), $(this).hasClass("-active-") ? t.autoplay.stop() : t.autoplay.start()
                    })), $(".fnFiltroSliderFree").on("change click", (function (t) {
                        t.preventDefault();
                        const i = null != $(this).data("tipo") ? $(this).data("tipo") : $(this).find("option:selected").data("tipo");
                        let s = $(".fnSliderFree");
                        $(".fnFiltroSliderFree").removeClass(e.active), $(this).addClass(e.active), $.each(s, (function () {
                            0 == $(this).find(".swiper-slide[data-tipo=" + i + "]").length ? $(this).addClass("-sin-resultados-") : $(this).removeClass("-sin-resultados-").find(".swiper-slide").removeClass("-inactivo-").end().find(".swiper-slide[data-tipo!=" + i + "]").addClass("-inactivo-")
                        })), $.each(e.swiperrotadores, (function (e, t) {
                            t.swiper.update()
                        }))
                    }));
                    new Swiper(".fnSliderGrilla", {
                        spaceBetween: 0,
                        freeMode: !0,
                        slidesPerView: "auto",
                        slidesPerColumn: 2,
                        breakpoints: {
                            680: {
                                spaceBetween: 0,
                                freeMode: !0,
                                slidesPerView: "auto",
                                slidesPerColumn: 2
                            },
                            0: {
                                spaceBetween: 0,
                                freeMode: !0,
                                slidesPerView: "auto",
                                slidesPerColumn: 1
                            }
                        }
                    }), new Swiper(".fnSliderDestinosDetalle", {
                        speed: 1500,
                        autoplay: !0,
                        loop: !0,
                        pagination: {
                            el: ".destinos__detalle__slider__pagination",
                            clickable: !0
                        },
                        navigation: {
                            nextEl: ".fnSliderDestinosDetalle__left",
                            prevEl: ".fnSliderDestinosDetalle__right"
                        }
                    }), new Swiper(".fnSliderBloqueTCD", {
                        speed: 1500,
                        autoplay: !0,
                        loop: !0,
                        spaceBetween: 18,
                        pagination: {
                            el: ".SliderBloqueTCD__pagination",
                            clickable: !0
                        },
                        navigation: {
                            nextEl: ".SliderBloqueTCD__left",
                            prevEl: ".SliderBloqueTCD__right"
                        }
                    }), new Swiper(".fnSliderBg", {
                        effect: "fade",
                        autoplay: {
                            delay: 5e3
                        },
                        speed: 1200
                    })
                },
                clicks: function () {
                    $(".fnToggleClass").on("click", (function (t) {
                        t.preventDefault();
                        const i = $(this),
                            s = i.data("targets"),
                            n = i.data("removes");
                        s && a(s), n && $(n).removeClass(e.active)
                    })), $(".fnVerDepartamentosPorZona").on("click", (function () {
                        var t, i;
                        t = ".fnVerDepartamentosPorZona", i = $(this), $(t).removeClass(e.active), i.addClass(e.active), $(".header__nav__destinos").removeClass("-norte- -centro- -sur-").addClass($(this).data("filtro"))
                    })), $(".buscador-principal").on("mouseleave", (function () {
                        $(".buscador-principal, .header__nav__enlace__bg").removeClass(e.active)
                    })), $(".fnMostrarBuscadorPrincipal").on("click", (function () {
                        $(".buscador-principal__input").focus()
                    })), $(".buscador-principal__input").on("focus", (function () {
                        $(".buscador-principal").removeClass("-no-focus-")
                    })).on("blur", (function () {
                        $(".buscador-principal").addClass("-no-focus-")
                    })), $(".header__nav__destinos__enlace").on("mouseenter mouseleave", (function () {
                        a(".header__mapa__" + $(this).data("mapa"))
                    })), $(".fnSelect").on("change", (function (e) {
                        $(this).parent().find(".fnTargetSelect").text($(this).find("option:selected").text())
                    })), $(".fnFiltrarGrilla").on("click change", (function (t) {
                        const i = $($(this).closest(".filtro-selector").data("target")),
                            s = void 0 !== $(this).data("filtro") ? $(this).data("filtro") : $(this).val(),
                            a = '.card-poster[data-filtro*="' + s + '"]';
                        if ($(this).parent(".filtro-selector").find(".filtro-selector__boton").removeClass(e.active), $(this).addClass(e.active), void 0 !== s && "" !== s) {
                            i.removeClass("-mostrar-todos- -mostrar-ocultos- -ocultar-boton- -mas-8- -mas-6- -mas-4-").addClass(e.active).find(".card-poster").removeClass("-activo- -si-4- -si-6- -si-8-").end().find(a).addClass(e.active).eq(3).addClass("-si-4-").end().eq(5).addClass("-si-6-").end().eq(7).addClass("-si-8-");
                            const t = i.find(a).length;
                            t > 8 && i.addClass("-mas-8-"), t > 6 && i.addClass("-mas-6-"), t > 4 && i.addClass("-mas-4-")
                        } else {
                            i.removeClass("-activo- -mostrar-ocultos- -ocultar-boton-").addClass("-mostrar-todos-").find(".card-poster").removeClass(e.active);
                            const t = i.find(".card-poster").length;
                            t > 8 && i.addClass("-mas-8-"), t > 6 && i.addClass("-mas-6-"), t > 4 && i.addClass("-mas-4-")
                        }
                    })), $(".fnFiltrarGrillaTodo").on("click", (function () {
                        $($(this).data("target")).addClass("-mostrar-ocultos-")
                    })), $.each($(".fnFiltroSelectorValidar .filtro-selector__boton, .fnFiltroSelectorValidar .filtro-selector__select-ui__select option"), (function (e, t) {
                        const i = $(this),
                            s = void 0 !== i.data("filtro") ? i.data("filtro") : i.val();
                        "" != s && 0 == $('#fnTargetFiltroGrilla .card-poster[data-filtro*="' + s + '"]').length && i.attr("hidden", "hidden")
                    })), $(".fnSelectCityBlog").on("change", (function (e) {
                        const t = $(this).val(),
                            i = "" != $.trim(t) ? "/" + $(this).val() : "";
                        window.location.href = "/blog-viajero" + i
                    })), $(".fnShareFacebook").on("click", (function (e) {
                        e.preventDefault(), FB.ui({
                            method: "share",
                            href: window.location.href
                        }, (function (e) { }))
                    })), $("#inputSearchRutasCortas").on("keyup", (function (e) {
                        $.trim($(this).val()).length > 0 ? ($("#fnTargetFiltroGrilla").addClass("-mostrar-resultados-"), $(".card-poster").removeClass("-activo-"), $(".card-poster[data-filtro*=" + $(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "]").addClass("-activo-"), 0 == $(".card-poster.-activo-").length && $("#fnTargetFiltroGrilla").removeClass("-mostrar-resultados-").addClass("-sin-resultados-")) : ($("#fnTargetFiltroGrilla").removeClass("-mostrar-resultados- -sin-resultados-"), $(".card-poster").removeClass("-activo-"))
                    })), $(".fnFiltroCalendario").on("click change", (function () {
                        e.calendarioFiltro = $(this).data("filtro") || $(this).val(), $(".calendario__festividad, .filtro-selector__boton").removeClass(e.active), "" != e.calendarioFiltro ? ($("#calendario").addClass("-filtrar-"), $('.calendario__festividad[data-filtro*="' + e.calendarioFiltro + '"]').addClass(e.active)) : $("#calendario").removeClass("-filtrar-"), $(this).addClass(e.active)
                    })), $(".fnSelectUrlReload").on("change", (function () {
                        window.location = $(this).val()
                    }))
                },
                forms: function () {
                    let t = !0;
                    $("form").on("submit", (function (i) {
                        let s = $(this),
                            a = s.find("input, textarea, select"),
                            n = s.data("tipo"),
                            r = s.attr("method").toLowerCase(),
                            l = s.data("gracias"),
                            o = 0,
                            h = s.find("button"),
                            d = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            c = /[^0-9]/g;
                        return $.each(a, (function (e, t) {
                            let i = $(this);
                            if (void 0 === i.attr("no")) {
                                let e = i.val(),
                                    t = i.parent();
                                switch ("" === $.trim(e) && t.addClass("-error-") && o++, i.attr("valid")) {
                                    case "numero":
                                        c.test(e) && t.addClass("-error-") && o++;
                                        break;
                                    case "email":
                                        !d.test(e) && t.addClass("-error-") && o++;
                                        break;
                                    case "subscription":
                                        !d.test(e) && i.addClass("-error-") && o++;
                                        break;
                                    case "select":
                                        "" === $.trim(e) && t.parent().addClass("-error-") && o++;
                                        break;
                                    case "file":
                                        "" === $.trim(e) && t.addClass("-error-") && o++;
                                        break;
                                    case "terminos":
                                        !i.is(":checked") && t.addClass("-error-") && o++
                                }
                            }
                        })), !(0 !== o || !t) && ("get" == r || "postpermit" == n || (i.preventDefault(), void grecaptcha.ready((function () {
                            grecaptcha.getResponse() && (h.attr("disabled", "disabled"), t = !1, $(l).addClass(e.active), $.each(a, (function (e, t) {
                                $(this).val("").prop("checked", !1)
                            })), t = !0, h.removeAttr("disabled"))
                        }))))
                    })), $("input, select, textarea").on("focus", (function () {
                        $(this).parent().addClass("-focus-").removeClass("-error-")
                    })).on("blur change", (function () {
                        $(this).parent().removeClass("-focus-")
                    }))
                }
            };

        function i(t) {
            const i = calendario_provincia ? "/api/festividades/" + calendario_provincia : "/api/festividades";
            $.getJSON(i, (function (i, a) {
                const n = i,
                    r = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];
                let l;
                switch (t) {
                    case "mas":
                        11 == e.calendarioFecha.mes ? (e.calendarioFecha.anio = e.calendarioFecha.anio + 1, e.calendarioFecha.mes = 0) : e.calendarioFecha.mes++;
                        break;
                    case "menos":
                        0 == e.calendarioFecha.mes ? (e.calendarioFecha.anio = e.calendarioFecha.anio - 1, e.calendarioFecha.mes = 11) : e.calendarioFecha.mes--
                }
                l = new Date(e.calendarioFecha.anio, e.calendarioFecha.mes, 1);
                const o = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][l.getMonth()] + " " + l.getFullYear(),
                    h = l.getMonth() + 1,
                    d = new Date(l.getFullYear(), l.getMonth() + 1, 0).getDate();
                let c = "";
                for (let e = 1; e <= d; e++) inMobile = i.find(t => t.inicio === e && t.mes_id === h) ? "m--mobile" : "", c += `<li class="calendario__item ${inMobile}">\n\t\t\t                    <div class="calendario__article">\n\t\t\t                        <time class="calendario__fecha">\n\t\t\t                            <span>${r[new Date(l.getFullYear(), l.getMonth(), e).getDay()]}</span>\n\t\t\t                            <span>${e}</span>\n\t\t\t                        </time>\n\t\t\t                        ${s(n, e, h)}\n\t\t\t                    </div>\n\t\t\t                </li>`;
                document.getElementById("calendario").innerHTML = c, document.getElementById("calendario_mes_titulo").innerHTML = o
            }))
        }

        function s(t, i, s) {
            let a = "";
            return t.forEach((function (t, n) {
                if (t.inicio == i && t.mes_id == s && t.anio == e.calendarioFecha.anio) {
                    let i = "fin" == t.tipo_de_festividad || "feriado" == t.tipo_de_festividad ? t.tipo_de_festividad : ["feriado", "fin"][Math.floor(2 * Math.random())],
                        s = e.calendarioFiltro == i ? "-activo-" : "";
                    a += `<article class="calendario__festividad full ${s}" data-filtro="${i}">\n\t\t\t\t\t\t\t\t\t<img src="${t.imagen}" class="calendario__imagen" />\n\t\t\t                        <strong class="calendario__resumen">${t.nombre}</strong>\n\t\t\t                        <address class="calendario__lugar"><i class="fa fa-map-marker" aria-hidden="true"></i> ${t.provincia}</address>\n\t\t\t                        <a href="/experiencias/${t.provincia_slug}/${t.slug}" class="calendario__enlace">Más información</a>\n\t\t\t                    </article>`
                }
            })), "" == a ? '<div class="calendario__festividad"></div>' : a
        }

        function a(t) {
            $($.trim(t)).toggleClass(e.active)
        }
        return {
            init: function () {
                t.printers(), t.swipers(), t.clicks(), t.setRotadores(), t.forms(), $("#calendario").length && t.calendario()
            }
        }
    }();
site.init();