! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, (function (t) {
    "use strict";
    var e = Object.freeze;

    function n(t) {
        var e, n, i, o;
        for (n = 1, i = arguments.length; n < i; n++)
            for (e in o = arguments[n]) t[e] = o[e];
        return t
    }
    Object.freeze = function (t) {
        return t
    };
    var i = Object.create || function (t) {
        return o.prototype = t, new o
    };

    function o() { }

    function r(t, e) {
        var n = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
        var i = n.call(arguments, 2);
        return function () {
            return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
        }
    }
    var s = 0;

    function a(t) {
        return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id
    }

    function u(t, e, n) {
        var i, o, r, s;
        return s = function () {
            i = !1, o && (r.apply(n, o), o = !1)
        }, r = function () {
            i ? o = arguments : (t.apply(n, arguments), setTimeout(s, e), i = !0)
        }
    }

    function l(t, e, n) {
        var i = e[1],
            o = e[0],
            r = i - o;
        return t === i && n ? t : ((t - o) % r + r) % r + o
    }

    function h() {
        return !1
    }

    function c(t, e) {
        var n = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * n) / n
    }

    function f(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function d(t) {
        return f(t).split(/\s+/)
    }

    function p(t, e) {
        for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
        return t.options
    }

    function _(t, e, n) {
        var i = [];
        for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
    }
    var m = /\{ *([\w_-]+) *\}/g;

    function g(t, e) {
        return t.replace(m, (function (t, n) {
            var i = e[n];
            if (void 0 === i) throw new Error("No value provided for variable " + t);
            return "function" == typeof i && (i = i(e)), i
        }))
    }
    var v = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function y(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e) return n;
        return -1
    }
    var w = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

    function x(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var b = 0;

    function P(t) {
        var e = +new Date,
            n = Math.max(0, 16 - (e - b));
        return b = e + n, window.setTimeout(t, n)
    }
    var T = window.requestAnimationFrame || x("RequestAnimationFrame") || P,
        z = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function (t) {
            window.clearTimeout(t)
        };

    function C(t, e, n) {
        if (!n || T !== P) return T.call(window, r(t, e));
        t.call(e)
    }

    function k(t) {
        t && z.call(window, t)
    }
    var S = (Object.freeze || Object)({
        freeze: e,
        extend: n,
        create: i,
        bind: r,
        lastId: s,
        stamp: a,
        throttle: u,
        wrapNum: l,
        falseFn: h,
        formatNum: c,
        trim: f,
        splitWords: d,
        setOptions: p,
        getParamString: _,
        template: g,
        isArray: v,
        indexOf: y,
        emptyImageUrl: w,
        requestFn: T,
        cancelFn: z,
        requestAnimFrame: C,
        cancelAnimFrame: k
    });

    function M() { }
    M.extend = function (t) {
        function e() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }
        var o = e.__super__ = this.prototype,
            r = i(o);
        for (var s in (r.constructor = e).prototype = r, this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
        return t.statics && (n(e, t.statics), delete t.statics), t.includes && (function (t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = v(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes), n.apply(null, [r].concat(t.includes)), delete t.includes), r.options && (t.options = n(i(r.options), t.options)), n(r, t), r._initHooks = [], r.callInitHooks = function () {
            if (!this._initHooksCalled) {
                o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this)
            }
        }, e
    }, M.include = function (t) {
        return n(this.prototype, t), this
    }, M.mergeOptions = function (t) {
        return n(this.prototype.options, t), this
    }, M.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
            n = "function" == typeof t ? t : function () {
                this[t].apply(this, e)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this
    };
    var E = {
        on: function (t, e, n) {
            if ("object" == typeof t)
                for (var i in t) this._on(i, t[i], e);
            else
                for (var o = 0, r = (t = d(t)).length; o < r; o++) this._on(t[o], e, n);
            return this
        },
        off: function (t, e, n) {
            if (t)
                if ("object" == typeof t)
                    for (var i in t) this._off(i, t[i], e);
                else
                    for (var o = 0, r = (t = d(t)).length; o < r; o++) this._off(t[o], e, n);
            else delete this._events;
            return this
        },
        _on: function (t, e, n) {
            this._events = this._events || {};
            var i = this._events[t];
            i || (i = [], this._events[t] = i), n === this && (n = void 0);
            for (var o = {
                fn: e,
                ctx: n
            }, r = i, s = 0, a = r.length; s < a; s++)
                if (r[s].fn === e && r[s].ctx === n) return;
            r.push(o)
        },
        _off: function (t, e, n) {
            var i, o, r;
            if (this._events && (i = this._events[t]))
                if (e) {
                    if (n === this && (n = void 0), i)
                        for (o = 0, r = i.length; o < r; o++) {
                            var s = i[o];
                            if (s.ctx === n && s.fn === e) return s.fn = h, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(o, 1)
                        }
                } else {
                    for (o = 0, r = i.length; o < r; o++) i[o].fn = h;
                    delete this._events[t]
                }
        },
        fire: function (t, e, i) {
            if (!this.listens(t, i)) return this;
            var o = n({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var r = this._events[t];
                if (r) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var s = 0, a = r.length; s < a; s++) {
                        var u = r[s];
                        u.fn.call(u.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return i && this._propagateEvent(o), this
        },
        listens: function (t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) return !0;
            if (e)
                for (var i in this._eventParents)
                    if (this._eventParents[i].listens(t, e)) return !0;
            return !1
        },
        once: function (t, e, n) {
            if ("object" == typeof t) {
                for (var i in t) this.once(i, t[i], e);
                return this
            }
            var o = r((function () {
                this.off(t, e, n).off(t, o, n)
            }), this);
            return this.on(t, e, n).on(t, o, n)
        },
        addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[a(t)] = t, this
        },
        removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[a(t)], this
        },
        _propagateEvent: function (t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, n({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    E.addEventListener = E.on, E.removeEventListener = E.clearAllEventListeners = E.off, E.addOneTimeEventListener = E.once, E.fireEvent = E.fire, E.hasEventListeners = E.listens;
    var I = M.extend(E);

    function A(t, e, n) {
        this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
    }
    var j = Math.trunc || function (t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    };

    function O(t, e, n) {
        return t instanceof A ? t : v(t) ? new A(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new A(t.x, t.y) : new A(t, e, n)
    }

    function B(t, e) {
        if (t)
            for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
    }

    function Z(t, e) {
        return !t || t instanceof B ? t : new B(t, e)
    }

    function R(t, e) {
        if (t)
            for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
    }

    function N(t, e) {
        return t instanceof R ? t : new R(t, e)
    }

    function D(t, e, n) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== n && (this.alt = +n)
    }

    function W(t, e, n) {
        return t instanceof D ? t : v(t) && "object" != typeof t[0] ? 3 === t.length ? new D(t[0], t[1], t[2]) : 2 === t.length ? new D(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new D(t, e, n)
    }
    A.prototype = {
        clone: function () {
            return new A(this.x, this.y)
        },
        add: function (t) {
            return this.clone()._add(O(t))
        },
        _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function (t) {
            return this.clone()._subtract(O(t))
        },
        _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function (t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function (t) {
            return new A(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function (t) {
            return new A(this.x / t.x, this.y / t.y)
        },
        round: function () {
            return this.clone()._round()
        },
        _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function () {
            return this.clone()._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.clone()._ceil()
        },
        _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function () {
            return this.clone()._trunc()
        },
        _trunc: function () {
            return this.x = j(this.x), this.y = j(this.y), this
        },
        distanceTo: function (t) {
            var e = (t = O(t)).x - this.x,
                n = t.y - this.y;
            return Math.sqrt(e * e + n * n)
        },
        equals: function (t) {
            return (t = O(t)).x === this.x && t.y === this.y
        },
        contains: function (t) {
            return t = O(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function () {
            return "Point(" + c(this.x) + ", " + c(this.y) + ")"
        }
    }, B.prototype = {
        extend: function (t) {
            return t = O(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function (t) {
            return new A((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function () {
            return new A(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new A(this.max.x, this.min.y)
        },
        getTopLeft: function () {
            return this.min
        },
        getBottomRight: function () {
            return this.max
        },
        getSize: function () {
            return this.max.subtract(this.min)
        },
        contains: function (t) {
            var e, n;
            return (t = "number" == typeof t[0] || t instanceof A ? O(t) : Z(t)) instanceof B ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
        },
        intersects: function (t) {
            t = Z(t);
            var e = this.min,
                n = this.max,
                i = t.min,
                o = t.max,
                r = o.x >= e.x && i.x <= n.x,
                s = o.y >= e.y && i.y <= n.y;
            return r && s
        },
        overlaps: function (t) {
            t = Z(t);
            var e = this.min,
                n = this.max,
                i = t.min,
                o = t.max,
                r = o.x > e.x && i.x < n.x,
                s = o.y > e.y && i.y < n.y;
            return r && s
        },
        isValid: function () {
            return !(!this.min || !this.max)
        }
    }, R.prototype = {
        extend: function (t) {
            var e, n, i = this._southWest,
                o = this._northEast;
            if (t instanceof D) n = e = t;
            else {
                if (!(t instanceof R)) return t ? this.extend(W(t) || N(t)) : this;
                if (e = t._southWest, n = t._northEast, !e || !n) return this
            }
            return i || o ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), o.lat = Math.max(n.lat, o.lat), o.lng = Math.max(n.lng, o.lng)) : (this._southWest = new D(e.lat, e.lng), this._northEast = new D(n.lat, n.lng)), this
        },
        pad: function (t) {
            var e = this._southWest,
                n = this._northEast,
                i = Math.abs(e.lat - n.lat) * t,
                o = Math.abs(e.lng - n.lng) * t;
            return new R(new D(e.lat - i, e.lng - o), new D(n.lat + i, n.lng + o))
        },
        getCenter: function () {
            return new D((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new D(this.getNorth(), this.getWest())
        },
        getSouthEast: function () {
            return new D(this.getSouth(), this.getEast())
        },
        getWest: function () {
            return this._southWest.lng
        },
        getSouth: function () {
            return this._southWest.lat
        },
        getEast: function () {
            return this._northEast.lng
        },
        getNorth: function () {
            return this._northEast.lat
        },
        contains: function (t) {
            t = "number" == typeof t[0] || t instanceof D || "lat" in t ? W(t) : N(t);
            var e, n, i = this._southWest,
                o = this._northEast;
            return t instanceof R ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng
        },
        intersects: function (t) {
            t = N(t);
            var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                o = t.getNorthEast(),
                r = o.lat >= e.lat && i.lat <= n.lat,
                s = o.lng >= e.lng && i.lng <= n.lng;
            return r && s
        },
        overlaps: function (t) {
            t = N(t);
            var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                o = t.getNorthEast(),
                r = o.lat > e.lat && i.lat < n.lat,
                s = o.lng > e.lng && i.lng < n.lng;
            return r && s
        },
        toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function (t, e) {
            return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    };
    var F, H = {
        latLngToPoint: function (t, e) {
            var n = this.projection.project(t),
                i = this.scale(e);
            return this.transformation._transform(n, i)
        },
        pointToLatLng: function (t, e) {
            var n = this.scale(e),
                i = this.transformation.untransform(t, n);
            return this.projection.unproject(i)
        },
        project: function (t) {
            return this.projection.project(t)
        },
        unproject: function (t) {
            return this.projection.unproject(t)
        },
        scale: function (t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function (t) {
            if (this.infinite) return null;
            var e = this.projection.bounds,
                n = this.scale(t);
            return new B(this.transformation.transform(e.min, n), this.transformation.transform(e.max, n))
        },
        infinite: !(D.prototype = {
            equals: function (t, e) {
                return !!t && (t = W(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function (t) {
                return "LatLng(" + c(this.lat, t) + ", " + c(this.lng, t) + ")"
            },
            distanceTo: function (t) {
                return U.distance(this, W(t))
            },
            wrap: function () {
                return U.wrapLatLng(this)
            },
            toBounds: function (t) {
                var e = 180 * t / 40075017,
                    n = e / Math.cos(Math.PI / 180 * this.lat);
                return N([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
            },
            clone: function () {
                return new D(this.lat, this.lng, this.alt)
            }
        }),
        wrapLatLng: function (t) {
            var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng;
            return new D(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
        },
        wrapLatLngBounds: function (t) {
            var e = t.getCenter(),
                n = this.wrapLatLng(e),
                i = e.lat - n.lat,
                o = e.lng - n.lng;
            if (0 == i && 0 == o) return t;
            var r = t.getSouthWest(),
                s = t.getNorthEast();
            return new R(new D(r.lat - i, r.lng - o), new D(s.lat - i, s.lng - o))
        }
    },
        U = n({}, H, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function (t, e) {
                var n = Math.PI / 180,
                    i = t.lat * n,
                    o = e.lat * n,
                    r = Math.sin((e.lat - t.lat) * n / 2),
                    s = Math.sin((e.lng - t.lng) * n / 2),
                    a = r * r + Math.cos(i) * Math.cos(o) * s * s,
                    u = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * u
            }
        }),
        $ = 6378137,
        V = {
            R: $,
            MAX_LATITUDE: 85.0511287798,
            project: function (t) {
                var e = Math.PI / 180,
                    n = this.MAX_LATITUDE,
                    i = Math.max(Math.min(n, t.lat), -n),
                    o = Math.sin(i * e);
                return new A(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function (t) {
                var e = 180 / Math.PI;
                return new D((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
            },
            bounds: (F = $ * Math.PI, new B([-F, -F], [F, F]))
        };

    function q(t, e, n, i) {
        if (v(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
        this._a = t, this._b = e, this._c = n, this._d = i
    }

    function G(t, e, n, i) {
        return new q(t, e, n, i)
    }
    q.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function (t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function (t, e) {
            return e = e || 1, new A((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var K, Y = n({}, U, {
        code: "EPSG:3857",
        projection: V,
        transformation: (K = .5 / (Math.PI * V.R), G(K, .5, -K, .5))
    }),
        J = n({}, Y, {
            code: "EPSG:900913"
        });

    function X(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function Q(t, e) {
        var n, i, o, r, s, a, u = "";
        for (n = 0, o = t.length; n < o; n++) {
            for (i = 0, r = (s = t[n]).length; i < r; i++) u += (i ? "L" : "M") + (a = s[i]).x + " " + a.y;
            u += e ? Et ? "z" : "x" : ""
        }
        return u || "M0 0"
    }
    var tt = document.documentElement.style,
        et = "ActiveXObject" in window,
        nt = et && !document.addEventListener,
        it = "msLaunchUri" in navigator && !("documentMode" in document),
        ot = At("webkit"),
        rt = At("android"),
        st = At("android 2") || At("android 3"),
        at = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        ut = rt && At("Google") && at < 537 && !("AudioNode" in window),
        lt = !!window.opera,
        ht = At("chrome"),
        ct = At("gecko") && !ot && !lt && !et,
        ft = !ht && At("safari"),
        dt = At("phantom"),
        pt = "OTransition" in tt,
        _t = 0 === navigator.platform.indexOf("Win"),
        mt = et && "transition" in tt,
        gt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !st,
        vt = "MozPerspective" in tt,
        yt = !window.L_DISABLE_3D && (mt || gt || vt) && !pt && !dt,
        wt = "undefined" != typeof orientation || At("mobile"),
        xt = wt && ot,
        bt = wt && gt,
        Lt = !window.PointerEvent && window.MSPointerEvent,
        Pt = !(ot || !window.PointerEvent && !Lt),
        Tt = !window.L_NO_TOUCH && (Pt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        zt = wt && lt,
        Ct = wt && ct,
        kt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        St = function () {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        t = !0
                    }
                });
                window.addEventListener("testPassiveEventSupport", h, e), window.removeEventListener("testPassiveEventSupport", h, e)
            } catch (t) { }
            return t
        },
        Mt = !!document.createElement("canvas").getContext,
        Et = !(!document.createElementNS || !X("svg").createSVGRect),
        It = !Et && function () {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }();

    function At(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var jt = (Object.freeze || Object)({
        ie: et,
        ielt9: nt,
        edge: it,
        webkit: ot,
        android: rt,
        android23: st,
        androidStock: ut,
        opera: lt,
        chrome: ht,
        gecko: ct,
        safari: ft,
        phantom: dt,
        opera12: pt,
        win: _t,
        ie3d: mt,
        webkit3d: gt,
        gecko3d: vt,
        any3d: yt,
        mobile: wt,
        mobileWebkit: xt,
        mobileWebkit3d: bt,
        msPointer: Lt,
        pointer: Pt,
        touch: Tt,
        mobileOpera: zt,
        mobileGecko: Ct,
        retina: kt,
        passiveEvents: St,
        canvas: Mt,
        svg: Et,
        vml: It
    }),
        Ot = Lt ? "MSPointerDown" : "pointerdown",
        Bt = Lt ? "MSPointerMove" : "pointermove",
        Zt = Lt ? "MSPointerUp" : "pointerup",
        Rt = Lt ? "MSPointerCancel" : "pointercancel",
        Nt = ["INPUT", "SELECT", "OPTION"],
        Dt = {},
        Wt = !1,
        Ft = 0;

    function Ht(t) {
        Dt[t.pointerId] = t, Ft++
    }

    function Ut(t) {
        Dt[t.pointerId] && (Dt[t.pointerId] = t)
    }

    function $t(t) {
        delete Dt[t.pointerId], Ft--
    }

    function Vt(t, e) {
        for (var n in t.touches = [], Dt) t.touches.push(Dt[n]);
        t.changedTouches = [t], e(t)
    }
    var qt = Lt ? "MSPointerDown" : Pt ? "pointerdown" : "touchstart",
        Gt = Lt ? "MSPointerUp" : Pt ? "pointerup" : "touchend",
        Kt = "_leaflet_";
    var Yt, Jt, Xt, Qt, te, ee = ge(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ne = ge(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        ie = "webkitTransition" === ne || "OTransition" === ne ? ne + "End" : "transitionend";

    function oe(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function re(t, e) {
        var n = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!n || "auto" === n) && document.defaultView) {
            var i = document.defaultView.getComputedStyle(t, null);
            n = i ? i[e] : null
        }
        return "auto" === n ? null : n
    }

    function se(t, e, n) {
        var i = document.createElement(t);
        return i.className = e || "", n && n.appendChild(i), i
    }

    function ae(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function ue(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function le(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t)
    }

    function he(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }

    function ce(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var n = _e(t);
        return 0 < n.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
    }

    function fe(t, e) {
        if (void 0 !== t.classList)
            for (var n = d(e), i = 0, o = n.length; i < o; i++) t.classList.add(n[i]);
        else if (!ce(t, e)) {
            var r = _e(t);
            pe(t, (r ? r + " " : "") + e)
        }
    }

    function de(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : pe(t, f((" " + _e(t) + " ").replace(" " + e + " ", " ")))
    }

    function pe(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }

    function _e(t) {
        return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function me(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
            var n = !1,
                i = "DXImageTransform.Microsoft.Alpha";
            try {
                n = t.filters.item(i)
            } catch (t) {
                if (1 === e) return
            }
            e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
        }(t, e)
    }

    function ge(t) {
        for (var e = document.documentElement.style, n = 0; n < t.length; n++)
            if (t[n] in e) return t[n];
        return !1
    }

    function ve(t, e, n) {
        var i = e || new A(0, 0);
        t.style[ee] = (mt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
    }

    function ye(t, e) {
        t._leaflet_pos = e, yt ? ve(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }

    function we(t) {
        return t._leaflet_pos || new A(0, 0)
    }
    if ("onselectstart" in document) Yt = function () {
        Se(window, "selectstart", Ze)
    }, Jt = function () {
        Ee(window, "selectstart", Ze)
    };
    else {
        var xe = ge(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        Yt = function () {
            if (xe) {
                var t = document.documentElement.style;
                Xt = t[xe], t[xe] = "none"
            }
        }, Jt = function () {
            xe && (document.documentElement.style[xe] = Xt, Xt = void 0)
        }
    }

    function be() {
        Se(window, "dragstart", Ze)
    }

    function Le() {
        Ee(window, "dragstart", Ze)
    }

    function Pe(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (Te(), te = (Qt = t).style.outline, t.style.outline = "none", Se(window, "keydown", Te))
    }

    function Te() {
        Qt && (Qt.style.outline = te, te = Qt = void 0, Ee(window, "keydown", Te))
    }

    function ze(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
        return t
    }

    function Ce(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    var ke = (Object.freeze || Object)({
        TRANSFORM: ee,
        TRANSITION: ne,
        TRANSITION_END: ie,
        get: oe,
        getStyle: re,
        create: se,
        remove: ae,
        empty: ue,
        toFront: le,
        toBack: he,
        hasClass: ce,
        addClass: fe,
        removeClass: de,
        setClass: pe,
        getClass: _e,
        setOpacity: me,
        testProp: ge,
        setTransform: ve,
        setPosition: ye,
        getPosition: we,
        disableTextSelection: Yt,
        enableTextSelection: Jt,
        disableImageDrag: be,
        enableImageDrag: Le,
        preventOutline: Pe,
        restoreOutline: Te,
        getSizedParentNode: ze,
        getScale: Ce
    });

    function Se(t, e, n, i) {
        if ("object" == typeof e)
            for (var o in e) Ie(t, o, e[o], n);
        else
            for (var r = 0, s = (e = d(e)).length; r < s; r++) Ie(t, e[r], n, i);
        return this
    }
    var Me = "_leaflet_events";

    function Ee(t, e, n, i) {
        if ("object" == typeof e)
            for (var o in e) Ae(t, o, e[o], n);
        else if (e)
            for (var r = 0, s = (e = d(e)).length; r < s; r++) Ae(t, e[r], n, i);
        else {
            for (var a in t[Me]) Ae(t, a, t[Me][a]);
            delete t[Me]
        }
        return this
    }

    function Ie(t, e, n, i) {
        var o = e + a(n) + (i ? "_" + a(i) : "");
        if (t[Me] && t[Me][o]) return this;
        var s = function (e) {
            return n.call(i || t, e || window.event)
        },
            u = s;
        Pt && 0 === e.indexOf("touch") ? function (t, e, n, i) {
            "touchstart" === e ? function (t, e, n) {
                var i = r((function (t) {
                    if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                        if (!(Nt.indexOf(t.target.tagName) < 0)) return;
                        Ze(t)
                    }
                    Vt(t, e)
                }));
                t["_leaflet_touchstart" + n] = i, t.addEventListener(Ot, i, !1), Wt || (document.documentElement.addEventListener(Ot, Ht, !0), document.documentElement.addEventListener(Bt, Ut, !0), document.documentElement.addEventListener(Zt, $t, !0), document.documentElement.addEventListener(Rt, $t, !0), Wt = !0)
            }(t, n, i) : "touchmove" === e ? function (t, e, n) {
                function i(t) {
                    (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Vt(t, e)
                }
                t["_leaflet_touchmove" + n] = i, t.addEventListener(Bt, i, !1)
            }(t, n, i) : "touchend" === e && function (t, e, n) {
                function i(t) {
                    Vt(t, e)
                }
                t["_leaflet_touchend" + n] = i, t.addEventListener(Zt, i, !1), t.addEventListener(Rt, i, !1)
            }(t, n, i)
        }(t, e, s, o) : !Tt || "dblclick" !== e || Pt && ht ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !!St && {
            passive: !1
        }) : "mouseenter" === e || "mouseleave" === e ? (s = function (e) {
            e = e || window.event, Ve(t, e) && u(e)
        }, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1)) : ("click" === e && rt && (s = function (t) {
            ! function (t, e) {
                var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                    i = Fe && n - Fe;
                if (i && 100 < i && i < 500 || t.target._simulatedClick && !t._simulated) return Re(t);
                Fe = n, e(t)
            }(t, u)
        }), t.addEventListener(e, s, !1)) : "attachEvent" in t && t.attachEvent("on" + e, s) : function (t, e, n) {
            var i, o, r = !1;

            function s(t) {
                var e;
                if (Pt) {
                    if (!it || "mouse" === t.pointerType) return;
                    e = Ft
                } else e = t.touches.length;
                if (!(1 < e)) {
                    var n = Date.now(),
                        s = n - (i || n);
                    o = t.touches ? t.touches[0] : t, r = 0 < s && s <= 250, i = n
                }
            }

            function a(t) {
                if (r && !o.cancelBubble) {
                    if (Pt) {
                        if (!it || "mouse" === t.pointerType) return;
                        var n, s, a = {};
                        for (s in o) n = o[s], a[s] = n && n.bind ? n.bind(o) : n;
                        o = a
                    }
                    o.type = "dblclick", o.button = 0, e(o), i = null
                }
            }
            t[Kt + qt + n] = s, t[Kt + Gt + n] = a, t[Kt + "dblclick" + n] = e, t.addEventListener(qt, s, !!St && {
                passive: !1
            }), t.addEventListener(Gt, a, !!St && {
                passive: !1
            }), t.addEventListener("dblclick", e, !1)
        }(t, s, o), t[Me] = t[Me] || {}, t[Me][o] = s
    }

    function Ae(t, e, n, i) {
        var o = e + a(n) + (i ? "_" + a(i) : ""),
            r = t[Me] && t[Me][o];
        if (!r) return this;
        Pt && 0 === e.indexOf("touch") ? function (t, e, n) {
            var i = t["_leaflet_" + e + n];
            "touchstart" === e ? t.removeEventListener(Ot, i, !1) : "touchmove" === e ? t.removeEventListener(Bt, i, !1) : "touchend" === e && (t.removeEventListener(Zt, i, !1), t.removeEventListener(Rt, i, !1))
        }(t, e, o) : !Tt || "dblclick" !== e || Pt && ht ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !!St && {
            passive: !1
        }) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r) : function (t, e) {
            var n = t[Kt + qt + e],
                i = t[Kt + Gt + e],
                o = t[Kt + "dblclick" + e];
            t.removeEventListener(qt, n, !!St && {
                passive: !1
            }), t.removeEventListener(Gt, i, !!St && {
                passive: !1
            }), it || t.removeEventListener("dblclick", o, !1)
        }(t, o), t[Me][o] = null
    }

    function je(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, $e(t), this
    }

    function Oe(t) {
        return Ie(t, "mousewheel", je), this
    }

    function Be(t) {
        return Se(t, "mousedown touchstart dblclick", je), Ie(t, "click", Ue), this
    }

    function Ze(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function Re(t) {
        return Ze(t), je(t), this
    }

    function Ne(t, e) {
        if (!e) return new A(t.clientX, t.clientY);
        var n = Ce(e),
            i = n.boundingClientRect;
        return new A((t.clientX - i.left) / n.x - e.clientLeft, (t.clientY - i.top) / n.y - e.clientTop)
    }
    var De = _t && ht ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

    function We(t) {
        return it ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / De : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    var Fe, He = {};

    function Ue(t) {
        He[t.type] = !0
    }

    function $e(t) {
        var e = He[t.type];
        return He[t.type] = !1, e
    }

    function Ve(t, e) {
        var n = e.relatedTarget;
        if (!n) return !0;
        try {
            for (; n && n !== t;) n = n.parentNode
        } catch (t) {
            return !1
        }
        return n !== t
    }
    var qe = (Object.freeze || Object)({
        on: Se,
        off: Ee,
        stopPropagation: je,
        disableScrollPropagation: Oe,
        disableClickPropagation: Be,
        preventDefault: Ze,
        stop: Re,
        getMousePosition: Ne,
        getWheelDelta: We,
        fakeStop: Ue,
        skipped: $e,
        isExternalTarget: Ve,
        addListener: Se,
        removeListener: Ee
    }),
        Ge = I.extend({
            run: function (t, e, n, i) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = we(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function () {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function () {
                this._animId = C(this._animate, this), this._step()
            },
            _step: function (t) {
                var e = +new Date - this._startTime,
                    n = 1e3 * this._duration;
                e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function (t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(), ye(this._el, n), this.fire("step")
            },
            _complete: function () {
                k(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        Ke = I.extend({
            options: {
                crs: Y,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function (t, e) {
                e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = r(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(W(e.center), e.zoom, {
                    reset: !0
                }), this.callInitHooks(), this._zoomAnimated = ne && yt && !zt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Se(this._proxy, ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function (t, e, i) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(W(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = n({
                    animate: i.animate
                }, i.zoom), i.pan = n({
                    animate: i.animate,
                    duration: i.duration
                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
            },
            setZoom: function (t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = t, this)
            },
            zoomIn: function (t, e) {
                return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
            },
            zoomOut: function (t, e) {
                return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function (t, e, n) {
                var i = this.getZoomScale(e),
                    o = this.getSize().divideBy(2),
                    r = (t instanceof A ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / i),
                    s = this.containerPointToLatLng(o.add(r));
                return this.setView(s, e, {
                    zoom: n
                })
            },
            _getBoundsCenterZoom: function (t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
                var n = O(e.paddingTopLeft || e.padding || [0, 0]),
                    i = O(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, n.add(i));
                if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var r = i.subtract(n).divideBy(2),
                    s = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(s.add(a).divideBy(2).add(r), o),
                    zoom: o
                }
            },
            fitBounds: function (t, e) {
                if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e)
            },
            fitWorld: function (t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function (t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function (t, e) {
                if (e = e || {}, !(t = O(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new Ge, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                    fe(this._mapPane, "leaflet-pan-anim");
                    var n = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function (t, e, n) {
                if (!1 === (n = n || {}).animate || !yt) return this.setView(t, e, n);
                this._stop();
                var i = this.project(this.getCenter()),
                    o = this.project(t),
                    r = this.getSize(),
                    s = this._zoom;
                t = W(t), e = void 0 === e ? s : e;
                var a = Math.max(r.x, r.y),
                    u = a * this.getZoomScale(s, e),
                    l = o.distanceTo(i) || 1,
                    h = 1.42,
                    c = h * h;

                function f(t) {
                    var e = (u * u - a * a + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? u : a) * c * l),
                        n = Math.sqrt(e * e + 1) - e;
                    return n < 1e-9 ? -18 : Math.log(n)
                }

                function d(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function p(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var _ = f(0);
                var m = Date.now(),
                    g = (f(1) - _) / h,
                    v = n.duration ? 1e3 * n.duration : 1e3 * g * .8;
                return this._moveStart(!0, n.noMoveStart),
                    function n() {
                        var r = (Date.now() - m) / v,
                            u = function (t) {
                                return 1 - Math.pow(1 - t, 1.5)
                            }(r) * g;
                        r <= 1 ? (this._flyToFrame = C(n, this), this._move(this.unproject(i.add(o.subtract(i).multiplyBy(function (t) {
                            return a * (p(_) * function (t) {
                                return d(t) / p(t)
                            }(_ + h * t) - d(_)) / c
                        }(u) / l)), s), this.getScaleZoom(a / function (t) {
                            return a * (p(_) / p(_ + h * t))
                        }(u), s), {
                            flyTo: !0
                        })) : this._move(t, e)._moveEnd(!0)
                    }.call(this), this
            },
            flyToBounds: function (t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e)
            },
            setMaxBounds: function (t) {
                return (t = N(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function (t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter(),
                    i = this._limitCenter(n, this._zoom, N(t));
                return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this
            },
            panInside: function (t, e) {
                var n = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                    i = O(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getCenter(),
                    r = this.project(o),
                    s = this.project(t),
                    a = this.getPixelBounds(),
                    u = a.getSize().divideBy(2),
                    l = Z([a.min.add(n), a.max.subtract(i)]);
                if (!l.contains(s)) {
                    this._enforcingBounds = !0;
                    var h = r.subtract(s),
                        c = O(s.x + h.x, s.y + h.y);
                    (s.x < l.min.x || s.x > l.max.x) && (c.x = r.x - h.x, 0 < h.x ? c.x += u.x - n.x : c.x -= u.x - i.x), (s.y < l.min.y || s.y > l.max.y) && (c.y = r.y - h.y, 0 < h.y ? c.y += u.y - n.y : c.y -= u.y - i.y), this.panTo(this.unproject(c), e), this._enforcingBounds = !1
                }
                return this
            },
            invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = n({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var i = this.getSize(),
                    o = e.divideBy(2).round(),
                    s = i.divideBy(2).round(),
                    a = o.subtract(s);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: e,
                    newSize: i
                })) : this
            },
            stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function (t) {
                if (t = this._locateOptions = n({
                    timeout: 1e4,
                    watch: !1
                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var e = r(this._handleGeolocationResponse, this),
                    i = r(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
            },
            stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function (t) {
                var e = t.code,
                    n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + n + "."
                })
            },
            _handleGeolocationResponse: function (t) {
                var e = new D(t.coords.latitude, t.coords.longitude),
                    n = e.toBounds(2 * t.coords.accuracy),
                    i = this._locateOptions;
                if (i.setView) {
                    var o = this.getBoundsZoom(n);
                    this.setView(e, i.maxZoom ? Math.min(o, i.maxZoom) : o)
                }
                var r = {
                    latlng: e,
                    bounds: n,
                    timestamp: t.timestamp
                };
                for (var s in t.coords) "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
                this.fire("locationfound", r)
            },
            addHandler: function (t, e) {
                if (!e) return this;
                var n = this[t] = new e(this);
                return this._handlers.push(n), this.options[t] && n.enable(), this
            },
            remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ae(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (k(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) ae(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function (t, e) {
                var n = se("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                return t && (this._panes[t] = n), n
            },
            getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function () {
                return this._zoom
            },
            getBounds: function () {
                var t = this.getPixelBounds();
                return new R(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function (t, e, n) {
                t = N(t), n = O(n || [0, 0]);
                var i = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    r = this.getMaxZoom(),
                    s = t.getNorthWest(),
                    a = t.getSouthEast(),
                    u = this.getSize().subtract(n),
                    l = Z(this.project(a, i), this.project(s, i)).getSize(),
                    h = yt ? this.options.zoomSnap : 1,
                    c = u.x / l.x,
                    f = u.y / l.y,
                    d = e ? Math.max(c, f) : Math.min(c, f);
                return i = this.getScaleZoom(d, i), h && (i = Math.round(i / (h / 100)) * (h / 100), i = e ? Math.ceil(i / h) * h : Math.floor(i / h) * h), Math.max(o, Math.min(r, i))
            },
            getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new A(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function (t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new B(n, n.add(this.getSize()))
            },
            getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function () {
                return this._panes
            },
            getContainer: function () {
                return this._container
            },
            getZoomScale: function (t, e) {
                var n = this.options.crs;
                return e = void 0 === e ? this._zoom : e, n.scale(t) / n.scale(e)
            },
            getScaleZoom: function (t, e) {
                var n = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var i = n.zoom(t * n.scale(e));
                return isNaN(i) ? 1 / 0 : i
            },
            project: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(W(t), e)
            },
            unproject: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(O(t), e)
            },
            layerPointToLatLng: function (t) {
                var e = O(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function (t) {
                return this.project(W(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(W(t))
            },
            wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(N(t))
            },
            distance: function (t, e) {
                return this.options.crs.distance(W(t), W(e))
            },
            containerPointToLayerPoint: function (t) {
                return O(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function (t) {
                return O(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(O(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))
            },
            mouseEventToContainerPoint: function (t) {
                return Ne(t, this._container)
            },
            mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function (t) {
                var e = this._container = oe(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                Se(e, "scroll", this._onScroll, this), this._containerId = a(e)
            },
            _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && yt, fe(t, "leaflet-container" + (Tt ? " leaflet-touch" : "") + (kt ? " leaflet-retina" : "") + (nt ? " leaflet-oldie" : "") + (ft ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = re(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ye(this._mapPane, new A(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (fe(t.markerPane, "leaflet-zoom-hide"), fe(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function (t, e) {
                ye(this._mapPane, new A(0, 0));
                var n = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var i = this._zoom !== e;
                this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load")
            },
            _moveStart: function (t, e) {
                return t && this.fire("zoomstart"), e || this.fire("movestart"), this
            },
            _move: function (t, e, n) {
                void 0 === e && (e = this._zoom);
                var i = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)
            },
            _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function () {
                return k(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function (t) {
                ye(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function (t) {
                this._targets = {};
                var e = t ? Ee : Se;
                e((this._targets[a(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), yt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function () {
                k(this._resizeRequest), this._resizeRequest = C((function () {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }), this)
            },
            _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function (t, e) {
                for (var n, i = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, s = !1; r;) {
                    if ((n = this._targets[a(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
                        s = !0;
                        break
                    }
                    if (n && n.listens(e, !0)) {
                        if (o && !Ve(r, t)) break;
                        if (i.push(n), o) break
                    }
                    if (r === this._container) break;
                    r = r.parentNode
                }
                return i.length || s || o || !Ve(r, t) || (i = [this]), i
            },
            _handleDOMEvent: function (t) {
                if (this._loaded && !$e(t)) {
                    var e = t.type;
                    "mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e || Pe(t.target || t.srcElement), this._fireDOMEvent(t, e)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function (t, e, i) {
                if ("click" === t.type) {
                    var o = n({}, t);
                    o.type = "preclick", this._fireDOMEvent(o, o.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                    var r = i[0];
                    "contextmenu" === e && r.listens(e, !0) && Ze(t);
                    var s = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                        var a = r.getLatLng && (!r._radius || r._radius <= 10);
                        s.containerPoint = a ? this.latLngToContainerPoint(r.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = a ? r.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                    }
                    for (var u = 0; u < i.length; u++)
                        if (i[u].fire(e, s, !0), s.originalEvent._stopped || !1 === i[u].options.bubblingMouseEvents && -1 !== y(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
            },
            whenReady: function (t, e) {
                return this._loaded ? t.call(e || this, {
                    target: this
                }) : this.on("load", t, e), this
            },
            _getMapPanePos: function () {
                return we(this._mapPane) || new A(0, 0)
            },
            _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function (t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function (t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(i)
            },
            _latLngBoundsToNewLayerBounds: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return Z([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
            },
            _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function (t, e, n) {
                if (!n) return t;
                var i = this.project(t, e),
                    o = this.getSize().divideBy(2),
                    r = new B(i.subtract(o), i.add(o)),
                    s = this._getBoundsOffset(r, n, e);
                return s.round().equals([0, 0]) ? t : this.unproject(i.add(s), e)
            },
            _limitOffset: function (t, e) {
                if (!e) return t;
                var n = this.getPixelBounds(),
                    i = new B(n.min.add(t), n.max.add(t));
                return t.add(this._getBoundsOffset(i, e))
            },
            _getBoundsOffset: function (t, e, n) {
                var i = Z(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                    o = i.min.subtract(t.min),
                    r = i.max.subtract(t.max);
                return new A(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y))
            },
            _rebound: function (t, e) {
                return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function (t) {
                var e = this.getMinZoom(),
                    n = this.getMaxZoom(),
                    i = yt ? this.options.zoomSnap : 1;
                return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
            },
            _onPanTransitionStep: function () {
                this.fire("move")
            },
            _onPanTransitionEnd: function () {
                de(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function (t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e), 0))
            },
            _createAnimProxy: function () {
                var t = this._proxy = se("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", (function (t) {
                    var e = ee,
                        n = this._proxy.style[e];
                    ve(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function () {
                ae(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
            },
            _animMoveEnd: function () {
                var t = this.getCenter(),
                    e = this.getZoom();
                ve(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
            },
            _catchTransitionEnd: function (t) {
                this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function (t, e, n) {
                if (this._animatingZoom) return !0;
                if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var i = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                return !(!0 !== n.animate && !this.getSize().contains(o) || (C((function () {
                    this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }), this), 0))
            },
            _animateZoom: function (t, e, n, i) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, fe(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    noUpdate: i
                }), setTimeout(r(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function () {
                this._animatingZoom && (this._mapPane && de(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), C((function () {
                    this._moveEnd(!0)
                }), this))
            }
        });

    function Ye(t) {
        return new Je(t)
    }
    var Je = M.extend({
        options: {
            position: "topright"
        },
        initialize: function (t) {
            p(this, t)
        },
        getPosition: function () {
            return this.options.position
        },
        setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        },
        getContainer: function () {
            return this._container
        },
        addTo: function (t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t),
                n = this.getPosition(),
                i = t._controlCorners[n];
            return fe(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this._map.on("unload", this.remove, this), this
        },
        remove: function () {
            return this._map && (ae(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this
        },
        _refocusOnMap: function (t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    });
    Ke.include({
        addControl: function (t) {
            return t.addTo(this), this
        },
        removeControl: function (t) {
            return t.remove(), this
        },
        _initControlPos: function () {
            var t = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = se("div", e + "control-container", this._container);

            function i(i, o) {
                var r = e + i + " " + e + o;
                t[i + o] = se("div", r, n)
            }
            i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right")
        },
        _clearControlPos: function () {
            for (var t in this._controlCorners) ae(this._controlCorners[t]);
            ae(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Xe = Je.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function (t, e, n, i) {
                return n < i ? -1 : i < n ? 1 : 0
            }
        },
        initialize: function (t, e, n) {
            for (var i in p(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[i], i);
            for (i in e) this._addLayer(e[i], i, !0)
        },
        onAdd: function (t) {
            this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function (t) {
            return Je.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
        },
        onRemove: function () {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function (t, e) {
            return this._addLayer(t, e), this._map ? this._update() : this
        },
        addOverlay: function (t, e) {
            return this._addLayer(t, e, !0), this._map ? this._update() : this
        },
        removeLayer: function (t) {
            t.off("add remove", this._onLayerChange, this);
            var e = this._getLayer(a(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
        },
        expand: function () {
            fe(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (fe(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : de(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
        },
        collapse: function () {
            return de(this._container, "leaflet-control-layers-expanded"), this
        },
        _initLayout: function () {
            var t = "leaflet-control-layers",
                e = this._container = se("div", t),
                n = this.options.collapsed;
            e.setAttribute("aria-haspopup", !0), Be(e), Oe(e);
            var i = this._section = se("section", t + "-list");
            n && (this._map.on("click", this.collapse, this), rt || Se(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var o = this._layersLink = se("a", t + "-toggle", e);
            o.href = "#", o.title = "Layers", Tt ? (Se(o, "click", Re), Se(o, "click", this.expand, this)) : Se(o, "focus", this.expand, this), n || this.expand(), this._baseLayersList = se("div", t + "-base", i), this._separator = se("div", t + "-separator", i), this._overlaysList = se("div", t + "-overlays", i), e.appendChild(i)
        },
        _getLayer: function (t) {
            for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && a(this._layers[e].layer) === t) return this._layers[e]
        },
        _addLayer: function (t, e, n) {
            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                layer: t,
                name: e,
                overlay: n
            }), this.options.sortLayers && this._layers.sort(r((function (t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
        },
        _update: function () {
            if (!this._container) return this;
            ue(this._baseLayersList), ue(this._overlaysList), this._layerControlInputs = [];
            var t, e, n, i, o = 0;
            for (n = 0; n < this._layers.length; n++) i = this._layers[n], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, o += i.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
        },
        _onLayerChange: function (t) {
            this._handlingClick || this._update();
            var e = this._getLayer(a(t.target)),
                n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            n && this._map.fire(n, e)
        },
        _createRadioElement: function (t, e) {
            var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                i = document.createElement("div");
            return i.innerHTML = n, i.firstChild
        },
        _addItem: function (t) {
            var e, n = document.createElement("label"),
                i = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers_" + a(this), i), this._layerControlInputs.push(e), e.layerId = a(t.layer), Se(e, "click", this._onInputClick, this);
            var o = document.createElement("span");
            o.innerHTML = " " + t.name;
            var r = document.createElement("div");
            return n.appendChild(r), r.appendChild(e), r.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n), this._checkDisabledLayers(), n
        },
        _onInputClick: function () {
            var t, e, n = this._layerControlInputs,
                i = [],
                o = [];
            this._handlingClick = !0;
            for (var r = n.length - 1; 0 <= r; r--) t = n[r], e = this._getLayer(t.layerId).layer, t.checked ? i.push(e) : t.checked || o.push(e);
            for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
            for (r = 0; r < i.length; r++) this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
            this._handlingClick = !1, this._refocusOnMap()
        },
        _checkDisabledLayers: function () {
            for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1; 0 <= o; o--) t = n[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom
        },
        _expandIfNotCollapsed: function () {
            return this._map && !this.options.collapsed && this.expand(), this
        },
        _expand: function () {
            return this.expand()
        },
        _collapse: function () {
            return this.collapse()
        }
    }),
        Qe = Je.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function (t) {
                var e = "leaflet-control-zoom",
                    n = se("div", e + " leaflet-bar"),
                    i = this.options;
                return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
            },
            onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function () {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function () {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function (t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function (t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function (t, e, n, i, o) {
                var r = se("a", n, i);
                return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), Be(r), Se(r, "click", Re), Se(r, "click", o, this), Se(r, "click", this._refocusOnMap, this), r
            },
            _updateDisabled: function () {
                var t = this._map,
                    e = "leaflet-disabled";
                de(this._zoomInButton, e), de(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMinZoom() || fe(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMaxZoom() || fe(this._zoomInButton, e)
            }
        });
    Ke.mergeOptions({
        zoomControl: !0
    }), Ke.addInitHook((function () {
        this.options.zoomControl && (this.zoomControl = new Qe, this.addControl(this.zoomControl))
    }));
    var tn = Je.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function (t) {
            var e = "leaflet-control-scale",
                n = se("div", e),
                i = this.options;
            return this._addScales(i, e + "-line", n), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n
        },
        onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function (t, e, n) {
            t.metric && (this._mScale = se("div", e, n)), t.imperial && (this._iScale = se("div", e, n))
        },
        _update: function () {
            var t = this._map,
                e = t.getSize().y / 2,
                n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(n)
        },
        _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function (t) {
            var e = this._getRoundNum(t),
                n = e < 1e3 ? e + " m" : e / 1e3 + " km";
            this._updateScale(this._mScale, n, e / t)
        },
        _updateImperial: function (t) {
            var e, n, i, o = 3.2808399 * t;
            5280 < o ? (e = o / 5280, n = this._getRoundNum(e), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(o), this._updateScale(this._iScale, i + " ft", i / o))
        },
        _updateScale: function (t, e, n) {
            t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e
        },
        _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                n = t / e;
            return e * (10 <= n ? 10 : 5 <= n ? 5 : 3 <= n ? 3 : 2 <= n ? 2 : 1)
        }
    }),
        en = Je.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function (t) {
                p(this, t), this._attributions = {}
            },
            onAdd: function (t) {
                for (var e in (t.attributionControl = this)._container = se("div", "leaflet-control-attribution"), Be(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function (t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function (t) {
                return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
            },
            removeAttribution: function (t) {
                return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
            },
            _update: function () {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var n = [];
                    this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
                }
            }
        });
    Ke.mergeOptions({
        attributionControl: !0
    }), Ke.addInitHook((function () {
        this.options.attributionControl && (new en).addTo(this)
    })), Je.Layers = Xe, Je.Zoom = Qe, Je.Scale = tn, Je.Attribution = en, Ye.layers = function (t, e, n) {
        return new Xe(t, e, n)
    }, Ye.zoom = function (t) {
        return new Qe(t)
    }, Ye.scale = function (t) {
        return new tn(t)
    }, Ye.attribution = function (t) {
        return new en(t)
    };
    var nn = M.extend({
        initialize: function (t) {
            this._map = t
        },
        enable: function () {
            return this._enabled || (this._enabled = !0, this.addHooks()), this
        },
        disable: function () {
            return this._enabled && (this._enabled = !1, this.removeHooks()), this
        },
        enabled: function () {
            return !!this._enabled
        }
    });
    nn.addTo = function (t, e) {
        return t.addHandler(e, this), this
    };
    var on, rn = {
        Events: E
    },
        sn = Tt ? "touchstart mousedown" : "mousedown",
        an = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        un = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        ln = I.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function (t, e, n, i) {
                p(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n
            },
            enable: function () {
                this._enabled || (Se(this._dragStartTarget, sn, this._onDown, this), this._enabled = !0)
            },
            disable: function () {
                this._enabled && (ln._dragging === this && this.finishDrag(), Ee(this._dragStartTarget, sn, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !ce(this._element, "leaflet-zoom-anim") && !(ln._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((ln._dragging = this)._preventOutline && Pe(this._element), be(), Yt(), this._moving)))) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t,
                        n = ze(this._element);
                    this._startPoint = new A(e.clientX, e.clientY), this._parentScale = Ce(n), Se(document, un[t.type], this._onMove, this), Se(document, an[t.type], this._onUp, this)
                }
            },
            _onMove: function (t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && 1 < t.touches.length) this._moved = !0;
                    else {
                        var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            n = new A(e.clientX, e.clientY)._subtract(this._startPoint);
                        (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, Ze(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = we(this._element).subtract(n), fe(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), fe(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, k(this._animRequest), this._lastEvent = t, this._animRequest = C(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function () {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), ye(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function () {
                for (var t in de(document.body, "leaflet-dragging"), this._lastTarget && (de(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), un) Ee(document, un[t], this._onMove, this), Ee(document, an[t], this._onUp, this);
                Le(), Jt(), this._moved && this._moving && (k(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, ln._dragging = !1
            }
        });

    function hn(t, e) {
        if (!e || !t.length) return t.slice();
        var n = e * e;
        return function (t, e) {
            var n = t.length,
                i = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
            i[0] = i[n - 1] = 1,
                function t(e, n, i, o, r) {
                    var s, a, u, l = 0;
                    for (a = o + 1; a <= r - 1; a++) l < (u = _n(e[a], e[o], e[r], !0)) && (s = a, l = u);
                    i < l && (n[s] = 1, t(e, n, i, o, s), t(e, n, i, s, r))
                }(t, i, e, 0, n - 1);
            var o, r = [];
            for (o = 0; o < n; o++) i[o] && r.push(t[o]);
            return r
        }(t = function (t, e) {
            for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++) s = t[i], e < (u = (a = t[o]).x - s.x) * u + (l = a.y - s.y) * l && (n.push(t[i]), o = i);
            var s, a, u, l;
            return o < r - 1 && n.push(t[r - 1]), n
        }(t, n), n)
    }

    function cn(t, e, n) {
        return Math.sqrt(_n(t, e, n, !0))
    }

    function fn(t, e, n, i, o) {
        var r, s, a, u = i ? on : pn(t, n),
            l = pn(e, n);
        for (on = l; ;) {
            if (!(u | l)) return [t, e];
            if (u & l) return !1;
            a = pn(s = dn(t, e, r = u || l, n, o), n), r === u ? (t = s, u = a) : (e = s, l = a)
        }
    }

    function dn(t, e, n, i, o) {
        var r, s, a = e.x - t.x,
            u = e.y - t.y,
            l = i.min,
            h = i.max;
        return 8 & n ? (r = t.x + a * (h.y - t.y) / u, s = h.y) : 4 & n ? (r = t.x + a * (l.y - t.y) / u, s = l.y) : 2 & n ? (r = h.x, s = t.y + u * (h.x - t.x) / a) : 1 & n && (r = l.x, s = t.y + u * (l.x - t.x) / a), new A(r, s, o)
    }

    function pn(t, e) {
        var n = 0;
        return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
    }

    function _n(t, e, n, i) {
        var o, r = e.x,
            s = e.y,
            a = n.x - r,
            u = n.y - s,
            l = a * a + u * u;
        return 0 < l && (1 < (o = ((t.x - r) * a + (t.y - s) * u) / l) ? (r = n.x, s = n.y) : 0 < o && (r += a * o, s += u * o)), a = t.x - r, u = t.y - s, i ? a * a + u * u : new A(r, s)
    }

    function mn(t) {
        return !v(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function gn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), mn(t)
    }
    var vn = (Object.freeze || Object)({
        simplify: hn,
        pointToSegmentDistance: cn,
        closestPointOnSegment: function (t, e, n) {
            return _n(t, e, n)
        },
        clipSegment: fn,
        _getEdgeIntersection: dn,
        _getBitCode: pn,
        _sqClosestPointOnSegment: _n,
        isFlat: mn,
        _flat: gn
    });

    function yn(t, e, n) {
        var i, o, r, s, a, u, l, h, c, f = [1, 4, 2, 8];
        for (o = 0, l = t.length; o < l; o++) t[o]._code = pn(t[o], e);
        for (s = 0; s < 4; s++) {
            for (h = f[s], i = [], o = 0, r = (l = t.length) - 1; o < l; r = o++) a = t[o], u = t[r], a._code & h ? u._code & h || ((c = dn(u, a, h, e, n))._code = pn(c, e), i.push(c)) : (u._code & h && ((c = dn(u, a, h, e, n))._code = pn(c, e), i.push(c)), i.push(a));
            t = i
        }
        return t
    }
    var wn, xn = (Object.freeze || Object)({
        clipPolygon: yn
    }),
        bn = {
            project: function (t) {
                return new A(t.lng, t.lat)
            },
            unproject: function (t) {
                return new D(t.y, t.x)
            },
            bounds: new B([-180, -90], [180, 90])
        },
        Ln = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new B([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function (t) {
                var e = Math.PI / 180,
                    n = this.R,
                    i = t.lat * e,
                    o = this.R_MINOR / n,
                    r = Math.sqrt(1 - o * o),
                    s = r * Math.sin(i),
                    a = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - s) / (1 + s), r / 2);
                return i = -n * Math.log(Math.max(a, 1e-10)), new A(t.lng * e * n, i)
            },
            unproject: function (t) {
                for (var e, n = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, r = Math.sqrt(1 - o * o), s = Math.exp(-t.y / i), a = Math.PI / 2 - 2 * Math.atan(s), u = 0, l = .1; u < 15 && 1e-7 < Math.abs(l); u++) e = r * Math.sin(a), e = Math.pow((1 - e) / (1 + e), r / 2), a += l = Math.PI / 2 - 2 * Math.atan(s * e) - a;
                return new D(a * n, t.x * n / i)
            }
        },
        Pn = (Object.freeze || Object)({
            LonLat: bn,
            Mercator: Ln,
            SphericalMercator: V
        }),
        Tn = n({}, U, {
            code: "EPSG:3395",
            projection: Ln,
            transformation: (wn = .5 / (Math.PI * Ln.R), G(wn, .5, -wn, .5))
        }),
        zn = n({}, U, {
            code: "EPSG:4326",
            projection: bn,
            transformation: G(1 / 180, 1, -1 / 180, .5)
        }),
        Cn = n({}, H, {
            projection: bn,
            transformation: G(1, 0, -1, 0),
            scale: function (t) {
                return Math.pow(2, t)
            },
            zoom: function (t) {
                return Math.log(t) / Math.LN2
            },
            distance: function (t, e) {
                var n = e.lng - t.lng,
                    i = e.lat - t.lat;
                return Math.sqrt(n * n + i * i)
            },
            infinite: !0
        });
    H.Earth = U, H.EPSG3395 = Tn, H.EPSG3857 = Y, H.EPSG900913 = J, H.EPSG4326 = zn, H.Simple = Cn;
    var kn = I.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        remove: function () {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
            return t && t.removeLayer(this), this
        },
        getPane: function (t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
            return this._map._targets[a(t)] = this
        },
        removeInteractiveTarget: function (t) {
            return delete this._map._targets[a(t)], this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _layerAdd: function (t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var n = this.getEvents();
                    e.on(n, this), this.once("remove", (function () {
                        e.off(n, this)
                    }), this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    Ke.include({
        addLayer: function (t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = a(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
        },
        removeLayer: function (t) {
            var e = a(t);
            return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null), this
        },
        hasLayer: function (t) {
            return !!t && a(t) in this._layers
        },
        eachLayer: function (t, e) {
            for (var n in this._layers) t.call(e, this._layers[n]);
            return this
        },
        _addLayers: function (t) {
            for (var e = 0, n = (t = t ? v(t) ? t : [t] : []).length; e < n; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function (t) {
            var e = a(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function () {
            var t = 1 / 0,
                e = -1 / 0,
                n = this._getZoomSpan();
            for (var i in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[i].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Sn = kn.extend({
        initialize: function (t, e) {
            var n, i;
            if (p(this, e), this._layers = {}, t)
                for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n])
        },
        addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        },
        removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        },
        hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
        },
        clearLayers: function () {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function (t) {
            var e, n, i = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers) (n = this._layers[e])[t] && n[t].apply(n, i);
            return this
        },
        onAdd: function (t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function (t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function (t, e) {
            for (var n in this._layers) t.call(e, this._layers[n]);
            return this
        },
        getLayer: function (t) {
            return this._layers[t]
        },
        getLayers: function () {
            var t = [];
            return this.eachLayer(t.push, t), t
        },
        setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function (t) {
            return a(t)
        }
    }),
        Mn = Sn.extend({
            addLayer: function (t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Sn.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function (t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Sn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function (t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function () {
                return this.invoke("bringToFront")
            },
            bringToBack: function () {
                return this.invoke("bringToBack")
            },
            getBounds: function () {
                var t = new R;
                for (var e in this._layers) {
                    var n = this._layers[e];
                    t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
                }
                return t
            }
        }),
        En = M.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function (t) {
                p(this, t)
            },
            createIcon: function (t) {
                return this._createIcon("icon", t)
            },
            createShadow: function (t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function (t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(i, t), i
            },
            _setIconStyles: function (t, e) {
                var n = this.options,
                    i = n[e + "Size"];
                "number" == typeof i && (i = [i, i]);
                var o = O(i),
                    r = O("shadow" === e && n.shadowAnchor || n.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (n.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function (t, e) {
                return (e = e || document.createElement("img")).src = t, e
            },
            _getIconUrl: function (t) {
                return kt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        In = En.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function (t) {
                return In.imagePath || (In.imagePath = this._detectIconPath()), (this.options.imagePath || In.imagePath) + En.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function () {
                var t = se("div", "leaflet-default-icon-path", document.body),
                    e = re(t, "background-image") || re(t, "backgroundImage");
                return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        An = nn.extend({
            initialize: function (t) {
                this._marker = t
            },
            addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new ln(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), fe(t, "leaflet-marker-draggable")
            },
            removeHooks: function () {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && de(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function () {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function (t) {
                var e = this._marker,
                    n = e._map,
                    i = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    r = we(e._icon),
                    s = n.getPixelBounds(),
                    a = n.getPixelOrigin(),
                    u = Z(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
                if (!u.contains(r)) {
                    var l = O((Math.max(u.max.x, r.x) - u.max.x) / (s.max.x - u.max.x) - (Math.min(u.min.x, r.x) - u.min.x) / (s.min.x - u.min.x), (Math.max(u.max.y, r.y) - u.max.y) / (s.max.y - u.max.y) - (Math.min(u.min.y, r.y) - u.min.y) / (s.min.y - u.min.y)).multiplyBy(i);
                    n.panBy(l, {
                        animate: !1
                    }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), ye(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = C(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function () {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function (t) {
                this._marker.options.autoPan && (k(this._panRequest), this._panRequest = C(this._adjustPan.bind(this, t)))
            },
            _onDrag: function (t) {
                var e = this._marker,
                    n = e._shadow,
                    i = we(e._icon),
                    o = e._map.layerPointToLatLng(i);
                n && ye(n, i), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function (t) {
                k(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        jn = kn.extend({
            options: {
                icon: new In,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function (t, e) {
                p(this, e), this._latlng = W(t)
            },
            onAdd: function (t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function (t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function () {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function () {
                return this._latlng
            },
            setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = W(t), this.update(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function (t) {
                return this.options.zIndexOffset = t, this.update()
            },
            getIcon: function () {
                return this.options.icon
            },
            setIcon: function (t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function () {
                return this._icon
            },
            update: function () {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function () {
                var t = this.options,
                    e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    n = t.icon.createIcon(this._icon),
                    i = !1;
                n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), fe(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    r = !1;
                o !== this._shadow && (this._removeShadow(), r = !0), o && (fe(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane(t.shadowPane).appendChild(this._shadow)
            },
            _removeIcon: function () {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), ae(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function () {
                this._shadow && ae(this._shadow), this._shadow = null
            },
            _setPos: function (t) {
                this._icon && ye(this._icon, t), this._shadow && ye(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t)
            },
            _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function () {
                if (this.options.interactive && (fe(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), An)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new An(this), t && this.dragging.enable()
                }
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && me(this._icon, t), this._shadow && me(this._shadow, t)
            },
            _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function () {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        On = kn.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function (t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function () {
                this._renderer._removePath(this)
            },
            redraw: function () {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function (t) {
                return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && t.hasOwnProperty("weight") && this._updateBounds()), this
            },
            bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function () {
                return this._path
            },
            _reset: function () {
                this._project(), this._update()
            },
            _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        Bn = On.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function (t, e) {
                p(this, e), this._latlng = W(t), this._radius = this.options.radius
            },
            setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = W(t), this.redraw(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            getLatLng: function () {
                return this._latlng
            },
            setRadius: function (t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function () {
                return this._radius
            },
            setStyle: function (t) {
                var e = t && t.radius || this._radius;
                return On.prototype.setStyle.call(this, t), this.setRadius(e), this
            },
            _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function () {
                var t = this._radius,
                    e = this._radiusY || t,
                    n = this._clickTolerance(),
                    i = [t + n, e + n];
                this._pxBounds = new B(this._point.subtract(i), this._point.add(i))
            },
            _update: function () {
                this._map && this._updatePath()
            },
            _updatePath: function () {
                this._renderer._updateCircle(this)
            },
            _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        Zn = Bn.extend({
            initialize: function (t, e, i) {
                if ("number" == typeof e && (e = n({}, i, {
                    radius: e
                })), p(this, e), this._latlng = W(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function (t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function () {
                return this._mRadius
            },
            getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new R(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: On.prototype.setStyle,
            _project: function () {
                var t = this._latlng.lng,
                    e = this._latlng.lat,
                    n = this._map,
                    i = n.options.crs;
                if (i.distance === U.distance) {
                    var o = Math.PI / 180,
                        r = this._mRadius / U.R / o,
                        s = n.project([e + r, t]),
                        a = n.project([e - r, t]),
                        u = s.add(a).divideBy(2),
                        l = n.unproject(u).lat,
                        h = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
                    !isNaN(h) && 0 !== h || (h = r / Math.cos(Math.PI / 180 * e)), this._point = u.subtract(n.getPixelOrigin()), this._radius = isNaN(h) ? 0 : u.x - n.project([l, t - h]).x, this._radiusY = u.y - s.y
                } else {
                    var c = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        }),
        Rn = On.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function (t, e) {
                p(this, e), this._setLatLngs(t)
            },
            getLatLngs: function () {
                return this._latlngs
            },
            setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function () {
                return !this._latlngs.length
            },
            closestLayerPoint: function (t) {
                for (var e, n, i = 1 / 0, o = null, r = _n, s = 0, a = this._parts.length; s < a; s++)
                    for (var u = this._parts[s], l = 1, h = u.length; l < h; l++) {
                        var c = r(t, e = u[l - 1], n = u[l], !0);
                        c < i && (i = c, o = r(t, e, n))
                    }
                return o && (o.distance = Math.sqrt(i)), o
            },
            getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, o, r, s, a = this._rings[0],
                    u = a.length;
                if (!u) return null;
                for (e = t = 0; t < u - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (i = t = 0; t < u - 1; t++)
                    if (o = a[t], r = a[t + 1], e < (i += n = o.distanceTo(r))) return s = (i - e) / n, this._map.layerPointToLatLng([r.x - s * (r.x - o.x), r.y - s * (r.y - o.y)])
            },
            getBounds: function () {
                return this._bounds
            },
            addLatLng: function (t, e) {
                return e = e || this._defaultShape(), t = W(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function (t) {
                this._bounds = new R, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function () {
                return mn(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function (t) {
                for (var e = [], n = mn(t), i = 0, o = t.length; i < o; i++) n ? (e[i] = W(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
                return e
            },
            _project: function () {
                var t = new B;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
            },
            _updateBounds: function () {
                var t = this._clickTolerance(),
                    e = new A(t, t);
                this._pxBounds = new B([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
            },
            _projectLatlngs: function (t, e, n) {
                var i, o, r = t[0] instanceof D,
                    s = t.length;
                if (r) {
                    for (o = [], i = 0; i < s; i++) o[i] = this._map.latLngToLayerPoint(t[i]), n.extend(o[i]);
                    e.push(o)
                } else
                    for (i = 0; i < s; i++) this._projectLatlngs(t[i], e, n)
            },
            _clipPoints: function () {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var e, n, i, o, r, s, a, u = this._parts;
                        for (i = e = 0, o = this._rings.length; e < o; e++)
                            for (n = 0, r = (a = this._rings[e]).length; n < r - 1; n++)(s = fn(a[n], a[n + 1], t, n, !0)) && (u[i] = u[i] || [], u[i].push(s[0]), s[1] === a[n + 1] && n !== r - 2 || (u[i].push(s[1]), i++))
                    }
            },
            _simplifyPoints: function () {
                for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) t[n] = hn(t[n], e)
            },
            _update: function () {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function () {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function (t, e) {
                var n, i, o, r, s, a, u = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (n = 0, r = this._parts.length; n < r; n++)
                    for (i = 0, o = (s = (a = this._parts[n]).length) - 1; i < s; o = i++)
                        if ((e || 0 !== i) && cn(t, a[o], a[i]) <= u) return !0;
                return !1
            }
        });
    Rn._flat = gn;
    var Nn = Rn.extend({
        options: {
            fill: !0
        },
        isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, n, i, o, r, s, a, u, l = this._rings[0],
                h = l.length;
            if (!h) return null;
            for (r = s = a = 0, t = 0, e = h - 1; t < h; e = t++) n = l[t], i = l[e], o = n.y * i.x - i.y * n.x, s += (n.x + i.x) * o, a += (n.y + i.y) * o, r += 3 * o;
            return u = 0 === r ? l[0] : [s / r, a / r], this._map.layerPointToLatLng(u)
        },
        _convertLatLngs: function (t) {
            var e = Rn.prototype._convertLatLngs.call(this, t),
                n = e.length;
            return 2 <= n && e[0] instanceof D && e[0].equals(e[n - 1]) && e.pop(), e
        },
        _setLatLngs: function (t) {
            Rn.prototype._setLatLngs.call(this, t), mn(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function () {
            return mn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        },
        _clipPoints: function () {
            var t = this._renderer._bounds,
                e = this.options.weight,
                n = new A(e, e);
            if (t = new B(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip) this._parts = this._rings;
                else
                    for (var i, o = 0, r = this._rings.length; o < r; o++)(i = yn(this._rings[o], t, !0)).length && this._parts.push(i)
        },
        _updatePath: function () {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function (t) {
            var e, n, i, o, r, s, a, u, l = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (o = 0, a = this._parts.length; o < a; o++)
                for (r = 0, s = (u = (e = this._parts[o]).length) - 1; r < u; s = r++) n = e[r], i = e[s], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (l = !l);
            return l || Rn.prototype._containsPoint.call(this, t, !0)
        }
    }),
        Dn = Mn.extend({
            initialize: function (t, e) {
                p(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function (t) {
                var e, n, i, o = v(t) ? t : t.features;
                if (o) {
                    for (e = 0, n = o.length; e < n; e++)((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                    return this
                }
                var r = this.options;
                if (r.filter && !r.filter(t)) return this;
                var s = Wn(t, r);
                return s ? (s.feature = Gn(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this
            },
            resetStyle: function (t) {
                return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
            },
            setStyle: function (t) {
                return this.eachLayer((function (e) {
                    this._setLayerStyle(e, t)
                }), this)
            },
            _setLayerStyle: function (t, e) {
                t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
            }
        });

    function Wn(t, e) {
        var n, i, o, r, s = "Feature" === t.type ? t.geometry : t,
            a = s ? s.coordinates : null,
            u = [],
            l = e && e.pointToLayer,
            h = e && e.coordsToLatLng || Hn;
        if (!a && !s) return null;
        switch (s.type) {
            case "Point":
                return Fn(l, t, n = h(a), e);
            case "MultiPoint":
                for (o = 0, r = a.length; o < r; o++) n = h(a[o]), u.push(Fn(l, t, n, e));
                return new Mn(u);
            case "LineString":
            case "MultiLineString":
                return i = Un(a, "LineString" === s.type ? 0 : 1, h), new Rn(i, e);
            case "Polygon":
            case "MultiPolygon":
                return i = Un(a, "Polygon" === s.type ? 1 : 2, h), new Nn(i, e);
            case "GeometryCollection":
                for (o = 0, r = s.geometries.length; o < r; o++) {
                    var c = Wn({
                        geometry: s.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, e);
                    c && u.push(c)
                }
                return new Mn(u);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Fn(t, e, n, i) {
        return t ? t(e, n) : new jn(n, i && i.markersInheritOptions && i)
    }

    function Hn(t) {
        return new D(t[1], t[0], t[2])
    }

    function Un(t, e, n) {
        for (var i, o = [], r = 0, s = t.length; r < s; r++) i = e ? Un(t[r], e - 1, n) : (n || Hn)(t[r]), o.push(i);
        return o
    }

    function $n(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [c(t.lng, e), c(t.lat, e), c(t.alt, e)] : [c(t.lng, e), c(t.lat, e)]
    }

    function Vn(t, e, n, i) {
        for (var o = [], r = 0, s = t.length; r < s; r++) o.push(e ? Vn(t[r], e - 1, n, i) : $n(t[r], i));
        return !e && n && o.push(o[0]), o
    }

    function qn(t, e) {
        return t.feature ? n({}, t.feature, {
            geometry: e
        }) : Gn(e)
    }

    function Gn(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    var Kn = {
        toGeoJSON: function (t) {
            return qn(this, {
                type: "Point",
                coordinates: $n(this.getLatLng(), t)
            })
        }
    };

    function Yn(t, e) {
        return new Dn(t, e)
    }
    jn.include(Kn), Zn.include(Kn), Bn.include(Kn), Rn.include({
        toGeoJSON: function (t) {
            var e = !mn(this._latlngs);
            return qn(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: Vn(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }), Nn.include({
        toGeoJSON: function (t) {
            var e = !mn(this._latlngs),
                n = e && !mn(this._latlngs[0]),
                i = Vn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
            return e || (i = [i]), qn(this, {
                type: (n ? "Multi" : "") + "Polygon",
                coordinates: i
            })
        }
    }), Sn.include({
        toMultiPoint: function (t) {
            var e = [];
            return this.eachLayer((function (n) {
                e.push(n.toGeoJSON(t).geometry.coordinates)
            })), qn(this, {
                type: "MultiPoint",
                coordinates: e
            })
        },
        toGeoJSON: function (t) {
            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === e) return this.toMultiPoint(t);
            var n = "GeometryCollection" === e,
                i = [];
            return this.eachLayer((function (e) {
                if (e.toGeoJSON) {
                    var o = e.toGeoJSON(t);
                    if (n) i.push(o.geometry);
                    else {
                        var r = Gn(o);
                        "FeatureCollection" === r.type ? i.push.apply(i, r.features) : i.push(r)
                    }
                }
            })), n ? qn(this, {
                geometries: i,
                type: "GeometryCollection"
            }) : {
                        type: "FeatureCollection",
                        features: i
                    }
        }
    });
    var Jn = Yn,
        Xn = kn.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function (t, e, n) {
                this._url = t, this._bounds = N(e), p(this, n)
            },
            onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (fe(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function () {
                ae(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function () {
                return this._map && le(this._image), this
            },
            bringToBack: function () {
                return this._map && he(this._image), this
            },
            setUrl: function (t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function (t) {
                return this._bounds = N(t), this._map && this._reset(), this
            },
            getEvents: function () {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function () {
                return this._bounds
            },
            getElement: function () {
                return this._image
            },
            _initImage: function () {
                var t = "IMG" === this._url.tagName,
                    e = this._image = t ? this._url : se("img");
                fe(e, "leaflet-image-layer"), this._zoomAnimated && fe(e, "leaflet-zoom-animated"), this.options.className && fe(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onload = r(this.fire, this, "load"), e.onerror = r(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
            },
            _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                    n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                ve(this._image, n, e)
            },
            _reset: function () {
                var t = this._image,
                    e = new B(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    n = e.getSize();
                ye(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
            },
            _updateOpacity: function () {
                me(this._image, this.options.opacity)
            },
            _updateZIndex: function () {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Qn = Xn.extend({
            options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0
            },
            _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                    e = this._image = t ? this._url : se("video");
                if (fe(e, "leaflet-image-layer"), this._zoomAnimated && fe(e, "leaflet-zoom-animated"), this.options.className && fe(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onloadeddata = r(this.fire, this, "load"), t) {
                    for (var n = e.getElementsByTagName("source"), i = [], o = 0; o < n.length; o++) i.push(n[o].src);
                    this._url = 0 < n.length ? i : [e.src]
                } else {
                    v(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && e.style.hasOwnProperty("objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                    for (var s = 0; s < this._url.length; s++) {
                        var a = se("source");
                        a.src = this._url[s], e.appendChild(a)
                    }
                }
            }
        }),
        ti = Xn.extend({
            _initImage: function () {
                var t = this._image = this._url;
                fe(t, "leaflet-image-layer"), this._zoomAnimated && fe(t, "leaflet-zoom-animated"), this.options.className && fe(t, this.options.className), t.onselectstart = h, t.onmousemove = h
            }
        }),
        ei = kn.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function (t, e) {
                p(this, t), this._source = e
            },
            onAdd: function (t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && me(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && me(this._container, 1), this.bringToFront()
            },
            onRemove: function (t) {
                t._fadeAnimated ? (me(this._container, 0), this._removeTimeout = setTimeout(r(ae, void 0, this._container), 200)) : ae(this._container)
            },
            getLatLng: function () {
                return this._latlng
            },
            setLatLng: function (t) {
                return this._latlng = W(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function () {
                return this._content
            },
            setContent: function (t) {
                return this._content = t, this.update(), this
            },
            getElement: function () {
                return this._container
            },
            update: function () {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function () {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function () {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function () {
                return this._map && le(this._container), this
            },
            bringToBack: function () {
                return this._map && he(this._container), this
            },
            _prepareOpen: function (t, e, n) {
                if (e instanceof kn || (n = e, e = t), e instanceof Mn)
                    for (var i in t._layers) {
                        e = t._layers[i];
                        break
                    }
                if (!n)
                    if (e.getCenter) n = e.getCenter();
                    else {
                        if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                        n = e.getLatLng()
                    } return this._source = e, this.update(), n
            },
            _updateContent: function () {
                if (this._content) {
                    var t = this._contentNode,
                        e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof e) t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function () {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = O(this.options.offset),
                        n = this._getAnchor();
                    this._zoomAnimated ? ye(this._container, t.add(n)) : e = e.add(t).add(n);
                    var i = this._containerBottom = -e.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                    this._container.style.bottom = i + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function () {
                return [0, 0]
            }
        }),
        ni = ei.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function (t) {
                return t.openPopup(this), this
            },
            onAdd: function (t) {
                ei.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof On || this._source.on("preclick", je))
            },
            onRemove: function (t) {
                ei.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof On || this._source.off("preclick", je))
            },
            getEvents: function () {
                var t = ei.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function () {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function () {
                var t = "leaflet-popup",
                    e = this._container = se("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    n = this._wrapper = se("div", t + "-content-wrapper", e);
                if (this._contentNode = se("div", t + "-content", n), Be(n), Oe(this._contentNode), Se(n, "contextmenu", je), this._tipContainer = se("div", t + "-tip-container", e), this._tip = se("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var i = this._closeButton = se("a", t + "-close-button", e);
                    i.href = "#close", i.innerHTML = "&#215;", Se(i, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function () {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var n = t.offsetWidth;
                n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
                var i = t.offsetHeight,
                    o = this.options.maxHeight,
                    r = "leaflet-popup-scrolled";
                o && o < i ? (e.height = o + "px", fe(t, r)) : de(t, r), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    n = this._getAnchor();
                ye(this._container, e.add(n))
            },
            _adjustPan: function () {
                if (this.options.autoPan) {
                    this._map._panAnim && this._map._panAnim.stop();
                    var t = this._map,
                        e = parseInt(re(this._container, "marginBottom"), 10) || 0,
                        n = this._container.offsetHeight + e,
                        i = this._containerWidth,
                        o = new A(this._containerLeft, -n - this._containerBottom);
                    o._add(we(this._container));
                    var r = t.layerPointToContainerPoint(o),
                        s = O(this.options.autoPanPadding),
                        a = O(this.options.autoPanPaddingTopLeft || s),
                        u = O(this.options.autoPanPaddingBottomRight || s),
                        l = t.getSize(),
                        h = 0,
                        c = 0;
                    r.x + i + u.x > l.x && (h = r.x + i - l.x + u.x), r.x - h - a.x < 0 && (h = r.x - a.x), r.y + n + u.y > l.y && (c = r.y + n - l.y + u.y), r.y - c - a.y < 0 && (c = r.y - a.y), (h || c) && t.fire("autopanstart").panBy([h, c])
                }
            },
            _onCloseButtonClick: function (t) {
                this._close(), Re(t)
            },
            _getAnchor: function () {
                return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    Ke.mergeOptions({
        closePopupOnClick: !0
    }), Ke.include({
        openPopup: function (t, e, n) {
            return t instanceof ni || (t = new ni(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), kn.include({
        bindPopup: function (t, e) {
            return t instanceof ni ? (p(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new ni(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function (t, e) {
            return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function () {
            return this._popup
        },
        _openPopup: function (t) {
            var e = t.layer || t.target;
            this._popup && this._map && (Re(t), e instanceof On ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var ii = ei.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function (t) {
            ei.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function (t) {
            ei.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function () {
            var t = ei.prototype.getEvents.call(this);
            return Tt && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function () {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function () {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = se("div", t)
        },
        _updateLayout: function () { },
        _adjustPan: function () { },
        _setPosition: function (t) {
            var e = this._map,
                n = this._container,
                i = e.latLngToContainerPoint(e.getCenter()),
                o = e.layerPointToContainerPoint(t),
                r = this.options.direction,
                s = n.offsetWidth,
                a = n.offsetHeight,
                u = O(this.options.offset),
                l = this._getAnchor();
            t = "top" === r ? t.add(O(-s / 2 + u.x, -a + u.y + l.y, !0)) : "bottom" === r ? t.subtract(O(s / 2 - u.x, -u.y, !0)) : "center" === r ? t.subtract(O(s / 2 + u.x, a / 2 - l.y + u.y, !0)) : "right" === r || "auto" === r && o.x < i.x ? (r = "right", t.add(O(u.x + l.x, l.y - a / 2 + u.y, !0))) : (r = "left", t.subtract(O(s + l.x - u.x, a / 2 - l.y - u.y, !0))), de(n, "leaflet-tooltip-right"), de(n, "leaflet-tooltip-left"), de(n, "leaflet-tooltip-top"), de(n, "leaflet-tooltip-bottom"), fe(n, "leaflet-tooltip-" + r), ye(n, t)
        },
        _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function (t) {
            this.options.opacity = t, this._container && me(this._container, t)
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e)
        },
        _getAnchor: function () {
            return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    Ke.include({
        openTooltip: function (t, e, n) {
            return t instanceof ii || (t = new ii(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function (t) {
            return t && this.removeLayer(t), this
        }
    }), kn.include({
        bindTooltip: function (t, e) {
            return t instanceof ii ? (p(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new ii(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                    n = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), Tt && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function (t, e) {
            return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (fe(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function () {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function () {
            return this._tooltip
        },
        _openTooltip: function (t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function (t) {
            var e, n, i = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i)
        }
    });
    var oi = En.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function (t) {
            var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options;
            if (n.html instanceof Element ? (ue(e), e.appendChild(n.html)) : e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
                var i = O(n.bgPos);
                e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
            }
            return this._setIconStyles(e, "icon"), e
        },
        createShadow: function () {
            return null
        }
    });
    En.Default = In;
    var ri = kn.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: wt,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function (t) {
            p(this, t)
        },
        onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
        },
        beforeAdd: function (t) {
            t._addZoomLimit(this)
        },
        onRemove: function (t) {
            this._removeAllTiles(), ae(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
        },
        bringToFront: function () {
            return this._map && (le(this._container), this._setAutoZIndex(Math.max)), this
        },
        bringToBack: function () {
            return this._map && (he(this._container), this._setAutoZIndex(Math.min)), this
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        isLoading: function () {
            return this._loading
        },
        redraw: function () {
            return this._map && (this._removeAllTiles(), this._update()), this
        },
        getEvents: function () {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = u(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        createTile: function () {
            return document.createElement("div")
        },
        getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof A ? t : new A(t, t)
        },
        _updateZIndex: function () {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (t) {
            for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, r = n.length; o < r; o++) e = n[o].style.zIndex, n[o] !== this._container && e && (i = t(i, +e));
            isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
        },
        _updateOpacity: function () {
            if (this._map && !nt) {
                me(this._container, this.options.opacity);
                var t = +new Date,
                    e = !1,
                    n = !1;
                for (var i in this._tiles) {
                    var o = this._tiles[i];
                    if (o.current && o.loaded) {
                        var r = Math.min(1, (t - o.loaded) / 200);
                        me(o.el, r), r < 1 ? e = !0 : (o.active ? n = !0 : this._onOpaqueTile(o), o.active = !0)
                    }
                }
                n && !this._noPrune && this._pruneTiles(), e && (k(this._fadeFrame), this._fadeFrame = C(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: h,
        _initContainer: function () {
            this._container || (this._container = se("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
        },
        _updateLevels: function () {
            var t = this._tileZoom,
                e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var n in this._levels) this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (ae(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
                var i = this._levels[t],
                    o = this._map;
                return i || ((i = this._levels[t] = {}).el = se("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, o.getCenter(), o.getZoom()), i.el.offsetWidth, this._onCreateLevel(i)), this._level = i
            }
        },
        _onUpdateLevel: h,
        _onRemoveLevel: h,
        _onCreateLevel: h,
        _pruneTiles: function () {
            if (this._map) {
                var t, e, n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                else {
                    for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles)
                        if ((e = this._tiles[t]).current && !e.active) {
                            var i = e.coords;
                            this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
                        } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function (t) {
            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t)
        },
        _invalidateAll: function () {
            for (var t in this._levels) ae(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
            this._removeAllTiles(), this._tileZoom = void 0
        },
        _retainParent: function (t, e, n, i) {
            var o = Math.floor(t / 2),
                r = Math.floor(e / 2),
                s = n - 1,
                a = new A(+o, +r);
            a.z = +s;
            var u = this._tileCoordsToKey(a),
                l = this._tiles[u];
            return l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i < s && this._retainParent(o, r, s, i))
        },
        _retainChildren: function (t, e, n, i) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var r = 2 * e; r < 2 * e + 2; r++) {
                    var s = new A(o, r);
                    s.z = n + 1;
                    var a = this._tileCoordsToKey(s),
                        u = this._tiles[a];
                    u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), n + 1 < i && this._retainChildren(o, r, n + 1, i))
                }
        },
        _resetView: function (t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
        },
        _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function (t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
        },
        _setView: function (t, e, n, i) {
            var o = this._clampZoom(Math.round(e));
            (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
            var r = this.options.updateWhenZooming && o !== this._tileZoom;
            i && !r || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e)
        },
        _setZoomTransforms: function (t, e) {
            for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e)
        },
        _setZoomTransform: function (t, e, n) {
            var i = this._map.getZoomScale(n, t.zoom),
                o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
            yt ? ve(t.el, o, i) : ye(t.el, o)
        },
        _resetGrid: function () {
            var t = this._map,
                e = t.options.crs,
                n = this._tileSize = this.getTileSize(),
                i = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
        },
        _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function (t) {
            var e = this._map,
                n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                i = e.getZoomScale(n, this._tileZoom),
                o = e.project(t, this._tileZoom).floor(),
                r = e.getSize().divideBy(2 * i);
            return new B(o.subtract(r), o.add(r))
        },
        _update: function (t) {
            var e = this._map;
            if (e) {
                var n = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                    var i = this._getTiledPixelBounds(t),
                        o = this._pxBoundsToTileRange(i),
                        r = o.getCenter(),
                        s = [],
                        a = this.options.keepBuffer,
                        u = new B(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var l in this._tiles) {
                        var h = this._tiles[l].coords;
                        h.z === this._tileZoom && u.contains(new A(h.x, h.y)) || (this._tiles[l].current = !1)
                    }
                    if (1 < Math.abs(n - this._tileZoom)) this._setView(t, n);
                    else {
                        for (var c = o.min.y; c <= o.max.y; c++)
                            for (var f = o.min.x; f <= o.max.x; f++) {
                                var d = new A(f, c);
                                if (d.z = this._tileZoom, this._isValidTile(d)) {
                                    var p = this._tiles[this._tileCoordsToKey(d)];
                                    p ? p.current = !0 : s.push(d)
                                }
                            }
                        if (s.sort((function (t, e) {
                            return t.distanceTo(r) - e.distanceTo(r)
                        })), 0 !== s.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var _ = document.createDocumentFragment();
                            for (f = 0; f < s.length; f++) this._addTile(s[f], _);
                            this._level.el.appendChild(_)
                        }
                    }
                }
            }
        },
        _isValidTile: function (t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var n = this._globalTileRange;
                if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
            }
            if (!this.options.bounds) return !0;
            var i = this._tileCoordsToBounds(t);
            return N(this.options.bounds).overlaps(i)
        },
        _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function (t) {
            var e = this._map,
                n = this.getTileSize(),
                i = t.scaleBy(n),
                o = i.add(n);
            return [e.unproject(i, t.z), e.unproject(o, t.z)]
        },
        _tileCoordsToBounds: function (t) {
            var e = this._tileCoordsToNwSe(t),
                n = new R(e[0], e[1]);
            return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
        },
        _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function (t) {
            var e = t.split(":"),
                n = new A(+e[0], +e[1]);
            return n.z = +e[2], n
        },
        _removeTile: function (t) {
            var e = this._tiles[t];
            e && (ae(e.el), delete this._tiles[t], this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function (t) {
            fe(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = h, t.onmousemove = h, nt && this.options.opacity < 1 && me(t, this.options.opacity), rt && !st && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function (t, e) {
            var n = this._getTilePos(t),
                i = this._tileCoordsToKey(t),
                o = this.createTile(this._wrapCoords(t), r(this._tileReady, this, t));
            this._initTile(o), this.createTile.length < 2 && C(r(this._tileReady, this, t, null, o)), ye(o, n), this._tiles[i] = {
                el: o,
                coords: t,
                current: !0
            }, e.appendChild(o), this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function (t, e, n) {
            e && this.fire("tileerror", {
                error: e,
                tile: n,
                coords: t
            });
            var i = this._tileCoordsToKey(t);
            (n = this._tiles[i]) && (n.loaded = +new Date, this._map._fadeAnimated ? (me(n.el, 0), k(this._fadeFrame), this._fadeFrame = C(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (fe(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                tile: n.el,
                coords: t
            })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), nt || !this._map._fadeAnimated ? C(this._pruneTiles, this) : setTimeout(r(this._pruneTiles, this), 250)))
        },
        _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function (t) {
            var e = new A(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
            return e.z = t.z, e
        },
        _pxBoundsToTileRange: function (t) {
            var e = this.getTileSize();
            return new B(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function () {
            for (var t in this._tiles)
                if (!this._tiles[t].loaded) return !1;
            return !0
        }
    }),
        si = ri.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function (t, e) {
                this._url = t, (e = p(this, e)).detectRetina && kt && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), rt || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function (t, e) {
                return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
            },
            createTile: function (t, e) {
                var n = document.createElement("img");
                return Se(n, "load", r(this._tileOnLoad, this, e, n)), Se(n, "error", r(this._tileOnError, this, e, n)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
            },
            getTileUrl: function (t) {
                var e = {
                    r: kt ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = i), e["-y"] = i
                }
                return g(this._url, n(e, this.options))
            },
            _tileOnLoad: function (t, e) {
                nt ? setTimeout(r(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function (t, e, n) {
                var i = this.options.errorTileUrl;
                i && e.getAttribute("src") !== i && (e.src = i), t(n, e)
            },
            _onTileRemove: function (t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function () {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
            },
            _getSubdomain: function (t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function () {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h, e.onerror = h, e.complete || (e.src = w, ae(e), delete this._tiles[t]))
            },
            _removeTile: function (t) {
                var e = this._tiles[t];
                if (e) return ut || e.el.setAttribute("src", w), ri.prototype._removeTile.call(this, t)
            },
            _tileReady: function (t, e, n) {
                if (this._map && (!n || n.getAttribute("src") !== w)) return ri.prototype._tileReady.call(this, t, e, n)
            }
        });

    function ai(t, e) {
        return new si(t, e)
    }
    var ui = si.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function (t, e) {
            this._url = t;
            var i = n({}, this.defaultWmsParams);
            for (var o in e) o in this.options || (i[o] = e[o]);
            var r = (e = p(this, e)).detectRetina && kt ? 2 : 1,
                s = this.getTileSize();
            i.width = s.x * r, i.height = s.y * r, this.wmsParams = i
        },
        onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, si.prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t) {
            var e = this._tileCoordsToNwSe(t),
                n = this._crs,
                i = Z(n.project(e[0]), n.project(e[1])),
                o = i.min,
                r = i.max,
                s = (1.3 <= this._wmsVersion && this._crs === zn ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","),
                a = si.prototype.getTileUrl.call(this, t);
            return a + _(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
        },
        setParams: function (t, e) {
            return n(this.wmsParams, t), e || this.redraw(), this
        }
    });
    si.WMS = ui, ai.wms = function (t, e) {
        return new ui(t, e)
    };
    var li = kn.extend({
        options: {
            padding: .1,
            tolerance: 0
        },
        initialize: function (t) {
            p(this, t), a(this), this._layers = this._layers || {}
        },
        onAdd: function () {
            this._container || (this._initContainer(), this._zoomAnimated && fe(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
        },
        onRemove: function () {
            this.off("update", this._updatePaths, this), this._destroyContainer()
        },
        getEvents: function () {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
        },
        _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function (t, e) {
            var n = this._map.getZoomScale(e, this._zoom),
                i = we(this._container),
                o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                r = this._map.project(this._center, e),
                s = this._map.project(t, e).subtract(r),
                a = o.multiplyBy(-n).add(i).add(o).subtract(s);
            yt ? ve(this._container, a, n) : ye(this._container, a)
        },
        _reset: function () {
            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
        },
        _onZoomEnd: function () {
            for (var t in this._layers) this._layers[t]._project()
        },
        _updatePaths: function () {
            for (var t in this._layers) this._layers[t]._update()
        },
        _update: function () {
            var t = this.options.padding,
                e = this._map.getSize(),
                n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new B(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
        }
    }),
        hi = li.extend({
            getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function () {
                this._postponeUpdatePaths = !0
            },
            onAdd: function () {
                li.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function () {
                var t = this._container = document.createElement("canvas");
                Se(t, "mousemove", this._onMouseMove, this), Se(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Se(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function () {
                k(this._redrawRequest), delete this._ctx, ae(this._container), Ee(this._container), delete this._container
            },
            _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    li.prototype._update.call(this);
                    var t = this._bounds,
                        e = this._container,
                        n = t.getSize(),
                        i = kt ? 2 : 1;
                    ye(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", kt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function () {
                li.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function (t) {
                this._updateDashArray(t);
                var e = (this._layers[a(t)] = t)._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function (t) {
                this._requestRedraw(t)
            },
            _removePath: function (t) {
                var e = t._order,
                    n = e.next,
                    i = e.prev;
                n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[a(t)], this._requestRedraw(t)
            },
            _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                    var e, n, i = t.options.dashArray.split(/[, ]+/),
                        o = [];
                    for (n = 0; n < i.length; n++) {
                        if (e = Number(i[n]), isNaN(e)) return;
                        o.push(e)
                    }
                    t.options._dashArray = o
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function (t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || C(this._redraw, this))
            },
            _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                    var e = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new B, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
            },
            _redraw: function () {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                    var e = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function () {
                var t, e = this._redrawBounds;
                if (this._ctx.save(), e) {
                    var n = e.getSize();
                    this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var i = this._drawFirst; i; i = i.next) t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function (t, e) {
                if (this._drawing) {
                    var n, i, o, r, s = t._parts,
                        a = s.length,
                        u = this._ctx;
                    if (a) {
                        for (u.beginPath(), n = 0; n < a; n++) {
                            for (i = 0, o = s[n].length; i < o; i++) r = s[n][i], u[i ? "lineTo" : "moveTo"](r.x, r.y);
                            e && u.closePath()
                        }
                        this._fillStroke(u, t)
                    }
                }
            },
            _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                    var e = t._point,
                        n = this._ctx,
                        i = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                    1 != o && (n.save(), n.scale(1, o)), n.beginPath(), n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1), 1 != o && n.restore(), this._fillStroke(n, t)
                }
            },
            _fillStroke: function (t, e) {
                var n = e.options;
                n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
            },
            _onClick: function (t) {
                for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                n && (Ue(t), this._fireEvent([n], t))
            },
            _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var e = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, e)
                }
            },
            _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e && (de(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
            },
            _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                    for (var n, i, o = this._drawFirst; o; o = o.next)(n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
                    i !== this._hoveredLayer && (this._handleMouseOut(t), i && (fe(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(L.bind((function () {
                        this._mouseHoverThrottled = !1
                    }), this), 32)
                }
            },
            _fireEvent: function (t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t)
            },
            _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                    var n = e.next,
                        i = e.prev;
                    n && ((n.prev = i) ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, (this._drawLast.next = e).next = null, this._drawLast = e, this._requestRedraw(t))
                }
            },
            _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                    var n = e.next,
                        i = e.prev;
                    i && ((i.next = n) ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                }
            }
        });

    function ci(t) {
        return Mt ? new hi(t) : null
    }
    var fi = function () {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function (t) {
                    return document.createElement("<lvml:" + t + ' class="lvml">')
                }
        } catch (t) {
            return function (t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }(),
        di = {
            _initContainer: function () {
                this._container = se("div", "leaflet-vml-container")
            },
            _update: function () {
                this._map._animatingZoom || (li.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function (t) {
                var e = t._container = fi("shape");
                fe(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = fi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[a(t)] = t
            },
            _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function (t) {
                var e = t._container;
                ae(e), t.removeInteractiveTarget(e), delete this._layers[a(t)]
            },
            _updateStyle: function (t) {
                var e = t._stroke,
                    n = t._fill,
                    i = t.options,
                    o = t._container;
                o.stroked = !!i.stroke, o.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = fi("stroke")), o.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, i.dashArray ? e.dashStyle = v(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (o.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = fi("fill")), o.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (o.removeChild(n), t._fill = null)
            },
            _updateCircle: function (t) {
                var e = t._point.round(),
                    n = Math.round(t._radius),
                    i = Math.round(t._radiusY || n);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
            },
            _setPath: function (t, e) {
                t._path.v = e
            },
            _bringToFront: function (t) {
                le(t._container)
            },
            _bringToBack: function (t) {
                he(t._container)
            }
        },
        pi = It ? fi : X,
        _i = li.extend({
            getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function () {
                this._container = pi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pi("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function () {
                ae(this._container), Ee(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function () {
                this._update()
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    li.prototype._update.call(this);
                    var t = this._bounds,
                        e = t.getSize(),
                        n = this._container;
                    this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), ye(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function (t) {
                var e = t._path = pi("path");
                t.options.className && fe(e, t.options.className), t.options.interactive && fe(e, "leaflet-interactive"), this._updateStyle(t), this._layers[a(t)] = t
            },
            _addPath: function (t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function (t) {
                ae(t._path), t.removeInteractiveTarget(t._path), delete this._layers[a(t)]
            },
            _updatePath: function (t) {
                t._project(), t._update()
            },
            _updateStyle: function (t) {
                var e = t._path,
                    n = t.options;
                e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function (t, e) {
                this._setPath(t, Q(t._parts, e))
            },
            _updateCircle: function (t) {
                var e = t._point,
                    n = Math.max(Math.round(t._radius), 1),
                    i = "a" + n + "," + (Math.max(Math.round(t._radiusY), 1) || n) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + i + 2 * n + ",0 " + i + 2 * -n + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function (t, e) {
                t._path.setAttribute("d", e)
            },
            _bringToFront: function (t) {
                le(t._path)
            },
            _bringToBack: function (t) {
                he(t._path)
            }
        });

    function mi(t) {
        return Et || It ? new _i(t) : null
    }
    It && _i.include(di), Ke.include({
        getRenderer: function (t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
        },
        _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = e), e
        },
        _createRenderer: function (t) {
            return this.options.preferCanvas && ci(t) || mi(t)
        }
    });
    var gi = Nn.extend({
        initialize: function (t, e) {
            Nn.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
            return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    _i.create = pi, _i.pointsToPath = Q, Dn.geometryToLayer = Wn, Dn.coordsToLatLng = Hn, Dn.coordsToLatLngs = Un, Dn.latLngToCoords = $n, Dn.latLngsToCoords = Vn, Dn.getFeature = qn, Dn.asFeature = Gn, Ke.mergeOptions({
        boxZoom: !0
    });
    var vi = nn.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function () {
            Se(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
            Ee(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function () {
            return this._moved
        },
        _destroy: function () {
            ae(this._pane), delete this._pane
        },
        _resetState: function () {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function (t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), Yt(), be(), this._startPoint = this._map.mouseEventToContainerPoint(t), Se(document, {
                contextmenu: Re,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = se("div", "leaflet-zoom-box", this._container), fe(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new B(this._point, this._startPoint),
                n = e.getSize();
            ye(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px"
        },
        _finish: function () {
            this._moved && (ae(this._box), de(this._container, "leaflet-crosshair")), Jt(), Le(), Ee(document, {
                contextmenu: Re,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(r(this._resetState, this), 0);
                var e = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                    boxZoomBounds: e
                })
            }
        },
        _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ke.addInitHook("addHandler", "boxZoom", vi), Ke.mergeOptions({
        doubleClickZoom: !0
    });
    var yi = nn.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
            var e = this._map,
                n = e.getZoom(),
                i = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? n - i : n + i;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    Ke.addInitHook("addHandler", "doubleClickZoom", yi), Ke.mergeOptions({
        dragging: !0,
        inertia: !st,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var wi = nn.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new ln(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            fe(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function () {
            de(this._map._container, "leaflet-grab"), de(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        moving: function () {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function () {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = N(this._map.options.maxBounds);
                this._offsetLimit = Z(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function (t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(n), this._times.push(e), this._prunePositions(e)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function (t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function (t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function () {
            var t = this._worldWidth,
                e = Math.round(t / 2),
                n = this._initialWorldOffset,
                i = this._draggable._newPos.x,
                o = (i - e + n) % t + e - n,
                r = (i + e + n) % t - e - n,
                s = Math.abs(o + n) < Math.abs(r + n) ? o : r;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = s
        },
        _onDragEnd: function (t) {
            var e = this._map,
                n = e.options,
                i = !n.inertia || this._times.length < 2;
            if (e.fire("dragend", t), i) e.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    r = (this._lastTime - this._times[0]) / 1e3,
                    s = n.easeLinearity,
                    a = o.multiplyBy(s / r),
                    u = a.distanceTo([0, 0]),
                    l = Math.min(n.inertiaMaxSpeed, u),
                    h = a.multiplyBy(l / u),
                    c = l / (n.inertiaDeceleration * s),
                    f = h.multiplyBy(-c / 2).round();
                f.x || f.y ? (f = e._limitOffset(f, e.options.maxBounds), C((function () {
                    e.panBy(f, {
                        duration: c,
                        easeLinearity: s,
                        noMoveStart: !0,
                        animate: !0
                    })
                }))) : e.fire("moveend")
            }
        }
    });
    Ke.addInitHook("addHandler", "dragging", wi), Ke.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var xi = nn.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), Se(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function () {
            this._removeHooks(), Ee(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function () {
            if (!this._focused) {
                var t = document.body,
                    e = document.documentElement,
                    n = t.scrollTop || e.scrollTop,
                    i = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(i, n)
            }
        },
        _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function (t) {
            var e, n, i = this._panKeys = {},
                o = this.keyCodes;
            for (e = 0, n = o.left.length; e < n; e++) i[o.left[e]] = [-1 * t, 0];
            for (e = 0, n = o.right.length; e < n; e++) i[o.right[e]] = [t, 0];
            for (e = 0, n = o.down.length; e < n; e++) i[o.down[e]] = [0, t];
            for (e = 0, n = o.up.length; e < n; e++) i[o.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function (t) {
            var e, n, i = this._zoomKeys = {},
                o = this.keyCodes;
            for (e = 0, n = o.zoomIn.length; e < n; e++) i[o.zoomIn[e]] = t;
            for (e = 0, n = o.zoomOut.length; e < n; e++) i[o.zoomOut[e]] = -t
        },
        _addHooks: function () {
            Se(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
            Ee(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, n = t.keyCode,
                    i = this._map;
                if (n in this._panKeys) i._panAnim && i._panAnim._inProgress || (e = this._panKeys[n], t.shiftKey && (e = O(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
                else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                else {
                    if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
                    i.closePopup()
                }
                Re(t)
            }
        }
    });
    Ke.addInitHook("addHandler", "keyboard", xi), Ke.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var bi = nn.extend({
        addHooks: function () {
            Se(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function () {
            Ee(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function (t) {
            var e = We(t),
                n = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var i = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(r(this._performZoom, this), i), Re(t)
        },
        _performZoom: function () {
            var t = this._map,
                e = t.getZoom(),
                n = this._map.options.zoomSnap || 0;
            t._stop();
            var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(i)))) / Math.LN2,
                r = n ? Math.ceil(o / n) * n : o,
                s = t._limitZoom(e + (0 < this._delta ? r : -r)) - e;
            this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
        }
    });
    Ke.addInitHook("addHandler", "scrollWheelZoom", bi), Ke.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var Li = nn.extend({
        addHooks: function () {
            Se(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function () {
            Ee(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function (t) {
            if (t.touches) {
                if (Ze(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                    n = e.target;
                this._startPos = this._newPos = new A(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && fe(n, "leaflet-active"), this._holdTimeout = setTimeout(r((function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }), this), 1e3), this._simulateEvent("mousedown", e), Se(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), Ee(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                    n = e.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && de(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
            }
        },
        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new A(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function (t, e) {
            var n = document.createEvent("MouseEvents");
            n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
        }
    });
    Tt && !Pt && Ke.addInitHook("addHandler", "tap", Li), Ke.mergeOptions({
        touchZoom: Tt && !st,
        bounceAtZoomLimits: !0
    });
    var Pi = nn.extend({
        addHooks: function () {
            fe(this._map._container, "leaflet-touch-zoom"), Se(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
            de(this._map._container, "leaflet-touch-zoom"), Ee(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var n = e.mouseEventToContainerPoint(t.touches[0]),
                    i = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Se(document, "touchmove", this._onTouchMove, this), Se(document, "touchend", this._onTouchEnd, this), Ze(t)
            }
        },
        _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                    n = e.mouseEventToContainerPoint(t.touches[0]),
                    i = e.mouseEventToContainerPoint(t.touches[1]),
                    o = n.distanceTo(i) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 == o) return
                } else {
                    var s = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o && 0 === s.x && 0 === s.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), k(this._animRequest);
                var a = r(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = C(a, this, !0), Ze(t)
            }
        },
        _onTouchEnd: function () {
            this._moved && this._zooming ? (this._zooming = !1, k(this._animRequest), Ee(document, "touchmove", this._onTouchMove), Ee(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    Ke.addInitHook("addHandler", "touchZoom", Pi), Ke.BoxZoom = vi, Ke.DoubleClickZoom = yi, Ke.Drag = wi, Ke.Keyboard = xi, Ke.ScrollWheelZoom = bi, Ke.Tap = Li, Ke.TouchZoom = Pi, Object.freeze = e, t.version = "1.6.0+HEAD.0c81bdf", t.Control = Je, t.control = Ye, t.Browser = jt, t.Evented = I, t.Mixin = rn, t.Util = S, t.Class = M, t.Handler = nn, t.extend = n, t.bind = r, t.stamp = a, t.setOptions = p, t.DomEvent = qe, t.DomUtil = ke, t.PosAnimation = Ge, t.Draggable = ln, t.LineUtil = vn, t.PolyUtil = xn, t.Point = A, t.point = O, t.Bounds = B, t.bounds = Z, t.Transformation = q, t.transformation = G, t.Projection = Pn, t.LatLng = D, t.latLng = W, t.LatLngBounds = R, t.latLngBounds = N, t.CRS = H, t.GeoJSON = Dn, t.geoJSON = Yn, t.geoJson = Jn, t.Layer = kn, t.LayerGroup = Sn, t.layerGroup = function (t, e) {
        return new Sn(t, e)
    }, t.FeatureGroup = Mn, t.featureGroup = function (t) {
        return new Mn(t)
    }, t.ImageOverlay = Xn, t.imageOverlay = function (t, e, n) {
        return new Xn(t, e, n)
    }, t.VideoOverlay = Qn, t.videoOverlay = function (t, e, n) {
        return new Qn(t, e, n)
    }, t.SVGOverlay = ti, t.svgOverlay = function (t, e, n) {
        return new ti(t, e, n)
    }, t.DivOverlay = ei, t.Popup = ni, t.popup = function (t, e) {
        return new ni(t, e)
    }, t.Tooltip = ii, t.tooltip = function (t, e) {
        return new ii(t, e)
    }, t.Icon = En, t.icon = function (t) {
        return new En(t)
    }, t.DivIcon = oi, t.divIcon = function (t) {
        return new oi(t)
    }, t.Marker = jn, t.marker = function (t, e) {
        return new jn(t, e)
    }, t.TileLayer = si, t.tileLayer = ai, t.GridLayer = ri, t.gridLayer = function (t) {
        return new ri(t)
    }, t.SVG = _i, t.svg = mi, t.Renderer = li, t.Canvas = hi, t.canvas = ci, t.Path = On, t.CircleMarker = Bn, t.circleMarker = function (t, e) {
        return new Bn(t, e)
    }, t.Circle = Zn, t.circle = function (t, e, n) {
        return new Zn(t, e, n)
    }, t.Polyline = Rn, t.polyline = function (t, e) {
        return new Rn(t, e)
    }, t.Polygon = Nn, t.polygon = function (t, e) {
        return new Nn(t, e)
    }, t.Rectangle = gi, t.rectangle = function (t, e) {
        return new gi(t, e)
    }, t.Map = Ke, t.map = function (t, e) {
        return new Ke(t, e)
    };
    var Ti = window.L;
    t.noConflict = function () {
        return window.L = Ti, this
    }, window.L = t
})),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.leaflet = t.leaflet || {}, t.leaflet["extra-markers"] = {}))
    }(this, (function (t) {
        "use strict";
        var e = L.ExtraMarkers = {};
        e.version = L.ExtraMarkers.version = "1.2.1", e.Icon = L.ExtraMarkers.Icon = L.Icon.extend({
            options: {
                iconSize: [35, 45],
                iconAnchor: [17, 42],
                popupAnchor: [1, -32],
                shadowAnchor: [10, 12],
                shadowSize: [36, 16],
                className: "",
                prefix: "",
                extraClasses: "",
                shape: "circle",
                icon: "",
                innerHTML: "",
                markerColor: "red",
                svgBorderColor: "#fff",
                svgOpacity: 1,
                iconColor: "#fff",
                iconRotate: 0,
                number: "",
                svg: !1,
                name: ""
            },
            initialize: function (t) {
                t = L.Util.setOptions(this, t)
            },
            createIcon: function () {
                var t = document.createElement("div"),
                    e = this.options;
                return e.icon && (t.innerHTML = this._createInner()), e.innerHTML && (t.innerHTML = e.innerHTML), e.bgPos && (t.style.backgroundPosition = -e.bgPos.x + "px " + -e.bgPos.y + "px"), e.svg ? this._setIconStyles(t, "svg") : this._setIconStyles(t, e.shape + "-" + e.markerColor), t
            },
            _getColorHex: function (t) {
                return {
                    red: "#a23337",
                    "orange-dark": "#d73e29",
                    orange: "#ef9227",
                    yellow: "#f5bb39",
                    "blue-dark": "#276273",
                    cyan: "#32a9dd",
                    purple: "#440444",
                    violet: "#90278d",
                    pink: "#c057a0",
                    green: "#006838",
                    white: "#e8e8e8",
                    black: "#211c1d"
                }[t] || t
            },
            _createSvg: function (t, e) {
                return {
                    circle: '<svg width="32" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2.746c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.439-17.863.056-.08a15.422 15.422 0 002.343-6.112c.123-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307" fill="' + e + '" /><path d="M17.488 2.748c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.44-17.863.055-.08a15.422 15.422 0 002.343-6.112c.124-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307m0 1.071c7.68 0 13.929 6.386 13.929 14.236 0 .685-.064 1.423-.193 2.258-.325 2.075-1.059 3.99-2.164 5.667l-.055.078-11.557 16.595L6.032 26.14l-.12-.174a14.256 14.256 0 01-2.105-5.29 14.698 14.698 0 01-.247-2.62c0-7.851 6.249-14.237 13.928-14.237" fill="#231f20" opacity=".15" /></svg>',
                    square: '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M28.205 3.217H6.777c-2.367 0-4.286 1.87-4.286 4.179v19.847c0 2.308 1.919 4.179 4.286 4.179h5.357l5.337 13.58 5.377-13.58h5.357c2.366 0 4.285-1.87 4.285-4.179V7.396c0-2.308-1.919-4.179-4.285-4.179" fill="' + e + '" /><g opacity=".15" transform="matrix(1.0714 0 0 -1.0714 -233.22 146.783)"><path d="M244 134h-20c-2.209 0-4-1.746-4-3.9v-18.525c0-2.154 1.791-3.9 4-3.9h5L233.982 95 239 107.675h5c2.209 0 4 1.746 4 3.9V130.1c0 2.154-1.791 3.9-4 3.9m0-1c1.654 0 3-1.301 3-2.9v-18.525c0-1.599-1.346-2.9-3-2.9h-5.68l-.25-.632-4.084-10.318-4.055 10.316-.249.634H224c-1.654 0-3 1.301-3 2.9V130.1c0 1.599 1.346 2.9 3 2.9h20" fill="#231f20" /></g></svg>',
                    star: '<svg width="34" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M32.92 16.93l-3.525-3.525V8.419a1.983 1.983 0 00-1.983-1.982h-4.985L18.9 2.91a1.984 1.984 0 00-2.803 0l-3.524 3.526H7.588a1.983 1.983 0 00-1.982 1.982v4.986L2.081 16.93a1.982 1.982 0 000 2.803l3.525 3.526v4.984c0 1.096.888 1.983 1.982 1.983h4.986L17.457 45l4.97-14.773h4.985a1.983 1.983 0 001.983-1.983V23.26l3.525-3.526a1.982 1.982 0 000-2.803" fill="' + e + '" /><g opacity=".15" transform="matrix(1.0667 0 0 -1.0667 -347.3 97.26)"><path d="M342 89c-.476 0-.951-.181-1.314-.544l-3.305-3.305h-4.673a1.858 1.858 0 01-1.859-1.858v-4.674l-3.305-3.305a1.857 1.857 0 010-2.627l3.305-3.305v-4.674a1.86 1.86 0 011.859-1.859h4.673L341.959 49l4.659 13.849h4.674a1.86 1.86 0 011.859 1.859v4.674l3.305 3.305a1.858 1.858 0 010 2.627l-3.305 3.305v4.674a1.859 1.859 0 01-1.859 1.858h-4.674l-3.304 3.305A1.851 1.851 0 01342 89m0-1a.853.853 0 00.607-.251l3.304-3.305.293-.293h5.088a.86.86 0 00.859-.858v-5.088l3.598-3.598A.852.852 0 00356 74a.85.85 0 00-.251-.606l-3.598-3.598v-5.088a.86.86 0 00-.859-.859h-5.393l-.229-.681-3.702-11.006-3.637 11.001-.227.686h-5.396a.86.86 0 00-.859.859v5.088l-3.598 3.598c-.162.162-.251.377-.251.606s.089.445.251.607l3.598 3.598v5.088a.86.86 0 00.859.858h5.087l3.598 3.598A.853.853 0 00342 88" fill="#231f20" /></g></svg>',
                    penta: '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M1.872 17.35L9.679 2.993h15.615L33.1 17.35 17.486 44.992z" fill="' + e + '" /><g opacity=".15" transform="matrix(1.0769 0 0 -1.0769 -272.731 48.23)"><path d="M276.75 42h-14.5L255 28.668 269.5 3 284 28.668zm-.595-1l6.701-12.323L269.5 5.033l-13.356 23.644L262.845 41z" fill="#231f20" /></g></svg>'
                }[t]
            },
            _createInner: function () {
                var t = "",
                    e = "",
                    n = "",
                    i = "",
                    o = this.options;
                return o.iconColor && (t = "color: " + o.iconColor + ";"), 0 !== o.iconRotate && (t += "-webkit-transform: rotate(" + o.iconRotate + "deg);", t += "-moz-transform: rotate(" + o.iconRotate + "deg);", t += "-o-transform: rotate(" + o.iconRotate + "deg);", t += "-ms-transform: rotate(" + o.iconRotate + "deg);", t += "transform: rotate(" + o.iconRotate + "deg);"), o.number && (e = 'number="' + o.number + '" '), o.extraClasses.length && (n += o.extraClasses + " "), o.prefix.length && (n += o.prefix + " "), o.icon.length && (n += o.icon + " "), o.svg && (i += this._createSvg(o.shape, this._getColorHex(o.markerColor))), i += "<i " + e + 'style="' + t + '" class="' + n + '"></i>', o.name.length && (i += '<div class="' + (void 0 !== o.nameClasses ? o.nameClasses : "") + '">' + o.name + "</div>"), i
            },
            _setIconStyles: function (t, e) {
                var n, i, o = this.options,
                    r = L.point(o["shadow" === e ? "shadowSize" : "iconSize"]);
                i = "shadow" === e ? (n = L.point(o.shadowAnchor || o.iconAnchor), "shadow") : (n = L.point(o.iconAnchor), "icon"), !n && r && (n = r.divideBy(2, !0)), t.className = "leaflet-marker-" + i + " extra-marker extra-marker-" + e + " " + o.className, n && (t.style.marginLeft = -n.x + "px", t.style.marginTop = -n.y + "px"), r && (t.style.width = r.x + "px", t.style.height = r.y + "px")
            },
            createShadow: function () {
                var t = document.createElement("div");
                return this._setIconStyles(t, "shadow"), t
            }
        }), e.icon = L.ExtraMarkers.icon = function (t) {
            return new L.ExtraMarkers.Icon(t)
        }, t.ExtraMarkers = e, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })),
    function () {
        var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
            e = [].slice;
        ! function (t, e) {
            "function" == typeof define && define.amd ? define("waypoints", ["jquery"], (function (n) {
                return e(n, t)
            })) : e(t.jQuery, t)
        }(window, (function (n, i) {
            var o, r, s, a, u, l, h, c, f, d, p, _, m, g, v, y;
            return o = n(i), c = t.call(i, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, u = 1, h = {}, l = "waypoints-context-id", p = "resize.waypoints", _ = "scroll.waypoints", m = 1, g = "waypoints-waypoint-ids", v = "waypoint", y = "waypoints", r = function () {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + u++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[l] = this.id, h[this.id] = this, t.bind(_, (function () {
                        var t;
                        if (!e.didScroll && !c) return e.didScroll = !0, t = function () {
                            return e.doScroll(), e.didScroll = !1
                        }, i.setTimeout(t, n[y].settings.scrollThrottle)
                    })), t.bind(p, (function () {
                        var t;
                        if (!e.didResize) return e.didResize = !0, t = function () {
                            return n[y]("refresh"), e.didResize = !1
                        }, i.setTimeout(t, n[y].settings.resizeThrottle)
                    }))
                }
                return t.prototype.doScroll = function () {
                    var t, e = this;
                    return t = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !c || t.vertical.oldScroll && t.vertical.newScroll || n[y]("refresh"), n.each(t, (function (t, i) {
                        var o, r, s;
                        return s = [], r = i.newScroll > i.oldScroll, o = r ? i.forward : i.backward, n.each(e.waypoints[t], (function (t, e) {
                            var n, o;
                            return i.oldScroll < (n = e.offset) && n <= i.newScroll || i.newScroll < (o = e.offset) && o <= i.oldScroll ? s.push(e) : void 0
                        })), s.sort((function (t, e) {
                            return t.offset - e.offset
                        })), r || s.reverse(), n.each(s, (function (t, e) {
                            if (e.options.continuous || t === s.length - 1) return e.trigger([o])
                        }))
                    })), this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                }, t.prototype.refresh = function () {
                    var t, e, i, o = this;
                    return i = n.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                        horizontal: {
                            contextOffset: i ? 0 : e.left,
                            contextScroll: i ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: i ? 0 : e.top,
                            contextScroll: i ? 0 : this.oldScroll.y,
                            contextDimension: i ? n[y]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, n.each(t, (function (t, e) {
                        return n.each(o.waypoints[t], (function (t, i) {
                            var o, r, s, a, u;
                            if (o = i.options.offset, s = i.offset, r = n.isWindow(i.element) ? 0 : i.$element.offset()[e.offsetProp], n.isFunction(o) ? o = o.apply(i.element) : "string" == typeof o && (o = parseFloat(o), i.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), i.offset = r - e.contextOffset + e.contextScroll - o, (!i.options.onlyOnScroll || null == s) && i.enabled) return null !== s && s < (a = e.oldScroll) && a <= i.offset ? i.trigger([e.backward]) : null !== s && s > (u = e.oldScroll) && u >= i.offset || null === s && e.oldScroll >= i.offset ? i.trigger([e.forward]) : void 0
                        }))
                    }))
                }, t.prototype.checkEmpty = function () {
                    if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([p, _].join(" ")), delete h[this.id]
                }, t
            }(), s = function () {
                function t(t, e, i) {
                    var o, r;
                    "bottom-in-view" === i.offset && (i.offset = function () {
                        var t;
                        return t = n[y]("viewportHeight"), n.isWindow(e.element) || (t = e.$element.height()), t - n(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = e, this.enabled = i.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = i, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, (o = null != (r = this.element[g]) ? r : []).push(this.id), this.element[g] = o
                }
                return t.prototype.trigger = function (t) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
                }, t.prototype.disable = function () {
                    return this.enabled = !1
                }, t.prototype.enable = function () {
                    return this.context.refresh(), this.enabled = !0
                }, t.prototype.destroy = function () {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, t.getWaypointsByElement = function (t) {
                    var e, i;
                    return (i = t[g]) ? (e = n.extend({}, a.horizontal, a.vertical), n.map(i, (function (t) {
                        return e[t]
                    }))) : []
                }, t
            }(), d = {
                init: function (t, e) {
                    return null == (e = n.extend({}, n.fn[v].defaults, e)).handler && (e.handler = t), this.each((function () {
                        var t, i, o, a;
                        return t = n(this), o = null != (a = e.context) ? a : n.fn[v].defaults.context, n.isWindow(o) || (o = t.closest(o)), o = n(o), (i = h[o[0][l]]) || (i = new r(o)), new s(t, i, e)
                    })), n[y]("refresh"), this
                },
                disable: function () {
                    return d._invoke.call(this, "disable")
                },
                enable: function () {
                    return d._invoke.call(this, "enable")
                },
                destroy: function () {
                    return d._invoke.call(this, "destroy")
                },
                prev: function (t, e) {
                    return d._traverse.call(this, t, e, (function (t, e, n) {
                        if (e > 0) return t.push(n[e - 1])
                    }))
                },
                next: function (t, e) {
                    return d._traverse.call(this, t, e, (function (t, e, n) {
                        if (e < n.length - 1) return t.push(n[e + 1])
                    }))
                },
                _traverse: function (t, e, o) {
                    var r, s;
                    return null == t && (t = "vertical"), null == e && (e = i), s = f.aggregate(e), r = [], this.each((function () {
                        var e;
                        return e = n.inArray(this, s[t]), o(r, e, s[t])
                    })), this.pushStack(r)
                },
                _invoke: function (t) {
                    return this.each((function () {
                        var e;
                        return e = s.getWaypointsByElement(this), n.each(e, (function (e, n) {
                            return n[t](), !0
                        }))
                    })), this
                }
            }, n.fn[v] = function () {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[i] ? d[i].apply(this, t) : n.isFunction(i) ? d.init.apply(this, arguments) : n.isPlainObject(i) ? d.init.apply(this, [null, i]) : i ? n.error("The " + i + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
            }, n.fn[v].defaults = {
                context: i,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, f = {
                refresh: function () {
                    return n.each(h, (function (t, e) {
                        return e.refresh()
                    }))
                },
                viewportHeight: function () {
                    var t;
                    return null != (t = i.innerHeight) ? t : o.height()
                },
                aggregate: function (t) {
                    var e, i, o;
                    return e = a, t && (e = null != (o = h[n(t)[0][l]]) ? o.waypoints : void 0), e ? (i = {
                        horizontal: [],
                        vertical: []
                    }, n.each(i, (function (t, o) {
                        return n.each(e[t], (function (t, e) {
                            return o.push(e)
                        })), o.sort((function (t, e) {
                            return t.offset - e.offset
                        })), i[t] = n.map(o, (function (t) {
                            return t.element
                        })), i[t] = n.unique(i[t])
                    })), i) : []
                },
                above: function (t) {
                    return null == t && (t = i), f._filter(t, "vertical", (function (t, e) {
                        return e.offset <= t.oldScroll.y
                    }))
                },
                below: function (t) {
                    return null == t && (t = i), f._filter(t, "vertical", (function (t, e) {
                        return e.offset > t.oldScroll.y
                    }))
                },
                left: function (t) {
                    return null == t && (t = i), f._filter(t, "horizontal", (function (t, e) {
                        return e.offset <= t.oldScroll.x
                    }))
                },
                right: function (t) {
                    return null == t && (t = i), f._filter(t, "horizontal", (function (t, e) {
                        return e.offset > t.oldScroll.x
                    }))
                },
                enable: function () {
                    return f._invoke("enable")
                },
                disable: function () {
                    return f._invoke("disable")
                },
                destroy: function () {
                    return f._invoke("destroy")
                },
                extendFn: function (t, e) {
                    return d[t] = e
                },
                _invoke: function (t) {
                    var e;
                    return e = n.extend({}, a.vertical, a.horizontal), n.each(e, (function (e, n) {
                        return n[t](), !0
                    }))
                },
                _filter: function (t, e, i) {
                    var o, r;
                    return (o = h[n(t)[0][l]]) ? (r = [], n.each(o.waypoints[e], (function (t, e) {
                        if (i(o, e)) return r.push(e)
                    })), r.sort((function (t, e) {
                        return t.offset - e.offset
                    })), n.map(r, (function (t) {
                        return t.element
                    }))) : []
                }
            }, n[y] = function () {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], f[n] ? f[n].apply(null, t) : f.aggregate.call(null, n)
            }, n[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, o.on("load.waypoints", (function () {
                return n[y]("refresh")
            }))
        }))
    }.call(this),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }((function (t) {
        var e, n, i, o, r, s, a = "Close",
            u = "BeforeClose",
            l = "MarkupParse",
            h = "Open",
            c = "Change",
            f = "mfp",
            d = ".mfp",
            p = "mfp-ready",
            _ = "mfp-removing",
            m = "mfp-prevent-close",
            g = function () { },
            v = !!window.jQuery,
            y = t(window),
            w = function (t, n) {
                e.ev.on(f + t + d, n)
            },
            x = function (e, n, i, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r
            },
            b = function (n, i) {
                e.ev.triggerHandler(f + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
            },
            L = function (n) {
                return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
            },
            P = function () {
                t.magnificPopup.instance || ((e = new g).init(), t.magnificPopup.instance = e)
            };
        g.prototype = {
            constructor: g,
            init: function () {
                var n = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = function () {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1
                }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
            },
            open: function (n) {
                var o;
                if (!1 === n.isObj) {
                    e.items = n.items.toArray(), e.index = 0;
                    var s, a = n.items;
                    for (o = 0; o < a.length; o++)
                        if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
                            e.index = o;
                            break
                        }
                } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
                if (!e.isOpen) {
                    e.types = [], r = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = x("bg").on("click" + d, (function () {
                        e.close()
                    })), e.wrap = x("wrap").attr("tabindex", -1).on("click" + d, (function (t) {
                        e._checkIfClose(t.target) && e.close()
                    })), e.container = x("container", e.wrap)), e.contentContainer = x("content"), e.st.preloader && (e.preloader = x("preloader", e.container, e.st.tLoading));
                    var u = t.magnificPopup.modules;
                    for (o = 0; o < u.length; o++) {
                        var c = u[o];
                        c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                    }
                    b("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (w(l, (function (t, e, n, i) {
                        n.close_replaceWith = L(i.type)
                    })), r += " mfp-close-btn-in") : e.wrap.append(L())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: y.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: i.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && i.on("keyup" + d, (function (t) {
                        27 === t.keyCode && e.close()
                    })), y.on("resize" + d, (function () {
                        e.updateSize()
                    })), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                    var f = e.wH = y.height(),
                        _ = {};
                    if (e.fixedContentPos && e._hasScrollBar(f)) {
                        var m = e._getScrollbarSize();
                        m && (_.marginRight = m)
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : _.overflow = "hidden");
                    var g = e.st.mainClass;
                    return e.isIE7 && (g += " mfp-ie7"), g && e._addClassToMFP(g), e.updateItemHTML(), b("BuildControls"), t("html").css(_), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout((function () {
                        e.content ? (e._addClassToMFP(p), e._setFocus()) : e.bgOverlay.addClass(p), i.on("focusin" + d, e._onFocusIn)
                    }), 16), e.isOpen = !0, e.updateSize(f), b(h), n
                }
                e.updateItemHTML()
            },
            close: function () {
                e.isOpen && (b(u), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(_), setTimeout((function () {
                    e._close()
                }), e.st.removalDelay)) : e._close())
            },
            _close: function () {
                b(a);
                var n = _ + " " + p + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
                }
                i.off("keyup.mfp focusin" + d), e.ev.off(d), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, b("AfterClose")
            },
            updateSize: function (t) {
                if (e.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * n;
                    e.wrap.css("height", i), e.wH = i
                } else e.wH = t || y.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), b("Resize")
            },
            updateItemHTML: function () {
                var n = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (b("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                    var r = !!e.st[i] && e.st[i].markup;
                    b("FirstMarkupParse", r), e.currTemplate[i] = !r || t(r)
                }
                o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");
                var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
                e.appendContent(s, i), n.preloaded = !0, b(c, n), o = n.type, e.container.prepend(e.contentContainer), b("AfterChange")
            },
            appendContent: function (t, n) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[n] ? e.content.find(".mfp-close").length || e.content.append(L()) : e.content = t : e.content = "", b("BeforeAppend"), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function (n) {
                var i, o = e.items[n];
                if (o.tagName ? o = {
                    el: t(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            i = r[s];
                            break
                        } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, b("ElementParse", o), e.items[n]
            },
            addGroup: function (t, n) {
                var i = function (i) {
                    i.mfpEl = this, e._openClick(i, t, n)
                };
                n || (n = {});
                var o = "click.magnificPopup";
                n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)))
            },
            _openClick: function (n, i, o) {
                if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                    var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e)) return !0
                        } else if (y.width() < r) return !0;
                    n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function (t, i) {
                if (e.preloader) {
                    n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                    var o = {
                        status: t,
                        text: i
                    };
                    b("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", (function (t) {
                        t.stopImmediatePropagation()
                    })), e.container.addClass("mfp-s-" + t), n = t
                }
            },
            _checkIfClose: function (n) {
                if (!t(n).hasClass(m)) {
                    var i = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (i && o) return !0;
                    if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                    if (n === e.content[0] || t.contains(e.content[0], n)) {
                        if (i) return !0
                    } else if (o && t.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function (t) {
                return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || y.height())
            },
            _setFocus: function () {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function (n) {
                return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function (e, n, i) {
                var o;
                i.data && (n = t.extend(i.data, n)), b(l, [e, n, i]), t.each(n, (function (n, i) {
                    if (void 0 === i || !1 === i) return !0;
                    if ((o = n.split("_")).length > 1) {
                        var r = e.find(d + "-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(t("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i)
                        }
                    } else e.find(d + "-" + n).html(i)
                }))
            },
            _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: g.prototype,
            modules: [],
            open: function (e, n) {
                return P(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = n || 0, this.instance.open(e)
            },
            close: function () {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function (e, n) {
                n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function (n) {
            P();
            var i = t(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var o, r = v ? i.data("magnificPopup") : i[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
                        mfpEl: o
                    }, i, r)
                } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
            else n = t.extend(!0, {}, n), v ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
            return i
        };
        var T, z, C, k = "inline",
            S = function () {
                C && (z.after(C.addClass(T)).detach(), C = null)
            };
        t.magnificPopup.registerModule(k, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function () {
                    e.types.push(k), w(a + "." + k, (function () {
                        S()
                    }))
                },
                getInline: function (n, i) {
                    if (S(), n.src) {
                        var o = e.st.inline,
                            r = t(n.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (z || (T = o.hiddenClass, z = x(T), T = "mfp-" + T), C = r.after(z).detach().removeClass(T)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return n.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
                }
            }
        });
        var M, E = "ajax",
            I = function () {
                M && t(document.body).removeClass(M)
            },
            A = function () {
                I(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(E, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function () {
                    e.types.push(E), M = e.st.ajax.cursor, w(a + "." + E, A), w("BeforeChange." + E, A)
                },
                getAjax: function (n) {
                    M && t(document.body).addClass(M), e.updateStatus("loading");
                    var i = t.extend({
                        url: n.src,
                        success: function (i, o, r) {
                            var s = {
                                data: i,
                                xhr: r
                            };
                            b("ParseAjax", s), e.appendContent(t(s.data), E), n.finished = !0, I(), e._setFocus(), setTimeout((function () {
                                e.wrap.addClass(p)
                            }), 16), e.updateStatus("ready"), b("AjaxContentAdded")
                        },
                        error: function () {
                            I(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(i), ""
                }
            }
        });
        var j, O = function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = e.st.image.titleSrc;
            if (i) {
                if (t.isFunction(i)) return i.call(e, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function () {
                    var n = e.st.image,
                        i = ".image";
                    e.types.push("image"), w(h + i, (function () {
                        "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                    })), w(a + i, (function () {
                        n.cursor && t(document.body).removeClass(n.cursor), y.off("resize" + d)
                    })), w("Resize" + i, e.resizeImage), e.isLowIE && w("AfterChange", e.resizeImage)
                },
                resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var n = 0;
                        e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                    }
                },
                _onImageHasSize: function (t) {
                    t.img && (t.hasSize = !0, j && clearInterval(j), t.isCheckingImgSize = !1, b("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function (t) {
                    var n = 0,
                        i = t.img[0],
                        o = function (r) {
                            j && clearInterval(j), j = setInterval((function () {
                                return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(j), void (3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                            }), r)
                        };
                    o(1)
                },
                getImage: function (n, i) {
                    var o = 0,
                        r = function () {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, b("ImageLoadComplete")) : 200 > ++o ? setTimeout(r, 100) : s())
                        },
                        s = function () {
                            n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        a = e.st.image,
                        u = i.find(".mfp-img");
                    if (u.length) {
                        var l = document.createElement("img");
                        l.className = "mfp-img", n.el && n.el.find("img").length && (l.alt = n.el.find("img").attr("alt")), n.img = t(l).on("load.mfploader", r).on("error.mfploader", s), l.src = n.src, u.is("img") && (n.img = n.img.clone()), (l = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : l.width || (n.hasSize = !1)
                    }
                    return e._parseMarkup(i, {
                        title: O(n),
                        img_replaceWith: n.img
                    }, n), e.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
                }
            }
        });
        var B;
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function () {
                    var t, n = e.st.zoom,
                        i = ".zoom";
                    if (n.enabled && e.supportsTransition) {
                        var o, r, s = n.duration,
                            l = function (t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e
                            },
                            h = function () {
                                e.content.css("visibility", "visible")
                            };
                        w("BuildControls" + i, (function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void h();
                                (r = l(t)).css(e._getOffset()), e.wrap.append(r), o = setTimeout((function () {
                                    r.css(e._getOffset(!0)), o = setTimeout((function () {
                                        h(), setTimeout((function () {
                                            r.remove(), t = r = null, b("ZoomAnimationEnded")
                                        }), 16)
                                    }), s)
                                }), 16)
                            }
                        })), w(u + i, (function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = s, !t) {
                                    if (!(t = e._getItemToZoom())) return;
                                    r = l(t)
                                }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout((function () {
                                    r.css(e._getOffset())
                                }), 16)
                            }
                        })), w(a + i, (function () {
                            e._allowZoom() && (h(), r && r.remove(), t = null)
                        }))
                    }
                },
                _allowZoom: function () {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function (n) {
                    var i, o = (i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                        r = parseInt(i.css("padding-top"), 10),
                        s = parseInt(i.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: i.width(),
                        height: (v ? i.innerHeight() : i[0].offsetHeight) - s - r
                    };
                    return void 0 === B && (B = void 0 !== document.createElement("p").style.MozTransform), B ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var Z = "iframe",
            R = function (t) {
                if (e.currTemplate[Z]) {
                    var n = e.currTemplate[Z].find("iframe");
                    n.length && (t || (n[0].src = "//about:blank"), e.isIE8 && n.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(Z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function () {
                    e.types.push(Z), w("BeforeChange", (function (t, e, n) {
                        e !== n && (e === Z ? R() : n === Z && R(!0))
                    })), w(a + "." + Z, (function () {
                        R()
                    }))
                },
                getIframe: function (n, i) {
                    var o = n.src,
                        r = e.st.iframe;
                    t.each(r.patterns, (function () {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    }));
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(i, s, n), e.updateStatus("ready"), i
                }
            }
        });
        var N = function (t) {
            var n = e.items.length;
            return t > n - 1 ? t - n : 0 > t ? n + t : t
        },
            D = function (t, e, n) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function () {
                    var n = e.st.gallery,
                        o = ".mfp-gallery";
                    return e.direction = !0, !(!n || !n.enabled) && (r += " mfp-gallery", w(h + o, (function () {
                        n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", (function () {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        })), i.on("keydown" + o, (function (t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        }))
                    })), w("UpdateStatus" + o, (function (t, n) {
                        n.text && (n.text = D(n.text, e.currItem.index, e.items.length))
                    })), w(l + o, (function (t, i, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? D(n.tCounter, r.index, s) : ""
                    })), w("BuildControls" + o, (function () {
                        if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                            var i = n.arrowMarkup,
                                o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                                r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(m);
                            o.click((function () {
                                e.prev()
                            })), r.click((function () {
                                e.next()
                            })), e.container.append(o.add(r))
                        }
                    })), w(c + o, (function () {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout((function () {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }), 16)
                    })), void w(a + o, (function () {
                        i.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                    })))
                },
                next: function () {
                    e.direction = !0, e.index = N(e.index + 1), e.updateItemHTML()
                },
                prev: function () {
                    e.direction = !1, e.index = N(e.index - 1), e.updateItemHTML()
                },
                goTo: function (t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function () {
                    var t, n = e.st.gallery.preload,
                        i = Math.min(n[0], e.items.length),
                        o = Math.min(n[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : i); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? i : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function (n) {
                    if (n = N(n), !e.items[n].preloaded) {
                        var i = e.items[n];
                        i.parsed || (i = e.parseEl(n)), b("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", (function () {
                            i.hasSize = !0
                        })).on("error.mfploader", (function () {
                            i.hasSize = !0, i.loadError = !0, b("LazyLoadError", i)
                        })).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var W = "retina";
        t.magnificPopup.registerModule(W, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, (function (t) {
                        return "@2x" + t
                    }))
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            n = t.ratio;
                        (n = isNaN(n) ? n() : n) > 1 && (w("ImageHasSize." + W, (function (t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        })), w("ElementParse." + W, (function (e, i) {
                            i.src = t.replaceSrc(i, n)
                        })))
                    }
                }
            }
        }), P()
    })),
    function () {
        function t(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }

        function e(t, e, n, i) {
            for (var o = -1, r = null == t ? 0 : t.length; ++o < r;) {
                var s = t[o];
                e(i, s, n(s), t)
            }
            return i
        }

        function n(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
            return t
        }

        function i(t, e) {
            for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
            return t
        }

        function o(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
                if (!e(t[n], n, t)) return !1;
            return !0
        }

        function r(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i;) {
                var s = t[n];
                e(s, n, t) && (r[o++] = s)
            }
            return r
        }

        function s(t, e) {
            return !(null == t || !t.length) && -1 < _(t, e, 0)
        }

        function a(t, e, n) {
            for (var i = -1, o = null == t ? 0 : t.length; ++i < o;)
                if (n(e, t[i])) return !0;
            return !1
        }

        function u(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = Array(i); ++n < i;) o[n] = e(t[n], n, t);
            return o
        }

        function l(t, e) {
            for (var n = -1, i = e.length, o = t.length; ++n < i;) t[o + n] = e[n];
            return t
        }

        function h(t, e, n, i) {
            var o = -1,
                r = null == t ? 0 : t.length;
            for (i && r && (n = t[++o]); ++o < r;) n = e(n, t[o], o, t);
            return n
        }

        function c(t, e, n, i) {
            var o = null == t ? 0 : t.length;
            for (i && o && (n = t[--o]); o--;) n = e(n, t[o], o, t);
            return n
        }

        function f(t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
                if (e(t[n], n, t)) return !0;
            return !1
        }

        function d(t, e, n) {
            var i;
            return n(t, (function (t, n, o) {
                if (e(t, n, o)) return i = n, !1
            })), i
        }

        function p(t, e, n, i) {
            var o = t.length;
            for (n += i ? 1 : -1; i ? n-- : ++n < o;)
                if (e(t[n], n, t)) return n;
            return -1
        }

        function _(t, e, n) {
            if (e == e) t: {
                --n;
                for (var i = t.length; ++n < i;)
                    if (t[n] === e) {
                        t = n;
                        break t
                    } t = -1
            }
            else t = p(t, g, n);
            return t
        }

        function m(t, e, n, i) {
            --n;
            for (var o = t.length; ++n < o;)
                if (i(t[n], e)) return n;
            return -1
        }

        function g(t) {
            return t != t
        }

        function v(t, e) {
            var n = null == t ? 0 : t.length;
            return n ? b(t, e) / n : R
        }

        function y(t) {
            return function (e) {
                return null == e ? B : e[t]
            }
        }

        function w(t) {
            return function (e) {
                return null == t ? B : t[e]
            }
        }

        function x(t, e, n, i, o) {
            return o(t, (function (t, o, r) {
                n = i ? (i = !1, t) : e(n, t, o, r)
            })), n
        }

        function b(t, e) {
            for (var n, i = -1, o = t.length; ++i < o;) {
                var r = e(t[i]);
                r !== B && (n = n === B ? r : n + r)
            }
            return n
        }

        function L(t, e) {
            for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
            return i
        }

        function P(t) {
            return function (e) {
                return t(e)
            }
        }

        function T(t, e) {
            return u(e, (function (e) {
                return t[e]
            }))
        }

        function z(t, e) {
            return t.has(e)
        }

        function C(t, e) {
            for (var n = -1, i = t.length; ++n < i && -1 < _(e, t[n], 0););
            return n
        }

        function k(t, e) {
            for (var n = t.length; n-- && -1 < _(e, t[n], 0););
            return n
        }

        function S(t) {
            return "\\" + Mt[t]
        }

        function M(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function (t, i) {
                n[++e] = [i, t]
            })), n
        }

        function E(t, e) {
            return function (n) {
                return t(e(n))
            }
        }

        function I(t, e) {
            for (var n = -1, i = t.length, o = 0, r = []; ++n < i;) {
                var s = t[n];
                s !== e && "__lodash_placeholder__" !== s || (t[n] = "__lodash_placeholder__", r[o++] = n)
            }
            return r
        }

        function A(t) {
            var e = -1,
                n = Array(t.size);
            return t.forEach((function (t) {
                n[++e] = t
            })), n
        }

        function j(t) {
            if (Tt.test(t)) {
                for (var e = Lt.lastIndex = 0; Lt.test(t);) ++e;
                t = e
            } else t = qt(t);
            return t
        }

        function O(t) {
            return Tt.test(t) ? t.match(Lt) || [] : t.split("")
        }
        var B, Z = 1 / 0,
            R = NaN,
            N = [
                ["ary", 128],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", 32],
                ["partialRight", 64],
                ["rearg", 256]
            ],
            D = /\b__p\+='';/g,
            W = /\b(__p\+=)''\+/g,
            F = /(__e\(.*?\)|\b__t\))\+'';/g,
            H = /&(?:amp|lt|gt|quot|#39);/g,
            U = /[&<>"']/g,
            $ = RegExp(H.source),
            V = RegExp(U.source),
            q = /<%-([\s\S]+?)%>/g,
            G = /<%([\s\S]+?)%>/g,
            K = /<%=([\s\S]+?)%>/g,
            Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            J = /^\w*$/,
            X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Q = /[\\^$.*+?()[\]{}|]/g,
            tt = RegExp(Q.source),
            et = /^\s+|\s+$/g,
            nt = /^\s+/,
            it = /\s+$/,
            ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            rt = /\{\n\/\* \[wrapped with (.+)\] \*/,
            st = /,? & /,
            at = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ut = /\\(\\)?/g,
            lt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            ht = /\w*$/,
            ct = /^[-+]0x[0-9a-f]+$/i,
            ft = /^0b[01]+$/i,
            dt = /^\[object .+?Constructor\]$/,
            pt = /^0o[0-7]+$/i,
            _t = /^(?:0|[1-9]\d*)$/,
            mt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            gt = /($^)/,
            vt = /['\n\r\u2028\u2029\\]/g,
            yt = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
            wt = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + yt,
            xt = RegExp("['’]", "g"),
            bt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
            Lt = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])" + yt, "g"),
            Pt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", wt].join("|"), "g"),
            Tt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
            zt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Ct = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
            kt = {};
        kt["[object Float32Array]"] = kt["[object Float64Array]"] = kt["[object Int8Array]"] = kt["[object Int16Array]"] = kt["[object Int32Array]"] = kt["[object Uint8Array]"] = kt["[object Uint8ClampedArray]"] = kt["[object Uint16Array]"] = kt["[object Uint32Array]"] = !0, kt["[object Arguments]"] = kt["[object Array]"] = kt["[object ArrayBuffer]"] = kt["[object Boolean]"] = kt["[object DataView]"] = kt["[object Date]"] = kt["[object Error]"] = kt["[object Function]"] = kt["[object Map]"] = kt["[object Number]"] = kt["[object Object]"] = kt["[object RegExp]"] = kt["[object Set]"] = kt["[object String]"] = kt["[object WeakMap]"] = !1;
        var St = {};
        St["[object Arguments]"] = St["[object Array]"] = St["[object ArrayBuffer]"] = St["[object DataView]"] = St["[object Boolean]"] = St["[object Date]"] = St["[object Float32Array]"] = St["[object Float64Array]"] = St["[object Int8Array]"] = St["[object Int16Array]"] = St["[object Int32Array]"] = St["[object Map]"] = St["[object Number]"] = St["[object Object]"] = St["[object RegExp]"] = St["[object Set]"] = St["[object String]"] = St["[object Symbol]"] = St["[object Uint8Array]"] = St["[object Uint8ClampedArray]"] = St["[object Uint16Array]"] = St["[object Uint32Array]"] = !0, St["[object Error]"] = St["[object Function]"] = St["[object WeakMap]"] = !1;
        var Mt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
            Et = parseFloat,
            It = parseInt,
            At = "object" == typeof global && global && global.Object === Object && global,
            jt = "object" == typeof self && self && self.Object === Object && self,
            Ot = At || jt || Function("return this")(),
            Bt = "object" == typeof exports && exports && !exports.nodeType && exports,
            Zt = Bt && "object" == typeof module && module && !module.nodeType && module,
            Rt = Zt && Zt.exports === Bt,
            Nt = Rt && At.process,
            Dt = function () {
                try {
                    var t = Zt && Zt.f && Zt.f("util").types;
                    return t || Nt && Nt.binding && Nt.binding("util")
                } catch (t) { }
            }(),
            Wt = Dt && Dt.isArrayBuffer,
            Ft = Dt && Dt.isDate,
            Ht = Dt && Dt.isMap,
            Ut = Dt && Dt.isRegExp,
            $t = Dt && Dt.isSet,
            Vt = Dt && Dt.isTypedArray,
            qt = y("length"),
            Gt = w({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }),
            Kt = w({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }),
            Yt = w({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }),
            Jt = function w(yt) {
                function wt(t) {
                    if (Ki(t) && !Zs(t) && !(t instanceof At)) {
                        if (t instanceof Mt) return t;
                        if (Ro.call(t, "__wrapped__")) return xi(t)
                    }
                    return new Mt(t)
                }

                function Lt() { }

                function Mt(t, e) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = B
                }

                function At(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                function jt(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Bt(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Zt(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Nt(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.__data__ = new Zt; ++e < n;) this.add(t[e])
                }

                function Dt(t) {
                    this.size = (this.__data__ = new Bt(t)).size
                }

                function qt(t, e) {
                    var n, i = Zs(t),
                        o = !i && Bs(t),
                        r = !i && !o && Ns(t),
                        s = !i && !o && !r && Us(t),
                        a = (o = (i = i || o || r || s) ? L(t.length, Io) : []).length;
                    for (n in t) !e && !Ro.call(t, n) || i && ("length" == n || r && ("offset" == n || "parent" == n) || s && ("buffer" == n || "byteLength" == n || "byteOffset" == n) || ai(n, a)) || o.push(n);
                    return o
                }

                function Xt(t) {
                    var e = t.length;
                    return e ? t[Ue(0, e - 1)] : B
                }

                function Qt(t, e) {
                    return gi(xn(t), ue(e, 0, t.length))
                }

                function te(t) {
                    return gi(xn(t))
                }

                function ee(t, e, n) {
                    (n === B || Wi(t[e], n)) && (n !== B || e in t) || se(t, e, n)
                }

                function ne(t, e, n) {
                    var i = t[e];
                    Ro.call(t, e) && Wi(i, n) && (n !== B || e in t) || se(t, e, n)
                }

                function ie(t, e) {
                    for (var n = t.length; n--;)
                        if (Wi(t[n][0], e)) return n;
                    return -1
                }

                function oe(t, e, n, i) {
                    return Br(t, (function (t, o, r) {
                        e(i, t, n(t), r)
                    })), i
                }

                function re(t, e) {
                    return t && bn(e, lo(e), t)
                }

                function se(t, e, n) {
                    "__proto__" == e && nr ? nr(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }

                function ae(t, e) {
                    for (var n = -1, i = e.length, o = To(i), r = null == t; ++n < i;) o[n] = r ? B : ao(t, e[n]);
                    return o
                }

                function ue(t, e, n) {
                    return t == t && (n !== B && (t = t <= n ? t : n), e !== B && (t = t >= e ? t : e)), t
                }

                function le(t, e, i, o, r, s) {
                    var a, u = 1 & e,
                        l = 2 & e,
                        h = 4 & e;
                    if (i && (a = r ? i(t, o, r, s) : i(t)), a !== B) return a;
                    if (!Gi(t)) return t;
                    if (o = Zs(t)) {
                        if (a = function (t) {
                            var e = t.length,
                                n = new t.constructor(e);
                            return e && "string" == typeof t[0] && Ro.call(t, "index") && (n.index = t.index, n.input = t.input), n
                        }(t), !u) return xn(t, a)
                    } else {
                        var c = qr(t),
                            f = "[object Function]" == c || "[object GeneratorFunction]" == c;
                        if (Ns(t)) return _n(t, u);
                        if ("[object Object]" == c || "[object Arguments]" == c || f && !r) {
                            if (a = l || f ? {} : ri(t), !u) return l ? function (t, e) {
                                return bn(t, Vr(t), e)
                            }(t, function (t, e) {
                                return t && bn(e, ho(e), t)
                            }(a, t)) : function (t, e) {
                                return bn(t, $r(t), e)
                            }(t, re(a, t))
                        } else {
                            if (!St[c]) return r ? t : {};
                            a = function (t, e, n) {
                                var i = t.constructor;
                                switch (e) {
                                    case "[object ArrayBuffer]":
                                        return mn(t);
                                    case "[object Boolean]":
                                    case "[object Date]":
                                        return new i(+t);
                                    case "[object DataView]":
                                        return e = n ? mn(t.buffer) : t.buffer, new t.constructor(e, t.byteOffset, t.byteLength);
                                    case "[object Float32Array]":
                                    case "[object Float64Array]":
                                    case "[object Int8Array]":
                                    case "[object Int16Array]":
                                    case "[object Int32Array]":
                                    case "[object Uint8Array]":
                                    case "[object Uint8ClampedArray]":
                                    case "[object Uint16Array]":
                                    case "[object Uint32Array]":
                                        return gn(t, n);
                                    case "[object Map]":
                                        return new i;
                                    case "[object Number]":
                                    case "[object String]":
                                        return new i(t);
                                    case "[object RegExp]":
                                        return (e = new t.constructor(t.source, ht.exec(t))).lastIndex = t.lastIndex, e;
                                    case "[object Set]":
                                        return new i;
                                    case "[object Symbol]":
                                        return Ar ? Mo(Ar.call(t)) : {}
                                }
                            }(t, c, u)
                        }
                    }
                    if (s || (s = new Dt), r = s.get(t)) return r;
                    s.set(t, a), Hs(t) ? t.forEach((function (n) {
                        a.add(le(n, e, i, n, t, s))
                    })) : Ws(t) && t.forEach((function (n, o) {
                        a.set(o, le(n, e, i, o, t, s))
                    }));
                    l = h ? l ? Jn : Yn : l ? ho : lo;
                    var d = o ? B : l(t);
                    return n(d || t, (function (n, o) {
                        d && (n = t[o = n]), ne(a, o, le(n, e, i, o, t, s))
                    })), a
                }

                function he(t, e, n) {
                    var i = n.length;
                    if (null == t) return !i;
                    for (t = Mo(t); i--;) {
                        var o = n[i],
                            r = e[o],
                            s = t[o];
                        if (s === B && !(o in t) || !r(s)) return !1
                    }
                    return !0
                }

                function ce(t, e, n) {
                    if ("function" != typeof t) throw new Ao("Expected a function");
                    return Yr((function () {
                        t.apply(B, n)
                    }), e)
                }

                function fe(t, e, n, i) {
                    var o = -1,
                        r = s,
                        l = !0,
                        h = t.length,
                        c = [],
                        f = e.length;
                    if (!h) return c;
                    n && (e = u(e, P(n))), i ? (r = a, l = !1) : 200 <= e.length && (r = z, l = !1, e = new Nt(e));
                    t: for (; ++o < h;) {
                        var d = t[o],
                            p = null == n ? d : n(d);
                        d = i || 0 !== d ? d : 0;
                        if (l && p == p) {
                            for (var _ = f; _--;)
                                if (e[_] === p) continue t;
                            c.push(d)
                        } else r(e, p, i) || c.push(d)
                    }
                    return c
                }

                function de(t, e) {
                    var n = !0;
                    return Br(t, (function (t, i, o) {
                        return n = !!e(t, i, o)
                    })), n
                }

                function pe(t, e, n) {
                    for (var i = -1, o = t.length; ++i < o;) {
                        var r = t[i],
                            s = e(r);
                        if (null != s && (a === B ? s == s && !Qi(s) : n(s, a))) var a = s,
                            u = r
                    }
                    return u
                }

                function _e(t, e) {
                    var n = [];
                    return Br(t, (function (t, i, o) {
                        e(t, i, o) && n.push(t)
                    })), n
                }

                function me(t, e, n, i, o) {
                    var r = -1,
                        s = t.length;
                    for (n || (n = si), o || (o = []); ++r < s;) {
                        var a = t[r];
                        0 < e && n(a) ? 1 < e ? me(a, e - 1, n, i, o) : l(o, a) : i || (o[o.length] = a)
                    }
                    return o
                }

                function ge(t, e) {
                    return t && Rr(t, e, lo)
                }

                function ve(t, e) {
                    return t && Nr(t, e, lo)
                }

                function ye(t, e) {
                    return r(e, (function (e) {
                        return $i(t[e])
                    }))
                }

                function we(t, e) {
                    for (var n = 0, i = (e = dn(e, t)).length; null != t && n < i;) t = t[vi(e[n++])];
                    return n && n == i ? t : B
                }

                function xe(t, e, n) {
                    return e = e(t), Zs(t) ? e : l(e, n(t))
                }

                function be(t) {
                    if (null == t) t = t === B ? "[object Undefined]" : "[object Null]";
                    else if (er && er in Mo(t)) {
                        var e = Ro.call(t, er),
                            n = t[er];
                        try {
                            t[er] = B;
                            var i = !0
                        } catch (t) { }
                        var o = Wo.call(t);
                        i && (e ? t[er] = n : delete t[er]), t = o
                    } else t = Wo.call(t);
                    return t
                }

                function Le(t, e) {
                    return t > e
                }

                function Pe(t, e) {
                    return null != t && Ro.call(t, e)
                }

                function Te(t, e) {
                    return null != t && e in Mo(t)
                }

                function ze(t, e, n) {
                    for (var i = n ? a : s, o = t[0].length, r = t.length, l = r, h = To(r), c = 1 / 0, f = []; l--;) {
                        var d = t[l];
                        l && e && (d = u(d, P(e))), c = pr(d.length, c), h[l] = !n && (e || 120 <= o && 120 <= d.length) ? new Nt(l && d) : B
                    }
                    d = t[0];
                    var p = -1,
                        _ = h[0];
                    t: for (; ++p < o && f.length < c;) {
                        var m = d[p],
                            g = e ? e(m) : m;
                        m = n || 0 !== m ? m : 0;
                        if (_ ? !z(_, g) : !i(f, g, n)) {
                            for (l = r; --l;) {
                                var v = h[l];
                                if (v ? !z(v, g) : !i(t[l], g, n)) continue t
                            }
                            _ && _.push(g), f.push(m)
                        }
                    }
                    return f
                }

                function Ce(e, n, i) {
                    return null == (n = null == (e = 2 > (n = dn(n, e)).length ? e : we(e, Je(n, 0, -1))) ? e : e[vi(zi(n))]) ? B : t(n, e, i)
                }

                function ke(t) {
                    return Ki(t) && "[object Arguments]" == be(t)
                }

                function Se(t, e, n, i, o) {
                    if (t === e) e = !0;
                    else if (null == t || null == e || !Ki(t) && !Ki(e)) e = t != t && e != e;
                    else t: {
                        var r, s, a = Zs(t),
                            u = Zs(e),
                            l = "[object Object]" == (r = "[object Arguments]" == (r = a ? "[object Array]" : qr(t)) ? "[object Object]" : r); u = "[object Object]" == (s = "[object Arguments]" == (s = u ? "[object Array]" : qr(e)) ? "[object Object]" : s);
                        if ((s = r == s) && Ns(t)) {
                            if (!Ns(e)) {
                                e = !1;
                                break t
                            }
                            a = !0, l = !1
                        }
                        if (s && !l) o || (o = new Dt),
                            e = a || Us(t) ? Gn(t, e, n, i, Se, o) : function (t, e, n, i, o, r, s) {
                                switch (n) {
                                    case "[object DataView]":
                                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                                        t = t.buffer, e = e.buffer;
                                    case "[object ArrayBuffer]":
                                        if (t.byteLength != e.byteLength || !r(new qo(t), new qo(e))) break;
                                        return !0;
                                    case "[object Boolean]":
                                    case "[object Date]":
                                    case "[object Number]":
                                        return Wi(+t, +e);
                                    case "[object Error]":
                                        return t.name == e.name && t.message == e.message;
                                    case "[object RegExp]":
                                    case "[object String]":
                                        return t == e + "";
                                    case "[object Map]":
                                        var a = M;
                                    case "[object Set]":
                                        if (a || (a = A), t.size != e.size && !(1 & i)) break;
                                        return (n = s.get(t)) ? n == e : (i |= 2, s.set(t, e), e = Gn(a(t), a(e), i, o, r, s), s.delete(t), e);
                                    case "[object Symbol]":
                                        if (Ar) return Ar.call(t) == Ar.call(e)
                                }
                                return !1
                            }(t, e, r, n, i, Se, o);
                        else {
                            if (!(1 & n) && (a = l && Ro.call(t, "__wrapped__"), r = u && Ro.call(e, "__wrapped__"), a || r)) {
                                t = a ? t.value() : t, e = r ? e.value() : e, o || (o = new Dt), e = Se(t, e, n, i, o);
                                break t
                            }
                            if (s) e: if (o || (o = new Dt), a = 1 & n, r = Yn(t), u = r.length, s = Yn(e).length, u == s || a) {
                                for (l = u; l--;) {
                                    var h = r[l];
                                    if (!(a ? h in e : Ro.call(e, h))) {
                                        e = !1;
                                        break e
                                    }
                                }
                                if ((s = o.get(t)) && o.get(e)) e = s == e;
                                else {
                                    s = !0, o.set(t, e), o.set(e, t);
                                    for (var c = a; ++l < u;) {
                                        var f = t[h = r[l]],
                                            d = e[h];
                                        if (i) var p = a ? i(d, f, h, e, t, o) : i(f, d, h, t, e, o);
                                        if (p === B ? f !== d && !Se(f, d, n, i, o) : !p) {
                                            s = !1;
                                            break
                                        }
                                        c || (c = "constructor" == h)
                                    }
                                    s && !c && ((n = t.constructor) != (i = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) && (s = !1)), o.delete(t), o.delete(e), e = s
                                }
                            } else e = !1;
                            else e = !1
                        }
                    }
                    return e
                }

                function Me(t, e, n, i) {
                    var o = n.length,
                        r = o,
                        s = !i;
                    if (null == t) return !r;
                    for (t = Mo(t); o--;) {
                        var a = n[o];
                        if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                    }
                    for (; ++o < r;) {
                        var u = (a = n[o])[0],
                            l = t[u],
                            h = a[1];
                        if (s && a[2]) {
                            if (l === B && !(u in t)) return !1
                        } else {
                            if (a = new Dt, i) var c = i(l, h, u, t, e, a);
                            if (c === B ? !Se(h, l, 3, i, a) : !c) return !1
                        }
                    }
                    return !0
                }

                function Ee(t) {
                    return !(!Gi(t) || Do && Do in t) && ($i(t) ? Uo : dt).test(yi(t))
                }

                function Ie(t) {
                    return "function" == typeof t ? t : null == t ? vo : "object" == typeof t ? Zs(t) ? Ze(t[0], t[1]) : Be(t) : bo(t)
                }

                function Ae(t) {
                    if (!ci(t)) return fr(t);
                    var e, n = [];
                    for (e in Mo(t)) Ro.call(t, e) && "constructor" != e && n.push(e);
                    return n
                }

                function je(t, e) {
                    return t < e
                }

                function Oe(t, e) {
                    var n = -1,
                        i = Fi(t) ? To(t.length) : [];
                    return Br(t, (function (t, o, r) {
                        i[++n] = e(t, o, r)
                    })), i
                }

                function Be(t) {
                    var e = ni(t);
                    return 1 == e.length && e[0][2] ? fi(e[0][0], e[0][1]) : function (n) {
                        return n === t || Me(n, t, e)
                    }
                }

                function Ze(t, e) {
                    return li(t) && e == e && !Gi(e) ? fi(vi(t), e) : function (n) {
                        var i = ao(n, t);
                        return i === B && i === e ? uo(n, t) : Se(e, i, 3)
                    }
                }

                function Re(t, e, n, i, o) {
                    t !== e && Rr(e, (function (r, s) {
                        if (o || (o = new Dt), Gi(r)) {
                            var a = o,
                                u = pi(t, s),
                                l = pi(e, s);
                            if (p = a.get(l)) ee(t, s, p);
                            else {
                                var h = (p = i ? i(u, l, s + "", t, e, a) : B) === B;
                                if (h) {
                                    var c = Zs(l),
                                        f = !c && Ns(l),
                                        d = !c && !f && Us(l),
                                        p = l;
                                    c || f || d ? Zs(u) ? p = u : Hi(u) ? p = xn(u) : f ? (h = !1, p = _n(l, !0)) : d ? (h = !1, p = gn(l, !0)) : p = [] : Ji(l) || Bs(l) ? (p = u, Bs(u) ? p = ro(u) : Gi(u) && !$i(u) || (p = ri(l))) : h = !1
                                }
                                h && (a.set(l, p), Re(p, l, n, i, a), a.delete(l)), ee(t, s, p)
                            }
                        } else (a = i ? i(pi(t, s), r, s + "", t, e, o) : B) === B && (a = r), ee(t, s, a)
                    }), ho)
                }

                function Ne(t, e) {
                    var n = t.length;
                    if (n) return ai(e += 0 > e ? n : 0, n) ? t[e] : B
                }

                function De(t, e, n) {
                    var i = -1;
                    return e = u(e.length ? e : [vo], P(ti())),
                        function (t, e) {
                            var n = t.length;
                            for (t.sort(e); n--;) t[n] = t[n].c;
                            return t
                        }(t = Oe(t, (function (t) {
                            return {
                                a: u(e, (function (e) {
                                    return e(t)
                                })),
                                b: ++i,
                                c: t
                            }
                        })), (function (t, e) {
                            var i;
                            t: {
                                i = -1;
                                for (var o = t.a, r = e.a, s = o.length, a = n.length; ++i < s;) {
                                    var u = vn(o[i], r[i]);
                                    if (u) {
                                        i = i >= a ? u : u * ("desc" == n[i] ? -1 : 1);
                                        break t
                                    }
                                }
                                i = t.b - e.b
                            }
                            return i
                        }))
                }

                function We(t, e, n) {
                    for (var i = -1, o = e.length, r = {}; ++i < o;) {
                        var s = e[i],
                            a = we(t, s);
                        n(a, s) && Ke(r, dn(s, t), a)
                    }
                    return r
                }

                function Fe(t, e, n, i) {
                    var o = i ? m : _,
                        r = -1,
                        s = e.length,
                        a = t;
                    for (t === e && (e = xn(e)), n && (a = u(t, P(n))); ++r < s;) {
                        var l = 0,
                            h = e[r];
                        for (h = n ? n(h) : h; - 1 < (l = o(a, h, l, i));) a !== t && Xo.call(a, l, 1), Xo.call(t, l, 1)
                    }
                    return t
                }

                function He(t, e) {
                    for (var n = t ? e.length : 0, i = n - 1; n--;) {
                        var o = e[n];
                        if (n == i || o !== r) {
                            var r = o;
                            ai(o) ? Xo.call(t, o, 1) : sn(t, o)
                        }
                    }
                }

                function Ue(t, e) {
                    return t + ar(gr() * (e - t + 1))
                }

                function $e(t, e) {
                    var n = "";
                    if (!t || 1 > e || 9007199254740991 < e) return n;
                    do {
                        e % 2 && (n += t), (e = ar(e / 2)) && (t += t)
                    } while (e);
                    return n
                }

                function Ve(t, e) {
                    return Jr(di(t, e, vo), t + "")
                }

                function qe(t) {
                    return Xt(fo(t))
                }

                function Ge(t, e) {
                    var n = fo(t);
                    return gi(n, ue(e, 0, n.length))
                }

                function Ke(t, e, n, i) {
                    if (!Gi(t)) return t;
                    for (var o = -1, r = (e = dn(e, t)).length, s = r - 1, a = t; null != a && ++o < r;) {
                        var u = vi(e[o]),
                            l = n;
                        if (o != s) {
                            var h = a[u];
                            (l = i ? i(h, u, a) : B) === B && (l = Gi(h) ? h : ai(e[o + 1]) ? [] : {})
                        }
                        ne(a, u, l), a = a[u]
                    }
                    return t
                }

                function Ye(t) {
                    return gi(fo(t))
                }

                function Je(t, e, n) {
                    var i = -1,
                        o = t.length;
                    for (0 > e && (e = -e > o ? 0 : o + e), 0 > (n = n > o ? o : n) && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0, n = To(o); ++i < o;) n[i] = t[i + e];
                    return n
                }

                function Xe(t, e) {
                    var n;
                    return Br(t, (function (t, i, o) {
                        return !(n = e(t, i, o))
                    })), !!n
                }

                function Qe(t, e, n) {
                    var i = 0,
                        o = null == t ? i : t.length;
                    if ("number" == typeof e && e == e && 2147483647 >= o) {
                        for (; i < o;) {
                            var r = i + o >>> 1,
                                s = t[r];
                            null !== s && !Qi(s) && (n ? s <= e : s < e) ? i = r + 1 : o = r
                        }
                        return o
                    }
                    return tn(t, e, vo, n)
                }

                function tn(t, e, n, i) {
                    e = n(e);
                    for (var o = 0, r = null == t ? 0 : t.length, s = e != e, a = null === e, u = Qi(e), l = e === B; o < r;) {
                        var h = ar((o + r) / 2),
                            c = n(t[h]),
                            f = c !== B,
                            d = null === c,
                            p = c == c,
                            _ = Qi(c);
                        (s ? i || p : l ? p && (i || f) : a ? p && f && (i || !d) : u ? p && f && !d && (i || !_) : !d && !_ && (i ? c <= e : c < e)) ? o = h + 1 : r = h
                    }
                    return pr(r, 4294967294)
                }

                function en(t, e) {
                    for (var n = -1, i = t.length, o = 0, r = []; ++n < i;) {
                        var s = t[n],
                            a = e ? e(s) : s;
                        if (!n || !Wi(a, u)) {
                            var u = a;
                            r[o++] = 0 === s ? 0 : s
                        }
                    }
                    return r
                }

                function nn(t) {
                    return "number" == typeof t ? t : Qi(t) ? R : +t
                }

                function on(t) {
                    if ("string" == typeof t) return t;
                    if (Zs(t)) return u(t, on) + "";
                    if (Qi(t)) return jr ? jr.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -Z ? "-0" : e
                }

                function rn(t, e, n) {
                    var i = -1,
                        o = s,
                        r = t.length,
                        u = !0,
                        l = [],
                        h = l;
                    if (n) u = !1, o = a;
                    else if (200 <= r) {
                        if (o = e ? null : Hr(t)) return A(o);
                        u = !1, o = z, h = new Nt
                    } else h = e ? [] : l;
                    t: for (; ++i < r;) {
                        var c = t[i],
                            f = e ? e(c) : c;
                        c = n || 0 !== c ? c : 0;
                        if (u && f == f) {
                            for (var d = h.length; d--;)
                                if (h[d] === f) continue t;
                            e && h.push(f), l.push(c)
                        } else o(h, f, n) || (h !== l && h.push(f), l.push(c))
                    }
                    return l
                }

                function sn(t, e) {
                    return null == (t = 2 > (e = dn(e, t)).length ? t : we(t, Je(e, 0, -1))) || delete t[vi(zi(e))]
                }

                function an(t, e, n, i) {
                    for (var o = t.length, r = i ? o : -1;
                        (i ? r-- : ++r < o) && e(t[r], r, t););
                    return n ? Je(t, i ? 0 : r, i ? r + 1 : o) : Je(t, i ? r + 1 : 0, i ? o : r)
                }

                function un(t, e) {
                    var n = t;
                    return n instanceof At && (n = n.value()), h(e, (function (t, e) {
                        return e.func.apply(e.thisArg, l([t], e.args))
                    }), n)
                }

                function ln(t, e, n) {
                    var i = t.length;
                    if (2 > i) return i ? rn(t[0]) : [];
                    for (var o = -1, r = To(i); ++o < i;)
                        for (var s = t[o], a = -1; ++a < i;) a != o && (r[o] = fe(r[o] || s, t[a], e, n));
                    return rn(me(r, 1), e, n)
                }

                function hn(t, e, n) {
                    for (var i = -1, o = t.length, r = e.length, s = {}; ++i < o;) n(s, t[i], i < r ? e[i] : B);
                    return s
                }

                function cn(t) {
                    return Hi(t) ? t : []
                }

                function fn(t) {
                    return "function" == typeof t ? t : vo
                }

                function dn(t, e) {
                    return Zs(t) ? t : li(t, e) ? [t] : Xr(so(t))
                }

                function pn(t, e, n) {
                    var i = t.length;
                    return n = n === B ? i : n, !e && n >= i ? t : Je(t, e, n)
                }

                function _n(t, e) {
                    if (e) return t.slice();
                    var n = t.length;
                    n = Go ? Go(n) : new t.constructor(n);
                    return t.copy(n), n
                }

                function mn(t) {
                    var e = new t.constructor(t.byteLength);
                    return new qo(e).set(new qo(t)), e
                }

                function gn(t, e) {
                    return new t.constructor(e ? mn(t.buffer) : t.buffer, t.byteOffset, t.length)
                }

                function vn(t, e) {
                    if (t !== e) {
                        var n = t !== B,
                            i = null === t,
                            o = t == t,
                            r = Qi(t),
                            s = e !== B,
                            a = null === e,
                            u = e == e,
                            l = Qi(e);
                        if (!a && !l && !r && t > e || r && s && u && !a && !l || i && s && u || !n && u || !o) return 1;
                        if (!i && !r && !l && t < e || l && n && o && !i && !r || a && n && o || !s && o || !u) return -1
                    }
                    return 0
                }

                function yn(t, e, n, i) {
                    var o = -1,
                        r = t.length,
                        s = n.length,
                        a = -1,
                        u = e.length,
                        l = dr(r - s, 0),
                        h = To(u + l);
                    for (i = !i; ++a < u;) h[a] = e[a];
                    for (; ++o < s;)(i || o < r) && (h[n[o]] = t[o]);
                    for (; l--;) h[a++] = t[o++];
                    return h
                }

                function wn(t, e, n, i) {
                    var o = -1,
                        r = t.length,
                        s = -1,
                        a = n.length,
                        u = -1,
                        l = e.length,
                        h = dr(r - a, 0),
                        c = To(h + l);
                    for (i = !i; ++o < h;) c[o] = t[o];
                    for (h = o; ++u < l;) c[h + u] = e[u];
                    for (; ++s < a;)(i || o < r) && (c[h + n[s]] = t[o++]);
                    return c
                }

                function xn(t, e) {
                    var n = -1,
                        i = t.length;
                    for (e || (e = To(i)); ++n < i;) e[n] = t[n];
                    return e
                }

                function bn(t, e, n, i) {
                    var o = !n;
                    n || (n = {});
                    for (var r = -1, s = e.length; ++r < s;) {
                        var a = e[r],
                            u = i ? i(n[a], t[a], a, n, t) : B;
                        u === B && (u = t[a]), o ? se(n, a, u) : ne(n, a, u)
                    }
                    return n
                }

                function Ln(t, n) {
                    return function (i, o) {
                        var r = Zs(i) ? e : oe,
                            s = n ? n() : {};
                        return r(i, t, ti(o, 2), s)
                    }
                }

                function Pn(t) {
                    return Ve((function (e, n) {
                        var i = -1,
                            o = n.length,
                            r = 1 < o ? n[o - 1] : B,
                            s = 2 < o ? n[2] : B;
                        r = 3 < t.length && "function" == typeof r ? (o--, r) : B;
                        for (s && ui(n[0], n[1], s) && (r = 3 > o ? B : r, o = 1), e = Mo(e); ++i < o;)(s = n[i]) && t(e, s, i, r);
                        return e
                    }))
                }

                function Tn(t, e) {
                    return function (n, i) {
                        if (null == n) return n;
                        if (!Fi(n)) return t(n, i);
                        for (var o = n.length, r = e ? o : -1, s = Mo(n);
                            (e ? r-- : ++r < o) && !1 !== i(s[r], r, s););
                        return n
                    }
                }

                function zn(t) {
                    return function (e, n, i) {
                        for (var o = -1, r = Mo(e), s = (i = i(e)).length; s--;) {
                            var a = i[t ? s : ++o];
                            if (!1 === n(r[a], a, r)) break
                        }
                        return e
                    }
                }

                function Cn(t) {
                    return function (e) {
                        e = so(e);
                        var n = Tt.test(e) ? O(e) : B,
                            i = n ? n[0] : e.charAt(0);
                        return e = n ? pn(n, 1).join("") : e.slice(1), i[t]() + e
                    }
                }

                function kn(t) {
                    return function (e) {
                        return h(mo(_o(e).replace(xt, "")), t, "")
                    }
                }

                function Sn(t) {
                    return function () {
                        switch ((e = arguments).length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var e, n = Or(t.prototype);
                        return Gi(e = t.apply(n, e)) ? e : n
                    }
                }

                function Mn(e, n, i) {
                    var o = Sn(e);
                    return function r() {
                        for (var s = arguments.length, a = To(s), u = s, l = Qn(r); u--;) a[u] = arguments[u];
                        return (s -= (u = 3 > s && a[0] !== l && a[s - 1] !== l ? [] : I(a, l)).length) < i ? Wn(e, n, An, r.placeholder, B, a, u, B, B, i - s) : t(this && this !== Ot && this instanceof r ? o : e, this, a)
                    }
                }

                function En(t) {
                    return function (e, n, i) {
                        var o = Mo(e);
                        if (!Fi(e)) {
                            var r = ti(n, 3);
                            e = lo(e), n = function (t) {
                                return r(o[t], t, o)
                            }
                        }
                        return -1 < (n = t(e, n, i)) ? o[r ? e[n] : n] : B
                    }
                }

                function In(t) {
                    return Kn((function (e) {
                        var n = e.length,
                            i = n,
                            o = Mt.prototype.thru;
                        for (t && e.reverse(); i--;) {
                            if ("function" != typeof (s = e[i])) throw new Ao("Expected a function");
                            if (o && !r && "wrapper" == Xn(s)) var r = new Mt([], !0)
                        }
                        for (i = r ? i : n; ++i < n;) {
                            var s, a = "wrapper" == (o = Xn(s = e[i])) ? Ur(s) : B;
                            r = a && hi(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9] ? r[Xn(a[0])].apply(r, a[3]) : 1 == s.length && hi(s) ? r[o]() : r.thru(s)
                        }
                        return function () {
                            var t = (o = arguments)[0];
                            if (r && 1 == o.length && Zs(t)) return r.plant(t).value();
                            for (var i = 0, o = n ? e[i].apply(this, o) : t; ++i < n;) o = e[i].call(this, o);
                            return o
                        }
                    }))
                }

                function An(t, e, n, i, o, r, s, a, u, l) {
                    var h = 128 & e,
                        c = 1 & e,
                        f = 2 & e,
                        d = 24 & e,
                        p = 512 & e,
                        _ = f ? B : Sn(t);
                    return function m() {
                        for (var g = arguments.length, v = To(g), y = g; y--;) v[y] = arguments[y];
                        if (d) {
                            var w, x = Qn(m);
                            y = v.length;
                            for (w = 0; y--;) v[y] === x && ++w
                        }
                        if (i && (v = yn(v, i, o, d)), r && (v = wn(v, r, s, d)), g -= w, d && g < l) return x = I(v, x), Wn(t, e, An, m.placeholder, n, v, x, a, u, l - g);
                        if (x = c ? n : this, y = f ? x[t] : t, g = v.length, a) {
                            w = v.length;
                            for (var b = pr(a.length, w), L = xn(v); b--;) {
                                var P = a[b];
                                v[b] = ai(P, w) ? L[P] : B
                            }
                        } else p && 1 < g && v.reverse();
                        return h && u < g && (v.length = u), this && this !== Ot && this instanceof m && (y = _ || Sn(y)), y.apply(x, v)
                    }
                }

                function jn(t, e) {
                    return function (n, i) {
                        return function (t, e, n) {
                            var i = {};
                            return ge(t, (function (t, o, r) {
                                e(i, n(t), o, r)
                            })), i
                        }(n, t, e(i))
                    }
                }

                function On(t, e) {
                    return function (n, i) {
                        var o;
                        if (n === B && i === B) return e;
                        if (n !== B && (o = n), i !== B) {
                            if (o === B) return i;
                            "string" == typeof n || "string" == typeof i ? (n = on(n), i = on(i)) : (n = nn(n), i = nn(i)), o = t(n, i)
                        }
                        return o
                    }
                }

                function Bn(e) {
                    return Kn((function (n) {
                        return n = u(n, P(ti())), Ve((function (i) {
                            var o = this;
                            return e(n, (function (e) {
                                return t(e, o, i)
                            }))
                        }))
                    }))
                }

                function Zn(t, e) {
                    var n = (e = e === B ? " " : on(e)).length;
                    return 2 > n ? n ? $e(e, t) : e : (n = $e(e, sr(t / j(e))), Tt.test(e) ? pn(O(n), 0, t).join("") : n.slice(0, t))
                }

                function Rn(e, n, i, o) {
                    var r = 1 & n,
                        s = Sn(e);
                    return function n() {
                        for (var a = -1, u = arguments.length, l = -1, h = o.length, c = To(h + u), f = this && this !== Ot && this instanceof n ? s : e; ++l < h;) c[l] = o[l];
                        for (; u--;) c[l++] = arguments[++a];
                        return t(f, r ? i : this, c)
                    }
                }

                function Nn(t) {
                    return function (e, n, i) {
                        i && "number" != typeof i && ui(e, n, i) && (n = i = B), e = eo(e), n === B ? (n = e, e = 0) : n = eo(n), i = i === B ? e < n ? 1 : -1 : eo(i);
                        var o = -1;
                        n = dr(sr((n - e) / (i || 1)), 0);
                        for (var r = To(n); n--;) r[t ? n : ++o] = e, e += i;
                        return r
                    }
                }

                function Dn(t) {
                    return function (e, n) {
                        return "string" == typeof e && "string" == typeof n || (e = oo(e), n = oo(n)), t(e, n)
                    }
                }

                function Wn(t, e, n, i, o, r, s, a, u, l) {
                    var h = 8 & e;
                    return 4 & (e = (e | (h ? 32 : 64)) & ~(h ? 64 : 32)) || (e &= -4), o = [t, e, o, h ? r : B, h ? s : B, r = h ? B : r, s = h ? B : s, a, u, l], n = n.apply(B, o), hi(t) && Kr(n, o), n.placeholder = i, _i(n, t, e)
                }

                function Fn(t) {
                    var e = So[t];
                    return function (t, n) {
                        if (t = oo(t), (n = null == n ? 0 : pr(no(n), 292)) && hr(t)) {
                            var i = (so(t) + "e").split("e");
                            return +((i = (so(i = e(i[0] + "e" + (+i[1] + n))) + "e").split("e"))[0] + "e" + (+i[1] - n))
                        }
                        return e(t)
                    }
                }

                function Hn(t) {
                    return function (e) {
                        var n = qr(e);
                        return "[object Map]" == n ? M(e) : "[object Set]" == n ? function (t) {
                            var e = -1,
                                n = Array(t.size);
                            return t.forEach((function (t) {
                                n[++e] = [t, t]
                            })), n
                        }(e) : function (t, e) {
                            return u(e, (function (e) {
                                return [e, t[e]]
                            }))
                        }(e, t(e))
                    }
                }

                function Un(t, e, n, i, o, r, s, a) {
                    var u = 2 & e;
                    if (!u && "function" != typeof t) throw new Ao("Expected a function");
                    var l = i ? i.length : 0;
                    if (l || (e &= -97, i = o = B), s = s === B ? s : dr(no(s), 0), a = a === B ? a : no(a), l -= o ? o.length : 0, 64 & e) {
                        var h = i,
                            c = o;
                        i = o = B
                    }
                    var f = u ? B : Ur(t);
                    return r = [t, e, n, i, o, h, c, r, s, a], f && (e = (n = r[1]) | (t = f[1]), i = 128 == t && 8 == n || 128 == t && 256 == n && r[7].length <= f[8] || 384 == t && f[7].length <= f[8] && 8 == n, 131 > e || i) && (1 & t && (r[2] = f[2], e |= 1 & n ? 0 : 4), (n = f[3]) && (i = r[3], r[3] = i ? yn(i, n, f[4]) : n, r[4] = i ? I(r[3], "__lodash_placeholder__") : f[4]), (n = f[5]) && (i = r[5], r[5] = i ? wn(i, n, f[6]) : n, r[6] = i ? I(r[5], "__lodash_placeholder__") : f[6]), (n = f[7]) && (r[7] = n), 128 & t && (r[8] = null == r[8] ? f[8] : pr(r[8], f[8])), null == r[9] && (r[9] = f[9]), r[0] = f[0], r[1] = e), t = r[0], e = r[1], n = r[2], i = r[3], o = r[4], !(a = r[9] = r[9] === B ? u ? 0 : t.length : dr(r[9] - l, 0)) && 24 & e && (e &= -25), _i((f ? Dr : Kr)(e && 1 != e ? 8 == e || 16 == e ? Mn(t, e, a) : 32 != e && 33 != e || o.length ? An.apply(B, r) : Rn(t, e, n, i) : function (t, e, n) {
                        var i = 1 & e,
                            o = Sn(t);
                        return function e() {
                            return (this && this !== Ot && this instanceof e ? o : t).apply(i ? n : this, arguments)
                        }
                    }(t, e, n), r), t, e)
                }

                function $n(t, e, n, i) {
                    return t === B || Wi(t, Oo[n]) && !Ro.call(i, n) ? e : t
                }

                function Vn(t, e, n, i, o, r) {
                    return Gi(t) && Gi(e) && (r.set(e, t), Re(t, e, B, Vn, r), r.delete(e)), t
                }

                function qn(t) {
                    return Ji(t) ? B : t
                }

                function Gn(t, e, n, i, o, r) {
                    var s = 1 & n,
                        a = t.length;
                    if (a != (u = e.length) && !(s && u > a)) return !1;
                    if ((u = r.get(t)) && r.get(e)) return u == e;
                    var u = -1,
                        l = !0,
                        h = 2 & n ? new Nt : B;
                    for (r.set(t, e), r.set(e, t); ++u < a;) {
                        var c = t[u],
                            d = e[u];
                        if (i) var p = s ? i(d, c, u, e, t, r) : i(c, d, u, t, e, r);
                        if (p !== B) {
                            if (p) continue;
                            l = !1;
                            break
                        }
                        if (h) {
                            if (!f(e, (function (t, e) {
                                if (!z(h, e) && (c === t || o(c, t, n, i, r))) return h.push(e)
                            }))) {
                                l = !1;
                                break
                            }
                        } else if (c !== d && !o(c, d, n, i, r)) {
                            l = !1;
                            break
                        }
                    }
                    return r.delete(t), r.delete(e), l
                }

                function Kn(t) {
                    return Jr(di(t, B, Pi), t + "")
                }

                function Yn(t) {
                    return xe(t, lo, $r)
                }

                function Jn(t) {
                    return xe(t, ho, Vr)
                }

                function Xn(t) {
                    for (var e = t.name + "", n = zr[e], i = Ro.call(zr, e) ? n.length : 0; i--;) {
                        var o = n[i],
                            r = o.func;
                        if (null == r || r == t) return o.name
                    }
                    return e
                }

                function Qn(t) {
                    return (Ro.call(wt, "placeholder") ? wt : t).placeholder
                }

                function ti() {
                    var t = (t = wt.iteratee || yo) === yo ? Ie : t;
                    return arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function ei(t, e) {
                    var n = t.__data__,
                        i = typeof e;
                    return ("string" == i || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== e : null === e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }

                function ni(t) {
                    for (var e = lo(t), n = e.length; n--;) {
                        var i = e[n],
                            o = t[i];
                        e[n] = [i, o, o == o && !Gi(o)]
                    }
                    return e
                }

                function ii(t, e) {
                    var n = null == t ? B : t[e];
                    return Ee(n) ? n : B
                }

                function oi(t, e, n) {
                    for (var i = -1, o = (e = dn(e, t)).length, r = !1; ++i < o;) {
                        var s = vi(e[i]);
                        if (!(r = null != t && n(t, s))) break;
                        t = t[s]
                    }
                    return r || ++i != o ? r : !!(o = null == t ? 0 : t.length) && qi(o) && ai(s, o) && (Zs(t) || Bs(t))
                }

                function ri(t) {
                    return "function" != typeof t.constructor || ci(t) ? {} : Or(Ko(t))
                }

                function si(t) {
                    return Zs(t) || Bs(t) || !!(Qo && t && t[Qo])
                }

                function ai(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && _t.test(t)) && -1 < t && 0 == t % 1 && t < e
                }

                function ui(t, e, n) {
                    if (!Gi(n)) return !1;
                    var i = typeof e;
                    return !!("number" == i ? Fi(n) && ai(e, n.length) : "string" == i && e in n) && Wi(n[e], t)
                }

                function li(t, e) {
                    if (Zs(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Qi(t)) || J.test(t) || !Y.test(t) || null != e && t in Mo(e)
                }

                function hi(t) {
                    var e = Xn(t),
                        n = wt[e];
                    return "function" == typeof n && e in At.prototype && (t === n || !!(e = Ur(n)) && t === e[0])
                }

                function ci(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || Oo)
                }

                function fi(t, e) {
                    return function (n) {
                        return null != n && n[t] === e && (e !== B || t in Mo(n))
                    }
                }

                function di(e, n, i) {
                    return n = dr(n === B ? e.length - 1 : n, 0),
                        function () {
                            for (var o = arguments, r = -1, s = dr(o.length - n, 0), a = To(s); ++r < s;) a[r] = o[n + r];
                            for (r = -1, s = To(n + 1); ++r < n;) s[r] = o[r];
                            return s[n] = i(a), t(e, this, s)
                        }
                }

                function pi(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }

                function _i(t, e, n) {
                    var i = e + "";
                    e = Jr;
                    var o, r = wi;
                    return n = r(o = (o = i.match(rt)) ? o[1].split(st) : [], n), (r = n.length) && (n[o = r - 1] = (1 < r ? "& " : "") + n[o], n = n.join(2 < r ? ", " : " "), i = i.replace(ot, "{\n/* [wrapped with " + n + "] */\n")), e(t, i)
                }

                function mi(t) {
                    var e = 0,
                        n = 0;
                    return function () {
                        var i = _r(),
                            o = 16 - (i - n);
                        if (n = i, 0 < o) {
                            if (800 <= ++e) return arguments[0]
                        } else e = 0;
                        return t.apply(B, arguments)
                    }
                }

                function gi(t, e) {
                    var n = -1,
                        i = (o = t.length) - 1;
                    for (e = e === B ? o : e; ++n < e;) {
                        var o, r = t[o = Ue(n, i)];
                        t[o] = t[n], t[n] = r
                    }
                    return t.length = e, t
                }

                function vi(t) {
                    if ("string" == typeof t || Qi(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -Z ? "-0" : e
                }

                function yi(t) {
                    if (null != t) {
                        try {
                            return Zo.call(t)
                        } catch (t) { }
                        return t + ""
                    }
                    return ""
                }

                function wi(t, e) {
                    return n(N, (function (n) {
                        var i = "_." + n[0];
                        e & n[1] && !s(t, i) && t.push(i)
                    })), t.sort()
                }

                function xi(t) {
                    if (t instanceof At) return t.clone();
                    var e = new Mt(t.__wrapped__, t.__chain__);
                    return e.__actions__ = xn(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                }

                function bi(t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? (0 > (n = null == n ? 0 : no(n)) && (n = dr(i + n, 0)), p(t, ti(e, 3), n)) : -1
                }

                function Li(t, e, n) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var o = i - 1;
                    return n !== B && (o = no(n), o = 0 > n ? dr(i + o, 0) : pr(o, i - 1)), p(t, ti(e, 3), o, !0)
                }

                function Pi(t) {
                    return null != t && t.length ? me(t, 1) : []
                }

                function Ti(t) {
                    return t && t.length ? t[0] : B
                }

                function zi(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : B
                }

                function Ci(t, e) {
                    return t && t.length && e && e.length ? Fe(t, e) : t
                }

                function ki(t) {
                    return null == t ? t : vr.call(t)
                }

                function Si(t) {
                    if (!t || !t.length) return [];
                    var e = 0;
                    return t = r(t, (function (t) {
                        if (Hi(t)) return e = dr(t.length, e), !0
                    })), L(e, (function (e) {
                        return u(t, y(e))
                    }))
                }

                function Mi(e, n) {
                    if (!e || !e.length) return [];
                    var i = Si(e);
                    return null == n ? i : u(i, (function (e) {
                        return t(n, B, e)
                    }))
                }

                function Ei(t) {
                    return (t = wt(t)).__chain__ = !0, t
                }

                function Ii(t, e) {
                    return e(t)
                }

                function Ai(t, e) {
                    return (Zs(t) ? n : Br)(t, ti(e, 3))
                }

                function ji(t, e) {
                    return (Zs(t) ? i : Zr)(t, ti(e, 3))
                }

                function Oi(t, e) {
                    return (Zs(t) ? u : Oe)(t, ti(e, 3))
                }

                function Bi(t, e, n) {
                    return e = n ? B : e, e = t && null == e ? t.length : e, Un(t, 128, B, B, B, B, e)
                }

                function Zi(t, e) {
                    var n;
                    if ("function" != typeof e) throw new Ao("Expected a function");
                    return t = no(t),
                        function () {
                            return 0 < --t && (n = e.apply(this, arguments)), 1 >= t && (e = B), n
                        }
                }

                function Ri(t, e, n) {
                    function i(e) {
                        var n = u,
                            i = l;
                        return u = l = B, p = e, c = t.apply(i, n)
                    }

                    function o(t) {
                        var n = t - d;
                        return t -= p, d === B || n >= e || 0 > n || m && t >= h
                    }

                    function r() {
                        var t = Ts();
                        if (o(t)) return s(t);
                        var n, i = Yr;
                        n = t - p, t = e - (t - d), n = m ? pr(t, h - n) : t, f = i(r, n)
                    }

                    function s(t) {
                        return f = B, g && u ? i(t) : (u = l = B, c)
                    }

                    function a() {
                        var t = Ts(),
                            n = o(t);
                        if (u = arguments, l = this, d = t, n) {
                            if (f === B) return p = t = d, f = Yr(r, e), _ ? i(t) : c;
                            if (m) return Fr(f), f = Yr(r, e), i(d)
                        }
                        return f === B && (f = Yr(r, e)), c
                    }
                    var u, l, h, c, f, d, p = 0,
                        _ = !1,
                        m = !1,
                        g = !0;
                    if ("function" != typeof t) throw new Ao("Expected a function");
                    return e = oo(e) || 0, Gi(n) && (_ = !!n.leading, h = (m = "maxWait" in n) ? dr(oo(n.maxWait) || 0, e) : h, g = "trailing" in n ? !!n.trailing : g), a.cancel = function () {
                        f !== B && Fr(f), p = 0, u = d = l = f = B
                    }, a.flush = function () {
                        return f === B ? c : s(Ts())
                    }, a
                }

                function Ni(t, e) {
                    function n() {
                        var i = arguments,
                            o = e ? e.apply(this, i) : i[0],
                            r = n.cache;
                        return r.has(o) ? r.get(o) : (i = t.apply(this, i), n.cache = r.set(o, i) || r, i)
                    }
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new Ao("Expected a function");
                    return n.cache = new (Ni.Cache || Zt), n
                }

                function Di(t) {
                    if ("function" != typeof t) throw new Ao("Expected a function");
                    return function () {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                        }
                        return !t.apply(this, e)
                    }
                }

                function Wi(t, e) {
                    return t === e || t != t && e != e
                }

                function Fi(t) {
                    return null != t && qi(t.length) && !$i(t)
                }

                function Hi(t) {
                    return Ki(t) && Fi(t)
                }

                function Ui(t) {
                    if (!Ki(t)) return !1;
                    var e = be(t);
                    return "[object Error]" == e || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Ji(t)
                }

                function $i(t) {
                    return !!Gi(t) && ("[object Function]" == (t = be(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t)
                }

                function Vi(t) {
                    return "number" == typeof t && t == no(t)
                }

                function qi(t) {
                    return "number" == typeof t && -1 < t && 0 == t % 1 && 9007199254740991 >= t
                }

                function Gi(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Ki(t) {
                    return null != t && "object" == typeof t
                }

                function Yi(t) {
                    return "number" == typeof t || Ki(t) && "[object Number]" == be(t)
                }

                function Ji(t) {
                    return !(!Ki(t) || "[object Object]" != be(t)) && (null === (t = Ko(t)) || "function" == typeof (t = Ro.call(t, "constructor") && t.constructor) && t instanceof t && Zo.call(t) == Fo)
                }

                function Xi(t) {
                    return "string" == typeof t || !Zs(t) && Ki(t) && "[object String]" == be(t)
                }

                function Qi(t) {
                    return "symbol" == typeof t || Ki(t) && "[object Symbol]" == be(t)
                }

                function to(t) {
                    if (!t) return [];
                    if (Fi(t)) return Xi(t) ? O(t) : xn(t);
                    if (tr && t[tr]) {
                        t = t[tr]();
                        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                        return n
                    }
                    return ("[object Map]" == (e = qr(t)) ? M : "[object Set]" == e ? A : fo)(t)
                }

                function eo(t) {
                    return t ? (t = oo(t)) === Z || t === -Z ? 17976931348623157e292 * (0 > t ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                }

                function no(t) {
                    var e = (t = eo(t)) % 1;
                    return t == t ? e ? t - e : t : 0
                }

                function io(t) {
                    return t ? ue(no(t), 0, 4294967295) : 0
                }

                function oo(t) {
                    if ("number" == typeof t) return t;
                    if (Qi(t)) return R;
                    if (Gi(t) && (t = Gi(t = "function" == typeof t.valueOf ? t.valueOf() : t) ? t + "" : t), "string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(et, "");
                    var e = ft.test(t);
                    return e || pt.test(t) ? It(t.slice(2), e ? 2 : 8) : ct.test(t) ? R : +t
                }

                function ro(t) {
                    return bn(t, ho(t))
                }

                function so(t) {
                    return null == t ? "" : on(t)
                }

                function ao(t, e, n) {
                    return (t = null == t ? B : we(t, e)) === B ? n : t
                }

                function uo(t, e) {
                    return null != t && oi(t, e, Te)
                }

                function lo(t) {
                    return Fi(t) ? qt(t) : Ae(t)
                }

                function ho(t) {
                    if (Fi(t)) t = qt(t, !0);
                    else if (Gi(t)) {
                        var e, n = ci(t),
                            i = [];
                        for (e in t) ("constructor" != e || !n && Ro.call(t, e)) && i.push(e);
                        t = i
                    } else {
                        if (e = [], null != t)
                            for (n in Mo(t)) e.push(n);
                        t = e
                    }
                    return t
                }

                function co(t, e) {
                    if (null == t) return {};
                    var n = u(Jn(t), (function (t) {
                        return [t]
                    }));
                    return e = ti(e), We(t, n, (function (t, n) {
                        return e(t, n[0])
                    }))
                }

                function fo(t) {
                    return null == t ? [] : T(t, lo(t))
                }

                function po(t) {
                    return ma(so(t).toLowerCase())
                }

                function _o(t) {
                    return (t = so(t)) && t.replace(mt, Gt).replace(bt, "")
                }

                function mo(t, e, n) {
                    return t = so(t), (e = n ? B : e) === B ? zt.test(t) ? t.match(Pt) || [] : t.match(at) || [] : t.match(e) || []
                }

                function go(t) {
                    return function () {
                        return t
                    }
                }

                function vo(t) {
                    return t
                }

                function yo(t) {
                    return Ie("function" == typeof t ? t : le(t, 1))
                }

                function wo(t, e, i) {
                    var o = lo(e),
                        r = ye(e, o);
                    null != i || Gi(e) && (r.length || !o.length) || (i = e, e = t, t = this, r = ye(e, lo(e)));
                    var s = !(Gi(i) && "chain" in i && !i.chain),
                        a = $i(t);
                    return n(r, (function (n) {
                        var i = e[n];
                        t[n] = i, a && (t.prototype[n] = function () {
                            var e = this.__chain__;
                            if (s || e) {
                                var n = t(this.__wrapped__);
                                return (n.__actions__ = xn(this.__actions__)).push({
                                    func: i,
                                    args: arguments,
                                    thisArg: t
                                }), n.__chain__ = e, n
                            }
                            return i.apply(t, l([this.value()], arguments))
                        })
                    })), t
                }

                function xo() { }

                function bo(t) {
                    return li(t) ? y(vi(t)) : function (t) {
                        return function (e) {
                            return we(e, t)
                        }
                    }(t)
                }

                function Lo() {
                    return []
                }

                function Po() {
                    return !1
                }
                var To = (yt = null == yt ? Ot : Jt.defaults(Ot.Object(), yt, Jt.pick(Ot, Ct))).Array,
                    zo = yt.Date,
                    Co = yt.Error,
                    ko = yt.Function,
                    So = yt.Math,
                    Mo = yt.Object,
                    Eo = yt.RegExp,
                    Io = yt.String,
                    Ao = yt.TypeError,
                    jo = To.prototype,
                    Oo = Mo.prototype,
                    Bo = yt["__core-js_shared__"],
                    Zo = ko.prototype.toString,
                    Ro = Oo.hasOwnProperty,
                    No = 0,
                    Do = function () {
                        var t = /[^.]+$/.exec(Bo && Bo.keys && Bo.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }(),
                    Wo = Oo.toString,
                    Fo = Zo.call(Mo),
                    Ho = Ot._,
                    Uo = Eo("^" + Zo.call(Ro).replace(Q, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    $o = Rt ? yt.Buffer : B,
                    Vo = yt.Symbol,
                    qo = yt.Uint8Array,
                    Go = $o ? $o.g : B,
                    Ko = E(Mo.getPrototypeOf, Mo),
                    Yo = Mo.create,
                    Jo = Oo.propertyIsEnumerable,
                    Xo = jo.splice,
                    Qo = Vo ? Vo.isConcatSpreadable : B,
                    tr = Vo ? Vo.iterator : B,
                    er = Vo ? Vo.toStringTag : B,
                    nr = function () {
                        try {
                            var t = ii(Mo, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) { }
                    }(),
                    ir = yt.clearTimeout !== Ot.clearTimeout && yt.clearTimeout,
                    or = zo && zo.now !== Ot.Date.now && zo.now,
                    rr = yt.setTimeout !== Ot.setTimeout && yt.setTimeout,
                    sr = So.ceil,
                    ar = So.floor,
                    ur = Mo.getOwnPropertySymbols,
                    lr = $o ? $o.isBuffer : B,
                    hr = yt.isFinite,
                    cr = jo.join,
                    fr = E(Mo.keys, Mo),
                    dr = So.max,
                    pr = So.min,
                    _r = zo.now,
                    mr = yt.parseInt,
                    gr = So.random,
                    vr = jo.reverse,
                    yr = ii(yt, "DataView"),
                    wr = ii(yt, "Map"),
                    xr = ii(yt, "Promise"),
                    br = ii(yt, "Set"),
                    Lr = ii(yt, "WeakMap"),
                    Pr = ii(Mo, "create"),
                    Tr = Lr && new Lr,
                    zr = {},
                    Cr = yi(yr),
                    kr = yi(wr),
                    Sr = yi(xr),
                    Mr = yi(br),
                    Er = yi(Lr),
                    Ir = Vo ? Vo.prototype : B,
                    Ar = Ir ? Ir.valueOf : B,
                    jr = Ir ? Ir.toString : B,
                    Or = function () {
                        function t() { }
                        return function (e) {
                            return Gi(e) ? Yo ? Yo(e) : (t.prototype = e, e = new t, t.prototype = B, e) : {}
                        }
                    }();
                wt.templateSettings = {
                    escape: q,
                    evaluate: G,
                    interpolate: K,
                    variable: "",
                    imports: {
                        _: wt
                    }
                }, wt.prototype = Lt.prototype, wt.prototype.constructor = wt, Mt.prototype = Or(Lt.prototype), Mt.prototype.constructor = Mt, At.prototype = Or(Lt.prototype), At.prototype.constructor = At, jt.prototype.clear = function () {
                    this.__data__ = Pr ? Pr(null) : {}, this.size = 0
                }, jt.prototype.delete = function (t) {
                    return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t
                }, jt.prototype.get = function (t) {
                    var e = this.__data__;
                    return Pr ? "__lodash_hash_undefined__" === (t = e[t]) ? B : t : Ro.call(e, t) ? e[t] : B
                }, jt.prototype.has = function (t) {
                    var e = this.__data__;
                    return Pr ? e[t] !== B : Ro.call(e, t)
                }, jt.prototype.set = function (t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = Pr && e === B ? "__lodash_hash_undefined__" : e, this
                }, Bt.prototype.clear = function () {
                    this.__data__ = [], this.size = 0
                }, Bt.prototype.delete = function (t) {
                    var e = this.__data__;
                    return !(0 > (t = ie(e, t)) || (t == e.length - 1 ? e.pop() : Xo.call(e, t, 1), --this.size, 0))
                }, Bt.prototype.get = function (t) {
                    var e = this.__data__;
                    return 0 > (t = ie(e, t)) ? B : e[t][1]
                }, Bt.prototype.has = function (t) {
                    return -1 < ie(this.__data__, t)
                }, Bt.prototype.set = function (t, e) {
                    var n = this.__data__,
                        i = ie(n, t);
                    return 0 > i ? (++this.size, n.push([t, e])) : n[i][1] = e, this
                }, Zt.prototype.clear = function () {
                    this.size = 0, this.__data__ = {
                        hash: new jt,
                        map: new (wr || Bt),
                        string: new jt
                    }
                }, Zt.prototype.delete = function (t) {
                    return t = ei(this, t).delete(t), this.size -= t ? 1 : 0, t
                }, Zt.prototype.get = function (t) {
                    return ei(this, t).get(t)
                }, Zt.prototype.has = function (t) {
                    return ei(this, t).has(t)
                }, Zt.prototype.set = function (t, e) {
                    var n = ei(this, t),
                        i = n.size;
                    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
                }, Nt.prototype.add = Nt.prototype.push = function (t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"), this
                }, Nt.prototype.has = function (t) {
                    return this.__data__.has(t)
                }, Dt.prototype.clear = function () {
                    this.__data__ = new Bt, this.size = 0
                }, Dt.prototype.delete = function (t) {
                    var e = this.__data__;
                    return t = e.delete(t), this.size = e.size, t
                }, Dt.prototype.get = function (t) {
                    return this.__data__.get(t)
                }, Dt.prototype.has = function (t) {
                    return this.__data__.has(t)
                }, Dt.prototype.set = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof Bt) {
                        var i = n.__data__;
                        if (!wr || 199 > i.length) return i.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new Zt(i)
                    }
                    return n.set(t, e), this.size = n.size, this
                };
                var Br = Tn(ge),
                    Zr = Tn(ve, !0),
                    Rr = zn(),
                    Nr = zn(!0),
                    Dr = Tr ? function (t, e) {
                        return Tr.set(t, e), t
                    } : vo,
                    Wr = nr ? function (t, e) {
                        return nr(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: go(e),
                            writable: !0
                        })
                    } : vo,
                    Fr = ir || function (t) {
                        return Ot.clearTimeout(t)
                    },
                    Hr = br && 1 / A(new br([, -0]))[1] == Z ? function (t) {
                        return new br(t)
                    } : xo,
                    Ur = Tr ? function (t) {
                        return Tr.get(t)
                    } : xo,
                    $r = ur ? function (t) {
                        return null == t ? [] : (t = Mo(t), r(ur(t), (function (e) {
                            return Jo.call(t, e)
                        })))
                    } : Lo,
                    Vr = ur ? function (t) {
                        for (var e = []; t;) l(e, $r(t)), t = Ko(t);
                        return e
                    } : Lo,
                    qr = be;
                (yr && "[object DataView]" != qr(new yr(new ArrayBuffer(1))) || wr && "[object Map]" != qr(new wr) || xr && "[object Promise]" != qr(xr.resolve()) || br && "[object Set]" != qr(new br) || Lr && "[object WeakMap]" != qr(new Lr)) && (qr = function (t) {
                    var e = be(t);
                    if (t = (t = "[object Object]" == e ? t.constructor : B) ? yi(t) : "") switch (t) {
                        case Cr:
                            return "[object DataView]";
                        case kr:
                            return "[object Map]";
                        case Sr:
                            return "[object Promise]";
                        case Mr:
                            return "[object Set]";
                        case Er:
                            return "[object WeakMap]"
                    }
                    return e
                });
                var Gr = Bo ? $i : Po,
                    Kr = mi(Dr),
                    Yr = rr || function (t, e) {
                        return Ot.setTimeout(t, e)
                    },
                    Jr = mi(Wr),
                    Xr = function (t) {
                        var e = (t = Ni(t, (function (t) {
                            return 500 === e.size && e.clear(), t
                        }))).cache;
                        return t
                    }((function (t) {
                        var e = [];
                        return 46 === t.charCodeAt(0) && e.push(""), t.replace(X, (function (t, n, i, o) {
                            e.push(i ? o.replace(ut, "$1") : n || t)
                        })), e
                    })),
                    Qr = Ve((function (t, e) {
                        return Hi(t) ? fe(t, me(e, 1, Hi, !0)) : []
                    })),
                    ts = Ve((function (t, e) {
                        var n = zi(e);
                        return Hi(n) && (n = B), Hi(t) ? fe(t, me(e, 1, Hi, !0), ti(n, 2)) : []
                    })),
                    es = Ve((function (t, e) {
                        var n = zi(e);
                        return Hi(n) && (n = B), Hi(t) ? fe(t, me(e, 1, Hi, !0), B, n) : []
                    })),
                    ns = Ve((function (t) {
                        var e = u(t, cn);
                        return e.length && e[0] === t[0] ? ze(e) : []
                    })),
                    is = Ve((function (t) {
                        var e = zi(t),
                            n = u(t, cn);
                        return e === zi(n) ? e = B : n.pop(), n.length && n[0] === t[0] ? ze(n, ti(e, 2)) : []
                    })),
                    os = Ve((function (t) {
                        var e = zi(t),
                            n = u(t, cn);
                        return (e = "function" == typeof e ? e : B) && n.pop(), n.length && n[0] === t[0] ? ze(n, B, e) : []
                    })),
                    rs = Ve(Ci),
                    ss = Kn((function (t, e) {
                        var n = null == t ? 0 : t.length,
                            i = ae(t, e);
                        return He(t, u(e, (function (t) {
                            return ai(t, n) ? +t : t
                        })).sort(vn)), i
                    })),
                    as = Ve((function (t) {
                        return rn(me(t, 1, Hi, !0))
                    })),
                    us = Ve((function (t) {
                        var e = zi(t);
                        return Hi(e) && (e = B), rn(me(t, 1, Hi, !0), ti(e, 2))
                    })),
                    ls = Ve((function (t) {
                        var e = "function" == typeof (e = zi(t)) ? e : B;
                        return rn(me(t, 1, Hi, !0), B, e)
                    })),
                    hs = Ve((function (t, e) {
                        return Hi(t) ? fe(t, e) : []
                    })),
                    cs = Ve((function (t) {
                        return ln(r(t, Hi))
                    })),
                    fs = Ve((function (t) {
                        var e = zi(t);
                        return Hi(e) && (e = B), ln(r(t, Hi), ti(e, 2))
                    })),
                    ds = Ve((function (t) {
                        var e = "function" == typeof (e = zi(t)) ? e : B;
                        return ln(r(t, Hi), B, e)
                    })),
                    ps = Ve(Si),
                    _s = Ve((function (t) {
                        var e = "function" == typeof (e = 1 < (e = t.length) ? t[e - 1] : B) ? (t.pop(), e) : B;
                        return Mi(t, e)
                    })),
                    ms = Kn((function (t) {
                        function e(e) {
                            return ae(e, t)
                        }
                        var n = t.length,
                            i = n ? t[0] : 0,
                            o = this.__wrapped__;
                        return !(1 < n || this.__actions__.length) && o instanceof At && ai(i) ? ((o = o.slice(i, +i + (n ? 1 : 0))).__actions__.push({
                            func: Ii,
                            args: [e],
                            thisArg: B
                        }), new Mt(o, this.__chain__).thru((function (t) {
                            return n && !t.length && t.push(B), t
                        }))) : this.thru(e)
                    })),
                    gs = Ln((function (t, e, n) {
                        Ro.call(t, n) ? ++t[n] : se(t, n, 1)
                    })),
                    vs = En(bi),
                    ys = En(Li),
                    ws = Ln((function (t, e, n) {
                        Ro.call(t, n) ? t[n].push(e) : se(t, n, [e])
                    })),
                    xs = Ve((function (e, n, i) {
                        var o = -1,
                            r = "function" == typeof n,
                            s = Fi(e) ? To(e.length) : [];
                        return Br(e, (function (e) {
                            s[++o] = r ? t(n, e, i) : Ce(e, n, i)
                        })), s
                    })),
                    bs = Ln((function (t, e, n) {
                        se(t, n, e)
                    })),
                    Ls = Ln((function (t, e, n) {
                        t[n ? 0 : 1].push(e)
                    }), (function () {
                        return [
                            [],
                            []
                        ]
                    })),
                    Ps = Ve((function (t, e) {
                        if (null == t) return [];
                        var n = e.length;
                        return 1 < n && ui(t, e[0], e[1]) ? e = [] : 2 < n && ui(e[0], e[1], e[2]) && (e = [e[0]]), De(t, me(e, 1), [])
                    })),
                    Ts = or || function () {
                        return Ot.Date.now()
                    },
                    zs = Ve((function (t, e, n) {
                        var i = 1;
                        if (n.length) {
                            var o = I(n, Qn(zs));
                            i = 32 | i
                        }
                        return Un(t, i, e, n, o)
                    })),
                    Cs = Ve((function (t, e, n) {
                        var i = 3;
                        if (n.length) {
                            var o = I(n, Qn(Cs));
                            i = 32 | i
                        }
                        return Un(e, i, t, n, o)
                    })),
                    ks = Ve((function (t, e) {
                        return ce(t, 1, e)
                    })),
                    Ss = Ve((function (t, e, n) {
                        return ce(t, oo(e) || 0, n)
                    }));
                Ni.Cache = Zt;
                var Ms = Ve((function (e, n) {
                    var i = (n = 1 == n.length && Zs(n[0]) ? u(n[0], P(ti())) : u(me(n, 1), P(ti()))).length;
                    return Ve((function (o) {
                        for (var r = -1, s = pr(o.length, i); ++r < s;) o[r] = n[r].call(this, o[r]);
                        return t(e, this, o)
                    }))
                })),
                    Es = Ve((function (t, e) {
                        return Un(t, 32, B, e, I(e, Qn(Es)))
                    })),
                    Is = Ve((function (t, e) {
                        return Un(t, 64, B, e, I(e, Qn(Is)))
                    })),
                    As = Kn((function (t, e) {
                        return Un(t, 256, B, B, B, e)
                    })),
                    js = Dn(Le),
                    Os = Dn((function (t, e) {
                        return t >= e
                    })),
                    Bs = ke(function () {
                        return arguments
                    }()) ? ke : function (t) {
                        return Ki(t) && Ro.call(t, "callee") && !Jo.call(t, "callee")
                    },
                    Zs = To.isArray,
                    Rs = Wt ? P(Wt) : function (t) {
                        return Ki(t) && "[object ArrayBuffer]" == be(t)
                    },
                    Ns = lr || Po,
                    Ds = Ft ? P(Ft) : function (t) {
                        return Ki(t) && "[object Date]" == be(t)
                    },
                    Ws = Ht ? P(Ht) : function (t) {
                        return Ki(t) && "[object Map]" == qr(t)
                    },
                    Fs = Ut ? P(Ut) : function (t) {
                        return Ki(t) && "[object RegExp]" == be(t)
                    },
                    Hs = $t ? P($t) : function (t) {
                        return Ki(t) && "[object Set]" == qr(t)
                    },
                    Us = Vt ? P(Vt) : function (t) {
                        return Ki(t) && qi(t.length) && !!kt[be(t)]
                    },
                    $s = Dn(je),
                    Vs = Dn((function (t, e) {
                        return t <= e
                    })),
                    qs = Pn((function (t, e) {
                        if (ci(e) || Fi(e)) bn(e, lo(e), t);
                        else
                            for (var n in e) Ro.call(e, n) && ne(t, n, e[n])
                    })),
                    Gs = Pn((function (t, e) {
                        bn(e, ho(e), t)
                    })),
                    Ks = Pn((function (t, e, n, i) {
                        bn(e, ho(e), t, i)
                    })),
                    Ys = Pn((function (t, e, n, i) {
                        bn(e, lo(e), t, i)
                    })),
                    Js = Kn(ae),
                    Xs = Ve((function (t, e) {
                        t = Mo(t);
                        var n = -1,
                            i = e.length;
                        for ((o = 2 < i ? e[2] : B) && ui(e[0], e[1], o) && (i = 1); ++n < i;)
                            for (var o, r = ho(o = e[n]), s = -1, a = r.length; ++s < a;) {
                                var u = r[s],
                                    l = t[u];
                                (l === B || Wi(l, Oo[u]) && !Ro.call(t, u)) && (t[u] = o[u])
                            }
                        return t
                    })),
                    Qs = Ve((function (e) {
                        return e.push(B, Vn), t(oa, B, e)
                    })),
                    ta = jn((function (t, e, n) {
                        null != e && "function" != typeof e.toString && (e = Wo.call(e)), t[e] = n
                    }), go(vo)),
                    ea = jn((function (t, e, n) {
                        null != e && "function" != typeof e.toString && (e = Wo.call(e)), Ro.call(t, e) ? t[e].push(n) : t[e] = [n]
                    }), ti),
                    na = Ve(Ce),
                    ia = Pn((function (t, e, n) {
                        Re(t, e, n)
                    })),
                    oa = Pn((function (t, e, n, i) {
                        Re(t, e, n, i)
                    })),
                    ra = Kn((function (t, e) {
                        var n = {};
                        if (null == t) return n;
                        var i = !1;
                        e = u(e, (function (e) {
                            return e = dn(e, t), i || (i = 1 < e.length), e
                        })), bn(t, Jn(t), n), i && (n = le(n, 7, qn));
                        for (var o = e.length; o--;) sn(n, e[o]);
                        return n
                    })),
                    sa = Kn((function (t, e) {
                        return null == t ? {} : function (t, e) {
                            return We(t, e, (function (e, n) {
                                return uo(t, n)
                            }))
                        }(t, e)
                    })),
                    aa = Hn(lo),
                    ua = Hn(ho),
                    la = kn((function (t, e, n) {
                        return e = e.toLowerCase(), t + (n ? po(e) : e)
                    })),
                    ha = kn((function (t, e, n) {
                        return t + (n ? "-" : "") + e.toLowerCase()
                    })),
                    ca = kn((function (t, e, n) {
                        return t + (n ? " " : "") + e.toLowerCase()
                    })),
                    fa = Cn("toLowerCase"),
                    da = kn((function (t, e, n) {
                        return t + (n ? "_" : "") + e.toLowerCase()
                    })),
                    pa = kn((function (t, e, n) {
                        return t + (n ? " " : "") + ma(e)
                    })),
                    _a = kn((function (t, e, n) {
                        return t + (n ? " " : "") + e.toUpperCase()
                    })),
                    ma = Cn("toUpperCase"),
                    ga = Ve((function (e, n) {
                        try {
                            return t(e, B, n)
                        } catch (t) {
                            return Ui(t) ? t : new Co(t)
                        }
                    })),
                    va = Kn((function (t, e) {
                        return n(e, (function (e) {
                            e = vi(e), se(t, e, zs(t[e], t))
                        })), t
                    })),
                    ya = In(),
                    wa = In(!0),
                    xa = Ve((function (t, e) {
                        return function (n) {
                            return Ce(n, t, e)
                        }
                    })),
                    ba = Ve((function (t, e) {
                        return function (n) {
                            return Ce(t, n, e)
                        }
                    })),
                    La = Bn(u),
                    Pa = Bn(o),
                    Ta = Bn(f),
                    za = Nn(),
                    Ca = Nn(!0),
                    ka = On((function (t, e) {
                        return t + e
                    }), 0),
                    Sa = Fn("ceil"),
                    Ma = On((function (t, e) {
                        return t / e
                    }), 1),
                    Ea = Fn("floor"),
                    Ia = On((function (t, e) {
                        return t * e
                    }), 1),
                    Aa = Fn("round"),
                    ja = On((function (t, e) {
                        return t - e
                    }), 0);
                return wt.after = function (t, e) {
                    if ("function" != typeof e) throw new Ao("Expected a function");
                    return t = no(t),
                        function () {
                            if (1 > --t) return e.apply(this, arguments)
                        }
                }, wt.ary = Bi, wt.assign = qs, wt.assignIn = Gs, wt.assignInWith = Ks, wt.assignWith = Ys, wt.at = Js, wt.before = Zi, wt.bind = zs, wt.bindAll = va, wt.bindKey = Cs, wt.castArray = function () {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return Zs(t) ? t : [t]
                }, wt.chain = Ei, wt.chunk = function (t, e, n) {
                    if (e = (n ? ui(t, e, n) : e === B) ? 1 : dr(no(e), 0), !(n = null == t ? 0 : t.length) || 1 > e) return [];
                    for (var i = 0, o = 0, r = To(sr(n / e)); i < n;) r[o++] = Je(t, i, i += e);
                    return r
                }, wt.compact = function (t) {
                    for (var e = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++e < n;) {
                        var r = t[e];
                        r && (o[i++] = r)
                    }
                    return o
                }, wt.concat = function () {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = To(t - 1), n = arguments[0]; t--;) e[t - 1] = arguments[t];
                    return l(Zs(n) ? xn(n) : [n], me(e, 1))
                }, wt.cond = function (e) {
                    var n = null == e ? 0 : e.length,
                        i = ti();
                    return e = n ? u(e, (function (t) {
                        if ("function" != typeof t[1]) throw new Ao("Expected a function");
                        return [i(t[0]), t[1]]
                    })) : [], Ve((function (i) {
                        for (var o = -1; ++o < n;) {
                            var r = e[o];
                            if (t(r[0], this, i)) return t(r[1], this, i)
                        }
                    }))
                }, wt.conforms = function (t) {
                    return function (t) {
                        var e = lo(t);
                        return function (n) {
                            return he(n, t, e)
                        }
                    }(le(t, 1))
                }, wt.constant = go, wt.countBy = gs, wt.create = function (t, e) {
                    var n = Or(t);
                    return null == e ? n : re(n, e)
                }, wt.curry = function t(e, n, i) {
                    return (e = Un(e, 8, B, B, B, B, B, n = i ? B : n)).placeholder = t.placeholder, e
                }, wt.curryRight = function t(e, n, i) {
                    return (e = Un(e, 16, B, B, B, B, B, n = i ? B : n)).placeholder = t.placeholder, e
                }, wt.debounce = Ri, wt.defaults = Xs, wt.defaultsDeep = Qs, wt.defer = ks, wt.delay = Ss, wt.difference = Qr, wt.differenceBy = ts, wt.differenceWith = es, wt.drop = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? Je(t, 0 > (e = n || e === B ? 1 : no(e)) ? 0 : e, i) : []
                }, wt.dropRight = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? Je(t, 0, 0 > (e = i - (e = n || e === B ? 1 : no(e))) ? 0 : e) : []
                }, wt.dropRightWhile = function (t, e) {
                    return t && t.length ? an(t, ti(e, 3), !0, !0) : []
                }, wt.dropWhile = function (t, e) {
                    return t && t.length ? an(t, ti(e, 3), !0) : []
                }, wt.fill = function (t, e, n, i) {
                    var o = null == t ? 0 : t.length;
                    if (!o) return [];
                    for (n && "number" != typeof n && ui(t, e, n) && (n = 0, i = o), o = t.length, 0 > (n = no(n)) && (n = -n > o ? 0 : o + n), 0 > (i = i === B || i > o ? o : no(i)) && (i += o), i = n > i ? 0 : io(i); n < i;) t[n++] = e;
                    return t
                }, wt.filter = function (t, e) {
                    return (Zs(t) ? r : _e)(t, ti(e, 3))
                }, wt.flatMap = function (t, e) {
                    return me(Oi(t, e), 1)
                }, wt.flatMapDeep = function (t, e) {
                    return me(Oi(t, e), Z)
                }, wt.flatMapDepth = function (t, e, n) {
                    return n = n === B ? 1 : no(n), me(Oi(t, e), n)
                }, wt.flatten = Pi, wt.flattenDeep = function (t) {
                    return null != t && t.length ? me(t, Z) : []
                }, wt.flattenDepth = function (t, e) {
                    return null != t && t.length ? me(t, e = e === B ? 1 : no(e)) : []
                }, wt.flip = function (t) {
                    return Un(t, 512)
                }, wt.flow = ya, wt.flowRight = wa, wt.fromPairs = function (t) {
                    for (var e = -1, n = null == t ? 0 : t.length, i = {}; ++e < n;) {
                        var o = t[e];
                        i[o[0]] = o[1]
                    }
                    return i
                }, wt.functions = function (t) {
                    return null == t ? [] : ye(t, lo(t))
                }, wt.functionsIn = function (t) {
                    return null == t ? [] : ye(t, ho(t))
                }, wt.groupBy = ws, wt.initial = function (t) {
                    return null != t && t.length ? Je(t, 0, -1) : []
                }, wt.intersection = ns, wt.intersectionBy = is, wt.intersectionWith = os, wt.invert = ta, wt.invertBy = ea, wt.invokeMap = xs, wt.iteratee = yo, wt.keyBy = bs, wt.keys = lo, wt.keysIn = ho, wt.map = Oi, wt.mapKeys = function (t, e) {
                    var n = {};
                    return e = ti(e, 3), ge(t, (function (t, i, o) {
                        se(n, e(t, i, o), t)
                    })), n
                }, wt.mapValues = function (t, e) {
                    var n = {};
                    return e = ti(e, 3), ge(t, (function (t, i, o) {
                        se(n, i, e(t, i, o))
                    })), n
                }, wt.matches = function (t) {
                    return Be(le(t, 1))
                }, wt.matchesProperty = function (t, e) {
                    return Ze(t, le(e, 1))
                }, wt.memoize = Ni, wt.merge = ia, wt.mergeWith = oa, wt.method = xa, wt.methodOf = ba, wt.mixin = wo, wt.negate = Di, wt.nthArg = function (t) {
                    return t = no(t), Ve((function (e) {
                        return Ne(e, t)
                    }))
                }, wt.omit = ra, wt.omitBy = function (t, e) {
                    return co(t, Di(ti(e)))
                }, wt.once = function (t) {
                    return Zi(2, t)
                }, wt.orderBy = function (t, e, n, i) {
                    return null == t ? [] : (Zs(e) || (e = null == e ? [] : [e]), Zs(n = i ? B : n) || (n = null == n ? [] : [n]), De(t, e, n))
                }, wt.over = La, wt.overArgs = Ms, wt.overEvery = Pa, wt.overSome = Ta, wt.partial = Es, wt.partialRight = Is, wt.partition = Ls, wt.pick = sa, wt.pickBy = co, wt.property = bo, wt.propertyOf = function (t) {
                    return function (e) {
                        return null == t ? B : we(t, e)
                    }
                }, wt.pull = rs, wt.pullAll = Ci, wt.pullAllBy = function (t, e, n) {
                    return t && t.length && e && e.length ? Fe(t, e, ti(n, 2)) : t
                }, wt.pullAllWith = function (t, e, n) {
                    return t && t.length && e && e.length ? Fe(t, e, B, n) : t
                }, wt.pullAt = ss, wt.range = za, wt.rangeRight = Ca, wt.rearg = As, wt.reject = function (t, e) {
                    return (Zs(t) ? r : _e)(t, Di(ti(e, 3)))
                }, wt.remove = function (t, e) {
                    var n = [];
                    if (!t || !t.length) return n;
                    var i = -1,
                        o = [],
                        r = t.length;
                    for (e = ti(e, 3); ++i < r;) {
                        var s = t[i];
                        e(s, i, t) && (n.push(s), o.push(i))
                    }
                    return He(t, o), n
                }, wt.rest = function (t, e) {
                    if ("function" != typeof t) throw new Ao("Expected a function");
                    return Ve(t, e = e === B ? e : no(e))
                }, wt.reverse = ki, wt.sampleSize = function (t, e, n) {
                    return e = (n ? ui(t, e, n) : e === B) ? 1 : no(e), (Zs(t) ? Qt : Ge)(t, e)
                }, wt.set = function (t, e, n) {
                    return null == t ? t : Ke(t, e, n)
                }, wt.setWith = function (t, e, n, i) {
                    return i = "function" == typeof i ? i : B, null == t ? t : Ke(t, e, n, i)
                }, wt.shuffle = function (t) {
                    return (Zs(t) ? te : Ye)(t)
                }, wt.slice = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? (n && "number" != typeof n && ui(t, e, n) ? (e = 0, n = i) : (e = null == e ? 0 : no(e), n = n === B ? i : no(n)), Je(t, e, n)) : []
                }, wt.sortBy = Ps, wt.sortedUniq = function (t) {
                    return t && t.length ? en(t) : []
                }, wt.sortedUniqBy = function (t, e) {
                    return t && t.length ? en(t, ti(e, 2)) : []
                }, wt.split = function (t, e, n) {
                    return n && "number" != typeof n && ui(t, e, n) && (e = n = B), (n = n === B ? 4294967295 : n >>> 0) ? (t = so(t)) && ("string" == typeof e || null != e && !Fs(e)) && (!(e = on(e)) && Tt.test(t)) ? pn(O(t), 0, n) : t.split(e, n) : []
                }, wt.spread = function (e, n) {
                    if ("function" != typeof e) throw new Ao("Expected a function");
                    return n = null == n ? 0 : dr(no(n), 0), Ve((function (i) {
                        var o = i[n];
                        return i = pn(i, 0, n), o && l(i, o), t(e, this, i)
                    }))
                }, wt.tail = function (t) {
                    var e = null == t ? 0 : t.length;
                    return e ? Je(t, 1, e) : []
                }, wt.take = function (t, e, n) {
                    return t && t.length ? Je(t, 0, 0 > (e = n || e === B ? 1 : no(e)) ? 0 : e) : []
                }, wt.takeRight = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? Je(t, 0 > (e = i - (e = n || e === B ? 1 : no(e))) ? 0 : e, i) : []
                }, wt.takeRightWhile = function (t, e) {
                    return t && t.length ? an(t, ti(e, 3), !1, !0) : []
                }, wt.takeWhile = function (t, e) {
                    return t && t.length ? an(t, ti(e, 3)) : []
                }, wt.tap = function (t, e) {
                    return e(t), t
                }, wt.throttle = function (t, e, n) {
                    var i = !0,
                        o = !0;
                    if ("function" != typeof t) throw new Ao("Expected a function");
                    return Gi(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), Ri(t, e, {
                        leading: i,
                        maxWait: e,
                        trailing: o
                    })
                }, wt.thru = Ii, wt.toArray = to, wt.toPairs = aa, wt.toPairsIn = ua, wt.toPath = function (t) {
                    return Zs(t) ? u(t, vi) : Qi(t) ? [t] : xn(Xr(so(t)))
                }, wt.toPlainObject = ro, wt.transform = function (t, e, i) {
                    var o = Zs(t),
                        r = o || Ns(t) || Us(t);
                    if (e = ti(e, 4), null == i) {
                        var s = t && t.constructor;
                        i = r ? o ? new s : [] : Gi(t) && $i(s) ? Or(Ko(t)) : {}
                    }
                    return (r ? n : ge)(t, (function (t, n, o) {
                        return e(i, t, n, o)
                    })), i
                }, wt.unary = function (t) {
                    return Bi(t, 1)
                }, wt.union = as, wt.unionBy = us, wt.unionWith = ls, wt.uniq = function (t) {
                    return t && t.length ? rn(t) : []
                }, wt.uniqBy = function (t, e) {
                    return t && t.length ? rn(t, ti(e, 2)) : []
                }, wt.uniqWith = function (t, e) {
                    return e = "function" == typeof e ? e : B, t && t.length ? rn(t, B, e) : []
                }, wt.unset = function (t, e) {
                    return null == t || sn(t, e)
                }, wt.unzip = Si, wt.unzipWith = Mi, wt.update = function (t, e, n) {
                    return null == t ? t : Ke(t, e, fn(n)(we(t, e)), void 0)
                }, wt.updateWith = function (t, e, n, i) {
                    return i = "function" == typeof i ? i : B, null != t && (t = Ke(t, e, fn(n)(we(t, e)), i)), t
                }, wt.values = fo, wt.valuesIn = function (t) {
                    return null == t ? [] : T(t, ho(t))
                }, wt.without = hs, wt.words = mo, wt.wrap = function (t, e) {
                    return Es(fn(e), t)
                }, wt.xor = cs, wt.xorBy = fs, wt.xorWith = ds, wt.zip = ps, wt.zipObject = function (t, e) {
                    return hn(t || [], e || [], ne)
                }, wt.zipObjectDeep = function (t, e) {
                    return hn(t || [], e || [], Ke)
                }, wt.zipWith = _s, wt.entries = aa, wt.entriesIn = ua, wt.extend = Gs, wt.extendWith = Ks, wo(wt, wt), wt.add = ka, wt.attempt = ga, wt.camelCase = la, wt.capitalize = po, wt.ceil = Sa, wt.clamp = function (t, e, n) {
                    return n === B && (n = e, e = B), n !== B && (n = (n = oo(n)) == n ? n : 0), e !== B && (e = (e = oo(e)) == e ? e : 0), ue(oo(t), e, n)
                }, wt.clone = function (t) {
                    return le(t, 4)
                }, wt.cloneDeep = function (t) {
                    return le(t, 5)
                }, wt.cloneDeepWith = function (t, e) {
                    return le(t, 5, e = "function" == typeof e ? e : B)
                }, wt.cloneWith = function (t, e) {
                    return le(t, 4, e = "function" == typeof e ? e : B)
                }, wt.conformsTo = function (t, e) {
                    return null == e || he(t, e, lo(e))
                }, wt.deburr = _o, wt.defaultTo = function (t, e) {
                    return null == t || t != t ? e : t
                }, wt.divide = Ma, wt.endsWith = function (t, e, n) {
                    t = so(t), e = on(e);
                    var i = t.length;
                    i = n = n === B ? i : ue(no(n), 0, i);
                    return 0 <= (n -= e.length) && t.slice(n, i) == e
                }, wt.eq = Wi, wt.escape = function (t) {
                    return (t = so(t)) && V.test(t) ? t.replace(U, Kt) : t
                }, wt.escapeRegExp = function (t) {
                    return (t = so(t)) && tt.test(t) ? t.replace(Q, "\\$&") : t
                }, wt.every = function (t, e, n) {
                    var i = Zs(t) ? o : de;
                    return n && ui(t, e, n) && (e = B), i(t, ti(e, 3))
                }, wt.find = vs, wt.findIndex = bi, wt.findKey = function (t, e) {
                    return d(t, ti(e, 3), ge)
                }, wt.findLast = ys, wt.findLastIndex = Li, wt.findLastKey = function (t, e) {
                    return d(t, ti(e, 3), ve)
                }, wt.floor = Ea, wt.forEach = Ai, wt.forEachRight = ji, wt.forIn = function (t, e) {
                    return null == t ? t : Rr(t, ti(e, 3), ho)
                }, wt.forInRight = function (t, e) {
                    return null == t ? t : Nr(t, ti(e, 3), ho)
                }, wt.forOwn = function (t, e) {
                    return t && ge(t, ti(e, 3))
                }, wt.forOwnRight = function (t, e) {
                    return t && ve(t, ti(e, 3))
                }, wt.get = ao, wt.gt = js, wt.gte = Os, wt.has = function (t, e) {
                    return null != t && oi(t, e, Pe)
                }, wt.hasIn = uo, wt.head = Ti, wt.identity = vo, wt.includes = function (t, e, n, i) {
                    return t = Fi(t) ? t : fo(t), n = n && !i ? no(n) : 0, i = t.length, 0 > n && (n = dr(i + n, 0)), Xi(t) ? n <= i && -1 < t.indexOf(e, n) : !!i && -1 < _(t, e, n)
                }, wt.indexOf = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? (0 > (n = null == n ? 0 : no(n)) && (n = dr(i + n, 0)), _(t, e, n)) : -1
                }, wt.inRange = function (t, e, n) {
                    return e = eo(e), n === B ? (n = e, e = 0) : n = eo(n), (t = oo(t)) >= pr(e, n) && t < dr(e, n)
                }, wt.invoke = na, wt.isArguments = Bs, wt.isArray = Zs, wt.isArrayBuffer = Rs, wt.isArrayLike = Fi, wt.isArrayLikeObject = Hi, wt.isBoolean = function (t) {
                    return !0 === t || !1 === t || Ki(t) && "[object Boolean]" == be(t)
                }, wt.isBuffer = Ns, wt.isDate = Ds, wt.isElement = function (t) {
                    return Ki(t) && 1 === t.nodeType && !Ji(t)
                }, wt.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (Fi(t) && (Zs(t) || "string" == typeof t || "function" == typeof t.splice || Ns(t) || Us(t) || Bs(t))) return !t.length;
                    var e = qr(t);
                    if ("[object Map]" == e || "[object Set]" == e) return !t.size;
                    if (ci(t)) return !Ae(t).length;
                    for (var n in t)
                        if (Ro.call(t, n)) return !1;
                    return !0
                }, wt.isEqual = function (t, e) {
                    return Se(t, e)
                }, wt.isEqualWith = function (t, e, n) {
                    var i = (n = "function" == typeof n ? n : B) ? n(t, e) : B;
                    return i === B ? Se(t, e, B, n) : !!i
                }, wt.isError = Ui, wt.isFinite = function (t) {
                    return "number" == typeof t && hr(t)
                }, wt.isFunction = $i, wt.isInteger = Vi, wt.isLength = qi, wt.isMap = Ws, wt.isMatch = function (t, e) {
                    return t === e || Me(t, e, ni(e))
                }, wt.isMatchWith = function (t, e, n) {
                    return n = "function" == typeof n ? n : B, Me(t, e, ni(e), n)
                }, wt.isNaN = function (t) {
                    return Yi(t) && t != +t
                }, wt.isNative = function (t) {
                    if (Gr(t)) throw new Co("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return Ee(t)
                }, wt.isNil = function (t) {
                    return null == t
                }, wt.isNull = function (t) {
                    return null === t
                }, wt.isNumber = Yi, wt.isObject = Gi, wt.isObjectLike = Ki, wt.isPlainObject = Ji, wt.isRegExp = Fs, wt.isSafeInteger = function (t) {
                    return Vi(t) && -9007199254740991 <= t && 9007199254740991 >= t
                }, wt.isSet = Hs, wt.isString = Xi, wt.isSymbol = Qi, wt.isTypedArray = Us, wt.isUndefined = function (t) {
                    return t === B
                }, wt.isWeakMap = function (t) {
                    return Ki(t) && "[object WeakMap]" == qr(t)
                }, wt.isWeakSet = function (t) {
                    return Ki(t) && "[object WeakSet]" == be(t)
                }, wt.join = function (t, e) {
                    return null == t ? "" : cr.call(t, e)
                }, wt.kebabCase = ha, wt.last = zi, wt.lastIndexOf = function (t, e, n) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var o = i;
                    if (n !== B && (o = 0 > (o = no(n)) ? dr(i + o, 0) : pr(o, i - 1)), e == e) {
                        for (n = o + 1; n-- && t[n] !== e;);
                        t = n
                    } else t = p(t, g, o, !0);
                    return t
                }, wt.lowerCase = ca, wt.lowerFirst = fa, wt.lt = $s, wt.lte = Vs, wt.max = function (t) {
                    return t && t.length ? pe(t, vo, Le) : B
                }, wt.maxBy = function (t, e) {
                    return t && t.length ? pe(t, ti(e, 2), Le) : B
                }, wt.mean = function (t) {
                    return v(t, vo)
                }, wt.meanBy = function (t, e) {
                    return v(t, ti(e, 2))
                }, wt.min = function (t) {
                    return t && t.length ? pe(t, vo, je) : B
                }, wt.minBy = function (t, e) {
                    return t && t.length ? pe(t, ti(e, 2), je) : B
                }, wt.stubArray = Lo, wt.stubFalse = Po, wt.stubObject = function () {
                    return {}
                }, wt.stubString = function () {
                    return ""
                }, wt.stubTrue = function () {
                    return !0
                }, wt.multiply = Ia, wt.nth = function (t, e) {
                    return t && t.length ? Ne(t, no(e)) : B
                }, wt.noConflict = function () {
                    return Ot._ === this && (Ot._ = Ho), this
                }, wt.noop = xo, wt.now = Ts, wt.pad = function (t, e, n) {
                    t = so(t);
                    var i = (e = no(e)) ? j(t) : 0;
                    return !e || i >= e ? t : Zn(ar(e = (e - i) / 2), n) + t + Zn(sr(e), n)
                }, wt.padEnd = function (t, e, n) {
                    t = so(t);
                    var i = (e = no(e)) ? j(t) : 0;
                    return e && i < e ? t + Zn(e - i, n) : t
                }, wt.padStart = function (t, e, n) {
                    t = so(t);
                    var i = (e = no(e)) ? j(t) : 0;
                    return e && i < e ? Zn(e - i, n) + t : t
                }, wt.parseInt = function (t, e, n) {
                    return n || null == e ? e = 0 : e && (e = +e), mr(so(t).replace(nt, ""), e || 0)
                }, wt.random = function (t, e, n) {
                    if (n && "boolean" != typeof n && ui(t, e, n) && (e = n = B), n === B && ("boolean" == typeof e ? (n = e, e = B) : "boolean" == typeof t && (n = t, t = B)), t === B && e === B ? (t = 0, e = 1) : (t = eo(t), e === B ? (e = t, t = 0) : e = eo(e)), t > e) {
                        var i = t;
                        t = e, e = i
                    }
                    return n || t % 1 || e % 1 ? (n = gr(), pr(t + n * (e - t + Et("1e-" + ((n + "").length - 1))), e)) : Ue(t, e)
                }, wt.reduce = function (t, e, n) {
                    var i = Zs(t) ? h : x,
                        o = 3 > arguments.length;
                    return i(t, ti(e, 4), n, o, Br)
                }, wt.reduceRight = function (t, e, n) {
                    var i = Zs(t) ? c : x,
                        o = 3 > arguments.length;
                    return i(t, ti(e, 4), n, o, Zr)
                }, wt.repeat = function (t, e, n) {
                    return e = (n ? ui(t, e, n) : e === B) ? 1 : no(e), $e(so(t), e)
                }, wt.replace = function () {
                    var t = arguments,
                        e = so(t[0]);
                    return 3 > t.length ? e : e.replace(t[1], t[2])
                }, wt.result = function (t, e, n) {
                    var i = -1,
                        o = (e = dn(e, t)).length;
                    for (o || (o = 1, t = B); ++i < o;) {
                        var r = null == t ? B : t[vi(e[i])];
                        r === B && (i = o, r = n), t = $i(r) ? r.call(t) : r
                    }
                    return t
                }, wt.round = Aa, wt.runInContext = w, wt.sample = function (t) {
                    return (Zs(t) ? Xt : qe)(t)
                }, wt.size = function (t) {
                    if (null == t) return 0;
                    if (Fi(t)) return Xi(t) ? j(t) : t.length;
                    var e = qr(t);
                    return "[object Map]" == e || "[object Set]" == e ? t.size : Ae(t).length
                }, wt.snakeCase = da, wt.some = function (t, e, n) {
                    var i = Zs(t) ? f : Xe;
                    return n && ui(t, e, n) && (e = B), i(t, ti(e, 3))
                }, wt.sortedIndex = function (t, e) {
                    return Qe(t, e)
                }, wt.sortedIndexBy = function (t, e, n) {
                    return tn(t, e, ti(n, 2))
                }, wt.sortedIndexOf = function (t, e) {
                    var n = null == t ? 0 : t.length;
                    if (n) {
                        var i = Qe(t, e);
                        if (i < n && Wi(t[i], e)) return i
                    }
                    return -1
                }, wt.sortedLastIndex = function (t, e) {
                    return Qe(t, e, !0)
                }, wt.sortedLastIndexBy = function (t, e, n) {
                    return tn(t, e, ti(n, 2), !0)
                }, wt.sortedLastIndexOf = function (t, e) {
                    if (null != t && t.length) {
                        var n = Qe(t, e, !0) - 1;
                        if (Wi(t[n], e)) return n
                    }
                    return -1
                }, wt.startCase = pa, wt.startsWith = function (t, e, n) {
                    return t = so(t), n = null == n ? 0 : ue(no(n), 0, t.length), e = on(e), t.slice(n, n + e.length) == e
                }, wt.subtract = ja, wt.sum = function (t) {
                    return t && t.length ? b(t, vo) : 0
                }, wt.sumBy = function (t, e) {
                    return t && t.length ? b(t, ti(e, 2)) : 0
                }, wt.template = function (t, e, n) {
                    var i = wt.templateSettings;
                    n && ui(t, e, n) && (e = B), t = so(t), e = Ks({}, e, i, $n);
                    var o, r, s = lo(n = Ks({}, e.imports, i.imports, $n)),
                        a = T(n, s),
                        u = 0;
                    n = e.interpolate || gt;
                    var l = "__p+='";
                    n = Eo((e.escape || gt).source + "|" + n.source + "|" + (n === K ? lt : gt).source + "|" + (e.evaluate || gt).source + "|$", "g");
                    var h = Ro.call(e, "sourceURL") ? "//# sourceURL=" + (e.sourceURL + "").replace(/[\r\n]/g, " ") + "\n" : "";
                    if (t.replace(n, (function (e, n, i, s, a, h) {
                        return i || (i = s), l += t.slice(u, h).replace(vt, S), n && (o = !0, l += "'+__e(" + n + ")+'"), a && (r = !0, l += "';" + a + ";\n__p+='"), i && (l += "'+((__t=(" + i + "))==null?'':__t)+'"), u = h + e.length, e
                    })), l += "';", (e = Ro.call(e, "variable") && e.variable) || (l = "with(obj){" + l + "}"), l = (r ? l.replace(D, "") : l).replace(W, "$1").replace(F, "$1;"), l = "function(" + (e || "obj") + "){" + (e ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (r ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}", (e = ga((function () {
                        return ko(s, h + "return " + l).apply(B, a)
                    }))).source = l, Ui(e)) throw e;
                    return e
                }, wt.times = function (t, e) {
                    if (1 > (t = no(t)) || 9007199254740991 < t) return [];
                    var n = 4294967295,
                        i = pr(t, 4294967295);
                    for (t -= 4294967295, i = L(i, e = ti(e)); ++n < t;) e(n);
                    return i
                }, wt.toFinite = eo, wt.toInteger = no, wt.toLength = io, wt.toLower = function (t) {
                    return so(t).toLowerCase()
                }, wt.toNumber = oo, wt.toSafeInteger = function (t) {
                    return t ? ue(no(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                }, wt.toString = so, wt.toUpper = function (t) {
                    return so(t).toUpperCase()
                }, wt.trim = function (t, e, n) {
                    return (t = so(t)) && (n || e === B) ? t.replace(et, "") : t && (e = on(e)) ? pn(t = O(t), e = C(t, n = O(e)), n = k(t, n) + 1).join("") : t
                }, wt.trimEnd = function (t, e, n) {
                    return (t = so(t)) && (n || e === B) ? t.replace(it, "") : t && (e = on(e)) ? pn(t = O(t), 0, e = k(t, O(e)) + 1).join("") : t
                }, wt.trimStart = function (t, e, n) {
                    return (t = so(t)) && (n || e === B) ? t.replace(nt, "") : t && (e = on(e)) ? pn(t = O(t), e = C(t, O(e))).join("") : t
                }, wt.truncate = function (t, e) {
                    var n = 30,
                        i = "...";
                    if (Gi(e)) {
                        var o = "separator" in e ? e.separator : o;
                        n = "length" in e ? no(e.length) : n, i = "omission" in e ? on(e.omission) : i
                    }
                    var r = (t = so(t)).length;
                    if (Tt.test(t)) {
                        var s = O(t);
                        r = s.length
                    }
                    if (n >= r) return t;
                    if (1 > (r = n - j(i))) return i;
                    if (n = s ? pn(s, 0, r).join("") : t.slice(0, r), o === B) return n + i;
                    if (s && (r += n.length - r), Fs(o)) {
                        if (t.slice(r).search(o)) {
                            var a = n;
                            for (o.global || (o = Eo(o.source, so(ht.exec(o)) + "g")), o.lastIndex = 0; s = o.exec(a);) var u = s.index;
                            n = n.slice(0, u === B ? r : u)
                        }
                    } else t.indexOf(on(o), r) != r && (-1 < (o = n.lastIndexOf(o)) && (n = n.slice(0, o)));
                    return n + i
                }, wt.unescape = function (t) {
                    return (t = so(t)) && $.test(t) ? t.replace(H, Yt) : t
                }, wt.uniqueId = function (t) {
                    var e = ++No;
                    return so(t) + e
                }, wt.upperCase = _a, wt.upperFirst = ma, wt.each = Ai, wt.eachRight = ji, wt.first = Ti, wo(wt, function () {
                    var t = {};
                    return ge(wt, (function (e, n) {
                        Ro.call(wt.prototype, n) || (t[n] = e)
                    })), t
                }(), {
                    chain: !1
                }), wt.VERSION = "4.17.15", n("bind bindKey curry curryRight partial partialRight".split(" "), (function (t) {
                    wt[t].placeholder = wt
                })), n(["drop", "take"], (function (t, e) {
                    At.prototype[t] = function (n) {
                        n = n === B ? 1 : dr(no(n), 0);
                        var i = this.__filtered__ && !e ? new At(this) : this.clone();
                        return i.__filtered__ ? i.__takeCount__ = pr(n, i.__takeCount__) : i.__views__.push({
                            size: pr(n, 4294967295),
                            type: t + (0 > i.__dir__ ? "Right" : "")
                        }), i
                    }, At.prototype[t + "Right"] = function (e) {
                        return this.reverse()[t](e).reverse()
                    }
                })), n(["filter", "map", "takeWhile"], (function (t, e) {
                    var n = e + 1,
                        i = 1 == n || 3 == n;
                    At.prototype[t] = function (t) {
                        var e = this.clone();
                        return e.__iteratees__.push({
                            iteratee: ti(t, 3),
                            type: n
                        }), e.__filtered__ = e.__filtered__ || i, e
                    }
                })), n(["head", "last"], (function (t, e) {
                    var n = "take" + (e ? "Right" : "");
                    At.prototype[t] = function () {
                        return this[n](1).value()[0]
                    }
                })), n(["initial", "tail"], (function (t, e) {
                    var n = "drop" + (e ? "" : "Right");
                    At.prototype[t] = function () {
                        return this.__filtered__ ? new At(this) : this[n](1)
                    }
                })), At.prototype.compact = function () {
                    return this.filter(vo)
                }, At.prototype.find = function (t) {
                    return this.filter(t).head()
                }, At.prototype.findLast = function (t) {
                    return this.reverse().find(t)
                }, At.prototype.invokeMap = Ve((function (t, e) {
                    return "function" == typeof t ? new At(this) : this.map((function (n) {
                        return Ce(n, t, e)
                    }))
                })), At.prototype.reject = function (t) {
                    return this.filter(Di(ti(t)))
                }, At.prototype.slice = function (t, e) {
                    t = no(t);
                    var n = this;
                    return n.__filtered__ && (0 < t || 0 > e) ? new At(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== B && (n = 0 > (e = no(e)) ? n.dropRight(-e) : n.take(e - t)), n)
                }, At.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse()
                }, At.prototype.toArray = function () {
                    return this.take(4294967295)
                }, ge(At.prototype, (function (t, e) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(e),
                        i = /^(?:head|last)$/.test(e),
                        o = wt[i ? "take" + ("last" == e ? "Right" : "") : e],
                        r = i || /^find/.test(e);
                    o && (wt.prototype[e] = function () {
                        function e(t) {
                            return t = o.apply(wt, l([t], a)), i && f ? t[0] : t
                        }
                        var s = this.__wrapped__,
                            a = i ? [1] : arguments,
                            u = s instanceof At,
                            h = a[0],
                            c = u || Zs(s);
                        c && n && "function" == typeof h && 1 != h.length && (u = c = !1);
                        var f = this.__chain__,
                            d = !!this.__actions__.length;
                        h = r && !f, u = u && !d;
                        return !r && c ? (s = u ? s : new At(this), (s = t.apply(s, a)).__actions__.push({
                            func: Ii,
                            args: [e],
                            thisArg: B
                        }), new Mt(s, f)) : h && u ? t.apply(this, a) : (s = this.thru(e), h ? i ? s.value()[0] : s.value() : s)
                    })
                })), n("pop push shift sort splice unshift".split(" "), (function (t) {
                    var e = jo[t],
                        n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        i = /^(?:pop|shift)$/.test(t);
                    wt.prototype[t] = function () {
                        var t = arguments;
                        if (i && !this.__chain__) {
                            var o = this.value();
                            return e.apply(Zs(o) ? o : [], t)
                        }
                        return this[n]((function (n) {
                            return e.apply(Zs(n) ? n : [], t)
                        }))
                    }
                })), ge(At.prototype, (function (t, e) {
                    var n = wt[e];
                    if (n) {
                        var i = n.name + "";
                        Ro.call(zr, i) || (zr[i] = []), zr[i].push({
                            name: e,
                            func: n
                        })
                    }
                })), zr[An(B, 2).name] = [{
                    name: "wrapper",
                    func: B
                }], At.prototype.clone = function () {
                    var t = new At(this.__wrapped__);
                    return t.__actions__ = xn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = xn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = xn(this.__views__), t
                }, At.prototype.reverse = function () {
                    if (this.__filtered__) {
                        var t = new At(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else (t = this.clone()).__dir__ *= -1;
                    return t
                }, At.prototype.value = function () {
                    var t, e = this.__wrapped__.value(),
                        n = this.__dir__,
                        i = Zs(e),
                        o = 0 > n,
                        r = i ? e.length : 0;
                    t = r;
                    for (var s = this.__views__, a = 0, u = -1, l = s.length; ++u < l;) {
                        var h = s[u],
                            c = h.size;
                        switch (h.type) {
                            case "drop":
                                a += c;
                                break;
                            case "dropRight":
                                t -= c;
                                break;
                            case "take":
                                t = pr(t, a + c);
                                break;
                            case "takeRight":
                                a = dr(a, t - c)
                        }
                    }
                    if (s = (t = {
                        start: a,
                        end: t
                    }).start, t = (a = t.end) - s, s = o ? a : s - 1, u = (a = this.__iteratees__).length, l = 0, h = pr(t, this.__takeCount__), !i || !o && r == t && h == t) return un(e, this.__actions__);
                    i = [];
                    t: for (; t-- && l < h;) {
                        for (o = -1, r = e[s += n]; ++o < u;) {
                            c = (f = a[o]).type;
                            var f = (0, f.iteratee)(r);
                            if (2 == c) r = f;
                            else if (!f) {
                                if (1 == c) continue t;
                                break t
                            }
                        }
                        i[l++] = r
                    }
                    return i
                }, wt.prototype.at = ms, wt.prototype.chain = function () {
                    return Ei(this)
                }, wt.prototype.commit = function () {
                    return new Mt(this.value(), this.__chain__)
                }, wt.prototype.next = function () {
                    this.__values__ === B && (this.__values__ = to(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                        done: t,
                        value: t ? B : this.__values__[this.__index__++]
                    }
                }, wt.prototype.plant = function (t) {
                    for (var e, n = this; n instanceof Lt;) {
                        var i = xi(n);
                        i.__index__ = 0, i.__values__ = B, e ? o.__wrapped__ = i : e = i;
                        var o = i;
                        n = n.__wrapped__
                    }
                    return o.__wrapped__ = t, e
                }, wt.prototype.reverse = function () {
                    var t = this.__wrapped__;
                    return t instanceof At ? (this.__actions__.length && (t = new At(this)), (t = t.reverse()).__actions__.push({
                        func: Ii,
                        args: [ki],
                        thisArg: B
                    }), new Mt(t, this.__chain__)) : this.thru(ki)
                }, wt.prototype.toJSON = wt.prototype.valueOf = wt.prototype.value = function () {
                    return un(this.__wrapped__, this.__actions__)
                }, wt.prototype.first = wt.prototype.head, tr && (wt.prototype[tr] = function () {
                    return this
                }), wt
            }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ot._ = Jt, define((function () {
            return Jt
        }))) : Zt ? ((Zt.exports = Jt)._ = Jt, Bt._ = Jt) : Ot._ = Jt
    }.call(this);
var urlSite = "http://localhost/y-tu-que-planes/";
$(document).ready((function () {
    var t, e, n, i, o;

    function r(e) {
        n.setLatLng(e.latlng).setContent(this.dataInfoName).openOn(t), t.setView(e.latlng, 15),
            function (t) {
                var e = $(window).width(),
                    n = $(".wrapper-navbar").height(),
                    i = $(".wrapper-first-right-header").outerHeight(),
                    o = n + i - 10;
                e <= 480 && (o = n + i);
                var r = $(t).position().top + o;
                $(".wrapper-first-right").animate({
                    scrollTop: r
                }, 1e3)
            }(this.dataInfoID)
    }

    function s() {
        $(".wrapper-first-right-list-item").waypoint((function (e) {
            var i, o, r, s;
            if ("down" === e) i = $(this).attr("data-name"), s = [o = parseFloat($(this).attr("data-lat")), r = parseFloat($(this).attr("data-lng"))];
            else {
                var a = $(this).prev();
                i = $(a).attr("data-name"), o = parseFloat($(a).attr("data-lat")), r = parseFloat($(a).attr("data-lng")), isNaN(o) && (o = parseFloat($(this).attr("data-lat"))), isNaN(r) && (r = parseFloat($(this).attr("data-lng"))), null == i && (i = $(this).attr("data-name")), s = [o, r]
            }
            n.setLatLng(s).setContent(i).openOn(t), t.setView(s, 15)
        }), {
            offset: "40%",
            context: $(".wrapper-first-right")
        })
    }

    function a() {
        return encodeURIComponent(window.location.href)
    }

    function u() {
        return encodeURIComponent(document.title)
    }
    $(".wrapper-navbar").on("click", ".wrapper-navbar-link", (function () {
        window.location.href = $(this).attr("data-href")
    })), $(window).on("resize", (function () {
        s()
    })), $(".wrapper-first-right-body").on("click", ".wflitem-title", (function () {
        let e = [parseFloat($(this).parent().attr("data-lat")), parseFloat($(this).parent().attr("data-lng"))];
        n.setLatLng(e).setContent($(this).parent().attr("data-name")).openOn(t), t.setView(e, 15)
    })), $(".wrapper-first-right-deals").on("click", ".wrapper-first-right-deals-link", (function () {
        window.location.href = $(this).attr("data-href")
    })), $(".wrapper-first-right-header").on("click", ".wfrhbi-link", (function () {
        var t, e;
        $(this).hasClass("fb") ? (t = "https://www.facebook.com/sharer/sharer.php?u=" + a() + "&t=" + u(), window.open(t, "_blank")) : $(this).hasClass("tw") ? (t = "https://twitter.com/intent/tweet?text=" + u() + "&url=" + a(), window.open(t, "_blank")) : $(this).hasClass("wa") ? (t = "https://api.whatsapp.com/send?text=" + a(), window.open(t, "_blank")) : $(this).hasClass("popup") ? (e = $(this).attr("data-id"), $.magnificPopup.open({
            items: {
                src: e
            },
            type: "inline",
            fixedContentPos: !0,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "mfp-zoom-in"
                }
            }
        })) : $(this).hasClass("btn") ? (t = $(this).attr("data-href"), window.open(t, "_blank")) : $(this).hasClass("download") && (t = "../../" + $(this).attr("data-href"), window.open(t, "_blank"))
    })), $.getJSON("/assets/js/mapa/route.json", (function (a) {

        console.log("datos "+a);
        var u = $.grep(a, (function (t, e) {
            return "camana" == t.url && "arequipa" == t.urlRegion
        }));
        ! function (t) {
            var e = "";
            e += "<div class='wrapper-navbar-container'>", e += "<div class='wrapper-navbar-left'>", e += "<div class='wrapper-navbar-link' data-href='/rutas-cortas'>", e += "<i class='fa fa-long-arrow-left'></i>Rutas cortas desde " + t[0].region, e += "</div>", e += "</div>", e += "<div class='wrapper-navbar-right'>", e += "<div class='wrapper-navbar-link' data-href='/rutas-cortasl'>", e += "<i class='fa fa-times'></i>", e += "</div>", e += "</div>", e += "</div>", $(".wrapper-navbar").append(e)
        }(u),
            function (t) {
                var e = "";
                e += "<h1>" + t[0].name + "</h1>", e += "<h2><i class='fa fa-map-marker'></i>" + t[0].region + "</h2>", e += "<div class='wrapper-first-right-header-buttons'>", e += "<div class='wrapper-first-right-header-buttons-left'>", e += "<div class='wrapper-first-right-header-buttons-item'>", e += "<label>Compartir:</label>", e += "<ul>", e += "<li class='wfrhbi-link fb'><i class='fa fa-facebook'></i></li>", e += "<li class='wfrhbi-link tw'><i class='fa fa-twitter'></i></li>", e += "<li class='wfrhbi-link wa'><i class='fa fa-whatsapp'></i></li>", e += "</ul>", e += "</div>", e += "<div class='wrapper-first-right-header-buttons-item'>", e += "<p class='wfrhbi-link popup' data-id='#datos-utiles'><i class='fa fa-info-circle'></i>Datos útiles</p>", e += "</div>", e += "</div>", ("" != t[0].google || "" != t[0].pdf) && (e += "<div class='wrapper-first-right-header-buttons-right'>", "" != t[0].google && (e += "<div class='wrapper-first-right-header-buttons-item'>", e += "<p class='wfrhbi-link btn' data-href='" + t[0].google + "'><i class='fa fa-map-marker'></i>Ubicar en Google Maps</p>", e += "</div>"), "" != t[0].pdf && (e += "<div class='wrapper-first-right-header-buttons-item'>", e += "<p class='wfrhbi-link download' data-href='" + t[0].pdf + "'><i class='fa fa-download'></i>Descargar Ruta en PDF</p>", e += "</div>"), e += "</div>");
                e += "</div>", $(".wrapper-first-right-header").append(e)
            }(u),
            function (a) {
                if (a[0].places.length > 0) {
                    var u = _(a[0].places).orderBy(["order"], ["asc"]).value();
                    $(".wrapper-first-right-body").append("<h2>¿Qué visitar?</h2>");
                    var l = "";
                    l += "<div class='wrapper-first-right-list'>";
                    var h = 0;
                    for (var c in u) {
                        if (l += "<div class='wrapper-first-right-list-item' id='map-section-" + ++h + "' data-name='" + u[c].name + "' data-lat='" + u[c].coordinate[0].latitude + "' data-lng='" + u[c].coordinate[0].longitude + "'>", l += "<h3 class='wflitem-title'>", l += "<span>" + h + "</span><label>" + u[c].name + "</label>", l += "</h3>", "" != u[c].height && (l += "<p class='wflitem-height'>" + u[c].height + "</p>"), u[c].activity.length > 0) {
                            for (var f in l += "<h4 class='wflitem-activity-title'>Actividades</h4>", l += "<ul class='wflitem-activity-list'>", u[c].activity) l += "<li>", l += "<img src='" + u[c].activity[f].icon + "' />", l += "<span>" + u[c].activity[f].name + "</span>", l += "</li>";
                            l += "</ul>"
                        }
                        if (u[c].apt.length > 0) {
                            for (var d in l += "<h4 class='wflitem-apt-title'>Recomendado</h4>", l += "<ul class='wflitem-apt-list'>", u[c].apt) l += "<li>" + u[c].apt[d].description + "</li>";
                            l += "</ul>"
                        }
                        "" != u[c].description && (l += "<p class='wflitem-apt-description'>" + u[c].description + "</p>"), "" != u[c].image && (l += "<div class='wflitem-image' style='background-image: url(/assets/images/rutas-cortas-1.jpg);'></div>"), l += "</div>"
                    }
                    l += "</div>", $(".wrapper-first-right-body").append(l), s(),
                        function (s) {
                            t = L.map("wfl-map").setView([-9.875092, -74.462691], 6), L.tileLayer("https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?access-token=V7U7oRrvposrjdIyg8bIlT3OPAr6LFrxniHQtdZ2P9RTuFKZf96V6h8ErKkia2JY", {}).addTo(t), n = L.popup({
                                offset: [0, -35]
                            }), o = L.latLngBounds();
                            var a = 0;
                            for (var u in s)
                                for (var l in a++, s[u].coordinate) {
                                    i = L.ExtraMarkers.icon({
                                        shape: "square",
                                        markerColor: "violet",
                                        prefix: "",
                                        icon: "fa-number",
                                        iconColor: "#fff",
                                        number: a.toString()
                                    });
                                    let n = [parseFloat(s[u].coordinate[l].latitude), parseFloat(s[u].coordinate[l].longitude)];
                                    (e = new L.marker(n, {
                                        icon: i
                                    }).addTo(t).on("click", r)).dataInfoID = "#map-section-" + a, e.dataInfoName = s[u].name, o.extend(n)
                                }
                            t.fitBounds(o)
                        }(u)
                } else $(".wrapper-first-right-body").hide()
            }(u),
            function (t) {
                $("#datos-utiles").addClass("white-popup mfp-with-anim mfp-hide");
                var e = "";
                if (e += "<div class='wc-popup-content'>", e += "<div class='wc-popup-content-border'>", e += "<div class='wc-popup-item'>", e += "<h2><i class='fa fa-info-circle'></i>Datos útiles</h2>", e += "<button type='button' class='mfp-close'>×</button>", e += "</div>", t[0].car.length > 0 || t[0].bus.length > 0 || t[0].airplane.length > 0 || t[0].train.length > 0 || t[0].ship.length > 0) {
                    if (e += "<div class='wc-popup-item'>", e += "<h3>¿Cómo ir?</h3>", e += "<div class='wc-popup-first'>", t[0].car.length > 0) {
                        for (var n in e += "<div class='wc-popup-first-item'>", e += "<div class='wc-popup-first-item-left'>", e += "<img src='/assets/images/mapa/etc/car.png' />", e += "</div>", e += "<div class='wc-popup-first-item-right'>", e += "<ul>", t[0].car) e += "<li>" + t[0].car[n].description + "</li>";
                        e += "</ul>", e += "</div>", e += "</div>"
                    }
                    if (t[0].bus.length > 0) {
                        for (var i in e += "<div class='wc-popup-first-item'>", e += "<div class='wc-popup-first-item-left'>", e += "<img src='/assets/images/mapa/etc/bus.png' />", e += "</div>", e += "<div class='wc-popup-first-item-right'>", e += "<ul>", t[0].bus) e += "<li>" + t[0].bus[i].description + "</li>";
                        e += "</ul>", e += "</div>", e += "</div>"
                    }
                    if (t[0].train.length > 0) {
                        for (var o in e += "<div class='wc-popup-first-item'>", e += "<div class='wc-popup-first-item-left'>", e += "<img src='/assets/images/mapa/etc/train.png' />", e += "</div>", e += "<div class='wc-popup-first-item-right'>", e += "<ul>", t[0].train) e += "<li>" + t[0].train[o].description + "</li>";
                        e += "</ul>", e += "</div>", e += "</div>"
                    }
                    if (t[0].ship.length > 0) {
                        for (var r in e += "<div class='wc-popup-first-item'>", e += "<div class='wc-popup-first-item-left'>", e += "<img src='/assets/images/mapa/etc/ship.png' />", e += "</div>", e += "<div class='wc-popup-first-item-right'>", e += "<ul>", t[0].ship) e += "<li>" + t[0].ship[r].description + "</li>";
                        e += "</ul>", e += "</div>", e += "</div>"
                    }
                    if (t[0].airplane.length > 0) {
                        for (var s in e += "<div class='wc-popup-first-item'>", e += "<div class='wc-popup-first-item-left'>", e += "<img src='/assets/images/mapa/etc/plane.png' />", e += "</div>", e += "<div class='wc-popup-first-item-right'>", e += "<ul>", t[0].airplane) e += "<li>" + t[0].airplane[s].description + "</li>";
                        e += "</ul>", e += "</div>", e += "</div>"
                    }
                    e += "</div>", e += "</div>"
                }
                "" == t[0].maximumWeather && "" == t[0].minimumWeather || (e += "<div class='wc-popup-item'>", e += "<div class='wc-popup-second'>", e += "<div class='wc-popup-second-left'>", e += "<div class='wc-popup-second-left-left'>", e += "<h3>Clima</h3>", e += "</div>", e += "<div class='wc-popup-second-left-right'>", e += "<div class='wc-popup-second-left-right-icon'>", e += "<img src='/assets/images/mapa/etc/thermometer.png' />", e += "</div>", e += "<div class='wc-popup-second-left-right-text'>", "" != t[0].maximumWeather && (e += "<p>" + t[0].maximumWeather + " máx.</p>"), "" != t[0].minimumWeather && (e += "<p>" + t[0].minimumWeather + " mín.</p>"), e += "</div>", e += "</div>", e += "</div>", e += "</div>", e += "</div>");
                e += "</div>", e += "</div>", $("#datos-utiles").html(e)
            }(u)
    })), $.getJSON("/assets/js/mapa/region.json", (function (t) {
        ! function (t) {
            if ("" != t[0].deals) {
                var e = "";
                e += "<h2>¡Descubre " + t[0].name + "!</h2>", e += "<div class='wrapper-first-right-deals-link' data-href='" + t[0].deals + "'>Ver ofertas</div>", $(".wrapper-first-right-deals").append(e)
            } else $(".wrapper-first-right-deals").hide()
        }($.grep(t, (function (t, e) {
            return "arequipa" == t.url
        })))
    }))
})), $(window).on("load", (function () {
    setTimeout((function () {
        $(".page-loader").addClass("loaded")
    }), 800)
}));