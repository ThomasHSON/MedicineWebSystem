var sf = Object.defineProperty;
var af = (e, t, n) =>
  t in e
    ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var as = (e, t, n) => af(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Fa = { exports: {} },
  Ei = {},
  Ma = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pr = Symbol.for("react.element"),
  uf = Symbol.for("react.portal"),
  cf = Symbol.for("react.fragment"),
  ff = Symbol.for("react.strict_mode"),
  df = Symbol.for("react.profiler"),
  pf = Symbol.for("react.provider"),
  hf = Symbol.for("react.context"),
  gf = Symbol.for("react.forward_ref"),
  mf = Symbol.for("react.suspense"),
  yf = Symbol.for("react.memo"),
  vf = Symbol.for("react.lazy"),
  us = Symbol.iterator;
function wf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (us && e[us]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Aa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ua = Object.assign,
  Va = {};
function vn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Va),
    (this.updater = n || Aa));
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ba() {}
Ba.prototype = vn.prototype;
function hl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Va),
    (this.updater = n || Aa));
}
var gl = (hl.prototype = new Ba());
gl.constructor = hl;
Ua(gl, vn.prototype);
gl.isPureReactComponent = !0;
var cs = Array.isArray,
  Ha = Object.prototype.hasOwnProperty,
  ml = { current: null },
  Ka = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wa(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ha.call(t, r) && !Ka.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: pr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: ml.current,
  };
}
function xf(e, t) {
  return {
    $$typeof: pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function Sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fs = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sf("" + e.key)
    : t.toString(36);
}
function Mr(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case uf:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Bi(l, 0) : r),
      cs(i)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          Mr(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (yl(i) &&
            (i = xf(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(fs, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), cs(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Bi(o, s);
      l += Mr(o, t, n, a, i);
    }
  else if (((a = wf(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      ((o = o.value), (a = r + Bi(o, s++)), (l += Mr(o, t, n, a, i)));
  else if (o === "object")
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
  return l;
}
function xr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Mr(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function kf(e) {
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
var fe = { current: null },
  Ar = { transition: null },
  Nf = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Ar,
    ReactCurrentOwner: ml,
  };
function Qa() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: xr,
  forEach: function (e, t, n) {
    xr(
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
      xr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = vn;
D.Fragment = cf;
D.Profiler = df;
D.PureComponent = hl;
D.StrictMode = ff;
D.Suspense = mf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
D.act = Qa;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ua({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = ml.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ha.call(t, a) &&
        !Ka.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: pr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: hf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pf, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Wa;
D.createFactory = function (e) {
  var t = Wa.bind(null, e);
  return ((t.type = e), t);
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: gf, render: e };
};
D.isValidElement = yl;
D.lazy = function (e) {
  return { $$typeof: vf, _payload: { _status: -1, _result: e }, _init: kf };
};
D.memo = function (e, t) {
  return { $$typeof: yf, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Ar.transition;
  Ar.transition = {};
  try {
    e();
  } finally {
    Ar.transition = t;
  }
};
D.unstable_act = Qa;
D.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return fe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
D.useId = function () {
  return fe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return fe.current.useRef(e);
};
D.useState = function (e) {
  return fe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return fe.current.useTransition();
};
D.version = "18.3.1";
Ma.exports = D;
var z = Ma.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ef = z,
  Cf = Symbol.for("react.element"),
  Lf = Symbol.for("react.fragment"),
  Pf = Object.prototype.hasOwnProperty,
  Rf = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ya(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref));
  for (r in t) Pf.call(t, r) && !Of.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Cf,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Rf.current,
  };
}
Ei.Fragment = Lf;
Ei.jsx = Ya;
Ei.jsxs = Ya;
Fa.exports = Ei;
var w = Fa.exports,
  Ga = { exports: {} },
  ke = {},
  Ja = { exports: {} },
  Xa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, O) {
    var T = C.length;
    C.push(O);
    e: for (; 0 < T; ) {
      var U = (T - 1) >>> 1,
        Z = C[U];
      if (0 < i(Z, O)) ((C[U] = O), (C[T] = Z), (T = U));
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var O = C[0],
      T = C.pop();
    if (T !== O) {
      C[0] = T;
      e: for (var U = 0, Z = C.length, vr = Z >>> 1; U < vr; ) {
        var Et = 2 * (U + 1) - 1,
          Vi = C[Et],
          Ct = Et + 1,
          wr = C[Ct];
        if (0 > i(Vi, T))
          Ct < Z && 0 > i(wr, Vi)
            ? ((C[U] = wr), (C[Ct] = T), (U = Ct))
            : ((C[U] = Vi), (C[Et] = T), (U = Et));
        else if (Ct < Z && 0 > i(wr, T)) ((C[U] = wr), (C[Ct] = T), (U = Ct));
        else break e;
      }
    }
    return O;
  }
  function i(C, O) {
    var T = C.sortIndex - O.sortIndex;
    return T !== 0 ? T : C.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    g = null,
    f = 3,
    y = !1,
    v = !1,
    x = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= C)
        (r(u), (O.sortIndex = O.expirationTime), t(a, O));
      else break;
      O = n(u);
    }
  }
  function m(C) {
    if (((x = !1), p(C), !v))
      if (n(a) !== null) ((v = !0), tt(k));
      else {
        var O = n(u);
        O !== null && Bt(m, O.startTime - C);
      }
  }
  function k(C, O) {
    ((v = !1), x && ((x = !1), h(P), (P = -1)), (y = !0));
    var T = f;
    try {
      for (
        p(O), g = n(a);
        g !== null && (!(g.expirationTime > O) || (C && !ee()));
      ) {
        var U = g.callback;
        if (typeof U == "function") {
          ((g.callback = null), (f = g.priorityLevel));
          var Z = U(g.expirationTime <= O);
          ((O = e.unstable_now()),
            typeof Z == "function" ? (g.callback = Z) : g === n(a) && r(a),
            p(O));
        } else r(a);
        g = n(a);
      }
      if (g !== null) var vr = !0;
      else {
        var Et = n(u);
        (Et !== null && Bt(m, Et.startTime - O), (vr = !1));
      }
      return vr;
    } finally {
      ((g = null), (f = T), (y = !1));
    }
  }
  var E = !1,
    N = null,
    P = -1,
    B = 5,
    j = -1;
  function ee() {
    return !(e.unstable_now() - j < B);
  }
  function Vt() {
    if (N !== null) {
      var C = e.unstable_now();
      j = C;
      var O = !0;
      try {
        O = N(!0, C);
      } finally {
        O ? kt() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var kt;
  if (typeof c == "function")
    kt = function () {
      c(Vt);
    };
  else if (typeof MessageChannel < "u") {
    var et = new MessageChannel(),
      Nt = et.port2;
    ((et.port1.onmessage = Vt),
      (kt = function () {
        Nt.postMessage(null);
      }));
  } else
    kt = function () {
      R(Vt, 0);
    };
  function tt(C) {
    ((N = C), E || ((E = !0), kt()));
  }
  function Bt(C, O) {
    P = R(function () {
      C(e.unstable_now());
    }, O);
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
      v || y || ((v = !0), tt(k));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var T = f;
      f = O;
      try {
        return C();
      } finally {
        f = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, O) {
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
      var T = f;
      f = C;
      try {
        return O();
      } finally {
        f = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, O, T) {
      var U = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? U + T : U))
          : (T = U),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (C = {
          id: d++,
          callback: O,
          priorityLevel: C,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > U
          ? ((C.sortIndex = T),
            t(u, C),
            n(a) === null &&
              C === n(u) &&
              (x ? (h(P), (P = -1)) : (x = !0), Bt(m, T - U)))
          : ((C.sortIndex = Z), t(a, C), v || y || ((v = !0), tt(k))),
        C
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (C) {
      var O = f;
      return function () {
        var T = f;
        f = O;
        try {
          return C.apply(this, arguments);
        } finally {
          f = T;
        }
      };
    }));
})(Xa);
Ja.exports = Xa;
var _f = Ja.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf = z,
  Se = _f;
function S(e) {
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
var Za = new Set(),
  Gn = {};
function At(e, t) {
  (fn(e, t), fn(e + "Capture", t));
}
function fn(e, t) {
  for (Gn[e] = t, e = 0; e < t.length; e++) Za.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wo = Object.prototype.hasOwnProperty,
  jf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ds = {},
  ps = {};
function Df(e) {
  return wo.call(ps, e)
    ? !0
    : wo.call(ds, e)
      ? !1
      : jf.test(e)
        ? (ps[e] = !0)
        : ((ds[e] = !0), !1);
}
function If(e, t, n, r) {
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
function zf(e, t, n, r) {
  if (t === null || typeof t > "u" || If(e, t, n, r)) return !0;
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
function de(e, t, n, r, i, o, l) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l));
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vl = /[\-:]([a-z])/g;
function wl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vl, wl);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vl, wl);
    re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vl, wl);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xl(e, t, n, r) {
  var i = re.hasOwnProperty(t) ? re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zf(t, n, i, r) && (n = null),
    r || i === null
      ? Df(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qe = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  Qt = Symbol.for("react.portal"),
  Yt = Symbol.for("react.fragment"),
  Sl = Symbol.for("react.strict_mode"),
  xo = Symbol.for("react.profiler"),
  ba = Symbol.for("react.provider"),
  qa = Symbol.for("react.context"),
  kl = Symbol.for("react.forward_ref"),
  So = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  Nl = Symbol.for("react.memo"),
  rt = Symbol.for("react.lazy"),
  eu = Symbol.for("react.offscreen"),
  hs = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hs && e[hs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Hi;
function In(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Ki = !1;
function Wi(e, t) {
  if (!e || Ki) return "";
  Ki = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];
      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    ((Ki = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function $f(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Wi(e.type, !1)), e);
    case 11:
      return ((e = Wi(e.type.render, !1)), e);
    case 1:
      return ((e = Wi(e.type, !0)), e);
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Qt:
      return "Portal";
    case xo:
      return "Profiler";
    case Sl:
      return "StrictMode";
    case So:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qa:
        return (e.displayName || "Context") + ".Consumer";
      case ba:
        return (e._context.displayName || "Context") + ".Provider";
      case kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Nl:
        return (
          (t = e.displayName || null),
          t !== null ? t : No(e.type) || "Memo"
        );
      case rt:
        ((t = e._payload), (e = e._init));
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Ff(e) {
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
      return No(t);
    case 8:
      return t === Sl ? "StrictMode" : "Mode";
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
function yt(e) {
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
function tu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mf(e) {
  var t = tu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          ((r = "" + l), o.call(this, l));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = Mf(e));
}
function nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = tu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Eo(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ru(e, t) {
  ((t = t.checked), t != null && xl(e, "checked", t, !1));
}
function Co(e, t) {
  ru(e, t);
  var n = yt(t.value),
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
    ? Lo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Lo(e, t.type, yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ms(e, t, n) {
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
function Lo(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + yt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: yt(n) };
}
function iu(e, t) {
  var n = yt(t.value),
    r = yt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function vs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ou(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ou(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Nr,
  lu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Nr = Nr || document.createElement("div"),
          Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Nr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mn = {
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
  Af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mn).forEach(function (e) {
  Af.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
  });
});
function su(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
      ? ("" + t).trim()
      : t + "px";
}
function au(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = su(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Uf = W(
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
function Oo(e, t) {
  if (t) {
    if (Uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function _o(e, t) {
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
var To = null;
function El(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jo = null,
  ln = null,
  sn = null;
function ws(e) {
  if ((e = mr(e))) {
    if (typeof jo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Oi(t)), jo(e.stateNode, e.type, t));
  }
}
function uu(e) {
  ln ? (sn ? sn.push(e) : (sn = [e])) : (ln = e);
}
function cu() {
  if (ln) {
    var e = ln,
      t = sn;
    if (((sn = ln = null), ws(e), t)) for (e = 0; e < t.length; e++) ws(t[e]);
  }
}
function fu(e, t) {
  return e(t);
}
function du() {}
var Qi = !1;
function pu(e, t, n) {
  if (Qi) return e(t, n);
  Qi = !0;
  try {
    return fu(e, t, n);
  } finally {
    ((Qi = !1), (ln !== null || sn !== null) && (du(), cu()));
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oi(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Do = !1;
if (Je)
  try {
    var En = {};
    (Object.defineProperty(En, "passive", {
      get: function () {
        Do = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En));
  } catch {
    Do = !1;
  }
function Vf(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var An = !1,
  Zr = null,
  br = !1,
  Io = null,
  Bf = {
    onError: function (e) {
      ((An = !0), (Zr = e));
    },
  };
function Hf(e, t, n, r, i, o, l, s, a) {
  ((An = !1), (Zr = null), Vf.apply(Bf, arguments));
}
function Kf(e, t, n, r, i, o, l, s, a) {
  if ((Hf.apply(this, arguments), An)) {
    if (An) {
      var u = Zr;
      ((An = !1), (Zr = null));
    } else throw Error(S(198));
    br || ((br = !0), (Io = u));
  }
}
function Ut(e) {
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
function hu(e) {
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
function xs(e) {
  if (Ut(e) !== e) throw Error(S(188));
}
function Wf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (xs(i), e);
        if (o === r) return (xs(i), t);
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          ((l = !0), (n = i), (r = o));
          break;
        }
        if (s === r) {
          ((l = !0), (r = i), (n = o));
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            ((l = !0), (n = o), (r = i));
            break;
          }
          if (s === r) {
            ((l = !0), (r = o), (n = i));
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function gu(e) {
  return ((e = Wf(e)), e !== null ? mu(e) : null);
}
function mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yu = Se.unstable_scheduleCallback,
  Ss = Se.unstable_cancelCallback,
  Qf = Se.unstable_shouldYield,
  Yf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Gf = Se.unstable_getCurrentPriorityLevel,
  Cl = Se.unstable_ImmediatePriority,
  vu = Se.unstable_UserBlockingPriority,
  qr = Se.unstable_NormalPriority,
  Jf = Se.unstable_LowPriority,
  wu = Se.unstable_IdlePriority,
  Ci = null,
  Ve = null;
function Xf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : qf,
  Zf = Math.log,
  bf = Math.LN2;
function qf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zf(e) / bf) | 0)) | 0);
}
var Er = 64,
  Cr = 4194304;
function $n(e) {
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
function ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = $n(s)) : ((o &= l), o !== 0 && (r = $n(o)));
  } else ((l = n & ~i), l !== 0 ? (r = $n(l)) : o !== 0 && (r = $n(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ie(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function ed(e, t) {
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
function td(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var l = 31 - Ie(o),
      s = 1 << l,
      a = i[l];
    (a === -1
      ? (!(s & n) || s & r) && (i[l] = ed(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s));
  }
}
function zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xu() {
  var e = Er;
  return ((Er <<= 1), !(Er & 4194240) && (Er = 64), e);
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n));
}
function nd(e, t) {
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
    var i = 31 - Ie(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Ll(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var $ = 0;
function Su(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ku,
  Pl,
  Nu,
  Eu,
  Cu,
  $o = !1,
  Lr = [],
  ut = null,
  ct = null,
  ft = null,
  Zn = new Map(),
  bn = new Map(),
  ot = [],
  rd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ks(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bn.delete(t.pointerId);
  }
}
function Cn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = mr(t)), t !== null && Pl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function id(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((ut = Cn(ut, e, t, n, r, i)), !0);
    case "dragenter":
      return ((ct = Cn(ct, e, t, n, r, i)), !0);
    case "mouseover":
      return ((ft = Cn(ft, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (Zn.set(o, Cn(Zn.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        bn.set(o, Cn(bn.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Lu(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hu(n)), t !== null)) {
          ((e.blockedOn = t),
            Cu(e.priority, function () {
              Nu(n);
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
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((To = r), n.target.dispatchEvent(r), (To = null));
    } else return ((t = mr(n)), t !== null && Pl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  Ur(e) && n.delete(t);
}
function od() {
  (($o = !1),
    ut !== null && Ur(ut) && (ut = null),
    ct !== null && Ur(ct) && (ct = null),
    ft !== null && Ur(ft) && (ft = null),
    Zn.forEach(Ns),
    bn.forEach(Ns));
}
function Ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $o ||
      (($o = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, od)));
}
function qn(e) {
  function t(i) {
    return Ln(i, e);
  }
  if (0 < Lr.length) {
    Ln(Lr[0], e);
    for (var n = 1; n < Lr.length; n++) {
      var r = Lr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && Ln(ut, e),
      ct !== null && Ln(ct, e),
      ft !== null && Ln(ft, e),
      Zn.forEach(t),
      bn.forEach(t),
      n = 0;
    n < ot.length;
    n++
  )
    ((r = ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < ot.length && ((n = ot[0]), n.blockedOn === null); )
    (Lu(n), n.blockedOn === null && ot.shift());
}
var an = qe.ReactCurrentBatchConfig,
  ti = !0;
function ld(e, t, n, r) {
  var i = $,
    o = an.transition;
  an.transition = null;
  try {
    (($ = 1), Rl(e, t, n, r));
  } finally {
    (($ = i), (an.transition = o));
  }
}
function sd(e, t, n, r) {
  var i = $,
    o = an.transition;
  an.transition = null;
  try {
    (($ = 4), Rl(e, t, n, r));
  } finally {
    (($ = i), (an.transition = o));
  }
}
function Rl(e, t, n, r) {
  if (ti) {
    var i = Fo(e, t, n, r);
    if (i === null) (ro(e, t, r, ni, n), ks(e, r));
    else if (id(i, e, t, n, r)) r.stopPropagation();
    else if ((ks(e, r), t & 4 && -1 < rd.indexOf(e))) {
      for (; i !== null; ) {
        var o = mr(i);
        if (
          (o !== null && ku(o),
          (o = Fo(e, t, n, r)),
          o === null && ro(e, t, r, ni, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var ni = null;
function Fo(e, t, n, r) {
  if (((ni = null), (e = El(r)), (e = Rt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ni = e), null);
}
function Pu(e) {
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
      switch (Gf()) {
        case Cl:
          return 1;
        case vu:
          return 4;
        case qr:
        case Jf:
          return 16;
        case wu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  Ol = null,
  Vr = null;
function Ru() {
  if (Vr) return Vr;
  var e,
    t = Ol,
    n = t.length,
    r,
    i = "value" in st ? st.value : st.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Vr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function Es() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, o, l) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pr
        : Es),
      (this.isPropagationStopped = Es),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _l = Ne(wn),
  gr = W({}, wn, { view: 0, detail: 0 }),
  ad = Ne(gr),
  Gi,
  Ji,
  Pn,
  Li = W({}, gr, {
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
    getModifierState: Tl,
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
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((Gi = e.screenX - Pn.screenX), (Ji = e.screenY - Pn.screenY))
              : (Ji = Gi = 0),
            (Pn = e)),
          Gi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ji;
    },
  }),
  Cs = Ne(Li),
  ud = W({}, Li, { dataTransfer: 0 }),
  cd = Ne(ud),
  fd = W({}, gr, { relatedTarget: 0 }),
  Xi = Ne(fd),
  dd = W({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pd = Ne(dd),
  hd = W({}, wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gd = Ne(hd),
  md = W({}, wn, { data: 0 }),
  Ls = Ne(md),
  yd = {
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
  vd = {
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
  wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wd[e]) ? !!t[e] : !1;
}
function Tl() {
  return xd;
}
var Sd = W({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = yd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? vd[e.keyCode] || "Unidentified"
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
    getModifierState: Tl,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  kd = Ne(Sd),
  Nd = W({}, Li, {
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
  Ps = Ne(Nd),
  Ed = W({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tl,
  }),
  Cd = Ne(Ed),
  Ld = W({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pd = Ne(Ld),
  Rd = W({}, Li, {
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
  Od = Ne(Rd),
  _d = [9, 13, 27, 32],
  jl = Je && "CompositionEvent" in window,
  Un = null;
Je && "documentMode" in document && (Un = document.documentMode);
var Td = Je && "TextEvent" in window && !Un,
  Ou = Je && (!jl || (Un && 8 < Un && 11 >= Un)),
  Rs = " ",
  Os = !1;
function _u(e, t) {
  switch (e) {
    case "keyup":
      return _d.indexOf(t.keyCode) !== -1;
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
function Tu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Gt = !1;
function jd(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Os = !0), Rs);
    case "textInput":
      return ((e = t.data), e === Rs && Os ? null : e);
    default:
      return null;
  }
}
function Dd(e, t) {
  if (Gt)
    return e === "compositionend" || (!jl && _u(e, t))
      ? ((e = Ru()), (Vr = Ol = st = null), (Gt = !1), e)
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
      return Ou && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Id = {
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
  return t === "input" ? !!Id[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  (uu(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new _l("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Vn = null,
  er = null;
function zd(e) {
  Hu(e, 0);
}
function Pi(e) {
  var t = Zt(e);
  if (nu(t)) return e;
}
function $d(e, t) {
  if (e === "change") return t;
}
var Du = !1;
if (Je) {
  var Zi;
  if (Je) {
    var bi = "oninput" in document;
    if (!bi) {
      var Ts = document.createElement("div");
      (Ts.setAttribute("oninput", "return;"),
        (bi = typeof Ts.oninput == "function"));
    }
    Zi = bi;
  } else Zi = !1;
  Du = Zi && (!document.documentMode || 9 < document.documentMode);
}
function js() {
  Vn && (Vn.detachEvent("onpropertychange", Iu), (er = Vn = null));
}
function Iu(e) {
  if (e.propertyName === "value" && Pi(er)) {
    var t = [];
    (ju(t, er, e, El(e)), pu(zd, t));
  }
}
function Fd(e, t, n) {
  e === "focusin"
    ? (js(), (Vn = t), (er = n), Vn.attachEvent("onpropertychange", Iu))
    : e === "focusout" && js();
}
function Md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(er);
}
function Ad(e, t) {
  if (e === "click") return Pi(t);
}
function Ud(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function Vd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : Vd;
function tr(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wo.call(t, i) || !$e(e[i], t[i])) return !1;
  }
  return !0;
}
function Ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Is(e, t) {
  var n = Ds(e);
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
    n = Ds(n);
  }
}
function zu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? zu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function $u() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function Dl(e) {
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
function Bd(e) {
  var t = $u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Dl(n)) {
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
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Is(n, o)));
        var l = Is(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Hd = Je && "documentMode" in document && 11 >= document.documentMode,
  Jt = null,
  Mo = null,
  Bn = null,
  Ao = !1;
function zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Jt == null ||
    Jt !== Xr(r) ||
    ((r = Jt),
    "selectionStart" in r && Dl(r)
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
    (Bn && tr(Bn, r)) ||
      ((Bn = r),
      (r = ri(Mo, "onSelect")),
      0 < r.length &&
        ((t = new _l("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  qi = {},
  Fu = {};
Je &&
  ((Fu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function Ri(e) {
  if (qi[e]) return qi[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fu) return (qi[e] = t[n]);
  return e;
}
var Mu = Ri("animationend"),
  Au = Ri("animationiteration"),
  Uu = Ri("animationstart"),
  Vu = Ri("transitionend"),
  Bu = new Map(),
  $s =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function wt(e, t) {
  (Bu.set(e, t), At(t, [e]));
}
for (var eo = 0; eo < $s.length; eo++) {
  var to = $s[eo],
    Kd = to.toLowerCase(),
    Wd = to[0].toUpperCase() + to.slice(1);
  wt(Kd, "on" + Wd);
}
wt(Mu, "onAnimationEnd");
wt(Au, "onAnimationIteration");
wt(Uu, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(Vu, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
At(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
At(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Fs(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Kf(r, t, void 0, e), (e.currentTarget = null));
}
function Hu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          (Fs(i, s, u), (o = a));
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          (Fs(i, s, u), (o = a));
        }
    }
  }
  if (br) throw ((e = Io), (br = !1), (Io = null), e);
}
function M(e, t) {
  var n = t[Ko];
  n === void 0 && (n = t[Ko] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ku(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ku(n, e, r, t));
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function nr(e) {
  if (!e[Or]) {
    ((e[Or] = !0),
      Za.forEach(function (n) {
        n !== "selectionchange" && (Qd.has(n) || no(n, !1, e), no(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), no("selectionchange", !1, t));
  }
}
function Ku(e, t, n, r) {
  switch (Pu(t)) {
    case 1:
      var i = ld;
      break;
    case 4:
      i = sd;
      break;
    default:
      i = Rl;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Do ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function ro(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Rt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  pu(function () {
    var u = o,
      d = El(n),
      g = [];
    e: {
      var f = Bu.get(e);
      if (f !== void 0) {
        var y = _l,
          v = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = kd;
            break;
          case "focusin":
            ((v = "focus"), (y = Xi));
            break;
          case "focusout":
            ((v = "blur"), (y = Xi));
            break;
          case "beforeblur":
          case "afterblur":
            y = Xi;
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
            y = Cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Cd;
            break;
          case Mu:
          case Au:
          case Uu:
            y = pd;
            break;
          case Vu:
            y = Pd;
            break;
          case "scroll":
            y = ad;
            break;
          case "wheel":
            y = Od;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = gd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ps;
        }
        var x = (t & 4) !== 0,
          R = !x && e === "scroll",
          h = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var m = p.stateNode;
          if (
            (p.tag === 5 &&
              m !== null &&
              ((p = m),
              h !== null && ((m = Xn(c, h)), m != null && x.push(rr(c, m, p)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((f = new y(f, v, null, n, d)), g.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== To &&
            (v = n.relatedTarget || n.fromElement) &&
            (Rt(v) || v[Xe]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Rt(v) : null),
              v !== null &&
                ((R = Ut(v)), v !== R || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = Cs),
            (m = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ps),
              (m = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (R = y == null ? f : Zt(y)),
            (p = v == null ? f : Zt(v)),
            (f = new x(m, c + "leave", y, n, d)),
            (f.target = R),
            (f.relatedTarget = p),
            (m = null),
            Rt(d) === u &&
              ((x = new x(h, c + "enter", v, n, d)),
              (x.target = p),
              (x.relatedTarget = R),
              (m = x)),
            (R = m),
            y && v)
          )
            t: {
              for (x = y, h = v, c = 0, p = x; p; p = Ht(p)) c++;
              for (p = 0, m = h; m; m = Ht(m)) p++;
              for (; 0 < c - p; ) ((x = Ht(x)), c--);
              for (; 0 < p - c; ) ((h = Ht(h)), p--);
              for (; c--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                ((x = Ht(x)), (h = Ht(h)));
              }
              x = null;
            }
          else x = null;
          (y !== null && Ms(g, f, y, x, !1),
            v !== null && R !== null && Ms(g, R, v, x, !0));
        }
      }
      e: {
        if (
          ((f = u ? Zt(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var k = $d;
        else if (_s(f))
          if (Du) k = Ud;
          else {
            k = Md;
            var E = Fd;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = Ad);
        if (k && (k = k(e, u))) {
          ju(g, k, n, d);
          break e;
        }
        (E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Lo(f, "number", f.value));
      }
      switch (((E = u ? Zt(u) : window), e)) {
        case "focusin":
          (_s(E) || E.contentEditable === "true") &&
            ((Jt = E), (Mo = u), (Bn = null));
          break;
        case "focusout":
          Bn = Mo = Jt = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ao = !1), zs(g, n, d));
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          zs(g, n, d);
      }
      var N;
      if (jl)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Gt
          ? _u(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (Ou &&
          n.locale !== "ko" &&
          (Gt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Gt && (N = Ru())
            : ((st = d),
              (Ol = "value" in st ? st.value : st.textContent),
              (Gt = !0))),
        (E = ri(u, P)),
        0 < E.length &&
          ((P = new Ls(P, e, null, n, d)),
          g.push({ event: P, listeners: E }),
          N ? (P.data = N) : ((N = Tu(n)), N !== null && (P.data = N)))),
        (N = Td ? jd(e, n) : Dd(e, n)) &&
          ((u = ri(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ls("onBeforeInput", "beforeinput", null, n, d)),
            g.push({ event: d, listeners: u }),
            (d.data = N))));
    }
    Hu(g, t);
  });
}
function rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Xn(e, n)),
      o != null && r.unshift(rr(e, o, i)),
      (o = Xn(e, t)),
      o != null && r.push(rr(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ms(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    (s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = Xn(n, o)), a != null && l.unshift(rr(n, a, s)))
        : i || ((a = Xn(n, o)), a != null && l.push(rr(n, a, s)))),
      (n = n.return));
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Yd = /\r\n?/g,
  Gd = /\u0000|\uFFFD/g;
function As(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yd,
      `
`,
    )
    .replace(Gd, "");
}
function _r(e, t, n) {
  if (((t = As(t)), As(e) !== t && n)) throw Error(S(425));
}
function ii() {}
var Uo = null,
  Vo = null;
function Bo(e, t) {
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
  Jd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Us = typeof Promise == "function" ? Promise : void 0,
  Xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Us < "u"
        ? function (e) {
            return Us.resolve(null).then(e).catch(Zd);
          }
        : Ho;
function Zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function io(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), qn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  qn(t);
}
function dt(e) {
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
function Vs(e) {
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
var xn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + xn,
  ir = "__reactProps$" + xn,
  Xe = "__reactContainer$" + xn,
  Ko = "__reactEvents$" + xn,
  bd = "__reactListeners$" + xn,
  qd = "__reactHandles$" + xn;
function Rt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vs(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = Vs(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function mr(e) {
  return (
    (e = e[Ae] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Oi(e) {
  return e[ir] || null;
}
var Wo = [],
  bt = -1;
function xt(e) {
  return { current: e };
}
function A(e) {
  0 > bt || ((e.current = Wo[bt]), (Wo[bt] = null), bt--);
}
function F(e, t) {
  (bt++, (Wo[bt] = e.current), (e.current = t));
}
var vt = {},
  se = xt(vt),
  ge = xt(!1),
  It = vt;
function dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function me(e) {
  return ((e = e.childContextTypes), e != null);
}
function oi() {
  (A(ge), A(se));
}
function Bs(e, t, n) {
  if (se.current !== vt) throw Error(S(168));
  (F(se, t), F(ge, n));
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Ff(e) || "Unknown", i));
  return W({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (It = se.current),
    F(se, e),
    F(ge, ge.current),
    !0
  );
}
function Hs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = Wu(e, t, It)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ge),
      A(se),
      F(se, e))
    : A(ge),
    F(ge, n));
}
var We = null,
  _i = !1,
  oo = !1;
function Qu(e) {
  We === null ? (We = [e]) : We.push(e);
}
function ep(e) {
  ((_i = !0), Qu(e));
}
function St() {
  if (!oo && We !== null) {
    oo = !0;
    var e = 0,
      t = $;
    try {
      var n = We;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((We = null), (_i = !1));
    } catch (i) {
      throw (We !== null && (We = We.slice(e + 1)), yu(Cl, St), i);
    } finally {
      (($ = t), (oo = !1));
    }
  }
  return null;
}
var qt = [],
  en = 0,
  si = null,
  ai = 0,
  Ee = [],
  Ce = 0,
  zt = null,
  Qe = 1,
  Ye = "";
function Lt(e, t) {
  ((qt[en++] = ai), (qt[en++] = si), (si = e), (ai = t));
}
function Yu(e, t, n) {
  ((Ee[Ce++] = Qe), (Ee[Ce++] = Ye), (Ee[Ce++] = zt), (zt = e));
  var r = Qe;
  e = Ye;
  var i = 32 - Ie(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - Ie(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    ((o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Qe = (1 << (32 - Ie(t) + i)) | (n << i) | r),
      (Ye = o + e));
  } else ((Qe = (1 << o) | (n << i) | r), (Ye = e));
}
function Il(e) {
  e.return !== null && (Lt(e, 1), Yu(e, 1, 0));
}
function zl(e) {
  for (; e === si; )
    ((si = qt[--en]), (qt[en] = null), (ai = qt[--en]), (qt[en] = null));
  for (; e === zt; )
    ((zt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Ye = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null));
}
var xe = null,
  we = null,
  V = !1,
  De = null;
function Gu(e, t) {
  var n = Le(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ks(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (we = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Qe, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (V) {
    var t = we;
    if (t) {
      var n = t;
      if (!Ks(e, t)) {
        if (Qo(e)) throw Error(S(418));
        t = dt(n.nextSibling);
        var r = xe;
        t && Ks(e, t)
          ? Gu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (xe = e));
      }
    } else {
      if (Qo(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (V = !1), (xe = e));
    }
  }
}
function Ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Tr(e) {
  if (e !== xe) return !1;
  if (!V) return (Ws(e), (V = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Qo(e)) throw (Ju(), Error(S(418)));
    for (; t; ) (Gu(e, t), (t = dt(t.nextSibling)));
  }
  if ((Ws(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ju() {
  for (var e = we; e; ) e = dt(e.nextSibling);
}
function pn() {
  ((we = xe = null), (V = !1));
}
function $l(e) {
  De === null ? (De = [e]) : De.push(e);
}
var tp = qe.ReactCurrentBatchConfig;
function Rn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function jr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Qs(e) {
  var t = e._init;
  return t(e._payload);
}
function Xu(e) {
  function t(h, c) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [c]), (h.flags |= 16)) : p.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) (t(h, c), (c = c.sibling));
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      (c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling));
    return h;
  }
  function i(h, c) {
    return ((h = mt(h, c)), (h.index = 0), (h.sibling = null), h);
  }
  function o(h, c, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((h.flags |= 2), c) : p)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function l(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function s(h, c, p, m) {
    return c === null || c.tag !== 6
      ? ((c = po(p, h.mode, m)), (c.return = h), c)
      : ((c = i(c, p)), (c.return = h), c);
  }
  function a(h, c, p, m) {
    var k = p.type;
    return k === Yt
      ? d(h, c, p.props.children, m, p.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === rt &&
              Qs(k) === c.type))
        ? ((m = i(c, p.props)), (m.ref = Rn(h, c, p)), (m.return = h), m)
        : ((m = Jr(p.type, p.key, p.props, null, h.mode, m)),
          (m.ref = Rn(h, c, p)),
          (m.return = h),
          m);
  }
  function u(h, c, p, m) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ho(p, h.mode, m)), (c.return = h), c)
      : ((c = i(c, p.children || [])), (c.return = h), c);
  }
  function d(h, c, p, m, k) {
    return c === null || c.tag !== 7
      ? ((c = jt(p, h.mode, m, k)), (c.return = h), c)
      : ((c = i(c, p)), (c.return = h), c);
  }
  function g(h, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = po("" + c, h.mode, p)), (c.return = h), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sr:
          return (
            (p = Jr(c.type, c.key, c.props, null, h.mode, p)),
            (p.ref = Rn(h, null, c)),
            (p.return = h),
            p
          );
        case Qt:
          return ((c = ho(c, h.mode, p)), (c.return = h), c);
        case rt:
          var m = c._init;
          return g(h, m(c._payload), p);
      }
      if (zn(c) || Nn(c))
        return ((c = jt(c, h.mode, p, null)), (c.return = h), c);
      jr(h, c);
    }
    return null;
  }
  function f(h, c, p, m) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : s(h, c, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sr:
          return p.key === k ? a(h, c, p, m) : null;
        case Qt:
          return p.key === k ? u(h, c, p, m) : null;
        case rt:
          return ((k = p._init), f(h, c, k(p._payload), m));
      }
      if (zn(p) || Nn(p)) return k !== null ? null : d(h, c, p, m, null);
      jr(h, p);
    }
    return null;
  }
  function y(h, c, p, m, k) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((h = h.get(p) || null), s(c, h, "" + m, k));
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Sr:
          return (
            (h = h.get(m.key === null ? p : m.key) || null),
            a(c, h, m, k)
          );
        case Qt:
          return (
            (h = h.get(m.key === null ? p : m.key) || null),
            u(c, h, m, k)
          );
        case rt:
          var E = m._init;
          return y(h, c, p, E(m._payload), k);
      }
      if (zn(m) || Nn(m)) return ((h = h.get(p) || null), d(c, h, m, k, null));
      jr(c, m);
    }
    return null;
  }
  function v(h, c, p, m) {
    for (
      var k = null, E = null, N = c, P = (c = 0), B = null;
      N !== null && P < p.length;
      P++
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var j = f(h, N, p[P], m);
      if (j === null) {
        N === null && (N = B);
        break;
      }
      (e && N && j.alternate === null && t(h, N),
        (c = o(j, c, P)),
        E === null ? (k = j) : (E.sibling = j),
        (E = j),
        (N = B));
    }
    if (P === p.length) return (n(h, N), V && Lt(h, P), k);
    if (N === null) {
      for (; P < p.length; P++)
        ((N = g(h, p[P], m)),
          N !== null &&
            ((c = o(N, c, P)),
            E === null ? (k = N) : (E.sibling = N),
            (E = N)));
      return (V && Lt(h, P), k);
    }
    for (N = r(h, N); P < p.length; P++)
      ((B = y(N, h, P, p[P], m)),
        B !== null &&
          (e && B.alternate !== null && N.delete(B.key === null ? P : B.key),
          (c = o(B, c, P)),
          E === null ? (k = B) : (E.sibling = B),
          (E = B)));
    return (
      e &&
        N.forEach(function (ee) {
          return t(h, ee);
        }),
      V && Lt(h, P),
      k
    );
  }
  function x(h, c, p, m) {
    var k = Nn(p);
    if (typeof k != "function") throw Error(S(150));
    if (((p = k.call(p)), p == null)) throw Error(S(151));
    for (
      var E = (k = null), N = c, P = (c = 0), B = null, j = p.next();
      N !== null && !j.done;
      P++, j = p.next()
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var ee = f(h, N, j.value, m);
      if (ee === null) {
        N === null && (N = B);
        break;
      }
      (e && N && ee.alternate === null && t(h, N),
        (c = o(ee, c, P)),
        E === null ? (k = ee) : (E.sibling = ee),
        (E = ee),
        (N = B));
    }
    if (j.done) return (n(h, N), V && Lt(h, P), k);
    if (N === null) {
      for (; !j.done; P++, j = p.next())
        ((j = g(h, j.value, m)),
          j !== null &&
            ((c = o(j, c, P)),
            E === null ? (k = j) : (E.sibling = j),
            (E = j)));
      return (V && Lt(h, P), k);
    }
    for (N = r(h, N); !j.done; P++, j = p.next())
      ((j = y(N, h, P, j.value, m)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? P : j.key),
          (c = o(j, c, P)),
          E === null ? (k = j) : (E.sibling = j),
          (E = j)));
    return (
      e &&
        N.forEach(function (Vt) {
          return t(h, Vt);
        }),
      V && Lt(h, P),
      k
    );
  }
  function R(h, c, p, m) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Yt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Sr:
          e: {
            for (var k = p.key, E = c; E !== null; ) {
              if (E.key === k) {
                if (((k = p.type), k === Yt)) {
                  if (E.tag === 7) {
                    (n(h, E.sibling),
                      (c = i(E, p.props.children)),
                      (c.return = h),
                      (h = c));
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === rt &&
                    Qs(k) === E.type)
                ) {
                  (n(h, E.sibling),
                    (c = i(E, p.props)),
                    (c.ref = Rn(h, E, p)),
                    (c.return = h),
                    (h = c));
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            p.type === Yt
              ? ((c = jt(p.props.children, h.mode, m, p.key)),
                (c.return = h),
                (h = c))
              : ((m = Jr(p.type, p.key, p.props, null, h.mode, m)),
                (m.ref = Rn(h, c, p)),
                (m.return = h),
                (h = m));
          }
          return l(h);
        case Qt:
          e: {
            for (E = p.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (n(h, c.sibling),
                    (c = i(c, p.children || [])),
                    (c.return = h),
                    (h = c));
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            ((c = ho(p, h.mode, m)), (c.return = h), (h = c));
          }
          return l(h);
        case rt:
          return ((E = p._init), R(h, c, E(p._payload), m));
      }
      if (zn(p)) return v(h, c, p, m);
      if (Nn(p)) return x(h, c, p, m);
      jr(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = i(c, p)), (c.return = h), (h = c))
          : (n(h, c), (c = po(p, h.mode, m)), (c.return = h), (h = c)),
        l(h))
      : n(h, c);
  }
  return R;
}
var hn = Xu(!0),
  Zu = Xu(!1),
  ui = xt(null),
  ci = null,
  tn = null,
  Fl = null;
function Ml() {
  Fl = tn = ci = null;
}
function Al(e) {
  var t = ui.current;
  (A(ui), (e._currentValue = t));
}
function Go(e, t, n) {
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
function un(e, t) {
  ((ci = e),
    (Fl = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null)));
}
function Re(e) {
  var t = e._currentValue;
  if (Fl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (ci === null) throw Error(S(308));
      ((tn = e), (ci.dependencies = { lanes: 0, firstContext: e }));
    } else tn = tn.next = e;
  return t;
}
var Ot = null;
function Ul(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function bu(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ul(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
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
var it = !1;
function Vl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qu(e, t) {
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
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ul(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Hr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n));
  }
}
function Ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = l) : (o = o.next = l), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
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
function fi(e, t, n, r) {
  var i = e.updateQueue;
  it = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    ((a.next = null), l === null ? (o = u) : (l.next = u), (l = a));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var g = i.baseState;
    ((l = 0), (d = u = a = null), (s = o));
    do {
      var f = s.lane,
        y = s.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            x = s;
          switch (((f = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                g = v.call(y, g, f);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (f = typeof v == "function" ? v.call(y, g, f) : v),
                f == null)
              )
                break e;
              g = W({}, g, f);
              break e;
            case 2:
              it = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        ((y = {
          eventTime: y,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (a = g)) : (d = d.next = y),
          (l |= f));
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        ((f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (a = g),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((l |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((Ft |= l), (e.lanes = l), (e.memoizedState = g));
  }
}
function Gs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var yr = {},
  Be = xt(yr),
  or = xt(yr),
  lr = xt(yr);
function _t(e) {
  if (e === yr) throw Error(S(174));
  return e;
}
function Bl(e, t) {
  switch ((F(lr, t), F(or, e), F(Be, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ro(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ro(t, e)));
  }
  (A(Be), F(Be, t));
}
function gn() {
  (A(Be), A(or), A(lr));
}
function ec(e) {
  _t(lr.current);
  var t = _t(Be.current),
    n = Ro(t, e.type);
  t !== n && (F(or, e), F(Be, n));
}
function Hl(e) {
  or.current === e && (A(Be), A(or));
}
var H = xt(0);
function di(e) {
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
var lo = [];
function Kl() {
  for (var e = 0; e < lo.length; e++)
    lo[e]._workInProgressVersionPrimary = null;
  lo.length = 0;
}
var Kr = qe.ReactCurrentDispatcher,
  so = qe.ReactCurrentBatchConfig,
  $t = 0,
  K = null,
  J = null,
  b = null,
  pi = !1,
  Hn = !1,
  sr = 0,
  np = 0;
function ie() {
  throw Error(S(321));
}
function Wl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Ql(e, t, n, r, i, o) {
  if (
    (($t = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Kr.current = e === null || e.memoizedState === null ? lp : sp),
    (e = n(r, i)),
    Hn)
  ) {
    o = 0;
    do {
      if (((Hn = !1), (sr = 0), 25 <= o)) throw Error(S(301));
      ((o += 1),
        (b = J = null),
        (t.updateQueue = null),
        (Kr.current = ap),
        (e = n(r, i)));
    } while (Hn);
  }
  if (
    ((Kr.current = hi),
    (t = J !== null && J.next !== null),
    ($t = 0),
    (b = J = K = null),
    (pi = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Yl() {
  var e = sr !== 0;
  return ((sr = 0), e);
}
function Me() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (b === null ? (K.memoizedState = b = e) : (b = b.next = e), b);
}
function Oe() {
  if (J === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = b === null ? K.memoizedState : b.next;
  if (t !== null) ((b = t), (J = e));
  else {
    if (e === null) throw Error(S(310));
    ((J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      b === null ? (K.memoizedState = b = e) : (b = b.next = e));
  }
  return b;
}
function ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = J,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      ((i.next = o.next), (o.next = l));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var s = (l = null),
      a = null,
      u = o;
    do {
      var d = u.lane;
      if (($t & d) === d)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var g = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((s = a = g), (l = r)) : (a = a.next = g),
          (K.lanes |= d),
          (Ft |= d));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (a === null ? (l = r) : (a.next = s),
      $e(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (K.lanes |= o), (Ft |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uo(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do ((o = e(o, l.action)), (l = l.next));
    while (l !== i);
    ($e(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function tc() {}
function nc(e, t) {
  var n = K,
    r = Oe(),
    i = t(),
    o = !$e(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (he = !0)),
    (r = r.queue),
    Gl(oc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, ic.bind(null, n, r, i, t), void 0, null),
      q === null)
    )
      throw Error(S(349));
    $t & 30 || rc(n, t, i);
  }
  return i;
}
function rc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ic(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), lc(t) && sc(e));
}
function oc(e, t, n) {
  return n(function () {
    lc(t) && sc(e);
  });
}
function lc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function sc(e) {
  var t = Ze(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function Js(e) {
  var t = Me();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = op.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ac() {
  return Oe().memoizedState;
}
function Wr(e, t, n, r) {
  var i = Me();
  ((K.flags |= e),
    (i.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ti(e, t, n, r) {
  var i = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var l = J.memoizedState;
    if (((o = l.destroy), r !== null && Wl(r, l.deps))) {
      i.memoizedState = ur(t, n, o, r);
      return;
    }
  }
  ((K.flags |= e), (i.memoizedState = ur(1 | t, n, o, r)));
}
function Xs(e, t) {
  return Wr(8390656, 8, e, t);
}
function Gl(e, t) {
  return Ti(2048, 8, e, t);
}
function uc(e, t) {
  return Ti(4, 2, e, t);
}
function cc(e, t) {
  return Ti(4, 4, e, t);
}
function fc(e, t) {
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
function dc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ti(4, 4, fc.bind(null, t, e), n)
  );
}
function Jl() {}
function pc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gc(e, t, n) {
  return $t & 21
    ? ($e(n, t) || ((n = xu()), (K.lanes |= n), (Ft |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function rp(e, t) {
  var n = $;
  (($ = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = so.transition;
  so.transition = {};
  try {
    (e(!1), t());
  } finally {
    (($ = n), (so.transition = r));
  }
}
function mc() {
  return Oe().memoizedState;
}
function ip(e, t, n) {
  var r = gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yc(e))
  )
    vc(t, n);
  else if (((n = bu(e, t, n, r)), n !== null)) {
    var i = ce();
    (ze(n, e, r, i), wc(n, t, r));
  }
}
function op(e, t, n) {
  var r = gt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yc(e)) vc(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), $e(s, l))) {
          var a = t.interleaved;
          (a === null
            ? ((i.next = i), Ul(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = bu(e, t, i, r)),
      n !== null && ((i = ce()), ze(n, e, r, i), wc(n, t, r)));
  }
}
function yc(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function vc(e, t) {
  Hn = pi = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function wc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n));
  }
}
var hi = {
    readContext: Re,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Re,
    useCallback: function (e, t) {
      return ((Me().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Re,
    useEffect: Xs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wr(4194308, 4, fc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Me();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Me();
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
        (e = e.dispatch = ip.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Me();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Js,
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e);
    },
    useTransition: function () {
      var e = Js(!1),
        t = e[0];
      return ((e = rp.bind(null, e[1])), (Me().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Me();
      if (V) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(S(349));
        $t & 30 || rc(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Xs(oc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ur(9, ic.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Me(),
        t = q.identifierPrefix;
      if (V) {
        var n = Ye,
          r = Qe;
        ((n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = np++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sp = {
    readContext: Re,
    useCallback: pc,
    useContext: Re,
    useEffect: Gl,
    useImperativeHandle: dc,
    useInsertionEffect: uc,
    useLayoutEffect: cc,
    useMemo: hc,
    useReducer: ao,
    useRef: ac,
    useState: function () {
      return ao(ar);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Oe();
      return gc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(ar)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: mc,
    unstable_isNewReconciler: !1,
  },
  ap = {
    readContext: Re,
    useCallback: pc,
    useContext: Re,
    useEffect: Gl,
    useImperativeHandle: dc,
    useInsertionEffect: uc,
    useLayoutEffect: cc,
    useMemo: hc,
    useReducer: uo,
    useRef: ac,
    useState: function () {
      return uo(ar);
    },
    useDebugValue: Jl,
    useDeferredValue: function (e) {
      var t = Oe();
      return J === null ? (t.memoizedState = e) : gc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = uo(ar)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: tc,
    useSyncExternalStore: nc,
    useId: mc,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jo(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      i = gt(e),
      o = Ge(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, i)),
      t !== null && (ze(t, e, i, r), Hr(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      i = gt(e),
      o = Ge(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pt(e, o, i)),
      t !== null && (ze(t, e, i, r), Hr(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = gt(e),
      i = Ge(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = pt(e, i, r)),
      t !== null && (ze(t, e, r, n), Hr(t, e, r)));
  },
};
function Zs(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !tr(n, r) || !tr(i, o)
        : !0
  );
}
function xc(e, t, n) {
  var r = !1,
    i = vt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Re(o))
      : ((i = me(t) ? It : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dn(e, i) : vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function bs(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ji.enqueueReplaceState(t, t.state, null));
}
function Xo(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Vl(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = Re(o))
    : ((o = me(t) ? It : se.current), (i.context = dn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Jo(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ji.enqueueReplaceState(i, i.state, null),
      fi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += $f(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var up = typeof WeakMap == "function" ? WeakMap : Map;
function Sc(e, t, n) {
  ((n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (mi || ((mi = !0), (sl = r)), Zo(e, t));
    }),
    n
  );
}
function kc(e, t, n) {
  ((n = Ge(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Zo(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Zo(e, t),
          typeof r != "function" &&
            (ht === null ? (ht = new Set([this])) : ht.add(this)));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function qs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new up();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Np.bind(null, e, t, n)), t.then(e, e));
}
function ea(e) {
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
function ta(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cp = qe.ReactCurrentOwner,
  he = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : hn(t, e.child, n, r);
}
function na(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, i),
    (r = Ql(e, t, n, r, o, i)),
    (n = Yl()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        be(e, t, i))
      : (V && n && Il(t), (t.flags |= 1), ue(e, t, r, i), t.child)
  );
}
function ra(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !rs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Nc(e, t, o, r, i))
      : ((e = Jr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tr), n(l, r) && e.ref === t.ref)
    )
      return be(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = mt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Nc(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tr(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (he = !0);
      else return ((t.lanes = e.lanes), be(e, t, i));
  }
  return bo(e, t, n, r, i);
}
function Ec(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(rn, ve),
        (ve |= n));
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
          F(rn, ve),
          (ve |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(rn, ve),
        (ve |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(rn, ve),
      (ve |= r));
  return (ue(e, t, i, n), t.child);
}
function Cc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bo(e, t, n, r, i) {
  var o = me(n) ? It : se.current;
  return (
    (o = dn(t, o)),
    un(t, i),
    (n = Ql(e, t, n, r, o, i)),
    (r = Yl()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        be(e, t, i))
      : (V && r && Il(t), (t.flags |= 1), ue(e, t, n, i), t.child)
  );
}
function ia(e, t, n, r, i) {
  if (me(n)) {
    var o = !0;
    li(t);
  } else o = !1;
  if ((un(t, i), t.stateNode === null))
    (Qr(e, t), xc(t, n, r), Xo(t, n, r, i), (r = !0));
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Re(u))
      : ((u = me(n) ? It : se.current), (u = dn(t, u)));
    var d = n.getDerivedStateFromProps,
      g =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && bs(t, l, r, u)),
      (it = !1));
    var f = t.memoizedState;
    ((l.state = f),
      fi(t, r, l, i),
      (a = t.memoizedState),
      s !== r || f !== a || ge.current || it
        ? (typeof d == "function" && (Jo(t, n, d, r), (a = t.memoizedState)),
          (s = it || Zs(t, n, s, r, f, a, u))
            ? (g ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((l = t.stateNode),
      qu(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Te(t.type, s)),
      (l.props = u),
      (g = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Re(a))
        : ((a = me(n) ? It : se.current), (a = dn(t, a))));
    var y = n.getDerivedStateFromProps;
    ((d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== g || f !== a) && bs(t, l, r, a)),
      (it = !1),
      (f = t.memoizedState),
      (l.state = f),
      fi(t, r, l, i));
    var v = t.memoizedState;
    s !== g || f !== v || ge.current || it
      ? (typeof y == "function" && (Jo(t, n, y, r), (v = t.memoizedState)),
        (u = it || Zs(t, n, u, r, f, v, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qo(e, t, n, r, o, i);
}
function qo(e, t, n, r, i, o) {
  Cc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return (i && Hs(t, n, !1), be(e, t, o));
  ((r = t.stateNode), (cp.current = t));
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = hn(t, e.child, null, o)), (t.child = hn(t, null, s, o)))
      : ue(e, t, s, o),
    (t.memoizedState = r.state),
    i && Hs(t, n, !0),
    t.child
  );
}
function Lc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bs(e, t.context, !1),
    Bl(e, t.containerInfo));
}
function oa(e, t, n, r, i) {
  return (pn(), $l(i), (t.flags |= 256), ue(e, t, n, r), t.child);
}
var el = { dehydrated: null, treeContext: null, retryLane: 0 };
function tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pc(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(H, i & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = zi(l, r, 0, null)),
              (e = jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = tl(n)),
              (t.memoizedState = el),
              e)
            : Xl(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return fp(e, t, l, r, s, i, n);
  if (o) {
    ((o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = mt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = mt(s, o)) : ((o = jt(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? tl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = el),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = mt(o, { mode: "visible", children: r.children })),
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
function Xl(e, t) {
  return (
    (t = zi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && $l(r),
    hn(t, e.child, null, n),
    (e = Xl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fp(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(S(422)))), Dr(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = zi({ mode: "visible", children: r.children }, i, 0, null)),
          (o = jt(o, i, l, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && hn(t, e.child, null, l),
          (t.child.memoizedState = tl(l)),
          (t.memoizedState = el),
          o);
  if (!(t.mode & 1)) return Dr(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (o = Error(S(419))),
      (r = co(o, r, void 0)),
      Dr(e, t, l, r)
    );
  }
  if (((s = (l & e.childLanes) !== 0), he || s)) {
    if (((r = q), r !== null)) {
      switch (l & -l) {
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
      ((i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ze(e, i), ze(r, e, i, -1)));
    }
    return (ns(), (r = co(Error(S(421)))), Dr(e, t, l, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ep.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = dt(i.nextSibling)),
      (xe = t),
      (V = !0),
      (De = null),
      e !== null &&
        ((Ee[Ce++] = Qe),
        (Ee[Ce++] = Ye),
        (Ee[Ce++] = zt),
        (Qe = e.id),
        (Ye = e.overflow),
        (zt = t)),
      (t = Xl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function la(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Go(e.return, t, n));
}
function fo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Rc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = H.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && la(e, n, t);
        else if (e.tag === 19) la(e, n, t);
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
  if ((F(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && di(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          fo(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && di(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        fo(t, !0, n, null, o);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ft |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = mt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function dp(e, t, n) {
  switch (t.tag) {
    case 3:
      (Lc(t), pn());
      break;
    case 5:
      ec(t);
      break;
    case 1:
      me(t.type) && li(t);
      break;
    case 4:
      Bl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (F(ui, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Pc(e, t, n)
            : (F(H, H.current & 1),
              (e = be(e, t, n)),
              e !== null ? e.sibling : null);
      F(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Ec(e, t, n));
  }
  return be(e, t, n);
}
var Oc, nl, _c, Tc;
Oc = function (e, t) {
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
nl = function () {};
_c = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), _t(Be.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = Eo(e, i)), (r = Eo(e, r)), (o = []));
        break;
      case "select":
        ((i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = Po(e, i)), (r = Po(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ii);
    }
    Oo(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gn.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else (n || (o || (o = []), o.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Gn.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && M("scroll", e),
                    o || s === a || (o = []))
                  : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!V)
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
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function pp(e, t, n) {
  var r = t.pendingProps;
  switch ((zl(t), t.tag)) {
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
      return (oe(t), null);
    case 1:
      return (me(t.type) && oi(), oe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        gn(),
        A(ge),
        A(se),
        Kl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (cl(De), (De = null)))),
        nl(e, t),
        oe(t),
        null
      );
    case 5:
      Hl(t);
      var i = _t(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (_c(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (oe(t), null);
        }
        if (((e = _t(Be.current)), Tr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Ae] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (M("cancel", r), M("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fn.length; i++) M(Fn[i], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (M("error", r), M("load", r));
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              (gs(r, o), M("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r));
              break;
            case "textarea":
              (ys(r, o), M("invalid", r));
          }
          (Oo(n, o), (i = null));
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Gn.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              (kr(r), ms(r, o, !0));
              break;
            case "textarea":
              (kr(r), vs(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ii);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ou(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ae] = t),
            (e[ir] = r),
            Oc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((l = _o(n, r)), n)) {
              case "dialog":
                (M("cancel", e), M("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (M("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fn.length; i++) M(Fn[i], e);
                i = r;
                break;
              case "source":
                (M("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (M("error", e), M("load", e), (i = r));
                break;
              case "details":
                (M("toggle", e), (i = r));
                break;
              case "input":
                (gs(e, r), (i = Eo(e, r)), M("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  M("invalid", e));
                break;
              case "textarea":
                (ys(e, r), (i = Po(e, r)), M("invalid", e));
                break;
              default:
                i = r;
            }
            (Oo(n, i), (s = i));
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? au(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && lu(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Jn(e, a)
                        : typeof a == "number" && Jn(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Gn.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && M("scroll", e)
                          : a != null && xl(e, o, a, l));
              }
            switch (n) {
              case "input":
                (kr(e), ms(e, r, !1));
                break;
              case "textarea":
                (kr(e), vs(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? on(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ii);
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
      return (oe(t), null);
    case 6:
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = _t(lr.current)), _t(Be.current), Tr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (o = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r));
      }
      return (oe(t), null);
    case 13:
      if (
        (A(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && we !== null && t.mode & 1 && !(t.flags & 128))
          (Ju(), pn(), (t.flags |= 98560), (o = !1));
        else if (((o = Tr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Ae] = t;
          } else
            (pn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (oe(t), (o = !1));
        } else (De !== null && (cl(De), (De = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? X === 0 && (X = 3) : ns())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        gn(),
        nl(e, t),
        e === null && nr(t.stateNode.containerInfo),
        oe(t),
        null
      );
    case 10:
      return (Al(t.type._context), oe(t), null);
    case 17:
      return (me(t.type) && oi(), oe(t), null);
    case 19:
      if ((A(H), (o = t.memoizedState), o === null)) return (oe(t), null);
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) On(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = di(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    On(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (F(H, (H.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > yn &&
            ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = di(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !V)
            )
              return (oe(t), null);
          } else
            2 * Y() - o.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = H.current),
          F(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        ts(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function hp(e, t) {
  switch ((zl(t), t.tag)) {
    case 1:
      return (
        me(t.type) && oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gn(),
        A(ge),
        A(se),
        Kl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Hl(t), null);
    case 13:
      if ((A(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        pn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (A(H), null);
    case 4:
      return (gn(), null);
    case 10:
      return (Al(t.type._context), null);
    case 22:
    case 23:
      return (ts(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1,
  le = !1,
  gp = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function rl(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var sa = !1;
function mp(e, t) {
  if (((Uo = ti), (e = $u()), Dl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            g = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              g !== n || (i !== 0 && g.nodeType !== 3) || (s = l + i),
                g !== o || (r !== 0 && g.nodeType !== 3) || (a = l + r),
                g.nodeType === 3 && (l += g.nodeValue.length),
                (y = g.firstChild) !== null;
            )
              ((f = g), (g = y));
            for (;;) {
              if (g === e) break t;
              if (
                (f === n && ++u === i && (s = l),
                f === o && ++d === r && (a = l),
                (y = g.nextSibling) !== null)
              )
                break;
              ((g = f), (f = g.parentNode));
            }
            g = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vo = { focusedElem: e, selectionRange: n }, ti = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    R = v.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Te(t.type, x),
                      R,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(S(163));
            }
        } catch (m) {
          Q(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((v = sa), (sa = !1), v);
}
function Kn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && rl(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Di(e, t) {
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
function il(e) {
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
function jc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), jc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[ir], delete t[Ko], delete t[bd], delete t[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Dc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dc(e.return)) return null;
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
function ol(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ii)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ol(e, t, n), e = e.sibling; e !== null; )
      (ol(e, t, n), (e = e.sibling));
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; )
      (ll(e, t, n), (e = e.sibling));
}
var te = null,
  je = !1;
function nt(e, t, n) {
  for (n = n.child; n !== null; ) (Ic(e, t, n), (n = n.sibling));
}
function Ic(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Ci, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || nn(n, t);
    case 6:
      var r = te,
        i = je;
      ((te = null),
        nt(e, t, n),
        (te = r),
        (je = i),
        te !== null &&
          (je
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode)));
      break;
    case 18:
      te !== null &&
        (je
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? io(e.parentNode, n)
              : e.nodeType === 1 && io(e, n),
            qn(e))
          : io(te, n.stateNode));
      break;
    case 4:
      ((r = te),
        (i = je),
        (te = n.stateNode.containerInfo),
        (je = !0),
        nt(e, t, n),
        (te = r),
        (je = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          ((o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && rl(n, t, l),
            (i = i.next));
        } while (i !== r);
      }
      nt(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          Q(n, t, s);
        }
      nt(e, t, n);
      break;
    case 21:
      nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), nt(e, t, n), (le = r))
        : nt(e, t, n);
      break;
    default:
      nt(e, t, n);
  }
}
function ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new gp()),
      t.forEach(function (r) {
        var i = Cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function _e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ((te = s.stateNode), (je = !1));
              break e;
            case 3:
              ((te = s.stateNode.containerInfo), (je = !0));
              break e;
            case 4:
              ((te = s.stateNode.containerInfo), (je = !0));
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(S(160));
        (Ic(o, l, i), (te = null), (je = !1));
        var a = i.alternate;
        (a !== null && (a.return = null), (i.return = null));
      } catch (u) {
        Q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (zc(t, e), (t = t.sibling));
}
function zc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(t, e), Fe(e), r & 4)) {
        try {
          (Kn(3, e, e.return), Di(3, e));
        } catch (x) {
          Q(e, e.return, x);
        }
        try {
          Kn(5, e, e.return);
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 1:
      (_e(t, e), Fe(e), r & 512 && n !== null && nn(n, n.return));
      break;
    case 5:
      if (
        (_e(t, e),
        Fe(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Jn(i, "");
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (s === "input" && o.type === "radio" && o.name != null && ru(i, o),
              _o(s, l));
            var u = _o(s, o);
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                g = a[l + 1];
              d === "style"
                ? au(i, g)
                : d === "dangerouslySetInnerHTML"
                  ? lu(i, g)
                  : d === "children"
                    ? Jn(i, g)
                    : xl(i, d, g, u);
            }
            switch (s) {
              case "input":
                Co(i, o);
                break;
              case "textarea":
                iu(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? on(i, !!o.multiple, y, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? on(i, !!o.multiple, o.defaultValue, !0)
                      : on(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ir] = o;
          } catch (x) {
            Q(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((_e(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (x) {
          Q(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (_e(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          qn(t.containerInfo);
        } catch (x) {
          Q(e, e.return, x);
        }
      break;
    case 4:
      (_e(t, e), Fe(e));
      break;
    case 13:
      (_e(t, e),
        Fe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ql = Y())),
        r & 4 && ua(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (u = le) || d), _e(t, e), (le = u)) : _e(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (g = L = d; L !== null; ) {
              switch (((f = L), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kn(4, f, f.return);
                  break;
                case 1:
                  nn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (x) {
                      Q(r, n, x);
                    }
                  }
                  break;
                case 5:
                  nn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    fa(g);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (L = y)) : fa(g);
            }
            d = d.sibling;
          }
        e: for (d = null, g = e; ; ) {
          if (g.tag === 5) {
            if (d === null) {
              d = g;
              try {
                ((i = g.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (a = g.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = su("display", l))));
              } catch (x) {
                Q(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (d === null)
              try {
                g.stateNode.nodeValue = u ? "" : g.memoizedProps;
              } catch (x) {
                Q(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            (d === g && (d = null), (g = g.return));
          }
          (d === g && (d = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (_e(t, e), Fe(e), r & 4 && ua(e));
      break;
    case 21:
      break;
    default:
      (_e(t, e), Fe(e));
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Jn(i, ""), (r.flags &= -33));
          var o = aa(e);
          ll(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = aa(e);
          ol(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yp(e, t, n) {
  ((L = e), $c(e));
}
function $c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ir;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || le;
        s = Ir;
        var u = le;
        if (((Ir = l), (le = a) && !u))
          for (L = i; L !== null; )
            ((l = L),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? da(i)
                : a !== null
                  ? ((a.return = l), (L = a))
                  : da(i));
        for (; o !== null; ) ((L = o), $c(o), (o = o.sibling));
        ((L = i), (Ir = s), (le = u));
      }
      ca(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : ca(e);
  }
}
function ca(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Di(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Gs(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gs(t, l, n);
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
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var g = d.dehydrated;
                    g !== null && qn(g);
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
              throw Error(S(163));
          }
        le || (t.flags & 512 && il(t));
      } catch (f) {
        Q(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function fa(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function da(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Di(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var o = t.return;
          try {
            il(t);
          } catch (a) {
            Q(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            il(t);
          } catch (a) {
            Q(t, l, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (L = s));
      break;
    }
    L = t.return;
  }
}
var vp = Math.ceil,
  gi = qe.ReactCurrentDispatcher,
  Zl = qe.ReactCurrentOwner,
  Pe = qe.ReactCurrentBatchConfig,
  I = 0,
  q = null,
  G = null,
  ne = 0,
  ve = 0,
  rn = xt(0),
  X = 0,
  cr = null,
  Ft = 0,
  Ii = 0,
  bl = 0,
  Wn = null,
  pe = null,
  ql = 0,
  yn = 1 / 0,
  Ke = null,
  mi = !1,
  sl = null,
  ht = null,
  zr = !1,
  at = null,
  yi = 0,
  Qn = 0,
  al = null,
  Yr = -1,
  Gr = 0;
function ce() {
  return I & 6 ? Y() : Yr !== -1 ? Yr : (Yr = Y());
}
function gt(e) {
  return e.mode & 1
    ? I & 2 && ne !== 0
      ? ne & -ne
      : tp.transition !== null
        ? (Gr === 0 && (Gr = xu()), Gr)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pu(e.type))),
          e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (al = null), Error(S(185)));
  (hr(e, n, r),
    (!(I & 2) || e !== q) &&
      (e === q && (!(I & 2) && (Ii |= n), X === 4 && lt(e, ne)),
      ye(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((yn = Y() + 500), _i && St())));
}
function ye(e, t) {
  var n = e.callbackNode;
  td(e, t);
  var r = ei(e, e === q ? ne : 0);
  if (r === 0)
    (n !== null && Ss(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ss(n), t === 1))
      (e.tag === 0 ? ep(pa.bind(null, e)) : Qu(pa.bind(null, e)),
        Xd(function () {
          !(I & 6) && St();
        }),
        (n = null));
    else {
      switch (Su(r)) {
        case 1:
          n = Cl;
          break;
        case 4:
          n = vu;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = wu;
          break;
        default:
          n = qr;
      }
      n = Kc(n, Fc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Fc(e, t) {
  if (((Yr = -1), (Gr = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = ei(e, e === q ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = Ac();
    (q !== e || ne !== t) && ((Ke = null), (yn = Y() + 500), Tt(e, t));
    do
      try {
        Sp();
        break;
      } catch (s) {
        Mc(e, s);
      }
    while (!0);
    (Ml(),
      (gi.current = o),
      (I = i),
      G !== null ? (t = 0) : ((q = null), (ne = 0), (t = X)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = zo(e)), i !== 0 && ((r = i), (t = ul(e, i)))), t === 1)
    )
      throw ((n = cr), Tt(e, 0), lt(e, r), ye(e, Y()), n);
    if (t === 6) lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !wp(i) &&
          ((t = vi(e, r)),
          t === 2 && ((o = zo(e)), o !== 0 && ((r = o), (t = ul(e, o)))),
          t === 1))
      )
        throw ((n = cr), Tt(e, 0), lt(e, r), ye(e, Y()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Pt(e, pe, Ke);
          break;
        case 3:
          if (
            (lt(e, r), (r & 130023424) === r && ((t = ql + 500 - Y()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (ce(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Ho(Pt.bind(null, e, pe, Ke), t);
            break;
          }
          Pt(e, pe, Ke);
          break;
        case 4:
          if ((lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ie(r);
            ((o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o));
          }
          if (
            ((r = i),
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
                          : 1960 * vp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ho(Pt.bind(null, e, pe, Ke), r);
            break;
          }
          Pt(e, pe, Ke);
          break;
        case 5:
          Pt(e, pe, Ke);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (ye(e, Y()), e.callbackNode === n ? Fc.bind(null, e) : null);
}
function ul(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && cl(t)),
    e
  );
}
function cl(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!$e(o(), i)) return !1;
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
function lt(e, t) {
  for (
    t &= ~bl,
      t &= ~Ii,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function pa(e) {
  if (I & 6) throw Error(S(327));
  cn();
  var t = ei(e, 0);
  if (!(t & 1)) return (ye(e, Y()), null);
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && ((t = r), (n = ul(e, r)));
  }
  if (n === 1) throw ((n = cr), Tt(e, 0), lt(e, t), ye(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pt(e, pe, Ke),
    ye(e, Y()),
    null
  );
}
function es(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    ((I = n), I === 0 && ((yn = Y() + 500), _i && St()));
  }
}
function Mt(e) {
  at !== null && at.tag === 0 && !(I & 6) && cn();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    r = $;
  try {
    if (((Pe.transition = null), ($ = 1), e)) return e();
  } finally {
    (($ = r), (Pe.transition = n), (I = t), !(I & 6) && St());
  }
}
function ts() {
  ((ve = rn.current), A(rn));
}
function Tt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jd(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((zl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && oi());
          break;
        case 3:
          (gn(), A(ge), A(se), Kl());
          break;
        case 5:
          Hl(r);
          break;
        case 4:
          gn();
          break;
        case 13:
          A(H);
          break;
        case 19:
          A(H);
          break;
        case 10:
          Al(r.type._context);
          break;
        case 22:
        case 23:
          ts();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (G = e = mt(e.current, null)),
    (ne = ve = t),
    (X = 0),
    (cr = null),
    (bl = Ii = Ft = 0),
    (pe = Wn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          ((o.next = i), (r.next = l));
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function Mc(e, t) {
  do {
    var n = G;
    try {
      if ((Ml(), (Kr.current = hi), pi)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        pi = !1;
      }
      if (
        (($t = 0),
        (b = J = K = null),
        (Hn = !1),
        (sr = 0),
        (Zl.current = null),
        n === null || n.return === null)
      ) {
        ((X = 1), (cr = t), (G = null));
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            g = d.tag;
          if (!(d.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = ea(l);
          if (y !== null) {
            ((y.flags &= -257),
              ta(y, l, s, o, t),
              y.mode & 1 && qs(o, u, t),
              (t = y),
              (a = u));
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (qs(o, u, t), ns());
              break e;
            }
            a = Error(S(426));
          }
        } else if (V && s.mode & 1) {
          var R = ea(l);
          if (R !== null) {
            (!(R.flags & 65536) && (R.flags |= 256),
              ta(R, l, s, o, t),
              $l(mn(a, s)));
            break e;
          }
        }
        ((o = a = mn(a, s)),
          X !== 4 && (X = 2),
          Wn === null ? (Wn = [o]) : Wn.push(o),
          (o = l));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var h = Sc(o, a, t);
              Ys(o, h);
              break e;
            case 1:
              s = a;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ht === null || !ht.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var m = kc(o, s, t);
                Ys(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Vc(n);
    } catch (k) {
      ((t = k), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ac() {
  var e = gi.current;
  return ((gi.current = hi), e === null ? hi : e);
}
function ns() {
  ((X === 0 || X === 3 || X === 2) && (X = 4),
    q === null || (!(Ft & 268435455) && !(Ii & 268435455)) || lt(q, ne));
}
function vi(e, t) {
  var n = I;
  I |= 2;
  var r = Ac();
  (q !== e || ne !== t) && ((Ke = null), Tt(e, t));
  do
    try {
      xp();
      break;
    } catch (i) {
      Mc(e, i);
    }
  while (!0);
  if ((Ml(), (I = n), (gi.current = r), G !== null)) throw Error(S(261));
  return ((q = null), (ne = 0), X);
}
function xp() {
  for (; G !== null; ) Uc(G);
}
function Sp() {
  for (; G !== null && !Qf(); ) Uc(G);
}
function Uc(e) {
  var t = Hc(e.alternate, e, ve);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Vc(e) : (G = t),
    (Zl.current = null));
}
function Vc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hp(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((X = 6), (G = null));
        return;
      }
    } else if (((n = pp(n, t, ve)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function Pt(e, t, n) {
  var r = $,
    i = Pe.transition;
  try {
    ((Pe.transition = null), ($ = 1), kp(e, t, n, r));
  } finally {
    ((Pe.transition = i), ($ = r));
  }
  return null;
}
function kp(e, t, n, r) {
  do cn();
  while (at !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (nd(e, o),
    e === q && ((G = q = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Kc(qr, function () {
        return (cn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Pe.transition), (Pe.transition = null));
    var l = $;
    $ = 1;
    var s = I;
    ((I |= 4),
      (Zl.current = null),
      mp(e, n),
      zc(n, e),
      Bd(Vo),
      (ti = !!Uo),
      (Vo = Uo = null),
      (e.current = n),
      yp(n),
      Yf(),
      (I = s),
      ($ = l),
      (Pe.transition = o));
  } else e.current = n;
  if (
    (zr && ((zr = !1), (at = e), (yi = i)),
    (o = e.pendingLanes),
    o === 0 && (ht = null),
    Xf(n.stateNode),
    ye(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (mi) throw ((mi = !1), (e = sl), (sl = null), e);
  return (
    yi & 1 && e.tag !== 0 && cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === al ? Qn++ : ((Qn = 0), (al = e))) : (Qn = 0),
    St(),
    null
  );
}
function cn() {
  if (at !== null) {
    var e = Su(yi),
      t = Pe.transition,
      n = $;
    try {
      if (((Pe.transition = null), ($ = 16 > e ? 16 : e), at === null))
        var r = !1;
      else {
        if (((e = at), (at = null), (yi = 0), I & 6)) throw Error(S(331));
        var i = I;
        for (I |= 4, L = e.current; L !== null; ) {
          var o = L,
            l = o.child;
          if (L.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kn(8, d, o);
                  }
                  var g = d.child;
                  if (g !== null) ((g.return = d), (L = g));
                  else
                    for (; L !== null; ) {
                      d = L;
                      var f = d.sibling,
                        y = d.return;
                      if ((jc(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = y), (L = f));
                        break;
                      }
                      L = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var R = x.sibling;
                    ((x.sibling = null), (x = R));
                  } while (x !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) ((l.return = o), (L = l));
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kn(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                ((h.return = o.return), (L = h));
                break e;
              }
              L = o.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          l = L;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) ((p.return = l), (L = p));
          else
            e: for (l = c; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Di(9, s);
                  }
                } catch (k) {
                  Q(s, s.return, k);
                }
              if (s === l) {
                L = null;
                break e;
              }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (L = m));
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((I = i), St(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Ci, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (($ = n), (Pe.transition = t));
    }
  }
  return !1;
}
function ha(e, t, n) {
  ((t = mn(n, t)),
    (t = Sc(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = ce()),
    e !== null && (hr(e, 1, t), ye(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ht === null || !ht.has(r)))
        ) {
          ((e = mn(n, e)),
            (e = kc(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = ce()),
            t !== null && (hr(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Np(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ne & n) === n &&
      (X === 4 || (X === 3 && (ne & 130023424) === ne && 500 > Y() - ql)
        ? Tt(e, 0)
        : (bl |= n)),
    ye(e, t));
}
function Bc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = ce();
  ((e = Ze(e, t)), e !== null && (hr(e, t, n), ye(e, n)));
}
function Ep(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Bc(e, n));
}
function Cp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  (r !== null && r.delete(t), Bc(e, n));
}
var Hc;
Hc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((he = !1), dp(e, t, n));
      he = !!(e.flags & 131072);
    }
  else ((he = !1), V && t.flags & 1048576 && Yu(t, ai, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Qr(e, t), (e = t.pendingProps));
      var i = dn(t, se.current);
      (un(t, n), (i = Ql(null, t, r, e, i, n)));
      var o = Yl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), li(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Vl(t),
            (i.updater = ji),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xo(t, r, e, n),
            (t = qo(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Il(t), ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Pp(r)),
          (e = Te(r, e)),
          i)
        ) {
          case 0:
            t = bo(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Te(r, i)),
        bo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Te(r, i)),
        ia(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lc(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          qu(e, t),
          fi(t, r, null, n));
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = mn(Error(S(423)), t)), (t = oa(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = mn(Error(S(424)), t)), (t = oa(e, t, r, n, i)));
            break e;
          } else
            for (
              we = dt(t.stateNode.containerInfo.firstChild),
                xe = t,
                V = !0,
                De = null,
                n = Zu(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((pn(), r === i)) {
            t = be(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ec(t),
        e === null && Yo(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Bo(r, i) ? (l = null) : o !== null && Bo(r, o) && (t.flags |= 32),
        Cc(e, t),
        ue(e, t, l, n),
        t.child
      );
    case 6:
      return (e === null && Yo(t), null);
    case 13:
      return Pc(e, t, n);
    case 4:
      return (
        Bl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Te(r, i)),
        na(e, t, r, i, n)
      );
    case 7:
      return (ue(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          F(ui, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if ($e(o.value, l)) {
            if (o.children === i.children && !ge.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ((a = Ge(-1, n & -n)), (a.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Go(o.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(S(341));
                ((l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Go(l, n, t),
                  (l = o.sibling));
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    ((o.return = l.return), (l = o));
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        (ue(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (i = Re(i)),
        (r = r(i)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Te(r, t.pendingProps)),
        (i = Te(r.type, i)),
        ra(e, t, r, i, n)
      );
    case 15:
      return Nc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Te(r, i)),
        Qr(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), li(t)) : (e = !1),
        un(t, n),
        xc(t, r, i),
        Xo(t, r, i, n),
        qo(null, t, r, !0, e, n)
      );
    case 19:
      return Rc(e, t, n);
    case 22:
      return Ec(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Kc(e, t) {
  return yu(e, t);
}
function Lp(e, t, n, r) {
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
function Le(e, t, n, r) {
  return new Lp(e, t, n, r);
}
function rs(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Pp(e) {
  if (typeof e == "function") return rs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kl)) return 11;
    if (e === Nl) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
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
function Jr(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) rs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Yt:
        return jt(n.children, i, o, t);
      case Sl:
        ((l = 8), (i |= 8));
        break;
      case xo:
        return (
          (e = Le(12, n, t, i | 2)),
          (e.elementType = xo),
          (e.lanes = o),
          e
        );
      case So:
        return ((e = Le(13, n, t, i)), (e.elementType = So), (e.lanes = o), e);
      case ko:
        return ((e = Le(19, n, t, i)), (e.elementType = ko), (e.lanes = o), e);
      case eu:
        return zi(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ba:
              l = 10;
              break e;
            case qa:
              l = 9;
              break e;
            case kl:
              l = 11;
              break e;
            case Nl:
              l = 14;
              break e;
            case rt:
              ((l = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(l, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function jt(e, t, n, r) {
  return ((e = Le(7, e, r, t)), (e.lanes = n), e);
}
function zi(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = eu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return ((e = Le(6, e, null, t)), (e.lanes = n), e);
}
function ho(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rp(e, t, n, r, i) {
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
    (this.eventTimes = Yi(0)),
    (this.expirationTimes = Yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function is(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new Rp(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Le(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vl(o),
    e
  );
}
function Op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(S(170));
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
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Wu(e, n, t);
  }
  return t;
}
function Qc(e, t, n, r, i, o, l, s, a) {
  return (
    (e = is(n, r, !0, e, i, o, l, s, a)),
    (e.context = Wc(null)),
    (n = e.current),
    (r = ce()),
    (i = gt(n)),
    (o = Ge(r, i)),
    (o.callback = t ?? null),
    pt(n, o, i),
    (e.current.lanes = i),
    hr(e, i, r),
    ye(e, r),
    e
  );
}
function $i(e, t, n, r) {
  var i = t.current,
    o = ce(),
    l = gt(i);
  return (
    (n = Wc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(i, t, l)),
    e !== null && (ze(e, i, l, o), Hr(e, i, l)),
    l
  );
}
function wi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function os(e, t) {
  (ga(e, t), (e = e.alternate) && ga(e, t));
}
function _p() {
  return null;
}
var Yc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ls(e) {
  this._internalRoot = e;
}
Fi.prototype.render = ls.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  $i(e, t, null, null);
};
Fi.prototype.unmount = ls.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Mt(function () {
      $i(null, e, null, null);
    }),
      (t[Xe] = null));
  }
};
function Fi(e) {
  this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
    (ot.splice(n, 0, e), n === 0 && Lu(e));
  }
};
function ss(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ma() {}
function Tp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wi(l);
        o.call(u);
      };
    }
    var l = Qc(t, r, e, 0, null, !1, !1, "", ma);
    return (
      (e._reactRootContainer = l),
      (e[Xe] = l.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = wi(a);
      s.call(u);
    };
  }
  var a = is(e, 0, !1, null, null, !1, !1, "", ma);
  return (
    (e._reactRootContainer = a),
    (e[Xe] = a.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      $i(t, a, n, r);
    }),
    a
  );
}
function Ai(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = wi(l);
        s.call(a);
      };
    }
    $i(t, l, e, i);
  } else l = Tp(n, t, e, i, r);
  return wi(l);
}
ku = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $n(t.pendingLanes);
        n !== 0 &&
          (Ll(t, n | 1), ye(t, Y()), !(I & 6) && ((yn = Y() + 500), St()));
      }
      break;
    case 13:
      (Mt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var i = ce();
          ze(r, e, 1, i);
        }
      }),
        os(e, 1));
  }
};
Pl = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ce();
      ze(t, e, 134217728, n);
    }
    os(e, 134217728);
  }
};
Nu = function (e) {
  if (e.tag === 13) {
    var t = gt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ce();
      ze(n, e, t, r);
    }
    os(e, t);
  }
};
Eu = function () {
  return $;
};
Cu = function (e, t) {
  var n = $;
  try {
    return (($ = e), t());
  } finally {
    $ = n;
  }
};
jo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Co(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Oi(r);
            if (!i) throw Error(S(90));
            (nu(r), Co(r, i));
          }
        }
      }
      break;
    case "textarea":
      iu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && on(e, !!n.multiple, t, !1));
  }
};
fu = es;
du = Mt;
var jp = { usingClientEntryPoint: !1, Events: [mr, Zt, Oi, uu, cu, es] },
  _n = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Dp = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = gu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$r.isDisabled && $r.supportsFiber)
    try {
      ((Ci = $r.inject(Dp)), (Ve = $r));
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ss(t)) throw Error(S(200));
  return Op(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!ss(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = Yc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = is(e, 1, !1, null, null, n, !1, r, i)),
    (e[Xe] = t.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    new ls(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return ((e = gu(t)), (e = e === null ? null : e.stateNode), e);
};
ke.flushSync = function (e) {
  return Mt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Mi(t)) throw Error(S(200));
  return Ai(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!ss(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Yc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Qc(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Xe] = t.current),
    nr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Fi(t);
};
ke.render = function (e, t, n) {
  if (!Mi(t)) throw Error(S(200));
  return Ai(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Mi(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Ai(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Xe] = null));
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = es;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mi(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ai(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function Gc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc);
    } catch (e) {
      console.error(e);
    }
}
(Gc(), (Ga.exports = ke));
var Ip = Ga.exports,
  Jc,
  ya = Ip;
((Jc = ya.createRoot), ya.hydrateRoot);
function zp() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    (Dt(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
  }
}
const va = {};
function fl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (Dt(t[0]) && va[t[0]]) || (Dt(t[0]) && (va[t[0]] = new Date()), zp(...t));
}
const Xc = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        (setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t());
      };
      e.on("initialized", n);
    }
  },
  wa = (e, t, n) => {
    e.loadNamespaces(t, Xc(e, n));
  },
  xa = (e, t, n, r) => {
    (Dt(n) && (n = [n]),
      n.forEach((i) => {
        e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
      }),
      e.loadLanguages(t, Xc(e, r)));
  },
  $p = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
      i = t.options ? t.options.fallbackLng : !1,
      o = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const l = (s, a) => {
      const u = t.services.backendConnector.state[`${s}|${a}`];
      return u === -1 || u === 2;
    };
    return n.bindI18n &&
      n.bindI18n.indexOf("languageChanging") > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !l(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(r, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (l(r, e) && (!i || l(o, e)))
        );
  },
  Fp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
      ? (fl("i18n.languages were undefined or empty", t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
        ? t.hasLoadedNamespace(e, {
            lng: n.lng,
            precheck: (i, o) => {
              if (
                n.bindI18n &&
                n.bindI18n.indexOf("languageChanging") > -1 &&
                i.services.backendConnector.backend &&
                i.isLanguageChangingTo &&
                !o(i.isLanguageChangingTo, e)
              )
                return !1;
            },
          })
        : $p(e, t, n);
  },
  Dt = (e) => typeof e == "string",
  Mp = (e) => typeof e == "object" && e !== null,
  Ap =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Up = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Vp = (e) => Up[e],
  Bp = (e) => e.replace(Ap, Vp);
let dl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Bp,
};
const Hp = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    dl = { ...dl, ...e };
  },
  Kp = () => dl;
let Zc;
const Wp = (e) => {
    Zc = e;
  },
  Qp = () => Zc,
  Yp = {
    type: "3rdParty",
    init(e) {
      (Hp(e.options.react), Wp(e));
    },
  },
  Gp = z.createContext();
class Jp {
  constructor() {
    as(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
}
const Xp = (e, t) => {
    const n = z.useRef();
    return (
      z.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  bc = (e, t, n, r) => e.getFixedT(t, n, r),
  Zp = (e, t, n, r) => z.useCallback(bc(e, t, n, r), [e, t, n, r]),
  Sn = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = z.useContext(Gp) || {},
      o = n || r || Qp();
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new Jp()), !o)) {
      fl(
        "You will need to pass in an i18next instance by using initReactI18next",
      );
      const m = (E, N) =>
          Dt(N)
            ? N
            : Mp(N) && Dt(N.defaultValue)
              ? N.defaultValue
              : Array.isArray(E)
                ? E[E.length - 1]
                : E,
        k = [m, {}, !1];
      return ((k.t = m), (k.i18n = {}), (k.ready = !1), k);
    }
    o.options.react &&
      o.options.react.wait !== void 0 &&
      fl(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
      );
    const l = { ...Kp(), ...o.options.react, ...t },
      { useSuspense: s, keyPrefix: a } = l;
    let u = i || (o.options && o.options.defaultNS);
    ((u = Dt(u) ? [u] : u || ["translation"]),
      o.reportNamespaces.addUsedNamespaces &&
        o.reportNamespaces.addUsedNamespaces(u));
    const d =
        (o.isInitialized || o.initializedStoreOnce) &&
        u.every((m) => Fp(m, o, l)),
      g = Zp(o, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      f = () => g,
      y = () => bc(o, t.lng || null, l.nsMode === "fallback" ? u : u[0], a),
      [v, x] = z.useState(f);
    let R = u.join();
    t.lng && (R = `${t.lng}${R}`);
    const h = Xp(R),
      c = z.useRef(!0);
    (z.useEffect(() => {
      const { bindI18n: m, bindI18nStore: k } = l;
      ((c.current = !0),
        !d &&
          !s &&
          (t.lng
            ? xa(o, t.lng, u, () => {
                c.current && x(y);
              })
            : wa(o, u, () => {
                c.current && x(y);
              })),
        d && h && h !== R && c.current && x(y));
      const E = () => {
        c.current && x(y);
      };
      return (
        m && o && o.on(m, E),
        k && o && o.store.on(k, E),
        () => {
          ((c.current = !1),
            m && o && m.split(" ").forEach((N) => o.off(N, E)),
            k && o && k.split(" ").forEach((N) => o.store.off(N, E)));
        }
      );
    }, [o, R]),
      z.useEffect(() => {
        c.current && d && x(f);
      }, [o, a, d]));
    const p = [v, o, d];
    if (((p.t = v), (p.i18n = o), (p.ready = d), d || (!d && !s))) return p;
    throw new Promise((m) => {
      t.lng ? xa(o, t.lng, u, () => m()) : wa(o, u, () => m());
    });
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bp = {
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
 */ const qp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  kn = (e, t) => {
    const n = z.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: l,
          className: s = "",
          children: a,
          ...u
        },
        d,
      ) =>
        z.createElement(
          "svg",
          {
            ref: d,
            ...bp,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: l ? (Number(o) * 24) / Number(i) : o,
            className: ["lucide", `lucide-${qp(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([g, f]) => z.createElement(g, f)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const eh = kn("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = kn("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sa = kn("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = kn("Globe", [
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
 */ const rh = kn("Layers", [
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
 */ const ih = kn("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ]),
  oh = ({ user: e, onLogout: t }) => {
    const { t: n, i18n: r } = Sn(),
      i = () => {
        const o = r.language === "en" ? "zh" : "en";
        r.changeLanguage(o);
      };
    return w.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: w.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: w.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            w.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                w.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    w.jsx("span", { className: "sr-only", children: "Home" }),
                    w.jsx(rh, { className: "w-7 h-7" }),
                  ],
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: n("inventoryMerge"),
                    }),
                    w.jsxs("p", {
                      className: "text-gray-600 text-base",
                      children: [e.Name, " - ", e.Employer],
                    }),
                  ],
                }),
              ],
            }),
            w.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                w.jsxs("button", {
                  onClick: i,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    w.jsx(nh, { className: "w-5 h-5 text-gray-600" }),
                    w.jsx("span", {
                      className:
                        "hidden sm:inline ml-2 text-base text-gray-700",
                      children: r.language === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                w.jsxs("button", {
                  onClick: t,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    w.jsx(ih, { className: "w-5 h-5" }),
                    w.jsx("span", {
                      className: "hidden sm:inline ml-2 text-base",
                      children: n("logout"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  lh = () => {
    const { t: e } = Sn();
    return w.jsx("div", {
      className: "bg-white h-[40px] mb-2",
      children: w.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: w.jsxs("div", {
          className: "flex space-x-8 border-b border-gray-200",
          children: [
            w.jsx("a", {
              href: "../inventory_manager",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.manage"),
            }),
            w.jsx("a", {
              href: "../inventory_merge",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.merge"),
            }),
            w.jsx("a", {
              href: "../inventory_review",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.review"),
            }),
            w.jsx("a", {
              href: "#",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-blue-500 text-blue-600",
              children: e("tabs.dailyReport"),
            }),
          ],
        }),
      }),
    });
  };
async function sh() {
  const t = await (await fetch("../config.txt")).text();
  return JSON.parse(t);
}
let go = null;
async function ah() {
  return (go || (go = await sh()), go.domain);
}
const He = {
  GET_ALL_INV: "/api/inv_combinelist/get_all_inv",
  DELETE_INV: "/api/inv_combinelist/inv_delete_by_SN",
  EXPORT_INV: "/api/inv_combinelist/get_full_inv_Excel_by_SN",
  NEW_SN: "/api/inv_combinelist/new_IC_SN",
  CREATE_UPDATE: "/api/inv_combinelist/inv_creat_update",
  EXPORT_RECORD: "/api/inv_combinelist/get_record_Excel_by_SN",
  GET_ALL_RECORDS: "/api/inv_combinelist/get_all_records",
  LOGIN: "/api/session/login",
  GET_DAILY_REPORT: "/api/inventory/creat_get_by_CT_TIME_ST_END",
};
let mo = class {
  static logApiRequest(t, n, r) {
    (console.group(`🌐 API Request: ${n} ${t}`),
      console.log("📤 Request Payload:", r || "No payload"),
      console.groupEnd());
  }
  static logApiResponse(t, n) {
    (console.group(`✅ API Response: ${t}`),
      console.log("📥 Response Data:", n),
      console.groupEnd());
  }
  static logApiError(t, n) {
    (console.group(`❌ API Error: ${t}`),
      console.error("Error Details:", n),
      console.groupEnd());
  }
};
class qc {
  static async getBaseUrl() {
    return await ah();
  }
  static async fetchApi(t, n = "POST", r) {
    const o = `${await this.getBaseUrl()}${t}`;
    (console.log(o), mo.logApiRequest(t, n, r));
    try {
      const l = await fetch(o, {
        method: n,
        headers: { "Content-Type": "application/json" },
        body: r ? JSON.stringify(r) : void 0,
      });
      if (!l.ok)
        throw new Error(
          `API call failed with status ${l.status}: ${l.statusText || "Unknown network error"}. Endpoint: ${t}`,
        );
      const s = await l.json();
      if ((mo.logApiResponse(t, s), s.Code !== 200 && s.Code !== void 0))
        throw new Error(s.Result || "API request failed");
      return s;
    } catch (l) {
      throw (mo.logApiError(t, l), l);
    }
  }
  static async login(t, n) {
    return this.fetchApi(He.LOGIN, "POST", { Data: { ID: t, Password: n } });
  }
  static async getAllMergeSheets() {
    return (
      (await this.fetchApi(He.GET_ALL_INV, "POST", { Data: {} })).Data || []
    );
  }
  static async deleteMergeSheet(t) {
    await this.fetchApi(He.DELETE_INV, "POST", { Value: t, Data: {} });
  }
  static async getNewSheetNumber() {
    return (await this.fetchApi(He.NEW_SN, "POST", { Data: {} })).Value;
  }
  static async createUpdateMergeSheet(t) {
    const n = sessionStorage.getItem("user_session"),
      r = n ? JSON.parse(n) : null;
    await this.fetchApi(He.CREATE_UPDATE, "POST", {
      Data: {
        INV_NAME: t.INV_NAME,
        INV_SN: t.INV_SN,
        CT: (r == null ? void 0 : r.Name) || "",
        NOTE: "",
        records_Ary: t.records_Ary || [],
      },
    });
  }
  static async getAllRecords() {
    return (await this.fetchApi(He.GET_ALL_RECORDS, "POST", { Data: {} })).Data;
  }
  static async exportMergeSheet(t) {
    const n = await this.getBaseUrl(),
      r = await fetch(`${n}${He.EXPORT_INV}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Value: t, Data: {} }),
      });
    if (!r.ok) throw new Error("Failed to download Excel file");
    const i = await r.blob(),
      o = window.URL.createObjectURL(i),
      l = document.createElement("a");
    ((l.href = o),
      (l.download = `${t}.xlsx`),
      document.body.appendChild(l),
      l.click(),
      window.URL.revokeObjectURL(o),
      document.body.removeChild(l));
  }
  static async exportRecord(t, n) {
    const r = await this.getBaseUrl();
    console.log({ Value: `${t},${n}`, Data: {} });
    const i = await fetch(`${r}${He.EXPORT_RECORD}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Value: `${t},${n}`, Data: {} }),
    });
    if (!i.ok) throw new Error("Failed to download Excel file");
    console.log(await i);
    const o = await i.blob(),
      l = window.URL.createObjectURL(o),
      s = document.createElement("a");
    ((s.href = l),
      (s.download = `${n} - ${t}.xls`),
      document.body.appendChild(s),
      s.click(),
      window.URL.revokeObjectURL(l),
      document.body.removeChild(s));
  }
  static async getDailyInventoryReport(t, n) {
    return (
      (
        await this.fetchApi(He.GET_DAILY_REPORT, "POST", {
          Data: {},
          Code: 0,
          Result: "",
          Value: `${t},${n}`,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        })
      ).Data || []
    ).filter((o) => o.IC_SN && o.IC_SN.includes("EVD"));
  }
}
const uh = ({ onLoginSuccess: e }) => {
    const { t } = Sn(),
      [n, r] = z.useState(""),
      [i, o] = z.useState(""),
      [l, s] = z.useState("");
    z.useEffect(
      () => (
        document.body.classList.add("modal-open"),
        () => {
          document.body.classList.remove("modal-open");
        }
      ),
      [],
    );
    const a = async (u) => {
      u.preventDefault();
      try {
        const d = await qc.login(n, i);
        d.Code === 200
          ? (sessionStorage.setItem("user_session", JSON.stringify(d.Data)),
            e(d.Data))
          : s(d.Result);
      } catch {
        s(t("loginError"));
      }
    };
    return w.jsx("div", {
      className:
        "fixed inset-0 z-[9999] bg-[#F8F9FF] flex items-center justify-center",
      children: w.jsxs("div", {
        className: "w-full max-w-md p-8",
        children: [
          w.jsx("div", {
            className: "text-center mb-12",
            children: w.jsx("h2", {
              className: "text-3xl font-bold mb-2 text-gray-900",
              children: t("inventoryMerge"),
            }),
          }),
          w.jsx("div", {
            className: "bg-white rounded-lg p-8 w-full max-w-md",
            children: w.jsxs("form", {
              onSubmit: a,
              className: "space-y-6 bg-white rounded-2xl shadow-sm",
              children: [
                w.jsxs("div", {
                  children: [
                    w.jsx("label", {
                      htmlFor: "id",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("userId"),
                    }),
                    w.jsx("input", {
                      id: "id",
                      type: "text",
                      value: n,
                      onChange: (u) => r(u.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_id"),
                    }),
                  ],
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx("label", {
                      htmlFor: "password",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("password"),
                    }),
                    w.jsx("input", {
                      id: "password",
                      type: "password",
                      value: i,
                      onChange: (u) => o(u.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_password"),
                    }),
                  ],
                }),
                l &&
                  w.jsx("div", {
                    className: "text-red-600 text-base",
                    children: l,
                  }),
                w.jsx("button", {
                  type: "submit",
                  className:
                    "block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out font-medium text-lg mt-2",
                  children: t("login"),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ch = () => {
    const { t: e } = Sn();
    return w.jsx("footer", {
      className:
        "fixed bottom-0 w-full bg-white shadow-lg bg-white border-t border-gray-200",
      children: w.jsx("div", {
        className: "mx-auto px-1 sm:px-1 lg:px-2 py-1",
        children: w.jsx("p", {
          className: "text-sm text-center text-gray-600",
          children: e("copyright"),
        }),
      }),
    });
  },
  fh = () => {
    const { t: e } = Sn(),
      [t, n] = z.useState(!1),
      [r, i] = z.useState(""),
      [o, l] = z.useState(""),
      [s, a] = z.useState([]),
      [u, d] = z.useState(!1),
      [g, f] = z.useState(new Set());
    (z.useEffect(() => {
      const c = new Date(),
        p = c.getFullYear(),
        m = String(c.getMonth() + 1).padStart(2, "0"),
        k = String(c.getDate()).padStart(2, "0"),
        E = `${p}-${m}-01`,
        N = `${p}-${m}-${k}`;
      (i(E), l(N));
    }, []),
      z.useEffect(() => {
        r && o && y();
      }, [r, o]));
    const y = async () => {
        d(!0);
        try {
          const c = r.replace(/-/g, "/"),
            p = new Date(o);
          p.setDate(p.getDate() + 1);
          const m = p.getFullYear(),
            k = String(p.getMonth() + 1).padStart(2, "0"),
            E = String(p.getDate()).padStart(2, "0"),
            N = `${m}/${k}/${E}`,
            P = await qc.getDailyInventoryReport(c, N);
          (a(P), f(new Set()));
        } catch (c) {
          console.error("Failed to fetch daily report:", c);
        } finally {
          d(!1);
        }
      },
      v = (c) => {
        f(c ? new Set(s.map((p) => p.GUID)) : new Set());
      },
      x = (c, p) => {
        const m = new Set(g);
        (p ? m.add(c) : m.delete(c), f(m));
      },
      R = () => {
        console.log("Download all selected:", Array.from(g));
      },
      h = (c) => {
        console.log("Download single:", c);
      };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsxs("div", {
          className: "bg-white border border-gray-200 rounded-lg mb-6",
          children: [
            w.jsxs("button", {
              onClick: () => n(!t),
              className:
                "w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors",
              children: [
                w.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    w.jsx(th, { className: "w-5 h-5 text-gray-600" }),
                    w.jsx("span", {
                      className: "text-lg font-semibold text-gray-900",
                      children: e("dailyReport.title"),
                    }),
                  ],
                }),
                w.jsx(eh, {
                  className: `w-5 h-5 text-gray-500 transition-transform duration-200 ${t ? "rotate-180" : ""}`,
                }),
              ],
            }),
            !t &&
              w.jsx("div", {
                className: "px-6 pb-6 border-t border-gray-100",
                children: w.jsxs("div", {
                  className: "pt-6 grid grid-cols-2 gap-8",
                  children: [
                    w.jsxs("div", {
                      children: [
                        w.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: e("dailyReport.startDate"),
                        }),
                        w.jsx("input", {
                          type: "date",
                          value: r,
                          onChange: (c) => i(c.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                    w.jsxs("div", {
                      children: [
                        w.jsx("label", {
                          className:
                            "block text-base font-medium text-gray-700 mb-2",
                          children: e("dailyReport.endDate"),
                        }),
                        w.jsx("input", {
                          type: "date",
                          value: o,
                          onChange: (c) => l(c.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
        w.jsx("div", {
          className: "bg-white mb-6",
          children: u
            ? w.jsx("div", {
                className: "flex justify-center py-12",
                children: w.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                }),
              })
            : w.jsxs("div", {
                className: "",
                children: [
                  w.jsxs("div", {
                    className:
                      "flex items-center justify-between mb-4 py-3 rounded-lg",
                    children: [
                      w.jsxs("div", {
                        className:
                          "flex items-center gap-6 text-sm text-gray-600",
                        children: [
                          w.jsxs("span", {
                            children: [
                              e("dailyReport.totalRecords"),
                              ": ",
                              w.jsx("span", {
                                className: "font-semibold text-gray-900",
                                children: s.length,
                              }),
                            ],
                          }),
                          w.jsxs("span", {
                            children: [
                              e("dailyReport.selectedRecords"),
                              ": ",
                              w.jsx("span", {
                                className: "font-semibold text-gray-900",
                                children: g.size,
                              }),
                            ],
                          }),
                        ],
                      }),
                      w.jsxs("button", {
                        onClick: R,
                        disabled: g.size === 0,
                        className:
                          "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                        children: [
                          w.jsx(Sa, { className: "w-4 h-4" }),
                          e("dailyReport.downloadExcel"),
                        ],
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className:
                      "overflow-x-auto border border-gray-200 rounded-lg",
                    children: [
                      w.jsxs("table", {
                        className: "w-full",
                        children: [
                          w.jsx("thead", {
                            className: "bg-gray-50 border-b border-gray-200",
                            children: w.jsxs("tr", {
                              children: [
                                w.jsx("th", {
                                  className: "px-4 py-3 text-left",
                                  children: w.jsx("input", {
                                    type: "checkbox",
                                    checked:
                                      s.length > 0 && g.size === s.length,
                                    onChange: (c) => v(c.target.checked),
                                    className:
                                      "w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500",
                                  }),
                                }),
                                w.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                  children: e("dailyReport.serialNumber"),
                                }),
                                w.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                  children: e("dailyReport.name"),
                                }),
                                w.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                                  children: e("dailyReport.createDate"),
                                }),
                                w.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-gray-700",
                                  children: e("dailyReport.status"),
                                }),
                                w.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-gray-700",
                                  children: e("dailyReport.actions"),
                                }),
                              ],
                            }),
                          }),
                          w.jsx("tbody", {
                            className: "divide-y divide-gray-200",
                            children: s.map((c) =>
                              w.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-50 transition-colors",
                                  children: [
                                    w.jsx("td", {
                                      className: "px-4 py-3",
                                      children: w.jsx("input", {
                                        type: "checkbox",
                                        checked: g.has(c.GUID),
                                        onChange: (p) =>
                                          x(c.GUID, p.target.checked),
                                        className:
                                          "w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500",
                                      }),
                                    }),
                                    w.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-gray-900",
                                      children: c.IC_SN,
                                    }),
                                    w.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-gray-900",
                                      children: c.IC_NAME,
                                    }),
                                    w.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-gray-600",
                                      children: c.CT_TIME,
                                    }),
                                    w.jsx("td", {
                                      className: "px-4 py-3 text-center",
                                      children: w.jsx("span", {
                                        className: `inline-flex px-2 py-1 text-xs font-medium rounded-full ${c.STATE === "完成" || c.STATE === "Complete" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                                        children: c.STATE,
                                      }),
                                    }),
                                    w.jsx("td", {
                                      className: "px-4 py-3",
                                      children: w.jsx("div", {
                                        className: "flex justify-center",
                                        children: w.jsxs("button", {
                                          onClick: () => h(c.GUID),
                                          className:
                                            "flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                          children: [
                                            w.jsx(Sa, { className: "w-4 h-4" }),
                                            e("dailyReport.download"),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                c.GUID,
                              ),
                            ),
                          }),
                        ],
                      }),
                      s.length === 0 &&
                        w.jsx("div", {
                          className: "text-center py-12 text-gray-500",
                          children: e("dailyReport.noData"),
                        }),
                    ],
                  }),
                ],
              }),
        }),
      ],
    });
  };
function dh() {
  Sn();
  const [e, t] = z.useState(null);
  z.useEffect(() => {
    const r = sessionStorage.getItem("user_session");
    r && t(JSON.parse(r));
  }, []);
  const n = () => {
    (sessionStorage.removeItem("user_session"), t(null));
  };
  return e
    ? w.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [
          w.jsx(oh, { user: e, onLogout: n }),
          w.jsx(lh, {}),
          w.jsx("main", {
            className: "mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-10",
            children: w.jsx(fh, {}),
          }),
          w.jsx(ch, {}),
        ],
      })
    : w.jsx(uh, { onLoginSuccess: t });
}
const _ = (e) => typeof e == "string",
  Tn = () => {
    let e, t;
    const n = new Promise((r, i) => {
      ((e = r), (t = i));
    });
    return ((n.resolve = e), (n.reject = t), n);
  },
  ka = (e) => (e == null ? "" : "" + e),
  ph = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  hh = /###/g,
  Na = (e) => (e && e.indexOf("###") > -1 ? e.replace(hh, ".") : e),
  Ea = (e) => !e || _(e),
  Yn = (e, t, n) => {
    const r = _(t) ? t.split(".") : t;
    let i = 0;
    for (; i < r.length - 1; ) {
      if (Ea(e)) return {};
      const o = Na(r[i]);
      (!e[o] && n && (e[o] = new n()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++i);
    }
    return Ea(e) ? {} : { obj: e, k: Na(r[i]) };
  },
  Ca = (e, t, n) => {
    const { obj: r, k: i } = Yn(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[i] = n;
      return;
    }
    let o = t[t.length - 1],
      l = t.slice(0, t.length - 1),
      s = Yn(e, l, Object);
    for (; s.obj === void 0 && l.length; )
      ((o = `${l[l.length - 1]}.${o}`),
        (l = l.slice(0, l.length - 1)),
        (s = Yn(e, l, Object)),
        s && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0));
    s.obj[`${s.k}.${o}`] = n;
  },
  gh = (e, t, n, r) => {
    const { obj: i, k: o } = Yn(e, t, Object);
    ((i[o] = i[o] || []), i[o].push(n));
  },
  xi = (e, t) => {
    const { obj: n, k: r } = Yn(e, t);
    if (n) return n[r];
  },
  mh = (e, t, n) => {
    const r = xi(e, n);
    return r !== void 0 ? r : xi(t, n);
  },
  ef = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? _(e[r]) ||
            e[r] instanceof String ||
            _(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : ef(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  Kt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var yh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const vh = (e) => (_(e) ? e.replace(/[&<>"'\/]/g, (t) => yh[t]) : e);
class wh {
  constructor(t) {
    ((this.capacity = t),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const xh = [" ", ",", "?", "!", ";"],
  Sh = new wh(20),
  kh = (e, t, n) => {
    ((t = t || ""), (n = n || ""));
    const r = xh.filter((l) => t.indexOf(l) < 0 && n.indexOf(l) < 0);
    if (r.length === 0) return !0;
    const i = Sh.getRegExp(
      `(${r.map((l) => (l === "?" ? "\\?" : l)).join("|")})`,
    );
    let o = !i.test(e);
    if (!o) {
      const l = e.indexOf(n);
      l > 0 && !i.test(e.substring(0, l)) && (o = !0);
    }
    return o;
  },
  pl = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let i = e;
    for (let o = 0; o < r.length; ) {
      if (!i || typeof i != "object") return;
      let l,
        s = "";
      for (let a = o; a < r.length; ++a)
        if ((a !== o && (s += n), (s += r[a]), (l = i[s]), l !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof l) > -1 &&
            a < r.length - 1
          )
            continue;
          o += a - o + 1;
          break;
        }
      i = l;
    }
    return i;
  },
  Si = (e) => e && e.replace("_", "-"),
  Nh = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class ki {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = n.prefix || "i18next:"),
      (this.logger = t || Nh),
      (this.options = n),
      (this.debug = n.debug));
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (_(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new ki(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new ki(this.logger, t)
    );
  }
}
var Ue = new ki();
class Ui {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    (this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((l) => {
        let [s, a] = l;
        for (let u = 0; u < a; u++) s(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((l) => {
          let [s, a] = l;
          for (let u = 0; u < a; u++) s.apply(s, [t, ...r]);
        }));
  }
}
class La extends Ui {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    (super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      l =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1
      ? (s = t.split("."))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : _(r) && o
              ? s.push(...r.split(o))
              : s.push(r)));
    const a = xi(this.data, s);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join("."))),
      a || !l || !_(r)
        ? a
        : pl(this.data && this.data[t] && this.data[t][n], r, o)
    );
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const l =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [t, n];
    (r && (s = s.concat(l ? r.split(l) : r)),
      t.indexOf(".") > -1 && ((s = t.split(".")), (i = n), (n = s[1])),
      this.addNamespaces(n),
      Ca(this.data, s, i),
      o.silent || this.emit("added", t, n, r, i));
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (_(r[o]) || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let l =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, n];
    (t.indexOf(".") > -1 && ((s = t.split(".")), (i = r), (r = n), (n = s[1])),
      this.addNamespaces(n));
    let a = xi(this.data, s) || {};
    (l.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? ef(a, r, o) : (a = { ...a, ...r }),
      Ca(this.data, s, a),
      l.silent || this.emit("added", t, n, r));
  }
  removeResourceBundle(t, n) {
    (this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n));
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var tf = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i));
      }),
      t
    );
  },
};
const Pa = {};
class Ni extends Ui {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      ph(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Ue.create("translator")));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const l = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !kh(t, r, i);
    if (l && !s) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: _(o) ? [o] : o };
      const u = t.split(r);
      ((r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i)));
    }
    return { key: t, namespaces: _(o) ? [o] : o };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: l, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      a = s[s.length - 1],
      u = n.lng || this.language,
      d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (d) {
        const m = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${a}${m}${l}`,
              usedKey: l,
              exactUsedKey: l,
              usedLng: u,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${m}${l}`;
      }
      return i
        ? {
            res: l,
            usedKey: l,
            exactUsedKey: l,
            usedLng: u,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(n),
          }
        : l;
    }
    const g = this.resolve(t, n);
    let f = g && g.res;
    const y = (g && g.usedKey) || l,
      v = (g && g.exactUsedKey) || l,
      x = Object.prototype.toString.apply(f),
      R = ["[object Number]", "[object Function]", "[object RegExp]"],
      h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      c = !this.i18nFormat || this.i18nFormat.handleAsObject,
      p = !_(f) && typeof f != "boolean" && typeof f != "number";
    if (c && f && p && R.indexOf(x) < 0 && !(_(h) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const m = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(y, f, { ...n, ns: s })
          : `key '${l} (${this.language})' returned an object instead of string.`;
        return i
          ? ((g.res = m), (g.usedParams = this.getUsedParamsDetails(n)), g)
          : m;
      }
      if (o) {
        const m = Array.isArray(f),
          k = m ? [] : {},
          E = m ? v : y;
        for (const N in f)
          if (Object.prototype.hasOwnProperty.call(f, N)) {
            const P = `${E}${o}${N}`;
            ((k[N] = this.translate(P, { ...n, joinArrays: !1, ns: s })),
              k[N] === P && (k[N] = f[N]));
          }
        f = k;
      }
    } else if (c && _(h) && Array.isArray(f))
      ((f = f.join(h)), f && (f = this.extendTranslation(f, t, n, r)));
    else {
      let m = !1,
        k = !1;
      const E = n.count !== void 0 && !_(n.count),
        N = Ni.hasDefaultValue(n),
        P = E ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        B =
          n.ordinal && E
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        j =
          E &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        ee =
          (j && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${P}`] ||
          n[`defaultValue${B}`] ||
          n.defaultValue;
      (!this.isValidLookup(f) && N && ((m = !0), (f = ee)),
        this.isValidLookup(f) || ((k = !0), (f = l)));
      const kt =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          k
            ? void 0
            : f,
        et = N && ee !== f && this.options.updateMissing;
      if (k || m || et) {
        if (
          (this.logger.log(
            et ? "updateKey" : "missingKey",
            u,
            a,
            l,
            et ? ee : f,
          ),
          o)
        ) {
          const C = this.resolve(l, { ...n, keySeparator: !1 });
          C &&
            C.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let Nt = [];
        const tt = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && tt && tt[0])
          for (let C = 0; C < tt.length; C++) Nt.push(tt[C]);
        else
          this.options.saveMissingTo === "all"
            ? (Nt = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : Nt.push(n.lng || this.language);
        const Bt = (C, O, T) => {
          const U = N && T !== f ? T : kt;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(C, a, O, U, et, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(C, a, O, U, et, n),
            this.emit("missingKey", C, a, O, f));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? Nt.forEach((C) => {
                const O = this.pluralResolver.getSuffixes(C, n);
                (j &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  O.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  O.push(`${this.options.pluralSeparator}zero`),
                  O.forEach((T) => {
                    Bt([C], l + T, n[`defaultValue${T}`] || ee);
                  }));
              })
            : Bt(Nt, l, ee));
      }
      ((f = this.extendTranslation(f, t, n, g, r)),
        k &&
          f === l &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${a}:${l}`),
        (k || m) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${l}` : l,
                m ? f : void 0,
              ))
            : (f = this.options.parseMissingKeyHandler(f))));
    }
    return i
      ? ((g.res = f), (g.usedParams = this.getUsedParamsDetails(n)), g)
      : f;
  }
  extendTranslation(t, n, r, i, o) {
    var l = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        _(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let g = r.replace && !_(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (t = this.interpolator.interpolate(
          t,
          g,
          r.lng || this.language || i.usedLng,
          r,
        )),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          y = f && f.length;
        d < y && (r.nest = !1);
      }
      (!r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var f = arguments.length, y = new Array(f), v = 0;
                v < f;
                v++
              )
                y[v] = arguments[v];
              return o && o[0] === y[0] && !r.context
                ? (l.logger.warn(
                    `It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`,
                  ),
                  null)
                : l.translate(...y, n);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset());
    }
    const s = r.postProcess || this.options.postProcess,
      a = _(s) ? [s] : s;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = tf.handle(
          a,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      l,
      s;
    return (
      _(t) && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          d = u.key;
        i = d;
        let g = u.namespaces;
        this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && !_(n.count),
          y =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (_(n.context) || typeof n.context == "number") &&
            n.context !== "",
          x = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        g.forEach((R) => {
          this.isValidLookup(r) ||
            ((s = R),
            !Pa[`${x[0]}-${R}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((Pa[`${x[0]}-${R}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            x.forEach((h) => {
              if (this.isValidLookup(r)) return;
              l = h;
              const c = [d];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(c, d, h, R, n);
              else {
                let m;
                f && (m = this.pluralResolver.getSuffix(h, n.count, n));
                const k = `${this.options.pluralSeparator}zero`,
                  E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (c.push(d + m),
                    n.ordinal &&
                      m.indexOf(E) === 0 &&
                      c.push(d + m.replace(E, this.options.pluralSeparator)),
                    y && c.push(d + k)),
                  v)
                ) {
                  const N = `${d}${this.options.contextSeparator}${n.context}`;
                  (c.push(N),
                    f &&
                      (c.push(N + m),
                      n.ordinal &&
                        m.indexOf(E) === 0 &&
                        c.push(N + m.replace(E, this.options.pluralSeparator)),
                      y && c.push(N + k)));
                }
              }
              let p;
              for (; (p = c.pop()); )
                this.isValidLookup(r) ||
                  ((o = p), (r = this.getResource(h, R, p, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: l, usedNS: s }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && !_(t.replace);
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const yo = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class Ra {
  constructor(t) {
    ((this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Ue.create("languageUtils")));
  }
  getScriptPartFromCode(t) {
    if (((t = Si(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Si(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (_(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let i = Intl.getCanonicalLocales(t)[0];
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i))
            return i;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = yo(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== "sgn" &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = yo(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = yo(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                i.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      _(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (l) => {
        l &&
          (this.isSupportedCode(l)
            ? i.push(l)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${l}`,
              ));
      };
    return (
      _(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : _(t) && o(this.formatLanguageCode(t)),
      r.forEach((l) => {
        i.indexOf(l) < 0 && o(this.formatLanguageCode(l));
      }),
      i
    );
  }
}
let Eh = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Ch = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const Lh = ["v1", "v2", "v3"],
  Ph = ["v4"],
  Oa = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Rh = () => {
    const e = {};
    return (
      Eh.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: Ch[t.fc] };
        });
      }),
      e
    );
  };
class Oh {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = t),
      (this.options = n),
      (this.logger = Ue.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        Ph.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
        )),
      (this.rules = Rh()),
      (this.pluralRulesCache = {}));
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = Si(t === "dev" ? "en" : t),
        i = n.ordinal ? "ordinal" : "cardinal",
        o = JSON.stringify({ cleanedCode: r, type: i });
      if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
      let l;
      try {
        l = new Intl.PluralRules(r, { type: i });
      } catch {
        if (!t.match(/-|_/)) return;
        const a = this.languageUtils.getLanguagePartFromCode(t);
        l = this.getRule(a, n);
      }
      return ((this.pluralRulesCache[o] = l), l);
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => Oa[i] - Oa[o])
            .map(
              (i) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`,
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
          ? `_plural_${i.toString()}`
          : o()
      : this.options.compatibilityJSON === "v2" ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? o()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString();
  }
  shouldUseIntlApi() {
    return !Lh.includes(this.options.compatibilityJSON);
  }
}
const _a = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = mh(e, t, n);
    return (
      !o && i && _(n) && ((o = pl(e, n, r)), o === void 0 && (o = pl(t, n, r))),
      o
    );
  },
  vo = (e) => e.replace(/\$/g, "$$$$");
class _h {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = Ue.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t));
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: l,
      suffix: s,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: g,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: v,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: R,
      maxReplaces: h,
      alwaysFormat: c,
    } = t.interpolation;
    ((this.escape = n !== void 0 ? n : vh),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? Kt(o) : l || "{{"),
      (this.suffix = s ? Kt(s) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = d ? "" : g || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : d || ""),
      (this.nestingPrefix = f ? Kt(f) : y || Kt("$t(")),
      (this.nestingSuffix = v ? Kt(v) : x || Kt(")")),
      (this.nestingOptionsSeparator = R || ","),
      (this.maxReplaces = h || 1e3),
      (this.alwaysFormat = c !== void 0 ? c : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    ((this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      )));
  }
  interpolate(t, n, r, i) {
    let o, l, s;
    const a =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (y) => {
        if (y.indexOf(this.formatSeparator) < 0) {
          const h = _a(
            n,
            a,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(h, void 0, r, { ...i, ...n, interpolationkey: y })
            : h;
        }
        const v = y.split(this.formatSeparator),
          x = v.shift().trim(),
          R = v.join(this.formatSeparator).trim();
        return this.format(
          _a(
            n,
            a,
            x,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          R,
          r,
          { ...i, ...n, interpolationkey: x },
        );
      };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      g =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (y) => vo(y) },
        {
          regex: this.regexp,
          safeValue: (y) => (this.escapeValue ? vo(this.escape(y)) : vo(y)),
        },
      ].forEach((y) => {
        for (s = 0; (o = y.regex.exec(t)); ) {
          const v = o[1].trim();
          if (((l = u(v)), l === void 0))
            if (typeof d == "function") {
              const R = d(t, o, i);
              l = _(R) ? R : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, v)) l = "";
            else if (g) {
              l = o[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`,
              ),
                (l = ""));
          else !_(l) && !this.useRawValueToEscape && (l = ka(l));
          const x = y.safeValue(l);
          if (
            ((t = t.replace(o[0], x)),
            g
              ? ((y.regex.lastIndex += l.length),
                (y.regex.lastIndex -= o[0].length))
              : (y.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      l;
    const s = (a, u) => {
      const d = this.nestingOptionsSeparator;
      if (a.indexOf(d) < 0) return a;
      const g = a.split(new RegExp(`${d}[ ]*{`));
      let f = `{${g[1]}`;
      ((a = g[0]), (f = this.interpolate(f, l)));
      const y = f.match(/'/g),
        v = f.match(/"/g);
      ((y && y.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        ((l = JSON.parse(f)), u && (l = { ...u, ...l }));
      } catch (x) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            x,
          ),
          `${a}${d}${f}`
        );
      }
      return (
        l.defaultValue &&
          l.defaultValue.indexOf(this.prefix) > -1 &&
          delete l.defaultValue,
        a
      );
    };
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let a = [];
      ((l = { ...r }),
        (l = l.replace && !_(l.replace) ? l.replace : l),
        (l.applyPostProcessor = !1),
        delete l.defaultValue);
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const d = i[1].split(this.formatSeparator).map((g) => g.trim());
        ((i[1] = d.shift()), (a = d), (u = !0));
      }
      if (((o = n(s.call(this, i[1].trim(), l), l)), o && i[0] === t && !_(o)))
        return o;
      (_(o) || (o = ka(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = "")),
        u &&
          (o = a.reduce(
            (d, g) =>
              this.format(d, g, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim(),
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0));
    }
    return t;
  }
}
const Th = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const i = r[1].substring(0, r[1].length - 1);
      t === "currency" && i.indexOf(":") < 0
        ? n.currency || (n.currency = i.trim())
        : t === "relativetime" && i.indexOf(":") < 0
          ? n.range || (n.range = i.trim())
          : i.split(";").forEach((l) => {
              if (l) {
                const [s, ...a] = l.split(":"),
                  u = a
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  d = s.trim();
                (n[d] || (n[d] = u),
                  u === "false" && (n[d] = !1),
                  u === "true" && (n[d] = !0),
                  isNaN(u) || (n[d] = parseInt(u, 10)));
              }
            });
    }
    return { formatName: t, formatOptions: n };
  },
  Wt = (e) => {
    const t = {};
    return (n, r, i) => {
      let o = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 });
      const l = r + JSON.stringify(o);
      let s = t[l];
      return (s || ((s = e(Si(r), i)), (t[l] = s)), s(n));
    };
  };
class jh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = Ue.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: Wt((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        currency: Wt((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (o) => i.format(o);
        }),
        datetime: Wt((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        relativetime: Wt((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => i.format(o, r.range || "day");
        }),
        list: Wt((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (o) => i.format(o);
        }),
      }),
      this.init(t));
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Wt(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = n.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf("(") > 1 &&
      o[0].indexOf(")") < 0 &&
      o.find((s) => s.indexOf(")") > -1)
    ) {
      const s = o.findIndex((a) => a.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, s)].join(this.formatSeparator);
    }
    return o.reduce((s, a) => {
      const { formatName: u, formatOptions: d } = Th(a);
      if (this.formats[u]) {
        let g = s;
        try {
          const f =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            y = f.locale || f.lng || i.locale || i.lng || r;
          g = this.formats[u](s, y, { ...d, ...i, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
const Dh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Ih extends Ui {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Ue.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i));
  }
  queueLoad(t, n, r, i) {
    const o = {},
      l = {},
      s = {},
      a = {};
    return (
      t.forEach((u) => {
        let d = !0;
        (n.forEach((g) => {
          const f = `${u}|${g}`;
          !r.reload && this.store.hasResourceBundle(u, g)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? l[f] === void 0 && (l[f] = !0)
                : ((this.state[f] = 1),
                  (d = !1),
                  l[f] === void 0 && (l[f] = !0),
                  o[f] === void 0 && (o[f] = !0),
                  a[g] === void 0 && (a[g] = !0)));
        }),
          d || (s[u] = !0));
      }),
      (Object.keys(o).length || Object.keys(l).length) &&
        this.queue.push({
          pending: l,
          pendingCount: Object.keys(l).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(l),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      o = i[0],
      l = i[1];
    (n && this.emit("failedLoading", o, l, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, l, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0));
    const s = {};
    (this.queue.forEach((a) => {
      (gh(a.loaded, [o], l),
        Dh(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            s[u] || (s[u] = {});
            const d = a.loaded[u];
            d.length &&
              d.forEach((g) => {
                s[u][g] === void 0 && (s[u][g] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback()));
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done)));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      l = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return l(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: l,
      });
      return;
    }
    this.readingCalls++;
    const s = (u, d) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const g = this.waitingReads.shift();
          this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (u && d && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, l);
          }, o);
          return;
        }
        l(u, d);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((d) => s(null, d)).catch(s)
          : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return a(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        i && i()
      );
    (_(t) && (t = this.languageUtils.toResolveHierarchy(t)), _(n) && (n = [n]));
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return (o.pending.length || i(), null);
    o.toLoad.forEach((l) => {
      this.loadOne(l);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      i = r[0],
      o = r[1];
    this.read(i, o, "read", void 0, void 0, (l, s) => {
      (l &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          l,
        ),
        !l &&
          s &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, s),
        this.loaded(t, l, s));
    });
  }
  saveMissing(t, n, r, i, o) {
    let l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...l, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let d;
            (u.length === 5 ? (d = u(t, n, r, i, a)) : (d = u(t, n, r, i)),
              d && typeof d.then == "function"
                ? d.then((g) => s(null, g)).catch(s)
                : s(null, d));
          } catch (d) {
            s(d);
          }
        else u(t, n, r, i, s, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const Ta = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        _(e[1]) && (t.defaultValue = e[1]),
        _(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  ja = (e) => (
    _(e.ns) && (e.ns = [e.ns]),
    _(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    _(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  Fr = () => {},
  zh = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class fr extends Ui {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = ja(t)),
      (this.services = {}),
      (this.logger = Ue),
      (this.modules = { external: [] }),
      zh(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return (this.init(t, n), this);
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (_(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0])));
    const i = Ta();
    ((this.options = { ...i, ...this.options, ...ja(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator));
    const o = (d) => (d ? (typeof d == "function" ? new d() : d) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? Ue.init(o(this.modules.logger), this.options)
        : Ue.init(null, this.options);
      let d;
      this.modules.formatter
        ? (d = this.modules.formatter)
        : typeof Intl < "u" && (d = jh);
      const g = new Ra(this.options);
      this.store = new La(this.options.resources, this.options);
      const f = this.services;
      ((f.logger = Ue),
        (f.resourceStore = this.store),
        (f.languageUtils = g),
        (f.pluralResolver = new Oh(g, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        d &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((f.formatter = o(d)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter,
          ))),
        (f.interpolator = new _h(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new Ih(
          o(this.modules.backend),
          f.resourceStore,
          f,
          this.options,
        )),
        f.backendConnector.on("*", function (y) {
          for (
            var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), R = 1;
            R < v;
            R++
          )
            x[R - 1] = arguments[R];
          t.emit(y, ...x);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = o(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = o(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Ni(this.services, this.options)),
        this.translator.on("*", function (y) {
          for (
            var v = arguments.length, x = new Array(v > 1 ? v - 1 : 0), R = 1;
            R < v;
            R++
          )
            x[R - 1] = arguments[R];
          t.emit(y, ...x);
        }),
        this.modules.external.forEach((y) => {
          y.init && y.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Fr),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const d = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((d) => {
        this[d] = function () {
          return t.store[d](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((d) => {
        this[d] = function () {
          return (t.store[d](...arguments), t);
        };
      }));
    const a = Tn(),
      u = () => {
        const d = (g, f) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            a.resolve(f),
            r(g, f));
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return d(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, d);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fr;
    const i = _(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        l = (s) => {
          if (!s || s === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
          });
        };
      (i
        ? l(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => l(a)),
        this.options.preload && this.options.preload.forEach((s) => l(s)),
        this.services.backendConnector.load(o, this.options.ns, (s) => {
          (!s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(s));
        }));
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = Tn();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Fr),
      this.services.backendConnector.reload(t, n, (o) => {
        (i.resolve(), r(o));
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && tf.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Tn();
    this.emit("languageChanging", t);
    const o = (a) => {
        ((this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a));
      },
      l = (a, u) => {
        (u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            }));
      },
      s = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const u = _(a)
          ? a
          : this.services.languageUtils.getBestMatchFromCodes(a);
        (u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (d) => {
            l(d, u);
          }));
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(s)
            : this.services.languageDetector.detect(s)
          : s(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function (l, s) {
      let a;
      if (typeof s != "object") {
        for (
          var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), g = 2;
          g < u;
          g++
        )
          d[g - 2] = arguments[g];
        a = i.options.overloadTranslationOptionHandler([l, s].concat(d));
      } else a = { ...s };
      ((a.lng = a.lng || o.lng),
        (a.lngs = a.lngs || o.lngs),
        (a.ns = a.ns || o.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix));
      const f = i.options.keySeparator || ".";
      let y;
      return (
        a.keyPrefix && Array.isArray(l)
          ? (y = l.map((v) => `${a.keyPrefix}${f}${v}`))
          : (y = a.keyPrefix ? `${a.keyPrefix}${f}${l}` : l),
        i.t(y, a)
      );
    };
    return (
      _(t) ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const l = (s, a) => {
      const u = this.services.backendConnector.state[`${s}|${a}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, l);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (l(r, t) && (!i || l(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Tn();
    return this.options.ns
      ? (_(t) && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          (r.resolve(), n && n(i));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Tn();
    _(t) && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter(
        (l) =>
          i.indexOf(l) < 0 && this.services.languageUtils.isSupportedCode(l),
      );
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((l) => {
          (r.resolve(), n && n(l));
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new Ra(Ta());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new fr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new fr(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((s) => {
        o[s] = this[s];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new La(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Ni(o.services, i)),
      o.translator.on("*", function (s) {
        for (
          var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), d = 1;
          d < a;
          d++
        )
          u[d - 1] = arguments[d];
        o.emit(s, ...u);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const ae = fr.createInstance();
ae.createInstance = fr.createInstance;
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
function $h(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dr(e) {
  "@babel/helpers - typeof";
  return (
    (dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    dr(e)
  );
}
function Fh(e, t) {
  if (dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Mh(e) {
  var t = Fh(e, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function Ah(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Mh(r.key), r));
  }
}
function Uh(e, t, n) {
  return (
    t && Ah(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var nf = [],
  Vh = nf.forEach,
  Bh = nf.slice;
function Hh(e) {
  return (
    Vh.call(Bh.call(arguments, 1), function (t) {
      if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
var Da = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Kh = function (t, n, r) {
    var i = r || {};
    i.path = i.path || "/";
    var o = encodeURIComponent(n),
      l = "".concat(t, "=").concat(o);
    if (i.maxAge > 0) {
      var s = i.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      l += "; Max-Age=".concat(Math.floor(s));
    }
    if (i.domain) {
      if (!Da.test(i.domain)) throw new TypeError("option domain is invalid");
      l += "; Domain=".concat(i.domain);
    }
    if (i.path) {
      if (!Da.test(i.path)) throw new TypeError("option path is invalid");
      l += "; Path=".concat(i.path);
    }
    if (i.expires) {
      if (typeof i.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      l += "; Expires=".concat(i.expires.toUTCString());
    }
    if (
      (i.httpOnly && (l += "; HttpOnly"),
      i.secure && (l += "; Secure"),
      i.sameSite)
    ) {
      var a =
        typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
      switch (a) {
        case !0:
          l += "; SameSite=Strict";
          break;
        case "lax":
          l += "; SameSite=Lax";
          break;
        case "strict":
          l += "; SameSite=Strict";
          break;
        case "none":
          l += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return l;
  },
  Ia = {
    create: function (t, n, r, i) {
      var o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      (r &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        i && (o.domain = i),
        (document.cookie = Kh(t, encodeURIComponent(n), o)));
    },
    read: function (t) {
      for (
        var n = "".concat(t, "="), r = document.cookie.split(";"), i = 0;
        i < r.length;
        i++
      ) {
        for (var o = r[i]; o.charAt(0) === " "; ) o = o.substring(1, o.length);
        if (o.indexOf(n) === 0) return o.substring(n.length, o.length);
      }
      return null;
    },
    remove: function (t) {
      this.create(t, "", -1);
    },
  },
  Wh = {
    name: "cookie",
    lookup: function (t) {
      var n;
      if (t.lookupCookie && typeof document < "u") {
        var r = Ia.read(t.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupCookie &&
        typeof document < "u" &&
        Ia.create(
          n.lookupCookie,
          t,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions,
        );
    },
  },
  Qh = {
    name: "querystring",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        for (
          var i = r.substring(1), o = i.split("&"), l = 0;
          l < o.length;
          l++
        ) {
          var s = o[l].indexOf("=");
          if (s > 0) {
            var a = o[l].substring(0, s);
            a === t.lookupQuerystring && (n = o[l].substring(s + 1));
          }
        }
      }
      return n;
    },
  },
  jn = null,
  za = function () {
    if (jn !== null) return jn;
    try {
      jn = window !== "undefined" && window.localStorage !== null;
      var t = "i18next.translate.boo";
      (window.localStorage.setItem(t, "foo"),
        window.localStorage.removeItem(t));
    } catch {
      jn = !1;
    }
    return jn;
  },
  Yh = {
    name: "localStorage",
    lookup: function (t) {
      var n;
      if (t.lookupLocalStorage && za()) {
        var r = window.localStorage.getItem(t.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupLocalStorage &&
        za() &&
        window.localStorage.setItem(n.lookupLocalStorage, t);
    },
  },
  Dn = null,
  $a = function () {
    if (Dn !== null) return Dn;
    try {
      Dn = window !== "undefined" && window.sessionStorage !== null;
      var t = "i18next.translate.boo";
      (window.sessionStorage.setItem(t, "foo"),
        window.sessionStorage.removeItem(t));
    } catch {
      Dn = !1;
    }
    return Dn;
  },
  Gh = {
    name: "sessionStorage",
    lookup: function (t) {
      var n;
      if (t.lookupSessionStorage && $a()) {
        var r = window.sessionStorage.getItem(t.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupSessionStorage &&
        $a() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, t);
    },
  },
  Jh = {
    name: "navigator",
    lookup: function (t) {
      var n = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        (navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language));
      }
      return n.length > 0 ? n : void 0;
    },
  },
  Xh = {
    name: "htmlTag",
    lookup: function (t) {
      var n,
        r =
          t.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  Zh = {
    name: "path",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof t.lookupFromPathIndex == "number") {
            if (typeof r[t.lookupFromPathIndex] != "string") return;
            n = r[t.lookupFromPathIndex].replace("/", "");
          } else n = r[0].replace("/", "");
      }
      return n;
    },
  },
  bh = {
    name: "subdomain",
    lookup: function (t) {
      var n =
          typeof t.lookupFromSubdomainIndex == "number"
            ? t.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
          );
      if (r) return r[n];
    },
  },
  rf = !1;
try {
  (document.cookie, (rf = !0));
} catch {}
var of = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
rf || of.splice(1, 1);
function qh() {
  return {
    order: of,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (t) {
      return t;
    },
  };
}
var lf = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ($h(this, e),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(t, n));
  }
  return Uh(e, [
    {
      key: "init",
      value: function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        ((this.services = n || { languageUtils: {} }),
          (this.options = Hh(r, this.options || {}, qh())),
          typeof this.options.convertDetectedLanguage == "string" &&
            this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
            (this.options.convertDetectedLanguage = function (o) {
              return o.replace("-", "_");
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = i),
          this.addDetector(Wh),
          this.addDetector(Qh),
          this.addDetector(Yh),
          this.addDetector(Gh),
          this.addDetector(Jh),
          this.addDetector(Xh),
          this.addDetector(Zh),
          this.addDetector(bh));
      },
    },
    {
      key: "addDetector",
      value: function (n) {
        return ((this.detectors[n.name] = n), this);
      },
    },
    {
      key: "detect",
      value: function (n) {
        var r = this;
        n || (n = this.options.order);
        var i = [];
        return (
          n.forEach(function (o) {
            if (r.detectors[o]) {
              var l = r.detectors[o].lookup(r.options);
              (l && typeof l == "string" && (l = [l]), l && (i = i.concat(l)));
            }
          }),
          (i = i.map(function (o) {
            return r.options.convertDetectedLanguage(o);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? i
            : i.length > 0
              ? i[0]
              : null
        );
      },
    },
    {
      key: "cacheUserLanguage",
      value: function (n, r) {
        var i = this;
        (r || (r = this.options.caches),
          r &&
            ((this.options.excludeCacheFor &&
              this.options.excludeCacheFor.indexOf(n) > -1) ||
              r.forEach(function (o) {
                i.detectors[o] &&
                  i.detectors[o].cacheUserLanguage(n, i.options);
              })));
      },
    },
  ]);
})();
lf.type = "languageDetector";
const eg = {
  en: {
    translation: {
      inventoryMerge: "Daily Inventory",
      company: "Hongsen Technology",
      totalMergeSheets: "Total Merge Sheets",
      createNewMergeSheet: "Create New Merge Sheet",
      createNew: "Create New",
      cancel: "Cancel",
      create: "Create",
      enterSheetName: "Enter sheet name",
      records: "List count",
      loading: "Loading",
      searchPlaceholder: "Search by NAME or INV-NUMBER...",
      tabs: {
        manage: "Management",
        merge: "Merge",
        review: "Review",
        report: "Report",
        final: "Final",
        dailyReport: "Daily Inventory Report",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "Logout",
      edit: "Edit",
      download: "Download",
      delete: "Delete",
      login: "Login",
      userId: "ID",
      password: "Password",
      loginError: "Login failed. Please try again.",
      login_id: "Enter account",
      login_password: "Enter password",
      mergeSheetBasicInfo: "Merge Sheet Basic Info",
      totalRecords: "Total Records",
      deleteSelected: "Delete Selected",
      addRecord: "Add Record",
      columns: {
        sn: "SN",
        name: "NAME",
        type: "TYPE",
        export: "Export",
        delete: "Delete",
        creator: "Creator",
        createTime: "Create Time",
      },
      recordTypes: {
        inventory: "Inventory Record",
        consumption: "Consumption Record",
        review: "Review Record",
      },
      searchFields: { name: "Record Name", number: "Record Number" },
      searchButton: "Search",
      enterRecordName: "Enter record name",
      enterRecordNumber: "Enter record number",
      selectAll: "Select All",
      deselectAll: "Deselect All",
      addSelected: "Add Selected",
      noRecordsFound: "No related records found",
      searchPrompt: "Search for records to add...",
      recordNumber: "Record Number...",
      name: "Name",
      creator: "Creator",
      createTime: "Create Time",
      dailyReport: {
        title: "Time Range",
        startDate: "Start Date",
        endDate: "End Date",
        totalRecords: "Total Records",
        selectedRecords: "Selected Records",
        downloadExcel: "Download Excel",
        serialNumber: "Serial Number",
        name: "Name",
        createDate: "Create Date",
        status: "Status",
        actions: "Actions",
        download: "Download",
        noData: "No data available",
      },
    },
  },
  zh: {
    translation: {
      inventoryMerge: "每日盤點報表",
      company: "鴻森智能科技",
      totalMergeSheets: "合併單數量",
      createNewMergeSheet: "建立新合併單",
      createNew: "建立新的",
      cancel: "取消",
      create: "建立",
      enterSheetName: "輸入合併單名稱",
      records: "單據數量",
      loading: "載入中",
      searchPlaceholder: "請輸入合併單名稱或單號...",
      tabs: {
        manage: "管理",
        merge: "合併",
        review: "覆盤",
        report: "報表",
        final: "定盤",
        dailyReport: "每日盤點報表",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "登出",
      edit: "編輯",
      download: "下載",
      delete: "刪除",
      login: "登入",
      userId: "帳號",
      password: "密碼",
      loginError: "登入失敗，請重試。",
      login_id: "請輸入帳號",
      login_password: "請輸入密碼",
      mergeSheetBasicInfo: "合併單基本資訊",
      totalRecords: "單據數量",
      deleteSelected: "刪除勾選項目",
      addRecord: "新增盤點單",
      columns: {
        sn: "單號",
        name: "名稱",
        type: "類型",
        export: "匯出",
        delete: "刪除",
        creator: "建表人",
        createTime: "建表時間",
      },
      recordTypes: {
        inventory: "盤點單",
        consumption: "消耗單",
        review: "覆盤單",
      },
      searchFields: { name: "名稱", number: "單號" },
      searchButton: "搜尋",
      enterRecordName: "請輸入名稱...",
      enterRecordNumber: "請輸入單號...",
      selectAll: "全選",
      deselectAll: "取消全選",
      addSelected: "新增已選項目",
      noRecordsFound: "查無相關單據",
      searchPrompt: "請搜尋要新增的單據",
      recordNumber: "單號",
      name: "名稱",
      creator: "建表人",
      createTime: "建表時間",
      dailyReport: {
        title: "時間範圍",
        startDate: "開始日期",
        endDate: "結束日期",
        totalRecords: "總筆數",
        selectedRecords: "選取筆數",
        downloadExcel: "下載 Excel",
        serialNumber: "單號",
        name: "名稱",
        createDate: "建立日期",
        status: "狀態",
        actions: "操作",
        download: "下載",
        noData: "無資料",
      },
    },
  },
};
ae.use(lf)
  .use(Yp)
  .init({
    resources: eg,
    fallbackLng: "zh",
    interpolation: { escapeValue: !1 },
  });
Jc(document.getElementById("root")).render(
  w.jsx(z.StrictMode, { children: w.jsx(dh, {}) }),
);
