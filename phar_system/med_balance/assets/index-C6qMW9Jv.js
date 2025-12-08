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
var os = { exports: {} },
  cl = {},
  is = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir = Symbol.for("react.element"),
  Cc = Symbol.for("react.portal"),
  _c = Symbol.for("react.fragment"),
  jc = Symbol.for("react.strict_mode"),
  Pc = Symbol.for("react.profiler"),
  Tc = Symbol.for("react.provider"),
  Dc = Symbol.for("react.context"),
  Lc = Symbol.for("react.forward_ref"),
  zc = Symbol.for("react.suspense"),
  Rc = Symbol.for("react.memo"),
  Ic = Symbol.for("react.lazy"),
  Yi = Symbol.iterator;
function Oc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yi && e[Yi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var us = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ss = Object.assign,
  as = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = as),
    (this.updater = n || us);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cs() {}
cs.prototype = gn.prototype;
function Jo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = as),
    (this.updater = n || us);
}
var qo = (Jo.prototype = new cs());
qo.constructor = Jo;
ss(qo, gn.prototype);
qo.isPureReactComponent = !0;
var Xi = Array.isArray,
  ds = Object.prototype.hasOwnProperty,
  bo = { current: null },
  fs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ps(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ds.call(t, r) && !fs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ir,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bo.current,
  };
}
function Mc(e, t) {
  return {
    $$typeof: ir,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ir;
}
function Fc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zi = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fc("" + e.key)
    : t.toString(36);
}
function Pr(e, t, n, r, l) {
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
          case ir:
          case Cc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Tl(i, 0) : r),
      Xi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Zi, "$&/") + "/"),
          Pr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ei(l) &&
            (l = Mc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Zi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Xi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Tl(o, u);
      i += Pr(o, t, n, s, l);
    }
  else if (((s = Oc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Tl(o, u++)), (i += Pr(o, t, n, s, l));
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
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Uc(e) {
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
var de = { current: null },
  Tr = { transition: null },
  $c = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Tr,
    ReactCurrentOwner: bo,
  };
function ms() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
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
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ei(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = gn;
z.Fragment = _c;
z.Profiler = Pc;
z.PureComponent = Jo;
z.StrictMode = jc;
z.Suspense = zc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $c;
z.act = ms;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ss({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = bo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ds.call(t, s) &&
        !fs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ir, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Dc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Tc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = ps;
z.createFactory = function (e) {
  var t = ps.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Lc, render: e };
};
z.isValidElement = ei;
z.lazy = function (e) {
  return { $$typeof: Ic, _payload: { _status: -1, _result: e }, _init: Uc };
};
z.memo = function (e, t) {
  return { $$typeof: Rc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
z.unstable_act = ms;
z.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
z.useContext = function (e) {
  return de.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
z.useId = function () {
  return de.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return de.current.useRef(e);
};
z.useState = function (e) {
  return de.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return de.current.useTransition();
};
z.version = "18.3.1";
is.exports = z;
var P = is.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ac = P,
  Vc = Symbol.for("react.element"),
  Hc = Symbol.for("react.fragment"),
  Bc = Object.prototype.hasOwnProperty,
  Wc = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function hs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Bc.call(t, r) && !Qc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Vc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Wc.current,
  };
}
cl.Fragment = Hc;
cl.jsx = hs;
cl.jsxs = hs;
os.exports = cl;
var p = os.exports,
  gs = { exports: {} },
  Ne = {},
  ys = { exports: {} },
  vs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, T) {
    var D = C.length;
    C.push(T);
    e: for (; 0 < D; ) {
      var B = (D - 1) >>> 1,
        Z = C[B];
      if (0 < l(Z, T)) (C[B] = T), (C[D] = Z), (D = B);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var T = C[0],
      D = C.pop();
    if (D !== T) {
      C[0] = D;
      e: for (var B = 0, Z = C.length, Ht = Z >>> 1; B < Ht; ) {
        var Qe = 2 * (B + 1) - 1,
          Sn = C[Qe],
          pe = Qe + 1,
          lt = C[pe];
        if (0 > l(Sn, D))
          pe < Z && 0 > l(lt, Sn)
            ? ((C[B] = lt), (C[pe] = D), (B = pe))
            : ((C[B] = Sn), (C[Qe] = D), (B = Qe));
        else if (pe < Z && 0 > l(lt, D)) (C[B] = lt), (C[pe] = D), (B = pe);
        else break e;
      }
    }
    return T;
  }
  function l(C, T) {
    var D = C.sortIndex - T.sortIndex;
    return D !== 0 ? D : C.id - T.id;
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
    w = !1,
    S = !1,
    k = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(C) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= C)
        r(c), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(c);
    }
  }
  function y(C) {
    if (((k = !1), f(C), !S))
      if (n(s) !== null) (S = !0), At(v);
      else {
        var T = n(c);
        T !== null && Vt(y, T.startTime - C);
      }
  }
  function v(C, T) {
    (S = !1), k && ((k = !1), d(j), (j = -1)), (w = !0);
    var D = m;
    try {
      for (
        f(T), g = n(s);
        g !== null && (!(g.expirationTime > T) || (C && !xe()));

      ) {
        var B = g.callback;
        if (typeof B == "function") {
          (g.callback = null), (m = g.priorityLevel);
          var Z = B(g.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Z == "function" ? (g.callback = Z) : g === n(s) && r(s),
            f(T);
        } else r(s);
        g = n(s);
      }
      if (g !== null) var Ht = !0;
      else {
        var Qe = n(c);
        Qe !== null && Vt(y, Qe.startTime - T), (Ht = !1);
      }
      return Ht;
    } finally {
      (g = null), (m = D), (w = !1);
    }
  }
  var N = !1,
    E = null,
    j = -1,
    H = 5,
    L = -1;
  function xe() {
    return !(e.unstable_now() - L < H);
  }
  function rt() {
    if (E !== null) {
      var C = e.unstable_now();
      L = C;
      var T = !0;
      try {
        T = E(!0, C);
      } finally {
        T ? Ct() : ((N = !1), (E = null));
      }
    } else N = !1;
  }
  var Ct;
  if (typeof a == "function")
    Ct = function () {
      a(rt);
    };
  else if (typeof MessageChannel < "u") {
    var wn = new MessageChannel(),
      jl = wn.port2;
    (wn.port1.onmessage = rt),
      (Ct = function () {
        jl.postMessage(null);
      });
  } else
    Ct = function () {
      R(rt, 0);
    };
  function At(C) {
    (E = C), N || ((N = !0), Ct());
  }
  function Vt(C, T) {
    j = R(function () {
      C(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), At(v));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var D = m;
      m = T;
      try {
        return C();
      } finally {
        m = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, T) {
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
      var D = m;
      m = C;
      try {
        return T();
      } finally {
        m = D;
      }
    }),
    (e.unstable_scheduleCallback = function (C, T, D) {
      var B = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? B + D : B))
          : (D = B),
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
        (Z = D + Z),
        (C = {
          id: h++,
          callback: T,
          priorityLevel: C,
          startTime: D,
          expirationTime: Z,
          sortIndex: -1,
        }),
        D > B
          ? ((C.sortIndex = D),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (k ? (d(j), (j = -1)) : (k = !0), Vt(y, D - B)))
          : ((C.sortIndex = Z), t(s, C), S || w || ((S = !0), At(v))),
        C
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (C) {
      var T = m;
      return function () {
        var D = m;
        m = T;
        try {
          return C.apply(this, arguments);
        } finally {
          m = D;
        }
      };
    });
})(vs);
ys.exports = vs;
var Kc = ys.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gc = P,
  Ee = Kc;
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
var xs = new Set(),
  Bn = {};
function Ut(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) xs.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  lo = Object.prototype.hasOwnProperty,
  Yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ji = {},
  qi = {};
function Xc(e) {
  return lo.call(qi, e)
    ? !0
    : lo.call(Ji, e)
    ? !1
    : Yc.test(e)
    ? (qi[e] = !0)
    : ((Ji[e] = !0), !1);
}
function Zc(e, t, n, r) {
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
function Jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Zc(e, t, n, r)) return !0;
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
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ti = /[\-:]([a-z])/g;
function ni(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ti, ni);
    le[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ti, ni);
    le[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ti, ni);
  le[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ri(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jc(t, n, l, r) && (n = null),
    r || l === null
      ? Xc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var nt = Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  li = Symbol.for("react.strict_mode"),
  oo = Symbol.for("react.profiler"),
  ws = Symbol.for("react.provider"),
  Ss = Symbol.for("react.context"),
  oi = Symbol.for("react.forward_ref"),
  io = Symbol.for("react.suspense"),
  uo = Symbol.for("react.suspense_list"),
  ii = Symbol.for("react.memo"),
  it = Symbol.for("react.lazy"),
  ks = Symbol.for("react.offscreen"),
  bi = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bi && e[bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  Dl;
function Dn(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = (t && t[1]) || "";
    }
  return (
    `
` +
    Dl +
    e
  );
}
var Ll = !1;
function zl(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
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
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function qc(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zl(e.type, !1)), e;
    case 11:
      return (e = zl(e.type.render, !1)), e;
    case 1:
      return (e = zl(e.type, !0)), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Wt:
      return "Portal";
    case oo:
      return "Profiler";
    case li:
      return "StrictMode";
    case io:
      return "Suspense";
    case uo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ss:
        return (e.displayName || "Context") + ".Consumer";
      case ws:
        return (e._context.displayName || "Context") + ".Provider";
      case oi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ii:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || "Memo"
        );
      case it:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function bc(e) {
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
      return so(t);
    case 8:
      return t === li ? "StrictMode" : "Mode";
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
function wt(e) {
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
function Es(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ed(e) {
  var t = Es(e) ? "checked" : "value",
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
function pr(e) {
  e._valueTracker || (e._valueTracker = ed(e));
}
function Ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Es(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function eu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Cs(e, t) {
  (t = t.checked), t != null && ri(e, "checked", t, !1);
}
function co(e, t) {
  Cs(e, t);
  var n = wt(t.value),
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
    ? fo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fo(e, t.type, wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
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
function fo(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wt(n) };
}
function _s(e, t) {
  var n = wt(t.value),
    r = wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function js(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? js(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mr,
  Ps = (function (e) {
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
        mr = mr || document.createElement("div"),
          mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
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
  td = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  td.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]);
  });
});
function Ts(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ds(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ts(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var nd = K(
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
function ho(e, t) {
  if (t) {
    if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function go(e, t) {
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
var yo = null;
function ui(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vo = null,
  rn = null,
  ln = null;
function lu(e) {
  if ((e = ar(e))) {
    if (typeof vo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = hl(t)), vo(e.stateNode, e.type, t));
  }
}
function Ls(e) {
  rn ? (ln ? ln.push(e) : (ln = [e])) : (rn = e);
}
function zs() {
  if (rn) {
    var e = rn,
      t = ln;
    if (((ln = rn = null), lu(e), t)) for (e = 0; e < t.length; e++) lu(t[e]);
  }
}
function Rs(e, t) {
  return e(t);
}
function Is() {}
var Rl = !1;
function Os(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return Rs(e, t, n);
  } finally {
    (Rl = !1), (rn !== null || ln !== null) && (Is(), zs());
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
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
var xo = !1;
if (qe)
  try {
    var En = {};
    Object.defineProperty(En, "passive", {
      get: function () {
        xo = !0;
      },
    }),
      window.addEventListener("test", En, En),
      window.removeEventListener("test", En, En);
  } catch {
    xo = !1;
  }
function rd(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var On = !1,
  Vr = null,
  Hr = !1,
  wo = null,
  ld = {
    onError: function (e) {
      (On = !0), (Vr = e);
    },
  };
function od(e, t, n, r, l, o, i, u, s) {
  (On = !1), (Vr = null), rd.apply(ld, arguments);
}
function id(e, t, n, r, l, o, i, u, s) {
  if ((od.apply(this, arguments), On)) {
    if (On) {
      var c = Vr;
      (On = !1), (Vr = null);
    } else throw Error(x(198));
    Hr || ((Hr = !0), (wo = c));
  }
}
function $t(e) {
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
function Ms(e) {
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
function ou(e) {
  if ($t(e) !== e) throw Error(x(188));
}
function ud(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $t(e)), t === null)) throw Error(x(188));
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
        if (o === n) return ou(l), e;
        if (o === r) return ou(l), t;
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
function Fs(e) {
  return (e = ud(e)), e !== null ? Us(e) : null;
}
function Us(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Us(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $s = Ee.unstable_scheduleCallback,
  iu = Ee.unstable_cancelCallback,
  sd = Ee.unstable_shouldYield,
  ad = Ee.unstable_requestPaint,
  X = Ee.unstable_now,
  cd = Ee.unstable_getCurrentPriorityLevel,
  si = Ee.unstable_ImmediatePriority,
  As = Ee.unstable_UserBlockingPriority,
  Br = Ee.unstable_NormalPriority,
  dd = Ee.unstable_LowPriority,
  Vs = Ee.unstable_IdlePriority,
  dl = null,
  Be = null;
function fd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : hd,
  pd = Math.log,
  md = Math.LN2;
function hd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pd(e) / md) | 0)) | 0;
}
var hr = 64,
  gr = 4194304;
function zn(e) {
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
function Wr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = zn(u)) : ((o &= i), o !== 0 && (r = zn(o)));
  } else (i = n & ~l), i !== 0 ? (r = zn(i)) : o !== 0 && (r = zn(o));
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
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function gd(e, t) {
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
function yd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Me(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = gd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function So(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hs() {
  var e = hr;
  return (hr <<= 1), !(hr & 4194240) && (hr = 64), e;
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ur(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function vd(e, t) {
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
    var l = 31 - Me(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ai(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Bs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ws,
  ci,
  Qs,
  Ks,
  Gs,
  ko = !1,
  yr = [],
  ft = null,
  pt = null,
  mt = null,
  Kn = new Map(),
  Gn = new Map(),
  st = [],
  xd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function Nn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ar(t)), t !== null && ci(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function wd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = Nn(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = Nn(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (mt = Nn(mt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kn.set(o, Nn(Kn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Gn.set(o, Nn(Gn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ys(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ms(n)), t !== null)) {
          (e.blockedOn = t),
            Gs(e.priority, function () {
              Qs(n);
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
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (yo = r), n.target.dispatchEvent(r), (yo = null);
    } else return (t = ar(n)), t !== null && ci(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function su(e, t, n) {
  Dr(e) && n.delete(t);
}
function Sd() {
  (ko = !1),
    ft !== null && Dr(ft) && (ft = null),
    pt !== null && Dr(pt) && (pt = null),
    mt !== null && Dr(mt) && (mt = null),
    Kn.forEach(su),
    Gn.forEach(su);
}
function Cn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ko ||
      ((ko = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Sd)));
}
function Yn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < yr.length) {
    Cn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Cn(ft, e),
      pt !== null && Cn(pt, e),
      mt !== null && Cn(mt, e),
      Kn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < st.length;
    n++
  )
    (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
    Ys(n), n.blockedOn === null && st.shift();
}
var on = nt.ReactCurrentBatchConfig,
  Qr = !0;
function kd(e, t, n, r) {
  var l = O,
    o = on.transition;
  on.transition = null;
  try {
    (O = 1), di(e, t, n, r);
  } finally {
    (O = l), (on.transition = o);
  }
}
function Ed(e, t, n, r) {
  var l = O,
    o = on.transition;
  on.transition = null;
  try {
    (O = 4), di(e, t, n, r);
  } finally {
    (O = l), (on.transition = o);
  }
}
function di(e, t, n, r) {
  if (Qr) {
    var l = Eo(e, t, n, r);
    if (l === null) Wl(e, t, r, Kr, n), uu(e, r);
    else if (wd(l, e, t, n, r)) r.stopPropagation();
    else if ((uu(e, r), t & 4 && -1 < xd.indexOf(e))) {
      for (; l !== null; ) {
        var o = ar(l);
        if (
          (o !== null && Ws(o),
          (o = Eo(e, t, n, r)),
          o === null && Wl(e, t, r, Kr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, t, r, null, n);
  }
}
var Kr = null;
function Eo(e, t, n, r) {
  if (((Kr = null), (e = ui(r)), (e = Pt(e)), e !== null))
    if (((t = $t(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ms(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Kr = e), null;
}
function Xs(e) {
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
      switch (cd()) {
        case si:
          return 1;
        case As:
          return 4;
        case Br:
        case dd:
          return 16;
        case Vs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  fi = null,
  Lr = null;
function Zs() {
  if (Lr) return Lr;
  var e,
    t = fi,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Lr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vr() {
  return !0;
}
function au() {
  return !1;
}
function Ce(e) {
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
        ? vr
        : au),
      (this.isPropagationStopped = au),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vr));
      },
      persist: function () {},
      isPersistent: vr,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pi = Ce(yn),
  sr = K({}, yn, { view: 0, detail: 0 }),
  Nd = Ce(sr),
  Ol,
  Ml,
  _n,
  fl = K({}, sr, {
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
    getModifierState: mi,
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
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Ol = e.screenX - _n.screenX), (Ml = e.screenY - _n.screenY))
              : (Ml = Ol = 0),
            (_n = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  cu = Ce(fl),
  Cd = K({}, fl, { dataTransfer: 0 }),
  _d = Ce(Cd),
  jd = K({}, sr, { relatedTarget: 0 }),
  Fl = Ce(jd),
  Pd = K({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Td = Ce(Pd),
  Dd = K({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ld = Ce(Dd),
  zd = K({}, yn, { data: 0 }),
  du = Ce(zd),
  Rd = {
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
  Id = {
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
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Md(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Od[e]) ? !!t[e] : !1;
}
function mi() {
  return Md;
}
var Fd = K({}, sr, {
    key: function (e) {
      if (e.key) {
        var t = Rd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Id[e.keyCode] || "Unidentified"
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
    getModifierState: mi,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ud = Ce(Fd),
  $d = K({}, fl, {
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
  fu = Ce($d),
  Ad = K({}, sr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi,
  }),
  Vd = Ce(Ad),
  Hd = K({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bd = Ce(Hd),
  Wd = K({}, fl, {
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
  Qd = Ce(Wd),
  Kd = [9, 13, 27, 32],
  hi = qe && "CompositionEvent" in window,
  Mn = null;
qe && "documentMode" in document && (Mn = document.documentMode);
var Gd = qe && "TextEvent" in window && !Mn,
  Js = qe && (!hi || (Mn && 8 < Mn && 11 >= Mn)),
  pu = " ",
  mu = !1;
function qs(e, t) {
  switch (e) {
    case "keyup":
      return Kd.indexOf(t.keyCode) !== -1;
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
function bs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function Yd(e, t) {
  switch (e) {
    case "compositionend":
      return bs(t);
    case "keypress":
      return t.which !== 32 ? null : ((mu = !0), pu);
    case "textInput":
      return (e = t.data), e === pu && mu ? null : e;
    default:
      return null;
  }
}
function Xd(e, t) {
  if (Kt)
    return e === "compositionend" || (!hi && qs(e, t))
      ? ((e = Zs()), (Lr = fi = ct = null), (Kt = !1), e)
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
      return Js && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zd = {
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
function hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zd[e.type] : t === "textarea";
}
function ea(e, t, n, r) {
  Ls(r),
    (t = Gr(t, "onChange")),
    0 < t.length &&
      ((n = new pi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fn = null,
  Xn = null;
function Jd(e) {
  da(e, 0);
}
function pl(e) {
  var t = Xt(e);
  if (Ns(t)) return e;
}
function qd(e, t) {
  if (e === "change") return t;
}
var ta = !1;
if (qe) {
  var Ul;
  if (qe) {
    var $l = "oninput" in document;
    if (!$l) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"),
        ($l = typeof gu.oninput == "function");
    }
    Ul = $l;
  } else Ul = !1;
  ta = Ul && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  Fn && (Fn.detachEvent("onpropertychange", na), (Xn = Fn = null));
}
function na(e) {
  if (e.propertyName === "value" && pl(Xn)) {
    var t = [];
    ea(t, Xn, e, ui(e)), Os(Jd, t);
  }
}
function bd(e, t, n) {
  e === "focusin"
    ? (yu(), (Fn = t), (Xn = n), Fn.attachEvent("onpropertychange", na))
    : e === "focusout" && yu();
}
function ef(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pl(Xn);
}
function tf(e, t) {
  if (e === "click") return pl(t);
}
function nf(e, t) {
  if (e === "input" || e === "change") return pl(t);
}
function rf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : rf;
function Zn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = vu(e);
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
    n = vu(n);
  }
}
function ra(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ra(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function la() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function gi(e) {
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
function lf(e) {
  var t = la(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ra(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gi(n)) {
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
          (l = xu(n, o));
        var i = xu(n, r);
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
var of = qe && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  No = null,
  Un = null,
  Co = !1;
function wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Co ||
    Gt == null ||
    Gt !== Ar(r) ||
    ((r = Gt),
    "selectionStart" in r && gi(r)
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
    (Un && Zn(Un, r)) ||
      ((Un = r),
      (r = Gr(No, "onSelect")),
      0 < r.length &&
        ((t = new pi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  Al = {},
  oa = {};
qe &&
  ((oa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function ml(e) {
  if (Al[e]) return Al[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in oa) return (Al[e] = t[n]);
  return e;
}
var ia = ml("animationend"),
  ua = ml("animationiteration"),
  sa = ml("animationstart"),
  aa = ml("transitionend"),
  ca = new Map(),
  Su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kt(e, t) {
  ca.set(e, t), Ut(t, [e]);
}
for (var Vl = 0; Vl < Su.length; Vl++) {
  var Hl = Su[Vl],
    uf = Hl.toLowerCase(),
    sf = Hl[0].toUpperCase() + Hl.slice(1);
  kt(uf, "on" + sf);
}
kt(ia, "onAnimationEnd");
kt(ua, "onAnimationIteration");
kt(sa, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(aa, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  af = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function ku(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), id(r, t, void 0, e), (e.currentTarget = null);
}
function da(e, t) {
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
          ku(l, u, c), (o = s);
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
          ku(l, u, c), (o = s);
        }
    }
  }
  if (Hr) throw ((e = wo), (Hr = !1), (wo = null), e);
}
function U(e, t) {
  var n = t[Do];
  n === void 0 && (n = t[Do] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fa(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), fa(n, e, r, t);
}
var wr = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[wr]) {
    (e[wr] = !0),
      xs.forEach(function (n) {
        n !== "selectionchange" && (af.has(n) || Bl(n, !1, e), Bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wr] || ((t[wr] = !0), Bl("selectionchange", !1, t));
  }
}
function fa(e, t, n, r) {
  switch (Xs(t)) {
    case 1:
      var l = kd;
      break;
    case 4:
      l = Ed;
      break;
    default:
      l = di;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !xo ||
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
function Wl(e, t, n, r, l) {
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
          if (((i = Pt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Os(function () {
    var c = o,
      h = ui(n),
      g = [];
    e: {
      var m = ca.get(e);
      if (m !== void 0) {
        var w = pi,
          S = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ud;
            break;
          case "focusin":
            (S = "focus"), (w = Fl);
            break;
          case "focusout":
            (S = "blur"), (w = Fl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Fl;
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
            w = cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = _d;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Vd;
            break;
          case ia:
          case ua:
          case sa:
            w = Td;
            break;
          case aa:
            w = Bd;
            break;
          case "scroll":
            w = Nd;
            break;
          case "wheel":
            w = Qd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = fu;
        }
        var k = (t & 4) !== 0,
          R = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              d !== null && ((y = Qn(a, d)), y != null && k.push(qn(a, y, f)))),
            R)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((m = new w(m, S, null, n, h)), g.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== yo &&
            (S = n.relatedTarget || n.fromElement) &&
            (Pt(S) || S[be]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = c),
              (S = S ? Pt(S) : null),
              S !== null &&
                ((R = $t(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = c)),
          w !== S)
        ) {
          if (
            ((k = cu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = fu),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (R = w == null ? m : Xt(w)),
            (f = S == null ? m : Xt(S)),
            (m = new k(y, a + "leave", w, n, h)),
            (m.target = R),
            (m.relatedTarget = f),
            (y = null),
            Pt(h) === c &&
              ((k = new k(d, a + "enter", S, n, h)),
              (k.target = f),
              (k.relatedTarget = R),
              (y = k)),
            (R = y),
            w && S)
          )
            t: {
              for (k = w, d = S, a = 0, f = k; f; f = Bt(f)) a++;
              for (f = 0, y = d; y; y = Bt(y)) f++;
              for (; 0 < a - f; ) (k = Bt(k)), a--;
              for (; 0 < f - a; ) (d = Bt(d)), f--;
              for (; a--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Bt(k)), (d = Bt(d));
              }
              k = null;
            }
          else k = null;
          w !== null && Eu(g, m, w, k, !1),
            S !== null && R !== null && Eu(g, R, S, k, !0);
        }
      }
      e: {
        if (
          ((m = c ? Xt(c) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var v = qd;
        else if (hu(m))
          if (ta) v = nf;
          else {
            v = ef;
            var N = bd;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (v = tf);
        if (v && (v = v(e, c))) {
          ea(g, v, n, h);
          break e;
        }
        N && N(e, m, c),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            fo(m, "number", m.value);
      }
      switch (((N = c ? Xt(c) : window), e)) {
        case "focusin":
          (hu(N) || N.contentEditable === "true") &&
            ((Gt = N), (No = c), (Un = null));
          break;
        case "focusout":
          Un = No = Gt = null;
          break;
        case "mousedown":
          Co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Co = !1), wu(g, n, h);
          break;
        case "selectionchange":
          if (of) break;
        case "keydown":
        case "keyup":
          wu(g, n, h);
      }
      var E;
      if (hi)
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
        Kt
          ? qs(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Js &&
          n.locale !== "ko" &&
          (Kt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Kt && (E = Zs())
            : ((ct = h),
              (fi = "value" in ct ? ct.value : ct.textContent),
              (Kt = !0))),
        (N = Gr(c, j)),
        0 < N.length &&
          ((j = new du(j, e, null, n, h)),
          g.push({ event: j, listeners: N }),
          E ? (j.data = E) : ((E = bs(n)), E !== null && (j.data = E)))),
        (E = Gd ? Yd(e, n) : Xd(e, n)) &&
          ((c = Gr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new du("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: c }),
            (h.data = E)));
    }
    da(g, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qn(e, n)),
      o != null && r.unshift(qn(e, o, l)),
      (o = Qn(e, t)),
      o != null && r.push(qn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Eu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Qn(n, o)), s != null && i.unshift(qn(n, s, u)))
        : l || ((s = Qn(n, o)), s != null && i.push(qn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var cf = /\r\n?/g,
  df = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cf,
      `
`
    )
    .replace(df, "");
}
function Sr(e, t, n) {
  if (((t = Nu(t)), Nu(e) !== t && n)) throw Error(x(425));
}
function Yr() {}
var _o = null,
  jo = null;
function Po(e, t) {
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
var To = typeof setTimeout == "function" ? setTimeout : void 0,
  ff = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cu = typeof Promise == "function" ? Promise : void 0,
  pf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cu < "u"
      ? function (e) {
          return Cu.resolve(null).then(e).catch(mf);
        }
      : To;
function mf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ht(e) {
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
function _u(e) {
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
var vn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + vn,
  bn = "__reactProps$" + vn,
  be = "__reactContainer$" + vn,
  Do = "__reactEvents$" + vn,
  hf = "__reactListeners$" + vn,
  gf = "__reactHandles$" + vn;
function Pt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ar(e) {
  return (
    (e = e[He] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function hl(e) {
  return e[bn] || null;
}
var Lo = [],
  Zt = -1;
function Et(e) {
  return { current: e };
}
function $(e) {
  0 > Zt || ((e.current = Lo[Zt]), (Lo[Zt] = null), Zt--);
}
function F(e, t) {
  Zt++, (Lo[Zt] = e.current), (e.current = t);
}
var St = {},
  se = Et(St),
  ge = Et(!1),
  Rt = St;
function cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
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
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Xr() {
  $(ge), $(se);
}
function ju(e, t, n) {
  if (se.current !== St) throw Error(x(168));
  F(se, t), F(ge, n);
}
function pa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, bc(e) || "Unknown", l));
  return K({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (Rt = se.current),
    F(se, e),
    F(ge, ge.current),
    !0
  );
}
function Pu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = pa(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(ge),
      $(se),
      F(se, e))
    : $(ge),
    F(ge, n);
}
var Ye = null,
  gl = !1,
  Kl = !1;
function ma(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function yf(e) {
  (gl = !0), ma(e);
}
function Nt() {
  if (!Kl && Ye !== null) {
    Kl = !0;
    var e = 0,
      t = O;
    try {
      var n = Ye;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (gl = !1);
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), $s(si, Nt), l);
    } finally {
      (O = t), (Kl = !1);
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  Jr = null,
  qr = 0,
  _e = [],
  je = 0,
  It = null,
  Xe = 1,
  Ze = "";
function _t(e, t) {
  (Jt[qt++] = qr), (Jt[qt++] = Jr), (Jr = e), (qr = t);
}
function ha(e, t, n) {
  (_e[je++] = Xe), (_e[je++] = Ze), (_e[je++] = It), (It = e);
  var r = Xe;
  e = Ze;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Xe = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Ze = o + e);
  } else (Xe = (1 << o) | (n << l) | r), (Ze = e);
}
function yi(e) {
  e.return !== null && (_t(e, 1), ha(e, 1, 0));
}
function vi(e) {
  for (; e === Jr; )
    (Jr = Jt[--qt]), (Jt[qt] = null), (qr = Jt[--qt]), (Jt[qt] = null);
  for (; e === It; )
    (It = _e[--je]),
      (_e[je] = null),
      (Ze = _e[--je]),
      (_e[je] = null),
      (Xe = _e[--je]),
      (_e[je] = null);
}
var ke = null,
  Se = null,
  V = !1,
  Oe = null;
function ga(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Tu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Se = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Xe, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (V) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Tu(e, t)) {
        if (zo(e)) throw Error(x(418));
        t = ht(n.nextSibling);
        var r = ke;
        t && Tu(e, t)
          ? ga(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ke = e));
      }
    } else {
      if (zo(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (ke = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function kr(e) {
  if (e !== ke) return !1;
  if (!V) return Du(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (zo(e)) throw (ya(), Error(x(418)));
    for (; t; ) ga(e, t), (t = ht(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ya() {
  for (var e = Se; e; ) e = ht(e.nextSibling);
}
function dn() {
  (Se = ke = null), (V = !1);
}
function xi(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var vf = nt.ReactCurrentBatchConfig;
function jn(e, t, n) {
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
function Er(e, t) {
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
function Lu(e) {
  var t = e._init;
  return t(e._payload);
}
function va(e) {
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
    return (d = xt(d, a)), (d.index = 0), (d.sibling = null), d;
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
  function u(d, a, f, y) {
    return a === null || a.tag !== 6
      ? ((a = bl(f, d.mode, y)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function s(d, a, f, y) {
    var v = f.type;
    return v === Qt
      ? h(d, a, f.props.children, y, f.key)
      : a !== null &&
        (a.elementType === v ||
          (typeof v == "object" &&
            v !== null &&
            v.$$typeof === it &&
            Lu(v) === a.type))
      ? ((y = l(a, f.props)), (y.ref = jn(d, a, f)), (y.return = d), y)
      : ((y = $r(f.type, f.key, f.props, null, d.mode, y)),
        (y.ref = jn(d, a, f)),
        (y.return = d),
        y);
  }
  function c(d, a, f, y) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = eo(f, d.mode, y)), (a.return = d), a)
      : ((a = l(a, f.children || [])), (a.return = d), a);
  }
  function h(d, a, f, y, v) {
    return a === null || a.tag !== 7
      ? ((a = zt(f, d.mode, y, v)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function g(d, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = bl("" + a, d.mode, f)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case fr:
          return (
            (f = $r(a.type, a.key, a.props, null, d.mode, f)),
            (f.ref = jn(d, null, a)),
            (f.return = d),
            f
          );
        case Wt:
          return (a = eo(a, d.mode, f)), (a.return = d), a;
        case it:
          var y = a._init;
          return g(d, y(a._payload), f);
      }
      if (Ln(a) || kn(a))
        return (a = zt(a, d.mode, f, null)), (a.return = d), a;
      Er(d, a);
    }
    return null;
  }
  function m(d, a, f, y) {
    var v = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return v !== null ? null : u(d, a, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case fr:
          return f.key === v ? s(d, a, f, y) : null;
        case Wt:
          return f.key === v ? c(d, a, f, y) : null;
        case it:
          return (v = f._init), m(d, a, v(f._payload), y);
      }
      if (Ln(f) || kn(f)) return v !== null ? null : h(d, a, f, y, null);
      Er(d, f);
    }
    return null;
  }
  function w(d, a, f, y, v) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(f) || null), u(a, d, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case fr:
          return (d = d.get(y.key === null ? f : y.key) || null), s(a, d, y, v);
        case Wt:
          return (d = d.get(y.key === null ? f : y.key) || null), c(a, d, y, v);
        case it:
          var N = y._init;
          return w(d, a, f, N(y._payload), v);
      }
      if (Ln(y) || kn(y)) return (d = d.get(f) || null), h(a, d, y, v, null);
      Er(a, y);
    }
    return null;
  }
  function S(d, a, f, y) {
    for (
      var v = null, N = null, E = a, j = (a = 0), H = null;
      E !== null && j < f.length;
      j++
    ) {
      E.index > j ? ((H = E), (E = null)) : (H = E.sibling);
      var L = m(d, E, f[j], y);
      if (L === null) {
        E === null && (E = H);
        break;
      }
      e && E && L.alternate === null && t(d, E),
        (a = o(L, a, j)),
        N === null ? (v = L) : (N.sibling = L),
        (N = L),
        (E = H);
    }
    if (j === f.length) return n(d, E), V && _t(d, j), v;
    if (E === null) {
      for (; j < f.length; j++)
        (E = g(d, f[j], y)),
          E !== null &&
            ((a = o(E, a, j)), N === null ? (v = E) : (N.sibling = E), (N = E));
      return V && _t(d, j), v;
    }
    for (E = r(d, E); j < f.length; j++)
      (H = w(E, d, j, f[j], y)),
        H !== null &&
          (e && H.alternate !== null && E.delete(H.key === null ? j : H.key),
          (a = o(H, a, j)),
          N === null ? (v = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        E.forEach(function (xe) {
          return t(d, xe);
        }),
      V && _t(d, j),
      v
    );
  }
  function k(d, a, f, y) {
    var v = kn(f);
    if (typeof v != "function") throw Error(x(150));
    if (((f = v.call(f)), f == null)) throw Error(x(151));
    for (
      var N = (v = null), E = a, j = (a = 0), H = null, L = f.next();
      E !== null && !L.done;
      j++, L = f.next()
    ) {
      E.index > j ? ((H = E), (E = null)) : (H = E.sibling);
      var xe = m(d, E, L.value, y);
      if (xe === null) {
        E === null && (E = H);
        break;
      }
      e && E && xe.alternate === null && t(d, E),
        (a = o(xe, a, j)),
        N === null ? (v = xe) : (N.sibling = xe),
        (N = xe),
        (E = H);
    }
    if (L.done) return n(d, E), V && _t(d, j), v;
    if (E === null) {
      for (; !L.done; j++, L = f.next())
        (L = g(d, L.value, y)),
          L !== null &&
            ((a = o(L, a, j)), N === null ? (v = L) : (N.sibling = L), (N = L));
      return V && _t(d, j), v;
    }
    for (E = r(d, E); !L.done; j++, L = f.next())
      (L = w(E, d, j, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? j : L.key),
          (a = o(L, a, j)),
          N === null ? (v = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        E.forEach(function (rt) {
          return t(d, rt);
        }),
      V && _t(d, j),
      v
    );
  }
  function R(d, a, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Qt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case fr:
          e: {
            for (var v = f.key, N = a; N !== null; ) {
              if (N.key === v) {
                if (((v = f.type), v === Qt)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (a = l(N, f.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  N.elementType === v ||
                  (typeof v == "object" &&
                    v !== null &&
                    v.$$typeof === it &&
                    Lu(v) === N.type)
                ) {
                  n(d, N.sibling),
                    (a = l(N, f.props)),
                    (a.ref = jn(d, N, f)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            f.type === Qt
              ? ((a = zt(f.props.children, d.mode, y, f.key)),
                (a.return = d),
                (d = a))
              : ((y = $r(f.type, f.key, f.props, null, d.mode, y)),
                (y.ref = jn(d, a, f)),
                (y.return = d),
                (d = y));
          }
          return i(d);
        case Wt:
          e: {
            for (N = f.key; a !== null; ) {
              if (a.key === N)
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
            (a = eo(f, d.mode, y)), (a.return = d), (d = a);
          }
          return i(d);
        case it:
          return (N = f._init), R(d, a, N(f._payload), y);
      }
      if (Ln(f)) return S(d, a, f, y);
      if (kn(f)) return k(d, a, f, y);
      Er(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
          : (n(d, a), (a = bl(f, d.mode, y)), (a.return = d), (d = a)),
        i(d))
      : n(d, a);
  }
  return R;
}
var fn = va(!0),
  xa = va(!1),
  br = Et(null),
  el = null,
  bt = null,
  wi = null;
function Si() {
  wi = bt = el = null;
}
function ki(e) {
  var t = br.current;
  $(br), (e._currentValue = t);
}
function Io(e, t, n) {
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
  (el = e),
    (wi = bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (wi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
      if (el === null) throw Error(x(308));
      (bt = e), (el.dependencies = { lanes: 0, firstContext: e });
    } else bt = bt.next = e;
  return t;
}
var Tt = null;
function Ei(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function wa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ei(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
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
var ut = !1;
function Ni(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sa(e, t) {
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
function Je(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ei(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n);
  }
}
function zu(e, t) {
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
function tl(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
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
        w = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            k = u;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                g = S.call(w, g, m);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (m = typeof S == "function" ? S.call(w, g, m) : S),
                m == null)
              )
                break e;
              g = K({}, g, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = w), (s = g)) : (h = h.next = w),
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
    (Mt |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Ru(e, t, n) {
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
var cr = {},
  We = Et(cr),
  er = Et(cr),
  tr = Et(cr);
function Dt(e) {
  if (e === cr) throw Error(x(174));
  return e;
}
function Ci(e, t) {
  switch ((F(tr, t), F(er, e), F(We, cr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mo(t, e));
  }
  $(We), F(We, t);
}
function pn() {
  $(We), $(er), $(tr);
}
function ka(e) {
  Dt(tr.current);
  var t = Dt(We.current),
    n = mo(t, e.type);
  t !== n && (F(er, e), F(We, n));
}
function _i(e) {
  er.current === e && ($(We), $(er));
}
var W = Et(0);
function nl(e) {
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
var Gl = [];
function ji() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Ir = nt.ReactCurrentDispatcher,
  Yl = nt.ReactCurrentBatchConfig,
  Ot = 0,
  Q = null,
  q = null,
  ee = null,
  rl = !1,
  $n = !1,
  nr = 0,
  xf = 0;
function oe() {
  throw Error(x(321));
}
function Pi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Ti(e, t, n, r, l, o) {
  if (
    ((Ot = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ir.current = e === null || e.memoizedState === null ? Ef : Nf),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), (nr = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (ee = q = null),
        (t.updateQueue = null),
        (Ir.current = Cf),
        (e = n(r, l));
    } while ($n);
  }
  if (
    ((Ir.current = ll),
    (t = q !== null && q.next !== null),
    (Ot = 0),
    (ee = q = Q = null),
    (rl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Di() {
  var e = nr !== 0;
  return (nr = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Le() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = ee === null ? Q.memoizedState : ee.next;
  if (t !== null) (ee = t), (q = e);
  else {
    if (e === null) throw Error(x(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = q,
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
      if ((Ot & h) === h)
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
          (Q.lanes |= h),
          (Mt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      Ue(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (Mt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = Le(),
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
    Ue(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ea() {}
function Na(e, t) {
  var n = Q,
    r = Le(),
    l = t(),
    o = !Ue(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    Li(ja.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, _a.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(x(349));
    Ot & 30 || Ca(n, t, l);
  }
  return l;
}
function Ca(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pa(t) && Ta(e);
}
function ja(e, t, n) {
  return n(function () {
    Pa(t) && Ta(e);
  });
}
function Pa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Ta(e) {
  var t = et(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Iu(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kf.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Da() {
  return Le().memoizedState;
}
function Or(e, t, n, r) {
  var l = Ve();
  (Q.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var i = q.memoizedState;
    if (((o = i.destroy), r !== null && Pi(r, i.deps))) {
      l.memoizedState = lr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = lr(1 | t, n, o, r));
}
function Ou(e, t) {
  return Or(8390656, 8, e, t);
}
function Li(e, t) {
  return yl(2048, 8, e, t);
}
function La(e, t) {
  return yl(4, 2, e, t);
}
function za(e, t) {
  return yl(4, 4, e, t);
}
function Ra(e, t) {
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
function Ia(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 4, Ra.bind(null, t, e), n)
  );
}
function zi() {}
function Oa(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ma(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fa(e, t, n) {
  return Ot & 21
    ? (Ue(n, t) || ((n = Hs()), (Q.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function wf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Yl.transition = r);
  }
}
function Ua() {
  return Le().memoizedState;
}
function Sf(e, t, n) {
  var r = vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $a(e))
  )
    Aa(t, n);
  else if (((n = wa(e, t, n, r)), n !== null)) {
    var l = ce();
    Fe(n, e, r, l), Va(n, t, r);
  }
}
function kf(e, t, n) {
  var r = vt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($a(e)) Aa(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ei(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = wa(e, t, l, r)),
      n !== null && ((l = ce()), Fe(n, e, r, l), Va(n, t, r));
  }
}
function $a(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Aa(e, t) {
  $n = rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Va(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n);
  }
}
var ll = {
    readContext: De,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Ef = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Ou,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, Ra.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
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
        (e = e.dispatch = Sf.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Iu,
    useDebugValue: zi,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Iu(!1),
        t = e[0];
      return (e = wf.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Ve();
      if (V) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(x(349));
        Ot & 30 || Ca(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ou(ja.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        lr(9, _a.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = te.identifierPrefix;
      if (V) {
        var n = Ze,
          r = Xe;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nf = {
    readContext: De,
    useCallback: Oa,
    useContext: De,
    useEffect: Li,
    useImperativeHandle: Ia,
    useInsertionEffect: La,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Xl,
    useRef: Da,
    useState: function () {
      return Xl(rr);
    },
    useDebugValue: zi,
    useDeferredValue: function (e) {
      var t = Le();
      return Fa(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(rr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ea,
    useSyncExternalStore: Na,
    useId: Ua,
    unstable_isNewReconciler: !1,
  },
  Cf = {
    readContext: De,
    useCallback: Oa,
    useContext: De,
    useEffect: Li,
    useImperativeHandle: Ia,
    useInsertionEffect: La,
    useLayoutEffect: za,
    useMemo: Ma,
    useReducer: Zl,
    useRef: Da,
    useState: function () {
      return Zl(rr);
    },
    useDebugValue: zi,
    useDeferredValue: function (e) {
      var t = Le();
      return q === null ? (t.memoizedState = e) : Fa(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(rr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ea,
    useSyncExternalStore: Na,
    useId: Ua,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $t(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = vt(e),
      o = Je(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gt(e, o, l)),
      t !== null && (Fe(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = vt(e),
      o = Je(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gt(e, o, l)),
      t !== null && (Fe(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = vt(e),
      l = Je(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gt(e, l, r)),
      t !== null && (Fe(t, e, r, n), Rr(t, e, r));
  },
};
function Mu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zn(n, r) || !Zn(l, o)
      : !0
  );
}
function Ha(e, t, n) {
  var r = !1,
    l = St,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((l = ye(t) ? Rt : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? cn(e, l) : St)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = vl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && vl.enqueueReplaceState(t, t.state, null);
}
function Mo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ni(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = De(o))
    : ((o = ye(t) ? Rt : se.current), (l.context = cn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Oo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && vl.enqueueReplaceState(l, l.state, null),
      tl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qc(r)), (r = r.return);
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
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _f = typeof WeakMap == "function" ? WeakMap : Map;
function Ba(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      il || ((il = !0), (Go = r)), Fo(e, t);
    }),
    n
  );
}
function Wa(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Fo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Fo(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Uu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _f();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Af.bind(null, e, t, n)), t.then(e, e));
}
function $u(e) {
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
function Au(e, t, n, r, l) {
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
              : ((t = Je(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jf = nt.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? xa(t, null, n, r) : fn(t, e.child, n, r);
}
function Vu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, l),
    (r = Ti(e, t, n, r, o, l)),
    (n = Di()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (V && n && yi(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Hu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ai(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Qa(e, t, o, r, l))
      : ((e = $r(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref)
    )
      return tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zn(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), tt(e, t, l);
  }
  return Uo(e, t, n, r, l);
}
function Ka(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(tn, we),
        (we |= n);
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
          F(tn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(tn, we),
        (we |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(tn, we),
      (we |= r);
  return ae(e, t, l, n), t.child;
}
function Ga(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uo(e, t, n, r, l) {
  var o = ye(n) ? Rt : se.current;
  return (
    (o = cn(t, o)),
    un(t, l),
    (n = Ti(e, t, n, r, o, l)),
    (r = Di()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (V && r && yi(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Bu(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    Zr(t);
  } else o = !1;
  if ((un(t, l), t.stateNode === null))
    Mr(e, t), Ha(t, n, r), Mo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = De(c))
      : ((c = ye(n) ? Rt : se.current), (c = cn(t, c)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Fu(t, i, r, c)),
      (ut = !1);
    var m = t.memoizedState;
    (i.state = m),
      tl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || ge.current || ut
        ? (typeof h == "function" && (Oo(t, n, h, r), (s = t.memoizedState)),
          (u = ut || Mu(t, n, u, r, m, s, c))
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
      Sa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Re(t.type, u)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = De(s))
        : ((s = ye(n) ? Rt : se.current), (s = cn(t, s)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== g || m !== s) && Fu(t, i, r, s)),
      (ut = !1),
      (m = t.memoizedState),
      (i.state = m),
      tl(t, r, i, l);
    var S = t.memoizedState;
    u !== g || m !== S || ge.current || ut
      ? (typeof w == "function" && (Oo(t, n, w, r), (S = t.memoizedState)),
        (c = ut || Mu(t, n, c, r, m, S, s) || !1)
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
  return $o(e, t, n, r, o, l);
}
function $o(e, t, n, r, l, o) {
  Ga(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Pu(t, n, !1), tt(e, t, o);
  (r = t.stateNode), (jf.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = fn(t, e.child, null, o)), (t.child = fn(t, null, u, o)))
      : ae(e, t, u, o),
    (t.memoizedState = r.state),
    l && Pu(t, n, !0),
    t.child
  );
}
function Ya(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ju(e, t.context, !1),
    Ci(e, t.containerInfo);
}
function Wu(e, t, n, r, l) {
  return dn(), xi(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xa(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(W, l & 1),
    e === null)
  )
    return (
      Ro(t),
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
                : (o = Sl(i, r, 0, null)),
              (e = zt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Vo(n)),
              (t.memoizedState = Ao),
              e)
            : Ri(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Pf(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = xt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = xt(u, o)) : ((o = zt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Vo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ao),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xt(o, { mode: "visible", children: r.children })),
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
function Ri(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && xi(r),
    fn(t, e.child, null, n),
    (e = Ri(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(x(422)))), Nr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = zt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fn(t, e.child, null, i),
        (t.child.memoizedState = Vo(i)),
        (t.memoizedState = Ao),
        o);
  if (!(t.mode & 1)) return Nr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = Jl(o, r, void 0)), Nr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = te), r !== null)) {
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
          ((o.retryLane = l), et(e, l), Fe(r, e, l, -1));
    }
    return $i(), (r = Jl(Error(x(421)))), Nr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Se = ht(l.nextSibling)),
      (ke = t),
      (V = !0),
      (Oe = null),
      e !== null &&
        ((_e[je++] = Xe),
        (_e[je++] = Ze),
        (_e[je++] = It),
        (Xe = e.id),
        (Ze = e.overflow),
        (It = t)),
      (t = Ri(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function ql(e, t, n, r, l) {
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
function Za(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
        else if (e.tag === 19) Qu(e, n, t);
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
  if ((F(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && nl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ql(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && nl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ql(t, !0, n, null, o);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Mr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ya(t), dn();
      break;
    case 5:
      ka(t);
      break;
    case 1:
      ye(t.type) && Zr(t);
      break;
    case 4:
      Ci(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(br, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Xa(e, t, n)
          : (F(W, W.current & 1),
            (e = tt(e, t, n)),
            e !== null ? e.sibling : null);
      F(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Za(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ka(e, t, n);
  }
  return tt(e, t, n);
}
var Ja, Ho, qa, ba;
Ja = function (e, t) {
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
Ho = function () {};
qa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Dt(We.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ao(e, l)), (r = ao(e, r)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yr);
    }
    ho(n, r);
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
            (Bn.hasOwnProperty(c)
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
              (Bn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ba = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
  if (!V)
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
function ie(e) {
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
function Df(e, t, n) {
  var r = t.pendingProps;
  switch ((vi(t), t.tag)) {
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
      return ie(t), null;
    case 1:
      return ye(t.type) && Xr(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pn(),
        $(ge),
        $(se),
        ji(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (kr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Zo(Oe), (Oe = null)))),
        Ho(e, t),
        ie(t),
        null
      );
    case 5:
      _i(t);
      var l = Dt(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ie(t), null;
        }
        if (((e = Dt(We.current)), kr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[bn] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Rn.length; l++) U(Rn[l], r);
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
              eu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              nu(r, o), U("invalid", r);
          }
          ho(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Sr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Bn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              pr(r), tu(r, o, !0);
              break;
            case "textarea":
              pr(r), ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Yr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = js(n)),
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
            (e[He] = t),
            (e[bn] = r),
            Ja(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = go(n, r)), n)) {
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
                for (l = 0; l < Rn.length; l++) U(Rn[l], e);
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
                eu(e, r), (l = ao(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                nu(e, r), (l = po(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            ho(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ds(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ps(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Wn(e, s)
                    : typeof s == "number" && Wn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Bn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && ri(e, o, s, i));
              }
            switch (n) {
              case "input":
                pr(e), tu(e, r, !1);
                break;
              case "textarea":
                pr(e), ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? nn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) ba(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Dt(tr.current)), Dt(We.current), kr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (o = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Sr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        ($(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Se !== null && t.mode & 1 && !(t.flags & 128))
          ya(), dn(), (t.flags |= 98560), (o = !1);
        else if (((o = kr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[He] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (o = !1);
        } else Oe !== null && (Zo(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? b === 0 && (b = 3) : $i())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        pn(), Ho(e, t), e === null && Jn(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return ki(t.type._context), ie(t), null;
    case 17:
      return ye(t.type) && Xr(), ie(t), null;
    case 19:
      if (($(W), (o = t.memoizedState), o === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pn(o, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pn(o, !1),
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
                return F(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > hn &&
            ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return ie(t), null;
          } else
            2 * X() - o.renderingStartTime > hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = W.current),
          F(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        Ui(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Lf(e, t) {
  switch ((vi(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && Xr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        $(ge),
        $(se),
        ji(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _i(t), null;
    case 13:
      if (($(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(W), null;
    case 4:
      return pn(), null;
    case 10:
      return ki(t.type._context), null;
    case 22:
    case 23:
      return Ui(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1,
  ue = !1,
  zf = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Bo(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Ku = !1;
function Rf(e, t) {
  if (((_o = Qr), (e = la()), gi(e))) {
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
              var w;
              g !== n || (l !== 0 && g.nodeType !== 3) || (u = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (w = g.firstChild) !== null;

            )
              (m = g), (g = w);
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === l && (u = i),
                m === o && ++h === r && (s = i),
                (w = g.nextSibling) !== null)
              )
                break;
              (g = m), (m = g.parentNode);
            }
            g = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jo = { focusedElem: e, selectionRange: n }, Qr = !1, _ = t; _ !== null; )
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
                  var k = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Re(t.type, k),
                      R
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
        } catch (y) {
          Y(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = Ku), (Ku = !1), S;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xl(e, t) {
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
function Wo(e) {
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
function ec(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[bn], delete t[Do], delete t[hf], delete t[gf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tc(e.return)) return null;
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
function Qo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Yr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), (e = e.sibling);
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; ) Ko(e, t, n), (e = e.sibling);
}
var ne = null,
  Ie = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) nc(e, t, n), (n = n.sibling);
}
function nc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || en(n, t);
    case 6:
      var r = ne,
        l = Ie;
      (ne = null),
        ot(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Yn(e))
          : Ql(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        ot(e, t, n),
        (ne = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Bo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (en(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ot(e, t, n), (ue = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function Yu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zf()),
      t.forEach(function (r) {
        var l = Hf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
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
              (ne = u.stateNode), (Ie = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(x(160));
        nc(o, i, l), (ne = null), (Ie = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        Y(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rc(t, e), (t = t.sibling);
}
function rc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Ae(e), r & 4)) {
        try {
          An(3, e, e.return), xl(3, e);
        } catch (k) {
          Y(e, e.return, k);
        }
        try {
          An(5, e, e.return);
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Ae(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Ae(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Cs(l, o),
              go(u, i);
            var c = go(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                g = s[i + 1];
              h === "style"
                ? Ds(l, g)
                : h === "dangerouslySetInnerHTML"
                ? Ps(l, g)
                : h === "children"
                ? Wn(l, g)
                : ri(l, h, g, c);
            }
            switch (u) {
              case "input":
                co(l, o);
                break;
              case "textarea":
                _s(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? nn(l, !!o.multiple, w, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? nn(l, !!o.multiple, o.defaultValue, !0)
                      : nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[bn] = o;
          } catch (k) {
            Y(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (k) {
          Y(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Ae(e);
      break;
    case 13:
      ze(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Mi = X())),
        r & 4 && Yu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (c = ue) || h), ze(t, e), (ue = c)) : ze(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (g = _ = h; _ !== null; ) {
              switch (((m = _), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  An(4, m, m.return);
                  break;
                case 1:
                  en(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      Y(r, n, k);
                    }
                  }
                  break;
                case 5:
                  en(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Zu(g);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (_ = w)) : Zu(g);
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
                      (u.style.display = Ts("display", i)));
              } catch (k) {
                Y(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (k) {
                Y(e, e.return, k);
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
      ze(t, e), Ae(e), r & 4 && Yu(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tc(n)) {
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
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var o = Gu(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Gu(e);
          Qo(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function If(e, t, n) {
  (_ = e), lc(e);
}
function lc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = Cr;
        var c = ue;
        if (((Cr = i), (ue = s) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ju(l)
                : s !== null
                ? ((s.return = i), (_ = s))
                : Ju(l);
        for (; o !== null; ) (_ = o), lc(o), (o = o.sibling);
        (_ = l), (Cr = u), (ue = c);
      }
      Xu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Xu(e);
  }
}
function Xu(e) {
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
              ue || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ru(t, o, r);
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
                Ru(t, i, n);
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
                    g !== null && Yn(g);
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
        ue || (t.flags & 512 && Wo(t));
      } catch (m) {
        Y(t, t.return, m);
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
function Zu(e) {
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
function Ju(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            Wo(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wo(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
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
var Of = Math.ceil,
  ol = nt.ReactCurrentDispatcher,
  Ii = nt.ReactCurrentOwner,
  Te = nt.ReactCurrentBatchConfig,
  I = 0,
  te = null,
  J = null,
  re = 0,
  we = 0,
  tn = Et(0),
  b = 0,
  or = null,
  Mt = 0,
  wl = 0,
  Oi = 0,
  Vn = null,
  me = null,
  Mi = 0,
  hn = 1 / 0,
  Ge = null,
  il = !1,
  Go = null,
  yt = null,
  _r = !1,
  dt = null,
  ul = 0,
  Hn = 0,
  Yo = null,
  Fr = -1,
  Ur = 0;
function ce() {
  return I & 6 ? X() : Fr !== -1 ? Fr : (Fr = X());
}
function vt(e) {
  return e.mode & 1
    ? I & 2 && re !== 0
      ? re & -re
      : vf.transition !== null
      ? (Ur === 0 && (Ur = Hs()), Ur)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xs(e.type))),
        e)
    : 1;
}
function Fe(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (Yo = null), Error(x(185)));
  ur(e, n, r),
    (!(I & 2) || e !== te) &&
      (e === te && (!(I & 2) && (wl |= n), b === 4 && at(e, re)),
      ve(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((hn = X() + 500), gl && Nt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  yd(e, t);
  var r = Wr(e, e === te ? re : 0);
  if (r === 0)
    n !== null && iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && iu(n), t === 1))
      e.tag === 0 ? yf(qu.bind(null, e)) : ma(qu.bind(null, e)),
        pf(function () {
          !(I & 6) && Nt();
        }),
        (n = null);
    else {
      switch (Bs(r)) {
        case 1:
          n = si;
          break;
        case 4:
          n = As;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = Vs;
          break;
        default:
          n = Br;
      }
      n = fc(n, oc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oc(e, t) {
  if (((Fr = -1), (Ur = 0), I & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Wr(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = sl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = uc();
    (te !== e || re !== t) && ((Ge = null), (hn = X() + 500), Lt(e, t));
    do
      try {
        Uf();
        break;
      } catch (u) {
        ic(e, u);
      }
    while (!0);
    Si(),
      (ol.current = o),
      (I = l),
      J !== null ? (t = 0) : ((te = null), (re = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = So(e)), l !== 0 && ((r = l), (t = Xo(e, l)))), t === 1)
    )
      throw ((n = or), Lt(e, 0), at(e, r), ve(e, X()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Mf(l) &&
          ((t = sl(e, r)),
          t === 2 && ((o = So(e)), o !== 0 && ((r = o), (t = Xo(e, o)))),
          t === 1))
      )
        throw ((n = or), Lt(e, 0), at(e, r), ve(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          jt(e, me, Ge);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = Mi + 500 - X()), 10 < t))
          ) {
            if (Wr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = To(jt.bind(null, e, me, Ge), t);
            break;
          }
          jt(e, me, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = X() - r),
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
                : 1960 * Of(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(jt.bind(null, e, me, Ge), r);
            break;
          }
          jt(e, me, Ge);
          break;
        case 5:
          jt(e, me, Ge);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ve(e, X()), e.callbackNode === n ? oc.bind(null, e) : null;
}
function Xo(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = sl(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Zo(t)),
    e
  );
}
function Zo(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Mf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(o(), l)) return !1;
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
function at(e, t) {
  for (
    t &= ~Oi,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qu(e) {
  if (I & 6) throw Error(x(327));
  sn();
  var t = Wr(e, 0);
  if (!(t & 1)) return ve(e, X()), null;
  var n = sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && ((t = r), (n = Xo(e, r)));
  }
  if (n === 1) throw ((n = or), Lt(e, 0), at(e, t), ve(e, X()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, me, Ge),
    ve(e, X()),
    null
  );
}
function Fi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((hn = X() + 500), gl && Nt());
  }
}
function Ft(e) {
  dt !== null && dt.tag === 0 && !(I & 6) && sn();
  var t = I;
  I |= 1;
  var n = Te.transition,
    r = O;
  try {
    if (((Te.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Te.transition = n), (I = t), !(I & 6) && Nt();
  }
}
function Ui() {
  (we = tn.current), $(tn);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ff(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((vi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          pn(), $(ge), $(se), ji();
          break;
        case 5:
          _i(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          $(W);
          break;
        case 19:
          $(W);
          break;
        case 10:
          ki(r.type._context);
          break;
        case 22:
        case 23:
          Ui();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (J = e = xt(e.current, null)),
    (re = we = t),
    (b = 0),
    (or = null),
    (Oi = wl = Mt = 0),
    (me = Vn = null),
    Tt !== null)
  ) {
    for (t = 0; t < Tt.length; t++)
      if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Tt = null;
  }
  return e;
}
function ic(e, t) {
  do {
    var n = J;
    try {
      if ((Si(), (Ir.current = ll), rl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        rl = !1;
      }
      if (
        ((Ot = 0),
        (ee = q = Q = null),
        ($n = !1),
        (nr = 0),
        (Ii.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (or = t), (J = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
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
          var w = $u(i);
          if (w !== null) {
            (w.flags &= -257),
              Au(w, i, u, o, t),
              w.mode & 1 && Uu(o, c, t),
              (t = w),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Uu(o, c, t), $i();
              break e;
            }
            s = Error(x(426));
          }
        } else if (V && u.mode & 1) {
          var R = $u(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Au(R, i, u, o, t),
              xi(mn(s, u));
            break e;
          }
        }
        (o = s = mn(s, u)),
          b !== 4 && (b = 2),
          Vn === null ? (Vn = [o]) : Vn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Ba(o, s, t);
              zu(o, d);
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
                    (yt === null || !yt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = Wa(o, u, t);
                zu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ac(n);
    } catch (v) {
      (t = v), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uc() {
  var e = ol.current;
  return (ol.current = ll), e === null ? ll : e;
}
function $i() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    te === null || (!(Mt & 268435455) && !(wl & 268435455)) || at(te, re);
}
function sl(e, t) {
  var n = I;
  I |= 2;
  var r = uc();
  (te !== e || re !== t) && ((Ge = null), Lt(e, t));
  do
    try {
      Ff();
      break;
    } catch (l) {
      ic(e, l);
    }
  while (!0);
  if ((Si(), (I = n), (ol.current = r), J !== null)) throw Error(x(261));
  return (te = null), (re = 0), b;
}
function Ff() {
  for (; J !== null; ) sc(J);
}
function Uf() {
  for (; J !== null && !sd(); ) sc(J);
}
function sc(e) {
  var t = dc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? ac(e) : (J = t),
    (Ii.current = null);
}
function ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lf(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (J = null);
        return;
      }
    } else if (((n = Df(n, t, we)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function jt(e, t, n) {
  var r = O,
    l = Te.transition;
  try {
    (Te.transition = null), (O = 1), $f(e, t, n, r);
  } finally {
    (Te.transition = l), (O = r);
  }
  return null;
}
function $f(e, t, n, r) {
  do sn();
  while (dt !== null);
  if (I & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (vd(e, o),
    e === te && ((J = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      fc(Br, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Te.transition), (Te.transition = null);
    var i = O;
    O = 1;
    var u = I;
    (I |= 4),
      (Ii.current = null),
      Rf(e, n),
      rc(n, e),
      lf(jo),
      (Qr = !!_o),
      (jo = _o = null),
      (e.current = n),
      If(n),
      ad(),
      (I = u),
      (O = i),
      (Te.transition = o);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (dt = e), (ul = l)),
    (o = e.pendingLanes),
    o === 0 && (yt = null),
    fd(n.stateNode),
    ve(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw ((il = !1), (e = Go), (Go = null), e);
  return (
    ul & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Yo ? Hn++ : ((Hn = 0), (Yo = e))) : (Hn = 0),
    Nt(),
    null
  );
}
function sn() {
  if (dt !== null) {
    var e = Bs(ul),
      t = Te.transition,
      n = O;
    try {
      if (((Te.transition = null), (O = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (ul = 0), I & 6)) throw Error(x(331));
        var l = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
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
                      An(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (_ = g);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling,
                        w = h.return;
                      if ((ec(h), h === c)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (_ = m);
                        break;
                      }
                      _ = w;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var R = k.sibling;
                    (k.sibling = null), (k = R);
                  } while (k !== null);
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
                    An(9, o, o.return);
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
                      xl(9, u);
                  }
                } catch (v) {
                  Y(u, u.return, v);
                }
              if (u === i) {
                _ = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (_ = y);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((I = l), Nt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(dl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Te.transition = t);
    }
  }
  return !1;
}
function bu(e, t, n) {
  (t = mn(n, t)),
    (t = Ba(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = ce()),
    e !== null && (ur(e, 1, t), ve(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) bu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = Wa(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = ce()),
            t !== null && (ur(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Af(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (b === 4 || (b === 3 && (re & 130023424) === re && 500 > X() - Mi)
        ? Lt(e, 0)
        : (Oi |= n)),
    ve(e, t);
}
function cc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = ce();
  (e = et(e, t)), e !== null && (ur(e, t, n), ve(e, n));
}
function Vf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cc(e, n);
}
function Hf(e, t) {
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
  r !== null && r.delete(t), cc(e, n);
}
var dc;
dc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Tf(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), V && t.flags & 1048576 && ha(t, qr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Mr(e, t), (e = t.pendingProps);
      var l = cn(t, se.current);
      un(t, n), (l = Ti(null, t, r, e, l, n));
      var o = Di();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((o = !0), Zr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ni(t),
            (l.updater = vl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Mo(t, r, e, n),
            (t = $o(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && yi(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Mr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wf(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Bu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Hu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Uo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Bu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ya(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Sa(e, t),
          tl(t, r, null, n);
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
            (l = mn(Error(x(423)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(x(424)), t)), (t = Wu(e, t, r, n, l));
            break e;
          } else
            for (
              Se = ht(t.stateNode.containerInfo.firstChild),
                ke = t,
                V = !0,
                Oe = null,
                n = xa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = tt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ka(t),
        e === null && Ro(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Po(r, l) ? (i = null) : o !== null && Po(r, o) && (t.flags |= 32),
        Ga(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return Xa(e, t, n);
    case 4:
      return (
        Ci(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Vu(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          F(br, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ue(o.value, i)) {
            if (o.children === l.children && !ge.current) {
              t = tt(e, t, n);
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
                      (s = Je(-1, n & -n)), (s.tag = 2);
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
                      Io(o.return, n, t),
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
                  Io(i, n, t),
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
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Hu(e, t, r, l, n)
      );
    case 15:
      return Qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Mr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Zr(t)) : (e = !1),
        un(t, n),
        Ha(t, r, l),
        Mo(t, r, l, n),
        $o(null, t, r, !0, e, n)
      );
    case 19:
      return Za(e, t, n);
    case 22:
      return Ka(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function fc(e, t) {
  return $s(e, t);
}
function Bf(e, t, n, r) {
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
function Pe(e, t, n, r) {
  return new Bf(e, t, n, r);
}
function Ai(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wf(e) {
  if (typeof e == "function") return Ai(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oi)) return 11;
    if (e === ii) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
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
function $r(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ai(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return zt(n.children, l, o, t);
      case li:
        (i = 8), (l |= 8);
        break;
      case oo:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = oo), (e.lanes = o), e
        );
      case io:
        return (e = Pe(13, n, t, l)), (e.elementType = io), (e.lanes = o), e;
      case uo:
        return (e = Pe(19, n, t, l)), (e.elementType = uo), (e.lanes = o), e;
      case ks:
        return Sl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ws:
              i = 10;
              break e;
            case Ss:
              i = 9;
              break e;
            case oi:
              i = 11;
              break e;
            case ii:
              i = 14;
              break e;
            case it:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function zt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = ks),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function eo(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qf(e, t, n, r, l) {
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
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Vi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Qf(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ni(o),
    e
  );
}
function Kf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
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
    if (ye(n)) return pa(e, n, t);
  }
  return t;
}
function mc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Vi(n, r, !0, e, l, o, i, u, s)),
    (e.context = pc(null)),
    (n = e.current),
    (r = ce()),
    (l = vt(n)),
    (o = Je(r, l)),
    (o.callback = t ?? null),
    gt(n, o, l),
    (e.current.lanes = l),
    ur(e, l, r),
    ve(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var l = t.current,
    o = ce(),
    i = vt(l);
  return (
    (n = pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Je(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(l, t, i)),
    e !== null && (Fe(e, l, i, o), Rr(e, l, i)),
    i
  );
}
function al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function es(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hi(e, t) {
  es(e, t), (e = e.alternate) && es(e, t);
}
function Gf() {
  return null;
}
var hc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bi(e) {
  this._internalRoot = e;
}
El.prototype.render = Bi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  kl(e, t, null, null);
};
El.prototype.unmount = Bi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ft(function () {
      kl(null, e, null, null);
    }),
      (t[be] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ks();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
    st.splice(n, 0, e), n === 0 && Ys(e);
  }
};
function Wi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ts() {}
function Yf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = al(i);
        o.call(c);
      };
    }
    var i = mc(t, r, e, 0, null, !1, !1, "", ts);
    return (
      (e._reactRootContainer = i),
      (e[be] = i.current),
      Jn(e.nodeType === 8 ? e.parentNode : e),
      Ft(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = al(s);
      u.call(c);
    };
  }
  var s = Vi(e, 0, !1, null, null, !1, !1, "", ts);
  return (
    (e._reactRootContainer = s),
    (e[be] = s.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    Ft(function () {
      kl(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = al(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else i = Yf(n, t, e, l, r);
  return al(i);
}
Ws = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (ai(t, n | 1), ve(t, X()), !(I & 6) && ((hn = X() + 500), Nt()));
      }
      break;
    case 13:
      Ft(function () {
        var r = et(e, 1);
        if (r !== null) {
          var l = ce();
          Fe(r, e, 1, l);
        }
      }),
        Hi(e, 1);
  }
};
ci = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ce();
      Fe(t, e, 134217728, n);
    }
    Hi(e, 134217728);
  }
};
Qs = function (e) {
  if (e.tag === 13) {
    var t = vt(e),
      n = et(e, t);
    if (n !== null) {
      var r = ce();
      Fe(n, e, t, r);
    }
    Hi(e, t);
  }
};
Ks = function () {
  return O;
};
Gs = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
vo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((co(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = hl(r);
            if (!l) throw Error(x(90));
            Ns(r), co(r, l);
          }
        }
      }
      break;
    case "textarea":
      _s(e, n);
      break;
    case "select":
      (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
  }
};
Rs = Fi;
Is = Ft;
var Xf = { usingClientEntryPoint: !1, Events: [ar, Xt, hl, Ls, zs, Fi] },
  Tn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Zf = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Fs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Gf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (dl = jr.inject(Zf)), (Be = jr);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wi(t)) throw Error(x(200));
  return Kf(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!Wi(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = hc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
    (e[be] = t.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new Bi(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Fs(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Ft(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(x(200));
  return Cl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!Wi(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = hc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = mc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[be] = t.current),
    Jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new El(t);
};
Ne.render = function (e, t, n) {
  if (!Nl(t)) throw Error(x(200));
  return Cl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Ft(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = Fi;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Cl(e, t, n, !1, r);
};
Ne.version = "18.3.1-next-f1338f8080-20240426";
function gc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc);
    } catch (e) {
      console.error(e);
    }
}
gc(), (gs.exports = Ne);
var Jf = gs.exports,
  yc,
  ns = Jf;
(yc = ns.createRoot), ns.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var qf = {
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
 */ const bf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = P.forwardRef(
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
        P.createElement(
          "svg",
          {
            ref: h,
            ...qf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${bf(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([g, m]) => P.createElement(g, m)),
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
 */ const Qi = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vc = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = $e("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = $e("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = $e("FileX", [
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
 */ const rp = $e("Globe", [
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
 */ const lp = $e("Layers", [
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
 */ const op = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rs = $e("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = $e("Table", [
    ["path", { d: "M12 3v18", key: "108xh3" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
  ]),
  xc = P.forwardRef(
    ({ stations: e, selectedStations: t, onChange: n, translations: r }, l) => {
      const [o, i] = P.useState(!0);
      P.useImperativeHandle(l, () => ({ collapse: () => i(!1) }));
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
                  p.jsx(up, { className: "w-5 h-5 text-gray-600" }),
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
                  ? p.jsx(vc, {
                      className:
                        "w-5 h-5 text-gray-400 transition-transform duration-200",
                    })
                  : p.jsx(Qi, {
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
xc.displayName = "DispensingStationSelect";
const ls = (e) => {
    const t = e.getFullYear(),
      n = String(e.getMonth() + 1).padStart(2, "0"),
      r = String(e.getDate()).padStart(2, "0");
    return `${t}-${n}-${r}`;
  },
  wc = P.forwardRef(({ onDateTimeChange: e, translations: t }, n) => {
    const [r, l] = P.useState(!0),
      o = new Date(),
      [i] = P.useState("operation"),
      [u, s] = P.useState(ls(o)),
      [c, h] = P.useState("00:00:00"),
      [g, m] = P.useState(ls(o)),
      [w, S] = P.useState("23:59:00");
    P.useImperativeHandle(n, () => ({ collapse: () => l(!1) })),
      P.useEffect(() => {
        e(u, c, g, w);
      }, []);
    const k = (y, v, N, E) => {
        e(y, v, N, E);
      },
      R = (y) => {
        s(y), k(y, c, g, w);
      },
      d = (y) => {
        h(y), k(u, y, g, w);
      },
      a = (y) => {
        m(y), k(u, c, y, w);
      },
      f = (y) => {
        S(y), k(u, c, g, y);
      };
    return p.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200",
      children: [
        p.jsxs("button", {
          onClick: () => l(!r),
          className:
            "w-full px-4 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors",
          children: [
            p.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                p.jsx(ep, { className: "w-5 h-5 text-gray-600" }),
                p.jsx("span", {
                  className: "text-xl font-bold text-gray-900",
                  children: t.timeRange,
                }),
              ],
            }),
            p.jsx(Qi, {
              className: `w-5 h-5 text-gray-600 transition-transform ${
                r ? "transform rotate-180" : ""
              }`,
            }),
          ],
        }),
        r &&
          p.jsx("div", {
            className: "px-6 pb-6 pt-2 border-t border-gray-100",
            children: p.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-7 gap-4",
              children: [
                p.jsxs("div", {
                  className: "md:col-span-1",
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: t.timeType,
                    }),
                    p.jsx("select", {
                      value: i,
                      disabled: !0,
                      className:
                        "w-40 border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      children: p.jsx("option", {
                        value: "operation",
                        children: t.operationTime,
                      }),
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "md:col-span-3",
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "開始日期時間",
                    }),
                    p.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        p.jsx("input", {
                          type: "date",
                          value: u,
                          onChange: (y) => R(y.target.value),
                          className:
                            "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                        p.jsx("input", {
                          type: "time",
                          value: c,
                          onChange: (y) => d(y.target.value),
                          step: "1",
                          className:
                            "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "md:col-span-3",
                  children: [
                    p.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: "結束日期時間",
                    }),
                    p.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        p.jsx("input", {
                          type: "date",
                          value: g,
                          onChange: (y) => a(y.target.value),
                          className:
                            "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                        p.jsx("input", {
                          type: "time",
                          value: w,
                          onChange: (y) => f(y.target.value),
                          step: "1",
                          className:
                            "w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  });
wc.displayName = "TimeRangeSelect";
const Sc = P.forwardRef(
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
                      p.jsx(rs, {
                        className:
                          "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2",
                      }),
                    ],
                  }),
                  p.jsxs("button", {
                    onClick: o,
                    className:
                      "h-10 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2 text-sm font-medium",
                    children: [p.jsx(rs, { className: "w-4 h-4" }), h.search],
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
              children: [p.jsx(tp, { className: "w-4 h-4" }), h.export],
            }),
          }),
        ],
      }),
    })
);
Sc.displayName = "SearchBar";
function sp({ data: e, translations: t }) {
  const [n, r] = P.useState(null),
    [l, o] = P.useState("asc"),
    [i, u] = P.useState(1),
    [s, c] = P.useState("1"),
    h = 50,
    g = (v) => {
      n === v ? o(l === "asc" ? "desc" : "asc") : (r(v), o("asc"));
    },
    m = (v) =>
      n !== v
        ? p.jsx("div", { className: "w-4 h-4" })
        : l === "asc"
        ? p.jsx(vc, { className: "w-4 h-4" })
        : p.jsx(Qi, { className: "w-4 h-4" }),
    w = [...e].sort((v, N) => {
      if (!n) return 0;
      const E = v[n],
        j = N[n];
      return n === "CONSUMPTION" || n === "STOCK" || n === "DISPENSED"
        ? l === "asc"
          ? Number(E) - Number(j)
          : Number(j) - Number(E)
        : l === "asc"
        ? String(E).localeCompare(String(j))
        : String(j).localeCompare(String(E));
    }),
    S = Math.ceil(w.length / h),
    k = (i - 1) * h,
    R = Math.min(k + h, w.length),
    d = w.slice(k, R),
    a = (v) => {
      const N = v.target.value;
      /^\d*$/.test(N) && c(N);
    },
    f = () => {
      const v = parseInt(s);
      v >= 1 && v <= S ? u(v) : c(i.toString());
    },
    y = (v) => {
      v.key === "Enter" && f();
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
              k + 1,
              "-",
              R,
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
                  onClick: () => u((v) => Math.max(1, v - 1)),
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
                      onKeyPress: y,
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
                  onClick: () => u((v) => Math.min(S, v + 1)),
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
                      (v) =>
                        p.jsx(
                          "th",
                          {
                            onClick: () => g(v),
                            className:
                              "px-4 py-3 text-left text-base font-normal text-gray-900 cursor-pointer hover:text-gray-700 transition-colors",
                            children: p.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                p.jsx("span", {
                                  className: "select-none",
                                  children: t[v.toLowerCase()],
                                }),
                                p.jsx("div", {
                                  className: "ml-2 flex-shrink-0",
                                  children: m(v),
                                }),
                              ],
                            }),
                          },
                          v
                        )
                    ),
                  ],
                }),
              }),
              p.jsx("tbody", {
                className: "divide-y divide-gray-200",
                children: d.map((v, N) =>
                  p.jsxs(
                    "tr",
                    {
                      className:
                        "hover:bg-gray-50 transition-colors border-b border-gray-200",
                      children: [
                        p.jsx("td", {
                          className:
                            "px-4 py-3 text-sm text-gray-900 font-medium",
                          children: k + N + 1,
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className:
                              "inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800",
                            children: v.CODE,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("div", {
                            className: "truncate",
                            title: v.NAME,
                            children: v.NAME,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(v.CONSUMPTION) > 0
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`,
                            children: v.CONSUMPTION,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(v.DISPENSED) > 0
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-gray-100 text-gray-800"
                            }`,
                            children: v.DISPENSED,
                          }),
                        }),
                        p.jsx("td", {
                          className: "px-4 py-3 text-sm text-gray-900",
                          children: p.jsx("span", {
                            className: `inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                              Number(v.STOCK) > 0
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-500"
                            }`,
                            children: v.STOCK,
                          }),
                        }),
                      ],
                    },
                    v.CODE
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
                  p.jsx(np, { className: "w-12 h-12 mb-4" }),
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
function ap() {
  return p.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    children: p.jsxs("div", {
      className: "bg-white rounded-lg p-8 flex flex-col items-center",
      children: [
        p.jsx(op, { className: "w-12 h-12 text-[#4E6DB4] animate-spin" }),
        p.jsx("span", {
          className: "mt-4 text-lg text-[#333333]",
          children: "載入中...",
        }),
      ],
    }),
  });
}
function cp({ message: e, onClose: t }) {
  return (
    P.useEffect(() => {
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
const dp = async () => {
  console.log("🔍 Fetching API config...");
  const t = await (await fetch("../config.txt")).json();
  return console.log("📝 API config:", t), t.domain;
};
let to = null;
const xn = async () => (to || (to = await dp()), to);
async function _l(e, t, n, r) {
  console.group(`🌐 API Call: ${e}`),
    console.log("📍 URL:", `${await xn()}${e}`),
    console.log("📮 Method:", t),
    console.log("📦 Request Payload:", n),
    console.log("📥 Response:", r),
    console.groupEnd();
}
async function fp() {
  const e = "/api/ServerSetting/get_serversetting_by_type",
    t = { Data: {}, ValueAry: ["調劑台"] };
  try {
    const n = await xn(),
      r = await fetch(`${n}${e}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      });
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    const l = await r.json();
    if ((await _l(e, "POST", t, l), l.Code !== 200))
      throw new Error(l.Result || "Failed to fetch dispensing stations");
    return l;
  } catch (n) {
    throw (console.error("Error fetching dispensing stations:", n), n);
  }
}
async function pp() {
  const e = "/api/medGroup/get_all_group",
    t = {};
  try {
    const n = await xn(),
      r = await fetch(`${n}${e}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(t),
      });
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    const l = await r.json();
    if ((await _l(e, "POST", t, l), l.Code !== 200))
      throw new Error(l.Result || "Failed to fetch medicine groups");
    return l;
  } catch (n) {
    throw (console.error("Error fetching medicine groups:", n), n);
  }
}
async function mp(e, t, n, r) {
  const l = "/api/consumption/serch_datas_by_ST_END",
    o = { Data: {}, ValueAry: [e, t, n.join(","), r.join(",")] };
  try {
    const i = await xn(),
      u = await fetch(`${i}${l}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    const s = await u.json();
    if ((await _l(l, "POST", o, s), s.Code !== 200))
      throw new Error(s.Result || "Failed to search inventory");
    return s;
  } catch (i) {
    throw (console.error("Error searching inventory:", i), i);
  }
}
async function hp(e, t, n, r) {
  const l = "/api/consumption/download_datas_excel_by_serch",
    o = { Data: {}, ValueAry: [e, t, n.join(","), r.join(",")] };
  try {
    const i = await xn(),
      u = await fetch(`${i}${l}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    await _l(l, "POST", o, "Blob data (Excel file)");
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
const Ki = "user_session";
async function gp(e) {
  const t = await xn();
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
        ? (sessionStorage.setItem(Ki, JSON.stringify(r.Data)),
          console.log("✅ Login successful - Session stored"))
        : console.log("❌ Login failed:", r.Result),
      console.groupEnd(),
      r
    );
  } catch (n) {
    throw (console.error("Login error:", n), console.groupEnd(), n);
  }
}
function no() {
  sessionStorage.removeItem(Ki), location.reload();
}
function kc() {
  const e = sessionStorage.getItem(Ki);
  return e ? JSON.parse(e) : null;
}
function yp() {
  return !!kc();
}
function vp({ onSuccess: e, onError: t }) {
  const [n, r] = P.useState({ ID: "", Password: "" }),
    [l, o] = P.useState(!1),
    i = async (u) => {
      u.preventDefault(), o(!0);
      try {
        const s = await gp(n);
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
const ro = {
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
    startDateTime: "Start Date & Time",
    endDate: "End Date",
    endDateTime: "End Date & Time",
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
    startDateTime: "開始日期時間",
    endDate: "結束日期",
    endDateTime: "結束日期時間",
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
function xp() {
  const [e, t] = P.useState(yp()),
    [n, r] = P.useState("zh"),
    [l, o] = P.useState([]),
    [i, u] = P.useState([]),
    [s, c] = P.useState([]),
    [h, g] = P.useState("all"),
    [m, w] = P.useState(""),
    [S, k] = P.useState([]),
    [R, d] = P.useState([]),
    [a, f] = P.useState(!1),
    [y, v] = P.useState(!1),
    [N, E] = P.useState(null),
    [j, H] = P.useState(""),
    [L, xe] = P.useState(""),
    [rt, Ct] = P.useState(""),
    [wn, jl] = P.useState(""),
    At = P.useRef(null),
    Vt = P.useRef(null),
    C = P.useRef(null);
  P.useEffect(() => {
    if (!e) return;
    (async () => {
      v(!0);
      try {
        const [G, A] = await Promise.all([fp(), pp()]);
        if (G.Code !== 200 || A.Code !== 200) {
          no(), t(!1);
          return;
        }
        o(G.Data), u([]), c(A.Data);
      } catch (G) {
        console.error("Error fetching initial data:", G),
          E("Failed to fetch initial data");
      } finally {
        v(!1);
      }
    })();
  }, [e]),
    P.useEffect(() => {
      let M = S;
      if (h !== "all") {
        const G = s.find((A) => A.GUID === h);
        if (G) {
          const A = G.MedClasses.map((Ke) => Ke.CODE);
          M = M.filter((Ke) => A.includes(Ke.CODE));
        }
      }
      if (m.trim()) {
        const G = m.toLowerCase().trim();
        M = M.filter(
          (A) =>
            (A.CODE && A.CODE.toLowerCase().includes(G)) ||
            (A.NAME && A.NAME.toLowerCase().includes(G)) ||
            (A.SKDICODE && A.SKDICODE.toLowerCase().includes(G)) ||
            (A.CHT_NAME && A.CHT_NAME.toLowerCase().includes(G))
        );
      }
      d(M);
    }, [h, m, S, s]);
  const T = (M) =>
      M.Code === -1 || M.Code === -2
        ? (no(), t(!1), null)
        : M.Code !== 200
        ? (E(M.Result), null)
        : M.Data,
    D = (M, G) => (!M || !G ? new Date().toISOString() : `${M}T${G}`),
    B = (M, G, A, Ke) => {
      H(M), xe(G), Ct(A), jl(Ke);
    },
    Z = async () => {
      var M, G, A;
      if (i.length === 0) {
        E(ro[n].noStations);
        return;
      }
      (M = At.current) == null || M.collapse(),
        (G = Vt.current) == null || G.collapse(),
        (A = C.current) == null || A.collapse(),
        v(!0);
      try {
        const Ke = D(j, L),
          Ec = D(rt, wn),
          Nc = await mp(
            Ke,
            Ec,
            i,
            l.filter((Pl) => i.includes(Pl.name)).map((Pl) => Pl.type)
          ),
          Gi = T(Nc);
        Gi && (k(Gi), f(!0));
      } catch (Ke) {
        console.error("Error searching inventory:", Ke),
          E("Failed to search inventory");
      } finally {
        v(!1);
      }
    },
    Ht = async () => {
      if (R.length === 0) {
        E(ro[n].noDataForExport);
        return;
      }
      v(!0);
      try {
        const M = D(j, L),
          G = D(rt, wn);
        await hp(
          M,
          G,
          i,
          l.filter((A) => i.includes(A.name)).map((A) => A.type)
        );
      } catch (M) {
        console.error("Error exporting inventory:", M),
          E("Failed to export inventory");
      } finally {
        v(!1);
      }
    },
    Qe = () => {
      no(), t(!1);
    },
    Sn = (M) => {
      r(M);
    },
    pe = ro[n],
    lt = kc();
  return e
    ? p.jsxs("div", {
        className: "min-h-screen",
        children: [
          y && p.jsx(ap, {}),
          N && p.jsx(cp, { message: N, onClose: () => E(null) }),
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
                          p.jsx(lp, { className: "w-7 h-7" }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          p.jsx("h1", {
                            className:
                              "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                            children: pe.title,
                          }),
                          lt &&
                            p.jsxs("span", {
                              className: "text-base text-gray-600",
                              children: [lt.Name, " - ", lt.Employer],
                            }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      p.jsx("button", {
                        onClick: () => Sn(n === "en" ? "zh" : "en"),
                        className:
                          "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        children: p.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            p.jsx(rp, { className: "w-4 h-4 text-gray-600" }),
                            p.jsx("span", {
                              className:
                                "hidden sm:inline text-base text-gray-700",
                              children: n === "en" ? "English" : "繁體中文",
                            }),
                          ],
                        }),
                      }),
                      p.jsx("button", {
                        onClick: Qe,
                        className:
                          "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        children: p.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            p.jsx(ip, { className: "w-4 h-4" }),
                            p.jsx("span", {
                              className: "hidden sm:inline text-base",
                              children: pe.logout,
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
                p.jsx(xc, {
                  ref: At,
                  stations: l,
                  selectedStations: i,
                  onChange: u,
                  translations: pe,
                }),
                p.jsx(wc, { ref: Vt, onDateTimeChange: B, translations: pe }),
                p.jsx("div", {
                  children: p.jsx(Sc, {
                    ref: C,
                    selectedGroup: h,
                    medicineGroups: s,
                    searchText: m,
                    onGroupChange: g,
                    onSearchTextChange: w,
                    onSearch: Z,
                    onExport: Ht,
                    canExport: R.length > 0,
                    recordCount: R.length,
                    totalRecords: S.length,
                    translations: pe,
                  }),
                }),
                a &&
                  p.jsx("div", {
                    children: p.jsx(sp, { data: R, translations: pe }),
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
    : p.jsx(vp, { onSuccess: () => t(!0), onError: E });
}
yc(document.getElementById("root")).render(
  p.jsx(P.StrictMode, { children: p.jsx(xp, {}) })
);
