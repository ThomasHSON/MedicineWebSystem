var M2 = Object.defineProperty;
var D2 = (e, t, r) =>
  t in e
    ? M2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var Ru = (e, t, r) => D2(e, typeof t != "symbol" ? t + "" : t, r);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ay = { exports: {} },
  Cs = {},
  jy = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mo = Symbol.for("react.element"),
  I2 = Symbol.for("react.portal"),
  L2 = Symbol.for("react.fragment"),
  $2 = Symbol.for("react.strict_mode"),
  R2 = Symbol.for("react.profiler"),
  z2 = Symbol.for("react.provider"),
  F2 = Symbol.for("react.context"),
  B2 = Symbol.for("react.forward_ref"),
  U2 = Symbol.for("react.suspense"),
  W2 = Symbol.for("react.memo"),
  K2 = Symbol.for("react.lazy"),
  qh = Symbol.iterator;
function H2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qh && e[qh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ty = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ny = Object.assign,
  My = {};
function Xi(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = My),
    (this.updater = r || Ty));
}
Xi.prototype.isReactComponent = {};
Xi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dy() {}
Dy.prototype = Xi.prototype;
function wd(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = My),
    (this.updater = r || Ty));
}
var bd = (wd.prototype = new Dy());
bd.constructor = wd;
Ny(bd, Xi.prototype);
bd.isPureReactComponent = !0;
var Xh = Array.isArray,
  Iy = Object.prototype.hasOwnProperty,
  Sd = { current: null },
  Ly = { key: !0, ref: !0, __self: !0, __source: !0 };
function $y(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Iy.call(t, n) && !Ly.hasOwnProperty(n) && (i[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: mo,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Sd.current,
  };
}
function V2(e, t) {
  return {
    $$typeof: mo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mo;
}
function Y2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Qh = /\/+/g;
function zu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Y2("" + e.key)
    : t.toString(36);
}
function cl(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case mo:
          case I2:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + zu(o, 0) : n),
      Xh(i)
        ? ((r = ""),
          e != null && (r = e.replace(Qh, "$&/") + "/"),
          cl(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (Pd(i) &&
            (i = V2(
              i,
              r +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Qh, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), Xh(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var s = n + zu(a, l);
      o += cl(a, t, r, s, i);
    }
  else if (((s = H2(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(a = e.next()).done; )
      ((a = a.value), (s = n + zu(a, l++)), (o += cl(a, t, r, s, i)));
  else if (a === "object")
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
function No(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    cl(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}
function G2(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  fl = { transition: null },
  q2 = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: fl,
    ReactCurrentOwner: Sd,
  };
function Ry() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: No,
  forEach: function (e, t, r) {
    No(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      No(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      No(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
q.Component = Xi;
q.Fragment = L2;
q.Profiler = R2;
q.PureComponent = wd;
q.StrictMode = $2;
q.Suspense = U2;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q2;
q.act = Ry;
q.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = Ny({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Sd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Iy.call(t, s) &&
        !Ly.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    n.children = l;
  }
  return { $$typeof: mo, type: e.type, key: i, ref: a, props: n, _owner: o };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: F2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: z2, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = $y;
q.createFactory = function (e) {
  var t = $y.bind(null, e);
  return ((t.type = e), t);
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: B2, render: e };
};
q.isValidElement = Pd;
q.lazy = function (e) {
  return { $$typeof: K2, _payload: { _status: -1, _result: e }, _init: G2 };
};
q.memo = function (e, t) {
  return { $$typeof: W2, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = fl.transition;
  fl.transition = {};
  try {
    e();
  } finally {
    fl.transition = t;
  }
};
q.unstable_act = Ry;
q.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
q.useContext = function (e) {
  return tt.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
q.useId = function () {
  return tt.current.useId();
};
q.useImperativeHandle = function (e, t, r) {
  return tt.current.useImperativeHandle(e, t, r);
};
q.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
q.useReducer = function (e, t, r) {
  return tt.current.useReducer(e, t, r);
};
q.useRef = function (e) {
  return tt.current.useRef(e);
};
q.useState = function (e) {
  return tt.current.useState(e);
};
q.useSyncExternalStore = function (e, t, r) {
  return tt.current.useSyncExternalStore(e, t, r);
};
q.useTransition = function () {
  return tt.current.useTransition();
};
q.version = "18.3.1";
jy.exports = q;
var b = jy.exports;
const Pl = Mr(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X2 = b,
  Q2 = Symbol.for("react.element"),
  Z2 = Symbol.for("react.fragment"),
  J2 = Object.prototype.hasOwnProperty,
  eP = X2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  tP = { key: !0, ref: !0, __self: !0, __source: !0 };
function zy(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  (r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (n in t) J2.call(t, n) && !tP.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: Q2,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: eP.current,
  };
}
Cs.Fragment = Z2;
Cs.jsx = zy;
Cs.jsxs = zy;
Ay.exports = Cs;
var w = Ay.exports,
  Fy = { exports: {} },
  jt = {},
  By = { exports: {} },
  Uy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, M) {
    var W = C.length;
    C.push(M);
    e: for (; 0 < W; ) {
      var G = (W - 1) >>> 1,
        $ = C[G];
      if (0 < i($, M)) ((C[G] = M), (C[W] = $), (W = G));
      else break e;
    }
  }
  function r(C) {
    return C.length === 0 ? null : C[0];
  }
  function n(C) {
    if (C.length === 0) return null;
    var M = C[0],
      W = C.pop();
    if (W !== M) {
      C[0] = W;
      e: for (var G = 0, $ = C.length, fe = $ >>> 1; G < fe; ) {
        var Le = 2 * (G + 1) - 1,
          Ae = C[Le],
          it = Le + 1,
          bn = C[it];
        if (0 > i(Ae, W))
          it < $ && 0 > i(bn, Ae)
            ? ((C[G] = bn), (C[it] = W), (G = it))
            : ((C[G] = Ae), (C[Le] = W), (G = Le));
        else if (it < $ && 0 > i(bn, W)) ((C[G] = bn), (C[it] = W), (G = it));
        else break e;
      }
    }
    return M;
  }
  function i(C, M) {
    var W = C.sortIndex - M.sortIndex;
    return W !== 0 ? W : C.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    h = !1,
    g = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(C) {
    for (var M = r(u); M !== null; ) {
      if (M.callback === null) n(u);
      else if (M.startTime <= C)
        (n(u), (M.sortIndex = M.expirationTime), t(s, M));
      else break;
      M = r(u);
    }
  }
  function S(C) {
    if (((g = !1), x(C), !h))
      if (r(s) !== null) ((h = !0), V(P));
      else {
        var M = r(u);
        M !== null && B(S, M.startTime - C);
      }
  }
  function P(C, M) {
    ((h = !1), g && ((g = !1), m(k), (k = -1)), (p = !0));
    var W = d;
    try {
      for (
        x(M), f = r(s);
        f !== null && (!(f.expirationTime > M) || (C && !T()));
      ) {
        var G = f.callback;
        if (typeof G == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var $ = G(f.expirationTime <= M);
          ((M = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === r(s) && n(s),
            x(M));
        } else n(s);
        f = r(s);
      }
      if (f !== null) var fe = !0;
      else {
        var Le = r(u);
        (Le !== null && B(S, Le.startTime - M), (fe = !1));
      }
      return fe;
    } finally {
      ((f = null), (d = W), (p = !1));
    }
  }
  var E = !1,
    O = null,
    k = -1,
    _ = 5,
    j = -1;
  function T() {
    return !(e.unstable_now() - j < _);
  }
  function L() {
    if (O !== null) {
      var C = e.unstable_now();
      j = C;
      var M = !0;
      try {
        M = O(!0, C);
      } finally {
        M ? Y() : ((E = !1), (O = null));
      }
    } else E = !1;
  }
  var Y;
  if (typeof v == "function")
    Y = function () {
      v(L);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      D = F.port2;
    ((F.port1.onmessage = L),
      (Y = function () {
        D.postMessage(null);
      }));
  } else
    Y = function () {
      y(L, 0);
    };
  function V(C) {
    ((O = C), E || ((E = !0), Y()));
  }
  function B(C, M) {
    k = y(function () {
      C(e.unstable_now());
    }, M);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || p || ((h = !0), V(P));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (_ = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var W = d;
      d = M;
      try {
        return C();
      } finally {
        d = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, M) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var W = d;
      d = C;
      try {
        return M();
      } finally {
        d = W;
      }
    }),
    (e.unstable_scheduleCallback = function (C, M, W) {
      var G = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? G + W : G))
          : (W = G),
        C)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = W + $),
        (C = {
          id: c++,
          callback: M,
          priorityLevel: C,
          startTime: W,
          expirationTime: $,
          sortIndex: -1,
        }),
        W > G
          ? ((C.sortIndex = W),
            t(u, C),
            r(s) === null &&
              C === r(u) &&
              (g ? (m(k), (k = -1)) : (g = !0), B(S, W - G)))
          : ((C.sortIndex = $), t(s, C), h || p || ((h = !0), V(P))),
        C
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (C) {
      var M = d;
      return function () {
        var W = d;
        d = M;
        try {
          return C.apply(this, arguments);
        } finally {
          d = W;
        }
      };
    }));
})(Uy);
By.exports = Uy;
var rP = By.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nP = b,
  _t = rP;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wy = new Set(),
  za = {};
function ti(e, t) {
  (Ii(e, t), Ii(e + "Capture", t));
}
function Ii(e, t) {
  for (za[e] = t, e = 0; e < t.length; e++) Wy.add(t[e]);
}
var Or = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ic = Object.prototype.hasOwnProperty,
  iP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zh = {},
  Jh = {};
function aP(e) {
  return Ic.call(Jh, e)
    ? !0
    : Ic.call(Zh, e)
      ? !1
      : iP.test(e)
        ? (Jh[e] = !0)
        : ((Zh[e] = !0), !1);
}
function oP(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lP(e, t, r, n) {
  if (t === null || typeof t > "u" || oP(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
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
function rt(e, t, r, n, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ed = /[\-:]([a-z])/g;
function Od(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ed, Od);
    Ue[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ed, Od);
    Ue[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ed, Od);
  Ue[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kd(e, t, r, n) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (lP(t, r, i, n) && (r = null),
    n || i === null
      ? aP(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Dr = nP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mo = Symbol.for("react.element"),
  di = Symbol.for("react.portal"),
  pi = Symbol.for("react.fragment"),
  _d = Symbol.for("react.strict_mode"),
  Lc = Symbol.for("react.profiler"),
  Ky = Symbol.for("react.provider"),
  Hy = Symbol.for("react.context"),
  Cd = Symbol.for("react.forward_ref"),
  $c = Symbol.for("react.suspense"),
  Rc = Symbol.for("react.suspense_list"),
  Ad = Symbol.for("react.memo"),
  Kr = Symbol.for("react.lazy"),
  Vy = Symbol.for("react.offscreen"),
  em = Symbol.iterator;
function oa(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (em && e[em]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Fu;
function Sa(e) {
  if (Fu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Fu = (t && t[1]) || "";
    }
  return (
    `
` +
    Fu +
    e
  );
}
var Bu = !1;
function Uu(e, t) {
  if (!e || Bu) return "";
  Bu = !0;
  var r = Error.prepareStackTrace;
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
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = n.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((Bu = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? Sa(e) : "";
}
function sP(e) {
  switch (e.tag) {
    case 5:
      return Sa(e.type);
    case 16:
      return Sa("Lazy");
    case 13:
      return Sa("Suspense");
    case 19:
      return Sa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Uu(e.type, !1)), e);
    case 11:
      return ((e = Uu(e.type.render, !1)), e);
    case 1:
      return ((e = Uu(e.type, !0)), e);
    default:
      return "";
  }
}
function zc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pi:
      return "Fragment";
    case di:
      return "Portal";
    case Lc:
      return "Profiler";
    case _d:
      return "StrictMode";
    case $c:
      return "Suspense";
    case Rc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hy:
        return (e.displayName || "Context") + ".Consumer";
      case Ky:
        return (e._context.displayName || "Context") + ".Provider";
      case Cd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ad:
        return (
          (t = e.displayName || null),
          t !== null ? t : zc(e.type) || "Memo"
        );
      case Kr:
        ((t = e._payload), (e = e._init));
        try {
          return zc(e(t));
        } catch {}
    }
  return null;
}
function uP(e) {
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
      return zc(t);
    case 8:
      return t === _d ? "StrictMode" : "Mode";
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
function sn(e) {
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
function Yy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cP(e) {
  var t = Yy(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((n = "" + o), a.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Do(e) {
  e._valueTracker || (e._valueTracker = cP(e));
}
function Gy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Yy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function El(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fc(e, t) {
  var r = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function tm(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  ((r = sn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function qy(e, t) {
  ((t = t.checked), t != null && kd(e, "checked", t, !1));
}
function Bc(e, t) {
  qy(e, t);
  var r = sn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Uc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Uc(e, t.type, sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function rm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function Uc(e, t, r) {
  (t !== "number" || El(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Pa = Array.isArray;
function ki(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      ((i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0));
  } else {
    for (r = "" + sn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nm(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(N(92));
      if (Pa(r)) {
        if (1 < r.length) throw Error(N(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: sn(r) };
}
function Xy(e, t) {
  var r = sn(t.value),
    n = sn(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n));
}
function im(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Io,
  Zy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Io = Io || document.createElement("div"),
          Io.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Io.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fa(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ca = {
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
  fP = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ca).forEach(function (e) {
  fP.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ca[t] = Ca[e]));
  });
});
function Jy(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Ca.hasOwnProperty(e) && Ca[e])
      ? ("" + t).trim()
      : t + "px";
}
function e0(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = Jy(r, t[r], n);
      (r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i));
    }
}
var dP = ve(
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
function Hc(e, t) {
  if (t) {
    if (dP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Vc(e, t) {
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
var Yc = null;
function jd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gc = null,
  _i = null,
  Ci = null;
function am(e) {
  if ((e = yo(e))) {
    if (typeof Gc != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Ms(t)), Gc(e.stateNode, e.type, t));
  }
}
function t0(e) {
  _i ? (Ci ? Ci.push(e) : (Ci = [e])) : (_i = e);
}
function r0() {
  if (_i) {
    var e = _i,
      t = Ci;
    if (((Ci = _i = null), am(e), t)) for (e = 0; e < t.length; e++) am(t[e]);
  }
}
function n0(e, t) {
  return e(t);
}
function i0() {}
var Wu = !1;
function a0(e, t, r) {
  if (Wu) return e(t, r);
  Wu = !0;
  try {
    return n0(e, t, r);
  } finally {
    ((Wu = !1), (_i !== null || Ci !== null) && (i0(), r0()));
  }
}
function Ba(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Ms(r);
  if (n === null) return null;
  r = n[t];
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
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(N(231, t, typeof r));
  return r;
}
var qc = !1;
if (Or)
  try {
    var la = {};
    (Object.defineProperty(la, "passive", {
      get: function () {
        qc = !0;
      },
    }),
      window.addEventListener("test", la, la),
      window.removeEventListener("test", la, la));
  } catch {
    qc = !1;
  }
function pP(e, t, r, n, i, a, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Aa = !1,
  Ol = null,
  kl = !1,
  Xc = null,
  hP = {
    onError: function (e) {
      ((Aa = !0), (Ol = e));
    },
  };
function mP(e, t, r, n, i, a, o, l, s) {
  ((Aa = !1), (Ol = null), pP.apply(hP, arguments));
}
function vP(e, t, r, n, i, a, o, l, s) {
  if ((mP.apply(this, arguments), Aa)) {
    if (Aa) {
      var u = Ol;
      ((Aa = !1), (Ol = null));
    } else throw Error(N(198));
    kl || ((kl = !0), (Xc = u));
  }
}
function ri(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (r = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function o0(e) {
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
function om(e) {
  if (ri(e) !== e) throw Error(N(188));
}
function gP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ri(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return (om(i), e);
        if (a === n) return (om(i), t);
        a = a.sibling;
      }
      throw Error(N(188));
    }
    if (r.return !== n.return) ((r = i), (n = a));
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === r) {
          ((o = !0), (r = i), (n = a));
          break;
        }
        if (l === n) {
          ((o = !0), (n = i), (r = a));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === r) {
            ((o = !0), (r = a), (n = i));
            break;
          }
          if (l === n) {
            ((o = !0), (n = a), (r = i));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (r.alternate !== n) throw Error(N(190));
  }
  if (r.tag !== 3) throw Error(N(188));
  return r.stateNode.current === r ? e : t;
}
function l0(e) {
  return ((e = gP(e)), e !== null ? s0(e) : null);
}
function s0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = s0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var u0 = _t.unstable_scheduleCallback,
  lm = _t.unstable_cancelCallback,
  yP = _t.unstable_shouldYield,
  xP = _t.unstable_requestPaint,
  we = _t.unstable_now,
  wP = _t.unstable_getCurrentPriorityLevel,
  Td = _t.unstable_ImmediatePriority,
  c0 = _t.unstable_UserBlockingPriority,
  _l = _t.unstable_NormalPriority,
  bP = _t.unstable_LowPriority,
  f0 = _t.unstable_IdlePriority,
  As = null,
  ur = null;
function SP(e) {
  if (ur && typeof ur.onCommitFiberRoot == "function")
    try {
      ur.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tr = Math.clz32 ? Math.clz32 : OP,
  PP = Math.log,
  EP = Math.LN2;
function OP(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((PP(e) / EP) | 0)) | 0);
}
var Lo = 64,
  $o = 4194304;
function Ea(e) {
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
function Cl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (n = Ea(l)) : ((a &= o), a !== 0 && (n = Ea(a)));
  } else ((o = r & ~i), o !== 0 ? (n = Ea(o)) : a !== 0 && (n = Ea(a)));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      ((r = 31 - tr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i));
  return n;
}
function kP(e, t) {
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
function _P(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var o = 31 - tr(a),
      l = 1 << o,
      s = i[o];
    (s === -1
      ? (!(l & r) || l & n) && (i[o] = kP(l, t))
      : s <= t && (e.expiredLanes |= l),
      (a &= ~l));
  }
}
function Qc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function d0() {
  var e = Lo;
  return ((Lo <<= 1), !(Lo & 4194240) && (Lo = 64), e);
}
function Ku(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function vo(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tr(t)),
    (e[t] = r));
}
function CP(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - tr(r),
      a = 1 << i;
    ((t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a));
  }
}
function Nd(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - tr(r),
      i = 1 << n;
    ((i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i));
  }
}
var te = 0;
function p0(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var h0,
  Md,
  m0,
  v0,
  g0,
  Zc = !1,
  Ro = [],
  Zr = null,
  Jr = null,
  en = null,
  Ua = new Map(),
  Wa = new Map(),
  Yr = [],
  AP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Jr = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Ua.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wa.delete(t.pointerId);
  }
}
function sa(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = yo(t)), t !== null && Md(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function jP(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return ((Zr = sa(Zr, e, t, r, n, i)), !0);
    case "dragenter":
      return ((Jr = sa(Jr, e, t, r, n, i)), !0);
    case "mouseover":
      return ((en = sa(en, e, t, r, n, i)), !0);
    case "pointerover":
      var a = i.pointerId;
      return (Ua.set(a, sa(Ua.get(a) || null, e, t, r, n, i)), !0);
    case "gotpointercapture":
      return (
        (a = i.pointerId),
        Wa.set(a, sa(Wa.get(a) || null, e, t, r, n, i)),
        !0
      );
  }
  return !1;
}
function y0(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var r = ri(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = o0(r)), t !== null)) {
          ((e.blockedOn = t),
            g0(e.priority, function () {
              m0(r);
            }));
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ((Yc = n), r.target.dispatchEvent(n), (Yc = null));
    } else return ((t = yo(r)), t !== null && Md(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function um(e, t, r) {
  dl(e) && r.delete(t);
}
function TP() {
  ((Zc = !1),
    Zr !== null && dl(Zr) && (Zr = null),
    Jr !== null && dl(Jr) && (Jr = null),
    en !== null && dl(en) && (en = null),
    Ua.forEach(um),
    Wa.forEach(um));
}
function ua(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zc ||
      ((Zc = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, TP)));
}
function Ka(e) {
  function t(i) {
    return ua(i, e);
  }
  if (0 < Ro.length) {
    ua(Ro[0], e);
    for (var r = 1; r < Ro.length; r++) {
      var n = Ro[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Zr !== null && ua(Zr, e),
      Jr !== null && ua(Jr, e),
      en !== null && ua(en, e),
      Ua.forEach(t),
      Wa.forEach(t),
      r = 0;
    r < Yr.length;
    r++
  )
    ((n = Yr[r]), n.blockedOn === e && (n.blockedOn = null));
  for (; 0 < Yr.length && ((r = Yr[0]), r.blockedOn === null); )
    (y0(r), r.blockedOn === null && Yr.shift());
}
var Ai = Dr.ReactCurrentBatchConfig,
  Al = !0;
function NP(e, t, r, n) {
  var i = te,
    a = Ai.transition;
  Ai.transition = null;
  try {
    ((te = 1), Dd(e, t, r, n));
  } finally {
    ((te = i), (Ai.transition = a));
  }
}
function MP(e, t, r, n) {
  var i = te,
    a = Ai.transition;
  Ai.transition = null;
  try {
    ((te = 4), Dd(e, t, r, n));
  } finally {
    ((te = i), (Ai.transition = a));
  }
}
function Dd(e, t, r, n) {
  if (Al) {
    var i = Jc(e, t, r, n);
    if (i === null) (ec(e, t, n, jl, r), sm(e, n));
    else if (jP(i, e, t, r, n)) n.stopPropagation();
    else if ((sm(e, n), t & 4 && -1 < AP.indexOf(e))) {
      for (; i !== null; ) {
        var a = yo(i);
        if (
          (a !== null && h0(a),
          (a = Jc(e, t, r, n)),
          a === null && ec(e, t, n, jl, r),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else ec(e, t, n, null, r);
  }
}
var jl = null;
function Jc(e, t, r, n) {
  if (((jl = null), (e = jd(n)), (e = Cn(e)), e !== null))
    if (((t = ri(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = o0(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((jl = e), null);
}
function x0(e) {
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
      switch (wP()) {
        case Td:
          return 1;
        case c0:
          return 4;
        case _l:
        case bP:
          return 16;
        case f0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null,
  Id = null,
  pl = null;
function w0() {
  if (pl) return pl;
  var e,
    t = Id,
    r = t.length,
    n,
    i = "value" in Xr ? Xr.value : Xr.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
  return (pl = i.slice(e, 1 < n ? 1 - n : void 0));
}
function hl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zo() {
  return !0;
}
function cm() {
  return !1;
}
function Tt(e) {
  function t(r, n, i, a, o) {
    ((this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? zo
        : cm),
      (this.isPropagationStopped = cm),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = zo));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = zo));
      },
      persist: function () {},
      isPersistent: zo,
    }),
    t
  );
}
var Qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ld = Tt(Qi),
  go = ve({}, Qi, { view: 0, detail: 0 }),
  DP = Tt(go),
  Hu,
  Vu,
  ca,
  js = ve({}, go, {
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
    getModifierState: $d,
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
        : (e !== ca &&
            (ca && e.type === "mousemove"
              ? ((Hu = e.screenX - ca.screenX), (Vu = e.screenY - ca.screenY))
              : (Vu = Hu = 0),
            (ca = e)),
          Hu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vu;
    },
  }),
  fm = Tt(js),
  IP = ve({}, js, { dataTransfer: 0 }),
  LP = Tt(IP),
  $P = ve({}, go, { relatedTarget: 0 }),
  Yu = Tt($P),
  RP = ve({}, Qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zP = Tt(RP),
  FP = ve({}, Qi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  BP = Tt(FP),
  UP = ve({}, Qi, { data: 0 }),
  dm = Tt(UP),
  WP = {
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
  KP = {
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
  HP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function VP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = HP[e]) ? !!t[e] : !1;
}
function $d() {
  return VP;
}
var YP = ve({}, go, {
    key: function (e) {
      if (e.key) {
        var t = WP[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = hl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? KP[e.keyCode] || "Unidentified"
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
    getModifierState: $d,
    charCode: function (e) {
      return e.type === "keypress" ? hl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? hl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  GP = Tt(YP),
  qP = ve({}, js, {
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
  pm = Tt(qP),
  XP = ve({}, go, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $d,
  }),
  QP = Tt(XP),
  ZP = ve({}, Qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  JP = Tt(ZP),
  eE = ve({}, js, {
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
  tE = Tt(eE),
  rE = [9, 13, 27, 32],
  Rd = Or && "CompositionEvent" in window,
  ja = null;
Or && "documentMode" in document && (ja = document.documentMode);
var nE = Or && "TextEvent" in window && !ja,
  b0 = Or && (!Rd || (ja && 8 < ja && 11 >= ja)),
  hm = " ",
  mm = !1;
function S0(e, t) {
  switch (e) {
    case "keyup":
      return rE.indexOf(t.keyCode) !== -1;
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
function P0(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var hi = !1;
function iE(e, t) {
  switch (e) {
    case "compositionend":
      return P0(t);
    case "keypress":
      return t.which !== 32 ? null : ((mm = !0), hm);
    case "textInput":
      return ((e = t.data), e === hm && mm ? null : e);
    default:
      return null;
  }
}
function aE(e, t) {
  if (hi)
    return e === "compositionend" || (!Rd && S0(e, t))
      ? ((e = w0()), (pl = Id = Xr = null), (hi = !1), e)
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
      return b0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var oE = {
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
function vm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!oE[e.type] : t === "textarea";
}
function E0(e, t, r, n) {
  (t0(n),
    (t = Tl(t, "onChange")),
    0 < t.length &&
      ((r = new Ld("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t })));
}
var Ta = null,
  Ha = null;
function lE(e) {
  I0(e, 0);
}
function Ts(e) {
  var t = gi(e);
  if (Gy(t)) return e;
}
function sE(e, t) {
  if (e === "change") return t;
}
var O0 = !1;
if (Or) {
  var Gu;
  if (Or) {
    var qu = "oninput" in document;
    if (!qu) {
      var gm = document.createElement("div");
      (gm.setAttribute("oninput", "return;"),
        (qu = typeof gm.oninput == "function"));
    }
    Gu = qu;
  } else Gu = !1;
  O0 = Gu && (!document.documentMode || 9 < document.documentMode);
}
function ym() {
  Ta && (Ta.detachEvent("onpropertychange", k0), (Ha = Ta = null));
}
function k0(e) {
  if (e.propertyName === "value" && Ts(Ha)) {
    var t = [];
    (E0(t, Ha, e, jd(e)), a0(lE, t));
  }
}
function uE(e, t, r) {
  e === "focusin"
    ? (ym(), (Ta = t), (Ha = r), Ta.attachEvent("onpropertychange", k0))
    : e === "focusout" && ym();
}
function cE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ts(Ha);
}
function fE(e, t) {
  if (e === "click") return Ts(t);
}
function dE(e, t) {
  if (e === "input" || e === "change") return Ts(t);
}
function pE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nr = typeof Object.is == "function" ? Object.is : pE;
function Va(e, t) {
  if (nr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Ic.call(t, i) || !nr(e[i], t[i])) return !1;
  }
  return !0;
}
function xm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wm(e, t) {
  var r = xm(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = xm(r);
  }
}
function _0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? _0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function C0() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function zd(e) {
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
function hE(e) {
  var t = C0(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    _0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && zd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        ((n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = wm(r, a)));
        var o = wm(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var mE = Or && "documentMode" in document && 11 >= document.documentMode,
  mi = null,
  ef = null,
  Na = null,
  tf = !1;
function bm(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  tf ||
    mi == null ||
    mi !== El(n) ||
    ((n = mi),
    "selectionStart" in n && zd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Na && Va(Na, n)) ||
      ((Na = n),
      (n = Tl(ef, "onSelect")),
      0 < n.length &&
        ((t = new Ld("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = mi))));
}
function Fo(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var vi = {
    animationend: Fo("Animation", "AnimationEnd"),
    animationiteration: Fo("Animation", "AnimationIteration"),
    animationstart: Fo("Animation", "AnimationStart"),
    transitionend: Fo("Transition", "TransitionEnd"),
  },
  Xu = {},
  A0 = {};
Or &&
  ((A0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vi.animationend.animation,
    delete vi.animationiteration.animation,
    delete vi.animationstart.animation),
  "TransitionEvent" in window || delete vi.transitionend.transition);
function Ns(e) {
  if (Xu[e]) return Xu[e];
  if (!vi[e]) return e;
  var t = vi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in A0) return (Xu[e] = t[r]);
  return e;
}
var j0 = Ns("animationend"),
  T0 = Ns("animationiteration"),
  N0 = Ns("animationstart"),
  M0 = Ns("transitionend"),
  D0 = new Map(),
  Sm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function dn(e, t) {
  (D0.set(e, t), ti(t, [e]));
}
for (var Qu = 0; Qu < Sm.length; Qu++) {
  var Zu = Sm[Qu],
    vE = Zu.toLowerCase(),
    gE = Zu[0].toUpperCase() + Zu.slice(1);
  dn(vE, "on" + gE);
}
dn(j0, "onAnimationEnd");
dn(T0, "onAnimationIteration");
dn(N0, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(M0, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
ti(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ti(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ti("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ti(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ti(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ti(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Oa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  yE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));
function Pm(e, t, r) {
  var n = e.type || "unknown-event";
  ((e.currentTarget = r), vP(n, t, void 0, e), (e.currentTarget = null));
}
function I0(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var l = n[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== a && i.isPropagationStopped())) break e;
          (Pm(i, l, u), (a = s));
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((l = n[o]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== a && i.isPropagationStopped())
          )
            break e;
          (Pm(i, l, u), (a = s));
        }
    }
  }
  if (kl) throw ((e = Xc), (kl = !1), (Xc = null), e);
}
function oe(e, t) {
  var r = t[lf];
  r === void 0 && (r = t[lf] = new Set());
  var n = e + "__bubble";
  r.has(n) || (L0(t, e, 2, !1), r.add(n));
}
function Ju(e, t, r) {
  var n = 0;
  (t && (n |= 4), L0(r, e, n, t));
}
var Bo = "_reactListening" + Math.random().toString(36).slice(2);
function Ya(e) {
  if (!e[Bo]) {
    ((e[Bo] = !0),
      Wy.forEach(function (r) {
        r !== "selectionchange" && (yE.has(r) || Ju(r, !1, e), Ju(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bo] || ((t[Bo] = !0), Ju("selectionchange", !1, t));
  }
}
function L0(e, t, r, n) {
  switch (x0(t)) {
    case 1:
      var i = NP;
      break;
    case 4:
      i = MP;
      break;
    default:
      i = Dd;
  }
  ((r = i.bind(null, t, r, e)),
    (i = void 0),
    !qc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1));
}
function ec(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Cn(l)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            n = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  a0(function () {
    var u = a,
      c = jd(r),
      f = [];
    e: {
      var d = D0.get(e);
      if (d !== void 0) {
        var p = Ld,
          h = e;
        switch (e) {
          case "keypress":
            if (hl(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = GP;
            break;
          case "focusin":
            ((h = "focus"), (p = Yu));
            break;
          case "focusout":
            ((h = "blur"), (p = Yu));
            break;
          case "beforeblur":
          case "afterblur":
            p = Yu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = fm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = LP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = QP;
            break;
          case j0:
          case T0:
          case N0:
            p = zP;
            break;
          case M0:
            p = JP;
            break;
          case "scroll":
            p = DP;
            break;
          case "wheel":
            p = tE;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = BP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = pm;
        }
        var g = (t & 4) !== 0,
          y = !g && e === "scroll",
          m = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var v = u, x; v !== null; ) {
          x = v;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              m !== null && ((S = Ba(v, m)), S != null && g.push(Ga(v, S, x)))),
            y)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((d = new p(d, h, null, r, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            r !== Yc &&
            (h = r.relatedTarget || r.fromElement) &&
            (Cn(h) || h[kr]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          p
            ? ((h = r.relatedTarget || r.toElement),
              (p = u),
              (h = h ? Cn(h) : null),
              h !== null &&
                ((y = ri(h)), h !== y || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((p = null), (h = u)),
          p !== h)
        ) {
          if (
            ((g = fm),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = pm),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (v = "pointer")),
            (y = p == null ? d : gi(p)),
            (x = h == null ? d : gi(h)),
            (d = new g(S, v + "leave", p, r, c)),
            (d.target = y),
            (d.relatedTarget = x),
            (S = null),
            Cn(c) === u &&
              ((g = new g(m, v + "enter", h, r, c)),
              (g.target = x),
              (g.relatedTarget = y),
              (S = g)),
            (y = S),
            p && h)
          )
            t: {
              for (g = p, m = h, v = 0, x = g; x; x = ui(x)) v++;
              for (x = 0, S = m; S; S = ui(S)) x++;
              for (; 0 < v - x; ) ((g = ui(g)), v--);
              for (; 0 < x - v; ) ((m = ui(m)), x--);
              for (; v--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                ((g = ui(g)), (m = ui(m)));
              }
              g = null;
            }
          else g = null;
          (p !== null && Em(f, d, p, g, !1),
            h !== null && y !== null && Em(f, y, h, g, !0));
        }
      }
      e: {
        if (
          ((d = u ? gi(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var P = sE;
        else if (vm(d))
          if (O0) P = dE;
          else {
            P = cE;
            var E = uE;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = fE);
        if (P && (P = P(e, u))) {
          E0(f, P, r, c);
          break e;
        }
        (E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            Uc(d, "number", d.value));
      }
      switch (((E = u ? gi(u) : window), e)) {
        case "focusin":
          (vm(E) || E.contentEditable === "true") &&
            ((mi = E), (ef = u), (Na = null));
          break;
        case "focusout":
          Na = ef = mi = null;
          break;
        case "mousedown":
          tf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((tf = !1), bm(f, r, c));
          break;
        case "selectionchange":
          if (mE) break;
        case "keydown":
        case "keyup":
          bm(f, r, c);
      }
      var O;
      if (Rd)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        hi
          ? S0(e, r) && (k = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (b0 &&
          r.locale !== "ko" &&
          (hi || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && hi && (O = w0())
            : ((Xr = c),
              (Id = "value" in Xr ? Xr.value : Xr.textContent),
              (hi = !0))),
        (E = Tl(u, k)),
        0 < E.length &&
          ((k = new dm(k, e, null, r, c)),
          f.push({ event: k, listeners: E }),
          O ? (k.data = O) : ((O = P0(r)), O !== null && (k.data = O)))),
        (O = nE ? iE(e, r) : aE(e, r)) &&
          ((u = Tl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new dm("onBeforeInput", "beforeinput", null, r, c)),
            f.push({ event: c, listeners: u }),
            (c.data = O))));
    }
    I0(f, t);
  });
}
function Ga(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Tl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    (i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = Ba(e, r)),
      a != null && n.unshift(Ga(e, a, i)),
      (a = Ba(e, t)),
      a != null && n.push(Ga(e, a, i))),
      (e = e.return));
  }
  return n;
}
function ui(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Em(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var l = r,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === n) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((s = Ba(r, a)), s != null && o.unshift(Ga(r, s, l)))
        : i || ((s = Ba(r, a)), s != null && o.push(Ga(r, s, l)))),
      (r = r.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xE = /\r\n?/g,
  wE = /\u0000|\uFFFD/g;
function Om(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xE,
      `
`,
    )
    .replace(wE, "");
}
function Uo(e, t, r) {
  if (((t = Om(t)), Om(e) !== t && r)) throw Error(N(425));
}
function Nl() {}
var rf = null,
  nf = null;
function af(e, t) {
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
var of = typeof setTimeout == "function" ? setTimeout : void 0,
  bE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  km = typeof Promise == "function" ? Promise : void 0,
  SE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof km < "u"
        ? function (e) {
            return km.resolve(null).then(e).catch(PE);
          }
        : of;
function PE(e) {
  setTimeout(function () {
    throw e;
  });
}
function tc(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          (e.removeChild(i), Ka(t));
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Ka(t);
}
function tn(e) {
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
function _m(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Zi = Math.random().toString(36).slice(2),
  lr = "__reactFiber$" + Zi,
  qa = "__reactProps$" + Zi,
  kr = "__reactContainer$" + Zi,
  lf = "__reactEvents$" + Zi,
  EE = "__reactListeners$" + Zi,
  OE = "__reactHandles$" + Zi;
function Cn(e) {
  var t = e[lr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[kr] || r[lr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = _m(e); e !== null; ) {
          if ((r = e[lr])) return r;
          e = _m(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
  }
  return null;
}
function yo(e) {
  return (
    (e = e[lr] || e[kr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Ms(e) {
  return e[qa] || null;
}
var sf = [],
  yi = -1;
function pn(e) {
  return { current: e };
}
function ce(e) {
  0 > yi || ((e.current = sf[yi]), (sf[yi] = null), yi--);
}
function ae(e, t) {
  (yi++, (sf[yi] = e.current), (e.current = t));
}
var un = {},
  Qe = pn(un),
  ct = pn(!1),
  Hn = un;
function Li(e, t) {
  var r = e.type.contextTypes;
  if (!r) return un;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ft(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ml() {
  (ce(ct), ce(Qe));
}
function Cm(e, t, r) {
  if (Qe.current !== un) throw Error(N(168));
  (ae(Qe, t), ae(ct, r));
}
function $0(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(N(108, uP(e) || "Unknown", i));
  return ve({}, r, n);
}
function Dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Hn = Qe.current),
    ae(Qe, e),
    ae(ct, ct.current),
    !0
  );
}
function Am(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(N(169));
  (r
    ? ((e = $0(e, t, Hn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ce(ct),
      ce(Qe),
      ae(Qe, e))
    : ce(ct),
    ae(ct, r));
}
var mr = null,
  Ds = !1,
  rc = !1;
function R0(e) {
  mr === null ? (mr = [e]) : mr.push(e);
}
function kE(e) {
  ((Ds = !0), R0(e));
}
function hn() {
  if (!rc && mr !== null) {
    rc = !0;
    var e = 0,
      t = te;
    try {
      var r = mr;
      for (te = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      ((mr = null), (Ds = !1));
    } catch (i) {
      throw (mr !== null && (mr = mr.slice(e + 1)), u0(Td, hn), i);
    } finally {
      ((te = t), (rc = !1));
    }
  }
  return null;
}
var xi = [],
  wi = 0,
  Il = null,
  Ll = 0,
  Mt = [],
  Dt = 0,
  Vn = null,
  yr = 1,
  xr = "";
function Pn(e, t) {
  ((xi[wi++] = Ll), (xi[wi++] = Il), (Il = e), (Ll = t));
}
function z0(e, t, r) {
  ((Mt[Dt++] = yr), (Mt[Dt++] = xr), (Mt[Dt++] = Vn), (Vn = e));
  var n = yr;
  e = xr;
  var i = 32 - tr(n) - 1;
  ((n &= ~(1 << i)), (r += 1));
  var a = 32 - tr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    ((a = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (yr = (1 << (32 - tr(t) + i)) | (r << i) | n),
      (xr = a + e));
  } else ((yr = (1 << a) | (r << i) | n), (xr = e));
}
function Fd(e) {
  e.return !== null && (Pn(e, 1), z0(e, 1, 0));
}
function Bd(e) {
  for (; e === Il; )
    ((Il = xi[--wi]), (xi[wi] = null), (Ll = xi[--wi]), (xi[wi] = null));
  for (; e === Vn; )
    ((Vn = Mt[--Dt]),
      (Mt[Dt] = null),
      (xr = Mt[--Dt]),
      (Mt[Dt] = null),
      (yr = Mt[--Dt]),
      (Mt[Dt] = null));
}
var Et = null,
  Pt = null,
  de = !1,
  Qt = null;
function F0(e, t) {
  var r = Lt(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function jm(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Et = e), (Pt = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (Pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Vn !== null ? { id: yr, overflow: xr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Lt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Et = e),
            (Pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function uf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cf(e) {
  if (de) {
    var t = Pt;
    if (t) {
      var r = t;
      if (!jm(e, t)) {
        if (uf(e)) throw Error(N(418));
        t = tn(r.nextSibling);
        var n = Et;
        t && jm(e, t)
          ? F0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (Et = e));
      }
    } else {
      if (uf(e)) throw Error(N(418));
      ((e.flags = (e.flags & -4097) | 2), (de = !1), (Et = e));
    }
  }
}
function Tm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function Wo(e) {
  if (e !== Et) return !1;
  if (!de) return (Tm(e), (de = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !af(e.type, e.memoizedProps))),
    t && (t = Pt))
  ) {
    if (uf(e)) throw (B0(), Error(N(418)));
    for (; t; ) (F0(e, t), (t = tn(t.nextSibling)));
  }
  if ((Tm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Pt = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Pt = null;
    }
  } else Pt = Et ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function B0() {
  for (var e = Pt; e; ) e = tn(e.nextSibling);
}
function $i() {
  ((Pt = Et = null), (de = !1));
}
function Ud(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
var _E = Dr.ReactCurrentBatchConfig;
function fa(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(N(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(N(147, e));
      var i = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!r._owner) throw Error(N(290, e));
  }
  return e;
}
function Ko(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Nm(e) {
  var t = e._init;
  return t(e._payload);
}
function U0(e) {
  function t(m, v) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [v]), (m.flags |= 16)) : x.push(v);
    }
  }
  function r(m, v) {
    if (!e) return null;
    for (; v !== null; ) (t(m, v), (v = v.sibling));
    return null;
  }
  function n(m, v) {
    for (m = new Map(); v !== null; )
      (v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling));
    return m;
  }
  function i(m, v) {
    return ((m = on(m, v)), (m.index = 0), (m.sibling = null), m);
  }
  function a(m, v, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < v ? ((m.flags |= 2), v) : x)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function o(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, v, x, S) {
    return v === null || v.tag !== 6
      ? ((v = uc(x, m.mode, S)), (v.return = m), v)
      : ((v = i(v, x)), (v.return = m), v);
  }
  function s(m, v, x, S) {
    var P = x.type;
    return P === pi
      ? c(m, v, x.props.children, S, x.key)
      : v !== null &&
          (v.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Kr &&
              Nm(P) === v.type))
        ? ((S = i(v, x.props)), (S.ref = fa(m, v, x)), (S.return = m), S)
        : ((S = bl(x.type, x.key, x.props, null, m.mode, S)),
          (S.ref = fa(m, v, x)),
          (S.return = m),
          S);
  }
  function u(m, v, x, S) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== x.containerInfo ||
      v.stateNode.implementation !== x.implementation
      ? ((v = cc(x, m.mode, S)), (v.return = m), v)
      : ((v = i(v, x.children || [])), (v.return = m), v);
  }
  function c(m, v, x, S, P) {
    return v === null || v.tag !== 7
      ? ((v = zn(x, m.mode, S, P)), (v.return = m), v)
      : ((v = i(v, x)), (v.return = m), v);
  }
  function f(m, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((v = uc("" + v, m.mode, x)), (v.return = m), v);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Mo:
          return (
            (x = bl(v.type, v.key, v.props, null, m.mode, x)),
            (x.ref = fa(m, null, v)),
            (x.return = m),
            x
          );
        case di:
          return ((v = cc(v, m.mode, x)), (v.return = m), v);
        case Kr:
          var S = v._init;
          return f(m, S(v._payload), x);
      }
      if (Pa(v) || oa(v))
        return ((v = zn(v, m.mode, x, null)), (v.return = m), v);
      Ko(m, v);
    }
    return null;
  }
  function d(m, v, x, S) {
    var P = v !== null ? v.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return P !== null ? null : l(m, v, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Mo:
          return x.key === P ? s(m, v, x, S) : null;
        case di:
          return x.key === P ? u(m, v, x, S) : null;
        case Kr:
          return ((P = x._init), d(m, v, P(x._payload), S));
      }
      if (Pa(x) || oa(x)) return P !== null ? null : c(m, v, x, S, null);
      Ko(m, x);
    }
    return null;
  }
  function p(m, v, x, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((m = m.get(x) || null), l(v, m, "" + S, P));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Mo:
          return (
            (m = m.get(S.key === null ? x : S.key) || null),
            s(v, m, S, P)
          );
        case di:
          return (
            (m = m.get(S.key === null ? x : S.key) || null),
            u(v, m, S, P)
          );
        case Kr:
          var E = S._init;
          return p(m, v, x, E(S._payload), P);
      }
      if (Pa(S) || oa(S)) return ((m = m.get(x) || null), c(v, m, S, P, null));
      Ko(v, S);
    }
    return null;
  }
  function h(m, v, x, S) {
    for (
      var P = null, E = null, O = v, k = (v = 0), _ = null;
      O !== null && k < x.length;
      k++
    ) {
      O.index > k ? ((_ = O), (O = null)) : (_ = O.sibling);
      var j = d(m, O, x[k], S);
      if (j === null) {
        O === null && (O = _);
        break;
      }
      (e && O && j.alternate === null && t(m, O),
        (v = a(j, v, k)),
        E === null ? (P = j) : (E.sibling = j),
        (E = j),
        (O = _));
    }
    if (k === x.length) return (r(m, O), de && Pn(m, k), P);
    if (O === null) {
      for (; k < x.length; k++)
        ((O = f(m, x[k], S)),
          O !== null &&
            ((v = a(O, v, k)),
            E === null ? (P = O) : (E.sibling = O),
            (E = O)));
      return (de && Pn(m, k), P);
    }
    for (O = n(m, O); k < x.length; k++)
      ((_ = p(O, m, k, x[k], S)),
        _ !== null &&
          (e && _.alternate !== null && O.delete(_.key === null ? k : _.key),
          (v = a(_, v, k)),
          E === null ? (P = _) : (E.sibling = _),
          (E = _)));
    return (
      e &&
        O.forEach(function (T) {
          return t(m, T);
        }),
      de && Pn(m, k),
      P
    );
  }
  function g(m, v, x, S) {
    var P = oa(x);
    if (typeof P != "function") throw Error(N(150));
    if (((x = P.call(x)), x == null)) throw Error(N(151));
    for (
      var E = (P = null), O = v, k = (v = 0), _ = null, j = x.next();
      O !== null && !j.done;
      k++, j = x.next()
    ) {
      O.index > k ? ((_ = O), (O = null)) : (_ = O.sibling);
      var T = d(m, O, j.value, S);
      if (T === null) {
        O === null && (O = _);
        break;
      }
      (e && O && T.alternate === null && t(m, O),
        (v = a(T, v, k)),
        E === null ? (P = T) : (E.sibling = T),
        (E = T),
        (O = _));
    }
    if (j.done) return (r(m, O), de && Pn(m, k), P);
    if (O === null) {
      for (; !j.done; k++, j = x.next())
        ((j = f(m, j.value, S)),
          j !== null &&
            ((v = a(j, v, k)),
            E === null ? (P = j) : (E.sibling = j),
            (E = j)));
      return (de && Pn(m, k), P);
    }
    for (O = n(m, O); !j.done; k++, j = x.next())
      ((j = p(O, m, k, j.value, S)),
        j !== null &&
          (e && j.alternate !== null && O.delete(j.key === null ? k : j.key),
          (v = a(j, v, k)),
          E === null ? (P = j) : (E.sibling = j),
          (E = j)));
    return (
      e &&
        O.forEach(function (L) {
          return t(m, L);
        }),
      de && Pn(m, k),
      P
    );
  }
  function y(m, v, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === pi &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Mo:
          e: {
            for (var P = x.key, E = v; E !== null; ) {
              if (E.key === P) {
                if (((P = x.type), P === pi)) {
                  if (E.tag === 7) {
                    (r(m, E.sibling),
                      (v = i(E, x.props.children)),
                      (v.return = m),
                      (m = v));
                    break e;
                  }
                } else if (
                  E.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Kr &&
                    Nm(P) === E.type)
                ) {
                  (r(m, E.sibling),
                    (v = i(E, x.props)),
                    (v.ref = fa(m, E, x)),
                    (v.return = m),
                    (m = v));
                  break e;
                }
                r(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            x.type === pi
              ? ((v = zn(x.props.children, m.mode, S, x.key)),
                (v.return = m),
                (m = v))
              : ((S = bl(x.type, x.key, x.props, null, m.mode, S)),
                (S.ref = fa(m, v, x)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case di:
          e: {
            for (E = x.key; v !== null; ) {
              if (v.key === E)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === x.containerInfo &&
                  v.stateNode.implementation === x.implementation
                ) {
                  (r(m, v.sibling),
                    (v = i(v, x.children || [])),
                    (v.return = m),
                    (m = v));
                  break e;
                } else {
                  r(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            ((v = cc(x, m.mode, S)), (v.return = m), (m = v));
          }
          return o(m);
        case Kr:
          return ((E = x._init), y(m, v, E(x._payload), S));
      }
      if (Pa(x)) return h(m, v, x, S);
      if (oa(x)) return g(m, v, x, S);
      Ko(m, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        v !== null && v.tag === 6
          ? (r(m, v.sibling), (v = i(v, x)), (v.return = m), (m = v))
          : (r(m, v), (v = uc(x, m.mode, S)), (v.return = m), (m = v)),
        o(m))
      : r(m, v);
  }
  return y;
}
var Ri = U0(!0),
  W0 = U0(!1),
  $l = pn(null),
  Rl = null,
  bi = null,
  Wd = null;
function Kd() {
  Wd = bi = Rl = null;
}
function Hd(e) {
  var t = $l.current;
  (ce($l), (e._currentValue = t));
}
function ff(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function ji(e, t) {
  ((Rl = e),
    (Wd = bi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null)));
}
function Ft(e) {
  var t = e._currentValue;
  if (Wd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bi === null)) {
      if (Rl === null) throw Error(N(308));
      ((bi = e), (Rl.dependencies = { lanes: 0, firstContext: e }));
    } else bi = bi.next = e;
  return t;
}
var An = null;
function Vd(e) {
  An === null ? (An = [e]) : An.push(e);
}
function K0(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), Vd(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    _r(e, n)
  );
}
function _r(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
var Hr = !1;
function Yd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function H0(e, t) {
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
function Sr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Q & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      _r(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Vd(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    _r(e, r)
  );
}
function ml(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), Nd(e, r));
  }
}
function Mm(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        (a === null ? (i = a = o) : (a = a.next = o), (r = r.next));
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    ((r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function zl(e, t, r, n) {
  var i = e.updateQueue;
  Hr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    ((s.next = null), o === null ? (a = u) : (o.next = u), (o = s));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (a !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = s = null), (l = a));
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((n & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            g = l;
          switch (((d = t), (p = r), g.tag)) {
            case 1:
              if (((h = g.payload), typeof h == "function")) {
                f = h.call(p, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = g.payload),
                (d = typeof h == "function" ? h.call(p, f, d) : h),
                d == null)
              )
                break e;
              f = ve({}, f, d);
              break e;
            case 2:
              Hr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (s = f)) : (c = c.next = p),
          (o |= d));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    ((Gn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Dm(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(N(191, i));
        i.call(n);
      }
    }
}
var xo = {},
  cr = pn(xo),
  Xa = pn(xo),
  Qa = pn(xo);
function jn(e) {
  if (e === xo) throw Error(N(174));
  return e;
}
function Gd(e, t) {
  switch ((ae(Qa, t), ae(Xa, e), ae(cr, xo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Kc(t, e)));
  }
  (ce(cr), ae(cr, t));
}
function zi() {
  (ce(cr), ce(Xa), ce(Qa));
}
function V0(e) {
  jn(Qa.current);
  var t = jn(cr.current),
    r = Kc(t, e.type);
  t !== r && (ae(Xa, e), ae(cr, r));
}
function qd(e) {
  Xa.current === e && (ce(cr), ce(Xa));
}
var he = pn(0);
function Fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
var nc = [];
function Xd() {
  for (var e = 0; e < nc.length; e++)
    nc[e]._workInProgressVersionPrimary = null;
  nc.length = 0;
}
var vl = Dr.ReactCurrentDispatcher,
  ic = Dr.ReactCurrentBatchConfig,
  Yn = 0,
  me = null,
  ke = null,
  Te = null,
  Bl = !1,
  Ma = !1,
  Za = 0,
  CE = 0;
function Ve() {
  throw Error(N(321));
}
function Qd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!nr(e[r], t[r])) return !1;
  return !0;
}
function Zd(e, t, r, n, i, a) {
  if (
    ((Yn = a),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vl.current = e === null || e.memoizedState === null ? NE : ME),
    (e = r(n, i)),
    Ma)
  ) {
    a = 0;
    do {
      if (((Ma = !1), (Za = 0), 25 <= a)) throw Error(N(301));
      ((a += 1),
        (Te = ke = null),
        (t.updateQueue = null),
        (vl.current = DE),
        (e = r(n, i)));
    } while (Ma);
  }
  if (
    ((vl.current = Ul),
    (t = ke !== null && ke.next !== null),
    (Yn = 0),
    (Te = ke = me = null),
    (Bl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Jd() {
  var e = Za !== 0;
  return ((Za = 0), e);
}
function or() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Te === null ? (me.memoizedState = Te = e) : (Te = Te.next = e), Te);
}
function Bt() {
  if (ke === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Te === null ? me.memoizedState : Te.next;
  if (t !== null) ((Te = t), (ke = e));
  else {
    if (e === null) throw Error(N(310));
    ((ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Te === null ? (me.memoizedState = Te = e) : (Te = Te.next = e));
  }
  return Te;
}
function Ja(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ac(e) {
  var t = Bt(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = ke,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = a.next), (a.next = o));
    }
    ((n.baseQueue = i = a), (r.pending = null));
  }
  if (i !== null) {
    ((a = i.next), (n = n.baseState));
    var l = (o = null),
      s = null,
      u = a;
    do {
      var c = u.lane;
      if ((Yn & c) === c)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (s === null ? ((l = s = f), (o = n)) : (s = s.next = f),
          (me.lanes |= c),
          (Gn |= c));
      }
      u = u.next;
    } while (u !== null && u !== a);
    (s === null ? (o = n) : (s.next = l),
      nr(n, t.memoizedState) || (st = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = s),
      (r.lastRenderedState = n));
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do ((a = i.lane), (me.lanes |= a), (Gn |= a), (i = i.next));
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function oc(e) {
  var t = Bt(),
    r = t.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do ((a = e(a, o.action)), (o = o.next));
    while (o !== i);
    (nr(a, t.memoizedState) || (st = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a));
  }
  return [a, n];
}
function Y0() {}
function G0(e, t) {
  var r = me,
    n = Bt(),
    i = t(),
    a = !nr(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (st = !0)),
    (n = n.queue),
    ep(Q0.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      eo(9, X0.bind(null, r, n, i, t), void 0, null),
      Ne === null)
    )
      throw Error(N(349));
    Yn & 30 || q0(r, t, i);
  }
  return i;
}
function q0(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function X0(e, t, r, n) {
  ((t.value = r), (t.getSnapshot = n), Z0(t) && J0(e));
}
function Q0(e, t, r) {
  return r(function () {
    Z0(t) && J0(e);
  });
}
function Z0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !nr(e, r);
  } catch {
    return !0;
  }
}
function J0(e) {
  var t = _r(e, 1);
  t !== null && rr(t, e, 1, -1);
}
function Im(e) {
  var t = or();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ja,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = TE.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function eo(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function e1() {
  return Bt().memoizedState;
}
function gl(e, t, r, n) {
  var i = or();
  ((me.flags |= e),
    (i.memoizedState = eo(1 | t, r, void 0, n === void 0 ? null : n)));
}
function Is(e, t, r, n) {
  var i = Bt();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (ke !== null) {
    var o = ke.memoizedState;
    if (((a = o.destroy), n !== null && Qd(n, o.deps))) {
      i.memoizedState = eo(t, r, a, n);
      return;
    }
  }
  ((me.flags |= e), (i.memoizedState = eo(1 | t, r, a, n)));
}
function Lm(e, t) {
  return gl(8390656, 8, e, t);
}
function ep(e, t) {
  return Is(2048, 8, e, t);
}
function t1(e, t) {
  return Is(4, 2, e, t);
}
function r1(e, t) {
  return Is(4, 4, e, t);
}
function n1(e, t) {
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
function i1(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null),
    Is(4, 4, n1.bind(null, t, e), r)
  );
}
function tp() {}
function a1(e, t) {
  var r = Bt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Qd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function o1(e, t) {
  var r = Bt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Qd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function l1(e, t, r) {
  return Yn & 21
    ? (nr(r, t) || ((r = d0()), (me.lanes |= r), (Gn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = r));
}
function AE(e, t) {
  var r = te;
  ((te = r !== 0 && 4 > r ? r : 4), e(!0));
  var n = ic.transition;
  ic.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((te = r), (ic.transition = n));
  }
}
function s1() {
  return Bt().memoizedState;
}
function jE(e, t, r) {
  var n = an(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    u1(e))
  )
    c1(t, r);
  else if (((r = K0(e, t, r, n)), r !== null)) {
    var i = et();
    (rr(r, e, n, i), f1(r, t, n));
  }
}
function TE(e, t, r) {
  var n = an(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (u1(e)) c1(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = l), nr(l, o))) {
          var s = t.interleaved;
          (s === null
            ? ((i.next = i), Vd(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((r = K0(e, t, i, n)),
      r !== null && ((i = et()), rr(r, e, n, i), f1(r, t, n)));
  }
}
function u1(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function c1(e, t) {
  Ma = Bl = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function f1(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), Nd(e, r));
  }
}
var Ul = {
    readContext: Ft,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  NE = {
    readContext: Ft,
    useCallback: function (e, t) {
      return ((or().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ft,
    useEffect: Lm,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        gl(4194308, 4, n1.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return gl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = or();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (r.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, r) {
      var n = or();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = jE.bind(null, me, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = or();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Im,
    useDebugValue: tp,
    useDeferredValue: function (e) {
      return (or().memoizedState = e);
    },
    useTransition: function () {
      var e = Im(!1),
        t = e[0];
      return ((e = AE.bind(null, e[1])), (or().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = me,
        i = or();
      if (de) {
        if (r === void 0) throw Error(N(407));
        r = r();
      } else {
        if (((r = t()), Ne === null)) throw Error(N(349));
        Yn & 30 || q0(n, t, r);
      }
      i.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (i.queue = a),
        Lm(Q0.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        eo(9, X0.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = or(),
        t = Ne.identifierPrefix;
      if (de) {
        var r = xr,
          n = yr;
        ((r = (n & ~(1 << (32 - tr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Za++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":"));
      } else ((r = CE++), (t = ":" + t + "r" + r.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ME = {
    readContext: Ft,
    useCallback: a1,
    useContext: Ft,
    useEffect: ep,
    useImperativeHandle: i1,
    useInsertionEffect: t1,
    useLayoutEffect: r1,
    useMemo: o1,
    useReducer: ac,
    useRef: e1,
    useState: function () {
      return ac(Ja);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Bt();
      return l1(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = ac(Ja)[0],
        t = Bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: G0,
    useId: s1,
    unstable_isNewReconciler: !1,
  },
  DE = {
    readContext: Ft,
    useCallback: a1,
    useContext: Ft,
    useEffect: ep,
    useImperativeHandle: i1,
    useInsertionEffect: t1,
    useLayoutEffect: r1,
    useMemo: o1,
    useReducer: oc,
    useRef: e1,
    useState: function () {
      return oc(Ja);
    },
    useDebugValue: tp,
    useDeferredValue: function (e) {
      var t = Bt();
      return ke === null ? (t.memoizedState = e) : l1(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = oc(Ja)[0],
        t = Bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Y0,
    useSyncExternalStore: G0,
    useId: s1,
    unstable_isNewReconciler: !1,
  };
function qt(e, t) {
  if (e && e.defaultProps) {
    ((t = ve({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function df(e, t, r, n) {
  ((t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : ve({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
var Ls = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ri(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = et(),
      i = an(e),
      a = Sr(n, i);
    ((a.payload = t),
      r != null && (a.callback = r),
      (t = rn(e, a, i)),
      t !== null && (rr(t, e, i, n), ml(t, e, i)));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = et(),
      i = an(e),
      a = Sr(n, i);
    ((a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = rn(e, a, i)),
      t !== null && (rr(t, e, i, n), ml(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = et(),
      n = an(e),
      i = Sr(r, n);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = rn(e, i, n)),
      t !== null && (rr(t, e, n, r), ml(t, e, n)));
  },
};
function $m(e, t, r, n, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Va(r, n) || !Va(i, a)
        : !0
  );
}
function d1(e, t, r) {
  var n = !1,
    i = un,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ft(a))
      : ((i = ft(t) ? Hn : Qe.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? Li(e, i) : un)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ls),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Rm(e, t, r, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ls.enqueueReplaceState(t, t.state, null));
}
function pf(e, t, r, n) {
  var i = e.stateNode;
  ((i.props = r), (i.state = e.memoizedState), (i.refs = {}), Yd(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (i.context = Ft(a))
    : ((a = ft(t) ? Hn : Qe.current), (i.context = Li(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (df(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ls.enqueueReplaceState(i, i.state, null),
      zl(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Fi(e, t) {
  try {
    var r = "",
      n = t;
    do ((r += sP(n)), (n = n.return));
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function lc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function hf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var IE = typeof WeakMap == "function" ? WeakMap : Map;
function p1(e, t, r) {
  ((r = Sr(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var n = t.value;
  return (
    (r.callback = function () {
      (Kl || ((Kl = !0), (Ef = n)), hf(e, t));
    }),
    r
  );
}
function h1(e, t, r) {
  ((r = Sr(-1, r)), (r.tag = 3));
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    ((r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        hf(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        (hf(e, t),
          typeof n != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function zm(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new IE();
    var i = new Set();
    n.set(t, i);
  } else ((i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i)));
  i.has(r) || (i.add(r), (e = qE.bind(null, e, t, r)), t.then(e, e));
}
function Fm(e) {
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
function Bm(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Sr(-1, 1)), (t.tag = 2), rn(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var LE = Dr.ReactCurrentOwner,
  st = !1;
function Ze(e, t, r, n) {
  t.child = e === null ? W0(t, null, r, n) : Ri(t, e.child, r, n);
}
function Um(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    ji(t, i),
    (n = Zd(e, t, r, n, a, i)),
    (r = Jd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Cr(e, t, i))
      : (de && r && Fd(t), (t.flags |= 1), Ze(e, t, n, i), t.child)
  );
}
function Wm(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !up(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), m1(e, t, a, n, i))
      : ((e = bl(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Va), r(o, n) && e.ref === t.ref)
    )
      return Cr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = on(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function m1(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Va(a, n) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = n = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (st = !0);
      else return ((t.lanes = e.lanes), Cr(e, t, i));
  }
  return mf(e, t, r, n, i);
}
function v1(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(Pi, xt),
        (xt |= r));
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(Pi, xt),
          (xt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = a !== null ? a.baseLanes : r),
        ae(Pi, xt),
        (xt |= n));
    }
  else
    (a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ae(Pi, xt),
      (xt |= n));
  return (Ze(e, t, i, r), t.child);
}
function g1(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mf(e, t, r, n, i) {
  var a = ft(r) ? Hn : Qe.current;
  return (
    (a = Li(t, a)),
    ji(t, i),
    (r = Zd(e, t, r, n, a, i)),
    (n = Jd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Cr(e, t, i))
      : (de && n && Fd(t), (t.flags |= 1), Ze(e, t, r, i), t.child)
  );
}
function Km(e, t, r, n, i) {
  if (ft(r)) {
    var a = !0;
    Dl(t);
  } else a = !1;
  if ((ji(t, i), t.stateNode === null))
    (yl(e, t), d1(t, r, n), pf(t, r, n, i), (n = !0));
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Ft(u))
      : ((u = ft(r) ? Hn : Qe.current), (u = Li(t, u)));
    var c = r.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== n || s !== u) && Rm(t, o, n, u)),
      (Hr = !1));
    var d = t.memoizedState;
    ((o.state = d),
      zl(t, n, o, i),
      (s = t.memoizedState),
      l !== n || d !== s || ct.current || Hr
        ? (typeof c == "function" && (df(t, r, c, n), (s = t.memoizedState)),
          (l = Hr || $m(t, r, l, n, d, s, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (o.props = n),
          (o.state = s),
          (o.context = u),
          (n = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1)));
  } else {
    ((o = t.stateNode),
      H0(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : qt(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = Ft(s))
        : ((s = ft(r) ? Hn : Qe.current), (s = Li(t, s))));
    var p = r.getDerivedStateFromProps;
    ((c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== s) && Rm(t, o, n, s)),
      (Hr = !1),
      (d = t.memoizedState),
      (o.state = d),
      zl(t, n, o, i));
    var h = t.memoizedState;
    l !== f || d !== h || ct.current || Hr
      ? (typeof p == "function" && (df(t, r, p, n), (h = t.memoizedState)),
        (u = Hr || $m(t, r, u, n, d, h, s) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, h, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, h, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = h)),
        (o.props = n),
        (o.state = h),
        (o.context = s),
        (n = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return vf(e, t, r, n, a, i);
}
function vf(e, t, r, n, i, a) {
  g1(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return (i && Am(t, r, !1), Cr(e, t, a));
  ((n = t.stateNode), (LE.current = t));
  var l =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ri(t, e.child, null, a)), (t.child = Ri(t, null, l, a)))
      : Ze(e, t, l, a),
    (t.memoizedState = n.state),
    i && Am(t, r, !0),
    t.child
  );
}
function y1(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Cm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cm(e, t.context, !1),
    Gd(e, t.containerInfo));
}
function Hm(e, t, r, n, i) {
  return ($i(), Ud(i), (t.flags |= 256), Ze(e, t, r, n), t.child);
}
var gf = { dehydrated: null, treeContext: null, retryLane: 0 };
function yf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function x1(e, t, r) {
  var n = t.pendingProps,
    i = he.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(he, i & 1),
    e === null)
  )
    return (
      cf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = zs(o, n, 0, null)),
              (e = zn(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = yf(r)),
              (t.memoizedState = gf),
              e)
            : rp(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return $E(e, t, o, n, l, i, r);
  if (a) {
    ((a = n.fallback), (o = t.mode), (i = e.child), (l = i.sibling));
    var s = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = on(i, s)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = on(l, a)) : ((a = zn(a, o, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? yf(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = gf),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = on(a, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function rp(e, t) {
  return (
    (t = zs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ho(e, t, r, n) {
  return (
    n !== null && Ud(n),
    Ri(t, e.child, null, r),
    (e = rp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $E(e, t, r, n, i, a, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = lc(Error(N(422)))), Ho(e, t, o, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = n.fallback),
          (i = t.mode),
          (n = zs({ mode: "visible", children: n.children }, i, 0, null)),
          (a = zn(a, i, o, null)),
          (a.flags |= 2),
          (n.return = t),
          (a.return = t),
          (n.sibling = a),
          (t.child = n),
          t.mode & 1 && Ri(t, e.child, null, o),
          (t.child.memoizedState = yf(o)),
          (t.memoizedState = gf),
          a);
  if (!(t.mode & 1)) return Ho(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var l = n.dgst;
    return (
      (n = l),
      (a = Error(N(419))),
      (n = lc(a, n, void 0)),
      Ho(e, t, o, n)
    );
  }
  if (((l = (o & e.childLanes) !== 0), st || l)) {
    if (((n = Ne), n !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), _r(e, i), rr(n, e, i, -1)));
    }
    return (sp(), (n = lc(Error(N(421)))), Ho(e, t, o, n));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = XE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Pt = tn(i.nextSibling)),
      (Et = t),
      (de = !0),
      (Qt = null),
      e !== null &&
        ((Mt[Dt++] = yr),
        (Mt[Dt++] = xr),
        (Mt[Dt++] = Vn),
        (yr = e.id),
        (xr = e.overflow),
        (Vn = t)),
      (t = rp(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Vm(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), ff(e.return, t, r));
}
function sc(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}
function w1(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((Ze(e, t, n.children, r), (n = he.current), n & 2))
    ((n = (n & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vm(e, r, t);
        else if (e.tag === 19) Vm(e, r, t);
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
    n &= 1;
  }
  if ((ae(he, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          ((e = r.alternate),
            e !== null && Fl(e) === null && (i = r),
            (r = r.sibling));
        ((r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          sc(t, !1, i, r, a));
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fl(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = r), (r = i), (i = e));
        }
        sc(t, !0, r, null, a);
        break;
      case "together":
        sc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Cr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, r = on(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (r = r.sibling = on(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function RE(e, t, r) {
  switch (t.tag) {
    case 3:
      (y1(t), $i());
      break;
    case 5:
      V0(t);
      break;
    case 1:
      ft(t.type) && Dl(t);
      break;
    case 4:
      Gd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      (ae($l, n._currentValue), (n._currentValue = i));
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ae(he, he.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? x1(e, t, r)
            : (ae(he, he.current & 1),
              (e = Cr(e, t, r)),
              e !== null ? e.sibling : null);
      ae(he, he.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return w1(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(he, he.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), v1(e, t, r));
  }
  return Cr(e, t, r);
}
var b1, xf, S1, P1;
b1 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      ((r.child.return = r), (r = r.child));
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    ((r.sibling.return = r.return), (r = r.sibling));
  }
};
xf = function () {};
S1 = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    ((e = t.stateNode), jn(cr.current));
    var a = null;
    switch (r) {
      case "input":
        ((i = Fc(e, i)), (n = Fc(e, n)), (a = []));
        break;
      case "select":
        ((i = ve({}, i, { value: void 0 })),
          (n = ve({}, n, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((i = Wc(e, i)), (n = Wc(e, n)), (a = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Nl);
    }
    Hc(r, n);
    var o;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (za.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((l = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                l[o] !== s[o] &&
                (r || (r = {}), (r[o] = s[o]));
          } else (r || (a || (a = []), a.push(u, r)), (r = s));
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (a = a || []).push(u, s))
            : u === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (a = a || []).push(u, "" + s)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (za.hasOwnProperty(u)
                  ? (s != null && u === "onScroll" && oe("scroll", e),
                    a || l === s || (a = []))
                  : (a = a || []).push(u, s));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
P1 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function da(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          (r.alternate !== null && (n = r), (r = r.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = r), t);
}
function zE(e, t, r) {
  var n = t.pendingProps;
  switch ((Bd(t), t.tag)) {
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
      return (Ye(t), null);
    case 1:
      return (ft(t.type) && Ml(), Ye(t), null);
    case 3:
      return (
        (n = t.stateNode),
        zi(),
        ce(ct),
        ce(Qe),
        Xd(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qt !== null && (_f(Qt), (Qt = null)))),
        xf(e, t),
        Ye(t),
        null
      );
    case 5:
      qd(t);
      var i = jn(Qa.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (S1(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(N(166));
          return (Ye(t), null);
        }
        if (((e = jn(cr.current)), Wo(t))) {
          ((n = t.stateNode), (r = t.type));
          var a = t.memoizedProps;
          switch (((n[lr] = t), (n[qa] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (oe("cancel", n), oe("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Oa.length; i++) oe(Oa[i], n);
              break;
            case "source":
              oe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (oe("error", n), oe("load", n));
              break;
            case "details":
              oe("toggle", n);
              break;
            case "input":
              (tm(n, a), oe("invalid", n));
              break;
            case "select":
              ((n._wrapperState = { wasMultiple: !!a.multiple }),
                oe("invalid", n));
              break;
            case "textarea":
              (nm(n, a), oe("invalid", n));
          }
          (Hc(r, a), (i = null));
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Uo(n.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Uo(n.textContent, l, e),
                    (i = ["children", "" + l]))
                : za.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  oe("scroll", n);
            }
          switch (r) {
            case "input":
              (Do(n), rm(n, a, !0));
              break;
            case "textarea":
              (Do(n), im(n));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Nl);
          }
          ((n = i), (t.updateQueue = n), n !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qy(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = o.createElement(r, { is: n.is }))
                  : ((e = o.createElement(r)),
                    r === "select" &&
                      ((o = e),
                      n.multiple
                        ? (o.multiple = !0)
                        : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[lr] = t),
            (e[qa] = n),
            b1(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Vc(r, n)), r)) {
              case "dialog":
                (oe("cancel", e), oe("close", e), (i = n));
                break;
              case "iframe":
              case "object":
              case "embed":
                (oe("load", e), (i = n));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Oa.length; i++) oe(Oa[i], e);
                i = n;
                break;
              case "source":
                (oe("error", e), (i = n));
                break;
              case "img":
              case "image":
              case "link":
                (oe("error", e), oe("load", e), (i = n));
                break;
              case "details":
                (oe("toggle", e), (i = n));
                break;
              case "input":
                (tm(e, n), (i = Fc(e, n)), oe("invalid", e));
                break;
              case "option":
                i = n;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = ve({}, n, { value: void 0 })),
                  oe("invalid", e));
                break;
              case "textarea":
                (nm(e, n), (i = Wc(e, n)), oe("invalid", e));
                break;
              default:
                i = n;
            }
            (Hc(r, i), (l = i));
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var s = l[a];
                a === "style"
                  ? e0(e, s)
                  : a === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Zy(e, s))
                    : a === "children"
                      ? typeof s == "string"
                        ? (r !== "textarea" || s !== "") && Fa(e, s)
                        : typeof s == "number" && Fa(e, "" + s)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (za.hasOwnProperty(a)
                          ? s != null && a === "onScroll" && oe("scroll", e)
                          : s != null && kd(e, a, s, o));
              }
            switch (r) {
              case "input":
                (Do(e), rm(e, n, !1));
                break;
              case "textarea":
                (Do(e), im(e));
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + sn(n.value));
                break;
              case "select":
                ((e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? ki(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      ki(e, !!n.multiple, n.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Nl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ye(t), null);
    case 6:
      if (e && t.stateNode != null) P1(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(N(166));
        if (((r = jn(Qa.current)), jn(cr.current), Wo(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[lr] = t),
            (a = n.nodeValue !== r) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Uo(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Uo(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[lr] = t),
            (t.stateNode = n));
      }
      return (Ye(t), null);
    case 13:
      if (
        (ce(he),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && Pt !== null && t.mode & 1 && !(t.flags & 128))
          (B0(), $i(), (t.flags |= 98560), (a = !1));
        else if (((a = Wo(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(N(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(N(317));
            a[lr] = t;
          } else
            ($i(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ye(t), (a = !1));
        } else (Qt !== null && (_f(Qt), (Qt = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? _e === 0 && (_e = 3) : sp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        zi(),
        xf(e, t),
        e === null && Ya(t.stateNode.containerInfo),
        Ye(t),
        null
      );
    case 10:
      return (Hd(t.type._context), Ye(t), null);
    case 17:
      return (ft(t.type) && Ml(), Ye(t), null);
    case 19:
      if ((ce(he), (a = t.memoizedState), a === null)) return (Ye(t), null);
      if (((n = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (n) da(a, !1);
        else {
          if (_e !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    da(a, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;
                )
                  ((a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling));
                return (ae(he, (he.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            we() > Bi &&
            ((t.flags |= 128), (n = !0), da(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Fl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              da(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !de)
            )
              return (Ye(t), null);
          } else
            2 * we() - a.renderingStartTime > Bi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), da(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = a.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = we()),
          (t.sibling = null),
          (r = he.current),
          ae(he, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        lp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? xt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function FE(e, t) {
  switch ((Bd(t), t.tag)) {
    case 1:
      return (
        ft(t.type) && Ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zi(),
        ce(ct),
        ce(Qe),
        Xd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (qd(t), null);
    case 13:
      if (
        (ce(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        $i();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ce(he), null);
    case 4:
      return (zi(), null);
    case 10:
      return (Hd(t.type._context), null);
    case 22:
    case 23:
      return (lp(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Vo = !1,
  qe = !1,
  BE = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Si(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        xe(e, t, n);
      }
    else r.current = null;
}
function wf(e, t, r) {
  try {
    r();
  } catch (n) {
    xe(e, t, n);
  }
}
var Ym = !1;
function UE(e, t) {
  if (((rf = Al), (e = C0()), zd(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            (r.nodeType, a.nodeType);
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== r || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== a || (n !== 0 && f.nodeType !== 3) || (s = o + n),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (p = f.firstChild) !== null;
            )
              ((d = f), (f = p));
            for (;;) {
              if (f === e) break t;
              if (
                (d === r && ++u === i && (l = o),
                d === a && ++c === n && (s = o),
                (p = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = p;
          }
          r = l === -1 || s === -1 ? null : { start: l, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (nf = { focusedElem: e, selectionRange: r }, Al = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (R = e));
    else
      for (; R !== null; ) {
        t = R;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var g = h.memoizedProps,
                    y = h.memoizedState,
                    m = t.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : qt(t.type, g),
                      y,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          xe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (R = e));
          break;
        }
        R = t.return;
      }
  return ((h = Ym), (Ym = !1), h);
}
function Da(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        ((i.destroy = void 0), a !== void 0 && wf(t, r, a));
      }
      i = i.next;
    } while (i !== n);
  }
}
function $s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function bf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function E1(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), E1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lr], delete t[qa], delete t[lf], delete t[EE], delete t[OE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function O1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || O1(e.return)) return null;
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
function Sf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Nl)));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Sf(e, t, r), e = e.sibling; e !== null; )
      (Sf(e, t, r), (e = e.sibling));
}
function Pf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Pf(e, t, r), e = e.sibling; e !== null; )
      (Pf(e, t, r), (e = e.sibling));
}
var Re = null,
  Xt = !1;
function Br(e, t, r) {
  for (r = r.child; r !== null; ) (k1(e, t, r), (r = r.sibling));
}
function k1(e, t, r) {
  if (ur && typeof ur.onCommitFiberUnmount == "function")
    try {
      ur.onCommitFiberUnmount(As, r);
    } catch {}
  switch (r.tag) {
    case 5:
      qe || Si(r, t);
    case 6:
      var n = Re,
        i = Xt;
      ((Re = null),
        Br(e, t, r),
        (Re = n),
        (Xt = i),
        Re !== null &&
          (Xt
            ? ((e = Re),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Re.removeChild(r.stateNode)));
      break;
    case 18:
      Re !== null &&
        (Xt
          ? ((e = Re),
            (r = r.stateNode),
            e.nodeType === 8
              ? tc(e.parentNode, r)
              : e.nodeType === 1 && tc(e, r),
            Ka(e))
          : tc(Re, r.stateNode));
      break;
    case 4:
      ((n = Re),
        (i = Xt),
        (Re = r.stateNode.containerInfo),
        (Xt = !0),
        Br(e, t, r),
        (Re = n),
        (Xt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var a = i,
            o = a.destroy;
          ((a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && wf(r, t, o),
            (i = i.next));
        } while (i !== n);
      }
      Br(e, t, r);
      break;
    case 1:
      if (
        !qe &&
        (Si(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          ((n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount());
        } catch (l) {
          xe(r, t, l);
        }
      Br(e, t, r);
      break;
    case 21:
      Br(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((qe = (n = qe) || r.memoizedState !== null), Br(e, t, r), (qe = n))
        : Br(e, t, r);
      break;
    default:
      Br(e, t, r);
  }
}
function qm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new BE()),
      t.forEach(function (n) {
        var i = QE.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      }));
  }
}
function Gt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Re = l.stateNode), (Xt = !1));
              break e;
            case 3:
              ((Re = l.stateNode.containerInfo), (Xt = !0));
              break e;
            case 4:
              ((Re = l.stateNode.containerInfo), (Xt = !0));
              break e;
          }
          l = l.return;
        }
        if (Re === null) throw Error(N(160));
        (k1(a, o, i), (Re = null), (Xt = !1));
        var s = i.alternate;
        (s !== null && (s.return = null), (i.return = null));
      } catch (u) {
        xe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (_1(t, e), (t = t.sibling));
}
function _1(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Gt(t, e), ar(e), n & 4)) {
        try {
          (Da(3, e, e.return), $s(3, e));
        } catch (g) {
          xe(e, e.return, g);
        }
        try {
          Da(5, e, e.return);
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 1:
      (Gt(t, e), ar(e), n & 512 && r !== null && Si(r, r.return));
      break;
    case 5:
      if (
        (Gt(t, e),
        ar(e),
        n & 512 && r !== null && Si(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Fa(i, "");
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = r !== null ? r.memoizedProps : a,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (l === "input" && a.type === "radio" && a.name != null && qy(i, a),
              Vc(l, o));
            var u = Vc(l, a);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                f = s[o + 1];
              c === "style"
                ? e0(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Zy(i, f)
                  : c === "children"
                    ? Fa(i, f)
                    : kd(i, c, f, u);
            }
            switch (l) {
              case "input":
                Bc(i, a);
                break;
              case "textarea":
                Xy(i, a);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var p = a.value;
                p != null
                  ? ki(i, !!a.multiple, p, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? ki(i, !!a.multiple, a.defaultValue, !0)
                      : ki(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[qa] = a;
          } catch (g) {
            xe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Gt(t, e), ar(e), n & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        ((i = e.stateNode), (a = e.memoizedProps));
        try {
          i.nodeValue = a;
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Gt(t, e), ar(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Ka(t.containerInfo);
        } catch (g) {
          xe(e, e.return, g);
        }
      break;
    case 4:
      (Gt(t, e), ar(e));
      break;
    case 13:
      (Gt(t, e),
        ar(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ap = we())),
        n & 4 && qm(e));
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((qe = (u = qe) || c), Gt(t, e), (qe = u)) : Gt(t, e),
        ar(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (f = R = c; R !== null; ) {
              switch (((d = R), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Da(4, d, d.return);
                  break;
                case 1:
                  Si(d, d.return);
                  var h = d.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    ((n = d), (r = d.return));
                    try {
                      ((t = n),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount());
                    } catch (g) {
                      xe(n, r, g);
                    }
                  }
                  break;
                case 5:
                  Si(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Qm(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (R = p)) : Qm(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Jy("display", o))));
              } catch (g) {
                xe(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                xe(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Gt(t, e), ar(e), n & 4 && qm(e));
      break;
    case 21:
      break;
    default:
      (Gt(t, e), ar(e));
  }
}
function ar(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (O1(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(N(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Fa(i, ""), (n.flags &= -33));
          var a = Gm(e);
          Pf(e, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            l = Gm(e);
          Sf(e, l, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      xe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function WE(e, t, r) {
  ((R = e), C1(e));
}
function C1(e, t, r) {
  for (var n = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Vo;
      if (!o) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || qe;
        l = Vo;
        var u = qe;
        if (((Vo = o), (qe = s) && !u))
          for (R = i; R !== null; )
            ((o = R),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Zm(i)
                : s !== null
                  ? ((s.return = o), (R = s))
                  : Zm(i));
        for (; a !== null; ) ((R = a), C1(a), (a = a.sibling));
        ((R = i), (Vo = l), (qe = u));
      }
      Xm(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (R = a)) : Xm(e);
  }
}
function Xm(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || $s(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !qe)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : qt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && Dm(t, a, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Dm(t, o, r);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (r === null && t.flags & 4) {
                r = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ka(f);
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
        qe || (t.flags & 512 && bf(t));
      } catch (d) {
        xe(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (R = r));
      break;
    }
    R = t.return;
  }
}
function Qm(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (R = r));
      break;
    }
    R = t.return;
  }
}
function Zm(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            $s(4, t);
          } catch (s) {
            xe(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              xe(t, i, s);
            }
          }
          var a = t.return;
          try {
            bf(t);
          } catch (s) {
            xe(t, a, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bf(t);
          } catch (s) {
            xe(t, o, s);
          }
      }
    } catch (s) {
      xe(t, t.return, s);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (R = l));
      break;
    }
    R = t.return;
  }
}
var KE = Math.ceil,
  Wl = Dr.ReactCurrentDispatcher,
  np = Dr.ReactCurrentOwner,
  zt = Dr.ReactCurrentBatchConfig,
  Q = 0,
  Ne = null,
  Pe = null,
  Be = 0,
  xt = 0,
  Pi = pn(0),
  _e = 0,
  to = null,
  Gn = 0,
  Rs = 0,
  ip = 0,
  Ia = null,
  lt = null,
  ap = 0,
  Bi = 1 / 0,
  hr = null,
  Kl = !1,
  Ef = null,
  nn = null,
  Yo = !1,
  Qr = null,
  Hl = 0,
  La = 0,
  Of = null,
  xl = -1,
  wl = 0;
function et() {
  return Q & 6 ? we() : xl !== -1 ? xl : (xl = we());
}
function an(e) {
  return e.mode & 1
    ? Q & 2 && Be !== 0
      ? Be & -Be
      : _E.transition !== null
        ? (wl === 0 && (wl = d0()), wl)
        : ((e = te),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : x0(e.type))),
          e)
    : 1;
}
function rr(e, t, r, n) {
  if (50 < La) throw ((La = 0), (Of = null), Error(N(185)));
  (vo(e, r, n),
    (!(Q & 2) || e !== Ne) &&
      (e === Ne && (!(Q & 2) && (Rs |= r), _e === 4 && Gr(e, Be)),
      dt(e, n),
      r === 1 && Q === 0 && !(t.mode & 1) && ((Bi = we() + 500), Ds && hn())));
}
function dt(e, t) {
  var r = e.callbackNode;
  _P(e, t);
  var n = Cl(e, e === Ne ? Be : 0);
  if (n === 0)
    (r !== null && lm(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && lm(r), t === 1))
      (e.tag === 0 ? kE(Jm.bind(null, e)) : R0(Jm.bind(null, e)),
        SE(function () {
          !(Q & 6) && hn();
        }),
        (r = null));
    else {
      switch (p0(n)) {
        case 1:
          r = Td;
          break;
        case 4:
          r = c0;
          break;
        case 16:
          r = _l;
          break;
        case 536870912:
          r = f0;
          break;
        default:
          r = _l;
      }
      r = L1(r, A1.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function A1(e, t) {
  if (((xl = -1), (wl = 0), Q & 6)) throw Error(N(327));
  var r = e.callbackNode;
  if (Ti() && e.callbackNode !== r) return null;
  var n = Cl(e, e === Ne ? Be : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Vl(e, n);
  else {
    t = n;
    var i = Q;
    Q |= 2;
    var a = T1();
    (Ne !== e || Be !== t) && ((hr = null), (Bi = we() + 500), Rn(e, t));
    do
      try {
        YE();
        break;
      } catch (l) {
        j1(e, l);
      }
    while (!0);
    (Kd(),
      (Wl.current = a),
      (Q = i),
      Pe !== null ? (t = 0) : ((Ne = null), (Be = 0), (t = _e)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Qc(e)), i !== 0 && ((n = i), (t = kf(e, i)))), t === 1)
    )
      throw ((r = to), Rn(e, 0), Gr(e, n), dt(e, we()), r);
    if (t === 6) Gr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !HE(i) &&
          ((t = Vl(e, n)),
          t === 2 && ((a = Qc(e)), a !== 0 && ((n = a), (t = kf(e, a)))),
          t === 1))
      )
        throw ((r = to), Rn(e, 0), Gr(e, n), dt(e, we()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          En(e, lt, hr);
          break;
        case 3:
          if (
            (Gr(e, n), (n & 130023424) === n && ((t = ap + 500 - we()), 10 < t))
          ) {
            if (Cl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              (et(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = of(En.bind(null, e, lt, hr), t);
            break;
          }
          En(e, lt, hr);
          break;
        case 4:
          if ((Gr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - tr(n);
            ((a = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~a));
          }
          if (
            ((n = i),
            (n = we() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * KE(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = of(En.bind(null, e, lt, hr), n);
            break;
          }
          En(e, lt, hr);
          break;
        case 5:
          En(e, lt, hr);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return (dt(e, we()), e.callbackNode === r ? A1.bind(null, e) : null);
}
function kf(e, t) {
  var r = Ia;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = Vl(e, t)),
    e !== 2 && ((t = lt), (lt = r), t !== null && _f(t)),
    e
  );
}
function _f(e) {
  lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function HE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!nr(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      ((r.return = t), (t = r));
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
function Gr(e, t) {
  for (
    t &= ~ip,
      t &= ~Rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var r = 31 - tr(t),
      n = 1 << r;
    ((e[r] = -1), (t &= ~n));
  }
}
function Jm(e) {
  if (Q & 6) throw Error(N(327));
  Ti();
  var t = Cl(e, 0);
  if (!(t & 1)) return (dt(e, we()), null);
  var r = Vl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Qc(e);
    n !== 0 && ((t = n), (r = kf(e, n)));
  }
  if (r === 1) throw ((r = to), Rn(e, 0), Gr(e, t), dt(e, we()), r);
  if (r === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, lt, hr),
    dt(e, we()),
    null
  );
}
function op(e, t) {
  var r = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    ((Q = r), Q === 0 && ((Bi = we() + 500), Ds && hn()));
  }
}
function qn(e) {
  Qr !== null && Qr.tag === 0 && !(Q & 6) && Ti();
  var t = Q;
  Q |= 1;
  var r = zt.transition,
    n = te;
  try {
    if (((zt.transition = null), (te = 1), e)) return e();
  } finally {
    ((te = n), (zt.transition = r), (Q = t), !(Q & 6) && hn());
  }
}
function lp() {
  ((xt = Pi.current), ce(Pi));
}
function Rn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), bE(r)), Pe !== null))
    for (r = Pe.return; r !== null; ) {
      var n = r;
      switch ((Bd(n), n.tag)) {
        case 1:
          ((n = n.type.childContextTypes), n != null && Ml());
          break;
        case 3:
          (zi(), ce(ct), ce(Qe), Xd());
          break;
        case 5:
          qd(n);
          break;
        case 4:
          zi();
          break;
        case 13:
          ce(he);
          break;
        case 19:
          ce(he);
          break;
        case 10:
          Hd(n.type._context);
          break;
        case 22:
        case 23:
          lp();
      }
      r = r.return;
    }
  if (
    ((Ne = e),
    (Pe = e = on(e.current, null)),
    (Be = xt = t),
    (_e = 0),
    (to = null),
    (ip = Rs = Gn = 0),
    (lt = Ia = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((r = An[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var o = a.next;
          ((a.next = i), (n.next = o));
        }
        r.pending = n;
      }
    An = null;
  }
  return e;
}
function j1(e, t) {
  do {
    var r = Pe;
    try {
      if ((Kd(), (vl.current = Ul), Bl)) {
        for (var n = me.memoizedState; n !== null; ) {
          var i = n.queue;
          (i !== null && (i.pending = null), (n = n.next));
        }
        Bl = !1;
      }
      if (
        ((Yn = 0),
        (Te = ke = me = null),
        (Ma = !1),
        (Za = 0),
        (np.current = null),
        r === null || r.return === null)
      ) {
        ((_e = 1), (to = t), (Pe = null));
        break;
      }
      e: {
        var a = e,
          o = r.return,
          l = r,
          s = t;
        if (
          ((t = Be),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Fm(o);
          if (p !== null) {
            ((p.flags &= -257),
              Bm(p, o, l, a, t),
              p.mode & 1 && zm(a, u, t),
              (t = p),
              (s = u));
            var h = t.updateQueue;
            if (h === null) {
              var g = new Set();
              (g.add(s), (t.updateQueue = g));
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (zm(a, u, t), sp());
              break e;
            }
            s = Error(N(426));
          }
        } else if (de && l.mode & 1) {
          var y = Fm(o);
          if (y !== null) {
            (!(y.flags & 65536) && (y.flags |= 256),
              Bm(y, o, l, a, t),
              Ud(Fi(s, l)));
            break e;
          }
        }
        ((a = s = Fi(s, l)),
          _e !== 4 && (_e = 2),
          Ia === null ? (Ia = [a]) : Ia.push(a),
          (a = o));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var m = p1(a, s, t);
              Mm(a, m);
              break e;
            case 1:
              l = s;
              var v = a.type,
                x = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (nn === null || !nn.has(x))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var S = h1(a, l, t);
                Mm(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      M1(r);
    } catch (P) {
      ((t = P), Pe === r && r !== null && (Pe = r = r.return));
      continue;
    }
    break;
  } while (!0);
}
function T1() {
  var e = Wl.current;
  return ((Wl.current = Ul), e === null ? Ul : e);
}
function sp() {
  ((_e === 0 || _e === 3 || _e === 2) && (_e = 4),
    Ne === null || (!(Gn & 268435455) && !(Rs & 268435455)) || Gr(Ne, Be));
}
function Vl(e, t) {
  var r = Q;
  Q |= 2;
  var n = T1();
  (Ne !== e || Be !== t) && ((hr = null), Rn(e, t));
  do
    try {
      VE();
      break;
    } catch (i) {
      j1(e, i);
    }
  while (!0);
  if ((Kd(), (Q = r), (Wl.current = n), Pe !== null)) throw Error(N(261));
  return ((Ne = null), (Be = 0), _e);
}
function VE() {
  for (; Pe !== null; ) N1(Pe);
}
function YE() {
  for (; Pe !== null && !yP(); ) N1(Pe);
}
function N1(e) {
  var t = I1(e.alternate, e, xt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? M1(e) : (Pe = t),
    (np.current = null));
}
function M1(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = FE(r, t)), r !== null)) {
        ((r.flags &= 32767), (Pe = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((_e = 6), (Pe = null));
        return;
      }
    } else if (((r = zE(r, t, xt)), r !== null)) {
      Pe = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  _e === 0 && (_e = 5);
}
function En(e, t, r) {
  var n = te,
    i = zt.transition;
  try {
    ((zt.transition = null), (te = 1), GE(e, t, r, n));
  } finally {
    ((zt.transition = i), (te = n));
  }
  return null;
}
function GE(e, t, r, n) {
  do Ti();
  while (Qr !== null);
  if (Q & 6) throw Error(N(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(N(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = r.lanes | r.childLanes;
  if (
    (CP(e, a),
    e === Ne && ((Pe = Ne = null), (Be = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Yo ||
      ((Yo = !0),
      L1(_l, function () {
        return (Ti(), null);
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    ((a = zt.transition), (zt.transition = null));
    var o = te;
    te = 1;
    var l = Q;
    ((Q |= 4),
      (np.current = null),
      UE(e, r),
      _1(r, e),
      hE(nf),
      (Al = !!rf),
      (nf = rf = null),
      (e.current = r),
      WE(r),
      xP(),
      (Q = l),
      (te = o),
      (zt.transition = a));
  } else e.current = r;
  if (
    (Yo && ((Yo = !1), (Qr = e), (Hl = i)),
    (a = e.pendingLanes),
    a === 0 && (nn = null),
    SP(r.stateNode),
    dt(e, we()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      ((i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Kl) throw ((Kl = !1), (e = Ef), (Ef = null), e);
  return (
    Hl & 1 && e.tag !== 0 && Ti(),
    (a = e.pendingLanes),
    a & 1 ? (e === Of ? La++ : ((La = 0), (Of = e))) : (La = 0),
    hn(),
    null
  );
}
function Ti() {
  if (Qr !== null) {
    var e = p0(Hl),
      t = zt.transition,
      r = te;
    try {
      if (((zt.transition = null), (te = 16 > e ? 16 : e), Qr === null))
        var n = !1;
      else {
        if (((e = Qr), (Qr = null), (Hl = 0), Q & 6)) throw Error(N(331));
        var i = Q;
        for (Q |= 4, R = e.current; R !== null; ) {
          var a = R,
            o = a.child;
          if (R.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Da(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (R = f));
                  else
                    for (; R !== null; ) {
                      c = R;
                      var d = c.sibling,
                        p = c.return;
                      if ((E1(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = p), (R = d));
                        break;
                      }
                      R = p;
                    }
                }
              }
              var h = a.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var y = g.sibling;
                    ((g.sibling = null), (g = y));
                  } while (g !== null);
                }
              }
              R = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) ((o.return = a), (R = o));
          else
            e: for (; R !== null; ) {
              if (((a = R), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Da(9, a, a.return);
                }
              var m = a.sibling;
              if (m !== null) {
                ((m.return = a.return), (R = m));
                break e;
              }
              R = a.return;
            }
        }
        var v = e.current;
        for (R = v; R !== null; ) {
          o = R;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) ((x.return = o), (R = x));
          else
            e: for (o = v; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $s(9, l);
                  }
                } catch (P) {
                  xe(l, l.return, P);
                }
              if (l === o) {
                R = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                ((S.return = l.return), (R = S));
                break e;
              }
              R = l.return;
            }
        }
        if (
          ((Q = i), hn(), ur && typeof ur.onPostCommitFiberRoot == "function")
        )
          try {
            ur.onPostCommitFiberRoot(As, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ((te = r), (zt.transition = t));
    }
  }
  return !1;
}
function ev(e, t, r) {
  ((t = Fi(r, t)),
    (t = p1(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = et()),
    e !== null && (vo(e, 1, t), dt(e, t)));
}
function xe(e, t, r) {
  if (e.tag === 3) ev(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ev(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (nn === null || !nn.has(n)))
        ) {
          ((e = Fi(r, e)),
            (e = h1(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = et()),
            t !== null && (vo(t, 1, e), dt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function qE(e, t, r) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ne === e &&
      (Be & r) === r &&
      (_e === 4 || (_e === 3 && (Be & 130023424) === Be && 500 > we() - ap)
        ? Rn(e, 0)
        : (ip |= r)),
    dt(e, t));
}
function D1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $o), ($o <<= 1), !($o & 130023424) && ($o = 4194304))
      : (t = 1));
  var r = et();
  ((e = _r(e, t)), e !== null && (vo(e, t, r), dt(e, r)));
}
function XE(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), D1(e, r));
}
function QE(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  (n !== null && n.delete(t), D1(e, r));
}
var I1;
I1 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) st = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return ((st = !1), RE(e, t, r));
      st = !!(e.flags & 131072);
    }
  else ((st = !1), de && t.flags & 1048576 && z0(t, Ll, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      (yl(e, t), (e = t.pendingProps));
      var i = Li(t, Qe.current);
      (ji(t, r), (i = Zd(null, t, n, e, i, r)));
      var a = Jd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ft(n) ? ((a = !0), Dl(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Yd(t),
            (i.updater = Ls),
            (t.stateNode = i),
            (i._reactInternals = t),
            pf(t, n, e, r),
            (t = vf(null, t, n, !0, a, r)))
          : ((t.tag = 0), de && a && Fd(t), Ze(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (yl(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = JE(n)),
          (e = qt(n, e)),
          i)
        ) {
          case 0:
            t = mf(null, t, n, e, r);
            break e;
          case 1:
            t = Km(null, t, n, e, r);
            break e;
          case 11:
            t = Um(null, t, n, e, r);
            break e;
          case 14:
            t = Wm(null, t, n, qt(n.type, e), r);
            break e;
        }
        throw Error(N(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : qt(n, i)),
        mf(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : qt(n, i)),
        Km(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((y1(t), e === null)) throw Error(N(387));
        ((n = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          H0(e, t),
          zl(t, n, null, r));
        var o = t.memoizedState;
        if (((n = o.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((i = Fi(Error(N(423)), t)), (t = Hm(e, t, n, r, i)));
            break e;
          } else if (n !== i) {
            ((i = Fi(Error(N(424)), t)), (t = Hm(e, t, n, r, i)));
            break e;
          } else
            for (
              Pt = tn(t.stateNode.containerInfo.firstChild),
                Et = t,
                de = !0,
                Qt = null,
                r = W0(t, null, n, r),
                t.child = r;
              r;
            )
              ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
        else {
          if (($i(), n === i)) {
            t = Cr(e, t, r);
            break e;
          }
          Ze(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        V0(t),
        e === null && cf(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        af(n, i) ? (o = null) : a !== null && af(n, a) && (t.flags |= 32),
        g1(e, t),
        Ze(e, t, o, r),
        t.child
      );
    case 6:
      return (e === null && cf(t), null);
    case 13:
      return x1(e, t, r);
    case 4:
      return (
        Gd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ri(t, null, n, r)) : Ze(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : qt(n, i)),
        Um(e, t, n, i, r)
      );
    case 7:
      return (Ze(e, t, t.pendingProps, r), t.child);
    case 8:
      return (Ze(e, t, t.pendingProps.children, r), t.child);
    case 12:
      return (Ze(e, t, t.pendingProps.children, r), t.child);
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          ae($l, n._currentValue),
          (n._currentValue = o),
          a !== null)
        )
          if (nr(a.value, o)) {
            if (a.children === i.children && !ct.current) {
              t = Cr(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (a.tag === 1) {
                      ((s = Sr(-1, r & -r)), (s.tag = 2));
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s));
                      }
                    }
                    ((a.lanes |= r),
                      (s = a.alternate),
                      s !== null && (s.lanes |= r),
                      ff(a.return, r, t),
                      (l.lanes |= r));
                    break;
                  }
                  s = s.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(N(341));
                ((o.lanes |= r),
                  (l = o.alternate),
                  l !== null && (l.lanes |= r),
                  ff(o, r, t),
                  (o = a.sibling));
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    ((a.return = o.return), (o = a));
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        (Ze(e, t, i.children, r), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        ji(t, r),
        (i = Ft(i)),
        (n = n(i)),
        (t.flags |= 1),
        Ze(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = qt(n, t.pendingProps)),
        (i = qt(n.type, i)),
        Wm(e, t, n, i, r)
      );
    case 15:
      return m1(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : qt(n, i)),
        yl(e, t),
        (t.tag = 1),
        ft(n) ? ((e = !0), Dl(t)) : (e = !1),
        ji(t, r),
        d1(t, n, i),
        pf(t, n, i, r),
        vf(null, t, n, !0, e, r)
      );
    case 19:
      return w1(e, t, r);
    case 22:
      return v1(e, t, r);
  }
  throw Error(N(156, t.tag));
};
function L1(e, t) {
  return u0(e, t);
}
function ZE(e, t, r, n) {
  ((this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Lt(e, t, r, n) {
  return new ZE(e, t, r, n);
}
function up(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function JE(e) {
  if (typeof e == "function") return up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cd)) return 11;
    if (e === Ad) return 14;
  }
  return 2;
}
function on(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Lt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function bl(e, t, r, n, i, a) {
  var o = 2;
  if (((n = e), typeof e == "function")) up(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case pi:
        return zn(r.children, i, a, t);
      case _d:
        ((o = 8), (i |= 8));
        break;
      case Lc:
        return (
          (e = Lt(12, r, t, i | 2)),
          (e.elementType = Lc),
          (e.lanes = a),
          e
        );
      case $c:
        return ((e = Lt(13, r, t, i)), (e.elementType = $c), (e.lanes = a), e);
      case Rc:
        return ((e = Lt(19, r, t, i)), (e.elementType = Rc), (e.lanes = a), e);
      case Vy:
        return zs(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ky:
              o = 10;
              break e;
            case Hy:
              o = 9;
              break e;
            case Cd:
              o = 11;
              break e;
            case Ad:
              o = 14;
              break e;
            case Kr:
              ((o = 16), (n = null));
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(o, r, t, i)),
    (t.elementType = e),
    (t.type = n),
    (t.lanes = a),
    t
  );
}
function zn(e, t, r, n) {
  return ((e = Lt(7, e, n, t)), (e.lanes = r), e);
}
function zs(e, t, r, n) {
  return (
    (e = Lt(22, e, n, t)),
    (e.elementType = Vy),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uc(e, t, r) {
  return ((e = Lt(6, e, null, t)), (e.lanes = r), e);
}
function cc(e, t, r) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function eO(e, t, r, n, i) {
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
    (this.eventTimes = Ku(0)),
    (this.expirationTimes = Ku(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ku(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function cp(e, t, r, n, i, a, o, l, s) {
  return (
    (e = new eO(e, t, r, l, s)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Lt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Yd(a),
    e
  );
}
function tO(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: di,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function $1(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (ri(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ft(r)) return $0(e, r, t);
  }
  return t;
}
function R1(e, t, r, n, i, a, o, l, s) {
  return (
    (e = cp(r, n, !0, e, i, a, o, l, s)),
    (e.context = $1(null)),
    (r = e.current),
    (n = et()),
    (i = an(r)),
    (a = Sr(n, i)),
    (a.callback = t ?? null),
    rn(r, a, i),
    (e.current.lanes = i),
    vo(e, i, n),
    dt(e, n),
    e
  );
}
function Fs(e, t, r, n) {
  var i = t.current,
    a = et(),
    o = an(i);
  return (
    (r = $1(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Sr(a, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = rn(i, t, o)),
    e !== null && (rr(e, i, o, a), ml(e, i, o)),
    o
  );
}
function Yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function fp(e, t) {
  (tv(e, t), (e = e.alternate) && tv(e, t));
}
function rO() {
  return null;
}
var z1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function dp(e) {
  this._internalRoot = e;
}
Bs.prototype.render = dp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Fs(e, t, null, null);
};
Bs.prototype.unmount = dp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (qn(function () {
      Fs(null, e, null, null);
    }),
      (t[kr] = null));
  }
};
function Bs(e) {
  this._internalRoot = e;
}
Bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = v0();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Yr.length && t !== 0 && t < Yr[r].priority; r++);
    (Yr.splice(r, 0, e), r === 0 && y0(e));
  }
};
function pp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rv() {}
function nO(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var u = Yl(o);
        a.call(u);
      };
    }
    var o = R1(t, n, e, 0, null, !1, !1, "", rv);
    return (
      (e._reactRootContainer = o),
      (e[kr] = o.current),
      Ya(e.nodeType === 8 ? e.parentNode : e),
      qn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var u = Yl(s);
      l.call(u);
    };
  }
  var s = cp(e, 0, !1, null, null, !1, !1, "", rv);
  return (
    (e._reactRootContainer = s),
    (e[kr] = s.current),
    Ya(e.nodeType === 8 ? e.parentNode : e),
    qn(function () {
      Fs(t, s, r, n);
    }),
    s
  );
}
function Ws(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = Yl(o);
        l.call(s);
      };
    }
    Fs(t, o, e, i);
  } else o = nO(r, t, e, i, n);
  return Yl(o);
}
h0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Ea(t.pendingLanes);
        r !== 0 &&
          (Nd(t, r | 1), dt(t, we()), !(Q & 6) && ((Bi = we() + 500), hn()));
      }
      break;
    case 13:
      (qn(function () {
        var n = _r(e, 1);
        if (n !== null) {
          var i = et();
          rr(n, e, 1, i);
        }
      }),
        fp(e, 1));
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = _r(e, 134217728);
    if (t !== null) {
      var r = et();
      rr(t, e, 134217728, r);
    }
    fp(e, 134217728);
  }
};
m0 = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      r = _r(e, t);
    if (r !== null) {
      var n = et();
      rr(r, e, t, n);
    }
    fp(e, t);
  }
};
v0 = function () {
  return te;
};
g0 = function (e, t) {
  var r = te;
  try {
    return ((te = e), t());
  } finally {
    te = r;
  }
};
Gc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Bc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = Ms(n);
            if (!i) throw Error(N(90));
            (Gy(n), Bc(n, i));
          }
        }
      }
      break;
    case "textarea":
      Xy(e, r);
      break;
    case "select":
      ((t = r.value), t != null && ki(e, !!r.multiple, t, !1));
  }
};
n0 = op;
i0 = qn;
var iO = { usingClientEntryPoint: !1, Events: [yo, gi, Ms, t0, r0, op] },
  pa = {
    findFiberByHostInstance: Cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  aO = {
    bundleType: pa.bundleType,
    version: pa.version,
    rendererPackageName: pa.rendererPackageName,
    rendererConfig: pa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = l0(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: pa.findFiberByHostInstance || rO,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Go.isDisabled && Go.supportsFiber)
    try {
      ((As = Go.inject(aO)), (ur = Go));
    } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iO;
jt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(N(200));
  return tO(e, t, null, r);
};
jt.createRoot = function (e, t) {
  if (!pp(e)) throw Error(N(299));
  var r = !1,
    n = "",
    i = z1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cp(e, 1, !1, null, null, r, !1, n, i)),
    (e[kr] = t.current),
    Ya(e.nodeType === 8 ? e.parentNode : e),
    new dp(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return ((e = l0(t)), (e = e === null ? null : e.stateNode), e);
};
jt.flushSync = function (e) {
  return qn(e);
};
jt.hydrate = function (e, t, r) {
  if (!Us(t)) throw Error(N(200));
  return Ws(null, e, t, !0, r);
};
jt.hydrateRoot = function (e, t, r) {
  if (!pp(e)) throw Error(N(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    o = z1;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = R1(t, null, e, 1, r ?? null, i, !1, a, o)),
    (e[kr] = t.current),
    Ya(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      ((r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i));
  return new Bs(t);
};
jt.render = function (e, t, r) {
  if (!Us(t)) throw Error(N(200));
  return Ws(null, e, t, !1, r);
};
jt.unmountComponentAtNode = function (e) {
  if (!Us(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (qn(function () {
        Ws(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[kr] = null));
        });
      }),
      !0)
    : !1;
};
jt.unstable_batchedUpdates = op;
jt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Us(r)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ws(e, t, r, !1, n);
};
jt.version = "18.3.1-next-f1338f8080-20240426";
function F1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1);
    } catch (e) {
      console.error(e);
    }
}
(F1(), (Fy.exports = jt));
var B1 = Fy.exports,
  U1,
  nv = B1;
((U1 = nv.createRoot), nv.hydrateRoot);
const oO = {
    zh: {
      "app.title": "藥局環境監控",
      "app.subtitle": "查詢處方疑義紀錄，並檢視相關資訊",
      "search.button": "搜尋",
      "search.field.patientCode": "病歷號",
      "search.field.department": "科別",
      "search.field.operator": "操作者",
      "search.field.reporter": "提報人員",
      "search.placeholder.patientCode": "搜尋病歷號",
      "search.placeholder.department": "搜尋科別",
      "search.placeholder.operator": "搜尋操作者",
      "search.placeholder.reporter": "搜尋提報人員",
      "export.button": "匯出",
      "filter.placeholder": "搜尋病歷號",
      "date.startLabel": "開始日期時間",
      "date.endLabel": "結束日期時間",
      "date.timeType": "時間類型",
      "date.timeType.create": "建立時間",
      "date.timeType.prescription": "開方時間",
      "date.timeType.order": "開方時間",
      "date.timeType.report": "提報時間",
      "date.timeType.handle": "處理時間",
      "table.patientCode": "病歷號",
      "table.doctor": "醫師姓名",
      "table.department": "科別",
      "table.prescriptionBagType": "藥袋類型",
      "table.orderTime": "開方時間",
      "table.createTime": "建立時間",
      "table.errorType": "錯誤類別",
      "table.status": "狀態",
      "table.operator": "操作者",
      "table.diagnosis": "診斷內容",
      "table.details": "事件詳細描述",
      "table.reportTime": "提報時間",
      "table.reporter": "提報人員",
      "table.handleTime": "處理時間",
      "table.notification": "通報",
      "table.remarks": "備註",
      "table.showAll": "顯示所有詳細資料",
      "table.recordCount": "顯示 {showing} 筆資料（共 {total} 筆）",
      "table.noRecords": "沒有符合條件的處方疑義紀錄",
      "table.records": "筆",
      "status.processed": "已處理",
      "status.processing": "處理中",
      "status.unchanged": "未更改",
      "tab.records": "歷史紀錄",
      "tab.rules": "環境監控",
      "rules.description": "規則說明",
      "rules.environment": "執行環境",
      "rules.importance": "重要程度",
      "error.loading": "載入資料時發生錯誤",
      "error.api": "系統錯誤，請稍後再試",
      loading: "正在載入資料...",
      download: "下載紀錄",
      logout: "登出",
      "platform.title": "次世代整合平台",
      copyright: "Copyright ©2025 鴻森智能科技",
      "realtime.overview": "即時概況",
      "inpatient.pharmacy": "住院藥局",
      "drug.storage": "藥庫",
      "outpatient.pharmacy": "門急診藥局",
      temperature: "溫度",
      humidity: "濕度",
      "last.updated": "最後更新",
      "temp.humidity.trend.chart": "溫濕度趨勢圖表",
      "temp.humidity.trend": "溫濕度趨勢",
      "records.count": "筆數據",
      "displaying.last.8hours": "預設顯示最近8小時",
      "latest.time": "最新時間",
      "showing.records": "顯示",
    },
    en: {
      "app.title": "Pharmacy Environment Monitoring",
      "app.subtitle": "Query and review prescription records",
      "search.button": "Search",
      "search.field.patientCode": "Patient Code",
      "search.field.department": "Department",
      "search.field.operator": "Operator",
      "search.field.reporter": "Reporter",
      "search.placeholder.patientCode": "Search patient code...",
      "search.placeholder.department": "Search department...",
      "search.placeholder.operator": "Search operator...",
      "search.placeholder.reporter": "Search reporter...",
      "export.button": "Export",
      "filter.placeholder": "Search patient ID...",
      "date.startLabel": "Start Date & Time",
      "date.endLabel": "End Date & Time",
      "date.timeType": "Time Type",
      "date.timeType.create": "Create Time",
      "date.timeType.prescription": "Prescription Time",
      "date.timeType.order": "Order Time",
      "date.timeType.report": "Report Time",
      "date.timeType.handle": "Handle Time",
      "table.patientCode": "Patient ID",
      "table.doctor": "Doctor",
      "table.department": "Department",
      "table.prescriptionBagType": "Prescription Bag Type",
      "table.orderTime": "Order Time",
      "table.createTime": "Create Time",
      "table.errorType": "Error Type",
      "table.status": "Status",
      "table.operator": "Operator",
      "table.diagnosis": "Diagnosis",
      "table.details": "Event Details",
      "table.reportTime": "Report Time",
      "table.reporter": "Reporter",
      "table.handleTime": "Handle Time",
      "table.notification": "Notification",
      "table.remarks": "Remarks",
      "table.showAll": "Show All Details",
      "table.recordCount": "Showing {showing} records (Total {total})",
      "table.noRecords": "No prescription records found",
      "table.records": "records",
      "status.processed": "Processed",
      "status.processing": "Processing",
      "status.unchanged": "Unchanged",
      "tab.records": "Historical Records",
      "tab.rules": "Environment Monitoring",
      "rules.description": "Rule Description",
      "rules.environment": "Environment",
      "rules.importance": "Importance Level",
      "error.loading": "Error loading data",
      "error.api": "System error, please try again later",
      loading: "Loading data...",
      download: "Download Record",
      logout: "Logout",
      "platform.title": "Next Generation Platform",
      copyright: "Copyright ©2025 Hongsen Technology",
      "realtime.overview": "Real-Time Overview",
      "inpatient.pharmacy": "Inpatient Pharmacy",
      "drug.storage": "Drug Storage",
      "outpatient.pharmacy": "Outpatient Pharmacy",
      temperature: "Temperature",
      humidity: "Humidity",
      "last.updated": "Last Updated",
      "temp.humidity.trend.chart": "Temperature & Humidity Trend Chart",
      "temp.humidity.trend": "Temp & Humidity Trend",
      "records.count": "Records",
      "displaying.last.8hours": "Displaying Last 8 Hours (default)",
      "latest.time": "Latest Time",
      "showing.records": "Showing",
    },
  },
  W1 = b.createContext(void 0),
  lO = ({ children: e }) => {
    const [t, r] = b.useState("zh"),
      n = () => {
        r((a) => (a === "zh" ? "en" : "zh"));
      },
      i = (a, o) => {
        let l = oO[t][a] || a;
        return (
          o &&
            Object.entries(o).forEach(([s, u]) => {
              l = l.replace(`{${s}}`, u.toString());
            }),
          l
        );
      };
    return w.jsx(W1.Provider, {
      value: { language: t, toggleLanguage: n, t: i },
      children: e,
    });
  },
  Ir = () => {
    const e = b.useContext(W1);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
function sO({
  startDate: e,
  startTime: t,
  endDate: r,
  endTime: n,
  onStartDateChange: i,
  onStartTimeChange: a,
  onEndDateChange: o,
  onEndTimeChange: l,
  timeType: s,
  onTimeTypeChange: u,
  className: c = "",
}) {
  const { t: f } = Ir();
  return w.jsx("div", {
    className: c,
    children: w.jsxs("div", {
      className: "flex flex-wrap gap-6",
      children: [
        s &&
          u &&
          w.jsxs("div", {
            children: [
              w.jsx("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: f("date.timeType"),
              }),
              w.jsxs("select", {
                value: s,
                onChange: (d) => u(d.target.value),
                className:
                  "w-40 border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                children: [
                  w.jsx("option", {
                    value: "create",
                    children: f("date.timeType.create"),
                  }),
                  w.jsx("option", {
                    value: "prescription",
                    children: f("date.timeType.prescription"),
                  }),
                ],
              }),
            ],
          }),
        w.jsxs("div", {
          className: `flex-1 ${s && u ? "min-w-[600px]" : "min-w-[800px]"} grid grid-cols-2 gap-6`,
          children: [
            w.jsxs("div", {
              children: [
                w.jsx("label", {
                  className: "block text-sm font-medium text-gray-700 mb-2",
                  children: f("date.startLabel"),
                }),
                w.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    w.jsx("input", {
                      type: "date",
                      value: e,
                      onChange: (d) => i(d.target.value),
                      className:
                        "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      placeholder: "YYYY-MM-DD",
                    }),
                    w.jsx("input", {
                      type: "time",
                      value: t,
                      onChange: (d) => a(d.target.value),
                      className:
                        "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      step: "1",
                      placeholder: "HH:mm:ss",
                    }),
                  ],
                }),
              ],
            }),
            w.jsxs("div", {
              children: [
                w.jsx("label", {
                  className: "block text-sm font-medium text-gray-700 mb-2",
                  children: f("date.endLabel"),
                }),
                w.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    w.jsx("input", {
                      type: "date",
                      value: r,
                      onChange: (d) => o(d.target.value),
                      className:
                        "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      step: "1",
                      placeholder: "YYYY-MM-DD",
                    }),
                    w.jsx("input", {
                      type: "time",
                      value: n,
                      onChange: (d) => l(d.target.value),
                      className:
                        "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      step: "1",
                      placeholder: "HH:mm:ss",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var uO = {
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
 */ const cO = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  We = (e, t) => {
    const r = b.forwardRef(
      (
        {
          color: n = "currentColor",
          size: i = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: o,
          className: l = "",
          children: s,
          ...u
        },
        c,
      ) =>
        b.createElement(
          "svg",
          {
            ref: c,
            ...uO,
            width: i,
            height: i,
            stroke: n,
            strokeWidth: o ? (Number(a) * 24) / Number(i) : a,
            className: ["lucide", `lucide-${cO(e)}`, l].join(" "),
            ...u,
          },
          [
            ...t.map(([f, d]) => b.createElement(f, d)),
            ...(Array.isArray(s) ? s : [s]),
          ],
        ),
    );
    return ((r.displayName = `${e}`), r);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hp = We("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cf = We("AlertTriangle", [
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
 */ const fO = We("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dO = We("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4",
    },
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pO = We("Globe", [
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
 */ const hO = We("Layers", [
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
 */ const mO = We("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vO = We("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Af = We("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gO = We("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yO = We("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh",
    },
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = We("Settings", [
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
 */ const xO = We("Thermometer", [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fc = We("Trash2", [
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
 */ const wO = We("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bO = We("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mp = We("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let Tn = null;
const H1 = async () => {
    if (Tn) return Tn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((Tn = await e.json()), Tn);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  SO = (e) => {
    if (!Tn) throw new Error("Configuration not loaded");
    return `${Tn.domain}${e}`;
  },
  PO = () => Tn,
  mn = async (e, t = {}) => {
    let r;
    try {
      r = SO(e);
    } catch {
      throw new Error(
        "API configuration not loaded. Please refresh the page and try again.",
      );
    }
    const n = t.method || "GET",
      i = t.responseType || "json";
    (console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${r}`),
      console.log(`Method: ${n}`),
      t.body && console.log("Request Payload:", t.body));
    try {
      const a = await fetch(r, {
        method: n,
        headers: { "Content-Type": "application/json" },
        body: t.body ? JSON.stringify(t.body) : void 0,
      });
      if (!a.ok) throw new Error(`伺服器錯誤 (${a.status})`);
      if (i === "blob")
        return (console.log("Response: Blob data"), console.groupEnd(), a);
      const o = await a.text();
      let l;
      try {
        l = JSON.parse(o);
      } catch (s) {
        throw (
          console.error("Failed to parse response as JSON:", s),
          new Error("伺服器回應格式錯誤，請稍後再試")
        );
      }
      return (console.log("Response:", l), console.groupEnd(), l);
    } catch (a) {
      throw (
        console.error("API Error:", a),
        console.groupEnd(),
        a instanceof TypeError && a.message.includes("Failed to fetch")
          ? new Error("無法連接到伺服器，請檢查網路連線或稍後再試")
          : a instanceof Error
            ? a
            : new Error("發生未知錯誤，請稍後再試")
      );
    }
  },
  EO = (e) =>
    e.map((t) => {
      const r = parseFloat(t.temp_offset || "0"),
        n = parseFloat(t.humidity_offset || "0"),
        i =
          t.temperatureClasses && t.temperatureClasses.length > 0
            ? t.temperatureClasses[0]
            : { temp: "0", humidity: "0", add_time: new Date().toISOString() },
        a = parseFloat(i.temp || "0"),
        o = parseFloat(i.humidity || "0"),
        l = a + r,
        s = o + n;
      return (
        console.log(`Processing ${t.name}:`, {
          rawTemp: a,
          tempOffset: r,
          compensatedTemp: l,
          rawHumidity: o,
          humidityOffset: n,
          compensatedHumidity: s,
        }),
        {
          GUID: t.GUID || `temp-${Date.now()}-${Math.random()}`,
          name: t.name,
          temp: l,
          humidity: s,
          add_time: i.add_time,
          rawTemp: a,
          rawHumidity: o,
          temp_max: parseFloat(t.temp_max || "25"),
          temp_min: parseFloat(t.temp_min || "15"),
          temp_offset: r,
          humidity_max: parseFloat(t.humidity_max || "70"),
          humidity_min: parseFloat(t.humidity_min || "40"),
          humidity_offset: n,
          alert: t.alert === "True",
          mail: t.mail === "True",
        }
      );
    }),
  Nn = (e) => e.toString().padStart(2, "0"),
  OO = async () => {
    const e = await mn("/api/temperature/get_latest_today", {
      method: "POST",
      body: {},
    });
    return (e.Code === 200 && e.Data && (e.Data = EO(e.Data)), e);
  },
  V1 = async (e, t) => {
    const r = await mn("/api/temperature/get_temp_by_time", {
      method: "POST",
      body: { ValueAry: [e, t] },
    });
    return (r.Code === 200 && r.Data && (r.Data = kO(r.Data)), r);
  },
  kO = (e) =>
    e.flatMap((t) => {
      const r = parseFloat(t.temp_offset || "0"),
        n = parseFloat(t.humidity_offset || "0");
      return !t.temperatureClasses || t.temperatureClasses.length === 0
        ? []
        : t.temperatureClasses.map((i) => {
            const a = parseFloat(i.temp || "0"),
              o = parseFloat(i.humidity || "0"),
              l = a + r,
              s = o + n;
            return (
              console.log(`Processing historical ${t.name} at ${i.add_time}:`, {
                rawTemp: a,
                tempOffset: r,
                compensatedTemp: l,
                rawHumidity: o,
                humidityOffset: n,
                compensatedHumidity: s,
              }),
              {
                GUID: `${t.GUID || "hist"}-${i.add_time}`,
                name: t.name,
                temp: l,
                humidity: s,
                add_time: i.add_time,
              }
            );
          });
    }),
  _O = async () => {
    const e = new Date(),
      t = e.toISOString().split("T")[0],
      r = `${t} 00:00:00`,
      n = `${t} ${Nn(e.getHours())}:${Nn(e.getMinutes())}:${Nn(e.getSeconds())}`;
    return (
      console.log("Fetching today's temperature data:", {
        startDateTime: r,
        endDateTime: n,
        today: t,
      }),
      await V1(r, n)
    );
  },
  CO = async () => {
    const e = new Date(),
      t = e.getFullYear(),
      r = e.getMonth() + 1,
      n = `${t}-${Nn(r)}-01 00:00:00`,
      i = new Date(t, r, 0),
      a = `${t}-${Nn(r)}-${Nn(i.getDate())} 23:59:59`;
    console.log("Downloading temperature Excel for current month:", {
      firstDayStr: n,
      lastDayStr: a,
    });
    const l = await (
        await mn("/api/temperature/download_datas_excel", {
          method: "POST",
          body: { ValueAry: [n, a] },
          responseType: "blob",
        })
      ).blob(),
      s = window.URL.createObjectURL(l),
      u = document.createElement("a");
    ((u.href = s),
      (u.download = `${t}-${Nn(r)}報表.xlsx`),
      document.body.appendChild(u),
      u.click(),
      document.body.removeChild(u),
      window.URL.revokeObjectURL(s));
  },
  AO = async () =>
    await mn("/api/temperature/get_set", { method: "POST", body: {} }),
  jO = (e) =>
    !e.Data || e.Data.length === 0
      ? []
      : e.Data.map((t) => ({
          GUID: t.GUID,
          IP: t.IP,
          name: t.name,
          temp_max: isNaN(parseFloat(t.temp_max))
            ? 100
            : parseFloat(t.temp_max),
          temp_min: isNaN(parseFloat(t.temp_min)) ? 0 : parseFloat(t.temp_min),
          temp_offset: isNaN(parseFloat(t.temp_offset))
            ? 0
            : parseFloat(t.temp_offset),
          humidity_max: isNaN(parseFloat(t.humidity_max))
            ? 100
            : parseFloat(t.humidity_max),
          humidity_min: isNaN(parseFloat(t.humidity_min))
            ? 0
            : parseFloat(t.humidity_min),
          humidity_offset: isNaN(parseFloat(t.humidity_offset))
            ? 0
            : parseFloat(t.humidity_offset),
          alert: t.alert === "True",
          mail: t.mail === "True",
        })),
  jf = () => ({
    GUID: "",
    IP: "",
    name: "Default",
    temp_max: 25,
    temp_min: 15,
    temp_offset: 2,
    humidity_max: 70,
    humidity_min: 40,
    humidity_offset: 10,
    alert: !0,
    mail: !0,
  }),
  TO = (e) => {
    if (e.length === 0) {
      const r = jf();
      return {
        temp_max: r.temp_max,
        temp_min: r.temp_min,
        humi_max: r.humidity_max,
        humi_min: r.humidity_min,
      };
    }
    const t = e[0];
    return {
      temp_max: t.temp_max,
      temp_min: t.temp_min,
      humi_max: t.humidity_max,
      humi_min: t.humidity_min,
    };
  },
  NO = async (e) => {
    await mn("/api/temperature/update_set", {
      method: "POST",
      body: { Data: e },
    });
  },
  MO = async (e) => {
    await mn("/api/temperature/delete_set", {
      method: "POST",
      body: { ValueAry: [e] },
    });
  },
  DO = async (e) => {
    await mn("/api/temperature/add_set", { method: "POST", body: { Data: e } });
  },
  qo = (e) => {
    const t = e.getFullYear(),
      r = String(e.getMonth() + 1).padStart(2, "0"),
      n = String(e.getDate()).padStart(2, "0");
    return `${t}-${r}-${n}`;
  },
  Xo = (e) => {
    const t = String(e.getHours()).padStart(2, "0"),
      r = String(e.getMinutes()).padStart(2, "0"),
      n = String(e.getSeconds()).padStart(2, "0");
    return `${t}:${r}:${n}`;
  },
  iv = (e, t) => `${e} ${t}`,
  IO = () => {
    const e = new Date();
    e.setHours(23, 59, 59, 999);
    const t = new Date();
    return (t.setHours(0, 0, 0, 0), { startDate: t, endDate: e });
  },
  LO = () => {
    const e = new Date(),
      t = new Date(e);
    t.setHours(0, 0, 0, 0);
    const r = new Date(e);
    return (r.setHours(23, 59, 59, 999), { startDate: t, endDate: r });
  },
  $O = (e) => {
    if (!e || e.includes("1/01/01")) return "-";
    try {
      return new Date(e.replace(/\//g, "-")).toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      });
    } catch {
      return e;
    }
  };
class RO {
  constructor() {
    ((this.audioContext = null),
      (this.isMuted = !1),
      (this.isPlaying = !1),
      (this.alarmInterval = null),
      (this.autoStopTimeout = null),
      this.initializeAudioContext());
  }
  initializeAudioContext() {
    try {
      this.audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
    } catch (t) {
      console.warn("Audio context not supported:", t);
    }
  }
  async resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === "suspended")
      try {
        await this.audioContext.resume();
      } catch (t) {
        console.warn("Failed to resume audio context:", t);
      }
  }
  createBeepSound(t = 800, r = 200) {
    if (!this.audioContext) return;
    const n = this.audioContext.createOscillator(),
      i = this.audioContext.createGain();
    (n.connect(i),
      i.connect(this.audioContext.destination),
      n.frequency.setValueAtTime(t, this.audioContext.currentTime),
      (n.type = "sine"),
      i.gain.setValueAtTime(0.3, this.audioContext.currentTime),
      i.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + r / 1e3,
      ),
      n.start(this.audioContext.currentTime),
      n.stop(this.audioContext.currentTime + r / 1e3));
  }
  async playAlert() {
    if (!this.isMuted && !this.isPlaying)
      try {
        (await this.resumeAudioContext(),
          (this.isPlaying = !0),
          this.startAlarmLoop(),
          (this.autoStopTimeout = setTimeout(() => {
            (console.log("Auto-stopping alarm after 1 minute"),
              this.stopAlarm(),
              (this.isMuted = !0));
          }, 6e4)));
      } catch (t) {
        (console.warn("Failed to play alert sound:", t), (this.isPlaying = !1));
      }
  }
  startAlarmLoop() {
    (this.alarmInterval && clearInterval(this.alarmInterval),
      this.playAlarmSequence(),
      (this.alarmInterval = setInterval(() => {
        if (this.isMuted) {
          this.stopAlarm();
          return;
        }
        this.playAlarmSequence();
      }, 2e3)));
  }
  playAlarmSequence() {
    this.isMuted ||
      !this.audioContext ||
      (this.createBeepSound(800, 200),
      setTimeout(() => {
        this.isMuted || this.createBeepSound(1e3, 200);
      }, 300),
      setTimeout(() => {
        this.isMuted || this.createBeepSound(800, 200);
      }, 600));
  }
  stopAlarm() {
    (this.alarmInterval &&
      (clearInterval(this.alarmInterval), (this.alarmInterval = null)),
      this.autoStopTimeout &&
        (clearTimeout(this.autoStopTimeout), (this.autoStopTimeout = null)),
      (this.isPlaying = !1));
  }
  mute() {
    ((this.isMuted = !0), this.stopAlarm());
  }
  unmute() {
    this.isMuted = !1;
  }
  resetMuteStatus() {
    this.isMuted = !1;
  }
  getMuteStatus() {
    return this.isMuted;
  }
  isMutedState() {
    return this.isMuted;
  }
  isCurrentlyPlaying() {
    return this.isPlaying;
  }
}
const Ni = new RO(),
  Y1 = ({ record: e, globalThresholds: t }) => {
    const { t: r } = Ir(),
      n = e.temp,
      i = e.humidity,
      a = n > e.temp_max || n < e.temp_min,
      o = i > e.humidity_max || i < e.humidity_min,
      l = a || o,
      s = l && e.alert;
    Pl.useEffect(() => {
      s && !Ni.getMuteStatus() && Ni.playAlert();
    }, [s]);
    const u = (p) =>
        p < e.temp_min
          ? "text-blue-600 bg-blue-50 border-blue-200"
          : p > e.temp_max
            ? "text-red-600 bg-red-50 border-red-200"
            : "text-green-600 bg-green-50 border-green-200",
      c = (p) =>
        p < e.humidity_min
          ? "text-orange-600 bg-orange-50 border-orange-200"
          : p > e.humidity_max
            ? "text-blue-600 bg-blue-50 border-blue-200"
            : "text-green-600 bg-green-50 border-green-200",
      f = u(n),
      d = c(i);
    return w.jsxs("div", {
      className: `bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200 ${s ? "border-red-300 bg-red-50" : "border-gray-200"}`,
      children: [
        w.jsx("div", {
          className: "mb-4",
          children: w.jsxs("h3", {
            className: "text-lg font-semibold text-gray-800 flex items-center",
            children: [
              w.jsx("span", {
                className: "w-3 h-3 bg-blue-500 rounded-full mr-2",
              }),
              e.name,
              !e.alert &&
                w.jsx("span", {
                  className:
                    "ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full",
                  children: "警報已停用",
                }),
            ],
          }),
        }),
        s &&
          w.jsxs("div", {
            className:
              "mb-4 p-2 bg-red-100 border border-red-200 rounded-lg flex items-center text-red-800",
            children: [
              w.jsx(Cf, { size: 16, className: "mr-2 flex-shrink-0" }),
              w.jsx("span", {
                className: "text-sm font-medium",
                children: "警告：數值超出設定範圍",
              }),
            ],
          }),
        l &&
          !e.alert &&
          w.jsxs("div", {
            className:
              "mb-4 p-2 bg-yellow-100 border border-yellow-200 rounded-lg flex items-center text-yellow-800",
            children: [
              w.jsx(Cf, { size: 16, className: "mr-2 flex-shrink-0" }),
              w.jsx("span", {
                className: "text-sm font-medium",
                children: "數值超出範圍（警報已停用）",
              }),
            ],
          }),
        w.jsxs("div", {
          className: "grid grid-cols-2 gap-4 mb-4",
          children: [
            w.jsxs("div", {
              className: `rounded-lg p-4 border ${f}`,
              children: [
                w.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    w.jsx(xO, { size: 20 }),
                    w.jsx("span", {
                      className: "text-xs font-medium uppercase tracking-wider",
                      children: r("temperature"),
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "text-2xl font-bold",
                  children: [n.toFixed(1), "°C"],
                }),
              ],
            }),
            w.jsxs("div", {
              className: `rounded-lg p-4 border ${d}`,
              children: [
                w.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    w.jsx(dO, { size: 20 }),
                    w.jsx("span", {
                      className: "text-xs font-medium uppercase tracking-wider",
                      children: r("humidity"),
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "text-2xl font-bold",
                  children: [i.toFixed(1), "%"],
                }),
              ],
            }),
          ],
        }),
        w.jsxs("div", {
          className:
            "flex items-center text-sm text-gray-500 border-t border-gray-100 pt-3",
          children: [
            w.jsx(fO, { size: 16, className: "mr-2" }),
            w.jsxs("span", {
              children: [r("last.updated"), "：", $O(e.add_time)],
            }),
          ],
        }),
      ],
    });
  };
function G1(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = G1(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function se() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = G1(e)) && (n && (n += " "), (n += t));
  return n;
}
var Ks = {},
  q1 = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r === "__proto__";
  }
  e.isUnsafeProperty = t;
})(q1);
var vp = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    switch (typeof r) {
      case "number":
      case "symbol":
        return !1;
      case "string":
        return r.includes(".") || r.includes("[") || r.includes("]");
    }
  }
  e.isDeepKey = t;
})(vp);
var gp = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    var n;
    return typeof r == "string" || typeof r == "symbol"
      ? r
      : Object.is(
            (n = r == null ? void 0 : r.valueOf) == null ? void 0 : n.call(r),
            -0,
          )
        ? "-0"
        : String(r);
  }
  e.toKey = t;
})(gp);
var Hs = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    const n = [],
      i = r.length;
    if (i === 0) return n;
    let a = 0,
      o = "",
      l = "",
      s = !1;
    for (r.charCodeAt(0) === 46 && (n.push(""), a++); a < i; ) {
      const u = r[a];
      (l
        ? u === "\\" && a + 1 < i
          ? (a++, (o += r[a]))
          : u === l
            ? (l = "")
            : (o += u)
        : s
          ? u === '"' || u === "'"
            ? (l = u)
            : u === "]"
              ? ((s = !1), n.push(o), (o = ""))
              : (o += u)
          : u === "["
            ? ((s = !0), o && (n.push(o), (o = "")))
            : u === "."
              ? o && (n.push(o), (o = ""))
              : (o += u),
        a++);
    }
    return (o && n.push(o), n);
  }
  e.toPath = t;
})(Hs);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = q1,
    r = vp,
    n = gp,
    i = Hs;
  function a(l, s, u) {
    if (l == null) return u;
    switch (typeof s) {
      case "string": {
        if (t.isUnsafeProperty(s)) return u;
        const c = l[s];
        return c === void 0 ? (r.isDeepKey(s) ? a(l, i.toPath(s), u) : u) : c;
      }
      case "number":
      case "symbol": {
        typeof s == "number" && (s = n.toKey(s));
        const c = l[s];
        return c === void 0 ? u : c;
      }
      default: {
        if (Array.isArray(s)) return o(l, s, u);
        if (
          (Object.is(s == null ? void 0 : s.valueOf(), -0)
            ? (s = "-0")
            : (s = String(s)),
          t.isUnsafeProperty(s))
        )
          return u;
        const c = l[s];
        return c === void 0 ? u : c;
      }
    }
  }
  function o(l, s, u) {
    if (s.length === 0) return u;
    let c = l;
    for (let f = 0; f < s.length; f++) {
      if (c == null || t.isUnsafeProperty(s[f])) return u;
      c = c[s[f]];
    }
    return c === void 0 ? u : c;
  }
  e.get = a;
})(Ks);
var zO = Ks.get;
const Xn = Mr(zO);
var X1 = { exports: {} },
  ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp = Symbol.for("react.transitional.element"),
  xp = Symbol.for("react.portal"),
  Vs = Symbol.for("react.fragment"),
  Ys = Symbol.for("react.strict_mode"),
  Gs = Symbol.for("react.profiler"),
  qs = Symbol.for("react.consumer"),
  Xs = Symbol.for("react.context"),
  Qs = Symbol.for("react.forward_ref"),
  Zs = Symbol.for("react.suspense"),
  Js = Symbol.for("react.suspense_list"),
  eu = Symbol.for("react.memo"),
  tu = Symbol.for("react.lazy"),
  FO = Symbol.for("react.view_transition"),
  BO = Symbol.for("react.client.reference");
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yp:
        switch (((e = e.type), e)) {
          case Vs:
          case Gs:
          case Ys:
          case Zs:
          case Js:
          case FO:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Xs:
              case Qs:
              case tu:
              case eu:
                return e;
              case qs:
                return e;
              default:
                return t;
            }
        }
      case xp:
        return t;
    }
  }
}
ne.ContextConsumer = qs;
ne.ContextProvider = Xs;
ne.Element = yp;
ne.ForwardRef = Qs;
ne.Fragment = Vs;
ne.Lazy = tu;
ne.Memo = eu;
ne.Portal = xp;
ne.Profiler = Gs;
ne.StrictMode = Ys;
ne.Suspense = Zs;
ne.SuspenseList = Js;
ne.isContextConsumer = function (e) {
  return Ht(e) === qs;
};
ne.isContextProvider = function (e) {
  return Ht(e) === Xs;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === yp;
};
ne.isForwardRef = function (e) {
  return Ht(e) === Qs;
};
ne.isFragment = function (e) {
  return Ht(e) === Vs;
};
ne.isLazy = function (e) {
  return Ht(e) === tu;
};
ne.isMemo = function (e) {
  return Ht(e) === eu;
};
ne.isPortal = function (e) {
  return Ht(e) === xp;
};
ne.isProfiler = function (e) {
  return Ht(e) === Gs;
};
ne.isStrictMode = function (e) {
  return Ht(e) === Ys;
};
ne.isSuspense = function (e) {
  return Ht(e) === Zs;
};
ne.isSuspenseList = function (e) {
  return Ht(e) === Js;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vs ||
    e === Gs ||
    e === Ys ||
    e === Zs ||
    e === Js ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === tu ||
        e.$$typeof === eu ||
        e.$$typeof === Xs ||
        e.$$typeof === qs ||
        e.$$typeof === Qs ||
        e.$$typeof === BO ||
        e.getModuleId !== void 0))
  );
};
ne.typeOf = Ht;
X1.exports = ne;
var UO = X1.exports,
  $t = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Ut = (e) => typeof e == "number" && e != +e,
  Mn = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1,
  K = (e) => (typeof e == "number" || e instanceof Number) && !Ut(e),
  dr = (e) => K(e) || typeof e == "string",
  WO = 0,
  ro = (e) => {
    var t = ++WO;
    return "".concat(e || "").concat(t);
  },
  cn = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!K(t) && typeof t != "string") return n;
    var a;
    if (Mn(t)) {
      if (r == null) return n;
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return (Ut(a) && (a = n), i && r != null && a > r && (a = r), a);
  },
  Q1 = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, r = {}, n = 0; n < t; n++)
      if (!r[e[n]]) r[e[n]] = !0;
      else return !0;
    return !1;
  },
  ha = (e, t) => (K(e) && K(t) ? (r) => e + r * (t - e) : () => t);
function Z1(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Xn(n, t)) === r);
}
var be = (e) => e === null || typeof e > "u",
  wp = (e) =>
    be(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)),
  KO = ["viewBox", "children"],
  HO = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  av = ["points", "pathLength"],
  dc = { svg: KO, polygon: av, polyline: av },
  bp = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  Sp = (e, t) => {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var r = e;
    if (
      (b.isValidElement(e) && (r = e.props),
      typeof r != "object" && typeof r != "function")
    )
      return null;
    var n = {};
    return (
      Object.keys(r).forEach((i) => {
        bp.includes(i) && (n[i] = (a) => r[i](r, a));
      }),
      n
    );
  },
  VO = (e, t, r) => (n) => (e(t, r, n), null),
  YO = (e, t, r) => {
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return null;
    var n = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        bp.includes(i) &&
          typeof a == "function" &&
          (n || (n = {}), (n[i] = VO(a, t, r)));
      }),
      n
    );
  },
  ov = (e) =>
    typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "",
  lv = null,
  pc = null,
  J1 = (e) => {
    if (e === lv && Array.isArray(pc)) return pc;
    var t = [];
    return (
      b.Children.forEach(e, (r) => {
        be(r) ||
          (UO.isFragment(r) ? (t = t.concat(J1(r.props.children))) : t.push(r));
      }),
      (pc = t),
      (lv = e),
      t
    );
  };
function ex(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t) ? (n = t.map((i) => ov(i))) : (n = [ov(t)]),
    J1(e).forEach((i) => {
      var a = Xn(i, "type.displayName") || Xn(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
var tx = (e) =>
    e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0,
  GO = (e, t, r, n) => {
    var i,
      a =
        (i = n && (dc == null ? void 0 : dc[n])) !== null && i !== void 0
          ? i
          : [];
    return (
      t.startsWith("data-") ||
      (typeof e != "function" && ((n && a.includes(t)) || HO.includes(t))) ||
      (r && bp.includes(t))
    );
  },
  ue = (e, t, r) => {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var n = e;
    if (
      (b.isValidElement(e) && (n = e.props),
      typeof n != "object" && typeof n != "function")
    )
      return null;
    var i = {};
    return (
      Object.keys(n).forEach((a) => {
        var o;
        GO((o = n) === null || o === void 0 ? void 0 : o[a], a, t, r) &&
          (i[a] = n[a]);
      }),
      i
    );
  },
  qO = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function Tf() {
  return (
    (Tf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Tf.apply(null, arguments)
  );
}
function XO(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = QO(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function QO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var rx = b.forwardRef((e, t) => {
    var {
        children: r,
        width: n,
        height: i,
        viewBox: a,
        className: o,
        style: l,
        title: s,
        desc: u,
      } = e,
      c = XO(e, qO),
      f = a || { width: n, height: i, x: 0, y: 0 },
      d = se("recharts-surface", o);
    return b.createElement(
      "svg",
      Tf({}, ue(c, !0, "svg"), {
        className: d,
        width: n,
        height: i,
        style: l,
        viewBox: ""
          .concat(f.x, " ")
          .concat(f.y, " ")
          .concat(f.width, " ")
          .concat(f.height),
        ref: t,
      }),
      b.createElement("title", null, s),
      b.createElement("desc", null, u),
      r,
    );
  }),
  ZO = ["children", "className"];
function Nf() {
  return (
    (Nf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Nf.apply(null, arguments)
  );
}
function JO(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = ek(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function ek(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var fn = b.forwardRef((e, t) => {
    var { children: r, className: n } = e,
      i = JO(e, ZO),
      a = se("recharts-layer", n);
    return b.createElement("g", Nf({ className: a }, ue(i, !0), { ref: t }), r);
  }),
  tk = b.createContext(null);
function ye(e) {
  return function () {
    return e;
  };
}
const Mf = Math.PI,
  Df = 2 * Mf,
  On = 1e-6,
  rk = Df - On;
function nx(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function nk(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return nx;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class ik {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? nx : nk(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      l = this._y1,
      s = n - t,
      u = i - r,
      c = o - t,
      f = l - r,
      d = c * c + f * f;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (d > On)
      if (!(Math.abs(f * s - u * c) > On) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let p = n - o,
          h = i - l,
          g = s * s + u * u,
          y = p * p + h * h,
          m = Math.sqrt(g),
          v = Math.sqrt(d),
          x = a * Math.tan((Mf - Math.acos((g + d - y) / (2 * m * v))) / 2),
          S = x / v,
          P = x / m;
        (Math.abs(S - 1) > On && this._append`L${t + S * c},${r + S * f}`,
          this
            ._append`A${a},${a},0,0,${+(f * p > c * h)},${(this._x1 = t + P * s)},${(this._y1 = r + P * u)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i),
      s = n * Math.sin(i),
      u = t + l,
      c = r + s,
      f = 1 ^ o,
      d = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${u},${c}`
      : (Math.abs(this._x1 - u) > On || Math.abs(this._y1 - c) > On) &&
        this._append`L${u},${c}`,
      n &&
        (d < 0 && (d = (d % Df) + Df),
        d > rk
          ? this
              ._append`A${n},${n},0,1,${f},${t - l},${r - s}A${n},${n},0,1,${f},${(this._x1 = u)},${(this._y1 = c)}`
          : d > On &&
            this
              ._append`A${n},${n},0,${+(d >= Mf)},${f},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function ix(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new ik(t)
  );
}
function Pp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ax(e) {
  this._context = e;
}
ax.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function ru(e) {
  return new ax(e);
}
function ox(e) {
  return e[0];
}
function lx(e) {
  return e[1];
}
function sx(e, t) {
  var r = ye(!0),
    n = null,
    i = ru,
    a = null,
    o = ix(l);
  ((e = typeof e == "function" ? e : e === void 0 ? ox : ye(e)),
    (t = typeof t == "function" ? t : t === void 0 ? lx : ye(t)));
  function l(s) {
    var u,
      c = (s = Pp(s)).length,
      f,
      d = !1,
      p;
    for (n == null && (a = i((p = o()))), u = 0; u <= c; ++u)
      (!(u < c && r((f = s[u]), u, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(f, u, s), +t(f, u, s)));
    if (p) return ((a = null), p + "" || null);
  }
  return (
    (l.x = function (s) {
      return arguments.length
        ? ((e = typeof s == "function" ? s : ye(+s)), l)
        : e;
    }),
    (l.y = function (s) {
      return arguments.length
        ? ((t = typeof s == "function" ? s : ye(+s)), l)
        : t;
    }),
    (l.defined = function (s) {
      return arguments.length
        ? ((r = typeof s == "function" ? s : ye(!!s)), l)
        : r;
    }),
    (l.curve = function (s) {
      return arguments.length ? ((i = s), n != null && (a = i(n)), l) : i;
    }),
    (l.context = function (s) {
      return arguments.length
        ? (s == null ? (n = a = null) : (a = i((n = s))), l)
        : n;
    }),
    l
  );
}
function Qo(e, t, r) {
  var n = null,
    i = ye(!0),
    a = null,
    o = ru,
    l = null,
    s = ix(u);
  ((e = typeof e == "function" ? e : e === void 0 ? ox : ye(+e)),
    (t = typeof t == "function" ? t : ye(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? lx : ye(+r)));
  function u(f) {
    var d,
      p,
      h,
      g = (f = Pp(f)).length,
      y,
      m = !1,
      v,
      x = new Array(g),
      S = new Array(g);
    for (a == null && (l = o((v = s()))), d = 0; d <= g; ++d) {
      if (!(d < g && i((y = f[d]), d, f)) === m)
        if ((m = !m)) ((p = d), l.areaStart(), l.lineStart());
        else {
          for (l.lineEnd(), l.lineStart(), h = d - 1; h >= p; --h)
            l.point(x[h], S[h]);
          (l.lineEnd(), l.areaEnd());
        }
      m &&
        ((x[d] = +e(y, d, f)),
        (S[d] = +t(y, d, f)),
        l.point(n ? +n(y, d, f) : x[d], r ? +r(y, d, f) : S[d]));
    }
    if (v) return ((l = null), v + "" || null);
  }
  function c() {
    return sx().defined(i).curve(o).context(a);
  }
  return (
    (u.x = function (f) {
      return arguments.length
        ? ((e = typeof f == "function" ? f : ye(+f)), (n = null), u)
        : e;
    }),
    (u.x0 = function (f) {
      return arguments.length
        ? ((e = typeof f == "function" ? f : ye(+f)), u)
        : e;
    }),
    (u.x1 = function (f) {
      return arguments.length
        ? ((n = f == null ? null : typeof f == "function" ? f : ye(+f)), u)
        : n;
    }),
    (u.y = function (f) {
      return arguments.length
        ? ((t = typeof f == "function" ? f : ye(+f)), (r = null), u)
        : t;
    }),
    (u.y0 = function (f) {
      return arguments.length
        ? ((t = typeof f == "function" ? f : ye(+f)), u)
        : t;
    }),
    (u.y1 = function (f) {
      return arguments.length
        ? ((r = f == null ? null : typeof f == "function" ? f : ye(+f)), u)
        : r;
    }),
    (u.lineX0 = u.lineY0 =
      function () {
        return c().x(e).y(t);
      }),
    (u.lineY1 = function () {
      return c().x(e).y(r);
    }),
    (u.lineX1 = function () {
      return c().x(n).y(t);
    }),
    (u.defined = function (f) {
      return arguments.length
        ? ((i = typeof f == "function" ? f : ye(!!f)), u)
        : i;
    }),
    (u.curve = function (f) {
      return arguments.length ? ((o = f), a != null && (l = o(a)), u) : o;
    }),
    (u.context = function (f) {
      return arguments.length
        ? (f == null ? (a = l = null) : (l = o((a = f))), u)
        : a;
    }),
    u
  );
}
class ux {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function ak(e) {
  return new ux(e, !0);
}
function ok(e) {
  return new ux(e, !1);
}
function Gl() {}
function ql(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function cx(e) {
  this._context = e;
}
cx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        ql(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        ql(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function lk(e) {
  return new cx(e);
}
function fx(e) {
  this._context = e;
}
fx.prototype = {
  areaStart: Gl,
  areaEnd: Gl,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        ql(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function sk(e) {
  return new fx(e);
}
function dx(e) {
  this._context = e;
}
dx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        ql(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function uk(e) {
  return new dx(e);
}
function px(e) {
  this._context = e;
}
px.prototype = {
  areaStart: Gl,
  areaEnd: Gl,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function ck(e) {
  return new px(e);
}
function sv(e) {
  return e < 0 ? -1 : 1;
}
function uv(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    l = (a * i + o * n) / (n + i);
  return (
    (sv(a) + sv(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0
  );
}
function cv(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function hc(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    l = (a - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
}
function Xl(e) {
  this._context = e;
}
Xl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        hc(this, this._t0, cv(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), hc(this, cv(this, (r = uv(this, e, t))), r));
          break;
        default:
          hc(this, this._t0, (r = uv(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function hx(e) {
  this._context = new mx(e);
}
(hx.prototype = Object.create(Xl.prototype)).point = function (e, t) {
  Xl.prototype.point.call(this, t, e);
};
function mx(e) {
  this._context = e;
}
mx.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function fk(e) {
  return new Xl(e);
}
function dk(e) {
  return new hx(e);
}
function vx(e) {
  this._context = e;
}
vx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = fv(e), i = fv(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function fv(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function pk(e) {
  return new vx(e);
}
function nu(e, t) {
  ((this._context = e), (this._t = t));
}
nu.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function hk(e) {
  return new nu(e, 0.5);
}
function mk(e) {
  return new nu(e, 0);
}
function vk(e) {
  return new nu(e, 1);
}
function Ui(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, l = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < l; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function If(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function gk(e, t) {
  return e[t];
}
function yk(e) {
  const t = [];
  return ((t.key = e), t);
}
function xk() {
  var e = ye([]),
    t = If,
    r = Ui,
    n = gk;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), yk),
      l,
      s = o.length,
      u = -1,
      c;
    for (const f of a)
      for (l = 0, ++u; l < s; ++l)
        (o[l][u] = [0, +n(f, o[l].key, u, a)]).data = f;
    for (l = 0, c = Pp(t(o)); l < s; ++l) o[c[l]].index = l;
    return (r(o, c), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ye(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : ye(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? If : typeof a == "function" ? a : ye(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Ui), i) : r;
    }),
    i
  );
}
function wk(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ui(e, t);
  }
}
function bk(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, l = 0; o < i; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Ui(e, t);
  }
}
function Sk(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var l = 0, s = 0, u = 0; l < o; ++l) {
        for (
          var c = e[t[l]],
            f = c[n][1] || 0,
            d = c[n - 1][1] || 0,
            p = (f - d) / 2,
            h = 0;
          h < l;
          ++h
        ) {
          var g = e[t[h]],
            y = g[n][1] || 0,
            m = g[n - 1][1] || 0;
          p += y - m;
        }
        ((s += f), (u += p * f));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), s && (r -= u / s));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), Ui(e, t));
  }
}
var gx = {},
  yx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    const i = new Map();
    for (let a = 0; a < r.length; a++) {
      const o = r[a],
        l = n(o);
      i.has(l) || i.set(l, o);
    }
    return Array.from(i.values());
  }
  e.uniqBy = t;
})(yx);
var Ep = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r;
  }
  e.identity = t;
})(Ep);
var xx = {},
  iu = {},
  wx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Number.isSafeInteger(r) && r >= 0;
  }
  e.isLength = t;
})(wx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = wx;
  function r(n) {
    return n != null && typeof n != "function" && t.isLength(n.length);
  }
  e.isArrayLike = r;
})(iu);
var bx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "object" && r !== null;
  }
  e.isObjectLike = t;
})(bx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = iu,
    r = bx;
  function n(i) {
    return r.isObjectLike(i) && t.isArrayLike(i);
  }
  e.isArrayLikeObject = n;
})(xx);
var Sx = {},
  Px = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ks;
  function r(n) {
    return function (i) {
      return t.get(i, n);
    };
  }
  e.property = r;
})(Px);
var Ex = {},
  mc = {},
  vc = {},
  Op = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r !== null && (typeof r == "object" || typeof r == "function");
  }
  e.isObject = t;
})(Op);
var kp = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null || (typeof r != "object" && typeof r != "function");
  }
  e.isPrimitive = t;
})(kp);
var au = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    return r === n || (Number.isNaN(r) && Number.isNaN(n));
  }
  e.eq = t;
})(au);
var dv;
function Pk() {
  return (
    dv ||
      ((dv = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = _p(),
          r = Op,
          n = kp,
          i = au;
        function a(f, d, p) {
          return typeof p != "function"
            ? t.isMatch(f, d)
            : o(
                f,
                d,
                function h(g, y, m, v, x, S) {
                  const P = p(g, y, m, v, x, S);
                  return P !== void 0 ? !!P : o(g, y, h, S);
                },
                new Map(),
              );
        }
        function o(f, d, p, h) {
          if (d === f) return !0;
          switch (typeof d) {
            case "object":
              return l(f, d, p, h);
            case "function":
              return Object.keys(d).length > 0
                ? o(f, { ...d }, p, h)
                : i.eq(f, d);
            default:
              return r.isObject(f)
                ? typeof d == "string"
                  ? d === ""
                  : !0
                : i.eq(f, d);
          }
        }
        function l(f, d, p, h) {
          if (d == null) return !0;
          if (Array.isArray(d)) return u(f, d, p, h);
          if (d instanceof Map) return s(f, d, p, h);
          if (d instanceof Set) return c(f, d, p, h);
          const g = Object.keys(d);
          if (f == null) return g.length === 0;
          if (g.length === 0) return !0;
          if (h && h.has(d)) return h.get(d) === f;
          h && h.set(d, f);
          try {
            for (let y = 0; y < g.length; y++) {
              const m = g[y];
              if (
                (!n.isPrimitive(f) && !(m in f)) ||
                (d[m] === void 0 && f[m] !== void 0) ||
                (d[m] === null && f[m] !== null) ||
                !p(f[m], d[m], m, f, d, h)
              )
                return !1;
            }
            return !0;
          } finally {
            h && h.delete(d);
          }
        }
        function s(f, d, p, h) {
          if (d.size === 0) return !0;
          if (!(f instanceof Map)) return !1;
          for (const [g, y] of d.entries()) {
            const m = f.get(g);
            if (p(m, y, g, f, d, h) === !1) return !1;
          }
          return !0;
        }
        function u(f, d, p, h) {
          if (d.length === 0) return !0;
          if (!Array.isArray(f)) return !1;
          const g = new Set();
          for (let y = 0; y < d.length; y++) {
            const m = d[y];
            let v = !1;
            for (let x = 0; x < f.length; x++) {
              if (g.has(x)) continue;
              const S = f[x];
              let P = !1;
              if ((p(S, m, y, f, d, h) && (P = !0), P)) {
                (g.add(x), (v = !0));
                break;
              }
            }
            if (!v) return !1;
          }
          return !0;
        }
        function c(f, d, p, h) {
          return d.size === 0
            ? !0
            : f instanceof Set
              ? u([...f], [...d], p, h)
              : !1;
        }
        ((e.isMatchWith = a), (e.isSetMatch = c));
      })(vc)),
    vc
  );
}
var pv;
function _p() {
  return (
    pv ||
      ((pv = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Pk();
        function r(n, i) {
          return t.isMatchWith(n, i, () => {});
        }
        e.isMatch = r;
      })(mc)),
    mc
  );
}
var Ox = {},
  Cp = {},
  Ap = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Object.getOwnPropertySymbols(r).filter((n) =>
      Object.prototype.propertyIsEnumerable.call(r, n),
    );
  }
  e.getSymbols = t;
})(Ap);
var ou = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null
      ? r === void 0
        ? "[object Undefined]"
        : "[object Null]"
      : Object.prototype.toString.call(r);
  }
  e.getTag = t;
})(ou);
var lu = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = "[object RegExp]",
    r = "[object String]",
    n = "[object Number]",
    i = "[object Boolean]",
    a = "[object Arguments]",
    o = "[object Symbol]",
    l = "[object Date]",
    s = "[object Map]",
    u = "[object Set]",
    c = "[object Array]",
    f = "[object Function]",
    d = "[object ArrayBuffer]",
    p = "[object Object]",
    h = "[object Error]",
    g = "[object DataView]",
    y = "[object Uint8Array]",
    m = "[object Uint8ClampedArray]",
    v = "[object Uint16Array]",
    x = "[object Uint32Array]",
    S = "[object BigUint64Array]",
    P = "[object Int8Array]",
    E = "[object Int16Array]",
    O = "[object Int32Array]",
    k = "[object BigInt64Array]",
    _ = "[object Float32Array]",
    j = "[object Float64Array]";
  ((e.argumentsTag = a),
    (e.arrayBufferTag = d),
    (e.arrayTag = c),
    (e.bigInt64ArrayTag = k),
    (e.bigUint64ArrayTag = S),
    (e.booleanTag = i),
    (e.dataViewTag = g),
    (e.dateTag = l),
    (e.errorTag = h),
    (e.float32ArrayTag = _),
    (e.float64ArrayTag = j),
    (e.functionTag = f),
    (e.int16ArrayTag = E),
    (e.int32ArrayTag = O),
    (e.int8ArrayTag = P),
    (e.mapTag = s),
    (e.numberTag = n),
    (e.objectTag = p),
    (e.regexpTag = t),
    (e.setTag = u),
    (e.stringTag = r),
    (e.symbolTag = o),
    (e.uint16ArrayTag = v),
    (e.uint32ArrayTag = x),
    (e.uint8ArrayTag = y),
    (e.uint8ClampedArrayTag = m));
})(lu);
var kx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  e.isTypedArray = t;
})(kx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ap,
    r = ou,
    n = lu,
    i = kp,
    a = kx;
  function o(c, f) {
    return l(c, void 0, c, new Map(), f);
  }
  function l(c, f, d, p = new Map(), h = void 0) {
    const g = h == null ? void 0 : h(c, f, d, p);
    if (g != null) return g;
    if (i.isPrimitive(c)) return c;
    if (p.has(c)) return p.get(c);
    if (Array.isArray(c)) {
      const y = new Array(c.length);
      p.set(c, y);
      for (let m = 0; m < c.length; m++) y[m] = l(c[m], m, d, p, h);
      return (
        Object.hasOwn(c, "index") && (y.index = c.index),
        Object.hasOwn(c, "input") && (y.input = c.input),
        y
      );
    }
    if (c instanceof Date) return new Date(c.getTime());
    if (c instanceof RegExp) {
      const y = new RegExp(c.source, c.flags);
      return ((y.lastIndex = c.lastIndex), y);
    }
    if (c instanceof Map) {
      const y = new Map();
      p.set(c, y);
      for (const [m, v] of c) y.set(m, l(v, m, d, p, h));
      return y;
    }
    if (c instanceof Set) {
      const y = new Set();
      p.set(c, y);
      for (const m of c) y.add(l(m, void 0, d, p, h));
      return y;
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(c)) return c.subarray();
    if (a.isTypedArray(c)) {
      const y = new (Object.getPrototypeOf(c).constructor)(c.length);
      p.set(c, y);
      for (let m = 0; m < c.length; m++) y[m] = l(c[m], m, d, p, h);
      return y;
    }
    if (
      c instanceof ArrayBuffer ||
      (typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer)
    )
      return c.slice(0);
    if (c instanceof DataView) {
      const y = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
      return (p.set(c, y), s(y, c, d, p, h), y);
    }
    if (typeof File < "u" && c instanceof File) {
      const y = new File([c], c.name, { type: c.type });
      return (p.set(c, y), s(y, c, d, p, h), y);
    }
    if (c instanceof Blob) {
      const y = new Blob([c], { type: c.type });
      return (p.set(c, y), s(y, c, d, p, h), y);
    }
    if (c instanceof Error) {
      const y = new c.constructor();
      return (
        p.set(c, y),
        (y.message = c.message),
        (y.name = c.name),
        (y.stack = c.stack),
        (y.cause = c.cause),
        s(y, c, d, p, h),
        y
      );
    }
    if (typeof c == "object" && u(c)) {
      const y = Object.create(Object.getPrototypeOf(c));
      return (p.set(c, y), s(y, c, d, p, h), y);
    }
    return c;
  }
  function s(c, f, d = c, p, h) {
    const g = [...Object.keys(f), ...t.getSymbols(f)];
    for (let y = 0; y < g.length; y++) {
      const m = g[y],
        v = Object.getOwnPropertyDescriptor(c, m);
      (v == null || v.writable) && (c[m] = l(f[m], m, d, p, h));
    }
  }
  function u(c) {
    switch (r.getTag(c)) {
      case n.argumentsTag:
      case n.arrayTag:
      case n.arrayBufferTag:
      case n.dataViewTag:
      case n.booleanTag:
      case n.dateTag:
      case n.float32ArrayTag:
      case n.float64ArrayTag:
      case n.int8ArrayTag:
      case n.int16ArrayTag:
      case n.int32ArrayTag:
      case n.mapTag:
      case n.numberTag:
      case n.objectTag:
      case n.regexpTag:
      case n.setTag:
      case n.stringTag:
      case n.symbolTag:
      case n.uint8ArrayTag:
      case n.uint8ClampedArrayTag:
      case n.uint16ArrayTag:
      case n.uint32ArrayTag:
        return !0;
      default:
        return !1;
    }
  }
  ((e.cloneDeepWith = o), (e.cloneDeepWithImpl = l), (e.copyProperties = s));
})(Cp);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Cp;
  function r(n) {
    return t.cloneDeepWithImpl(n, void 0, n, new Map(), void 0);
  }
  e.cloneDeep = r;
})(Ox);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = _p(),
    r = Ox;
  function n(i) {
    return ((i = r.cloneDeep(i)), (a) => t.isMatch(a, i));
  }
  e.matches = n;
})(Ex);
var _x = {},
  Cx = {},
  Ax = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Cp,
    r = lu;
  function n(i, a) {
    return t.cloneDeepWith(i, (o, l, s, u) => {
      const c = a == null ? void 0 : a(o, l, s, u);
      if (c != null) return c;
      if (typeof i == "object")
        switch (Object.prototype.toString.call(i)) {
          case r.numberTag:
          case r.stringTag:
          case r.booleanTag: {
            const f = new i.constructor(i == null ? void 0 : i.valueOf());
            return (t.copyProperties(f, i), f);
          }
          case r.argumentsTag: {
            const f = {};
            return (
              t.copyProperties(f, i),
              (f.length = i.length),
              (f[Symbol.iterator] = i[Symbol.iterator]),
              f
            );
          }
          default:
            return;
        }
    });
  }
  e.cloneDeepWith = n;
})(Ax);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ax;
  function r(n) {
    return t.cloneDeepWith(n);
  }
  e.cloneDeep = r;
})(Cx);
var jx = {},
  jp = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = /^(?:0|[1-9]\d*)$/;
  function r(n, i = Number.MAX_SAFE_INTEGER) {
    switch (typeof n) {
      case "number":
        return Number.isInteger(n) && n >= 0 && n < i;
      case "symbol":
        return !1;
      case "string":
        return t.test(n);
    }
  }
  e.isIndex = r;
})(jp);
var Tx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = ou;
  function r(n) {
    return (
      n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]"
    );
  }
  e.isArguments = r;
})(Tx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = vp,
    r = jp,
    n = Tx,
    i = Hs;
  function a(o, l) {
    let s;
    if (
      (Array.isArray(l)
        ? (s = l)
        : typeof l == "string" &&
            t.isDeepKey(l) &&
            (o == null ? void 0 : o[l]) == null
          ? (s = i.toPath(l))
          : (s = [l]),
      s.length === 0)
    )
      return !1;
    let u = o;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      if (
        (u == null || !Object.hasOwn(u, f)) &&
        !(
          (Array.isArray(u) || n.isArguments(u)) &&
          r.isIndex(f) &&
          f < u.length
        )
      )
        return !1;
      u = u[f];
    }
    return !0;
  }
  e.has = a;
})(jx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = _p(),
    r = gp,
    n = Cx,
    i = Ks,
    a = jx;
  function o(l, s) {
    switch (typeof l) {
      case "object": {
        Object.is(l == null ? void 0 : l.valueOf(), -0) && (l = "-0");
        break;
      }
      case "number": {
        l = r.toKey(l);
        break;
      }
    }
    return (
      (s = n.cloneDeep(s)),
      function (u) {
        const c = i.get(u, l);
        return c === void 0
          ? a.has(u, l)
          : s === void 0
            ? c === void 0
            : t.isMatch(c, s);
      }
    );
  }
  e.matchesProperty = o;
})(_x);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ep,
    r = Px,
    n = Ex,
    i = _x;
  function a(o) {
    if (o == null) return t.identity;
    switch (typeof o) {
      case "function":
        return o;
      case "object":
        return Array.isArray(o) && o.length === 2
          ? i.matchesProperty(o[0], o[1])
          : n.matches(o);
      case "string":
      case "symbol":
      case "number":
        return r.property(o);
    }
  }
  e.iteratee = a;
})(Sx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = yx,
    r = Ep,
    n = xx,
    i = Sx;
  function a(o, l = r.identity) {
    return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(l)) : [];
  }
  e.uniqBy = a;
})(gx);
var Ek = gx.uniqBy;
const hv = Mr(Ek);
function Ok(e, t, r) {
  return t === !0 ? hv(e, r) : typeof t == "function" ? hv(e, t) : e;
}
var Nx = { exports: {} },
  Mx = {},
  Dx = { exports: {} },
  Ix = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wi = b;
function kk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _k = typeof Object.is == "function" ? Object.is : kk,
  Ck = Wi.useState,
  Ak = Wi.useEffect,
  jk = Wi.useLayoutEffect,
  Tk = Wi.useDebugValue;
function Nk(e, t) {
  var r = t(),
    n = Ck({ inst: { value: r, getSnapshot: t } }),
    i = n[0].inst,
    a = n[1];
  return (
    jk(
      function () {
        ((i.value = r), (i.getSnapshot = t), gc(i) && a({ inst: i }));
      },
      [e, r, t],
    ),
    Ak(
      function () {
        return (
          gc(i) && a({ inst: i }),
          e(function () {
            gc(i) && a({ inst: i });
          })
        );
      },
      [e],
    ),
    Tk(r),
    r
  );
}
function gc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !_k(e, r);
  } catch {
    return !0;
  }
}
function Mk(e, t) {
  return t();
}
var Dk =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Mk
    : Nk;
Ix.useSyncExternalStore =
  Wi.useSyncExternalStore !== void 0 ? Wi.useSyncExternalStore : Dk;
Dx.exports = Ix;
var Ik = Dx.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var su = b,
  Lk = Ik;
function $k(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rk = typeof Object.is == "function" ? Object.is : $k,
  zk = Lk.useSyncExternalStore,
  Fk = su.useRef,
  Bk = su.useEffect,
  Uk = su.useMemo,
  Wk = su.useDebugValue;
Mx.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
  var a = Fk(null);
  if (a.current === null) {
    var o = { hasValue: !1, value: null };
    a.current = o;
  } else o = a.current;
  a = Uk(
    function () {
      function s(p) {
        if (!u) {
          if (((u = !0), (c = p), (p = n(p)), i !== void 0 && o.hasValue)) {
            var h = o.value;
            if (i(h, p)) return (f = h);
          }
          return (f = p);
        }
        if (((h = f), Rk(c, p))) return h;
        var g = n(p);
        return i !== void 0 && i(h, g) ? ((c = p), h) : ((c = p), (f = g));
      }
      var u = !1,
        c,
        f,
        d = r === void 0 ? null : r;
      return [
        function () {
          return s(t());
        },
        d === null
          ? void 0
          : function () {
              return s(d());
            },
      ];
    },
    [t, r, n, i],
  );
  var l = zk(e, a[0], a[1]);
  return (
    Bk(
      function () {
        ((o.hasValue = !0), (o.value = l));
      },
      [l],
    ),
    Wk(l),
    l
  );
};
Nx.exports = Mx;
var Kk = Nx.exports,
  Tp = b.createContext(null),
  Hk = (e) => e,
  nt = () => {
    var e = b.useContext(Tp);
    return e ? e.store.dispatch : Hk;
  },
  Sl = () => {},
  Vk = () => Sl,
  Yk = (e, t) => e === t;
function H(e) {
  var t = b.useContext(Tp);
  return Kk.useSyncExternalStoreWithSelector(
    t ? t.subscription.addNestedSub : Vk,
    t ? t.store.getState : Sl,
    t ? t.store.getState : Sl,
    t ? e : Sl,
    Yk,
  );
}
function Gk(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function qk(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Xk(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((n) =>
        typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n,
      )
      .join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var mv = (e) => (Array.isArray(e) ? e : [e]);
function Qk(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Xk(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function Zk(e, t) {
  const r = [],
    { length: n } = e;
  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
  return r;
}
var Jk = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  e_ = typeof WeakRef < "u" ? WeakRef : Jk,
  t_ = 0,
  vv = 1;
function Zo() {
  return { s: t_, v: void 0, o: null, p: null };
}
function Lx(e, t = {}) {
  let r = Zo();
  const { resultEqualityCheck: n } = t;
  let i,
    a = 0;
  function o() {
    var f;
    let l = r;
    const { length: s } = arguments;
    for (let d = 0, p = s; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || (typeof h == "object" && h !== null)) {
        let g = l.o;
        g === null && (l.o = g = new WeakMap());
        const y = g.get(h);
        y === void 0 ? ((l = Zo()), g.set(h, l)) : (l = y);
      } else {
        let g = l.p;
        g === null && (l.p = g = new Map());
        const y = g.get(h);
        y === void 0 ? ((l = Zo()), g.set(h, l)) : (l = y);
      }
    }
    const u = l;
    let c;
    if (l.s === vv) c = l.v;
    else if (((c = e.apply(null, arguments)), a++, n)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i;
      (d != null && n(d, c) && ((c = d), a !== 0 && a--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new e_(c)
            : c));
    }
    return ((u.s = vv), (u.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((r = Zo()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function r_(e, ...t) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    n = (...i) => {
      let a = 0,
        o = 0,
        l,
        s = {},
        u = i.pop();
      (typeof u == "object" && ((s = u), (u = i.pop())),
        Gk(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`,
        ));
      const c = { ...r, ...s },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: p = Lx,
          argsMemoizeOptions: h = [],
          devModeChecks: g = {},
        } = c,
        y = mv(d),
        m = mv(h),
        v = Qk(i),
        x = f(
          function () {
            return (a++, u.apply(null, arguments));
          },
          ...y,
        ),
        S = p(
          function () {
            o++;
            const E = Zk(v, arguments);
            return ((l = x.apply(null, E)), l);
          },
          ...m,
        );
      return Object.assign(S, {
        resultFunc: u,
        memoizedResultFunc: x,
        dependencies: v,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => l,
        recomputations: () => a,
        resetRecomputations: () => {
          a = 0;
        },
        memoize: f,
        argsMemoize: p,
      });
    };
  return (Object.assign(n, { withTypes: () => n }), n);
}
var A = r_(Lx),
  n_ = Object.assign(
    (e, t = A) => {
      qk(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const r = Object.keys(e),
        n = r.map((a) => e[a]);
      return t(n, (...a) => a.reduce((o, l, s) => ((o[r[s]] = l), o), {}));
    },
    { withTypes: () => n_ },
  ),
  $x = {},
  Rx = {},
  zx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(n) {
    return typeof n == "symbol"
      ? 1
      : n === null
        ? 2
        : n === void 0
          ? 3
          : n !== n
            ? 4
            : 0;
  }
  const r = (n, i, a) => {
    if (n !== i) {
      const o = t(n),
        l = t(i);
      if (o === l && o === 0) {
        if (n < i) return a === "desc" ? 1 : -1;
        if (n > i) return a === "desc" ? -1 : 1;
      }
      return a === "desc" ? l - o : o - l;
    }
    return 0;
  };
  e.compareValues = r;
})(zx);
var Fx = {},
  Np = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "symbol" || r instanceof Symbol;
  }
  e.isSymbol = t;
})(Np);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Np,
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(a, o) {
    return Array.isArray(a)
      ? !1
      : typeof a == "number" ||
          typeof a == "boolean" ||
          a == null ||
          t.isSymbol(a)
        ? !0
        : (typeof a == "string" && (n.test(a) || !r.test(a))) ||
          (o != null && Object.hasOwn(o, a));
  }
  e.isKey = i;
})(Fx);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = zx,
    r = Fx,
    n = Hs;
  function i(a, o, l, s) {
    if (a == null) return [];
    ((l = s ? void 0 : l),
      Array.isArray(a) || (a = Object.values(a)),
      Array.isArray(o) || (o = o == null ? [null] : [o]),
      o.length === 0 && (o = [null]),
      Array.isArray(l) || (l = l == null ? [] : [l]),
      (l = l.map((p) => String(p))));
    const u = (p, h) => {
        let g = p;
        for (let y = 0; y < h.length && g != null; ++y) g = g[h[y]];
        return g;
      },
      c = (p, h) =>
        h == null || p == null
          ? h
          : typeof p == "object" && "key" in p
            ? Object.hasOwn(h, p.key)
              ? h[p.key]
              : u(h, p.path)
            : typeof p == "function"
              ? p(h)
              : Array.isArray(p)
                ? u(h, p)
                : typeof h == "object"
                  ? h[p]
                  : h,
      f = o.map(
        (p) => (
          Array.isArray(p) && p.length === 1 && (p = p[0]),
          p == null || typeof p == "function" || Array.isArray(p) || r.isKey(p)
            ? p
            : { key: p, path: n.toPath(p) }
        ),
      );
    return a
      .map((p) => ({ original: p, criteria: f.map((h) => c(h, p)) }))
      .slice()
      .sort((p, h) => {
        for (let g = 0; g < f.length; g++) {
          const y = t.compareValues(p.criteria[g], h.criteria[g], l[g]);
          if (y !== 0) return y;
        }
        return 0;
      })
      .map((p) => p.original);
  }
  e.orderBy = i;
})(Rx);
var Bx = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n = 1) {
    const i = [],
      a = Math.floor(n),
      o = (l, s) => {
        for (let u = 0; u < l.length; u++) {
          const c = l[u];
          Array.isArray(c) && s < a ? o(c, s + 1) : i.push(c);
        }
      };
    return (o(r, 0), i);
  }
  e.flatten = t;
})(Bx);
var Mp = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = jp,
    r = iu,
    n = Op,
    i = au;
  function a(o, l, s) {
    return n.isObject(s) &&
      ((typeof l == "number" &&
        r.isArrayLike(s) &&
        t.isIndex(l) &&
        l < s.length) ||
        (typeof l == "string" && l in s))
      ? i.eq(s[l], o)
      : !1;
  }
  e.isIterateeCall = a;
})(Mp);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Rx,
    r = Bx,
    n = Mp;
  function i(a, ...o) {
    const l = o.length;
    return (
      l > 1 && n.isIterateeCall(a, o[0], o[1])
        ? (o = [])
        : l > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]),
      t.orderBy(a, r.flatten(o), ["asc"])
    );
  }
  e.sortBy = i;
})($x);
var i_ = $x.sortBy;
const uu = Mr(i_);
var Ux = (e) => e.legend.settings,
  a_ = (e) => e.legend.size,
  o_ = (e) => e.legend.payload;
A([o_, Ux], (e, t) => {
  var { itemSorter: r } = t,
    n = e.flat(1);
  return r ? uu(n, r) : n;
});
var Jo = 1;
function l_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, r] = b.useState({ height: 0, left: 0, top: 0, width: 0 }),
    n = b.useCallback(
      (i) => {
        if (i != null) {
          var a = i.getBoundingClientRect(),
            o = { height: a.height, left: a.left, top: a.top, width: a.width };
          (Math.abs(o.height - t.height) > Jo ||
            Math.abs(o.left - t.left) > Jo ||
            Math.abs(o.top - t.top) > Jo ||
            Math.abs(o.width - t.width) > Jo) &&
            r({ height: o.height, left: o.left, top: o.top, width: o.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    );
  return [t, n];
}
function $e(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var s_ = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  gv = s_,
  yc = () => Math.random().toString(36).substring(7).split("").join("."),
  u_ = {
    INIT: `@@redux/INIT${yc()}`,
    REPLACE: `@@redux/REPLACE${yc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yc()}`,
  },
  Ql = u_;
function Dp(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Wx(e, t, r) {
  if (typeof e != "function") throw new Error($e(2));
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error($e(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error($e(1));
    return r(Wx)(e, t);
  }
  let n = e,
    i = t,
    a = new Map(),
    o = a,
    l = 0,
    s = !1;
  function u() {
    o === a &&
      ((o = new Map()),
      a.forEach((y, m) => {
        o.set(m, y);
      }));
  }
  function c() {
    if (s) throw new Error($e(3));
    return i;
  }
  function f(y) {
    if (typeof y != "function") throw new Error($e(4));
    if (s) throw new Error($e(5));
    let m = !0;
    u();
    const v = l++;
    return (
      o.set(v, y),
      function () {
        if (m) {
          if (s) throw new Error($e(6));
          ((m = !1), u(), o.delete(v), (a = null));
        }
      }
    );
  }
  function d(y) {
    if (!Dp(y)) throw new Error($e(7));
    if (typeof y.type > "u") throw new Error($e(8));
    if (typeof y.type != "string") throw new Error($e(17));
    if (s) throw new Error($e(9));
    try {
      ((s = !0), (i = n(i, y)));
    } finally {
      s = !1;
    }
    return (
      (a = o).forEach((v) => {
        v();
      }),
      y
    );
  }
  function p(y) {
    if (typeof y != "function") throw new Error($e(10));
    ((n = y), d({ type: Ql.REPLACE }));
  }
  function h() {
    const y = f;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error($e(11));
        function v() {
          const S = m;
          S.next && S.next(c());
        }
        return (v(), { unsubscribe: y(v) });
      },
      [gv]() {
        return this;
      },
    };
  }
  return (
    d({ type: Ql.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: p, [gv]: h }
  );
}
function c_(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: Ql.INIT }) > "u") throw new Error($e(12));
    if (typeof r(void 0, { type: Ql.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error($e(13));
  });
}
function Kx(e) {
  const t = Object.keys(e),
    r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    c_(r);
  } catch (a) {
    i = a;
  }
  return function (o = {}, l) {
    if (i) throw i;
    let s = !1;
    const u = {};
    for (let c = 0; c < n.length; c++) {
      const f = n[c],
        d = r[f],
        p = o[f],
        h = d(p, l);
      if (typeof h > "u") throw (l && l.type, new Error($e(14)));
      ((u[f] = h), (s = s || h !== p));
    }
    return ((s = s || n.length !== Object.keys(o).length), s ? u : o);
  };
}
function Zl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n)),
        );
}
function f_(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error($e(15));
    };
    const o = { getState: i.getState, dispatch: (s, ...u) => a(s, ...u) },
      l = e.map((s) => s(o));
    return ((a = Zl(...l)(i.dispatch)), { ...i, dispatch: a });
  };
}
function Hx(e) {
  return Dp(e) && "type" in e && typeof e.type == "string";
}
var Vx = Symbol.for("immer-nothing"),
  yv = Symbol.for("immer-draftable"),
  Ct = Symbol.for("immer-state");
function Jt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Ki = Object.getPrototypeOf;
function Qn(e) {
  return !!e && !!e[Ct];
}
function Ar(e) {
  var t;
  return e
    ? Yx(e) ||
        Array.isArray(e) ||
        !!e[yv] ||
        !!((t = e.constructor) != null && t[yv]) ||
        fu(e) ||
        du(e)
    : !1;
}
var d_ = Object.prototype.constructor.toString();
function Yx(e) {
  if (!e || typeof e != "object") return !1;
  const t = Ki(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === d_;
}
function Jl(e, t) {
  cu(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function cu(e) {
  const t = e[Ct];
  return t ? t.type_ : Array.isArray(e) ? 1 : fu(e) ? 2 : du(e) ? 3 : 0;
}
function Lf(e, t) {
  return cu(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Gx(e, t, r) {
  const n = cu(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function p_(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fu(e) {
  return e instanceof Map;
}
function du(e) {
  return e instanceof Set;
}
function kn(e) {
  return e.copy_ || e.base_;
}
function $f(e, t) {
  if (fu(e)) return new Map(e);
  if (du(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Yx(e);
  if (t === !0 || (t === "class_only" && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Ct];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a],
        l = n[o];
      (l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (n[o] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[o],
          }));
    }
    return Object.create(Ki(e), n);
  } else {
    const n = Ki(e);
    if (n !== null && r) return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Ip(e, t = !1) {
  return (
    pu(e) ||
      Qn(e) ||
      !Ar(e) ||
      (cu(e) > 1 && (e.set = e.add = e.clear = e.delete = h_),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => Ip(n, !0))),
    e
  );
}
function h_() {
  Jt(2);
}
function pu(e) {
  return Object.isFrozen(e);
}
var m_ = {};
function Zn(e) {
  const t = m_[e];
  return (t || Jt(0, e), t);
}
var no;
function qx() {
  return no;
}
function v_(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function xv(e, t) {
  t &&
    (Zn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Rf(e) {
  (zf(e), e.drafts_.forEach(g_), (e.drafts_ = null));
}
function zf(e) {
  e === no && (no = e.parent_);
}
function wv(e) {
  return (no = v_(no, e));
}
function g_(e) {
  const t = e[Ct];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function bv(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[Ct].modified_ && (Rf(t), Jt(4)),
        Ar(e) && ((e = es(t, e)), t.parent_ || ts(t, e)),
        t.patches_ &&
          Zn("Patches").generateReplacementPatches_(
            r[Ct].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = es(t, r, [])),
    Rf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Vx ? e : void 0
  );
}
function es(e, t, r) {
  if (pu(t)) return t;
  const n = t[Ct];
  if (!n) return (Jl(t, (i, a) => Sv(e, n, t, i, a, r)), t);
  if (n.scope_ !== e) return t;
  if (!n.modified_) return (ts(e, n.base_, !0), n.base_);
  if (!n.finalized_) {
    ((n.finalized_ = !0), n.scope_.unfinalizedDrafts_--);
    const i = n.copy_;
    let a = i,
      o = !1;
    (n.type_ === 3 && ((a = new Set(i)), i.clear(), (o = !0)),
      Jl(a, (l, s) => Sv(e, n, i, l, s, r, o)),
      ts(e, i, !1),
      r &&
        e.patches_ &&
        Zn("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_));
  }
  return n.copy_;
}
function Sv(e, t, r, n, i, a, o) {
  if (Qn(i)) {
    const l =
        a && t && t.type_ !== 3 && !Lf(t.assigned_, n) ? a.concat(n) : void 0,
      s = es(e, i, l);
    if ((Gx(r, n, s), Qn(s))) e.canAutoFreeze_ = !1;
    else return;
  } else o && r.add(i);
  if (Ar(i) && !pu(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    (es(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        ts(e, i));
  }
}
function ts(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ip(t, r);
}
function y_(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : qx(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    a = Lp;
  r && ((i = [n]), (a = io));
  const { revoke: o, proxy: l } = Proxy.revocable(i, a);
  return ((n.draft_ = l), (n.revoke_ = o), l);
}
var Lp = {
    get(e, t) {
      if (t === Ct) return e;
      const r = kn(e);
      if (!Lf(r, t)) return x_(e, r, t);
      const n = r[t];
      return e.finalized_ || !Ar(n)
        ? n
        : n === xc(e.base_, t)
          ? (wc(e), (e.copy_[t] = Bf(n, e)))
          : n;
    },
    has(e, t) {
      return t in kn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(kn(e));
    },
    set(e, t, r) {
      const n = Xx(kn(e), t);
      if (n != null && n.set) return (n.set.call(e.draft_, r), !0);
      if (!e.modified_) {
        const i = xc(kn(e), t),
          a = i == null ? void 0 : i[Ct];
        if (a && a.base_ === r)
          return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
        if (p_(r, i) && (r !== void 0 || Lf(e.base_, t))) return !0;
        (wc(e), Ff(e));
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        xc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), wc(e), Ff(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = kn(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      Jt(11);
    },
    getPrototypeOf(e) {
      return Ki(e.base_);
    },
    setPrototypeOf() {
      Jt(12);
    },
  },
  io = {};
Jl(Lp, (e, t) => {
  io[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
});
io.deleteProperty = function (e, t) {
  return io.set.call(this, e, t, void 0);
};
io.set = function (e, t, r) {
  return Lp.set.call(this, e[0], t, r, e[0]);
};
function xc(e, t) {
  const r = e[Ct];
  return (r ? kn(r) : e)[t];
}
function x_(e, t, r) {
  var i;
  const n = Xx(t, r);
  return n
    ? "value" in n
      ? n.value
      : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function Xx(e, t) {
  if (!(t in e)) return;
  let r = Ki(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Ki(r);
  }
}
function Ff(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Ff(e.parent_));
}
function wc(e) {
  e.copy_ || (e.copy_ = $f(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var w_ = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == "function" && typeof r != "function") {
          const a = r;
          r = t;
          const o = this;
          return function (s = a, ...u) {
            return o.produce(s, (c) => r.call(this, c, ...u));
          };
        }
        (typeof r != "function" && Jt(6),
          n !== void 0 && typeof n != "function" && Jt(7));
        let i;
        if (Ar(t)) {
          const a = wv(this),
            o = Bf(t, void 0);
          let l = !0;
          try {
            ((i = r(o)), (l = !1));
          } finally {
            l ? Rf(a) : zf(a);
          }
          return (xv(a, n), bv(i, a));
        } else if (!t || typeof t != "object") {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === Vx && (i = void 0),
            this.autoFreeze_ && Ip(i, !0),
            n)
          ) {
            const a = [],
              o = [];
            (Zn("Patches").generateReplacementPatches_(t, i, a, o), n(a, o));
          }
          return i;
        } else Jt(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (o, ...l) => this.produceWithPatches(o, (s) => t(s, ...l));
        let n, i;
        return [
          this.produce(t, r, (o, l) => {
            ((n = o), (i = l));
          }),
          n,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy));
  }
  createDraft(e) {
    (Ar(e) || Jt(8), Qn(e) && (e = Pr(e)));
    const t = wv(this),
      r = Bf(e, void 0);
    return ((r[Ct].isManual_ = !0), zf(t), r);
  }
  finishDraft(e, t) {
    const r = e && e[Ct];
    (!r || !r.isManual_) && Jt(9);
    const { scope_: n } = r;
    return (xv(n, t), bv(void 0, n));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Zn("Patches").applyPatches_;
    return Qn(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function Bf(e, t) {
  const r = fu(e)
    ? Zn("MapSet").proxyMap_(e, t)
    : du(e)
      ? Zn("MapSet").proxySet_(e, t)
      : y_(e, t);
  return ((t ? t.scope_ : qx()).drafts_.push(r), r);
}
function Pr(e) {
  return (Qn(e) || Jt(10, e), Qx(e));
}
function Qx(e) {
  if (!Ar(e) || pu(e)) return e;
  const t = e[Ct];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0), (r = $f(e, t.scope_.immer_.useStrictShallowCopy_)));
  } else r = $f(e, !0);
  return (
    Jl(r, (n, i) => {
      Gx(r, n, Qx(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var At = new w_(),
  Zx = At.produce;
At.produceWithPatches.bind(At);
At.setAutoFreeze.bind(At);
At.setUseStrictShallowCopy.bind(At);
At.applyPatches.bind(At);
At.createDraft.bind(At);
At.finishDraft.bind(At);
function Jx(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (a) =>
      typeof a == "function" ? a(r, n, e) : i(a);
}
var b_ = Jx(),
  S_ = Jx,
  P_ =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Zl
              : Zl.apply(null, arguments);
        };
function Wt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Ot(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => Hx(n) && n.type === e),
    r
  );
}
var ew = class ka extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, ka.prototype));
  }
  static get [Symbol.species]() {
    return ka;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ka(...t[0].concat(this))
      : new ka(...t.concat(this));
  }
};
function Pv(e) {
  return Ar(e) ? Zx(e, () => {}) : e;
}
function el(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function E_(e) {
  return typeof e == "boolean";
}
var O_ = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: a = !0,
      } = t ?? {};
      let o = new ew();
      return (r && (E_(r) ? o.push(b_) : o.push(S_(r.extraArgument))), o);
    },
  k_ = "RTK_autoBatch",
  Ev = (e) => (t) => {
    setTimeout(t, e);
  },
  __ =
    (e = { type: "raf" }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        a = !1,
        o = !1;
      const l = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Ev(10)
              : e.type === "callback"
                ? e.queueNotification
                : Ev(e.timeout),
        u = () => {
          ((o = !1), a && ((a = !1), l.forEach((c) => c())));
        };
      return Object.assign({}, n, {
        subscribe(c) {
          const f = () => i && c(),
            d = n.subscribe(f);
          return (
            l.add(c),
            () => {
              (d(), l.delete(c));
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[k_])),
              (a = !i),
              a && (o || ((o = !0), s(u))),
              n.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  C_ = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new ew(e);
      return (n && i.push(__(typeof n == "object" ? n : void 0)), i);
    };
function A_(e) {
  const t = O_(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: l = void 0,
    } = e || {};
  let s;
  if (typeof r == "function") s = r;
  else if (Dp(r)) s = Kx(r);
  else throw new Error(Ot(1));
  let u;
  typeof n == "function" ? (u = n(t)) : (u = t());
  let c = Zl;
  i && (c = P_({ trace: !1, ...(typeof i == "object" && i) }));
  const f = f_(...u),
    d = C_(f);
  let p = typeof l == "function" ? l(d) : d();
  const h = c(...p);
  return Wx(s, o, h);
}
function tw(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(a, o) {
      const l = typeof a == "string" ? a : a.type;
      if (!l) throw new Error(Ot(28));
      if (l in t) throw new Error(Ot(29));
      return ((t[l] = o), i);
    },
    addMatcher(a, o) {
      return (r.push({ matcher: a, reducer: o }), i);
    },
    addDefaultCase(a) {
      return ((n = a), i);
    },
  };
  return (e(i), [t, r, n]);
}
function j_(e) {
  return typeof e == "function";
}
function T_(e, t) {
  let [r, n, i] = tw(t),
    a;
  if (j_(e)) a = () => Pv(e());
  else {
    const l = Pv(e);
    a = () => l;
  }
  function o(l = a(), s) {
    let u = [
      r[s.type],
      ...n.filter(({ matcher: c }) => c(s)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, f) => {
        if (f)
          if (Qn(c)) {
            const p = f(c, s);
            return p === void 0 ? c : p;
          } else {
            if (Ar(c)) return Zx(c, (d) => f(d, s));
            {
              const d = f(c, s);
              if (d === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return d;
            }
          }
        return c;
      }, l)
    );
  }
  return ((o.getInitialState = a), o);
}
var N_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  M_ = (e = 21) => {
    let t = "",
      r = e;
    for (; r--; ) t += N_[(Math.random() * 64) | 0];
    return t;
  },
  D_ = Symbol.for("rtk-slice-createasyncthunk");
function I_(e, t) {
  return `${e}/${t}`;
}
function L_({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[D_];
  return function (i) {
    const { name: a, reducerPath: o = a } = i;
    if (!a) throw new Error(Ot(11));
    typeof process < "u";
    const l =
        (typeof i.reducers == "function" ? i.reducers(R_()) : i.reducers) || {},
      s = Object.keys(l),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(S, P) {
          const E = typeof S == "string" ? S : S.type;
          if (!E) throw new Error(Ot(12));
          if (E in u.sliceCaseReducersByType) throw new Error(Ot(13));
          return ((u.sliceCaseReducersByType[E] = P), c);
        },
        addMatcher(S, P) {
          return (u.sliceMatchers.push({ matcher: S, reducer: P }), c);
        },
        exposeAction(S, P) {
          return ((u.actionCreators[S] = P), c);
        },
        exposeCaseReducer(S, P) {
          return ((u.sliceCaseReducersByName[S] = P), c);
        },
      };
    s.forEach((S) => {
      const P = l[S],
        E = {
          reducerName: S,
          type: I_(a, S),
          createNotation: typeof i.reducers == "function",
        };
      F_(P) ? U_(E, P, c, t) : z_(E, P, c);
    });
    function f() {
      const [S = {}, P = [], E = void 0] =
          typeof i.extraReducers == "function"
            ? tw(i.extraReducers)
            : [i.extraReducers],
        O = { ...S, ...u.sliceCaseReducersByType };
      return T_(i.initialState, (k) => {
        for (let _ in O) k.addCase(_, O[_]);
        for (let _ of u.sliceMatchers) k.addMatcher(_.matcher, _.reducer);
        for (let _ of P) k.addMatcher(_.matcher, _.reducer);
        E && k.addDefaultCase(E);
      });
    }
    const d = (S) => S,
      p = new Map(),
      h = new WeakMap();
    let g;
    function y(S, P) {
      return (g || (g = f()), g(S, P));
    }
    function m() {
      return (g || (g = f()), g.getInitialState());
    }
    function v(S, P = !1) {
      function E(k) {
        let _ = k[S];
        return (typeof _ > "u" && P && (_ = el(h, E, m)), _);
      }
      function O(k = d) {
        const _ = el(p, P, () => new WeakMap());
        return el(_, k, () => {
          const j = {};
          for (const [T, L] of Object.entries(i.selectors ?? {}))
            j[T] = $_(L, k, () => el(h, k, m), P);
          return j;
        });
      }
      return {
        reducerPath: S,
        getSelectors: O,
        get selectors() {
          return O(E);
        },
        selectSlice: E,
      };
    }
    const x = {
      name: a,
      reducer: y,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: m,
      ...v(o),
      injectInto(S, { reducerPath: P, ...E } = {}) {
        const O = P ?? o;
        return (
          S.inject({ reducerPath: O, reducer: y }, E),
          { ...x, ...v(O, !0) }
        );
      },
    };
    return x;
  };
}
function $_(e, t, r, n) {
  function i(a, ...o) {
    let l = t(a);
    return (typeof l > "u" && n && (l = r()), e(l, ...o));
  }
  return ((i.unwrapped = e), i);
}
var Vt = L_();
function R_() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function z_({ type: e, reducerName: t, createNotation: r }, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !B_(n)) throw new Error(Ot(17));
    ((a = n.reducer), (o = n.prepare));
  } else a = n;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Wt(e, o) : Wt(e));
}
function F_(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function B_(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function U_({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Ot(18));
  const {
      payloadCreator: a,
      fulfilled: o,
      pending: l,
      rejected: s,
      settled: u,
      options: c,
    } = r,
    f = i(e, a, c);
  (n.exposeAction(t, f),
    o && n.addCase(f.fulfilled, o),
    l && n.addCase(f.pending, l),
    s && n.addCase(f.rejected, s),
    u && n.addMatcher(f.settled, u),
    n.exposeCaseReducer(t, {
      fulfilled: o || tl,
      pending: l || tl,
      rejected: s || tl,
      settled: u || tl,
    }));
}
function tl() {}
var W_ = "task",
  rw = "listener",
  nw = "completed",
  $p = "cancelled",
  K_ = `task-${$p}`,
  H_ = `task-${nw}`,
  Uf = `${rw}-${$p}`,
  V_ = `${rw}-${nw}`,
  hu = class {
    constructor(e) {
      Ru(this, "name", "TaskAbortError");
      Ru(this, "message");
      ((this.code = e), (this.message = `${W_} ${$p} (reason: ${e})`));
    }
  },
  Rp = (e, t) => {
    if (typeof e != "function") throw new TypeError(Ot(32));
  },
  rs = () => {},
  iw = (e, t = rs) => (e.catch(t), e),
  aw = (e, t) => (
    e.addEventListener("abort", t, { once: !0 }),
    () => e.removeEventListener("abort", t)
  ),
  Fn = (e, t) => {
    const r = e.signal;
    r.aborted ||
      ("reason" in r ||
        Object.defineProperty(r, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  Bn = (e) => {
    if (e.aborted) {
      const { reason: t } = e;
      throw new hu(t);
    }
  };
function ow(e, t) {
  let r = rs;
  return new Promise((n, i) => {
    const a = () => i(new hu(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    ((r = aw(e, a)), t.finally(() => r()).then(n, i));
  }).finally(() => {
    r = rs;
  });
}
var Y_ = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: "ok", value: await e() });
    } catch (r) {
      return { status: r instanceof hu ? "cancelled" : "rejected", error: r };
    } finally {
      t == null || t();
    }
  },
  ns = (e) => (t) => iw(ow(e, t).then((r) => (Bn(e), r))),
  lw = (e) => {
    const t = ns(e);
    return (r) => t(new Promise((n) => setTimeout(n, r)));
  },
  { assign: Mi } = Object,
  Ov = {},
  mu = "listenerMiddleware",
  G_ = (e, t) => {
    const r = (n) => aw(e, () => Fn(n, e.reason));
    return (n, i) => {
      Rp(n);
      const a = new AbortController();
      r(a);
      const o = Y_(
        async () => {
          (Bn(e), Bn(a.signal));
          const l = await n({
            pause: ns(a.signal),
            delay: lw(a.signal),
            signal: a.signal,
          });
          return (Bn(a.signal), l);
        },
        () => Fn(a, H_),
      );
      return (
        i != null && i.autoJoin && t.push(o.catch(rs)),
        {
          result: ns(e)(o),
          cancel() {
            Fn(a, K_);
          },
        }
      );
    };
  },
  q_ = (e, t) => {
    const r = async (n, i) => {
      Bn(t);
      let a = () => {};
      const l = [
        new Promise((s, u) => {
          let c = e({
            predicate: n,
            effect: (f, d) => {
              (d.unsubscribe(), s([f, d.getState(), d.getOriginalState()]));
            },
          });
          a = () => {
            (c(), u());
          };
        }),
      ];
      i != null && l.push(new Promise((s) => setTimeout(s, i, null)));
      try {
        const s = await ow(t, Promise.race(l));
        return (Bn(t), s);
      } finally {
        a();
      }
    };
    return (n, i) => iw(r(n, i));
  },
  sw = (e) => {
    let { type: t, actionCreator: r, matcher: n, predicate: i, effect: a } = e;
    if (t) i = Wt(t).match;
    else if (r) ((t = r.type), (i = r.match));
    else if (n) i = n;
    else if (!i) throw new Error(Ot(21));
    return (Rp(a), { predicate: i, type: t, effect: a });
  },
  uw = Mi(
    (e) => {
      const { type: t, predicate: r, effect: n } = sw(e);
      return {
        id: M_(),
        effect: n,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ot(22));
        },
      };
    },
    { withTypes: () => uw },
  ),
  kv = (e, t) => {
    const { type: r, effect: n, predicate: i } = sw(t);
    return Array.from(e.values()).find(
      (a) =>
        (typeof r == "string" ? a.type === r : a.predicate === i) &&
        a.effect === n,
    );
  },
  Wf = (e) => {
    e.pending.forEach((t) => {
      Fn(t, Uf);
    });
  },
  X_ = (e) => () => {
    (e.forEach(Wf), e.clear());
  },
  _v = (e, t, r) => {
    try {
      e(t, r);
    } catch (n) {
      setTimeout(() => {
        throw n;
      }, 0);
    }
  },
  cw = Mi(Wt(`${mu}/add`), { withTypes: () => cw }),
  Q_ = Wt(`${mu}/removeAll`),
  fw = Mi(Wt(`${mu}/remove`), { withTypes: () => fw }),
  Z_ = (...e) => {
    console.error(`${mu}/error`, ...e);
  },
  wo = (e = {}) => {
    const t = new Map(),
      { extra: r, onError: n = Z_ } = e;
    Rp(n);
    const i = (c) => (
        (c.unsubscribe = () => t.delete(c.id)),
        t.set(c.id, c),
        (f) => {
          (c.unsubscribe(), f != null && f.cancelActive && Wf(c));
        }
      ),
      a = (c) => {
        const f = kv(t, c) ?? uw(c);
        return i(f);
      };
    Mi(a, { withTypes: () => a });
    const o = (c) => {
      const f = kv(t, c);
      return (f && (f.unsubscribe(), c.cancelActive && Wf(f)), !!f);
    };
    Mi(o, { withTypes: () => o });
    const l = async (c, f, d, p) => {
        const h = new AbortController(),
          g = q_(a, h.signal),
          y = [];
        try {
          (c.pending.add(h),
            await Promise.resolve(
              c.effect(
                f,
                Mi({}, d, {
                  getOriginalState: p,
                  condition: (m, v) => g(m, v).then(Boolean),
                  take: g,
                  delay: lw(h.signal),
                  pause: ns(h.signal),
                  extra: r,
                  signal: h.signal,
                  fork: G_(h.signal, y),
                  unsubscribe: c.unsubscribe,
                  subscribe: () => {
                    t.set(c.id, c);
                  },
                  cancelActiveListeners: () => {
                    c.pending.forEach((m, v, x) => {
                      m !== h && (Fn(m, Uf), x.delete(m));
                    });
                  },
                  cancel: () => {
                    (Fn(h, Uf), c.pending.delete(h));
                  },
                  throwIfCancelled: () => {
                    Bn(h.signal);
                  },
                }),
              ),
            ));
        } catch (m) {
          m instanceof hu || _v(n, m, { raisedBy: "effect" });
        } finally {
          (await Promise.all(y), Fn(h, V_), c.pending.delete(h));
        }
      },
      s = X_(t);
    return {
      middleware: (c) => (f) => (d) => {
        if (!Hx(d)) return f(d);
        if (cw.match(d)) return a(d.payload);
        if (Q_.match(d)) {
          s();
          return;
        }
        if (fw.match(d)) return o(d.payload);
        let p = c.getState();
        const h = () => {
          if (p === Ov) throw new Error(Ot(23));
          return p;
        };
        let g;
        try {
          if (((g = f(d)), t.size > 0)) {
            const y = c.getState(),
              m = Array.from(t.values());
            for (const v of m) {
              let x = !1;
              try {
                x = v.predicate(d, y, p);
              } catch (S) {
                ((x = !1), _v(n, S, { raisedBy: "predicate" }));
              }
              x && l(v, d, c, h);
            }
          }
        } finally {
          p = Ov;
        }
        return g;
      },
      startListening: a,
      stopListening: o,
      clearListeners: s,
    };
  };
function Ot(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var J_ = {
    layoutType: "horizontal",
    width: 0,
    height: 0,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    scale: 1,
  },
  dw = Vt({
    name: "chartLayout",
    initialState: J_,
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        ((e.margin.top = t.payload.top),
          (e.margin.right = t.payload.right),
          (e.margin.bottom = t.payload.bottom),
          (e.margin.left = t.payload.left));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: eC, setLayout: tC, setChartSize: rC, setScale: nC } = dw.actions,
  iC = dw.reducer;
function Cv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Av(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cv(Object(r), !0).forEach(function (n) {
          aC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aC(e, t, r) {
  return (
    (t = oC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function oC(e) {
  var t = lC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var is = Math.PI / 180,
  sC = (e) => (e * 180) / Math.PI,
  Fe = (e, t, r, n) => ({
    x: e + Math.cos(-is * n) * r,
    y: t + Math.sin(-is * n) * r,
  }),
  uC = function (t, r) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(t - (n.left || 0) - (n.right || 0)),
        Math.abs(r - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  cC = (e, t) => {
    var { x: r, y: n } = e,
      { x: i, y: a } = t;
    return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
  },
  fC = (e, t) => {
    var { x: r, y: n } = e,
      { cx: i, cy: a } = t,
      o = cC({ x: r, y: n }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var l = (r - i) / o,
      s = Math.acos(l);
    return (
      n > a && (s = 2 * Math.PI - s),
      { radius: o, angle: sC(s), angleInRadian: s }
    );
  },
  dC = (e) => {
    var { startAngle: t, endAngle: r } = e,
      n = Math.floor(t / 360),
      i = Math.floor(r / 360),
      a = Math.min(n, i);
    return { startAngle: t - a * 360, endAngle: r - a * 360 };
  },
  pC = (e, t) => {
    var { startAngle: r, endAngle: n } = t,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return e + o * 360;
  },
  hC = (e, t) => {
    var { x: r, y: n } = e,
      { radius: i, angle: a } = fC({ x: r, y: n }, t),
      { innerRadius: o, outerRadius: l } = t;
    if (i < o || i > l || i === 0) return null;
    var { startAngle: s, endAngle: u } = dC(t),
      c = a,
      f;
    if (s <= u) {
      for (; c > u; ) c -= 360;
      for (; c < s; ) c += 360;
      f = c >= s && c <= u;
    } else {
      for (; c > s; ) c -= 360;
      for (; c < u; ) c += 360;
      f = c >= u && c <= s;
    }
    return f ? Av(Av({}, t), {}, { radius: i, angle: pC(c, t) }) : null;
  };
function jv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jv(Object(r), !0).forEach(function (n) {
          mC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function mC(e, t, r) {
  return (
    (t = vC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vC(e) {
  var t = gC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kt(e, t, r) {
  return be(e) || be(t)
    ? r
    : dr(t)
      ? Xn(e, t, r)
      : typeof t == "function"
        ? t(e)
        : r;
}
var yC = (e, t, r, n, i) => {
    var a,
      o = -1,
      l = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
    if (l <= 1 || e == null) return 0;
    if (
      n === "angleAxis" &&
      i != null &&
      Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6
    )
      for (var s = 0; s < l; s++) {
        var u = s > 0 ? r[s - 1].coordinate : r[l - 1].coordinate,
          c = r[s].coordinate,
          f = s >= l - 1 ? r[0].coordinate : r[s + 1].coordinate,
          d = void 0;
        if ($t(c - u) !== $t(f - c)) {
          var p = [];
          if ($t(f - c) === $t(i[1] - i[0])) {
            d = f;
            var h = c + i[1] - i[0];
            ((p[0] = Math.min(h, (h + u) / 2)),
              (p[1] = Math.max(h, (h + u) / 2)));
          } else {
            d = u;
            var g = f + i[1] - i[0];
            ((p[0] = Math.min(c, (g + c) / 2)),
              (p[1] = Math.max(c, (g + c) / 2)));
          }
          var y = [Math.min(c, (d + c) / 2), Math.max(c, (d + c) / 2)];
          if ((e > y[0] && e <= y[1]) || (e >= p[0] && e <= p[1])) {
            ({ index: o } = r[s]);
            break;
          }
        } else {
          var m = Math.min(u, f),
            v = Math.max(u, f);
          if (e > (m + c) / 2 && e <= (v + c) / 2) {
            ({ index: o } = r[s]);
            break;
          }
        }
      }
    else if (t) {
      for (var x = 0; x < l; x++)
        if (
          (x === 0 && e <= (t[x].coordinate + t[x + 1].coordinate) / 2) ||
          (x > 0 &&
            x < l - 1 &&
            e > (t[x].coordinate + t[x - 1].coordinate) / 2 &&
            e <= (t[x].coordinate + t[x + 1].coordinate) / 2) ||
          (x === l - 1 && e > (t[x].coordinate + t[x - 1].coordinate) / 2)
        ) {
          ({ index: o } = t[x]);
          break;
        }
    }
    return o;
  },
  xC = (e, t, r) => {
    if (t && r) {
      var { width: n, height: i } = r,
        { align: a, verticalAlign: o, layout: l } = t;
      if (
        (l === "vertical" || (l === "horizontal" && o === "middle")) &&
        a !== "center" &&
        K(e[a])
      )
        return It(It({}, e), {}, { [a]: e[a] + (n || 0) });
      if (
        (l === "horizontal" || (l === "vertical" && a === "center")) &&
        o !== "middle" &&
        K(e[o])
      )
        return It(It({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  vn = (e, t) =>
    (e === "horizontal" && t === "xAxis") ||
    (e === "vertical" && t === "yAxis") ||
    (e === "centric" && t === "angleAxis") ||
    (e === "radial" && t === "radiusAxis"),
  pw = (e, t, r, n) => {
    if (n) return e.map((l) => l.coordinate);
    var i,
      a,
      o = e.map(
        (l) => (
          l.coordinate === t && (i = !0),
          l.coordinate === r && (a = !0),
          l.coordinate
        ),
      );
    return (i || o.push(t), a || o.push(r), o);
  },
  hw = (e, t, r) => {
    if (!e) return null;
    var {
      duplicateDomain: n,
      type: i,
      range: a,
      scale: o,
      realScaleType: l,
      isCategorical: s,
      categoricalDomain: u,
      tickCount: c,
      ticks: f,
      niceTicks: d,
      axisType: p,
    } = e;
    if (!o) return null;
    var h = l === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2,
      g = i === "category" && o.bandwidth ? o.bandwidth() / h : 0;
    if (
      ((g =
        p === "angleAxis" && a && a.length >= 2 ? $t(a[0] - a[1]) * 2 * g : g),
      f || d)
    ) {
      var y = (f || d || []).map((m, v) => {
        var x = n ? n.indexOf(m) : m;
        return { coordinate: o(x) + g, value: m, offset: g, index: v };
      });
      return y.filter((m) => !Ut(m.coordinate));
    }
    return s && u
      ? u.map((m, v) => ({
          coordinate: o(m) + g,
          value: m,
          index: v,
          offset: g,
        }))
      : o.ticks && !r && c != null
        ? o
            .ticks(c)
            .map((m, v) => ({
              coordinate: o(m) + g,
              value: m,
              offset: g,
              index: v,
            }))
        : o
            .domain()
            .map((m, v) => ({
              coordinate: o(m) + g,
              value: n ? n[m] : m,
              index: v,
              offset: g,
            }));
  },
  Tv = 1e-4,
  wC = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var r = t.length,
        n = e.range(),
        i = Math.min(n[0], n[1]) - Tv,
        a = Math.max(n[0], n[1]) + Tv,
        o = e(t[0]),
        l = e(t[r - 1]);
      (o < i || o > a || l < i || l > a) && e.domain([t[0], t[r - 1]]);
    }
  },
  bC = (e) => {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, n = e[0].length; r < n; ++r)
        for (var i = 0, a = 0, o = 0; o < t; ++o) {
          var l = Ut(e[o][r][1]) ? e[o][r][0] : e[o][r][1];
          l >= 0
            ? ((e[o][r][0] = i), (e[o][r][1] = i + l), (i = e[o][r][1]))
            : ((e[o][r][0] = a), (e[o][r][1] = a + l), (a = e[o][r][1]));
        }
  },
  SC = (e) => {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, n = e[0].length; r < n; ++r)
        for (var i = 0, a = 0; a < t; ++a) {
          var o = Ut(e[a][r][1]) ? e[a][r][0] : e[a][r][1];
          o >= 0
            ? ((e[a][r][0] = i), (e[a][r][1] = i + o), (i = e[a][r][1]))
            : ((e[a][r][0] = 0), (e[a][r][1] = 0));
        }
  },
  PC = {
    sign: bC,
    expand: wk,
    none: Ui,
    silhouette: bk,
    wiggle: Sk,
    positive: SC,
  },
  EC = (e, t, r) => {
    var n = PC[r],
      i = xk()
        .keys(t)
        .value((a, o) => +kt(a, o, 0))
        .order(If)
        .offset(n);
    return i(e);
  };
function OC(e) {
  return e == null ? void 0 : String(e);
}
function Nv(e) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: a, dataKey: o } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !be(i[t.dataKey])) {
      var l = Z1(r, "value", i[t.dataKey]);
      if (l) return l.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = kt(i, be(o) ? t.dataKey : o);
  return be(s) ? null : t.scale(s);
}
var kC = (e) => {
    var t = e.flat(2).filter(K);
    return [Math.min(...t), Math.max(...t)];
  },
  _C = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  CC = (e, t, r) => {
    if (e != null)
      return _C(
        Object.keys(e).reduce(
          (n, i) => {
            var a = e[i],
              { stackedData: o } = a,
              l = o.reduce(
                (s, u) => {
                  var c = kC(u.slice(t, r + 1));
                  return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  Mv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Dv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Kf = (e, t, r) => {
    if (e && e.scale && e.scale.bandwidth) {
      var n = e.scale.bandwidth();
      if (!r || n > 0) return n;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = uu(t, (c) => c.coordinate), a = 1 / 0, o = 1, l = i.length;
        o < l;
        o++
      ) {
        var s = i[o],
          u = i[o - 1];
        a = Math.min((s.coordinate || 0) - (u.coordinate || 0), a);
      }
      return a === 1 / 0 ? 0 : a;
    }
    return r ? void 0 : 0;
  };
function Iv(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a,
  } = e;
  return It(It({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
}
function mw(e, t) {
  if (e) return String(e);
  if (typeof t == "string") return t;
}
function AC(e, t, r, n, i) {
  if (r === "horizontal" || r === "vertical") {
    var a =
      e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height;
    return a ? { x: e, y: t } : null;
  }
  return n ? hC({ x: e, y: t }, n) : null;
}
var jC = (e, t, r, n) => {
    var i = t.find((u) => u && u.index === r);
    if (i) {
      if (e === "horizontal") return { x: i.coordinate, y: n.y };
      if (e === "vertical") return { x: n.x, y: i.coordinate };
      if (e === "centric") {
        var a = i.coordinate,
          { radius: o } = n;
        return It(
          It(It({}, n), Fe(n.cx, n.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var l = i.coordinate,
        { angle: s } = n;
      return It(
        It(It({}, n), Fe(n.cx, n.cy, l, s)),
        {},
        { angle: s, radius: l },
      );
    }
    return { x: 0, y: 0 };
  },
  TC = (e, t) =>
    t === "horizontal"
      ? e.x
      : t === "vertical"
        ? e.y
        : t === "centric"
          ? e.angle
          : e.radius,
  Lr = (e) => e.layout.width,
  $r = (e) => e.layout.height,
  NC = (e) => e.layout.scale,
  vw = (e) => e.layout.margin,
  zp = A(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Fp = A(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  MC = "data-recharts-item-index",
  DC = "data-recharts-item-data-key",
  vu = 60;
function Lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lv(Object(r), !0).forEach(function (n) {
          IC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function IC(e, t, r) {
  return (
    (t = LC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function LC(e) {
  var t = $C(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $C(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RC = (e) => e.brush.height,
  Ke = A([Lr, $r, vw, RC, zp, Fp, Ux, a_], (e, t, r, n, i, a, o, l) => {
    var s = a.reduce(
        (h, g) => {
          var { orientation: y } = g;
          if (!g.mirror && !g.hide) {
            var m = typeof g.width == "number" ? g.width : vu;
            return Ur(Ur({}, h), {}, { [y]: h[y] + m });
          }
          return h;
        },
        { left: r.left || 0, right: r.right || 0 },
      ),
      u = i.reduce(
        (h, g) => {
          var { orientation: y } = g;
          return !g.mirror && !g.hide
            ? Ur(Ur({}, h), {}, { [y]: Xn(h, "".concat(y)) + g.height })
            : h;
        },
        { top: r.top || 0, bottom: r.bottom || 0 },
      ),
      c = Ur(Ur({}, u), s),
      f = c.bottom;
    ((c.bottom += n), (c = xC(c, o, l)));
    var d = e - c.left - c.right,
      p = t - c.top - c.bottom;
    return Ur(
      Ur({ brushBottom: f }, c),
      {},
      { width: Math.max(d, 0), height: Math.max(p, 0) },
    );
  }),
  zC = A(Ke, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  gw = A(Lr, $r, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  FC = b.createContext(null),
  pt = () => b.useContext(FC) != null,
  gu = (e) => e.brush,
  yu = A([gu, Ke, vw], (e, t, r) => ({
    height: e.height,
    x: K(e.x) ? e.x : t.left,
    y: K(e.y)
      ? e.y
      : t.top +
        t.height +
        t.brushBottom -
        ((r == null ? void 0 : r.bottom) || 0),
    width: K(e.width) ? e.width : t.width,
  })),
  Bp = () => {
    var e,
      t = pt(),
      r = H(zC),
      n = H(yu),
      i = (e = H(gu)) === null || e === void 0 ? void 0 : e.padding;
    return !t || !n || !i
      ? r
      : {
          width: n.width - i.left - i.right,
          height: n.height - i.top - i.bottom,
          x: i.left,
          y: i.top,
        };
  },
  BC = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  yw = () => {
    var e;
    return (e = H(Ke)) !== null && e !== void 0 ? e : BC;
  },
  xw = () => H(Lr),
  ww = () => H($r),
  ge = (e) => e.layout.layoutType,
  Up = () => H(ge),
  UC = {
    settings: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      itemSorter: "value",
    },
    size: { width: 0, height: 0 },
    payload: [],
  },
  bw = Vt({
    name: "legend",
    initialState: UC,
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload(e, t) {
        e.payload.push(t.payload);
      },
      removeLegendPayload(e, t) {
        var r = Pr(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
    },
  }),
  {
    setLegendSize: h4,
    setLegendSettings: m4,
    addLegendPayload: WC,
    removeLegendPayload: KC,
  } = bw.actions,
  HC = bw.reducer;
function Hf() {
  return (
    (Hf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hf.apply(null, arguments)
  );
}
function $v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $v(Object(r), !0).forEach(function (n) {
          VC(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $v(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function VC(e, t, r) {
  return (
    (t = YC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function YC(e) {
  var t = GC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qC(e) {
  return Array.isArray(e) && dr(e[0]) && dr(e[1]) ? e.join(" ~ ") : e;
}
var XC = (e) => {
    var {
        separator: t = " : ",
        contentStyle: r = {},
        itemStyle: n = {},
        labelStyle: i = {},
        payload: a,
        formatter: o,
        itemSorter: l,
        wrapperClassName: s,
        labelClassName: u,
        label: c,
        labelFormatter: f,
        accessibilityLayer: d = !1,
      } = e,
      p = () => {
        if (a && a.length) {
          var P = { padding: 0, margin: 0 },
            E = (l ? uu(a, l) : a).map((O, k) => {
              if (O.type === "none") return null;
              var _ = O.formatter || o || qC,
                { value: j, name: T } = O,
                L = j,
                Y = T;
              if (_) {
                var F = _(j, T, O, k, a);
                if (Array.isArray(F)) [L, Y] = F;
                else if (F != null) L = F;
                else return null;
              }
              var D = bc(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: O.color || "#000",
                },
                n,
              );
              return b.createElement(
                "li",
                {
                  className: "recharts-tooltip-item",
                  key: "tooltip-item-".concat(k),
                  style: D,
                },
                dr(Y)
                  ? b.createElement(
                      "span",
                      { className: "recharts-tooltip-item-name" },
                      Y,
                    )
                  : null,
                dr(Y)
                  ? b.createElement(
                      "span",
                      { className: "recharts-tooltip-item-separator" },
                      t,
                    )
                  : null,
                b.createElement(
                  "span",
                  { className: "recharts-tooltip-item-value" },
                  L,
                ),
                b.createElement(
                  "span",
                  { className: "recharts-tooltip-item-unit" },
                  O.unit || "",
                ),
              );
            });
          return b.createElement(
            "ul",
            { className: "recharts-tooltip-item-list", style: P },
            E,
          );
        }
        return null;
      },
      h = bc(
        {
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap",
        },
        r,
      ),
      g = bc({ margin: 0 }, i),
      y = !be(c),
      m = y ? c : "",
      v = se("recharts-default-tooltip", s),
      x = se("recharts-tooltip-label", u);
    y && f && a !== void 0 && a !== null && (m = f(c, a));
    var S = d ? { role: "status", "aria-live": "assertive" } : {};
    return b.createElement(
      "div",
      Hf({ className: v, style: h }, S),
      b.createElement(
        "p",
        { className: x, style: g },
        b.isValidElement(m) ? m : "".concat(m),
      ),
      p(),
    );
  },
  ma = "recharts-tooltip-wrapper",
  QC = { visibility: "hidden" };
function ZC(e) {
  var { coordinate: t, translateX: r, translateY: n } = e;
  return se(ma, {
    ["".concat(ma, "-right")]: K(r) && t && K(t.x) && r >= t.x,
    ["".concat(ma, "-left")]: K(r) && t && K(t.x) && r < t.x,
    ["".concat(ma, "-bottom")]: K(n) && t && K(t.y) && n >= t.y,
    ["".concat(ma, "-top")]: K(n) && t && K(t.y) && n < t.y,
  });
}
function Rv(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: l,
    viewBox: s,
    viewBoxDimension: u,
  } = e;
  if (a && K(a[n])) return a[n];
  var c = r[n] - l - (i > 0 ? i : 0),
    f = r[n] + i;
  if (t[n]) return o[n] ? c : f;
  var d = s[n];
  if (d == null) return 0;
  if (o[n]) {
    var p = c,
      h = d;
    return p < h ? Math.max(f, d) : Math.max(c, d);
  }
  if (u == null) return 0;
  var g = f + l,
    y = d + u;
  return g > y ? Math.max(c, d) : Math.max(f, d);
}
function JC(e) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function eA(e) {
  var {
      allowEscapeViewBox: t,
      coordinate: r,
      offsetTopLeft: n,
      position: i,
      reverseDirection: a,
      tooltipBox: o,
      useTranslate3d: l,
      viewBox: s,
    } = e,
    u,
    c,
    f;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((c = Rv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: s,
          viewBoxDimension: s.width,
        })),
        (f = Rv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: s,
          viewBoxDimension: s.height,
        })),
        (u = JC({ translateX: c, translateY: f, useTranslate3d: l })))
      : (u = QC),
    {
      cssProperties: u,
      cssClasses: ZC({ translateX: c, translateY: f, coordinate: r }),
    }
  );
}
function zv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zv(Object(r), !0).forEach(function (n) {
          Vf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Vf(e, t, r) {
  return (
    (t = tA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function tA(e) {
  var t = rA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class nA extends b.PureComponent {
  constructor() {
    (super(...arguments),
      Vf(this, "state", {
        dismissed: !1,
        dismissedAtCoordinate: { x: 0, y: 0 },
      }),
      Vf(this, "handleKeyDown", (t) => {
        if (t.key === "Escape") {
          var r, n, i, a;
          this.setState({
            dismissed: !0,
            dismissedAtCoordinate: {
              x:
                (r =
                  (n = this.props.coordinate) === null || n === void 0
                    ? void 0
                    : n.x) !== null && r !== void 0
                  ? r
                  : 0,
              y:
                (i =
                  (a = this.props.coordinate) === null || a === void 0
                    ? void 0
                    : a.y) !== null && i !== void 0
                  ? i
                  : 0,
            },
          });
        }
      }));
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed &&
      (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !==
        this.state.dismissedAtCoordinate.x ||
        ((r = this.props.coordinate) === null || r === void 0
          ? void 0
          : r.y) !== this.state.dismissedAtCoordinate.y) &&
      (this.state.dismissed = !1);
  }
  render() {
    var {
        active: t,
        allowEscapeViewBox: r,
        animationDuration: n,
        animationEasing: i,
        children: a,
        coordinate: o,
        hasPayload: l,
        isAnimationActive: s,
        offset: u,
        position: c,
        reverseDirection: f,
        useTranslate3d: d,
        viewBox: p,
        wrapperStyle: h,
        lastBoundingBox: g,
        innerRef: y,
        hasPortalFromProps: m,
      } = this.props,
      { cssClasses: v, cssProperties: x } = eA({
        allowEscapeViewBox: r,
        coordinate: o,
        offsetTopLeft: u,
        position: c,
        reverseDirection: f,
        tooltipBox: { height: g.height, width: g.width },
        useTranslate3d: d,
        viewBox: p,
      }),
      S = m
        ? {}
        : rl(
            rl(
              {
                transition:
                  s && t ? "transform ".concat(n, "ms ").concat(i) : void 0,
              },
              x,
            ),
            {},
            {
              pointerEvents: "none",
              visibility:
                !this.state.dismissed && t && l ? "visible" : "hidden",
              position: "absolute",
              top: 0,
              left: 0,
            },
          ),
      P = rl(
        rl({}, S),
        {},
        { visibility: !this.state.dismissed && t && l ? "visible" : "hidden" },
        h,
      );
    return b.createElement(
      "div",
      {
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: v,
        style: P,
        ref: y,
      },
      a,
    );
  }
}
var iA = () =>
    !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  bo = { isSsr: iA() },
  Sw = () => H((e) => e.rootProps.accessibilityLayer);
function ir(e) {
  return Number.isFinite(e);
}
function as(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function Yf() {
  return (
    (Yf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yf.apply(null, arguments)
  );
}
function Fv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Bv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fv(Object(r), !0).forEach(function (n) {
          aA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Fv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aA(e, t, r) {
  return (
    (t = oA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function oA(e) {
  var t = lA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Uv = {
    curveBasisClosed: sk,
    curveBasisOpen: uk,
    curveBasis: lk,
    curveBumpX: ak,
    curveBumpY: ok,
    curveLinearClosed: ck,
    curveLinear: ru,
    curveMonotoneX: fk,
    curveMonotoneY: dk,
    curveNatural: pk,
    curveStep: hk,
    curveStepAfter: vk,
    curveStepBefore: mk,
  },
  nl = (e) => ir(e.x) && ir(e.y),
  va = (e) => e.x,
  ga = (e) => e.y,
  sA = (e, t) => {
    if (typeof e == "function") return e;
    var r = "curve".concat(wp(e));
    return (r === "curveMonotone" || r === "curveBump") && t
      ? Uv["".concat(r).concat(t === "vertical" ? "Y" : "X")]
      : Uv[r] || ru;
  },
  uA = (e) => {
    var {
        type: t = "linear",
        points: r = [],
        baseLine: n,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = sA(t, i),
      l = a ? r.filter(nl) : r,
      s;
    if (Array.isArray(n)) {
      var u = a ? n.filter((f) => nl(f)) : n,
        c = l.map((f, d) => Bv(Bv({}, f), {}, { base: u[d] }));
      return (
        i === "vertical"
          ? (s = Qo()
              .y(ga)
              .x1(va)
              .x0((f) => f.base.x))
          : (s = Qo()
              .x(va)
              .y1(ga)
              .y0((f) => f.base.y)),
        s.defined(nl).curve(o),
        s(c)
      );
    }
    return (
      i === "vertical" && K(n)
        ? (s = Qo().y(ga).x1(va).x0(n))
        : K(n)
          ? (s = Qo().x(va).y1(ga).y0(n))
          : (s = sx().x(va).y(ga)),
      s.defined(nl).curve(o),
      s(l)
    );
  },
  Pw = (e) => {
    var { className: t, points: r, path: n, pathRef: i } = e;
    if ((!r || !r.length) && !n) return null;
    var a = r && r.length ? uA(e) : n;
    return b.createElement(
      "path",
      Yf({}, ue(e, !1), Sp(e), {
        className: se("recharts-curve", t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  cA = ["x", "y", "top", "left", "width", "height", "className"];
function Gf() {
  return (
    (Gf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gf.apply(null, arguments)
  );
}
function Wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wv(Object(r), !0).forEach(function (n) {
          dA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function dA(e, t, r) {
  return (
    (t = pA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pA(e) {
  var t = hA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mA(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = vA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function vA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var gA = (e, t, r, n, i, a) =>
    "M"
      .concat(e, ",")
      .concat(i, "v")
      .concat(n, "M")
      .concat(a, ",")
      .concat(t, "h")
      .concat(r),
  yA = (e) => {
    var {
        x: t = 0,
        y: r = 0,
        top: n = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: l,
      } = e,
      s = mA(e, cA),
      u = fA({ x: t, y: r, top: n, left: i, width: a, height: o }, s);
    return !K(t) || !K(r) || !K(a) || !K(o) || !K(n) || !K(i)
      ? null
      : b.createElement(
          "path",
          Gf({}, ue(u, !0), {
            className: se("recharts-cross", l),
            d: gA(t, r, a, o, n, i),
          }),
        );
  };
function xA(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function Kv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function wA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kv(Object(r), !0).forEach(function (n) {
          bA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function bA(e, t, r) {
  return (
    (t = SA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function SA(e) {
  var t = PA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ni(e, t) {
  var r = wA({}, e),
    n = t,
    i = Object.keys(t),
    a = i.reduce(
      (o, l) => (o[l] === void 0 && n[l] !== void 0 && (o[l] = n[l]), o),
      r,
    );
  return a;
}
var Ew = {},
  Ow = {},
  kw = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    if (!r || typeof r != "object") return !1;
    const n = Object.getPrototypeOf(r);
    return n === null ||
      n === Object.prototype ||
      Object.getPrototypeOf(n) === null
      ? Object.prototype.toString.call(r) === "[object Object]"
      : !1;
  }
  e.isPlainObject = t;
})(kw);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = kw,
    r = Ap,
    n = ou,
    i = lu,
    a = au;
  function o(u, c, f) {
    return l(u, c, void 0, void 0, void 0, void 0, f);
  }
  function l(u, c, f, d, p, h, g) {
    const y = g(u, c, f, d, p, h);
    if (y !== void 0) return y;
    if (typeof u == typeof c)
      switch (typeof u) {
        case "bigint":
        case "string":
        case "boolean":
        case "symbol":
        case "undefined":
          return u === c;
        case "number":
          return u === c || Object.is(u, c);
        case "function":
          return u === c;
        case "object":
          return s(u, c, h, g);
      }
    return s(u, c, h, g);
  }
  function s(u, c, f, d) {
    if (Object.is(u, c)) return !0;
    let p = n.getTag(u),
      h = n.getTag(c);
    if (
      (p === i.argumentsTag && (p = i.objectTag),
      h === i.argumentsTag && (h = i.objectTag),
      p !== h)
    )
      return !1;
    switch (p) {
      case i.stringTag:
        return u.toString() === c.toString();
      case i.numberTag: {
        const m = u.valueOf(),
          v = c.valueOf();
        return a.eq(m, v);
      }
      case i.booleanTag:
      case i.dateTag:
      case i.symbolTag:
        return Object.is(u.valueOf(), c.valueOf());
      case i.regexpTag:
        return u.source === c.source && u.flags === c.flags;
      case i.functionTag:
        return u === c;
    }
    f = f ?? new Map();
    const g = f.get(u),
      y = f.get(c);
    if (g != null && y != null) return g === c;
    (f.set(u, c), f.set(c, u));
    try {
      switch (p) {
        case i.mapTag: {
          if (u.size !== c.size) return !1;
          for (const [m, v] of u.entries())
            if (!c.has(m) || !l(v, c.get(m), m, u, c, f, d)) return !1;
          return !0;
        }
        case i.setTag: {
          if (u.size !== c.size) return !1;
          const m = Array.from(u.values()),
            v = Array.from(c.values());
          for (let x = 0; x < m.length; x++) {
            const S = m[x],
              P = v.findIndex((E) => l(S, E, void 0, u, c, f, d));
            if (P === -1) return !1;
            v.splice(P, 1);
          }
          return !0;
        }
        case i.arrayTag:
        case i.uint8ArrayTag:
        case i.uint8ClampedArrayTag:
        case i.uint16ArrayTag:
        case i.uint32ArrayTag:
        case i.bigUint64ArrayTag:
        case i.int8ArrayTag:
        case i.int16ArrayTag:
        case i.int32ArrayTag:
        case i.bigInt64ArrayTag:
        case i.float32ArrayTag:
        case i.float64ArrayTag: {
          if (
            (typeof Buffer < "u" &&
              Buffer.isBuffer(u) !== Buffer.isBuffer(c)) ||
            u.length !== c.length
          )
            return !1;
          for (let m = 0; m < u.length; m++)
            if (!l(u[m], c[m], m, u, c, f, d)) return !1;
          return !0;
        }
        case i.arrayBufferTag:
          return u.byteLength !== c.byteLength
            ? !1
            : s(new Uint8Array(u), new Uint8Array(c), f, d);
        case i.dataViewTag:
          return u.byteLength !== c.byteLength || u.byteOffset !== c.byteOffset
            ? !1
            : s(new Uint8Array(u), new Uint8Array(c), f, d);
        case i.errorTag:
          return u.name === c.name && u.message === c.message;
        case i.objectTag: {
          if (
            !(
              s(u.constructor, c.constructor, f, d) ||
              (t.isPlainObject(u) && t.isPlainObject(c))
            )
          )
            return !1;
          const v = [...Object.keys(u), ...r.getSymbols(u)],
            x = [...Object.keys(c), ...r.getSymbols(c)];
          if (v.length !== x.length) return !1;
          for (let S = 0; S < v.length; S++) {
            const P = v[S],
              E = u[P];
            if (!Object.hasOwn(c, P)) return !1;
            const O = c[P];
            if (!l(E, O, P, u, c, f, d)) return !1;
          }
          return !0;
        }
        default:
          return !1;
      }
    } finally {
      (f.delete(u), f.delete(c));
    }
  }
  e.isEqualWith = o;
})(Ow);
var _w = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t() {}
  e.noop = t;
})(_w);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ow,
    r = _w;
  function n(i, a) {
    return t.isEqualWith(i, a, r.noop);
  }
  e.isEqual = n;
})(Ew);
var EA = Ew.isEqual;
const OA = Mr(EA);
function kA(e) {
  var t = {},
    r = () => null,
    n = !1,
    i = null,
    a = (o) => {
      if (!n) {
        if (Array.isArray(o)) {
          if (!o.length) return;
          var l = o,
            [s, ...u] = l;
          if (typeof s == "number") {
            i = e.setTimeout(a.bind(null, u), s);
            return;
          }
          (a(s), (i = e.setTimeout(a.bind(null, u))));
          return;
        }
        (typeof o == "object" && ((t = o), r(t)),
          typeof o == "function" && o());
      }
    };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      ((n = !1), i && (i(), (i = null)), a(o));
    },
    subscribe: (o) => (
      (r = o),
      () => {
        r = () => null;
      }
    ),
    getTimeoutController: () => e,
  };
}
var os = 1e-4,
  Cw = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  Aw = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n),
  Hv = (e, t) => (r) => {
    var n = Cw(e, t);
    return Aw(n, r);
  },
  _A = (e, t) => (r) => {
    var n = Cw(e, t),
      i = [...n.map((a, o) => a * o).slice(1), 0];
    return Aw(i, r);
  },
  Vv = function () {
    for (
      var t, r, n, i, a = arguments.length, o = new Array(a), l = 0;
      l < a;
      l++
    )
      o[l] = arguments[l];
    if (o.length === 1)
      switch (o[0]) {
        case "linear":
          [t, n, r, i] = [0, 0, 1, 1];
          break;
        case "ease":
          [t, n, r, i] = [0.25, 0.1, 0.25, 1];
          break;
        case "ease-in":
          [t, n, r, i] = [0.42, 0, 1, 1];
          break;
        case "ease-out":
          [t, n, r, i] = [0.42, 0, 0.58, 1];
          break;
        case "ease-in-out":
          [t, n, r, i] = [0, 0, 0.58, 1];
          break;
        default: {
          var s = o[0].split("(");
          s[0] === "cubic-bezier" &&
            s[1].split(")")[0].split(",").length === 4 &&
            ([t, n, r, i] = s[1]
              .split(")")[0]
              .split(",")
              .map((h) => parseFloat(h)));
        }
      }
    else o.length === 4 && ([t, n, r, i] = o);
    var u = Hv(t, r),
      c = Hv(n, i),
      f = _A(t, r),
      d = (h) => (h > 1 ? 1 : h < 0 ? 0 : h),
      p = (h) => {
        for (var g = h > 1 ? 1 : h, y = g, m = 0; m < 8; ++m) {
          var v = u(y) - g,
            x = f(y);
          if (Math.abs(v - g) < os || x < os) return c(y);
          y = d(y - v / x);
        }
        return c(y);
      };
    return ((p.isStepper = !1), p);
  },
  CA = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { stiff: r = 100, damping: n = 8, dt: i = 17 } = t,
      a = (o, l, s) => {
        var u = -(o - l) * r,
          c = s * n,
          f = s + ((u - c) * i) / 1e3,
          d = (s * i) / 1e3 + o;
        return Math.abs(d - l) < os && Math.abs(f) < os ? [l, 0] : [d, f];
      };
    return ((a.isStepper = !0), (a.dt = i), a);
  },
  AA = (e) => {
    if (typeof e == "string")
      switch (e) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Vv(e);
        case "spring":
          return CA();
        default:
          if (e.split("(")[0] === "cubic-bezier") return Vv(e);
      }
    return typeof e == "function" ? e : null;
  };
function Yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Gv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yv(Object(r), !0).forEach(function (n) {
          jA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Yv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jA(e, t, r) {
  return (
    (t = TA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TA(e) {
  var t = NA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var MA = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())),
  DA = (e, t, r) =>
    e.map((n) => "".concat(MA(n), " ").concat(t, "ms ").concat(r)).join(","),
  IA = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((r, n) =>
      r.filter((i) => n.includes(i)),
    ),
  ao = (e, t) =>
    Object.keys(t).reduce((r, n) => Gv(Gv({}, r), {}, { [n]: e(n, t[n]) }), {});
function qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qv(Object(r), !0).forEach(function (n) {
          LA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function LA(e, t, r) {
  return (
    (t = $A(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $A(e) {
  var t = RA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function RA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ls = (e, t, r) => e + (t - e) * r,
  qf = (e) => {
    var { from: t, to: r } = e;
    return t !== r;
  },
  jw = (e, t, r) => {
    var n = ao((i, a) => {
      if (qf(a)) {
        var [o, l] = e(a.from, a.to, a.velocity);
        return ze(ze({}, a), {}, { from: o, velocity: l });
      }
      return a;
    }, t);
    return r < 1
      ? ao(
          (i, a) =>
            qf(a)
              ? ze(
                  ze({}, a),
                  {},
                  {
                    velocity: ls(a.velocity, n[i].velocity, r),
                    from: ls(a.from, n[i].from, r),
                  },
                )
              : a,
          t,
        )
      : jw(e, n, r - 1);
  };
function zA(e, t, r, n, i, a) {
  var o,
    l = n.reduce(
      (d, p) =>
        ze(ze({}, d), {}, { [p]: { from: e[p], velocity: 0, to: t[p] } }),
      {},
    ),
    s = () => ao((d, p) => p.from, l),
    u = () => !Object.values(l).filter(qf).length,
    c = null,
    f = (d) => {
      o || (o = d);
      var p = d - o,
        h = p / r.dt;
      ((l = jw(r, l, h)),
        i(ze(ze(ze({}, e), t), s())),
        (o = d),
        u() || (c = a.setTimeout(f)));
    };
  return () => (
    (c = a.setTimeout(f)),
    () => {
      c();
    }
  );
}
function FA(e, t, r, n, i, a, o) {
  var l = null,
    s = i.reduce((f, d) => ze(ze({}, f), {}, { [d]: [e[d], t[d]] }), {}),
    u,
    c = (f) => {
      u || (u = f);
      var d = (f - u) / n,
        p = ao((g, y) => ls(...y, r(d)), s);
      if ((a(ze(ze(ze({}, e), t), p)), d < 1)) l = o.setTimeout(c);
      else {
        var h = ao((g, y) => ls(...y, r(1)), s);
        a(ze(ze(ze({}, e), t), h));
      }
    };
  return () => (
    (l = o.setTimeout(c)),
    () => {
      l();
    }
  );
}
const BA = (e, t, r, n, i, a) => {
  var o = IA(e, t);
  return r.isStepper === !0 ? zA(e, t, r, o, i, a) : FA(e, t, r, n, o, i, a);
};
class UA {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      n = performance.now(),
      i = null,
      a = (o) => {
        o - n >= r
          ? t(o)
          : typeof requestAnimationFrame == "function" &&
            (i = requestAnimationFrame(a));
      };
    return (
      (i = requestAnimationFrame(a)),
      () => {
        cancelAnimationFrame(i);
      }
    );
  }
}
var WA = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
  "animationManager",
];
function Xf() {
  return (
    (Xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xf.apply(null, arguments)
  );
}
function KA(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = HA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function HA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function Xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xv(Object(r), !0).forEach(function (n) {
          Dn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Xv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Dn(e, t, r) {
  return (
    (t = VA(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function VA(e) {
  var t = YA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GA() {
  return kA(new UA());
}
class Wp extends b.PureComponent {
  constructor(t, r) {
    (super(t, r),
      Dn(this, "mounted", !1),
      Dn(this, "manager", null),
      Dn(this, "stopJSAnimation", null),
      Dn(this, "unSubscribe", null));
    var {
      isActive: n,
      attributeName: i,
      from: a,
      to: o,
      children: l,
      duration: s,
      animationManager: u,
    } = this.props;
    if (
      ((this.manager = u),
      (this.handleStyleChange = this.handleStyleChange.bind(this)),
      (this.changeStyle = this.changeStyle.bind(this)),
      !n || s <= 0)
    ) {
      ((this.state = { style: {} }),
        typeof l == "function" && (this.state = { style: o }));
      return;
    }
    if (a) {
      if (typeof l == "function") {
        this.state = { style: a };
        return;
      }
      this.state = { style: i ? { [i]: a } : a };
    } else this.state = { style: {} };
  }
  componentDidMount() {
    var { isActive: t, canBegin: r } = this.props;
    ((this.mounted = !0), !(!t || !r) && this.runAnimation(this.props));
  }
  componentDidUpdate(t) {
    var {
        isActive: r,
        canBegin: n,
        attributeName: i,
        shouldReAnimate: a,
        to: o,
        from: l,
      } = this.props,
      { style: s } = this.state;
    if (n) {
      if (!r) {
        var u = { style: i ? { [i]: o } : o };
        this.state &&
          s &&
          ((i && s[i] !== o) || (!i && s !== o)) &&
          this.setState(u);
        return;
      }
      if (!(OA(t.to, o) && t.canBegin && t.isActive)) {
        var c = !t.canBegin || !t.isActive;
        (this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation());
        var f = c || a ? l : t.to;
        if (this.state && s) {
          var d = { style: i ? { [i]: f } : f };
          ((i && s[i] !== f) || (!i && s !== f)) && this.setState(d);
        }
        this.runAnimation(Wr(Wr({}, this.props), {}, { from: f, begin: 0 }));
      }
    }
  }
  componentWillUnmount() {
    this.mounted = !1;
    var { onAnimationEnd: t } = this.props;
    (this.unSubscribe && this.unSubscribe(),
      this.manager.stop(),
      this.stopJSAnimation && this.stopJSAnimation(),
      t && t());
  }
  handleStyleChange(t) {
    this.changeStyle(t);
  }
  changeStyle(t) {
    this.mounted && this.setState({ style: t });
  }
  runJSAnimation(t) {
    var {
        from: r,
        to: n,
        duration: i,
        easing: a,
        begin: o,
        onAnimationEnd: l,
        onAnimationStart: s,
      } = t,
      u = BA(
        r,
        n,
        AA(a),
        i,
        this.changeStyle,
        this.manager.getTimeoutController(),
      ),
      c = () => {
        this.stopJSAnimation = u();
      };
    this.manager.start([s, o, c, i, l]);
  }
  runAnimation(t) {
    var {
      begin: r,
      duration: n,
      attributeName: i,
      to: a,
      easing: o,
      onAnimationStart: l,
      onAnimationEnd: s,
      children: u,
    } = t;
    if (
      ((this.unSubscribe = this.manager.subscribe(this.handleStyleChange)),
      typeof o == "function" || typeof u == "function" || o === "spring")
    ) {
      this.runJSAnimation(t);
      return;
    }
    var c = i ? { [i]: a } : a,
      f = DA(Object.keys(c), n, o);
    this.manager.start([l, r, Wr(Wr({}, c), {}, { transition: f }), n, s]);
  }
  render() {
    var t = this.props,
      {
        children: r,
        begin: n,
        duration: i,
        attributeName: a,
        easing: o,
        isActive: l,
        from: s,
        to: u,
        canBegin: c,
        onAnimationEnd: f,
        shouldReAnimate: d,
        onAnimationReStart: p,
        animationManager: h,
      } = t,
      g = KA(t, WA),
      y = b.Children.count(r),
      m = this.state.style;
    if (typeof r == "function") return r(m);
    if (!l || y === 0 || i <= 0) return r;
    var v = (x) => {
      var { style: S = {}, className: P } = x.props,
        E = b.cloneElement(
          x,
          Wr(Wr({}, g), {}, { style: Wr(Wr({}, S), m), className: P }),
        );
      return E;
    };
    return y === 1
      ? v(b.Children.only(r))
      : b.createElement(
          "div",
          null,
          b.Children.map(r, (x) => v(x)),
        );
  }
}
Dn(Wp, "displayName", "Animate");
Dn(Wp, "defaultProps", {
  begin: 0,
  duration: 1e3,
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {},
  onAnimationStart: () => {},
});
var qA = b.createContext(null);
function ss(e) {
  var t,
    r,
    n = b.useContext(qA);
  return b.createElement(
    Wp,
    Xf({}, e, {
      animationManager:
        (t = (r = e.animationManager) !== null && r !== void 0 ? r : n) !==
          null && t !== void 0
          ? t
          : GA(),
    }),
  );
}
function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    us.apply(null, arguments)
  );
}
var Qv = (e, t, r, n, i) => {
    var a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
      o = n >= 0 ? 1 : -1,
      l = r >= 0 ? 1 : -1,
      s = (n >= 0 && r >= 0) || (n < 0 && r < 0) ? 1 : 0,
      u;
    if (a > 0 && i instanceof Array) {
      for (var c = [0, 0, 0, 0], f = 0, d = 4; f < d; f++)
        c[f] = i[f] > a ? a : i[f];
      ((u = "M".concat(e, ",").concat(t + o * c[0])),
        c[0] > 0 &&
          (u += "A "
            .concat(c[0], ",")
            .concat(c[0], ",0,0,")
            .concat(s, ",")
            .concat(e + l * c[0], ",")
            .concat(t)),
        (u += "L ".concat(e + r - l * c[1], ",").concat(t)),
        c[1] > 0 &&
          (u += "A "
            .concat(c[1], ",")
            .concat(c[1], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e + r, ",")
            .concat(t + o * c[1])),
        (u += "L ".concat(e + r, ",").concat(t + n - o * c[2])),
        c[2] > 0 &&
          (u += "A "
            .concat(c[2], ",")
            .concat(c[2], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e + r - l * c[2], ",")
            .concat(t + n)),
        (u += "L ".concat(e + l * c[3], ",").concat(t + n)),
        c[3] > 0 &&
          (u += "A "
            .concat(c[3], ",")
            .concat(c[3], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(e, ",")
            .concat(t + n - o * c[3])),
        (u += "Z"));
    } else if (a > 0 && i === +i && i > 0) {
      var p = Math.min(a, i);
      u = "M "
        .concat(e, ",")
        .concat(
          t + o * p,
          `
            A `,
        )
        .concat(p, ",")
        .concat(p, ",0,0,")
        .concat(s, ",")
        .concat(e + l * p, ",")
        .concat(
          t,
          `
            L `,
        )
        .concat(e + r - l * p, ",")
        .concat(
          t,
          `
            A `,
        )
        .concat(p, ",")
        .concat(p, ",0,0,")
        .concat(s, ",")
        .concat(e + r, ",")
        .concat(
          t + o * p,
          `
            L `,
        )
        .concat(e + r, ",")
        .concat(
          t + n - o * p,
          `
            A `,
        )
        .concat(p, ",")
        .concat(p, ",0,0,")
        .concat(s, ",")
        .concat(e + r - l * p, ",")
        .concat(
          t + n,
          `
            L `,
        )
        .concat(e + l * p, ",")
        .concat(
          t + n,
          `
            A `,
        )
        .concat(p, ",")
        .concat(p, ",0,0,")
        .concat(s, ",")
        .concat(e, ",")
        .concat(t + n - o * p, " Z");
    } else
      u = "M "
        .concat(e, ",")
        .concat(t, " h ")
        .concat(r, " v ")
        .concat(n, " h ")
        .concat(-r, " Z");
    return u;
  },
  XA = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  QA = (e) => {
    var t = ni(e, XA),
      r = b.useRef(null),
      [n, i] = b.useState(-1);
    b.useEffect(() => {
      if (r.current && r.current.getTotalLength)
        try {
          var m = r.current.getTotalLength();
          m && i(m);
        } catch {}
    }, []);
    var { x: a, y: o, width: l, height: s, radius: u, className: c } = t,
      {
        animationEasing: f,
        animationDuration: d,
        animationBegin: p,
        isAnimationActive: h,
        isUpdateAnimationActive: g,
      } = t;
    if (a !== +a || o !== +o || l !== +l || s !== +s || l === 0 || s === 0)
      return null;
    var y = se("recharts-rectangle", c);
    return g
      ? b.createElement(
          ss,
          {
            canBegin: n > 0,
            from: { width: l, height: s, x: a, y: o },
            to: { width: l, height: s, x: a, y: o },
            duration: d,
            animationEasing: f,
            isActive: g,
          },
          (m) => {
            var { width: v, height: x, x: S, y: P } = m;
            return b.createElement(
              ss,
              {
                canBegin: n > 0,
                from: "0px ".concat(n === -1 ? 1 : n, "px"),
                to: "".concat(n, "px 0px"),
                attributeName: "strokeDasharray",
                begin: p,
                duration: d,
                isActive: h,
                easing: f,
              },
              b.createElement(
                "path",
                us({}, ue(t, !0), {
                  className: y,
                  d: Qv(S, P, v, x, u),
                  ref: r,
                }),
              ),
            );
          },
        )
      : b.createElement(
          "path",
          us({}, ue(t, !0), { className: y, d: Qv(a, o, l, s, u) }),
        );
  };
function Tw(e) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e,
    o = Fe(t, r, n, i),
    l = Fe(t, r, n, a);
  return {
    points: [o, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}
function Qf() {
  return (
    (Qf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Qf.apply(null, arguments)
  );
}
var ZA = (e, t) => {
    var r = $t(t - e),
      n = Math.min(Math.abs(t - e), 359.999);
    return r * n;
  },
  il = (e) => {
    var {
        cx: t,
        cy: r,
        radius: n,
        angle: i,
        sign: a,
        isExternal: o,
        cornerRadius: l,
        cornerIsExternal: s,
      } = e,
      u = l * (o ? 1 : -1) + n,
      c = Math.asin(l / u) / is,
      f = s ? i : i + a * c,
      d = Fe(t, r, u, f),
      p = Fe(t, r, n, f),
      h = s ? i - a * c : i,
      g = Fe(t, r, u * Math.cos(c * is), h);
    return { center: d, circleTangency: p, lineTangency: g, theta: c };
  },
  Nw = (e) => {
    var {
        cx: t,
        cy: r,
        innerRadius: n,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      l = ZA(a, o),
      s = a + l,
      u = Fe(t, r, i, a),
      c = Fe(t, r, i, s),
      f = "M "
        .concat(u.x, ",")
        .concat(
          u.y,
          `
    A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
    `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(a > s),
          `,
    `,
        )
        .concat(c.x, ",")
        .concat(
          c.y,
          `
  `,
        );
    if (n > 0) {
      var d = Fe(t, r, n, a),
        p = Fe(t, r, n, s);
      f += "L "
        .concat(p.x, ",")
        .concat(
          p.y,
          `
            A `,
        )
        .concat(n, ",")
        .concat(
          n,
          `,0,
            `,
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(a <= s),
          `,
            `,
        )
        .concat(d.x, ",")
        .concat(d.y, " Z");
    } else f += "L ".concat(t, ",").concat(r, " Z");
    return f;
  },
  JA = (e) => {
    var {
        cx: t,
        cy: r,
        innerRadius: n,
        outerRadius: i,
        cornerRadius: a,
        forceCornerRadius: o,
        cornerIsExternal: l,
        startAngle: s,
        endAngle: u,
      } = e,
      c = $t(u - s),
      {
        circleTangency: f,
        lineTangency: d,
        theta: p,
      } = il({
        cx: t,
        cy: r,
        radius: i,
        angle: s,
        sign: c,
        cornerRadius: a,
        cornerIsExternal: l,
      }),
      {
        circleTangency: h,
        lineTangency: g,
        theta: y,
      } = il({
        cx: t,
        cy: r,
        radius: i,
        angle: u,
        sign: -c,
        cornerRadius: a,
        cornerIsExternal: l,
      }),
      m = l ? Math.abs(s - u) : Math.abs(s - u) - p - y;
    if (m < 0)
      return o
        ? "M "
            .concat(d.x, ",")
            .concat(
              d.y,
              `
        a`,
            )
            .concat(a, ",")
            .concat(a, ",0,0,1,")
            .concat(
              a * 2,
              `,0
        a`,
            )
            .concat(a, ",")
            .concat(a, ",0,0,1,")
            .concat(
              -a * 2,
              `,0
      `,
            )
        : Nw({
            cx: t,
            cy: r,
            innerRadius: n,
            outerRadius: i,
            startAngle: s,
            endAngle: u,
          });
    var v = "M "
      .concat(d.x, ",")
      .concat(
        d.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(f.x, ",")
      .concat(
        f.y,
        `
    A`,
      )
      .concat(i, ",")
      .concat(i, ",0,")
      .concat(+(m > 180), ",")
      .concat(+(c < 0), ",")
      .concat(h.x, ",")
      .concat(
        h.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(g.x, ",")
      .concat(
        g.y,
        `
  `,
      );
    if (n > 0) {
      var {
          circleTangency: x,
          lineTangency: S,
          theta: P,
        } = il({
          cx: t,
          cy: r,
          radius: n,
          angle: s,
          sign: c,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: l,
        }),
        {
          circleTangency: E,
          lineTangency: O,
          theta: k,
        } = il({
          cx: t,
          cy: r,
          radius: n,
          angle: u,
          sign: -c,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: l,
        }),
        _ = l ? Math.abs(s - u) : Math.abs(s - u) - P - k;
      if (_ < 0 && a === 0)
        return "".concat(v, "L").concat(t, ",").concat(r, "Z");
      v += "L"
        .concat(O.x, ",")
        .concat(
          O.y,
          `
      A`,
        )
        .concat(a, ",")
        .concat(a, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(E.x, ",")
        .concat(
          E.y,
          `
      A`,
        )
        .concat(n, ",")
        .concat(n, ",0,")
        .concat(+(_ > 180), ",")
        .concat(+(c > 0), ",")
        .concat(x.x, ",")
        .concat(
          x.y,
          `
      A`,
        )
        .concat(a, ",")
        .concat(a, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(S.x, ",")
        .concat(S.y, "Z");
    } else v += "L".concat(t, ",").concat(r, "Z");
    return v;
  },
  ej = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  tj = (e) => {
    var t = ni(e, ej),
      {
        cx: r,
        cy: n,
        innerRadius: i,
        outerRadius: a,
        cornerRadius: o,
        forceCornerRadius: l,
        cornerIsExternal: s,
        startAngle: u,
        endAngle: c,
        className: f,
      } = t;
    if (a < i || u === c) return null;
    var d = se("recharts-sector", f),
      p = a - i,
      h = cn(o, p, 0, !0),
      g;
    return (
      h > 0 && Math.abs(u - c) < 360
        ? (g = JA({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            cornerRadius: Math.min(h, p / 2),
            forceCornerRadius: l,
            cornerIsExternal: s,
            startAngle: u,
            endAngle: c,
          }))
        : (g = Nw({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: u,
            endAngle: c,
          })),
      b.createElement("path", Qf({}, ue(t, !0), { className: d, d: g }))
    );
  };
function rj(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical")
    ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var { cx: l, cy: s, innerRadius: u, outerRadius: c, angle: f } = t,
        d = Fe(l, s, u, f),
        p = Fe(l, s, c, f);
      ((n = d.x), (i = d.y), (a = p.x), (o = p.y));
    } else return Tw(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
var Mw = {},
  Dw = {},
  Iw = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Np;
  function r(n) {
    return t.isSymbol(n) ? NaN : Number(n);
  }
  e.toNumber = r;
})(Iw);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Iw;
  function r(n) {
    return n
      ? ((n = t.toNumber(n)),
        n === 1 / 0 || n === -1 / 0
          ? (n < 0 ? -1 : 1) * Number.MAX_VALUE
          : n === n
            ? n
            : 0)
      : n === 0
        ? n
        : 0;
  }
  e.toFinite = r;
})(Dw);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Mp,
    r = Dw;
  function n(i, a, o) {
    (o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0),
      (i = r.toFinite(i)),
      a === void 0 ? ((a = i), (i = 0)) : (a = r.toFinite(a)),
      (o = o === void 0 ? (i < a ? 1 : -1) : r.toFinite(o)));
    const l = Math.max(Math.ceil((a - i) / (o || 1)), 0),
      s = new Array(l);
    for (let u = 0; u < l; u++) ((s[u] = i), (i += o));
    return s;
  }
  e.range = n;
})(Mw);
var nj = Mw.range;
const Lw = Mr(nj);
function ln(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function ij(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Kp(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = ln), (r = (l, s) => ln(e(l), s)), (n = (l, s) => e(l) - s))
    : ((t = e === ln || e === ij ? e : aj), (r = e), (n = e));
  function i(l, s, u = 0, c = l.length) {
    if (u < c) {
      if (t(s, s) !== 0) return c;
      do {
        const f = (u + c) >>> 1;
        r(l[f], s) < 0 ? (u = f + 1) : (c = f);
      } while (u < c);
    }
    return u;
  }
  function a(l, s, u = 0, c = l.length) {
    if (u < c) {
      if (t(s, s) !== 0) return c;
      do {
        const f = (u + c) >>> 1;
        r(l[f], s) <= 0 ? (u = f + 1) : (c = f);
      } while (u < c);
    }
    return u;
  }
  function o(l, s, u = 0, c = l.length) {
    const f = i(l, s, u, c - 1);
    return f > u && n(l[f - 1], s) > -n(l[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function aj() {
  return 0;
}
function $w(e) {
  return e === null ? NaN : +e;
}
function* oj(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const lj = Kp(ln),
  So = lj.right;
Kp($w).center;
class Zv extends Map {
  constructor(t, r = cj) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Jv(this, t));
  }
  has(t) {
    return super.has(Jv(this, t));
  }
  set(t, r) {
    return super.set(sj(this, t), r);
  }
  delete(t) {
    return super.delete(uj(this, t));
  }
}
function Jv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function sj({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function uj({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function cj(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function fj(e = ln) {
  if (e === ln) return Rw;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Rw(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const dj = Math.sqrt(50),
  pj = Math.sqrt(10),
  hj = Math.sqrt(2);
function cs(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= dj ? 10 : a >= pj ? 5 : a >= hj ? 2 : 1;
  let l, s, u;
  return (
    i < 0
      ? ((u = Math.pow(10, -i) / o),
        (l = Math.round(e * u)),
        (s = Math.round(t * u)),
        l / u < e && ++l,
        s / u > t && --s,
        (u = -u))
      : ((u = Math.pow(10, i) * o),
        (l = Math.round(e / u)),
        (s = Math.round(t / u)),
        l * u < e && ++l,
        s * u > t && --s),
    s < l && 0.5 <= r && r < 2 ? cs(e, t, r * 2) : [l, s, u]
  );
}
function Zf(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? cs(t, e, r) : cs(e, t, r);
  if (!(a >= i)) return [];
  const l = a - i + 1,
    s = new Array(l);
  if (n)
    if (o < 0) for (let u = 0; u < l; ++u) s[u] = (a - u) / -o;
    else for (let u = 0; u < l; ++u) s[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < l; ++u) s[u] = (i + u) / -o;
  else for (let u = 0; u < l; ++u) s[u] = (i + u) * o;
  return s;
}
function Jf(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), cs(e, t, r)[2]);
}
function ed(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? Jf(t, e, r) : Jf(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function eg(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function tg(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function zw(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? Rw : fj(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1,
        u = t - r + 1,
        c = Math.log(s),
        f = 0.5 * Math.exp((2 * c) / 3),
        d = 0.5 * Math.sqrt((c * f * (s - f)) / s) * (u - s / 2 < 0 ? -1 : 1),
        p = Math.max(r, Math.floor(t - (u * f) / s + d)),
        h = Math.min(n, Math.floor(t + ((s - u) * f) / s + d));
      zw(e, t, p, h, i);
    }
    const a = e[t];
    let o = r,
      l = n;
    for (ya(e, r, t), i(e[n], a) > 0 && ya(e, r, n); o < l; ) {
      for (ya(e, o, l), ++o, --l; i(e[o], a) < 0; ) ++o;
      for (; i(e[l], a) > 0; ) --l;
    }
    (i(e[r], a) === 0 ? ya(e, r, l) : (++l, ya(e, l, n)),
      l <= t && (r = l + 1),
      t <= l && (n = l - 1));
  }
  return e;
}
function ya(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function mj(e, t, r) {
  if (((e = Float64Array.from(oj(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return tg(e);
    if (t >= 1) return eg(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = eg(zw(e, a).subarray(0, a + 1)),
      l = tg(e.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function vj(e, t, r = $w) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      l = +r(e[a + 1], a + 1, e);
    return o + (l - o) * (i - a);
  }
}
function gj(e, t, r) {
  ((e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;
  )
    a[n] = e + n * r;
  return a;
}
function Yt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Rr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const td = Symbol("implicit");
function Hp() {
  var e = new Zv(),
    t = [],
    r = [],
    n = td;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== td) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Zv()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Hp(t, r).unknown(n);
    }),
    Yt.apply(i, arguments),
    i
  );
}
function Vp() {
  var e = Hp().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    l = !1,
    s = 0,
    u = 0,
    c = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length,
      p = i < n,
      h = p ? i : n,
      g = p ? n : i;
    ((a = (g - h) / Math.max(1, d - s + u * 2)),
      l && (a = Math.floor(a)),
      (h += (g - h - a * (d - s)) * c),
      (o = a * (1 - s)),
      l && ((h = Math.round(h)), (o = Math.round(o))));
    var y = gj(d).map(function (m) {
      return h + a * m;
    });
    return r(p ? y.reverse() : y);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), f()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([n, i] = d), (n = +n), (i = +i), f())
        : [n, i];
    }),
    (e.rangeRound = function (d) {
      return (([n, i] = d), (n = +n), (i = +i), (l = !0), f());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (d) {
      return arguments.length ? ((l = !!d), f()) : l;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((s = Math.min(1, (u = +d))), f()) : s;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((s = Math.min(1, d)), f()) : s;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((u = +d), f()) : u;
    }),
    (e.align = function (d) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, d))), f()) : c;
    }),
    (e.copy = function () {
      return Vp(t(), [n, i]).round(l).paddingInner(s).paddingOuter(u).align(c);
    }),
    Yt.apply(f(), arguments)
  );
}
function Fw(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Fw(t());
    }),
    e
  );
}
function yj() {
  return Fw(Vp.apply(null, arguments).paddingInner(1));
}
function Yp(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function Bw(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Po() {}
var oo = 0.7,
  fs = 1 / oo,
  Di = "\\s*([+-]?\\d+)\\s*",
  lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  fr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  xj = /^#([0-9a-f]{3,8})$/,
  wj = new RegExp(`^rgb\\(${Di},${Di},${Di}\\)$`),
  bj = new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`),
  Sj = new RegExp(`^rgba\\(${Di},${Di},${Di},${lo}\\)$`),
  Pj = new RegExp(`^rgba\\(${fr},${fr},${fr},${lo}\\)$`),
  Ej = new RegExp(`^hsl\\(${lo},${fr},${fr}\\)$`),
  Oj = new RegExp(`^hsla\\(${lo},${fr},${fr},${lo}\\)$`),
  rg = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Yp(Po, so, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ng,
  formatHex: ng,
  formatHex8: kj,
  formatHsl: _j,
  formatRgb: ig,
  toString: ig,
});
function ng() {
  return this.rgb().formatHex();
}
function kj() {
  return this.rgb().formatHex8();
}
function _j() {
  return Uw(this).formatHsl();
}
function ig() {
  return this.rgb().formatRgb();
}
function so(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = xj.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? ag(t)
          : r === 3
            ? new ut(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? al(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? al(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = wj.exec(e))
        ? new ut(t[1], t[2], t[3], 1)
        : (t = bj.exec(e))
          ? new ut(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Sj.exec(e))
            ? al(t[1], t[2], t[3], t[4])
            : (t = Pj.exec(e))
              ? al(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = Ej.exec(e))
                ? sg(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Oj.exec(e))
                  ? sg(t[1], t[2] / 100, t[3] / 100, t[4])
                  : rg.hasOwnProperty(e)
                    ? ag(rg[e])
                    : e === "transparent"
                      ? new ut(NaN, NaN, NaN, 0)
                      : null
  );
}
function ag(e) {
  return new ut((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function al(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new ut(e, t, r, n));
}
function Cj(e) {
  return (
    e instanceof Po || (e = so(e)),
    e ? ((e = e.rgb()), new ut(e.r, e.g, e.b, e.opacity)) : new ut()
  );
}
function rd(e, t, r, n) {
  return arguments.length === 1 ? Cj(e) : new ut(e, t, r, n ?? 1);
}
function ut(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
Yp(
  ut,
  rd,
  Bw(Po, {
    brighter(e) {
      return (
        (e = e == null ? fs : Math.pow(fs, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? oo : Math.pow(oo, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ut(Un(this.r), Un(this.g), Un(this.b), ds(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: og,
    formatHex: og,
    formatHex8: Aj,
    formatRgb: lg,
    toString: lg,
  }),
);
function og() {
  return `#${In(this.r)}${In(this.g)}${In(this.b)}`;
}
function Aj() {
  return `#${In(this.r)}${In(this.g)}${In(this.b)}${In((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function lg() {
  const e = ds(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Un(this.r)}, ${Un(this.g)}, ${Un(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ds(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Un(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function In(e) {
  return ((e = Un(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function sg(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new er(e, t, r, n)
  );
}
function Uw(e) {
  if (e instanceof er) return new er(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Po || (e = so(e)), !e)) return new er();
  if (e instanceof er) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    l = a - i,
    s = (a + i) / 2;
  return (
    l
      ? (t === a
          ? (o = (r - n) / l + (r < n) * 6)
          : r === a
            ? (o = (n - t) / l + 2)
            : (o = (t - r) / l + 4),
        (l /= s < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (l = s > 0 && s < 1 ? 0 : o),
    new er(o, l, s, e.opacity)
  );
}
function jj(e, t, r, n) {
  return arguments.length === 1 ? Uw(e) : new er(e, t, r, n ?? 1);
}
function er(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
Yp(
  er,
  jj,
  Bw(Po, {
    brighter(e) {
      return (
        (e = e == null ? fs : Math.pow(fs, e)),
        new er(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? oo : Math.pow(oo, e)),
        new er(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new ut(
        Sc(e >= 240 ? e - 240 : e + 120, i, n),
        Sc(e, i, n),
        Sc(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new er(ug(this.h), ol(this.s), ol(this.l), ds(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = ds(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${ug(this.h)}, ${ol(this.s) * 100}%, ${ol(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function ug(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function ol(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Sc(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Gp = (e) => () => e;
function Tj(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function Nj(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function Mj(e) {
  return (e = +e) == 1
    ? Ww
    : function (t, r) {
        return r - t ? Nj(t, r, e) : Gp(isNaN(t) ? r : t);
      };
}
function Ww(e, t) {
  var r = t - e;
  return r ? Tj(e, r) : Gp(isNaN(e) ? t : e);
}
const cg = (function e(t) {
  var r = Mj(t);
  function n(i, a) {
    var o = r((i = rd(i)).r, (a = rd(a)).r),
      l = r(i.g, a.g),
      s = r(i.b, a.b),
      u = Ww(i.opacity, a.opacity);
    return function (c) {
      return (
        (i.r = o(c)),
        (i.g = l(c)),
        (i.b = s(c)),
        (i.opacity = u(c)),
        i + ""
      );
    };
  }
  return ((n.gamma = e), n);
})(1);
function Dj(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function Ij(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Lj(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Ji(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (l) {
    for (o = 0; o < n; ++o) a[o] = i[o](l);
    return a;
  };
}
function $j(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function ps(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function Rj(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = Ji(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var nd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Pc = new RegExp(nd.source, "g");
function zj(e) {
  return function () {
    return e;
  };
}
function Fj(e) {
  return function (t) {
    return e(t) + "";
  };
}
function Bj(e, t) {
  var r = (nd.lastIndex = Pc.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    l = [],
    s = [];
  for (e = e + "", t = t + ""; (n = nd.exec(e)) && (i = Pc.exec(t)); )
    ((a = i.index) > r &&
      ((a = t.slice(r, a)), l[o] ? (l[o] += a) : (l[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? l[o]
          ? (l[o] += i)
          : (l[++o] = i)
        : ((l[++o] = null), s.push({ i: o, x: ps(n, i) })),
      (r = Pc.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), l[o] ? (l[o] += a) : (l[++o] = a)),
    l.length < 2
      ? s[0]
        ? Fj(s[0].x)
        : zj(t)
      : ((t = s.length),
        function (u) {
          for (var c = 0, f; c < t; ++c) l[(f = s[c]).i] = f.x(u);
          return l.join("");
        })
  );
}
function Ji(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Gp(t)
    : (r === "number"
        ? ps
        : r === "string"
          ? (n = so(t))
            ? ((t = n), cg)
            : Bj
          : t instanceof so
            ? cg
            : t instanceof Date
              ? $j
              : Ij(t)
                ? Dj
                : Array.isArray(t)
                  ? Lj
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? Rj
                    : ps)(e, t);
}
function qp(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function Uj(e, t) {
  t === void 0 && ((t = e), (e = Ji));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;
  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[l](o - l);
  };
}
function Wj(e) {
  return function () {
    return e;
  };
}
function hs(e) {
  return +e;
}
var fg = [0, 1];
function Je(e) {
  return e;
}
function id(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : Wj(isNaN(t) ? NaN : 0.5);
}
function Kj(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Hj(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = id(i, n)), (a = r(o, a))) : ((n = id(n, i)), (a = r(a, o))),
    function (l) {
      return a(n(l));
    }
  );
}
function Vj(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;
  )
    ((i[o] = id(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (l) {
    var s = So(e, l, 1, n) - 1;
    return a[s](i[s](l));
  };
}
function Eo(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function xu() {
  var e = fg,
    t = fg,
    r = Ji,
    n,
    i,
    a,
    o = Je,
    l,
    s,
    u;
  function c() {
    var d = Math.min(e.length, t.length);
    return (
      o !== Je && (o = Kj(e[0], e[d - 1])),
      (l = d > 2 ? Vj : Hj),
      (s = u = null),
      f
    );
  }
  function f(d) {
    return d == null || isNaN((d = +d))
      ? a
      : (s || (s = l(e.map(n), t, r)))(n(o(d)));
  }
  return (
    (f.invert = function (d) {
      return o(i((u || (u = l(t, e.map(n), ps)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, hs)), c()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), c()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return ((t = Array.from(d)), (r = qp), c());
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : Je), c()) : o !== Je;
    }),
    (f.interpolate = function (d) {
      return arguments.length ? ((r = d), c()) : r;
    }),
    (f.unknown = function (d) {
      return arguments.length ? ((a = d), f) : a;
    }),
    function (d, p) {
      return ((n = d), (i = p), c());
    }
  );
}
function Xp() {
  return xu()(Je, Je);
}
function Yj(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function ms(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Hi(e) {
  return ((e = ms(Math.abs(e))), e ? e[1] : NaN);
}
function Gj(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, l = e[0], s = 0;
      i > 0 &&
      l > 0 &&
      (s + l + 1 > n && (l = Math.max(1, n - s)),
      a.push(r.substring((i -= l), i + l)),
      !((s += l + 1) > n));
    )
      l = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function qj(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var Xj =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function uo(e) {
  if (!(t = Xj.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Qp({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
uo.prototype = Qp.prototype;
function Qp(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
Qp.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function Qj(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Kw;
function Zj(e, t) {
  var r = ms(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (Kw = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + ms(e, Math.max(0, t + a - 1))[0];
}
function dg(e, t) {
  var r = ms(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const pg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Yj,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => dg(e * 100, t),
  r: dg,
  s: Zj,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function hg(e) {
  return e;
}
var mg = Array.prototype.map,
  vg = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function Jj(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? hg
        : Gj(mg.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? hg : qj(mg.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    l = e.minus === void 0 ? "−" : e.minus + "",
    s = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = uo(f);
    var d = f.fill,
      p = f.align,
      h = f.sign,
      g = f.symbol,
      y = f.zero,
      m = f.width,
      v = f.comma,
      x = f.precision,
      S = f.trim,
      P = f.type;
    (P === "n"
      ? ((v = !0), (P = "g"))
      : pg[P] || (x === void 0 && (x = 12), (S = !0), (P = "g")),
      (y || (d === "0" && p === "=")) && ((y = !0), (d = "0"), (p = "=")));
    var E =
        g === "$"
          ? r
          : g === "#" && /[boxX]/.test(P)
            ? "0" + P.toLowerCase()
            : "",
      O = g === "$" ? n : /[%p]/.test(P) ? o : "",
      k = pg[P],
      _ = /[defgprs%]/.test(P);
    x =
      x === void 0
        ? 6
        : /[gprs]/.test(P)
          ? Math.max(1, Math.min(21, x))
          : Math.max(0, Math.min(20, x));
    function j(T) {
      var L = E,
        Y = O,
        F,
        D,
        V;
      if (P === "c") ((Y = k(T) + Y), (T = ""));
      else {
        T = +T;
        var B = T < 0 || 1 / T < 0;
        if (
          ((T = isNaN(T) ? s : k(Math.abs(T), x)),
          S && (T = Qj(T)),
          B && +T == 0 && h !== "+" && (B = !1),
          (L = (B ? (h === "(" ? h : l) : h === "-" || h === "(" ? "" : h) + L),
          (Y =
            (P === "s" ? vg[8 + Kw / 3] : "") +
            Y +
            (B && h === "(" ? ")" : "")),
          _)
        ) {
          for (F = -1, D = T.length; ++F < D; )
            if (((V = T.charCodeAt(F)), 48 > V || V > 57)) {
              ((Y = (V === 46 ? i + T.slice(F + 1) : T.slice(F)) + Y),
                (T = T.slice(0, F)));
              break;
            }
        }
      }
      v && !y && (T = t(T, 1 / 0));
      var C = L.length + T.length + Y.length,
        M = C < m ? new Array(m - C + 1).join(d) : "";
      switch (
        (v && y && ((T = t(M + T, M.length ? m - Y.length : 1 / 0)), (M = "")),
        p)
      ) {
        case "<":
          T = L + T + Y + M;
          break;
        case "=":
          T = L + M + T + Y;
          break;
        case "^":
          T = M.slice(0, (C = M.length >> 1)) + L + T + Y + M.slice(C);
          break;
        default:
          T = M + L + T + Y;
          break;
      }
      return a(T);
    }
    return (
      (j.toString = function () {
        return f + "";
      }),
      j
    );
  }
  function c(f, d) {
    var p = u(((f = uo(f)), (f.type = "f"), f)),
      h = Math.max(-8, Math.min(8, Math.floor(Hi(d) / 3))) * 3,
      g = Math.pow(10, -h),
      y = vg[8 + h / 3];
    return function (m) {
      return p(g * m) + y;
    };
  }
  return { format: u, formatPrefix: c };
}
var ll, Zp, Hw;
eT({ thousands: ",", grouping: [3], currency: ["$", ""] });
function eT(e) {
  return ((ll = Jj(e)), (Zp = ll.format), (Hw = ll.formatPrefix), ll);
}
function tT(e) {
  return Math.max(0, -Hi(Math.abs(e)));
}
function rT(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Hi(t) / 3))) * 3 - Hi(Math.abs(e)),
  );
}
function nT(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, Hi(t) - Hi(e)) + 1
  );
}
function Vw(e, t, r, n) {
  var i = ed(e, t, r),
    a;
  switch (((n = uo(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = rT(i, o))) && (n.precision = a),
        Hw(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = nT(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = tT(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Zp(n);
}
function gn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return Zf(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return Vw(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        l = n[a],
        s,
        u,
        c = 10;
      for (
        l < o && ((u = o), (o = l), (l = u), (u = i), (i = a), (a = u));
        c-- > 0;
      ) {
        if (((u = Jf(o, l, r)), u === s)) return ((n[i] = o), (n[a] = l), t(n));
        if (u > 0) ((o = Math.floor(o / u) * u), (l = Math.ceil(l / u) * u));
        else if (u < 0)
          ((o = Math.ceil(o * u) / u), (l = Math.floor(l * u) / u));
        else break;
        s = u;
      }
      return e;
    }),
    e
  );
}
function Yw() {
  var e = Xp();
  return (
    (e.copy = function () {
      return Eo(e, Yw());
    }),
    Yt.apply(e, arguments),
    gn(e)
  );
}
function Gw(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, hs)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Gw(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, hs) : [0, 1]),
    gn(r)
  );
}
function qw(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function gg(e) {
  return Math.log(e);
}
function yg(e) {
  return Math.exp(e);
}
function iT(e) {
  return -Math.log(-e);
}
function aT(e) {
  return -Math.exp(-e);
}
function oT(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function lT(e) {
  return e === 10 ? oT : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function sT(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function xg(e) {
  return (t, r) => -e(-t, r);
}
function Jp(e) {
  const t = e(gg, yg),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = sT(n)),
      (a = lT(n)),
      r()[0] < 0 ? ((i = xg(i)), (a = xg(a)), e(iT, aT)) : e(gg, yg),
      t
    );
  }
  return (
    (t.base = function (l) {
      return arguments.length ? ((n = +l), o()) : n;
    }),
    (t.domain = function (l) {
      return arguments.length ? (r(l), o()) : r();
    }),
    (t.ticks = (l) => {
      const s = r();
      let u = s[0],
        c = s[s.length - 1];
      const f = c < u;
      f && ([u, c] = [c, u]);
      let d = i(u),
        p = i(c),
        h,
        g;
      const y = l == null ? 10 : +l;
      let m = [];
      if (!(n % 1) && p - d < y) {
        if (((d = Math.floor(d)), (p = Math.ceil(p)), u > 0)) {
          for (; d <= p; ++d)
            for (h = 1; h < n; ++h)
              if (((g = d < 0 ? h / a(-d) : h * a(d)), !(g < u))) {
                if (g > c) break;
                m.push(g);
              }
        } else
          for (; d <= p; ++d)
            for (h = n - 1; h >= 1; --h)
              if (((g = d > 0 ? h / a(-d) : h * a(d)), !(g < u))) {
                if (g > c) break;
                m.push(g);
              }
        m.length * 2 < y && (m = Zf(u, c, y));
      } else m = Zf(d, p, Math.min(p - d, y)).map(a);
      return f ? m.reverse() : m;
    }),
    (t.tickFormat = (l, s) => {
      if (
        (l == null && (l = 10),
        s == null && (s = n === 10 ? "s" : ","),
        typeof s != "function" &&
          (!(n % 1) && (s = uo(s)).precision == null && (s.trim = !0),
          (s = Zp(s))),
        l === 1 / 0)
      )
        return s;
      const u = Math.max(1, (n * l) / t.ticks().length);
      return (c) => {
        let f = c / a(Math.round(i(c)));
        return (f * n < n - 0.5 && (f *= n), f <= u ? s(c) : "");
      };
    }),
    (t.nice = () =>
      r(
        qw(r(), {
          floor: (l) => a(Math.floor(i(l))),
          ceil: (l) => a(Math.ceil(i(l))),
        }),
      )),
    t
  );
}
function Xw() {
  const e = Jp(xu()).domain([1, 10]);
  return (
    (e.copy = () => Eo(e, Xw()).base(e.base())),
    Yt.apply(e, arguments),
    e
  );
}
function wg(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function bg(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function eh(e) {
  var t = 1,
    r = e(wg(t), bg(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(wg((t = +n)), bg(t)) : t;
    }),
    gn(r)
  );
}
function Qw() {
  var e = eh(xu());
  return (
    (e.copy = function () {
      return Eo(e, Qw()).constant(e.constant());
    }),
    Yt.apply(e, arguments)
  );
}
function Sg(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function uT(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function cT(e) {
  return e < 0 ? -e * e : e * e;
}
function th(e) {
  var t = e(Je, Je),
    r = 1;
  function n() {
    return r === 1 ? e(Je, Je) : r === 0.5 ? e(uT, cT) : e(Sg(r), Sg(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    gn(t)
  );
}
function rh() {
  var e = th(xu());
  return (
    (e.copy = function () {
      return Eo(e, rh()).exponent(e.exponent());
    }),
    Yt.apply(e, arguments),
    e
  );
}
function fT() {
  return rh.apply(null, arguments).exponent(0.5);
}
function Pg(e) {
  return Math.sign(e) * e * e;
}
function dT(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Zw() {
  var e = Xp(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = dT(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(Pg(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, hs)).map(Pg)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Zw(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Yt.apply(i, arguments),
    gn(i)
  );
}
function Jw() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = vj(e, o / l);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[So(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var l = t.indexOf(o);
      return l < 0
        ? [NaN, NaN]
        : [l > 0 ? r[l - 1] : e[0], l < r.length ? r[l] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let l of o) l != null && !isNaN((l = +l)) && e.push(l);
      return (e.sort(ln), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return Jw().domain(e).range(t).unknown(n);
    }),
    Yt.apply(a, arguments)
  );
}
function eb() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(s) {
    return s != null && s <= s ? i[So(n, s, 0, r)] : a;
  }
  function l() {
    var s = -1;
    for (n = new Array(r); ++s < r; )
      n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (s) {
      return arguments.length
        ? (([e, t] = s), (e = +e), (t = +t), l())
        : [e, t];
    }),
    (o.range = function (s) {
      return arguments.length
        ? ((r = (i = Array.from(s)).length - 1), l())
        : i.slice();
    }),
    (o.invertExtent = function (s) {
      var u = i.indexOf(s);
      return u < 0
        ? [NaN, NaN]
        : u < 1
          ? [e, n[0]]
          : u >= r
            ? [n[r - 1], t]
            : [n[u - 1], n[u]];
    }),
    (o.unknown = function (s) {
      return (arguments.length && (a = s), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return eb().domain([e, t]).range(i).unknown(a);
    }),
    Yt.apply(gn(o), arguments)
  );
}
function tb() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[So(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return tb().domain(e).range(t).unknown(r);
    }),
    Yt.apply(i, arguments)
  );
}
const Ec = new Date(),
  Oc = new Date();
function Ce(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        l = i.ceil(a);
      return a - o < l - a ? o : l;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)),
      a
    )),
    (i.range = (a, o, l) => {
      const s = [];
      if (
        ((a = i.ceil(a)),
        (l = l == null ? 1 : Math.floor(l)),
        !(a < o) || !(l > 0))
      )
        return s;
      let u;
      do (s.push((u = new Date(+a))), t(a, l), e(a));
      while (u < a && a < o);
      return s;
    }),
    (i.filter = (a) =>
      Ce(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, l) => {
          if (o >= o)
            if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --l >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        Ec.setTime(+a),
        Oc.setTime(+o),
        e(Ec),
        e(Oc),
        Math.floor(r(Ec, Oc))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const vs = Ce(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
vs.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Ce(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : vs
);
vs.range;
const wr = 1e3,
  Rt = wr * 60,
  br = Rt * 60,
  jr = br * 24,
  nh = jr * 7,
  Eg = jr * 30,
  kc = jr * 365,
  Ln = Ce(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * wr);
    },
    (e, t) => (t - e) / wr,
    (e) => e.getUTCSeconds(),
  );
Ln.range;
const ih = Ce(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * wr);
  },
  (e, t) => {
    e.setTime(+e + t * Rt);
  },
  (e, t) => (t - e) / Rt,
  (e) => e.getMinutes(),
);
ih.range;
const ah = Ce(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Rt);
  },
  (e, t) => (t - e) / Rt,
  (e) => e.getUTCMinutes(),
);
ah.range;
const oh = Ce(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * wr - e.getMinutes() * Rt,
    );
  },
  (e, t) => {
    e.setTime(+e + t * br);
  },
  (e, t) => (t - e) / br,
  (e) => e.getHours(),
);
oh.range;
const lh = Ce(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * br);
  },
  (e, t) => (t - e) / br,
  (e) => e.getUTCHours(),
);
lh.range;
const Oo = Ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Rt) / jr,
  (e) => e.getDate() - 1,
);
Oo.range;
const wu = Ce(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => e.getUTCDate() - 1,
);
wu.range;
const rb = Ce(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => Math.floor(e / jr),
);
rb.range;
function ii(e) {
  return Ce(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Rt) / nh,
  );
}
const bu = ii(0),
  gs = ii(1),
  pT = ii(2),
  hT = ii(3),
  Vi = ii(4),
  mT = ii(5),
  vT = ii(6);
bu.range;
gs.range;
pT.range;
hT.range;
Vi.range;
mT.range;
vT.range;
function ai(e) {
  return Ce(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / nh,
  );
}
const Su = ai(0),
  ys = ai(1),
  gT = ai(2),
  yT = ai(3),
  Yi = ai(4),
  xT = ai(5),
  wT = ai(6);
Su.range;
ys.range;
gT.range;
yT.range;
Yi.range;
xT.range;
wT.range;
const sh = Ce(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
sh.range;
const uh = Ce(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
uh.range;
const Tr = Ce(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Tr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ce(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
Tr.range;
const Nr = Ce(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
Nr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ce(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
Nr.range;
function nb(e, t, r, n, i, a) {
  const o = [
    [Ln, 1, wr],
    [Ln, 5, 5 * wr],
    [Ln, 15, 15 * wr],
    [Ln, 30, 30 * wr],
    [a, 1, Rt],
    [a, 5, 5 * Rt],
    [a, 15, 15 * Rt],
    [a, 30, 30 * Rt],
    [i, 1, br],
    [i, 3, 3 * br],
    [i, 6, 6 * br],
    [i, 12, 12 * br],
    [n, 1, jr],
    [n, 2, 2 * jr],
    [r, 1, nh],
    [t, 1, Eg],
    [t, 3, 3 * Eg],
    [e, 1, kc],
  ];
  function l(u, c, f) {
    const d = c < u;
    d && ([u, c] = [c, u]);
    const p = f && typeof f.range == "function" ? f : s(u, c, f),
      h = p ? p.range(u, +c + 1) : [];
    return d ? h.reverse() : h;
  }
  function s(u, c, f) {
    const d = Math.abs(c - u) / f,
      p = Kp(([, , y]) => y).right(o, d);
    if (p === o.length) return e.every(ed(u / kc, c / kc, f));
    if (p === 0) return vs.every(Math.max(ed(u, c, f), 1));
    const [h, g] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return h.every(g);
  }
  return [l, s];
}
const [bT, ST] = nb(Nr, uh, Su, rb, lh, ah),
  [PT, ET] = nb(Tr, sh, bu, Oo, oh, ih);
function _c(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Cc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function OT(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    l = e.months,
    s = e.shortMonths,
    u = wa(i),
    c = ba(i),
    f = wa(a),
    d = ba(a),
    p = wa(o),
    h = ba(o),
    g = wa(l),
    y = ba(l),
    m = wa(s),
    v = ba(s),
    x = {
      a: B,
      A: C,
      b: M,
      B: W,
      c: null,
      d: jg,
      e: jg,
      f: GT,
      g: iN,
      G: oN,
      H: HT,
      I: VT,
      j: YT,
      L: ib,
      m: qT,
      M: XT,
      p: G,
      q: $,
      Q: Mg,
      s: Dg,
      S: QT,
      u: ZT,
      U: JT,
      V: eN,
      w: tN,
      W: rN,
      x: null,
      X: null,
      y: nN,
      Y: aN,
      Z: lN,
      "%": Ng,
    },
    S = {
      a: fe,
      A: Le,
      b: Ae,
      B: it,
      c: null,
      d: Tg,
      e: Tg,
      f: fN,
      g: bN,
      G: PN,
      H: sN,
      I: uN,
      j: cN,
      L: ob,
      m: dN,
      M: pN,
      p: bn,
      q: N2,
      Q: Mg,
      s: Dg,
      S: hN,
      u: mN,
      U: vN,
      V: gN,
      w: yN,
      W: xN,
      x: null,
      X: null,
      y: wN,
      Y: SN,
      Z: EN,
      "%": Ng,
    },
    P = {
      a: j,
      A: T,
      b: L,
      B: Y,
      c: F,
      d: Cg,
      e: Cg,
      f: BT,
      g: _g,
      G: kg,
      H: Ag,
      I: Ag,
      j: $T,
      L: FT,
      m: LT,
      M: RT,
      p: _,
      q: IT,
      Q: WT,
      s: KT,
      S: zT,
      u: jT,
      U: TT,
      V: NT,
      w: AT,
      W: MT,
      x: D,
      X: V,
      y: _g,
      Y: kg,
      Z: DT,
      "%": UT,
    };
  ((x.x = E(r, x)),
    (x.X = E(n, x)),
    (x.c = E(t, x)),
    (S.x = E(r, S)),
    (S.X = E(n, S)),
    (S.c = E(t, S)));
  function E(U, X) {
    return function (Z) {
      var I = [],
        at = -1,
        ie = 0,
        mt = U.length,
        vt,
        Sn,
        Gh;
      for (Z instanceof Date || (Z = new Date(+Z)); ++at < mt; )
        U.charCodeAt(at) === 37 &&
          (I.push(U.slice(ie, at)),
          (Sn = Og[(vt = U.charAt(++at))]) != null
            ? (vt = U.charAt(++at))
            : (Sn = vt === "e" ? " " : "0"),
          (Gh = X[vt]) && (vt = Gh(Z, Sn)),
          I.push(vt),
          (ie = at + 1));
      return (I.push(U.slice(ie, at)), I.join(""));
    };
  }
  function O(U, X) {
    return function (Z) {
      var I = xa(1900, void 0, 1),
        at = k(I, U, (Z += ""), 0),
        ie,
        mt;
      if (at != Z.length) return null;
      if ("Q" in I) return new Date(I.Q);
      if ("s" in I) return new Date(I.s * 1e3 + ("L" in I ? I.L : 0));
      if (
        (X && !("Z" in I) && (I.Z = 0),
        "p" in I && (I.H = (I.H % 12) + I.p * 12),
        I.m === void 0 && (I.m = "q" in I ? I.q : 0),
        "V" in I)
      ) {
        if (I.V < 1 || I.V > 53) return null;
        ("w" in I || (I.w = 1),
          "Z" in I
            ? ((ie = Cc(xa(I.y, 0, 1))),
              (mt = ie.getUTCDay()),
              (ie = mt > 4 || mt === 0 ? ys.ceil(ie) : ys(ie)),
              (ie = wu.offset(ie, (I.V - 1) * 7)),
              (I.y = ie.getUTCFullYear()),
              (I.m = ie.getUTCMonth()),
              (I.d = ie.getUTCDate() + ((I.w + 6) % 7)))
            : ((ie = _c(xa(I.y, 0, 1))),
              (mt = ie.getDay()),
              (ie = mt > 4 || mt === 0 ? gs.ceil(ie) : gs(ie)),
              (ie = Oo.offset(ie, (I.V - 1) * 7)),
              (I.y = ie.getFullYear()),
              (I.m = ie.getMonth()),
              (I.d = ie.getDate() + ((I.w + 6) % 7))));
      } else
        ("W" in I || "U" in I) &&
          ("w" in I || (I.w = "u" in I ? I.u % 7 : "W" in I ? 1 : 0),
          (mt =
            "Z" in I
              ? Cc(xa(I.y, 0, 1)).getUTCDay()
              : _c(xa(I.y, 0, 1)).getDay()),
          (I.m = 0),
          (I.d =
            "W" in I
              ? ((I.w + 6) % 7) + I.W * 7 - ((mt + 5) % 7)
              : I.w + I.U * 7 - ((mt + 6) % 7)));
      return "Z" in I
        ? ((I.H += (I.Z / 100) | 0), (I.M += I.Z % 100), Cc(I))
        : _c(I);
    };
  }
  function k(U, X, Z, I) {
    for (var at = 0, ie = X.length, mt = Z.length, vt, Sn; at < ie; ) {
      if (I >= mt) return -1;
      if (((vt = X.charCodeAt(at++)), vt === 37)) {
        if (
          ((vt = X.charAt(at++)),
          (Sn = P[vt in Og ? X.charAt(at++) : vt]),
          !Sn || (I = Sn(U, Z, I)) < 0)
        )
          return -1;
      } else if (vt != Z.charCodeAt(I++)) return -1;
    }
    return I;
  }
  function _(U, X, Z) {
    var I = u.exec(X.slice(Z));
    return I ? ((U.p = c.get(I[0].toLowerCase())), Z + I[0].length) : -1;
  }
  function j(U, X, Z) {
    var I = p.exec(X.slice(Z));
    return I ? ((U.w = h.get(I[0].toLowerCase())), Z + I[0].length) : -1;
  }
  function T(U, X, Z) {
    var I = f.exec(X.slice(Z));
    return I ? ((U.w = d.get(I[0].toLowerCase())), Z + I[0].length) : -1;
  }
  function L(U, X, Z) {
    var I = m.exec(X.slice(Z));
    return I ? ((U.m = v.get(I[0].toLowerCase())), Z + I[0].length) : -1;
  }
  function Y(U, X, Z) {
    var I = g.exec(X.slice(Z));
    return I ? ((U.m = y.get(I[0].toLowerCase())), Z + I[0].length) : -1;
  }
  function F(U, X, Z) {
    return k(U, t, X, Z);
  }
  function D(U, X, Z) {
    return k(U, r, X, Z);
  }
  function V(U, X, Z) {
    return k(U, n, X, Z);
  }
  function B(U) {
    return o[U.getDay()];
  }
  function C(U) {
    return a[U.getDay()];
  }
  function M(U) {
    return s[U.getMonth()];
  }
  function W(U) {
    return l[U.getMonth()];
  }
  function G(U) {
    return i[+(U.getHours() >= 12)];
  }
  function $(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function fe(U) {
    return o[U.getUTCDay()];
  }
  function Le(U) {
    return a[U.getUTCDay()];
  }
  function Ae(U) {
    return s[U.getUTCMonth()];
  }
  function it(U) {
    return l[U.getUTCMonth()];
  }
  function bn(U) {
    return i[+(U.getUTCHours() >= 12)];
  }
  function N2(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function (U) {
      var X = E((U += ""), x);
      return (
        (X.toString = function () {
          return U;
        }),
        X
      );
    },
    parse: function (U) {
      var X = O((U += ""), !1);
      return (
        (X.toString = function () {
          return U;
        }),
        X
      );
    },
    utcFormat: function (U) {
      var X = E((U += ""), S);
      return (
        (X.toString = function () {
          return U;
        }),
        X
      );
    },
    utcParse: function (U) {
      var X = O((U += ""), !0);
      return (
        (X.toString = function () {
          return U;
        }),
        X
      );
    },
  };
}
var Og = { "-": "", _: " ", 0: "0" },
  Me = /^\s*\d+/,
  kT = /^%/,
  _T = /[\\^$*+?|[\]().{}]/g;
function J(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function CT(e) {
  return e.replace(_T, "\\$&");
}
function wa(e) {
  return new RegExp("^(?:" + e.map(CT).join("|") + ")", "i");
}
function ba(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function AT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function jT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function TT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function NT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function MT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function kg(e, t, r) {
  var n = Me.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function _g(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function DT(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function IT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function LT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function Cg(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function $T(e, t, r) {
  var n = Me.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function Ag(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function RT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function zT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function FT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function BT(e, t, r) {
  var n = Me.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function UT(e, t, r) {
  var n = kT.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function WT(e, t, r) {
  var n = Me.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function KT(e, t, r) {
  var n = Me.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function jg(e, t) {
  return J(e.getDate(), t, 2);
}
function HT(e, t) {
  return J(e.getHours(), t, 2);
}
function VT(e, t) {
  return J(e.getHours() % 12 || 12, t, 2);
}
function YT(e, t) {
  return J(1 + Oo.count(Tr(e), e), t, 3);
}
function ib(e, t) {
  return J(e.getMilliseconds(), t, 3);
}
function GT(e, t) {
  return ib(e, t) + "000";
}
function qT(e, t) {
  return J(e.getMonth() + 1, t, 2);
}
function XT(e, t) {
  return J(e.getMinutes(), t, 2);
}
function QT(e, t) {
  return J(e.getSeconds(), t, 2);
}
function ZT(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function JT(e, t) {
  return J(bu.count(Tr(e) - 1, e), t, 2);
}
function ab(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vi(e) : Vi.ceil(e);
}
function eN(e, t) {
  return ((e = ab(e)), J(Vi.count(Tr(e), e) + (Tr(e).getDay() === 4), t, 2));
}
function tN(e) {
  return e.getDay();
}
function rN(e, t) {
  return J(gs.count(Tr(e) - 1, e), t, 2);
}
function nN(e, t) {
  return J(e.getFullYear() % 100, t, 2);
}
function iN(e, t) {
  return ((e = ab(e)), J(e.getFullYear() % 100, t, 2));
}
function aN(e, t) {
  return J(e.getFullYear() % 1e4, t, 4);
}
function oN(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? Vi(e) : Vi.ceil(e)),
    J(e.getFullYear() % 1e4, t, 4)
  );
}
function lN(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    J((t / 60) | 0, "0", 2) +
    J(t % 60, "0", 2)
  );
}
function Tg(e, t) {
  return J(e.getUTCDate(), t, 2);
}
function sN(e, t) {
  return J(e.getUTCHours(), t, 2);
}
function uN(e, t) {
  return J(e.getUTCHours() % 12 || 12, t, 2);
}
function cN(e, t) {
  return J(1 + wu.count(Nr(e), e), t, 3);
}
function ob(e, t) {
  return J(e.getUTCMilliseconds(), t, 3);
}
function fN(e, t) {
  return ob(e, t) + "000";
}
function dN(e, t) {
  return J(e.getUTCMonth() + 1, t, 2);
}
function pN(e, t) {
  return J(e.getUTCMinutes(), t, 2);
}
function hN(e, t) {
  return J(e.getUTCSeconds(), t, 2);
}
function mN(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function vN(e, t) {
  return J(Su.count(Nr(e) - 1, e), t, 2);
}
function lb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Yi(e) : Yi.ceil(e);
}
function gN(e, t) {
  return ((e = lb(e)), J(Yi.count(Nr(e), e) + (Nr(e).getUTCDay() === 4), t, 2));
}
function yN(e) {
  return e.getUTCDay();
}
function xN(e, t) {
  return J(ys.count(Nr(e) - 1, e), t, 2);
}
function wN(e, t) {
  return J(e.getUTCFullYear() % 100, t, 2);
}
function bN(e, t) {
  return ((e = lb(e)), J(e.getUTCFullYear() % 100, t, 2));
}
function SN(e, t) {
  return J(e.getUTCFullYear() % 1e4, t, 4);
}
function PN(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Yi(e) : Yi.ceil(e)),
    J(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function EN() {
  return "+0000";
}
function Ng() {
  return "%";
}
function Mg(e) {
  return +e;
}
function Dg(e) {
  return Math.floor(+e / 1e3);
}
var ci, sb, ub;
ON({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
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
  shortMonths: [
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
});
function ON(e) {
  return (
    (ci = OT(e)),
    (sb = ci.format),
    ci.parse,
    (ub = ci.utcFormat),
    ci.utcParse,
    ci
  );
}
function kN(e) {
  return new Date(e);
}
function _N(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function ch(e, t, r, n, i, a, o, l, s, u) {
  var c = Xp(),
    f = c.invert,
    d = c.domain,
    p = u(".%L"),
    h = u(":%S"),
    g = u("%I:%M"),
    y = u("%I %p"),
    m = u("%a %d"),
    v = u("%b %d"),
    x = u("%B"),
    S = u("%Y");
  function P(E) {
    return (
      s(E) < E
        ? p
        : l(E) < E
          ? h
          : o(E) < E
            ? g
            : a(E) < E
              ? y
              : n(E) < E
                ? i(E) < E
                  ? m
                  : v
                : r(E) < E
                  ? x
                  : S
    )(E);
  }
  return (
    (c.invert = function (E) {
      return new Date(f(E));
    }),
    (c.domain = function (E) {
      return arguments.length ? d(Array.from(E, _N)) : d().map(kN);
    }),
    (c.ticks = function (E) {
      var O = d();
      return e(O[0], O[O.length - 1], E ?? 10);
    }),
    (c.tickFormat = function (E, O) {
      return O == null ? P : u(O);
    }),
    (c.nice = function (E) {
      var O = d();
      return (
        (!E || typeof E.range != "function") &&
          (E = t(O[0], O[O.length - 1], E ?? 10)),
        E ? d(qw(O, E)) : c
      );
    }),
    (c.copy = function () {
      return Eo(c, ch(e, t, r, n, i, a, o, l, s, u));
    }),
    c
  );
}
function CN() {
  return Yt.apply(
    ch(PT, ET, Tr, sh, bu, Oo, oh, ih, Ln, sb).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function AN() {
  return Yt.apply(
    ch(bT, ST, Nr, uh, Su, wu, lh, ah, Ln, ub).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Pu() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = Je,
    l = !1,
    s;
  function u(f) {
    return f == null || isNaN((f = +f))
      ? s
      : o(
          i === 0
            ? 0.5
            : ((f = (a(f) - r) * i), l ? Math.max(0, Math.min(1, f)) : f),
        );
  }
  ((u.domain = function (f) {
    return arguments.length
      ? (([e, t] = f),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        u)
      : [e, t];
  }),
    (u.clamp = function (f) {
      return arguments.length ? ((l = !!f), u) : l;
    }),
    (u.interpolator = function (f) {
      return arguments.length ? ((o = f), u) : o;
    }));
  function c(f) {
    return function (d) {
      var p, h;
      return arguments.length ? (([p, h] = d), (o = f(p, h)), u) : [o(0), o(1)];
    };
  }
  return (
    (u.range = c(Ji)),
    (u.rangeRound = c(qp)),
    (u.unknown = function (f) {
      return arguments.length ? ((s = f), u) : s;
    }),
    function (f) {
      return (
        (a = f),
        (r = f(e)),
        (n = f(t)),
        (i = r === n ? 0 : 1 / (n - r)),
        u
      );
    }
  );
}
function yn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function cb() {
  var e = gn(Pu()(Je));
  return (
    (e.copy = function () {
      return yn(e, cb());
    }),
    Rr.apply(e, arguments)
  );
}
function fb() {
  var e = Jp(Pu()).domain([1, 10]);
  return (
    (e.copy = function () {
      return yn(e, fb()).base(e.base());
    }),
    Rr.apply(e, arguments)
  );
}
function db() {
  var e = eh(Pu());
  return (
    (e.copy = function () {
      return yn(e, db()).constant(e.constant());
    }),
    Rr.apply(e, arguments)
  );
}
function fh() {
  var e = th(Pu());
  return (
    (e.copy = function () {
      return yn(e, fh()).exponent(e.exponent());
    }),
    Rr.apply(e, arguments)
  );
}
function jN() {
  return fh.apply(null, arguments).exponent(0.5);
}
function pb() {
  var e = [],
    t = Je;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((So(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(ln), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => mj(e, a / n));
    }),
    (r.copy = function () {
      return pb(t).domain(e);
    }),
    Rr.apply(r, arguments)
  );
}
function Eu() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    l,
    s,
    u = Je,
    c,
    f = !1,
    d;
  function p(g) {
    return isNaN((g = +g))
      ? d
      : ((g = 0.5 + ((g = +c(g)) - a) * (n * g < n * a ? l : s)),
        u(f ? Math.max(0, Math.min(1, g)) : g));
  }
  ((p.domain = function (g) {
    return arguments.length
      ? (([e, t, r] = g),
        (i = c((e = +e))),
        (a = c((t = +t))),
        (o = c((r = +r))),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p)
      : [e, t, r];
  }),
    (p.clamp = function (g) {
      return arguments.length ? ((f = !!g), p) : f;
    }),
    (p.interpolator = function (g) {
      return arguments.length ? ((u = g), p) : u;
    }));
  function h(g) {
    return function (y) {
      var m, v, x;
      return arguments.length
        ? (([m, v, x] = y), (u = Uj(g, [m, v, x])), p)
        : [u(0), u(0.5), u(1)];
    };
  }
  return (
    (p.range = h(Ji)),
    (p.rangeRound = h(qp)),
    (p.unknown = function (g) {
      return arguments.length ? ((d = g), p) : d;
    }),
    function (g) {
      return (
        (c = g),
        (i = g(e)),
        (a = g(t)),
        (o = g(r)),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p
      );
    }
  );
}
function hb() {
  var e = gn(Eu()(Je));
  return (
    (e.copy = function () {
      return yn(e, hb());
    }),
    Rr.apply(e, arguments)
  );
}
function mb() {
  var e = Jp(Eu()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return yn(e, mb()).base(e.base());
    }),
    Rr.apply(e, arguments)
  );
}
function vb() {
  var e = eh(Eu());
  return (
    (e.copy = function () {
      return yn(e, vb()).constant(e.constant());
    }),
    Rr.apply(e, arguments)
  );
}
function dh() {
  var e = th(Eu());
  return (
    (e.copy = function () {
      return yn(e, dh()).exponent(e.exponent());
    }),
    Rr.apply(e, arguments)
  );
}
function TN() {
  return dh.apply(null, arguments).exponent(0.5);
}
const _a = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Vp,
      scaleDiverging: hb,
      scaleDivergingLog: mb,
      scaleDivergingPow: dh,
      scaleDivergingSqrt: TN,
      scaleDivergingSymlog: vb,
      scaleIdentity: Gw,
      scaleImplicit: td,
      scaleLinear: Yw,
      scaleLog: Xw,
      scaleOrdinal: Hp,
      scalePoint: yj,
      scalePow: rh,
      scaleQuantile: Jw,
      scaleQuantize: eb,
      scaleRadial: Zw,
      scaleSequential: cb,
      scaleSequentialLog: fb,
      scaleSequentialPow: fh,
      scaleSequentialQuantile: pb,
      scaleSequentialSqrt: jN,
      scaleSequentialSymlog: db,
      scaleSqrt: fT,
      scaleSymlog: Qw,
      scaleThreshold: tb,
      scaleTime: CN,
      scaleUtc: AN,
      tickFormat: Vw,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var oi = (e) => e.chartData,
  NN = A([oi], (e) => {
    var t = e.chartData != null ? e.chartData.length - 1 : 0;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  gb = (e, t, r, n) => (n ? NN(e) : oi(e));
function Gi(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (ir(t) && ir(r)) return !0;
  }
  return !1;
}
function Ig(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function MN(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e,
      i,
      a;
    if (ir(r)) i = r;
    else if (typeof r == "function") return;
    if (ir(n)) a = n;
    else if (typeof n == "function") return;
    var o = [i, a];
    if (Gi(o)) return o;
  }
}
function DN(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (Gi(n)) return Ig(n, t, r);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        l;
      if (i === "auto") t != null && (o = Math.min(...t));
      else if (K(i)) o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t == null ? void 0 : t[0]));
        } catch {}
      else if (typeof i == "string" && Mv.test(i)) {
        var s = Mv.exec(i);
        if (s == null || t == null) o = void 0;
        else {
          var u = +s[1];
          o = t[0] - u;
        }
      } else o = t == null ? void 0 : t[0];
      if (a === "auto") t != null && (l = Math.max(...t));
      else if (K(a)) l = a;
      else if (typeof a == "function")
        try {
          t != null && (l = a(t == null ? void 0 : t[1]));
        } catch {}
      else if (typeof a == "string" && Dv.test(a)) {
        var c = Dv.exec(a);
        if (c == null || t == null) l = void 0;
        else {
          var f = +c[1];
          l = t[1] + f;
        }
      } else l = t == null ? void 0 : t[1];
      var d = [o, l];
      if (Gi(d)) return t == null ? d : Ig(d, t, r);
    }
  }
}
var ea = 1e9,
  IN = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  hh,
  pe = !0,
  Kt = "[DecimalError] ",
  Wn = Kt + "Invalid argument: ",
  ph = Kt + "Exponent out of range: ",
  ta = Math.floor,
  _n = Math.pow,
  LN = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  St,
  je = 1e7,
  le = 7,
  yb = 9007199254740991,
  xs = ta(yb / le),
  z = {};
z.absoluteValue = z.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
z.comparedTo = z.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
z.decimalPlaces = z.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * le;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
z.dividedBy = z.div = function (e) {
  return Er(this, new this.constructor(e));
};
z.dividedToIntegerBy = z.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return re(Er(t, new r(e), 0, 1), r.precision);
};
z.equals = z.eq = function (e) {
  return !this.cmp(e);
};
z.exponent = function () {
  return Ee(this);
};
z.greaterThan = z.gt = function (e) {
  return this.cmp(e) > 0;
};
z.greaterThanOrEqualTo = z.gte = function (e) {
  return this.cmp(e) >= 0;
};
z.isInteger = z.isint = function () {
  return this.e > this.d.length - 2;
};
z.isNegative = z.isneg = function () {
  return this.s < 0;
};
z.isPositive = z.ispos = function () {
  return this.s > 0;
};
z.isZero = function () {
  return this.s === 0;
};
z.lessThan = z.lt = function (e) {
  return this.cmp(e) < 0;
};
z.lessThanOrEqualTo = z.lte = function (e) {
  return this.cmp(e) < 1;
};
z.logarithm = z.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(St))) throw Error(Kt + "NaN");
  if (r.s < 1) throw Error(Kt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(St)
    ? new n(0)
    : ((pe = !1), (t = Er(co(r, a), co(e, a), a)), (pe = !0), re(t, i));
};
z.minus = z.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? bb(t, e) : xb(t, ((e.s = -e.s), e))
  );
};
z.modulo = z.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Kt + "NaN");
  return r.s
    ? ((pe = !1), (t = Er(r, e, 0, 1).times(e)), (pe = !0), r.minus(t))
    : re(new n(r), i);
};
z.naturalExponential = z.exp = function () {
  return wb(this);
};
z.naturalLogarithm = z.ln = function () {
  return co(this);
};
z.negated = z.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
z.plus = z.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? xb(t, e) : bb(t, ((e.s = -e.s), e))
  );
};
z.precision = z.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Wn + e);
  if (
    ((t = Ee(i) + 1), (n = i.d.length - 1), (r = n * le + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
z.squareRoot = z.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    l = this,
    s = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new s(0);
    throw Error(Kt + "NaN");
  }
  for (
    e = Ee(l),
      pe = !1,
      i = Math.sqrt(+l),
      i == 0 || i == 1 / 0
        ? ((t = sr(l.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = ta((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new s(t)))
        : (n = new s(i.toString())),
      r = s.precision,
      i = o = r + 3;
    ;
  )
    if (
      ((a = n),
      (n = a.plus(Er(l, a, o + 2)).times(0.5)),
      sr(a.d).slice(0, o) === (t = sr(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((re(a, r + 1, 0), a.times(a).eq(l))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((pe = !0), re(n, r));
};
z.times = z.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    l,
    s,
    u,
    c = this,
    f = c.constructor,
    d = c.d,
    p = (e = new f(e)).d;
  if (!c.s || !e.s) return new f(0);
  for (
    e.s *= c.s,
      r = c.e + e.e,
      s = d.length,
      u = p.length,
      s < u && ((a = d), (d = p), (p = a), (o = s), (s = u), (u = o)),
      a = [],
      o = s + u,
      n = o;
    n--;
  )
    a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      ((l = a[i] + p[n] * d[i - n - 1] + t),
        (a[i--] = (l % je) | 0),
        (t = (l / je) | 0));
    a[i] = ((a[i] + t) % je) | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (
    t ? ++r : a.shift(),
    (e.d = a),
    (e.e = r),
    pe ? re(e, f.precision) : e
  );
};
z.toDecimalPlaces = z.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (pr(e, 0, ea),
        t === void 0 ? (t = n.rounding) : pr(t, 0, 8),
        re(r, e + Ee(r) + 1, t))
  );
};
z.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Jn(n, !0))
      : (pr(e, 0, ea),
        t === void 0 ? (t = i.rounding) : pr(t, 0, 8),
        (n = re(new i(n), e + 1, t)),
        (r = Jn(n, !0, e + 1))),
    r
  );
};
z.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Jn(i)
    : (pr(e, 0, ea),
      t === void 0 ? (t = a.rounding) : pr(t, 0, 8),
      (n = re(new a(i), e + Ee(i) + 1, t)),
      (r = Jn(n.abs(), !1, e + Ee(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
z.toInteger = z.toint = function () {
  var e = this,
    t = e.constructor;
  return re(new t(e), Ee(e) + 1, t.rounding);
};
z.toNumber = function () {
  return +this;
};
z.toPower = z.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    l = this,
    s = l.constructor,
    u = 12,
    c = +(e = new s(e));
  if (!e.s) return new s(St);
  if (((l = new s(l)), !l.s)) {
    if (e.s < 1) throw Error(Kt + "Infinity");
    return l;
  }
  if (l.eq(St)) return l;
  if (((n = s.precision), e.eq(St))) return re(l, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = l.s), o)) {
    if ((r = c < 0 ? -c : c) <= yb) {
      for (
        i = new s(St), t = Math.ceil(n / le + 4), pe = !1;
        r % 2 && ((i = i.times(l)), $g(i.d, t)), (r = ta(r / 2)), r !== 0;
      )
        ((l = l.times(l)), $g(l.d, t));
      return ((pe = !0), e.s < 0 ? new s(St).div(i) : re(i, n));
    }
  } else if (a < 0) throw Error(Kt + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (l.s = 1),
    (pe = !1),
    (i = e.times(co(l, n + u))),
    (pe = !0),
    (i = wb(i)),
    (i.s = a),
    i
  );
};
z.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Ee(i)), (n = Jn(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (pr(e, 1, ea),
        t === void 0 ? (t = a.rounding) : pr(t, 0, 8),
        (i = re(new a(i), e, t)),
        (r = Ee(i)),
        (n = Jn(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
z.toSignificantDigits = z.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (pr(e, 1, ea), t === void 0 ? (t = n.rounding) : pr(t, 0, 8)),
    re(new n(r), e, t)
  );
};
z.toString =
  z.valueOf =
  z.val =
  z.toJSON =
  z[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Ee(e),
        r = e.constructor;
      return Jn(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function xb(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    s,
    u,
    c = e.constructor,
    f = c.precision;
  if (!e.s || !t.s) return (t.s || (t = new c(e)), pe ? re(t, f) : t);
  if (
    ((s = e.d),
    (u = t.d),
    (o = e.e),
    (i = t.e),
    (s = s.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = s), (a = -a), (l = u.length))
        : ((n = u), (i = o), (l = s.length)),
        o = Math.ceil(f / le),
        l = o > l ? o + 1 : l + 1,
        a > l && ((a = l), (n.length = 1)),
        n.reverse();
      a--;
    )
      n.push(0);
    n.reverse();
  }
  for (
    l = s.length,
      a = u.length,
      l - a < 0 && ((a = l), (n = u), (u = s), (s = n)),
      r = 0;
    a;
  )
    ((r = ((s[--a] = s[a] + u[a] + r) / je) | 0), (s[a] %= je));
  for (r && (s.unshift(r), ++i), l = s.length; s[--l] == 0; ) s.pop();
  return ((t.d = s), (t.e = i), pe ? re(t, f) : t);
}
function pr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Wn + e);
}
function sr(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = le - n.length), r && (a += Vr(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = le - n.length), r && (a += Vr(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Er = (function () {
  function e(n, i) {
    var a,
      o = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      ((a = n[l] * i + o), (n[l] = (a % je) | 0), (o = (a / je) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var l, s;
    if (a != o) s = a > o ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (n[l] != i[l]) {
          s = n[l] > i[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * je + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var l,
      s,
      u,
      c,
      f,
      d,
      p,
      h,
      g,
      y,
      m,
      v,
      x,
      S,
      P,
      E,
      O,
      k,
      _ = n.constructor,
      j = n.s == i.s ? 1 : -1,
      T = n.d,
      L = i.d;
    if (!n.s) return new _(n);
    if (!i.s) throw Error(Kt + "Division by zero");
    for (
      s = n.e - i.e,
        O = L.length,
        P = T.length,
        p = new _(j),
        h = p.d = [],
        u = 0;
      L[u] == (T[u] || 0);
    )
      ++u;
    if (
      (L[u] > (T[u] || 0) && --s,
      a == null
        ? (v = a = _.precision)
        : o
          ? (v = a + (Ee(n) - Ee(i)) + 1)
          : (v = a),
      v < 0)
    )
      return new _(0);
    if (((v = (v / le + 2) | 0), (u = 0), O == 1))
      for (c = 0, L = L[0], v++; (u < P || c) && v--; u++)
        ((x = c * je + (T[u] || 0)), (h[u] = (x / L) | 0), (c = (x % L) | 0));
    else {
      for (
        c = (je / (L[0] + 1)) | 0,
          c > 1 &&
            ((L = e(L, c)), (T = e(T, c)), (O = L.length), (P = T.length)),
          S = O,
          g = T.slice(0, O),
          y = g.length;
        y < O;
      )
        g[y++] = 0;
      ((k = L.slice()), k.unshift(0), (E = L[0]), L[1] >= je / 2 && ++E);
      do
        ((c = 0),
          (l = t(L, g, O, y)),
          l < 0
            ? ((m = g[0]),
              O != y && (m = m * je + (g[1] || 0)),
              (c = (m / E) | 0),
              c > 1
                ? (c >= je && (c = je - 1),
                  (f = e(L, c)),
                  (d = f.length),
                  (y = g.length),
                  (l = t(f, g, d, y)),
                  l == 1 && (c--, r(f, O < d ? k : L, d)))
                : (c == 0 && (l = c = 1), (f = L.slice())),
              (d = f.length),
              d < y && f.unshift(0),
              r(g, f, y),
              l == -1 &&
                ((y = g.length),
                (l = t(L, g, O, y)),
                l < 1 && (c++, r(g, O < y ? k : L, y))),
              (y = g.length))
            : l === 0 && (c++, (g = [0])),
          (h[u++] = c),
          l && g[0] ? (g[y++] = T[S] || 0) : ((g = [T[S]]), (y = 1)));
      while ((S++ < P || g[0] !== void 0) && v--);
    }
    return (h[0] || h.shift(), (p.e = s), re(p, o ? a + Ee(p) + 1 : a));
  };
})();
function wb(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    s = 0,
    u = 0,
    c = e.constructor,
    f = c.precision;
  if (Ee(e) > 16) throw Error(ph + Ee(e));
  if (!e.s) return new c(St);
  for (
    t == null ? ((pe = !1), (l = f)) : (l = t), o = new c(0.03125);
    e.abs().gte(0.1);
  )
    ((e = e.times(o)), (u += 5));
  for (
    n = ((Math.log(_n(2, u)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = i = a = new c(St),
      c.precision = l;
    ;
  ) {
    if (
      ((i = re(i.times(e), l)),
      (r = r.times(++s)),
      (o = a.plus(Er(i, r, l))),
      sr(o.d).slice(0, l) === sr(a.d).slice(0, l))
    ) {
      for (; u--; ) a = re(a.times(a), l);
      return ((c.precision = f), t == null ? ((pe = !0), re(a, f)) : a);
    }
    a = o;
  }
}
function Ee(e) {
  for (var t = e.e * le, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Ac(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      (pe = !0),
      r && (e.precision = r),
      Error(Kt + "LN10 precision limit exceeded")
    );
  return re(new e(e.LN10), t);
}
function Vr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function co(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    s,
    u,
    c,
    f = 1,
    d = 10,
    p = e,
    h = p.d,
    g = p.constructor,
    y = g.precision;
  if (p.s < 1) throw Error(Kt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(St)) return new g(0);
  if ((t == null ? ((pe = !1), (u = y)) : (u = t), p.eq(10)))
    return (t == null && (pe = !0), Ac(g, u));
  if (
    ((u += d),
    (g.precision = u),
    (r = sr(h)),
    (n = r.charAt(0)),
    (a = Ee(p)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((p = p.times(e)), (r = sr(p.d)), (n = r.charAt(0)), f++);
    ((a = Ee(p)),
      n > 1 ? ((p = new g("0." + r)), a++) : (p = new g(n + "." + r.slice(1))));
  } else
    return (
      (s = Ac(g, u + 2, y).times(a + "")),
      (p = co(new g(n + "." + r.slice(1)), u - d).plus(s)),
      (g.precision = y),
      t == null ? ((pe = !0), re(p, y)) : p
    );
  for (
    l = o = p = Er(p.minus(St), p.plus(St), u), c = re(p.times(p), u), i = 3;
    ;
  ) {
    if (
      ((o = re(o.times(c), u)),
      (s = l.plus(Er(o, new g(i), u))),
      sr(s.d).slice(0, u) === sr(l.d).slice(0, u))
    )
      return (
        (l = l.times(2)),
        a !== 0 && (l = l.plus(Ac(g, u + 2, y).times(a + ""))),
        (l = Er(l, new g(f), u)),
        (g.precision = y),
        t == null ? ((pe = !0), re(l, y)) : l
      );
    ((l = s), (i += 2));
  }
}
function Lg(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = ta(r / le)),
      (e.d = []),
      (n = (r + 1) % le),
      r < 0 && (n += le),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= le; n < i; )
        e.d.push(+t.slice(n, (n += le)));
      ((t = t.slice(n)), (n = le - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), pe && (e.e > xs || e.e < -xs))) throw Error(ph + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function re(e, t, r) {
  var n,
    i,
    a,
    o,
    l,
    s,
    u,
    c,
    f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += le), (i = t), (u = f[(c = 0)]));
  else {
    if (((c = Math.ceil((n + 1) / le)), (a = f.length), c >= a)) return e;
    for (u = a = f[c], o = 1; a >= 10; a /= 10) o++;
    ((n %= le), (i = n - le + o));
  }
  if (
    (r !== void 0 &&
      ((a = _n(10, o - i - 1)),
      (l = ((u / a) % 10) | 0),
      (s = t < 0 || f[c + 1] !== void 0 || u % a),
      (s =
        r < 4
          ? (l || s) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                s ||
                (r == 6 &&
                  ((n > 0 ? (i > 0 ? u / _n(10, o - i) : 0) : f[c - 1]) % 10) &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      s
        ? ((a = Ee(e)),
          (f.length = 1),
          (t = t - a - 1),
          (f[0] = _n(10, (le - (t % le)) % le)),
          (e.e = ta(-t / le) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = c), (a = 1), c--)
      : ((f.length = c + 1),
        (a = _n(10, le - n)),
        (f[c] = i > 0 ? (((u / _n(10, o - i)) % _n(10, i)) | 0) * a : 0)),
    s)
  )
    for (;;)
      if (c == 0) {
        (f[0] += a) == je && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[c] += a), f[c] != je)) break;
        ((f[c--] = 0), (a = 1));
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (pe && (e.e > xs || e.e < -xs)) throw Error(ph + Ee(e));
  return e;
}
function bb(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    s,
    u,
    c,
    f,
    d = e.constructor,
    p = d.precision;
  if (!e.s || !t.s)
    return (t.s ? (t.s = -t.s) : (t = new d(e)), pe ? re(t, p) : t);
  if (
    ((s = e.d),
    (f = t.d),
    (n = t.e),
    (u = e.e),
    (s = s.slice()),
    (o = u - n),
    o)
  ) {
    for (
      c = o < 0,
        c
          ? ((r = s), (o = -o), (l = f.length))
          : ((r = f), (n = u), (l = s.length)),
        i = Math.max(Math.ceil(p / le), l) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (i = s.length, l = f.length, c = i < l, c && (l = i), i = 0; i < l; i++)
      if (s[i] != f[i]) {
        c = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (
    c && ((r = s), (s = f), (f = r), (t.s = -t.s)),
      l = s.length,
      i = f.length - l;
    i > 0;
    --i
  )
    s[l++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = je - 1;
      (--s[a], (s[i] += je));
    }
    s[i] -= f[i];
  }
  for (; s[--l] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? ((t.d = s), (t.e = n), pe ? re(t, p) : t) : new d(0);
}
function Jn(e, t, r) {
  var n,
    i = Ee(e),
    a = sr(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Vr(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + Vr(-i - 1) + a), r && (n = r - o) > 0 && (a += Vr(n)))
        : i >= o
          ? ((a += Vr(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + Vr(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += Vr(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function $g(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function Sb(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Wn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return Lg(o, a.toString());
    } else if (typeof a != "string") throw Error(Wn + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      LN.test(a))
    )
      Lg(o, a);
    else throw Error(Wn + a);
  }
  if (
    ((i.prototype = z),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = Sb),
    (i.config = i.set = $N),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;
    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function $N(e) {
  if (!e || typeof e != "object") throw Error(Kt + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      ea,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (ta(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Wn + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Wn + r + ": " + n);
  return this;
}
var hh = Sb(IN);
St = new hh(1);
const ee = hh;
var RN = (e) => e,
  Pb = { "@@functional/placeholder": !0 },
  Eb = (e) => e === Pb,
  Rg = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Eb(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  Ob = (e, t) =>
    e === 1
      ? t
      : Rg(function () {
          for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
            n[i] = arguments[i];
          var a = n.filter((o) => o !== Pb).length;
          return a >= e
            ? t(...n)
            : Ob(
                e - a,
                Rg(function () {
                  for (
                    var o = arguments.length, l = new Array(o), s = 0;
                    s < o;
                    s++
                  )
                    l[s] = arguments[s];
                  var u = n.map((c) => (Eb(c) ? l.shift() : c));
                  return t(...u, ...l);
                }),
              );
        }),
  Ou = (e) => Ob(e.length, e),
  ad = (e, t) => {
    for (var r = [], n = e; n < t; ++n) r[n - e] = n;
    return r;
  },
  zN = Ou((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((r) => t[r])
          .map(e),
  ),
  FN = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return RN;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce((l, s) => s(l), a(...arguments));
    };
  },
  od = (e) => (Array.isArray(e) ? e.reverse() : e.split("").reverse().join("")),
  kb = (e) => {
    var t = null,
      r = null;
    return function () {
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (t &&
          i.every((o, l) => {
            var s;
            return o === ((s = t) === null || s === void 0 ? void 0 : s[l]);
          })) ||
          ((t = i), (r = e(...i))),
        r
      );
    };
  };
function _b(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new ee(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function Cb(e, t, r) {
  for (var n = new ee(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
Ou((e, t, r) => {
  var n = +e,
    i = +t;
  return n + r * (i - n);
});
Ou((e, t, r) => {
  var n = t - +e;
  return ((n = n || 1 / 0), (r - e) / n);
});
Ou((e, t, r) => {
  var n = t - +e;
  return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
});
var Ab = (e) => {
    var [t, r] = e,
      [n, i] = [t, r];
    return (t > r && ([n, i] = [r, t]), [n, i]);
  },
  jb = (e, t, r) => {
    if (e.lte(0)) return new ee(0);
    var n = _b(e.toNumber()),
      i = new ee(10).pow(n),
      a = e.div(i),
      o = n !== 1 ? 0.05 : 0.1,
      l = new ee(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
      s = l.mul(i);
    return t ? new ee(s.toNumber()) : new ee(Math.ceil(s.toNumber()));
  },
  BN = (e, t, r) => {
    var n = new ee(1),
      i = new ee(e);
    if (!i.isint() && r) {
      var a = Math.abs(e);
      a < 1
        ? ((n = new ee(10).pow(_b(e) - 1)),
          (i = new ee(Math.floor(i.div(n).toNumber())).mul(n)))
        : a > 1 && (i = new ee(Math.floor(e)));
    } else
      e === 0
        ? (i = new ee(Math.floor((t - 1) / 2)))
        : r || (i = new ee(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
      l = FN(
        zN((s) => i.add(new ee(s - o).mul(n)).toNumber()),
        ad,
      );
    return l(0, t);
  },
  Tb = function (t, r, n, i) {
    var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((r - t) / (n - 1)))
      return { step: new ee(0), tickMin: new ee(0), tickMax: new ee(0) };
    var o = jb(new ee(r).sub(t).div(n - 1), i, a),
      l;
    t <= 0 && r >= 0
      ? (l = new ee(0))
      : ((l = new ee(t).add(r).div(2)), (l = l.sub(new ee(l).mod(o))));
    var s = Math.ceil(l.sub(t).div(o).toNumber()),
      u = Math.ceil(new ee(r).sub(l).div(o).toNumber()),
      c = s + u + 1;
    return c > n
      ? Tb(t, r, n, i, a + 1)
      : (c < n &&
          ((u = r > 0 ? u + (n - c) : u), (s = r > 0 ? s : s + (n - c))),
        {
          step: o,
          tickMin: l.sub(new ee(s).mul(o)),
          tickMax: l.add(new ee(u).mul(o)),
        });
  };
function UN(e) {
  var [t, r] = e,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(n, 2),
    [o, l] = Ab([t, r]);
  if (o === -1 / 0 || l === 1 / 0) {
    var s =
      l === 1 / 0
        ? [o, ...ad(0, n - 1).map(() => 1 / 0)]
        : [...ad(0, n - 1).map(() => -1 / 0), l];
    return t > r ? od(s) : s;
  }
  if (o === l) return BN(o, n, i);
  var { step: u, tickMin: c, tickMax: f } = Tb(o, l, a, i, 0),
    d = Cb(c, f.add(new ee(0.1).mul(u)), u);
  return t > r ? od(d) : d;
}
function WN(e, t) {
  var [r, n] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = Ab([r, n]);
  if (a === -1 / 0 || o === 1 / 0) return [r, n];
  if (a === o) return [a];
  var l = Math.max(t, 2),
    s = jb(new ee(o).sub(a).div(l - 1), i, 0),
    u = [...Cb(new ee(a), new ee(o), s), o];
  return (i === !1 && (u = u.map((c) => Math.round(c))), r > n ? od(u) : u);
}
var KN = kb(UN),
  HN = kb(WN),
  VN = (e) => e.rootProps.barCategoryGap,
  ku = (e) => e.rootProps.stackOffset,
  mh = (e) => e.options.chartName,
  vh = (e) => e.rootProps.syncId,
  Nb = (e) => e.rootProps.syncMethod,
  gh = (e) => e.options.eventEmitter,
  vr = {
    allowDuplicatedCategory: !0,
    angleAxisId: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: "outer",
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: "category",
  },
  wt = {
    allowDataOverflow: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: "right",
    radiusAxisId: 0,
    scale: "auto",
    stroke: "#ccc",
    tick: !0,
    tickCount: 5,
    type: "number",
  },
  _u = (e, t) => {
    if (!(!e || !t)) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  YN = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: vr.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: vr.reversed,
    scale: vr.scale,
    tick: vr.tick,
    tickCount: void 0,
    ticks: void 0,
    type: vr.type,
    unit: void 0,
  },
  GN = {
    allowDataOverflow: wt.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: wt.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: wt.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: wt.scale,
    tick: wt.tick,
    tickCount: wt.tickCount,
    ticks: void 0,
    type: wt.type,
    unit: void 0,
  },
  qN = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: vr.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: vr.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: vr.scale,
    tick: vr.tick,
    tickCount: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
  },
  XN = {
    allowDataOverflow: wt.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: wt.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: wt.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: wt.scale,
    tick: wt.tick,
    tickCount: wt.tickCount,
    ticks: void 0,
    type: "category",
    unit: void 0,
  },
  yh = (e, t) =>
    e.polarAxis.angleAxis[t] != null
      ? e.polarAxis.angleAxis[t]
      : e.layout.layoutType === "radial"
        ? qN
        : YN,
  xh = (e, t) =>
    e.polarAxis.radiusAxis[t] != null
      ? e.polarAxis.radiusAxis[t]
      : e.layout.layoutType === "radial"
        ? XN
        : GN,
  Cu = (e) => e.polarOptions,
  wh = A([Lr, $r, Ke], uC),
  Mb = A([Cu, wh], (e, t) => {
    if (e != null) return cn(e.innerRadius, t, 0);
  }),
  Db = A([Cu, wh], (e, t) => {
    if (e != null) return cn(e.outerRadius, t, t * 0.8);
  }),
  QN = (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: r } = e;
    return [t, r];
  },
  Ib = A([Cu], QN);
A([yh, Ib], _u);
var Lb = A([wh, Mb, Db], (e, t, r) => {
  if (!(e == null || t == null || r == null)) return [t, r];
});
A([xh, Lb], _u);
var ZN = A([ge, Cu, Mb, Db, Lr, $r], (e, t, r, n, i, a) => {
    if (
      !(
        (e !== "centric" && e !== "radial") ||
        t == null ||
        r == null ||
        n == null
      )
    ) {
      var { cx: o, cy: l, startAngle: s, endAngle: u } = t;
      return {
        cx: cn(o, i, i / 2),
        cy: cn(l, a, a / 2),
        innerRadius: r,
        outerRadius: n,
        startAngle: s,
        endAngle: u,
        clockWise: !1,
      };
    }
  }),
  De = (e, t) => t,
  Au = (e, t, r) => r;
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zg(Object(r), !0).forEach(function (n) {
          JN(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function JN(e, t, r) {
  return (
    (t = eM(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eM(e) {
  var t = tM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ld = [0, "auto"],
  gt = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "bottom",
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "category",
    unit: void 0,
  },
  zr = (e, t) => {
    var r = e.cartesianAxis.xAxis[t];
    return r ?? gt;
  },
  yt = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: ld,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "left",
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
    width: vu,
  },
  xn = (e, t) => {
    var r = e.cartesianAxis.yAxis[t];
    return r ?? yt;
  },
  rM = {
    domain: [0, "auto"],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: "",
    range: [64, 64],
    scale: "auto",
    type: "number",
    unit: "",
  },
  bh = (e, t) => {
    var r = e.cartesianAxis.zAxis[t];
    return r ?? rM;
  },
  ht = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return zr(e, r);
      case "yAxis":
        return xn(e, r);
      case "zAxis":
        return bh(e, r);
      case "angleAxis":
        return yh(e, r);
      case "radiusAxis":
        return xh(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  nM = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return zr(e, r);
      case "yAxis":
        return xn(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  ko = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return zr(e, r);
      case "yAxis":
        return xn(e, r);
      case "angleAxis":
        return yh(e, r);
      case "radiusAxis":
        return xh(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  $b = (e) => e.graphicalItems.countOfBars > 0;
function Rb(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var zb = (e) => e.graphicalItems.cartesianItems,
  iM = A([De, Au], Rb),
  Fb = (e, t, r) =>
    e
      .filter(r)
      .filter((n) =>
        (t == null ? void 0 : t.includeHidden) === !0 ? !0 : !n.hide,
      ),
  _o = A([zb, ht, iM], Fb),
  Bb = (e) => e.filter((t) => t.stackId === void 0),
  aM = A([_o], Bb),
  Ub = (e) =>
    e
      .map((t) => t.data)
      .filter(Boolean)
      .flat(1),
  oM = A([_o], Ub),
  Wb = (e, t) => {
    var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
    return e.length > 0 ? e : r.slice(n, i + 1);
  },
  ju = A([oM, gb], Wb),
  Kb = (e, t, r) =>
    (t == null ? void 0 : t.dataKey) != null
      ? e.map((n) => ({ value: kt(n, t.dataKey) }))
      : r.length > 0
        ? r
            .map((n) => n.dataKey)
            .flatMap((n) => e.map((i) => ({ value: kt(i, n) })))
        : e.map((n) => ({ value: n })),
  Tu = A([ju, ht, _o], Kb);
function Hb(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function li(e) {
  return e
    .filter((t) => dr(t) || t instanceof Date)
    .map(Number)
    .filter((t) => Ut(t) === !1);
}
function lM(e, t, r) {
  return !r || typeof t != "number" || Ut(t)
    ? []
    : r.length
      ? li(
          r.flatMap((n) => {
            var i = kt(e, n.dataKey),
              a,
              o;
            if (
              (Array.isArray(i) ? ([a, o] = i) : (a = o = i),
              !(!ir(a) || !ir(o)))
            )
              return [t - a, t + o];
          }),
        )
      : [];
}
var Vb = (e, t, r) => {
    var n = {},
      i = t.reduce(
        (a, o) => (
          o.stackId == null ||
            (a[o.stackId] == null && (a[o.stackId] = []), a[o.stackId].push(o)),
          a
        ),
        n,
      );
    return Object.fromEntries(
      Object.entries(i).map((a) => {
        var [o, l] = a,
          s = l.map((u) => u.dataKey);
        return [o, { stackedData: EC(e, s, r), graphicalItems: l }];
      }),
    );
  },
  sM = A([ju, _o, ku], Vb),
  Yb = (e, t, r) => {
    var { dataStartIndex: n, dataEndIndex: i } = t;
    if (r !== "zAxis") {
      var a = CC(e, n, i);
      if (!(a != null && a[0] === 0 && a[1] === 0)) return a;
    }
  },
  uM = A([sM, oi, De], Yb),
  Gb = (e, t, r, n) =>
    r.length > 0
      ? e
          .flatMap((i) =>
            r.flatMap((a) => {
              var o,
                l,
                s =
                  (o = a.errorBars) === null || o === void 0
                    ? void 0
                    : o.filter((c) => Hb(n, c)),
                u = kt(
                  i,
                  (l = t.dataKey) !== null && l !== void 0 ? l : a.dataKey,
                );
              return { value: u, errorDomain: lM(i, u, s) };
            }),
          )
          .filter(Boolean)
      : (t == null ? void 0 : t.dataKey) != null
        ? e.map((i) => ({ value: kt(i, t.dataKey), errorDomain: [] }))
        : e.map((i) => ({ value: i, errorDomain: [] })),
  cM = A(ju, ht, aM, De, Gb);
function fM(e) {
  var { value: t } = e;
  if (dr(t) || t instanceof Date) return t;
}
var dM = (e) => {
    var t = e.flatMap((n) => [n.value, n.errorDomain]).flat(1),
      r = li(t);
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  pM = (e, t, r) => {
    var n = e.map(fM).filter((i) => i != null);
    return r && (t.dataKey == null || (t.allowDuplicatedCategory && Q1(n)))
      ? Lw(0, e.length)
      : t.allowDuplicatedCategory
        ? n
        : Array.from(new Set(n));
  },
  Sh = (e) => {
    var t;
    if (e == null || !("domain" in e)) return ld;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === "number") {
        var r = li(e.ticks);
        return [Math.min(...r), Math.max(...r)];
      }
      if (e.type === "category") return e.ticks.map(String);
    }
    return (t = e == null ? void 0 : e.domain) !== null && t !== void 0
      ? t
      : ld;
  },
  Ph = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r.filter(Boolean);
    if (i.length !== 0) {
      var a = i.flat(),
        o = Math.min(...a),
        l = Math.max(...a);
      return [o, l];
    }
  },
  qb = (e) => e.referenceElements.dots,
  ra = (e, t, r) =>
    e
      .filter((n) => n.ifOverflow === "extendDomain")
      .filter((n) => (t === "xAxis" ? n.xAxisId === r : n.yAxisId === r)),
  hM = A([qb, De, Au], ra),
  Xb = (e) => e.referenceElements.areas,
  mM = A([Xb, De, Au], ra),
  Qb = (e) => e.referenceElements.lines,
  vM = A([Qb, De, Au], ra),
  Zb = (e, t) => {
    var r = li(e.map((n) => (t === "xAxis" ? n.x : n.y)));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  gM = A(hM, De, Zb),
  Jb = (e, t) => {
    var r = li(
      e.flatMap((n) => [
        t === "xAxis" ? n.x1 : n.y1,
        t === "xAxis" ? n.x2 : n.y2,
      ]),
    );
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  yM = A([mM, De], Jb),
  eS = (e, t) => {
    var r = li(e.map((n) => (t === "xAxis" ? n.x : n.y)));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  xM = A(vM, De, eS),
  wM = A(gM, xM, yM, (e, t, r) => Ph(e, r, t)),
  bM = A([ht], Sh),
  tS = (e, t, r, n, i) => {
    var a = MN(t, e.allowDataOverflow);
    return a ?? DN(t, Ph(r, i, dM(n)), e.allowDataOverflow);
  },
  SM = A([ht, bM, uM, cM, wM], tS),
  PM = [0, 1],
  rS = (e, t, r, n, i, a, o) => {
    if (!(e == null || r == null || r.length === 0)) {
      var { dataKey: l, type: s } = e,
        u = vn(t, a);
      return u && l == null
        ? Lw(0, r.length)
        : s === "category"
          ? pM(n, e, u)
          : i === "expand"
            ? PM
            : o;
    }
  },
  Eh = A([ht, ge, ju, Tu, ku, De, SM], rS),
  nS = (e, t, r, n, i) => {
    if (e != null) {
      var { scale: a, type: o } = e;
      if (a === "auto")
        return t === "radial" && i === "radiusAxis"
          ? "band"
          : t === "radial" && i === "angleAxis"
            ? "linear"
            : o === "category" &&
                n &&
                (n.indexOf("LineChart") >= 0 ||
                  n.indexOf("AreaChart") >= 0 ||
                  (n.indexOf("ComposedChart") >= 0 && !r))
              ? "point"
              : o === "category"
                ? "band"
                : "linear";
      if (typeof a == "string") {
        var l = "scale".concat(wp(a));
        return l in _a ? l : "point";
      }
    }
  },
  Co = A([ht, ge, $b, mh, De], nS);
function EM(e) {
  if (e != null) {
    if (e in _a) return _a[e]();
    var t = "scale".concat(wp(e));
    if (t in _a) return _a[t]();
  }
}
function Oh(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function") return e.scale.copy().domain(r).range(n);
    var i = EM(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return (wC(a), a);
    }
  }
}
var iS = (e, t, r) => {
    var n = Sh(t);
    if (!(r !== "auto" && r !== "linear")) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(n) &&
        (n[0] === "auto" || n[1] === "auto") &&
        Gi(e)
      )
        return KN(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === "number" && Gi(e))
        return HN(e, t.tickCount, t.allowDecimals);
    }
  },
  kh = A([Eh, ko, Co], iS),
  aS = (e, t, r, n) => {
    if (
      n !== "angleAxis" &&
      (e == null ? void 0 : e.type) === "number" &&
      Gi(t) &&
      Array.isArray(r) &&
      r.length > 0
    ) {
      var i = t[0],
        a = r[0],
        o = t[1],
        l = r[r.length - 1];
      return [Math.min(i, a), Math.max(o, l)];
    }
    return t;
  },
  OM = A([ht, Eh, kh, De], aS),
  kM = A(Tu, ht, (e, t) => {
    if (!(!t || t.type !== "number")) {
      var r = 1 / 0,
        n = Array.from(li(e.map((l) => l.value))).sort((l, s) => l - s);
      if (n.length < 2) return 1 / 0;
      var i = n[n.length - 1] - n[0];
      if (i === 0) return 1 / 0;
      for (var a = 0; a < n.length - 1; a++) {
        var o = n[a + 1] - n[a];
        r = Math.min(r, o);
      }
      return r / i;
    }
  }),
  oS = A(
    kM,
    ge,
    VN,
    Ke,
    (e, t, r, n) => n,
    (e, t, r, n, i) => {
      if (!ir(e)) return 0;
      var a = t === "vertical" ? n.height : n.width;
      if (i === "gap") return (e * a) / 2;
      if (i === "no-gap") {
        var o = cn(r, e * a),
          l = (e * a) / 2;
        return l - o - ((l - o) / a) * o;
      }
      return 0;
    },
  ),
  _M = (e, t) => {
    var r = zr(e, t);
    return r == null || typeof r.padding != "string"
      ? 0
      : oS(e, "xAxis", t, r.padding);
  },
  CM = (e, t) => {
    var r = xn(e, t);
    return r == null || typeof r.padding != "string"
      ? 0
      : oS(e, "yAxis", t, r.padding);
  },
  AM = A(zr, _M, (e, t) => {
    var r, n;
    if (e == null) return { left: 0, right: 0 };
    var { padding: i } = e;
    return typeof i == "string"
      ? { left: t, right: t }
      : {
          left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
          right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t,
        };
  }),
  jM = A(xn, CM, (e, t) => {
    var r, n;
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: i } = e;
    return typeof i == "string"
      ? { top: t, bottom: t }
      : {
          top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
          bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t,
        };
  }),
  TM = A([Ke, AM, yu, gu, (e, t, r) => r], (e, t, r, n, i) => {
    var { padding: a } = n;
    return i
      ? [a.left, r.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  NM = A([Ke, ge, jM, yu, gu, (e, t, r) => r], (e, t, r, n, i, a) => {
    var { padding: o } = i;
    return a
      ? [n.height - o.bottom, o.top]
      : t === "horizontal"
        ? [e.top + e.height - r.bottom, e.top + r.top]
        : [e.top + r.top, e.top + e.height - r.bottom];
  }),
  Ao = (e, t, r, n) => {
    var i;
    switch (t) {
      case "xAxis":
        return TM(e, r, n);
      case "yAxis":
        return NM(e, r, n);
      case "zAxis":
        return (i = bh(e, r)) === null || i === void 0 ? void 0 : i.range;
      case "angleAxis":
        return Ib(e);
      case "radiusAxis":
        return Lb(e, r);
      default:
        return;
    }
  },
  lS = A([ht, Ao], _u),
  na = A([ht, Co, OM, lS], Oh);
A(_o, De, (e, t) =>
  e
    .flatMap((r) => {
      var n;
      return (n = r.errorBars) !== null && n !== void 0 ? n : [];
    })
    .filter((r) => Hb(t, r)),
);
function sS(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Nu = (e, t) => t,
  Mu = (e, t, r) => r,
  MM = A(zp, Nu, Mu, (e, t, r) =>
    e
      .filter((n) => n.orientation === t)
      .filter((n) => n.mirror === r)
      .sort(sS),
  ),
  DM = A(Fp, Nu, Mu, (e, t, r) =>
    e
      .filter((n) => n.orientation === t)
      .filter((n) => n.mirror === r)
      .sort(sS),
  ),
  uS = (e, t) => ({ width: e.width, height: t.height }),
  IM = (e, t) => {
    var r = typeof t.width == "number" ? t.width : vu;
    return { width: r, height: e.height };
  },
  LM = A(Ke, zr, uS),
  $M = (e, t, r) => {
    switch (t) {
      case "top":
        return e.top;
      case "bottom":
        return r - e.bottom;
      default:
        return 0;
    }
  },
  RM = (e, t, r) => {
    switch (t) {
      case "left":
        return e.left;
      case "right":
        return r - e.right;
      default:
        return 0;
    }
  },
  zM = A($r, Ke, MM, Nu, Mu, (e, t, r, n, i) => {
    var a = {},
      o;
    return (
      r.forEach((l) => {
        var s = uS(t, l);
        o == null && (o = $M(t, n, e));
        var u = (n === "top" && !i) || (n === "bottom" && i);
        ((a[l.id] = o - Number(u) * s.height), (o += (u ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  FM = A(Lr, Ke, DM, Nu, Mu, (e, t, r, n, i) => {
    var a = {},
      o;
    return (
      r.forEach((l) => {
        var s = IM(t, l);
        o == null && (o = RM(t, n, e));
        var u = (n === "left" && !i) || (n === "right" && i);
        ((a[l.id] = o - Number(u) * s.width), (o += (u ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  BM = (e, t) => {
    var r = Ke(e),
      n = zr(e, t);
    if (n != null) {
      var i = zM(e, n.orientation, n.mirror),
        a = i[t];
      return a == null ? { x: r.left, y: 0 } : { x: r.left, y: a };
    }
  },
  UM = (e, t) => {
    var r = Ke(e),
      n = xn(e, t);
    if (n != null) {
      var i = FM(e, n.orientation, n.mirror),
        a = i[t];
      return a == null ? { x: 0, y: r.top } : { x: a, y: r.top };
    }
  },
  WM = A(Ke, xn, (e, t) => {
    var r = typeof t.width == "number" ? t.width : vu;
    return { width: r, height: e.height };
  }),
  cS = (e, t, r, n) => {
    if (r != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = r,
        l = vn(e, n),
        s = t.map((u) => u.value);
      if (o && l && a === "category" && i && Q1(s)) return s;
    }
  },
  _h = A([ge, Tu, ht, De], cS),
  fS = (e, t, r, n) => {
    if (!(r == null || r.dataKey == null)) {
      var { type: i, scale: a } = r,
        o = vn(e, n);
      if (o && (i === "number" || a !== "auto")) return t.map((l) => l.value);
    }
  },
  Ch = A([ge, Tu, ko, De], fS),
  Fg = A([ge, nM, Co, na, _h, Ch, Ao, kh, De], (e, t, r, n, i, a, o, l, s) => {
    if (t == null) return null;
    var u = vn(e, s);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: s,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: u,
      niceTicks: l,
      range: o,
      realScaleType: r,
      scale: n,
    };
  }),
  KM = (e, t, r, n, i, a, o, l, s) => {
    if (!(t == null || n == null)) {
      var u = vn(e, s),
        { type: c, ticks: f, tickCount: d } = t,
        p =
          r === "scaleBand" && typeof n.bandwidth == "function"
            ? n.bandwidth() / 2
            : 2,
        h = c === "category" && n.bandwidth ? n.bandwidth() / p : 0;
      h =
        s === "angleAxis" && a != null && a.length >= 2
          ? $t(a[0] - a[1]) * 2 * h
          : h;
      var g = f || i;
      if (g) {
        var y = g.map((m, v) => {
          var x = o ? o.indexOf(m) : m;
          return { index: v, coordinate: n(x) + h, value: m, offset: h };
        });
        return y.filter((m) => !Ut(m.coordinate));
      }
      return u && l
        ? l.map((m, v) => ({
            coordinate: n(m) + h,
            value: m,
            index: v,
            offset: h,
          }))
        : n.ticks
          ? n
              .ticks(d)
              .map((m) => ({ coordinate: n(m) + h, value: m, offset: h }))
          : n
              .domain()
              .map((m, v) => ({
                coordinate: n(m) + h,
                value: o ? o[m] : m,
                index: v,
                offset: h,
              }));
    }
  },
  dS = A([ge, ko, Co, na, kh, Ao, _h, Ch, De], KM),
  HM = (e, t, r, n, i, a, o) => {
    if (!(t == null || r == null || n == null || n[0] === n[1])) {
      var l = vn(e, o),
        { tickCount: s } = t,
        u = 0;
      return (
        (u =
          o === "angleAxis" && (n == null ? void 0 : n.length) >= 2
            ? $t(n[0] - n[1]) * 2 * u
            : u),
        l && a
          ? a.map((c, f) => ({
              coordinate: r(c) + u,
              value: c,
              index: f,
              offset: u,
            }))
          : r.ticks
            ? r
                .ticks(s)
                .map((c) => ({ coordinate: r(c) + u, value: c, offset: u }))
            : r
                .domain()
                .map((c, f) => ({
                  coordinate: r(c) + u,
                  value: i ? i[c] : c,
                  index: f,
                  offset: u,
                }))
      );
    }
  },
  pS = A([ge, ko, na, Ao, _h, Ch, De], HM),
  Du = A(ht, na, (e, t) => {
    if (!(e == null || t == null)) return ws(ws({}, e), {}, { scale: t });
  }),
  VM = A([ht, Co, Eh, lS], Oh);
A(
  (e, t, r) => bh(e, r),
  VM,
  (e, t) => {
    if (!(e == null || t == null)) return ws(ws({}, e), {}, { scale: t });
  },
);
var YM = A([ge, zp, Fp], (e, t, r) => {
    switch (e) {
      case "horizontal":
        return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
      case "vertical":
        return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
      case "centric":
      case "radial":
        return "left-to-right";
      default:
        return;
    }
  }),
  hS = (e) => e.options.defaultTooltipEventType,
  mS = (e) => e.options.validateTooltipEventTypes;
function vS(e, t, r) {
  if (e == null) return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Ah(e, t) {
  var r = hS(e),
    n = mS(e);
  return vS(t, r, n);
}
function GM(e) {
  return H((t) => Ah(t, e));
}
var gS = (e, t) => {
    var r,
      n = Number(t);
    if (!(Ut(n) || t == null))
      return n >= 0
        ? e == null || (r = e[n]) === null || r === void 0
          ? void 0
          : r.value
        : void 0;
  },
  qM = (e) => e.tooltip.settings,
  qr = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  XM = {
    itemInteraction: { click: qr, hover: qr },
    axisInteraction: { click: qr, hover: qr },
    keyboardInteraction: qr,
    syncInteraction: {
      active: !1,
      index: null,
      dataKey: void 0,
      label: void 0,
      coordinate: void 0,
    },
    tooltipItemPayloads: [],
    settings: {
      shared: void 0,
      trigger: "hover",
      axisId: 0,
      active: !1,
      defaultIndex: void 0,
    },
  },
  yS = Vt({
    name: "tooltip",
    initialState: XM,
    reducers: {
      addTooltipEntrySettings(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      removeTooltipEntrySettings(e, t) {
        var r = Pr(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate),
          (e.keyboardInteraction.dataKey = t.payload.activeDataKey));
      },
    },
  }),
  {
    addTooltipEntrySettings: QM,
    removeTooltipEntrySettings: ZM,
    setTooltipSettingsState: JM,
    setActiveMouseOverItemIndex: eD,
    mouseLeaveItem: v4,
    mouseLeaveChart: xS,
    setActiveClickItemIndex: g4,
    setMouseOverAxisIndex: wS,
    setMouseClickAxisIndex: tD,
    setSyncInteraction: sd,
    setKeyboardInteraction: ud,
  } = yS.actions,
  rD = yS.reducer;
function Bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bg(Object(r), !0).forEach(function (n) {
          nD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nD(e, t, r) {
  return (
    (t = iD(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iD(e) {
  var t = aD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oD(e, t, r) {
  return t === "axis"
    ? r === "click"
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : r === "click"
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function lD(e) {
  return e.index != null;
}
var bS = (e, t, r, n) => {
    if (t == null) return qr;
    var i = oD(e, t, r);
    if (i == null) return qr;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (lD(i)) {
      if (a) return sl(sl({}, i), {}, { active: !0 });
    } else if (n != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: n };
    return sl(sl({}, qr), {}, { coordinate: i.coordinate });
  },
  jh = (e, t) => {
    var r = e == null ? void 0 : e.index;
    if (r == null) return null;
    var n = Number(r);
    if (!ir(n)) return r;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1),
      String(Math.max(i, Math.min(n, a)))
    );
  },
  SS = (e, t, r, n, i, a, o, l) => {
    if (!(a == null || l == null)) {
      var s = o[0],
        u = s == null ? void 0 : l(s.positions, a);
      if (u != null) return u;
      var c = i == null ? void 0 : i[Number(a)];
      if (c)
        switch (r) {
          case "horizontal":
            return { x: c.coordinate, y: (n.top + t) / 2 };
          default:
            return { x: (n.left + e) / 2, y: c.coordinate };
        }
    }
  },
  PS = (e, t, r, n) => {
    if (t === "axis") return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var i;
    return (
      r === "hover"
        ? (i = e.itemInteraction.hover.dataKey)
        : (i = e.itemInteraction.click.dataKey),
      i == null && n != null
        ? [e.tooltipItemPayloads[0]]
        : e.tooltipItemPayloads.filter((a) => {
            var o;
            return (
              ((o = a.settings) === null || o === void 0
                ? void 0
                : o.dataKey) === i
            );
          })
    );
  },
  jo = (e) => e.options.tooltipPayloadSearcher,
  ia = (e) => e.tooltip;
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Wg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ug(Object(r), !0).forEach(function (n) {
          sD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ug(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function sD(e, t, r) {
  return (
    (t = uD(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function uD(e) {
  var t = cD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fD(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function dD(e, t) {
  return e ?? t;
}
var ES = (e, t, r, n, i, a, o) => {
    if (!(t == null || a == null)) {
      var {
          chartData: l,
          computedData: s,
          dataStartIndex: u,
          dataEndIndex: c,
        } = r,
        f = [];
      return e.reduce((d, p) => {
        var h,
          { dataDefinedOnItem: g, settings: y } = p,
          m = dD(g, l),
          v = fD(m, u, c),
          x =
            (h = y == null ? void 0 : y.dataKey) !== null && h !== void 0
              ? h
              : n == null
                ? void 0
                : n.dataKey,
          S = y == null ? void 0 : y.nameKey,
          P;
        if (
          (n != null &&
          n.dataKey &&
          Array.isArray(v) &&
          !Array.isArray(v[0]) &&
          o === "axis"
            ? (P = Z1(v, n.dataKey, i))
            : (P = a(v, t, s, S)),
          Array.isArray(P))
        )
          P.forEach((O) => {
            var k = Wg(
              Wg({}, y),
              {},
              { name: O.name, unit: O.unit, color: void 0, fill: void 0 },
            );
            d.push(
              Iv({
                tooltipEntrySettings: k,
                dataKey: O.dataKey,
                payload: O.payload,
                value: kt(O.payload, O.dataKey),
                name: O.name,
              }),
            );
          });
        else {
          var E;
          d.push(
            Iv({
              tooltipEntrySettings: y,
              dataKey: x,
              payload: P,
              value: kt(P, x),
              name:
                (E = kt(P, S)) !== null && E !== void 0
                  ? E
                  : y == null
                    ? void 0
                    : y.name,
            }),
          );
        }
        return d;
      }, f);
    }
  },
  Ie = (e) => {
    var t = ge(e);
    return t === "horizontal"
      ? "xAxis"
      : t === "vertical"
        ? "yAxis"
        : t === "centric"
          ? "angleAxis"
          : "radiusAxis";
  },
  aa = (e) => e.tooltip.settings.axisId,
  He = (e) => {
    var t = Ie(e),
      r = aa(e);
    return ko(e, t, r);
  },
  Th = A([He, ge, $b, mh, Ie], nS),
  pD = A(
    [
      (e) => e.graphicalItems.cartesianItems,
      (e) => e.graphicalItems.polarItems,
    ],
    (e, t) => [...e, ...t],
  ),
  hD = A([Ie, aa], Rb),
  Iu = A([pD, He, hD], Fb),
  mD = A([Iu], Ub),
  si = A([mD, oi], Wb),
  Nh = A([si, He, Iu], Kb),
  vD = A([He], Sh),
  gD = A([si, Iu, ku], Vb),
  yD = A([gD, oi, Ie], Yb),
  xD = A([Iu], Bb),
  wD = A([si, He, xD, Ie], Gb),
  bD = A([qb, Ie, aa], ra),
  SD = A([bD, Ie], Zb),
  PD = A([Xb, Ie, aa], ra),
  ED = A([PD, Ie], Jb),
  OD = A([Qb, Ie, aa], ra),
  kD = A([OD, Ie], eS),
  _D = A([SD, kD, ED], Ph),
  CD = A([He, vD, yD, wD, _D], tS),
  OS = A([He, ge, si, Nh, ku, Ie, CD], rS),
  AD = A([OS, He, Th], iS),
  jD = A([He, OS, AD, Ie], aS),
  kS = (e) => {
    var t = Ie(e),
      r = aa(e),
      n = !1;
    return Ao(e, t, r, n);
  },
  _S = A([He, kS], _u),
  CS = A([He, Th, jD, _S], Oh),
  TD = A([ge, Nh, He, Ie], cS),
  ND = A([ge, Nh, He, Ie], fS),
  MD = (e, t, r, n, i, a, o, l) => {
    if (t) {
      var { type: s } = t,
        u = vn(e, l);
      if (n) {
        var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2,
          f = s === "category" && n.bandwidth ? n.bandwidth() / c : 0;
        return (
          (f =
            l === "angleAxis" &&
            i != null &&
            (i == null ? void 0 : i.length) >= 2
              ? $t(i[0] - i[1]) * 2 * f
              : f),
          u && o
            ? o.map((d, p) => ({
                coordinate: n(d) + f,
                value: d,
                index: p,
                offset: f,
              }))
            : n
                .domain()
                .map((d, p) => ({
                  coordinate: n(d) + f,
                  value: a ? a[d] : d,
                  index: p,
                  offset: f,
                }))
        );
      }
    }
  },
  Fr = A([ge, He, Th, CS, kS, TD, ND, Ie], MD),
  Mh = A([hS, mS, qM], (e, t, r) => vS(r.shared, e, t)),
  AS = (e) => e.tooltip.settings.trigger,
  Dh = (e) => e.tooltip.settings.defaultIndex,
  Lu = A([ia, Mh, AS, Dh], bS),
  fo = A([Lu, si], jh),
  jS = A([Fr, fo], gS),
  DD = A([Lu], (e) => {
    if (e) return e.dataKey;
  }),
  TS = A([ia, Mh, AS, Dh], PS),
  ID = A([Lr, $r, ge, Ke, Fr, Dh, TS, jo], SS),
  LD = A([Lu, ID], (e, t) => (e != null && e.coordinate ? e.coordinate : t)),
  $D = A([Lu], (e) => e.active),
  RD = A([TS, fo, oi, He, jS, jo, Mh], ES),
  zD = A([RD], (e) => {
    if (e != null) {
      var t = e.map((r) => r.payload).filter((r) => r != null);
      return Array.from(new Set(t));
    }
  });
function Kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Hg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kg(Object(r), !0).forEach(function (n) {
          FD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Kg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function FD(e, t, r) {
  return (
    (t = BD(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function BD(e) {
  var t = UD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var WD = () => H(He),
  KD = () => {
    var e = WD(),
      t = H(Fr),
      r = H(CS);
    return Kf(Hg(Hg({}, e), {}, { scale: r }), t);
  },
  HD = () => H(mh),
  Ih = (e, t) => t,
  NS = (e, t, r) => r,
  Lh = (e, t, r, n) => n,
  VD = A(Fr, (e) => uu(e, (t) => t.coordinate)),
  $h = A([ia, Ih, NS, Lh], bS),
  MS = A([$h, si], jh),
  YD = (e, t, r) => {
    if (t != null) {
      var n = ia(e);
      return t === "axis"
        ? r === "hover"
          ? n.axisInteraction.hover.dataKey
          : n.axisInteraction.click.dataKey
        : r === "hover"
          ? n.itemInteraction.hover.dataKey
          : n.itemInteraction.click.dataKey;
    }
  },
  DS = A([ia, Ih, NS, Lh], PS),
  bs = A([Lr, $r, ge, Ke, Fr, Lh, DS, jo], SS),
  GD = A([$h, bs], (e, t) => {
    var r;
    return (r = e.coordinate) !== null && r !== void 0 ? r : t;
  }),
  IS = A(Fr, MS, gS),
  qD = A([DS, MS, oi, He, IS, jo, Ih], ES),
  XD = A([$h], (e) => ({ isActive: e.active, activeIndex: e.index })),
  QD = (e, t, r, n, i, a, o, l) => {
    if (!(!e || !t || !n || !i || !a)) {
      var s = AC(e.chartX, e.chartY, t, r, l);
      if (s) {
        var u = TC(s, t),
          c = yC(u, o, a, n, i),
          f = jC(t, a, c, s);
        return { activeIndex: String(c), activeCoordinate: f };
      }
    }
  };
function cd() {
  return (
    (cd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    cd.apply(null, arguments)
  );
}
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vg(Object(r), !0).forEach(function (n) {
          ZD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ZD(e, t, r) {
  return (
    (t = JD(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JD(e) {
  var t = eI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tI(e) {
  var {
      coordinate: t,
      payload: r,
      index: n,
      offset: i,
      tooltipAxisBandSize: a,
      layout: o,
      cursor: l,
      tooltipEventType: s,
      chartName: u,
    } = e,
    c = t,
    f = r,
    d = n;
  if (!l || !c || (u !== "ScatterChart" && s !== "axis")) return null;
  var p, h;
  if (u === "ScatterChart") ((p = c), (h = yA));
  else if (u === "BarChart") ((p = xA(o, c, i, a)), (h = QA));
  else if (o === "radial") {
    var { cx: g, cy: y, radius: m, startAngle: v, endAngle: x } = Tw(c);
    ((p = {
      cx: g,
      cy: y,
      startAngle: v,
      endAngle: x,
      innerRadius: m,
      outerRadius: m,
    }),
      (h = tj));
  } else ((p = { points: rj(o, c, i) }), (h = Pw));
  var S = typeof l == "object" && "className" in l ? l.className : void 0,
    P = ul(
      ul(ul(ul({ stroke: "#ccc", pointerEvents: "none" }, i), p), ue(l, !1)),
      {},
      {
        payload: f,
        payloadIndex: d,
        className: se("recharts-tooltip-cursor", S),
      },
    );
  return b.isValidElement(l) ? b.cloneElement(l, P) : b.createElement(h, P);
}
function rI(e) {
  var t = KD(),
    r = yw(),
    n = Up(),
    i = HD();
  return b.createElement(
    tI,
    cd({}, e, {
      coordinate: e.coordinate,
      index: e.index,
      payload: e.payload,
      offset: r,
      layout: n,
      tooltipAxisBandSize: t,
      chartName: i,
    }),
  );
}
var LS = b.createContext(null),
  nI = () => b.useContext(LS),
  $S = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(s, u, c) {
    ((this.fn = s), (this.context = u), (this.once = c || !1));
  }
  function a(s, u, c, f, d) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(c, f || s, d),
      h = r ? r + u : u;
    return (
      s._events[h]
        ? s._events[h].fn
          ? (s._events[h] = [s._events[h], p])
          : s._events[h].push(p)
        : ((s._events[h] = p), s._eventsCount++),
      s
    );
  }
  function o(s, u) {
    --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[u];
  }
  function l() {
    ((this._events = new n()), (this._eventsCount = 0));
  }
  ((l.prototype.eventNames = function () {
    var u = [],
      c,
      f;
    if (this._eventsCount === 0) return u;
    for (f in (c = this._events)) t.call(c, f) && u.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? u.concat(Object.getOwnPropertySymbols(c))
      : u;
  }),
    (l.prototype.listeners = function (u) {
      var c = r ? r + u : u,
        f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, p = f.length, h = new Array(p); d < p; d++)
        h[d] = f[d].fn;
      return h;
    }),
    (l.prototype.listenerCount = function (u) {
      var c = r ? r + u : u,
        f = this._events[c];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (l.prototype.emit = function (u, c, f, d, p, h) {
      var g = r ? r + u : u;
      if (!this._events[g]) return !1;
      var y = this._events[g],
        m = arguments.length,
        v,
        x;
      if (y.fn) {
        switch ((y.once && this.removeListener(u, y.fn, void 0, !0), m)) {
          case 1:
            return (y.fn.call(y.context), !0);
          case 2:
            return (y.fn.call(y.context, c), !0);
          case 3:
            return (y.fn.call(y.context, c, f), !0);
          case 4:
            return (y.fn.call(y.context, c, f, d), !0);
          case 5:
            return (y.fn.call(y.context, c, f, d, p), !0);
          case 6:
            return (y.fn.call(y.context, c, f, d, p, h), !0);
        }
        for (x = 1, v = new Array(m - 1); x < m; x++) v[x - 1] = arguments[x];
        y.fn.apply(y.context, v);
      } else {
        var S = y.length,
          P;
        for (x = 0; x < S; x++)
          switch (
            (y[x].once && this.removeListener(u, y[x].fn, void 0, !0), m)
          ) {
            case 1:
              y[x].fn.call(y[x].context);
              break;
            case 2:
              y[x].fn.call(y[x].context, c);
              break;
            case 3:
              y[x].fn.call(y[x].context, c, f);
              break;
            case 4:
              y[x].fn.call(y[x].context, c, f, d);
              break;
            default:
              if (!v)
                for (P = 1, v = new Array(m - 1); P < m; P++)
                  v[P - 1] = arguments[P];
              y[x].fn.apply(y[x].context, v);
          }
      }
      return !0;
    }),
    (l.prototype.on = function (u, c, f) {
      return a(this, u, c, f, !1);
    }),
    (l.prototype.once = function (u, c, f) {
      return a(this, u, c, f, !0);
    }),
    (l.prototype.removeListener = function (u, c, f, d) {
      var p = r ? r + u : u;
      if (!this._events[p]) return this;
      if (!c) return (o(this, p), this);
      var h = this._events[p];
      if (h.fn)
        h.fn === c && (!d || h.once) && (!f || h.context === f) && o(this, p);
      else {
        for (var g = 0, y = [], m = h.length; g < m; g++)
          (h[g].fn !== c || (d && !h[g].once) || (f && h[g].context !== f)) &&
            y.push(h[g]);
        y.length ? (this._events[p] = y.length === 1 ? y[0] : y) : o(this, p);
      }
      return this;
    }),
    (l.prototype.removeAllListeners = function (u) {
      var c;
      return (
        u
          ? ((c = r ? r + u : u), this._events[c] && o(this, c))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (l.prototype.off = l.prototype.removeListener),
    (l.prototype.addListener = l.prototype.on),
    (l.prefixed = r),
    (l.EventEmitter = l),
    (e.exports = l));
})($S);
var iI = $S.exports;
const aI = Mr(iI);
var po = new aI(),
  fd = "recharts.syncEvent.tooltip",
  Yg = "recharts.syncEvent.brush";
function oI(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!Ut(r)) return e == null ? void 0 : e[r];
  }
}
var lI = {
    chartName: "",
    tooltipPayloadSearcher: void 0,
    eventEmitter: void 0,
    defaultTooltipEventType: "axis",
  },
  RS = Vt({
    name: "options",
    initialState: lI,
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter == null &&
          (e.eventEmitter = Symbol("rechartsEventEmitter"));
      },
    },
  }),
  sI = RS.reducer,
  { createEventEmitter: uI } = RS.actions;
function cI(e) {
  return e.tooltip.syncInteraction;
}
var fI = {
    chartData: void 0,
    computedData: void 0,
    dataStartIndex: 0,
    dataEndIndex: 0,
  },
  zS = Vt({
    name: "chartData",
    initialState: fI,
    reducers: {
      setChartData(e, t) {
        if (((e.chartData = t.payload), t.payload == null)) {
          ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
          return;
        }
        t.payload.length > 0 &&
          e.dataEndIndex !== t.payload.length - 1 &&
          (e.dataEndIndex = t.payload.length - 1);
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: r, endIndex: n } = t.payload;
        (r != null && (e.dataStartIndex = r),
          n != null && (e.dataEndIndex = n));
      },
    },
  }),
  {
    setChartData: Gg,
    setDataStartEndIndexes: dI,
    setComputedData: y4,
  } = zS.actions,
  pI = zS.reducer,
  FS = () => {};
function hI() {
  var e = H(vh),
    t = H(gh),
    r = nt(),
    n = H(Nb),
    i = H(Fr),
    a = Up(),
    o = Bp(),
    l = H((s) => s.rootProps.className);
  b.useEffect(() => {
    if (e == null) return FS;
    var s = (u, c, f) => {
      if (t !== f && e === u) {
        if (n === "index") {
          r(c);
          return;
        }
        if (i != null) {
          var d;
          if (typeof n == "function") {
            var p = {
                activeTooltipIndex:
                  c.payload.index == null ? void 0 : Number(c.payload.index),
                isTooltipActive: c.payload.active,
                activeIndex:
                  c.payload.index == null ? void 0 : Number(c.payload.index),
                activeLabel: c.payload.label,
                activeDataKey: c.payload.dataKey,
                activeCoordinate: c.payload.coordinate,
              },
              h = n(i, p);
            d = i[h];
          } else
            n === "value" &&
              (d = i.find((E) => String(E.value) === c.payload.label));
          var { coordinate: g } = c.payload;
          if (d == null || c.payload.active === !1 || g == null || o == null) {
            r(
              sd({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
              }),
            );
            return;
          }
          var { x: y, y: m } = g,
            v = Math.min(y, o.x + o.width),
            x = Math.min(m, o.y + o.height),
            S = {
              x: a === "horizontal" ? d.coordinate : v,
              y: a === "horizontal" ? x : d.coordinate,
            },
            P = sd({
              active: c.payload.active,
              coordinate: S,
              dataKey: c.payload.dataKey,
              index: String(d.index),
              label: c.payload.label,
            });
          r(P);
        }
      }
    };
    return (
      po.on(fd, s),
      () => {
        po.off(fd, s);
      }
    );
  }, [l, r, t, e, n, i, a, o]);
}
function mI() {
  var e = H(vh),
    t = H(gh),
    r = nt();
  b.useEffect(() => {
    if (e == null) return FS;
    var n = (i, a, o) => {
      t !== o && e === i && r(dI(a));
    };
    return (
      po.on(Yg, n),
      () => {
        po.off(Yg, n);
      }
    );
  }, [r, t, e]);
}
function vI() {
  var e = nt();
  (b.useEffect(() => {
    e(uI());
  }, [e]),
    hI(),
    mI());
}
function gI(e, t, r, n, i, a) {
  var o = H((d) => YD(d, e, t)),
    l = H(gh),
    s = H(vh),
    u = H(Nb),
    c = H(cI),
    f = c == null ? void 0 : c.active;
  b.useEffect(() => {
    if (!f && s != null && l != null) {
      var d = sd({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n,
      });
      po.emit(fd, s, d, l);
    }
  }, [f, r, o, i, n, l, s, u, a]);
}
function qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qg(Object(r), !0).forEach(function (n) {
          yI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function yI(e, t, r) {
  return (
    (t = xI(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function xI(e) {
  var t = wI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bI(e) {
  return e.dataKey;
}
function SI(e, t) {
  return b.isValidElement(e)
    ? b.cloneElement(e, t)
    : typeof e == "function"
      ? b.createElement(e, t)
      : b.createElement(XC, t);
}
var Qg = [],
  PI = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: "ease",
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !bo.isSsr,
    itemSorter: "name",
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function EI(e) {
  var t = ni(e, PI),
    {
      active: r,
      allowEscapeViewBox: n,
      animationDuration: i,
      animationEasing: a,
      content: o,
      filterNull: l,
      isAnimationActive: s,
      offset: u,
      payloadUniqBy: c,
      position: f,
      reverseDirection: d,
      useTranslate3d: p,
      wrapperStyle: h,
      cursor: g,
      shared: y,
      trigger: m,
      defaultIndex: v,
      portal: x,
      axisId: S,
    } = t,
    P = nt(),
    E = typeof v == "number" ? String(v) : v;
  b.useEffect(() => {
    P(JM({ shared: y, trigger: m, axisId: S, active: r, defaultIndex: E }));
  }, [P, y, m, S, r, E]);
  var O = Bp(),
    k = Sw(),
    _ = GM(y),
    { activeIndex: j, isActive: T } = H((Ae) => XD(Ae, _, m, E)),
    L = H((Ae) => qD(Ae, _, m, E)),
    Y = H((Ae) => IS(Ae, _, m, E)),
    F = H((Ae) => GD(Ae, _, m, E)),
    D = L,
    V = nI(),
    B = r ?? T,
    [C, M] = l_([D, B]),
    W = _ === "axis" ? Y : void 0;
  gI(_, m, F, W, j, B);
  var G = x ?? V;
  if (G == null) return null;
  var $ = D ?? Qg;
  (B || ($ = Qg),
    l &&
      $.length &&
      ($ = Ok(
        D.filter(
          (Ae) => Ae.value != null && (Ae.hide !== !0 || t.includeHidden),
        ),
        c,
        bI,
      )));
  var fe = $.length > 0,
    Le = b.createElement(
      nA,
      {
        allowEscapeViewBox: n,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: s,
        active: B,
        coordinate: F,
        hasPayload: fe,
        offset: u,
        position: f,
        reverseDirection: d,
        useTranslate3d: p,
        viewBox: O,
        wrapperStyle: h,
        lastBoundingBox: C,
        innerRef: M,
        hasPortalFromProps: !!x,
      },
      SI(
        o,
        Xg(
          Xg({}, t),
          {},
          {
            payload: $,
            label: W,
            active: B,
            coordinate: F,
            accessibilityLayer: k,
          },
        ),
      ),
    );
  return b.createElement(
    b.Fragment,
    null,
    B1.createPortal(Le, G),
    B &&
      b.createElement(rI, {
        cursor: g,
        tooltipEventType: _,
        coordinate: F,
        payload: D,
        index: j,
      }),
  );
}
var BS = {},
  US = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r, n = 0, i = {}) {
    typeof i != "object" && (i = {});
    let a = null,
      o = null,
      l = null,
      s = 0,
      u = null,
      c;
    const { leading: f = !1, trailing: d = !0, maxWait: p } = i,
      h = "maxWait" in i,
      g = h ? Math.max(Number(p) || 0, n) : 0,
      y = (O) => (
        a !== null && (c = r.apply(o, a)),
        (a = o = null),
        (s = O),
        c
      ),
      m = (O) => ((s = O), (u = setTimeout(P, n)), f && a !== null ? y(O) : c),
      v = (O) => ((u = null), d && a !== null ? y(O) : c),
      x = (O) => {
        if (l === null) return !0;
        const k = O - l,
          _ = k >= n || k < 0,
          j = h && O - s >= g;
        return _ || j;
      },
      S = (O) => {
        const k = l === null ? 0 : O - l,
          _ = n - k,
          j = g - (O - s);
        return h ? Math.min(_, j) : _;
      },
      P = () => {
        const O = Date.now();
        if (x(O)) return v(O);
        u = setTimeout(P, S(O));
      },
      E = function (...O) {
        const k = Date.now(),
          _ = x(k);
        if (((a = O), (o = this), (l = k), _)) {
          if (u === null) return m(k);
          if (h) return (clearTimeout(u), (u = setTimeout(P, n)), y(k));
        }
        return (u === null && (u = setTimeout(P, n)), c);
      };
    return (
      (E.cancel = () => {
        (u !== null && clearTimeout(u), (s = 0), (l = a = o = u = null));
      }),
      (E.flush = () => (u === null ? c : v(Date.now()))),
      E
    );
  }
  e.debounce = t;
})(US);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = US;
  function r(n, i = 0, a = {}) {
    const { leading: o = !0, trailing: l = !0 } = a;
    return t.debounce(n, i, { leading: o, maxWait: i, trailing: l });
  }
  e.throttle = r;
})(BS);
var OI = BS.throttle;
const kI = Mr(OI);
var $a = function (t, r) {
  for (
    var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    i[a - 2] = arguments[a];
};
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zg(Object(r), !0).forEach(function (n) {
          _I(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _I(e, t, r) {
  return (
    (t = CI(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CI(e) {
  var t = AI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jI = b.forwardRef((e, t) => {
  var {
      aspect: r,
      initialDimension: n = { width: -1, height: -1 },
      width: i = "100%",
      height: a = "100%",
      minWidth: o = 0,
      minHeight: l,
      maxHeight: s,
      children: u,
      debounce: c = 0,
      id: f,
      className: d,
      onResize: p,
      style: h = {},
    } = e,
    g = b.useRef(null),
    y = b.useRef();
  ((y.current = p), b.useImperativeHandle(t, () => g.current));
  var [m, v] = b.useState({
      containerWidth: n.width,
      containerHeight: n.height,
    }),
    x = b.useCallback((P, E) => {
      v((O) => {
        var k = Math.round(P),
          _ = Math.round(E);
        return O.containerWidth === k && O.containerHeight === _
          ? O
          : { containerWidth: k, containerHeight: _ };
      });
    }, []);
  b.useEffect(() => {
    var P = (_) => {
      var j,
        { width: T, height: L } = _[0].contentRect;
      (x(T, L), (j = y.current) === null || j === void 0 || j.call(y, T, L));
    };
    c > 0 && (P = kI(P, c, { trailing: !0, leading: !1 }));
    var E = new ResizeObserver(P),
      { width: O, height: k } = g.current.getBoundingClientRect();
    return (
      x(O, k),
      E.observe(g.current),
      () => {
        E.disconnect();
      }
    );
  }, [x, c]);
  var S = b.useMemo(() => {
    var { containerWidth: P, containerHeight: E } = m;
    if (P < 0 || E < 0) return null;
    ($a(
      Mn(i) || Mn(a),
      `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
      i,
      a,
    ),
      $a(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
    var O = Mn(i) ? P : i,
      k = Mn(a) ? E : a;
    return (
      r && r > 0 && (O ? (k = O / r) : k && (O = k * r), s && k > s && (k = s)),
      $a(
        O > 0 || k > 0,
        `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
        O,
        k,
        i,
        a,
        o,
        l,
        r,
      ),
      b.Children.map(u, (_) =>
        b.cloneElement(_, {
          width: O,
          height: k,
          style: jc({ width: O, height: k }, _.props.style),
        }),
      )
    );
  }, [r, u, a, s, l, o, m, i]);
  return b.createElement(
    "div",
    {
      id: f ? "".concat(f) : void 0,
      className: se("recharts-responsive-container", d),
      style: jc(
        jc({}, h),
        {},
        { width: i, height: a, minWidth: o, minHeight: l, maxHeight: s },
      ),
      ref: g,
    },
    b.createElement(
      "div",
      { style: { width: 0, height: 0, overflow: "visible" } },
      S,
    ),
  );
});
function Jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jg(Object(r), !0).forEach(function (n) {
          TI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function TI(e, t, r) {
  return (
    (t = NI(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function NI(e) {
  var t = MI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fi = { widthCache: {}, cacheCount: 0 },
  DI = 2e3,
  II = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  ey = "recharts_measurement_span";
function LI(e) {
  var t = dd({}, e);
  return (
    Object.keys(t).forEach((r) => {
      t[r] || delete t[r];
    }),
    t
  );
}
var Ra = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || bo.isSsr) return { width: 0, height: 0 };
    var n = LI(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (fi.widthCache[i]) return fi.widthCache[i];
    try {
      var a = document.getElementById(ey);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", ey),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = dd(dd({}, II), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var l = a.getBoundingClientRect(),
        s = { width: l.width, height: l.height };
      return (
        (fi.widthCache[i] = s),
        ++fi.cacheCount > DI && ((fi.cacheCount = 0), (fi.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  ty = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ry = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  $I = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  RI = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  WS = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  zI = Object.keys(WS),
  Ei = "NaN";
function FI(e, t) {
  return e * WS[t];
}
class ot {
  static parse(t) {
    var r,
      [, n, i] = (r = RI.exec(t)) !== null && r !== void 0 ? r : [];
    return new ot(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    ((this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Ut(t) && (this.unit = ""),
      r !== "" && !$I.test(r) && ((this.num = NaN), (this.unit = "")),
      zI.includes(r) && ((this.num = FI(t, r)), (this.unit = "px")));
  }
  add(t) {
    return this.unit !== t.unit
      ? new ot(NaN, "")
      : new ot(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit
      ? new ot(NaN, "")
      : new ot(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new ot(NaN, "")
      : new ot(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new ot(NaN, "")
      : new ot(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Ut(this.num);
  }
}
function KS(e) {
  if (e.includes(Ei)) return Ei;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      [, n, i, a] = (r = ty.exec(t)) !== null && r !== void 0 ? r : [],
      o = ot.parse(n ?? ""),
      l = ot.parse(a ?? ""),
      s = i === "*" ? o.multiply(l) : o.divide(l);
    if (s.isNaN()) return Ei;
    t = t.replace(ty, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var u,
      [, c, f, d] = (u = ry.exec(t)) !== null && u !== void 0 ? u : [],
      p = ot.parse(c ?? ""),
      h = ot.parse(d ?? ""),
      g = f === "+" ? p.add(h) : p.subtract(h);
    if (g.isNaN()) return Ei;
    t = t.replace(ry, g.toString());
  }
  return t;
}
var ny = /\(([^()]*)\)/;
function BI(e) {
  for (var t = e, r; (r = ny.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(ny, KS(n));
  }
  return t;
}
function UI(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = BI(t)), (t = KS(t)), t);
}
function WI(e) {
  try {
    return UI(e);
  } catch {
    return Ei;
  }
}
function Tc(e) {
  var t = WI(e.slice(5, -1));
  return t === Ei ? "" : t;
}
var KI = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  HI = ["dx", "dy", "angle", "className", "breakAll"];
function pd() {
  return (
    (pd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pd.apply(null, arguments)
  );
}
function iy(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = VI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function VI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var HS = /[ \f\n\r\t\v\u2028\u2029]+/,
  VS = (e) => {
    var { children: t, breakAll: r, style: n } = e;
    try {
      var i = [];
      be(t) ||
        (r ? (i = t.toString().split("")) : (i = t.toString().split(HS)));
      var a = i.map((l) => ({ word: l, width: Ra(l, n).width })),
        o = r ? 0 : Ra(" ", n).width;
      return { wordsWithComputedWidth: a, spaceWidth: o };
    } catch {
      return null;
    }
  },
  YI = (e, t, r, n, i) => {
    var { maxLines: a, children: o, style: l, breakAll: s } = e,
      u = K(a),
      c = o,
      f = function () {
        var T =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return T.reduce((L, Y) => {
          var { word: F, width: D } = Y,
            V = L[L.length - 1];
          if (V && (n == null || i || V.width + D + r < Number(n)))
            (V.words.push(F), (V.width += D + r));
          else {
            var B = { words: [F], width: D };
            L.push(B);
          }
          return L;
        }, []);
      },
      d = f(t),
      p = (j) => j.reduce((T, L) => (T.width > L.width ? T : L));
    if (!u || i) return d;
    var h = d.length > a || p(d).width > Number(n);
    if (!h) return d;
    for (
      var g = "…",
        y = (j) => {
          var T = c.slice(0, j),
            L = VS({
              breakAll: s,
              style: l,
              children: T + g,
            }).wordsWithComputedWidth,
            Y = f(L),
            F = Y.length > a || p(Y).width > Number(n);
          return [F, Y];
        },
        m = 0,
        v = c.length - 1,
        x = 0,
        S;
      m <= v && x <= c.length - 1;
    ) {
      var P = Math.floor((m + v) / 2),
        E = P - 1,
        [O, k] = y(E),
        [_] = y(P);
      if ((!O && !_ && (m = P + 1), O && _ && (v = P - 1), !O && _)) {
        S = k;
        break;
      }
      x++;
    }
    return S || d;
  },
  ay = (e) => {
    var t = be(e) ? [] : e.toString().split(HS);
    return [{ words: t }];
  },
  GI = (e) => {
    var {
      width: t,
      scaleToFit: r,
      children: n,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || r) && !bo.isSsr) {
      var l,
        s,
        u = VS({ breakAll: a, children: n, style: i });
      if (u) {
        var { wordsWithComputedWidth: c, spaceWidth: f } = u;
        ((l = c), (s = f));
      } else return ay(n);
      return YI(
        { breakAll: a, children: n, maxLines: o, style: i },
        l,
        s,
        t,
        r,
      );
    }
    return ay(n);
  },
  oy = "#808080",
  Rh = b.forwardRef((e, t) => {
    var {
        x: r = 0,
        y: n = 0,
        lineHeight: i = "1em",
        capHeight: a = "0.71em",
        scaleToFit: o = !1,
        textAnchor: l = "start",
        verticalAnchor: s = "end",
        fill: u = oy,
      } = e,
      c = iy(e, KI),
      f = b.useMemo(
        () =>
          GI({
            breakAll: c.breakAll,
            children: c.children,
            maxLines: c.maxLines,
            scaleToFit: o,
            style: c.style,
            width: c.width,
          }),
        [c.breakAll, c.children, c.maxLines, o, c.style, c.width],
      ),
      { dx: d, dy: p, angle: h, className: g, breakAll: y } = c,
      m = iy(c, HI);
    if (!dr(r) || !dr(n)) return null;
    var v = r + (K(d) ? d : 0),
      x = n + (K(p) ? p : 0),
      S;
    switch (s) {
      case "start":
        S = Tc("calc(".concat(a, ")"));
        break;
      case "middle":
        S = Tc(
          "calc("
            .concat((f.length - 1) / 2, " * -")
            .concat(i, " + (")
            .concat(a, " / 2))"),
        );
        break;
      default:
        S = Tc("calc(".concat(f.length - 1, " * -").concat(i, ")"));
        break;
    }
    var P = [];
    if (o) {
      var E = f[0].width,
        { width: O } = c;
      P.push("scale(".concat(K(O) ? O / E : 1, ")"));
    }
    return (
      h && P.push("rotate(".concat(h, ", ").concat(v, ", ").concat(x, ")")),
      P.length && (m.transform = P.join(" ")),
      b.createElement(
        "text",
        pd({}, ue(m, !0), {
          ref: t,
          x: v,
          y: x,
          className: se("recharts-text", g),
          textAnchor: l,
          fill: u.includes("url") ? oy : u,
        }),
        f.map((k, _) => {
          var j = k.words.join(y ? "" : " ");
          return b.createElement(
            "tspan",
            { x: v, dy: _ === 0 ? S : i, key: "".concat(j, "-").concat(_) },
            j,
          );
        }),
      )
    );
  });
Rh.displayName = "Text";
var qI = ["offset"],
  XI = ["labelRef"];
function ly(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = QI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function QI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sy(Object(r), !0).forEach(function (n) {
          ZI(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ZI(e, t, r) {
  return (
    (t = JI(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JI(e) {
  var t = e3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gr.apply(null, arguments)
  );
}
var t3 = (e) => {
    var { value: t, formatter: r } = e,
      n = be(e.children) ? t : e.children;
    return typeof r == "function" ? r(n) : n;
  },
  zh = (e) => e != null && typeof e == "function",
  r3 = (e, t) => {
    var r = $t(t - e),
      n = Math.min(Math.abs(t - e), 360);
    return r * n;
  },
  n3 = (e, t, r) => {
    var { position: n, viewBox: i, offset: a, className: o } = e,
      {
        cx: l,
        cy: s,
        innerRadius: u,
        outerRadius: c,
        startAngle: f,
        endAngle: d,
        clockWise: p,
      } = i,
      h = (u + c) / 2,
      g = r3(f, d),
      y = g >= 0 ? 1 : -1,
      m,
      v;
    (n === "insideStart"
      ? ((m = f + y * a), (v = p))
      : n === "insideEnd"
        ? ((m = d - y * a), (v = !p))
        : n === "end" && ((m = d + y * a), (v = p)),
      (v = g <= 0 ? v : !v));
    var x = Fe(l, s, h, m),
      S = Fe(l, s, h, m + (v ? 1 : -1) * 359),
      P = "M"
        .concat(x.x, ",")
        .concat(
          x.y,
          `
    A`,
        )
        .concat(h, ",")
        .concat(h, ",0,1,")
        .concat(
          v ? 0 : 1,
          `,
    `,
        )
        .concat(S.x, ",")
        .concat(S.y),
      E = be(e.id) ? ro("recharts-radial-line-") : e.id;
    return b.createElement(
      "text",
      gr({}, r, {
        dominantBaseline: "central",
        className: se("recharts-radial-bar-label", o),
      }),
      b.createElement("defs", null, b.createElement("path", { id: E, d: P })),
      b.createElement("textPath", { xlinkHref: "#".concat(E) }, t),
    );
  },
  i3 = (e) => {
    var { viewBox: t, offset: r, position: n } = e,
      {
        cx: i,
        cy: a,
        innerRadius: o,
        outerRadius: l,
        startAngle: s,
        endAngle: u,
      } = t,
      c = (s + u) / 2;
    if (n === "outside") {
      var { x: f, y: d } = Fe(i, a, l + r, c);
      return {
        x: f,
        y: d,
        textAnchor: f >= i ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (n === "center")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "middle" };
    if (n === "centerTop")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "start" };
    if (n === "centerBottom")
      return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
    var p = (o + l) / 2,
      { x: h, y: g } = Fe(i, a, p, c);
    return { x: h, y: g, textAnchor: "middle", verticalAnchor: "middle" };
  },
  a3 = (e, t) => {
    var { parentViewBox: r, offset: n, position: i } = e,
      { x: a, y: o, width: l, height: s } = t,
      u = s >= 0 ? 1 : -1,
      c = u * n,
      f = u > 0 ? "end" : "start",
      d = u > 0 ? "start" : "end",
      p = l >= 0 ? 1 : -1,
      h = p * n,
      g = p > 0 ? "end" : "start",
      y = p > 0 ? "start" : "end";
    if (i === "top") {
      var m = {
        x: a + l / 2,
        y: o - u * n,
        textAnchor: "middle",
        verticalAnchor: f,
      };
      return Se(Se({}, m), r ? { height: Math.max(o - r.y, 0), width: l } : {});
    }
    if (i === "bottom") {
      var v = {
        x: a + l / 2,
        y: o + s + c,
        textAnchor: "middle",
        verticalAnchor: d,
      };
      return Se(
        Se({}, v),
        r ? { height: Math.max(r.y + r.height - (o + s), 0), width: l } : {},
      );
    }
    if (i === "left") {
      var x = {
        x: a - h,
        y: o + s / 2,
        textAnchor: g,
        verticalAnchor: "middle",
      };
      return Se(
        Se({}, x),
        r ? { width: Math.max(x.x - r.x, 0), height: s } : {},
      );
    }
    if (i === "right") {
      var S = {
        x: a + l + h,
        y: o + s / 2,
        textAnchor: y,
        verticalAnchor: "middle",
      };
      return Se(
        Se({}, S),
        r ? { width: Math.max(r.x + r.width - S.x, 0), height: s } : {},
      );
    }
    var P = r ? { width: l, height: s } : {};
    return i === "insideLeft"
      ? Se(
          { x: a + h, y: o + s / 2, textAnchor: y, verticalAnchor: "middle" },
          P,
        )
      : i === "insideRight"
        ? Se(
            {
              x: a + l - h,
              y: o + s / 2,
              textAnchor: g,
              verticalAnchor: "middle",
            },
            P,
          )
        : i === "insideTop"
          ? Se(
              {
                x: a + l / 2,
                y: o + c,
                textAnchor: "middle",
                verticalAnchor: d,
              },
              P,
            )
          : i === "insideBottom"
            ? Se(
                {
                  x: a + l / 2,
                  y: o + s - c,
                  textAnchor: "middle",
                  verticalAnchor: f,
                },
                P,
              )
            : i === "insideTopLeft"
              ? Se({ x: a + h, y: o + c, textAnchor: y, verticalAnchor: d }, P)
              : i === "insideTopRight"
                ? Se(
                    {
                      x: a + l - h,
                      y: o + c,
                      textAnchor: g,
                      verticalAnchor: d,
                    },
                    P,
                  )
                : i === "insideBottomLeft"
                  ? Se(
                      {
                        x: a + h,
                        y: o + s - c,
                        textAnchor: y,
                        verticalAnchor: f,
                      },
                      P,
                    )
                  : i === "insideBottomRight"
                    ? Se(
                        {
                          x: a + l - h,
                          y: o + s - c,
                          textAnchor: g,
                          verticalAnchor: f,
                        },
                        P,
                      )
                    : i &&
                        typeof i == "object" &&
                        (K(i.x) || Mn(i.x)) &&
                        (K(i.y) || Mn(i.y))
                      ? Se(
                          {
                            x: a + cn(i.x, l),
                            y: o + cn(i.y, s),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          P,
                        )
                      : Se(
                          {
                            x: a + l / 2,
                            y: o + s / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          P,
                        );
  },
  o3 = (e) => "cx" in e && K(e.cx);
function bt(e) {
  var { offset: t = 5 } = e,
    r = ly(e, qI),
    n = Se({ offset: t }, r),
    {
      viewBox: i,
      position: a,
      value: o,
      children: l,
      content: s,
      className: u = "",
      textBreakAll: c,
      labelRef: f,
    } = n,
    d = Bp(),
    p = i || d;
  if (!p || (be(o) && be(l) && !b.isValidElement(s) && typeof s != "function"))
    return null;
  if (b.isValidElement(s)) {
    var h = ly(n, XI);
    return b.cloneElement(s, h);
  }
  var g;
  if (typeof s == "function") {
    if (((g = b.createElement(s, n)), b.isValidElement(g))) return g;
  } else g = t3(n);
  var y = o3(p),
    m = ue(n, !0);
  if (y && (a === "insideStart" || a === "insideEnd" || a === "end"))
    return n3(n, g, m);
  var v = y ? i3(n) : a3(n, p);
  return b.createElement(
    Rh,
    gr({ ref: f, className: se("recharts-label", u) }, m, v, { breakAll: c }),
    g,
  );
}
bt.displayName = "Label";
var YS = (e) => {
    var {
      cx: t,
      cy: r,
      angle: n,
      startAngle: i,
      endAngle: a,
      r: o,
      radius: l,
      innerRadius: s,
      outerRadius: u,
      x: c,
      y: f,
      top: d,
      left: p,
      width: h,
      height: g,
      clockWise: y,
      labelViewBox: m,
    } = e;
    if (m) return m;
    if (K(h) && K(g)) {
      if (K(c) && K(f)) return { x: c, y: f, width: h, height: g };
      if (K(d) && K(p)) return { x: d, y: p, width: h, height: g };
    }
    if (K(c) && K(f)) return { x: c, y: f, width: 0, height: 0 };
    if (K(t) && K(r))
      return {
        cx: t,
        cy: r,
        startAngle: i || n || 0,
        endAngle: a || n || 0,
        innerRadius: s || 0,
        outerRadius: u || l || o || 0,
        clockWise: y,
      };
    if (e.viewBox) return e.viewBox;
  },
  l3 = (e, t, r) => {
    if (!e) return null;
    var n = { viewBox: t, labelRef: r };
    return e === !0
      ? b.createElement(bt, gr({ key: "label-implicit" }, n))
      : dr(e)
        ? b.createElement(bt, gr({ key: "label-implicit", value: e }, n))
        : b.isValidElement(e)
          ? e.type === bt
            ? b.cloneElement(e, Se({ key: "label-implicit" }, n))
            : b.createElement(bt, gr({ key: "label-implicit", content: e }, n))
          : zh(e)
            ? b.createElement(bt, gr({ key: "label-implicit", content: e }, n))
            : e && typeof e == "object"
              ? b.createElement(bt, gr({}, e, { key: "label-implicit" }, n))
              : null;
  },
  s3 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var { children: i, labelRef: a } = t,
      o = YS(t),
      l = ex(i, bt).map((u, c) =>
        b.cloneElement(u, { viewBox: r || o, key: "label-".concat(c) }),
      );
    if (!n) return l;
    var s = l3(t.label, r || o, a);
    return [s, ...l];
  };
bt.parseViewBox = YS;
bt.renderCallByParent = s3;
var GS = {},
  qS = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r[r.length - 1];
  }
  e.last = t;
})(qS);
var XS = {};
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Array.isArray(r) ? r : Array.from(r);
  }
  e.toArray = t;
})(XS);
(function (e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = qS,
    r = XS,
    n = iu;
  function i(a) {
    if (n.isArrayLike(a)) return t.last(r.toArray(a));
  }
  e.last = i;
})(GS);
var u3 = GS.last;
const c3 = Mr(u3);
var f3 = ["valueAccessor"],
  d3 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function Ss() {
  return (
    (Ss = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ss.apply(null, arguments)
  );
}
function uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uy(Object(r), !0).forEach(function (n) {
          p3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : uy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function p3(e, t, r) {
  return (
    (t = h3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function h3(e) {
  var t = m3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function m3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fy(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = v3(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function v3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var g3 = (e) => (Array.isArray(e.value) ? c3(e.value) : e.value);
function Kn(e) {
  var { valueAccessor: t = g3 } = e,
    r = fy(e, f3),
    { data: n, dataKey: i, clockWise: a, id: o, textBreakAll: l } = r,
    s = fy(r, d3);
  return !n || !n.length
    ? null
    : b.createElement(
        fn,
        { className: "recharts-label-list" },
        n.map((u, c) => {
          var f = be(i) ? t(u, c) : kt(u && u.payload, i),
            d = be(o) ? {} : { id: "".concat(o, "-").concat(c) };
          return b.createElement(
            bt,
            Ss({}, ue(u, !0), s, d, {
              parentViewBox: u.parentViewBox,
              value: f,
              textBreakAll: l,
              viewBox: bt.parseViewBox(
                be(a) ? u : cy(cy({}, u), {}, { clockWise: a }),
              ),
              key: "label-".concat(c),
              index: c,
            }),
          );
        }),
      );
}
Kn.displayName = "LabelList";
function y3(e, t) {
  return e
    ? e === !0
      ? b.createElement(Kn, { key: "labelList-implicit", data: t })
      : b.isValidElement(e) || zh(e)
        ? b.createElement(Kn, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : typeof e == "object"
          ? b.createElement(
              Kn,
              Ss({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function x3(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var { children: n } = e,
    i = ex(n, Kn).map((o, l) =>
      b.cloneElement(o, { data: t, key: "labelList-".concat(l) }),
    );
  if (!r) return i;
  var a = y3(e.label, t);
  return [a, ...i];
}
Kn.renderCallByParent = x3;
function hd() {
  return (
    (hd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    hd.apply(null, arguments)
  );
}
var QS = (e) => {
    var { cx: t, cy: r, r: n, className: i } = e,
      a = se("recharts-dot", i);
    return t === +t && r === +r && n === +n
      ? b.createElement(
          "circle",
          hd({}, ue(e, !1), Sp(e), { className: a, cx: t, cy: r, r: n }),
        )
      : null;
  },
  w3 = { radiusAxis: {}, angleAxis: {} },
  b3 = Vt({
    name: "polarAxis",
    initialState: w3,
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = t.payload;
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = t.payload;
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  S3 = b3.reducer,
  P3 = { countOfBars: 0, cartesianItems: [], polarItems: [] },
  ZS = Vt({
    name: "graphicalItems",
    initialState: P3,
    reducers: {
      addBar(e) {
        e.countOfBars += 1;
      },
      removeBar(e) {
        e.countOfBars -= 1;
      },
      addCartesianGraphicalItem(e, t) {
        e.cartesianItems.push(t.payload);
      },
      replaceCartesianGraphicalItem(e, t) {
        var { prev: r, next: n } = t.payload,
          i = Pr(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      removeCartesianGraphicalItem(e, t) {
        var r = Pr(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      addPolarGraphicalItem(e, t) {
        e.polarItems.push(t.payload);
      },
      removePolarGraphicalItem(e, t) {
        var r = Pr(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
    },
  }),
  {
    addBar: x4,
    removeBar: w4,
    addCartesianGraphicalItem: E3,
    replaceCartesianGraphicalItem: O3,
    removeCartesianGraphicalItem: k3,
    addPolarGraphicalItem: b4,
    removePolarGraphicalItem: S4,
  } = ZS.actions,
  _3 = ZS.reducer;
function dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function py(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dy(Object(r), !0).forEach(function (n) {
          C3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function C3(e, t, r) {
  return (
    (t = A3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function A3(e) {
  var t = j3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function j3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function T3(e) {
  var t = nt(),
    r = b.useRef(null);
  return (
    b.useEffect(() => {
      var n = py(py({}, e), {}, { stackId: OC(e.stackId) });
      (r.current === null
        ? t(E3(n))
        : r.current !== n && t(O3({ prev: r.current, next: n })),
        (r.current = n));
    }, [t, e]),
    b.useEffect(
      () => () => {
        r.current && (t(k3(r.current)), (r.current = null));
      },
      [t],
    ),
    null
  );
}
function N3(e) {
  var { fn: t, args: r } = e,
    n = nt(),
    i = pt();
  return (
    b.useEffect(() => {
      if (!i) {
        var a = t(r);
        return (
          n(QM(a)),
          () => {
            n(ZM(a));
          }
        );
      }
    }, [t, r, n, i]),
    null
  );
}
var M3 = () => {};
function D3(e) {
  var { legendPayload: t } = e,
    r = nt(),
    n = pt();
  return (
    b.useEffect(
      () =>
        n
          ? M3
          : (r(WC(t)),
            () => {
              r(KC(t));
            }),
      [r, n, t],
    ),
    null
  );
}
function I3(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "animation-",
    r = b.useRef(ro(t)),
    n = b.useRef(e);
  return (n.current !== e && ((r.current = ro(t)), (n.current = e)), r.current);
}
var L3 = A([Ke], (e) => {
    if (e)
      return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
  }),
  $3 = A([L3, Lr, $r], (e, t, r) => {
    if (!(!e || t == null || r == null))
      return {
        x: e.left,
        y: e.top,
        width: Math.max(0, t - e.left - e.right),
        height: Math.max(0, r - e.top - e.bottom),
      };
  }),
  R3 = (e) => {
    var t = pt();
    return H((r) => Du(r, "xAxis", e, t));
  },
  z3 = (e) => {
    var t = pt();
    return H((r) => Du(r, "yAxis", e, t));
  },
  Fh = () => H($3),
  F3 = () => H(zD);
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function my(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hy(Object(r), !0).forEach(function (n) {
          B3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function B3(e, t, r) {
  return (
    (t = U3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function U3(e) {
  var t = W3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function W3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var K3 = (e) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = my(
      my(
        {
          index: r,
          dataKey: a,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: n ?? "none",
          strokeWidth: 2,
          stroke: "#fff",
          payload: t.payload,
          value: t.value,
        },
        ue(i, !1),
      ),
      Sp(i),
    ),
    l;
  return (
    b.isValidElement(i)
      ? (l = b.cloneElement(i, o))
      : typeof i == "function"
        ? (l = i(o))
        : (l = b.createElement(QS, o)),
    b.createElement(fn, { className: "recharts-active-dot" }, l)
  );
};
function H3(e) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i } = e,
    a = H(fo),
    o = F3();
  if (t == null || o == null) return null;
  var l = t.find((s) => o.includes(s.payload));
  return be(l)
    ? null
    : K3({
        point: l,
        childIndex: Number(a),
        mainColor: r,
        dataKey: i,
        activeDot: n,
      });
}
var V3 = ["children"];
function Y3(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = G3(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function G3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var vy = () => {},
  JS = b.createContext({ addErrorBar: vy, removeErrorBar: vy }),
  q3 = {
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
    errorBarOffset: 0,
  },
  e2 = b.createContext(q3);
function X3(e) {
  var { children: t } = e,
    r = Y3(e, V3);
  return b.createElement(e2.Provider, { value: r }, t);
}
var Q3 = () => b.useContext(e2),
  Z3 = (e) => {
    var {
        children: t,
        xAxisId: r,
        yAxisId: n,
        zAxisId: i,
        dataKey: a,
        data: o,
        stackId: l,
        hide: s,
        type: u,
        barSize: c,
      } = e,
      [f, d] = b.useState([]),
      p = b.useCallback(
        (y) => {
          d((m) => [...m, y]);
        },
        [d],
      ),
      h = b.useCallback(
        (y) => {
          d((m) => m.filter((v) => v !== y));
        },
        [d],
      ),
      g = pt();
    return b.createElement(
      JS.Provider,
      { value: { addErrorBar: p, removeErrorBar: h } },
      b.createElement(T3, {
        type: u,
        data: o,
        xAxisId: r,
        yAxisId: n,
        zAxisId: i,
        dataKey: a,
        errorBars: f,
        stackId: l,
        hide: s,
        barSize: c,
        isPanorama: g,
      }),
      t,
    );
  };
function J3(e) {
  var { addErrorBar: t, removeErrorBar: r } = b.useContext(JS);
  return (
    b.useEffect(
      () => (
        t(e),
        () => {
          r(e);
        }
      ),
      [t, r, e],
    ),
    null
  );
}
var eL = [
  "direction",
  "width",
  "dataKey",
  "isAnimationActive",
  "animationBegin",
  "animationDuration",
  "animationEasing",
];
function t2(e, t, r) {
  return (
    (t = tL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function tL(e) {
  var t = rL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ho() {
  return (
    (ho = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ho.apply(null, arguments)
  );
}
function nL(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = iL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function iL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function aL(e) {
  var {
      direction: t,
      width: r,
      dataKey: n,
      isAnimationActive: i,
      animationBegin: a,
      animationDuration: o,
      animationEasing: l,
    } = e,
    s = nL(e, eL),
    u = ue(s, !1),
    {
      data: c,
      dataPointFormatter: f,
      xAxisId: d,
      yAxisId: p,
      errorBarOffset: h,
    } = Q3(),
    g = R3(d),
    y = z3(p);
  if (
    (g == null ? void 0 : g.scale) == null ||
    (y == null ? void 0 : y.scale) == null ||
    c == null ||
    (t === "x" && g.type !== "number")
  )
    return null;
  var m = c.map((v) => {
    var { x, y: S, value: P, errorVal: E } = f(v, n, t);
    if (!E) return null;
    var O = [],
      k,
      _;
    if ((Array.isArray(E) ? ([k, _] = E) : (k = _ = E), t === "x")) {
      var { scale: j } = g,
        T = S + h,
        L = T + r,
        Y = T - r,
        F = j(P - k),
        D = j(P + _);
      (O.push({ x1: D, y1: L, x2: D, y2: Y }),
        O.push({ x1: F, y1: T, x2: D, y2: T }),
        O.push({ x1: F, y1: L, x2: F, y2: Y }));
    } else if (t === "y") {
      var { scale: V } = y,
        B = x + h,
        C = B - r,
        M = B + r,
        W = V(P - k),
        G = V(P + _);
      (O.push({ x1: C, y1: G, x2: M, y2: G }),
        O.push({ x1: B, y1: W, x2: B, y2: G }),
        O.push({ x1: C, y1: W, x2: M, y2: W }));
    }
    var $ = "".concat(x + h, "px ").concat(S + h, "px");
    return b.createElement(
      fn,
      ho(
        {
          className: "recharts-errorBar",
          key: "bar-".concat(
            O.map((fe) =>
              ""
                .concat(fe.x1, "-")
                .concat(fe.x2, "-")
                .concat(fe.y1, "-")
                .concat(fe.y2),
            ),
          ),
        },
        u,
      ),
      O.map((fe) => {
        var Le = i ? { transformOrigin: "".concat(fe.x1 - 5, "px") } : void 0;
        return b.createElement(
          ss,
          {
            from: { transform: "scaleY(0)", transformOrigin: $ },
            to: { transform: "scaleY(1)", transformOrigin: $ },
            begin: a,
            easing: l,
            isActive: i,
            duration: o,
            key: "line-"
              .concat(fe.x1, "-")
              .concat(fe.x2, "-")
              .concat(fe.y1, "-")
              .concat(fe.y2),
            style: { transformOrigin: $ },
          },
          b.createElement("line", ho({}, fe, { style: Le })),
        );
      }),
    );
  });
  return b.createElement(fn, { className: "recharts-errorBars" }, m);
}
var r2 = b.createContext(void 0);
function oL(e) {
  var t = b.useContext(r2);
  return e ?? t ?? "x";
}
function lL(e) {
  var { direction: t, children: r } = e;
  return b.createElement(r2.Provider, { value: t }, r);
}
var n2 = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  isAnimationActive: !0,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease-in-out",
};
function sL(e) {
  var t = oL(e.direction),
    {
      width: r,
      isAnimationActive: n,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
    } = ni(e, n2);
  return b.createElement(
    b.Fragment,
    null,
    b.createElement(J3, { dataKey: e.dataKey, direction: t }),
    b.createElement(
      aL,
      ho({}, e, {
        direction: t,
        width: r,
        isAnimationActive: n,
        animationBegin: i,
        animationDuration: a,
        animationEasing: o,
      }),
    ),
  );
}
class i2 extends b.Component {
  render() {
    return b.createElement(sL, this.props);
  }
}
t2(i2, "defaultProps", n2);
t2(i2, "displayName", "ErrorBar");
function a2(e, t) {
  var r,
    n,
    i = H((u) => zr(u, e)),
    a = H((u) => xn(u, t)),
    o =
      (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0
        ? r
        : gt.allowDataOverflow,
    l =
      (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0
        ? n
        : yt.allowDataOverflow,
    s = o || l;
  return { needClip: s, needClipX: o, needClipY: l };
}
function uL(e) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e,
    i = Fh(),
    { needClipX: a, needClipY: o, needClip: l } = a2(t, r);
  if (!l) return null;
  var { x: s, y: u, width: c, height: f } = i;
  return b.createElement(
    "clipPath",
    { id: "clipPath-".concat(n) },
    b.createElement("rect", {
      x: a ? s : s - c / 2,
      y: o ? u : u - f / 2,
      width: a ? c : c * 2,
      height: o ? f : f * 2,
    }),
  );
}
var cL = (e) => {
    var { chartData: t } = e,
      r = nt(),
      n = pt();
    return (
      b.useEffect(
        () =>
          n
            ? () => {}
            : (r(Gg(t)),
              () => {
                r(Gg(void 0));
              }),
        [t, r, n],
      ),
      null
    );
  },
  gy = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  fL = Vt({
    name: "brush",
    initialState: gy,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? gy : t.payload;
      },
    },
  }),
  dL = fL.reducer;
function pL(e, t, r) {
  return (
    (t = hL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function hL(e) {
  var t = mL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class Bh {
  static create(t) {
    return new Bh(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var { bandAware: r, position: n } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (n)
        switch (n) {
          case "start":
            return this.scale(t);
          case "middle": {
            var i = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(t) + i;
          }
          case "end": {
            var a = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + a;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + o;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(),
      n = r[0],
      i = r[r.length - 1];
    return n <= i ? t >= n && t <= i : t >= i && t <= n;
  }
}
pL(Bh, "EPS", 1e-4);
function vL(e) {
  return ((e % 180) + 180) % 180;
}
var gL = function (t) {
    var { width: r, height: n } = t,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = vL(i),
      o = (a * Math.PI) / 180,
      l = Math.atan(n / r),
      s = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(s);
  },
  yL = { dots: [], areas: [], lines: [] },
  xL = Vt({
    name: "referenceElements",
    initialState: yL,
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var r = Pr(e).dots.findIndex((n) => n === t.payload);
        r !== -1 && e.dots.splice(r, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var r = Pr(e).areas.findIndex((n) => n === t.payload);
        r !== -1 && e.areas.splice(r, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var r = Pr(e).lines.findIndex((n) => n === t.payload);
        r !== -1 && e.lines.splice(r, 1);
      },
    },
  }),
  wL = xL.reducer,
  bL = b.createContext(void 0),
  SL = (e) => {
    var { children: t } = e,
      [r] = b.useState("".concat(ro("recharts"), "-clip")),
      n = Fh();
    if (n == null) return null;
    var { x: i, y: a, width: o, height: l } = n;
    return b.createElement(
      bL.Provider,
      { value: r },
      b.createElement(
        "defs",
        null,
        b.createElement(
          "clipPath",
          { id: r },
          b.createElement("rect", { x: i, y: a, height: l, width: o }),
        ),
      ),
      t,
    );
  };
function Nc(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function o2(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function PL(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return gL(n, r);
}
function EL(e, t, r) {
  var n = r === "width",
    { x: i, y: a, width: o, height: l } = e;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + l }
    : { start: n ? i + o : a + l, end: n ? i : a };
}
function Ps(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function OL(e, t) {
  return o2(e, t + 1);
}
function kL(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      { start: o, end: l } = t,
      s = 0,
      u = 1,
      c = o,
      f = function () {
        var h = n == null ? void 0 : n[s];
        if (h === void 0) return { v: o2(n, u) };
        var g = s,
          y,
          m = () => (y === void 0 && (y = r(h, g)), y),
          v = h.coordinate,
          x = s === 0 || Ps(e, v, m, c, l);
        (x || ((s = 0), (c = o), (u += 1)),
          x && ((c = v + e * (m() / 2 + i)), (s += u)));
      },
      d;
    u <= a.length;
  )
    if (((d = f()), d)) return d.v;
  return [];
}
function yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yy(Object(r), !0).forEach(function (n) {
          _L(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _L(e, t, r) {
  return (
    (t = CL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CL(e) {
  var t = AL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jL(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      { start: l } = t,
      { end: s } = t,
      u = function (d) {
        var p = a[d],
          h,
          g = () => (h === void 0 && (h = r(p, d)), h);
        if (d === o - 1) {
          var y = e * (p.coordinate + (e * g()) / 2 - s);
          a[d] = p = Ge(
            Ge({}, p),
            {},
            { tickCoord: y > 0 ? p.coordinate - y * e : p.coordinate },
          );
        } else a[d] = p = Ge(Ge({}, p), {}, { tickCoord: p.coordinate });
        var m = Ps(e, p.tickCoord, g, l, s);
        m &&
          ((s = p.tickCoord - e * (g() / 2 + i)),
          (a[d] = Ge(Ge({}, p), {}, { isShow: !0 })));
      },
      c = o - 1;
    c >= 0;
    c--
  )
    u(c);
  return a;
}
function TL(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    l = o.length,
    { start: s, end: u } = t;
  if (a) {
    var c = n[l - 1],
      f = r(c, l - 1),
      d = e * (c.coordinate + (e * f) / 2 - u);
    o[l - 1] = c = Ge(
      Ge({}, c),
      {},
      { tickCoord: d > 0 ? c.coordinate - d * e : c.coordinate },
    );
    var p = Ps(e, c.tickCoord, () => f, s, u);
    p &&
      ((u = c.tickCoord - e * (f / 2 + i)),
      (o[l - 1] = Ge(Ge({}, c), {}, { isShow: !0 })));
  }
  for (
    var h = a ? l - 1 : l,
      g = function (v) {
        var x = o[v],
          S,
          P = () => (S === void 0 && (S = r(x, v)), S);
        if (v === 0) {
          var E = e * (x.coordinate - (e * P()) / 2 - s);
          o[v] = x = Ge(
            Ge({}, x),
            {},
            { tickCoord: E < 0 ? x.coordinate - E * e : x.coordinate },
          );
        } else o[v] = x = Ge(Ge({}, x), {}, { tickCoord: x.coordinate });
        var O = Ps(e, x.tickCoord, P, s, u);
        O &&
          ((s = x.tickCoord + e * (P() / 2 + i)),
          (o[v] = Ge(Ge({}, x), {}, { isShow: !0 })));
      },
      y = 0;
    y < h;
    y++
  )
    g(y);
  return o;
}
function Uh(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: l,
    interval: s,
    tickFormatter: u,
    unit: c,
    angle: f,
  } = e;
  if (!i || !i.length || !n) return [];
  if (K(s) || bo.isSsr) {
    var d;
    return (d = OL(i, K(s) ? s : 0)) !== null && d !== void 0 ? d : [];
  }
  var p = [],
    h = l === "top" || l === "bottom" ? "width" : "height",
    g =
      c && h === "width"
        ? Ra(c, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    y = (x, S) => {
      var P = typeof u == "function" ? u(x.value, S) : x.value;
      return h === "width"
        ? PL(Ra(P, { fontSize: t, letterSpacing: r }), g, f)
        : Ra(P, { fontSize: t, letterSpacing: r })[h];
    },
    m = i.length >= 2 ? $t(i[1].coordinate - i[0].coordinate) : 1,
    v = EL(a, m, h);
  return s === "equidistantPreserveStart"
    ? kL(m, v, y, i, o)
    : (s === "preserveStart" || s === "preserveStartEnd"
        ? (p = TL(m, v, y, i, o, s === "preserveStartEnd"))
        : (p = jL(m, v, y, i, o)),
      p.filter((x) => x.isShow));
}
var NL = ["viewBox"],
  ML = ["viewBox"];
function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Oi.apply(null, arguments)
  );
}
function xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xy(Object(r), !0).forEach(function (n) {
          Wh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function wy(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = DL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function DL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function Wh(e, t, r) {
  return (
    (t = IL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function IL(e) {
  var t = LL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class wn extends b.Component {
  constructor(t) {
    (super(t),
      (this.tickRefs = b.createRef()),
      (this.tickRefs.current = []),
      (this.state = { fontSize: "", letterSpacing: "" }));
  }
  shouldComponentUpdate(t, r) {
    var { viewBox: n } = t,
      i = wy(t, NL),
      a = this.props,
      { viewBox: o } = a,
      l = wy(a, ML);
    return !Nc(n, o) || !Nc(i, l) || !Nc(r, this.state);
  }
  getTickLineCoord(t) {
    var {
        x: r,
        y: n,
        width: i,
        height: a,
        orientation: o,
        tickSize: l,
        mirror: s,
        tickMargin: u,
      } = this.props,
      c,
      f,
      d,
      p,
      h,
      g,
      y = s ? -1 : 1,
      m = t.tickSize || l,
      v = K(t.tickCoord) ? t.tickCoord : t.coordinate;
    switch (o) {
      case "top":
        ((c = f = t.coordinate),
          (p = n + +!s * a),
          (d = p - y * m),
          (g = d - y * u),
          (h = v));
        break;
      case "left":
        ((d = p = t.coordinate),
          (f = r + +!s * i),
          (c = f - y * m),
          (h = c - y * u),
          (g = v));
        break;
      case "right":
        ((d = p = t.coordinate),
          (f = r + +s * i),
          (c = f + y * m),
          (h = c + y * u),
          (g = v));
        break;
      default:
        ((c = f = t.coordinate),
          (p = n + +s * a),
          (d = p + y * m),
          (g = d + y * u),
          (h = v));
        break;
    }
    return { line: { x1: c, y1: d, x2: f, y2: p }, tick: { x: h, y: g } };
  }
  getTickTextAnchor() {
    var { orientation: t, mirror: r } = this.props,
      n;
    switch (t) {
      case "left":
        n = r ? "start" : "end";
        break;
      case "right":
        n = r ? "end" : "start";
        break;
      default:
        n = "middle";
        break;
    }
    return n;
  }
  getTickVerticalAnchor() {
    var { orientation: t, mirror: r } = this.props;
    switch (t) {
      case "left":
      case "right":
        return "middle";
      case "top":
        return r ? "start" : "end";
      default:
        return r ? "end" : "start";
    }
  }
  renderAxisLine() {
    var {
        x: t,
        y: r,
        width: n,
        height: i,
        orientation: a,
        mirror: o,
        axisLine: l,
      } = this.props,
      s = Oe(Oe(Oe({}, ue(this.props, !1)), ue(l, !1)), {}, { fill: "none" });
    if (a === "top" || a === "bottom") {
      var u = +((a === "top" && !o) || (a === "bottom" && o));
      s = Oe(Oe({}, s), {}, { x1: t, y1: r + u * i, x2: t + n, y2: r + u * i });
    } else {
      var c = +((a === "left" && !o) || (a === "right" && o));
      s = Oe(Oe({}, s), {}, { x1: t + c * n, y1: r, x2: t + c * n, y2: r + i });
    }
    return b.createElement(
      "line",
      Oi({}, s, {
        className: se("recharts-cartesian-axis-line", Xn(l, "className")),
      }),
    );
  }
  static renderTickItem(t, r, n) {
    var i,
      a = se(r.className, "recharts-cartesian-axis-tick-value");
    if (b.isValidElement(t))
      i = b.cloneElement(t, Oe(Oe({}, r), {}, { className: a }));
    else if (typeof t == "function") i = t(Oe(Oe({}, r), {}, { className: a }));
    else {
      var o = "recharts-cartesian-axis-tick-value";
      (typeof t != "boolean" && (o = se(o, t.className)),
        (i = b.createElement(Rh, Oi({}, r, { className: o }), n)));
    }
    return i;
  }
  renderTicks(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      {
        tickLine: i,
        stroke: a,
        tick: o,
        tickFormatter: l,
        unit: s,
      } = this.props,
      u = Uh(Oe(Oe({}, this.props), {}, { ticks: n }), t, r),
      c = this.getTickTextAnchor(),
      f = this.getTickVerticalAnchor(),
      d = ue(this.props, !1),
      p = ue(o, !1),
      h = Oe(Oe({}, d), {}, { fill: "none" }, ue(i, !1)),
      g = u.map((y, m) => {
        var { line: v, tick: x } = this.getTickLineCoord(y),
          S = Oe(
            Oe(
              Oe(
                Oe({ textAnchor: c, verticalAnchor: f }, d),
                {},
                { stroke: "none", fill: a },
                p,
              ),
              x,
            ),
            {},
            {
              index: m,
              payload: y,
              visibleTicksCount: u.length,
              tickFormatter: l,
            },
          );
        return b.createElement(
          fn,
          Oi(
            {
              className: "recharts-cartesian-axis-tick",
              key: "tick-"
                .concat(y.value, "-")
                .concat(y.coordinate, "-")
                .concat(y.tickCoord),
            },
            YO(this.props, y, m),
          ),
          i &&
            b.createElement(
              "line",
              Oi({}, h, v, {
                className: se(
                  "recharts-cartesian-axis-tick-line",
                  Xn(i, "className"),
                ),
              }),
            ),
          o &&
            wn.renderTickItem(
              o,
              S,
              ""
                .concat(typeof l == "function" ? l(y.value, m) : y.value)
                .concat(s || ""),
            ),
        );
      });
    return g.length > 0
      ? b.createElement("g", { className: "recharts-cartesian-axis-ticks" }, g)
      : null;
  }
  render() {
    var {
      axisLine: t,
      width: r,
      height: n,
      className: i,
      hide: a,
    } = this.props;
    if (a) return null;
    var { ticks: o } = this.props;
    return (r != null && r <= 0) || (n != null && n <= 0)
      ? null
      : b.createElement(
          fn,
          {
            className: se("recharts-cartesian-axis", i),
            ref: (l) => {
              if (l) {
                var s = l.getElementsByClassName(
                  "recharts-cartesian-axis-tick-value",
                );
                this.tickRefs.current = Array.from(s);
                var u = s[0];
                if (u) {
                  var c = window.getComputedStyle(u).fontSize,
                    f = window.getComputedStyle(u).letterSpacing;
                  (c !== this.state.fontSize ||
                    f !== this.state.letterSpacing) &&
                    this.setState({
                      fontSize: window.getComputedStyle(u).fontSize,
                      letterSpacing: window.getComputedStyle(u).letterSpacing,
                    });
                }
              }
            },
          },
          t && this.renderAxisLine(),
          this.renderTicks(this.state.fontSize, this.state.letterSpacing, o),
          bt.renderCallByParent(this.props),
        );
  }
}
Wh(wn, "displayName", "CartesianAxis");
Wh(wn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var $L = ["x1", "y1", "x2", "y2", "key"],
  RL = ["offset"],
  zL = ["xAxisId", "yAxisId"],
  FL = ["xAxisId", "yAxisId"];
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? by(Object(r), !0).forEach(function (n) {
          BL(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : by(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function BL(e, t, r) {
  return (
    (t = UL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function UL(e) {
  var t = WL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $n() {
  return (
    ($n = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $n.apply(null, arguments)
  );
}
function Es(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = KL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function KL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var HL = (e) => {
  var { fill: t } = e;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: n, y: i, width: a, height: o, ry: l } = e;
  return b.createElement("rect", {
    x: n,
    y: i,
    ry: l,
    width: a,
    height: o,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg",
  });
};
function l2(e, t) {
  var r;
  if (b.isValidElement(e)) r = b.cloneElement(e, t);
  else if (typeof e == "function") r = e(t);
  else {
    var { x1: n, y1: i, x2: a, y2: o, key: l } = t,
      s = Es(t, $L),
      u = ue(s, !1),
      c = Es(u, RL);
    r = b.createElement(
      "line",
      $n({}, c, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: l }),
    );
  }
  return r;
}
function VL(e) {
  var { x: t, width: r, horizontal: n = !0, horizontalPoints: i } = e;
  if (!n || !i || !i.length) return null;
  var a = Es(e, zL),
    o = i.map((l, s) => {
      var u = Xe(
        Xe({}, a),
        {},
        { x1: t, y1: l, x2: t + r, y2: l, key: "line-".concat(s), index: s },
      );
      return l2(n, u);
    });
  return b.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    o,
  );
}
function YL(e) {
  var { y: t, height: r, vertical: n = !0, verticalPoints: i } = e;
  if (!n || !i || !i.length) return null;
  var a = Es(e, FL),
    o = i.map((l, s) => {
      var u = Xe(
        Xe({}, a),
        {},
        { x1: l, y1: t, x2: l, y2: t + r, key: "line-".concat(s), index: s },
      );
      return l2(n, u);
    });
  return b.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    o,
  );
}
function GL(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: a,
    height: o,
    horizontalPoints: l,
    horizontal: s = !0,
  } = e;
  if (!s || !t || !t.length) return null;
  var u = l.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== u[0] && u.unshift(0);
  var c = u.map((f, d) => {
    var p = !u[d + 1],
      h = p ? i + o - f : u[d + 1] - f;
    if (h <= 0) return null;
    var g = d % t.length;
    return b.createElement("rect", {
      key: "react-".concat(d),
      y: f,
      x: n,
      height: h,
      width: a,
      stroke: "none",
      fill: t[g],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return b.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    c,
  );
}
function qL(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: a,
    width: o,
    height: l,
    verticalPoints: s,
  } = e;
  if (!t || !r || !r.length) return null;
  var u = s.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== u[0] && u.unshift(0);
  var c = u.map((f, d) => {
    var p = !u[d + 1],
      h = p ? i + o - f : u[d + 1] - f;
    if (h <= 0) return null;
    var g = d % r.length;
    return b.createElement("rect", {
      key: "react-".concat(d),
      x: f,
      y: a,
      width: h,
      height: l,
      stroke: "none",
      fill: r[g],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return b.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    c,
  );
}
var XL = (e, t) => {
    var { xAxis: r, width: n, height: i, offset: a } = e;
    return pw(
      Uh(
        Xe(
          Xe(Xe({}, wn.defaultProps), r),
          {},
          { ticks: hw(r), viewBox: { x: 0, y: 0, width: n, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  QL = (e, t) => {
    var { yAxis: r, width: n, height: i, offset: a } = e;
    return pw(
      Uh(
        Xe(
          Xe(Xe({}, wn.defaultProps), r),
          {},
          { ticks: hw(r), viewBox: { x: 0, y: 0, width: n, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  ZL = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
  };
function s2(e) {
  var t = xw(),
    r = ww(),
    n = yw(),
    i = Xe(
      Xe({}, ni(e, ZL)),
      {},
      {
        x: K(e.x) ? e.x : n.left,
        y: K(e.y) ? e.y : n.top,
        width: K(e.width) ? e.width : n.width,
        height: K(e.height) ? e.height : n.height,
      },
    ),
    {
      xAxisId: a,
      yAxisId: o,
      x: l,
      y: s,
      width: u,
      height: c,
      syncWithTicks: f,
      horizontalValues: d,
      verticalValues: p,
    } = i,
    h = pt(),
    g = H((_) => Fg(_, "xAxis", a, h)),
    y = H((_) => Fg(_, "yAxis", o, h));
  if (
    !K(u) ||
    u <= 0 ||
    !K(c) ||
    c <= 0 ||
    !K(l) ||
    l !== +l ||
    !K(s) ||
    s !== +s
  )
    return null;
  var m = i.verticalCoordinatesGenerator || XL,
    v = i.horizontalCoordinatesGenerator || QL,
    { horizontalPoints: x, verticalPoints: S } = i;
  if ((!x || !x.length) && typeof v == "function") {
    var P = d && d.length,
      E = v(
        {
          yAxis: y ? Xe(Xe({}, y), {}, { ticks: P ? d : y.ticks }) : void 0,
          width: t,
          height: r,
          offset: n,
        },
        P ? !0 : f,
      );
    ($a(
      Array.isArray(E),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        typeof E,
        "]",
      ),
    ),
      Array.isArray(E) && (x = E));
  }
  if ((!S || !S.length) && typeof m == "function") {
    var O = p && p.length,
      k = m(
        {
          xAxis: g ? Xe(Xe({}, g), {}, { ticks: O ? p : g.ticks }) : void 0,
          width: t,
          height: r,
          offset: n,
        },
        O ? !0 : f,
      );
    ($a(
      Array.isArray(k),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        typeof k,
        "]",
      ),
    ),
      Array.isArray(k) && (S = k));
  }
  return b.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    b.createElement(HL, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    b.createElement(GL, $n({}, i, { horizontalPoints: x })),
    b.createElement(qL, $n({}, i, { verticalPoints: S })),
    b.createElement(
      VL,
      $n({}, i, { offset: n, horizontalPoints: x, xAxis: g, yAxis: y }),
    ),
    b.createElement(
      YL,
      $n({}, i, { offset: n, verticalPoints: S, xAxis: g, yAxis: y }),
    ),
  );
}
s2.displayName = "CartesianGrid";
var u2 = (e, t, r, n) => Du(e, "xAxis", t, n),
  c2 = (e, t, r, n) => pS(e, "xAxis", t, n),
  f2 = (e, t, r, n) => Du(e, "yAxis", r, n),
  d2 = (e, t, r, n) => pS(e, "yAxis", r, n),
  JL = A([ge, u2, f2, c2, d2], (e, t, r, n, i) =>
    vn(e, "xAxis") ? Kf(t, n, !1) : Kf(r, i, !1),
  ),
  e$ = (e, t, r, n, i) => i,
  t$ = A([zb, e$], (e, t) => {
    if (
      e.some(
        (r) =>
          r.type === "line" && t.dataKey === r.dataKey && t.data === r.data,
      )
    )
      return t;
  }),
  r$ = A([ge, u2, f2, c2, d2, t$, JL, gb], (e, t, r, n, i, a, o, l) => {
    var { chartData: s, dataStartIndex: u, dataEndIndex: c } = l;
    if (
      !(
        a == null ||
        t == null ||
        r == null ||
        n == null ||
        i == null ||
        n.length === 0 ||
        i.length === 0 ||
        o == null
      )
    ) {
      var { dataKey: f, data: d } = a,
        p;
      if (
        (d != null && d.length > 0
          ? (p = d)
          : (p = s == null ? void 0 : s.slice(u, c + 1)),
        p != null)
      )
        return b$({
          layout: e,
          xAxis: t,
          yAxis: r,
          xAxisTicks: n,
          yAxisTicks: i,
          dataKey: f,
          bandSize: o,
          displayedData: p,
        });
    }
  }),
  n$ = ["type", "layout", "connectNulls", "needClip"],
  i$ = [
    "activeDot",
    "animateNewValues",
    "animationBegin",
    "animationDuration",
    "animationEasing",
    "connectNulls",
    "dot",
    "hide",
    "isAnimationActive",
    "label",
    "legendType",
    "xAxisId",
    "yAxisId",
  ];
function p2(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = a$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function a$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function Sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sy(Object(r), !0).forEach(function (n) {
          $u(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Sy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function $u(e, t, r) {
  return (
    (t = o$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function o$(e) {
  var t = l$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function l$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qi() {
  return (
    (qi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qi.apply(null, arguments)
  );
}
var s$ = (e) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: n, value: mw(r, t), payload: e },
  ];
};
function u$(e) {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: a,
    name: o,
    hide: l,
    unit: s,
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: a,
      dataKey: t,
      nameKey: void 0,
      name: mw(o, t),
      hide: l,
      type: e.tooltipType,
      color: e.stroke,
      unit: s,
    },
  };
}
var h2 = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function c$(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, n = [], i = 0; i < t; ++i)
    n = [...n, ...r];
  return n;
}
var f$ = (e, t, r) => {
  var n = r.reduce((f, d) => f + d);
  if (!n) return h2(t, e);
  for (
    var i = Math.floor(e / n), a = e % n, o = t - e, l = [], s = 0, u = 0;
    s < r.length;
    u += r[s], ++s
  )
    if (u + r[s] > a) {
      l = [...r.slice(0, s), a - u];
      break;
    }
  var c = l.length % 2 === 0 ? [0, o] : [o];
  return [...c$(r, i), ...l, ...c].map((f) => "".concat(f, "px")).join(", ");
};
function d$(e, t) {
  var r;
  if (b.isValidElement(e)) r = b.cloneElement(e, t);
  else if (typeof e == "function") r = e(t);
  else {
    var n = se("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = b.createElement(QS, qi({}, t, { className: n }));
  }
  return r;
}
function p$(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function h$(e) {
  var { clipPathId: t, points: r, props: n } = e,
    { dot: i, dataKey: a, needClip: o } = n;
  if (!p$(r, i)) return null;
  var l = tx(i),
    s = ue(n, !1),
    u = ue(i, !0),
    c = r.map((d, p) => {
      var h = Zt(
        Zt(Zt({ key: "dot-".concat(p), r: 3 }, s), u),
        {},
        {
          index: p,
          cx: d.x,
          cy: d.y,
          dataKey: a,
          value: d.value,
          payload: d.payload,
          points: r,
        },
      );
      return d$(i, h);
    }),
    f = {
      clipPath: o
        ? "url(#clipPath-".concat(l ? "" : "dots-").concat(t, ")")
        : null,
    };
  return b.createElement(
    fn,
    qi({ className: "recharts-line-dots", key: "dots" }, f),
    c,
  );
}
function md(e) {
  var {
      clipPathId: t,
      pathRef: r,
      points: n,
      strokeDasharray: i,
      props: a,
      showLabels: o,
    } = e,
    { type: l, layout: s, connectNulls: u, needClip: c } = a,
    f = p2(a, n$),
    d = Zt(
      Zt({}, ue(f, !0)),
      {},
      {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: c ? "url(#clipPath-".concat(t, ")") : null,
        points: n,
        type: l,
        layout: s,
        connectNulls: u,
        strokeDasharray: i ?? a.strokeDasharray,
      },
    );
  return b.createElement(
    b.Fragment,
    null,
    (n == null ? void 0 : n.length) > 1 &&
      b.createElement(Pw, qi({}, d, { pathRef: r })),
    b.createElement(h$, { points: n, clipPathId: t, props: a }),
    o && Kn.renderCallByParent(a, n),
  );
}
function m$(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function v$(e) {
  var {
      clipPathId: t,
      props: r,
      pathRef: n,
      previousPointsRef: i,
      longestAnimatedLengthRef: a,
    } = e,
    {
      points: o,
      strokeDasharray: l,
      isAnimationActive: s,
      animationBegin: u,
      animationDuration: c,
      animationEasing: f,
      animateNewValues: d,
      width: p,
      height: h,
      onAnimationEnd: g,
      onAnimationStart: y,
    } = r,
    m = i.current,
    v = I3(r, "recharts-line-"),
    [x, S] = b.useState(!1),
    P = b.useCallback(() => {
      (typeof g == "function" && g(), S(!1));
    }, [g]),
    E = b.useCallback(() => {
      (typeof y == "function" && y(), S(!0));
    }, [y]),
    O = m$(n.current),
    k = a.current;
  return b.createElement(
    ss,
    {
      begin: u,
      duration: c,
      isActive: s,
      easing: f,
      from: { t: 0 },
      to: { t: 1 },
      onAnimationEnd: P,
      onAnimationStart: E,
      key: v,
    },
    (_) => {
      var { t: j } = _,
        T = ha(k, O + k),
        L = Math.min(T(j), O),
        Y;
      if (l) {
        var F = ""
          .concat(l)
          .split(/[,\s]+/gim)
          .map((B) => parseFloat(B));
        Y = f$(L, O, F);
      } else Y = h2(O, L);
      if (m) {
        var D = m.length / o.length,
          V =
            j === 1
              ? o
              : o.map((B, C) => {
                  var M = Math.floor(C * D);
                  if (m[M]) {
                    var W = m[M],
                      G = ha(W.x, B.x),
                      $ = ha(W.y, B.y);
                    return Zt(Zt({}, B), {}, { x: G(j), y: $(j) });
                  }
                  if (d) {
                    var fe = ha(p * 2, B.x),
                      Le = ha(h / 2, B.y);
                    return Zt(Zt({}, B), {}, { x: fe(j), y: Le(j) });
                  }
                  return Zt(Zt({}, B), {}, { x: B.x, y: B.y });
                });
        return (
          (i.current = V),
          b.createElement(md, {
            props: r,
            points: V,
            clipPathId: t,
            pathRef: n,
            showLabels: !x,
            strokeDasharray: Y,
          })
        );
      }
      return (
        j > 0 && O > 0 && ((i.current = o), (a.current = L)),
        b.createElement(md, {
          props: r,
          points: o,
          clipPathId: t,
          pathRef: n,
          showLabels: !x,
          strokeDasharray: Y,
        })
      );
    },
  );
}
function g$(e) {
  var { clipPathId: t, props: r } = e,
    { points: n, isAnimationActive: i } = r,
    a = b.useRef(null),
    o = b.useRef(0),
    l = b.useRef(null),
    s = a.current;
  return i && n && n.length && s !== n
    ? b.createElement(v$, {
        props: r,
        clipPathId: t,
        previousPointsRef: a,
        longestAnimatedLengthRef: o,
        pathRef: l,
      })
    : b.createElement(md, {
        props: r,
        points: n,
        clipPathId: t,
        pathRef: l,
        showLabels: !0,
      });
}
var y$ = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  errorVal: kt(e.payload, t),
});
class x$ extends b.Component {
  constructor() {
    (super(...arguments), $u(this, "id", ro("recharts-line-")));
  }
  render() {
    var t,
      {
        hide: r,
        dot: n,
        points: i,
        className: a,
        xAxisId: o,
        yAxisId: l,
        top: s,
        left: u,
        width: c,
        height: f,
        id: d,
        needClip: p,
        layout: h,
      } = this.props;
    if (r) return null;
    var g = se("recharts-line", a),
      y = be(d) ? this.id : d,
      { r: m = 3, strokeWidth: v = 2 } =
        (t = ue(n, !1)) !== null && t !== void 0 ? t : { r: 3, strokeWidth: 2 },
      x = tx(n),
      S = m * 2 + v;
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(
        fn,
        { className: g },
        p &&
          b.createElement(
            "defs",
            null,
            b.createElement(uL, { clipPathId: y, xAxisId: o, yAxisId: l }),
            !x &&
              b.createElement(
                "clipPath",
                { id: "clipPath-dots-".concat(y) },
                b.createElement("rect", {
                  x: u - S / 2,
                  y: s - S / 2,
                  width: c + S,
                  height: f + S,
                }),
              ),
          ),
        b.createElement(g$, { props: this.props, clipPathId: y }),
        b.createElement(
          lL,
          { direction: h === "horizontal" ? "y" : "x" },
          b.createElement(
            X3,
            {
              xAxisId: o,
              yAxisId: l,
              data: i,
              dataPointFormatter: y$,
              errorBarOffset: 0,
            },
            this.props.children,
          ),
        ),
      ),
      b.createElement(H3, {
        activeDot: this.props.activeDot,
        points: i,
        mainColor: this.props.stroke,
        itemDataKey: this.props.dataKey,
      }),
    );
  }
}
var m2 = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !bo.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
};
function w$(e) {
  var t = ni(e, m2),
    {
      activeDot: r,
      animateNewValues: n,
      animationBegin: i,
      animationDuration: a,
      animationEasing: o,
      connectNulls: l,
      dot: s,
      hide: u,
      isAnimationActive: c,
      label: f,
      legendType: d,
      xAxisId: p,
      yAxisId: h,
    } = t,
    g = p2(t, i$),
    { needClip: y } = a2(p, h),
    { height: m, width: v, x, y: S } = Fh(),
    P = Up(),
    E = pt(),
    O = b.useMemo(
      () => ({ dataKey: e.dataKey, data: e.data }),
      [e.dataKey, e.data],
    ),
    k = H((_) => r$(_, p, h, E, O));
  return P !== "horizontal" && P !== "vertical"
    ? null
    : b.createElement(
        x$,
        qi({}, g, {
          connectNulls: l,
          dot: s,
          activeDot: r,
          animateNewValues: n,
          animationBegin: i,
          animationDuration: a,
          animationEasing: o,
          isAnimationActive: c,
          hide: u,
          label: f,
          legendType: d,
          xAxisId: p,
          yAxisId: h,
          points: k,
          layout: P,
          height: m,
          width: v,
          left: x,
          top: S,
          needClip: y,
        }),
      );
}
function b$(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: n,
    xAxisTicks: i,
    yAxisTicks: a,
    dataKey: o,
    bandSize: l,
    displayedData: s,
  } = e;
  return s.map((u, c) => {
    var f = kt(u, o);
    return t === "horizontal"
      ? {
          x: Nv({ axis: r, ticks: i, bandSize: l, entry: u, index: c }),
          y: be(f) ? null : n.scale(f),
          value: f,
          payload: u,
        }
      : {
          x: be(f) ? null : r.scale(f),
          y: Nv({ axis: n, ticks: a, bandSize: l, entry: u, index: c }),
          value: f,
          payload: u,
        };
  });
}
class Os extends b.PureComponent {
  render() {
    return b.createElement(
      Z3,
      {
        type: "line",
        data: this.props.data,
        xAxisId: this.props.xAxisId,
        yAxisId: this.props.yAxisId,
        zAxisId: 0,
        dataKey: this.props.dataKey,
        stackId: void 0,
        hide: this.props.hide,
        barSize: void 0,
      },
      b.createElement(D3, { legendPayload: s$(this.props) }),
      b.createElement(N3, { fn: u$, args: this.props }),
      b.createElement(w$, this.props),
    );
  }
}
$u(Os, "displayName", "Line");
$u(Os, "defaultProps", m2);
function Py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Py(Object(r), !0).forEach(function (n) {
          S$(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Py(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function S$(e, t, r) {
  return (
    (t = P$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function P$(e) {
  var t = E$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var O$ = { xAxis: {}, yAxis: {}, zAxis: {} },
  v2 = Vt({
    name: "cartesianAxis",
    initialState: O$,
    reducers: {
      addXAxis(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      removeXAxis(e, t) {
        delete e.xAxis[t.payload.id];
      },
      addYAxis(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      removeYAxis(e, t) {
        delete e.yAxis[t.payload.id];
      },
      addZAxis(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      removeZAxis(e, t) {
        delete e.zAxis[t.payload.id];
      },
      updateYAxisWidth(e, t) {
        var { id: r, width: n } = t.payload;
        e.yAxis[r] && (e.yAxis[r] = Ey(Ey({}, e.yAxis[r]), {}, { width: n }));
      },
    },
  }),
  {
    addXAxis: k$,
    removeXAxis: _$,
    addYAxis: C$,
    removeYAxis: A$,
    addZAxis: P4,
    removeZAxis: E4,
    updateYAxisWidth: j$,
  } = v2.actions,
  T$ = v2.reducer,
  N$ = ["children"],
  M$ = ["dangerouslySetInnerHTML", "ticks"];
function g2(e, t, r) {
  return (
    (t = D$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function D$(e) {
  var t = I$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vd() {
  return (
    (vd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    vd.apply(null, arguments)
  );
}
function y2(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = L$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function L$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function $$(e) {
  var t = nt(),
    r = b.useMemo(() => {
      var a = y2(e, N$);
      return a;
    }, [e]),
    n = H((a) => zr(a, r.id)),
    i = r === n;
  return (
    b.useEffect(
      () => (
        t(k$(r)),
        () => {
          t(_$(r));
        }
      ),
      [r, t],
    ),
    i ? e.children : null
  );
}
var R$ = (e) => {
    var { xAxisId: t, className: r } = e,
      n = H(gw),
      i = pt(),
      a = "xAxis",
      o = H((f) => na(f, a, t, i)),
      l = H((f) => dS(f, a, t, i)),
      s = H((f) => LM(f, t)),
      u = H((f) => BM(f, t));
    if (s == null || u == null) return null;
    var c = y2(e, M$);
    return b.createElement(
      wn,
      vd({}, c, {
        scale: o,
        x: u.x,
        y: u.y,
        width: s.width,
        height: s.height,
        className: se("recharts-".concat(a, " ").concat(a), r),
        viewBox: n,
        ticks: l,
      }),
    );
  },
  z$ = (e) => {
    var t, r, n, i, a;
    return b.createElement(
      $$,
      {
        interval: (t = e.interval) !== null && t !== void 0 ? t : "preserveEnd",
        id: e.xAxisId,
        scale: e.scale,
        type: e.type,
        padding: e.padding,
        allowDataOverflow: e.allowDataOverflow,
        domain: e.domain,
        dataKey: e.dataKey,
        allowDuplicatedCategory: e.allowDuplicatedCategory,
        allowDecimals: e.allowDecimals,
        tickCount: e.tickCount,
        includeHidden: (r = e.includeHidden) !== null && r !== void 0 ? r : !1,
        reversed: e.reversed,
        ticks: e.ticks,
        height: e.height,
        orientation: e.orientation,
        mirror: e.mirror,
        hide: e.hide,
        unit: e.unit,
        name: e.name,
        angle: (n = e.angle) !== null && n !== void 0 ? n : 0,
        minTickGap: (i = e.minTickGap) !== null && i !== void 0 ? i : 5,
        tick: (a = e.tick) !== null && a !== void 0 ? a : !0,
        tickFormatter: e.tickFormatter,
      },
      b.createElement(R$, e),
    );
  };
class Kh extends b.Component {
  render() {
    return b.createElement(z$, this.props);
  }
}
g2(Kh, "displayName", "XAxis");
g2(Kh, "defaultProps", {
  allowDataOverflow: gt.allowDataOverflow,
  allowDecimals: gt.allowDecimals,
  allowDuplicatedCategory: gt.allowDuplicatedCategory,
  height: gt.height,
  hide: !1,
  mirror: gt.mirror,
  orientation: gt.orientation,
  padding: gt.padding,
  reversed: gt.reversed,
  scale: gt.scale,
  tickCount: gt.tickCount,
  type: gt.type,
  xAxisId: 0,
});
var F$ = (e) => {
    var {
        ticks: t,
        label: r,
        labelGapWithTick: n = 5,
        tickSize: i = 0,
        tickMargin: a = 0,
      } = e,
      o = 0;
    if (t) {
      t.forEach((c) => {
        if (c) {
          var f = c.getBoundingClientRect();
          f.width > o && (o = f.width);
        }
      });
      var l = r ? r.getBoundingClientRect().width : 0,
        s = i + a,
        u = o + s + l + (r ? n : 0);
      return Math.round(u);
    }
    return 0;
  },
  B$ = ["dangerouslySetInnerHTML", "ticks"];
function x2(e, t, r) {
  return (
    (t = U$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function U$(e) {
  var t = W$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function W$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gd() {
  return (
    (gd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gd.apply(null, arguments)
  );
}
function K$(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = H$(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function H$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function V$(e) {
  var t = nt();
  return (
    b.useEffect(
      () => (
        t(C$(e)),
        () => {
          t(A$(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var Y$ = (e) => {
    var t,
      { yAxisId: r, className: n, width: i, label: a } = e,
      o = b.useRef(null),
      l = b.useRef(null),
      s = H(gw),
      u = pt(),
      c = nt(),
      f = "yAxis",
      d = H((m) => na(m, f, r, u)),
      p = H((m) => WM(m, r)),
      h = H((m) => UM(m, r)),
      g = H((m) => dS(m, f, r, u));
    if (
      (b.useLayoutEffect(() => {
        var m;
        if (!(i !== "auto" || !p || zh(a) || b.isValidElement(a))) {
          var v = o.current,
            x =
              v == null || (m = v.tickRefs) === null || m === void 0
                ? void 0
                : m.current,
            { tickSize: S, tickMargin: P } = v.props,
            E = F$({
              ticks: x,
              label: l.current,
              labelGapWithTick: 5,
              tickSize: S,
              tickMargin: P,
            });
          Math.round(p.width) !== Math.round(E) && c(j$({ id: r, width: E }));
        }
      }, [
        o,
        o == null ||
        (t = o.current) === null ||
        t === void 0 ||
        (t = t.tickRefs) === null ||
        t === void 0
          ? void 0
          : t.current,
        p == null ? void 0 : p.width,
        p,
        c,
        a,
        r,
        i,
      ]),
      p == null || h == null)
    )
      return null;
    var y = K$(e, B$);
    return b.createElement(
      wn,
      gd({}, y, {
        ref: o,
        labelRef: l,
        scale: d,
        x: h.x,
        y: h.y,
        width: p.width,
        height: p.height,
        className: se("recharts-".concat(f, " ").concat(f), n),
        viewBox: s,
        ticks: g,
      }),
    );
  },
  G$ = (e) => {
    var t, r, n, i, a;
    return b.createElement(
      b.Fragment,
      null,
      b.createElement(V$, {
        interval: (t = e.interval) !== null && t !== void 0 ? t : "preserveEnd",
        id: e.yAxisId,
        scale: e.scale,
        type: e.type,
        domain: e.domain,
        allowDataOverflow: e.allowDataOverflow,
        dataKey: e.dataKey,
        allowDuplicatedCategory: e.allowDuplicatedCategory,
        allowDecimals: e.allowDecimals,
        tickCount: e.tickCount,
        padding: e.padding,
        includeHidden: (r = e.includeHidden) !== null && r !== void 0 ? r : !1,
        reversed: e.reversed,
        ticks: e.ticks,
        width: e.width,
        orientation: e.orientation,
        mirror: e.mirror,
        hide: e.hide,
        unit: e.unit,
        name: e.name,
        angle: (n = e.angle) !== null && n !== void 0 ? n : 0,
        minTickGap: (i = e.minTickGap) !== null && i !== void 0 ? i : 5,
        tick: (a = e.tick) !== null && a !== void 0 ? a : !0,
        tickFormatter: e.tickFormatter,
      }),
      b.createElement(Y$, e),
    );
  },
  q$ = {
    allowDataOverflow: yt.allowDataOverflow,
    allowDecimals: yt.allowDecimals,
    allowDuplicatedCategory: yt.allowDuplicatedCategory,
    hide: !1,
    mirror: yt.mirror,
    orientation: yt.orientation,
    padding: yt.padding,
    reversed: yt.reversed,
    scale: yt.scale,
    tickCount: yt.tickCount,
    type: yt.type,
    width: yt.width,
    yAxisId: 0,
  };
class ks extends b.Component {
  render() {
    return b.createElement(G$, this.props);
  }
}
x2(ks, "displayName", "YAxis");
x2(ks, "defaultProps", q$);
var X$ = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var To = b;
function Q$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Z$ = typeof Object.is == "function" ? Object.is : Q$,
  J$ = To.useSyncExternalStore,
  e5 = To.useRef,
  t5 = To.useEffect,
  r5 = To.useMemo,
  n5 = To.useDebugValue;
X$.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
  var a = e5(null);
  if (a.current === null) {
    var o = { hasValue: !1, value: null };
    a.current = o;
  } else o = a.current;
  a = r5(
    function () {
      function s(p) {
        if (!u) {
          if (((u = !0), (c = p), (p = n(p)), i !== void 0 && o.hasValue)) {
            var h = o.value;
            if (i(h, p)) return (f = h);
          }
          return (f = p);
        }
        if (((h = f), Z$(c, p))) return h;
        var g = n(p);
        return i !== void 0 && i(h, g) ? ((c = p), h) : ((c = p), (f = g));
      }
      var u = !1,
        c,
        f,
        d = r === void 0 ? null : r;
      return [
        function () {
          return s(t());
        },
        d === null
          ? void 0
          : function () {
              return s(d());
            },
      ];
    },
    [t, r, n, i],
  );
  var l = J$(e, a[0], a[1]);
  return (
    t5(
      function () {
        ((o.hasValue = !0), (o.value = l));
      },
      [l],
    ),
    n5(l),
    l
  );
};
function i5(e) {
  e();
}
function a5() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      i5(() => {
        let r = e;
        for (; r; ) (r.callback(), (r = r.next));
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) (r.push(n), (n = n.next));
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = (t = { callback: r, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Oy = { notify() {}, get: () => [] };
function o5(e, t) {
  let r,
    n = Oy,
    i = 0,
    a = !1;
  function o(g) {
    c();
    const y = n.subscribe(g);
    let m = !1;
    return () => {
      m || ((m = !0), y(), f());
    };
  }
  function l() {
    n.notify();
  }
  function s() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return a;
  }
  function c() {
    (i++, r || ((r = e.subscribe(s)), (n = a5())));
  }
  function f() {
    (i--, r && i === 0 && (r(), (r = void 0), n.clear(), (n = Oy)));
  }
  function d() {
    a || ((a = !0), c());
  }
  function p() {
    a && ((a = !1), f());
  }
  const h = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: s,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n,
  };
  return h;
}
var l5 = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  s5 = l5(),
  u5 = () => typeof navigator < "u" && navigator.product === "ReactNative",
  c5 = u5(),
  f5 = () => (s5 || c5 ? b.useLayoutEffect : b.useEffect),
  d5 = f5(),
  Mc = Symbol.for("react-redux-context"),
  Dc = typeof globalThis < "u" ? globalThis : {};
function p5() {
  if (!b.createContext) return {};
  const e = Dc[Mc] ?? (Dc[Mc] = new Map());
  let t = e.get(b.createContext);
  return (t || ((t = b.createContext(null)), e.set(b.createContext, t)), t);
}
var h5 = p5();
function m5(e) {
  const { children: t, context: r, serverState: n, store: i } = e,
    a = b.useMemo(() => {
      const s = o5(i);
      return {
        store: i,
        subscription: s,
        getServerState: n ? () => n : void 0,
      };
    }, [i, n]),
    o = b.useMemo(() => i.getState(), [i]);
  d5(() => {
    const { subscription: s } = a;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      o !== i.getState() && s.notifyNestedSubs(),
      () => {
        (s.tryUnsubscribe(), (s.onStateChange = void 0));
      }
    );
  }, [a, o]);
  const l = r || h5;
  return b.createElement(l.Provider, { value: a }, t);
}
var v5 = m5,
  g5 = (e, t) => t,
  Hh = A([g5, ge, ZN, Ie, _S, Fr, VD, Ke], QD),
  Vh = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      r = t.width / e.currentTarget.offsetWidth,
      n = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / r),
      chartY: Math.round((e.clientY - t.top) / n),
    };
  },
  w2 = Wt("mouseClick"),
  b2 = wo();
b2.startListening({
  actionCreator: w2,
  effect: (e, t) => {
    var r = e.payload,
      n = Hh(t.getState(), Vh(r));
    (n == null ? void 0 : n.activeIndex) != null &&
      t.dispatch(
        tD({
          activeIndex: n.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: n.activeCoordinate,
        }),
      );
  },
});
var yd = Wt("mouseMove"),
  S2 = wo();
S2.startListening({
  actionCreator: yd,
  effect: (e, t) => {
    var r = e.payload,
      n = t.getState(),
      i = Ah(n, n.tooltip.settings.shared),
      a = Hh(n, Vh(r));
    i === "axis" &&
      ((a == null ? void 0 : a.activeIndex) != null
        ? t.dispatch(
            wS({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          )
        : t.dispatch(xS()));
  },
});
function y5(e, t) {
  return t instanceof HTMLElement
    ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">')
    : t === window
      ? "global.window"
      : t;
}
var ky = {
    accessibilityLayer: !0,
    barCategoryGap: "10%",
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: "none",
    syncId: void 0,
    syncMethod: "index",
  },
  P2 = Vt({
    name: "rootProps",
    initialState: ky,
    reducers: {
      updateOptions: (e, t) => {
        var r;
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap =
            (r = t.payload.barGap) !== null && r !== void 0 ? r : ky.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  x5 = P2.reducer,
  { updateOptions: w5 } = P2.actions,
  b5 = Vt({
    name: "polarOptions",
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  S5 = b5.reducer,
  E2 = Wt("keyDown"),
  O2 = Wt("focus"),
  Yh = wo();
Yh.startListening({
  actionCreator: E2,
  effect: (e, t) => {
    var r = t.getState(),
      n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var { keyboardInteraction: i } = r.tooltip,
        a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var o = Number(jh(i, si(r))),
          l = Fr(r);
        if (a === "Enter") {
          var s = bs(r, "axis", "hover", String(i.index));
          t.dispatch(
            ud({
              active: !i.active,
              activeIndex: i.index,
              activeDataKey: i.dataKey,
              activeCoordinate: s,
            }),
          );
          return;
        }
        var u = YM(r),
          c = u === "left-to-right" ? 1 : -1,
          f = a === "ArrowRight" ? 1 : -1,
          d = o + f * c;
        if (!(l == null || d >= l.length || d < 0)) {
          var p = bs(r, "axis", "hover", String(d));
          t.dispatch(
            ud({
              active: !0,
              activeIndex: d.toString(),
              activeDataKey: void 0,
              activeCoordinate: p,
            }),
          );
        }
      }
    }
  },
});
Yh.startListening({
  actionCreator: O2,
  effect: (e, t) => {
    var r = t.getState(),
      n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var { keyboardInteraction: i } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0",
          o = bs(r, "axis", "hover", String(a));
        t.dispatch(
          ud({
            activeDataKey: void 0,
            active: !0,
            activeIndex: a,
            activeCoordinate: o,
          }),
        );
      }
    }
  },
});
var Nt = Wt("externalEvent"),
  k2 = wo();
k2.startListening({
  actionCreator: Nt,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(),
        n = {
          activeCoordinate: LD(r),
          activeDataKey: DD(r),
          activeIndex: fo(r),
          activeLabel: jS(r),
          activeTooltipIndex: fo(r),
          isTooltipActive: $D(r),
        };
      e.payload.handler(n, e.payload.reactEvent);
    }
  },
});
var P5 = A([ia], (e) => e.tooltipItemPayloads),
  E5 = A([P5, jo, (e, t, r) => t, (e, t, r) => r], (e, t, r, n) => {
    var i = e.find((l) => l.settings.dataKey === n);
    if (i != null) {
      var { positions: a } = i;
      if (a != null) {
        var o = t(a, r);
        return o;
      }
    }
  }),
  _2 = Wt("touchMove"),
  C2 = wo();
C2.startListening({
  actionCreator: _2,
  effect: (e, t) => {
    var r = e.payload,
      n = t.getState(),
      i = Ah(n, n.tooltip.settings.shared);
    if (i === "axis") {
      var a = Hh(
        n,
        Vh({
          clientX: r.touches[0].clientX,
          clientY: r.touches[0].clientY,
          currentTarget: r.currentTarget,
        }),
      );
      (a == null ? void 0 : a.activeIndex) != null &&
        t.dispatch(
          wS({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === "item") {
      var o,
        l = r.touches[0],
        s = document.elementFromPoint(l.clientX, l.clientY);
      if (!s || !s.getAttribute) return;
      var u = s.getAttribute(MC),
        c = (o = s.getAttribute(DC)) !== null && o !== void 0 ? o : void 0,
        f = E5(t.getState(), u, c);
      t.dispatch(eD({ activeDataKey: c, activeIndex: u, activeCoordinate: f }));
    }
  },
});
var O5 = Kx({
    brush: dL,
    cartesianAxis: T$,
    chartData: pI,
    graphicalItems: _3,
    layout: iC,
    legend: HC,
    options: sI,
    polarAxis: S3,
    polarOptions: S5,
    referenceElements: wL,
    rootProps: x5,
    tooltip: rD,
  }),
  k5 = function (t) {
    var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
    return A_({
      reducer: O5,
      preloadedState: t,
      middleware: (n) =>
        n({ serializableCheck: !1 }).concat([
          b2.middleware,
          S2.middleware,
          Yh.middleware,
          k2.middleware,
          C2.middleware,
        ]),
      devTools: { serialize: { replacer: y5 }, name: "recharts-".concat(r) },
    });
  };
function _5(e) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e,
    i = pt(),
    a = b.useRef(null);
  if (i) return r;
  a.current == null && (a.current = k5(t, n));
  var o = Tp;
  return b.createElement(v5, { context: o, store: a.current }, r);
}
function C5(e) {
  var { layout: t, width: r, height: n, margin: i } = e,
    a = nt(),
    o = pt();
  return (
    b.useEffect(() => {
      o || (a(tC(t)), a(rC({ width: r, height: n })), a(eC(i)));
    }, [a, o, t, r, n, i]),
    null
  );
}
function A5(e) {
  var t = nt();
  return (
    b.useEffect(() => {
      t(w5(e));
    }, [t, e]),
    null
  );
}
var j5 = ["children"];
function T5(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = N5(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function N5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _s.apply(null, arguments)
  );
}
var M5 = { width: "100%", height: "100%" },
  D5 = b.forwardRef((e, t) => {
    var r = xw(),
      n = ww(),
      i = Sw();
    if (!as(r) || !as(n)) return null;
    var { children: a, otherAttributes: o, title: l, desc: s } = e,
      u,
      c;
    return (
      typeof o.tabIndex == "number" ? (u = o.tabIndex) : (u = i ? 0 : void 0),
      typeof o.role == "string"
        ? (c = o.role)
        : (c = i ? "application" : void 0),
      b.createElement(
        rx,
        _s({}, o, {
          title: l,
          desc: s,
          role: c,
          tabIndex: u,
          width: r,
          height: n,
          style: M5,
          ref: t,
        }),
        a,
      )
    );
  }),
  I5 = (e) => {
    var { children: t } = e,
      r = H(yu);
    if (!r) return null;
    var { width: n, height: i, y: a, x: o } = r;
    return b.createElement(rx, { width: n, height: i, x: o, y: a }, t);
  },
  _y = b.forwardRef((e, t) => {
    var { children: r } = e,
      n = T5(e, j5),
      i = pt();
    return i
      ? b.createElement(I5, null, r)
      : b.createElement(D5, _s({ ref: t }, n), r);
  });
function L5() {
  var e = nt(),
    [t, r] = b.useState(null),
    n = H(NC);
  return (
    b.useEffect(() => {
      if (t != null) {
        var i = t.getBoundingClientRect(),
          a = i.width / t.offsetWidth;
        ir(a) && a !== n && e(nC(a));
      }
    }, [t, e, n]),
    r
  );
}
function Cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function $5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cy(Object(r), !0).forEach(function (n) {
          R5(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function R5(e, t, r) {
  return (
    (t = z5(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function z5(e) {
  var t = F5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B5 = b.forwardRef((e, t) => {
    var {
        children: r,
        className: n,
        height: i,
        onClick: a,
        onContextMenu: o,
        onDoubleClick: l,
        onMouseDown: s,
        onMouseEnter: u,
        onMouseLeave: c,
        onMouseMove: f,
        onMouseUp: d,
        onTouchEnd: p,
        onTouchMove: h,
        onTouchStart: g,
        style: y,
        width: m,
      } = e,
      v = nt(),
      [x, S] = b.useState(null),
      [P, E] = b.useState(null);
    vI();
    var O = L5(),
      k = b.useCallback(
        ($) => {
          (O($), typeof t == "function" && t($), S($), E($));
        },
        [O, t, S, E],
      ),
      _ = b.useCallback(
        ($) => {
          (v(w2($)), v(Nt({ handler: a, reactEvent: $ })));
        },
        [v, a],
      ),
      j = b.useCallback(
        ($) => {
          (v(yd($)), v(Nt({ handler: u, reactEvent: $ })));
        },
        [v, u],
      ),
      T = b.useCallback(
        ($) => {
          (v(xS()), v(Nt({ handler: c, reactEvent: $ })));
        },
        [v, c],
      ),
      L = b.useCallback(
        ($) => {
          (v(yd($)), v(Nt({ handler: f, reactEvent: $ })));
        },
        [v, f],
      ),
      Y = b.useCallback(() => {
        v(O2());
      }, [v]),
      F = b.useCallback(
        ($) => {
          v(E2($.key));
        },
        [v],
      ),
      D = b.useCallback(
        ($) => {
          v(Nt({ handler: o, reactEvent: $ }));
        },
        [v, o],
      ),
      V = b.useCallback(
        ($) => {
          v(Nt({ handler: l, reactEvent: $ }));
        },
        [v, l],
      ),
      B = b.useCallback(
        ($) => {
          v(Nt({ handler: s, reactEvent: $ }));
        },
        [v, s],
      ),
      C = b.useCallback(
        ($) => {
          v(Nt({ handler: d, reactEvent: $ }));
        },
        [v, d],
      ),
      M = b.useCallback(
        ($) => {
          v(Nt({ handler: g, reactEvent: $ }));
        },
        [v, g],
      ),
      W = b.useCallback(
        ($) => {
          (v(_2($)), v(Nt({ handler: h, reactEvent: $ })));
        },
        [v, h],
      ),
      G = b.useCallback(
        ($) => {
          v(Nt({ handler: p, reactEvent: $ }));
        },
        [v, p],
      );
    return b.createElement(
      LS.Provider,
      { value: x },
      b.createElement(
        tk.Provider,
        { value: P },
        b.createElement(
          "div",
          {
            className: se("recharts-wrapper", n),
            style: $5(
              { position: "relative", cursor: "default", width: m, height: i },
              y,
            ),
            onClick: _,
            onContextMenu: D,
            onDoubleClick: V,
            onFocus: Y,
            onKeyDown: F,
            onMouseDown: B,
            onMouseEnter: j,
            onMouseLeave: T,
            onMouseMove: L,
            onMouseUp: C,
            onTouchEnd: G,
            onTouchMove: W,
            onTouchStart: M,
            ref: k,
          },
          r,
        ),
      ),
    );
  }),
  U5 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function W5(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = K5(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function K5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var H5 = b.forwardRef((e, t) => {
    var {
        children: r,
        className: n,
        width: i,
        height: a,
        style: o,
        compact: l,
        title: s,
        desc: u,
      } = e,
      c = W5(e, U5),
      f = ue(c, !1);
    return l
      ? b.createElement(_y, { otherAttributes: f, title: s, desc: u }, r)
      : b.createElement(
          B5,
          {
            className: n,
            style: o,
            width: i,
            height: a,
            onClick: e.onClick,
            onMouseLeave: e.onMouseLeave,
            onMouseEnter: e.onMouseEnter,
            onMouseMove: e.onMouseMove,
            onMouseDown: e.onMouseDown,
            onMouseUp: e.onMouseUp,
            onContextMenu: e.onContextMenu,
            onDoubleClick: e.onDoubleClick,
            onTouchStart: e.onTouchStart,
            onTouchMove: e.onTouchMove,
            onTouchEnd: e.onTouchEnd,
          },
          b.createElement(
            _y,
            { otherAttributes: f, title: s, desc: u, ref: t },
            b.createElement(SL, null, r),
          ),
        );
  }),
  V5 = ["width", "height"];
function xd() {
  return (
    (xd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xd.apply(null, arguments)
  );
}
function Y5(e, t) {
  if (e == null) return {};
  var r,
    n,
    i = G5(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      ((r = a[n]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]));
  }
  return i;
}
function G5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      r[n] = e[n];
    }
  return r;
}
var q5 = { top: 5, right: 5, bottom: 5, left: 5 },
  X5 = {
    accessibilityLayer: !0,
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: q5,
    reverseStackOrder: !1,
    syncMethod: "index",
  },
  Q5 = b.forwardRef(function (t, r) {
    var n,
      i = ni(t.categoricalChartProps, X5),
      { width: a, height: o } = i,
      l = Y5(i, V5);
    if (!as(a) || !as(o)) return null;
    var {
        chartName: s,
        defaultTooltipEventType: u,
        validateTooltipEventTypes: c,
        tooltipPayloadSearcher: f,
        categoricalChartProps: d,
      } = t,
      p = {
        chartName: s,
        defaultTooltipEventType: u,
        validateTooltipEventTypes: c,
        tooltipPayloadSearcher: f,
        eventEmitter: void 0,
      };
    return b.createElement(
      _5,
      {
        preloadedState: { options: p },
        reduxStoreName: (n = d.id) !== null && n !== void 0 ? n : s,
      },
      b.createElement(cL, { chartData: d.data }),
      b.createElement(C5, {
        width: a,
        height: o,
        layout: i.layout,
        margin: i.margin,
      }),
      b.createElement(A5, {
        accessibilityLayer: i.accessibilityLayer,
        barCategoryGap: i.barCategoryGap,
        maxBarSize: i.maxBarSize,
        stackOffset: i.stackOffset,
        barGap: i.barGap,
        barSize: i.barSize,
        syncId: i.syncId,
        syncMethod: i.syncMethod,
        className: i.className,
      }),
      b.createElement(H5, xd({}, l, { width: a, height: o, ref: r })),
    );
  }),
  Z5 = ["axis"],
  J5 = b.forwardRef((e, t) =>
    b.createElement(Q5, {
      chartName: "LineChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: Z5,
      tooltipPayloadSearcher: oI,
      categoricalChartProps: e,
      ref: t,
    }),
  );
const A2 = ({ unitName: e, data: t }) => {
    const { t: r } = Ir(),
      [n, i] = b.useState(null),
      [a, o] = b.useState(!1),
      [l, s] = b.useState(null),
      u = b.useRef(null),
      c = b.useMemo(
        () =>
          !t || t.length === 0
            ? []
            : t
                .filter((x) => x.name === e)
                .sort(
                  (x, S) =>
                    new Date(x.add_time).getTime() -
                    new Date(S.add_time).getTime(),
                )
                .map((x) => ({
                  timestamp: new Date(x.add_time).getTime(),
                  time: x.add_time,
                  temperature: x.temp || 0,
                  humidity: x.humidity || 0,
                  formattedTime: new Date(x.add_time).toLocaleTimeString(
                    "zh-TW",
                    { hour: "2-digit", minute: "2-digit" },
                  ),
                })),
        [t, e],
      ),
      f = b.useMemo(() => {
        if (c.length === 0) return null;
        const S = c[c.length - 1].timestamp - 8 * 60 * 60 * 1e3,
          P = c.findIndex((O) => O.timestamp >= S);
        return { start: P === -1 ? 0 : P, end: c.length - 1 };
      }, [c]);
    Pl.useEffect(() => {
      f && !n && i(f);
    }, [f, n]);
    const d = b.useMemo(
        () => (!n || c.length === 0 ? c : c.slice(n.start, n.end + 1)),
        [c, n],
      ),
      p = b.useCallback(
        (x) => {
          n &&
            (o(!0),
            s({ x: x.clientX, startIndex: n.start }),
            x.preventDefault());
        },
        [n],
      ),
      h = b.useCallback(
        (x) => {
          var j;
          if (!a || !l || !n || c.length === 0) return;
          const S = x.clientX - l.x,
            E =
              (((j = u.current) == null ? void 0 : j.offsetWidth) || 800) /
              (n.end - n.start + 1),
            O = Math.round(-S / E),
            k = Math.max(
              0,
              Math.min(c.length - (n.end - n.start + 1), l.startIndex + O),
            ),
            _ = k + (n.end - n.start);
          i({ start: k, end: _ });
        },
        [a, l, n, c],
      ),
      g = b.useCallback(() => {
        (o(!1), s(null));
      }, []);
    Pl.useEffect(() => {
      if (a)
        return (
          document.addEventListener("mousemove", h),
          document.addEventListener("mouseup", g),
          (document.body.style.cursor = "grabbing !important"),
          (document.body.style.userSelect = "none !important"),
          () => {
            (document.removeEventListener("mousemove", h),
              document.removeEventListener("mouseup", g),
              (document.body.style.cursor = "auto"),
              (document.body.style.userSelect = "auto"));
          }
        );
    }, [a, h, g]);
    const y = ({ active: x, payload: S, label: P }) => {
        if (x && S && S.length) {
          const E = S[0].payload;
          return w.jsxs("div", {
            className:
              "bg-white p-3 border border-gray-200 rounded-lg shadow-lg",
            children: [
              w.jsx("p", {
                className: "text-sm font-medium text-gray-800 mb-2",
                children: new Date(P).toLocaleString("zh-TW"),
              }),
              w.jsxs("div", {
                className: "space-y-1",
                children: [
                  w.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      w.jsx("div", {
                        className: "w-3 h-3 bg-red-500 rounded-full mr-2",
                      }),
                      w.jsxs("span", {
                        className: "text-sm text-gray-600",
                        children: [
                          "溫度: ",
                          w.jsxs("span", {
                            className: "font-medium",
                            children: [E.temperature.toFixed(1), "°C"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      w.jsx("div", {
                        className: "w-3 h-3 bg-blue-500 rounded-full mr-2",
                      }),
                      w.jsxs("span", {
                        className: "text-sm text-gray-600",
                        children: [
                          "濕度: ",
                          w.jsxs("span", {
                            className: "font-medium",
                            children: [E.humidity.toFixed(1), "%"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        return null;
      },
      m = (x) =>
        w.jsxs("div", {
          className: "flex items-center justify-center space-x-6 mt-4",
          children: [
            w.jsxs("div", {
              className: "flex items-center",
              children: [
                w.jsx("div", { className: "w-4 h-0.5 bg-red-500 mr-2" }),
                w.jsxs("span", {
                  className: "text-sm text-gray-600",
                  children: [r("temperature"), " (°C)"],
                }),
              ],
            }),
            w.jsxs("div", {
              className: "flex items-center",
              children: [
                w.jsx("div", { className: "w-4 h-0.5 bg-blue-500 mr-2" }),
                w.jsxs("span", {
                  className: "text-sm text-gray-600",
                  children: [r("humidity"), " (%)"],
                }),
              ],
            }),
          ],
        }),
      v = (x) =>
        new Date(x).toLocaleTimeString("zh-TW", {
          hour: "2-digit",
          minute: "2-digit",
        });
    return c.length === 0
      ? w.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
          children: [
            w.jsxs("h3", {
              className: "text-lg font-semibold text-gray-800 mb-4",
              children: [e, " - ", r("temp.humidity.trend")],
            }),
            w.jsx("div", {
              className: "flex items-center justify-center h-64 text-gray-500",
              children: w.jsx("p", { children: "暫無數據" }),
            }),
          ],
        })
      : w.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6",
          children: [
            w.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                w.jsxs("h3", {
                  className: "text-lg font-semibold text-gray-800",
                  children: [e, " - ", r("temp.humidity.trend")],
                }),
                w.jsxs("div", {
                  className: "text-sm text-gray-500",
                  children: [
                    "共 ",
                    c.length,
                    " ",
                    r("records.count"),
                    " | ",
                    r("displaying.last.8hours"),
                    " | ",
                    r("latest.time"),
                    ": ",
                    c.length > 0
                      ? new Date(c[c.length - 1].timestamp).toLocaleTimeString(
                          "zh-TW",
                          { hour: "2-digit", minute: "2-digit" },
                        )
                      : "-",
                    " | ",
                    r("showing.records"),
                    " ",
                    d.length,
                    " ",
                    r("records.count"),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              ref: u,
              className: "h-96 select-none",
              style: { cursor: a ? "grabbing" : "grab", userSelect: "none" },
              onMouseDown: p,
              children: w.jsx(jI, {
                width: "100%",
                height: "100%",
                children: w.jsxs(J5, {
                  data: d,
                  margin: { top: 20, right: 60, left: 20, bottom: 20 },
                  children: [
                    w.jsx(s2, {
                      strokeDasharray: "3 3",
                      stroke: "#f0f0f0",
                      horizontal: !0,
                      vertical: !1,
                    }),
                    w.jsx(ks, {
                      yAxisId: "temp",
                      orientation: "left",
                      stroke: "#ef4444",
                      tick: { fontSize: 12, fill: "#6b7280" },
                      tickFormatter: (x) => `${x}°C`,
                      domain: ["dataMin - 2", "dataMax + 2"],
                    }),
                    w.jsx(ks, {
                      yAxisId: "humidity",
                      orientation: "right",
                      stroke: "#3b82f6",
                      tick: { fontSize: 12, fill: "#6b7280" },
                      tickFormatter: (x) => `${x}%`,
                      domain: [0, 100],
                    }),
                    w.jsx(Kh, {
                      dataKey: "time",
                      tick: { fontSize: 12, fill: "#6b7280" },
                      tickFormatter: v,
                      interval: "preserveStartEnd",
                      minTickGap: 50,
                    }),
                    w.jsx(EI, { content: w.jsx(y, {}) }),
                    w.jsx(Os, {
                      yAxisId: "temp",
                      type: "monotone",
                      dataKey: "temperature",
                      stroke: "#ef4444",
                      strokeWidth: 2,
                      dot: !1,
                      activeDot: {
                        r: 5,
                        stroke: "#ef4444",
                        strokeWidth: 2,
                        fill: "#fff",
                      },
                      connectNulls: !1,
                    }),
                    w.jsx(Os, {
                      yAxisId: "humidity",
                      type: "monotone",
                      dataKey: "humidity",
                      stroke: "#3b82f6",
                      strokeWidth: 2,
                      dot: !1,
                      activeDot: {
                        r: 5,
                        stroke: "#3b82f6",
                        strokeWidth: 2,
                        fill: "#fff",
                      },
                      connectNulls: !1,
                    }),
                  ],
                }),
              }),
            }),
            w.jsx(m, {}),
            w.jsx("div", {
              className:
                "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
              children: w.jsxs("p", {
                className: "text-sm text-blue-800",
                children: [
                  "💡 ",
                  w.jsx("strong", { children: "使用說明：" }),
                  "點擊並拖拽圖表可左右滑動查看不同時間段，預設顯示最近8小時數據",
                ],
              }),
            }),
            w.jsxs("div", {
              className:
                "mt-6 grid grid-cols-2 gap-4 pt-4 border-t border-gray-100",
              children: [
                w.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: [
                    w.jsxs("span", {
                      className: "font-medium text-red-600",
                      children: [r("temperature"), "範圍："],
                    }),
                    Math.min(...d.map((x) => x.temperature)).toFixed(1),
                    "°C - ",
                    Math.max(...d.map((x) => x.temperature)).toFixed(1),
                    "°C",
                  ],
                }),
                w.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: [
                    w.jsxs("span", {
                      className: "font-medium text-blue-600",
                      children: [r("humidity"), "範圍："],
                    }),
                    Math.min(...d.map((x) => x.humidity)).toFixed(1),
                    "% - ",
                    Math.max(...d.map((x) => x.humidity)).toFixed(1),
                    "%",
                  ],
                }),
              ],
            }),
          ],
        });
  },
  j2 = () => {
    const [e, t] = b.useState(!1);
    b.useEffect(() => {
      const n = () => {
        t(Ni.getMuteStatus());
      };
      n();
      const i = setInterval(n, 100);
      return () => clearInterval(i);
    }, []);
    const r = () => {
      e ? (Ni.unmute(), t(!1)) : (Ni.mute(), t(!0));
    };
    return w.jsx("button", {
      onClick: r,
      className: `flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${e ? "bg-gray-600 text-white hover:bg-gray-700" : "bg-red-600 text-white hover:bg-red-700"}`,
      title: e ? "取消靜音警報" : "靜音警報",
      children: e
        ? w.jsxs(w.Fragment, {
            children: [
              w.jsx(bO, { size: 16, className: "mr-2" }),
              "警報已靜音",
            ],
          })
        : w.jsxs(w.Fragment, {
            children: [
              w.jsx(wO, { size: 16, className: "mr-2" }),
              "靜音警報 (1分鐘後自動停止)",
            ],
          }),
    });
  },
  ei = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return w.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  e4 = ({ isOpen: e, onClose: t, onAdd: r }) => {
    const [n, i] = b.useState({
        IP: "",
        name: "",
        temp_max: "30",
        temp_min: "20",
        temp_offset: "2",
        humidity_max: "70",
        humidity_min: "50",
        humidity_offset: "10",
        alert: !0,
        mail: !0,
      }),
      [a, o] = b.useState(!1),
      [l, s] = b.useState(null);
    Pl.useEffect(() => {
      e &&
        (i({
          IP: "",
          name: "",
          temp_max: "30",
          temp_min: "20",
          temp_offset: "0",
          humidity_max: "70",
          humidity_min: "50",
          humidity_offset: "0",
          alert: !0,
          mail: !0,
        }),
        s(null));
    }, [e]);
    const u = (p, h) => {
        i((g) => ({ ...g, [p]: h }));
      },
      c = () => {
        if (!n.IP.trim()) return "IP 位址為必填欄位";
        if (!n.name.trim()) return "名稱為必填欄位";
        const p = parseFloat(n.temp_min),
          h = parseFloat(n.temp_max),
          g = parseFloat(n.humidity_min),
          y = parseFloat(n.humidity_max),
          m = parseFloat(n.temp_offset),
          v = parseFloat(n.humidity_offset);
        return p >= h
          ? "溫度下限必須小於溫度上限"
          : g >= y
            ? "濕度下限必須小於濕度上限"
            : p < -50 || h > 100
              ? "溫度設定範圍應在 -50°C 到 100°C 之間"
              : g < 0 || y > 100
                ? "濕度設定範圍應在 0% 到 100% 之間"
                : isNaN(m)
                  ? "溫度偏移值必須是有效數字"
                  : isNaN(v)
                    ? "濕度偏移值必須是有效數字"
                    : null;
      },
      f = async () => {
        s(null);
        const p = c();
        if (p) {
          s(p);
          return;
        }
        o(!0);
        try {
          const h = {
            IP: n.IP.trim(),
            name: n.name.trim(),
            temp_max: n.temp_max,
            temp_min: n.temp_min,
            temp_offset: n.temp_offset,
            humidity_max: n.humidity_max,
            humidity_min: n.humidity_min,
            humidity_offset: n.humidity_offset,
            alert: n.alert ? "True" : "False",
            mail: n.mail ? "True" : "False",
          };
          (await r(h), t());
        } catch (h) {
          s(h instanceof Error ? h.message : "新增設定失敗，請稍後再試");
        } finally {
          o(!1);
        }
      },
      d = () => {
        a || t();
      };
    return e
      ? w.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4",
          children: w.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              w.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  w.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      w.jsx(Af, { size: 24, className: "text-green-600 mr-3" }),
                      w.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增溫濕度設定",
                      }),
                    ],
                  }),
                  w.jsx("button", {
                    onClick: d,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: w.jsx(mp, { size: 20 }),
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  l &&
                    w.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        w.jsx(hp, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        l,
                      ],
                    }),
                  w.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      w.jsxs("div", {
                        children: [
                          w.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "IP 位址 ",
                              w.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          w.jsx("input", {
                            type: "text",
                            value: n.IP,
                            onChange: (p) => u("IP", p.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "例如: 192.168.1.100",
                          }),
                        ],
                      }),
                      w.jsxs("div", {
                        children: [
                          w.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "名稱 ",
                              w.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          w.jsx("input", {
                            type: "text",
                            value: n.name,
                            onChange: (p) => u("name", p.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "例如: 門診藥局",
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      w.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          w.jsx("input", {
                            type: "checkbox",
                            id: "alert-enabled",
                            checked: n.alert,
                            onChange: (p) => u("alert", p.target.checked),
                            disabled: a,
                            className:
                              "rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50",
                          }),
                          w.jsx("label", {
                            htmlFor: "alert-enabled",
                            className: "ml-2 text-sm font-medium text-gray-700",
                            children: "啟用聲音警報",
                          }),
                        ],
                      }),
                      w.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          w.jsx("input", {
                            type: "checkbox",
                            id: "mail-enabled",
                            checked: n.mail,
                            onChange: (p) => u("mail", p.target.checked),
                            disabled: a,
                            className:
                              "rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50",
                          }),
                          w.jsx("label", {
                            htmlFor: "mail-enabled",
                            className: "ml-2 text-sm font-medium text-gray-700",
                            children: "啟用郵件通知",
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      w.jsxs("h3", {
                        className:
                          "text-lg font-medium text-gray-800 flex items-center",
                        children: [
                          w.jsx("div", {
                            className: "w-4 h-4 bg-red-500 rounded-full mr-2",
                          }),
                          "溫度警報設定",
                        ],
                      }),
                      w.jsxs("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "溫度下限 (°C)",
                              }),
                              w.jsx("input", {
                                type: "number",
                                value: n.temp_min,
                                onChange: (p) => u("temp_min", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "20",
                                min: "-50",
                                max: "100",
                                step: "0.1",
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "溫度上限 (°C)",
                              }),
                              w.jsx("input", {
                                type: "number",
                                value: n.temp_max,
                                onChange: (p) => u("temp_max", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "30",
                                min: "-50",
                                max: "100",
                                step: "0.1",
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "溫度偏移 (°C)",
                              }),
                              w.jsx("input", {
                                type: "text",
                                value: n.temp_offset,
                                onChange: (p) =>
                                  u("temp_offset", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      w.jsxs("h3", {
                        className:
                          "text-lg font-medium text-gray-800 flex items-center",
                        children: [
                          w.jsx("div", {
                            className: "w-4 h-4 bg-blue-500 rounded-full mr-2",
                          }),
                          "濕度警報設定",
                        ],
                      }),
                      w.jsxs("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "濕度下限 (%)",
                              }),
                              w.jsx("input", {
                                type: "number",
                                value: n.humidity_min,
                                onChange: (p) =>
                                  u("humidity_min", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "50",
                                min: "0",
                                max: "100",
                                step: "0.1",
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "濕度上限 (%)",
                              }),
                              w.jsx("input", {
                                type: "number",
                                value: n.humidity_max,
                                onChange: (p) =>
                                  u("humidity_max", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "70",
                                min: "0",
                                max: "100",
                                step: "0.1",
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            children: [
                              w.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "濕度偏移 (%)",
                              }),
                              w.jsx("input", {
                                type: "text",
                                value: n.humidity_offset,
                                onChange: (p) =>
                                  u("humidity_offset", p.target.value),
                                disabled: a,
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                placeholder: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  w.jsx("button", {
                    onClick: d,
                    disabled: a,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  w.jsx("button", {
                    onClick: f,
                    disabled: a || !n.IP.trim() || !n.name.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: a
                      ? w.jsxs(w.Fragment, {
                          children: [
                            w.jsx(ei, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : w.jsxs(w.Fragment, {
                          children: [
                            w.jsx(Af, { size: 16, className: "mr-2" }),
                            "新增設定",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  t4 = ({
    isOpen: e,
    onClose: t,
    allThresholds: r,
    globalThresholds: n,
    onSettingsUpdate: i,
  }) => {
    const [a, o] = b.useState([]),
      [l, s] = b.useState(""),
      [u, c] = b.useState(!1),
      [f, d] = b.useState(null),
      [p, h] = b.useState(!1),
      [g, y] = b.useState(!1),
      [m, v] = b.useState(!1),
      [x, S] = b.useState(!1);
    b.useEffect(() => {
      e && (o([...r]), s(r.length > 0 ? r[0].GUID : ""), d(null), h(!1));
    }, [e, r]);
    const P = (D, V, B) => {
        o((C) =>
          C.map((M) => {
            if (M.GUID === D) {
              if (typeof B == "boolean") return { ...M, [V]: B };
              if (V === "temp_offset" || V === "humidity_offset")
                return { ...M, [V]: B };
              const W = parseFloat(B) || 0;
              return { ...M, [V]: W };
            }
            return M;
          }),
        );
      },
      E = (D, V) => {
        o((B) => B.map((C) => (C.GUID === D ? { ...C, IP: V } : C)));
      },
      O = () => a.find((D) => D.GUID === l) || null,
      k = (D) => {
        if (D.temp_min >= D.temp_max)
          return `${D.name}: 溫度下限必須小於溫度上限`;
        if (D.humidity_min >= D.humidity_max)
          return `${D.name}: 濕度下限必須小於濕度上限`;
        if (D.temp_min < -50 || D.temp_max > 100)
          return `${D.name}: 溫度設定範圍應在 -50°C 到 100°C 之間`;
        if (D.humidity_min < 0 || D.humidity_max > 100)
          return `${D.name}: 濕度設定範圍應在 0% 到 100% 之間`;
        const V = parseFloat(D.temp_offset.toString()),
          B = parseFloat(D.humidity_offset.toString());
        return isNaN(V)
          ? `${D.name}: 溫度偏移值必須是有效數字`
          : isNaN(B)
            ? `${D.name}: 濕度偏移值必須是有效數字`
            : null;
      },
      _ = () => {
        for (const D of a) {
          const V = k(D);
          if (V) return V;
        }
        return null;
      },
      j = async () => {
        (d(null), h(!1));
        const D = _();
        if (D) {
          d(D);
          return;
        }
        c(!0);
        try {
          const V = a.map((B) => ({
            GUID: B.GUID,
            IP: B.IP,
            name: B.name,
            temp_max: B.temp_max.toString(),
            temp_min: B.temp_min.toString(),
            temp_offset: parseFloat(B.temp_offset.toString()).toString(),
            humidity_max: B.humidity_max.toString(),
            humidity_min: B.humidity_min.toString(),
            humidity_offset: parseFloat(
              B.humidity_offset.toString(),
            ).toString(),
            alert: B.alert ? "True" : "False",
            mail: B.mail ? "True" : "False",
          }));
          (await NO(V),
            h(!0),
            i(),
            setTimeout(() => {
              t();
            }, 1500));
        } catch (V) {
          d(V instanceof Error ? V.message : "更新設定失敗，請稍後再試");
        } finally {
          c(!1);
        }
      },
      T = async () => {
        if (F) {
          (v(!0), d(null), S(!1));
          try {
            (await MO(F.GUID), o((V) => V.filter((B) => B.GUID !== F.GUID)));
            const D = a.filter((V) => V.GUID !== F.GUID);
            (D.length > 0 ? s(D[0].GUID) : s(""),
              i(),
              h(!0),
              D.length === 0 &&
                setTimeout(() => {
                  t();
                }, 1500));
          } catch (D) {
            d(D instanceof Error ? D.message : "刪除設定失敗，請稍後再試");
          } finally {
            v(!1);
          }
        }
      },
      L = async (D) => {
        try {
          (await DO(D), y(!1), i());
        } catch (V) {
          throw V;
        }
      },
      Y = () => {
        !u && !m && t();
      };
    if (!e) return null;
    const F = O();
    return w.jsxs("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: [
        w.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
          children: [
            w.jsxs("div", {
              className:
                "flex items-center justify-between p-6 border-b border-gray-200",
              children: [
                w.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    w.jsx(K1, { size: 24, className: "text-blue-600 mr-3" }),
                    w.jsx("h2", {
                      className: "text-xl font-semibold text-gray-800",
                      children: "溫濕度警報設定",
                    }),
                  ],
                }),
                w.jsxs("button", {
                  onClick: () => y(!0),
                  disabled: u,
                  className:
                    "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                  children: [
                    w.jsx(Af, { size: 16, className: "mr-2" }),
                    "新增設定",
                  ],
                }),
                F &&
                  w.jsxs("button", {
                    onClick: () => S(!0),
                    disabled: u || m,
                    className:
                      "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: [
                      w.jsx(fc, { size: 16, className: "mr-2" }),
                      "刪除設定",
                    ],
                  }),
                w.jsx("button", {
                  onClick: Y,
                  disabled: u || m,
                  className:
                    "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                  children: w.jsx(mp, { size: 20 }),
                }),
              ],
            }),
            w.jsxs("div", {
              className: "p-6 space-y-6",
              children: [
                f &&
                  w.jsxs("div", {
                    className:
                      "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                    children: [
                      w.jsx(hp, { size: 20, className: "mr-2 flex-shrink-0" }),
                      f,
                    ],
                  }),
                p &&
                  w.jsxs("div", {
                    className:
                      "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center",
                    children: [
                      w.jsx("div", {
                        className:
                          "w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2",
                        children: w.jsx("div", {
                          className: "w-2 h-2 bg-white rounded-full",
                        }),
                      }),
                      "設定更新成功！",
                    ],
                  }),
                a.length > 1 &&
                  w.jsxs("div", {
                    children: [
                      w.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: "選擇藥局單位",
                      }),
                      w.jsx("select", {
                        value: l,
                        onChange: (D) => s(D.target.value),
                        disabled: u,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                        children: a.map((D) =>
                          w.jsx(
                            "option",
                            { value: D.GUID, children: D.name },
                            D.GUID,
                          ),
                        ),
                      }),
                    ],
                  }),
                F &&
                  w.jsxs(w.Fragment, {
                    children: [
                      w.jsxs("div", {
                        children: [
                          w.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "IP 位址",
                          }),
                          w.jsx("input", {
                            type: "text",
                            value: F.IP,
                            onChange: (D) => E(F.GUID, D.target.value),
                            disabled: u,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "例如: 192.168.1.100",
                          }),
                        ],
                      }),
                      w.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          w.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              w.jsx("input", {
                                type: "checkbox",
                                id: "alert-enabled",
                                checked: F.alert,
                                onChange: (D) =>
                                  P(F.GUID, "alert", D.target.checked),
                                disabled: u,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50",
                              }),
                              w.jsx("label", {
                                htmlFor: "alert-enabled",
                                className:
                                  "ml-2 text-sm font-medium text-gray-700",
                                children: "啟用聲音警報",
                              }),
                            ],
                          }),
                          w.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              w.jsx("input", {
                                type: "checkbox",
                                id: "mail-enabled",
                                checked: F.mail,
                                onChange: (D) =>
                                  P(F.GUID, "mail", D.target.checked),
                                disabled: u,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50",
                              }),
                              w.jsx("label", {
                                htmlFor: "mail-enabled",
                                className:
                                  "ml-2 text-sm font-medium text-gray-700",
                                children: "啟用郵件通知",
                              }),
                            ],
                          }),
                        ],
                      }),
                      w.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          w.jsxs("h3", {
                            className:
                              "text-lg font-medium text-gray-800 flex items-center",
                            children: [
                              w.jsx("div", {
                                className:
                                  "w-4 h-4 bg-red-500 rounded-full mr-2",
                              }),
                              "溫度警報設定",
                            ],
                          }),
                          w.jsxs("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "溫度下限 (°C)",
                                  }),
                                  w.jsx("input", {
                                    type: "number",
                                    value: F.temp_min,
                                    onChange: (D) =>
                                      P(F.GUID, "temp_min", D.target.value),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "15",
                                    min: "-50",
                                    max: "100",
                                    step: "0.1",
                                  }),
                                ],
                              }),
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "溫度上限 (°C)",
                                  }),
                                  w.jsx("input", {
                                    type: "number",
                                    value: F.temp_max,
                                    onChange: (D) =>
                                      P(F.GUID, "temp_max", D.target.value),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "25",
                                    min: "-50",
                                    max: "100",
                                    step: "0.1",
                                  }),
                                ],
                              }),
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "溫度偏移 (°C)",
                                  }),
                                  w.jsx("input", {
                                    type: "text",
                                    value: F.temp_offset,
                                    onChange: (D) =>
                                      P(F.GUID, "temp_offset", D.target.value),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      w.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          w.jsxs("h3", {
                            className:
                              "text-lg font-medium text-gray-800 flex items-center",
                            children: [
                              w.jsx("div", {
                                className:
                                  "w-4 h-4 bg-blue-500 rounded-full mr-2",
                              }),
                              "濕度警報設定",
                            ],
                          }),
                          w.jsxs("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "濕度下限 (%)",
                                  }),
                                  w.jsx("input", {
                                    type: "number",
                                    value: F.humidity_min,
                                    onChange: (D) =>
                                      P(F.GUID, "humidity_min", D.target.value),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "40",
                                    min: "0",
                                    max: "100",
                                    step: "0.1",
                                  }),
                                ],
                              }),
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "濕度上限 (%)",
                                  }),
                                  w.jsx("input", {
                                    type: "number",
                                    value: F.humidity_max,
                                    onChange: (D) =>
                                      P(F.GUID, "humidity_max", D.target.value),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "70",
                                    min: "0",
                                    max: "100",
                                    step: "0.1",
                                  }),
                                ],
                              }),
                              w.jsxs("div", {
                                children: [
                                  w.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-2",
                                    children: "濕度偏移 (%)",
                                  }),
                                  w.jsx("input", {
                                    type: "text",
                                    value: F.humidity_offset,
                                    onChange: (D) =>
                                      P(
                                        F.GUID,
                                        "humidity_offset",
                                        D.target.value,
                                      ),
                                    disabled: u,
                                    className:
                                      "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            w.jsxs("div", {
              className:
                "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
              children: [
                w.jsx("button", {
                  onClick: Y,
                  disabled: u || m,
                  className:
                    "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                  children: "取消",
                }),
                w.jsx("button", {
                  onClick: j,
                  disabled: u || m,
                  className:
                    "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: u
                    ? w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(ei, { size: "small", className: "mr-2" }),
                          "儲存中...",
                        ],
                      })
                    : w.jsxs(w.Fragment, {
                        children: [
                          w.jsx(yO, { size: 16, className: "mr-2" }),
                          "儲存設定",
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
        w.jsx(e4, { isOpen: g, onClose: () => y(!1), onAdd: L }),
        x &&
          F &&
          w.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4",
            children: w.jsx("div", {
              className: "bg-white rounded-lg shadow-xl max-w-md w-full",
              children: w.jsxs("div", {
                className: "p-6",
                children: [
                  w.jsxs("div", {
                    className: "flex items-center mb-4",
                    children: [
                      w.jsx(fc, { size: 24, className: "text-red-600 mr-3" }),
                      w.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "確認刪除設定",
                      }),
                    ],
                  }),
                  w.jsxs("p", {
                    className: "text-gray-600 mb-2",
                    children: ["您確定要刪除「", F.name, "」的溫濕度設定嗎？"],
                  }),
                  w.jsx("p", {
                    className: "text-sm text-red-600 mb-6",
                    children: "此操作無法復原，請謹慎操作。",
                  }),
                  w.jsxs("div", {
                    className: "flex items-center justify-end space-x-4",
                    children: [
                      w.jsx("button", {
                        onClick: () => S(!1),
                        disabled: m,
                        className:
                          "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                        children: "取消",
                      }),
                      w.jsx("button", {
                        onClick: T,
                        disabled: m,
                        className:
                          "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: m
                          ? w.jsxs(w.Fragment, {
                              children: [
                                w.jsx(ei, { size: "small", className: "mr-2" }),
                                "刪除中...",
                              ],
                            })
                          : w.jsxs(w.Fragment, {
                              children: [
                                w.jsx(fc, { size: 16, className: "mr-2" }),
                                "確認刪除",
                              ],
                            }),
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
  r4 = ({
    isOpen: e,
    onClose: t,
    latestData: r,
    globalThresholds: n,
    lastRefresh: i,
  }) => {
    const { t: a } = Ir();
    return (
      b.useEffect(() => {
        const o = (l) => {
          l.key === "Escape" && t();
        };
        return (
          e &&
            (document.addEventListener("keydown", o),
            (document.body.style.overflow = "hidden")),
          () => {
            (document.removeEventListener("keydown", o),
              (document.body.style.overflow = "unset"));
          }
        );
      }, [e, t]),
      e
        ? w.jsxs("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col",
            children: [
              w.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 bg-gray-900 text-white",
                children: [
                  w.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      w.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: a("tab.rules"),
                      }),
                      i &&
                        w.jsxs("span", {
                          className: "text-gray-300 text-sm",
                          children: [
                            a("last.updated"),
                            "：",
                            i.toLocaleTimeString("zh-TW"),
                          ],
                        }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      w.jsx(j2, {}),
                      w.jsx("button", {
                        onClick: t,
                        className:
                          "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                        title: "關閉專注顯示 (ESC)",
                        children: w.jsx(mp, { size: 24 }),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsx("div", {
                className: "flex-1 p-8 overflow-y-auto",
                children:
                  r.length === 0
                    ? w.jsx("div", {
                        className: "flex items-center justify-center h-full",
                        children: w.jsxs("div", {
                          className: "text-center text-white",
                          children: [
                            w.jsx("div", {
                              className: "text-6xl mb-4",
                              children: "📊",
                            }),
                            w.jsx("p", {
                              className: "text-xl",
                              children: "暫無即時數據",
                            }),
                          ],
                        }),
                      })
                    : w.jsx("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-screen-2xl mx-auto",
                        children: r.map((o) =>
                          w.jsx(
                            "div",
                            {
                              className: "transform scale-110",
                              children: w.jsx(Y1, {
                                record: o,
                                globalThresholds: n,
                              }),
                            },
                            o.GUID,
                          ),
                        ),
                      }),
              }),
              w.jsx("div", {
                className: "bg-gray-900 py-4 px-6",
                children: w.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    w.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "按 ESC 鍵或點擊右上角 ✕ 按鈕退出專注顯示模式",
                    }),
                    w.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        w.jsx("img", {
                          src: "/hs_logo.png",
                          alt: "鴻森智能科技",
                          className: "h-12 w-auto",
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("div", {
                              className: "text-lg font-medium text-white",
                              children: "鴻森智能科技股份有限公司",
                            }),
                            w.jsx("div", {
                              className: "text-white",
                              children:
                                "HONGSEN Intelligent Technology Co.,Ltd.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : null
    );
  },
  n4 = () => {
    const { t: e } = Ir(),
      [t, r] = b.useState([]),
      [n, i] = b.useState([]),
      [a, o] = b.useState([]),
      [l, s] = b.useState({
        temp_max: 25,
        temp_min: 15,
        humi_max: 70,
        humi_min: 40,
      }),
      [u, c] = b.useState([]),
      [f, d] = b.useState(!1),
      [p, h] = b.useState(!1),
      [g, y] = b.useState(null),
      [m, v] = b.useState(null),
      [x, S] = b.useState(!1),
      [P, E] = b.useState(!0),
      O = 5 * 60 * 1e3,
      k = 5 * 60 * 1e3,
      _ = "page_timestamp",
      j = 10 * 1e3;
    (b.useEffect(() => {
      (T(), F());
      const C = setInterval(T, O);
      return () => clearInterval(C);
    }, []),
      b.useEffect(() => {
        let C = null;
        const M = async () => {
            try {
              "wakeLock" in navigator &&
                document.visibilityState === "visible" &&
                ((C = await navigator.wakeLock.request("screen")),
                C.addEventListener("release", () => {
                  console.log("Wake Lock released");
                }));
            } catch (it) {
              console.error("Wake Lock error:", it);
            }
          },
          W = () => {
            document.dispatchEvent(new MouseEvent("mousemove"));
          },
          G = async () => {
            ((!C || C.released) && (await M()), W());
          },
          $ = async () => {
            document.visibilityState === "visible" &&
              (!C || C.released) &&
              (await M());
          },
          fe = Date.now();
        localStorage.setItem(_, fe.toString());
        const Le = setInterval(async () => {
            const it = localStorage.getItem(_);
            it &&
              Date.now() - parseInt(it) >= k &&
              (await G(), window.location.reload());
          }, 1e3),
          Ae = setInterval(async () => {
            await G();
          }, j);
        return (
          M(),
          document.addEventListener("visibilitychange", $),
          () => {
            (clearInterval(Le),
              clearInterval(Ae),
              document.removeEventListener("visibilitychange", $),
              C && !C.released && C.release());
          }
        );
      }, []));
    const T = async () => {
        (await Promise.all([L(), Y(), F()]), v(new Date()));
      },
      L = async () => {
        (d(!0), y(null), Ni.resetMuteStatus());
        try {
          const C = await OO();
          if (C.Code === 200) r(C.Data);
          else throw new Error(C.Result || "載入最新數據失敗");
        } catch (C) {
          (y(C instanceof Error ? C.message : "載入最新數據時發生錯誤"),
            console.error("Error loading latest temperature data:", C));
        } finally {
          d(!1);
        }
      },
      Y = async () => {
        h(!0);
        try {
          const C = await _O();
          if (C.Code === 200) i(C.Data);
          else throw new Error(C.Result || "載入圖表數據失敗");
        } catch (C) {
          let M = C instanceof Error ? C.message : String(C);
          (M.includes("Object reference not set to an instance of an object") &&
            (M = "載入圖表數據失敗：伺服器內部錯誤"),
            console.error("Error loading chart data:", M));
        } finally {
          h(!1);
        }
      },
      F = async () => {
        try {
          const C = await AO();
          if (C.Code === 200) {
            const M = C.Data;
            c(M);
            const W = jO(C);
            o(W);
            const G = TO(W);
            (s(G),
              console.log("Loaded temperature thresholds:", {
                allThresholds: W,
                globalThresholds: G,
              }));
          } else {
            console.warn("Failed to load thresholds, using defaults");
            const M = jf();
            (o([M]),
              s({
                temp_max: M.temp_max,
                temp_min: M.temp_min,
                humi_max: M.humidity_max,
                humi_min: M.humidity_min,
              }));
          }
        } catch (C) {
          console.error("Error loading temperature thresholds:", C);
          const M = jf();
          (o([M]),
            s({
              temp_max: M.temp_max,
              temp_min: M.temp_min,
              humi_max: M.humidity_max,
              humi_min: M.humidity_min,
            }));
        }
      },
      D = () => {
        T();
      },
      V = () => {
        F();
      },
      B = Array.from(new Set(n.map((C) => C.name)));
    return w.jsxs("div", {
      className: "mb-12",
      children: [
        w.jsxs("div", {
          className: "space-y-8",
          children: [
            g &&
              w.jsxs("div", {
                className:
                  "bg-red-50 border border-red-200 rounded-lg p-4 flex items-start",
                children: [
                  w.jsx(Cf, {
                    size: 20,
                    className: "text-red-600 mr-3 flex-shrink-0 mt-0.5",
                  }),
                  w.jsxs("div", {
                    children: [
                      w.jsx("h3", {
                        className: "font-medium text-red-800",
                        children: "載入數據時發生錯誤",
                      }),
                      w.jsx("p", {
                        className: "text-red-700 text-sm mt-1",
                        children: g,
                      }),
                    ],
                  }),
                ],
              }),
            w.jsxs("section", {
              children: [
                w.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    w.jsx("h3", {
                      className: "text-xl font-semibold text-gray-800",
                      children: e("realtime.overview"),
                    }),
                    w.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        w.jsx(j2, {}),
                        w.jsxs("button", {
                          onClick: () => S(!0),
                          className:
                            "flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors",
                          title: "警報設定",
                          children: [
                            w.jsx(K1, { size: 16, className: "mr-2" }),
                            "設定",
                          ],
                        }),
                        w.jsxs("button", {
                          onClick: () => E(!0),
                          className:
                            "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",
                          title: "專注顯示模式",
                          children: [
                            w.jsx(vO, { size: 16, className: "mr-2" }),
                            "專注顯示",
                          ],
                        }),
                        w.jsxs("button", {
                          onClick: D,
                          disabled: f || p,
                          className:
                            "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children: [
                            w.jsx(gO, {
                              size: 16,
                              className: `mr-2 ${f || p ? "animate-spin" : ""}`,
                            }),
                            "重新整理",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                f
                  ? w.jsxs("div", {
                      className:
                        "bg-white rounded-lg shadow-sm border p-12 flex items-center justify-center",
                      children: [
                        w.jsx(ei, { size: "large" }),
                        w.jsx("span", {
                          className: "ml-3 text-gray-500",
                          children: "載入即時數據中...",
                        }),
                      ],
                    })
                  : t.length === 0
                    ? w.jsx("div", {
                        className:
                          "bg-white rounded-lg shadow-sm border p-8 text-center",
                        children: w.jsx("p", {
                          className: "text-gray-500",
                          children: "暫無即時數據",
                        }),
                      })
                    : w.jsx("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: t.map((C) =>
                          w.jsx(Y1, { record: C, globalThresholds: l }, C.GUID),
                        ),
                      }),
              ],
            }),
            w.jsxs("section", {
              children: [
                w.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800 mb-4",
                  children: e("temp.humidity.trend.chart"),
                }),
                p
                  ? w.jsxs("div", {
                      className:
                        "bg-white rounded-lg shadow-sm border p-12 flex items-center justify-center",
                      children: [
                        w.jsx(ei, { size: "large" }),
                        w.jsx("span", {
                          className: "ml-3 text-gray-500",
                          children: "載入圖表數據中...",
                        }),
                      ],
                    })
                  : B.length === 0
                    ? w.jsx("div", {
                        className:
                          "bg-white rounded-lg shadow-sm border p-8 text-center",
                        children: w.jsx("p", {
                          className: "text-gray-500",
                          children: "暫無圖表數據",
                        }),
                      })
                    : w.jsx("div", {
                        className: "space-y-6",
                        children: B.map((C) =>
                          w.jsx(A2, { unitName: C, data: n }, C),
                        ),
                      }),
              ],
            }),
            w.jsx(t4, {
              isOpen: x,
              onClose: () => S(!1),
              allThresholds: a,
              globalThresholds: l,
              onSettingsUpdate: V,
            }),
          ],
        }),
        w.jsx(r4, {
          isOpen: P,
          onClose: () => E(!1),
          latestData: t,
          globalThresholds: l,
          lastRefresh: m,
        }),
      ],
    });
  },
  i4 = async (e) =>
    await mn("/api/session/login", { method: "POST", body: { Data: e } }),
  a4 = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  o4 = () => {
    (sessionStorage.removeItem("user_session"),
      sessionStorage.removeItem("loggedGUID"),
      sessionStorage.removeItem("loggedEmployer"),
      sessionStorage.removeItem("loggedID"),
      sessionStorage.removeItem("loggedName"),
      sessionStorage.removeItem("loggedPassword"),
      sessionStorage.removeItem("loggedTime"),
      sessionStorage.removeItem("loggedLevel"),
      window.location.reload());
  },
  T2 = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const r = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - r) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return (console.error("Failed to parse user session:", t), null);
    }
  },
  l4 = () => !!T2(),
  s4 = () => {
    const { t: e } = Ir();
    return w.jsxs("button", {
      onClick: o4,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [w.jsx(mO, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  u4 = () => {
    const { language: e, toggleLanguage: t } = Ir();
    return w.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        w.jsx(pO, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  c4 = () => {
    const { t: e } = Ir(),
      [t, r] = b.useState("rules");
    b.useState("create");
    const n = IO(),
      [i, a] = b.useState(qo(n.startDate)),
      [o, l] = b.useState(Xo(n.startDate)),
      [s, u] = b.useState(qo(n.endDate)),
      [c, f] = b.useState(Xo(n.endDate));
    b.useState([]);
    const [d, p] = b.useState([]),
      [h, g] = b.useState(!1),
      [y, m] = b.useState(null),
      [v, x] = b.useState(!1);
    (b.useState({ key: "CREATE_TIME", direction: "descending" }),
      b.useState({ searchField: "patientCode", searchValue: "" }));
    const S = T2(),
      P = S ? `${S.Name} - ${S.Employer}` : "鴻森智能科技 - 臨床藥事科";
    (b.useEffect(() => {
      if (t === "records") {
        const _ = LO();
        (a(qo(_.startDate)),
          l(Xo(_.startDate)),
          u(qo(_.endDate)),
          f(Xo(_.endDate)));
      }
    }, [t]),
      b.useEffect(() => {
        (async () => {
          try {
            (await H1(), t === "records" && (await E()));
          } catch (j) {
            m(
              "Failed to initialize: " +
                (j instanceof Error ? j.message : String(j)),
            );
          }
        })();
      }, [t]));
    const E = async () => {
        (g(!0), m(null));
        try {
          const _ = iv(i, o),
            j = iv(s, c),
            T = await V1(_, j);
          if (T.Code === 200) p(T.Data);
          else throw new Error(T.Result || "載入溫度數據失敗");
        } catch (_) {
          (m(_ instanceof Error ? _.message : "載入溫度數據時發生錯誤"), p([]));
        } finally {
          g(!1);
        }
      },
      O = async () => {
        (x(!0), m(null));
        try {
          await CO();
        } catch (_) {
          m(_ instanceof Error ? _.message : "匯出報表時發生錯誤");
        } finally {
          x(!1);
        }
      },
      k = () => {
        const _ = PO();
        _ != null &&
          _.homepage &&
          (window.location.href = `${_.homepage}/phar_system/frontpage/`);
      };
    return w.jsxs("div", {
      className: "min-h-screen flex flex-col bg-white",
      children: [
        w.jsx("main", {
          className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
          children: w.jsxs("div", {
            className: "max-w-screen-xl mx-auto",
            children: [
              w.jsx("header", {
                className: "h-[80px] mb-2",
                children: w.jsxs("div", {
                  className: "flex items-start justify-between",
                  children: [
                    w.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        w.jsxs("button", {
                          onClick: k,
                          className:
                            "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                          title: e("platform.title"),
                          children: [
                            w.jsx(hO, { size: 24 }),
                            w.jsx("span", {
                              className:
                                "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                              children: e("platform.title"),
                            }),
                          ],
                        }),
                        w.jsxs("div", {
                          children: [
                            w.jsx("h1", {
                              className:
                                "text-2xl md:text-3xl font-semibold text-gray-800",
                              children: e("app.title"),
                            }),
                            w.jsx("p", {
                              className: "text-gray-600 text-sm",
                              children: P,
                            }),
                          ],
                        }),
                      ],
                    }),
                    w.jsxs("div", {
                      className: "flex items-center space-x-4",
                      children: [w.jsx(u4, {}), w.jsx(s4, {})],
                    }),
                  ],
                }),
              }),
              w.jsx("div", {
                className: "h-[40px] mb-4",
                children: w.jsx("div", {
                  className: "border-b border-gray-200",
                  children: w.jsxs("nav", {
                    className: "-mb-px flex space-x-8",
                    children: [
                      w.jsx("button", {
                        onClick: () => r("rules"),
                        className: `py-2 px-1 border-b-2 text-base font-medium uppercase tracking-wider ${t === "rules" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"}`,
                        children: e("tab.rules"),
                      }),
                      w.jsx("button", {
                        onClick: () => r("records"),
                        className: `py-2 px-1 border-b-2 text-base font-medium uppercase tracking-wider ${t === "records" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"}`,
                        children: e("tab.records"),
                      }),
                    ],
                  }),
                }),
              }),
              t === "rules"
                ? w.jsx(n4, {})
                : w.jsxs(w.Fragment, {
                    children: [
                      w.jsx("div", {
                        className:
                          "bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6",
                        children: w.jsx(sO, {
                          startDate: i,
                          startTime: o,
                          endDate: s,
                          endTime: c,
                          onStartDateChange: a,
                          onStartTimeChange: l,
                          onEndDateChange: u,
                          onEndTimeChange: f,
                        }),
                      }),
                      w.jsx("div", {
                        className:
                          "h-[52px] mb-4 flex items-center justify-between",
                        children: w.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            d.length > 0 &&
                              w.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  w.jsx("h2", {
                                    className:
                                      "text-xl font-bold text-gray-800",
                                    children: e("temp.humidity.trend.chart"),
                                  }),
                                  w.jsxs("span", {
                                    className:
                                      "ml-3 text-sm text-gray-500 font-medium",
                                    children: [
                                      "(",
                                      d.length,
                                      " ",
                                      e("records.count"),
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                            w.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                w.jsxs("button", {
                                  onClick: E,
                                  disabled: h,
                                  className:
                                    "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center",
                                  children: [
                                    h
                                      ? w.jsx("div", {
                                          className:
                                            "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",
                                        })
                                      : null,
                                    e("search.button"),
                                    " ",
                                    e("temp.humidity.trend"),
                                  ],
                                }),
                                w.jsxs("button", {
                                  onClick: O,
                                  disabled: v,
                                  className:
                                    "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                                  children: [
                                    v
                                      ? w.jsx("div", {
                                          className:
                                            "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",
                                        })
                                      : null,
                                    e("export.button"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      y &&
                        w.jsx("div", {
                          className:
                            "bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start",
                          children: w.jsxs("div", {
                            children: [
                              w.jsx("h3", {
                                className: "font-medium text-red-800",
                                children: e("error.loading"),
                              }),
                              w.jsx("p", {
                                className: "text-red-700 text-sm mt-1",
                                children: y,
                              }),
                            ],
                          }),
                        }),
                      h && !y
                        ? w.jsxs("div", {
                            className:
                              "bg-white rounded-lg shadow-sm border p-12 flex items-center justify-center",
                            children: [
                              w.jsx(ei, { size: "large" }),
                              w.jsxs("span", {
                                className: "ml-3 text-gray-500",
                                children: [
                                  e("loading"),
                                  " ",
                                  e("temp.humidity.trend"),
                                  "...",
                                ],
                              }),
                            ],
                          })
                        : w.jsx(w.Fragment, {
                            children:
                              d.length === 0
                                ? w.jsx("div", {
                                    className:
                                      "bg-white rounded-lg shadow-sm border p-8 text-center mb-12",
                                    children: w.jsx("p", {
                                      className: "text-gray-500",
                                      children: e("table.noRecords"),
                                    }),
                                  })
                                : w.jsx("div", {
                                    className: "space-y-6 mb-12",
                                    children: Array.from(
                                      new Set(d.map((_) => _.name)),
                                    ).map((_) =>
                                      w.jsx(A2, { unitName: _, data: d }, _),
                                    ),
                                  }),
                          }),
                    ],
                  }),
            ],
          }),
        }),
        w.jsx("footer", {
          className:
            "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
          children: e("copyright"),
        }),
      ],
    });
  },
  f4 = ({ onLogin: e }) => {
    const { t } = Ir(),
      [r, n] = b.useState(""),
      [i, a] = b.useState(""),
      [o, l] = b.useState(null),
      [s, u] = b.useState(!1),
      c = async (f) => {
        (f.preventDefault(), l(null), u(!0));
        try {
          const d = await i4({ ID: r, Password: i });
          d.Code === 200
            ? (a4(d.Data), e())
            : d.Code === -1 || d.Code === -2
              ? l(d.Result)
              : l(t("error.api"));
        } catch (d) {
          (console.error("Login error:", d),
            l(d instanceof Error ? d.message : t("error.api")));
        } finally {
          u(!1);
        }
      };
    return w.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: w.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          w.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          o &&
            w.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                w.jsx(hp, { size: 20 }),
                w.jsx("span", { children: o }),
              ],
            }),
          w.jsxs("form", {
            onSubmit: c,
            className: "space-y-6",
            children: [
              w.jsxs("div", {
                children: [
                  w.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  w.jsx("input", {
                    type: "text",
                    id: "id",
                    value: r,
                    onChange: (f) => n(f.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              w.jsxs("div", {
                children: [
                  w.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  w.jsx("input", {
                    type: "password",
                    id: "password",
                    value: i,
                    onChange: (f) => a(f.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              w.jsx("button", {
                type: "submit",
                disabled: s,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${s ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                children: s
                  ? w.jsxs(w.Fragment, {
                      children: [
                        w.jsx(ei, { size: "small\\", className: "mr-2" }),
                        "登入中...",
                      ],
                    })
                  : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  };
function d4() {
  const [e, t] = b.useState(!1),
    [r, n] = b.useState(!1),
    [i, a] = b.useState(!0);
  b.useEffect(() => {
    (async () => {
      try {
        (await H1(), t(!0));
        const s = l4();
        (n(s),
          console.log("Authentication check:", {
            authenticated: s,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          }));
      } catch (s) {
        console.error("Failed to load configuration:", s);
      } finally {
        a(!1);
      }
    })();
  }, []);
  const o = () => {
    n(!0);
  };
  return !e || i
    ? w.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: w.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : w.jsx(lO, { children: r ? w.jsx(c4, {}) : w.jsx(f4, { onLogin: o }) });
}
U1(document.getElementById("root")).render(
  w.jsx(b.StrictMode, { children: w.jsx(d4, {}) }),
);
