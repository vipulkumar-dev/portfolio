!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function m() {
    return n || ("undefined" != typeof window && (n = window.gsap));
  }
  function p(t) {
    return s(t).id;
  }
  function q(t) {
    return f[p("string" == typeof t ? g(t)[0] : t)];
  }
  function r(t) {
    var e,
      n = a;
    if (0.05 <= t - i)
      for (i = t; n; )
        ((e = n.g(n.t, n.p)) !== n.v1 || 0.2 < t - n.t1) &&
          ((n.v2 = n.v1), (n.v1 = e), (n.t2 = n.t1), (n.t1 = t)),
          (n = n._next);
  }
  function t() {
    (n = m()) &&
      ((g = n.utils.toArray),
      (o = n.utils.getUnit),
      (s = n.core.getCache),
      (c = n.ticker),
      (l = 1));
  }
  function u(t, e, n, i) {
    (this.t = t),
      (this.p = e),
      (this.g = t._gsap.get),
      (this.rCap = d[n || o(this.g(t, e))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = c.time),
      i && ((this._next = i)._prev = this);
  }
  var n,
    l,
    g,
    o,
    a,
    c,
    i,
    s,
    f = {},
    d = { deg: 360, rad: 2 * Math.PI },
    h = (function () {
      function VelocityTracker(e, n) {
        l || t(),
          (this.target = g(e)[0]),
          ((f[p(this.target)] = this)._props = {}),
          n && this.add(n);
      }
      VelocityTracker.register = function register(e) {
        (n = e), t();
      };
      var e = VelocityTracker.prototype;
      return (
        (e.get = function get(t, e) {
          var n,
            i,
            r =
              this._props[t] ||
              console.warn("Not tracking " + t + " velocity.");
          return (
            (n = parseFloat(e ? r.v1 : r.g(r.t, r.p)) - parseFloat(r.v2)),
            (i = r.rCap) &&
              (n %= i) !== n % (i / 2) &&
              (n = n < 0 ? n + i : n - i),
            (function _round(t) {
              return Math.round(1e4 * t) / 1e4;
            })(n / ((e ? r.t1 : c.time) - r.t2))
          );
        }),
        (e.getAll = function getAll() {
          var t,
            e = {},
            n = this._props;
          for (t in n) e[t] = this.get(t);
          return e;
        }),
        (e.isTracking = function isTracking(t) {
          return t in this._props;
        }),
        (e.add = function add(t, e) {
          t in this._props ||
            (a || (c.add(r), (i = c.time)),
            (a = this._props[t] = new u(this.target, t, e, a)));
        }),
        (e.remove = function remove(t) {
          var e,
            n,
            i = this._props[t];
          i &&
            ((e = i._prev),
            (n = i._next),
            e && (e._next = n),
            n ? (n._prev = e) : a === i && (c.remove(r), (a = 0)),
            delete this._props[t]);
        }),
        (e.kill = function kill(t) {
          for (var e in this._props) this.remove(e);
          t || delete f[p(this.target)];
        }),
        (VelocityTracker.track = function track(e, n, i) {
          l || t();
          for (
            var r,
              o,
              a = [],
              c = g(e),
              s = n.split(","),
              u = (i || "").split(","),
              f = c.length;
            f--;

          ) {
            for (r = q(c[f]) || new VelocityTracker(c[f]), o = s.length; o--; )
              r.add(s[o], u[o] || u[0]);
            a.push(r);
          }
          return a;
        }),
        (VelocityTracker.untrack = function untrack(t, e) {
          var n = (e || "").split(",");
          g(t).forEach(function (t) {
            var e = q(t);
            e &&
              (n.length
                ? n.forEach(function (t) {
                    return e.remove(t);
                  })
                : e.kill(1));
          });
        }),
        (VelocityTracker.isTracking = function isTracking(t, e) {
          var n = q(t);
          return n && n.isTracking(e);
        }),
        (VelocityTracker.getVelocity = function getVelocity(t, e) {
          var n = q(t);
          return n && n.isTracking(e)
            ? n.get(e)
            : console.warn("Not tracking velocity of " + e);
        }),
        VelocityTracker
      );
    })();
  (h.getByTarget = q), m() && n.registerPlugin(h);
  function J() {
    return (
      v ||
      ("undefined" != typeof window &&
        (v = window.gsap) &&
        v.registerPlugin &&
        v)
    );
  }
  function L(t) {
    return "number" == typeof t;
  }
  function M(t) {
    return "object" == typeof t;
  }
  function N(t) {
    return "function" == typeof t;
  }
  function Q() {
    return String.fromCharCode.apply(null, arguments);
  }
  function U(t) {
    return t;
  }
  function Y(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function Z(t, e, n) {
    for (var i in e) i in t || i === n || (t[i] = e[i]);
    return t;
  }
  function $(t) {
    var e,
      n,
      i = {};
    for (e in t) i[e] = M((n = t[e])) && !B(n) ? $(n) : n;
    return i;
  }
  function _(t, e, n, i, r) {
    var o,
      a,
      c,
      s,
      u = e.length,
      f = 0,
      l = R;
    if (M(t)) {
      for (; u--; ) {
        for (c in ((o = e[u]), (a = 0), t)) a += (s = o[c] - t[c]) * s;
        a < l && ((f = u), (l = a));
      }
      if ((r || R) < R && r < Math.sqrt(l)) return t;
    } else for (; u--; ) (a = (o = e[u]) - t) < 0 && (a = -a), a < l && i <= o && o <= n && ((f = u), (l = a));
    return e[f];
  }
  function aa(t, e, n, i, r, o, a) {
    if ("auto" === t.end) return t;
    var c,
      s,
      u = t.end;
    if (((n = isNaN(n) ? R : n), (i = isNaN(i) ? -R : i), M(e))) {
      if (
        ((c = e.calculated ? e : (N(u) ? u(e, a) : _(e, u, n, i, o)) || e),
        !e.calculated)
      ) {
        for (s in c) e[s] = c[s];
        e.calculated = !0;
      }
      c = c[r];
    } else c = N(u) ? u(e, a) : B(u) ? _(e, u, n, i, o) : parseFloat(u);
    return (
      n < c ? (c = n) : c < i && (c = i),
      { max: c, min: c, unitFactor: t.unitFactor }
    );
  }
  function ba(t, e, n) {
    return isNaN(t[e]) ? n : +t[e];
  }
  function ca(t, e) {
    return (0.05 * e * t) / k;
  }
  function da(t, e, n) {
    return Math.abs(((e - t) * k) / n / 0.05);
  }
  function fa(t, e, n, i) {
    if (e.linkedProps) {
      var r,
        o,
        a,
        c,
        s,
        u,
        f = e.linkedProps.split(","),
        l = {};
      for (r = 0; r < f.length; r++)
        (a = e[(o = f[r])]) &&
          ((c = L(a.velocity)
            ? a.velocity
            : (s = s || C(t)) && s.isTracking(o)
            ? s.get(o)
            : 0),
          (u = Math.abs(c / ba(a, "resistance", i))),
          (l[o] = parseFloat(n(t, o)) + ca(c, u)));
      return l;
    }
  }
  function ha() {
    (v = J()) &&
      ((y = v.parseEase),
      (x = v.utils.toArray),
      (P = v.utils.getUnit),
      (V = v.core.getCache),
      (O = v.utils.clamp),
      (w = y("power3")),
      (k = w(0.05)),
      (F = v.core.PropTween),
      v.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3,
        },
      }),
      (b = v.config()),
      v.registerPlugin(h),
      (T = 1));
  }
  var v,
    T,
    y,
    x,
    w,
    b,
    P,
    F,
    V,
    k,
    O,
    A,
    C = h.getByTarget,
    E = "InertiaPlugin",
    j = Q(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    I = (function (t) {
      var e =
          0 ===
            (window ? window.location.href : "").indexOf(
              Q(102, 105, 108, 101, 58, 47, 47)
            ) ||
          -1 !== t.indexOf(Q(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
          -1 !== t.indexOf(Q(49, 50, 55, 46, 48, 32, 48, 46, 49)),
        n = [
          j,
          Q(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
          Q(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            112,
            108,
            117,
            109,
            98,
            105,
            110,
            103
          ),
          Q(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
          Q(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
          Q(
            99,
            111,
            100,
            101,
            112,
            101,
            110,
            46,
            119,
            101,
            98,
            115,
            105,
            116,
            101
          ),
          Q(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
          Q(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
          Q(99, 100, 112, 110, 46, 105, 111),
          Q(112, 101, 110, 115, 46, 105, 111),
          Q(103, 97, 110, 110, 111, 110, 46, 116, 118),
          Q(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
          Q(
            116,
            104,
            101,
            109,
            101,
            102,
            111,
            114,
            101,
            115,
            116,
            46,
            110,
            101,
            116
          ),
          Q(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
          Q(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
          Q(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
          Q(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109),
          Q(112, 108, 110, 107, 114, 46, 99, 111),
          Q(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
          Q(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
          Q(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
          Q(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
          Q(99, 115, 98, 46, 97, 112, 112),
          Q(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
          Q(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
          Q(99, 111, 100, 105, 101, 114, 46, 105, 111),
          Q(
            109,
            111,
            116,
            105,
            111,
            110,
            116,
            114,
            105,
            99,
            107,
            115,
            46,
            99,
            111,
            109
          ),
          Q(
            115,
            116,
            97,
            99,
            107,
            111,
            118,
            101,
            114,
            102,
            108,
            111,
            119,
            46,
            99,
            111,
            109
          ),
          Q(
            115,
            116,
            97,
            99,
            107,
            101,
            120,
            99,
            104,
            97,
            110,
            103,
            101,
            46,
            99,
            111,
            109
          ),
          Q(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
        ],
        i = n.length;
      for (
        setTimeout(function () {
          window &&
            window.console &&
            !window._gsapWarned &&
            "object" == typeof v &&
            !1 !== v.config().trialWarn &&
            (console.log(
              Q(37, 99, 87, 97, 114, 110, 105, 110, 103),
              Q(
                102,
                111,
                110,
                116,
                45,
                115,
                105,
                122,
                101,
                58,
                51,
                48,
                112,
                120,
                59,
                99,
                111,
                108,
                111,
                114,
                58,
                114,
                101,
                100,
                59
              )
            ),
            console.log(
              Q(
                65,
                32,
                116,
                114,
                105,
                97,
                108,
                32,
                118,
                101,
                114,
                115,
                105,
                111,
                110,
                32,
                111,
                102,
                32
              ) +
                E +
                Q(
                  32,
                  105,
                  115,
                  32,
                  108,
                  111,
                  97,
                  100,
                  101,
                  100,
                  32,
                  116,
                  104,
                  97,
                  116,
                  32,
                  111,
                  110,
                  108,
                  121,
                  32,
                  119,
                  111,
                  114,
                  107,
                  115,
                  32,
                  108,
                  111,
                  99,
                  97,
                  108,
                  108,
                  121,
                  32,
                  97,
                  110,
                  100,
                  32,
                  111,
                  110,
                  32,
                  100,
                  111,
                  109,
                  97,
                  105,
                  110,
                  115,
                  32,
                  108,
                  105,
                  107,
                  101,
                  32,
                  99,
                  111,
                  100,
                  101,
                  112,
                  101,
                  110,
                  46,
                  105,
                  111,
                  32,
                  97,
                  110,
                  100,
                  32,
                  99,
                  111,
                  100,
                  101,
                  115,
                  97,
                  110,
                  100,
                  98,
                  111,
                  120,
                  46,
                  105,
                  111,
                  46,
                  32,
                  42,
                  42,
                  42,
                  32,
                  68,
                  79,
                  32,
                  78,
                  79,
                  84,
                  32,
                  68,
                  69,
                  80,
                  76,
                  79,
                  89,
                  32,
                  84,
                  72,
                  73,
                  83,
                  32,
                  70,
                  73,
                  76,
                  69,
                  32,
                  42,
                  42,
                  42,
                  32,
                  76,
                  111,
                  97,
                  100,
                  105,
                  110,
                  103,
                  32,
                  105,
                  116,
                  32,
                  111,
                  110,
                  32,
                  97,
                  110,
                  32,
                  117,
                  110,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  122,
                  101,
                  100,
                  32,
                  115,
                  105,
                  116,
                  101,
                  32,
                  118,
                  105,
                  111,
                  108,
                  97,
                  116,
                  101,
                  115,
                  32,
                  116,
                  104,
                  101,
                  32,
                  108,
                  105,
                  99,
                  101,
                  110,
                  115,
                  101,
                  32,
                  97,
                  110,
                  100,
                  32,
                  119,
                  105,
                  108,
                  108,
                  32,
                  99,
                  97,
                  117,
                  115,
                  101,
                  32,
                  97,
                  32,
                  114,
                  101,
                  100,
                  105,
                  114,
                  101,
                  99,
                  116,
                  46,
                  32,
                  80,
                  108,
                  101,
                  97,
                  115,
                  101,
                  32,
                  106,
                  111,
                  105,
                  110,
                  32,
                  67,
                  108,
                  117,
                  98,
                  32,
                  71,
                  114,
                  101,
                  101,
                  110,
                  83,
                  111,
                  99,
                  107,
                  32,
                  116,
                  111,
                  32,
                  103,
                  101,
                  116,
                  32,
                  102,
                  117,
                  108,
                  108,
                  32,
                  97,
                  99,
                  99,
                  101,
                  115,
                  115,
                  32,
                  116,
                  111,
                  32,
                  116,
                  104,
                  101,
                  32,
                  98,
                  111,
                  110,
                  117,
                  115,
                  32,
                  112,
                  108,
                  117,
                  103,
                  105,
                  110,
                  115,
                  32,
                  116,
                  104,
                  97,
                  116,
                  32,
                  98,
                  111,
                  111,
                  115,
                  116,
                  32,
                  121,
                  111,
                  117,
                  114,
                  32,
                  97,
                  110,
                  105,
                  109,
                  97,
                  116,
                  105,
                  111,
                  110,
                  32,
                  115,
                  117,
                  112,
                  101,
                  114,
                  112,
                  111,
                  119,
                  101,
                  114,
                  115,
                  46,
                  32,
                  68,
                  105,
                  115,
                  97,
                  98,
                  108,
                  101,
                  32,
                  116,
                  104,
                  105,
                  115,
                  32,
                  119,
                  97,
                  114,
                  110,
                  105,
                  110,
                  103,
                  32,
                  119,
                  105,
                  116,
                  104,
                  32,
                  103,
                  115,
                  97,
                  112,
                  46,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103,
                  40,
                  123,
                  116,
                  114,
                  105,
                  97,
                  108,
                  87,
                  97,
                  114,
                  110,
                  58,
                  32,
                  102,
                  97,
                  108,
                  115,
                  101,
                  125,
                  41,
                  59
                )
            ),
            console.log(
              Q(
                37,
                99,
                71,
                101,
                116,
                32,
                117,
                110,
                114,
                101,
                115,
                116,
                114,
                105,
                99,
                116,
                101,
                100,
                32,
                102,
                105,
                108,
                101,
                115,
                32,
                97,
                116,
                32,
                104,
                116,
                116,
                112,
                115,
                58,
                47,
                47,
                103,
                114,
                101,
                101,
                110,
                115,
                111,
                99,
                107,
                46,
                99,
                111,
                109,
                47,
                99,
                108,
                117,
                98
              ),
              Q(
                102,
                111,
                110,
                116,
                45,
                115,
                105,
                122,
                101,
                58,
                49,
                54,
                112,
                120,
                59,
                99,
                111,
                108,
                111,
                114,
                58,
                35,
                52,
                101,
                57,
                56,
                49,
                53
              )
            ),
            (window._gsapWarned = 1));
        }, 500000);
        -1 < --i;

      )
        if (-1 !== t.indexOf(n[i])) return !0;
      return (
        e ||
        !setTimeout(function () {
          window.location.href =
            Q(104, 116, 116, 112, 115, 58, 47, 47) +
            j +
            Q(
              47,
              114,
              101,
              113,
              117,
              105,
              114,
              101,
              115,
              45,
              109,
              101,
              109,
              98,
              101,
              114,
              115,
              104,
              105,
              112,
              47
            ) +
            "?plugin=" +
            E +
            "&source=trial";
        }, 500000)
      );
    })(window ? window.location.host : ""),
    B = Array.isArray,
    R = 1e10,
    W = {
      resistance: 1,
      checkpoint: 1,
      preventOvershoot: 1,
      linkedProps: 1,
      radius: 1,
      duration: 1,
    },
    S = {
      version: "3.8.0",
      name: "inertia",
      register: function register(t) {
        (v = t), ha();
      },
      init: function init(t, e, n, i, r) {
        T || ha();
        var o = C(t);
        if ("auto" === e) {
          if (!o)
            return void console.warn(
              "No inertia tracking on " +
                t +
                ". InertiaPlugin.track(target) first."
            );
          e = o.getAll();
        }
        (this.target = t), (this.tween = n), (A = e);
        var a,
          c,
          s,
          u,
          f,
          l,
          p,
          g,
          d,
          h = t._gsap,
          v = h.get,
          m = e.duration,
          y = M(m),
          w = e.preventOvershoot || (y && 0 === m.overshoot),
          Q = ba(e, "resistance", b.resistance),
          k = L(m)
            ? m
            : (function _calculateTweenDuration(t, e, n, i, r, o) {
                if (
                  (void 0 === n && (n = 10),
                  void 0 === i && (i = 0.2),
                  void 0 === r && (r = 1),
                  void 0 === o && (o = 0),
                  (function _isString(t) {
                    return "string" == typeof t;
                  })(t) && (t = x(t)[0]),
                  !t)
                )
                  return 0;
                var a,
                  c,
                  s,
                  u,
                  f,
                  l,
                  p,
                  g,
                  d,
                  h,
                  v = 0,
                  m = R,
                  y = e.inertia || e,
                  w = V(t).get,
                  Q = ba(y, "resistance", b.resistance);
                for (a in ((h = fa(t, y, w, Q)), y))
                  W[a] ||
                    ((c = y[a]),
                    M(c) ||
                      ((g = g || C(t)) && g.isTracking(a)
                        ? (c = L(c) ? { velocity: c } : { velocity: g.get(a) })
                        : ((u = +c || 0), (s = Math.abs(u / Q)))),
                    M(c) &&
                      ((u = L(c.velocity)
                        ? c.velocity
                        : (g = g || C(t)) && g.isTracking(a)
                        ? g.get(a)
                        : 0),
                      (s = O(i, n, Math.abs(u / ba(c, "resistance", Q)))),
                      (l = (f = parseFloat(w(t, a)) || 0) + ca(u, s)),
                      "end" in c &&
                        ((c = aa(
                          c,
                          h && a in h ? h : l,
                          c.max,
                          c.min,
                          a,
                          y.radius,
                          u
                        )),
                        o &&
                          (A === e && (A = y = $(e)),
                          (y[a] = Z(c, y[a], "end")))),
                      "max" in c && l > +c.max + 1e-10
                        ? ((d = c.unitFactor || b.unitFactors[a] || 1),
                          (p =
                            (f > c.max && c.min !== c.max) ||
                            (-15 < u * d && u * d < 45)
                              ? i + 0.1 * (n - i)
                              : da(f, c.max, u)) +
                            r <
                            m && (m = p + r))
                        : "min" in c &&
                          l < c.min - 1e-10 &&
                          ((d = c.unitFactor || b.unitFactors[a] || 1),
                          (p =
                            (f < c.min && c.min !== c.max) ||
                            (-45 < u * d && u * d < 15)
                              ? i + 0.1 * (n - i)
                              : da(f, c.min, u)) +
                            r <
                            m && (m = p + r)),
                      v < p && (v = p)),
                    v < s && (v = s));
                return m < v && (v = m), n < v ? n : v < i ? i : v;
              })(
                t,
                e,
                (y && m.max) || 10,
                (y && m.min) || 0.2,
                y && "overshoot" in m ? +m.overshoot : w ? 0 : 1,
                !0
              );
        for (a in ((e = A), (A = 0), (d = fa(t, e, v, Q)), e))
          W[a] ||
            ((c = e[a]),
            N(c) && (c = c(i, t, r)),
            L(c)
              ? (f = c)
              : M(c) && !isNaN(c.velocity)
              ? (f = +c.velocity)
              : o && o.isTracking(a)
              ? (f = o.get(a))
              : console.warn(
                  "ERROR: No velocity was defined for " + t + " property: " + a
                ),
            (l = ca(f, k)),
            (g = 0),
            (s = v(t, a)),
            (u = P(s)),
            (s = parseFloat(s)),
            M(c) &&
              ((p = s + l),
              "end" in c &&
                (c = aa(c, d && a in d ? d : p, c.max, c.min, a, e.radius, f)),
              "max" in c && +c.max < p
                ? w || c.preventOvershoot
                  ? (l = c.max - s)
                  : (g = c.max - s - l)
                : "min" in c &&
                  +c.min > p &&
                  (w || c.preventOvershoot
                    ? (l = c.min - s)
                    : (g = c.min - s - l))),
            this._props.push(a),
            (this._pt = new F(this._pt, t, a, s, 0, U, 0, h.set(t, a, this))),
            (this._pt.u = u || 0),
            (this._pt.c1 = l),
            (this._pt.c2 = g));
        return n.duration(k), I;
      },
      render: function render(t, e) {
        var n = e._pt;
        for (t = w(e.tween._time / e.tween._dur); n; )
          n.set(n.t, n.p, Y(n.s + n.c1 * t + n.c2 * t * t) + n.u, n.d, t),
            (n = n._next);
      },
    };
  "track,untrack,isTracking,getVelocity,getByTarget"
    .split(",")
    .forEach(function (t) {
      return (S[t] = h[t]);
    }),
    J() && v.registerPlugin(S),
    (e.InertiaPlugin = S),
    (e.VelocityTracker = h),
    (e.default = S);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
