function Tf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
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
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function bf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var zu = { exports: {} },
  pi = {},
  Iu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for("react.element"),
  Of = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  _f = Symbol.for("react.strict_mode"),
  Lf = Symbol.for("react.profiler"),
  Mf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  Ff = Symbol.for("react.forward_ref"),
  Rf = Symbol.for("react.suspense"),
  zf = Symbol.for("react.memo"),
  If = Symbol.for("react.lazy"),
  xa = Symbol.iterator;
function Af(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Au = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uu = Object.assign,
  Hu = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hu),
    (this.updater = n || Au);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wu() {}
Wu.prototype = Zn.prototype;
function ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hu),
    (this.updater = n || Au);
}
var vs = (ys.prototype = new Wu());
vs.constructor = ys;
Uu(vs, Zn.prototype);
vs.isPureReactComponent = !0;
var wa = Array.isArray,
  qu = Object.prototype.hasOwnProperty,
  xs = { current: null },
  Bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qu.call(t, r) && !Bu.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Kr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xs.current,
  };
}
function Uf(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ws(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function Hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sa = /\/+/g;
function Fi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Hf("" + e.key)
    : t.toString(36);
}
function Nl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case Of:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Fi(o, 0) : r),
      wa(l)
        ? ((n = ""),
          e != null && (n = e.replace(Sa, "$&/") + "/"),
          Nl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ws(l) &&
            (l = Uf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Sa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), wa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Fi(i, s);
      o += Nl(i, t, n, u, l);
    }
  else if (((u = Af(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Fi(i, s++)), (o += Nl(i, t, n, u, l));
  else if (i === "object")
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
  return o;
}
function ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Nl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Wf(e) {
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
  El = { transition: null },
  qf = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: El,
    ReactCurrentOwner: xs,
  };
function Vu() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: ll,
  forEach: function (e, t, n) {
    ll(
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
      ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ws(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Zn;
I.Fragment = Df;
I.Profiler = Lf;
I.PureComponent = ys;
I.StrictMode = _f;
I.Suspense = Rf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
I.act = Vu;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Uu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = xs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      qu.call(t, u) &&
        !Bu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Kr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: $f,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mf, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Qu;
I.createFactory = function (e) {
  var t = Qu.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Ff, render: e };
};
I.isValidElement = ws;
I.lazy = function (e) {
  return { $$typeof: If, _payload: { _status: -1, _result: e }, _init: Wf };
};
I.memo = function (e, t) {
  return { $$typeof: zf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = El.transition;
  El.transition = {};
  try {
    e();
  } finally {
    El.transition = t;
  }
};
I.unstable_act = Vu;
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
Iu.exports = I;
var g = Iu.exports;
const F = bf(g),
  Dr = Tf({ __proto__: null, default: F }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bf = g,
  Qf = Symbol.for("react.element"),
  Vf = Symbol.for("react.fragment"),
  Yf = Object.prototype.hasOwnProperty,
  Gf = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Yf.call(t, r) && !Kf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Qf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Gf.current,
  };
}
pi.Fragment = Vf;
pi.jsx = Yu;
pi.jsxs = Yu;
zu.exports = pi;
var a = zu.exports,
  Gu = { exports: {} },
  He = {},
  Ku = { exports: {} },
  Xu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, k) {
    var D = T.length;
    T.push(k);
    e: for (; 0 < D; ) {
      var R = (D - 1) >>> 1,
        A = T[R];
      if (0 < l(A, k)) (T[R] = k), (T[D] = A), (D = R);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var k = T[0],
      D = T.pop();
    if (D !== k) {
      T[0] = D;
      e: for (var R = 0, A = T.length, $e = A >>> 1; R < $e; ) {
        var ee = 2 * (R + 1) - 1,
          ut = T[ee],
          Fe = ee + 1,
          ct = T[Fe];
        if (0 > l(ut, D))
          Fe < A && 0 > l(ct, ut)
            ? ((T[R] = ct), (T[Fe] = D), (R = Fe))
            : ((T[R] = ut), (T[ee] = D), (R = ee));
        else if (Fe < A && 0 > l(ct, D)) (T[R] = ct), (T[Fe] = D), (R = Fe);
        else break e;
      }
    }
    return k;
  }
  function l(T, k) {
    var D = T.sortIndex - k.sortIndex;
    return D !== 0 ? D : T.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    c = [],
    d = 1,
    m = null,
    y = 3,
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
  function p(T) {
    for (var k = n(c); k !== null; ) {
      if (k.callback === null) r(c);
      else if (k.startTime <= T)
        r(c), (k.sortIndex = k.expirationTime), t(u, k);
      else break;
      k = n(c);
    }
  }
  function v(T) {
    if (((S = !1), p(T), !x))
      if (n(u) !== null) (x = !0), we(N);
      else {
        var k = n(c);
        k !== null && ue(v, k.startTime - T);
      }
  }
  function N(T, k) {
    (x = !1), S && ((S = !1), h(b), (b = -1)), (w = !0);
    var D = y;
    try {
      for (
        p(k), m = n(u);
        m !== null && (!(m.expirationTime > k) || (T && !J()));

      ) {
        var R = m.callback;
        if (typeof R == "function") {
          (m.callback = null), (y = m.priorityLevel);
          var A = R(m.expirationTime <= k);
          (k = e.unstable_now()),
            typeof A == "function" ? (m.callback = A) : m === n(u) && r(u),
            p(k);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var $e = !0;
      else {
        var ee = n(c);
        ee !== null && ue(v, ee.startTime - k), ($e = !1);
      }
      return $e;
    } finally {
      (m = null), (y = D), (w = !1);
    }
  }
  var E = !1,
    P = null,
    b = -1,
    z = 5,
    L = -1;
  function J() {
    return !(e.unstable_now() - L < z);
  }
  function Q() {
    if (P !== null) {
      var T = e.unstable_now();
      L = T;
      var k = !0;
      try {
        k = P(!0, T);
      } finally {
        k ? Y() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var Y;
  if (typeof f == "function")
    Y = function () {
      f(Q);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      Z = re.port2;
    (re.port1.onmessage = Q),
      (Y = function () {
        Z.postMessage(null);
      });
  } else
    Y = function () {
      C(Q, 0);
    };
  function we(T) {
    (P = T), E || ((E = !0), Y());
  }
  function ue(T, k) {
    b = C(function () {
      T(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), we(N));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
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
          var k = 3;
          break;
        default:
          k = y;
      }
      var D = y;
      y = k;
      try {
        return T();
      } finally {
        y = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, k) {
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
      var D = y;
      y = T;
      try {
        return k();
      } finally {
        y = D;
      }
    }),
    (e.unstable_scheduleCallback = function (T, k, D) {
      var R = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? R + D : R))
          : (D = R),
        T)
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
        (A = D + A),
        (T = {
          id: d++,
          callback: k,
          priorityLevel: T,
          startTime: D,
          expirationTime: A,
          sortIndex: -1,
        }),
        D > R
          ? ((T.sortIndex = D),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (S ? (h(b), (b = -1)) : (S = !0), ue(v, D - R)))
          : ((T.sortIndex = A), t(u, T), x || w || ((x = !0), we(N))),
        T
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (T) {
      var k = y;
      return function () {
        var D = y;
        y = k;
        try {
          return T.apply(this, arguments);
        } finally {
          y = D;
        }
      };
    });
})(Xu);
Ku.exports = Xu;
var Xf = Ku.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = g,
  Ue = Xf;
function j(e) {
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
var Ju = new Set(),
  _r = {};
function kn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) Ju.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vo = Object.prototype.hasOwnProperty,
  Zf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ka = {},
  Na = {};
function ep(e) {
  return vo.call(Na, e)
    ? !0
    : vo.call(ka, e)
    ? !1
    : Zf.test(e)
    ? (Na[e] = !0)
    : ((ka[e] = !0), !1);
}
function tp(e, t, n, r) {
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
function np(e, t, n, r) {
  if (t === null || typeof t > "u" || tp(e, t, n, r)) return !0;
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
function be(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function ks(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ss, ks);
    xe[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ss, ks);
    xe[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ss, ks);
  xe[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ns(e, t, n, r) {
  var l = xe.hasOwnProperty(t) ? xe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (np(t, n, l, r) && (n = null),
    r || l === null
      ? ep(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ot = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  il = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  Es = Symbol.for("react.strict_mode"),
  xo = Symbol.for("react.profiler"),
  Zu = Symbol.for("react.provider"),
  ec = Symbol.for("react.context"),
  js = Symbol.for("react.forward_ref"),
  wo = Symbol.for("react.suspense"),
  So = Symbol.for("react.suspense_list"),
  Cs = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  tc = Symbol.for("react.offscreen"),
  Ea = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ea && e[Ea]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Ri;
function yr(e) {
  if (Ri === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ri = (t && t[1]) || "";
    }
  return (
    `
` +
    Ri +
    e
  );
}
var zi = !1;
function Ii(e, t) {
  if (!e || zi) return "";
  zi = !0;
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
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
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (zi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function rp(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ii(e.type, !1)), e;
    case 11:
      return (e = Ii(e.type.render, !1)), e;
    case 1:
      return (e = Ii(e.type, !0)), e;
    default:
      return "";
  }
}
function ko(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Tn:
      return "Portal";
    case xo:
      return "Profiler";
    case Es:
      return "StrictMode";
    case wo:
      return "Suspense";
    case So:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ec:
        return (e.displayName || "Context") + ".Consumer";
      case Zu:
        return (e._context.displayName || "Context") + ".Provider";
      case js:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Cs:
        return (
          (t = e.displayName || null), t !== null ? t : ko(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return ko(e(t));
        } catch {}
    }
  return null;
}
function lp(e) {
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
      return ko(t);
    case 8:
      return t === Es ? "StrictMode" : "Mode";
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
function Jt(e) {
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
function nc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ip(e) {
  var t = nc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
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
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ol(e) {
  e._valueTracker || (e._valueTracker = ip(e));
}
function rc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = nc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function No(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ja(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lc(e, t) {
  (t = t.checked), t != null && Ns(e, "checked", t, !1);
}
function Eo(e, t) {
  lc(e, t);
  var n = Jt(t.value),
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
    ? jo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && jo(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ca(e, t, n) {
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
function jo(e, t, n) {
  (t !== "number" || Fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function An(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function ic(e, t) {
  var n = Jt(t.value),
    r = Jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function oc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? oc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sl,
  sc = (function (e) {
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
        sl = sl || document.createElement("div"),
          sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
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
  op = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  op.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]);
  });
});
function ac(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function uc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ac(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var sp = oe(
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
function To(e, t) {
  if (t) {
    if (sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function bo(e, t) {
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
var Oo = null;
function Ps(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  Un = null,
  Hn = null;
function ba(e) {
  if ((e = Zr(e))) {
    if (typeof Do != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = vi(t)), Do(e.stateNode, e.type, t));
  }
}
function cc(e) {
  Un ? (Hn ? Hn.push(e) : (Hn = [e])) : (Un = e);
}
function dc() {
  if (Un) {
    var e = Un,
      t = Hn;
    if (((Hn = Un = null), ba(e), t)) for (e = 0; e < t.length; e++) ba(t[e]);
  }
}
function fc(e, t) {
  return e(t);
}
function pc() {}
var Ai = !1;
function mc(e, t, n) {
  if (Ai) return e(t, n);
  Ai = !0;
  try {
    return fc(e, t, n);
  } finally {
    (Ai = !1), (Un !== null || Hn !== null) && (pc(), dc());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vi(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var _o = !1;
if (Ct)
  try {
    var or = {};
    Object.defineProperty(or, "passive", {
      get: function () {
        _o = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or);
  } catch {
    _o = !1;
  }
function ap(e, t, n, r, l, i, o, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Nr = !1,
  Rl = null,
  zl = !1,
  Lo = null,
  up = {
    onError: function (e) {
      (Nr = !0), (Rl = e);
    },
  };
function cp(e, t, n, r, l, i, o, s, u) {
  (Nr = !1), (Rl = null), ap.apply(up, arguments);
}
function dp(e, t, n, r, l, i, o, s, u) {
  if ((cp.apply(this, arguments), Nr)) {
    if (Nr) {
      var c = Rl;
      (Nr = !1), (Rl = null);
    } else throw Error(j(198));
    zl || ((zl = !0), (Lo = c));
  }
}
function Nn(e) {
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
function hc(e) {
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
function Oa(e) {
  if (Nn(e) !== e) throw Error(j(188));
}
function fp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Oa(l), e;
        if (i === r) return Oa(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function gc(e) {
  return (e = fp(e)), e !== null ? yc(e) : null;
}
function yc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vc = Ue.unstable_scheduleCallback,
  Da = Ue.unstable_cancelCallback,
  pp = Ue.unstable_shouldYield,
  mp = Ue.unstable_requestPaint,
  ae = Ue.unstable_now,
  hp = Ue.unstable_getCurrentPriorityLevel,
  Ts = Ue.unstable_ImmediatePriority,
  xc = Ue.unstable_UserBlockingPriority,
  Il = Ue.unstable_NormalPriority,
  gp = Ue.unstable_LowPriority,
  wc = Ue.unstable_IdlePriority,
  mi = null,
  ht = null;
function yp(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var lt = Math.clz32 ? Math.clz32 : wp,
  vp = Math.log,
  xp = Math.LN2;
function wp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vp(e) / xp) | 0)) | 0;
}
var al = 64,
  ul = 4194304;
function xr(e) {
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
function Al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = xr(s)) : ((i &= o), i !== 0 && (r = xr(i)));
  } else (o = n & ~l), o !== 0 ? (r = xr(o)) : i !== 0 && (r = xr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Sp(e, t) {
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
function kp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - lt(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = Sp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sc() {
  var e = al;
  return (al <<= 1), !(al & 4194240) && (al = 64), e;
}
function Ui(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - lt(t)),
    (e[t] = n);
}
function Np(e, t) {
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
    var l = 31 - lt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function bs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function kc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nc,
  Os,
  Ec,
  jc,
  Cc,
  $o = !1,
  cl = [],
  qt = null,
  Bt = null,
  Qt = null,
  $r = new Map(),
  Fr = new Map(),
  zt = [],
  Ep =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Zr(t)), t !== null && Os(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function jp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (qt = sr(qt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Bt = sr(Bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Qt = sr(Qt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return $r.set(i, sr($r.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Fr.set(i, sr(Fr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Pc(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hc(n)), t !== null)) {
          (e.blockedOn = t),
            Cc(e.priority, function () {
              Ec(n);
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
function jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oo = r), n.target.dispatchEvent(r), (Oo = null);
    } else return (t = Zr(n)), t !== null && Os(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function La(e, t, n) {
  jl(e) && n.delete(t);
}
function Cp() {
  ($o = !1),
    qt !== null && jl(qt) && (qt = null),
    Bt !== null && jl(Bt) && (Bt = null),
    Qt !== null && jl(Qt) && (Qt = null),
    $r.forEach(La),
    Fr.forEach(La);
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $o ||
      (($o = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Cp)));
}
function Rr(e) {
  function t(l) {
    return ar(l, e);
  }
  if (0 < cl.length) {
    ar(cl[0], e);
    for (var n = 1; n < cl.length; n++) {
      var r = cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qt !== null && ar(qt, e),
      Bt !== null && ar(Bt, e),
      Qt !== null && ar(Qt, e),
      $r.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Pc(n), n.blockedOn === null && zt.shift();
}
var Wn = Ot.ReactCurrentBatchConfig,
  Ul = !0;
function Pp(e, t, n, r) {
  var l = B,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (B = 1), Ds(e, t, n, r);
  } finally {
    (B = l), (Wn.transition = i);
  }
}
function Tp(e, t, n, r) {
  var l = B,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (B = 4), Ds(e, t, n, r);
  } finally {
    (B = l), (Wn.transition = i);
  }
}
function Ds(e, t, n, r) {
  if (Ul) {
    var l = Fo(e, t, n, r);
    if (l === null) Xi(e, t, r, Hl, n), _a(e, r);
    else if (jp(l, e, t, n, r)) r.stopPropagation();
    else if ((_a(e, r), t & 4 && -1 < Ep.indexOf(e))) {
      for (; l !== null; ) {
        var i = Zr(l);
        if (
          (i !== null && Nc(i),
          (i = Fo(e, t, n, r)),
          i === null && Xi(e, t, r, Hl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Xi(e, t, r, null, n);
  }
}
var Hl = null;
function Fo(e, t, n, r) {
  if (((Hl = null), (e = Ps(r)), (e = an(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hl = e), null;
}
function Tc(e) {
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
      switch (hp()) {
        case Ts:
          return 1;
        case xc:
          return 4;
        case Il:
        case gp:
          return 16;
        case wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  _s = null,
  Cl = null;
function bc() {
  if (Cl) return Cl;
  var e,
    t = _s,
    n = t.length,
    r,
    l = "value" in Ut ? Ut.value : Ut.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Cl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Pl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dl() {
  return !0;
}
function Ma() {
  return !1;
}
function We(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dl
        : Ma),
      (this.isPropagationStopped = Ma),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dl));
      },
      persist: function () {},
      isPersistent: dl,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ls = We(er),
  Jr = oe({}, er, { view: 0, detail: 0 }),
  bp = We(Jr),
  Hi,
  Wi,
  ur,
  hi = oe({}, Jr, {
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
    getModifierState: Ms,
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
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((Hi = e.screenX - ur.screenX), (Wi = e.screenY - ur.screenY))
              : (Wi = Hi = 0),
            (ur = e)),
          Hi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wi;
    },
  }),
  $a = We(hi),
  Op = oe({}, hi, { dataTransfer: 0 }),
  Dp = We(Op),
  _p = oe({}, Jr, { relatedTarget: 0 }),
  qi = We(_p),
  Lp = oe({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mp = We(Lp),
  $p = oe({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fp = We($p),
  Rp = oe({}, er, { data: 0 }),
  Fa = We(Rp),
  zp = {
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
  Ip = {
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
  Ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ap[e]) ? !!t[e] : !1;
}
function Ms() {
  return Up;
}
var Hp = oe({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = zp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ip[e.keyCode] || "Unidentified"
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
    getModifierState: Ms,
    charCode: function (e) {
      return e.type === "keypress" ? Pl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Wp = We(Hp),
  qp = oe({}, hi, {
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
  Ra = We(qp),
  Bp = oe({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ms,
  }),
  Qp = We(Bp),
  Vp = oe({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = We(Vp),
  Gp = oe({}, hi, {
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
  Kp = We(Gp),
  Xp = [9, 13, 27, 32],
  $s = Ct && "CompositionEvent" in window,
  Er = null;
Ct && "documentMode" in document && (Er = document.documentMode);
var Jp = Ct && "TextEvent" in window && !Er,
  Oc = Ct && (!$s || (Er && 8 < Er && 11 >= Er)),
  za = " ",
  Ia = !1;
function Dc(e, t) {
  switch (e) {
    case "keyup":
      return Xp.indexOf(t.keyCode) !== -1;
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
function _c(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Zp(e, t) {
  switch (e) {
    case "compositionend":
      return _c(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ia = !0), za);
    case "textInput":
      return (e = t.data), e === za && Ia ? null : e;
    default:
      return null;
  }
}
function em(e, t) {
  if (On)
    return e === "compositionend" || (!$s && Dc(e, t))
      ? ((e = bc()), (Cl = _s = Ut = null), (On = !1), e)
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
      return Oc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tm = {
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
function Aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tm[e.type] : t === "textarea";
}
function Lc(e, t, n, r) {
  cc(r),
    (t = Wl(t, "onChange")),
    0 < t.length &&
      ((n = new Ls("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  zr = null;
function nm(e) {
  qc(e, 0);
}
function gi(e) {
  var t = Ln(e);
  if (rc(t)) return e;
}
function rm(e, t) {
  if (e === "change") return t;
}
var Mc = !1;
if (Ct) {
  var Bi;
  if (Ct) {
    var Qi = "oninput" in document;
    if (!Qi) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"),
        (Qi = typeof Ua.oninput == "function");
    }
    Bi = Qi;
  } else Bi = !1;
  Mc = Bi && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  jr && (jr.detachEvent("onpropertychange", $c), (zr = jr = null));
}
function $c(e) {
  if (e.propertyName === "value" && gi(zr)) {
    var t = [];
    Lc(t, zr, e, Ps(e)), mc(nm, t);
  }
}
function lm(e, t, n) {
  e === "focusin"
    ? (Ha(), (jr = t), (zr = n), jr.attachEvent("onpropertychange", $c))
    : e === "focusout" && Ha();
}
function im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gi(zr);
}
function om(e, t) {
  if (e === "click") return gi(t);
}
function sm(e, t) {
  if (e === "input" || e === "change") return gi(t);
}
function am(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : am;
function Ir(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vo.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function Wa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qa(e, t) {
  var n = Wa(e);
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
    n = Wa(n);
  }
}
function Fc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rc() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fl(e.document);
  }
  return t;
}
function Fs(e) {
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
function um(e) {
  var t = Rc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fs(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = qa(n, i));
        var o = qa(n, r);
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
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var cm = Ct && "documentMode" in document && 11 >= document.documentMode,
  Dn = null,
  Ro = null,
  Cr = null,
  zo = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo ||
    Dn == null ||
    Dn !== Fl(r) ||
    ((r = Dn),
    "selectionStart" in r && Fs(r)
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
    (Cr && Ir(Cr, r)) ||
      ((Cr = r),
      (r = Wl(Ro, "onSelect")),
      0 < r.length &&
        ((t = new Ls("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dn))));
}
function fl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _n = {
    animationend: fl("Animation", "AnimationEnd"),
    animationiteration: fl("Animation", "AnimationIteration"),
    animationstart: fl("Animation", "AnimationStart"),
    transitionend: fl("Transition", "TransitionEnd"),
  },
  Vi = {},
  zc = {};
Ct &&
  ((zc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _n.animationend.animation,
    delete _n.animationiteration.animation,
    delete _n.animationstart.animation),
  "TransitionEvent" in window || delete _n.transitionend.transition);
function yi(e) {
  if (Vi[e]) return Vi[e];
  if (!_n[e]) return e;
  var t = _n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zc) return (Vi[e] = t[n]);
  return e;
}
var Ic = yi("animationend"),
  Ac = yi("animationiteration"),
  Uc = yi("animationstart"),
  Hc = yi("transitionend"),
  Wc = new Map(),
  Qa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function en(e, t) {
  Wc.set(e, t), kn(t, [e]);
}
for (var Yi = 0; Yi < Qa.length; Yi++) {
  var Gi = Qa[Yi],
    dm = Gi.toLowerCase(),
    fm = Gi[0].toUpperCase() + Gi.slice(1);
  en(dm, "on" + fm);
}
en(Ic, "onAnimationEnd");
en(Ac, "onAnimationIteration");
en(Uc, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(Hc, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
function Va(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dp(r, t, void 0, e), (e.currentTarget = null);
}
function qc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          Va(l, s, c), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Va(l, s, c), (i = u);
        }
    }
  }
  if (zl) throw ((e = Lo), (zl = !1), (Lo = null), e);
}
function K(e, t) {
  var n = t[Wo];
  n === void 0 && (n = t[Wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bc(t, e, 2, !1), n.add(r));
}
function Ki(e, t, n) {
  var r = 0;
  t && (r |= 4), Bc(n, e, r, t);
}
var pl = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) {
  if (!e[pl]) {
    (e[pl] = !0),
      Ju.forEach(function (n) {
        n !== "selectionchange" && (pm.has(n) || Ki(n, !1, e), Ki(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pl] || ((t[pl] = !0), Ki("selectionchange", !1, t));
  }
}
function Bc(e, t, n, r) {
  switch (Tc(t)) {
    case 1:
      var l = Pp;
      break;
    case 4:
      l = Tp;
      break;
    default:
      l = Ds;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !_o ||
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
function Xi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
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
        for (; s !== null; ) {
          if (((o = an(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  mc(function () {
    var c = i,
      d = Ps(n),
      m = [];
    e: {
      var y = Wc.get(e);
      if (y !== void 0) {
        var w = Ls,
          x = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Wp;
            break;
          case "focusin":
            (x = "focus"), (w = qi);
            break;
          case "focusout":
            (x = "blur"), (w = qi);
            break;
          case "beforeblur":
          case "afterblur":
            w = qi;
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
            w = $a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Dp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Qp;
            break;
          case Ic:
          case Ac:
          case Uc:
            w = Mp;
            break;
          case Hc:
            w = Yp;
            break;
          case "scroll":
            w = bp;
            break;
          case "wheel":
            w = Kp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Fp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ra;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          h = S ? (y !== null ? y + "Capture" : null) : y;
        S = [];
        for (var f = c, p; f !== null; ) {
          p = f;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              h !== null && ((v = Mr(f, h)), v != null && S.push(Ur(f, v, p)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((y = new w(y, x, null, n, d)), m.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Oo &&
            (x = n.relatedTarget || n.fromElement) &&
            (an(x) || x[Pt]))
        )
          break e;
        if (
          (w || y) &&
          ((y =
            d.window === d
              ? d
              : (y = d.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = c),
              (x = x ? an(x) : null),
              x !== null &&
                ((C = Nn(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = c)),
          w !== x)
        ) {
          if (
            ((S = $a),
            (v = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Ra),
              (v = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (C = w == null ? y : Ln(w)),
            (p = x == null ? y : Ln(x)),
            (y = new S(v, f + "leave", w, n, d)),
            (y.target = C),
            (y.relatedTarget = p),
            (v = null),
            an(d) === c &&
              ((S = new S(h, f + "enter", x, n, d)),
              (S.target = p),
              (S.relatedTarget = C),
              (v = S)),
            (C = v),
            w && x)
          )
            t: {
              for (S = w, h = x, f = 0, p = S; p; p = jn(p)) f++;
              for (p = 0, v = h; v; v = jn(v)) p++;
              for (; 0 < f - p; ) (S = jn(S)), f--;
              for (; 0 < p - f; ) (h = jn(h)), p--;
              for (; f--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = jn(S)), (h = jn(h));
              }
              S = null;
            }
          else S = null;
          w !== null && Ya(m, y, w, S, !1),
            x !== null && C !== null && Ya(m, C, x, S, !0);
        }
      }
      e: {
        if (
          ((y = c ? Ln(c) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === "select" || (w === "input" && y.type === "file"))
        )
          var N = rm;
        else if (Aa(y))
          if (Mc) N = sm;
          else {
            N = im;
            var E = lm;
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (N = om);
        if (N && (N = N(e, c))) {
          Lc(m, N, n, d);
          break e;
        }
        E && E(e, y, c),
          e === "focusout" &&
            (E = y._wrapperState) &&
            E.controlled &&
            y.type === "number" &&
            jo(y, "number", y.value);
      }
      switch (((E = c ? Ln(c) : window), e)) {
        case "focusin":
          (Aa(E) || E.contentEditable === "true") &&
            ((Dn = E), (Ro = c), (Cr = null));
          break;
        case "focusout":
          Cr = Ro = Dn = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zo = !1), Ba(m, n, d);
          break;
        case "selectionchange":
          if (cm) break;
        case "keydown":
        case "keyup":
          Ba(m, n, d);
      }
      var P;
      if ($s)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        On
          ? Dc(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Oc &&
          n.locale !== "ko" &&
          (On || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && On && (P = bc())
            : ((Ut = d),
              (_s = "value" in Ut ? Ut.value : Ut.textContent),
              (On = !0))),
        (E = Wl(c, b)),
        0 < E.length &&
          ((b = new Fa(b, e, null, n, d)),
          m.push({ event: b, listeners: E }),
          P ? (b.data = P) : ((P = _c(n)), P !== null && (b.data = P)))),
        (P = Jp ? Zp(e, n) : em(e, n)) &&
          ((c = Wl(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Fa("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: c }),
            (d.data = P)));
    }
    qc(m, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Mr(e, n)),
      i != null && r.unshift(Ur(e, i, l)),
      (i = Mr(e, t)),
      i != null && r.push(Ur(e, i, l))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ya(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Mr(n, i)), u != null && o.unshift(Ur(n, u, s)))
        : l || ((u = Mr(n, i)), u != null && o.push(Ur(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var mm = /\r\n?/g,
  hm = /\u0000|\uFFFD/g;
function Ga(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      mm,
      `
`
    )
    .replace(hm, "");
}
function ml(e, t, n) {
  if (((t = Ga(t)), Ga(e) !== t && n)) throw Error(j(425));
}
function ql() {}
var Io = null,
  Ao = null;
function Uo(e, t) {
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
var Ho = typeof setTimeout == "function" ? setTimeout : void 0,
  gm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ka = typeof Promise == "function" ? Promise : void 0,
  ym =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ka < "u"
      ? function (e) {
          return Ka.resolve(null).then(e).catch(vm);
        }
      : Ho;
function vm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ji(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Rr(t);
}
function Vt(e) {
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
function Xa(e) {
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
var tr = Math.random().toString(36).slice(2),
  pt = "__reactFiber$" + tr,
  Hr = "__reactProps$" + tr,
  Pt = "__reactContainer$" + tr,
  Wo = "__reactEvents$" + tr,
  xm = "__reactListeners$" + tr,
  wm = "__reactHandles$" + tr;
function an(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xa(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = Xa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[pt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function vi(e) {
  return e[Hr] || null;
}
var qo = [],
  Mn = -1;
function tn(e) {
  return { current: e };
}
function X(e) {
  0 > Mn || ((e.current = qo[Mn]), (qo[Mn] = null), Mn--);
}
function G(e, t) {
  Mn++, (qo[Mn] = e.current), (e.current = t);
}
var Zt = {},
  je = tn(Zt),
  _e = tn(!1),
  gn = Zt;
function Vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function Bl() {
  X(_e), X(je);
}
function Ja(e, t, n) {
  if (je.current !== Zt) throw Error(j(168));
  G(je, t), G(_e, n);
}
function Qc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, lp(e) || "Unknown", l));
  return oe({}, n, r);
}
function Ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (gn = je.current),
    G(je, e),
    G(_e, _e.current),
    !0
  );
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Qc(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(_e),
      X(je),
      G(je, e))
    : X(_e),
    G(_e, n);
}
var vt = null,
  xi = !1,
  Zi = !1;
function Vc(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
function Sm(e) {
  (xi = !0), Vc(e);
}
function nn() {
  if (!Zi && vt !== null) {
    Zi = !0;
    var e = 0,
      t = B;
    try {
      var n = vt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vt = null), (xi = !1);
    } catch (l) {
      throw (vt !== null && (vt = vt.slice(e + 1)), vc(Ts, nn), l);
    } finally {
      (B = t), (Zi = !1);
    }
  }
  return null;
}
var $n = [],
  Fn = 0,
  Vl = null,
  Yl = 0,
  Be = [],
  Qe = 0,
  yn = null,
  St = 1,
  kt = "";
function rn(e, t) {
  ($n[Fn++] = Yl), ($n[Fn++] = Vl), (Vl = e), (Yl = t);
}
function Yc(e, t, n) {
  (Be[Qe++] = St), (Be[Qe++] = kt), (Be[Qe++] = yn), (yn = e);
  var r = St;
  e = kt;
  var l = 32 - lt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - lt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - lt(t) + l)) | (n << l) | r),
      (kt = i + e);
  } else (St = (1 << i) | (n << l) | r), (kt = e);
}
function Rs(e) {
  e.return !== null && (rn(e, 1), Yc(e, 1, 0));
}
function zs(e) {
  for (; e === Vl; )
    (Vl = $n[--Fn]), ($n[Fn] = null), (Yl = $n[--Fn]), ($n[Fn] = null);
  for (; e === yn; )
    (yn = Be[--Qe]),
      (Be[Qe] = null),
      (kt = Be[--Qe]),
      (Be[Qe] = null),
      (St = Be[--Qe]),
      (Be[Qe] = null);
}
var Ae = null,
  Ie = null,
  te = !1,
  rt = null;
function Gc(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function eu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Ie = Vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qo(e) {
  if (te) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!eu(e, t)) {
        if (Bo(e)) throw Error(j(418));
        t = Vt(n.nextSibling);
        var r = Ae;
        t && eu(e, t)
          ? Gc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e));
      }
    } else {
      if (Bo(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e);
    }
  }
}
function tu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function hl(e) {
  if (e !== Ae) return !1;
  if (!te) return tu(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Bo(e)) throw (Kc(), Error(j(418)));
    for (; t; ) Gc(e, t), (t = Vt(t.nextSibling));
  }
  if ((tu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Ae ? Vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = Ie; e; ) e = Vt(e.nextSibling);
}
function Yn() {
  (Ie = Ae = null), (te = !1);
}
function Is(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var km = Ot.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function gl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nu(e) {
  var t = e._init;
  return t(e._payload);
}
function Xc(e) {
  function t(h, f) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [f]), (h.flags |= 16)) : p.push(f);
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
    return (h = Xt(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((h.flags |= 2), f) : p)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, p, v) {
    return f === null || f.tag !== 6
      ? ((f = oo(p, h.mode, v)), (f.return = h), f)
      : ((f = l(f, p)), (f.return = h), f);
  }
  function u(h, f, p, v) {
    var N = p.type;
    return N === bn
      ? d(h, f, p.props.children, v, p.key)
      : f !== null &&
        (f.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Ft &&
            nu(N) === f.type))
      ? ((v = l(f, p.props)), (v.ref = cr(h, f, p)), (v.return = h), v)
      : ((v = Ml(p.type, p.key, p.props, null, h.mode, v)),
        (v.ref = cr(h, f, p)),
        (v.return = h),
        v);
  }
  function c(h, f, p, v) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = so(p, h.mode, v)), (f.return = h), f)
      : ((f = l(f, p.children || [])), (f.return = h), f);
  }
  function d(h, f, p, v, N) {
    return f === null || f.tag !== 7
      ? ((f = mn(p, h.mode, v, N)), (f.return = h), f)
      : ((f = l(f, p)), (f.return = h), f);
  }
  function m(h, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = oo("" + f, h.mode, p)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case il:
          return (
            (p = Ml(f.type, f.key, f.props, null, h.mode, p)),
            (p.ref = cr(h, null, f)),
            (p.return = h),
            p
          );
        case Tn:
          return (f = so(f, h.mode, p)), (f.return = h), f;
        case Ft:
          var v = f._init;
          return m(h, v(f._payload), p);
      }
      if (vr(f) || ir(f))
        return (f = mn(f, h.mode, p, null)), (f.return = h), f;
      gl(h, f);
    }
    return null;
  }
  function y(h, f, p, v) {
    var N = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : s(h, f, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case il:
          return p.key === N ? u(h, f, p, v) : null;
        case Tn:
          return p.key === N ? c(h, f, p, v) : null;
        case Ft:
          return (N = p._init), y(h, f, N(p._payload), v);
      }
      if (vr(p) || ir(p)) return N !== null ? null : d(h, f, p, v, null);
      gl(h, p);
    }
    return null;
  }
  function w(h, f, p, v, N) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (h = h.get(p) || null), s(f, h, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case il:
          return (h = h.get(v.key === null ? p : v.key) || null), u(f, h, v, N);
        case Tn:
          return (h = h.get(v.key === null ? p : v.key) || null), c(f, h, v, N);
        case Ft:
          var E = v._init;
          return w(h, f, p, E(v._payload), N);
      }
      if (vr(v) || ir(v)) return (h = h.get(p) || null), d(f, h, v, N, null);
      gl(f, v);
    }
    return null;
  }
  function x(h, f, p, v) {
    for (
      var N = null, E = null, P = f, b = (f = 0), z = null;
      P !== null && b < p.length;
      b++
    ) {
      P.index > b ? ((z = P), (P = null)) : (z = P.sibling);
      var L = y(h, P, p[b], v);
      if (L === null) {
        P === null && (P = z);
        break;
      }
      e && P && L.alternate === null && t(h, P),
        (f = i(L, f, b)),
        E === null ? (N = L) : (E.sibling = L),
        (E = L),
        (P = z);
    }
    if (b === p.length) return n(h, P), te && rn(h, b), N;
    if (P === null) {
      for (; b < p.length; b++)
        (P = m(h, p[b], v)),
          P !== null &&
            ((f = i(P, f, b)), E === null ? (N = P) : (E.sibling = P), (E = P));
      return te && rn(h, b), N;
    }
    for (P = r(h, P); b < p.length; b++)
      (z = w(P, h, b, p[b], v)),
        z !== null &&
          (e && z.alternate !== null && P.delete(z.key === null ? b : z.key),
          (f = i(z, f, b)),
          E === null ? (N = z) : (E.sibling = z),
          (E = z));
    return (
      e &&
        P.forEach(function (J) {
          return t(h, J);
        }),
      te && rn(h, b),
      N
    );
  }
  function S(h, f, p, v) {
    var N = ir(p);
    if (typeof N != "function") throw Error(j(150));
    if (((p = N.call(p)), p == null)) throw Error(j(151));
    for (
      var E = (N = null), P = f, b = (f = 0), z = null, L = p.next();
      P !== null && !L.done;
      b++, L = p.next()
    ) {
      P.index > b ? ((z = P), (P = null)) : (z = P.sibling);
      var J = y(h, P, L.value, v);
      if (J === null) {
        P === null && (P = z);
        break;
      }
      e && P && J.alternate === null && t(h, P),
        (f = i(J, f, b)),
        E === null ? (N = J) : (E.sibling = J),
        (E = J),
        (P = z);
    }
    if (L.done) return n(h, P), te && rn(h, b), N;
    if (P === null) {
      for (; !L.done; b++, L = p.next())
        (L = m(h, L.value, v)),
          L !== null &&
            ((f = i(L, f, b)), E === null ? (N = L) : (E.sibling = L), (E = L));
      return te && rn(h, b), N;
    }
    for (P = r(h, P); !L.done; b++, L = p.next())
      (L = w(P, h, b, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? b : L.key),
          (f = i(L, f, b)),
          E === null ? (N = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        P.forEach(function (Q) {
          return t(h, Q);
        }),
      te && rn(h, b),
      N
    );
  }
  function C(h, f, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === bn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case il:
          e: {
            for (var N = p.key, E = f; E !== null; ) {
              if (E.key === N) {
                if (((N = p.type), N === bn)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (f = l(E, p.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  E.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Ft &&
                    nu(N) === E.type)
                ) {
                  n(h, E.sibling),
                    (f = l(E, p.props)),
                    (f.ref = cr(h, E, p)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            p.type === bn
              ? ((f = mn(p.props.children, h.mode, v, p.key)),
                (f.return = h),
                (h = f))
              : ((v = Ml(p.type, p.key, p.props, null, h.mode, v)),
                (v.ref = cr(h, f, p)),
                (v.return = h),
                (h = v));
          }
          return o(h);
        case Tn:
          e: {
            for (E = p.key; f !== null; ) {
              if (f.key === E)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, p.children || [])),
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
            (f = so(p, h.mode, v)), (f.return = h), (h = f);
          }
          return o(h);
        case Ft:
          return (E = p._init), C(h, f, E(p._payload), v);
      }
      if (vr(p)) return x(h, f, p, v);
      if (ir(p)) return S(h, f, p, v);
      gl(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, p)), (f.return = h), (h = f))
          : (n(h, f), (f = oo(p, h.mode, v)), (f.return = h), (h = f)),
        o(h))
      : n(h, f);
  }
  return C;
}
var Gn = Xc(!0),
  Jc = Xc(!1),
  Gl = tn(null),
  Kl = null,
  Rn = null,
  As = null;
function Us() {
  As = Rn = Kl = null;
}
function Hs(e) {
  var t = Gl.current;
  X(Gl), (e._currentValue = t);
}
function Vo(e, t, n) {
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
  (Kl = e),
    (As = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (As !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (Kl === null) throw Error(j(308));
      (Rn = e), (Kl.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var un = null;
function Ws(e) {
  un === null ? (un = [e]) : un.push(e);
}
function Zc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ws(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
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
var Rt = !1;
function qs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ed(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ws(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bs(e, n);
  }
}
function ru(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
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
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function Xl(e, t, n, r) {
  var l = e.updateQueue;
  Rt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), o === null ? (i = c) : (o.next = c), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== o &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (d = c = u = null), (s = i);
    do {
      var y = s.lane,
        w = s.eventTime;
      if ((r & y) === y) {
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
          switch (((y = t), (w = n), S.tag)) {
            case 1:
              if (((x = S.payload), typeof x == "function")) {
                m = x.call(w, m, y);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = S.payload),
                (y = typeof x == "function" ? x.call(w, m, y) : x),
                y == null)
              )
                break e;
              m = oe({}, m, y);
              break e;
            case 2:
              Rt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [s]) : y.push(s));
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = w), (u = m)) : (d = d.next = w),
          (o |= y);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (y = s),
          (s = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (xn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(j(191, l));
        l.call(r);
      }
    }
}
var el = {},
  gt = tn(el),
  Wr = tn(el),
  qr = tn(el);
function cn(e) {
  if (e === el) throw Error(j(174));
  return e;
}
function Bs(e, t) {
  switch ((G(qr, t), G(Wr, e), G(gt, el), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Po(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Po(t, e));
  }
  X(gt), G(gt, t);
}
function Kn() {
  X(gt), X(Wr), X(qr);
}
function td(e) {
  cn(qr.current);
  var t = cn(gt.current),
    n = Po(t, e.type);
  t !== n && (G(Wr, e), G(gt, n));
}
function Qs(e) {
  Wr.current === e && (X(gt), X(Wr));
}
var le = tn(0);
function Jl(e) {
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
var eo = [];
function Vs() {
  for (var e = 0; e < eo.length; e++)
    eo[e]._workInProgressVersionPrimary = null;
  eo.length = 0;
}
var bl = Ot.ReactCurrentDispatcher,
  to = Ot.ReactCurrentBatchConfig,
  vn = 0,
  ie = null,
  fe = null,
  he = null,
  Zl = !1,
  Pr = !1,
  Br = 0,
  Nm = 0;
function Se() {
  throw Error(j(321));
}
function Ys(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, l, i) {
  if (
    ((vn = i),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bl.current = e === null || e.memoizedState === null ? Pm : Tm),
    (e = n(r, l)),
    Pr)
  ) {
    i = 0;
    do {
      if (((Pr = !1), (Br = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (he = fe = null),
        (t.updateQueue = null),
        (bl.current = bm),
        (e = n(r, l));
    } while (Pr);
  }
  if (
    ((bl.current = ei),
    (t = fe !== null && fe.next !== null),
    (vn = 0),
    (he = fe = ie = null),
    (Zl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Ks() {
  var e = Br !== 0;
  return (Br = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return he === null ? (ie.memoizedState = he = e) : (he = he.next = e), he;
}
function Ke() {
  if (fe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? ie.memoizedState : he.next;
  if (t !== null) (he = t), (fe = e);
  else {
    if (e === null) throw Error(j(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      he === null ? (ie.memoizedState = he = e) : (he = he.next = e);
  }
  return he;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function no(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = fe,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      c = i;
    do {
      var d = c.lane;
      if ((vn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = m), (o = r)) : (u = u.next = m),
          (ie.lanes |= d),
          (xn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (o = r) : (u.next = s),
      ot(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ie.lanes |= i), (xn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ro(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    ot(i, t.memoizedState) || (De = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function nd() {}
function rd(e, t) {
  var n = ie,
    r = Ke(),
    l = t(),
    i = !ot(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (De = !0)),
    (r = r.queue),
    Xs(od.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vr(9, id.bind(null, n, r, l, t), void 0, null),
      ge === null)
    )
      throw Error(j(349));
    vn & 30 || ld(n, t, l);
  }
  return l;
}
function ld(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function id(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sd(t) && ad(e);
}
function od(e, t, n) {
  return n(function () {
    sd(t) && ad(e);
  });
}
function sd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function ad(e) {
  var t = Tt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function iu(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Cm.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function Vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ud() {
  return Ke().memoizedState;
}
function Ol(e, t, n, r) {
  var l = ft();
  (ie.flags |= e),
    (l.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function wi(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (fe !== null) {
    var o = fe.memoizedState;
    if (((i = o.destroy), r !== null && Ys(r, o.deps))) {
      l.memoizedState = Vr(t, n, i, r);
      return;
    }
  }
  (ie.flags |= e), (l.memoizedState = Vr(1 | t, n, i, r));
}
function ou(e, t) {
  return Ol(8390656, 8, e, t);
}
function Xs(e, t) {
  return wi(2048, 8, e, t);
}
function cd(e, t) {
  return wi(4, 2, e, t);
}
function dd(e, t) {
  return wi(4, 4, e, t);
}
function fd(e, t) {
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
function pd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wi(4, 4, fd.bind(null, t, e), n)
  );
}
function Js() {}
function md(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ys(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ys(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gd(e, t, n) {
  return vn & 21
    ? (ot(n, t) || ((n = Sc()), (ie.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function Em(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = to.transition;
  to.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (to.transition = r);
  }
}
function yd() {
  return Ke().memoizedState;
}
function jm(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vd(e))
  )
    xd(t, n);
  else if (((n = Zc(e, t, n, r)), n !== null)) {
    var l = Pe();
    it(n, e, r, l), wd(n, t, r);
  }
}
function Cm(e, t, n) {
  var r = Kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vd(e)) xd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), ot(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ws(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zc(e, t, l, r)),
      n !== null && ((l = Pe()), it(n, e, r, l), wd(n, t, r));
  }
}
function vd(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function xd(e, t) {
  Pr = Zl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bs(e, n);
  }
}
var ei = {
    readContext: Ge,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: ou,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ol(4194308, 4, fd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ol(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ol(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
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
        (e = e.dispatch = jm.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: iu,
    useDebugValue: Js,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = iu(!1),
        t = e[0];
      return (e = Em.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        l = ft();
      if (te) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(j(349));
        vn & 30 || ld(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ou(od.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Vr(9, id.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = ge.identifierPrefix;
      if (te) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tm = {
    readContext: Ge,
    useCallback: md,
    useContext: Ge,
    useEffect: Xs,
    useImperativeHandle: pd,
    useInsertionEffect: cd,
    useLayoutEffect: dd,
    useMemo: hd,
    useReducer: no,
    useRef: ud,
    useState: function () {
      return no(Qr);
    },
    useDebugValue: Js,
    useDeferredValue: function (e) {
      var t = Ke();
      return gd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = no(Qr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: nd,
    useSyncExternalStore: rd,
    useId: yd,
    unstable_isNewReconciler: !1,
  },
  bm = {
    readContext: Ge,
    useCallback: md,
    useContext: Ge,
    useEffect: Xs,
    useImperativeHandle: pd,
    useInsertionEffect: cd,
    useLayoutEffect: dd,
    useMemo: hd,
    useReducer: ro,
    useRef: ud,
    useState: function () {
      return ro(Qr);
    },
    useDebugValue: Js,
    useDeferredValue: function (e) {
      var t = Ke();
      return fe === null ? (t.memoizedState = e) : gd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(Qr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: nd,
    useSyncExternalStore: rd,
    useId: yd,
    unstable_isNewReconciler: !1,
  };
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Kt(e),
      i = Nt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Yt(e, i, l)),
      t !== null && (it(t, e, l, r), Tl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Kt(e),
      i = Nt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Yt(e, i, l)),
      t !== null && (it(t, e, l, r), Tl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = Kt(e),
      l = Nt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Yt(e, l, r)),
      t !== null && (it(t, e, r, n), Tl(t, e, r));
  },
};
function su(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ir(n, r) || !Ir(l, i)
      : !0
  );
}
function Sd(e, t, n) {
  var r = !1,
    l = Zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ge(i))
      : ((l = Le(t) ? gn : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Vn(e, l) : Zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function au(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null);
}
function Go(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), qs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ge(i))
    : ((i = Le(t) ? gn : je.current), (l.context = Vn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Yo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Si.enqueueReplaceState(l, l.state, null),
      Xl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function lo(e, t, n) {
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
var Om = typeof WeakMap == "function" ? WeakMap : Map;
function kd(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ni || ((ni = !0), (os = r)), Ko(e, t);
    }),
    n
  );
}
function Nd(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
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
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ko(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function uu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Om();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = qm.bind(null, e, t, n)), t.then(e, e));
}
function cu(e) {
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
function du(e, t, n, r, l) {
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
              : ((t = Nt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Dm = Ot.ReactCurrentOwner,
  De = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? Jc(t, null, n, r) : Gn(t, e.child, n, r);
}
function fu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    qn(t, l),
    (r = Gs(e, t, n, r, i, l)),
    (n = Ks()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        bt(e, t, l))
      : (te && n && Rs(t), (t.flags |= 1), Ce(e, t, r, l), t.child)
  );
}
function pu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !oa(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ed(e, t, i, r, l))
      : ((e = Ml(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ir), n(o, r) && e.ref === t.ref)
    )
      return bt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ed(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ir(i, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), bt(e, t, l);
  }
  return Xo(e, t, n, r, l);
}
function jd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(In, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(In, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G(In, Re),
        (Re |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(In, Re),
      (Re |= r);
  return Ce(e, t, l, n), t.child;
}
function Cd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xo(e, t, n, r, l) {
  var i = Le(n) ? gn : je.current;
  return (
    (i = Vn(t, i)),
    qn(t, l),
    (n = Gs(e, t, n, r, i, l)),
    (r = Ks()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        bt(e, t, l))
      : (te && r && Rs(t), (t.flags |= 1), Ce(e, t, n, l), t.child)
  );
}
function mu(e, t, n, r, l) {
  if (Le(n)) {
    var i = !0;
    Ql(t);
  } else i = !1;
  if ((qn(t, l), t.stateNode === null))
    Dl(e, t), Sd(t, n, r), Go(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ge(c))
      : ((c = Le(n) ? gn : je.current), (c = Vn(t, c)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && au(t, o, r, c)),
      (Rt = !1);
    var y = t.memoizedState;
    (o.state = y),
      Xl(t, r, o, l),
      (u = t.memoizedState),
      s !== r || y !== u || _e.current || Rt
        ? (typeof d == "function" && (Yo(t, n, d, r), (u = t.memoizedState)),
          (s = Rt || su(t, n, s, r, y, u, c))
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
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ed(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : tt(t.type, s)),
      (o.props = c),
      (m = t.pendingProps),
      (y = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((u = Le(n) ? gn : je.current), (u = Vn(t, u)));
    var w = n.getDerivedStateFromProps;
    (d =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== m || y !== u) && au(t, o, r, u)),
      (Rt = !1),
      (y = t.memoizedState),
      (o.state = y),
      Xl(t, r, o, l);
    var x = t.memoizedState;
    s !== m || y !== x || _e.current || Rt
      ? (typeof w == "function" && (Yo(t, n, w, r), (x = t.memoizedState)),
        (c = Rt || su(t, n, c, r, y, x, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jo(e, t, n, r, i, l);
}
function Jo(e, t, n, r, l, i) {
  Cd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Za(t, n, !1), bt(e, t, i);
  (r = t.stateNode), (Dm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Gn(t, e.child, null, i)), (t.child = Gn(t, null, s, i)))
      : Ce(e, t, s, i),
    (t.memoizedState = r.state),
    l && Za(t, n, !0),
    t.child
  );
}
function Pd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ja(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ja(e, t.context, !1),
    Bs(e, t.containerInfo);
}
function hu(e, t, n, r, l) {
  return Yn(), Is(l), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Td(e, t, n) {
  var r = t.pendingProps,
    l = le.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    G(le, l & 1),
    e === null)
  )
    return (
      Qo(t),
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
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ei(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = es(n)),
              (t.memoizedState = Zo),
              e)
            : Zs(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return _m(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Xt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = Xt(s, i)) : ((i = mn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? es(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: "visible", children: r.children })),
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
function Zs(e, t) {
  return (
    (t = Ei({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yl(e, t, n, r) {
  return (
    r !== null && Is(r),
    Gn(t, e.child, null, n),
    (e = Zs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _m(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = lo(Error(j(422)))), yl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ei({ mode: "visible", children: r.children }, l, 0, null)),
        (i = mn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, o),
        (t.child.memoizedState = es(o)),
        (t.memoizedState = Zo),
        i);
  if (!(t.mode & 1)) return yl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(j(419))), (r = lo(i, r, void 0)), yl(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), De || s)) {
    if (((r = ge), r !== null)) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Tt(e, l), it(r, e, l, -1));
    }
    return ia(), (r = lo(Error(j(421)))), yl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ie = Vt(l.nextSibling)),
      (Ae = t),
      (te = !0),
      (rt = null),
      e !== null &&
        ((Be[Qe++] = St),
        (Be[Qe++] = kt),
        (Be[Qe++] = yn),
        (St = e.id),
        (kt = e.overflow),
        (yn = t)),
      (t = Zs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vo(e.return, t, n);
}
function io(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function bd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ce(e, t, r.children, n), (r = le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gu(e, n, t);
        else if (e.tag === 19) gu(e, n, t);
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
  if ((G(le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          io(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        io(t, !0, n, null, i);
        break;
      case "together":
        io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Lm(e, t, n) {
  switch (t.tag) {
    case 3:
      Pd(t), Yn();
      break;
    case 5:
      td(t);
      break;
    case 1:
      Le(t.type) && Ql(t);
      break;
    case 4:
      Bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      G(Gl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Td(e, t, n)
          : (G(le, le.current & 1),
            (e = bt(e, t, n)),
            e !== null ? e.sibling : null);
      G(le, le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        G(le, le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), jd(e, t, n);
  }
  return bt(e, t, n);
}
var Od, ts, Dd, _d;
Od = function (e, t) {
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
ts = function () {};
Dd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), cn(gt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = No(e, l)), (r = No(e, r)), (i = []);
        break;
      case "select":
        (l = oe({}, l, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ql);
    }
    To(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (_r.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (_r.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && K("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
_d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!te)
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
function ke(e) {
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
function Mm(e, t, n) {
  var r = t.pendingProps;
  switch ((zs(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Le(t.type) && Bl(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        X(_e),
        X(je),
        Vs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (us(rt), (rt = null)))),
        ts(e, t),
        ke(t),
        null
      );
    case 5:
      Qs(t);
      var l = cn(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return ke(t), null;
        }
        if (((e = cn(gt.current)), hl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[pt] = t), (r[Hr] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < wr.length; l++) K(wr[l], r);
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
              ja(r, i), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              Pa(r, i), K("invalid", r);
          }
          To(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ml(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ml(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : _r.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              ol(r), Ca(r, i, !0);
              break;
            case "textarea":
              ol(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ql);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = oc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
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
            (e[pt] = t),
            (e[Hr] = r),
            Od(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = bo(n, r)), n)) {
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
                for (l = 0; l < wr.length; l++) K(wr[l], e);
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
                ja(e, r), (l = No(e, r)), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = oe({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                Pa(e, r), (l = Co(e, r)), K("invalid", e);
                break;
              default:
                l = r;
            }
            To(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? uc(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && sc(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Lr(e, u)
                    : typeof u == "number" && Lr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (_r.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && K("scroll", e)
                      : u != null && Ns(e, i, u, o));
              }
            switch (n) {
              case "input":
                ol(e), Ca(e, r, !1);
                break;
              case "textarea":
                ol(e), Ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? An(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      An(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ql);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) _d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = cn(qr.current)), cn(gt.current), hl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (i = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                ml(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ml(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (X(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), Yn(), (t.flags |= 98560), (i = !1);
        else if (((i = hl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[pt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else rt !== null && (us(rt), (rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? pe === 0 && (pe = 3) : ia())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Kn(), ts(e, t), e === null && Ar(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Hs(t.type._context), ke(t), null;
    case 17:
      return Le(t.type) && Bl(), ke(t), null;
    case 19:
      if ((X(le), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) dr(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Jl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    dr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(le, (le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ae() > Jn &&
            ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
            )
              return ke(t), null;
          } else
            2 * ae() - i.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ae()),
          (t.sibling = null),
          (n = le.current),
          G(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        la(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function $m(e, t) {
  switch ((zs(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && Bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        X(_e),
        X(je),
        Vs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qs(t), null;
    case 13:
      if ((X(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(le), null;
    case 4:
      return Kn(), null;
    case 10:
      return Hs(t.type._context), null;
    case 22:
    case 23:
      return la(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vl = !1,
  Ne = !1,
  Fm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var yu = !1;
function Rm(e, t) {
  if (((Io = Ul), (e = Rc()), Fs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            m = e,
            y = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (s = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (y = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (y === n && ++c === l && (s = o),
                y === i && ++d === r && (u = o),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = y), (y = m.parentNode);
            }
            m = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ao = { focusedElem: e, selectionRange: n }, Ul = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
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
                      t.elementType === t.type ? S : tt(t.type, S),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (v) {
          se(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = yu), (yu = !1), x;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ns(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ki(e, t) {
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
function rs(e) {
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
function Ld(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ld(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Hr], delete t[Wo], delete t[xm], delete t[wm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Md(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Md(e.return)) return null;
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
function ls(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ql));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
var ye = null,
  nt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) $d(e, t, n), (n = n.sibling);
}
function $d(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || zn(n, t);
    case 6:
      var r = ye,
        l = nt;
      (ye = null),
        Lt(e, t, n),
        (ye = r),
        (nt = l),
        ye !== null &&
          (nt
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (nt
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ji(e.parentNode, n)
              : e.nodeType === 1 && Ji(e, n),
            Rr(e))
          : Ji(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (l = nt),
        (ye = n.stateNode.containerInfo),
        (nt = !0),
        Lt(e, t, n),
        (ye = r),
        (nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ns(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          se(n, t, s);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), Lt(e, t, n), (Ne = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fm()),
      t.forEach(function (r) {
        var l = Qm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ye = s.stateNode), (nt = !1);
              break e;
            case 3:
              (ye = s.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (ye = s.stateNode.containerInfo), (nt = !0);
              break e;
          }
          s = s.return;
        }
        if (ye === null) throw Error(j(160));
        $d(i, o, l), (ye = null), (nt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        se(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fd(t, e), (t = t.sibling);
}
function Fd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), dt(e), r & 4)) {
        try {
          Tr(3, e, e.return), ki(3, e);
        } catch (S) {
          se(e, e.return, S);
        }
        try {
          Tr(5, e, e.return);
        } catch (S) {
          se(e, e.return, S);
        }
      }
      break;
    case 1:
      et(t, e), dt(e), r & 512 && n !== null && zn(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        dt(e),
        r & 512 && n !== null && zn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Lr(l, "");
        } catch (S) {
          se(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && lc(l, i),
              bo(s, o);
            var c = bo(s, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                m = u[o + 1];
              d === "style"
                ? uc(l, m)
                : d === "dangerouslySetInnerHTML"
                ? sc(l, m)
                : d === "children"
                ? Lr(l, m)
                : Ns(l, d, m, c);
            }
            switch (s) {
              case "input":
                Eo(l, i);
                break;
              case "textarea":
                ic(l, i);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? An(l, !!i.multiple, w, !1)
                  : y !== !!i.multiple &&
                    (i.defaultValue != null
                      ? An(l, !!i.multiple, i.defaultValue, !0)
                      : An(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Hr] = i;
          } catch (S) {
            se(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((et(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          se(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (S) {
          se(e, e.return, S);
        }
      break;
    case 4:
      et(t, e), dt(e);
      break;
    case 13:
      et(t, e),
        dt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (na = ae())),
        r & 4 && xu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (c = Ne) || d), et(t, e), (Ne = c)) : et(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (m = _ = d; _ !== null; ) {
              switch (((y = _), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, y, y.return);
                  break;
                case 1:
                  zn(y, y.return);
                  var x = y.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (S) {
                      se(r, n, S);
                    }
                  }
                  break;
                case 5:
                  zn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Su(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = y), (_ = w)) : Su(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = ac("display", o)));
              } catch (S) {
                se(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                se(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      et(t, e), dt(e), r & 4 && xu(e);
      break;
    case 21:
      break;
    default:
      et(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Md(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Lr(l, ""), (r.flags &= -33));
          var i = vu(e);
          is(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = vu(e);
          ls(e, s, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (u) {
      se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zm(e, t, n) {
  (_ = e), Rd(e);
}
function Rd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vl;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Ne;
        s = vl;
        var c = Ne;
        if (((vl = o), (Ne = u) && !c))
          for (_ = l; _ !== null; )
            (o = _),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ku(l)
                : u !== null
                ? ((u.return = o), (_ = u))
                : ku(l);
        for (; i !== null; ) (_ = i), Rd(i), (i = i.sibling);
        (_ = l), (vl = s), (Ne = c);
      }
      wu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : wu(e);
  }
}
function wu(e) {
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
              Ne || ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && lu(t, i, r);
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
                lu(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                  var d = c.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && Rr(m);
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
              throw Error(j(163));
          }
        Ne || (t.flags & 512 && rs(t));
      } catch (y) {
        se(t, t.return, y);
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
function Su(e) {
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
function ku(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ki(4, t);
          } catch (u) {
            se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              se(t, l, u);
            }
          }
          var i = t.return;
          try {
            rs(t);
          } catch (u) {
            se(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            rs(t);
          } catch (u) {
            se(t, o, u);
          }
      }
    } catch (u) {
      se(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Im = Math.ceil,
  ti = Ot.ReactCurrentDispatcher,
  ea = Ot.ReactCurrentOwner,
  Ye = Ot.ReactCurrentBatchConfig,
  U = 0,
  ge = null,
  ce = null,
  ve = 0,
  Re = 0,
  In = tn(0),
  pe = 0,
  Yr = null,
  xn = 0,
  Ni = 0,
  ta = 0,
  br = null,
  Oe = null,
  na = 0,
  Jn = 1 / 0,
  yt = null,
  ni = !1,
  os = null,
  Gt = null,
  xl = !1,
  Ht = null,
  ri = 0,
  Or = 0,
  ss = null,
  _l = -1,
  Ll = 0;
function Pe() {
  return U & 6 ? ae() : _l !== -1 ? _l : (_l = ae());
}
function Kt(e) {
  return e.mode & 1
    ? U & 2 && ve !== 0
      ? ve & -ve
      : km.transition !== null
      ? (Ll === 0 && (Ll = Sc()), Ll)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tc(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (ss = null), Error(j(185)));
  Xr(e, n, r),
    (!(U & 2) || e !== ge) &&
      (e === ge && (!(U & 2) && (Ni |= n), pe === 4 && It(e, ve)),
      Me(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Jn = ae() + 500), xi && nn()));
}
function Me(e, t) {
  var n = e.callbackNode;
  kp(e, t);
  var r = Al(e, e === ge ? ve : 0);
  if (r === 0)
    n !== null && Da(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Da(n), t === 1))
      e.tag === 0 ? Sm(Nu.bind(null, e)) : Vc(Nu.bind(null, e)),
        ym(function () {
          !(U & 6) && nn();
        }),
        (n = null);
    else {
      switch (kc(r)) {
        case 1:
          n = Ts;
          break;
        case 4:
          n = xc;
          break;
        case 16:
          n = Il;
          break;
        case 536870912:
          n = wc;
          break;
        default:
          n = Il;
      }
      n = Bd(n, zd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function zd(e, t) {
  if (((_l = -1), (Ll = 0), U & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = Al(e, e === ge ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = li(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var i = Ad();
    (ge !== e || ve !== t) && ((yt = null), (Jn = ae() + 500), pn(e, t));
    do
      try {
        Hm();
        break;
      } catch (s) {
        Id(e, s);
      }
    while (!0);
    Us(),
      (ti.current = i),
      (U = l),
      ce !== null ? (t = 0) : ((ge = null), (ve = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Mo(e)), l !== 0 && ((r = l), (t = as(e, l)))), t === 1)
    )
      throw ((n = Yr), pn(e, 0), It(e, r), Me(e, ae()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Am(l) &&
          ((t = li(e, r)),
          t === 2 && ((i = Mo(e)), i !== 0 && ((r = i), (t = as(e, i)))),
          t === 1))
      )
        throw ((n = Yr), pn(e, 0), It(e, r), Me(e, ae()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          ln(e, Oe, yt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = na + 500 - ae()), 10 < t))
          ) {
            if (Al(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ho(ln.bind(null, e, Oe, yt), t);
            break;
          }
          ln(e, Oe, yt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - lt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ae() - r),
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
                : 1960 * Im(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ho(ln.bind(null, e, Oe, yt), r);
            break;
          }
          ln(e, Oe, yt);
          break;
        case 5:
          ln(e, Oe, yt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Me(e, ae()), e.callbackNode === n ? zd.bind(null, e) : null;
}
function as(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = li(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function Am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ot(i(), l)) return !1;
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
function It(e, t) {
  for (
    t &= ~ta,
      t &= ~Ni,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nu(e) {
  if (U & 6) throw Error(j(327));
  Bn();
  var t = Al(e, 0);
  if (!(t & 1)) return Me(e, ae()), null;
  var n = li(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mo(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = Yr), pn(e, 0), It(e, t), Me(e, ae()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, Oe, yt),
    Me(e, ae()),
    null
  );
}
function ra(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Jn = ae() + 500), xi && nn());
  }
}
function wn(e) {
  Ht !== null && Ht.tag === 0 && !(U & 6) && Bn();
  var t = U;
  U |= 1;
  var n = Ye.transition,
    r = B;
  try {
    if (((Ye.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ye.transition = n), (U = t), !(U & 6) && nn();
  }
}
function la() {
  (Re = In.current), X(In);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gm(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((zs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Bl();
          break;
        case 3:
          Kn(), X(_e), X(je), Vs();
          break;
        case 5:
          Qs(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          X(le);
          break;
        case 19:
          X(le);
          break;
        case 10:
          Hs(r.type._context);
          break;
        case 22:
        case 23:
          la();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (ce = e = Xt(e.current, null)),
    (ve = Re = t),
    (pe = 0),
    (Yr = null),
    (ta = Ni = xn = 0),
    (Oe = br = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Id(e, t) {
  do {
    var n = ce;
    try {
      if ((Us(), (bl.current = ei), Zl)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zl = !1;
      }
      if (
        ((vn = 0),
        (he = fe = ie = null),
        (Pr = !1),
        (Br = 0),
        (ea.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Yr = t), (ce = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = ve),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = s,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = d.alternate;
            y
              ? ((d.updateQueue = y.updateQueue),
                (d.memoizedState = y.memoizedState),
                (d.lanes = y.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = cu(o);
          if (w !== null) {
            (w.flags &= -257),
              du(w, o, s, i, t),
              w.mode & 1 && uu(i, c, t),
              (t = w),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              uu(i, c, t), ia();
              break e;
            }
            u = Error(j(426));
          }
        } else if (te && s.mode & 1) {
          var C = cu(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              du(C, o, s, i, t),
              Is(Xn(u, s));
            break e;
          }
        }
        (i = u = Xn(u, s)),
          pe !== 4 && (pe = 2),
          br === null ? (br = [i]) : br.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = kd(i, u, t);
              ru(i, h);
              break e;
            case 1:
              s = u;
              var f = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Nd(i, s, t);
                ru(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hd(n);
    } catch (N) {
      (t = N), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ad() {
  var e = ti.current;
  return (ti.current = ei), e === null ? ei : e;
}
function ia() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ge === null || (!(xn & 268435455) && !(Ni & 268435455)) || It(ge, ve);
}
function li(e, t) {
  var n = U;
  U |= 2;
  var r = Ad();
  (ge !== e || ve !== t) && ((yt = null), pn(e, t));
  do
    try {
      Um();
      break;
    } catch (l) {
      Id(e, l);
    }
  while (!0);
  if ((Us(), (U = n), (ti.current = r), ce !== null)) throw Error(j(261));
  return (ge = null), (ve = 0), pe;
}
function Um() {
  for (; ce !== null; ) Ud(ce);
}
function Hm() {
  for (; ce !== null && !pp(); ) Ud(ce);
}
function Ud(e) {
  var t = qd(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hd(e) : (ce = t),
    (ea.current = null);
}
function Hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $m(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ce = null);
        return;
      }
    } else if (((n = Mm(n, t, Re)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function ln(e, t, n) {
  var r = B,
    l = Ye.transition;
  try {
    (Ye.transition = null), (B = 1), Wm(e, t, n, r);
  } finally {
    (Ye.transition = l), (B = r);
  }
  return null;
}
function Wm(e, t, n, r) {
  do Bn();
  while (Ht !== null);
  if (U & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Np(e, i),
    e === ge && ((ce = ge = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xl ||
      ((xl = !0),
      Bd(Il, function () {
        return Bn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ye.transition), (Ye.transition = null);
    var o = B;
    B = 1;
    var s = U;
    (U |= 4),
      (ea.current = null),
      Rm(e, n),
      Fd(n, e),
      um(Ao),
      (Ul = !!Io),
      (Ao = Io = null),
      (e.current = n),
      zm(n),
      mp(),
      (U = s),
      (B = o),
      (Ye.transition = i);
  } else e.current = n;
  if (
    (xl && ((xl = !1), (Ht = e), (ri = l)),
    (i = e.pendingLanes),
    i === 0 && (Gt = null),
    yp(n.stateNode),
    Me(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ni) throw ((ni = !1), (e = os), (os = null), e);
  return (
    ri & 1 && e.tag !== 0 && Bn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ss ? Or++ : ((Or = 0), (ss = e))) : (Or = 0),
    nn(),
    null
  );
}
function Bn() {
  if (Ht !== null) {
    var e = kc(ri),
      t = Ye.transition,
      n = B;
    try {
      if (((Ye.transition = null), (B = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (ri = 0), U & 6)) throw Error(j(331));
        var l = U;
        for (U |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (_ = c; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (_ = m);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var y = d.sibling,
                        w = d.return;
                      if ((Ld(d), d === c)) {
                        _ = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = w), (_ = y);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var x = i.alternate;
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
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (_ = h);
                break e;
              }
              _ = i.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          o = _;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (_ = p);
          else
            e: for (o = f; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(9, s);
                  }
                } catch (N) {
                  se(s, s.return, N);
                }
              if (s === o) {
                _ = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (_ = v);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((U = l), nn(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(mi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ye.transition = t);
    }
  }
  return !1;
}
function Eu(e, t, n) {
  (t = Xn(n, t)),
    (t = kd(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Pe()),
    e !== null && (Xr(e, 1, t), Me(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Eu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Eu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = Nd(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Pe()),
            t !== null && (Xr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (ve & n) === n &&
      (pe === 4 || (pe === 3 && (ve & 130023424) === ve && 500 > ae() - na)
        ? pn(e, 0)
        : (ta |= n)),
    Me(e, t);
}
function Wd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ul), (ul <<= 1), !(ul & 130023424) && (ul = 4194304))
      : (t = 1));
  var n = Pe();
  (e = Tt(e, t)), e !== null && (Xr(e, t, n), Me(e, n));
}
function Bm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wd(e, n);
}
function Qm(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), Wd(e, n);
}
var qd;
qd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Lm(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), te && t.flags & 1048576 && Yc(t, Yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dl(e, t), (e = t.pendingProps);
      var l = Vn(t, je.current);
      qn(t, n), (l = Gs(null, t, r, e, l, n));
      var i = Ks();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((i = !0), Ql(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            qs(t),
            (l.updater = Si),
            (t.stateNode = l),
            (l._reactInternals = t),
            Go(t, r, e, n),
            (t = Jo(null, t, r, !0, i, n)))
          : ((t.tag = 0), te && i && Rs(t), Ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ym(r)),
          (e = tt(r, e)),
          l)
        ) {
          case 0:
            t = Xo(null, t, r, e, n);
            break e;
          case 1:
            t = mu(null, t, r, e, n);
            break e;
          case 11:
            t = fu(null, t, r, e, n);
            break e;
          case 14:
            t = pu(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Xo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        mu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Pd(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ed(e, t),
          Xl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Xn(Error(j(423)), t)), (t = hu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Xn(Error(j(424)), t)), (t = hu(e, t, r, n, l));
            break e;
          } else
            for (
              Ie = Vt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                te = !0,
                rt = null,
                n = Jc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === l)) {
            t = bt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        td(t),
        e === null && Qo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Uo(r, l) ? (o = null) : i !== null && Uo(r, i) && (t.flags |= 32),
        Cd(e, t),
        Ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Qo(t), null;
    case 13:
      return Td(e, t, n);
    case 4:
      return (
        Bs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        fu(e, t, r, l, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          G(Gl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ot(i.value, o)) {
            if (i.children === l.children && !_e.current) {
              t = bt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Nt(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Vo(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(j(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Vo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qn(t, n),
        (l = Ge(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = tt(r, t.pendingProps)),
        (l = tt(r.type, l)),
        pu(e, t, r, l, n)
      );
    case 15:
      return Ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Dl(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), Ql(t)) : (e = !1),
        qn(t, n),
        Sd(t, r, l),
        Go(t, r, l, n),
        Jo(null, t, r, !0, e, n)
      );
    case 19:
      return bd(e, t, n);
    case 22:
      return jd(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Bd(e, t) {
  return vc(e, t);
}
function Vm(e, t, n, r) {
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
function Ve(e, t, n, r) {
  return new Vm(e, t, n, r);
}
function oa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ym(e) {
  if (typeof e == "function") return oa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === js)) return 11;
    if (e === Cs) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
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
function Ml(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) oa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case bn:
        return mn(n.children, l, i, t);
      case Es:
        (o = 8), (l |= 8);
        break;
      case xo:
        return (
          (e = Ve(12, n, t, l | 2)), (e.elementType = xo), (e.lanes = i), e
        );
      case wo:
        return (e = Ve(13, n, t, l)), (e.elementType = wo), (e.lanes = i), e;
      case So:
        return (e = Ve(19, n, t, l)), (e.elementType = So), (e.lanes = i), e;
      case tc:
        return Ei(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zu:
              o = 10;
              break e;
            case ec:
              o = 9;
              break e;
            case js:
              o = 11;
              break e;
            case Cs:
              o = 14;
              break e;
            case Ft:
              (o = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Ei(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = tc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oo(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function so(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gm(e, t, n, r, l) {
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
    (this.eventTimes = Ui(0)),
    (this.expirationTimes = Ui(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ui(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function sa(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new Gm(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ve(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qs(i),
    e
  );
}
function Km(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qd(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Qc(e, n, t);
  }
  return t;
}
function Vd(e, t, n, r, l, i, o, s, u) {
  return (
    (e = sa(n, r, !0, e, l, i, o, s, u)),
    (e.context = Qd(null)),
    (n = e.current),
    (r = Pe()),
    (l = Kt(n)),
    (i = Nt(r, l)),
    (i.callback = t ?? null),
    Yt(n, i, l),
    (e.current.lanes = l),
    Xr(e, l, r),
    Me(e, r),
    e
  );
}
function ji(e, t, n, r) {
  var l = t.current,
    i = Pe(),
    o = Kt(l);
  return (
    (n = Qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(l, t, o)),
    e !== null && (it(e, l, o, i), Tl(e, l, o)),
    o
  );
}
function ii(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ju(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function aa(e, t) {
  ju(e, t), (e = e.alternate) && ju(e, t);
}
function Xm() {
  return null;
}
var Yd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
Ci.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ji(e, t, null, null);
};
Ci.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      ji(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function Ci(e) {
  this._internalRoot = e;
}
Ci.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Pc(e);
  }
};
function ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cu() {}
function Jm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ii(o);
        i.call(c);
      };
    }
    var o = Vd(t, r, e, 0, null, !1, !1, "", Cu);
    return (
      (e._reactRootContainer = o),
      (e[Pt] = o.current),
      Ar(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = ii(u);
      s.call(c);
    };
  }
  var u = sa(e, 0, !1, null, null, !1, !1, "", Cu);
  return (
    (e._reactRootContainer = u),
    (e[Pt] = u.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      ji(t, u, n, r);
    }),
    u
  );
}
function Ti(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = ii(o);
        s.call(u);
      };
    }
    ji(t, o, e, l);
  } else o = Jm(n, t, e, l, r);
  return ii(o);
}
Nc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 &&
          (bs(t, n | 1), Me(t, ae()), !(U & 6) && ((Jn = ae() + 500), nn()));
      }
      break;
    case 13:
      wn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var l = Pe();
          it(r, e, 1, l);
        }
      }),
        aa(e, 1);
  }
};
Os = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      it(t, e, 134217728, n);
    }
    aa(e, 134217728);
  }
};
Ec = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Pe();
      it(n, e, t, r);
    }
    aa(e, t);
  }
};
jc = function () {
  return B;
};
Cc = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Eo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = vi(r);
            if (!l) throw Error(j(90));
            rc(r), Eo(r, l);
          }
        }
      }
      break;
    case "textarea":
      ic(e, n);
      break;
    case "select":
      (t = n.value), t != null && An(e, !!n.multiple, t, !1);
  }
};
fc = ra;
pc = wn;
var Zm = { usingClientEntryPoint: !1, Events: [Zr, Ln, vi, cc, dc, ra] },
  fr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  eh = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || Xm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (mi = wl.inject(eh)), (ht = wl);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t)) throw Error(j(200));
  return Km(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!ca(e)) throw Error(j(299));
  var n = !1,
    r = "",
    l = Yd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = sa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Pt] = t.current),
    Ar(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = gc(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return wn(e);
};
He.hydrate = function (e, t, n) {
  if (!Pi(t)) throw Error(j(200));
  return Ti(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!ca(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Yd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Vd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Pt] = t.current),
    Ar(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ci(t);
};
He.render = function (e, t, n) {
  if (!Pi(t)) throw Error(j(200));
  return Ti(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Pi(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (wn(function () {
        Ti(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = ra;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pi(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ti(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Gd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd);
    } catch (e) {
      console.error(e);
    }
}
Gd(), (Gu.exports = He);
var bi = Gu.exports,
  Kd,
  Pu = bi;
(Kd = Pu.createRoot), Pu.hydrateRoot;
function st(e) {
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
function Sn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Xd = 6048e5,
  th = 864e5;
let nh = {};
function Oi() {
  return nh;
}
function Gr(e, t) {
  var s, u, c, d;
  const n = Oi(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    l = st(e),
    i = l.getDay(),
    o = (i < r ? 7 : 0) + i - r;
  return l.setDate(l.getDate() - o), l.setHours(0, 0, 0, 0), l;
}
function oi(e) {
  return Gr(e, { weekStartsOn: 1 });
}
function Jd(e) {
  const t = st(e),
    n = t.getFullYear(),
    r = Sn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = oi(r),
    i = Sn(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = oi(i);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
    ? n
    : n - 1;
}
function Tu(e) {
  const t = st(e);
  return t.setHours(0, 0, 0, 0), t;
}
function bu(e) {
  const t = st(e),
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
function rh(e, t) {
  const n = Tu(e),
    r = Tu(t),
    l = +n - bu(n),
    i = +r - bu(r);
  return Math.round((l - i) / th);
}
function lh(e) {
  const t = Jd(e),
    n = Sn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), oi(n);
}
function ih(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function oh(e) {
  if (!ih(e) && typeof e != "number") return !1;
  const t = st(e);
  return !isNaN(Number(t));
}
function sh(e) {
  const t = st(e),
    n = Sn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ah = {
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
  uh = (e, t, n) => {
    let r;
    const l = ah[e];
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
function ao(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ch = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  dh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  fh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  ph = {
    date: ao({ formats: ch, defaultWidth: "full" }),
    time: ao({ formats: dh, defaultWidth: "full" }),
    dateTime: ao({ formats: fh, defaultWidth: "full" }),
  },
  mh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  hh = (e, t, n, r) => mh[e];
function pr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : o;
      l = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[s] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[i];
  };
}
const gh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  yh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  vh = {
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
  xh = {
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
  wh = {
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
  Sh = {
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
  kh = (e, t) => {
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
  Nh = {
    ordinalNumber: kh,
    era: pr({ values: gh, defaultWidth: "wide" }),
    quarter: pr({
      values: yh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: pr({ values: vh, defaultWidth: "wide" }),
    day: pr({ values: xh, defaultWidth: "wide" }),
    dayPeriod: pr({
      values: wh,
      defaultWidth: "wide",
      formattingValues: Sh,
      defaultFormattingWidth: "wide",
    }),
  };
function mr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(l);
    if (!i) return null;
    const o = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(s) ? jh(s, (m) => m.test(o)) : Eh(s, (m) => m.test(o));
    let c;
    (c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const d = t.slice(o.length);
    return { value: c, rest: d };
  };
}
function Eh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function jh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Ch(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const s = t.slice(l.length);
    return { value: o, rest: s };
  };
}
const Ph = /^(\d+)(th|st|nd|rd)?/i,
  Th = /\d+/i,
  bh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Oh = { any: [/^b/i, /^(a|c)/i] },
  Dh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  _h = { any: [/1/i, /2/i, /3/i, /4/i] },
  Lh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Mh = {
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
  $h = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Fh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Rh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  zh = {
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
  Ih = {
    ordinalNumber: Ch({
      matchPattern: Ph,
      parsePattern: Th,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: mr({
      matchPatterns: bh,
      defaultMatchWidth: "wide",
      parsePatterns: Oh,
      defaultParseWidth: "any",
    }),
    quarter: mr({
      matchPatterns: Dh,
      defaultMatchWidth: "wide",
      parsePatterns: _h,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: mr({
      matchPatterns: Lh,
      defaultMatchWidth: "wide",
      parsePatterns: Mh,
      defaultParseWidth: "any",
    }),
    day: mr({
      matchPatterns: $h,
      defaultMatchWidth: "wide",
      parsePatterns: Fh,
      defaultParseWidth: "any",
    }),
    dayPeriod: mr({
      matchPatterns: Rh,
      defaultMatchWidth: "any",
      parsePatterns: zh,
      defaultParseWidth: "any",
    }),
  },
  Ah = {
    code: "en-US",
    formatDistance: uh,
    formatLong: ph,
    formatRelative: hh,
    localize: Nh,
    match: Ih,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Uh(e) {
  const t = st(e);
  return rh(t, sh(t)) + 1;
}
function Hh(e) {
  const t = st(e),
    n = +oi(t) - +lh(t);
  return Math.round(n / Xd) + 1;
}
function Zd(e, t) {
  var d, m, y, w;
  const n = st(e),
    r = n.getFullYear(),
    l = Oi(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : m.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((w = (y = l.locale) == null ? void 0 : y.options) == null
        ? void 0
        : w.firstWeekContainsDate) ??
      1,
    o = Sn(e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = Gr(o, t),
    u = Sn(e, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const c = Gr(u, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
    ? r
    : r - 1;
}
function Wh(e, t) {
  var s, u, c, d;
  const n = Oi(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    l = Zd(e, t),
    i = Sn(e, 0);
  return i.setFullYear(l, 0, r), i.setHours(0, 0, 0, 0), Gr(i, t);
}
function qh(e, t) {
  const n = st(e),
    r = +Gr(n, t) - +Wh(n, t);
  return Math.round(r / Xd) + 1;
}
function q(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Mt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return q(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : q(n + 1, 2);
    },
    d(e, t) {
      return q(e.getDate(), t.length);
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
      return q(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return q(e.getHours(), t.length);
    },
    m(e, t) {
      return q(e.getMinutes(), t.length);
    },
    s(e, t) {
      return q(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return q(l, t.length);
    },
  },
  Cn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Ou = {
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
      return Mt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = Zd(e, r),
        i = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const o = i % 100;
        return q(o, 2);
      }
      return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : q(i, t.length);
    },
    R: function (e, t) {
      const n = Jd(e);
      return q(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return q(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return q(r, 2);
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
          return q(r, 2);
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
          return Mt.M(e, t);
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
          return q(r + 1, 2);
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
      const l = qh(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : q(l, t.length);
    },
    I: function (e, t, n) {
      const r = Hh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : q(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Mt.d(e, t);
    },
    D: function (e, t, n) {
      const r = Uh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : q(r, t.length);
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
        i = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return q(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
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
        i = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return q(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
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
          return q(l, t.length);
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
          ? (l = Cn.noon)
          : r === 0
          ? (l = Cn.midnight)
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
          ? (l = Cn.evening)
          : r >= 12
          ? (l = Cn.afternoon)
          : r >= 4
          ? (l = Cn.morning)
          : (l = Cn.night),
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
      return Mt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Mt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Mt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Mt.s(e, t);
    },
    S: function (e, t) {
      return Mt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return _u(r);
        case "XXXX":
        case "XX":
          return on(r);
        case "XXXXX":
        case "XXX":
        default:
          return on(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return _u(r);
        case "xxxx":
        case "xx":
          return on(r);
        case "xxxxx":
        case "xxx":
        default:
          return on(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Du(r, ":");
        case "OOOO":
        default:
          return "GMT" + on(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Du(r, ":");
        case "zzzz":
        default:
          return "GMT" + on(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return q(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return q(r, t.length);
    },
  };
function Du(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(l) : n + String(l) + t + q(i, 2);
}
function _u(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + q(Math.abs(e) / 60, 2) : on(e, t);
}
function on(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = q(Math.trunc(r / 60), 2),
    i = q(r % 60, 2);
  return n + l + t + i;
}
const Lu = (e, t) => {
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
  ef = (e, t) => {
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
  Bh = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Lu(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Lu(r, t)).replace("{{time}}", ef(l, t));
  },
  Qh = { p: ef, P: Bh },
  Vh = /^D+$/,
  Yh = /^Y+$/,
  Gh = ["D", "DD", "YY", "YYYY"];
function Kh(e) {
  return Vh.test(e);
}
function Xh(e) {
  return Yh.test(e);
}
function Jh(e, t, n) {
  const r = Zh(e, t, n);
  if ((console.warn(r), Gh.includes(e))) throw new RangeError(r);
}
function Zh(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const e0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  t0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  n0 = /^'([^]*?)'?$/,
  r0 = /''/g,
  l0 = /[a-zA-Z]/;
function de(e, t, n) {
  var d, m, y, w;
  const r = Oi(),
    l = r.locale ?? Ah,
    i =
      r.firstWeekContainsDate ??
      ((m = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    o =
      r.weekStartsOn ??
      ((w = (y = r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : w.weekStartsOn) ??
      0,
    s = st(e);
  if (!oh(s)) throw new RangeError("Invalid time value");
  let u = t
    .match(t0)
    .map((x) => {
      const S = x[0];
      if (S === "p" || S === "P") {
        const C = Qh[S];
        return C(x, l.formatLong);
      }
      return x;
    })
    .join("")
    .match(e0)
    .map((x) => {
      if (x === "''") return { isToken: !1, value: "'" };
      const S = x[0];
      if (S === "'") return { isToken: !1, value: i0(x) };
      if (Ou[S]) return { isToken: !0, value: x };
      if (S.match(l0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`"
        );
      return { isToken: !1, value: x };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(s, u));
  const c = { firstWeekContainsDate: i, weekStartsOn: o, locale: l };
  return u
    .map((x) => {
      if (!x.isToken) return x.value;
      const S = x.value;
      (Xh(S) || Kh(S)) && Jh(S, t, String(e));
      const C = Ou[S[0]];
      return C(s, S, l.localize, c);
    })
    .join("");
}
function i0(e) {
  const t = e.match(n0);
  return t ? t[1].replace(r0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var o0 = {
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
 */ const s0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Je = (e, t) => {
    const n = g.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: s = "",
          children: u,
          ...c
        },
        d
      ) =>
        g.createElement(
          "svg",
          {
            ref: d,
            ...o0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${s0(e)}`, s].join(" "),
            ...c,
          },
          [
            ...t.map(([m, y]) => g.createElement(m, y)),
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
 */ const si = Je("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a0 = Je("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uo = Je("Calendar", [
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
 */ const u0 = Je("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c0 = Je("Globe", [
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
 */ const co = Je("Hash", [
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
 */ const d0 = Je("Layers", [
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
 */ const f0 = Je("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pn = Je("Package", [
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
 */ const tf = Je("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p0 = Je("Trash2", [
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
 */ const nf = Je("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var m0 = Object.defineProperty,
  h0 = (e, t, n) =>
    t in e
      ? m0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  fo = (e, t, n) => (h0(e, typeof t != "symbol" ? t + "" : t, n), n);
let g0 = class {
    constructor() {
      fo(this, "current", this.detect()),
        fo(this, "handoffState", "pending"),
        fo(this, "currentId", 0);
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
  Et = new g0(),
  Xe = (e, t) => {
    Et.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
  };
function jt(e) {
  let t = g.useRef(e);
  return (
    Xe(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ne = function (e) {
  let t = jt(e);
  return F.useCallback((...n) => t.current(...n), [t]);
};
function Di(e) {
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
function En() {
  let e = [],
    t = {
      addEventListener(n, r, l, i) {
        return (
          n.addEventListener(r, l, i),
          t.add(() => n.removeEventListener(r, l, i))
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
          Di(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let i = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: i });
          })
        );
      },
      group(n) {
        let r = En();
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
function da() {
  let [e] = g.useState(En);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
function y0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Dr
    ? ((t) => t.useSyncExternalStore)(Dr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function nr() {
  let e = y0(),
    [t, n] = g.useState(Et.isHandoffComplete);
  return (
    t && Et.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => Et.handoff(), []),
    e ? !1 : t
  );
}
var Mu;
let rr =
  (Mu = F.useId) != null
    ? Mu
    : function () {
        let e = nr(),
          [t, n] = F.useState(e ? () => Et.nextId() : null);
        return (
          Xe(() => {
            t === null && n(Et.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Ee(e, t, ...n) {
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
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ee), r);
}
function rf(e) {
  return Et.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let cs = [
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
var sn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(sn || {}),
  lf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(lf || {}),
  v0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(v0 || {});
function x0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(cs)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var of = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(of || {});
function w0(e, t = 0) {
  var n;
  return e === ((n = rf(e)) == null ? void 0 : n.body)
    ? !1
    : Ee(t, {
        0() {
          return e.matches(cs);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(cs)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var S0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(S0 || {});
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
function hn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let k0 = ["textarea", "input"].join(",");
function N0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, k0)) !=
    null
    ? n
    : !1;
}
function E0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      i = t(r);
    if (l === null || i === null) return 0;
    let o = l.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : o & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function $l(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    o = Array.isArray(e) ? (n ? E0(e) : e) : x0(e);
  l.length > 0 && o.length > 1 && (o = o.filter((w) => !l.includes(w))),
    (r = r ?? i.activeElement);
  let s = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
      if (t & 8) return o.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    m = o.length,
    y;
  do {
    if (d >= m || d + m <= 0) return 0;
    let w = u + d;
    if (t & 16) w = (w + m) % m;
    else {
      if (w < 0) return 3;
      if (w >= m) return 1;
    }
    (y = o[w]), y == null || y.focus(c), (d += s);
  } while (y !== i.activeElement);
  return t & 6 && N0(y) && y.select(), 2;
}
function sf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function j0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function C0() {
  return sf() || j0();
}
function Sl(e, t, n) {
  let r = jt(t);
  g.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function af(e, t, n) {
  let r = jt(t);
  g.useEffect(() => {
    function l(i) {
      r.current(i);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function P0(e, t, n = !0) {
  let r = g.useRef(!1);
  g.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(o, s) {
    if (!r.current || o.defaultPrevented) return;
    let u = s(o);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function d(m) {
      return typeof m == "function"
        ? d(m())
        : Array.isArray(m) || m instanceof Set
        ? m
        : [m];
    })(e);
    for (let d of c) {
      if (d === null) continue;
      let m = d instanceof HTMLElement ? d : d.current;
      if (
        (m != null && m.contains(u)) ||
        (o.composed && o.composedPath().includes(m))
      )
        return;
    }
    return !w0(u, of.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let i = g.useRef(null);
  Sl(
    "pointerdown",
    (o) => {
      var s, u;
      r.current &&
        (i.current =
          ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null
            ? void 0
            : u[0]) || o.target);
    },
    !0
  ),
    Sl(
      "mousedown",
      (o) => {
        var s, u;
        r.current &&
          (i.current =
            ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null
              ? void 0
              : u[0]) || o.target);
      },
      !0
    ),
    Sl(
      "click",
      (o) => {
        C0() || (i.current && (l(o, () => i.current), (i.current = null)));
      },
      !0
    ),
    Sl(
      "touchend",
      (o) => l(o, () => (o.target instanceof HTMLElement ? o.target : null)),
      !0
    ),
    af(
      "blur",
      (o) =>
        l(o, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function tl(...e) {
  return g.useMemo(() => rf(...e), [...e]);
}
let uf = Symbol();
function T0(e, t = !0) {
  return Object.assign(e, { [uf]: t });
}
function at(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ne((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[uf])) ? void 0 : n;
}
function fa(e, t) {
  let n = g.useRef([]),
    r = ne(e);
  g.useEffect(() => {
    let l = [...n.current];
    for (let [i, o] of t.entries())
      if (n.current[i] !== o) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function ai(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var ui = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(ui || {}),
  Wt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Wt || {});
function Ze({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: i = !0,
  name: o,
  mergeRefs: s,
}) {
  s = s ?? b0;
  let u = cf(t, e);
  if (i) return kl(u, n, r, o, s);
  let c = l ?? 0;
  if (c & 2) {
    let { static: d = !1, ...m } = u;
    if (d) return kl(m, n, r, o, s);
  }
  if (c & 1) {
    let { unmount: d = !0, ...m } = u;
    return Ee(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return kl({ ...m, hidden: !0, style: { display: "none" } }, n, r, o, s);
      },
    });
  }
  return kl(u, n, r, o, s);
}
function kl(e, t = {}, n, r, l) {
  let {
      as: i = n,
      children: o,
      refName: s = "ref",
      ...u
    } = po(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let m = {};
  if (t) {
    let y = !1,
      w = [];
    for (let [x, S] of Object.entries(t))
      typeof S == "boolean" && (y = !0), S === !0 && w.push(x);
    y && (m["data-headlessui-state"] = w.join(" "));
  }
  if (i === g.Fragment && Object.keys($u(u)).length > 0) {
    if (!g.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((S) => `  - ${S}`).join(`
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
    let y = d.props,
      w =
        typeof (y == null ? void 0 : y.className) == "function"
          ? (...S) => ai(y == null ? void 0 : y.className(...S), u.className)
          : ai(y == null ? void 0 : y.className, u.className),
      x = w ? { className: w } : {};
    return g.cloneElement(
      d,
      Object.assign(
        {},
        cf(d.props, $u(po(u, ["ref"]))),
        m,
        c,
        { ref: l(d.ref, c.ref) },
        x
      )
    );
  }
  return g.createElement(
    i,
    Object.assign(
      {},
      po(u, ["ref"]),
      i !== g.Fragment && c,
      i !== g.Fragment && m
    ),
    d
  );
}
function b0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function cf(...e) {
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
      [r](l, ...i) {
        let o = n[r];
        for (let s of o) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          s(l, ...i);
        }
      },
    });
  return t;
}
function qe(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function $u(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function po(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let O0 = "div";
var ci = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ci || {});
function D0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    i = {
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
    ourProps: i,
    theirProps: l,
    slot: {},
    defaultTag: O0,
    name: "Hidden",
  });
}
let ds = qe(D0),
  pa = g.createContext(null);
pa.displayName = "OpenClosedContext";
var ze = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ze || {});
function ma() {
  return g.useContext(pa);
}
function _0({ value: e, children: t }) {
  return F.createElement(pa.Provider, { value: e }, t);
}
function L0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let At = [];
L0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      At[0] !== t.target &&
      (At.unshift(t.target),
      (At = At.filter((n) => n != null && n.isConnected)),
      At.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function M0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && $0(n) ? !1 : r;
}
function $0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var df = ((e) => (
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
))(df || {});
function ff(e, t, n, r) {
  let l = jt(n);
  g.useEffect(() => {
    e = e ?? window;
    function i(o) {
      l.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function nl() {
  let e = g.useRef(!1);
  return (
    Xe(
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
function pf(e) {
  let t = ne(e),
    n = g.useRef(!1);
  g.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Di(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var Sr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Sr || {});
function F0() {
  let e = g.useRef(0);
  return (
    af(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function mf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let R0 = "div";
var hf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(hf || {});
function z0(e, t) {
  let n = g.useRef(null),
    r = at(n, t),
    { initialFocus: l, containers: i, features: o = 30, ...s } = e;
  nr() || (o = 1);
  let u = tl(n);
  U0({ ownerDocument: u }, !!(o & 16));
  let c = H0({ ownerDocument: u, container: n, initialFocus: l }, !!(o & 2));
  W0(
    { ownerDocument: u, container: n, containers: i, previousActiveElement: c },
    !!(o & 8)
  );
  let d = F0(),
    m = ne((S) => {
      let C = n.current;
      C &&
        ((h) => h())(() => {
          Ee(d.current, {
            [Sr.Forwards]: () => {
              $l(C, sn.First, { skipElements: [S.relatedTarget] });
            },
            [Sr.Backwards]: () => {
              $l(C, sn.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    y = da(),
    w = g.useRef(!1),
    x = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((w.current = !0),
          y.requestAnimationFrame(() => {
            w.current = !1;
          }));
      },
      onBlur(S) {
        let C = mf(i);
        n.current instanceof HTMLElement && C.add(n.current);
        let h = S.relatedTarget;
        h instanceof HTMLElement &&
          h.dataset.headlessuiFocusGuard !== "true" &&
          (gf(C, h) ||
            (w.current
              ? $l(
                  n.current,
                  Ee(d.current, {
                    [Sr.Forwards]: () => sn.Next,
                    [Sr.Backwards]: () => sn.Previous,
                  }) | sn.WrapAround,
                  { relativeTo: S.target }
                )
              : S.target instanceof HTMLElement && hn(S.target)));
      },
    };
  return F.createElement(
    F.Fragment,
    null,
    !!(o & 4) &&
      F.createElement(ds, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: ci.Focusable,
      }),
    Ze({ ourProps: x, theirProps: s, defaultTag: R0, name: "FocusTrap" }),
    !!(o & 4) &&
      F.createElement(ds, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: ci.Focusable,
      })
  );
}
let I0 = qe(z0),
  hr = Object.assign(I0, { features: hf });
function A0(e = !0) {
  let t = g.useRef(At.slice());
  return (
    fa(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Di(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = At.slice());
      },
      [e, At, t]
    ),
    ne(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function U0({ ownerDocument: e }, t) {
  let n = A0(t);
  fa(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        hn(n()));
  }, [t]),
    pf(() => {
      t && hn(n());
    });
}
function H0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = g.useRef(null),
    i = nl();
  return (
    fa(() => {
      if (!r) return;
      let o = t.current;
      o &&
        Di(() => {
          if (!i.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              l.current = s;
              return;
            }
          } else if (o.contains(s)) {
            l.current = s;
            return;
          }
          n != null && n.current
            ? hn(n.current)
            : $l(o, sn.First) === lf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function W0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let i = nl();
  ff(
    e == null ? void 0 : e.defaultView,
    "focus",
    (o) => {
      if (!l || !i.current) return;
      let s = mf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = o.target;
      c && c instanceof HTMLElement
        ? gf(s, c)
          ? ((r.current = c), hn(c))
          : (o.preventDefault(), o.stopPropagation(), hn(u))
        : hn(r.current);
    },
    !0
  );
}
function gf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let yf = g.createContext(!1);
function q0() {
  return g.useContext(yf);
}
function fs(e) {
  return F.createElement(yf.Provider, { value: e.force }, e.children);
}
function B0(e) {
  let t = q0(),
    n = g.useContext(vf),
    r = tl(e),
    [l, i] = g.useState(() => {
      if ((!t && n !== null) || Et.isServer) return null;
      let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (o) return o;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    g.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    g.useEffect(() => {
      t || (n !== null && i(n.current));
    }, [n, i, t]),
    l
  );
}
let Q0 = g.Fragment;
function V0(e, t) {
  let n = e,
    r = g.useRef(null),
    l = at(
      T0((d) => {
        r.current = d;
      }),
      t
    ),
    i = tl(r),
    o = B0(r),
    [s] = g.useState(() => {
      var d;
      return Et.isServer
        ? null
        : (d = i == null ? void 0 : i.createElement("div")) != null
        ? d
        : null;
    }),
    u = g.useContext(ps),
    c = nr();
  return (
    Xe(() => {
      !o ||
        !s ||
        o.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), o.appendChild(s));
    }, [o, s]),
    Xe(() => {
      if (s && u) return u.register(s);
    }, [u, s]),
    pf(() => {
      var d;
      !o ||
        !s ||
        (s instanceof Node && o.contains(s) && o.removeChild(s),
        o.childNodes.length <= 0 &&
          ((d = o.parentElement) == null || d.removeChild(o)));
    }),
    c
      ? !o || !s
        ? null
        : bi.createPortal(
            Ze({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: Q0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let Y0 = g.Fragment,
  vf = g.createContext(null);
function G0(e, t) {
  let { target: n, ...r } = e,
    l = { ref: at(t) };
  return F.createElement(
    vf.Provider,
    { value: n },
    Ze({ ourProps: l, theirProps: r, defaultTag: Y0, name: "Popover.Group" })
  );
}
let ps = g.createContext(null);
function K0() {
  let e = g.useContext(ps),
    t = g.useRef([]),
    n = ne((i) => (t.current.push(i), e && e.register(i), () => r(i))),
    r = ne((i) => {
      let o = t.current.indexOf(i);
      o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
    }),
    l = g.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    g.useMemo(
      () =>
        function ({ children: i }) {
          return F.createElement(ps.Provider, { value: l }, i);
        },
      [l]
    ),
  ];
}
let X0 = qe(V0),
  J0 = qe(G0),
  ms = Object.assign(X0, { Group: J0 });
function Z0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const eg = typeof Object.is == "function" ? Object.is : Z0,
  { useState: tg, useEffect: ng, useLayoutEffect: rg, useDebugValue: lg } = Dr;
function ig(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = tg({ inst: { value: r, getSnapshot: t } });
  return (
    rg(() => {
      (l.value = r), (l.getSnapshot = t), mo(l) && i({ inst: l });
    }, [e, r, t]),
    ng(
      () => (
        mo(l) && i({ inst: l }),
        e(() => {
          mo(l) && i({ inst: l });
        })
      ),
      [e]
    ),
    lg(r),
    r
  );
}
function mo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !eg(n, r);
  } catch {
    return !0;
  }
}
function og(e, t, n) {
  return t();
}
const sg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ag = !sg,
  ug = ag ? og : ig,
  cg = "useSyncExternalStore" in Dr ? ((e) => e.useSyncExternalStore)(Dr) : ug;
function dg(e) {
  return cg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function fg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...i) {
      let o = t[l].call(n, ...i);
      o && ((n = o), r.forEach((s) => s()));
    },
  };
}
function pg() {
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
        i = e - l;
      n.style(r, "paddingRight", `${i}px`);
    },
  };
}
function mg() {
  return sf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((i) => i()).some((i) => i.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = En();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let i = (l = window.scrollY) != null ? l : window.pageYOffset,
              o = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let u = s.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      d = e.querySelector(c);
                    d && !r(d) && (o = d);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (s) => {
                if (s.target instanceof HTMLElement)
                  if (r(s.target)) {
                    let u = s.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(s.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (s) => {
                  if (s.target instanceof HTMLElement)
                    if (r(s.target)) {
                      let u = s.target;
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
                      u.dataset.headlessuiPortal === "" && s.preventDefault();
                    } else s.preventDefault();
                },
                { passive: !1 }
              ),
              t.add(() => {
                var s;
                let u = (s = window.scrollY) != null ? s : window.pageYOffset;
                i !== u && window.scrollTo(0, i),
                  o &&
                    o.isConnected &&
                    (o.scrollIntoView({ block: "nearest" }), (o = null));
              });
          });
        },
      }
    : {};
}
function hg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function gg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let dn = fg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: En(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: gg(n) },
      l = [mg(), pg(), hg()];
    l.forEach(({ before: i }) => (i == null ? void 0 : i(r))),
      l.forEach(({ after: i }) => (i == null ? void 0 : i(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
dn.subscribe(() => {
  let e = dn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      dn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && dn.dispatch("TEARDOWN", n);
  }
});
function yg(e, t, n) {
  let r = dg(dn),
    l = e ? r.get(e) : void 0,
    i = l ? l.count > 0 : !1;
  return (
    Xe(() => {
      if (!(!e || !t))
        return dn.dispatch("PUSH", e, n), () => dn.dispatch("POP", e, n);
    }, [t, e]),
    i
  );
}
let ho = new Map(),
  gr = new Map();
function Fu(e, t = !0) {
  Xe(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var o;
      if (!r) return;
      let s = (o = gr.get(r)) != null ? o : 1;
      if ((s === 1 ? gr.delete(r) : gr.set(r, s - 1), s !== 1)) return;
      let u = ho.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        ho.delete(r));
    }
    let i = (n = gr.get(r)) != null ? n : 0;
    return (
      gr.set(r, i + 1),
      i !== 0 ||
        (ho.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function vg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    i = tl(l),
    o = ne(() => {
      var s, u, c;
      let d = [];
      for (let m of e)
        m !== null &&
          (m instanceof HTMLElement
            ? d.push(m)
            : "current" in m &&
              m.current instanceof HTMLElement &&
              d.push(m.current));
      if (t != null && t.current) for (let m of t.current) d.push(m);
      for (let m of (s =
        i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        m !== document.body &&
          m !== document.head &&
          m instanceof HTMLElement &&
          m.id !== "headlessui-portal-root" &&
          (m.contains(l.current) ||
            m.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host
            ) ||
            d.some((y) => m.contains(y)) ||
            d.push(m));
      return d;
    });
  return {
    resolveContainers: o,
    contains: ne((s) => o().some((u) => u.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: g.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : F.createElement(ds, { features: ci.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let ha = g.createContext(() => {});
ha.displayName = "StackContext";
var hs = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  hs || {}
);
function xg() {
  return g.useContext(ha);
}
function wg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let i = xg(),
    o = ne((...s) => {
      t == null || t(...s), i(...s);
    });
  return (
    Xe(() => {
      let s = l === void 0 || l === !0;
      return (
        s && o(0, n, r),
        () => {
          s && o(1, n, r);
        }
      );
    }, [o, n, r, l]),
    F.createElement(ha.Provider, { value: o }, e)
  );
}
let xf = g.createContext(null);
function wf() {
  let e = g.useContext(xf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, wf), t);
  }
  return e;
}
function Sg() {
  let [e, t] = g.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    g.useMemo(
      () =>
        function (n) {
          let r = ne(
              (i) => (
                t((o) => [...o, i]),
                () =>
                  t((o) => {
                    let s = o.slice(),
                      u = s.indexOf(i);
                    return u !== -1 && s.splice(u, 1), s;
                  })
              )
            ),
            l = g.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return F.createElement(xf.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let kg = "p";
function Ng(e, t) {
  let n = rr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    i = wf(),
    o = at(t);
  Xe(() => i.register(r), [r, i.register]);
  let s = { ref: o, ...i.props, id: r };
  return Ze({
    ourProps: s,
    theirProps: l,
    slot: i.slot || {},
    defaultTag: kg,
    name: i.name || "Description",
  });
}
let Eg = qe(Ng),
  jg = Object.assign(Eg, {});
var Cg = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Cg || {}),
  Pg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Pg || {});
let Tg = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  di = g.createContext(null);
di.displayName = "DialogContext";
function rl(e) {
  let t = g.useContext(di);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, rl), n);
  }
  return t;
}
function bg(e, t, n = () => [document.body]) {
  yg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Og(e, t) {
  return Ee(t.type, Tg, e, t);
}
let Dg = "div",
  _g = ui.RenderStrategy | ui.Static;
function Lg(e, t) {
  let n = rr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: i,
      initialFocus: o,
      role: s = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [d, m] = g.useState(0),
    y = g.useRef(!1);
  s = (function () {
    return s === "dialog" || s === "alertdialog"
      ? s
      : (y.current ||
          ((y.current = !0),
          console.warn(
            `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
          )),
        "dialog");
  })();
  let w = ma();
  l === void 0 && w !== null && (l = (w & ze.Open) === ze.Open);
  let x = g.useRef(null),
    S = at(x, t),
    C = tl(x),
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
  if (typeof i != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`
    );
  let p = l ? 0 : 1,
    [v, N] = g.useReducer(Og, {
      titleId: null,
      descriptionId: null,
      panelRef: g.createRef(),
    }),
    E = ne(() => i(!1)),
    P = ne((M) => N({ type: 0, id: M })),
    b = nr() ? (u ? !1 : p === 0) : !1,
    z = d > 1,
    L = g.useContext(di) !== null,
    [J, Q] = K0(),
    Y = {
      get current() {
        var M;
        return (M = v.panelRef.current) != null ? M : x.current;
      },
    },
    {
      resolveContainers: re,
      mainTreeNodeRef: Z,
      MainTreeNode: we,
    } = vg({ portals: J, defaultContainers: [Y] }),
    ue = z ? "parent" : "leaf",
    T = w !== null ? (w & ze.Closing) === ze.Closing : !1,
    k = L || T ? !1 : b,
    D = g.useCallback(() => {
      var M, V;
      return (V = Array.from(
        (M = C == null ? void 0 : C.querySelectorAll("body > *")) != null
          ? M
          : []
      ).find((H) =>
        H.id === "headlessui-portal-root"
          ? !1
          : H.contains(Z.current) && H instanceof HTMLElement
      )) != null
        ? V
        : null;
    }, [Z]);
  Fu(D, k);
  let R = z ? !0 : b,
    A = g.useCallback(() => {
      var M, V;
      return (V = Array.from(
        (M =
          C == null
            ? void 0
            : C.querySelectorAll("[data-headlessui-portal]")) != null
          ? M
          : []
      ).find((H) => H.contains(Z.current) && H instanceof HTMLElement)) != null
        ? V
        : null;
    }, [Z]);
  Fu(A, R),
    P0(
      re,
      (M) => {
        M.preventDefault(), E();
      },
      !(!b || z)
    );
  let ee = !(z || p !== 0);
  ff(C == null ? void 0 : C.defaultView, "keydown", (M) => {
    ee &&
      (M.defaultPrevented ||
        (M.key === df.Escape &&
          (M.preventDefault(), M.stopPropagation(), E())));
  }),
    bg(C, !(T || p !== 0 || L), re),
    g.useEffect(() => {
      if (p !== 0 || !x.current) return;
      let M = new ResizeObserver((V) => {
        for (let H of V) {
          let me = H.target.getBoundingClientRect();
          me.x === 0 && me.y === 0 && me.width === 0 && me.height === 0 && E();
        }
      });
      return M.observe(x.current), () => M.disconnect();
    }, [p, x, E]);
  let [Fe, ct] = Sg(),
    $ = g.useMemo(
      () => [{ dialogState: p, close: E, setTitleId: P }, v],
      [p, v, E, P]
    ),
    W = g.useMemo(() => ({ open: p === 0 }), [p]),
    O = {
      ref: S,
      id: r,
      role: s,
      "aria-modal": p === 0 ? !0 : void 0,
      "aria-labelledby": v.titleId,
      "aria-describedby": Fe,
    };
  return F.createElement(
    wg,
    {
      type: "Dialog",
      enabled: p === 0,
      element: x,
      onUpdate: ne((M, V) => {
        V === "Dialog" &&
          Ee(M, {
            [hs.Add]: () => m((H) => H + 1),
            [hs.Remove]: () => m((H) => H - 1),
          });
      }),
    },
    F.createElement(
      fs,
      { force: !0 },
      F.createElement(
        ms,
        null,
        F.createElement(
          di.Provider,
          { value: $ },
          F.createElement(
            ms.Group,
            { target: x },
            F.createElement(
              fs,
              { force: !1 },
              F.createElement(
                ct,
                { slot: W, name: "Dialog.Description" },
                F.createElement(
                  hr,
                  {
                    initialFocus: o,
                    containers: re,
                    features: b
                      ? Ee(ue, {
                          parent: hr.features.RestoreFocus,
                          leaf: hr.features.All & ~hr.features.FocusLock,
                        })
                      : hr.features.None,
                  },
                  F.createElement(
                    Q,
                    null,
                    Ze({
                      ourProps: O,
                      theirProps: c,
                      slot: W,
                      defaultTag: Dg,
                      features: _g,
                      visible: p === 0,
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
    F.createElement(we, null)
  );
}
let Mg = "div";
function $g(e, t) {
  let n = rr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: i, close: o }] = rl("Dialog.Overlay"),
    s = at(t),
    u = ne((d) => {
      if (d.target === d.currentTarget) {
        if (M0(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), o();
      }
    }),
    c = g.useMemo(() => ({ open: i === 0 }), [i]);
  return Ze({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: Mg,
    name: "Dialog.Overlay",
  });
}
let Fg = "div";
function Rg(e, t) {
  let n = rr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: i }, o] = rl("Dialog.Backdrop"),
    s = at(t);
  g.useEffect(() => {
    if (o.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [o.panelRef]);
  let u = g.useMemo(() => ({ open: i === 0 }), [i]);
  return F.createElement(
    fs,
    { force: !0 },
    F.createElement(
      ms,
      null,
      Ze({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Fg,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let zg = "div";
function Ig(e, t) {
  let n = rr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: i }, o] = rl("Dialog.Panel"),
    s = at(t, o.panelRef),
    u = g.useMemo(() => ({ open: i === 0 }), [i]),
    c = ne((d) => {
      d.stopPropagation();
    });
  return Ze({
    ourProps: { ref: s, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: zg,
    name: "Dialog.Panel",
  });
}
let Ag = "h2";
function Ug(e, t) {
  let n = rr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: i, setTitleId: o }] = rl("Dialog.Title"),
    s = at(t);
  g.useEffect(() => (o(r), () => o(null)), [r, o]);
  let u = g.useMemo(() => ({ open: i === 0 }), [i]);
  return Ze({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Ag,
    name: "Dialog.Title",
  });
}
let Hg = qe(Lg),
  Wg = qe(Rg),
  qg = qe(Ig),
  Bg = qe($g),
  Qg = qe(Ug),
  xt = Object.assign(Hg, {
    Backdrop: Wg,
    Panel: qg,
    Overlay: Bg,
    Title: Qg,
    Description: jg,
  });
function Vg(e = 0) {
  let [t, n] = g.useState(e),
    r = nl(),
    l = g.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r]
    ),
    i = g.useCallback((u) => !!(t & u), [t]),
    o = g.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r]
    ),
    s = g.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: i, removeFlag: o, toggleFlag: s };
}
function Yg(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function go(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function yo(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Gg(e, t) {
  let n = En();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [i, o] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, m) => m - d);
      return c;
    }),
    s = i + o;
  if (s !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, s),
        c.addEventListener(e, "transitionrun", (d) => {
          d.target === d.currentTarget && c.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function Kg(e, t, n, r) {
  let l = n ? "enter" : "leave",
    i = En(),
    o = r !== void 0 ? Yg(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Ee(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Ee(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Ee(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    yo(
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
    go(e, ...t.base, ...s, ...c),
    i.nextFrame(() => {
      yo(e, ...t.base, ...s, ...c),
        go(e, ...t.base, ...s, ...u),
        Gg(
          e,
          () => (yo(e, ...t.base, ...s), go(e, ...t.base, ...t.entered), o())
        );
    }),
    i.dispose
  );
}
function Xg({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: i,
}) {
  let o = nl(),
    s = da(),
    u = jt(n);
  Xe(() => {
    e && (u.current = "enter");
  }, [e]),
    Xe(() => {
      let c = En();
      s.add(c.dispose);
      let d = t.current;
      if (d && u.current !== "idle" && o.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            Kg(d, r.current, u.current === "enter", () => {
              c.dispose(), i.current(u.current);
            })
          ),
          c.dispose
        );
    }, [n]);
}
function $t(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let _i = g.createContext(null);
_i.displayName = "TransitionContext";
var Jg = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Jg || {});
function Zg() {
  let e = g.useContext(_i);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function ey() {
  let e = g.useContext(Li);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Li = g.createContext(null);
Li.displayName = "NestingContext";
function Mi(e) {
  return "children" in e
    ? Mi(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Sf(e, t) {
  let n = jt(e),
    r = g.useRef([]),
    l = nl(),
    i = da(),
    o = ne((w, x = Wt.Hidden) => {
      let S = r.current.findIndex(({ el: C }) => C === w);
      S !== -1 &&
        (Ee(x, {
          [Wt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Wt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        i.microTask(() => {
          var C;
          !Mi(r) && l.current && ((C = n.current) == null || C.call(n));
        }));
    }),
    s = ne((w) => {
      let x = r.current.find(({ el: S }) => S === w);
      return (
        x
          ? x.state !== "visible" && (x.state = "visible")
          : r.current.push({ el: w, state: "visible" }),
        () => o(w, Wt.Unmount)
      );
    }),
    u = g.useRef([]),
    c = g.useRef(Promise.resolve()),
    d = g.useRef({ enter: [], leave: [], idle: [] }),
    m = ne((w, x, S) => {
      u.current.splice(0),
        t &&
          (t.chains.current[x] = t.chains.current[x].filter(([C]) => C !== w)),
        t == null ||
          t.chains.current[x].push([
            w,
            new Promise((C) => {
              u.current.push(C);
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
    y = ne((w, x, S) => {
      Promise.all(d.current[x].splice(0).map(([C, h]) => h))
        .then(() => {
          var C;
          (C = u.current.shift()) == null || C();
        })
        .then(() => S(x));
    });
  return g.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: o,
      onStart: m,
      onStop: y,
      wait: c,
      chains: d,
    }),
    [s, o, r, m, y, d, c]
  );
}
function ty() {}
let ny = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ru(e) {
  var t;
  let n = {};
  for (let r of ny) n[r] = (t = e[r]) != null ? t : ty;
  return n;
}
function ry(e) {
  let t = g.useRef(Ru(e));
  return (
    g.useEffect(() => {
      t.current = Ru(e);
    }, [e]),
    t
  );
}
let ly = "div",
  kf = ui.RenderStrategy;
function iy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: i,
      beforeLeave: o,
      afterLeave: s,
      enter: u,
      enterFrom: c,
      enterTo: d,
      entered: m,
      leave: y,
      leaveFrom: w,
      leaveTo: x,
      ...S
    } = e,
    C = g.useRef(null),
    h = at(C, t),
    f = (n = S.unmount) == null || n ? Wt.Unmount : Wt.Hidden,
    { show: p, appear: v, initial: N } = Zg(),
    [E, P] = g.useState(p ? "visible" : "hidden"),
    b = ey(),
    { register: z, unregister: L } = b;
  g.useEffect(() => z(C), [z, C]),
    g.useEffect(() => {
      if (f === Wt.Hidden && C.current) {
        if (p && E !== "visible") {
          P("visible");
          return;
        }
        return Ee(E, { hidden: () => L(C), visible: () => z(C) });
      }
    }, [E, C, z, L, p, f]);
  let J = jt({
      base: $t(S.className),
      enter: $t(u),
      enterFrom: $t(c),
      enterTo: $t(d),
      entered: $t(m),
      leave: $t(y),
      leaveFrom: $t(w),
      leaveTo: $t(x),
    }),
    Q = ry({ beforeEnter: l, afterEnter: i, beforeLeave: o, afterLeave: s }),
    Y = nr();
  g.useEffect(() => {
    if (Y && E === "visible" && C.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [C, E, Y]);
  let re = N && !v,
    Z = v && p && N,
    we = !Y || re ? "idle" : p ? "enter" : "leave",
    ue = Vg(0),
    T = ne((ee) =>
      Ee(ee, {
        enter: () => {
          ue.addFlag(ze.Opening), Q.current.beforeEnter();
        },
        leave: () => {
          ue.addFlag(ze.Closing), Q.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    k = ne((ee) =>
      Ee(ee, {
        enter: () => {
          ue.removeFlag(ze.Opening), Q.current.afterEnter();
        },
        leave: () => {
          ue.removeFlag(ze.Closing), Q.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    D = Sf(() => {
      P("hidden"), L(C);
    }, b),
    R = g.useRef(!1);
  Xg({
    immediate: Z,
    container: C,
    classes: J,
    direction: we,
    onStart: jt((ee) => {
      (R.current = !0), D.onStart(C, ee, T);
    }),
    onStop: jt((ee) => {
      (R.current = !1),
        D.onStop(C, ee, k),
        ee === "leave" && !Mi(D) && (P("hidden"), L(C));
    }),
  });
  let A = S,
    $e = { ref: h };
  return (
    Z
      ? (A = {
          ...A,
          className: ai(
            S.className,
            ...J.current.enter,
            ...J.current.enterFrom
          ),
        })
      : R.current &&
        ((A.className = ai(
          S.className,
          (r = C.current) == null ? void 0 : r.className
        )),
        A.className === "" && delete A.className),
    F.createElement(
      Li.Provider,
      { value: D },
      F.createElement(
        _0,
        { value: Ee(E, { visible: ze.Open, hidden: ze.Closed }) | ue.flags },
        Ze({
          ourProps: $e,
          theirProps: A,
          defaultTag: ly,
          features: kf,
          visible: E === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function oy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...i } = e,
    o = g.useRef(null),
    s = at(o, t);
  nr();
  let u = ma();
  if (
    (n === void 0 && u !== null && (n = (u & ze.Open) === ze.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, d] = g.useState(n ? "visible" : "hidden"),
    m = Sf(() => {
      d("hidden");
    }),
    [y, w] = g.useState(!0),
    x = g.useRef([n]);
  Xe(() => {
    y !== !1 &&
      x.current[x.current.length - 1] !== n &&
      (x.current.push(n), w(!1));
  }, [x, n]);
  let S = g.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  g.useEffect(() => {
    if (n) d("visible");
    else if (!Mi(m)) d("hidden");
    else {
      let p = o.current;
      if (!p) return;
      let v = p.getBoundingClientRect();
      v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && d("hidden");
    }
  }, [n, m]);
  let C = { unmount: l },
    h = ne(() => {
      var p;
      y && w(!1), (p = e.beforeEnter) == null || p.call(e);
    }),
    f = ne(() => {
      var p;
      y && w(!1), (p = e.beforeLeave) == null || p.call(e);
    });
  return F.createElement(
    Li.Provider,
    { value: m },
    F.createElement(
      _i.Provider,
      { value: S },
      Ze({
        ourProps: {
          ...C,
          as: g.Fragment,
          children: F.createElement(Nf, {
            ref: s,
            ...C,
            ...i,
            beforeEnter: h,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: kf,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function sy(e, t) {
  let n = g.useContext(_i) !== null,
    r = ma() !== null;
  return F.createElement(
    F.Fragment,
    null,
    !n && r
      ? F.createElement(gs, { ref: t, ...e })
      : F.createElement(Nf, { ref: t, ...e })
  );
}
let gs = qe(oy),
  Nf = qe(iy),
  ay = qe(sy),
  wt = Object.assign(gs, { Child: ay, Root: gs }),
  fn = null;
const uy = async () => {
    if (fn) return fn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (fn = await e.json()), fn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  cy = (e) => {
    if (!fn) throw new Error("Configuration not loaded");
    return `${fn.domain}${e}`;
  },
  dy = () => fn,
  mt = async (e, t = {}) => {
    const n = cy(e),
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
        i = await l.text();
      let o;
      try {
        o = JSON.parse(i);
      } catch (s) {
        throw (
          (console.error("Failed to parse response as JSON:", s),
          new Error("Invalid JSON response"))
        );
      }
      if ((console.log("Response:", o), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return o;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  Ef = ({ value: e, onChange: t, onClose: n }) => {
    const [r, l] = F.useState(e),
      [i, o] = F.useState(null),
      [s, u] = F.useState(null),
      [c, d] = F.useState(!1),
      [m, y] = F.useState(!0);
    g.useEffect(() => {
      const v = (N) => {
        N.key === "Escape" && n();
      };
      return (
        window.addEventListener("keydown", v),
        () => window.removeEventListener("keydown", v)
      );
    }, [n]);
    const w = (v) => {
        m
          ? (l(v), y(!1))
          : c
          ? (l(v), d(!1))
          : i && !s
          ? (u(r), l(v))
          : l(r === "0" ? v : r + v);
      },
      x = (v) => {
        s && S(), o(v), d(!1), y(!1);
      },
      S = () => {
        if (!s || !i) return;
        const v = parseFloat(s),
          N = parseFloat(r);
        let E = 0;
        switch (i) {
          case "+":
            E = v + N;
            break;
          case "-":
            E = v - N;
            break;
          case "×":
            E = v * N;
            break;
          case "÷":
            if (N === 0) {
              alert("不能除以零");
              return;
            }
            E = v / N;
            break;
        }
        l(Math.round(E).toString()), u(null), o(null), d(!0), y(!1);
      },
      C = () => {
        l("0"), u(null), o(null), d(!1), y(!0);
      },
      h = () => {
        let v = r;
        if (s && i) {
          const N = parseFloat(s),
            E = parseFloat(r);
          let P = 0;
          switch (i) {
            case "+":
              P = N + E;
              break;
            case "-":
              P = N - E;
              break;
            case "×":
              P = N * E;
              break;
            case "÷":
              if (E === 0) {
                alert("不能除以零");
                return;
              }
              P = N / E;
              break;
          }
          v = Math.round(P).toString();
        }
        t(v),
          setTimeout(() => {
            n();
          }, 0);
      },
      f = (v) => {
        v.preventDefault();
        const N = v.key;
        N >= "0" && N <= "9"
          ? w(N)
          : N === "+" || N === "-"
          ? x(N)
          : N === "*"
          ? x("×")
          : N === "/"
          ? x("÷")
          : N === "Enter"
          ? h()
          : N === "Escape"
          ? n()
          : N === "Backspace" && l(r.slice(0, -1) || "0");
      },
      p = a.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: a.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (v) => v.stopPropagation(),
          children: [
            a.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                a.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                }),
                a.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: a.jsx(nf, { size: 20 }),
                }),
              ],
            }),
            a.jsx("div", {
              className: "mb-6",
              children: a.jsx("input", {
                type: "text",
                value: r,
                readOnly: !0,
                onKeyDown: f,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            a.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((v) =>
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "÷" ? x(v) : w(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
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
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "×" ? x(v) : w(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
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
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(), v === "-" ? x(v) : w(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
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
                  a.jsx(
                    "button",
                    {
                      onClick: (N) => {
                        N.stopPropagation(),
                          v === "=" ? S() : v === "+" ? x(v) : w(v);
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
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
            a.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                a.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), C();
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                a.jsx("button", {
                  onClick: (v) => {
                    v.stopPropagation(), h();
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
    return bi.createPortal(p, document.body);
  },
  fy = {
    zh: {
      "app.title": "申領建單",
      "app.search.placeholder": "搜尋藥品（藥名或藥碼）",
      "app.drug.name": "藥名",
      "app.drug.code": "藥碼",
      "app.drug.notSelected": "尚未選擇藥品",
      "app.store.source": "來源庫別",
      "app.store.source.placeholder": "請選擇來源庫別",
      "app.store.destination": "目的庫別",
      "app.store.destination.placeholder": "請選擇目的庫別",
      "app.quantity": "申領數量",
      "app.quantity.placeholder": "點擊開啟計算機",
      "app.quantity.available": "可用庫存",
      "app.button.create": "建立申領單",
      "app.button.processing": "處理中...",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無申領單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "申領單建立成功",
      "app.filter.placeholder": "請輸入搜尋關鍵字",
      "app.filter.source": "來源",
      "app.filter.destination": "目的",
      "app.filter.code": "藥碼",
      "app.filter.name": "藥名",
      "app.requestingUnit": "申領單位",
      "app.requestingUnit.placeholder": "請選擇申領單位",
      "app.requisitionType": "申領類別",
      "app.requisitionType.all": "全部",
      "app.requisitionType.general": "一般申領",
      "app.requisitionType.urgent": "緊急申領",
      "app.urgentRequisition": "緊急申領",
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
      "table.requestedQuantity": "申領量",
      "table.actualQuantity": "實撥量",
      "table.requestTime": "申領時間",
      "table.requestingPerson": "申領人",
      "table.issueTime": "核撥時間",
      "table.issuingPerson": "核撥人",
      "table.issuingUnit": "核撥單位",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "申領建單系統",
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
      "app.title": "Create Requisition Order",
      "app.search.placeholder": "Search drug (name or code)",
      "app.drug.name": "Drug Name",
      "app.drug.code": "Drug Code",
      "app.drug.notSelected": "No drug selected",
      "app.store.source": "Source Store",
      "app.store.source.placeholder": "Please select source store",
      "app.store.destination": "Destination Store",
      "app.store.destination.placeholder": "Please select destination store",
      "app.quantity": "Requisition Quantity",
      "app.quantity.placeholder": "Click to open calculator",
      "app.quantity.available": "Available Stock",
      "app.button.create": "Create Requisition Order",
      "app.button.processing": "Processing...",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Requisition order created successfully",
      "app.filter.placeholder": "Enter search keyword",
      "app.filter.source": "Source",
      "app.filter.destination": "Destination",
      "app.filter.code": "Code",
      "app.filter.name": "Name",
      "app.requestingUnit": "Requesting Unit",
      "app.requestingUnit.placeholder": "Please select requesting unit",
      "app.requisitionType": "Requisition Type",
      "app.requisitionType.all": "All",
      "app.requisitionType.general": "General",
      "app.requisitionType.urgent": "Urgent",
      "app.urgentRequisition": "Urgent Requisition",
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
      "table.requestedQuantity": "Requested Qty",
      "table.actualQuantity": "Actual Qty",
      "table.requestTime": "Request Time",
      "table.requestingPerson": "Requesting Person",
      "table.issueTime": "Issue Time",
      "table.issuingPerson": "Issuing Person",
      "table.issuingUnit": "Issuing Unit",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Requisition Order System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 Hongsen Smart Technology",
      "platform.title": "Smart Pharmacy Platform",
    },
  },
  jf = g.createContext(void 0),
  py = ({ children: e }) => {
    const [t, n] = g.useState("zh"),
      r = () => {
        n((i) => (i === "zh" ? "en" : "zh"));
      },
      l = (i) => fy[t][i] || i;
    return a.jsx(jf.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Dt = () => {
    const e = g.useContext(jf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  my = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = Dt(),
      l = (i, o, s, u) => {
        const c = new Date(`${i}T${o}`),
          d = new Date(`${s}T${u}`);
        n(c, d);
      };
    return a.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        a.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            a.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            a.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: a.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            a.jsxs("div", {
              className: "space-y-2",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                a.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    a.jsx("input", {
                      type: "date",
                      value: de(e, "yyyy-MM-dd"),
                      onChange: (i) =>
                        l(
                          i.target.value,
                          de(e, "HH:mm:ss"),
                          de(t, "yyyy-MM-dd"),
                          de(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    a.jsx("input", {
                      type: "time",
                      value: de(e, "HH:mm:ss"),
                      onChange: (i) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          i.target.value,
                          de(t, "yyyy-MM-dd"),
                          de(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "space-y-2",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                a.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    a.jsx("input", {
                      type: "date",
                      value: de(t, "yyyy-MM-dd"),
                      onChange: (i) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          de(e, "HH:mm:ss"),
                          i.target.value,
                          de(t, "HH:mm:ss")
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    a.jsx("input", {
                      type: "time",
                      value: de(t, "HH:mm:ss"),
                      onChange: (i) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          de(e, "HH:mm:ss"),
                          de(t, "yyyy-MM-dd"),
                          i.target.value
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
  hy = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: i } = Dt(),
      [o, s] = g.useState(null),
      [u, c] = g.useState(!1),
      [d, m] = g.useState(!1),
      [y, w] = g.useState(!1),
      [x, S] = g.useState(""),
      [C, h] = g.useState(null),
      [f, p] = g.useState(!1),
      [v, N] = g.useState("name"),
      [E, P] = g.useState(""),
      [b, z] = g.useState("all"),
      L = (k) => {
        if (!k || k === "0001-01-01T00:00:00" || k === "1/01/01 00:00:00")
          return "-";
        try {
          let D;
          if (k.includes("/")) {
            const [R, A] = k.split(" "),
              [$e, ee, ut] = R.split("/");
            D = new Date(
              `${$e}-${ee.padStart(2, "0")}-${ut.padStart(2, "0")}T${A}`
            );
          } else D = new Date(k);
          return de(D, "yyyy-MM-dd HH:mm:ss");
        } catch {
          return k;
        }
      },
      J = [
        { value: "name", label: i("app.filter.name") },
        { value: "code", label: i("app.filter.code") },
        { value: "requestingUnit", label: i("app.requestingUnit") },
      ],
      Q = [
        { value: "all", label: i("app.requisitionType.all") },
        { value: "一般申領", label: i("app.requisitionType.general") },
        { value: "緊急申領", label: i("app.requisitionType.urgent") },
      ],
      Y = e.filter((k) => {
        if (E) {
          const D = E.toLowerCase();
          let R = !1;
          switch (v) {
            case "name":
              R = k.name.toLowerCase().includes(D);
              break;
            case "code":
              R = k.code.toLowerCase().includes(D);
              break;
            case "requestingUnit":
              R = k.requestingUnit.toLowerCase().includes(D);
              break;
            default:
              R = !0;
          }
          if (!R) return !1;
        }
        return b !== "all" ? k.actionType === b : !0;
      }),
      re = async () => {
        if (o) {
          p(!0), h(null);
          try {
            const k = await mt("/api/materialRequisition/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [o.GUID] },
            });
            if (k.Code === 200) m(!1), c(!1), r(t, n);
            else throw new Error(k.Result || "刪除失敗");
          } catch (k) {
            h(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            p(!1);
          }
        }
      },
      Z = async () => {
        if (o) {
          if (!x || isNaN(Number(x)) || Number(x) <= 0) {
            h("請輸入有效的數量");
            return;
          }
          p(!0), h(null);
          try {
            const k = await mt("/api/materialRequisition/update_qty", {
              method: "POST",
              body: { Data: { GUID: o.GUID, requestedQuantity: x } },
            });
            if (k.Code === 200) c(!1), r(t, n);
            else throw new Error(k.Result || "更新失敗");
          } catch (k) {
            h(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            p(!1);
          }
        }
      },
      we = (k) => {
        k.state === "等待過帳" &&
          (s(k), S(k.requestedQuantity), h(null), c(!0));
      },
      ue = (k) => {
        k.preventDefault();
      },
      T = (k) => {
        const D = k.state === "等待過帳";
        return a.jsxs(
          "div",
          {
            onClick: () => we(k),
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${
            D
              ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-200"
              : "bg-white border-gray-200"
          }
        `,
            children: [
              a.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  a.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      a.jsx("div", {
                        className: "font-medium text-gray-900",
                        children: k.name,
                      }),
                      a.jsx("div", {
                        className: "font-mono text-sm text-gray-600",
                        children: k.code,
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                      k.state === "等待過帳"
                        ? "bg-yellow-100 text-yellow-800"
                        : k.state === "已過帳"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`,
                    children: k.state,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("app.requestingUnit"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestingUnit,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("app.requisitionType"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.actionType,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestedQuantity"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestedQuantity,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.actualQuantity"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.actualQuantity || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestingPerson"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.requestingPerson || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issuingPerson"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.issuingPerson || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issuingUnit"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: k.issuingUnit || "-",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.requestTime"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: L(k.requestTime),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: i("table.issueTime"),
                      }),
                      a.jsx("div", {
                        className: "font-medium",
                        children: L(k.issueTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          k.GUID
        );
      };
    return a.jsxs("div", {
      children: [
        a.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: i("app.orders.title"),
        }),
        a.jsx("div", {
          className: "mb-6",
          children: a.jsx(my, { startDate: t, endDate: n, onDateChange: r }),
        }),
        a.jsx("div", {
          className: "mb-6",
          children: a.jsxs("form", {
            onSubmit: ue,
            className: "flex flex-wrap items-center gap-4",
            children: [
              a.jsxs("div", {
                className: "flex gap-3",
                children: [
                  a.jsx("select", {
                    value: v,
                    onChange: (k) => N(k.target.value),
                    className:
                      "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    children: J.map((k) =>
                      a.jsx(
                        "option",
                        { value: k.value, children: k.label },
                        k.value
                      )
                    ),
                  }),
                  a.jsxs("div", {
                    className: "relative w-64",
                    children: [
                      a.jsx("input", {
                        type: "text",
                        value: E,
                        onChange: (k) => P(k.target.value),
                        placeholder: i("app.filter.placeholder"),
                        className:
                          "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      }),
                      a.jsx(tf, {
                        className: "absolute left-3 top-2.5 text-gray-400",
                        size: 20,
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-4 ml-auto",
                children: [
                  a.jsxs("span", {
                    className:
                      "text-base font-medium text-gray-700 whitespace-nowrap",
                    children: [i("app.requisitionType"), ":"],
                  }),
                  a.jsx("div", {
                    className: "flex gap-4",
                    children: Q.map((k) =>
                      a.jsxs(
                        "label",
                        {
                          className:
                            "flex items-center gap-2 cursor-pointer whitespace-nowrap",
                          children: [
                            a.jsx("input", {
                              type: "radio",
                              name: "requisitionType",
                              value: k.value,
                              checked: b === k.value,
                              onChange: (D) => z(D.target.value),
                              className:
                                "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300",
                            }),
                            a.jsx("span", {
                              className: "text-base text-gray-700",
                              children: k.label,
                            }),
                          ],
                        },
                        k.value
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        C &&
          a.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              a.jsx(si, { size: 20 }),
              a.jsx("span", { className: "text-base", children: C }),
            ],
          }),
        l
          ? a.jsxs("div", {
              className: "text-center py-8",
              children: [
                a.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                a.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: i("app.orders.loading"),
                }),
              ],
            })
          : Y.length === 0
          ? a.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: i("app.orders.empty"),
            })
          : a.jsxs(a.Fragment, {
              children: [
                a.jsx("div", {
                  className: "sm:hidden space-y-4",
                  children: Y.map(T),
                }),
                a.jsx("div", {
                  className:
                    "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                  children: a.jsxs("table", {
                    className: "min-w-full",
                    children: [
                      a.jsx("thead", {
                        className: "bg-gray-50",
                        children: a.jsxs("tr", {
                          children: [
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("app.requestingUnit"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("app.requisitionType"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.drugCode"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.drugName"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestedQuantity"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.actualQuantity"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestTime"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.requestingPerson"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.status"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issueTime"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issuingPerson"),
                            }),
                            a.jsx("th", {
                              className:
                                "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                              children: i("table.issuingUnit"),
                            }),
                          ],
                        }),
                      }),
                      a.jsx("tbody", {
                        className: "bg-white divide-y divide-gray-200",
                        children: Y.map((k) => {
                          const D = k.state === "等待過帳";
                          return a.jsxs(
                            "tr",
                            {
                              onClick: () => we(k),
                              className: `
                        transition-colors duration-150
                        ${
                          D
                            ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer"
                            : "hover:bg-gray-50"
                        }
                      `,
                              children: [
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.requestingUnit,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.actionType,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900",
                                  children: k.code,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.name,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: k.requestedQuantity,
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                  children: k.actualQuantity || "-",
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: L(k.requestTime),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.requestingPerson || "-",
                                }),
                                a.jsx("td", {
                                  className: "px-6 py-3 whitespace-nowrap",
                                  children: a.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${
                                      k.state === "等待過帳"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : k.state === "已過帳"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`,
                                    children: k.state,
                                  }),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                  children: L(k.issueTime),
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.issuingPerson || "-",
                                }),
                                a.jsx("td", {
                                  className:
                                    "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                  children: k.issuingUnit || "-",
                                }),
                              ],
                            },
                            k.GUID
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        a.jsx(wt, {
          appear: !0,
          show: u,
          as: g.Fragment,
          children: a.jsxs(xt, {
            as: "div",
            className: "relative z-50",
            onClose: () => !f && c(!1),
            children: [
              a.jsx(wt.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: a.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              a.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: a.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: a.jsx(wt.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: a.jsxs(xt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        a.jsx(xt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "編輯申領單",
                        }),
                        o &&
                          a.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              a.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("app.requestingUnit"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.requestingUnit,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("app.requisitionType"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.actionType,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestedQuantity"),
                                      }),
                                      a.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: a.jsx("input", {
                                          type: "text",
                                          value: x,
                                          onClick: () => w(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: i(
                                            "app.quantity.placeholder"
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.actualQuantity"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.actualQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestingPerson"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issuingPerson"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.issuingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issuingUnit"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: o.issuingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.requestTime"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: L(o.requestTime),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: i("table.issueTime"),
                                      }),
                                      a.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: L(o.issueTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              C &&
                                a.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    a.jsx(si, { size: 20 }),
                                    a.jsx("span", {
                                      className: "text-base",
                                      children: C,
                                    }),
                                  ],
                                }),
                              a.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  a.jsxs("button", {
                                    type: "button",
                                    onClick: () => m(!0),
                                    disabled: f,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [a.jsx(p0, { size: 16 }), "刪除"],
                                  }),
                                  a.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      a.jsx("button", {
                                        type: "button",
                                        onClick: () => !f && c(!1),
                                        disabled: f,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      a.jsx("button", {
                                        type: "button",
                                        onClick: Z,
                                        disabled: f,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: f ? "處理中..." : "儲存",
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
        a.jsx(wt, {
          appear: !0,
          show: d,
          as: g.Fragment,
          children: a.jsxs(xt, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !f && m(!1),
            children: [
              a.jsx(wt.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: a.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              a.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: a.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: a.jsx(wt.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: a.jsxs(xt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        a.jsx(xt.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除申領單",
                        }),
                        a.jsx("div", {
                          className: "mt-2",
                          children: a.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆申領資料嗎？",
                          }),
                        }),
                        a.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => !f && m(!1),
                              disabled: f,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            a.jsx("button", {
                              type: "button",
                              onClick: re,
                              disabled: f,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: f ? "處理中..." : "確認刪除",
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
        y && a.jsx(Ef, { value: x, onChange: S, onClose: () => w(!1) }),
      ],
    });
  },
  Cf = (e) => {
    const t = e.find((n) => n.name === "申領建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  gy = (e) =>
    Cf(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  $i = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Cf(t.Permissions)
        ? (fi(), null)
        : t;
    } catch {
      return fi(), null;
    }
  },
  fi = () => {
    sessionStorage.removeItem("user_session");
  },
  yy = () => {
    const e = $i();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (fi(), !1) : !0;
  },
  vy = () => {
    const e = $i();
    return (e == null ? void 0 : e.Name) || "";
  },
  xy = () => {
    const e = $i();
    return (e == null ? void 0 : e.ID) || "";
  },
  wy = ({
    onLogin: e,
    className: t = "",
    title: n = "申領建單系統",
    logo: r,
  }) => {
    const [l, i] = g.useState(""),
      [o, s] = g.useState(""),
      [u, c] = g.useState(null),
      [d, m] = g.useState(!1),
      y = async (w) => {
        w.preventDefault(), c(null), m(!0);
        try {
          const x = await mt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: o } },
          });
          if (x.Code === 200) {
            if (!gy(x.Data)) {
              c("無申領建單權限，無法登入");
              return;
            }
            e();
          } else c(x.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (x) {
          console.error("Login error:", x),
            c(x instanceof Error ? x.message : "系統錯誤，請稍後再試");
        } finally {
          m(!1);
        }
      };
    return a.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: a.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            a.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          a.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            a.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                a.jsx(si, { size: 20 }),
                a.jsx("span", { children: u }),
              ],
            }),
          a.jsxs("form", {
            onSubmit: y,
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  a.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (w) => i(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  a.jsx("input", {
                    type: "password",
                    id: "password",
                    value: o,
                    onChange: (w) => s(w.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              a.jsx("button", {
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
  Sy = () => {
    const { language: e, toggleLanguage: t } = Dt();
    return a.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        a.jsx(c0, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  ky = ({ title: e }) =>
    a.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Ny = () => {
    const e = $i();
    return e
      ? a.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Ey = ({ onLogout: e }) => {
    const { t } = Dt();
    return a.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        a.jsx(f0, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  jy = () => {
    const { t: e } = Dt(),
      t = () => {
        const n = dy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return a.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        a.jsx(d0, { size: 24 }),
        a.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Cy = ({ onLogout: e }) => {
    const { t } = Dt();
    return a.jsx("header", {
      className: "bg-white",
      children: a.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: a.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsx(jy, {}),
                a.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    a.jsx(ky, { title: t("app.title") }),
                    a.jsx(Ny, {}),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [a.jsx(Sy, {}), a.jsx(Ey, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  Pf = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const [l, i] = g.useState(!1);
    g.useEffect(() => {
      const c = setTimeout(() => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      }, n);
      return () => clearTimeout(c);
    }, [n, t]);
    const o = () => {
        i(!0),
          setTimeout(() => {
            t();
          }, 300);
      },
      s =
        r === "success"
          ? {
              bg: "bg-green-50",
              text: "text-green-800",
              border: "border-green-200",
              icon: "text-green-500",
              button: "text-green-600 hover:text-green-800",
            }
          : {
              bg: "bg-red-50",
              text: "text-red-800",
              border: "border-red-200",
              icon: "text-red-500",
              button: "text-red-600 hover:text-red-800",
            },
      u = a.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${
          s.bg
        } ${s.text} px-4 py-3 rounded-lg shadow-xl border ${s.border} ${
          l ? "animate-slide-out" : "animate-slide-in"
        }`,
        style: { zIndex: 1e6 },
        children: [
          r === "success"
            ? a.jsx(u0, { size: 20, className: s.icon })
            : a.jsx(si, { size: 20, className: s.icon }),
          a.jsx("span", { className: "text-sm font-medium", children: e }),
          a.jsx("button", {
            onClick: o,
            className: `ml-2 ${s.button} transition-colors duration-150`,
            children: a.jsx(nf, { size: 16 }),
          }),
        ],
      });
    return bi.createPortal(u, document.body);
  },
  Py = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
  }) => {
    const { t: i } = Dt(),
      [o, s] = g.useState(""),
      [u, c] = g.useState([]),
      [d, m] = g.useState(null),
      [y, w] = g.useState(""),
      [x, S] = g.useState(""),
      [C, h] = g.useState(!1),
      [f, p] = g.useState(null),
      [v, N] = g.useState(null),
      [E, P] = g.useState(null),
      [b, z] = g.useState(!1),
      [L, J] = g.useState(!1),
      [Q, Y] = g.useState([]),
      [re, Z] = g.useState(null),
      [we, ue] = g.useState(!1),
      T = t.filter((O) => O.displayName !== "藥庫" && O.type !== "藥庫"),
      k = t.find((O) => O.type === "藥庫");
    g.useEffect(() => {
      l > 0 &&
        (s(""),
        c([]),
        m(null),
        w(""),
        S(""),
        p(null),
        N(null),
        Y([]),
        Z(null),
        P(null),
        ue(!1));
    }, [l]);
    const D = (O) => {
        const M = O.target.value;
        if ((s(M), !M.trim())) {
          c([]);
          return;
        }
        const V = M.toLowerCase(),
          H = e
            .filter((me) => {
              var _t;
              return (
                me.NAME.toLowerCase().includes(V) ||
                me.CODE.toLowerCase().includes(V) ||
                me.CHT_NAME.toLowerCase().includes(V) ||
                ((_t = me.SKDIACODE) == null
                  ? void 0
                  : _t.toLowerCase().includes(V))
              );
            })
            .slice(0, 10);
        c(H);
      },
      R = (O) => {
        m(O), s(""), c([]), p(null), Y([]), Z(null);
      },
      A = async (O, M) => {
        z(!0);
        try {
          const H = (
            await mt("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: M, ServerType: "藥庫", ValueAry: [O] },
            })
          ).Data[0];
          if ((p(H), H && H.lot && H.expiry_date && H.qty)) {
            const me = [],
              _t = H.lot || [],
              ga = H.expiry_date || [],
              ya = H.qty || [];
            for (
              let lr = 0;
              lr < Math.max(_t.length, ga.length, ya.length);
              lr++
            ) {
              const va = {
                lotNumber: _t[lr] || "",
                expiryDate: ga[lr] || "",
                quantity: ya[lr] || "0",
              };
              parseInt(va.quantity) > 0 && me.push(va);
            }
            Y(me), me.length === 1 ? Z(me[0]) : me.length > 1 && Z(null);
          } else Y([]), Z(null);
          P(null);
        } catch (V) {
          console.error("Error fetching stock:", V),
            P({ message: "無法取得庫存資料，請稍後再試", type: "error" }),
            p(null),
            Y([]),
            Z(null);
        } finally {
          z(!1);
        }
      },
      $e = async (O, M) => {
        J(!0);
        try {
          const H = (
            await mt("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: M, ServerType: "藥庫", ValueAry: [O] },
            })
          ).Data[0];
          N(H);
        } catch (V) {
          console.error("Error fetching pharmacy stock:", V), N(null);
        } finally {
          J(!1);
        }
      };
    g.useEffect(() => {
      d && y ? A(d.CODE, y) : (p(null), Y([]), Z(null));
    }, [d, y]),
      g.useEffect(() => {
        d && k ? $e(d.CODE, k.name) : N(null);
      }, [d, k]);
    const ee = (O) => {
        const M = O.target.value;
        w(M), P(null);
      },
      ut = (O) => {
        const M = O.target.value;
        (M === "" || /^\d+$/.test(M)) && S(M);
      },
      Fe = async (O) => {
        if ((O && O.preventDefault(), !d)) {
          P({ message: "請選擇藥品", type: "error" });
          return;
        }
        if (!y) {
          P({ message: "請選擇申領單位", type: "error" });
          return;
        }
        if (!x) {
          P({ message: "請輸入申領數量", type: "error" });
          return;
        }
        if (Q.length > 1 && !re) {
          P({ message: "請選擇批號", type: "error" });
          return;
        }
        await n({
          drug: d,
          sourceWarehouse: y,
          destinationWarehouse: "",
          quantity: x,
          stockInfo: f,
          selectedBatch: re || void 0,
          isUrgent: we,
        });
      },
      ct = (O) => {
        O.key === "Enter" && o && u.length > 0 && R(u[0]);
      },
      $ = (O) => (!O || O === "2050/01/01" ? "無期限" : O),
      W = () => (re ? re.quantity : null);
    return a.jsxs(a.Fragment, {
      children: [
        E &&
          a.jsx(Pf, {
            message: E.message,
            type: E.type,
            onClose: () => P(null),
          }),
        a.jsxs("form", {
          onSubmit: Fe,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("div", {
                  className: "flex gap-2",
                  children: a.jsxs("div", {
                    className: "relative flex-1",
                    children: [
                      a.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: D,
                        onKeyPress: ct,
                        placeholder: i("app.search.placeholder"),
                        className:
                          "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      }),
                      a.jsx(tf, {
                        size: 18,
                        className: "absolute left-2 top-2.5 text-gray-400",
                      }),
                    ],
                  }),
                }),
                u.length > 0 &&
                  a.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: u.map((O) =>
                      a.jsxs(
                        "div",
                        {
                          onClick: () => R(O),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            a.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: O.NAME,
                            }),
                            a.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", O.CODE],
                            }),
                            O.SKDIACODE &&
                              a.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", O.SKDIACODE],
                              }),
                            O.CHT_NAME &&
                              a.jsx("div", {
                                className: "text-base text-gray-600",
                                children: O.CHT_NAME,
                              }),
                          ],
                        },
                        O.GUID
                      )
                    ),
                  }),
              ],
            }),
            a.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.name"),
                    }),
                    a.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: d
                        ? a.jsxs("div", {
                            className: "p-4",
                            children: [
                              a.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: d.NAME,
                              }),
                              d.SKDIACODE &&
                                a.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", d.SKDIACODE],
                                }),
                              d.CHT_NAME &&
                                a.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: d.CHT_NAME,
                                }),
                            ],
                          })
                        : a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.code"),
                    }),
                    a.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: d
                        ? a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: d.CODE,
                            }),
                          })
                        : a.jsx("div", {
                            className: "p-4",
                            children: a.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requestingUnit"),
                    }),
                    a.jsxs("select", {
                      value: y,
                      onChange: ee,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        a.jsx("option", {
                          value: "",
                          children: i("app.requestingUnit.placeholder"),
                        }),
                        T.map((O) =>
                          a.jsx(
                            "option",
                            { value: O.displayName, children: O.displayName },
                            O.GUID
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requisitionType"),
                    }),
                    a.jsxs("div", {
                      className: "flex items-center space-x-3 pt-2",
                      children: [
                        a.jsx("input", {
                          type: "checkbox",
                          id: "urgentRequisition",
                          checked: we,
                          onChange: (O) => ue(O.target.checked),
                          className:
                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                        a.jsx("label", {
                          htmlFor: "urgentRequisition",
                          className: "text-base text-gray-700",
                          children: i("app.urgentRequisition"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d &&
              y &&
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "申領單位庫存資訊",
                  }),
                  a.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: b
                      ? a.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            a.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            a.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : f
                      ? a.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Pn, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                "總庫存: ",
                                f.qty
                                  ? f.qty.reduce(
                                      (O, M) => O + parseInt(M || "0"),
                                      0
                                    )
                                  : 0,
                              ],
                            }),
                            Q.length === 0
                              ? a.jsx("div", {
                                  className: "text-base text-gray-600",
                                  children: "無可用批號資訊",
                                })
                              : Q.length === 1
                              ? a.jsxs("div", {
                                  className:
                                    "bg-white rounded-lg border border-blue-200 p-4",
                                  children: [
                                    a.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900 mb-2",
                                      children: "批號資訊 (自動選取)",
                                    }),
                                    a.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                      children: [
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(uo, {
                                              size: 16,
                                              className: "text-green-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "效期:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: $(Q[0].expiryDate),
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(co, {
                                              size: 16,
                                              className: "text-purple-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "批號:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: Q[0].lotNumber || "無",
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(Pn, {
                                              size: 16,
                                              className: "text-blue-600",
                                            }),
                                            a.jsx("span", {
                                              className: "text-gray-600",
                                              children: "數量:",
                                            }),
                                            a.jsx("span", {
                                              className: "font-medium",
                                              children: Q[0].quantity,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : a.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    a.jsx("div", {
                                      className:
                                        "text-base font-medium text-gray-900",
                                      children: "請選擇批號:",
                                    }),
                                    a.jsx("div", {
                                      className: "space-y-2",
                                      children: Q.map((O, M) =>
                                        a.jsxs(
                                          "label",
                                          {
                                            className: `block p-4 rounded-lg border cursor-pointer transition-colors ${
                                              re === O
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 bg-white hover:bg-gray-50"
                                            }`,
                                            children: [
                                              a.jsx("input", {
                                                type: "radio",
                                                name: "batch",
                                                value: M,
                                                checked: re === O,
                                                onChange: () => Z(O),
                                                className: "sr-only",
                                              }),
                                              a.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm",
                                                children: [
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(uo, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: $(
                                                          O.expiryDate
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(co, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children:
                                                          O.lotNumber || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(Pn, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: O.quantity,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          M
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        })
                      : a.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "申領單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            d &&
              k &&
              a.jsxs("div", {
                className: "space-y-4",
                children: [
                  a.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "撥補單位庫存資訊",
                  }),
                  a.jsx("div", {
                    className:
                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                    children: L
                      ? a.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            a.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            a.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入撥補單位庫存資訊中...",
                            }),
                          ],
                        })
                      : v
                      ? a.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Pn, {
                                  size: 18,
                                  className: "text-blue-600",
                                }),
                                a.jsx("span", {
                                  className: "text-gray-700",
                                  children: "撥補單位:",
                                }),
                                a.jsx("span", {
                                  className: "font-semibold",
                                  children: k.displayName || k.name,
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-base font-medium text-gray-900",
                              children: [
                                a.jsx(Pn, {
                                  size: 18,
                                  className: "text-green-600",
                                }),
                                a.jsx("span", {
                                  className: "text-gray-700",
                                  children: "總庫存:",
                                }),
                                a.jsx("span", {
                                  className: "font-semibold text-green-700",
                                  children: v.qty
                                    ? v.qty.reduce(
                                        (O, M) => O + parseInt(M || "0"),
                                        0
                                      )
                                    : 0,
                                }),
                              ],
                            }),
                            v.lot &&
                              v.lot.length > 0 &&
                              a.jsxs("div", {
                                className: "mt-3 space-y-2",
                                children: [
                                  a.jsx("div", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "批號明細：",
                                  }),
                                  a.jsx("div", {
                                    className: "space-y-2",
                                    children: v.lot.map((O, M) => {
                                      var me, _t;
                                      const V =
                                          ((me = v.expiry_date) == null
                                            ? void 0
                                            : me[M]) || "",
                                        H =
                                          ((_t = v.qty) == null
                                            ? void 0
                                            : _t[M]) || "0";
                                      return parseInt(H) <= 0
                                        ? null
                                        : a.jsx(
                                            "div",
                                            {
                                              className:
                                                "bg-white rounded-lg border border-blue-200 p-3",
                                              children: a.jsxs("div", {
                                                className:
                                                  "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                                children: [
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(co, {
                                                        size: 16,
                                                        className:
                                                          "text-purple-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "批號:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: O || "無",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(uo, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "效期:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: $(V),
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      a.jsx(Pn, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "數量:",
                                                      }),
                                                      a.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: H,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            M
                                          );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        })
                      : a.jsx("div", {
                          className: "text-base text-gray-600",
                          children: "撥補單位無此藥品庫存資訊",
                        }),
                  }),
                ],
              }),
            a.jsxs("div", {
              className: "space-y-4",
              children: [
                a.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: i("app.quantity"),
                }),
                a.jsxs("div", {
                  className: "flex gap-4 items-center",
                  children: [
                    a.jsx("input", {
                      type: "text",
                      value: x,
                      onChange: ut,
                      onClick: () => h(!0),
                      placeholder: i("app.quantity.placeholder"),
                      className:
                        "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                    }),
                    W() &&
                      a.jsxs("span", {
                        className: `text-base font-medium ${
                          parseInt(W()) > 0 ? "text-green-600" : "text-red-600"
                        }`,
                        children: [i("app.quantity.available"), ": ", W()],
                      }),
                  ],
                }),
              ],
            }),
            C && a.jsx(Ef, { value: x, onChange: S, onClose: () => h(!1) }),
            a.jsx("button", {
              type: "submit",
              disabled: r || (Q.length > 1 && !re),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${
                r || (Q.length > 1 && !re)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
              }`,
              children: i(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  Ty = ({
    isOpen: e,
    note: t,
    drugName: n,
    onConfirm: r,
    onCancel: l,
    isProcessing: i = !1,
  }) =>
    a.jsx(wt, {
      appear: !0,
      show: e,
      as: g.Fragment,
      children: a.jsxs(xt, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !i && l(),
        children: [
          a.jsx(wt.Child, {
            as: g.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: a.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          a.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: a.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: a.jsx(wt.Child, {
                as: g.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: a.jsx(xt.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: a.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      a.jsx("div", {
                        className: "flex-shrink-0",
                        children: a.jsx(a0, {
                          className: "h-6 w-6 text-yellow-600",
                        }),
                      }),
                      a.jsxs("div", {
                        className: "flex-1",
                        children: [
                          a.jsx(xt.Title, {
                            as: "h3",
                            className: "text-lg font-medium text-gray-900",
                            children: "藥品通知",
                          }),
                          a.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "藥品名稱：",
                                  }),
                                  a.jsx("p", {
                                    className: "text-base text-gray-900 mt-1",
                                    children: n,
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "通知內容：",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "mt-1 bg-yellow-50 border border-yellow-200 rounded-lg p-3",
                                    children: a.jsx("p", {
                                      className:
                                        "text-base text-gray-900 whitespace-pre-wrap",
                                      children: t,
                                    }),
                                  }),
                                ],
                              }),
                              a.jsx("p", {
                                className: "text-base text-gray-600",
                                children:
                                  "此藥品有特殊通知，是否要繼續建立申領單？",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                              a.jsx("button", {
                                type: "button",
                                onClick: () => !i && l(),
                                disabled: i,
                                className:
                                  "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: "取消",
                              }),
                              a.jsx("button", {
                                type: "button",
                                onClick: r,
                                disabled: i,
                                className:
                                  "inline-flex justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: i ? "處理中..." : "繼續建單",
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
          }),
        ],
      }),
    }),
  by = ({ className: e = "" }) => {
    const { t } = Dt();
    return a.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: a.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: a.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function Oy() {
  Dt();
  const [e, t] = g.useState(!1),
    [n, r] = g.useState(!0),
    [l, i] = g.useState([]),
    [o, s] = g.useState([]),
    [u, c] = g.useState(null),
    [d, m] = g.useState(!1),
    [y, w] = g.useState(!1),
    [x, S] = g.useState(!1),
    [C, h] = g.useState(""),
    [f, p] = g.useState([]),
    [v, N] = g.useState(() => {
      const $ = new Date();
      return $.setHours(0, 0, 0, 0), $;
    }),
    [E, P] = g.useState(() => {
      const $ = new Date();
      return $.setHours(23, 59, 59, 999), $;
    }),
    [b, z] = g.useState(!1),
    [L, J] = g.useState(0),
    [Q, Y] = g.useState(!1),
    [re, Z] = g.useState(null),
    [we, ue] = g.useState(null);
  g.useEffect(() => {
    (async () => {
      try {
        await uy(), w(!0);
        const W = yy();
        t(W);
      } catch (W) {
        console.error("Error during initialization:", W),
          c("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    g.useEffect(() => {
      e && y && (k(), T(), D());
    }, [e, y]);
  const T = async () => {
      try {
        const W = (
          await mt("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((O) => O.FILE_STATUS !== "關檔中");
        i(W), c(null);
      } catch ($) {
        console.error("Error fetching drugs:", $),
          c("無法取得藥品資料，請稍後再試"),
          i([]);
      }
    },
    k = async () => {
      try {
        const $ = await mt("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!$ || !$.Data) throw new Error("Invalid response format");
        const W = $.Data.map((O) => ({
          ...O,
          displayName: O.name === "DS01" ? "藥庫" : O.name,
        }));
        s(W), c(null);
      } catch ($) {
        console.error("Error fetching warehouses:", $),
          c("無法取得庫別資料，請稍後再試"),
          s([]);
      }
    },
    D = async () => {
      z(!0);
      try {
        const $ = await mt("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              de(v, "yyyy-MM-dd HH:mm:ss"),
              de(E, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        p($.Data), c(null);
      } catch ($) {
        console.error("Error fetching orders:", $),
          c("無法取得申領單資料，請稍後再試"),
          p([]);
      } finally {
        z(!1);
      }
    },
    R = ($, W) => {
      N($), P(W), D();
    },
    A = async ($) => {
      const W = vy(),
        O = xy(),
        M = {
          actionType: $.isUrgent ? "緊急申領" : "一般申領",
          code: $.drug.CODE,
          name: $.drug.NAME,
          requestedQuantity: $.quantity,
          requestingUnit: $.sourceWarehouse,
          requestingPerson: W || "",
          requestingPersonID: O || "",
          state: "等待過帳",
        };
      try {
        const V = await mt("/api/materialRequisition/add", {
          method: "POST",
          body: { Data: [M] },
        });
        if (V.Code === 200)
          h(V.Result || "申領單建立成功"), S(!0), c(null), D(), J((H) => H + 1);
        else throw new Error(V.Result || "建立申領單失敗");
      } catch (V) {
        console.error("Error creating order:", V),
          c("建立申領單失敗，請稍後再試");
      } finally {
        m(!1);
      }
    },
    $e = async ($) => {
      try {
        const W = await mt("/api/controlpanel/get_by_startendtime_MedNotice", {
          method: "POST",
          body: {},
        });
        if (W.Data && Array.isArray(W.Data)) {
          const O = W.Data.find((M) => M.code === $);
          if (O && O.note) return O.note;
        }
        return null;
      } catch (W) {
        return console.error("Error checking med notice:", W), null;
      }
    },
    ee = async ($) => {
      try {
        m(!0), c(null);
        const W = await $e($.drug.CODE);
        W
          ? (ue($), Z({ note: W, drugName: $.drug.NAME }), Y(!0), m(!1))
          : await A($);
      } catch (W) {
        console.error("Error in handleCreateOrder:", W),
          c("建立申領單失敗，請稍後再試");
      } finally {
        Q || m(!1);
      }
    },
    ut = async () => {
      if (we)
        try {
          m(!0), Y(!1), await A(we);
        } catch ($) {
          console.error("Error in handleConfirmWithNotice:", $),
            c("建立申領單失敗，請稍後再試");
        } finally {
          m(!1), ue(null), Z(null);
        }
    },
    Fe = () => {
      Y(!1), m(!1), ue(null), Z(null);
    },
    ct = () => {
      fi(), t(!1);
    };
  return n
    ? a.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            a.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
    ? a.jsxs("div", {
        className: "min-h-screen flex flex-col",
        children: [
          a.jsx(Cy, { onLogout: ct }),
          x && a.jsx(Pf, { message: C, onClose: () => S(!1), duration: 3e3 }),
          Q &&
            re &&
            a.jsx(Ty, {
              isOpen: Q,
              note: re.note,
              drugName: re.drugName,
              onConfirm: ut,
              onCancel: Fe,
              isProcessing: d,
            }),
          a.jsx("main", {
            className: "flex-grow flex flex-col bg-white",
            children: a.jsxs("div", {
              className:
                "w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-8 pb-24",
              children: [
                a.jsx(Py, {
                  drugs: l,
                  warehouses: o,
                  onSubmit: ee,
                  isSubmitting: d,
                  resetTrigger: L,
                }),
                a.jsx("div", {
                  className: "mt-8",
                  children: a.jsx(hy, {
                    orders: f,
                    startDate: v,
                    endDate: E,
                    onDateChange: R,
                    isLoading: b,
                  }),
                }),
              ],
            }),
          }),
          a.jsx(by, {}),
        ],
      })
    : a.jsx(wy, { onLogin: () => t(!0) });
}
Kd(document.getElementById("root")).render(
  a.jsx(g.StrictMode, { children: a.jsx(py, { children: a.jsx(Oy, {}) }) })
);
