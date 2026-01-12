function sp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ap(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rc = { exports: {} },
  bo = {},
  lc = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sl = Symbol.for("react.element"),
  up = Symbol.for("react.portal"),
  cp = Symbol.for("react.fragment"),
  dp = Symbol.for("react.strict_mode"),
  fp = Symbol.for("react.profiler"),
  pp = Symbol.for("react.provider"),
  mp = Symbol.for("react.context"),
  hp = Symbol.for("react.forward_ref"),
  gp = Symbol.for("react.suspense"),
  yp = Symbol.for("react.memo"),
  vp = Symbol.for("react.lazy"),
  Ia = Symbol.iterator;
function wp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ia && e[Ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ic = Object.assign,
  sc = {};
function ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || oc);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ac() {}
ac.prototype = ur.prototype;
function Ms(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sc),
    (this.updater = n || oc);
}
var $s = (Ms.prototype = new ac());
$s.constructor = Ms;
ic($s, ur.prototype);
$s.isPureReactComponent = !0;
var za = Array.isArray,
  uc = Object.prototype.hasOwnProperty,
  Fs = { current: null },
  cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      uc.call(t, r) && !cc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: sl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Fs.current,
  };
}
function xp(e, t) {
  return {
    $$typeof: sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sl;
}
function Sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Aa = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sp("" + e.key)
    : t.toString(36);
}
function zl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sl:
          case up:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ti(i, 0) : r),
      za(l)
        ? ((n = ""),
          e != null && (n = e.replace(Aa, "$&/") + "/"),
          zl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Rs(l) &&
            (l = xp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Aa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), za(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + ti(o, s);
      i += zl(o, t, n, a, l);
    }
  else if (((a = wp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + ti(o, s++)), (i += zl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function wl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    zl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function kp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  Al = { transition: null },
  Ep = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: Fs,
  };
function fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: wl,
  forEach: function (e, t, n) {
    wl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = ur;
I.Fragment = cp;
I.Profiler = fp;
I.PureComponent = Ms;
I.StrictMode = dp;
I.Suspense = gp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
I.act = fc;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ic({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Fs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      uc.call(t, a) &&
        !cc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: sl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: mp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pp, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = dc;
I.createFactory = function (e) {
  var t = dc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: hp, render: e };
};
I.isValidElement = Rs;
I.lazy = function (e) {
  return { $$typeof: vp, _payload: { _status: -1, _result: e }, _init: kp };
};
I.memo = function (e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Al.transition;
  Al.transition = {};
  try {
    e();
  } finally {
    Al.transition = t;
  }
};
I.unstable_act = fc;
I.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Te.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
I.useId = function () {
  return Te.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Te.current.useRef(e);
};
I.useState = function (e) {
  return Te.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Te.current.useTransition();
};
I.version = "18.3.1";
lc.exports = I;
var y = lc.exports;
const A = ap(y),
  Ur = sp({ __proto__: null, default: A }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np = y,
  Cp = Symbol.for("react.element"),
  Tp = Symbol.for("react.fragment"),
  jp = Object.prototype.hasOwnProperty,
  Pp = Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) jp.call(t, r) && !bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Cp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Pp.current,
  };
}
bo.Fragment = Tp;
bo.jsx = pc;
bo.jsxs = pc;
rc.exports = bo;
var u = rc.exports,
  mc = { exports: {} },
  We = {},
  hc = { exports: {} },
  gc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var M = P.length;
    P.push(L);
    e: for (; 0 < M; ) {
      var W = (M - 1) >>> 1,
        H = P[W];
      if (0 < l(H, L)) (P[W] = L), (P[M] = H), (M = W);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      M = P.pop();
    if (M !== L) {
      P[0] = M;
      e: for (var W = 0, H = P.length, Ct = H >>> 1; W < Ct; ) {
        var oe = 2 * (W + 1) - 1,
          lt = P[oe],
          Re = oe + 1,
          ot = P[Re];
        if (0 > l(lt, M))
          Re < H && 0 > l(ot, lt)
            ? ((P[W] = ot), (P[Re] = M), (W = Re))
            : ((P[W] = lt), (P[oe] = M), (W = oe));
        else if (Re < H && 0 > l(ot, M)) (P[W] = ot), (P[Re] = M), (W = Re);
        else break e;
      }
    }
    return L;
  }
  function l(P, L) {
    var M = P.sortIndex - L.sortIndex;
    return M !== 0 ? M : P.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    c = [],
    d = 1,
    p = null,
    g = 3,
    w = !1,
    x = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= P)
        r(c), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(c);
    }
  }
  function k(P) {
    if (((S = !1), m(P), !x))
      if (n(a) !== null) (x = !0), rt(j);
      else {
        var L = n(c);
        L !== null && Fe(k, L.startTime - P);
      }
  }
  function j(P, L) {
    (x = !1), S && ((S = !1), h(_), (_ = -1)), (w = !0);
    var M = g;
    try {
      for (
        m(L), p = n(a);
        p !== null && (!(p.expirationTime > L) || (P && !ae()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var H = W(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof H == "function" ? (p.callback = H) : p === n(a) && r(a),
            m(L);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Ct = !0;
      else {
        var oe = n(c);
        oe !== null && Fe(k, oe.startTime - L), (Ct = !1);
      }
      return Ct;
    } finally {
      (p = null), (g = M), (w = !1);
    }
  }
  var T = !1,
    b = null,
    _ = -1,
    R = 5,
    F = -1;
  function ae() {
    return !(e.unstable_now() - F < R);
  }
  function ke() {
    if (b !== null) {
      var P = e.unstable_now();
      F = P;
      var L = !0;
      try {
        L = b(!0, P);
      } finally {
        L ? Pe() : ((T = !1), (b = null));
      }
    } else T = !1;
  }
  var Pe;
  if (typeof f == "function")
    Pe = function () {
      f(ke);
    };
  else if (typeof MessageChannel < "u") {
    var tt = new MessageChannel(),
      nt = tt.port2;
    (tt.port1.onmessage = ke),
      (Pe = function () {
        nt.postMessage(null);
      });
  } else
    Pe = function () {
      C(ke, 0);
    };
  function rt(P) {
    (b = P), T || ((T = !0), Pe());
  }
  function Fe(P, L) {
    _ = C(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), rt(j));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = g;
      }
      var M = g;
      g = L;
      try {
        return P();
      } finally {
        g = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var M = g;
      g = P;
      try {
        return L();
      } finally {
        g = M;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, M) {
      var W = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? W + M : W))
          : (M = W),
        P)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = M + H),
        (P = {
          id: d++,
          callback: L,
          priorityLevel: P,
          startTime: M,
          expirationTime: H,
          sortIndex: -1,
        }),
        M > W
          ? ((P.sortIndex = M),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (S ? (h(_), (_ = -1)) : (S = !0), Fe(k, M - W)))
          : ((P.sortIndex = H), t(a, P), x || w || ((x = !0), rt(j))),
        P
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (P) {
      var L = g;
      return function () {
        var M = g;
        g = L;
        try {
          return P.apply(this, arguments);
        } finally {
          g = M;
        }
      };
    });
})(gc);
hc.exports = gc;
var Op = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p = y,
  Ue = Op;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yc = new Set(),
  Wr = {};
function On(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) yc.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Mi = Object.prototype.hasOwnProperty,
  Dp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ha = {},
  Ua = {};
