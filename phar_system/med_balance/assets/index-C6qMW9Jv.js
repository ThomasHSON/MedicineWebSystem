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
var Ju = { exports: {} },
  il = {},
  qu = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = Symbol.for("react.element"),
  hc = Symbol.for("react.portal"),
  gc = Symbol.for("react.fragment"),
  yc = Symbol.for("react.strict_mode"),
  vc = Symbol.for("react.profiler"),
  xc = Symbol.for("react.provider"),
  wc = Symbol.for("react.context"),
  Sc = Symbol.for("react.forward_ref"),
  kc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.memo"),
  Nc = Symbol.for("react.lazy"),
  Vi = Symbol.iterator;
function Cc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vi && e[Vi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  es = Object.assign,
  ts = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {}
ns.prototype = dn.prototype;
function Ko(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ts),
    (this.updater = n || bu);
}
var Go = (Ko.prototype = new ns());
Go.constructor = Ko;
es(Go, dn.prototype);
Go.isPureReactComponent = !0;
var Hi = Array.isArray,
  rs = Object.prototype.hasOwnProperty,
  Yo = { current: null },
  ls = { key: !0, ref: !0, __self: !0, __source: !0 };
function os(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: bn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Yo.current,
  };
}
function _c(e, t) {
  return {
    $$typeof: bn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function Pc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bi = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pc("" + e.key)
    : t.toString(36);
}
function Nr(e, t, n, r, l) {
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
          case bn:
          case hc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Nl(i, 0) : r),
      Hi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bi, "$&/") + "/"),
          Nr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Xo(l) &&
            (l = _c(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Hi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Nl(o, u);
      i += Nr(o, t, n, s, l);
    }
  else if (((s = Cc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Nl(o, u++)), (i += Nr(o, t, n, s, l));
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
function ur(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Nr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function jc(e) {
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
var ae = { current: null },
  Cr = { transition: null },
  Tc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Cr,
    ReactCurrentOwner: Yo,
  };
function is() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: ur,
  forEach: function (e, t, n) {
    ur(
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
      ur(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ur(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = dn;
z.Fragment = gc;
z.Profiler = vc;
z.PureComponent = Ko;
z.StrictMode = yc;
z.Suspense = kc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
z.act = is;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = es({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Yo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      rs.call(t, s) &&
        !ls.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: wc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = os;
z.createFactory = function (e) {
  var t = os.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Sc, render: e };
};
z.isValidElement = Xo;
z.lazy = function (e) {
  return { $$typeof: Nc, _payload: { _status: -1, _result: e }, _init: jc };
};
z.memo = function (e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Cr.transition;
  Cr.transition = {};
  try {
    e();
  } finally {
    Cr.transition = t;
  }
};
z.unstable_act = is;
z.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ae.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
z.useId = function () {
  return ae.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ae.current.useRef(e);
};
z.useState = function (e) {
  return ae.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ae.current.useTransition();
};
z.version = "18.3.1";
qu.exports = z;
var D = qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = D,
  zc = Symbol.for("react.element"),
  Dc = Symbol.for("react.fragment"),
  Rc = Object.prototype.hasOwnProperty,
  Ic = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Rc.call(t, r) && !Oc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: zc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ic.current,
  };
}
il.Fragment = Dc;
il.jsx = us;
il.jsxs = us;
Ju.exports = il;
var p = Ju.exports,
  ss = { exports: {} },
  Se = {},
  as = { exports: {} },
  cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(w, P) {
    var T = w.length;
    w.push(P);
    e: for (; 0 < T; ) {
      var V = (T - 1) >>> 1,
        K = w[V];
      if (0 < l(K, P)) (w[V] = P), (w[T] = K), (T = V);
      else break e;
    }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function r(w) {
    if (w.length === 0) return null;
    var P = w[0],
      T = w.pop();
    if (T !== P) {
      w[0] = T;
      e: for (var V = 0, K = w.length, or = K >>> 1; V < or; ) {
        var kt = 2 * (V + 1) - 1,
          El = w[kt],
          Et = kt + 1,
          ir = w[Et];
        if (0 > l(El, T))
          Et < K && 0 > l(ir, El)
            ? ((w[V] = ir), (w[Et] = T), (V = Et))
            : ((w[V] = El), (w[kt] = T), (V = kt));
        else if (Et < K && 0 > l(ir, T)) (w[V] = ir), (w[Et] = T), (V = Et);
        else break e;
      }
    }
    return P;
  }
  function l(w, P) {
    var T = w.sortIndex - P.sortIndex;
    return T !== 0 ? T : w.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    g = null,
    m = 3,
    k = !1,
    S = !1,
    E = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(w) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= w)
        r(c), (P.sortIndex = P.expirationTime), t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(w) {
    if (((E = !1), f(w), !S))
      if (n(s) !== null) (S = !0), St(y);
      else {
        var P = n(c);
        P !== null && M(v, P.startTime - w);
      }
  }
  function y(w, P) {
    (S = !1), E && ((E = !1), d(j), (j = -1)), (k = !0);
    var T = m;
    try {
      for (
        f(P), g = n(s);
        g !== null && (!(g.expirationTime > P) || (w && !ge()));

      ) {
        var V = g.callback;
        if (typeof V == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var K = V(g.expirationTime <= P);
          (P = e.unstable_now()),
            typeof K == "function" ? (g.callback = K) : g === n(s) && r(s),
            f(P);
        } else r(s);
        g = n(s);
      }
      if (g !== null) var or = !0;
      else {
        var kt = n(c);
        kt !== null && M(v, kt.startTime - P), (or = !1);
      }
      return or;
    } finally {
      (g = null), (m = T), (k = !1);
    }
  }
  var C = !1,
    N = null,
    j = -1,
    A = 5,
    L = -1;
  function ge() {
    return !(e.unstable_now() - L < A);
  }
  function vt() {
    if (N !== null) {
      var w = e.unstable_now();
      L = w;
      var P = !0;
      try {
        P = N(!0, w);
      } finally {
        P ? xt() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var xt;
  if (typeof a == "function")
    xt = function () {
      a(vt);
    };
  else if (typeof MessageChannel < "u") {
    var lr = new MessageChannel(),
      wt = lr.port2;
    (lr.port1.onmessage = vt),
      (xt = function () {
        wt.postMessage(null);
      });
  } else
    xt = function () {
      I(vt, 0);
    };
  function St(w) {
    (N = w), C || ((C = !0), xt());
  }
  function M(w, P) {
    j = I(function () {
      w(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), St(y));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (w) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var T = m;
      m = P;
      try {
        return w();
      } finally {
        m = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, P) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var T = m;
      m = w;
      try {
        return P();
      } finally {
        m = T;
      }
    }),
    (e.unstable_scheduleCallback = function (w, P, T) {
      var V = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? V + T : V))
          : (T = V),
        w)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = T + K),
        (w = {
          id: h++,
          callback: P,
          priorityLevel: w,
          startTime: T,
          expirationTime: K,
          sortIndex: -1,
        }),
        T > V
          ? ((w.sortIndex = T),
            t(c, w),
            n(s) === null &&
              w === n(c) &&
              (E ? (d(j), (j = -1)) : (E = !0), M(v, T - V)))
          : ((w.sortIndex = K), t(s, w), S || k || ((S = !0), St(y))),
        w
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (w) {
      var P = m;
      return function () {
        var T = m;
        m = P;
        try {
          return w.apply(this, arguments);
        } finally {
          m = T;
        }
      };
    });
})(cs);
as.exports = cs;
var Mc = as.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc = D,
  we = Mc;
function x(e) {
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
var ds = new Set(),
  Mn = {};
function Mt(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bl = Object.prototype.hasOwnProperty,
  Uc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wi = {},
  Qi = {};
function $c(e) {
  return bl.call(Qi, e)
    ? !0
    : bl.call(Wi, e)
    ? !1
    : Uc.test(e)
    ? (Qi[e] = !0)
    : ((Wi[e] = !0), !1);
}
function Ac(e, t, n, r) {
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
function Vc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ac(e, t, n, r)) return !0;
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
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Jo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zo, Jo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vc(t, n, l, r) && (n = null),
    r || l === null
      ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Je = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  bo = Symbol.for("react.strict_mode"),
  eo = Symbol.for("react.profiler"),
  fs = Symbol.for("react.provider"),
  ps = Symbol.for("react.context"),
  ei = Symbol.for("react.forward_ref"),
  to = Symbol.for("react.suspense"),
  no = Symbol.for("react.suspense_list"),
  ti = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  ms = Symbol.for("react.offscreen"),
  Ki = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ki && e[Ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Cl;
function En(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var _l = !1;
function Pl(e, t) {
  if (!e || _l) return "";
  _l = !0;
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
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? En(e) : "";
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return En(e.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e;
    case 11:
      return (e = Pl(e.type.render, !1)), e;
    case 1:
      return (e = Pl(e.type, !0)), e;
    default:
      return "";
  }
}
function ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case $t:
      return "Portal";
    case eo:
      return "Profiler";
    case bo:
      return "StrictMode";
    case to:
      return "Suspense";
    case no:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ps:
        return (e.displayName || "Context") + ".Consumer";
      case fs:
        return (e._context.displayName || "Context") + ".Provider";
      case ei:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ti:
        return (
          (t = e.displayName || null), t !== null ? t : ro(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ro(e(t));
        } catch {}
    }
  return null;
}
function Bc(e) {
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
      return ro(t);
    case 8:
      return t === bo ? "StrictMode" : "Mode";
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
function pt(e) {
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
function hs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wc(e) {
  var t = hs(e) ? "checked" : "value",
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
function ar(e) {
  e._valueTracker || (e._valueTracker = Wc(e));
}
function gs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Mr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lo(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Gi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ys(e, t) {
  (t = t.checked), t != null && qo(e, "checked", t, !1);
}
function oo(e, t) {
  ys(e, t);
  var n = pt(t.value),
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
    ? io(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && io(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yi(e, t, n) {
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
function io(e, t, n) {
  (t !== "number" || Mr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function uo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pt(n) };
}
function vs(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function so(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cr,
  ws = (function (e) {
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
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
  Qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  Qc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
  });
});
function Ss(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ks(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ss(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Kc = Q(
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
function ao(e, t) {
  if (t) {
    if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function co(e, t) {
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
var fo = null;
function ni(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var po = null,
  qt = null,
  bt = null;
function Ji(e) {
  if ((e = nr(e))) {
    if (typeof po != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = dl(t)), po(e.stateNode, e.type, t));
  }
}
function Es(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Ns() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), Ji(e), t)) for (e = 0; e < t.length; e++) Ji(t[e]);
  }
}
function Cs(e, t) {
  return e(t);
}
function _s() {}
var jl = !1;
function Ps(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return Cs(e, t, n);
  } finally {
    (jl = !1), (qt !== null || bt !== null) && (_s(), Ns());
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var mo = !1;
if (Ge)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", {
      get: function () {
        mo = !0;
      },
    }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn);
  } catch {
    mo = !1;
  }
function Gc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var jn = !1,
  Fr = null,
  Ur = !1,
  ho = null,
  Yc = {
    onError: function (e) {
      (jn = !0), (Fr = e);
    },
  };
function Xc(e, t, n, r, l, o, i, u, s) {
  (jn = !1), (Fr = null), Gc.apply(Yc, arguments);
}
function Zc(e, t, n, r, l, o, i, u, s) {
  if ((Xc.apply(this, arguments), jn)) {
    if (jn) {
      var c = Fr;
      (jn = !1), (Fr = null);
    } else throw Error(x(198));
    Ur || ((Ur = !0), (ho = c));
  }
}
function Ft(e) {
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
function js(e) {
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
function qi(e) {
  if (Ft(e) !== e) throw Error(x(188));
}
function Jc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(x(188));
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
        if (o === n) return qi(l), e;
        if (o === r) return qi(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = Jc(e)), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = we.unstable_scheduleCallback,
  bi = we.unstable_cancelCallback,
  qc = we.unstable_shouldYield,
  bc = we.unstable_requestPaint,
  Y = we.unstable_now,
  ed = we.unstable_getCurrentPriorityLevel,
  ri = we.unstable_ImmediatePriority,
  Ds = we.unstable_UserBlockingPriority,
  $r = we.unstable_NormalPriority,
  td = we.unstable_LowPriority,
  Rs = we.unstable_IdlePriority,
  ul = null,
  $e = null;
function nd(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : od,
  rd = Math.log,
  ld = Math.LN2;
function od(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rd(e) / ld) | 0)) | 0;
}
var dr = 64,
  fr = 4194304;
function Cn(e) {
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
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Cn(u)) : ((o &= i), o !== 0 && (r = Cn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Cn(i)) : o !== 0 && (r = Cn(o));
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
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function id(e, t) {
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
function ud(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = id(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function go(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Is() {
  var e = dr;
  return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function sd(e, t) {
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
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function li(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Os(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ms,
  oi,
  Fs,
  Us,
  $s,
  yo = !1,
  pr = [],
  ot = null,
  it = null,
  ut = null,
  $n = new Map(),
  An = new Map(),
  tt = [],
  ad =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = nr(t)), t !== null && oi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function cd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = yn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = yn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = yn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return $n.set(o, yn($n.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), An.set(o, yn(An.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function As(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = js(n)), t !== null)) {
          (e.blockedOn = t),
            $s(e.priority, function () {
              Fs(n);
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
function _r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fo = r), n.target.dispatchEvent(r), (fo = null);
    } else return (t = nr(n)), t !== null && oi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tu(e, t, n) {
  _r(e) && n.delete(t);
}
function dd() {
  (yo = !1),
    ot !== null && _r(ot) && (ot = null),
    it !== null && _r(it) && (it = null),
    ut !== null && _r(ut) && (ut = null),
    $n.forEach(tu),
    An.forEach(tu);
}
function vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yo ||
      ((yo = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, dd)));
}
function Vn(e) {
  function t(l) {
    return vn(l, e);
  }
  if (0 < pr.length) {
    vn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && vn(ot, e),
      it !== null && vn(it, e),
      ut !== null && vn(ut, e),
      $n.forEach(t),
      An.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    As(n), n.blockedOn === null && tt.shift();
}
var en = Je.ReactCurrentBatchConfig,
  Vr = !0;
function fd(e, t, n, r) {
  var l = O,
    o = en.transition;
  en.transition = null;
  try {
    (O = 1), ii(e, t, n, r);
  } finally {
    (O = l), (en.transition = o);
  }
}
function pd(e, t, n, r) {
  var l = O,
    o = en.transition;
  en.transition = null;
  try {
    (O = 4), ii(e, t, n, r);
  } finally {
    (O = l), (en.transition = o);
  }
}
function ii(e, t, n, r) {
  if (Vr) {
    var l = vo(e, t, n, r);
    if (l === null) $l(e, t, r, Hr, n), eu(e, r);
    else if (cd(l, e, t, n, r)) r.stopPropagation();
    else if ((eu(e, r), t & 4 && -1 < ad.indexOf(e))) {
      for (; l !== null; ) {
        var o = nr(l);
        if (
          (o !== null && Ms(o),
          (o = vo(e, t, n, r)),
          o === null && $l(e, t, r, Hr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Hr = null;
function vo(e, t, n, r) {
  if (((Hr = null), (e = ni(r)), (e = _t(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = js(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hr = e), null;
}
function Vs(e) {
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
      switch (ed()) {
        case ri:
          return 1;
        case Ds:
          return 4;
        case $r:
        case td:
          return 16;
        case Rs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  ui = null,
  Pr = null;
function Hs() {
  if (Pr) return Pr;
  var e,
    t = ui,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function mr() {
  return !0;
}
function nu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? mr
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = mr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = mr));
      },
      persist: function () {},
      isPersistent: mr,
    }),
    t
  );
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  si = ke(fn),
  tr = Q({}, fn, { view: 0, detail: 0 }),
  md = ke(tr),
  Ll,
  zl,
  xn,
  sl = Q({}, tr, {
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
    getModifierState: ai,
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
        : (e !== xn &&
            (xn && e.type === "mousemove"
              ? ((Ll = e.screenX - xn.screenX), (zl = e.screenY - xn.screenY))
              : (zl = Ll = 0),
            (xn = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  ru = ke(sl),
  hd = Q({}, sl, { dataTransfer: 0 }),
  gd = ke(hd),
  yd = Q({}, tr, { relatedTarget: 0 }),
  Dl = ke(yd),
  vd = Q({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xd = ke(vd),
  wd = Q({}, fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sd = ke(wd),
  kd = Q({}, fn, { data: 0 }),
  lu = ke(kd),
  Ed = {
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
  Nd = {
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
  Cd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _d(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cd[e]) ? !!t[e] : !1;
}
function ai() {
  return _d;
}
var Pd = Q({}, tr, {
    key: function (e) {
      if (e.key) {
        var t = Ed[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nd[e.keyCode] || "Unidentified"
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
    getModifierState: ai,
    charCode: function (e) {
      return e.type === "keypress" ? jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jd = ke(Pd),
  Td = Q({}, sl, {
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
  ou = ke(Td),
  Ld = Q({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ai,
  }),
  zd = ke(Ld),
  Dd = Q({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rd = ke(Dd),
  Id = Q({}, sl, {
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
  Od = ke(Id),
  Md = [9, 13, 27, 32],
  ci = Ge && "CompositionEvent" in window,
  Tn = null;
Ge && "documentMode" in document && (Tn = document.documentMode);
var Fd = Ge && "TextEvent" in window && !Tn,
  Bs = Ge && (!ci || (Tn && 8 < Tn && 11 >= Tn)),
  iu = " ",
  uu = !1;
function Ws(e, t) {
  switch (e) {
    case "keyup":
      return Md.indexOf(t.keyCode) !== -1;
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
function Qs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function Ud(e, t) {
  switch (e) {
    case "compositionend":
      return Qs(t);
    case "keypress":
      return t.which !== 32 ? null : ((uu = !0), iu);
    case "textInput":
      return (e = t.data), e === iu && uu ? null : e;
    default:
      return null;
  }
}
function $d(e, t) {
  if (Vt)
    return e === "compositionend" || (!ci && Ws(e, t))
      ? ((e = Hs()), (Pr = ui = rt = null), (Vt = !1), e)
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
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ad = {
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
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ad[e.type] : t === "textarea";
}
function Ks(e, t, n, r) {
  Es(r),
    (t = Br(t, "onChange")),
    0 < t.length &&
      ((n = new si("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ln = null,
  Hn = null;
function Vd(e) {
  ra(e, 0);
}
function al(e) {
  var t = Wt(e);
  if (gs(t)) return e;
}
function Hd(e, t) {
  if (e === "change") return t;
}
var Gs = !1;
if (Ge) {
  var Rl;
  if (Ge) {
    var Il = "oninput" in document;
    if (!Il) {
      var au = document.createElement("div");
      au.setAttribute("oninput", "return;"),
        (Il = typeof au.oninput == "function");
    }
    Rl = Il;
  } else Rl = !1;
  Gs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function cu() {
  Ln && (Ln.detachEvent("onpropertychange", Ys), (Hn = Ln = null));
}
function Ys(e) {
  if (e.propertyName === "value" && al(Hn)) {
    var t = [];
    Ks(t, Hn, e, ni(e)), Ps(Vd, t);
  }
}
function Bd(e, t, n) {
  e === "focusin"
    ? (cu(), (Ln = t), (Hn = n), Ln.attachEvent("onpropertychange", Ys))
    : e === "focusout" && cu();
}
function Wd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Hn);
}
function Qd(e, t) {
  if (e === "click") return al(t);
}
function Kd(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Gd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Oe = typeof Object.is == "function" ? Object.is : Gd;
function Bn(e, t) {
  if (Oe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bl.call(t, l) || !Oe(e[l], t[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, t) {
  var n = du(e);
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
    n = du(n);
  }
}
function Xs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zs() {
  for (var e = window, t = Mr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Mr(e.document);
  }
  return t;
}
function di(e) {
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
function Yd(e) {
  var t = Zs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && di(n)) {
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
          (l = fu(n, o));
        var i = fu(n, r);
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
var Xd = Ge && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  xo = null,
  zn = null,
  wo = !1;
function pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wo ||
    Ht == null ||
    Ht !== Mr(r) ||
    ((r = Ht),
    "selectionStart" in r && di(r)
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
    (zn && Bn(zn, r)) ||
      ((zn = r),
      (r = Br(xo, "onSelect")),
      0 < r.length &&
        ((t = new si("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function hr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: hr("Animation", "AnimationEnd"),
    animationiteration: hr("Animation", "AnimationIteration"),
    animationstart: hr("Animation", "AnimationStart"),
    transitionend: hr("Transition", "TransitionEnd"),
  },
  Ol = {},
  Js = {};
Ge &&
  ((Js = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function cl(e) {
  if (Ol[e]) return Ol[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Js) return (Ol[e] = t[n]);
  return e;
}
var qs = cl("animationend"),
  bs = cl("animationiteration"),
  ea = cl("animationstart"),
  ta = cl("transitionend"),
  na = new Map(),
  mu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ht(e, t) {
  na.set(e, t), Mt(t, [e]);
}
for (var Ml = 0; Ml < mu.length; Ml++) {
  var Fl = mu[Ml],
    Zd = Fl.toLowerCase(),
    Jd = Fl[0].toUpperCase() + Fl.slice(1);
  ht(Zd, "on" + Jd);
}
ht(qs, "onAnimationEnd");
ht(bs, "onAnimationIteration");
ht(ea, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ta, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _n =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));
function hu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zc(r, t, void 0, e), (e.currentTarget = null);
}
function ra(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          hu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          hu(l, u, c), (o = s);
        }
    }
  }
  if (Ur) throw ((e = ho), (Ur = !1), (ho = null), e);
}
function U(e, t) {
  var n = t[Co];
  n === void 0 && (n = t[Co] = new Set());
  var r = e + "__bubble";
  n.has(r) || (la(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
  var r = 0;
  t && (r |= 4), la(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[gr]) {
    (e[gr] = !0),
      ds.forEach(function (n) {
        n !== "selectionchange" && (qd.has(n) || Ul(n, !1, e), Ul(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || ((t[gr] = !0), Ul("selectionchange", !1, t));
  }
}
function la(e, t, n, r) {
  switch (Vs(t)) {
    case 1:
      var l = fd;
      break;
    case 4:
      l = pd;
      break;
    default:
      l = ii;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !mo ||
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
function $l(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = _t(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ps(function () {
    var c = o,
      h = ni(n),
      g = [];
    e: {
      var m = na.get(e);
      if (m !== void 0) {
        var k = si,
          S = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = jd;
            break;
          case "focusin":
            (S = "focus"), (k = Dl);
            break;
          case "focusout":
            (S = "blur"), (k = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            k = Dl;
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
            k = ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = gd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = zd;
            break;
          case qs:
          case bs:
          case ea:
            k = xd;
            break;
          case ta:
            k = Rd;
            break;
          case "scroll":
            k = md;
            break;
          case "wheel":
            k = Od;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ou;
        }
        var E = (t & 4) !== 0,
          I = !E && e === "scroll",
          d = E ? (m !== null ? m + "Capture" : null) : m;
        E = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Un(a, d)), v != null && E.push(Qn(a, v, f)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < E.length &&
          ((m = new k(m, S, null, n, h)), g.push({ event: m, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          m &&
            n !== fo &&
            (S = n.relatedTarget || n.fromElement) &&
            (_t(S) || S[Ye]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = c),
              (S = S ? _t(S) : null),
              S !== null &&
                ((I = Ft(S)), S !== I || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = c)),
          k !== S)
        ) {
          if (
            ((E = ru),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ou),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (I = k == null ? m : Wt(k)),
            (f = S == null ? m : Wt(S)),
            (m = new E(v, a + "leave", k, n, h)),
            (m.target = I),
            (m.relatedTarget = f),
            (v = null),
            _t(h) === c &&
              ((E = new E(d, a + "enter", S, n, h)),
              (E.target = f),
              (E.relatedTarget = I),
              (v = E)),
            (I = v),
            k && S)
          )
            t: {
              for (E = k, d = S, a = 0, f = E; f; f = Ut(f)) a++;
              for (f = 0, v = d; v; v = Ut(v)) f++;
              for (; 0 < a - f; ) (E = Ut(E)), a--;
              for (; 0 < f - a; ) (d = Ut(d)), f--;
              for (; a--; ) {
                if (E === d || (d !== null && E === d.alternate)) break t;
                (E = Ut(E)), (d = Ut(d));
              }
              E = null;
            }
          else E = null;
          k !== null && gu(g, m, k, E, !1),
            S !== null && I !== null && gu(g, I, S, E, !0);
        }
      }
      e: {
        if (
          ((m = c ? Wt(c) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === "select" || (k === "input" && m.type === "file"))
        )
          var y = Hd;
        else if (su(m))
          if (Gs) y = Kd;
          else {
            y = Wd;
            var C = Bd;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (y = Qd);
        if (y && (y = y(e, c))) {
          Ks(g, y, n, h);
          break e;
        }
        C && C(e, m, c),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            io(m, "number", m.value);
      }
      switch (((C = c ? Wt(c) : window), e)) {
        case "focusin":
          (su(C) || C.contentEditable === "true") &&
            ((Ht = C), (xo = c), (zn = null));
          break;
        case "focusout":
          zn = xo = Ht = null;
          break;
        case "mousedown":
          wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wo = !1), pu(g, n, h);
          break;
        case "selectionchange":
          if (Xd) break;
        case "keydown":
        case "keyup":
          pu(g, n, h);
      }
      var N;
      if (ci)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Vt
          ? Ws(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Bs &&
          n.locale !== "ko" &&
          (Vt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Vt && (N = Hs())
            : ((rt = h),
              (ui = "value" in rt ? rt.value : rt.textContent),
              (Vt = !0))),
        (C = Br(c, j)),
        0 < C.length &&
          ((j = new lu(j, e, null, n, h)),
          g.push({ event: j, listeners: C }),
          N ? (j.data = N) : ((N = Qs(n)), N !== null && (j.data = N)))),
        (N = Fd ? Ud(e, n) : $d(e, n)) &&
          ((c = Br(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new lu("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: c }),
            (h.data = N)));
    }
    ra(g, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Un(e, n)),
      o != null && r.unshift(Qn(e, o, l)),
      (o = Un(e, t)),
      o != null && r.push(Qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Un(n, o)), s != null && i.unshift(Qn(n, s, u)))
        : l || ((s = Un(n, o)), s != null && i.push(Qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bd = /\r\n?/g,
  ef = /\u0000|\uFFFD/g;
function yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bd,
      `
`
    )
    .replace(ef, "");
}
function yr(e, t, n) {
  if (((t = yu(t)), yu(e) !== t && n)) throw Error(x(425));
}
function Wr() {}
var So = null,
  ko = null;
function Eo(e, t) {
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
var No = typeof setTimeout == "function" ? setTimeout : void 0,
  tf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vu = typeof Promise == "function" ? Promise : void 0,
  nf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vu < "u"
      ? function (e) {
          return vu.resolve(null).then(e).catch(rf);
        }
      : No;
function rf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function st(e) {
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
function xu(e) {
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
var pn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + pn,
  Kn = "__reactProps$" + pn,
  Ye = "__reactContainer$" + pn,
  Co = "__reactEvents$" + pn,
  lf = "__reactListeners$" + pn,
  of = "__reactHandles$" + pn;
function _t(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function nr(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function dl(e) {
  return e[Kn] || null;
}
var _o = [],
  Qt = -1;
function gt(e) {
  return { current: e };
}
function $(e) {
  0 > Qt || ((e.current = _o[Qt]), (_o[Qt] = null), Qt--);
}
function F(e, t) {
  Qt++, (_o[Qt] = e.current), (e.current = t);
}
var mt = {},
  ie = gt(mt),
  pe = gt(!1),
  zt = mt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
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
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function Qr() {
  $(pe), $(ie);
}
function wu(e, t, n) {
  if (ie.current !== mt) throw Error(x(168));
  F(ie, t), F(pe, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Bc(e) || "Unknown", l));
  return Q({}, n, r);
}
function Kr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (zt = ie.current),
    F(ie, e),
    F(pe, pe.current),
    !0
  );
}
function Su(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = oa(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(pe),
      $(ie),
      F(ie, e))
    : $(pe),
    F(pe, n);
}
var Be = null,
  fl = !1,
  Vl = !1;
function ia(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function uf(e) {
  (fl = !0), ia(e);
}
function yt() {
  if (!Vl && Be !== null) {
    Vl = !0;
    var e = 0,
      t = O;
    try {
      var n = Be;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (fl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), zs(ri, yt), l);
    } finally {
      (O = t), (Vl = !1);
    }
  }
  return null;
}
var Kt = [],
  Gt = 0,
  Gr = null,
  Yr = 0,
  Ee = [],
  Ne = 0,
  Dt = null,
  We = 1,
  Qe = "";
function Nt(e, t) {
  (Kt[Gt++] = Yr), (Kt[Gt++] = Gr), (Gr = e), (Yr = t);
}
function ua(e, t, n) {
  (Ee[Ne++] = We), (Ee[Ne++] = Qe), (Ee[Ne++] = Dt), (Dt = e);
  var r = We;
  e = Qe;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (We = (1 << o) | (n << l) | r), (Qe = e);
}
function fi(e) {
  e.return !== null && (Nt(e, 1), ua(e, 1, 0));
}
function pi(e) {
  for (; e === Gr; )
    (Gr = Kt[--Gt]), (Kt[Gt] = null), (Yr = Kt[--Gt]), (Kt[Gt] = null);
  for (; e === Dt; )
    (Dt = Ee[--Ne]),
      (Ee[Ne] = null),
      (Qe = Ee[--Ne]),
      (Ee[Ne] = null),
      (We = Ee[--Ne]),
      (Ee[Ne] = null);
}
var xe = null,
  ve = null,
  H = !1,
  De = null;
function sa(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ve = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function jo(e) {
  if (H) {
    var t = ve;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (Po(e)) throw Error(x(418));
        t = st(n.nextSibling);
        var r = xe;
        t && ku(e, t)
          ? sa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e));
      }
    } else {
      if (Po(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function vr(e) {
  if (e !== xe) return !1;
  if (!H) return Eu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Po(e)) throw (aa(), Error(x(418)));
    for (; t; ) sa(e, t), (t = st(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = xe ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function aa() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function on() {
  (ve = xe = null), (H = !1);
}
function mi(e) {
  De === null ? (De = [e]) : De.push(e);
}
var sf = Je.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function ca(e) {
  function t(d, a) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [a]), (d.flags |= 16)) : f.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = ft(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, a, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((d.flags |= 2), a) : f)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, f, v) {
    return a === null || a.tag !== 6
      ? ((a = Yl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function s(d, a, f, v) {
    var y = f.type;
    return y === At
      ? h(d, a, f.props.children, v, f.key)
      : a !== null &&
        (a.elementType === y ||
          (typeof y == "object" &&
            y !== null &&
            y.$$typeof === be &&
            Nu(y) === a.type))
      ? ((v = l(a, f.props)), (v.ref = wn(d, a, f)), (v.return = d), v)
      : ((v = Or(f.type, f.key, f.props, null, d.mode, v)),
        (v.ref = wn(d, a, f)),
        (v.return = d),
        v);
  }
  function c(d, a, f, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Xl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f.children || [])), (a.return = d), a);
  }
  function h(d, a, f, v, y) {
    return a === null || a.tag !== 7
      ? ((a = Lt(f, d.mode, v, y)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function g(d, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, d.mode, f)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case sr:
          return (
            (f = Or(a.type, a.key, a.props, null, d.mode, f)),
            (f.ref = wn(d, null, a)),
            (f.return = d),
            f
          );
        case $t:
          return (a = Xl(a, d.mode, f)), (a.return = d), a;
        case be:
          var v = a._init;
          return g(d, v(a._payload), f);
      }
      if (Nn(a) || hn(a))
        return (a = Lt(a, d.mode, f, null)), (a.return = d), a;
      xr(d, a);
    }
    return null;
  }
  function m(d, a, f, v) {
    var y = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return y !== null ? null : u(d, a, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case sr:
          return f.key === y ? s(d, a, f, v) : null;
        case $t:
          return f.key === y ? c(d, a, f, v) : null;
        case be:
          return (y = f._init), m(d, a, y(f._payload), v);
      }
      if (Nn(f) || hn(f)) return y !== null ? null : h(d, a, f, v, null);
      xr(d, f);
    }
    return null;
  }
  function k(d, a, f, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (d = d.get(f) || null), u(a, d, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case sr:
          return (d = d.get(v.key === null ? f : v.key) || null), s(a, d, v, y);
        case $t:
          return (d = d.get(v.key === null ? f : v.key) || null), c(a, d, v, y);
        case be:
          var C = v._init;
          return k(d, a, f, C(v._payload), y);
      }
      if (Nn(v) || hn(v)) return (d = d.get(f) || null), h(a, d, v, y, null);
      xr(a, v);
    }
    return null;
  }
  function S(d, a, f, v) {
    for (
      var y = null, C = null, N = a, j = (a = 0), A = null;
      N !== null && j < f.length;
      j++
    ) {
      N.index > j ? ((A = N), (N = null)) : (A = N.sibling);
      var L = m(d, N, f[j], v);
      if (L === null) {
        N === null && (N = A);
        break;
      }
      e && N && L.alternate === null && t(d, N),
        (a = o(L, a, j)),
        C === null ? (y = L) : (C.sibling = L),
        (C = L),
        (N = A);
    }
    if (j === f.length) return n(d, N), H && Nt(d, j), y;
    if (N === null) {
      for (; j < f.length; j++)
        (N = g(d, f[j], v)),
          N !== null &&
            ((a = o(N, a, j)), C === null ? (y = N) : (C.sibling = N), (C = N));
      return H && Nt(d, j), y;
    }
    for (N = r(d, N); j < f.length; j++)
      (A = k(N, d, j, f[j], v)),
        A !== null &&
          (e && A.alternate !== null && N.delete(A.key === null ? j : A.key),
          (a = o(A, a, j)),
          C === null ? (y = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        N.forEach(function (ge) {
          return t(d, ge);
        }),
      H && Nt(d, j),
      y
    );
  }
  function E(d, a, f, v) {
    var y = hn(f);
    if (typeof y != "function") throw Error(x(150));
    if (((f = y.call(f)), f == null)) throw Error(x(151));
    for (
      var C = (y = null), N = a, j = (a = 0), A = null, L = f.next();
      N !== null && !L.done;
      j++, L = f.next()
    ) {
      N.index > j ? ((A = N), (N = null)) : (A = N.sibling);
      var ge = m(d, N, L.value, v);
      if (ge === null) {
        N === null && (N = A);
        break;
      }
      e && N && ge.alternate === null && t(d, N),
        (a = o(ge, a, j)),
        C === null ? (y = ge) : (C.sibling = ge),
        (C = ge),
        (N = A);
    }
    if (L.done) return n(d, N), H && Nt(d, j), y;
    if (N === null) {
      for (; !L.done; j++, L = f.next())
        (L = g(d, L.value, v)),
          L !== null &&
            ((a = o(L, a, j)), C === null ? (y = L) : (C.sibling = L), (C = L));
      return H && Nt(d, j), y;
    }
    for (N = r(d, N); !L.done; j++, L = f.next())
      (L = k(N, d, j, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? j : L.key),
          (a = o(L, a, j)),
          C === null ? (y = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        N.forEach(function (vt) {
          return t(d, vt);
        }),
      H && Nt(d, j),
      y
    );
  }
  function I(d, a, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === At &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case sr:
          e: {
            for (var y = f.key, C = a; C !== null; ) {
              if (C.key === y) {
                if (((y = f.type), y === At)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (a = l(C, f.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  C.elementType === y ||
                  (typeof y == "object" &&
                    y !== null &&
                    y.$$typeof === be &&
                    Nu(y) === C.type)
                ) {
                  n(d, C.sibling),
                    (a = l(C, f.props)),
                    (a.ref = wn(d, C, f)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            f.type === At
              ? ((a = Lt(f.props.children, d.mode, v, f.key)),
                (a.return = d),
                (d = a))
              : ((v = Or(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = wn(d, a, f)),
                (v.return = d),
                (d = v));
          }
          return i(d);
        case $t:
          e: {
            for (C = f.key; a !== null; ) {
              if (a.key === C)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = Xl(f, d.mode, v)), (a.return = d), (d = a);
          }
          return i(d);
        case be:
          return (C = f._init), I(d, a, C(f._payload), v);
      }
      if (Nn(f)) return S(d, a, f, v);
      if (hn(f)) return E(d, a, f, v);
      xr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
          : (n(d, a), (a = Yl(f, d.mode, v)), (a.return = d), (d = a)),
        i(d))
      : n(d, a);
  }
  return I;
}
var un = ca(!0),
  da = ca(!1),
  Xr = gt(null),
  Zr = null,
  Yt = null,
  hi = null;
function gi() {
  hi = Yt = Zr = null;
}
function yi(e) {
  var t = Xr.current;
  $(Xr), (e._currentValue = t);
}
function To(e, t, n) {
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
function tn(e, t) {
  (Zr = e),
    (hi = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (hi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (Zr === null) throw Error(x(308));
      (Yt = e), (Zr.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Pt = null;
function vi(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function fa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), vi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
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
var et = !1;
function xi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pa(e, t) {
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
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), vi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Tr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
  }
}
function Cu(e, t) {
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
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var m = u.lane,
        k = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            E = u;
          switch (((m = t), (k = n), E.tag)) {
            case 1:
              if (((S = E.payload), typeof S == "function")) {
                g = S.call(k, g, m);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = E.payload),
                (m = typeof S == "function" ? S.call(k, g, m) : S),
                m == null)
              )
                break e;
              g = Q({}, g, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = k), (s = g)) : (h = h.next = k),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = g),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (It |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var rr = {},
  Ae = gt(rr),
  Gn = gt(rr),
  Yn = gt(rr);
function jt(e) {
  if (e === rr) throw Error(x(174));
  return e;
}
function wi(e, t) {
  switch ((F(Yn, t), F(Gn, e), F(Ae, rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = so(t, e));
  }
  $(Ae), F(Ae, t);
}
function sn() {
  $(Ae), $(Gn), $(Yn);
}
function ma(e) {
  jt(Yn.current);
  var t = jt(Ae.current),
    n = so(t, e.type);
  t !== n && (F(Gn, e), F(Ae, n));
}
function Si(e) {
  Gn.current === e && ($(Ae), $(Gn));
}
var B = gt(0);
function qr(e) {
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
var Hl = [];
function ki() {
  for (var e = 0; e < Hl.length; e++)
    Hl[e]._workInProgressVersionPrimary = null;
  Hl.length = 0;
}
var Lr = Je.ReactCurrentDispatcher,
  Bl = Je.ReactCurrentBatchConfig,
  Rt = 0,
  W = null,
  Z = null,
  q = null,
  br = !1,
  Dn = !1,
  Xn = 0,
  af = 0;
function re() {
  throw Error(x(321));
}
function Ei(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Oe(e[n], t[n])) return !1;
  return !0;
}
function Ni(e, t, n, r, l, o) {
  if (
    ((Rt = o),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Lr.current = e === null || e.memoizedState === null ? pf : mf),
    (e = n(r, l)),
    Dn)
  ) {
    o = 0;
    do {
      if (((Dn = !1), (Xn = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (q = Z = null),
        (t.updateQueue = null),
        (Lr.current = hf),
        (e = n(r, l));
    } while (Dn);
  }
  if (
    ((Lr.current = el),
    (t = Z !== null && Z.next !== null),
    (Rt = 0),
    (q = Z = W = null),
    (br = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Ci() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (W.memoizedState = q = e) : (q = q.next = e), q;
}
function je() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = q === null ? W.memoizedState : q.next;
  if (t !== null) (q = t), (Z = e);
  else {
    if (e === null) throw Error(x(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      q === null ? (W.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = Z,
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
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Rt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = g), (i = r)) : (s = s.next = g),
          (W.lanes |= h),
          (It |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Oe(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (W.lanes |= o), (It |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Oe(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ha() {}
function ga(e, t) {
  var n = W,
    r = je(),
    l = t(),
    o = !Oe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    _i(xa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, va.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(x(349));
    Rt & 30 || ya(n, t, l);
  }
  return l;
}
function ya(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function va(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wa(t) && Sa(e);
}
function xa(e, t, n) {
  return n(function () {
    wa(t) && Sa(e);
  });
}
function wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Oe(e, n);
  } catch {
    return !0;
  }
}
function Sa(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Pu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ff.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ka() {
  return je().memoizedState;
}
function zr(e, t, n, r) {
  var l = Fe();
  (W.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((o = i.destroy), r !== null && Ei(r, i.deps))) {
      l.memoizedState = Jn(t, n, o, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = Jn(1 | t, n, o, r));
}
function ju(e, t) {
  return zr(8390656, 8, e, t);
}
function _i(e, t) {
  return pl(2048, 8, e, t);
}
function Ea(e, t) {
  return pl(4, 2, e, t);
}
function Na(e, t) {
  return pl(4, 4, e, t);
}
function Ca(e, t) {
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
function _a(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, Ca.bind(null, t, e), n)
  );
}
function Pi() {}
function Pa(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ja(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ei(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ta(e, t, n) {
  return Rt & 21
    ? (Oe(n, t) || ((n = Is()), (W.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function cf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Bl.transition = r);
  }
}
function La() {
  return je().memoizedState;
}
function df(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    za(e))
  )
    Da(t, n);
  else if (((n = fa(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), Ra(n, t, r);
  }
}
function ff(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) Da(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), vi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = fa(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), Ra(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Da(e, t) {
  Dn = br = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), li(e, n);
  }
}
var el = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  pf = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zr(4194308, 4, Ca.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
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
        (e = e.dispatch = df.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Pu,
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Pu(!1),
        t = e[0];
      return (e = cf.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = Fe();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(x(349));
        Rt & 30 || ya(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ju(xa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Jn(9, va.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if (H) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = af++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mf = {
    readContext: Pe,
    useCallback: Pa,
    useContext: Pe,
    useEffect: _i,
    useImperativeHandle: _a,
    useInsertionEffect: Ea,
    useLayoutEffect: Na,
    useMemo: ja,
    useReducer: Wl,
    useRef: ka,
    useState: function () {
      return Wl(Zn);
    },
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      var t = je();
      return Ta(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Zn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: ha,
    useSyncExternalStore: ga,
    useId: La,
    unstable_isNewReconciler: !1,
  },
  hf = {
    readContext: Pe,
    useCallback: Pa,
    useContext: Pe,
    useEffect: _i,
    useImperativeHandle: _a,
    useInsertionEffect: Ea,
    useLayoutEffect: Na,
    useMemo: ja,
    useReducer: Ql,
    useRef: ka,
    useState: function () {
      return Ql(Zn);
    },
    useDebugValue: Pi,
    useDeferredValue: function (e) {
      var t = je();
      return Z === null ? (t.memoizedState = e) : Ta(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Zn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: ha,
    useSyncExternalStore: ga,
    useId: La,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Lo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = at(e, o, l)),
      t !== null && (Ie(t, e, l, r), Tr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Tr(t, e, r));
  },
};
function Tu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bn(n, r) || !Bn(l, o)
      : !0
  );
}
function Ia(e, t, n) {
  var r = !1,
    l = mt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((l = me(t) ? zt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ln(e, l) : mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function zo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), xi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Pe(o))
    : ((o = me(t) ? zt : ie.current), (l.context = ln(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Lo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ml.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hc(r)), (r = r.return);
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
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Do(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gf = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Ho = r)), Do(e, t);
    }),
    n
  );
}
function Ma(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Do(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Do(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Lf.bind(null, e, t, n)), t.then(e, e));
}
function Du(e) {
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
function Ru(e, t, n, r, l) {
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
              : ((t = Ke(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yf = Je.ReactCurrentOwner,
  fe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? da(t, null, n, r) : un(t, e.child, n, r);
}
function Iu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    tn(t, l),
    (r = Ni(e, t, n, r, o, l)),
    (n = Ci()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (H && n && fi(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Ou(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Oi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Fa(e, t, o, r, l))
      : ((e = Or(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bn), n(i, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Bn(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Ro(e, t, n, r, l);
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Zt, ye),
        (ye |= n);
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
          F(Zt, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(Zt, ye),
        (ye |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Zt, ye),
      (ye |= r);
  return ue(e, t, l, n), t.child;
}
function $a(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ro(e, t, n, r, l) {
  var o = me(n) ? zt : ie.current;
  return (
    (o = ln(t, o)),
    tn(t, l),
    (n = Ni(e, t, n, r, o, l)),
    (r = Ci()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : (H && r && fi(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Mu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Kr(t);
  } else o = !1;
  if ((tn(t, l), t.stateNode === null))
    Dr(e, t), Ia(t, n, r), zo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = me(n) ? zt : ie.current), (c = ln(t, c)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Lu(t, i, r, c)),
      (et = !1);
    var m = t.memoizedState;
    (i.state = m),
      Jr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || et
        ? (typeof h == "function" && (Lo(t, n, h, r), (s = t.memoizedState)),
          (u = et || Tu(t, n, u, r, m, s, c))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      pa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = me(n) ? zt : ie.current), (s = ln(t, s)));
    var k = n.getDerivedStateFromProps;
    (h =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== g || m !== s) && Lu(t, i, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (i.state = m),
      Jr(t, r, i, l);
    var S = t.memoizedState;
    u !== g || m !== S || pe.current || et
      ? (typeof k == "function" && (Lo(t, n, k, r), (S = t.memoizedState)),
        (c = et || Tu(t, n, c, r, m, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Io(e, t, n, r, o, l);
}
function Io(e, t, n, r, l, o) {
  $a(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Su(t, n, !1), Ze(e, t, o);
  (r = t.stateNode), (yf.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = un(t, e.child, null, o)), (t.child = un(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Su(t, n, !0),
    t.child
  );
}
function Aa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wu(e, t.context, !1),
    wi(e, t.containerInfo);
}
function Fu(e, t, n, r, l) {
  return on(), mi(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
  )
    return (
      jo(t),
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
                : (o = yl(i, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Mo(n)),
              (t.memoizedState = Oo),
              e)
            : ji(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return vf(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ft(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ft(u, o)) : ((o = Lt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Mo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ft(o, { mode: "visible", children: r.children })),
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
function ji(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wr(e, t, n, r) {
  return (
    r !== null && mi(r),
    un(t, e.child, null, n),
    (e = ji(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(x(422)))), wr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Lt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, i),
        (t.child.memoizedState = Mo(i)),
        (t.memoizedState = Oo),
        o);
  if (!(t.mode & 1)) return wr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = Kl(o, r, void 0)), wr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = b), r !== null)) {
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
          ((o.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Ii(), (r = Kl(Error(x(421)))), wr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = zf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = st(l.nextSibling)),
      (xe = t),
      (H = !0),
      (De = null),
      e !== null &&
        ((Ee[Ne++] = We),
        (Ee[Ne++] = Qe),
        (Ee[Ne++] = Dt),
        (We = e.id),
        (Qe = e.overflow),
        (Dt = t)),
      (t = ji(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), To(e.return, t, n);
}
function Gl(e, t, n, r, l) {
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
function Ha(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uu(e, n, t);
        else if (e.tag === 19) Uu(e, n, t);
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
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && qr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Gl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && qr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Gl(t, !0, n, null, o);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xf(e, t, n) {
  switch (t.tag) {
    case 3:
      Aa(t), on();
      break;
    case 5:
      ma(t);
      break;
    case 1:
      me(t.type) && Kr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Va(e, t, n)
          : (F(B, B.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ha(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ua(e, t, n);
  }
  return Ze(e, t, n);
}
var Ba, Fo, Wa, Qa;
Ba = function (e, t) {
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
Fo = function () {};
Wa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), jt(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = uo(e, l)), (r = uo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wr);
    }
    ao(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Qa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!H)
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
function le(e) {
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
function wf(e, t, n) {
  var r = t.pendingProps;
  switch ((pi(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return me(t.type) && Qr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        $(pe),
        $(ie),
        ki(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Qo(De), (De = null)))),
        Fo(e, t),
        le(t),
        null
      );
    case 5:
      Si(t);
      var l = jt(Yn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (((e = jt(Ae.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[Kn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < _n.length; l++) U(_n[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Gi(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Xi(r, o), U("invalid", r);
          }
          ao(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Mn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              ar(r), Yi(r, o, !0);
              break;
            case "textarea":
              ar(r), Zi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xs(n)),
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
            (e[Ue] = t),
            (e[Kn] = r),
            Ba(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = co(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < _n.length; l++) U(_n[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Gi(e, r), (l = lo(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Xi(e, r), (l = uo(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            ao(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ks(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ws(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fn(e, s)
                    : typeof s == "number" && Fn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Mn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && qo(e, o, s, i));
              }
            switch (n) {
              case "input":
                ar(e), Yi(e, r, !1);
                break;
              case "textarea":
                ar(e), Zi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Jt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Qa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = jt(Yn.current)), jt(Ae.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        ($(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && ve !== null && t.mode & 1 && !(t.flags & 128))
          aa(), on(), (t.flags |= 98560), (o = !1);
        else if (((o = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[Ue] = t;
          } else
            on(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else De !== null && (Qo(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : Ii())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        sn(), Fo(e, t), e === null && Wn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return yi(t.type._context), le(t), null;
    case 17:
      return me(t.type) && Qr(), le(t), null;
    case 19:
      if (($(B), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Sn(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = qr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sn(o, !1),
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
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > cn &&
            ((t.flags |= 128), (r = !0), Sn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !H)
            )
              return le(t), null;
          } else
            2 * Y() - o.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Ri(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Sf(e, t) {
  switch ((pi(t), t.tag)) {
    case 1:
      return (
        me(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        $(pe),
        $(ie),
        ki(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Si(t), null;
    case 13:
      if (($(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(B), null;
    case 4:
      return sn(), null;
    case 10:
      return yi(t.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1,
  oe = !1,
  kf = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Uo(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var $u = !1;
function Ef(e, t) {
  if (((So = Vr), (e = Zs()), di(e))) {
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
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              g !== n || (l !== 0 && g.nodeType !== 3) || (u = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (k = g.firstChild) !== null;

            )
              (m = g), (g = k);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === l && (u = i),
                m === o && ++h === r && (s = i),
                (k = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = k;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ko = { focusedElem: e, selectionRange: n }, Vr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var E = S.memoizedProps,
                    I = S.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Le(t.type, E),
                      I
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (v) {
          G(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = $u), ($u = !1), S;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Uo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
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
function $o(e) {
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
function Ka(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ka(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Kn], delete t[Co], delete t[lf], delete t[of])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ga(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Au(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ga(e.return)) return null;
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
function Ao(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ao(e, t, n), e = e.sibling; e !== null; ) Ao(e, t, n), (e = e.sibling);
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), (n = n.sibling);
}
function Ya(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ul, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Xt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Vn(e))
          : Al(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        qe(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Uo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Xt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), qe(e, t, n), (oe = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Vu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kf()),
      t.forEach(function (r) {
        var l = Df.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(x(160));
        Ya(o, i, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        G(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xa(t, e), (t = t.sibling);
}
function Xa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Me(e), r & 4)) {
        try {
          Rn(3, e, e.return), hl(3, e);
        } catch (E) {
          G(e, e.return, E);
        }
        try {
          Rn(5, e, e.return);
        } catch (E) {
          G(e, e.return, E);
        }
      }
      break;
    case 1:
      Te(t, e), Me(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Me(e),
        r & 512 && n !== null && Xt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (E) {
          G(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ys(l, o),
              co(u, i);
            var c = co(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                g = s[i + 1];
              h === "style"
                ? ks(l, g)
                : h === "dangerouslySetInnerHTML"
                ? ws(l, g)
                : h === "children"
                ? Fn(l, g)
                : qo(l, h, g, c);
            }
            switch (u) {
              case "input":
                oo(l, o);
                break;
              case "textarea":
                vs(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? Jt(l, !!o.multiple, k, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Jt(l, !!o.multiple, o.defaultValue, !0)
                      : Jt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Kn] = o;
          } catch (E) {
            G(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (E) {
          G(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Me(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (E) {
          G(e, e.return, E);
        }
      break;
    case 4:
      Te(t, e), Me(e);
      break;
    case 13:
      Te(t, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zi = Y())),
        r & 4 && Vu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (c = oe) || h), Te(t, e), (oe = c)) : Te(t, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (g = _ = h; _ !== null; ) {
              switch (((m = _), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, m, m.return);
                  break;
                case 1:
                  Xt(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (E) {
                      G(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Xt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Bu(g);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (_ = k)) : Bu(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                (l = g.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = g.stateNode),
                      (s = g.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ss("display", i)));
              } catch (E) {
                G(e, e.return, E);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (E) {
                G(e, e.return, E);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), (g = g.return);
          }
          h === g && (h = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Me(e), r & 4 && Vu(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Me(e);
  }
}
function Me(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ga(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var o = Au(e);
          Vo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Au(e);
          Ao(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nf(e, t, n) {
  (_ = e), Za(e);
}
function Za(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Sr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || oe;
        u = Sr;
        var c = oe;
        if (((Sr = i), (oe = s) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Wu(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : Wu(l);
        for (; o !== null; ) (_ = o), Za(o), (o = o.sibling);
        (_ = l), (Sr = u), (oe = c);
      }
      Hu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Hu(e);
  }
}
function Hu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && _u(t, o, r);
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
                _u(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var h = c.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && Vn(g);
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
              throw Error(x(163));
          }
        oe || (t.flags & 512 && $o(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Bu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Wu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            $o(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $o(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Cf = Math.ceil,
  tl = Je.ReactCurrentDispatcher,
  Ti = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  R = 0,
  b = null,
  X = null,
  te = 0,
  ye = 0,
  Zt = gt(0),
  J = 0,
  qn = null,
  It = 0,
  gl = 0,
  Li = 0,
  In = null,
  de = null,
  zi = 0,
  cn = 1 / 0,
  He = null,
  nl = !1,
  Ho = null,
  ct = null,
  kr = !1,
  lt = null,
  rl = 0,
  On = 0,
  Bo = null,
  Rr = -1,
  Ir = 0;
function se() {
  return R & 6 ? Y() : Rr !== -1 ? Rr : (Rr = Y());
}
function dt(e) {
  return e.mode & 1
    ? R & 2 && te !== 0
      ? te & -te
      : sf.transition !== null
      ? (Ir === 0 && (Ir = Is()), Ir)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < On) throw ((On = 0), (Bo = null), Error(x(185)));
  er(e, n, r),
    (!(R & 2) || e !== b) &&
      (e === b && (!(R & 2) && (gl |= n), J === 4 && nt(e, te)),
      he(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((cn = Y() + 500), fl && yt()));
}
function he(e, t) {
  var n = e.callbackNode;
  ud(e, t);
  var r = Ar(e, e === b ? te : 0);
  if (r === 0)
    n !== null && bi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bi(n), t === 1))
      e.tag === 0 ? uf(Qu.bind(null, e)) : ia(Qu.bind(null, e)),
        nf(function () {
          !(R & 6) && yt();
        }),
        (n = null);
    else {
      switch (Os(r)) {
        case 1:
          n = ri;
          break;
        case 4:
          n = Ds;
          break;
        case 16:
          n = $r;
          break;
        case 536870912:
          n = Rs;
          break;
        default:
          n = $r;
      }
      n = lc(n, Ja.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ja(e, t) {
  if (((Rr = -1), (Ir = 0), R & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Ar(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = ba();
    (b !== e || te !== t) && ((He = null), (cn = Y() + 500), Tt(e, t));
    do
      try {
        jf();
        break;
      } catch (u) {
        qa(e, u);
      }
    while (!0);
    gi(),
      (tl.current = o),
      (R = l),
      X !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = go(e)), l !== 0 && ((r = l), (t = Wo(e, l)))), t === 1)
    )
      throw ((n = qn), Tt(e, 0), nt(e, r), he(e, Y()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !_f(l) &&
          ((t = ll(e, r)),
          t === 2 && ((o = go(e)), o !== 0 && ((r = o), (t = Wo(e, o)))),
          t === 1))
      )
        throw ((n = qn), Tt(e, 0), nt(e, r), he(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ct(e, de, He);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = zi + 500 - Y()), 10 < t))
          ) {
            if (Ar(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = No(Ct.bind(null, e, de, He), t);
            break;
          }
          Ct(e, de, He);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
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
                : 1960 * Cf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = No(Ct.bind(null, e, de, He), r);
            break;
          }
          Ct(e, de, He);
          break;
        case 5:
          Ct(e, de, He);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return he(e, Y()), e.callbackNode === n ? Ja.bind(null, e) : null;
}
function Wo(e, t) {
  var n = In;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = ll(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && Qo(t)),
    e
  );
}
function Qo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function _f(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(o(), l)) return !1;
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
function nt(e, t) {
  for (
    t &= ~Li,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qu(e) {
  if (R & 6) throw Error(x(327));
  nn();
  var t = Ar(e, 0);
  if (!(t & 1)) return he(e, Y()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = go(e);
    r !== 0 && ((t = r), (n = Wo(e, r)));
  }
  if (n === 1) throw ((n = qn), Tt(e, 0), nt(e, t), he(e, Y()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, de, He),
    he(e, Y()),
    null
  );
}
function Di(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((cn = Y() + 500), fl && yt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(R & 6) && nn();
  var t = R;
  R |= 1;
  var n = _e.transition,
    r = O;
  try {
    if (((_e.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (_e.transition = n), (R = t), !(R & 6) && yt();
  }
}
function Ri() {
  (ye = Zt.current), $(Zt);
}
function Tt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tf(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((pi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qr();
          break;
        case 3:
          sn(), $(pe), $(ie), ki();
          break;
        case 5:
          Si(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          $(B);
          break;
        case 19:
          $(B);
          break;
        case 10:
          yi(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (X = e = ft(e.current, null)),
    (te = ye = t),
    (J = 0),
    (qn = null),
    (Li = gl = It = 0),
    (de = In = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function qa(e, t) {
  do {
    var n = X;
    try {
      if ((gi(), (Lr.current = el), br)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Rt = 0),
        (q = Z = W = null),
        (Dn = !1),
        (Xn = 0),
        (Ti.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (qn = t), (X = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var k = Du(i);
          if (k !== null) {
            (k.flags &= -257),
              Ru(k, i, u, o, t),
              k.mode & 1 && zu(o, c, t),
              (t = k),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zu(o, c, t), Ii();
              break e;
            }
            s = Error(x(426));
          }
        } else if (H && u.mode & 1) {
          var I = Du(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Ru(I, i, u, o, t),
              mi(an(s, u));
            break e;
          }
        }
        (o = s = an(s, u)),
          J !== 4 && (J = 2),
          In === null ? (In = [o]) : In.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Oa(o, s, t);
              Cu(o, d);
              break e;
            case 1:
              u = s;
              var a = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (ct === null || !ct.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ma(o, u, t);
                Cu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tc(n);
    } catch (y) {
      (t = y), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ba() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Ii() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(It & 268435455) && !(gl & 268435455)) || nt(b, te);
}
function ll(e, t) {
  var n = R;
  R |= 2;
  var r = ba();
  (b !== e || te !== t) && ((He = null), Tt(e, t));
  do
    try {
      Pf();
      break;
    } catch (l) {
      qa(e, l);
    }
  while (!0);
  if ((gi(), (R = n), (tl.current = r), X !== null)) throw Error(x(261));
  return (b = null), (te = 0), J;
}
function Pf() {
  for (; X !== null; ) ec(X);
}
function jf() {
  for (; X !== null && !qc(); ) ec(X);
}
function ec(e) {
  var t = rc(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? tc(e) : (X = t),
    (Ti.current = null);
}
function tc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sf(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (X = null);
        return;
      }
    } else if (((n = wf(n, t, ye)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Ct(e, t, n) {
  var r = O,
    l = _e.transition;
  try {
    (_e.transition = null), (O = 1), Tf(e, t, n, r);
  } finally {
    (_e.transition = l), (O = r);
  }
  return null;
}
function Tf(e, t, n, r) {
  do nn();
  while (lt !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (sd(e, o),
    e === b && ((X = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      kr ||
      ((kr = !0),
      lc($r, function () {
        return nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = O;
    O = 1;
    var u = R;
    (R |= 4),
      (Ti.current = null),
      Ef(e, n),
      Xa(n, e),
      Yd(ko),
      (Vr = !!So),
      (ko = So = null),
      (e.current = n),
      Nf(n),
      bc(),
      (R = u),
      (O = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (kr && ((kr = !1), (lt = e), (rl = l)),
    (o = e.pendingLanes),
    o === 0 && (ct = null),
    nd(n.stateNode),
    he(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw ((nl = !1), (e = Ho), (Ho = null), e);
  return (
    rl & 1 && e.tag !== 0 && nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Bo ? On++ : ((On = 0), (Bo = e))) : (On = 0),
    yt(),
    null
  );
}
function nn() {
  if (lt !== null) {
    var e = Os(rl),
      t = _e.transition,
      n = O;
    try {
      if (((_e.transition = null), (O = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (rl = 0), R & 6)) throw Error(x(331));
        var l = R;
        for (R |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (_ = g);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling,
                        k = h.return;
                      if ((Ka(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (_ = m);
                        break;
                      }
                      _ = k;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var E = S.child;
                if (E !== null) {
                  S.child = null;
                  do {
                    var I = E.sibling;
                    (E.sibling = null), (E = I);
                  } while (E !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (_ = d);
                break e;
              }
              _ = o.return;
            }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          i = _;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (_ = f);
          else
            e: for (i = a; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, u);
                  }
                } catch (y) {
                  G(u, u.return, y);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (_ = v);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((R = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ul, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (_e.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = an(n, t)),
    (t = Oa(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (er(e, 1, t), he(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = an(n, e)),
            (e = Ma(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (er(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > Y() - zi)
        ? Tt(e, 0)
        : (Li |= n)),
    he(e, t);
}
function nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fr), (fr <<= 1), !(fr & 130023424) && (fr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (er(e, t, n), he(e, n));
}
function zf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nc(e, n);
}
function Df(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), nc(e, n);
}
var rc;
rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), xf(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), H && t.flags & 1048576 && ua(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dr(e, t), (e = t.pendingProps);
      var l = ln(t, ie.current);
      tn(t, n), (l = Ni(null, t, r, e, l, n));
      var o = Ci();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), Kr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            xi(t),
            (l.updater = ml),
            (t.stateNode = l),
            (l._reactInternals = t),
            zo(t, r, e, n),
            (t = Io(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && fi(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = If(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Ro(null, t, r, e, n);
            break e;
          case 1:
            t = Mu(null, t, r, e, n);
            break e;
          case 11:
            t = Iu(null, t, r, e, n);
            break e;
          case 14:
            t = Ou(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ro(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Mu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Aa(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          pa(e, t),
          Jr(t, r, null, n);
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
            (l = an(Error(x(423)), t)), (t = Fu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(x(424)), t)), (t = Fu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = st(t.stateNode.containerInfo.firstChild),
                xe = t,
                H = !0,
                De = null,
                n = da(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ma(t),
        e === null && jo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Eo(r, l) ? (i = null) : o !== null && Eo(r, o) && (t.flags |= 32),
        $a(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && jo(t), null;
    case 13:
      return Va(e, t, n);
    case 4:
      return (
        wi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Iu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          F(Xr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Oe(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      To(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  To(i, n, t),
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
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Ou(e, t, r, l, n)
      );
    case 15:
      return Fa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Dr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), Kr(t)) : (e = !1),
        tn(t, n),
        Ia(t, r, l),
        zo(t, r, l, n),
        Io(null, t, r, !0, e, n)
      );
    case 19:
      return Ha(e, t, n);
    case 22:
      return Ua(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function lc(e, t) {
  return zs(e, t);
}
function Rf(e, t, n, r) {
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
function Ce(e, t, n, r) {
  return new Rf(e, t, n, r);
}
function Oi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function If(e) {
  if (typeof e == "function") return Oi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ei)) return 11;
    if (e === ti) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
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
function Or(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Oi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case At:
        return Lt(n.children, l, o, t);
      case bo:
        (i = 8), (l |= 8);
        break;
      case eo:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = eo), (e.lanes = o), e
        );
      case to:
        return (e = Ce(13, n, t, l)), (e.elementType = to), (e.lanes = o), e;
      case no:
        return (e = Ce(19, n, t, l)), (e.elementType = no), (e.lanes = o), e;
      case ms:
        return yl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fs:
              i = 10;
              break e;
            case ps:
              i = 9;
              break e;
            case ei:
              i = 11;
              break e;
            case ti:
              i = 14;
              break e;
            case be:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function yl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Of(e, t, n, r, l) {
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
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Of(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xi(o),
    e
  );
}
function Mf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function oc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return oa(e, n, t);
  }
  return t;
}
function ic(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Mi(n, r, !0, e, l, o, i, u, s)),
    (e.context = oc(null)),
    (n = e.current),
    (r = se()),
    (l = dt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    at(n, o, l),
    (e.current.lanes = l),
    er(e, l, r),
    he(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = dt(l);
  return (
    (n = oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, i)),
    e !== null && (Ie(e, l, i, o), Tr(e, l, i)),
    i
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fi(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t);
}
function Ff() {
  return null;
}
var uc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ui(e) {
  this._internalRoot = e;
}
xl.prototype.render = Ui.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  vl(e, t, null, null);
};
xl.prototype.unmount = Ui.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      vl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Us();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && As(e);
  }
};
function $i(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function Uf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = ol(i);
        o.call(c);
      };
    }
    var i = ic(t, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = i),
      (e[Ye] = i.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ol(s);
      u.call(c);
    };
  }
  var s = Mi(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function Sl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ol(i);
        u.call(s);
      };
    }
    vl(t, i, e, l);
  } else i = Uf(n, t, e, l, r);
  return ol(i);
}
Ms = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cn(t.pendingLanes);
        n !== 0 &&
          (li(t, n | 1), he(t, Y()), !(R & 6) && ((cn = Y() + 500), yt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Fi(e, 1);
  }
};
oi = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Fi(e, 134217728);
  }
};
Fs = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Fi(e, t);
  }
};
Us = function () {
  return O;
};
$s = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
po = function (e, t, n) {
  switch (t) {
    case "input":
      if ((oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = dl(r);
            if (!l) throw Error(x(90));
            gs(r), oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      vs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jt(e, !!n.multiple, t, !1);
  }
};
Cs = Di;
_s = Ot;
var $f = { usingClientEntryPoint: !1, Events: [nr, Wt, dl, Es, Ns, Di] },
  kn = {
    findFiberByHostInstance: _t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Af = {
    bundleType: kn.bundleType,
    version: kn.version,
    rendererPackageName: kn.rendererPackageName,
    rendererConfig: kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kn.findFiberByHostInstance || Ff,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber)
    try {
      (ul = Er.inject(Af)), ($e = Er);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$i(t)) throw Error(x(200));
  return Mf(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!$i(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = uc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Mi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Ui(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Ot(e);
};
Se.hydrate = function (e, t, n) {
  if (!wl(t)) throw Error(x(200));
  return Sl(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!$i(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = uc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ic(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ye] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new xl(t);
};
Se.render = function (e, t, n) {
  if (!wl(t)) throw Error(x(200));
  return Sl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!wl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Di;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Sl(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function sc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc);
    } catch (e) {
      console.error(e);
    }
}
sc(), (ss.exports = Se);
var Vf = ss.exports,
  ac,
  Xu = Vf;
(ac = Xu.createRoot), Xu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hf = {
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
 */ const Bf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ve = (e, t) => {
    const n = D.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          ...c
        },
        h
      ) =>
        D.createElement(
          "svg",
          {
            ref: h,
            ...Hf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Bf(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([g, m]) => D.createElement(g, m)),
            ...(Array.isArray(s) ? s : [s]),
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
 */ const cc = Ve("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dc = Ve("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = Ve("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = Ve("FileX", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m14.5 12.5-5 5", key: "b62r18" }],
  ["path", { d: "m9.5 12.5 5 5", key: "1rk7el" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = Ve("Globe", [
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
 */ const Gf = Ve("Layers", [
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
 */ const Yf = Ve("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = Ve("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zu = Ve("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = Ve("Table", [
    ["path", { d: "M12 3v18", key: "108xh3" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
  ]),
  fc = D.forwardRef(
    ({ stations: e, selectedStations: t, onChange: n, translations: r }, l) => {
      const [o, i] = D.useState(!0);
      D.useImperativeHandle(l, () => ({ collapse: () => i(!1) }));
      const u = (c) => {
          const h = t.includes(c) ? t.filter((g) => g !== c) : [...t, c];
          n(h);
        },
        s = () => {
          n(t.length === e.length ? [] : e.map((c) => c.name));
        };
      return p.jsxs("div", {
        className: "bg-white rounded-lg border shadow-sm",
        children: [
          p.jsxs("div", {
            className:
              "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors rounded-t-lg",
            onClick: () => i(!o),
            children: [
              p.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  p.jsx(Zf, { className: "w-5 h-5 text-gray-600" }),
                  p.jsxs("h2", {
                    className: "text-xl font-bold text-gray-900",
                    children: [
                      r.dispensingStations,
                      t.length === 0 &&
                        p.jsxs("span", {
                          className: "ml-2 text-sm text-gray-700 font-normal",
                          children: ["(", r.pleaseSelect, ")"],
                        }),
                      t.length > 0 &&
                        p.jsxs("span", {
                          className: "ml-2 text-sm text-gray-700 font-normal",
                          children: [
                            "(",
                            r.selected,
                            ": ",
                            t.length,
                            " ",
                            r.stations,
                            ")",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              p.jsx("div", {
                className: "flex items-center space-x-2",
                children: o
                  ? p.jsx(dc, {
                      className:
                        "w-5 h-5 text-gray-400 transition-transform duration-200",
                    })
                  : p.jsx(cc, {
                      className:
                        "w-5 h-5 text-gray-400 transition-transform duration-200",
                    }),
              }),
            ],
          }),
          p.jsx("div", {
            className: `overflow-hidden transition-all duration-300 ease-in-out ${
              o ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`,
            children: p.jsxs("div", {
              className: "px-6 pb-6 border-t border-gray-100",
              children: [
                p.jsx("div", {
                  className: "flex items-center justify-end mb-4 pt-4",
                  children: p.jsx("button", {
                    onClick: s,
                    className:
                      "px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    children:
                      t.length === e.length ? r.deselectAll : r.selectAll,
                  }),
                }),
                p.jsx("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4",
                  children: e.map((c) => {
                    const h = t.includes(c.name);
                    return p.jsxs(
                      "label",
                      {
                        className: `
                      relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center
                      ${
                        h
                          ? "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600"
                          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                      }
                    `,
                        children: [
                          p.jsx("div", {
                            className: `
                    absolute rounded-xl top-1/2 left-1/2 w-[calc(100%+10px)] h-[calc(100%+10px)] transform -translate-x-1/2 -translate-y-1/2
                    ${h ? "border-2 border-blue-600" : ""}`,
                          }),
                          p.jsx("input", {
                            type: "checkbox",
                            checked: h,
                            onChange: () => u(c.name),
                            className: "sr-only",
                          }),
                          p.jsx("span", { children: c.name }),
                        ],
                      },
                      c.GUID
                    );
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
  );
fc.displayName = "DispensingStationSelect";
const pc = D.forwardRef(
  (
    {
      selectedGroup: e,
      medicineGroups: t,
      searchText: n,
      onGroupChange: r,
      onSearchTextChange: l,
      onSearch: o,
      onExport: i,
      canExport: u,
      recordCount: s,
      totalRecords: c,
      translations: h,
    },
    g
  ) =>
    p.jsx("div", {
      className: "space-y-4",
      children: p.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          p.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              p.jsxs("div", {
                className: "flex items-center",
                children: [
                  p.jsx("h3", {
                    className: "text-xl font-semibold text-gray-900",
                    children: h.searchResult,
                  }),
                  p.jsxs("span", {
                    className: "text-sm font-medium text-gray-700 ml-1",
                    children: ["(", s, " ", h.entries, ")"],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  p.jsxs("select", {
                    value: e,
                    onChange: (m) => r(m.target.value),
                    className:
                      "w-48 border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                    children: [
                      p.jsx("option", { value: "all", children: h.all }),
                      Array.isArray(t) &&
                        t.map((m) =>
                          p.jsx(
                            "option",
                            { value: m.GUID, children: m.NAME },
                            m.GUID
                          )
                        ),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "relative",
                    children: [
                      p.jsx("input", {
                        type: "text",
                        value: n,
                        onChange: (m) => l(m.target.value),
                        placeholder: h.searchPlaceholder || "搜尋藥品...",
                        className:
                          "w-50 border rounded-lg pl-10 pr-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      }),
                      p.jsx(Zu, {
                        className:
                          "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2",
                      }),
                    ],
                  }),
                  p.jsxs("button", {
                    onClick: o,
                    className:
                      "h-10 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 text-sm font-medium",
                    children: [p.jsx(Zu, { className: "w-4 h-4" }), h.search],
                  }),
                ],
              }),
            ],
          }),
          p.jsx("div", {
            className: "flex items-center space-x-4",
            children: p.jsxs("button", {
              onClick: i,
              disabled: !u,
              className:
                "h-10 bg-green-600 text-white px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 text-sm font-medium",
              children: [p.jsx(Wf, { className: "w-4 h-4" }), h.export],
            }),
          }),
        ],
      }),
    })
);
pc.displayName = "SearchBar";
function Jf({ data: e, translations: t }) {
  const [n, r] = D.useState(null),
    [l, o] = D.useState("asc"),
    [i, u] = D.useState(1),
    [s, c] = D.useState("1"),
    h = 50,
    g = (y) => {
      n === y ? o(l === "asc" ? "desc" : "asc") : (r(y), o("asc"));
    },
    m = (y) =>
      n !== y
        ? p.jsx("div", { className: "w-4 h-4" })
        : l === "asc"
        ? p.jsx(dc, { className: "w-4 h-4" })
        : p.jsx(cc, { className: "w-4 h-4" }),
    k = [...e].sort((y, C) => {
      if (!n) return 0;
      const N = y[n],
        j = C[n];
      return n === "CONSUMPTION" || n === "STOCK" || n === "DISPENSED"
        ? l === "asc"
          ? Number(N) - Number(j)
          : Number(j) - Number(N)
        : l === "asc"
        ? String(N).localeCompare(String(j))
        : String(j).localeCompare(String(N));
    }),
    S = Math.ceil(k.length / h),
    E = (i - 1) * h,
    I = Math.min(E + h, k.length),
    d = k.slice(E, I),
    a = (y) => {
      const C = y.target.value;
      /^\d*$/.test(C) && c(C);
    },
    f = () => {
      const y = parseInt(s);
      y >= 1 && y <= S ? u(y) : c(i.toString());
    },
    v = (y) => {
      y.key === "Enter" && f();
    };
  return p.jsxs("div", {
    className: "bg-white rounded-lg shadow-sm border",
    children: [
      p.jsxs("div", {
        className:
          "px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between",
        children: [
          p.jsxs("p", {
            className: "text-sm text-gray-600",
            children: [
              t.showing,
              " ",
              E + 1,
              "-",
              I,
              " ",
              t.entries,
              "（",
              t.total,
              " ",
              e.length,
              " ",
              t.entries,
              "）",
            ],
          }),
          S > 1 &&
            p.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                p.jsx("button", {
                  onClick: () => u((y) => Math.max(1, y - 1)),
                  disabled: i === 1,
                  className:
                    "px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
                  children: t.previousPage,
                }),
                p.jsxs("div", {
                  className: "flex items-center space-x-1",
                  children: [
                    p.jsx("input", {
                      type: "text",
                      value: s,
                      onChange: a,
                      onBlur: f,
                      onKeyPress: v,
                      className:
                        "w-12 px-2 py-1 text-sm text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                    }),
                    p.jsxs("span", {
                      className: "text-sm text-gray-600",
                      children: [" / ", S],
                    }),
                  ],
                }),
                p.jsx("button", {
                  onClick: () => u((y) => Math.min(S, y + 1)),
                  disabled: i === S,
                  className:
                    "px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
                  children: t.nextPage,
                }),
              ],
            }),
        ],
      }),
      p.jsxs("div", {
        className: "overflow-x-auto",
        style: { maxHeight: "calc(100vh - 180px)" },
        children: [
          p.jsxs("table", {
            className: "w-full table-fixed",
            children: [
              p.jsxs("colgroup", {
                children: [
                  p.jsx("col", { style: { width: "80px" } }),
                  p.jsx("col", { style: { width: "120px" } }),
                  p.jsx("col", { style: { width: "300px" } }),
                  p.jsx("col", { style: { width: "100px" } }),
                  p.jsx("col", { style: { width: "100px" } }),
                  p.jsx("col", { style: { width: "100px" } }),
                ],
              }),
              p.jsx("thead", {
                className: "bg-gray-100 sticky top-0 z-10",
                children: p.jsxs("tr", {
                  className: "border-b border-gray-200",
                  children: [
                    p.jsx("th", {
                      className:
                        "px-4 py-3 text-left text-base font-normal text-gray-900",
                      children: t.index,
                    }),
                    ["CODE", "NAME", "CONSUMPTION", "DISPENSED", "STOCK"].map(
                      (y) =>
                        p.jsx(
                          "th",
                          {
                            onClick: () => g(y),
                            className:
                              "px-4 py-3 text-left text-base font-normal text-gray-900 cursor-pointer hover:text-gray-700 transition-colors",
                            children: p.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                p.jsx("span", {
                                  className: "select-none",
                                  children: t[y.toLowerCase()],
                                }),
                                p.jsx("div", {
                                  className: "ml-2 flex-shrink-0",
                                  children: m(y),
                                }),
                              ],
                            }),
                          },
                          y
                        )
                    ),
                  ],
                }),
              }),
              p.jsx("tbody", {
                className: "divide-y divide-gray-200",
                children: d.map((y, C) =>
                  p.jsxs(
                    "tr",
                    {
                      className:
                        "hover:bg-gray-50 transition-colors border-b border-gray-200",
                      children: [
                        p.jsx("td", {
                          className:
                            "px-4 py-3 text-sm text-gray-900 font-medium",
                          children: E + C + 1,
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className:
                              "inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800",
                            children: y.CODE,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("div", {
                            className: "truncate",
                            title: y.NAME,
                            children: y.NAME,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(y.CONSUMPTION) > 0
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`,
                            children: y.CONSUMPTION,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(y.DISPENSED) > 0
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-gray-100 text-gray-800"
                            }`,
                            children: y.DISPENSED,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(y.STOCK) > 0
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-500"
                            }`,
                            children: y.STOCK,
                          }),
                        }),
                      ],
                    },
                    y.CODE
                  )
                ),
              }),
            ],
          }),
          e.length === 0 &&
            p.jsx("div", {
              className: "text-center py-12",
              children: p.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center text-gray-400",
                children: [
                  p.jsx(Qf, { className: "w-12 h-12 mb-4" }),
                  p.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: t.noDataAvailable,
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}
function qf() {
  return p.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    children: p.jsxs("div", {
      className: "bg-white rounded-lg p-8 flex flex-col items-center",
      children: [
        p.jsx(Yf, { className: "w-12 h-12 text-[#4E6DB4] animate-spin" }),
        p.jsx("span", {
          className: "mt-4 text-lg text-[#333333]",
          children: "載入中...",
        }),
      ],
    }),
  });
}
function bf({ message: e, onClose: t }) {
  return (
    D.useEffect(() => {
      const n = setTimeout(() => {
        t();
      }, 3500);
      return () => clearTimeout(n);
    }, [t]),
    p.jsx("div", {
      className: "fixed top-4 right-4 z-50 animate-slide-in",
      children: p.jsx("div", {
        className:
          "bg-white border-l-4 border-red-500 rounded-lg shadow-lg p-4",
        children: p.jsxs("div", {
          className: "flex",
          children: [
            p.jsx("div", {
              className: "flex-shrink-0",
              children: p.jsx("svg", {
                className: "h-5 w-5 text-red-500",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: p.jsx("path", {
                  fillRule: "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                  clipRule: "evenodd",
                }),
              }),
            }),
            p.jsx("div", {
              className: "ml-3",
              children: p.jsxs("p", {
                className: "text-sm text-gray-900",
                children: ["錯誤 : ", e],
              }),
            }),
          ],
        }),
      }),
    })
  );
}
const ep = async () => {
  console.log("🔍 Fetching API config...");
  const t = await (await fetch("../config.txt")).json();
  return console.log("📝 API config:", t), t.domain;
};
let Zl = null;
const mn = async () => (Zl || (Zl = await ep()), Zl);
async function kl(e, t, n, r) {
  console.group(`🌐 API Call: ${e}`),
    console.log("📍 URL:", `${await mn()}${e}`),
    console.log("📮 Method:", t),
    console.log("📦 Request Payload:", n),
    console.log("📥 Response:", r),
    console.groupEnd();
}
async function tp() {
  const e = "/api/ServerSetting/get_serversetting_by_type",
    t = { Data: {}, ValueAry: ["調劑台"] };
  try {
    const n = await mn(),
      r = await fetch(`${n}${e}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      });
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    const l = await r.json();
    if ((await kl(e, "POST", t, l), l.Code !== 200))
      throw new Error(l.Result || "Failed to fetch dispensing stations");
    return l;
  } catch (n) {
    throw (console.error("Error fetching dispensing stations:", n), n);
  }
}
async function np() {
  const e = "/api/medGroup/get_all_group",
    t = {};
  try {
    const n = await mn(),
      r = await fetch(`${n}${e}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      });
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    const l = await r.json();
    if ((await kl(e, "POST", t, l), l.Code !== 200))
      throw new Error(l.Result || "Failed to fetch medicine groups");
    return l;
  } catch (n) {
    throw (console.error("Error fetching medicine groups:", n), n);
  }
}
async function rp(e, t, n, r) {
  const l = "/api/consumption/serch_datas_by_ST_END",
    o = { Data: {}, ValueAry: [e, t, n.join(","), r.join(",")] };
  try {
    const i = await mn(),
      u = await fetch(`${i}${l}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    const s = await u.json();
    if ((await kl(l, "POST", o, s), s.Code !== 200))
      throw new Error(s.Result || "Failed to search inventory");
    return s;
  } catch (i) {
    throw (console.error("Error searching inventory:", i), i);
  }
}
async function lp(e, t, n, r) {
  const l = "/api/consumption/download_datas_excel_by_serch",
    o = { Data: {}, ValueAry: [e, t, n.join(","), r.join(",")] };
  try {
    const i = await mn(),
      u = await fetch(`${i}${l}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    await kl(l, "POST", o, "Blob data (Excel file)");
    const s = await u.blob(),
      c = window.URL.createObjectURL(s),
      h = document.createElement("a");
    (h.href = c),
      (h.download = "Inventory Report.xlsx"),
      document.body.appendChild(h),
      h.click(),
      window.URL.revokeObjectURL(c),
      document.body.removeChild(h);
  } catch (i) {
    throw (console.error("Error exporting inventory:", i), i);
  }
}
const Ai = "user_session";
async function op(e) {
  const t = await mn();
  console.group("🔐 Login Attempt"),
    console.log("📍 URL:", `${t}/api/session/login`),
    console.log("📮 Credentials:", { ID: e.ID, Password: "****" });
  try {
    const n = await fetch(`${t}/api/session/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Data: e }),
    });
    if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
    const r = await n.json();
    return (
      console.log("📥 Response:", {
        ...r,
        Data: r.Data ? { ...r.Data, Password: "****" } : null,
      }),
      r.Code === 200
        ? (sessionStorage.setItem(Ai, JSON.stringify(r.Data)),
          console.log("✅ Login successful - Session stored"))
        : console.log("❌ Login failed:", r.Result),
      console.groupEnd(),
      r
    );
  } catch (n) {
    throw (console.error("Login error:", n), console.groupEnd(), n);
  }
}
function Jl() {
  sessionStorage.removeItem(Ai), location.reload();
}
function mc() {
  const e = sessionStorage.getItem(Ai);
  return e ? JSON.parse(e) : null;
}
function ip() {
  return !!mc();
}
function up({ onSuccess: e, onError: t }) {
  const [n, r] = D.useState({ ID: "", Password: "" }),
    [l, o] = D.useState(!1),
    i = async (u) => {
      u.preventDefault(), o(!0);
      try {
        const s = await op(n);
        s.Code === 200 ? e() : t(s.Result);
      } catch {
        t("登入失敗，請稍後再試");
      } finally {
        o(!1);
      }
    };
  return p.jsxs("div", {
    className:
      "min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 flex-col",
    children: [
      p.jsx("div", {
        children: p.jsx("h2", {
          className: "text-center text-3xl font-bold text-gray-900",
          children: "庫存清單",
        }),
      }),
      p.jsx("div", {
        className:
          "max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg mt-8",
        children: p.jsxs("form", {
          className: "mt-8 space-y-6",
          onSubmit: i,
          children: [
            p.jsxs("div", {
              className: "rounded-md shadow-sm space-y-4",
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      htmlFor: "ID",
                      className: "block text-sm font-medium text-gray-700",
                      children: "帳號",
                    }),
                    p.jsx("input", {
                      id: "ID",
                      name: "ID",
                      type: "text",
                      required: !0,
                      value: n.ID,
                      onChange: (u) => r((s) => ({ ...s, ID: u.target.value })),
                      className:
                        "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  children: [
                    p.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: "密碼",
                    }),
                    p.jsx("input", {
                      id: "password",
                      name: "password",
                      type: "password",
                      required: !0,
                      value: n.Password,
                      onChange: (u) =>
                        r((s) => ({ ...s, Password: u.target.value })),
                      className:
                        "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              children: p.jsx("button", {
                type: "submit",
                disabled: l,
                className:
                  "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
                children: l ? "登入中..." : "登入",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const ql = {
  en: {
    timeType: "Time Type",
    timeRange: "Time Range",
    searchResult: "Search Result",
    searchPlaceholder: "Search by code, name, SKU, Chinese name...",
    title: "Inventory List",
    dispensingStations: "Dispensing Stations",
    pleaseSelect: "Please select dispensing stations",
    selected: "Selected",
    stations: "stations",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    operationTime: "Operation Time",
    startDate: "Start Date",
    endDate: "End Date",
    medicineGroup: "Medicine Group",
    all: "All Medicine Group",
    search: "Search",
    export: "Export",
    index: "Index",
    code: "Medicine Code",
    name: "Medicine Name",
    consumption: "Consumption",
    dispensed: "Dispensed",
    stock: "Stock",
    noDataAvailable: "No Data",
    noDataForExport: "No data available for export",
    page: "Page",
    of: "of",
    previousPage: "Previous",
    nextPage: "Next",
    itemsPerPage: "Items per page",
    loading: "Loading...",
    noStations: "Please select at least one dispensing station",
    logout: "Logout",
    showing: "Showing",
    entries: "entries",
    total: "total",
    filtered: "Filtered",
  },
  zh: {
    timeType: "時間類型",
    timeRange: "時間區間",
    searchResult: "搜尋結果",
    searchPlaceholder: "搜尋藥碼、藥名、料號、中文名...",
    title: "庫存清單",
    dispensingStations: "調劑台",
    pleaseSelect: "請選擇調劑台",
    selected: "已選擇",
    stations: "台",
    selectAll: "全選",
    deselectAll: "取消全選",
    operationTime: "操作時間",
    startDate: "開始日期",
    endDate: "結束日期",
    medicineGroup: "藥品群組",
    all: "全部藥品群組",
    search: "搜尋",
    export: "匯出",
    index: "序號",
    code: "藥碼",
    name: "藥名",
    consumption: "消耗量",
    dispensed: "實調量",
    stock: "庫存量",
    noDataAvailable: "無資料",
    noDataForExport: "無可匯出資料",
    page: "第",
    of: "頁，共",
    previousPage: "上一頁",
    nextPage: "下一頁",
    itemsPerPage: "每頁顯示",
    loading: "載入中...",
    noStations: "至少選擇一台調劑台",
    logout: "登出",
    showing: "顯示",
    entries: "筆",
    total: "共",
    filtered: "篩選",
  },
};
function sp() {
  const [e, t] = D.useState(ip()),
    [n, r] = D.useState("zh"),
    [l, o] = D.useState([]),
    [i, u] = D.useState([]),
    [s, c] = D.useState([]),
    [h, g] = D.useState("all"),
    [m, k] = D.useState(""),
    [S, E] = D.useState([]),
    [I, d] = D.useState([]),
    [a, f] = D.useState(!1),
    [v, y] = D.useState(!1),
    [C, N] = D.useState(null),
    j = D.useRef(null),
    A = D.useRef(null);
  D.useEffect(() => {
    if (!e) return;
    (async () => {
      y(!0);
      try {
        const [w, P] = await Promise.all([tp(), np()]);
        if (w.Code !== 200 || P.Code !== 200) {
          Jl(), t(!1);
          return;
        }
        o(w.Data), u([]), c(P.Data);
      } catch (w) {
        console.error("Error fetching initial data:", w),
          N("Failed to fetch initial data");
      } finally {
        y(!1);
      }
    })();
  }, [e]),
    D.useEffect(() => {
      let M = S;
      if (h !== "all") {
        const w = s.find((P) => P.GUID === h);
        if (w) {
          const P = w.MedClasses.map((T) => T.CODE);
          M = M.filter((T) => P.includes(T.CODE));
        }
      }
      if (m.trim()) {
        const w = m.toLowerCase().trim();
        M = M.filter(
          (P) =>
            (P.CODE && P.CODE.toLowerCase().includes(w)) ||
            (P.NAME && P.NAME.toLowerCase().includes(w)) ||
            (P.SKDICODE && P.SKDICODE.toLowerCase().includes(w)) ||
            (P.CHT_NAME && P.CHT_NAME.toLowerCase().includes(w))
        );
      }
      d(M);
    }, [h, m, S, s]);
  const L = (M) =>
      M.Code === -1 || M.Code === -2
        ? (Jl(), t(!1), null)
        : M.Code !== 200
        ? (N(M.Result), null)
        : M.Data,
    ge = async () => {
      var M, w;
      if (i.length === 0) {
        N(ql[n].noStations);
        return;
      }
      (M = j.current) == null || M.collapse(),
        (w = A.current) == null || w.collapse(),
        y(!0);
      try {
        const P = new Date().toISOString().split("T")[0],
          T = await rp(
            P,
            P,
            i,
            l.filter((K) => i.includes(K.name)).map((K) => K.type)
          ),
          V = L(T);
        V && (E(V), f(!0));
      } catch (P) {
        console.error("Error searching inventory:", P),
          N("Failed to search inventory");
      } finally {
        y(!1);
      }
    },
    vt = async () => {
      if (I.length === 0) {
        N(ql[n].noDataForExport);
        return;
      }
      y(!0);
      try {
        const M = new Date().toISOString().split("T")[0];
        await lp(
          M,
          M,
          i,
          l.filter((w) => i.includes(w.name)).map((w) => w.type)
        );
      } catch (M) {
        console.error("Error exporting inventory:", M),
          N("Failed to export inventory");
      } finally {
        y(!1);
      }
    },
    xt = () => {
      Jl(), t(!1);
    },
    lr = (M) => {
      r(M);
    },
    wt = ql[n],
    St = mc();
  return e
    ? p.jsxs("div", {
        className: "min-h-screen",
        children: [
          v && p.jsx(qf, {}),
          C && p.jsx(bf, { message: C, onClose: () => N(null) }),
          p.jsx("nav", {
            className: "bg-transparent py-4 md:py-6 lg:py-8",
            children: p.jsx("div", {
              className: "mx-auto px-4 sm:px-6 lg:px-8",
              children: p.jsxs("div", {
                className: "flex justify-between items-center h-16",
                children: [
                  p.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      p.jsxs("a", {
                        href: "../frontpage",
                        className:
                          "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                        children: [
                          p.jsx("span", {
                            className: "sr-only",
                            children: "Home",
                          }),
                          p.jsx(Gf, { className: "w-7 h-7" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          p.jsx("h1", {
                            className:
                              "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                            children: wt.title,
                          }),
                          St &&
                            p.jsxs("span", {
                              className: "text-base text-gray-600",
                              children: [St.Name, " - ", St.Employer],
                            }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      p.jsx("button", {
                        onClick: () => lr(n === "en" ? "zh" : "en"),
                        className:
                          "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        children: p.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            p.jsx(Kf, { className: "w-4 h-4 text-gray-600" }),
                            p.jsx("span", {
                              className:
                                "hidden sm:inline text-base text-gray-700",
                              children: n === "en" ? "English" : "繁體中文",
                            }),
                          ],
                        }),
                      }),
                      p.jsx("button", {
                        onClick: xt,
                        className:
                          "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        children: p.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            p.jsx(Xf, { className: "w-4 h-4" }),
                            p.jsx("span", {
                              className: "hidden sm:inline text-base",
                              children: wt.logout,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          p.jsx("main", {
            className: "pb-16",
            children: p.jsxs("div", {
              className: "mx-auto px-4 sm:px-6 lg:px-8 space-y-6",
              children: [
                p.jsx(fc, {
                  ref: j,
                  stations: l,
                  selectedStations: i,
                  onChange: u,
                  translations: wt,
                }),
                p.jsx("div", {
                  children: p.jsx(pc, {
                    ref: A,
                    selectedGroup: h,
                    medicineGroups: s,
                    searchText: m,
                    onGroupChange: g,
                    onSearchTextChange: k,
                    onSearch: ge,
                    onExport: vt,
                    canExport: I.length > 0,
                    recordCount: I.length,
                    totalRecords: S.length,
                    translations: wt,
                  }),
                }),
                a &&
                  p.jsx("div", {
                    children: p.jsx(Jf, { data: I, translations: wt }),
                  }),
              ],
            }),
          }),
          p.jsx("footer", {
            className:
              "bg-white shadow-sm border-t fixed bottom-0 left-0 right-0",
            children: p.jsx("div", {
              className: "mx-auto py-2 px-4 sm:px-6 lg:px-8",
              children: p.jsx("p", {
                className: "text-center text-gray-700 text-sm",
                children: "Copyright ©2025 鴻森智能科技",
              }),
            }),
          }),
        ],
      })
    : p.jsx(up, { onSuccess: () => t(!0), onError: N });
}
ac(document.getElementById("root")).render(
  p.jsx(D.StrictMode, { children: p.jsx(sp, {}) })
);
