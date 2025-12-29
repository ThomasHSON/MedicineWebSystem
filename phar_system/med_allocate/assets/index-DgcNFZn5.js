function tp(e, t) {
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
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zu = { exports: {} },
  Oo = {},
  ec = { exports: {} },
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
  rp = Symbol.for("react.portal"),
  lp = Symbol.for("react.fragment"),
  op = Symbol.for("react.strict_mode"),
  ip = Symbol.for("react.profiler"),
  sp = Symbol.for("react.provider"),
  ap = Symbol.for("react.context"),
  up = Symbol.for("react.forward_ref"),
  cp = Symbol.for("react.suspense"),
  dp = Symbol.for("react.memo"),
  fp = Symbol.for("react.lazy"),
  Ma = Symbol.iterator;
function pp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ma && e[Ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function ar(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = ar.prototype;
function bs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var _s = (bs.prototype = new lc());
_s.constructor = bs;
nc(_s, ar.prototype);
_s.isPureReactComponent = !0;
var $a = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  Ls = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      oc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
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
    _owner: Ls.current,
  };
}
function mp(e, t) {
  return {
    $$typeof: sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ds(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sl;
}
function hp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fa = /\/+/g;
function qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hp("" + e.key)
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
          case rp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + qo(i, 0) : r),
      $a(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fa, "$&/") + "/"),
          zl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ds(l) &&
            (l = mp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), $a(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + qo(o, s);
      i += zl(o, t, n, a, l);
    }
  else if (((a = pp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + qo(o, s++)), (i += zl(o, t, n, a, l));
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
function gp(e) {
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
  yp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: Ls,
  };
function ac() {
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
    if (!Ds(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = ar;
I.Fragment = lp;
I.Profiler = ip;
I.PureComponent = bs;
I.StrictMode = op;
I.Suspense = cp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
I.act = ac;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ls.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      oc.call(t, a) &&
        !ic.hasOwnProperty(a) &&
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
      $$typeof: ap,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sp, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = sc;
I.createFactory = function (e) {
  var t = sc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: up, render: e };
};
I.isValidElement = Ds;
I.lazy = function (e) {
  return { $$typeof: fp, _payload: { _status: -1, _result: e }, _init: gp };
};
I.memo = function (e, t) {
  return { $$typeof: dp, type: e, compare: t === void 0 ? null : t };
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
I.unstable_act = ac;
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
ec.exports = I;
var y = ec.exports;
const z = np(y),
  Ur = tp({ __proto__: null, default: z }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = y,
  wp = Symbol.for("react.element"),
  xp = Symbol.for("react.fragment"),
  Sp = Object.prototype.hasOwnProperty,
  kp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: kp.current,
  };
}
Oo.Fragment = xp;
Oo.jsx = uc;
Oo.jsxs = uc;
Zu.exports = Oo;
var u = Zu.exports,
  cc = { exports: {} },
  We = {},
  dc = { exports: {} },
  fc = {};
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
      var U = (M - 1) >>> 1,
        A = P[U];
      if (0 < l(A, L)) (P[U] = L), (P[M] = A), (M = U);
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
      e: for (var U = 0, A = P.length, kt = A >>> 1; U < kt; ) {
        var le = 2 * (U + 1) - 1,
          rt = P[le],
          Re = le + 1,
          Ft = P[Re];
        if (0 > l(rt, M))
          Re < A && 0 > l(Ft, rt)
            ? ((P[U] = Ft), (P[Re] = M), (U = Re))
            : ((P[U] = rt), (P[le] = M), (U = le));
        else if (Re < A && 0 > l(Ft, M)) (P[U] = Ft), (P[Re] = M), (U = Re);
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
    v = !1,
    w = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
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
    if (((S = !1), m(P), !w))
      if (n(a) !== null) (w = !0), nt(T);
      else {
        var L = n(c);
        L !== null && Fe(k, L.startTime - P);
      }
  }
  function T(P, L) {
    (w = !1), S && ((S = !1), h(_), (_ = -1)), (v = !0);
    var M = g;
    try {
      for (
        m(L), p = n(a);
        p !== null && (!(p.expirationTime > L) || (P && !se()));

      ) {
        var U = p.callback;
        if (typeof U == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var A = U(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof A == "function" ? (p.callback = A) : p === n(a) && r(a),
            m(L);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var kt = !0;
      else {
        var le = n(c);
        le !== null && Fe(k, le.startTime - L), (kt = !1);
      }
      return kt;
    } finally {
      (p = null), (g = M), (v = !1);
    }
  }
  var C = !1,
    O = null,
    _ = -1,
    R = 5,
    $ = -1;
  function se() {
    return !(e.unstable_now() - $ < R);
  }
  function ke() {
    if (O !== null) {
      var P = e.unstable_now();
      $ = P;
      var L = !0;
      try {
        L = O(!0, P);
      } finally {
        L ? Pe() : ((C = !1), (O = null));
      }
    } else C = !1;
  }
  var Pe;
  if (typeof f == "function")
    Pe = function () {
      f(ke);
    };
  else if (typeof MessageChannel < "u") {
    var et = new MessageChannel(),
      tt = et.port2;
    (et.port1.onmessage = ke),
      (Pe = function () {
        tt.postMessage(null);
      });
  } else
    Pe = function () {
      N(ke, 0);
    };
  function nt(P) {
    (O = P), C || ((C = !0), Pe());
  }
  function Fe(P, L) {
    _ = N(function () {
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
      w || v || ((w = !0), nt(T));
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
      var U = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? U + M : U))
          : (M = U),
        P)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = M + A),
        (P = {
          id: d++,
          callback: L,
          priorityLevel: P,
          startTime: M,
          expirationTime: A,
          sortIndex: -1,
        }),
        M > U
          ? ((P.sortIndex = M),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (S ? (h(_), (_ = -1)) : (S = !0), Fe(k, M - U)))
          : ((P.sortIndex = A), t(a, P), w || v || ((w = !0), nt(T))),
        P
      );
    }),
    (e.unstable_shouldYield = se),
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
})(fc);
dc.exports = fc;
var Np = dc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = y,
  Ue = Np;
function E(e) {
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
var pc = new Set(),
  Wr = {};
function Pn(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bi = Object.prototype.hasOwnProperty,
  Tp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ra = {},
  Ia = {};
function jp(e) {
  return bi.call(Ia, e)
    ? !0
    : bi.call(Ra, e)
    ? !1
    : Tp.test(e)
    ? (Ia[e] = !0)
    : ((Ra[e] = !0), !1);
}
function Pp(e, t, n, r) {
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
function Op(e, t, n, r) {
  if (t === null || typeof t > "u" || Pp(e, t, n, r)) return !0;
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
var Ms = /[\-:]([a-z])/g;
function $s(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, $s);
    ge[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, $s);
    ge[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ms, $s);
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
function Fs(e, t, n, r) {
  var l = ge.hasOwnProperty(t) ? ge[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Op(t, n, l, r) && (n = null),
    r || l === null
      ? jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var $t = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Rs = Symbol.for("react.strict_mode"),
  _i = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  hc = Symbol.for("react.context"),
  Is = Symbol.for("react.forward_ref"),
  Li = Symbol.for("react.suspense"),
  Di = Symbol.for("react.suspense_list"),
  zs = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  gc = Symbol.for("react.offscreen"),
  za = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (za && e[za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  Jo;
function jr(e) {
  if (Jo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jo = (t && t[1]) || "";
    }
  return (
    `
` +
    Jo +
    e
  );
}
var Zo = !1;
function ei(e, t) {
  if (!e || Zo) return "";
  Zo = !0;
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
    (Zo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function bp(e) {
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
      return (e = ei(e.type, !1)), e;
    case 11:
      return (e = ei(e.type.render, !1)), e;
    case 1:
      return (e = ei(e.type, !0)), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case $n:
      return "Portal";
    case _i:
      return "Profiler";
    case Rs:
      return "StrictMode";
    case Li:
      return "Suspense";
    case Di:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case Is:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zs:
        return (
          (t = e.displayName || null), t !== null ? t : Mi(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return Mi(e(t));
        } catch {}
    }
  return null;
}
function _p(e) {
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
      return Mi(t);
    case 8:
      return t === Rs ? "StrictMode" : "Mode";
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
function nn(e) {
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
function yc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lp(e) {
  var t = yc(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = Lp(e));
}
function vc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yc(e) ? (e.checked ? "true" : "false") : e.value),
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
function $i(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Aa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && Fs(e, "checked", t, !1);
}
function Fi(e, t) {
  wc(e, t);
  var n = nn(t.value),
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
    ? Ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ri(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ha(e, t, n) {
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
function Ri(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ii(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ua(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Pr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function xc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var kl,
  kc = (function (e) {
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
var Lr = {
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
  Dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function (e) {
  Dp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lr[t] = Lr[e]);
  });
});
function Ec(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Lr.hasOwnProperty(e) && Lr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ec(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Mp = re(
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
function Ai(e, t) {
  if (t) {
    if (Mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Hi(e, t) {
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
var Ui = null;
function As(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wi = null,
  Gn = null,
  Kn = null;
function Ba(e) {
  if ((e = cl(e))) {
    if (typeof Wi != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Mo(t)), Wi(e.stateNode, e.type, t));
  }
}
function Cc(e) {
  Gn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Gn = e);
}
function Tc() {
  if (Gn) {
    var e = Gn,
      t = Kn;
    if (((Kn = Gn = null), Ba(e), t)) for (e = 0; e < t.length; e++) Ba(t[e]);
  }
}
function jc(e, t) {
  return e(t);
}
function Pc() {}
var ti = !1;
function Oc(e, t, n) {
  if (ti) return e(t, n);
  ti = !0;
  try {
    return jc(e, t, n);
  } finally {
    (ti = !1), (Gn !== null || Kn !== null) && (Pc(), Tc());
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Bi = !1;
if (_t)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Bi = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Bi = !1;
  }
function $p(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Dr = !1,
  Zl = null,
  eo = !1,
  Qi = null,
  Fp = {
    onError: function (e) {
      (Dr = !0), (Zl = e);
    },
  };
function Rp(e, t, n, r, l, o, i, s, a) {
  (Dr = !1), (Zl = null), $p.apply(Fp, arguments);
}
function Ip(e, t, n, r, l, o, i, s, a) {
  if ((Rp.apply(this, arguments), Dr)) {
    if (Dr) {
      var c = Zl;
      (Dr = !1), (Zl = null);
    } else throw Error(E(198));
    eo || ((eo = !0), (Qi = c));
  }
}
function On(e) {
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
function bc(e) {
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
function Qa(e) {
  if (On(e) !== e) throw Error(E(188));
}
function zp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = On(e)), t === null)) throw Error(E(188));
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
        if (o === n) return Qa(l), e;
        if (o === r) return Qa(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
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
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function _c(e) {
  return (e = zp(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dc = Ue.unstable_scheduleCallback,
  Va = Ue.unstable_cancelCallback,
  Ap = Ue.unstable_shouldYield,
  Hp = Ue.unstable_requestPaint,
  ie = Ue.unstable_now,
  Up = Ue.unstable_getCurrentPriorityLevel,
  Hs = Ue.unstable_ImmediatePriority,
  Mc = Ue.unstable_UserBlockingPriority,
  to = Ue.unstable_NormalPriority,
  Wp = Ue.unstable_LowPriority,
  $c = Ue.unstable_IdlePriority,
  bo = null,
  vt = null;
function Bp(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Yp,
  Qp = Math.log,
  Vp = Math.LN2;
function Yp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qp(e) / Vp) | 0)) | 0;
}
var El = 64,
  Nl = 4194304;
function Or(e) {
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
    s !== 0 ? (r = Or(s)) : ((o &= i), o !== 0 && (r = Or(o)));
  } else (i = n & ~l), i !== 0 ? (r = Or(i)) : o !== 0 && (r = Or(o));
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
      (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Gp(e, t) {
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
function Kp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ut(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = Gp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Vi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fc() {
  var e = El;
  return (El <<= 1), !(El & 4194240) && (El = 64), e;
}
function ni(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function al(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Xp(e, t) {
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
    var l = 31 - ut(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Us(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function Rc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ic,
  Ws,
  zc,
  Ac,
  Hc,
  Yi = !1,
  Cl = [],
  Gt = null,
  Kt = null,
  Xt = null,
  Vr = new Map(),
  Yr = new Map(),
  Ut = [],
  qp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ya(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
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
      t !== null && ((t = cl(t)), t !== null && Ws(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Jp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Gt = yr(Gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Kt = yr(Kt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Xt = yr(Xt, e, t, n, r, l)), !0;
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
function Uc(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = On(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bc(n)), t !== null)) {
          (e.blockedOn = t),
            Hc(e.priority, function () {
              zc(n);
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
    var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ui = r), n.target.dispatchEvent(r), (Ui = null);
    } else return (t = cl(n)), t !== null && Ws(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ga(e, t, n) {
  Hl(e) && n.delete(t);
}
function Zp() {
  (Yi = !1),
    Gt !== null && Hl(Gt) && (Gt = null),
    Kt !== null && Hl(Kt) && (Kt = null),
    Xt !== null && Hl(Xt) && (Xt = null),
    Vr.forEach(Ga),
    Yr.forEach(Ga);
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yi ||
      ((Yi = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Zp)));
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
    Gt !== null && vr(Gt, e),
      Kt !== null && vr(Kt, e),
      Xt !== null && vr(Xt, e),
      Vr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Uc(n), n.blockedOn === null && Ut.shift();
}
var Xn = $t.ReactCurrentBatchConfig,
  ro = !0;
function em(e, t, n, r) {
  var l = B,
    o = Xn.transition;
  Xn.transition = null;
  try {
    (B = 1), Bs(e, t, n, r);
  } finally {
    (B = l), (Xn.transition = o);
  }
}
function tm(e, t, n, r) {
  var l = B,
    o = Xn.transition;
  Xn.transition = null;
  try {
    (B = 4), Bs(e, t, n, r);
  } finally {
    (B = l), (Xn.transition = o);
  }
}
function Bs(e, t, n, r) {
  if (ro) {
    var l = Gi(e, t, n, r);
    if (l === null) fi(e, t, r, lo, n), Ya(e, r);
    else if (Jp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ya(e, r), t & 4 && -1 < qp.indexOf(e))) {
      for (; l !== null; ) {
        var o = cl(l);
        if (
          (o !== null && Ic(o),
          (o = Gi(e, t, n, r)),
          o === null && fi(e, t, r, lo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else fi(e, t, r, null, n);
  }
}
var lo = null;
function Gi(e, t, n, r) {
  if (((lo = null), (e = As(r)), (e = mn(e)), e !== null))
    if (((t = On(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lo = e), null;
}
function Wc(e) {
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
      switch (Up()) {
        case Hs:
          return 1;
        case Mc:
          return 4;
        case to:
        case Wp:
          return 16;
        case $c:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  Qs = null,
  Ul = null;
function Bc() {
  if (Ul) return Ul;
  var e,
    t = Qs,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
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
function Ka() {
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
        : Ka),
      (this.isPropagationStopped = Ka),
      this
    );
  }
  return (
    re(t.prototype, {
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
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vs = Be(ur),
  ul = re({}, ur, { view: 0, detail: 0 }),
  nm = Be(ul),
  ri,
  li,
  wr,
  _o = re({}, ul, {
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
    getModifierState: Ys,
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
              ? ((ri = e.screenX - wr.screenX), (li = e.screenY - wr.screenY))
              : (li = ri = 0),
            (wr = e)),
          ri);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : li;
    },
  }),
  Xa = Be(_o),
  rm = re({}, _o, { dataTransfer: 0 }),
  lm = Be(rm),
  om = re({}, ul, { relatedTarget: 0 }),
  oi = Be(om),
  im = re({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sm = Be(im),
  am = re({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  um = Be(am),
  cm = re({}, ur, { data: 0 }),
  qa = Be(cm),
  dm = {
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
  fm = {
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
  pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pm[e]) ? !!t[e] : !1;
}
function Ys() {
  return mm;
}
var hm = re({}, ul, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fm[e.keyCode] || "Unidentified"
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
    getModifierState: Ys,
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
  gm = Be(hm),
  ym = re({}, _o, {
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
  Ja = Be(ym),
  vm = re({}, ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ys,
  }),
  wm = Be(vm),
  xm = re({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sm = Be(xm),
  km = re({}, _o, {
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
  Em = Be(km),
  Nm = [9, 13, 27, 32],
  Gs = _t && "CompositionEvent" in window,
  Mr = null;
_t && "documentMode" in document && (Mr = document.documentMode);
var Cm = _t && "TextEvent" in window && !Mr,
  Qc = _t && (!Gs || (Mr && 8 < Mr && 11 >= Mr)),
  Za = " ",
  eu = !1;
function Vc(e, t) {
  switch (e) {
    case "keyup":
      return Nm.indexOf(t.keyCode) !== -1;
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
function Yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Tm(e, t) {
  switch (e) {
    case "compositionend":
      return Yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((eu = !0), Za);
    case "textInput":
      return (e = t.data), e === Za && eu ? null : e;
    default:
      return null;
  }
}
function jm(e, t) {
  if (Rn)
    return e === "compositionend" || (!Gs && Vc(e, t))
      ? ((e = Bc()), (Ul = Qs = Qt = null), (Rn = !1), e)
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
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pm = {
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
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pm[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Cc(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new Vs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  Kr = null;
function Om(e) {
  od(e, 0);
}
function Lo(e) {
  var t = An(e);
  if (vc(t)) return e;
}
function bm(e, t) {
  if (e === "change") return t;
}
var Kc = !1;
if (_t) {
  var ii;
  if (_t) {
    var si = "oninput" in document;
    if (!si) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"),
        (si = typeof nu.oninput == "function");
    }
    ii = si;
  } else ii = !1;
  Kc = ii && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  $r && ($r.detachEvent("onpropertychange", Xc), (Kr = $r = null));
}
function Xc(e) {
  if (e.propertyName === "value" && Lo(Kr)) {
    var t = [];
    Gc(t, Kr, e, As(e)), Oc(Om, t);
  }
}
function _m(e, t, n) {
  e === "focusin"
    ? (ru(), ($r = t), (Kr = n), $r.attachEvent("onpropertychange", Xc))
    : e === "focusout" && ru();
}
function Lm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Lo(Kr);
}
function Dm(e, t) {
  if (e === "click") return Lo(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return Lo(t);
}
function $m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : $m;
function Xr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bi.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, t) {
  var n = lu(e);
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
    n = lu(n);
  }
}
function qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
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
function Ks(e) {
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
function Fm(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ks(n)) {
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
          (l = ou(n, o));
        var i = ou(n, r);
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
var Rm = _t && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  Ki = null,
  Fr = null,
  Xi = !1;
function iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xi ||
    In == null ||
    In !== Jl(r) ||
    ((r = In),
    "selectionStart" in r && Ks(r)
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
      (r = oo(Ki, "onSelect")),
      0 < r.length &&
        ((t = new Vs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
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
var zn = {
    animationend: jl("Animation", "AnimationEnd"),
    animationiteration: jl("Animation", "AnimationIteration"),
    animationstart: jl("Animation", "AnimationStart"),
    transitionend: jl("Transition", "TransitionEnd"),
  },
  ai = {},
  Zc = {};
_t &&
  ((Zc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete zn.animationend.animation,
    delete zn.animationiteration.animation,
    delete zn.animationstart.animation),
  "TransitionEvent" in window || delete zn.transitionend.transition);
function Do(e) {
  if (ai[e]) return ai[e];
  if (!zn[e]) return e;
  var t = zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return (ai[e] = t[n]);
  return e;
}
var ed = Do("animationend"),
  td = Do("animationiteration"),
  nd = Do("animationstart"),
  rd = Do("transitionend"),
  ld = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  ld.set(e, t), Pn(t, [e]);
}
for (var ui = 0; ui < su.length; ui++) {
  var ci = su[ui],
    Im = ci.toLowerCase(),
    zm = ci[0].toUpperCase() + ci.slice(1);
  ln(Im, "on" + zm);
}
ln(ed, "onAnimationEnd");
ln(td, "onAnimationIteration");
ln(nd, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(rd, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Am = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ip(r, t, void 0, e), (e.currentTarget = null);
}
function od(e, t) {
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
          au(l, s, c), (o = a);
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
          au(l, s, c), (o = a);
        }
    }
  }
  if (eo) throw ((e = Qi), (eo = !1), (Qi = null), e);
}
function K(e, t) {
  var n = t[ts];
  n === void 0 && (n = t[ts] = new Set());
  var r = e + "__bubble";
  n.has(r) || (id(t, e, 2, !1), n.add(r));
}
function di(e, t, n) {
  var r = 0;
  t && (r |= 4), id(n, e, r, t);
}
var Pl = "_reactListening" + Math.random().toString(36).slice(2);
function qr(e) {
  if (!e[Pl]) {
    (e[Pl] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Am.has(n) || di(n, !1, e), di(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pl] || ((t[Pl] = !0), di("selectionchange", !1, t));
  }
}
function id(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var l = em;
      break;
    case 4:
      l = tm;
      break;
    default:
      l = Bs;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Bi ||
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
function fi(e, t, n, r, l) {
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
          if (((i = mn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Oc(function () {
    var c = o,
      d = As(n),
      p = [];
    e: {
      var g = ld.get(e);
      if (g !== void 0) {
        var v = Vs,
          w = e;
        switch (e) {
          case "keypress":
            if (Wl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = gm;
            break;
          case "focusin":
            (w = "focus"), (v = oi);
            break;
          case "focusout":
            (w = "blur"), (v = oi);
            break;
          case "beforeblur":
          case "afterblur":
            v = oi;
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
            v = Xa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = lm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = wm;
            break;
          case ed:
          case td:
          case nd:
            v = sm;
            break;
          case rd:
            v = Sm;
            break;
          case "scroll":
            v = nm;
            break;
          case "wheel":
            v = Em;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = um;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ja;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
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
            N)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((g = new v(g, w, null, n, d)), p.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ui &&
            (w = n.relatedTarget || n.fromElement) &&
            (mn(w) || w[Lt]))
        )
          break e;
        if (
          (v || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? mn(w) : null),
              w !== null &&
                ((N = On(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((S = Xa),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Ja),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (N = v == null ? g : An(v)),
            (m = w == null ? g : An(w)),
            (g = new S(k, f + "leave", v, n, d)),
            (g.target = N),
            (g.relatedTarget = m),
            (k = null),
            mn(d) === c &&
              ((S = new S(h, f + "enter", w, n, d)),
              (S.target = m),
              (S.relatedTarget = N),
              (k = S)),
            (N = k),
            v && w)
          )
            t: {
              for (S = v, h = w, f = 0, m = S; m; m = Dn(m)) f++;
              for (m = 0, k = h; k; k = Dn(k)) m++;
              for (; 0 < f - m; ) (S = Dn(S)), f--;
              for (; 0 < m - f; ) (h = Dn(h)), m--;
              for (; f--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = Dn(S)), (h = Dn(h));
              }
              S = null;
            }
          else S = null;
          v !== null && uu(p, g, v, S, !1),
            w !== null && N !== null && uu(p, N, w, S, !0);
        }
      }
      e: {
        if (
          ((g = c ? An(c) : window),
          (v = g.nodeName && g.nodeName.toLowerCase()),
          v === "select" || (v === "input" && g.type === "file"))
        )
          var T = bm;
        else if (tu(g))
          if (Kc) T = Mm;
          else {
            T = Lm;
            var C = _m;
          }
        else
          (v = g.nodeName) &&
            v.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (T = Dm);
        if (T && (T = T(e, c))) {
          Gc(p, T, n, d);
          break e;
        }
        C && C(e, g, c),
          e === "focusout" &&
            (C = g._wrapperState) &&
            C.controlled &&
            g.type === "number" &&
            Ri(g, "number", g.value);
      }
      switch (((C = c ? An(c) : window), e)) {
        case "focusin":
          (tu(C) || C.contentEditable === "true") &&
            ((In = C), (Ki = c), (Fr = null));
          break;
        case "focusout":
          Fr = Ki = In = null;
          break;
        case "mousedown":
          Xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xi = !1), iu(p, n, d);
          break;
        case "selectionchange":
          if (Rm) break;
        case "keydown":
        case "keyup":
          iu(p, n, d);
      }
      var O;
      if (Gs)
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
        Rn
          ? Vc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Qc &&
          n.locale !== "ko" &&
          (Rn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Rn && (O = Bc())
            : ((Qt = d),
              (Qs = "value" in Qt ? Qt.value : Qt.textContent),
              (Rn = !0))),
        (C = oo(c, _)),
        0 < C.length &&
          ((_ = new qa(_, e, null, n, d)),
          p.push({ event: _, listeners: C }),
          O ? (_.data = O) : ((O = Yc(n)), O !== null && (_.data = O)))),
        (O = Cm ? Tm(e, n) : jm(e, n)) &&
          ((c = oo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new qa("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = O)));
    }
    od(p, t);
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
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uu(e, t, n, r, l) {
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
var Hm = /\r\n?/g,
  Um = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hm,
      `
`
    )
    .replace(Um, "");
}
function Ol(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(E(425));
}
function io() {}
var qi = null,
  Ji = null;
function Zi(e, t) {
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
var es = typeof setTimeout == "function" ? setTimeout : void 0,
  Wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  du = typeof Promise == "function" ? Promise : void 0,
  Bm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof du < "u"
      ? function (e) {
          return du.resolve(null).then(e).catch(Qm);
        }
      : es;
function Qm(e) {
  setTimeout(function () {
    throw e;
  });
}
function pi(e, t) {
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
function qt(e) {
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
function fu(e) {
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
var cr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + cr,
  Zr = "__reactProps$" + cr,
  Lt = "__reactContainer$" + cr,
  ts = "__reactEvents$" + cr,
  Vm = "__reactListeners$" + cr,
  Ym = "__reactHandles$" + cr;
function mn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Lt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fu(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = fu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[yt] || e[Lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Mo(e) {
  return e[Zr] || null;
}
var ns = [],
  Hn = -1;
function on(e) {
  return { current: e };
}
function X(e) {
  0 > Hn || ((e.current = ns[Hn]), (ns[Hn] = null), Hn--);
}
function Y(e, t) {
  Hn++, (ns[Hn] = e.current), (e.current = t);
}
var rn = {},
  Se = on(rn),
  De = on(!1),
  kn = rn;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
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
  X(De), X(Se);
}
function pu(e, t, n) {
  if (Se.current !== rn) throw Error(E(168));
  Y(Se, t), Y(De, n);
}
function sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, _p(e) || "Unknown", l));
  return re({}, n, r);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (kn = Se.current),
    Y(Se, e),
    Y(De, De.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = sd(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(De),
      X(Se),
      Y(Se, e))
    : X(De),
    Y(De, n);
}
var Ct = null,
  $o = !1,
  mi = !1;
function ad(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Gm(e) {
  ($o = !0), ad(e);
}
function sn() {
  if (!mi && Ct !== null) {
    mi = !0;
    var e = 0,
      t = B;
    try {
      var n = Ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), ($o = !1);
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Dc(Hs, sn), l);
    } finally {
      (B = t), (mi = !1);
    }
  }
  return null;
}
var Un = [],
  Wn = 0,
  uo = null,
  co = 0,
  Ve = [],
  Ye = 0,
  En = null,
  Tt = 1,
  jt = "";
function cn(e, t) {
  (Un[Wn++] = co), (Un[Wn++] = uo), (uo = e), (co = t);
}
function ud(e, t, n) {
  (Ve[Ye++] = Tt), (Ve[Ye++] = jt), (Ve[Ye++] = En), (En = e);
  var r = Tt;
  e = jt;
  var l = 32 - ut(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ut(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Tt = (1 << (32 - ut(t) + l)) | (n << l) | r),
      (jt = o + e);
  } else (Tt = (1 << o) | (n << l) | r), (jt = e);
}
function Xs(e) {
  e.return !== null && (cn(e, 1), ud(e, 1, 0));
}
function qs(e) {
  for (; e === uo; )
    (uo = Un[--Wn]), (Un[Wn] = null), (co = Un[--Wn]), (Un[Wn] = null);
  for (; e === En; )
    (En = Ve[--Ye]),
      (Ve[Ye] = null),
      (jt = Ve[--Ye]),
      (Ve[Ye] = null),
      (Tt = Ve[--Ye]),
      (Ve[Ye] = null);
}
var He = null,
  Ae = null,
  J = !1,
  at = null;
function cd(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Ae = qt(t.firstChild)), !0)
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
          ? ((n = En !== null ? { id: Tt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
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
function rs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ls(e) {
  if (J) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (rs(e)) throw Error(E(418));
        t = qt(n.nextSibling);
        var r = He;
        t && hu(e, t)
          ? cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (He = e));
      }
    } else {
      if (rs(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (He = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function bl(e) {
  if (e !== He) return !1;
  if (!J) return gu(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zi(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (rs(e)) throw (dd(), Error(E(418)));
    for (; t; ) cd(e, t), (t = qt(t.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = He ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = Ae; e; ) e = qt(e.nextSibling);
}
function rr() {
  (Ae = He = null), (J = !1);
}
function Js(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Km = $t.ReactCurrentBatchConfig;
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
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
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function _l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function yu(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
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
    return (h = tn(h, f)), (h.index = 0), (h.sibling = null), h;
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
      ? ((f = Si(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function a(h, f, m, k) {
    var T = m.type;
    return T === Fn
      ? d(h, f, m.props.children, k, m.key)
      : f !== null &&
        (f.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === At &&
            yu(T) === f.type))
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
      ? ((f = ki(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f);
  }
  function d(h, f, m, k, T) {
    return f === null || f.tag !== 7
      ? ((f = xn(m, h.mode, k, T)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function p(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Si("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xl:
          return (
            (m = Xl(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = xr(h, null, f)),
            (m.return = h),
            m
          );
        case $n:
          return (f = ki(f, h.mode, m)), (f.return = h), f;
        case At:
          var k = f._init;
          return p(h, k(f._payload), m);
      }
      if (Pr(f) || hr(f))
        return (f = xn(f, h.mode, m, null)), (f.return = h), f;
      _l(h, f);
    }
    return null;
  }
  function g(h, f, m, k) {
    var T = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return T !== null ? null : s(h, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xl:
          return m.key === T ? a(h, f, m, k) : null;
        case $n:
          return m.key === T ? c(h, f, m, k) : null;
        case At:
          return (T = m._init), g(h, f, T(m._payload), k);
      }
      if (Pr(m) || hr(m)) return T !== null ? null : d(h, f, m, k, null);
      _l(h, m);
    }
    return null;
  }
  function v(h, f, m, k, T) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), s(f, h, "" + k, T);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case xl:
          return (h = h.get(k.key === null ? m : k.key) || null), a(f, h, k, T);
        case $n:
          return (h = h.get(k.key === null ? m : k.key) || null), c(f, h, k, T);
        case At:
          var C = k._init;
          return v(h, f, m, C(k._payload), T);
      }
      if (Pr(k) || hr(k)) return (h = h.get(m) || null), d(f, h, k, T, null);
      _l(f, k);
    }
    return null;
  }
  function w(h, f, m, k) {
    for (
      var T = null, C = null, O = f, _ = (f = 0), R = null;
      O !== null && _ < m.length;
      _++
    ) {
      O.index > _ ? ((R = O), (O = null)) : (R = O.sibling);
      var $ = g(h, O, m[_], k);
      if ($ === null) {
        O === null && (O = R);
        break;
      }
      e && O && $.alternate === null && t(h, O),
        (f = o($, f, _)),
        C === null ? (T = $) : (C.sibling = $),
        (C = $),
        (O = R);
    }
    if (_ === m.length) return n(h, O), J && cn(h, _), T;
    if (O === null) {
      for (; _ < m.length; _++)
        (O = p(h, m[_], k)),
          O !== null &&
            ((f = o(O, f, _)), C === null ? (T = O) : (C.sibling = O), (C = O));
      return J && cn(h, _), T;
    }
    for (O = r(h, O); _ < m.length; _++)
      (R = v(O, h, _, m[_], k)),
        R !== null &&
          (e && R.alternate !== null && O.delete(R.key === null ? _ : R.key),
          (f = o(R, f, _)),
          C === null ? (T = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        O.forEach(function (se) {
          return t(h, se);
        }),
      J && cn(h, _),
      T
    );
  }
  function S(h, f, m, k) {
    var T = hr(m);
    if (typeof T != "function") throw Error(E(150));
    if (((m = T.call(m)), m == null)) throw Error(E(151));
    for (
      var C = (T = null), O = f, _ = (f = 0), R = null, $ = m.next();
      O !== null && !$.done;
      _++, $ = m.next()
    ) {
      O.index > _ ? ((R = O), (O = null)) : (R = O.sibling);
      var se = g(h, O, $.value, k);
      if (se === null) {
        O === null && (O = R);
        break;
      }
      e && O && se.alternate === null && t(h, O),
        (f = o(se, f, _)),
        C === null ? (T = se) : (C.sibling = se),
        (C = se),
        (O = R);
    }
    if ($.done) return n(h, O), J && cn(h, _), T;
    if (O === null) {
      for (; !$.done; _++, $ = m.next())
        ($ = p(h, $.value, k)),
          $ !== null &&
            ((f = o($, f, _)), C === null ? (T = $) : (C.sibling = $), (C = $));
      return J && cn(h, _), T;
    }
    for (O = r(h, O); !$.done; _++, $ = m.next())
      ($ = v(O, h, _, $.value, k)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? _ : $.key),
          (f = o($, f, _)),
          C === null ? (T = $) : (C.sibling = $),
          (C = $));
    return (
      e &&
        O.forEach(function (ke) {
          return t(h, ke);
        }),
      J && cn(h, _),
      T
    );
  }
  function N(h, f, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Fn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case xl:
          e: {
            for (var T = m.key, C = f; C !== null; ) {
              if (C.key === T) {
                if (((T = m.type), T === Fn)) {
                  if (C.tag === 7) {
                    n(h, C.sibling),
                      (f = l(C, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  C.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === At &&
                    yu(T) === C.type)
                ) {
                  n(h, C.sibling),
                    (f = l(C, m.props)),
                    (f.ref = xr(h, C, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            m.type === Fn
              ? ((f = xn(m.props.children, h.mode, k, m.key)),
                (f.return = h),
                (h = f))
              : ((k = Xl(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = xr(h, f, m)),
                (k.return = h),
                (h = k));
          }
          return i(h);
        case $n:
          e: {
            for (C = m.key; f !== null; ) {
              if (f.key === C)
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
            (f = ki(m, h.mode, k)), (f.return = h), (h = f);
          }
          return i(h);
        case At:
          return (C = m._init), N(h, f, C(m._payload), k);
      }
      if (Pr(m)) return w(h, f, m, k);
      if (hr(m)) return S(h, f, m, k);
      _l(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = Si(m, h.mode, k)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return N;
}
var lr = fd(!0),
  pd = fd(!1),
  fo = on(null),
  po = null,
  Bn = null,
  Zs = null;
function ea() {
  Zs = Bn = po = null;
}
function ta(e) {
  var t = fo.current;
  X(fo), (e._currentValue = t);
}
function os(e, t, n) {
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
function qn(e, t) {
  (po = e),
    (Zs = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Zs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (po === null) throw Error(E(308));
      (Bn = e), (po.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var hn = null;
function na(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function md(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), na(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
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
var Ht = !1;
function ra(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hd(e, t) {
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
function Pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), na(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
  }
}
function vu(e, t) {
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
  Ht = !1;
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
        v = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((g = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                p = w.call(v, p, g);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (g = typeof w == "function" ? w.call(v, p, g) : w),
                g == null)
              )
                break e;
              p = re({}, p, g);
              break e;
            case 2:
              Ht = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s));
      } else
        (v = {
          eventTime: v,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (a = p)) : (d = d.next = v),
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
    (Cn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var dl = {},
  wt = on(dl),
  el = on(dl),
  tl = on(dl);
function gn(e) {
  if (e === dl) throw Error(E(174));
  return e;
}
function la(e, t) {
  switch ((Y(tl, t), Y(el, e), Y(wt, dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zi(t, e));
  }
  X(wt), Y(wt, t);
}
function or() {
  X(wt), X(el), X(tl);
}
function gd(e) {
  gn(tl.current);
  var t = gn(wt.current),
    n = zi(t, e.type);
  t !== n && (Y(el, e), Y(wt, n));
}
function oa(e) {
  el.current === e && (X(wt), X(el));
}
var te = on(0);
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
var hi = [];
function ia() {
  for (var e = 0; e < hi.length; e++)
    hi[e]._workInProgressVersionPrimary = null;
  hi.length = 0;
}
var Ql = $t.ReactCurrentDispatcher,
  gi = $t.ReactCurrentBatchConfig,
  Nn = 0,
  ne = null,
  ce = null,
  fe = null,
  go = !1,
  Rr = !1,
  nl = 0,
  Xm = 0;
function ye() {
  throw Error(E(321));
}
function sa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function aa(e, t, n, r, l, o) {
  if (
    ((Nn = o),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ql.current = e === null || e.memoizedState === null ? eh : th),
    (e = n(r, l)),
    Rr)
  ) {
    o = 0;
    do {
      if (((Rr = !1), (nl = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (fe = ce = null),
        (t.updateQueue = null),
        (Ql.current = nh),
        (e = n(r, l));
    } while (Rr);
  }
  if (
    ((Ql.current = yo),
    (t = ce !== null && ce.next !== null),
    (Nn = 0),
    (fe = ce = ne = null),
    (go = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function ua() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function gt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function qe() {
  if (ce === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = fe === null ? ne.memoizedState : fe.next;
  if (t !== null) (fe = t), (ce = e);
  else {
    if (e === null) throw Error(E(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
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
      if ((Nn & d) === d)
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
          (ne.lanes |= d),
          (Cn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = s),
      dt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ne.lanes |= o), (Cn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vi(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    dt(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function yd() {}
function vd(e, t) {
  var n = ne,
    r = qe(),
    l = t(),
    o = !dt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Le = !0)),
    (r = r.queue),
    ca(Sd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ll(9, xd.bind(null, n, r, l, t), void 0, null),
      pe === null)
    )
      throw Error(E(349));
    Nn & 30 || wd(n, t, l);
  }
  return l;
}
function wd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), kd(t) && Ed(e);
}
function Sd(e, t, n) {
  return n(function () {
    kd(t) && Ed(e);
  });
}
function kd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Ed(e) {
  var t = Dt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function xu(e) {
  var t = gt();
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
    (e = e.dispatch = Zm.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function ll(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Nd() {
  return qe().memoizedState;
}
function Vl(e, t, n, r) {
  var l = gt();
  (ne.flags |= e),
    (l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fo(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var i = ce.memoizedState;
    if (((o = i.destroy), r !== null && sa(r, i.deps))) {
      l.memoizedState = ll(t, n, o, r);
      return;
    }
  }
  (ne.flags |= e), (l.memoizedState = ll(1 | t, n, o, r));
}
function Su(e, t) {
  return Vl(8390656, 8, e, t);
}
function ca(e, t) {
  return Fo(2048, 8, e, t);
}
function Cd(e, t) {
  return Fo(4, 2, e, t);
}
function Td(e, t) {
  return Fo(4, 4, e, t);
}
function jd(e, t) {
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
function Pd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fo(4, 4, jd.bind(null, t, e), n)
  );
}
function da() {}
function Od(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bd(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _d(e, t, n) {
  return Nn & 21
    ? (dt(n, t) || ((n = Fc()), (ne.lanes |= n), (Cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = gi.transition;
  gi.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (gi.transition = r);
  }
}
function Ld() {
  return qe().memoizedState;
}
function Jm(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dd(e))
  )
    Md(t, n);
  else if (((n = md(e, t, n, r)), n !== null)) {
    var l = Ce();
    ct(n, e, r, l), $d(n, t, r);
  }
}
function Zm(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dd(e)) Md(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = s), dt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), na(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = md(e, t, l, r)),
      n !== null && ((l = Ce()), ct(n, e, r, l), $d(n, t, r));
  }
}
function Dd(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function Md(e, t) {
  Rr = go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function $d(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Us(e, n);
  }
}
var yo = {
    readContext: Xe,
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
  eh = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: Su,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Vl(4194308, 4, jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = gt();
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
        (e = e.dispatch = Jm.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xu,
    useDebugValue: da,
    useDeferredValue: function (e) {
      return (gt().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (gt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        l = gt();
      if (J) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(E(349));
        Nn & 30 || wd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Su(Sd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ll(9, xd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gt(),
        t = pe.identifierPrefix;
      if (J) {
        var n = jt,
          r = Tt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  th = {
    readContext: Xe,
    useCallback: Od,
    useContext: Xe,
    useEffect: ca,
    useImperativeHandle: Pd,
    useInsertionEffect: Cd,
    useLayoutEffect: Td,
    useMemo: bd,
    useReducer: yi,
    useRef: Nd,
    useState: function () {
      return yi(rl);
    },
    useDebugValue: da,
    useDeferredValue: function (e) {
      var t = qe();
      return _d(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = yi(rl)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: vd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  },
  nh = {
    readContext: Xe,
    useCallback: Od,
    useContext: Xe,
    useEffect: ca,
    useImperativeHandle: Pd,
    useInsertionEffect: Cd,
    useLayoutEffect: Td,
    useMemo: bd,
    useReducer: vi,
    useRef: Nd,
    useState: function () {
      return vi(rl);
    },
    useDebugValue: da,
    useDeferredValue: function (e) {
      var t = qe();
      return ce === null ? (t.memoizedState = e) : _d(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = vi(rl)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: vd,
    useId: Ld,
    unstable_isNewReconciler: !1,
  };
function it(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function is(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? On(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = en(e),
      o = Pt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (ct(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      l = en(e),
      o = Pt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (ct(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = en(e),
      l = Pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Jt(e, l, r)),
      t !== null && (ct(t, e, r, n), Bl(t, e, r));
  },
};
function ku(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(l, o)
      : !0
  );
}
function Fd(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Xe(o))
      : ((l = Me(t) ? kn : Se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, l) : rn)),
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
function Eu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function ss(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ra(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Xe(o))
    : ((o = Me(t) ? kn : Se.current), (l.context = nr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (is(e, t, o, n), (l.state = e.memoizedState)),
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
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += bp(r)), (r = r.return);
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
function wi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function as(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rh = typeof WeakMap == "function" ? WeakMap : Map;
function Rd(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wo || ((wo = !0), (vs = r)), as(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        as(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        as(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = yh.bind(null, e, t, n)), t.then(e, e));
}
function Cu(e) {
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
function Tu(e, t, n, r, l) {
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
              : ((t = Pt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lh = $t.ReactCurrentOwner,
  Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? pd(t, null, n, r) : lr(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    qn(t, l),
    (r = aa(e, t, n, r, o, l)),
    (n = ua()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (J && n && Xs(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !wa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), zd(e, t, o, r, l))
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
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xr(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return us(e, t, n, r, l);
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Vn, Ie),
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
          Y(Vn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Y(Vn, Ie),
        (Ie |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Vn, Ie),
      (Ie |= r);
  return Ne(e, t, l, n), t.child;
}
function Hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function us(e, t, n, r, l) {
  var o = Me(n) ? kn : Se.current;
  return (
    (o = nr(t, o)),
    qn(t, l),
    (n = aa(e, t, n, r, o, l)),
    (r = ua()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (J && r && Xs(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
  );
}
function Ou(e, t, n, r, l) {
  if (Me(n)) {
    var o = !0;
    ao(t);
  } else o = !1;
  if ((qn(t, l), t.stateNode === null))
    Yl(e, t), Fd(t, n, r), ss(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Xe(c))
      : ((c = Me(n) ? kn : Se.current), (c = nr(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && Eu(t, i, r, c)),
      (Ht = !1);
    var g = t.memoizedState;
    (i.state = g),
      mo(t, r, i, l),
      (a = t.memoizedState),
      s !== r || g !== a || De.current || Ht
        ? (typeof d == "function" && (is(t, n, d, r), (a = t.memoizedState)),
          (s = Ht || ku(t, n, s, r, g, a, c))
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
      hd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : it(t.type, s)),
      (i.props = c),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Xe(a))
        : ((a = Me(n) ? kn : Se.current), (a = nr(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && Eu(t, i, r, a)),
      (Ht = !1),
      (g = t.memoizedState),
      (i.state = g),
      mo(t, r, i, l);
    var w = t.memoizedState;
    s !== p || g !== w || De.current || Ht
      ? (typeof v == "function" && (is(t, n, v, r), (w = t.memoizedState)),
        (c = Ht || ku(t, n, c, r, g, w, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
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
  return cs(e, t, n, r, o, l);
}
function cs(e, t, n, r, l, o) {
  Hd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && mu(t, n, !1), Mt(e, t, o);
  (r = t.stateNode), (lh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, s, o)))
      : Ne(e, t, s, o),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    la(e, t.containerInfo);
}
function bu(e, t, n, r, l) {
  return rr(), Js(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = te.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Y(te, l & 1),
    e === null)
  )
    return (
      ls(t),
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
              (e = xn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = fs(n)),
              (t.memoizedState = ds),
              e)
            : fa(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return oh(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = tn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = tn(s, o)) : ((o = xn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? fs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ds),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
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
function fa(e, t) {
  return (
    (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ll(e, t, n, r) {
  return (
    r !== null && Js(r),
    lr(t, e.child, null, n),
    (e = fa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wi(Error(E(422)))), Ll(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ao({ mode: "visible", children: r.children }, l, 0, null)),
        (o = xn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && lr(t, e.child, null, i),
        (t.child.memoizedState = fs(i)),
        (t.memoizedState = ds),
        o);
  if (!(t.mode & 1)) return Ll(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(E(419))), (r = wi(o, r, void 0)), Ll(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Le || s)) {
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
          ((o.retryLane = l), Dt(e, l), ct(r, e, l, -1));
    }
    return va(), (r = wi(Error(E(421)))), Ll(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = qt(l.nextSibling)),
      (He = t),
      (J = !0),
      (at = null),
      e !== null &&
        ((Ve[Ye++] = Tt),
        (Ve[Ye++] = jt),
        (Ve[Ye++] = En),
        (Tt = e.id),
        (jt = e.overflow),
        (En = t)),
      (t = fa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), os(e.return, t, n);
}
function xi(e, t, n, r, l) {
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
function Bd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _u(e, n, t);
        else if (e.tag === 19) _u(e, n, t);
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
  if ((Y(te, r), !(t.mode & 1))) t.memoizedState = null;
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
          xi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ho(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        xi(t, !0, n, null, o);
        break;
      case "together":
        xi(t, !1, null, null, void 0);
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
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ih(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), rr();
      break;
    case 5:
      gd(t);
      break;
    case 1:
      Me(t.type) && ao(t);
      break;
    case 4:
      la(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Y(fo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wd(e, t, n)
          : (Y(te, te.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Y(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ad(e, t, n);
  }
  return Mt(e, t, n);
}
var Qd, ps, Vd, Yd;
Qd = function (e, t) {
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
ps = function () {};
Vd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), gn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = $i(e, l)), (r = $i(e, r)), (o = []);
        break;
      case "select":
        (l = re({}, l, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ii(e, l)), (r = Ii(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    Ai(n, r);
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
                ? (a != null && c === "onScroll" && K("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!J)
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
function sh(e, t, n) {
  var r = t.pendingProps;
  switch ((qs(t), t.tag)) {
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
        or(),
        X(De),
        X(Se),
        ia(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (Ss(at), (at = null)))),
        ps(e, t),
        ve(t),
        null
      );
    case 5:
      oa(t);
      var l = gn(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ve(t), null;
        }
        if (((e = gn(wt.current)), bl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[Zr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < br.length; l++) K(br[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Aa(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              Ua(r, o), K("invalid", r);
          }
          Ai(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ol(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ol(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Wr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Ha(r, o, !0);
              break;
            case "textarea":
              Sl(r), Wa(r);
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
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
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
            (e[yt] = t),
            (e[Zr] = r),
            Qd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Hi(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < br.length; l++) K(br[l], e);
                l = r;
                break;
              case "source":
                K("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (l = r);
                break;
              case "details":
                K("toggle", e), (l = r);
                break;
              case "input":
                Aa(e, r), (l = $i(e, r)), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = re({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                Ua(e, r), (l = Ii(e, r)), K("invalid", e);
                break;
              default:
                l = r;
            }
            Ai(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Nc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Wr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && K("scroll", e)
                      : a != null && Fs(e, o, a, i));
              }
            switch (n) {
              case "input":
                Sl(e), Ha(e, r, !1);
                break;
              case "textarea":
                Sl(e), Wa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
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
      if (e && t.stateNode != null) Yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = gn(tl.current)), gn(wt.current), bl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (X(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ae !== null && t.mode & 1 && !(t.flags & 128))
          dd(), rr(), (t.flags |= 98560), (o = !1);
        else if (((o = bl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[yt] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (o = !1);
        } else at !== null && (Ss(at), (at = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? de === 0 && (de = 3) : va())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        or(), ps(e, t), e === null && qr(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return ta(t.type._context), ve(t), null;
    case 17:
      return Me(t.type) && so(), ve(t), null;
    case 19:
      if ((X(te), (o = t.memoizedState), o === null)) return ve(t), null;
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
                return Y(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > sr &&
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
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !J)
            )
              return ve(t), null;
          } else
            2 * ie() - o.renderingStartTime > sr &&
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
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = te.current),
          Y(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ya(),
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
  throw Error(E(156, t.tag));
}
function ah(e, t) {
  switch ((qs(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && so(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        X(De),
        X(Se),
        ia(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return oa(t), null;
    case 13:
      if ((X(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(te), null;
    case 4:
      return or(), null;
    case 10:
      return ta(t.type._context), null;
    case 22:
    case 23:
      return ya(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dl = !1,
  we = !1,
  uh = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function ms(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Lu = !1;
function ch(e, t) {
  if (((qi = ro), (e = Jc()), Ks(e))) {
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
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (g = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++c === l && (s = i),
                g === o && ++d === r && (a = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ji = { focusedElem: e, selectionRange: n }, ro = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    N = w.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : it(t.type, S),
                      N
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
                throw Error(E(163));
            }
        } catch (k) {
          oe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (w = Lu), (Lu = !1), w;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ms(t, n, o);
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
function hs(e) {
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
function Gd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Gd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Zr], delete t[ts], delete t[Vm], delete t[Ym])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kd(e.return)) return null;
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
function gs(e, t, n) {
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
    for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), (e = e.sibling);
}
function ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), (e = e.sibling);
}
var me = null,
  st = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Xd(e, t, n), (n = n.sibling);
}
function Xd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Qn(n, t);
    case 6:
      var r = me,
        l = st;
      (me = null),
        Rt(e, t, n),
        (me = r),
        (st = l),
        me !== null &&
          (st
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (st
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? pi(e.parentNode, n)
              : e.nodeType === 1 && pi(e, n),
            Gr(e))
          : pi(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (l = st),
        (me = n.stateNode.containerInfo),
        (st = !0),
        Rt(e, t, n),
        (me = r),
        (st = l);
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
            i !== void 0 && (o & 2 || o & 4) && ms(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          oe(n, t, s);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Rt(e, t, n), (we = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Mu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uh()),
      t.forEach(function (r) {
        var l = wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
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
              (me = s.stateNode), (st = !1);
              break e;
            case 3:
              (me = s.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (me = s.stateNode.containerInfo), (st = !0);
              break e;
          }
          s = s.return;
        }
        if (me === null) throw Error(E(160));
        Xd(o, i, l), (me = null), (st = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        oe(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qd(t, e), (t = t.sibling);
}
function qd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), ht(e), r & 4)) {
        try {
          Ir(3, e, e.return), Io(3, e);
        } catch (S) {
          oe(e, e.return, S);
        }
        try {
          Ir(5, e, e.return);
        } catch (S) {
          oe(e, e.return, S);
        }
      }
      break;
    case 1:
      ot(t, e), ht(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        ht(e),
        r & 512 && n !== null && Qn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Br(l, "");
        } catch (S) {
          oe(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && wc(l, o),
              Hi(s, i);
            var c = Hi(s, o);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? Nc(l, p)
                : d === "dangerouslySetInnerHTML"
                ? kc(l, p)
                : d === "children"
                ? Br(l, p)
                : Fs(l, d, p, c);
            }
            switch (s) {
              case "input":
                Fi(l, o);
                break;
              case "textarea":
                xc(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Yn(l, !!o.multiple, v, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yn(l, !!o.multiple, o.defaultValue, !0)
                      : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Zr] = o;
          } catch (S) {
            oe(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ot(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          oe(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gr(t.containerInfo);
        } catch (S) {
          oe(e, e.return, S);
        }
      break;
    case 4:
      ot(t, e), ht(e);
      break;
    case 13:
      ot(t, e),
        ht(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ha = ie())),
        r & 4 && Mu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (c = we) || d), ot(t, e), (we = c)) : ot(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (b = e, d = e.child; d !== null; ) {
            for (p = b = d; b !== null; ) {
              switch (((g = b), (v = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, g, g.return);
                  break;
                case 1:
                  Qn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      oe(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Qn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Fu(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = g), (b = v)) : Fu(p);
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
                      (s.style.display = Ec("display", i)));
              } catch (S) {
                oe(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                oe(e, e.return, S);
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
      ot(t, e), ht(e), r & 4 && Mu(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Br(l, ""), (r.flags &= -33));
          var o = Du(e);
          ys(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Du(e);
          gs(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dh(e, t, n) {
  (b = e), Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var l = b,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Dl;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || we;
        s = Dl;
        var c = we;
        if (((Dl = i), (we = a) && !c))
          for (b = l; b !== null; )
            (i = b),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ru(l)
                : a !== null
                ? ((a.return = i), (b = a))
                : Ru(l);
        for (; o !== null; ) (b = o), Jd(o), (o = o.sibling);
        (b = l), (Dl = s), (we = c);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (b = o)) : $u(e);
  }
}
function $u(e) {
  for (; b !== null; ) {
    var t = b;
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
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && wu(t, o, r);
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
                wu(t, i, n);
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
              throw Error(E(163));
          }
        we || (t.flags & 512 && hs(t));
      } catch (g) {
        oe(t, t.return, g);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Fu(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Ru(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Io(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, l, a);
            }
          }
          var o = t.return;
          try {
            hs(t);
          } catch (a) {
            oe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            hs(t);
          } catch (a) {
            oe(t, i, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (b = s);
      break;
    }
    b = t.return;
  }
}
var fh = Math.ceil,
  vo = $t.ReactCurrentDispatcher,
  pa = $t.ReactCurrentOwner,
  Ke = $t.ReactCurrentBatchConfig,
  H = 0,
  pe = null,
  ae = null,
  he = 0,
  Ie = 0,
  Vn = on(0),
  de = 0,
  ol = null,
  Cn = 0,
  zo = 0,
  ma = 0,
  zr = null,
  _e = null,
  ha = 0,
  sr = 1 / 0,
  Et = null,
  wo = !1,
  vs = null,
  Zt = null,
  Ml = !1,
  Vt = null,
  xo = 0,
  Ar = 0,
  ws = null,
  Gl = -1,
  Kl = 0;
function Ce() {
  return H & 6 ? ie() : Gl !== -1 ? Gl : (Gl = ie());
}
function en(e) {
  return e.mode & 1
    ? H & 2 && he !== 0
      ? he & -he
      : Km.transition !== null
      ? (Kl === 0 && (Kl = Fc()), Kl)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
        e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (ws = null), Error(E(185)));
  al(e, n, r),
    (!(H & 2) || e !== pe) &&
      (e === pe && (!(H & 2) && (zo |= n), de === 4 && Wt(e, he)),
      $e(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((sr = ie() + 500), $o && sn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Kp(e, t);
  var r = no(e, e === pe ? he : 0);
  if (r === 0)
    n !== null && Va(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Va(n), t === 1))
      e.tag === 0 ? Gm(Iu.bind(null, e)) : ad(Iu.bind(null, e)),
        Bm(function () {
          !(H & 6) && sn();
        }),
        (n = null);
    else {
      switch (Rc(r)) {
        case 1:
          n = Hs;
          break;
        case 4:
          n = Mc;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = $c;
          break;
        default:
          n = to;
      }
      n = sf(n, Zd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zd(e, t) {
  if (((Gl = -1), (Kl = 0), H & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = no(e, e === pe ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = So(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = tf();
    (pe !== e || he !== t) && ((Et = null), (sr = ie() + 500), wn(e, t));
    do
      try {
        hh();
        break;
      } catch (s) {
        ef(e, s);
      }
    while (!0);
    ea(),
      (vo.current = o),
      (H = l),
      ae !== null ? (t = 0) : ((pe = null), (he = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Vi(e)), l !== 0 && ((r = l), (t = xs(e, l)))), t === 1)
    )
      throw ((n = ol), wn(e, 0), Wt(e, r), $e(e, ie()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ph(l) &&
          ((t = So(e, r)),
          t === 2 && ((o = Vi(e)), o !== 0 && ((r = o), (t = xs(e, o)))),
          t === 1))
      )
        throw ((n = ol), wn(e, 0), Wt(e, r), $e(e, ie()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          dn(e, _e, Et);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = ha + 500 - ie()), 10 < t))
          ) {
            if (no(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = es(dn.bind(null, e, _e, Et), t);
            break;
          }
          dn(e, _e, Et);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ut(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ie() - r),
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
                : 1960 * fh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = es(dn.bind(null, e, _e, Et), r);
            break;
          }
          dn(e, _e, Et);
          break;
        case 5:
          dn(e, _e, Et);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return $e(e, ie()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function xs(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256),
    (e = So(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Ss(t)),
    e
  );
}
function Ss(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function ph(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(o(), l)) return !1;
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
function Wt(e, t) {
  for (
    t &= ~ma,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Iu(e) {
  if (H & 6) throw Error(E(327));
  Jn();
  var t = no(e, 0);
  if (!(t & 1)) return $e(e, ie()), null;
  var n = So(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Vi(e);
    r !== 0 && ((t = r), (n = xs(e, r)));
  }
  if (n === 1) throw ((n = ol), wn(e, 0), Wt(e, t), $e(e, ie()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, _e, Et),
    $e(e, ie()),
    null
  );
}
function ga(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((sr = ie() + 500), $o && sn());
  }
}
function Tn(e) {
  Vt !== null && Vt.tag === 0 && !(H & 6) && Jn();
  var t = H;
  H |= 1;
  var n = Ke.transition,
    r = B;
  try {
    if (((Ke.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ke.transition = n), (H = t), !(H & 6) && sn();
  }
}
function ya() {
  (Ie = Vn.current), X(Vn);
}
function wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wm(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((qs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && so();
          break;
        case 3:
          or(), X(De), X(Se), ia();
          break;
        case 5:
          oa(r);
          break;
        case 4:
          or();
          break;
        case 13:
          X(te);
          break;
        case 19:
          X(te);
          break;
        case 10:
          ta(r.type._context);
          break;
        case 22:
        case 23:
          ya();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ae = e = tn(e.current, null)),
    (he = Ie = t),
    (de = 0),
    (ol = null),
    (ma = zo = Cn = 0),
    (_e = zr = null),
    hn !== null)
  ) {
    for (t = 0; t < hn.length; t++)
      if (((n = hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    hn = null;
  }
  return e;
}
function ef(e, t) {
  do {
    var n = ae;
    try {
      if ((ea(), (Ql.current = yo), go)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        go = !1;
      }
      if (
        ((Nn = 0),
        (fe = ce = ne = null),
        (Rr = !1),
        (nl = 0),
        (pa.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (ol = t), (ae = null);
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
          var v = Cu(i);
          if (v !== null) {
            (v.flags &= -257),
              Tu(v, i, s, o, t),
              v.mode & 1 && Nu(o, c, t),
              (t = v),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Nu(o, c, t), va();
              break e;
            }
            a = Error(E(426));
          }
        } else if (J && s.mode & 1) {
          var N = Cu(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Tu(N, i, s, o, t),
              Js(ir(a, s));
            break e;
          }
        }
        (o = a = ir(a, s)),
          de !== 4 && (de = 2),
          zr === null ? (zr = [o]) : zr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Rd(o, a, t);
              vu(o, h);
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
                    (Zt === null || !Zt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Id(o, s, t);
                vu(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rf(n);
    } catch (T) {
      (t = T), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function tf() {
  var e = vo.current;
  return (vo.current = yo), e === null ? yo : e;
}
function va() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    pe === null || (!(Cn & 268435455) && !(zo & 268435455)) || Wt(pe, he);
}
function So(e, t) {
  var n = H;
  H |= 2;
  var r = tf();
  (pe !== e || he !== t) && ((Et = null), wn(e, t));
  do
    try {
      mh();
      break;
    } catch (l) {
      ef(e, l);
    }
  while (!0);
  if ((ea(), (H = n), (vo.current = r), ae !== null)) throw Error(E(261));
  return (pe = null), (he = 0), de;
}
function mh() {
  for (; ae !== null; ) nf(ae);
}
function hh() {
  for (; ae !== null && !Ap(); ) nf(ae);
}
function nf(e) {
  var t = of(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? rf(e) : (ae = t),
    (pa.current = null);
}
function rf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ah(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ae = null);
        return;
      }
    } else if (((n = sh(n, t, Ie)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function dn(e, t, n) {
  var r = B,
    l = Ke.transition;
  try {
    (Ke.transition = null), (B = 1), gh(e, t, n, r);
  } finally {
    (Ke.transition = l), (B = r);
  }
  return null;
}
function gh(e, t, n, r) {
  do Jn();
  while (Vt !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Xp(e, o),
    e === pe && ((ae = pe = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      sf(to, function () {
        return Jn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ke.transition), (Ke.transition = null);
    var i = B;
    B = 1;
    var s = H;
    (H |= 4),
      (pa.current = null),
      ch(e, n),
      qd(n, e),
      Fm(Ji),
      (ro = !!qi),
      (Ji = qi = null),
      (e.current = n),
      dh(n),
      Hp(),
      (H = s),
      (B = i),
      (Ke.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Vt = e), (xo = l)),
    (o = e.pendingLanes),
    o === 0 && (Zt = null),
    Bp(n.stateNode),
    $e(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (wo) throw ((wo = !1), (e = vs), (vs = null), e);
  return (
    xo & 1 && e.tag !== 0 && Jn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ws ? Ar++ : ((Ar = 0), (ws = e))) : (Ar = 0),
    sn(),
    null
  );
}
function Jn() {
  if (Vt !== null) {
    var e = Rc(xo),
      t = Ke.transition,
      n = B;
    try {
      if (((Ke.transition = null), (B = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (xo = 0), H & 6)) throw Error(E(331));
        var l = H;
        for (H |= 4, b = e.current; b !== null; ) {
          var o = b,
            i = o.child;
          if (b.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (b = c; b !== null; ) {
                  var d = b;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (b = p);
                  else
                    for (; b !== null; ) {
                      d = b;
                      var g = d.sibling,
                        v = d.return;
                      if ((Gd(d), d === c)) {
                        b = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = v), (b = g);
                        break;
                      }
                      b = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var N = S.sibling;
                    (S.sibling = null), (S = N);
                  } while (S !== null);
                }
              }
              b = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (b = i);
          else
            e: for (; b !== null; ) {
              if (((o = b), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (b = h);
                break e;
              }
              b = o.return;
            }
        }
        var f = e.current;
        for (b = f; b !== null; ) {
          i = b;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (b = m);
          else
            e: for (i = f; b !== null; ) {
              if (((s = b), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(9, s);
                  }
                } catch (T) {
                  oe(s, s.return, T);
                }
              if (s === i) {
                b = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (b = k);
                break e;
              }
              b = s.return;
            }
        }
        if (
          ((H = l), sn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(bo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ke.transition = t);
    }
  }
  return !1;
}
function zu(e, t, n) {
  (t = ir(n, t)),
    (t = Rd(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = Ce()),
    e !== null && (al(e, 1, t), $e(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = ir(n, e)),
            (e = Id(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = Ce()),
            t !== null && (al(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (he & n) === n &&
      (de === 4 || (de === 3 && (he & 130023424) === he && 500 > ie() - ha)
        ? wn(e, 0)
        : (ma |= n)),
    $e(e, t);
}
function lf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304))
      : (t = 1));
  var n = Ce();
  (e = Dt(e, t)), e !== null && (al(e, t, n), $e(e, n));
}
function vh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lf(e, n);
}
function wh(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), lf(e, n);
}
var of;
of = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), ih(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), J && t.flags & 1048576 && ud(t, co, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yl(e, t), (e = t.pendingProps);
      var l = nr(t, Se.current);
      qn(t, n), (l = aa(null, t, r, e, l, n));
      var o = ua();
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
            ra(t),
            (l.updater = Ro),
            (t.stateNode = l),
            (l._reactInternals = t),
            ss(t, r, e, n),
            (t = cs(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && Xs(t), Ne(null, t, l, n), (t = t.child)),
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
          (l = t.tag = Sh(r)),
          (e = it(r, e)),
          l)
        ) {
          case 0:
            t = us(null, t, r, e, n);
            break e;
          case 1:
            t = Ou(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Pu(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        us(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Ou(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          hd(e, t),
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
            (l = ir(Error(E(423)), t)), (t = bu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ir(Error(E(424)), t)), (t = bu(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = qt(t.stateNode.containerInfo.firstChild),
                He = t,
                J = !0,
                at = null,
                n = pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gd(t),
        e === null && ls(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Zi(r, l) ? (i = null) : o !== null && Zi(r, o) && (t.flags |= 32),
        Hd(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ls(t), null;
    case 13:
      return Wd(e, t, n);
    case 4:
      return (
        la(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = lr(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        ju(e, t, r, l, n)
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
          Y(fo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (dt(o.value, i)) {
            if (o.children === l.children && !De.current) {
              t = Mt(e, t, n);
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
                      (a = Pt(-1, n & -n)), (a.tag = 2);
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
                      os(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  os(i, n, t),
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
        qn(t, n),
        (l = Xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = it(r, t.pendingProps)),
        (l = it(r.type, l)),
        Pu(e, t, r, l, n)
      );
    case 15:
      return zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Yl(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), ao(t)) : (e = !1),
        qn(t, n),
        Fd(t, r, l),
        ss(t, r, l, n),
        cs(null, t, r, !0, e, n)
      );
    case 19:
      return Bd(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function sf(e, t) {
  return Dc(e, t);
}
function xh(e, t, n, r) {
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
function Ge(e, t, n, r) {
  return new xh(e, t, n, r);
}
function wa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sh(e) {
  if (typeof e == "function") return wa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Is)) return 11;
    if (e === zs) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
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
  if (((r = e), typeof e == "function")) wa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Fn:
        return xn(n.children, l, o, t);
      case Rs:
        (i = 8), (l |= 8);
        break;
      case _i:
        return (
          (e = Ge(12, n, t, l | 2)), (e.elementType = _i), (e.lanes = o), e
        );
      case Li:
        return (e = Ge(13, n, t, l)), (e.elementType = Li), (e.lanes = o), e;
      case Di:
        return (e = Ge(19, n, t, l)), (e.elementType = Di), (e.lanes = o), e;
      case gc:
        return Ao(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              i = 10;
              break e;
            case hc:
              i = 9;
              break e;
            case Is:
              i = 11;
              break e;
            case zs:
              i = 14;
              break e;
            case At:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function xn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function Ao(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = gc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Si(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function ki(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kh(e, t, n, r, l) {
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
    (this.eventTimes = ni(0)),
    (this.expirationTimes = ni(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ni(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function xa(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new kh(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ge(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ra(o),
    e
  );
}
function Eh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function af(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (On(e) !== e || e.tag !== 1) throw Error(E(170));
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
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return sd(e, n, t);
  }
  return t;
}
function uf(e, t, n, r, l, o, i, s, a) {
  return (
    (e = xa(n, r, !0, e, l, o, i, s, a)),
    (e.context = af(null)),
    (n = e.current),
    (r = Ce()),
    (l = en(n)),
    (o = Pt(r, l)),
    (o.callback = t ?? null),
    Jt(n, o, l),
    (e.current.lanes = l),
    al(e, l, r),
    $e(e, r),
    e
  );
}
function Ho(e, t, n, r) {
  var l = t.current,
    o = Ce(),
    i = en(l);
  return (
    (n = af(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(l, t, i)),
    e !== null && (ct(e, l, i, o), Bl(e, l, i)),
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
function Au(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sa(e, t) {
  Au(e, t), (e = e.alternate) && Au(e, t);
}
function Nh() {
  return null;
}
var cf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ka(e) {
  this._internalRoot = e;
}
Uo.prototype.render = ka.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ho(e, t, null, null);
};
Uo.prototype.unmount = ka.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      Ho(null, e, null, null);
    }),
      (t[Lt] = null);
  }
};
function Uo(e) {
  this._internalRoot = e;
}
Uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Uc(e);
  }
};
function Ea(e) {
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
function Hu() {}
function Ch(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ko(i);
        o.call(c);
      };
    }
    var i = uf(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = i),
      (e[Lt] = i.current),
      qr(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
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
  var a = xa(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = a),
    (e[Lt] = a.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
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
  } else i = Ch(n, t, e, l, r);
  return ko(i);
}
Ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 &&
          (Us(t, n | 1), $e(t, ie()), !(H & 6) && ((sr = ie() + 500), sn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var l = Ce();
          ct(r, e, 1, l);
        }
      }),
        Sa(e, 1);
  }
};
Ws = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Ce();
      ct(t, e, 134217728, n);
    }
    Sa(e, 134217728);
  }
};
zc = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Ce();
      ct(n, e, t, r);
    }
    Sa(e, t);
  }
};
Ac = function () {
  return B;
};
Hc = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            if (!l) throw Error(E(90));
            vc(r), Fi(r, l);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
jc = ga;
Pc = Tn;
var Th = { usingClientEntryPoint: !1, Events: [cl, An, Mo, Cc, Tc, ga] },
  kr = {
    findFiberByHostInstance: mn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  jh = {
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
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _c(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || Nh,
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
      (bo = $l.inject(jh)), (vt = $l);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ea(t)) throw Error(E(200));
  return Eh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Ea(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = cf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = xa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Lt] = t.current),
    qr(e.nodeType === 8 ? e.parentNode : e),
    new ka(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = _c(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return Tn(e);
};
We.hydrate = function (e, t, n) {
  if (!Wo(t)) throw Error(E(200));
  return Bo(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Ea(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = cf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = uf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Lt] = t.current),
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
  if (!Wo(t)) throw Error(E(200));
  return Bo(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Wo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Lt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = ga;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Bo(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function df() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(df);
    } catch (e) {
      console.error(e);
    }
}
df(), (cc.exports = We);
var ff = cc.exports,
  pf,
  Uu = ff;
(pf = Uu.createRoot), Uu.hydrateRoot;
function ft(e) {
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
function jn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const mf = 6048e5,
  Ph = 864e5;
let Oh = {};
function Qo() {
  return Oh;
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
    l = ft(e),
    o = l.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l;
}
function Eo(e) {
  return il(e, { weekStartsOn: 1 });
}
function hf(e) {
  const t = ft(e),
    n = t.getFullYear(),
    r = jn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = Eo(r),
    o = jn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = Eo(o);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Wu(e) {
  const t = ft(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Bu(e) {
  const t = ft(e),
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
function bh(e, t) {
  const n = Wu(e),
    r = Wu(t),
    l = +n - Bu(n),
    o = +r - Bu(r);
  return Math.round((l - o) / Ph);
}
function _h(e) {
  const t = hf(e),
    n = jn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Eo(n);
}
function Lh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Dh(e) {
  if (!Lh(e) && typeof e != "number") return !1;
  const t = ft(e);
  return !isNaN(Number(t));
}
function Mh(e) {
  const t = ft(e),
    n = jn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const $h = {
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
  Fh = (e, t, n) => {
    let r;
    const l = $h[e];
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
function Ei(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Rh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Ih = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  zh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Ah = {
    date: Ei({ formats: Rh, defaultWidth: "full" }),
    time: Ei({ formats: Ih, defaultWidth: "full" }),
    dateTime: Ei({ formats: zh, defaultWidth: "full" }),
  },
  Hh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Uh = (e, t, n, r) => Hh[e];
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
const Wh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Bh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Qh = {
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
  Vh = {
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
  Yh = {
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
  Gh = {
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
  Kh = (e, t) => {
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
  Xh = {
    ordinalNumber: Kh,
    era: Er({ values: Wh, defaultWidth: "wide" }),
    quarter: Er({
      values: Bh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Er({ values: Qh, defaultWidth: "wide" }),
    day: Er({ values: Vh, defaultWidth: "wide" }),
    dayPeriod: Er({
      values: Yh,
      defaultWidth: "wide",
      formattingValues: Gh,
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
      a = Array.isArray(s) ? Jh(s, (p) => p.test(i)) : qh(s, (p) => p.test(i));
    let c;
    (c = e.valueCallback ? e.valueCallback(a) : a),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function qh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Jh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Zh(e) {
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
const e0 = /^(\d+)(th|st|nd|rd)?/i,
  t0 = /\d+/i,
  n0 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  r0 = { any: [/^b/i, /^(a|c)/i] },
  l0 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  o0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  i0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  s0 = {
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
  a0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  u0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  c0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  d0 = {
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
  f0 = {
    ordinalNumber: Zh({
      matchPattern: e0,
      parsePattern: t0,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Nr({
      matchPatterns: n0,
      defaultMatchWidth: "wide",
      parsePatterns: r0,
      defaultParseWidth: "any",
    }),
    quarter: Nr({
      matchPatterns: l0,
      defaultMatchWidth: "wide",
      parsePatterns: o0,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Nr({
      matchPatterns: i0,
      defaultMatchWidth: "wide",
      parsePatterns: s0,
      defaultParseWidth: "any",
    }),
    day: Nr({
      matchPatterns: a0,
      defaultMatchWidth: "wide",
      parsePatterns: u0,
      defaultParseWidth: "any",
    }),
    dayPeriod: Nr({
      matchPatterns: c0,
      defaultMatchWidth: "any",
      parsePatterns: d0,
      defaultParseWidth: "any",
    }),
  },
  p0 = {
    code: "en-US",
    formatDistance: Fh,
    formatLong: Ah,
    formatRelative: Uh,
    localize: Xh,
    match: f0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function m0(e) {
  const t = ft(e);
  return bh(t, Mh(t)) + 1;
}
function h0(e) {
  const t = ft(e),
    n = +Eo(t) - +_h(t);
  return Math.round(n / mf) + 1;
}
function gf(e, t) {
  var d, p, g, v;
  const n = ft(e),
    r = n.getFullYear(),
    l = Qo(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((v = (g = l.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    i = jn(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = il(i, t),
    a = jn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const c = il(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function g0(e, t) {
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
    l = gf(e, t),
    o = jn(e, 0);
  return o.setFullYear(l, 0, r), o.setHours(0, 0, 0, 0), il(o, t);
}
function y0(e, t) {
  const n = ft(e),
    r = +il(n, t) - +g0(n, t);
  return Math.round(r / mf) + 1;
}
function W(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const It = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return W(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : W(n + 1, 2);
    },
    d(e, t) {
      return W(e.getDate(), t.length);
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
      return W(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return W(e.getHours(), t.length);
    },
    m(e, t) {
      return W(e.getMinutes(), t.length);
    },
    s(e, t) {
      return W(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return W(l, t.length);
    },
  },
  Mn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Qu = {
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
      return It.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = gf(e, r),
        o = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = o % 100;
        return W(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : W(o, t.length);
    },
    R: function (e, t) {
      const n = hf(e);
      return W(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return W(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return W(r, 2);
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
          return W(r, 2);
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
          return It.M(e, t);
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
          return W(r + 1, 2);
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
      const l = y0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : W(l, t.length);
    },
    I: function (e, t, n) {
      const r = h0(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : W(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : It.d(e, t);
    },
    D: function (e, t, n) {
      const r = m0(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : W(r, t.length);
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
          return W(o, 2);
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
          return W(o, t.length);
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
          return W(l, t.length);
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
          ? (l = Mn.noon)
          : r === 0
          ? (l = Mn.midnight)
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
          ? (l = Mn.evening)
          : r >= 12
          ? (l = Mn.afternoon)
          : r >= 4
          ? (l = Mn.morning)
          : (l = Mn.night),
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
      return It.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : It.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : W(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : W(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : It.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : It.s(e, t);
    },
    S: function (e, t) {
      return It.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Yu(r);
        case "XXXX":
        case "XX":
          return fn(r);
        case "XXXXX":
        case "XXX":
        default:
          return fn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Yu(r);
        case "xxxx":
        case "xx":
          return fn(r);
        case "xxxxx":
        case "xxx":
        default:
          return fn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Vu(r, ":");
        case "OOOO":
        default:
          return "GMT" + fn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Vu(r, ":");
        case "zzzz":
        default:
          return "GMT" + fn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return W(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return W(r, t.length);
    },
  };
function Vu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(l) : n + String(l) + t + W(o, 2);
}
function Yu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + W(Math.abs(e) / 60, 2) : fn(e, t);
}
function fn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = W(Math.trunc(r / 60), 2),
    o = W(r % 60, 2);
  return n + l + t + o;
}
const Gu = (e, t) => {
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
  yf = (e, t) => {
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
  v0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Gu(e, t);
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
    return o.replace("{{date}}", Gu(r, t)).replace("{{time}}", yf(l, t));
  },
  w0 = { p: yf, P: v0 },
  x0 = /^D+$/,
  S0 = /^Y+$/,
  k0 = ["D", "DD", "YY", "YYYY"];
function E0(e) {
  return x0.test(e);
}
function N0(e) {
  return S0.test(e);
}
function C0(e, t, n) {
  const r = T0(e, t, n);
  if ((console.warn(r), k0.includes(e))) throw new RangeError(r);
}
function T0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const j0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  P0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  O0 = /^'([^]*?)'?$/,
  b0 = /''/g,
  _0 = /[a-zA-Z]/;
function V(e, t, n) {
  var d, p, g, v;
  const r = Qo(),
    l = r.locale ?? p0,
    o =
      r.firstWeekContainsDate ??
      ((p = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((v = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    s = ft(e);
  if (!Dh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(P0)
    .map((w) => {
      const S = w[0];
      if (S === "p" || S === "P") {
        const N = w0[S];
        return N(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(j0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const S = w[0];
      if (S === "'") return { isToken: !1, value: L0(w) };
      if (Qu[S]) return { isToken: !0, value: w };
      if (S.match(_0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`"
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (a = l.localize.preprocessor(s, a));
  const c = { firstWeekContainsDate: o, weekStartsOn: i, locale: l };
  return a
    .map((w) => {
      if (!w.isToken) return w.value;
      const S = w.value;
      (N0(S) || E0(S)) && C0(S, t, String(e));
      const N = Qu[S[0]];
      return N(s, S, l.localize, c);
    })
    .join("");
}
function L0(e) {
  const t = e.match(O0);
  return t ? t[1].replace(b0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var D0 = {
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
 */ const M0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  xt = (e, t) => {
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
            ...D0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${M0(e)}`, s].join(" "),
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
 */ const ks = xt("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $0 = xt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F0 = xt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R0 = xt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I0 = xt("Globe", [
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
 */ const z0 = xt("Layers", [
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
 */ const A0 = xt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H0 = xt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U0 = xt("Settings", [
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
 */ const W0 = xt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var B0 = Object.defineProperty,
  Q0 = (e, t, n) =>
    t in e
      ? B0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ni = (e, t, n) => (Q0(e, typeof t != "symbol" ? t + "" : t, n), n);
let V0 = class {
    constructor() {
      Ni(this, "current", this.detect()),
        Ni(this, "handoffState", "pending"),
        Ni(this, "currentId", 0);
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
  Ot = new V0(),
  Je = (e, t) => {
    Ot.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function bt(e) {
  let t = y.useRef(e);
  return (
    Je(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let Z = function (e) {
  let t = bt(e);
  return z.useCallback((...n) => t.current(...n), [t]);
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
function bn() {
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
        let r = bn();
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
function Na() {
  let [e] = y.useState(bn);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function Y0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ur
    ? ((t) => t.useSyncExternalStore)(Ur)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function dr() {
  let e = Y0(),
    [t, n] = y.useState(Ot.isHandoffComplete);
  return (
    t && Ot.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => Ot.handoff(), []),
    e ? !1 : t
  );
}
var Ku;
let fr =
  (Ku = z.useId) != null
    ? Ku
    : function () {
        let e = dr(),
          [t, n] = z.useState(e ? () => Ot.nextId() : null);
        return (
          Je(() => {
            t === null && n(Ot.nextId());
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
function vf(e) {
  return Ot.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Es = [
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
var pn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(pn || {}),
  wf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(wf || {}),
  G0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(G0 || {});
function K0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Es)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var xf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(xf || {});
function X0(e, t = 0) {
  var n;
  return e === ((n = vf(e)) == null ? void 0 : n.body)
    ? !1
    : xe(t, {
        0() {
          return e.matches(Es);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Es)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var q0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(q0 || {});
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
function Sn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let J0 = ["textarea", "input"].join(",");
function Z0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, J0)) !=
    null
    ? n
    : !1;
}
function eg(e, t = (n) => n) {
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
    i = Array.isArray(e) ? (n ? eg(e) : e) : K0(e);
  l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))),
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
    let v = a + d;
    if (t & 16) v = (v + p) % p;
    else {
      if (v < 0) return 3;
      if (v >= p) return 1;
    }
    (g = i[v]), g == null || g.focus(c), (d += s);
  } while (g !== o.activeElement);
  return t & 6 && Z0(g) && g.select(), 2;
}
function Sf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function tg() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ng() {
  return Sf() || tg();
}
function Fl(e, t, n) {
  let r = bt(t);
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
function kf(e, t, n) {
  let r = bt(t);
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
function rg(e, t, n = !0) {
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
    return !X0(a, xf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
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
        ng() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    Fl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    kf(
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
  return y.useMemo(() => vf(...e), [...e]);
}
let Ef = Symbol();
function lg(e, t = !0) {
  return Object.assign(e, { [Ef]: t });
}
function pt(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ef])) ? void 0 : n;
}
function Ca(e, t) {
  let n = y.useRef([]),
    r = Z(e);
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
  Yt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Yt || {});
function Ze({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? og;
  let a = Nf(t, e);
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
    } = Ci(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let p = {};
  if (t) {
    let g = !1,
      v = [];
    for (let [w, S] of Object.entries(t))
      typeof S == "boolean" && (g = !0), S === !0 && v.push(w);
    g && (p["data-headlessui-state"] = v.join(" "));
  }
  if (o === y.Fragment && Object.keys(Xu(a)).length > 0) {
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
      v =
        typeof (g == null ? void 0 : g.className) == "function"
          ? (...S) => No(g == null ? void 0 : g.className(...S), a.className)
          : No(g == null ? void 0 : g.className, a.className),
      w = v ? { className: v } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        Nf(d.props, Xu(Ci(a, ["ref"]))),
        p,
        c,
        { ref: l(d.ref, c.ref) },
        w
      )
    );
  }
  return y.createElement(
    o,
    Object.assign(
      {},
      Ci(a, ["ref"]),
      o !== y.Fragment && c,
      o !== y.Fragment && p
    ),
    d
  );
}
function og(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function Nf(...e) {
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
function Xu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ci(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let ig = "div";
var To = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(To || {});
function sg(e, t) {
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
  return Ze({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: ig,
    name: "Hidden",
  });
}
let Ns = Qe(sg),
  Ta = y.createContext(null);
Ta.displayName = "OpenClosedContext";
var ze = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ze || {});
function ja() {
  return y.useContext(Ta);
}
function ag({ value: e, children: t }) {
  return z.createElement(Ta.Provider, { value: e }, t);
}
function ug(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Bt = [];
ug(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Bt[0] !== t.target &&
      (Bt.unshift(t.target),
      (Bt = Bt.filter((n) => n != null && n.isConnected)),
      Bt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function cg(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && dg(n) ? !1 : r;
}
function dg(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Cf = ((e) => (
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
))(Cf || {});
function Tf(e, t, n, r) {
  let l = bt(n);
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
    Je(
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
function jf(e) {
  let t = Z(e),
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
function fg() {
  let e = y.useRef(0);
  return (
    kf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Pf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let pg = "div";
var Of = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Of || {});
function mg(e, t) {
  let n = y.useRef(null),
    r = pt(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...s } = e;
  dr() || (i = 1);
  let a = fl(n);
  yg({ ownerDocument: a }, !!(i & 16));
  let c = vg({ ownerDocument: a, container: n, initialFocus: l }, !!(i & 2));
  wg(
    { ownerDocument: a, container: n, containers: o, previousActiveElement: c },
    !!(i & 8)
  );
  let d = fg(),
    p = Z((S) => {
      let N = n.current;
      N &&
        ((h) => h())(() => {
          xe(d.current, {
            [_r.Forwards]: () => {
              ql(N, pn.First, { skipElements: [S.relatedTarget] });
            },
            [_r.Backwards]: () => {
              ql(N, pn.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    g = Na(),
    v = y.useRef(!1),
    w = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((v.current = !0),
          g.requestAnimationFrame(() => {
            v.current = !1;
          }));
      },
      onBlur(S) {
        let N = Pf(o);
        n.current instanceof HTMLElement && N.add(n.current);
        let h = S.relatedTarget;
        h instanceof HTMLElement &&
          h.dataset.headlessuiFocusGuard !== "true" &&
          (bf(N, h) ||
            (v.current
              ? ql(
                  n.current,
                  xe(d.current, {
                    [_r.Forwards]: () => pn.Next,
                    [_r.Backwards]: () => pn.Previous,
                  }) | pn.WrapAround,
                  { relativeTo: S.target }
                )
              : S.target instanceof HTMLElement && Sn(S.target)));
      },
    };
  return z.createElement(
    z.Fragment,
    null,
    !!(i & 4) &&
      z.createElement(Ns, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: To.Focusable,
      }),
    Ze({ ourProps: w, theirProps: s, defaultTag: pg, name: "FocusTrap" }),
    !!(i & 4) &&
      z.createElement(Ns, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: To.Focusable,
      })
  );
}
let hg = Qe(mg),
  Cr = Object.assign(hg, { features: Of });
function gg(e = !0) {
  let t = y.useRef(Bt.slice());
  return (
    Ca(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Vo(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Bt.slice());
      },
      [e, Bt, t]
    ),
    Z(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function yg({ ownerDocument: e }, t) {
  let n = gg(t);
  Ca(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Sn(n()));
  }, [t]),
    jf(() => {
      t && Sn(n());
    });
}
function vg({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = y.useRef(null),
    o = pl();
  return (
    Ca(() => {
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
            ? Sn(n.current)
            : ql(i, pn.First) === wf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function wg(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let o = pl();
  Tf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let s = Pf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? bf(s, c)
          ? ((r.current = c), Sn(c))
          : (i.preventDefault(), i.stopPropagation(), Sn(a))
        : Sn(r.current);
    },
    !0
  );
}
function bf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let _f = y.createContext(!1);
function xg() {
  return y.useContext(_f);
}
function Cs(e) {
  return z.createElement(_f.Provider, { value: e.force }, e.children);
}
function Sg(e) {
  let t = xg(),
    n = y.useContext(Lf),
    r = fl(e),
    [l, o] = y.useState(() => {
      if ((!t && n !== null) || Ot.isServer) return null;
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
let kg = y.Fragment;
function Eg(e, t) {
  let n = e,
    r = y.useRef(null),
    l = pt(
      lg((d) => {
        r.current = d;
      }),
      t
    ),
    o = fl(r),
    i = Sg(r),
    [s] = y.useState(() => {
      var d;
      return Ot.isServer
        ? null
        : (d = o == null ? void 0 : o.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(Ts),
    c = dr();
  return (
    Je(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    Je(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    jf(() => {
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
        : ff.createPortal(
            Ze({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: kg,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let Ng = y.Fragment,
  Lf = y.createContext(null);
function Cg(e, t) {
  let { target: n, ...r } = e,
    l = { ref: pt(t) };
  return z.createElement(
    Lf.Provider,
    { value: n },
    Ze({ ourProps: l, theirProps: r, defaultTag: Ng, name: "Popover.Group" })
  );
}
let Ts = y.createContext(null);
function Tg() {
  let e = y.useContext(Ts),
    t = y.useRef([]),
    n = Z((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = Z((o) => {
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
          return z.createElement(Ts.Provider, { value: l }, o);
        },
      [l]
    ),
  ];
}
let jg = Qe(Eg),
  Pg = Qe(Cg),
  js = Object.assign(jg, { Group: Pg });
function Og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const bg = typeof Object.is == "function" ? Object.is : Og,
  { useState: _g, useEffect: Lg, useLayoutEffect: Dg, useDebugValue: Mg } = Ur;
function $g(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = _g({ inst: { value: r, getSnapshot: t } });
  return (
    Dg(() => {
      (l.value = r), (l.getSnapshot = t), Ti(l) && o({ inst: l });
    }, [e, r, t]),
    Lg(
      () => (
        Ti(l) && o({ inst: l }),
        e(() => {
          Ti(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    Mg(r),
    r
  );
}
function Ti(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !bg(n, r);
  } catch {
    return !0;
  }
}
function Fg(e, t, n) {
  return t();
}
const Rg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ig = !Rg,
  zg = Ig ? Fg : $g,
  Ag = "useSyncExternalStore" in Ur ? ((e) => e.useSyncExternalStore)(Ur) : zg;
function Hg(e) {
  return Ag(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Ug(e, t) {
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
function Wg() {
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
function Bg() {
  return Sf()
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
              let s = bn();
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
function Qg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Vg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let yn = Ug(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: bn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Vg(n) },
      l = [Bg(), Wg(), Qg()];
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
yn.subscribe(() => {
  let e = yn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      yn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && yn.dispatch("TEARDOWN", n);
  }
});
function Yg(e, t, n) {
  let r = Hg(yn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    Je(() => {
      if (!(!e || !t))
        return yn.dispatch("PUSH", e, n), () => yn.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let ji = new Map(),
  Tr = new Map();
function qu(e, t = !0) {
  Je(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let s = (i = Tr.get(r)) != null ? i : 1;
      if ((s === 1 ? Tr.delete(r) : Tr.set(r, s - 1), s !== 1)) return;
      let a = ji.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        ji.delete(r));
    }
    let o = (n = Tr.get(r)) != null ? n : 0;
    return (
      Tr.set(r, o + 1),
      o !== 0 ||
        (ji.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function Gg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = fl(l),
    i = Z(() => {
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
    contains: Z((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : z.createElement(Ns, { features: To.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let Pa = y.createContext(() => {});
Pa.displayName = "StackContext";
var Ps = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Ps || {}
);
function Kg() {
  return y.useContext(Pa);
}
function Xg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = Kg(),
    i = Z((...s) => {
      t == null || t(...s), o(...s);
    });
  return (
    Je(() => {
      let s = l === void 0 || l === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    z.createElement(Pa.Provider, { value: i }, e)
  );
}
let Df = y.createContext(null);
function Mf() {
  let e = y.useContext(Df);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Mf), t);
  }
  return e;
}
function qg() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = Z(
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
          return z.createElement(Df.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let Jg = "p";
function Zg(e, t) {
  let n = fr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = Mf(),
    i = pt(t);
  Je(() => o.register(r), [r, o.register]);
  let s = { ref: i, ...o.props, id: r };
  return Ze({
    ourProps: s,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: Jg,
    name: o.name || "Description",
  });
}
let ey = Qe(Zg),
  ty = Object.assign(ey, {});
var ny = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(ny || {}),
  ry = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(ry || {});
let ly = {
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
function oy(e, t, n = () => [document.body]) {
  Yg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function iy(e, t) {
  return xe(t.type, ly, e, t);
}
let sy = "div",
  ay = Co.RenderStrategy | Co.Static;
function uy(e, t) {
  let n = fr(),
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
  let v = ja();
  l === void 0 && v !== null && (l = (v & ze.Open) === ze.Open);
  let w = y.useRef(null),
    S = pt(w, t),
    N = fl(w),
    h = e.hasOwnProperty("open") || v !== null,
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
    [k, T] = y.useReducer(iy, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    C = Z(() => o(!1)),
    O = Z((q) => T({ type: 0, id: q })),
    _ = dr() ? (a ? !1 : m === 0) : !1,
    R = d > 1,
    $ = y.useContext(jo) !== null,
    [se, ke] = Tg(),
    Pe = {
      get current() {
        var q;
        return (q = k.panelRef.current) != null ? q : w.current;
      },
    },
    {
      resolveContainers: et,
      mainTreeNodeRef: tt,
      MainTreeNode: nt,
    } = Gg({ portals: se, defaultContainers: [Pe] }),
    Fe = R ? "parent" : "leaf",
    P = v !== null ? (v & ze.Closing) === ze.Closing : !1,
    L = $ || P ? !1 : _,
    M = y.useCallback(() => {
      var q, lt;
      return (lt = Array.from(
        (q = N == null ? void 0 : N.querySelectorAll("body > *")) != null
          ? q
          : []
      ).find((Oe) =>
        Oe.id === "headlessui-portal-root"
          ? !1
          : Oe.contains(tt.current) && Oe instanceof HTMLElement
      )) != null
        ? lt
        : null;
    }, [tt]);
  qu(M, L);
  let U = R ? !0 : _,
    A = y.useCallback(() => {
      var q, lt;
      return (lt = Array.from(
        (q =
          N == null
            ? void 0
            : N.querySelectorAll("[data-headlessui-portal]")) != null
          ? q
          : []
      ).find((Oe) => Oe.contains(tt.current) && Oe instanceof HTMLElement)) !=
        null
        ? lt
        : null;
    }, [tt]);
  qu(A, U),
    rg(
      et,
      (q) => {
        q.preventDefault(), C();
      },
      !(!_ || R)
    );
  let le = !(R || m !== 0);
  Tf(N == null ? void 0 : N.defaultView, "keydown", (q) => {
    le &&
      (q.defaultPrevented ||
        (q.key === Cf.Escape &&
          (q.preventDefault(), q.stopPropagation(), C())));
  }),
    oy(N, !(P || m !== 0 || $), et),
    y.useEffect(() => {
      if (m !== 0 || !w.current) return;
      let q = new ResizeObserver((lt) => {
        for (let Oe of lt) {
          let Ln = Oe.target.getBoundingClientRect();
          Ln.x === 0 && Ln.y === 0 && Ln.width === 0 && Ln.height === 0 && C();
        }
      });
      return q.observe(w.current), () => q.disconnect();
    }, [m, w, C]);
  let [Re, Ft] = qg(),
    hl = y.useMemo(
      () => [{ dialogState: m, close: C, setTitleId: O }, k],
      [m, k, C, O]
    ),
    an = y.useMemo(() => ({ open: m === 0 }), [m]),
    _n = {
      ref: S,
      id: r,
      role: s,
      "aria-modal": m === 0 ? !0 : void 0,
      "aria-labelledby": k.titleId,
      "aria-describedby": Re,
    };
  return z.createElement(
    Xg,
    {
      type: "Dialog",
      enabled: m === 0,
      element: w,
      onUpdate: Z((q, lt) => {
        lt === "Dialog" &&
          xe(q, {
            [Ps.Add]: () => p((Oe) => Oe + 1),
            [Ps.Remove]: () => p((Oe) => Oe - 1),
          });
      }),
    },
    z.createElement(
      Cs,
      { force: !0 },
      z.createElement(
        js,
        null,
        z.createElement(
          jo.Provider,
          { value: hl },
          z.createElement(
            js.Group,
            { target: w },
            z.createElement(
              Cs,
              { force: !1 },
              z.createElement(
                Ft,
                { slot: an, name: "Dialog.Description" },
                z.createElement(
                  Cr,
                  {
                    initialFocus: i,
                    containers: et,
                    features: _
                      ? xe(Fe, {
                          parent: Cr.features.RestoreFocus,
                          leaf: Cr.features.All & ~Cr.features.FocusLock,
                        })
                      : Cr.features.None,
                  },
                  z.createElement(
                    ke,
                    null,
                    Ze({
                      ourProps: _n,
                      theirProps: c,
                      slot: an,
                      defaultTag: sy,
                      features: ay,
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
    z.createElement(nt, null)
  );
}
let cy = "div";
function dy(e, t) {
  let n = fr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = ml("Dialog.Overlay"),
    s = pt(t),
    a = Z((d) => {
      if (d.target === d.currentTarget) {
        if (cg(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    c = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Ze({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: l,
    slot: c,
    defaultTag: cy,
    name: "Dialog.Overlay",
  });
}
let fy = "div";
function py(e, t) {
  let n = fr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = ml("Dialog.Backdrop"),
    s = pt(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return z.createElement(
    Cs,
    { force: !0 },
    z.createElement(
      js,
      null,
      Ze({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: a,
        defaultTag: fy,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let my = "div";
function hy(e, t) {
  let n = fr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = ml("Dialog.Panel"),
    s = pt(t, i.panelRef),
    a = y.useMemo(() => ({ open: o === 0 }), [o]),
    c = Z((d) => {
      d.stopPropagation();
    });
  return Ze({
    ourProps: { ref: s, id: r, onClick: c },
    theirProps: l,
    slot: a,
    defaultTag: my,
    name: "Dialog.Panel",
  });
}
let gy = "h2";
function yy(e, t) {
  let n = fr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = ml("Dialog.Title"),
    s = pt(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Ze({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: a,
    defaultTag: gy,
    name: "Dialog.Title",
  });
}
let vy = Qe(uy),
  wy = Qe(py),
  xy = Qe(hy),
  Sy = Qe(dy),
  ky = Qe(yy),
  Zn = Object.assign(vy, {
    Backdrop: wy,
    Panel: xy,
    Overlay: Sy,
    Title: ky,
    Description: ty,
  });
function Ey(e = 0) {
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
function Ny(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Pi(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Oi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Cy(e, t) {
  let n = bn();
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
function Ty(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = bn(),
    i = r !== void 0 ? Ny(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = xe(l, { enter: () => t.enter, leave: () => t.leave }),
    a = xe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = xe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Oi(
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
    Pi(e, ...t.base, ...s, ...c),
    o.nextFrame(() => {
      Oi(e, ...t.base, ...s, ...c),
        Pi(e, ...t.base, ...s, ...a),
        Cy(
          e,
          () => (Oi(e, ...t.base, ...s), Pi(e, ...t.base, ...t.entered), i())
        );
    }),
    o.dispose
  );
}
function jy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = pl(),
    s = Na(),
    a = bt(n);
  Je(() => {
    e && (a.current = "enter");
  }, [e]),
    Je(() => {
      let c = bn();
      s.add(c.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(a.current),
          c.add(
            Ty(d, r.current, a.current === "enter", () => {
              c.dispose(), o.current(a.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function zt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Yo = y.createContext(null);
Yo.displayName = "TransitionContext";
var Py = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Py || {});
function Oy() {
  let e = y.useContext(Yo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function by() {
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
function $f(e, t) {
  let n = bt(e),
    r = y.useRef([]),
    l = pl(),
    o = Na(),
    i = Z((v, w = Yt.Hidden) => {
      let S = r.current.findIndex(({ el: N }) => N === v);
      S !== -1 &&
        (xe(w, {
          [Yt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Yt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        o.microTask(() => {
          var N;
          !Ko(r) && l.current && ((N = n.current) == null || N.call(n));
        }));
    }),
    s = Z((v) => {
      let w = r.current.find(({ el: S }) => S === v);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, Yt.Unmount)
      );
    }),
    a = y.useRef([]),
    c = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    p = Z((v, w, S) => {
      a.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([N]) => N !== v)),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((N) => {
              a.current.push(N);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((N) => {
              Promise.all(d.current[w].map(([h, f]) => f)).then(() => N());
            }),
          ]),
        w === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => S(w)))
          : S(w);
    }),
    g = Z((v, w, S) => {
      Promise.all(d.current[w].splice(0).map(([N, h]) => h))
        .then(() => {
          var N;
          (N = a.current.shift()) == null || N();
        })
        .then(() => S(w));
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
function _y() {}
let Ly = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ju(e) {
  var t;
  let n = {};
  for (let r of Ly) n[r] = (t = e[r]) != null ? t : _y;
  return n;
}
function Dy(e) {
  let t = y.useRef(Ju(e));
  return (
    y.useEffect(() => {
      t.current = Ju(e);
    }, [e]),
    t
  );
}
let My = "div",
  Ff = Co.RenderStrategy;
function $y(e, t) {
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
      leaveFrom: v,
      leaveTo: w,
      ...S
    } = e,
    N = y.useRef(null),
    h = pt(N, t),
    f = (n = S.unmount) == null || n ? Yt.Unmount : Yt.Hidden,
    { show: m, appear: k, initial: T } = Oy(),
    [C, O] = y.useState(m ? "visible" : "hidden"),
    _ = by(),
    { register: R, unregister: $ } = _;
  y.useEffect(() => R(N), [R, N]),
    y.useEffect(() => {
      if (f === Yt.Hidden && N.current) {
        if (m && C !== "visible") {
          O("visible");
          return;
        }
        return xe(C, { hidden: () => $(N), visible: () => R(N) });
      }
    }, [C, N, R, $, m, f]);
  let se = bt({
      base: zt(S.className),
      enter: zt(a),
      enterFrom: zt(c),
      enterTo: zt(d),
      entered: zt(p),
      leave: zt(g),
      leaveFrom: zt(v),
      leaveTo: zt(w),
    }),
    ke = Dy({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: s }),
    Pe = dr();
  y.useEffect(() => {
    if (Pe && C === "visible" && N.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [N, C, Pe]);
  let et = T && !k,
    tt = k && m && T,
    nt = !Pe || et ? "idle" : m ? "enter" : "leave",
    Fe = Ey(0),
    P = Z((le) =>
      xe(le, {
        enter: () => {
          Fe.addFlag(ze.Opening), ke.current.beforeEnter();
        },
        leave: () => {
          Fe.addFlag(ze.Closing), ke.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    L = Z((le) =>
      xe(le, {
        enter: () => {
          Fe.removeFlag(ze.Opening), ke.current.afterEnter();
        },
        leave: () => {
          Fe.removeFlag(ze.Closing), ke.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    M = $f(() => {
      O("hidden"), $(N);
    }, _),
    U = y.useRef(!1);
  jy({
    immediate: tt,
    container: N,
    classes: se,
    direction: nt,
    onStart: bt((le) => {
      (U.current = !0), M.onStart(N, le, P);
    }),
    onStop: bt((le) => {
      (U.current = !1),
        M.onStop(N, le, L),
        le === "leave" && !Ko(M) && (O("hidden"), $(N));
    }),
  });
  let A = S,
    kt = { ref: h };
  return (
    tt
      ? (A = {
          ...A,
          className: No(
            S.className,
            ...se.current.enter,
            ...se.current.enterFrom
          ),
        })
      : U.current &&
        ((A.className = No(
          S.className,
          (r = N.current) == null ? void 0 : r.className
        )),
        A.className === "" && delete A.className),
    z.createElement(
      Go.Provider,
      { value: M },
      z.createElement(
        ag,
        { value: xe(C, { visible: ze.Open, hidden: ze.Closed }) | Fe.flags },
        Ze({
          ourProps: kt,
          theirProps: A,
          defaultTag: My,
          features: Ff,
          visible: C === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Fy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = y.useRef(null),
    s = pt(i, t);
  dr();
  let a = ja();
  if (
    (n === void 0 && a !== null && (n = (a & ze.Open) === ze.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, d] = y.useState(n ? "visible" : "hidden"),
    p = $f(() => {
      d("hidden");
    }),
    [g, v] = y.useState(!0),
    w = y.useRef([n]);
  Je(() => {
    g !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), v(!1));
  }, [w, n]);
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
  let N = { unmount: l },
    h = Z(() => {
      var m;
      g && v(!1), (m = e.beforeEnter) == null || m.call(e);
    }),
    f = Z(() => {
      var m;
      g && v(!1), (m = e.beforeLeave) == null || m.call(e);
    });
  return z.createElement(
    Go.Provider,
    { value: p },
    z.createElement(
      Yo.Provider,
      { value: S },
      Ze({
        ourProps: {
          ...N,
          as: y.Fragment,
          children: z.createElement(Rf, {
            ref: s,
            ...N,
            ...o,
            beforeEnter: h,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: Ff,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function Ry(e, t) {
  let n = y.useContext(Yo) !== null,
    r = ja() !== null;
  return z.createElement(
    z.Fragment,
    null,
    !n && r
      ? z.createElement(Os, { ref: t, ...e })
      : z.createElement(Rf, { ref: t, ...e })
  );
}
let Os = Qe(Fy),
  Rf = Qe($y),
  Iy = Qe(Ry),
  er = Object.assign(Os, { Child: Iy, Root: Os }),
  vn = null;
const zy = async () => {
    if (vn) return vn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (vn = await e.json()), vn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  If = (e) => {
    if (!vn) throw new Error("Configuration not loaded");
    return `${vn.domain}${e}`;
  },
  Ay = () => vn,
  Nt = async (e, t = {}) => {
    const n = If(e),
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
  Hy = {
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
  zf = y.createContext(void 0),
  Uy = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o) => Hy[t][o] || o;
    return u.jsx(zf.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  St = () => {
    const e = y.useContext(zf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Wy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = St(),
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
                u.jsx(F0, { size: 20, className: "text-gray-500" }),
                u.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: "時間區間 / Time Range",
                }),
              ],
            }),
            u.jsx($0, {
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
                              value: V(e, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  s.target.value,
                                  V(e, "HH:mm:ss"),
                                  V(t, "yyyy-MM-dd"),
                                  V(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx("input", {
                              type: "time",
                              value: V(e, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  V(e, "yyyy-MM-dd"),
                                  s.target.value,
                                  V(t, "yyyy-MM-dd"),
                                  V(t, "HH:mm:ss")
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
                              value: V(t, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  V(e, "yyyy-MM-dd"),
                                  V(e, "HH:mm:ss"),
                                  s.target.value,
                                  V(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx("input", {
                              type: "time",
                              value: V(t, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  V(e, "yyyy-MM-dd"),
                                  V(e, "HH:mm:ss"),
                                  V(t, "yyyy-MM-dd"),
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
  By = ({ value: e, onChange: t }) => {
    const { t: n } = St();
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
  Oa = "user_session",
  Af = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  Qy = (e) =>
    Af(e.Permissions)
      ? (sessionStorage.setItem(Oa, JSON.stringify(e)), !0)
      : !1,
  Hr = () => {
    const e = sessionStorage.getItem(Oa);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Af(t.Permissions)
        ? (Po(), null)
        : t;
    } catch {
      return Po(), null;
    }
  },
  Po = () => {
    sessionStorage.removeItem(Oa);
  },
  Vy = () => {
    const e = Hr();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Po(), !1) : !0;
  },
  Yy = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return u.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  Gy = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: l } = St();
    return u.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? u.jsx(Yy, { size: "small\\", className: "mr-2" })
          : u.jsx(R0, { size: 18, className: "mr-2" }),
        l("button.export"),
      ],
    });
  },
  Il = { duration: 180, brightness: 0.9, color: "0,0,255" },
  Hf = "light_settings",
  Ky = [
    { name: "red", value: "0,0,255", label: "紅色" },
    { name: "green", value: "0,255,0", label: "綠色" },
    { name: "blue", value: "255,0,0", label: "藍色" },
    { name: "yellow", value: "0,255,255", label: "黃色" },
  ],
  Uf = () => {
    try {
      const e = localStorage.getItem(Hf);
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
  Xy = (e) => {
    try {
      localStorage.setItem(Hf, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  qy = (e) => {
    if (e < 60) return `${e}秒`;
    const t = Math.floor(e / 60),
      n = e % 60;
    return n === 0 ? `${t}分鐘` : `${t}分${n}秒`;
  },
  Jy = (e) => {
    const [t, n, r] = e.split(",");
    return `${r},${n},${t}`;
  },
  Zy = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: l,
    onConfirm: o,
    onCancel: i,
    isProcessing: s = !1,
  }) =>
    u.jsx(er, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: u.jsxs(Zn, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && i(),
        children: [
          u.jsx(er.Child, {
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
              children: u.jsx(er.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: u.jsxs(Zn.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    u.jsx(Zn.Title, {
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
  ev = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: o } = St(),
      [i, s] = y.useState(null),
      [a, c] = y.useState(!1),
      [d, p] = y.useState(""),
      [g, v] = y.useState(null),
      [w, S] = y.useState(!1),
      [N, h] = y.useState(null),
      [f, m] = y.useState(null),
      [k, T] = y.useState(!1),
      [C, O] = y.useState("等待過帳"),
      [_, R] = y.useState(!0),
      [$, se] = y.useState(!1),
      [ke, Pe] = y.useState(!1),
      [et, tt] = y.useState("name"),
      [nt, Fe] = y.useState(""),
      [P, L] = y.useState(!1),
      [M, U] = y.useState({}),
      A = y.useRef({}),
      [kt, le] = y.useState(!1),
      [rt, Re] = y.useState(null);
    y.useEffect(
      () => () => {
        Object.values(A.current).forEach((x) => clearTimeout(x));
      },
      []
    );
    const Ft = [
        { value: "name", label: o("search.field.name") },
        { value: "code", label: o("search.field.code") },
        { value: "source", label: o("search.field.source") },
        { value: "destination", label: o("search.field.destination") },
      ],
      hl = (x) => {
        const j = Hr();
        if (
          !j ||
          x.state !== "已過帳" ||
          x.state === "已簽收" ||
          x.issuerID !== j.ID ||
          !x.issuanceTime ||
          x.issuanceTime === "0001-01-01T00:00:00"
        )
          return !1;
        try {
          const D = new Date(x.issuanceTime),
            G = new Date(),
            ue = 8 * 60,
            ee = new Date(D.getTime() + ue * 60 * 1e3),
            Q = new Date(G.getTime() + ue * 60 * 1e3);
          return (
            ee.getUTCFullYear() === Q.getUTCFullYear() &&
            ee.getUTCMonth() === Q.getUTCMonth() &&
            ee.getUTCDate() === Q.getUTCDate()
          );
        } catch {
          return !1;
        }
      },
      an = (x) => x.LOT || x.lotNumber || x.lot_number || x.batch_number || "-",
      _n = (x) => {
        const j = x.VAL || x.expiryDate || x.validity_period || x.expiry;
        if (!j || j === "-") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2}$/)) return j;
        try {
          const D = new Date(j);
          if (!isNaN(D.getTime())) return V(D, "yyyy/MM/dd");
        } catch {}
        return j;
      },
      q = (x) => {
        const j = x.addedTime || x.reportGenerationTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const D = new Date(j);
          if (!isNaN(D.getTime())) return V(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      lt = (x) => {
        const j = x.issuanceTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const D = new Date(j);
          if (!isNaN(D.getTime())) return V(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      Oe = (x) => {
        const j = x.signedTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const D = new Date(j);
          if (!isNaN(D.getTime())) return V(D, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      Ln = (x) => {
        O(x), r(t, n);
      },
      Wf = (x) => {
        x.preventDefault();
      },
      Bf = (x) => {
        x.key === "Enter" && x.preventDefault();
      },
      Qf = async () => {
        L(!0);
        try {
          const x = await fetch(
            If("/api/drugStotreDistribution/download_excel_by_addedTime"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ValueAry: [
                  V(t, "yyyy-MM-dd HH:mm:ss"),
                  V(n, "yyyy-MM-dd HH:mm:ss"),
                ],
              }),
            }
          );
          if (!x.ok) throw new Error("Export failed");
          const j = await x.blob(),
            D = window.URL.createObjectURL(j),
            G = document.createElement("a");
          (G.href = D),
            (G.download = `Distribution_${V(t, "yyyyMMdd")}_to_${V(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(G),
            G.click(),
            window.URL.revokeObjectURL(D),
            document.body.removeChild(G);
        } catch (x) {
          console.error("Export error:", x), v("匯出失敗，請稍後再試");
        } finally {
          L(!1);
        }
      },
      ba = e.filter((x) => {
        let j;
        if (
          (C === "全部"
            ? (j = !0)
            : C === "已核撥"
            ? (j = x.state === "已過帳" || x.state === "已簽收")
            : (j = x.state === C),
          !nt)
        )
          return j;
        const D = nt.toLowerCase();
        switch (et) {
          case "name":
            return j && x.name.toLowerCase().includes(D);
          case "code":
            return j && x.code.toLowerCase().includes(D);
          case "source":
            return j && x.sourceStoreType.toLowerCase().includes(D);
          case "destination":
            return j && x.destinationStoreType.toLowerCase().includes(D);
          default:
            return j;
        }
      }),
      gl = ba.reduce((x, j) => {
        const D = j.code;
        return (
          x[D] || (x[D] = { orders: [], drugName: j.name, drugCode: j.code }),
          x[D].orders.push(j),
          x
        );
      }, {}),
      _a = (x) => {
        const j = x.filter(
          (G) => G.state === "等待過帳" && G.actualIssuedQuantity
        );
        if (j.length === 0) return "";
        const D = j.reduce((G, ue) => {
          const ee = ue.code;
          return (
            G[ee] || (G[ee] = { name: ue.name, total: 0 }),
            (G[ee].total += parseInt(ue.actualIssuedQuantity) || 0),
            G
          );
        }, {});
        return Object.values(D).map((G) => `${G.name} - ${G.total}`).join(`
`);
      },
      Vf = async () => {
        if (i) {
          if (!d || isNaN(Number(d)) || Number(d) < 0) {
            v("請輸入有效的數量");
            return;
          }
          S(!0), v(null);
          try {
            const x = await Nt(
              "/api/drugStotreDistribution/update_actqty_by_guid",
              { method: "POST", body: { ValueAry: [i.GUID, d] } }
            );
            if (x.Code === 200) c(!1), r(t, n, !0);
            else throw new Error(x.Result || "更新失敗");
          } catch (x) {
            v(x instanceof Error ? x.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      Yf = async () => {
        const x = Hr();
        if (!x) {
          v("無法取得使用者資訊");
          return;
        }
        const j = ba.filter(
          (ue) => ue.state === "等待過帳" && ue.actualIssuedQuantity
        );
        if (j.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const G = `確認要核撥以下項目嗎？

${_a(j)}`;
        if (confirm(G)) {
          Pe(!0), v(null);
          try {
            const ee = new Date().toISOString(),
              Q = new Intl.DateTimeFormat("sv-SE", {
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
            console.log(Q);
            const F = {
                Data: j.map((mt) => ({
                  ...mt,
                  issuer: x.Name,
                  issuerID: x.ID,
                  issuanceTime: Q,
                  state: "已過帳",
                  LOT: an(mt),
                  VAL: _n(mt),
                  notice: "False",
                })),
              },
              be = await Nt("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: F,
              });
            if (be.Code === 200) r(t, n, !0);
            else throw new Error(be.Result || "批次核撥失敗");
          } catch (ue) {
            v(ue instanceof Error ? ue.message : "系統錯誤，請稍後再試");
          } finally {
            Pe(!1);
          }
        }
      },
      Gf = async (x) => {
        const j = Hr();
        if (!j) {
          v("無法取得使用者資訊");
          return;
        }
        const D = gl[x].orders.filter(
          (ee) => ee.state === "等待過帳" && ee.actualIssuedQuantity
        );
        if (D.length === 0) {
          v("該藥品沒有可核撥的訂單");
          return;
        }
        const ue = `確認要核撥以下項目嗎？

${_a(D)}`;
        if (confirm(ue)) {
          se(!0), v(null);
          try {
            const Q = new Date().toISOString(),
              F = new Intl.DateTimeFormat("sv-SE", {
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
            console.log(F);
            const be = {
                Data: D.map((pr) => ({
                  ...pr,
                  issuer: j.Name,
                  issuerID: j.ID,
                  issuanceTime: F,
                  state: "已過帳",
                  LOT: an(pr),
                  VAL: _n(pr),
                  notice: "False",
                })),
              },
              mt = await Nt("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: be,
              });
            if (mt.Code === 200) r(t, n, !0);
            else throw new Error(mt.Result || "核撥失敗");
          } catch (ee) {
            v(ee instanceof Error ? ee.message : "系統錯誤，請稍後再試");
          } finally {
            se(!1);
          }
        }
      },
      Kf = async (x) => {
        if (!hl(x)) {
          v("無法取消核撥：不符合取消條件");
          return;
        }
        Re(x), le(!0);
      },
      Xf = async () => {
        if (rt) {
          S(!0), v(null);
          try {
            const x = {
                Data: [
                  {
                    ...rt,
                    issuer: "",
                    issuerID: "",
                    issuanceTime: "0001-01-01T00:00:00",
                    state: "等待過帳",
                    LOT: an(rt),
                    VAL: _n(rt),
                    notice: "False",
                  },
                ],
              },
              j = await Nt("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: x,
              });
            if (j.Code === 200) le(!1), Re(null), r(t, n, !0);
            else throw new Error(j.Result || "取消核撥失敗");
          } catch (x) {
            v(x instanceof Error ? x.message : "系統錯誤，請稍後再試");
          } finally {
            S(!1);
          }
        }
      },
      qf = async (x) => {
        const j = gl[x].orders,
          D = j.filter((Q) => Q.state === "等待過帳"),
          G = j,
          ee = G.some((Q) => !Q.notice || Q.notice !== "True");
        U((Q) => ({ ...Q, [x]: !0 })),
          A.current[x] && (clearTimeout(A.current[x]), delete A.current[x]);
        try {
          const Q = Uf(),
            F = ee ? Q.color : "0,0,0",
            be = ee ? Q.brightness.toString() : "0";
          Nt("/api/medmap/light_by_code_name_type", {
            method: "POST",
            body: {
              ValueAry: [
                "ServerName=DS01",
                "ServerType=藥庫",
                `code=${x}`,
                `color=${F}`,
                `lightness=${be}`,
              ],
            },
          })
            .then((Ee) => {
              const un = Array.isArray(Ee) ? Ee : [Ee];
              if (un.some((mr) => mr.Code !== 200)) {
                const mr = un
                  .filter((Xo) => Xo.Code !== 200)
                  .map((Xo) => Xo.Result)
                  .filter(Boolean);
                console.log("Light API error:", mr.join(", "));
              } else
                console.log(
                  "Light API success:",
                  un.map((mr) => mr.Result).join(", ")
                );
            })
            .catch((Ee) => {
              console.log("Light API error:", Ee);
            }),
            ee &&
              (A.current[x] = setTimeout(() => {
                Nt("/api/medmap/light_by_code_name_type", {
                  method: "POST",
                  body: {
                    ValueAry: [
                      "ServerName=DS01",
                      "ServerType=藥庫",
                      `code=${x}`,
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
                  delete A.current[x];
              }, Q.duration * 1e3));
          const mt = ee ? D : G,
            pr = ee ? "True" : "False",
            ep = mt.map((Ee) =>
              Nt("/api/drugStotreDistribution/update_notice", {
                method: "POST",
                body: { ValueAry: [Ee.GUID, pr] },
              })
            ),
            Da = await Promise.all(ep);
          if (Da.some((Ee) => Ee.Code !== 200)) {
            const Ee = Da.filter((un) => un.Code !== 200)
              .map((un) => un.Result)
              .filter(Boolean);
            throw new Error(Ee.join(", ") || "更新通知狀態失敗");
          }
          r(t, n, !0);
        } catch (Q) {
          console.error("Notification toggle error:", Q),
            v(Q instanceof Error ? Q.message : "更新通知狀態失敗，請稍後再試");
        } finally {
          U((Q) => ({ ...Q, [x]: !1 }));
        }
      },
      Jf = (x) => {
        x.state === "等待過帳" &&
          (s(x),
          p(x.actualIssuedQuantity || x.issuedQuantity),
          v(null),
          c(!0),
          R(!0));
      },
      yl = (x) => {
        _
          ? (p(x), R(!1))
          : k
          ? (p(x), T(!1))
          : N && !f
          ? (m(d), p(x))
          : p(d === "0" ? x : d + x);
      },
      vl = (x) => {
        R(!1), f && La(), h(x), T(!1);
      },
      La = () => {
        if (!f || !N) return;
        const x = parseFloat(f),
          j = parseFloat(d);
        let D = 0;
        switch (N) {
          case "+":
            D = x + j;
            break;
          case "-":
            D = x - j;
            break;
          case "×":
            D = x * j;
            break;
          case "÷":
            if (j === 0) {
              v("不能除以零");
              return;
            }
            D = x / j;
            break;
        }
        p(Math.round(D).toString()), m(null), h(null), T(!0), R(!1);
      },
      Zf = () => {
        p("0"), m(null), h(null), T(!1), R(!0);
      };
    return u.jsxs("div", {
      className: "space-y-6 px-4 md:px-6 lg:px-8",
      children: [
        u.jsxs("div", {
          className: "space-y-6",
          children: [
            u.jsx(Wy, { startDate: t, endDate: n, onDateChange: r }),
            u.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                u.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    u.jsx(By, { value: C, onChange: Ln }),
                    u.jsxs("form", {
                      onSubmit: Wf,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        u.jsx("select", {
                          value: et,
                          onChange: (x) => tt(x.target.value),
                          className:
                            "w-full sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: Ft.map((x) =>
                            u.jsx(
                              "option",
                              { value: x.value, children: x.label },
                              x.value
                            )
                          ),
                        }),
                        u.jsxs("div", {
                          className: "relative",
                          children: [
                            u.jsx("input", {
                              type: "text",
                              value: nt,
                              onChange: (x) => Fe(x.target.value),
                              onKeyDown: Bf,
                              placeholder: o("search.placeholder"),
                              className:
                                "w-full sm:w-64 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            u.jsx(H0, {
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
                    u.jsx(Gy, { onClick: Qf, isLoading: P, disabled: l }),
                    C !== "已過帳" &&
                      u.jsx("button", {
                        onClick: Yf,
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
              u.jsx(ks, { size: 20 }),
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
          : Object.keys(gl).length === 0
          ? u.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: o("app.orders.empty"),
            })
          : u.jsx("div", {
              className: "space-y-8",
              children: Object.entries(gl).map(([x, j]) => {
                const D = j.orders.some(
                    (F) => F.state === "等待過帳" && F.actualIssuedQuantity
                  ),
                  ue = j.orders.some((F) => !F.notice || F.notice !== "True"),
                  ee = o(ue ? "button.notify" : "button.cancelNotify"),
                  Q = ue
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
                                children: j.drugName,
                              }),
                              u.jsx("div", {
                                className: "text-base text-gray-900 break-all",
                                children: j.drugCode,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-start lg:items-end gap-3 lg:flex-shrink-0",
                            children: [
                              u.jsx("button", {
                                onClick: (F) => {
                                  F.stopPropagation(), qf(x);
                                },
                                disabled: M[x],
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${Q} focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: ee,
                              }),
                              u.jsx("button", {
                                onClick: (F) => {
                                  F.stopPropagation(), Gf(x);
                                },
                                disabled: $ || !D,
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                                  D
                                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                } disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: o(
                                  $ ? "button.processing" : "button.approve"
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "space-y-2",
                        children: j.orders.map((F) => {
                          const be = F.state === "等待過帳";
                          return u.jsx(
                            "div",
                            {
                              className: `py-2 px-4 rounded-lg ${
                                be
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
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: F.sourceStoreType,
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
                                                  ":",
                                                ],
                                              }),
                                              u.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children:
                                                  F.destinationStoreType,
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
                                                children: F.reportName,
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
                                                children: F.issuer || "-",
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
                                                children: an(F),
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
                                                children: _n(F),
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
                                                children: q(F),
                                              }),
                                            ],
                                          }),
                                        }),
                                        u.jsx("div", {
                                          className: `text-base text-gray-900 ${
                                            be ? "hidden" : ""
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
                                                children: lt(F),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className: `grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16 ${
                                        be ? "hidden" : ""
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
                                                children: Oe(F),
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
                                                children: F.signedPerson || "-",
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
                                            F.state === "等待過帳" &&
                                            !F.actualIssuedQuantity
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
                                                    F.state === "等待過帳"
                                                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                                      : F.state === "已過帳"
                                                      ? "bg-green-100 text-green-800 border border-green-200"
                                                      : F.state === "已簽收"
                                                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                                                      : "bg-gray-100 text-gray-800 border border-gray-200"
                                                  }`,
                                                  children:
                                                    F.state === "等待過帳"
                                                      ? o("status.pending")
                                                      : F.state === "已過帳"
                                                      ? o("status.completed")
                                                      : F.state,
                                                }),
                                                u.jsxs("div", {
                                                  className: `flex justify-between items-center transition-colors duration-200 px-3 py-1.5 ${
                                                    be
                                                      ? "w-[240px] text-lg bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                                                      : "px-3 py-2 text-xl font-bold"
                                                  }`,
                                                  onClick: () => be && Jf(F),
                                                  style: {
                                                    cursor: be
                                                      ? "pointer"
                                                      : "default",
                                                  },
                                                  children: [
                                                    be ? "修改實撥量" : "",
                                                    u.jsxs("span", {
                                                      children: [
                                                        F.actualIssuedQuantity ||
                                                          "-",
                                                        " / ",
                                                        F.issuedQuantity,
                                                        " ",
                                                        F.packageUnit || "",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                hl(F) &&
                                                  u.jsx("button", {
                                                    className:
                                                      "px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200",
                                                    onClick: (mt) => {
                                                      mt.stopPropagation(),
                                                        Kf(F);
                                                    },
                                                    disabled: w,
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
                            F.GUID
                          );
                        }),
                      }),
                    ],
                  },
                  x
                );
              }),
            }),
        u.jsx(Zy, {
          isOpen: kt,
          title: "取消核撥確認",
          message: rt
            ? `確認要取消核撥「${rt.name}」嗎？

取消後可重新修改實撥量。`
            : "",
          confirmText: "確認取消",
          cancelText: "返回",
          onConfirm: Xf,
          onCancel: () => {
            le(!1), Re(null);
          },
          isProcessing: w,
        }),
        u.jsx(er, {
          appear: !0,
          show: a,
          as: y.Fragment,
          children: u.jsxs(Zn, {
            as: "div",
            className: "relative z-50",
            onClose: () => !w && c(!1),
            children: [
              u.jsx(er.Child, {
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
                  children: u.jsx(er.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: u.jsxs(Zn.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        u.jsx(Zn.Title, {
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
                                    className:
                                      "mt-1 w-full px-3 py-2 text-base font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                className: "grid grid-cols-4 gap-2",
                                children: [
                                  ["7", "8", "9", "÷"].map((x) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          x === "÷" ? vl(x) : yl(x),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          x === "÷"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: x,
                                      },
                                      x
                                    )
                                  ),
                                  ["4", "5", "6", "×"].map((x) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          x === "×" ? vl(x) : yl(x),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          x === "×"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: x,
                                      },
                                      x
                                    )
                                  ),
                                  ["1", "2", "3", "-"].map((x) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          x === "-" ? vl(x) : yl(x),
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          x === "-"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: x,
                                      },
                                      x
                                    )
                                  ),
                                  ["0", ".", "=", "+"].map((x) =>
                                    u.jsx(
                                      "button",
                                      {
                                        onClick: () => {
                                          x === "="
                                            ? La()
                                            : x === "+"
                                            ? vl(x)
                                            : yl(x);
                                        },
                                        className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                          x === "="
                                            ? "bg-green-500 hover:bg-green-600 text-white"
                                            : x === "+"
                                            ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                            : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                        }`,
                                        children: x,
                                      },
                                      x
                                    )
                                  ),
                                ],
                              }),
                              g &&
                                u.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    u.jsx(ks, { size: 20 }),
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
                                    onClick: Zf,
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.clear"),
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => !w && c(!1),
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.cancel"),
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: Vf,
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o(
                                      w ? "button.processing" : "button.confirm"
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
  tv = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補核撥系統",
    logo: r,
  }) => {
    const [l, o] = y.useState(""),
      [i, s] = y.useState(""),
      [a, c] = y.useState(null),
      [d, p] = y.useState(!1),
      g = async (v) => {
        v.preventDefault(), c(null), p(!0);
        try {
          const w = await Nt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (w.Code === 200) {
            if (!Qy(w.Data)) {
              c("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else c(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          console.error("Login error:", w),
            c(w instanceof Error ? w.message : "系統錯誤，請稍後再試");
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
                u.jsx(ks, { size: 20 }),
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
                    onChange: (v) => o(v.target.value),
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
                    onChange: (v) => s(v.target.value),
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
  nv = () => {
    const { language: e, toggleLanguage: t } = St();
    return u.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        u.jsx(I0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  rv = ({ title: e }) =>
    u.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  lv = () => {
    const e = Hr();
    return e
      ? u.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  ov = ({ onLogout: e }) => {
    const { t } = St();
    return u.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        u.jsx(A0, { className: "h-4 w-4" }),
        u.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  iv = () => {
    const { t: e } = St(),
      t = () => {
        const n = Ay();
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
        u.jsx(z0, { size: 24 }),
        u.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  sv = ({ isOpen: e, onClose: t, settings: n, onSave: r }) => {
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
                children: u.jsx(W0, { className: "w-5 h-5" }),
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
                    children: ["亮燈時間: ", qy(l)],
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
                    children: Ky.map((p) =>
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
                              style: { backgroundColor: `rgb(${Jy(p.value)})` },
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
  av = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(Uf()),
      l = (o) => {
        Xy(o), r(o);
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("button", {
          onClick: () => t(!0),
          className:
            "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          title: "亮燈設定",
          children: u.jsx(U0, { className: "w-5 h-5" }),
        }),
        u.jsx(sv, { isOpen: e, onClose: () => t(!1), settings: n, onSave: l }),
      ],
    });
  },
  uv = ({ onLogout: e }) => {
    const { t } = St();
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
                u.jsx(iv, {}),
                u.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    u.jsx(rv, { title: t("app.title") }),
                    u.jsx(lv, {}),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                u.jsx(av, {}),
                u.jsx(nv, {}),
                u.jsx(ov, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  cv = ({ className: e = "" }) => {
    const { t } = St();
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
function dv() {
  St();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [l, o] = y.useState(null),
    [i, s] = y.useState(!1),
    [a, c] = y.useState([]),
    [d, p] = y.useState(() => {
      const m = new Date();
      return m.setHours(0, 0, 0, 0), m;
    }),
    [g, v] = y.useState(() => {
      const m = new Date();
      return m.setHours(23, 59, 59, 999), m;
    }),
    [w, S] = y.useState(!1);
  y.useEffect(() => {
    (async () => {
      try {
        await zy(), s(!0);
        const k = Vy();
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
      e && i && N();
    }, [e, i]);
  const N = async (m, k, T = !1) => {
      const C = m || d,
        O = k || g,
        _ = T ? window.scrollY : 0;
      S(!0);
      try {
        const R = await Nt("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              V(C, "yyyy-MM-dd HH:mm:ss"),
              V(O, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        c(R.Data),
          o(null),
          T &&
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
    h = (m, k, T = !1) => {
      p(m), v(k), N(m, k, T);
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
          u.jsx(uv, { onLogout: f }),
          u.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-24",
            children: u.jsx("div", {
              className: "w-full max-w-screen-xl mx-auto",
              children: u.jsx(ev, {
                orders: a,
                startDate: d,
                endDate: g,
                onDateChange: h,
                isLoading: w,
              }),
            }),
          }),
          u.jsx(cv, {}),
        ],
      })
    : u.jsx(tv, { onLogin: () => t(!0) });
}
pf(document.getElementById("root")).render(
  u.jsx(y.StrictMode, { children: u.jsx(Uy, { children: u.jsx(dv, {}) }) })
);