function Lp(e) {
  return Mi.call(Ua, e)
    ? !0
    : Mi.call(Ha, e)
    ? !1
    : Dp.test(e)
    ? (Ua[e] = !0)
    : ((Ha[e] = !0), !1);
}
function Mp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $p(e, t, n, r) {
  if (t === null || typeof t > "u" || Mp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Is = /[\-:]([a-z])/g;
function zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Is, zs);
    ge[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Is, zs);
    ge[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Is, zs);
  ge[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function As(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($p(t, n, l, r) && (n = null),
    r || l === null
      ? Lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = _p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  Hs = Symbol.for("react.strict_mode"),
  $i = Symbol.for("react.profiler"),
  vc = Symbol.for("react.provider"),
  wc = Symbol.for("react.context"),
  Us = Symbol.for("react.forward_ref"),
  Fi = Symbol.for("react.suspense"),
  Ri = Symbol.for("react.suspense_list"),
  Ws = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  xc = Symbol.for("react.offscreen"),
  Wa = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wa && e[Wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  ni;
function jr(e) {
  if (ni === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ni = (t && t[1]) || "";
    }
  return (
    `
` +
    ni +
    e
  );
}
var ri = !1;
function li(e, t) {
  if (!e || ri) return "";
  ri = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (ri = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function Fp(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = li(e.type, !1)), e;
    case 11:
      return (e = li(e.type.render, !1)), e;
    case 1:
      return (e = li(e.type, !0)), e;
    default:
      return "";
  }
}
function Ii(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case Fn:
      return "Portal";
    case $i:
      return "Profiler";
    case Hs:
      return "StrictMode";
    case Fi:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wc:
        return (e.displayName || "Context") + ".Consumer";
      case vc:
        return (e._context.displayName || "Context") + ".Provider";
      case Us:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ws:
        return (
          (t = e.displayName || null), t !== null ? t : Ii(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return Ii(e(t));
        } catch {}
    }
  return null;
}
function Rp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ii(t);
    case 8:
      return t === Hs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ip(e) {
  var t = Sc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sl(e) {
  e._valueTracker || (e._valueTracker = Ip(e));
}
function kc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zi(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ba(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ec(e, t) {
  (t = t.checked), t != null && As(e, "checked", t, !1);
}
function Ai(e, t) {
  Ec(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hi(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hi(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Va(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Pr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Nc(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ya(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kl,
  Tc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        kl = kl || document.createElement("div"),
          kl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = kl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  zp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function jc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Pc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = jc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ap = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Bi(e, t) {
  if (t) {
    if (Ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Qi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vi = null;
function Bs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yi = null,
  Kn = null,
  Xn = null;
function Ga(e) {
  if ((e = cl(e))) {
    if (typeof Yi != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Mo(t)), Yi(e.stateNode, e.type, t));
  }
}
function bc(e) {
  Kn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Kn = e);
}
function Oc() {
  if (Kn) {
    var e = Kn,
      t = Xn;
    if (((Xn = Kn = null), Ga(e), t)) for (e = 0; e < t.length; e++) Ga(t[e]);
  }
}
function _c(e, t) {
  return e(t);
}
function Dc() {}
var oi = !1;
function Lc(e, t, n) {
  if (oi) return e(t, n);
  oi = !0;
  try {
    return _c(e, t, n);
  } finally {
    (oi = !1), (Kn !== null || Xn !== null) && (Dc(), Oc());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Gi = !1;
if (Lt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Gi = !1;
  }
function Hp(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Lr = !1,
  Zl = null,
  eo = !1,
  Ki = null,
  Up = {
    onError: function (e) {
      (Lr = !0), (Zl = e);
    },
  };
function Wp(e, t, n, r, l, o, i, s, a) {
  (Lr = !1), (Zl = null), Hp.apply(Up, arguments);
}
function Bp(e, t, n, r, l, o, i, s, a) {
  if ((Wp.apply(this, arguments), Lr)) {
    if (Lr) {
      var c = Zl;
      (Lr = !1), (Zl = null);
    } else throw Error(N(198));
    eo || ((eo = !0), (Ki = c));
  }
}
function _n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ka(e) {
  if (_n(e) !== e) throw Error(N(188));
}
function Qp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ka(l), e;
        if (o === r) return Ka(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function $c(e) {
  return (e = Qp(e)), e !== null ? Fc(e) : null;
}
function Fc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rc = Ue.unstable_scheduleCallback,
  Xa = Ue.unstable_cancelCallback,
  Vp = Ue.unstable_shouldYield,
  Yp = Ue.unstable_requestPaint,
  se = Ue.unstable_now,
  Gp = Ue.unstable_getCurrentPriorityLevel,
  Qs = Ue.unstable_ImmediatePriority,
  Ic = Ue.unstable_UserBlockingPriority,
  to = Ue.unstable_NormalPriority,
  Kp = Ue.unstable_LowPriority,
  zc = Ue.unstable_IdlePriority,
  Oo = null,
  St = null;
function Xp(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Zp,
  qp = Math.log,
  Jp = Math.LN2;
function Zp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qp(e) / Jp) | 0)) | 0;
}
var El = 64,
  Nl = 4194304;
function br(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function no(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = br(s)) : ((o &= i), o !== 0 && (r = br(o)));
  } else (i = n & ~l), i !== 0 ? (r = br(i)) : o !== 0 && (r = br(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function em(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - pt(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = em(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Xi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ac() {
  var e = El;
  return (El <<= 1), !(El & 4194240) && (El = 64), e;
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function al(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function nm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Q = 0;
function Hc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Uc,
  Ys,
  Wc,
  Bc,
  Qc,
  qi = !1,
  Cl = [],
  Xt = null,
  qt = null,
  Jt = null,
  Vr = new Map(),
  Yr = new Map(),
  Bt = [],
  rm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cl(t)), t !== null && Ys(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function lm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Xt = yr(Xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (qt = yr(qt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Jt = yr(Jt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vr.set(o, yr(Vr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Yr.set(o, yr(Yr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mc(n)), t !== null)) {
          (e.blockedOn = t),
            Qc(e.priority, function () {
              Wc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vi = r), n.target.dispatchEvent(r), (Vi = null);
    } else return (t = cl(n)), t !== null && Ys(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ja(e, t, n) {
  Hl(e) && n.delete(t);
}
function om() {
  (qi = !1),
    Xt !== null && Hl(Xt) && (Xt = null),
    qt !== null && Hl(qt) && (qt = null),
    Jt !== null && Hl(Jt) && (Jt = null),
    Vr.forEach(Ja),
    Yr.forEach(Ja);
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi ||
      ((qi = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, om)));
}
function Gr(e) {
  function t(l) {
    return vr(l, e);
  }
  if (0 < Cl.length) {
    vr(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && vr(Xt, e),
      qt !== null && vr(qt, e),
      Jt !== null && vr(Jt, e),
      Vr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    Vc(n), n.blockedOn === null && Bt.shift();
}
var qn = Rt.ReactCurrentBatchConfig,
  ro = !0;
function im(e, t, n, r) {
  var l = Q,
    o = qn.transition;
  qn.transition = null;
  try {
    (Q = 1), Gs(e, t, n, r);
  } finally {
    (Q = l), (qn.transition = o);
  }
}
function sm(e, t, n, r) {
  var l = Q,
    o = qn.transition;
  qn.transition = null;
  try {
    (Q = 4), Gs(e, t, n, r);
  } finally {
    (Q = l), (qn.transition = o);
  }
}
function Gs(e, t, n, r) {
  if (ro) {
    var l = Ji(e, t, n, r);
    if (l === null) gi(e, t, r, lo, n), qa(e, r);
    else if (lm(l, e, t, n, r)) r.stopPropagation();
    else if ((qa(e, r), t & 4 && -1 < rm.indexOf(e))) {
      for (; l !== null; ) {
        var o = cl(l);
        if (
          (o !== null && Uc(o),
          (o = Ji(e, t, n, r)),
          o === null && gi(e, t, r, lo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var lo = null;
function Ji(e, t, n, r) {
  if (((lo = null), (e = Bs(r)), (e = gn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lo = e), null;
}
function Yc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gp()) {
        case Qs:
          return 1;
        case Ic:
          return 4;
        case to:
        case Kp:
          return 16;
        case zc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Ks = null,
  Ul = null;
function Gc() {
  if (Ul) return Ul;
  var e,
    t = Ks,
    n = t.length,
    r,
    l = "value" in Yt ? Yt.value : Yt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ul = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Wl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Tl() {
  return !0;
}
function Za() {
  return !1;
}
function Be(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Tl
        : Za),
      (this.isPropagationStopped = Za),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Tl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tl));
      },
      persist: function () {},
      isPersistent: Tl,
    }),
    t
  );
}
var cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xs = Be(cr),
  ul = le({}, cr, { view: 0, detail: 0 }),
  am = Be(ul),
  si,
  ai,
  wr,
  _o = le({}, ul, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === "mousemove"
              ? ((si = e.screenX - wr.screenX), (ai = e.screenY - wr.screenY))
              : (ai = si = 0),
            (wr = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  eu = Be(_o),
  um = le({}, _o, { dataTransfer: 0 }),
  cm = Be(um),
  dm = le({}, ul, { relatedTarget: 0 }),
  ui = Be(dm),
  fm = le({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pm = Be(fm),
  mm = le({}, cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hm = Be(mm),
  gm = le({}, cr, { data: 0 }),
  tu = Be(gm),
  ym = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1;
}
function qs() {
  return xm;
}
var Sm = le({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = ym[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qs,
    charCode: function (e) {
      return e.type === "keypress" ? Wl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  km = Be(Sm),
  Em = le({}, _o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = Be(Em),
  Nm = le({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qs,
  }),
  Cm = Be(Nm),
  Tm = le({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jm = Be(Tm),
  Pm = le({}, _o, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bm = Be(Pm),
  Om = [9, 13, 27, 32],
  Js = Lt && "CompositionEvent" in window,
  Mr = null;
Lt && "documentMode" in document && (Mr = document.documentMode);
var _m = Lt && "TextEvent" in window && !Mr,
  Kc = Lt && (!Js || (Mr && 8 < Mr && 11 >= Mr)),
  ru = " ",
  lu = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return Om.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function Dm(e, t) {
  switch (e) {
    case "compositionend":
      return qc(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ru);
    case "textInput":
      return (e = t.data), e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (In)
    return e === "compositionend" || (!Js && Xc(e, t))
      ? ((e = Gc()), (Ul = Ks = Yt = null), (In = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mm[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  bc(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new Xs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  Kr = null;
function $m(e) {
  ud(e, 0);
}
function Do(e) {
  var t = Hn(e);
  if (kc(t)) return e;
}
function Fm(e, t) {
  if (e === "change") return t;
}
var Zc = !1;
if (Lt) {
  var ci;
  if (Lt) {
    var di = "oninput" in document;
    if (!di) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"),
        (di = typeof iu.oninput == "function");
    }
    ci = di;
  } else ci = !1;
  Zc = ci && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  $r && ($r.detachEvent("onpropertychange", ed), (Kr = $r = null));
}
function ed(e) {
  if (e.propertyName === "value" && Do(Kr)) {
    var t = [];
    Jc(t, Kr, e, Bs(e)), Lc($m, t);
  }
}
function Rm(e, t, n) {
  e === "focusin"
    ? (su(), ($r = t), (Kr = n), $r.attachEvent("onpropertychange", ed))
    : e === "focusout" && su();
}
function Im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(Kr);
}
function zm(e, t) {
  if (e === "click") return Do(t);
}
function Am(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function Hm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Hm;
function Xr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Mi.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = au(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = au(n);
  }
}
function td(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? td(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nd() {
  for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jl(e.document);
  }
  return t;
}
function Zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Um(e) {
  var t = nd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    td(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uu(n, o));
        var i = uu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wm = Lt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Zi = null,
  Fr = null,
  es = !1;
function cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  es ||
    zn == null ||
    zn !== Jl(r) ||
    ((r = zn),
    "selectionStart" in r && Zs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Xr(Fr, r)) ||
      ((Fr = r),
      (r = oo(Zi, "onSelect")),
      0 < r.length &&
        ((t = new Xs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function jl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: jl("Animation", "AnimationEnd"),
    animationiteration: jl("Animation", "AnimationIteration"),
    animationstart: jl("Animation", "AnimationStart"),
    transitionend: jl("Transition", "TransitionEnd"),
  },
  fi = {},
  rd = {};
Lt &&
  ((rd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Lo(e) {
  if (fi[e]) return fi[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rd) return (fi[e] = t[n]);
  return e;
}
var ld = Lo("animationend"),
  od = Lo("animationiteration"),
  id = Lo("animationstart"),
  sd = Lo("transitionend"),
  ad = new Map(),
  du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sn(e, t) {
  ad.set(e, t), On(t, [e]);
}
for (var pi = 0; pi < du.length; pi++) {
  var mi = du[pi],
    Bm = mi.toLowerCase(),
    Qm = mi[0].toUpperCase() + mi.slice(1);
  sn(Bm, "on" + Qm);
}
sn(ld, "onAnimationEnd");
sn(od, "onAnimationIteration");
sn(id, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(sd, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
On(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
On(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
On(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function fu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bp(r, t, void 0, e), (e.currentTarget = null);
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          fu(l, s, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          fu(l, s, c), (o = a);
        }
    }
  }
  if (eo) throw ((e = Ki), (eo = !1), (Ki = null), e);
}
function X(e, t) {
  var n = t[os];
  n === void 0 && (n = t[os] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cd(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), cd(n, e, r, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      yc.forEach(function (n) {
        n !== "selectionchange" && (Vm.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), hi("selectionchange", !1, t));
  }
}
function cd(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var l = im;
      break;
    case 4:
      l = sm;
      break;
    default:
      l = Gs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Gi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function gi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = gn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Lc(function () {
    var c = o,
      d = Bs(n),
      p = [];
    e: {
      var g = ad.get(e);
      if (g !== void 0) {
        var w = Xs,
          x = e;
        switch (e) {
          case "keypress":
            if (Wl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = km;
            break;
          case "focusin":
            (x = "focus"), (w = ui);
            break;
          case "focusout":
            (x = "blur"), (w = ui);
            break;
          case "beforeblur":
          case "afterblur":
            w = ui;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = cm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Cm;
            break;
          case ld:
          case od:
          case id:
            w = pm;
            break;
          case sd:
            w = jm;
            break;
          case "scroll":
            w = am;
            break;
          case "wheel":
            w = bm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = hm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = nu;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          h = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = Qr(f, h)), k != null && S.push(Jr(f, k, m)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((g = new w(g, x, null, n, d)), p.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Vi &&
            (x = n.relatedTarget || n.fromElement) &&
            (gn(x) || x[Mt]))
        )
          break e;
        if (
          (w || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? gn(x) : null),
              x !== null &&
                ((C = _n(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((S = eu),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = nu),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? g : Hn(w)),
            (m = x == null ? g : Hn(x)),
            (g = new S(k, f + "leave", w, n, d)),
            (g.target = C),
            (g.relatedTarget = m),
            (k = null),
            gn(d) === c &&
              ((S = new S(h, f + "enter", x, n, d)),
              (S.target = m),
              (S.relatedTarget = C),
              (k = S)),
            (C = k),
            w && x)
          )
            t: {
              for (S = w, h = x, f = 0, m = S; m; m = Mn(m)) f++;
              for (m = 0, k = h; k; k = Mn(k)) m++;
              for (; 0 < f - m; ) (S = Mn(S)), f--;
              for (; 0 < m - f; ) (h = Mn(h)), m--;
              for (; f--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = Mn(S)), (h = Mn(h));
              }
              S = null;
            }
          else S = null;
          w !== null && pu(p, g, w, S, !1),
            x !== null && C !== null && pu(p, C, x, S, !0);
        }
      }
      e: {
        if (
          ((g = c ? Hn(c) : window),
          (w = g.nodeName && g.nodeName.toLowerCase()),
          w === "select" || (w === "input" && g.type === "file"))
        )
          var j = Fm;
        else if (ou(g))
          if (Zc) j = Am;
          else {
            j = Im;
            var T = Rm;
          }
        else
          (w = g.nodeName) &&
            w.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (j = zm);
        if (j && (j = j(e, c))) {
          Jc(p, j, n, d);
          break e;
        }
        T && T(e, g, c),
          e === "focusout" &&
            (T = g._wrapperState) &&
            T.controlled &&
            g.type === "number" &&
            Hi(g, "number", g.value);
      }
      switch (((T = c ? Hn(c) : window), e)) {
        case "focusin":
          (ou(T) || T.contentEditable === "true") &&
            ((zn = T), (Zi = c), (Fr = null));
          break;
        case "focusout":
          Fr = Zi = zn = null;
          break;
        case "mousedown":
          es = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (es = !1), cu(p, n, d);
          break;
        case "selectionchange":
          if (Wm) break;
        case "keydown":
        case "keyup":
          cu(p, n, d);
      }
      var b;
      if (Js)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        In
          ? Xc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Kc &&
          n.locale !== "ko" &&
          (In || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && In && (b = Gc())
            : ((Yt = d),
              (Ks = "value" in Yt ? Yt.value : Yt.textContent),
              (In = !0))),
        (T = oo(c, _)),
        0 < T.length &&
          ((_ = new tu(_, e, null, n, d)),
          p.push({ event: _, listeners: T }),
          b ? (_.data = b) : ((b = qc(n)), b !== null && (_.data = b)))),
        (b = _m ? Dm(e, n) : Lm(e, n)) &&
          ((c = oo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new tu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = b)));
    }
    ud(p, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qr(e, n)),
      o != null && r.unshift(Jr(e, o, l)),
      (o = Qr(e, t)),
      o != null && r.push(Jr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Qr(n, o)), a != null && i.unshift(Jr(n, a, s)))
        : l || ((a = Qr(n, o)), a != null && i.push(Jr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ym = /\r\n?/g,
  Gm = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ym,
      `
`
    )
    .replace(Gm, "");
}
function bl(e, t, n) {
  if (((t = mu(t)), mu(e) !== t && n)) throw Error(N(425));
}
function io() {}
var ts = null,
  ns = null;
function rs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ls = typeof setTimeout == "function" ? setTimeout : void 0,
  Km = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hu = typeof Promise == "function" ? Promise : void 0,
  Xm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hu < "u"
      ? function (e) {
          return hu.resolve(null).then(e).catch(qm);
        }
      : ls;
function qm(e) {
  setTimeout(function () {
    throw e;
  });
}
function yi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + dr,
  Zr = "__reactProps$" + dr,
  Mt = "__reactContainer$" + dr,
  os = "__reactEvents$" + dr,
  Jm = "__reactListeners$" + dr,
  Zm = "__reactHandles$" + dr;
function gn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gu(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[xt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Mo(e) {
  return e[Zr] || null;
}
var is = [],
  Un = -1;
function an(e) {
  return { current: e };
}
function q(e) {
  0 > Un || ((e.current = is[Un]), (is[Un] = null), Un--);
}
function K(e, t) {
  Un++, (is[Un] = e.current), (e.current = t);
}
var on = {},
  Se = an(on),
  Le = an(!1),
  Nn = on;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function so() {
  q(Le), q(Se);
}
function yu(e, t, n) {
  if (Se.current !== on) throw Error(N(168));
  K(Se, t), K(Le, n);
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Rp(e) || "Unknown", l));
  return le({}, n, r);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (Nn = Se.current),
    K(Se, e),
    K(Le, Le.current),
    !0
  );
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = dd(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Le),
      q(Se),
      K(Se, e))
    : q(Le),
    K(Le, n);
}
var jt = null,
  $o = !1,
  vi = !1;
function fd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function eh(e) {
  ($o = !0), fd(e);
}
function un() {
  if (!vi && jt !== null) {
    vi = !0;
    var e = 0,
      t = Q;
    try {
      var n = jt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), ($o = !1);
    } catch (l) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Rc(Qs, un), l);
    } finally {
      (Q = t), (vi = !1);
    }
  }
  return null;
}
var Wn = [],
  Bn = 0,
  uo = null,
  co = 0,
  Ye = [],
  Ge = 0,
  Cn = null,
  Pt = 1,
  bt = "";
function fn(e, t) {
  (Wn[Bn++] = co), (Wn[Bn++] = uo), (uo = e), (co = t);
}
function pd(e, t, n) {
  (Ye[Ge++] = Pt), (Ye[Ge++] = bt), (Ye[Ge++] = Cn), (Cn = e);
  var r = Pt;
  e = bt;
  var l = 32 - pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - pt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Pt = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (bt = o + e);
  } else (Pt = (1 << o) | (n << l) | r), (bt = e);
}
function ea(e) {
  e.return !== null && (fn(e, 1), pd(e, 1, 0));
}
function ta(e) {
  for (; e === uo; )
    (uo = Wn[--Bn]), (Wn[Bn] = null), (co = Wn[--Bn]), (Wn[Bn] = null);
  for (; e === Cn; )
    (Cn = Ye[--Ge]),
      (Ye[Ge] = null),
      (bt = Ye[--Ge]),
      (Ye[Ge] = null),
      (Pt = Ye[--Ge]),
      (Ye[Ge] = null);
}
var He = null,
  Ae = null,
  Z = !1,
  ft = null;
function md(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Ae = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: Pt, overflow: bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ss(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function as(e) {
  if (Z) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!wu(e, t)) {
        if (ss(e)) throw Error(N(418));
        t = Zt(n.nextSibling);
        var r = He;
        t && wu(e, t)
          ? md(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (He = e));
      }
    } else {
      if (ss(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (He = e);
    }
  }
}
function xu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function Ol(e) {
  if (e !== He) return !1;
  if (!Z) return xu(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rs(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ss(e)) throw (hd(), Error(N(418)));
    for (; t; ) md(e, t), (t = Zt(t.nextSibling));
  }
  if ((xu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = He ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function hd() {
  for (var e = Ae; e; ) e = Zt(e.nextSibling);
}
function lr() {
  (Ae = He = null), (Z = !1);
}
function na(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var th = Rt.ReactCurrentBatchConfig;
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function _l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Su(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = rn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, m, k) {
    return f === null || f.tag !== 6
      ? ((f = Ci(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function a(h, f, m, k) {
    var j = m.type;
    return j === Rn
      ? d(h, f, m.props.children, k, m.key)
      : f !== null &&
        (f.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Ut &&
            Su(j) === f.type))
      ? ((k = l(f, m.props)), (k.ref = xr(h, f, m)), (k.return = h), k)
      : ((k = Xl(m.type, m.key, m.props, null, h.mode, k)),
        (k.ref = xr(h, f, m)),
        (k.return = h),
        k);
  }
  function c(h, f, m, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Ti(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f);
  }
  function d(h, f, m, k, j) {
    return f === null || f.tag !== 7
      ? ((f = kn(m, h.mode, k, j)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function p(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ci("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xl:
          return (
            (m = Xl(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = xr(h, null, f)),
            (m.return = h),
            m
          );
        case Fn:
          return (f = Ti(f, h.mode, m)), (f.return = h), f;
        case Ut:
          var k = f._init;
          return p(h, k(f._payload), m);
      }
      if (Pr(f) || hr(f))
        return (f = kn(f, h.mode, m, null)), (f.return = h), f;
      _l(h, f);
    }
    return null;
  }
  function g(h, f, m, k) {
    var j = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return j !== null ? null : s(h, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xl:
          return m.key === j ? a(h, f, m, k) : null;
        case Fn:
          return m.key === j ? c(h, f, m, k) : null;
        case Ut:
          return (j = m._init), g(h, f, j(m._payload), k);
      }
      if (Pr(m) || hr(m)) return j !== null ? null : d(h, f, m, k, null);
      _l(h, m);
    }
    return null;
  }
  function w(h, f, m, k, j) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), s(f, h, "" + k, j);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case xl:
          return (h = h.get(k.key === null ? m : k.key) || null), a(f, h, k, j);
        case Fn:
          return (h = h.get(k.key === null ? m : k.key) || null), c(f, h, k, j);
        case Ut:
          var T = k._init;
          return w(h, f, m, T(k._payload), j);
      }
      if (Pr(k) || hr(k)) return (h = h.get(m) || null), d(f, h, k, j, null);
      _l(f, k);
    }
    return null;
  }
  function x(h, f, m, k) {
    for (
      var j = null, T = null, b = f, _ = (f = 0), R = null;
      b !== null && _ < m.length;
      _++
    ) {
      b.index > _ ? ((R = b), (b = null)) : (R = b.sibling);
      var F = g(h, b, m[_], k);
      if (F === null) {
        b === null && (b = R);
        break;
      }
      e && b && F.alternate === null && t(h, b),
        (f = o(F, f, _)),
        T === null ? (j = F) : (T.sibling = F),
        (T = F),
        (b = R);
    }
    if (_ === m.length) return n(h, b), Z && fn(h, _), j;
    if (b === null) {
      for (; _ < m.length; _++)
        (b = p(h, m[_], k)),
          b !== null &&
            ((f = o(b, f, _)), T === null ? (j = b) : (T.sibling = b), (T = b));
      return Z && fn(h, _), j;
    }
    for (b = r(h, b); _ < m.length; _++)
      (R = w(b, h, _, m[_], k)),
        R !== null &&
          (e && R.alternate !== null && b.delete(R.key === null ? _ : R.key),
          (f = o(R, f, _)),
          T === null ? (j = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        b.forEach(function (ae) {
          return t(h, ae);
        }),
      Z && fn(h, _),
      j
    );
  }
  function S(h, f, m, k) {
    var j = hr(m);
    if (typeof j != "function") throw Error(N(150));
    if (((m = j.call(m)), m == null)) throw Error(N(151));
    for (
      var T = (j = null), b = f, _ = (f = 0), R = null, F = m.next();
      b !== null && !F.done;
      _++, F = m.next()
    ) {
      b.index > _ ? ((R = b), (b = null)) : (R = b.sibling);
      var ae = g(h, b, F.value, k);
      if (ae === null) {
        b === null && (b = R);
        break;
      }
      e && b && ae.alternate === null && t(h, b),
        (f = o(ae, f, _)),
        T === null ? (j = ae) : (T.sibling = ae),
        (T = ae),
        (b = R);
    }
    if (F.done) return n(h, b), Z && fn(h, _), j;
    if (b === null) {
      for (; !F.done; _++, F = m.next())
        (F = p(h, F.value, k)),
          F !== null &&
            ((f = o(F, f, _)), T === null ? (j = F) : (T.sibling = F), (T = F));
      return Z && fn(h, _), j;
    }
    for (b = r(h, b); !F.done; _++, F = m.next())
      (F = w(b, h, _, F.value, k)),
        F !== null &&
          (e && F.alternate !== null && b.delete(F.key === null ? _ : F.key),
          (f = o(F, f, _)),
          T === null ? (j = F) : (T.sibling = F),
          (T = F));
    return (
      e &&
        b.forEach(function (ke) {
          return t(h, ke);
        }),
      Z && fn(h, _),
      j
    );
  }
  function C(h, f, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Rn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case xl:
          e: {
            for (var j = m.key, T = f; T !== null; ) {
              if (T.key === j) {
                if (((j = m.type), j === Rn)) {
                  if (T.tag === 7) {
                    n(h, T.sibling),
                      (f = l(T, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  T.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Ut &&
                    Su(j) === T.type)
                ) {
                  n(h, T.sibling),
                    (f = l(T, m.props)),
                    (f.ref = xr(h, T, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            m.type === Rn
              ? ((f = kn(m.props.children, h.mode, k, m.key)),
                (f.return = h),
                (h = f))
              : ((k = Xl(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = xr(h, f, m)),
                (k.return = h),
                (h = k));
          }
          return i(h);
        case Fn:
          e: {
            for (T = m.key; f !== null; ) {
              if (f.key === T)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Ti(m, h.mode, k)), (f.return = h), (h = f);
          }
          return i(h);
        case Ut:
          return (T = m._init), C(h, f, T(m._payload), k);
      }
      if (Pr(m)) return x(h, f, m, k);
      if (hr(m)) return S(h, f, m, k);
      _l(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = Ci(m, h.mode, k)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return C;
}
var or = gd(!0),
  yd = gd(!1),
  fo = an(null),
  po = null,
  Qn = null,
  ra = null;
function la() {
  ra = Qn = po = null;
}
function oa(e) {
  var t = fo.current;
  q(fo), (e._currentValue = t);
}
function us(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (po = e),
    (ra = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (po === null) throw Error(N(308));
      (Qn = e), (po.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var yn = null;
function ia(e) {
  yn === null ? (yn = [e]) : yn.push(e);
}
function vd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ia(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function sa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ia(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
function ku(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mo(e, t, n, r) {
  var l = e.updateQueue;
  Wt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (d = c = a = null), (s = o);
    do {
      var g = s.lane,
        w = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            S = s;
          switch (((g = t), (w = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                p = x.call(w, p, g);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (g = typeof x == "function" ? x.call(w, p, g) : x),
                g == null)
              )
                break e;
              p = le({}, p, g);
              break e;
            case 2:
              Wt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s));
      } else
        (w = {
          eventTime: w,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = w), (a = p)) : (d = d.next = w),
          (i |= g);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (jn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Eu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var dl = {},
  kt = an(dl),
  el = an(dl),
  tl = an(dl);
function vn(e) {
  if (e === dl) throw Error(N(174));
  return e;
}
function aa(e, t) {
  switch ((K(tl, t), K(el, e), K(kt, dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wi(t, e));
  }
  q(kt), K(kt, t);
}
function ir() {
  q(kt), q(el), q(tl);
}
function xd(e) {
  vn(tl.current);
  var t = vn(kt.current),
    n = Wi(t, e.type);
  t !== n && (K(el, e), K(kt, n));
}
function ua(e) {
  el.current === e && (q(kt), q(el));
}
var ne = an(0);
function ho(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var wi = [];
function ca() {
  for (var e = 0; e < wi.length; e++)
    wi[e]._workInProgressVersionPrimary = null;
  wi.length = 0;
}
var Ql = Rt.ReactCurrentDispatcher,
  xi = Rt.ReactCurrentBatchConfig,
  Tn = 0,
  re = null,
  ce = null,
  fe = null,
  go = !1,
  Rr = !1,
  nl = 0,
  nh = 0;
function ye() {
  throw Error(N(321));
}
function da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function fa(e, t, n, r, l, o) {
  if (
    ((Tn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ql.current = e === null || e.memoizedState === null ? ih : sh),
    (e = n(r, l)),
    Rr)
  ) {
    o = 0;
    do {
      if (((Rr = !1), (nl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (fe = ce = null),
        (t.updateQueue = null),
        (Ql.current = ah),
        (e = n(r, l));
    } while (Rr);
  }
  if (
    ((Ql.current = yo),
    (t = ce !== null && ce.next !== null),
    (Tn = 0),
    (fe = ce = re = null),
    (go = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function pa() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Je() {
  if (ce === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = fe === null ? re.memoizedState : fe.next;
  if (t !== null) (fe = t), (ce = e);
  else {
    if (e === null) throw Error(N(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      fe === null ? (re.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ce,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      c = o;
    do {
      var d = c.lane;
      if ((Tn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (i = r)) : (a = a.next = p),
          (re.lanes |= d),
          (jn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = s),
      ht(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (re.lanes |= o), (jn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ht(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Sd() {}
function kd(e, t) {
  var n = re,
    r = Je(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (De = !0)),
    (r = r.queue),
    ma(Cd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ll(9, Nd.bind(null, n, r, l, t), void 0, null),
      pe === null)
    )
      throw Error(N(349));
    Tn & 30 || Ed(n, t, l);
  }
  return l;
}
function Ed(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Td(t) && jd(e);
}
function Cd(e, t, n) {
  return n(function () {
    Td(t) && jd(e);
  });
}
function Td(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function jd(e) {
  var t = $t(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Nu(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = oh.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function ll(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pd() {
  return Je().memoizedState;
}
function Vl(e, t, n, r) {
  var l = wt();
  (re.flags |= e),
    (l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
  var l = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var i = ce.memoizedState;
    if (((o = i.destroy), r !== null && da(r, i.deps))) {
      l.memoizedState = ll(t, n, o, r);
      return;
    }
  }
  (re.flags |= e), (l.memoizedState = ll(1 | t, n, o, r));
}
function Cu(e, t) {
  return Vl(8390656, 8, e, t);
}
function ma(e, t) {
  return Fo(2048, 8, e, t);
}
function bd(e, t) {
  return Fo(4, 2, e, t);
}
function Od(e, t) {
  return Fo(4, 4, e, t);
}
function _d(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Dd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fo(4, 4, _d.bind(null, t, e), n)
  );
}
function ha() {}
function Ld(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Md(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $d(e, t, n) {
  return Tn & 21
    ? (ht(n, t) || ((n = Ac()), (re.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function rh(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (xi.transition = r);
  }
}
function Fd() {
  return Je().memoizedState;
}
function lh(e, t, n) {
  var r = nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rd(e))
  )
    Id(t, n);
  else if (((n = vd(e, t, n, r)), n !== null)) {
    var l = Ce();
    mt(n, e, r, l), zd(n, t, r);
  }
}
function oh(e, t, n) {
  var r = nn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rd(e)) Id(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), ht(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ia(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = vd(e, t, l, r)),
      n !== null && ((l = Ce()), mt(n, e, r, l), zd(n, t, r));
  }
}
function Rd(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function Id(e, t) {
  Rr = go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
var yo = {
    readContext: qe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  ih = {
    readContext: qe,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, _d.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lh.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: ha,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        t = e[0];
      return (e = rh.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        l = wt();
      if (Z) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(N(349));
        Tn & 30 || Ed(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Cu(Cd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ll(9, Nd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = pe.identifierPrefix;
      if (Z) {
        var n = bt,
          r = Pt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = nh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sh = {
    readContext: qe,
    useCallback: Ld,
    useContext: qe,
    useEffect: ma,
    useImperativeHandle: Dd,
    useInsertionEffect: bd,
    useLayoutEffect: Od,
    useMemo: Md,
    useReducer: Si,
    useRef: Pd,
    useState: function () {
      return Si(rl);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = Je();
      return $d(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(rl)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Sd,
    useSyncExternalStore: kd,
    useId: Fd,
    unstable_isNewReconciler: !1,
  },
  ah = {
    readContext: qe,
    useCallback: Ld,
    useContext: qe,
    useEffect: ma,
    useImperativeHandle: Dd,
    useInsertionEffect: bd,
    useLayoutEffect: Od,
    useMemo: Md,
    useReducer: ki,
    useRef: Pd,
    useState: function () {
      return ki(rl);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = Je();
      return ce === null ? (t.memoizedState = e) : $d(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(rl)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: Sd,
    useSyncExternalStore: kd,
    useId: Fd,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function cs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = nn(e),
      o = Ot(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = en(e, o, l)),
      t !== null && (mt(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = nn(e),
      o = Ot(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = en(e, o, l)),
      t !== null && (mt(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = nn(e),
      l = Ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = en(e, l, r)),
      t !== null && (mt(t, e, r, n), Bl(t, e, r));
  },
};
function Tu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(l, o)
      : !0
  );
}
function Ad(e, t, n) {
  var r = !1,
    l = on,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = qe(o))
      : ((l = Me(t) ? Nn : Se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? rr(e, l) : on)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function ds(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), sa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = qe(o))
    : ((o = Me(t) ? Nn : Se.current), (l.context = rr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (cs(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ro.enqueueReplaceState(l, l.state, null),
      mo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Fp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ei(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uh = typeof WeakMap == "function" ? WeakMap : Map;
function Hd(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wo || ((wo = !0), (ks = r)), fs(e, t);
    }),
    n
  );
}
function Ud(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        fs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        fs(e, t),
          typeof r != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Eh.bind(null, e, t, n)), t.then(e, e));
}
function bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ot(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ch = Rt.ReactCurrentOwner,
  De = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? yd(t, null, n, r) : or(t, e.child, n, r);
}
function _u(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, l),
    (r = fa(e, t, n, r, o, l)),
    (n = pa()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (Z && n && ea(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
  );
}
function Du(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ea(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wd(e, t, o, r, l))
      : ((e = Xl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xr), n(i, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = rn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xr(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Ft(e, t, l);
  }
  return ps(e, t, n, r, l);
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Yn, Ie),
        (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(Yn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(Yn, Ie),
        (Ie |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Yn, Ie),
      (Ie |= r);
  return Ne(e, t, l, n), t.child;
}
function Qd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ps(e, t, n, r, l) {
  var o = Me(n) ? Nn : Se.current;
  return (
    (o = rr(t, o)),
    Jn(t, l),
    (n = fa(e, t, n, r, o, l)),
    (r = pa()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (Z && r && ea(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (Me(n)) {
    var o = !0;
    ao(t);
  } else o = !1;
  if ((Jn(t, l), t.stateNode === null))
    Yl(e, t), Ad(t, n, r), ds(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = qe(c))
      : ((c = Me(n) ? Nn : Se.current), (c = rr(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && ju(t, i, r, c)),
      (Wt = !1);
    var g = t.memoizedState;
    (i.state = g),
      mo(t, r, i, l),
      (a = t.memoizedState),
      s !== r || g !== a || Le.current || Wt
        ? (typeof d == "function" && (cs(t, n, d, r), (a = t.memoizedState)),
          (s = Wt || Tu(t, n, s, r, g, a, c))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      wd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : ct(t.type, s)),
      (i.props = c),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = qe(a))
        : ((a = Me(n) ? Nn : Se.current), (a = rr(t, a)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && ju(t, i, r, a)),
      (Wt = !1),
      (g = t.memoizedState),
      (i.state = g),
      mo(t, r, i, l);
    var x = t.memoizedState;
    s !== p || g !== x || Le.current || Wt
      ? (typeof w == "function" && (cs(t, n, w, r), (x = t.memoizedState)),
        (c = Wt || Tu(t, n, c, r, g, x, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ms(e, t, n, r, o, l);
}
function ms(e, t, n, r, l, o) {
  Qd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && vu(t, n, !1), Ft(e, t, o);
  (r = t.stateNode), (ch.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = or(t, e.child, null, o)), (t.child = or(t, null, s, o)))
      : Ne(e, t, s, o),
    (t.memoizedState = r.state),
    l && vu(t, n, !0),
    t.child
  );
}
function Vd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yu(e, t.context, !1),
    aa(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return lr(), na(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var hs = { dehydrated: null, treeContext: null, retryLane: 0 };
function gs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    l = ne.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    K(ne, l & 1),
    e === null)
  )
    return (
      as(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ao(i, r, 0, null)),
              (e = kn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = gs(n)),
              (t.memoizedState = hs),
              e)
            : ga(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return dh(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = rn(s, o)) : ((o = kn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? gs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = hs),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = rn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ga(e, t) {
  return (
    (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && na(r),
    or(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ei(Error(N(422)))), Dl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ao({ mode: "visible", children: r.children }, l, 0, null)),
        (o = kn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && or(t, e.child, null, i),
        (t.child.memoizedState = gs(i)),
        (t.memoizedState = hs),
        o);
  if (!(t.mode & 1)) return Dl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(N(419))), (r = Ei(o, r, void 0)), Dl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), De || s)) {
    if (((r = pe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), $t(e, l), mt(r, e, l, -1));
    }
    return ka(), (r = Ei(Error(N(421)))), Dl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Nh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Zt(l.nextSibling)),
      (He = t),
      (Z = !0),
      (ft = null),
      e !== null &&
        ((Ye[Ge++] = Pt),
        (Ye[Ge++] = bt),
        (Ye[Ge++] = Cn),
        (Pt = e.id),
        (bt = e.overflow),
        (Cn = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), us(e.return, t, n);
}
function Ni(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Gd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
        else if (e.tag === 19) $u(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ho(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ni(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ho(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ni(t, !0, n, null, o);
        break;
      case "together":
        Ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fh(e, t, n) {
  switch (t.tag) {
    case 3:
      Vd(t), lr();
      break;
    case 5:
      xd(t);
      break;
    case 1:
      Me(t.type) && ao(t);
      break;
    case 4:
      aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      K(fo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Yd(e, t, n)
          : (K(ne, ne.current & 1),
            (e = Ft(e, t, n)),
            e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        K(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bd(e, t, n);
  }
  return Ft(e, t, n);
}
var Kd, ys, Xd, qd;
Kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ys = function () {};
Xd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), vn(kt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = zi(e, l)), (r = zi(e, r)), (o = []);
        break;
      case "select":
        (l = le({}, l, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ui(e, l)), (r = Ui(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    Bi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Wr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && X("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
qd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ph(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(t), null;
    case 1:
      return Me(t.type) && so(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        q(Le),
        q(Se),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ol(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Cs(ft), (ft = null)))),
        ys(e, t),
        ve(t),
        null
      );
    case 5:
      ua(t);
      var l = vn(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Xd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ve(t), null;
        }
        if (((e = vn(kt.current)), Ol(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[xt] = t), (r[Zr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Or.length; l++) X(Or[l], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Ba(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              Va(r, o), X("invalid", r);
          }
          Bi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Wr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Qa(r, o, !0);
              break;
            case "textarea":
              Sl(r), Ya(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[xt] = t),
            (e[Zr] = r),
            Kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Qi(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Or.length; l++) X(Or[l], e);
                l = r;
                break;
              case "source":
                X("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (l = r);
                break;
              case "details":
                X("toggle", e), (l = r);
                break;
              case "input":
                Ba(e, r), (l = zi(e, r)), X("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = le({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                Va(e, r), (l = Ui(e, r)), X("invalid", e);
                break;
              default:
                l = r;
            }
            Bi(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Pc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Tc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && X("scroll", e)
                      : a != null && As(e, o, a, i));
              }
            switch (n) {
              case "input":
                Sl(e), Qa(e, r, !1);
                break;
              case "textarea":
                Sl(e), Ya(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = vn(tl.current)), vn(kt.current), Ol(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (o = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (q(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128))
          hd(), lr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ol(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[xt] = t;
          } else
            lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (o = !1);
        } else ft !== null && (Cs(ft), (ft = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? de === 0 && (de = 3) : ka())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        ir(), ys(e, t), e === null && qr(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return oa(t.type._context), ve(t), null;
    case 17:
      return Me(t.type) && so(), ve(t), null;
    case 19:
      if ((q(ne), (o = t.memoizedState), o === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Sr(o, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ho(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            se() > ar &&
            ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ho(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Z)
            )
              return ve(t), null;
          } else
            2 * se() - o.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = se()),
          (t.sibling = null),
          (n = ne.current),
          K(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function mh(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && so(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        q(Le),
        q(Se),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ua(t), null;
    case 13:
      if ((q(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ne), null;
    case 4:
      return ir(), null;
    case 10:
      return oa(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1,
  we = !1,
  hh = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function vs(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Fu = !1;
function gh(e, t) {
  if (((ts = ro), (e = nd()), Zs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            c = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (g = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++c === l && (s = i),
                g === o && ++d === r && (a = i),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ns = { focusedElem: e, selectionRange: n }, ro = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var S = x.memoizedProps,
                    C = x.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ct(t.type, S),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (k) {
          ie(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (x = Fu), (Fu = !1), x;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && vs(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Io(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ws(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[Zr], delete t[os], delete t[Jm], delete t[Zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Zd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), (e = e.sibling);
}
function Ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ss(e, t, n), e = e.sibling; e !== null; ) Ss(e, t, n), (e = e.sibling);
}
var me = null,
  dt = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) ef(e, t, n), (n = n.sibling);
}
function ef(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(Oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Vn(n, t);
    case 6:
      var r = me,
        l = dt;
      (me = null),
        zt(e, t, n),
        (me = r),
        (dt = l),
        me !== null &&
          (dt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (dt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? yi(e.parentNode, n)
              : e.nodeType === 1 && yi(e, n),
            Gr(e))
          : yi(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (l = dt),
        (me = n.stateNode.containerInfo),
        (dt = !0),
        zt(e, t, n),
        (me = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && vs(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ie(n, t, s);
        }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), zt(e, t, n), (we = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hh()),
      t.forEach(function (r) {
        var l = Ch.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (me = s.stateNode), (dt = !1);
              break e;
            case 3:
              (me = s.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (me = s.stateNode.containerInfo), (dt = !0);
              break e;
          }
          s = s.return;
        }
        if (me === null) throw Error(N(160));
        ef(o, i, l), (me = null), (dt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        ie(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) tf(t, e), (t = t.sibling);
}
function tf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          Ir(3, e, e.return), Io(3, e);
        } catch (S) {
          ie(e, e.return, S);
        }
        try {
          Ir(5, e, e.return);
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 1:
      ut(t, e), vt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        vt(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Br(l, "");
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Ec(l, o),
              Qi(s, i);
            var c = Qi(s, o);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? Pc(l, p)
                : d === "dangerouslySetInnerHTML"
                ? Tc(l, p)
                : d === "children"
                ? Br(l, p)
                : As(l, d, p, c);
            }
            switch (s) {
              case "input":
                Ai(l, o);
                break;
              case "textarea":
                Nc(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Gn(l, !!o.multiple, w, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(l, !!o.multiple, o.defaultValue, !0)
                      : Gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Zr] = o;
          } catch (S) {
            ie(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo);
        } catch (S) {
          ie(e, e.return, S);
        }
      break;
    case 4:
      ut(t, e), vt(e);
      break;
    case 13:
      ut(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (wa = se())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (c = we) || d), ut(t, e), (we = c)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (p = O = d; O !== null; ) {
              switch (((g = O), (w = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, g, g.return);
                  break;
                case 1:
                  Vn(g, g.return);
                  var x = g.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      ie(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Vn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Au(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = g), (O = w)) : Au(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = jc("display", i)));
              } catch (S) {
                ie(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                ie(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), vt(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Br(l, ""), (r.flags &= -33));
          var o = Ru(e);
          Ss(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Ru(e);
          xs(e, s, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yh(e, t, n) {
  (O = e), nf(e);
}
function nf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ll;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || we;
        s = Ll;
        var c = we;
        if (((Ll = i), (we = a) && !c))
          for (O = l; O !== null; )
            (i = O),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Hu(l)
                : a !== null
                ? ((a.return = i), (O = a))
                : Hu(l);
        for (; o !== null; ) (O = o), nf(o), (o = o.sibling);
        (O = l), (Ll = s), (we = c);
      }
      zu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (O = o)) : zu(e);
  }
}
function zu(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Eu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Eu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Gr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        we || (t.flags & 512 && ws(t));
      } catch (g) {
        ie(t, t.return, g);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Au(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Hu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, l, a);
            }
          }
          var o = t.return;
          try {
            ws(t);
          } catch (a) {
            ie(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ws(t);
          } catch (a) {
            ie(t, i, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var vh = Math.ceil,
  vo = Rt.ReactCurrentDispatcher,
  ya = Rt.ReactCurrentOwner,
  Xe = Rt.ReactCurrentBatchConfig,
  U = 0,
  pe = null,
  ue = null,
  he = 0,
  Ie = 0,
  Yn = an(0),
  de = 0,
  ol = null,
  jn = 0,
  zo = 0,
  va = 0,
  zr = null,
  _e = null,
  wa = 0,
  ar = 1 / 0,
  Tt = null,
  wo = !1,
  ks = null,
  tn = null,
  Ml = !1,
  Gt = null,
  xo = 0,
  Ar = 0,
  Es = null,
  Gl = -1,
  Kl = 0;
function Ce() {
  return U & 6 ? se() : Gl !== -1 ? Gl : (Gl = se());
}
function nn(e) {
  return e.mode & 1
    ? U & 2 && he !== 0
      ? he & -he
      : th.transition !== null
      ? (Kl === 0 && (Kl = Ac()), Kl)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yc(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (Es = null), Error(N(185)));
  al(e, n, r),
    (!(U & 2) || e !== pe) &&
      (e === pe && (!(U & 2) && (zo |= n), de === 4 && Qt(e, he)),
      $e(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((ar = se() + 500), $o && un()));
}
function $e(e, t) {
  var n = e.callbackNode;
  tm(e, t);
  var r = no(e, e === pe ? he : 0);
  if (r === 0)
    n !== null && Xa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xa(n), t === 1))
      e.tag === 0 ? eh(Uu.bind(null, e)) : fd(Uu.bind(null, e)),
        Xm(function () {
          !(U & 6) && un();
        }),
        (n = null);
    else {
      switch (Hc(r)) {
        case 1:
          n = Qs;
          break;
        case 4:
          n = Ic;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = zc;
          break;
        default:
          n = to;
      }
      n = df(n, rf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rf(e, t) {
  if (((Gl = -1), (Kl = 0), U & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = no(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = So(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = of();
    (pe !== e || he !== t) && ((Tt = null), (ar = se() + 500), Sn(e, t));
    do
      try {
        Sh();
        break;
      } catch (s) {
        lf(e, s);
      }
    while (!0);
    la(),
      (vo.current = o),
      (U = l),
      ue !== null ? (t = 0) : ((pe = null), (he = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Xi(e)), l !== 0 && ((r = l), (t = Ns(e, l)))), t === 1)
    )
      throw ((n = ol), Sn(e, 0), Qt(e, r), $e(e, se()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !wh(l) &&
          ((t = So(e, r)),
          t === 2 && ((o = Xi(e)), o !== 0 && ((r = o), (t = Ns(e, o)))),
          t === 1))
      )
        throw ((n = ol), Sn(e, 0), Qt(e, r), $e(e, se()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          pn(e, _e, Tt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = wa + 500 - se()), 10 < t))
          ) {
            if (no(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ls(pn.bind(null, e, _e, Tt), t);
            break;
          }
          pn(e, _e, Tt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ls(pn.bind(null, e, _e, Tt), r);
            break;
          }
          pn(e, _e, Tt);
          break;
        case 5:
          pn(e, _e, Tt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return $e(e, se()), e.callbackNode === n ? rf.bind(null, e) : null;
}
function Ns(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
    (e = So(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Cs(t)),
    e
  );
}
function Cs(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function wh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~va,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (U & 6) throw Error(N(327));
  Zn();
  var t = no(e, 0);
  if (!(t & 1)) return $e(e, se()), null;
  var n = So(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && ((t = r), (n = Ns(e, r)));
  }
  if (n === 1) throw ((n = ol), Sn(e, 0), Qt(e, t), $e(e, se()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pn(e, _e, Tt),
    $e(e, se()),
    null
  );
}
function xa(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((ar = se() + 500), $o && un());
  }
}
function Pn(e) {
  Gt !== null && Gt.tag === 0 && !(U & 6) && Zn();
  var t = U;
  U |= 1;
  var n = Xe.transition,
    r = Q;
  try {
    if (((Xe.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Xe.transition = n), (U = t), !(U & 6) && un();
  }
}
function Sa() {
  (Ie = Yn.current), q(Yn);
}
function Sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Km(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && so();
          break;
        case 3:
          ir(), q(Le), q(Se), ca();
          break;
        case 5:
          ua(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          q(ne);
          break;
        case 19:
          q(ne);
          break;
        case 10:
          oa(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ue = e = rn(e.current, null)),
    (he = Ie = t),
    (de = 0),
    (ol = null),
    (va = zo = jn = 0),
    (_e = zr = null),
    yn !== null)
  ) {
    for (t = 0; t < yn.length; t++)
      if (((n = yn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    yn = null;
  }
  return e;
}
function lf(e, t) {
  do {
    var n = ue;
    try {
      if ((la(), (Ql.current = yo), go)) {
        for (var r = re.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        go = !1;
      }
      if (
        ((Tn = 0),
        (fe = ce = re = null),
        (Rr = !1),
        (nl = 0),
        (ya.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (ol = t), (ue = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = he),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = bu(i);
          if (w !== null) {
            (w.flags &= -257),
              Ou(w, i, s, o, t),
              w.mode & 1 && Pu(o, c, t),
              (t = w),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Pu(o, c, t), ka();
              break e;
            }
            a = Error(N(426));
          }
        } else if (Z && s.mode & 1) {
          var C = bu(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ou(C, i, s, o, t),
              na(sr(a, s));
            break e;
          }
        }
        (o = a = sr(a, s)),
          de !== 4 && (de = 2),
          zr === null ? (zr = [o]) : zr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Hd(o, a, t);
              ku(o, h);
              break e;
            case 1:
              s = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (tn === null || !tn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Ud(o, s, t);
                ku(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      af(n);
    } catch (j) {
      (t = j), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function of() {
  var e = vo.current;
  return (vo.current = yo), e === null ? yo : e;
}
function ka() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    pe === null || (!(jn & 268435455) && !(zo & 268435455)) || Qt(pe, he);
}
function So(e, t) {
  var n = U;
  U |= 2;
  var r = of();
  (pe !== e || he !== t) && ((Tt = null), Sn(e, t));
  do
    try {
      xh();
      break;
    } catch (l) {
      lf(e, l);
    }
  while (!0);
  if ((la(), (U = n), (vo.current = r), ue !== null)) throw Error(N(261));
  return (pe = null), (he = 0), de;
}
function xh() {
  for (; ue !== null; ) sf(ue);
}
function Sh() {
  for (; ue !== null && !Vp(); ) sf(ue);
}
function sf(e) {
  var t = cf(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? af(e) : (ue = t),
    (ya.current = null);
}
function af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mh(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ue = null);
        return;
      }
    } else if (((n = ph(n, t, Ie)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function pn(e, t, n) {
  var r = Q,
    l = Xe.transition;
  try {
    (Xe.transition = null), (Q = 1), kh(e, t, n, r);
  } finally {
    (Xe.transition = l), (Q = r);
  }
  return null;
}
function kh(e, t, n, r) {
  do Zn();
  while (Gt !== null);
  if (U & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (nm(e, o),
    e === pe && ((ue = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      df(to, function () {
        return Zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Xe.transition), (Xe.transition = null);
    var i = Q;
    Q = 1;
    var s = U;
    (U |= 4),
      (ya.current = null),
      gh(e, n),
      tf(n, e),
      Um(ns),
      (ro = !!ts),
      (ns = ts = null),
      (e.current = n),
      yh(n),
      Yp(),
      (U = s),
      (Q = i),
      (Xe.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Gt = e), (xo = l)),
    (o = e.pendingLanes),
    o === 0 && (tn = null),
    Xp(n.stateNode),
    $e(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (wo) throw ((wo = !1), (e = ks), (ks = null), e);
  return (
    xo & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Es ? Ar++ : ((Ar = 0), (Es = e))) : (Ar = 0),
    un(),
    null
  );
}
function Zn() {
  if (Gt !== null) {
    var e = Hc(xo),
      t = Xe.transition,
      n = Q;
    try {
      if (((Xe.transition = null), (Q = 16 > e ? 16 : e), Gt === null))
        var r = !1;
      else {
        if (((e = Gt), (Gt = null), (xo = 0), U & 6)) throw Error(N(331));
        var l = U;
        for (U |= 4, O = e.current; O !== null; ) {
          var o = O,
            i = o.child;
          if (O.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (O = c; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (O = p);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var g = d.sibling,
                        w = d.return;
                      if ((Jd(d), d === c)) {
                        O = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = w), (O = g);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (O = i);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (O = h);
                break e;
              }
              O = o.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          i = O;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (O = m);
          else
            e: for (i = f; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, s);
                  }
                } catch (j) {
                  ie(s, s.return, j);
                }
              if (s === i) {
                O = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (O = k);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((U = l), un(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(Oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Xe.transition = t);
    }
  }
  return !1;
}
function Wu(e, t, n) {
  (t = sr(n, t)),
    (t = Hd(e, t, 1)),
    (e = en(e, t, 1)),
    (t = Ce()),
    e !== null && (al(e, 1, t), $e(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Wu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tn === null || !tn.has(r)))
        ) {
          (e = sr(n, e)),
            (e = Ud(t, e, 1)),
            (t = en(t, e, 1)),
            (e = Ce()),
            t !== null && (al(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Eh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (de === 4 || (de === 3 && (he & 130023424) === he && 500 > se() - wa)
        ? Sn(e, 0)
        : (va |= n)),
    $e(e, t);
}
function uf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304))
      : (t = 1));
  var n = Ce();
  (e = $t(e, t)), e !== null && (al(e, t, n), $e(e, n));
}
function Nh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uf(e, n);
}
function Ch(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), uf(e, n);
}
var cf;
cf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), fh(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), Z && t.flags & 1048576 && pd(t, co, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yl(e, t), (e = t.pendingProps);
      var l = rr(t, Se.current);
      Jn(t, n), (l = fa(null, t, r, e, l, n));
      var o = pa();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), ao(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            sa(t),
            (l.updater = Ro),
            (t.stateNode = l),
            (l._reactInternals = t),
            ds(t, r, e, n),
            (t = ms(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && ea(t), Ne(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = jh(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ps(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = _u(null, t, r, e, n);
            break e;
          case 14:
            t = Du(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ps(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Lu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Vd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          wd(e, t),
          mo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = sr(Error(N(423)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sr(Error(N(424)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = Zt(t.stateNode.containerInfo.firstChild),
                He = t,
                Z = !0,
                ft = null,
                n = yd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lr(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xd(t),
        e === null && as(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        rs(r, l) ? (i = null) : o !== null && rs(r, o) && (t.flags |= 32),
        Qd(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && as(t), null;
    case 13:
      return Yd(e, t, n);
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = or(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        _u(e, t, r, l, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          K(fo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !Le.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ot(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      us(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  us(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ne(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Du(e, t, r, l, n)
      );
    case 15:
      return Wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Yl(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), ao(t)) : (e = !1),
        Jn(t, n),
        Ad(t, r, l),
        ds(t, r, l, n),
        ms(null, t, r, !0, e, n)
      );
    case 19:
      return Gd(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function df(e, t) {
  return Rc(e, t);
}
function Th(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new Th(e, t, n, r);
}
function Ea(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jh(e) {
  if (typeof e == "function") return Ea(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Us)) return 11;
    if (e === Ws) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ea(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Rn:
        return kn(n.children, l, o, t);
      case Hs:
        (i = 8), (l |= 8);
        break;
      case $i:
        return (
          (e = Ke(12, n, t, l | 2)), (e.elementType = $i), (e.lanes = o), e
        );
      case Fi:
        return (e = Ke(13, n, t, l)), (e.elementType = Fi), (e.lanes = o), e;
      case Ri:
        return (e = Ke(19, n, t, l)), (e.elementType = Ri), (e.lanes = o), e;
      case xc:
        return Ao(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vc:
              i = 10;
              break e;
            case wc:
              i = 9;
              break e;
            case Us:
              i = 11;
              break e;
            case Ws:
              i = 14;
              break e;
            case Ut:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function kn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function Ao(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = xc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ci(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function Ti(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ph(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ii(0)),
    (this.expirationTimes = ii(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ii(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Na(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new Ph(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ke(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sa(o),
    e
  );
}
function bh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ff(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return dd(e, n, t);
  }
  return t;
}
function pf(e, t, n, r, l, o, i, s, a) {
  return (
    (e = Na(n, r, !0, e, l, o, i, s, a)),
    (e.context = ff(null)),
    (n = e.current),
    (r = Ce()),
    (l = nn(n)),
    (o = Ot(r, l)),
    (o.callback = t ?? null),
    en(n, o, l),
    (e.current.lanes = l),
    al(e, l, r),
    $e(e, r),
    e
  );
}
function Ho(e, t, n, r) {
  var l = t.current,
    o = Ce(),
    i = nn(l);
  return (
    (n = ff(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(l, t, i)),
    e !== null && (mt(e, l, i, o), Bl(e, l, i)),
    i
  );
}
function ko(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ca(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Oh() {
  return null;
}
var mf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ta(e) {
  this._internalRoot = e;
}
Uo.prototype.render = Ta.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ho(e, t, null, null);
};
Uo.prototype.unmount = Ta.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function () {
      Ho(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function Uo(e) {
  this._internalRoot = e;
}
Uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function ja(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Wo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qu() {}
function _h(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ko(i);
        o.call(c);
      };
    }
    var i = pf(t, r, e, 0, null, !1, !1, "", Qu);
    return (
      (e._reactRootContainer = i),
      (e[Mt] = i.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      Pn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = ko(a);
      s.call(c);
    };
  }
  var a = Na(e, 0, !1, null, null, !1, !1, "", Qu);
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    Pn(function () {
      Ho(t, a, n, r);
    }),
    a
  );
}
function Bo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = ko(i);
        s.call(a);
      };
    }
    Ho(t, i, e, l);
  } else i = _h(n, t, e, l, r);
  return ko(i);
}
Uc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = br(t.pendingLanes);
        n !== 0 &&
          (Vs(t, n | 1), $e(t, se()), !(U & 6) && ((ar = se() + 500), un()));
      }
      break;
    case 13:
      Pn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var l = Ce();
          mt(r, e, 1, l);
        }
      }),
        Ca(e, 1);
  }
};
Ys = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ce();
      mt(t, e, 134217728, n);
    }
    Ca(e, 134217728);
  }
};
Wc = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Ce();
      mt(n, e, t, r);
    }
    Ca(e, t);
  }
};
Bc = function () {
  return Q;
};
Qc = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Yi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ai(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Mo(r);
            if (!l) throw Error(N(90));
            kc(r), Ai(r, l);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
  }
};
_c = xa;
Dc = Pn;
var Dh = { usingClientEntryPoint: !1, Events: [cl, Hn, Mo, bc, Oc, xa] },
  kr = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lh = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || Oh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber)
    try {
      (Oo = $l.inject(Lh)), (St = $l);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dh;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ja(t)) throw Error(N(200));
  return bh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!ja(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = mf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Na(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new Ta(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = $c(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return Pn(e);
};
We.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(N(200));
  return Bo(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!ja(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = mf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = pf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Mt] = t.current),
    qr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Uo(t);
};
We.render = function (e, t, n) {
  if (!Wo(t)) throw Error(N(200));
  return Bo(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Pn(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = xa;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Bo(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function hf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
    } catch (e) {
      console.error(e);
    }
}
hf(), (mc.exports = We);
var gf = mc.exports,
  yf,
  Vu = gf;
(yf = Vu.createRoot), Vu.hydrateRoot;
function gt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function bn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const vf = 6048e5,
  Mh = 864e5;
let $h = {};
function Qo() {
  return $h;
}
function il(e, t) {
  var s, a, c, d;
  const n = Qo(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    l = gt(e),
    o = l.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l;
}
function Eo(e) {
  return il(e, { weekStartsOn: 1 });
}
function wf(e) {
  const t = gt(e),
    n = t.getFullYear(),
    r = bn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = Eo(r),
    o = bn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Eo(o);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Yu(e) {
  const t = gt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Gu(e) {
  const t = gt(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Fh(e, t) {
  const n = Yu(e),
    r = Yu(t),
    l = +n - Gu(n),
    o = +r - Gu(r);
  return Math.round((l - o) / Mh);
}
function Rh(e) {
  const t = wf(e),
    n = bn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Eo(n);
}
function Ih(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function zh(e) {
  if (!Ih(e) && typeof e != "number") return !1;
  const t = gt(e);
  return !isNaN(Number(t));
}
function Ah(e) {
  const t = gt(e),
    n = bn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Hh = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  Uh = (e, t, n) => {
    let r;
    const l = Hh[e];
    return (
      typeof l == "string"
        ? (r = l)
        : t === 1
        ? (r = l.one)
        : (r = l.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function ji(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Wh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Bh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Qh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Vh = {
    date: ji({ formats: Wh, defaultWidth: "full" }),
    time: ji({ formats: Bh, defaultWidth: "full" }),
    dateTime: ji({ formats: Qh, defaultWidth: "full" }),
  },
  Yh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Gh = (e, t, n, r) => Yh[e];
function Er(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      l = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[o];
  };
}
const Kh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Xh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  qh = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Jh = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Zh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  e0 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  t0 = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  n0 = {
    ordinalNumber: t0,
    era: Er({ values: Kh, defaultWidth: "wide" }),
    quarter: Er({
      values: Xh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Er({ values: qh, defaultWidth: "wide" }),
    day: Er({ values: Jh, defaultWidth: "wide" }),
    dayPeriod: Er({
      values: Zh,
      defaultWidth: "wide",
      formattingValues: e0,
      defaultFormattingWidth: "wide",
    }),
  };
function Nr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const i = o[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? l0(s, (p) => p.test(i)) : r0(s, (p) => p.test(i));
    let c;
    (c = e.valueCallback ? e.valueCallback(a) : a),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function r0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function l0(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function o0(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(l.length);
    return { value: i, rest: s };
  };
}
const i0 = /^(\d+)(th|st|nd|rd)?/i,
  s0 = /\d+/i,
  a0 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  u0 = { any: [/^b/i, /^(a|c)/i] },
  c0 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  d0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  f0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  p0 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  m0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  h0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  g0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  y0 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  v0 = {
    ordinalNumber: o0({
      matchPattern: i0,
      parsePattern: s0,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Nr({
      matchPatterns: a0,
      defaultMatchWidth: "wide",
      parsePatterns: u0,
      defaultParseWidth: "any",
    }),
    quarter: Nr({
      matchPatterns: c0,
      defaultMatchWidth: "wide",
      parsePatterns: d0,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Nr({
      matchPatterns: f0,
      defaultMatchWidth: "wide",
      parsePatterns: p0,
      defaultParseWidth: "any",
    }),
    day: Nr({
      matchPatterns: m0,
      defaultMatchWidth: "wide",
      parsePatterns: h0,
      defaultParseWidth: "any",
    }),
    dayPeriod: Nr({
      matchPatterns: g0,
      defaultMatchWidth: "any",
      parsePatterns: y0,
      defaultParseWidth: "any",
    }),
  },
  w0 = {
    code: "en-US",
    formatDistance: Uh,
    formatLong: Vh,
    formatRelative: Gh,
    localize: n0,
    match: v0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function x0(e) {
  const t = gt(e);
  return Fh(t, Ah(t)) + 1;
}
function S0(e) {
  const t = gt(e),
    n = +Eo(t) - +Rh(t);
  return Math.round(n / vf) + 1;
}
function xf(e, t) {
  var d, p, g, w;
  const n = gt(e),
    r = n.getFullYear(),
    l = Qo(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((w = (g = l.locale) == null ? void 0 : g.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    i = bn(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = il(i, t),
    a = bn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const c = il(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function k0(e, t) {
  var s, a, c, d;
  const n = Qo(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((a = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : a.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    l = xf(e, t),
    o = bn(e, 0);
  return o.setFullYear(l, 0, r), o.setHours(0, 0, 0, 0), il(o, t);
}
function E0(e, t) {
  const n = gt(e),
    r = +il(n, t) - +k0(n, t);
  return Math.round(r / vf) + 1;
}
function B(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const At = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return B(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : B(n + 1, 2);
    },
    d(e, t) {
      return B(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return B(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return B(e.getHours(), t.length);
    },
    m(e, t) {
      return B(e.getMinutes(), t.length);
    },
    s(e, t) {
      return B(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return B(l, t.length);
    },
  },
  $n = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Ku = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          l = r > 0 ? r : 1 - r;
        return n.ordinalNumber(l, { unit: "year" });
      }
      return At.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = xf(e, r),
        o = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = o % 100;
        return B(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : B(o, t.length);
    },
    R: function (e, t) {
      const n = wf(e);
      return B(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return B(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return B(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return B(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return At.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return B(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const l = E0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : B(l, t.length);
    },
    I: function (e, t, n) {
      const r = S0(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : B(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : At.d(e, t);
    },
    D: function (e, t, n) {
      const r = x0(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : B(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const l = e.getDay(),
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return B(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
        case "eee":
          return n.day(l, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(l, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(l, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(l, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const l = e.getDay(),
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return B(o, t.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return n.day(l, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(l, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(l, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(l, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        l = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(l);
        case "ii":
          return B(l, t.length);
        case "io":
          return n.ordinalNumber(l, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const l = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r === 12
          ? (l = $n.noon)
          : r === 0
          ? (l = $n.midnight)
          : (l = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r >= 17
          ? (l = $n.evening)
          : r >= 12
          ? (l = $n.afternoon)
          : r >= 4
          ? (l = $n.morning)
          : (l = $n.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return At.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : At.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : B(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : B(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : At.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : At.s(e, t);
    },
    S: function (e, t) {
      return At.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return qu(r);
        case "XXXX":
        case "XX":
          return mn(r);
        case "XXXXX":
        case "XXX":
        default:
          return mn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return qu(r);
        case "xxxx":
        case "xx":
          return mn(r);
        case "xxxxx":
        case "xxx":
        default:
          return mn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Xu(r, ":");
        case "OOOO":
        default:
          return "GMT" + mn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Xu(r, ":");
        case "zzzz":
        default:
          return "GMT" + mn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return B(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return B(r, t.length);
    },
  };
function Xu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(l) : n + String(l) + t + B(o, 2);
}
function qu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + B(Math.abs(e) / 60, 2) : mn(e, t);
}
function mn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = B(Math.trunc(r / 60), 2),
    o = B(r % 60, 2);
  return n + l + t + o;
}
const Ju = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Sf = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  N0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Ju(e, t);
    let o;
    switch (r) {
      case "P":
        o = t.dateTime({ width: "short" });
        break;
      case "PP":
        o = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = t.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", Ju(r, t)).replace("{{time}}", Sf(l, t));
  },
  C0 = { p: Sf, P: N0 },
  T0 = /^D+$/,
  j0 = /^Y+$/,
  P0 = ["D", "DD", "YY", "YYYY"];
function b0(e) {
  return T0.test(e);
}
function O0(e) {
  return j0.test(e);
}
function _0(e, t, n) {
  const r = D0(e, t, n);
  if ((console.warn(r), P0.includes(e))) throw new RangeError(r);
}
function D0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const L0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  M0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  $0 = /^'([^]*?)'?$/,
  F0 = /''/g,
  R0 = /[a-zA-Z]/;
function G(e, t, n) {
  var d, p, g, w;
  const r = Qo(),
    l = r.locale ?? w0,
    o =
      r.firstWeekContainsDate ??
      ((p = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((w = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : w.weekStartsOn) ??
      0,
    s = gt(e);
  if (!zh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(M0)
    .map((x) => {
      const S = x[0];
      if (S === "p" || S === "P") {
        const C = C0[S];
        return C(x, l.formatLong);
      }
      return x;
    })
    .join("")
    .match(L0)
    .map((x) => {
      if (x === "''") return { isToken: !1, value: "'" };
      const S = x[0];
      if (S === "'") return { isToken: !1, value: I0(x) };
      if (Ku[S]) return { isToken: !0, value: x };
      if (S.match(R0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`"
        );
      return { isToken: !1, value: x };
    });
  l.localize.preprocessor && (a = l.localize.preprocessor(s, a));
  const c = { firstWeekContainsDate: o, weekStartsOn: i, locale: l };
  return a
    .map((x) => {
      if (!x.isToken) return x.value;
      const S = x.value;
      (O0(S) || b0(S)) && _0(S, t, String(e));
      const C = Ku[S[0]];
      return C(s, S, l.localize, c);
    })
    .join("");
}
function I0(e) {
  const t = e.match($0);
  return t ? t[1].replace(F0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var z0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Et = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: a,
          ...c
        },
        d
      ) =>
        y.createElement(
          "svg",
          {
            ref: d,
            ...z0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${A0(e)}`, s].join(" "),
            ...c,
          },
          [
            ...t.map(([p, g]) => y.createElement(p, g)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ts = Et("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H0 = Et("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U0 = Et("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W0 = Et("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B0 = Et("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q0 = Et("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V0 = Et("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y0 = Et("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G0 = Et("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K0 = Et("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var X0 = Object.defineProperty,
  q0 = (e, t, n) =>
    t in e
      ? X0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Pi = (e, t, n) => (q0(e, typeof t != "symbol" ? t + "" : t, n), n);
let J0 = class {
    constructor() {
      Pi(this, "current", this.detect()),
        Pi(this, "handoffState", "pending"),
        Pi(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  _t = new J0(),
  Ze = (e, t) => {
    _t.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function Dt(e) {
  let t = y.useRef(e);
  return (
    Ze(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ee = function (e) {
  let t = Dt(e);
  return A.useCallback((...n) => t.current(...n), [t]);
};
function Vo(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Dn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Vo(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = Dn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Pa() {
  let [e] = y.useState(Dn);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function Z0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ur
    ? ((t) => t.useSyncExternalStore)(Ur)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function fr() {
  let e = Z0(),
    [t, n] = y.useState(_t.isHandoffComplete);
  return (
    t && _t.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => _t.handoff(), []),
    e ? !1 : t
  );
}
var Zu;
let pr =
  (Zu = A.useId) != null
    ? Zu
    : function () {
        let e = fr(),
          [t, n] = A.useState(e ? () => _t.nextId() : null);
        return (
          Ze(() => {
            t === null && n(_t.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function xe(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, xe), r);
}
function kf(e) {
  return _t.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let js = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var hn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(hn || {}),
  Ef = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Ef || {}),
  eg = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(eg || {});
function tg(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(js)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Nf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Nf || {});
function ng(e, t = 0) {
  var n;
  return e === ((n = kf(e)) == null ? void 0 : n.body)
    ? !1
    : xe(t, {
        0() {
          return e.matches(js);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(js)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var rg = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(rg || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function En(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let lg = ["textarea", "input"].join(",");
function og(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, lg)) !=
    null
    ? n
    : !1;
}
function ig(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function ql(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? ig(e) : e) : tg(e);
  l.length > 0 && i.length > 1 && (i = i.filter((w) => !l.includes(w))),
    (r = r ?? o.activeElement);
  let s = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    a = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    g;
  do {
    if (d >= p || d + p <= 0) return 0;
    let w = a + d;
    if (t & 16) w = (w + p) % p;
    else {
      if (w < 0) return 3;
      if (w >= p) return 1;
    }
    (g = i[w]), g == null || g.focus(c), (d += s);
  } while (g !== o.activeElement);
  return t & 6 && og(g) && g.select(), 2;
}
function Cf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function sg() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ag() {
  return Cf() || sg();
}
function Fl(e, t, n) {
  let r = Dt(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Tf(e, t, n) {
  let r = Dt(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function ug(e, t, n = !0) {
  let r = y.useRef(!1);
  y.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, s) {
    if (!r.current || i.defaultPrevented) return;
    let a = s(i);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let c = (function d(p) {
      return typeof p == "function"
        ? d(p())
        : Array.isArray(p) || p instanceof Set
        ? p
        : [p];
    })(e);
    for (let d of c) {
      if (d === null) continue;
      let p = d instanceof HTMLElement ? d : d.current;
      if (
        (p != null && p.contains(a)) ||
        (i.composed && i.composedPath().includes(p))
      )
        return;
    }
    return !ng(a, Nf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let o = y.useRef(null);
  Fl(
    "pointerdown",
    (i) => {
      var s, a;
      r.current &&
        (o.current =
          ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
            ? void 0
            : a[0]) || i.target);
    },
    !0
  ),
    Fl(
      "mousedown",
      (i) => {
        var s, a;
        r.current &&
          (o.current =
            ((a = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
              ? void 0
              : a[0]) || i.target);
      },
      !0
    ),
    Fl(
      "click",
      (i) => {
        ag() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    Fl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    Tf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function fl(...e) {
  return y.useMemo(() => kf(...e), [...e]);
}
let jf = Symbol();
function cg(e, t = !0) {
  return Object.assign(e, { [jf]: t });
}
function yt(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ee((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[jf])) ? void 0 : n;
}
function ba(e, t) {
  let n = y.useRef([]),
    r = ee(e);
  y.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function No(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var Co = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Co || {}),
  Kt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Kt || {});
function et({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? dg;
  let a = Pf(t, e);
  if (o) return Rl(a, n, r, i, s);
  let c = l ?? 0;
  if (c & 2) {
    let { static: d = !1, ...p } = a;
    if (d) return Rl(p, n, r, i, s);
  }
  if (c & 1) {
    let { unmount: d = !0, ...p } = a;
    return xe(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Rl({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return Rl(a, n, r, i, s);
}
function Rl(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: s = "ref",
      ...a
    } = bi(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let p = {};
  if (t) {
    let g = !1,
      w = [];
    for (let [x, S] of Object.entries(t))
      typeof S == "boolean" && (g = !0), S === !0 && w.push(x);
    g && (p["data-headlessui-state"] = w.join(" "));
  }
  if (o === y.Fragment && Object.keys(ec(a)).length > 0) {
    if (!y.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map((S) => `  - ${S}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((S) => `  - ${S}`).join(`
`),
        ].join(`
`)
      );
    let g = d.props,
      w =
        typeof (g == null ? void 0 : g.className) == "function"
          ? (...S) => No(g == null ? void 0 : g.className(...S), a.className)
          : No(g == null ? void 0 : g.className, a.className),
      x = w ? { className: w } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        Pf(d.props, ec(bi(a, ["ref"]))),
        p,
        c,
        { ref: l(d.ref, c.ref) },
        x
      )
    );
  }
  return y.createElement(
    o,
    Object.assign(
      {},
      bi(a, ["ref"]),
      o !== y.Fragment && c,
      o !== y.Fragment && p
    ),
    d
  );
}
function dg(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function Pf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let s of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          s(l, ...o);
        }
      },
    });
  return t;
}
function Qe(e) {
  var t;
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function ec(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function bi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let fg = "div";
var To = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(To || {});
function pg(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return et({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: fg,
    name: "Hidden",
  });
}
let Ps = Qe(pg),
  Oa = y.createContext(null);
Oa.displayName = "OpenClosedContext";
var ze = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ze || {});
function _a() {
  return y.useContext(Oa);
}
function mg({ value: e, children: t }) {
  return A.createElement(Oa.Provider, { value: e }, t);
}
function hg(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Vt = [];
hg(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Vt[0] !== t.target &&
      (Vt.unshift(t.target),
      (Vt = Vt.filter((n) => n != null && n.isConnected)),
      Vt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function gg(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && yg(n) ? !1 : r;
}
function yg(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var bf = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(bf || {});
function Of(e, t, n, r) {
  let l = Dt(n);
  y.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function pl() {
  let e = y.useRef(!1);
  return (
    Ze(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function _f(e) {
  let t = ee(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Vo(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var _r = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(_r || {});
function vg() {
  let e = y.useRef(0);
  return (
    Tf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Df(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let wg = "div";
var Lf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Lf || {});
function xg(e, t) {
  let n = y.useRef(null),
    r = yt(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...s } = e;
  fr() || (i = 1);
  let a = fl(n);
  Eg({ ownerDocument: a }, !!(i & 16));
  let c = Ng({ ownerDocument: a, container: n, initialFocus: l }, !!(i & 2));
  Cg(
    { ownerDocument: a, container: n, containers: o, previousActiveElement: c },
    !!(i & 8)
  );
  let d = vg(),
    p = ee((S) => {
      let C = n.current;
      C &&
        ((h) => h())(() => {
          xe(d.current, {
            [_r.Forwards]: () => {
              ql(C, hn.First, { skipElements: [S.relatedTarget] });
            },
            [_r.Backwards]: () => {
              ql(C, hn.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    g = Pa(),
    w = y.useRef(!1),
    x = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((w.current = !0),
          g.requestAnimationFrame(() => {
            w.current = !1;
          }));
      },
      onBlur(S) {
        let C = Df(o);
        n.current instanceof HTMLElement && C.add(n.current);
        let h = S.relatedTarget;
        h instanceof HTMLElement &&
          h.dataset.headlessuiFocusGuard !== "true" &&
          (Mf(C, h) ||
            (w.current
              ? ql(
                  n.current,
                  xe(d.current, {
                    [_r.Forwards]: () => hn.Next,
                    [_r.Backwards]: () => hn.Previous,
                  }) | hn.WrapAround,
                  { relativeTo: S.target }
                )
              : S.target instanceof HTMLElement && En(S.target)));
      },
    };
  return A.createElement(
    A.Fragment,
    null,
    !!(i & 4) &&
      A.createElement(Ps, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: To.Focusable,
      }),
    et({ ourProps: x, theirProps: s, defaultTag: wg, name: "FocusTrap" }),
    !!(i & 4) &&
      A.createElement(Ps, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: To.Focusable,
      })
  );
}
let Sg = Qe(xg),
  Cr = Object.assign(Sg, { features: Lf });
function kg(e = !0) {
  let t = y.useRef(Vt.slice());
  return (
    ba(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Vo(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Vt.slice());
      },
      [e, Vt, t]
    ),
    ee(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function Eg({ ownerDocument: e }, t) {
  let n = kg(t);
  ba(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        En(n()));
  }, [t]),
    _f(() => {
      t && En(n());
    });
}
function Ng({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = y.useRef(null),
    o = pl();
  return (
    ba(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Vo(() => {
          if (!o.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              l.current = s;
              return;
            }
          } else if (i.contains(s)) {
            l.current = s;
            return;
          }
          n != null && n.current
            ? En(n.current)
            : ql(i, hn.First) === Ef.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function Cg(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let o = pl();
  Of(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let s = Df(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? Mf(s, c)
          ? ((r.current = c), En(c))
          : (i.preventDefault(), i.stopPropagation(), En(a))
        : En(r.current);
    },
    !0
  );
}
function Mf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let $f = y.createContext(!1);
function Tg() {
  return y.useContext($f);
}
function bs(e) {
  return A.createElement($f.Provider, { value: e.force }, e.children);
}
function jg(e) {
  let t = Tg(),
    n = y.useContext(Ff),
    r = fl(e),
    [l, o] = y.useState(() => {
      if ((!t && n !== null) || _t.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    y.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    y.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let Pg = y.Fragment;
function bg(e, t) {
  let n = e,
    r = y.useRef(null),
    l = yt(
      cg((d) => {
        r.current = d;
      }),
      t
    ),
    o = fl(r),
    i = jg(r),
    [s] = y.useState(() => {
      var d;
      return _t.isServer
        ? null
        : (d = o == null ? void 0 : o.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(Os),
    c = fr();
  return (
    Ze(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    Ze(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    _f(() => {
      var d;
      !i ||
        !s ||
        (s instanceof Node && i.contains(s) && i.removeChild(s),
        i.childNodes.length <= 0 &&
          ((d = i.parentElement) == null || d.removeChild(i)));
    }),
    c
      ? !i || !s
        ? null
        : gf.createPortal(
            et({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: Pg,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let Og = y.Fragment,
  Ff = y.createContext(null);
function _g(e, t) {
  let { target: n, ...r } = e,
    l = { ref: yt(t) };
  return A.createElement(
    Ff.Provider,
    { value: n },
    et({ ourProps: l, theirProps: r, defaultTag: Og, name: "Popover.Group" })
  );
}
let Os = y.createContext(null);
function Dg() {
  let e = y.useContext(Os),
    t = y.useRef([]),
    n = ee((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = ee((o) => {
      let i = t.current.indexOf(o);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(o);
    }),
    l = y.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    y.useMemo(
      () =>
        function ({ children: o }) {
          return A.createElement(Os.Provider, { value: l }, o);
        },
      [l]
    ),
  ];
}
let Lg = Qe(bg),
  Mg = Qe(_g),
  _s = Object.assign(Lg, { Group: Mg });
function $g(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Fg = typeof Object.is == "function" ? Object.is : $g,
  { useState: Rg, useEffect: Ig, useLayoutEffect: zg, useDebugValue: Ag } = Ur;
function Hg(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Rg({ inst: { value: r, getSnapshot: t } });
  return (
    zg(() => {
      (l.value = r), (l.getSnapshot = t), Oi(l) && o({ inst: l });
    }, [e, r, t]),
    Ig(
      () => (
        Oi(l) && o({ inst: l }),
        e(() => {
          Oi(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Ag(r),
    r
  );
}
function Oi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Fg(n, r);
  } catch {
    return !0;
  }
}
function Ug(e, t, n) {
  return t();
}
const Wg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Bg = !Wg,
  Qg = Bg ? Ug : Hg,
  Vg = "useSyncExternalStore" in Ur ? ((e) => e.useSyncExternalStore)(Ur) : Qg;
function Yg(e) {
  return Vg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Gg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((s) => s()));
    },
  };
}
function Kg() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        o = e - l;
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function Xg() {
  return Cf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = Dn();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let o = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let a = s.target.closest("a");
                    if (!a) return;
                    let { hash: c } = new URL(a.href),
                      d = e.querySelector(c);
                    d && !r(d) && (i = d);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (s) => {
                if (s.target instanceof HTMLElement)
                  if (r(s.target)) {
                    let a = s.target;
                    for (; a.parentElement && r(a.parentElement); )
                      a = a.parentElement;
                    t.style(a, "overscrollBehavior", "contain");
                  } else t.style(s.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (s) => {
                  if (s.target instanceof HTMLElement)
                    if (r(s.target)) {
                      let a = s.target;
                      for (
                        ;
                        a.parentElement &&
                        a.dataset.headlessuiPortal !== "" &&
                        !(
                          a.scrollHeight > a.clientHeight ||
                          a.scrollWidth > a.clientWidth
                        );

                      )
                        a = a.parentElement;
                      a.dataset.headlessuiPortal === "" && s.preventDefault();
                    } else s.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var s;
                let a = (s = window.scrollY) != null ? s : window.pageYOffset;
                o !== a && window.scrollTo(0, o),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function qg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Jg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let wn = Gg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Dn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Jg(n) },
      l = [Xg(), Kg(), qg()];
    l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
wn.subscribe(() => {
  let e = wn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      wn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && wn.dispatch("TEARDOWN", n);
  }
});
function Zg(e, t, n) {
  let r = Yg(wn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    Ze(() => {
      if (!(!e || !t))
        return wn.dispatch("PUSH", e, n), () => wn.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let _i = new Map(),
  Tr = new Map();
function tc(e, t = !0) {
  Ze(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let s = (i = Tr.get(r)) != null ? i : 1;
      if ((s === 1 ? Tr.delete(r) : Tr.set(r, s - 1), s !== 1)) return;
      let a = _i.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        _i.delete(r));
    }
    let o = (n = Tr.get(r)) != null ? n : 0;
    return (
      Tr.set(r, o + 1),
      o !== 0 ||
        (_i.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function ey({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = fl(l),
    i = ee(() => {
      var s, a, c;
      let d = [];
      for (let p of e)
        p !== null &&
          (p instanceof HTMLElement
            ? d.push(p)
            : "current" in p &&
              p.current instanceof HTMLElement &&
              d.push(p.current));
      if (t != null && t.current) for (let p of t.current) d.push(p);
      for (let p of (s =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (c = (a = l.current) == null ? void 0 : a.getRootNode()) == null
                ? void 0
                : c.host
            ) ||
            d.some((g) => p.contains(g)) ||
            d.push(p));
      return d;
    });
  return {
    resolveContainers: i,
    contains: ee((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : A.createElement(Ps, { features: To.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let Da = y.createContext(() => {});
Da.displayName = "StackContext";
var Ds = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Ds || {}
);
function ty() {
  return y.useContext(Da);
}
function ny({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = ty(),
    i = ee((...s) => {
      t == null || t(...s), o(...s);
    });
  return (
    Ze(() => {
      let s = l === void 0 || l === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    A.createElement(Da.Provider, { value: i }, e)
  );
}
let Rf = y.createContext(null);
function If() {
  let e = y.useContext(Rf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, If), t);
  }
  return e;
}
function ry() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = ee(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let s = i.slice(),
                      a = s.indexOf(o);
                    return a !== -1 && s.splice(a, 1), s;
                  })
              )
            ),
            l = y.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return A.createElement(Rf.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let ly = "p";
function oy(e, t) {
  let n = pr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = If(),
    i = yt(t);
  Ze(() => o.register(r), [r, o.register]);
  let s = { ref: i, ...o.props, id: r };
  return et({
    ourProps: s,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: ly,
    name: o.name || "Description",
  });
}
let iy = Qe(oy),
  sy = Object.assign(iy, {});
var ay = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(ay || {}),
  uy = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(uy || {});
let cy = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  jo = y.createContext(null);
jo.displayName = "DialogContext";
function ml(e) {
  let t = y.useContext(jo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ml), n);
  }
  return t;
}
function dy(e, t, n = () => [document.body]) {
  Zg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function fy(e, t) {
  return xe(t.type, cy, e, t);
}
let py = "div",
  my = Co.RenderStrategy | Co.Static;
function hy(e, t) {
  let n = pr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: o,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: a = !1,
      ...c
    } = e,
    [d, p] = y.useState(0),
    g = y.useRef(!1);
  s = (function () {
    return s === "dialog" || s === "alertdialog"
      ? s
      : (g.current ||
          ((g.current = !0),
          console.warn(
            `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let w = _a();
  l === void 0 && w !== null && (l = (w & ze.Open) === ze.Open);
  let x = y.useRef(null),
    S = yt(x, t),
    C = fl(x),
    h = e.hasOwnProperty("open") || w !== null,
    f = e.hasOwnProperty("onClose");
  if (!h && !f)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!h)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!f)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`
    );
  if (typeof o != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`
    );
  let m = l ? 0 : 1,
    [k, j] = y.useReducer(fy, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    T = ee(() => o(!1)),
    b = ee((V) => j({ type: 0, id: V })),
    _ = fr() ? (a ? !1 : m === 0) : !1,
    R = d > 1,
    F = y.useContext(jo) !== null,
    [ae, ke] = Dg(),
    Pe = {
      get current() {
        var V;
        return (V = k.panelRef.current) != null ? V : x.current;
      },
    },
    {
      resolveContainers: tt,
      mainTreeNodeRef: nt,
      MainTreeNode: rt,
    } = ey({ portals: ae, defaultContainers: [Pe] }),
    Fe = R ? "parent" : "leaf",
    P = w !== null ? (w & ze.Closing) === ze.Closing : !1,
    L = F || P ? !1 : _,
    M = y.useCallback(() => {
      var V, it;
      return (it = Array.from(
        (V = C == null ? void 0 : C.querySelectorAll("body > *")) != null
          ? V
          : []
      ).find((be) =>
        be.id === "headlessui-portal-root"
          ? !1
          : be.contains(nt.current) && be instanceof HTMLElement
      )) != null
        ? it
        : null;
    }, [nt]);
  tc(M, L);
  let W = R ? !0 : _,
    H = y.useCallback(() => {
      var V, it;
      return (it = Array.from(
        (V =
          C == null
            ? void 0
            : C.querySelectorAll("[data-headlessui-portal]")) != null
          ? V
          : []
      ).find((be) => be.contains(nt.current) && be instanceof HTMLElement)) !=
        null
        ? it
        : null;
    }, [nt]);
  tc(H, W),
    ug(
      tt,
      (V) => {
        V.preventDefault(), T();
      },
      !(!_ || R)
    );
  let oe = !(R || m !== 0);
  Of(C == null ? void 0 : C.defaultView, "keydown", (V) => {
    oe &&
      (V.defaultPrevented ||
        (V.key === bf.Escape &&
          (V.preventDefault(), V.stopPropagation(), T())));
  }),
    dy(C, !(P || m !== 0 || F), tt),
    y.useEffect(() => {
      if (m !== 0 || !x.current) return;
      let V = new ResizeObserver((it) => {
        for (let be of it) {
          let cn = be.target.getBoundingClientRect();
          cn.x === 0 && cn.y === 0 && cn.width === 0 && cn.height === 0 && T();
        }
      });
      return V.observe(x.current), () => V.disconnect();
    }, [m, x, T]);
  let [Re, ot] = ry(),
    Xo = y.useMemo(
      () => [{ dialogState: m, close: T, setTitleId: b }, k],
      [m, k, T, b]
    ),
    hl = y.useMemo(() => ({ open: m === 0 }), [m]),
    qo = {
      ref: S,
      id: r,
      role: s,
      "aria-modal": m === 0 ? !0 : void 0,
      "aria-labelledby": k.titleId,
      "aria-describedby": Re,
    };
  return A.createElement(
    ny,
    {
      type: "Dialog",
      enabled: m === 0,
      element: x,
      onUpdate: ee((V, it) => {
        it === "Dialog" &&
          xe(V, {
            [Ds.Add]: () => p((be) => be + 1),
            [Ds.Remove]: () => p((be) => be - 1),
          });
      }),
    },
    A.createElement(
      bs,
      { force: !0 },
      A.createElement(
        _s,
        null,
        A.createElement(
          jo.Provider,
          { value: Xo },
          A.createElement(
            _s.Group,
            { target: x },
            A.createElement(
              bs,
              { force: !1 },
              A.createElement(
                ot,
                { slot: hl, name: "Dialog.Description" },
                A.createElement(
                  Cr,
                  {
                    initialFocus: i,
                    containers: tt,
                    features: _
                      ? xe(Fe, {
                          parent: Cr.features.RestoreFocus,
                          leaf: Cr.features.All & ~Cr.features.FocusLock,
                        })
                      : Cr.features.None,
                  },
                  A.createElement(
                    ke,
                    null,
                    et({
                      ourProps: qo,
                      theirProps: c,
                      slot: hl,
                      defaultTag: py,
                      features: my,
                      visible: m === 0,
                      name: "Dialog",
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    A.createElement(rt, null)
  );
}
let gy = "div";
function yy(e, t) {
  let n = pr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = ml("Dialog.Overlay"),
    s = yt(t),
    a = ee((d) => {
      if (d.target === d.currentTarget) {
        if (gg(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    c = y.useMemo(() => ({ open: o === 0 }), [o]);
  return et({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: l,
    slot: c,
    defaultTag: gy,
    name: "Dialog.Overlay",
  });
}
let vy = "div";
function wy(e, t) {
  let n = pr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = ml("Dialog.Backdrop"),
    s = yt(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return A.createElement(
    bs,
    { force: !0 },
    A.createElement(
      _s,
      null,
      et({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: a,
        defaultTag: vy,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let xy = "div";
function Sy(e, t) {
  let n = pr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = ml("Dialog.Panel"),
    s = yt(t, i.panelRef),
    a = y.useMemo(() => ({ open: o === 0 }), [o]),
    c = ee((d) => {
      d.stopPropagation();
    });
  return et({
    ourProps: { ref: s, id: r, onClick: c },
    theirProps: l,
    slot: a,
    defaultTag: xy,
    name: "Dialog.Panel",
  });
}
let ky = "h2";
function Ey(e, t) {
  let n = pr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = ml("Dialog.Title"),
    s = yt(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return et({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: a,
    defaultTag: ky,
    name: "Dialog.Title",
  });
}
let Ny = Qe(hy),
  Cy = Qe(wy),
  Ty = Qe(Sy),
  jy = Qe(yy),
  Py = Qe(Ey),
  er = Object.assign(Ny, {
    Backdrop: Cy,
    Panel: Ty,
    Overlay: jy,
    Title: Py,
    Description: sy,
  });
function by(e = 0) {
  let [t, n] = y.useState(e),
    r = pl(),
    l = y.useCallback(
      (a) => {
        r.current && n((c) => c | a);
      },
      [t, r]
    ),
    o = y.useCallback((a) => !!(t & a), [t]),
    i = y.useCallback(
      (a) => {
        r.current && n((c) => c & ~a);
      },
      [n, r]
    ),
    s = y.useCallback(
      (a) => {
        r.current && n((c) => c ^ a);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: s };
}
function Oy(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Di(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Li(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function _y(e, t) {
  let n = Dn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((a) => {
      let [c = 0] = a
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, p) => p - d);
      return c;
    }),
    s = o + i;
  if (s !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, s),
        c.addEventListener(e, "transitionrun", (d) => {
          d.target === d.currentTarget && c.dispose();
        });
    });
    let a = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), a());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function Dy(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = Dn(),
    i = r !== void 0 ? Oy(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = xe(l, { enter: () => t.enter, leave: () => t.leave }),
    a = xe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = xe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Li(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    Di(e, ...t.base, ...s, ...c),
    o.nextFrame(() => {
      Li(e, ...t.base, ...s, ...c),
        Di(e, ...t.base, ...s, ...a),
        _y(
          e,
          () => (Li(e, ...t.base, ...s), Di(e, ...t.base, ...t.entered), i())
        );
    }),
    o.dispose
  );
}
function Ly({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = pl(),
    s = Pa(),
    a = Dt(n);
  Ze(() => {
    e && (a.current = "enter");
  }, [e]),
    Ze(() => {
      let c = Dn();
      s.add(c.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(a.current),
          c.add(
            Dy(d, r.current, a.current === "enter", () => {
              c.dispose(), o.current(a.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function Ht(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Yo = y.createContext(null);
Yo.displayName = "TransitionContext";
var My = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(My || {});
function $y() {
  let e = y.useContext(Yo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Fy() {
  let e = y.useContext(Go);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Go = y.createContext(null);
Go.displayName = "NestingContext";
function Ko(e) {
  return "children" in e
    ? Ko(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function zf(e, t) {
  let n = Dt(e),
    r = y.useRef([]),
    l = pl(),
    o = Pa(),
    i = ee((w, x = Kt.Hidden) => {
      let S = r.current.findIndex(({ el: C }) => C === w);
      S !== -1 &&
        (xe(x, {
          [Kt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Kt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        o.microTask(() => {
          var C;
          !Ko(r) && l.current && ((C = n.current) == null || C.call(n));
        }));
    }),
    s = ee((w) => {
      let x = r.current.find(({ el: S }) => S === w);
      return (
        x
          ? x.state !== "visible" && (x.state = "visible")
          : r.current.push({ el: w, state: "visible" }),
        () => i(w, Kt.Unmount)
      );
    }),
    a = y.useRef([]),
    c = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    p = ee((w, x, S) => {
      a.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([C]) => C !== w)),
        t == null ||
          t.chains.current[x].push([
            w,
            new Promise((C) => {
              a.current.push(C);
            }),
          ]),
        t == null ||
          t.chains.current[x].push([
            w,
            new Promise((C) => {
              Promise.all(d.current[x].map(([h, f]) => f)).then(() => C());
            }),
          ]),
        x === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => S(x)))
          : S(x);
    }),
    g = ee((w, x, S) => {
      Promise.all(d.current[x].splice(0).map(([C, h]) => h))
        .then(() => {
          var C;
          (C = a.current.shift()) == null || C();
        })
        .then(() => S(x));
    });
  return y.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: i,
      onStart: p,
      onStop: g,
      wait: c,
      chains: d,
    }),
    [s, i, r, p, g, d, c]
  );
}
function Ry() {}
let Iy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function nc(e) {
  var t;
  let n = {};
  for (let r of Iy) n[r] = (t = e[r]) != null ? t : Ry;
  return n;
}
function zy(e) {
  let t = y.useRef(nc(e));
  return (
    y.useEffect(() => {
      t.current = nc(e);
    }, [e]),
    t
  );
}
let Ay = "div",
  Af = Co.RenderStrategy;
function Hy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: s,
      enter: a,
      enterFrom: c,
      enterTo: d,
      entered: p,
      leave: g,
      leaveFrom: w,
      leaveTo: x,
      ...S
    } = e,
    C = y.useRef(null),
    h = yt(C, t),
    f = (n = S.unmount) == null || n ? Kt.Unmount : Kt.Hidden,
    { show: m, appear: k, initial: j } = $y(),
    [T, b] = y.useState(m ? "visible" : "hidden"),
    _ = Fy(),
    { register: R, unregister: F } = _;
  y.useEffect(() => R(C), [R, C]),
    y.useEffect(() => {
      if (f === Kt.Hidden && C.current) {
        if (m && T !== "visible") {
          b("visible");
          return;
        }
        return xe(T, { hidden: () => F(C), visible: () => R(C) });
      }
    }, [T, C, R, F, m, f]);
  let ae = Dt({
      base: Ht(S.className),
      enter: Ht(a),
      enterFrom: Ht(c),
      enterTo: Ht(d),
      entered: Ht(p),
      leave: Ht(g),
      leaveFrom: Ht(w),
      leaveTo: Ht(x),
    }),
    ke = zy({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: s }),
    Pe = fr();
  y.useEffect(() => {
    if (Pe && T === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [C, T, Pe]);
  let tt = j && !k,
    nt = k && m && j,
    rt = !Pe || tt ? "idle" : m ? "enter" : "leave",
    Fe = by(0),
    P = ee((oe) =>
      xe(oe, {
        enter: () => {
          Fe.addFlag(ze.Opening), ke.current.beforeEnter();
        },
        leave: () => {
          Fe.addFlag(ze.Closing), ke.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    L = ee((oe) =>
      xe(oe, {
        enter: () => {
          Fe.removeFlag(ze.Opening), ke.current.afterEnter();
        },
        leave: () => {
          Fe.removeFlag(ze.Closing), ke.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    M = zf(() => {
      b("hidden"), F(C);
    }, _),
    W = y.useRef(!1);
  Ly({
    immediate: nt,
    container: C,
    classes: ae,
    direction: rt,
    onStart: Dt((oe) => {
      (W.current = !0), M.onStart(C, oe, P);
    }),
    onStop: Dt((oe) => {
      (W.current = !1),
        M.onStop(C, oe, L),
        oe === "leave" && !Ko(M) && (b("hidden"), F(C));
    }),
  });
  let H = S,
    Ct = { ref: h };
  return (
    nt
      ? (H = {
          ...H,
          className: No(
            S.className,
            ...ae.current.enter,
            ...ae.current.enterFrom
          ),
        })
      : W.current &&
        ((H.className = No(
          S.className,
          (r = C.current) == null ? void 0 : r.className
        )),
        H.className === "" && delete H.className),
    A.createElement(
      Go.Provider,
      { value: M },
      A.createElement(
        mg,
        { value: xe(T, { visible: ze.Open, hidden: ze.Closed }) | Fe.flags },
        et({
          ourProps: Ct,
          theirProps: H,
          defaultTag: Ay,
          features: Af,
          visible: T === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Uy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = y.useRef(null),
    s = yt(i, t);
  fr();
  let a = _a();
  if (
    (n === void 0 && a !== null && (n = (a & ze.Open) === ze.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, d] = y.useState(n ? "visible" : "hidden"),
    p = zf(() => {
      d("hidden");
    }),
    [g, w] = y.useState(!0),
    x = y.useRef([n]);
  Ze(() => {
    g !== !1 &&
      x.current[x.current.length - 1] !== n &&
      (x.current.push(n), w(!1));
  }, [x, n]);
  let S = y.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  y.useEffect(() => {
    if (n) d("visible");
    else if (!Ko(p)) d("hidden");
    else {
      let m = i.current;
      if (!m) return;
      let k = m.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden");
    }
  }, [n, p]);
  let C = { unmount: l },
    h = ee(() => {
      var m;
      g && w(!1), (m = e.beforeEnter) == null || m.call(e);
    }),
    f = ee(() => {
      var m;
      g && w(!1), (m = e.beforeLeave) == null || m.call(e);
    });
  return A.createElement(
    Go.Provider,
    { value: p },
    A.createElement(
      Yo.Provider,
      { value: S },
      et({
        ourProps: {
          ...C,
          as: y.Fragment,
          children: A.createElement(Hf, {
            ref: s,
            ...C,
            ...o,
            beforeEnter: h,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: Af,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function Wy(e, t) {
  let n = y.useContext(Yo) !== null,
    r = _a() !== null;
  return A.createElement(
    A.Fragment,
    null,
    !n && r
      ? A.createElement(Ls, { ref: t, ...e })
      : A.createElement(Hf, { ref: t, ...e })
  );
}
let Ls = Qe(Uy),
  Hf = Qe(Hy),
  By = Qe(Wy),
  tr = Object.assign(Ls, { Child: By, Root: Ls }),
  xn = null;
const Qy = async () => {
    if (xn) return xn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (xn = await e.json()), xn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Uf = (e) => {
    if (!xn) throw new Error("Configuration not loaded");
    return `${xn.domain}${e}`;
  },
  Vy = () => xn,
  Ve = async (e, t = {}) => {
    const n = Uf(e),
      r = t.method || "GET";
    console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${n}`),
      console.log(`Method: ${r}`),
      t.body && console.log("Request Payload:", t.body);
    try {
      const l = await fetch(n, {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        o = await l.text();
      let i;
      try {
        i = JSON.parse(o);
      } catch (s) {
        throw (
          (console.error("Failed to parse response as JSON:", s),
          new Error("Invalid JSON response"))
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return i;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  Yy = {
    zh: {
      "app.title": "撥補核撥",
      "app.search.placeholder": "搜尋藥品（藥名或藥碼）",
      "app.drug.name": "藥名",
      "app.drug.code": "藥碼",
      "app.drug.notSelected": "尚未選擇藥品",
      "app.store.source": "來源庫別",
      "app.store.source.placeholder": "請選擇來源庫別",
      "app.store.destination": "目的庫別",
      "app.store.destination.placeholder": "請選擇目的庫別",
      "app.quantity": "撥補數量",
      "app.quantity.placeholder": "點擊開啟計算機",
      "app.quantity.available": "可用庫存",
      "app.button.create": "建立撥補單",
      "app.button.processing": "處理中...",
      "app.button.lightOn": "亮燈",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "filter.status": "顯示狀態",
      "filter.status.pending": "未核撥",
      "filter.status.completed": "已核撥",
      "filter.status.all": "全部",
      "table.source": "來源庫別",
      "table.storage": "庫存",
      "table.destination": "目的庫別",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.re": "修改實撥量",
      "table.createdTime": "操作時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.creator": "建表人員",
      "table.issuer": "撥發人員",
      "table.batchNumber": "批號",
      "table.expiryDate": "效期",
      "table.createTime": "建立時間",
      "table.issueTime": "撥發時間",
      "table.getTime": "簽收時間",
      "table.getStaff": "簽收人員",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始時間",
      "time.end": "結束時間",
      "login.title": "撥補核撥系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "button.export": "匯出",
      "button.bulkApprove": "全部核撥",
      "button.approve": "核撥",
      "button.cancelApprove": "取消核撥",
      "button.confirm": "確認",
      "button.cancel": "取消",
      "button.clear": "清除",
      "button.processing": "處理中...",
      "button.lightOn": "亮燈",
      "button.notify": "通知",
      "button.cancelNotify": "取消通知",
      "modal.actualQuantity": "輸入實際撥發量",
      "modal.drugName": "藥品名稱",
      "modal.drugCode": "藥碼",
      "modal.issuedQuantity": "撥發量",
      "modal.actualIssuedQuantity": "實際撥發量",
      "search.field.name": "藥名",
      "search.field.code": "藥碼",
      "search.field.source": "來源",
      "search.field.destination": "目的",
      "search.placeholder": "請輸入搜尋關鍵字",
      "status.pending": "等待過帳",
      "status.completed": "已過帳",
      "card.needsQuantity": "請輸入實撥量",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧醫療管理系統",
    },
    en: {
      "app.title": "Distribution Approval",
      "app.search.placeholder": "Search drug (name or code)",
      "app.drug.name": "Drug Name",
      "app.drug.code": "Drug Code",
      "app.drug.notSelected": "No drug selected",
      "app.store.source": "Source Store",
      "app.store.source.placeholder": "Please select source store",
      "app.store.destination": "Destination Store",
      "app.store.destination.placeholder": "Please select destination store",
      "app.quantity": "Distribution Quantity",
      "app.quantity.placeholder": "Click to open calculator",
      "app.quantity.available": "Available Stock",
      "app.button.create": "Create Distribution Order",
      "app.button.processing": "Processing...",
      "app.button.lightOn": "Light On",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Distribution order created successfully",
      "filter.status": "Status Filter",
      "filter.status.pending": "Pending",
      "filter.status.completed": "Completed",
      "filter.status.all": "All",
      "table.source": "Source Storage",
      "table.storage": "storage",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.re": "Change Actual Qty",
      "table.createdTime": "Created Time",
      "table.getTime": "Receipt Time",
      "table.getStaff": "Receipt Staff",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.creator": "Creator",
      "table.issuer": "Issuer",
      "table.batchNumber": "Batch No.",
      "table.expiryDate": "Expiry Date",
      "table.createTime": "Create Time",
      "table.issueTime": "Issue Time",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Distribution Approval System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "button.export": "Export",
      "button.bulkApprove": "Bulk Approve",
      "button.approve": "Approve",
      "button.cancelApprove": "Cancel Approve",
      "button.confirm": "Confirm",
      "button.cancel": "Cancel",
      "button.clear": "Clear",
      "button.processing": "Processing...",
      "button.lightOn": "Light On",
      "button.notify": "Notify",
      "button.cancelNotify": "Cancel Notify",
      "modal.actualQuantity": "Enter Actual Issued Quantity",
      "modal.drugName": "Drug Name",
      "modal.drugCode": "Drug Code",
      "modal.issuedQuantity": "Issued Quantity",
      "modal.actualIssuedQuantity": "Actual Issued Quantity",
      "search.field.name": "Name",
      "search.field.code": "Code",
      "search.field.source": "Source",
      "search.field.destination": "Destination",
      "search.placeholder": "Enter search keywords",
      "status.pending": "Pending",
      "status.completed": "Completed",
      "card.needsQuantity": "Please enter actual quantity",
      "footer.copyright": "Copyright ©2025 Hongsen Smart Technology",
      "platform.title": "Intelligent medical management system",
    },
  },
  Wf = y.createContext(void 0),
  Gy = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o) => Yy[t][o] || o;
    return u.jsx(Wf.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Nt = () => {
    const e = y.useContext(Wf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Ky = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = Nt(),
      [l, o] = y.useState(!1),
      i = (s, a, c, d) => {
        const p = new Date(`${s}T${a}`),
          g = new Date(`${c}T${d}`);
        n(p, g);
      };
    return u.jsxs("div", {
      className: "bg-white rounded-lg border border-gray-200 shadow-sm",
      children: [
        u.jsxs("button", {
          onClick: () => o(!l),
          className:
            "w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-lg",
          children: [
            u.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                u.jsx(U0, { size: 20, className: "text-gray-500" }),
                u.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: "時間區間 / Time Range",
                }),
              ],
            }),
            u.jsx(H0, {
              size: 20,
              className: `text-gray-500 transition-transform duration-200 ${
                l ? "rotate-180" : "rotate-0"
              }`,
            }),
          ],
        }),
        u.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ease-in-out ${
            l ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`,
          children: u.jsx("div", {
            className: "px-4 pb-4 border-t border-gray-100",
            children: u.jsxs("div", {
              className:
                "pt-4 space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
              children: [
                u.jsxs("div", {
                  className: "lg:w-[200px]",
                  children: [
                    u.jsx("label", {
                      className:
                        "block text-base font-medium text-gray-700 mb-2",
                      children: r("time.type"),
                    }),
                    u.jsx("select", {
                      defaultValue: "操作時間",
                      className:
                        "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      children: u.jsx("option", {
                        value: "操作時間",
                        children: r("time.operation"),
                      }),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    u.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        u.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700",
                          children: r("time.start"),
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            u.jsx("input", {
                              type: "date",
                              value: G(e, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  s.target.value,
                                  G(e, "HH:mm:ss"),
                                  G(t, "yyyy-MM-dd"),
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx("input", {
                              type: "time",
                              value: G(e, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  s.target.value,
                                  G(t, "yyyy-MM-dd"),
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                              step: "1",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        u.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700",
                          children: r("time.end"),
                        }),
                        u.jsxs("div", {
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            u.jsx("input", {
                              type: "date",
                              value: G(t, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  G(e, "HH:mm:ss"),
                                  s.target.value,
                                  G(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx("input", {
                              type: "time",
                              value: G(t, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  G(e, "yyyy-MM-dd"),
                                  G(e, "HH:mm:ss"),
                                  G(t, "yyyy-MM-dd"),
                                  s.target.value
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                              step: "1",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Xy = ({ value: e, onChange: t }) => {
    const { t: n } = Nt();
    return u.jsxs("div", {
      className: "space-y-2",
      children: [
        u.jsx("label", {
          className: "block text-base font-medium text-gray-700",
          children: n("filter.status"),
        }),
        u.jsxs("div", {
          className: "flex gap-6",
          children: [
            u.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                u.jsx("input", {
                  type: "radio",
                  value: "等待過帳",
                  checked: e === "等待過帳",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                u.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.pending"),
                }),
              ],
            }),
            u.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                u.jsx("input", {
                  type: "radio",
                  value: "已核撥",
                  checked: e === "已核撥",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                u.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.completed"),
                }),
              ],
            }),
            u.jsxs("label", {
              className: "inline-flex items-center",
              children: [
                u.jsx("input", {
                  type: "radio",
                  value: "全部",
                  checked: e === "全部",
                  onChange: (r) => t(r.target.value),
                  className:
                    "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                }),
                u.jsx("span", {
                  className: "ml-2 text-base text-gray-900",
                  children: n("filter.status.all"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  qy = ({ value: e, onChange: t, availableTypes: n }) =>
    u.jsxs("div", {
      className: "space-y-2",
      children: [
        u.jsx("label", {
          className: "block text-base font-medium text-gray-700",
          children: "藥品類別",
        }),
        u.jsxs("select", {
          value: e,
          onChange: (r) => t(r.target.value),
          className:
            "w-48 sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
          children: [
            u.jsx("option", { value: "全部", children: "全部" }),
            n.map((r) => u.jsx("option", { value: r, children: r }, r)),
          ],
        }),
      ],
    }),
  La = "user_session",
  Bf = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  Jy = (e) =>
    Bf(e.Permissions)
      ? (sessionStorage.setItem(La, JSON.stringify(e)), !0)
      : !1,
  Hr = () => {
    const e = sessionStorage.getItem(La);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Bf(t.Permissions)
        ? (Po(), null)
        : t;
    } catch {
      return Po(), null;
    }
  },
  Po = () => {
    sessionStorage.removeItem(La);
  },
  Zy = () => {
    const e = Hr();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Po(), !1) : !0;
  },
  ev = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return u.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  tv = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: l } = Nt();
    return u.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? u.jsx(ev, { size: "small\\", className: "mr-2" })
          : u.jsx(W0, { size: 18, className: "mr-2" }),
        l("button.export"),
      ],
    });
  },
  Il = { duration: 180, brightness: 0.9, color: "0,0,255" },
  Qf = "light_settings",
  nv = [
    { name: "red", value: "0,0,255", label: "紅色" },
    { name: "green", value: "0,255,0", label: "綠色" },
    { name: "blue", value: "255,0,0", label: "藍色" },
    { name: "yellow", value: "0,255,255", label: "黃色" },
  ],
  Vf = () => {
    try {
      const e = localStorage.getItem(Qf);
      if (e) {
        const t = JSON.parse(e);
        return {
          duration: Math.max(5, Math.min(180, t.duration || Il.duration)),
          brightness: Math.max(0, Math.min(0.9, t.brightness || Il.brightness)),
          color: t.color || Il.color,
        };
      }
    } catch (e) {
      console.error("Error loading light settings:", e);
    }
    return Il;
  },
  rv = (e) => {
    try {
      localStorage.setItem(Qf, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  lv = (e) => {
    if (e < 60) return `${e}秒`;
    const t = Math.floor(e / 60),
      n = e % 60;
    return n === 0 ? `${t}分鐘` : `${t}分${n}秒`;
  },
  ov = (e) => {
    const [t, n, r] = e.split(",");
    return `${r},${n},${t}`;
  },
  iv = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: l,
    onConfirm: o,
    onCancel: i,
    isProcessing: s = !1,
  }) =>
    u.jsx(tr, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: u.jsxs(er, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && i(),
        children: [
          u.jsx(tr.Child, {
            as: y.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: u.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          u.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: u.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: u.jsx(tr.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: u.jsxs(er.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    u.jsx(er.Title, {
                      as: "h3",
                      className: "text-xl font-medium text-gray-900",
                      children: t,
                    }),
                    u.jsx("div", {
                      className: "mt-4",
                      children: u.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: n,
                      }),
                    }),
                    u.jsxs("div", {
                      className: "mt-6 flex justify-end gap-3",
                      children: [
                        u.jsx("button", {
                          type: "button",
                          onClick: () => !s && i(),
                          disabled: s,
                          className:
                            "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: l,
                        }),
                        u.jsx("button", {
                          type: "button",
                          onClick: o,
                          disabled: s,
                          className:
                            "inline-flex justify-center rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: s ? "處理中..." : r,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    }),
  sv = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: o } = Nt(),
      [i, s] = y.useState(null),
      [a, c] = y.useState(!1),
      [d, p] = y.useState(""),
      [g, w] = y.useState(null),
      [x, S] = y.useState(!1),
      [C, h] = y.useState(null),
      [f, m] = y.useState(null),
      [k, j] = y.useState(!1),
      [T, b] = y.useState("等待過帳"),
      [_, R] = y.useState(!0),
      [F, ae] = y.useState(!1),
      [ke, Pe] = y.useState(!1),
      [tt, nt] = y.useState("name"),
      [rt, Fe] = y.useState(""),
      [P, L] = y.useState(!1),
      [M, W] = y.useState({}),
      H = y.useRef({}),
      [Ct, oe] = y.useState(!1),
      [lt, Re] = y.useState(null),
      [ot, Xo] = y.useState({}),
      [hl, qo] = y.useState([]),
      [V, it] = y.useState("全部");
    y.useEffect(
      () => () => {
        Object.values(H.current).forEach((v) => clearTimeout(v));
      },
      []
    ),
      y.useEffect(() => {
        (async () => {
          try {
            const E = await Ve("/api/med_page/get_med_cloud", {
              method: "POST",
              body: {},
            });
            if (E.Data && Array.isArray(E.Data)) {
              const D = {};
              E.Data.forEach((z) => {
                z.CODE && z.TYPE && (D[z.CODE] = z.TYPE);
              }),
                Xo(D);
            }
          } catch (E) {
            console.error("載入藥品類別失敗:", E);
          }
        })();
      }, []),
      y.useEffect(() => {
        if (Object.keys(ot).length > 0 && e.length > 0) {
          const v = new Set();
          e.forEach((E) => {
            const D = ot[E.code];
            D && v.add(D);
          }),
            qo(Array.from(v).sort());
        }
      }, [e, ot]),
      y.useEffect(() => {
        if (!a) return;
        const v = (E) => {
          if (x) return;
          const D = E.key;
          (D >= "0" && D <= "9") || D === "."
            ? (E.preventDefault(), Ln(D))
            : D === "+"
            ? (E.preventDefault(), It("+"))
            : D === "-"
            ? (E.preventDefault(), It("-"))
            : D === "*"
            ? (E.preventDefault(), It("×"))
            : D === "/"
            ? (E.preventDefault(), It("÷"))
            : D === "Enter"
            ? (E.preventDefault(), f && C ? Jo() : Fa())
            : D === "Backspace"
            ? (E.preventDefault(), d.length > 0 && p(d.slice(0, -1) || "0"))
            : D === "Escape" && (E.preventDefault(), c(!1));
        };
        return (
          window.addEventListener("keydown", v),
          () => {
            window.removeEventListener("keydown", v);
          }
        );
      }, [a, d, f, C, x]);
    const be = [
        { value: "name", label: o("search.field.name") },
        { value: "code", label: o("search.field.code") },
        { value: "source", label: o("search.field.source") },
        { value: "destination", label: o("search.field.destination") },
      ],
      cn = (v) => {
        const E = Hr();
        if (
          !E ||
          v.state !== "已過帳" ||
          v.state === "已簽收" ||
          v.issuerID !== E.ID ||
          !v.issuanceTime ||
          v.issuanceTime === "0001-01-01T00:00:00"
        )
          return !1;
        try {
          const D = new Date(v.issuanceTime),
            z = new Date(),
            J = 8 * 60,
            te = new Date(D.getTime() + J * 60 * 1e3),
            Y = new Date(z.getTime() + J * 60 * 1e3);
          return (
            te.getUTCFullYear() === Y.getUTCFullYear() &&
            te.getUTCMonth() === Y.getUTCMonth() &&
            te.getUTCDate() === Y.getUTCDate()
          );
        } catch {
          return !1;
        }
      },
      gl = (v) => v.LOT || v.lotNumber || v.lot_number || v.batch_number || "-",
      yl = (v) => {
        const E = v.VAL || v.expiryDate || v.validity_period || v.expiry;
        if (!E || E === "-") return "-";
        if (E.match(/^\d{4}\/\d{2}\/\d{2}$/)) return E;
        try {
          const D = new Date(E);
          if (!isNaN(D.getTime())) return G(D, "yyyy/MM/dd");
        } catch {}
        return E;
      },
      Yf = (v) => {
        const E = v.addedTime || v.reportGenerationTime;
        if (!E || E === "-" || E === "0001-01-01T00:00:00") return "-";
        if (E.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return E;
        try {
          const D = new Date(E);
          if (!isNaN(D.getTime())) return G(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return E;
      },
      Gf = (v) => {
        const E = v.issuanceTime;
        if (!E || E === "-" || E === "0001-01-01T00:00:00") return "-";
        if (E.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return E;
        try {
          const D = new Date(E);
          if (!isNaN(D.getTime())) return G(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return E;
      },
      Kf = (v) => {
        const E = v.signedTime;
        if (!E || E === "-" || E === "0001-01-01T00:00:00") return "-";
        if (E.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return E;
        try {
          const D = new Date(E);
          if (!isNaN(D.getTime())) return G(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return E;
      },
      Xf = (v) => {
        b(v), r(t, n);
      },
      qf = (v) => {
        v.preventDefault();
      },
      Jf = (v) => {
        v.key === "Enter" && v.preventDefault();
      },
      Zf = async () => {
        L(!0);
        try {
          const v = await fetch(
            Uf("/api/drugStotreDistribution/download_excel_by_addedTime"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ValueAry: [
                  G(t, "yyyy-MM-dd HH:mm:ss"),
                  G(n, "yyyy-MM-dd HH:mm:ss"),
                ],
              }),
            }
          );
          if (!v.ok) throw new Error("Export failed");
          const E = await v.blob(),
            D = window.URL.createObjectURL(E),
            z = document.createElement("a");
          (z.href = D),
            (z.download = `Distribution_${G(t, "yyyyMMdd")}_to_${G(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(z),
            z.click(),
            window.URL.revokeObjectURL(D),
            document.body.removeChild(z);
        } catch (v) {
          console.error("Export error:", v), w("匯出失敗，請稍後再試");
        } finally {
          L(!1);
        }
      },
      Ma = e.filter((v) => {
        let E;
        T === "全部"
          ? (E = !0)
          : T === "已核撥"
          ? (E = v.state === "已過帳" || v.state === "已簽收")
          : (E = v.state === T);
        const D = V === "全部" || ot[v.code] === V;
        let z = !0;
        if (rt) {
          const J = rt.toLowerCase();
          switch (tt) {
            case "name":
              z = v.name.toLowerCase().includes(J);
              break;
            case "code":
              z = v.code.toLowerCase().includes(J);
              break;
            case "source":
              z = v.sourceStoreType.toLowerCase().includes(J);
              break;
            case "destination":
              z = v.destinationStoreType.toLowerCase().includes(J);
              break;
          }
        }
        return E && D && z;
      }),
      vl = Ma.reduce((v, E) => {
        const D = E.code;
        return (
          v[D] || (v[D] = { orders: [], drugName: E.name, drugCode: E.code }),
          v[D].orders.push(E),
          v
        );
      }, {}),
      $a = (v) => {
        const E = v.filter(
          (z) => z.state === "等待過帳" && z.actualIssuedQuantity
        );
        if (E.length === 0) return "";
        const D = E.reduce((z, J) => {
          const te = J.code;
          return (
            z[te] || (z[te] = { name: J.name, total: 0 }),
            (z[te].total += parseInt(J.actualIssuedQuantity) || 0),
            z
          );
        }, {});
        return Object.values(D).map((z) => `${z.name} - ${z.total}`).join(`
`);
      },
      Fa = async () => {
        if (i) {
          if (!d || isNaN(Number(d)) || Number(d) < 0) {
            w("請輸入有效的數量");
            return;
          }
          S(!0), w(null);
          try {
            const v = await Ve(
              "/api/drugStotreDistribution/update_actqty_by_guid",
              { method: "POST", body: { ValueAry: [i.GUID, d] } }
            );
            if (v.Code === 200) c(!1), r(t, n, !0);
            else throw new Error(v.Result || "更新失敗");
          } catch (v) {
            w(v instanceof Error ? v.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      ep = async () => {
        const v = Hr();
        if (!v) {
          w("無法取得使用者資訊");
          return;
        }
        const E = Ma.filter(
          (J) => J.state === "等待過帳" && J.actualIssuedQuantity
        );
        if (E.length === 0) {
          w("沒有可核撥的訂單");
          return;
        }
        const z = `確認要核撥以下項目嗎？

${$a(E)}`;
        if (confirm(z)) {
          Pe(!0), w(null);
          try {
            const te = new Date().toISOString(),
              Y = new Intl.DateTimeFormat("sv-SE", {
                timeZone: "Asia/Taipei",
                hour12: !1,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
                .format(new Date())
                .replace(" ", "T");
            console.log(Y);
            const $ = {
                Data: E.map((st) => ({
                  ...st,
                  issuer: v.Name,
                  issuerID: v.ID,
                  issuanceTime: Y,
                  state: "已過帳",
                  LOT: gl(st),
                  VAL: yl(st),
                  notice: "False",
                })),
              },
              Oe = await Ve("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: $,
              });
            if (Oe.Code === 200)
              [...new Set(E.map((at) => at.code))].forEach((at) => {
                Ve("/api/medmap/light_by_code_name_type", {
                  method: "POST",
                  body: {
                    ValueAry: [
                      "ServerName=DS01",
                      "ServerType=藥庫",
                      `code=${at}`,
                      "color=0,0,0",
                      "lightness=0",
                    ],
                  },
                }).catch((Zo) => {
                  console.log("Turn off light error:", Zo);
                });
              }),
                r(t, n, !0);
            else throw new Error(Oe.Result || "批次核撥失敗");
          } catch (J) {
            w(J instanceof Error ? J.message : "系統錯誤，請稍後再試");
          } finally {
            Pe(!1);
          }
        }
      },
      tp = async (v) => {
        const E = Hr();
        if (!E) {
          w("無法取得使用者資訊");
          return;
        }
        const D = vl[v].orders.filter(
          (te) => te.state === "等待過帳" && te.actualIssuedQuantity
        );
        if (D.length === 0) {
          w("該藥品沒有可核撥的訂單");
          return;
        }
        const J = `確認要核撥以下項目嗎？

${$a(D)}`;
        if (confirm(J)) {
          ae(!0), w(null);
          try {
            const Y = new Date().toISOString(),
              $ = new Intl.DateTimeFormat("sv-SE", {
                timeZone: "Asia/Taipei",
                hour12: !1,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
                .format(new Date())
                .replace(" ", "T");
            console.log($);
            const Oe = {
                Data: D.map((at) => ({
                  ...at,
                  issuer: E.Name,
                  issuerID: E.ID,
                  issuanceTime: $,
                  state: "已過帳",
                  LOT: gl(at),
                  VAL: yl(at),
                  notice: "False",
                })),
              },
              st = await Ve("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: Oe,
              });
            if (st.Code === 200)
              Ve("/api/medmap/light_by_code_name_type", {
                method: "POST",
                body: {
                  ValueAry: [
                    "ServerName=DS01",
                    "ServerType=藥庫",
                    `code=${v}`,
                    "color=0,0,0",
                    "lightness=0",
                  ],
                },
              }).catch((at) => {
                console.log("Turn off light error:", at);
              }),
                r(t, n, !0);
            else throw new Error(st.Result || "核撥失敗");
          } catch (te) {
            w(te instanceof Error ? te.message : "系統錯誤，請稍後再試");
          } finally {
            ae(!1);
          }
        }
      },
      np = async (v) => {
        if (!cn(v)) {
          w("無法取消核撥：不符合取消條件");
          return;
        }
        Re(v), oe(!0);
      },
      rp = async () => {
        if (lt) {
          S(!0), w(null);
          try {
            const v = {
                Data: [
                  {
                    ...lt,
                    issuer: "",
                    issuerID: "",
                    issuanceTime: "0001-01-01T00:00:00",
                    state: "等待過帳",
                    LOT: gl(lt),
                    VAL: yl(lt),
                    notice: "False",
                  },
                ],
              },
              E = await Ve("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: v,
              });
            if (E.Code === 200) oe(!1), Re(null), r(t, n, !0);
            else throw new Error(E.Result || "取消核撥失敗");
          } catch (v) {
            w(v instanceof Error ? v.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      lp = async (v) => {
        const E = vl[v].orders,
          D = E.filter((Y) => Y.state === "等待過帳"),
          z = E,
          te = z.some((Y) => !Y.notice || Y.notice !== "True");
        W((Y) => ({ ...Y, [v]: !0 })),
          H.current[v] && (clearTimeout(H.current[v]), delete H.current[v]);
        try {
          const Y = Vf(),
            $ = te ? Y.color : "0,0,0",
            Oe = te ? Y.brightness.toString() : "0";
          Ve("/api/medmap/light_by_code_name_type", {
            method: "POST",
            body: {
              ValueAry: [
                "ServerName=DS01",
                "ServerType=藥庫",
                `code=${v}`,
                `color=${$}`,
                `lightness=${Oe}`,
              ],
            },
          })
            .then((Ee) => {
              const dn = Array.isArray(Ee) ? Ee : [Ee];
              if (dn.some((mr) => mr.Code !== 200)) {
                const mr = dn
                  .filter((ei) => ei.Code !== 200)
                  .map((ei) => ei.Result)
                  .filter(Boolean);
                console.log("Light API error:", mr.join(", "));
              } else
                console.log(
                  "Light API success:",
                  dn.map((mr) => mr.Result).join(", ")
                );
            })
            .catch((Ee) => {
              console.log("Light API error:", Ee);
            }),
            te &&
              (H.current[v] = setTimeout(() => {
                Ve("/api/medmap/light_by_code_name_type", {
                  method: "POST",
                  body: {
                    ValueAry: [
                      "ServerName=DS01",
                      "ServerType=藥庫",
                      `code=${v}`,
                      "color=0,0,0",
                      "lightness=0",
                    ],
                  },
                })
                  .then((Ee) => {
                    console.log("Auto turn off light:", Ee);
                  })
                  .catch((Ee) => {
                    console.log("Auto turn off light error:", Ee);
                  }),
                  delete H.current[v];
              }, Y.duration * 1e3));
          const st = te ? D : z,
            at = te ? "True" : "False",
            Zo = st.map((Ee) =>
              Ve("/api/drugStotreDistribution/update_notice", {
                method: "POST",
                body: { ValueAry: [Ee.GUID, at] },
              })
            ),
            Ra = await Promise.all(Zo);
          if (Ra.some((Ee) => Ee.Code !== 200)) {
            const Ee = Ra.filter((dn) => dn.Code !== 200)
              .map((dn) => dn.Result)
              .filter(Boolean);
            throw new Error(Ee.join(", ") || "更新通知狀態失敗");
          }
          r(t, n, !0);
        } catch (Y) {
          console.error("Notification toggle error:", Y),
            w(Y instanceof Error ? Y.message : "更新通知狀態失敗，請稍後再試");
        } finally {
          W((Y) => ({ ...Y, [v]: !1 }));
        }
      },
      op = (v) => {
        v.state === "等待過帳" &&
          (s(v),
          p(v.actualIssuedQuantity || v.issuedQuantity),
          w(null),
          c(!0),
          R(!0));
      },
      Ln = (v) => {
        _
          ? (p(v), R(!1))
          : k
          ? (p(v), j(!1))
          : C && !f
          ? (m(d), p(v))
          : p(d === "0" ? v : d + v);
      },
      It = (v) => {
        R(!1), f && Jo(), h(v), j(!1);
      },
      Jo = () => {
        if (!f || !C) return;
        const v = parseFloat(f),
          E = parseFloat(d);
        let D = 0;
        switch (C) {
          case "+":
            D = v + E;
            break;
          case "-":
            D = v - E;
            break;
          case "×":
            D = v * E;
            break;
          case "÷":
            if (E === 0) {
              w("不能除以零");
              return;
            }
            D = v / E;
            break;
        }
        p(Math.round(D).toString()), m(null), h(null), j(!0), R(!1);
      },
      ip = () => {
        p("0"), m(null), h(null), j(!1), R(!0);
      };
    return u.jsxs("div", {
      className: "space-y-6 px-4 md:px-6 lg:px-8",
      children: [
        u.jsxs("div", {
          className: "space-y-6",
          children: [
            u.jsx(Ky, { startDate: t, endDate: n, onDateChange: r }),
            u.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                u.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    u.jsx(Xy, { value: T, onChange: Xf }),
                    u.jsx(qy, { value: V, onChange: it, availableTypes: hl }),
                    u.jsxs("form", {
                      onSubmit: qf,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        u.jsx("select", {
                          value: tt,
                          onChange: (v) => nt(v.target.value),
                          className:
                            "w-48 sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: be.map((v) =>
                            u.jsx(
                              "option",
                              { value: v.value, children: v.label },
                              v.value
                            )
                          ),
                        }),
                        u.jsxs("div", {
                          className: "relative",
                          children: [
                            u.jsx("input", {
                              type: "text",
                              value: rt,
                              onChange: (v) => Fe(v.target.value),
                              onKeyDown: Jf,
                              placeholder: o("search.placeholder"),
                              className:
                                "w-48 sm:w-48 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx(Y0, {
                              className:
                                "absolute left-3 top-2.5 text-gray-400",
                              size: 20,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex justify-extends gap-3",
                  children: [
                    u.jsx(tv, { onClick: Zf, isLoading: P, disabled: l }),
                    T !== "已過帳" &&
                      u.jsx("button", {
                        onClick: ep,
                        disabled: ke || l,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: o(
                          ke ? "button.processing" : "button.bulkApprove"
                        ),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g &&
          u.jsxs("div", {
            className:
              "p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center gap-2",
            children: [
              u.jsx(Ts, { size: 20 }),
              u.jsx("span", { className: "text-sm", children: g }),
            ],
          }),
        l
          ? u.jsxs("div", {
              className: "text-center py-8",
              children: [
                u.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                u.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: o("app.orders.loading"),
                }),
              ],
            })
          : Object.keys(vl).length === 0
          ? u.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: o("app.orders.empty"),
            })
          : u.jsx("div", {
              className: "space-y-8",
              children: Object.entries(vl).map(([v, E]) => {
                const D = E.orders.some(
                    ($) => $.state === "等待過帳" && $.actualIssuedQuantity
                  ),
                  J = E.orders.some(($) => !$.notice || $.notice !== "True"),
                  te = o(J ? "button.notify" : "button.cancelNotify"),
                  Y = J
                    ? "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                    : "bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500";
                return u.jsxs(
                  "div",
                  {
                    className:
                      "w-full rounded-lg border border-gray-200 px-4 py-3 md:p-3 bg-gray-50",
                    children: [
                      u.jsxs("div", {
                        className:
                          "flex lg:justify-between lg:items-center gap-2 mb-2",
                        children: [
                          u.jsxs("div", {
                            className: "flex-1",
                            children: [
                              u.jsx("div", {
                                className:
                                  "text-xl md:text-2xl font-semibold break-words",
                                children: E.drugName,
                              }),
                              u.jsx("div", {
                                className: "text-base text-gray-900 break-all",
                                children: E.drugCode,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-start lg:items-end gap-3 lg:flex-shrink-0",
                            children: [
                              u.jsx("button", {
                                onClick: ($) => {
                                  $.stopPropagation(), lp(v);
                                },
                                disabled: M[v],
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${Y} focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: te,
                              }),
                              u.jsx("button", {
                                onClick: ($) => {
                                  $.stopPropagation(), tp(v);
                                },
                                disabled: F || !D,
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                                  D
                                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                } disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: o(
                                  F ? "button.processing" : "button.approve"
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "space-y-2",
                        children: E.orders.map(($) => {
                          const Oe = $.state === "等待過帳";
                          return u.jsx(
                            "div",
                            {
                              className: `py-2 px-4 rounded-lg ${
                                Oe
                                  ? "bg-yellow-50 border border-yellow-200"
                                  : "bg-gray-200 border border-gray-300"
                              }`,
                              children: u.jsx("div", {
                                className:
                                  "flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4",
                                children: u.jsxs("div", {
                                  className: "flex-1 space-y-2 lg:space-y-1",
                                  children: [
                                    u.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.source"),
                                                  "(",
                                                  o("table.storage"),
                                                  "):",
                                                ],
                                              }),
                                              u.jsxs("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: [
                                                  $.sourceStoreType,
                                                  "(",
                                                  $.sourceStoreInventory
                                                    ? $.sourceStoreInventory
                                                    : "-",
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.destination"),
                                                  "(",
                                                  o("table.storage"),
                                                  "):",
                                                ],
                                              }),
                                              u.jsxs("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: [
                                                  $.destinationStoreType,
                                                  "(",
                                                  $.destinationStoreInventory
                                                    ? $.destinationStoreInventory
                                                    : "-",
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.creator"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: $.reportName,
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.issuer"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: $.issuer || "-",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.batchNumber"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: gl($),
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.expiryDate"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: yl($),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.createTime"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: Yf($),
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: `text-base text-gray-900 ${
                                            Oe ? "hidden" : ""
                                          }`,
                                          children: u.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.issueTime"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: Gf($),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className: `grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16 ${
                                        Oe ? "hidden" : ""
                                      }`,
                                      children: [
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.getTime"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: Kf($),
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: u.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              u.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.getStaff"),
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: $.signedPerson || "-",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsx("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-1 gap-3 lg:gap-x-16",
                                      children: u.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: u.jsxs("div", {
                                          className:
                                            "flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3",
                                          children: [
                                            $.state === "等待過帳" &&
                                            !$.actualIssuedQuantity
                                              ? u.jsx("span", {
                                                  className:
                                                    "whitespace-nowrap text-lg lg:text-xl font-bold text-gray-400",
                                                  children:
                                                    o("card.needsQuantity"),
                                                })
                                              : u.jsx("span", {
                                                  className:
                                                    "text-lg lg:text-xl font-semibold text-gray-400",
                                                }),
                                            u.jsxs("div", {
                                              className:
                                                "flex gap-3 items-center flex-wrap",
                                              children: [
                                                u.jsx("span", {
                                                  className: `px-3 py-2 rounded-full text-base font-medium ${
                                                    $.state === "等待過帳"
                                                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                                      : $.state === "已過帳"
                                                      ? "bg-green-100 text-green-800 border border-green-200"
                                                      : $.state === "已簽收"
                                                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                                                      : "bg-gray-100 text-gray-800 border border-gray-200"
                                                  }`,
                                                  children:
                                                    $.state === "等待過帳"
                                                      ? o("status.pending")
                                                      : $.state === "已過帳"
                                                      ? o("status.completed")
                                                      : $.state,
                                                }),
                                                u.jsxs("div", {
                                                  className: `flex justify-between items-center transition-colors duration-200 px-3 py-1.5 ${
                                                    Oe
                                                      ? "w-[240px] text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                                                      : "px-3 py-2 text-xl font-bold"
                                                  }`,
                                                  onClick: () => Oe && op($),
                                                  style: {
                                                    cursor: Oe
                                                      ? "pointer"
                                                      : "default",
                                                  },
                                                  children: [
                                                    Oe ? "修改實撥量" : "",
                                                    u.jsxs("span", {
                                                      children: [
                                                        $.actualIssuedQuantity ||
                                                          "-",
                                                        " / ",
                                                        $.issuedQuantity,
                                                        " ",
                                                        $.packageUnit || "",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                cn($) &&
                                                  u.jsx("button", {
                                                    className:
                                                      "px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200",
                                                    onClick: (st) => {
                                                      st.stopPropagation(),
                                                        np($);
                                                    },
                                                    disabled: x,
                                                    children: o(
                                                      "button.cancelApprove"
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            },
                            $.GUID
                          );
                        }),
                      }),
                    ],
                  },
                  v
                );
              }),
            }),
        u.jsx(iv, {
          isOpen: Ct,
          title: "取消核撥確認",
          message: lt
            ? `確認要取消核撥「${lt.name}」嗎？

取消後可重新修改實撥量。`
            : "",
          confirmText: "確認取消",
          cancelText: "返回",
          onConfirm: rp,
          onCancel: () => {
            oe(!1), Re(null);
          },
          isProcessing: x,
        }),
        u.jsx(tr, {
          appear: !0,
          show: a,
          as: y.Fragment,
          children: u.jsxs(er, {
            as: "div",
            className: "relative z-50",
            onClose: () => !x && c(!1),
            children: [
              u.jsx(tr.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: u.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              u.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: u.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: u.jsx(tr.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: u.jsxs(er.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        u.jsx(er.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: o("modal.actualQuantity"),
                        }),
                        i &&
                          u.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.drugName"),
                                  }),
                                  u.jsx("div", {
                                    className: "mt-1",
                                    children: u.jsx("div", {
                                      className:
                                        "text-base text-gray-900 break-words",
                                      children: i.name,
                                    }),
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.drugCode"),
                                  }),
                                  u.jsx("div", {
                                    className: "mt-1",
                                    children: u.jsx("div", {
                                      className:
                                        "text-base font-mono text-gray-900 break-all",
                                      children: i.code,
                                    }),
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.issuedQuantity"),
                                  }),
                                  u.jsx("div", {
                                    className: "mt-1",
                                    children: u.jsx("div", {
                                      className: "text-base text-gray-900",
                                      children: i.issuedQuantity,
                                    }),
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.actualIssuedQuantity"),
                                  }),
                                  u.jsx("input", {
                                    type: "text",
                                    value: d,
                                    readOnly: !0,
                                    autoFocus: !0,
                                    className:
                                      "mt-1 w-full px-3 py-2 text-base font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900 cursor-default",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                  ["7", "8", "9", "÷"].map((v) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          v === "÷" ? It(v) : Ln(v),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          v === "÷"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: v,
                                      },
                                      v
                                    )
                                  ),
                                  ["4", "5", "6", "×"].map((v) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          v === "×" ? It(v) : Ln(v),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          v === "×"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: v,
                                      },
                                      v
                                    )
                                  ),
                                  ["1", "2", "3", "-"].map((v) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          v === "-" ? It(v) : Ln(v),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          v === "-"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: v,
                                      },
                                      v
                                    )
                                  ),
                                  ["0", ".", "=", "+"].map((v) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () => {
                                          v === "="
                                            ? Jo()
                                            : v === "+"
                                            ? It(v)
                                            : Ln(v);
                                        },
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          v === "="
                                            ? "bg-green-500 hover:bg-green-600 text-white"
                                            : v === "+"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: v,
                                      },
                                      v
                                    )
                                  ),
                                ],
                              }),
                              g &&
                                u.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    u.jsx(Ts, { size: 20 }),
                                    u.jsx("span", {
                                      className: "text-base",
                                      children: g,
                                    }),
                                  ],
                                }),
                              u.jsxs("div", {
                                className:
                                  "mt-6 flex flex-col sm:flex-row justify-end gap-3",
                                children: [
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: ip,
                                    disabled: x,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.clear"),
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => !x && c(!1),
                                    disabled: x,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.cancel"),
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: Fa,
                                    disabled: x,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o(
                                      x ? "button.processing" : "button.confirm"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  av = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補核撥系統",
    logo: r,
  }) => {
    const [l, o] = y.useState(""),
      [i, s] = y.useState(""),
      [a, c] = y.useState(null),
      [d, p] = y.useState(!1),
      g = async (w) => {
        w.preventDefault(), c(null), p(!0);
        try {
          const x = await Ve("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (x.Code === 200) {
            if (!Jy(x.Data)) {
              c("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else c(x.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (x) {
          console.error("Login error:", x),
            c(x instanceof Error ? x.message : "系統錯誤，請稍後再試");
        } finally {
          p(!1);
        }
      };
    return u.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: u.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            u.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          u.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          a &&
            u.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                u.jsx(Ts, { size: 20 }),
                u.jsx("span", { children: a }),
              ],
            }),
          u.jsxs("form", {
            onSubmit: g,
            className: "space-y-6",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  u.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (w) => o(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  u.jsx("input", {
                    type: "password",
                    id: "password",
                    value: i,
                    onChange: (w) => s(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              u.jsx("button", {
                type: "submit",
                disabled: d,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${
                  d
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`,
                children: d ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  uv = () => {
    const { language: e, toggleLanguage: t } = Nt();
    return u.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        u.jsx(B0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  cv = ({ title: e }) =>
    u.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  dv = () => {
    const e = Hr();
    return e
      ? u.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  fv = ({ onLogout: e }) => {
    const { t } = Nt();
    return u.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        u.jsx(V0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  pv = () => {
    const { t: e } = Nt(),
      t = () => {
        const n = Vy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return u.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        u.jsx(Q0, { size: 24 }),
        u.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  mv = ({ isOpen: e, onClose: t, settings: n, onSave: r }) => {
    const [l, o] = y.useState(n.duration),
      [i, s] = y.useState(n.brightness),
      [a, c] = y.useState(n.color);
    if (!e) return null;
    const d = () => {
      r({ duration: l, brightness: i, color: a }), t();
    };
    return u.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: u.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl max-w-md w-full",
        children: [
          u.jsxs("div", {
            className: "flex items-center justify-between p-6 border-b",
            children: [
              u.jsx("h2", {
                className: "text-xl font-semibold text-gray-900",
                children: "亮燈設定",
              }),
              u.jsx("button", {
                onClick: t,
                className:
                  "text-gray-400 hover:text-gray-600 transition-colors",
                children: u.jsx(K0, { className: "w-5 h-5" }),
              }),
            ],
          }),
          u.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: ["亮燈時間: ", lv(l)],
                  }),
                  u.jsx("input", {
                    type: "range",
                    min: "5",
                    max: "180",
                    step: "5",
                    value: l,
                    onChange: (p) => o(Number(p.target.value)),
                    className:
                      "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                  }),
                  u.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-gray-500 mt-1",
                    children: [
                      u.jsx("span", { children: "5秒" }),
                      u.jsx("span", { children: "3分鐘" }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: ["亮度: ", (i * 100).toFixed(0), "%"],
                  }),
                  u.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "0.9",
                    step: "0.1",
                    value: i,
                    onChange: (p) => s(Number(p.target.value)),
                    className:
                      "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                  }),
                  u.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-gray-500 mt-1",
                    children: [
                      u.jsx("span", { children: "0%" }),
                      u.jsx("span", { children: "90%" }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                children: [
                  u.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-3",
                    children: "顏色",
                  }),
                  u.jsx("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: nv.map((p) =>
                      u.jsxs(
                        "button",
                        {
                          onClick: () => c(p.value),
                          className: `
                    flex items-center justify-between p-3 rounded-lg border-2 transition-all
                    ${
                      a === p.value
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }
                  `,
                          children: [
                            u.jsx("span", {
                              className: "text-sm font-medium text-gray-700",
                              children: p.label,
                            }),
                            u.jsx("div", {
                              className:
                                "w-6 h-6 rounded-full border border-gray-300",
                              style: { backgroundColor: `rgb(${ov(p.value)})` },
                            }),
                          ],
                        },
                        p.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: "flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg",
            children: [
              u.jsx("button", {
                onClick: t,
                className:
                  "flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                children: "取消",
              }),
              u.jsx("button", {
                onClick: d,
                className:
                  "flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                children: "儲存",
              }),
            ],
          }),
        ],
      }),
    });
  },
  hv = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(Vf()),
      l = (o) => {
        rv(o), r(o);
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("button", {
          onClick: () => t(!0),
          className:
            "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          title: "亮燈設定",
          children: u.jsx(G0, { className: "w-5 h-5" }),
        }),
        u.jsx(mv, { isOpen: e, onClose: () => t(!1), settings: n, onSave: l }),
      ],
    });
  },
  gv = ({ onLogout: e }) => {
    const { t } = Nt();
    return u.jsx("header", {
      className: "bg-white",
      children: u.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                u.jsx(pv, {}),
                u.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    u.jsx(cv, { title: t("app.title") }),
                    u.jsx(dv, {}),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                u.jsx(hv, {}),
                u.jsx(uv, {}),
                u.jsx(fv, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  yv = ({ className: e = "" }) => {
    const { t } = Nt();
    return u.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: u.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: u.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function vv() {
  Nt();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [l, o] = y.useState(null),
    [i, s] = y.useState(!1),
    [a, c] = y.useState([]),
    [d, p] = y.useState(() => {
      const m = new Date();
      return m.setHours(0, 0, 0, 0), m;
    }),
    [g, w] = y.useState(() => {
      const m = new Date();
      return m.setHours(23, 59, 59, 999), m;
    }),
    [x, S] = y.useState(!1);
  y.useEffect(() => {
    (async () => {
      try {
        await Qy(), s(!0);
        const k = Zy();
        t(k);
      } catch (k) {
        console.error("Error during initialization:", k),
          o("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    y.useEffect(() => {
      e && i && C();
    }, [e, i]);
  const C = async (m, k, j = !1) => {
      const T = m || d,
        b = k || g,
        _ = j ? window.scrollY : 0;
      S(!0);
      try {
        const R = await Ve("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              G(T, "yyyy-MM-dd HH:mm:ss"),
              G(b, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        c(R.Data),
          o(null),
          j &&
            setTimeout(() => {
              window.scrollTo(0, _);
            }, 0);
      } catch (R) {
        console.error("Error fetching orders:", R),
          o("無法取得撥補單資料，請稍後再試"),
          c([]);
      } finally {
        S(!1);
      }
    },
    h = (m, k, j = !1) => {
      p(m), w(k), C(m, k, j);
    },
    f = () => {
      Po(), t(!1);
    };
  return n
    ? u.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: u.jsxs("div", {
          className: "text-center",
          children: [
            u.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            u.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? u.jsxs("div", {
        className: "min-h-screen flex flex-col pr-1",
        children: [
          u.jsx(gv, { onLogout: f }),
          u.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-24",
            children: u.jsx("div", {
              className: "w-full max-w-screen-xl mx-auto",
              children: u.jsx(sv, {
                orders: a,
                startDate: d,
                endDate: g,
                onDateChange: h,
                isLoading: x,
              }),
            }),
          }),
          u.jsx(yv, {}),
        ],
      })
    : u.jsx(av, { onLogin: () => t(!0) });
}
yf(document.getElementById("root")).render(
  u.jsx(y.StrictMode, { children: u.jsx(Gy, { children: u.jsx(vv, {}) }) })
);
