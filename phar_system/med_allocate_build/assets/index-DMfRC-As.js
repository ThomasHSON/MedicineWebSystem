function If(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const s = Object.getOwnPropertyDescriptor(r, l);
          s &&
            Object.defineProperty(
              e,
              l,
              s.get ? s : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const s = {};
    return (
      l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const s = n(l);
    fetch(l.href, s);
  }
})();
function Rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var qu = { exports: {} },
  ws = {},
  Gu = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  Af = Symbol.for("react.portal"),
  Hf = Symbol.for("react.fragment"),
  Wf = Symbol.for("react.strict_mode"),
  Uf = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  Vf = Symbol.for("react.context"),
  Qf = Symbol.for("react.forward_ref"),
  Yf = Symbol.for("react.suspense"),
  qf = Symbol.for("react.memo"),
  Gf = Symbol.for("react.lazy"),
  ja = Symbol.iterator;
function Kf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Ju = {};
function lr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Ku));
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zu() {}
Zu.prototype = lr.prototype;
function Ni(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ju),
    (this.updater = n || Ku));
}
var ki = (Ni.prototype = new Zu());
ki.constructor = Ni;
Xu(ki, lr.prototype);
ki.isPureReactComponent = !0;
var ba = Array.isArray,
  ec = Object.prototype.hasOwnProperty,
  ji = { current: null },
  tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ec.call(t, r) && !tc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: nl,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: ji.current,
  };
}
function Xf(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function Jf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ea = /\/+/g;
function Ws(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jf("" + e.key)
    : t.toString(36);
}
function Pl(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case Af:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ws(o, 0) : r),
      ba(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ea, "$&/") + "/"),
          Pl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (bi(l) &&
            (l = Xf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ea, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ba(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + Ws(s, a);
      o += Pl(s, t, n, u, l);
    }
  else if (((u = Kf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (u = r + Ws(s, a++)), (o += Pl(s, t, n, u, l)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pl(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function Zf(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  Dl = { transition: null },
  ep = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Dl,
    ReactCurrentOwner: ji,
  };
function rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = {
  map: cl,
  forEach: function (e, t, n) {
    cl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      cl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      cl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
H.Component = lr;
H.Fragment = Hf;
H.Profiler = Uf;
H.PureComponent = Ni;
H.StrictMode = Wf;
H.Suspense = Yf;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
H.act = rc;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Xu({}, e.props),
    l = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ji.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      ec.call(t, u) &&
        !tc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: s, props: r, _owner: o };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bf, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = nc;
H.createFactory = function (e) {
  var t = nc.bind(null, e);
  return ((t.type = e), t);
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Qf, render: e };
};
H.isValidElement = bi;
H.lazy = function (e) {
  return { $$typeof: Gf, _payload: { _status: -1, _result: e }, _init: Zf };
};
H.memo = function (e, t) {
  return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Dl.transition;
  Dl.transition = {};
  try {
    e();
  } finally {
    Dl.transition = t;
  }
};
H.unstable_act = rc;
H.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
H.useContext = function (e) {
  return _e.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
H.useId = function () {
  return _e.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return _e.current.useRef(e);
};
H.useState = function (e) {
  return _e.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return _e.current.useTransition();
};
H.version = "18.3.1";
Gu.exports = H;
var h = Gu.exports;
const R = Rf(h),
  $r = If({ __proto__: null, default: R }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tp = h,
  np = Symbol.for("react.element"),
  rp = Symbol.for("react.fragment"),
  lp = Object.prototype.hasOwnProperty,
  sp = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  op = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) lp.call(t, r) && !op.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: np,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: sp.current,
  };
}
ws.Fragment = rp;
ws.jsx = lc;
ws.jsxs = lc;
qu.exports = ws;
var i = qu.exports,
  sc = { exports: {} },
  Ye = {},
  oc = { exports: {} },
  ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, $) {
    var F = T.length;
    T.push($);
    e: for (; 0 < F; ) {
      var A = (F - 1) >>> 1,
        O = T[A];
      if (0 < l(O, $)) ((T[A] = $), (T[F] = O), (F = A));
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0],
      F = T.pop();
    if (F !== $) {
      T[0] = F;
      e: for (var A = 0, O = T.length, J = O >>> 1; A < J; ) {
        var N = 2 * (A + 1) - 1,
          U = T[N],
          q = N + 1,
          ke = T[q];
        if (0 > l(U, F))
          q < O && 0 > l(ke, U)
            ? ((T[A] = ke), (T[q] = F), (A = q))
            : ((T[A] = U), (T[N] = F), (A = N));
        else if (q < O && 0 > l(ke, F)) ((T[A] = ke), (T[q] = F), (A = q));
        else break e;
      }
    }
    return $;
  }
  function l(T, $) {
    var F = T.sortIndex - $.sortIndex;
    return F !== 0 ? F : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    p = 1,
    m = null,
    y = 3,
    x = !1,
    w = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= T)
        (r(c), ($.sortIndex = $.expirationTime), t(u, $));
      else break;
      $ = n(c);
    }
  }
  function j(T) {
    if (((v = !1), g(T), !w))
      if (n(u) !== null) ((w = !0), Q(S));
      else {
        var $ = n(c);
        $ !== null && X(j, $.startTime - T);
      }
  }
  function S(T, $) {
    ((w = !1), v && ((v = !1), f(D), (D = -1)), (x = !0));
    var F = y;
    try {
      for (
        g($), m = n(u);
        m !== null && (!(m.expirationTime > $) || (T && !Y()));
      ) {
        var A = m.callback;
        if (typeof A == "function") {
          ((m.callback = null), (y = m.priorityLevel));
          var O = A(m.expirationTime <= $);
          (($ = e.unstable_now()),
            typeof O == "function" ? (m.callback = O) : m === n(u) && r(u),
            g($));
        } else r(u);
        m = n(u);
      }
      if (m !== null) var J = !0;
      else {
        var N = n(c);
        (N !== null && X(j, N.startTime - $), (J = !1));
      }
      return J;
    } finally {
      ((m = null), (y = F), (x = !1));
    }
  }
  var b = !1,
    E = null,
    D = -1,
    z = 5,
    _ = -1;
  function Y() {
    return !(e.unstable_now() - _ < z);
  }
  function W() {
    if (E !== null) {
      var T = e.unstable_now();
      _ = T;
      var $ = !0;
      try {
        $ = E(!0, T);
      } finally {
        $ ? ae() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var ae;
  if (typeof d == "function")
    ae = function () {
      d(W);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      V = ye.port2;
    ((ye.port1.onmessage = W),
      (ae = function () {
        V.postMessage(null);
      }));
  } else
    ae = function () {
      k(W, 0);
    };
  function Q(T) {
    ((E = T), b || ((b = !0), ae()));
  }
  function X(T, $) {
    D = k(function () {
      T(e.unstable_now());
    }, $);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Q(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = y;
      }
      var F = y;
      y = $;
      try {
        return T();
      } finally {
        y = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var F = y;
      y = T;
      try {
        return $();
      } finally {
        y = F;
      }
    }),
    (e.unstable_scheduleCallback = function (T, $, F) {
      var A = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? A + F : A))
          : (F = A),
        T)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = F + O),
        (T = {
          id: p++,
          callback: $,
          priorityLevel: T,
          startTime: F,
          expirationTime: O,
          sortIndex: -1,
        }),
        F > A
          ? ((T.sortIndex = F),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (v ? (f(D), (D = -1)) : (v = !0), X(j, F - A)))
          : ((T.sortIndex = O), t(u, T), w || x || ((w = !0), Q(S))),
        T
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (T) {
      var $ = y;
      return function () {
        var F = y;
        y = $;
        try {
          return T.apply(this, arguments);
        } finally {
          y = F;
        }
      };
    }));
})(ic);
oc.exports = ic;
var ip = oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap = h,
  Qe = ip;
