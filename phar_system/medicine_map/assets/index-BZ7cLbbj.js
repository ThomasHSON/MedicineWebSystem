(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pc = { exports: {} },
  vo = {},
  mc = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ds = Symbol.for("react.element"),
  nf = Symbol.for("react.portal"),
  rf = Symbol.for("react.fragment"),
  sf = Symbol.for("react.strict_mode"),
  of = Symbol.for("react.profiler"),
  lf = Symbol.for("react.provider"),
  af = Symbol.for("react.context"),
  cf = Symbol.for("react.forward_ref"),
  uf = Symbol.for("react.suspense"),
  df = Symbol.for("react.memo"),
  ff = Symbol.for("react.lazy"),
  ti = Symbol.iterator;
function pf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ti && e[ti]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var hc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gc = Object.assign,
  xc = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xc),
    (this.updater = n || hc);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yc() {}
yc.prototype = jr.prototype;
function sa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xc),
    (this.updater = n || hc);
}
var oa = (sa.prototype = new yc());
oa.constructor = sa;
gc(oa, jr.prototype);
oa.isPureReactComponent = !0;
var ni = Array.isArray,
  vc = Object.prototype.hasOwnProperty,
  la = { current: null },
  wc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      vc.call(t, r) && !wc.hasOwnProperty(r) && (o[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), h = 0; h < i; h++) c[h] = arguments[h + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
  return {
    $$typeof: ds,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: la.current,
  };
}
function mf(e, t) {
  return {
    $$typeof: ds,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ds;
}
function hf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ri = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hf("" + e.key)
    : t.toString(36);
}
function As(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ds:
          case nf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + $o(a, 0) : r),
      ni(o)
        ? ((n = ""),
          e != null && (n = e.replace(ri, "$&/") + "/"),
          As(o, t, n, "", function (h) {
            return h;
          }))
        : o != null &&
          (aa(o) &&
            (o = mf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ri, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ni(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = r + $o(l, i);
      a += As(l, t, n, c, o);
    }
  else if (((c = pf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + $o(l, i++)), (a += As(l, t, n, c, o));
  else if (l === "object")
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
function xs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    As(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function gf(e) {
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
var ut = { current: null },
  Os = { transition: null },
  xf = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: Os,
    ReactCurrentOwner: la,
  };
function Nc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ee.Children = {
  map: xs,
  forEach: function (e, t, n) {
    xs(
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
      xs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!aa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ee.Component = jr;
Ee.Fragment = rf;
Ee.Profiler = of;
Ee.PureComponent = sa;
Ee.StrictMode = sf;
Ee.Suspense = uf;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf;
Ee.act = Nc;
Ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = la.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      vc.call(t, c) &&
        !wc.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var h = 0; h < c; h++) i[h] = arguments[h + 2];
    r.children = i;
  }
  return { $$typeof: ds, type: e.type, key: o, ref: l, props: r, _owner: a };
};
Ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: af,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lf, _context: e }),
    (e.Consumer = e)
  );
};
Ee.createElement = bc;
Ee.createFactory = function (e) {
  var t = bc.bind(null, e);
  return (t.type = e), t;
};
Ee.createRef = function () {
  return { current: null };
};
Ee.forwardRef = function (e) {
  return { $$typeof: cf, render: e };
};
Ee.isValidElement = aa;
Ee.lazy = function (e) {
  return { $$typeof: ff, _payload: { _status: -1, _result: e }, _init: gf };
};
Ee.memo = function (e, t) {
  return { $$typeof: df, type: e, compare: t === void 0 ? null : t };
};
Ee.startTransition = function (e) {
  var t = Os.transition;
  Os.transition = {};
  try {
    e();
  } finally {
    Os.transition = t;
  }
};
Ee.unstable_act = Nc;
Ee.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
Ee.useContext = function (e) {
  return ut.current.useContext(e);
};
Ee.useDebugValue = function () {};
Ee.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
Ee.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
Ee.useId = function () {
  return ut.current.useId();
};
Ee.useImperativeHandle = function (e, t, n) {
  return ut.current.useImperativeHandle(e, t, n);
};
Ee.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
Ee.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
Ee.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
Ee.useReducer = function (e, t, n) {
  return ut.current.useReducer(e, t, n);
};
Ee.useRef = function (e) {
  return ut.current.useRef(e);
};
Ee.useState = function (e) {
  return ut.current.useState(e);
};
Ee.useSyncExternalStore = function (e, t, n) {
  return ut.current.useSyncExternalStore(e, t, n);
};
Ee.useTransition = function () {
  return ut.current.useTransition();
};
Ee.version = "18.3.1";
mc.exports = Ee;
var m = mc.exports;
const Qs = tf(m);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = m,
  vf = Symbol.for("react.element"),
  wf = Symbol.for("react.fragment"),
  bf = Object.prototype.hasOwnProperty,
  Nf = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jf = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) bf.call(t, r) && !jf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: vf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Nf.current,
  };
}
vo.Fragment = wf;
vo.jsx = jc;
vo.jsxs = jc;
pc.exports = vo;
var s = pc.exports,
  Sc = { exports: {} },
  jt = {},
  Cc = { exports: {} },
  kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, J) {
    var re = D.length;
    D.push(J);
    e: for (; 0 < re; ) {
      var K = (re - 1) >>> 1,
        q = D[K];
      if (0 < o(q, J)) (D[K] = J), (D[re] = q), (re = K);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var J = D[0],
      re = D.pop();
    if (re !== J) {
      D[0] = re;
      e: for (var K = 0, q = D.length, je = q >>> 1; K < je; ) {
        var pe = 2 * (K + 1) - 1,
          ye = D[pe],
          F = pe + 1,
          le = D[F];
        if (0 > o(ye, re))
          F < q && 0 > o(le, ye)
            ? ((D[K] = le), (D[F] = re), (K = F))
            : ((D[K] = ye), (D[pe] = re), (K = pe));
        else if (F < q && 0 > o(le, re)) (D[K] = le), (D[F] = re), (K = F);
        else break e;
      }
    }
    return J;
  }
  function o(D, J) {
    var re = D.sortIndex - J.sortIndex;
    return re !== 0 ? re : D.id - J.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      i = a.now();
    e.unstable_now = function () {
      return a.now() - i;
    };
  }
  var c = [],
    h = [],
    d = 1,
    g = null,
    p = 3,
    b = !1,
    v = !1,
    N = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(D) {
    for (var J = n(h); J !== null; ) {
      if (J.callback === null) r(h);
      else if (J.startTime <= D)
        r(h), (J.sortIndex = J.expirationTime), t(c, J);
      else break;
      J = n(h);
    }
  }
  function S(D) {
    if (((N = !1), x(D), !v))
      if (n(c) !== null) (v = !0), U($);
      else {
        var J = n(h);
        J !== null && G(S, J.startTime - D);
      }
  }
  function $(D, J) {
    (v = !1), N && ((N = !1), u(j), (j = -1)), (b = !0);
    var re = p;
    try {
      for (
        x(J), g = n(c);
        g !== null && (!(g.expirationTime > J) || (D && !O()));

      ) {
        var K = g.callback;
        if (typeof K == "function") {
          (g.callback = null), (p = g.priorityLevel);
          var q = K(g.expirationTime <= J);
          (J = e.unstable_now()),
            typeof q == "function" ? (g.callback = q) : g === n(c) && r(c),
            x(J);
        } else r(c);
        g = n(c);
      }
      if (g !== null) var je = !0;
      else {
        var pe = n(h);
        pe !== null && G(S, pe.startTime - J), (je = !1);
      }
      return je;
    } finally {
      (g = null), (p = re), (b = !1);
    }
  }
  var M = !1,
    I = null,
    j = -1,
    P = 5,
    w = -1;
  function O() {
    return !(e.unstable_now() - w < P);
  }
  function _() {
    if (I !== null) {
      var D = e.unstable_now();
      w = D;
      var J = !0;
      try {
        J = I(!0, D);
      } finally {
        J ? E() : ((M = !1), (I = null));
      }
    } else M = !1;
  }
  var E;
  if (typeof f == "function")
    E = function () {
      f(_);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      X = T.port2;
    (T.port1.onmessage = _),
      (E = function () {
        X.postMessage(null);
      });
  } else
    E = function () {
      k(_, 0);
    };
  function U(D) {
    (I = D), M || ((M = !0), E());
  }
  function G(D, J) {
    j = k(function () {
      D(e.unstable_now());
    }, J);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || b || ((v = !0), U($));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = p;
      }
      var re = p;
      p = J;
      try {
        return D();
      } finally {
        p = re;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, J) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var re = p;
      p = D;
      try {
        return J();
      } finally {
        p = re;
      }
    }),
    (e.unstable_scheduleCallback = function (D, J, re) {
      var K = e.unstable_now();
      switch (
        (typeof re == "object" && re !== null
          ? ((re = re.delay),
            (re = typeof re == "number" && 0 < re ? K + re : K))
          : (re = K),
        D)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = re + q),
        (D = {
          id: d++,
          callback: J,
          priorityLevel: D,
          startTime: re,
          expirationTime: q,
          sortIndex: -1,
        }),
        re > K
          ? ((D.sortIndex = re),
            t(h, D),
            n(c) === null &&
              D === n(h) &&
              (N ? (u(j), (j = -1)) : (N = !0), G(S, re - K)))
          : ((D.sortIndex = q), t(c, D), v || b || ((v = !0), U($))),
        D
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (D) {
      var J = p;
      return function () {
        var re = p;
        p = J;
        try {
          return D.apply(this, arguments);
        } finally {
          p = re;
        }
      };
    });
})(kc);
Cc.exports = kc;
var Sf = Cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = m,
  Nt = Sf;
function ee(e) {
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
var _c = new Set(),
  qr = {};
function Bn(e, t) {
  hr(e, t), hr(e + "Capture", t);
}
function hr(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) _c.add(t[e]);
}
var nn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dl = Object.prototype.hasOwnProperty,
  kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  si = {},
  oi = {};
