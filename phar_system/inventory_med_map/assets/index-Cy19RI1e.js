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
var ha = { exports: {} },
  _l = {},
  ma = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = Symbol.for("react.element"),
  Tc = Symbol.for("react.portal"),
  Lc = Symbol.for("react.fragment"),
  zc = Symbol.for("react.strict_mode"),
  Ic = Symbol.for("react.profiler"),
  Oc = Symbol.for("react.provider"),
  Ac = Symbol.for("react.context"),
  $c = Symbol.for("react.forward_ref"),
  Uc = Symbol.for("react.suspense"),
  Bc = Symbol.for("react.memo"),
  Fc = Symbol.for("react.lazy"),
  ls = Symbol.iterator;
function Hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ls && e[ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ga = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ya = Object.assign,
  va = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = va),
    (this.updater = n || ga);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xa() {}
xa.prototype = Ln.prototype;
function ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = va),
    (this.updater = n || ga);
}
var ci = (ui.prototype = new xa());
ci.constructor = ui;
ya(ci, Ln.prototype);
ci.isPureReactComponent = !0;
var os = Array.isArray,
  wa = Object.prototype.hasOwnProperty,
  di = { current: null },
  Sa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ca(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      wa.call(t, r) && !Sa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: di.current,
  };
}
function Vc(e, t) {
  return {
    $$typeof: Sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr;
}
function Wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var is = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wc("" + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, l) {
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
          case Sr:
          case Tc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Fl(i, 0) : r),
      os(l)
        ? ((n = ""),
          e != null && (n = e.replace(is, "$&/") + "/"),
          Vr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (fi(l) &&
            (l = Vc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(is, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), os(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Fl(o, a);
      i += Vr(o, t, n, u, l);
    }
  else if (((u = Hc(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Fl(o, a++)), (i += Vr(o, t, n, u, l));
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
function Mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Vr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Gc(e) {
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
var De = { current: null },
  Wr = { transition: null },
  Qc = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Wr,
    ReactCurrentOwner: di,
  };
function ka() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = {
  map: Mr,
  forEach: function (e, t, n) {
    Mr(
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
      Mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = Ln;
Q.Fragment = Lc;
Q.Profiler = Ic;
Q.PureComponent = ui;
Q.StrictMode = zc;
Q.Suspense = Uc;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qc;
Q.act = ka;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ya({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = di.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      wa.call(t, u) &&
        !Sa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: Sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ac,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Oc, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Ca;
Q.createFactory = function (e) {
  var t = Ca.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: $c, render: e };
};
Q.isValidElement = fi;
Q.lazy = function (e) {
  return { $$typeof: Fc, _payload: { _status: -1, _result: e }, _init: Gc };
};
Q.memo = function (e, t) {
  return { $$typeof: Bc, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Wr.transition;
  Wr.transition = {};
  try {
    e();
  } finally {
    Wr.transition = t;
  }
};
Q.unstable_act = ka;
Q.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return De.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
Q.useId = function () {
  return De.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return De.current.useRef(e);
};
Q.useState = function (e) {
  return De.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return De.current.useTransition();
};
Q.version = "18.3.1";
ma.exports = Q;
var j = ma.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kc = j,
  Yc = Symbol.for("react.element"),
  Xc = Symbol.for("react.fragment"),
  Jc = Object.prototype.hasOwnProperty,
  qc = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Na(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Jc.call(t, r) && !Zc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Yc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: qc.current,
  };
}
_l.Fragment = Xc;
_l.jsx = Na;
_l.jsxs = Na;
ha.exports = _l;
var s = ha.exports,
  _a = { exports: {} },
  He = {},
  Ma = { exports: {} },
  ja = {};
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
      var B = (T - 1) >>> 1,
        A = w[B];
      if (0 < l(A, P)) (w[B] = P), (w[T] = A), (T = B);
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
      e: for (var B = 0, A = w.length, K = A >>> 1; B < K; ) {
        var V = 2 * (B + 1) - 1,
          G = w[V],
          b = V + 1,
          L = w[b];
        if (0 > l(G, T))
          b < A && 0 > l(L, G)
            ? ((w[B] = L), (w[b] = T), (B = b))
            : ((w[B] = G), (w[V] = T), (B = V));
        else if (b < A && 0 > l(L, T)) (w[B] = L), (w[b] = T), (B = b);
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
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    f = [],
    v = 1,
    g = null,
    m = 3,
    k = !1,
    x = !1,
    S = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(w) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= w)
        r(f), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(f);
    }
  }
  function y(w) {
    if (((S = !1), h(w), !x))
      if (n(u) !== null) (x = !0), me(N);
      else {
        var P = n(f);
        P !== null && it(y, P.startTime - w);
      }
  }
  function N(w, P) {
    (x = !1), S && ((S = !1), c(D), (D = -1)), (k = !0);
    var T = m;
    try {
      for (
        h(P), g = n(u);
        g !== null && (!(g.expirationTime > P) || (w && !de()));

      ) {
        var B = g.callback;
        if (typeof B == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var A = B(g.expirationTime <= P);
          (P = e.unstable_now()),
            typeof A == "function" ? (g.callback = A) : g === n(u) && r(u),
            h(P);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var K = !0;
      else {
        var V = n(f);
        V !== null && it(y, V.startTime - P), (K = !1);
      }
      return K;
    } finally {
      (g = null), (m = T), (k = !1);
    }
  }
  var M = !1,
    C = null,
    D = -1,
    X = 5,
    F = -1;
  function de() {
    return !(e.unstable_now() - F < X);
  }
  function Te() {
    if (C !== null) {
      var w = e.unstable_now();
      F = w;
      var P = !0;
      try {
        P = C(!0, w);
      } finally {
        P ? We() : ((M = !1), (C = null));
      }
    } else M = !1;
  }
  var We;
  if (typeof d == "function")
    We = function () {
      d(Te);
    };
  else if (typeof MessageChannel < "u") {
    var Ge = new MessageChannel(),
      Ze = Ge.port2;
    (Ge.port1.onmessage = Te),
      (We = function () {
        Ze.postMessage(null);
      });
  } else
    We = function () {
      O(Te, 0);
    };
  function me(w) {
    (C = w), M || ((M = !0), We());
  }
  function it(w, P) {
    D = O(function () {
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
      x || k || ((x = !0), me(N));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (X = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
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
      var B = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? B + T : B))
          : (T = B),
        w)
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
        (A = T + A),
        (w = {
          id: v++,
          callback: P,
          priorityLevel: w,
          startTime: T,
          expirationTime: A,
          sortIndex: -1,
        }),
        T > B
          ? ((w.sortIndex = T),
            t(f, w),
            n(u) === null &&
              w === n(f) &&
              (S ? (c(D), (D = -1)) : (S = !0), it(y, T - B)))
          : ((w.sortIndex = A), t(u, w), x || k || ((x = !0), me(N))),
        w
      );
    }),
    (e.unstable_shouldYield = de),
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
})(ja);
Ma.exports = ja;
var bc = Ma.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = j,
  Fe = bc;
function _(e) {
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
var Ea = new Set(),
  rr = {};
function rn(e, t) {
  Mn(e, t), Mn(e + "Capture", t);
}
function Mn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mo = Object.prototype.hasOwnProperty,
  td =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ss = {},
  as = {};
function nd(e) {
  return mo.call(as, e)
    ? !0
    : mo.call(ss, e)
    ? !1
    : td.test(e)
    ? (as[e] = !0)
    : ((ss[e] = !0), !1);
}
function rd(e, t, n, r) {
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
function ld(e, t, n, r) {
  if (t === null || typeof t > "u" || rd(e, t, n, r)) return !0;
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
function Pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pi = /[\-:]([a-z])/g;
function hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    Ce[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    Ce[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pi, hi);
  Ce[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mi(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ld(t, n, l, r) && (n = null),
    r || l === null
      ? nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ct = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  gi = Symbol.for("react.strict_mode"),
  go = Symbol.for("react.profiler"),
  Da = Symbol.for("react.provider"),
  Pa = Symbol.for("react.context"),
  yi = Symbol.for("react.forward_ref"),
  yo = Symbol.for("react.suspense"),
  vo = Symbol.for("react.suspense_list"),
  vi = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Ra = Symbol.for("react.offscreen"),
  us = Symbol.iterator;
function On(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Hl;
function Wn(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || "";
    }
  return (
    `
` +
    Hl +
    e
  );
}
var Vl = !1;
function Wl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
}
function od(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return "";
  }
}
function xo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case an:
      return "Portal";
    case go:
      return "Profiler";
    case gi:
      return "StrictMode";
    case yo:
      return "Suspense";
    case vo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pa:
        return (e.displayName || "Context") + ".Consumer";
      case Da:
        return (e._context.displayName || "Context") + ".Provider";
      case yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vi:
        return (
          (t = e.displayName || null), t !== null ? t : xo(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return xo(e(t));
        } catch {}
    }
  return null;
}
function id(e) {
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
      return xo(t);
    case 8:
      return t === gi ? "StrictMode" : "Mode";
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
function $t(e) {
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
function Ta(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sd(e) {
  var t = Ta(e) ? "checked" : "value",
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
function Er(e) {
  e._valueTracker || (e._valueTracker = sd(e));
}
function La(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ta(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wo(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function za(e, t) {
  (t = t.checked), t != null && mi(e, "checked", t, !1);
}
function So(e, t) {
  za(e, t);
  var n = $t(t.value),
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
    ? Co(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Co(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ds(e, t, n) {
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
function Co(e, t, n) {
  (t !== "number" || tl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Gn(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Ia(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Oa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Oa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Dr,
  Aa = (function (e) {
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
        Dr = Dr || document.createElement("div"),
          Dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
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
  ad = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  ad.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function $a(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ua(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = $a(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ud = ue(
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
function _o(e, t) {
  if (t) {
    if (ud[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Mo(e, t) {
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
var jo = null;
function xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Eo = null,
  Sn = null,
  Cn = null;
function hs(e) {
  if ((e = Nr(e))) {
    if (typeof Eo != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Pl(t)), Eo(e.stateNode, e.type, t));
  }
}
function Ba(e) {
  Sn ? (Cn ? Cn.push(e) : (Cn = [e])) : (Sn = e);
}
function Fa() {
  if (Sn) {
    var e = Sn,
      t = Cn;
    if (((Cn = Sn = null), hs(e), t)) for (e = 0; e < t.length; e++) hs(t[e]);
  }
}
function Ha(e, t) {
  return e(t);
}
function Va() {}
var Gl = !1;
function Wa(e, t, n) {
  if (Gl) return e(t, n);
  Gl = !0;
  try {
    return Ha(e, t, n);
  } finally {
    (Gl = !1), (Sn !== null || Cn !== null) && (Va(), Fa());
  }
}
function or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pl(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Do = !1;
if (vt)
  try {
    var An = {};
    Object.defineProperty(An, "passive", {
      get: function () {
        Do = !0;
      },
    }),
      window.addEventListener("test", An, An),
      window.removeEventListener("test", An, An);
  } catch {
    Do = !1;
  }
function cd(e, t, n, r, l, o, i, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var Xn = !1,
  nl = null,
  rl = !1,
  Po = null,
  dd = {
    onError: function (e) {
      (Xn = !0), (nl = e);
    },
  };
function fd(e, t, n, r, l, o, i, a, u) {
  (Xn = !1), (nl = null), cd.apply(dd, arguments);
}
function pd(e, t, n, r, l, o, i, a, u) {
  if ((fd.apply(this, arguments), Xn)) {
    if (Xn) {
      var f = nl;
      (Xn = !1), (nl = null);
    } else throw Error(_(198));
    rl || ((rl = !0), (Po = f));
  }
}
function ln(e) {
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
function Ga(e) {
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
function ms(e) {
  if (ln(e) !== e) throw Error(_(188));
}
function hd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(_(188));
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
        if (o === n) return ms(l), e;
        if (o === r) return ms(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Qa(e) {
  return (e = hd(e)), e !== null ? Ka(e) : null;
}
function Ka(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ka(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ya = Fe.unstable_scheduleCallback,
  gs = Fe.unstable_cancelCallback,
  md = Fe.unstable_shouldYield,
  gd = Fe.unstable_requestPaint,
  pe = Fe.unstable_now,
  yd = Fe.unstable_getCurrentPriorityLevel,
  wi = Fe.unstable_ImmediatePriority,
  Xa = Fe.unstable_UserBlockingPriority,
  ll = Fe.unstable_NormalPriority,
  vd = Fe.unstable_LowPriority,
  Ja = Fe.unstable_IdlePriority,
  Ml = null,
  ct = null;
function xd(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : Cd,
  wd = Math.log,
  Sd = Math.LN2;
function Cd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wd(e) / Sd) | 0)) | 0;
}
var Pr = 64,
  Rr = 4194304;
function Qn(e) {
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
function ol(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Qn(a)) : ((o &= i), o !== 0 && (r = Qn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Qn(i)) : o !== 0 && (r = Qn(o));
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
      (n = 31 - rt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function kd(e, t) {
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
function Nd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - rt(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = kd(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ro(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qa() {
  var e = Pr;
  return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function _d(e, t) {
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
    var l = 31 - rt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Si(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var te = 0;
function Za(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ba,
  Ci,
  eu,
  tu,
  nu,
  To = !1,
  Tr = [],
  Pt = null,
  Rt = null,
  Tt = null,
  ir = new Map(),
  sr = new Map(),
  Mt = [],
  Md =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ys(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function $n(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Nr(t)), t !== null && Ci(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function jd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Pt = $n(Pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Rt = $n(Rt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Tt = $n(Tt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ir.set(o, $n(ir.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), sr.set(o, $n(sr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ru(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ga(n)), t !== null)) {
          (e.blockedOn = t),
            nu(e.priority, function () {
              eu(n);
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
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jo = r), n.target.dispatchEvent(r), (jo = null);
    } else return (t = Nr(n)), t !== null && Ci(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vs(e, t, n) {
  Gr(e) && n.delete(t);
}
function Ed() {
  (To = !1),
    Pt !== null && Gr(Pt) && (Pt = null),
    Rt !== null && Gr(Rt) && (Rt = null),
    Tt !== null && Gr(Tt) && (Tt = null),
    ir.forEach(vs),
    sr.forEach(vs);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    To ||
      ((To = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Ed)));
}
function ar(e) {
  function t(l) {
    return Un(l, e);
  }
  if (0 < Tr.length) {
    Un(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pt !== null && Un(Pt, e),
      Rt !== null && Un(Rt, e),
      Tt !== null && Un(Tt, e),
      ir.forEach(t),
      sr.forEach(t),
      n = 0;
    n < Mt.length;
    n++
  )
    (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
    ru(n), n.blockedOn === null && Mt.shift();
}
var kn = Ct.ReactCurrentBatchConfig,
  il = !0;
function Dd(e, t, n, r) {
  var l = te,
    o = kn.transition;
  kn.transition = null;
  try {
    (te = 1), ki(e, t, n, r);
  } finally {
    (te = l), (kn.transition = o);
  }
}
function Pd(e, t, n, r) {
  var l = te,
    o = kn.transition;
  kn.transition = null;
  try {
    (te = 4), ki(e, t, n, r);
  } finally {
    (te = l), (kn.transition = o);
  }
}
function ki(e, t, n, r) {
  if (il) {
    var l = Lo(e, t, n, r);
    if (l === null) no(e, t, r, sl, n), ys(e, r);
    else if (jd(l, e, t, n, r)) r.stopPropagation();
    else if ((ys(e, r), t & 4 && -1 < Md.indexOf(e))) {
      for (; l !== null; ) {
        var o = Nr(l);
        if (
          (o !== null && ba(o),
          (o = Lo(e, t, n, r)),
          o === null && no(e, t, r, sl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else no(e, t, r, null, n);
  }
}
var sl = null;
function Lo(e, t, n, r) {
  if (((sl = null), (e = xi(r)), (e = Kt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ga(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sl = e), null;
}
function lu(e) {
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
      switch (yd()) {
        case wi:
          return 1;
        case Xa:
          return 4;
        case ll:
        case vd:
          return 16;
        case Ja:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null,
  Ni = null,
  Qr = null;
function ou() {
  if (Qr) return Qr;
  var e,
    t = Ni,
    n = t.length,
    r,
    l = "value" in Et ? Et.value : Et.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Kr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function xs() {
  return !1;
}
function Ve(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Lr
        : xs),
      (this.isPropagationStopped = xs),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _i = Ve(zn),
  kr = ue({}, zn, { view: 0, detail: 0 }),
  Rd = Ve(kr),
  Kl,
  Yl,
  Bn,
  jl = ue({}, kr, {
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
    getModifierState: Mi,
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
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((Kl = e.screenX - Bn.screenX), (Yl = e.screenY - Bn.screenY))
              : (Yl = Kl = 0),
            (Bn = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  ws = Ve(jl),
  Td = ue({}, jl, { dataTransfer: 0 }),
  Ld = Ve(Td),
  zd = ue({}, kr, { relatedTarget: 0 }),
  Xl = Ve(zd),
  Id = ue({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Od = Ve(Id),
  Ad = ue({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $d = Ve(Ad),
  Ud = ue({}, zn, { data: 0 }),
  Ss = Ve(Ud),
  Bd = {
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
  Fd = {
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
  Hd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hd[e]) ? !!t[e] : !1;
}
function Mi() {
  return Vd;
}
var Wd = ue({}, kr, {
    key: function (e) {
      if (e.key) {
        var t = Bd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Kr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fd[e.keyCode] || "Unidentified"
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
    getModifierState: Mi,
    charCode: function (e) {
      return e.type === "keypress" ? Kr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Kr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gd = Ve(Wd),
  Qd = ue({}, jl, {
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
  Cs = Ve(Qd),
  Kd = ue({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mi,
  }),
  Yd = Ve(Kd),
  Xd = ue({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jd = Ve(Xd),
  qd = ue({}, jl, {
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
  Zd = Ve(qd),
  bd = [9, 13, 27, 32],
  ji = vt && "CompositionEvent" in window,
  Jn = null;
vt && "documentMode" in document && (Jn = document.documentMode);
var ef = vt && "TextEvent" in window && !Jn,
  iu = vt && (!ji || (Jn && 8 < Jn && 11 >= Jn)),
  ks = " ",
  Ns = !1;
function su(e, t) {
  switch (e) {
    case "keyup":
      return bd.indexOf(t.keyCode) !== -1;
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
function au(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function tf(e, t) {
  switch (e) {
    case "compositionend":
      return au(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ns = !0), ks);
    case "textInput":
      return (e = t.data), e === ks && Ns ? null : e;
    default:
      return null;
  }
}
function nf(e, t) {
  if (cn)
    return e === "compositionend" || (!ji && su(e, t))
      ? ((e = ou()), (Qr = Ni = Et = null), (cn = !1), e)
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
      return iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rf = {
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
function _s(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rf[e.type] : t === "textarea";
}
function uu(e, t, n, r) {
  Ba(r),
    (t = al(t, "onChange")),
    0 < t.length &&
      ((n = new _i("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  ur = null;
function lf(e) {
  wu(e, 0);
}
function El(e) {
  var t = pn(e);
  if (La(t)) return e;
}
function of(e, t) {
  if (e === "change") return t;
}
var cu = !1;
if (vt) {
  var Jl;
  if (vt) {
    var ql = "oninput" in document;
    if (!ql) {
      var Ms = document.createElement("div");
      Ms.setAttribute("oninput", "return;"),
        (ql = typeof Ms.oninput == "function");
    }
    Jl = ql;
  } else Jl = !1;
  cu = Jl && (!document.documentMode || 9 < document.documentMode);
}
function js() {
  qn && (qn.detachEvent("onpropertychange", du), (ur = qn = null));
}
function du(e) {
  if (e.propertyName === "value" && El(ur)) {
    var t = [];
    uu(t, ur, e, xi(e)), Wa(lf, t);
  }
}
function sf(e, t, n) {
  e === "focusin"
    ? (js(), (qn = t), (ur = n), qn.attachEvent("onpropertychange", du))
    : e === "focusout" && js();
}
function af(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return El(ur);
}
function uf(e, t) {
  if (e === "click") return El(t);
}
function cf(e, t) {
  if (e === "input" || e === "change") return El(t);
}
function df(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : df;
function cr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mo.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function Es(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ds(e, t) {
  var n = Es(e);
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
    n = Es(n);
  }
}
function fu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pu() {
  for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tl(e.document);
  }
  return t;
}
function Ei(e) {
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
function ff(e) {
  var t = pu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ei(n)) {
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
          (l = Ds(n, o));
        var i = Ds(n, r);
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
var pf = vt && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  zo = null,
  Zn = null,
  Io = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    dn == null ||
    dn !== tl(r) ||
    ((r = dn),
    "selectionStart" in r && Ei(r)
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
    (Zn && cr(Zn, r)) ||
      ((Zn = r),
      (r = al(zo, "onSelect")),
      0 < r.length &&
        ((t = new _i("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: zr("Animation", "AnimationEnd"),
    animationiteration: zr("Animation", "AnimationIteration"),
    animationstart: zr("Animation", "AnimationStart"),
    transitionend: zr("Transition", "TransitionEnd"),
  },
  Zl = {},
  hu = {};
vt &&
  ((hu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function Dl(e) {
  if (Zl[e]) return Zl[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hu) return (Zl[e] = t[n]);
  return e;
}
var mu = Dl("animationend"),
  gu = Dl("animationiteration"),
  yu = Dl("animationstart"),
  vu = Dl("transitionend"),
  xu = new Map(),
  Rs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bt(e, t) {
  xu.set(e, t), rn(t, [e]);
}
for (var bl = 0; bl < Rs.length; bl++) {
  var eo = Rs[bl],
    hf = eo.toLowerCase(),
    mf = eo[0].toUpperCase() + eo.slice(1);
  Bt(hf, "on" + mf);
}
Bt(mu, "onAnimationEnd");
Bt(gu, "onAnimationIteration");
Bt(yu, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(vu, "onTransitionEnd");
Mn("onMouseEnter", ["mouseout", "mouseover"]);
Mn("onMouseLeave", ["mouseout", "mouseover"]);
Mn("onPointerEnter", ["pointerout", "pointerover"]);
Mn("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function Ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), pd(r, t, void 0, e), (e.currentTarget = null);
}
function wu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            f = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Ts(l, a, f), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (f = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Ts(l, a, f), (o = u);
        }
    }
  }
  if (rl) throw ((e = Po), (rl = !1), (Po = null), e);
}
function le(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Su(t, e, 2, !1), n.add(r));
}
function to(e, t, n) {
  var r = 0;
  t && (r |= 4), Su(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function dr(e) {
  if (!e[Ir]) {
    (e[Ir] = !0),
      Ea.forEach(function (n) {
        n !== "selectionchange" && (gf.has(n) || to(n, !1, e), to(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || ((t[Ir] = !0), to("selectionchange", !1, t));
  }
}
function Su(e, t, n, r) {
  switch (lu(t)) {
    case 1:
      var l = Dd;
      break;
    case 4:
      l = Pd;
      break;
    default:
      l = ki;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Do ||
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
function no(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Kt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Wa(function () {
    var f = o,
      v = xi(n),
      g = [];
    e: {
      var m = xu.get(e);
      if (m !== void 0) {
        var k = _i,
          x = e;
        switch (e) {
          case "keypress":
            if (Kr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Gd;
            break;
          case "focusin":
            (x = "focus"), (k = Xl);
            break;
          case "focusout":
            (x = "blur"), (k = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            k = Xl;
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
            k = ws;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Ld;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Yd;
            break;
          case mu:
          case gu:
          case yu:
            k = Od;
            break;
          case vu:
            k = Jd;
            break;
          case "scroll":
            k = Rd;
            break;
          case "wheel":
            k = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = $d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Cs;
        }
        var S = (t & 4) !== 0,
          O = !S && e === "scroll",
          c = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var d = f, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              c !== null && ((y = or(d, c)), y != null && S.push(fr(d, y, h)))),
            O)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((m = new k(m, x, null, n, v)), g.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          m &&
            n !== jo &&
            (x = n.relatedTarget || n.fromElement) &&
            (Kt(x) || x[xt]))
        )
          break e;
        if (
          (k || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          k
            ? ((x = n.relatedTarget || n.toElement),
              (k = f),
              (x = x ? Kt(x) : null),
              x !== null &&
                ((O = ln(x)), x !== O || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((k = null), (x = f)),
          k !== x)
        ) {
          if (
            ((S = ws),
            (y = "onMouseLeave"),
            (c = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Cs),
              (y = "onPointerLeave"),
              (c = "onPointerEnter"),
              (d = "pointer")),
            (O = k == null ? m : pn(k)),
            (h = x == null ? m : pn(x)),
            (m = new S(y, d + "leave", k, n, v)),
            (m.target = O),
            (m.relatedTarget = h),
            (y = null),
            Kt(v) === f &&
              ((S = new S(c, d + "enter", x, n, v)),
              (S.target = h),
              (S.relatedTarget = O),
              (y = S)),
            (O = y),
            k && x)
          )
            t: {
              for (S = k, c = x, d = 0, h = S; h; h = sn(h)) d++;
              for (h = 0, y = c; y; y = sn(y)) h++;
              for (; 0 < d - h; ) (S = sn(S)), d--;
              for (; 0 < h - d; ) (c = sn(c)), h--;
              for (; d--; ) {
                if (S === c || (c !== null && S === c.alternate)) break t;
                (S = sn(S)), (c = sn(c));
              }
              S = null;
            }
          else S = null;
          k !== null && Ls(g, m, k, S, !1),
            x !== null && O !== null && Ls(g, O, x, S, !0);
        }
      }
      e: {
        if (
          ((m = f ? pn(f) : window),
          (k = m.nodeName && m.nodeName.toLowerCase()),
          k === "select" || (k === "input" && m.type === "file"))
        )
          var N = of;
        else if (_s(m))
          if (cu) N = cf;
          else {
            N = af;
            var M = sf;
          }
        else
          (k = m.nodeName) &&
            k.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = uf);
        if (N && (N = N(e, f))) {
          uu(g, N, n, v);
          break e;
        }
        M && M(e, m, f),
          e === "focusout" &&
            (M = m._wrapperState) &&
            M.controlled &&
            m.type === "number" &&
            Co(m, "number", m.value);
      }
      switch (((M = f ? pn(f) : window), e)) {
        case "focusin":
          (_s(M) || M.contentEditable === "true") &&
            ((dn = M), (zo = f), (Zn = null));
          break;
        case "focusout":
          Zn = zo = dn = null;
          break;
        case "mousedown":
          Io = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Io = !1), Ps(g, n, v);
          break;
        case "selectionchange":
          if (pf) break;
        case "keydown":
        case "keyup":
          Ps(g, n, v);
      }
      var C;
      if (ji)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        cn
          ? su(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (iu &&
          n.locale !== "ko" &&
          (cn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && cn && (C = ou())
            : ((Et = v),
              (Ni = "value" in Et ? Et.value : Et.textContent),
              (cn = !0))),
        (M = al(f, D)),
        0 < M.length &&
          ((D = new Ss(D, e, null, n, v)),
          g.push({ event: D, listeners: M }),
          C ? (D.data = C) : ((C = au(n)), C !== null && (D.data = C)))),
        (C = ef ? tf(e, n) : nf(e, n)) &&
          ((f = al(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new Ss("onBeforeInput", "beforeinput", null, n, v)),
            g.push({ event: v, listeners: f }),
            (v.data = C)));
    }
    wu(g, t);
  });
}
function fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function al(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = or(e, n)),
      o != null && r.unshift(fr(e, o, l)),
      (o = or(e, t)),
      o != null && r.push(fr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ls(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      f !== null &&
      ((a = f),
      l
        ? ((u = or(n, o)), u != null && i.unshift(fr(n, u, a)))
        : l || ((u = or(n, o)), u != null && i.push(fr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var yf = /\r\n?/g,
  vf = /\u0000|\uFFFD/g;
function zs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yf,
      `
`
    )
    .replace(vf, "");
}
function Or(e, t, n) {
  if (((t = zs(t)), zs(e) !== t && n)) throw Error(_(425));
}
function ul() {}
var Oo = null,
  Ao = null;
function $o(e, t) {
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
var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
  xf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Is = typeof Promise == "function" ? Promise : void 0,
  wf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Is < "u"
      ? function (e) {
          return Is.resolve(null).then(e).catch(Sf);
        }
      : Uo;
function Sf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ro(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ar(t);
}
function Lt(e) {
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
function Os(e) {
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
var In = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + In,
  pr = "__reactProps$" + In,
  xt = "__reactContainer$" + In,
  Bo = "__reactEvents$" + In,
  Cf = "__reactListeners$" + In,
  kf = "__reactHandles$" + In;
function Kt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Os(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = Os(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Nr(e) {
  return (
    (e = e[ut] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Pl(e) {
  return e[pr] || null;
}
var Fo = [],
  hn = -1;
function Ft(e) {
  return { current: e };
}
function oe(e) {
  0 > hn || ((e.current = Fo[hn]), (Fo[hn] = null), hn--);
}
function re(e, t) {
  hn++, (Fo[hn] = e.current), (e.current = t);
}
var Ut = {},
  Me = Ft(Ut),
  Ie = Ft(!1),
  Zt = Ut;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
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
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function cl() {
  oe(Ie), oe(Me);
}
function As(e, t, n) {
  if (Me.current !== Ut) throw Error(_(168));
  re(Me, t), re(Ie, n);
}
function Cu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, id(e) || "Unknown", l));
  return ue({}, n, r);
}
function dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (Zt = Me.current),
    re(Me, e),
    re(Ie, Ie.current),
    !0
  );
}
function $s(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Cu(e, t, Zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      oe(Ie),
      oe(Me),
      re(Me, e))
    : oe(Ie),
    re(Ie, n);
}
var ht = null,
  Rl = !1,
  lo = !1;
function ku(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function Nf(e) {
  (Rl = !0), ku(e);
}
function Ht() {
  if (!lo && ht !== null) {
    lo = !0;
    var e = 0,
      t = te;
    try {
      var n = ht;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (Rl = !1);
    } catch (l) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Ya(wi, Ht), l);
    } finally {
      (te = t), (lo = !1);
    }
  }
  return null;
}
var mn = [],
  gn = 0,
  fl = null,
  pl = 0,
  Qe = [],
  Ke = 0,
  bt = null,
  mt = 1,
  gt = "";
function Gt(e, t) {
  (mn[gn++] = pl), (mn[gn++] = fl), (fl = e), (pl = t);
}
function Nu(e, t, n) {
  (Qe[Ke++] = mt), (Qe[Ke++] = gt), (Qe[Ke++] = bt), (bt = e);
  var r = mt;
  e = gt;
  var l = 32 - rt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - rt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (mt = (1 << (32 - rt(t) + l)) | (n << l) | r),
      (gt = o + e);
  } else (mt = (1 << o) | (n << l) | r), (gt = e);
}
function Di(e) {
  e.return !== null && (Gt(e, 1), Nu(e, 1, 0));
}
function Pi(e) {
  for (; e === fl; )
    (fl = mn[--gn]), (mn[gn] = null), (pl = mn[--gn]), (mn[gn] = null);
  for (; e === bt; )
    (bt = Qe[--Ke]),
      (Qe[Ke] = null),
      (gt = Qe[--Ke]),
      (Qe[Ke] = null),
      (mt = Qe[--Ke]),
      (Qe[Ke] = null);
}
var Be = null,
  Ue = null,
  ie = !1,
  nt = null;
function _u(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Us(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ue = Lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: mt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vo(e) {
  if (ie) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Us(e, t)) {
        if (Ho(e)) throw Error(_(418));
        t = Lt(n.nextSibling);
        var r = Be;
        t && Us(e, t)
          ? _u(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Be = e));
      }
    } else {
      if (Ho(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (Be = e);
    }
  }
}
function Bs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Ar(e) {
  if (e !== Be) return !1;
  if (!ie) return Bs(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Ho(e)) throw (Mu(), Error(_(418)));
    for (; t; ) _u(e, t), (t = Lt(t.nextSibling));
  }
  if ((Bs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Be ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mu() {
  for (var e = Ue; e; ) e = Lt(e.nextSibling);
}
function En() {
  (Ue = Be = null), (ie = !1);
}
function Ri(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var _f = Ct.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function $r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fs(e) {
  var t = e._init;
  return t(e._payload);
}
function ju(e) {
  function t(c, d) {
    if (e) {
      var h = c.deletions;
      h === null ? ((c.deletions = [d]), (c.flags |= 16)) : h.push(d);
    }
  }
  function n(c, d) {
    if (!e) return null;
    for (; d !== null; ) t(c, d), (d = d.sibling);
    return null;
  }
  function r(c, d) {
    for (c = new Map(); d !== null; )
      d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling);
    return c;
  }
  function l(c, d) {
    return (c = At(c, d)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, d, h) {
    return (
      (c.index = h),
      e
        ? ((h = c.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((c.flags |= 2), d) : h)
            : ((c.flags |= 2), d))
        : ((c.flags |= 1048576), d)
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function a(c, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = fo(h, c.mode, y)), (d.return = c), d)
      : ((d = l(d, h)), (d.return = c), d);
  }
  function u(c, d, h, y) {
    var N = h.type;
    return N === un
      ? v(c, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Nt &&
            Fs(N) === d.type))
      ? ((y = l(d, h.props)), (y.ref = Fn(c, d, h)), (y.return = c), y)
      : ((y = el(h.type, h.key, h.props, null, c.mode, y)),
        (y.ref = Fn(c, d, h)),
        (y.return = c),
        y);
  }
  function f(c, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = po(h, c.mode, y)), (d.return = c), d)
      : ((d = l(d, h.children || [])), (d.return = c), d);
  }
  function v(c, d, h, y, N) {
    return d === null || d.tag !== 7
      ? ((d = qt(h, c.mode, y, N)), (d.return = c), d)
      : ((d = l(d, h)), (d.return = c), d);
  }
  function g(c, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = fo("" + d, c.mode, h)), (d.return = c), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case jr:
          return (
            (h = el(d.type, d.key, d.props, null, c.mode, h)),
            (h.ref = Fn(c, null, d)),
            (h.return = c),
            h
          );
        case an:
          return (d = po(d, c.mode, h)), (d.return = c), d;
        case Nt:
          var y = d._init;
          return g(c, y(d._payload), h);
      }
      if (Gn(d) || On(d))
        return (d = qt(d, c.mode, h, null)), (d.return = c), d;
      $r(c, d);
    }
    return null;
  }
  function m(c, d, h, y) {
    var N = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : a(c, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case jr:
          return h.key === N ? u(c, d, h, y) : null;
        case an:
          return h.key === N ? f(c, d, h, y) : null;
        case Nt:
          return (N = h._init), m(c, d, N(h._payload), y);
      }
      if (Gn(h) || On(h)) return N !== null ? null : v(c, d, h, y, null);
      $r(c, h);
    }
    return null;
  }
  function k(c, d, h, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (c = c.get(h) || null), a(d, c, "" + y, N);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case jr:
          return (c = c.get(y.key === null ? h : y.key) || null), u(d, c, y, N);
        case an:
          return (c = c.get(y.key === null ? h : y.key) || null), f(d, c, y, N);
        case Nt:
          var M = y._init;
          return k(c, d, h, M(y._payload), N);
      }
      if (Gn(y) || On(y)) return (c = c.get(h) || null), v(d, c, y, N, null);
      $r(d, y);
    }
    return null;
  }
  function x(c, d, h, y) {
    for (
      var N = null, M = null, C = d, D = (d = 0), X = null;
      C !== null && D < h.length;
      D++
    ) {
      C.index > D ? ((X = C), (C = null)) : (X = C.sibling);
      var F = m(c, C, h[D], y);
      if (F === null) {
        C === null && (C = X);
        break;
      }
      e && C && F.alternate === null && t(c, C),
        (d = o(F, d, D)),
        M === null ? (N = F) : (M.sibling = F),
        (M = F),
        (C = X);
    }
    if (D === h.length) return n(c, C), ie && Gt(c, D), N;
    if (C === null) {
      for (; D < h.length; D++)
        (C = g(c, h[D], y)),
          C !== null &&
            ((d = o(C, d, D)), M === null ? (N = C) : (M.sibling = C), (M = C));
      return ie && Gt(c, D), N;
    }
    for (C = r(c, C); D < h.length; D++)
      (X = k(C, c, D, h[D], y)),
        X !== null &&
          (e && X.alternate !== null && C.delete(X.key === null ? D : X.key),
          (d = o(X, d, D)),
          M === null ? (N = X) : (M.sibling = X),
          (M = X));
    return (
      e &&
        C.forEach(function (de) {
          return t(c, de);
        }),
      ie && Gt(c, D),
      N
    );
  }
  function S(c, d, h, y) {
    var N = On(h);
    if (typeof N != "function") throw Error(_(150));
    if (((h = N.call(h)), h == null)) throw Error(_(151));
    for (
      var M = (N = null), C = d, D = (d = 0), X = null, F = h.next();
      C !== null && !F.done;
      D++, F = h.next()
    ) {
      C.index > D ? ((X = C), (C = null)) : (X = C.sibling);
      var de = m(c, C, F.value, y);
      if (de === null) {
        C === null && (C = X);
        break;
      }
      e && C && de.alternate === null && t(c, C),
        (d = o(de, d, D)),
        M === null ? (N = de) : (M.sibling = de),
        (M = de),
        (C = X);
    }
    if (F.done) return n(c, C), ie && Gt(c, D), N;
    if (C === null) {
      for (; !F.done; D++, F = h.next())
        (F = g(c, F.value, y)),
          F !== null &&
            ((d = o(F, d, D)), M === null ? (N = F) : (M.sibling = F), (M = F));
      return ie && Gt(c, D), N;
    }
    for (C = r(c, C); !F.done; D++, F = h.next())
      (F = k(C, c, D, F.value, y)),
        F !== null &&
          (e && F.alternate !== null && C.delete(F.key === null ? D : F.key),
          (d = o(F, d, D)),
          M === null ? (N = F) : (M.sibling = F),
          (M = F));
    return (
      e &&
        C.forEach(function (Te) {
          return t(c, Te);
        }),
      ie && Gt(c, D),
      N
    );
  }
  function O(c, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === un &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case jr:
          e: {
            for (var N = h.key, M = d; M !== null; ) {
              if (M.key === N) {
                if (((N = h.type), N === un)) {
                  if (M.tag === 7) {
                    n(c, M.sibling),
                      (d = l(M, h.props.children)),
                      (d.return = c),
                      (c = d);
                    break e;
                  }
                } else if (
                  M.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Nt &&
                    Fs(N) === M.type)
                ) {
                  n(c, M.sibling),
                    (d = l(M, h.props)),
                    (d.ref = Fn(c, M, h)),
                    (d.return = c),
                    (c = d);
                  break e;
                }
                n(c, M);
                break;
              } else t(c, M);
              M = M.sibling;
            }
            h.type === un
              ? ((d = qt(h.props.children, c.mode, y, h.key)),
                (d.return = c),
                (c = d))
              : ((y = el(h.type, h.key, h.props, null, c.mode, y)),
                (y.ref = Fn(c, d, h)),
                (y.return = c),
                (c = y));
          }
          return i(c);
        case an:
          e: {
            for (M = h.key; d !== null; ) {
              if (d.key === M)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(c, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = c),
                    (c = d);
                  break e;
                } else {
                  n(c, d);
                  break;
                }
              else t(c, d);
              d = d.sibling;
            }
            (d = po(h, c.mode, y)), (d.return = c), (c = d);
          }
          return i(c);
        case Nt:
          return (M = h._init), O(c, d, M(h._payload), y);
      }
      if (Gn(h)) return x(c, d, h, y);
      if (On(h)) return S(c, d, h, y);
      $r(c, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(c, d.sibling), (d = l(d, h)), (d.return = c), (c = d))
          : (n(c, d), (d = fo(h, c.mode, y)), (d.return = c), (c = d)),
        i(c))
      : n(c, d);
  }
  return O;
}
var Dn = ju(!0),
  Eu = ju(!1),
  hl = Ft(null),
  ml = null,
  yn = null,
  Ti = null;
function Li() {
  Ti = yn = ml = null;
}
function zi(e) {
  var t = hl.current;
  oe(hl), (e._currentValue = t);
}
function Wo(e, t, n) {
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
function Nn(e, t) {
  (ml = e),
    (Ti = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (Ti !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (ml === null) throw Error(_(308));
      (yn = e), (ml.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var Yt = null;
function Ii(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function Du(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ii(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
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
var _t = !1;
function Oi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Pu(e, t) {
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
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ii(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function Yr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Si(e, n);
  }
}
function Hs(e, t) {
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
function gl(e, t, n, r) {
  var l = e.updateQueue;
  _t = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      f = u.next;
    (u.next = null), i === null ? (o = f) : (i.next = f), (i = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (a = v.lastBaseUpdate),
      a !== i &&
        (a === null ? (v.firstBaseUpdate = f) : (a.next = f),
        (v.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (v = f = u = null), (a = o);
    do {
      var m = a.lane,
        k = a.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: k,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            S = a;
          switch (((m = t), (k = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                g = x.call(k, g, m);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (m = typeof x == "function" ? x.call(k, g, m) : x),
                m == null)
              )
                break e;
              g = ue({}, g, m);
              break e;
            case 2:
              _t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (k = {
          eventTime: k,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          v === null ? ((f = v = k), (u = g)) : (v = v.next = k),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (tn |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Vs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var _r = {},
  dt = Ft(_r),
  hr = Ft(_r),
  mr = Ft(_r);
function Xt(e) {
  if (e === _r) throw Error(_(174));
  return e;
}
function Ai(e, t) {
  switch ((re(mr, t), re(hr, e), re(dt, _r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  oe(dt), re(dt, t);
}
function Pn() {
  oe(dt), oe(hr), oe(mr);
}
function Ru(e) {
  Xt(mr.current);
  var t = Xt(dt.current),
    n = No(t, e.type);
  t !== n && (re(hr, e), re(dt, n));
}
function $i(e) {
  hr.current === e && (oe(dt), oe(hr));
}
var se = Ft(0);
function yl(e) {
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
var oo = [];
function Ui() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Xr = Ct.ReactCurrentDispatcher,
  io = Ct.ReactCurrentBatchConfig,
  en = 0,
  ae = null,
  ge = null,
  ve = null,
  vl = !1,
  bn = !1,
  gr = 0,
  Mf = 0;
function ke() {
  throw Error(_(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Fi(e, t, n, r, l, o) {
  if (
    ((en = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xr.current = e === null || e.memoizedState === null ? Pf : Rf),
    (e = n(r, l)),
    bn)
  ) {
    o = 0;
    do {
      if (((bn = !1), (gr = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (ve = ge = null),
        (t.updateQueue = null),
        (Xr.current = Tf),
        (e = n(r, l));
    } while (bn);
  }
  if (
    ((Xr.current = xl),
    (t = ge !== null && ge.next !== null),
    (en = 0),
    (ve = ge = ae = null),
    (vl = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Hi() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function qe() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = ve === null ? ae.memoizedState : ve.next;
  if (t !== null) (ve = t), (ge = e);
  else {
    if (e === null) throw Error(_(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function so(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ge,
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
    var a = (i = null),
      u = null,
      f = o;
    do {
      var v = f.lane;
      if ((en & v) === v)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var g = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        u === null ? ((a = u = g), (i = r)) : (u = u.next = g),
          (ae.lanes |= v),
          (tn |= v);
      }
      f = f.next;
    } while (f !== null && f !== o);
    u === null ? (i = r) : (u.next = a),
      ot(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (tn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ot(o, t.memoizedState) || (ze = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Tu() {}
function Lu(e, t) {
  var n = ae,
    r = qe(),
    l = t(),
    o = !ot(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ze = !0)),
    (r = r.queue),
    Vi(Ou.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vr(9, Iu.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(_(349));
    en & 30 || zu(n, t, l);
  }
  return l;
}
function zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Iu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Au(t) && $u(e);
}
function Ou(e, t, n) {
  return n(function () {
    Au(t) && $u(e);
  });
}
function Au(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function $u(e) {
  var t = wt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function Ws(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Df.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Uu() {
  return qe().memoizedState;
}
function Jr(e, t, n, r) {
  var l = at();
  (ae.flags |= e),
    (l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tl(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = vr(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = vr(1 | t, n, o, r));
}
function Gs(e, t) {
  return Jr(8390656, 8, e, t);
}
function Vi(e, t) {
  return Tl(2048, 8, e, t);
}
function Bu(e, t) {
  return Tl(4, 2, e, t);
}
function Fu(e, t) {
  return Tl(4, 4, e, t);
}
function Hu(e, t) {
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
function Vu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tl(4, 4, Hu.bind(null, t, e), n)
  );
}
function Wi() {}
function Wu(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Gu(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qu(e, t, n) {
  return en & 21
    ? (ot(n, t) || ((n = qa()), (ae.lanes |= n), (tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function jf(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = io.transition;
  io.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (io.transition = r);
  }
}
function Ku() {
  return qe().memoizedState;
}
function Ef(e, t, n) {
  var r = Ot(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yu(e))
  )
    Xu(t, n);
  else if (((n = Du(e, t, n, r)), n !== null)) {
    var l = Ee();
    lt(n, e, r, l), Ju(n, t, r);
  }
}
function Df(e, t, n) {
  var r = Ot(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yu(e)) Xu(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ot(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ii(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Du(e, t, l, r)),
      n !== null && ((l = Ee()), lt(n, e, r, l), Ju(n, t, r));
  }
}
function Yu(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Xu(e, t) {
  bn = vl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ju(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Si(e, n);
  }
}
var xl = {
    readContext: Je,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Pf = {
    readContext: Je,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Gs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Jr(4194308, 4, Hu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Jr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
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
        (e = e.dispatch = Ef.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ws,
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = Ws(!1),
        t = e[0];
      return (e = jf.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = at();
      if (ie) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(_(349));
        en & 30 || zu(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Gs(Ou.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        vr(9, Iu.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = xe.identifierPrefix;
      if (ie) {
        var n = gt,
          r = mt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Mf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rf = {
    readContext: Je,
    useCallback: Wu,
    useContext: Je,
    useEffect: Vi,
    useImperativeHandle: Vu,
    useInsertionEffect: Bu,
    useLayoutEffect: Fu,
    useMemo: Gu,
    useReducer: so,
    useRef: Uu,
    useState: function () {
      return so(yr);
    },
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      var t = qe();
      return Qu(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = so(yr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Tu,
    useSyncExternalStore: Lu,
    useId: Ku,
    unstable_isNewReconciler: !1,
  },
  Tf = {
    readContext: Je,
    useCallback: Wu,
    useContext: Je,
    useEffect: Vi,
    useImperativeHandle: Vu,
    useInsertionEffect: Bu,
    useLayoutEffect: Fu,
    useMemo: Gu,
    useReducer: ao,
    useRef: Uu,
    useState: function () {
      return ao(yr);
    },
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      var t = qe();
      return ge === null ? (t.memoizedState = e) : Qu(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(yr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Tu,
    useSyncExternalStore: Lu,
    useId: Ku,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      l = Ot(e),
      o = yt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = zt(e, o, l)),
      t !== null && (lt(t, e, l, r), Yr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      l = Ot(e),
      o = yt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = zt(e, o, l)),
      t !== null && (lt(t, e, l, r), Yr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Ot(e),
      l = yt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = zt(e, l, r)),
      t !== null && (lt(t, e, r, n), Yr(t, e, r));
  },
};
function Qs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(l, o)
      : !0
  );
}
function qu(e, t, n) {
  var r = !1,
    l = Ut,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Je(o))
      : ((l = Oe(t) ? Zt : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? jn(e, l) : Ut)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function Qo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Oi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Je(o))
    : ((o = Oe(t) ? Zt : Me.current), (l.context = jn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Go(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      gl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += od(r)), (r = r.return);
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
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ko(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lf = typeof WeakMap == "function" ? WeakMap : Map;
function Zu(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Sl || ((Sl = !0), (ri = r)), Ko(e, t);
    }),
    n
  );
}
function bu(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ko(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ko(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ys(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Kf.bind(null, e, t, n)), t.then(e, e));
}
function Xs(e) {
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
function Js(e, t, n, r, l) {
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
              : ((t = yt(-1, 1)), (t.tag = 2), zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zf = Ct.ReactCurrentOwner,
  ze = !1;
function je(e, t, n, r) {
  t.child = e === null ? Eu(t, null, n, r) : Dn(t, e.child, n, r);
}
function qs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Nn(t, l),
    (r = Fi(e, t, n, r, o, l)),
    (n = Hi()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (ie && n && Di(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function Zs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Zi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ec(e, t, o, r, l))
      : ((e = el(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(i, r) && e.ref === t.ref)
    )
      return St(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = At(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ec(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (cr(o, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), St(e, t, l);
  }
  return Yo(e, t, n, r, l);
}
function tc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(xn, $e),
        ($e |= n);
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
          re(xn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(xn, $e),
        ($e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(xn, $e),
      ($e |= r);
  return je(e, t, l, n), t.child;
}
function nc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yo(e, t, n, r, l) {
  var o = Oe(n) ? Zt : Me.current;
  return (
    (o = jn(t, o)),
    Nn(t, l),
    (n = Fi(e, t, n, r, o, l)),
    (r = Hi()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (ie && r && Di(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function bs(e, t, n, r, l) {
  if (Oe(n)) {
    var o = !0;
    dl(t);
  } else o = !1;
  if ((Nn(t, l), t.stateNode === null))
    qr(e, t), qu(t, n, r), Qo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Je(f))
      : ((f = Oe(n) ? Zt : Me.current), (f = jn(t, f)));
    var v = n.getDerivedStateFromProps,
      g =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== f) && Ks(t, i, r, f)),
      (_t = !1);
    var m = t.memoizedState;
    (i.state = m),
      gl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Ie.current || _t
        ? (typeof v == "function" && (Go(t, n, v, r), (u = t.memoizedState)),
          (a = _t || Qs(t, n, a, r, m, u, f))
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
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = f),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Pu(e, t),
      (a = t.memoizedProps),
      (f = t.type === t.elementType ? a : et(t.type, a)),
      (i.props = f),
      (g = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Je(u))
        : ((u = Oe(n) ? Zt : Me.current), (u = jn(t, u)));
    var k = n.getDerivedStateFromProps;
    (v =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== g || m !== u) && Ks(t, i, r, u)),
      (_t = !1),
      (m = t.memoizedState),
      (i.state = m),
      gl(t, r, i, l);
    var x = t.memoizedState;
    a !== g || m !== x || Ie.current || _t
      ? (typeof k == "function" && (Go(t, n, k, r), (x = t.memoizedState)),
        (f = _t || Qs(t, n, f, r, m, x, u) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xo(e, t, n, r, o, l);
}
function Xo(e, t, n, r, l, o) {
  nc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && $s(t, n, !1), St(e, t, o);
  (r = t.stateNode), (zf.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Dn(t, e.child, null, o)), (t.child = Dn(t, null, a, o)))
      : je(e, t, a, o),
    (t.memoizedState = r.state),
    l && $s(t, n, !0),
    t.child
  );
}
function rc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? As(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && As(e, t.context, !1),
    Ai(e, t.containerInfo);
}
function ea(e, t, n, r, l) {
  return En(), Ri(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lc(e, t, n) {
  var r = t.pendingProps,
    l = se.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(se, l & 1),
    e === null)
  )
    return (
      Vo(t),
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
                : (o = Ol(i, r, 0, null)),
              (e = qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = qo(n)),
              (t.memoizedState = Jo),
              e)
            : Gi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return If(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = At(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = At(a, o)) : ((o = qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? qo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = At(o, { mode: "visible", children: r.children })),
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
function Gi(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ur(e, t, n, r) {
  return (
    r !== null && Ri(r),
    Dn(t, e.child, null, n),
    (e = Gi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function If(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uo(Error(_(422)))), Ur(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, l, 0, null)),
        (o = qt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Dn(t, e.child, null, i),
        (t.child.memoizedState = qo(i)),
        (t.memoizedState = Jo),
        o);
  if (!(t.mode & 1)) return Ur(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(_(419))), (r = uo(o, r, void 0)), Ur(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), ze || a)) {
    if (((r = xe), r !== null)) {
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
          ((o.retryLane = l), wt(e, l), lt(r, e, l, -1));
    }
    return qi(), (r = uo(Error(_(421)))), Ur(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ue = Lt(l.nextSibling)),
      (Be = t),
      (ie = !0),
      (nt = null),
      e !== null &&
        ((Qe[Ke++] = mt),
        (Qe[Ke++] = gt),
        (Qe[Ke++] = bt),
        (mt = e.id),
        (gt = e.overflow),
        (bt = t)),
      (t = Gi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ta(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wo(e.return, t, n);
}
function co(e, t, n, r, l) {
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
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ta(e, n, t);
        else if (e.tag === 19) ta(e, n, t);
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
  if ((re(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && yl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          co(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && yl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        co(t, !0, n, null, o);
        break;
      case "together":
        co(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Of(e, t, n) {
  switch (t.tag) {
    case 3:
      rc(t), En();
      break;
    case 5:
      Ru(t);
      break;
    case 1:
      Oe(t.type) && dl(t);
      break;
    case 4:
      Ai(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(hl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lc(e, t, n)
          : (re(se, se.current & 1),
            (e = St(e, t, n)),
            e !== null ? e.sibling : null);
      re(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), tc(e, t, n);
  }
  return St(e, t, n);
}
var ic, Zo, sc, ac;
ic = function (e, t) {
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
Zo = function () {};
sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Xt(dt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = wo(e, l)), (r = wo(e, r)), (o = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ko(e, l)), (r = ko(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ul);
    }
    _o(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var a = l[f];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (rr.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (
        ((a = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && u !== a && (u != null || a != null))
      )
        if (f === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(f, n)), (n = u);
        else
          f === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(f, u))
            : f === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(f, "" + u)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(f)
                ? (u != null && f === "onScroll" && le("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(f, u));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
ac = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!ie)
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
function Ne(e) {
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
function Af(e, t, n) {
  var r = t.pendingProps;
  switch ((Pi(t), t.tag)) {
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
      return Ne(t), null;
    case 1:
      return Oe(t.type) && cl(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pn(),
        oe(Ie),
        oe(Me),
        Ui(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (ii(nt), (nt = null)))),
        Zo(e, t),
        Ne(t),
        null
      );
    case 5:
      $i(t);
      var l = Xt(mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ne(t), null;
        }
        if (((e = Xt(dt.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ut] = t), (r[pr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kn.length; l++) le(Kn[l], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              cs(r, o), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              fs(r, o), le("invalid", r);
          }
          _o(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Or(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : rr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              Er(r), ds(r, o, !0);
              break;
            case "textarea":
              Er(r), ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ul);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Oa(n)),
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
            (e[ut] = t),
            (e[pr] = r),
            ic(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Mo(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kn.length; l++) le(Kn[l], e);
                l = r;
                break;
              case "source":
                le("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (l = r);
                break;
              case "details":
                le("toggle", e), (l = r);
                break;
              case "input":
                cs(e, r), (l = wo(e, r)), le("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                fs(e, r), (l = ko(e, r)), le("invalid", e);
                break;
              default:
                l = r;
            }
            _o(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Ua(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Aa(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && lr(e, u)
                    : typeof u == "number" && lr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (rr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && le("scroll", e)
                      : u != null && mi(e, o, u, i));
              }
            switch (n) {
              case "input":
                Er(e), ds(e, r, !1);
                break;
              case "textarea":
                Er(e), ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ul);
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
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = Xt(mr.current)), Xt(dt.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (o = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Or(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Or(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (oe(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Ue !== null && t.mode & 1 && !(t.flags & 128))
          Mu(), En(), (t.flags |= 98560), (o = !1);
        else if (((o = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[ut] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else nt !== null && (ii(nt), (nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? ye === 0 && (ye = 3) : qi())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Pn(), Zo(e, t), e === null && dr(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return zi(t.type._context), Ne(t), null;
    case 17:
      return Oe(t.type) && cl(), Ne(t), null;
    case 19:
      if ((oe(se), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Hn(o, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = yl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(o, !1),
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
                return re(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > Tn &&
            ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ie)
            )
              return Ne(t), null;
          } else
            2 * pe() - o.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = se.current),
          re(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Ji(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function $f(e, t) {
  switch ((Pi(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && cl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pn(),
        oe(Ie),
        oe(Me),
        Ui(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $i(t), null;
    case 13:
      if (
        (oe(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return oe(se), null;
    case 4:
      return Pn(), null;
    case 10:
      return zi(t.type._context), null;
    case 22:
    case 23:
      return Ji(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1,
  _e = !1,
  Uf = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function bo(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var na = !1;
function Bf(e, t) {
  if (((Oo = il), (e = pu()), Ei(e))) {
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
            a = -1,
            u = -1,
            f = 0,
            v = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var k;
              g !== n || (l !== 0 && g.nodeType !== 3) || (a = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (k = g.firstChild) !== null;

            )
              (m = g), (g = k);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++f === l && (a = i),
                m === o && ++v === r && (u = i),
                (k = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = k;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ao = { focusedElem: e, selectionRange: n }, il = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
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
                    O = x.memoizedState,
                    c = t.stateNode,
                    d = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : et(t.type, S),
                      O
                    );
                  c.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (y) {
          ce(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (x = na), (na = !1), x;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
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
function ei(e) {
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
function uc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), uc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[pr], delete t[Bo], delete t[Cf], delete t[kf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ra(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cc(e.return)) return null;
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
function ti(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), (e = e.sibling);
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
var we = null,
  tt = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) dc(e, t, n), (n = n.sibling);
}
function dc(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || vn(n, t);
    case 6:
      var r = we,
        l = tt;
      (we = null),
        kt(e, t, n),
        (we = r),
        (tt = l),
        we !== null &&
          (tt
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (tt
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? ro(e.parentNode, n)
              : e.nodeType === 1 && ro(e, n),
            ar(e))
          : ro(we, n.stateNode));
      break;
    case 4:
      (r = we),
        (l = tt),
        (we = n.stateNode.containerInfo),
        (tt = !0),
        kt(e, t, n),
        (we = r),
        (tt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), kt(e, t, n), (_e = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function la(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uf()),
      t.forEach(function (r) {
        var l = Xf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (we = a.stateNode), (tt = !1);
              break e;
            case 3:
              (we = a.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (we = a.stateNode.containerInfo), (tt = !0);
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(_(160));
        dc(o, i, l), (we = null), (tt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (f) {
        ce(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fc(t, e), (t = t.sibling);
}
function fc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((be(t, e), st(e), r & 4)) {
        try {
          er(3, e, e.return), zl(3, e);
        } catch (S) {
          ce(e, e.return, S);
        }
        try {
          er(5, e, e.return);
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 1:
      be(t, e), st(e), r & 512 && n !== null && vn(n, n.return);
      break;
    case 5:
      if (
        (be(t, e),
        st(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          lr(l, "");
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && za(l, o),
              Mo(a, i);
            var f = Mo(a, o);
            for (i = 0; i < u.length; i += 2) {
              var v = u[i],
                g = u[i + 1];
              v === "style"
                ? Ua(l, g)
                : v === "dangerouslySetInnerHTML"
                ? Aa(l, g)
                : v === "children"
                ? lr(l, g)
                : mi(l, v, g, f);
            }
            switch (a) {
              case "input":
                So(l, o);
                break;
              case "textarea":
                Ia(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? wn(l, !!o.multiple, k, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(l, !!o.multiple, o.defaultValue, !0)
                      : wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[pr] = o;
          } catch (S) {
            ce(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((be(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (be(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ar(t.containerInfo);
        } catch (S) {
          ce(e, e.return, S);
        }
      break;
    case 4:
      be(t, e), st(e);
      break;
    case 13:
      be(t, e),
        st(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Yi = pe())),
        r & 4 && la(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (f = _e) || v), be(t, e), (_e = f)) : be(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (I = e, v = e.child; v !== null; ) {
            for (g = I = v; I !== null; ) {
              switch (((m = I), (k = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      ce(r, n, S);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ia(g);
                    continue;
                  }
              }
              k !== null ? ((k.return = m), (I = k)) : ia(g);
            }
            v = v.sibling;
          }
        e: for (v = null, g = e; ; ) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                (l = g.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = $a("display", i)));
              } catch (S) {
                ce(e, e.return, S);
              }
            }
          } else if (g.tag === 6) {
            if (v === null)
              try {
                g.stateNode.nodeValue = f ? "" : g.memoizedProps;
              } catch (S) {
                ce(e, e.return, S);
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
            v === g && (v = null), (g = g.return);
          }
          v === g && (v = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      be(t, e), st(e), r & 4 && la(e);
      break;
    case 21:
      break;
    default:
      be(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (lr(l, ""), (r.flags &= -33));
          var o = ra(e);
          ni(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ra(e);
          ti(e, a, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ff(e, t, n) {
  (I = e), pc(e);
}
function pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var l = I,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Br;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || _e;
        a = Br;
        var f = _e;
        if (((Br = i), (_e = u) && !f))
          for (I = l; I !== null; )
            (i = I),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? sa(l)
                : u !== null
                ? ((u.return = i), (I = u))
                : sa(l);
        for (; o !== null; ) (I = o), pc(o), (o = o.sibling);
        (I = l), (Br = a), (_e = f);
      }
      oa(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (I = o)) : oa(e);
  }
}
function oa(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Vs(t, o, r);
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
                Vs(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var g = v.dehydrated;
                    g !== null && ar(g);
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
              throw Error(_(163));
          }
        _e || (t.flags & 512 && ei(t));
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ia(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function sa(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var o = t.return;
          try {
            ei(t);
          } catch (u) {
            ce(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ei(t);
          } catch (u) {
            ce(t, i, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var Hf = Math.ceil,
  wl = Ct.ReactCurrentDispatcher,
  Qi = Ct.ReactCurrentOwner,
  Xe = Ct.ReactCurrentBatchConfig,
  Z = 0,
  xe = null,
  he = null,
  Se = 0,
  $e = 0,
  xn = Ft(0),
  ye = 0,
  xr = null,
  tn = 0,
  Il = 0,
  Ki = 0,
  tr = null,
  Le = null,
  Yi = 0,
  Tn = 1 / 0,
  pt = null,
  Sl = !1,
  ri = null,
  It = null,
  Fr = !1,
  Dt = null,
  Cl = 0,
  nr = 0,
  li = null,
  Zr = -1,
  br = 0;
function Ee() {
  return Z & 6 ? pe() : Zr !== -1 ? Zr : (Zr = pe());
}
function Ot(e) {
  return e.mode & 1
    ? Z & 2 && Se !== 0
      ? Se & -Se
      : _f.transition !== null
      ? (br === 0 && (br = qa()), br)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lu(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (li = null), Error(_(185)));
  Cr(e, n, r),
    (!(Z & 2) || e !== xe) &&
      (e === xe && (!(Z & 2) && (Il |= n), ye === 4 && jt(e, Se)),
      Ae(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Tn = pe() + 500), Rl && Ht()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Nd(e, t);
  var r = ol(e, e === xe ? Se : 0);
  if (r === 0)
    n !== null && gs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gs(n), t === 1))
      e.tag === 0 ? Nf(aa.bind(null, e)) : ku(aa.bind(null, e)),
        wf(function () {
          !(Z & 6) && Ht();
        }),
        (n = null);
    else {
      switch (Za(r)) {
        case 1:
          n = wi;
          break;
        case 4:
          n = Xa;
          break;
        case 16:
          n = ll;
          break;
        case 536870912:
          n = Ja;
          break;
        default:
          n = ll;
      }
      n = Sc(n, hc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hc(e, t) {
  if (((Zr = -1), (br = 0), Z & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = ol(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var o = gc();
    (xe !== e || Se !== t) && ((pt = null), (Tn = pe() + 500), Jt(e, t));
    do
      try {
        Gf();
        break;
      } catch (a) {
        mc(e, a);
      }
    while (!0);
    Li(),
      (wl.current = o),
      (Z = l),
      he !== null ? (t = 0) : ((xe = null), (Se = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ro(e)), l !== 0 && ((r = l), (t = oi(e, l)))), t === 1)
    )
      throw ((n = xr), Jt(e, 0), jt(e, r), Ae(e, pe()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Vf(l) &&
          ((t = kl(e, r)),
          t === 2 && ((o = Ro(e)), o !== 0 && ((r = o), (t = oi(e, o)))),
          t === 1))
      )
        throw ((n = xr), Jt(e, 0), jt(e, r), Ae(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Qt(e, Le, pt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Yi + 500 - pe()), 10 < t))
          ) {
            if (ol(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Uo(Qt.bind(null, e, Le, pt), t);
            break;
          }
          Qt(e, Le, pt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - rt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = pe() - r),
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
                : 1960 * Hf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uo(Qt.bind(null, e, Le, pt), r);
            break;
          }
          Qt(e, Le, pt);
          break;
        case 5:
          Qt(e, Le, pt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ae(e, pe()), e.callbackNode === n ? hc.bind(null, e) : null;
}
function oi(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && ii(t)),
    e
  );
}
function ii(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Vf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ot(o(), l)) return !1;
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
function jt(e, t) {
  for (
    t &= ~Ki,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function aa(e) {
  if (Z & 6) throw Error(_(327));
  _n();
  var t = ol(e, 0);
  if (!(t & 1)) return Ae(e, pe()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ro(e);
    r !== 0 && ((t = r), (n = oi(e, r)));
  }
  if (n === 1) throw ((n = xr), Jt(e, 0), jt(e, t), Ae(e, pe()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Le, pt),
    Ae(e, pe()),
    null
  );
}
function Xi(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Tn = pe() + 500), Rl && Ht());
  }
}
function nn(e) {
  Dt !== null && Dt.tag === 0 && !(Z & 6) && _n();
  var t = Z;
  Z |= 1;
  var n = Xe.transition,
    r = te;
  try {
    if (((Xe.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (Xe.transition = n), (Z = t), !(Z & 6) && Ht();
  }
}
function Ji() {
  ($e = xn.current), oe(xn);
}
function Jt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xf(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Pi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cl();
          break;
        case 3:
          Pn(), oe(Ie), oe(Me), Ui();
          break;
        case 5:
          $i(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          oe(se);
          break;
        case 19:
          oe(se);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          Ji();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (he = e = At(e.current, null)),
    (Se = $e = t),
    (ye = 0),
    (xr = null),
    (Ki = Il = tn = 0),
    (Le = tr = null),
    Yt !== null)
  ) {
    for (t = 0; t < Yt.length; t++)
      if (((n = Yt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Yt = null;
  }
  return e;
}
function mc(e, t) {
  do {
    var n = he;
    try {
      if ((Li(), (Xr.current = xl), vl)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        vl = !1;
      }
      if (
        ((en = 0),
        (ve = ge = ae = null),
        (bn = !1),
        (gr = 0),
        (Qi.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (xr = t), (he = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var f = u,
            v = a,
            g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var k = Xs(i);
          if (k !== null) {
            (k.flags &= -257),
              Js(k, i, a, o, t),
              k.mode & 1 && Ys(o, f, t),
              (t = k),
              (u = f);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ys(o, f, t), qi();
              break e;
            }
            u = Error(_(426));
          }
        } else if (ie && a.mode & 1) {
          var O = Xs(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              Js(O, i, a, o, t),
              Ri(Rn(u, a));
            break e;
          }
        }
        (o = u = Rn(u, a)),
          ye !== 4 && (ye = 2),
          tr === null ? (tr = [o]) : tr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var c = Zu(o, u, t);
              Hs(o, c);
              break e;
            case 1:
              a = u;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (It === null || !It.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = bu(o, a, t);
                Hs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vc(n);
    } catch (N) {
      (t = N), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gc() {
  var e = wl.current;
  return (wl.current = xl), e === null ? xl : e;
}
function qi() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    xe === null || (!(tn & 268435455) && !(Il & 268435455)) || jt(xe, Se);
}
function kl(e, t) {
  var n = Z;
  Z |= 2;
  var r = gc();
  (xe !== e || Se !== t) && ((pt = null), Jt(e, t));
  do
    try {
      Wf();
      break;
    } catch (l) {
      mc(e, l);
    }
  while (!0);
  if ((Li(), (Z = n), (wl.current = r), he !== null)) throw Error(_(261));
  return (xe = null), (Se = 0), ye;
}
function Wf() {
  for (; he !== null; ) yc(he);
}
function Gf() {
  for (; he !== null && !md(); ) yc(he);
}
function yc(e) {
  var t = wc(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? vc(e) : (he = t),
    (Qi.current = null);
}
function vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $f(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (he = null);
        return;
      }
    } else if (((n = Af(n, t, $e)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Qt(e, t, n) {
  var r = te,
    l = Xe.transition;
  try {
    (Xe.transition = null), (te = 1), Qf(e, t, n, r);
  } finally {
    (Xe.transition = l), (te = r);
  }
  return null;
}
function Qf(e, t, n, r) {
  do _n();
  while (Dt !== null);
  if (Z & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (_d(e, o),
    e === xe && ((he = xe = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fr ||
      ((Fr = !0),
      Sc(ll, function () {
        return _n(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Xe.transition), (Xe.transition = null);
    var i = te;
    te = 1;
    var a = Z;
    (Z |= 4),
      (Qi.current = null),
      Bf(e, n),
      fc(n, e),
      ff(Ao),
      (il = !!Oo),
      (Ao = Oo = null),
      (e.current = n),
      Ff(n),
      gd(),
      (Z = a),
      (te = i),
      (Xe.transition = o);
  } else e.current = n;
  if (
    (Fr && ((Fr = !1), (Dt = e), (Cl = l)),
    (o = e.pendingLanes),
    o === 0 && (It = null),
    xd(n.stateNode),
    Ae(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sl) throw ((Sl = !1), (e = ri), (ri = null), e);
  return (
    Cl & 1 && e.tag !== 0 && _n(),
    (o = e.pendingLanes),
    o & 1 ? (e === li ? nr++ : ((nr = 0), (li = e))) : (nr = 0),
    Ht(),
    null
  );
}
function _n() {
  if (Dt !== null) {
    var e = Za(Cl),
      t = Xe.transition,
      n = te;
    try {
      if (((Xe.transition = null), (te = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (Cl = 0), Z & 6)) throw Error(_(331));
        var l = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var o = I,
            i = o.child;
          if (I.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (I = f; I !== null; ) {
                  var v = I;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, v, o);
                  }
                  var g = v.child;
                  if (g !== null) (g.return = v), (I = g);
                  else
                    for (; I !== null; ) {
                      v = I;
                      var m = v.sibling,
                        k = v.return;
                      if ((uc(v), v === f)) {
                        I = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = k), (I = m);
                        break;
                      }
                      I = k;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var S = x.child;
                if (S !== null) {
                  x.child = null;
                  do {
                    var O = S.sibling;
                    (S.sibling = null), (S = O);
                  } while (S !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (I = i);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                (c.return = o.return), (I = c);
                break e;
              }
              I = o.return;
            }
        }
        var d = e.current;
        for (I = d; I !== null; ) {
          i = I;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (I = h);
          else
            e: for (i = d; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zl(9, a);
                  }
                } catch (N) {
                  ce(a, a.return, N);
                }
              if (a === i) {
                I = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (I = y);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((Z = l), Ht(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (Xe.transition = t);
    }
  }
  return !1;
}
function ua(e, t, n) {
  (t = Rn(n, t)),
    (t = Zu(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = Ee()),
    e !== null && (Cr(e, 1, t), Ae(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) ua(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ua(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          (e = Rn(n, e)),
            (e = bu(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = Ee()),
            t !== null && (Cr(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Se & n) === n &&
      (ye === 4 || (ye === 3 && (Se & 130023424) === Se && 500 > pe() - Yi)
        ? Jt(e, 0)
        : (Ki |= n)),
    Ae(e, t);
}
function xc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rr), (Rr <<= 1), !(Rr & 130023424) && (Rr = 4194304))
      : (t = 1));
  var n = Ee();
  (e = wt(e, t)), e !== null && (Cr(e, t, n), Ae(e, n));
}
function Yf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xc(e, n);
}
function Xf(e, t) {
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
      throw Error(_(314));
  }
  r !== null && r.delete(t), xc(e, n);
}
var wc;
wc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), Of(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ie && t.flags & 1048576 && Nu(t, pl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qr(e, t), (e = t.pendingProps);
      var l = jn(t, Me.current);
      Nn(t, n), (l = Fi(null, t, r, e, l, n));
      var o = Hi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((o = !0), dl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Oi(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            Qo(t, r, e, n),
            (t = Xo(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && Di(t), je(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = qf(r)),
          (e = et(r, e)),
          l)
        ) {
          case 0:
            t = Yo(null, t, r, e, n);
            break e;
          case 1:
            t = bs(null, t, r, e, n);
            break e;
          case 11:
            t = qs(null, t, r, e, n);
            break e;
          case 14:
            t = Zs(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        Yo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        bs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((rc(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Pu(e, t),
          gl(t, r, null, n);
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
            (l = Rn(Error(_(423)), t)), (t = ea(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Rn(Error(_(424)), t)), (t = ea(e, t, r, n, l));
            break e;
          } else
            for (
              Ue = Lt(t.stateNode.containerInfo.firstChild),
                Be = t,
                ie = !0,
                nt = null,
                n = Eu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === l)) {
            t = St(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ru(t),
        e === null && Vo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        $o(r, l) ? (i = null) : o !== null && $o(r, o) && (t.flags |= 32),
        nc(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Vo(t), null;
    case 13:
      return lc(e, t, n);
    case 4:
      return (
        Ai(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Dn(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        qs(e, t, r, l, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          re(hl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ot(o.value, i)) {
            if (o.children === l.children && !Ie.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = yt(-1, n & -n)), (u.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (u.next = u)
                          : ((u.next = v.next), (v.next = u)),
                          (f.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Wo(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Wo(i, n, t),
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
        je(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (l = Je(l)),
        (r = r(l)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = et(r, t.pendingProps)),
        (l = et(r.type, l)),
        Zs(e, t, r, l, n)
      );
    case 15:
      return ec(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : et(r, l)),
        qr(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), dl(t)) : (e = !1),
        Nn(t, n),
        qu(t, r, l),
        Qo(t, r, l, n),
        Xo(null, t, r, !0, e, n)
      );
    case 19:
      return oc(e, t, n);
    case 22:
      return tc(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Sc(e, t) {
  return Ya(e, t);
}
function Jf(e, t, n, r) {
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
function Ye(e, t, n, r) {
  return new Jf(e, t, n, r);
}
function Zi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qf(e) {
  if (typeof e == "function") return Zi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yi)) return 11;
    if (e === vi) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
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
function el(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Zi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return qt(n.children, l, o, t);
      case gi:
        (i = 8), (l |= 8);
        break;
      case go:
        return (
          (e = Ye(12, n, t, l | 2)), (e.elementType = go), (e.lanes = o), e
        );
      case yo:
        return (e = Ye(13, n, t, l)), (e.elementType = yo), (e.lanes = o), e;
      case vo:
        return (e = Ye(19, n, t, l)), (e.elementType = vo), (e.lanes = o), e;
      case Ra:
        return Ol(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Da:
              i = 10;
              break e;
            case Pa:
              i = 9;
              break e;
            case yi:
              i = 11;
              break e;
            case vi:
              i = 14;
              break e;
            case Nt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function qt(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = Ra),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fo(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function po(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zf(e, t, n, r, l) {
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
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function bi(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Zf(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ye(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Oi(o),
    e
  );
}
function bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cc(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Cu(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, a, u) {
  return (
    (e = bi(n, r, !0, e, l, o, i, a, u)),
    (e.context = Cc(null)),
    (n = e.current),
    (r = Ee()),
    (l = Ot(n)),
    (o = yt(r, l)),
    (o.callback = t ?? null),
    zt(n, o, l),
    (e.current.lanes = l),
    Cr(e, l, r),
    Ae(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var l = t.current,
    o = Ee(),
    i = Ot(l);
  return (
    (n = Cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zt(l, t, i)),
    e !== null && (lt(e, l, i, o), Yr(e, l, i)),
    i
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function es(e, t) {
  ca(e, t), (e = e.alternate) && ca(e, t);
}
function ep() {
  return null;
}
var Nc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ts(e) {
  this._internalRoot = e;
}
$l.prototype.render = ts.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Al(e, t, null, null);
};
$l.prototype.unmount = ts.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function () {
      Al(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
    Mt.splice(n, 0, e), n === 0 && ru(e);
  }
};
function ns(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function da() {}
function tp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = Nl(i);
        o.call(f);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, "", da);
    return (
      (e._reactRootContainer = i),
      (e[xt] = i.current),
      dr(e.nodeType === 8 ? e.parentNode : e),
      nn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var f = Nl(u);
      a.call(f);
    };
  }
  var u = bi(e, 0, !1, null, null, !1, !1, "", da);
  return (
    (e._reactRootContainer = u),
    (e[xt] = u.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    nn(function () {
      Al(t, u, n, r);
    }),
    u
  );
}
function Bl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Nl(i);
        a.call(u);
      };
    }
    Al(t, i, e, l);
  } else i = tp(n, t, e, l, r);
  return Nl(i);
}
ba = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 &&
          (Si(t, n | 1), Ae(t, pe()), !(Z & 6) && ((Tn = pe() + 500), Ht()));
      }
      break;
    case 13:
      nn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var l = Ee();
          lt(r, e, 1, l);
        }
      }),
        es(e, 1);
  }
};
Ci = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      lt(t, e, 134217728, n);
    }
    es(e, 134217728);
  }
};
eu = function (e) {
  if (e.tag === 13) {
    var t = Ot(e),
      n = wt(e, t);
    if (n !== null) {
      var r = Ee();
      lt(n, e, t, r);
    }
    es(e, t);
  }
};
tu = function () {
  return te;
};
nu = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
Eo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((So(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Pl(r);
            if (!l) throw Error(_(90));
            La(r), So(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ia(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
Ha = Xi;
Va = nn;
var np = { usingClientEntryPoint: !1, Events: [Nr, pn, Pl, Ba, Fa, Xi] },
  Vn = {
    findFiberByHostInstance: Kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rp = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      (Ml = Hr.inject(rp)), (ct = Hr);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ns(t)) throw Error(_(200));
  return bf(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!ns(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = Nc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = bi(e, 1, !1, null, null, n, !1, r, l)),
    (e[xt] = t.current),
    dr(e.nodeType === 8 ? e.parentNode : e),
    new ts(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Qa(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return nn(e);
};
He.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(_(200));
  return Bl(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!ns(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Nc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = kc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[xt] = t.current),
    dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new $l(t);
};
He.render = function (e, t, n) {
  if (!Ul(t)) throw Error(_(200));
  return Bl(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (nn(function () {
        Bl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Xi;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Bl(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function _c() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c);
    } catch (e) {
      console.error(e);
    }
}
_c(), (_a.exports = He);
var lp = _a.exports,
  Mc,
  fa = lp;
(Mc = fa.createRoot), fa.hydrateRoot;
const jc = j.createContext(void 0),
  op = ({ children: e }) => {
    const [t, n] = j.useState(!1),
      [r, l] = j.useState(null),
      [o, i] = j.useState(null),
      [a, u] = j.useState("medicine"),
      [f, v] = j.useState(0),
      [g, m] = j.useState({ message: "", type: "success", isVisible: !1 }),
      [k, x] = j.useState(!1),
      [S, O] = j.useState(null),
      [c, d] = j.useState("edit"),
      [h, y] = j.useState(!1),
      [N, M] = j.useState(null),
      [C, D] = j.useState(!1),
      [X, F] = j.useState(null),
      [de, Te] = j.useState(!1),
      [We, Ge] = j.useState(!1),
      [Ze, me] = j.useState(null),
      [it, w] = j.useState(!1),
      [P, T] = j.useState(null),
      [B, A] = j.useState(!1),
      [K, V] = j.useState(null),
      G = () => {
        v((Y) => Y + 1);
      },
      b = (Y, ft) => {
        m({ message: Y, type: ft, isVisible: !0 });
      },
      L = () => {
        m((Y) => ({ ...Y, isVisible: !1 }));
      },
      W = (Y) => {
        O(Y), d("edit"), x(!0);
      },
      p = () => {
        const Y = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        O(Y), d("add"), x(!0);
      },
      E = () => {
        x(!1), O(null), d("edit");
      },
      $ = (Y) => {
        M(Y), y(!0);
      },
      R = () => {
        y(!1), M(null);
      },
      z = (Y) => {
        F(Y), D(!0);
      },
      U = () => {
        D(!1), F(null);
      },
      q = (Y) => {
        me(Y), Ge(!0);
      },
      ee = () => {
        Ge(!1), me(null);
      },
      fe = (Y) => {
        T(Y), w(!0);
      },
      ne = () => {
        w(!1), T(null);
      },
      H = (Y) => {
        V(Y), A(!0);
      },
      J = () => {
        A(!1), V(null);
      };
    return s.jsx(jc.Provider, {
      value: {
        sidebarOpen: t,
        setSidebarOpen: n,
        selectedDepartmentType: r,
        setSelectedDepartmentType: l,
        apiDepartmentData: o,
        setApiDepartmentData: i,
        viewMode: a,
        setViewMode: u,
        refreshTrigger: f,
        triggerRefresh: G,
        notification: g,
        showNotification: b,
        hideNotification: L,
        medBoxModalOpen: k,
        setMedBoxModalOpen: x,
        selectedMedBox: S,
        setSelectedMedBox: O,
        openMedBoxModal: W,
        closeMedBoxModal: E,
        modalMode: c,
        setModalMode: d,
        openAddMedBoxModal: p,
        listDrawModalOpen: h,
        setListDrawModalOpen: y,
        selectedListDraw: N,
        setSelectedListDraw: M,
        openListDrawModal: $,
        closeListDrawModal: R,
        gridDrawModalOpen: C,
        setGridDrawModalOpen: D,
        selectedGridDraw: X,
        setSelectedGridDraw: F,
        openGridDrawModal: z,
        closeGridDrawModal: U,
        isLoadingMedMap: de,
        setIsLoadingMedMap: Te,
        addParentContainerModalOpen: We,
        setAddParentContainerModalOpen: Ge,
        selectedDepartmentForAdd: Ze,
        setSelectedDepartmentForAdd: me,
        openAddParentContainerModal: q,
        closeAddParentContainerModal: ee,
        addShelfDrawContainerModalOpen: it,
        setAddShelfDrawContainerModalOpen: w,
        selectedSubContainerForAdd: P,
        setSelectedSubContainerForAdd: T,
        openAddShelfDrawContainerModal: fe,
        closeAddShelfDrawContainerModal: ne,
        addSubContainerModalOpen: B,
        setAddSubContainerModalOpen: A,
        selectedParentContainerForAdd: K,
        setSelectedParentContainerForAdd: V,
        openAddSubContainerModal: H,
        closeAddSubContainerModal: J,
      },
      children: e,
    });
  },
  on = () => {
    const e = j.useContext(jc);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  ip = {
    "zh-TW": {
      "nav.title": "地圖盤點",
      "nav.home": "返回首頁",
      "nav.expandSidebar": "展開側邊欄",
      "nav.collapseSidebar": "收合側邊欄",
      "topbar.medicine": "藥品",
      "topbar.department": "部門",
      "topbar.language": "中文",
      "topbar.logout": "登出",
      "sidebar.drugMap": "地圖盤點",
      "sidebar.closeSidebar": "關閉側邊欄",
      "sidebar.departmentCategories": "部門分類",
      "sidebar.departments": "個部門",
      "canvas.lockCanvas": "鎖定畫布",
      "canvas.unlockCanvas": "解鎖畫布",
      "type.dispensingStation": "調劑台",
      "type.warehouse": "藥庫",
      "type.medBoxShelf": "藥盒層架",
      "type.storeShelf": "藥品層架",
      "type.parentContainer": "櫃體",
      "type.subContainer": "虛擬容器",
      "type.gridDraw": "格線抽屜",
      "type.listDraw": "抽屜",
      "type.medBox": "藥盒",
      "type.containers": "個容器",
      "modal.medBoxSettings": "藥盒設定",
      "modal.addMedBox": "新增藥盒",
      "modal.listDrawSettings": "抽屜設定",
      "modal.gridDrawSettings": "格線抽屜設定",
      "modal.settings": "編輯設定",
      "modal.add": "新增藥盒",
      "form.medBoxName": "藥盒名稱",
      "form.medBoxType": "藥盒類型",
      "form.widthSelection": "寬度選擇",
      "form.ipAddress": "IP 位址",
      "form.drugInfo": "藥品資料",
      "form.drawerName": "抽屜名稱",
      "form.drugList": "藥品清單",
      "form.drugCode": "藥碼",
      "form.drugName": "藥名",
      "form.chineseName": "中文名",
      "form.drugSearch": "藥品搜尋",
      "placeholder.medBoxName": "請輸入 藥盒名稱 位址",
      "placeholder.ipAddress": "請輸入 IP 位址",
      "placeholder.drawerName": "請輸入抽屜名稱",
      "placeholder.gridDrawName": "請輸入格線抽屜名稱",
      "placeholder.drugSearch": "請輸入 藥碼/藥名/中文名",
      "button.cancel": "取消",
      "button.save": "儲存",
      "button.add": "新增",
      "button.edit": "編輯",
      "button.change": "變更",
      "button.remove": "移除藥品",
      "button.search": "搜尋",
      "button.merge": "合併",
      "button.unmerge": "取消合併",
      "status.noDrugData": "此藥盒尚未配置藥品資料",
      "status.newMedBoxNoDrug": "請先建立藥盒後，進行編輯藥盒",
      "status.drawerNoDrug": "此抽屜尚未配置藥品",
      "status.gridDrawNotConfigured": "此格線抽屜尚未配置",
      "status.noDrugInfo": "無藥品資料",
      "status.drugListEmpty": "藥品清單為空",
      "status.noContent": "No content available",
      "status.notSet": "未設定",
      "status.notAdded": "未加入藥品",
      "status.searchResults": "搜尋結果將顯示於此區域",
      "status.selectCellsForDrug": "請選取合併格子以顯示藥品資訊",
      "status.selectedCellsNoDrug": "選取的格子無藥品資料",
      "status.loadingMedMapData": "正在載入地圖盤點資料...",
      "status.loadingMedMapHint": "請稍候，系統正在處理部門資料",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "login.title": "地圖盤點系統",
      "login.subtitle": "請登入以繼續使用系統",
      "login.userId": "帳號",
      "login.userIdPlaceholder": "請輸入使用者帳號",
      "login.password": "密碼",
      "login.passwordPlaceholder": "請輸入密碼",
      "login.loginButton": "登入",
      "login.loggingIn": "登入中...",
    },
    en: {
      "nav.title": "Map Inventory",
      "nav.home": "Back to Home",
      "nav.expandSidebar": "Expand Sidebar",
      "nav.collapseSidebar": "Collapse Sidebar",
      "topbar.medicine": "Medicine",
      "topbar.department": "Department",
      "topbar.language": "English",
      "topbar.logout": "Logout",
      "sidebar.drugMap": "Drug Map",
      "sidebar.closeSidebar": "Close Sidebar",
      "sidebar.departmentCategories": "Department Categories",
      "sidebar.departments": "Departments",
      "canvas.lockCanvas": "Lock Canvas",
      "canvas.unlockCanvas": "Unlock Canvas",
      "type.dispensingStation": "Dispensing Station",
      "type.warehouse": "Warehouse",
      "type.medBoxShelf": "Medicine Box Shelf",
      "type.parentContainer": "Cabinet",
      "type.subContainer": "sub container",
      "type.gridDraw": "Grid Drawer",
      "type.listDraw": "List Drawer",
      "type.medBox": "Medicine Box",
      "type.containers": "Containers",
      "modal.medBoxSettings": "Medicine Box Settings",
      "modal.addMedBox": "Add Medicine Box",
      "modal.listDrawSettings": "Drawer Settings",
      "modal.gridDrawSettings": "Grid Drawer Settings",
      "modal.settings": "Edit Settings",
      "modal.add": "Add Medicine Box",
      "form.medBoxName": "Medicine Box Name",
      "form.medBoxType": "Medicine Box Type",
      "form.widthSelection": "Width Selection",
      "form.ipAddress": "IP Address",
      "form.drugInfo": "Drug Information",
      "form.drawerName": "Drawer Name",
      "form.drugList": "Drug List",
      "form.drugCode": "Drug Code",
      "form.drugName": "Drug Name",
      "form.chineseName": "Chinese Name",
      "form.drugSearch": "Drug Search",
      "placeholder.medBoxName": "Enter medicine box name",
      "placeholder.ipAddress": "Enter IP address",
      "placeholder.drawerName": "Enter drawer name",
      "placeholder.gridDrawName": "Enter grid drawer name",
      "placeholder.drugSearch": "Enter drug code/name/Chinese name",
      "button.cancel": "Cancel",
      "button.save": "Save",
      "button.add": "Add",
      "button.edit": "Edit",
      "button.change": "Change",
      "button.remove": "Remove Drug",
      "button.search": "Search",
      "button.merge": "Merge",
      "button.unmerge": "Unmerge",
      "status.noDrugData": "This medicine box has no drug data configured",
      "status.newMedBoxNoDrug": "New medicine box has no drug data configured",
      "status.drawerNoDrug": "This drawer has no drugs configured",
      "status.gridDrawNotConfigured": "This grid drawer is not configured",
      "status.noDrugInfo": "No drug information",
      "status.drugListEmpty": "Drug list is empty",
      "status.noContent": "No content available",
      "status.notSet": "Not set",
      "status.notAdded": "No drugs added",
      "status.searchResults": "Search results will be displayed here",
      "status.selectCellsForDrug":
        "Select merged cells to display drug information",
      "status.selectedCellsNoDrug": "Selected cells have no drug data",
      "status.searching": "Searching...",
      "status.noSearchResults": "No search results found",
      "status.loadingMedMapData": "Loading medicine map data...",
      "status.loadingMedMapHint":
        "Please wait while we process department data",
      "footer.copyright": "Copyright ©2025 Hongsen Intelligent Technology",
      "login.title": "Drug Map System",
      "login.subtitle": "Please login to continue",
      "login.userId": "ID",
      "login.userIdPlaceholder": "Enter your user ID",
      "login.password": "Password",
      "login.passwordPlaceholder": "Enter your password",
      "login.loginButton": "Login",
      "login.loggingIn": "Logging in...",
    },
  },
  Ec = j.createContext(void 0),
  sp = ({ children: e }) => {
    const [t, n] = j.useState("zh-TW"),
      r = (l) => ip[t][l] || l;
    return s.jsx(Ec.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  },
  Vt = () => {
    const e = j.useContext(Ec);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Dc = j.createContext(void 0),
  ap = ({ children: e }) => {
    const [t, n] = j.useState(null);
    j.useEffect(() => {
      const o = (i) => {
        i.data.action === "MED_INVENTORY_INFO" &&
          (console.log("Received inventory data from parent:", i.data.data),
          n(i.data.data));
      };
      return (
        window.addEventListener("message", o),
        () => {
          window.removeEventListener("message", o);
        }
      );
    }, []);
    const r = () => {
        n(null);
      },
      l = (o) => {
        if (!t || !o) return null;
        const i = t[`med_${o}`];
        return i ? i.END_QTY : null;
      };
    return s.jsx(Dc.Provider, {
      value: {
        inventoryData: t,
        setInventoryData: n,
        clearInventoryData: r,
        getInventoryQty: l,
      },
      children: e,
    });
  },
  rs = () => {
    const e = j.useContext(Dc);
    if (e === void 0)
      throw new Error("useInventory must be used within an InventoryProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var up = {
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
 */ const cp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Re = (e, t) => {
    const n = j.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...f
        },
        v
      ) =>
        j.createElement(
          "svg",
          {
            ref: v,
            ...up,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${cp(e)}`, a].join(" "),
            ...f,
          },
          [
            ...t.map(([g, m]) => j.createElement(g, m)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const dp = Re("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = Re("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pp = Re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = Re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mp = Re("Globe", [
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
 */ const gp = Re("Grid3x3", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pc = Re("Layers", [
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
 */ const yp = Re("ListX", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "m19 10-4 4", key: "1tz659" }],
  ["path", { d: "m15 10 4 4", key: "1n7nei" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = Re("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const si = Re("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = Re("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rc = Re("Settings", [
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
 */ const xp = Re("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg",
    },
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = Re("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = Re("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Sp = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = on(),
      { t: n } = Vt();
    return s.jsx("div", {
      className: "fixed top-4 left-4 z-30",
      children: s.jsx("nav", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1",
        children: s.jsxs("div", {
          className: "flex items-center",
          children: [
            s.jsx("div", {
              className: "ml-2 text-lg font-semibold text-gray-900",
              children: n("nav.title"),
            }),
            s.jsx("button", {
              onClick: () => t(!e),
              className:
                "ml-8 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n(e ? "nav.collapseSidebar" : "nav.expandSidebar"),
              children: e
                ? s.jsx(pa, { className: "w-6 h-6" })
                : s.jsx(pa, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  Cp = () => {
    const { language: e, setLanguage: t, t: n } = Vt(),
      r = () => {
        t(e === "zh-TW" ? "en" : "zh-TW");
      },
      l = () => {
        window.parent !== window &&
          window.parent.postMessage({ type: "CLOSE_IFRAME" }, "*");
      };
    return s.jsx("div", {
      className:
        "fixed sm:bottom-4 sm:top-auto sm:left-auto sm:right-8 top-20 bottom-auto right-auto left-4 z-30",
      children: s.jsxs("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2",
        children: [
          s.jsxs("button", {
            onClick: r,
            className:
              "flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
            children: [
              s.jsx(mp, { className: "w-4 h-4" }),
              s.jsx("span", {
                className: "text-sm font-medium",
                children: n("topbar.language"),
              }),
            ],
          }),
          s.jsx("div", { className: "w-px h-6 bg-gray-300" }),
          s.jsxs("button", {
            onClick: l,
            className:
              "flex items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            children: [
              s.jsx(wr, { className: "w-4 h-4" }),
              s.jsx("span", {
                className: "text-sm font-medium",
                children: "關閉",
              }),
            ],
          }),
        ],
      }),
    });
  };
class kp {
  constructor() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async loadConfig() {
    var t;
    if (this.config && this.isConfigLoaded) return this.config;
    try {
      const n = await fetch("../config.txt");
      if (!n.ok) throw new Error(`Failed to load config: ${n.status}`);
      const r = await n.text();
      if (
        ((this.config = JSON.parse(r)),
        (this.isConfigLoaded = !0),
        !((t = this.config) != null && t.domain))
      )
        throw new Error("Invalid config: missing domain");
      return this.config;
    } catch (n) {
      throw (
        (console.error("Failed to load API config:", n),
        new Error("API configuration not available"))
      );
    }
  }
  async request(t, n = {}) {
    const l = `${(await this.loadConfig()).domain}${t}`,
      o = {
        method: "POST",
        headers: { "Content-Type": "application/json", ...n.headers },
        ...n,
      };
    try {
      const i = await fetch(l, o);
      if (!i.ok) throw new Error(`HTTP error! status: ${i.status}`);
      return await i.json();
    } catch (i) {
      throw (console.error(`API request failed for ${t}:`, i), i);
    }
  }
  async login(t) {
    const n = { Data: { ID: t.ID.trim(), Password: t.Password } };
    return this.request("/api/session/login", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async getDepartments(t = {}) {
    return this.request("/api/ServerSetting/get_name", {
      method: "POST",
      body: JSON.stringify(t),
    });
  }
  async getMedicineCloud(t = {}) {
    return this.request("/api/MED_page/get_med_cloud", {
      method: "POST",
      body: JSON.stringify({}),
    });
  }
  async searchMedicine(t = "", n = "N") {
    try {
      const r = await this.getMedicineCloud();
      if (r.Code !== 200 || !r.Data)
        return console.error("API returned error:", r), [];
      let l = r.Data;
      if (
        ((l = l.filter((o) => o.DRUGKIND === n)),
        (l = l.filter((o) => o.FILE_STATUS !== "關檔中")),
        t.trim())
      ) {
        const o = t.toLowerCase();
        l = l.filter(
          (i) =>
            (i.CODE && i.CODE.toLowerCase().includes(o)) ||
            (i.CHT_NAME && i.CHT_NAME.toLowerCase().includes(o)) ||
            (i.NAME && i.NAME.toLowerCase().includes(o))
        );
      }
      return l;
    } catch (r) {
      return console.error("Medicine search failed:", r), [];
    }
  }
  async getMedMapByDepartment(t) {
    const n = { Data: {}, ValueAry: [t.name, t.type] };
    return (
      console.log(n),
      this.request("/api/medMap/get_medMap_by_name_type", {
        method: "POST",
        body: JSON.stringify(n),
      })
    );
  }
  async updateContainerPosition(t) {
    const n = { Data: [t] };
    return this.request("/api/medMap/update_medMap_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapBox(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_box", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapBox(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_box", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateEpd266Storages(t, n, r) {
    const l = { ServerName: t, ServerType: n, Data: r };
    return this.request("/api/device/update_epd266_storages", {
      method: "POST",
      body: JSON.stringify(l),
    });
  }
  async updateMedMapBox(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_box", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapDrawer(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_drawer", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateMedMapShelf(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_medMap_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapSection(t, n) {
    const r = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async addMedMapShelf(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMapDrawer(t) {
    const n = { Data: t };
    return this.request("/api/medMap/add_medMap_drawer", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addSubSection(t, n) {
    const r = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_sub_section", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async updateEpd266Medcode(t, n, r, l) {
    const o = {
      ServerName: t,
      ServerType: n,
      ValueAry: [`code=${r}`],
      Data: l,
    };
    return this.request("/api/device/update_epd266_medcode", {
      method: "POST",
      body: JSON.stringify(o),
    });
  }
  async getConfig() {
    return this.loadConfig();
  }
  async checkConnection() {
    try {
      return await this.loadConfig(), !0;
    } catch (t) {
      return console.error("API connection check failed:", t), !1;
    }
  }
  resetConfig() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
}
const ai = new kp();
class Np {
  convertMedMapApiToFakeData(t) {
    console.log("🔄 開始轉換 MedMap API 資料到假資料格式"),
      console.log("📥 原始 API 資料:", t);
    try {
      Array.isArray(t) ||
        (console.warn("⚠️ API 資料不是陣列格式，嘗試包裝成陣列"), (t = [t]));
      const r = t
        .map((l, o) => this.convertSingleDepartment(l, o))
        .filter((l) => {
          if (Object.keys(l).length !== 0) return l;
        });
      return console.log("✅ MedMap 資料轉換完成，結果:", r), r;
    } catch (n) {
      return console.error("❌ MedMap 資料轉換失敗:", n), [];
    }
  }
  convertSingleDepartment(t, n) {
    if (Object.keys(t).length !== 0) {
      let r;
      t.absolute_position ? (r = t.absolute_position.split(",")) : (r = [0, 0]);
      const l = {
        GUID: t.GUID || t.guid || `dept_${n}_${Date.now()}`,
        Master_GUID: t.Master_GUID,
        type: t.sys_ServerSetting.type || "",
        name: t.sys_ServerSetting.name || "",
        gird_position: t.position,
        position: { x: r[0], y: r[1] },
        contents: t.medMap_Section,
        department_type: t.sys_ServerSetting["department_type "],
        class: 0,
      };
      return (
        Array.isArray(t.medMap_Section) &&
          t.medMap_Section.forEach((o, i) => {
            let a;
            o.absolute_position
              ? (a = o.absolute_position.split(","))
              : (a = [0, 0]),
              (l.contents[i] = {
                GUID: o.GUID,
                MASTER_GUID: o.Master_GUID,
                name: o.name,
                type: "parent_container",
                class: 1,
                gird_position: o.position,
                position: { x: a[0], y: a[1] },
                serverName: t.sys_ServerSetting.name,
                serverType: t.sys_ServerSetting.type,
                contents: [],
              }),
              Array.isArray(o.sub_section) &&
                o.sub_section.forEach((u, f) => {
                  let v = {
                    GUID: u.GUID,
                    MASTER_GUID: u.Master_GUID,
                    name: u.name || "",
                    type: "sub_container",
                    class: 2,
                    gird_position: u.position,
                    contents: [],
                    serverName: t.sys_ServerSetting.name,
                    serverType: t.sys_ServerSetting.type,
                    oriMaxCol: 0,
                  };
                  l.contents[i].contents[f] = v;
                  let g = 0;
                  Array.isArray(u.shelf) &&
                    Array.isArray(u.drawer) &&
                    (u.shelf.forEach((m, k) => {
                      let x = {
                        GUID: m.GUID,
                        MASTER_GUID: m.Master_GUID,
                        name: m.name || "",
                        class: 3,
                        gird_position: m.position,
                        serverName: m.serverName,
                        serverType: m.serverType,
                        type: m.type,
                        contents: [],
                      };
                      if (
                        (x.serverName &&
                          (x.serverName = t.sys_ServerSetting.name),
                        x.serverType &&
                          (x.serverType = t.sys_ServerSetting.type),
                        m.type == "dispensing_shelves" || m.type == "shelf")
                      )
                        m.type == "shelf" && (x.type = "dispensing_shelves"),
                          Array.isArray(m.medMapBox) &&
                            m.medMapBox.forEach((O, c) => {
                              let d = {
                                  GUID: O.GUID,
                                  MASTER_GUID: O.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: O.position,
                                  ip: O.ip_box,
                                  box_type: "",
                                  width: O.width,
                                  height: O.height,
                                  serverType: O.serverType,
                                  serverName: O.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                h = {};
                              if (O.storage) {
                                switch (
                                  ((d.device_type = O.storage.DeviceType),
                                  (d.storage = O.storage),
                                  +d.device_type)
                                ) {
                                  case 10:
                                    d.box_type = "2.9";
                                    break;
                                  case 118:
                                    d.box_type = "2.13";
                                    break;
                                  case 13:
                                    d.box_type = "4.2";
                                    break;
                                }
                                (h.name = O.storage.Name),
                                  (h.code = O.storage.Code),
                                  (h.cht_name = O.storage.ChineseName);
                              } else
                                (d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (h.name = ""),
                                  (h.code = ""),
                                  (h.cht_name = "");
                              (d.med_info[0] = h), x.contents.push(d);
                            });
                      else {
                        (x.type = "store_shelves"),
                          (x.ip = m.ip_light),
                          (x.width = m.width),
                          (x.height = m.height);
                        const O = m.medMapStock.sort((c, d) => {
                          const [h] = c.location.split(",").map(Number),
                            [y] = d.location.split(",").map(Number);
                          return h - y;
                        });
                        (x.medMapStock = O), (x.name = m.name);
                      }
                      let S = m.position.split(",")[1];
                      g < +S &&
                        ((g = +S), (l.contents[i].contents[f].oriMaxCol = +g)),
                        l.contents[i].contents[f].contents.push(x);
                    }),
                    u.drawer.forEach((m, k) => {
                      let x = {
                        GUID: m.GUID,
                        MASTER_GUID: m.Master_GUID,
                        name: `抽屜 ${k}`,
                        class: 3,
                        gird_position: m.position,
                        ip: m.ip_drawer,
                        serverName: m.serverName,
                        serverType: m.serverType,
                      };
                      x.serverName && (x.serverName = t.sys_ServerSetting.name),
                        x.serverType &&
                          (x.serverType = t.sys_ServerSetting.type),
                        m.drawer
                          ? ((x.drawer = m.drawer),
                            m.drawer.Boxes &&
                              ((x.type = "grid_draw"),
                              (x.name = m.drawer.Name),
                              (x.Boxes = []),
                              Array.isArray(m.drawer.Boxes)
                                ? m.drawer.Boxes.forEach((c, d) => {
                                    let h = [];
                                    Array.isArray(c) &&
                                      c.forEach((y, N) => {
                                        let M = {
                                          Row: y.Row,
                                          Column: y.Column,
                                          Width: 1,
                                          Height: 1,
                                          Slave: y.Slave,
                                          SlaveBox_Row: y.SlaveBox_Row,
                                          SlaveBox_Column: y.SlaveBox_Column,
                                          MasterBox_Column: y.MasterBox_Column,
                                          MasterBox_Row: y.MasterBox_Row,
                                          Name: y.Name,
                                          Code: y.Code,
                                          ChineseName: y.ChineseName,
                                          GUID: y.GUID,
                                        };
                                        h.push(M);
                                      }),
                                      x.Boxes.push(h);
                                  })
                                : (x.Boxes = m.drawer.Boxes)))
                          : ((x.type = "list_draw"),
                            (x.name = `清單抽屜 ${k}`));
                      let S = m.position.split(",")[1];
                      g < +S &&
                        ((g = +S), (l.contents[i].contents[f].oriMaxCol = +g)),
                        l.contents[i].contents[f].contents.push(x);
                    }));
                });
          }),
        l
      );
    } else return {};
  }
  convertSingleComponent(t, n, r) {
    var o, i, a, u, f;
    const l = {
      GUID: t.GUID || t.guid || `comp_${n}_${Date.now()}`,
      type: this.mapComponentType(t.type || t.component_type || "unknown"),
      name: t.name || t.component_name || `組件_${n}`,
      position: {
        x: ((o = t.position) == null ? void 0 : o.x) || t.x || 50 + n * 200,
        y: ((i = t.position) == null ? void 0 : i.y) || t.y || 50 + n * 150,
      },
      dimensions: {
        width:
          ((a = t.dimensions) == null ? void 0 : a.width) || t.width || 180,
        height:
          ((u = t.dimensions) == null ? void 0 : u.height) || t.height || 120,
        depth: ((f = t.dimensions) == null ? void 0 : f.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      MASTER_GUID: r,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (l.components = t.components.map((v, g) =>
          this.convertSingleComponent(v, g, l.GUID)
        )),
      Object.keys(t).forEach((v) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(v) || (l[v] = t[v]);
      }),
      l
    );
  }
  mapDepartmentType(t) {
    return (
      {
        dispensing_station: "調劑台",
        warehouse: "藥庫",
        pharmacy: "藥局",
        storage: "儲存區",
      }[t] || t
    );
  }
  mapComponentType(t) {
    return (
      {
        medicine_box_shelf: "med_box_shelf",
        medicine_shelf: "normal_shelf",
        grid_drawer: "grid_draw",
        list_drawer: "list_draw",
        medicine_box: "med_box",
        parent_container: "parent_container",
        sub_container: "sub_container",
        dispensing_shelves: "dispensing_shelves",
        store_shelves: "store_shelves",
      }[t] || t
    );
  }
  validateConvertedData(t) {
    try {
      if (!Array.isArray(t))
        return console.error("❌ 轉換後的資料不是陣列格式"), !1;
      for (const n of t) {
        if (!n.GUID || !n.type || !n.name)
          return console.error("❌ 部門資料缺少必要欄位:", n), !1;
        if (!n.gird_position || typeof n.gird_position != "string")
          return console.error("❌ 部門位置資料格式錯誤:", n.gird_position), !1;
        if (n.components && Array.isArray(n.components)) {
          for (const r of n.components)
            if (!r.GUID || !r.type)
              return console.error("❌ 組件資料缺少必要欄位:", r), !1;
        }
      }
      return console.log("✅ 轉換後的資料結構驗證通過"), !0;
    } catch (n) {
      return console.error("❌ 資料驗證過程中發生錯誤:", n), !1;
    }
  }
  generateConversionReport(t, n) {
    const r = {
      timestamp: new Date().toISOString(),
      originalDataCount: Array.isArray(t) ? t.length : 0,
      convertedDataCount: n.length,
      conversionSuccess: n.length > 0,
      totalComponents: n.reduce((l, o) => {
        var i;
        return l + (((i = o.components) == null ? void 0 : i.length) || 0);
      }, 0),
      departmentTypes: [...new Set(n.map((l) => l.type))],
      componentTypes: [
        ...new Set(
          n.flatMap((l) => {
            var o;
            return (
              ((o = l.components) == null ? void 0 : o.map((i) => i.type)) || []
            );
          })
        ),
      ],
    };
    return console.log("📊 資料轉換報告:", r), r;
  }
}
const ho = new Np(),
  _p = () => {
    const {
        sidebarOpen: e,
        setSidebarOpen: t,
        selectedDepartmentType: n,
        setSelectedDepartmentType: r,
        setApiDepartmentData: l,
        isLoadingMedMap: o,
        setIsLoadingMedMap: i,
      } = on(),
      { t: a } = Vt(),
      [u, f] = j.useState(new Set()),
      [v, g] = j.useState([]),
      [m, k] = j.useState(!0),
      [x, S] = j.useState([]);
    j.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const N = await ai.getDepartments();
          N.Code === 200 && N.Data
            ? (console.log(N.Data), g(N.Data))
            : (console.error("API returned error:", N), g([]));
        } catch (N) {
          console.error("Failed to fetch department data:", N), g([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const O = v.reduce((y, N) => {
        const M = N["department_type "];
        return y[M] || (y[M] = []), y[M].push(N), y;
      }, {}),
      c = (y) => {
        const N = new Set(u);
        N.has(y) ? N.delete(y) : N.add(y), f(N);
      },
      d = async (y) => {
        console.log("🏢 選擇部門:", y), r(y), await h(y), t(!1);
      },
      h = async (y) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", y), i(!0);
        try {
          const N = await ai.getMedMapByDepartment(y);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功:", N.Data);
            const M = ho.convertMedMapApiToFakeData(N.Data);
            if (!ho.validateConvertedData(M)) {
              console.error("❌ 轉換後的資料驗證失敗"), S([]);
              return;
            }
            const D = ho.generateConversionReport(N.Data, M);
            S(M),
              l(M),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", M),
              console.log("📋 轉換報告:", D);
          } else console.error("❌ API 回傳錯誤:", N), S([]), l(null);
        } catch (N) {
          console.error("💥 取得藥品地圖資料失敗:", N), S([]), l(null);
        } finally {
          i(!1);
        }
      };
    return s.jsxs(s.Fragment, {
      children: [
        e &&
          s.jsx("div", {
            className:
              "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden",
            onClick: () => t(!1),
          }),
        s.jsx("div", {
          className: `fixed w-80 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-in-out h-screen h-svh ${
            e ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`,
          children: s.jsxs("div", {
            className: "flex flex-col h-screen h-svh",
            children: [
              s.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-2 border-b border-gray-200/50",
                children: s.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx("a", {
                          href: "../front_page",
                          className:
                            "text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100/50",
                          title: a("nav.home"),
                          children: s.jsx(Pc, { className: "w-5 h-5" }),
                        }),
                        s.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: a("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: a("sidebar.closeSidebar"),
                      children: s.jsx(yp, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              s.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: m
                  ? s.jsx("div", {
                      className: "flex items-center justify-center py-8",
                      children: s.jsx("div", {
                        className: "text-gray-500",
                        children: "Loading departments...",
                      }),
                    })
                  : s.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        s.jsx("h3", {
                          className:
                            "text-base font-semibold text-gray-700 mb-4",
                          children: a("sidebar.departmentCategories"),
                        }),
                        Object.entries(O).map(([y, N]) =>
                          s.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                s.jsxs("button", {
                                  disabled: o,
                                  onClick: () => c(y),
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    u.has(y)
                                      ? "bg-gray-50 text-gray-900 border-gray-200"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    o ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        y === "B1F"
                                          ? s.jsx(dp, { className: "w-4 h-4" })
                                          : s.jsx(xp, { className: "w-4 h-4" }),
                                        s.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            s.jsx("div", {
                                              className: "font-medium",
                                              children: y,
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                N.length,
                                                " ",
                                                a("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsx("div", {
                                      className: "p-1",
                                      children: u.has(y)
                                        ? s.jsx(pp, { className: "w-4 h-4" })
                                        : s.jsx(hp, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                u.has(y) &&
                                  s.jsx("div", {
                                    className: "ml-4 space-y-1",
                                    children: N.map((M) =>
                                      s.jsx(
                                        "button",
                                        {
                                          disabled: o,
                                          onClick: () => d(M),
                                          className: `w-full p-2.5 rounded-lg transition-all duration-200 border ${
                                            n === M
                                              ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                              : "text-gray-700 hover:bg-gray-50 border-transparent"
                                          } ${
                                            o
                                              ? "opacity-50 cursor-not-allowed"
                                              : "cursor-pointer"
                                          }`,
                                          children: s.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "font-medium text-sm",
                                                children: M.name,
                                              }),
                                              s.jsx("span", {
                                                className: `text-xs px-2 py-0.5 rounded-full ${
                                                  M.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: M.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        M.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            y
                          )
                        ),
                      ],
                    }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Mp = () => {
    const { t: e } = Vt();
    return s.jsx("div", {
      className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30",
      children: s.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-4 py-2",
        children: s.jsx("p", {
          className: "text-sm text-gray-600 font-medium whitespace-nowrap",
          children: e("footer.copyright"),
        }),
      }),
    });
  },
  Wt = ({ content: e }) => {
    const {
        openMedBoxModal: t,
        openAddMedBoxModal: n,
        openListDrawModal: r,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: o,
        openAddSubContainerModal: i,
        setSelectedMedBox: a,
        setModalMode: u,
        setMedBoxModalOpen: f,
      } = on(),
      { t: v } = Vt(),
      g = (S) => {
        switch (S) {
          case "parent_container":
            return "bg-pink-100";
          case "sub_container":
            return "bg-blue-100";
          case "dispensing_shelves":
          case "store_shelves":
            return "bg-green-100";
          case "med_box":
            return "bg-yellow-100";
          case "grid_draw":
          case "list_draw":
            return "bg-violet-100";
          default:
            return "bg-gray-100";
        }
      },
      m = (S) => {
        switch (S) {
          case "parent_container":
            return "border-pink-200";
          case "sub_container":
            return "border-blue-200";
          case "dispensing_shelves":
          case "store_shelves":
            return "border-green-200";
          case "med_box":
            return "border-yellow-200";
          case "grid_draw":
          case "list_draw":
            return "border-violet-200";
          default:
            return "border-gray-200";
        }
      },
      k = (S) => {
        switch (S) {
          case "parent_container":
            return "bg-pink-400";
          case "sub_container":
            return "bg-blue-400";
          case "dispensing_shelves":
          case "store_shelves":
            return "bg-green-400";
          case "med_box":
            return "bg-yellow-400";
          case "grid_draw":
          case "list_draw":
            return "bg-violet-400";
          default:
            return "bg-gray-200";
        }
      },
      x = (S) => {
        switch (S) {
          case "parent_container":
            return v("type.parentContainer");
          case "sub_container":
            return v("type.subContainer");
          case "dispensing_shelves":
            return v("type.medBoxShelf");
          case "store_shelves":
            return v("type.storeShelf");
          case "grid_draw":
            return v("type.gridDraw");
          case "list_draw":
            return v("type.listDraw");
          case "med_box":
            return v("type.medBox");
          default:
            return S;
        }
      };
    switch (e.type) {
      case "sub_container":
        return s.jsx("div", {});
      case "parent_container":
        return s.jsx("div", {
          className: `flex items-center justify-between px-3 py-1 border-b-2 ${g(
            e.type || 0
          )} ${m(e.type || 0)}`,
          children: s.jsx("div", {
            className: "flex items-center space-x-2 mr-6",
            children: s.jsx("span", {
              className:
                "text-base font-semibold text-gray-800 whitespace-nowrap",
              children: e.name,
            }),
          }),
        });
      case "med_box":
        return s.jsx("div", {});
      case "dispensing_shelves":
        return s.jsx("div", {});
      case "store_shelves":
        return s.jsx("div", {
          className: `flex items-center justify-between px-3 py-1 border-b-2 ${g(
            e.type || 0
          )} ${m(e.type || 0)}`,
          children: s.jsx("div", {
            className: "flex items-center space-x-2 mr-6",
            children: s.jsx("span", {
              className:
                "text-base font-semibold text-gray-800 whitespace-nowrap",
              children: e.name,
            }),
          }),
        });
      case "list_draw":
        return s.jsx("div", {});
      case "grid_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${g(
            e.type || 0
          )} ${m(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6",
              children: [
                s.jsx("span", {
                  className:
                    "text-base font-semibold text-gray-800 whitespace-nowrap",
                  children: e.name,
                }),
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${k(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (S) => {
                S.stopPropagation(), l(e);
              },
              title: v("modal.settings"),
              children: s.jsx(Rc, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return s.jsx("div", {});
    }
  },
  jp = ({ children: e }) => {
    const t = j.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: r,
        setSidebarOpen: l,
        openAddParentContainerModal: o,
        openListDrawModal: i,
        openGridDrawModal: a,
      } = on(),
      { getInventoryQty: u } = rs(),
      [f, v] = j.useState({ x: 0, y: 0, scale: 1 }),
      [g, m] = j.useState(!1),
      [k, x] = j.useState(!1),
      [S, O] = j.useState({ x: 0, y: 0 }),
      [c, d] = j.useState(!1),
      h = 8,
      y = () => {
        try {
          const p = localStorage.getItem("med_map_anchor");
          return p ? JSON.parse(p) : [];
        } catch (p) {
          return (
            console.error("Error reading canvas states from localStorage:", p),
            []
          );
        }
      },
      N = (p, E, $, R) => {
        try {
          const z = y(),
            U = z.findIndex((ee) => ee.department === p && ee.canvasType === E),
            q = { department: p, canvasType: E, scale: $, position: R };
          U >= 0 ? (z[U] = q) : z.push(q),
            localStorage.setItem("med_map_anchor", JSON.stringify(z));
        } catch (z) {
          console.error("Error saving canvas state to localStorage:", z);
        }
      },
      M = (p, E) =>
        y().find((R) => R.department === p && R.canvasType === E) || null;
    j.useEffect(() => {
      if (n) {
        const p = M(n, "drugCanvas");
        if (p) v({ x: p.position.x, y: p.position.y, scale: p.scale });
        else {
          const E = { x: 0, y: 0, scale: 1 };
          v(E), N(n, "drugCanvas", E.scale, E);
        }
      }
    }, [n]),
      j.useEffect(() => {
        if (!n) return;
        const p = setTimeout(() => {
          N(n, "drugCanvas", f.scale, { x: f.x, y: f.y });
        }, 500);
        return () => clearTimeout(p);
      }, [f, n]);
    const C = (p) => {
      const [E, $] = p.split(",").map(Number);
      return { row: E || 0, col: $ || 0 };
    };
    j.useEffect(() => {
      const p = ($) => {
          $.code === "Space" && !$.repeat && ($.preventDefault(), d(!0));
        },
        E = ($) => {
          $.code === "Space" && ($.preventDefault(), d(!1), m(!1));
        };
      return (
        window.addEventListener("keydown", p),
        window.addEventListener("keyup", E),
        () => {
          window.removeEventListener("keydown", p),
            window.removeEventListener("keyup", E);
        }
      );
    }, []);
    const D = j.useCallback(
        (p) => {
          var $;
          if (k) return;
          if (
            (p.altKey && !navigator.userAgent.includes("Mac")) ||
            (p.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            p.preventDefault();
            const R =
              ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
            if (!R) return;
            const z = p.clientX - R.left,
              U = p.clientY - R.top,
              q = p.deltaY > 0 ? 0.9 : 1.1,
              ee = Math.max(0.1, Math.min(5, f.scale * q)),
              fe = ee / f.scale,
              ne = z - (z - f.x) * fe,
              H = U - (U - f.y) * fe;
            v({ x: ne, y: H, scale: ee });
          }
        },
        [f, k]
      ),
      X = j.useCallback(
        (p) => {
          k ||
            !c ||
            (m(!0), O({ x: p.clientX, y: p.clientY }), p.preventDefault());
        },
        [k, c]
      ),
      F = j.useCallback(
        (p) => {
          if (!g || k) return;
          const E = p.clientX - S.x,
            $ = p.clientY - S.y;
          v((R) => ({ ...R, x: R.x + E, y: R.y + $ })),
            O({ x: p.clientX, y: p.clientY });
        },
        [g, S, k]
      ),
      de = j.useCallback(() => {
        m(!1);
      }, []),
      [Te, We] = j.useState(null),
      [Ge, Ze] = j.useState({ x: 0, y: 0 }),
      me = (p) => {
        if (p.length < 2) return null;
        const E = p[0],
          $ = p[1];
        return Math.sqrt(
          Math.pow($.clientX - E.clientX, 2) +
            Math.pow($.clientY - E.clientY, 2)
        );
      },
      it = (p) => {
        if (p.length === 1) return { x: p[0].clientX, y: p[0].clientY };
        const E = p[0],
          $ = p[1];
        return {
          x: (E.clientX + $.clientX) / 2,
          y: (E.clientY + $.clientY) / 2,
        };
      },
      w = j.useCallback(
        (p) => {
          if (!k) {
            if (p.touches.length === 2) {
              const E = me(p.touches),
                $ = it(p.touches);
              We(E), Ze($);
            } else if (p.touches.length === 1) {
              const E = p.touches[0];
              O({ x: E.clientX, y: E.clientY }), m(!0);
            }
          }
        },
        [k]
      ),
      P = j.useCallback(
        (p) => {
          var E;
          if (!k) {
            if ((p.preventDefault(), p.touches.length === 2 && Te !== null)) {
              const $ = me(p.touches),
                R = it(p.touches);
              if ($ && Te) {
                const z =
                  (E = t.current) == null ? void 0 : E.getBoundingClientRect();
                if (!z) return;
                const U = $ / Te,
                  q = Math.max(0.1, Math.min(5, f.scale * U)),
                  ee = R.x - z.left,
                  fe = R.y - z.top,
                  ne = q / f.scale,
                  H = ee - (ee - f.x) * ne,
                  J = fe - (fe - f.y) * ne;
                v({ x: H, y: J, scale: q }), We($), Ze(R);
              }
            } else if (p.touches.length === 1 && g) {
              const $ = p.touches[0],
                R = $.clientX - S.x,
                z = $.clientY - S.y;
              v((U) => ({ ...U, x: U.x + R, y: U.y + z })),
                O({ x: $.clientX, y: $.clientY });
            }
          }
        },
        [f, Te, g, S, k]
      ),
      T = j.useCallback(() => {
        We(null), m(!1);
      }, []);
    j.useEffect(() => {
      const p = t.current;
      if (p)
        return (
          p.addEventListener("wheel", D, { passive: !1 }),
          () => p.removeEventListener("wheel", D)
        );
    }, [D]);
    const B = () => (!r || r.length === 0 ? [] : r),
      A = (p) => {
        if (!p || p.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const E = p.map((U) => ({
            ...U,
            gridPos: C(U.gird_position || "0,0"),
          })),
          $ = Math.max(...E.map((U) => U.gridPos.row), 0),
          R = Math.max(...E.map((U) => U.gridPos.col), 0);
        return {
          sortedContents: E.sort((U, q) =>
            U.gridPos.row !== q.gridPos.row
              ? U.gridPos.row - q.gridPos.row
              : U.gridPos.col - q.gridPos.col
          ),
          maxRow: $,
          maxCol: R,
        };
      },
      K = B(),
      V = Math.max(...K.map((p) => C(p.gird_position || "0,0").row), 0),
      G = Math.max(...K.map((p) => C(p.gird_position || "0,0").col), 0),
      b = (p, E) => {
        const $ = (z) => {
            if (
              z.width &&
              Array.isArray(z.width) &&
              typeof z.width_index == "number" &&
              z.width_index >= 0 &&
              z.width_index < z.width.length
            ) {
              const q = parseFloat(z.width[z.width_index]);
              if (!isNaN(q)) {
                const ee = q * 20;
                return Math.max(168, ee);
              }
            }
            return 168;
          },
          R = (z) => {
            switch (z) {
              case "parent_container":
                return "bg-pink-50 border-pink-300";
              case "sub_container":
                return "bg-blue-50 border-blue-300";
              case "dispensing_shelves":
              case "store_shelves":
                return "bg-green-50 border-green-300";
              case "med_box":
                return "bg-yellow-50 border-yellow-300";
              case "grid_draw":
              case "list_draw":
                return "bg-violet-50 border-violet-300";
              default:
                return "bg-gray-50 border-gray-300";
            }
          };
        switch (p.type) {
          case "med_box":
            return (
              $(p),
              s.jsxs(
                "div",
                {
                  "data-container-guid": p.GUID,
                  className: `${
                    p.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${R(
                    p.type || 0
                  )} min-h-[80px] min-w-[120px] flex flex-col flex-shrink-0 h-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-yellow-400 transition-all`,
                  onClick: (z) => {
                    z.stopPropagation(),
                      p.med_info &&
                        p.med_info.length > 0 &&
                        p.med_info[0].code &&
                        window.parent !== window &&
                        window.parent.postMessage(
                          {
                            type: "MED_CLICKED",
                            code: p.med_info[0].code,
                            name: p.name,
                            boxType: p.box_type,
                            width: p.width[p.width_index],
                          },
                          "*"
                        );
                  },
                  children: [
                    s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                    s.jsx("div", {
                      className: "flex-1 p-1 flex flex-col",
                      children: L(p),
                    }),
                  ],
                },
                p.GUID
              )
            );
          case "sub_container":
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: "flex flex-col flex-shrink-0 h-full overflow-hidden",
                children: [
                  (p.type !== "sub_container" || E === "藥庫") &&
                    s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", { className: "flex-1", children: L(p, E) }),
                ],
              },
              p.GUID
            );
          case "parent_container":
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: `${
                  E === "藥庫"
                    ? `border-2 rounded-lg shadow-sm ${R(p.type || 0)}`
                    : ""
                } flex flex-col h-full overflow-hidden cursor-pointer transition-all min-w-[200px]`,
                children: [
                  (p.type !== "sub_container" || E === "藥庫") &&
                    s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", { className: "flex-1", children: L(p, E) }),
                ],
              },
              p.GUID
            );
          case "grid_draw":
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: `${
                  p.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${R(
                  p.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-violet-400 transition-all`,
                onClick: (z) => {
                  z.stopPropagation(), a(p);
                },
                children: [
                  s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: L(p),
                  }),
                ],
              },
              p.GUID
            );
          case "list_draw":
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: `${
                  p.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${R(
                  p.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-violet-400 transition-all min-w-[200px]`,
                onClick: (z) => {
                  z.stopPropagation(), i(p);
                },
                children: [
                  s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", {
                    className: "flex-1 p-1 flex",
                    children: L(p),
                  }),
                ],
              },
              p.GUID
            );
          case "store_shelves":
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: `${
                  p.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${R(p.type || 0)} flex flex-col h-full overflow-hidden ${
                  p.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", { className: "flex-1 p-1", children: L(p) }),
                ],
              },
              p.GUID
            );
          default:
            return s.jsxs(
              "div",
              {
                "data-container-guid": p.GUID,
                className: `${
                  p.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${R(p.type || 0)} flex flex-col h-full overflow-hidden ${
                  p.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  s.jsx("div", { children: s.jsx(Wt, { content: p }) }),
                  s.jsx("div", { className: "flex-1 p-1", children: L(p) }),
                ],
              },
              p.GUID
            );
        }
      },
      L = (p, E) => {
        const $ = (R, z, U) => {
          const q = Array(z + 1)
              .fill(null)
              .map(() => Array(U + 1).fill(!1)),
            ee = {};
          return (
            R.forEach((fe) => {
              const ne = C(fe.gird_position || "0,0");
              (ee[`${ne.row},${ne.col}`] = fe), (q[ne.row][ne.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: z + 1 }, (fe, ne) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (z + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: U + 1 }, (H, J) => {
                        const Y = `${ne},${J}`,
                          ft = ee[Y];
                        return ft
                          ? s.jsx(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (U + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: b(ft, E),
                              },
                              J
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (U + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: s.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              J
                            );
                      }),
                    },
                    ne
                  )
                ),
              }),
            })
          );
        };
        switch (p.type) {
          case "parent_container":
          case "sub_container":
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: H, maxRow: J, maxCol: Y } = A(p.contents);
              return $(H, J, Y);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: s.jsx("tbody", { children: s.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
          case "none":
            if (p.contents && p.contents.length > 0) {
              const { sortedContents: H, maxRow: J, maxCol: Y } = A(p.contents);
              return $(H, J, Y);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: s.jsx("tbody", {
                  children: s.jsx("tr", {
                    children: s.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: s.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "store_shelves":
            if (p.medMapStock && p.medMapStock.length > 0) {
              const H = p.medMapStock.length;
              return s.jsx("div", {
                className: "h-full",
                children: s.jsx("div", {
                  className: "flex gap-1 h-full",
                  children: p.medMapStock.map(
                    (J, Y) => (
                      u(J.code),
                      s.jsx(
                        "div",
                        {
                          className:
                            "border-2 rounded-lg border-yellow-400 p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 transition-colors flex flex-col justify-center",
                          style: {
                            width: `${100 / H}%`,
                            minHeight: "120px",
                            minWidth: "140px",
                          },
                          onClick: (ft) => {
                            ft.stopPropagation(),
                              J.code &&
                                window.parent !== window &&
                                window.parent.postMessage(
                                  {
                                    type: "MED_CLICKED",
                                    code: J.code,
                                    name: J.name,
                                    location: J.location,
                                  },
                                  "*"
                                );
                          },
                          children: s.jsxs("div", {
                            className:
                              "flex flex-col items-center text-center gap-2",
                            children: [
                              J.code &&
                                s.jsxs("div", {
                                  className: "text-gray-900 truncate w-full",
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "font-bold text-gray-900 truncate whitespace-normal w-full",
                                      children: J.name,
                                    }),
                                    s.jsx("div", {
                                      className: "pt-2",
                                      children: J.code,
                                    }),
                                  ],
                                }),
                              J.code &&
                                u(J.code) !== null &&
                                s.jsx("div", {
                                  className:
                                    "text-gray-700 w-full flex justify-end px-1",
                                  children: s.jsxs("div", {
                                    className: "text-gray-600 text-left",
                                    children: ["已盤：", u(J.code)],
                                  }),
                                }),
                            ],
                          }),
                        },
                        Y
                      )
                    )
                  ),
                }),
              });
            } else if (p.contents && p.contents.length > 0) {
              const { sortedContents: H, maxRow: J, maxCol: Y } = A(p.contents);
              return $(H, J, Y);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "0px" },
                children: s.jsx("tbody", {
                  children: s.jsx("tr", {
                    children: s.jsx("td", {
                      className: "p-4 text-center text-gray-500 bg-transparent",
                      children: s.jsx("div", {
                        className: "text-base",
                        children: "無內容",
                      }),
                    }),
                  }),
                }),
              });
          case "grid_draw":
            const R = Math.max(
                ...p.Boxes.flat().map((H) => +H.Row + +H.Height - 1)
              ),
              z = Math.max(
                ...p.Boxes.flat().map((H) => +H.Column + +H.Width - 1)
              ),
              U = R + 1,
              q = z + 1,
              ee = p.Boxes.flat(),
              fe = Array(U)
                .fill(null)
                .map(() => Array(q).fill(!1)),
              ne = {};
            return (
              ee.forEach((H) => {
                H.Slave || (ne[`${H.Row},${H.Column}`] = H);
              }),
              ee.forEach((H) => {
                if (!H.Slave && (H.Width > 1 || H.Height > 1))
                  for (let J = H.Row; J < H.Row + H.Height; J++)
                    for (let Y = H.Column; Y < H.Column + H.Width; Y++)
                      (J !== H.Row || Y !== H.Column) && (fe[J][Y] = !0);
              }),
              s.jsxs("div", {
                className:
                  "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center cursor-pointer transition-all",
                children: [
                  s.jsx("div", {
                    className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                  }),
                  s.jsx("div", {
                    className:
                      "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                    children: s.jsx("div", {
                      className:
                        "flex items-center justify-center text-base text-violet-400 h-[100%]",
                    }),
                  }),
                  s.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
                ],
              })
            );
          case "list_draw":
            return s.jsxs("div", {
              className:
                "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center cursor-pointer transition-all",
              children: [
                s.jsx("div", {
                  className: "h-[60%] bg-violet-400 w-[3%] rounded-xl",
                }),
                s.jsx("div", {
                  className: "h-[80%] border-2 border-violet-400 w-[82%] mx-1",
                  children: s.jsx("div", {
                    className:
                      "flex items-center justify-center text-base text-violet-400 h-[100%]",
                  }),
                }),
                s.jsx("div", { className: "h-[60%] bg-violet-400 w-[3%]" }),
              ],
            });
          case "med_box":
            return p.med_info && p.med_info.length > 0
              ? (u(p.med_info[0].code),
                s.jsxs("div", {
                  className:
                    "text-base text-center grow flex items-center justify-center flex-col",
                  children: [
                    s.jsx("div", {
                      className: "text-gray-700",
                      children: p.med_info[0].code,
                    }),
                    p.med_info[0].code &&
                      u(p.med_info[0].code) !== null &&
                      s.jsx("div", {
                        className: "text-gray-700 w-full flex justify-end px-1",
                        children: s.jsxs("div", {
                          className: "text-green-600 font-semibold text-left",
                          children: ["已盤：", u(p.med_info[0].code)],
                        }),
                      }),
                  ],
                }))
              : s.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: s.jsx("div", {
                    className: "text-base",
                    children: "空藥盒",
                  }),
                });
          default:
            return p.contents && p.contents.length > 0
              ? s.jsx("div", {
                  className: "space-y-2",
                  children: p.contents.map((H) => b(H)),
                })
              : s.jsx("div", {
                  className: "h-full text-gray-500",
                  children: s.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", p.type],
                  }),
                });
        }
      },
      W = (p) => {
        if (
          (C(p.gird_position || "0,0"),
          p.type !== "調劑台" && p.type !== "藥庫")
        )
          return null;
        const E = ($) => {
          if (!$ || $.length === 0)
            return s.jsx("table", {
              className: "w-full h-full border-none",
              children: s.jsx("tbody", {
                children: s.jsx("tr", {
                  children: s.jsx("td", {
                    className: "p-1 text-center text-gray-500",
                    children: s.jsx("div", {
                      className: "text-center",
                      children: s.jsx("div", {
                        className: "text-base",
                        children: "內容將在此處顯示",
                      }),
                    }),
                  }),
                }),
              }),
            });
          const { sortedContents: R, maxRow: z, maxCol: U } = A($),
            q = Array(z + 1)
              .fill(null)
              .map(() => Array(U + 1).fill(!1)),
            ee = {};
          return (
            R.forEach((fe) => {
              const ne = C(fe.gird_position || "0,0");
              (ee[`${ne.row},${ne.col}`] = fe), (q[ne.row][ne.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: z + 1 }, (fe, ne) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: U + 1 }, (H, J) => {
                        const Y = `${ne},${J}`,
                          ft = ee[Y];
                        return ft
                          ? s.jsx(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (U + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: b(ft, p.type),
                              },
                              J
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (U + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: s.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              J
                            );
                      }),
                    },
                    ne
                  )
                ),
              }),
            })
          );
        };
        return s.jsxs(
          "div",
          {
            "data-container-guid": p.GUID,
            className:
              "border-2 rounded-lg shadow-lg bg-orange-50 border-orange-300 min-h-[120px] flex flex-col overflow-hidden w-full h-full",
            children: [
              s.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-2 border-b-2 bg-orange-100 border-b-orange-200",
                children: s.jsx("div", {
                  className: "flex items-center space-x-1",
                  children: s.jsx("span", {
                    className: "text-lg font-semibold text-gray-800",
                    children: p.name,
                  }),
                }),
              }),
              s.jsx("div", {
                className: "flex-1 bg-orange-50",
                children: E(p.contents || []),
              }),
            ],
          },
          p.GUID
        );
      };
    return s.jsx("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: s.jsx("div", {
        ref: t,
        className: `w-full h-full relative ${
          c && !k ? "cursor-grab" : "cursor-default"
        } ${g ? "cursor-grabbing" : ""}`,
        onMouseDown: X,
        onMouseMove: F,
        onMouseUp: de,
        onMouseLeave: de,
        onTouchStart: w,
        onTouchMove: P,
        onTouchEnd: T,
        children: s.jsxs("div", {
          className: "absolute inset-0 origin-top-left",
          style: {
            transform: `translate(${f.x}px, ${f.y}px) scale(${f.scale})`,
            transformOrigin: "0 0",
          },
          children: [
            s.jsx("div", {
              className: "relative",
              "data-canvas-content": !0,
              children: s.jsx("table", {
                className: "h-full",
                style: {
                  borderCollapse: "separate",
                  borderSpacing: `${h}px`,
                  minWidth: "fit-content",
                  minHeight: "fit-content",
                },
                children: s.jsx("tbody", {
                  children: Array.from({ length: V + 1 }, (p, E) =>
                    s.jsx(
                      "tr",
                      {
                        children: Array.from({ length: G + 1 }, ($, R) => {
                          const z = K.find((U) => {
                            const q = C(U.gird_position || "0,0");
                            return q.row === E && q.col === R;
                          });
                          return z
                            ? s.jsx(
                                "td",
                                {
                                  className: "align-top",
                                  style: {
                                    minWidth: "150px",
                                    minHeight: "120px",
                                    border: "none",
                                  },
                                  children: W(z),
                                },
                                R
                              )
                            : s.jsx(
                                "td",
                                {
                                  className: "align-top",
                                  style: {
                                    minWidth: "150px",
                                    minHeight: "120px",
                                    border: "none",
                                  },
                                  children: s.jsx("div", {
                                    className:
                                      "w-full h-full flex items-center justify-center text-gray-400 text-base",
                                  }),
                                },
                                R
                              );
                        }),
                      },
                      E
                    )
                  ),
                }),
              }),
            }),
            e,
          ],
        }),
      }),
    });
  },
  Ep = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: r,
      } = on(),
      { t: l } = Vt(),
      { getInventoryQty: o } = rs(),
      [i, a] = j.useState(""),
      [u, f] = j.useState([]),
      [v, g] = j.useState(""),
      [m, k] = j.useState("N"),
      [x, S] = j.useState([]),
      [O, c] = j.useState(!1);
    j.useEffect(() => {
      n && e && (a(n.name || ""), f(n.med_info || []));
    }, [n, e]);
    const d = (C) => {
        f((D) => D.filter((X) => X.code !== C));
      },
      h = async () => {
        c(!0);
        try {
          const C = await ai.searchMedicine(v, m);
          S(C);
        } catch (C) {
          console.error("Search failed:", C), S([]);
        } finally {
          c(!1);
        }
      },
      y = (C) => {
        const D = {
          id: C.GUID || `${Date.now()}_${Math.random()}`,
          name: C.NAME,
          cht_name: C.CHT_NAME,
          code: C.CODE,
        };
        f((X) => (X.some((de) => de.code === D.code) ? X : [...X, D]));
      },
      N = () => {
        n && ((n.name = i), (n.med_info = u), r(), t());
      },
      M = () => {
        t();
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: M,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (C) => C.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(Rc, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: l("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: M,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(wr, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-4 py-1 overflow-y-auto",
                  children: s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      s.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: l("form.drawerName"),
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: (C) => a(C.target.value),
                            placeholder:
                              (n == null ? void 0 : n.name) ||
                              l("placeholder.drawerName"),
                            className:
                              "w-full px-2 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          s.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              s.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: l("form.drugList"),
                              }),
                              u.length > 0
                                ? s.jsx("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2",
                                    children: u.map((C) =>
                                      s.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white border-2 border-gray-200 rounded-lg p-1 hover:border-gray-300 transition-colors",
                                          children: s.jsxs("div", {
                                            className:
                                              "flex items-start justify-between",
                                            children: [
                                              s.jsx("div", {
                                                className: "flex-1 min-w-0",
                                                children: s.jsxs("div", {
                                                  children: [
                                                    C.code &&
                                                      s.jsx("div", {
                                                        children: s.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: C.code,
                                                        }),
                                                      }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          C.name ||
                                                          l("status.notSet"),
                                                      }),
                                                    }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          C.cht_name ||
                                                          l("status.notSet"),
                                                      }),
                                                    }),
                                                    C.code &&
                                                      o(C.code) !== null &&
                                                      s.jsxs("div", {
                                                        className:
                                                          "text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded mt-1 inline-block",
                                                        children: [
                                                          "已盤點: ",
                                                          o(C.code),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              }),
                                              s.jsx("button", {
                                                onClick: () => d(C.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: l("button.remove"),
                                                children: s.jsx(wr, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        C.id
                                      )
                                    ),
                                  })
                                : s.jsx("div", {
                                    className:
                                      "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
                                    children: s.jsxs("div", {
                                      className: "text-center",
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-gray-500 text-lg mb-2",
                                          children: l("status.drawerNoDrug"),
                                        }),
                                        s.jsx("div", {
                                          className: "text-gray-400 text-sm",
                                          children: l("status.drugListEmpty"),
                                        }),
                                      ],
                                    }),
                                  }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              s.jsx("h3", {
                                className: "text-lg font-medium text-gray-900",
                                children: l("form.drugSearch"),
                              }),
                              s.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  s.jsx("input", {
                                    type: "text",
                                    value: v,
                                    onChange: (C) => g(C.target.value),
                                    placeholder: l("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: m,
                                    onChange: (C) => k(C.target.value),
                                    className:
                                      "border rounded px-2 py-1 focus:border-blue-500 focus:outline-none transition-colors",
                                    title: "管制級別",
                                    children: [
                                      s.jsx("option", {
                                        value: "N",
                                        children: "N",
                                      }),
                                      s.jsx("option", {
                                        value: "1",
                                        children: "1",
                                      }),
                                      s.jsx("option", {
                                        value: "2",
                                        children: "2",
                                      }),
                                      s.jsx("option", {
                                        value: "3",
                                        children: "3",
                                      }),
                                      s.jsx("option", {
                                        value: "4",
                                        children: "4",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("button", {
                                    onClick: h,
                                    disabled: O,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      O &&
                                        s.jsx(si, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      l("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[300px] max-h-[300px] overflow-y-auto",
                                children: O
                                  ? s.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        s.jsx(si, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        l("status.searching"),
                                      ],
                                    })
                                  : x.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: x.map((C, D) =>
                                        s.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
                                            children: [
                                              s.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  s.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: C.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: C.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: C.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => y(C),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: l("button.add"),
                                                children: s.jsx(vp, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          C.GUID || D
                                        )
                                      ),
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: l(
                                        v || m !== "N"
                                          ? "status.noSearchResults"
                                          : "status.searchResults"
                                      ),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s.jsxs("div", {
                  className:
                    "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                  children: [
                    s.jsx("button", {
                      onClick: M,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: l("button.cancel"),
                    }),
                    s.jsx("button", {
                      onClick: N,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                      children: l("button.save"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Dp = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: r,
        apiDepartmentData: l,
        setApiDepartmentData: o,
        showNotification: i,
      } = on(),
      { t: a } = Vt(),
      { getInventoryQty: u } = rs(),
      [f, v] = j.useState(""),
      [g, m] = j.useState(null),
      [k, x] = j.useState(!1),
      [S, O] = j.useState(!1),
      [c, d] = j.useState(null);
    j.useState(""), j.useState("N"), j.useState([]), j.useState(!1);
    const [h, y] = j.useState(0),
      [N, M] = j.useState({ x: 0, y: 0 });
    j.useEffect(() => {
      if (n && e)
        if ((v(n.name || ""), n.drawer)) {
          if (!k) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const w = JSON.parse(JSON.stringify(n.drawer));
            m(w), x(!0), console.log("✅ 備份完成，備份資料:", w);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), m(null), x(!1);
    }, [n, e, k]),
      j.useEffect(() => {
        e || (x(!1), m(null), d(null));
      }, [e]);
    const C = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", g),
          console.log("當前 selectedGridDraw:", n),
          n && g && k)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const w = JSON.parse(JSON.stringify(g));
          if (((n.drawer = w), l)) {
            const P = (B) => {
                B.forEach((A) => {
                  A.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (A.drawer = w)),
                    A.contents && Array.isArray(A.contents) && P(A.contents),
                    A.components &&
                      Array.isArray(A.components) &&
                      P(A.components);
                });
              },
              T = JSON.parse(JSON.stringify(l));
            P(T), o(T), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!g),
            console.log("hasBackup:", k);
        d(null), x(!1), m(null), r(), t();
      },
      D = (w, P) => {
        if (!c) return !1;
        const T = Math.min(c.startRow, c.endRow),
          B = Math.max(c.startRow, c.endRow),
          A = Math.min(c.startCol, c.endCol),
          K = Math.max(c.startCol, c.endCol);
        return w >= T && w <= B && P >= A && P <= K;
      },
      X = (w) => {
        var b;
        if (
          !((b = n == null ? void 0 : n.drawer) != null && b.Boxes) ||
          w.Slave
        )
          return { width: 1, height: 1 };
        const T = n.drawer.Boxes.flat().filter(
          (L) =>
            L.Slave &&
            L.MasterBox_Row === w.Row &&
            L.MasterBox_Column === w.Column
        );
        if (T.length === 0) return { width: 1, height: 1 };
        const B = [w, ...T],
          A = Math.min(...B.map((L) => L.Row)),
          K = Math.max(...B.map((L) => L.Row)),
          V = Math.min(...B.map((L) => L.Column));
        return {
          width: Math.max(...B.map((L) => L.Column)) - V + 1,
          height: K - A + 1,
        };
      },
      F = () => {
        var V;
        if (!c || !((V = n == null ? void 0 : n.drawer) != null && V.Boxes))
          return [];
        const w = n.drawer.Boxes.flat(),
          P = Math.min(c.startRow, c.endRow),
          T = Math.max(c.startRow, c.endRow),
          B = Math.min(c.startCol, c.endCol),
          A = Math.max(c.startCol, c.endCol),
          K = [];
        return (
          w.forEach((G) => {
            if (!G.Slave) {
              const b = X(G),
                L = G.Row + b.height - 1,
                W = G.Column + b.width - 1;
              G.Row >= P && L <= T && G.Column >= B && W <= A && K.push(G);
            }
          }),
          K
        );
      },
      de = (w, P, T, B) => {
        var W;
        if (!c || !((W = n == null ? void 0 : n.drawer) != null && W.Boxes))
          return !1;
        const A = n.drawer.Boxes.flat();
        let K = !0,
          V = w,
          G = P,
          b = T,
          L = B;
        for (; K; )
          (K = !1),
            A.forEach((p) => {
              if (!p.Slave) {
                const E = X(p),
                  $ = p.Row + E.height - 1,
                  R = p.Column + E.width - 1;
                !(p.Row > G || $ < V || p.Column > L || R < b) &&
                  (p.Row < V && ((V = p.Row), (K = !0)),
                  $ > G && ((G = $), (K = !0)),
                  p.Column < b && ((b = p.Column), (K = !0)),
                  R > L && ((L = R), (K = !0)));
              }
            });
        return { minRow: V, maxRow: G, minCol: b, maxCol: L };
      },
      Te = () => {
        var K;
        if (!c || !((K = n == null ? void 0 : n.drawer) != null && K.Boxes))
          return !1;
        const w = Math.min(c.startRow, c.endRow),
          P = Math.max(c.startRow, c.endRow),
          T = Math.min(c.startCol, c.endCol),
          B = Math.max(c.startCol, c.endCol),
          A = n.drawer.Boxes.flat();
        for (let V = w; V <= P; V++)
          for (let G = T; G <= B; G++) {
            let b = !1;
            for (const L of A)
              if (!L.Slave) {
                const W = X(L),
                  p = L.Row + W.height - 1,
                  E = L.Column + W.width - 1;
                if (V >= L.Row && V <= p && G >= L.Column && G <= E) {
                  b = !0;
                  break;
                }
              }
            if (!b) return !1;
          }
        return !0;
      };
    (() => {
      var W, p;
      const w = F();
      if (!c) return { canMerge: !1, canUnmerge: !1 };
      if (w.length === 0) return { canMerge: !1, canUnmerge: !1 };
      const P =
          ((p =
            (W = n == null ? void 0 : n.drawer) == null ? void 0 : W.Boxes) ==
          null
            ? void 0
            : p.flat()) || [],
        T = w.some(
          (E) =>
            P.filter(
              (R) =>
                R.Slave &&
                R.MasterBox_Row === E.Row &&
                R.MasterBox_Column === E.Column
            ).length > 0
        ),
        B = Math.min(c.startRow, c.endRow),
        A = Math.max(c.startRow, c.endRow),
        K = Math.min(c.startCol, c.endCol),
        V = Math.max(c.startCol, c.endCol),
        G = P.some(
          (E) =>
            E.Slave &&
            E.Row >= B &&
            E.Row <= A &&
            E.Column >= K &&
            E.Column <= V
        );
      return { canMerge: w.length > 1 && Te(), canUnmerge: T || G };
    })();
    const Ge = (w, P, T) => {
        T.preventDefault(),
          T.stopPropagation(),
          "touches" in T &&
            (y(Date.now()),
            M({ x: T.touches[0].clientX, y: T.touches[0].clientY })),
          O(!0),
          d({ startRow: w, startCol: P, endRow: w, endCol: P });
      },
      Ze = (w, P) => {
        if (!S || !c) return;
        const T = Math.min(c.startRow, w),
          B = Math.max(c.startRow, w),
          A = Math.min(c.startCol, P),
          K = Math.max(c.startCol, P),
          V = de(T, B, A, K);
        V &&
          d((G) =>
            G
              ? {
                  startRow: G.startRow,
                  startCol: G.startCol,
                  endRow: w >= G.startRow ? V.maxRow : V.minRow,
                  endCol: P >= G.startCol ? V.maxCol : V.minCol,
                }
              : null
          );
      },
      me = () => {
        if (S && (O(!1), c && n != null && n.Boxes)) {
          const w = Math.min(c.startRow, c.endRow),
            P = Math.max(c.startRow, c.endRow),
            T = Math.min(c.startCol, c.endCol),
            B = Math.max(c.startCol, c.endCol),
            A = de(w, P, T, B);
          A &&
            d({
              startRow: A.minRow,
              startCol: A.minCol,
              endRow: A.maxRow,
              endCol: A.maxCol,
            });
        }
      },
      it = () => {
        var b;
        if (
          !((b = n == null ? void 0 : n.drawer) != null && b.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return s.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx(gp, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                }),
                s.jsx("div", {
                  className: "text-gray-500 text-lg mb-2",
                  children: a("status.gridDrawNotConfigured"),
                }),
                s.jsx("div", {
                  className: "text-gray-400 text-sm",
                  children: a("status.noDrugInfo"),
                }),
              ],
            }),
          });
        const w = n.drawer.Boxes.flat(),
          P = (L) => {
            if (L.Slave) return { width: 1, height: 1 };
            const W = w.filter(
              (U) =>
                U.Slave &&
                U.MasterBox_Row === L.Row &&
                U.MasterBox_Column === L.Column
            );
            if (W.length === 0) return { width: 1, height: 1 };
            const p = [L, ...W],
              E = Math.min(...p.map((U) => U.Row)),
              $ = Math.max(...p.map((U) => U.Row)),
              R = Math.min(...p.map((U) => U.Column));
            return {
              width: Math.max(...p.map((U) => U.Column)) - R + 1,
              height: $ - E + 1,
            };
          },
          T = Math.max(...w.map((L) => L.Row + 1 - 1)),
          B = Math.max(...w.map((L) => L.Column + 1 - 1)),
          A = T + 1,
          K = B + 1,
          V = Array(A)
            .fill(null)
            .map(() => Array(K).fill(!1)),
          G = {};
        return (
          w.forEach((L) => {
            if (!L.Slave) {
              const W = P(L);
              (G[`${L.Row},${L.Column}`] = L),
                (L.calculatedWidth = W.width),
                (L.calculatedHeight = W.height);
            }
          }),
          w.forEach((L) => {
            if (!L.Slave && (L.calculatedWidth > 1 || L.calculatedHeight > 1))
              for (let W = L.Row; W < L.Row + L.calculatedHeight; W++)
                for (let p = L.Column; p < L.Column + L.calculatedWidth; p++)
                  (W !== L.Row || p !== L.Column) && (V[W][p] = !0);
          }),
          s.jsx("div", {
            className: "rounded-lg",
            children: s.jsx("table", {
              className: "w-full",
              children: s.jsx("tbody", {
                children: Array.from({ length: A }, (L, W) =>
                  s.jsx(
                    "tr",
                    {
                      children: Array.from({ length: K }, (p, E) => {
                        if (V[W][E]) return null;
                        const $ = `${W},${E}`,
                          R = G[$];
                        return R
                          ? s.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  D(W, E)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / K}%`,
                                  minHeight: "40px",
                                  height: `${50 * R.calculatedHeight}px`,
                                  maxHeight: `${50 * R.calculatedHeight}px`,
                                },
                                colSpan: R.calculatedWidth,
                                rowSpan: R.calculatedHeight,
                                onClick: (z) => {
                                  R.Code &&
                                    window.parent !== window &&
                                    window.parent.postMessage(
                                      {
                                        type: "MED_CLICKED",
                                        code: R.Code,
                                        name: R.Name,
                                        chineseName: R.ChineseName,
                                        row: R.Row,
                                        column: R.Column,
                                      },
                                      "*"
                                    );
                                },
                                onMouseDown: (z) => Ge(W, E, z),
                                onMouseEnter: () => Ze(W, E),
                                onMouseUp: me,
                                onTouchStart: (z) => Ge(W, E, z),
                                onTouchMove: (z) => {
                                  if ((z.preventDefault(), !S)) return;
                                  const U = z.touches[0],
                                    q = document.elementFromPoint(
                                      U.clientX,
                                      U.clientY
                                    ),
                                    ee = q == null ? void 0 : q.closest("td");
                                  if (ee) {
                                    const fe = parseInt(
                                        ee.getAttribute("data-row") || "0"
                                      ),
                                      ne = parseInt(
                                        ee.getAttribute("data-col") || "0"
                                      );
                                    Ze(fe, ne);
                                  }
                                },
                                onTouchEnd: me,
                                "data-row": W,
                                "data-col": E,
                                children: s.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    R.Code || R.Name || R.ChineseName
                                      ? s.jsxs("div", {
                                          className:
                                            "flex flex-col items-between",
                                          children: [
                                            s.jsxs("div", {
                                              children: [
                                                R.Code &&
                                                  s.jsx("div", {
                                                    className:
                                                      "text-sm font-mono text-gray-600",
                                                    children: R.Code,
                                                  }),
                                                R.Name &&
                                                  s.jsx("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900",
                                                    children: R.Name,
                                                  }),
                                                R.ChineseName &&
                                                  s.jsx("div", {
                                                    className:
                                                      "text-sm text-gray-700",
                                                    children: R.ChineseName,
                                                  }),
                                              ],
                                            }),
                                            s.jsx("div", {
                                              children:
                                                R.Code &&
                                                u(R.Code) !== null &&
                                                s.jsxs("div", {
                                                  className:
                                                    "text-sm font-semibold text-green-600 rounded",
                                                  children: [
                                                    "已盤點: ",
                                                    u(R.Code),
                                                  ],
                                                }),
                                            }),
                                          ],
                                        })
                                      : s.jsx("div", {
                                          className:
                                            "h-full flex justify-center items-center text-xs text-gray-400 italic text-center",
                                          children: a("status.notAdded"),
                                        }),
                                }),
                              },
                              E
                            )
                          : s.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  D(W, E)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / K}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (z) => Ge(W, E, z),
                                onMouseEnter: () => Ze(W, E),
                                onMouseUp: me,
                                onTouchStart: (z) => Ge(W, E, z),
                                onTouchMove: (z) => {
                                  if ((z.preventDefault(), !S)) return;
                                  const U = z.touches[0],
                                    q = document.elementFromPoint(
                                      U.clientX,
                                      U.clientY
                                    ),
                                    ee = q == null ? void 0 : q.closest("td");
                                  if (ee) {
                                    const fe = parseInt(
                                        ee.getAttribute("data-row") || "0"
                                      ),
                                      ne = parseInt(
                                        ee.getAttribute("data-col") || "0"
                                      );
                                    Ze(fe, ne);
                                  }
                                },
                                onTouchEnd: me,
                                "data-row": W,
                                "data-col": E,
                                children: s.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: a("status.notAdded"),
                                }),
                              },
                              E
                            );
                      }),
                    },
                    W
                  )
                ),
              }),
            }),
          })
        );
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: C,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (w) => w.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl font-semibold text-gray-900",
                      children:
                        (n == null ? void 0 : n.name) ||
                        a("modal.gridDrawSettings"),
                    }),
                    s.jsx("button", {
                      onClick: C,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(wr, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: s.jsx("div", {
                    className: "space-y-4 pt-2",
                    children: s.jsx("div", {
                      className: "space-y-1",
                      children: it(),
                    }),
                  }),
                }),
                s.jsx("div", {
                  className: "fixed inset-0 pointer-events-none",
                  onMouseUp: me,
                  onMouseLeave: me,
                  onTouchEnd: me,
                  onTouchCancel: me,
                }),
              ],
            }),
          ],
        });
  },
  Pp = ({ isVisible: e, message: t }) => {
    const { t: n } = Vt();
    return e
      ? s.jsxs("div", {
          className: "fixed inset-0 z-[9999] flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            }),
            s.jsx("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center p-8",
              children: s.jsxs("div", {
                className:
                  "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-col items-center space-y-4 min-w-[280px]",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center space-x-3 mb-2",
                    children: [
                      s.jsx("div", {
                        className: "p-3 bg-blue-100 rounded-full",
                        children: s.jsx(Pc, {
                          className: "w-8 h-8 text-blue-600",
                        }),
                      }),
                      s.jsx("div", {
                        className: "text-xl font-semibold text-gray-900",
                        children: n("nav.title"),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      s.jsx(si, {
                        className: "w-8 h-8 text-blue-600 animate-spin",
                      }),
                      s.jsx("div", {
                        className: "text-lg font-medium text-gray-700",
                        children: t || n("status.loadingMedMapData"),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className:
                      "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                    children: s.jsx("div", {
                      className:
                        "h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse",
                      style: { width: "100%" },
                    }),
                  }),
                  s.jsx("div", {
                    className: "text-sm text-gray-500 text-center max-w-xs",
                    children: n("status.loadingMedMapHint"),
                  }),
                ],
              }),
            }),
          ],
        })
      : null;
  },
  Rp = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: r,
    duration: l = 3e3,
  }) => {
    const [o, i] = j.useState(!1);
    return (
      j.useEffect(() => {
        if (n) {
          i(!0);
          const a = setTimeout(() => {
            r();
          }, l);
          return () => clearTimeout(a);
        } else {
          const a = setTimeout(() => {
            i(!1);
          }, 300);
          return () => clearTimeout(a);
        }
      }, [n, l, r]),
      o
        ? s.jsx("div", {
            className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ease-in-out ${
              n ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`,
            children: s.jsxs("div", {
              className: `flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${
                t === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`,
              children: [
                t === "success"
                  ? s.jsx(fp, { className: "w-5 h-5 text-green-600" })
                  : s.jsx(wp, { className: "w-5 h-5 text-red-600" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                s.jsx("button", {
                  onClick: r,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: s.jsx(wr, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Tp() {
  const { isLoadingMedMap: e, notification: t, hideNotification: n } = on();
  return s.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      s.jsx(Sp, {}),
      s.jsx(Cp, {}),
      s.jsx(_p, {}),
      s.jsx("div", {
        className: "fixed inset-0",
        children: s.jsx("div", {
          className: "w-full h-full",
          children: s.jsx(jp, {}),
        }),
      }),
      s.jsx(Mp, {}),
      s.jsx(Ep, {}),
      s.jsx(Dp, {}),
      s.jsx(Pp, { isVisible: e }),
      s.jsx(Rp, {
        message: t.message,
        type: t.type,
        isVisible: t.isVisible,
        onClose: n,
      }),
    ],
  });
}
function Lp() {
  return s.jsx(sp, {
    children: s.jsx(ap, { children: s.jsx(op, { children: s.jsx(Tp, {}) }) }),
  });
}
Mc(document.getElementById("root")).render(
  s.jsx(j.StrictMode, { children: s.jsx(Lp, {}) })
);
