/*
 The buffer module from node.js, for the browser.

 @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 @license  MIT
*/
function Ob(t, n, e, r) {
  for (var o, i, a = e + 2; a <= r; a += 2) {
    (o = n[a]), (i = n[a + 1]);
    for (var u = a - 2; u >= e && t[o] < t[n[u]]; u -= 2)
      (n[u + 2] = n[u]), (n[u + 3] = n[u + 1]);
    (n[u + 2] = o), (n[u + 3] = i);
  }
}
function Pb(t, n, e, r) {
  for (var o, i, a = e, u = r; a < r; ) {
    for (o = t[n[((e + r) >> 2) << 1]]; a <= u; ) {
      for (; t[n[a]] < o; ) a += 2;
      for (; t[n[u]] > o; ) u -= 2;
      a <= u &&
        ((i = n[a]),
        (n[a] = n[u]),
        (n[u] = i),
        (i = n[a + 1]),
        (n[a + 1] = n[u + 1]),
        (n[u + 1] = i),
        (a += 2),
        (u -= 2));
    }
    if ((40 > u - e ? Ob(t, n, e, u) : Pb(t, n, e, u), 40 > r - a)) {
      Ob(t, n, a, r);
      break;
    }
    (e = a), (u = r);
  }
}
function Rb(t, n, e, r, o, i) {
  return (t -= r), (n -= o), (e -= i), Math.sqrt(t * t + n * n + e * e);
}
function z(t, n, e, r) {
  return (t -= e) * t + (n -= r) * n;
}
function Sb(t, n, e, r) {
  return (t -= e), (n -= r), Math.sqrt(t * t + n * n);
}
function Tb() {}
function Ub() {}
function Vb() {}
function Wb(t, n, e) {
  (t *= Qb), (n *= Qb);
  var r = Math.cos(n);
  (e[0] = Math.cos(t) * r * 6378137),
    (e[1] = Math.sin(t) * r * 6378137),
    (e[2] = 6378137 * Math.sin(n));
}
function Xb() {}
function Yb() {}
function Zb(t, n, e, r, o, i) {
  return (t = t * r - t * i + e * i - e * n + o * n - o * r) * t;
}
function $b() {}
function ac(t, n, e, r, o, i) {
  var a = z(e, r, o, i),
    u = ((t - e) * (o - e) + (n - r) * (i - r)) / a;
  return 0 === a
    ? z(t, n, e, r)
    : (0 > u && (u = 0),
      1 < u && (u = 1),
      z(t, n, e + u * (o - e), r + u * (i - r)));
}
function ec() {}
function fc() {}
function gc() {}
function hc() {}
function kc() {}
function J() {}
function mc() {}
function qc() {}
function lc() {}
function nc() {}
function rc() {}
function M() {}
function oc() {}
function vc() {}
function xc() {}
function yc() {}
function zc() {}
function wc() {}
function O() {}
function P() {}
function Dc() {}
function Ec() {}
function Fc() {}
function tc() {}
function Bc() {}
function uc() {}
function Ac() {}
function Hc() {}
function Jc() {}
function Kc() {}
function Mc() {}
function Q() {}
function R() {}
function Nc() {
  var t = Mc.apply,
    n = w.toArray(arguments),
    e = Ic.current_command;
  e && "help" != e && n.unshift("[" + e + "]"), t.call(Mc, null, n);
}
function Oc() {
  (Ic.VERBOSE || Ic.verbose) && Nc.apply(null, arguments);
}
function Lc() {}
function ca() {}
function da() {}
function ea() {}
function fa(t, n, e) {
  return t < n ? n : t > e ? e : t;
}
function ha(t) {
  return Array.isArray(t);
}
function ia(t) {
  return null != t && t.constructor == Number;
}
function ja(t) {
  return ia(t) && !isNaN(t);
}
function ka(t) {
  return ja(t) && 1 / 0 !== t && -1 / 0 !== t;
}
function ma() {}
function na() {}
function oa(t) {
  return null != t && t.toString === String.prototype.toString;
}
function pa() {}
function qa() {}
function ra() {}
function sa(t) {
  ta(t) || Q("toArray() requires an array-like object");
  try {
    var n = Array.prototype.slice.call(t, 0);
  } catch (o) {
    n = [];
    for (var e = 0, r = t.length; e < r; e++) n[e] = t[e];
  }
  return n;
}
function ta(t) {
  return !!t && (!!ha(t) || (!oa(t) && (0 === t.length || 0 < t.length)));
}
function ua() {}
function va() {}
function wa() {}
function xa(t) {
  for (var n = 1, e = arguments.length; n < e; n++) {
    var r,
      o = arguments[n] || {};
    for (r in o) 0 == r in t && o.hasOwnProperty(r) && (t[r] = o[r]);
  }
  return t;
}
function ya(t) {
  var n,
    e,
    r = t || {},
    o = arguments.length;
  for (e = 1; e < o; e++) {
    var i = arguments[e] || {};
    for (n in i) i.hasOwnProperty(n) && (r[n] = i[n]);
  }
  return r;
}
function za() {}
function Aa() {}
function Ba() {}
function Ca() {}
function Da() {}
function Ea(t, n) {
  for (var e = n != n, r = 0, o = t.length || 0; r < o; r++)
    if (t[r] === n || (e && t[r] != t[r])) return r;
  return -1;
}
function Fa(t, n) {
  return oa(t)
    ? -1 != t.indexOf(n)
    : ta(t)
    ? -1 != Ea(t, n)
    : void Q("Expected Array or String argument");
}
function Ga(t, n) {
  return t.reduce(function (t, e) {
    return t || n(e);
  }, !1);
}
function Ha() {}
function Ia(t, n, e) {
  return 0 === (t = t.filter(n, e)).length ? null : t[0];
}
function Ka() {}
function La() {}
function Ma(t, n) {
  ta(t) || Q("sum() expects an array, received:", t);
  for (var e, r = 0, o = 0, i = 0, a = t.length; i < a; i++)
    (e = t[i]) ? (r += e) : isNaN(e) && o++;
  return n && (n.nan = o), r;
}
function Na() {}
function Oa() {}
function Pa() {}
function Qa() {}
function Ra() {}
function Sa() {}
function Ta() {}
function Ua(t, n, e) {
  if (!ta(t)) throw Error("#forEach() takes an array-like argument. " + t);
  for (var r = 0, o = t.length; r < o; r++) n.call(e, t[r], r);
}
function Va() {}
function Wa(t, n) {
  for (var e = 0, r = t.length; e < r; e++) t[e] = n;
  return t;
}
function Xa() {}
function Ya() {}
function Za(t) {
  return 1 != t ? "s" : "";
}
function $a() {}
function ab() {}
function bb() {}
function cb() {}
function db() {}
function eb() {}
function fb(t) {
  var n = "",
    e = "-" == t[0] ? 1 : 0,
    r = t.indexOf("."),
    o = t.length;
  for (r = (-1 == r ? o : r) - 3; r > e; )
    (n = "," + t.substring(r, o) + n), (o = r), (r -= 3);
  return t.substring(0, o) + n;
}
function gb(t, n) {
  return 0 <= n ? t.toFixed(n) : String(t);
}
function hb() {}
function ib() {}
function jb(t) {
  for (var n = [], e = 1; e < arguments.length; e += 2)
    n.push(ob(arguments[e], arguments[e + 1]));
  return (
    t.sort(function (t, e) {
      for (var r = 0, o = 0, i = n.length; o < i && 0 === r; )
        (r = n[o](t, e)), o++;
      return r;
    }),
    t
  );
}
function kb() {}
function lb() {}
function mb() {}
function nb() {}
function ob(t, n) {
  var e = pb(n);
  return function (n, r) {
    return e(n[t], r[t]);
  };
}
function pb(t) {
  return (
    (t = !1 !== t),
    function (n, e) {
      var r = 0;
      return (
        null == e
          ? (r = null == n ? 0 : -1)
          : null == n
          ? (r = 1)
          : n < e
          ? (r = t ? -1 : 1)
          : n > e
          ? (r = t ? 1 : -1)
          : n != n
          ? (r = 1)
          : e != e && (r = -1),
        r
      );
    }
  );
}
function qb() {}
function rb() {}
function sb() {}
function tb() {}
function ub(t, n) {
  (!t.length || 1 > n || n > t.length) &&
    Q("[findValueByRank()] invalid input"),
    (n = fa(0 | n, 1, t.length)),
    --n;
  for (var e, r, o, i, a = 0, u = t.length - 1; a < u; ) {
    (o = t[n]), (e = a), (r = u);
    do {
      for (; t[e] < o; ) e++;
      for (; o < t[r]; ) r--;
      e <= r && ((i = t[e]), (t[e] = t[r]), (t[r] = i), e++, r--);
    } while (e <= r);
    r < n && (a = e), n < e && (u = r);
  }
  return t[n];
}
function vb() {}
function wb() {}
function xb(t) {
  return yb(t).apply(null, Array.prototype.slice.call(arguments, 1));
}
function yb(t) {
  for (
    var n = /%([',+0]*)([1-9]?)((?:\.[1-9])?)([sdifxX%])/g,
      e = [],
      r = [],
      o = 0,
      i = "",
      a = n.exec(t);
    a;

  )
    (o = t.substring(o, n.lastIndex - a[0].length)),
      "%%" == a[0] ? (i += o + "%") : (e.push(i + o), (i = ""), r.push(a)),
      (o = n.lastIndex),
      (a = n.exec(t));
  return (
    e.push(i + t.substr(o)),
    function () {
      var n = e[0],
        o = arguments.length;
      o != r.length &&
        Q(
          "[format()] Data does not match format string; format:",
          t,
          "data:",
          arguments
        );
      for (var i = 0; i < o; i++) {
        var a = void 0,
          u = void 0,
          c = void 0,
          f = arguments[i],
          s = r[i],
          l = s[1],
          p = s[2],
          h = s[3] ? parseInt(s[3].substr(1)) : void 0,
          g = s[4],
          d = "s" == g,
          y = "x" == g || "X" == g,
          v = "d" == g || "i" == g,
          m = !d;
        s = "";
        var b = 0,
          x = !1;
        d
          ? (c = String(f))
          : y
          ? ((c = f.toString(16)), "X" == g && (c = c.toUpperCase()))
          : m &&
            ("-" == (c = gb(f, v ? 0 : h))[0] && ((x = !0), (c = c.substr(1))),
            (f = 0 == parseFloat(c)),
            (-1 == l.indexOf("'") && -1 == l.indexOf(",")) || (c = fb(c)),
            f || (x ? (s = "−") : -1 != l.indexOf("+") && (s = "+"))),
          p &&
            (f = c.length + s.length) < (p = parseInt(p, 10)) &&
            ((b = p - f), (a = Ya((u = -1 == l.indexOf("0") ? " " : "0"), b))),
          (n +=
            (c = 0 == b ? s + c : "0" == u ? s + a + c : a + s + c) + e[i + 1]);
      }
      return n;
    }
  );
}
function zb() {}
function Ab() {}
function Bb(t, n) {
  var e,
    r = 0,
    o = 1 <= n ? n : 1.2;
  return function (n) {
    return n > r && ((r = Math.ceil(n * o)), (e = t ? new t(r) : Ab(r))), e;
  };
}
function Cb(t, n, e, r, o, i) {
  t === e && r > n && Q("copy error");
  var a = 1,
    u = 0;
  for (i && ((a = -1), (u = o - 1)), i = 0; i < o; i++, u += a)
    e[i + r] = t[n + u];
}
function Db(t, n, e) {
  return (
    (e = e || t.length),
    (n = new t.constructor(Math.max(t.length, n))),
    Cb(t, 0, n, 0, e),
    n
  );
}
function Eb() {}
function Fb() {}
function Gb(t) {
  var n =
    0 < (t = String(t)).indexOf("%")
      ? Number(t.replace("%", "")) / 100
      : Number(t);
  return (0 <= n && 1 >= n) || R(xb("Invalid percentage: %s", t)), n;
}
function Hb() {}
function Ib() {}
function Jb() {}
function Kb() {}
function Lb() {}
function Tc() {}
function Mb() {}
function Uc() {}
function Nb() {}
function Vc() {}
function U() {
  0 < arguments.length && this.setBounds.apply(this, arguments);
}
function Wc() {}
function Xc() {}
function Yc() {}
function Zc() {}
function bd() {}
function dd(t) {
  return 0 <= t ? t : ~t;
}
function fd() {}
function hd(t, n, e, r) {
  var o = 0,
    i = -1;
  if (e > r) {
    var a = e;
    (e = r), (r = a);
  }
  for (a = e + 1; a < r; a++) (e = t[a]) < n && e > o && ((i = a), (o = e));
  return i;
}
function gd() {}
function kd() {}
function ld() {}
function md() {}
function nd() {}
function pd() {}
function qd() {}
function od(t, n) {
  var e, r;
  if (((t = n.getShapeIter(t)), (n = 0), t.hasNext())) {
    var o = (e = 0),
      i = -t.x;
    for (r = -t.y; t.hasNext(); ) {
      var a = e,
        u = o;
      n += (e = t.x + i) * u - a * (o = t.y + r);
    }
  }
  return n / 2;
}
function rd() {}
function sd() {}
function td() {}
function vd(t, n) {
  var e = (function (t) {
      var n = 0;
      return (
        (t = t.forEachSegment(function (t, e, r, o) {
          (r = r[t] - r[e]), (t = o[t] - o[e]), (n += Math.sqrt(r * r + t * t));
        })),
        n / t || 0
      );
    })(t),
    r = 0.0025 * e;
  0 < n &&
    ((r = n),
    Nc(
      w.format(
        "Applying snapping threshold of %s -- %.6f times avg. segment length",
        n,
        n / e
      )
    )),
    (n = r);
  var o = 0;
  if (((e = t.getVertexData()), 0 < n)) {
    var i = e.xx,
      a = i.length;
    r = new Uint32Array(a);
    for (var u = 0; u < a; u++) r[u] = u;
    for (wd(i, r, 0, r.length - 1), i = 0, a = r.length; i < a; i++) {
      for (
        var c,
          f,
          s = n,
          l = r,
          p = e.xx,
          h = e.yy,
          g = i,
          d = l.length,
          y = p[l[i]],
          v = h[l[i]],
          m = 0;
        ++g < d && !((c = p[(f = l[g])] - y) > s);

      )
        (u = h[f] - v),
          (0 === c && 0 === u) ||
            c * c + u * u > s * s ||
            ((p[f] = y), (h[f] = v), m++);
      o += m;
    }
  }
  0 < (n = o) && t.dedupCoords(),
    Nc(w.format("Snapped %s point%s", n, w.pluralSuffix(n)));
}
function wd(t, n, e, r) {
  if (24 < r - e) {
    for (var o, i = t[n[(e + r) >> 1]], a = e, u = r; a <= u; ) {
      for (; t[n[a]] < i; ) a++;
      for (; t[n[u]] > i; ) u--;
      a <= u && ((o = n[a]), (n[a] = n[u]), (n[u] = o), a++, u--);
    }
    u > e && wd(t, n, e, u), a < r && wd(t, n, a, r);
  } else
    for (u = e + 1; u <= r; u++) {
      for (i = n[u], a = u - 1; a >= e && t[i] < t[n[a]]; a--) n[a + 1] = n[a];
      n[a + 1] = i;
    }
}
function xd(t, n, e, r, o, i, a, u) {
  ac(e, r, o, i, a, u) > n ||
    ((o = z(o, i, e, r)),
    (a = z(a, u, e, r)),
    o <= n || a <= n || t.push(e, r));
}
function yd(t, n, e, r, o, i) {
  return (e = Sb(e, r, o, i)) < n && ((n = e), (t[0] = o), (t[1] = i)), n;
}
function zd(t, n, e) {
  return (
    (n < e ? t < n || t > e : n > e ? t > n || t < e : t != n) &&
      (t = Math.abs(t - n) < Math.abs(t - e) ? n : e),
    t
  );
}
function Ad(t, n, e, r, o, i) {
  return (t - o) * (r - i) - (n - i) * (e - o);
}
function Bd(t, n, e, r, o, i, a, u) {
  return (
    0 >= Ad(t, n, e, r, o, i) * Ad(t, n, e, r, a, u) &&
    0 >= Ad(o, i, a, u, t, n) * Ad(o, i, a, u, e, r)
  );
}
function Dd(t) {
  return [
    -180 + (t = w.isFiniteNumber(t) ? t : 1e-10),
    -90 + t,
    180 - t,
    90 - t,
  ];
}
function Ed(t) {
  var n = Dd(-1);
  return (t = t instanceof U ? t.toArray() : t), V.containsBounds(n, t);
}
function Hd(t, n) {
  n = w.extend({}, n);
  var e = t.getBounds();
  !t.isPlanar() && V.containsBounds(Dd(), e.toArray());
  var r = e.ymin,
    o = e.ymax - r,
    i =
      n.stripes ||
      (function (t) {
        return (
          (t = t.getFilteredPointCount() - t.size()),
          0 < (t = Math.ceil(Math.pow(10 * t, 0.6) / 40)) ? t : 1
        );
      })(t),
    a = new Uint32Array(i),
    u =
      1 < i && 0 < o
        ? function (t) {
            return Math.floor(((i - 1) * (t - r)) / o);
          }
        : function () {};
  0 == 0 <= n.tolerance &&
    (n.tolerance = 1e-14 * Math.max.apply(null, e.toArray().map(Math.abs))),
    t.forEachSegment(function (t, n, e, r) {
      for (t = u(r[t]), n = u(r[n]); (a[t] += 2), t != n; ) t += n > t ? 1 : -1;
    });
  var c = (function (t) {
      var n = 4 * t;
      return (
        (!Fd || Fd.byteLength < n) && (Fd = new ArrayBuffer(n)),
        new Uint32Array(Fd, 0, t)
      );
    })(w.sum(a)),
    f = 0,
    s = [];
  w.forEach(a, function (t) {
    var n = f;
    (f += t), s.push(c.subarray(n, f));
  }),
    w.initializeArray(a, 0),
    t.forEachSegment(function (t, n, e, r) {
      (e = u(r[t])), (r = u(r[n]));
      for (
        var o, i;
        (o = a[e]), (a[e] = o + 2), ((i = s[e])[o] = t), (i[o + 1] = n), e != r;

      )
        e += r > e ? 1 : -1;
    });
  var l = t.getVertexData(),
    p = [];
  for (t = 0; t < i; t++) {
    var h = Jd(s[t], l.xx, l.yy, n);
    for (e = 0; e < h.length; e++) p.push(h[e]);
  }
  return (function (t, n) {
    var e = {},
      r = n || Md;
    return t.filter(function (t) {
      return !((t = r(t)) in e) && (e[t] = !0);
    });
  })(p, n.unique ? Ld : null);
}
function Md(t) {
  return t.a.join(",") + ";" + t.b.join(",");
}
function Ld() {}
function Jd(t, n, e, r) {
  var o,
    i,
    a,
    u = t.length - 2,
    c = [];
  r = (r || {}).tolerance;
  var f = 0;
  for (o = t.length; f < o; f += 2)
    if (n[t[f]] > n[t[f + 1]]) {
      var s = f + 1,
        l = t[f];
      (t[f] = t[s]), (t[s] = l);
    }
  for (Pb(n, t, 0, t.length - 2), i = 0; i < u; ) {
    (f = t[i]), (o = t[i + 1]), (s = n[f]), (l = n[o]);
    var p = e[f],
      h = e[o];
    for (a = i; a < u; ) {
      var g = t[(a += 2)],
        d = n[g];
      if (l < d) break;
      var y = e[g],
        v = t[a + 1],
        m = n[v],
        b = e[v];
      if (p >= y) {
        if (p > b && h > y && h > b) continue;
      } else if (p < b && h < y && h < b) continue;
      f != g &&
        f != v &&
        o != g &&
        o != v &&
        (d = V.segmentIntersection(s, p, l, h, d, y, m, b, r)) &&
        ((m = [f, o]),
        (g = [g, v]),
        c.push(Nd(d, m, g, n, e)),
        4 == d.length && c.push(Nd(d.slice(2), m, g, n, e)));
    }
    i += 2;
  }
  return c;
}
function Nd(t, n, e, r, o) {
  var i = t[0];
  return (
    (n = Od(i, (t = t[1]), n[0], n[1], r, o)),
    (e = Od(i, t, e[0], e[1], r, o)),
    { x: i, y: t, a: (r = n[0] < e[0] ? n : e), b: r == n ? e : n }
  );
}
function Od(t, n, e, r, o, i) {
  return o[e] == t && i[e] == n
    ? [e, e]
    : o[r] == t && i[r] == n
    ? [r, r]
    : e < r
    ? [e, r]
    : [r, e];
}
function Pd(t, n) {
  var e = t.getVertexData(),
    r = 0,
    o = 0;
  for (
    n = Qd(n, (t = t.getRetainedInterval()), e.zz), w.sortOn(n, "z", !0);
    0 < n.length;

  ) {
    var i = n.pop(),
      a = t,
      u = e.xx,
      c = e.yy,
      f = e.zz,
      s = i,
      l = a,
      p = u,
      h = c,
      g = f,
      d = Rd(s.a, l, p, h, g);
    if (
      1 ==
      (a = Qd((u = Jd((d = d.concat(Rd(s.b, l, p, h, g))), u, c)), a, f)).length
    ) {
      for (
        a = a[0],
          f = t,
          u = e.zz,
          c = [],
          s = a.a[0],
          l = a.a[1],
          p = a.z,
          h = s + 1;
        h <= l;
        h++
      )
        (u[h] != p && h != l) ||
          (c.push({ a: [s, h], b: a.b, z: p }), h != l && (u[h] = f), (s = h));
      2 > c.length && Q("Error in unwindIntersection()"), (a = c), r++;
    }
    for (f = 0; f < a.length; f++) {
      for (u = n, c = a[f], s = u.length; 0 < s && !(u[s - 1].z <= c.z); )
        (u[s] = u[s - 1]), s--;
      u[s] = c;
    }
  }
  return 5e5 < ++o ? (Oc("Caught an infinite loop at intersection:", i), 0) : r;
}
function Qd(t, n, e) {
  return t.reduce(function (t, r) {
    var o = hd(e, n, r.a[0], r.a[1]),
      i = hd(e, n, r.b[0], r.b[1]);
    return (
      null !==
        (r =
          -1 == o && -1 == i
            ? null
            : -1 == i || (-1 != o && e[o] > e[i])
            ? { a: r.a, b: r.b, z: e[o] }
            : { a: r.b, b: r.a, z: e[i] }) && t.push(r),
      t
    );
  }, []);
}
function Rd(t, n, e, r, o) {
  if (((r = []), t[0] <= t[1])) {
    var i = t[0];
    t = t[1];
  } else (i = t[1]), (t = t[0]);
  var a = i;
  for (i += 1; i <= t; i++)
    o[i] >= n && (e[a] < e[i] ? r.push(a, i) : r.push(i, a), (a = i));
  return r;
}
function Sd(t) {
  function n(t) {
    for (var n = r(t); n > t; ) {
      var o = n,
        a = i[t];
      e(t, i[o]), e(o, a), (n = r((t = n)));
    }
  }
  function e(t, n) {
    (a[n] = t), (i[t] = n);
  }
  function r(t) {
    var n = 2 * t + 1,
      e = n + 1,
      r = s;
    return n < r && f(t, n) && (t = n), e < r && f(t, e) && (t = e), t;
  }
  var o,
    i,
    a,
    u = w.expandoBuffer(Int32Array),
    c = w.expandoBuffer(Int32Array),
    f =
      "max" == t
        ? function () {}
        : function (t, n) {
            (t = i[t]), (n = i[n]);
            var e = o[t],
              r = o[n];
            return e > r || (e === r && t > n);
          },
    s = 0;
  (this.init = function (t) {
    for (o = t, s = t.length, i = u(s), a = c(s), t = 0; t < s; t++) e(t, t);
    for (t = (s - 2) >> 1; 0 <= t; t--) n(t);
  }),
    (this.size = function () {
      return s;
    }),
    (this.updateValue = function (t, r) {
      var u = a[t];
      for (
        o[t] = r, (0 <= u && u < s) || Q("Out-of-range heap index."), t = u;
        0 < t && !f(t, (r = (t - 1) >> 1));

      ) {
        u = r;
        var c = i[t];
        e(t, i[u]), e(u, c), (t = r);
      }
      n(t);
    }),
    (this.popValue = function () {}),
    (this.getValue = function () {}),
    (this.peek = function () {}),
    (this.peekValue = function () {}),
    (this.pop = function () {
      0 >= s && Q("Tried to pop from an empty heap.");
      var t = i[0];
      return e(0, i[--s]), n(0), t;
    });
}
function Xd(t, n, e) {
  var r = t.getBounds().toArray();
  !0 !== V.containsBounds(n, r) && t.forEach3(function () {});
}
function Yd() {}
function ae() {}
function ee() {}
function fe(t) {
  return t
    ? t.map(function (t) {
        return t.concat();
      })
    : null;
}
function ke(t) {
  var n,
    e = {};
  if (!t) return null;
  for (n in t)
    if (t.hasOwnProperty(n)) {
      var r = t[n];
      r == t && delete (r = w.extend({}, r))[n],
        (e[n] = r && r.constructor === Object ? ke(r) : r);
    }
  return e;
}
function ne(t) {
  if (w.isArray(t)) var n = t;
  else if (((n = []), w.isInteger(t))) for (var e = 0; e < t; e++) n.push({});
  else t && Q("Invalid DataTable constructor argument:", t);
  (this.getRecords = function () {
    return n;
  }),
    (this.getReadOnlyRecordAt = function () {});
}
function oe(t) {
  return (
    ("polygon" == t.geometry_type || "polyline" == t.geometry_type) && pe(t)
  );
}
function qe() {}
function pe(t) {
  return w.some(t.shapes || [], function (t) {
    return !!t;
  });
}
function te(t) {
  return (t = ue(t)).data && (t.data = t.data.clone()), t;
}
function ue(t) {
  var n = w.extend({}, t);
  return (
    t.shapes &&
      ((t = t.shapes), (t = w.isArray(t) ? t.map(fe) : null), (n.shapes = t)),
    n
  );
}
function ve(t) {
  var n = new ArrayBuffer(16),
    e = new Float64Array(n),
    r = new Uint32Array(n),
    o = 0 | t;
  if (0 == 0 < o) throw Error("Invalid size param: " + t);
  return function (t, n) {
    return (
      (e[0] = t),
      (e[1] = n),
      (2147483647 & (t = ((t = r[0] ^ r[1]) << 5) ^ (t >> 7) ^ r[2] ^ r[3])) % o
    );
  };
}
function xe(t, n) {
  (this._n = this._i = 0),
    (this._inc = 1),
    (this._xx = t),
    (this._yy = n),
    (this.y = this.x = this.i = 0);
}
function ye(t, n, e) {
  var r = 0,
    o = 0,
    i = 1,
    a = 0;
  (this.init = function (t, n, e, u) {
    return (
      (r = u || 0),
      e
        ? ((o = t), (i = 1), (a = t + n))
        : ((o = t + n - 1), (i = -1), (a = t - 1)),
      this
    );
  }),
    (this.hasNext = function () {
      var u = o,
        c = u,
        f = r,
        s = a,
        l = i;
      if (u == s) return !1;
      do {
        c += l;
      } while (c != s && e[c] < f);
      return (o = c), (this.x = t[u]), (this.y = n[u]), (this.i = u), !0;
    });
}
function ze(t) {
  (this._arcs = t), (this.y = this.x = this._n = this._i = 0);
}
function Ae() {
  function t(t, n, r) {
    var f = t.length;
    for (
      t instanceof Array && (t = new Uint32Array(t)),
        n instanceof Array && (n = new Float64Array(n)),
        r instanceof Array && (r = new Float64Array(r)),
        o = n,
        i = r,
        u = t,
        c = null,
        h = 0,
        p = null,
        a = new Uint32Array(f),
        r = n = 0;
      r < f;
      r++
    )
      (a[r] = n), (n += t[r]);
    return (
      (n == o.length && o.length == i.length) ||
        Q("ArcCollection#initXYData() Counting error"),
      e(),
      (l = new xe(o, i)),
      this
    );
  }
  function n(t) {
    t
      ? (t.length != o.length &&
          Q("ArcCollection#initZData() mismatched arrays"),
        t instanceof Array && (t = new Float64Array(t)),
        (p = new ye(o, i, (c = t))))
      : ((c = null), (h = 0), (p = null));
  }
  function e() {
    for (
      var t,
        n,
        e,
        r = o,
        a = i,
        c = u,
        l = c.length,
        p = new Float64Array(4 * l),
        h = new U(),
        g = 0,
        d = 0;
      d < l;
      d++
    )
      if (0 < (t = c[d])) {
        n = 4 * d;
        var y = (e = void 0),
          v = void 0,
          m = void 0,
          b = r,
          x = a,
          w = t,
          A = 0 | g,
          _ = isNaN(w) ? b.length - A : w + A;
        for (0 < _ && ((m = y = b[A]), (v = e = x[A])), A++; A < _; A++) {
          var P = b[A];
          P < m && (m = P),
            P > y && (y = P),
            (w = x[A]) < v && (v = w),
            w > e && (e = w);
        }
        (e = [m, v, y, e]),
          (p[n++] = e[0]),
          (p[n++] = e[1]),
          (p[n++] = e[2]),
          (p[n] = e[3]),
          (g += t),
          h.mergeBounds(e);
      }
    (f = p), (s = h);
  }
  function r() {
    var t = c,
      n = h;
    if (!t || !n) return this.getPointCount();
    for (var e = 0, r = 0, o = t.length; r < o; r++) t[r] >= n && e++;
    return e;
  }
  var o,
    i,
    a,
    u,
    c,
    f,
    s,
    l,
    p,
    h = 0;
  1 == arguments.length ||
    (3 == arguments.length
      ? t.apply(this, arguments)
      : Q("ArcCollection() Invalid arguments")),
    (this.updateVertexData = function (e, r, o, i) {
      t(e, r, o), n(i || null);
    }),
    (this.getVertexData = function () {
      return { xx: o, yy: i, zz: c, bb: f, nn: u, ii: a };
    }),
    (this.getCopy = function () {
      var t = new Ae(
        new Int32Array(u),
        new Float64Array(o),
        new Float64Array(i)
      );
      return (
        c && (t.setThresholds(new Float64Array(c)), t.setRetainedInterval(h)), t
      );
    }),
    (this.getFilteredCopy = function () {
      if (!c || 0 === h) return this.getCopy();
      var t = void 0,
        n = new Ae(t.nn, t.xx, t.yy);
      return n.setThresholds(t.zz), n;
    }),
    (this.toArray = function () {}),
    (this.toJSON = function () {}),
    (this.forEachArcSegment = function (t, n) {
      var e = 0 <= t,
        r = e ? t : ~t;
      t = this.getRetainedInterval();
      var f = u[r],
        s = e ? 1 : -1;
      r = e = e ? a[r] : a[r] + f - 1;
      for (var l = o, p = i, h = c, g = 0, d = 1; d < f; d++)
        (r += s), (0 === t || h[r] >= t) && (n(e, r, l, p), (e = r), g++);
      return g;
    }),
    (this.forEachSegment = function (t) {
      for (var n = 0, e = 0, r = this.size(); e < r; e++)
        n += this.forEachArcSegment(e, t);
      return n;
    }),
    (this.transformPoints = function () {}),
    (this.forEach = function () {}),
    (this.forEach2 = function () {}),
    (this.forEach3 = function (t) {
      for (var n, e, r, f, s, l = 0, p = this.size(); l < p; l++)
        (e = (n = a[l]) + u[l]),
          (r = o.subarray(n, e)),
          (f = i.subarray(n, e)),
          c && (s = c.subarray(n, e)),
          t(r, f, s, l);
    }),
    (this.filter = function () {}),
    (this.deleteArcs = function () {}),
    (this.dedupCoords = function () {
      for (var e, r, a = 0, f = 0, s = 0, l = this.size(), p = c; a < l; ) {
        for (
          var h,
            g,
            d,
            y = void 0,
            v = f,
            m = s,
            b = (e = u[a]),
            x = o,
            w = i,
            A = p,
            _ = 0,
            P = 0;
          _ < b;

        )
          (d = x[(h = v + _)]),
            (g = w[h]),
            (r =
              d == d &&
              g == g &&
              (0 === P || d != x[h - 1] || g != w[h - 1])) &&
              ((x[(y = m + P)] = d), (w[y] = g), P++),
            A && 0 < P && (r || A[h] > A[y]) && (A[y] = A[h]),
            _++;
        (r = 1 < P ? P : 0), (u[a] = r), (f += e), (s += r), a++;
      }
      return (
        f > s &&
          (t(u, o.subarray(0, s), i.subarray(0, s)), p && n(p.subarray(0, s))),
        f - s
      );
    }),
    (this.getVertex = function () {}),
    (this.indexOfVertex = function () {}),
    (this.arcIsClosed = function () {}),
    (this.arcIsLollipop = function () {}),
    (this.arcIsDegenerate = function (t) {
      t = this.getArcIter(t);
      for (var n, e, r = 0; t.hasNext(); ) {
        if (0 < r && (n != t.x || e != t.y)) return !1;
        (n = t.x), (e = t.y), r++;
      }
      return !0;
    }),
    (this.getArcLength = function () {}),
    (this.getArcIter = function (t) {
      var n = 0 <= t,
        e = n ? t : ~t,
        r = c && h ? p : l;
      return (
        e >= u.length && Q("#getArcId() out-of-range arc id:", t),
        r.init(a[e], u[e], n, h)
      );
    }),
    (this.getShapeIter = function (t) {
      return new ze(this).init(t);
    }),
    (this.setThresholds = function (t) {
      var e = this.getPointCount(),
        r = null;
      return (
        t &&
          (t.length == e
            ? (r = t)
            : t.length == this.size()
            ? (r = void 0)
            : Q("Invalid threshold data")),
        n(r),
        this
      );
    }),
    (this.flatten = function () {}),
    (this.getRetainedInterval = function () {
      return h;
    }),
    (this.setRetainedInterval = function (t) {
      return (h = t), this;
    }),
    (this.getRetainedPct = function () {}),
    (this.setRetainedPct = function (t) {
      if (1 <= t) h = 0;
      else {
        var n = (h = this.getThresholdByPct(t));
        0 >= t ? (n = 1 / 0) : 1 <= t && (n = 0), (h = n);
      }
      return this;
    }),
    (this.getRemovableThresholds = function (t) {
      c || Q("[arcs] Missing simplification data."), (t |= 1);
      for (
        var n,
          e = new Float64Array(Math.ceil(c.length / t)),
          r = 0,
          o = 0,
          i = this.getPointCount();
        r < i;
        r += t
      )
        1 / 0 != (n = c[r]) && (e[o++] = n);
      return e.subarray(0, o);
    }),
    (this.getArcThresholds = function () {}),
    (this.getPctByThreshold = function () {}),
    (this.getThresholdByPct = function (t, n) {
      var e = (n = this.getRemovableThresholds(n)).length;
      return 1 >
        (t =
          0 === e || 1 <= t
            ? 0
            : 0 >= t
            ? e + 1
            : Math.floor((1 - t) * (e + 2)))
        ? 0
        : t > n.length
        ? 1 / 0
        : w.findValueByRank(n, t);
    }),
    (this.arcIntersectsBBox = function () {}),
    (this.arcIsContained = function () {}),
    (this.arcIsSmaller = function () {}),
    (this.isPlanar = function () {
      return !Ed(this.getBounds());
    }),
    (this.size = function () {
      return (a && a.length) || 0;
    }),
    (this.getPointCount = function () {
      return (o && o.length) || 0;
    }),
    (this.getFilteredPointCount = r),
    (this.getBounds = function () {
      return s.clone();
    }),
    (this.getSimpleShapeBounds = function (t, n) {
      n = n || new U();
      for (var e = 0, r = t.length; e < r; e++) this.mergeArcBounds(t[e], n);
      return n;
    }),
    (this.getSimpleShapeBounds2 = function () {}),
    (this.getMultiShapeBounds = function () {}),
    (this.mergeArcBounds = function (t, n) {
      0 > t && (t = ~t),
        (t *= 4),
        n.mergeBounds(f[t], f[t + 1], f[t + 2], f[t + 3]);
    });
}
function Ge() {}
function He() {}
function Le(t, n, e) {
  return (function (t, n) {
    if (!t) return null;
    w.isArray(t) || Q("Expected an array, received:", t);
    for (var e, r = 0, o = t.length, i = 0; i < o; i++)
      null === (e = n(t[i], i, t))
        ? (r++, (t[i] = null))
        : w.isArray(e) && (t[i] = e);
    return r == o ? null : 0 < r ? t.filter(function () {}) : t;
  })(t, function (t) {
    return (
      (t = (function (t, n) {
        for (var e = 0, r = 0, o = t.length; r < o; r++)
          n.arcIsDegenerate(t[r]) && (e++, (t[r] = null));
        return 0 < e ? t.filter(function () {}) : t;
      })(t, n)),
      "polygon" == e &&
        t &&
        (Ne(t), 0 === V.getPlanarPathArea(t, n) && (t = null)),
      t
    );
  });
}
function Ne(t) {
  var n = t.length;
  if (2 <= n) {
    if (t[0] == ~t[n - 1]) t.pop(), t.shift();
    else
      for (var e = 1; e < n; e++)
        if (t[e - 1] == ~t[e]) {
          t.splice(e - 1, 2);
          break;
        }
    t.length < n && Ne(t);
  }
}
function Oe() {}
function Re() {}
function Se(t) {
  var n = 1e4,
    e = new Float64Array(n),
    r = new Float64Array(n),
    o = 0;
  (this.endPath = function () {
    t(e, r, o), (o = 0);
  }),
    (this.addPoint = function (t, i) {
      o >= n &&
        ((n = Math.ceil(1.3 * n)),
        (e = w.extendBuffer(e, n)),
        (r = w.extendBuffer(r, n))),
        (e[o] = t),
        (r[o] = i),
        o++;
    });
}
function Te(t) {
  function n(t) {
    t > r.length &&
      ((t = Math.max(t, Math.ceil(1.5 * r.length))),
      (r = w.extendBuffer(r, t, h)),
      (o = w.extendBuffer(o, t, h)));
  }
  var e = 0 < t.reserved_points ? t.reserved_points : 2e4,
    r = new Float64Array(e),
    o = new Float64Array(e),
    i = [],
    a = [],
    u = [],
    c = [],
    f = t.type || null,
    s = null,
    l = -1,
    p = -1,
    h = 0,
    g = 0,
    d = 0;
  t.precision && (s = Oe(t.precision)),
    w.extend(
      this,
      new Se(function (t, e, a) {
        var c = 0;
        n(h + a);
        for (var y = 0; y < a; y++) {
          var v = t[y],
            m = e[y];
          s && ((v = s(v)), (m = s(m))),
            0 < y && v == x && m == b
              ? g++
              : ((r[h] = v), (o[h] = m), h++, c++);
          var b = m,
            x = v;
        }
        "polygon" == f &&
          0 < c &&
          (t[0] != t[a - 1] || e[0] != e[a - 1]) &&
          (n(h + 1), (r[h] = t[0]), (o[h] = e[0]), d++, h++, c++),
          l++,
          (u[l] = c),
          (function (t) {
            (i[p] || (i[p] = [])).push(t);
          })([l]);
      })
    ),
    (this.startShape = function (t) {
      (i[++p] = null), t && (a[p] = t);
    }),
    (this.importLine = function () {}),
    (this.importPoints = function () {}),
    (this.importRing = function (t, n) {
      var e = V.getPlanarPathArea2(t);
      !e || 4 > t.length
        ? Oc("Skipping a defective ring")
        : ((function (t) {
            var n = p < c.length ? c[p] : null;
            n
              ? n != t && R("Unable to import mixed-geometry GeoJSON features")
              : ((c[p] = t), f ? t != f && (f = "mixed") : (f = t));
          })("polygon"),
          ((!0 === n && 0 < e) || (!1 === n && 0 > e)) && t.reverse(),
          this.importPath(t));
    }),
    (this.importPath = function (t) {
      for (var n, e = 0, r = t.length; e < r; e++)
        (n = t[e]), this.addPoint(n[0], n[1]);
      this.endPath();
    }),
    (this.done = function () {
      var t = { name: "" };
      if (
        (0 < g &&
          Oc(w.format("Removed %,d duplicate point%s", g, w.pluralSuffix(g))),
        0 < d &&
          Nc(w.format("Closed %,d open polygon ring%s", d, w.pluralSuffix(d))),
        0 < h)
      ) {
        h < r.length && ((r = r.subarray(0, h)), (o = o.subarray(0, h)));
        var n = new Ae(u, r, o);
      }
      return (
        "mixed" == f
          ? (t = void 0)
          : ((t = { geometry_type: f }),
            f && (t.shapes = i),
            0 < a.length && (t.data = new ne(a)),
            (t = [t])),
        t.forEach(function (t) {
          if (t.data) {
            var n,
              e,
              r = (function (t) {
                var n,
                  e,
                  r = {};
                for (n = 0; n < t.length; n++) {
                  var o = Object.keys(t[n] || {});
                  for (e = 0; e < o.length; e++) r[o[e]] = 1 + (0 | r[o[e]]);
                }
                return Object.keys(r).filter(function (n) {
                  return r[n] < t.length;
                });
              })((t = t.data.getRecords()));
            for (n = 0; n < t.length; n++) {
              var o = t[n] || (t[n] = {});
              for (e = 0; e < r.length; e++) {
                var i = r[e];
                0 == i in o && (o[i] = void 0);
              }
            }
          }
        }),
        { arcs: n || null, info: {}, layers: t }
      );
    });
}
function Ue(t) {
  var n = t.id_field || Y.ID_FIELD,
    e = new Te(t);
  (this.parseObject = function (r) {
    if (r && r.type)
      if ("Feature" == r.type) {
        var o = r.geometry,
          i = r.properties || {};
        "id" in r && (i[n] = r.id);
      } else o = r;
    else o = null;
    e.startShape(i), o && Y.importGeometry(o, e, t);
  }),
    (this.done = function () {
      return e.done();
    });
}
function Ye(t, n, e) {
  if ("point" != e) {
    var r = 0,
      o = new U(),
      i = [];
    return (
      !t ||
        ("polyline" != e && "polygon" != e) ||
        t.forEach(function (t) {
          for (
            var a, u, c, f, s = n.getShapeIter(t), l = [], p = 0;
            s.hasNext();

          )
            (a = s.x),
              (u = s.y),
              (0 !== p && c == a && f == u) || (l.push([a, u]), p++),
              (c = a),
              (f = u);
          (s = { points: l, pointCount: l.length }),
            (l = !0),
            (s.ids = t),
            "polygon" == e
              ? ((s.area = V.getPlanarPathArea2(s.points)),
                (l = 3 < s.pointCount && 0 !== s.area))
              : "polyline" == e && (l = 1 < s.pointCount),
            l
              ? ((r += s.pointCount),
                (s.bounds = V.getPathBounds(s.points)),
                o.mergeBounds(s.bounds),
                i.push(s))
              : Oc("Skipping a collapsed", e, "path");
        }),
      { pointCount: r, pathData: i, pathCount: i.length, bounds: o }
    );
  }
}
function Ze() {}
function af(t) {
  function n(t, n, a, u, c) {
    c = c(a);
    var f,
      s,
      l,
      p = e(t[a], n[a]);
    for (p = r[p]; -1 != p; ) {
      if (
        ((f = i[p][0]),
        (s = i[p][1]),
        (l = f.length),
        f[0] === t[u] &&
          f[l - 1] === t[a] &&
          f[l - 2] === t[c] &&
          s[0] === n[u] &&
          s[l - 1] === n[a] &&
          s[l - 2] === n[c])
      )
        return p;
      p = o[p];
    }
    return null;
  }
  var e = ve((t = Math.floor(0.25 * t + 1))),
    r = new Int32Array(t),
    o = [],
    i = [],
    a = 0;
  w.initializeArray(r, -1),
    (this.addArc = function (t, n) {
      var u = t.length - 1;
      u = e(t[u], n[u]);
      var c = r[u],
        f = i.length;
      return (r[u] = f), i.push([t, n]), (a += t.length), o.push(c), f;
    }),
    (this.findDuplicateArc = function (t, e, r, o, i, a) {
      return null === (i = n(t, e, r, o, i)) ? n(t, e, o, r, a) : ~i;
    }),
    (this.getVertexData = function () {
      for (
        var t,
          n,
          e = new Float64Array(a),
          r = new Float64Array(a),
          o = new Uint32Array(i.length),
          u = 0,
          c = 0,
          f = i.length;
        c < f;
        c++
      )
        (n = (t = i[c])[0].length),
          w.copyElements(t[0], 0, e, u, n),
          w.copyElements(t[1], 0, r, u, n),
          (o[c] = n),
          (u += n);
      return { xx: e, yy: r, nn: o };
    });
}
function bf(t) {
  if (t.arcs) {
    var n = t.arcs.getVertexData(),
      e = (function (t, n, e) {
        function r(n) {
          var e = l[n],
            r = n + 1;
          return r < f && l[r] === e
            ? n + 1
            : i(n, n - (e = t[e]) + 1)
            ? n - e + 2
            : -1;
        }
        function o(n) {
          var e = l[n],
            r = n - 1;
          return 0 <= r && l[r] === e
            ? n - 1
            : i(n, n + (e = t[e]) - 1)
            ? n + e - 2
            : -1;
        }
        function i(t, r) {
          return n[t] == n[r] && e[t] == e[r];
        }
        function a(t) {
          var i = s[t],
            a = o(t),
            u = r(t);
          if (-1 == a || -1 == u) return !0;
          for (; t != i; ) {
            var c,
              f = o(i),
              l = r(i);
            if (!(c = -1 == f || -1 == l)) {
              c = n[a];
              var p = n[u],
                h = n[f],
                g = n[l],
                d = e[a],
                y = e[u];
              (f = e[f]),
                (l = e[l]),
                (c = !(
                  (c == g && p == h && d == l && y == f) ||
                  (c == h && p == g && d == f && y == l)
                ));
            }
            if (c) return !0;
            i = s[i];
          }
          return !1;
        }
        function u(t, r, o, i, a) {
          for (
            var u = new (n.subarray && e.subarray ? Float64Array : Array)(
                o - r + a - i + 2
              ),
              c = 0;
            r <= o;
            r++
          )
            u[c++] = t[r];
          for (r = i; r <= a; r++) u[c++] = t[r];
          return u;
        }
        function c(t, i) {
          var a = p.findDuplicateArc(n, e, t, i, r, o);
          return (
            null === a &&
              (a = p.addArc(h.call(n, t, i + 1), h.call(e, t, i + 1))),
            a
          );
        }
        var f = n.length,
          s = (function (t, n) {
            var e,
              r = t.length,
              o = Math.floor(1.3 * r) || 1,
              i = ve(o),
              a = new Int32Array(o);
            for (o = new Int32Array(r), e = 0; e < r; e++) {
              var u = t[e],
                c = n[e];
              u != u || c != c
                ? (c = -1)
                : ((c = a[(u = i(u, c))] - 1), (a[u] = e + 1)),
                (o[e] = 0 <= c ? c : e);
            }
            for (u = t.length - 1; 0 <= u; u--)
              if (!((i = o[u]) >= u)) {
                (a = u), (e = -1);
                do {
                  (i = o[(r = i)]),
                    n[r] == n[u] && t[r] == t[u]
                      ? ((o[r] = a), (a = r))
                      : (-1 < e && (o[e] = r), (e = r));
                } while (i < r);
                -1 < e && (o[e] = e), (o[u] = a);
              }
            return o;
          })(n, e),
          l = (function (t, n) {
            t = new Int32Array(t);
            for (var e = 0, r = 0, o = n.length; r < o; r++)
              for (var i = 0, a = n[r]; i < a; i++, e++) t[e] = r;
            return t;
          })(f, t),
          p = new af(f),
          h = n.subarray && e.subarray ? n.subarray : Array.prototype.slice,
          g = (function (i) {
            for (var f, h = [], g = 0, d = 0, y = i.length; d < y; d++) {
              f = i[d];
              var v = h,
                m = v.push;
              if (2 > f) var b = null;
              else {
                var x = void 0,
                  w = g,
                  A = g + f - 1;
                b = [];
                for (var _ = -1, P = w; P < A; P++)
                  a(P) && (-1 < _ ? b.push(c(x, P)) : (_ = P), (x = P));
                if (-1 == _) {
                  var I = (P = b).push;
                  t: {
                    for (
                      _ = w, w = A, x = s[_], A = l[_];
                      x != _ && !(l[x] < A);

                    )
                      x = s[x];
                    if (x == _) w = c(_, w);
                    else {
                      for (x = _; x < w; x++)
                        if (
                          null !== (_ = p.findDuplicateArc(n, e, x, x, r, o))
                        ) {
                          w = _;
                          break t;
                        }
                      Q("Unmatched ring; id:", A, "len:", t[A]), (w = void 0);
                    }
                  }
                  I.call(P, w);
                } else if (_ == w) a(A) || Q("Topology error"), b.push(c(x, P));
                else {
                  (I = (P = b).push), (w += 1);
                  var S = p.findDuplicateArc(n, e, x, _, r, o);
                  null === S &&
                    (S = p.addArc(u(n, x, A, w, _), u(e, x, A, w, _))),
                    I.call(P, S);
                }
              }
              m.call(v, b), (g += f);
            }
            return h;
          })(t),
          d = p.getVertexData();
        return (d.paths = g), d;
      })(n.nn, n.xx, n.yy);
    t.arcs.updateVertexData(e.nn, e.xx, e.yy),
      t.layers.forEach(function (t) {
        ("polyline" != t.geometry_type && "polygon" != t.geometry_type) ||
          (t.shapes = (function (t, n) {
            return t.map(function (t) {
              return (function (t, n) {
                return t
                  ? t.map(function (t) {
                      return (function (t, n) {
                        return t.reduce(function (t, e) {
                          var r = dd(e);
                          if ((r = n[r])) {
                            if (0 > e) {
                              (e = r = r.concat()).reverse();
                              for (var o = 0, i = e.length; o < i; o++)
                                e[o] = ~e[o];
                            }
                            for (e = 0, o = r.length; e < o; e++) t.push(r[e]);
                          }
                          return t;
                        }, []);
                      })(t, n);
                    })
                  : null;
              })(t, n);
            });
          })(t.shapes, e.paths));
      });
  }
}
function kf(t, n, e) {
  var r,
    o = {},
    i = t.layers,
    a = (function (t, n) {
      var e = n.geojson_type || "";
      return (
        "Feature" == e ||
        "FeatureCollection" == e ||
        ("GeometryCollection" != e &&
          (e && R("Unsupported GeoJSON type:", n.geojson_type),
          w.some(t, function (t) {
            var e = t.data ? t.data.getFields() : [];
            return (t = sf(e, n)), (e = !!tf(e, n)), t || e;
          })))
      );
    })(i, n);
  return (
    (o.type = a ? "FeatureCollection" : "GeometryCollection"),
    n.gj2008,
    n.bbox && (r = void (n.rfc7946 || n.v2)) && (o.bbox = r),
    (i = i.reduce(function (r, o) {
      return (
        (o = (function (t, n, e, r, o) {
          var i = (function (t, n) {
              var e = t ? t.getFields() : [],
                r = tf(e, n);
              return sf(e, n)
                ? ((t = t.getRecords()),
                  r == Y.ID_FIELD ? t.map(function () {}) : t)
                : null;
            })(t.data, e),
            a = t.shapes,
            u = (function (t, n) {
              return tf(t ? t.getFields() : [], n)
                ? t.getRecords().map(function () {})
                : null;
            })(t.data, e),
            c = e.ndjson ? Ze : e.prettify ? void 0 : JSON.stringify;
          return (
            i &&
              a &&
              i.length !== a.length &&
              Q("Mismatch between number of properties and number of shapes"),
            (a || i || []).reduce(function (f, s, l) {
              s = a ? a[l] : null;
              var p = Y.exporters[t.geometry_type];
              if (((s = s ? p(s, n.arcs, e) : null), r))
                (s = {
                  type: "Feature",
                  geometry: s,
                  properties: i ? i[l] : null,
                }),
                  u && (s.id = u[l]);
              else if (!s) return f;
              return (
                o &&
                  ((s = c(s)),
                  "buffer" == o &&
                    ((l = s),
                    (s = /^utf-?8$/i.test("utf8")
                      ? ie(l)
                      : iconv.encode(l, "utf8")))),
                f.push(s),
                f
              );
            }, [])
          );
        })(o, t, n, a, e)),
        0 < r.length ? r.concat(o) : o
      );
    }, [])),
    "Feature" == n.geojson_type && 1 == i.length
      ? i[0]
      : n.ndjson
      ? Y.formatCollectionAsNDJSON(i)
      : e
      ? Y.formatCollection(o, i)
      : ((o[rf(o.type)] = i), o)
  );
}
function rf(t) {
  return "FeatureCollection" == t
    ? "features"
    : "GeometryCollection" == t
    ? "geometries"
    : void Q("Invalid collection type:", t);
}
function sf(t, n) {
  return !(
    n.drop_table ||
    n.cut_table ||
    0 === t.length ||
    (1 == t.length && t[0] == Y.ID_FIELD)
  );
}
function tf(t, n) {
  var e = [];
  return (
    (n = n.id_field),
    w.isString(n) ? e.push(n) : w.isArray(n) && (e = n),
    e.push(Y.ID_FIELD),
    w.find(e, function (n) {
      return w.contains(t, n);
    })
  );
}
function preBuild(t) {
  let n = { snap: !0, no_repair: !1 };
  var e = n || {},
    r = Object.keys(Y.pathImporters);
  return (
    (t = w.isString(t) ? JSON.parse(t) : t),
    (e = new Ue(e)),
    (
      (r =
        "Feature" == t.type
          ? { type: "FeatureCollection", features: [t] }
          : r.includes(t.type)
          ? { type: "GeometryCollection", geometries: [t] }
          : t).features ||
      r.geometries ||
      []
    ).forEach(e.parseObject),
    (r = e.done()),
    "crs" in t && (r.info.input_geojson_crs = t.crs),
    (r.info.import_options = n),
    (function (t, n) {
      var e,
        r = t.arcs;
      (n.snap || n.auto_snap || n.snap_interval) &&
        (n.snap_interval && (n.snap_interval, (e = void He(t))), r && vd(r, e)),
        t.layers.forEach(function (t) {
          if (oe(t)) {
            var n = t.shapes;
            t = t.geometry_type;
            for (var e = 0, o = n.length; e < o; e++) n[e] = Le(n[e], r, t);
          }
        });
    })(r, n),
    bf(r),
    (r.info.input_files = ["input.json"]),
    (r.info.input_formats = ["geojson"]),
    r
  );
}
function simplify(t, n) {
  ((t = w.extend({}, t)).layers = t.layers.map(te)),
    t.arcs && (t.arcs = t.arcs.getFilteredCopy());
  t: {
    var e = {
      percentage: n,
      keep_shapes: !0,
      no_repair: !1,
      method: "weighted_visvalingam",
    };
    if ((n = t.arcs) && 0 !== n.size()) {
      e = e || {};
      var r = (e = w.defaults(
          {
            method: "weighted_visvalingam",
            spherical: !e.planar && !t.arcs.isPlanar(),
          },
          e
        )),
        o = X.getWeightedSimplifier(r, r.spherical);
      if (
        (n.setThresholds(new Float64Array(n.getPointCount())),
        r.spherical &&
          ((function (t, n) {
            var e = w.expandoBuffer(Float64Array),
              r = w.expandoBuffer(Float64Array),
              o = w.expandoBuffer(Float64Array);
            t.forEach3(function (t, i, a) {
              var u = t.length,
                c = e(u),
                f = r(u);
              (u = o(u)), V.convLngLatToSph(t, i, c, f, u), n(a, c, f, u);
            });
          })(n, o),
          Xd(n, Dd(1e-12), !1)),
        r.lock_box &&
          ((r = n.getBounds()).padBounds(-1e-14, -1e-14, -1e-14, -1e-14),
          Xd(n, r.toArray(), !0)),
        e.percentage || 0 === e.percentage)
      )
        n.setRetainedPct(w.parsePercent(e.percentage));
      else if (
        !e.interval &&
        0 !== e.interval &&
        !e.resolution &&
        e.presimplify
      )
        break t;
      if (
        ((n = t.arcs),
        e.keep_shapes &&
          (function (t, n) {
            n.forEach(function (n) {
              "polygon" == n.geometry_type &&
                (function (t, n) {
                  n.forEach(function (n) {
                    for (
                      var e, r, o = 0, i = n ? n.length : 0, a = 0;
                      a < i;
                      a++
                    )
                      (r = t.getSimpleShapeBounds(n[a]).area()) > o &&
                        ((e = n[a]), (o = r));
                    if (e && 0 !== e.length) {
                      for (
                        n = e,
                          o = t.getRetainedInterval(),
                          t.setRetainedInterval(1 / 0),
                          i = V.getPlanarPathArea(n, t);
                        1e-10 >= i;

                      ) {
                        var u = void 0,
                          c = n;
                        e = 0;
                        for (
                          var f = t.getVertexData(), s = 0;
                          s < c.length;
                          s++
                        )
                          0 > (a = c[s]) && (a = ~a),
                            (r = (i = f.ii[a]) + f.nn[a] - 1),
                            -1 != (i = hd(f.zz, 1 / 0, i, r)) &&
                              (i = f.zz[i]) > e &&
                              ((e = i), (u = a));
                        if (0 < e) {
                          for (
                            r = (i = f.ii[u]) + f.nn[u] - 1, a = f.zz, u = 0;
                            i <= r;
                            i++
                          )
                            a[i] === e && ((a[i] = 1 / 0), u++);
                          i = u;
                        } else i = 0;
                        if (0 === i) {
                          Oc("[protectMultiRing()] Failed on ring:", n);
                          break;
                        }
                        i = V.getPlanarPathArea(n, t);
                      }
                      t.setRetainedInterval(o);
                    } else Oc("[protectShape()] Invalid shape:", n);
                  });
                })(t, n.shapes);
            });
          })(n, t.layers),
        !e.no_repair && 0 < n.getRetainedInterval())
      ) {
        for (e = r = Hd(n); 0 < Pd(n, e); ) e = Hd(n);
        (r = (n = r.length) > (e = e.length) ? n - e : 0),
          0 < n &&
            ((n = w.format(
              "Repaired %'i intersection%s",
              r,
              w.pluralSuffix(r)
            )),
            0 < e &&
              (n += w.format(
                "; %'i intersection%s could not be repaired",
                e,
                w.pluralSuffix(e)
              )),
            Nc(n));
      }
    }
  }
  return (function (t, n) {
    var e,
      r = (n = n || {}).extension || "json";
    return (
      (n.precision || n.rfc7946) && ((t = void 0), n.precision),
      (n.v2 || n.rfc7946) && (e = void 0) && Nc(e),
      n.file && (r = (void n.file).extension),
      (n.combine_layers
        ? [t.layers]
        : t.layers.map(function (t) {
            return [t];
          })
      ).map(function (e) {
        var o =
          (function (t) {
            return (
              t.reduce(function (t, n) {
                return (
                  null === t
                    ? (t = n.name || null)
                    : t && n.name && (t = w.mergeNames(t, n.name)),
                  t
                );
              }, null) || ""
            );
          })(e) || "output";
        return {
          content: kf((e = w.defaults({ layers: e }, t)), n),
          filename: o + "." + r,
        };
      })
    );
  })(t, {})[0].content;
}
var aa = {},
  w = Object.freeze({
    __proto__: null,
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get isArray() {
      return ha;
    },
    get isNumber() {
      return ia;
    },
    get a() {},
    get isFiniteNumber() {
      return ka;
    },
    get a() {},
    get a() {},
    get isString() {
      return oa;
    },
    get a() {},
    get a() {},
    get a() {},
    get toArray() {
      return sa;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get defaults() {
      return xa;
    },
    get extend() {
      return ya;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get contains() {
      return Fa;
    },
    get some() {
      return Ga;
    },
    get a() {},
    get find() {
      return Ia;
    },
    get a() {},
    get a() {},
    get sum() {
      return Ma;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get forEach() {
      return Ua;
    },
    get a() {},
    get initializeArray() {
      return Wa;
    },
    get a() {},
    get a() {},
    get pluralSuffix() {
      return Za;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get sortOn() {
      return jb;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get findValueByRank() {
      return ub;
    },
    get a() {},
    get a() {},
    get format() {
      return xb;
    },
    get a() {},
    get a() {},
    get a() {},
    get expandoBuffer() {
      return Bb;
    },
    get copyElements() {
      return Cb;
    },
    get extendBuffer() {
      return Db;
    },
    get a() {},
    get a() {},
    get parsePercent() {
      return Gb;
    },
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
    get a() {},
  }),
  Qb = Math.PI / 180,
  bc = Object.freeze({
    __proto__: null,
    R: 6378137,
    D2R: Qb,
    R2D: 180 / Math.PI,
    degreesToMeters: function () {},
    distance3D: Rb,
    distanceSq: z,
    distance2D: Sb,
    distanceSq3D: Tb,
    innerAngle2: function () {},
    standardAngle: Ub,
    signedAngle: function () {},
    bearing2D: function () {},
    bearing: Vb,
    signedAngleSph: function () {},
    convLngLatToSph: function (t, n, e, r, o) {
      for (var i = [], a = 0, u = t.length; a < u; a++)
        Wb(t[a], n[a], i), (e[a] = i[0]), (r[a] = i[1]), (o[a] = i[2]);
    },
    xyzToLngLat: function () {},
    lngLatToXYZ: Wb,
    sphericalDistance: Xb,
    greatCircleDistance: Yb,
    innerAngle: function () {},
    innerAngle3D: function () {},
    triangleArea: function () {},
    cosine: function () {},
    cosine3D: function (t, n, e, r, o, i, a, u, c) {
      var f = Rb(t, n, e, r, o, i) * Rb(r, o, i, a, u, c),
        s = 0;
      return (
        0 < f &&
          (1 <
          (s = ((t - r) * (a - r) + (n - o) * (u - o) + (e - i) * (c - i)) / f)
            ? (s = 1)
            : -1 > s && (s = -1)),
        s
      );
    },
    triangleArea3D: function (t, n, e, r, o, i, a, u, c) {
      return (
        0.5 *
        Math.sqrt(
          Zb(t, n, r, o, a, u) + Zb(t, e, r, i, a, c) + Zb(n, e, o, i, u, c)
        )
      );
    },
    pointSegDistSq: function () {},
    pointSegDistSq3D: function () {},
    pointSegDistSq2: ac,
    containsBounds: function (t, n) {
      return t[0] <= n[0] && t[2] >= n[2] && t[1] <= n[1] && t[3] >= n[3];
    },
  }),
  F = [],
  I = [],
  cc = "undefined" != typeof Uint8Array ? Uint8Array : Array,
  dc = !1,
  ic = {}.toString,
  jc = Array.isArray || function () {};
(J.TYPED_ARRAY_SUPPORT =
  void 0 === aa.TYPED_ARRAY_SUPPORT || aa.TYPED_ARRAY_SUPPORT),
  (J.poolSize = 8192),
  (J._augment = function () {}),
  (J.from = function () {}),
  J.TYPED_ARRAY_SUPPORT &&
    ((J.prototype.__proto__ = Uint8Array.prototype),
    (J.__proto__ = Uint8Array)),
  (J.alloc = function () {}),
  (J.allocUnsafe = function () {}),
  (J.allocUnsafeSlow = function () {}),
  (J.isBuffer = function () {}),
  (J.compare = function () {}),
  (J.isEncoding = function () {}),
  (J.concat = function () {}),
  (J.byteLength = oc),
  (J.prototype._isBuffer = !0),
  (J.prototype.swap16 = function () {}),
  (J.prototype.swap32 = function () {}),
  (J.prototype.swap64 = function () {}),
  (J.prototype.toString = function () {}),
  (J.prototype.equals = function () {}),
  (J.prototype.inspect = function () {}),
  (J.prototype.compare = function () {}),
  (J.prototype.includes = function () {}),
  (J.prototype.indexOf = function () {}),
  (J.prototype.lastIndexOf = function () {}),
  (J.prototype.write = function () {}),
  (J.prototype.toJSON = function () {});
var Cc = 4096;
(J.prototype.slice = function () {}),
  (J.prototype.readUIntLE = function () {}),
  (J.prototype.readUIntBE = function () {}),
  (J.prototype.readUInt8 = function () {}),
  (J.prototype.readUInt16LE = function () {}),
  (J.prototype.readUInt16BE = function () {}),
  (J.prototype.readUInt32LE = function () {}),
  (J.prototype.readUInt32BE = function () {}),
  (J.prototype.readIntLE = function () {}),
  (J.prototype.readIntBE = function () {}),
  (J.prototype.readInt8 = function () {}),
  (J.prototype.readInt16LE = function () {}),
  (J.prototype.readInt16BE = function () {}),
  (J.prototype.readInt32LE = function () {}),
  (J.prototype.readInt32BE = function () {}),
  (J.prototype.readFloatLE = function () {}),
  (J.prototype.readFloatBE = function () {}),
  (J.prototype.readDoubleLE = function () {}),
  (J.prototype.readDoubleBE = function () {}),
  (J.prototype.writeUIntLE = function () {}),
  (J.prototype.writeUIntBE = function () {}),
  (J.prototype.writeUInt8 = function () {}),
  (J.prototype.writeUInt16LE = function () {}),
  (J.prototype.writeUInt16BE = function () {}),
  (J.prototype.writeUInt32LE = function () {}),
  (J.prototype.writeUInt32BE = function () {}),
  (J.prototype.writeIntLE = function () {}),
  (J.prototype.writeIntBE = function () {}),
  (J.prototype.writeInt8 = function () {}),
  (J.prototype.writeInt16LE = function () {}),
  (J.prototype.writeInt16BE = function () {}),
  (J.prototype.writeInt32LE = function () {}),
  (J.prototype.writeInt32BE = function () {}),
  (J.prototype.writeFloatLE = function () {}),
  (J.prototype.writeFloatBE = function () {}),
  (J.prototype.writeDoubleLE = function () {}),
  (J.prototype.writeDoubleBE = function () {}),
  (J.prototype.copy = function () {}),
  (J.prototype.fill = function () {});
var $c,
  Gc = /[^+\/0-9A-Za-z-_]/g,
  Ic = { DEBUG: !1, QUIET: !1, VERBOSE: !1, defs: {}, input_files: [] },
  Pc = 0,
  Qc = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
  },
  Rc = /^\s+/,
  Sc = /\s+$/;
(Vc.prototype.isNull = function () {}),
  (Vc.prototype.invert = function () {}),
  (Vc.prototype.transform = function () {}),
  (Vc.prototype.toString = function () {}),
  (U.from = function () {}),
  (U.prototype.toString = function () {}),
  (U.prototype.toArray = function () {
    return this.hasBounds() ? [this.xmin, this.ymin, this.xmax, this.ymax] : [];
  }),
  (U.prototype.hasBounds = function () {
    return this.xmin <= this.xmax && this.ymin <= this.ymax;
  }),
  (U.prototype.sameBounds = U.prototype.equals = function () {}),
  (U.prototype.width = function () {
    return this.xmax - this.xmin || 0;
  }),
  (U.prototype.height = function () {
    return this.ymax - this.ymin || 0;
  }),
  (U.prototype.area = function () {
    return this.width() * this.height() || 0;
  }),
  (U.prototype.empty = function () {}),
  (U.prototype.setBounds = function (t, n, e, r) {
    return (
      1 == arguments.length &&
        (w.isArrayLike(t)
          ? ((n = t[1]), (e = t[2]), (r = t[3]), (t = t[0]))
          : ((n = t.ymin), (e = t.xmax), (r = t.ymax), (t = t.xmin))),
      (this.xmin = t),
      (this.ymin = n),
      (this.xmax = e),
      (this.ymax = r),
      (t > e || n > r) && this.update(),
      this
    );
  }),
  (U.prototype.centerX = function () {}),
  (U.prototype.centerY = function () {}),
  (U.prototype.containsPoint = function () {}),
  (U.prototype.containsBufferedPoint = U.prototype.containsCircle =
    function () {}),
  (U.prototype.intersects = function () {}),
  (U.prototype.contains = function () {}),
  (U.prototype.shift = function () {}),
  (U.prototype.padBounds = function () {}),
  (U.prototype.scale = function () {}),
  (U.prototype.cloneBounds = U.prototype.clone =
    function () {
      return new U(this.xmin, this.ymin, this.xmax, this.ymax);
    }),
  (U.prototype.clearBounds = function () {}),
  (U.prototype.mergePoint = function (t, n) {
    void 0 === this.xmin
      ? this.setBounds(t, n, t, n)
      : (t < this.xmin ? (this.xmin = t) : t > this.xmax && (this.xmax = t),
        n < this.ymin ? (this.ymin = n) : n > this.ymax && (this.ymax = n));
  }),
  (U.prototype.fillOut = function () {}),
  (U.prototype.update = function () {}),
  (U.prototype.transform = function () {}),
  (U.prototype.getTransform = function () {}),
  (U.prototype.mergeCircle = function () {}),
  (U.prototype.mergeBounds = function (t) {
    if (t instanceof U)
      var n = t.xmin,
        e = t.ymin,
        r = t.xmax,
        o = t.ymax;
    else
      4 == arguments.length
        ? ((n = arguments[0]),
          (e = arguments[1]),
          (r = arguments[2]),
          (o = arguments[3]))
        : 4 == t.length
        ? ((n = t[0]), (e = t[1]), (r = t[2]), (o = t[3]))
        : Q("Bounds#mergeBounds() invalid argument:", t);
    return (
      void 0 === this.xmin
        ? this.setBounds(n, e, r, o)
        : (n < this.xmin && (this.xmin = n),
          e < this.ymin && (this.ymin = e),
          r > this.xmax && (this.xmax = r),
          o > this.ymax && (this.ymax = o)),
      this
    );
  }),
  ($c = function () {});
var Fd,
  ad = Object.freeze({
    __proto__: null,
    pathIsClosed: function () {},
    getPointToPathDistance: Wc,
    getPointToPathInfo: Xc,
    getPointToShapeDistance: function () {},
    getAvgPathXY: Yc,
    getMaxPath: Zc,
    countVerticesInPath: function () {},
    getPathBounds: function (t) {
      for (var n = new U(), e = 0, r = t.length; e < r; e++)
        n.mergePoint(t[e][0], t[e][1]);
      return n;
    },
    get calcPathLen() {
      return $c;
    },
  }),
  cd = Object.freeze({
    __proto__: null,
    getShapeCentroid: function () {},
    getPathCentroid: bd,
  }),
  ud = Object.freeze({
    __proto__: null,
    calcPolsbyPopperCompactness: function () {},
    calcSchwartzbergCompactness: function () {},
    getPathWinding: function () {},
    getShapeArea: function () {},
    getPlanarShapeArea: function () {},
    getSphericalShapeArea: function () {},
    testPointInPolygon: function () {},
    testPointInRing: kd,
    testRayIntersection: ld,
    getRayIntersection: md,
    getPathArea: nd,
    getSphericalPathArea: pd,
    getSphericalPathArea2: qd,
    getPlanarPathArea2: function (t) {
      for (var n, e, r, o, i, a, u, c = 0, f = 0, s = t.length; f < s; f++)
        (u = t[f]),
          0 === f
            ? ((e = n = 0), (i = -u[0]), (a = -u[1]))
            : (c += (n = u[0] + i) * o - r * (e = u[1] + a)),
          (r = n),
          (o = e);
      return c / 2;
    },
    getPlanarPathArea: od,
    getPathPerimeter: rd,
    getShapePerimeter: function () {},
    getSphericalShapePerimeter: function () {},
    getPlanarPathPerimeter: sd,
    getSphericalPathPerimeter: td,
  }),
  Cd = Object.freeze({
    __proto__: null,
    segmentIntersection: function (t, n, e, r, o, i, a, u, c) {
      var f,
        s =
          0 <= c
            ? c
            : 1e-14 *
              Math.max.apply(null, [t, n, e, r, o, i, a, u].map(Math.abs)),
        l = s * s;
      if (
        (xd((c = []), l, t, n, o, i, a, u),
        xd(c, l, e, r, o, i, a, u),
        xd(c, l, o, i, t, n, e, r),
        xd(c, l, a, u, t, n, e, r),
        (f = !(c = 0 === c.length ? null : c)) &&
          (f =
            z(t, n, o, i) <= l ||
            z(t, n, a, u) <= l ||
            z(e, r, o, i) <= l ||
            z(e, r, a, u) <= l),
        f)
      )
        return null;
      if (Bd(t, n, e, r, o, i, a, u))
        if (
          ((f = (e - t) * (u - i) - (r - n) * (a - o)),
          (l = [t + (l = Ad(o, i, a, u, t, n) / f) * (e - t), n + l * (r - n)]),
          1e-18 > Math.abs(f))
        )
          t = null;
        else {
          if (0 < s) {
            f = l[0];
            var p = l[1];
            (s = yd(l, s, f, p, t, n)),
              (s = yd(l, s, f, p, e, r)),
              (s = yd(l, s, f, p, o, i)),
              yd(l, s, f, p, a, u);
          }
          (s = l[0]),
            (f = l[1]),
            (s = zd(s, t, e)),
            (s = zd(s, o, a)),
            (f = zd(f, n, r)),
            (f = zd(f, i, u)),
            (l[0] = s),
            (l[1] = f),
            (t = l);
        }
      else t = null;
      return c || t || null;
    },
    findClosestPointOnSeg: function () {},
    orient2D: Ad,
    segmentHit: Bd,
  }),
  V = Object.assign({}, bc, ud, ad, Cd, cd),
  X = {
    getArcCalculator: function (t, n) {
      var e = new Sd(),
        r = w.expandoBuffer(Int32Array),
        o = w.expandoBuffer(Int32Array),
        i = n
          ? function (n, e, r, o, i, a) {
              return t(o[n], i[n], a[n], o[e], i[e], a[e], o[r], i[r], a[r]);
            }
          : function () {};
      return function (t, a, u, c) {
        var f,
          s = t.length,
          l = r(s),
          p = o(s),
          h = -1 / 0;
        for (
          c && !n
            ? Q("[visvalingam] Received z-axis data for 2D simplification")
            : !c && n
            ? Q("[visvalingam] Missing z-axis data for 3D simplification")
            : t.length > a.length &&
              Q("[visvalingam] Incompatible data arrays:", t.length, a.length),
            f = 0;
          f < s;
          f++
        ) {
          var g = f - 1,
            d = f + 1,
            y = 0 > g || d >= s ? 1 / 0 : i(g, f, d, a, u, c);
          (t[f] = y), (p[f] = d), (l[f] = g);
        }
        for (e.init(t); 0 < e.size() && 1 / 0 !== (y = t[(f = e.pop())]); )
          y < h ? (t[f] = h) : (h = y),
            (g = l[f]),
            (d = p[f]),
            0 < g && ((y = i(l[g], g, d, a, u, c)), e.updateValue(g, y)),
            d < s - 1 && ((y = i(g, d, p[d], a, u, c)), e.updateValue(d, y)),
            (p[g] = d),
            (l[d] = g);
      };
    },
  };
(X.standardMetric = V.triangleArea),
  (X.standardMetric3D = V.triangleArea3D),
  (X.getWeightedMetric = function () {}),
  (X.getWeightedMetric3D = function (t) {
    var n = X.getWeightFunction(t);
    return function (t, e, r, o, i, a, u, c, f) {
      var s = V.triangleArea3D(t, e, r, o, i, a, u, c, f);
      return (t = V.cosine3D(t, e, r, o, i, a, u, c, f)), n(t) * s;
    };
  }),
  (X.getWeightCoefficient = function (t) {
    return t && w.isNumber(t && t.weighting) ? t.weighting : 0.7;
  }),
  (X.getWeightFunction = function (t) {
    var n = X.getWeightCoefficient(t);
    return function (t) {
      return -t * n + 1;
    };
  }),
  (X.weight = function () {}),
  (X.getEffectiveAreaSimplifier = function () {}),
  (X.getWeightedSimplifier = function (t, n) {
    return (
      (t = n ? X.getWeightedMetric3D(t) : X.getWeightedMetric(t)),
      X.getPathSimplifier(t, n)
    );
  }),
  (X.getPathSimplifier = function (t, n) {
    return X.scaledSimplify(X.getArcCalculator(t, n));
  }),
  (X.scaledSimplify = function (t) {
    return function (n, e, r, o) {
      for (t(n, e, r, o), e = 1, r = n.length - 1; e < r; e++)
        n[e] = 0.65 * Math.sqrt(n[e]);
    };
  });
var Y = {
    ID_FIELD: "FID",
    typeLookup: {
      LineString: "polyline",
      MultiLineString: "polyline",
      Polygon: "polygon",
      MultiPolygon: "polygon",
      Point: "point",
      MultiPoint: "point",
    },
    translateGeoJSONType: function () {},
    pathIsRing: function () {},
  },
  ie = (function (t) {
    return "utf8" != (t = (t || "").toLowerCase().replace(/[_-]/g, ""))
      ? null
      : ("undefined" != typeof TextEncoder && new TextEncoder(t),
        function () {});
  })("utf8");
!(function (t) {
  "utf8" != (t = (t || "").toLowerCase().replace(/[_-]/g, "")) ||
    ("undefined" != typeof TextDecoder && new TextDecoder(t));
})("utf8"),
  (ne.prototype = {
    fieldExists: function () {},
    toString: function () {},
    toJSON: function () {},
    addField: function () {},
    getRecordAt: function () {},
    addIdField: function () {},
    deleteField: function () {},
    getFields: function () {
      var t = this.getRecords();
      t: {
        for (var n = 0, e = t ? t.length : 0; n < e; n++)
          if (t[n]) {
            t = t[n];
            break t;
          }
        t = null;
      }
      return (function (t, n) {
        return "ascending" == n && t.sort(function () {}), t;
      })((t = t ? Object.keys(t) : []), void 0);
    },
    isEmpty: function () {},
    update: function () {},
    clone: function () {
      return new ne(this.getRecords().map(ke));
    },
    size: function () {},
  }),
  (xe.prototype.init = function (t, n, e) {
    return (
      e
        ? ((this._i = t), (this._inc = 1))
        : ((this._i = t + n - 1), (this._inc = -1)),
      (this._n = n),
      this
    );
  }),
  (xe.prototype.hasNext = function () {
    var t = this._i;
    return (
      0 < this._n &&
      ((this._i = t + this._inc),
      (this.x = this._xx[t]),
      (this.y = this._yy[t]),
      (this.i = t),
      this._n--,
      !0)
    );
  }),
  (ze.prototype.hasNext = function () {
    var t = this._arc;
    return (
      0 != this._i < this._n &&
      (t.hasNext()
        ? ((this.x = t.x), (this.y = t.y), !0)
        : (this.nextArc(), this.hasNext()))
    );
  }),
  (ze.prototype.init = function (t) {
    return (this._ids = t), (this._n = t.length), this.reset(), this;
  }),
  (ze.prototype.nextArc = function () {
    var t = this._i + 1;
    t < this._n &&
      ((this._arc = this._arcs.getArcIter(this._ids[t])),
      0 < t && this._arc.hasNext()),
      (this._i = t);
  }),
  (ze.prototype.reset = function () {
    (this._i = -1), this.nextArc();
  });
var Ee = {
    robinson: "+proj=robin +datum=WGS84",
    webmercator: "+proj=merc +a=6378137 +b=6378137",
    wgs84: "+proj=longlat +datum=WGS84",
  },
  Ie = {
    m: "meters",
    meter: "meters",
    meters: "meters",
    mi: "miles",
    mile: "miles",
    miles: "miles",
    km: "kilometers",
    ft: "feet",
    feet: "feet",
  },
  Je = { meters: 1, kilometers: 1e3, feet: 0.3048, miles: 1609.344 };
(Y.importGeometry = function (t, n, e) {
  var r = t.type;
  r in Y.pathImporters
    ? (e.geometry_type && e.geometry_type != Y.translateGeoJSONType(r)) ||
      Y.pathImporters[r](t.coordinates, n)
    : "GeometryCollection" == r
    ? t.geometries.forEach(function () {})
    : Oc("GeoJSON.importGeometry() Unsupported geometry type:", t.type);
}),
  (Y.pathImporters = {
    LineString: function () {},
    MultiLineString: function () {},
    Polygon: function (t, n) {
      for (var e = 0; e < t.length; e++) n.importRing(t[e], 0 < e);
    },
    MultiPolygon: function (t, n) {
      for (var e = 0; e < t.length; e++) Y.pathImporters.Polygon(t[e], n);
    },
    Point: function () {},
    MultiPoint: function () {},
  }),
  (Y.formatCollectionAsNDJSON = function () {}),
  (Y.formatCollection = function () {}),
  (Y.joinOutputBuffers = function () {}),
  (Y.exportPointGeom = function () {}),
  (Y.exportLineGeom = function () {}),
  (Y.exportPolygonGeom = function (t, n, e) {
    if (0 === (t = Ye(t, n, "polygon")).pointCount) return null;
    n = (function (t, n, e) {
      var r = [],
        o = [],
        i = e ? -1 : 1;
      if (
        ((t || []).forEach(function (t) {
          0 < t.area * i ? o.push([t]) : 0 > t.area * i && r.push(t);
        }),
        0 === r.length)
      )
        return o;
      o.map(function () {});
      return r.forEach(function () {}), o;
    })(t.pathData, 0, e.invert_y);
    var r = (e.rfc7946 || e.v2) && !e.invert_y;
    return 1 ==
      (e = n.map(function (t) {
        return t.map(function (t) {
          return r && t.points.reverse(), t.points;
        });
      })).length
      ? { type: "Polygon", coordinates: e[0] }
      : { type: "MultiPolygon", coordinates: e };
  }),
  (Y.exporters = {
    polygon: Y.exportPolygonGeom,
    polyline: Y.exportLineGeom,
    point: Y.exportPointGeom,
  });
export { preBuild, simplify };
