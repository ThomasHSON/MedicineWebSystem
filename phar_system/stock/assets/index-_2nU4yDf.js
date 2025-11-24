(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
function Oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wi = { exports: {} },
  Nl = {},
  Si = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
  Qc = Symbol.for("react.portal"),
  Ac = Symbol.for("react.fragment"),
  Vc = Symbol.for("react.strict_mode"),
  Bc = Symbol.for("react.profiler"),
  Hc = Symbol.for("react.provider"),
  Wc = Symbol.for("react.context"),
  Gc = Symbol.for("react.forward_ref"),
  qc = Symbol.for("react.suspense"),
  Yc = Symbol.for("react.memo"),
  Kc = Symbol.for("react.lazy"),
  ua = Symbol.iterator;
function Xc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ua && e[ua]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ji = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ni = Object.assign,
  ki = {};
function bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ki),
    (this.updater = n || ji);
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ci() {}
Ci.prototype = bn.prototype;
function ao(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ki),
    (this.updater = n || ji);
}
var io = (ao.prototype = new Ci());
io.constructor = ao;
Ni(io, bn.prototype);
io.isPureReactComponent = !0;
var ca = Array.isArray,
  _i = Object.prototype.hasOwnProperty,
  uo = { current: null },
  Ei = { key: !0, ref: !0, __self: !0, __source: !0 };