function _f(e) {
  return dl.call(oi, e)
    ? !0
    : dl.call(si, e)
    ? !1
    : kf.test(e)
    ? (oi[e] = !0)
    : ((si[e] = !0), !1);
}
function Df(e, t, n, r) {
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
function Mf(e, t, n, r) {
  if (t === null || typeof t > "u" || Df(e, t, n, r)) return !0;
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
function dt(e, t, n, r, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new dt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ia = /[\-:]([a-z])/g;
function ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, ca);
    rt[t] = new dt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ia, ca);
    rt[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ia, ca);
  rt[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ua(e, t, n, r) {
  var o = rt.hasOwnProperty(t) ? rt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mf(t, n, o, r) && (n = null),
    r || o === null
      ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ys = Symbol.for("react.element"),
  Kn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  da = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  Dc = Symbol.for("react.provider"),
  Mc = Symbol.for("react.context"),
  fa = Symbol.for("react.forward_ref"),
  pl = Symbol.for("react.suspense"),
  ml = Symbol.for("react.suspense_list"),
  pa = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Ec = Symbol.for("react.offscreen"),
  li = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (li && e[li]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fe = Object.assign,
  Lo;
function Ar(e) {
  if (Lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Lo = (t && t[1]) || "";
    }
  return (
    `
` +
    Lo +
    e
  );
}
var Uo = !1;
function zo(e, t) {
  if (!e || Uo) return "";
  Uo = !0;
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
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      e();
    }
  } catch (h) {
    if (h && r && typeof h.stack == "string") {
      for (
        var o = h.stack.split(`
`),
          l = r.stack.split(`
`),
          a = o.length - 1,
          i = l.length - 1;
        1 <= a && 0 <= i && o[a] !== l[i];

      )
        i--;
      for (; 1 <= a && 0 <= i; a--, i--)
        if (o[a] !== l[i]) {
          if (a !== 1 || i !== 1)
            do
              if ((a--, i--, 0 > i || o[a] !== l[i])) {
                var c =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= i);
          break;
        }
    }
  } finally {
    (Uo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar("Lazy");
    case 13:
      return Ar("Suspense");
    case 19:
      return Ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zo(e.type, !1)), e;
    case 11:
      return (e = zo(e.type.render, !1)), e;
    case 1:
      return (e = zo(e.type, !0)), e;
    default:
      return "";
  }
}
function hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Kn:
      return "Portal";
    case fl:
      return "Profiler";
    case da:
      return "StrictMode";
    case pl:
      return "Suspense";
    case ml:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mc:
        return (e.displayName || "Context") + ".Consumer";
      case Dc:
        return (e._context.displayName || "Context") + ".Provider";
      case fa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pa:
        return (
          (t = e.displayName || null), t !== null ? t : hl(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return hl(e(t));
        } catch {}
    }
  return null;
}
function Pf(e) {
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
      return hl(t);
    case 8:
      return t === da ? "StrictMode" : "Mode";
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
function Sn(e) {
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
function Pc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function If(e) {
  var t = Pc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), l.call(this, a);
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
function vs(e) {
  e._valueTracker || (e._valueTracker = If(e));
}
function Ic(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gl(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ai(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Sn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rc(e, t) {
  (t = t.checked), t != null && ua(e, "checked", t, !1);
}
function xl(e, t) {
  Rc(e, t);
  var n = Sn(t.value),
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
    ? yl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yl(e, t.type, Sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ii(e, t, n) {
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
function yl(e, t, n) {
  (t !== "number" || qs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Or = Array.isArray;
function cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Sn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function vl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(ee(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ci(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(ee(92));
      if (Or(n)) {
        if (1 < n.length) throw Error(ee(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function Tc(e, t) {
  var n = Sn(t.value),
    r = Sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ui(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ac(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ws,
  Oc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ws = ws || document.createElement("div"),
          ws.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ws.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
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
  Rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  Rf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function $c(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function Lc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = $c(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Tf = Fe(
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
function bl(e, t) {
  if (t) {
    if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(ee(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ee(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(ee(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(ee(62));
  }
}
function Nl(e, t) {
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
var jl = null;
function ma(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sl = null,
  ur = null,
  dr = null;
function di(e) {
  if ((e = ms(e))) {
    if (typeof Sl != "function") throw Error(ee(280));
    var t = e.stateNode;
    t && ((t = So(t)), Sl(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  ur ? (dr ? dr.push(e) : (dr = [e])) : (ur = e);
}
function zc() {
  if (ur) {
    var e = ur,
      t = dr;
    if (((dr = ur = null), di(e), t)) for (e = 0; e < t.length; e++) di(t[e]);
  }
}
function Bc(e, t) {
  return e(t);
}
function Gc() {}
var Bo = !1;
function Fc(e, t, n) {
  if (Bo) return e(t, n);
  Bo = !0;
  try {
    return Bc(e, t, n);
  } finally {
    (Bo = !1), (ur !== null || dr !== null) && (Gc(), zc());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = So(n);
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
  if (n && typeof n != "function") throw Error(ee(231, t, typeof n));
  return n;
}
var Cl = !1;
if (nn)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        Cl = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    Cl = !1;
  }
function Af(e, t, n, r, o, l, a, i, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (d) {
    this.onError(d);
  }
}
var zr = !1,
  Ys = null,
  Xs = !1,
  kl = null,
  Of = {
    onError: function (e) {
      (zr = !0), (Ys = e);
    },
  };
function $f(e, t, n, r, o, l, a, i, c) {
  (zr = !1), (Ys = null), Af.apply(Of, arguments);
}
function Lf(e, t, n, r, o, l, a, i, c) {
  if (($f.apply(this, arguments), zr)) {
    if (zr) {
      var h = Ys;
      (zr = !1), (Ys = null);
    } else throw Error(ee(198));
    Xs || ((Xs = !0), (kl = h));
  }
}
function Gn(e) {
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
function Hc(e) {
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
function fi(e) {
  if (Gn(e) !== e) throw Error(ee(188));
}
function Uf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gn(e)), t === null)) throw Error(ee(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return fi(o), e;
        if (l === r) return fi(o), t;
        l = l.sibling;
      }
      throw Error(ee(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var a = !1, i = o.child; i; ) {
        if (i === n) {
          (a = !0), (n = o), (r = l);
          break;
        }
        if (i === r) {
          (a = !0), (r = o), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!a) {
        for (i = l.child; i; ) {
          if (i === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (i === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!a) throw Error(ee(189));
      }
    }
    if (n.alternate !== r) throw Error(ee(190));
  }
  if (n.tag !== 3) throw Error(ee(188));
  return n.stateNode.current === n ? e : t;
}
function Vc(e) {
  return (e = Uf(e)), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qc = Nt.unstable_scheduleCallback,
  pi = Nt.unstable_cancelCallback,
  zf = Nt.unstable_shouldYield,
  Bf = Nt.unstable_requestPaint,
  Ve = Nt.unstable_now,
  Gf = Nt.unstable_getCurrentPriorityLevel,
  ha = Nt.unstable_ImmediatePriority,
  qc = Nt.unstable_UserBlockingPriority,
  Ks = Nt.unstable_NormalPriority,
  Ff = Nt.unstable_LowPriority,
  Yc = Nt.unstable_IdlePriority,
  wo = null,
  qt = null;
function Hf(e) {
  if (qt && typeof qt.onCommitFiberRoot == "function")
    try {
      qt.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Bt = Math.clz32 ? Math.clz32 : Qf,
  Vf = Math.log,
  Wf = Math.LN2;
function Qf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vf(e) / Wf) | 0)) | 0;
}
var bs = 64,
  Ns = 4194304;
function $r(e) {
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
function Js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (r = $r(i)) : ((l &= a), l !== 0 && (r = $r(l)));
  } else (a = n & ~o), a !== 0 ? (r = $r(a)) : l !== 0 && (r = $r(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Bt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function qf(e, t) {
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
function Yf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Bt(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & r) && (o[a] = qf(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function _l(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xc() {
  var e = bs;
  return (bs <<= 1), !(bs & 4194240) && (bs = 64), e;
}
function Go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Bt(t)),
    (e[t] = n);
}
function Xf(e, t) {
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
    var o = 31 - Bt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ga(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Bt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Te = 0;
function Kc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jc,
  xa,
  Zc,
  eu,
  tu,
  Dl = !1,
  js = [],
  gn = null,
  xn = null,
  yn = null,
  Kr = new Map(),
  Jr = new Map(),
  fn = [],
  Kf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function mi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gn = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = ms(t)), t !== null && xa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Jf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (gn = Mr(gn, e, t, n, r, o)), !0;
    case "dragenter":
      return (xn = Mr(xn, e, t, n, r, o)), !0;
    case "mouseover":
      return (yn = Mr(yn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Kr.set(l, Mr(Kr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Jr.set(l, Mr(Jr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function nu(e) {
  var t = Pn(e.target);
  if (t !== null) {
    var n = Gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hc(n)), t !== null)) {
          (e.blockedOn = t),
            tu(e.priority, function () {
              Zc(n);
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
function $s(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jl = r), n.target.dispatchEvent(r), (jl = null);
    } else return (t = ms(n)), t !== null && xa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hi(e, t, n) {
  $s(e) && n.delete(t);
}
function Zf() {
  (Dl = !1),
    gn !== null && $s(gn) && (gn = null),
    xn !== null && $s(xn) && (xn = null),
    yn !== null && $s(yn) && (yn = null),
    Kr.forEach(hi),
    Jr.forEach(hi);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Dl ||
      ((Dl = !0),
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Zf)));
}
function Zr(e) {
  function t(o) {
    return Er(o, e);
  }
  if (0 < js.length) {
    Er(js[0], e);
    for (var n = 1; n < js.length; n++) {
      var r = js[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gn !== null && Er(gn, e),
      xn !== null && Er(xn, e),
      yn !== null && Er(yn, e),
      Kr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < fn.length;
    n++
  )
    (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
    nu(n), n.blockedOn === null && fn.shift();
}
var fr = ln.ReactCurrentBatchConfig,
  Zs = !0;
function ep(e, t, n, r) {
  var o = Te,
    l = fr.transition;
  fr.transition = null;
  try {
    (Te = 1), ya(e, t, n, r);
  } finally {
    (Te = o), (fr.transition = l);
  }
}
function tp(e, t, n, r) {
  var o = Te,
    l = fr.transition;
  fr.transition = null;
  try {
    (Te = 4), ya(e, t, n, r);
  } finally {
    (Te = o), (fr.transition = l);
  }
}
function ya(e, t, n, r) {
  if (Zs) {
    var o = Ml(e, t, n, r);
    if (o === null) Jo(e, t, r, eo, n), mi(e, r);
    else if (Jf(o, e, t, n, r)) r.stopPropagation();
    else if ((mi(e, r), t & 4 && -1 < Kf.indexOf(e))) {
      for (; o !== null; ) {
        var l = ms(o);
        if (
          (l !== null && Jc(l),
          (l = Ml(e, t, n, r)),
          l === null && Jo(e, t, r, eo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Jo(e, t, r, null, n);
  }
}
var eo = null;
function Ml(e, t, n, r) {
  if (((eo = null), (e = ma(r)), (e = Pn(e)), e !== null))
    if (((t = Gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function ru(e) {
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
        case ha:
          return 1;
        case qc:
          return 4;
        case Ks:
        case Ff:
          return 16;
        case Yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null,
  va = null,
  Ls = null;
function su() {
  if (Ls) return Ls;
  var e,
    t = va,
    n = t.length,
    r,
    o = "value" in mn ? mn.value : mn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
  return (Ls = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ss() {
  return !0;
}
function gi() {
  return !1;
}
function St(e) {
  function t(n, r, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ss
        : gi),
      (this.isPropagationStopped = gi),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ss));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ss));
      },
      persist: function () {},
      isPersistent: Ss,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wa = St(Sr),
  ps = Fe({}, Sr, { view: 0, detail: 0 }),
  np = St(ps),
  Fo,
  Ho,
  Pr,
  bo = Fe({}, ps, {
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
    getModifierState: ba,
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
        : (e !== Pr &&
            (Pr && e.type === "mousemove"
              ? ((Fo = e.screenX - Pr.screenX), (Ho = e.screenY - Pr.screenY))
              : (Ho = Fo = 0),
            (Pr = e)),
          Fo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ho;
    },
  }),
  xi = St(bo),
  rp = Fe({}, bo, { dataTransfer: 0 }),
  sp = St(rp),
  op = Fe({}, ps, { relatedTarget: 0 }),
  Vo = St(op),
  lp = Fe({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ap = St(lp),
  ip = Fe({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cp = St(ip),
  up = Fe({}, Sr, { data: 0 }),
  yi = St(up),
  dp = {
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
  fp = {
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
  pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pp[e]) ? !!t[e] : !1;
}
function ba() {
  return mp;
}
var hp = Fe({}, ps, {
    key: function (e) {
      if (e.key) {
        var t = dp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fp[e.keyCode] || "Unidentified"
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
    getModifierState: ba,
    charCode: function (e) {
      return e.type === "keypress" ? Us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gp = St(hp),
  xp = Fe({}, bo, {
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
  vi = St(xp),
  yp = Fe({}, ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ba,
  }),
  vp = St(yp),
  wp = Fe({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = St(wp),
  Np = Fe({}, bo, {
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
  jp = St(Np),
  Sp = [9, 13, 27, 32],
  Na = nn && "CompositionEvent" in window,
  Br = null;
nn && "documentMode" in document && (Br = document.documentMode);
var Cp = nn && "TextEvent" in window && !Br,
  ou = nn && (!Na || (Br && 8 < Br && 11 >= Br)),
  wi = " ",
  bi = !1;
function lu(e, t) {
  switch (e) {
    case "keyup":
      return Sp.indexOf(t.keyCode) !== -1;
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
var Zn = !1;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return au(t);
    case "keypress":
      return t.which !== 32 ? null : ((bi = !0), wi);
    case "textInput":
      return (e = t.data), e === wi && bi ? null : e;
    default:
      return null;
  }
}
function _p(e, t) {
  if (Zn)
    return e === "compositionend" || (!Na && lu(e, t))
      ? ((e = su()), (Ls = va = mn = null), (Zn = !1), e)
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
      return ou && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dp = {
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
function Ni(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dp[e.type] : t === "textarea";
}
function iu(e, t, n, r) {
  Uc(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new wa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  es = null;
function Mp(e) {
  vu(e, 0);
}
function No(e) {
  var t = nr(e);
  if (Ic(t)) return e;
}
function Ep(e, t) {
  if (e === "change") return t;
}
var cu = !1;
if (nn) {
  var Wo;
  if (nn) {
    var Qo = "oninput" in document;
    if (!Qo) {
      var ji = document.createElement("div");
      ji.setAttribute("oninput", "return;"),
        (Qo = typeof ji.oninput == "function");
    }
    Wo = Qo;
  } else Wo = !1;
  cu = Wo && (!document.documentMode || 9 < document.documentMode);
}
function Si() {
  Gr && (Gr.detachEvent("onpropertychange", uu), (es = Gr = null));
}
function uu(e) {
  if (e.propertyName === "value" && No(es)) {
    var t = [];
    iu(t, es, e, ma(e)), Fc(Mp, t);
  }
}
function Pp(e, t, n) {
  e === "focusin"
    ? (Si(), (Gr = t), (es = n), Gr.attachEvent("onpropertychange", uu))
    : e === "focusout" && Si();
}
function Ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(es);
}
function Rp(e, t) {
  if (e === "click") return No(t);
}
function Tp(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Ap(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ft = typeof Object.is == "function" ? Object.is : Ap;
function ts(e, t) {
  if (Ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!dl.call(t, o) || !Ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Ci(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ki(e, t) {
  var n = Ci(e);
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
    n = Ci(n);
  }
}
function du(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? du(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fu() {
  for (var e = window, t = qs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qs(e.document);
  }
  return t;
}
function ja(e) {
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
function Op(e) {
  var t = fu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    du(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ja(n)) {
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
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = ki(n, l));
        var a = ki(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var $p = nn && "documentMode" in document && 11 >= document.documentMode,
  er = null,
  El = null,
  Fr = null,
  Pl = !1;
function _i(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pl ||
    er == null ||
    er !== qs(r) ||
    ((r = er),
    "selectionStart" in r && ja(r)
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
    (Fr && ts(Fr, r)) ||
      ((Fr = r),
      (r = to(El, "onSelect")),
      0 < r.length &&
        ((t = new wa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = er))));
}
function Cs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var tr = {
    animationend: Cs("Animation", "AnimationEnd"),
    animationiteration: Cs("Animation", "AnimationIteration"),
    animationstart: Cs("Animation", "AnimationStart"),
    transitionend: Cs("Transition", "TransitionEnd"),
  },
  qo = {},
  pu = {};
nn &&
  ((pu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete tr.animationend.animation,
    delete tr.animationiteration.animation,
    delete tr.animationstart.animation),
  "TransitionEvent" in window || delete tr.transitionend.transition);
function jo(e) {
  if (qo[e]) return qo[e];
  if (!tr[e]) return e;
  var t = tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pu) return (qo[e] = t[n]);
  return e;
}
var mu = jo("animationend"),
  hu = jo("animationiteration"),
  gu = jo("animationstart"),
  xu = jo("transitionend"),
  yu = new Map(),
  Di =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function kn(e, t) {
  yu.set(e, t), Bn(t, [e]);
}
for (var Yo = 0; Yo < Di.length; Yo++) {
  var Xo = Di[Yo],
    Lp = Xo.toLowerCase(),
    Up = Xo[0].toUpperCase() + Xo.slice(1);
  kn(Lp, "on" + Up);
}
kn(mu, "onAnimationEnd");
kn(hu, "onAnimationIteration");
kn(gu, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(xu, "onTransitionEnd");
hr("onMouseEnter", ["mouseout", "mouseover"]);
hr("onMouseLeave", ["mouseout", "mouseover"]);
hr("onPointerEnter", ["pointerout", "pointerover"]);
hr("onPointerLeave", ["pointerout", "pointerover"]);
Bn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Bn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Bn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Bn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function Mi(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function vu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var i = r[a],
            c = i.instance,
            h = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          Mi(o, i, h), (l = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((i = r[a]),
            (c = i.instance),
            (h = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Mi(o, i, h), (l = c);
        }
    }
  }
  if (Xs) throw ((e = kl), (Xs = !1), (kl = null), e);
}
function $e(e, t) {
  var n = t[Ol];
  n === void 0 && (n = t[Ol] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wu(t, e, 2, !1), n.add(r));
}
function Ko(e, t, n) {
  var r = 0;
  t && (r |= 4), wu(n, e, r, t);
}
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[ks]) {
    (e[ks] = !0),
      _c.forEach(function (n) {
        n !== "selectionchange" && (zp.has(n) || Ko(n, !1, e), Ko(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ks] || ((t[ks] = !0), Ko("selectionchange", !1, t));
  }
}
function wu(e, t, n, r) {
  switch (ru(t)) {
    case 1:
      var o = ep;
      break;
    case 4:
      o = tp;
      break;
    default:
      o = ya;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Cl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Jo(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var i = r.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; i !== null; ) {
          if (((a = Pn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Fc(function () {
    var h = l,
      d = ma(n),
      g = [];
    e: {
      var p = yu.get(e);
      if (p !== void 0) {
        var b = wa,
          v = e;
        switch (e) {
          case "keypress":
            if (Us(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = gp;
            break;
          case "focusin":
            (v = "focus"), (b = Vo);
            break;
          case "focusout":
            (v = "blur"), (b = Vo);
            break;
          case "beforeblur":
          case "afterblur":
            b = Vo;
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
            b = xi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = vp;
            break;
          case mu:
          case hu:
          case gu:
            b = ap;
            break;
          case xu:
            b = bp;
            break;
          case "scroll":
            b = np;
            break;
          case "wheel":
            b = jp;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = cp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = vi;
        }
        var N = (t & 4) !== 0,
          k = !N && e === "scroll",
          u = N ? (p !== null ? p + "Capture" : null) : p;
        N = [];
        for (var f = h, x; f !== null; ) {
          x = f;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              u !== null && ((S = Xr(f, u)), S != null && N.push(rs(f, S, x)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < N.length &&
          ((p = new b(p, v, null, n, d)), g.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          p &&
            n !== jl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Pn(v) || v[rn]))
        )
          break e;
        if (
          (b || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          b
            ? ((v = n.relatedTarget || n.toElement),
              (b = h),
              (v = v ? Pn(v) : null),
              v !== null &&
                ((k = Gn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((b = null), (v = h)),
          b !== v)
        ) {
          if (
            ((N = xi),
            (S = "onMouseLeave"),
            (u = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = vi),
              (S = "onPointerLeave"),
              (u = "onPointerEnter"),
              (f = "pointer")),
            (k = b == null ? p : nr(b)),
            (x = v == null ? p : nr(v)),
            (p = new N(S, f + "leave", b, n, d)),
            (p.target = k),
            (p.relatedTarget = x),
            (S = null),
            Pn(d) === h &&
              ((N = new N(u, f + "enter", v, n, d)),
              (N.target = x),
              (N.relatedTarget = k),
              (S = N)),
            (k = S),
            b && v)
          )
            t: {
              for (N = b, u = v, f = 0, x = N; x; x = Xn(x)) f++;
              for (x = 0, S = u; S; S = Xn(S)) x++;
              for (; 0 < f - x; ) (N = Xn(N)), f--;
              for (; 0 < x - f; ) (u = Xn(u)), x--;
              for (; f--; ) {
                if (N === u || (u !== null && N === u.alternate)) break t;
                (N = Xn(N)), (u = Xn(u));
              }
              N = null;
            }
          else N = null;
          b !== null && Ei(g, p, b, N, !1),
            v !== null && k !== null && Ei(g, k, v, N, !0);
        }
      }
      e: {
        if (
          ((p = h ? nr(h) : window),
          (b = p.nodeName && p.nodeName.toLowerCase()),
          b === "select" || (b === "input" && p.type === "file"))
        )
          var $ = Ep;
        else if (Ni(p))
          if (cu) $ = Tp;
          else {
            $ = Ip;
            var M = Pp;
          }
        else
          (b = p.nodeName) &&
            b.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            ($ = Rp);
        if ($ && ($ = $(e, h))) {
          iu(g, $, n, d);
          break e;
        }
        M && M(e, p, h),
          e === "focusout" &&
            (M = p._wrapperState) &&
            M.controlled &&
            p.type === "number" &&
            yl(p, "number", p.value);
      }
      switch (((M = h ? nr(h) : window), e)) {
        case "focusin":
          (Ni(M) || M.contentEditable === "true") &&
            ((er = M), (El = h), (Fr = null));
          break;
        case "focusout":
          Fr = El = er = null;
          break;
        case "mousedown":
          Pl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pl = !1), _i(g, n, d);
          break;
        case "selectionchange":
          if ($p) break;
        case "keydown":
        case "keyup":
          _i(g, n, d);
      }
      var I;
      if (Na)
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
        Zn
          ? lu(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (ou &&
          n.locale !== "ko" &&
          (Zn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Zn && (I = su())
            : ((mn = d),
              (va = "value" in mn ? mn.value : mn.textContent),
              (Zn = !0))),
        (M = to(h, j)),
        0 < M.length &&
          ((j = new yi(j, e, null, n, d)),
          g.push({ event: j, listeners: M }),
          I ? (j.data = I) : ((I = au(n)), I !== null && (j.data = I)))),
        (I = Cp ? kp(e, n) : _p(e, n)) &&
          ((h = to(h, "onBeforeInput")),
          0 < h.length &&
            ((d = new yi("onBeforeInput", "beforeinput", null, n, d)),
            g.push({ event: d, listeners: h }),
            (d.data = I)));
    }
    vu(g, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Xr(e, n)),
      l != null && r.unshift(rs(e, l, o)),
      (l = Xr(e, t)),
      l != null && r.push(rs(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ei(e, t, n, r, o) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var i = n,
      c = i.alternate,
      h = i.stateNode;
    if (c !== null && c === r) break;
    i.tag === 5 &&
      h !== null &&
      ((i = h),
      o
        ? ((c = Xr(n, l)), c != null && a.unshift(rs(n, c, i)))
        : o || ((c = Xr(n, l)), c != null && a.push(rs(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Bp = /\r\n?/g,
  Gp = /\u0000|\uFFFD/g;
function Pi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bp,
      `
`
    )
    .replace(Gp, "");
}
function _s(e, t, n) {
  if (((t = Pi(t)), Pi(e) !== t && n)) throw Error(ee(425));
}
function no() {}
var Il = null,
  Rl = null;
function Tl(e, t) {
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
var Al = typeof setTimeout == "function" ? setTimeout : void 0,
  Fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ii = typeof Promise == "function" ? Promise : void 0,
  Hp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ii < "u"
      ? function (e) {
          return Ii.resolve(null).then(e).catch(Vp);
        }
      : Al;
function Vp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zo(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Zr(t);
}
function vn(e) {
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
function Ri(e) {
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
var Cr = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + Cr,
  ss = "__reactProps$" + Cr,
  rn = "__reactContainer$" + Cr,
  Ol = "__reactEvents$" + Cr,
  Wp = "__reactListeners$" + Cr,
  Qp = "__reactHandles$" + Cr;
function Pn(e) {
  var t = e[Qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[rn] || n[Qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ri(e); e !== null; ) {
          if ((n = e[Qt])) return n;
          e = Ri(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ms(e) {
  return (
    (e = e[Qt] || e[rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(ee(33));
}
function So(e) {
  return e[ss] || null;
}
var $l = [],
  rr = -1;
function _n(e) {
  return { current: e };
}
function Le(e) {
  0 > rr || ((e.current = $l[rr]), ($l[rr] = null), rr--);
}
function Oe(e, t) {
  rr++, ($l[rr] = e.current), (e.current = t);
}
var Cn = {},
  at = _n(Cn),
  ht = _n(!1),
  On = Cn;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function gt(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  Le(ht), Le(at);
}
function Ti(e, t, n) {
  if (at.current !== Cn) throw Error(ee(168));
  Oe(at, t), Oe(ht, n);
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(ee(108, Pf(e) || "Unknown", o));
  return Fe({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (On = at.current),
    Oe(at, e),
    Oe(ht, ht.current),
    !0
  );
}
function Ai(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(ee(169));
  n
    ? ((e = bu(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Le(ht),
      Le(at),
      Oe(at, e))
    : Le(ht),
    Oe(ht, n);
}
var Kt = null,
  Co = !1,
  el = !1;
function Nu(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function qp(e) {
  (Co = !0), Nu(e);
}
function Dn() {
  if (!el && Kt !== null) {
    el = !0;
    var e = 0,
      t = Te;
    try {
      var n = Kt;
      for (Te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (Co = !1);
    } catch (o) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), Qc(ha, Dn), o);
    } finally {
      (Te = t), (el = !1);
    }
  }
  return null;
}
var sr = [],
  or = 0,
  oo = null,
  lo = 0,
  kt = [],
  _t = 0,
  $n = null,
  Zt = 1,
  en = "";
function Mn(e, t) {
  (sr[or++] = lo), (sr[or++] = oo), (oo = e), (lo = t);
}
function ju(e, t, n) {
  (kt[_t++] = Zt), (kt[_t++] = en), (kt[_t++] = $n), ($n = e);
  var r = Zt;
  e = en;
  var o = 32 - Bt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Bt(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Zt = (1 << (32 - Bt(t) + o)) | (n << o) | r),
      (en = l + e);
  } else (Zt = (1 << l) | (n << o) | r), (en = e);
}
function Sa(e) {
  e.return !== null && (Mn(e, 1), ju(e, 1, 0));
}
function Ca(e) {
  for (; e === oo; )
    (oo = sr[--or]), (sr[or] = null), (lo = sr[--or]), (sr[or] = null);
  for (; e === $n; )
    ($n = kt[--_t]),
      (kt[_t] = null),
      (en = kt[--_t]),
      (kt[_t] = null),
      (Zt = kt[--_t]),
      (kt[_t] = null);
}
var bt = null,
  vt = null,
  ze = !1,
  zt = null;
function Su(e, t) {
  var n = Dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Oi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (bt = e), (vt = vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (bt = e), (vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: Zt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (bt = e),
            (vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ll(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (ze) {
    var t = vt;
    if (t) {
      var n = t;
      if (!Oi(e, t)) {
        if (Ll(e)) throw Error(ee(418));
        t = vn(n.nextSibling);
        var r = bt;
        t && Oi(e, t)
          ? Su(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (bt = e));
      }
    } else {
      if (Ll(e)) throw Error(ee(418));
      (e.flags = (e.flags & -4097) | 2), (ze = !1), (bt = e);
    }
  }
}
function $i(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  bt = e;
}
function Ds(e) {
  if (e !== bt) return !1;
  if (!ze) return $i(e), (ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = vt))
  ) {
    if (Ll(e)) throw (Cu(), Error(ee(418)));
    for (; t; ) Su(e, t), (t = vn(t.nextSibling));
  }
  if (($i(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(ee(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              vt = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      vt = null;
    }
  } else vt = bt ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function Cu() {
  for (var e = vt; e; ) e = vn(e.nextSibling);
}
function xr() {
  (vt = bt = null), (ze = !1);
}
function ka(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var Yp = ln.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ee(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(ee(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var i = o.refs;
            a === null ? delete i[l] : (i[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(ee(284));
    if (!n._owner) throw Error(ee(290, e));
  }
  return e;
}
function Ms(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      ee(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Li(e) {
  var t = e._init;
  return t(e._payload);
}
function ku(e) {
  function t(u, f) {
    if (e) {
      var x = u.deletions;
      x === null ? ((u.deletions = [f]), (u.flags |= 16)) : x.push(f);
    }
  }
  function n(u, f) {
    if (!e) return null;
    for (; f !== null; ) t(u, f), (f = f.sibling);
    return null;
  }
  function r(u, f) {
    for (u = new Map(); f !== null; )
      f.key !== null ? u.set(f.key, f) : u.set(f.index, f), (f = f.sibling);
    return u;
  }
  function o(u, f) {
    return (u = jn(u, f)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, f, x) {
    return (
      (u.index = x),
      e
        ? ((x = u.alternate),
          x !== null
            ? ((x = x.index), x < f ? ((u.flags |= 2), f) : x)
            : ((u.flags |= 2), f))
        : ((u.flags |= 1048576), f)
    );
  }
  function a(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function i(u, f, x, S) {
    return f === null || f.tag !== 6
      ? ((f = al(x, u.mode, S)), (f.return = u), f)
      : ((f = o(f, x)), (f.return = u), f);
  }
  function c(u, f, x, S) {
    var $ = x.type;
    return $ === Jn
      ? d(u, f, x.props.children, S, x.key)
      : f !== null &&
        (f.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === un &&
            Li($) === f.type))
      ? ((S = o(f, x.props)), (S.ref = Ir(u, f, x)), (S.return = u), S)
      : ((S = Ws(x.type, x.key, x.props, null, u.mode, S)),
        (S.ref = Ir(u, f, x)),
        (S.return = u),
        S);
  }
  function h(u, f, x, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== x.containerInfo ||
      f.stateNode.implementation !== x.implementation
      ? ((f = il(x, u.mode, S)), (f.return = u), f)
      : ((f = o(f, x.children || [])), (f.return = u), f);
  }
  function d(u, f, x, S, $) {
    return f === null || f.tag !== 7
      ? ((f = An(x, u.mode, S, $)), (f.return = u), f)
      : ((f = o(f, x)), (f.return = u), f);
  }
  function g(u, f, x) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = al("" + f, u.mode, x)), (f.return = u), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ys:
          return (
            (x = Ws(f.type, f.key, f.props, null, u.mode, x)),
            (x.ref = Ir(u, null, f)),
            (x.return = u),
            x
          );
        case Kn:
          return (f = il(f, u.mode, x)), (f.return = u), f;
        case un:
          var S = f._init;
          return g(u, S(f._payload), x);
      }
      if (Or(f) || _r(f))
        return (f = An(f, u.mode, x, null)), (f.return = u), f;
      Ms(u, f);
    }
    return null;
  }
  function p(u, f, x, S) {
    var $ = f !== null ? f.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return $ !== null ? null : i(u, f, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ys:
          return x.key === $ ? c(u, f, x, S) : null;
        case Kn:
          return x.key === $ ? h(u, f, x, S) : null;
        case un:
          return ($ = x._init), p(u, f, $(x._payload), S);
      }
      if (Or(x) || _r(x)) return $ !== null ? null : d(u, f, x, S, null);
      Ms(u, x);
    }
    return null;
  }
  function b(u, f, x, S, $) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (u = u.get(x) || null), i(f, u, "" + S, $);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ys:
          return (u = u.get(S.key === null ? x : S.key) || null), c(f, u, S, $);
        case Kn:
          return (u = u.get(S.key === null ? x : S.key) || null), h(f, u, S, $);
        case un:
          var M = S._init;
          return b(u, f, x, M(S._payload), $);
      }
      if (Or(S) || _r(S)) return (u = u.get(x) || null), d(f, u, S, $, null);
      Ms(f, S);
    }
    return null;
  }
  function v(u, f, x, S) {
    for (
      var $ = null, M = null, I = f, j = (f = 0), P = null;
      I !== null && j < x.length;
      j++
    ) {
      I.index > j ? ((P = I), (I = null)) : (P = I.sibling);
      var w = p(u, I, x[j], S);
      if (w === null) {
        I === null && (I = P);
        break;
      }
      e && I && w.alternate === null && t(u, I),
        (f = l(w, f, j)),
        M === null ? ($ = w) : (M.sibling = w),
        (M = w),
        (I = P);
    }
    if (j === x.length) return n(u, I), ze && Mn(u, j), $;
    if (I === null) {
      for (; j < x.length; j++)
        (I = g(u, x[j], S)),
          I !== null &&
            ((f = l(I, f, j)), M === null ? ($ = I) : (M.sibling = I), (M = I));
      return ze && Mn(u, j), $;
    }
    for (I = r(u, I); j < x.length; j++)
      (P = b(I, u, j, x[j], S)),
        P !== null &&
          (e && P.alternate !== null && I.delete(P.key === null ? j : P.key),
          (f = l(P, f, j)),
          M === null ? ($ = P) : (M.sibling = P),
          (M = P));
    return (
      e &&
        I.forEach(function (O) {
          return t(u, O);
        }),
      ze && Mn(u, j),
      $
    );
  }
  function N(u, f, x, S) {
    var $ = _r(x);
    if (typeof $ != "function") throw Error(ee(150));
    if (((x = $.call(x)), x == null)) throw Error(ee(151));
    for (
      var M = ($ = null), I = f, j = (f = 0), P = null, w = x.next();
      I !== null && !w.done;
      j++, w = x.next()
    ) {
      I.index > j ? ((P = I), (I = null)) : (P = I.sibling);
      var O = p(u, I, w.value, S);
      if (O === null) {
        I === null && (I = P);
        break;
      }
      e && I && O.alternate === null && t(u, I),
        (f = l(O, f, j)),
        M === null ? ($ = O) : (M.sibling = O),
        (M = O),
        (I = P);
    }
    if (w.done) return n(u, I), ze && Mn(u, j), $;
    if (I === null) {
      for (; !w.done; j++, w = x.next())
        (w = g(u, w.value, S)),
          w !== null &&
            ((f = l(w, f, j)), M === null ? ($ = w) : (M.sibling = w), (M = w));
      return ze && Mn(u, j), $;
    }
    for (I = r(u, I); !w.done; j++, w = x.next())
      (w = b(I, u, j, w.value, S)),
        w !== null &&
          (e && w.alternate !== null && I.delete(w.key === null ? j : w.key),
          (f = l(w, f, j)),
          M === null ? ($ = w) : (M.sibling = w),
          (M = w));
    return (
      e &&
        I.forEach(function (_) {
          return t(u, _);
        }),
      ze && Mn(u, j),
      $
    );
  }
  function k(u, f, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Jn &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ys:
          e: {
            for (var $ = x.key, M = f; M !== null; ) {
              if (M.key === $) {
                if ((($ = x.type), $ === Jn)) {
                  if (M.tag === 7) {
                    n(u, M.sibling),
                      (f = o(M, x.props.children)),
                      (f.return = u),
                      (u = f);
                    break e;
                  }
                } else if (
                  M.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === un &&
                    Li($) === M.type)
                ) {
                  n(u, M.sibling),
                    (f = o(M, x.props)),
                    (f.ref = Ir(u, M, x)),
                    (f.return = u),
                    (u = f);
                  break e;
                }
                n(u, M);
                break;
              } else t(u, M);
              M = M.sibling;
            }
            x.type === Jn
              ? ((f = An(x.props.children, u.mode, S, x.key)),
                (f.return = u),
                (u = f))
              : ((S = Ws(x.type, x.key, x.props, null, u.mode, S)),
                (S.ref = Ir(u, f, x)),
                (S.return = u),
                (u = S));
          }
          return a(u);
        case Kn:
          e: {
            for (M = x.key; f !== null; ) {
              if (f.key === M)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === x.containerInfo &&
                  f.stateNode.implementation === x.implementation
                ) {
                  n(u, f.sibling),
                    (f = o(f, x.children || [])),
                    (f.return = u),
                    (u = f);
                  break e;
                } else {
                  n(u, f);
                  break;
                }
              else t(u, f);
              f = f.sibling;
            }
            (f = il(x, u.mode, S)), (f.return = u), (u = f);
          }
          return a(u);
        case un:
          return (M = x._init), k(u, f, M(x._payload), S);
      }
      if (Or(x)) return v(u, f, x, S);
      if (_r(x)) return N(u, f, x, S);
      Ms(u, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        f !== null && f.tag === 6
          ? (n(u, f.sibling), (f = o(f, x)), (f.return = u), (u = f))
          : (n(u, f), (f = al(x, u.mode, S)), (f.return = u), (u = f)),
        a(u))
      : n(u, f);
  }
  return k;
}
var yr = ku(!0),
  _u = ku(!1),
  ao = _n(null),
  io = null,
  lr = null,
  _a = null;
function Da() {
  _a = lr = io = null;
}
function Ma(e) {
  var t = ao.current;
  Le(ao), (e._currentValue = t);
}
function zl(e, t, n) {
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
function pr(e, t) {
  (io = e),
    (_a = lr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (mt = !0), (e.firstContext = null));
}
function It(e) {
  var t = e._currentValue;
  if (_a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), lr === null)) {
      if (io === null) throw Error(ee(308));
      (lr = e), (io.dependencies = { lanes: 0, firstContext: e });
    } else lr = lr.next = e;
  return t;
}
var In = null;
function Ea(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Du(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ea(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    sn(e, r)
  );
}
function sn(e, t) {
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
var dn = !1;
function Pa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mu(e, t) {
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
function tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      sn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ea(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    sn(e, n)
  );
}
function zs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
function Ui(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function co(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      h = c.next;
    (c.next = null), a === null ? (l = h) : (a.next = h), (a = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (i = d.lastBaseUpdate),
      i !== a &&
        (i === null ? (d.firstBaseUpdate = h) : (i.next = h),
        (d.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var g = o.baseState;
    (a = 0), (d = h = c = null), (i = l);
    do {
      var p = i.lane,
        b = i.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: b,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var v = e,
            N = i;
          switch (((p = t), (b = n), N.tag)) {
            case 1:
              if (((v = N.payload), typeof v == "function")) {
                g = v.call(b, g, p);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = N.payload),
                (p = typeof v == "function" ? v.call(b, g, p) : v),
                p == null)
              )
                break e;
              g = Fe({}, g, p);
              break e;
            case 2:
              dn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [i]) : p.push(i));
      } else
        (b = {
          eventTime: b,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          d === null ? ((h = d = b), (c = g)) : (d = d.next = b),
          (a |= p);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = g),
      (o.baseState = c),
      (o.firstBaseUpdate = h),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Un |= a), (e.lanes = a), (e.memoizedState = g);
  }
}
function zi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(ee(191, o));
        o.call(r);
      }
    }
}
var hs = {},
  Yt = _n(hs),
  os = _n(hs),
  ls = _n(hs);
function Rn(e) {
  if (e === hs) throw Error(ee(174));
  return e;
}
function Ia(e, t) {
  switch ((Oe(ls, t), Oe(os, e), Oe(Yt, hs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wl(t, e));
  }
  Le(Yt), Oe(Yt, t);
}
function vr() {
  Le(Yt), Le(os), Le(ls);
}
function Eu(e) {
  Rn(ls.current);
  var t = Rn(Yt.current),
    n = wl(t, e.type);
  t !== n && (Oe(os, e), Oe(Yt, n));
}
function Ra(e) {
  os.current === e && (Le(Yt), Le(os));
}
var Be = _n(0);
function uo(e) {
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
var tl = [];
function Ta() {
  for (var e = 0; e < tl.length; e++)
    tl[e]._workInProgressVersionPrimary = null;
  tl.length = 0;
}
var Bs = ln.ReactCurrentDispatcher,
  nl = ln.ReactCurrentBatchConfig,
  Ln = 0,
  Ge = null,
  Ye = null,
  Ze = null,
  fo = !1,
  Hr = !1,
  as = 0,
  Xp = 0;
function st() {
  throw Error(ee(321));
}
function Aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ft(e[n], t[n])) return !1;
  return !0;
}
function Oa(e, t, n, r, o, l) {
  if (
    ((Ln = l),
    (Ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bs.current = e === null || e.memoizedState === null ? em : tm),
    (e = n(r, o)),
    Hr)
  ) {
    l = 0;
    do {
      if (((Hr = !1), (as = 0), 25 <= l)) throw Error(ee(301));
      (l += 1),
        (Ze = Ye = null),
        (t.updateQueue = null),
        (Bs.current = nm),
        (e = n(r, o));
    } while (Hr);
  }
  if (
    ((Bs.current = po),
    (t = Ye !== null && Ye.next !== null),
    (Ln = 0),
    (Ze = Ye = Ge = null),
    (fo = !1),
    t)
  )
    throw Error(ee(300));
  return e;
}
function $a() {
  var e = as !== 0;
  return (as = 0), e;
}
function Wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ze === null ? (Ge.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze;
}
function Rt() {
  if (Ye === null) {
    var e = Ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ye.next;
  var t = Ze === null ? Ge.memoizedState : Ze.next;
  if (t !== null) (Ze = t), (Ye = e);
  else {
    if (e === null) throw Error(ee(310));
    (Ye = e),
      (e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null,
      }),
      Ze === null ? (Ge.memoizedState = Ze = e) : (Ze = Ze.next = e);
  }
  return Ze;
}
function is(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rl(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(ee(311));
  n.lastRenderedReducer = e;
  var r = Ye,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var i = (a = null),
      c = null,
      h = l;
    do {
      var d = h.lane;
      if ((Ln & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : e(r, h.action));
      else {
        var g = {
          lane: d,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        c === null ? ((i = c = g), (a = r)) : (c = c.next = g),
          (Ge.lanes |= d),
          (Un |= d);
      }
      h = h.next;
    } while (h !== null && h !== l);
    c === null ? (a = r) : (c.next = i),
      Ft(r, t.memoizedState) || (mt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ge.lanes |= l), (Un |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sl(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(ee(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Ft(l, t.memoizedState) || (mt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Pu() {}
function Iu(e, t) {
  var n = Ge,
    r = Rt(),
    o = t(),
    l = !Ft(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (mt = !0)),
    (r = r.queue),
    La(Au.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ze !== null && Ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, Tu.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(ee(349));
    Ln & 30 || Ru(n, t, o);
  }
  return o;
}
function Ru(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Tu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ou(t) && $u(e);
}
function Au(e, t, n) {
  return n(function () {
    Ou(t) && $u(e);
  });
}
function Ou(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ft(e, n);
  } catch {
    return !0;
  }
}
function $u(e) {
  var t = sn(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function Bi(e) {
  var t = Wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: is,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zp.bind(null, Ge, e)),
    [t.memoizedState, e]
  );
}
function cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lu() {
  return Rt().memoizedState;
}
function Gs(e, t, n, r) {
  var o = Wt();
  (Ge.flags |= e),
    (o.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r));
}
function ko(e, t, n, r) {
  var o = Rt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Ye !== null) {
    var a = Ye.memoizedState;
    if (((l = a.destroy), r !== null && Aa(r, a.deps))) {
      o.memoizedState = cs(t, n, l, r);
      return;
    }
  }
  (Ge.flags |= e), (o.memoizedState = cs(1 | t, n, l, r));
}
function Gi(e, t) {
  return Gs(8390656, 8, e, t);
}
function La(e, t) {
  return ko(2048, 8, e, t);
}
function Uu(e, t) {
  return ko(4, 2, e, t);
}
function zu(e, t) {
  return ko(4, 4, e, t);
}
function Bu(e, t) {
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
function Gu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ko(4, 4, Bu.bind(null, t, e), n)
  );
}
function Ua() {}
function Fu(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hu(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vu(e, t, n) {
  return Ln & 21
    ? (Ft(n, t) || ((n = Xc()), (Ge.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = n));
}
function Kp(e, t) {
  var n = Te;
  (Te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = nl.transition;
  nl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Te = n), (nl.transition = r);
  }
}
function Wu() {
  return Rt().memoizedState;
}
function Jp(e, t, n) {
  var r = Nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qu(e))
  )
    qu(t, n);
  else if (((n = Du(e, t, n, r)), n !== null)) {
    var o = ct();
    Gt(n, e, r, o), Yu(n, t, r);
  }
}
function Zp(e, t, n) {
  var r = Nn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qu(e)) qu(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          i = l(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = i), Ft(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Ea(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Du(e, t, o, r)),
      n !== null && ((o = ct()), Gt(n, e, r, o), Yu(n, t, r));
  }
}
function Qu(e) {
  var t = e.alternate;
  return e === Ge || (t !== null && t === Ge);
}
function qu(e, t) {
  Hr = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
var po = {
    readContext: It,
    useCallback: st,
    useContext: st,
    useEffect: st,
    useImperativeHandle: st,
    useInsertionEffect: st,
    useLayoutEffect: st,
    useMemo: st,
    useReducer: st,
    useRef: st,
    useState: st,
    useDebugValue: st,
    useDeferredValue: st,
    useTransition: st,
    useMutableSource: st,
    useSyncExternalStore: st,
    useId: st,
    unstable_isNewReconciler: !1,
  },
  em = {
    readContext: It,
    useCallback: function (e, t) {
      return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: It,
    useEffect: Gi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gs(4194308, 4, Bu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Wt();
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
        (e = e.dispatch = Jp.bind(null, Ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bi,
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      return (Wt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bi(!1),
        t = e[0];
      return (e = Kp.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ge,
        o = Wt();
      if (ze) {
        if (n === void 0) throw Error(ee(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(ee(349));
        Ln & 30 || Ru(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Gi(Au.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        cs(9, Tu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Wt(),
        t = et.identifierPrefix;
      if (ze) {
        var n = en,
          r = Zt;
        (n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = as++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: It,
    useCallback: Fu,
    useContext: It,
    useEffect: La,
    useImperativeHandle: Gu,
    useInsertionEffect: Uu,
    useLayoutEffect: zu,
    useMemo: Hu,
    useReducer: rl,
    useRef: Lu,
    useState: function () {
      return rl(is);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = Rt();
      return Vu(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = rl(is)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Pu,
    useSyncExternalStore: Iu,
    useId: Wu,
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: It,
    useCallback: Fu,
    useContext: It,
    useEffect: La,
    useImperativeHandle: Gu,
    useInsertionEffect: Uu,
    useLayoutEffect: zu,
    useMemo: Hu,
    useReducer: sl,
    useRef: Lu,
    useState: function () {
      return sl(is);
    },
    useDebugValue: Ua,
    useDeferredValue: function (e) {
      var t = Rt();
      return Ye === null ? (t.memoizedState = e) : Vu(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(is)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Pu,
    useSyncExternalStore: Iu,
    useId: Wu,
    unstable_isNewReconciler: !1,
  };
function Lt(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ct(),
      o = Nn(e),
      l = tn(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = wn(e, l, o)),
      t !== null && (Gt(t, e, o, r), zs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ct(),
      o = Nn(e),
      l = tn(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = wn(e, l, o)),
      t !== null && (Gt(t, e, o, r), zs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ct(),
      r = Nn(e),
      o = tn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = wn(e, o, r)),
      t !== null && (Gt(t, e, r, n), zs(t, e, r));
  },
};
function Fi(e, t, n, r, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ts(n, r) || !ts(o, l)
      : !0
  );
}
function Xu(e, t, n) {
  var r = !1,
    o = Cn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = It(l))
      : ((o = gt(t) ? On : at.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? gr(e, o) : Cn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Hi(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Gl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Pa(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = It(l))
    : ((l = gt(t) ? On : at.current), (o.context = gr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Bl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && _o.enqueueReplaceState(o, o.state, null),
      co(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ef(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rm = typeof WeakMap == "function" ? WeakMap : Map;
function Ku(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ho || ((ho = !0), (Zl = r)), Fl(e, t);
    }),
    n
  );
}
function Ju(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Fl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Fl(e, t),
          typeof r != "function" &&
            (bn === null ? (bn = new Set([this])) : bn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Vi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = xm.bind(null, e, t, n)), t.then(e, e));
}
function Wi(e) {
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
function Qi(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tn(-1, 1)), (t.tag = 2), wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sm = ln.ReactCurrentOwner,
  mt = !1;
function it(e, t, n, r) {
  t.child = e === null ? _u(t, null, n, r) : yr(t, e.child, n, r);
}
function qi(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    pr(t, o),
    (r = Oa(e, t, n, r, l, o)),
    (n = $a()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (ze && n && Sa(t), (t.flags |= 1), it(e, t, r, o), t.child)
  );
}
function Yi(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Qa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Zu(e, t, l, r, o))
      : ((e = Ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ts), n(a, r) && e.ref === t.ref)
    )
      return on(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = jn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zu(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (ts(l, r) && e.ref === t.ref)
      if (((mt = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (mt = !0);
      else return (t.lanes = e.lanes), on(e, t, o);
  }
  return Hl(e, t, n, r, o);
}
function ed(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Oe(ir, yt),
        (yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Oe(ir, yt),
          (yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Oe(ir, yt),
        (yt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Oe(ir, yt),
      (yt |= r);
  return it(e, t, o, n), t.child;
}
function td(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hl(e, t, n, r, o) {
  var l = gt(n) ? On : at.current;
  return (
    (l = gr(t, l)),
    pr(t, o),
    (n = Oa(e, t, n, r, l, o)),
    (r = $a()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (ze && r && Sa(t), (t.flags |= 1), it(e, t, n, o), t.child)
  );
}
function Xi(e, t, n, r, o) {
  if (gt(n)) {
    var l = !0;
    so(t);
  } else l = !1;
  if ((pr(t, o), t.stateNode === null))
    Fs(e, t), Xu(t, n, r), Gl(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = It(h))
      : ((h = gt(n) ? On : at.current), (h = gr(t, h)));
    var d = n.getDerivedStateFromProps,
      g =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== r || c !== h) && Hi(t, a, r, h)),
      (dn = !1);
    var p = t.memoizedState;
    (a.state = p),
      co(t, r, a, o),
      (c = t.memoizedState),
      i !== r || p !== c || ht.current || dn
        ? (typeof d == "function" && (Bl(t, n, d, r), (c = t.memoizedState)),
          (i = dn || Fi(t, n, i, r, p, c, h))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = h),
          (r = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Mu(e, t),
      (i = t.memoizedProps),
      (h = t.type === t.elementType ? i : Lt(t.type, i)),
      (a.props = h),
      (g = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = It(c))
        : ((c = gt(n) ? On : at.current), (c = gr(t, c)));
    var b = n.getDerivedStateFromProps;
    (d =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== g || p !== c) && Hi(t, a, r, c)),
      (dn = !1),
      (p = t.memoizedState),
      (a.state = p),
      co(t, r, a, o);
    var v = t.memoizedState;
    i !== g || p !== v || ht.current || dn
      ? (typeof b == "function" && (Bl(t, n, b, r), (v = t.memoizedState)),
        (h = dn || Fi(t, n, h, r, p, v, c) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = c),
        (r = h))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vl(e, t, n, r, l, o);
}
function Vl(e, t, n, r, o, l) {
  td(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Ai(t, n, !1), on(e, t, l);
  (r = t.stateNode), (sm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = yr(t, e.child, null, l)), (t.child = yr(t, null, i, l)))
      : it(e, t, i, l),
    (t.memoizedState = r.state),
    o && Ai(t, n, !0),
    t.child
  );
}
function nd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ti(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ti(e, t.context, !1),
    Ia(e, t.containerInfo);
}
function Ki(e, t, n, r, o) {
  return xr(), ka(o), (t.flags |= 256), it(e, t, n, r), t.child;
}
var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rd(e, t, n) {
  var r = t.pendingProps,
    o = Be.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Oe(Be, o & 1),
    e === null)
  )
    return (
      Ul(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Eo(a, r, 0, null)),
              (e = An(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ql(n)),
              (t.memoizedState = Wl),
              e)
            : za(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return om(e, t, a, r, i, o, n);
  if (l) {
    (l = r.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = jn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = jn(i, l)) : ((l = An(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ql(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = jn(l, { mode: "visible", children: r.children })),
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
function za(e, t) {
  return (
    (t = Eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Es(e, t, n, r) {
  return (
    r !== null && ka(r),
    yr(t, e.child, null, n),
    (e = za(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, n, r, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ol(Error(ee(422)))), Es(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Eo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = An(l, o, a, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, a),
        (t.child.memoizedState = Ql(a)),
        (t.memoizedState = Wl),
        l);
  if (!(t.mode & 1)) return Es(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var i = r.dgst;
    return (
      (r = i), (l = Error(ee(419))), (r = ol(l, r, void 0)), Es(e, t, a, r)
    );
  }
  if (((i = (a & e.childLanes) !== 0), mt || i)) {
    if (((r = et), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), sn(e, o), Gt(r, e, o, -1));
    }
    return Wa(), (r = ol(Error(ee(421)))), Es(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ym.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (vt = vn(o.nextSibling)),
      (bt = t),
      (ze = !0),
      (zt = null),
      e !== null &&
        ((kt[_t++] = Zt),
        (kt[_t++] = en),
        (kt[_t++] = $n),
        (Zt = e.id),
        (en = e.overflow),
        ($n = t)),
      (t = za(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ji(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zl(e.return, t, n);
}
function ll(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function sd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((it(e, t, r.children, n), (r = Be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ji(e, n, t);
        else if (e.tag === 19) Ji(e, n, t);
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
  if ((Oe(Be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && uo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ll(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && uo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ll(t, !0, n, null, l);
        break;
      case "together":
        ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(ee(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      nd(t), xr();
      break;
    case 5:
      Eu(t);
      break;
    case 1:
      gt(t.type) && so(t);
      break;
    case 4:
      Ia(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Oe(ao, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Oe(Be, Be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rd(e, t, n)
          : (Oe(Be, Be.current & 1),
            (e = on(e, t, n)),
            e !== null ? e.sibling : null);
      Oe(Be, Be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Oe(Be, Be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ed(e, t, n);
  }
  return on(e, t, n);
}
var od, ql, ld, ad;
od = function (e, t) {
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
ql = function () {};
ld = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Rn(Yt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = gl(e, o)), (r = gl(e, r)), (l = []);
        break;
      case "select":
        (o = Fe({}, o, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = vl(e, o)), (r = vl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    bl(n, r);
    var a;
    n = null;
    for (h in o)
      if (!r.hasOwnProperty(h) && o.hasOwnProperty(h) && o[h] != null)
        if (h === "style") {
          var i = o[h];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (qr.hasOwnProperty(h)
              ? l || (l = [])
              : (l = l || []).push(h, null));
    for (h in r) {
      var c = r[h];
      if (
        ((i = o != null ? o[h] : void 0),
        r.hasOwnProperty(h) && c !== i && (c != null || i != null))
      )
        if (h === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(h, n)), (n = c);
        else
          h === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(h, c))
            : h === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(h, "" + c)
            : h !== "suppressContentEditableWarning" &&
              h !== "suppressHydrationWarning" &&
              (qr.hasOwnProperty(h)
                ? (c != null && h === "onScroll" && $e("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(h, c));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
ad = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!ze)
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
function ot(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function am(e, t, n) {
  var r = t.pendingProps;
  switch ((Ca(t), t.tag)) {
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
      return ot(t), null;
    case 1:
      return gt(t.type) && ro(), ot(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        Le(ht),
        Le(at),
        Ta(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (na(zt), (zt = null)))),
        ql(e, t),
        ot(t),
        null
      );
    case 5:
      Ra(t);
      var o = Rn(ls.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ld(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(ee(166));
          return ot(t), null;
        }
        if (((e = Rn(Yt.current)), Ds(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Qt] = t), (r[ss] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $e("cancel", r), $e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Lr.length; o++) $e(Lr[o], r);
              break;
            case "source":
              $e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $e("error", r), $e("load", r);
              break;
            case "details":
              $e("toggle", r);
              break;
            case "input":
              ai(r, l), $e("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                $e("invalid", r);
              break;
            case "textarea":
              ci(r, l), $e("invalid", r);
          }
          bl(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      _s(r.textContent, i, e),
                    (o = ["children", "" + i]))
                : qr.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  $e("scroll", r);
            }
          switch (n) {
            case "input":
              vs(r), ii(r, l, !0);
              break;
            case "textarea":
              vs(r), ui(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = no);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)),
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
            (e[Qt] = t),
            (e[ss] = r),
            od(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Nl(n, r)), n)) {
              case "dialog":
                $e("cancel", e), $e("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Lr.length; o++) $e(Lr[o], e);
                o = r;
                break;
              case "source":
                $e("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                $e("error", e), $e("load", e), (o = r);
                break;
              case "details":
                $e("toggle", e), (o = r);
                break;
              case "input":
                ai(e, r), (o = gl(e, r)), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Fe({}, r, { value: void 0 })),
                  $e("invalid", e);
                break;
              case "textarea":
                ci(e, r), (o = vl(e, r)), $e("invalid", e);
                break;
              default:
                o = r;
            }
            bl(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Lc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Oc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Yr(e, c)
                    : typeof c == "number" && Yr(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (qr.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && $e("scroll", e)
                      : c != null && ua(e, l, c, a));
              }
            switch (n) {
              case "input":
                vs(e), ii(e, r, !1);
                break;
              case "textarea":
                vs(e), ui(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? cr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = no);
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
      return ot(t), null;
    case 6:
      if (e && t.stateNode != null) ad(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(ee(166));
        if (((n = Rn(ls.current)), Rn(Yt.current), Ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qt] = t),
            (l = r.nodeValue !== n) && ((e = bt), e !== null))
          )
            switch (e.tag) {
              case 3:
                _s(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _s(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qt] = t),
            (t.stateNode = r);
      }
      return ot(t), null;
    case 13:
      if (
        (Le(Be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ze && vt !== null && t.mode & 1 && !(t.flags & 128))
          Cu(), xr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(ee(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(ee(317));
            l[Qt] = t;
          } else
            xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ot(t), (l = !1);
        } else zt !== null && (na(zt), (zt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Be.current & 1 ? Xe === 0 && (Xe = 3) : Wa())),
          t.updateQueue !== null && (t.flags |= 4),
          ot(t),
          null);
    case 4:
      return (
        vr(), ql(e, t), e === null && ns(t.stateNode.containerInfo), ot(t), null
      );
    case 10:
      return Ma(t.type._context), ot(t), null;
    case 17:
      return gt(t.type) && ro(), ot(t), null;
    case 19:
      if ((Le(Be), (l = t.memoizedState), l === null)) return ot(t), null;
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) Rr(l, !1);
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = uo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Rr(l, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Oe(Be, (Be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ve() > br &&
            ((t.flags |= 128), (r = !0), Rr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = uo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !ze)
            )
              return ot(t), null;
          } else
            2 * Ve() - l.renderingStartTime > br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ve()),
          (t.sibling = null),
          (n = Be.current),
          Oe(Be, r ? (n & 1) | 2 : n & 1),
          t)
        : (ot(t), null);
    case 22:
    case 23:
      return (
        Va(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? yt & 1073741824 && (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ot(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(ee(156, t.tag));
}
function im(e, t) {
  switch ((Ca(t), t.tag)) {
    case 1:
      return (
        gt(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        Le(ht),
        Le(at),
        Ta(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ra(t), null;
    case 13:
      if (
        (Le(Be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(ee(340));
        xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Le(Be), null;
    case 4:
      return vr(), null;
    case 10:
      return Ma(t.type._context), null;
    case 22:
    case 23:
      return Va(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ps = !1,
  lt = !1,
  cm = typeof WeakSet == "function" ? WeakSet : Set,
  fe = null;
function ar(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        He(e, t, r);
      }
    else n.current = null;
}
function Yl(e, t, n) {
  try {
    n();
  } catch (r) {
    He(e, t, r);
  }
}
var Zi = !1;
function um(e, t) {
  if (((Il = Zs), (e = fu()), ja(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            i = -1,
            c = -1,
            h = 0,
            d = 0,
            g = e,
            p = null;
          t: for (;;) {
            for (
              var b;
              g !== n || (o !== 0 && g.nodeType !== 3) || (i = a + o),
                g !== l || (r !== 0 && g.nodeType !== 3) || (c = a + r),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (b = g.firstChild) !== null;

            )
              (p = g), (g = b);
            for (;;) {
              if (g === e) break t;
              if (
                (p === n && ++h === o && (i = a),
                p === l && ++d === r && (c = a),
                (b = g.nextSibling) !== null)
              )
                break;
              (g = p), (p = g.parentNode);
            }
            g = b;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Rl = { focusedElem: e, selectionRange: n }, Zs = !1, fe = t;
    fe !== null;

  )
    if (((t = fe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (fe = e);
    else
      for (; fe !== null; ) {
        t = fe;
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
                  var N = v.memoizedProps,
                    k = v.memoizedState,
                    u = t.stateNode,
                    f = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Lt(t.type, N),
                      k
                    );
                  u.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(ee(163));
            }
        } catch (S) {
          He(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (fe = e);
          break;
        }
        fe = t.return;
      }
  return (v = Zi), (Zi = !1), v;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Yl(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Do(e, t) {
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
function Xl(e) {
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
function id(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), id(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[ss], delete t[Ol], delete t[Wp], delete t[Qp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ec(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cd(e.return)) return null;
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
function Kl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), (e = e.sibling);
}
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
}
var tt = null,
  Ut = !1;
function cn(e, t, n) {
  for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling);
}
function ud(e, t, n) {
  if (qt && typeof qt.onCommitFiberUnmount == "function")
    try {
      qt.onCommitFiberUnmount(wo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      lt || ar(n, t);
    case 6:
      var r = tt,
        o = Ut;
      (tt = null),
        cn(e, t, n),
        (tt = r),
        (Ut = o),
        tt !== null &&
          (Ut
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (Ut
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zo(e.parentNode, n)
              : e.nodeType === 1 && Zo(e, n),
            Zr(e))
          : Zo(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (o = Ut),
        (tt = n.stateNode.containerInfo),
        (Ut = !0),
        cn(e, t, n),
        (tt = r),
        (Ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !lt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && Yl(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      cn(e, t, n);
      break;
    case 1:
      if (
        !lt &&
        (ar(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          He(n, t, i);
        }
      cn(e, t, n);
      break;
    case 21:
      cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((lt = (r = lt) || n.memoizedState !== null), cn(e, t, n), (lt = r))
        : cn(e, t, n);
      break;
    default:
      cn(e, t, n);
  }
}
function tc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cm()),
      t.forEach(function (r) {
        var o = vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function $t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          a = t,
          i = a;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (tt = i.stateNode), (Ut = !1);
              break e;
            case 3:
              (tt = i.stateNode.containerInfo), (Ut = !0);
              break e;
            case 4:
              (tt = i.stateNode.containerInfo), (Ut = !0);
              break e;
          }
          i = i.return;
        }
        if (tt === null) throw Error(ee(160));
        ud(l, a, o), (tt = null), (Ut = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (h) {
        He(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dd(t, e), (t = t.sibling);
}
function dd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($t(t, e), Ht(e), r & 4)) {
        try {
          Vr(3, e, e.return), Do(3, e);
        } catch (N) {
          He(e, e.return, N);
        }
        try {
          Vr(5, e, e.return);
        } catch (N) {
          He(e, e.return, N);
        }
      }
      break;
    case 1:
      $t(t, e), Ht(e), r & 512 && n !== null && ar(n, n.return);
      break;
    case 5:
      if (
        ($t(t, e),
        Ht(e),
        r & 512 && n !== null && ar(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yr(o, "");
        } catch (N) {
          He(e, e.return, N);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Rc(o, l),
              Nl(i, a);
            var h = Nl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a],
                g = c[a + 1];
              d === "style"
                ? Lc(o, g)
                : d === "dangerouslySetInnerHTML"
                ? Oc(o, g)
                : d === "children"
                ? Yr(o, g)
                : ua(o, d, g, h);
            }
            switch (i) {
              case "input":
                xl(o, l);
                break;
              case "textarea":
                Tc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var b = l.value;
                b != null
                  ? cr(o, !!l.multiple, b, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? cr(o, !!l.multiple, l.defaultValue, !0)
                      : cr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ss] = l;
          } catch (N) {
            He(e, e.return, N);
          }
      }
      break;
    case 6:
      if (($t(t, e), Ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(ee(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (N) {
          He(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        ($t(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zr(t.containerInfo);
        } catch (N) {
          He(e, e.return, N);
        }
      break;
    case 4:
      $t(t, e), Ht(e);
      break;
    case 13:
      $t(t, e),
        Ht(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fa = Ve())),
        r & 4 && tc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((lt = (h = lt) || d), $t(t, e), (lt = h)) : $t(t, e),
        Ht(e),
        r & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !d && e.mode & 1)
        )
          for (fe = e, d = e.child; d !== null; ) {
            for (g = fe = d; fe !== null; ) {
              switch (((p = fe), (b = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, p, p.return);
                  break;
                case 1:
                  ar(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (N) {
                      He(r, n, N);
                    }
                  }
                  break;
                case 5:
                  ar(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    rc(g);
                    continue;
                  }
              }
              b !== null ? ((b.return = p), (fe = b)) : rc(g);
            }
            d = d.sibling;
          }
        e: for (d = null, g = e; ; ) {
          if (g.tag === 5) {
            if (d === null) {
              d = g;
              try {
                (o = g.stateNode),
                  h
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = g.stateNode),
                      (c = g.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = $c("display", a)));
              } catch (N) {
                He(e, e.return, N);
              }
            }
          } else if (g.tag === 6) {
            if (d === null)
              try {
                g.stateNode.nodeValue = h ? "" : g.memoizedProps;
              } catch (N) {
                He(e, e.return, N);
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
            d === g && (d = null), (g = g.return);
          }
          d === g && (d = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      $t(t, e), Ht(e), r & 4 && tc(e);
      break;
    case 21:
      break;
    default:
      $t(t, e), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(ee(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yr(o, ""), (r.flags &= -33));
          var l = ec(e);
          Jl(e, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            i = ec(e);
          Kl(e, i, a);
          break;
        default:
          throw Error(ee(161));
      }
    } catch (c) {
      He(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dm(e, t, n) {
  (fe = e), fd(e);
}
function fd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; fe !== null; ) {
    var o = fe,
      l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Ps;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || lt;
        i = Ps;
        var h = lt;
        if (((Ps = a), (lt = c) && !h))
          for (fe = o; fe !== null; )
            (a = fe),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? sc(o)
                : c !== null
                ? ((c.return = a), (fe = c))
                : sc(o);
        for (; l !== null; ) (fe = l), fd(l), (l = l.sibling);
        (fe = o), (Ps = i), (lt = h);
      }
      nc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (fe = l)) : nc(e);
  }
}
function nc(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Do(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && zi(t, l, r);
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
                zi(t, a, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var h = t.alternate;
                if (h !== null) {
                  var d = h.memoizedState;
                  if (d !== null) {
                    var g = d.dehydrated;
                    g !== null && Zr(g);
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
              throw Error(ee(163));
          }
        lt || (t.flags & 512 && Xl(t));
      } catch (p) {
        He(t, t.return, p);
      }
    }
    if (t === e) {
      fe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function rc(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t === e) {
      fe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function sc(e) {
  for (; fe !== null; ) {
    var t = fe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Do(4, t);
          } catch (c) {
            He(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              He(t, o, c);
            }
          }
          var l = t.return;
          try {
            Xl(t);
          } catch (c) {
            He(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Xl(t);
          } catch (c) {
            He(t, a, c);
          }
      }
    } catch (c) {
      He(t, t.return, c);
    }
    if (t === e) {
      fe = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (fe = i);
      break;
    }
    fe = t.return;
  }
}
var fm = Math.ceil,
  mo = ln.ReactCurrentDispatcher,
  Ba = ln.ReactCurrentOwner,
  Mt = ln.ReactCurrentBatchConfig,
  Ie = 0,
  et = null,
  We = null,
  nt = 0,
  yt = 0,
  ir = _n(0),
  Xe = 0,
  us = null,
  Un = 0,
  Mo = 0,
  Ga = 0,
  Wr = null,
  pt = null,
  Fa = 0,
  br = 1 / 0,
  Xt = null,
  ho = !1,
  Zl = null,
  bn = null,
  Is = !1,
  hn = null,
  go = 0,
  Qr = 0,
  ea = null,
  Hs = -1,
  Vs = 0;
function ct() {
  return Ie & 6 ? Ve() : Hs !== -1 ? Hs : (Hs = Ve());
}
function Nn(e) {
  return e.mode & 1
    ? Ie & 2 && nt !== 0
      ? nt & -nt
      : Yp.transition !== null
      ? (Vs === 0 && (Vs = Xc()), Vs)
      : ((e = Te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ru(e.type))),
        e)
    : 1;
}
function Gt(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (ea = null), Error(ee(185)));
  fs(e, n, r),
    (!(Ie & 2) || e !== et) &&
      (e === et && (!(Ie & 2) && (Mo |= n), Xe === 4 && pn(e, nt)),
      xt(e, r),
      n === 1 && Ie === 0 && !(t.mode & 1) && ((br = Ve() + 500), Co && Dn()));
}
function xt(e, t) {
  var n = e.callbackNode;
  Yf(e, t);
  var r = Js(e, e === et ? nt : 0);
  if (r === 0)
    n !== null && pi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pi(n), t === 1))
      e.tag === 0 ? qp(oc.bind(null, e)) : Nu(oc.bind(null, e)),
        Hp(function () {
          !(Ie & 6) && Dn();
        }),
        (n = null);
    else {
      switch (Kc(r)) {
        case 1:
          n = ha;
          break;
        case 4:
          n = qc;
          break;
        case 16:
          n = Ks;
          break;
        case 536870912:
          n = Yc;
          break;
        default:
          n = Ks;
      }
      n = wd(n, pd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pd(e, t) {
  if (((Hs = -1), (Vs = 0), Ie & 6)) throw Error(ee(327));
  var n = e.callbackNode;
  if (mr() && e.callbackNode !== n) return null;
  var r = Js(e, e === et ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var o = Ie;
    Ie |= 2;
    var l = hd();
    (et !== e || nt !== t) && ((Xt = null), (br = Ve() + 500), Tn(e, t));
    do
      try {
        hm();
        break;
      } catch (i) {
        md(e, i);
      }
    while (!0);
    Da(),
      (mo.current = l),
      (Ie = o),
      We !== null ? (t = 0) : ((et = null), (nt = 0), (t = Xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = _l(e)), o !== 0 && ((r = o), (t = ta(e, o)))), t === 1)
    )
      throw ((n = us), Tn(e, 0), pn(e, r), xt(e, Ve()), n);
    if (t === 6) pn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !pm(o) &&
          ((t = xo(e, r)),
          t === 2 && ((l = _l(e)), l !== 0 && ((r = l), (t = ta(e, l)))),
          t === 1))
      )
        throw ((n = us), Tn(e, 0), pn(e, r), xt(e, Ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(ee(345));
        case 2:
          En(e, pt, Xt);
          break;
        case 3:
          if (
            (pn(e, r), (r & 130023424) === r && ((t = Fa + 500 - Ve()), 10 < t))
          ) {
            if (Js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ct(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Al(En.bind(null, e, pt, Xt), t);
            break;
          }
          En(e, pt, Xt);
          break;
        case 4:
          if ((pn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Bt(r);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Ve() - r),
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
                : 1960 * fm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Al(En.bind(null, e, pt, Xt), r);
            break;
          }
          En(e, pt, Xt);
          break;
        case 5:
          En(e, pt, Xt);
          break;
        default:
          throw Error(ee(329));
      }
    }
  }
  return xt(e, Ve()), e.callbackNode === n ? pd.bind(null, e) : null;
}
function ta(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = pt), (pt = n), t !== null && na(t)),
    e
  );
}
function na(e) {
  pt === null ? (pt = e) : pt.push.apply(pt, e);
}
function pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Ft(l(), o)) return !1;
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
function pn(e, t) {
  for (
    t &= ~Ga,
      t &= ~Mo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Bt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function oc(e) {
  if (Ie & 6) throw Error(ee(327));
  mr();
  var t = Js(e, 0);
  if (!(t & 1)) return xt(e, Ve()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _l(e);
    r !== 0 && ((t = r), (n = ta(e, r)));
  }
  if (n === 1) throw ((n = us), Tn(e, 0), pn(e, t), xt(e, Ve()), n);
  if (n === 6) throw Error(ee(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, pt, Xt),
    xt(e, Ve()),
    null
  );
}
function Ha(e, t) {
  var n = Ie;
  Ie |= 1;
  try {
    return e(t);
  } finally {
    (Ie = n), Ie === 0 && ((br = Ve() + 500), Co && Dn());
  }
}
function zn(e) {
  hn !== null && hn.tag === 0 && !(Ie & 6) && mr();
  var t = Ie;
  Ie |= 1;
  var n = Mt.transition,
    r = Te;
  try {
    if (((Mt.transition = null), (Te = 1), e)) return e();
  } finally {
    (Te = r), (Mt.transition = n), (Ie = t), !(Ie & 6) && Dn();
  }
}
function Va() {
  (yt = ir.current), Le(ir);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), We !== null))
    for (n = We.return; n !== null; ) {
      var r = n;
      switch ((Ca(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          vr(), Le(ht), Le(at), Ta();
          break;
        case 5:
          Ra(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          Le(Be);
          break;
        case 19:
          Le(Be);
          break;
        case 10:
          Ma(r.type._context);
          break;
        case 22:
        case 23:
          Va();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (We = e = jn(e.current, null)),
    (nt = yt = t),
    (Xe = 0),
    (us = null),
    (Ga = Mo = Un = 0),
    (pt = Wr = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (r.next = a);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function md(e, t) {
  do {
    var n = We;
    try {
      if ((Da(), (Bs.current = po), fo)) {
        for (var r = Ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((Ln = 0),
        (Ze = Ye = Ge = null),
        (Hr = !1),
        (as = 0),
        (Ba.current = null),
        n === null || n.return === null)
      ) {
        (Xe = 1), (us = t), (We = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = nt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var h = c,
            d = i,
            g = d.tag;
          if (!(d.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var b = Wi(a);
          if (b !== null) {
            (b.flags &= -257),
              Qi(b, a, i, l, t),
              b.mode & 1 && Vi(l, h, t),
              (t = b),
              (c = h);
            var v = t.updateQueue;
            if (v === null) {
              var N = new Set();
              N.add(c), (t.updateQueue = N);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Vi(l, h, t), Wa();
              break e;
            }
            c = Error(ee(426));
          }
        } else if (ze && i.mode & 1) {
          var k = Wi(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Qi(k, a, i, l, t),
              ka(wr(c, i));
            break e;
          }
        }
        (l = c = wr(c, i)),
          Xe !== 4 && (Xe = 2),
          Wr === null ? (Wr = [l]) : Wr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = Ku(l, c, t);
              Ui(l, u);
              break e;
            case 1:
              i = c;
              var f = l.type,
                x = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (bn === null || !bn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Ju(l, i, t);
                Ui(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      xd(n);
    } catch ($) {
      (t = $), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hd() {
  var e = mo.current;
  return (mo.current = po), e === null ? po : e;
}
function Wa() {
  (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    et === null || (!(Un & 268435455) && !(Mo & 268435455)) || pn(et, nt);
}
function xo(e, t) {
  var n = Ie;
  Ie |= 2;
  var r = hd();
  (et !== e || nt !== t) && ((Xt = null), Tn(e, t));
  do
    try {
      mm();
      break;
    } catch (o) {
      md(e, o);
    }
  while (!0);
  if ((Da(), (Ie = n), (mo.current = r), We !== null)) throw Error(ee(261));
  return (et = null), (nt = 0), Xe;
}
function mm() {
  for (; We !== null; ) gd(We);
}
function hm() {
  for (; We !== null && !zf(); ) gd(We);
}
function gd(e) {
  var t = vd(e.alternate, e, yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? xd(e) : (We = t),
    (Ba.current = null);
}
function xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Xe = 6), (We = null);
        return;
      }
    } else if (((n = am(n, t, yt)), n !== null)) {
      We = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      We = t;
      return;
    }
    We = t = e;
  } while (t !== null);
  Xe === 0 && (Xe = 5);
}
function En(e, t, n) {
  var r = Te,
    o = Mt.transition;
  try {
    (Mt.transition = null), (Te = 1), gm(e, t, n, r);
  } finally {
    (Mt.transition = o), (Te = r);
  }
  return null;
}
function gm(e, t, n, r) {
  do mr();
  while (hn !== null);
  if (Ie & 6) throw Error(ee(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(ee(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Xf(e, l),
    e === et && ((We = et = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Is ||
      ((Is = !0),
      wd(Ks, function () {
        return mr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Mt.transition), (Mt.transition = null);
    var a = Te;
    Te = 1;
    var i = Ie;
    (Ie |= 4),
      (Ba.current = null),
      um(e, n),
      dd(n, e),
      Op(Rl),
      (Zs = !!Il),
      (Rl = Il = null),
      (e.current = n),
      dm(n),
      Bf(),
      (Ie = i),
      (Te = a),
      (Mt.transition = l);
  } else e.current = n;
  if (
    (Is && ((Is = !1), (hn = e), (go = o)),
    (l = e.pendingLanes),
    l === 0 && (bn = null),
    Hf(n.stateNode),
    xt(e, Ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ho) throw ((ho = !1), (e = Zl), (Zl = null), e);
  return (
    go & 1 && e.tag !== 0 && mr(),
    (l = e.pendingLanes),
    l & 1 ? (e === ea ? Qr++ : ((Qr = 0), (ea = e))) : (Qr = 0),
    Dn(),
    null
  );
}
function mr() {
  if (hn !== null) {
    var e = Kc(go),
      t = Mt.transition,
      n = Te;
    try {
      if (((Mt.transition = null), (Te = 16 > e ? 16 : e), hn === null))
        var r = !1;
      else {
        if (((e = hn), (hn = null), (go = 0), Ie & 6)) throw Error(ee(331));
        var o = Ie;
        for (Ie |= 4, fe = e.current; fe !== null; ) {
          var l = fe,
            a = l.child;
          if (fe.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var h = i[c];
                for (fe = h; fe !== null; ) {
                  var d = fe;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, d, l);
                  }
                  var g = d.child;
                  if (g !== null) (g.return = d), (fe = g);
                  else
                    for (; fe !== null; ) {
                      d = fe;
                      var p = d.sibling,
                        b = d.return;
                      if ((id(d), d === h)) {
                        fe = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = b), (fe = p);
                        break;
                      }
                      fe = b;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var N = v.child;
                if (N !== null) {
                  v.child = null;
                  do {
                    var k = N.sibling;
                    (N.sibling = null), (N = k);
                  } while (N !== null);
                }
              }
              fe = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (fe = a);
          else
            e: for (; fe !== null; ) {
              if (((l = fe), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (fe = u);
                break e;
              }
              fe = l.return;
            }
        }
        var f = e.current;
        for (fe = f; fe !== null; ) {
          a = fe;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (fe = x);
          else
            e: for (a = f; fe !== null; ) {
              if (((i = fe), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(9, i);
                  }
                } catch ($) {
                  He(i, i.return, $);
                }
              if (i === a) {
                fe = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                (S.return = i.return), (fe = S);
                break e;
              }
              fe = i.return;
            }
        }
        if (
          ((Ie = o), Dn(), qt && typeof qt.onPostCommitFiberRoot == "function")
        )
          try {
            qt.onPostCommitFiberRoot(wo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Te = n), (Mt.transition = t);
    }
  }
  return !1;
}
function lc(e, t, n) {
  (t = wr(n, t)),
    (t = Ku(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = ct()),
    e !== null && (fs(e, 1, t), xt(e, t));
}
function He(e, t, n) {
  if (e.tag === 3) lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bn === null || !bn.has(r)))
        ) {
          (e = wr(n, e)),
            (e = Ju(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = ct()),
            t !== null && (fs(t, 1, e), xt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ct()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (nt & n) === n &&
      (Xe === 4 || (Xe === 3 && (nt & 130023424) === nt && 500 > Ve() - Fa)
        ? Tn(e, 0)
        : (Ga |= n)),
    xt(e, t);
}
function yd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ns), (Ns <<= 1), !(Ns & 130023424) && (Ns = 4194304))
      : (t = 1));
  var n = ct();
  (e = sn(e, t)), e !== null && (fs(e, t, n), xt(e, n));
}
function ym(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yd(e, n);
}
function vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(ee(314));
  }
  r !== null && r.delete(t), yd(e, n);
}
var vd;
vd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (mt = !1), lm(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else (mt = !1), ze && t.flags & 1048576 && ju(t, lo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fs(e, t), (e = t.pendingProps);
      var o = gr(t, at.current);
      pr(t, n), (o = Oa(null, t, r, e, o, n));
      var l = $a();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            gt(r) ? ((l = !0), so(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Pa(t),
            (o.updater = _o),
            (t.stateNode = o),
            (o._reactInternals = t),
            Gl(t, r, e, n),
            (t = Vl(null, t, r, !0, l, n)))
          : ((t.tag = 0), ze && l && Sa(t), it(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = bm(r)),
          (e = Lt(r, e)),
          o)
        ) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = Xi(null, t, r, e, n);
            break e;
          case 11:
            t = qi(null, t, r, e, n);
            break e;
          case 14:
            t = Yi(null, t, r, Lt(r.type, e), n);
            break e;
        }
        throw Error(ee(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        Hl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        Xi(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((nd(t), e === null)) throw Error(ee(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Mu(e, t),
          co(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = wr(Error(ee(423)), t)), (t = Ki(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = wr(Error(ee(424)), t)), (t = Ki(e, t, r, n, o));
            break e;
          } else
            for (
              vt = vn(t.stateNode.containerInfo.firstChild),
                bt = t,
                ze = !0,
                zt = null,
                n = _u(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xr(), r === o)) {
            t = on(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Eu(t),
        e === null && Ul(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Tl(r, o) ? (a = null) : l !== null && Tl(r, l) && (t.flags |= 32),
        td(e, t),
        it(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ul(t), null;
    case 13:
      return rd(e, t, n);
    case 4:
      return (
        Ia(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        qi(e, t, r, o, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Oe(ao, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (Ft(l.value, a)) {
            if (l.children === o.children && !ht.current) {
              t = on(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                a = l.child;
                for (var c = i.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (l.tag === 1) {
                      (c = tn(-1, n & -n)), (c.tag = 2);
                      var h = l.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var d = h.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (h.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      zl(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(ee(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  zl(a, n, t),
                  (a = l.sibling);
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        it(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (o = It(o)),
        (r = r(o)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Lt(r, t.pendingProps)),
        (o = Lt(r.type, o)),
        Yi(e, t, r, o, n)
      );
    case 15:
      return Zu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        Fs(e, t),
        (t.tag = 1),
        gt(r) ? ((e = !0), so(t)) : (e = !1),
        pr(t, n),
        Xu(t, r, o),
        Gl(t, r, o, n),
        Vl(null, t, r, !0, e, n)
      );
    case 19:
      return sd(e, t, n);
    case 22:
      return ed(e, t, n);
  }
  throw Error(ee(156, t.tag));
};
function wd(e, t) {
  return Qc(e, t);
}
function wm(e, t, n, r) {
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
function Dt(e, t, n, r) {
  return new wm(e, t, n, r);
}
function Qa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return Qa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fa)) return 11;
    if (e === pa) return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Dt(e.tag, t, e.key, e.mode)),
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
function Ws(e, t, n, r, o, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) Qa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Jn:
        return An(n.children, o, l, t);
      case da:
        (a = 8), (o |= 8);
        break;
      case fl:
        return (
          (e = Dt(12, n, t, o | 2)), (e.elementType = fl), (e.lanes = l), e
        );
      case pl:
        return (e = Dt(13, n, t, o)), (e.elementType = pl), (e.lanes = l), e;
      case ml:
        return (e = Dt(19, n, t, o)), (e.elementType = ml), (e.lanes = l), e;
      case Ec:
        return Eo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dc:
              a = 10;
              break e;
            case Mc:
              a = 9;
              break e;
            case fa:
              a = 11;
              break e;
            case pa:
              a = 14;
              break e;
            case un:
              (a = 16), (r = null);
              break e;
          }
        throw Error(ee(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Dt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function An(e, t, n, r) {
  return (e = Dt(7, e, r, t)), (e.lanes = n), e;
}
function Eo(e, t, n, r) {
  return (
    (e = Dt(22, e, r, t)),
    (e.elementType = Ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function al(e, t, n) {
  return (e = Dt(6, e, null, t)), (e.lanes = n), e;
}
function il(e, t, n) {
  return (
    (t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nm(e, t, n, r, o) {
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
    (this.eventTimes = Go(0)),
    (this.expirationTimes = Go(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Go(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qa(e, t, n, r, o, l, a, i, c) {
  return (
    (e = new Nm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Dt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pa(l),
    e
  );
}
function jm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bd(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (Gn(e) !== e || e.tag !== 1) throw Error(ee(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(ee(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (gt(n)) return bu(e, n, t);
  }
  return t;
}
function Nd(e, t, n, r, o, l, a, i, c) {
  return (
    (e = qa(n, r, !0, e, o, l, a, i, c)),
    (e.context = bd(null)),
    (n = e.current),
    (r = ct()),
    (o = Nn(n)),
    (l = tn(r, o)),
    (l.callback = t ?? null),
    wn(n, l, o),
    (e.current.lanes = o),
    fs(e, o, r),
    xt(e, r),
    e
  );
}
function Po(e, t, n, r) {
  var o = t.current,
    l = ct(),
    a = Nn(o);
  return (
    (n = bd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tn(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wn(o, t, a)),
    e !== null && (Gt(e, o, a, l), zs(e, o, a)),
    a
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ya(e, t) {
  ac(e, t), (e = e.alternate) && ac(e, t);
}
function Sm() {
  return null;
}
var jd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xa(e) {
  this._internalRoot = e;
}
Io.prototype.render = Xa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(ee(409));
  Po(e, t, null, null);
};
Io.prototype.unmount = Xa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      Po(null, e, null, null);
    }),
      (t[rn] = null);
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = eu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
    fn.splice(n, 0, e), n === 0 && nu(e);
  }
};
function Ka(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ic() {}
function Cm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var h = yo(a);
        l.call(h);
      };
    }
    var a = Nd(t, r, e, 0, null, !1, !1, "", ic);
    return (
      (e._reactRootContainer = a),
      (e[rn] = a.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var h = yo(c);
      i.call(h);
    };
  }
  var c = qa(e, 0, !1, null, null, !1, !1, "", ic);
  return (
    (e._reactRootContainer = c),
    (e[rn] = c.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      Po(t, c, n, r);
    }),
    c
  );
}
function To(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = yo(a);
        i.call(c);
      };
    }
    Po(t, a, e, o);
  } else a = Cm(n, t, e, o, r);
  return yo(a);
}
Jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          (ga(t, n | 1), xt(t, Ve()), !(Ie & 6) && ((br = Ve() + 500), Dn()));
      }
      break;
    case 13:
      zn(function () {
        var r = sn(e, 1);
        if (r !== null) {
          var o = ct();
          Gt(r, e, 1, o);
        }
      }),
        Ya(e, 1);
  }
};
xa = function (e) {
  if (e.tag === 13) {
    var t = sn(e, 134217728);
    if (t !== null) {
      var n = ct();
      Gt(t, e, 134217728, n);
    }
    Ya(e, 134217728);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = Nn(e),
      n = sn(e, t);
    if (n !== null) {
      var r = ct();
      Gt(n, e, t, r);
    }
    Ya(e, t);
  }
};
eu = function () {
  return Te;
};
tu = function (e, t) {
  var n = Te;
  try {
    return (Te = e), t();
  } finally {
    Te = n;
  }
};
Sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = So(r);
            if (!o) throw Error(ee(90));
            Ic(r), xl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && cr(e, !!n.multiple, t, !1);
  }
};
Bc = Ha;
Gc = zn;
var km = { usingClientEntryPoint: !1, Events: [ms, nr, So, Uc, zc, Ha] },
  Tr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _m = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || Sm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rs.isDisabled && Rs.supportsFiber)
    try {
      (wo = Rs.inject(_m)), (qt = Rs);
    } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ka(t)) throw Error(ee(200));
  return jm(e, t, null, n);
};
jt.createRoot = function (e, t) {
  if (!Ka(e)) throw Error(ee(299));
  var n = !1,
    r = "",
    o = jd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qa(e, 1, !1, null, null, n, !1, r, o)),
    (e[rn] = t.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    new Xa(t)
  );
};
jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(ee(188))
      : ((e = Object.keys(e).join(",")), Error(ee(268, e)));
  return (e = Vc(t)), (e = e === null ? null : e.stateNode), e;
};
jt.flushSync = function (e) {
  return zn(e);
};
jt.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(ee(200));
  return To(null, e, t, !0, n);
};
jt.hydrateRoot = function (e, t, n) {
  if (!Ka(e)) throw Error(ee(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = jd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Nd(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[rn] = t.current),
    ns(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Io(t);
};
jt.render = function (e, t, n) {
  if (!Ro(t)) throw Error(ee(200));
  return To(null, e, t, !1, n);
};
jt.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(ee(40));
  return e._reactRootContainer
    ? (zn(function () {
        To(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[rn] = null);
        });
      }),
      !0)
    : !1;
};
jt.unstable_batchedUpdates = Ha;
jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(ee(200));
  if (e == null || e._reactInternals === void 0) throw Error(ee(38));
  return To(e, t, n, !1, r);
};
jt.version = "18.3.1-next-f1338f8080-20240426";
function Sd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sd);
    } catch (e) {
      console.error(e);
    }
}
Sd(), (Sc.exports = jt);
var Dm = Sc.exports,
  Cd,
  cc = Dm;
(Cd = cc.createRoot), cc.hydrateRoot;
class Mm {
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
    const o = `${(await this.loadConfig()).domain}${t}`,
      l = {
        method: "POST",
        headers: { "Content-Type": "application/json", ...n.headers },
        ...n,
      },
      a = new Date().toISOString();
    if (
      (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
      console.log(`📤 API Request [${a}]`),
      console.log("🔗 Endpoint:", t),
      console.log("🌐 Full URL:", o),
      console.log("🔧 Method:", l.method),
      console.log("📋 Headers:", l.headers),
      l.body)
    ) {
      console.log("📦 Request Body:", l.body);
      try {
        const i = JSON.parse(l.body);
        console.log("📦 Parsed Body:", i);
      } catch {
        console.log("📦 Body (raw):", l.body);
      }
    }
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    try {
      const i = await fetch(o, l);
      if (
        (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log(`📥 API Response [${new Date().toISOString()}]`),
        console.log("🔗 Endpoint:", t),
        console.log("📊 Status:", i.status, i.statusText),
        console.log(
          "📋 Response Headers:",
          Object.fromEntries(i.headers.entries())
        ),
        !i.ok)
      )
        throw (
          (console.log("❌ HTTP Error:", i.status),
          console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
          new Error(`HTTP error! status: ${i.status}`))
        );
      const c = await i.json();
      return (
        console.log("✅ Response Data:", c),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        c
      );
    } catch (i) {
      throw (
        (console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log("❌ API Request Failed"),
        console.log("🔗 Endpoint:", t),
        console.log("💥 Error:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i)
      );
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
      let o = r.Data;
      if (
        ((o = o.filter((l) => l.DRUGKIND === n)),
        (o = o.filter((l) => l.FILE_STATUS !== "關檔中")),
        t.trim())
      ) {
        const l = t.toLowerCase();
        o = o.filter(
          (a) =>
            (a.CODE && a.CODE.toLowerCase().includes(l)) ||
            (a.CHT_NAME && a.CHT_NAME.toLowerCase().includes(l)) ||
            (a.NAME && a.NAME.toLowerCase().includes(l))
        );
      }
      return o;
    } catch (r) {
      return console.error("Medicine search failed:", r), [];
    }
  }
  async getMedMapByDepartment(t) {
    const n = { Data: {}, ValueAry: [t] };
    return this.request("/api/medMap/get_medMap_by_department", {
      method: "POST",
      body: JSON.stringify(n),
    });
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
    const o = { ServerName: t, ServerType: n, Data: r };
    return this.request("/api/device/update_epd266_storages", {
      method: "POST",
      body: JSON.stringify(o),
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
  async updateSubSection(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_sub_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateEpd266Medcode(t, n, r, o) {
    const l = {
      ServerName: t,
      ServerType: n,
      ValueAry: [`code=${r}`],
      Data: o,
    };
    return this.request("/api/device/update_epd266_medcode", {
      method: "POST",
      body: JSON.stringify(l),
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
  async addStock(t) {
    const n = { Data: t };
    return (
      console.log(n),
      this.request("/api/medMap/add_stock", {
        method: "POST",
        body: JSON.stringify(n),
      })
    );
  }
  async updateStock(t) {
    const n = { Data: t };
    return this.request("/api/medMap/update_stock", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedMap(t, n, r) {
    const o = { ValueAry: [t, n, r, "0,0"] };
    return this.request("/api/medMap/add_medMap", {
      method: "POST",
      body: JSON.stringify(o),
    });
  }
  async scanBarcode(t) {
    const o = `${
        (await this.loadConfig()).ai || "https://www.kutech.tw:3000"
      }/barcode`,
      l = new FormData();
    l.append("file", t),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
      console.log(`📤 AI Barcode Scan Request [${new Date().toISOString()}]`),
      console.log("🔗 URL:", o),
      console.log("📷 Image File:", t.name, t.size, "bytes"),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    try {
      const a = await fetch(o, { method: "POST", body: l }),
        i = await a.json();
      return (
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log(
          `📥 AI Barcode Scan Response [${new Date().toISOString()}]`
        ),
        console.log("📊 Status:", a.status),
        console.log("📦 Response Data:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i
      );
    } catch (a) {
      return console.error("❌ AI Barcode Scan Error:", a), { results: [] };
    }
  }
  async searchByBarCode(t) {
    const n = { Value: t };
    return this.request("/api/MED_page/serch_by_BarCode", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async addMedClouds(t, n, r, o) {
    let l = o;
    l.push(t);
    const a = {
      Data: [{ BARCODE: l, CODE: n, BARCODE2: r || JSON.stringify([t]) }],
    };
    return this.request("/api/MED_page/add_med_clouds", {
      method: "POST",
      body: JSON.stringify(a),
    });
  }
  resetConfig() {
    (this.config = null), (this.isConfigLoaded = !1);
  }
  async getRequisitionByTime(t, n) {
    const r = { ValueAry: [t, n] };
    return this.request("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async getDistributionByTime(t, n) {
    const r = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async updateRequisitionNotice(t, n) {
    const r = { Data: { GUID: t, notice: n } };
    return this.request("/api/materialRequisition/update_notice", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async updateDistributionNotice(t, n) {
    const r = { ValueAry: [t, n] };
    return (
      console.log(r),
      this.request("/api/drugStotreDistribution/update_notice", {
        method: "POST",
        body: JSON.stringify(r),
      })
    );
  }
  async updateRequisitionActualQuantity(t, n) {
    const r = { Data: { GUID: t, actualQuantity: n } };
    return this.request("/api/materialRequisition/update_actual_quantity", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async updateRequisitionByGuid(t) {
    const n = { Data: [t] };
    return this.request("/api/materialRequisition/update_by_guid", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async updateDistributionActualQuantity(t, n) {
    const r = { ValueAry: [t, n] };
    return this.request("/api/drugStotreDistribution/update_actqty_by_guid", {
      method: "POST",
      body: JSON.stringify(r),
    });
  }
  async updateDistributionByGuid(t) {
    const n = { Data: [t] };
    return this.request("/api/drugStotreDistribution/update_by_guid", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
}
const ke = new Mm();
class Em {
  convertMedMapApiToFakeData(t) {
    console.log("🔄 開始轉換 MedMap API 資料到假資料格式"),
      console.log("📥 原始 API 資料:", t);
    try {
      Array.isArray(t) ||
        (console.warn("⚠️ API 資料不是陣列格式，嘗試包裝成陣列"), (t = [t]));
      const r = t
        .map((o, l) => this.convertSingleDepartment(o, l))
        .filter((o) => {
          if (Object.keys(o).length !== 0) return o;
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
      const o = {
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
          t.medMap_Section.forEach((l, a) => {
            let i;
            l.absolute_position
              ? (i = l.absolute_position.split(","))
              : (i = [0, 0]),
              (o.contents[a] = {
                GUID: l.GUID,
                MASTER_GUID: l.Master_GUID,
                name: `櫃體${a}`,
                type: "parent_container",
                class: 1,
                gird_position: l.position,
                position: { x: i[0], y: i[1] },
                serverName: t.sys_ServerSetting.name,
                serverType: t.sys_ServerSetting.type,
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, h) => {
                  let d = {
                    GUID: c.GUID,
                    MASTER_GUID: c.Master_GUID,
                    name: c.name,
                    type: "sub_container",
                    class: 2,
                    gird_position: c.position,
                    contents: [],
                    serverName: t.sys_ServerSetting.name,
                    serverType: t.sys_ServerSetting.type,
                    oriMaxCol: 0,
                  };
                  o.contents[a].contents[h] = d;
                  let g = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((p, b) => {
                      let v = {
                        GUID: p.GUID,
                        MASTER_GUID: p.Master_GUID,
                        name: `層架_${b}`,
                        class: 3,
                        gird_position: p.position,
                        serverName: p.serverName || "",
                        serverType: p.serverType || "",
                        type: p.type,
                        contents: [],
                      };
                      if (
                        (v.serverName &&
                          (v.serverName = t.sys_ServerSetting.name),
                        v.serverType &&
                          (v.serverType = t.sys_ServerSetting.type),
                        p.type == "dispensing_shelves" || p.type == "shelf")
                      )
                        p.type == "shelf" && (v.type = "dispensing_shelves"),
                          Array.isArray(p.medMapBox) &&
                            p.medMapBox.forEach((k, u) => {
                              let f = {
                                  GUID: k.GUID,
                                  MASTER_GUID: k.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: k.position,
                                  ip: k.ip_box,
                                  box_type: "",
                                  width: k.width,
                                  height: k.height,
                                  serverType: k.serverType,
                                  serverName: k.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                S = p.position.split(","),
                                $ = k.position.split(",");
                              if (k.storage) {
                                switch (
                                  ((f.device_type = k.storage.DeviceType),
                                  (f.storage = k.storage),
                                  +f.device_type)
                                ) {
                                  case 10:
                                    f.box_type = "2.9";
                                    break;
                                  case 118:
                                    f.box_type = "2.13";
                                    break;
                                  case 13:
                                    f.box_type = "4.2";
                                    break;
                                }
                                (x.name = k.storage.Name),
                                  (x.code = k.storage.Code),
                                  (x.cht_name = k.storage.ChineseName),
                                  (x.SKDIACODE = k.storage.SKDIACODE),
                                  (x.qty = k.storage.StorageName),
                                  (x.stockCol = `${+S[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+$[1] + 1}`);
                              } else
                                (f.device_type = 10),
                                  (f.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+S[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+$[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (f.med_info[0] = x),
                                v.contents.push(f);
                            });
                      else {
                        (v.type = "store_shelves"),
                          (v.ip = p.ip_light),
                          (v.width = p.width),
                          (v.height = p.height);
                        const k = p.medMapStock.sort((u, f) => {
                          const [x] = u.location.split(",").map(Number),
                            [S] = f.location.split(",").map(Number);
                          return x - S;
                        });
                        (v.medMapStock = k),
                          (v.name = p.name),
                          k.forEach((u, f) => {
                            let x = p.position.split(",");
                            if (u.code) {
                              let S = {};
                              (S.name = u.name),
                                (S.code = u.code),
                                (S.cht_name = ""),
                                (S.SKDIACODE = u.material_no),
                                (S.qty = u.qty),
                                (S.stockCol = `${+x[0] + 1}`),
                                (S.stockRow = `${+x[1] + 1}`),
                                (S.stock = `${f + 1}`),
                                o.contents[a].med_list.push(S);
                            }
                          });
                      }
                      let N = p.position.split(",")[1];
                      g < +N &&
                        ((g = +N), (o.contents[a].contents[h].oriMaxCol = +g)),
                        o.contents[a].contents[h].contents.push(v);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((p, b) => {
                        let v = {
                          GUID: p.GUID,
                          MASTER_GUID: p.Master_GUID,
                          name: `抽屜 ${b}`,
                          class: 3,
                          gird_position: p.position,
                          ip: p.ip_drawer,
                          serverName: p.serverName,
                          serverType: p.serverType,
                        };
                        v.serverName &&
                          (v.serverName = t.sys_ServerSetting.name),
                          v.serverType &&
                            (v.serverType = t.sys_ServerSetting.type),
                          p.drawer
                            ? ((v.drawer = p.drawer),
                              p.drawer.Boxes &&
                                ((v.type = "grid_draw"),
                                (v.name = p.drawer.Name),
                                (v.Boxes = []),
                                Array.isArray(p.drawer.Boxes)
                                  ? p.drawer.Boxes.forEach((u, f) => {
                                      let x = [];
                                      Array.isArray(u) &&
                                        u.forEach((S, $) => {
                                          let M = {
                                            Row: S.Row,
                                            Column: S.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: S.Slave,
                                            SlaveBox_Row: S.SlaveBox_Row,
                                            SlaveBox_Column: S.SlaveBox_Column,
                                            MasterBox_Column:
                                              S.MasterBox_Column,
                                            MasterBox_Row: S.MasterBox_Row,
                                            Name: S.Name,
                                            Code: S.Code,
                                            ChineseName: S.ChineseName,
                                            GUID: S.GUID,
                                          };
                                          x.push(M),
                                            S.Code &&
                                              o.contents[a].med_list.push(
                                                S.Code
                                              );
                                        }),
                                        v.Boxes.push(x);
                                    })
                                  : (v.Boxes = p.drawer.Boxes)))
                            : ((v.type = "list_draw"),
                              (v.name = `清單抽屜 ${b}`));
                        let N = p.position.split(",")[1];
                        g < +N &&
                          ((g = +N),
                          (o.contents[a].contents[h].oriMaxCol = +g)),
                          o.contents[a].contents[h].contents.push(v);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, r) {
    var l, a, i, c, h;
    const o = {
      GUID: t.GUID || t.guid || `comp_${n}_${Date.now()}`,
      type: this.mapComponentType(t.type || t.component_type || "unknown"),
      name: t.name || t.component_name || `組件_${n}`,
      position: {
        x: ((l = t.position) == null ? void 0 : l.x) || t.x || 50 + n * 200,
        y: ((a = t.position) == null ? void 0 : a.y) || t.y || 50 + n * 150,
      },
      dimensions: {
        width:
          ((i = t.dimensions) == null ? void 0 : i.width) || t.width || 180,
        height:
          ((c = t.dimensions) == null ? void 0 : c.height) || t.height || 120,
        depth: ((h = t.dimensions) == null ? void 0 : h.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      MASTER_GUID: r,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((d, g) =>
          this.convertSingleComponent(d, g, o.GUID)
        )),
      Object.keys(t).forEach((d) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(d) || (o[d] = t[d]);
      }),
      o
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
      totalComponents: n.reduce((o, l) => {
        var a;
        return o + (((a = l.components) == null ? void 0 : a.length) || 0);
      }, 0),
      departmentTypes: [...new Set(n.map((o) => o.type))],
      componentTypes: [
        ...new Set(
          n.flatMap((o) => {
            var l;
            return (
              ((l = o.components) == null ? void 0 : l.map((a) => a.type)) || []
            );
          })
        ),
      ],
    };
    return console.log("📊 資料轉換報告:", r), r;
  }
}
const Et = new Em(),
  Pm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Et },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kd = m.createContext(void 0),
  Im = ({ children: e }) => {
    const [t, n] = m.useState(!1),
      [r, o] = m.useState(null),
      [l, a] = m.useState(!1),
      [i, c] = m.useState(null),
      [h, d] = m.useState(null),
      [g, p] = m.useState("medicine"),
      [b, v] = m.useState(!1),
      [N, k] = m.useState(0),
      [u, f] = m.useState({ message: "", type: "success", isVisible: !1 }),
      [x, S] = m.useState(!1),
      [$, M] = m.useState(null),
      [I, j] = m.useState("edit"),
      [P, w] = m.useState(!1),
      [O, _] = m.useState(null),
      [E, T] = m.useState(!1),
      [X, U] = m.useState(null),
      [G, D] = m.useState(!1),
      [J, re] = m.useState(!1),
      [K, q] = m.useState(null),
      [je, pe] = m.useState(!1),
      [ye, F] = m.useState(null),
      [le, ce] = m.useState(!1),
      [R, oe] = m.useState(null),
      [be, B] = m.useState(!1),
      [te, ve] = m.useState(null),
      [L, C] = m.useState(null),
      [A, H] = m.useState("add"),
      [se, ue] = m.useState(!1),
      [xe, Ne] = m.useState([]),
      [Se, _e] = m.useState([]),
      [ae, me] = m.useState(!1),
      [we, De] = m.useState(!1),
      [Je, Ce] = m.useState(""),
      [qe, Ue] = m.useState(!1),
      [Tt, y] = m.useState(""),
      [V, Q] = m.useState(!1),
      [z, ne] = m.useState(null),
      [W, de] = m.useState(null),
      ie = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      Z = m.useCallback(() => {
        k((Me) => Me + 1);
      }, []),
      Y = m.useCallback((Me, Ct) => {
        f({ message: Me, type: Ct, isVisible: !0 });
      }, []),
      ge = m.useCallback(() => {
        f((Me) => ({ ...Me, isVisible: !1 }));
      }, []),
      he = (Me) => {
        M(Me), j("edit"), S(!0);
      },
      Pe = () => {
        const Me = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        M(Me), j("add"), S(!0);
      },
      Re = () => {
        S(!1), M(null), j("edit");
      },
      At = (Me) => {
        _(Me), w(!0);
      },
      Fn = () => {
        w(!1), _(null);
      },
      kr = (Me) => {
        U(Me), T(!0);
      },
      Td = () => {
        T(!1), U(null);
      },
      Ad = (Me) => {
        q(Me), re(!0);
      },
      Od = () => {
        re(!1), q(null);
      },
      $d = (Me) => {
        F(Me), pe(!0);
      },
      Ld = () => {
        pe(!1), F(null);
      },
      Ud = (Me) => {
        oe(Me), ce(!0);
      },
      zd = () => {
        ce(!1), oe(null);
      },
      Bd = (Me) => {
        ve(Me), C(null), H("add"), B(!0);
      },
      Gd = (Me, Ct) => {
        ve(Me), C(Ct), H("edit"), B(!0);
      },
      Fd = () => {
        B(!1), ve(null), C(null), H("add");
      },
      Hd = () => {
        ue(!0);
      },
      Vd = () => {
        ue(!1);
      },
      Wd = (Me = "") => {
        Ce(Me), De(!0);
      },
      Qd = () => {
        De(!1);
      },
      qd = (Me) => {
        y(Me), Ue(!0);
      },
      Yd = () => {
        Ue(!1), y("");
      },
      Xd = (Me, Ct) => {
        ne(Me), de(Ct || null), Q(!0);
      },
      Kd = () => {
        Q(!1), ne(null), de(null);
      },
      Jd = m.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), D(!0);
        try {
          const Me = await ke.getMedMapByDepartment(i);
          if (Me.Code === 200 && Me.Data) {
            console.log("📡 重新載入成功:", Me.Data);
            const Ct = Et.convertMedMapApiToFakeData(Me.Data);
            if (!Et.validateConvertedData(Ct)) {
              console.error("❌ 轉換後的資料驗證失敗"), d(null);
              return;
            }
            d(Ct), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Me), d(null);
        } catch (Me) {
          console.error("💥 重新載入藥品地圖資料失敗:", Me), d(null);
        } finally {
          D(!1);
        }
      }, [i, D, d]),
      Zd = m.useCallback((Me, Ct) => {
        d(
          (Hn) =>
            Hn &&
            Hn.map((Za) => {
              const Vn = { ...Za };
              return (
                Vn.contents &&
                  (Vn.contents = Vn.contents.map((Wn) => {
                    const Qn = { ...Wn };
                    return (
                      Qn.contents &&
                        (Qn.contents = Qn.contents.map((qn) => {
                          const Yn = { ...qn };
                          return (
                            Yn.contents &&
                              (Yn.contents = Yn.contents.map((an) => {
                                if (an.GUID === Me) {
                                  const Ot = { ...an };
                                  return (
                                    Ot.medMapStock || (Ot.medMapStock = []),
                                    (Ot.medMapStock = [...Ot.medMapStock, Ct]),
                                    Ot
                                  );
                                }
                                return an;
                              })),
                            Yn
                          );
                        })),
                      Qn
                    );
                  })),
                Vn
              );
            })
        );
      }, []),
      ef = m.useCallback((Me, Ct, Hn) => {
        d(
          (gs) =>
            gs &&
            gs.map((Vn) => {
              const Wn = { ...Vn };
              return (
                Wn.contents &&
                  (Wn.contents = Wn.contents.map((Qn) => {
                    const qn = { ...Qn };
                    return (
                      qn.contents &&
                        (qn.contents = qn.contents.map((Yn) => {
                          const an = { ...Yn };
                          return (
                            an.contents &&
                              (an.contents = an.contents.map((Ot) => {
                                if (Ot.GUID === Me && Ot.medMapStock) {
                                  const ei = { ...Ot };
                                  return (
                                    (ei.medMapStock = Ot.medMapStock.map((Oo) =>
                                      Oo.GUID === Ct ? { ...Oo, ...Hn } : Oo
                                    )),
                                    ei
                                  );
                                }
                                return Ot;
                              })),
                            an
                          );
                        })),
                      qn
                    );
                  })),
                Wn
              );
            })
        );
      }, []);
    return s.jsx(kd.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: r,
        setCurrentUser: o,
        logout: ie,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: b,
        setIsAdminMode: v,
        apiDepartmentData: h,
        setApiDepartmentData: d,
        viewMode: g,
        setViewMode: p,
        refreshTrigger: N,
        triggerRefresh: Z,
        addStockToShelf: Zd,
        notification: u,
        showNotification: Y,
        hideNotification: ge,
        medBoxModalOpen: x,
        setMedBoxModalOpen: S,
        selectedMedBox: $,
        setSelectedMedBox: M,
        openMedBoxModal: he,
        closeMedBoxModal: Re,
        modalMode: I,
        setModalMode: j,
        openAddMedBoxModal: Pe,
        listDrawModalOpen: P,
        setListDrawModalOpen: w,
        selectedListDraw: O,
        setSelectedListDraw: _,
        openListDrawModal: At,
        closeListDrawModal: Fn,
        gridDrawModalOpen: E,
        setGridDrawModalOpen: T,
        selectedGridDraw: X,
        setSelectedGridDraw: U,
        openGridDrawModal: kr,
        closeGridDrawModal: Td,
        isLoadingMedMap: G,
        setIsLoadingMedMap: D,
        addParentContainerModalOpen: J,
        setAddParentContainerModalOpen: re,
        selectedDepartmentForAdd: K,
        setSelectedDepartmentForAdd: q,
        openAddParentContainerModal: Ad,
        closeAddParentContainerModal: Od,
        addShelfDrawContainerModalOpen: je,
        setAddShelfDrawContainerModalOpen: pe,
        selectedSubContainerForAdd: ye,
        setSelectedSubContainerForAdd: F,
        openAddShelfDrawContainerModal: $d,
        closeAddShelfDrawContainerModal: Ld,
        addSubContainerModalOpen: le,
        setAddSubContainerModalOpen: ce,
        selectedParentContainerForAdd: R,
        setSelectedParentContainerForAdd: oe,
        openAddSubContainerModal: Ud,
        closeAddSubContainerModal: zd,
        addStoreItemModalOpen: be,
        setAddStoreItemModalOpen: B,
        selectedStoreShelfForAdd: te,
        setSelectedStoreShelfForAdd: ve,
        selectedStockItemForEdit: L,
        setSelectedStockItemForEdit: C,
        storeItemModalMode: A,
        setStoreItemModalMode: H,
        openAddStoreItemModal: Bd,
        openEditStoreItemModal: Gd,
        closeAddStoreItemModal: Fd,
        updateStockInShelf: ef,
        addDepartmentModalOpen: se,
        setAddDepartmentModalOpen: ue,
        allDepartmentsList: xe,
        setAllDepartmentsList: Ne,
        openAddDepartmentModal: Hd,
        closeAddDepartmentModal: Vd,
        reloadMedMapData: Jd,
        qrCodeScannerModalOpen: we,
        qrCodeScannerMode: Je,
        setQRCodeScannerModalOpen: De,
        openQRCodeScannerModal: Wd,
        closeQRCodeScannerModal: Qd,
        addBarcodeModalOpen: qe,
        setAddBarcodeModalOpen: Ue,
        openAddBarcodeModal: qd,
        closeAddBarcodeModal: Yd,
        initialBarcodeValue: Tt,
        containerDetailModalOpen: V,
        setContainerDetailModalOpen: Q,
        selectedContainerForDetail: z,
        setSelectedContainerForDetail: ne,
        highlightedMedicineCode: W,
        setHighlightedMedicineCode: de,
        openContainerDetailModal: Xd,
        closeContainerDetailModal: Kd,
        medicineList: Se,
        setMedicineList: _e,
        isLoadingMedicines: ae,
        setIsLoadingMedicines: me,
      },
      children: e,
    });
  },
  Ke = () => {
    const e = m.useContext(kd);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  Rm = {
    "zh-TW": {
      "nav.title": "藥品地圖",
      "nav.home": "返回首頁",
      "nav.expandSidebar": "展開側邊欄",
      "nav.collapseSidebar": "收合側邊欄",
      "topbar.medicine": "藥品",
      "topbar.department": "部門",
      "topbar.language": "中文",
      "topbar.logout": "登出",
      "sidebar.drugMap": "藥品地圖",
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
      "status.loadingMedMapData": "正在載入藥品地圖資料...",
      "status.loadingMedMapHint": "請稍候，系統正在處理部門資料",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "login.title": "藥品地圖系統",
      "login.subtitle": "請登入以繼續使用系統",
      "login.userId": "帳號",
      "login.userIdPlaceholder": "請輸入使用者帳號",
      "login.password": "密碼",
      "login.passwordPlaceholder": "請輸入密碼",
      "login.loginButton": "登入",
      "login.loggingIn": "登入中...",
    },
    en: {
      "nav.title": "Drug Map",
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
  _d = m.createContext(void 0),
  Tm = ({ children: e }) => {
    const [t, n] = m.useState("zh-TW"),
      r = (o) => Rm[t][o] || o;
    return s.jsx(_d.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  },
  ft = () => {
    const e = m.useContext(_d);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Am = {
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
 */ const Om = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Ae = (e, t) => {
    const n = m.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...h
        },
        d
      ) =>
        m.createElement(
          "svg",
          {
            ref: d,
            ...Am,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Om(e)}`, i].join(" "),
            ...h,
          },
          [
            ...t.map(([g, p]) => m.createElement(g, p)),
            ...(Array.isArray(c) ? c : [c]),
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
 */ const $m = Ae("Archive", [
  [
    "rect",
    { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" },
  ],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uc = Ae("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = Ae("Building2", [
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
 */ const Nr = Ae("Camera", [
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
 */ const Lm = Ae("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = Ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = Ae("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = Ae("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = Ae("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = Ae("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = Ae("Globe", [
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
 */ const Ed = Ae("Grid3x3", [
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
 */ const Ja = Ae("Layers", [
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
 */ const Hm = Ae("ListX", [
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
 */ const ra = Ae("List", [
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
 */ const Pt = Ae("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pd = Ae("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = Ae("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = Ae("Package", [
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
 */ const ul = Ae("Pen", [
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
 */ const Qm = Ae("Pill", [
  [
    "path",
    {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      key: "wa1lgi",
    },
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wt = Ae("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jt = Ae("Settings", [
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
 */ const Id = Ae("Unlock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = Ae("Warehouse", [
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
 */ const Ym = Ae("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qe = Ae("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Xm = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Ke(),
      { t: n } = ft();
    return s.jsx("div", {
      className: "fixed top-4 left-4 z-30",
      children: s.jsx("nav", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1",
        children: s.jsxs("div", {
          className: "flex items-center",
          children: [
            s.jsx("a", {
              href: "../frontpage",
              className:
                "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
              title: n("nav.home"),
              children: s.jsx(Ja, { className: "w-5 h-5" }),
            }),
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
                ? s.jsx(ra, { className: "w-6 h-6" })
                : s.jsx(ra, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  Km = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: r,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Ke(),
      { language: c, setLanguage: h, t: d } = ft(),
      [g, p] = Qs.useState(!1),
      b = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      v = Qs.useMemo(() => {
        if (!o || !i || !a) return !1;
        const N = a.map((f) => f.name);
        return (
          i
            .filter((f) => f["department_type "] === o)
            .filter((f) => !N.includes(f.name)).length > 0
        );
      }, [o, i, a]);
    return s.jsx("div", {
      className:
        "fixed top-20 left-4 right-auto sm:top-4 sm:left-auto sm:right-4 z-30",
      children: s.jsx("div", {
        className:
          "bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg px-2 py-1 sm:px-3 sm:py-2",
        children: s.jsxs("div", {
          className:
            "flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row relative",
          children: [
            s.jsxs("div", {
              className: "flex items-center",
              children: [
                s.jsxs("div", {
                  className: "flex items-center bg-gray-100 rounded-lg p-1",
                  children: [
                    s.jsxs("button", {
                      onClick: () => t("medicine"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "medicine"
                          ? "bg-white text-green-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        s.jsx(Qm, { className: "w-4 h-4" }),
                        s.jsx("span", {
                          className: "text-sm font-medium",
                          children: d("topbar.medicine"),
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      onClick: () => t("department"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${
                        e === "department"
                          ? "bg-white text-blue-600 shadow-sm scale-105"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"
                      }`,
                      children: [
                        s.jsx(Dd, { className: "w-4 h-4" }),
                        s.jsx("span", {
                          className: "text-sm font-medium",
                          children: d("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("button", {
                  onClick: () => p(!g),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: g
                    ? s.jsx(zm, { className: "w-4 h-4" })
                    : s.jsx(Md, { className: "w-4 h-4" }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              g
                ? "flex opacity-100 max-h-96"
                : "hidden opacity-0 max-h-0 lg:flex lg:opacity-100 lg:max-h-none"
            }
          `,
              children: [
                s.jsx("div", {
                  className: "mx-1 w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                o &&
                  v &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsxs("button", {
                        onClick: () => l(),
                        className:
                          "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors border border-green-700",
                        children: [
                          s.jsx(wt, { className: "w-4 h-4" }),
                          s.jsx("span", {
                            className: "text-sm font-medium",
                            children: "新增部門",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                      }),
                    ],
                  }),
                s.jsxs("button", {
                  onClick: b,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    s.jsx(Fm, { className: "w-4 h-4" }),
                    s.jsx("span", {
                      className: "text-sm font-medium",
                      children: d("topbar.language"),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "w-full lg:w-px lg:h-6 h-px bg-gray-300",
                }),
                r &&
                  s.jsx("div", {
                    className:
                      "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg",
                    children: s.jsx("span", {
                      className: "text-sm font-medium text-gray-700",
                      children: r.Name,
                    }),
                  }),
                s.jsxs("button", {
                  onClick: n,
                  className:
                    "w-full lg:w-auto flex items-center space-x-2 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200 rounded-lg transition-colors justify-center",
                  children: [
                    s.jsx(Vm, { className: "w-4 h-4" }),
                    s.jsx("span", {
                      className: "text-sm font-medium",
                      children: d("topbar.logout"),
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
  Jm = ({ isOpen: e, onClose: t }) => {
    const [n, r] = m.useState("");
    m.useEffect(() => {
      if (e) {
        const a = localStorage.getItem("medMap_setting");
        if (a)
          try {
            const i = JSON.parse(a);
            i.light_sec && r(i.light_sec);
          } catch (i) {
            console.error("讀取設定失敗:", i);
          }
      }
    }, [e]);
    const o = () => {
        const a = { light_sec: n };
        localStorage.setItem("medMap_setting", JSON.stringify(a)),
          console.log("設定已儲存:", a),
          t();
      },
      l = (a) => {
        const i = a.target.value;
        (i === "" || /^\d+$/.test(i)) && r(i);
      };
    return e
      ? s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center p-4",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            s.jsxs("div", {
              className:
                "relative bg-white rounded-xl shadow-2xl w-full max-w-md",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "設定",
                    }),
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "p-6",
                  children: s.jsx("div", {
                    className: "space-y-4",
                    children: s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          htmlFor: "light-seconds",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "亮燈秒數設定",
                        }),
                        s.jsx("input", {
                          id: "light-seconds",
                          type: "text",
                          inputMode: "numeric",
                          value: n,
                          onChange: l,
                          placeholder: "請輸入秒數",
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                        }),
                        s.jsx("p", {
                          className: "mt-1 text-xs text-gray-500",
                          children: "設定亮燈持續時間（秒）",
                        }),
                      ],
                    }),
                  }),
                }),
                s.jsxs("div", {
                  className:
                    "flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl",
                  children: [
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: o,
                      className:
                        "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                      children: "儲存",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  Zm = () => {
    const {
        sidebarOpen: e,
        setSidebarOpen: t,
        selectedDepartmentType: n,
        setSelectedDepartmentType: r,
        setApiDepartmentData: o,
        isLoadingMedMap: l,
        setIsLoadingMedMap: a,
        setAllDepartmentsList: i,
        isAdminMode: c,
        setIsAdminMode: h,
      } = Ke(),
      { t: d } = ft(),
      [g, p] = m.useState(new Set()),
      [b, v] = m.useState([]),
      [N, k] = m.useState(!0),
      [u, f] = m.useState([]),
      [x, S] = m.useState(!1),
      $ = () => {
        c
          ? h(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? h(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    m.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const O = await ke.getDepartments();
          O.Code === 200 && O.Data
            ? (console.log(O.Data), v(O.Data), i(O.Data))
            : (console.error("API returned error:", O), v([]), i([]));
        } catch (O) {
          console.error("Failed to fetch department data:", O), v([]), i([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const M = b.reduce((w, O) => {
        const _ = O["department_type "];
        return w[_] || (w[_] = []), w[_].push(O), w;
      }, {}),
      I = (w) => {
        const O = new Set(g);
        O.has(w) ? O.delete(w) : O.add(w), p(O);
      },
      j = async (w) => {
        console.log("🏢 選擇部門:", w), r(w), await P(w), t(!1);
      },
      P = async (w) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", w), a(!0);
        try {
          const O = await ke.getMedMapByDepartment(w);
          if (O.Code === 200 && O.Data) {
            console.log("📡 API 回傳成功:", O.Data);
            const _ = Et.convertMedMapApiToFakeData(O.Data);
            if (!Et.validateConvertedData(_)) {
              console.error("❌ 轉換後的資料驗證失敗"), f([]);
              return;
            }
            const T = Et.generateConversionReport(O.Data, _);
            f(_),
              o(_),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", _),
              console.log("📋 轉換報告:", T);
          } else console.error("❌ API 回傳錯誤:", O), f([]), o(null);
        } catch (O) {
          console.error("💥 取得藥品地圖資料失敗:", O), f([]), o(null);
        } finally {
          a(!1);
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
                          title: d("nav.home"),
                          children: s.jsx(Ja, { className: "w-5 h-5" }),
                        }),
                        s.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: d("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: d("sidebar.closeSidebar"),
                      children: s.jsx(Hm, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              s.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: N
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
                          children: d("sidebar.departmentCategories"),
                        }),
                        Object.entries(M).map(([w, O]) =>
                          s.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                s.jsxs("button", {
                                  onClick: () => j(w),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === w
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        w === "B1F"
                                          ? s.jsx(Dd, { className: "w-4 h-4" })
                                          : s.jsx(qm, { className: "w-4 h-4" }),
                                        s.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            s.jsx("div", {
                                              className: "font-medium",
                                              children: w,
                                            }),
                                            s.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                O.length,
                                                " ",
                                                d("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsx("div", {
                                      onClick: (_) => {
                                        _.stopPropagation(), I(w);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: g.has(w)
                                        ? s.jsx(Md, { className: "w-4 h-4" })
                                        : s.jsx(Um, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                g.has(w) &&
                                  s.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: O.map((_) =>
                                      s.jsx(
                                        "div",
                                        {
                                          className:
                                            "p-3 text-base text-gray-600 bg-gray-50 rounded-lg",
                                          children: s.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              s.jsx("div", {
                                                className:
                                                  "font-medium text-gray-800",
                                                children: _.name,
                                              }),
                                              s.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  _.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: _.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        _.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            w
                          )
                        ),
                      ],
                    }),
              }),
              s.jsx("div", {
                className:
                  "flex-shrink-0 px-4 py-3 border-t border-gray-200/50",
                children: s.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx("label", {
                          htmlFor: "admin-mode-toggle",
                          className:
                            "text-sm font-medium text-gray-700 cursor-pointer select-none",
                          children: "後台模式",
                        }),
                        s.jsx("button", {
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: $,
                          className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            c ? "bg-blue-600" : "bg-gray-300"
                          }`,
                          children: s.jsx("span", {
                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              c ? "translate-x-6" : "translate-x-1"
                            }`,
                          }),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: () => S(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: s.jsx(Jt, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx(Jm, { isOpen: x, onClose: () => S(!1) }),
      ],
    });
  },
  eh = () => {
    const { t: e } = ft();
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
  th = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: r = !1,
    onContainerClick: o,
  }) => {
    const l = m.useRef(null),
      { t: a } = ft(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = Ke(),
      [d, g] = m.useState(!1),
      [p, b] = m.useState({ x: 0, y: 0 }),
      [v, N] = m.useState(e.position),
      [k, u] = m.useState(!1),
      [f, x] = m.useState(null),
      [S, $] = m.useState({ x: 0, y: 0 }),
      [M, I] = m.useState({ x: 0, y: 0 }),
      j = m.useCallback(
        async (F, le) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", F, le);
          const ce = JSON.parse(JSON.stringify(i)),
            R = (be) => {
              for (const B of be) {
                if (B.GUID === F)
                  return (
                    (B.position = { x: le.x.toFixed(3), y: le.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      B.name,
                      le.x.toFixed(3),
                      le.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (B.components &&
                    Array.isArray(B.components) &&
                    R(B.components)) ||
                  (B.contents && Array.isArray(B.contents) && R(B.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (R(ce)) {
            c(ce), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const be = await ke.updateContainerPosition({
                GUID: F,
                absolute_position: `${le.x.toFixed(3)},${le.y.toFixed(3)}`,
              });
              be.Code === 200
                ? (console.log("✅ 後端位置同步成功", be),
                  h("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", be),
                  h(`位置更新失敗: ${be.Result || "未知錯誤"}`, "error"));
            } catch (be) {
              console.error("💥 後端位置同步發生錯誤:", be),
                h("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", F);
        },
        [i, c, h]
      ),
      { position: P, dimensions: w, name: O, type: _ } = e,
      E = m.useCallback(
        (F) => {
          const le = l.current;
          if (le)
            if ((I({ x: F.clientX, y: F.clientY }), n)) {
              F.preventDefault(),
                F.stopPropagation(),
                le.setPointerCapture(F.pointerId);
              const ce = le.getBoundingClientRect(),
                R = F.clientX - ce.left,
                oe = F.clientY - ce.top;
              b({ x: R, y: oe }), g(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      T = m.useCallback(() => {
        if (!i) return [];
        const F = [],
          le = (ce) => {
            for (const R of ce)
              R.GUID !== e.GUID &&
                R.position &&
                F.push({
                  GUID: R.GUID,
                  position: R.position,
                  dimensions: R.dimensions,
                }),
                R.components && Array.isArray(R.components) && le(R.components),
                R.contents && Array.isArray(R.contents) && le(R.contents);
          };
        return le(i), F;
      }, [i, e.GUID]),
      X = m.useCallback(
        (F, le) => {
          const R = T();
          let oe = F,
            be = le;
          for (const B of R) {
            const te = parseFloat(B.position.x),
              ve = parseFloat(B.position.y);
            if (
              (Math.abs(F - te) < 20 && (oe = te),
              Math.abs(le - ve) < 20 && (be = ve),
              B.dimensions && e.dimensions)
            ) {
              const L = te + parseFloat(B.dimensions.width),
                C = F + parseFloat(e.dimensions.width);
              Math.abs(C - L) < 20 && (oe = L - parseFloat(e.dimensions.width));
              const A = ve + parseFloat(B.dimensions.depth),
                H = le + parseFloat(e.dimensions.depth);
              Math.abs(H - A) < 20 && (be = A - parseFloat(e.dimensions.depth));
            }
          }
          return { x: oe, y: be };
        },
        [T, e.dimensions]
      ),
      U = m.useCallback(
        (F) => {
          const le = Math.abs(F.clientX - M.x),
            ce = Math.abs(F.clientY - M.y);
          if (((le > 5 || ce > 5) && u(!0), !d || !n)) return;
          F.preventDefault(), F.stopPropagation();
          const R = l.current;
          if (!R) return;
          const oe = R.closest("[data-canvas-content]");
          if (!oe) return;
          const be = oe.getBoundingClientRect(),
            B = (F.clientX - be.left - p.x) / t,
            te = (F.clientY - be.top - p.y) / t,
            ve = X(B, te);
          N(ve);
        },
        [d, p, t, n, X, M]
      ),
      G = m.useCallback(
        (F) => {
          const le = Math.abs(F.clientX - M.x),
            ce = Math.abs(F.clientY - M.y),
            R = le > 5 || ce > 5;
          if (n) {
            if (!d) return;
            F.preventDefault(), F.stopPropagation();
            const oe = l.current;
            oe && oe.releasePointerCapture(F.pointerId),
              g(!1),
              R ? j(e.GUID, v) : o && o(e),
              u(!1);
          } else
            !R && o && (F.preventDefault(), F.stopPropagation(), o(e)), u(!1);
        },
        [d, n, o, e, j, v, M]
      ),
      D = m.useCallback(
        (F) => {
          const le = l.current;
          if (!le) return;
          const ce = F.touches[0];
          if (ce && ($({ x: ce.clientX, y: ce.clientY }), n)) {
            F.preventDefault(), F.stopPropagation(), x(ce.identifier);
            const R = le.getBoundingClientRect(),
              oe = ce.clientX - R.left,
              be = ce.clientY - R.top;
            b({ x: oe, y: be }), g(!0);
          }
        },
        [n]
      ),
      J = m.useCallback(
        (F) => {
          if (!d || !n || f === null) return;
          F.preventDefault(), F.stopPropagation();
          const le = l.current;
          if (!le) return;
          const ce = Array.from(F.touches).find((ve) => ve.identifier === f);
          if (!ce) return;
          const R = le.closest("[data-canvas-content]");
          if (!R) return;
          const oe = R.getBoundingClientRect(),
            be = (ce.clientX - oe.left - p.x) / t,
            B = (ce.clientY - oe.top - p.y) / t,
            te = X(be, B);
          N(te);
        },
        [d, p, t, n, f, X]
      ),
      re = m.useCallback(
        (F) => {
          const le = Array.from(F.changedTouches)[0];
          if (!le) return;
          const ce = Math.abs(le.clientX - S.x),
            R = Math.abs(le.clientY - S.y),
            oe = ce > 10 || R > 10;
          if (n) {
            if (
              !d ||
              f === null ||
              !Array.from(F.changedTouches).some((B) => B.identifier === f)
            )
              return;
            F.preventDefault(),
              F.stopPropagation(),
              g(!1),
              x(null),
              $({ x: 0, y: 0 }),
              oe ? j(e.GUID, v) : o && o(e);
          } else
            !oe && o && (F.preventDefault(), F.stopPropagation(), o(e)),
              $({ x: 0, y: 0 });
        },
        [d, n, f, j, e, v, S, o]
      ),
      K = m.useCallback(
        (F) => {
          !d ||
            !n ||
            f === null ||
            !Array.from(F.changedTouches).some((ce) => ce.identifier === f) ||
            (F.preventDefault(),
            F.stopPropagation(),
            N(e.position),
            g(!1),
            x(null),
            $({ x: 0, y: 0 }));
        },
        [d, n, f, e.position]
      ),
      q = (F) => {
        if (r) return "bg-green-100 border-green-500";
        switch (F) {
          case "調劑台":
            return "bg-gray-100 border-gray-400";
          case "藥庫":
            return "bg-gray-100 border-gray-400";
          case "parent_container":
            return "bg-gray-100 border-gray-400";
          default:
            return "bg-gray-50 border-gray-400";
        }
      },
      je = (F) => {
        if (r) return "highlight-breathe-green";
        switch (F) {
          case "調劑台":
            return "bg-gray-300 text-gray-900";
          case "藥庫":
            return "bg-gray-300 text-gray-900";
          case "parent_container":
            return "bg-gray-300 text-gray-900";
          default:
            return "bg-gray-200 text-gray-800";
        }
      },
      pe = (F) => {
        if (r) return "bg-green-600 text-white";
        switch (F) {
          case "調劑台":
            return "bg-gray-700 text-white";
          case "藥庫":
            return "bg-gray-700 text-white";
          case "parent_container":
            return "bg-gray-700 text-white";
          default:
            return "bg-gray-600 text-white";
        }
      },
      ye = (F) => {
        const le =
          F === "調劑台"
            ? "type.dispensingStation"
            : F === "藥庫"
            ? "type.warehouse"
            : F === "parent_container"
            ? "櫃體"
            : "type." + F;
        return a(le) || F;
      };
    return s.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${q(
        _
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        d ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${v.x}px`,
        top: `${v.y}px`,
        minWidth: _ === "調劑台" || _ === "藥庫" ? "120px" : "180px",
        minHeight: _ === "調劑台" || _ === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: d
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: E,
      onPointerMove: U,
      onPointerUp: G,
      onTouchStart: D,
      onTouchMove: J,
      onTouchEnd: re,
      onTouchCancel: K,
      children: s.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-b border-gray-200 ${je(
          _
        )}`,
        children: s.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: s.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              s.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: O,
              }),
              s.jsx("div", {
                className: `text-sm truncate py-1 px-3 rounded-2xl ${pe(_)}`,
                children: ye(_),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ao = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: r }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Ke();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: r,
      hasOnScanSuccess: !!n,
    });
    const a = m.useRef(null),
      i = m.useRef(null),
      c = m.useRef(null),
      h = m.useRef(null),
      d = m.useRef(null),
      [g, p] = m.useState(!1),
      [b, v] = m.useState(""),
      [N, k] = m.useState(0),
      [u, f] = m.useState(null),
      [x, S] = m.useState(!1);
    m.useEffect(() => {
      const O = () => {
        const _ = window.innerWidth < 680;
        S(_);
      };
      return (
        O(),
        window.addEventListener("resize", O),
        () => window.removeEventListener("resize", O)
      );
    }, []);
    const $ = async () => {
        try {
          v("");
          const O = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = O),
            a.current &&
              ((a.current.srcObject = O),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              p(!0));
        } catch (O) {
          console.error("無法開啟相機:", O),
            v("無法開啟相機，請確認相機權限已開啟");
        }
      },
      M = () => {
        h.current && (clearInterval(h.current), (h.current = null)),
          c.current &&
            (c.current.getTracks().forEach((O) => O.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          p(!1);
      },
      I = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", g),
          !a.current || !i.current || !g)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const O = Date.now();
        if (O - N < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        k(O);
        const _ = a.current,
          E = i.current,
          T = E.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", _.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", _.HAVE_ENOUGH_DATA),
          !T || _.readyState !== _.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (E.width = _.videoWidth),
          (E.height = _.videoHeight),
          T.drawImage(_, 0, 0, E.width, E.height),
          E.toBlob(
            async (X) => {
              if (!X) return;
              const U = new File([X], "scan.jpg", { type: "image/jpeg" });
              try {
                console.log("📸 截取圖片並掃描...");
                const G = await ke.scanBarcode(U);
                if (!G.results || G.results.length === 0) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const D = G.results[0];
                if (!D.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", D.code),
                  console.log("📋 條碼類型:", D.type),
                  console.log("📊 信心度:", D.conf),
                  M(),
                  t();
                try {
                  const J = await ke.searchByBarCode(D.code);
                  console.log("🔍 條碼搜尋結果:", J),
                    J.Code === 200
                      ? (console.log("✅ 找到藥品資料:", J.Data),
                        console.log("🎯 準備調用 onScanSuccess, mode:", r),
                        o("找到藥品資料", "success"),
                        n
                          ? (console.log("✅ onScanSuccess 存在，開始調用"),
                            n(D.code, J.Data),
                            console.log("✅ onScanSuccess 調用完成"))
                          : console.warn("⚠️ onScanSuccess 不存在"))
                      : J.Code === -200 && J.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(D.code))
                      : (console.log("❌ 搜尋失敗:", J.Result),
                        o(J.Result || "搜尋失敗", "error"));
                } catch (J) {
                  console.error("條碼搜尋錯誤:", J),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (G) {
                console.error("掃描錯誤:", G);
              }
            },
            "image/jpeg",
            1
          );
      },
      j = () => {
        h.current && clearInterval(h.current),
          (h.current = setInterval(() => {
            I();
          }, 1e3));
      };
    m.useEffect(
      () => (
        e ? $() : M(),
        () => {
          M();
        }
      ),
      [e]
    ),
      m.useEffect(() => {
        g && !h.current
          ? (console.log("🚀 isScanning became true, starting interval"), j())
          : !g &&
            h.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            h.current && (clearInterval(h.current), (h.current = null)));
      }, [g]);
    const P = () => {
        M(), t();
      },
      w = async (O) => {
        if (!c.current || !d.current) return;
        const _ = d.current.getBoundingClientRect(),
          E = (O.clientX - _.left) / _.width,
          T = (O.clientY - _.top) / _.height;
        console.log("🎯 點擊聚焦位置:", { x: E, y: T }),
          f({ x: O.clientX - _.left, y: O.clientY - _.top }),
          setTimeout(() => f(null), 1e3);
        try {
          const X = c.current.getVideoTracks()[0],
            U = X.getCapabilities();
          if (
            (console.log("📹 相機能力:", U),
            !U.focusMode || !U.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const G = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: E, y: T }],
              },
            ],
          };
          await X.applyConstraints(G), console.log("✅ 聚焦成功");
        } catch (X) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", X);
        }
      };
    return e
      ? x
        ? s.jsxs("div", {
            className: "fixed inset-0 bg-black z-50 flex flex-col",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-900 bg-opacity-90",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      s.jsx(Nr, { className: "w-6 h-6 text-white" }),
                      s.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: P,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: s.jsx(Qe, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  s.jsxs("div", {
                    ref: d,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: w,
                    children: [
                      s.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      u &&
                        s.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: u.x,
                            top: u.y,
                            transform: "translate(-50%, -50%)",
                          },
                          children: [
                            s.jsx("div", {
                              className:
                                "w-16 h-16 border-2 border-yellow-400 rounded-full animate-ping",
                            }),
                            s.jsx("div", {
                              className:
                                "absolute inset-0 w-16 h-16 border-2 border-yellow-400 rounded-full",
                            }),
                            s.jsxs("div", {
                              className:
                                "absolute inset-0 w-16 h-16 flex items-center justify-center",
                              children: [
                                s.jsx("div", {
                                  className: "w-1 h-16 bg-yellow-400",
                                }),
                                s.jsx("div", {
                                  className: "absolute w-16 h-1 bg-yellow-400",
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  s.jsx("canvas", { ref: i, className: "hidden" }),
                ],
              }),
              s.jsxs("div", {
                className: "p-4 bg-gray-900 bg-opacity-90",
                children: [
                  b &&
                    s.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: s.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: b,
                      }),
                    }),
                  s.jsxs("div", {
                    className: "text-center",
                    children: [
                      s.jsx("p", {
                        className: "text-white text-base font-medium mb-1",
                        children: "請將條碼對準鏡頭",
                      }),
                      s.jsx("p", {
                        className: "text-gray-300 text-sm mb-1",
                        children: "支援一維條碼與二維條碼（QR Code）",
                      }),
                      s.jsx("p", {
                        className: "text-gray-400 text-xs",
                        children: "💡 點擊畫面可對焦",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : s.jsx("div", {
            className:
              "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4",
            children: s.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                          children: s.jsx(Nr, {
                            className: "w-6 h-6 text-blue-500",
                          }),
                        }),
                        s.jsx("h2", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    b &&
                      s.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: s.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: b,
                        }),
                      }),
                    s.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        s.jsx("div", {
                          ref: d,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: w,
                          children: s.jsx("video", {
                            ref: a,
                            className: "w-full h-full object-cover",
                            playsInline: !0,
                            muted: !0,
                          }),
                        }),
                        s.jsx("canvas", { ref: i, className: "hidden" }),
                        s.jsxs("div", {
                          className: "text-center rounded-lg pb-4",
                          children: [
                            s.jsx("p", {
                              className:
                                "text-gray-800 text-base font-medium mb-2",
                              children: "請將條碼對準鏡頭",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600 text-sm",
                              children: "支援一維條碼與二維條碼（QR Code）",
                            }),
                            s.jsx("p", {
                              className: "text-gray-500 text-xs mt-1",
                              children: "💡 點擊畫面可對焦",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
      : null;
  },
  nh = ({ children: e }) => {
    const t = m.useRef(null),
      n = m.useRef(null),
      {
        selectedDepartmentType: r,
        apiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        setHighlightedMedicineCode: c,
      } = Ke(),
      { t: h } = ft(),
      [d, g] = m.useState({ x: 0, y: 0, scale: 1 }),
      [p, b] = m.useState(!1),
      [v, N] = m.useState(!1),
      [k, u] = m.useState({ x: 0, y: 0 }),
      [f, x] = m.useState(!1),
      [S, $] = m.useState(!1),
      [M, I] = m.useState(""),
      [j, P] = m.useState([]),
      [w, O] = m.useState(null),
      _ = () => {
        try {
          const L = localStorage.getItem("med_map_anchor");
          return L ? JSON.parse(L) : [];
        } catch (L) {
          return (
            console.error("Error reading canvas states from localStorage:", L),
            []
          );
        }
      },
      E = (L, C, A, H) => {
        try {
          const se = _(),
            ue = se.findIndex(
              (Ne) => Ne.department === L && Ne.canvasType === C
            ),
            xe = { department: L, canvasType: C, scale: A, position: H };
          ue >= 0 ? (se[ue] = xe) : se.push(xe),
            localStorage.setItem("med_map_anchor", JSON.stringify(se));
        } catch (se) {
          console.error("Error saving canvas state to localStorage:", se);
        }
      },
      T = (L, C) =>
        _().find((H) => H.department === L && H.canvasType === C) || null;
    m.useEffect(() => {
      if (r) {
        const L = T(r, "InfiniteCanvas");
        if (L) g({ x: L.position.x, y: L.position.y, scale: L.scale });
        else {
          const C = { x: 0, y: 0, scale: 1 };
          g(C), E(r, "InfiniteCanvas", C.scale, C);
        }
      }
    }, [r]),
      m.useEffect(() => {
        if (!r) return;
        const L = setTimeout(() => {
          E(r, "InfiniteCanvas", d.scale, { x: d.x, y: d.y });
        }, 500);
        return () => clearTimeout(L);
      }, [d, r]),
      m.useEffect(() => {
        const L = (A) => {
            A.code === "Space" && !A.repeat && (A.preventDefault(), x(!0));
          },
          C = (A) => {
            A.code === "Space" && (A.preventDefault(), x(!1), b(!1));
          };
        return (
          window.addEventListener("keydown", L),
          window.addEventListener("keyup", C),
          () => {
            window.removeEventListener("keydown", L),
              window.removeEventListener("keyup", C);
          }
        );
      }, []);
    const X = m.useCallback(
        (L) => {
          var A;
          if (v) return;
          if (
            (L.altKey && !navigator.userAgent.includes("Mac")) ||
            (L.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            L.preventDefault();
            const H =
              (A = t.current) == null ? void 0 : A.getBoundingClientRect();
            if (!H) return;
            const se = L.clientX - H.left,
              ue = L.clientY - H.top,
              xe = L.deltaY > 0 ? 0.9 : 1.1,
              Ne = Math.max(0.1, Math.min(5, d.scale * xe)),
              Se = Ne / d.scale,
              _e = se - (se - d.x) * Se,
              ae = ue - (ue - d.y) * Se;
            g({ x: _e, y: ae, scale: Ne });
          }
        },
        [d, v]
      ),
      U = m.useCallback(
        (L) => {
          v ||
            !f ||
            (b(!0), u({ x: L.clientX, y: L.clientY }), L.preventDefault());
        },
        [v, f]
      ),
      G = m.useCallback(
        (L) => {
          if (!p || v) return;
          const C = L.clientX - k.x,
            A = L.clientY - k.y;
          g((H) => ({ ...H, x: H.x + C, y: H.y + A })),
            u({ x: L.clientX, y: L.clientY });
        },
        [p, k, v]
      ),
      D = m.useCallback(() => {
        b(!1);
      }, []),
      J = m.useCallback(
        (L) => {
          if (!o) return [];
          const C = [],
            A = (H) => {
              for (const se of H)
                se.med_list &&
                  Array.isArray(se.med_list) &&
                  se.med_list.some((xe) => xe.code == L) &&
                  (console.log("✅ 找到藥品所在櫃體:", se.name, se.GUID),
                  C.push(se.GUID)),
                  se.components &&
                    Array.isArray(se.components) &&
                    A(se.components),
                  se.contents && Array.isArray(se.contents) && A(se.contents);
            };
          return A(o), C;
        },
        [o]
      ),
      re = m.useCallback(() => {
        try {
          const C = localStorage.getItem("medMap_setting");
          if (C) {
            const H = JSON.parse(C).light_sec;
            if (H != null && H !== "") {
              const se = Number(H);
              if (!isNaN(se) && se > 0) return se * 1e3;
            }
          }
        } catch (C) {
          console.error("讀取亮燈設定失敗:", C);
        }
        return 6e4;
      }, []),
      K = m.useCallback(
        (L) => {
          if (!L.trim()) return;
          n.current && (clearTimeout(n.current), (n.current = null)),
            console.log("🔍 搜尋藥碼:", L);
          const C = J(L);
          if (C.length > 0) {
            const A = re();
            console.log(`🎯 高亮 ${C.length} 個櫃體:`, C),
              console.log(`⏱️ 亮燈時長: ${A}ms (${A / 1e3}秒)`),
              P(C),
              O(L),
              c(L),
              (n.current = setTimeout(() => {
                console.log("⏱️ 恢復原本顏色"),
                  P([]),
                  O(null),
                  c(null),
                  (n.current = null);
              }, A));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), P([]), O(null), c(null);
        },
        [J, re, c]
      ),
      q = (L, C) => {
        var H, se;
        console.log("📍 藥品定位模式 - 掃描到藥品:", {
          barcode: L,
          medicineData: C,
        });
        const A =
          ((H = C[0]) == null ? void 0 : H.CODE) ||
          ((se = C[0]) == null ? void 0 : se.code);
        $(!1), K(A);
      },
      je = async (L) => {
        var C, A;
        if (L.key === "Enter") {
          if ((L.preventDefault(), !M.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          try {
            console.log("🔍 搜尋條碼:", M);
            const H = await ke.searchByBarCode(M);
            if (
              (console.log("📋 條碼搜尋回應:", H),
              H.Code === 200 && H.Data && H.Data.length > 0)
            ) {
              const se =
                ((C = H.Data[0]) == null ? void 0 : C.CODE) ||
                ((A = H.Data[0]) == null ? void 0 : A.code);
              console.log("✅ 找到藥品資料:", H.Data),
                l("找到藥品，開始亮燈", "success"),
                K(se);
            } else
              H.Code === -200 && H.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(M))
                : (console.log("❌ 搜尋失敗:", H.Result),
                  l(H.Result || "搜尋失敗", "error"));
          } catch (H) {
            console.error("條碼搜尋錯誤:", H),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    m.useEffect(
      () => () => {
        n.current && clearTimeout(n.current);
      },
      []
    );
    const [pe, ye] = m.useState(null),
      [F, le] = m.useState({ x: 0, y: 0 }),
      ce = (L) => {
        if (L.length < 2) return null;
        const C = L[0],
          A = L[1];
        return Math.sqrt(
          Math.pow(A.clientX - C.clientX, 2) +
            Math.pow(A.clientY - C.clientY, 2)
        );
      },
      R = (L) => {
        if (L.length === 1) return { x: L[0].clientX, y: L[0].clientY };
        const C = L[0],
          A = L[1];
        return {
          x: (C.clientX + A.clientX) / 2,
          y: (C.clientY + A.clientY) / 2,
        };
      },
      oe = m.useCallback(
        (L) => {
          if (!v) {
            if (L.touches.length === 2) {
              const C = ce(L.touches),
                A = R(L.touches);
              ye(C), le(A);
            } else if (L.touches.length === 1) {
              const C = L.touches[0];
              u({ x: C.clientX, y: C.clientY }), b(!0);
            }
          }
        },
        [v]
      ),
      be = m.useCallback(
        (L) => {
          var C;
          if (!v) {
            if ((L.preventDefault(), L.touches.length === 2 && pe !== null)) {
              const A = ce(L.touches),
                H = R(L.touches);
              if (A && pe) {
                const se =
                  (C = t.current) == null ? void 0 : C.getBoundingClientRect();
                if (!se) return;
                const ue = A / pe,
                  xe = Math.max(0.1, Math.min(5, d.scale * ue)),
                  Ne = H.x - se.left,
                  Se = H.y - se.top,
                  _e = xe / d.scale,
                  ae = Ne - (Ne - d.x) * _e,
                  me = Se - (Se - d.y) * _e;
                g({ x: ae, y: me, scale: xe }), ye(A), le(H);
              }
            } else if (L.touches.length === 1 && p) {
              const A = L.touches[0],
                H = A.clientX - k.x,
                se = A.clientY - k.y;
              g((ue) => ({ ...ue, x: ue.x + H, y: ue.y + se })),
                u({ x: A.clientX, y: A.clientY });
            }
          }
        },
        [d, pe, p, k, v]
      ),
      B = m.useCallback(() => {
        ye(null), b(!1);
      }, []);
    m.useEffect(() => {
      const L = t.current;
      if (L)
        return (
          L.addEventListener("wheel", X, { passive: !1 }),
          () => L.removeEventListener("wheel", X)
        );
    }, [X]),
      m.useCallback(() => {
        g({ x: 0, y: 0, scale: 1 });
      }, []);
    const ve = (() => {
      if (!o || o.length === 0) return [];
      const L = o,
        C = [];
      for (const A of L)
        if (A.type === "調劑台" || A.type === "藥庫")
          for (const H of A.contents)
            C.push({
              GUID: H.GUID,
              type: H.type,
              name: `${H.name}`,
              position: H.position,
              dimensions: H.dimensions,
              med_list: H.med_list,
              serverName: H.serverName,
              serverType: H.serverType,
              MASTER_GUID: A.GUID,
              contents: H.contents || [],
            });
        else A.componets && A.componets.length > 0 && C.push(...A.componets);
      return C;
    })();
    return s.jsxs("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: [
        s.jsx("div", {
          className:
            "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
            children: [
              s.jsx("input", {
                type: "text",
                value: M,
                onChange: (L) => I(L.target.value),
                onKeyPress: je,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              s.jsx("button", {
                onClick: () => $(!0),
                className: "p-2",
                title: "掃描條碼",
                children: s.jsx(Nr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: s.jsx("button", {
            onClick: () => N(!v),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              v
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: h(v ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: v
              ? s.jsx(Pd, { className: "w-6 h-6" })
              : s.jsx(Id, { className: "w-6 h-6" }),
          }),
        }),
        s.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            f && !v ? "cursor-grab" : "cursor-default"
          } ${p ? "cursor-grabbing" : ""}`,
          onMouseDown: U,
          onMouseMove: G,
          onMouseUp: D,
          onMouseLeave: D,
          onTouchStart: oe,
          onTouchMove: be,
          onTouchEnd: B,
          children: s.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${d.x}px, ${d.y}px) scale(${d.scale})`,
              transformOrigin: "0 0",
            },
            children: [
              s.jsx("div", {
                className: "absolute",
                style: {
                  left: -1e4,
                  top: -1e4,
                  width: 2e4,
                  height: 2e4,
                  backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
                  backgroundSize: "50px 50px",
                },
              }),
              s.jsxs("div", {
                className: "relative",
                "data-canvas-content": !0,
                children: [
                  ve.map((L) =>
                    s.jsx(
                      th,
                      {
                        component: L,
                        scale: d.scale,
                        isLocked: v,
                        isHighlighted: j.includes(L.GUID),
                        onContainerClick: (C) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", w),
                            i(C, w);
                        },
                      },
                      L.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        s.jsx(Ao, {
          isOpen: S,
          onClose: () => $(!1),
          onScanSuccess: q,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Ts = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: r,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: h,
        setModalMode: d,
        setMedBoxModalOpen: g,
        showNotification: p,
        triggerRefresh: b,
      } = Ke(),
      { t: v } = ft(),
      [N, k] = m.useState(!1),
      [u, f] = m.useState(""),
      [x, S] = m.useState(!1),
      [$, M] = m.useState(e.name);
    m.useEffect(() => {
      M(e.name);
    }, [e.name]);
    const I = (T) => {
        T.stopPropagation(), f(e.name || ""), k(!0);
      },
      j = (T) => {
        T.stopPropagation(), k(!1), f("");
      },
      P = async (T) => {
        if ((T.stopPropagation(), !u.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (u === e.name) {
          k(!1);
          return;
        }
        S(!0);
        try {
          const X = [
            {
              GUID: e.GUID,
              name: u.trim(),
              MASTER_GUID: e.MASTER_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let U;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            U = await ke.updateMedMapShelf(X);
          else if (e.type === "sub_container") U = await ke.updateSubSection(X);
          else {
            p("不支援的容器類型", "error"), S(!1);
            return;
          }
          if (U.Code === 200) {
            const G = u.trim();
            (e.name = G), M(G), p("名稱更新成功", "success"), k(!1), b();
          } else p(U.Result || "更新失敗", "error");
        } catch (X) {
          console.error("更新名稱失敗:", X), p("更新失敗，請稍後再試", "error");
        } finally {
          S(!1);
        }
      },
      w = (T) => {
        switch (T) {
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
      O = (T) => {
        switch (T) {
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
      _ = (T) => {
        switch (T) {
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
      E = (T) => {
        switch (T) {
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
            return T;
        }
      };
    switch (e.type) {
      case "sub_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                N
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (T) => f(T.target.value),
                          onClick: (T) => T.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: P,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(cl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Qe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : s.jsxs(s.Fragment, {
                      children: [
                        s.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: $,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(ul, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                      e.type
                    )}`,
                    children: E(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !N &&
              s.jsx("div", {
                className: "flex items-center space-x-1",
                children: s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (T) => {
                    T.stopPropagation(), a(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(wt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              s.jsx("div", {
                className: "flex items-center space-x-1",
                children: s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (T) => {
                    T.stopPropagation(), i(e);
                  },
                  title: v("modal.add"),
                  children: s.jsx(wt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
            }),
            s.jsx("div", {
              className: "flex items-center space-x-1",
              children: s.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (T) => {
                  T.stopPropagation(), n(e);
                },
                title: v("modal.settings"),
                children: s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                N
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (T) => f(T.target.value),
                          onClick: (T) => T.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: P,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(cl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Qe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : s.jsxs(s.Fragment, {
                      children: [
                        s.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: $,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(ul, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                      e.type
                    )}`,
                    children: E(e.type),
                  }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (T) => {
                    T.stopPropagation();
                    const X = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    h(X), d("add"), g(!0);
                  },
                  title: v("modal.add"),
                  children: s.jsx(wt, { className: "w-6 h-6 text-green-700" }),
                }),
                s.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (T) => {},
                  title: v("modal.settings"),
                  children: s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                N
                  ? s.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: u,
                          onChange: (T) => f(T.target.value),
                          onClick: (T) => T.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: x,
                          autoFocus: !0,
                        }),
                        s.jsx("button", {
                          onClick: P,
                          disabled: x,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: s.jsx(cl, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        s.jsx("button", {
                          onClick: j,
                          disabled: x,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: s.jsx(Qe, {
                            className: "w-5 h-5 text-red-600",
                          }),
                        }),
                      ],
                    })
                  : s.jsxs(s.Fragment, {
                      children: [
                        s.jsx("span", {
                          className:
                            "text-base font-semibold text-gray-800 whitespace-nowrap",
                          children: $,
                        }),
                        s.jsx("button", {
                          onClick: I,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: s.jsx(ul, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !N &&
                  s.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                      e.type
                    )}`,
                    children: E(e.type),
                  }),
              ],
            }),
            s.jsx("div", {
              className: "flex items-center space-x-1",
              children: s.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (T) => {
                  T.stopPropagation(), c(e);
                },
                title: v("modal.add"),
                children: s.jsx(wt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (T) => {
                T.stopPropagation(), o(e);
              },
              title: v("modal.settings"),
              children: s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
              ],
            }),
            s.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (T) => {
                T.stopPropagation(), l(e);
              },
              title: v("modal.settings"),
              children: s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return s.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${w(
            e.type || 0
          )} ${O(e.type || 0)}`,
          children: [
            s.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? s.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${_(
                        e.type
                      )}`,
                      children: E(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              s.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: v("modal.settings"),
                children: s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Rd = m.forwardRef(({ children: e }, t) => {
    const n = m.useRef(null),
      {
        selectedDepartmentType: r,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: h,
        showNotification: d,
        isAdminMode: g,
      } = Ke(),
      [p, b] = m.useState({ x: 0, y: 0, scale: 1 }),
      [v, N] = m.useState(!1),
      [k, u] = m.useState(!1),
      [f, x] = m.useState({ x: 0, y: 0 }),
      [S, $] = m.useState(!1),
      [M, I] = m.useState(""),
      [j, P] = m.useState(!1),
      [w, O] = m.useState({
        isDragging: !1,
        draggedContainer: null,
        draggedElement: null,
        floatingElement: null,
        originalParent: null,
        originalPosition: "",
        originalIndex: -1,
        mouseOffset: { x: 0, y: 0 },
        isMobileDrag: !1,
        originalData: null,
      }),
      [_, E] = m.useState(null),
      T = m.useRef({}),
      X = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      U = 8,
      G = () => {
        try {
          const y = localStorage.getItem("med_map_anchor");
          return y ? JSON.parse(y) : [];
        } catch (y) {
          return (
            console.error("Error reading canvas states from localStorage:", y),
            []
          );
        }
      },
      D = (y, V, Q, z) => {
        try {
          const ne = G(),
            W = ne.findIndex(
              (ie) => ie.department === y && ie.canvasType === V
            ),
            de = { department: y, canvasType: V, scale: Q, position: z };
          W >= 0 ? (ne[W] = de) : ne.push(de),
            localStorage.setItem("med_map_anchor", JSON.stringify(ne));
        } catch (ne) {
          console.error("Error saving canvas state to localStorage:", ne);
        }
      },
      J = (y, V) =>
        G().find((z) => z.department === y && z.canvasType === V) || null;
    m.useEffect(() => {
      if (r) {
        const y = J(r, "drugCanvas");
        if (y) b({ x: y.position.x, y: y.position.y, scale: y.scale });
        else {
          const V = { x: 0, y: 0, scale: 1 };
          b(V), D(r, "drugCanvas", V.scale, V);
        }
      }
    }, [r]),
      m.useEffect(() => {
        if (!r) return;
        const y = setTimeout(() => {
          D(r, "drugCanvas", p.scale, { x: p.x, y: p.y });
        }, 500);
        return () => clearTimeout(y);
      }, [p, r]);
    const re = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      K = (y) =>
        ({
          parent_container: ["parent_container", "調劑台", "藥庫"],
          sub_container: ["parent_container", "sub_container"],
          dispensing_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
          ],
          store_shelves: [
            "dispensing_shelves",
            "store_shelves",
            "sub_container",
          ],
          grid_draw: ["grid_draw", "list_draw", "sub_container"],
          list_draw: ["grid_draw", "list_draw", "sub_container"],
          med_box: ["med_box", "dispensing_shelves"],
        }[y] || []),
      q = (y) => {
        const [V, Q] = y.split(",").map(Number);
        return { row: V || 0, col: Q || 0 };
      },
      je = (y, V) => `${y},${V}`,
      pe = (y, V) => {
        const Q = (ne, W = null) => {
            if (ne.GUID === y) return { container: ne, parent: W };
            if (ne.contents)
              for (const de of ne.contents) {
                const ie = Q(de, ne);
                if (ie) return ie;
              }
            return null;
          },
          z = _e();
        for (const ne of z) {
          const W = Q(ne);
          if (W) return W;
        }
        return null;
      },
      ye = (y, V) => {
        if (!y.contents) return;
        const { sortedContents: Q, maxRow: z, maxCol: ne } = ae(y.contents),
          W = V;
        if (!W) return;
        const de = q(W.gird_position);
        console.log(z), console.log(ne), console.log(W), console.log(de);
        for (let ie = 0; ie < Q.length; ie++) {
          const Z = Q[ie],
            Y = q(Z.gird_position);
          if (Y.row === de.row && Y.col > de.col)
            (Z.gird_position = je(Y.row, Y.col - 1)),
              (T.current[Z.GUID] = {
                GUID: Z.GUID,
                MASTER_GUID: y.GUID,
                position: `${Y.row},${Y.col - 1}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              });
          else if (Y.row > de.row) {
            const ge = Y.col === 0 ? ne : Y.col - 1,
              he = Y.col === 0 ? Y.row - 1 : Y.row;
            (Z.gird_position = je(he, ge)),
              (T.current[Z.GUID] = {
                GUID: Z.GUID,
                MASTER_GUID: y.GUID,
                position: `${he},${ge}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              });
          }
        }
        return console.log("移除更新其餘容器", Q), Q;
      },
      F = (y, V, Q, z, ne) => {
        y.contents || (y.contents = []);
        let W = Math.max(
            1,
            ...y.contents.map((Z) => q(Z.gird_position || "0,0").col + 1)
          ),
          de = Math.max(
            1,
            ...y.contents.map((Z) => q(Z.gird_position || "0,0").row + 1)
          );
        console.log("--------", y),
          console.log("目標容器最大列", W),
          console.log("目標容器最大行", de),
          (y.type == "sub_container" ||
            y.type == "parent_container" ||
            y.type == "調劑台" ||
            y.type == "藥庫") &&
            (W = +y.oriMaxCol + 1),
          ne != null &&
            ne === "right" &&
            V.type !== "med_box" &&
            z == W &&
            ((Q = Q + 1),
            y.contents.filter((Y) => `${Q},0` == Y.gird_position).length > 0
              ? (z = W - 1)
              : (z = 0)),
          console.log(Q),
          console.log(z);
        const ie = y.contents.filter((Z) => {
          const Y = q(Z.gird_position || "0,0");
          return Y.row > Q || (Y.row === Q && Y.col >= z);
        });
        ie.sort((Z, Y) => {
          const ge = q(Z.gird_position || "0,0"),
            he = q(Y.gird_position || "0,0");
          return ge.row !== he.row ? he.row - ge.row : he.col - ge.col;
        }),
          console.log("會做變更的目標容器", ie),
          ie.forEach((Z) => {
            const Y = q(Z.gird_position || "0,0");
            let ge = Y.row,
              he = Y.col;
            Z.type === "med_box" || he < W - 1
              ? (he += 1)
              : ((ge += 1), (he = 0)),
              (Z.gird_position = `${ge},${he}`),
              (T.current[Z.GUID] = {
                GUID: Z.GUID,
                MASTER_GUID: y.GUID,
                position: `${ge},${he}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Z.type,
              }),
              console.log(
                `Shifted container ${Z.GUID} from ${Y.row},${Y.col} to ${ge},${he}`
              );
          }),
          y.contents.length == 0 && ((Q = 0), (z = 0)),
          (V.gird_position = `${Q},${z}`),
          (V.MASTER_GUID = y.GUID),
          console.log(`Inserted container ${V.GUID} at position ${Q},${z}`),
          y.contents.push(V),
          (T.current[V.GUID] = {
            GUID: V.GUID,
            MASTER_GUID: y.GUID,
            position: `${Q},${z}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: V.type,
          }),
          V.type === "dispensing_shelves" &&
            V.contents &&
            V.contents.forEach((Z) => {
              Z.type === "med_box" &&
                (T.current[Z.GUID] = {
                  GUID: Z.GUID,
                  MASTER_GUID: Z.MASTER_GUID,
                  position: Z.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: Z.type,
                });
            });
      },
      le = (y, V, Q) => {
        const z = y.getBoundingClientRect(),
          ne = z.left + z.width / 2,
          W = z.top + z.height / 2,
          de = V - ne,
          ie = Q - W;
        return Math.abs(de) > Math.abs(ie)
          ? de > 0
            ? "right"
            : "left"
          : ie > 0
          ? "bottom"
          : "top";
      },
      ce = (y, V, Q) => {
        if (!k || !re(y.type)) return;
        (T.current = {}), Q.preventDefault(), Q.stopPropagation();
        const z = X(),
          ne =
            "touches" in Q
              ? Q.touches[0].clientX
              : ("pointerId" in Q, Q.clientX),
          W =
            "touches" in Q
              ? Q.touches[0].clientY
              : ("pointerId" in Q, Q.clientY),
          de = V.getBoundingClientRect(),
          ie = { x: ne - de.left, y: W - de.top },
          Z = pe(y.GUID);
        if (!Z) return;
        console.log("拖曳目標", y), console.log("拖曳目標", Z);
        const Y = V.cloneNode(!0);
        if (
          ((Y.style.position = "fixed"),
          (Y.style.left = `${ne - ie.x}px`),
          (Y.style.top = `${W - ie.y}px`),
          (Y.style.width = `${de.width}px`),
          (Y.style.height = `${de.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y),
          z)
        ) {
          const ge = Z.parent.contents.findIndex((Pe) => Pe.GUID === y.GUID);
          Z.parent.contents.splice(ge, 1), console.log(ge), Z.parent;
          const he = ye(Z.parent, y);
          (Z.parent.contents = he),
            console.log(Z.parent),
            O({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: V,
              floatingElement: Y,
              originalParent: Z.parent,
              originalPosition: y.gird_position,
              originalIndex: ge,
              mouseOffset: ie,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const ge = Z.parent.contents.findIndex((Re) => Re.GUID === y.GUID);
          Z.parent.contents.splice(ge, 1), console.log(ge);
          const he = Z.parent,
            Pe = ye(Z.parent, y);
          (Z.parent.contents = Pe),
            console.log(Z.parent),
            O({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: V,
              floatingElement: Y,
              originalParent: he,
              originalPosition: y.gird_position,
              originalIndex: ge,
              mouseOffset: ie,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      R = (y) => {
        if (!w.isDragging || !w.floatingElement) return;
        const V = "touches" in y ? y.touches[0].clientX : y.clientX,
          Q = "touches" in y ? y.touches[0].clientY : y.clientY;
        (w.floatingElement.style.left = `${V - w.mouseOffset.x}px`),
          (w.floatingElement.style.top = `${Q - w.mouseOffset.y}px`);
        const z = document.elementFromPoint(V, Q),
          ne = z == null ? void 0 : z.closest("[data-container-guid]");
        if (ne) {
          const W = ne.getAttribute("data-container-guid"),
            de = pe(W);
          if (de && K(w.draggedContainer.type).includes(de.container.type)) {
            const Z = le(ne, V, Q);
            if (
              w.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(Z)
            ) {
              E(null);
              return;
            }
            E({ container: de.container, direction: Z, element: ne });
            return;
          }
        }
        E(null);
      },
      oe = async (y) => {
        if (!w.isDragging) return;
        w.floatingElement && document.body.removeChild(w.floatingElement);
        let V = null,
          Q = null,
          z = null;
        if (
          (console.log("Drop Target:", _),
          console.log("Is Mobile Drag:", w.isMobileDrag),
          w.isMobileDrag)
        )
          if (_) {
            (V = _.direction), (z = _.container);
            const ne = pe(w.draggedContainer.GUID);
            if (ne) {
              const ge = ne.parent.contents.findIndex(
                (Pe) => Pe.GUID === w.draggedContainer.GUID
              );
              ne.parent.contents.splice(ge, 1);
              const he = ye(ne.parent, w.draggedContainer);
              ne.parent.contents = he;
            }
            const W = q(_.container.gird_position || "0,0");
            let de = W.row,
              ie = W.col;
            switch (_.direction) {
              case "top":
                de = Math.max(0, W.row);
                break;
              case "bottom":
                de = W.row + 1;
                break;
              case "left":
                ie = Math.max(0, W.col);
                break;
              case "right":
                ie = W.col + 1;
                break;
            }
            const Z = pe(_.container.MASTER_GUID || _.container.GUID);
            let Y = (Z == null ? void 0 : Z.container) || _.container;
            if (
              (w.draggedContainer.class != _.class && (Y = _),
              w.draggedContainer.type === "med_box" &&
                _.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (Y = _.container),
                Y.contents.length > 0)
              ) {
                let ge = 0,
                  he = 0;
                Y.contents.forEach((Pe) => {
                  const Re = q(Pe.gird_position || "0,0").row,
                    At = q(Pe.gird_position || "0,0").col;
                  ge > Re && (ge = Re), he > At && (he = At);
                });
                for (let Pe = 0; Pe <= he; Pe++)
                  for (let Re = 0; Re <= ge; Re++) {
                    const At = `${Pe},${Re}`;
                    Y.contents.filter((kr) => kr.grid_position === At)
                      .length === 0 && ((de = Pe), (ie = Re));
                  }
              } else (de = 0), (ie = 0);
            (Q = Y), F(Y, w.draggedContainer, de, ie, _.direction);
          } else (V = null), (z = null), (Q = w.originalParent);
        else if (_) {
          (V = _.direction), (z = _.container);
          const ne = q(_.container.gird_position || "0,0");
          let W = ne.row,
            de = ne.col;
          switch (_.direction) {
            case "top":
              W = Math.max(0, ne.row);
              break;
            case "bottom":
              W = ne.row + 1;
              break;
            case "left":
              de = Math.max(0, ne.col);
              break;
            case "right":
              de = ne.col + 1;
              break;
          }
          const ie = pe(_.container.MASTER_GUID || _.container.GUID);
          console.log("------目標容器", _),
            console.log("------拖曳容器", w.draggedContainer);
          let Z = (ie == null ? void 0 : ie.container) || _.container;
          if (
            (console.log(w.draggedContainer.class),
            console.log(_.container.class),
            console.log(w.draggedContainer.class != _.container.class),
            w.draggedContainer.class != _.container.class &&
              ((Z = _.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", _),
              console.log("------拖曳容器", w.draggedContainer),
              console.log("------目標父容器", Z)),
            w.draggedContainer.type === "med_box" &&
              _.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (Z = _.container),
              Z.contents.length > 0)
            ) {
              let Y = 0,
                ge = 0;
              Z.contents.forEach((he) => {
                const Pe = q(he.gird_position || "0,0").row,
                  Re = q(he.gird_position || "0,0").col;
                Y > Pe && (Y = Pe), ge > Re && (ge = Re);
              });
              for (let he = 0; he <= ge; he++)
                for (let Pe = 0; Pe <= Y; Pe++) {
                  const Re = `${he},${Pe}`;
                  Z.contents.filter((Fn) => Fn.grid_position === Re).length ===
                    0 && ((W = he), (de = Pe));
                }
            } else (W = 0), (de = 0);
          (Q = Z), F(Z, w.draggedContainer, W, de, _.direction);
        } else {
          (V = null),
            (z = null),
            (Q = w.originalParent),
            (w.draggedContainer.gird_position = w.originalPosition);
          const ne = q(w.originalPosition || "0,0").row,
            W = q(w.originalPosition || "0,0").col;
          F(w.originalParent, w.draggedContainer, ne, W, null);
        }
        O({
          isDragging: !1,
          draggedContainer: null,
          draggedElement: null,
          floatingElement: null,
          originalParent: null,
          originalPosition: "",
          originalIndex: -1,
          mouseOffset: { x: 0, y: 0 },
          isMobileDrag: !1,
          originalData: null,
        }),
          E(null),
          console.log("Drop Direction:", V),
          console.log("Parent Object:", Q),
          console.log("Target Object:", z),
          console.log("API更新資料：", T),
          await rh(T);
      };
    m.useEffect(() => {
      if (w.isDragging)
        if (X()) {
          const V = (ne) => {
              ne.preventDefault(), R(ne);
            },
            Q = (ne) => oe(),
            z = (ne) => oe();
          return (
            document.addEventListener("pointermove", V, { passive: !1 }),
            document.addEventListener("pointerup", Q),
            document.addEventListener("pointercancel", z),
            () => {
              document.removeEventListener("pointermove", V),
                document.removeEventListener("pointerup", Q),
                document.removeEventListener("pointercancel", z);
            }
          );
        } else {
          const V = (W) => R(W),
            Q = (W) => oe(),
            z = (W) => {
              W.preventDefault(), R(W);
            },
            ne = (W) => oe();
          return (
            document.addEventListener("mousemove", V),
            document.addEventListener("mouseup", Q),
            document.addEventListener("touchmove", z, { passive: !1 }),
            document.addEventListener("touchend", ne),
            () => {
              document.removeEventListener("mousemove", V),
                document.removeEventListener("mouseup", Q),
                document.removeEventListener("touchmove", z),
                document.removeEventListener("touchend", ne);
            }
          );
        }
    }, [w.isDragging, _]),
      m.useEffect(() => {
        const y = (Q) => {
            Q.code === "Space" && !Q.repeat && (Q.preventDefault(), $(!0));
          },
          V = (Q) => {
            Q.code === "Space" && (Q.preventDefault(), $(!1), N(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", V),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", V);
          }
        );
      }, []);
    const be = m.useCallback(
        (y) => {
          var Q;
          if (k) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault();
            const z =
              (Q = n.current) == null ? void 0 : Q.getBoundingClientRect();
            if (!z) return;
            const ne = y.clientX - z.left,
              W = y.clientY - z.top,
              de = y.deltaY > 0 ? 0.9 : 1.1,
              ie = Math.max(0.1, Math.min(5, p.scale * de)),
              Z = ie / p.scale,
              Y = ne - (ne - p.x) * Z,
              ge = W - (W - p.y) * Z;
            b({ x: Y, y: ge, scale: ie });
          }
        },
        [p, k]
      ),
      B = m.useCallback(
        (y) => {
          k ||
            !S ||
            (N(!0), x({ x: y.clientX, y: y.clientY }), y.preventDefault());
        },
        [k, S]
      ),
      te = m.useCallback(
        (y) => {
          if (!v || k) return;
          const V = y.clientX - f.x,
            Q = y.clientY - f.y;
          b((z) => ({ ...z, x: z.x + V, y: z.y + Q })),
            x({ x: y.clientX, y: y.clientY });
        },
        [v, f, k]
      ),
      ve = m.useCallback(() => {
        N(!1);
      }, []),
      [L, C] = m.useState(null),
      [A, H] = m.useState({ x: 0, y: 0 }),
      se = (y) => {
        if (y.length < 2) return null;
        const V = y[0],
          Q = y[1];
        return Math.sqrt(
          Math.pow(Q.clientX - V.clientX, 2) +
            Math.pow(Q.clientY - V.clientY, 2)
        );
      },
      ue = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const V = y[0],
          Q = y[1];
        return {
          x: (V.clientX + Q.clientX) / 2,
          y: (V.clientY + Q.clientY) / 2,
        };
      },
      xe = m.useCallback(
        (y) => {
          if (!k) {
            if (y.touches.length === 2) {
              const V = se(y.touches),
                Q = ue(y.touches);
              C(V), H(Q);
            } else if (y.touches.length === 1) {
              const V = y.touches[0];
              x({ x: V.clientX, y: V.clientY }), N(!0);
            }
          }
        },
        [k]
      ),
      Ne = m.useCallback(
        (y) => {
          var V;
          if (!k) {
            if ((y.preventDefault(), y.touches.length === 2 && L !== null)) {
              const Q = se(y.touches),
                z = ue(y.touches);
              if (Q && L) {
                const ne =
                  (V = n.current) == null ? void 0 : V.getBoundingClientRect();
                if (!ne) return;
                const W = Q / L,
                  de = Math.max(0.1, Math.min(5, p.scale * W)),
                  ie = z.x - ne.left,
                  Z = z.y - ne.top,
                  Y = de / p.scale,
                  ge = ie - (ie - p.x) * Y,
                  he = Z - (Z - p.y) * Y;
                b({ x: ge, y: he, scale: de }), C(Q), H(z);
              }
            } else if (y.touches.length === 1 && v) {
              const Q = y.touches[0],
                z = Q.clientX - f.x,
                ne = Q.clientY - f.y;
              b((W) => ({ ...W, x: W.x + z, y: W.y + ne })),
                x({ x: Q.clientX, y: Q.clientY });
            }
          }
        },
        [p, L, v, f, k]
      ),
      Se = m.useCallback(() => {
        C(null), N(!1);
      }, []);
    m.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", be, { passive: !1 }),
          () => y.removeEventListener("wheel", be)
        );
    }, [be]);
    const _e = () => (!o || o.length === 0 ? [] : o),
      ae = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const V = y.map((W) => ({
            ...W,
            gridPos: q(W.gird_position || "0,0"),
          })),
          Q = Math.max(...V.map((W) => W.gridPos.row), 0),
          z = Math.max(...V.map((W) => W.gridPos.col), 0);
        return {
          sortedContents: V.sort((W, de) =>
            W.gridPos.row !== de.gridPos.row
              ? W.gridPos.row - de.gridPos.row
              : W.gridPos.col - de.gridPos.col
          ),
          maxRow: Q,
          maxCol: z,
        };
      },
      me = _e(),
      we = Math.max(...me.map((y) => q(y.gird_position || "0,0").row), 0),
      De = Math.max(...me.map((y) => q(y.gird_position || "0,0").col), 0),
      Je = (y) => {
        const V = (z) => {
            if (
              z.width &&
              Array.isArray(z.width) &&
              typeof z.width_index == "number" &&
              z.width_index >= 0 &&
              z.width_index < z.width.length
            ) {
              const W = parseFloat(z.width[z.width_index]);
              if (!isNaN(W)) {
                const de = W * 20;
                return Math.max(200, de);
              }
            }
            return 200;
          },
          Q = (z) => {
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
        switch (y.type) {
          case "med_box":
            return (
              V(y),
              s.jsxs(
                "div",
                {
                  "data-container-guid": y.GUID,
                  className: `${
                    y.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Q(
                    y.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    s.jsx("div", {
                      onMouseDown:
                        k && re(y.type) && !X()
                          ? (z) =>
                              ce(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      onTouchStart:
                        k && re(y.type) && !X()
                          ? (z) =>
                              ce(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      onPointerDown:
                        k && re(y.type) && X()
                          ? (z) =>
                              ce(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      className: k && re(y.type) ? "cursor-move" : "",
                      children: s.jsx(Ts, { content: y, isAdminMode: g }),
                    }),
                    s.jsx("div", { className: "flex-1 p-1", children: Ce(y) }),
                  ],
                },
                y.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return s.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${Q(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && re(y.type) && X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && re(y.type) ? "cursor-move" : "",
                    children: s.jsx(Ts, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", { className: "flex-1  p-1", children: Ce(y) }),
                ],
              },
              y.GUID
            );
          case "grid_draw":
            return s.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && re(y.type) && X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && re(y.type) ? "cursor-move" : "",
                    children: s.jsx(Ts, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: Ce(y),
                  }),
                ],
              },
              y.GUID
            );
          default:
            return s.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  y.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  s.jsx("div", {
                    onMouseDown:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && re(y.type) && !X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && re(y.type) && X()
                        ? (z) =>
                            ce(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && re(y.type) ? "cursor-move" : "",
                    children: s.jsx(Ts, { content: y, isAdminMode: g }),
                  }),
                  s.jsx("div", { className: "flex-1 p-1", children: Ce(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      Ce = (y) => {
        const V = (Q, z, ne) => {
          const W = Array(z + 1)
              .fill(null)
              .map(() => Array(ne + 1).fill(!1)),
            de = {};
          return (
            Q.forEach((ie) => {
              const Z = q(ie.gird_position || "0,0");
              (de[`${Z.row},${Z.col}`] = ie), (W[Z.row][Z.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: z + 1 }, (ie, Z) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (z + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: ne + 1 }, (Y, ge) => {
                        const he = `${Z},${ge}`,
                          Pe = de[he];
                        return Pe
                          ? s.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (ne + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Je(Pe),
                                  (_ == null ? void 0 : _.container.GUID) ===
                                    Pe.GUID &&
                                    s.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: s.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          _.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : _.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : _.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              ge
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (ne + 1)}%`,
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
                              ge
                            );
                      }),
                    },
                    Z
                  )
                ),
              }),
            })
          );
        };
        switch (y.type) {
          case "parent_container":
          case "sub_container":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: ge,
                maxCol: he,
              } = ae(y.contents);
              return V(Y, ge, he);
            } else
              return s.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: s.jsx("tbody", { children: s.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: ge,
                maxCol: he,
              } = ae(y.contents);
              return V(Y, ge, he);
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
            if (y.medMapStock && y.medMapStock.length > 0) {
              const Y = y.medMapStock,
                ge = Y.length,
                he = ge > 0 ? 100 / ge : 100,
                Pe = y.width ? y.width * 5 : 500;
              return s.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Pe}px` },
                children: Y.map((Re, At) => {
                  const [Fn, kr] = Re.location.split(",").map(Number);
                  return s.jsxs(
                    "div",
                    {
                      className:
                        "border-r border-gray-300 last:border-r-0 p-1 flex flex-col justify-center items-center cursor-pointer hover:bg-yellow-50 transition-colors",
                      style: { width: `${he}%` },
                      onClick: () => i(y, Re),
                      children: [
                        s.jsx("div", {
                          className:
                            "text-base font-semibold text-gray-800 truncate w-full text-center",
                          children: Re.name || Re.material_no,
                        }),
                        s.jsxs("div", {
                          className: "text-sm text-gray-600 mt-1",
                          children: ["數量: ", Re.qty || 0],
                        }),
                        s.jsxs("div", {
                          className: "text-sm text-gray-500 mt-1",
                          children: ["位置: ", Fn, "-", kr],
                        }),
                      ],
                    },
                    Re.GUID || At
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: ge,
                maxCol: he,
              } = ae(y.contents);
              return V(Y, ge, he);
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
          case "none":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: ge,
                maxCol: he,
              } = ae(y.contents);
              return V(Y, ge, he);
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
            const Q = Math.max(
                ...y.Boxes.flat().map((Y) => +Y.Row + +Y.Height - 1)
              ),
              z = Math.max(
                ...y.Boxes.flat().map((Y) => +Y.Column + +Y.Width - 1)
              ),
              ne = Q + 1,
              W = z + 1,
              de = y.Boxes.flat(),
              ie = Array(ne)
                .fill(null)
                .map(() => Array(W).fill(!1)),
              Z = {};
            return (
              de.forEach((Y) => {
                Y.Slave || (Z[`${Y.Row},${Y.Column}`] = Y);
              }),
              de.forEach((Y) => {
                if (!Y.Slave && (Y.Width > 1 || Y.Height > 1))
                  for (let ge = Y.Row; ge < Y.Row + Y.Height; ge++)
                    for (let he = Y.Column; he < Y.Column + Y.Width; he++)
                      (ge !== Y.Row || he !== Y.Column) && (ie[ge][he] = !0);
              }),
              s.jsxs("div", {
                className:
                  "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
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
                "bg-violet-100 h-20 flex ml-2 mt-2 mb-6 rounded-xl border-2 border-violet-400 w-[140px] items-center justify-center",
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
            return y.med_info && y.med_info.length > 0
              ? s.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    s.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: y.med_info[0].name,
                    }),
                    s.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        s.jsxs("div", { children: [y.box_type, "吋"] }),
                        s.jsxs("div", {
                          children: [y.width[y.width_index], "cm"],
                        }),
                      ],
                    }),
                  ],
                })
              : s.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: s.jsx("div", {
                    className: "text-base",
                    children: "空藥盒",
                  }),
                });
          default:
            return y.contents && y.contents.length > 0
              ? s.jsx("div", {
                  className: "space-y-2",
                  children: y.contents.map((Y) => Je(Y)),
                })
              : s.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: s.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", y.type],
                  }),
                });
        }
      },
      qe = (y) => {
        if (
          (q(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const V = (Q) => {
          if (!Q || Q.length === 0)
            return s.jsx("table", {
              className: "w-full h-full border-none",
              children: s.jsx("tbody", {
                children: s.jsx("tr", {
                  children: s.jsx("td", {
                    className: "p-4 text-center text-gray-500",
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
          const { sortedContents: z, maxRow: ne, maxCol: W } = ae(Q),
            de = Array(ne + 1)
              .fill(null)
              .map(() => Array(W + 1).fill(!1)),
            ie = {};
          return (
            z.forEach((Z) => {
              const Y = q(Z.gird_position || "0,0");
              (ie[`${Y.row},${Y.col}`] = Z), (de[Y.row][Y.col] = !0);
            }),
            s.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: s.jsx("tbody", {
                children: Array.from({ length: ne + 1 }, (Z, Y) =>
                  s.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: W + 1 }, (ge, he) => {
                        const Pe = `${Y},${he}`,
                          Re = ie[Pe];
                        return Re
                          ? s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (ne + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: Je(Re),
                              },
                              he
                            )
                          : s.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (ne + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: s.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              he
                            );
                      }),
                    },
                    Y
                  )
                ),
              }),
            })
          );
        };
        return s.jsxs(
          "div",
          {
            "data-container-guid": y.GUID,
            className:
              "border-2 rounded-lg shadow-lg bg-orange-50 border-orange-300 min-h-[120px] flex flex-col overflow-hidden w-full h-full",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-2 border-b-2 bg-orange-100 border-b-orange-200",
                children: [
                  s.jsx("div", {
                    className: "flex items-center space-x-2",
                    children: s.jsx("span", {
                      className: "text-lg font-semibold text-gray-800",
                      children: y.name,
                    }),
                  }),
                  s.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: s.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (Q) => {
                        Q.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", y),
                          y
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(y))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: s.jsx(wt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (_ == null ? void 0 : _.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: V(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      Ue = m.useCallback(
        (y) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", y),
            console.log("🎯 apiDepartmentData:", !!o),
            console.log("🎯 canvasRef.current:", !!n.current),
            !o || !n.current)
          ) {
            console.warn("⚠️ 無法定位藥品：缺少必要資料", {
              hasApiData: !!o,
              hasCanvasRef: !!n.current,
            });
            return;
          }
          const V = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", V), !V)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", V);
          const Q = (ne) => {
              for (const W of ne) {
                if (W.type === "grid_draw" && W.Boxes) {
                  for (const de of W.Boxes)
                    for (const ie of de)
                      if (ie.Code === V) {
                        const Z = document.querySelector(
                          `[data-container-guid="${W.GUID}"]`
                        );
                        if (Z)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", W),
                            { element: Z, bounds: Z.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  W.type === "list_draw" &&
                  W.drugs &&
                  W.drugs.some((ie) => ie.code === V)
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", W),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (
                  (W.type === "store_shelves" ||
                    W.type === "dispensing_shelves") &&
                  W.medMapStock &&
                  W.medMapStock.some(
                    (ie) => ie.code === V || ie.material_no === V
                  )
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", W),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (
                  W.type === "med_box" &&
                  W.med_info &&
                  W.med_info.length > 0 &&
                  W.med_info.some((ie) => ie.code === V)
                ) {
                  const ie = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (ie)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", W),
                      { element: ie, bounds: ie.getBoundingClientRect() }
                    );
                }
                if (W.contents && W.contents.length > 0) {
                  const de = Q(W.contents);
                  if (de) return de;
                }
              }
              return null;
            },
            z = Q(o);
          if (z) {
            const ne = n.current.getBoundingClientRect(),
              W = z.bounds,
              de = (W.left + W.right) / 2,
              ie = (W.top + W.bottom) / 2,
              Z = (de - ne.left - p.x) / p.scale,
              Y = (ie - ne.top - p.y) / p.scale,
              ge = ne.width / 2,
              he = ne.height / 2,
              Pe = ge - Z * p.scale,
              Re = he - Y * p.scale;
            b((At) => ({ ...At, x: Pe, y: Re })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: de, y: ie },
                elementCanvasPos: { x: Z, y: Y },
                screenCenter: { x: ge, y: he },
                newTransform: { x: Pe, y: Re },
              }),
              d(`已定位到藥品：${y.CHT_NAME || y.NAME || V}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              d("未找到該藥品的儲存位置", "error");
        },
        [o, p, d]
      );
    m.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Ue }
      )
    );
    const Tt = async (y) => {
      if (y.key === "Enter" && M.trim() && !j) {
        y.preventDefault(), P(!0);
        try {
          console.log("🔍 搜尋條碼:", M);
          const V = await ke.searchByBarCode(M.trim());
          console.log("📋 條碼搜尋回應:", V),
            V.Code === 200
              ? (console.log("✅ 找到藥品資料:", V.Data),
                d("找到藥品資料", "success"),
                Ue(V.Data))
              : V.Code === -200 && V.Result === "查無資料"
              ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                d("查無資料，請建立條碼", "error"),
                h(M.trim()),
                I(""))
              : (console.log("❌ 搜尋失敗:", V.Result),
                d(V.Result || "搜尋失敗", "error"));
        } catch (V) {
          console.error("條碼搜尋錯誤:", V), d("搜尋失敗，請稍後再試", "error");
        } finally {
          P(!1);
        }
      }
    };
    return s.jsxs("div", {
      className: "relative w-full h-full overflow-hidden bg-gray-50",
      children: [
        s.jsx("div", {
          className:
            "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
            children: [
              s.jsx("input", {
                type: "text",
                value: M,
                onChange: (y) => I(y.target.value),
                onKeyDown: Tt,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: j,
              }),
              s.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: j,
                children: s.jsx(Nr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: s.jsx("button", {
            onClick: () => u(!k),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              k
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: k ? "Unlock Canvas" : "Lock Canvas",
            children: k
              ? s.jsx(Pd, { className: "w-6 h-6" })
              : s.jsx(Id, { className: "w-6 h-6" }),
          }),
        }),
        s.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            S && !k ? "cursor-grab" : "cursor-default"
          } ${v ? "cursor-grabbing" : ""}`,
          onMouseDown: B,
          onMouseMove: te,
          onMouseUp: ve,
          onMouseLeave: ve,
          onTouchStart: xe,
          onTouchMove: Ne,
          onTouchEnd: Se,
          children: s.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${p.x}px, ${p.y}px) scale(${p.scale})`,
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
                    borderSpacing: `${U}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: s.jsx("tbody", {
                    children: Array.from({ length: we + 1 }, (y, V) =>
                      s.jsx(
                        "tr",
                        {
                          children: Array.from({ length: De + 1 }, (Q, z) => {
                            const ne = me.find((W) => {
                              const de = q(W.gird_position || "0,0");
                              return de.row === V && de.col === z;
                            });
                            return ne
                              ? s.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: qe(ne),
                                  },
                                  z
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
                                  z
                                );
                          }),
                        },
                        V
                      )
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
      ],
    });
  });
Rd.displayName = "DrugCanvas";
const rh = async (e) => {
    if ((console.log(e), Object.keys(e.current).length === 0)) {
      console.log("沒有需要更新的容器資料");
      return;
    }
    console.log("🚀 開始批次更新容器資料:", e.current);
    const t = [],
      n = [],
      r = [];
    Object.values(e.current).forEach((l) => {
      console.log("開始整理API REQ資料：", l);
      const a = {
        GUID: l.GUID,
        position: l.position,
        MASTER_GUID: l.MASTER_GUID,
        serverName: l.serverName,
        serverType: l.serverType,
      };
      switch (l.type) {
        case "med_box":
          t.push(a);
          break;
        case "grid_draw":
        case "list_draw":
          n.push(a);
          break;
        case "dispensing_shelves":
        case "store_shelves":
          r.push(a);
          break;
        default:
          console.warn("未知的容器類型:", l.type);
      }
    });
    const o = [];
    if (
      (t.length > 0 &&
        (console.log("📦 更新藥盒資料:", t),
        o.push(
          ke
            .updateMedMapBox(t)
            .then((l) => ({ type: "med_box", response: l, count: t.length }))
            .catch((l) => ({ type: "med_box", error: l, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        o.push(
          ke
            .updateMedMapDrawer(n)
            .then((l) => ({ type: "drawer", response: l, count: n.length }))
            .catch((l) => ({ type: "drawer", error: l, count: n.length }))
        )),
      r.length > 0 &&
        (console.log("🏪 更新層架資料:", r),
        o.push(
          ke
            .updateMedMapShelf(r)
            .then((l) => ({ type: "shelf", response: l, count: r.length }))
            .catch((l) => ({ type: "shelf", error: l, count: r.length }))
        )),
      o.length === 0)
    ) {
      console.log("沒有需要呼叫的 API");
      return;
    }
    try {
      const l = await Promise.all(o);
      let a = 0,
        i = 0;
      const c = [];
      l.forEach((h) => {
        var d, g;
        if (h.error)
          (i += h.count),
            c.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((d = h.response) == null ? void 0 : d.Code) === 200)
          (a += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          i += h.count;
          const p =
            ((g = h.response) == null ? void 0 : g.Result) || "未知錯誤";
          c.push(`${h.type}: ${p}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (l) {
      console.error("💥 批次更新過程中發生錯誤:", l);
    } finally {
      console.log("完成更新");
    }
  },
  sh = "modulepreload",
  oh = function (e) {
    return "/" + e;
  },
  dc = {},
  lh = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = oh(c)), c in dc)) return;
          dc[c] = !0;
          const h = c.endsWith(".css"),
            d = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const g = document.createElement("link");
          if (
            ((g.rel = h ? "stylesheet" : sh),
            h || (g.as = "script"),
            (g.crossOrigin = ""),
            (g.href = c),
            i && g.setAttribute("nonce", i),
            document.head.appendChild(g),
            h)
          )
            return new Promise((p, b) => {
              g.addEventListener("load", p),
                g.addEventListener("error", () =>
                  b(new Error(`Unable to preload CSS for ${c}`))
                );
            });
        })
      );
    }
    function l(a) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented))
        throw a;
    }
    return o.then((a) => {
      for (const i of a || []) i.status === "rejected" && l(i.reason);
      return t().catch(l);
    });
  },
  Vt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  ah = () => {
    const {
        medBoxModalOpen: e,
        closeMedBoxModal: t,
        selectedMedBox: n,
        selectedDepartmentType: r,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        modalMode: c,
        medicineList: h,
      } = Ke(),
      { t: d } = ft(),
      [g, p] = m.useState(0),
      [b, v] = m.useState({}),
      [N, k] = m.useState(""),
      [u, f] = m.useState(""),
      [x, S] = m.useState("N"),
      [$, M] = m.useState([]),
      [I, j] = m.useState(!1),
      [P, w] = m.useState(!1),
      [O, _] = m.useState(null),
      [E, T] = m.useState(null),
      [X, U] = m.useState(!1),
      [G, D] = m.useState(!1);
    m.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const B = {};
          Vt.forEach((te, ve) => {
            B[ve] = 0;
          }),
            v(B),
            k(""),
            w(!1),
            J();
        } else {
          const B = Vt.findIndex(
            (te) => te.box_type === n.box_type || te.type === n.box_type
          );
          if ((console.log(n), B >= 0)) {
            p(B);
            const ve = Vt[B].width.findIndex((C) => {
                var A;
                return (
                  C === ((A = n.width) == null ? void 0 : A[n.width_index || 0])
                );
              }),
              L = {};
            Vt.forEach((C, A) => {
              A === B ? (L[A] = ve >= 0 ? ve : 0) : (L[A] = 0);
            }),
              v(L);
          } else {
            p(0);
            const te = {};
            Vt.forEach((ve, L) => {
              te[L] = 0;
            }),
              v(te);
          }
          k(n.ip || ""),
            T({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const J = () => {
        n && n.parentShelf && _(n.parentShelf);
      },
      re = (B) => {
        if (!B || !B.contents || B.contents.length === 0) return "0,0";
        let te = -1,
          ve = 0;
        return (
          B.contents.forEach((L) => {
            if (L.gird_position) {
              const [C, A] = L.gird_position.split(",").map(Number);
              A > te && ((te = A), (ve = C));
            }
          }),
          `${ve},${te + 1}`
        );
      },
      K = () => {
        if (!E || c !== "edit") return !1;
        const B = Vt[g],
          te = b[g] || 0,
          ve = B.box_type || B.type || B.name;
        return (
          E.box_type !== ve ||
          E.width_index !== te ||
          E.ip !== N ||
          JSON.stringify(E.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      q = (B) => {
        p(B);
      },
      je = (B, te) => {
        v((ve) => ({ ...ve, [B]: te }));
      },
      pe = () => {
        n && (c === "add" ? F() : le());
      },
      ye = () => {
        t();
      },
      F = async () => {
        if (!n || !O) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        w(!0);
        try {
          const B = Vt[g],
            te = b[g] || 0,
            ve = B.width[te],
            L = re(O),
            C = {
              Master_GUID: O.GUID,
              position: L,
              width: ve.toString(),
              height: "60",
              ip_box: N,
              serverName: O.serverName || "",
              serverType: O.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", C);
          const A = await ke.addMedMapBox(C);
          A.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ce())
            : a(`藥盒新增失敗：${A.Result || "未知錯誤"}`, "error");
        } catch (B) {
          console.error("Add med box failed:", B),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          w(!1);
        }
      },
      le = async () => {
        var B;
        if (!n || !K()) {
          a("沒有資料變更", "error");
          return;
        }
        U(!0);
        try {
          const te = Vt[g],
            ve = b[g] || 0,
            L = te.width[ve],
            C = te.box_type || te.type || te.name,
            A = E.box_type !== C || E.width_index !== ve || E.ip !== N,
            H =
              JSON.stringify(E.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            se = [];
          if (A) {
            const Ne = {
              GUID: n.GUID,
              Master_GUID: n.MASTER_GUID,
              position: n.gird_position,
              ip_light: N,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            se.push(ke.updateMedMapBox([Ne]));
          }
          H &&
            se.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const ue = await Promise.all(se);
          if (ue.every((Ne) => Ne.Code === 200))
            a("藥盒更新成功", "success"), t(), await ce();
          else {
            const Ne = ue.filter((Se) => Se.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((B = Ne[0]) == null ? void 0 : B.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (te) {
          console.error("Update med box failed:", te),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          U(!1);
        }
      },
      ce = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const B = await ke.getMedMapByDepartment(r);
          if (B.Code === 200 && B.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const te = await lh(() => Promise.resolve().then(() => Pm), void 0),
              ve = te.default.convertMedMapApiToFakeData(B.Data);
            if (!te.default.validateConvertedData(ve)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ve), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", B),
              a("資料更新失敗：API 錯誤", "error");
        } catch (B) {
          console.error("💥 重新獲取藥品地圖資料失敗:", B),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      R = async () => {
        j(!0);
        try {
          const B = u.toLowerCase().trim();
          let te = h;
          B &&
            (te = te.filter((ve) => {
              var L, C, A;
              return (
                ((L = ve.CODE) == null
                  ? void 0
                  : L.toLowerCase().includes(B)) ||
                ((C = ve.NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(B)) ||
                ((A = ve.CHT_NAME) == null
                  ? void 0
                  : A.toLowerCase().includes(B))
              );
            })),
            x !== "N" && (te = te.filter((ve) => ve.DRUGKIND === x)),
            M(te);
        } catch (B) {
          console.error("Search failed:", B), M([]);
        } finally {
          j(!1);
        }
      },
      oe = (B, te) => {
        console.log("📸 掃描成功，藥品資料:", te), D(!1), be(te);
      },
      be = async (B) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", B.CODE);
            const te = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              B.CODE,
              n.storage || {}
            );
            te.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", te.Data),
                (n.storage = te.Data),
                (n.med_info = [
                  { name: B.NAME, cht_name: B.CHT_NAME, code: B.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", te),
                a(`藥品更新失敗：${te.Result || "未知錯誤"}`, "error"));
          } catch (te) {
            console.error("💥 藥品代碼更新發生錯誤:", te),
              a("藥品更新失敗：網路錯誤", "error");
          }
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: ye,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (B) => B.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: d(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: ye,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsx("div", {
                        className: "gap-16 flex",
                        children: s.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            s.jsx("h3", {
                              className: "text-base font-medium text-gray-900",
                              children: d("form.ipAddress"),
                            }),
                            s.jsx("div", {
                              className: "flex items-center",
                              children: s.jsx("input", {
                                type: "text",
                                onChange: (B) => k(B.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  d("placeholder.ipAddress"),
                                className:
                                  "px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors w-64",
                              }),
                            }),
                          ],
                        }),
                      }),
                      s.jsxs("div", {
                        className: "flex gap-16",
                        children: [
                          s.jsxs("div", {
                            className: "space-y-1 min-w-[260px]",
                            children: [
                              s.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: d("form.medBoxType"),
                              }),
                              s.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Vt.map((B, te) =>
                                  s.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        g === te
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        s.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: te,
                                          checked: g === te,
                                          onChange: () => q(te),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        s.jsx("div", {
                                          children: s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: B.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    te
                                  )
                                ),
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              s.jsx("h3", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: d("form.widthSelection"),
                              }),
                              Vt.map((B, te) =>
                                s.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      g === te ? "block" : "hidden"
                                    }`,
                                    children: B.width.map((ve, L) =>
                                      s.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            g === te && (b[te] || 0) === L
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            s.jsx("input", {
                                              type: "radio",
                                              name: `width-${te}`,
                                              value: L,
                                              checked:
                                                g === te && (b[te] || 0) === L,
                                              onChange: () => je(te, L),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            s.jsx("div", {
                                              className: "text-center",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ve, " ", B.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${te}-${L}`
                                      )
                                    ),
                                  },
                                  te
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex gap-6",
                        children: [
                          c === "edit" &&
                            s.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                s.jsx("h3", {
                                  className:
                                    "text-lg font-medium text-gray-900",
                                  children: d("form.drugInfo"),
                                }),
                                s.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? s.jsx("div", {
                                          children: n.med_info.map((B, te) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "space-y-2 p-4 border border-gray-200 rounded-lg min-h-[262px] max-h-[262px]",
                                                children: [
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          d("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.code ||
                                                          d("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          d("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.name ||
                                                          d("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          d("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      s.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.cht_name ||
                                                          d("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              te
                                            )
                                          ),
                                        })
                                      : s.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: s.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: d("status.noDrugData"),
                                          }),
                                        }),
                                }),
                              ],
                            }),
                          c === "add" &&
                            s.jsxs("div", {
                              className: "space-y-2 w-[50%]",
                              children: [
                                s.jsx("h3", {
                                  className:
                                    "text-base font-medium text-gray-900",
                                  children: d("form.drugInfo"),
                                }),
                                s.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: s.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: s.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: d("status.newMedBoxNoDrug"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          s.jsxs("div", {
                            className: "space-y-2 w-[50%]",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  s.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-gray-900",
                                    children: d("form.drugSearch"),
                                  }),
                                  s.jsx("button", {
                                    onClick: () => D(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: s.jsx(Nr, {
                                      className: "w-5 h-5 text-gray-600",
                                    }),
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  s.jsx("input", {
                                    type: "text",
                                    value: u,
                                    onChange: (B) => f(B.target.value),
                                    placeholder: d("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: x,
                                    onChange: (B) => S(B.target.value),
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
                                    onClick: R,
                                    disabled: I,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      I &&
                                        s.jsx(Pt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      d("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: I
                                  ? s.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        s.jsx(Pt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        d("status.searching"),
                                      ],
                                    })
                                  : $.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: $.map((B, te) =>
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
                                                    children: B.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: B.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: B.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => be(B),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: d("button.add"),
                                                children: s.jsx(wt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          B.GUID || te
                                        )
                                      ),
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: d(
                                        u || x !== "N"
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
                    "flex items-center justify-end space-x-3 py-2 px-4 border-t border-gray-200",
                  children: [
                    s.jsx("button", {
                      onClick: ye,
                      disabled: P || X,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: d("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: pe,
                      disabled: P || X,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (P || X) &&
                          s.jsx(Pt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", {
                          children: P
                            ? "新增中..."
                            : X
                            ? "更新中..."
                            : d(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(Ao, {
              isOpen: G,
              onClose: () => D(!1),
              onScanSuccess: oe,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  ih = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: r,
      } = Ke(),
      { t: o } = ft(),
      [l, a] = m.useState(""),
      [i, c] = m.useState([]),
      [h, d] = m.useState(""),
      [g, p] = m.useState("N"),
      [b, v] = m.useState([]),
      [N, k] = m.useState(!1);
    m.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (M) => {
        c((I) => I.filter((j) => j.code !== M));
      },
      f = async () => {
        k(!0);
        try {
          const M = await ke.searchMedicine(h, g);
          v(M);
        } catch (M) {
          console.error("Search failed:", M), v([]);
        } finally {
          k(!1);
        }
      },
      x = (M) => {
        const I = {
          id: M.GUID || `${Date.now()}_${Math.random()}`,
          name: M.NAME,
          cht_name: M.CHT_NAME,
          code: M.CODE,
        };
        c((j) => (j.some((w) => w.code === I.code) ? j : [...j, I]));
      },
      S = () => {
        n && ((n.name = l), (n.med_info = i), r(), t());
      },
      $ = () => {
        t();
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: $,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (M) => M.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: $,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
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
                            children: o("form.drawerName"),
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: l,
                            onChange: (M) => a(M.target.value),
                            placeholder:
                              (n == null ? void 0 : n.name) ||
                              o("placeholder.drawerName"),
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
                                children: o("form.drugList"),
                              }),
                              i.length > 0
                                ? s.jsx("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2",
                                    children: i.map((M) =>
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
                                                    M.code &&
                                                      s.jsx("div", {
                                                        children: s.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: M.code,
                                                        }),
                                                      }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          M.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    s.jsx("div", {
                                                      children: s.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          M.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              s.jsx("button", {
                                                onClick: () => u(M.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: s.jsx(Qe, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        M.id
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
                                          children: o("status.drawerNoDrug"),
                                        }),
                                        s.jsx("div", {
                                          className: "text-gray-400 text-sm",
                                          children: o("status.drugListEmpty"),
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
                                children: o("form.drugSearch"),
                              }),
                              s.jsxs("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                  s.jsx("input", {
                                    type: "text",
                                    value: h,
                                    onChange: (M) => d(M.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  s.jsxs("select", {
                                    value: g,
                                    onChange: (M) => p(M.target.value),
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
                                    onClick: f,
                                    disabled: N,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      N &&
                                        s.jsx(Pt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      o("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[300px] max-h-[300px] overflow-y-auto",
                                children: N
                                  ? s.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        s.jsx(Pt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : b.length > 0
                                  ? s.jsx("div", {
                                      className: "space-y-1",
                                      children: b.map((M, I) =>
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
                                                    children: M.NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: M.CHT_NAME,
                                                  }),
                                                  s.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: M.CODE,
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => x(M),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: s.jsx(wt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          M.GUID || I
                                        )
                                      ),
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        h || g !== "N"
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
                      onClick: $,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    s.jsx("button", {
                      onClick: S,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                      children: o("button.save"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  ch = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: r,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Ke(),
      { t: c } = ft(),
      [h, d] = m.useState(""),
      [g, p] = m.useState(null),
      [b, v] = m.useState(!1),
      [N, k] = m.useState(!1),
      [u, f] = m.useState(null),
      [x, S] = m.useState(""),
      [$, M] = m.useState("N"),
      [I, j] = m.useState([]),
      [P, w] = m.useState(!1),
      [O, _] = m.useState(0),
      [E, T] = m.useState({ x: 0, y: 0 });
    m.useEffect(() => {
      if (n && e)
        if ((d(n.name || ""), n.drawer)) {
          if (!b) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const C = JSON.parse(JSON.stringify(n.drawer));
            p(C), v(!0), console.log("✅ 備份完成，備份資料:", C);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), p(null), v(!1);
    }, [n, e, b]),
      m.useEffect(() => {
        e || (v(!1), p(null), f(null));
      }, [e]);
    const X = () => {
        n && ve();
      },
      U = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", g),
          console.log("當前 selectedGridDraw:", n),
          n && g && b)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const C = JSON.parse(JSON.stringify(g));
          if (((n.drawer = C), o)) {
            const A = (se) => {
                se.forEach((ue) => {
                  ue.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ue.drawer = C)),
                    ue.contents && Array.isArray(ue.contents) && A(ue.contents),
                    ue.components &&
                      Array.isArray(ue.components) &&
                      A(ue.components);
                });
              },
              H = JSON.parse(JSON.stringify(o));
            A(H), l(H), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!g),
            console.log("hasBackup:", b);
        f(null), v(!1), p(null), r(), t();
      },
      G = (C, A) => {
        if (!u) return !1;
        const H = Math.min(u.startRow, u.endRow),
          se = Math.max(u.startRow, u.endRow),
          ue = Math.min(u.startCol, u.endCol),
          xe = Math.max(u.startCol, u.endCol);
        return C >= H && C <= se && A >= ue && A <= xe;
      },
      D = (C) => {
        var _e;
        if (
          !((_e = n == null ? void 0 : n.drawer) != null && _e.Boxes) ||
          C.Slave
        )
          return { width: 1, height: 1 };
        const H = n.drawer.Boxes.flat().filter(
          (ae) =>
            ae.Slave &&
            ae.MasterBox_Row === C.Row &&
            ae.MasterBox_Column === C.Column
        );
        if (H.length === 0) return { width: 1, height: 1 };
        const se = [C, ...H],
          ue = Math.min(...se.map((ae) => ae.Row)),
          xe = Math.max(...se.map((ae) => ae.Row)),
          Ne = Math.min(...se.map((ae) => ae.Column));
        return {
          width: Math.max(...se.map((ae) => ae.Column)) - Ne + 1,
          height: xe - ue + 1,
        };
      },
      J = () => {
        var Ne;
        if (!u || !((Ne = n == null ? void 0 : n.drawer) != null && Ne.Boxes))
          return [];
        const C = n.drawer.Boxes.flat(),
          A = Math.min(u.startRow, u.endRow),
          H = Math.max(u.startRow, u.endRow),
          se = Math.min(u.startCol, u.endCol),
          ue = Math.max(u.startCol, u.endCol),
          xe = [];
        return (
          C.forEach((Se) => {
            if (!Se.Slave) {
              const _e = D(Se),
                ae = Se.Row + _e.height - 1,
                me = Se.Column + _e.width - 1;
              Se.Row >= A &&
                ae <= H &&
                Se.Column >= se &&
                me <= ue &&
                xe.push(Se);
            }
          }),
          xe
        );
      },
      re = (C, A, H, se) => {
        var me;
        if (!u || !((me = n == null ? void 0 : n.drawer) != null && me.Boxes))
          return !1;
        const ue = n.drawer.Boxes.flat();
        let xe = !0,
          Ne = C,
          Se = A,
          _e = H,
          ae = se;
        for (; xe; )
          (xe = !1),
            ue.forEach((we) => {
              if (!we.Slave) {
                const De = D(we),
                  Je = we.Row + De.height - 1,
                  Ce = we.Column + De.width - 1;
                !(we.Row > Se || Je < Ne || we.Column > ae || Ce < _e) &&
                  (we.Row < Ne && ((Ne = we.Row), (xe = !0)),
                  Je > Se && ((Se = Je), (xe = !0)),
                  we.Column < _e && ((_e = we.Column), (xe = !0)),
                  Ce > ae && ((ae = Ce), (xe = !0)));
              }
            });
        return { minRow: Ne, maxRow: Se, minCol: _e, maxCol: ae };
      },
      K = () => {
        var xe;
        if (!u || !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes))
          return !1;
        const C = Math.min(u.startRow, u.endRow),
          A = Math.max(u.startRow, u.endRow),
          H = Math.min(u.startCol, u.endCol),
          se = Math.max(u.startCol, u.endCol),
          ue = n.drawer.Boxes.flat();
        for (let Ne = C; Ne <= A; Ne++)
          for (let Se = H; Se <= se; Se++) {
            let _e = !1;
            for (const ae of ue)
              if (!ae.Slave) {
                const me = D(ae),
                  we = ae.Row + me.height - 1,
                  De = ae.Column + me.width - 1;
                if (Ne >= ae.Row && Ne <= we && Se >= ae.Column && Se <= De) {
                  _e = !0;
                  break;
                }
              }
            if (!_e) return !1;
          }
        return !0;
      },
      q = () => {
        var me, we;
        const C = J();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (C.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const A =
            ((we =
              (me = n == null ? void 0 : n.drawer) == null
                ? void 0
                : me.Boxes) == null
              ? void 0
              : we.flat()) || [],
          H = C.some(
            (De) =>
              A.filter(
                (Ce) =>
                  Ce.Slave &&
                  Ce.MasterBox_Row === De.Row &&
                  Ce.MasterBox_Column === De.Column
              ).length > 0
          ),
          se = Math.min(u.startRow, u.endRow),
          ue = Math.max(u.startRow, u.endRow),
          xe = Math.min(u.startCol, u.endCol),
          Ne = Math.max(u.startCol, u.endCol),
          Se = A.some(
            (De) =>
              De.Slave &&
              De.Row >= se &&
              De.Row <= ue &&
              De.Column >= xe &&
              De.Column <= Ne
          );
        return { canMerge: C.length > 1 && K(), canUnmerge: H || Se };
      },
      { canMerge: je, canUnmerge: pe } = q(),
      ye = async () => {
        w(!0);
        try {
          const C = x.toLowerCase().trim();
          let A = i;
          C &&
            (A = A.filter((H) => {
              var se, ue, xe;
              return (
                ((se = H.CODE) == null
                  ? void 0
                  : se.toLowerCase().includes(C)) ||
                ((ue = H.NAME) == null
                  ? void 0
                  : ue.toLowerCase().includes(C)) ||
                ((xe = H.CHT_NAME) == null
                  ? void 0
                  : xe.toLowerCase().includes(C))
              );
            })),
            $ !== "N" && (A = A.filter((H) => H.DRUGKIND === $)),
            j(A);
        } catch (C) {
          console.error("Search failed:", C), j([]);
        } finally {
          w(!1);
        }
      },
      F = async (C) => {
        var H;
        if (!u || !((H = n == null ? void 0 : n.drawer) != null && H.Boxes))
          return;
        const A = J();
        if (A.length !== 0)
          try {
            const se = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${A[0].GUID}`, `code=${C.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", se);
            const ue = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(se),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", ue),
              ue.Code === 200 && ue.Data)
            ) {
              if (
                ((n.drawer = ue.Data),
                ue.Data.Boxes && (n.Boxes = ue.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const xe = (Se) => {
                    Se.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer),
                        n.Boxes && (_e.Boxes = n.Boxes)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          xe(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          xe(_e.components);
                    });
                  },
                  Ne = JSON.parse(JSON.stringify(o));
                xe(Ne), l(Ne);
              }
              f(null), r();
            } else
              console.error("❌ 藥品更新失敗:", ue),
                a(`藥品更新失敗：${ue.Result || "未知錯誤"}`, "error");
          } catch (se) {
            console.error("💥 藥品更新 API 調用失敗:", se),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      le = (C, A, H) => {
        H.preventDefault(),
          H.stopPropagation(),
          "touches" in H &&
            (_(Date.now()),
            T({ x: H.touches[0].clientX, y: H.touches[0].clientY })),
          k(!0),
          f({ startRow: C, startCol: A, endRow: C, endCol: A });
      },
      ce = (C, A) => {
        if (!N || !u) return;
        const H = Math.min(u.startRow, C),
          se = Math.max(u.startRow, C),
          ue = Math.min(u.startCol, A),
          xe = Math.max(u.startCol, A),
          Ne = re(H, se, ue, xe);
        Ne &&
          f((Se) =>
            Se
              ? {
                  startRow: Se.startRow,
                  startCol: Se.startCol,
                  endRow: C >= Se.startRow ? Ne.maxRow : Ne.minRow,
                  endCol: A >= Se.startCol ? Ne.maxCol : Ne.minCol,
                }
              : null
          );
      },
      R = () => {
        if (N && (k(!1), u && n != null && n.Boxes)) {
          const C = Math.min(u.startRow, u.endRow),
            A = Math.max(u.startRow, u.endRow),
            H = Math.min(u.startCol, u.endCol),
            se = Math.max(u.startCol, u.endCol),
            ue = re(C, A, H, se);
          ue &&
            f({
              startRow: ue.minRow,
              startCol: ue.minCol,
              endRow: ue.maxRow,
              endCol: ue.maxCol,
            });
        }
      },
      oe = () => {
        var C;
        !je ||
          !((C = n == null ? void 0 : n.drawer) != null && C.Boxes) ||
          !u ||
          te();
      },
      be = () => {
        var C;
        !pe ||
          !((C = n == null ? void 0 : n.drawer) != null && C.Boxes) ||
          !u ||
          (console.log(u), B());
      },
      B = async () => {
        var C;
        if (!(!u || !((C = n == null ? void 0 : n.drawer) != null && C.Boxes)))
          try {
            const A = Math.min(u.startRow, u.endRow),
              H = Math.max(u.startRow, u.endRow),
              se = Math.min(u.startCol, u.endCol),
              ue = Math.max(u.startCol, u.endCol),
              Ne = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= A &&
                  we.Row <= H &&
                  we.Column >= se &&
                  we.Column <= ue
              ),
              Se = [],
              _e = [];
            Ne.forEach((we) => {
              Se.push(we.Column.toString()), _e.push(we.Row.toString());
            });
            const ae = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${Se.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ae);
            const me = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ae),
            });
            if ((console.log("📡 API 回應:", me), me.Code === 200 && me.Data)) {
              if (
                me.Data.Boxes &&
                Array.isArray(me.Data.Boxes) &&
                ((n.Boxes = me.Data.Boxes),
                (n.drawer = me.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const we = (Je) => {
                    Je.forEach((Ce) => {
                      Ce.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ce.drawer = n.drawer)),
                        Ce.contents &&
                          Array.isArray(Ce.contents) &&
                          we(Ce.contents),
                        Ce.components &&
                          Array.isArray(Ce.components) &&
                          we(Ce.components);
                    });
                  },
                  De = JSON.parse(JSON.stringify(o));
                we(De), l(De);
              }
            } else
              console.error("❌ API 回應錯誤:", me),
                a(`取消合併失敗：${me.Result || "未知錯誤"}`, "error");
          } catch (A) {
            console.error("💥 API 調用失敗:", A),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              f(null),
              r();
          }
      },
      te = async () => {
        var C;
        if (!(!u || !((C = n == null ? void 0 : n.drawer) != null && C.Boxes)))
          try {
            const A = Math.min(u.startRow, u.endRow),
              H = Math.max(u.startRow, u.endRow),
              se = Math.min(u.startCol, u.endCol),
              ue = Math.max(u.startCol, u.endCol),
              Ne = n.drawer.Boxes.flat().filter(
                (we) =>
                  we.Row >= A &&
                  we.Row <= H &&
                  we.Column >= se &&
                  we.Column <= ue
              ),
              Se = [],
              _e = [];
            Ne.forEach((we) => {
              Se.push(we.Column.toString()), _e.push(we.Row.toString());
            });
            const ae = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${Se.join(",")}`,
                `SelectRows=${_e.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ae);
            const me = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ae),
            });
            if ((console.log("📡 API 回應:", me), me.Code === 200 && me.Data)) {
              if (
                me.Data.Boxes &&
                Array.isArray(me.Data.Boxes) &&
                ((n.Boxes = me.Data.Boxes),
                (n.drawer = me.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const we = (Je) => {
                    Je.forEach((Ce) => {
                      Ce.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ce.drawer = n.drawer)),
                        Ce.contents &&
                          Array.isArray(Ce.contents) &&
                          we(Ce.contents),
                        Ce.components &&
                          Array.isArray(Ce.components) &&
                          we(Ce.components);
                    });
                  },
                  De = JSON.parse(JSON.stringify(o));
                we(De), l(De);
              }
            } else
              console.error("❌ API 回應錯誤:", me),
                a(`取消合併失敗：${me.Result || "未知錯誤"}`, "error");
          } catch (A) {
            console.error("💥 API 調用失敗:", A),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              f(null),
              r();
          }
      },
      ve = async () => {
        if (n)
          try {
            n.name = h;
            const C = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", C);
            const A = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(C),
            });
            if ((console.log("📡 確認更新 API 回應:", A), A.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const H = (ue) => {
                    ue.forEach((xe) => {
                      xe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (xe.name = n.name)),
                        xe.contents &&
                          Array.isArray(xe.contents) &&
                          H(xe.contents),
                        xe.components &&
                          Array.isArray(xe.components) &&
                          H(xe.components);
                    });
                  },
                  se = JSON.parse(JSON.stringify(o));
                H(se), l(se);
              }
              v(!1), p(null), r(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", A),
                a(`抽屜資料更新失敗：${A.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 抽屜資料更新 API 調用失敗:", C),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      L = () => {
        var _e;
        if (
          !((_e = n == null ? void 0 : n.drawer) != null && _e.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return s.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx(Ed, {
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                }),
                s.jsx("div", {
                  className: "text-gray-500 text-lg mb-2",
                  children: c("status.gridDrawNotConfigured"),
                }),
                s.jsx("div", {
                  className: "text-gray-400 text-sm",
                  children: c("status.noDrugInfo"),
                }),
              ],
            }),
          });
        const C = n.drawer.Boxes.flat(),
          A = (ae) => {
            if (ae.Slave) return { width: 1, height: 1 };
            const me = C.filter(
              (Ue) =>
                Ue.Slave &&
                Ue.MasterBox_Row === ae.Row &&
                Ue.MasterBox_Column === ae.Column
            );
            if (me.length === 0) return { width: 1, height: 1 };
            const we = [ae, ...me],
              De = Math.min(...we.map((Ue) => Ue.Row)),
              Je = Math.max(...we.map((Ue) => Ue.Row)),
              Ce = Math.min(...we.map((Ue) => Ue.Column));
            return {
              width: Math.max(...we.map((Ue) => Ue.Column)) - Ce + 1,
              height: Je - De + 1,
            };
          },
          H = Math.max(...C.map((ae) => ae.Row + 1 - 1)),
          se = Math.max(...C.map((ae) => ae.Column + 1 - 1)),
          ue = H + 1,
          xe = se + 1,
          Ne = Array(ue)
            .fill(null)
            .map(() => Array(xe).fill(!1)),
          Se = {};
        return (
          C.forEach((ae) => {
            if (!ae.Slave) {
              const me = A(ae);
              (Se[`${ae.Row},${ae.Column}`] = ae),
                (ae.calculatedWidth = me.width),
                (ae.calculatedHeight = me.height);
            }
          }),
          C.forEach((ae) => {
            if (
              !ae.Slave &&
              (ae.calculatedWidth > 1 || ae.calculatedHeight > 1)
            )
              for (let me = ae.Row; me < ae.Row + ae.calculatedHeight; me++)
                for (
                  let we = ae.Column;
                  we < ae.Column + ae.calculatedWidth;
                  we++
                )
                  (me !== ae.Row || we !== ae.Column) && (Ne[me][we] = !0);
          }),
          s.jsx("div", {
            className: "rounded-lg",
            children: s.jsx("table", {
              className: "w-full",
              children: s.jsx("tbody", {
                children: Array.from({ length: ue }, (ae, me) =>
                  s.jsx(
                    "tr",
                    {
                      children: Array.from({ length: xe }, (we, De) => {
                        if (Ne[me][De]) return null;
                        const Je = `${me},${De}`,
                          Ce = Se[Je];
                        return Ce
                          ? s.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  G(me, De)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / xe}%`,
                                  minHeight: "40px",
                                  height: `${50 * Ce.calculatedHeight}px`,
                                  maxHeight: `${50 * Ce.calculatedHeight}px`,
                                },
                                colSpan: Ce.calculatedWidth,
                                rowSpan: Ce.calculatedHeight,
                                onMouseDown: (qe) => le(me, De, qe),
                                onMouseEnter: () => ce(me, De),
                                onMouseUp: R,
                                onTouchStart: (qe) => le(me, De, qe),
                                onTouchMove: (qe) => {
                                  if ((qe.preventDefault(), !N)) return;
                                  const Ue = qe.touches[0],
                                    Tt = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY
                                    ),
                                    y = Tt == null ? void 0 : Tt.closest("td");
                                  if (y) {
                                    const V = parseInt(
                                        y.getAttribute("data-row") || "0"
                                      ),
                                      Q = parseInt(
                                        y.getAttribute("data-col") || "0"
                                      );
                                    ce(V, Q);
                                  }
                                },
                                onTouchEnd: R,
                                "data-row": me,
                                "data-col": De,
                                children: s.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Ce.Code || Ce.Name || Ce.ChineseName
                                      ? s.jsxs(s.Fragment, {
                                          children: [
                                            Ce.Code &&
                                              s.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Ce.Code,
                                              }),
                                            Ce.Name &&
                                              s.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Ce.Name,
                                              }),
                                            Ce.ChineseName &&
                                              s.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Ce.ChineseName,
                                              }),
                                          ],
                                        })
                                      : s.jsx("div", {
                                          className:
                                            "h-full flex justify-center items-center text-xs text-gray-400 italic text-center",
                                          children: c("status.notAdded"),
                                        }),
                                }),
                              },
                              De
                            )
                          : s.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  G(me, De)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / xe}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (qe) => le(me, De, qe),
                                onMouseEnter: () => ce(me, De),
                                onMouseUp: R,
                                onTouchStart: (qe) => le(me, De, qe),
                                onTouchMove: (qe) => {
                                  if ((qe.preventDefault(), !N)) return;
                                  const Ue = qe.touches[0],
                                    Tt = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY
                                    ),
                                    y = Tt == null ? void 0 : Tt.closest("td");
                                  if (y) {
                                    const V = parseInt(
                                        y.getAttribute("data-row") || "0"
                                      ),
                                      Q = parseInt(
                                        y.getAttribute("data-col") || "0"
                                      );
                                    ce(V, Q);
                                  }
                                },
                                onTouchEnd: R,
                                "data-row": me,
                                "data-col": De,
                                children: s.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              De
                            );
                      }),
                    },
                    me
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
              onClick: U,
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
                        s.jsx(Jt, { className: "w-6 h-6 text-gray-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: U,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex-1 px-4 py-2 overflow-y-auto",
                  children: [
                    s.jsxs("div", {
                      className: "space-y-4 pt-2",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            s.jsx("h3", {
                              className:
                                "text-lg whitespace-nowrap font-medium text-gray-900",
                              children: c("form.drawerName"),
                            }),
                            s.jsx("input", {
                              type: "text",
                              value: h,
                              onChange: (C) => d(C.target.value),
                              disabled: !0,
                              placeholder:
                                (n == null ? void 0 : n.name) ||
                                c("placeholder.gridDrawName"),
                              className:
                                "px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-base",
                            }),
                          ],
                        }),
                        s.jsx("div", { className: "space-y-1", children: L() }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "py-2 flex space-x-4",
                      children: [
                        s.jsx("div", {
                          className: "grid grid-cols-1 gap-2 w-[10%]",
                          children: s.jsxs("div", {
                            className: "grid grid-cols-1 gap-2 items-strat",
                            children: [
                              s.jsx("button", {
                                onClick: oe,
                                disabled: !je,
                                className: `px-4 py-2 rounded transition-colors ${
                                  je
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              s.jsx("button", {
                                onClick: be,
                                disabled: !pe,
                                className: `px-4 py-2 rounded transition-colors ${
                                  pe
                                    ? "bg-red-600 text-white hover:bg-red-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.unmerge"),
                              }),
                            ],
                          }),
                        }),
                        s.jsx("div", {
                          className: "space-y-2 w-[30%]",
                          children: (() => {
                            const C = J(),
                              A = C.find((H) => !H.Slave);
                            return A && (A.Code || A.Name || A.ChineseName)
                              ? s.jsxs("div", {
                                  className:
                                    "border border-blue-200 rounded-lg p-2 space-y-1 h-full",
                                  children: [
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.drugCode"),
                                        }),
                                        s.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: A.Code || "-",
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-sm text-gray-900  mb-1",
                                          children: c("form.drugName"),
                                        }),
                                        s.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: A.Name || "-",
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      children: [
                                        s.jsx("div", {
                                          className:
                                            "text-sm text-gray-900 mb-1",
                                          children: c("form.chineseName"),
                                        }),
                                        s.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: A.ChineseName || "-",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : s.jsx("div", {
                                  className:
                                    "bg-gray-50 border h-full border-gray-200 rounded-lg p-3 text-center",
                                  children: s.jsx("div", {
                                    className:
                                      "text-gray-500 h-full w-full flex justify-center items-center",
                                    children:
                                      u && C.length > 0
                                        ? c("status.selectedCellsNoDrug")
                                        : c("status.selectCellsForDrug"),
                                  }),
                                });
                          })(),
                        }),
                        s.jsxs("div", {
                          className: "w-[60%]",
                          children: [
                            s.jsxs("div", {
                              className: "flex gap-2 mb-2",
                              children: [
                                s.jsx("input", {
                                  type: "text",
                                  value: x,
                                  onChange: (C) => S(C.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                s.jsxs("select", {
                                  value: $,
                                  onChange: (C) => M(C.target.value),
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
                                  onClick: ye,
                                  disabled: P,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    P &&
                                      s.jsx(Pt, {
                                        className: "w-4 h-4 animate-spin",
                                      }),
                                    c("button.search"),
                                  ],
                                }),
                              ],
                            }),
                            s.jsx("div", {
                              className:
                                "bg-white border rounded p-3 min-h-[150px] max-h-[150px] overflow-y-auto",
                              children: P
                                ? s.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      s.jsx(Pt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : I.length > 0
                                ? s.jsx("div", {
                                    className: "space-y-1",
                                    children: I.map((C, A) =>
                                      s.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between p-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors",
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
                                              onClick: () => F(C),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: s.jsx(wt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        C.GUID || A
                                      )
                                    ),
                                  })
                                : s.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || $ !== "N"
                                        ? "status.noSearchResults"
                                        : "status.searchResults"
                                    ),
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-3 px-6 py-4 border-t border-gray-200",
                      children: [
                        s.jsx("button", {
                          onClick: U,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        s.jsx("button", {
                          onClick: X,
                          className:
                            "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors",
                          children: c("button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "fixed inset-0 pointer-events-none",
                  onMouseUp: R,
                  onMouseLeave: R,
                  onTouchEnd: R,
                  onTouchCancel: R,
                }),
              ],
            }),
          ],
        });
  },
  uh = () => {
    var _;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        selectedDepartmentType: r,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Ke(),
      { t: h } = ft(),
      [d, g] = m.useState(null),
      [p, b] = m.useState(0),
      [v, N] = m.useState(0),
      [k, u] = m.useState(!1);
    m.useEffect(() => {
      e && (g(null), b(0), N(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        d && (b(d.row), N(d.col));
      }, [d]);
    const f = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "parent_container" &&
                T.gird_position &&
                E.add(T.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = f(),
          T = [];
        if (E.size === 0) return T.push({ row: 0, col: 0 }), T;
        const X = [];
        E.forEach((G) => {
          const [D, J] = G.split(",").map(Number);
          X.push({ row: D, col: J });
        });
        const U = new Set();
        return (
          X.forEach(({ row: G, col: D }) => {
            U.add(`${G},${D + 1}`),
              U.add(`${G + 1},${D}`),
              D > 0 && U.add(`${G},${D - 1}`),
              G > 0 && U.add(`${G - 1},${D}`);
          }),
          U.forEach((G) => {
            if (!E.has(G)) {
              const [D, J] = G.split(",").map(Number);
              D >= 0 && J >= 0 && T.push({ row: D, col: J });
            }
          }),
          E.has("0,1") ||
            T.some((D) => D.row === 0 && D.col === 1) ||
            T.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            T.some((D) => D.row === 1 && D.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((G, D) => (G.row === D.row ? G.col - D.col : G.row - D.row))
        );
      },
      S = (E) => {
        g(E);
      },
      $ = (E) => {
        b(E), g({ row: E, col: v });
      },
      M = (E) => {
        N(E), g({ row: p, col: E });
      },
      I = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      j = async () => {
        if (!(!d || !n || !I)) {
          u(!0);
          try {
            const E = `${d.row},${d.col}`,
              T = await ke.addMedMapSection(n.GUID, E);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await P())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add parent container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      P = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(r);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = Et.convertMedMapApiToFakeData(E.Data);
            if (!Et.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", E),
              a("資料更新失敗：API 錯誤", "error");
        } catch (E) {
          console.error("💥 重新獲取藥品地圖資料失敗:", E),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      w = () => {
        t();
      },
      O = () => {
        const E = f(),
          T = x(),
          X = [...E]
            .map((q) => {
              const [je, pe] = q.split(",").map(Number);
              return { row: je, col: pe };
            })
            .concat(T);
        X.length === 0 && X.push({ row: 0, col: 0 });
        const U = Math.max(...X.map((q) => q.row)),
          G = Math.max(...X.map((q) => q.col)),
          D = Math.min(...X.map((q) => q.row)),
          J = Math.min(...X.map((q) => q.col)),
          re = U - D + 1,
          K = G - J + 1;
        return s.jsxs("div", {
          className: "space-y-2",
          children: [
            s.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            s.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: s.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: re * K }, (q, je) => {
                  const pe = Math.floor(je / K) + D,
                    ye = (je % K) + J,
                    F = `${pe},${ye}`,
                    le = E.has(F),
                    ce = T.some((oe) => oe.row === pe && oe.col === ye),
                    R =
                      (d == null ? void 0 : d.row) === pe &&
                      (d == null ? void 0 : d.col) === ye;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => ce && S({ row: pe, col: ye }),
                      disabled: le || !ce,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      le
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : R
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ce
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: le ? "已占用" : ce ? "可選擇" : "不可用",
                      children: le ? "占用" : `${pe},${ye}`,
                    },
                    F
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: w,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(wt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: w,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: s.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      O(),
                      s.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          s.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: p,
                                    onChange: (E) =>
                                      $(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: v,
                                    onChange: (E) =>
                                      M(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d &&
                            s.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                I
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: I
                                ? `已選擇位置：${d.row},${d.col}`
                                : `位置 ${d.row},${d.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "部門資訊",
                          }),
                          s.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  "部門名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "部門類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "現有父容器數量：",
                                  ((_ = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : _.filter(
                                        (E) => E.type === "parent_container"
                                      ).length) || 0,
                                ],
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
                      onClick: w,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: j,
                      disabled: !I || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && s.jsx(Pt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  fc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: s.jsx(Wm, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: s.jsx($m, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: s.jsx(ra, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: s.jsx(Ed, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  dh = () => {
    var re;
    const {
        addShelfDrawContainerModalOpen: e,
        closeAddShelfDrawContainerModal: t,
        selectedSubContainerForAdd: n,
        selectedDepartmentType: r,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Ke(),
      { t: h } = ft(),
      [d, g] = m.useState("dispensing_shelves"),
      [p, b] = m.useState("1"),
      [v, N] = m.useState("1"),
      [k, u] = m.useState(""),
      [f, x] = m.useState(null),
      [S, $] = m.useState(0),
      [M, I] = m.useState(0),
      [j, P] = m.useState(!1);
    m.useEffect(() => {
      e &&
        (g("dispensing_shelves"),
        b("1"),
        N("1"),
        u(""),
        x(null),
        $(0),
        I(0),
        P(!1));
    }, [e]),
      m.useEffect(() => {
        f && ($(f.row), I(f.col));
      }, [f]);
    const w = () => {
        const K = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((q) => {
              q.gird_position && K.add(q.gird_position);
            }),
          K
        );
      },
      O = () => {
        const K = w(),
          q = [];
        if (K.size === 0) return q.push({ row: 0, col: 0 }), q;
        const je = [];
        K.forEach((ye) => {
          const [F, le] = ye.split(",").map(Number);
          je.push({ row: F, col: le });
        });
        const pe = new Set();
        return (
          je.forEach(({ row: ye, col: F }) => {
            pe.add(`${ye},${F + 1}`),
              pe.add(`${ye + 1},${F}`),
              F > 0 && pe.add(`${ye},${F - 1}`),
              ye > 0 && pe.add(`${ye - 1},${F}`);
          }),
          pe.forEach((ye) => {
            if (!K.has(ye)) {
              const [F, le] = ye.split(",").map(Number);
              F >= 0 && le >= 0 && q.push({ row: F, col: le });
            }
          }),
          K.has("0,1") ||
            q.some((F) => F.row === 0 && F.col === 1) ||
            q.push({ row: 0, col: 1 }),
          K.has("1,0") ||
            q.some((F) => F.row === 1 && F.col === 0) ||
            q.push({ row: 1, col: 0 }),
          q.sort((ye, F) =>
            ye.row === F.row ? ye.col - F.col : ye.row - F.row
          )
        );
      },
      _ = (K) => {
        x(K);
      },
      E = (K) => {
        $(K), x({ row: K, col: M });
      },
      T = (K) => {
        I(K), x({ row: S, col: K });
      },
      X = f && !w().has(`${f.row},${f.col}`) && f.row >= 0 && f.col >= 0,
      U = async () => {
        if (!(!f || !n || !X)) {
          P(!0);
          try {
            const K = `${f.row},${f.col}`,
              q = fc.find((pe) => pe.value === d);
            let je;
            q != null && q.isShelf
              ? (je = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: K,
                  width: p,
                  height: v,
                  ip_light: k,
                  type: d,
                }))
              : (je = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: K,
                  width: p,
                  height: v,
                  ip_drawer: k,
                  type: d,
                })),
              je.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await G())
                : a(`新增失敗：${je.Result || "未知錯誤"}`, "error");
          } catch (K) {
            console.error("Add container failed:", K),
              a("新增失敗：網路錯誤", "error");
          } finally {
            P(!1);
          }
        }
      },
      G = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const K = await ke.getMedMapByDepartment(r);
          if (K.Code === 200 && K.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const q = Et.convertMedMapApiToFakeData(K.Data);
            if (!Et.validateConvertedData(q)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(q), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", K),
              a("資料更新失敗：API 錯誤", "error");
        } catch (K) {
          console.error("💥 重新獲取藥品地圖資料失敗:", K),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      D = () => {
        t();
      },
      J = () => {
        const K = w(),
          q = O(),
          je = [...K]
            .map((oe) => {
              const [be, B] = oe.split(",").map(Number);
              return { row: be, col: B };
            })
            .concat(q);
        je.length === 0 && je.push({ row: 0, col: 0 });
        const pe = Math.max(...je.map((oe) => oe.row)),
          ye = Math.max(...je.map((oe) => oe.col)),
          F = Math.min(...je.map((oe) => oe.row)),
          le = Math.min(...je.map((oe) => oe.col)),
          ce = pe - F + 1,
          R = ye - le + 1;
        return s.jsxs("div", {
          className: "space-y-2",
          children: [
            s.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            s.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: s.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${R}, 1fr)` },
                children: Array.from({ length: ce * R }, (oe, be) => {
                  const B = Math.floor(be / R) + F,
                    te = (be % R) + le,
                    ve = `${B},${te}`,
                    L = K.has(ve),
                    C = q.some((H) => H.row === B && H.col === te),
                    A =
                      (f == null ? void 0 : f.row) === B &&
                      (f == null ? void 0 : f.col) === te;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => C && _({ row: B, col: te }),
                      disabled: L || !C,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      L
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : A
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : C
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: L ? "已占用" : C ? "可選擇" : "不可用",
                      children: L ? "占用" : `${B},${te}`,
                    },
                    ve
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: D,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (K) => K.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(wt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: D,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: s.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      s.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "容器類型",
                          }),
                          s.jsx("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: fc.map((K) =>
                              s.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    d === K.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    s.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: K.value,
                                      checked: d === K.value,
                                      onChange: (q) => g(q.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    s.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        K.icon,
                                        s.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: K.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                K.value
                              )
                            ),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          s.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              s.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "寬度",
                              }),
                              s.jsx("input", {
                                type: "number",
                                min: "1",
                                value: p,
                                onChange: (K) => b(K.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              s.jsx("label", {
                                className: "text-sm font-medium text-gray-700",
                                children: "高度",
                              }),
                              s.jsx("input", {
                                type: "number",
                                min: "1",
                                value: v,
                                onChange: (K) => N(K.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          s.jsx("label", {
                            className: "text-sm font-medium text-gray-700",
                            children: "IP 位址",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: k,
                            onChange: (K) => u(K.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      J(),
                      s.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          s.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: S,
                                    onChange: (K) =>
                                      E(parseInt(K.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: M,
                                    onChange: (K) =>
                                      T(parseInt(K.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f &&
                            s.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                X
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: X
                                ? `已選擇位置：${f.row},${f.col}`
                                : `位置 ${f.row},${f.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "子容器資訊",
                          }),
                          s.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "現有內容數量：",
                                  ((re = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : re.length) || 0,
                                ],
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
                      onClick: D,
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: U,
                      disabled: !X || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && s.jsx(Pt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: j ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  fh = () => {
    var _;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        selectedDepartmentType: r,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Ke(),
      { t: h } = ft(),
      [d, g] = m.useState(null),
      [p, b] = m.useState(0),
      [v, N] = m.useState(0),
      [k, u] = m.useState(!1);
    m.useEffect(() => {
      e && (g(null), b(0), N(0), u(!1));
    }, [e]),
      m.useEffect(() => {
        d && (b(d.row), N(d.col));
      }, [d]);
    const f = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "sub_container" &&
                T.gird_position &&
                E.add(T.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = f(),
          T = [];
        if (E.size === 0) return T.push({ row: 0, col: 0 }), T;
        const X = [];
        E.forEach((G) => {
          const [D, J] = G.split(",").map(Number);
          X.push({ row: D, col: J });
        });
        const U = new Set();
        return (
          X.forEach(({ row: G, col: D }) => {
            U.add(`${G},${D + 1}`),
              U.add(`${G + 1},${D}`),
              D > 0 && U.add(`${G},${D - 1}`),
              G > 0 && U.add(`${G - 1},${D}`);
          }),
          U.forEach((G) => {
            if (!E.has(G)) {
              const [D, J] = G.split(",").map(Number);
              D >= 0 && J >= 0 && T.push({ row: D, col: J });
            }
          }),
          E.has("0,1") ||
            T.some((D) => D.row === 0 && D.col === 1) ||
            T.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            T.some((D) => D.row === 1 && D.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((G, D) => (G.row === D.row ? G.col - D.col : G.row - D.row))
        );
      },
      S = (E) => {
        g(E);
      },
      $ = (E) => {
        b(E), g({ row: E, col: v });
      },
      M = (E) => {
        N(E), g({ row: p, col: E });
      },
      I = d && !f().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      j = async () => {
        if (!(!d || !n || !I)) {
          u(!0);
          try {
            const E = `${d.row},${d.col}`,
              T = await ke.addSubSection(n.GUID, E);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await P())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add sub container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      P = async () => {
        if (!r) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", r), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(r);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = Et.convertMedMapApiToFakeData(E.Data);
            if (!Et.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", E),
              a("資料更新失敗：API 錯誤", "error");
        } catch (E) {
          console.error("💥 重新獲取藥品地圖資料失敗:", E),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      w = () => {
        t();
      },
      O = () => {
        const E = f(),
          T = x(),
          X = [...E]
            .map((q) => {
              const [je, pe] = q.split(",").map(Number);
              return { row: je, col: pe };
            })
            .concat(T);
        X.length === 0 && X.push({ row: 0, col: 0 });
        const U = Math.max(...X.map((q) => q.row)),
          G = Math.max(...X.map((q) => q.col)),
          D = Math.min(...X.map((q) => q.row)),
          J = Math.min(...X.map((q) => q.col)),
          re = U - D + 1,
          K = G - J + 1;
        return s.jsxs("div", {
          className: "space-y-2",
          children: [
            s.jsx("h3", {
              className: "text-lg font-medium text-gray-900",
              children: "座標選擇",
            }),
            s.jsx("div", {
              className: "border border-gray-300 rounded-lg p-4 bg-gray-50",
              children: s.jsx("div", {
                className: "grid gap-2",
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: re * K }, (q, je) => {
                  const pe = Math.floor(je / K) + D,
                    ye = (je % K) + J,
                    F = `${pe},${ye}`,
                    le = E.has(F),
                    ce = T.some((oe) => oe.row === pe && oe.col === ye),
                    R =
                      (d == null ? void 0 : d.row) === pe &&
                      (d == null ? void 0 : d.col) === ye;
                  return s.jsx(
                    "button",
                    {
                      onClick: () => ce && S({ row: pe, col: ye }),
                      disabled: le || !ce,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      le
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : R
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ce
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: le ? "已占用" : ce ? "可選擇" : "不可用",
                      children: le ? "占用" : `${pe},${ye}`,
                    },
                    F
                  );
                }),
              }),
            }),
          ],
        });
      };
    return !e || !n
      ? null
      : s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: w,
            }),
            s.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        s.jsx(wt, { className: "w-6 h-6 text-green-600" }),
                        s.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: w,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: s.jsx(Qe, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: s.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      O(),
                      s.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900",
                            children: "手動輸入座標",
                          }),
                          s.jsxs("div", {
                            className: "flex items-center space-x-4",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "行 (Row):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: p,
                                    onChange: (E) =>
                                      $(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "列 (Column):",
                                  }),
                                  s.jsx("input", {
                                    type: "number",
                                    min: "0",
                                    value: v,
                                    onChange: (E) =>
                                      M(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d &&
                            s.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                I
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: I
                                ? `已選擇位置：${d.row},${d.col}`
                                : `位置 ${d.row},${d.col} 已被占用或無效`,
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-gray-50 border border-gray-200 rounded-lg p-4",
                        children: [
                          s.jsx("h3", {
                            className: "text-lg font-medium text-gray-900 mb-2",
                            children: "父容器資訊",
                          }),
                          s.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  "容器名稱：",
                                  (n == null ? void 0 : n.name) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "容器類型：",
                                  (n == null ? void 0 : n.type) || "未知",
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  "現有子容器數量：",
                                  ((_ = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : _.filter(
                                        (E) => E.type === "sub_container"
                                      ).length) || 0,
                                ],
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
                      onClick: w,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    s.jsxs("button", {
                      onClick: j,
                      disabled: !I || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && s.jsx(Pt, { className: "w-4 h-4 animate-spin" }),
                        s.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  ph = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: r,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: h,
      } = Ke(),
      [d, g] = m.useState(""),
      [p, b] = m.useState(""),
      [v, N] = m.useState(""),
      [k, u] = m.useState(""),
      [f, x] = m.useState(""),
      [S, $] = m.useState(""),
      [M, I] = m.useState(""),
      [j, P] = m.useState(""),
      [w, O] = m.useState(""),
      [_, E] = m.useState(""),
      [T, X] = m.useState(null),
      [U, G] = m.useState([]),
      [D, J] = m.useState(""),
      [re, K] = m.useState(!1),
      q = m.useRef(null);
    m.useEffect(() => {
      if (e && c === "edit" && i) {
        g(i.code || ""),
          b(i.name || ""),
          N(""),
          u(i.material_no || ""),
          x(i.lot || "");
        const R = i.expiry_date || "";
        if (R) {
          const oe = R.split(" ")[0];
          $(oe);
        } else $("");
        I(String(i.qty || "")),
          P(i.location || ""),
          O(i.led_index || ""),
          E(i.ip || "");
      } else
        e &&
          c === "add" &&
          (g(""),
          b(""),
          N(""),
          u(""),
          x(""),
          $(""),
          I(""),
          P(""),
          O(""),
          E(""));
    }, [e, c, i]),
      m.useEffect(() => {
        const R = (oe) => {
          q.current && !q.current.contains(oe.target) && X(null);
        };
        return (
          document.addEventListener("mousedown", R),
          () => {
            document.removeEventListener("mousedown", R);
          }
        );
      }, []);
    const je = (R, oe) => {
        if (!oe.trim()) {
          G([]);
          return;
        }
        const be = oe.toLowerCase(),
          B = o.filter((te) => {
            var ve, L, C, A;
            switch (R) {
              case "code":
                return (ve = te.CODE) == null
                  ? void 0
                  : ve.toLowerCase().includes(be);
              case "name":
                return (L = te.NAME) == null
                  ? void 0
                  : L.toLowerCase().includes(be);
              case "chineseName":
                return (C = te.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(be);
              case "skdiacode":
                return (A = te.SKDIACODE) == null
                  ? void 0
                  : A.toLowerCase().includes(be);
              default:
                return !1;
            }
          });
        G(B.slice(0, 50));
      },
      pe = (R, oe) => {
        switch ((X(R), R)) {
          case "code":
            g(oe);
            break;
          case "name":
            b(oe);
            break;
          case "chineseName":
            N(oe);
            break;
          case "skdiacode":
            u(oe);
            break;
        }
        je(R, oe);
      },
      ye = (R, oe) => {
        switch (oe) {
          case "code":
            g(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "name":
            g(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "chineseName":
            g(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "skdiacode":
            g(R.CODE || ""),
              b(R.NAME || ""),
              N(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
        }
        J(R.GUID), X(null), G([]);
      },
      F = async () => {
        var oe;
        if (!d || !p) {
          r("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          r("層架資訊錯誤", "error");
          return;
        }
        let R = "";
        S && (R = `${S}T00:00:00`);
        try {
          if (c === "edit" && i) {
            const be = {
                GUID: i.GUID,
                code: d,
                device_type: "EPD290",
                expiry_date: R || "",
                ip: _ || "",
                led_index: w || "",
                location: j || "",
                lot: f || "",
                material_no: k || "",
                name: p,
                qty: M,
                shelf_guid: n.GUID,
              },
              B = await ke.updateStock([be]);
            B.Code === 200
              ? (h(n.GUID, i.GUID, be), r("更新貨物成功", "success"), ce())
              : r(B.Result || "更新貨物失敗", "error");
          } else {
            const be = {
                code: d,
                device_type: "EPD290",
                expiry_date: R || "",
                ip: _ || "",
                led_index: w || "",
                location: j || "",
                lot: f || "",
                material_no: k || "",
                name: p,
                qty: M,
                shelf_guid: n.GUID,
              },
              B = await ke.addStock([be]);
            B.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((oe = B.Data) == null ? void 0 : oe.GUID) ||
                    `stock_${Date.now()}`,
                  ...be,
                }),
                r("新增貨物成功", "success"),
                ce())
              : r(B.Result || "新增貨物失敗", "error");
          }
        } catch (be) {
          console.error("貨物操作錯誤:", be),
            r(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      le = (R, oe) => {
        console.log("📸 掃描成功，填入藥品資料:", oe),
          g(oe[0].CODE || oe[0].code || ""),
          b(oe[0].NAME || oe[0].name || ""),
          N(oe[0].CHT_NAME || oe[0].cht_name || ""),
          u(oe[0].SKDIACODE || oe[0].skdiacode || oe[0].material_no || ""),
          J(oe[0].GUID || ""),
          K(!1),
          r("已自動填入藥品資料", "success");
      },
      ce = () => {
        g(""),
          b(""),
          N(""),
          u(""),
          x(""),
          $(""),
          I(""),
          P(""),
          O(""),
          E(""),
          J(""),
          G([]),
          X(null),
          t();
      };
    return e
      ? s.jsxs("div", {
          className:
            "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
          children: [
            s.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto",
              children: [
                s.jsxs("div", {
                  className:
                    "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl font-bold text-gray-800",
                      children: c === "edit" ? "編輯貨物" : "新增貨物",
                    }),
                    s.jsx("button", {
                      onClick: ce,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: s.jsx(Qe, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "p-6 space-y-6",
                  children: l
                    ? s.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          s.jsx("div", {
                            className:
                              "inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent",
                          }),
                          s.jsx("p", {
                            className: "mt-2 text-gray-600",
                            children: "載入藥品資料中...",
                          }),
                        ],
                      })
                    : o.length === 0
                    ? s.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          s.jsx("p", {
                            className: "text-gray-600",
                            children: "藥品資料尚未載入，請稍後再試",
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-500 mt-2",
                            children: "或檢查網路連線",
                          }),
                        ],
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex w-full border-b items-center pb-1",
                                children: [
                                  s.jsx("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-700 mr-6",
                                    children: "藥品資訊",
                                  }),
                                  s.jsx("button", {
                                    onClick: () => K(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: s.jsx(Nr, {
                                      className: "w-7 h-7 text-blue-600",
                                    }),
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: T === "code" ? q : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: d,
                                        onChange: (R) =>
                                          pe("code", R.target.value),
                                        onFocus: () => X("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      T === "code" &&
                                        U.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: U.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => ye(R, "code"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: T === "name" ? q : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (R) =>
                                          pe("name", R.target.value),
                                        onFocus: () => X("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      T === "name" &&
                                        U.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: U.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () => ye(R, "name"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: T === "chineseName" ? q : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: v,
                                        onChange: (R) =>
                                          pe("chineseName", R.target.value),
                                        onFocus: () => X("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      T === "chineseName" &&
                                        U.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: U.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ye(R, "chineseName"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "relative",
                                    ref: T === "skdiacode" ? q : null,
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: k,
                                        onChange: (R) =>
                                          pe("skdiacode", R.target.value),
                                        onFocus: () => X("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      T === "skdiacode" &&
                                        U.length > 0 &&
                                        s.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: U.map((R) =>
                                            s.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ye(R, "skdiacode"),
                                                className:
                                                  "px-3 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0",
                                                children: [
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-sm",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "font-medium text-gray-900",
                                                        children: R.CODE,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
                                                      }),
                                                    ],
                                                  }),
                                                  s.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 text-xs mt-1",
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: R.CHT_NAME,
                                                      }),
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-400",
                                                        children: "|",
                                                      }),
                                                      s.jsxs("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: [
                                                          "料號: ",
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              s.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-700 border-b pb-2",
                                children: "批次資訊",
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "批號",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (R) => x(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入批號",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "效期",
                                      }),
                                      s.jsx("input", {
                                        type: "date",
                                        value: S,
                                        onChange: (R) => $(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "數量",
                                      }),
                                      s.jsx("input", {
                                        type: "number",
                                        value: M,
                                        onChange: (R) => I(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入數量",
                                        min: "0",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              s.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-700 border-b pb-2",
                                children: "位置與設備資訊",
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "位置",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: j,
                                        onChange: (R) => P(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入位置",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "LED 索引",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: w,
                                        onChange: (R) => O(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "電子紙 IP",
                                      }),
                                      s.jsx("input", {
                                        type: "text",
                                        value: _,
                                        onChange: (R) => E(R.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入電子紙 IP",
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
                s.jsxs("div", {
                  className:
                    "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
                  children: [
                    s.jsx("button", {
                      onClick: ce,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: F,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(Ao, {
              isOpen: re,
              onClose: () => K(!1),
              onScanSuccess: le,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  mh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: r,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Ke(),
      [c, h] = m.useState(null),
      [d, g] = m.useState(""),
      [p, b] = m.useState(!1),
      v = () => (r ? r.map((I) => I.name) : []),
      N = () => (!n || !o ? [] : o.filter((I) => I["department_type "] === n)),
      k = () => {
        const I = v();
        return N().filter((P) => !I.includes(P.name));
      },
      u = () => (r ? r.map((I) => I.gird_position) : []),
      f = () => {
        const I = u(),
          j = [];
        for (let P = 0; P < 10; P++)
          for (let w = 0; w < 10; w++) {
            const O = `${P},${w}`;
            I.includes(O) || j.push(O);
          }
        return j.slice(0, 20);
      };
    m.useEffect(() => {
      e && (h(null), g(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!d) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        b(!0);
        try {
          const I = await ke.addMedMap(c.name, c.type, d);
          I.Code === 200
            ? (l("新增部門成功", "success"), await i(), S())
            : l(I.Result || "新增部門失敗", "error");
        } catch (I) {
          console.error("新增部門錯誤:", I),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          b(!1);
        }
      },
      S = () => {
        h(null), g(""), t();
      };
    if (!e) return null;
    const $ = k(),
      M = f();
    return s.jsx("div", {
      className:
        "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
      children: s.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [
          s.jsxs("div", {
            className:
              "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
            children: [
              s.jsx("h2", {
                className: "text-xl font-bold text-gray-800",
                children: "新增部門",
              }),
              s.jsx("button", {
                onClick: S,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: s.jsx(Qe, { className: "w-5 h-5" }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              n &&
                s.jsx("div", {
                  className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                  children: s.jsxs("p", {
                    className: "text-sm font-medium text-blue-900",
                    children: [
                      "部門分類：",
                      s.jsx("span", { className: "font-bold", children: n }),
                    ],
                  }),
                }),
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-700 border-b pb-2",
                    children: "選擇部門",
                  }),
                  $.length === 0
                    ? s.jsx("div", {
                        className: "text-center py-8",
                        children: s.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : s.jsx("div", {
                        className: "space-y-2",
                        children: $.map((I) =>
                          s.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === I.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                s.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: I.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === I.name,
                                  onChange: () => h(I),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                s.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: I.name,
                                    }),
                                    s.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: I.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            I.name
                          )
                        ),
                      }),
                ],
              }),
              c &&
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("h3", {
                      className:
                        "text-lg font-semibold text-gray-700 border-b pb-2",
                      children: "選擇位置",
                    }),
                    M.length === 0
                      ? s.jsx("div", {
                          className: "text-center py-8",
                          children: s.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : s.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: M.map((I) => {
                            const [j, P] = I.split(",");
                            return s.jsxs(
                              "button",
                              {
                                onClick: () => g(I),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  d === I
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", j, ",", P, ")"],
                              },
                              I
                            );
                          }),
                        }),
                  ],
                }),
            ],
          }),
          s.jsxs("div", {
            className:
              "sticky bottom-0 bg-gray-50 px-6 py-4 border-t flex justify-end space-x-3",
            children: [
              s.jsx("button", {
                onClick: S,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: p,
                children: "取消",
              }),
              s.jsx("button", {
                onClick: x,
                disabled: !c || !d || p,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: p ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  hh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: r,
        medicineList: o,
        isLoadingMedicines: l,
      } = Ke(),
      [a, i] = m.useState(""),
      [c, h] = m.useState(""),
      [d, g] = m.useState(""),
      [p, b] = m.useState(""),
      [v, N] = m.useState(""),
      [k, u] = m.useState(null),
      [f, x] = m.useState([]),
      [S, $] = m.useState(""),
      [M, I] = m.useState(null),
      [j, P] = m.useState(!1),
      w = m.useRef(null);
    m.useEffect(() => {
      e && (i(n), h(""), g(""), b(""), N(""), $(""), I(null), u(null));
    }, [e, n]),
      m.useEffect(() => {
        const U = (G) => {
          w.current && !w.current.contains(G.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", U),
          () => {
            document.removeEventListener("mousedown", U);
          }
        );
      }, []);
    const O = (U, G) => {
        if (!G.trim() || l) {
          x([]);
          return;
        }
        const D = G.toLowerCase(),
          J = o.filter((re) => {
            var K, q, je, pe;
            switch (U) {
              case "code":
                return (K = re.CODE) == null
                  ? void 0
                  : K.toLowerCase().includes(D);
              case "name":
                return (q = re.NAME) == null
                  ? void 0
                  : q.toLowerCase().includes(D);
              case "chineseName":
                return (je = re.CHT_NAME) == null
                  ? void 0
                  : je.toLowerCase().includes(D);
              case "skdiacode":
                return (pe = re.SKDIACODE) == null
                  ? void 0
                  : pe.toLowerCase().includes(D);
              default:
                return !1;
            }
          });
        x(J.slice(0, 10));
      },
      _ = (U, G) => {
        switch ((u(U), U)) {
          case "code":
            h(G);
            break;
          case "name":
            g(G);
            break;
          case "chineseName":
            b(G);
            break;
          case "skdiacode":
            N(G);
            break;
        }
        O(U, G);
      },
      E = (U) => {
        $(U.GUID),
          I(U),
          h(U.CODE || ""),
          g(U.NAME || ""),
          b(U.CHT_NAME || ""),
          N(U.SKDIACODE || ""),
          u(null),
          x([]);
      },
      T = () => {
        i(""), h(""), g(""), b(""), N(""), $(""), I(null), u(null), x([]), t();
      },
      X = async () => {
        if (!c.trim()) {
          r("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          r("條碼不能為空", "error");
          return;
        }
        P(!0);
        try {
          let U = [];
          if (M && M.BARCODE2)
            try {
              const D = JSON.parse(M.BARCODE2);
              Array.isArray(D)
                ? (U = [...D])
                : typeof D == "string" && (U = [D]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", M.BARCODE2),
                M.BARCODE2 && (U = [M.BARCODE2]);
            }
          U.includes(a.trim()) || U.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", U);
          const G = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(U),
            M.BARCODE
          );
          G.Code === 200
            ? (r("條碼建立成功", "success"), T())
            : r(G.Result || "建立條碼失敗", "error");
        } catch (U) {
          console.error("建立條碼失敗:", U),
            r("建立條碼失敗，請稍後再試", "error");
        } finally {
          P(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-2 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      s.jsx("div", {
                        className: "w-10 h-10 flex items-center justify-center",
                        children: s.jsx(wt, {
                          className: "w-6 h-6 text-blue-500",
                        }),
                      }),
                      s.jsx("h2", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "建立條碼",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: T,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: j,
                    children: s.jsx(Qe, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: s.jsxs("div", {
                  className: "space-y-4",
                  ref: w,
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "條碼",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: a,
                          disabled: !0,
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: [
                            "藥碼 ",
                            s.jsx("span", {
                              className: "text-red-500",
                              children: "*",
                            }),
                          ],
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: c,
                          onChange: (U) => _("code", U.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: j,
                        }),
                        k === "code" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((U) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(U),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: U.CODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: U.NAME,
                                    }),
                                  ],
                                },
                                U.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "藥名",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: d,
                          onChange: (U) => _("name", U.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: j,
                        }),
                        k === "name" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((U) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(U),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: U.NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: U.CODE,
                                    }),
                                  ],
                                },
                                U.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "中文名",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: p,
                          onChange: (U) => _("chineseName", U.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: j,
                        }),
                        k === "chineseName" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((U) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(U),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: U.CHT_NAME,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: U.CODE,
                                    }),
                                  ],
                                },
                                U.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "料號",
                        }),
                        s.jsx("input", {
                          type: "text",
                          value: v,
                          onChange: (U) => _("skdiacode", U.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: j,
                        }),
                        k === "skdiacode" &&
                          f.length > 0 &&
                          s.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: f.map((U) =>
                              s.jsxs(
                                "div",
                                {
                                  onClick: () => E(U),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    s.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: U.SKDIACODE,
                                    }),
                                    s.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: U.NAME,
                                    }),
                                  ],
                                },
                                U.GUID
                              )
                            ),
                          }),
                      ],
                    }),
                    l &&
                      s.jsx("div", {
                        className: "text-center py-2 text-gray-500 text-sm",
                        children: "載入藥品資料中...",
                      }),
                  ],
                }),
              }),
              s.jsx("div", {
                className: "p-6 border-t border-gray-200 bg-gray-50",
                children: s.jsxs("div", {
                  className: "flex justify-end space-x-3",
                  children: [
                    s.jsx("button", {
                      onClick: T,
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    s.jsx("button", {
                      onClick: X,
                      disabled: j || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: j ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  gh = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: r,
  }) => {
    const o = (d) => {
        const [g, p] = d.split(",").map(Number);
        return { row: g || 0, col: p || 0 };
      },
      l = (d) => {
        if (!d || d.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const g = d.map((N) => ({
            ...N,
            gridPos: o(N.gird_position || "0,0"),
          })),
          p = Math.max(...g.map((N) => N.gridPos.row), 0),
          b = Math.max(...g.map((N) => N.gridPos.col), 0);
        return {
          sortedContents: g.sort((N, k) =>
            N.gridPos.row !== k.gridPos.row
              ? N.gridPos.row - k.gridPos.row
              : N.gridPos.col - k.gridPos.col
          ),
          maxRow: p,
          maxCol: b,
        };
      },
      a = (d) => {
        switch (d) {
          case "parent_container":
            return "border-gray-300";
          case "sub_container":
            return "border-gray-300";
          case "dispensing_shelves":
          case "store_shelves":
            return "border-gray-300";
          case "med_box":
            return "border-gray-300";
          case "grid_draw":
          case "list_draw":
            return "border-gray-300";
          default:
            return "border-gray-300";
        }
      },
      i = (d) => {
        const g = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(d.type);
        return s.jsx(
          "div",
          {
            className: `${g ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${a(
              d.type
            )} flex flex-col h-full overflow-hidden`,
            children: s.jsx("div", { className: "flex-1", children: h(d) }),
          },
          d.GUID
        );
      },
      c = (d, g, p) => {
        const b = {};
        return (
          d.forEach((v) => {
            const N = o(v.gird_position || "0,0");
            b[`${N.row},${N.col}`] = v;
          }),
          s.jsx("table", {
            className: "w-full h-full",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: s.jsx("tbody", {
              children: Array.from({ length: g + 1 }, (v, N) =>
                s.jsx(
                  "tr",
                  {
                    className: "h-full",
                    children: Array.from({ length: p + 1 }, (k, u) => {
                      const f = `${N},${u}`,
                        x = b[f];
                      return x
                        ? s.jsx(
                            "td",
                            {
                              className: "align-top bg-transparent",
                              style: { width: `${100 / (p + 1)}%` },
                              children: i(x),
                            },
                            u
                          )
                        : s.jsx(
                            "td",
                            {
                              className: "align-top bg-transparent",
                              style: { width: `${100 / (p + 1)}%` },
                              children: s.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center text-gray-300 text-xs border border-dashed border-gray-200 rounded",
                                children: "空位",
                              }),
                            },
                            u
                          );
                    }),
                  },
                  N
                )
              ),
            }),
          })
        );
      },
      h = (d) => {
        switch (d.type) {
          case "parent_container":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: b } = l(d.contents);
              return c(g, p, b);
            } else return s.jsx("div", { className: "" });
          case "sub_container":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: b } = l(d.contents);
              return c(g, p, b);
            } else return s.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: b } = l(d.contents);
              return c(g, p, b);
            } else
              return s.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (d.medMapStock && d.medMapStock.length > 0) {
              const g = d.medMapStock,
                p = g.length,
                b = p > 0 ? 100 / p : 100;
              return s.jsx("div", {
                className: "flex h-full",
                children: g.map((v, N) => {
                  const k = t && (v.code == t || v.material_no == t),
                    u = n.includes(v.code) || n.includes(v.material_no);
                  return s.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer ${
                        u
                          ? "highlight-breathe-red"
                          : k
                          ? "highlight-breathe-green"
                          : ""
                      }`,
                      style: { width: `${b}%` },
                      onClick: () =>
                        r && r({ code: v.code || v.material_no, name: v.name }),
                      children: [
                        s.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center",
                          children: v.name || v.material_no,
                        }),
                        s.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", v.qty || 0],
                        }),
                      ],
                    },
                    v.GUID || N
                  );
                }),
              });
            } else if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: b } = l(d.contents);
              return c(g, p, b);
            } else
              return s.jsx("div", {
                className:
                  "border-2 flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無庫存",
              });
          case "grid_draw":
            return s.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 w-[120px] items-center justify-center mx-auto",
              children: [
                s.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] rounded",
                }),
                s.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center",
                  children: s.jsx("span", {
                    className: "text-xs text-violet-600",
                    children: "格狀抽屜",
                  }),
                }),
                s.jsx("div", { className: "h-[50%] bg-violet-400 w-[3%]" }),
              ],
            });
          case "list_draw":
            return s.jsxs("div", {
              className:
                "border-2 bg-violet-100 h-16 flex rounded-lg border-2 border-violet-400 w-[120px] items-center justify-center mx-auto",
              children: [
                s.jsx("div", {
                  className: "h-[50%] bg-violet-400 w-[3%] rounded",
                }),
                s.jsx("div", {
                  className:
                    "h-[70%] border-2 border-violet-400 w-[82%] mx-1 flex items-center justify-center",
                  children: s.jsx("span", {
                    className: "text-xs text-violet-600",
                    children: "清單抽屜",
                  }),
                }),
                s.jsx("div", { className: "h-[50%] bg-violet-400 w-[3%]" }),
              ],
            });
          case "med_box":
            if (d.med_info && d.med_info.length > 0) {
              const g = t && d.med_info.some((b) => b.code == t),
                p = d.med_info.some((b) => n.includes(b.code));
              return s.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer ${
                  p
                    ? "highlight-breathe-red"
                    : g
                    ? "highlight-breathe-green"
                    : ""
                }`,
                onClick: () => r && r(d.med_info[0]),
                children: s.jsx("div", {
                  className: "font-semibold truncate",
                  children: d.med_info[0].name || "-",
                }),
              });
            } else
              return s.jsx("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-xs",
                children: "空藥盒",
              });
          default:
            if (d.contents && d.contents.length > 0) {
              const { sortedContents: g, maxRow: p, maxCol: b } = l(d.contents);
              return c(g, p, b);
            } else
              return s.jsxs("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-sm",
                children: ["未知類型: ", d.type],
              });
        }
      };
    return e
      ? s.jsx("div", {
          className: "w-full h-full overflow-auto",
          children: s.jsx("div", { className: "max-w-full", children: h(e) }),
        })
      : s.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: s.jsx("p", { children: "無容器資料" }),
        });
  },
  xh = ({ isOpen: e, onClose: t, type: n, data: r, onApprove: o }) => {
    const [l, a] = m.useState("0"),
      [i, c] = m.useState("0"),
      [h, d] = m.useState(null),
      [g, p] = m.useState(null),
      [b, v] = m.useState(!1),
      [N, k] = m.useState(!1);
    if (
      (m.useEffect(() => {
        if (e && r) {
          const P = r.issuedQuantity || r.requestedQuantity || "0";
          a(P), c(P), d(null), p(null), v(!1);
        }
      }, [e, r]),
      !e || !r)
    )
      return null;
    const u = (P) => {
        if (b) a(P), c(P), v(!1);
        else {
          const w = l === "0" ? P : l + P;
          a(w), c(w);
        }
      },
      f = (P) => {
        h && g !== null && !b && x(), p(i), d(P), v(!0);
      },
      x = () => {
        if (h === null || g === null) return;
        const P = parseFloat(g),
          w = parseFloat(i);
        let O = 0;
        switch (h) {
          case "+":
            O = P + w;
            break;
          case "-":
            O = P - w;
            break;
          case "×":
            O = P * w;
            break;
          case "÷":
            O = w !== 0 ? P / w : 0;
            break;
          default:
            return;
        }
        const _ = O.toString();
        a(_), c(_), d(null), p(null), v(!0);
      },
      S = () => {
        x();
      },
      $ = () => {
        if (b) a("0."), c("0."), v(!1);
        else if (!l.includes(".")) {
          const P = l + ".";
          a(P), c(P);
        }
      },
      M = () => {
        a("0"), c("0"), d(null), p(null), v(!1);
      },
      I = async () => {
        if (!r) return;
        const P = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${r.name}
實際撥發量：${l}

是否確認${P}？`)
        ) {
          k(!0);
          try {
            if (n === "requisition") {
              const O = await ke.updateRequisitionActualQuantity(r.GUID, l);
              if (O.Code !== 200) {
                alert(`更新實際撥發量失敗：${O.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const _ = {
                  ...r,
                  actualQuantity: l,
                  notice: "False",
                  state: "已過帳",
                },
                E = await ke.updateRequisitionByGuid(_);
              if (E.Code !== 200) {
                alert(`申領過帳失敗：${E.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: r.GUID,
                name: r.name,
                actualQuantity: l,
              });
            } else {
              const O = await ke.updateDistributionActualQuantity(r.GUID, l);
              if (O.Code !== 200) {
                alert(`更新實際撥發量失敗：${O.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const _ = {
                  ...r,
                  actualQuantity: l,
                  notice: "False",
                  state: "已過帳",
                },
                E = await ke.updateDistributionByGuid(_);
              if (E.Code !== 200) {
                alert(`撥補過帳失敗：${E.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: r.GUID,
                name: r.name,
                actualQuantity: l,
              });
            }
            o && (await o()), alert(`${P}核撥成功！`), t();
          } catch (O) {
            console.error(`${P}核撥失敗:`, O),
              alert(`${P}核撥失敗，請稍後再試`);
          } finally {
            k(!1);
          }
        }
      },
      j = n === "requisition" ? r.requestedQuantity : r.issuedQuantity;
    return s.jsxs("div", {
      className: "fixed inset-0 z-[70] flex items-center justify-center",
      children: [
        s.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        s.jsxs("div", {
          className:
            "relative w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col m-4",
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                s.jsxs("h2", {
                  className: "text-lg font-bold text-gray-800",
                  children: [n === "requisition" ? "申領" : "撥補", "核撥"],
                }),
                s.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: s.jsx(Qe, { className: "w-5 h-5 text-gray-700" }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "p-4 space-y-2",
              children: [
                s.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("span", {
                          className: "text-sm font-semibold text-gray-600",
                          children: "藥名",
                        }),
                        s.jsx("div", {
                          className: "text-base text-gray-800 mt-1",
                          children: r.name || "-",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("span", {
                          className: "text-sm font-semibold text-gray-600",
                          children: "藥碼",
                        }),
                        s.jsx("div", {
                          className: "text-base text-gray-800 mt-1",
                          children: r.code || "-",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("span", {
                          className: "text-sm font-semibold text-gray-600",
                          children: n === "requisition" ? "申領量" : "撥發量",
                        }),
                        s.jsx("div", {
                          className: "text-base text-gray-800 mt-1",
                          children: j || "-",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("label", {
                      className:
                        "text-base font-semibold text-gray-600 block mb-2",
                      children: "實際撥發量",
                    }),
                    s.jsx("input", {
                      type: "text",
                      value: l,
                      disabled: !0,
                      className:
                        "w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-lg",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "grid grid-cols-4 gap-2",
                  children: [
                    s.jsx("button", {
                      onClick: () => u("7"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "7",
                    }),
                    s.jsx("button", {
                      onClick: () => u("8"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "8",
                    }),
                    s.jsx("button", {
                      onClick: () => u("9"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "9",
                    }),
                    s.jsx("button", {
                      onClick: () => f("÷"),
                      className:
                        "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                      children: "÷",
                    }),
                    s.jsx("button", {
                      onClick: () => u("4"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "4",
                    }),
                    s.jsx("button", {
                      onClick: () => u("5"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "5",
                    }),
                    s.jsx("button", {
                      onClick: () => u("6"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "6",
                    }),
                    s.jsx("button", {
                      onClick: () => f("×"),
                      className:
                        "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                      children: "×",
                    }),
                    s.jsx("button", {
                      onClick: () => u("1"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "1",
                    }),
                    s.jsx("button", {
                      onClick: () => u("2"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "2",
                    }),
                    s.jsx("button", {
                      onClick: () => u("3"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "3",
                    }),
                    s.jsx("button", {
                      onClick: () => f("-"),
                      className:
                        "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                      children: "-",
                    }),
                    s.jsx("button", {
                      onClick: () => u("0"),
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "0",
                    }),
                    s.jsx("button", {
                      onClick: $,
                      className:
                        "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: ".",
                    }),
                    s.jsx("button", {
                      onClick: S,
                      className:
                        "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                      children: "=",
                    }),
                    s.jsx("button", {
                      onClick: () => f("+"),
                      className:
                        "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                      children: "+",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "flex items-center justify-end gap-2 p-3 border-t border-gray-200 bg-gray-50",
              children: [
                s.jsx("button", {
                  onClick: M,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors",
                  children: "清除",
                }),
                s.jsx("button", {
                  onClick: t,
                  className:
                    "px-6 py-2.5 font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg transition-colors",
                  children: "取消",
                }),
                s.jsx("button", {
                  onClick: I,
                  disabled: N,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: N ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  yh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: r,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const [a, i] = m.useState(r),
      [c, h] = m.useState(o),
      [d, g] = m.useState(null),
      [p, b] = m.useState(!1),
      [v, N] = m.useState(null),
      [k, u] = m.useState("requisition");
    Qs.useEffect(() => {
      i(r), h(o);
    }, [r, o]);
    const f = async (j) => {
        const P = j.notice === "True" ? "False" : "True";
        g(j.GUID);
        const w = [...a],
          O = w.findIndex((_) => _.GUID === j.GUID);
        if (O === -1) {
          g(null);
          return;
        }
        (w[O] = { ...j, notice: P }), i(w);
        try {
          const _ = await ke.updateRequisitionNotice(j.GUID, P);
          _.Code !== 200
            ? ((w[O] = { ...j, notice: j.notice }),
              i(w),
              console.error("更新申領通知狀態失敗:", _))
            : l && l();
        } catch (_) {
          (w[O] = { ...j, notice: j.notice }),
            i(w),
            console.error("更新申領通知狀態失敗:", _);
        } finally {
          g(null);
        }
      },
      x = async (j) => {
        const P = j.notice === "True" ? "False" : "True";
        g(j.GUID);
        const w = [...c],
          O = w.findIndex((_) => _.GUID === j.GUID);
        if (O === -1) {
          g(null);
          return;
        }
        (w[O] = { ...j, notice: P }), h(w);
        try {
          const _ = await ke.updateDistributionNotice(j.GUID, P);
          _.Code !== 200
            ? ((w[O] = { ...j, notice: j.notice }),
              h(w),
              console.error("更新撥補通知狀態失敗:", _))
            : l && l();
        } catch (_) {
          (w[O] = { ...j, notice: j.notice }),
            h(w),
            console.error("更新撥補通知狀態失敗:", _);
        } finally {
          g(null);
        }
      };
    if (!e || !n) return null;
    const S = a.filter((j) => j.state === "等待過帳"),
      $ = c.filter((j) => j.state === "等待過帳"),
      M = S.length === 0 && $.length === 0,
      I = (j) => {
        if (!j || j === "1/01/01 00:00:00" || j === "0001-01-01T00:00:00")
          return "-";
        try {
          const P = new Date(j);
          if (isNaN(P.getTime())) return j;
          const w = P.getFullYear(),
            O = String(P.getMonth() + 1).padStart(2, "0"),
            _ = String(P.getDate()).padStart(2, "0"),
            E = String(P.getHours()).padStart(2, "0"),
            T = String(P.getMinutes()).padStart(2, "0");
          return `${w}/${O}/${_} ${E}:${T}`;
        } catch {
          return j;
        }
      };
    return s.jsxs("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center",
      children: [
        s.jsx("div", {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: t,
        }),
        s.jsxs("div", {
          className:
            "relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col m-4",
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                s.jsx("h2", {
                  className: "text-xl font-bold text-gray-800",
                  children: "藥品核撥",
                }),
                s.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: s.jsx(Qe, { className: "w-6 h-6 text-gray-700" }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "px-3 py-2 bg-gray-50 border-b border-gray-200",
              children: s.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  s.jsxs("div", {
                    className: "col-span-2",
                    children: [
                      s.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥名：",
                      }),
                      s.jsx("span", {
                        className: "text-gray-800",
                        children: n.name || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "料號：",
                      }),
                      s.jsx("span", {
                        className: "text-gray-800",
                        children: n.skdiacode || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "font-semibold text-gray-600",
                        children: "藥碼：",
                      }),
                      s.jsx("span", {
                        className: "text-gray-800",
                        children: n.code || "-",
                      }),
                    ],
                  }),
                  n.cht_name &&
                    s.jsxs("div", {
                      className: "col-span-2",
                      children: [
                        s.jsx("span", {
                          className: "font-semibold text-gray-600",
                          children: "中文名：",
                        }),
                        s.jsx("span", {
                          className: "text-gray-800",
                          children: n.cht_name,
                        }),
                      ],
                    }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "flex-1 overflow-y-auto p-4",
              children: M
                ? s.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : s.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      S.map((j, P) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), N(j), b(!0);
                            },
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2 mb-2",
                                children: [
                                  s.jsxs("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "underline font-medium text-xl font-semibold text-gray-700",
                                        children: "申領",
                                      }),
                                      s.jsx("button", {
                                        onClick: (w) => {
                                          w.stopPropagation(), f(j);
                                        },
                                        disabled: d === j.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          j.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          j.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: s.jsx(uc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  s.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      j.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: j.actionType,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領單位：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.requestingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領人：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領數量：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.requestedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "申領時間：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: I(j.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          j.GUID
                        )
                      ),
                      $.map((j, P) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), N(j), b(!0);
                            },
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center gap-6 mb-2",
                                children: [
                                  s.jsx("span", {
                                    className:
                                      "underline font-medium text-xl rounded-full text-gray-700",
                                    children: "撥補",
                                  }),
                                  s.jsx("button", {
                                    onClick: (w) => {
                                      w.stopPropagation(), x(j);
                                    },
                                    disabled: d === j.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      j.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      j.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: s.jsx(uc, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "來源庫別：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.sourceStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "目的庫別：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.destinationStoreType || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "批號：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "效期：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.VAL || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "撥補數量：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.issuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建表人員：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: j.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    className: "col-span-2",
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-semibold text-gray-600",
                                        children: "建立時間：",
                                      }),
                                      s.jsx("span", {
                                        className: "text-gray-800",
                                        children: I(j.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          j.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        s.jsx(xh, {
          isOpen: p,
          onClose: () => b(!1),
          type: k,
          data: v,
          onApprove: l,
        }),
      ],
    });
  },
  vh = ({ isOpen: e, onClose: t, container: n }) => {
    const [r, o] = m.useState("list_mode"),
      { highlightedMedicineCode: l } = Ke(),
      [a, i] = m.useState(!1),
      [c, h] = m.useState([]),
      [d, g] = m.useState([]),
      [p, b] = m.useState([]),
      [v, N] = m.useState(!1),
      [k, u] = m.useState(null),
      f = m.useRef(null),
      x = m.useRef(null),
      S = () => {
        try {
          const w = localStorage.getItem("medMap_setting");
          if (w) {
            const _ = JSON.parse(w).light_sec;
            if (_ != null && _ !== "") {
              const E = Number(_);
              if (!isNaN(E) && E > 0) return E * 1e3;
            }
          }
        } catch (w) {
          console.error("讀取亮燈設定失敗:", w);
        }
        return 6e4;
      },
      $ = m.useCallback(async () => {
        try {
          const P = new Date(),
            w = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 00:00:00`,
            O = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 23:59:59`,
            [_, E] = await Promise.all([
              ke.getRequisitionByTime(w, O),
              ke.getDistributionByTime(w, O),
            ]),
            T = [];
          if (_.Code === 200 && _.Data) {
            const X = _.Data.filter((G) => {
              var D;
              return (D = n == null ? void 0 : n.med_list) == null
                ? void 0
                : D.some((J) => J.code === G.code);
            });
            g(X),
              X.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && T.push(G.code);
              });
          }
          if (E.Code === 200 && E.Data) {
            const X = E.Data.filter((G) => {
              var D;
              return (D = n == null ? void 0 : n.med_list) == null
                ? void 0
                : D.some((J) => J.code === G.code);
            });
            b(X),
              X.filter(
                (G) => G.state === "等待過帳" && G.notice === "True"
              ).forEach((G) => {
                G.code && (T.includes(G.code) || T.push(G.code));
              });
          }
          h(T);
        } catch (P) {
          console.error("檢查申領撥補資料失敗:", P);
        }
      }, [n]);
    m.useEffect(
      () => (
        e
          ? ($(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              $();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, $]
    ),
      m.useEffect(() => {
        if (
          (console.log("容器資料：", n),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: n == null ? void 0 : n.name,
          }),
          e && l)
        ) {
          i(!0);
          const P = S();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: P / 1e3 + "秒",
          }),
            f.current && clearTimeout(f.current),
            (f.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (f.current = null);
            }, P));
        } else i(!1);
        return () => {
          f.current && clearTimeout(f.current);
        };
      }, [e, l]);
    const M = (P) => {
      d.filter((w) => w.code === P.code),
        p.filter((w) => w.code === P.code),
        u({
          code: P.code,
          name: P.name,
          cht_name: P.cht_name,
          skdiacode: P.SKDIACODE || P.skdiacode,
        }),
        N(!0);
    };
    if (!e) return null;
    const I = () =>
        !(n != null && n.med_list) || n.med_list.length === 0
          ? s.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: s.jsx("p", { children: "無藥品資料" }),
            })
          : s.jsx("div", {
              className: "overflow-y-auto h-full",
              children: s.jsxs("table", {
                className: "w-full border-collapse",
                children: [
                  s.jsx("thead", {
                    className: "sticky top-0",
                    children: s.jsxs("tr", {
                      children: [
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "藥品代碼",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "料號",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700",
                          children: "藥品名稱",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-right",
                          children: "數量",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "層",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "格",
                        }),
                        s.jsx("th", {
                          className:
                            "border border-gray-300 px-1 py-2 text-left text-sm font-semibold text-gray-700 text-center",
                          children: "位",
                        }),
                      ],
                    }),
                  }),
                  s.jsx("tbody", {
                    children: n.med_list.map((P, w) => {
                      const O = a && l && P.code == l,
                        _ = c.includes(P.code);
                      return (
                        w === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: P.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: O,
                              isPendingRequisition: _,
                              comparison: `${P.code} == ${l} = ${P.code == l}`,
                            }
                          ),
                        s.jsxs(
                          "tr",
                          {
                            className: `transition-colors cursor-pointer ${
                              _
                                ? "highlight-breathe-red"
                                : O
                                ? "highlight-breathe-green"
                                : "hover:bg-gray-50"
                            }`,
                            onClick: () => M(P),
                            children: [
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: P.code || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: P.SKDIACODE || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm",
                                children: P.name || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-right",
                                children: P.qty || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: P.stockCol || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: P.stockRow || "-",
                              }),
                              s.jsx("td", {
                                className:
                                  "border border-gray-300 px-1 py-2 text-sm text-center",
                                children: P.stock || "-",
                              }),
                            ],
                          },
                          w
                        )
                      );
                    }),
                  }),
                ],
              }),
            }),
      j = () =>
        n
          ? s.jsx(gh, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: M,
            })
          : s.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: s.jsx("p", { children: "無容器資料" }),
            });
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            s.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            s.jsxs("div", {
              className:
                "relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-gray-100 rounded-lg p-1",
                      children: [
                        s.jsx("button", {
                          onClick: () => o("list_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            r === "list_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "清單",
                        }),
                        s.jsx("button", {
                          onClick: () => o("view_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            r === "view_mode"
                              ? "bg-white text-gray-900 shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          }`,
                          children: "視圖",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      title: "關閉",
                      children: s.jsx(Qe, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: r === "list_mode" ? I() : j(),
                }),
              ],
            }),
          ],
        }),
        s.jsx(yh, {
          isOpen: v,
          onClose: () => N(!1),
          medicineInfo: k,
          requisitions: k ? d.filter((P) => P.code === k.code) : [],
          distributions: k ? p.filter((P) => P.code === k.code) : [],
          onNoticeUpdated: $,
        }),
      ],
    });
  },
  wh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = ft(),
      [r, o] = m.useState(""),
      [l, a] = m.useState(""),
      [i, c] = m.useState(!1),
      [h, d] = m.useState(!1),
      [g, p] = m.useState(""),
      b = async (N) => {
        if ((N.preventDefault(), !r.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        d(!0), p("");
        try {
          const k = await ke.login({ ID: r.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const u = { ...k.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else p(k.Result || "Login failed");
        } catch (k) {
          console.error("Login failed:", k),
            p("Network error. Please try again.");
        } finally {
          d(!1);
        }
      },
      v = (N) => {
        N.key === "Enter" && !h && b(N);
      };
    return e
      ? s.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-gray-900",
          children: [
            s.jsx("div", { className: "absolute inset-0 bg-white" }),
            s.jsxs("div", {
              className: "relative z-10 w-full max-w-md mx-4",
              children: [
                s.jsx("h1", {
                  className:
                    "text-3xl font-bold text-gray-900 mb-8 text-center",
                  children: n("login.title"),
                }),
                s.jsxs("div", {
                  className: "bg-white rounded-lg shadow-sm border p-4 md:p-6",
                  children: [
                    g &&
                      s.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: s.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: g,
                        }),
                      }),
                    s.jsxs("form", {
                      onSubmit: b,
                      className: "space-y-6",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("label", {
                              htmlFor: "userId",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.userId"),
                            }),
                            s.jsx("input", {
                              id: "userId",
                              type: "text",
                              value: r,
                              onChange: (N) => o(N.target.value),
                              onKeyPress: v,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: h,
                              autoComplete: "username",
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: n("login.password"),
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("input", {
                                  id: "password",
                                  type: i ? "text" : "password",
                                  value: l,
                                  onChange: (N) => a(N.target.value),
                                  onKeyPress: v,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: h,
                                  autoComplete: "current-password",
                                }),
                                s.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: h,
                                  children: i
                                    ? s.jsx(Bm, { className: "w-5 h-5" })
                                    : s.jsx(Gm, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsx("button", {
                          type: "submit",
                          disabled: h || !r.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: h
                            ? s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(Pt, {
                                    className: "w-5 h-5 animate-spin mr-2",
                                  }),
                                  n("login.loggingIn"),
                                ],
                              })
                            : s.jsx(s.Fragment, {
                                children: n("login.loginButton"),
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  bh = ({ isVisible: e, message: t }) => {
    const { t: n } = ft();
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
                        children: s.jsx(Ja, {
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
                      s.jsx(Pt, {
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
  Nh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: r,
    duration: o = 3e3,
  }) => {
    const [l, a] = m.useState(!1);
    return (
      m.useEffect(() => {
        if (n) {
          a(!0);
          const i = setTimeout(() => {
            r();
          }, o);
          return () => clearTimeout(i);
        } else {
          const i = setTimeout(() => {
            a(!1);
          }, 300);
          return () => clearTimeout(i);
        }
      }, [n, o, r]),
      l
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
                  ? s.jsx(Lm, { className: "w-5 h-5 text-green-600" })
                  : s.jsx(Ym, { className: "w-5 h-5 text-red-600" }),
                s.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                s.jsx("button", {
                  onClick: r,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: s.jsx(Qe, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function jh() {
  const {
    selectedDepartmentType: e,
    viewMode: t,
    isAuthenticated: n,
    setIsAuthenticated: r,
    setCurrentUser: o,
    isLoadingMedMap: l,
    notification: a,
    hideNotification: i,
    addParentContainerModalOpen: c,
    closeAddParentContainerModal: h,
    selectedDepartmentForAdd: d,
    addStoreItemModalOpen: g,
    closeAddStoreItemModal: p,
    selectedStoreShelfForAdd: b,
    addDepartmentModalOpen: v,
    closeAddDepartmentModal: N,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: f,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: S,
    initialBarcodeValue: $,
    containerDetailModalOpen: M,
    closeContainerDetailModal: I,
    selectedContainerForDetail: j,
    setMedicineList: P,
    setIsLoadingMedicines: w,
    showNotification: O,
  } = Ke();
  m.useEffect(() => {
    (() => {
      try {
        const U = sessionStorage.getItem("user_session");
        if (U) {
          const G = JSON.parse(U);
          G.GUID && G.ID && G.Name
            ? (o(G), r(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (U) {
        console.error("Error checking session:", U),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [r, o]),
    m.useEffect(() => {
      let X = !0;
      return (
        (async () => {
          if (n) {
            w(!0);
            try {
              console.log("開始載入藥品資料...");
              const G = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", G), !X)) return;
              G.Code === 200 && G.Data
                ? (P(G.Data),
                  console.log(`✅ 成功載入 ${G.Data.length} 筆藥品資料`),
                  O(`載入 ${G.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", G),
                  P([]),
                  O("藥品資料載入異常，請稍後重試", "error"));
            } catch (G) {
              if (!X) return;
              console.error("載入藥品資料失敗:", G),
                P([]),
                O("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              X && w(!1);
            }
          }
        })(),
        () => {
          X = !1;
        }
      );
    }, [n]);
  const _ = (X) => {
      o(X), r(!0);
    },
    E = Qs.useRef(null),
    T = (X, U) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: X,
          medicineData: U,
          mode: u,
        }),
        console.log("📸 當前 mode:", u),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", E.current),
        u === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            O("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        E.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof E.current.locateDrug
            ),
            typeof E.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                E.current.locateDrug(U))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", u);
    };
  return n
    ? s.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          s.jsx(Xm, {}),
          s.jsx(Km, {}),
          s.jsx(Zm, {}),
          s.jsx("div", {
            className: "fixed inset-0",
            children: s.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? s.jsx(nh, {}) : s.jsx(Rd, { ref: E }),
            }),
          }),
          s.jsx(eh, {}),
          s.jsx(ah, {}),
          s.jsx(ih, {}),
          s.jsx(ch, {}),
          s.jsx(uh, {}),
          s.jsx(dh, {}),
          s.jsx(fh, {}),
          s.jsx(ph, { isOpen: g, onClose: p, storeShelf: b }),
          s.jsx(mh, { isOpen: v, onClose: N }),
          s.jsx(Ao, { isOpen: k, onClose: f, mode: u, onScanSuccess: T }),
          s.jsx(hh, { isOpen: x, onClose: S, initialBarcode: $ }),
          s.jsx(vh, { isOpen: M, onClose: I, container: j }),
          s.jsx(bh, { isVisible: l }),
          s.jsx(Nh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : s.jsx(wh, { isOpen: !0, onLoginSuccess: _ });
}
function Sh() {
  return s.jsx(Tm, { children: s.jsx(Im, { children: s.jsx(jh, {}) }) });
}
Cd(document.getElementById("root")).render(
  s.jsx(m.StrictMode, { children: s.jsx(Sh, {}) })
);