function P(e) {
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
var ac = new Set(),
  zr = {};
function Cn(e, t) {
  (Kn(e, t), Kn(e + "Capture", t));
}
function Kn(e, t) {
  for (zr[e] = t, e = 0; e < t.length; e++) ac.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  No = Object.prototype.hasOwnProperty,
  up =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ca = {},
  Ta = {};
function cp(e) {
  return No.call(Ta, e)
    ? !0
    : No.call(Ca, e)
      ? !1
      : up.test(e)
        ? (Ta[e] = !0)
        : ((Ca[e] = !0), !1);
}
function dp(e, t, n, r) {
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
function fp(e, t, n, r) {
  if (t === null || typeof t > "u" || dp(e, t, n, r)) return !0;
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
function Fe(e, t, n, r, l, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ei = /[\-:]([a-z])/g;
function Ci(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Ci);
    Ne[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ei, Ci);
    Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ei, Ci);
  Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ti(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (fp(t, n, l, r) && (n = null),
    r || l === null
      ? cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var $t = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dl = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Pi = Symbol.for("react.strict_mode"),
  ko = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  Di = Symbol.for("react.forward_ref"),
  jo = Symbol.for("react.suspense"),
  bo = Symbol.for("react.suspense_list"),
  Oi = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  dc = Symbol.for("react.offscreen"),
  Pa = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pa && e[Pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  Us;
function Sr(e) {
  if (Us === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Us = (t && t[1]) || "";
    }
  return (
    `
` +
    Us +
    e
  );
}
var Bs = !1;
function Vs(e, t) {
  if (!e || Bs) return "";
  Bs = !0;
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
          s = r.stack.split(`
`),
          o = l.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && l[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== s[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Bs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Sr(e) : "";
}
function pp(e) {
  switch (e.tag) {
    case 5:
      return Sr(e.type);
    case 16:
      return Sr("Lazy");
    case 13:
      return Sr("Suspense");
    case 19:
      return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Vs(e.type, !1)), e);
    case 11:
      return ((e = Vs(e.type.render, !1)), e);
    case 1:
      return ((e = Vs(e.type, !0)), e);
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Ln:
      return "Portal";
    case ko:
      return "Profiler";
    case Pi:
      return "StrictMode";
    case jo:
      return "Suspense";
    case bo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cc:
        return (e.displayName || "Context") + ".Consumer";
      case uc:
        return (e._context.displayName || "Context") + ".Provider";
      case Di:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Oi:
        return (
          (t = e.displayName || null),
          t !== null ? t : Eo(e.type) || "Memo"
        );
      case Ht:
        ((t = e._payload), (e = e._init));
        try {
          return Eo(e(t));
        } catch {}
    }
  return null;
}
function mp(e) {
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
      return Eo(t);
    case 8:
      return t === Pi ? "StrictMode" : "Mode";
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
function rn(e) {
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
function fc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function hp(e) {
  var t = fc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = hp(e));
}
function pc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Da(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function mc(e, t) {
  ((t = t.checked), t != null && Ti(e, "checked", t, !1));
}
function To(e, t) {
  mc(e, t);
  var n = rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Po(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Po(e, t.type, rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Oa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Po(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + rn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Do(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function La(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: rn(n) };
}
function hc(e, t) {
  var n = rn(t.value),
    r = rn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var pl,
  yc = (function (e) {
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
        pl = pl || document.createElement("div"),
          pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pl.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
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
  gp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function (e) {
  gp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]));
  });
});
function vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Er.hasOwnProperty(e) && Er[e])
      ? ("" + t).trim()
      : t + "px";
}
function xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = vc(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var yp = ie(
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
  },
);
function Lo(e, t) {
  if (t) {
    if (yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
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
var _o = null;
function Li(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fo = null,
  Vn = null,
  Qn = null;
function _a(e) {
  if ((e = sl(e))) {
    if (typeof Fo != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = bs(t)), Fo(e.stateNode, e.type, t));
  }
}
function wc(e) {
  Vn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Vn = e);
}
function Sc() {
  if (Vn) {
    var e = Vn,
      t = Qn;
    if (((Qn = Vn = null), _a(e), t)) for (e = 0; e < t.length; e++) _a(t[e]);
  }
}
function Nc(e, t) {
  return e(t);
}
function kc() {}
var Qs = !1;
function jc(e, t, n) {
  if (Qs) return e(t, n);
  Qs = !0;
  try {
    return Nc(e, t, n);
  } finally {
    ((Qs = !1), (Vn !== null || Qn !== null) && (kc(), Sc()));
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bs(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var $o = !1;
if (Lt)
  try {
    var cr = {};
    (Object.defineProperty(cr, "passive", {
      get: function () {
        $o = !0;
      },
    }),
      window.addEventListener("test", cr, cr),
      window.removeEventListener("test", cr, cr));
  } catch {
    $o = !1;
  }
function vp(e, t, n, r, l, s, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Cr = !1,
  Ul = null,
  Bl = !1,
  zo = null,
  xp = {
    onError: function (e) {
      ((Cr = !0), (Ul = e));
    },
  };
function wp(e, t, n, r, l, s, o, a, u) {
  ((Cr = !1), (Ul = null), vp.apply(xp, arguments));
}
function Sp(e, t, n, r, l, s, o, a, u) {
  if ((wp.apply(this, arguments), Cr)) {
    if (Cr) {
      var c = Ul;
      ((Cr = !1), (Ul = null));
    } else throw Error(P(198));
    Bl || ((Bl = !0), (zo = c));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
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
function Fa(e) {
  if (Tn(e) !== e) throw Error(P(188));
}
function Np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return (Fa(l), e);
        if (s === r) return (Fa(l), t);
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) ((n = l), (r = s));
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          ((o = !0), (n = l), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = l), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = l));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Ec(e) {
  return ((e = Np(e)), e !== null ? Cc(e) : null);
}
function Cc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tc = Qe.unstable_scheduleCallback,
  $a = Qe.unstable_cancelCallback,
  kp = Qe.unstable_shouldYield,
  jp = Qe.unstable_requestPaint,
  de = Qe.unstable_now,
  bp = Qe.unstable_getCurrentPriorityLevel,
  Mi = Qe.unstable_ImmediatePriority,
  Pc = Qe.unstable_UserBlockingPriority,
  Vl = Qe.unstable_NormalPriority,
  Ep = Qe.unstable_LowPriority,
  Dc = Qe.unstable_IdlePriority,
  Ss = null,
  Nt = null;
function Cp(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Dp,
  Tp = Math.log,
  Pp = Math.LN2;
function Dp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / Pp) | 0)) | 0);
}
var ml = 64,
  hl = 4194304;
function kr(e) {
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
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = kr(a)) : ((s &= o), s !== 0 && (r = kr(s)));
  } else ((o = n & ~l), o !== 0 ? (r = kr(o)) : s !== 0 && (r = kr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Op(e, t) {
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
function Lp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - pt(s),
      a = 1 << o,
      u = l[o];
    (u === -1
      ? (!(a & n) || a & r) && (l[o] = Op(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function Io(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oc() {
  var e = ml;
  return ((ml <<= 1), !(ml & 4194240) && (ml = 64), e);
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n));
}
function Mp(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      s = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
  }
}
function _i(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var K = 0;
function Lc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Mc,
  Fi,
  _c,
  Fc,
  $c,
  Ro = !1,
  gl = [],
  Gt = null,
  Kt = null,
  Xt = null,
  Ar = new Map(),
  Hr = new Map(),
  Ut = [],
  _p =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function za(e, t) {
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
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = sl(t)), t !== null && Fi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Fp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((Gt = dr(Gt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((Kt = dr(Kt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((Xt = dr(Xt, e, t, n, r, l)), !0);
    case "pointerover":
      var s = l.pointerId;
      return (Ar.set(s, dr(Ar.get(s) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (s = l.pointerId),
        Hr.set(s, dr(Hr.get(s) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function zc(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bc(n)), t !== null)) {
          ((e.blockedOn = t),
            $c(e.priority, function () {
              _c(n);
            }));
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
function Ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ao(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((_o = r), n.target.dispatchEvent(r), (_o = null));
    } else return ((t = sl(n)), t !== null && Fi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ia(e, t, n) {
  Ol(e) && n.delete(t);
}
function $p() {
  ((Ro = !1),
    Gt !== null && Ol(Gt) && (Gt = null),
    Kt !== null && Ol(Kt) && (Kt = null),
    Xt !== null && Ol(Xt) && (Xt = null),
    Ar.forEach(Ia),
    Hr.forEach(Ia));
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ro ||
      ((Ro = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, $p)));
}
function Wr(e) {
  function t(l) {
    return fr(l, e);
  }
  if (0 < gl.length) {
    fr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && fr(Gt, e),
      Kt !== null && fr(Kt, e),
      Xt !== null && fr(Xt, e),
      Ar.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    ((r = Ut[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    (zc(n), n.blockedOn === null && Ut.shift());
}
var Yn = $t.ReactCurrentBatchConfig,
  Yl = !0;
function zp(e, t, n, r) {
  var l = K,
    s = Yn.transition;
  Yn.transition = null;
  try {
    ((K = 1), $i(e, t, n, r));
  } finally {
    ((K = l), (Yn.transition = s));
  }
}
function Ip(e, t, n, r) {
  var l = K,
    s = Yn.transition;
  Yn.transition = null;
  try {
    ((K = 4), $i(e, t, n, r));
  } finally {
    ((K = l), (Yn.transition = s));
  }
}
function $i(e, t, n, r) {
  if (Yl) {
    var l = Ao(e, t, n, r);
    if (l === null) (ro(e, t, r, ql, n), za(e, r));
    else if (Fp(l, e, t, n, r)) r.stopPropagation();
    else if ((za(e, r), t & 4 && -1 < _p.indexOf(e))) {
      for (; l !== null; ) {
        var s = sl(l);
        if (
          (s !== null && Mc(s),
          (s = Ao(e, t, n, r)),
          s === null && ro(e, t, r, ql, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var ql = null;
function Ao(e, t, n, r) {
  if (((ql = null), (e = Li(r)), (e = pn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ql = e), null);
}
function Ic(e) {
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
      switch (bp()) {
        case Mi:
          return 1;
        case Pc:
          return 4;
        case Vl:
        case Ep:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  zi = null,
  Ll = null;
function Rc() {
  if (Ll) return Ll;
  var e,
    t = zi,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[s - r]; r++);
  return (Ll = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ml(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yl() {
  return !0;
}
function Ra() {
  return !1;
}
function qe(e) {
  function t(n, r, l, s, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? yl
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yl));
      },
      persist: function () {},
      isPersistent: yl,
    }),
    t
  );
}
var sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ii = qe(sr),
  ll = ie({}, sr, { view: 0, detail: 0 }),
  Rp = qe(ll),
  qs,
  Gs,
  pr,
  Ns = ie({}, ll, {
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
    getModifierState: Ri,
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
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((qs = e.screenX - pr.screenX), (Gs = e.screenY - pr.screenY))
              : (Gs = qs = 0),
            (pr = e)),
          qs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gs;
    },
  }),
  Aa = qe(Ns),
  Ap = ie({}, Ns, { dataTransfer: 0 }),
  Hp = qe(Ap),
  Wp = ie({}, ll, { relatedTarget: 0 }),
  Ks = qe(Wp),
  Up = ie({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = qe(Up),
  Vp = ie({}, sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qp = qe(Vp),
  Yp = ie({}, sr, { data: 0 }),
  Ha = qe(Yp),
  qp = {
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
  Gp = {
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
  Kp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kp[e]) ? !!t[e] : !1;
}
function Ri() {
  return Xp;
}
var Jp = ie({}, ll, {
    key: function (e) {
      if (e.key) {
        var t = qp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Gp[e.keyCode] || "Unidentified"
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
    getModifierState: Ri,
    charCode: function (e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ml(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Zp = qe(Jp),
  em = ie({}, Ns, {
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
  Wa = qe(em),
  tm = ie({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ri,
  }),
  nm = qe(tm),
  rm = ie({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lm = qe(rm),
  sm = ie({}, Ns, {
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
  om = qe(sm),
  im = [9, 13, 27, 32],
  Ai = Lt && "CompositionEvent" in window,
  Tr = null;
Lt && "documentMode" in document && (Tr = document.documentMode);
var am = Lt && "TextEvent" in window && !Tr,
  Ac = Lt && (!Ai || (Tr && 8 < Tr && 11 >= Tr)),
  Ua = " ",
  Ba = !1;
function Hc(e, t) {
  switch (e) {
    case "keyup":
      return im.indexOf(t.keyCode) !== -1;
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
function Wc(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var _n = !1;
function um(e, t) {
  switch (e) {
    case "compositionend":
      return Wc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ba = !0), Ua);
    case "textInput":
      return ((e = t.data), e === Ua && Ba ? null : e);
    default:
      return null;
  }
}
function cm(e, t) {
  if (_n)
    return e === "compositionend" || (!Ai && Hc(e, t))
      ? ((e = Rc()), (Ll = zi = Qt = null), (_n = !1), e)
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
      return Ac && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dm = {
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
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dm[e.type] : t === "textarea";
}
function Uc(e, t, n, r) {
  (wc(r),
    (t = Gl(t, "onChange")),
    0 < t.length &&
      ((n = new Ii("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Pr = null,
  Ur = null;
function fm(e) {
  ed(e, 0);
}
function ks(e) {
  var t = zn(e);
  if (pc(t)) return e;
}
function pm(e, t) {
  if (e === "change") return t;
}
var Bc = !1;
if (Lt) {
  var Xs;
  if (Lt) {
    var Js = "oninput" in document;
    if (!Js) {
      var Qa = document.createElement("div");
      (Qa.setAttribute("oninput", "return;"),
        (Js = typeof Qa.oninput == "function"));
    }
    Xs = Js;
  } else Xs = !1;
  Bc = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  Pr && (Pr.detachEvent("onpropertychange", Vc), (Ur = Pr = null));
}
function Vc(e) {
  if (e.propertyName === "value" && ks(Ur)) {
    var t = [];
    (Uc(t, Ur, e, Li(e)), jc(fm, t));
  }
}
function mm(e, t, n) {
  e === "focusin"
    ? (Ya(), (Pr = t), (Ur = n), Pr.attachEvent("onpropertychange", Vc))
    : e === "focusout" && Ya();
}
function hm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ks(Ur);
}
function gm(e, t) {
  if (e === "click") return ks(t);
}
function ym(e, t) {
  if (e === "input" || e === "change") return ks(t);
}
function vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : vm;
function Br(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!No.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ga(e, t) {
  var n = qa(e);
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
    n = qa(n);
  }
}
function Qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Qc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Yc() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function Hi(e) {
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
function xm(e) {
  var t = Yc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        ((r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = Ga(n, s)));
        var o = Ga(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var wm = Lt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Ho = null,
  Dr = null,
  Wo = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo ||
    Fn == null ||
    Fn !== Wl(r) ||
    ((r = Fn),
    "selectionStart" in r && Hi(r)
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
    (Dr && Br(Dr, r)) ||
      ((Dr = r),
      (r = Gl(Ho, "onSelect")),
      0 < r.length &&
        ((t = new Ii("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function vl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $n = {
    animationend: vl("Animation", "AnimationEnd"),
    animationiteration: vl("Animation", "AnimationIteration"),
    animationstart: vl("Animation", "AnimationStart"),
    transitionend: vl("Transition", "TransitionEnd"),
  },
  Zs = {},
  qc = {};
Lt &&
  ((qc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function js(e) {
  if (Zs[e]) return Zs[e];
  if (!$n[e]) return e;
  var t = $n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qc) return (Zs[e] = t[n]);
  return e;
}
var Gc = js("animationend"),
  Kc = js("animationiteration"),
  Xc = js("animationstart"),
  Jc = js("transitionend"),
  Zc = new Map(),
  Xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function sn(e, t) {
  (Zc.set(e, t), Cn(t, [e]));
}
for (var eo = 0; eo < Xa.length; eo++) {
  var to = Xa[eo],
    Sm = to.toLowerCase(),
    Nm = to[0].toUpperCase() + to.slice(1);
  sn(Sm, "on" + Nm);
}
sn(Gc, "onAnimationEnd");
sn(Kc, "onAnimationIteration");
sn(Xc, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(Jc, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  km = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Ja(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Sp(r, t, void 0, e), (e.currentTarget = null));
}
function ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && l.isPropagationStopped())) break e;
          (Ja(l, a, c), (s = u));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          (Ja(l, a, c), (s = u));
        }
    }
  }
  if (Bl) throw ((e = zo), (Bl = !1), (zo = null), e);
}
function te(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  (t && (r |= 4), td(n, e, r, t));
}
var xl = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[xl]) {
    ((e[xl] = !0),
      ac.forEach(function (n) {
        n !== "selectionchange" && (km.has(n) || no(n, !1, e), no(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xl] || ((t[xl] = !0), no("selectionchange", !1, t));
  }
}
function td(e, t, n, r) {
  switch (Ic(t)) {
    case 1:
      var l = zp;
      break;
    case 4:
      l = Ip;
      break;
    default:
      l = $i;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !$o ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function ro(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = pn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jc(function () {
    var c = s,
      p = Li(n),
      m = [];
    e: {
      var y = Zc.get(e);
      if (y !== void 0) {
        var x = Ii,
          w = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Zp;
            break;
          case "focusin":
            ((w = "focus"), (x = Ks));
            break;
          case "focusout":
            ((w = "blur"), (x = Ks));
            break;
          case "beforeblur":
          case "afterblur":
            x = Ks;
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
            x = Aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = nm;
            break;
          case Gc:
          case Kc:
          case Xc:
            x = Bp;
            break;
          case Jc:
            x = lm;
            break;
          case "scroll":
            x = Rp;
            break;
          case "wheel":
            x = om;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Wa;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          f = v ? (y !== null ? y + "Capture" : null) : y;
        v = [];
        for (var d = c, g; d !== null; ) {
          g = d;
          var j = g.stateNode;
          if (
            (g.tag === 5 &&
              j !== null &&
              ((g = j),
              f !== null && ((j = Rr(d, f)), j != null && v.push(Qr(d, j, g)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < v.length &&
          ((y = new x(y, w, null, n, p)), m.push({ event: y, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          y &&
            n !== _o &&
            (w = n.relatedTarget || n.fromElement) &&
            (pn(w) || w[Mt]))
        )
          break e;
        if (
          (x || y) &&
          ((y =
            p.window === p
              ? p
              : (y = p.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? pn(w) : null),
              w !== null &&
                ((k = Tn(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((v = Aa),
            (j = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Wa),
              (j = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (k = x == null ? y : zn(x)),
            (g = w == null ? y : zn(w)),
            (y = new v(j, d + "leave", x, n, p)),
            (y.target = k),
            (y.relatedTarget = g),
            (j = null),
            pn(p) === c &&
              ((v = new v(f, d + "enter", w, n, p)),
              (v.target = g),
              (v.relatedTarget = k),
              (j = v)),
            (k = j),
            x && w)
          )
            t: {
              for (v = x, f = w, d = 0, g = v; g; g = Dn(g)) d++;
              for (g = 0, j = f; j; j = Dn(j)) g++;
              for (; 0 < d - g; ) ((v = Dn(v)), d--);
              for (; 0 < g - d; ) ((f = Dn(f)), g--);
              for (; d--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                ((v = Dn(v)), (f = Dn(f)));
              }
              v = null;
            }
          else v = null;
          (x !== null && Za(m, y, x, v, !1),
            w !== null && k !== null && Za(m, k, w, v, !0));
        }
      }
      e: {
        if (
          ((y = c ? zn(c) : window),
          (x = y.nodeName && y.nodeName.toLowerCase()),
          x === "select" || (x === "input" && y.type === "file"))
        )
          var S = pm;
        else if (Va(y))
          if (Bc) S = ym;
          else {
            S = hm;
            var b = mm;
          }
        else
          (x = y.nodeName) &&
            x.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (S = gm);
        if (S && (S = S(e, c))) {
          Uc(m, S, n, p);
          break e;
        }
        (b && b(e, y, c),
          e === "focusout" &&
            (b = y._wrapperState) &&
            b.controlled &&
            y.type === "number" &&
            Po(y, "number", y.value));
      }
      switch (((b = c ? zn(c) : window), e)) {
        case "focusin":
          (Va(b) || b.contentEditable === "true") &&
            ((Fn = b), (Ho = c), (Dr = null));
          break;
        case "focusout":
          Dr = Ho = Fn = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wo = !1), Ka(m, n, p));
          break;
        case "selectionchange":
          if (wm) break;
        case "keydown":
        case "keyup":
          Ka(m, n, p);
      }
      var E;
      if (Ai)
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
        _n
          ? Hc(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      (D &&
        (Ac &&
          n.locale !== "ko" &&
          (_n || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && _n && (E = Rc())
            : ((Qt = p),
              (zi = "value" in Qt ? Qt.value : Qt.textContent),
              (_n = !0))),
        (b = Gl(c, D)),
        0 < b.length &&
          ((D = new Ha(D, e, null, n, p)),
          m.push({ event: D, listeners: b }),
          E ? (D.data = E) : ((E = Wc(n)), E !== null && (D.data = E)))),
        (E = am ? um(e, n) : cm(e, n)) &&
          ((c = Gl(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Ha("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: c }),
            (p.data = E))));
    }
    ed(m, t);
  });
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    (l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = Rr(e, n)),
      s != null && r.unshift(Qr(e, s, l)),
      (s = Rr(e, t)),
      s != null && r.push(Qr(e, s, l))),
      (e = e.return));
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Za(e, t, n, r, l) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = Rr(n, s)), u != null && o.unshift(Qr(n, u, a)))
        : l || ((u = Rr(n, s)), u != null && o.push(Qr(n, u, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jm = /\r\n?/g,
  bm = /\u0000|\uFFFD/g;
function eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      jm,
      `
`,
    )
    .replace(bm, "");
}
function wl(e, t, n) {
  if (((t = eu(t)), eu(e) !== t && n)) throw Error(P(425));
}
function Kl() {}
var Uo = null,
  Bo = null;
function Vo(e, t) {
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
var Qo = typeof setTimeout == "function" ? setTimeout : void 0,
  Em = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tu = typeof Promise == "function" ? Promise : void 0,
  Cm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tu < "u"
        ? function (e) {
            return tu.resolve(null).then(e).catch(Tm);
          }
        : Qo;
function Tm(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Wr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wr(t);
}
function Jt(e) {
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
function nu(e) {
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
var or = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + or,
  Yr = "__reactProps$" + or,
  Mt = "__reactContainer$" + or,
  Yo = "__reactEvents$" + or,
  Pm = "__reactListeners$" + or,
  Dm = "__reactHandles$" + or;
function pn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nu(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = nu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function sl(e) {
  return (
    (e = e[St] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function bs(e) {
  return e[Yr] || null;
}
var qo = [],
  In = -1;
function on(e) {
  return { current: e };
}
function ne(e) {
  0 > In || ((e.current = qo[In]), (qo[In] = null), In--);
}
function ee(e, t) {
  (In++, (qo[In] = e.current), (e.current = t));
}
var ln = {},
  De = on(ln),
  Ie = on(!1),
  Sn = ln;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    s;
  for (s in n) l[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Re(e) {
  return ((e = e.childContextTypes), e != null);
}
function Xl() {
  (ne(Ie), ne(De));
}
function ru(e, t, n) {
  if (De.current !== ln) throw Error(P(168));
  (ee(De, t), ee(Ie, n));
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, mp(e) || "Unknown", l));
  return ie({}, n, r);
}
function Jl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (Sn = De.current),
    ee(De, e),
    ee(Ie, Ie.current),
    !0
  );
}
function lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  (n
    ? ((e = nd(e, t, Sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Ie),
      ne(De),
      ee(De, e))
    : ne(Ie),
    ee(Ie, n));
}
var Et = null,
  Es = !1,
  so = !1;
function rd(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Om(e) {
  ((Es = !0), rd(e));
}
function an() {
  if (!so && Et !== null) {
    so = !0;
    var e = 0,
      t = K;
    try {
      var n = Et;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Et = null), (Es = !1));
    } catch (l) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Tc(Mi, an), l);
    } finally {
      ((K = t), (so = !1));
    }
  }
  return null;
}
var Rn = [],
  An = 0,
  Zl = null,
  es = 0,
  Je = [],
  Ze = 0,
  Nn = null,
  Ct = 1,
  Tt = "";
function un(e, t) {
  ((Rn[An++] = es), (Rn[An++] = Zl), (Zl = e), (es = t));
}
function ld(e, t, n) {
  ((Je[Ze++] = Ct), (Je[Ze++] = Tt), (Je[Ze++] = Nn), (Nn = e));
  var r = Ct;
  e = Tt;
  var l = 32 - pt(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var s = 32 - pt(t) + l;
  if (30 < s) {
    var o = l - (l % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ct = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (Tt = s + e));
  } else ((Ct = (1 << s) | (n << l) | r), (Tt = e));
}
function Wi(e) {
  e.return !== null && (un(e, 1), ld(e, 1, 0));
}
function Ui(e) {
  for (; e === Zl; )
    ((Zl = Rn[--An]), (Rn[An] = null), (es = Rn[--An]), (Rn[An] = null));
  for (; e === Nn; )
    ((Nn = Je[--Ze]),
      (Je[Ze] = null),
      (Tt = Je[--Ze]),
      (Je[Ze] = null),
      (Ct = Je[--Ze]),
      (Je[Ze] = null));
}
var Ve = null,
  Be = null,
  re = !1,
  ft = null;
function sd(e, t) {
  var n = et(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Be = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nn !== null ? { id: Ct, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ko(e) {
  if (re) {
    var t = Be;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Go(e)) throw Error(P(418));
        t = Jt(n.nextSibling);
        var r = Ve;
        t && su(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ve = e));
      }
    } else {
      if (Go(e)) throw Error(P(418));
      ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ve = e));
    }
  }
}
function ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function Sl(e) {
  if (e !== Ve) return !1;
  if (!re) return (ou(e), (re = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Go(e)) throw (od(), Error(P(418)));
    for (; t; ) (sd(e, t), (t = Jt(t.nextSibling)));
  }
  if ((ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Ve ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function od() {
  for (var e = Be; e; ) e = Jt(e.nextSibling);
}
function Jn() {
  ((Be = Ve = null), (re = !1));
}
function Bi(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Lm = $t.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Nl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function iu(e) {
  var t = e._init;
  return t(e._payload);
}
function id(e) {
  function t(f, d) {
    if (e) {
      var g = f.deletions;
      g === null ? ((f.deletions = [d]), (f.flags |= 16)) : g.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function l(f, d) {
    return ((f = nn(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function s(f, d, g) {
    return (
      (f.index = g),
      e
        ? ((g = f.alternate),
          g !== null
            ? ((g = g.index), g < d ? ((f.flags |= 2), d) : g)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function a(f, d, g, j) {
    return d === null || d.tag !== 6
      ? ((d = po(g, f.mode, j)), (d.return = f), d)
      : ((d = l(d, g)), (d.return = f), d);
  }
  function u(f, d, g, j) {
    var S = g.type;
    return S === Mn
      ? p(f, d, g.props.children, j, g.key)
      : d !== null &&
          (d.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Ht &&
              iu(S) === d.type))
        ? ((j = l(d, g.props)), (j.ref = mr(f, d, g)), (j.return = f), j)
        : ((j = Al(g.type, g.key, g.props, null, f.mode, j)),
          (j.ref = mr(f, d, g)),
          (j.return = f),
          j);
  }
  function c(f, d, g, j) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== g.containerInfo ||
      d.stateNode.implementation !== g.implementation
      ? ((d = mo(g, f.mode, j)), (d.return = f), d)
      : ((d = l(d, g.children || [])), (d.return = f), d);
  }
  function p(f, d, g, j, S) {
    return d === null || d.tag !== 7
      ? ((d = xn(g, f.mode, j, S)), (d.return = f), d)
      : ((d = l(d, g)), (d.return = f), d);
  }
  function m(f, d, g) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = po("" + d, f.mode, g)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dl:
          return (
            (g = Al(d.type, d.key, d.props, null, f.mode, g)),
            (g.ref = mr(f, null, d)),
            (g.return = f),
            g
          );
        case Ln:
          return ((d = mo(d, f.mode, g)), (d.return = f), d);
        case Ht:
          var j = d._init;
          return m(f, j(d._payload), g);
      }
      if (Nr(d) || ur(d))
        return ((d = xn(d, f.mode, g, null)), (d.return = f), d);
      Nl(f, d);
    }
    return null;
  }
  function y(f, d, g, j) {
    var S = d !== null ? d.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : a(f, d, "" + g, j);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case dl:
          return g.key === S ? u(f, d, g, j) : null;
        case Ln:
          return g.key === S ? c(f, d, g, j) : null;
        case Ht:
          return ((S = g._init), y(f, d, S(g._payload), j));
      }
      if (Nr(g) || ur(g)) return S !== null ? null : p(f, d, g, j, null);
      Nl(f, g);
    }
    return null;
  }
  function x(f, d, g, j, S) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return ((f = f.get(g) || null), a(d, f, "" + j, S));
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case dl:
          return (
            (f = f.get(j.key === null ? g : j.key) || null),
            u(d, f, j, S)
          );
        case Ln:
          return (
            (f = f.get(j.key === null ? g : j.key) || null),
            c(d, f, j, S)
          );
        case Ht:
          var b = j._init;
          return x(f, d, g, b(j._payload), S);
      }
      if (Nr(j) || ur(j)) return ((f = f.get(g) || null), p(d, f, j, S, null));
      Nl(d, j);
    }
    return null;
  }
  function w(f, d, g, j) {
    for (
      var S = null, b = null, E = d, D = (d = 0), z = null;
      E !== null && D < g.length;
      D++
    ) {
      E.index > D ? ((z = E), (E = null)) : (z = E.sibling);
      var _ = y(f, E, g[D], j);
      if (_ === null) {
        E === null && (E = z);
        break;
      }
      (e && E && _.alternate === null && t(f, E),
        (d = s(_, d, D)),
        b === null ? (S = _) : (b.sibling = _),
        (b = _),
        (E = z));
    }
    if (D === g.length) return (n(f, E), re && un(f, D), S);
    if (E === null) {
      for (; D < g.length; D++)
        ((E = m(f, g[D], j)),
          E !== null &&
            ((d = s(E, d, D)),
            b === null ? (S = E) : (b.sibling = E),
            (b = E)));
      return (re && un(f, D), S);
    }
    for (E = r(f, E); D < g.length; D++)
      ((z = x(E, f, D, g[D], j)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? D : z.key),
          (d = s(z, d, D)),
          b === null ? (S = z) : (b.sibling = z),
          (b = z)));
    return (
      e &&
        E.forEach(function (Y) {
          return t(f, Y);
        }),
      re && un(f, D),
      S
    );
  }
  function v(f, d, g, j) {
    var S = ur(g);
    if (typeof S != "function") throw Error(P(150));
    if (((g = S.call(g)), g == null)) throw Error(P(151));
    for (
      var b = (S = null), E = d, D = (d = 0), z = null, _ = g.next();
      E !== null && !_.done;
      D++, _ = g.next()
    ) {
      E.index > D ? ((z = E), (E = null)) : (z = E.sibling);
      var Y = y(f, E, _.value, j);
      if (Y === null) {
        E === null && (E = z);
        break;
      }
      (e && E && Y.alternate === null && t(f, E),
        (d = s(Y, d, D)),
        b === null ? (S = Y) : (b.sibling = Y),
        (b = Y),
        (E = z));
    }
    if (_.done) return (n(f, E), re && un(f, D), S);
    if (E === null) {
      for (; !_.done; D++, _ = g.next())
        ((_ = m(f, _.value, j)),
          _ !== null &&
            ((d = s(_, d, D)),
            b === null ? (S = _) : (b.sibling = _),
            (b = _)));
      return (re && un(f, D), S);
    }
    for (E = r(f, E); !_.done; D++, _ = g.next())
      ((_ = x(E, f, D, _.value, j)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? D : _.key),
          (d = s(_, d, D)),
          b === null ? (S = _) : (b.sibling = _),
          (b = _)));
    return (
      e &&
        E.forEach(function (W) {
          return t(f, W);
        }),
      re && un(f, D),
      S
    );
  }
  function k(f, d, g, j) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Mn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case dl:
          e: {
            for (var S = g.key, b = d; b !== null; ) {
              if (b.key === S) {
                if (((S = g.type), S === Mn)) {
                  if (b.tag === 7) {
                    (n(f, b.sibling),
                      (d = l(b, g.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  b.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ht &&
                    iu(S) === b.type)
                ) {
                  (n(f, b.sibling),
                    (d = l(b, g.props)),
                    (d.ref = mr(f, b, g)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, b);
                break;
              } else t(f, b);
              b = b.sibling;
            }
            g.type === Mn
              ? ((d = xn(g.props.children, f.mode, j, g.key)),
                (d.return = f),
                (f = d))
              : ((j = Al(g.type, g.key, g.props, null, f.mode, j)),
                (j.ref = mr(f, d, g)),
                (j.return = f),
                (f = j));
          }
          return o(f);
        case Ln:
          e: {
            for (b = g.key; d !== null; ) {
              if (d.key === b)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === g.containerInfo &&
                  d.stateNode.implementation === g.implementation
                ) {
                  (n(f, d.sibling),
                    (d = l(d, g.children || [])),
                    (d.return = f),
                    (f = d));
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            ((d = mo(g, f.mode, j)), (d.return = f), (f = d));
          }
          return o(f);
        case Ht:
          return ((b = g._init), k(f, d, b(g._payload), j));
      }
      if (Nr(g)) return w(f, d, g, j);
      if (ur(g)) return v(f, d, g, j);
      Nl(f, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, g)), (d.return = f), (f = d))
          : (n(f, d), (d = po(g, f.mode, j)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return k;
}
var Zn = id(!0),
  ad = id(!1),
  ts = on(null),
  ns = null,
  Hn = null,
  Vi = null;
function Qi() {
  Vi = Hn = ns = null;
}
function Yi(e) {
  var t = ts.current;
  (ne(ts), (e._currentValue = t));
}
function Xo(e, t, n) {
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
  ((ns = e),
    (Vi = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null)));
}
function rt(e) {
  var t = e._currentValue;
  if (Vi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (ns === null) throw Error(P(308));
      ((Hn = e), (ns.dependencies = { lanes: 0, firstContext: e }));
    } else Hn = Hn.next = e;
  return t;
}
var mn = null;
function qi(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function ud(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), qi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function Gi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
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
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), qi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function _l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), _i(e, n));
  }
}
function au(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (l = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function rs(e, t, n, r) {
  var l = e.updateQueue;
  Wt = !1;
  var s = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), o === null ? (s = c) : (o.next = c), (o = u));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== o &&
        (a === null ? (p.firstBaseUpdate = c) : (a.next = c),
        (p.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var m = l.baseState;
    ((o = 0), (p = c = u = null), (a = s));
    do {
      var y = a.lane,
        x = a.eventTime;
      if ((r & y) === y) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((y = t), (x = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                m = w.call(x, m, y);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (y = typeof w == "function" ? w.call(x, m, y) : w),
                y == null)
              )
                break e;
              m = ie({}, m, y);
              break e;
            case 2:
              Wt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [a]) : y.push(a));
      } else
        ((x = {
          eventTime: x,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((c = p = x), (u = m)) : (p = p.next = x),
          (o |= y));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((y = a),
          (a = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ((jn |= o), (e.lanes = o), (e.memoizedState = m));
  }
}
function uu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(P(191, l));
        l.call(r);
      }
    }
}
var ol = {},
  kt = on(ol),
  qr = on(ol),
  Gr = on(ol);
function hn(e) {
  if (e === ol) throw Error(P(174));
  return e;
}
function Ki(e, t) {
  switch ((ee(Gr, t), ee(qr, e), ee(kt, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Oo(t, e)));
  }
  (ne(kt), ee(kt, t));
}
function er() {
  (ne(kt), ne(qr), ne(Gr));
}
function dd(e) {
  hn(Gr.current);
  var t = hn(kt.current),
    n = Oo(t, e.type);
  t !== n && (ee(qr, e), ee(kt, n));
}
function Xi(e) {
  qr.current === e && (ne(kt), ne(qr));
}
var se = on(0);
function ls(e) {
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
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var oo = [];
function Ji() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Fl = $t.ReactCurrentDispatcher,
  io = $t.ReactCurrentBatchConfig,
  kn = 0,
  oe = null,
  he = null,
  ve = null,
  ss = !1,
  Or = !1,
  Kr = 0,
  Mm = 0;
function Ee() {
  throw Error(P(321));
}
function Zi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, s) {
  if (
    ((kn = s),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fl.current = e === null || e.memoizedState === null ? zm : Im),
    (e = n(r, l)),
    Or)
  ) {
    s = 0;
    do {
      if (((Or = !1), (Kr = 0), 25 <= s)) throw Error(P(301));
      ((s += 1),
        (ve = he = null),
        (t.updateQueue = null),
        (Fl.current = Rm),
        (e = n(r, l)));
    } while (Or);
  }
  if (
    ((Fl.current = os),
    (t = he !== null && he.next !== null),
    (kn = 0),
    (ve = he = oe = null),
    (ss = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function ta() {
  var e = Kr !== 0;
  return ((Kr = 0), e);
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e), ve);
}
function lt() {
  if (he === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? oe.memoizedState : ve.next;
  if (t !== null) ((ve = t), (he = e));
  else {
    if (e === null) throw Error(P(310));
    ((he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ve === null ? (oe.memoizedState = ve = e) : (ve = ve.next = e));
  }
  return ve;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = he,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = s.next), (s.next = o));
    }
    ((r.baseQueue = l = s), (n.pending = null));
  }
  if (l !== null) {
    ((s = l.next), (r = r.baseState));
    var a = (o = null),
      u = null,
      c = s;
    do {
      var p = c.lane;
      if ((kn & p) === p)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = m), (o = r)) : (u = u.next = m),
          (oe.lanes |= p),
          (jn |= p));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (u === null ? (o = r) : (u.next = a),
      ht(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((s = l.lane), (oe.lanes |= s), (jn |= s), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uo(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== l);
    (ht(s, t.memoizedState) || (ze = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function fd() {}
function pd(e, t) {
  var n = oe,
    r = lt(),
    l = t(),
    s = !ht(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (ze = !0)),
    (r = r.queue),
    na(gd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jr(9, hd.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(P(349));
    kn & 30 || md(n, t, l);
  }
  return l;
}
function md(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function hd(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), yd(t) && vd(e));
}
function gd(e, t, n) {
  return n(function () {
    yd(t) && vd(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function vd(e) {
  var t = _t(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function cu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $m.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function Jr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xd() {
  return lt().memoizedState;
}
function $l(e, t, n, r) {
  var l = xt();
  ((oe.flags |= e),
    (l.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Cs(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (((s = o.destroy), r !== null && Zi(r, o.deps))) {
      l.memoizedState = Jr(t, n, s, r);
      return;
    }
  }
  ((oe.flags |= e), (l.memoizedState = Jr(1 | t, n, s, r)));
}
function du(e, t) {
  return $l(8390656, 8, e, t);
}
function na(e, t) {
  return Cs(2048, 8, e, t);
}
function wd(e, t) {
  return Cs(4, 2, e, t);
}
function Sd(e, t) {
  return Cs(4, 4, e, t);
}
function Nd(e, t) {
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
function kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Cs(4, 4, Nd.bind(null, t, e), n)
  );
}
function ra() {}
function jd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function bd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ed(e, t, n) {
  return kn & 21
    ? (ht(n, t) || ((n = Oc()), (oe.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function _m(e, t) {
  var n = K;
  ((K = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = io.transition;
  io.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((K = n), (io.transition = r));
  }
}
function Cd() {
  return lt().memoizedState;
}
function Fm(e, t, n) {
  var r = tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Td(e))
  )
    Pd(t, n);
  else if (((n = ud(e, t, n, r)), n !== null)) {
    var l = Me();
    (mt(n, e, r, l), Dd(n, t, r));
  }
}
function $m(e, t, n) {
  var r = tn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Td(e)) Pd(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ht(a, o))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), qi(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ud(e, t, l, r)),
      n !== null && ((l = Me()), mt(n, e, r, l), Dd(n, t, r)));
  }
}
function Td(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function Pd(e, t) {
  Or = ss = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Dd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), _i(e, n));
  }
}
var os = {
    readContext: rt,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: rt,
    useCallback: function (e, t) {
      return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: rt,
    useEffect: du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $l(4194308, 4, Nd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
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
        (e = e.dispatch = Fm.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: cu,
    useDebugValue: ra,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = cu(!1),
        t = e[0];
      return ((e = _m.bind(null, e[1])), (xt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        l = xt();
      if (re) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(P(349));
        kn & 30 || md(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        du(gd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Jr(9, hd.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = xe.identifierPrefix;
      if (re) {
        var n = Tt,
          r = Ct;
        ((n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Mm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: rt,
    useCallback: jd,
    useContext: rt,
    useEffect: na,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: Sd,
    useMemo: bd,
    useReducer: ao,
    useRef: xd,
    useState: function () {
      return ao(Xr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = lt();
      return Ed(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Xr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: rt,
    useCallback: jd,
    useContext: rt,
    useEffect: na,
    useImperativeHandle: kd,
    useInsertionEffect: wd,
    useLayoutEffect: Sd,
    useMemo: bd,
    useReducer: uo,
    useRef: xd,
    useState: function () {
      return uo(Xr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = lt();
      return he === null ? (t.memoizedState = e) : Ed(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(Xr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: fd,
    useSyncExternalStore: pd,
    useId: Cd,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    ((t = ie({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ts = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = tn(e),
      s = Pt(r, l);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Zt(e, s, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = tn(e),
      s = Pt(r, l);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Zt(e, s, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = tn(e),
      l = Pt(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (mt(t, e, r, n), _l(t, e, r)));
  },
};
function fu(e, t, n, r, l, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Br(n, r) || !Br(l, s)
        : !0
  );
}
function Od(e, t, n) {
  var r = !1,
    l = ln,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((l = Re(t) ? Sn : De.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Xn(e, l) : ln)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ts),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function pu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ts.enqueueReplaceState(t, t.state, null));
}
function Zo(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gi(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (l.context = rt(s))
    : ((s = Re(t) ? Sn : De.current), (l.context = Xn(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Jo(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ts.enqueueReplaceState(l, l.state, null),
      rs(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += pp(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (s) {
    l =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Am = typeof WeakMap == "function" ? WeakMap : Map;
function Ld(e, t, n) {
  ((n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (as || ((as = !0), (ci = r)), ei(e, t));
    }),
    n
  );
}
function Md(e, t, n) {
  ((n = Pt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ei(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (ei(e, t),
          typeof r != "function" &&
            (en === null ? (en = new Set([this])) : en.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Am();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = eh.bind(null, e, t, n)), t.then(e, e));
}
function hu(e) {
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
function gu(e, t, n, r, l) {
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
              : ((t = Pt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hm = $t.ReactCurrentOwner,
  ze = !1;
function Le(e, t, n, r) {
  t.child = e === null ? ad(t, null, n, r) : Zn(t, e.child, n, r);
}
function yu(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    qn(t, l),
    (r = ea(e, t, n, r, s, l)),
    (n = ta()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (re && n && Wi(t), (t.flags |= 1), Le(e, t, r, l), t.child)
  );
}
function vu(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !da(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), _d(e, t, s, r, l))
      : ((e = Al(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(o, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = nn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function _d(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Br(s, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (ze = !0);
      else return ((t.lanes = e.lanes), Ft(e, t, l));
  }
  return ti(e, t, n, r, l);
}
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Un, We),
        (We |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Un, We),
          (We |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ee(Un, We),
        (We |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Un, We),
      (We |= r));
  return (Le(e, t, l, n), t.child);
}
function $d(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ti(e, t, n, r, l) {
  var s = Re(n) ? Sn : De.current;
  return (
    (s = Xn(t, s)),
    qn(t, l),
    (n = ea(e, t, n, r, s, l)),
    (r = ta()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (re && r && Wi(t), (t.flags |= 1), Le(e, t, n, l), t.child)
  );
}
function xu(e, t, n, r, l) {
  if (Re(n)) {
    var s = !0;
    Jl(t);
  } else s = !1;
  if ((qn(t, l), t.stateNode === null))
    (zl(e, t), Od(t, n, r), Zo(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = rt(c))
      : ((c = Re(n) ? Sn : De.current), (c = Xn(t, c)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && pu(t, o, r, c)),
      (Wt = !1));
    var y = t.memoizedState;
    ((o.state = y),
      rs(t, r, o, l),
      (u = t.memoizedState),
      a !== r || y !== u || Ie.current || Wt
        ? (typeof p == "function" && (Jo(t, n, p, r), (u = t.memoizedState)),
          (a = Wt || fu(t, n, a, r, y, u, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      cd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = c),
      (m = t.pendingProps),
      (y = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = rt(u))
        : ((u = Re(n) ? Sn : De.current), (u = Xn(t, u))));
    var x = n.getDerivedStateFromProps;
    ((p =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== m || y !== u) && pu(t, o, r, u)),
      (Wt = !1),
      (y = t.memoizedState),
      (o.state = y),
      rs(t, r, o, l));
    var w = t.memoizedState;
    a !== m || y !== w || Ie.current || Wt
      ? (typeof x == "function" && (Jo(t, n, x, r), (w = t.memoizedState)),
        (c = Wt || fu(t, n, c, r, y, w, u) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ni(e, t, n, r, s, l);
}
function ni(e, t, n, r, l, s) {
  $d(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && lu(t, n, !1), Ft(e, t, s));
  ((r = t.stateNode), (Hm.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, s)), (t.child = Zn(t, null, a, s)))
      : Le(e, t, a, s),
    (t.memoizedState = r.state),
    l && lu(t, n, !0),
    t.child
  );
}
function zd(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ru(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ru(e, t.context, !1),
    Ki(e, t.containerInfo));
}
function wu(e, t, n, r, l) {
  return (Jn(), Bi(l), (t.flags |= 256), Le(e, t, n, r), t.child);
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, n) {
  var r = t.pendingProps,
    l = se.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(se, l & 1),
    e === null)
  )
    return (
      Ko(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Os(o, r, 0, null)),
              (e = xn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = li(n)),
              (t.memoizedState = ri),
              e)
            : la(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Wm(e, t, o, r, a, l, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = nn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (s = nn(a, s)) : ((s = xn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? li(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ri),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = nn(s, { mode: "visible", children: r.children })),
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
function la(e, t) {
  return (
    (t = Os({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kl(e, t, n, r) {
  return (
    r !== null && Bi(r),
    Zn(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wm(e, t, n, r, l, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(P(422)))), kl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = Os({ mode: "visible", children: r.children }, l, 0, null)),
          (s = xn(s, l, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Zn(t, e.child, null, o),
          (t.child.memoizedState = li(o)),
          (t.memoizedState = ri),
          s);
  if (!(t.mode & 1)) return kl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(P(419))),
      (r = co(s, r, void 0)),
      kl(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), ze || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
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
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), _t(e, l), mt(r, e, l, -1)));
    }
    return (ca(), (r = co(Error(P(421)))), kl(e, t, o, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = th.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Be = Jt(l.nextSibling)),
      (Ve = t),
      (re = !0),
      (ft = null),
      e !== null &&
        ((Je[Ze++] = Ct),
        (Je[Ze++] = Tt),
        (Je[Ze++] = Nn),
        (Ct = e.id),
        (Tt = e.overflow),
        (Nn = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Xo(e.return, t, n));
}
function fo(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = l));
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((Le(e, t, r.children, n), (r = se.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
        else if (e.tag === 19) Su(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ee(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && ls(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, s));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ls(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        fo(t, !0, n, null, s);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zl(e, t) {
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
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = nn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Um(e, t, n) {
  switch (t.tag) {
    case 3:
      (zd(t), Jn());
      break;
    case 5:
      dd(t);
      break;
    case 1:
      Re(t.type) && Jl(t);
      break;
    case 4:
      Ki(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (ee(ts, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Id(e, t, n)
            : (ee(se, se.current & 1),
              (e = Ft(e, t, n)),
              e !== null ? e.sibling : null);
      ee(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Fd(e, t, n));
  }
  return Ft(e, t, n);
}
var Ad, si, Hd, Wd;
Ad = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
si = function () {};
Hd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), hn(kt.current));
    var s = null;
    switch (n) {
      case "input":
        ((l = Co(e, l)), (r = Co(e, r)), (s = []));
        break;
      case "select":
        ((l = ie({}, l, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((l = Do(e, l)), (r = Do(e, r)), (s = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kl);
    }
    Lo(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zr.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else (n || (s || (s = []), s.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (s = s || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (zr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && te("scroll", e),
                    s || a === u || (s = []))
                  : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Bm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ui(t), t.tag)) {
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
      return (Ce(t), null);
    case 1:
      return (Re(t.type) && Xl(), Ce(t), null);
    case 3:
      return (
        (r = t.stateNode),
        er(),
        ne(Ie),
        ne(De),
        Ji(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (pi(ft), (ft = null)))),
        si(e, t),
        Ce(t),
        null
      );
    case 5:
      Xi(t);
      var l = hn(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Hd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return (Ce(t), null);
        }
        if (((e = hn(kt.current)), Sl(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[St] = t), (r[Yr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (te("cancel", r), te("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jr.length; l++) te(jr[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (te("error", r), te("load", r));
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              (Da(r, s), te("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                te("invalid", r));
              break;
            case "textarea":
              (La(r, s), te("invalid", r));
          }
          (Lo(n, s), (l = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : zr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              (fl(r), Oa(r, s, !0));
              break;
            case "textarea":
              (fl(r), Ma(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Kl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[St] = t),
            (e[Yr] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Mo(n, r)), n)) {
              case "dialog":
                (te("cancel", e), te("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (te("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) te(jr[l], e);
                l = r;
                break;
              case "source":
                (te("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (te("error", e), te("load", e), (l = r));
                break;
              case "details":
                (te("toggle", e), (l = r));
                break;
              case "input":
                (Da(e, r), (l = Co(e, r)), te("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ie({}, r, { value: void 0 })),
                  te("invalid", e));
                break;
              case "textarea":
                (La(e, r), (l = Do(e, r)), te("invalid", e));
                break;
              default:
                l = r;
            }
            (Lo(n, l), (a = l));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? xc(e, u)
                  : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && yc(e, u))
                    : s === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Ir(e, u)
                        : typeof u == "number" && Ir(e, "" + u)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (zr.hasOwnProperty(s)
                          ? u != null && s === "onScroll" && te("scroll", e)
                          : u != null && Ti(e, s, u, o));
              }
            switch (n) {
              case "input":
                (fl(e), Oa(e, r, !1));
                break;
              case "textarea":
                (fl(e), Ma(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Bn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kl);
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
      return (Ce(t), null);
    case 6:
      if (e && t.stateNode != null) Wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = hn(Gr.current)), hn(kt.current), Sl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (s = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r));
      }
      return (Ce(t), null);
    case 13:
      if (
        (ne(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Be !== null && t.mode & 1 && !(t.flags & 128))
          (od(), Jn(), (t.flags |= 98560), (s = !1));
        else if (((s = Sl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(P(317));
            s[St] = t;
          } else
            (Jn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ce(t), (s = !1));
        } else (ft !== null && (pi(ft), (ft = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? ge === 0 && (ge = 3) : ca())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        er(),
        si(e, t),
        e === null && Vr(t.stateNode.containerInfo),
        Ce(t),
        null
      );
    case 10:
      return (Yi(t.type._context), Ce(t), null);
    case 17:
      return (Re(t.type) && Xl(), Ce(t), null);
    case 19:
      if ((ne(se), (s = t.memoizedState), s === null)) return (Ce(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) hr(s, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ls(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    hr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ee(se, (se.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            de() > nr &&
            ((t.flags |= 128), (r = !0), hr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ls(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !re)
            )
              return (Ce(t), null);
          } else
            2 * de() - s.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = de()),
          (t.sibling = null),
          (n = se.current),
          ee(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Vm(e, t) {
  switch ((Ui(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && Xl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        ne(Ie),
        ne(De),
        Ji(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Xi(t), null);
    case 13:
      if (
        (ne(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Jn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ne(se), null);
    case 4:
      return (er(), null);
    case 10:
      return (Yi(t.type._context), null);
    case 22:
    case 23:
      return (ua(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  Te = !1,
  Qm = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function oi(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var Nu = !1;
function Ym(e, t) {
  if (((Uo = Yl), (e = Yc()), Hi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            c = 0,
            p = 0,
            m = e,
            y = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = o + l),
                m !== s || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (x = m.firstChild) !== null;
            )
              ((y = m), (m = x));
            for (;;) {
              if (m === e) break t;
              if (
                (y === n && ++c === l && (a = o),
                y === s && ++p === r && (u = o),
                (x = m.nextSibling) !== null)
              )
                break;
              ((m = y), (y = m.parentNode));
            }
            m = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bo = { focusedElem: e, selectionRange: n }, Yl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (M = e));
    else
      for (; M !== null; ) {
        t = M;
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
                  var v = w.memoizedProps,
                    k = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ct(t.type, v),
                      k,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (j) {
          ue(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (M = e));
          break;
        }
        M = t.return;
      }
  return ((w = Nu), (Nu = !1), w);
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        ((l.destroy = void 0), s !== void 0 && oi(t, n, s));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ps(e, t) {
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
function ii(e) {
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
function Ud(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ud(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[Yr], delete t[Yo], delete t[Pm], delete t[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ai(e, t, n), e = e.sibling; e !== null; )
      (ai(e, t, n), (e = e.sibling));
}
function ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ui(e, t, n), e = e.sibling; e !== null; )
      (ui(e, t, n), (e = e.sibling));
}
var we = null,
  dt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) (Vd(e, t, n), (n = n.sibling));
}
function Vd(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(Ss, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Wn(n, t);
    case 6:
      var r = we,
        l = dt;
      ((we = null),
        It(e, t, n),
        (we = r),
        (dt = l),
        we !== null &&
          (dt
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode)));
      break;
    case 18:
      we !== null &&
        (dt
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Wr(e))
          : lo(we, n.stateNode));
      break;
    case 4:
      ((r = we),
        (l = dt),
        (we = n.stateNode.containerInfo),
        (dt = !0),
        It(e, t, n),
        (we = r),
        (dt = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && oi(n, t, o),
            (l = l.next));
        } while (l !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ue(n, t, a);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), It(e, t, n), (Te = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Qm()),
      t.forEach(function (r) {
        var l = nh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((we = a.stateNode), (dt = !1));
              break e;
            case 3:
              ((we = a.stateNode.containerInfo), (dt = !0));
              break e;
            case 4:
              ((we = a.stateNode.containerInfo), (dt = !0));
              break e;
          }
          a = a.return;
        }
        if (we === null) throw Error(P(160));
        (Vd(s, o, l), (we = null), (dt = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        ue(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Qd(t, e), (t = t.sibling));
}
function Qd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          (Lr(3, e, e.return), Ps(3, e));
        } catch (v) {
          ue(e, e.return, v);
        }
        try {
          Lr(5, e, e.return);
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 1:
      (ut(t, e), vt(e), r & 512 && n !== null && Wn(n, n.return));
      break;
    case 5:
      if (
        (ut(t, e),
        vt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ir(l, "");
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && mc(l, s),
              Mo(a, o));
            var c = Mo(a, s);
            for (o = 0; o < u.length; o += 2) {
              var p = u[o],
                m = u[o + 1];
              p === "style"
                ? xc(l, m)
                : p === "dangerouslySetInnerHTML"
                  ? yc(l, m)
                  : p === "children"
                    ? Ir(l, m)
                    : Ti(l, p, m, c);
            }
            switch (a) {
              case "input":
                To(l, s);
                break;
              case "textarea":
                hc(l, s);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? Bn(l, !!s.multiple, x, !1)
                  : y !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Bn(l, !!s.multiple, s.defaultValue, !0)
                      : Bn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[Yr] = s;
          } catch (v) {
            ue(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        ((l = e.stateNode), (s = e.memoizedProps));
        try {
          l.nodeValue = s;
        } catch (v) {
          ue(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (v) {
          ue(e, e.return, v);
        }
      break;
    case 4:
      (ut(t, e), vt(e));
      break;
    case 13:
      (ut(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ia = de())),
        r & 4 && ju(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (c = Te) || p), ut(t, e), (Te = c)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (M = e, p = e.child; p !== null; ) {
            for (m = M = p; M !== null; ) {
              switch (((y = M), (x = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, y, y.return);
                  break;
                case 1:
                  Wn(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = y), (n = y.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (v) {
                      ue(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Wn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Eu(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = y), (M = x)) : Eu(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                ((l = m.stateNode),
                  c
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = vc("display", o))));
              } catch (v) {
                ue(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (v) {
                ue(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (p === m && (p = null), (m = m.return));
          }
          (p === m && (p = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (ut(t, e), vt(e), r & 4 && ju(e));
      break;
    case 21:
      break;
    default:
      (ut(t, e), vt(e));
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ir(l, ""), (r.flags &= -33));
          var s = ku(e);
          ui(e, s, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ku(e);
          ai(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      ue(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qm(e, t, n) {
  ((M = e), Yd(e));
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      s = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Te;
        a = jl;
        var c = Te;
        if (((jl = o), (Te = u) && !c))
          for (M = l; M !== null; )
            ((o = M),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Cu(l)
                : u !== null
                  ? ((u.return = o), (M = u))
                  : Cu(l));
        for (; s !== null; ) ((M = s), Yd(s), (s = s.sibling));
        ((M = l), (jl = a), (Te = c));
      }
      bu(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (M = s)) : bu(e);
  }
}
function bu(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Ps(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && uu(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uu(t, o, n);
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
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Wr(m);
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
              throw Error(P(163));
          }
        Te || (t.flags & 512 && ii(t));
      } catch (y) {
        ue(t, t.return, y);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Eu(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (M = n));
      break;
    }
    M = t.return;
  }
}
function Cu(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (u) {
            ue(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ue(t, l, u);
            }
          }
          var s = t.return;
          try {
            ii(t);
          } catch (u) {
            ue(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ii(t);
          } catch (u) {
            ue(t, o, u);
          }
      }
    } catch (u) {
      ue(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (M = a));
      break;
    }
    M = t.return;
  }
}
var Gm = Math.ceil,
  is = $t.ReactCurrentDispatcher,
  sa = $t.ReactCurrentOwner,
  nt = $t.ReactCurrentBatchConfig,
  B = 0,
  xe = null,
  fe = null,
  Se = 0,
  We = 0,
  Un = on(0),
  ge = 0,
  Zr = null,
  jn = 0,
  Ds = 0,
  oa = 0,
  Mr = null,
  $e = null,
  ia = 0,
  nr = 1 / 0,
  bt = null,
  as = !1,
  ci = null,
  en = null,
  bl = !1,
  Yt = null,
  us = 0,
  _r = 0,
  di = null,
  Il = -1,
  Rl = 0;
function Me() {
  return B & 6 ? de() : Il !== -1 ? Il : (Il = de());
}
function tn(e) {
  return e.mode & 1
    ? B & 2 && Se !== 0
      ? Se & -Se
      : Lm.transition !== null
        ? (Rl === 0 && (Rl = Oc()), Rl)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ic(e.type))),
          e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (di = null), Error(P(185)));
  (rl(e, n, r),
    (!(B & 2) || e !== xe) &&
      (e === xe && (!(B & 2) && (Ds |= n), ge === 4 && Bt(e, Se)),
      Ae(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((nr = de() + 500), Es && an())));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = Ql(e, e === xe ? Se : 0);
  if (r === 0)
    (n !== null && $a(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $a(n), t === 1))
      (e.tag === 0 ? Om(Tu.bind(null, e)) : rd(Tu.bind(null, e)),
        Cm(function () {
          !(B & 6) && an();
        }),
        (n = null));
    else {
      switch (Lc(r)) {
        case 1:
          n = Mi;
          break;
        case 4:
          n = Pc;
          break;
        case 16:
          n = Vl;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Vl;
      }
      n = tf(n, qd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function qd(e, t) {
  if (((Il = -1), (Rl = 0), B & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cs(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var s = Kd();
    (xe !== e || Se !== t) && ((bt = null), (nr = de() + 500), vn(e, t));
    do
      try {
        Jm();
        break;
      } catch (a) {
        Gd(e, a);
      }
    while (!0);
    (Qi(),
      (is.current = s),
      (B = l),
      fe !== null ? (t = 0) : ((xe = null), (Se = 0), (t = ge)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Io(e)), l !== 0 && ((r = l), (t = fi(e, l)))), t === 1)
    )
      throw ((n = Zr), vn(e, 0), Bt(e, r), Ae(e, de()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Km(l) &&
          ((t = cs(e, r)),
          t === 2 && ((s = Io(e)), s !== 0 && ((r = s), (t = fi(e, s)))),
          t === 1))
      )
        throw ((n = Zr), vn(e, 0), Bt(e, r), Ae(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          cn(e, $e, bt);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = ia + 500 - de()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (Me(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Qo(cn.bind(null, e, $e, bt), t);
            break;
          }
          cn(e, $e, bt);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - pt(r);
            ((s = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~s));
          }
          if (
            ((r = l),
            (r = de() - r),
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
                          : 1960 * Gm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qo(cn.bind(null, e, $e, bt), r);
            break;
          }
          cn(e, $e, bt);
          break;
        case 5:
          cn(e, $e, bt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return (Ae(e, de()), e.callbackNode === n ? qd.bind(null, e) : null);
}
function fi(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = cs(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && pi(t)),
    e
  );
}
function pi(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function Km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Bt(e, t) {
  for (
    t &= ~oa,
      t &= ~Ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Tu(e) {
  if (B & 6) throw Error(P(327));
  Gn();
  var t = Ql(e, 0);
  if (!(t & 1)) return (Ae(e, de()), null);
  var n = cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Io(e);
    r !== 0 && ((t = r), (n = fi(e, r)));
  }
  if (n === 1) throw ((n = Zr), vn(e, 0), Bt(e, t), Ae(e, de()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, $e, bt),
    Ae(e, de()),
    null
  );
}
function aa(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    ((B = n), B === 0 && ((nr = de() + 500), Es && an()));
  }
}
function bn(e) {
  Yt !== null && Yt.tag === 0 && !(B & 6) && Gn();
  var t = B;
  B |= 1;
  var n = nt.transition,
    r = K;
  try {
    if (((nt.transition = null), (K = 1), e)) return e();
  } finally {
    ((K = r), (nt.transition = n), (B = t), !(B & 6) && an());
  }
}
function ua() {
  ((We = Un.current), ne(Un));
}
function vn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Em(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch ((Ui(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Xl());
          break;
        case 3:
          (er(), ne(Ie), ne(De), Ji());
          break;
        case 5:
          Xi(r);
          break;
        case 4:
          er();
          break;
        case 13:
          ne(se);
          break;
        case 19:
          ne(se);
          break;
        case 10:
          Yi(r.type._context);
          break;
        case 22:
        case 23:
          ua();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (fe = e = nn(e.current, null)),
    (Se = We = t),
    (ge = 0),
    (Zr = null),
    (oa = Ds = jn = 0),
    ($e = Mr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = l), (r.next = o));
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function Gd(e, t) {
  do {
    var n = fe;
    try {
      if ((Qi(), (Fl.current = os), ss)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        ss = !1;
      }
      if (
        ((kn = 0),
        (ve = he = oe = null),
        (Or = !1),
        (Kr = 0),
        (sa.current = null),
        n === null || n.return === null)
      ) {
        ((ge = 1), (Zr = t), (fe = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = p.alternate;
            y
              ? ((p.updateQueue = y.updateQueue),
                (p.memoizedState = y.memoizedState),
                (p.lanes = y.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = hu(o);
          if (x !== null) {
            ((x.flags &= -257),
              gu(x, o, a, s, t),
              x.mode & 1 && mu(s, c, t),
              (t = x),
              (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              (v.add(u), (t.updateQueue = v));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (mu(s, c, t), ca());
              break e;
            }
            u = Error(P(426));
          }
        } else if (re && a.mode & 1) {
          var k = hu(o);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              gu(k, o, a, s, t),
              Bi(tr(u, a)));
            break e;
          }
        }
        ((s = u = tr(u, a)),
          ge !== 4 && (ge = 2),
          Mr === null ? (Mr = [s]) : Mr.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = Ld(s, u, t);
              au(s, f);
              break e;
            case 1:
              a = u;
              var d = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (en === null || !en.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var j = Md(s, a, t);
                au(s, j);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Jd(n);
    } catch (S) {
      ((t = S), fe === n && n !== null && (fe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Kd() {
  var e = is.current;
  return ((is.current = os), e === null ? os : e);
}
function ca() {
  ((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    xe === null || (!(jn & 268435455) && !(Ds & 268435455)) || Bt(xe, Se));
}
function cs(e, t) {
  var n = B;
  B |= 2;
  var r = Kd();
  (xe !== e || Se !== t) && ((bt = null), vn(e, t));
  do
    try {
      Xm();
      break;
    } catch (l) {
      Gd(e, l);
    }
  while (!0);
  if ((Qi(), (B = n), (is.current = r), fe !== null)) throw Error(P(261));
  return ((xe = null), (Se = 0), ge);
}
function Xm() {
  for (; fe !== null; ) Xd(fe);
}
function Jm() {
  for (; fe !== null && !kp(); ) Xd(fe);
}
function Xd(e) {
  var t = ef(e.alternate, e, We);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Jd(e) : (fe = t),
    (sa.current = null));
}
function Jd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vm(n, t)), n !== null)) {
        ((n.flags &= 32767), (fe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ge = 6), (fe = null));
        return;
      }
    } else if (((n = Bm(n, t, We)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function cn(e, t, n) {
  var r = K,
    l = nt.transition;
  try {
    ((nt.transition = null), (K = 1), Zm(e, t, n, r));
  } finally {
    ((nt.transition = l), (K = r));
  }
  return null;
}
function Zm(e, t, n, r) {
  do Gn();
  while (Yt !== null);
  if (B & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Mp(e, s),
    e === xe && ((fe = xe = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bl ||
      ((bl = !0),
      tf(Vl, function () {
        return (Gn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = nt.transition), (nt.transition = null));
    var o = K;
    K = 1;
    var a = B;
    ((B |= 4),
      (sa.current = null),
      Ym(e, n),
      Qd(n, e),
      xm(Bo),
      (Yl = !!Uo),
      (Bo = Uo = null),
      (e.current = n),
      qm(n),
      jp(),
      (B = a),
      (K = o),
      (nt.transition = s));
  } else e.current = n;
  if (
    (bl && ((bl = !1), (Yt = e), (us = l)),
    (s = e.pendingLanes),
    s === 0 && (en = null),
    Cp(n.stateNode),
    Ae(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (as) throw ((as = !1), (e = ci), (ci = null), e);
  return (
    us & 1 && e.tag !== 0 && Gn(),
    (s = e.pendingLanes),
    s & 1 ? (e === di ? _r++ : ((_r = 0), (di = e))) : (_r = 0),
    an(),
    null
  );
}
function Gn() {
  if (Yt !== null) {
    var e = Lc(us),
      t = nt.transition,
      n = K;
    try {
      if (((nt.transition = null), (K = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (us = 0), B & 6)) throw Error(P(331));
        var l = B;
        for (B |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (M = c; M !== null; ) {
                  var p = M;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, p, s);
                  }
                  var m = p.child;
                  if (m !== null) ((m.return = p), (M = m));
                  else
                    for (; M !== null; ) {
                      p = M;
                      var y = p.sibling,
                        x = p.return;
                      if ((Ud(p), p === c)) {
                        M = null;
                        break;
                      }
                      if (y !== null) {
                        ((y.return = x), (M = y));
                        break;
                      }
                      M = x;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var k = v.sibling;
                    ((v.sibling = null), (v = k));
                  } while (v !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (M = o));
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                ((f.return = s.return), (M = f));
                break e;
              }
              M = s.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          o = M;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (M = g));
          else
            e: for (o = d; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(9, a);
                  }
                } catch (S) {
                  ue(a, a.return, S);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var j = a.sibling;
              if (j !== null) {
                ((j.return = a.return), (M = j));
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((B = l), an(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(Ss, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((K = n), (nt.transition = t));
    }
  }
  return !1;
}
function Pu(e, t, n) {
  ((t = tr(n, t)),
    (t = Ld(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = Me()),
    e !== null && (rl(e, 1, t), Ae(e, t)));
}
function ue(e, t, n) {
  if (e.tag === 3) Pu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (en === null || !en.has(r)))
        ) {
          ((e = tr(n, e)),
            (e = Md(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = Me()),
            t !== null && (rl(t, 1, e), Ae(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function eh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Se & n) === n &&
      (ge === 4 || (ge === 3 && (Se & 130023424) === Se && 500 > de() - ia)
        ? vn(e, 0)
        : (oa |= n)),
    Ae(e, t));
}
function Zd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hl), (hl <<= 1), !(hl & 130023424) && (hl = 4194304))
      : (t = 1));
  var n = Me();
  ((e = _t(e, t)), e !== null && (rl(e, t, n), Ae(e, n)));
}
function th(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Zd(e, n));
}
function nh(e, t) {
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
      throw Error(P(314));
  }
  (r !== null && r.delete(t), Zd(e, n));
}
var ef;
ef = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ze = !1), Um(e, t, n));
      ze = !!(e.flags & 131072);
    }
  else ((ze = !1), re && t.flags & 1048576 && ld(t, es, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (zl(e, t), (e = t.pendingProps));
      var l = Xn(t, De.current);
      (qn(t, n), (l = ea(null, t, r, e, l, n)));
      var s = ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((s = !0), Jl(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Gi(t),
            (l.updater = Ts),
            (t.stateNode = l),
            (l._reactInternals = t),
            Zo(t, r, e, n),
            (t = ni(null, t, r, !0, s, n)))
          : ((t.tag = 0), re && s && Wi(t), Le(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = lh(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ti(null, t, r, e, n);
            break e;
          case 1:
            t = xu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = vu(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ti(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        xu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((zd(t), e === null)) throw Error(P(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          cd(e, t),
          rs(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((l = tr(Error(P(423)), t)), (t = wu(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = tr(Error(P(424)), t)), (t = wu(e, t, r, n, l)));
            break e;
          } else
            for (
              Be = Jt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                re = !0,
                ft = null,
                n = ad(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Jn(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && Ko(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vo(r, l) ? (o = null) : s !== null && Vo(r, s) && (t.flags |= 32),
        $d(e, t),
        Le(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Ko(t), null);
    case 13:
      return Id(e, t, n);
    case 4:
      return (
        Ki(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        yu(e, t, r, l, n)
      );
    case 7:
      return (Le(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Le(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Le(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (o = l.value),
          ee(ts, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ht(s.value, o)) {
            if (s.children === l.children && !Ie.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ((u = Pt(-1, n & -n)), (u.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Xo(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(P(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Xo(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (Le(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        vu(e, t, r, l, n)
      );
    case 15:
      return _d(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        zl(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), Jl(t)) : (e = !1),
        qn(t, n),
        Od(t, r, l),
        Zo(t, r, l, n),
        ni(null, t, r, !0, e, n)
      );
    case 19:
      return Rd(e, t, n);
    case 22:
      return Fd(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function tf(e, t) {
  return Tc(e, t);
}
function rh(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function et(e, t, n, r) {
  return new rh(e, t, n, r);
}
function da(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function lh(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Di)) return 11;
    if (e === Oi) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
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
function Al(e, t, n, r, l, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) da(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mn:
        return xn(n.children, l, s, t);
      case Pi:
        ((o = 8), (l |= 8));
        break;
      case ko:
        return (
          (e = et(12, n, t, l | 2)),
          (e.elementType = ko),
          (e.lanes = s),
          e
        );
      case jo:
        return ((e = et(13, n, t, l)), (e.elementType = jo), (e.lanes = s), e);
      case bo:
        return ((e = et(19, n, t, l)), (e.elementType = bo), (e.lanes = s), e);
      case dc:
        return Os(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uc:
              o = 10;
              break e;
            case cc:
              o = 9;
              break e;
            case Di:
              o = 11;
              break e;
            case Oi:
              o = 14;
              break e;
            case Ht:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(o, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function xn(e, t, n, r) {
  return ((e = et(7, e, r, t)), (e.lanes = n), e);
}
function Os(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = dc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return ((e = et(6, e, null, t)), (e.lanes = n), e);
}
function mo(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sh(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ys(0)),
    (this.expirationTimes = Ys(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ys(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function fa(e, t, n, r, l, s, o, a, u) {
  return (
    (e = new sh(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = et(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gi(s),
    e
  );
}
function oh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nf(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return nd(e, n, t);
  }
  return t;
}
function rf(e, t, n, r, l, s, o, a, u) {
  return (
    (e = fa(n, r, !0, e, l, s, o, a, u)),
    (e.context = nf(null)),
    (n = e.current),
    (r = Me()),
    (l = tn(n)),
    (s = Pt(r, l)),
    (s.callback = t ?? null),
    Zt(n, s, l),
    (e.current.lanes = l),
    rl(e, l, r),
    Ae(e, r),
    e
  );
}
function Ls(e, t, n, r) {
  var l = t.current,
    s = Me(),
    o = tn(l);
  return (
    (n = nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, o)),
    e !== null && (mt(e, l, o, s), _l(e, l, o)),
    o
  );
}
function ds(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Du(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  (Du(e, t), (e = e.alternate) && Du(e, t));
}
function ih() {
  return null;
}
var lf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Ms.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ls(e, t, null, null);
};
Ms.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (bn(function () {
      Ls(null, e, null, null);
    }),
      (t[Mt] = null));
  }
};
function Ms(e) {
  this._internalRoot = e;
}
Ms.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    (Ut.splice(n, 0, e), n === 0 && zc(e));
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _s(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ou() {}
function ah(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ds(o);
        s.call(c);
      };
    }
    var o = rf(t, r, e, 0, null, !1, !1, "", Ou);
    return (
      (e._reactRootContainer = o),
      (e[Mt] = o.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      bn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ds(u);
      a.call(c);
    };
  }
  var u = fa(e, 0, !1, null, null, !1, !1, "", Ou);
  return (
    (e._reactRootContainer = u),
    (e[Mt] = u.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    bn(function () {
      Ls(t, u, n, r);
    }),
    u
  );
}
function Fs(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = ds(o);
        a.call(u);
      };
    }
    Ls(t, o, e, l);
  } else o = ah(n, t, e, l, r);
  return ds(o);
}
Mc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 &&
          (_i(t, n | 1), Ae(t, de()), !(B & 6) && ((nr = de() + 500), an()));
      }
      break;
    case 13:
      (bn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Me();
          mt(r, e, 1, l);
        }
      }),
        pa(e, 1));
  }
};
Fi = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
_c = function (e) {
  if (e.tag === 13) {
    var t = tn(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    pa(e, t);
  }
};
Fc = function () {
  return K;
};
$c = function (e, t) {
  var n = K;
  try {
    return ((K = e), t());
  } finally {
    K = n;
  }
};
Fo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((To(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = bs(r);
            if (!l) throw Error(P(90));
            (pc(r), To(r, l));
          }
        }
      }
      break;
    case "textarea":
      hc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Bn(e, !!n.multiple, t, !1));
  }
};
Nc = aa;
kc = bn;
var uh = { usingClientEntryPoint: !1, Events: [sl, zn, bs, wc, Sc, aa] },
  gr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ch = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
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
      return ((e = Ec(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || ih,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!El.isDisabled && El.supportsFiber)
    try {
      ((Ss = El.inject(ch)), (Nt = El));
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(P(200));
  return oh(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!ha(e)) throw Error(P(299));
  var n = !1,
    r = "",
    l = lf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return ((e = Ec(t)), (e = e === null ? null : e.stateNode), e);
};
Ye.flushSync = function (e) {
  return bn(e);
};
Ye.hydrate = function (e, t, n) {
  if (!_s(t)) throw Error(P(200));
  return Fs(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    o = lf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = rf(t, null, e, 1, n ?? null, l, !1, s, o)),
    (e[Mt] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Ms(t);
};
Ye.render = function (e, t, n) {
  if (!_s(t)) throw Error(P(200));
  return Fs(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!_s(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (bn(function () {
        Fs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Mt] = null));
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = aa;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_s(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Fs(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function sf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf);
    } catch (e) {
      console.error(e);
    }
}
(sf(), (sc.exports = Ye));
var $s = sc.exports,
  of,
  Lu = $s;
((of = Lu.createRoot), Lu.hydrateRoot);
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
function En(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const af = 6048e5,
  dh = 864e5;
let fh = {};
function zs() {
  return fh;
}
function el(e, t) {
  var a, u, c, p;
  const n = zs(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((p = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : p.weekStartsOn) ??
      0,
    l = gt(e),
    s = l.getDay(),
    o = (s < r ? 7 : 0) + s - r;
  return (l.setDate(l.getDate() - o), l.setHours(0, 0, 0, 0), l);
}
function fs(e) {
  return el(e, { weekStartsOn: 1 });
}
function uf(e) {
  const t = gt(e),
    n = t.getFullYear(),
    r = En(e, 0);
  (r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0));
  const l = fs(r),
    s = En(e, 0);
  (s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0));
  const o = fs(s);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
      ? n
      : n - 1;
}
function Mu(e) {
  const t = gt(e);
  return (t.setHours(0, 0, 0, 0), t);
}
function _u(e) {
  const t = gt(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return (n.setUTCFullYear(t.getFullYear()), +e - +n);
}
function ph(e, t) {
  const n = Mu(e),
    r = Mu(t),
    l = +n - _u(n),
    s = +r - _u(r);
  return Math.round((l - s) / dh);
}
function mh(e) {
  const t = uf(e),
    n = En(e, 0);
  return (n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), fs(n));
}
function hh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function gh(e) {
  if (!hh(e) && typeof e != "number") return !1;
  const t = gt(e);
  return !isNaN(Number(t));
}
function yh(e) {
  const t = gt(e),
    n = En(e, 0);
  return (n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n);
}
const vh = {
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
  xh = (e, t, n) => {
    let r;
    const l = vh[e];
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
function ho(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const wh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Sh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Nh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  kh = {
    date: ho({ formats: wh, defaultWidth: "full" }),
    time: ho({ formats: Sh, defaultWidth: "full" }),
    dateTime: ho({ formats: Nh, defaultWidth: "full" }),
  },
  jh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  bh = (e, t, n, r) => jh[e];
function yr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : o;
      l = e.formattingValues[a] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[a] || e.values[o];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[s];
  };
}
const Eh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Ch = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Th = {
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
  Ph = {
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
  Dh = {
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
  Oh = {
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
  Lh = (e, t) => {
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
  Mh = {
    ordinalNumber: Lh,
    era: yr({ values: Eh, defaultWidth: "wide" }),
    quarter: yr({
      values: Ch,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: yr({ values: Th, defaultWidth: "wide" }),
    day: yr({ values: Ph, defaultWidth: "wide" }),
    dayPeriod: yr({
      values: Dh,
      defaultWidth: "wide",
      formattingValues: Oh,
      defaultFormattingWidth: "wide",
    }),
  };
function vr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      s = t.match(l);
    if (!s) return null;
    const o = s[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(a) ? Fh(a, (m) => m.test(o)) : _h(a, (m) => m.test(o));
    let c;
    ((c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c));
    const p = t.slice(o.length);
    return { value: c, rest: p };
  };
}
function _h(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Fh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function $h(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      s = t.match(e.parsePattern);
    if (!s) return null;
    let o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const a = t.slice(l.length);
    return { value: o, rest: a };
  };
}
const zh = /^(\d+)(th|st|nd|rd)?/i,
  Ih = /\d+/i,
  Rh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Ah = { any: [/^b/i, /^(a|c)/i] },
  Hh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Wh = { any: [/1/i, /2/i, /3/i, /4/i] },
  Uh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Bh = {
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
  Vh = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Qh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Yh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  qh = {
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
  Gh = {
    ordinalNumber: $h({
      matchPattern: zh,
      parsePattern: Ih,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: vr({
      matchPatterns: Rh,
      defaultMatchWidth: "wide",
      parsePatterns: Ah,
      defaultParseWidth: "any",
    }),
    quarter: vr({
      matchPatterns: Hh,
      defaultMatchWidth: "wide",
      parsePatterns: Wh,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: vr({
      matchPatterns: Uh,
      defaultMatchWidth: "wide",
      parsePatterns: Bh,
      defaultParseWidth: "any",
    }),
    day: vr({
      matchPatterns: Vh,
      defaultMatchWidth: "wide",
      parsePatterns: Qh,
      defaultParseWidth: "any",
    }),
    dayPeriod: vr({
      matchPatterns: Yh,
      defaultMatchWidth: "any",
      parsePatterns: qh,
      defaultParseWidth: "any",
    }),
  },
  Kh = {
    code: "en-US",
    formatDistance: xh,
    formatLong: kh,
    formatRelative: bh,
    localize: Mh,
    match: Gh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Xh(e) {
  const t = gt(e);
  return ph(t, yh(t)) + 1;
}
function Jh(e) {
  const t = gt(e),
    n = +fs(t) - +mh(t);
  return Math.round(n / af) + 1;
}
function cf(e, t) {
  var p, m, y, x;
  const n = gt(e),
    r = n.getFullYear(),
    l = zs(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) ==
      null
        ? void 0
        : m.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((x = (y = l.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    o = En(e, 0);
  (o.setFullYear(r + 1, 0, s), o.setHours(0, 0, 0, 0));
  const a = el(o, t),
    u = En(e, 0);
  (u.setFullYear(r, 0, s), u.setHours(0, 0, 0, 0));
  const c = el(u, t);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
      ? r
      : r - 1;
}
function Zh(e, t) {
  var a, u, c, p;
  const n = zs(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((p = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    l = cf(e, t),
    s = En(e, 0);
  return (s.setFullYear(l, 0, r), s.setHours(0, 0, 0, 0), el(s, t));
}
function e0(e, t) {
  const n = gt(e),
    r = +el(n, t) - +Zh(n, t);
  return Math.round(r / af) + 1;
}
function G(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return G(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : G(n + 1, 2);
    },
    d(e, t) {
      return G(e.getDate(), t.length);
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
      return G(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return G(e.getHours(), t.length);
    },
    m(e, t) {
      return G(e.getMinutes(), t.length);
    },
    s(e, t) {
      return G(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return G(l, t.length);
    },
  },
  On = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Fu = {
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
      return Rt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = cf(e, r),
        s = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const o = s % 100;
        return G(o, 2);
      }
      return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : G(s, t.length);
    },
    R: function (e, t) {
      const n = uf(e);
      return G(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return G(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return G(r, 2);
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
          return G(r, 2);
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
          return Rt.M(e, t);
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
          return G(r + 1, 2);
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
      const l = e0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : G(l, t.length);
    },
    I: function (e, t, n) {
      const r = Jh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : G(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Rt.d(e, t);
    },
    D: function (e, t, n) {
      const r = Xh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : G(r, t.length);
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
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(s);
        case "ee":
          return G(s, 2);
        case "eo":
          return n.ordinalNumber(s, { unit: "day" });
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
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(s);
        case "cc":
          return G(s, t.length);
        case "co":
          return n.ordinalNumber(s, { unit: "day" });
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
          return G(l, t.length);
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
          ? (l = On.noon)
          : r === 0
            ? (l = On.midnight)
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
          ? (l = On.evening)
          : r >= 12
            ? (l = On.afternoon)
            : r >= 4
              ? (l = On.morning)
              : (l = On.night),
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
        return (r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" }));
      }
      return Rt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Rt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : G(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Rt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Rt.s(e, t);
    },
    S: function (e, t) {
      return Rt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return zu(r);
        case "XXXX":
        case "XX":
          return dn(r);
        case "XXXXX":
        case "XXX":
        default:
          return dn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return zu(r);
        case "xxxx":
        case "xx":
          return dn(r);
        case "xxxxx":
        case "xxx":
        default:
          return dn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + $u(r, ":");
        case "OOOO":
        default:
          return "GMT" + dn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + $u(r, ":");
        case "zzzz":
        default:
          return "GMT" + dn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return G(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return G(r, t.length);
    },
  };
function $u(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    s = r % 60;
  return s === 0 ? n + String(l) : n + String(l) + t + G(s, 2);
}
function zu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + G(Math.abs(e) / 60, 2) : dn(e, t);
}
function dn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = G(Math.trunc(r / 60), 2),
    s = G(r % 60, 2);
  return n + l + t + s;
}
const Iu = (e, t) => {
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
  df = (e, t) => {
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
  t0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Iu(e, t);
    let s;
    switch (r) {
      case "P":
        s = t.dateTime({ width: "short" });
        break;
      case "PP":
        s = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = t.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", Iu(r, t)).replace("{{time}}", df(l, t));
  },
  n0 = { p: df, P: t0 },
  r0 = /^D+$/,
  l0 = /^Y+$/,
  s0 = ["D", "DD", "YY", "YYYY"];
function o0(e) {
  return r0.test(e);
}
function i0(e) {
  return l0.test(e);
}
function a0(e, t, n) {
  const r = u0(e, t, n);
  if ((console.warn(r), s0.includes(e))) throw new RangeError(r);
}
function u0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const c0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  d0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  f0 = /^'([^]*?)'?$/,
  p0 = /''/g,
  m0 = /[a-zA-Z]/;
function me(e, t, n) {
  var p, m, y, x;
  const r = zs(),
    l = r.locale ?? Kh,
    s =
      r.firstWeekContainsDate ??
      ((m = (p = r.locale) == null ? void 0 : p.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    o =
      r.weekStartsOn ??
      ((x = (y = r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    a = gt(e);
  if (!gh(a)) throw new RangeError("Invalid time value");
  let u = t
    .match(d0)
    .map((w) => {
      const v = w[0];
      if (v === "p" || v === "P") {
        const k = n0[v];
        return k(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(c0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const v = w[0];
      if (v === "'") return { isToken: !1, value: h0(w) };
      if (Fu[v]) return { isToken: !0, value: w };
      if (v.match(m0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            v +
            "`",
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(a, u));
  const c = { firstWeekContainsDate: s, weekStartsOn: o, locale: l };
  return u
    .map((w) => {
      if (!w.isToken) return w.value;
      const v = w.value;
      (i0(v) || o0(v)) && a0(v, t, String(e));
      const k = Fu[v[0]];
      return k(a, v, l.localize, c);
    })
    .join("");
}
function h0(e) {
  const t = e.match(f0);
  return t ? t[1].replace(p0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var g0 = {
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
 */ const y0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  pe = (e, t) => {
    const n = h.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: u,
          ...c
        },
        p,
      ) =>
        h.createElement(
          "svg",
          {
            ref: p,
            ...g0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${y0(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([m, y]) => h.createElement(m, y)),
            ...(Array.isArray(u) ? u : [u]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = pe("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ps = pe("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mi = pe("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v0 = pe("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x0 = pe("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  [
    "path",
    {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
      key: "1jnkn4",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = pe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = pe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ff = pe("FileSpreadsheet", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = pe("Globe", [
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
 */ const ms = pe("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S0 = pe("Layers", [
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
 */ const N0 = pe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k0 = pe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wt = pe("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay",
    },
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pf = pe("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mf = pe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = pe("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = pe("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uu = pe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rr = pe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var j0 = Object.defineProperty,
  b0 = (e, t, n) =>
    t in e
      ? j0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  go = (e, t, n) => (b0(e, typeof t != "symbol" ? t + "" : t, n), n);
let E0 = class {
    constructor() {
      (go(this, "current", this.detect()),
        go(this, "handoffState", "pending"),
        go(this, "currentId", 0));
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
  Dt = new E0(),
  st = (e, t) => {
    Dt.isServer ? h.useEffect(e, t) : h.useLayoutEffect(e, t);
  };
function Ot(e) {
  let t = h.useRef(e);
  return (
    st(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let le = function (e) {
  let t = Ot(e);
  return R.useCallback((...n) => t.current(...n), [t]);
};
function Is(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function Pn() {
  let e = [],
    t = {
      addEventListener(n, r, l, s) {
        return (
          n.addEventListener(r, l, s),
          t.add(() => n.removeEventListener(r, l, s))
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
          Is(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let s = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: s });
          })
        );
      },
      group(n) {
        let r = Pn();
        return (n(r), this.add(() => r.dispose()));
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
function ga() {
  let [e] = h.useState(Pn);
  return (h.useEffect(() => () => e.dispose(), [e]), e);
}
function C0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in $r
    ? ((t) => t.useSyncExternalStore)($r)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function ir() {
  let e = C0(),
    [t, n] = h.useState(Dt.isHandoffComplete);
  return (
    t && Dt.isHandoffComplete === !1 && n(!1),
    h.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    h.useEffect(() => Dt.handoff(), []),
    e ? !1 : t
  );
}
var Bu;
let ar =
  (Bu = R.useId) != null
    ? Bu
    : function () {
        let e = ir(),
          [t, n] = R.useState(e ? () => Dt.nextId() : null);
        return (
          st(() => {
            t === null && n(Dt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Pe(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Pe), r);
}
function hf(e) {
  return Dt.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let hi = [
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
var fn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(fn || {}),
  gf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(gf || {}),
  T0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"),
    (e[(e.Next = 1)] = "Next"),
    e
  ))(T0 || {});
function P0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(hi)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var yf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"),
  (e[(e.Loose = 1)] = "Loose"),
  e
))(yf || {});
function D0(e, t = 0) {
  var n;
  return e === ((n = hf(e)) == null ? void 0 : n.body)
    ? !1
    : Pe(t, {
        0() {
          return e.matches(hi);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(hi)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var O0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"),
  (e[(e.Mouse = 1)] = "Mouse"),
  e
))(O0 || {});
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
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function wn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let L0 = ["textarea", "input"].join(",");
function M0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, L0)) !=
    null
    ? n
    : !1;
}
function _0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      s = t(r);
    if (l === null || s === null) return 0;
    let o = l.compareDocumentPosition(s);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function Hl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let s = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (n ? _0(e) : e) : P0(e);
  (l.length > 0 && o.length > 1 && (o = o.filter((x) => !l.includes(x))),
    (r = r ?? s.activeElement));
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    p = 0,
    m = o.length,
    y;
  do {
    if (p >= m || p + m <= 0) return 0;
    let x = u + p;
    if (t & 16) x = (x + m) % m;
    else {
      if (x < 0) return 3;
      if (x >= m) return 1;
    }
    ((y = o[x]), y == null || y.focus(c), (p += a));
  } while (y !== s.activeElement);
  return (t & 6 && M0(y) && y.select(), 2);
}
function vf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function F0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function $0() {
  return vf() || F0();
}
function Cl(e, t, n) {
  let r = Ot(t);
  h.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function xf(e, t, n) {
  let r = Ot(t);
  h.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function z0(e, t, n = !0) {
  let r = h.useRef(!1);
  h.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(o, a) {
    if (!r.current || o.defaultPrevented) return;
    let u = a(o);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function p(m) {
      return typeof m == "function"
        ? p(m())
        : Array.isArray(m) || m instanceof Set
          ? m
          : [m];
    })(e);
    for (let p of c) {
      if (p === null) continue;
      let m = p instanceof HTMLElement ? p : p.current;
      if (
        (m != null && m.contains(u)) ||
        (o.composed && o.composedPath().includes(m))
      )
        return;
    }
    return (
      !D0(u, yf.Loose) && u.tabIndex !== -1 && o.preventDefault(),
      t(o, u)
    );
  }
  let s = h.useRef(null);
  (Cl(
    "pointerdown",
    (o) => {
      var a, u;
      r.current &&
        (s.current =
          ((u = (a = o.composedPath) == null ? void 0 : a.call(o)) == null
            ? void 0
            : u[0]) || o.target);
    },
    !0,
  ),
    Cl(
      "mousedown",
      (o) => {
        var a, u;
        r.current &&
          (s.current =
            ((u = (a = o.composedPath) == null ? void 0 : a.call(o)) == null
              ? void 0
              : u[0]) || o.target);
      },
      !0,
    ),
    Cl(
      "click",
      (o) => {
        $0() || (s.current && (l(o, () => s.current), (s.current = null)));
      },
      !0,
    ),
    Cl(
      "touchend",
      (o) => l(o, () => (o.target instanceof HTMLElement ? o.target : null)),
      !0,
    ),
    xf(
      "blur",
      (o) =>
        l(o, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    ));
}
function il(...e) {
  return h.useMemo(() => hf(...e), [...e]);
}
let wf = Symbol();
function I0(e, t = !0) {
  return Object.assign(e, { [wf]: t });
}
function yt(...e) {
  let t = h.useRef(e);
  h.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = le((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[wf])) ? void 0 : n;
}
function ya(e, t) {
  let n = h.useRef([]),
    r = le(e);
  h.useEffect(() => {
    let l = [...n.current];
    for (let [s, o] of t.entries())
      if (n.current[s] !== o) {
        let a = r(t, l);
        return ((n.current = t), a);
      }
  }, [r, ...t]);
}
function hs(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var gs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(gs || {}),
  qt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"),
    (e[(e.Hidden = 1)] = "Hidden"),
    e
  ))(qt || {});
function ot({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: s = !0,
  name: o,
  mergeRefs: a,
}) {
  a = a ?? R0;
  let u = Sf(t, e);
  if (s) return Tl(u, n, r, o, a);
  let c = l ?? 0;
  if (c & 2) {
    let { static: p = !1, ...m } = u;
    if (p) return Tl(m, n, r, o, a);
  }
  if (c & 1) {
    let { unmount: p = !0, ...m } = u;
    return Pe(p ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Tl({ ...m, hidden: !0, style: { display: "none" } }, n, r, o, a);
      },
    });
  }
  return Tl(u, n, r, o, a);
}
function Tl(e, t = {}, n, r, l) {
  let {
      as: s = n,
      children: o,
      refName: a = "ref",
      ...u
    } = yo(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    p = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let m = {};
  if (t) {
    let y = !1,
      x = [];
    for (let [w, v] of Object.entries(t))
      (typeof v == "boolean" && (y = !0), v === !0 && x.push(w));
    y && (m["data-headlessui-state"] = x.join(" "));
  }
  if (s === h.Fragment && Object.keys(Vu(u)).length > 0) {
    if (!h.isValidElement(p) || (Array.isArray(p) && p.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((v) => `  - ${v}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((v) => `  - ${v}`).join(`
`),
        ].join(`
`),
      );
    let y = p.props,
      x =
        typeof (y == null ? void 0 : y.className) == "function"
          ? (...v) => hs(y == null ? void 0 : y.className(...v), u.className)
          : hs(y == null ? void 0 : y.className, u.className),
      w = x ? { className: x } : {};
    return h.cloneElement(
      p,
      Object.assign(
        {},
        Sf(p.props, Vu(yo(u, ["ref"]))),
        m,
        c,
        { ref: l(p.ref, c.ref) },
        w,
      ),
    );
  }
  return h.createElement(
    s,
    Object.assign(
      {},
      yo(u, ["ref"]),
      s !== h.Fragment && c,
      s !== h.Fragment && m,
    ),
    p,
  );
}
function R0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function Sf(...e) {
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
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...s) {
        let o = n[r];
        for (let a of o) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          a(l, ...s);
        }
      },
    });
  return t;
}
function Ge(e) {
  var t;
  return Object.assign(h.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Vu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function yo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let A0 = "div";
var ys = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ys || {});
function H0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    s = {
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
  return ot({
    ourProps: s,
    theirProps: l,
    slot: {},
    defaultTag: A0,
    name: "Hidden",
  });
}
let gi = Ge(H0),
  va = h.createContext(null);
va.displayName = "OpenClosedContext";
var Ue = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ue || {});
function xa() {
  return h.useContext(va);
}
function W0({ value: e, children: t }) {
  return R.createElement(va.Provider, { value: e }, t);
}
function U0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Vt = [];
U0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Vt[0] !== t.target &&
      (Vt.unshift(t.target),
      (Vt = Vt.filter((n) => n != null && n.isConnected)),
      Vt.splice(10));
  }
  (window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 }));
});
function B0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    (t instanceof HTMLLegendElement && (n = t), (t = t.parentElement));
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && V0(n) ? !1 : r;
}
function V0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Nf = ((e) => (
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
))(Nf || {});
function kf(e, t, n, r) {
  let l = Ot(n);
  h.useEffect(() => {
    e = e ?? window;
    function s(o) {
      l.current(o);
    }
    return (e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r));
  }, [e, t, r]);
}
function al() {
  let e = h.useRef(!1);
  return (
    st(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function jf(e) {
  let t = le(e),
    n = h.useRef(!1);
  h.useEffect(
    () => (
      (n.current = !1),
      () => {
        ((n.current = !0),
          Is(() => {
            n.current && t();
          }));
      }
    ),
    [t],
  );
}
var br = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"),
  (e[(e.Backwards = 1)] = "Backwards"),
  e
))(br || {});
function Q0() {
  let e = h.useRef(0);
  return (
    xf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function bf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Y0 = "div";
var Ef = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Ef || {});
function q0(e, t) {
  let n = h.useRef(null),
    r = yt(n, t),
    { initialFocus: l, containers: s, features: o = 30, ...a } = e;
  ir() || (o = 1);
  let u = il(n);
  X0({ ownerDocument: u }, !!(o & 16));
  let c = J0({ ownerDocument: u, container: n, initialFocus: l }, !!(o & 2));
  Z0(
    { ownerDocument: u, container: n, containers: s, previousActiveElement: c },
    !!(o & 8),
  );
  let p = Q0(),
    m = le((v) => {
      let k = n.current;
      k &&
        ((f) => f())(() => {
          Pe(p.current, {
            [br.Forwards]: () => {
              Hl(k, fn.First, { skipElements: [v.relatedTarget] });
            },
            [br.Backwards]: () => {
              Hl(k, fn.Last, { skipElements: [v.relatedTarget] });
            },
          });
        });
    }),
    y = ga(),
    x = h.useRef(!1),
    w = {
      ref: r,
      onKeyDown(v) {
        v.key == "Tab" &&
          ((x.current = !0),
          y.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(v) {
        let k = bf(s);
        n.current instanceof HTMLElement && k.add(n.current);
        let f = v.relatedTarget;
        f instanceof HTMLElement &&
          f.dataset.headlessuiFocusGuard !== "true" &&
          (Cf(k, f) ||
            (x.current
              ? Hl(
                  n.current,
                  Pe(p.current, {
                    [br.Forwards]: () => fn.Next,
                    [br.Backwards]: () => fn.Previous,
                  }) | fn.WrapAround,
                  { relativeTo: v.target },
                )
              : v.target instanceof HTMLElement && wn(v.target)));
      },
    };
  return R.createElement(
    R.Fragment,
    null,
    !!(o & 4) &&
      R.createElement(gi, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: ys.Focusable,
      }),
    ot({ ourProps: w, theirProps: a, defaultTag: Y0, name: "FocusTrap" }),
    !!(o & 4) &&
      R.createElement(gi, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: ys.Focusable,
      }),
  );
}
let G0 = Ge(q0),
  xr = Object.assign(G0, { features: Ef });
function K0(e = !0) {
  let t = h.useRef(Vt.slice());
  return (
    ya(
      ([n], [r]) => {
        (r === !0 &&
          n === !1 &&
          Is(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Vt.slice()));
      },
      [e, Vt, t],
    ),
    le(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function X0({ ownerDocument: e }, t) {
  let n = K0(t);
  (ya(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        wn(n()));
  }, [t]),
    jf(() => {
      t && wn(n());
    }));
}
function J0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = h.useRef(null),
    s = al();
  return (
    ya(() => {
      if (!r) return;
      let o = t.current;
      o &&
        Is(() => {
          if (!s.current) return;
          let a = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === a) {
              l.current = a;
              return;
            }
          } else if (o.contains(a)) {
            l.current = a;
            return;
          }
          (n != null && n.current
            ? wn(n.current)
            : Hl(o, fn.First) === gf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />",
              ),
            (l.current = e == null ? void 0 : e.activeElement));
        });
    }, [r]),
    l
  );
}
function Z0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l,
) {
  let s = al();
  kf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (o) => {
      if (!l || !s.current) return;
      let a = bf(n);
      t.current instanceof HTMLElement && a.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = o.target;
      c && c instanceof HTMLElement
        ? Cf(a, c)
          ? ((r.current = c), wn(c))
          : (o.preventDefault(), o.stopPropagation(), wn(u))
        : wn(r.current);
    },
    !0,
  );
}
function Cf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Tf = h.createContext(!1);
function eg() {
  return h.useContext(Tf);
}
function yi(e) {
  return R.createElement(Tf.Provider, { value: e.force }, e.children);
}
function tg(e) {
  let t = eg(),
    n = h.useContext(Pf),
    r = il(e),
    [l, s] = h.useState(() => {
      if ((!t && n !== null) || Dt.isServer) return null;
      let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (o) return o;
      if (r === null) return null;
      let a = r.createElement("div");
      return (
        a.setAttribute("id", "headlessui-portal-root"),
        r.body.appendChild(a)
      );
    });
  return (
    h.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    h.useEffect(() => {
      t || (n !== null && s(n.current));
    }, [n, s, t]),
    l
  );
}
let ng = h.Fragment;
function rg(e, t) {
  let n = e,
    r = h.useRef(null),
    l = yt(
      I0((p) => {
        r.current = p;
      }),
      t,
    ),
    s = il(r),
    o = tg(r),
    [a] = h.useState(() => {
      var p;
      return Dt.isServer
        ? null
        : (p = s == null ? void 0 : s.createElement("div")) != null
          ? p
          : null;
    }),
    u = h.useContext(vi),
    c = ir();
  return (
    st(() => {
      !o ||
        !a ||
        o.contains(a) ||
        (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
    }, [o, a]),
    st(() => {
      if (a && u) return u.register(a);
    }, [u, a]),
    jf(() => {
      var p;
      !o ||
        !a ||
        (a instanceof Node && o.contains(a) && o.removeChild(a),
        o.childNodes.length <= 0 &&
          ((p = o.parentElement) == null || p.removeChild(o)));
    }),
    c
      ? !o || !a
        ? null
        : $s.createPortal(
            ot({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: ng,
              name: "Portal",
            }),
            a,
          )
      : null
  );
}
let lg = h.Fragment,
  Pf = h.createContext(null);
function sg(e, t) {
  let { target: n, ...r } = e,
    l = { ref: yt(t) };
  return R.createElement(
    Pf.Provider,
    { value: n },
    ot({ ourProps: l, theirProps: r, defaultTag: lg, name: "Popover.Group" }),
  );
}
let vi = h.createContext(null);
function og() {
  let e = h.useContext(vi),
    t = h.useRef([]),
    n = le((s) => (t.current.push(s), e && e.register(s), () => r(s))),
    r = le((s) => {
      let o = t.current.indexOf(s);
      (o !== -1 && t.current.splice(o, 1), e && e.unregister(s));
    }),
    l = h.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    h.useMemo(
      () =>
        function ({ children: s }) {
          return R.createElement(vi.Provider, { value: l }, s);
        },
      [l],
    ),
  ];
}
let ig = Ge(rg),
  ag = Ge(sg),
  xi = Object.assign(ig, { Group: ag });
function ug(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const cg = typeof Object.is == "function" ? Object.is : ug,
  { useState: dg, useEffect: fg, useLayoutEffect: pg, useDebugValue: mg } = $r;
function hg(e, t, n) {
  const r = t(),
    [{ inst: l }, s] = dg({ inst: { value: r, getSnapshot: t } });
  return (
    pg(() => {
      ((l.value = r), (l.getSnapshot = t), vo(l) && s({ inst: l }));
    }, [e, r, t]),
    fg(
      () => (
        vo(l) && s({ inst: l }),
        e(() => {
          vo(l) && s({ inst: l });
        })
      ),
      [e],
    ),
    mg(r),
    r
  );
}
function vo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !cg(n, r);
  } catch {
    return !0;
  }
}
function gg(e, t, n) {
  return t();
}
const yg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vg = !yg,
  xg = vg ? gg : hg,
  wg = "useSyncExternalStore" in $r ? ((e) => e.useSyncExternalStore)($r) : xg;
function Sg(e) {
  return wg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Ng(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return (r.add(l), () => r.delete(l));
    },
    dispatch(l, ...s) {
      let o = t[l].call(n, ...s);
      o && ((n = o), r.forEach((a) => a()));
    },
  };
}
function kg() {
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
        s = e - l;
      n.style(r, "paddingRight", `${s}px`);
    },
  };
}
function jg() {
  return vf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((s) => s()).some((s) => s.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = Pn();
              (a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose())));
            }
            let s = (l = window.scrollY) != null ? l : window.pageYOffset,
              o = null;
            (t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let u = a.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      p = e.querySelector(c);
                    p && !r(p) && (o = p);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let u = a.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement)
                    if (r(a.target)) {
                      let u = a.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(
                          u.scrollHeight > u.clientHeight ||
                          u.scrollWidth > u.clientWidth
                        );
                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                },
                { passive: !1 },
              ),
              t.add(() => {
                var a;
                let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                (s !== u && window.scrollTo(0, s),
                  o &&
                    o.isConnected &&
                    (o.scrollIntoView({ block: "nearest" }), (o = null)));
              }));
          });
        },
      }
    : {};
}
function bg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Eg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let gn = Ng(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Pn(), meta: new Set() };
    return (r.count++, r.meta.add(t), this.set(e, r), this);
  },
  POP(e, t) {
    let n = this.get(e);
    return (n && (n.count--, n.meta.delete(t)), this);
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Eg(n) },
      l = [jg(), kg(), bg()];
    (l.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      l.forEach(({ after: s }) => (s == null ? void 0 : s(r))));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
gn.subscribe(() => {
  let e = gn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    (((l && !r) || (!l && r)) &&
      gn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && gn.dispatch("TEARDOWN", n));
  }
});
function Cg(e, t, n) {
  let r = Sg(gn),
    l = e ? r.get(e) : void 0,
    s = l ? l.count > 0 : !1;
  return (
    st(() => {
      if (!(!e || !t))
        return (gn.dispatch("PUSH", e, n), () => gn.dispatch("POP", e, n));
    }, [t, e]),
    s
  );
}
let xo = new Map(),
  wr = new Map();
function Qu(e, t = !0) {
  st(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var o;
      if (!r) return;
      let a = (o = wr.get(r)) != null ? o : 1;
      if ((a === 1 ? wr.delete(r) : wr.set(r, a - 1), a !== 1)) return;
      let u = xo.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        xo.delete(r));
    }
    let s = (n = wr.get(r)) != null ? n : 0;
    return (
      wr.set(r, s + 1),
      s !== 0 ||
        (xo.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function Tg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = h.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    s = il(l),
    o = le(() => {
      var a, u, c;
      let p = [];
      for (let m of e)
        m !== null &&
          (m instanceof HTMLElement
            ? p.push(m)
            : "current" in m &&
              m.current instanceof HTMLElement &&
              p.push(m.current));
      if (t != null && t.current) for (let m of t.current) p.push(m);
      for (let m of (a =
        s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
        ? a
        : [])
        m !== document.body &&
          m !== document.head &&
          m instanceof HTMLElement &&
          m.id !== "headlessui-portal-root" &&
          (m.contains(l.current) ||
            m.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host,
            ) ||
            p.some((y) => m.contains(y)) ||
            p.push(m));
      return p;
    });
  return {
    resolveContainers: o,
    contains: le((a) => o().some((u) => u.contains(a))),
    mainTreeNodeRef: l,
    MainTreeNode: h.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : R.createElement(gi, { features: ys.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
let wa = h.createContext(() => {});
wa.displayName = "StackContext";
var wi = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  wi || {},
);
function Pg() {
  return h.useContext(wa);
}
function Dg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let s = Pg(),
    o = le((...a) => {
      (t == null || t(...a), s(...a));
    });
  return (
    st(() => {
      let a = l === void 0 || l === !0;
      return (
        a && o(0, n, r),
        () => {
          a && o(1, n, r);
        }
      );
    }, [o, n, r, l]),
    R.createElement(wa.Provider, { value: o }, e)
  );
}
let Df = h.createContext(null);
function Of() {
  let e = h.useContext(Df);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Of), t);
  }
  return e;
}
function Og() {
  let [e, t] = h.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    h.useMemo(
      () =>
        function (n) {
          let r = le(
              (s) => (
                t((o) => [...o, s]),
                () =>
                  t((o) => {
                    let a = o.slice(),
                      u = a.indexOf(s);
                    return (u !== -1 && a.splice(u, 1), a);
                  })
              ),
            ),
            l = h.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props],
            );
          return R.createElement(Df.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let Lg = "p";
function Mg(e, t) {
  let n = ar(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    s = Of(),
    o = yt(t);
  st(() => s.register(r), [r, s.register]);
  let a = { ref: o, ...s.props, id: r };
  return ot({
    ourProps: a,
    theirProps: l,
    slot: s.slot || {},
    defaultTag: Lg,
    name: s.name || "Description",
  });
}
let _g = Ge(Mg),
  Fg = Object.assign(_g, {});
var $g = ((e) => (
    (e[(e.Open = 0)] = "Open"),
    (e[(e.Closed = 1)] = "Closed"),
    e
  ))($g || {}),
  zg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(zg || {});
let Ig = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  vs = h.createContext(null);
vs.displayName = "DialogContext";
function ul(e) {
  let t = h.useContext(vs);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ul), n);
  }
  return t;
}
function Rg(e, t, n = () => [document.body]) {
  Cg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Ag(e, t) {
  return Pe(t.type, Ig, e, t);
}
let Hg = "div",
  Wg = gs.RenderStrategy | gs.Static;
function Ug(e, t) {
  let n = ar(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: s,
      initialFocus: o,
      role: a = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [p, m] = h.useState(0),
    y = h.useRef(!1);
  a = (function () {
    return a === "dialog" || a === "alertdialog"
      ? a
      : (y.current ||
          ((y.current = !0),
          console.warn(
            `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
          )),
        "dialog");
  })();
  let x = xa();
  l === void 0 && x !== null && (l = (x & Ue.Open) === Ue.Open);
  let w = h.useRef(null),
    v = yt(w, t),
    k = il(w),
    f = e.hasOwnProperty("open") || x !== null,
    d = e.hasOwnProperty("onClose");
  if (!f && !d)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!f)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!d)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`,
    );
  if (typeof s != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`,
    );
  let g = l ? 0 : 1,
    [j, S] = h.useReducer(Ag, {
      titleId: null,
      descriptionId: null,
      panelRef: h.createRef(),
    }),
    b = le(() => s(!1)),
    E = le((Z) => S({ type: 0, id: Z })),
    D = ir() ? (u ? !1 : g === 0) : !1,
    z = p > 1,
    _ = h.useContext(vs) !== null,
    [Y, W] = og(),
    ae = {
      get current() {
        var Z;
        return (Z = j.panelRef.current) != null ? Z : w.current;
      },
    },
    {
      resolveContainers: ye,
      mainTreeNodeRef: V,
      MainTreeNode: Q,
    } = Tg({ portals: Y, defaultContainers: [ae] }),
    X = z ? "parent" : "leaf",
    T = x !== null ? (x & Ue.Closing) === Ue.Closing : !1,
    $ = _ || T ? !1 : D,
    F = h.useCallback(() => {
      var Z, Oe;
      return (Oe = Array.from(
        (Z = k == null ? void 0 : k.querySelectorAll("body > *")) != null
          ? Z
          : [],
      ).find((L) =>
        L.id === "headlessui-portal-root"
          ? !1
          : L.contains(V.current) && L instanceof HTMLElement,
      )) != null
        ? Oe
        : null;
    }, [V]);
  Qu(F, $);
  let A = z ? !0 : D,
    O = h.useCallback(() => {
      var Z, Oe;
      return (Oe = Array.from(
        (Z =
          k == null
            ? void 0
            : k.querySelectorAll("[data-headlessui-portal]")) != null
          ? Z
          : [],
      ).find((L) => L.contains(V.current) && L instanceof HTMLElement)) != null
        ? Oe
        : null;
    }, [V]);
  (Qu(O, A),
    z0(
      ye,
      (Z) => {
        (Z.preventDefault(), b());
      },
      !(!D || z),
    ));
  let N = !(z || g !== 0);
  (kf(k == null ? void 0 : k.defaultView, "keydown", (Z) => {
    N &&
      (Z.defaultPrevented ||
        (Z.key === Nf.Escape &&
          (Z.preventDefault(), Z.stopPropagation(), b())));
  }),
    Rg(k, !(T || g !== 0 || _), ye),
    h.useEffect(() => {
      if (g !== 0 || !w.current) return;
      let Z = new ResizeObserver((Oe) => {
        for (let L of Oe) {
          let C = L.target.getBoundingClientRect();
          C.x === 0 && C.y === 0 && C.width === 0 && C.height === 0 && b();
        }
      });
      return (Z.observe(w.current), () => Z.disconnect());
    }, [g, w, b]));
  let [q, ke] = Og(),
    zt = h.useMemo(
      () => [{ dialogState: g, close: b, setTitleId: E }, j],
      [g, j, b, E],
    ),
    je = h.useMemo(() => ({ open: g === 0 }), [g]),
    at = {
      ref: v,
      id: r,
      role: a,
      "aria-modal": g === 0 ? !0 : void 0,
      "aria-labelledby": j.titleId,
      "aria-describedby": q,
    };
  return R.createElement(
    Dg,
    {
      type: "Dialog",
      enabled: g === 0,
      element: w,
      onUpdate: le((Z, Oe) => {
        Oe === "Dialog" &&
          Pe(Z, {
            [wi.Add]: () => m((L) => L + 1),
            [wi.Remove]: () => m((L) => L - 1),
          });
      }),
    },
    R.createElement(
      yi,
      { force: !0 },
      R.createElement(
        xi,
        null,
        R.createElement(
          vs.Provider,
          { value: zt },
          R.createElement(
            xi.Group,
            { target: w },
            R.createElement(
              yi,
              { force: !1 },
              R.createElement(
                ke,
                { slot: je, name: "Dialog.Description" },
                R.createElement(
                  xr,
                  {
                    initialFocus: o,
                    containers: ye,
                    features: D
                      ? Pe(X, {
                          parent: xr.features.RestoreFocus,
                          leaf: xr.features.All & ~xr.features.FocusLock,
                        })
                      : xr.features.None,
                  },
                  R.createElement(
                    W,
                    null,
                    ot({
                      ourProps: at,
                      theirProps: c,
                      slot: je,
                      defaultTag: Hg,
                      features: Wg,
                      visible: g === 0,
                      name: "Dialog",
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    R.createElement(Q, null),
  );
}
let Bg = "div";
function Vg(e, t) {
  let n = ar(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: s, close: o }] = ul("Dialog.Overlay"),
    a = yt(t),
    u = le((p) => {
      if (p.target === p.currentTarget) {
        if (B0(p.currentTarget)) return p.preventDefault();
        (p.preventDefault(), p.stopPropagation(), o());
      }
    }),
    c = h.useMemo(() => ({ open: s === 0 }), [s]);
  return ot({
    ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: Bg,
    name: "Dialog.Overlay",
  });
}
let Qg = "div";
function Yg(e, t) {
  let n = ar(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: s }, o] = ul("Dialog.Backdrop"),
    a = yt(t);
  h.useEffect(() => {
    if (o.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
      );
  }, [o.panelRef]);
  let u = h.useMemo(() => ({ open: s === 0 }), [s]);
  return R.createElement(
    yi,
    { force: !0 },
    R.createElement(
      xi,
      null,
      ot({
        ourProps: { ref: a, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Qg,
        name: "Dialog.Backdrop",
      }),
    ),
  );
}
let qg = "div";
function Gg(e, t) {
  let n = ar(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: s }, o] = ul("Dialog.Panel"),
    a = yt(t, o.panelRef),
    u = h.useMemo(() => ({ open: s === 0 }), [s]),
    c = le((p) => {
      p.stopPropagation();
    });
  return ot({
    ourProps: { ref: a, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: qg,
    name: "Dialog.Panel",
  });
}
let Kg = "h2";
function Xg(e, t) {
  let n = ar(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: s, setTitleId: o }] = ul("Dialog.Title"),
    a = yt(t);
  h.useEffect(() => (o(r), () => o(null)), [r, o]);
  let u = h.useMemo(() => ({ open: s === 0 }), [s]);
  return ot({
    ourProps: { ref: a, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Kg,
    name: "Dialog.Title",
  });
}
let Jg = Ge(Ug),
  Zg = Ge(Yg),
  ey = Ge(Gg),
  ty = Ge(Vg),
  ny = Ge(Xg),
  Ke = Object.assign(Jg, {
    Backdrop: Zg,
    Panel: ey,
    Overlay: ty,
    Title: ny,
    Description: Fg,
  });
function ry(e = 0) {
  let [t, n] = h.useState(e),
    r = al(),
    l = h.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r],
    ),
    s = h.useCallback((u) => !!(t & u), [t]),
    o = h.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r],
    ),
    a = h.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n],
    );
  return { flags: t, addFlag: l, hasFlag: s, removeFlag: o, toggleFlag: a };
}
function ly(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return ((t.called = !0), e(...n));
  };
}
function wo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function So(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function sy(e, t) {
  let n = Pn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [s, o] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((p) => (p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3))
        .sort((p, m) => m - p);
      return c;
    }),
    a = s + o;
  if (a !== 0) {
    n.group((c) => {
      (c.setTimeout(() => {
        (t(), c.dispose());
      }, a),
        c.addEventListener(e, "transitionrun", (p) => {
          p.target === p.currentTarget && c.dispose();
        }));
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return (n.add(() => t()), n.dispose);
}
function oy(e, t, n, r) {
  let l = n ? "enter" : "leave",
    s = Pn(),
    o = r !== void 0 ? ly(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = Pe(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Pe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Pe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    So(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    wo(e, ...t.base, ...a, ...c),
    s.nextFrame(() => {
      (So(e, ...t.base, ...a, ...c),
        wo(e, ...t.base, ...a, ...u),
        sy(
          e,
          () => (So(e, ...t.base, ...a), wo(e, ...t.base, ...t.entered), o()),
        ));
    }),
    s.dispose
  );
}
function iy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: s,
}) {
  let o = al(),
    a = ga(),
    u = Ot(n);
  (st(() => {
    e && (u.current = "enter");
  }, [e]),
    st(() => {
      let c = Pn();
      a.add(c.dispose);
      let p = t.current;
      if (p && u.current !== "idle" && o.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            oy(p, r.current, u.current === "enter", () => {
              (c.dispose(), s.current(u.current));
            }),
          ),
          c.dispose
        );
    }, [n]));
}
function At(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Rs = h.createContext(null);
Rs.displayName = "TransitionContext";
var ay = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(ay || {});
function uy() {
  let e = h.useContext(Rs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function cy() {
  let e = h.useContext(As);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let As = h.createContext(null);
As.displayName = "NestingContext";
function Hs(e) {
  return "children" in e
    ? Hs(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Lf(e, t) {
  let n = Ot(e),
    r = h.useRef([]),
    l = al(),
    s = ga(),
    o = le((x, w = qt.Hidden) => {
      let v = r.current.findIndex(({ el: k }) => k === x);
      v !== -1 &&
        (Pe(w, {
          [qt.Unmount]() {
            r.current.splice(v, 1);
          },
          [qt.Hidden]() {
            r.current[v].state = "hidden";
          },
        }),
        s.microTask(() => {
          var k;
          !Hs(r) && l.current && ((k = n.current) == null || k.call(n));
        }));
    }),
    a = le((x) => {
      let w = r.current.find(({ el: v }) => v === x);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => o(x, qt.Unmount)
      );
    }),
    u = h.useRef([]),
    c = h.useRef(Promise.resolve()),
    p = h.useRef({ enter: [], leave: [], idle: [] }),
    m = le((x, w, v) => {
      (u.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([k]) => k !== x)),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((k) => {
              u.current.push(k);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((k) => {
              Promise.all(p.current[w].map(([f, d]) => d)).then(() => k());
            }),
          ]),
        w === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => v(w)))
          : v(w));
    }),
    y = le((x, w, v) => {
      Promise.all(p.current[w].splice(0).map(([k, f]) => f))
        .then(() => {
          var k;
          (k = u.current.shift()) == null || k();
        })
        .then(() => v(w));
    });
  return h.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: o,
      onStart: m,
      onStop: y,
      wait: c,
      chains: p,
    }),
    [a, o, r, m, y, p, c],
  );
}
function dy() {}
let fy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Yu(e) {
  var t;
  let n = {};
  for (let r of fy) n[r] = (t = e[r]) != null ? t : dy;
  return n;
}
function py(e) {
  let t = h.useRef(Yu(e));
  return (
    h.useEffect(() => {
      t.current = Yu(e);
    }, [e]),
    t
  );
}
let my = "div",
  Mf = gs.RenderStrategy;
function hy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: s,
      beforeLeave: o,
      afterLeave: a,
      enter: u,
      enterFrom: c,
      enterTo: p,
      entered: m,
      leave: y,
      leaveFrom: x,
      leaveTo: w,
      ...v
    } = e,
    k = h.useRef(null),
    f = yt(k, t),
    d = (n = v.unmount) == null || n ? qt.Unmount : qt.Hidden,
    { show: g, appear: j, initial: S } = uy(),
    [b, E] = h.useState(g ? "visible" : "hidden"),
    D = cy(),
    { register: z, unregister: _ } = D;
  (h.useEffect(() => z(k), [z, k]),
    h.useEffect(() => {
      if (d === qt.Hidden && k.current) {
        if (g && b !== "visible") {
          E("visible");
          return;
        }
        return Pe(b, { hidden: () => _(k), visible: () => z(k) });
      }
    }, [b, k, z, _, g, d]));
  let Y = Ot({
      base: At(v.className),
      enter: At(u),
      enterFrom: At(c),
      enterTo: At(p),
      entered: At(m),
      leave: At(y),
      leaveFrom: At(x),
      leaveTo: At(w),
    }),
    W = py({ beforeEnter: l, afterEnter: s, beforeLeave: o, afterLeave: a }),
    ae = ir();
  h.useEffect(() => {
    if (ae && b === "visible" && k.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [k, b, ae]);
  let ye = S && !j,
    V = j && g && S,
    Q = !ae || ye ? "idle" : g ? "enter" : "leave",
    X = ry(0),
    T = le((N) =>
      Pe(N, {
        enter: () => {
          (X.addFlag(Ue.Opening), W.current.beforeEnter());
        },
        leave: () => {
          (X.addFlag(Ue.Closing), W.current.beforeLeave());
        },
        idle: () => {},
      }),
    ),
    $ = le((N) =>
      Pe(N, {
        enter: () => {
          (X.removeFlag(Ue.Opening), W.current.afterEnter());
        },
        leave: () => {
          (X.removeFlag(Ue.Closing), W.current.afterLeave());
        },
        idle: () => {},
      }),
    ),
    F = Lf(() => {
      (E("hidden"), _(k));
    }, D),
    A = h.useRef(!1);
  iy({
    immediate: V,
    container: k,
    classes: Y,
    direction: Q,
    onStart: Ot((N) => {
      ((A.current = !0), F.onStart(k, N, T));
    }),
    onStop: Ot((N) => {
      ((A.current = !1),
        F.onStop(k, N, $),
        N === "leave" && !Hs(F) && (E("hidden"), _(k)));
    }),
  });
  let O = v,
    J = { ref: f };
  return (
    V
      ? (O = {
          ...O,
          className: hs(
            v.className,
            ...Y.current.enter,
            ...Y.current.enterFrom,
          ),
        })
      : A.current &&
        ((O.className = hs(
          v.className,
          (r = k.current) == null ? void 0 : r.className,
        )),
        O.className === "" && delete O.className),
    R.createElement(
      As.Provider,
      { value: F },
      R.createElement(
        W0,
        { value: Pe(b, { visible: Ue.Open, hidden: Ue.Closed }) | X.flags },
        ot({
          ourProps: J,
          theirProps: O,
          defaultTag: my,
          features: Mf,
          visible: b === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function gy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...s } = e,
    o = h.useRef(null),
    a = yt(o, t);
  ir();
  let u = xa();
  if (
    (n === void 0 && u !== null && (n = (u & Ue.Open) === Ue.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [c, p] = h.useState(n ? "visible" : "hidden"),
    m = Lf(() => {
      p("hidden");
    }),
    [y, x] = h.useState(!0),
    w = h.useRef([n]);
  st(() => {
    y !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let v = h.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  h.useEffect(() => {
    if (n) p("visible");
    else if (!Hs(m)) p("hidden");
    else {
      let g = o.current;
      if (!g) return;
      let j = g.getBoundingClientRect();
      j.x === 0 && j.y === 0 && j.width === 0 && j.height === 0 && p("hidden");
    }
  }, [n, m]);
  let k = { unmount: l },
    f = le(() => {
      var g;
      (y && x(!1), (g = e.beforeEnter) == null || g.call(e));
    }),
    d = le(() => {
      var g;
      (y && x(!1), (g = e.beforeLeave) == null || g.call(e));
    });
  return R.createElement(
    As.Provider,
    { value: m },
    R.createElement(
      Rs.Provider,
      { value: v },
      ot({
        ourProps: {
          ...k,
          as: h.Fragment,
          children: R.createElement(_f, {
            ref: a,
            ...k,
            ...s,
            beforeEnter: f,
            beforeLeave: d,
          }),
        },
        theirProps: {},
        defaultTag: h.Fragment,
        features: Mf,
        visible: c === "visible",
        name: "Transition",
      }),
    ),
  );
}
function yy(e, t) {
  let n = h.useContext(Rs) !== null,
    r = xa() !== null;
  return R.createElement(
    R.Fragment,
    null,
    !n && r
      ? R.createElement(Si, { ref: t, ...e })
      : R.createElement(_f, { ref: t, ...e }),
  );
}
let Si = Ge(gy),
  _f = Ge(hy),
  vy = Ge(yy),
  Xe = Object.assign(Si, { Child: vy, Root: Si }),
  yn = null;
const xy = async () => {
    if (yn) return yn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((yn = await e.json()), yn);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Ff = (e) => {
    if (!yn) throw new Error("Configuration not loaded");
    return `${yn.domain}${e}`;
  },
  wy = () => yn,
  tt = async (e, t = {}) => {
    const n = Ff(e),
      r = t.method || "GET";
    (console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${n}`),
      console.log(`Method: ${r}`),
      t.body && console.log("Request Payload:", t.body));
    try {
      const l = await fetch(n, {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        s = await l.text();
      let o;
      try {
        o = JSON.parse(s);
      } catch (a) {
        throw (
          console.error("Failed to parse response as JSON:", a),
          new Error("Invalid JSON response")
        );
      }
      if ((console.log("Response:", o), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return o;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  Sy = async (e) =>
    tt("/api/drugStotreDistribution/barcode", {
      method: "POST",
      body: { ValueAry: [e] },
    }),
  Ny = async (e, t) => {
    const n = Ff("/api/drugStotreDistribution/excel_upload");
    (console.group("🌐 API Request: /api/drugStotreDistribution/excel_upload"),
      console.log(`URL: ${n}`),
      console.log(`File: ${e.name}`),
      console.log(`Operator Name: ${t}`));
    try {
      const r = new FormData();
      (r.append("file", e), r.append("op_name", t));
      const l = await fetch(n, { method: "POST", body: r }),
        s = await l.text();
      let o;
      try {
        o = JSON.parse(s);
      } catch (a) {
        throw (
          console.error("Failed to parse response as JSON:", a),
          new Error("Invalid JSON response")
        );
      }
      if ((console.log("Response:", o), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return o;
    } catch (r) {
      throw (console.error("API Error:", r), console.groupEnd(), r);
    }
  },
  Sa = ({ value: e, onChange: t, onClose: n, title: r }) => {
    const [l, s] = R.useState(e),
      [o, a] = R.useState(null),
      [u, c] = R.useState(null),
      [p, m] = R.useState(!1),
      [y, x] = R.useState(!0),
      w = R.useRef(null);
    (h.useEffect(() => {
      const S =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      w.current && !S && w.current.focus();
    }, []),
      h.useEffect(() => {
        const S = (b) => {
          const E = b.key;
          E >= "0" && E <= "9"
            ? (b.preventDefault(), v(E))
            : E === "+" || E === "-"
              ? (b.preventDefault(), k(E))
              : E === "*"
                ? (b.preventDefault(), k("×"))
                : E === "/"
                  ? (b.preventDefault(), k("÷"))
                  : E === "Enter"
                    ? (b.preventDefault(), g())
                    : E === "Escape"
                      ? (b.preventDefault(), n())
                      : E === "Backspace" &&
                        (b.preventDefault(), s(l.slice(0, -1) || "0"));
        };
        return (
          window.addEventListener("keydown", S),
          () => window.removeEventListener("keydown", S)
        );
      }, [n, l, u, o]));
    const v = (S) => {
        y
          ? (s(S), x(!1))
          : p
            ? (s(S), m(!1))
            : o && !u
              ? (c(l), s(S))
              : s(l === "0" ? S : l + S);
      },
      k = (S) => {
        (u && f(), a(S), m(!1), x(!1));
      },
      f = () => {
        if (!u || !o) return;
        const S = parseFloat(u),
          b = parseFloat(l);
        let E = 0;
        switch (o) {
          case "+":
            E = S + b;
            break;
          case "-":
            E = S - b;
            break;
          case "×":
            E = S * b;
            break;
          case "÷":
            if (b === 0) {
              alert("不能除以零");
              return;
            }
            E = S / b;
            break;
        }
        (s(Math.round(E).toString()), c(null), a(null), m(!0), x(!1));
      },
      d = () => {
        (s("0"), c(null), a(null), m(!1), x(!0));
      },
      g = () => {
        let S = l;
        if (u && o) {
          const b = parseFloat(u),
            E = parseFloat(l);
          let D = 0;
          switch (o) {
            case "+":
              D = b + E;
              break;
            case "-":
              D = b - E;
              break;
            case "×":
              D = b * E;
              break;
            case "÷":
              if (E === 0) {
                alert("不能除以零");
                return;
              }
              D = b / E;
              break;
          }
          S = Math.round(D).toString();
        }
        (t(S),
          setTimeout(() => {
            n();
          }, 0));
      },
      j = i.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: i.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (S) => S.stopPropagation(),
          children: [
            i.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                i.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                  children: r || "",
                }),
                i.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: i.jsx(rr, { size: 20 }),
                }),
              ],
            }),
            i.jsx("div", {
              className: "mb-6",
              children: i.jsx("input", {
                ref: w,
                type: "text",
                value: l,
                readOnly: !0,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            i.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((S) =>
                  i.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), S === "÷" ? k(S) : v(S));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${S === "÷" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: S,
                    },
                    S,
                  ),
                ),
                ["4", "5", "6", "×"].map((S) =>
                  i.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), S === "×" ? k(S) : v(S));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${S === "×" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: S,
                    },
                    S,
                  ),
                ),
                ["1", "2", "3", "-"].map((S) =>
                  i.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), S === "-" ? k(S) : v(S));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${S === "-" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: S,
                    },
                    S,
                  ),
                ),
                ["0", ".", "=", "+"].map((S) =>
                  i.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(),
                          S === "=" ? f() : S === "+" ? k(S) : v(S));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${S === "=" ? "bg-green-500 hover:bg-green-600 text-white" : S === "+" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: S,
                    },
                    S,
                  ),
                ),
              ],
            }),
            i.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                i.jsx("button", {
                  onClick: (S) => {
                    (S.stopPropagation(), d());
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                i.jsx("button", {
                  onClick: (S) => {
                    (S.stopPropagation(), g());
                  },
                  className:
                    "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                  children: "確認",
                }),
              ],
            }),
          ],
        }),
      });
    return $s.createPortal(j, document.body);
  },
  ky = {
    zh: {
      "app.title": "撥補建單",
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
      "app.button.scan": "掃碼建單",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "app.filter.placeholder": "請輸入搜尋關鍵字",
      "app.filter.source": "來源",
      "app.filter.destination": "目的",
      "app.filter.code": "藥碼",
      "app.filter.name": "藥名",
      "table.source": "來源",
      "table.destination": "目的",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.createdTime": "加入時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.issuanceTime": "撥發時間",
      "table.issuer": "撥發人",
      "table.lotNumber": "批號",
      "table.expiryDate": "效期",
      "modal.editOrder": "編輯撥補單",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "撥補建單系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧藥局平台",
    },
    en: {
      "app.title": "Create Distribution Order",
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
      "app.button.scan": "Scan Barcode",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Distribution order created successfully",
      "app.filter.placeholder": "Enter search keyword",
      "app.filter.source": "Source",
      "app.filter.destination": "Destination",
      "app.filter.code": "Code",
      "app.filter.name": "Name",
      "table.source": "Source",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.createdTime": "Created Time",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.issuanceTime": "Issuance Time",
      "table.issuer": "Issuer",
      "table.lotNumber": "Lot Number",
      "table.expiryDate": "Expiry Date",
      "modal.editOrder": "Edit Distribution Order",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Distribution Order System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "Smart Pharmacy Platform",
    },
  },
  $f = h.createContext(void 0),
  jy = ({ children: e }) => {
    const [t, n] = h.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s) => ky[t][s] || s;
    return i.jsx($f.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  it = () => {
    const e = h.useContext($f);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  by = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = it(),
      l = (s, o, a, u) => {
        const c = new Date(`${s}T${o}`),
          p = new Date(`${a}T${u}`);
        n(c, p);
      };
    return i.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        i.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            i.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            i.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: i.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        i.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            i.jsxs("div", {
              className: "space-y-2",
              children: [
                i.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                i.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    i.jsx("input", {
                      type: "date",
                      value: me(e, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          s.target.value,
                          me(e, "HH:mm:ss"),
                          me(t, "yyyy-MM-dd"),
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    i.jsx("input", {
                      type: "time",
                      value: me(e, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          s.target.value,
                          me(t, "yyyy-MM-dd"),
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "space-y-2",
              children: [
                i.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                i.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    i.jsx("input", {
                      type: "date",
                      value: me(t, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          me(e, "HH:mm:ss"),
                          s.target.value,
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    i.jsx("input", {
                      type: "time",
                      value: me(t, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          me(e, "HH:mm:ss"),
                          me(t, "yyyy-MM-dd"),
                          s.target.value,
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
    });
  },
  Ey = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: s } = it(),
      [o, a] = h.useState(null),
      [u, c] = h.useState(!1),
      [p, m] = h.useState(!1),
      [y, x] = h.useState(!1),
      [w, v] = h.useState(""),
      [k, f] = h.useState(null),
      [d, g] = h.useState(!1),
      [j, S] = h.useState("name"),
      [b, E] = h.useState(""),
      [D, z] = h.useState(new Set()),
      [_, Y] = h.useState(!1),
      W = (N) =>
        !N || N === "0001-01-01T00:00:00"
          ? "-"
          : me(new Date(N), "yyyy-MM-dd HH:mm:ss"),
      ae = (N) => (!N || N.trim() === "" ? "-" : N),
      ye = [
        { value: "name", label: s("app.filter.name") },
        { value: "code", label: s("app.filter.code") },
        { value: "source", label: s("app.filter.source") },
        { value: "destination", label: s("app.filter.destination") },
      ],
      V = e.filter((N) => {
        if (!b) return !0;
        const U = b.toLowerCase();
        switch (j) {
          case "name":
            return N.name.toLowerCase().includes(U);
          case "code":
            return N.code.toLowerCase().includes(U);
          case "source":
            return N.sourceStoreType.toLowerCase().includes(U);
          case "destination":
            return N.destinationStoreType.toLowerCase().includes(U);
          default:
            return !0;
        }
      }),
      Q = async () => {
        if (o) {
          (g(!0), f(null));
          try {
            const N = await tt("/api/drugStotreDistribution/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [o.GUID] },
            });
            if (N.Code === 200) (m(!1), c(!1), r(t, n));
            else throw new Error(N.Result || "刪除失敗");
          } catch (N) {
            f(N instanceof Error ? N.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      X = async () => {
        if (o) {
          if (!w || isNaN(Number(w)) || Number(w) <= 0) {
            f("請輸入有效的數量");
            return;
          }
          (g(!0), f(null));
          try {
            const N = await tt(
              "/api/drugStotreDistribution/update_qty_by_guid",
              { method: "POST", body: { ValueAry: [o.GUID, w] } },
            );
            if (N.Code === 200) (c(!1), r(t, n));
            else throw new Error(N.Result || "更新失敗");
          } catch (N) {
            f(N instanceof Error ? N.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      T = (N) => {
        N.state === "等待過帳" && (a(N), v(N.issuedQuantity), f(null), c(!0));
      },
      $ = (N) => {
        N.preventDefault();
      },
      F = (N) => {
        z((U) => {
          const q = new Set(U);
          return (q.has(N) ? q.delete(N) : q.add(N), q);
        });
      },
      A = () => {
        const N = V.filter((U) => U.state === "等待過帳");
        D.size === N.length && N.length > 0
          ? z(new Set())
          : z(new Set(N.map((U) => U.GUID)));
      },
      O = async () => {
        if (D.size !== 0) {
          (g(!0), f(null));
          try {
            const N = Array.from(D).join(";"),
              U = await tt("/api/drugStotreDistribution/delete_by_guid", {
                method: "POST",
                body: { ValueAry: [N] },
              });
            if (U.Code === 200) (Y(!1), z(new Set()), r(t, n));
            else throw new Error(U.Result || "批次刪除失敗");
          } catch (N) {
            f(N instanceof Error ? N.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      J = (N) => {
        const U = N.state === "等待過帳",
          q = D.has(N.GUID);
        return i.jsxs(
          "div",
          {
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${U ? "bg-yellow-50 border-yellow-200" : "bg-white border-gray-200"}
          ${q ? "ring-2 ring-blue-500" : ""}
        `,
            children: [
              i.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  i.jsxs("div", {
                    className: "flex items-start gap-3 flex-1",
                    children: [
                      U &&
                        i.jsx("button", {
                          onClick: (ke) => {
                            (ke.stopPropagation(), F(N.GUID));
                          },
                          className: "mt-1 text-blue-600 hover:text-blue-700",
                          children: q
                            ? i.jsx(x0, { size: 20 })
                            : i.jsx(Hu, { size: 20 }),
                        }),
                      i.jsxs("div", {
                        className: "space-y-1 flex-1",
                        onClick: () => T(N),
                        children: [
                          i.jsx("div", {
                            className: "font-medium text-gray-900",
                            children: N.name,
                          }),
                          i.jsx("div", {
                            className: "font-mono text-sm text-gray-600",
                            children: N.code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${N.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : N.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                    children: N.state,
                  }),
                ],
              }),
              i.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.source"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.sourceStoreType,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.destination"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.destinationStoreType,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuedQty"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.issuedQuantity,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.actualQty"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.actualIssuedQuantity || "-",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.operator"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.reportName || "-",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuer"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.issuer || "-",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.lotNumber"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: N.LOT || "-",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.expiryDate"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: ae(N.VAL),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.createdTime"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: W(N.addedTime),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    children: [
                      i.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuanceTime"),
                      }),
                      i.jsx("div", {
                        className: "font-medium",
                        children: W(N.issuanceTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          N.GUID,
        );
      };
    return i.jsxs("div", {
      children: [
        i.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: s("app.orders.title"),
        }),
        i.jsx("div", {
          className: "mb-6",
          children: i.jsx(by, { startDate: t, endDate: n, onDateChange: r }),
        }),
        D.size > 0 &&
          i.jsxs("div", {
            className:
              "mb-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg",
            children: [
              i.jsxs("span", {
                className: "text-base font-medium text-blue-900",
                children: ["已選擇 ", D.size, " 筆申領單"],
              }),
              i.jsxs("button", {
                onClick: () => Y(!0),
                className:
                  "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                children: [i.jsx(Wu, { size: 18 }), "批次刪除"],
              }),
            ],
          }),
        i.jsx("div", {
          className: "mb-6 space-y-4",
          children: i.jsxs("form", {
            onSubmit: $,
            className: "flex gap-3 max-w-2xl",
            children: [
              i.jsx("select", {
                value: j,
                onChange: (N) => S(N.target.value),
                className:
                  "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                children: ye.map((N) =>
                  i.jsx(
                    "option",
                    { value: N.value, children: N.label },
                    N.value,
                  ),
                ),
              }),
              i.jsxs("div", {
                className: "relative w-64",
                children: [
                  i.jsx("input", {
                    type: "text",
                    value: b,
                    onChange: (N) => E(N.target.value),
                    placeholder: s("app.filter.placeholder"),
                    className:
                      "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                  }),
                  i.jsx(mf, {
                    className: "absolute left-3 top-2.5 text-gray-400",
                    size: 20,
                  }),
                ],
              }),
            ],
          }),
        }),
        k &&
          i.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              i.jsx(Fr, { size: 20 }),
              i.jsx("span", { className: "text-base", children: k }),
            ],
          }),
        l
          ? i.jsxs("div", {
              className: "text-center py-8",
              children: [
                i.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                i.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: s("app.orders.loading"),
                }),
              ],
            })
          : V.length === 0
            ? i.jsx("div", {
                className: "text-center py-8 text-base text-gray-500",
                children: s("app.orders.empty"),
              })
            : i.jsxs(i.Fragment, {
                children: [
                  i.jsx("div", {
                    className: "sm:hidden space-y-4",
                    children: V.map(J),
                  }),
                  i.jsx("div", {
                    className:
                      "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                    children: i.jsxs("table", {
                      className: "min-w-full",
                      children: [
                        i.jsx("thead", {
                          className: "bg-gray-50",
                          children: i.jsxs("tr", {
                            children: [
                              i.jsx("th", {
                                className: "px-4 py-3 text-center",
                                children: i.jsx("input", {
                                  type: "checkbox",
                                  checked:
                                    D.size ===
                                      V.filter((N) => N.state === "等待過帳")
                                        .length &&
                                    V.filter((N) => N.state === "等待過帳")
                                      .length > 0,
                                  onChange: A,
                                  className:
                                    "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                }),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.source"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.destination"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.drugCode"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.drugName"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issuedQty"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.actualQty"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.createdTime"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.operator"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.lotNumber"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.expiryDate"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.status"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issuanceTime"),
                              }),
                              i.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issuer"),
                              }),
                            ],
                          }),
                        }),
                        i.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: V.map((N) => {
                            const U = N.state === "等待過帳",
                              q = D.has(N.GUID);
                            return i.jsxs(
                              "tr",
                              {
                                className: `
                        transition-colors duration-150
                        ${U ? "bg-yellow-50 hover:bg-yellow-100" : "hover:bg-gray-50"}
                        
                      `,
                                children: [
                                  i.jsx("td", {
                                    className: "px-4 py-3 text-center",
                                    children: U
                                      ? i.jsx("input", {
                                          type: "checkbox",
                                          checked: q,
                                          onChange: () => F(N.GUID),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        })
                                      : i.jsx("span", {
                                          className: "text-gray-300",
                                          children: i.jsx(Hu, { size: 20 }),
                                        }),
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.sourceStoreType,
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.destinationStoreType,
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.code,
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.name,
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.issuedQuantity,
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.actualIssuedQuantity || "-",
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500 cursor-pointer",
                                    onClick: () => T(N),
                                    children: W(N.addedTime),
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.reportName || "-",
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.LOT || "-",
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: ae(N.VAL),
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap cursor-pointer",
                                    onClick: () => T(N),
                                    children: i.jsx("span", {
                                      className: `px-2 py-1 rounded-full text-xs font-medium ${N.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : N.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                                      children: N.state,
                                    }),
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500 cursor-pointer",
                                    onClick: () => T(N),
                                    children: W(N.issuanceTime),
                                  }),
                                  i.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => T(N),
                                    children: N.issuer || "-",
                                  }),
                                ],
                              },
                              N.GUID,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
        i.jsx(Xe, {
          appear: !0,
          show: u,
          as: h.Fragment,
          children: i.jsxs(Ke, {
            as: "div",
            className: "relative z-50",
            onClose: () => !d && c(!1),
            children: [
              i.jsx(Xe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: i.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              i.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: i.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: i.jsx(Xe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: i.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        i.jsx(Ke.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: s("modal.editOrder"),
                        }),
                        o &&
                          i.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              i.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.source"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.sourceStoreType,
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.destination"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.destinationStoreType,
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuedQty"),
                                      }),
                                      i.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: i.jsx("input", {
                                          type: "text",
                                          value: w,
                                          onClick: () => x(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: s(
                                            "app.quantity.placeholder",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.actualQty"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.actualIssuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.operator"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuer"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.issuer || "-",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.lotNumber"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.expiryDate"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: ae(o.VAL),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.createdTime"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: W(o.addedTime),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuanceTime"),
                                      }),
                                      i.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: W(o.issuanceTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              k &&
                                i.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    i.jsx(Fr, { size: 20 }),
                                    i.jsx("span", {
                                      className: "text-base",
                                      children: k,
                                    }),
                                  ],
                                }),
                              i.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  i.jsxs("button", {
                                    type: "button",
                                    onClick: () => m(!0),
                                    disabled: d,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [i.jsx(Wu, { size: 16 }), "刪除"],
                                  }),
                                  i.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      i.jsx("button", {
                                        type: "button",
                                        onClick: () => !d && c(!1),
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      i.jsx("button", {
                                        type: "button",
                                        onClick: X,
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: d ? "處理中..." : "儲存",
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
              }),
            ],
          }),
        }),
        i.jsx(Xe, {
          appear: !0,
          show: p,
          as: h.Fragment,
          children: i.jsxs(Ke, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !d && m(!1),
            children: [
              i.jsx(Xe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: i.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              i.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: i.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: i.jsx(Xe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: i.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        i.jsx(Ke.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除撥補單",
                        }),
                        i.jsx("div", {
                          className: "mt-2",
                          children: i.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆撥補資料嗎？",
                          }),
                        }),
                        i.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            i.jsx("button", {
                              type: "button",
                              onClick: () => !d && m(!1),
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            i.jsx("button", {
                              type: "button",
                              onClick: Q,
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: d ? "處理中..." : "確認刪除",
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
        y && i.jsx(Sa, { value: w, onChange: v, onClose: () => x(!1) }),
        i.jsx(Xe, {
          appear: !0,
          show: _,
          as: h.Fragment,
          children: i.jsxs(Ke, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !d && Y(!1),
            children: [
              i.jsx(Xe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: i.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              i.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: i.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: i.jsx(Xe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: i.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        i.jsx(Ke.Title, {
                          as: "h3",
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: "批次刪除確認",
                        }),
                        i.jsx("div", {
                          className: "mt-4",
                          children: i.jsxs("p", {
                            className: "text-base text-gray-600",
                            children: [
                              "確定要刪除所選的 ",
                              D.size,
                              " 筆撥補單嗎？此操作無法復原。",
                            ],
                          }),
                        }),
                        k &&
                          i.jsxs("div", {
                            className:
                              "mt-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                            children: [
                              i.jsx(Fr, { size: 18 }),
                              i.jsx("span", {
                                className: "text-sm",
                                children: k,
                              }),
                            ],
                          }),
                        i.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            i.jsx("button", {
                              type: "button",
                              onClick: () => !d && Y(!1),
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            i.jsx("button", {
                              type: "button",
                              onClick: O,
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: d ? "處理中..." : "確認刪除",
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
  zf = (e) => {
    const t = e.find((n) => n.name === "撥補建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  Cy = (e) =>
    zf(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Na = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !zf(t.Permissions)
        ? (xs(), null)
        : t;
    } catch {
      return (xs(), null);
    }
  },
  xs = () => {
    sessionStorage.removeItem("user_session");
  },
  Ty = () => {
    const e = Na();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (xs(), !1) : !0;
  },
  ka = () => {
    const e = Na();
    return (e == null ? void 0 : e.Name) || "";
  },
  Py = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補建單系統",
    logo: r,
  }) => {
    const [l, s] = h.useState(""),
      [o, a] = h.useState(""),
      [u, c] = h.useState(null),
      [p, m] = h.useState(!1),
      y = async (x) => {
        (x.preventDefault(), c(null), m(!0));
        try {
          const w = await tt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: o } },
          });
          if (w.Code === 200) {
            if (!Cy(w.Data)) {
              c("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else c(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          (console.error("Login error:", w),
            c(w instanceof Error ? w.message : "系統錯誤，請稍後再試"));
        } finally {
          m(!1);
        }
      };
    return i.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: i.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            i.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          i.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            i.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                i.jsx(Fr, { size: 20 }),
                i.jsx("span", { children: u }),
              ],
            }),
          i.jsxs("form", {
            onSubmit: y,
            className: "space-y-6",
            children: [
              i.jsxs("div", {
                children: [
                  i.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  i.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (x) => s(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              i.jsxs("div", {
                children: [
                  i.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  i.jsx("input", {
                    type: "password",
                    id: "password",
                    value: o,
                    onChange: (x) => a(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              i.jsx("button", {
                type: "submit",
                disabled: p,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${p ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`,
                children: p ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Dy = () => {
    const { language: e, toggleLanguage: t } = it();
    return i.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        i.jsx(w0, { className: "h-4 w-4" }),
        i.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Oy = ({ title: e }) =>
    i.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Ly = () => {
    const e = Na();
    return e
      ? i.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  My = ({ onLogout: e }) => {
    const { t } = it();
    return i.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        i.jsx(k0, { className: "h-4 w-4" }),
        i.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  _y = () => {
    const { t: e } = it(),
      t = () => {
        const n = wy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return i.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        i.jsx(S0, { size: 24 }),
        i.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Fy = ({ onLogout: e }) => {
    const { t } = it();
    return i.jsx("header", {
      className: "bg-white",
      children: i.jsx("div", {
        className: "w-full px-4",
        children: i.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            i.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                i.jsx(_y, {}),
                i.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    i.jsx(Oy, { title: t("app.title") }),
                    i.jsx(Ly, {}),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex items-center gap-4",
              children: [i.jsx(Dy, {}), i.jsx(My, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  tl = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const { t: l } = it(),
      [s, o] = h.useState(!1);
    h.useEffect(() => {
      const v = setTimeout(() => {
        (o(!0),
          setTimeout(() => {
            t();
          }, 300));
      }, n);
      return () => clearTimeout(v);
    }, [n, t]);
    const a = () => {
        (o(!0),
          setTimeout(() => {
            t();
          }, 300));
      },
      u = r === "success",
      c = u ? "bg-green-50" : "bg-red-50",
      p = u ? "text-green-800" : "text-red-800",
      m = u ? "border-green-200" : "border-red-200",
      y = u ? "text-green-500" : "text-red-500",
      x = u
        ? "text-green-600 hover:text-green-800"
        : "text-red-600 hover:text-red-800",
      w = i.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${c} ${p} px-4 py-3 rounded-lg shadow-xl border ${m} ${s ? "animate-slide-out" : "animate-slide-in"}`,
        style: { zIndex: 1e6 },
        children: [
          u
            ? i.jsx(v0, { size: 20, className: y })
            : i.jsx(Fr, { size: 20, className: y }),
          i.jsx("span", {
            className: "text-sm font-medium",
            children: r === "success" ? l(e) : e,
          }),
          i.jsx("button", {
            onClick: a,
            className: `ml-2 ${x} transition-colors duration-150`,
            children: i.jsx(rr, { size: 16 }),
          }),
        ],
      });
    return $s.createPortal(w, document.body);
  },
  $y = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: l,
    onConfirm: s,
    onCancel: o,
    isProcessing: a = !1,
  }) =>
    i.jsx(Xe, {
      appear: !0,
      show: e,
      as: h.Fragment,
      children: i.jsxs(Ke, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !a && o(),
        children: [
          i.jsx(Xe.Child, {
            as: h.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: i.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          i.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: i.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: i.jsx(Xe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: i.jsxs(Ke.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    i.jsx(Ke.Title, {
                      as: "h3",
                      className: "text-xl font-medium text-gray-900",
                      children: t,
                    }),
                    i.jsx("div", {
                      className: "mt-4",
                      children: i.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: n,
                      }),
                    }),
                    i.jsxs("div", {
                      className: "mt-6 flex justify-end gap-3",
                      children: [
                        i.jsx("button", {
                          type: "button",
                          onClick: () => !a && o(),
                          disabled: a,
                          className:
                            "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: l,
                        }),
                        i.jsx("button", {
                          type: "button",
                          onClick: s,
                          disabled: a,
                          className:
                            "inline-flex justify-center rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: a ? "處理中..." : r,
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
    });
async function zy() {
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load configuration");
    return (await e.json()).ai;
  } catch (e) {
    throw (console.error("載入設定檔錯誤:", e), e);
  }
}
async function Iy(e) {
  var t, n, r;
  try {
    const s = `${await zy()}/barcode`,
      o = new FormData();
    o.append("file", e);
    const a = await fetch(s, { method: "POST", body: o });
    if (!a.ok) throw new Error("API request failed");
    const u = await a.json();
    return (
      ((r =
        (n = (t = u == null ? void 0 : u.results) == null ? void 0 : t[0]) ==
        null
          ? void 0
          : n.code) == null
        ? void 0
        : r.trim()) || null
    );
  } catch (l) {
    return (console.error("條碼掃描 API 錯誤:", l), null);
  }
}
const Ry = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = h.useRef(null),
      l = h.useRef(null),
      s = h.useRef(null),
      o = h.useRef(null),
      [a, u] = h.useState(null),
      [c, p] = h.useState(!1),
      [m, y] = h.useState(window.innerWidth < 768),
      [x, w] = h.useState(null);
    h.useEffect(() => {
      const k = () => y(window.innerWidth < 768);
      return (
        window.addEventListener("resize", k),
        () => window.removeEventListener("resize", k)
      );
    }, []);
    const v = async (k) => {
      if (!r.current || !o.current) return;
      const f = k.currentTarget.getBoundingClientRect(),
        d = (k.clientX - f.left) / f.width,
        g = (k.clientY - f.top) / f.height;
      (w({ x: k.clientX - f.left, y: k.clientY - f.top }),
        setTimeout(() => w(null), 1e3));
      try {
        const j = o.current.getVideoTracks()[0],
          S = j.getCapabilities();
        if ("focusMode" in S) {
          const b = { advanced: [{ focusMode: "single-shot" }] };
          await j.applyConstraints(b);
        }
        if ("pointsOfInterest" in S) {
          const b = { advanced: [{ pointsOfInterest: [{ x: d, y: g }] }] };
          await j.applyConstraints(b);
        }
      } catch (j) {
        console.log("對焦功能不支援或失敗:", j);
      }
    };
    return (
      h.useEffect(() => {
        let k = null,
          f = null;
        const d = () => {
            (f && clearInterval(f),
              k &&
                (k.getTracks().forEach((S) => S.stop()), (o.current = null)));
          },
          g = async () => {
            if (!r.current || !l.current) return;
            const S = r.current,
              b = l.current,
              E = b.getContext("2d");
            if (!E || S.readyState < 2) return;
            ((b.width = S.videoWidth),
              (b.height = S.videoHeight),
              E.drawImage(S, 0, 0, b.width, b.height));
            const D = await new Promise((_) => b.toBlob(_, "image/jpeg", 0.8));
            if (!D) return;
            const z = await Iy(D);
            z && (d(), n(z), t());
          };
        return (
          e
            ? (async () => {
                try {
                  ((k = await navigator.mediaDevices.getUserMedia({
                    video: {
                      facingMode: "environment",
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    },
                  })),
                    (o.current = k),
                    r.current && (r.current.srcObject = k),
                    p(!0),
                    (f = setInterval(g, 600)));
                } catch (S) {
                  (console.error("無法開啟相機:", S),
                    u("無法開啟相機，請確認已授權使用相機"));
                }
              })()
            : d(),
          () => d()
        );
      }, [e, n, t]),
      e
        ? m
          ? i.jsxs("div", {
              className:
                "fixed inset-0 bg-black text-white flex flex-col z-[100]",
              children: [
                i.jsxs("div", {
                  className: "absolute inset-0 w-full h-full",
                  onClick: v,
                  children: [
                    i.jsx("video", {
                      ref: r,
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      className: "w-full h-full object-cover",
                    }),
                    i.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: i.jsxs("div", {
                        className:
                          "relative w-64 h-48 border-2 border-blue-400 rounded-lg",
                        children: [
                          i.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1",
                          }),
                          i.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1",
                          }),
                          i.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1",
                          }),
                          i.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1",
                          }),
                        ],
                      }),
                    }),
                    x &&
                      i.jsx("div", {
                        className:
                          "absolute w-20 h-20 border-2 border-green-400 rounded-full pointer-events-none",
                        style: {
                          left: x.x - 40,
                          top: x.y - 40,
                          animation: "ping 0.5s ease-out",
                        },
                      }),
                  ],
                }),
                i.jsxs("div", {
                  className:
                    "relative z-10 p-4 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm",
                  children: [
                    i.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        i.jsx(mi, { className: "w-5 h-5 text-blue-400 mr-2" }),
                        i.jsx("h2", {
                          className: "text-lg font-semibold",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      onClick: t,
                      children: i.jsx(rr, {
                        className: "w-6 h-6 text-gray-300",
                      }),
                    }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "flex-1 flex items-center justify-center pointer-events-none",
                  children:
                    a &&
                    i.jsx("div", {
                      className:
                        "bg-red-600 bg-opacity-60 text-sm px-4 py-2 rounded-lg",
                      children: a,
                    }),
                }),
                i.jsxs("div", {
                  className:
                    "relative z-10 bg-black bg-opacity-60 text-center py-3 pb-[env(safe-area-inset-bottom)]",
                  children: [
                    !a &&
                      i.jsxs(i.Fragment, {
                        children: [
                          i.jsx("p", {
                            className: "text-sm",
                            children: "請將條碼對準掃描框",
                          }),
                          i.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "點擊畫面可對焦 | 支援一維與二維條碼",
                          }),
                        ],
                      }),
                    i.jsx("button", {
                      onClick: t,
                      className:
                        "mt-3 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700",
                      children: "取消",
                    }),
                  ],
                }),
                i.jsx("canvas", { ref: l, className: "hidden" }),
              ],
            })
          : i.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]",
              children: i.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          i.jsx(mi, {
                            className: "w-6 h-6 text-blue-600 mr-2",
                          }),
                          i.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "條碼掃描",
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: t,
                        className: "text-gray-400 hover:text-gray-600",
                        children: i.jsx(rr, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "p-4",
                    children: [
                      a &&
                        i.jsx("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                          children: a,
                        }),
                      i.jsxs("div", {
                        ref: s,
                        className:
                          "relative bg-black rounded-lg overflow-hidden cursor-pointer",
                        style: { aspectRatio: "16/9" },
                        onClick: v,
                        children: [
                          i.jsx("video", {
                            ref: r,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            className: "w-full h-full object-cover",
                          }),
                          i.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none",
                            children: i.jsxs("div", {
                              className:
                                "relative w-64 h-48 border-2 border-blue-500 rounded-lg",
                              children: [
                                i.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1",
                                }),
                                i.jsx("div", {
                                  className:
                                    "absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1",
                                }),
                                i.jsx("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1",
                                }),
                                i.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1",
                                }),
                              ],
                            }),
                          }),
                          x &&
                            i.jsx("div", {
                              className:
                                "absolute w-16 h-16 border-2 border-green-400 rounded-full pointer-events-none animate-ping",
                              style: {
                                left: x.x - 32,
                                top: x.y - 32,
                                animation: "ping 0.5s ease-out",
                              },
                            }),
                        ],
                      }),
                      i.jsx("canvas", { ref: l, className: "hidden" }),
                      i.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-600",
                        children: [
                          i.jsx("p", { children: "請將條碼對準掃描框中央" }),
                          i.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "點擊畫面可對焦 | 支援一維條碼與二維條碼（QR Code）",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: i.jsx("button", {
                          onClick: t,
                          className:
                            "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50",
                          children: "取消",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
        : null
    );
  },
  Ay = ({
    isOpen: e,
    onClose: t,
    drugs: n,
    warehouses: r,
    onRefreshOrders: l,
  }) => {
    const { language: s } = it(),
      [o, a] = h.useState(""),
      [u, c] = h.useState(!1),
      [p, m] = h.useState(!1),
      [y, x] = h.useState(!1),
      w = h.useRef(null),
      [v, k] = h.useState(null),
      [f, d] = h.useState(""),
      [g, j] = h.useState(""),
      [S, b] = h.useState(""),
      [E, D] = h.useState(null),
      [z, _] = h.useState(null),
      [Y, W] = h.useState(!1),
      [ae, ye] = h.useState(!1),
      [V, Q] = h.useState(null),
      [X, T] = h.useState(null),
      [$, F] = h.useState(!1),
      [A, O] = h.useState(!1),
      [J, N] = h.useState(!1),
      U = h.useRef(null);
    (h.useEffect(() => {
      if (e) {
        const L = localStorage.getItem("barcodeScannerSourceWarehouse"),
          C = localStorage.getItem("barcodeScannerDestinationWarehouse");
        (L && d(L), C && j(C), w.current && w.current.focus());
      }
    }, [e]),
      h.useEffect(() => {
        !p && e && w.current && w.current.focus();
      }, [p, e]));
    const q = async (L, C, I) => {
      var ce;
      I ? W(!0) : ye(!0);
      try {
        const be =
          ((ce = (
            await tt("/api/stock/get_stock_by_code", {
              method: "POST",
              body: {
                ServerName: C.name === "DS01" ? "藥庫" : C.name,
                ServerType: C.type,
                ValueAry: [L],
              },
            })
          ).Data) == null
            ? void 0
            : ce[0]) || null;
        I ? D(be) : _(be);
      } catch (He) {
        (console.error("Error fetching new stock data:", He),
          I ? D(null) : _(null));
      } finally {
        I ? W(!1) : ye(!1);
      }
    };
    (h.useEffect(() => {
      if (v && f) {
        const L = r.find((C) => C.displayName === f);
        L && q(v.CODE, L, !0);
      } else D(null);
    }, [v, f]),
      h.useEffect(() => {
        if (v && g) {
          const L = r.find((C) => C.displayName === g);
          L && q(v.CODE, L, !1);
        } else _(null);
      }, [v, g]));
    const ke = () => {
        (a(""),
          k(null),
          b(""),
          D(null),
          _(null),
          F(!1),
          O(!1),
          N(!1),
          setTimeout(() => {
            w.current && w.current.focus();
          }, 100));
      },
      zt = async (L) => {
        (L.preventDefault(), o.trim() && !p && (await je(o.trim())));
      },
      je = async (L) => {
        m(!0);
        try {
          const C = await Sy(L);
          if (C.Code === 200 && C.Data) {
            const I = C.Data.code,
              ce = C.Data.issuedQuantity,
              He = n.find((be) => be.CODE.toLowerCase() === I.toLowerCase());
            He
              ? (k(He),
                a(""),
                setTimeout(() => {
                  U.current &&
                    U.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 100),
                ce && ce.trim() !== ""
                  ? b(ce)
                  : (b(""),
                    setTimeout(() => {
                      N(!0);
                    }, 200)))
              : Q("找不到藥品");
          } else Q("條碼掃描失敗");
        } catch (C) {
          (console.error("Barcode scan error:", C), Q("條碼掃描失敗"));
        } finally {
          m(!1);
        }
      },
      at = (L) => {
        (a(L), c(!1), je(L));
      },
      Z = async () => {
        if (!v) {
          Q("請選擇藥品");
          return;
        }
        if (!f) {
          Q("請選擇來源庫別");
          return;
        }
        if (!g) {
          Q("請選擇目的庫別");
          return;
        }
        if (!S) {
          Q("請輸入撥補數量");
          return;
        }
        if (f === g) {
          Q("來源庫別與目的庫別不能相同");
          return;
        }
        x(!0);
        try {
          const L = ka(),
            C =
              (E == null
                ? void 0
                : E.qty
                    .reduce((be, jt) => be + parseInt(jt || "0"), 0)
                    .toString()) || "",
            I =
              (z == null
                ? void 0
                : z.qty
                    .reduce((be, jt) => be + parseInt(jt || "0"), 0)
                    .toString()) || "",
            ce = {
              sourceStoreType: f === "藥庫" ? "DS01" : f,
              destinationStoreType: g === "藥庫" ? "DS01" : g,
              code: v.CODE,
              name: v.NAME,
              sourceStoreInventory: C,
              destinationStoreInventory: I,
              issuedQuantity: S,
              reportName: L || "",
              state: "等待過帳",
              LOT: "",
              VAL: "",
              packageUnit: v.MIN_PAKAGE || "",
            },
            He = await tt("/api/drugStotreDistribution/add", {
              method: "POST",
              body: { Data: [ce] },
            });
          if (He.Code === 200) (T("建立撥補單成功"), ke(), l == null || l());
          else throw new Error(He.Result || "建立撥補單失敗");
        } catch (L) {
          (console.error("Error creating order:", L),
            Q("建立撥補單失敗，請稍後再試"));
        } finally {
          x(!1);
        }
      },
      Oe = (L) => (!L || L === "2050/01/01" ? "無期限" : L);
    return e
      ? i.jsxs(i.Fragment, {
          children: [
            V &&
              i.jsx(tl, {
                message: V,
                onClose: () => Q(null),
                duration: 3e3,
                type: "error",
              }),
            X &&
              i.jsx(tl, {
                message: X,
                onClose: () => T(null),
                duration: 3e3,
                type: "success",
              }),
            J &&
              i.jsx(Sa, {
                value: S || "0",
                onChange: (L) => b(L),
                onClose: () => N(!1),
                title: "請輸入撥補量",
              }),
            i.jsx(Ry, {
              isOpen: u,
              onClose: () => c(!1),
              onBarcodeDetected: at,
            }),
            i.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
              children: i.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl overflow-hidden",
                style: {
                  width: "min(90vw, 90vh)",
                  height: "90vh",
                  display: "flex",
                  flexDirection: "column",
                },
                children: [
                  i.jsxs("div", {
                    className:
                      "flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          i.jsx(pf, { className: "text-blue-600", size: 24 }),
                          i.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800",
                            children: s === "zh" ? "掃碼建單" : "Scan Barcode",
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: t,
                        disabled: p || y,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",
                        children: i.jsx(rr, { size: 24 }),
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "flex-1 overflow-y-auto p-4",
                    children: i.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        i.jsx("form", {
                          onSubmit: zt,
                          children: i.jsxs("div", {
                            children: [
                              i.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children:
                                  s === "zh"
                                    ? "請掃描條碼或手動輸入"
                                    : "Scan barcode or enter manually",
                              }),
                              i.jsxs("div", {
                                className: "relative",
                                children: [
                                  i.jsx("input", {
                                    ref: w,
                                    type: "text",
                                    value: o,
                                    onChange: (L) => a(L.target.value),
                                    disabled: p || y,
                                    className:
                                      "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-lg",
                                    placeholder:
                                      s === "zh"
                                        ? "條碼內容"
                                        : "Barcode content",
                                    autoComplete: "off",
                                  }),
                                  i.jsx("button", {
                                    type: "button",
                                    onClick: () => c(!0),
                                    disabled: p || y,
                                    className:
                                      "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    title:
                                      s === "zh"
                                        ? "開啟相機掃描"
                                        : "Open camera scanner",
                                    children: i.jsx(mi, { size: 20 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                          children: [
                            i.jsxs("div", {
                              children: [
                                i.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "申領單位",
                                }),
                                i.jsxs("select", {
                                  value: g,
                                  onChange: (L) => {
                                    const C = L.target.value;
                                    (j(C),
                                      localStorage.setItem(
                                        "barcodeScannerDestinationWarehouse",
                                        C,
                                      ));
                                  },
                                  disabled: y,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                  children: [
                                    i.jsx("option", {
                                      value: "",
                                      children: "請選擇申領單位",
                                    }),
                                    r.map((L) =>
                                      i.jsx(
                                        "option",
                                        {
                                          value: L.displayName,
                                          children: L.displayName,
                                        },
                                        L.GUID,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: "核撥單位",
                                }),
                                i.jsxs("select", {
                                  value: f,
                                  onChange: (L) => {
                                    const C = L.target.value;
                                    (d(C),
                                      localStorage.setItem(
                                        "barcodeScannerSourceWarehouse",
                                        C,
                                      ));
                                  },
                                  disabled: y,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                  children: [
                                    i.jsx("option", {
                                      value: "",
                                      children: "請選擇核撥單位",
                                    }),
                                    r.map((L) =>
                                      i.jsx(
                                        "option",
                                        {
                                          value: L.displayName,
                                          children: L.displayName,
                                        },
                                        L.GUID,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        p &&
                          i.jsxs("div", {
                            className:
                              "flex items-center justify-center gap-2 text-blue-600 py-4",
                            children: [
                              i.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600",
                              }),
                              i.jsx("span", {
                                className: "text-sm font-medium",
                                children:
                                  s === "zh" ? "處理中..." : "Processing...",
                              }),
                            ],
                          }),
                        v &&
                          i.jsxs(i.Fragment, {
                            children: [
                              i.jsx("div", {
                                ref: U,
                                className:
                                  "bg-blue-50 rounded-lg border border-blue-200 p-4",
                                children: i.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    i.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900",
                                      children: v.NAME,
                                    }),
                                    v.CHT_NAME &&
                                      i.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: v.CHT_NAME,
                                      }),
                                    i.jsxs("div", {
                                      className: "text-sm text-gray-600",
                                      children: [
                                        "藥碼: ",
                                        v.CODE,
                                        v.SKDIACODE &&
                                          i.jsxs("span", {
                                            className: "ml-4",
                                            children: ["料號: ", v.SKDIACODE],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              i.jsxs("div", {
                                className:
                                  "bg-gray-50 rounded-lg border border-gray-200 p-3",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700 mb-2",
                                    children: "申領單位庫存資訊",
                                  }),
                                  v && g
                                    ? ae
                                      ? i.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-2",
                                          children: [
                                            i.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600",
                                            }),
                                            i.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : z
                                        ? i.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between",
                                                children: [
                                                  i.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-4 text-sm",
                                                    children: [
                                                      i.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          i.jsx(wt, {
                                                            size: 16,
                                                            className:
                                                              "text-blue-600",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              "撥補單位:",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-900",
                                                            children: g,
                                                          }),
                                                        ],
                                                      }),
                                                      i.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          i.jsx(wt, {
                                                            size: 16,
                                                            className:
                                                              "text-green-600",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children: "總庫存:",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-900",
                                                            children:
                                                              z.qty.reduce(
                                                                (L, C) =>
                                                                  L +
                                                                  parseInt(
                                                                    C || "0",
                                                                  ),
                                                                0,
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  z.lot.length > 0 &&
                                                    i.jsxs("button", {
                                                      type: "button",
                                                      onClick: () => O(!A),
                                                      className:
                                                        "flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700",
                                                      children: [
                                                        "批號明細",
                                                        A
                                                          ? i.jsx(Au, {
                                                              size: 16,
                                                            })
                                                          : i.jsx(Ru, {
                                                              size: 16,
                                                            }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              A &&
                                                z.lot.length > 0 &&
                                                i.jsx("div", {
                                                  className:
                                                    "space-y-1 max-h-32 overflow-y-auto mt-2",
                                                  children: z.lot.map((L, C) =>
                                                    i.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-white rounded border border-gray-200 p-2 text-xs flex items-center gap-4",
                                                        children: [
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(ms, {
                                                                size: 14,
                                                                className:
                                                                  "text-purple-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "批號:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children:
                                                                  L || "無",
                                                              }),
                                                            ],
                                                          }),
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(ps, {
                                                                size: 14,
                                                                className:
                                                                  "text-green-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "效期:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children: Oe(
                                                                  z.expiry_date[
                                                                    C
                                                                  ] || "",
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(wt, {
                                                                size: 14,
                                                                className:
                                                                  "text-blue-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "數量:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children:
                                                                  z.qty[C] ||
                                                                  "0",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      C,
                                                    ),
                                                  ),
                                                }),
                                            ],
                                          })
                                        : i.jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "無庫存資訊",
                                          })
                                    : i.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: "請選擇藥品和申領單位",
                                      }),
                                ],
                              }),
                              i.jsxs("div", {
                                className:
                                  "bg-gray-50 rounded-lg border border-gray-200 p-3",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700 mb-2",
                                    children: "撥補單位庫存資訊",
                                  }),
                                  v && f
                                    ? Y
                                      ? i.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-2",
                                          children: [
                                            i.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600",
                                            }),
                                            i.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : E
                                        ? i.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between",
                                                children: [
                                                  i.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-4 text-sm",
                                                    children: [
                                                      i.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          i.jsx(wt, {
                                                            size: 16,
                                                            className:
                                                              "text-blue-600",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              "撥補單位:",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-900",
                                                            children: f,
                                                          }),
                                                        ],
                                                      }),
                                                      i.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          i.jsx(wt, {
                                                            size: 16,
                                                            className:
                                                              "text-green-600",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children: "總庫存:",
                                                          }),
                                                          i.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-900",
                                                            children:
                                                              E.qty.reduce(
                                                                (L, C) =>
                                                                  L +
                                                                  parseInt(
                                                                    C || "0",
                                                                  ),
                                                                0,
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  E.lot.length > 0 &&
                                                    i.jsxs("button", {
                                                      type: "button",
                                                      onClick: () => F(!$),
                                                      className:
                                                        "flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700",
                                                      children: [
                                                        "批號明細",
                                                        $
                                                          ? i.jsx(Au, {
                                                              size: 16,
                                                            })
                                                          : i.jsx(Ru, {
                                                              size: 16,
                                                            }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              $ &&
                                                E.lot.length > 0 &&
                                                i.jsx("div", {
                                                  className:
                                                    "space-y-1 max-h-32 overflow-y-auto mt-2",
                                                  children: E.lot.map((L, C) =>
                                                    i.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-white rounded border border-gray-200 p-2 text-xs flex items-center gap-4",
                                                        children: [
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(ms, {
                                                                size: 14,
                                                                className:
                                                                  "text-purple-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "批號:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children:
                                                                  L || "無",
                                                              }),
                                                            ],
                                                          }),
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(ps, {
                                                                size: 14,
                                                                className:
                                                                  "text-green-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "效期:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children: Oe(
                                                                  E.expiry_date[
                                                                    C
                                                                  ] || "",
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          i.jsxs("div", {
                                                            className:
                                                              "flex items-center gap-1",
                                                            children: [
                                                              i.jsx(wt, {
                                                                size: 14,
                                                                className:
                                                                  "text-blue-600",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "text-gray-600",
                                                                children:
                                                                  "數量:",
                                                              }),
                                                              i.jsx("span", {
                                                                className:
                                                                  "font-medium",
                                                                children:
                                                                  E.qty[C] ||
                                                                  "0",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      C,
                                                    ),
                                                  ),
                                                }),
                                            ],
                                          })
                                        : i.jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children: "無庫存資訊",
                                          })
                                    : i.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: "請選擇藥品和核撥單位",
                                      }),
                                ],
                              }),
                              i.jsxs("div", {
                                children: [
                                  i.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "撥補數量",
                                  }),
                                  i.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      i.jsx("input", {
                                        type: "text",
                                        value: S,
                                        onClick: () => N(!0),
                                        onChange: (L) => {
                                          const C = L.target.value;
                                          (C === "" || /^\d+$/.test(C)) && b(C);
                                        },
                                        disabled: y,
                                        className:
                                          "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                                        placeholder: "請輸入數量",
                                        readOnly: !0,
                                      }),
                                      (v == null ? void 0 : v.MIN_PAKAGE) &&
                                        i.jsx("span", {
                                          className:
                                            "text-sm font-medium text-gray-700 whitespace-nowrap",
                                          children: v.MIN_PAKAGE,
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
                  i.jsxs("div", {
                    className:
                      "flex gap-3 p-4 border-t border-gray-200 flex-shrink-0",
                    children: [
                      i.jsx("button", {
                        type: "button",
                        onClick: ke,
                        disabled: y,
                        className:
                          "flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium",
                        children: "清除",
                      }),
                      i.jsx("button", {
                        type: "button",
                        onClick: Z,
                        disabled: y || !v || !f || !g || !S,
                        className:
                          "flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium",
                        children: y ? "處理中..." : "建立撥補單",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : null;
  },
  Hy = ({ isOpen: e, onClose: t, onUpload: n, isUploading: r }) => {
    it();
    const [l, s] = h.useState(!1),
      [o, a] = h.useState(null),
      u = h.useRef(null);
    if (!e) return null;
    const c = (k) => {
        (k.preventDefault(), s(!0));
      },
      p = (k) => {
        (k.preventDefault(), s(!1));
      },
      m = (k) => {
        (k.preventDefault(), s(!1));
        const f = k.dataTransfer.files;
        if (f.length > 0) {
          const d = f[0];
          x(d) && a(d);
        }
      },
      y = (k) => {
        const f = k.target.files;
        if (f && f.length > 0) {
          const d = f[0];
          x(d) && a(d);
        }
      },
      x = (k) => {
        const f = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel.sheet.macroEnabled.12",
          ],
          d = [".xls", ".xlsx", ".xlsm"];
        return (
          f.includes(k.type) || d.some((g) => k.name.toLowerCase().endsWith(g))
        );
      },
      w = async () => {
        o && !r && (await n(o), a(null));
      },
      v = () => {
        r || (a(null), t());
      };
    return i.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",
      children: i.jsxs("div", {
        className: "bg-white rounded-xl shadow-2xl w-full max-w-md",
        children: [
          i.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
              i.jsx("h2", {
                className: "text-xl font-semibold text-gray-900",
                children: "上傳撥補單",
              }),
              i.jsx("button", {
                onClick: v,
                disabled: r,
                className:
                  "text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",
                children: i.jsx(rr, { size: 24 }),
              }),
            ],
          }),
          i.jsxs("div", {
            className: "p-6",
            children: [
              i.jsxs("div", {
                onDragOver: c,
                onDragLeave: p,
                onDrop: m,
                onClick: () => {
                  var k;
                  return (k = u.current) == null ? void 0 : k.click();
                },
                className: `
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              transition-all duration-200
              ${l ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}
              ${r ? "opacity-50 cursor-not-allowed" : ""}
            `,
                children: [
                  i.jsx("input", {
                    ref: u,
                    type: "file",
                    accept: ".xls,.xlsx,.xlsm",
                    onChange: y,
                    disabled: r,
                    className: "hidden",
                  }),
                  o
                    ? i.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          i.jsx(ff, {
                            size: 48,
                            className: "mx-auto text-green-600",
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("p", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: o.name,
                              }),
                              i.jsxs("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: [(o.size / 1024).toFixed(2), " KB"],
                              }),
                            ],
                          }),
                        ],
                      })
                    : i.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          i.jsx(Uu, {
                            size: 48,
                            className: "mx-auto text-gray-400",
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("p", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: "拖拽文件到此處或點擊選擇",
                              }),
                              i.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "支援格式: .xls, .xlsx, .xlsm",
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
              o &&
                i.jsxs("div", {
                  className: "mt-6 flex gap-3",
                  children: [
                    i.jsx("button", {
                      onClick: (k) => {
                        (k.stopPropagation(), a(null));
                      },
                      disabled: r,
                      className:
                        "flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消選擇",
                    }),
                    i.jsx("button", {
                      onClick: (k) => {
                        (k.stopPropagation(), w());
                      },
                      disabled: r,
                      className:
                        "flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: r
                        ? i.jsxs(i.Fragment, {
                            children: [
                              i.jsx(N0, {
                                size: 18,
                                className: "animate-spin",
                              }),
                              i.jsx("span", { children: "上傳中..." }),
                            ],
                          })
                        : i.jsxs(i.Fragment, {
                            children: [
                              i.jsx(Uu, { size: 18 }),
                              i.jsx("span", { children: "上傳" }),
                            ],
                          }),
                    }),
                  ],
                }),
            ],
          }),
          i.jsx("div", {
            className: "px-6 pb-6",
            children: i.jsx("div", {
              className: "bg-blue-50 rounded-lg p-4 border border-blue-200",
              children: i.jsxs("p", {
                className: "text-sm text-blue-800",
                children: [
                  i.jsx("strong", { children: "提示：" }),
                  "請確保 Excel 文件格式正確，包含所有必要的欄位資訊。",
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  Wy = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
    onRefreshOrders: s,
  }) => {
    const { t: o } = it(),
      [a, u] = h.useState(""),
      [c, p] = h.useState([]),
      [m, y] = h.useState(null),
      [x, w] = h.useState(""),
      [v, k] = h.useState(""),
      [f, d] = h.useState(""),
      [g, j] = h.useState(!1),
      [S, b] = h.useState(!1),
      [E, D] = h.useState(!1),
      [z, _] = h.useState(!1),
      [Y, W] = h.useState(null),
      [ae, ye] = h.useState(null),
      [V, Q] = h.useState(null),
      [X, T] = h.useState(null),
      [$, F] = h.useState(!1),
      [A, O] = h.useState(!1);
    h.useEffect(() => {
      l > 0 && (u(""), p([]), y(null), d(""), Q(null), T(null), W(null));
    }, [l]);
    const J = (C) => {
        const I = C.target.value;
        if ((u(I), !I.trim())) {
          p([]);
          return;
        }
        const ce = I.toLowerCase(),
          He = e
            .filter((be) => {
              var jt;
              return (
                be.NAME.toLowerCase().includes(ce) ||
                be.CODE.toLowerCase().includes(ce) ||
                be.CHT_NAME.toLowerCase().includes(ce) ||
                ((jt = be.SKDIACODE) == null
                  ? void 0
                  : jt.toLowerCase().includes(ce))
              );
            })
            .slice(0, 10);
        p(He);
      },
      N = (C) => {
        (y(C), u(""), p([]), Q(null), T(null), j(!0));
      },
      U = async (C, I, ce) => {
        var He;
        ce ? F(!0) : O(!0);
        try {
          const jt =
            ((He = (
              await tt("/api/stock/get_stock_by_code", {
                method: "POST",
                body: {
                  ServerName: I.name === "DS01" ? "藥庫" : I.name,
                  ServerType: I.type,
                  ValueAry: [C],
                },
              })
            ).Data) == null
              ? void 0
              : He[0]) || null;
          ce ? Q(jt) : T(jt);
        } catch (be) {
          (console.error("Error fetching new stock data:", be),
            ce ? Q(null) : T(null));
        } finally {
          ce ? F(!1) : O(!1);
        }
      };
    (h.useEffect(() => {
      if (m && x) {
        const C = t.find((I) => I.displayName === x);
        C && U(m.CODE, C, !0);
      } else Q(null);
    }, [m, x]),
      h.useEffect(() => {
        if (m && v) {
          const C = t.find((I) => I.displayName === v);
          C && U(m.CODE, C, !1);
        } else T(null);
      }, [m, v]));
    const q = (C) => {
        const I = C.target.value;
        (w(I), I === v && I !== "" && W("來源庫別與目的庫別不能相同"));
      },
      ke = (C) => {
        const I = C.target.value;
        (k(I), I === x && I !== "" && W("來源庫別與目的庫別不能相同"));
      },
      zt = (C) => {
        const I = C.target.value;
        (I === "" || /^\d+$/.test(I)) && d(I);
      },
      je = async (C) => {
        (_(!0), D(!1));
        try {
          const I = ka() || "",
            ce = await Ny(C, I);
          (console.log("Excel upload response:", ce),
            ce.Code === 200
              ? (ye("Excel 上傳成功"), s == null || s())
              : W("Excel 上傳失敗"));
        } catch (I) {
          (console.error("Excel upload error:", I),
            W("Excel 上傳失敗，請稍後再試"));
        } finally {
          _(!1);
        }
      },
      at = async (C) => {
        if ((C && C.preventDefault(), !m)) {
          W("請選擇藥品");
          return;
        }
        if (!x) {
          W("請選擇來源庫別");
          return;
        }
        if (!v) {
          W("請選擇目的庫別");
          return;
        }
        if (!f) {
          W("請輸入撥補數量");
          return;
        }
        if (x === v) {
          W("來源庫別與目的庫別不能相同");
          return;
        }
        await n({
          drug: m,
          sourceWarehouse: x,
          destinationWarehouse: v,
          quantity: f,
          sourceStockInfo: V,
          destinationStockInfo: X,
        });
      },
      Z = (C) => {
        C.key === "Enter" && a && c.length > 0 && N(c[0]);
      },
      Oe = (C) => (!C || C === "2050/01/01" ? "無期限" : C),
      L = () =>
        V && V.qty.length > 0
          ? V.qty.reduce((C, I) => C + parseInt(I || "0"), 0).toString()
          : null;
    return i.jsxs(i.Fragment, {
      children: [
        Y &&
          i.jsx(tl, {
            message: Y,
            onClose: () => W(null),
            duration: 3e3,
            type: "error",
          }),
        ae &&
          i.jsx(tl, {
            message: ae,
            onClose: () => ye(null),
            duration: 3e3,
            type: "success",
          }),
        i.jsx(Ay, {
          isOpen: S,
          onClose: () => b(!1),
          drugs: e,
          warehouses: t,
          onRefreshOrders: s,
        }),
        i.jsx(Hy, {
          isOpen: E,
          onClose: () => D(!1),
          onUpload: je,
          isUploading: z,
        }),
        i.jsxs("form", {
          onSubmit: at,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    i.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        i.jsx("input", {
                          type: "text",
                          value: a,
                          onChange: J,
                          onKeyPress: Z,
                          placeholder: o("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        i.jsx(mf, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    i.jsxs("button", {
                      type: "button",
                      onClick: () => b(!0),
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap",
                      children: [
                        i.jsx(pf, { size: 18 }),
                        i.jsx("span", {
                          className: "hidden sm:inline",
                          children: o("app.button.scan"),
                        }),
                      ],
                    }),
                    i.jsxs("button", {
                      type: "button",
                      onClick: () => D(!0),
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap",
                      children: [
                        i.jsx(ff, { size: 18 }),
                        i.jsx("span", {
                          className: "hidden sm:inline",
                          children: "上傳撥補單",
                        }),
                      ],
                    }),
                  ],
                }),
                c.length > 0 &&
                  i.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: c.map((C) =>
                      i.jsxs(
                        "div",
                        {
                          onClick: () => N(C),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            i.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: C.NAME,
                            }),
                            i.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", C.CODE],
                            }),
                            C.SKDIACODE &&
                              i.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", C.SKDIACODE],
                              }),
                            C.CHT_NAME &&
                              i.jsx("div", {
                                className: "text-base text-gray-600",
                                children: C.CHT_NAME,
                              }),
                          ],
                        },
                        C.GUID,
                      ),
                    ),
                  }),
              ],
            }),
            i.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                i.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    i.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.drug.name"),
                    }),
                    i.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: m
                        ? i.jsxs("div", {
                            className: "p-4",
                            children: [
                              i.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: m.NAME,
                              }),
                              m.SKDIACODE &&
                                i.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", m.SKDIACODE],
                                }),
                              m.CHT_NAME &&
                                i.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: m.CHT_NAME,
                                }),
                            ],
                          })
                        : i.jsx("div", {
                            className: "p-4",
                            children: i.jsx("div", {
                              className: "text-base text-gray-600",
                              children: o("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    i.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.drug.code"),
                    }),
                    i.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: m
                        ? i.jsx("div", {
                            className: "p-4",
                            children: i.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: m.CODE,
                            }),
                          })
                        : i.jsx("div", {
                            className: "p-4",
                            children: i.jsx("div", {
                              className: "text-base text-gray-600",
                              children: o("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                i.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    i.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.store.source"),
                    }),
                    i.jsxs("select", {
                      value: x,
                      onChange: q,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        i.jsx("option", {
                          value: "",
                          children: o("app.store.source.placeholder"),
                        }),
                        t.map((C) =>
                          i.jsx(
                            "option",
                            { value: C.displayName, children: C.displayName },
                            C.GUID,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    i.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: o("app.store.destination"),
                    }),
                    i.jsxs("select", {
                      value: v,
                      onChange: ke,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        i.jsx("option", {
                          value: "",
                          children: o("app.store.destination.placeholder"),
                        }),
                        t.map((C) =>
                          i.jsx(
                            "option",
                            { value: C.displayName, children: C.displayName },
                            C.GUID,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m &&
              x &&
              i.jsxs("div", {
                className: "space-y-4",
                children: [
                  i.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "來源庫別庫存明細",
                  }),
                  i.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: $
                      ? i.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            i.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            i.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : V
                        ? i.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              i.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                                children: [
                                  i.jsx(wt, {
                                    size: 18,
                                    className: "text-blue-600",
                                  }),
                                  "總庫存: ",
                                  V.qty.reduce(
                                    (C, I) => C + parseInt(I || "0"),
                                    0,
                                  ),
                                ],
                              }),
                              V.lot.length > 0
                                ? i.jsx("div", {
                                    className: "space-y-2",
                                    children: V.lot.map((C, I) =>
                                      i.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white rounded-lg border border-gray-200 p-3",
                                          children: i.jsxs("div", {
                                            className:
                                              "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(ms, {
                                                    size: 16,
                                                    className:
                                                      "text-purple-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "批號:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: C || "無",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(ps, {
                                                    size: 16,
                                                    className: "text-green-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "效期:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: Oe(
                                                      V.expiry_date[I] || "",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(wt, {
                                                    size: 16,
                                                    className: "text-blue-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "數量:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: V.qty[I] || "0",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        I,
                                      ),
                                    ),
                                  })
                                : i.jsx("div", {
                                    className: "text-base text-gray-600",
                                    children: "無批號資訊",
                                  }),
                            ],
                          })
                        : i.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "請選擇藥品和來源庫別以查看庫存資訊",
                          }),
                  }),
                ],
              }),
            m &&
              v &&
              i.jsxs("div", {
                className: "space-y-4",
                children: [
                  i.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "目的庫別庫存明細",
                  }),
                  i.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: A
                      ? i.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            i.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            i.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : X
                        ? i.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              i.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                                children: [
                                  i.jsx(wt, {
                                    size: 18,
                                    className: "text-blue-600",
                                  }),
                                  "總庫存: ",
                                  X.qty.reduce(
                                    (C, I) => C + parseInt(I || "0"),
                                    0,
                                  ),
                                ],
                              }),
                              X.lot.length > 0
                                ? i.jsx("div", {
                                    className: "space-y-2",
                                    children: X.lot.map((C, I) =>
                                      i.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white rounded-lg border border-gray-200 p-3",
                                          children: i.jsxs("div", {
                                            className:
                                              "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(ms, {
                                                    size: 16,
                                                    className:
                                                      "text-purple-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "批號:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: C || "無",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(ps, {
                                                    size: 16,
                                                    className: "text-green-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "效期:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: Oe(
                                                      X.expiry_date[I] || "",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  i.jsx(wt, {
                                                    size: 16,
                                                    className: "text-blue-600",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "數量:",
                                                  }),
                                                  i.jsx("span", {
                                                    className: "font-medium",
                                                    children: X.qty[I] || "0",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        I,
                                      ),
                                    ),
                                  })
                                : i.jsx("div", {
                                    className: "text-base text-gray-600",
                                    children: "無批號資訊",
                                  }),
                            ],
                          })
                        : i.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "請選擇藥品和目的庫別以查看庫存資訊",
                          }),
                  }),
                ],
              }),
            i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: o("app.quantity"),
                }),
                i.jsxs("div", {
                  className: "flex gap-4 items-center flex-wrap",
                  children: [
                    i.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        i.jsx("input", {
                          type: "text",
                          value: f,
                          onChange: zt,
                          onClick: () => j(!0),
                          placeholder: o("app.quantity.placeholder"),
                          className:
                            "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                        }),
                        (m == null ? void 0 : m.MIN_PAKAGE) &&
                          i.jsx("span", {
                            className: "text-base font-medium text-gray-700",
                            children: m.MIN_PAKAGE,
                          }),
                      ],
                    }),
                    L() &&
                      i.jsxs("span", {
                        className: `text-base font-medium ${parseInt(L()) > 0 ? "text-green-600" : "text-red-600"}`,
                        children: [o("app.quantity.available"), ": ", L()],
                      }),
                  ],
                }),
              ],
            }),
            g &&
              i.jsx(Sa, {
                value: f,
                onChange: d,
                onClose: () => j(!1),
                title: "請輸入撥補量",
              }),
            i.jsx("button", {
              type: "submit",
              disabled: r || (x && v && x === v),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${r || (x && v && x === v) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"}`,
              children: o(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  Uy = ({ className: e = "" }) => {
    const { t } = it();
    return i.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: i.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: i.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function By() {
  it();
  const [e, t] = h.useState(!1),
    [n, r] = h.useState(!0),
    [l, s] = h.useState([]),
    [o, a] = h.useState([]),
    [u, c] = h.useState(null),
    [p, m] = h.useState(!1),
    [y, x] = h.useState(!1),
    [w, v] = h.useState(!1),
    [k, f] = h.useState(!1),
    [d, g] = h.useState(null),
    [j, S] = h.useState([]),
    [b, E] = h.useState(() => {
      const O = new Date();
      return (O.setHours(0, 0, 0, 0), O);
    }),
    [D, z] = h.useState(() => {
      const O = new Date();
      return (O.setHours(23, 59, 59, 999), O);
    }),
    [_, Y] = h.useState(!1),
    [W, ae] = h.useState(0);
  (h.useEffect(() => {
    (async () => {
      try {
        (await xy(), x(!0));
        const J = Ty();
        t(J);
      } catch (J) {
        (console.error("Error during initialization:", J),
          c("系統初始化失敗，請重新整理頁面"));
      } finally {
        r(!1);
      }
    })();
  }, []),
    h.useEffect(() => {
      e && y && (V(), ye(), Q());
    }, [e, y]));
  const ye = async () => {
      try {
        const J = (
          await tt("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((N) => N.FILE_STATUS !== "關檔中");
        (s(J), c(null));
      } catch (O) {
        (console.error("Error fetching drugs:", O),
          c("無法取得藥品資料，請稍後再試"),
          s([]));
      }
    },
    V = async () => {
      try {
        const O = await tt("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!O || !O.Data) throw new Error("Invalid response format");
        const J = O.Data.map((N) => ({
          ...N,
          displayName: N.name === "DS01" ? "藥庫" : N.name,
        }));
        (a(J), c(null));
      } catch (O) {
        (console.error("Error fetching warehouses:", O),
          c("無法取得庫別資料，請稍後再試"),
          a([]));
      }
    },
    Q = async () => {
      Y(!0);
      try {
        const O = await tt("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              me(b, "yyyy-MM-dd HH:mm:ss"),
              me(D, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        (S(O.Data), c(null));
      } catch (O) {
        (console.error("Error fetching orders:", O),
          c("無法取得撥補單資料，請稍後再試"),
          S([]));
      } finally {
        Y(!1);
      }
    },
    X = (O, J) => {
      (E(O), z(J), Q());
    },
    T = async (O) => {
      var ke, zt;
      (m(!0), c(null));
      const J = ka(),
        N =
          ((ke = O.sourceStockInfo) == null
            ? void 0
            : ke.qty
                .reduce((je, at) => je + parseInt(at || "0"), 0)
                .toString()) || "",
        U =
          ((zt = O.destinationStockInfo) == null
            ? void 0
            : zt.qty
                .reduce((je, at) => je + parseInt(at || "0"), 0)
                .toString()) || "",
        q = {
          sourceStoreType:
            O.sourceWarehouse === "藥庫" ? "DS01" : O.sourceWarehouse,
          destinationStoreType:
            O.destinationWarehouse === "藥庫" ? "DS01" : O.destinationWarehouse,
          code: O.drug.CODE,
          name: O.drug.NAME,
          sourceStoreInventory: N,
          destinationStoreInventory: U,
          issuedQuantity: O.quantity,
          reportName: J || "",
          state: "等待過帳",
          LOT: "",
          VAL: "",
          packageUnit: O.drug.MIN_PAKAGE || "",
        };
      try {
        const je = await tt("/api/drugStotreDistribution/add", {
          method: "POST",
          body: { Data: [q] },
        });
        if (je.Code === 200) (v(!0), c(null), Q(), ae((at) => at + 1));
        else throw new Error(je.Result || "建立撥補單失敗");
      } catch (je) {
        (console.error("Error creating order:", je),
          c("建立撥補單失敗，請稍後再試"));
      } finally {
        m(!1);
      }
    },
    $ = async () => {
      d && (await T(d), g(null));
    },
    F = async (O) => {
      var N;
      (((N = O.sourceStockInfo) == null
        ? void 0
        : N.qty.reduce((U, q) => U + parseInt(q || "0"), 0)) || 0) === 0
        ? (g(O), f(!0))
        : await T(O);
    },
    A = () => {
      (xs(), t(!1));
    };
  return n
    ? i.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: i.jsxs("div", {
          className: "text-center",
          children: [
            i.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            i.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
      ? i.jsxs("div", {
          className: "min-h-screen flex flex-col",
          children: [
            i.jsx(Fy, { onLogout: A }),
            w &&
              i.jsx(tl, {
                message: "app.toast.success",
                onClose: () => v(!1),
                duration: 3e3,
              }),
            i.jsx("main", {
              className: "flex-grow flex flex-col bg-white",
              children: i.jsxs("div", {
                className: "w-full px-4 py-8 pb-24",
                children: [
                  i.jsx(Wy, {
                    drugs: l,
                    warehouses: o,
                    onSubmit: F,
                    isSubmitting: p,
                    resetTrigger: W,
                    onRefreshOrders: Q,
                  }),
                  i.jsx("div", {
                    className: "mt-8",
                    children: i.jsx(Ey, {
                      orders: j,
                      startDate: b,
                      endDate: D,
                      onDateChange: X,
                      isLoading: _,
                    }),
                  }),
                ],
              }),
            }),
            i.jsx($y, {
              isOpen: k,
              title: "確認建立撥補單",
              message: "來源庫存為 0，是否仍要建立撥補單？",
              confirmText: "確認建立",
              cancelText: "取消",
              onConfirm: async () => {
                (f(!1), await $());
              },
              onCancel: () => f(!1),
              isProcessing: p,
            }),
            i.jsx(Uy, {}),
          ],
        })
      : i.jsx(Py, { onLogin: () => t(!0) });
}
of(document.getElementById("root")).render(
  i.jsx(h.StrictMode, { children: i.jsx(jy, { children: i.jsx(By, {}) }) }),
);