function bi(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      _i.call(t, r) && !Ei.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var i = Array(u), d = 0; d < u; d++) i[d] = arguments[d + 2];
    l.children = i;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: xr,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: uo.current,
  };
}
function Zc(e, t) {
  return {
    $$typeof: xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function co(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function Jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var da = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jc("" + e.key)
    : t.toString(36);
}
function Or(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case Qc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === "" ? "." + Al(a, 0) : r),
      ca(l)
        ? ((n = ""),
          e != null && (n = e.replace(da, "$&/") + "/"),
          Or(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (co(l) &&
            (l = Zc(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(da, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ca(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var i = r + Al(s, u);
      a += Or(s, t, n, i, l);
    }
  else if (((i = Xc(e)), typeof i == "function"))
    for (e = i.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (i = r + Al(s, u++)), (a += Or(s, t, n, i, l));
  else if (s === "object")
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
  return a;
}
function Nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Or(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function ed(e) {
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
var Pe = { current: null },
  Qr = { transition: null },
  td = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: Qr,
    ReactCurrentOwner: uo,
  };
function Di() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: Nr,
  forEach: function (e, t, n) {
    Nr(
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
      Nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!co(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = bn;
K.Fragment = Ac;
K.Profiler = Bc;
K.PureComponent = ao;
K.StrictMode = Vc;
K.Suspense = qc;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = td;
K.act = Di;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ni({}, e.props),
    l = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = uo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (i in t)
      _i.call(t, i) &&
        !Ei.hasOwnProperty(i) &&
        (r[i] = t[i] === void 0 && u !== void 0 ? u[i] : t[i]);
  }
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    u = Array(i);
    for (var d = 0; d < i; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: xr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hc, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = bi;
K.createFactory = function (e) {
  var t = bi.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Gc, render: e };
};
K.isValidElement = co;
K.lazy = function (e) {
  return { $$typeof: Kc, _payload: { _status: -1, _result: e }, _init: ed };
};
K.memo = function (e, t) {
  return { $$typeof: Yc, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Qr.transition;
  Qr.transition = {};
  try {
    e();
  } finally {
    Qr.transition = t;
  }
};
K.unstable_act = Di;
K.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Pe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
K.useId = function () {
  return Pe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Pe.current.useRef(e);
};
K.useState = function (e) {
  return Pe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Pe.current.useTransition();
};
K.version = "18.3.1";
Si.exports = K;
var C = Si.exports;
const Pi = Oc(C);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = C,
  rd = Symbol.for("react.element"),
  ld = Symbol.for("react.fragment"),
  sd = Object.prototype.hasOwnProperty,
  od = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ad = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ti(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) sd.call(t, r) && !ad.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: rd,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: od.current,
  };
}
Nl.Fragment = ld;
Nl.jsx = Ti;
Nl.jsxs = Ti;
wi.exports = Nl;
var o = wi.exports,
  Li = { exports: {} },
  Qe = {},
  Mi = { exports: {} },
  zi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(c, f) {
    var x = c.length;
    c.push(f);
    e: for (; 0 < x; ) {
      var v = (x - 1) >>> 1,
        E = c[v];
      if (0 < l(E, f)) (c[v] = f), (c[x] = E), (x = v);
      else break e;
    }
  }
  function n(c) {
    return c.length === 0 ? null : c[0];
  }
  function r(c) {
    if (c.length === 0) return null;
    var f = c[0],
      x = c.pop();
    if (x !== f) {
      c[0] = x;
      e: for (var v = 0, E = c.length, y = E >>> 1; v < y; ) {
        var N = 2 * (v + 1) - 1,
          R = c[N],
          Q = N + 1,
          G = c[Q];
        if (0 > l(R, x))
          Q < E && 0 > l(G, R)
            ? ((c[v] = G), (c[Q] = x), (v = Q))
            : ((c[v] = R), (c[N] = x), (v = N));
        else if (Q < E && 0 > l(G, x)) (c[v] = G), (c[Q] = x), (v = Q);
        else break e;
      }
    }
    return f;
  }
  function l(c, f) {
    var x = c.sortIndex - f.sortIndex;
    return x !== 0 ? x : c.id - f.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var i = [],
    d = [],
    S = 1,
    w = null,
    h = 3,
    _ = !1,
    k = !1,
    P = !1,
    B = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(c) {
    for (var f = n(d); f !== null; ) {
      if (f.callback === null) r(d);
      else if (f.startTime <= c)
        r(d), (f.sortIndex = f.expirationTime), t(i, f);
      else break;
      f = n(d);
    }
  }
  function b(c) {
    if (((P = !1), g(c), !k))
      if (n(i) !== null) (k = !0), O(M);
      else {
        var f = n(d);
        f !== null && V(b, f.startTime - c);
      }
  }
  function M(c, f) {
    (k = !1), P && ((P = !1), m(U), (U = -1)), (_ = !0);
    var x = h;
    try {
      for (
        g(f), w = n(i);
        w !== null && (!(w.expirationTime > f) || (c && !A()));

      ) {
        var v = w.callback;
        if (typeof v == "function") {
          (w.callback = null), (h = w.priorityLevel);
          var E = v(w.expirationTime <= f);
          (f = e.unstable_now()),
            typeof E == "function" ? (w.callback = E) : w === n(i) && r(i),
            g(f);
        } else r(i);
        w = n(i);
      }
      if (w !== null) var y = !0;
      else {
        var N = n(d);
        N !== null && V(b, N.startTime - f), (y = !1);
      }
      return y;
    } finally {
      (w = null), (h = x), (_ = !1);
    }
  }
  var I = !1,
    z = null,
    U = -1,
    Y = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < Y);
  }
  function F() {
    if (z !== null) {
      var c = e.unstable_now();
      T = c;
      var f = !0;
      try {
        f = z(!0, c);
      } finally {
        f ? D() : ((I = !1), (z = null));
      }
    } else I = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(F);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      j = H.port2;
    (H.port1.onmessage = F),
      (D = function () {
        j.postMessage(null);
      });
  } else
    D = function () {
      B(F, 0);
    };
  function O(c) {
    (z = c), I || ((I = !0), D());
  }
  function V(c, f) {
    U = B(function () {
      c(e.unstable_now());
    }, f);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (c) {
      c.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || _ || ((k = !0), O(M));
    }),
    (e.unstable_forceFrameRate = function (c) {
      0 > c || 125 < c
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < c ? Math.floor(1e3 / c) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(i);
    }),
    (e.unstable_next = function (c) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var f = 3;
          break;
        default:
          f = h;
      }
      var x = h;
      h = f;
      try {
        return c();
      } finally {
        h = x;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (c, f) {
      switch (c) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          c = 3;
      }
      var x = h;
      h = c;
      try {
        return f();
      } finally {
        h = x;
      }
    }),
    (e.unstable_scheduleCallback = function (c, f, x) {
      var v = e.unstable_now();
      switch (
        (typeof x == "object" && x !== null
          ? ((x = x.delay), (x = typeof x == "number" && 0 < x ? v + x : v))
          : (x = v),
        c)
      ) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return (
        (E = x + E),
        (c = {
          id: S++,
          callback: f,
          priorityLevel: c,
          startTime: x,
          expirationTime: E,
          sortIndex: -1,
        }),
        x > v
          ? ((c.sortIndex = x),
            t(d, c),
            n(i) === null &&
              c === n(d) &&
              (P ? (m(U), (U = -1)) : (P = !0), V(b, x - v)))
          : ((c.sortIndex = E), t(i, c), k || _ || ((k = !0), O(M))),
        c
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (c) {
      var f = h;
      return function () {
        var x = h;
        h = f;
        try {
          return c.apply(this, arguments);
        } finally {
          h = x;
        }
      };
    });
})(zi);
Mi.exports = zi;
var id = Mi.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = C,
  Oe = id;
function L(e) {
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
var Ii = new Set(),
  Zn = {};
function Zt(e, t) {
  Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Ii.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ms = Object.prototype.hasOwnProperty,
  cd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fa = {},
  pa = {};
function dd(e) {
  return ms.call(pa, e)
    ? !0
    : ms.call(fa, e)
    ? !1
    : cd.test(e)
    ? (pa[e] = !0)
    : ((fa[e] = !0), !1);
}
function fd(e, t, n, r) {
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
function pd(e, t, n, r) {
  if (t === null || typeof t > "u" || fd(e, t, n, r)) return !0;
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
function Te(e, t, n, r, l, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fo = /[\-:]([a-z])/g;
function po(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fo, po);
    we[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fo, po);
    we[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fo, po);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mo(e, t, n, r) {
  var l = we.hasOwnProperty(t) ? we[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pd(t, n, l, r) && (n = null),
    r || l === null
      ? dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var gt = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  ho = Symbol.for("react.strict_mode"),
  hs = Symbol.for("react.profiler"),
  Ui = Symbol.for("react.provider"),
  Ri = Symbol.for("react.context"),
  xo = Symbol.for("react.forward_ref"),
  xs = Symbol.for("react.suspense"),
  ys = Symbol.for("react.suspense_list"),
  yo = Symbol.for("react.memo"),
  wt = Symbol.for("react.lazy"),
  $i = Symbol.for("react.offscreen"),
  ma = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ma && e[ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Vl;
function Fn(e) {
  if (Vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vl = (t && t[1]) || "";
    }
  return (
    `
` +
    Vl +
    e
  );
}
var Bl = !1;
function Hl(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          s = r.stack.split(`
`),
          a = l.length - 1,
          u = s.length - 1;
        1 <= a && 0 <= u && l[a] !== s[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (l[a] !== s[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || l[a] !== s[u])) {
                var i =
                  `
` + l[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    i.includes("<anonymous>") &&
                    (i = i.replace("<anonymous>", e.displayName)),
                  i
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (Bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function md(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function gs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case hs:
      return "Profiler";
    case ho:
      return "StrictMode";
    case xs:
      return "Suspense";
    case ys:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ri:
        return (e.displayName || "Context") + ".Consumer";
      case Ui:
        return (e._context.displayName || "Context") + ".Provider";
      case xo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yo:
        return (
          (t = e.displayName || null), t !== null ? t : gs(e.type) || "Memo"
        );
      case wt:
        (t = e._payload), (e = e._init);
        try {
          return gs(e(t));
        } catch {}
    }
  return null;
}
function hd(e) {
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
      return gs(t);
    case 8:
      return t === ho ? "StrictMode" : "Mode";
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
function zt(e) {
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
function Fi(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xd(e) {
  var t = Fi(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = xd(e));
}
function Oi(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fi(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vs(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ha(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qi(e, t) {
  (t = t.checked), t != null && mo(e, "checked", t, !1);
}
function ws(e, t) {
  Qi(e, t);
  var n = zt(t.value),
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
    ? Ss(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ss(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xa(e, t, n) {
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
function Ss(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var On = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function js(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ya(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (On(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Ai(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ga(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vi(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ns(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vi(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _r,
  Bi = (function (e) {
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
        _r = _r || document.createElement("div"),
          _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _r.firstChild;
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
var Vn = {
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
  yd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function (e) {
  yd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
  });
});
function Hi(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wi(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Hi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gd = oe(
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
function ks(e, t) {
  if (t) {
    if (gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Cs(e, t) {
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
var _s = null;
function go(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Es = null,
  xn = null,
  yn = null;
function va(e) {
  if ((e = vr(e))) {
    if (typeof Es != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = bl(t)), Es(e.stateNode, e.type, t));
  }
}
function Gi(e) {
  xn ? (yn ? yn.push(e) : (yn = [e])) : (xn = e);
}
function qi() {
  if (xn) {
    var e = xn,
      t = yn;
    if (((yn = xn = null), va(e), t)) for (e = 0; e < t.length; e++) va(t[e]);
  }
}
function Yi(e, t) {
  return e(t);
}
function Ki() {}
var Wl = !1;
function Xi(e, t, n) {
  if (Wl) return e(t, n);
  Wl = !0;
  try {
    return Yi(e, t, n);
  } finally {
    (Wl = !1), (xn !== null || yn !== null) && (Ki(), qi());
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bl(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var bs = !1;
if (mt)
  try {
    var Ln = {};
    Object.defineProperty(Ln, "passive", {
      get: function () {
        bs = !0;
      },
    }),
      window.addEventListener("test", Ln, Ln),
      window.removeEventListener("test", Ln, Ln);
  } catch {
    bs = !1;
  }
function vd(e, t, n, r, l, s, a, u, i) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (S) {
    this.onError(S);
  }
}
var Bn = !1,
  Jr = null,
  el = !1,
  Ds = null,
  wd = {
    onError: function (e) {
      (Bn = !0), (Jr = e);
    },
  };
function Sd(e, t, n, r, l, s, a, u, i) {
  (Bn = !1), (Jr = null), vd.apply(wd, arguments);
}
function jd(e, t, n, r, l, s, a, u, i) {
  if ((Sd.apply(this, arguments), Bn)) {
    if (Bn) {
      var d = Jr;
      (Bn = !1), (Jr = null);
    } else throw Error(L(198));
    el || ((el = !0), (Ds = d));
  }
}
function Jt(e) {
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
function Zi(e) {
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
function wa(e) {
  if (Jt(e) !== e) throw Error(L(188));
}
function Nd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(L(188));
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
        if (s === n) return wa(l), e;
        if (s === r) return wa(l), t;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var a = !1, u = l.child; u; ) {
        if (u === n) {
          (a = !0), (n = l), (r = s);
          break;
        }
        if (u === r) {
          (a = !0), (r = l), (n = s);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = s.child; u; ) {
          if (u === n) {
            (a = !0), (n = s), (r = l);
            break;
          }
          if (u === r) {
            (a = !0), (r = s), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Ji(e) {
  return (e = Nd(e)), e !== null ? eu(e) : null;
}
function eu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = eu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var tu = Oe.unstable_scheduleCallback,
  Sa = Oe.unstable_cancelCallback,
  kd = Oe.unstable_shouldYield,
  Cd = Oe.unstable_requestPaint,
  ue = Oe.unstable_now,
  _d = Oe.unstable_getCurrentPriorityLevel,
  vo = Oe.unstable_ImmediatePriority,
  nu = Oe.unstable_UserBlockingPriority,
  tl = Oe.unstable_NormalPriority,
  Ed = Oe.unstable_LowPriority,
  ru = Oe.unstable_IdlePriority,
  kl = null,
  at = null;
function bd(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Td,
  Dd = Math.log,
  Pd = Math.LN2;
function Td(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dd(e) / Pd) | 0)) | 0;
}
var Er = 64,
  br = 4194304;
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
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~l;
    u !== 0 ? (r = Qn(u)) : ((s &= a), s !== 0 && (r = Qn(s)));
  } else (a = n & ~l), a !== 0 ? (r = Qn(a)) : s !== 0 && (r = Qn(s));
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
      (n = 31 - et(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ld(e, t) {
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
function Md(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - et(s),
      u = 1 << a,
      i = l[a];
    i === -1
      ? (!(u & n) || u & r) && (l[a] = Ld(u, t))
      : i <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function Ps(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lu() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function zd(e, t) {
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
    var l = 31 - et(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function wo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function su(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ou,
  So,
  au,
  iu,
  uu,
  Ts = !1,
  Dr = [],
  _t = null,
  Et = null,
  bt = null,
  tr = new Map(),
  nr = new Map(),
  jt = [],
  Id =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ja(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      nr.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = vr(t)), t !== null && So(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ud(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (_t = Mn(_t, e, t, n, r, l)), !0;
    case "dragenter":
      return (Et = Mn(Et, e, t, n, r, l)), !0;
    case "mouseover":
      return (bt = Mn(bt, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return tr.set(s, Mn(tr.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), nr.set(s, Mn(nr.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function cu(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zi(n)), t !== null)) {
          (e.blockedOn = t),
            uu(e.priority, function () {
              au(n);
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
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ls(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_s = r), n.target.dispatchEvent(r), (_s = null);
    } else return (t = vr(n)), t !== null && So(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Na(e, t, n) {
  Ar(e) && n.delete(t);
}
function Rd() {
  (Ts = !1),
    _t !== null && Ar(_t) && (_t = null),
    Et !== null && Ar(Et) && (Et = null),
    bt !== null && Ar(bt) && (bt = null),
    tr.forEach(Na),
    nr.forEach(Na);
}
function zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ts ||
      ((Ts = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Rd)));
}
function rr(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < Dr.length) {
    zn(Dr[0], e);
    for (var n = 1; n < Dr.length; n++) {
      var r = Dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && zn(_t, e),
      Et !== null && zn(Et, e),
      bt !== null && zn(bt, e),
      tr.forEach(t),
      nr.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    cu(n), n.blockedOn === null && jt.shift();
}
var gn = gt.ReactCurrentBatchConfig,
  rl = !0;
function $d(e, t, n, r) {
  var l = J,
    s = gn.transition;
  gn.transition = null;
  try {
    (J = 1), jo(e, t, n, r);
  } finally {
    (J = l), (gn.transition = s);
  }
}
function Fd(e, t, n, r) {
  var l = J,
    s = gn.transition;
  gn.transition = null;
  try {
    (J = 4), jo(e, t, n, r);
  } finally {
    (J = l), (gn.transition = s);
  }
}
function jo(e, t, n, r) {
  if (rl) {
    var l = Ls(e, t, n, r);
    if (l === null) rs(e, t, r, ll, n), ja(e, r);
    else if (Ud(l, e, t, n, r)) r.stopPropagation();
    else if ((ja(e, r), t & 4 && -1 < Id.indexOf(e))) {
      for (; l !== null; ) {
        var s = vr(l);
        if (
          (s !== null && ou(s),
          (s = Ls(e, t, n, r)),
          s === null && rs(e, t, r, ll, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else rs(e, t, r, null, n);
  }
}
var ll = null;
function Ls(e, t, n, r) {
  if (((ll = null), (e = go(r)), (e = Qt(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zi(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function du(e) {
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
      switch (_d()) {
        case vo:
          return 1;
        case nu:
          return 4;
        case tl:
        case Ed:
          return 16;
        case ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  No = null,
  Vr = null;
function fu() {
  if (Vr) return Vr;
  var e,
    t = No,
    n = t.length,
    r,
    l = "value" in kt ? kt.value : kt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++);
  return (Vr = l.slice(e, 1 < r ? 1 - r : void 0));
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
function ka() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, s, a) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Pr
        : ka),
      (this.isPropagationStopped = ka),
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
var Dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ko = Ae(Dn),
  gr = oe({}, Dn, { view: 0, detail: 0 }),
  Od = Ae(gr),
  ql,
  Yl,
  In,
  Cl = oe({}, gr, {
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
    getModifierState: Co,
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
        : (e !== In &&
            (In && e.type === "mousemove"
              ? ((ql = e.screenX - In.screenX), (Yl = e.screenY - In.screenY))
              : (Yl = ql = 0),
            (In = e)),
          ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  Ca = Ae(Cl),
  Qd = oe({}, Cl, { dataTransfer: 0 }),
  Ad = Ae(Qd),
  Vd = oe({}, gr, { relatedTarget: 0 }),
  Kl = Ae(Vd),
  Bd = oe({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = Ae(Bd),
  Wd = oe({}, Dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gd = Ae(Wd),
  qd = oe({}, Dn, { data: 0 }),
  _a = Ae(qd),
  Yd = {
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
  Kd = {
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
  Xd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xd[e]) ? !!t[e] : !1;
}
function Co() {
  return Zd;
}
var Jd = oe({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = Yd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Kd[e.keyCode] || "Unidentified"
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
    getModifierState: Co,
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
  ef = Ae(Jd),
  tf = oe({}, Cl, {
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
  Ea = Ae(tf),
  nf = oe({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Co,
  }),
  rf = Ae(nf),
  lf = oe({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sf = Ae(lf),
  of = oe({}, Cl, {
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
  af = Ae(of),
  uf = [9, 13, 27, 32],
  _o = mt && "CompositionEvent" in window,
  Hn = null;
mt && "documentMode" in document && (Hn = document.documentMode);
var cf = mt && "TextEvent" in window && !Hn,
  pu = mt && (!_o || (Hn && 8 < Hn && 11 >= Hn)),
  ba = " ",
  Da = !1;
function mu(e, t) {
  switch (e) {
    case "keyup":
      return uf.indexOf(t.keyCode) !== -1;
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
function hu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function df(e, t) {
  switch (e) {
    case "compositionend":
      return hu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Da = !0), ba);
    case "textInput":
      return (e = t.data), e === ba && Da ? null : e;
    default:
      return null;
  }
}
function ff(e, t) {
  if (ln)
    return e === "compositionend" || (!_o && mu(e, t))
      ? ((e = fu()), (Vr = No = kt = null), (ln = !1), e)
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
      return pu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pf = {
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
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pf[e.type] : t === "textarea";
}
function xu(e, t, n, r) {
  Gi(r),
    (t = sl(t, "onChange")),
    0 < t.length &&
      ((n = new ko("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wn = null,
  lr = null;
function mf(e) {
  Eu(e, 0);
}
function _l(e) {
  var t = an(e);
  if (Oi(t)) return e;
}
function hf(e, t) {
  if (e === "change") return t;
}
var yu = !1;
if (mt) {
  var Xl;
  if (mt) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Ta = document.createElement("div");
      Ta.setAttribute("oninput", "return;"),
        (Zl = typeof Ta.oninput == "function");
    }
    Xl = Zl;
  } else Xl = !1;
  yu = Xl && (!document.documentMode || 9 < document.documentMode);
}
function La() {
  Wn && (Wn.detachEvent("onpropertychange", gu), (lr = Wn = null));
}
function gu(e) {
  if (e.propertyName === "value" && _l(lr)) {
    var t = [];
    xu(t, lr, e, go(e)), Xi(mf, t);
  }
}
function xf(e, t, n) {
  e === "focusin"
    ? (La(), (Wn = t), (lr = n), Wn.attachEvent("onpropertychange", gu))
    : e === "focusout" && La();
}
function yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(lr);
}
function gf(e, t) {
  if (e === "click") return _l(t);
}
function vf(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function wf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : wf;
function sr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ms.call(t, l) || !nt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function za(e, t) {
  var n = Ma(e);
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
    n = Ma(n);
  }
}
function vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? vu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wu() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function Eo(e) {
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
function Sf(e) {
  var t = wu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Eo(n)) {
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
          s = Math.min(r.start, l);
        (r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = za(n, s));
        var a = za(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var jf = mt && "documentMode" in document && 11 >= document.documentMode,
  sn = null,
  Ms = null,
  Gn = null,
  zs = !1;
function Ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zs ||
    sn == null ||
    sn !== Zr(r) ||
    ((r = sn),
    "selectionStart" in r && Eo(r)
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
    (Gn && sr(Gn, r)) ||
      ((Gn = r),
      (r = sl(Ms, "onSelect")),
      0 < r.length &&
        ((t = new ko("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sn))));
}
function Tr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var on = {
    animationend: Tr("Animation", "AnimationEnd"),
    animationiteration: Tr("Animation", "AnimationIteration"),
    animationstart: Tr("Animation", "AnimationStart"),
    transitionend: Tr("Transition", "TransitionEnd"),
  },
  Jl = {},
  Su = {};
mt &&
  ((Su = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete on.animationend.animation,
    delete on.animationiteration.animation,
    delete on.animationstart.animation),
  "TransitionEvent" in window || delete on.transitionend.transition);
function El(e) {
  if (Jl[e]) return Jl[e];
  if (!on[e]) return e;
  var t = on[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Su) return (Jl[e] = t[n]);
  return e;
}
var ju = El("animationend"),
  Nu = El("animationiteration"),
  ku = El("animationstart"),
  Cu = El("transitionend"),
  _u = new Map(),
  Ua =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ut(e, t) {
  _u.set(e, t), Zt(t, [e]);
}
for (var es = 0; es < Ua.length; es++) {
  var ts = Ua[es],
    Nf = ts.toLowerCase(),
    kf = ts[0].toUpperCase() + ts.slice(1);
  Ut(Nf, "on" + kf);
}
Ut(ju, "onAnimationEnd");
Ut(Nu, "onAnimationIteration");
Ut(ku, "onAnimationStart");
Ut("dblclick", "onDoubleClick");
Ut("focusin", "onFocus");
Ut("focusout", "onBlur");
Ut(Cu, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var An =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Cf = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));
function Ra(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jd(r, t, void 0, e), (e.currentTarget = null);
}
function Eu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            i = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), i !== s && l.isPropagationStopped())) break e;
          Ra(l, u, d), (s = i);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (i = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            i !== s && l.isPropagationStopped())
          )
            break e;
          Ra(l, u, d), (s = i);
        }
    }
  }
  if (el) throw ((e = Ds), (el = !1), (Ds = null), e);
}
function te(e, t) {
  var n = t[Fs];
  n === void 0 && (n = t[Fs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bu(t, e, 2, !1), n.add(r));
}
function ns(e, t, n) {
  var r = 0;
  t && (r |= 4), bu(n, e, r, t);
}
var Lr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[Lr]) {
    (e[Lr] = !0),
      Ii.forEach(function (n) {
        n !== "selectionchange" && (Cf.has(n) || ns(n, !1, e), ns(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Lr] || ((t[Lr] = !0), ns("selectionchange", !1, t));
  }
}
function bu(e, t, n, r) {
  switch (du(t)) {
    case 1:
      var l = $d;
      break;
    case 4:
      l = Fd;
      break;
    default:
      l = jo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !bs ||
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
function rs(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var i = a.tag;
            if (
              (i === 3 || i === 4) &&
              ((i = a.stateNode.containerInfo),
              i === l || (i.nodeType === 8 && i.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = Qt(u)), a === null)) return;
          if (((i = a.tag), i === 5 || i === 6)) {
            r = s = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Xi(function () {
    var d = s,
      S = go(n),
      w = [];
    e: {
      var h = _u.get(e);
      if (h !== void 0) {
        var _ = ko,
          k = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = ef;
            break;
          case "focusin":
            (k = "focus"), (_ = Kl);
            break;
          case "focusout":
            (k = "blur"), (_ = Kl);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Kl;
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
            _ = Ca;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = rf;
            break;
          case ju:
          case Nu:
          case ku:
            _ = Hd;
            break;
          case Cu:
            _ = sf;
            break;
          case "scroll":
            _ = Od;
            break;
          case "wheel":
            _ = af;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Gd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Ea;
        }
        var P = (t & 4) !== 0,
          B = !P && e === "scroll",
          m = P ? (h !== null ? h + "Capture" : null) : h;
        P = [];
        for (var p = d, g; p !== null; ) {
          g = p;
          var b = g.stateNode;
          if (
            (g.tag === 5 &&
              b !== null &&
              ((g = b),
              m !== null && ((b = er(p, m)), b != null && P.push(ar(p, b, g)))),
            B)
          )
            break;
          p = p.return;
        }
        0 < P.length &&
          ((h = new _(h, k, null, n, S)), w.push({ event: h, listeners: P }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          h &&
            n !== _s &&
            (k = n.relatedTarget || n.fromElement) &&
            (Qt(k) || k[ht]))
        )
          break e;
        if (
          (_ || h) &&
          ((h =
            S.window === S
              ? S
              : (h = S.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          _
            ? ((k = n.relatedTarget || n.toElement),
              (_ = d),
              (k = k ? Qt(k) : null),
              k !== null &&
                ((B = Jt(k)), k !== B || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((_ = null), (k = d)),
          _ !== k)
        ) {
          if (
            ((P = Ca),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((P = Ea),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (B = _ == null ? h : an(_)),
            (g = k == null ? h : an(k)),
            (h = new P(b, p + "leave", _, n, S)),
            (h.target = B),
            (h.relatedTarget = g),
            (b = null),
            Qt(S) === d &&
              ((P = new P(m, p + "enter", k, n, S)),
              (P.target = g),
              (P.relatedTarget = B),
              (b = P)),
            (B = b),
            _ && k)
          )
            t: {
              for (P = _, m = k, p = 0, g = P; g; g = tn(g)) p++;
              for (g = 0, b = m; b; b = tn(b)) g++;
              for (; 0 < p - g; ) (P = tn(P)), p--;
              for (; 0 < g - p; ) (m = tn(m)), g--;
              for (; p--; ) {
                if (P === m || (m !== null && P === m.alternate)) break t;
                (P = tn(P)), (m = tn(m));
              }
              P = null;
            }
          else P = null;
          _ !== null && $a(w, h, _, P, !1),
            k !== null && B !== null && $a(w, B, k, P, !0);
        }
      }
      e: {
        if (
          ((h = d ? an(d) : window),
          (_ = h.nodeName && h.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && h.type === "file"))
        )
          var M = hf;
        else if (Pa(h))
          if (yu) M = vf;
          else {
            M = yf;
            var I = xf;
          }
        else
          (_ = h.nodeName) &&
            _.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (M = gf);
        if (M && (M = M(e, d))) {
          xu(w, M, n, S);
          break e;
        }
        I && I(e, h, d),
          e === "focusout" &&
            (I = h._wrapperState) &&
            I.controlled &&
            h.type === "number" &&
            Ss(h, "number", h.value);
      }
      switch (((I = d ? an(d) : window), e)) {
        case "focusin":
          (Pa(I) || I.contentEditable === "true") &&
            ((sn = I), (Ms = d), (Gn = null));
          break;
        case "focusout":
          Gn = Ms = sn = null;
          break;
        case "mousedown":
          zs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zs = !1), Ia(w, n, S);
          break;
        case "selectionchange":
          if (jf) break;
        case "keydown":
        case "keyup":
          Ia(w, n, S);
      }
      var z;
      if (_o)
        e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
      else
        ln
          ? mu(e, n) && (U = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
      U &&
        (pu &&
          n.locale !== "ko" &&
          (ln || U !== "onCompositionStart"
            ? U === "onCompositionEnd" && ln && (z = fu())
            : ((kt = S),
              (No = "value" in kt ? kt.value : kt.textContent),
              (ln = !0))),
        (I = sl(d, U)),
        0 < I.length &&
          ((U = new _a(U, e, null, n, S)),
          w.push({ event: U, listeners: I }),
          z ? (U.data = z) : ((z = hu(n)), z !== null && (U.data = z)))),
        (z = cf ? df(e, n) : ff(e, n)) &&
          ((d = sl(d, "onBeforeInput")),
          0 < d.length &&
            ((S = new _a("onBeforeInput", "beforeinput", null, n, S)),
            w.push({ event: S, listeners: d }),
            (S.data = z)));
    }
    Eu(w, t);
  });
}
function ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = er(e, n)),
      s != null && r.unshift(ar(e, s, l)),
      (s = er(e, t)),
      s != null && r.push(ar(e, s, l))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $a(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      i = u.alternate,
      d = u.stateNode;
    if (i !== null && i === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((i = er(n, s)), i != null && a.unshift(ar(n, i, u)))
        : l || ((i = er(n, s)), i != null && a.push(ar(n, i, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var _f = /\r\n?/g,
  Ef = /\u0000|\uFFFD/g;
function Fa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _f,
      `
`
    )
    .replace(Ef, "");
}
function Mr(e, t, n) {
  if (((t = Fa(t)), Fa(e) !== t && n)) throw Error(L(425));
}
function ol() {}
var Is = null,
  Us = null;
function Rs(e, t) {
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
var $s = typeof setTimeout == "function" ? setTimeout : void 0,
  bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Oa = typeof Promise == "function" ? Promise : void 0,
  Df =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Oa < "u"
      ? function (e) {
          return Oa.resolve(null).then(e).catch(Pf);
        }
      : $s;
function Pf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ls(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  rr(t);
}
function Dt(e) {
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
function Qa(e) {
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
var Pn = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + Pn,
  ir = "__reactProps$" + Pn,
  ht = "__reactContainer$" + Pn,
  Fs = "__reactEvents$" + Pn,
  Tf = "__reactListeners$" + Pn,
  Lf = "__reactHandles$" + Pn;
function Qt(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qa(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Qa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[ot] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function bl(e) {
  return e[ir] || null;
}
var Os = [],
  un = -1;
function Rt(e) {
  return { current: e };
}
function ne(e) {
  0 > un || ((e.current = Os[un]), (Os[un] = null), un--);
}
function ee(e, t) {
  un++, (Os[un] = e.current), (e.current = t);
}
var It = {},
  _e = Rt(It),
  ze = Rt(!1),
  Gt = It;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
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
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function al() {
  ne(ze), ne(_e);
}
function Aa(e, t, n) {
  if (_e.current !== It) throw Error(L(168));
  ee(_e, t), ee(ze, n);
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, hd(e) || "Unknown", l));
  return oe({}, n, r);
}
function il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
    (Gt = _e.current),
    ee(_e, e),
    ee(ze, ze.current),
    !0
  );
}
function Va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Du(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(ze),
      ne(_e),
      ee(_e, e))
    : ne(ze),
    ee(ze, n);
}
var ct = null,
  Dl = !1,
  ss = !1;
function Pu(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function Mf(e) {
  (Dl = !0), Pu(e);
}
function $t() {
  if (!ss && ct !== null) {
    ss = !0;
    var e = 0,
      t = J;
    try {
      var n = ct;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (Dl = !1);
    } catch (l) {
      throw (ct !== null && (ct = ct.slice(e + 1)), tu(vo, $t), l);
    } finally {
      (J = t), (ss = !1);
    }
  }
  return null;
}
var cn = [],
  dn = 0,
  ul = null,
  cl = 0,
  Ve = [],
  Be = 0,
  qt = null,
  dt = 1,
  ft = "";
function Ft(e, t) {
  (cn[dn++] = cl), (cn[dn++] = ul), (ul = e), (cl = t);
}
function Tu(e, t, n) {
  (Ve[Be++] = dt), (Ve[Be++] = ft), (Ve[Be++] = qt), (qt = e);
  var r = dt;
  e = ft;
  var l = 32 - et(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - et(t) + l;
  if (30 < s) {
    var a = l - (l % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (dt = (1 << (32 - et(t) + l)) | (n << l) | r),
      (ft = s + e);
  } else (dt = (1 << s) | (n << l) | r), (ft = e);
}
function bo(e) {
  e.return !== null && (Ft(e, 1), Tu(e, 1, 0));
}
function Do(e) {
  for (; e === ul; )
    (ul = cn[--dn]), (cn[dn] = null), (cl = cn[--dn]), (cn[dn] = null);
  for (; e === qt; )
    (qt = Ve[--Be]),
      (Ve[Be] = null),
      (ft = Ve[--Be]),
      (Ve[Be] = null),
      (dt = Ve[--Be]),
      (Ve[Be] = null);
}
var Fe = null,
  $e = null,
  re = !1,
  Je = null;
function Lu(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), ($e = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), ($e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qt !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            ($e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function As(e) {
  if (re) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Ba(e, t)) {
        if (Qs(e)) throw Error(L(418));
        t = Dt(n.nextSibling);
        var r = Fe;
        t && Ba(e, t)
          ? Lu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Fe = e));
      }
    } else {
      if (Qs(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Fe = e);
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function zr(e) {
  if (e !== Fe) return !1;
  if (!re) return Ha(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rs(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (Qs(e)) throw (Mu(), Error(L(418)));
    for (; t; ) Lu(e, t), (t = Dt(t.nextSibling));
  }
  if ((Ha(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Fe ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Mu() {
  for (var e = $e; e; ) e = Dt(e.nextSibling);
}
function Nn() {
  ($e = Fe = null), (re = !1);
}
function Po(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var zf = gt.ReactCurrentBatchConfig;
function Un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var u = l.refs;
            a === null ? delete u[s] : (u[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wa(e) {
  var t = e._init;
  return t(e._payload);
}
function zu(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function l(m, p) {
    return (m = Mt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, p, g, b) {
    return p === null || p.tag !== 6
      ? ((p = fs(g, m.mode, b)), (p.return = m), p)
      : ((p = l(p, g)), (p.return = m), p);
  }
  function i(m, p, g, b) {
    var M = g.type;
    return M === rn
      ? S(m, p, g.props.children, b, g.key)
      : p !== null &&
        (p.elementType === M ||
          (typeof M == "object" &&
            M !== null &&
            M.$$typeof === wt &&
            Wa(M) === p.type))
      ? ((b = l(p, g.props)), (b.ref = Un(m, p, g)), (b.return = m), b)
      : ((b = Xr(g.type, g.key, g.props, null, m.mode, b)),
        (b.ref = Un(m, p, g)),
        (b.return = m),
        b);
  }
  function d(m, p, g, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ps(g, m.mode, b)), (p.return = m), p)
      : ((p = l(p, g.children || [])), (p.return = m), p);
  }
  function S(m, p, g, b, M) {
    return p === null || p.tag !== 7
      ? ((p = Wt(g, m.mode, b, M)), (p.return = m), p)
      : ((p = l(p, g)), (p.return = m), p);
  }
  function w(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = fs("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kr:
          return (
            (g = Xr(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = Un(m, null, p)),
            (g.return = m),
            g
          );
        case nn:
          return (p = ps(p, m.mode, g)), (p.return = m), p;
        case wt:
          var b = p._init;
          return w(m, b(p._payload), g);
      }
      if (On(p) || Tn(p))
        return (p = Wt(p, m.mode, g, null)), (p.return = m), p;
      Ir(m, p);
    }
    return null;
  }
  function h(m, p, g, b) {
    var M = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return M !== null ? null : u(m, p, "" + g, b);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case kr:
          return g.key === M ? i(m, p, g, b) : null;
        case nn:
          return g.key === M ? d(m, p, g, b) : null;
        case wt:
          return (M = g._init), h(m, p, M(g._payload), b);
      }
      if (On(g) || Tn(g)) return M !== null ? null : S(m, p, g, b, null);
      Ir(m, g);
    }
    return null;
  }
  function _(m, p, g, b, M) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(g) || null), u(p, m, "" + b, M);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case kr:
          return (m = m.get(b.key === null ? g : b.key) || null), i(p, m, b, M);
        case nn:
          return (m = m.get(b.key === null ? g : b.key) || null), d(p, m, b, M);
        case wt:
          var I = b._init;
          return _(m, p, g, I(b._payload), M);
      }
      if (On(b) || Tn(b)) return (m = m.get(g) || null), S(p, m, b, M, null);
      Ir(p, b);
    }
    return null;
  }
  function k(m, p, g, b) {
    for (
      var M = null, I = null, z = p, U = (p = 0), Y = null;
      z !== null && U < g.length;
      U++
    ) {
      z.index > U ? ((Y = z), (z = null)) : (Y = z.sibling);
      var T = h(m, z, g[U], b);
      if (T === null) {
        z === null && (z = Y);
        break;
      }
      e && z && T.alternate === null && t(m, z),
        (p = s(T, p, U)),
        I === null ? (M = T) : (I.sibling = T),
        (I = T),
        (z = Y);
    }
    if (U === g.length) return n(m, z), re && Ft(m, U), M;
    if (z === null) {
      for (; U < g.length; U++)
        (z = w(m, g[U], b)),
          z !== null &&
            ((p = s(z, p, U)), I === null ? (M = z) : (I.sibling = z), (I = z));
      return re && Ft(m, U), M;
    }
    for (z = r(m, z); U < g.length; U++)
      (Y = _(z, m, U, g[U], b)),
        Y !== null &&
          (e && Y.alternate !== null && z.delete(Y.key === null ? U : Y.key),
          (p = s(Y, p, U)),
          I === null ? (M = Y) : (I.sibling = Y),
          (I = Y));
    return (
      e &&
        z.forEach(function (A) {
          return t(m, A);
        }),
      re && Ft(m, U),
      M
    );
  }
  function P(m, p, g, b) {
    var M = Tn(g);
    if (typeof M != "function") throw Error(L(150));
    if (((g = M.call(g)), g == null)) throw Error(L(151));
    for (
      var I = (M = null), z = p, U = (p = 0), Y = null, T = g.next();
      z !== null && !T.done;
      U++, T = g.next()
    ) {
      z.index > U ? ((Y = z), (z = null)) : (Y = z.sibling);
      var A = h(m, z, T.value, b);
      if (A === null) {
        z === null && (z = Y);
        break;
      }
      e && z && A.alternate === null && t(m, z),
        (p = s(A, p, U)),
        I === null ? (M = A) : (I.sibling = A),
        (I = A),
        (z = Y);
    }
    if (T.done) return n(m, z), re && Ft(m, U), M;
    if (z === null) {
      for (; !T.done; U++, T = g.next())
        (T = w(m, T.value, b)),
          T !== null &&
            ((p = s(T, p, U)), I === null ? (M = T) : (I.sibling = T), (I = T));
      return re && Ft(m, U), M;
    }
    for (z = r(m, z); !T.done; U++, T = g.next())
      (T = _(z, m, U, T.value, b)),
        T !== null &&
          (e && T.alternate !== null && z.delete(T.key === null ? U : T.key),
          (p = s(T, p, U)),
          I === null ? (M = T) : (I.sibling = T),
          (I = T));
    return (
      e &&
        z.forEach(function (F) {
          return t(m, F);
        }),
      re && Ft(m, U),
      M
    );
  }
  function B(m, p, g, b) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === rn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case kr:
          e: {
            for (var M = g.key, I = p; I !== null; ) {
              if (I.key === M) {
                if (((M = g.type), M === rn)) {
                  if (I.tag === 7) {
                    n(m, I.sibling),
                      (p = l(I, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  I.elementType === M ||
                  (typeof M == "object" &&
                    M !== null &&
                    M.$$typeof === wt &&
                    Wa(M) === I.type)
                ) {
                  n(m, I.sibling),
                    (p = l(I, g.props)),
                    (p.ref = Un(m, I, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, I);
                break;
              } else t(m, I);
              I = I.sibling;
            }
            g.type === rn
              ? ((p = Wt(g.props.children, m.mode, b, g.key)),
                (p.return = m),
                (m = p))
              : ((b = Xr(g.type, g.key, g.props, null, m.mode, b)),
                (b.ref = Un(m, p, g)),
                (b.return = m),
                (m = b));
          }
          return a(m);
        case nn:
          e: {
            for (I = g.key; p !== null; ) {
              if (p.key === I)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = l(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = ps(g, m.mode, b)), (p.return = m), (m = p);
          }
          return a(m);
        case wt:
          return (I = g._init), B(m, p, I(g._payload), b);
      }
      if (On(g)) return k(m, p, g, b);
      if (Tn(g)) return P(m, p, g, b);
      Ir(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = l(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = fs(g, m.mode, b)), (p.return = m), (m = p)),
        a(m))
      : n(m, p);
  }
  return B;
}
var kn = zu(!0),
  Iu = zu(!1),
  dl = Rt(null),
  fl = null,
  fn = null,
  To = null;
function Lo() {
  To = fn = fl = null;
}
function Mo(e) {
  var t = dl.current;
  ne(dl), (e._currentValue = t);
}
function Vs(e, t, n) {
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
function vn(e, t) {
  (fl = e),
    (To = fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (To !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fn === null)) {
      if (fl === null) throw Error(L(308));
      (fn = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else fn = fn.next = e;
  return t;
}
var At = null;
function zo(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Uu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), zo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
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
var St = !1;
function Io(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ru(e, t) {
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
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), zo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Hr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
  }
}
function Ga(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (l = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
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
function pl(e, t, n, r) {
  var l = e.updateQueue;
  St = !1;
  var s = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var i = u,
      d = i.next;
    (i.next = null), a === null ? (s = d) : (a.next = d), (a = i);
    var S = e.alternate;
    S !== null &&
      ((S = S.updateQueue),
      (u = S.lastBaseUpdate),
      u !== a &&
        (u === null ? (S.firstBaseUpdate = d) : (u.next = d),
        (S.lastBaseUpdate = i)));
  }
  if (s !== null) {
    var w = l.baseState;
    (a = 0), (S = d = i = null), (u = s);
    do {
      var h = u.lane,
        _ = u.eventTime;
      if ((r & h) === h) {
        S !== null &&
          (S = S.next =
            {
              eventTime: _,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            P = u;
          switch (((h = t), (_ = n), P.tag)) {
            case 1:
              if (((k = P.payload), typeof k == "function")) {
                w = k.call(_, w, h);
                break e;
              }
              w = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = P.payload),
                (h = typeof k == "function" ? k.call(_, w, h) : k),
                h == null)
              )
                break e;
              w = oe({}, w, h);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (_ = {
          eventTime: _,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          S === null ? ((d = S = _), (i = w)) : (S = S.next = _),
          (a |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (S === null && (i = w),
      (l.baseState = i),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = S),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (Kt |= a), (e.lanes = a), (e.memoizedState = w);
  }
}
function qa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(L(191, l));
        l.call(r);
      }
    }
}
var wr = {},
  it = Rt(wr),
  ur = Rt(wr),
  cr = Rt(wr);
function Vt(e) {
  if (e === wr) throw Error(L(174));
  return e;
}
function Uo(e, t) {
  switch ((ee(cr, t), ee(ur, e), ee(it, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ns(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ns(t, e));
  }
  ne(it), ee(it, t);
}
function Cn() {
  ne(it), ne(ur), ne(cr);
}
function $u(e) {
  Vt(cr.current);
  var t = Vt(it.current),
    n = Ns(t, e.type);
  t !== n && (ee(ur, e), ee(it, n));
}
function Ro(e) {
  ur.current === e && (ne(it), ne(ur));
}
var le = Rt(0);
function ml(e) {
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
var os = [];
function $o() {
  for (var e = 0; e < os.length; e++)
    os[e]._workInProgressVersionPrimary = null;
  os.length = 0;
}
var Wr = gt.ReactCurrentDispatcher,
  as = gt.ReactCurrentBatchConfig,
  Yt = 0,
  se = null,
  fe = null,
  xe = null,
  hl = !1,
  qn = !1,
  dr = 0,
  If = 0;
function Ne() {
  throw Error(L(321));
}
function Fo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Oo(e, t, n, r, l, s) {
  if (
    ((Yt = s),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wr.current = e === null || e.memoizedState === null ? Ff : Of),
    (e = n(r, l)),
    qn)
  ) {
    s = 0;
    do {
      if (((qn = !1), (dr = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (xe = fe = null),
        (t.updateQueue = null),
        (Wr.current = Qf),
        (e = n(r, l));
    } while (qn);
  }
  if (
    ((Wr.current = xl),
    (t = fe !== null && fe.next !== null),
    (Yt = 0),
    (xe = fe = se = null),
    (hl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Qo() {
  var e = dr !== 0;
  return (dr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function qe() {
  if (fe === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = xe === null ? se.memoizedState : xe.next;
  if (t !== null) (xe = t), (fe = e);
  else {
    if (e === null) throw Error(L(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      xe === null ? (se.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function is(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = fe,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      (l.next = s.next), (s.next = a);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var u = (a = null),
      i = null,
      d = s;
    do {
      var S = d.lane;
      if ((Yt & S) === S)
        i !== null &&
          (i = i.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var w = {
          lane: S,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        i === null ? ((u = i = w), (a = r)) : (i = i.next = w),
          (se.lanes |= S),
          (Kt |= S);
      }
      d = d.next;
    } while (d !== null && d !== s);
    i === null ? (a = r) : (i.next = u),
      nt(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = i),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (se.lanes |= s), (Kt |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function us(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== l);
    nt(s, t.memoizedState) || (Me = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Fu() {}
function Ou(e, t) {
  var n = se,
    r = qe(),
    l = t(),
    s = !nt(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (Me = !0)),
    (r = r.queue),
    Ao(Vu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pr(9, Au.bind(null, n, r, l, t), void 0, null),
      ye === null)
    )
      throw Error(L(349));
    Yt & 30 || Qu(n, t, l);
  }
  return l;
}
function Qu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Au(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bu(t) && Hu(e);
}
function Vu(e, t, n) {
  return n(function () {
    Bu(t) && Hu(e);
  });
}
function Bu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Hu(e) {
  var t = xt(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Ya(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $f.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wu() {
  return qe().memoizedState;
}
function Gr(e, t, n, r) {
  var l = st();
  (se.flags |= e),
    (l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (fe !== null) {
    var a = fe.memoizedState;
    if (((s = a.destroy), r !== null && Fo(r, a.deps))) {
      l.memoizedState = pr(t, n, s, r);
      return;
    }
  }
  (se.flags |= e), (l.memoizedState = pr(1 | t, n, s, r));
}
function Ka(e, t) {
  return Gr(8390656, 8, e, t);
}
function Ao(e, t) {
  return Pl(2048, 8, e, t);
}
function Gu(e, t) {
  return Pl(4, 2, e, t);
}
function qu(e, t) {
  return Pl(4, 4, e, t);
}
function Yu(e, t) {
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
function Ku(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pl(4, 4, Yu.bind(null, t, e), n)
  );
}
function Vo() {}
function Xu(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zu(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return Yt & 21
    ? (nt(n, t) || ((n = lu()), (se.lanes |= n), (Kt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Uf(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = as.transition;
  as.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (as.transition = r);
  }
}
function ec() {
  return qe().memoizedState;
}
function Rf(e, t, n) {
  var r = Lt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tc(e))
  )
    nc(t, n);
  else if (((n = Uu(e, t, n, r)), n !== null)) {
    var l = be();
    tt(n, e, r, l), rc(n, t, r);
  }
}
function $f(e, t, n) {
  var r = Lt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tc(e)) nc(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = s(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), nt(u, a))) {
          var i = t.interleaved;
          i === null
            ? ((l.next = l), zo(t))
            : ((l.next = i.next), (i.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Uu(e, t, l, r)),
      n !== null && ((l = be()), tt(n, e, r, l), rc(n, t, r));
  }
}
function tc(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function nc(e, t) {
  qn = hl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wo(e, n);
  }
}
var xl = {
    readContext: Ge,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Ff = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: Ka,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gr(4194308, 4, Yu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
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
        (e = e.dispatch = Rf.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ya,
    useDebugValue: Vo,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = Ya(!1),
        t = e[0];
      return (e = Uf.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        l = st();
      if (re) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(L(349));
        Yt & 30 || Qu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        Ka(Vu.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        pr(9, Au.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ye.identifierPrefix;
      if (re) {
        var n = ft,
          r = dt;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = dr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = If++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Of = {
    readContext: Ge,
    useCallback: Xu,
    useContext: Ge,
    useEffect: Ao,
    useImperativeHandle: Ku,
    useInsertionEffect: Gu,
    useLayoutEffect: qu,
    useMemo: Zu,
    useReducer: is,
    useRef: Wu,
    useState: function () {
      return is(fr);
    },
    useDebugValue: Vo,
    useDeferredValue: function (e) {
      var t = qe();
      return Ju(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = is(fr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Fu,
    useSyncExternalStore: Ou,
    useId: ec,
    unstable_isNewReconciler: !1,
  },
  Qf = {
    readContext: Ge,
    useCallback: Xu,
    useContext: Ge,
    useEffect: Ao,
    useImperativeHandle: Ku,
    useInsertionEffect: Gu,
    useLayoutEffect: qu,
    useMemo: Zu,
    useReducer: us,
    useRef: Wu,
    useState: function () {
      return us(fr);
    },
    useDebugValue: Vo,
    useDeferredValue: function (e) {
      var t = qe();
      return fe === null ? (t.memoizedState = e) : Ju(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = us(fr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Fu,
    useSyncExternalStore: Ou,
    useId: ec,
    unstable_isNewReconciler: !1,
  };
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Lt(e),
      s = pt(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Pt(e, s, l)),
      t !== null && (tt(t, e, l, r), Hr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Lt(e),
      s = pt(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Pt(e, s, l)),
      t !== null && (tt(t, e, l, r), Hr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = be(),
      r = Lt(e),
      l = pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Pt(e, l, r)),
      t !== null && (tt(t, e, r, n), Hr(t, e, r));
  },
};
function Xa(e, t, n, r, l, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sr(n, r) || !sr(l, s)
      : !0
  );
}
function lc(e, t, n) {
  var r = !1,
    l = It,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ge(s))
      : ((l = Ie(t) ? Gt : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? jn(e, l) : It)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Za(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function Hs(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Io(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = Ge(s))
    : ((s = Ie(t) ? Gt : _e.current), (l.context = jn(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Bs(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Tl.enqueueReplaceState(l, l.state, null),
      pl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _n(e, t) {
  try {
    var n = "",
      r = t;
    do (n += md(r)), (r = r.return);
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
function cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Af = typeof WeakMap == "function" ? WeakMap : Map;
function sc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gl || ((gl = !0), (no = r)), Ws(e, t);
    }),
    n
  );
}
function oc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ws(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ws(e, t),
          typeof r != "function" &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Ja(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Af();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = np.bind(null, e, t, n)), t.then(e, e));
}
function ei(e) {
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
function ti(e, t, n, r, l) {
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
              : ((t = pt(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Vf = gt.ReactCurrentOwner,
  Me = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Iu(t, null, n, r) : kn(t, e.child, n, r);
}
function ni(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    vn(t, l),
    (r = Oo(e, t, n, r, s, l)),
    (n = Qo()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (re && n && bo(t), (t.flags |= 1), Ee(e, t, r, l), t.child)
  );
}
function ri(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Xo(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ac(e, t, s, r, l))
      : ((e = Xr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sr), n(a, r) && e.ref === t.ref)
    )
      return yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Mt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ac(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (sr(s, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), yt(e, t, l);
  }
  return Gs(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(mn, Re),
        (Re |= n);
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
          ee(mn, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ee(mn, Re),
        (Re |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(mn, Re),
      (Re |= r);
  return Ee(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gs(e, t, n, r, l) {
  var s = Ie(n) ? Gt : _e.current;
  return (
    (s = jn(t, s)),
    vn(t, l),
    (n = Oo(e, t, n, r, s, l)),
    (r = Qo()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (re && r && bo(t), (t.flags |= 1), Ee(e, t, n, l), t.child)
  );
}
function li(e, t, n, r, l) {
  if (Ie(n)) {
    var s = !0;
    il(t);
  } else s = !1;
  if ((vn(t, l), t.stateNode === null))
    qr(e, t), lc(t, n, r), Hs(t, n, r, l), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var i = a.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ge(d))
      : ((d = Ie(n) ? Gt : _e.current), (d = jn(t, d)));
    var S = n.getDerivedStateFromProps,
      w =
        typeof S == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    w ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || i !== d) && Za(t, a, r, d)),
      (St = !1);
    var h = t.memoizedState;
    (a.state = h),
      pl(t, r, a, l),
      (i = t.memoizedState),
      u !== r || h !== i || ze.current || St
        ? (typeof S == "function" && (Bs(t, n, S, r), (i = t.memoizedState)),
          (u = St || Xa(t, n, u, r, h, i, d))
            ? (w ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = i)),
          (a.props = r),
          (a.state = i),
          (a.context = d),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ru(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : Xe(t.type, u)),
      (a.props = d),
      (w = t.pendingProps),
      (h = a.context),
      (i = n.contextType),
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((i = Ie(n) ? Gt : _e.current), (i = jn(t, i)));
    var _ = n.getDerivedStateFromProps;
    (S =
      typeof _ == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== w || h !== i) && Za(t, a, r, i)),
      (St = !1),
      (h = t.memoizedState),
      (a.state = h),
      pl(t, r, a, l);
    var k = t.memoizedState;
    u !== w || h !== k || ze.current || St
      ? (typeof _ == "function" && (Bs(t, n, _, r), (k = t.memoizedState)),
        (d = St || Xa(t, n, d, r, h, k, i) || !1)
          ? (S ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, k, i),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, k, i)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (a.props = r),
        (a.state = k),
        (a.context = i),
        (r = d))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qs(e, t, n, r, s, l);
}
function qs(e, t, n, r, l, s) {
  uc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && Va(t, n, !1), yt(e, t, s);
  (r = t.stateNode), (Vf.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = kn(t, e.child, null, s)), (t.child = kn(t, null, u, s)))
      : Ee(e, t, u, s),
    (t.memoizedState = r.state),
    l && Va(t, n, !0),
    t.child
  );
}
function cc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Aa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Aa(e, t.context, !1),
    Uo(e, t.containerInfo);
}
function si(e, t, n, r, l) {
  return Nn(), Po(l), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ks(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dc(e, t, n) {
  var r = t.pendingProps,
    l = le.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(le, l & 1),
    e === null)
  )
    return (
      As(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = zl(a, r, 0, null)),
              (e = Wt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ks(n)),
              (t.memoizedState = Ys),
              e)
            : Bo(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Bf(e, t, a, r, u, l, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (l = e.child), (u = l.sibling);
    var i = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = i),
          (t.deletions = null))
        : ((r = Mt(l, i)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (s = Mt(u, s)) : ((s = Wt(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ks(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ys),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Mt(s, { mode: "visible", children: r.children })),
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
function Bo(e, t) {
  return (
    (t = zl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ur(e, t, n, r) {
  return (
    r !== null && Po(r),
    kn(t, e.child, null, n),
    (e = Bo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Bf(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cs(Error(L(422)))), Ur(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = zl({ mode: "visible", children: r.children }, l, 0, null)),
        (s = Wt(s, l, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && kn(t, e.child, null, a),
        (t.child.memoizedState = Ks(a)),
        (t.memoizedState = Ys),
        s);
  if (!(t.mode & 1)) return Ur(e, t, a, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (s = Error(L(419))), (r = cs(s, r, void 0)), Ur(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), Me || u)) {
    if (((r = ye), r !== null)) {
      switch (a & -a) {
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
      (l = l & (r.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), xt(e, l), tt(r, e, l, -1));
    }
    return Ko(), (r = cs(Error(L(421)))), Ur(e, t, a, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      ($e = Dt(l.nextSibling)),
      (Fe = t),
      (re = !0),
      (Je = null),
      e !== null &&
        ((Ve[Be++] = dt),
        (Ve[Be++] = ft),
        (Ve[Be++] = qt),
        (dt = e.id),
        (ft = e.overflow),
        (qt = t)),
      (t = Bo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vs(e.return, t, n);
}
function ds(e, t, n, r, l) {
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
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((Ee(e, t, r.children, n), (r = le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oi(e, n, t);
        else if (e.tag === 19) oi(e, n, t);
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
  if ((ee(le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ml(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ds(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ml(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ds(t, !0, n, null, s);
        break;
      case "together":
        ds(t, !1, null, null, void 0);
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
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hf(e, t, n) {
  switch (t.tag) {
    case 3:
      cc(t), Nn();
      break;
    case 5:
      $u(t);
      break;
    case 1:
      Ie(t.type) && il(t);
      break;
    case 4:
      Uo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(dl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dc(e, t, n)
          : (ee(le, le.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(le, le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(le, le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ic(e, t, n);
  }
  return yt(e, t, n);
}
var pc, Xs, mc, hc;
pc = function (e, t) {
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
Xs = function () {};
mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(it.current);
    var s = null;
    switch (n) {
      case "input":
        (l = vs(e, l)), (r = vs(e, r)), (s = []);
        break;
      case "select":
        (l = oe({}, l, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = js(e, l)), (r = js(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ol);
    }
    ks(n, r);
    var a;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Zn.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var i = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && i !== u && (i != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (i && i.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in i)
              i.hasOwnProperty(a) &&
                u[a] !== i[a] &&
                (n || (n = {}), (n[a] = i[a]));
          } else n || (s || (s = []), s.push(d, n)), (n = i);
        else
          d === "dangerouslySetInnerHTML"
            ? ((i = i ? i.__html : void 0),
              (u = u ? u.__html : void 0),
              i != null && u !== i && (s = s || []).push(d, i))
            : d === "children"
            ? (typeof i != "string" && typeof i != "number") ||
              (s = s || []).push(d, "" + i)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Zn.hasOwnProperty(d)
                ? (i != null && d === "onScroll" && te("scroll", e),
                  s || u === i || (s = []))
                : (s = s || []).push(d, i));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
hc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!re)
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
function Wf(e, t, n) {
  var r = t.pendingProps;
  switch ((Do(t), t.tag)) {
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
      return Ie(t.type) && al(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cn(),
        ne(ze),
        ne(_e),
        $o(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (so(Je), (Je = null)))),
        Xs(e, t),
        ke(t),
        null
      );
    case 5:
      Ro(t);
      var l = Vt(cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ke(t), null;
        }
        if (((e = Vt(it.current)), zr(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ot] = t), (r[ir] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < An.length; l++) te(An[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              ha(r, s), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              ya(r, s), te("invalid", r);
          }
          ks(n, s), (l = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var u = s[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Zn.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), xa(r, s, !0);
              break;
            case "textarea":
              Cr(r), ga(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vi(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[ot] = t),
            (e[ir] = r),
            pc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Cs(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < An.length; l++) te(An[l], e);
                l = r;
                break;
              case "source":
                te("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (l = r);
                break;
              case "details":
                te("toggle", e), (l = r);
                break;
              case "input":
                ha(e, r), (l = vs(e, r)), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = oe({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                ya(e, r), (l = js(e, r)), te("invalid", e);
                break;
              default:
                l = r;
            }
            ks(n, l), (u = l);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var i = u[s];
                s === "style"
                  ? Wi(e, i)
                  : s === "dangerouslySetInnerHTML"
                  ? ((i = i ? i.__html : void 0), i != null && Bi(e, i))
                  : s === "children"
                  ? typeof i == "string"
                    ? (n !== "textarea" || i !== "") && Jn(e, i)
                    : typeof i == "number" && Jn(e, "" + i)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Zn.hasOwnProperty(s)
                      ? i != null && s === "onScroll" && te("scroll", e)
                      : i != null && mo(e, s, i, a));
              }
            switch (n) {
              case "input":
                Cr(e), xa(e, r, !1);
                break;
              case "textarea":
                Cr(e), ga(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? hn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
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
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Vt(cr.current)), Vt(it.current), zr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (s = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (ne(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && $e !== null && t.mode & 1 && !(t.flags & 128))
          Mu(), Nn(), (t.flags |= 98560), (s = !1);
        else if (((s = zr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[ot] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (s = !1);
        } else Je !== null && (so(Je), (Je = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? pe === 0 && (pe = 3) : Ko())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Cn(), Xs(e, t), e === null && or(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Mo(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && al(), ke(t), null;
    case 19:
      if ((ne(le), (s = t.memoizedState), s === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Rn(s, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ml(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Rn(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(le, (le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ue() > En &&
            ((t.flags |= 128), (r = !0), Rn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ml(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !re)
            )
              return ke(t), null;
          } else
            2 * ue() - s.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ue()),
          (t.sibling = null),
          (n = le.current),
          ee(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Yo(),
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
  throw Error(L(156, t.tag));
}
function Gf(e, t) {
  switch ((Do(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cn(),
        ne(ze),
        ne(_e),
        $o(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ro(t), null;
    case 13:
      if (
        (ne(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(le), null;
    case 4:
      return Cn(), null;
    case 10:
      return Mo(t.type._context), null;
    case 22:
    case 23:
      return Yo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  Ce = !1,
  qf = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function pn(e, t) {
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
function Zs(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var ai = !1;
function Yf(e, t) {
  if (((Is = rl), (e = wu()), Eo(e))) {
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
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            u = -1,
            i = -1,
            d = 0,
            S = 0,
            w = e,
            h = null;
          t: for (;;) {
            for (
              var _;
              w !== n || (l !== 0 && w.nodeType !== 3) || (u = a + l),
                w !== s || (r !== 0 && w.nodeType !== 3) || (i = a + r),
                w.nodeType === 3 && (a += w.nodeValue.length),
                (_ = w.firstChild) !== null;

            )
              (h = w), (w = _);
            for (;;) {
              if (w === e) break t;
              if (
                (h === n && ++d === l && (u = a),
                h === s && ++S === r && (i = a),
                (_ = w.nextSibling) !== null)
              )
                break;
              (w = h), (h = w.parentNode);
            }
            w = _;
          }
          n = u === -1 || i === -1 ? null : { start: u, end: i };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Us = { focusedElem: e, selectionRange: n }, rl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var P = k.memoizedProps,
                    B = k.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? P : Xe(t.type, P),
                      B
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(L(163));
            }
        } catch (b) {
          ie(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (k = ai), (ai = !1), k;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && Zs(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
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
function Js(e) {
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
function xc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[ir], delete t[Fs], delete t[Tf], delete t[Lf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ii(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yc(e.return)) return null;
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
function eo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), (e = e.sibling);
}
function to(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), (e = e.sibling);
}
var ge = null,
  Ze = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) gc(e, t, n), (n = n.sibling);
}
function gc(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || pn(n, t);
    case 6:
      var r = ge,
        l = Ze;
      (ge = null),
        vt(e, t, n),
        (ge = r),
        (Ze = l),
        ge !== null &&
          (Ze
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (Ze
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? ls(e.parentNode, n)
              : e.nodeType === 1 && ls(e, n),
            rr(e))
          : ls(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (l = Ze),
        (ge = n.stateNode.containerInfo),
        (Ze = !0),
        vt(e, t, n),
        (ge = r),
        (Ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Zs(n, t, a),
            (l = l.next);
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ie(n, t, u);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), vt(e, t, n), (Ce = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function ui(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qf()),
      t.forEach(function (r) {
        var l = lp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ge = u.stateNode), (Ze = !1);
              break e;
            case 3:
              (ge = u.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (ge = u.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ge === null) throw Error(L(160));
        gc(s, a, l), (ge = null), (Ze = !1);
        var i = l.alternate;
        i !== null && (i.return = null), (l.return = null);
      } catch (d) {
        ie(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vc(t, e), (t = t.sibling);
}
function vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), lt(e), r & 4)) {
        try {
          Yn(3, e, e.return), Ll(3, e);
        } catch (P) {
          ie(e, e.return, P);
        }
        try {
          Yn(5, e, e.return);
        } catch (P) {
          ie(e, e.return, P);
        }
      }
      break;
    case 1:
      Ke(t, e), lt(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        lt(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (P) {
          ie(e, e.return, P);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          u = e.type,
          i = e.updateQueue;
        if (((e.updateQueue = null), i !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && Qi(l, s),
              Cs(u, a);
            var d = Cs(u, s);
            for (a = 0; a < i.length; a += 2) {
              var S = i[a],
                w = i[a + 1];
              S === "style"
                ? Wi(l, w)
                : S === "dangerouslySetInnerHTML"
                ? Bi(l, w)
                : S === "children"
                ? Jn(l, w)
                : mo(l, S, w, d);
            }
            switch (u) {
              case "input":
                ws(l, s);
                break;
              case "textarea":
                Ai(l, s);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var _ = s.value;
                _ != null
                  ? hn(l, !!s.multiple, _, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? hn(l, !!s.multiple, s.defaultValue, !0)
                      : hn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[ir] = s;
          } catch (P) {
            ie(e, e.return, P);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (P) {
          ie(e, e.return, P);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          rr(t.containerInfo);
        } catch (P) {
          ie(e, e.return, P);
        }
      break;
    case 4:
      Ke(t, e), lt(e);
      break;
    case 13:
      Ke(t, e),
        lt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Go = ue())),
        r & 4 && ui(e);
      break;
    case 22:
      if (
        ((S = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (d = Ce) || S), Ke(t, e), (Ce = d)) : Ke(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !S && e.mode & 1)
        )
          for ($ = e, S = e.child; S !== null; ) {
            for (w = $ = S; $ !== null; ) {
              switch (((h = $), (_ = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, h, h.return);
                  break;
                case 1:
                  pn(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (P) {
                      ie(r, n, P);
                    }
                  }
                  break;
                case 5:
                  pn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    di(w);
                    continue;
                  }
              }
              _ !== null ? ((_.return = h), ($ = _)) : di(w);
            }
            S = S.sibling;
          }
        e: for (S = null, w = e; ; ) {
          if (w.tag === 5) {
            if (S === null) {
              S = w;
              try {
                (l = w.stateNode),
                  d
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((u = w.stateNode),
                      (i = w.memoizedProps.style),
                      (a =
                        i != null && i.hasOwnProperty("display")
                          ? i.display
                          : null),
                      (u.style.display = Hi("display", a)));
              } catch (P) {
                ie(e, e.return, P);
              }
            }
          } else if (w.tag === 6) {
            if (S === null)
              try {
                w.stateNode.nodeValue = d ? "" : w.memoizedProps;
              } catch (P) {
                ie(e, e.return, P);
              }
          } else if (
            ((w.tag !== 22 && w.tag !== 23) ||
              w.memoizedState === null ||
              w === e) &&
            w.child !== null
          ) {
            (w.child.return = w), (w = w.child);
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            S === w && (S = null), (w = w.return);
          }
          S === w && (S = null), (w.sibling.return = w.return), (w = w.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), lt(e), r & 4 && ui(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ""), (r.flags &= -33));
          var s = ii(e);
          to(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = ii(e);
          eo(e, u, a);
          break;
        default:
          throw Error(L(161));
      }
    } catch (i) {
      ie(e, e.return, i);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kf(e, t, n) {
  ($ = e), wc(e);
}
function wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $,
      s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Rr;
      if (!a) {
        var u = l.alternate,
          i = (u !== null && u.memoizedState !== null) || Ce;
        u = Rr;
        var d = Ce;
        if (((Rr = a), (Ce = i) && !d))
          for ($ = l; $ !== null; )
            (a = $),
              (i = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? fi(l)
                : i !== null
                ? ((i.return = a), ($ = i))
                : fi(l);
        for (; s !== null; ) ($ = s), wc(s), (s = s.sibling);
        ($ = l), (Rr = u), (Ce = d);
      }
      ci(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), ($ = s)) : ci(e);
  }
}
function ci(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && qa(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qa(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var i = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    i.autoFocus && n.focus();
                    break;
                  case "img":
                    i.src && (n.src = i.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var S = d.memoizedState;
                  if (S !== null) {
                    var w = S.dehydrated;
                    w !== null && rr(w);
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
              throw Error(L(163));
          }
        Ce || (t.flags & 512 && Js(t));
      } catch (h) {
        ie(t, t.return, h);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function di(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function fi(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (i) {
            ie(t, n, i);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (i) {
              ie(t, l, i);
            }
          }
          var s = t.return;
          try {
            Js(t);
          } catch (i) {
            ie(t, s, i);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Js(t);
          } catch (i) {
            ie(t, a, i);
          }
      }
    } catch (i) {
      ie(t, t.return, i);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), ($ = u);
      break;
    }
    $ = t.return;
  }
}
var Xf = Math.ceil,
  yl = gt.ReactCurrentDispatcher,
  Ho = gt.ReactCurrentOwner,
  We = gt.ReactCurrentBatchConfig,
  X = 0,
  ye = null,
  ce = null,
  ve = 0,
  Re = 0,
  mn = Rt(0),
  pe = 0,
  mr = null,
  Kt = 0,
  Ml = 0,
  Wo = 0,
  Kn = null,
  Le = null,
  Go = 0,
  En = 1 / 0,
  ut = null,
  gl = !1,
  no = null,
  Tt = null,
  $r = !1,
  Ct = null,
  vl = 0,
  Xn = 0,
  ro = null,
  Yr = -1,
  Kr = 0;
function be() {
  return X & 6 ? ue() : Yr !== -1 ? Yr : (Yr = ue());
}
function Lt(e) {
  return e.mode & 1
    ? X & 2 && ve !== 0
      ? ve & -ve
      : zf.transition !== null
      ? (Kr === 0 && (Kr = lu()), Kr)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : du(e.type))),
        e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (ro = null), Error(L(185)));
  yr(e, n, r),
    (!(X & 2) || e !== ye) &&
      (e === ye && (!(X & 2) && (Ml |= n), pe === 4 && Nt(e, ve)),
      Ue(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((En = ue() + 500), Dl && $t()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Md(e, t);
  var r = nl(e, e === ye ? ve : 0);
  if (r === 0)
    n !== null && Sa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sa(n), t === 1))
      e.tag === 0 ? Mf(pi.bind(null, e)) : Pu(pi.bind(null, e)),
        Df(function () {
          !(X & 6) && $t();
        }),
        (n = null);
    else {
      switch (su(r)) {
        case 1:
          n = vo;
          break;
        case 4:
          n = nu;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = ru;
          break;
        default:
          n = tl;
      }
      n = bc(n, Sc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sc(e, t) {
  if (((Yr = -1), (Kr = 0), X & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = nl(e, e === ye ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var s = Nc();
    (ye !== e || ve !== t) && ((ut = null), (En = ue() + 500), Ht(e, t));
    do
      try {
        ep();
        break;
      } catch (u) {
        jc(e, u);
      }
    while (!0);
    Lo(),
      (yl.current = s),
      (X = l),
      ce !== null ? (t = 0) : ((ye = null), (ve = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ps(e)), l !== 0 && ((r = l), (t = lo(e, l)))), t === 1)
    )
      throw ((n = mr), Ht(e, 0), Nt(e, r), Ue(e, ue()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Zf(l) &&
          ((t = wl(e, r)),
          t === 2 && ((s = Ps(e)), s !== 0 && ((r = s), (t = lo(e, s)))),
          t === 1))
      )
        throw ((n = mr), Ht(e, 0), Nt(e, r), Ue(e, ue()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Ot(e, Le, ut);
          break;
        case 3:
          if (
            (Nt(e, r), (r & 130023424) === r && ((t = Go + 500 - ue()), 10 < t))
          ) {
            if (nl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $s(Ot.bind(null, e, Le, ut), t);
            break;
          }
          Ot(e, Le, ut);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - et(r);
            (s = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~s);
          }
          if (
            ((r = l),
            (r = ue() - r),
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
                : 1960 * Xf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $s(Ot.bind(null, e, Le, ut), r);
            break;
          }
          Ot(e, Le, ut);
          break;
        case 5:
          Ot(e, Le, ut);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ue(e, ue()), e.callbackNode === n ? Sc.bind(null, e) : null;
}
function lo(e, t) {
  var n = Kn;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && so(t)),
    e
  );
}
function so(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Zf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(s(), l)) return !1;
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
function Nt(e, t) {
  for (
    t &= ~Wo,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pi(e) {
  if (X & 6) throw Error(L(327));
  wn();
  var t = nl(e, 0);
  if (!(t & 1)) return Ue(e, ue()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ps(e);
    r !== 0 && ((t = r), (n = lo(e, r)));
  }
  if (n === 1) throw ((n = mr), Ht(e, 0), Nt(e, t), Ue(e, ue()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ot(e, Le, ut),
    Ue(e, ue()),
    null
  );
}
function qo(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((En = ue() + 500), Dl && $t());
  }
}
function Xt(e) {
  Ct !== null && Ct.tag === 0 && !(X & 6) && wn();
  var t = X;
  X |= 1;
  var n = We.transition,
    r = J;
  try {
    if (((We.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (We.transition = n), (X = t), !(X & 6) && $t();
  }
}
function Yo() {
  (Re = mn.current), ne(mn);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bf(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((Do(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && al();
          break;
        case 3:
          Cn(), ne(ze), ne(_e), $o();
          break;
        case 5:
          Ro(r);
          break;
        case 4:
          Cn();
          break;
        case 13:
          ne(le);
          break;
        case 19:
          ne(le);
          break;
        case 10:
          Mo(r.type._context);
          break;
        case 22:
        case 23:
          Yo();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (ce = e = Mt(e.current, null)),
    (ve = Re = t),
    (pe = 0),
    (mr = null),
    (Wo = Ml = Kt = 0),
    (Le = Kn = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = l), (r.next = a);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function jc(e, t) {
  do {
    var n = ce;
    try {
      if ((Lo(), (Wr.current = xl), hl)) {
        for (var r = se.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        hl = !1;
      }
      if (
        ((Yt = 0),
        (xe = fe = se = null),
        (qn = !1),
        (dr = 0),
        (Ho.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (mr = t), (ce = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          u = n,
          i = t;
        if (
          ((t = ve),
          (u.flags |= 32768),
          i !== null && typeof i == "object" && typeof i.then == "function")
        ) {
          var d = i,
            S = u,
            w = S.tag;
          if (!(S.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var h = S.alternate;
            h
              ? ((S.updateQueue = h.updateQueue),
                (S.memoizedState = h.memoizedState),
                (S.lanes = h.lanes))
              : ((S.updateQueue = null), (S.memoizedState = null));
          }
          var _ = ei(a);
          if (_ !== null) {
            (_.flags &= -257),
              ti(_, a, u, s, t),
              _.mode & 1 && Ja(s, d, t),
              (t = _),
              (i = d);
            var k = t.updateQueue;
            if (k === null) {
              var P = new Set();
              P.add(i), (t.updateQueue = P);
            } else k.add(i);
            break e;
          } else {
            if (!(t & 1)) {
              Ja(s, d, t), Ko();
              break e;
            }
            i = Error(L(426));
          }
        } else if (re && u.mode & 1) {
          var B = ei(a);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256),
              ti(B, a, u, s, t),
              Po(_n(i, u));
            break e;
          }
        }
        (s = i = _n(i, u)),
          pe !== 4 && (pe = 2),
          Kn === null ? (Kn = [s]) : Kn.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = sc(s, i, t);
              Ga(s, m);
              break e;
            case 1:
              u = i;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Tt === null || !Tt.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var b = oc(s, u, t);
                Ga(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Cc(n);
    } catch (M) {
      (t = M), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nc() {
  var e = yl.current;
  return (yl.current = xl), e === null ? xl : e;
}
function Ko() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ye === null || (!(Kt & 268435455) && !(Ml & 268435455)) || Nt(ye, ve);
}
function wl(e, t) {
  var n = X;
  X |= 2;
  var r = Nc();
  (ye !== e || ve !== t) && ((ut = null), Ht(e, t));
  do
    try {
      Jf();
      break;
    } catch (l) {
      jc(e, l);
    }
  while (!0);
  if ((Lo(), (X = n), (yl.current = r), ce !== null)) throw Error(L(261));
  return (ye = null), (ve = 0), pe;
}
function Jf() {
  for (; ce !== null; ) kc(ce);
}
function ep() {
  for (; ce !== null && !kd(); ) kc(ce);
}
function kc(e) {
  var t = Ec(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cc(e) : (ce = t),
    (Ho.current = null);
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gf(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ce = null);
        return;
      }
    } else if (((n = Wf(n, t, Re)), n !== null)) {
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
function Ot(e, t, n) {
  var r = J,
    l = We.transition;
  try {
    (We.transition = null), (J = 1), tp(e, t, n, r);
  } finally {
    (We.transition = l), (J = r);
  }
  return null;
}
function tp(e, t, n, r) {
  do wn();
  while (Ct !== null);
  if (X & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (zd(e, s),
    e === ye && ((ce = ye = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $r ||
      (($r = !0),
      bc(tl, function () {
        return wn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = We.transition), (We.transition = null);
    var a = J;
    J = 1;
    var u = X;
    (X |= 4),
      (Ho.current = null),
      Yf(e, n),
      vc(n, e),
      Sf(Us),
      (rl = !!Is),
      (Us = Is = null),
      (e.current = n),
      Kf(n),
      Cd(),
      (X = u),
      (J = a),
      (We.transition = s);
  } else e.current = n;
  if (
    ($r && (($r = !1), (Ct = e), (vl = l)),
    (s = e.pendingLanes),
    s === 0 && (Tt = null),
    bd(n.stateNode),
    Ue(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gl) throw ((gl = !1), (e = no), (no = null), e);
  return (
    vl & 1 && e.tag !== 0 && wn(),
    (s = e.pendingLanes),
    s & 1 ? (e === ro ? Xn++ : ((Xn = 0), (ro = e))) : (Xn = 0),
    $t(),
    null
  );
}
function wn() {
  if (Ct !== null) {
    var e = su(vl),
      t = We.transition,
      n = J;
    try {
      if (((We.transition = null), (J = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (vl = 0), X & 6)) throw Error(L(331));
        var l = X;
        for (X |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            a = s.child;
          if ($.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var i = 0; i < u.length; i++) {
                var d = u[i];
                for ($ = d; $ !== null; ) {
                  var S = $;
                  switch (S.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, S, s);
                  }
                  var w = S.child;
                  if (w !== null) (w.return = S), ($ = w);
                  else
                    for (; $ !== null; ) {
                      S = $;
                      var h = S.sibling,
                        _ = S.return;
                      if ((xc(S), S === d)) {
                        $ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = _), ($ = h);
                        break;
                      }
                      $ = _;
                    }
                }
              }
              var k = s.alternate;
              if (k !== null) {
                var P = k.child;
                if (P !== null) {
                  k.child = null;
                  do {
                    var B = P.sibling;
                    (P.sibling = null), (P = B);
                  } while (P !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), ($ = a);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yn(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), ($ = m);
                break e;
              }
              $ = s.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          a = $;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), ($ = g);
          else
            e: for (a = p; $ !== null; ) {
              if (((u = $), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, u);
                  }
                } catch (M) {
                  ie(u, u.return, M);
                }
              if (u === a) {
                $ = null;
                break e;
              }
              var b = u.sibling;
              if (b !== null) {
                (b.return = u.return), ($ = b);
                break e;
              }
              $ = u.return;
            }
        }
        if (
          ((X = l), $t(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (We.transition = t);
    }
  }
  return !1;
}
function mi(e, t, n) {
  (t = _n(n, t)),
    (t = sc(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = be()),
    e !== null && (yr(e, 1, t), Ue(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) mi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tt === null || !Tt.has(r)))
        ) {
          (e = _n(n, e)),
            (e = oc(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = be()),
            t !== null && (yr(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function np(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (ve & n) === n &&
      (pe === 4 || (pe === 3 && (ve & 130023424) === ve && 500 > ue() - Go)
        ? Ht(e, 0)
        : (Wo |= n)),
    Ue(e, t);
}
function _c(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = br), (br <<= 1), !(br & 130023424) && (br = 4194304))
      : (t = 1));
  var n = be();
  (e = xt(e, t)), e !== null && (yr(e, t, n), Ue(e, n));
}
function rp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _c(e, n);
}
function lp(e, t) {
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
      throw Error(L(314));
  }
  r !== null && r.delete(t), _c(e, n);
}
var Ec;
Ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Hf(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), re && t.flags & 1048576 && Tu(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qr(e, t), (e = t.pendingProps);
      var l = jn(t, _e.current);
      vn(t, n), (l = Oo(null, t, r, e, l, n));
      var s = Qo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ie(r) ? ((s = !0), il(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Io(t),
            (l.updater = Tl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Hs(t, r, e, n),
            (t = qs(null, t, r, !0, s, n)))
          : ((t.tag = 0), re && s && bo(t), Ee(null, t, l, n), (t = t.child)),
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
          (l = t.tag = op(r)),
          (e = Xe(r, e)),
          l)
        ) {
          case 0:
            t = Gs(null, t, r, e, n);
            break e;
          case 1:
            t = li(null, t, r, e, n);
            break e;
          case 11:
            t = ni(null, t, r, e, n);
            break e;
          case 14:
            t = ri(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Gs(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        li(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((cc(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Ru(e, t),
          pl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = _n(Error(L(423)), t)), (t = si(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = _n(Error(L(424)), t)), (t = si(e, t, r, n, l));
            break e;
          } else
            for (
              $e = Dt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                re = !0,
                Je = null,
                n = Iu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === l)) {
            t = yt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $u(t),
        e === null && As(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Rs(r, l) ? (a = null) : s !== null && Rs(r, s) && (t.flags |= 32),
        uc(e, t),
        Ee(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && As(t), null;
    case 13:
      return dc(e, t, n);
    case 4:
      return (
        Uo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        ni(e, t, r, l, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (a = l.value),
          ee(dl, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (nt(s.value, a)) {
            if (s.children === l.children && !ze.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var u = s.dependencies;
              if (u !== null) {
                a = s.child;
                for (var i = u.firstContext; i !== null; ) {
                  if (i.context === r) {
                    if (s.tag === 1) {
                      (i = pt(-1, n & -n)), (i.tag = 2);
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var S = d.pending;
                        S === null
                          ? (i.next = i)
                          : ((i.next = S.next), (S.next = i)),
                          (d.pending = i);
                      }
                    }
                    (s.lanes |= n),
                      (i = s.alternate),
                      i !== null && (i.lanes |= n),
                      Vs(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  i = i.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(L(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  Vs(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Ee(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        vn(t, n),
        (l = Ge(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Xe(r, t.pendingProps)),
        (l = Xe(r.type, l)),
        ri(e, t, r, l, n)
      );
    case 15:
      return ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        qr(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), il(t)) : (e = !1),
        vn(t, n),
        lc(t, r, l),
        Hs(t, r, l, n),
        qs(null, t, r, !0, e, n)
      );
    case 19:
      return fc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function bc(e, t) {
  return tu(e, t);
}
function sp(e, t, n, r) {
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
function He(e, t, n, r) {
  return new sp(e, t, n, r);
}
function Xo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function op(e) {
  if (typeof e == "function") return Xo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xo)) return 11;
    if (e === yo) return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
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
function Xr(e, t, n, r, l, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Xo(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case rn:
        return Wt(n.children, l, s, t);
      case ho:
        (a = 8), (l |= 8);
        break;
      case hs:
        return (
          (e = He(12, n, t, l | 2)), (e.elementType = hs), (e.lanes = s), e
        );
      case xs:
        return (e = He(13, n, t, l)), (e.elementType = xs), (e.lanes = s), e;
      case ys:
        return (e = He(19, n, t, l)), (e.elementType = ys), (e.lanes = s), e;
      case $i:
        return zl(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ui:
              a = 10;
              break e;
            case Ri:
              a = 9;
              break e;
            case xo:
              a = 11;
              break e;
            case yo:
              a = 14;
              break e;
            case wt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Wt(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function zl(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = $i),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fs(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function ps(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ap(e, t, n, r, l) {
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
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Zo(e, t, n, r, l, s, a, u, i) {
  return (
    (e = new ap(e, t, n, u, i)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = He(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Io(s),
    e
  );
}
function ip(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dc(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Du(e, n, t);
  }
  return t;
}
function Pc(e, t, n, r, l, s, a, u, i) {
  return (
    (e = Zo(n, r, !0, e, l, s, a, u, i)),
    (e.context = Dc(null)),
    (n = e.current),
    (r = be()),
    (l = Lt(n)),
    (s = pt(r, l)),
    (s.callback = t ?? null),
    Pt(n, s, l),
    (e.current.lanes = l),
    yr(e, l, r),
    Ue(e, r),
    e
  );
}
function Il(e, t, n, r) {
  var l = t.current,
    s = be(),
    a = Lt(l);
  return (
    (n = Dc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(l, t, a)),
    e !== null && (tt(e, l, a, s), Hr(e, l, a)),
    a
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hi(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jo(e, t) {
  hi(e, t), (e = e.alternate) && hi(e, t);
}
function up() {
  return null;
}
var Tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ea(e) {
  this._internalRoot = e;
}
Ul.prototype.render = ea.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Il(e, t, null, null);
};
Ul.prototype.unmount = ea.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      Il(null, e, null, null);
    }),
      (t[ht] = null);
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && cu(e);
  }
};
function ta(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xi() {}
function cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var d = Sl(a);
        s.call(d);
      };
    }
    var a = Pc(t, r, e, 0, null, !1, !1, "", xi);
    return (
      (e._reactRootContainer = a),
      (e[ht] = a.current),
      or(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = Sl(i);
      u.call(d);
    };
  }
  var i = Zo(e, 0, !1, null, null, !1, !1, "", xi);
  return (
    (e._reactRootContainer = i),
    (e[ht] = i.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      Il(t, i, n, r);
    }),
    i
  );
}
function $l(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var i = Sl(a);
        u.call(i);
      };
    }
    Il(t, a, e, l);
  } else a = cp(n, t, e, l, r);
  return Sl(a);
}
ou = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 &&
          (wo(t, n | 1), Ue(t, ue()), !(X & 6) && ((En = ue() + 500), $t()));
      }
      break;
    case 13:
      Xt(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var l = be();
          tt(r, e, 1, l);
        }
      }),
        Jo(e, 1);
  }
};
So = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = be();
      tt(t, e, 134217728, n);
    }
    Jo(e, 134217728);
  }
};
au = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = be();
      tt(n, e, t, r);
    }
    Jo(e, t);
  }
};
iu = function () {
  return J;
};
uu = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
Es = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ws(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = bl(r);
            if (!l) throw Error(L(90));
            Oi(r), ws(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ai(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
Yi = qo;
Ki = Xt;
var dp = { usingClientEntryPoint: !1, Events: [vr, an, bl, Gi, qi, qo] },
  $n = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  fp = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ji(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || up,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      (kl = Fr.inject(fp)), (at = Fr);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ta(t)) throw Error(L(200));
  return ip(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!ta(e)) throw Error(L(299));
  var n = !1,
    r = "",
    l = Tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Zo(e, 1, !1, null, null, n, !1, r, l)),
    (e[ht] = t.current),
    or(e.nodeType === 8 ? e.parentNode : e),
    new ea(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Ji(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Xt(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(L(200));
  return $l(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!ta(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    a = Tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Pc(t, null, e, 1, n ?? null, l, !1, s, a)),
    (e[ht] = t.current),
    or(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ul(t);
};
Qe.render = function (e, t, n) {
  if (!Rl(t)) throw Error(L(200));
  return $l(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Xt(function () {
        $l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ht] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = qo;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return $l(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function Lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc);
    } catch (e) {
      console.error(e);
    }
}
Lc(), (Li.exports = Qe);
var pp = Li.exports,
  Mc,
  yi = pp;
(Mc = yi.createRoot), yi.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mp = {
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
 */ const hp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Se = (e, t) => {
    const n = C.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          className: u = "",
          children: i,
          ...d
        },
        S
      ) =>
        C.createElement(
          "svg",
          {
            ref: S,
            ...mp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${hp(e)}`, u].join(" "),
            ...d,
          },
          [
            ...t.map(([w, h]) => C.createElement(w, h)),
            ...(Array.isArray(i) ? i : [i]),
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
 */ const jl = Se("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xp = Se("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yp = Se("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = Se("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fl = Se("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vp = Se("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wp = Se("Layers", [
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
 */ const Sp = Se("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sr = Se("Package", [
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
 */ const oo = Se("Pen", [
  [
    "path",
    { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ol = Se("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = Se("Save", [
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
 */ const Np = Se("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kp = Se("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const na = Se("Trash2", [
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
 */ const Cp = Se("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const en = Se("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let Bt = null;
const zc = async () => {
    if (Bt) return Bt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Bt = await e.json()), Bt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  _p = (e) => {
    if (!Bt) throw new Error("Configuration not loaded");
    return `${Bt.domain}${e}`;
  },
  Ep = () => Bt,
  De = async (e, t = {}) => {
    await zc();
    const n = _p(e),
      {
        method: r = "GET",
        headers: l = {},
        body: s,
        responseType: a = "json",
      } = t,
      u = { method: r, headers: { "Content-Type": "application/json", ...l } };
    s && r !== "GET" && (u.body = JSON.stringify(s)),
      console.log(`API Call: ${r} ${n}`, s ? { body: s } : "");
    try {
      const i = await fetch(n, u);
      if (
        (console.log(`API Response: ${r} ${n} - Status: ${i.status}`), !i.ok)
      ) {
        const S = await i.text();
        throw (
          (console.error(`API Error Response: ${r} ${n}`, {
            status: i.status,
            statusText: i.statusText,
            body: S,
          }),
          new Error(`HTTP error! status: ${i.status}, message: ${S}`))
        );
      }
      if (a === "blob") {
        const S = await i.blob();
        return (
          console.log(`API Success Response (blob): ${r} ${n}`, {
            size: S.size,
          }),
          S
        );
      }
      const d = await i.json();
      return console.log(`API Success Response: ${r} ${n}`, d), d;
    } catch (i) {
      throw (console.error(`API call failed: ${r} ${n}`, i), i);
    }
  },
  bp = async (e) =>
    await De("/api/session/login", { method: "POST", body: { Data: e } }),
  Dp = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Ic = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const n = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - n) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  Pp = () => !!Ic(),
  Tp = () => {
    const e = Ic();
    return (
      (e == null ? void 0 : e.Name) || sessionStorage.getItem("loggedName")
    );
  },
  Ye = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return o.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: o.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  Lp = {
    zh: {
      "app.title": "系統登入",
      "error.api": "系統錯誤，請稍後再試",
      logout: "登出",
      copyright: "Copyright ©2025 鴻森智能科技",
    },
    en: {
      "app.title": "System Login",
      "error.api": "System error, please try again later",
      logout: "Logout",
      copyright: "Copyright ©2025 Hongsen Technology",
    },
  },
  Uc = C.createContext(void 0),
  Mp = ({ children: e }) => {
    const [t, n] = C.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s, a) => {
        let u = Lp[t][s] || s;
        return (
          a &&
            Object.entries(a).forEach(([i, d]) => {
              u = u.replace(`{${i}}`, d.toString());
            }),
          u
        );
      };
    return o.jsx(Uc.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  zp = () => {
    const e = C.useContext(Uc);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Ip = ({ onLogin: e }) => {
    const { t } = zp(),
      [n, r] = C.useState(""),
      [l, s] = C.useState(""),
      [a, u] = C.useState(null),
      [i, d] = C.useState(!1),
      S = async (w) => {
        w.preventDefault(), u(null), d(!0);
        try {
          const h = await bp({ ID: n, Password: l });
          h.Code === 200
            ? (Dp(h.Data), e())
            : h.Code === -1 || h.Code === -2
            ? u(h.Result)
            : u(t("error.api"));
        } catch (h) {
          console.error("Login error:", h),
            u(h instanceof Error ? h.message : t("error.api"));
        } finally {
          d(!1);
        }
      };
    return o.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          o.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          a &&
            o.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                o.jsx(jl, { size: 20 }),
                o.jsx("span", { children: a }),
              ],
            }),
          o.jsxs("form", {
            onSubmit: S,
            className: "space-y-6",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  o.jsx("input", {
                    type: "text",
                    id: "id",
                    value: n,
                    onChange: (w) => r(w.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  o.jsx("input", {
                    type: "password",
                    id: "password",
                    value: l,
                    onChange: (w) => s(w.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              o.jsx("button", {
                type: "submit",
                disabled: i,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  i
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: i
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx(Ye, { size: "small\\", className: "mr-2" }),
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
  },
  ra = ({ x: e, y: t, onClose: n, onViewUnitDetails: r }) => {
    const l = C.useRef(null);
    C.useEffect(() => {
      const a = (i) => {
          l.current && !l.current.contains(i.target) && n();
        },
        u = (i) => {
          i.key === "Escape" && n();
        };
      return (
        document.addEventListener("mousedown", a),
        document.addEventListener("keydown", u),
        () => {
          document.removeEventListener("mousedown", a),
            document.removeEventListener("keydown", u);
        }
      );
    }, [n]);
    const s = () => {
      n(), r();
    };
    return o.jsx("div", {
      ref: l,
      className:
        "fixed bg-white rounded-lg shadow-lg border border-slate-200 py-2 min-w-[180px] z-50",
      style: { left: `${e}px`, top: `${t}px` },
      children: o.jsxs("button", {
        onClick: s,
        className:
          "w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2",
        children: [
          o.jsx(vp, { size: 16 }),
          o.jsx("span", { children: "查看詳細單位" }),
        ],
      }),
    });
  },
  la = ({
    isOpen: e,
    onClose: t,
    medGuid: n,
    medName: r,
    onFetchUnitDetails: l,
    onUpdateUnits: s,
  }) => {
    const [a, u] = C.useState([]),
      [i, d] = C.useState([]),
      [S, w] = C.useState(!1),
      [h, _] = C.useState(!1),
      [k, P] = C.useState(null),
      [B, m] = C.useState(!1),
      p = C.useCallback(async () => {
        w(!0), P(null);
        try {
          const T = await l(n);
          u(T), d(JSON.parse(JSON.stringify(T)));
        } catch (T) {
          P("無法載入單位詳細資訊"),
            console.error("Failed to fetch unit details:", T);
        } finally {
          w(!1);
        }
      }, [n, l]);
    C.useEffect(() => {
      e && n && (p(), m(!1));
    }, [e, n, p]);
    const g = () => {
        m(!0), d(JSON.parse(JSON.stringify(a)));
      },
      b = () => {
        m(!1), d(JSON.parse(JSON.stringify(a)));
      },
      M = () => {
        for (let F = 0; F < i.length; F++) {
          const D = i[F];
          if (!D.unit_name.trim()) return `單位 ${F + 1}：單位名稱不能為空`;
          if (!D.quantity || parseInt(D.quantity) < 1)
            return `單位 ${F + 1}：最小操作數量必須大於 0`;
          if (!D.sort_order || parseInt(D.sort_order) < 1)
            return `單位 ${F + 1}：順序必須大於 0`;
          if (parseInt(D.sort_order) > 1 && !D.conversion_rate)
            return `單位 ${F + 1}：順序大於 1 的單位必須設定換算比例`;
          if (D.conversion_rate && parseFloat(D.conversion_rate) <= 0)
            return `單位 ${F + 1}：換算比例必須大於 0`;
        }
        const T = i.map((F) => parseInt(F.sort_order)),
          A = new Set(T);
        return T.length !== A.size ? "順序不能重複" : null;
      },
      I = async () => {
        const T = M();
        if (T) {
          P(T);
          return;
        }
        _(!0), P(null);
        try {
          await s(i), u(JSON.parse(JSON.stringify(i))), m(!1);
        } catch (A) {
          P("儲存失敗，請稍後再試"), console.error("Failed to save units:", A);
        } finally {
          _(!1);
        }
      },
      z = (T, A, F) => {
        const D = [...i];
        (D[T] = { ...D[T], [A]: F }), d(D);
      },
      U = () => {
        const T = Math.max(...i.map((F) => parseInt(F.sort_order) || 0), 0),
          A = {
            GUID: `NEW_${Date.now()}`,
            med_guid: n,
            unit_type: "撥補",
            unit_name: "",
            quantity: "1",
            sort_order: String(T + 1),
            conversion_rate: "",
          };
        d([...i, A]);
      },
      Y = (T) => {
        const A = i.filter((F, D) => D !== T);
        d(A);
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden",
            children: [
              o.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      o.jsx("div", {
                        className:
                          "w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center",
                        children: o.jsx(Sr, {
                          size: 20,
                          className: "text-slate-700",
                        }),
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("h2", {
                            className: "text-xl font-bold text-slate-800",
                            children: "單位詳細資訊",
                          }),
                          o.jsx("p", {
                            className: "text-sm text-slate-600",
                            children: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "text-slate-400 hover:text-slate-600 transition-colors",
                    children: o.jsx(en, { size: 24 }),
                  }),
                ],
              }),
              o.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(80vh-180px)]",
                children: S
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ye, {}),
                    })
                  : k
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx("p", { className: "text-red-600", children: k }),
                        o.jsx("button", {
                          onClick: p,
                          className:
                            "mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors",
                          children: "重試",
                        }),
                      ],
                    })
                  : a.length === 0 && !B
                  ? o.jsx("div", {
                      className: "text-center py-12 text-slate-500",
                      children: "無單位資訊",
                    })
                  : B
                  ? o.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        i.map((T, A) => {
                          var F;
                          return o.jsx(
                            "div",
                            {
                              className:
                                "bg-white rounded-lg p-4 border-2 border-slate-300",
                              children: o.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  o.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-3",
                                    children: [
                                      o.jsxs("span", {
                                        className:
                                          "text-sm font-semibold text-slate-700",
                                        children: ["單位 ", A + 1],
                                      }),
                                      i.length > 1 &&
                                        o.jsx("button", {
                                          onClick: () => Y(A),
                                          className:
                                            "text-red-500 hover:text-red-700 transition-colors",
                                          title: "刪除此單位",
                                          children: o.jsx(na, { size: 16 }),
                                        }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "單位類型 *",
                                          }),
                                          o.jsxs("select", {
                                            value: T.unit_type,
                                            onChange: (D) =>
                                              z(A, "unit_type", D.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                              o.jsx("option", {
                                                value: "採購",
                                                children: "採購",
                                              }),
                                              o.jsx("option", {
                                                value: "撥補",
                                                children: "撥補",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "單位名稱 *",
                                          }),
                                          o.jsx("input", {
                                            type: "text",
                                            value: T.unit_name,
                                            onChange: (D) =>
                                              z(A, "unit_name", D.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            placeholder: "例：盒、瓶",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "最小操作數量 *",
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "1",
                                            value: T.quantity,
                                            onChange: (D) =>
                                              z(A, "quantity", D.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "順序 *",
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "1",
                                            value: T.sort_order,
                                            onChange: (D) =>
                                              z(
                                                A,
                                                "sort_order",
                                                D.target.value
                                              ),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "col-span-2",
                                        children: [
                                          o.jsxs("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: [
                                              "換算比例 ",
                                              parseInt(T.sort_order) > 1 && "*",
                                            ],
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            value: T.conversion_rate,
                                            onChange: (D) =>
                                              z(
                                                A,
                                                "conversion_rate",
                                                D.target.value
                                              ),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            placeholder:
                                              parseInt(T.sort_order) === 1
                                                ? "第一層單位無需填寫"
                                                : "與上層單位的換算比例",
                                            disabled:
                                              parseInt(T.sort_order) === 1,
                                          }),
                                          parseInt(T.sort_order) > 1 &&
                                            T.conversion_rate &&
                                            o.jsxs("p", {
                                              className:
                                                "text-xs text-slate-500 mt-1",
                                              children: [
                                                "1 ",
                                                ((F = i[A - 1]) == null
                                                  ? void 0
                                                  : F.unit_name) || "上層單位",
                                                " = ",
                                                T.conversion_rate,
                                                " ",
                                                T.unit_name,
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            T.GUID
                          );
                        }),
                        o.jsxs("button", {
                          onClick: U,
                          className:
                            "w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2",
                          children: [
                            o.jsx(Ol, { size: 20 }),
                            o.jsx("span", { children: "新增單位" }),
                          ],
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "space-y-3",
                      children: a.map((T, A) => {
                        var F;
                        return o.jsx(
                          "div",
                          {
                            className:
                              "bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-slate-300 transition-colors",
                            children: o.jsxs("div", {
                              className: "flex items-start justify-between",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded",
                                          children: T.unit_type,
                                        }),
                                        o.jsx("span", {
                                          className:
                                            "text-lg font-semibold text-slate-800",
                                          children: T.unit_name,
                                        }),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        T.conversion_rate &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "換算比例：1 ",
                                              ((F = a[A - 1]) == null
                                                ? void 0
                                                : F.unit_name) || "上層單位",
                                              " = ",
                                              T.conversion_rate,
                                              " ",
                                              T.unit_name,
                                            ],
                                          }),
                                        T.quantity &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "最小操作數量：",
                                              T.quantity,
                                              " ",
                                              T.unit_name,
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsx("div", {
                                  className: "text-right",
                                  children: o.jsxs("span", {
                                    className: "text-xs text-slate-500",
                                    children: ["順序 ", T.sort_order],
                                  }),
                                }),
                              ],
                            }),
                          },
                          T.GUID
                        );
                      }),
                    }),
              }),
              o.jsx("div", {
                className:
                  "flex justify-between items-center gap-3 p-6 border-t border-slate-200 bg-slate-50",
                children: B
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("button", {
                          onClick: b,
                          disabled: h,
                          className:
                            "px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        o.jsx("button", {
                          onClick: I,
                          disabled: h,
                          className:
                            "px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors flex items-center gap-2 disabled:opacity-50",
                          children: h
                            ? o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(Ye, {}),
                                  o.jsx("span", { children: "儲存中..." }),
                                ],
                              })
                            : o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(jp, { size: 16 }),
                                  o.jsx("span", { children: "儲存" }),
                                ],
                              }),
                        }),
                      ],
                    })
                  : o.jsxs(o.Fragment, {
                      children: [
                        o.jsxs("button", {
                          onClick: g,
                          className:
                            "px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors flex items-center gap-2",
                          children: [
                            o.jsx(oo, { size: 16 }),
                            o.jsx("span", { children: "編輯" }),
                          ],
                        }),
                        o.jsx("button", {
                          onClick: t,
                          className:
                            "px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors",
                          children: "關閉",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        })
      : null;
  },
  Up = ({ isOpen: e, onClose: t, drugName: n, drugCode: r, servers: l }) => {
    if (!e) return null;
    const s = l.filter((i) => i.server_type === "藥庫"),
      a = l.filter((i) => i.server_type !== "藥庫"),
      u = (i, d) => (i < d ? "text-red-600" : "text-green-600");
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: o.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden",
        children: [
          o.jsx("div", {
            className: "p-6 border-b border-slate-200",
            children: o.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                o.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    o.jsx("div", {
                      className:
                        "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                      children: o.jsx(kp, {
                        size: 20,
                        className: "text-blue-700",
                      }),
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("h2", {
                          className: "text-xl font-bold text-slate-800",
                          children: "伺服器詳細資料",
                        }),
                        o.jsxs("p", {
                          className: "text-sm text-slate-600",
                          children: [
                            o.jsx("span", {
                              className: "font-mono font-medium",
                              children: r,
                            }),
                            " - ",
                            n,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: t,
                  className:
                    "text-slate-400 hover:text-slate-600 transition-colors",
                  children: o.jsx(en, { size: 24 }),
                }),
              ],
            }),
          }),
          o.jsxs("div", {
            className: "flex-1 overflow-y-auto p-6",
            children: [
              s.length > 0 &&
                o.jsxs("div", {
                  className: "mb-8",
                  children: [
                    o.jsx("h3", {
                      className: "text-lg font-semibold text-slate-700 mb-4",
                      children: "藥庫",
                    }),
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg border border-slate-200 overflow-hidden",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "伺服器名稱",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "安全量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "基準量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "批號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "效期",
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("tbody", {
                            className: "divide-y divide-slate-200",
                            children: [
                              s.map((i, d) =>
                                o.jsxs(
                                  "tr",
                                  {
                                    className: "hover:bg-slate-50",
                                    children: [
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-800 font-medium",
                                        children: i.server_name,
                                      }),
                                      o.jsx("td", {
                                        className: `px-4 py-3 text-sm text-center font-semibold ${u(
                                          i.stock,
                                          i.safety
                                        )}`,
                                        children: i.stock.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.safety.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.standard.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.lots.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.lots.map((S, w) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        S,
                                                        " (",
                                                        i.quantities[w] || 0,
                                                        ")",
                                                      ],
                                                    },
                                                    w
                                                  )
                                                ),
                                              })
                                            : "-",
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.expiry_dates.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.expiry_dates.map(
                                                  (S, w) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: S,
                                                      },
                                                      w
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  d
                                )
                              ),
                              o.jsxs("tr", {
                                className: "bg-slate-50 font-semibold",
                                children: [
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-slate-800",
                                    children: "總計",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, d) => i + d.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, d) => i + d.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, d) => i + d.standard, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", { colSpan: 2 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              a.length > 0 &&
                o.jsxs("div", {
                  children: [
                    o.jsx("h3", {
                      className: "text-lg font-semibold text-slate-700 mb-4",
                      children: "藥局",
                    }),
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg border border-slate-200 overflow-hidden",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "伺服器名稱",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "安全量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "基準量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "批號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "效期",
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("tbody", {
                            className: "divide-y divide-slate-200",
                            children: [
                              a.map((i, d) =>
                                o.jsxs(
                                  "tr",
                                  {
                                    className: "hover:bg-slate-50",
                                    children: [
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-800 font-medium",
                                        children: i.server_name,
                                      }),
                                      o.jsx("td", {
                                        className: `px-4 py-3 text-sm text-center font-semibold ${u(
                                          i.stock,
                                          i.safety
                                        )}`,
                                        children: i.stock.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.safety.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.standard.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.lots.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.lots.map((S, w) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        S,
                                                        " (",
                                                        i.quantities[w] || 0,
                                                        ")",
                                                      ],
                                                    },
                                                    w
                                                  )
                                                ),
                                              })
                                            : "-",
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.expiry_dates.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.expiry_dates.map(
                                                  (S, w) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: S,
                                                      },
                                                      w
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  d
                                )
                              ),
                              o.jsxs("tr", {
                                className: "bg-slate-50 font-semibold",
                                children: [
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-slate-800",
                                    children: "總計",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, d) => i + d.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, d) => i + d.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, d) => i + d.standard, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", { colSpan: 2 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              l.length === 0 &&
                o.jsx("div", {
                  className: "text-center py-12",
                  children: o.jsx("p", {
                    className: "text-slate-500",
                    children: "無伺服器資料",
                  }),
                }),
            ],
          }),
          o.jsx("div", {
            className:
              "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
            children: o.jsx("button", {
              onClick: t,
              className:
                "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
              children: "關閉",
            }),
          }),
        ],
      }),
    });
  },
  hr = async (e) => {
    try {
      const t = { ValueAry: [e] };
      console.log("=== API Request: /api/medUnit/get_by_Med_GUID ==="),
        console.log("Request Data:", t),
        console.log("Med GUID:", e);
      const n = await De("/api/medUnit/get_by_Med_GUID", {
        method: "POST",
        body: t,
      });
      return console.log("Response:", n), n.Data || [];
    } catch (t) {
      throw (
        (console.error("Failed to fetch unit details by med GUID:", t),
        console.error("Error details:", t),
        t)
      );
    }
  },
  sa = async (e) => {
    try {
      const t = { Data: e };
      console.log("=== API Request: /api/medUnit/update ==="),
        console.log("Request Data:", JSON.stringify(t, null, 2)),
        await De("/api/medUnit/update", { method: "POST", body: t }),
        console.log("Units updated successfully");
    } catch (t) {
      throw (console.error("Failed to update units:", t), t);
    }
  },
  oa = async (e) =>
    await De("/api/consumption/get_avg_by_start_end", {
      method: "POST",
      body: e,
    }),
  Rp = async () => {
    try {
      const t = (
          await De("/api/ServerSetting/get_name", { method: "POST", body: {} })
        ).Data,
        n = new Date(),
        r = new Date();
      r.setDate(r.getDate() - 30);
      const l = (i) => {
          const d = i.getFullYear(),
            S = String(i.getMonth() + 1).padStart(2, "0"),
            w = String(i.getDate()).padStart(2, "0"),
            h = String(i.getHours()).padStart(2, "0"),
            _ = String(i.getMinutes()).padStart(2, "0"),
            k = String(i.getSeconds()).padStart(2, "0");
          return `${d}-${S}-${w} ${h}:${_}:${k}`;
        },
        s = t.map((i) =>
          Promise.all([
            De("/api/stock/get_stock", {
              method: "POST",
              body: { ServerName: i.name, ServerType: i.type },
            }),
            oa({
              ValueAry: [l(r), l(n)],
              ServerName: i.name,
              ServerType: i.type,
            }),
          ]).then(([d, S]) => ({
            server: i,
            stockData: d.Data,
            consumptionData: S.Data,
          }))
        ),
        a = await Promise.all(s),
        u = new Map();
      return (
        a.forEach(({ server: i, stockData: d, consumptionData: S }) => {
          const w = new Map(
            S.map((h) => [
              h.CODE,
              typeof h.ANG_QTY == "string"
                ? parseFloat(h.ANG_QTY) || 0
                : h.ANG_QTY || 0,
            ])
          );
          d.forEach((h) => {
            var z, U, Y, T, A;
            const _ = h.code,
              k = h.qty.reduce((F, D) => F + parseFloat(D || "0"), 0),
              P = h.content.reduce((F, D) => {
                const H = D.Sub_content.reduce(
                  (j, O) => j + parseFloat(O.END_QTY || "0"),
                  0
                );
                return F + H;
              }, 0),
              B = h.content.reduce(
                (F, D) =>
                  D.Sub_content && D.Sub_content.length > 0
                    ? F
                    : F + parseFloat(D.START_QTY || "0"),
                0
              ),
              m = w.get(_) || 0,
              p = parseFloat(
                ((z = h.Classify) == null ? void 0 : z.safe_day) || "0"
              ),
              g = parseFloat(
                ((U = h.Classify) == null ? void 0 : U.standard_day) || "0"
              ),
              b = m * p,
              M = m * g,
              I = {
                server_name: i.name,
                server_type: i.type,
                stock: k,
                safety: b,
                standard: M,
                lots: h.lot || [],
                expiry_dates: h.expiry_date || [],
                quantities: h.qty || [],
                full_data: h,
              };
            if (u.has(_)) {
              const F = u.get(_);
              F.servers.push(I),
                (F.verified_qty = Math.max(F.verified_qty, P)),
                (F.transit_qty = Math.max(F.transit_qty, B));
            } else
              u.set(_, {
                code: h.code,
                material_no: h.material_no,
                name: h.name,
                cht_name:
                  ((Y = h.med_cloud) == null ? void 0 : Y.CHT_NAME) || "",
                unit: ((T = h.med_cloud) == null ? void 0 : T.MIN_PAKAGE) || "",
                type: ((A = h.med_cloud) == null ? void 0 : A.TYPE) || "",
                verified_qty: P,
                transit_qty: B,
                servers: [I],
              });
          });
        }),
        Array.from(u.values())
      );
    } catch (e) {
      throw (console.error("Failed to fetch inventory data:", e), e);
    }
  },
  $p = ({ toast: e, onClose: t }) => {
    const [n, r] = C.useState(!1);
    C.useEffect(() => {
      const a = setTimeout(() => {
        r(!0), setTimeout(() => t(e.id), 300);
      }, 3e3);
      return () => clearTimeout(a);
    }, [e.id, t]);
    const l = () => {
        switch (e.type) {
          case "success":
            return o.jsx(xp, { className: "w-5 h-5 text-green-500" });
          case "error":
            return o.jsx(Cp, { className: "w-5 h-5 text-red-500" });
          case "warning":
            return o.jsx(jl, { className: "w-5 h-5 text-yellow-500" });
          case "info":
            return o.jsx(jl, { className: "w-5 h-5 text-blue-500" });
        }
      },
      s = () => {
        switch (e.type) {
          case "success":
            return "bg-green-50 border-green-200";
          case "error":
            return "bg-red-50 border-red-200";
          case "warning":
            return "bg-yellow-50 border-yellow-200";
          case "info":
            return "bg-blue-50 border-blue-200";
        }
      };
    return o.jsxs("div", {
      className: `
        flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-lg border shadow-lg
        ${s()}
        ${n ? "animate-slide-out-left" : "animate-slide-in-right"}
      `,
      children: [
        l(),
        o.jsx("p", {
          className: "flex-1 text-sm font-medium text-gray-800",
          children: e.message,
        }),
        o.jsx("button", {
          onClick: () => {
            r(!0), setTimeout(() => t(e.id), 300);
          },
          className: "text-gray-400 hover:text-gray-600 transition-colors",
          children: o.jsx(en, { className: "w-4 h-4" }),
        }),
      ],
    });
  },
  Rc = C.createContext(void 0),
  aa = () => {
    const e = C.useContext(Rc);
    if (!e) throw new Error("useToast must be used within ToastProvider");
    return e;
  },
  Fp = ({ children: e }) => {
    const [t, n] = C.useState([]),
      r = C.useCallback((s, a = "info") => {
        const u = `toast-${Date.now()}-${Math.random()}`;
        n((i) => [...i, { id: u, message: s, type: a }]);
      }, []),
      l = C.useCallback((s) => {
        n((a) => a.filter((u) => u.id !== s));
      }, []);
    return o.jsxs(Rc.Provider, {
      value: { showToast: r },
      children: [
        e,
        o.jsx("div", {
          className: "fixed top-4 right-4 z-[9999] flex flex-col gap-2",
          children: t.map((s) => o.jsx($p, { toast: s, onClose: l }, s.id)),
        }),
      ],
    });
  },
  Op = () => {
    const { showToast: e } = aa(),
      [t, n] = C.useState([]),
      [r, l] = C.useState(!0),
      [s, a] = C.useState(""),
      [u, i] = C.useState(new Set(["all"])),
      [d, S] = C.useState("all"),
      [w, h] = C.useState(null),
      [_, k] = C.useState(null),
      [P, B] = C.useState(!1),
      [m, p] = C.useState(!1);
    C.useEffect(() => {
      g();
    }, []);
    const g = async () => {
        try {
          l(!0);
          const D = await Rp();
          n(D);
        } catch (D) {
          console.error("Failed to load inventory data:", D),
            e("載入庫存資料失敗", "error");
        } finally {
          l(!1);
        }
      },
      b = (D, H) => {
        D.preventDefault(), h({ x: D.clientX, y: D.clientY, item: H });
      },
      M = (D) => {
        k(D), p(!0);
      },
      I = () => {
        h(null);
      },
      z = () => {
        w != null && w.item && (k(w.item), B(!0), h(null));
      },
      U = () => {
        B(!1), k(null);
      },
      Y = C.useMemo(
        () => Array.from(new Set(t.map((H) => H.type).filter((H) => H))).sort(),
        [t]
      ),
      T = (D) => {
        i((H) => {
          const j = new Set(H);
          return D === "all"
            ? new Set(["all"])
            : (j.delete("all"),
              j.has(D) ? j.delete(D) : j.add(D),
              j.size === 0 ? new Set(["all"]) : j);
        });
      },
      A = C.useMemo(
        () =>
          t
            .filter((H) => {
              const j =
                  H.code.toLowerCase().includes(s.toLowerCase()) ||
                  H.name.toLowerCase().includes(s.toLowerCase()) ||
                  H.cht_name.toLowerCase().includes(s.toLowerCase()) ||
                  H.material_no.toLowerCase().includes(s.toLowerCase()),
                O = u.has("all") || u.has(H.type),
                V = (() => {
                  if (d === "all") return !0;
                  const c = H.servers.some((f) => f.stock < f.safety);
                  return d === "low" ? c : !c;
                })();
              return j && O && V;
            })
            .sort((H, j) => {
              const O = (W) => {
                  let q = null;
                  return (
                    W.servers.forEach((ae) => {
                      ae.full_data.content.forEach((me) => {
                        me.Sub_content.forEach((de) => {
                          if (de.OP_TIME) {
                            const rt = new Date(de.OP_TIME);
                            (!q || rt > q) && (q = rt);
                          }
                        });
                      });
                    }),
                    q
                  );
                },
                V = (W) => {
                  let q = null;
                  return (
                    W.servers.forEach((ae) => {
                      ae.full_data.content.forEach((me) => {
                        if (me.DELIVERY_TIME) {
                          const de = new Date(me.DELIVERY_TIME);
                          (!q || de < q) && (q = de);
                        }
                      });
                    }),
                    q
                  );
                },
                c = (W) => W.servers.some((q) => q.stock < q.safety),
                f = H.verified_qty,
                x = j.verified_qty,
                v = H.transit_qty,
                E = j.transit_qty,
                y = f !== 0,
                N = x !== 0,
                R = f === 0 && v !== 0,
                Q = x === 0 && E !== 0,
                G = !y && !R && c(H),
                Z = !N && !Q && c(j);
              if (y && !N) return -1;
              if (!y && N) return 1;
              if (y && N) {
                const W = O(H),
                  q = O(j);
                return W && q ? q.getTime() - W.getTime() : W ? -1 : q ? 1 : 0;
              }
              if (R && !Q) return -1;
              if (!R && Q) return 1;
              if (R && Q) {
                const W = V(H),
                  q = V(j);
                return W && q ? W.getTime() - q.getTime() : W ? -1 : q ? 1 : 0;
              }
              return G && !Z ? -1 : !G && Z ? 1 : H.code.localeCompare(j.code);
            }),
        [t, s, u, d]
      ),
      F = (D, H) =>
        D < H
          ? { color: "text-red-600", bgColor: "bg-red-50", label: "低於安全量" }
          : { color: "text-green-600", bgColor: "bg-green-50", label: "正常" };
    return r
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ye, {}),
        })
      : o.jsxs(o.Fragment, {
          children: [
            o.jsxs("div", {
              className: "space-y-4 mb-6",
              children: [
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-6",
                  children: o.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex-1 relative",
                        children: [
                          o.jsx(Np, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400",
                          }),
                          o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號、藥名或中文名...",
                            value: s,
                            onChange: (D) => a(D.target.value),
                            className:
                              "w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      o.jsxs("select", {
                        value: d,
                        onChange: (D) => S(D.target.value),
                        className:
                          "px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer",
                        children: [
                          o.jsx("option", {
                            value: "all",
                            children: "全部狀態",
                          }),
                          o.jsx("option", {
                            value: "low",
                            children: "低於安全量",
                          }),
                          o.jsx("option", {
                            value: "normal",
                            children: "庫存正常",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsx("label", {
                        className: "text-sm font-medium text-slate-700",
                        children: "藥品類別:",
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => T("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              u.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          Y.map((D) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => T(D),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  u.has(D)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: D,
                              },
                              D
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden",
              children: [
                o.jsx("div", {
                  className: "overflow-x-auto",
                  children: o.jsxs("table", {
                    className: "w-full",
                    children: [
                      o.jsxs("thead", {
                        className: "bg-slate-50 border-b border-slate-200",
                        children: [
                          o.jsxs("tr", {
                            children: [
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "藥碼",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "料號",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "藥名",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "中文名",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "種類",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "單位",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "已驗量",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                children: "在途量",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                colSpan: 3,
                                children: "藥庫",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                colSpan: 3,
                                children: "藥局",
                              }),
                            ],
                          }),
                          o.jsxs("tr", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: [
                              o.jsx("th", { colSpan: 8 }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "庫存",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "安全量",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "基準量",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "庫存",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "安全量",
                              }),
                              o.jsx("th", {
                                className:
                                  "px-3 py-2 text-center text-base font-medium text-slate-600",
                                children: "基準量",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("tbody", {
                        className: "divide-y divide-slate-200",
                        children: A.map((D) => {
                          const H = D.servers.filter(
                              (N) => N.server_type === "藥庫"
                            ),
                            j = D.servers.filter(
                              (N) => N.server_type !== "藥庫"
                            ),
                            O = H.reduce((N, R) => N + R.stock, 0),
                            V = H.reduce((N, R) => N + R.safety, 0),
                            c = H.reduce((N, R) => N + R.standard, 0),
                            f = j.reduce((N, R) => N + R.stock, 0),
                            x = j.reduce((N, R) => N + R.safety, 0),
                            v = j.reduce((N, R) => N + R.standard, 0),
                            E = F(O, V),
                            y = F(f, x);
                          return o.jsxs(
                            "tr",
                            {
                              className:
                                "hover:bg-slate-50 transition-colors cursor-pointer",
                              onClick: () => M(D),
                              onContextMenu: (N) => b(N, D),
                              children: [
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: o.jsx("span", {
                                    className:
                                      "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                    children: D.code,
                                  }),
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: o.jsx("span", {
                                    className:
                                      "inline-block px-2 py-1 bg-slate-500 text-white text-xs rounded font-mono",
                                    children: D.material_no,
                                  }),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-slate-700 font-medium",
                                  children: D.name,
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm text-slate-600",
                                  children: D.cht_name || "-",
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: o.jsx("span", {
                                    className:
                                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800",
                                    children: D.type || "-",
                                  }),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center text-slate-700",
                                  children: D.unit,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center font-medium text-slate-900",
                                  children: D.verified_qty.toLocaleString(),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center font-medium text-amber-600",
                                  children: D.transit_qty.toLocaleString(),
                                }),
                                o.jsx("td", {
                                  className: `px-3 py-4 text-sm text-center font-semibold ${E.color}`,
                                  children:
                                    H.length > 0 ? O.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    H.length > 0 ? V.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    H.length > 0 ? c.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className: `px-3 py-4 text-sm text-center font-semibold ${y.color}`,
                                  children:
                                    j.length > 0 ? f.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    j.length > 0 ? x.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    j.length > 0 ? v.toLocaleString() : "-",
                                }),
                              ],
                            },
                            D.code
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                A.length === 0 &&
                  o.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      o.jsx(Sr, {
                        className: "h-12 w-12 text-slate-300 mx-auto mb-3",
                      }),
                      o.jsx("p", {
                        className: "text-slate-500 text-sm",
                        children: "找不到符合條件的藥品",
                      }),
                    ],
                  }),
              ],
            }),
            o.jsxs("div", {
              className: "mt-6 text-center text-sm text-slate-500",
              children: ["共顯示 ", A.length, " 筆資料"],
            }),
            w &&
              o.jsx(ra, { x: w.x, y: w.y, onClose: I, onViewUnitDetails: z }),
            P &&
              _ &&
              _.servers.length > 0 &&
              o.jsx(la, {
                isOpen: P,
                onClose: U,
                medGuid: _.servers[0].full_data.med_cloud.GUID,
                medName: _.name,
                onFetchUnitDetails: hr,
                onUpdateUnits: sa,
              }),
            m &&
              _ &&
              o.jsx(Up, {
                isOpen: m,
                onClose: () => p(!1),
                drugName: _.name,
                drugCode: _.code,
                servers: _.servers,
              }),
          ],
        });
  },
  Qp = async () =>
    await De("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  jr = async (e) =>
    await De("/api/stock/get_stock", { method: "POST", body: e }),
  Ap = async (e) =>
    await De("/api/medClassify/add", { method: "POST", body: e }),
  Vp = async (e) =>
    await De("/api/medClassify/update", { method: "POST", body: e }),
  gi = async (e) =>
    await De("/api/medmap/update_stock", { method: "POST", body: e }),
  Bp = async () =>
    await De("/api/medClassify/get_all", { method: "POST", body: {} }),
  Hp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState([]),
      [i, d] = C.useState(new Set()),
      [S, w] = C.useState("all"),
      [h, _] = C.useState(!0),
      [k, P] = C.useState(null),
      [B, m] = C.useState(!1),
      [p, g] = C.useState(!1),
      [b, M] = C.useState(null),
      [I, z] = C.useState(!1),
      [U, Y] = C.useState("");
    C.useEffect(() => {
      A(), T();
    }, []),
      C.useEffect(() => {
        n && F(n);
      }, [n]);
    const T = async () => {
        try {
          const f = await Bp();
          f.Code === 200 && f.Data && u(f.Data);
        } catch (f) {
          console.error("Failed to fetch classifications:", f);
        }
      },
      A = async () => {
        try {
          _(!0);
          const f = await Qp();
          if (f.Code === 200 && f.Data) {
            const x = [...f.Data].sort((v, E) =>
              v.type === "藥庫" && E.type !== "藥庫"
                ? -1
                : v.type !== "藥庫" && E.type === "藥庫"
                ? 1
                : 0
            );
            t(x), x.length > 0 && r(x[0]);
          } else P(f.Result || "無法取得伺服器設定");
        } catch (f) {
          console.error("Failed to fetch server settings:", f),
            P("載入伺服器設定時發生錯誤");
        } finally {
          _(!1);
        }
      },
      F = async (f) => {
        try {
          _(!0), P(null);
          const x = await jr({ ServerName: f.name, ServerType: f.type });
          x.Code === 200 && x.Data
            ? s(x.Data)
            : (P(x.Result || "無法取得庫存資料"), s([]));
        } catch (x) {
          console.error("Failed to fetch stock data:", x),
            P("載入庫存資料時發生錯誤"),
            s([]);
        } finally {
          _(!1);
        }
      },
      D = C.useMemo(() => {
        const f = new Set();
        return (
          l.forEach((x) => {
            var v;
            (v = x.med_cloud) != null && v.TYPE && f.add(x.med_cloud.TYPE);
          }),
          Array.from(f).sort()
        );
      }, [l]),
      H = C.useMemo(
        () =>
          S === "all"
            ? l
            : l.filter((f) => {
                var x;
                return ((x = f.med_cloud) == null ? void 0 : x.TYPE) === S;
              }),
        [l, S]
      ),
      j = C.useMemo(() => {
        const f = new Map();
        return (
          H.forEach((x) => {
            const v = x.Classify_GUID || "unclassified";
            f.has(v) || f.set(v, { classify: x.Classify, items: [] }),
              f.get(v).items.push(x);
          }),
          Array.from(f.entries()).map(([x, v]) => ({ guid: x, ...v }))
        );
      }, [H]),
      O = (f) => {
        d((x) => {
          const v = new Set(x);
          return v.has(f) ? v.delete(f) : v.add(f), v;
        });
      },
      V = async (f, x) => {
        try {
          console.log("Updating drug classification:", {
            drugGuid: f,
            classifyGuid: x,
          });
          const v = await gi({ Data: { GUID: f, Classify_GUID: x } });
          console.log("Update drug classification response:", v),
            v.Code === 200
              ? (n && (await F(n)), await T())
              : (console.error("Update failed with response:", v),
                alert(`更新失敗: ${v.Result || "未知錯誤"}`));
        } catch (v) {
          console.error(
            "Failed to update drug classification - Full error:",
            v
          );
          const E = v instanceof Error ? v.message : "更新藥品分類時發生錯誤";
          alert(`更新失敗: ${E}`);
        }
      },
      c = async (f, x) => {
        const v = l.filter((y) => {
          var N;
          return ((N = y.med_cloud) == null ? void 0 : N.TYPE) === f;
        });
        if (v.length === 0) {
          alert("沒有找到該類別的藥品");
          return;
        }
        if (
          confirm(`確定要將 ${v.length} 個「${f}」類別的藥品統一設定分類嗎？`)
        )
          try {
            const y = v.map((R) => ({ GUID: R.GUID, Classify_GUID: x })),
              N = await gi({ Data: y });
            N.Code === 200
              ? (alert(`批次更新完成
成功更新 ${v.length} 項藥品分類`),
                n && (await F(n)),
                await T())
              : alert(`批次更新失敗: ${N.Result || "未知錯誤"}`);
          } catch (y) {
            console.error("Batch update error:", y);
            const N = y instanceof Error ? y.message : "批次更新時發生錯誤";
            alert(`批次更新失敗: ${N}`);
          }
      };
    return h && e.length === 0
      ? o.jsx("div", {
          className: "flex items-center justify-center h-96",
          children: o.jsx(Ye, { size: "large" }),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            k &&
              o.jsxs("div", {
                className:
                  "p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
                children: [
                  o.jsx(jl, { size: 20 }),
                  o.jsx("span", { children: k }),
                ],
              }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsxs("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                      children: o.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: e.map((f) =>
                          o.jsx(
                            "button",
                            {
                              onClick: () => r(f),
                              className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                                (n == null ? void 0 : n.name) === f.name &&
                                (n == null ? void 0 : n.type) === f.type
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`,
                              children: f.name,
                            },
                            `${f.name}-${f.type}`
                          )
                        ),
                      }),
                    }),
                    o.jsx("div", {
                      className: "flex gap-2",
                      children: o.jsxs("button", {
                        onClick: () => m(!0),
                        className:
                          "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: [
                          o.jsx(Ol, { size: 18 }),
                          o.jsx("span", { children: "新增分類" }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsx("label", {
                        className: "text-sm font-medium text-slate-700",
                        children: "藥品類別:",
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => w("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              S === "all"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          D.map((f) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => w(f),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  S === f
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: f,
                              },
                              f
                            )
                          ),
                        ],
                      }),
                      S !== "all" &&
                        o.jsx("div", {
                          className: "pt-2 border-t border-slate-200",
                          children: o.jsxs("button", {
                            onClick: () => {
                              Y(S), z(!0);
                            },
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                            children: [
                              o.jsx(oo, { size: 18 }),
                              o.jsxs("span", {
                                children: ["批次設定「", S, "」分類"],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
            h && n
              ? o.jsx("div", {
                  className: "flex items-center justify-center h-64",
                  children: o.jsx(Ye, { size: "large" }),
                })
              : l.length === 0
              ? o.jsxs("div", {
                  className:
                    "text-center py-12 bg-white rounded-lg shadow-sm border border-slate-200",
                  children: [
                    o.jsx(Sr, {
                      className: "h-12 w-12 text-slate-300 mx-auto mb-3",
                    }),
                    o.jsx("p", {
                      className: "text-slate-500 text-sm",
                      children: "目前沒有庫存資料",
                    }),
                  ],
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: j.map((f) => {
                    const x = i.has(f.guid);
                    return o.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden",
                        children: [
                          o.jsx("div", {
                            className:
                              "bg-slate-50 border-b border-slate-200 p-4",
                            children: o.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                o.jsxs("button", {
                                  onClick: () => O(f.guid),
                                  className:
                                    "flex items-center gap-4 flex-1 text-left hover:bg-slate-100 -m-4 p-4 rounded transition-colors",
                                  children: [
                                    x
                                      ? o.jsx(gp, {
                                          size: 20,
                                          className: "text-slate-600",
                                        })
                                      : o.jsx(yp, {
                                          size: 20,
                                          className: "text-slate-600",
                                        }),
                                    o.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-slate-800",
                                      children: f.classify
                                        ? f.classify.name
                                        : "未分類",
                                    }),
                                    o.jsxs("span", {
                                      className: "text-sm text-slate-500",
                                      children: [
                                        "(",
                                        f.items.length,
                                        " 項藥品)",
                                      ],
                                    }),
                                    f.classify &&
                                      o.jsxs(o.Fragment, {
                                        children: [
                                          o.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-sm ml-auto mr-4",
                                            children: [
                                              o.jsx("span", {
                                                className: "text-slate-600",
                                                children: "安全量:",
                                              }),
                                              o.jsxs("span", {
                                                className:
                                                  "font-semibold text-slate-800",
                                                children: [
                                                  f.classify.safe_day,
                                                  " 天",
                                                ],
                                              }),
                                            ],
                                          }),
                                          o.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-sm",
                                            children: [
                                              o.jsx("span", {
                                                className: "text-slate-600",
                                                children: "基準量:",
                                              }),
                                              o.jsxs("span", {
                                                className:
                                                  "font-semibold text-slate-800",
                                                children: [
                                                  f.classify.standard_day,
                                                  " 天",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                f.classify &&
                                  o.jsxs("button", {
                                    onClick: (v) => {
                                      v.stopPropagation(), M(f.classify), g(!0);
                                    },
                                    className:
                                      "flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors ml-4",
                                    children: [
                                      o.jsx(oo, { size: 14 }),
                                      o.jsx("span", { children: "編輯" }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          x &&
                            o.jsx("div", {
                              className: "overflow-x-auto",
                              children: o.jsxs("table", {
                                className: "w-full",
                                children: [
                                  o.jsx("thead", {
                                    className:
                                      "bg-slate-50 border-b border-slate-200",
                                    children: o.jsxs("tr", {
                                      children: [
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥碼",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥名",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "料號",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥品類別",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "分類",
                                        }),
                                      ],
                                    }),
                                  }),
                                  o.jsx("tbody", {
                                    className: "divide-y divide-slate-200",
                                    children: f.items.map((v) => {
                                      var E;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-slate-50 transition-colors",
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm font-medium text-slate-900",
                                              children: v.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: v.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: v.material_no || "-",
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: o.jsx("span", {
                                                className:
                                                  "inline-block px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium",
                                                children:
                                                  ((E = v.med_cloud) == null
                                                    ? void 0
                                                    : E.TYPE) || "-",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className: "px-6 py-4",
                                              children: o.jsxs("select", {
                                                value: v.Classify_GUID || "",
                                                onChange: (y) =>
                                                  V(v.GUID, y.target.value),
                                                className:
                                                  "px-3 py-1.5 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white",
                                                children: [
                                                  o.jsx("option", {
                                                    value: "",
                                                    children: "未分類",
                                                  }),
                                                  a.map((y) =>
                                                    o.jsx(
                                                      "option",
                                                      {
                                                        value: y.GUID,
                                                        children: y.name,
                                                      },
                                                      y.GUID
                                                    )
                                                  ),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        v.GUID
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      },
                      f.guid
                    );
                  }),
                }),
            B &&
              o.jsx(vi, {
                onClose: () => m(!1),
                onSuccess: () => {
                  m(!1), T(), n && F(n);
                },
              }),
            p &&
              b &&
              o.jsx(vi, {
                classify: b,
                onClose: () => {
                  g(!1), M(null);
                },
                onSuccess: () => {
                  g(!1), M(null), T(), n && F(n);
                },
              }),
            I &&
              o.jsx(Wp, {
                drugType: U,
                classifications: a,
                onClose: () => {
                  z(!1), Y("");
                },
                onConfirm: (f) => {
                  c(U, f), z(!1), Y("");
                },
              }),
          ],
        });
  },
  vi = ({ classify: e, onClose: t, onSuccess: n }) => {
    const [r, l] = C.useState((e == null ? void 0 : e.name) || ""),
      [s, a] = C.useState((e == null ? void 0 : e.safe_day.toString()) || ""),
      [u, i] = C.useState(
        (e == null ? void 0 : e.standard_day.toString()) || ""
      ),
      [d, S] = C.useState(!1),
      w = async (h) => {
        h.preventDefault(), S(!0);
        try {
          let _;
          e
            ? (_ = await Vp({
                Data: { GUID: e.GUID, name: r, safe_day: s, standard_day: u },
              }))
            : (_ = await Ap({
                Data: { name: r, safe_day: s, standard_day: u },
              })),
            _.Code === 200 ? n() : alert(_.Result || "操作失敗");
        } catch (_) {
          console.error("Failed to save classification:", _),
            alert("儲存分類時發生錯誤");
        } finally {
          S(!1);
        }
      };
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
        children: [
          o.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-slate-200",
            children: [
              o.jsx("h3", {
                className: "text-lg font-semibold text-slate-800",
                children: e ? "編輯分類" : "新增分類",
              }),
              o.jsx("button", {
                onClick: t,
                className:
                  "text-slate-400 hover:text-slate-600 transition-colors",
                children: o.jsx(en, { size: 20 }),
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: w,
            className: "p-6 space-y-4",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "分類名稱",
                  }),
                  o.jsx("input", {
                    type: "text",
                    value: r,
                    onChange: (h) => l(h.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                  }),
                ],
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "安全量天數",
                  }),
                  o.jsx("input", {
                    type: "number",
                    value: s,
                    onChange: (h) => a(h.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    min: "0",
                  }),
                ],
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "基準量天數",
                  }),
                  o.jsx("input", {
                    type: "number",
                    value: u,
                    onChange: (h) => i(h.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    min: "0",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [
                  o.jsx("button", {
                    type: "button",
                    onClick: t,
                    className:
                      "flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    type: "submit",
                    disabled: d,
                    className:
                      "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                    children: d ? "處理中..." : "儲存",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Wp = ({ drugType: e, classifications: t, onClose: n, onConfirm: r }) => {
    const [l, s] = C.useState(""),
      a = (u) => {
        u.preventDefault(), l && r(l);
      };
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
        children: [
          o.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-slate-200",
            children: [
              o.jsxs("h3", {
                className: "text-lg font-semibold text-slate-800",
                children: ["批次設定「", e, "」類別分類"],
              }),
              o.jsx("button", {
                onClick: n,
                className:
                  "text-slate-400 hover:text-slate-600 transition-colors",
                children: o.jsx(en, { size: 20 }),
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: a,
            className: "p-6 space-y-4",
            children: [
              o.jsx("div", {
                className: "bg-amber-50 border border-amber-200 rounded-lg p-4",
                children: o.jsxs("p", {
                  className: "text-sm text-amber-800",
                  children: [
                    "此操作將會把所有「",
                    e,
                    "」類別的藥品統一設定為選擇的分類",
                  ],
                }),
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-2",
                    children: "選擇分類",
                  }),
                  o.jsxs("select", {
                    value: l,
                    onChange: (u) => s(u.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    children: [
                      o.jsx("option", { value: "", children: "請選擇分類" }),
                      t.map((u) =>
                        o.jsxs(
                          "option",
                          {
                            value: u.GUID,
                            children: [
                              u.name,
                              " (安全量: ",
                              u.safe_day,
                              "天 / 基準量: ",
                              u.standard_day,
                              "天)",
                            ],
                          },
                          u.GUID
                        )
                      ),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [
                  o.jsx("button", {
                    type: "button",
                    onClick: n,
                    className:
                      "flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    type: "submit",
                    className:
                      "flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                    children: "確認批次設定",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ql = async () =>
    await De("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  Gp = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = aa(),
      [a, u] = C.useState([]),
      [i, d] = C.useState(!1),
      [S, w] = C.useState(new Map()),
      [h, _] = C.useState([]),
      [k, P] = C.useState(null),
      [B, m] = C.useState(new Map()),
      [p, g] = C.useState([]),
      [b, M] = C.useState(!1),
      [I, z] = C.useState("");
    C.useEffect(() => {
      e && U();
    }, [e]),
      C.useEffect(() => {
        e && n.length > 0 && k && T();
      }, [e, n, k]);
    const U = async () => {
        try {
          const f = (await Ql()).Data.filter((x) => x.type === "藥庫");
          _(f), f.length > 0 && P(f[0]);
        } catch (c) {
          console.error("Failed to fetch warehouses:", c);
        }
      },
      Y = async () => {
        var c;
        if (!k) return console.log("⚠️ No warehouse selected"), new Map();
        try {
          console.log("=== Fetching Source Stock ==="),
            console.log("Selected Warehouse:", k);
          const f = await jr({ ServerName: k.name, ServerType: k.type });
          console.log("Stock API Response:", f),
            console.log(
              "Stock Data Length:",
              (c = f.Data) == null ? void 0 : c.length
            ),
            g(f.Data || []);
          const x = new Map();
          return (
            f.Data.forEach((v) => {
              let E = 0;
              Array.isArray(v.qty)
                ? ((E = v.qty.reduce((y, N) => y + parseFloat(N || "0"), 0)),
                  console.log(
                    `📦 code: ${v.code} | qty array: ${JSON.stringify(
                      v.qty
                    )} = ${E}`
                  ))
                : ((E =
                    typeof v.qty == "number"
                      ? v.qty
                      : parseFloat(v.qty || "0")),
                  console.log(`📦 code: ${v.code} | qty: ${v.qty} = ${E}`)),
                x.set(v.code, E);
            }),
            console.log("Stock Map Size:", x.size),
            console.log("Stock Map Keys (codes):", Array.from(x.keys())),
            m(x),
            x
          );
        } catch (f) {
          return (
            console.error("❌ Failed to fetch source stock:", f), new Map()
          );
        }
      },
      T = async () => {
        d(!0);
        try {
          const c = n.map(async (y) => {
              const N = Math.max(0, y.standardQuantity - y.currentStock);
              if (!y.medGuid)
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: N,
                  adjustedQuantity: N,
                  convertedUnit: `${N} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: y,
                  sourceStock: null,
                };
              try {
                const R = await r(y.medGuid);
                if (!R || R.length === 0)
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                  };
                const Q = [...R].sort(
                    (he, je) =>
                      parseInt(he.sort_order) - parseInt(je.sort_order)
                  ),
                  G = Q[Q.length - 1];
                if (!G || !G.conversion_rate) {
                  const he = (G == null ? void 0 : G.unit_name) || "";
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} ${he}`,
                    conversionRate: 1,
                    displayUnitName: he,
                    originalItem: y,
                    sourceStock: null,
                  };
                }
                const W = parseInt(G.sort_order) - 1;
                let q;
                if (W < 1) q = G.unit_name;
                else {
                  const he = R.find((je) => parseInt(je.sort_order) === W);
                  q = (he == null ? void 0 : he.unit_name) || G.unit_name;
                }
                const ae = parseFloat(G.conversion_rate),
                  me = parseFloat(G.quantity) || 0;
                let de = Math.ceil(N / ae) * ae;
                de < me && (de = me);
                const rt = de / ae;
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: N,
                  adjustedQuantity: de,
                  convertedUnit: `${rt} ${q}`,
                  conversionRate: ae,
                  displayUnitName: q,
                  originalItem: y,
                  sourceStock: null,
                };
              } catch (R) {
                return (
                  console.error(`Failed to fetch units for ${y.code}:`, R),
                  {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} (無法取得單位)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                  }
                );
              }
            }),
            f = await Promise.all(c);
          console.log("=== Calculate Previews Results ==="),
            console.log("Results count:", f.length),
            console.log(
              "Preview codes:",
              f.map((y) => y.code)
            );
          const x = await Y();
          console.log("Fresh Stock Data Size:", x.size);
          const v = f.map((y) => {
            const N = y.code,
              R = x.get(N) ?? null;
            return (
              console.log(`🔍 Matching stock for code: ${N} | stock: ${R}`),
              { ...y, sourceStock: R }
            );
          });
          console.log(
            "Results with stock:",
            v.map((y) => ({ code: y.code, sourceStock: y.sourceStock }))
          ),
            u(v);
          const E = new Map();
          v.forEach((y) => {
            const N = y.adjustedQuantity / y.conversionRate;
            E.set(y.code, { raw: y.rawQuantity, converted: N });
          }),
            w(E);
        } catch (c) {
          console.error("Failed to calculate previews:", c);
        } finally {
          d(!1);
        }
      },
      A = async (c, f) => {
        const x = parseFloat(f) || 0,
          v = a.find((E) => E.code === c);
        if (!(!v || !v.originalItem.medGuid))
          try {
            const E = await r(v.originalItem.medGuid);
            if (!E || E.length === 0) {
              const W =
                (Math.ceil(x / v.conversionRate) * v.conversionRate) /
                v.conversionRate;
              w((q) => {
                const ae = new Map(q);
                return ae.set(c, { raw: x, converted: W }), ae;
              });
              return;
            }
            const y = [...E].sort(
                (Z, W) => parseInt(Z.sort_order) - parseInt(W.sort_order)
              ),
              N = y[y.length - 1],
              R = parseFloat(N.quantity) || 0;
            let Q = Math.ceil(x / v.conversionRate) * v.conversionRate;
            Q < R && (Q = R);
            const G = Q / v.conversionRate;
            w((Z) => {
              const W = new Map(Z);
              return W.set(c, { raw: x, converted: G }), W;
            });
          } catch (E) {
            console.error("Failed to fetch units for quantity adjustment:", E);
            const N =
              (Math.ceil(x / v.conversionRate) * v.conversionRate) /
              v.conversionRate;
            w((R) => {
              const Q = new Map(R);
              return Q.set(c, { raw: x, converted: N }), Q;
            });
          }
      },
      F = (c, f) => {
        const x = parseFloat(f) || 0,
          v = a.find((y) => y.code === c);
        if (!v) return;
        const E = x * v.conversionRate;
        w((y) => {
          const N = new Map(y);
          return N.set(c, { raw: E, converted: x }), N;
        });
      },
      D = (c) => {
        const f = S.get(c.code);
        if (f) {
          const x = f.converted * c.conversionRate;
          return {
            rawQuantity: f.raw,
            adjustedQuantity: x,
            convertedCount: f.converted,
          };
        }
        return {
          rawQuantity: c.rawQuantity,
          adjustedQuantity: c.adjustedQuantity,
          convertedCount: c.adjustedQuantity / c.conversionRate,
        };
      },
      H = (c) => {
        u((f) => f.filter((x) => x.code !== c)),
          w((f) => {
            const x = new Map(f);
            return x.delete(c), x;
          });
      },
      j = Pi.useMemo(() => {
        if (!I.trim()) return [];
        const c = new Set(a.map((E) => E.code)),
          f = I.toLowerCase(),
          x = p.filter((E) => {
            var G, Z, W, q;
            if (c.has(E.code)) return !1;
            const y =
                (G = E.code) == null ? void 0 : G.toLowerCase().includes(f),
              N = (Z = E.name) == null ? void 0 : Z.toLowerCase().includes(f),
              R =
                (W = E.cht_name) == null ? void 0 : W.toLowerCase().includes(f),
              Q =
                (q = E.material_no) == null
                  ? void 0
                  : q.toLowerCase().includes(f);
            return y || N || R || Q;
          }),
          v = new Map();
        return (
          x.forEach((E) => {
            v.has(E.code) || v.set(E.code, E);
          }),
          Array.from(v.values())
        );
      }, [I, p, a]),
      O = async (c) => {
        if (a.some((x) => x.code === c.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const f = {
          code: c.code,
          name: c.name,
          material_no: c.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: c.GUID,
        };
        try {
          const x = await r(c.med_cloud.GUID);
          let v;
          if (!x || x.length === 0)
            v = {
              code: c.code,
              itemCode: c.material_no,
              name: c.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: f,
              sourceStock: B.get(c.code) ?? null,
            };
          else {
            const E = [...x].sort(
                (N, R) => parseInt(N.sort_order) - parseInt(R.sort_order)
              ),
              y = E[E.length - 1];
            if (!y || !y.conversion_rate) {
              const N = (y == null ? void 0 : y.unit_name) || "";
              v = {
                code: c.code,
                itemCode: c.material_no,
                name: c.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${N}`,
                conversionRate: 1,
                displayUnitName: N,
                originalItem: f,
                sourceStock: B.get(c.code) ?? null,
              };
            } else {
              const R = parseInt(y.sort_order) - 1;
              let Q;
              if (R < 1) Q = y.unit_name;
              else {
                const Z = x.find((W) => parseInt(W.sort_order) === R);
                Q = (Z == null ? void 0 : Z.unit_name) || y.unit_name;
              }
              const G = parseFloat(y.conversion_rate);
              v = {
                code: c.code,
                itemCode: c.material_no,
                name: c.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${Q}`,
                conversionRate: G,
                displayUnitName: Q,
                originalItem: f,
                sourceStock: B.get(c.code) ?? null,
              };
            }
          }
          u((E) => [...E, v]),
            w((E) => {
              const y = new Map(E);
              return y.set(c.code, { raw: 0, converted: 0 }), y;
            }),
            M(!1),
            z(""),
            s("藥品已成功新增", "success");
        } catch (x) {
          console.error("Failed to add drug:", x), s("新增藥品失敗", "error");
        }
      },
      V = async () => {
        if (!k) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const c = Tp();
        if (!c) {
          s("無法取得登入者資訊", "error");
          return;
        }
        const f = {
          Data: a.map((x) => {
            const v = S.get(x.code),
              E = v ? v.raw : x.adjustedQuantity;
            return {
              sourceStoreType: k.name,
              destinationStoreType: l,
              code: x.code,
              name: x.name,
              sourceStoreInventory: String(x.sourceStock ?? 0),
              issuedQuantity: String(E),
              reportName: c,
              state: "等待過帳",
            };
          }),
        };
        try {
          d(!0),
            await De("/api/drugStotreDistribution/add", {
              method: "POST",
              body: f,
            }),
            s("撥補單建立成功", "success"),
            t();
        } catch (x) {
          console.error("Failed to create replenishment:", x),
            s("撥補單建立失敗", "error");
        } finally {
          d(!1);
        }
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-7xl w-full h-[90vh] flex flex-col overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("div", {
                            className:
                              "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                            children: o.jsx(Fl, {
                              size: 20,
                              className: "text-blue-700",
                            }),
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "建立撥補單預覽",
                              }),
                              o.jsxs("p", {
                                className: "text-sm text-slate-600",
                                children: ["共 ", n.length, " 項需撥補藥品"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className:
                          "text-slate-400 hover:text-slate-600 transition-colors",
                        children: o.jsx(en, { size: 24 }),
                      }),
                    ],
                  }),
                  h.length > 0 &&
                    o.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "來源庫別：",
                            }),
                            o.jsx("select", {
                              value: (k == null ? void 0 : k.name) || "",
                              onChange: (c) => {
                                const f = h.find(
                                  (x) => x.name === c.target.value
                                );
                                P(f || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: h.map((c) =>
                                o.jsx(
                                  "option",
                                  { value: c.name, children: c.name },
                                  c.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => M(!b),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Ol, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              b &&
                o.jsxs("div", {
                  className: "px-6 py-4 bg-slate-50 border-b border-slate-200",
                  children: [
                    o.jsxs("div", {
                      className: "flex gap-3 items-start",
                      children: [
                        o.jsx("div", {
                          className: "flex-1",
                          children: o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號或藥名...",
                            value: I,
                            onChange: (c) => z(c.target.value),
                            className:
                              "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          }),
                        }),
                        o.jsx("button", {
                          onClick: () => {
                            M(!1), z("");
                          },
                          className:
                            "px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors",
                          children: "取消",
                        }),
                      ],
                    }),
                    j.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: j.map((c) =>
                          o.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                          children: c.code,
                                        }),
                                        c.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: c.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: c.name,
                                        }),
                                      ],
                                    }),
                                    c.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: c.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => O(c),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            c.GUID
                          )
                        ),
                      }),
                    I &&
                      j.length === 0 &&
                      o.jsx("div", {
                        className: "mt-3 text-center text-slate-500 py-4",
                        children: "未找到符合的藥品",
                      }),
                  ],
                }),
              o.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: i
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ye, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(Sr, {
                          size: 48,
                          className: "mx-auto text-slate-300 mb-4",
                        }),
                        o.jsx("p", {
                          className: "text-slate-500",
                          children: "無需撥補的藥品",
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "overflow-x-auto",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-100 sticky top-0",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥碼",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "料號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥名",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "來源庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "原始數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "調整後數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "撥補數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "操作",
                                }),
                              ],
                            }),
                          }),
                          o.jsx("tbody", {
                            className: "bg-white divide-y divide-slate-200",
                            children: a.map((c, f) => {
                              const x = D(c);
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: c.code,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: c.itemCode,
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: c.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          c.sourceStock !== null &&
                                          c.sourceStock < x.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          c.sourceStock !== null
                                            ? c.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: x.rawQuantity,
                                        onChange: (v) =>
                                          A(c.code, v.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className:
                                          x.adjustedQuantity !== x.rawQuantity
                                            ? "font-semibold text-orange-600"
                                            : "text-slate-600",
                                        children: x.adjustedQuantity,
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsxs("div", {
                                        className:
                                          "flex items-center justify-end gap-2",
                                        children: [
                                          o.jsx("input", {
                                            type: "number",
                                            min: "0",
                                            step: "1",
                                            value: x.convertedCount,
                                            onChange: (v) =>
                                              F(c.code, v.target.value),
                                            className:
                                              "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold text-blue-600",
                                          }),
                                          c.displayUnitName &&
                                            o.jsx("span", {
                                              className:
                                                "text-slate-600 font-medium",
                                              children: c.displayUnitName,
                                            }),
                                        ],
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => H(c.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(na, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${c.code}-${f}`
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              }),
              o.jsxs("div", {
                className:
                  "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
                children: [
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    onClick: V,
                    disabled: i || a.length === 0 || !k,
                    className:
                      "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                    children: "確認建立",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  qp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState(new Set(["all"])),
      [i, d] = C.useState(!0),
      [S, w] = C.useState(!1),
      [h, _] = C.useState(null),
      [k, P] = C.useState(null),
      [B, m] = C.useState(!1),
      [p, g] = C.useState(!1);
    C.useEffect(() => {
      b();
    }, []);
    const b = async () => {
        try {
          d(!0);
          const j = await Ql();
          if (j.Code === 200 && j.Data) {
            const O = j.Data.filter((V) => V.type !== "藥庫");
            t(O), O.length > 0 && (r(O[0]), M(O[0]));
          }
        } catch (j) {
          console.error("Failed to fetch server settings:", j);
        } finally {
          d(!1);
        }
      },
      M = async (j) => {
        try {
          w(!0);
          const O = new Date(),
            V = new Date();
          V.setDate(V.getDate() - 30);
          const c = (v) => {
              const E = v.getFullYear(),
                y = String(v.getMonth() + 1).padStart(2, "0"),
                N = String(v.getDate()).padStart(2, "0"),
                R = String(v.getHours()).padStart(2, "0"),
                Q = String(v.getMinutes()).padStart(2, "0"),
                G = String(v.getSeconds()).padStart(2, "0");
              return `${E}-${y}-${N} ${R}:${Q}:${G}`;
            },
            [f, x] = await Promise.all([
              jr({ ServerName: j.name, ServerType: j.type }),
              oa({
                ValueAry: [c(V), c(O)],
                ServerName: j.name,
                ServerType: j.type,
              }),
            ]);
          if (f.Code === 200 && x.Code === 200) {
            const v = new Map(
                x.Data.map((y) => [
                  y.CODE,
                  typeof y.ANG_QTY == "string"
                    ? parseFloat(y.ANG_QTY) || 0
                    : y.ANG_QTY || 0,
                ])
              ),
              E = f.Data.map((y) => {
                var Z, W, q, ae, me, de;
                const N = v.get(y.code) || 0,
                  R =
                    typeof ((Z = y.Classify) == null ? void 0 : Z.safe_day) ==
                    "string"
                      ? parseFloat(y.Classify.safe_day) || 0
                      : ((W = y.Classify) == null ? void 0 : W.safe_day) || 0,
                  Q =
                    typeof ((q = y.Classify) == null
                      ? void 0
                      : q.standard_day) == "string"
                      ? parseFloat(y.Classify.standard_day) || 0
                      : ((ae = y.Classify) == null
                          ? void 0
                          : ae.standard_day) || 0,
                  G = Array.isArray(y.qty)
                    ? y.qty.reduce((rt, he) => {
                        const je =
                          typeof he == "string" ? parseFloat(he) || 0 : he || 0;
                        return rt + je;
                      }, 0)
                    : 0;
                return {
                  code: y.code,
                  material_no: y.material_no,
                  name: y.cht_name || y.name,
                  type: ((me = y.med_cloud) == null ? void 0 : me.TYPE) || "",
                  currentStock: G,
                  avgDailyConsumption: N,
                  safetyQuantity: N * R,
                  standardQuantity: N * Q,
                  medGuid: (de = y.med_cloud) == null ? void 0 : de.GUID,
                };
              });
            s(E);
          }
        } catch (O) {
          console.error("Failed to fetch replenishment data:", O);
        } finally {
          w(!1);
        }
      },
      I = (j) => {
        r(j), M(j);
      },
      z = (j, O) => {
        j.preventDefault(), _({ x: j.clientX, y: j.clientY }), P(O);
      },
      U = () => {
        m(!0);
      },
      Y = () => {
        _(null);
      },
      T = C.useMemo(() => {
        const j = new Set();
        return (
          l.forEach((O) => {
            O.type && j.add(O.type);
          }),
          Array.from(j).sort()
        );
      }, [l]),
      A = (j) => {
        u((O) => {
          const V = new Set(O);
          return j === "all"
            ? new Set(["all"])
            : (V.delete("all"),
              V.has(j) ? V.delete(j) : V.add(j),
              V.size === 0 ? new Set(["all"]) : V);
        });
      },
      F = C.useMemo(() => {
        const O = (a.has("all") ? l : l.filter((c) => a.has(c.type))).reduce(
          (c, f) => (
            c[f.code]
              ? (c[f.code].currentStock += f.currentStock)
              : (c[f.code] = { ...f }),
            c
          ),
          {}
        );
        return Object.values(O).sort((c, f) => {
          const x = c.currentStock < c.safetyQuantity,
            v = f.currentStock < f.safetyQuantity;
          return x && !v ? -1 : !x && v ? 1 : c.code.localeCompare(f.code);
        });
      }, [l, a]),
      D = C.useMemo(
        () => F.filter((j) => j.currentStock < j.safetyQuantity),
        [F]
      ),
      H = () => {
        if (D.length === 0) {
          alert("目前沒有需要撥補的藥品");
          return;
        }
        g(!0);
      };
    return i
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ye, {}),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("div", {
                  className: "flex items-center justify-between gap-4",
                  children: o.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                    children: o.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: e.map((j) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => I(j),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === j.name &&
                              (n == null ? void 0 : n.type) === j.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: j.name,
                          },
                          `${j.name}-${j.type}`
                        )
                      ),
                    }),
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          o.jsx("label", {
                            className: "text-sm font-medium text-slate-700",
                            children: "藥品類別:",
                          }),
                          o.jsxs("button", {
                            onClick: H,
                            disabled: D.length === 0,
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                            children: [
                              o.jsx(Fl, { size: 18 }),
                              "建立撥補單 ",
                              D.length > 0 && `(${D.length})`,
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => A("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          T.map((j) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => A(j),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(j)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: j,
                              },
                              j
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              o.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "bg-slate-50 border-b border-slate-200 p-4",
                    children: [
                      o.jsx("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: n.name,
                      }),
                      o.jsx("p", {
                        className: "text-sm text-slate-600 mt-1",
                        children: "建議撥補資訊（最近30天平均消耗量）",
                      }),
                    ],
                  }),
                  S
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ye, {}),
                      })
                    : o.jsx("div", {
                        className: "overflow-x-auto",
                        children: o.jsxs("table", {
                          className: "w-full",
                          children: [
                            o.jsx("thead", {
                              className:
                                "bg-slate-50 border-b border-slate-200",
                              children: o.jsxs("tr", {
                                children: [
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "藥碼",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "料號",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "藥名",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "種類",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "庫存",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "平均日消耗量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "安全量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "基準量",
                                  }),
                                ],
                              }),
                            }),
                            o.jsx("tbody", {
                              className: "bg-white divide-y divide-slate-200",
                              children:
                                F.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 8,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : F.map((j, O) => {
                                      const V =
                                        j.currentStock < j.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (c) => z(c, j),
                                          className: `transition-colors cursor-context-menu ${
                                            V
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: j.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                V
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                j.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${j.code}-${O}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            h &&
              k &&
              o.jsx(ra, { x: h.x, y: h.y, onClose: Y, onViewUnitDetails: U }),
            B &&
              k &&
              k.medGuid &&
              o.jsx(la, {
                isOpen: B,
                onClose: () => {
                  m(!1), P(null);
                },
                medGuid: k.medGuid,
                medName: k.name,
                onFetchUnitDetails: hr,
                onUpdateUnits: sa,
              }),
            o.jsx(Gp, {
              isOpen: p,
              onClose: () => g(!1),
              items: D,
              onFetchUnitDetails: hr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  Yp = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = aa(),
      [a, u] = C.useState([]),
      [i, d] = C.useState(!1),
      [S, w] = C.useState(new Map()),
      [h, _] = C.useState([]),
      [k, P] = C.useState(null),
      [B, m] = C.useState(new Map()),
      [p, g] = C.useState([]),
      [b, M] = C.useState(!1),
      [I, z] = C.useState("");
    C.useEffect(() => {
      e && U();
    }, [e]),
      C.useEffect(() => {
        e && n.length > 0 && k && T();
      }, [e, n, k]);
    const U = async () => {
        try {
          const f = (await Ql()).Data.filter((x) => x.type === "藥庫");
          _(f), f.length > 0 && P(f[0]);
        } catch (c) {
          console.error("Failed to fetch warehouses:", c);
        }
      },
      Y = async () => {
        if (!k) return new Map();
        try {
          const c = await jr({ ServerName: k.name, ServerType: k.type });
          g(c.Data || []);
          const f = new Map();
          return (
            c.Data.forEach((x) => {
              let v = 0;
              Array.isArray(x.qty)
                ? (v = x.qty.reduce((E, y) => E + parseFloat(y || "0"), 0))
                : (v =
                    typeof x.qty == "number"
                      ? x.qty
                      : parseFloat(x.qty || "0")),
                f.set(x.code, v);
            }),
            m(f),
            f
          );
        } catch (c) {
          return console.error("Failed to fetch source stock:", c), new Map();
        }
      },
      T = async () => {
        d(!0);
        try {
          const c = n.map(async (y) => {
              var R;
              const N = Math.max(0, y.standardQuantity - y.currentStock);
              if (!y.medGuid)
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: N,
                  adjustedQuantity: N,
                  convertedUnit: `${N} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: y,
                  sourceStock: null,
                  minProcurementQuantity: 1,
                  smallestUnitConversionRate: 1,
                  smallestUnitName: "",
                };
              try {
                const Q = await r(y.medGuid);
                if (!Q || Q.length === 0)
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: "",
                  };
                const G = Q.find((je) => je.unit_type === "採購");
                if (!G) {
                  const je =
                    ((R = Q[Q.length - 1]) == null ? void 0 : R.unit_name) ||
                    "";
                  return {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} ${je}`,
                    conversionRate: 1,
                    displayUnitName: je,
                    originalItem: y,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: je,
                  };
                }
                const Z = Q.reduce((je, ia) => {
                    const $c = parseInt(ia.sort_order),
                      Fc = parseInt(je.sort_order);
                    return $c > Fc ? ia : je;
                  }, Q[0]),
                  W = parseFloat(Z.conversion_rate) || 1,
                  q = Z.unit_name,
                  ae = Math.ceil(N / W) * W,
                  me = G.unit_name,
                  de = parseFloat(G.quantity) || 1,
                  rt = Math.ceil(ae / W),
                  he = Math.max(rt, de);
                return {
                  code: y.code,
                  itemCode: y.material_no,
                  name: y.name,
                  rawQuantity: N,
                  adjustedQuantity: ae,
                  convertedUnit: `${he} ${me}`,
                  conversionRate: W,
                  displayUnitName: me,
                  originalItem: y,
                  sourceStock: null,
                  minProcurementQuantity: de,
                  smallestUnitConversionRate: W,
                  smallestUnitName: q,
                };
              } catch (Q) {
                return (
                  console.error(`Failed to fetch units for ${y.code}:`, Q),
                  {
                    code: y.code,
                    itemCode: y.material_no,
                    name: y.name,
                    rawQuantity: N,
                    adjustedQuantity: N,
                    convertedUnit: `${N} (無法取得單位)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: y,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: "",
                  }
                );
              }
            }),
            f = await Promise.all(c),
            x = await Y(),
            v = f.map((y) => ({ ...y, sourceStock: x.get(y.code) ?? null }));
          u(v);
          const E = new Map();
          v.forEach((y) => {
            const N = y.adjustedQuantity / y.conversionRate;
            E.set(y.code, { raw: y.rawQuantity, converted: N });
          }),
            w(E);
        } catch (c) {
          console.error("Failed to calculate previews:", c);
        } finally {
          d(!1);
        }
      },
      A = (c, f) => {
        const x = parseFloat(f) || 0,
          v = a.find((R) => R.code === c);
        if (!v) return;
        const E =
            Math.ceil(x / v.smallestUnitConversionRate) *
            v.smallestUnitConversionRate,
          y = Math.ceil(E / v.conversionRate),
          N = Math.max(y, v.minProcurementQuantity);
        w((R) => {
          const Q = new Map(R);
          return Q.set(c, { raw: x, converted: N }), Q;
        });
      },
      F = (c, f) => {
        const x = parseFloat(f) || 0,
          v = a.find((N) => N.code === c);
        if (!v) return;
        const E = Math.max(x, v.minProcurementQuantity),
          y = E * v.conversionRate;
        w((N) => {
          const R = new Map(N);
          return R.set(c, { raw: y, converted: E }), R;
        });
      },
      D = (c) => {
        const f = S.get(c.code);
        if (f) {
          const x =
            Math.ceil(f.raw / c.smallestUnitConversionRate) *
            c.smallestUnitConversionRate;
          return {
            rawQuantity: f.raw,
            adjustedQuantity: x,
            convertedCount: f.converted,
          };
        }
        return {
          rawQuantity: c.rawQuantity,
          adjustedQuantity: c.adjustedQuantity,
          convertedCount: c.adjustedQuantity / c.conversionRate,
        };
      },
      H = (c) => {
        u((f) => f.filter((x) => x.code !== c)),
          w((f) => {
            const x = new Map(f);
            return x.delete(c), x;
          });
      },
      j = Pi.useMemo(() => {
        if (!I.trim()) return [];
        const c = new Set(a.map((E) => E.code)),
          f = I.toLowerCase(),
          x = p.filter((E) => {
            var G, Z, W, q;
            if (c.has(E.code)) return !1;
            const y =
                (G = E.code) == null ? void 0 : G.toLowerCase().includes(f),
              N = (Z = E.name) == null ? void 0 : Z.toLowerCase().includes(f),
              R =
                (W = E.cht_name) == null ? void 0 : W.toLowerCase().includes(f),
              Q =
                (q = E.material_no) == null
                  ? void 0
                  : q.toLowerCase().includes(f);
            return y || N || R || Q;
          }),
          v = new Map();
        return (
          x.forEach((E) => {
            v.has(E.code) || v.set(E.code, E);
          }),
          Array.from(v.values())
        );
      }, [I, p, a]),
      O = async (c) => {
        var x;
        if (a.some((v) => v.code === c.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const f = {
          code: c.code,
          name: c.name,
          material_no: c.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: c.GUID,
        };
        try {
          const v = await r(c.med_cloud.GUID);
          let E;
          if (!v || v.length === 0)
            E = {
              code: c.code,
              itemCode: c.material_no,
              name: c.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: f,
              sourceStock: B.get(c.code) ?? null,
              minProcurementQuantity: 1,
              smallestUnitConversionRate: 1,
              smallestUnitName: "",
            };
          else {
            const y = v.find((N) => N.unit_type === "採購");
            if (y) {
              const N = v.reduce((W, q) => {
                  const ae = parseInt(q.sort_order),
                    me = parseInt(W.sort_order);
                  return ae > me ? q : W;
                }, v[0]),
                R = parseFloat(N.conversion_rate) || 1,
                Q = N.unit_name,
                G = y.unit_name,
                Z = parseFloat(y.quantity) || 1;
              E = {
                code: c.code,
                itemCode: c.material_no,
                name: c.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${G}`,
                conversionRate: R,
                displayUnitName: G,
                originalItem: f,
                sourceStock: B.get(c.code) ?? null,
                minProcurementQuantity: Z,
                smallestUnitConversionRate: R,
                smallestUnitName: Q,
              };
            } else {
              const N =
                ((x = v[v.length - 1]) == null ? void 0 : x.unit_name) || "";
              E = {
                code: c.code,
                itemCode: c.material_no,
                name: c.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${N}`,
                conversionRate: 1,
                displayUnitName: N,
                originalItem: f,
                sourceStock: B.get(c.code) ?? null,
                minProcurementQuantity: 1,
                smallestUnitConversionRate: 1,
                smallestUnitName: N,
              };
            }
          }
          u((y) => [...y, E]),
            w((y) => {
              const N = new Map(y);
              return (
                N.set(c.code, { raw: 0, converted: E.minProcurementQuantity }),
                N
              );
            }),
            M(!1),
            z(""),
            s("藥品已成功新增", "success");
        } catch (v) {
          console.error("Failed to add drug:", v), s("新增藥品失敗", "error");
        }
      },
      V = async () => {
        if (!k) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const c = {
          Data: a.map((f) => {
            const x = D(f);
            return {
              CODE: f.code,
              NAME: f.name,
              SKDIACODE: f.itemCode,
              START_QTY: String(x.convertedCount),
            };
          }),
        };
        try {
          d(!0);
          const f = await De("/api/inspection/download_purchaseExcel", {
              method: "POST",
              body: c,
              responseType: "blob",
            }),
            x = new Date(),
            v = `${x.getFullYear()}${String(x.getMonth() + 1).padStart(
              2,
              "0"
            )}${String(x.getDate()).padStart(2, "0")}`,
            E = `${l}-${v}-建議採購.xlsx`,
            y = window.URL.createObjectURL(new Blob([f])),
            N = document.createElement("a");
          (N.href = y),
            N.setAttribute("download", E),
            document.body.appendChild(N),
            N.click(),
            N.remove(),
            window.URL.revokeObjectURL(y),
            s("採購單已下載", "success"),
            t();
        } catch (f) {
          console.error("Failed to download procurement excel:", f),
            s("採購單下載失敗", "error");
        } finally {
          d(!1);
        }
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-7xl w-full h-[90vh] flex flex-col overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("div", {
                            className:
                              "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                            children: o.jsx(Fl, {
                              size: 20,
                              className: "text-blue-700",
                            }),
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "建立採購單預覽",
                              }),
                              o.jsxs("p", {
                                className: "text-sm text-slate-600",
                                children: ["共 ", n.length, " 項需採購藥品"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className:
                          "text-slate-400 hover:text-slate-600 transition-colors",
                        children: o.jsx(en, { size: 24 }),
                      }),
                    ],
                  }),
                  h.length > 0 &&
                    o.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "來源庫別：",
                            }),
                            o.jsx("select", {
                              value: (k == null ? void 0 : k.name) || "",
                              onChange: (c) => {
                                const f = h.find(
                                  (x) => x.name === c.target.value
                                );
                                P(f || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: h.map((c) =>
                                o.jsx(
                                  "option",
                                  { value: c.name, children: c.name },
                                  c.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => M(!b),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Ol, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              b &&
                o.jsxs("div", {
                  className: "px-6 py-4 bg-slate-50 border-b border-slate-200",
                  children: [
                    o.jsxs("div", {
                      className: "flex gap-3 items-start",
                      children: [
                        o.jsx("div", {
                          className: "flex-1",
                          children: o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號或藥名...",
                            value: I,
                            onChange: (c) => z(c.target.value),
                            className:
                              "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          }),
                        }),
                        o.jsx("button", {
                          onClick: () => {
                            M(!1), z("");
                          },
                          className:
                            "px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors",
                          children: "取消",
                        }),
                      ],
                    }),
                    j.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: j.map((c) =>
                          o.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                          children: c.code,
                                        }),
                                        c.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: c.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: c.name,
                                        }),
                                      ],
                                    }),
                                    c.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: c.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => O(c),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            c.GUID
                          )
                        ),
                      }),
                    I &&
                      j.length === 0 &&
                      o.jsx("div", {
                        className: "mt-3 text-center text-slate-500 py-4",
                        children: "未找到符合的藥品",
                      }),
                  ],
                }),
              o.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: i
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ye, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(Sr, {
                          size: 48,
                          className: "mx-auto text-slate-300 mb-4",
                        }),
                        o.jsx("p", {
                          className: "text-slate-500",
                          children: "無需採購的藥品",
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "overflow-x-auto",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-100 sticky top-0",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥碼",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "料號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥名",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "來源庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "原始數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "調整後數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "採購數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "操作",
                                }),
                              ],
                            }),
                          }),
                          o.jsx("tbody", {
                            className: "bg-white divide-y divide-slate-200",
                            children: a.map((c, f) => {
                              const x = D(c),
                                v = x.convertedCount < c.minProcurementQuantity;
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: o.jsx("span", {
                                        className:
                                          "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                        children: c.code,
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: o.jsx("span", {
                                        className:
                                          "inline-block px-2 py-1 bg-slate-500 text-white text-xs rounded font-mono",
                                        children: c.itemCode,
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: c.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          c.sourceStock !== null &&
                                          c.sourceStock < x.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          c.sourceStock !== null
                                            ? c.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: x.rawQuantity,
                                        onChange: (E) =>
                                          A(c.code, E.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsxs("div", {
                                        className:
                                          "flex items-center justify-end gap-1",
                                        children: [
                                          o.jsx("span", {
                                            className:
                                              x.adjustedQuantity !==
                                              x.rawQuantity
                                                ? "font-semibold text-orange-600"
                                                : "text-slate-600",
                                            children: x.adjustedQuantity,
                                          }),
                                          c.smallestUnitName &&
                                            o.jsx("span", {
                                              className:
                                                "text-slate-500 text-xs",
                                              children: c.smallestUnitName,
                                            }),
                                        ],
                                      }),
                                    }),
                                    o.jsxs("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: [
                                        o.jsxs("div", {
                                          className:
                                            "flex items-center justify-end gap-2",
                                          children: [
                                            o.jsx("input", {
                                              type: "number",
                                              min: c.minProcurementQuantity,
                                              step: "1",
                                              value: x.convertedCount,
                                              onChange: (E) =>
                                                F(c.code, E.target.value),
                                              className: `w-24 px-2 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold ${
                                                v
                                                  ? "border-red-500 text-red-600"
                                                  : "border-slate-300 text-blue-600"
                                              }`,
                                              title: `最低採購數量：${c.minProcurementQuantity}`,
                                            }),
                                            c.displayUnitName &&
                                              o.jsx("span", {
                                                className:
                                                  "text-slate-600 font-medium",
                                                children: c.displayUnitName,
                                              }),
                                          ],
                                        }),
                                        v &&
                                          o.jsxs("div", {
                                            className:
                                              "text-xs text-red-500 mt-1 text-right",
                                            children: [
                                              "最低：",
                                              c.minProcurementQuantity,
                                            ],
                                          }),
                                      ],
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => H(c.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(na, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${c.code}-${f}`
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              }),
              o.jsxs("div", {
                className:
                  "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
                children: [
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    onClick: V,
                    disabled: i || a.length === 0 || !k,
                    className:
                      "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                    children: "確認建立",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Kp = () => {
    const [e, t] = C.useState([]),
      [n, r] = C.useState(null),
      [l, s] = C.useState([]),
      [a, u] = C.useState(new Set(["all"])),
      [i, d] = C.useState(!0),
      [S, w] = C.useState(!1),
      [h, _] = C.useState(null),
      [k, P] = C.useState(null),
      [B, m] = C.useState(!1),
      [p, g] = C.useState(!1);
    C.useEffect(() => {
      b();
    }, []);
    const b = async () => {
        try {
          d(!0);
          const j = await Ql();
          if (j.Code === 200 && j.Data) {
            const O = j.Data.filter((V) => V.type == "藥庫");
            t(O), O.length > 0 && (r(O[0]), M(O[0]));
          }
        } catch (j) {
          console.error("Failed to fetch server settings:", j);
        } finally {
          d(!1);
        }
      },
      M = async (j) => {
        try {
          w(!0);
          const O = new Date(),
            V = new Date();
          V.setDate(V.getDate() - 30);
          const c = (v) => {
              const E = v.getFullYear(),
                y = String(v.getMonth() + 1).padStart(2, "0"),
                N = String(v.getDate()).padStart(2, "0"),
                R = String(v.getHours()).padStart(2, "0"),
                Q = String(v.getMinutes()).padStart(2, "0"),
                G = String(v.getSeconds()).padStart(2, "0");
              return `${E}-${y}-${N} ${R}:${Q}:${G}`;
            },
            [f, x] = await Promise.all([
              jr({ ServerName: j.name, ServerType: j.type }),
              oa({
                ValueAry: [c(V), c(O)],
                ServerName: j.name,
                ServerType: j.type,
              }),
            ]);
          if (f.Code === 200 && x.Code === 200) {
            const v = new Map(
                x.Data.map((y) => [
                  y.CODE,
                  typeof y.ANG_QTY == "string"
                    ? parseFloat(y.ANG_QTY) || 0
                    : y.ANG_QTY || 0,
                ])
              ),
              E = f.Data.map((y) => {
                var Z, W, q, ae, me, de;
                const N = v.get(y.code) || 0,
                  R =
                    typeof ((Z = y.Classify) == null ? void 0 : Z.safe_day) ==
                    "string"
                      ? parseFloat(y.Classify.safe_day) || 0
                      : ((W = y.Classify) == null ? void 0 : W.safe_day) || 0,
                  Q =
                    typeof ((q = y.Classify) == null
                      ? void 0
                      : q.standard_day) == "string"
                      ? parseFloat(y.Classify.standard_day) || 0
                      : ((ae = y.Classify) == null
                          ? void 0
                          : ae.standard_day) || 0,
                  G = Array.isArray(y.qty)
                    ? y.qty.reduce((rt, he) => {
                        const je =
                          typeof he == "string" ? parseFloat(he) || 0 : he || 0;
                        return rt + je;
                      }, 0)
                    : 0;
                return {
                  code: y.code,
                  material_no: y.material_no,
                  name: y.cht_name || y.name,
                  type: ((me = y.med_cloud) == null ? void 0 : me.TYPE) || "",
                  currentStock: G,
                  avgDailyConsumption: N,
                  safetyQuantity: N * R,
                  standardQuantity: N * Q,
                  medGuid: (de = y.med_cloud) == null ? void 0 : de.GUID,
                };
              });
            s(E);
          }
        } catch (O) {
          console.error("Failed to fetch replenishment data:", O);
        } finally {
          w(!1);
        }
      },
      I = (j) => {
        r(j), M(j);
      },
      z = (j, O) => {
        j.preventDefault(), _({ x: j.clientX, y: j.clientY }), P(O);
      },
      U = () => {
        m(!0);
      },
      Y = () => {
        _(null);
      },
      T = C.useMemo(() => {
        const j = new Set();
        return (
          l.forEach((O) => {
            O.type && j.add(O.type);
          }),
          Array.from(j).sort()
        );
      }, [l]),
      A = (j) => {
        u((O) => {
          const V = new Set(O);
          return j === "all"
            ? new Set(["all"])
            : (V.delete("all"),
              V.has(j) ? V.delete(j) : V.add(j),
              V.size === 0 ? new Set(["all"]) : V);
        });
      },
      F = C.useMemo(() => {
        const O = (a.has("all") ? l : l.filter((c) => a.has(c.type))).reduce(
          (c, f) => (
            c[f.code]
              ? (c[f.code].currentStock += f.currentStock)
              : (c[f.code] = { ...f }),
            c
          ),
          {}
        );
        return Object.values(O).sort((c, f) => {
          const x = c.currentStock < c.safetyQuantity,
            v = f.currentStock < f.safetyQuantity;
          return x && !v ? -1 : !x && v ? 1 : c.code.localeCompare(f.code);
        });
      }, [l, a]),
      D = C.useMemo(
        () => F.filter((j) => j.currentStock < j.safetyQuantity),
        [F]
      ),
      H = () => {
        if (D.length === 0) {
          alert("目前沒有需要採購的藥品");
          return;
        }
        g(!0);
      };
    return i
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ye, {}),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("div", {
                  className: "flex items-center justify-between gap-4",
                  children: o.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                    children: o.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: e.map((j) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => I(j),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === j.name &&
                              (n == null ? void 0 : n.type) === j.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: j.name,
                          },
                          `${j.name}-${j.type}`
                        )
                      ),
                    }),
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          o.jsx("label", {
                            className: "text-sm font-medium text-slate-700",
                            children: "藥品類別:",
                          }),
                          o.jsxs("button", {
                            onClick: H,
                            disabled: D.length === 0,
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                            children: [
                              o.jsx(Fl, { size: 18 }),
                              "建立採購單 ",
                              D.length > 0 && `(${D.length})`,
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => A("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          T.map((j) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => A(j),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(j)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: j,
                              },
                              j
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              o.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "bg-slate-50 border-b border-slate-200 p-4",
                    children: [
                      o.jsx("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: n.name,
                      }),
                      o.jsx("p", {
                        className: "text-sm text-slate-600 mt-1",
                        children: "建議採購資訊（最近30天平均消耗量）",
                      }),
                    ],
                  }),
                  S
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ye, {}),
                      })
                    : o.jsx("div", {
                        className: "overflow-x-auto",
                        children: o.jsxs("table", {
                          className: "w-full",
                          children: [
                            o.jsx("thead", {
                              className:
                                "bg-slate-50 border-b border-slate-200",
                              children: o.jsxs("tr", {
                                children: [
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "藥碼",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "料號",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "藥名",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "種類",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "庫存",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "平均日消耗量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "安全量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider",
                                    children: "基準量",
                                  }),
                                ],
                              }),
                            }),
                            o.jsx("tbody", {
                              className: "bg-white divide-y divide-slate-200",
                              children:
                                F.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 8,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : F.map((j, O) => {
                                      const V =
                                        j.currentStock < j.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (c) => z(c, j),
                                          className: `transition-colors cursor-context-menu ${
                                            V
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: j.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: j.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                V
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                j.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                j.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${j.code}-${O}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            h &&
              k &&
              o.jsx(ra, { x: h.x, y: h.y, onClose: Y, onViewUnitDetails: U }),
            B &&
              k &&
              k.medGuid &&
              o.jsx(la, {
                isOpen: B,
                onClose: () => {
                  m(!1), P(null);
                },
                medGuid: k.medGuid,
                medName: k.name,
                onFetchUnitDetails: hr,
                onUpdateUnits: sa,
              }),
            o.jsx(Yp, {
              isOpen: p,
              onClose: () => g(!1),
              items: D,
              onFetchUnitDetails: hr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  Xp = ({ onLogout: e }) => {
    const [t, n] = C.useState("inventory"),
      r = sessionStorage.getItem("loggedName") || "",
      l = sessionStorage.getItem("loggedEmployer") || "",
      s = r && l ? `${r}-${l}` : "",
      a = () => {
        sessionStorage.removeItem("user_session"),
          sessionStorage.removeItem("loggedName"),
          sessionStorage.removeItem("loggedEmployer"),
          e && e();
      },
      u = () => {
        const i = Ep();
        i != null &&
          i.homepage &&
          (window.location.href = `${i.homepage}/phar_system/frontpage`);
      };
    return o.jsx("div", {
      className: "min-h-screen bg-white",
      children: o.jsxs("div", {
        className: "w-full p-4",
        children: [
          o.jsxs("div", {
            className: "mb-8 flex items-start justify-between",
            children: [
              o.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  o.jsx("button", {
                    onClick: u,
                    className:
                      "flex items-center justify-center w-12 h-12 hover:bg-slate-200 rounded-lg transition-colors",
                    children: o.jsx(wp, {
                      size: 24,
                      className: "text-slate-700",
                    }),
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("h1", {
                        className:
                          "text-2xl md:text-3xl font-semibold text-gray-800",
                        children: "即時庫存查詢系統",
                      }),
                      o.jsx("p", {
                        className: "text-slate-600",
                        children: s || "即時監控藥局與藥庫的庫存狀況",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("button", {
                onClick: a,
                className:
                  "flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors",
                children: [
                  o.jsx(Sp, { size: 18 }),
                  o.jsx("span", { children: "登出" }),
                ],
              }),
            ],
          }),
          o.jsx("div", {
            className: "mb-6",
            children: o.jsx("div", {
              className: "border-b border-slate-200",
              children: o.jsxs("nav", {
                className: "flex gap-8",
                children: [
                  o.jsx("button", {
                    onClick: () => n("inventory"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "inventory"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "即時庫存",
                  }),
                  o.jsx("button", {
                    onClick: () => n("classification"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "classification"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "分類編輯",
                  }),
                  o.jsx("button", {
                    onClick: () => n("replenishment"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "replenishment"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "建議撥補",
                  }),
                  o.jsx("button", {
                    onClick: () => n("procurement"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "procurement"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "建議採購",
                  }),
                ],
              }),
            }),
          }),
          o.jsxs("div", {
            className: "tab-content",
            children: [
              t === "inventory" && o.jsx(Op, {}),
              t === "classification" && o.jsx(Hp, {}),
              t === "replenishment" && o.jsx(qp, {}),
              t === "procurement" && o.jsx(Kp, {}),
            ],
          }),
        ],
      }),
    });
  };
function Zp() {
  const [e, t] = C.useState(!1),
    [n, r] = C.useState(!1),
    [l, s] = C.useState(!0);
  C.useEffect(() => {
    (async () => {
      try {
        await zc(), t(!0);
        const d = Pp();
        r(d),
          console.log("Authentication check:", {
            authenticated: d,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (d) {
        console.error("Failed to load configuration:", d);
      } finally {
        s(!1);
      }
    })();
  }, []);
  const a = () => {
      r(!0);
    },
    u = () => {
      r(!1);
    };
  return !e || l
    ? o.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: o.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : o.jsx(Fp, {
        children: o.jsx(Mp, {
          children: n ? o.jsx(Xp, { onLogout: u }) : o.jsx(Ip, { onLogin: a }),
        }),
      });
}
Mc(document.getElementById("root")).render(
  o.jsx(C.StrictMode, { children: o.jsx(Zp, {}) })
);
//# sourceMappingURL=index-_2nU4yDf.js.map
