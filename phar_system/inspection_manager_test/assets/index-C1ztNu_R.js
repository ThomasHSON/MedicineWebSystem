var yf = Object.defineProperty;
var vf = (e, t, n) =>
  t in e
    ? yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fn = (e, t, n) => vf(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
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
function wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Uc = { exports: {} },
  So = {},
  zc = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ps = Symbol.for("react.element"),
  bf = Symbol.for("react.portal"),
  Nf = Symbol.for("react.fragment"),
  _f = Symbol.for("react.strict_mode"),
  jf = Symbol.for("react.profiler"),
  Sf = Symbol.for("react.provider"),
  kf = Symbol.for("react.context"),
  Cf = Symbol.for("react.forward_ref"),
  Ef = Symbol.for("react.suspense"),
  Df = Symbol.for("react.memo"),
  Tf = Symbol.for("react.lazy"),
  wa = Symbol.iterator;
function If(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bc = Object.assign,
  Hc = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Fc);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gc() {}
Gc.prototype = xr.prototype;
function pi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Fc);
}
var gi = (pi.prototype = new Gc());
gi.constructor = pi;
Bc(gi, xr.prototype);
gi.isPureReactComponent = !0;
var ba = Array.isArray,
  Wc = Object.prototype.hasOwnProperty,
  xi = { current: null },
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Wc.call(t, r) && !Vc.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ps,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: xi.current,
  };
}
function Rf(e, t) {
  return {
    $$typeof: ps,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ps;
}
function Pf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Na = /\/+/g;
function Vo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pf("" + e.key)
    : t.toString(36);
}
function Fs(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ps:
          case bf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Vo(i, 0) : r),
      ba(o)
        ? ((n = ""),
          e != null && (n = e.replace(Na, "$&/") + "/"),
          Fs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (yi(o) &&
            (o = Rf(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Na, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ba(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var c = r + Vo(l, a);
      i += Fs(l, t, n, c, o);
    }
  else if (((c = If(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + Vo(l, a++)), (i += Fs(l, t, n, c, o));
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
  return i;
}
function _s(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fs(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Mf(e) {
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
var Xe = { current: null },
  Bs = { transition: null },
  Af = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: Bs,
    ReactCurrentOwner: xi,
  };
function qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = {
  map: _s,
  forEach: function (e, t, n) {
    _s(
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
      _s(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _s(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
le.Component = xr;
le.Fragment = Nf;
le.Profiler = jf;
le.PureComponent = pi;
le.StrictMode = _f;
le.Suspense = Ef;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
le.act = qc;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = xi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      Wc.call(t, c) &&
        !Vc.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ps, type: e.type, key: o, ref: l, props: r, _owner: i };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: kf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sf, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = Qc;
le.createFactory = function (e) {
  var t = Qc.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: Cf, render: e };
};
le.isValidElement = yi;
le.lazy = function (e) {
  return { $$typeof: Tf, _payload: { _status: -1, _result: e }, _init: Mf };
};
le.memo = function (e, t) {
  return { $$typeof: Df, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = Bs.transition;
  Bs.transition = {};
  try {
    e();
  } finally {
    Bs.transition = t;
  }
};
le.unstable_act = qc;
le.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t);
};
le.useContext = function (e) {
  return Xe.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t);
};
le.useId = function () {
  return Xe.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return Xe.current.useRef(e);
};
le.useState = function (e) {
  return Xe.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return Xe.current.useTransition();
};
le.version = "18.3.1";
zc.exports = le;
var x = zc.exports;
const Ce = wf(x);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Of = x,
  Lf = Symbol.for("react.element"),
  $f = Symbol.for("react.fragment"),
  Uf = Object.prototype.hasOwnProperty,
  zf = Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Uf.call(t, r) && !Ff.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Lf,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: zf.current,
  };
}
So.Fragment = $f;
So.jsx = Kc;
So.jsxs = Kc;
Uc.exports = So;
var s = Uc.exports,
  Yc = { exports: {} },
  pt = {},
  Xc = { exports: {} },
  Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, $) {
    var A = E.length;
    E.push($);
    e: for (; 0 < A; ) {
      var H = (A - 1) >>> 1,
        G = E[H];
      if (0 < o(G, $)) (E[H] = $), (E[A] = G), (A = H);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var $ = E[0],
      A = E.pop();
    if (A !== $) {
      E[0] = A;
      e: for (var H = 0, G = E.length, ie = G >>> 1; H < ie; ) {
        var w = 2 * (H + 1) - 1,
          te = E[w],
          N = w + 1,
          z = E[N];
        if (0 > o(te, A))
          N < G && 0 > o(z, te)
            ? ((E[H] = z), (E[N] = A), (H = N))
            : ((E[H] = te), (E[w] = A), (H = w));
        else if (N < G && 0 > o(z, A)) (E[H] = z), (E[N] = A), (H = N);
        else break e;
      }
    }
    return $;
  }
  function o(E, $) {
    var A = E.sortIndex - $.sortIndex;
    return A !== 0 ? A : E.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var c = [],
    u = [],
    h = 1,
    p = null,
    g = 3,
    y = !1,
    b = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= E)
        r(u), ($.sortIndex = $.expirationTime), t(c, $);
      else break;
      $ = n(u);
    }
  }
  function v(E) {
    if (((S = !1), m(E), !b))
      if (n(c) !== null) (b = !0), L(_);
      else {
        var $ = n(u);
        $ !== null && Q(v, $.startTime - E);
      }
  }
  function _(E, $) {
    (b = !1), S && ((S = !1), f(M), (M = -1)), (y = !0);
    var A = g;
    try {
      for (
        m($), p = n(c);
        p !== null && (!(p.expirationTime > $) || (E && !F()));

      ) {
        var H = p.callback;
        if (typeof H == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var G = H(p.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof G == "function" ? (p.callback = G) : p === n(c) && r(c),
            m($);
        } else r(c);
        p = n(c);
      }
      if (p !== null) var ie = !0;
      else {
        var w = n(u);
        w !== null && Q(v, w.startTime - $), (ie = !1);
      }
      return ie;
    } finally {
      (p = null), (g = A), (y = !1);
    }
  }
  var k = !1,
    R = null,
    M = -1,
    V = 5,
    D = -1;
  function F() {
    return !(e.unstable_now() - D < V);
  }
  function P() {
    if (R !== null) {
      var E = e.unstable_now();
      D = E;
      var $ = !0;
      try {
        $ = R(!0, E);
      } finally {
        $ ? T() : ((k = !1), (R = null));
      }
    } else k = !1;
  }
  var T;
  if (typeof d == "function")
    T = function () {
      d(P);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      K = B.port2;
    (B.port1.onmessage = P),
      (T = function () {
        K.postMessage(null);
      });
  } else
    T = function () {
      C(P, 0);
    };
  function L(E) {
    (R = E), k || ((k = !0), T());
  }
  function Q(E, $) {
    M = C(function () {
      E(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || y || ((b = !0), L(_));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (E) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var A = g;
      g = $;
      try {
        return E();
      } finally {
        g = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, $) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var A = g;
      g = E;
      try {
        return $();
      } finally {
        g = A;
      }
    }),
    (e.unstable_scheduleCallback = function (E, $, A) {
      var H = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? H + A : H))
          : (A = H),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = A + G),
        (E = {
          id: h++,
          callback: $,
          priorityLevel: E,
          startTime: A,
          expirationTime: G,
          sortIndex: -1,
        }),
        A > H
          ? ((E.sortIndex = A),
            t(u, E),
            n(c) === null &&
              E === n(u) &&
              (S ? (f(M), (M = -1)) : (S = !0), Q(v, A - H)))
          : ((E.sortIndex = G), t(c, E), b || y || ((b = !0), L(_))),
        E
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (E) {
      var $ = g;
      return function () {
        var A = g;
        g = $;
        try {
          return E.apply(this, arguments);
        } finally {
          g = A;
        }
      };
    });
})(Jc);
Xc.exports = Jc;
var Bf = Xc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = x,
  mt = Bf;
function O(e) {
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
var Zc = new Set(),
  qr = {};
function $n(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (qr[e] = t, e = 0; e < t.length; e++) Zc.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vl = Object.prototype.hasOwnProperty,
  Gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  ja = {};
function Wf(e) {
  return vl.call(ja, e)
    ? !0
    : vl.call(_a, e)
    ? !1
    : Gf.test(e)
    ? (ja[e] = !0)
    : ((_a[e] = !0), !1);
}
function Vf(e, t, n, r) {
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
function Qf(e, t, n, r) {
  if (t === null || typeof t > "u" || Vf(e, t, n, r)) return !0;
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
function Je(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vi = /[\-:]([a-z])/g;
function wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, wi);
    Fe[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vi, wi);
    Fe[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vi, wi);
  Fe[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new Je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bi(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qf(t, n, o, r) && (n = null),
    r || o === null
      ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var qt = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  js = Symbol.for("react.element"),
  Hn = Symbol.for("react.portal"),
  Gn = Symbol.for("react.fragment"),
  Ni = Symbol.for("react.strict_mode"),
  wl = Symbol.for("react.profiler"),
  eu = Symbol.for("react.provider"),
  tu = Symbol.for("react.context"),
  _i = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  Nl = Symbol.for("react.suspense_list"),
  ji = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  nu = Symbol.for("react.offscreen"),
  Sa = Symbol.iterator;
function kr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sa && e[Sa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var je = Object.assign,
  Qo;
function Mr(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var qo = !1;
function Ko(e, t) {
  if (!e || qo) return "";
  qo = !0;
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
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var c =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (qo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function qf(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gn:
      return "Fragment";
    case Hn:
      return "Portal";
    case wl:
      return "Profiler";
    case Ni:
      return "StrictMode";
    case bl:
      return "Suspense";
    case Nl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tu:
        return (e.displayName || "Context") + ".Consumer";
      case eu:
        return (e._context.displayName || "Context") + ".Provider";
      case _i:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ji:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return _l(e(t));
        } catch {}
    }
  return null;
}
function Kf(e) {
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
      return _l(t);
    case 8:
      return t === Ni ? "StrictMode" : "Mode";
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
function fn(e) {
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
function ru(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yf(e) {
  var t = ru(e) ? "checked" : "value",
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
        set: function (i) {
          (r = "" + i), l.call(this, i);
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
function Ss(e) {
  e._valueTracker || (e._valueTracker = Yf(e));
}
function su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ru(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jl(e, t) {
  var n = t.checked;
  return je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ka(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ou(e, t) {
  (t = t.checked), t != null && bi(e, "checked", t, !1);
}
function Sl(e, t) {
  ou(e, t);
  var n = fn(t.value),
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
    ? kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && kl(e, t.type, fn(t.defaultValue)),
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
function kl(e, t, n) {
  (t !== "number" || Zs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ar = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Ar(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: fn(n) };
}
function lu(e, t) {
  var n = fn(t.value),
    r = fn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Da(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? iu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ks,
  au = (function (e) {
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
        ks = ks || document.createElement("div"),
          ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ks.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
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
  Xf = ["Webkit", "ms", "Moz", "O"];
Object.keys($r).forEach(function (e) {
  Xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
  });
});
function cu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($r.hasOwnProperty(e) && $r[e])
    ? ("" + t).trim()
    : t + "px";
}
function uu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = cu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Jf = je(
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
function Dl(e, t) {
  if (t) {
    if (Jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Tl(e, t) {
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
var Il = null;
function Si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  nr = null,
  rr = null;
function Ta(e) {
  if ((e = ys(e))) {
    if (typeof Rl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = To(t)), Rl(e.stateNode, e.type, t));
  }
}
function du(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function fu() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Ta(e), t)) for (e = 0; e < t.length; e++) Ta(t[e]);
  }
}
function hu(e, t) {
  return e(t);
}
function mu() {}
var Yo = !1;
function pu(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return hu(e, t, n);
  } finally {
    (Yo = !1), (nr !== null || rr !== null) && (mu(), fu());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = To(n);
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Pl = !1;
if (Gt)
  try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", {
      get: function () {
        Pl = !0;
      },
    }),
      window.addEventListener("test", Cr, Cr),
      window.removeEventListener("test", Cr, Cr);
  } catch {
    Pl = !1;
  }
function Zf(e, t, n, r, o, l, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Ur = !1,
  eo = null,
  to = !1,
  Ml = null,
  eh = {
    onError: function (e) {
      (Ur = !0), (eo = e);
    },
  };
function th(e, t, n, r, o, l, i, a, c) {
  (Ur = !1), (eo = null), Zf.apply(eh, arguments);
}
function nh(e, t, n, r, o, l, i, a, c) {
  if ((th.apply(this, arguments), Ur)) {
    if (Ur) {
      var u = eo;
      (Ur = !1), (eo = null);
    } else throw Error(O(198));
    to || ((to = !0), (Ml = u));
  }
}
function Un(e) {
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
function gu(e) {
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
function Ia(e) {
  if (Un(e) !== e) throw Error(O(188));
}
function rh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(O(188));
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
        if (l === n) return Ia(o), e;
        if (l === r) return Ia(o), t;
        l = l.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
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
      if (!i) {
        for (a = l.child; a; ) {
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
        if (!i) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function xu(e) {
  return (e = rh(e)), e !== null ? yu(e) : null;
}
function yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vu = mt.unstable_scheduleCallback,
  Ra = mt.unstable_cancelCallback,
  sh = mt.unstable_shouldYield,
  oh = mt.unstable_requestPaint,
  Ee = mt.unstable_now,
  lh = mt.unstable_getCurrentPriorityLevel,
  ki = mt.unstable_ImmediatePriority,
  wu = mt.unstable_UserBlockingPriority,
  no = mt.unstable_NormalPriority,
  ih = mt.unstable_LowPriority,
  bu = mt.unstable_IdlePriority,
  ko = null,
  Ot = null;
function ah(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function")
    try {
      Ot.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : dh,
  ch = Math.log,
  uh = Math.LN2;
function dh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ch(e) / uh) | 0)) | 0;
}
var Cs = 64,
  Es = 4194304;
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
function ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = Or(a)) : ((l &= i), l !== 0 && (r = Or(l)));
  } else (i = n & ~o), i !== 0 ? (r = Or(i)) : l !== 0 && (r = Or(l));
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
      (n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function fh(e, t) {
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
function hh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Dt(l),
      a = 1 << i,
      c = o[i];
    c === -1
      ? (!(a & n) || a & r) && (o[i] = fh(a, t))
      : c <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nu() {
  var e = Cs;
  return (Cs <<= 1), !(Cs & 4194240) && (Cs = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function mh(e, t) {
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
    var o = 31 - Dt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var fe = 0;
function _u(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ju,
  Ei,
  Su,
  ku,
  Cu,
  Ol = !1,
  Ds = [],
  rn = null,
  sn = null,
  on = null,
  Xr = new Map(),
  Jr = new Map(),
  Zt = [],
  ph =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function Er(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = ys(t)), t !== null && Ei(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (rn = Er(rn, e, t, n, r, o)), !0;
    case "dragenter":
      return (sn = Er(sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (on = Er(on, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Xr.set(l, Er(Xr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Jr.set(l, Er(Jr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Eu(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gu(n)), t !== null)) {
          (e.blockedOn = t),
            Cu(e.priority, function () {
              Su(n);
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
function Hs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Il = r), n.target.dispatchEvent(r), (Il = null);
    } else return (t = ys(n)), t !== null && Ei(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ma(e, t, n) {
  Hs(e) && n.delete(t);
}
function xh() {
  (Ol = !1),
    rn !== null && Hs(rn) && (rn = null),
    sn !== null && Hs(sn) && (sn = null),
    on !== null && Hs(on) && (on = null),
    Xr.forEach(Ma),
    Jr.forEach(Ma);
}
function Dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ol ||
      ((Ol = !0),
      mt.unstable_scheduleCallback(mt.unstable_NormalPriority, xh)));
}
function Zr(e) {
  function t(o) {
    return Dr(o, e);
  }
  if (0 < Ds.length) {
    Dr(Ds[0], e);
    for (var n = 1; n < Ds.length; n++) {
      var r = Ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Dr(rn, e),
      sn !== null && Dr(sn, e),
      on !== null && Dr(on, e),
      Xr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    Eu(n), n.blockedOn === null && Zt.shift();
}
var sr = qt.ReactCurrentBatchConfig,
  so = !0;
function yh(e, t, n, r) {
  var o = fe,
    l = sr.transition;
  sr.transition = null;
  try {
    (fe = 1), Di(e, t, n, r);
  } finally {
    (fe = o), (sr.transition = l);
  }
}
function vh(e, t, n, r) {
  var o = fe,
    l = sr.transition;
  sr.transition = null;
  try {
    (fe = 4), Di(e, t, n, r);
  } finally {
    (fe = o), (sr.transition = l);
  }
}
function Di(e, t, n, r) {
  if (so) {
    var o = Ll(e, t, n, r);
    if (o === null) il(e, t, r, oo, n), Pa(e, r);
    else if (gh(o, e, t, n, r)) r.stopPropagation();
    else if ((Pa(e, r), t & 4 && -1 < ph.indexOf(e))) {
      for (; o !== null; ) {
        var l = ys(o);
        if (
          (l !== null && ju(l),
          (l = Ll(e, t, n, r)),
          l === null && il(e, t, r, oo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else il(e, t, r, null, n);
  }
}
var oo = null;
function Ll(e, t, n, r) {
  if (((oo = null), (e = Si(r)), (e = Nn(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (oo = e), null;
}
function Du(e) {
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
      switch (lh()) {
        case ki:
          return 1;
        case wu:
          return 4;
        case no:
        case ih:
          return 16;
        case bu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  Ti = null,
  Gs = null;
function Tu() {
  if (Gs) return Gs;
  var e,
    t = Ti,
    n = t.length,
    r,
    o = "value" in tn ? tn.value : tn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Gs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ws(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ts() {
  return !0;
}
function Aa() {
  return !1;
}
function gt(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ts
        : Aa),
      (this.isPropagationStopped = Aa),
      this
    );
  }
  return (
    je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ts));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ts));
      },
      persist: function () {},
      isPersistent: Ts,
    }),
    t
  );
}
var yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ii = gt(yr),
  xs = je({}, yr, { view: 0, detail: 0 }),
  wh = gt(xs),
  Jo,
  Zo,
  Tr,
  Co = je({}, xs, {
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
        : (e !== Tr &&
            (Tr && e.type === "mousemove"
              ? ((Jo = e.screenX - Tr.screenX), (Zo = e.screenY - Tr.screenY))
              : (Zo = Jo = 0),
            (Tr = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  Oa = gt(Co),
  bh = je({}, Co, { dataTransfer: 0 }),
  Nh = gt(bh),
  _h = je({}, xs, { relatedTarget: 0 }),
  el = gt(_h),
  jh = je({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sh = gt(jh),
  kh = je({}, yr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ch = gt(kh),
  Eh = je({}, yr, { data: 0 }),
  La = gt(Eh),
  Dh = {
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
  Th = {
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
  Ih = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ih[e]) ? !!t[e] : !1;
}
function Ri() {
  return Rh;
}
var Ph = je({}, xs, {
    key: function (e) {
      if (e.key) {
        var t = Dh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ws(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Th[e.keyCode] || "Unidentified"
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
      return e.type === "keypress" ? Ws(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ws(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mh = gt(Ph),
  Ah = je({}, Co, {
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
  $a = gt(Ah),
  Oh = je({}, xs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ri,
  }),
  Lh = gt(Oh),
  $h = je({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uh = gt($h),
  zh = je({}, Co, {
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
  Fh = gt(zh),
  Bh = [9, 13, 27, 32],
  Pi = Gt && "CompositionEvent" in window,
  zr = null;
Gt && "documentMode" in document && (zr = document.documentMode);
var Hh = Gt && "TextEvent" in window && !zr,
  Iu = Gt && (!Pi || (zr && 8 < zr && 11 >= zr)),
  Ua = " ",
  za = !1;
function Ru(e, t) {
  switch (e) {
    case "keyup":
      return Bh.indexOf(t.keyCode) !== -1;
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
function Pu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function Gh(e, t) {
  switch (e) {
    case "compositionend":
      return Pu(t);
    case "keypress":
      return t.which !== 32 ? null : ((za = !0), Ua);
    case "textInput":
      return (e = t.data), e === Ua && za ? null : e;
    default:
      return null;
  }
}
function Wh(e, t) {
  if (Wn)
    return e === "compositionend" || (!Pi && Ru(e, t))
      ? ((e = Tu()), (Gs = Ti = tn = null), (Wn = !1), e)
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
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vh = {
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
function Fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vh[e.type] : t === "textarea";
}
function Mu(e, t, n, r) {
  du(r),
    (t = lo(t, "onChange")),
    0 < t.length &&
      ((n = new Ii("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fr = null,
  es = null;
function Qh(e) {
  Wu(e, 0);
}
function Eo(e) {
  var t = qn(e);
  if (su(t)) return e;
}
function qh(e, t) {
  if (e === "change") return t;
}
var Au = !1;
if (Gt) {
  var tl;
  if (Gt) {
    var nl = "oninput" in document;
    if (!nl) {
      var Ba = document.createElement("div");
      Ba.setAttribute("oninput", "return;"),
        (nl = typeof Ba.oninput == "function");
    }
    tl = nl;
  } else tl = !1;
  Au = tl && (!document.documentMode || 9 < document.documentMode);
}
function Ha() {
  Fr && (Fr.detachEvent("onpropertychange", Ou), (es = Fr = null));
}
function Ou(e) {
  if (e.propertyName === "value" && Eo(es)) {
    var t = [];
    Mu(t, es, e, Si(e)), pu(Qh, t);
  }
}
function Kh(e, t, n) {
  e === "focusin"
    ? (Ha(), (Fr = t), (es = n), Fr.attachEvent("onpropertychange", Ou))
    : e === "focusout" && Ha();
}
function Yh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Eo(es);
}
function Xh(e, t) {
  if (e === "click") return Eo(t);
}
function Jh(e, t) {
  if (e === "input" || e === "change") return Eo(t);
}
function Zh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : Zh;
function ts(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!vl.call(t, o) || !Rt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = Ga(e);
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
    n = Ga(n);
  }
}
function Lu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $u() {
  for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zs(e.document);
  }
  return t;
}
function Mi(e) {
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
function em(e) {
  var t = $u(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mi(n)) {
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
          (o = Wa(n, l));
        var i = Wa(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
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
var tm = Gt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  $l = null,
  Br = null,
  Ul = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ul ||
    Vn == null ||
    Vn !== Zs(r) ||
    ((r = Vn),
    "selectionStart" in r && Mi(r)
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
    (Br && ts(Br, r)) ||
      ((Br = r),
      (r = lo($l, "onSelect")),
      0 < r.length &&
        ((t = new Ii("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Is(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Is("Animation", "AnimationEnd"),
    animationiteration: Is("Animation", "AnimationIteration"),
    animationstart: Is("Animation", "AnimationStart"),
    transitionend: Is("Transition", "TransitionEnd"),
  },
  rl = {},
  Uu = {};
Gt &&
  ((Uu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function Do(e) {
  if (rl[e]) return rl[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uu) return (rl[e] = t[n]);
  return e;
}
var zu = Do("animationend"),
  Fu = Do("animationiteration"),
  Bu = Do("animationstart"),
  Hu = Do("transitionend"),
  Gu = new Map(),
  Qa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Gu.set(e, t), $n(t, [e]);
}
for (var sl = 0; sl < Qa.length; sl++) {
  var ol = Qa[sl],
    nm = ol.toLowerCase(),
    rm = ol[0].toUpperCase() + ol.slice(1);
  mn(nm, "on" + rm);
}
mn(zu, "onAnimationEnd");
mn(Fu, "onAnimationIteration");
mn(Bu, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Hu, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
$n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nh(r, t, void 0, e), (e.currentTarget = null);
}
function Wu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), c !== l && o.isPropagationStopped())) break e;
          qa(o, a, u), (l = c);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          qa(o, a, u), (l = c);
        }
    }
  }
  if (to) throw ((e = Ml), (to = !1), (Ml = null), e);
}
function ye(e, t) {
  var n = t[Gl];
  n === void 0 && (n = t[Gl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vu(t, e, 2, !1), n.add(r));
}
function ll(e, t, n) {
  var r = 0;
  t && (r |= 4), Vu(n, e, r, t);
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function ns(e) {
  if (!e[Rs]) {
    (e[Rs] = !0),
      Zc.forEach(function (n) {
        n !== "selectionchange" && (sm.has(n) || ll(n, !1, e), ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rs] || ((t[Rs] = !0), ll("selectionchange", !1, t));
  }
}
function Vu(e, t, n, r) {
  switch (Du(t)) {
    case 1:
      var o = yh;
      break;
    case 4:
      o = vh;
      break;
    default:
      o = Di;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Pl ||
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
function il(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Nn(a)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  pu(function () {
    var u = l,
      h = Si(n),
      p = [];
    e: {
      var g = Gu.get(e);
      if (g !== void 0) {
        var y = Ii,
          b = e;
        switch (e) {
          case "keypress":
            if (Ws(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Mh;
            break;
          case "focusin":
            (b = "focus"), (y = el);
            break;
          case "focusout":
            (b = "blur"), (y = el);
            break;
          case "beforeblur":
          case "afterblur":
            y = el;
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
            y = Oa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Lh;
            break;
          case zu:
          case Fu:
          case Bu:
            y = Sh;
            break;
          case Hu:
            y = Uh;
            break;
          case "scroll":
            y = wh;
            break;
          case "wheel":
            y = Fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Ch;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = $a;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          f = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var v = m.stateNode;
          if (
            (m.tag === 5 &&
              v !== null &&
              ((m = v),
              f !== null && ((v = Yr(d, f)), v != null && S.push(rs(d, v, m)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((g = new y(g, b, null, n, h)), p.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Il &&
            (b = n.relatedTarget || n.fromElement) &&
            (Nn(b) || b[Wt]))
        )
          break e;
        if (
          (y || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          y
            ? ((b = n.relatedTarget || n.toElement),
              (y = u),
              (b = b ? Nn(b) : null),
              b !== null &&
                ((C = Un(b)), b !== C || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((y = null), (b = u)),
          y !== b)
        ) {
          if (
            ((S = Oa),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = $a),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (C = y == null ? g : qn(y)),
            (m = b == null ? g : qn(b)),
            (g = new S(v, d + "leave", y, n, h)),
            (g.target = C),
            (g.relatedTarget = m),
            (v = null),
            Nn(h) === u &&
              ((S = new S(f, d + "enter", b, n, h)),
              (S.target = m),
              (S.relatedTarget = C),
              (v = S)),
            (C = v),
            y && b)
          )
            t: {
              for (S = y, f = b, d = 0, m = S; m; m = Bn(m)) d++;
              for (m = 0, v = f; v; v = Bn(v)) m++;
              for (; 0 < d - m; ) (S = Bn(S)), d--;
              for (; 0 < m - d; ) (f = Bn(f)), m--;
              for (; d--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Bn(S)), (f = Bn(f));
              }
              S = null;
            }
          else S = null;
          y !== null && Ka(p, g, y, S, !1),
            b !== null && C !== null && Ka(p, C, b, S, !0);
        }
      }
      e: {
        if (
          ((g = u ? qn(u) : window),
          (y = g.nodeName && g.nodeName.toLowerCase()),
          y === "select" || (y === "input" && g.type === "file"))
        )
          var _ = qh;
        else if (Fa(g))
          if (Au) _ = Jh;
          else {
            _ = Yh;
            var k = Kh;
          }
        else
          (y = g.nodeName) &&
            y.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (_ = Xh);
        if (_ && (_ = _(e, u))) {
          Mu(p, _, n, h);
          break e;
        }
        k && k(e, g, u),
          e === "focusout" &&
            (k = g._wrapperState) &&
            k.controlled &&
            g.type === "number" &&
            kl(g, "number", g.value);
      }
      switch (((k = u ? qn(u) : window), e)) {
        case "focusin":
          (Fa(k) || k.contentEditable === "true") &&
            ((Vn = k), ($l = u), (Br = null));
          break;
        case "focusout":
          Br = $l = Vn = null;
          break;
        case "mousedown":
          Ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ul = !1), Va(p, n, h);
          break;
        case "selectionchange":
          if (tm) break;
        case "keydown":
        case "keyup":
          Va(p, n, h);
      }
      var R;
      if (Pi)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Wn
          ? Ru(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Iu &&
          n.locale !== "ko" &&
          (Wn || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Wn && (R = Tu())
            : ((tn = h),
              (Ti = "value" in tn ? tn.value : tn.textContent),
              (Wn = !0))),
        (k = lo(u, M)),
        0 < k.length &&
          ((M = new La(M, e, null, n, h)),
          p.push({ event: M, listeners: k }),
          R ? (M.data = R) : ((R = Pu(n)), R !== null && (M.data = R)))),
        (R = Hh ? Gh(e, n) : Wh(e, n)) &&
          ((u = lo(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new La("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: u }),
            (h.data = R)));
    }
    Wu(p, t);
  });
}
function rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Yr(e, n)),
      l != null && r.unshift(rs(e, l, o)),
      (l = Yr(e, t)),
      l != null && r.push(rs(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ka(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((c = Yr(n, l)), c != null && i.unshift(rs(n, c, a)))
        : o || ((c = Yr(n, l)), c != null && i.push(rs(n, c, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var om = /\r\n?/g,
  lm = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      om,
      `
`
    )
    .replace(lm, "");
}
function Ps(e, t, n) {
  if (((t = Ya(t)), Ya(e) !== t && n)) throw Error(O(425));
}
function io() {}
var zl = null,
  Fl = null;
function Bl(e, t) {
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
var Hl = typeof setTimeout == "function" ? setTimeout : void 0,
  im = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xa = typeof Promise == "function" ? Promise : void 0,
  am =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xa < "u"
      ? function (e) {
          return Xa.resolve(null).then(e).catch(cm);
        }
      : Hl;
function cm(e) {
  setTimeout(function () {
    throw e;
  });
}
function al(e, t) {
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
function ln(e) {
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
function Ja(e) {
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
var vr = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + vr,
  ss = "__reactProps$" + vr,
  Wt = "__reactContainer$" + vr,
  Gl = "__reactEvents$" + vr,
  um = "__reactListeners$" + vr,
  dm = "__reactHandles$" + vr;
function Nn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[At])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ja(e); e !== null; ) {
          if ((n = e[At])) return n;
          e = Ja(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ys(e) {
  return (
    (e = e[At] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function To(e) {
  return e[ss] || null;
}
var Wl = [],
  Kn = -1;
function pn(e) {
  return { current: e };
}
function ve(e) {
  0 > Kn || ((e.current = Wl[Kn]), (Wl[Kn] = null), Kn--);
}
function pe(e, t) {
  Kn++, (Wl[Kn] = e.current), (e.current = t);
}
var hn = {},
  Qe = pn(hn),
  tt = pn(!1),
  Tn = hn;
function ar(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
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
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function ao() {
  ve(tt), ve(Qe);
}
function Za(e, t, n) {
  if (Qe.current !== hn) throw Error(O(168));
  pe(Qe, t), pe(tt, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Kf(e) || "Unknown", o));
  return je({}, n, r);
}
function co(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (Tn = Qe.current),
    pe(Qe, e),
    pe(tt, tt.current),
    !0
  );
}
function ec(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Qu(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ve(tt),
      ve(Qe),
      pe(Qe, e))
    : ve(tt),
    pe(tt, n);
}
var zt = null,
  Io = !1,
  cl = !1;
function qu(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function fm(e) {
  (Io = !0), qu(e);
}
function gn() {
  if (!cl && zt !== null) {
    cl = !0;
    var e = 0,
      t = fe;
    try {
      var n = zt;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (Io = !1);
    } catch (o) {
      throw (zt !== null && (zt = zt.slice(e + 1)), vu(ki, gn), o);
    } finally {
      (fe = t), (cl = !1);
    }
  }
  return null;
}
var Yn = [],
  Xn = 0,
  uo = null,
  fo = 0,
  xt = [],
  yt = 0,
  In = null,
  Ft = 1,
  Bt = "";
function vn(e, t) {
  (Yn[Xn++] = fo), (Yn[Xn++] = uo), (uo = e), (fo = t);
}
function Ku(e, t, n) {
  (xt[yt++] = Ft), (xt[yt++] = Bt), (xt[yt++] = In), (In = e);
  var r = Ft;
  e = Bt;
  var o = 32 - Dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Dt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ft = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (Bt = l + e);
  } else (Ft = (1 << l) | (n << o) | r), (Bt = e);
}
function Ai(e) {
  e.return !== null && (vn(e, 1), Ku(e, 1, 0));
}
function Oi(e) {
  for (; e === uo; )
    (uo = Yn[--Xn]), (Yn[Xn] = null), (fo = Yn[--Xn]), (Yn[Xn] = null);
  for (; e === In; )
    (In = xt[--yt]),
      (xt[yt] = null),
      (Bt = xt[--yt]),
      (xt[yt] = null),
      (Ft = xt[--yt]),
      (xt[yt] = null);
}
var ht = null,
  ct = null,
  we = !1,
  Ct = null;
function Yu(e, t) {
  var n = vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function tc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ht = e), (ct = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = In !== null ? { id: Ft, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ht = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
  if (we) {
    var t = ct;
    if (t) {
      var n = t;
      if (!tc(e, t)) {
        if (Vl(e)) throw Error(O(418));
        t = ln(n.nextSibling);
        var r = ht;
        t && tc(e, t)
          ? Yu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ht = e));
      }
    } else {
      if (Vl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (ht = e);
    }
  }
}
function nc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ht = e;
}
function Ms(e) {
  if (e !== ht) return !1;
  if (!we) return nc(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Vl(e)) throw (Xu(), Error(O(418)));
    for (; t; ) Yu(e, t), (t = ln(t.nextSibling));
  }
  if ((nc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ht ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  for (var e = ct; e; ) e = ln(e.nextSibling);
}
function cr() {
  (ct = ht = null), (we = !1);
}
function Li(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var hm = qt.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function As(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function Ju(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = dn(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, m, v) {
    return d === null || d.tag !== 6
      ? ((d = gl(m, f.mode, v)), (d.return = f), d)
      : ((d = o(d, m)), (d.return = f), d);
  }
  function c(f, d, m, v) {
    var _ = m.type;
    return _ === Gn
      ? h(f, d, m.props.children, v, m.key)
      : d !== null &&
        (d.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Xt &&
            rc(_) === d.type))
      ? ((v = o(d, m.props)), (v.ref = Ir(f, d, m)), (v.return = f), v)
      : ((v = Js(m.type, m.key, m.props, null, f.mode, v)),
        (v.ref = Ir(f, d, m)),
        (v.return = f),
        v);
  }
  function u(f, d, m, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = xl(m, f.mode, v)), (d.return = f), d)
      : ((d = o(d, m.children || [])), (d.return = f), d);
  }
  function h(f, d, m, v, _) {
    return d === null || d.tag !== 7
      ? ((d = Cn(m, f.mode, v, _)), (d.return = f), d)
      : ((d = o(d, m)), (d.return = f), d);
  }
  function p(f, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = gl("" + d, f.mode, m)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case js:
          return (
            (m = Js(d.type, d.key, d.props, null, f.mode, m)),
            (m.ref = Ir(f, null, d)),
            (m.return = f),
            m
          );
        case Hn:
          return (d = xl(d, f.mode, m)), (d.return = f), d;
        case Xt:
          var v = d._init;
          return p(f, v(d._payload), m);
      }
      if (Ar(d) || kr(d))
        return (d = Cn(d, f.mode, m, null)), (d.return = f), d;
      As(f, d);
    }
    return null;
  }
  function g(f, d, m, v) {
    var _ = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : a(f, d, "" + m, v);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case js:
          return m.key === _ ? c(f, d, m, v) : null;
        case Hn:
          return m.key === _ ? u(f, d, m, v) : null;
        case Xt:
          return (_ = m._init), g(f, d, _(m._payload), v);
      }
      if (Ar(m) || kr(m)) return _ !== null ? null : h(f, d, m, v, null);
      As(f, m);
    }
    return null;
  }
  function y(f, d, m, v, _) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(m) || null), a(d, f, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case js:
          return (f = f.get(v.key === null ? m : v.key) || null), c(d, f, v, _);
        case Hn:
          return (f = f.get(v.key === null ? m : v.key) || null), u(d, f, v, _);
        case Xt:
          var k = v._init;
          return y(f, d, m, k(v._payload), _);
      }
      if (Ar(v) || kr(v)) return (f = f.get(m) || null), h(d, f, v, _, null);
      As(d, v);
    }
    return null;
  }
  function b(f, d, m, v) {
    for (
      var _ = null, k = null, R = d, M = (d = 0), V = null;
      R !== null && M < m.length;
      M++
    ) {
      R.index > M ? ((V = R), (R = null)) : (V = R.sibling);
      var D = g(f, R, m[M], v);
      if (D === null) {
        R === null && (R = V);
        break;
      }
      e && R && D.alternate === null && t(f, R),
        (d = l(D, d, M)),
        k === null ? (_ = D) : (k.sibling = D),
        (k = D),
        (R = V);
    }
    if (M === m.length) return n(f, R), we && vn(f, M), _;
    if (R === null) {
      for (; M < m.length; M++)
        (R = p(f, m[M], v)),
          R !== null &&
            ((d = l(R, d, M)), k === null ? (_ = R) : (k.sibling = R), (k = R));
      return we && vn(f, M), _;
    }
    for (R = r(f, R); M < m.length; M++)
      (V = y(R, f, M, m[M], v)),
        V !== null &&
          (e && V.alternate !== null && R.delete(V.key === null ? M : V.key),
          (d = l(V, d, M)),
          k === null ? (_ = V) : (k.sibling = V),
          (k = V));
    return (
      e &&
        R.forEach(function (F) {
          return t(f, F);
        }),
      we && vn(f, M),
      _
    );
  }
  function S(f, d, m, v) {
    var _ = kr(m);
    if (typeof _ != "function") throw Error(O(150));
    if (((m = _.call(m)), m == null)) throw Error(O(151));
    for (
      var k = (_ = null), R = d, M = (d = 0), V = null, D = m.next();
      R !== null && !D.done;
      M++, D = m.next()
    ) {
      R.index > M ? ((V = R), (R = null)) : (V = R.sibling);
      var F = g(f, R, D.value, v);
      if (F === null) {
        R === null && (R = V);
        break;
      }
      e && R && F.alternate === null && t(f, R),
        (d = l(F, d, M)),
        k === null ? (_ = F) : (k.sibling = F),
        (k = F),
        (R = V);
    }
    if (D.done) return n(f, R), we && vn(f, M), _;
    if (R === null) {
      for (; !D.done; M++, D = m.next())
        (D = p(f, D.value, v)),
          D !== null &&
            ((d = l(D, d, M)), k === null ? (_ = D) : (k.sibling = D), (k = D));
      return we && vn(f, M), _;
    }
    for (R = r(f, R); !D.done; M++, D = m.next())
      (D = y(R, f, M, D.value, v)),
        D !== null &&
          (e && D.alternate !== null && R.delete(D.key === null ? M : D.key),
          (d = l(D, d, M)),
          k === null ? (_ = D) : (k.sibling = D),
          (k = D));
    return (
      e &&
        R.forEach(function (P) {
          return t(f, P);
        }),
      we && vn(f, M),
      _
    );
  }
  function C(f, d, m, v) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Gn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case js:
          e: {
            for (var _ = m.key, k = d; k !== null; ) {
              if (k.key === _) {
                if (((_ = m.type), _ === Gn)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (d = o(k, m.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  k.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Xt &&
                    rc(_) === k.type)
                ) {
                  n(f, k.sibling),
                    (d = o(k, m.props)),
                    (d.ref = Ir(f, k, m)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            m.type === Gn
              ? ((d = Cn(m.props.children, f.mode, v, m.key)),
                (d.return = f),
                (f = d))
              : ((v = Js(m.type, m.key, m.props, null, f.mode, v)),
                (v.ref = Ir(f, d, m)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Hn:
          e: {
            for (k = m.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, m.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = xl(m, f.mode, v)), (d.return = f), (f = d);
          }
          return i(f);
        case Xt:
          return (k = m._init), C(f, d, k(m._payload), v);
      }
      if (Ar(m)) return b(f, d, m, v);
      if (kr(m)) return S(f, d, m, v);
      As(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, m)), (d.return = f), (f = d))
          : (n(f, d), (d = gl(m, f.mode, v)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return C;
}
var ur = Ju(!0),
  Zu = Ju(!1),
  ho = pn(null),
  mo = null,
  Jn = null,
  $i = null;
function Ui() {
  $i = Jn = mo = null;
}
function zi(e) {
  var t = ho.current;
  ve(ho), (e._currentValue = t);
}
function ql(e, t, n) {
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
function or(e, t) {
  (mo = e),
    ($i = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (et = !0), (e.firstContext = null));
}
function bt(e) {
  var t = e._currentValue;
  if ($i !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (mo === null) throw Error(O(308));
      (Jn = e), (mo.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var _n = null;
function Fi(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function ed(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Fi(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Vt(e, r)
  );
}
function Vt(e, t) {
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
var Jt = !1;
function Bi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function td(e, t) {
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
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ue & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Vt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Fi(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Vt(e, n)
  );
}
function Vs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
function sc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
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
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
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
function po(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var c = a,
      u = c.next;
    (c.next = null), i === null ? (l = u) : (i.next = u), (i = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== i &&
        (a === null ? (h.firstBaseUpdate = u) : (a.next = u),
        (h.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var p = o.baseState;
    (i = 0), (h = u = c = null), (a = l);
    do {
      var g = a.lane,
        y = a.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            S = a;
          switch (((g = t), (y = n), S.tag)) {
            case 1:
              if (((b = S.payload), typeof b == "function")) {
                p = b.call(y, p, g);
                break e;
              }
              p = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = S.payload),
                (g = typeof b == "function" ? b.call(y, p, g) : b),
                g == null)
              )
                break e;
              p = je({}, p, g);
              break e;
            case 2:
              Jt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [a]) : g.push(a));
      } else
        (y = {
          eventTime: y,
          lane: g,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((u = h = y), (c = p)) : (h = h.next = y),
          (i |= g);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (g = a),
          (a = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = p),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Pn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function oc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var vs = {},
  Lt = pn(vs),
  os = pn(vs),
  ls = pn(vs);
function jn(e) {
  if (e === vs) throw Error(O(174));
  return e;
}
function Hi(e, t) {
  switch ((pe(ls, t), pe(os, e), pe(Lt, vs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  ve(Lt), pe(Lt, t);
}
function dr() {
  ve(Lt), ve(os), ve(ls);
}
function nd(e) {
  jn(ls.current);
  var t = jn(Lt.current),
    n = El(t, e.type);
  t !== n && (pe(os, e), pe(Lt, n));
}
function Gi(e) {
  os.current === e && (ve(Lt), ve(os));
}
var be = pn(0);
function go(e) {
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
var ul = [];
function Wi() {
  for (var e = 0; e < ul.length; e++)
    ul[e]._workInProgressVersionPrimary = null;
  ul.length = 0;
}
var Qs = qt.ReactCurrentDispatcher,
  dl = qt.ReactCurrentBatchConfig,
  Rn = 0,
  _e = null,
  Me = null,
  Oe = null,
  xo = !1,
  Hr = !1,
  is = 0,
  mm = 0;
function He() {
  throw Error(O(321));
}
function Vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function Qi(e, t, n, r, o, l) {
  if (
    ((Rn = l),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? ym : vm),
    (e = n(r, o)),
    Hr)
  ) {
    l = 0;
    do {
      if (((Hr = !1), (is = 0), 25 <= l)) throw Error(O(301));
      (l += 1),
        (Oe = Me = null),
        (t.updateQueue = null),
        (Qs.current = wm),
        (e = n(r, o));
    } while (Hr);
  }
  if (
    ((Qs.current = yo),
    (t = Me !== null && Me.next !== null),
    (Rn = 0),
    (Oe = Me = _e = null),
    (xo = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function qi() {
  var e = is !== 0;
  return (is = 0), e;
}
function Mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (_e.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function Nt() {
  if (Me === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Me.next;
  var t = Oe === null ? _e.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Me = e);
  else {
    if (e === null) throw Error(O(310));
    (Me = e),
      (e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null,
      }),
      Oe === null ? (_e.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function as(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fl(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Me,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      c = null,
      u = l;
    do {
      var h = u.lane;
      if ((Rn & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((a = c = p), (i = r)) : (c = c.next = p),
          (_e.lanes |= h),
          (Pn |= h);
      }
      u = u.next;
    } while (u !== null && u !== l);
    c === null ? (i = r) : (c.next = a),
      Rt(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (_e.lanes |= l), (Pn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Rt(l, t.memoizedState) || (et = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function rd() {}
function sd(e, t) {
  var n = _e,
    r = Nt(),
    o = t(),
    l = !Rt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    Ki(id.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, ld.bind(null, n, r, o, t), void 0, null),
      Le === null)
    )
      throw Error(O(349));
    Rn & 30 || od(n, t, o);
  }
  return o;
}
function od(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ld(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ad(t) && cd(e);
}
function id(e, t, n) {
  return n(function () {
    ad(t) && cd(e);
  });
}
function ad(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function cd(e) {
  var t = Vt(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function lc(e) {
  var t = Mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: as,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xm.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ud() {
  return Nt().memoizedState;
}
function qs(e, t, n, r) {
  var o = Mt();
  (_e.flags |= e),
    (o.memoizedState = cs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var o = Nt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Me !== null) {
    var i = Me.memoizedState;
    if (((l = i.destroy), r !== null && Vi(r, i.deps))) {
      o.memoizedState = cs(t, n, l, r);
      return;
    }
  }
  (_e.flags |= e), (o.memoizedState = cs(1 | t, n, l, r));
}
function ic(e, t) {
  return qs(8390656, 8, e, t);
}
function Ki(e, t) {
  return Ro(2048, 8, e, t);
}
function dd(e, t) {
  return Ro(4, 2, e, t);
}
function fd(e, t) {
  return Ro(4, 4, e, t);
}
function hd(e, t) {
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
function md(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ro(4, 4, hd.bind(null, t, e), n)
  );
}
function Yi() {}
function pd(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gd(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xd(e, t, n) {
  return Rn & 21
    ? (Rt(n, t) || ((n = Nu()), (_e.lanes |= n), (Pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function pm(e, t) {
  var n = fe;
  (fe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dl.transition;
  dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (fe = n), (dl.transition = r);
  }
}
function yd() {
  return Nt().memoizedState;
}
function gm(e, t, n) {
  var r = un(e);
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
    wd(t, n);
  else if (((n = ed(e, t, n, r)), n !== null)) {
    var o = Ye();
    Tt(n, e, r, o), bd(n, t, r);
  }
}
function xm(e, t, n) {
  var r = un(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vd(e)) wd(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Rt(a, i))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Fi(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ed(e, t, o, r)),
      n !== null && ((o = Ye()), Tt(n, e, r, o), bd(n, t, r));
  }
}
function vd(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function wd(e, t) {
  Hr = xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ci(e, n);
  }
}
var yo = {
    readContext: bt,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1,
  },
  ym = {
    readContext: bt,
    useCallback: function (e, t) {
      return (Mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: bt,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qs(4194308, 4, hd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Mt();
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
        (e = e.dispatch = gm.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lc,
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      return (Mt().memoizedState = e);
    },
    useTransition: function () {
      var e = lc(!1),
        t = e[0];
      return (e = pm.bind(null, e[1])), (Mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        o = Mt();
      if (we) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(O(349));
        Rn & 30 || od(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ic(id.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        cs(9, ld.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Mt(),
        t = Le.identifierPrefix;
      if (we) {
        var n = Bt,
          r = Ft;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = is++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vm = {
    readContext: bt,
    useCallback: pd,
    useContext: bt,
    useEffect: Ki,
    useImperativeHandle: md,
    useInsertionEffect: dd,
    useLayoutEffect: fd,
    useMemo: gd,
    useReducer: fl,
    useRef: ud,
    useState: function () {
      return fl(as);
    },
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      var t = Nt();
      return xd(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = fl(as)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: rd,
    useSyncExternalStore: sd,
    useId: yd,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: bt,
    useCallback: pd,
    useContext: bt,
    useEffect: Ki,
    useImperativeHandle: md,
    useInsertionEffect: dd,
    useLayoutEffect: fd,
    useMemo: gd,
    useReducer: hl,
    useRef: ud,
    useState: function () {
      return hl(as);
    },
    useDebugValue: Yi,
    useDeferredValue: function (e) {
      var t = Nt();
      return Me === null ? (t.memoizedState = e) : xd(t, Me.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(as)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: rd,
    useSyncExternalStore: sd,
    useId: yd,
    unstable_isNewReconciler: !1,
  };
function St(e, t) {
  if (e && e.defaultProps) {
    (t = je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Kl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = un(e),
      l = Ht(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = an(e, l, o)),
      t !== null && (Tt(t, e, o, r), Vs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ye(),
      o = un(e),
      l = Ht(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = an(e, l, o)),
      t !== null && (Tt(t, e, o, r), Vs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ye(),
      r = un(e),
      o = Ht(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = an(e, o, r)),
      t !== null && (Tt(t, e, r, n), Vs(t, e, r));
  },
};
function ac(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ts(n, r) || !ts(o, l)
      : !0
  );
}
function Nd(e, t, n) {
  var r = !1,
    o = hn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = bt(l))
      : ((o = nt(t) ? Tn : Qe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? ar(e, o) : hn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Po),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function Yl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Bi(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = bt(l))
    : ((l = nt(t) ? Tn : Qe.current), (o.context = ar(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Kl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Po.enqueueReplaceState(o, o.state, null),
      po(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qf(r)), (r = r.return);
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
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bm = typeof WeakMap == "function" ? WeakMap : Map;
function _d(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wo || ((wo = !0), (ii = r)), Xl(e, t);
    }),
    n
  );
}
function jd(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Xl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Xl(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function uc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Am.bind(null, e, t, n)), t.then(e, e));
}
function dc(e) {
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
function fc(e, t, n, r, o) {
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
              : ((t = Ht(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nm = qt.ReactCurrentOwner,
  et = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? Zu(t, null, n, r) : ur(t, e.child, n, r);
}
function hc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    or(t, o),
    (r = Qi(e, t, n, r, l, o)),
    (n = qi()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (we && n && Ai(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  );
}
function mc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !sa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Sd(e, t, l, r, o))
      : ((e = Js(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ts), n(i, r) && e.ref === t.ref)
    )
      return Qt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = dn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (ts(l, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), Qt(e, t, o);
  }
  return Jl(e, t, n, r, o);
}
function kd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(er, it),
        (it |= n);
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
          pe(er, it),
          (it |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        pe(er, it),
        (it |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(er, it),
      (it |= r);
  return Ke(e, t, o, n), t.child;
}
function Cd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jl(e, t, n, r, o) {
  var l = nt(n) ? Tn : Qe.current;
  return (
    (l = ar(t, l)),
    or(t, o),
    (n = Qi(e, t, n, r, l, o)),
    (r = qi()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (we && r && Ai(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  );
}
function pc(e, t, n, r, o) {
  if (nt(n)) {
    var l = !0;
    co(t);
  } else l = !1;
  if ((or(t, o), t.stateNode === null))
    Ks(e, t), Nd(t, n, r), Yl(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = bt(u))
      : ((u = nt(n) ? Tn : Qe.current), (u = ar(t, u)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || c !== u) && cc(t, i, r, u)),
      (Jt = !1);
    var g = t.memoizedState;
    (i.state = g),
      po(t, r, i, o),
      (c = t.memoizedState),
      a !== r || g !== c || tt.current || Jt
        ? (typeof h == "function" && (Kl(t, n, h, r), (c = t.memoizedState)),
          (a = Jt || ac(t, n, a, r, g, c, u))
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
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      td(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : St(t.type, a)),
      (i.props = u),
      (p = t.pendingProps),
      (g = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = bt(c))
        : ((c = nt(n) ? Tn : Qe.current), (c = ar(t, c)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || g !== c) && cc(t, i, r, c)),
      (Jt = !1),
      (g = t.memoizedState),
      (i.state = g),
      po(t, r, i, o);
    var b = t.memoizedState;
    a !== p || g !== b || tt.current || Jt
      ? (typeof y == "function" && (Kl(t, n, y, r), (b = t.memoizedState)),
        (u = Jt || ac(t, n, u, r, g, b, c) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, b, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, b, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (i.props = r),
        (i.state = b),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zl(e, t, n, r, l, o);
}
function Zl(e, t, n, r, o, l) {
  Cd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ec(t, n, !1), Qt(e, t, l);
  (r = t.stateNode), (Nm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ur(t, e.child, null, l)), (t.child = ur(t, null, a, l)))
      : Ke(e, t, a, l),
    (t.memoizedState = r.state),
    o && ec(t, n, !0),
    t.child
  );
}
function Ed(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Za(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Za(e, t.context, !1),
    Hi(e, t.containerInfo);
}
function gc(e, t, n, r, o) {
  return cr(), Li(o), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
function ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dd(e, t, n) {
  var r = t.pendingProps,
    o = be.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(be, o & 1),
    e === null)
  )
    return (
      Ql(t),
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
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Oo(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ti(n)),
              (t.memoizedState = ei),
              e)
            : Xi(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return _m(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = dn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = dn(a, l)) : ((l = Cn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ti(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ei),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = dn(l, { mode: "visible", children: r.children })),
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
function Xi(e, t) {
  return (
    (t = Oo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && Li(r),
    ur(t, e.child, null, n),
    (e = Xi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _m(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ml(Error(O(422)))), Os(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Oo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Cn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && ur(t, e.child, null, i),
        (t.child.memoizedState = ti(i)),
        (t.memoizedState = ei),
        l);
  if (!(t.mode & 1)) return Os(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(O(419))), (r = ml(l, r, void 0)), Os(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), et || a)) {
    if (((r = Le), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Vt(e, o), Tt(r, e, o, -1));
    }
    return ra(), (r = ml(Error(O(421)))), Os(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Om.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ct = ln(o.nextSibling)),
      (ht = t),
      (we = !0),
      (Ct = null),
      e !== null &&
        ((xt[yt++] = Ft),
        (xt[yt++] = Bt),
        (xt[yt++] = In),
        (Ft = e.id),
        (Bt = e.overflow),
        (In = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ql(e.return, t, n);
}
function pl(e, t, n, r, o) {
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
function Td(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ke(e, t, r.children, n), (r = be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, n, t);
        else if (e.tag === 19) xc(e, n, t);
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
  if ((pe(be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && go(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && go(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pl(t, !0, n, null, l);
        break;
      case "together":
        pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jm(e, t, n) {
  switch (t.tag) {
    case 3:
      Ed(t), cr();
      break;
    case 5:
      nd(t);
      break;
    case 1:
      nt(t.type) && co(t);
      break;
    case 4:
      Hi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      pe(ho, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(be, be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dd(e, t, n)
          : (pe(be, be.current & 1),
            (e = Qt(e, t, n)),
            e !== null ? e.sibling : null);
      pe(be, be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Td(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(be, be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kd(e, t, n);
  }
  return Qt(e, t, n);
}
var Id, ni, Rd, Pd;
Id = function (e, t) {
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
ni = function () {};
Rd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jn(Lt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = jl(e, o)), (r = jl(e, r)), (l = []);
        break;
      case "select":
        (o = je({}, o, { value: void 0 })),
          (r = je({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Cl(e, o)), (r = Cl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    Dl(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                a[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (l = l || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (qr.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && ye("scroll", e),
                  l || a === c || (l = []))
                : (l = l || []).push(u, c));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Pd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rr(e, t) {
  if (!we)
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
function Ge(e) {
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
function Sm(e, t, n) {
  var r = t.pendingProps;
  switch ((Oi(t), t.tag)) {
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
      return Ge(t), null;
    case 1:
      return nt(t.type) && ao(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        ve(tt),
        ve(Qe),
        Wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (ui(Ct), (Ct = null)))),
        ni(e, t),
        Ge(t),
        null
      );
    case 5:
      Gi(t);
      var o = jn(ls.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Rd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ge(t), null;
        }
        if (((e = jn(Lt.current)), Ms(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[At] = t), (r[ss] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Lr.length; o++) ye(Lr[o], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              ka(r, l), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              Ea(r, l), ye("invalid", r);
          }
          Dl(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ps(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : qr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ye("scroll", r);
            }
          switch (n) {
            case "input":
              Ss(r), Ca(r, l, !0);
              break;
            case "textarea":
              Ss(r), Da(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = io);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = iu(n)),
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
            (e[At] = t),
            (e[ss] = r),
            Id(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Tl(n, r)), n)) {
              case "dialog":
                ye("cancel", e), ye("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Lr.length; o++) ye(Lr[o], e);
                o = r;
                break;
              case "source":
                ye("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", e), ye("load", e), (o = r);
                break;
              case "details":
                ye("toggle", e), (o = r);
                break;
              case "input":
                ka(e, r), (o = jl(e, r)), ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = je({}, r, { value: void 0 })),
                  ye("invalid", e);
                break;
              case "textarea":
                Ea(e, r), (o = Cl(e, r)), ye("invalid", e);
                break;
              default:
                o = r;
            }
            Dl(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var c = a[l];
                l === "style"
                  ? uu(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && au(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Kr(e, c)
                    : typeof c == "number" && Kr(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (qr.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && ye("scroll", e)
                      : c != null && bi(e, l, c, i));
              }
            switch (n) {
              case "input":
                Ss(e), Ca(e, r, !1);
                break;
              case "textarea":
                Ss(e), Da(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? tr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = io);
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
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) Pd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = jn(ls.current)), jn(Lt.current), Ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[At] = t),
            (l = r.nodeValue !== n) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (ve(be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && ct !== null && t.mode & 1 && !(t.flags & 128))
          Xu(), cr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(O(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(O(317));
            l[At] = t;
          } else
            cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (l = !1);
        } else Ct !== null && (ui(Ct), (Ct = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || be.current & 1 ? Ae === 0 && (Ae = 3) : ra())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        dr(), ni(e, t), e === null && ns(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return zi(t.type._context), Ge(t), null;
    case 17:
      return nt(t.type) && ao(), Ge(t), null;
    case 19:
      if ((ve(be), (l = t.memoizedState), l === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Rr(l, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = go(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Rr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(be, (be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ee() > hr &&
            ((t.flags |= 128), (r = !0), Rr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = go(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !we)
            )
              return Ge(t), null;
          } else
            2 * Ee() - l.renderingStartTime > hr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = be.current),
          pe(be, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? it & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function km(e, t) {
  switch ((Oi(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && ao(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        ve(tt),
        ve(Qe),
        Wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gi(t), null;
    case 13:
      if (
        (ve(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(be), null;
    case 4:
      return dr(), null;
    case 10:
      return zi(t.type._context), null;
    case 22:
    case 23:
      return na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ls = !1,
  We = !1,
  Cm = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function ri(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var yc = !1;
function Em(e, t) {
  if (((zl = so), (e = $u()), Mi(e))) {
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
          var i = 0,
            a = -1,
            c = -1,
            u = 0,
            h = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (a = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (c = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (g = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === o && (a = i),
                g === l && ++h === r && (c = i),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = y;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fl = { focusedElem: e, selectionRange: n }, so = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var S = b.memoizedProps,
                    C = b.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : St(t.type, S),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(O(163));
            }
        } catch (v) {
          Se(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (b = yc), (yc = !1), b;
}
function Gr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ri(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Mo(e, t) {
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
function si(e) {
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
function Md(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Md(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[At], delete t[ss], delete t[Gl], delete t[um], delete t[dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ad(e.return)) return null;
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
function oi(e, t, n) {
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
    for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), (e = e.sibling);
}
function li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), (e = e.sibling);
}
var Ue = null,
  kt = !1;
function Yt(e, t, n) {
  for (n = n.child; n !== null; ) Od(e, t, n), (n = n.sibling);
}
function Od(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function")
    try {
      Ot.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      We || Zn(n, t);
    case 6:
      var r = Ue,
        o = kt;
      (Ue = null),
        Yt(e, t, n),
        (Ue = r),
        (kt = o),
        Ue !== null &&
          (kt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (kt
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? al(e.parentNode, n)
              : e.nodeType === 1 && al(e, n),
            Zr(e))
          : al(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (o = kt),
        (Ue = n.stateNode.containerInfo),
        (kt = !0),
        Yt(e, t, n),
        (Ue = r),
        (kt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && ri(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Yt(e, t, n);
      break;
    case 1:
      if (
        !We &&
        (Zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      Yt(e, t, n);
      break;
    case 21:
      Yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((We = (r = We) || n.memoizedState !== null), Yt(e, t, n), (We = r))
        : Yt(e, t, n);
      break;
    default:
      Yt(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cm()),
      t.forEach(function (r) {
        var o = Lm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function jt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ue = a.stateNode), (kt = !1);
              break e;
            case 3:
              (Ue = a.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              (Ue = a.stateNode.containerInfo), (kt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ue === null) throw Error(O(160));
        Od(l, i, o), (Ue = null), (kt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        Se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ld(t, e), (t = t.sibling);
}
function Ld(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((jt(t, e), Pt(e), r & 4)) {
        try {
          Gr(3, e, e.return), Mo(3, e);
        } catch (S) {
          Se(e, e.return, S);
        }
        try {
          Gr(5, e, e.return);
        } catch (S) {
          Se(e, e.return, S);
        }
      }
      break;
    case 1:
      jt(t, e), Pt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (
        (jt(t, e),
        Pt(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Kr(o, "");
        } catch (S) {
          Se(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && ou(o, l),
              Tl(a, i);
            var u = Tl(a, l);
            for (i = 0; i < c.length; i += 2) {
              var h = c[i],
                p = c[i + 1];
              h === "style"
                ? uu(o, p)
                : h === "dangerouslySetInnerHTML"
                ? au(o, p)
                : h === "children"
                ? Kr(o, p)
                : bi(o, h, p, u);
            }
            switch (a) {
              case "input":
                Sl(o, l);
                break;
              case "textarea":
                lu(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? tr(o, !!l.multiple, y, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? tr(o, !!l.multiple, l.defaultValue, !0)
                      : tr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ss] = l;
          } catch (S) {
            Se(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((jt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (S) {
          Se(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (jt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zr(t.containerInfo);
        } catch (S) {
          Se(e, e.return, S);
        }
      break;
    case 4:
      jt(t, e), Pt(e);
      break;
    case 13:
      jt(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ea = Ee())),
        r & 4 && wc(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (u = We) || h), jt(t, e), (We = u)) : jt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (W = e, h = e.child; h !== null; ) {
            for (p = W = h; W !== null; ) {
              switch (((g = W), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, g, g.return);
                  break;
                case 1:
                  Zn(g, g.return);
                  var b = g.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (S) {
                      Se(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Zn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Nc(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), (W = y)) : Nc(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = p.stateNode),
                      (c = p.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = cu("display", i)));
              } catch (S) {
                Se(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (S) {
                Se(e, e.return, S);
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
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      jt(t, e), Pt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      jt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ad(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Kr(o, ""), (r.flags &= -33));
          var l = vc(e);
          li(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = vc(e);
          oi(e, a, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (c) {
      Se(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dm(e, t, n) {
  (W = e), $d(e);
}
function $d(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var o = W,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ls;
      if (!i) {
        var a = o.alternate,
          c = (a !== null && a.memoizedState !== null) || We;
        a = Ls;
        var u = We;
        if (((Ls = i), (We = c) && !u))
          for (W = o; W !== null; )
            (i = W),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _c(o)
                : c !== null
                ? ((c.return = i), (W = c))
                : _c(o);
        for (; l !== null; ) (W = l), $d(l), (l = l.sibling);
        (W = o), (Ls = a), (We = u);
      }
      bc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (W = l)) : bc(e);
  }
}
function bc(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !We)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : St(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && oc(t, l, r);
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
                oc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Zr(p);
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
              throw Error(O(163));
          }
        We || (t.flags & 512 && si(t));
      } catch (g) {
        Se(t, t.return, g);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Nc(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function _c(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mo(4, t);
          } catch (c) {
            Se(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Se(t, o, c);
            }
          }
          var l = t.return;
          try {
            si(t);
          } catch (c) {
            Se(t, l, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            si(t);
          } catch (c) {
            Se(t, i, c);
          }
      }
    } catch (c) {
      Se(t, t.return, c);
    }
    if (t === e) {
      W = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (W = a);
      break;
    }
    W = t.return;
  }
}
var Tm = Math.ceil,
  vo = qt.ReactCurrentDispatcher,
  Ji = qt.ReactCurrentOwner,
  wt = qt.ReactCurrentBatchConfig,
  ue = 0,
  Le = null,
  Te = null,
  ze = 0,
  it = 0,
  er = pn(0),
  Ae = 0,
  us = null,
  Pn = 0,
  Ao = 0,
  Zi = 0,
  Wr = null,
  Ze = null,
  ea = 0,
  hr = 1 / 0,
  Ut = null,
  wo = !1,
  ii = null,
  cn = null,
  $s = !1,
  nn = null,
  bo = 0,
  Vr = 0,
  ai = null,
  Ys = -1,
  Xs = 0;
function Ye() {
  return ue & 6 ? Ee() : Ys !== -1 ? Ys : (Ys = Ee());
}
function un(e) {
  return e.mode & 1
    ? ue & 2 && ze !== 0
      ? ze & -ze
      : hm.transition !== null
      ? (Xs === 0 && (Xs = Nu()), Xs)
      : ((e = fe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Du(e.type))),
        e)
    : 1;
}
function Tt(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (ai = null), Error(O(185)));
  gs(e, n, r),
    (!(ue & 2) || e !== Le) &&
      (e === Le && (!(ue & 2) && (Ao |= n), Ae === 4 && en(e, ze)),
      rt(e, r),
      n === 1 && ue === 0 && !(t.mode & 1) && ((hr = Ee() + 500), Io && gn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  hh(e, t);
  var r = ro(e, e === Le ? ze : 0);
  if (r === 0)
    n !== null && Ra(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ra(n), t === 1))
      e.tag === 0 ? fm(jc.bind(null, e)) : qu(jc.bind(null, e)),
        am(function () {
          !(ue & 6) && gn();
        }),
        (n = null);
    else {
      switch (_u(r)) {
        case 1:
          n = ki;
          break;
        case 4:
          n = wu;
          break;
        case 16:
          n = no;
          break;
        case 536870912:
          n = bu;
          break;
        default:
          n = no;
      }
      n = Vd(n, Ud.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ud(e, t) {
  if (((Ys = -1), (Xs = 0), ue & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = ro(e, e === Le ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = No(e, r);
  else {
    t = r;
    var o = ue;
    ue |= 2;
    var l = Fd();
    (Le !== e || ze !== t) && ((Ut = null), (hr = Ee() + 500), kn(e, t));
    do
      try {
        Pm();
        break;
      } catch (a) {
        zd(e, a);
      }
    while (!0);
    Ui(),
      (vo.current = l),
      (ue = o),
      Te !== null ? (t = 0) : ((Le = null), (ze = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Al(e)), o !== 0 && ((r = o), (t = ci(e, o)))), t === 1)
    )
      throw ((n = us), kn(e, 0), en(e, r), rt(e, Ee()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Im(o) &&
          ((t = No(e, r)),
          t === 2 && ((l = Al(e)), l !== 0 && ((r = l), (t = ci(e, l)))),
          t === 1))
      )
        throw ((n = us), kn(e, 0), en(e, r), rt(e, Ee()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          wn(e, Ze, Ut);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = ea + 500 - Ee()), 10 < t))
          ) {
            if (ro(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hl(wn.bind(null, e, Ze, Ut), t);
            break;
          }
          wn(e, Ze, Ut);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Dt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Ee() - r),
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
                : 1960 * Tm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hl(wn.bind(null, e, Ze, Ut), r);
            break;
          }
          wn(e, Ze, Ut);
          break;
        case 5:
          wn(e, Ze, Ut);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return rt(e, Ee()), e.callbackNode === n ? Ud.bind(null, e) : null;
}
function ci(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = No(e, t)),
    e !== 2 && ((t = Ze), (Ze = n), t !== null && ui(t)),
    e
  );
}
function ui(e) {
  Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
}
function Im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Rt(l(), o)) return !1;
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
function en(e, t) {
  for (
    t &= ~Zi,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function jc(e) {
  if (ue & 6) throw Error(O(327));
  lr();
  var t = ro(e, 0);
  if (!(t & 1)) return rt(e, Ee()), null;
  var n = No(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && ((t = r), (n = ci(e, r)));
  }
  if (n === 1) throw ((n = us), kn(e, 0), en(e, t), rt(e, Ee()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, Ze, Ut),
    rt(e, Ee()),
    null
  );
}
function ta(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    (ue = n), ue === 0 && ((hr = Ee() + 500), Io && gn());
  }
}
function Mn(e) {
  nn !== null && nn.tag === 0 && !(ue & 6) && lr();
  var t = ue;
  ue |= 1;
  var n = wt.transition,
    r = fe;
  try {
    if (((wt.transition = null), (fe = 1), e)) return e();
  } finally {
    (fe = r), (wt.transition = n), (ue = t), !(ue & 6) && gn();
  }
}
function na() {
  (it = er.current), ve(er);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), im(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Oi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ao();
          break;
        case 3:
          dr(), ve(tt), ve(Qe), Wi();
          break;
        case 5:
          Gi(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          ve(be);
          break;
        case 19:
          ve(be);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          na();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Te = e = dn(e.current, null)),
    (ze = it = t),
    (Ae = 0),
    (us = null),
    (Zi = Ao = Pn = 0),
    (Ze = Wr = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function zd(e, t) {
  do {
    var n = Te;
    try {
      if ((Ui(), (Qs.current = yo), xo)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        xo = !1;
      }
      if (
        ((Rn = 0),
        (Oe = Me = _e = null),
        (Hr = !1),
        (is = 0),
        (Ji.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (us = t), (Te = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          c = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            h = a,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = dc(i);
          if (y !== null) {
            (y.flags &= -257),
              fc(y, i, a, l, t),
              y.mode & 1 && uc(l, u, t),
              (t = y),
              (c = u);
            var b = t.updateQueue;
            if (b === null) {
              var S = new Set();
              S.add(c), (t.updateQueue = S);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              uc(l, u, t), ra();
              break e;
            }
            c = Error(O(426));
          }
        } else if (we && a.mode & 1) {
          var C = dc(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              fc(C, i, a, l, t),
              Li(fr(c, a));
            break e;
          }
        }
        (l = c = fr(c, a)),
          Ae !== 4 && (Ae = 2),
          Wr === null ? (Wr = [l]) : Wr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = _d(l, c, t);
              sc(l, f);
              break e;
            case 1:
              a = c;
              var d = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (cn === null || !cn.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var v = jd(l, a, t);
                sc(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Hd(n);
    } catch (_) {
      (t = _), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fd() {
  var e = vo.current;
  return (vo.current = yo), e === null ? yo : e;
}
function ra() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Le === null || (!(Pn & 268435455) && !(Ao & 268435455)) || en(Le, ze);
}
function No(e, t) {
  var n = ue;
  ue |= 2;
  var r = Fd();
  (Le !== e || ze !== t) && ((Ut = null), kn(e, t));
  do
    try {
      Rm();
      break;
    } catch (o) {
      zd(e, o);
    }
  while (!0);
  if ((Ui(), (ue = n), (vo.current = r), Te !== null)) throw Error(O(261));
  return (Le = null), (ze = 0), Ae;
}
function Rm() {
  for (; Te !== null; ) Bd(Te);
}
function Pm() {
  for (; Te !== null && !sh(); ) Bd(Te);
}
function Bd(e) {
  var t = Wd(e.alternate, e, it);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hd(e) : (Te = t),
    (Ji.current = null);
}
function Hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = km(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Te = null);
        return;
      }
    } else if (((n = Sm(n, t, it)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function wn(e, t, n) {
  var r = fe,
    o = wt.transition;
  try {
    (wt.transition = null), (fe = 1), Mm(e, t, n, r);
  } finally {
    (wt.transition = o), (fe = r);
  }
  return null;
}
function Mm(e, t, n, r) {
  do lr();
  while (nn !== null);
  if (ue & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (mh(e, l),
    e === Le && ((Te = Le = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $s ||
      (($s = !0),
      Vd(no, function () {
        return lr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = wt.transition), (wt.transition = null);
    var i = fe;
    fe = 1;
    var a = ue;
    (ue |= 4),
      (Ji.current = null),
      Em(e, n),
      Ld(n, e),
      em(Fl),
      (so = !!zl),
      (Fl = zl = null),
      (e.current = n),
      Dm(n),
      oh(),
      (ue = a),
      (fe = i),
      (wt.transition = l);
  } else e.current = n;
  if (
    ($s && (($s = !1), (nn = e), (bo = o)),
    (l = e.pendingLanes),
    l === 0 && (cn = null),
    ah(n.stateNode),
    rt(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wo) throw ((wo = !1), (e = ii), (ii = null), e);
  return (
    bo & 1 && e.tag !== 0 && lr(),
    (l = e.pendingLanes),
    l & 1 ? (e === ai ? Vr++ : ((Vr = 0), (ai = e))) : (Vr = 0),
    gn(),
    null
  );
}
function lr() {
  if (nn !== null) {
    var e = _u(bo),
      t = wt.transition,
      n = fe;
    try {
      if (((wt.transition = null), (fe = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (bo = 0), ue & 6)) throw Error(O(331));
        var o = ue;
        for (ue |= 4, W = e.current; W !== null; ) {
          var l = W,
            i = l.child;
          if (W.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (W = u; W !== null; ) {
                  var h = W;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(8, h, l);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (W = p);
                  else
                    for (; W !== null; ) {
                      h = W;
                      var g = h.sibling,
                        y = h.return;
                      if ((Md(h), h === u)) {
                        W = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), (W = g);
                        break;
                      }
                      W = y;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var S = b.child;
                if (S !== null) {
                  b.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              W = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (W = i);
          else
            e: for (; W !== null; ) {
              if (((l = W), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (W = f);
                break e;
              }
              W = l.return;
            }
        }
        var d = e.current;
        for (W = d; W !== null; ) {
          i = W;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (W = m);
          else
            e: for (i = d; W !== null; ) {
              if (((a = W), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, a);
                  }
                } catch (_) {
                  Se(a, a.return, _);
                }
              if (a === i) {
                W = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (W = v);
                break e;
              }
              W = a.return;
            }
        }
        if (
          ((ue = o), gn(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
        )
          try {
            Ot.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (fe = n), (wt.transition = t);
    }
  }
  return !1;
}
function Sc(e, t, n) {
  (t = fr(n, t)),
    (t = _d(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ye()),
    e !== null && (gs(e, 1, t), rt(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = fr(n, e)),
            (e = jd(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ye()),
            t !== null && (gs(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Am(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (ze & n) === n &&
      (Ae === 4 || (Ae === 3 && (ze & 130023424) === ze && 500 > Ee() - ea)
        ? kn(e, 0)
        : (Zi |= n)),
    rt(e, t);
}
function Gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = Ye();
  (e = Vt(e, t)), e !== null && (gs(e, t, n), rt(e, n));
}
function Om(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Gd(e, n);
}
function Lm(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), Gd(e, n);
}
var Wd;
Wd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), jm(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), we && t.flags & 1048576 && Ku(t, fo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ks(e, t), (e = t.pendingProps);
      var o = ar(t, Qe.current);
      or(t, n), (o = Qi(null, t, r, e, o, n));
      var l = qi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((l = !0), co(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Bi(t),
            (o.updater = Po),
            (t.stateNode = o),
            (o._reactInternals = t),
            Yl(t, r, e, n),
            (t = Zl(null, t, r, !0, l, n)))
          : ((t.tag = 0), we && l && Ai(t), Ke(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ks(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Um(r)),
          (e = St(r, e)),
          o)
        ) {
          case 0:
            t = Jl(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = hc(null, t, r, e, n);
            break e;
          case 14:
            t = mc(null, t, r, St(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Jl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        pc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ed(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          td(e, t),
          po(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = fr(Error(O(423)), t)), (t = gc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fr(Error(O(424)), t)), (t = gc(e, t, r, n, o));
            break e;
          } else
            for (
              ct = ln(t.stateNode.containerInfo.firstChild),
                ht = t,
                we = !0,
                Ct = null,
                n = Zu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cr(), r === o)) {
            t = Qt(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nd(t),
        e === null && Ql(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Bl(r, o) ? (i = null) : l !== null && Bl(r, l) && (t.flags |= 32),
        Cd(e, t),
        Ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ql(t), null;
    case 13:
      return Dd(e, t, n);
    case 4:
      return (
        Hi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ur(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        hc(e, t, r, o, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          pe(ho, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Rt(l.value, i)) {
            if (l.children === o.children && !tt.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (l.tag === 1) {
                      (c = Ht(-1, n & -n)), (c.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (u.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      ql(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(O(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  ql(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ke(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (o = bt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = St(r, t.pendingProps)),
        (o = St(r.type, o)),
        mc(e, t, r, o, n)
      );
    case 15:
      return Sd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : St(r, o)),
        Ks(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), co(t)) : (e = !1),
        or(t, n),
        Nd(t, r, o),
        Yl(t, r, o, n),
        Zl(null, t, r, !0, e, n)
      );
    case 19:
      return Td(e, t, n);
    case 22:
      return kd(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Vd(e, t) {
  return vu(e, t);
}
function $m(e, t, n, r) {
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
function vt(e, t, n, r) {
  return new $m(e, t, n, r);
}
function sa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Um(e) {
  if (typeof e == "function") return sa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _i)) return 11;
    if (e === ji) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vt(e.tag, t, e.key, e.mode)),
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
function Js(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) sa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Gn:
        return Cn(n.children, o, l, t);
      case Ni:
        (i = 8), (o |= 8);
        break;
      case wl:
        return (
          (e = vt(12, n, t, o | 2)), (e.elementType = wl), (e.lanes = l), e
        );
      case bl:
        return (e = vt(13, n, t, o)), (e.elementType = bl), (e.lanes = l), e;
      case Nl:
        return (e = vt(19, n, t, o)), (e.elementType = Nl), (e.lanes = l), e;
      case nu:
        return Oo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case eu:
              i = 10;
              break e;
            case tu:
              i = 9;
              break e;
            case _i:
              i = 11;
              break e;
            case ji:
              i = 14;
              break e;
            case Xt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Cn(e, t, n, r) {
  return (e = vt(7, e, r, t)), (e.lanes = n), e;
}
function Oo(e, t, n, r) {
  return (
    (e = vt(22, e, r, t)),
    (e.elementType = nu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gl(e, t, n) {
  return (e = vt(6, e, null, t)), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zm(e, t, n, r, o) {
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
    (this.eventTimes = Xo(0)),
    (this.expirationTimes = Xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function oa(e, t, n, r, o, l, i, a, c) {
  return (
    (e = new zm(e, t, n, a, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = vt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bi(l),
    e
  );
}
function Fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qd(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return Qu(e, n, t);
  }
  return t;
}
function qd(e, t, n, r, o, l, i, a, c) {
  return (
    (e = oa(n, r, !0, e, o, l, i, a, c)),
    (e.context = Qd(null)),
    (n = e.current),
    (r = Ye()),
    (o = un(n)),
    (l = Ht(r, o)),
    (l.callback = t ?? null),
    an(n, l, o),
    (e.current.lanes = o),
    gs(e, o, r),
    rt(e, r),
    e
  );
}
function Lo(e, t, n, r) {
  var o = t.current,
    l = Ye(),
    i = un(o);
  return (
    (n = Qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(o, t, i)),
    e !== null && (Tt(e, o, i, l), Vs(e, o, i)),
    i
  );
}
function _o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function la(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function Bm() {
  return null;
}
var Kd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ia(e) {
  this._internalRoot = e;
}
$o.prototype.render = ia.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Lo(e, t, null, null);
};
$o.prototype.unmount = ia.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      Lo(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function $o(e) {
  this._internalRoot = e;
}
$o.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ku();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && Eu(e);
  }
};
function aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cc() {}
function Hm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = _o(i);
        l.call(u);
      };
    }
    var i = qd(t, r, e, 0, null, !1, !1, "", Cc);
    return (
      (e._reactRootContainer = i),
      (e[Wt] = i.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = _o(c);
      a.call(u);
    };
  }
  var c = oa(e, 0, !1, null, null, !1, !1, "", Cc);
  return (
    (e._reactRootContainer = c),
    (e[Wt] = c.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      Lo(t, c, n, r);
    }),
    c
  );
}
function zo(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var c = _o(i);
        a.call(c);
      };
    }
    Lo(t, i, e, o);
  } else i = Hm(n, t, e, o, r);
  return _o(i);
}
ju = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Or(t.pendingLanes);
        n !== 0 &&
          (Ci(t, n | 1), rt(t, Ee()), !(ue & 6) && ((hr = Ee() + 500), gn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Vt(e, 1);
        if (r !== null) {
          var o = Ye();
          Tt(r, e, 1, o);
        }
      }),
        la(e, 1);
  }
};
Ei = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = Ye();
      Tt(t, e, 134217728, n);
    }
    la(e, 134217728);
  }
};
Su = function (e) {
  if (e.tag === 13) {
    var t = un(e),
      n = Vt(e, t);
    if (n !== null) {
      var r = Ye();
      Tt(n, e, t, r);
    }
    la(e, t);
  }
};
ku = function () {
  return fe;
};
Cu = function (e, t) {
  var n = fe;
  try {
    return (fe = e), t();
  } finally {
    fe = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = To(r);
            if (!o) throw Error(O(90));
            su(r), Sl(r, o);
          }
        }
      }
      break;
    case "textarea":
      lu(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
hu = ta;
mu = Mn;
var Gm = { usingClientEntryPoint: !1, Events: [ys, qn, To, du, fu, ta] },
  Pr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wm = {
    bundleType: Pr.bundleType,
    version: Pr.version,
    rendererPackageName: Pr.rendererPackageName,
    rendererConfig: Pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pr.findFiberByHostInstance || Bm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Us.isDisabled && Us.supportsFiber)
    try {
      (ko = Us.inject(Wm)), (Ot = Us);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(O(200));
  return Fm(e, t, null, n);
};
pt.createRoot = function (e, t) {
  if (!aa(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Kd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = oa(e, 1, !1, null, null, n, !1, r, o)),
    (e[Wt] = t.current),
    ns(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = xu(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return Mn(e);
};
pt.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(O(200));
  return zo(null, e, t, !0, n);
};
pt.hydrateRoot = function (e, t, n) {
  if (!aa(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Kd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = qd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Wt] = t.current),
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
  return new $o(t);
};
pt.render = function (e, t, n) {
  if (!Uo(t)) throw Error(O(200));
  return zo(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Mn(function () {
        zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = ta;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return zo(e, t, n, !1, r);
};
pt.version = "18.3.1-next-f1338f8080-20240426";
function Yd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd);
    } catch (e) {
      console.error(e);
    }
}
Yd(), (Yc.exports = pt);
var Vm = Yc.exports,
  Xd,
  Ec = Vm;
(Xd = Ec.createRoot), Ec.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Qm = {
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
 */ const qm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ce = (e, t) => {
    const n = x.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: c,
          ...u
        },
        h
      ) =>
        x.createElement(
          "svg",
          {
            ref: h,
            ...Qm,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${qm(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([p, g]) => x.createElement(p, g)),
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
 */ const ut = ce("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = ce("AlertTriangle", [
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
 */ const ds = ce("Calendar", [
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
 */ const di = ce("Camera", [
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
 */ const It = ce("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = ce("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = ce("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = ce("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ca = ce("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = ce("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ef = ce("Eye", [
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
 */ const fi = ce("FileSpreadsheet", [
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
 */ const Fo = ce("FileText", [
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
 */ const Xm = ce("Globe", [
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
 */ const tf = ce("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = ce("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = ce("Layers", [
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
 */ const hi = ce("Link", [
  [
    "path",
    {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      key: "1cjeqo",
    },
  ],
  [
    "path",
    {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      key: "19qd67",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dc = ce("Lock", [
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
 */ const ep = ce("Package2", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  [
    "path",
    {
      d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",
      key: "19h2x1",
    },
  ],
  ["path", { d: "M12 3v6", key: "1holv5" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const An = ce("Package", [
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
 */ const mr = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = ce("Save", [
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
 */ const fs = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nf = ce("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = ce("Settings", [
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
 */ const On = ce("Trash2", [
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
 */ const rp = ce("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = ce("Unlock", [
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
 */ const pr = ce("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rf = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sf = ce("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = ce("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
]);
let dt = null;
const ws = async () => {
    if (dt) return dt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (dt = await e.json()), dt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  ua = (e) => {
    if (!dt)
      throw new Error("Configuration not loaded. Call loadConfig() first.");
    const t = e.startsWith("/") ? e.slice(1) : e;
    return `${
      dt.domain.endsWith("/") ? dt.domain.slice(0, -1) : dt.domain
    }/${t}`;
  },
  lp = (e) => {
    if (!dt)
      throw new Error("Configuration not loaded. Call loadConfig() first.");
    const t = e.startsWith("/") ? e.slice(1) : e;
    return `${dt.ai.endsWith("/") ? dt.ai.slice(0, -1) : dt.ai}/${t}`;
  },
  mi = () => dt,
  ke = async (e, t = {}) => {
    await ws();
    const n = ua(e),
      { method: r = "GET", headers: o = {}, body: l } = t,
      i = { method: r, headers: { "Content-Type": "application/json", ...o } };
    l && r !== "GET" && (i.body = JSON.stringify(l));
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch (a) {
      throw (console.error("API call failed:", a), a);
    }
  },
  of = async (e, t) => {
    await ws();
    const n = ua(e),
      { method: r = "POST", headers: o = {}, body: l } = t,
      i = { method: r, headers: o, body: l };
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch (a) {
      throw (console.error("API multipart call failed:", a), a);
    }
  },
  ip = async (e, t) => {
    var a;
    await ws();
    const n = lp(e);
    console.log("URL:", n);
    const { method: r = "POST", headers: o = {}, body: l } = t,
      i = { method: r, headers: o, body: l };
    try {
      console.log("發送請求到:", n),
        console.log("Request options:", {
          method: r,
          hasBody: !!l,
          bodyType:
            (a = l == null ? void 0 : l.constructor) == null ? void 0 : a.name,
        });
      const c = await fetch(n, i);
      if (
        (console.log("收到回應:", {
          status: c.status,
          statusText: c.statusText,
          ok: c.ok,
          headers: Object.fromEntries(c.headers.entries()),
        }),
        !c.ok)
      ) {
        const h = await c.text();
        throw (
          (console.error("API 錯誤回應:", h),
          new Error(`HTTP error! status: ${c.status}, body: ${h}`))
        );
      }
      const u = await c.json();
      return console.log("API 成功回應:", u), u;
    } catch (c) {
      throw (
        (console.error("API multipart call failed:", c),
        c instanceof TypeError &&
          c.message === "Failed to fetch" &&
          (console.error("❌ 可能是 CORS 問題或網路連線失敗"),
          console.error("請檢查："),
          console.error("1. 後端是否正確設定 CORS headers"),
          console.error("2. URL 是否正確:", n),
          console.error("3. 網路連線是否正常")),
        c)
      );
    }
  },
  ap = async (e, t = {}) => {
    await ws();
    const n = ua(e),
      { method: r = "GET", headers: o = {}, body: l } = t,
      i = { method: r, headers: { "Content-Type": "application/json", ...o } };
    l && r !== "GET" && (i.body = JSON.stringify(l));
    try {
      const a = await fetch(n, i);
      if (!a.ok) throw new Error(`HTTP error! status: ${a.status}`);
      return await a.blob();
    } catch (a) {
      throw (console.error("API blob call failed:", a), a);
    }
  },
  cp = async (e) =>
    await ke("/api/session/login", { method: "POST", body: { Data: e } }),
  up = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  bs = () => {
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
  dp = () => !!bs(),
  fp = () => {
    const e = bs();
    return (
      (e == null ? void 0 : e.Employer) ||
      sessionStorage.getItem("loggedEmployer")
    );
  },
  da = () => {
    const e = bs();
    return (e == null ? void 0 : e.ID) || sessionStorage.getItem("loggedID");
  },
  at = () => {
    const e = bs();
    return (
      (e == null ? void 0 : e.Name) || sessionStorage.getItem("loggedName")
    );
  },
  lf = () => {
    const e = bs();
    if (!e || !e.Permissions) return !1;
    const t = e.Permissions.find((n) => n.name === "驗收管理鎖定權限");
    return (t == null ? void 0 : t.state) === !0;
  },
  de = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return s.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: s.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  hp = {
    zh: {
      "app.title": "系統登入",
      "app.inspection": "驗收管理",
      "app.inspection.drugs": "需驗收藥品種類",
      "app.inspection.total": "總驗收單數",
      "app.inspection.today": "今日驗收筆數",
      "app.inspection.batch_upload": "批次上傳出貨單",
      "app.inspection.excel_upload": "建單上傳",
      "app.inspection.manual_create": "手動建單",
      "app.inspection.barcode_search": "條碼搜尋",
      "app.inspection.number_search": "單號搜尋",
      "app.inspection.search_barcode_placeholder": "搜尋條碼...",
      "app.inspection.search_number_placeholder": "搜尋驗收單號/請購單號...",
      "app.inspection.time_range": "時間區間",
      "app.inspection.time_type": "時間類型",
      "app.inspection.start_datetime": "開始日期時間",
      "app.inspection.end_datetime": "結束日期時間",
      "app.inspection.search": "查詢",
      "app.inspection.searching": "查詢中",
      "app.inspection.operation_time": "操作時間",
      "app.inspection.add_time": "新增時間",
      "app.inspection.update_time": "更新時間",
      "language.zh": "繁體中文",
      "language.en": "English",
      "error.api": "系統錯誤，請稍後再試",
      logout: "登出",
      copyright: "Copyright ©2025 鴻森智能科技",
      "table.drug_code": "藥品碼",
      "table.item_number": "料號",
      "table.drug_name": "藥品名稱",
      "table.manufacturer": "廠商名稱",
      "table.received_expected_qty": "實收/應收數量",
      "table.detail_count": "明細筆數",
      "table.inspection_number": "驗收單號",
      "table.purchase_number": "請購單號",
      "table.delivery_time": "交貨時間",
      "table.arrival_time": "到貨時間",
      "delivery.overdue": "逾期",
      "delivery.remaining": "剩餘",
      "delivery.today": "今日",
      "delivery.days": "天",
    },
    en: {
      "app.title": "System Login",
      "app.inspection": "Inspection Management",
      "app.inspection.drugs": "Drug Types to Inspect",
      "app.inspection.total": "Total Inspection Orders",
      "app.inspection.today": "Today's Inspections",
      "app.inspection.batch_upload": "Batch Upload Shipping Documents",
      "app.inspection.excel_upload": "Excel Upload",
      "app.inspection.manual_create": "Manual Create",
      "app.inspection.barcode_search": "Barcode Search",
      "app.inspection.number_search": "Number Search",
      "app.inspection.search_barcode_placeholder": "Search barcode...",
      "app.inspection.search_number_placeholder":
        "Search inspection/purchase order number...",
      "app.inspection.time_range": "Time Range",
      "app.inspection.time_type": "Time Type",
      "app.inspection.start_datetime": "Start Date Time",
      "app.inspection.end_datetime": "End Date Time",
      "app.inspection.search": "Search",
      "app.inspection.searching": "Searching",
      "app.inspection.operation_time": "Operation Time",
      "app.inspection.add_time": "Add Time",
      "app.inspection.update_time": "Update Time",
      "language.zh": "繁體中文",
      "language.en": "English",
      "error.api": "System error, please try again later",
      logout: "Logout",
      copyright: "Copyright ©2025 Hongsen Technology",
      "table.drug_code": "Drug Code",
      "table.item_number": "Item Number",
      "table.drug_name": "Drug Name",
      "table.manufacturer": "Manufacturer",
      "table.received_expected_qty": "Received/Expected Qty",
      "table.detail_count": "Detail Count",
      "table.inspection_number": "Inspection No.",
      "table.purchase_number": "Purchase No.",
      "table.delivery_time": "Delivery Time",
      "table.arrival_time": "Arrival Time",
      "delivery.overdue": "Overdue",
      "delivery.remaining": "Remaining",
      "delivery.today": "Today",
      "delivery.days": "days",
    },
  },
  af = x.createContext(void 0),
  mp = ({ children: e }) => {
    const [t, n] = x.useState("zh"),
      r = () => {
        n((l) => (l === "zh" ? "en" : "zh"));
      },
      o = (l, i) => {
        let a = hp[t][l] || l;
        return (
          i &&
            Object.entries(i).forEach(([c, u]) => {
              a = a.replace(`{${c}}`, u.toString());
            }),
          a
        );
      };
    return s.jsx(af.Provider, {
      value: { language: t, toggleLanguage: r, t: o },
      children: e,
    });
  },
  Ns = () => {
    const e = x.useContext(af);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  pp = ({ onLogin: e }) => {
    const { t } = Ns(),
      [n, r] = x.useState(""),
      [o, l] = x.useState(""),
      [i, a] = x.useState(null),
      [c, u] = x.useState(!1),
      h = async (p) => {
        p.preventDefault(), a(null), u(!0);
        try {
          const g = await cp({ ID: n, Password: o });
          g.Code === 200
            ? (up(g.Data), e())
            : g.Code === -1 || g.Code === -2
            ? a(g.Result)
            : a(t("error.api"));
        } catch (g) {
          console.error("Login error:", g),
            a(g instanceof Error ? g.message : t("error.api"));
        } finally {
          u(!1);
        }
      };
    return s.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: s.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          s.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          i &&
            s.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                s.jsx(ut, { size: 20 }),
                s.jsx("span", { children: i }),
              ],
            }),
          s.jsxs("form", {
            onSubmit: h,
            className: "space-y-6",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  s.jsx("input", {
                    type: "text",
                    id: "id",
                    value: n,
                    onChange: (p) => r(p.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  s.jsx("input", {
                    type: "password",
                    id: "password",
                    value: o,
                    onChange: (p) => l(p.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                disabled: c,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  c
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: c
                  ? s.jsxs(s.Fragment, {
                      children: [
                        s.jsx(de, { size: "small\\", className: "mr-2" }),
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
class En extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(`${t}: Status code '${n}'`),
      (this.statusCode = n),
      (this.__proto__ = r);
  }
}
class fa extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    super(t), (this.__proto__ = n);
  }
}
class Et extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    super(t), (this.__proto__ = n);
  }
}
class gp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "UnsupportedTransportError"),
      (this.__proto__ = r);
  }
}
class xp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "DisabledTransportError"),
      (this.__proto__ = r);
  }
}
class yp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t),
      (this.transport = n),
      (this.errorType = "FailedToStartTransportError"),
      (this.__proto__ = r);
  }
}
class Tc extends Error {
  constructor(t) {
    const n = new.target.prototype;
    super(t),
      (this.errorType = "FailedToNegotiateWithServerError"),
      (this.__proto__ = n);
  }
}
class vp extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    super(t), (this.innerErrors = n), (this.__proto__ = r);
  }
}
class cf {
  constructor(t, n, r) {
    (this.statusCode = t), (this.statusText = n), (this.content = r);
  }
}
class Bo {
  get(t, n) {
    return this.send({ ...n, method: "GET", url: t });
  }
  post(t, n) {
    return this.send({ ...n, method: "POST", url: t });
  }
  delete(t, n) {
    return this.send({ ...n, method: "DELETE", url: t });
  }
  getCookieString(t) {
    return "";
  }
}
var j;
(function (e) {
  (e[(e.Trace = 0)] = "Trace"),
    (e[(e.Debug = 1)] = "Debug"),
    (e[(e.Information = 2)] = "Information"),
    (e[(e.Warning = 3)] = "Warning"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Critical = 5)] = "Critical"),
    (e[(e.None = 6)] = "None");
})(j || (j = {}));
class hs {
  constructor() {}
  log(t, n) {}
}
hs.instance = new hs();
const wp = "9.0.6";
class De {
  static isRequired(t, n) {
    if (t == null) throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(t, n) {
    if (!t || t.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(t, n, r) {
    if (!(t in n)) throw new Error(`Unknown ${r} value: ${t}.`);
  }
}
class Ne {
  static get isBrowser() {
    return (
      !Ne.isNode &&
      typeof window == "object" &&
      typeof window.document == "object"
    );
  }
  static get isWebWorker() {
    return !Ne.isNode && typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return (
      !Ne.isNode && typeof window == "object" && typeof window.document > "u"
    );
  }
  static get isNode() {
    return (
      typeof process < "u" && process.release && process.release.name === "node"
    );
  }
}
function ms(e, t) {
  let n = "";
  return (
    Ln(e)
      ? ((n = `Binary data of length ${e.byteLength}`),
        t && (n += `. Content: '${bp(e)}'`))
      : typeof e == "string" &&
        ((n = `String data of length ${e.length}`),
        t && (n += `. Content: '${e}'`)),
    n
  );
}
function bp(e) {
  const t = new Uint8Array(e);
  let n = "";
  return (
    t.forEach((r) => {
      const o = r < 16 ? "0" : "";
      n += `0x${o}${r.toString(16)} `;
    }),
    n.substr(0, n.length - 1)
  );
}
function Ln(e) {
  return (
    e &&
    typeof ArrayBuffer < "u" &&
    (e instanceof ArrayBuffer ||
      (e.constructor && e.constructor.name === "ArrayBuffer"))
  );
}
async function uf(e, t, n, r, o, l) {
  const i = {},
    [a, c] = gr();
  (i[a] = c),
    e.log(
      j.Trace,
      `(${t} transport) sending data. ${ms(o, l.logMessageContent)}.`
    );
  const u = Ln(o) ? "arraybuffer" : "text",
    h = await n.post(r, {
      content: o,
      headers: { ...i, ...l.headers },
      responseType: u,
      timeout: l.timeout,
      withCredentials: l.withCredentials,
    });
  e.log(
    j.Trace,
    `(${t} transport) request complete. Response status: ${h.statusCode}.`
  );
}
function Np(e) {
  return e === void 0
    ? new jo(j.Information)
    : e === null
    ? hs.instance
    : e.log !== void 0
    ? e
    : new jo(e);
}
class _p {
  constructor(t, n) {
    (this._subject = t), (this._observer = n);
  }
  dispose() {
    const t = this._subject.observers.indexOf(this._observer);
    t > -1 && this._subject.observers.splice(t, 1),
      this._subject.observers.length === 0 &&
        this._subject.cancelCallback &&
        this._subject.cancelCallback().catch((n) => {});
  }
}
class jo {
  constructor(t) {
    (this._minLevel = t), (this.out = console);
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${j[t]}: ${n}`;
      switch (t) {
        case j.Critical:
        case j.Error:
          this.out.error(r);
          break;
        case j.Warning:
          this.out.warn(r);
          break;
        case j.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function gr() {
  let e = "X-SignalR-User-Agent";
  return Ne.isNode && (e = "User-Agent"), [e, jp(wp, Sp(), Cp(), kp())];
}
function jp(e, t, n, r) {
  let o = "Microsoft SignalR/";
  const l = e.split(".");
  return (
    (o += `${l[0]}.${l[1]}`),
    (o += ` (${e}; `),
    t && t !== "" ? (o += `${t}; `) : (o += "Unknown OS; "),
    (o += `${n}`),
    r ? (o += `; ${r}`) : (o += "; Unknown Runtime Version"),
    (o += ")"),
    o
  );
}
function Sp() {
  if (Ne.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else return "";
}
function kp() {
  if (Ne.isNode) return process.versions.node;
}
function Cp() {
  return Ne.isNode ? "NodeJS" : "Browser";
}
function yl(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function Ep() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("could not find global");
}
class Dp extends Bo {
  constructor(t) {
    if ((super(), (this._logger = t), typeof fetch > "u" || Ne.isNode)) {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      (this._jar = new (n("tough-cookie").CookieJar)()),
        typeof fetch > "u"
          ? (this._fetchType = n("node-fetch"))
          : (this._fetchType = fetch),
        (this._fetchType = n("fetch-cookie")(this._fetchType, this._jar));
    } else this._fetchType = fetch.bind(Ep());
    if (typeof AbortController > "u") {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      this._abortControllerType = n("abort-controller");
    } else this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted) throw new Et();
    if (!t.method) throw new Error("No method defined.");
    if (!t.url) throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    t.abortSignal &&
      (t.abortSignal.onabort = () => {
        n.abort(), (r = new Et());
      });
    let o = null;
    if (t.timeout) {
      const c = t.timeout;
      o = setTimeout(() => {
        n.abort(),
          this._logger.log(j.Warning, "Timeout from HTTP request."),
          (r = new fa());
      }, c);
    }
    t.content === "" && (t.content = void 0),
      t.content &&
        ((t.headers = t.headers || {}),
        Ln(t.content)
          ? (t.headers["Content-Type"] = "application/octet-stream")
          : (t.headers["Content-Type"] = "text/plain;charset=UTF-8"));
    let l;
    try {
      l = await this._fetchType(t.url, {
        body: t.content,
        cache: "no-cache",
        credentials: t.withCredentials === !0 ? "include" : "same-origin",
        headers: { "X-Requested-With": "XMLHttpRequest", ...t.headers },
        method: t.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal,
      });
    } catch (c) {
      throw (
        r || (this._logger.log(j.Warning, `Error from HTTP request. ${c}.`), c)
      );
    } finally {
      o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null);
    }
    if (!l.ok) {
      const c = await Ic(l, "text");
      throw new En(c || l.statusText, l.status);
    }
    const a = await Ic(l, t.responseType);
    return new cf(l.status, l.statusText, a);
  }
  getCookieString(t) {
    let n = "";
    return (
      Ne.isNode &&
        this._jar &&
        this._jar.getCookies(t, (r, o) => (n = o.join("; "))),
      n
    );
  }
}
function Ic(e, t) {
  let n;
  switch (t) {
    case "arraybuffer":
      n = e.arrayBuffer();
      break;
    case "text":
      n = e.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${t} is not supported.`);
    default:
      n = e.text();
      break;
  }
  return n;
}
class Tp extends Bo {
  constructor(t) {
    super(), (this._logger = t);
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Et())
      : t.method
      ? t.url
        ? new Promise((n, r) => {
            const o = new XMLHttpRequest();
            o.open(t.method, t.url, !0),
              (o.withCredentials =
                t.withCredentials === void 0 ? !0 : t.withCredentials),
              o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              t.content === "" && (t.content = void 0),
              t.content &&
                (Ln(t.content)
                  ? o.setRequestHeader(
                      "Content-Type",
                      "application/octet-stream"
                    )
                  : o.setRequestHeader(
                      "Content-Type",
                      "text/plain;charset=UTF-8"
                    ));
            const l = t.headers;
            l &&
              Object.keys(l).forEach((i) => {
                o.setRequestHeader(i, l[i]);
              }),
              t.responseType && (o.responseType = t.responseType),
              t.abortSignal &&
                (t.abortSignal.onabort = () => {
                  o.abort(), r(new Et());
                }),
              t.timeout && (o.timeout = t.timeout),
              (o.onload = () => {
                t.abortSignal && (t.abortSignal.onabort = null),
                  o.status >= 200 && o.status < 300
                    ? n(
                        new cf(
                          o.status,
                          o.statusText,
                          o.response || o.responseText
                        )
                      )
                    : r(
                        new En(
                          o.response || o.responseText || o.statusText,
                          o.status
                        )
                      );
              }),
              (o.onerror = () => {
                this._logger.log(
                  j.Warning,
                  `Error from HTTP request. ${o.status}: ${o.statusText}.`
                ),
                  r(new En(o.statusText, o.status));
              }),
              (o.ontimeout = () => {
                this._logger.log(j.Warning, "Timeout from HTTP request."),
                  r(new fa());
              }),
              o.send(t.content);
          })
        : Promise.reject(new Error("No url defined."))
      : Promise.reject(new Error("No method defined."));
  }
}
class Ip extends Bo {
  constructor(t) {
    if ((super(), typeof fetch < "u" || Ne.isNode))
      this._httpClient = new Dp(t);
    else if (typeof XMLHttpRequest < "u") this._httpClient = new Tp(t);
    else throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Et())
      : t.method
      ? t.url
        ? this._httpClient.send(t)
        : Promise.reject(new Error("No url defined."))
      : Promise.reject(new Error("No method defined."));
  }
  getCookieString(t) {
    return this._httpClient.getCookieString(t);
  }
}
class ft {
  static write(t) {
    return `${t}${ft.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== ft.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(ft.RecordSeparator);
    return n.pop(), n;
  }
}
ft.RecordSeparatorCode = 30;
ft.RecordSeparator = String.fromCharCode(ft.RecordSeparatorCode);
class Rp {
  writeHandshakeRequest(t) {
    return ft.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, r;
    if (Ln(t)) {
      const a = new Uint8Array(t),
        c = a.indexOf(ft.RecordSeparatorCode);
      if (c === -1) throw new Error("Message is incomplete.");
      const u = c + 1;
      (n = String.fromCharCode.apply(
        null,
        Array.prototype.slice.call(a.slice(0, u))
      )),
        (r = a.byteLength > u ? a.slice(u).buffer : null);
    } else {
      const a = t,
        c = a.indexOf(ft.RecordSeparator);
      if (c === -1) throw new Error("Message is incomplete.");
      const u = c + 1;
      (n = a.substring(0, u)), (r = a.length > u ? a.substring(u) : null);
    }
    const o = ft.parse(n),
      l = JSON.parse(o[0]);
    if (l.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, l];
  }
}
var ne;
(function (e) {
  (e[(e.Invocation = 1)] = "Invocation"),
    (e[(e.StreamItem = 2)] = "StreamItem"),
    (e[(e.Completion = 3)] = "Completion"),
    (e[(e.StreamInvocation = 4)] = "StreamInvocation"),
    (e[(e.CancelInvocation = 5)] = "CancelInvocation"),
    (e[(e.Ping = 6)] = "Ping"),
    (e[(e.Close = 7)] = "Close"),
    (e[(e.Ack = 8)] = "Ack"),
    (e[(e.Sequence = 9)] = "Sequence");
})(ne || (ne = {}));
class Pp {
  constructor() {
    this.observers = [];
  }
  next(t) {
    for (const n of this.observers) n.next(t);
  }
  error(t) {
    for (const n of this.observers) n.error && n.error(t);
  }
  complete() {
    for (const t of this.observers) t.complete && t.complete();
  }
  subscribe(t) {
    return this.observers.push(t), new _p(this, t);
  }
}
class Mp {
  constructor(t, n, r) {
    (this._bufferSize = 1e5),
      (this._messages = []),
      (this._totalMessageCount = 0),
      (this._waitForSequenceMessage = !1),
      (this._nextReceivingSequenceId = 1),
      (this._latestReceivedSequenceId = 0),
      (this._bufferedByteCount = 0),
      (this._reconnectInProgress = !1),
      (this._protocol = t),
      (this._connection = n),
      (this._bufferSize = r);
  }
  async _send(t) {
    const n = this._protocol.writeMessage(t);
    let r = Promise.resolve();
    if (this._isInvocationMessage(t)) {
      this._totalMessageCount++;
      let o = () => {},
        l = () => {};
      Ln(n)
        ? (this._bufferedByteCount += n.byteLength)
        : (this._bufferedByteCount += n.length),
        this._bufferedByteCount >= this._bufferSize &&
          (r = new Promise((i, a) => {
            (o = i), (l = a);
          })),
        this._messages.push(new Ap(n, this._totalMessageCount, o, l));
    }
    try {
      this._reconnectInProgress || (await this._connection.send(n));
    } catch {
      this._disconnected();
    }
    await r;
  }
  _ack(t) {
    let n = -1;
    for (let r = 0; r < this._messages.length; r++) {
      const o = this._messages[r];
      if (o._id <= t.sequenceId)
        (n = r),
          Ln(o._message)
            ? (this._bufferedByteCount -= o._message.byteLength)
            : (this._bufferedByteCount -= o._message.length),
          o._resolver();
      else if (this._bufferedByteCount < this._bufferSize) o._resolver();
      else break;
    }
    n !== -1 && (this._messages = this._messages.slice(n + 1));
  }
  _shouldProcessMessage(t) {
    if (this._waitForSequenceMessage)
      return t.type !== ne.Sequence
        ? !1
        : ((this._waitForSequenceMessage = !1), !0);
    if (!this._isInvocationMessage(t)) return !0;
    const n = this._nextReceivingSequenceId;
    return (
      this._nextReceivingSequenceId++,
      n <= this._latestReceivedSequenceId
        ? (n === this._latestReceivedSequenceId && this._ackTimer(), !1)
        : ((this._latestReceivedSequenceId = n), this._ackTimer(), !0)
    );
  }
  _resetSequence(t) {
    if (t.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(
        new Error("Sequence ID greater than amount of messages we've received.")
      );
      return;
    }
    this._nextReceivingSequenceId = t.sequenceId;
  }
  _disconnected() {
    (this._reconnectInProgress = !0), (this._waitForSequenceMessage = !0);
  }
  async _resend() {
    const t =
      this._messages.length !== 0
        ? this._messages[0]._id
        : this._totalMessageCount + 1;
    await this._connection.send(
      this._protocol.writeMessage({ type: ne.Sequence, sequenceId: t })
    );
    const n = this._messages;
    for (const r of n) await this._connection.send(r._message);
    this._reconnectInProgress = !1;
  }
  _dispose(t) {
    t ?? (t = new Error("Unable to reconnect to server."));
    for (const n of this._messages) n._rejector(t);
  }
  _isInvocationMessage(t) {
    switch (t.type) {
      case ne.Invocation:
      case ne.StreamItem:
      case ne.Completion:
      case ne.StreamInvocation:
      case ne.CancelInvocation:
        return !0;
      case ne.Close:
      case ne.Sequence:
      case ne.Ping:
      case ne.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 &&
      (this._ackTimerHandle = setTimeout(async () => {
        try {
          this._reconnectInProgress ||
            (await this._connection.send(
              this._protocol.writeMessage({
                type: ne.Ack,
                sequenceId: this._latestReceivedSequenceId,
              })
            ));
        } catch {}
        clearTimeout(this._ackTimerHandle), (this._ackTimerHandle = void 0);
      }, 1e3));
  }
}
class Ap {
  constructor(t, n, r, o) {
    (this._message = t),
      (this._id = n),
      (this._resolver = r),
      (this._rejector = o);
  }
}
const Op = 30 * 1e3,
  Lp = 15 * 1e3,
  $p = 1e5;
var me;
(function (e) {
  (e.Disconnected = "Disconnected"),
    (e.Connecting = "Connecting"),
    (e.Connected = "Connected"),
    (e.Disconnecting = "Disconnecting"),
    (e.Reconnecting = "Reconnecting");
})(me || (me = {}));
class ha {
  static create(t, n, r, o, l, i, a) {
    return new ha(t, n, r, o, l, i, a);
  }
  constructor(t, n, r, o, l, i, a) {
    (this._nextKeepAlive = 0),
      (this._freezeEventListener = () => {
        this._logger.log(
          j.Warning,
          "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep"
        );
      }),
      De.isRequired(t, "connection"),
      De.isRequired(n, "logger"),
      De.isRequired(r, "protocol"),
      (this.serverTimeoutInMilliseconds = l ?? Op),
      (this.keepAliveIntervalInMilliseconds = i ?? Lp),
      (this._statefulReconnectBufferSize = a ?? $p),
      (this._logger = n),
      (this._protocol = r),
      (this.connection = t),
      (this._reconnectPolicy = o),
      (this._handshakeProtocol = new Rp()),
      (this.connection.onreceive = (c) => this._processIncomingData(c)),
      (this.connection.onclose = (c) => this._connectionClosed(c)),
      (this._callbacks = {}),
      (this._methods = {}),
      (this._closedCallbacks = []),
      (this._reconnectingCallbacks = []),
      (this._reconnectedCallbacks = []),
      (this._invocationId = 0),
      (this._receivedHandshakeResponse = !1),
      (this._connectionState = me.Disconnected),
      (this._connectionStarted = !1),
      (this._cachedPingMessage = this._protocol.writeMessage({
        type: ne.Ping,
      }));
  }
  get state() {
    return this._connectionState;
  }
  get connectionId() {
    return (this.connection && this.connection.connectionId) || null;
  }
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  set baseUrl(t) {
    if (
      this._connectionState !== me.Disconnected &&
      this._connectionState !== me.Reconnecting
    )
      throw new Error(
        "The HubConnection must be in the Disconnected or Reconnecting state to change the url."
      );
    if (!t) throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = t;
  }
  start() {
    return (
      (this._startPromise = this._startWithStateTransitions()),
      this._startPromise
    );
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== me.Disconnected)
      return Promise.reject(
        new Error(
          "Cannot start a HubConnection that is not in the 'Disconnected' state."
        )
      );
    (this._connectionState = me.Connecting),
      this._logger.log(j.Debug, "Starting HubConnection.");
    try {
      await this._startInternal(),
        Ne.isBrowser &&
          window.document.addEventListener("freeze", this._freezeEventListener),
        (this._connectionState = me.Connected),
        (this._connectionStarted = !0),
        this._logger.log(j.Debug, "HubConnection connected successfully.");
    } catch (t) {
      return (
        (this._connectionState = me.Disconnected),
        this._logger.log(
          j.Debug,
          `HubConnection failed to start successfully because of error '${t}'.`
        ),
        Promise.reject(t)
      );
    }
  }
  async _startInternal() {
    (this._stopDuringStartError = void 0),
      (this._receivedHandshakeResponse = !1);
    const t = new Promise((n, r) => {
      (this._handshakeResolver = n), (this._handshakeRejecter = r);
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let n = this._protocol.version;
      this.connection.features.reconnect || (n = 1);
      const r = { protocol: this._protocol.name, version: n };
      if (
        (this._logger.log(j.Debug, "Sending handshake request."),
        await this._sendMessage(
          this._handshakeProtocol.writeHandshakeRequest(r)
        ),
        this._logger.log(
          j.Information,
          `Using HubProtocol '${this._protocol.name}'.`
        ),
        this._cleanupTimeout(),
        this._resetTimeoutPeriod(),
        this._resetKeepAliveInterval(),
        await t,
        this._stopDuringStartError)
      )
        throw this._stopDuringStartError;
      (this.connection.features.reconnect || !1) &&
        ((this._messageBuffer = new Mp(
          this._protocol,
          this.connection,
          this._statefulReconnectBufferSize
        )),
        (this.connection.features.disconnected =
          this._messageBuffer._disconnected.bind(this._messageBuffer)),
        (this.connection.features.resend = () => {
          if (this._messageBuffer) return this._messageBuffer._resend();
        })),
        this.connection.features.inherentKeepAlive ||
          (await this._sendMessage(this._cachedPingMessage));
    } catch (n) {
      throw (
        (this._logger.log(
          j.Debug,
          `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`
        ),
        this._cleanupTimeout(),
        this._cleanupPingTimer(),
        await this.connection.stop(n),
        n)
      );
    }
  }
  async stop() {
    const t = this._startPromise;
    (this.connection.features.reconnect = !1),
      (this._stopPromise = this._stopInternal()),
      await this._stopPromise;
    try {
      await t;
    } catch {}
  }
  _stopInternal(t) {
    if (this._connectionState === me.Disconnected)
      return (
        this._logger.log(
          j.Debug,
          `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`
        ),
        Promise.resolve()
      );
    if (this._connectionState === me.Disconnecting)
      return (
        this._logger.log(
          j.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`
        ),
        this._stopPromise
      );
    const n = this._connectionState;
    return (
      (this._connectionState = me.Disconnecting),
      this._logger.log(j.Debug, "Stopping HubConnection."),
      this._reconnectDelayHandle
        ? (this._logger.log(
            j.Debug,
            "Connection stopped during reconnect delay. Done reconnecting."
          ),
          clearTimeout(this._reconnectDelayHandle),
          (this._reconnectDelayHandle = void 0),
          this._completeClose(),
          Promise.resolve())
        : (n === me.Connected && this._sendCloseMessage(),
          this._cleanupTimeout(),
          this._cleanupPingTimer(),
          (this._stopDuringStartError =
            t ||
            new Et(
              "The connection was stopped before the hub handshake could complete."
            )),
          this.connection.stop(t))
    );
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {}
  }
  stream(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._createStreamInvocation(t, n, o);
    let i;
    const a = new Pp();
    return (
      (a.cancelCallback = () => {
        const c = this._createCancelInvocation(l.invocationId);
        return (
          delete this._callbacks[l.invocationId],
          i.then(() => this._sendWithProtocol(c))
        );
      }),
      (this._callbacks[l.invocationId] = (c, u) => {
        if (u) {
          a.error(u);
          return;
        } else
          c &&
            (c.type === ne.Completion
              ? c.error
                ? a.error(new Error(c.error))
                : a.complete()
              : a.next(c.item));
      }),
      (i = this._sendWithProtocol(l).catch((c) => {
        a.error(c), delete this._callbacks[l.invocationId];
      })),
      this._launchStreams(r, i),
      a
    );
  }
  _sendMessage(t) {
    return this._resetKeepAliveInterval(), this.connection.send(t);
  }
  _sendWithProtocol(t) {
    return this._messageBuffer
      ? this._messageBuffer._send(t)
      : this._sendMessage(this._protocol.writeMessage(t));
  }
  send(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._sendWithProtocol(this._createInvocation(t, n, !0, o));
    return this._launchStreams(r, l), l;
  }
  invoke(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      l = this._createInvocation(t, n, !1, o);
    return new Promise((a, c) => {
      this._callbacks[l.invocationId] = (h, p) => {
        if (p) {
          c(p);
          return;
        } else
          h &&
            (h.type === ne.Completion
              ? h.error
                ? c(new Error(h.error))
                : a(h.result)
              : c(new Error(`Unexpected message type: ${h.type}`)));
      };
      const u = this._sendWithProtocol(l).catch((h) => {
        c(h), delete this._callbacks[l.invocationId];
      });
      this._launchStreams(r, u);
    });
  }
  on(t, n) {
    !t ||
      !n ||
      ((t = t.toLowerCase()),
      this._methods[t] || (this._methods[t] = []),
      this._methods[t].indexOf(n) === -1 && this._methods[t].push(n));
  }
  off(t, n) {
    if (!t) return;
    t = t.toLowerCase();
    const r = this._methods[t];
    if (r)
      if (n) {
        const o = r.indexOf(n);
        o !== -1 && (r.splice(o, 1), r.length === 0 && delete this._methods[t]);
      } else delete this._methods[t];
  }
  onclose(t) {
    t && this._closedCallbacks.push(t);
  }
  onreconnecting(t) {
    t && this._reconnectingCallbacks.push(t);
  }
  onreconnected(t) {
    t && this._reconnectedCallbacks.push(t);
  }
  _processIncomingData(t) {
    if (
      (this._cleanupTimeout(),
      this._receivedHandshakeResponse ||
        ((t = this._processHandshakeResponse(t)),
        (this._receivedHandshakeResponse = !0)),
      t)
    ) {
      const n = this._protocol.parseMessages(t, this._logger);
      for (const r of n)
        if (
          !(
            this._messageBuffer && !this._messageBuffer._shouldProcessMessage(r)
          )
        )
          switch (r.type) {
            case ne.Invocation:
              this._invokeClientMethod(r).catch((o) => {
                this._logger.log(
                  j.Error,
                  `Invoke client method threw error: ${yl(o)}`
                );
              });
              break;
            case ne.StreamItem:
            case ne.Completion: {
              const o = this._callbacks[r.invocationId];
              if (o) {
                r.type === ne.Completion &&
                  delete this._callbacks[r.invocationId];
                try {
                  o(r);
                } catch (l) {
                  this._logger.log(
                    j.Error,
                    `Stream callback threw error: ${yl(l)}`
                  );
                }
              }
              break;
            }
            case ne.Ping:
              break;
            case ne.Close: {
              this._logger.log(
                j.Information,
                "Close message received from server."
              );
              const o = r.error
                ? new Error("Server returned an error on close: " + r.error)
                : void 0;
              r.allowReconnect === !0
                ? this.connection.stop(o)
                : (this._stopPromise = this._stopInternal(o));
              break;
            }
            case ne.Ack:
              this._messageBuffer && this._messageBuffer._ack(r);
              break;
            case ne.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(r);
              break;
            default:
              this._logger.log(j.Warning, `Invalid message type: ${r.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(t) {
    let n, r;
    try {
      [r, n] = this._handshakeProtocol.parseHandshakeResponse(t);
    } catch (o) {
      const l = "Error parsing handshake response: " + o;
      this._logger.log(j.Error, l);
      const i = new Error(l);
      throw (this._handshakeRejecter(i), i);
    }
    if (n.error) {
      const o = "Server returned handshake error: " + n.error;
      this._logger.log(j.Error, o);
      const l = new Error(o);
      throw (this._handshakeRejecter(l), l);
    } else this._logger.log(j.Debug, "Server handshake complete.");
    return this._handshakeResolver(), r;
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive ||
      ((this._nextKeepAlive =
        new Date().getTime() + this.keepAliveIntervalInMilliseconds),
      this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if (
      (!this.connection.features ||
        !this.connection.features.inherentKeepAlive) &&
      ((this._timeoutHandle = setTimeout(
        () => this.serverTimeout(),
        this.serverTimeoutInMilliseconds
      )),
      this._pingServerHandle === void 0)
    ) {
      let t = this._nextKeepAlive - new Date().getTime();
      t < 0 && (t = 0),
        (this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === me.Connected)
            try {
              await this._sendMessage(this._cachedPingMessage);
            } catch {
              this._cleanupPingTimer();
            }
        }, t));
    }
  }
  serverTimeout() {
    this.connection.stop(
      new Error(
        "Server timeout elapsed without receiving a message from the server."
      )
    );
  }
  async _invokeClientMethod(t) {
    const n = t.target.toLowerCase(),
      r = this._methods[n];
    if (!r) {
      this._logger.log(
        j.Warning,
        `No client method with the name '${n}' found.`
      ),
        t.invocationId &&
          (this._logger.log(
            j.Warning,
            `No result given for '${n}' method and invocation ID '${t.invocationId}'.`
          ),
          await this._sendWithProtocol(
            this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null
            )
          ));
      return;
    }
    const o = r.slice(),
      l = !!t.invocationId;
    let i, a, c;
    for (const u of o)
      try {
        const h = i;
        (i = await u.apply(this, t.arguments)),
          l &&
            i &&
            h &&
            (this._logger.log(
              j.Error,
              `Multiple results provided for '${n}'. Sending error to server.`
            ),
            (c = this._createCompletionMessage(
              t.invocationId,
              "Client provided multiple results.",
              null
            ))),
          (a = void 0);
      } catch (h) {
        (a = h),
          this._logger.log(
            j.Error,
            `A callback for the method '${n}' threw error '${h}'.`
          );
      }
    c
      ? await this._sendWithProtocol(c)
      : l
      ? (a
          ? (c = this._createCompletionMessage(t.invocationId, `${a}`, null))
          : i !== void 0
          ? (c = this._createCompletionMessage(t.invocationId, null, i))
          : (this._logger.log(
              j.Warning,
              `No result given for '${n}' method and invocation ID '${t.invocationId}'.`
            ),
            (c = this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null
            ))),
        await this._sendWithProtocol(c))
      : i &&
        this._logger.log(
          j.Error,
          `Result given for '${n}' method but server is not expecting a result.`
        );
  }
  _connectionClosed(t) {
    this._logger.log(
      j.Debug,
      `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`
    ),
      (this._stopDuringStartError =
        this._stopDuringStartError ||
        t ||
        new Et(
          "The underlying connection was closed before the hub handshake could complete."
        )),
      this._handshakeResolver && this._handshakeResolver(),
      this._cancelCallbacksWithError(
        t ||
          new Error(
            "Invocation canceled due to the underlying connection being closed."
          )
      ),
      this._cleanupTimeout(),
      this._cleanupPingTimer(),
      this._connectionState === me.Disconnecting
        ? this._completeClose(t)
        : this._connectionState === me.Connected && this._reconnectPolicy
        ? this._reconnect(t)
        : this._connectionState === me.Connected && this._completeClose(t);
  }
  _completeClose(t) {
    if (this._connectionStarted) {
      (this._connectionState = me.Disconnected),
        (this._connectionStarted = !1),
        this._messageBuffer &&
          (this._messageBuffer._dispose(t ?? new Error("Connection closed.")),
          (this._messageBuffer = void 0)),
        Ne.isBrowser &&
          window.document.removeEventListener(
            "freeze",
            this._freezeEventListener
          );
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(
          j.Error,
          `An onclose callback called with error '${t}' threw error '${n}'.`
        );
      }
    }
  }
  async _reconnect(t) {
    const n = Date.now();
    let r = 0,
      o =
        t !== void 0
          ? t
          : new Error("Attempting to reconnect due to a unknown error."),
      l = this._getNextRetryDelay(r++, 0, o);
    if (l === null) {
      this._logger.log(
        j.Debug,
        "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."
      ),
        this._completeClose(t);
      return;
    }
    if (
      ((this._connectionState = me.Reconnecting),
      t
        ? this._logger.log(
            j.Information,
            `Connection reconnecting because of error '${t}'.`
          )
        : this._logger.log(j.Information, "Connection reconnecting."),
      this._reconnectingCallbacks.length !== 0)
    ) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(
          j.Error,
          `An onreconnecting callback called with error '${t}' threw error '${i}'.`
        );
      }
      if (this._connectionState !== me.Reconnecting) {
        this._logger.log(
          j.Debug,
          "Connection left the reconnecting state in onreconnecting callback. Done reconnecting."
        );
        return;
      }
    }
    for (; l !== null; ) {
      if (
        (this._logger.log(
          j.Information,
          `Reconnect attempt number ${r} will start in ${l} ms.`
        ),
        await new Promise((i) => {
          this._reconnectDelayHandle = setTimeout(i, l);
        }),
        (this._reconnectDelayHandle = void 0),
        this._connectionState !== me.Reconnecting)
      ) {
        this._logger.log(
          j.Debug,
          "Connection left the reconnecting state during reconnect delay. Done reconnecting."
        );
        return;
      }
      try {
        if (
          (await this._startInternal(),
          (this._connectionState = me.Connected),
          this._logger.log(
            j.Information,
            "HubConnection reconnected successfully."
          ),
          this._reconnectedCallbacks.length !== 0)
        )
          try {
            this._reconnectedCallbacks.forEach((i) =>
              i.apply(this, [this.connection.connectionId])
            );
          } catch (i) {
            this._logger.log(
              j.Error,
              `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`
            );
          }
        return;
      } catch (i) {
        if (
          (this._logger.log(
            j.Information,
            `Reconnect attempt failed because of error '${i}'.`
          ),
          this._connectionState !== me.Reconnecting)
        ) {
          this._logger.log(
            j.Debug,
            `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`
          ),
            this._connectionState === me.Disconnecting && this._completeClose();
          return;
        }
        (o = i instanceof Error ? i : new Error(i.toString())),
          (l = this._getNextRetryDelay(r++, Date.now() - n, o));
      }
    }
    this._logger.log(
      j.Information,
      `Reconnect retries have been exhausted after ${
        Date.now() - n
      } ms and ${r} failed attempts. Connection disconnecting.`
    ),
      this._completeClose();
  }
  _getNextRetryDelay(t, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: t,
        retryReason: r,
      });
    } catch (o) {
      return (
        this._logger.log(
          j.Error,
          `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${n}) threw error '${o}'.`
        ),
        null
      );
    }
  }
  _cancelCallbacksWithError(t) {
    const n = this._callbacks;
    (this._callbacks = {}),
      Object.keys(n).forEach((r) => {
        const o = n[r];
        try {
          o(null, t);
        } catch (l) {
          this._logger.log(
            j.Error,
            `Stream 'error' callback called with '${t}' threw error: ${yl(l)}`
          );
        }
      });
  }
  _cleanupPingTimer() {
    this._pingServerHandle &&
      (clearTimeout(this._pingServerHandle), (this._pingServerHandle = void 0));
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(t, n, r, o) {
    if (r)
      return o.length !== 0
        ? { target: t, arguments: n, streamIds: o, type: ne.Invocation }
        : { target: t, arguments: n, type: ne.Invocation };
    {
      const l = this._invocationId;
      return (
        this._invocationId++,
        o.length !== 0
          ? {
              target: t,
              arguments: n,
              invocationId: l.toString(),
              streamIds: o,
              type: ne.Invocation,
            }
          : {
              target: t,
              arguments: n,
              invocationId: l.toString(),
              type: ne.Invocation,
            }
      );
    }
  }
  _launchStreams(t, n) {
    if (t.length !== 0) {
      n || (n = Promise.resolve());
      for (const r in t)
        t[r].subscribe({
          complete: () => {
            n = n.then(() =>
              this._sendWithProtocol(this._createCompletionMessage(r))
            );
          },
          error: (o) => {
            let l;
            o instanceof Error
              ? (l = o.message)
              : o && o.toString
              ? (l = o.toString())
              : (l = "Unknown error"),
              (n = n.then(() =>
                this._sendWithProtocol(this._createCompletionMessage(r, l))
              ));
          },
          next: (o) => {
            n = n.then(() =>
              this._sendWithProtocol(this._createStreamItemMessage(r, o))
            );
          },
        });
    }
  }
  _replaceStreamingParams(t) {
    const n = [],
      r = [];
    for (let o = 0; o < t.length; o++) {
      const l = t[o];
      if (this._isObservable(l)) {
        const i = this._invocationId;
        this._invocationId++, (n[i] = l), r.push(i.toString()), t.splice(o, 1);
      }
    }
    return [n, r];
  }
  _isObservable(t) {
    return t && t.subscribe && typeof t.subscribe == "function";
  }
  _createStreamInvocation(t, n, r) {
    const o = this._invocationId;
    return (
      this._invocationId++,
      r.length !== 0
        ? {
            target: t,
            arguments: n,
            invocationId: o.toString(),
            streamIds: r,
            type: ne.StreamInvocation,
          }
        : {
            target: t,
            arguments: n,
            invocationId: o.toString(),
            type: ne.StreamInvocation,
          }
    );
  }
  _createCancelInvocation(t) {
    return { invocationId: t, type: ne.CancelInvocation };
  }
  _createStreamItemMessage(t, n) {
    return { invocationId: t, item: n, type: ne.StreamItem };
  }
  _createCompletionMessage(t, n, r) {
    return n
      ? { error: n, invocationId: t, type: ne.Completion }
      : { invocationId: t, result: r, type: ne.Completion };
  }
  _createCloseMessage() {
    return { type: ne.Close };
  }
}
const Up = [0, 2e3, 1e4, 3e4, null];
class Rc {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : Up;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class Dn {}
Dn.Authorization = "Authorization";
Dn.Cookie = "Cookie";
class zp extends Bo {
  constructor(t, n) {
    super(), (this._innerClient = t), (this._accessTokenFactory = n);
  }
  async send(t) {
    let n = !0;
    this._accessTokenFactory &&
      (!this._accessToken || (t.url && t.url.indexOf("/negotiate?") > 0)) &&
      ((n = !1), (this._accessToken = await this._accessTokenFactory())),
      this._setAuthorizationHeader(t);
    const r = await this._innerClient.send(t);
    return n && r.statusCode === 401 && this._accessTokenFactory
      ? ((this._accessToken = await this._accessTokenFactory()),
        this._setAuthorizationHeader(t),
        await this._innerClient.send(t))
      : r;
  }
  _setAuthorizationHeader(t) {
    t.headers || (t.headers = {}),
      this._accessToken
        ? (t.headers[Dn.Authorization] = `Bearer ${this._accessToken}`)
        : this._accessTokenFactory &&
          t.headers[Dn.Authorization] &&
          delete t.headers[Dn.Authorization];
  }
  getCookieString(t) {
    return this._innerClient.getCookieString(t);
  }
}
var Pe;
(function (e) {
  (e[(e.None = 0)] = "None"),
    (e[(e.WebSockets = 1)] = "WebSockets"),
    (e[(e.ServerSentEvents = 2)] = "ServerSentEvents"),
    (e[(e.LongPolling = 4)] = "LongPolling");
})(Pe || (Pe = {}));
var Ve;
(function (e) {
  (e[(e.Text = 1)] = "Text"), (e[(e.Binary = 2)] = "Binary");
})(Ve || (Ve = {}));
let Fp = class {
  constructor() {
    (this._isAborted = !1), (this.onabort = null);
  }
  abort() {
    this._isAborted || ((this._isAborted = !0), this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class Pc {
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(t, n, r) {
    (this._httpClient = t),
      (this._logger = n),
      (this._pollAbort = new Fp()),
      (this._options = r),
      (this._running = !1),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async connect(t, n) {
    if (
      (De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ve, "transferFormat"),
      (this._url = t),
      this._logger.log(j.Trace, "(LongPolling transport) Connecting."),
      n === Ve.Binary &&
        typeof XMLHttpRequest < "u" &&
        typeof new XMLHttpRequest().responseType != "string")
    )
      throw new Error(
        "Binary protocols over XmlHttpRequest not implementing advanced features are not supported."
      );
    const [r, o] = gr(),
      l = { [r]: o, ...this._options.headers },
      i = {
        abortSignal: this._pollAbort.signal,
        headers: l,
        timeout: 1e5,
        withCredentials: this._options.withCredentials,
      };
    n === Ve.Binary && (i.responseType = "arraybuffer");
    const a = `${t}&_=${Date.now()}`;
    this._logger.log(j.Trace, `(LongPolling transport) polling: ${a}.`);
    const c = await this._httpClient.get(a, i);
    c.statusCode !== 200
      ? (this._logger.log(
          j.Error,
          `(LongPolling transport) Unexpected response code: ${c.statusCode}.`
        ),
        (this._closeError = new En(c.statusText || "", c.statusCode)),
        (this._running = !1))
      : (this._running = !0),
      (this._receiving = this._poll(this._url, i));
  }
  async _poll(t, n) {
    try {
      for (; this._running; )
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(j.Trace, `(LongPolling transport) polling: ${r}.`);
          const o = await this._httpClient.get(r, n);
          o.statusCode === 204
            ? (this._logger.log(
                j.Information,
                "(LongPolling transport) Poll terminated by server."
              ),
              (this._running = !1))
            : o.statusCode !== 200
            ? (this._logger.log(
                j.Error,
                `(LongPolling transport) Unexpected response code: ${o.statusCode}.`
              ),
              (this._closeError = new En(o.statusText || "", o.statusCode)),
              (this._running = !1))
            : o.content
            ? (this._logger.log(
                j.Trace,
                `(LongPolling transport) data received. ${ms(
                  o.content,
                  this._options.logMessageContent
                )}.`
              ),
              this.onreceive && this.onreceive(o.content))
            : this._logger.log(
                j.Trace,
                "(LongPolling transport) Poll timed out, reissuing."
              );
        } catch (r) {
          this._running
            ? r instanceof fa
              ? this._logger.log(
                  j.Trace,
                  "(LongPolling transport) Poll timed out, reissuing."
                )
              : ((this._closeError = r), (this._running = !1))
            : this._logger.log(
                j.Trace,
                `(LongPolling transport) Poll errored after shutdown: ${r.message}`
              );
        }
    } finally {
      this._logger.log(j.Trace, "(LongPolling transport) Polling complete."),
        this.pollAborted || this._raiseOnClose();
    }
  }
  async send(t) {
    return this._running
      ? uf(
          this._logger,
          "LongPolling",
          this._httpClient,
          this._url,
          t,
          this._options
        )
      : Promise.reject(
          new Error("Cannot send until the transport is connected")
        );
  }
  async stop() {
    this._logger.log(j.Trace, "(LongPolling transport) Stopping polling."),
      (this._running = !1),
      this._pollAbort.abort();
    try {
      await this._receiving,
        this._logger.log(
          j.Trace,
          `(LongPolling transport) sending DELETE request to ${this._url}.`
        );
      const t = {},
        [n, r] = gr();
      t[n] = r;
      const o = {
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      };
      let l;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (i) {
        l = i;
      }
      l
        ? l instanceof En &&
          (l.statusCode === 404
            ? this._logger.log(
                j.Trace,
                "(LongPolling transport) A 404 response was returned from sending a DELETE request."
              )
            : this._logger.log(
                j.Trace,
                `(LongPolling transport) Error sending a DELETE request: ${l}`
              ))
        : this._logger.log(
            j.Trace,
            "(LongPolling transport) DELETE request accepted."
          );
    } finally {
      this._logger.log(j.Trace, "(LongPolling transport) Stop finished."),
        this._raiseOnClose();
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      this._closeError && (t += " Error: " + this._closeError),
        this._logger.log(j.Trace, t),
        this.onclose(this._closeError);
    }
  }
}
class Bp {
  constructor(t, n, r, o) {
    (this._httpClient = t),
      (this._accessToken = n),
      (this._logger = r),
      (this._options = o),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async connect(t, n) {
    return (
      De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ve, "transferFormat"),
      this._logger.log(j.Trace, "(SSE transport) Connecting."),
      (this._url = t),
      this._accessToken &&
        (t +=
          (t.indexOf("?") < 0 ? "?" : "&") +
          `access_token=${encodeURIComponent(this._accessToken)}`),
      new Promise((r, o) => {
        let l = !1;
        if (n !== Ve.Text) {
          o(
            new Error(
              "The Server-Sent Events transport only supports the 'Text' transfer format"
            )
          );
          return;
        }
        let i;
        if (Ne.isBrowser || Ne.isWebWorker)
          i = new this._options.EventSource(t, {
            withCredentials: this._options.withCredentials,
          });
        else {
          const a = this._httpClient.getCookieString(t),
            c = {};
          c.Cookie = a;
          const [u, h] = gr();
          (c[u] = h),
            (i = new this._options.EventSource(t, {
              withCredentials: this._options.withCredentials,
              headers: { ...c, ...this._options.headers },
            }));
        }
        try {
          (i.onmessage = (a) => {
            if (this.onreceive)
              try {
                this._logger.log(
                  j.Trace,
                  `(SSE transport) data received. ${ms(
                    a.data,
                    this._options.logMessageContent
                  )}.`
                ),
                  this.onreceive(a.data);
              } catch (c) {
                this._close(c);
                return;
              }
          }),
            (i.onerror = (a) => {
              l
                ? this._close()
                : o(
                    new Error(
                      "EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."
                    )
                  );
            }),
            (i.onopen = () => {
              this._logger.log(j.Information, `SSE connected to ${this._url}`),
                (this._eventSource = i),
                (l = !0),
                r();
            });
        } catch (a) {
          o(a);
          return;
        }
      })
    );
  }
  async send(t) {
    return this._eventSource
      ? uf(this._logger, "SSE", this._httpClient, this._url, t, this._options)
      : Promise.reject(
          new Error("Cannot send until the transport is connected")
        );
  }
  stop() {
    return this._close(), Promise.resolve();
  }
  _close(t) {
    this._eventSource &&
      (this._eventSource.close(),
      (this._eventSource = void 0),
      this.onclose && this.onclose(t));
  }
}
class Hp {
  constructor(t, n, r, o, l, i) {
    (this._logger = r),
      (this._accessTokenFactory = n),
      (this._logMessageContent = o),
      (this._webSocketConstructor = l),
      (this._httpClient = t),
      (this.onreceive = null),
      (this.onclose = null),
      (this._headers = i);
  }
  async connect(t, n) {
    De.isRequired(t, "url"),
      De.isRequired(n, "transferFormat"),
      De.isIn(n, Ve, "transferFormat"),
      this._logger.log(j.Trace, "(WebSockets transport) Connecting.");
    let r;
    return (
      this._accessTokenFactory && (r = await this._accessTokenFactory()),
      new Promise((o, l) => {
        t = t.replace(/^http/, "ws");
        let i;
        const a = this._httpClient.getCookieString(t);
        let c = !1;
        if (Ne.isNode || Ne.isReactNative) {
          const u = {},
            [h, p] = gr();
          (u[h] = p),
            r && (u[Dn.Authorization] = `Bearer ${r}`),
            a && (u[Dn.Cookie] = a),
            (i = new this._webSocketConstructor(t, void 0, {
              headers: { ...u, ...this._headers },
            }));
        } else
          r &&
            (t +=
              (t.indexOf("?") < 0 ? "?" : "&") +
              `access_token=${encodeURIComponent(r)}`);
        i || (i = new this._webSocketConstructor(t)),
          n === Ve.Binary && (i.binaryType = "arraybuffer"),
          (i.onopen = (u) => {
            this._logger.log(j.Information, `WebSocket connected to ${t}.`),
              (this._webSocket = i),
              (c = !0),
              o();
          }),
          (i.onerror = (u) => {
            let h = null;
            typeof ErrorEvent < "u" && u instanceof ErrorEvent
              ? (h = u.error)
              : (h = "There was an error with the transport"),
              this._logger.log(j.Information, `(WebSockets transport) ${h}.`);
          }),
          (i.onmessage = (u) => {
            if (
              (this._logger.log(
                j.Trace,
                `(WebSockets transport) data received. ${ms(
                  u.data,
                  this._logMessageContent
                )}.`
              ),
              this.onreceive)
            )
              try {
                this.onreceive(u.data);
              } catch (h) {
                this._close(h);
                return;
              }
          }),
          (i.onclose = (u) => {
            if (c) this._close(u);
            else {
              let h = null;
              typeof ErrorEvent < "u" && u instanceof ErrorEvent
                ? (h = u.error)
                : (h =
                    "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled."),
                l(new Error(h));
            }
          });
      })
    );
  }
  send(t) {
    return this._webSocket &&
      this._webSocket.readyState === this._webSocketConstructor.OPEN
      ? (this._logger.log(
          j.Trace,
          `(WebSockets transport) sending data. ${ms(
            t,
            this._logMessageContent
          )}.`
        ),
        this._webSocket.send(t),
        Promise.resolve())
      : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return this._webSocket && this._close(void 0), Promise.resolve();
  }
  _close(t) {
    this._webSocket &&
      ((this._webSocket.onclose = () => {}),
      (this._webSocket.onmessage = () => {}),
      (this._webSocket.onerror = () => {}),
      this._webSocket.close(),
      (this._webSocket = void 0)),
      this._logger.log(j.Trace, "(WebSockets transport) socket closed."),
      this.onclose &&
        (this._isCloseEvent(t) && (t.wasClean === !1 || t.code !== 1e3)
          ? this.onclose(
              new Error(
                `WebSocket closed with status code: ${t.code} (${
                  t.reason || "no reason given"
                }).`
              )
            )
          : t instanceof Error
          ? this.onclose(t)
          : this.onclose());
  }
  _isCloseEvent(t) {
    return t && typeof t.wasClean == "boolean" && typeof t.code == "number";
  }
}
const Mc = 100;
class Gp {
  constructor(t, n = {}) {
    if (
      ((this._stopPromiseResolver = () => {}),
      (this.features = {}),
      (this._negotiateVersion = 1),
      De.isRequired(t, "url"),
      (this._logger = Np(n.logger)),
      (this.baseUrl = this._resolveUrl(t)),
      (n = n || {}),
      (n.logMessageContent =
        n.logMessageContent === void 0 ? !1 : n.logMessageContent),
      typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
    )
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error(
        "withCredentials option was not a 'boolean' or 'undefined' value"
      );
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null,
      o = null;
    if (Ne.isNode && typeof require < "u") {
      const l =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      (r = l("ws")), (o = l("eventsource"));
    }
    !Ne.isNode && typeof WebSocket < "u" && !n.WebSocket
      ? (n.WebSocket = WebSocket)
      : Ne.isNode && !n.WebSocket && r && (n.WebSocket = r),
      !Ne.isNode && typeof EventSource < "u" && !n.EventSource
        ? (n.EventSource = EventSource)
        : Ne.isNode && !n.EventSource && typeof o < "u" && (n.EventSource = o),
      (this._httpClient = new zp(
        n.httpClient || new Ip(this._logger),
        n.accessTokenFactory
      )),
      (this._connectionState = "Disconnected"),
      (this._connectionStarted = !1),
      (this._options = n),
      (this.onreceive = null),
      (this.onclose = null);
  }
  async start(t) {
    if (
      ((t = t || Ve.Binary),
      De.isIn(t, Ve, "transferFormat"),
      this._logger.log(
        j.Debug,
        `Starting connection with transfer format '${Ve[t]}'.`
      ),
      this._connectionState !== "Disconnected")
    )
      return Promise.reject(
        new Error(
          "Cannot start an HttpConnection that is not in the 'Disconnected' state."
        )
      );
    if (
      ((this._connectionState = "Connecting"),
      (this._startInternalPromise = this._startInternal(t)),
      await this._startInternalPromise,
      this._connectionState === "Disconnecting")
    ) {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return (
        this._logger.log(j.Error, n),
        await this._stopPromise,
        Promise.reject(new Et(n))
      );
    } else if (this._connectionState !== "Connected") {
      const n =
        "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return this._logger.log(j.Error, n), Promise.reject(new Et(n));
    }
    this._connectionStarted = !0;
  }
  send(t) {
    return this._connectionState !== "Connected"
      ? Promise.reject(
          new Error(
            "Cannot send data if the connection is not in the 'Connected' State."
          )
        )
      : (this._sendQueue || (this._sendQueue = new ma(this.transport)),
        this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return (
        this._logger.log(
          j.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`
        ),
        Promise.resolve()
      );
    if (this._connectionState === "Disconnecting")
      return (
        this._logger.log(
          j.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`
        ),
        this._stopPromise
      );
    (this._connectionState = "Disconnecting"),
      (this._stopPromise = new Promise((n) => {
        this._stopPromiseResolver = n;
      })),
      await this._stopInternal(t),
      await this._stopPromise;
  }
  async _stopInternal(t) {
    this._stopError = t;
    try {
      await this._startInternalPromise;
    } catch {}
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        this._logger.log(
          j.Error,
          `HttpConnection.transport.stop() threw error '${n}'.`
        ),
          this._stopConnection();
      }
      this.transport = void 0;
    } else
      this._logger.log(
        j.Debug,
        "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed."
      );
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    (this._accessTokenFactory = this._options.accessTokenFactory),
      (this._httpClient._accessTokenFactory = this._accessTokenFactory);
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === Pe.WebSockets)
          (this.transport = this._constructTransport(Pe.WebSockets)),
            await this._startTransport(n, t);
        else
          throw new Error(
            "Negotiation can only be skipped when using the WebSocket transport directly."
          );
      else {
        let r = null,
          o = 0;
        do {
          if (
            ((r = await this._getNegotiationResponse(n)),
            this._connectionState === "Disconnecting" ||
              this._connectionState === "Disconnected")
          )
            throw new Et("The connection was stopped during negotiation.");
          if (r.error) throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error(
              "Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details."
            );
          if ((r.url && (n = r.url), r.accessToken)) {
            const l = r.accessToken;
            (this._accessTokenFactory = () => l),
              (this._httpClient._accessToken = l),
              (this._httpClient._accessTokenFactory = void 0);
          }
          o++;
        } while (r.url && o < Mc);
        if (o === Mc && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, t);
      }
      this.transport instanceof Pc && (this.features.inherentKeepAlive = !0),
        this._connectionState === "Connecting" &&
          (this._logger.log(
            j.Debug,
            "The HttpConnection connected successfully."
          ),
          (this._connectionState = "Connected"));
    } catch (r) {
      return (
        this._logger.log(j.Error, "Failed to start the connection: " + r),
        (this._connectionState = "Disconnected"),
        (this.transport = void 0),
        this._stopPromiseResolver(),
        Promise.reject(r)
      );
    }
  }
  async _getNegotiationResponse(t) {
    const n = {},
      [r, o] = gr();
    n[r] = o;
    const l = this._resolveNegotiateUrl(t);
    this._logger.log(j.Debug, `Sending negotiation request: ${l}.`);
    try {
      const i = await this._httpClient.post(l, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      });
      if (i.statusCode !== 200)
        return Promise.reject(
          new Error(
            `Unexpected status code returned from negotiate '${i.statusCode}'`
          )
        );
      const a = JSON.parse(i.content);
      return (
        (!a.negotiateVersion || a.negotiateVersion < 1) &&
          (a.connectionToken = a.connectionId),
        a.useStatefulReconnect && this._options._useStatefulReconnect !== !0
          ? Promise.reject(
              new Tc(
                "Client didn't negotiate Stateful Reconnect but the server did."
              )
            )
          : a
      );
    } catch (i) {
      let a = "Failed to complete negotiation with the server: " + i;
      return (
        i instanceof En &&
          i.statusCode === 404 &&
          (a =
            a +
            " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
        this._logger.log(j.Error, a),
        Promise.reject(new Tc(a))
      );
    }
  }
  _createConnectUrl(t, n) {
    return n ? t + (t.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : t;
  }
  async _createTransport(t, n, r, o) {
    let l = this._createConnectUrl(t, r.connectionToken);
    if (this._isITransport(n)) {
      this._logger.log(
        j.Debug,
        "Connection was provided an instance of ITransport, using that directly."
      ),
        (this.transport = n),
        await this._startTransport(l, o),
        (this.connectionId = r.connectionId);
      return;
    }
    const i = [],
      a = r.availableTransports || [];
    let c = r;
    for (const u of a) {
      const h = this._resolveTransportOrError(
        u,
        n,
        o,
        (c == null ? void 0 : c.useStatefulReconnect) === !0
      );
      if (h instanceof Error) i.push(`${u.transport} failed:`), i.push(h);
      else if (this._isITransport(h)) {
        if (((this.transport = h), !c)) {
          try {
            c = await this._getNegotiationResponse(t);
          } catch (p) {
            return Promise.reject(p);
          }
          l = this._createConnectUrl(t, c.connectionToken);
        }
        try {
          await this._startTransport(l, o),
            (this.connectionId = c.connectionId);
          return;
        } catch (p) {
          if (
            (this._logger.log(
              j.Error,
              `Failed to start the transport '${u.transport}': ${p}`
            ),
            (c = void 0),
            i.push(new yp(`${u.transport} failed: ${p}`, Pe[u.transport])),
            this._connectionState !== "Connecting")
          ) {
            const g = "Failed to select transport before stop() was called.";
            return this._logger.log(j.Debug, g), Promise.reject(new Et(g));
          }
        }
      }
    }
    return i.length > 0
      ? Promise.reject(
          new vp(
            `Unable to connect to the server with any of the available transports. ${i.join(
              " "
            )}`,
            i
          )
        )
      : Promise.reject(
          new Error(
            "None of the transports supported by the client are supported by the server."
          )
        );
  }
  _constructTransport(t) {
    switch (t) {
      case Pe.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new Hp(
          this._httpClient,
          this._accessTokenFactory,
          this._logger,
          this._options.logMessageContent,
          this._options.WebSocket,
          this._options.headers || {}
        );
      case Pe.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error(
            "'EventSource' is not supported in your environment."
          );
        return new Bp(
          this._httpClient,
          this._httpClient._accessToken,
          this._logger,
          this._options
        );
      case Pe.LongPolling:
        return new Pc(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${t}.`);
    }
  }
  _startTransport(t, n) {
    return (
      (this.transport.onreceive = this.onreceive),
      this.features.reconnect
        ? (this.transport.onclose = async (r) => {
            let o = !1;
            if (this.features.reconnect)
              try {
                this.features.disconnected(),
                  await this.transport.connect(t, n),
                  await this.features.resend();
              } catch {
                o = !0;
              }
            else {
              this._stopConnection(r);
              return;
            }
            o && this._stopConnection(r);
          })
        : (this.transport.onclose = (r) => this._stopConnection(r)),
      this.transport.connect(t, n)
    );
  }
  _resolveTransportOrError(t, n, r, o) {
    const l = Pe[t.transport];
    if (l == null)
      return (
        this._logger.log(
          j.Debug,
          `Skipping transport '${t.transport}' because it is not supported by this client.`
        ),
        new Error(
          `Skipping transport '${t.transport}' because it is not supported by this client.`
        )
      );
    if (Wp(n, l))
      if (t.transferFormats.map((a) => Ve[a]).indexOf(r) >= 0) {
        if (
          (l === Pe.WebSockets && !this._options.WebSocket) ||
          (l === Pe.ServerSentEvents && !this._options.EventSource)
        )
          return (
            this._logger.log(
              j.Debug,
              `Skipping transport '${Pe[l]}' because it is not supported in your environment.'`
            ),
            new gp(`'${Pe[l]}' is not supported in your environment.`, l)
          );
        this._logger.log(j.Debug, `Selecting transport '${Pe[l]}'.`);
        try {
          return (
            (this.features.reconnect = l === Pe.WebSockets ? o : void 0),
            this._constructTransport(l)
          );
        } catch (a) {
          return a;
        }
      } else
        return (
          this._logger.log(
            j.Debug,
            `Skipping transport '${Pe[l]}' because it does not support the requested transfer format '${Ve[r]}'.`
          ),
          new Error(`'${Pe[l]}' does not support ${Ve[r]}.`)
        );
    else
      return (
        this._logger.log(
          j.Debug,
          `Skipping transport '${Pe[l]}' because it was disabled by the client.`
        ),
        new xp(`'${Pe[l]}' is disabled by the client.`, l)
      );
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (
      (this._logger.log(
        j.Debug,
        `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`
      ),
      (this.transport = void 0),
      (t = this._stopError || t),
      (this._stopError = void 0),
      this._connectionState === "Disconnected")
    ) {
      this._logger.log(
        j.Debug,
        `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`
      );
      return;
    }
    if (this._connectionState === "Connecting")
      throw (
        (this._logger.log(
          j.Warning,
          `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`
        ),
        new Error(
          `HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`
        ))
      );
    if (
      (this._connectionState === "Disconnecting" && this._stopPromiseResolver(),
      t
        ? this._logger.log(
            j.Error,
            `Connection disconnected with error '${t}'.`
          )
        : this._logger.log(j.Information, "Connection disconnected."),
      this._sendQueue &&
        (this._sendQueue.stop().catch((n) => {
          this._logger.log(
            j.Error,
            `TransportSendQueue.stop() threw error '${n}'.`
          );
        }),
        (this._sendQueue = void 0)),
      (this.connectionId = void 0),
      (this._connectionState = "Disconnected"),
      this._connectionStarted)
    ) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(t);
      } catch (n) {
        this._logger.log(
          j.Error,
          `HttpConnection.onclose(${t}) threw error '${n}'.`
        );
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!Ne.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return (
      (n.href = t),
      this._logger.log(j.Information, `Normalizing '${t}' to '${n.href}'.`),
      n.href
    );
  }
  _resolveNegotiateUrl(t) {
    const n = new URL(t);
    n.pathname.endsWith("/")
      ? (n.pathname += "negotiate")
      : (n.pathname += "/negotiate");
    const r = new URLSearchParams(n.searchParams);
    return (
      r.has("negotiateVersion") ||
        r.append("negotiateVersion", this._negotiateVersion.toString()),
      r.has("useStatefulReconnect")
        ? r.get("useStatefulReconnect") === "true" &&
          (this._options._useStatefulReconnect = !0)
        : this._options._useStatefulReconnect === !0 &&
          r.append("useStatefulReconnect", "true"),
      (n.search = r.toString()),
      n.toString()
    );
  }
}
function Wp(e, t) {
  return !e || (t & e) !== 0;
}
class ma {
  constructor(t) {
    (this._transport = t),
      (this._buffer = []),
      (this._executing = !0),
      (this._sendBufferedData = new zs()),
      (this._transportResult = new zs()),
      (this._sendLoopPromise = this._sendLoop());
  }
  send(t) {
    return (
      this._bufferData(t),
      this._transportResult || (this._transportResult = new zs()),
      this._transportResult.promise
    );
  }
  stop() {
    return (
      (this._executing = !1),
      this._sendBufferedData.resolve(),
      this._sendLoopPromise
    );
  }
  _bufferData(t) {
    if (this._buffer.length && typeof this._buffer[0] != typeof t)
      throw new Error(
        `Expected data to be of type ${typeof this
          ._buffer} but was of type ${typeof t}`
      );
    this._buffer.push(t), this._sendBufferedData.resolve();
  }
  async _sendLoop() {
    for (;;) {
      if ((await this._sendBufferedData.promise, !this._executing)) {
        this._transportResult &&
          this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new zs();
      const t = this._transportResult;
      this._transportResult = void 0;
      const n =
        typeof this._buffer[0] == "string"
          ? this._buffer.join("")
          : ma._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        await this._transport.send(n), t.resolve();
      } catch (r) {
        t.reject(r);
      }
    }
  }
  static _concatBuffers(t) {
    const n = t.map((l) => l.byteLength).reduce((l, i) => l + i),
      r = new Uint8Array(n);
    let o = 0;
    for (const l of t) r.set(new Uint8Array(l), o), (o += l.byteLength);
    return r.buffer;
  }
}
class zs {
  constructor() {
    this.promise = new Promise(
      (t, n) => ([this._resolver, this._rejecter] = [t, n])
    );
  }
  resolve() {
    this._resolver();
  }
  reject(t) {
    this._rejecter(t);
  }
}
const Vp = "json";
class Qp {
  constructor() {
    (this.name = Vp), (this.version = 2), (this.transferFormat = Ve.Text);
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error(
        "Invalid input for JSON hub protocol. Expected a string."
      );
    if (!t) return [];
    n === null && (n = hs.instance);
    const r = ft.parse(t),
      o = [];
    for (const l of r) {
      const i = JSON.parse(l);
      if (typeof i.type != "number") throw new Error("Invalid payload.");
      switch (i.type) {
        case ne.Invocation:
          this._isInvocationMessage(i);
          break;
        case ne.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case ne.Completion:
          this._isCompletionMessage(i);
          break;
        case ne.Ping:
          break;
        case ne.Close:
          break;
        case ne.Ack:
          this._isAckMessage(i);
          break;
        case ne.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          n.log(
            j.Information,
            "Unknown message type '" + i.type + "' ignored."
          );
          continue;
      }
      o.push(i);
    }
    return o;
  }
  writeMessage(t) {
    return ft.write(JSON.stringify(t));
  }
  _isInvocationMessage(t) {
    this._assertNotEmptyString(
      t.target,
      "Invalid payload for Invocation message."
    ),
      t.invocationId !== void 0 &&
        this._assertNotEmptyString(
          t.invocationId,
          "Invalid payload for Invocation message."
        );
  }
  _isStreamItemMessage(t) {
    if (
      (this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for StreamItem message."
      ),
      t.item === void 0)
    )
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(t) {
    if (t.result && t.error)
      throw new Error("Invalid payload for Completion message.");
    !t.result &&
      t.error &&
      this._assertNotEmptyString(
        t.error,
        "Invalid payload for Completion message."
      ),
      this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for Completion message."
      );
  }
  _isAckMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(t, n) {
    if (typeof t != "string" || t === "") throw new Error(n);
  }
}
const qp = {
  trace: j.Trace,
  debug: j.Debug,
  info: j.Information,
  information: j.Information,
  warn: j.Warning,
  warning: j.Warning,
  error: j.Error,
  critical: j.Critical,
  none: j.None,
};
function Kp(e) {
  const t = qp[e.toLowerCase()];
  if (typeof t < "u") return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Yp {
  configureLogging(t) {
    if ((De.isRequired(t, "logging"), Xp(t))) this.logger = t;
    else if (typeof t == "string") {
      const n = Kp(t);
      this.logger = new jo(n);
    } else this.logger = new jo(t);
    return this;
  }
  withUrl(t, n) {
    return (
      De.isRequired(t, "url"),
      De.isNotEmpty(t, "url"),
      (this.url = t),
      typeof n == "object"
        ? (this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n })
        : (this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: n,
          }),
      this
    );
  }
  withHubProtocol(t) {
    return De.isRequired(t, "protocol"), (this.protocol = t), this;
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return (
      t
        ? Array.isArray(t)
          ? (this.reconnectPolicy = new Rc(t))
          : (this.reconnectPolicy = t)
        : (this.reconnectPolicy = new Rc()),
      this
    );
  }
  withServerTimeout(t) {
    return (
      De.isRequired(t, "milliseconds"),
      (this._serverTimeoutInMilliseconds = t),
      this
    );
  }
  withKeepAliveInterval(t) {
    return (
      De.isRequired(t, "milliseconds"),
      (this._keepAliveIntervalInMilliseconds = t),
      this
    );
  }
  withStatefulReconnect(t) {
    return (
      this.httpConnectionOptions === void 0 &&
        (this.httpConnectionOptions = {}),
      (this.httpConnectionOptions._useStatefulReconnect = !0),
      (this._statefulReconnectBufferSize = t == null ? void 0 : t.bufferSize),
      this
    );
  }
  build() {
    const t = this.httpConnectionOptions || {};
    if ((t.logger === void 0 && (t.logger = this.logger), !this.url))
      throw new Error(
        "The 'HubConnectionBuilder.withUrl' method must be called before building the connection."
      );
    const n = new Gp(this.url, t);
    return ha.create(
      n,
      this.logger || hs.instance,
      this.protocol || new Qp(),
      this.reconnectPolicy,
      this._serverTimeoutInMilliseconds,
      this._keepAliveIntervalInMilliseconds,
      this._statefulReconnectBufferSize
    );
  }
}
function Xp(e) {
  return e.log !== void 0;
}
class Jp {
  constructor() {
    Fn(this, "connection", null);
    Fn(this, "messageCallbacks", []);
    Fn(this, "reconnectAttempts", 0);
    Fn(this, "maxReconnectAttempts", 5);
    Fn(this, "isIntentionallyClosed", !1);
  }
  connect() {
    if (this.connection && this.connection.state === me.Connected) {
      console.log("SignalR already connected");
      return;
    }
    try {
      const n = `${mi().domain}/chatHub`;
      console.log("=== SignalR Connection ==="),
        console.log("URL:", n),
        (this.isIntentionallyClosed = !1),
        (this.connection = new Yp()
          .withUrl(n)
          .withAutomaticReconnect()
          .configureLogging(j.Information)
          .build()),
        this.connection.on("ReceiveMessage", (r) => {
          console.log("=== SignalR ReceiveMessage ==="),
            console.log("Message:", r),
            this.messageCallbacks.forEach((o) => {
              try {
                o(r);
              } catch (l) {
                console.error("Error in message callback:", l);
              }
            });
        }),
        this.connection.onclose((r) => {
          console.warn("SignalR connection closed:", r),
            !this.isIntentionallyClosed &&
              this.reconnectAttempts < this.maxReconnectAttempts &&
              (this.reconnectAttempts++,
              console.log(
                `Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`
              ),
              setTimeout(() => {
                this.connect();
              }, 3e3));
        }),
        this.connection
          .start()
          .then(() => {
            console.log("✅ SignalR connected successfully"),
              (this.reconnectAttempts = 0);
          })
          .catch((r) => {
            console.error("❌ SignalR connection failed:", r);
          });
    } catch (t) {
      throw (console.error("❌ SignalR initialization failed:", t), t);
    }
  }
  disconnect() {
    this.connection &&
      ((this.isIntentionallyClosed = !0),
      this.connection.stop(),
      (this.connection = null),
      console.log("SignalR disconnected"));
  }
  onMessage(t) {
    return (
      this.messageCallbacks.push(t),
      () => {
        this.messageCallbacks = this.messageCallbacks.filter((n) => n !== t);
      }
    );
  }
  async sendMessage() {
    try {
      const n = `${mi().domain}/api/Message`;
      console.log("=== Send Message API ==="), console.log("URL:", n);
      const r = await fetch(n, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
      const o = await r.json();
      return console.log("Send Message Response:", o), o;
    } catch (t) {
      throw (console.error("Send Message failed:", t), t);
    }
  }
  isConnected() {
    return this.connection !== null && this.connection.state === me.Connected;
  }
  getReadyState() {
    var t;
    return ((t = this.connection) == null ? void 0 : t.state) ?? null;
  }
}
const bn = new Jp(),
  Zp = ["sub_content_add", "sub_content_update", "sub_contents_delete_by_GUID"],
  eg = (e) => (!e || !e.Method ? !1 : Zp.includes(e.Method)),
  pa = async (e) => {
    if (eg(e))
      try {
        console.log("=== Trigger WebSocket Broadcast ==="),
          console.log("Method:", e.Method),
          console.log("Response:", e),
          await bn.sendMessage(),
          console.log("✅ WebSocket broadcast triggered successfully");
      } catch (t) {
        console.error("❌ Failed to trigger WebSocket broadcast:", t);
      }
  },
  tg = async (e, t) => {
    const n = { ValueAry: [e, t] };
    return (
      console.log("=== API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_addTime"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("========================"),
      await ke("/api/inspection/content_get_by_addTime", {
        method: "POST",
        body: n,
      })
    );
  },
  Ac = () => {
    const e = new Date(),
      t = new Date();
    t.setMonth(e.getMonth() - 1);
    const n = (r, o = !1) => {
      const l = r.getFullYear(),
        i = String(r.getMonth() + 1).padStart(2, "0"),
        a = String(r.getDate()).padStart(2, "0");
      return o ? `${l}-${i}-${a} 23:59:59` : `${l}-${i}-${a} 00:00:00`;
    };
    return [n(t), n(e, !0)];
  },
  ng = (e, t = !1) => {
    const n = new Map();
    return (
      (t
        ? e
        : e.filter((o) =>
            !o.Sub_content || o.Sub_content.length === 0
              ? !0
              : !o.Sub_content.some((l) => l.STATE === "已鎖定")
          )
      ).forEach((o) => {
        var a;
        const l = `${o.CODE}-${o.SKDIACODE}`,
          i =
            ((a = o.Sub_content) == null
              ? void 0
              : a.reduce((c, u) => c + (parseInt(u.END_QTY) || 0), 0)) || 0;
        if (n.has(l)) {
          const c = n.get(l);
          (c.totalStartQty += parseInt(o.START_QTY) || 0),
            (c.totalReceivedQty += i),
            c.items.push(o);
        } else
          n.set(l, {
            CODE: o.CODE,
            SKDIACODE: o.SKDIACODE,
            CHT_NAME: o.CHT_NAME,
            NAME: o.NAME,
            BRD: o.BRD,
            PAKAGE: o.PAKAGE,
            totalStartQty: parseInt(o.START_QTY) || 0,
            totalReceivedQty: i,
            items: [o],
          });
      }),
      Array.from(n.values()).sort((o, l) => o.CODE.localeCompare(l.CODE))
    );
  },
  ga = async (e, t, n, r, o) => {
    const l = { Data: { Master_GUID: e, LOT: t, END_QTY: n, VAL: r, OP: o } };
    console.log("=== API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_content_add"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(l, null, 2)),
      console.log("========================");
    const i = await ke("/api/inspection/sub_content_add", {
      method: "POST",
      body: l,
    });
    return await pa(i), i;
  },
  df = async (e, t) => {
    const n = { Data: [{ GUID: e, Master_GUID: t }] };
    console.log("=== Delete API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_contents_delete_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("================================");
    const r = await ke("/api/inspection/sub_contents_delete_by_GUID", {
      method: "POST",
      body: n,
    });
    return await pa(r), r;
  },
  Qr = async (e) => {
    const t = new Date(),
      n =
        t.getFullYear() +
        "-" +
        String(t.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(t.getDate()).padStart(2, "0") +
        " " +
        String(t.getHours()).padStart(2, "0") +
        ":" +
        String(t.getMinutes()).padStart(2, "0") +
        ":" +
        String(t.getSeconds()).padStart(2, "0"),
      r = { Data: [{ ...e, OP_TIME: n }] };
    console.log("=== Update API Request Debug ==="),
      console.log("URL:", "/api/inspection/sub_content_update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(r, null, 2)),
      console.log("================================");
    const o = await ke("/api/inspection/sub_content_update", {
      method: "POST",
      body: r,
    });
    return await pa(o), o;
  },
  rg = async (e, t, n, r) => {
    const o = {
      Data: {
        GUID: e.GUID,
        Master_GUID: e.Master_GUID,
        PON: e.PON,
        IC_SN: e.IC_SN,
        CODE: e.CODE,
        NAME: e.NAME,
        BRD: e.BRD || "",
        SKDIACODE: e.SKDIACODE,
        BARCODE1: e.BARCODE1 || "",
        BARCODE2: e.BARCODE2 || "",
        START_QTY: e.START_QTY,
        ADD_TIME: e.ADD_TIME,
        SEQ: e.SEQ || "",
        FREE_CHARGE_FLAG: e.FREE_CHARGE_FLAG || "",
        API_RETURN_NOTE: e.API_RETURN_NOTE || "",
        NOTE: e.NOTE || "",
        CHT_NAME: e.CHT_NAME,
        PAKAGE: e.PAKAGE,
        END_QTY: e.END_QTY || e.START_QTY,
        textVision: { op_id: n, op_name: r, base64: t },
      },
    };
    return (
      console.log("=== Text Vision API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/analyze_single"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(o, null, 2)),
      console.log("====================================="),
      await ke("/api/pcmpo/analyze_single", { method: "POST", body: o })
    );
  },
  sg = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get Inspection by IC_SN API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_IC_SN"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("================================================"),
      await ke("/api/inspection/content_get_by_IC_SN", {
        method: "POST",
        body: t,
      })
    );
  },
  og = async (e, t, n) => {
    const r = {
      Data: {
        GUID: e,
        Master_GUID: t.GUID,
        IC_SN: t.IC_SN,
        op_name: n.op_name,
        op_id: n.op_id,
        op_time: n.op_time,
        batch_num: n.batch_num,
        po_num: n.po_num,
        name: t.NAME,
        cht_name: t.CHT_NAME,
        qty: t.START_QTY,
        expirydate: n.expirydate,
        code: t.CODE,
      },
    };
    return (
      console.log("=== Update Text Vision API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(r, null, 2)),
      console.log("==========================================="),
      await ke("/api/pcmpo/update", { method: "POST", body: r })
    );
  },
  ff = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get by MasterGUID API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/get_by_MasterGUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("====================================="),
      await ke("/api/pcmpo/get_by_MasterGUID", { method: "POST", body: t })
    );
  },
  lg = async (e) => {
    const t = { ValueAry: [e] };
    return (
      console.log("=== Get by GUID API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/get_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("====================================="),
      await ke("/api/pcmpo/get_by_GUID", { method: "POST", body: t })
    );
  },
  ig = async (e) => {
    const t = { Data: e };
    return (
      console.log("=== Update Text Vision Data API Request Debug ==="),
      console.log("URL:", "/api/pcmpo/update"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("================================================"),
      await ke("/api/pcmpo/update", { method: "POST", body: t })
    );
  },
  Oc = async (e) => {
    const t = { Value: e };
    return (
      console.log("=== Search by Barcode API Request Debug ==="),
      console.log("URL:", "/api/MED_page/serch_by_BarCode"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("=========================================="),
      await ke("/api/MED_page/serch_by_BarCode", { method: "POST", body: t })
    );
  },
  Lc = async (e, t) => {
    const n = { ValueAry: [e, t] };
    return (
      console.log("=== Today Inspection Count API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_get_by_sub_content_addTime"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(n, null, 2)),
      console.log("Date Range:", e, "to", t),
      console.log("=================================================="),
      await ke("/api/inspection/content_get_by_sub_content_addTime", {
        method: "POST",
        body: n,
      })
    );
  },
  ag = async (e, t, n) => {
    const r = new FormData();
    return (
      r.append("file", e),
      r.append("op_id", t),
      r.append("op_name", n),
      console.log("=== Excel Upload API Request Debug ==="),
      console.log("URL:", "/api/inspection/excel_upload_extra"),
      console.log("Method:", "POST (multipart/form-data)"),
      console.log("File Name:", e.name),
      console.log("File Size:", e.size, "bytes"),
      console.log("Operator ID:", t),
      console.log("Operator Name:", n),
      console.log("FormData entries:", Array.from(r.entries())),
      console.log("=========================================="),
      await of("/api/inspection/excel_upload_extra", {
        method: "POST",
        body: r,
      })
    );
  },
  hf = async () => {
    const e = {};
    return (
      console.log("=== Get Med Cloud API Request Debug ==="),
      console.log("URL:", "/api/med_page/get_med_cloud"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(e, null, 2)),
      console.log("=========================================="),
      await ke("/api/med_page/get_med_cloud", { method: "POST", body: e })
    );
  },
  cg = async (e, t, n, r, o, l, i) => {
    const a = {
      Data: [
        {
          PON: e,
          IC_SN: t,
          CODE: n,
          NAME: r,
          BRD: o,
          SKDIACODE: l,
          START_QTY: i,
        },
      ],
    };
    return (
      console.log("=== Manual Create Inspection API Request Debug ==="),
      console.log("URL:", "/api/inspection/content_add"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(a, null, 2)),
      console.log("=================================================="),
      await ke("/api/inspection/content_add", { method: "POST", body: a })
    );
  },
  ug = async (e) => {
    const t = { Data: [{ GUID: e }] };
    return (
      console.log("=== Delete Inspection Content API Request Debug ==="),
      console.log("URL:", "/api/inspection/contents_delete_by_GUID"),
      console.log("Method:", "POST"),
      console.log("Request Data:", JSON.stringify(t, null, 2)),
      console.log("=================================================="),
      await ke("/api/inspection/contents_delete_by_GUID", {
        method: "POST",
        body: t,
      })
    );
  },
  dg = async (e) => {
    const t = { Data: e };
    return (
      console.log("=== Download Excel API Request Debug ==="),
      console.log("URL:", "/api/inspection/download_excle_by_content"),
      console.log("Method:", "POST"),
      console.log("Request Data:", t),
      console.log("=========================================="),
      await ap("/api/inspection/download_excle_by_content", {
        method: "POST",
        body: t,
      })
    );
  },
  fg = async (e, t) => {
    const n = new FormData();
    return (
      n.append("file", e),
      n.append("CT", t),
      console.log("=== Upload Sub Content Excel API Request Debug ==="),
      console.log("URL:", "/api/inspection/excel_upload_sub_content_extra"),
      console.log("Method:", "POST (multipart/form-data)"),
      console.log("File Name:", e.name),
      console.log("File Size:", e.size, "bytes"),
      console.log("CT (Operator):", t),
      console.log("FormData entries:", Array.from(n.entries())),
      console.log("===================================================="),
      await of("/api/inspection/excel_upload_sub_content_extra", {
        method: "POST",
        body: n,
      })
    );
  },
  hg = async (e) => (
    console.log("=== Barcode Scan API Request ==="),
    console.log("URL:", "/barcode"),
    console.log("Method:", "POST (multipart/form-data)"),
    console.log("=========================================="),
    await ip("/barcode", { method: "POST", body: e })
  ),
  mg = ({ data: e, loading: t, onRowClick: n }) => {
    const { t: r } = Ns(),
      o = (i) => {
        if (!i) return "";
        try {
          const a = new Date(i),
            c = new Date();
          a.setHours(0, 0, 0, 0), c.setHours(0, 0, 0, 0);
          const u = a.getTime() - c.getTime(),
            h = Math.ceil(u / (1e3 * 60 * 60 * 24)),
            p = a
              .toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\//g, "/");
          return h === 0
            ? `${p} (${r("delivery.today")})`
            : h < 0
            ? `${p} (${r("delivery.overdue")} ${Math.abs(h)} ${r(
                "delivery.days"
              )})`
            : `${p} (${r("delivery.remaining")} ${h} ${r("delivery.days")})`;
        } catch (a) {
          return console.error("Error formatting arrival time:", a), i;
        }
      },
      l = (i) => {
        if (!i) return "text-gray-500";
        try {
          const a = new Date(i),
            c = new Date();
          a.setHours(0, 0, 0, 0), c.setHours(0, 0, 0, 0);
          const u = a.getTime() - c.getTime(),
            h = Math.ceil(u / (1e3 * 60 * 60 * 24));
          return h === 0
            ? "text-blue-600 font-medium"
            : h < 0
            ? "text-red-600 font-medium"
            : "text-green-600 font-medium";
        } catch {
          return "text-gray-500";
        }
      };
    return t
      ? s.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border p-8 text-center",
          children: [
            s.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4",
            }),
            s.jsx("p", {
              className: "text-gray-600",
              children: "載入驗收資料中...",
            }),
          ],
        })
      : e.length === 0
      ? s.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border p-8 text-center",
          children: [
            s.jsx(An, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
            s.jsx("p", {
              className: "text-gray-600",
              children: "查無驗收資料",
            }),
          ],
        })
      : s.jsx("div", {
          className:
            "bg-white rounded-lg shadow-sm border overflow-hidden mb-6",
          children: s.jsx("div", {
            className: "overflow-x-auto",
            children: s.jsxs("table", {
              className: "min-w-full divide-y divide-gray-200",
              children: [
                s.jsx("thead", {
                  className: "bg-gray-50",
                  children: s.jsxs("tr", {
                    children: [
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.drug_code"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.item_number"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.drug_name"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.manufacturer"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.arrival_time"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.received_expected_qty"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                        children: r("table.detail_count"),
                      }),
                      s.jsx("th", {
                        className:
                          "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                      }),
                    ],
                  }),
                }),
                s.jsx("tbody", {
                  className: "bg-white divide-y divide-gray-200",
                  children: e.map((i, a) =>
                    s.jsxs(
                      "tr",
                      {
                        className:
                          "hover:bg-gray-50 cursor-pointer transition-colors",
                        onClick: () => n(i),
                        children: [
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm font-medium text-gray-900",
                              children: i.CODE,
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm text-gray-900",
                              children: i.SKDIACODE,
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4",
                            children: s.jsxs("div", {
                              className: "text-sm text-gray-900",
                              children: [
                                s.jsx("div", {
                                  className: "font-medium",
                                  children: i.CHT_NAME || i.NAME,
                                }),
                                i.CHT_NAME &&
                                  i.NAME &&
                                  i.CHT_NAME !== i.NAME &&
                                  s.jsx("div", {
                                    className: "text-gray-500 text-xs mt-1",
                                    children: i.NAME,
                                  }),
                              ],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("span", {
                              className: "text-sm text-gray-900",
                              children: i.BRD || "未指定",
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsx("div", {
                              className: "text-sm space-y-1",
                              children: i.items.map((c, u) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className: `flex items-center ${l(
                                      c.DELIVERY_TIME
                                    )}`,
                                    children: [
                                      s.jsx(ds, {
                                        className: "w-4 h-4 mr-1 text-gray-400",
                                      }),
                                      o(c.DELIVERY_TIME),
                                    ],
                                  },
                                  u
                                )
                              ),
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsxs("div", {
                              className: "text-sm text-gray-900",
                              children: [
                                s.jsx("span", {
                                  className: "font-semibold text-green-600",
                                  children: i.totalReceivedQty.toLocaleString(),
                                }),
                                s.jsx("span", {
                                  className: "text-gray-400 mx-1",
                                  children: "/",
                                }),
                                s.jsx("span", {
                                  className: "font-semibold text-blue-600",
                                  children: i.totalStartQty.toLocaleString(),
                                }),
                                s.jsx("span", {
                                  className: "text-gray-500 ml-1",
                                  children: i.PAKAGE,
                                }),
                              ],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: s.jsxs("span", {
                              className:
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                              children: [i.items.length, " 筆"],
                            }),
                          }),
                          s.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap text-right",
                            children: s.jsx(Zd, {
                              className: "w-5 h-5 text-gray-400",
                            }),
                          }),
                        ],
                      },
                      `${i.CODE}-${i.SKDIACODE}`
                    )
                  ),
                }),
              ],
            }),
          }),
        });
  },
  pg = ({ isOpen: e, onClose: t, inspectionItem: n, onSuccess: r }) => {
    const [o, l] = x.useState({ lot: "", endQty: "", val: "" }),
      [i, a] = x.useState(!1),
      [c, u] = x.useState(null),
      [h, p] = x.useState(""),
      [g, y] = x.useState(null),
      [b, S] = x.useState(null),
      C = () =>
        n != null && n.Sub_content
          ? n.Sub_content.reduce((D, F) => D + (parseInt(F.END_QTY) || 0), 0)
          : 0,
      f = () => {
        const D = parseInt((n == null ? void 0 : n.START_QTY) || "0"),
          F = C();
        return Math.max(0, D - F);
      },
      d = () => {
        l({ lot: "", endQty: f().toString(), val: "" }),
          u(null),
          p(""),
          y(null),
          S(null);
      };
    Ce.useEffect(() => {
      if (n) {
        const D = f();
        l((F) => ({ ...F, endQty: D.toString() }));
      }
    }, [n, C()]);
    const m = () => {
        d(), t();
      },
      v = (D) => {
        p((F) => F + D);
      },
      _ = (D) => {
        h && (b !== null && g ? k() : S(parseFloat(h)), y(D), p(""));
      },
      k = () => {
        if (b !== null && g && h) {
          const D = parseFloat(h);
          let F = 0;
          switch (g) {
            case "+":
              F = b + D;
              break;
            case "-":
              F = b - D;
              break;
            case "*":
              F = b * D;
              break;
            case "/":
              F = b / D;
              break;
            default:
              return;
          }
          p(F.toString()), y(null), S(null);
        }
      },
      R = () => {
        p(""), y(null), S(null);
      },
      M = () => {
        h && l((D) => ({ ...D, endQty: h }));
      },
      V = async (D) => {
        if ((D.preventDefault(), !n)) return;
        const F = parseInt(o.endQty) || 0,
          P = f();
        if (F > P) {
          u(`實收數量不可超過剩餘可收數量 ${P}`);
          return;
        }
        const T = at();
        if (!T) {
          u("無法取得操作人資訊");
          return;
        }
        a(!0), u(null);
        try {
          const B = await ga(n.GUID, o.lot, o.endQty, o.val, T);
          B.Code === 200 ? (r(), m()) : u(B.Result || "新增失敗");
        } catch (B) {
          console.error("Add sub content error:", B),
            u(B instanceof Error ? B.message : "系統錯誤，請稍後再試");
        } finally {
          a(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(mr, { className: "w-5 h-5 mr-2" }),
                          "新增子明細",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: n.CHT_NAME || n.NAME,
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: m,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: V,
                className: "p-6",
                children: [
                  c &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: c,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "批號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: o.lot,
                            onChange: (D) => l({ ...o, lot: D.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入批號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "效期 *",
                          }),
                          s.jsx("input", {
                            type: "date",
                            value: o.val,
                            onChange: (D) => l({ ...o, val: D.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "實收數量 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "number",
                                value: o.endQty,
                                onChange: (D) =>
                                  l({ ...o, endQty: D.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                min: "0",
                                step: "1",
                                placeholder: "請輸入實收數量",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx("span", {
                                  className: "text-gray-500 text-sm",
                                  children: n.PAKAGE,
                                }),
                              }),
                            ],
                          }),
                          s.jsxs("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: [
                              "應收數量: ",
                              n.START_QTY,
                              " ",
                              n.PAKAGE,
                            ],
                          }),
                          s.jsxs("p", {
                            className: "text-xs text-blue-600 mt-1",
                            children: [
                              "已實收: ",
                              C(),
                              " ",
                              n.PAKAGE,
                              " | 剩餘可收: ",
                              f(),
                              " ",
                              n.PAKAGE,
                            ],
                          }),
                          s.jsxs("div", {
                            className: "mt-3 p-3 bg-gray-50 rounded-lg",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "小算盤",
                                  }),
                                  s.jsx("div", {
                                    className: "flex-1 mx-3",
                                    children: s.jsx("input", {
                                      type: "text",
                                      value: h,
                                      readOnly: !0,
                                      className:
                                        "w-full px-2 py-1 text-right border border-gray-300 rounded bg-white text-sm",
                                      placeholder: "0",
                                    }),
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: M,
                                    disabled: !h,
                                    className:
                                      "px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: "確認",
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "grid grid-cols-4 gap-1",
                                children: [
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: R,
                                    className:
                                      "p-2 bg-red-500 text-white rounded text-sm hover:bg-red-600",
                                    children: "C",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => p((D) => D.slice(0, -1)),
                                    className:
                                      "p-2 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400",
                                    children: "⌫",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => _("/"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "÷",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => _("*"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "×",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("7"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "7",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("8"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "8",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("9"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "9",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => _("-"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "-",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("4"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "4",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("5"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "5",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("6"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "6",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => _("+"),
                                    className:
                                      "p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600",
                                    children: "+",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("1"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "1",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("2"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "2",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("3"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: "3",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: k,
                                    className:
                                      "p-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 row-span-2",
                                    children: "=",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("0"),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 col-span-2",
                                    children: "0",
                                  }),
                                  s.jsx("button", {
                                    type: "button",
                                    onClick: () => v("."),
                                    className:
                                      "p-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50",
                                    children: ".",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: m,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: i,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: i,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: i
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "新增中...",
                              ],
                            })
                          : "新增",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  gg = ({ isOpen: e, onClose: t, onConfirm: n, subContentData: r }) => {
    const [o, l] = x.useState(!1),
      [i, a] = x.useState(null),
      c = async () => {
        if (r) {
          l(!0), a(null);
          try {
            const u = await df(r.subContentGuid, r.masterGuid);
            console.log("Response Data", u),
              u.Code === 200 ? n() : a(u.Result || "刪除失敗");
          } catch (u) {
            console.error("Delete sub content error:", u),
              a(u instanceof Error ? u.message : "系統錯誤，請稍後再試");
          } finally {
            l(!1);
          }
        }
      };
    return !e || !r
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full flex items-center justify-center",
                        children: s.jsx(Jd, {
                          className: "w-6 h-6 text-red-600",
                        }),
                      }),
                      s.jsx("div", {
                        className: "ml-4",
                        children: s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    disabled: o,
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  i &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: i,
                    }),
                  s.jsxs("div", {
                    className: "mb-6",
                    children: [
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children: "您確定要刪除以下子明細嗎？此操作無法復原。",
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4 space-y-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品名稱:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.itemName,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "批號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.lot,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "實收數量:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.qty,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: o,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: c,
                        disabled: o,
                        className:
                          "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: o
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "刪除中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(On, { className: "w-4 h-4 mr-2" }),
                                "確認刪除",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  xg = ({
    isOpen: e,
    onClose: t,
    subContentData: n,
    onSuccess: r,
    inspectionItem: o,
  }) => {
    const [l, i] = x.useState({ lot: "", endQty: "", val: "" }),
      [a, c] = x.useState(!1),
      [u, h] = x.useState(null),
      p = () =>
        o != null && o.Sub_content
          ? o.Sub_content.reduce(
              (C, f) =>
                f.GUID === (n == null ? void 0 : n.GUID)
                  ? C
                  : C + (parseInt(f.END_QTY) || 0),
              0
            )
          : 0,
      g = () => {
        if (!o) return 0;
        const C = parseInt(o.START_QTY || "0"),
          f = p();
        return Math.max(0, C - f);
      };
    x.useEffect(() => {
      if (n) {
        let C = "";
        if (n.VAL)
          try {
            const f = new Date(n.VAL),
              d = f.getFullYear(),
              m = String(f.getMonth() + 1).padStart(2, "0"),
              v = String(f.getDate()).padStart(2, "0");
            C = `${d}-${m}-${v}`;
          } catch {
            console.warn("Invalid date format:", n.VAL);
          }
        i({ lot: n.LOT || "", endQty: n.END_QTY || "", val: C });
      }
    }, [n]);
    const y = () => {
        i({ lot: "", endQty: "", val: "" }), h(null);
      },
      b = () => {
        y(), t();
      },
      S = async (C) => {
        if ((C.preventDefault(), !n)) return;
        const f = parseInt(l.endQty) || 0,
          d = g();
        if (f > d) {
          h(`實收數量不可超過剩餘可收數量 ${d}`);
          return;
        }
        const m = at();
        if (!m) {
          h("無法取得操作人資訊");
          return;
        }
        c(!0), h(null);
        try {
          const v = l.val ? `${l.val} 00:00:00` : "",
            _ = { ...n, LOT: l.lot, END_QTY: l.endQty, VAL: v, OP: m },
            k = await Qr(_);
          console.log("Response Data", k),
            k.Code === 200 ? (r(), b()) : h(k.Result || "更新失敗");
        } catch (v) {
          console.error("Update sub content error:", v),
            h(v instanceof Error ? v.message : "系統錯誤，請稍後再試");
        } finally {
          c(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(ca, { className: "w-5 h-5 mr-2" }),
                          "編輯子明細",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: n.CHT_NAME || n.NAME,
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: b,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: S,
                className: "p-6",
                children: [
                  u &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: u,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "批號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: l.lot,
                            onChange: (C) => i({ ...l, lot: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入批號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "效期 *",
                          }),
                          s.jsx("input", {
                            type: "date",
                            value: l.val,
                            onChange: (C) => i({ ...l, val: C.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "實收數量 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "number",
                                value: l.endQty,
                                onChange: (C) =>
                                  i({ ...l, endQty: C.target.value }),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                min: "0",
                                step: "1",
                                placeholder: "請輸入實收數量",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx("span", {
                                  className: "text-gray-500 text-sm",
                                  children: n.PAKAGE,
                                }),
                              }),
                            ],
                          }),
                          o &&
                            s.jsxs(s.Fragment, {
                              children: [
                                s.jsxs("p", {
                                  className: "text-xs text-gray-500 mt-1",
                                  children: [
                                    "應收數量: ",
                                    o.START_QTY,
                                    " ",
                                    o.PAKAGE,
                                  ],
                                }),
                                s.jsxs("p", {
                                  className: "text-xs text-blue-600 mt-1",
                                  children: [
                                    "其他已實收: ",
                                    p(),
                                    " ",
                                    o.PAKAGE,
                                    " | 剩餘可收: ",
                                    g(),
                                    " ",
                                    o.PAKAGE,
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: b,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: a,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: a,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: a
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "更新中...",
                              ],
                            })
                          : "更新",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  yg = ({ isOpen: e, onClose: t, result: n, onConfirmSubmit: r }) => {
    const [o, l] = Ce.useState(!1),
      [i, a] = Ce.useState(null);
    if (!e || !n) return null;
    const c = (h) => {
        if (!h) return "";
        try {
          return new Date(h)
            .toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "/");
        } catch {
          return h;
        }
      },
      u = async () => {
        if (!n) return;
        const h = at();
        if (!h) {
          a("無法取得操作人資訊");
          return;
        }
        l(!0), a(null);
        try {
          console.log("=== Check API Request Debug ===");
          const p = { ValueAry: [n.batch_id, n.GUID] };
          console.log("Check Request Data:", JSON.stringify(p, null, 2));
          const g = await ke("/api/pcmpo/check", { method: "POST", body: p });
          if (
            (console.log("Check Response:", JSON.stringify(g, null, 2)),
            g.Code !== 200)
          ) {
            a(g.Result || "確認檢查失敗");
            return;
          }
          console.log("=== Add Sub Content API Request Debug ===");
          const y = n.expirydate ? `${n.expirydate} 00:00:00` : "",
            b = await ga(n.Master_GUID, n.batch_num, n.qty, y, h);
          console.log("Add Sub Content Response:", JSON.stringify(b, null, 2)),
            b.Code === 200
              ? (console.log("✅ 確認送出成功"), r && r(), t())
              : a(b.Result || "新增子明細失敗");
        } catch (p) {
          console.error("Confirm submit error:", p),
            console.log("❌ 確認送出失敗"),
            a(p instanceof Error ? p.message : "系統錯誤，請稍後再試");
        } finally {
          l(!1);
        }
      };
    return s.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
      children: s.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b bg-gray-50",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("h3", {
                    className:
                      "text-lg font-semibold text-gray-900 flex items-center",
                    children: "出貨單辨識結果",
                  }),
                  s.jsxs("div", {
                    className: "flex items-center mt-1",
                    children: [
                      s.jsx(It, { className: "w-4 h-4 text-green-500 mr-1" }),
                      s.jsx("span", {
                        className: "text-sm text-gray-600",
                        children: n.Result,
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("button", {
                    onClick: u,
                    disabled: o,
                    className:
                      "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                    children: o
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(de, { size: "small", className: "mr-2" }),
                            "處理中...",
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(nf, { className: "w-4 h-4 mr-2" }),
                            "確認送出",
                          ],
                        }),
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
            children: s.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                s.jsxs("div", {
                  children: [
                    s.jsx("h4", {
                      className: "text-md font-medium text-gray-900 mb-3",
                      children: "原始圖片",
                    }),
                    n.base64
                      ? s.jsx("div", {
                          className: "border rounded-lg overflow-hidden",
                          children: s.jsx("img", {
                            src: n.base64.startsWith("data:")
                              ? n.base64
                              : `data:image/jpeg;base64,${n.base64}`,
                            alt: "出貨單",
                            className: "w-full h-auto max-h-96 object-contain",
                          }),
                        })
                      : s.jsxs("div", {
                          className:
                            "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center",
                          children: [
                            s.jsx(Fo, {
                              className: "w-12 h-12 text-gray-400 mx-auto mb-2",
                            }),
                            s.jsx("p", {
                              className: "text-gray-500",
                              children: "無圖片資料",
                            }),
                          ],
                        }),
                  ],
                }),
                s.jsx("div", {
                  className: "space-y-6",
                  children: s.jsxs("div", {
                    children: [
                      s.jsx("h4", {
                        className: "text-md font-medium text-gray-900 mb-3",
                        children: "辨識資訊",
                      }),
                      s.jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsxs("h5", {
                            className:
                              "text-sm font-medium text-blue-800 mb-2 flex items-center",
                            children: [
                              s.jsx(An, { className: "w-4 h-4 mr-1" }),
                              "藥品資訊",
                            ],
                          }),
                          s.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "藥名:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "中文名:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.cht_name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("span", {
                                    className: "text-sm text-blue-600",
                                    children: "藥品碼:",
                                  }),
                                  s.jsx("span", {
                                    className:
                                      "text-sm font-medium text-blue-900 ml-2",
                                    children: n.code,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-200",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-green-800 mb-2",
                            children: "數量",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className:
                                "text-3xl font-bold text-green-700 mb-1",
                              children: n.qty,
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-yellow-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-yellow-800 mb-2",
                            children: "批號",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className: "text-2xl font-bold text-yellow-900",
                              children: n.batch_num,
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-purple-50 rounded-lg p-4 mb-4",
                        children: [
                          s.jsx("h5", {
                            className:
                              "text-sm font-medium text-purple-800 mb-2",
                            children: "效期",
                          }),
                          s.jsx("div", {
                            className: "text-center",
                            children: s.jsx("div", {
                              className: "text-2xl font-bold text-purple-900",
                              children: c(n.expirydate),
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4",
                        children: [
                          s.jsx("h5", {
                            className: "text-sm font-medium text-gray-800 mb-2",
                            children: "其他資訊",
                          }),
                          s.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "請購單號:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.po_num,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "操作人員:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.op_name,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "辨識時間:",
                                  }),
                                  s.jsx("span", {
                                    className: "font-medium text-gray-900",
                                    children: n.op_time,
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  s.jsx("span", {
                                    className: "text-gray-600",
                                    children: "確認狀態:",
                                  }),
                                  s.jsx("span", {
                                    className: `font-medium ${
                                      n.check === "未確認"
                                        ? "text-yellow-600"
                                        : "text-green-600"
                                    }`,
                                    children: n.check,
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
              ],
            }),
          }),
          i &&
            s.jsxs("div", {
              className:
                "mx-6 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
              children: [
                s.jsx(It, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                i,
              ],
            }),
          s.jsx("div", {
            className: "flex justify-end p-6 border-t bg-gray-50",
            children: s.jsx("button", {
              onClick: t,
              className:
                "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
              children: "關閉",
            }),
          }),
        ],
      }),
    });
  },
  vg = ({ isOpen: e, onClose: t, inspectionItem: n, onDataUpdate: r }) => {
    const [o, l] = x.useState(null),
      [i, a] = x.useState(null),
      [c, u] = x.useState(!1),
      [h, p] = x.useState(null),
      [g, y] = x.useState(null),
      [b, S] = x.useState(!1),
      C = x.useRef(null),
      f = () => {
        l(null), a(null), p(null), y(null), C.current && (C.current.value = "");
      },
      d = () => {
        f(), t();
      },
      m = (k) => {
        var V;
        const R = (V = k.target.files) == null ? void 0 : V[0];
        if (!R) return;
        if (!R.type.startsWith("image/")) {
          p("請選擇圖片檔案");
          return;
        }
        if (R.size > 10 * 1024 * 1024) {
          p("檔案大小不可超過 10MB");
          return;
        }
        l(R), p(null);
        const M = new FileReader();
        (M.onload = (D) => {
          var F;
          a((F = D.target) == null ? void 0 : F.result);
        }),
          M.readAsDataURL(R);
      },
      v = (k) =>
        new Promise((R, M) => {
          const V = new FileReader();
          (V.onload = (D) => {
            var P;
            const F = document.createElement("img");
            (F.onload = () => {
              let K = F.width,
                L = F.height;
              K > L
                ? K > 1920 && ((L = Math.round((L * 1920) / K)), (K = 1920))
                : L > 1920 && ((K = Math.round((K * 1920) / L)), (L = 1920));
              const Q = document.createElement("canvas");
              (Q.width = K), (Q.height = L);
              const E = Q.getContext("2d");
              if (!E) {
                M(new Error("無法建立 Canvas context"));
                return;
              }
              E.drawImage(F, 0, 0, K, L),
                Q.toBlob(
                  ($) => {
                    if (!$) {
                      M(new Error("圖片壓縮失敗"));
                      return;
                    }
                    const A = new FileReader();
                    (A.onload = () => {
                      const G = A.result.split(",")[1];
                      console.log("壓縮結果:", {
                        原始大小: `${(k.size / 1024 / 1024).toFixed(2)} MB`,
                        壓縮後大小: `${($.size / 1024 / 1024).toFixed(2)} MB`,
                        壓縮比例: `${((1 - $.size / k.size) * 100).toFixed(
                          1
                        )}%`,
                        原始尺寸: `${F.width}x${F.height}`,
                        壓縮後尺寸: `${K}x${L}`,
                      }),
                        R({
                          base64: G,
                          originalSize: k.size,
                          compressedSize: $.size,
                        });
                    }),
                      (A.onerror = M),
                      A.readAsDataURL($);
                  },
                  "image/jpeg",
                  0.92
                );
            }),
              (F.onerror = M),
              (F.src = (P = D.target) == null ? void 0 : P.result);
          }),
            (V.onerror = M),
            V.readAsDataURL(k);
        }),
      _ = async () => {
        if (!o || !n) return;
        const k = da(),
          R = at();
        if (!k || !R) {
          p("無法取得操作人資訊");
          return;
        }
        u(!0), p(null);
        try {
          const { base64: M, originalSize: V, compressedSize: D } = await v(o);
          console.log("=== Upload Shipping Document Debug ==="),
            console.log("Selected file:", o.name),
            console.log("原始大小:", `${(V / 1024 / 1024).toFixed(2)} MB`),
            console.log("壓縮後大小:", `${(D / 1024 / 1024).toFixed(2)} MB`),
            console.log("壓縮比例:", `${((1 - D / V) * 100).toFixed(1)}%`),
            console.log("Base64 length:", M.length),
            console.log("Operator ID:", k),
            console.log("Operator Name:", R),
            console.log("Inspection Item:", n);
          const F = await rg(n, M, k, R);
          console.log("=== API Response Debug ==="),
            console.log("Response Code:", F.Code),
            console.log("Response Result:", F.Result),
            console.log("Response Data:", F.Data),
            console.log("Full Response:", JSON.stringify(F, null, 2)),
            console.log("====================================="),
            F.Code === 200 && F.Data && F.Data.length > 0
              ? (console.log("✅ Analysis successful, opening result modal"),
                y(F.Data[0]),
                S(!0))
              : (console.log("❌ Analysis failed or no data returned"),
                p(F.Result || "分析失敗"));
        } catch (M) {
          console.error("Upload and analyze error:", M),
            console.log("❌ Exception occurred during upload/analysis"),
            p(M instanceof Error ? M.message : "系統錯誤，請稍後再試");
        } finally {
          u(!1);
        }
      };
    return !e || !n
      ? null
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-6 border-b",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsxs("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 flex items-center",
                            children: [
                              s.jsx(pr, { className: "w-5 h-5 mr-2" }),
                              "上傳出貨單",
                            ],
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: n.CHT_NAME || n.NAME,
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: d,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors",
                        children: s.jsx(Ie, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-6",
                    children: [
                      h &&
                        s.jsxs("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                          children: [
                            s.jsx(ut, {
                              className: "w-4 h-4 mr-2 flex-shrink-0",
                            }),
                            h,
                          ],
                        }),
                      s.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "選擇圖片檔案",
                              }),
                              s.jsxs("div", {
                                className:
                                  "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                                onClick: () => {
                                  var k;
                                  return (k = C.current) == null
                                    ? void 0
                                    : k.click();
                                },
                                children: [
                                  s.jsx("input", {
                                    ref: C,
                                    type: "file",
                                    accept: "image/*",
                                    onChange: m,
                                    className: "hidden",
                                  }),
                                  i
                                    ? s.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          s.jsx("img", {
                                            src: i,
                                            alt: "預覽",
                                            className:
                                              "max-w-full max-h-48 mx-auto rounded-lg shadow-sm",
                                          }),
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children:
                                              o == null ? void 0 : o.name,
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children: "點擊重新選擇檔案",
                                          }),
                                        ],
                                      })
                                    : s.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          s.jsx(tf, {
                                            className:
                                              "w-12 h-12 text-gray-400 mx-auto",
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("p", {
                                                className:
                                                  "text-sm text-gray-600",
                                                children: "點擊選擇圖片檔案",
                                              }),
                                              s.jsx("p", {
                                                className:
                                                  "text-xs text-gray-500",
                                                children:
                                                  "支援 JPG, PNG, GIF 等格式，檔案大小限制 10MB",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "bg-gray-50 rounded-lg p-4",
                            children: [
                              s.jsxs("h4", {
                                className:
                                  "text-sm font-medium text-gray-700 mb-2 flex items-center",
                                children: [
                                  s.jsx(Fo, { className: "w-4 h-4 mr-1" }),
                                  "驗收單資訊",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "space-y-1 text-sm text-gray-600",
                                children: [
                                  s.jsxs("div", {
                                    children: ["驗收單號: ", n.IC_SN],
                                  }),
                                  s.jsxs("div", {
                                    children: ["藥品碼: ", n.CODE],
                                  }),
                                  s.jsxs("div", {
                                    children: ["料號: ", n.SKDIACODE],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      "應收數量: ",
                                      n.START_QTY,
                                      " ",
                                      n.PAKAGE,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3 mt-6",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: d,
                            className:
                              "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            disabled: c,
                            children: "取消",
                          }),
                          s.jsx("button", {
                            onClick: _,
                            disabled: c || !o,
                            className:
                              "flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                            children: c
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(de, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "分析中...",
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(pr, { className: "w-4 h-4 mr-2" }),
                                    "上傳並分析",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(yg, {
              isOpen: b,
              onClose: () => {
                S(!1), y(null), d();
              },
              result: g,
              onConfirmSubmit: () => {
                r && r(), S(!1), y(null), d();
              },
            }),
          ],
        });
  },
  wg = ({ isOpen: e, onClose: t, onConfirm: n, inspectionContent: r }) => {
    const [o, l] = x.useState(!1),
      [i, a] = x.useState(null),
      c = async () => {
        if (r) {
          l(!0), a(null);
          try {
            const u = await ug(r.GUID);
            u.Code === 200 ? n() : a(u.Result || "刪除失敗");
          } catch (u) {
            console.error("Delete inspection content error:", u),
              a(u instanceof Error ? u.message : "系統錯誤，請稍後再試");
          } finally {
            l(!1);
          }
        }
      };
    return !e || !r
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx("div", {
                        className:
                          "flex-shrink-0 w-10 h-10 mx-auto bg-red-100 rounded-full flex items-center justify-center",
                        children: s.jsx(Jd, {
                          className: "w-6 h-6 text-red-600",
                        }),
                      }),
                      s.jsx("div", {
                        className: "ml-4",
                        children: s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除驗收資料",
                        }),
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    disabled: o,
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  i &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: i,
                    }),
                  s.jsxs("div", {
                    className: "mb-6",
                    children: [
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mb-4",
                        children:
                          "您確定要刪除以下驗收資料嗎？此操作無法復原。",
                      }),
                      s.jsxs("div", {
                        className: "bg-gray-50 rounded-lg p-4 space-y-2",
                        children: [
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "驗收單號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.IC_SN,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "請購單號:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.PON,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品名稱:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.CHT_NAME || r.NAME,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "藥品碼:",
                              }),
                              s.jsx("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: r.CODE,
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              s.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: "應收數量:",
                              }),
                              s.jsxs("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: [r.START_QTY, " ", r.PAKAGE],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: o,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: c,
                        disabled: o,
                        className:
                          "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: o
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "刪除中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(On, { className: "w-4 h-4 mr-2" }),
                                "確認刪除",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
  },
  bg = ({ isOpen: e, onClose: t, imageUrl: n, title: r }) =>
    e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
          children: s.jsxs("div", {
            className: "relative max-w-[90vw] max-h-[90vh]",
            children: [
              s.jsx("button", {
                onClick: t,
                className:
                  "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                children: s.jsx("svg", {
                  className: "w-8 h-8",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: s.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              }),
              s.jsx("img", {
                src: n,
                alt: r,
                className:
                  "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                children: s.jsx("p", {
                  className: "text-center text-sm",
                  children: r,
                }),
              }),
            ],
          }),
        })
      : null,
  Ng = ({ groupedData: e, isOpen: t, onClose: n, onDataUpdate: r }) => {
    const [o, l] = x.useState(!1),
      [i, a] = x.useState(null),
      [c, u] = x.useState(!1),
      [h, p] = x.useState(!1),
      [g, y] = x.useState(null),
      [b, S] = x.useState(null),
      [C, f] = x.useState(!1),
      [d, m] = x.useState(null),
      [v, _] = x.useState(!1),
      [k, R] = x.useState(null),
      [M, V] = x.useState({ isOpen: !1, imageUrl: "", title: "" }),
      [D, F] = x.useState(null),
      [P, T] = x.useState(new Set()),
      [B, K] = x.useState(null),
      L = lf(),
      Q = (U) => {
        a(U), l(!0);
      },
      E = (U) => {
        m(U), f(!0);
      },
      $ = () => {
        r && r(), l(!1);
      },
      A = x.useCallback((U) => {
        y(U), p(!0);
      }, []),
      H = x.useCallback(() => {
        r && r(), p(!1), y(null);
      }, [r]),
      G = x.useCallback((U, q, se, ae, oe) => {
        S({ subContentGuid: U, masterGuid: q, itemName: se, lot: ae, qty: oe }),
          u(!0);
      }, []),
      ie = x.useCallback(() => {
        r && r(), u(!1), S(null);
      }, [r]),
      w = (U) => {
        R(U), _(!0);
      },
      te = () => {
        r && r(), _(!1), R(null), n();
      },
      N = async (U, q) => {
        F(U);
        try {
          console.log("=== 查看驗收單圖片 ==="), console.log("Item GUID:", U);
          const se = await ff(U);
          if (
            (console.log("API Response:", se),
            console.log("API Response Data:", JSON.stringify(se.Data, null, 2)),
            se.Code === 200 && se.Data)
          ) {
            const ae = se.Data;
            if (
              (console.log("Image Data:", ae),
              console.log("Base64 field exists:", !!ae.base64),
              console.log("Base64 length:", ae.base64 ? ae.base64.length : 0),
              ae.base64)
            ) {
              const oe = ae.base64.startsWith("data:")
                ? ae.base64
                : `data:image/jpeg;base64,${ae.base64}`;
              console.log(
                "Final image URL (first 100 chars):",
                oe.substring(0, 100)
              ),
                V({ isOpen: !0, imageUrl: oe, title: `${q} - 驗收單圖片` });
            } else
              console.log("No base64 data found in response"),
                console.log("Available fields:", Object.keys(ae)),
                alert("此驗收單沒有相關圖片");
          } else
            console.log("API response failed or no data"),
              alert("查無此驗收單的圖片資料");
        } catch (se) {
          console.error("查看圖片失敗:", se), alert("查看圖片失敗，請稍後再試");
        } finally {
          F(null);
        }
      },
      z = async (U, q) => {
        if (!L) {
          K("您沒有權限執行此操作");
          return;
        }
        T((se) => new Set([...se, U.GUID])), K(null);
        try {
          console.log("=== Lock/Unlock Sub Content Debug ==="),
            console.log("Sub Content GUID:", U.GUID),
            console.log("Current State:", U.STATE),
            console.log("New State:", q);
          const se = { ...U, STATE: q };
          console.log("Update Data:", JSON.stringify(se, null, 2));
          const ae = await Qr(se);
          console.log("Lock/Unlock Response:", JSON.stringify(ae, null, 2)),
            ae.Code === 200
              ? (console.log(`✅ ${q === "已鎖定" ? "鎖定" : "解鎖"}成功`),
                r && r())
              : K(ae.Result || `${q === "已鎖定" ? "鎖定" : "解鎖"}失敗`);
        } catch (se) {
          console.error("Lock/Unlock error:", se),
            K(
              se instanceof Error
                ? se.message
                : `${q === "已鎖定" ? "鎖定" : "解鎖"}失敗`
            );
        } finally {
          T((se) => {
            const ae = new Set(se);
            return ae.delete(U.GUID), ae;
          });
        }
      };
    return !t || !e
      ? null
      : s.jsxs(s.Fragment, {
          children: [
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between p-6 border-b bg-gray-50",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 mb-2",
                            children: "驗收明細",
                          }),
                          s.jsxs("div", {
                            className:
                              "flex items-center gap-4 text-sm text-gray-600",
                            children: [
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["藥品碼: ", e.CODE],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["料號: ", e.SKDIACODE],
                              }),
                              s.jsxs("div", {
                                className: "flex items-center",
                                children: ["廠商: ", e.BRD || "未指定"],
                              }),
                            ],
                          }),
                          B &&
                            s.jsx("div", {
                              className:
                                "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                              children: B,
                            }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: n,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors",
                        children: s.jsx("svg", {
                          className: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                    children:
                      e.items.length === 0
                        ? s.jsxs("div", {
                            className: "text-center py-8",
                            children: [
                              s.jsx(ep, {
                                className:
                                  "w-12 h-12 text-gray-400 mx-auto mb-4",
                              }),
                              s.jsx("p", {
                                className: "text-gray-600",
                                children: "無明細資料",
                              }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "space-y-6",
                            children: e.items.map((U) =>
                              s.jsxs(
                                "div",
                                {
                                  className: "bg-gray-50 rounded-lg p-6 border",
                                  children: [
                                    s.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-4",
                                      children: [
                                        s.jsxs("h4", {
                                          className:
                                            "text-lg font-medium text-gray-900",
                                          children: ["請購單號: ", U.PON],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex gap-2",
                                          children: [
                                            s.jsxs("button", {
                                              onClick: () => Q(U),
                                              className:
                                                "inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                                              children: [
                                                s.jsx(mr, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "新增子明細",
                                              ],
                                            }),
                                            s.jsxs("button", {
                                              onClick: () => E(U),
                                              className:
                                                "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                                              children: [
                                                s.jsx("svg", {
                                                  className: "w-4 h-4 mr-2",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: s.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                                  }),
                                                }),
                                                "上傳出貨單",
                                              ],
                                            }),
                                            s.jsx("button", {
                                              onClick: () => w(U),
                                              className:
                                                "inline-flex items-center px-3 py-2 bg-white border border-red-300 text-red-700 text-sm font-medium rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors",
                                              title: "刪除此驗收資料",
                                              children: s.jsx(On, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(Fo, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "基本資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "驗收單號:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: U.IC_SN,
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "應收數量:",
                                                    }),
                                                    " ",
                                                    s.jsxs("span", {
                                                      className:
                                                        "font-medium text-blue-600",
                                                      children: [
                                                        U.START_QTY,
                                                        " ",
                                                        U.PAKAGE,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                U.END_QTY &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "實收數量:",
                                                      }),
                                                      " ",
                                                      s.jsxs("span", {
                                                        className:
                                                          "font-medium text-green-600",
                                                        children: [
                                                          U.END_QTY,
                                                          " ",
                                                          U.PAKAGE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(ds, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "時間資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "新增時間:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: U.ADD_TIME,
                                                    }),
                                                  ],
                                                }),
                                                s.jsxs("div", {
                                                  children: [
                                                    s.jsx("span", {
                                                      className:
                                                        "text-gray-500",
                                                      children: "交貨時間:",
                                                    }),
                                                    " ",
                                                    s.jsx("span", {
                                                      className: "font-medium",
                                                      children: U.DELIVERY_TIME
                                                        ? U.DELIVERY_TIME.split(
                                                            " "
                                                          )[0].replace(
                                                            /-/g,
                                                            "/"
                                                          )
                                                        : "",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsxs("h4", {
                                              className:
                                                "font-medium text-gray-900 mb-3 flex items-center",
                                              children: [
                                                s.jsx(ut, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "其他資訊",
                                              ],
                                            }),
                                            s.jsxs("div", {
                                              className: "space-y-2 text-sm",
                                              children: [
                                                U.SEQ &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "編號:",
                                                      }),
                                                      " ",
                                                      U.SEQ,
                                                    ],
                                                  }),
                                                U.FREE_CHARGE_FLAG &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "贈品註記:",
                                                      }),
                                                      " ",
                                                      U.FREE_CHARGE_FLAG,
                                                    ],
                                                  }),
                                                U.NOTE &&
                                                  s.jsxs("div", {
                                                    children: [
                                                      s.jsx("span", {
                                                        className:
                                                          "text-gray-500",
                                                        children: "備註:",
                                                      }),
                                                      " ",
                                                      U.NOTE,
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    U.Sub_content &&
                                      U.Sub_content.length > 0 &&
                                      s.jsxs("div", {
                                        className: "border-t pt-4 mt-4",
                                        children: [
                                          s.jsx("h5", {
                                            className:
                                              "font-medium text-gray-900 mb-3",
                                            children: "子明細資料",
                                          }),
                                          s.jsx("div", {
                                            className: "space-y-3",
                                            children: U.Sub_content.map((q) =>
                                              s.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "bg-white rounded-md p-4 border border-gray-200",
                                                  children: [
                                                    s.jsx("div", {
                                                      className:
                                                        "flex justify-between items-start mb-3",
                                                      children: s.jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                          q.STATE !==
                                                            "已鎖定" &&
                                                            s.jsxs(s.Fragment, {
                                                              children: [
                                                                s.jsxs(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      () =>
                                                                        A(q),
                                                                    className:
                                                                      "inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors",
                                                                    title:
                                                                      "編輯此子明細",
                                                                    children: [
                                                                      s.jsx(
                                                                        "svg",
                                                                        {
                                                                          className:
                                                                            "w-3 h-3 mr-1",
                                                                          fill: "none",
                                                                          stroke:
                                                                            "currentColor",
                                                                          viewBox:
                                                                            "0 0 24 24",
                                                                          children:
                                                                            s.jsx(
                                                                              "path",
                                                                              {
                                                                                strokeLinecap:
                                                                                  "round",
                                                                                strokeLinejoin:
                                                                                  "round",
                                                                                strokeWidth: 2,
                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      "編輯",
                                                                    ],
                                                                  }
                                                                ),
                                                                s.jsx(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      () =>
                                                                        G(
                                                                          q.GUID,
                                                                          q.Master_GUID,
                                                                          U.CHT_NAME ||
                                                                            U.NAME,
                                                                          q.LOT,
                                                                          `${q.END_QTY}`
                                                                        ),
                                                                    className:
                                                                      "inline-flex items-center px-2 py-1 text-xs font-medium text-red-600 bg-white border border-red-300 rounded hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors",
                                                                    title:
                                                                      "刪除此子明細",
                                                                    children:
                                                                      s.jsx(
                                                                        On,
                                                                        {
                                                                          className:
                                                                            "w-3 h-3",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          L &&
                                                            s.jsx("div", {
                                                              className:
                                                                "flex gap-1",
                                                              children:
                                                                q.STATE ===
                                                                "未鎖定"
                                                                  ? s.jsx(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            z(
                                                                              q,
                                                                              "已鎖定"
                                                                            ),
                                                                        disabled:
                                                                          P.has(
                                                                            q.GUID
                                                                          ),
                                                                        className:
                                                                          "inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                        title:
                                                                          "鎖定此子明細",
                                                                        children:
                                                                          P.has(
                                                                            q.GUID
                                                                          )
                                                                            ? s.jsx(
                                                                                de,
                                                                                {
                                                                                  size: "small",
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                }
                                                                              )
                                                                            : s.jsx(
                                                                                "svg",
                                                                                {
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                  fill: "none",
                                                                                  stroke:
                                                                                    "currentColor",
                                                                                  viewBox:
                                                                                    "0 0 24 24",
                                                                                  children:
                                                                                    s.jsx(
                                                                                      "path",
                                                                                      {
                                                                                        strokeLinecap:
                                                                                          "round",
                                                                                        strokeLinejoin:
                                                                                          "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                      }
                                                                    )
                                                                  : s.jsx(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            z(
                                                                              q,
                                                                              "未鎖定"
                                                                            ),
                                                                        disabled:
                                                                          P.has(
                                                                            q.GUID
                                                                          ),
                                                                        className:
                                                                          "inline-flex items-center px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                        title:
                                                                          "解鎖此子明細",
                                                                        children:
                                                                          P.has(
                                                                            q.GUID
                                                                          )
                                                                            ? s.jsx(
                                                                                de,
                                                                                {
                                                                                  size: "small",
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                }
                                                                              )
                                                                            : s.jsx(
                                                                                "svg",
                                                                                {
                                                                                  className:
                                                                                    "w-3 h-3",
                                                                                  fill: "none",
                                                                                  stroke:
                                                                                    "currentColor",
                                                                                  viewBox:
                                                                                    "0 0 24 24",
                                                                                  children:
                                                                                    s.jsx(
                                                                                      "path",
                                                                                      {
                                                                                        strokeLinecap:
                                                                                          "round",
                                                                                        strokeLinejoin:
                                                                                          "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                      }
                                                                    ),
                                                            }),
                                                          s.jsx("button", {
                                                            onClick: () =>
                                                              N(
                                                                U.GUID,
                                                                U.CHT_NAME ||
                                                                  U.NAME
                                                              ),
                                                            disabled:
                                                              D === U.GUID,
                                                            className:
                                                              "inline-flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-white border border-blue-300 rounded hover:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                            title:
                                                              "查看驗收單圖片",
                                                            children:
                                                              D === U.GUID
                                                                ? s.jsx(de, {
                                                                    size: "small",
                                                                    className:
                                                                      "w-3 h-3",
                                                                  })
                                                                : s.jsx(ef, {
                                                                    className:
                                                                      "w-3 h-3",
                                                                  }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    s.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                                      children: [
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "數量資訊",
                                                            }),
                                                            s.jsx("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: s.jsxs(
                                                                "div",
                                                                {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "實收:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    s.jsxs(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "font-medium text-green-600",
                                                                        children:
                                                                          [
                                                                            q.END_QTY,
                                                                            " ",
                                                                            q.PAKAGE,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "效期批號",
                                                            }),
                                                            s.jsxs("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: [
                                                                s.jsxs("div", {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "效期:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    q.VAL
                                                                      ? new Date(
                                                                          q.VAL
                                                                        )
                                                                          .toLocaleDateString(
                                                                            "zh-TW",
                                                                            {
                                                                              year: "numeric",
                                                                              month:
                                                                                "2-digit",
                                                                              day: "2-digit",
                                                                            }
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "/"
                                                                          )
                                                                      : "",
                                                                  ],
                                                                }),
                                                                s.jsxs("div", {
                                                                  children: [
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-gray-500",
                                                                        children:
                                                                          "批號:",
                                                                      }
                                                                    ),
                                                                    " ",
                                                                    q.LOT,
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children:
                                                                "操作資訊",
                                                            }),
                                                            s.jsxs("div", {
                                                              className:
                                                                "text-sm space-y-1",
                                                              children: [
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "flex items-center",
                                                                  children: [
                                                                    s.jsx(rf, {
                                                                      className:
                                                                        "w-3 h-3 text-gray-400 mr-1",
                                                                    }),
                                                                    q.OP,
                                                                  ],
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "flex items-center",
                                                                  children: [
                                                                    s.jsx(ds, {
                                                                      className:
                                                                        "w-3 h-3 text-gray-400 mr-1",
                                                                    }),
                                                                    q.OP_TIME
                                                                      ? new Date(
                                                                          q.OP_TIME
                                                                        )
                                                                          .toLocaleDateString(
                                                                            "zh-TW",
                                                                            {
                                                                              year: "numeric",
                                                                              month:
                                                                                "2-digit",
                                                                              day: "2-digit",
                                                                            }
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "/"
                                                                          )
                                                                      : "",
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          children: [
                                                            s.jsx("h6", {
                                                              className:
                                                                "text-xs font-medium text-gray-500 uppercase mb-1",
                                                              children: "狀態",
                                                            }),
                                                            s.jsx("div", {
                                                              className:
                                                                "text-sm",
                                                              children: s.jsx(
                                                                "span",
                                                                {
                                                                  className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                    q.STATE ===
                                                                    "未鎖定"
                                                                      ? "bg-yellow-100 text-yellow-800"
                                                                      : "bg-green-100 text-green-800"
                                                                  }`,
                                                                  children:
                                                                    q.STATE,
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (q.BARCODE1 ||
                                                      q.BARCODE2 ||
                                                      q.NOTE) &&
                                                      s.jsxs("div", {
                                                        className:
                                                          "mt-3 pt-3 border-t border-gray-100",
                                                        children: [
                                                          (q.BARCODE1 ||
                                                            q.BARCODE2) &&
                                                            s.jsxs("div", {
                                                              className: "mb-2",
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "條碼資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children: [
                                                                    q.BARCODE1 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼1: ",
                                                                              q.BARCODE1,
                                                                            ],
                                                                        }
                                                                      ),
                                                                    q.BARCODE2 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼2: ",
                                                                              q.BARCODE2,
                                                                            ],
                                                                        }
                                                                      ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          q.NOTE &&
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "備註",
                                                                }),
                                                                s.jsx("p", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children:
                                                                    q.NOTE,
                                                                }),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                },
                                                q.GUID
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                U.GUID
                              )
                            ),
                          }),
                  }),
                ],
              }),
            }),
            s.jsx(pg, {
              isOpen: o,
              onClose: () => l(!1),
              inspectionItem: i,
              onSuccess: $,
            }),
            s.jsx(vg, {
              isOpen: C,
              onClose: () => {
                f(!1), m(null);
              },
              inspectionItem: d,
              onDataUpdate: r,
            }),
            s.jsx(xg, {
              isOpen: h,
              onClose: () => {
                p(!1), y(null);
              },
              subContentData: g,
              onSuccess: H,
              inspectionItem: e.items.find((U) => {
                var q;
                return (q = U.Sub_content) == null
                  ? void 0
                  : q.some((se) => se.GUID === (g == null ? void 0 : g.GUID));
              }),
            }),
            s.jsx(gg, {
              isOpen: c,
              onClose: () => {
                u(!1), S(null);
              },
              onConfirm: ie,
              subContentData: b,
            }),
            s.jsx(wg, {
              isOpen: v,
              onClose: () => {
                _(!1), R(null);
              },
              onConfirm: te,
              inspectionContent: k,
            }),
            s.jsx(bg, {
              isOpen: M.isOpen,
              onClose: () => V({ isOpen: !1, imageUrl: "", title: "" }),
              imageUrl: M.imageUrl,
              title: M.title,
            }),
          ],
        });
  },
  _g = ({
    startDate: e,
    endDate: t,
    onDateChange: n,
    onSearch: r,
    onReset: o,
    loading: l,
  }) => {
    const { t: i } = Ns(),
      [a, c] = x.useState(!1),
      [u, h] = x.useState(i("app.inspection.operation_time")),
      [p, g] = x.useState(e.split(" ")[0]),
      [y, b] = x.useState("00:00:00"),
      [S, C] = x.useState(t.split(" ")[0]),
      [f, d] = x.useState("23:59:59"),
      m = [
        i("app.inspection.operation_time"),
        i("app.inspection.add_time"),
        i("app.inspection.update_time"),
      ],
      v = () => {
        const _ = `${p} ${y}`,
          k = `${S} ${f}`;
        n(_, k), r();
      };
    return s.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border mb-6",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors",
          onClick: () => c(!a),
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                s.jsx(Km, { className: "w-5 h-5 text-gray-600" }),
                s.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: i("app.inspection.time_range"),
                }),
              ],
            }),
            s.jsx(Sn, {
              className: `w-5 h-5 text-gray-400 transition-transform duration-200 ${
                a ? "rotate-180" : ""
              }`,
            }),
          ],
        }),
        a &&
          s.jsx("div", {
            className: "px-4 pb-4 border-t border-gray-100",
            children: s.jsxs("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-12 gap-4 items-end mt-4",
              children: [
                s.jsxs("div", {
                  className: "lg:col-span-3",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.time_type"),
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("select", {
                          value: u,
                          onChange: (_) => h(_.target.value),
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none",
                          children: m.map((_) =>
                            s.jsx("option", { value: _, children: _ }, _)
                          ),
                        }),
                        s.jsx(Sn, {
                          className:
                            "absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "lg:col-span-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.start_datetime"),
                    }),
                    s.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        s.jsx("input", {
                          type: "date",
                          value: p,
                          onChange: (_) => g(_.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        }),
                        s.jsx("input", {
                          type: "time",
                          value: y,
                          onChange: (_) => b(_.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          step: "1",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "lg:col-span-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-sm font-medium text-gray-700 mb-2",
                      children: i("app.inspection.end_datetime"),
                    }),
                    s.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        s.jsx("input", {
                          type: "date",
                          value: S,
                          onChange: (_) => C(_.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        }),
                        s.jsx("input", {
                          type: "time",
                          value: f,
                          onChange: (_) => d(_.target.value),
                          className:
                            "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                          step: "1",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "lg:col-span-1",
                  children: s.jsxs("button", {
                    onClick: v,
                    disabled: l,
                    className:
                      "w-full inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                    children: [
                      s.jsx(fs, { className: "w-4 h-4" }),
                      s.jsx("span", {
                        className: "ml-1 hidden xl:inline",
                        children: i(
                          l
                            ? "app.inspection.searching"
                            : "app.inspection.search"
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  jg = ({ isOpen: e, onClose: t, analysisResult: n, onSuccess: r }) => {
    const [o, l] = x.useState([]),
      [i, a] = x.useState(null),
      [c, u] = x.useState(!1),
      [h, p] = x.useState(!1),
      [g, y] = x.useState(null);
    x.useEffect(() => {
      e && n != null && n.po_num && b();
    }, [e, n]);
    const b = async () => {
        if (n != null && n.po_num) {
          p(!0), y(null);
          try {
            console.log("搜尋請購單號:", n.po_num);
            const f = await sg(n.po_num);
            if (f.Code === 200 && f.Data) {
              l(f.Data), console.log("找到驗收資料:", f.Data.length, "筆");
              const d = f.Data.filter((m) => {
                const v = m.Sub_content && m.Sub_content.length > 0;
                return (
                  v &&
                    console.log(
                      "過濾掉已有子明細的項目:",
                      m.IC_SN,
                      "子明細數量:",
                      m.Sub_content.length
                    ),
                  !v
                );
              });
              l(d), console.log("過濾後的驗收資料:", d.length, "筆");
            } else y(f.Result || "查無相關驗收資料"), l([]);
          } catch (f) {
            console.error("搜尋驗收資料失敗:", f),
              y(f instanceof Error ? f.message : "搜尋失敗"),
              l([]);
          } finally {
            p(!1);
          }
        }
      },
      S = async () => {
        if (!(!i || !n)) {
          u(!0), y(null);
          try {
            console.log("開始配對:", {
              selectedItem: i.GUID,
              analysisResult: n.GUID,
            });
            const f = await og(n.GUID, i, n);
            console.log("配對 API 完整回應:", f),
              f.Code === 200
                ? (console.log("配對成功"), r(n.GUID))
                : y(f.Result || "配對失敗");
          } catch (f) {
            console.error("配對失敗:", f),
              y(f instanceof Error ? f.message : "配對失敗");
          } finally {
            u(!1);
          }
        }
      },
      C = (f) => {
        if (!f) return "";
        try {
          return new Date(f)
            .toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "/");
        } catch {
          return f;
        }
      };
    return !e || !n
      ? null
      : s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b bg-gray-50",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(hi, { className: "w-5 h-5 mr-2" }),
                          "配對驗收資料",
                        ],
                      }),
                      s.jsxs("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: ["請購單號: ", n.po_num],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                children: s.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsx("h4", {
                          className: "text-md font-medium text-gray-900 mb-4",
                          children: "分析結果",
                        }),
                        s.jsxs("div", {
                          className: "bg-blue-50 rounded-lg p-4 mb-4",
                          children: [
                            n.base64 &&
                              s.jsx("img", {
                                src: n.base64.startsWith("data:")
                                  ? n.base64
                                  : `data:image/jpeg;base64,${n.base64}`,
                                alt: "出貨單",
                                className:
                                  "w-full h-48 object-cover rounded mb-4",
                              }),
                            s.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                s.jsxs("div", {
                                  className: "bg-white rounded p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-700 mb-2",
                                      children: "藥品資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "藥品碼:",
                                            }),
                                            " ",
                                            n.code,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "中文名:",
                                            }),
                                            " ",
                                            n.cht_name,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "英文名:",
                                            }),
                                            " ",
                                            n.name,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-white rounded p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-700 mb-2",
                                      children: "批次資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "批號:",
                                            }),
                                            " ",
                                            n.batch_num,
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "效期:",
                                            }),
                                            " ",
                                            C(n.expirydate),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-500",
                                              children: "數量:",
                                            }),
                                            " ",
                                            n.qty,
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
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsxs("h4", {
                          className: "text-md font-medium text-gray-900 mb-4",
                          children: [
                            "選擇配對的驗收資料",
                            h &&
                              s.jsx(de, { size: "small", className: "ml-2" }),
                          ],
                        }),
                        g &&
                          s.jsxs("div", {
                            className:
                              "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                            children: [
                              s.jsx(ut, {
                                className: "w-4 h-4 mr-2 flex-shrink-0",
                              }),
                              g,
                            ],
                          }),
                        h
                          ? s.jsxs("div", {
                              className: "text-center py-8",
                              children: [
                                s.jsx(de, {
                                  size: "medium",
                                  className: "mx-auto mb-4",
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600",
                                  children: "搜尋驗收資料中...",
                                }),
                              ],
                            })
                          : o.length === 0
                          ? s.jsxs("div", {
                              className: "text-center py-8",
                              children: [
                                s.jsx(An, {
                                  className:
                                    "w-12 h-12 text-gray-400 mx-auto mb-4",
                                }),
                                s.jsx("p", {
                                  className: "text-gray-600",
                                  children: "查無相關驗收資料",
                                }),
                              ],
                            })
                          : s.jsx("div", {
                              className: "space-y-3",
                              children: o.map((f) =>
                                s.jsxs(
                                  "div",
                                  {
                                    className: `border rounded-lg p-4 cursor-pointer transition-colors ${
                                      (i == null ? void 0 : i.GUID) === f.GUID
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 hover:border-gray-300"
                                    }`,
                                    onClick: () => a(f),
                                    children: [
                                      s.jsxs("div", {
                                        className:
                                          "flex items-start justify-between mb-2",
                                        children: [
                                          s.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              s.jsx("h5", {
                                                className:
                                                  "font-medium text-gray-900",
                                                children: f.CHT_NAME || f.NAME,
                                              }),
                                              s.jsxs("p", {
                                                className:
                                                  "text-sm text-gray-600",
                                                children: [
                                                  "驗收單號: ",
                                                  f.IC_SN,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (i == null ? void 0 : i.GUID) ===
                                            f.GUID &&
                                            s.jsx(It, {
                                              className:
                                                "w-5 h-5 text-blue-500 flex-shrink-0",
                                            }),
                                        ],
                                      }),
                                      s.jsxs("div", {
                                        className:
                                          "grid grid-cols-2 gap-4 text-sm",
                                        children: [
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "藥品碼:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.CODE,
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "料號:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.SKDIACODE,
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "應收數量:",
                                              }),
                                              s.jsxs("span", {
                                                className: "ml-1 font-medium",
                                                children: [
                                                  f.START_QTY,
                                                  " ",
                                                  f.PAKAGE,
                                                ],
                                              }),
                                            ],
                                          }),
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-gray-500",
                                                children: "廠商:",
                                              }),
                                              s.jsx("span", {
                                                className: "ml-1 font-medium",
                                                children: f.BRD || "未指定",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  f.GUID
                                )
                              ),
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "flex justify-end gap-3 p-6 border-t bg-gray-50",
                children: [
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                    disabled: c,
                    children: "取消",
                  }),
                  s.jsx("button", {
                    onClick: S,
                    disabled: c || !i,
                    className:
                      "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                    children: c
                      ? s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(de, { size: "small", className: "mr-2" }),
                            "配對中...",
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(hi, { className: "w-4 h-4 mr-2" }),
                            "確認配對",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        });
  },
  Sg = ({ isOpen: e, onClose: t, imageUrl: n, title: r }) =>
    e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
          children: s.jsxs("div", {
            className: "relative max-w-[90vw] max-h-[90vh]",
            children: [
              s.jsx("button", {
                onClick: t,
                className:
                  "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                children: s.jsx(Ie, { className: "w-8 h-8" }),
              }),
              s.jsx("img", {
                src: n,
                alt: r,
                className:
                  "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
              }),
              s.jsx("div", {
                className:
                  "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                children: s.jsx("p", {
                  className: "text-center text-sm",
                  children: r,
                }),
              }),
            ],
          }),
        })
      : null,
  kg = ({ isOpen: e, onClose: t, results: n, onDataUpdate: r }) => {
    const [o, l] = x.useState([]),
      [i, a] = x.useState(!1),
      [c, u] = x.useState(null),
      [h, p] = x.useState(null),
      [g, y] = x.useState({ isOpen: !1, result: null }),
      [b, S] = x.useState(new Set()),
      [C, f] = x.useState(null),
      [d, m] = x.useState({
        po_num: "",
        qty: "",
        batch_num: "",
        expirydate: "",
      }),
      [v, _] = x.useState(null),
      [k, R] = x.useState(!1),
      [M, V] = x.useState(null),
      [D, F] = x.useState(new Set());
    x.useEffect(() => {
      n && n.length > 0 && o.length === 0 && l(n);
    }, [n, o.length]);
    const P = async (w) => {
        try {
          console.log("=== 開始取得最新資料 ==="), console.log("GUID:", w);
          const te = await lg(w);
          if (
            (console.log("API Response:", te),
            te.Code === 200 && te.Data && te.Data.length > 0)
          ) {
            const N = te.Data[0];
            console.log("取得最新資料:", N),
              l((z) => {
                const U = z.findIndex((se) => se.GUID === w);
                if (U < 0) return console.warn("找不到對應的結果 GUID:", w), z;
                const q = [...z];
                return (
                  (q[U] = { ...z[U], ...N, base64: z[U].base64 }),
                  console.log("✅ 更新成功，索引:", U),
                  console.log("更新後資料:", q[U]),
                  q
                );
              });
          } else
            console.error("取得最新資料失敗:", te.Result),
              u(te.Result || "取得最新資料失敗");
        } catch (te) {
          console.error("取得最新資料異常:", te),
            u(te instanceof Error ? te.message : "取得最新資料失敗");
        }
      },
      T = (w, te) => {
        console.log("Image clicked:", { index: te, hasBase64: !!w.base64 });
        const N = w.base64 || w.image || w.img || w.picture;
        if (!N) {
          console.warn("No image data found for result:", w);
          return;
        }
        const z = N.startsWith("data:") ? N : `data:image/jpeg;base64,${N}`;
        console.log("Setting zoom image:", {
          url: z.substring(0, 50) + "...",
          title: `出貨單分析結果 #${te + 1}`,
        }),
          p({ url: z, title: `出貨單分析結果 #${te + 1}` });
      },
      B = (w) => {
        console.log("開始配對流程:", w), y({ isOpen: !0, result: w });
      },
      K = (w) => {
        f(w.GUID),
          m({
            po_num: w.po_num || "",
            qty: w.qty || "",
            batch_num: w.batch_num || "",
            expirydate: w.expirydate ? w.expirydate.split(" ")[0] : "",
          });
      },
      L = () => {
        f(null), m({ po_num: "", qty: "", batch_num: "", expirydate: "" });
      },
      Q = async (w) => {
        _(w.GUID), u(null);
        try {
          console.log("=== 開始更新分析結果 ==="),
            console.log("GUID:", w.GUID),
            console.log("更新資料:", d);
          const te = d.expirydate ? `${d.expirydate} 00:00:00` : "",
            N = await ig({
              GUID: w.GUID,
              po_num: d.po_num,
              qty: d.qty,
              batch_num: d.batch_num,
              expirydate: te,
            });
          console.log("更新 API 回應:", N),
            N.Code === 200
              ? (console.log("✅ 更新成功"), await P(w.GUID), f(null))
              : u(N.Result || "更新失敗");
        } catch (te) {
          console.error("更新失敗:", te),
            u(te instanceof Error ? te.message : "更新失敗");
        } finally {
          _(null);
        }
      },
      E = (w) =>
        b.has(w.GUID)
          ? { canPair: !1, reason: "已配對" }
          : w.check === "此單號已驗收"
          ? { canPair: !1, reason: "此單號已驗收" }
          : { canPair: !0, reason: "" },
      $ = (w) => {
        console.log("配對成功，準備取得最新資料，GUID:", w),
          P(w),
          y({ isOpen: !1, result: null });
      },
      A = (w) =>
        D.has(w.GUID)
          ? !1
          : !!(w.po_num && w.qty && w.batch_num && w.expirydate),
      H = async () => {
        const w = o.filter((N) => A(N) && !D.has(N.GUID));
        if (w.length === 0) {
          V("沒有可送出的資料");
          return;
        }
        const te = at();
        if (!te) {
          V("無法取得操作人資訊");
          return;
        }
        R(!0), V(null);
        try {
          console.log(
            `本次送出的 GUID 共 ${w.length} 筆:`,
            w.map((oe) => oe.GUID)
          );
          const z = { ValueAry: [null, w.map((oe) => oe.GUID).join(";")] },
            U = await ke("/api/pcmpo/check", { method: "POST", body: z });
          if (U.Code !== 200) {
            V(U.Result || "確認檢查失敗");
            return;
          }
          const q = w.map((oe) => ({
              GUID: oe.GUID,
              Master_GUID: oe.Master_GUID,
              LOT: oe.batch_num,
              END_QTY: oe.qty,
              VAL: oe.expirydate
                ? `${oe.expirydate.split(" ")[0]} 00:00:00`
                : "",
              OP: te,
            })),
            se = [],
            ae = [];
          for (const oe of q)
            try {
              const Be = await ga(
                oe.Master_GUID,
                oe.LOT,
                oe.END_QTY,
                oe.VAL,
                oe.OP
              );
              Be.Code === 200
                ? (se.push(oe.GUID),
                  console.log(`✅ 子明細新增成功: ${oe.Master_GUID}`))
                : (ae.push(`${oe.Master_GUID}: ${Be.Result}`),
                  console.log(
                    `❌ 子明細新增失敗: ${oe.Master_GUID} - ${Be.Result}`
                  ));
            } catch (Be) {
              const wr = Be instanceof Error ? Be.message : "未知錯誤";
              ae.push(`${oe.Master_GUID}: ${wr}`),
                console.error(`❌ 子明細新增異常: ${oe.Master_GUID}`, Be);
            }
          se.length > 0 &&
            (F((oe) => new Set([...oe, ...se])),
            l((oe) =>
              oe.map((Be) =>
                se.includes(Be.GUID) ? { ...Be, _locked: !0 } : Be
              )
            )),
            ae.length === 0
              ? (V(null), r && r())
              : se.length > 0
              ? (V(
                  `部分成功：${se.length} 筆成功，${
                    ae.length
                  } 筆失敗。失敗原因：${ae.join("; ")}`
                ),
                r && r())
              : V(`全部失敗：${ae.join("; ")}`);
        } catch (N) {
          console.error("批次確認送出失敗:", N),
            V(N instanceof Error ? N.message : "批次送出失敗");
        } finally {
          R(!1);
        }
      },
      G = async () => {
        const w = o.filter((te) => !D.has(te.GUID));
        if (w.length > 0)
          try {
            console.log("=== 刪除未送出資料 ==="),
              console.log("未送出資料數量:", w.length),
              console.log(
                "未送出的 GUIDs:",
                w.map((U) => U.GUID)
              );
            const N = { ValueAry: [w.map((U) => U.GUID).join(";")] };
            console.log("=== Delete API Request Debug ==="),
              console.log("URL:", "/api/pcmpo/delete_by_GUID"),
              console.log("Method:", "POST"),
              console.log("Request Data:", JSON.stringify(N, null, 2));
            const z = await ke("/api/pcmpo/delete_by_GUID", {
              method: "POST",
              body: N,
            });
            console.log("Delete API Response:", JSON.stringify(z, null, 2)),
              z.Code === 200
                ? console.log("✅ 未送出資料刪除成功")
                : console.log("❌ 未送出資料刪除失敗:", z.Result);
          } catch (te) {
            console.error("刪除未送出資料失敗:", te);
          }
        D.size > 0 && r && r(), t();
      };
    if (!e || !n || n.length === 0) return null;
    const ie = (w) => {
      if (!w) return "";
      try {
        return new Date(w)
          .toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .replace(/\//g, "/");
      } catch {
        return w;
      }
    };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b bg-gray-50",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "批次分析結果",
                      }),
                      s.jsxs("div", {
                        className: "flex items-center mt-1",
                        children: [
                          s.jsx(It, {
                            className: "w-4 h-4 text-green-500 mr-1",
                          }),
                          s.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["共分析 ", o.length, " 筆資料"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: G,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                children: [
                  c &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(ut, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        c,
                      ],
                    }),
                  s.jsx("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",
                    children: o.map((w, te) =>
                      s.jsxs(
                        "div",
                        {
                          className: `border rounded-lg p-4 ${
                            D.has(w.GUID)
                              ? "bg-blue-50 border-blue-200"
                              : "bg-gray-50"
                          }`,
                          children: [
                            s.jsx("div", {
                              className: "mb-2",
                              children: A(w)
                                ? w.Result === "辨識失敗" ||
                                  w.check === "辨識失敗" ||
                                  w._isFailed
                                  ? s.jsxs("span", {
                                      className:
                                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
                                      children: [
                                        s.jsx(It, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        w._isFailed ? "分析失敗" : "辨識失敗",
                                      ],
                                    })
                                  : s.jsxs("span", {
                                      className:
                                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                      children: [
                                        s.jsx(It, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        "可送出",
                                      ],
                                    })
                                : s.jsx(s.Fragment, {
                                    children:
                                      w.Result === "辨識失敗" ||
                                      w.check === "辨識失敗"
                                        ? s.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",
                                            children: [
                                              s.jsx(ut, {
                                                className: "w-3 h-3 mr-1",
                                              }),
                                              "辨識失敗",
                                            ],
                                          })
                                        : s.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                                            children: [
                                              s.jsx(ut, {
                                                className: "w-3 h-3 mr-1",
                                              }),
                                              "缺少必要資料",
                                            ],
                                          }),
                                  }),
                            }),
                            s.jsxs("div", {
                              className: "mb-4",
                              children: [
                                s.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-2",
                                  children: [
                                    s.jsxs("h4", {
                                      className:
                                        "text-md font-medium text-gray-900",
                                      children: ["分析結果 #", te + 1],
                                    }),
                                    s.jsx("div", {
                                      className: "flex gap-2",
                                      children:
                                        C === w.GUID
                                          ? s.jsxs(s.Fragment, {
                                              children: [
                                                s.jsxs("button", {
                                                  onClick: () => Q(w),
                                                  disabled: v === w.GUID,
                                                  className:
                                                    "px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors flex items-center",
                                                  children: [
                                                    v === w.GUID
                                                      ? s.jsx(de, {
                                                          size: "small",
                                                          className: "mr-1",
                                                        })
                                                      : s.jsx(tp, {
                                                          className:
                                                            "w-3 h-3 mr-1",
                                                        }),
                                                    "儲存",
                                                  ],
                                                }),
                                                s.jsxs("button", {
                                                  onClick: L,
                                                  disabled: v === w.GUID,
                                                  className:
                                                    "px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600 transition-colors flex items-center",
                                                  children: [
                                                    s.jsx(sf, {
                                                      className: "w-3 h-3 mr-1",
                                                    }),
                                                    "取消",
                                                  ],
                                                }),
                                              ],
                                            })
                                          : s.jsxs(s.Fragment, {
                                              children: [
                                                s.jsxs("button", {
                                                  onClick: () => K(w),
                                                  className:
                                                    "px-2 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700 transition-colors flex items-center",
                                                  children: [
                                                    s.jsx(ca, {
                                                      className: "w-3 h-3 mr-1",
                                                    }),
                                                    "編輯",
                                                  ],
                                                }),
                                                (() => {
                                                  const N = E(w);
                                                  return s.jsxs("button", {
                                                    onClick: () => B(w),
                                                    className: `px-2 py-1 text-xs rounded transition-colors flex items-center ${
                                                      N.canPair
                                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                                        : "bg-gray-400 text-white cursor-not-allowed"
                                                    }`,
                                                    disabled: !N.canPair,
                                                    title: N.canPair
                                                      ? ""
                                                      : N.reason,
                                                    children: [
                                                      s.jsx(hi, {
                                                        className:
                                                          "w-3 h-3 mr-1",
                                                      }),
                                                      N.canPair
                                                        ? "配對"
                                                        : N.reason,
                                                    ],
                                                  });
                                                })(),
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                                w.base64 &&
                                  s.jsx("div", {
                                    className: "mb-4",
                                    children: s.jsxs("div", {
                                      className:
                                        "relative group cursor-pointer",
                                      onClick: () => T(w, te),
                                      children: [
                                        s.jsx("img", {
                                          src: w.base64.startsWith("data:")
                                            ? w.base64
                                            : `data:image/jpeg;base64,${w.base64}`,
                                          alt: `出貨單 ${te + 1}`,
                                          className:
                                            "w-full h-32 object-cover rounded border hover:opacity-80 transition-opacity",
                                        }),
                                        s.jsx("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded pointer-events-none",
                                          children: s.jsx(op, {
                                            className: "w-8 h-8 text-white",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                s.jsxs("div", {
                                  className: "bg-blue-50 rounded-lg p-3",
                                  children: [
                                    s.jsxs("h5", {
                                      className:
                                        "text-sm font-medium text-blue-800 mb-2 flex items-center",
                                      children: [
                                        s.jsx(An, {
                                          className: "w-4 h-4 mr-1",
                                        }),
                                        "藥品資訊",
                                      ],
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-sm",
                                      children: [
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-blue-600",
                                              children: "藥名:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-blue-900 ml-1",
                                              children: w.name,
                                            }),
                                          ],
                                        }),
                                        w.cht_name &&
                                          s.jsxs("div", {
                                            children: [
                                              s.jsx("span", {
                                                className: "text-blue-600",
                                                children: "中文名:",
                                              }),
                                              s.jsx("span", {
                                                className:
                                                  "font-medium text-blue-900 ml-1",
                                                children: w.cht_name,
                                              }),
                                            ],
                                          }),
                                        s.jsxs("div", {
                                          children: [
                                            s.jsx("span", {
                                              className: "text-blue-600",
                                              children: "藥品碼:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-blue-900 ml-1",
                                              children: w.code,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className:
                                    "bg-green-50 rounded-lg p-3 border-2 border-green-200",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-green-800 mb-2",
                                      children: "請購單號",
                                    }),
                                    C === w.GUID
                                      ? s.jsx("input", {
                                          type: "text",
                                          value: d.po_num,
                                          onChange: (N) =>
                                            m((z) => ({
                                              ...z,
                                              po_num: N.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-green-300 rounded focus:ring-2 focus:ring-green-500 focus:border-green-500",
                                          placeholder: "請輸入請購單號",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-2xl font-bold text-green-700",
                                            children: w.po_num,
                                          }),
                                        }),
                                  ],
                                }),
                                w.qty &&
                                  s.jsxs("div", {
                                    className:
                                      "bg-orange-50 rounded-lg p-3 border-2 border-orange-200",
                                    children: [
                                      s.jsx("h5", {
                                        className:
                                          "text-sm font-medium text-orange-800 mb-2",
                                        children: "數量",
                                      }),
                                      C === w.GUID
                                        ? s.jsx("input", {
                                            type: "number",
                                            value: d.qty,
                                            onChange: (N) =>
                                              m((z) => ({
                                                ...z,
                                                qty: N.target.value,
                                              })),
                                            className:
                                              "w-full px-2 py-1 text-center text-2xl font-bold border border-orange-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500",
                                            placeholder: "請輸入數量",
                                          })
                                        : s.jsx("div", {
                                            className: "text-center",
                                            children: s.jsx("div", {
                                              className:
                                                "text-3xl font-bold text-orange-700",
                                              children: w.qty,
                                            }),
                                          }),
                                    ],
                                  }),
                                s.jsxs("div", {
                                  className: "bg-yellow-50 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-yellow-800 mb-2",
                                      children: "批號",
                                    }),
                                    w._isFailed
                                      ? s.jsxs("div", {
                                          className:
                                            "text-xs text-red-600 bg-red-50 px-2 py-1 rounded",
                                          children: [
                                            "失敗原因: ",
                                            w._failureReason,
                                          ],
                                        })
                                      : C === w.GUID
                                      ? s.jsx("input", {
                                          type: "text",
                                          value: d.batch_num,
                                          onChange: (N) =>
                                            m((z) => ({
                                              ...z,
                                              batch_num: N.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-yellow-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500",
                                          placeholder: "請輸入批號",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-lg font-bold text-yellow-900",
                                            children: w.batch_num,
                                          }),
                                        }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-purple-50 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-purple-800 mb-2",
                                      children: "效期",
                                    }),
                                    C === w.GUID
                                      ? s.jsx("input", {
                                          type: "date",
                                          value: d.expirydate,
                                          onChange: (N) =>
                                            m((z) => ({
                                              ...z,
                                              expirydate: N.target.value,
                                            })),
                                          className:
                                            "w-full px-2 py-1 text-center text-lg font-bold border border-purple-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
                                        })
                                      : s.jsx("div", {
                                          className: "text-center",
                                          children: s.jsx("div", {
                                            className:
                                              "text-lg font-bold text-purple-900",
                                            children: ie(w.expirydate),
                                          }),
                                        }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "bg-gray-100 rounded-lg p-3",
                                  children: [
                                    s.jsx("h5", {
                                      className:
                                        "text-sm font-medium text-gray-800 mb-2",
                                      children: "其他資訊",
                                    }),
                                    s.jsxs("div", {
                                      className: "space-y-1 text-xs",
                                      children: [
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "驗收單號:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.IC_SN,
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "操作人員:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.op_name,
                                            }),
                                          ],
                                        }),
                                        s.jsxs("div", {
                                          className: "flex justify-between",
                                          children: [
                                            s.jsx("span", {
                                              className: "text-gray-600",
                                              children: "辨識時間:",
                                            }),
                                            s.jsx("span", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.op_time,
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
                        },
                        te
                      )
                    ),
                  }),
                ],
              }),
              M &&
                s.jsxs("div", {
                  className:
                    "mx-6 mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                  children: [
                    s.jsx(ut, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                    M,
                  ],
                }),
              s.jsxs("div", {
                className: "flex justify-end p-6 border-t bg-gray-50",
                children: [
                  s.jsx("div", {
                    className: "text-sm text-gray-600 flex items-center",
                    children: s.jsxs("div", {
                      className: "mr-4",
                      children: [
                        "可送出: ",
                        o.filter((w) => A(w) && !D.has(w.GUID)).length,
                        " 筆 | 已送出: ",
                        D.size,
                        " 筆 | 未送出: ",
                        o.filter((w) => !D.has(w.GUID)).length,
                        " 筆",
                      ],
                    }),
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      s.jsx("button", {
                        onClick: H,
                        disabled:
                          k ||
                          o.filter((w) => A(w) && !D.has(w.GUID)).length === 0,
                        className:
                          "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                        children: k
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "送出中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(nf, { className: "w-4 h-4 mr-2" }),
                                "確認送出 (",
                                o.filter((w) => A(w) && !D.has(w.GUID)).length,
                                ")",
                              ],
                            }),
                      }),
                      s.jsx("button", {
                        onClick: G,
                        className:
                          "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                        disabled: k,
                        children: "關閉",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx(Sg, {
          isOpen: !!h,
          onClose: () => p(null),
          imageUrl: (h == null ? void 0 : h.url) || "",
          title: (h == null ? void 0 : h.title) || "",
        }),
        s.jsx(jg, {
          isOpen: g.isOpen,
          onClose: () => y({ isOpen: !1, result: null }),
          analysisResult: g.result,
          onSuccess: (w) => $(w),
        }),
      ],
    });
  },
  Cg = ({ message: e, type: t = "success", duration: n = 3e3, onClose: r }) => {
    const [o, l] = x.useState(!1),
      [i, a] = x.useState(!1);
    x.useEffect(() => {
      setTimeout(() => l(!0), 10);
      const p = setTimeout(() => {
        c();
      }, n);
      return () => clearTimeout(p);
    }, [n]);
    const c = () => {
        a(!0),
          setTimeout(() => {
            r();
          }, 300);
      },
      u = () => {
        switch (t) {
          case "success":
            return s.jsx(It, { className: "w-5 h-5 text-green-500" });
          case "error":
            return s.jsx(sf, { className: "w-5 h-5 text-red-500" });
          case "warning":
            return s.jsx(ut, { className: "w-5 h-5 text-yellow-500" });
          case "info":
            return s.jsx(Jm, { className: "w-5 h-5 text-blue-500" });
          default:
            return s.jsx(It, { className: "w-5 h-5 text-green-500" });
        }
      },
      h = () => {
        switch (t) {
          case "success":
            return "bg-green-50 border-green-200";
          case "error":
            return "bg-red-50 border-red-200";
          case "warning":
            return "bg-yellow-50 border-yellow-200";
          case "info":
            return "bg-blue-50 border-blue-200";
          default:
            return "bg-green-50 border-green-200";
        }
      };
    return s.jsx("div", {
      className: `fixed top-4 right-4 z-[9999] transition-all duration-300 ease-out ${
        o && !i
          ? "translate-x-0 opacity-100"
          : i
          ? "-translate-x-full opacity-0"
          : "translate-x-full opacity-0"
      }`,
      children: s.jsxs("div", {
        className: `flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-lg shadow-lg border ${h()}`,
        children: [
          s.jsx("div", { className: "flex-shrink-0", children: u() }),
          s.jsx("div", {
            className: "flex-1 text-sm text-gray-800",
            children: e,
          }),
          s.jsx("button", {
            onClick: c,
            className:
              "flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors",
            children: s.jsx(Ie, { className: "w-4 h-4" }),
          }),
        ],
      }),
    });
  },
  mf = ({ toasts: e, onRemove: t }) =>
    s.jsx(s.Fragment, {
      children: e.map((n, r) =>
        s.jsx(
          "div",
          {
            style: { top: `${4 + r * 80}px` },
            children: s.jsx(Cg, {
              message: n.message,
              type: n.type,
              duration: n.duration,
              onClose: () => t(n.id),
            }),
          },
          n.id
        )
      ),
    }),
  pf = () => {
    const [e, t] = x.useState([]);
    return {
      toasts: e,
      showToast: (o, l = "success", i = 3e3) => {
        const a = `toast-${Date.now()}-${Math.random()}`;
        t((c) => [...c, { id: a, message: o, type: l, duration: i }]);
      },
      removeToast: (o) => {
        t((l) => l.filter((i) => i.id !== o));
      },
    };
  },
  Eg = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = x.useState([]),
      [l, i] = x.useState(!1),
      [a, c] = x.useState(null),
      [u, h] = x.useState([]),
      [p, g] = x.useState(!1),
      y = x.useRef(null),
      b = x.useRef(null),
      [S, C] = x.useState(!1),
      { toasts: f, showToast: d, removeToast: m } = pf(),
      v = () => {
        o([]), c(null), h([]), y.current && (y.current.value = "");
      },
      _ = () => {
        v(), t();
      },
      k = (T) => {
        const B = Array.from(T.target.files || []);
        if (B.length === 0) return;
        const K = B.map((L, Q) =>
          L.type.startsWith("image/")
            ? L.size > 10 * 1024 * 1024
              ? {
                  id: `${Date.now()}-${Q}`,
                  file: L,
                  previewUrl: "",
                  status: "error",
                  error: "檔案大小不可超過 10MB",
                }
              : {
                  id: `${Date.now()}-${Q}`,
                  file: L,
                  previewUrl: "",
                  status: "pending",
                }
            : {
                id: `${Date.now()}-${Q}`,
                file: L,
                previewUrl: "",
                status: "error",
                error: "請選擇圖片檔案",
              }
        );
        K.forEach((L) => {
          if (L.status === "pending") {
            const Q = new FileReader();
            (Q.onload = (E) => {
              o(($) =>
                $.map((A) => {
                  var H;
                  return A.id === L.id
                    ? {
                        ...A,
                        previewUrl: (H = E.target) == null ? void 0 : H.result,
                      }
                    : A;
                })
              );
            }),
              Q.readAsDataURL(L.file);
          }
        }),
          o((L) => [...L, ...K]),
          c(null);
      },
      R = (T) => {
        o((B) => B.filter((K) => K.id !== T));
      },
      M = (T) =>
        new Promise((B, K) => {
          const L = new FileReader();
          (L.onload = (Q) => {
            var $;
            const E = document.createElement("img");
            (E.onload = () => {
              let G = E.width,
                ie = E.height;
              G > ie
                ? G > 1920 && ((ie = Math.round((ie * 1920) / G)), (G = 1920))
                : ie > 1920 && ((G = Math.round((G * 1920) / ie)), (ie = 1920));
              const w = document.createElement("canvas");
              (w.width = G), (w.height = ie);
              const te = w.getContext("2d");
              if (!te) {
                K(new Error("無法建立 Canvas context"));
                return;
              }
              te.drawImage(E, 0, 0, G, ie),
                w.toBlob(
                  (N) => {
                    if (!N) {
                      K(new Error("圖片壓縮失敗"));
                      return;
                    }
                    const z = new FileReader();
                    (z.onload = () => {
                      const q = z.result.split(",")[1];
                      console.log("壓縮結果:", {
                        原始大小: `${(T.size / 1024 / 1024).toFixed(2)} MB`,
                        壓縮後大小: `${(N.size / 1024 / 1024).toFixed(2)} MB`,
                        壓縮比例: `${((1 - N.size / T.size) * 100).toFixed(
                          1
                        )}%`,
                        原始尺寸: `${E.width}x${E.height}`,
                        壓縮後尺寸: `${G}x${ie}`,
                      }),
                        B({
                          base64: q,
                          originalSize: T.size,
                          compressedSize: N.size,
                        });
                    }),
                      (z.onerror = K),
                      z.readAsDataURL(N);
                  },
                  "image/jpeg",
                  0.92
                );
            }),
              (E.onerror = K),
              (E.src = ($ = Q.target) == null ? void 0 : $.result);
          }),
            (L.onerror = K),
            L.readAsDataURL(T);
        }),
      V = async (T) => {
        const B = da(),
          K = at();
        if (!B || !K) throw new Error("無法取得操作人資訊");
        try {
          o((H) =>
            H.map((G) => (G.id === T.id ? { ...G, status: "uploading" } : G))
          );
          const {
              base64: L,
              originalSize: Q,
              compressedSize: E,
            } = await M(T.file),
            $ = { Data: [{ op_id: B, op_name: K, base64: L }] };
          console.log("=== PreSave API Request Debug ==="),
            console.log("File:", T.file.name),
            console.log("原始大小:", `${(Q / 1024 / 1024).toFixed(2)} MB`),
            console.log("壓縮後大小:", `${(E / 1024 / 1024).toFixed(2)} MB`),
            console.log("壓縮比例:", `${((1 - E / Q) * 100).toFixed(1)}%`);
          const A = await ke("/api/pcmpo/preSave", { method: "POST", body: $ });
          if (
            (console.log("PreSave Response:", JSON.stringify(A, null, 2)),
            A.Code === 200 && A.Data && A.Data.length > 0)
          ) {
            const H = A.Data[0].GUID;
            return (
              o((G) =>
                G.map((ie) =>
                  ie.id === T.id ? { ...ie, status: "uploaded", guid: H } : ie
                )
              ),
              H
            );
          } else throw new Error(A.Result || "上傳失敗");
        } catch (L) {
          throw (
            (console.error("Upload error:", L),
            o((Q) =>
              Q.map((E) =>
                E.id === T.id
                  ? {
                      ...E,
                      status: "error",
                      error: L instanceof Error ? L.message : "上傳失敗",
                    }
                  : E
              )
            ),
            L)
          );
        }
      },
      D = async () => {
        const T = r.filter((B) => B.status === "pending" && B.previewUrl);
        if (T.length === 0) {
          c("請選擇有效的圖片檔案");
          return;
        }
        i(!0), c(null);
        try {
          console.log("=== 開始批次處理 ==="),
            console.log("待處理圖片數量:", T.length),
            console.log("第一階段：上傳圖片");
          const B = [];
          for (const L of T)
            try {
              const Q = await V(L);
              Q &&
                (B.push({ imageId: L.id, guid: Q, imageItem: L }),
                console.log(`✅ 圖片 ${L.file.name} 上傳成功，GUID: ${Q}`));
            } catch (Q) {
              console.error(`❌ 圖片 ${L.file.name} 上傳失敗:`, Q);
            }
          if (
            (console.log("上傳成功數量:", B.length),
            console.log(
              "上傳成功的結果:",
              B.map((L) => ({ fileName: L.imageItem.file.name, guid: L.guid }))
            ),
            B.length === 0)
          ) {
            c("所有圖片上傳失敗");
            return;
          }
          console.log("第二階段：分析圖片"),
            console.log("準備分析的圖片數量:", B.length),
            console.log(
              "準備分析的圖片GUIDs:",
              B.map((L) => L.guid)
            );
          const K = [];
          for (const L of B) {
            const { imageItem: Q, guid: E } = L;
            console.log(`開始分析圖片: ${Q.file.name}, GUID: ${E}`);
            try {
              o((H) =>
                H.map((G) =>
                  G.id === Q.id ? { ...G, status: "analyzing" } : G
                )
              );
              const $ = { ValueAry: [E] };
              console.log("=== Analyze Batch API Request Debug ==="),
                console.log("API URL:", "/api/pcmpo/analyze_batch"),
                console.log("Method:", "POST"),
                console.log("Request Data:", JSON.stringify($, null, 2)),
                console.log("準備發送 API 請求...");
              const A = await ke("/api/pcmpo/analyze_batch", {
                method: "POST",
                body: $,
              });
              console.log("API 請求已發送，等待回應..."),
                console.log(
                  "Analyze Batch Response:",
                  JSON.stringify(A, null, 2)
                ),
                A.Code === 200 && A.Data
                  ? (console.log(`✅ 圖片 ${Q.file.name} 分析成功`),
                    o((H) =>
                      H.map((G) =>
                        G.id === Q.id
                          ? { ...G, status: "analyzed", analysisResult: A.Data }
                          : G
                      )
                    ),
                    Array.isArray(A.Data)
                      ? K.push(...A.Data)
                      : (K.push(A.Data),
                        A.Data
                          ? Array.isArray(A.Data)
                            ? K.push(...A.Data)
                            : K.push(A.Data)
                          : K.push({
                              GUID: E,
                              Result: A.Result || "分析失敗",
                              check: "辨識失敗",
                              base64: Q.previewUrl,
                              op_name: at(),
                              op_time: new Date().toLocaleString("zh-TW"),
                              po_num: "",
                              qty: "",
                              batch_num: "",
                              expirydate: "",
                              name: "",
                              cht_name: "",
                              code: "",
                            })))
                  : (console.log(`❌ 圖片 ${Q.file.name} 分析失敗:`, A.Result),
                    o((H) =>
                      H.map((G) =>
                        G.id === Q.id
                          ? {
                              ...G,
                              status: "error",
                              error: A.Result || "分析失敗",
                            }
                          : G
                      )
                    ),
                    K.push({
                      GUID: E,
                      Result: A.Result || "分析失敗",
                      check: "辨識失敗",
                      base64: Q.previewUrl,
                      op_name: at(),
                      create_time: new Date().toLocaleString("zh-TW"),
                      po_num: "",
                      qty: "",
                      batch_num: "",
                      expirydate: "",
                      name: "",
                      cht_name: "",
                      code: "",
                      _isFailed: !0,
                      _failureReason: A.Result || "分析失敗",
                    }));
            } catch ($) {
              console.error(`❌ 圖片 ${Q.file.name} 分析異常:`, $),
                o((A) =>
                  A.map((H) =>
                    H.id === Q.id
                      ? {
                          ...H,
                          status: "error",
                          error: $ instanceof Error ? $.message : "分析失敗",
                        }
                      : H
                  )
                ),
                K.push({
                  GUID: E,
                  Result: $ instanceof Error ? $.message : "分析異常",
                  check: "辨識失敗",
                  base64: Q.previewUrl,
                  op_name: at(),
                  create_time: new Date().toLocaleString("zh-TW"),
                  po_num: "",
                  qty: "",
                  batch_num: "",
                  expirydate: "",
                  name: "",
                  cht_name: "",
                  code: "",
                  _isFailed: !0,
                  _failureReason: $ instanceof Error ? $.message : "分析異常",
                });
            }
          }
          console.log("分析成功數量:", K.length),
            console.log("所有分析結果:", K),
            console.log("=== 批次處理完成 ==="),
            K.length > 0 ? (h(K), g(!0)) : c("沒有成功的分析結果");
        } catch (B) {
          console.error("Batch process error:", B),
            c(B instanceof Error ? B.message : "批次處理失敗");
        } finally {
          i(!1);
        }
      },
      F = async (T) => {
        var L;
        const B = (L = T.target.files) == null ? void 0 : L[0];
        if (!B) return;
        if (!B.name.endsWith(".xlsx") && !B.name.endsWith(".xls")) {
          d("請選擇 Excel 檔案 (.xlsx 或 .xls)", "error"),
            b.current && (b.current.value = "");
          return;
        }
        const K = at();
        if (!K) {
          d("無法取得操作人資訊", "error");
          return;
        }
        C(!0), c(null);
        try {
          console.log("=== 上傳出貨單 Excel ==="),
            console.log("檔案名稱:", B.name),
            console.log("操作人:", K);
          const Q = await fg(B, K);
          console.log("上傳回應:", Q),
            Q.Code === 200
              ? (d(Q.Result || "Excel 上傳成功", "success"),
                n && n(),
                b.current && (b.current.value = ""),
                setTimeout(() => {
                  _();
                }, 500))
              : d(Q.Result || "Excel 上傳失敗", "error");
        } catch (Q) {
          console.error("Excel 上傳失敗:", Q);
          const E = Q instanceof Error ? Q.message : "Excel 上傳失敗";
          d(E, "error");
        } finally {
          C(!1);
        }
      },
      P = (T, B) => {
        switch (T) {
          case "pending":
            return s.jsx("span", {
              className: "text-gray-500",
              children: "待處理",
            });
          case "uploading":
            return s.jsxs("span", {
              className: "text-blue-500 flex items-center",
              children: [
                s.jsx(de, { size: "small", className: "mr-1" }),
                "上傳中",
              ],
            });
          case "uploaded":
            return s.jsxs("span", {
              className: "text-green-500 flex items-center",
              children: [s.jsx(It, { className: "w-4 h-4 mr-1" }), "已上傳"],
            });
          case "analyzing":
            return s.jsxs("span", {
              className: "text-blue-500 flex items-center",
              children: [
                s.jsx(de, { size: "small", className: "mr-1" }),
                "分析中",
              ],
            });
          case "analyzed":
            return s.jsxs("span", {
              className: "text-green-500 flex items-center",
              children: [s.jsx(It, { className: "w-4 h-4 mr-1" }), "已完成"],
            });
          case "error":
            return s.jsxs("span", {
              className: "text-red-500 flex items-center",
              children: [s.jsx(ut, { className: "w-4 h-4 mr-1" }), B || "錯誤"],
            });
          default:
            return null;
        }
      };
    return e
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx(mf, { toasts: f, onRemove: m }),
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
              children: s.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-6 border-b",
                    children: [
                      s.jsxs("div", {
                        className: "flex-1",
                        children: [
                          s.jsxs("h3", {
                            className:
                              "text-lg font-semibold text-gray-900 flex items-center",
                            children: [
                              s.jsx(pr, { className: "w-5 h-5 mr-2" }),
                              "批次上傳出貨單",
                            ],
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-600 mt-1",
                            children: "可同時上傳多張出貨單圖片進行批次分析",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("input", {
                                ref: b,
                                type: "file",
                                accept: ".xlsx,.xls",
                                onChange: F,
                                className: "hidden",
                              }),
                              s.jsx("button", {
                                onClick: () => {
                                  var T;
                                  return (T = b.current) == null
                                    ? void 0
                                    : T.click();
                                },
                                disabled: S || l,
                                className:
                                  "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                title: "上傳出貨單 Excel",
                                children: S
                                  ? s.jsxs(s.Fragment, {
                                      children: [
                                        s.jsx(de, {
                                          size: "small",
                                          className: "mr-2",
                                        }),
                                        "上傳中...",
                                      ],
                                    })
                                  : s.jsxs(s.Fragment, {
                                      children: [
                                        s.jsx(fi, {
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        "上傳 Excel",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                          s.jsx("button", {
                            onClick: _,
                            className:
                              "text-gray-400 hover:text-gray-600 transition-colors",
                            children: s.jsx(Ie, { className: "w-6 h-6" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-200px)]",
                    children: [
                      a &&
                        s.jsxs("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                          children: [
                            s.jsx(ut, {
                              className: "w-4 h-4 mr-2 flex-shrink-0",
                            }),
                            a,
                          ],
                        }),
                      s.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          s.jsxs("div", {
                            children: [
                              s.jsx("label", {
                                className:
                                  "block text-sm font-medium text-gray-700 mb-2",
                                children: "選擇圖片檔案（可多選）",
                              }),
                              s.jsxs("div", {
                                className:
                                  "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                                onClick: () => {
                                  var T;
                                  return (T = y.current) == null
                                    ? void 0
                                    : T.click();
                                },
                                children: [
                                  s.jsx("input", {
                                    ref: y,
                                    type: "file",
                                    accept: "image/*",
                                    multiple: !0,
                                    onChange: k,
                                    className: "hidden",
                                  }),
                                  s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(tf, {
                                        className:
                                          "w-12 h-12 text-gray-400 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "點擊選擇圖片檔案",
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children:
                                              "支援 JPG, PNG, GIF 等格式，可同時選擇多個檔案",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          r.length > 0 &&
                            s.jsxs("div", {
                              children: [
                                s.jsxs("h4", {
                                  className:
                                    "text-sm font-medium text-gray-700 mb-3",
                                  children: [
                                    "已選擇的圖片 (",
                                    r.length,
                                    " 張)",
                                  ],
                                }),
                                s.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                  children: r.map((T) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        className: "border rounded-lg p-3",
                                        children: [
                                          s.jsxs("div", {
                                            className:
                                              "flex items-start justify-between mb-2",
                                            children: [
                                              s.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  s.jsx("p", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 truncate",
                                                    children: T.file.name,
                                                  }),
                                                  s.jsxs("p", {
                                                    className:
                                                      "text-xs text-gray-500",
                                                    children: [
                                                      (
                                                        T.file.size /
                                                        1024 /
                                                        1024
                                                      ).toFixed(2),
                                                      " MB",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              s.jsx("button", {
                                                onClick: () => R(T.id),
                                                className:
                                                  "ml-2 text-red-500 hover:text-red-700",
                                                disabled: l,
                                                children: s.jsx(On, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          }),
                                          T.previewUrl &&
                                            s.jsx("img", {
                                              src: T.previewUrl,
                                              alt: "預覽",
                                              className:
                                                "w-full h-32 object-cover rounded mb-2",
                                            }),
                                          s.jsx("div", {
                                            className: "text-xs",
                                            children: P(T.status, T.error),
                                          }),
                                        ],
                                      },
                                      T.id
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
                    className:
                      "flex justify-between items-center p-6 border-t bg-gray-50",
                    children: [
                      s.jsx("div", {
                        className: "text-sm text-gray-600",
                        children:
                          r.length > 0 &&
                          s.jsxs("span", {
                            children: [
                              "共 ",
                              r.length,
                              " 張圖片 | 待處理: ",
                              r.filter((T) => T.status === "pending").length,
                              " | 已完成: ",
                              r.filter((T) => T.status === "analyzed").length,
                              " | 錯誤: ",
                              r.filter((T) => T.status === "error").length,
                            ],
                          }),
                      }),
                      s.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: _,
                            className:
                              "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            disabled: l,
                            children: "取消",
                          }),
                          s.jsx("button", {
                            onClick: D,
                            disabled:
                              l ||
                              r.filter((T) => T.status === "pending").length ===
                                0,
                            className:
                              "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center",
                            children: l
                              ? s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(de, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "處理中...",
                                  ],
                                })
                              : s.jsxs(s.Fragment, {
                                  children: [
                                    s.jsx(pr, { className: "w-4 h-4 mr-2" }),
                                    "開始批次處理",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(kg, {
              isOpen: p,
              onClose: () => {
                g(!1), h([]), _();
              },
              results: u,
              onDataUpdate: n,
            }),
          ],
        })
      : null;
  },
  $c = ({
    isOpen: e,
    onClose: t,
    inspections: n,
    title: r = "所有驗收單資料",
    onDataUpdate: o,
    isToday: l = !1,
    onDateRangeChange: i,
    initialDateRange: a,
  }) => {
    var _r, jr, $e, yn, Sr;
    const [c, u] = Ce.useState(new Set()),
      [h, p] = Ce.useState(new Set()),
      [g, y] = Ce.useState(null),
      [b, S] = Ce.useState(!1),
      [C, f] = Ce.useState(!1),
      [d, m] = Ce.useState(""),
      [v, _] = Ce.useState("00:00:00"),
      [k, R] = Ce.useState(""),
      [M, V] = Ce.useState("23:59:59"),
      [D, F] = Ce.useState(null),
      [P, T] = Ce.useState({ lot: "", endQty: "", val: "" }),
      [B, K] = Ce.useState(null),
      [L, Q] = Ce.useState({
        isOpen: !1,
        subContent: null,
        inspectionItem: null,
      }),
      [E, $] = Ce.useState(null),
      [A, H] = Ce.useState({ isOpen: !1, imageUrl: "", title: "" }),
      [G, ie] = Ce.useState(null),
      [w, te] = Ce.useState(!1),
      { t: N } = Ns();
    Ce.useEffect(() => {
      if (l) {
        const J = new Date().toISOString().split("T")[0];
        m(J), R(J), _("00:00:00"), V("23:59:59");
      } else if (a) {
        const [I, J] = a,
          X = I.split(" "),
          ee = J.split(" ");
        m(X[0]), _(X[1] || "00:00:00"), R(ee[0]), V(ee[1] || "23:59:59");
      }
    }, [l, a]);
    const z = lf(),
      U = (I) => {
        if (!I) return "";
        try {
          const J = new Date(I),
            X = new Date();
          J.setHours(0, 0, 0, 0), X.setHours(0, 0, 0, 0);
          const ee = J.getTime() - X.getTime(),
            ge = Math.ceil(ee / (1e3 * 60 * 60 * 24)),
            Z = J.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).replace(/\//g, "/");
          return ge === 0
            ? `${Z} (${N("delivery.today")})`
            : ge < 0
            ? `${Z} (${N("delivery.overdue")} ${Math.abs(ge)} ${N(
                "delivery.days"
              )})`
            : `${Z} (${N("delivery.remaining")} ${ge} ${N("delivery.days")})`;
        } catch (J) {
          return console.error("Error formatting arrival time:", J), I;
        }
      },
      q = (I) => {
        if (!I) return "text-gray-500";
        try {
          const J = new Date(I),
            X = new Date();
          J.setHours(0, 0, 0, 0), X.setHours(0, 0, 0, 0);
          const ee = J.getTime() - X.getTime(),
            ge = Math.ceil(ee / (1e3 * 60 * 60 * 24));
          return ge === 0
            ? "text-blue-600 font-medium"
            : ge < 0
            ? "text-red-600 font-medium"
            : "text-green-600 font-medium";
        } catch {
          return "text-gray-500";
        }
      },
      se = (I) => {
        u((J) => {
          const X = new Set(J);
          return X.has(I) ? X.delete(I) : X.add(I), X;
        });
      },
      ae = async (I, J) => {
        if (!z) {
          y("您沒有權限執行此操作");
          return;
        }
        p((X) => new Set([...X, I.GUID])), y(null);
        try {
          console.log("=== Lock/Unlock Sub Content Debug ==="),
            console.log("Sub Content GUID:", I.GUID),
            console.log("Current State:", I.STATE),
            console.log("New State:", J);
          const X = { ...I, STATE: J };
          console.log("Update Data:", JSON.stringify(X, null, 2));
          const ee = await Qr(X);
          console.log("Lock/Unlock Response:", JSON.stringify(ee, null, 2)),
            ee.Code === 200
              ? (console.log(`✅ ${J === "已鎖定" ? "鎖定" : "解鎖"}成功`),
                o && o())
              : y(ee.Result || `${J === "已鎖定" ? "鎖定" : "解鎖"}失敗`);
        } catch (X) {
          console.error("Lock/Unlock error:", X),
            y(
              X instanceof Error
                ? X.message
                : `${J === "已鎖定" ? "鎖定" : "解鎖"}失敗`
            );
        } finally {
          p((X) => {
            const ee = new Set(X);
            return ee.delete(I.GUID), ee;
          });
        }
      },
      oe = async () => {
        if (!z) {
          y("您沒有權限執行此操作");
          return;
        }
        const I = [];
        if (
          (n.forEach((ee) => {
            ee.Sub_content &&
              ee.Sub_content.length > 0 &&
              I.push(...ee.Sub_content);
          }),
          I.length === 0)
        ) {
          y("沒有可操作的子明細");
          return;
        }
        const J = "已鎖定",
          X = "鎖定";
        S(!0), y(null);
        try {
          console.log(`=== 批次${X} Debug ===`),
            console.log("子明細數量:", I.length),
            console.log("目標狀態:", J);
          let ee = 0,
            ge = 0;
          const Z = [];
          for (const st of I)
            try {
              const ot = { ...st, STATE: J },
                lt = await Qr(ot);
              lt.Code === 200
                ? (ee++, console.log(`✅ ${st.GUID} ${X}成功`))
                : (ge++,
                  Z.push(`${st.GUID}: ${lt.Result}`),
                  console.log(`❌ ${st.GUID} ${X}失敗:`, lt.Result));
            } catch (ot) {
              ge++;
              const lt = ot instanceof Error ? ot.message : "未知錯誤";
              Z.push(`${st.GUID}: ${lt}`),
                console.error(`❌ ${st.GUID} ${X}異常:`, ot);
            }
          console.log(`=== 批次${X}結果 ===`),
            console.log("成功數量:", ee),
            console.log("失敗數量:", ge),
            ee > 0
              ? (o && o(),
                ge === 0
                  ? console.log(`✅ 批次${X}完全成功`)
                  : y(
                      `部分成功：${ee} 筆成功，${ge} 筆失敗。失敗原因：${Z.join(
                        "; "
                      )}`
                    ))
              : y(`批次${X}失敗：${Z.join("; ")}`);
        } catch (ee) {
          console.error(`批次${X}失敗:`, ee),
            y(ee instanceof Error ? ee.message : `批次${X}失敗`);
        } finally {
          S(!1);
        }
      },
      Be = (I) => {
        F(I);
        let J = "";
        if (I.VAL)
          try {
            const X = new Date(I.VAL),
              ee = X.getFullYear(),
              ge = String(X.getMonth() + 1).padStart(2, "0"),
              Z = String(X.getDate()).padStart(2, "0");
            J = `${ee}-${ge}-${Z}`;
          } catch {
            console.warn("Invalid date format:", I.VAL);
          }
        T({ lot: I.LOT || "", endQty: I.END_QTY || "", val: J });
      },
      wr = () => {
        F(null), T({ lot: "", endQty: "", val: "" });
      },
      br = async (I) => {
        K(I.GUID), y(null);
        try {
          const J = at();
          if (!J) {
            y("無法取得操作人資訊");
            return;
          }
          const X = P.val ? `${P.val} 00:00:00` : "",
            ee = { ...I, LOT: P.lot, END_QTY: P.endQty, VAL: X, OP: J },
            ge = await Qr(ee);
          ge.Code === 200
            ? (console.log("✅ 更新成功"), o && o(), F(null))
            : y(ge.Result || "更新失敗");
        } catch (J) {
          console.error("更新失敗:", J),
            y(J instanceof Error ? J.message : "更新失敗");
        } finally {
          K(null);
        }
      },
      Ho = (I, J) => {
        Q({ isOpen: !0, subContent: I, inspectionItem: J });
      },
      Go = async () => {
        const { subContent: I } = L;
        if (I) {
          $(I.GUID), y(null);
          try {
            const J = await df(I.GUID, I.Master_GUID);
            J.Code === 200
              ? (console.log("✅ 刪除成功"),
                o && o(),
                Q({ isOpen: !1, subContent: null, inspectionItem: null }))
              : y(J.Result || "刪除失敗");
          } catch (J) {
            console.error("刪除失敗:", J),
              y(J instanceof Error ? J.message : "刪除失敗");
          } finally {
            $(null);
          }
        }
      },
      xn = async (I, J) => {
        ie(I);
        try {
          console.log("=== 查看驗收單圖片 ==="), console.log("Item GUID:", I);
          const X = await ff(I);
          if ((console.log("API Response:", X), X.Code === 200 && X.Data)) {
            const ee = X.Data;
            if ((console.log("Image Data:", ee), ee.base64)) {
              const ge = ee.base64.startsWith("data:")
                ? ee.base64
                : `data:image/jpeg;base64,${ee.base64}`;
              H({ isOpen: !0, imageUrl: ge, title: `${J} - 驗收單圖片` });
            } else alert("此驗收單沒有相關圖片");
          } else alert("查無此驗收單的圖片資料");
        } catch (X) {
          console.error("查看圖片失敗:", X), alert("查看圖片失敗，請稍後再試");
        } finally {
          ie(null);
        }
      },
      Wo = () => {
        if (i && d && k) {
          const I = `${d} ${v}`,
            J = `${k} ${M}`;
          i(I, J), f(!1);
        }
      },
      zn = async () => {
        if (n.length === 0) {
          alert("無資料可下載");
          return;
        }
        te(!0), y(null);
        try {
          console.log("=== 下載驗收明細 ==="),
            console.log("資料筆數:", n.length);
          const I = await dg(n);
          console.log("下載回應 Blob:", I);
          const J = `驗收明細_${d || "all"}_${k || "all"}.xlsx`,
            X = window.URL.createObjectURL(I),
            ee = document.createElement("a");
          (ee.href = X),
            (ee.download = J),
            document.body.appendChild(ee),
            ee.click(),
            document.body.removeChild(ee),
            window.URL.revokeObjectURL(X),
            console.log("✅ 下載成功");
        } catch (I) {
          console.error("下載失敗:", I),
            y(I instanceof Error ? I.message : "下載失敗");
        } finally {
          te(!1);
        }
      },
      Nr = ({ isOpen: I, onClose: J, imageUrl: X, title: ee }) =>
        I
          ? s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[60]",
              children: s.jsxs("div", {
                className: "relative max-w-[90vw] max-h-[90vh]",
                children: [
                  s.jsx("button", {
                    onClick: J,
                    className:
                      "absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors",
                    children: s.jsx(Ie, { className: "w-8 h-8" }),
                  }),
                  s.jsx("img", {
                    src: X,
                    alt: ee,
                    className:
                      "max-w-full max-h-full object-contain rounded-lg shadow-2xl",
                  }),
                  s.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg",
                    children: s.jsx("p", {
                      className: "text-center text-sm",
                      children: ee,
                    }),
                  }),
                ],
              }),
            })
          : null;
    return e
      ? s.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: [
            s.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b bg-gray-50",
                  children: [
                    s.jsxs("div", {
                      children: [
                        s.jsxs("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 flex items-center",
                          children: [
                            s.jsx(Fo, { className: "w-5 h-5 mr-2" }),
                            r,
                            s.jsx("button", {
                              onClick: () => f(!C),
                              className:
                                "ml-2 text-gray-400 hover:text-gray-600 transition-colors",
                              title: "設定查詢日期範圍",
                              children: s.jsx(np, { className: "w-5 h-5" }),
                            }),
                          ],
                        }),
                        s.jsxs("p", {
                          className: "text-sm text-gray-600 mt-1",
                          children: ["共 ", n.length, " 筆驗收單"],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("button", {
                          onClick: zn,
                          disabled: w || n.length === 0,
                          className:
                            "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          title: "下載驗收明細 Excel",
                          children: w
                            ? s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(de, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "下載中...",
                                ],
                              })
                            : s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(Ym, { className: "w-4 h-4 mr-2" }),
                                  "下載明細",
                                ],
                              }),
                        }),
                        s.jsx("button", {
                          onClick: oe,
                          disabled: !z || b || n.length === 0,
                          className: `inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            z
                              ? "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`,
                          title: z
                            ? "批次鎖定/解鎖所有子明細"
                            : "需要管理員權限",
                          children: b
                            ? s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(de, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "處理中...",
                                ],
                              })
                            : s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx(Dc, { className: "w-4 h-4 mr-2" }),
                                  "全部鎖定",
                                ],
                              }),
                        }),
                        s.jsx("button", {
                          onClick: t,
                          className:
                            "text-gray-400 hover:text-gray-600 transition-colors",
                          children: s.jsx(Ie, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "p-6 overflow-y-auto max-h-[calc(90vh-120px)]",
                  children: [
                    C &&
                      s.jsxs("div", {
                        className: "mb-6 p-4 bg-gray-50 rounded-lg border",
                        children: [
                          s.jsx("h4", {
                            className: "text-sm font-medium text-gray-700 mb-3",
                            children: "設定查詢日期範圍",
                          }),
                          s.jsxs("div", {
                            className:
                              "grid grid-cols-1 lg:grid-cols-2 gap-4 items-end",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "開始日期時間",
                                  }),
                                  s.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                      s.jsx("input", {
                                        type: "date",
                                        value: d,
                                        onChange: (I) => m(I.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                      }),
                                      s.jsx("input", {
                                        type: "time",
                                        value: v,
                                        onChange: (I) => _(I.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        step: "1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("label", {
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "結束日期時間",
                                  }),
                                  s.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                      s.jsx("input", {
                                        type: "date",
                                        value: k,
                                        onChange: (I) => R(I.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                      }),
                                      s.jsx("input", {
                                        type: "time",
                                        value: M,
                                        onChange: (I) => V(I.target.value),
                                        className:
                                          "px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        step: "1",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            className: "flex justify-end gap-2 mt-4",
                            children: s.jsx("button", {
                              onClick: Wo,
                              disabled: !d || !k || !v || !M,
                              className:
                                "px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                              children: "送出",
                            }),
                          }),
                        ],
                      }),
                    g &&
                      s.jsx("div", {
                        className:
                          "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                        children: g,
                      }),
                    n.length === 0
                      ? s.jsxs("div", {
                          className: "text-center py-8",
                          children: [
                            s.jsx(An, {
                              className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                            }),
                            s.jsx("p", {
                              className: "text-gray-600",
                              children: "查無驗收資料",
                            }),
                          ],
                        })
                      : s.jsx("div", {
                          className: "overflow-x-auto",
                          children: s.jsxs("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                              s.jsx("thead", {
                                className: "bg-gray-50",
                                children: s.jsxs("tr", {
                                  children: [
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.inspection_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.purchase_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.drug_code"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.item_number"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.drug_name"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.manufacturer"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N("table.arrival_time"),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                      children: N(
                                        "table.received_expected_qty"
                                      ),
                                    }),
                                    s.jsx("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    }),
                                  ],
                                }),
                              }),
                              s.jsx("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: n.map((I) => {
                                  var ge;
                                  const J =
                                      ((ge = I.Sub_content) == null
                                        ? void 0
                                        : ge.reduce(
                                            (Z, st) =>
                                              Z + (parseInt(st.END_QTY) || 0),
                                            0
                                          )) || 0,
                                    X = c.has(I.GUID),
                                    ee =
                                      I.Sub_content && I.Sub_content.length > 0;
                                  return s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsxs(
                                        "tr",
                                        {
                                          className: `hover:bg-gray-50 ${
                                            ee ? "cursor-pointer" : ""
                                          }`,
                                          onClick: () => ee && se(I.GUID),
                                          children: [
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm font-medium text-gray-900",
                                                children: I.IC_SN,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: I.PON,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: I.CODE,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: I.SKDIACODE,
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className: "px-6 py-4",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: [
                                                  s.jsx("div", {
                                                    className: "font-medium",
                                                    children:
                                                      I.CHT_NAME || I.NAME,
                                                  }),
                                                  I.CHT_NAME &&
                                                    I.NAME &&
                                                    I.CHT_NAME !== I.NAME &&
                                                    s.jsx("div", {
                                                      className:
                                                        "text-gray-500 text-xs mt-1",
                                                      children: I.NAME,
                                                    }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsx("span", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: I.BRD || "未指定",
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsxs("div", {
                                                className: `text-sm flex items-center ${q(
                                                  I.DELIVERY_TIME
                                                )}`,
                                                children: [
                                                  s.jsx(ds, {
                                                    className:
                                                      "w-4 h-4 mr-1 text-gray-400",
                                                  }),
                                                  U(I.DELIVERY_TIME),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap",
                                              children: s.jsxs("div", {
                                                className:
                                                  "text-sm text-gray-900",
                                                children: [
                                                  s.jsx("span", {
                                                    className:
                                                      "font-semibold text-green-600",
                                                    children:
                                                      J.toLocaleString(),
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "text-gray-400 mx-1",
                                                    children: "/",
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "font-semibold text-blue-600",
                                                    children: parseInt(
                                                      I.START_QTY
                                                    ).toLocaleString(),
                                                  }),
                                                  s.jsx("span", {
                                                    className:
                                                      "text-gray-500 ml-1",
                                                    children: I.PAKAGE,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            s.jsx("td", {
                                              className:
                                                "px-6 py-4 whitespace-nowrap text-right",
                                              children:
                                                ee &&
                                                (X
                                                  ? s.jsx(Sn, {
                                                      className:
                                                        "w-5 h-5 text-gray-400",
                                                    })
                                                  : s.jsx(Zd, {
                                                      className:
                                                        "w-5 h-5 text-gray-400",
                                                    })),
                                            }),
                                          ],
                                        },
                                        I.GUID
                                      ),
                                      X &&
                                        ee &&
                                        I.Sub_content.map((Z, st) =>
                                          s.jsx(
                                            "tr",
                                            {
                                              className: "bg-gray-50",
                                              children: s.jsx("td", {
                                                colSpan: 9,
                                                className: "px-6 py-4",
                                                children: s.jsxs("div", {
                                                  className:
                                                    "bg-white rounded-md p-4 border border-gray-200 ml-8",
                                                  children: [
                                                    s.jsxs("div", {
                                                      className:
                                                        "flex justify-between items-start mb-3",
                                                      children: [
                                                        s.jsxs("h6", {
                                                          className:
                                                            "text-sm font-medium text-gray-900",
                                                          children: [
                                                            "子明細資料 #",
                                                            st + 1,
                                                          ],
                                                        }),
                                                        s.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            Z.STATE !==
                                                              "已鎖定" &&
                                                              s.jsx(
                                                                s.Fragment,
                                                                {
                                                                  children:
                                                                    (D == null
                                                                      ? void 0
                                                                      : D.GUID) ===
                                                                    Z.GUID
                                                                      ? s.jsxs(
                                                                          s.Fragment,
                                                                          {
                                                                            children:
                                                                              [
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        br(
                                                                                          Z
                                                                                        ),
                                                                                    disabled:
                                                                                      B ===
                                                                                      Z.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    children:
                                                                                      [
                                                                                        B ===
                                                                                        Z.GUID
                                                                                          ? s.jsx(
                                                                                              de,
                                                                                              {
                                                                                                size: "small",
                                                                                                className:
                                                                                                  "mr-1",
                                                                                              }
                                                                                            )
                                                                                          : s.jsx(
                                                                                              "svg",
                                                                                              {
                                                                                                className:
                                                                                                  "w-3 h-3 mr-1",
                                                                                                fill: "none",
                                                                                                stroke:
                                                                                                  "currentColor",
                                                                                                viewBox:
                                                                                                  "0 0 24 24",
                                                                                                children:
                                                                                                  s.jsx(
                                                                                                    "path",
                                                                                                    {
                                                                                                      strokeLinecap:
                                                                                                        "round",
                                                                                                      strokeLinejoin:
                                                                                                        "round",
                                                                                                      strokeWidth: 2,
                                                                                                      d: "M5 13l4 4L19 7",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                        "儲存",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      wr,
                                                                                    disabled:
                                                                                      B ===
                                                                                      Z.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    children:
                                                                                      [
                                                                                        s.jsx(
                                                                                          Ie,
                                                                                          {
                                                                                            className:
                                                                                              "w-3 h-3 mr-1",
                                                                                          }
                                                                                        ),
                                                                                        "取消",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        )
                                                                      : s.jsxs(
                                                                          s.Fragment,
                                                                          {
                                                                            children:
                                                                              [
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        Be(
                                                                                          Z
                                                                                        ),
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 transition-colors",
                                                                                    title:
                                                                                      "編輯此子明細",
                                                                                    children:
                                                                                      [
                                                                                        s.jsx(
                                                                                          ca,
                                                                                          {
                                                                                            className:
                                                                                              "w-3 h-3 mr-1",
                                                                                          }
                                                                                        ),
                                                                                        "編輯",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                s.jsxs(
                                                                                  "button",
                                                                                  {
                                                                                    onClick:
                                                                                      () =>
                                                                                        Ho(
                                                                                          Z,
                                                                                          I
                                                                                        ),
                                                                                    disabled:
                                                                                      E ===
                                                                                      Z.GUID,
                                                                                    className:
                                                                                      "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                                    title:
                                                                                      "刪除此子明細",
                                                                                    children:
                                                                                      [
                                                                                        E ===
                                                                                        Z.GUID
                                                                                          ? s.jsx(
                                                                                              de,
                                                                                              {
                                                                                                size: "small",
                                                                                                className:
                                                                                                  "mr-1",
                                                                                              }
                                                                                            )
                                                                                          : s.jsx(
                                                                                              On,
                                                                                              {
                                                                                                className:
                                                                                                  "w-3 h-3 mr-1",
                                                                                              }
                                                                                            ),
                                                                                        "刪除",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                }
                                                              ),
                                                            s.jsxs("button", {
                                                              onClick: () =>
                                                                xn(
                                                                  I.GUID,
                                                                  I.CHT_NAME ||
                                                                    I.NAME
                                                                ),
                                                              disabled:
                                                                G === I.GUID,
                                                              className:
                                                                "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                              title:
                                                                "查看驗收單圖片",
                                                              children: [
                                                                G === I.GUID
                                                                  ? s.jsx(de, {
                                                                      size: "small",
                                                                      className:
                                                                        "mr-1",
                                                                    })
                                                                  : s.jsx(ef, {
                                                                      className:
                                                                        "w-3 h-3 mr-1",
                                                                    }),
                                                                "查看",
                                                              ],
                                                            }),
                                                            z &&
                                                              s.jsx("div", {
                                                                className:
                                                                  "flex gap-2",
                                                                children:
                                                                  Z.STATE ===
                                                                  "未鎖定"
                                                                    ? s.jsxs(
                                                                        "button",
                                                                        {
                                                                          onClick:
                                                                            () =>
                                                                              ae(
                                                                                Z,
                                                                                "已鎖定"
                                                                              ),
                                                                          disabled:
                                                                            h.has(
                                                                              Z.GUID
                                                                            ),
                                                                          className:
                                                                            "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                          title:
                                                                            "鎖定此子明細",
                                                                          children:
                                                                            [
                                                                              h.has(
                                                                                Z.GUID
                                                                              )
                                                                                ? s.jsx(
                                                                                    de,
                                                                                    {
                                                                                      size: "small",
                                                                                      className:
                                                                                        "mr-1",
                                                                                    }
                                                                                  )
                                                                                : s.jsx(
                                                                                    Dc,
                                                                                    {
                                                                                      className:
                                                                                        "w-3 h-3 mr-1",
                                                                                    }
                                                                                  ),
                                                                              "鎖定",
                                                                            ],
                                                                        }
                                                                      )
                                                                    : s.jsxs(
                                                                        "button",
                                                                        {
                                                                          onClick:
                                                                            () =>
                                                                              ae(
                                                                                Z,
                                                                                "未鎖定"
                                                                              ),
                                                                          disabled:
                                                                            h.has(
                                                                              Z.GUID
                                                                            ),
                                                                          className:
                                                                            "inline-flex items-center px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                                                          title:
                                                                            "解鎖此子明細",
                                                                          children:
                                                                            [
                                                                              h.has(
                                                                                Z.GUID
                                                                              )
                                                                                ? s.jsx(
                                                                                    de,
                                                                                    {
                                                                                      size: "small",
                                                                                      className:
                                                                                        "mr-1",
                                                                                    }
                                                                                  )
                                                                                : s.jsx(
                                                                                    sp,
                                                                                    {
                                                                                      className:
                                                                                        "w-3 h-3 mr-1",
                                                                                    }
                                                                                  ),
                                                                              "解鎖",
                                                                            ],
                                                                        }
                                                                      ),
                                                              }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (D == null
                                                      ? void 0
                                                      : D.GUID) === Z.GUID
                                                      ? s.jsxs("div", {
                                                          className:
                                                            "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                          children: [
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "批號",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "text",
                                                                  value: P.lot,
                                                                  onChange: (
                                                                    ot
                                                                  ) =>
                                                                    T((lt) => ({
                                                                      ...lt,
                                                                      lot: ot
                                                                        .target
                                                                        .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "實收數量",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "number",
                                                                  value:
                                                                    P.endQty,
                                                                  onChange: (
                                                                    ot
                                                                  ) =>
                                                                    T((lt) => ({
                                                                      ...lt,
                                                                      endQty:
                                                                        ot
                                                                          .target
                                                                          .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("label", {
                                                                  className:
                                                                    "block text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "效期",
                                                                }),
                                                                s.jsx("input", {
                                                                  type: "date",
                                                                  value: P.val,
                                                                  onChange: (
                                                                    ot
                                                                  ) =>
                                                                    T((lt) => ({
                                                                      ...lt,
                                                                      val: ot
                                                                        .target
                                                                        .value,
                                                                    })),
                                                                  className:
                                                                    "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        })
                                                      : s.jsxs("div", {
                                                          className:
                                                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                                          children: [
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "數量資訊",
                                                                }),
                                                                s.jsx("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children:
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "實收:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            s.jsxs(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "font-medium text-green-600",
                                                                                children:
                                                                                  [
                                                                                    Z.END_QTY,
                                                                                    " ",
                                                                                    Z.PAKAGE,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "效期批號",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children: [
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "效期:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            Z.VAL
                                                                              ? new Date(
                                                                                  Z.VAL
                                                                                )
                                                                                  .toLocaleDateString(
                                                                                    "zh-TW",
                                                                                    {
                                                                                      year: "numeric",
                                                                                      month:
                                                                                        "2-digit",
                                                                                      day: "2-digit",
                                                                                    }
                                                                                  )
                                                                                  .replace(
                                                                                    /\//g,
                                                                                    "/"
                                                                                  )
                                                                              : "",
                                                                          ],
                                                                      }
                                                                    ),
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-gray-500",
                                                                                children:
                                                                                  "批號:",
                                                                              }
                                                                            ),
                                                                            " ",
                                                                            Z.LOT,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "操作資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm space-y-1",
                                                                  children: [
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center",
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              rf,
                                                                              {
                                                                                className:
                                                                                  "w-3 h-3 text-gray-400 mr-1",
                                                                              }
                                                                            ),
                                                                            Z.OP,
                                                                          ],
                                                                      }
                                                                    ),
                                                                    s.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center",
                                                                        children:
                                                                          [
                                                                            s.jsx(
                                                                              ds,
                                                                              {
                                                                                className:
                                                                                  "w-3 h-3 text-gray-400 mr-1",
                                                                              }
                                                                            ),
                                                                            Z.OP_TIME,
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("h6", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase mb-1",
                                                                  children:
                                                                    "狀態",
                                                                }),
                                                                s.jsx("div", {
                                                                  className:
                                                                    "text-sm",
                                                                  children:
                                                                    s.jsx(
                                                                      "span",
                                                                      {
                                                                        className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                                                          Z.STATE ===
                                                                          "未鎖定"
                                                                            ? "bg-yellow-100 text-yellow-800"
                                                                            : "bg-green-100 text-green-800"
                                                                        }`,
                                                                        children:
                                                                          Z.STATE,
                                                                      }
                                                                    ),
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                    (Z.BARCODE1 ||
                                                      Z.BARCODE2 ||
                                                      Z.NOTE) &&
                                                      s.jsxs("div", {
                                                        className:
                                                          "mt-3 pt-3 border-t border-gray-100",
                                                        children: [
                                                          (Z.BARCODE1 ||
                                                            Z.BARCODE2) &&
                                                            s.jsxs("div", {
                                                              className: "mb-2",
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "條碼資訊",
                                                                }),
                                                                s.jsxs("div", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children: [
                                                                    Z.BARCODE1 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼1: ",
                                                                              Z.BARCODE1,
                                                                            ],
                                                                        }
                                                                      ),
                                                                    Z.BARCODE2 &&
                                                                      s.jsxs(
                                                                        "div",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "條碼2: ",
                                                                              Z.BARCODE2,
                                                                            ],
                                                                        }
                                                                      ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                          Z.NOTE &&
                                                            s.jsxs("div", {
                                                              children: [
                                                                s.jsx("span", {
                                                                  className:
                                                                    "text-xs font-medium text-gray-500 uppercase",
                                                                  children:
                                                                    "備註",
                                                                }),
                                                                s.jsx("p", {
                                                                  className:
                                                                    "text-sm text-gray-600 mt-1",
                                                                  children:
                                                                    Z.NOTE,
                                                                }),
                                                              ],
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            `${I.GUID}-sub-${st}`
                                          )
                                        ),
                                    ],
                                  });
                                }),
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex justify-end p-6 border-t bg-gray-50",
                  children: s.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                    children: "關閉",
                  }),
                }),
              ],
            }),
            L.isOpen &&
              s.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]",
                children: s.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b",
                      children: [
                        s.jsx("h3", {
                          className: "text-lg font-semibold text-gray-900",
                          children: "確認刪除",
                        }),
                        s.jsx("button", {
                          onClick: () =>
                            Q({
                              isOpen: !1,
                              subContent: null,
                              inspectionItem: null,
                            }),
                          className:
                            "text-gray-400 hover:text-gray-600 transition-colors",
                          children: s.jsx(Ie, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "p-6",
                      children: [
                        s.jsx("p", {
                          className: "text-sm text-gray-600 mb-4",
                          children: "您確定要刪除此子明細嗎？此操作無法復原。",
                        }),
                        s.jsxs("div", {
                          className: "bg-gray-50 rounded-lg p-4 space-y-2 mb-6",
                          children: [
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "藥品名稱:",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children:
                                    ((_r = L.inspectionItem) == null
                                      ? void 0
                                      : _r.CHT_NAME) ||
                                    ((jr = L.inspectionItem) == null
                                      ? void 0
                                      : jr.NAME),
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "批號:",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children:
                                    ($e = L.subContent) == null
                                      ? void 0
                                      : $e.LOT,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                s.jsx("span", {
                                  className: "text-sm text-gray-500",
                                  children: "實收數量:",
                                }),
                                s.jsxs("span", {
                                  className:
                                    "text-sm font-medium text-gray-900",
                                  children: [
                                    (yn = L.subContent) == null
                                      ? void 0
                                      : yn.END_QTY,
                                    " ",
                                    (Sr = L.subContent) == null
                                      ? void 0
                                      : Sr.PAKAGE,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            s.jsx("button", {
                              onClick: () =>
                                Q({
                                  isOpen: !1,
                                  subContent: null,
                                  inspectionItem: null,
                                }),
                              className:
                                "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                              disabled: E,
                              children: "取消",
                            }),
                            s.jsx("button", {
                              onClick: Go,
                              disabled: E,
                              className:
                                "flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                              children: E
                                ? s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx(de, {
                                        size: "small",
                                        className: "mr-2",
                                      }),
                                      "刪除中...",
                                    ],
                                  })
                                : s.jsxs(s.Fragment, {
                                    children: [
                                      s.jsx(On, { className: "w-4 h-4 mr-2" }),
                                      "確認刪除",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            s.jsx(Nr, {
              isOpen: A.isOpen,
              onClose: () => H({ isOpen: !1, imageUrl: "", title: "" }),
              imageUrl: A.imageUrl,
              title: A.title,
            }),
          ],
        })
      : null;
  },
  Dg = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = x.useState(null),
      [l, i] = x.useState(!1),
      [a, c] = x.useState(null),
      [u, h] = x.useState(null),
      p = x.useRef(null),
      g = () => {
        o(null), c(null), h(null), p.current && (p.current.value = "");
      },
      y = () => {
        g(), t();
      },
      b = (C) => {
        var v;
        const f = (v = C.target.files) == null ? void 0 : v[0];
        if (!f) return;
        if (
          ![
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ".xls",
            ".xlsx",
          ].some((_) => f.type === _ || f.name.toLowerCase().endsWith(_))
        ) {
          c("請選擇 Excel 檔案 (.xls 或 .xlsx)");
          return;
        }
        if (f.size > 50 * 1024 * 1024) {
          c("檔案大小不可超過 50MB");
          return;
        }
        o(f), c(null), h(null);
      },
      S = async () => {
        if (!r) return;
        const C = da(),
          f = at();
        if (!C || !f) {
          c("無法取得操作人資訊");
          return;
        }
        i(!0), c(null), h(null);
        try {
          console.log("=== Excel Upload Debug ==="),
            console.log("Selected file:", r.name, r.size, "bytes"),
            console.log("Operator ID:", C),
            console.log("Operator Name:", f);
          const d = await ag(r, C, f);
          console.log("Response Data:", d),
            console.log("==============================="),
            d.Code === 200
              ? (console.log("✅ Excel upload successful"),
                h(d.Result || "Excel 檔案上傳成功"),
                n && n(),
                setTimeout(() => {
                  y();
                }, 3e3))
              : (console.log("❌ Excel upload failed"),
                c(d.Result || "上傳失敗"));
        } catch (d) {
          console.error("Excel upload error:", d),
            console.log("❌ Exception occurred during upload"),
            c(d instanceof Error ? d.message : "系統錯誤，請稍後再試");
        } finally {
          i(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(pr, { className: "w-5 h-5 mr-2" }),
                          "建單上傳",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: "上傳 Excel 檔案來建立驗收資料",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: y,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "p-6",
                children: [
                  a &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(ut, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        a,
                      ],
                    }),
                  u &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(It, { className: "w-4 h-4 mr-2 flex-shrink-0" }),
                        u,
                      ],
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "選擇 Excel 檔案",
                          }),
                          s.jsxs("div", {
                            className:
                              "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer",
                            onClick: () => {
                              var C;
                              return (C = p.current) == null
                                ? void 0
                                : C.click();
                            },
                            children: [
                              s.jsx("input", {
                                ref: p,
                                type: "file",
                                accept:
                                  ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                onChange: b,
                                className: "hidden",
                              }),
                              r
                                ? s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(fi, {
                                        className:
                                          "w-12 h-12 text-green-500 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: r.name,
                                          }),
                                          s.jsxs("p", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                              (r.size / 1024 / 1024).toFixed(2),
                                              " MB",
                                            ],
                                          }),
                                          s.jsx("p", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: "點擊重新選擇檔案",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : s.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      s.jsx(fi, {
                                        className:
                                          "w-12 h-12 text-gray-400 mx-auto",
                                      }),
                                      s.jsxs("div", {
                                        children: [
                                          s.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: "點擊選擇 Excel 檔案",
                                          }),
                                          s.jsx("p", {
                                            className: "text-xs text-gray-500",
                                            children:
                                              "支援 .xls 和 .xlsx 格式，檔案大小限制 50MB",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4",
                        children: [
                          s.jsx("h4", {
                            className: "text-sm font-medium text-blue-800 mb-2",
                            children: "使用說明",
                          }),
                          s.jsxs("ul", {
                            className: "text-xs text-blue-700 space-y-1",
                            children: [
                              s.jsx("li", {
                                children: "• 請確保 Excel 檔案格式正確",
                              }),
                              s.jsx("li", {
                                children: "• 檔案大小不可超過 50MB",
                              }),
                              s.jsx("li", {
                                children: "• 上傳成功後會自動更新驗收資料",
                              }),
                              s.jsx("li", {
                                children: "• 如有錯誤請檢查檔案內容格式",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: y,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: l,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        onClick: S,
                        disabled: l || !r,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: l
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "上傳中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(pr, { className: "w-4 h-4 mr-2" }),
                                "上傳",
                              ],
                            }),
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
  Tg = ({ isOpen: e, onClose: t, onDataUpdate: n }) => {
    const [r, o] = x.useState([]),
      [l, i] = x.useState(!1),
      [a, c] = x.useState(!1),
      [u, h] = x.useState(null),
      [p, g] = x.useState(null),
      [y, b] = x.useState({
        pon: "",
        icSn: "",
        code: "",
        name: "",
        brd: "",
        skdiacode: "",
        startQty: "",
      }),
      [S, C] = x.useState([]),
      [f, d] = x.useState(!1),
      [m, v] = x.useState(!1),
      _ = async () => {
        c(!0);
        try {
          const P = await hf();
          P.Code === 200 && P.Data
            ? (o(P.Data), console.log("藥檔資料載入成功:", P.Data.length, "筆"))
            : (console.error("藥檔資料載入失敗:", P.Result),
              h(P.Result || "載入藥檔資料失敗"));
        } catch (P) {
          console.error("載入藥檔資料異常:", P),
            h(P instanceof Error ? P.message : "載入藥檔資料失敗");
        } finally {
          c(!1);
        }
      };
    x.useEffect(() => {
      e && r.length === 0 && _();
    }, [e]);
    const k = () => {
        b({
          pon: "",
          icSn: "",
          code: "",
          name: "",
          brd: "",
          skdiacode: "",
          startQty: "",
        }),
          h(null),
          g(null),
          d(!1),
          v(!1),
          C([]);
      },
      R = () => {
        k(), t();
      },
      M = (P) => {
        if ((b((T) => ({ ...T, code: P })), P.trim())) {
          const T = r.filter((B) =>
            B.CODE.toLowerCase().includes(P.toLowerCase())
          );
          C(T), d(!0), v(!1);
        } else d(!1), C([]);
      },
      V = (P) => {
        if ((b((T) => ({ ...T, name: P })), P.trim())) {
          const T = r.filter(
            (B) =>
              B.NAME.toLowerCase().includes(P.toLowerCase()) ||
              (B.CHT_NAME &&
                B.CHT_NAME.toLowerCase().includes(P.toLowerCase())) ||
              B.DIANAME.toLowerCase().includes(P.toLowerCase()) ||
              B.TRADENAME.toLowerCase().includes(P.toLowerCase())
          );
          C(T), v(!0), d(!1);
        } else v(!1), C([]);
      },
      D = (P) => {
        b((T) => ({
          ...T,
          code: P.CODE,
          name: P.NAME,
          skdiacode: P.SKDIACODE,
          brd: P.BRD || T.brd,
        })),
          d(!1),
          v(!1),
          C([]);
      },
      F = async (P) => {
        P.preventDefault(), i(!0), h(null), g(null);
        try {
          const T = await cg(
            y.pon,
            y.icSn,
            y.code,
            y.name,
            y.brd,
            y.skdiacode,
            y.startQty
          );
          T.Code === 200
            ? (g("手動建單成功"),
              n && n(),
              setTimeout(() => {
                R();
              }, 3e3))
            : h(T.Result || "建單失敗");
        } catch (T) {
          console.error("手動建單失敗:", T),
            h(T instanceof Error ? T.message : "系統錯誤，請稍後再試");
        } finally {
          i(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-6 border-b",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsxs("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 flex items-center",
                        children: [
                          s.jsx(mr, { className: "w-5 h-5 mr-2" }),
                          "手動建單",
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-sm text-gray-600 mt-1",
                        children: "手動建立驗收資料",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: R,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: F,
                className: "p-6",
                children: [
                  a &&
                    s.jsxs("div", {
                      className:
                        "mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-sm flex items-center",
                      children: [
                        s.jsx(de, { size: "small", className: "mr-2" }),
                        "載入藥檔資料中...",
                      ],
                    }),
                  u &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: u,
                    }),
                  p &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm",
                      children: p,
                    }),
                  s.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "請購單號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: y.pon,
                            onChange: (P) => b({ ...y, pon: P.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入請購單號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "驗收單號",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: y.icSn,
                            onChange: (P) => b({ ...y, icSn: P.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "請輸入驗收單號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "藥碼 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: y.code,
                                onChange: (P) => M(P.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                placeholder: "請輸入藥碼",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx(fs, {
                                  className: "h-4 w-4 text-gray-400",
                                }),
                              }),
                            ],
                          }),
                          f &&
                            S.length > 0 &&
                            s.jsx("div", {
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                              children: S.slice(0, 10).map((P, T) =>
                                s.jsxs(
                                  "div",
                                  {
                                    onClick: () => D(P),
                                    className:
                                      "px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0",
                                    children: [
                                      s.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: P.CODE,
                                      }),
                                      s.jsx("div", {
                                        className: "text-xs text-gray-600",
                                        children: P.CHT_NAME || P.NAME,
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-500",
                                        children: ["料號: ", P.SKDIACODE],
                                      }),
                                    ],
                                  },
                                  T
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
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "藥名 *",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                type: "text",
                                value: y.name,
                                onChange: (P) => V(P.target.value),
                                className:
                                  "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                required: !0,
                                placeholder: "請輸入藥名",
                              }),
                              s.jsx("div", {
                                className:
                                  "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
                                children: s.jsx(fs, {
                                  className: "h-4 w-4 text-gray-400",
                                }),
                              }),
                            ],
                          }),
                          m &&
                            S.length > 0 &&
                            s.jsx("div", {
                              className:
                                "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                              children: S.slice(0, 10).map((P, T) =>
                                s.jsxs(
                                  "div",
                                  {
                                    onClick: () => D(P),
                                    className:
                                      "px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0",
                                    children: [
                                      s.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: P.NAME,
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-600",
                                        children: ["藥碼: ", P.CODE],
                                      }),
                                      s.jsxs("div", {
                                        className: "text-xs text-gray-500",
                                        children: ["料號: ", P.SKDIACODE],
                                      }),
                                    ],
                                  },
                                  T
                                )
                              ),
                            }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "料號 *",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: y.skdiacode,
                            onChange: (P) =>
                              b({ ...y, skdiacode: P.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            placeholder: "請輸入料號",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "廠牌",
                          }),
                          s.jsx("input", {
                            type: "text",
                            value: y.brd,
                            onChange: (P) => b({ ...y, brd: P.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            placeholder: "請輸入廠牌",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "應收數量 *",
                          }),
                          s.jsx("input", {
                            type: "number",
                            value: y.startQty,
                            onChange: (P) =>
                              b({ ...y, startQty: P.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            required: !0,
                            min: "1",
                            step: "1",
                            placeholder: "請輸入應收數量",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: R,
                        className:
                          "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                        disabled: l,
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: l || a,
                        className:
                          "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center",
                        children: l
                          ? s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(de, { size: "small", className: "mr-2" }),
                                "建單中...",
                              ],
                            })
                          : s.jsxs(s.Fragment, {
                              children: [
                                s.jsx(mr, { className: "w-4 h-4 mr-2" }),
                                "確認建單",
                              ],
                            }),
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
  Ig = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = x.useRef(null),
      o = x.useRef(null),
      l = x.useRef(null),
      i = x.useRef(null),
      [a, c] = x.useState(null),
      [u, h] = x.useState(!1),
      [p, g] = x.useState(window.innerWidth < 768),
      [y, b] = x.useState(null);
    x.useEffect(() => {
      const C = () => g(window.innerWidth < 768);
      return (
        window.addEventListener("resize", C),
        () => window.removeEventListener("resize", C)
      );
    }, []);
    const S = async (C) => {
      if (!r.current || !i.current) return;
      const f = C.currentTarget.getBoundingClientRect(),
        d = (C.clientX - f.left) / f.width,
        m = (C.clientY - f.top) / f.height;
      b({ x: C.clientX - f.left, y: C.clientY - f.top }),
        setTimeout(() => b(null), 1e3);
      try {
        const v = i.current.getVideoTracks()[0],
          _ = v.getCapabilities();
        if ("focusMode" in _) {
          const k = { advanced: [{ focusMode: "single-shot" }] };
          await v.applyConstraints(k);
        }
        if ("pointsOfInterest" in _) {
          const k = { advanced: [{ pointsOfInterest: [{ x: d, y: m }] }] };
          await v.applyConstraints(k);
        }
      } catch (v) {
        console.log("Focus not supported or failed:", v);
      }
    };
    return (
      x.useEffect(() => {
        let C = null,
          f = null;
        const d = () => {
            f && clearInterval(f),
              C && (C.getTracks().forEach((_) => _.stop()), (i.current = null));
          },
          m = async () => {
            var V, D, F;
            if (!r.current || !o.current) return;
            const _ = r.current,
              k = o.current,
              R = k.getContext("2d");
            if (!R || _.readyState < 2) return;
            (k.width = _.videoWidth),
              (k.height = _.videoHeight),
              R.drawImage(_, 0, 0, k.width, k.height);
            const M = await new Promise((P) => k.toBlob(P, "image/jpeg", 0.8));
            if (M)
              try {
                const P = new FormData();
                P.append("file", M);
                const T = await hg(P),
                  B =
                    (F =
                      (D =
                        (V = T == null ? void 0 : T.results) == null
                          ? void 0
                          : V[0]) == null
                        ? void 0
                        : D.code) == null
                      ? void 0
                      : F.trim();
                B && (d(), n(B), t());
              } catch (P) {
                console.error("掃描錯誤:", P);
              }
          };
        return (
          e
            ? (async () => {
                try {
                  (C = await navigator.mediaDevices.getUserMedia({
                    video: {
                      facingMode: "environment",
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    },
                  })),
                    (i.current = C),
                    r.current && (r.current.srcObject = C),
                    h(!0),
                    (f = setInterval(m, 600));
                } catch {
                  c("無法開啟相機，請確認已授權使用相機");
                }
              })()
            : d(),
          () => d()
        );
      }, [e, n, t]),
      e
        ? p
          ? s.jsxs("div", {
              className: "fixed inset-0 bg-black text-white flex flex-col z-50",
              children: [
                s.jsxs("div", {
                  className: "absolute inset-0 w-full h-full",
                  onClick: S,
                  children: [
                    s.jsx("video", {
                      ref: r,
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      className: "w-full h-full object-cover",
                    }),
                    s.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: s.jsxs("div", {
                        className:
                          "relative w-64 h-48 border-2 border-blue-400 rounded-lg",
                        children: [
                          s.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1",
                          }),
                          u &&
                            s.jsx("div", {
                              className:
                                "absolute top-0 left-0 right-0 h-1 bg-blue-400 animate-scan shadow-lg shadow-blue-400",
                            }),
                        ],
                      }),
                    }),
                    y &&
                      s.jsx("div", {
                        className:
                          "absolute w-20 h-20 border-2 border-green-400 rounded-full pointer-events-none",
                        style: {
                          left: y.x - 40,
                          top: y.y - 40,
                          animation: "ping 0.5s ease-out",
                        },
                      }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "relative z-10 p-4 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx(di, { className: "w-5 h-5 text-blue-400 mr-2" }),
                        s.jsx("h2", {
                          className: "text-lg font-semibold",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: t,
                      children: s.jsx(Ie, {
                        className: "w-6 h-6 text-gray-300",
                      }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className:
                    "flex-1 flex items-center justify-center pointer-events-none",
                  children:
                    a &&
                    s.jsx("div", {
                      className:
                        "bg-red-600 bg-opacity-60 text-sm px-4 py-2 rounded-lg",
                      children: a,
                    }),
                }),
                s.jsxs("div", {
                  className:
                    "relative z-10 bg-black bg-opacity-60 text-center py-3 pb-[env(safe-area-inset-bottom)]",
                  children: [
                    !a &&
                      s.jsxs(s.Fragment, {
                        children: [
                          s.jsx("p", {
                            className: "text-sm",
                            children: "請將條碼對準掃描框",
                          }),
                          s.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "點擊畫面可對焦 | 支援一維與二維條碼",
                          }),
                        ],
                      }),
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "mt-3 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700",
                      children: "取消",
                    }),
                  ],
                }),
                s.jsx("canvas", { ref: o, className: "hidden" }),
              ],
            })
          : s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
              children: s.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          s.jsx(di, {
                            className: "w-6 h-6 text-blue-600 mr-2",
                          }),
                          s.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "條碼掃描",
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: t,
                        className: "text-gray-400 hover:text-gray-600",
                        children: s.jsx(Ie, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-4",
                    children: [
                      a &&
                        s.jsx("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                          children: a,
                        }),
                      s.jsxs("div", {
                        ref: l,
                        className:
                          "relative bg-black rounded-lg overflow-hidden cursor-pointer",
                        style: { aspectRatio: "16/9" },
                        onClick: S,
                        children: [
                          s.jsx("video", {
                            ref: r,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            className: "w-full h-full object-cover",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none",
                            children: s.jsxs("div", {
                              className:
                                "relative w-64 h-48 border-2 border-blue-500 rounded-lg",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1",
                                }),
                                u &&
                                  s.jsx("div", {
                                    className:
                                      "absolute top-0 left-0 right-0 h-1 bg-blue-500 animate-scan shadow-lg shadow-blue-500",
                                  }),
                              ],
                            }),
                          }),
                          y &&
                            s.jsx("div", {
                              className:
                                "absolute w-16 h-16 border-2 border-green-400 rounded-full pointer-events-none animate-ping",
                              style: {
                                left: y.x - 32,
                                top: y.y - 32,
                                animation: "ping 0.5s ease-out",
                              },
                            }),
                        ],
                      }),
                      s.jsx("canvas", { ref: o, className: "hidden" }),
                      s.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-600",
                        children: [
                          s.jsx("p", { children: "請將條碼對準掃描框中央" }),
                          s.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "點擊畫面可對焦 | 支援一維條碼與二維條碼（QR Code）",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: s.jsx("button", {
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
  Rg = ({ isOpen: e, onClose: t, barcode: n, onSuccess: r }) => {
    const [o, l] = x.useState([]),
      [i, a] = x.useState(!0),
      [c, u] = x.useState(!1),
      [h, p] = x.useState(null),
      [g, y] = x.useState(""),
      [b, S] = x.useState(""),
      [C, f] = x.useState(""),
      [d, m] = x.useState(""),
      [v, _] = x.useState(null),
      [k, R] = x.useState(!1),
      [M, V] = x.useState(!1),
      [D, F] = x.useState(!1),
      [P, T] = x.useState(!1),
      B = x.useRef(null),
      K = x.useRef(null),
      L = x.useRef(null),
      Q = x.useRef(null);
    x.useEffect(() => {
      e ? $() : E();
    }, [e]);
    const E = () => {
      y(""), S(""), f(""), m(""), _(null), p(null), R(!1), V(!1), F(!1), T(!1);
    };
    x.useEffect(() => {
      const N = (z) => {
        B.current && !B.current.contains(z.target) && R(!1),
          K.current && !K.current.contains(z.target) && V(!1),
          L.current && !L.current.contains(z.target) && F(!1),
          Q.current && !Q.current.contains(z.target) && T(!1);
      };
      return (
        document.addEventListener("mousedown", N),
        () => {
          document.removeEventListener("mousedown", N);
        }
      );
    }, []);
    const $ = async () => {
        a(!0), p(null);
        try {
          const N = await hf();
          console.log("藥檔資料:", N),
            N.Code === 200 && N.Data
              ? l(N.Data)
              : p(N.Result || "載入藥檔失敗");
        } catch (N) {
          console.error("載入藥檔失敗:", N), p("載入藥檔失敗");
        } finally {
          a(!1);
        }
      },
      A = x.useMemo(
        () =>
          !o.length || !g
            ? []
            : o.filter((N) => {
                var z;
                return (z = N.NAME) == null
                  ? void 0
                  : z.toLowerCase().includes(g.toLowerCase());
              }),
        [o, g]
      ),
      H = x.useMemo(
        () =>
          !o.length || !b
            ? []
            : o.filter((N) => {
                var z;
                return (z = N.CHT_NAME) == null
                  ? void 0
                  : z.toLowerCase().includes(b.toLowerCase());
              }),
        [o, b]
      ),
      G = x.useMemo(
        () =>
          !o.length || !C
            ? []
            : o.filter((N) => {
                var z;
                return (z = N.CODE) == null
                  ? void 0
                  : z.toLowerCase().includes(C.toLowerCase());
              }),
        [o, C]
      ),
      ie = x.useMemo(
        () =>
          !o.length || !d
            ? []
            : o.filter((N) => {
                var z;
                return (z = N.SKDIACODE) == null
                  ? void 0
                  : z.toLowerCase().includes(d.toLowerCase());
              }),
        [o, d]
      ),
      w = (N) => {
        _(N),
          y(N.NAME || ""),
          S(N.CHT_NAME || ""),
          f(N.CODE || ""),
          m(N.SKDIACODE || ""),
          R(!1),
          V(!1),
          F(!1),
          T(!1);
      },
      te = async (N) => {
        if ((N.preventDefault(), !C)) {
          p("請選擇藥品");
          return;
        }
        u(!0), p(null);
        try {
          const z = o.find((oe) => oe.CODE === C),
            U = (z == null ? void 0 : z.BARCODE) || [],
            q = [...new Set([...U, n])];
          console.log("原本的條碼:", U),
            console.log("新條碼:", n),
            console.log("合併後的條碼:", q);
          const se = {
            Data: [{ BARCODE: q, CODE: C, BARCODE2: JSON.stringify(q) }],
          };
          console.log("建立條碼請求:", se);
          const ae = await ke("/api/med_page/add_med_clouds", {
            method: "POST",
            body: se,
          });
          console.log("建立條碼回應:", ae),
            ae.Code === 200 ? (r(), t()) : p(ae.Result || "新增條碼失敗");
        } catch (z) {
          console.error("新增條碼失敗:", z), p("新增條碼失敗");
        } finally {
          u(!1);
        }
      };
    return e
      ? s.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
          children: s.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between p-4 border-b",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      s.jsx(mr, { className: "w-6 h-6 text-blue-600 mr-2" }),
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-gray-900",
                        children: "建立條碼",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: s.jsx(Ie, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: te,
                className: "p-6",
                children: [
                  h &&
                    s.jsx("div", {
                      className:
                        "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                      children: h,
                    }),
                  i &&
                    s.jsx("div", {
                      className: "text-center py-8 text-gray-500",
                      children: "載入藥檔中...",
                    }),
                  !i &&
                    s.jsxs("div", {
                      className: "space-y-4",
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
                              value: n,
                              disabled: !0,
                              className:
                                "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500",
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          ref: B,
                          className: "relative",
                          children: [
                            s.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "藥名 ",
                                s.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("input", {
                                  type: "text",
                                  value: g,
                                  onChange: (N) => {
                                    y(N.target.value), R(!0);
                                  },
                                  onFocus: () => R(!0),
                                  placeholder: "輸入藥名搜尋",
                                  disabled: c,
                                  className:
                                    "w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                s.jsx(Sn, {
                                  className:
                                    "absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none",
                                }),
                              ],
                            }),
                            k &&
                              g &&
                              A.length > 0 &&
                              s.jsxs("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto",
                                children: [
                                  A.slice(0, 50).map((N, z) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => w(N),
                                        className: `px-4 py-2 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 ${
                                          (v == null ? void 0 : v.CODE) ===
                                          N.CODE
                                            ? "bg-blue-50"
                                            : ""
                                        }`,
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: N.NAME,
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: [
                                              "藥碼: ",
                                              N.CODE,
                                              " | 料號: ",
                                              N.SKDIACODE,
                                            ],
                                          }),
                                        ],
                                      },
                                      z
                                    )
                                  ),
                                  A.length > 50 &&
                                    s.jsx("div", {
                                      className:
                                        "px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center",
                                      children:
                                        "僅顯示前 50 筆，請縮小搜尋範圍",
                                    }),
                                ],
                              }),
                            k &&
                              g &&
                              A.length === 0 &&
                              s.jsx("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg",
                                children: s.jsx("div", {
                                  className:
                                    "px-4 py-3 text-sm text-gray-500 text-center",
                                  children: "查無符合的藥品",
                                }),
                              }),
                          ],
                        }),
                        s.jsxs("div", {
                          ref: K,
                          className: "relative",
                          children: [
                            s.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "中文名",
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("input", {
                                  type: "text",
                                  value: b,
                                  onChange: (N) => {
                                    S(N.target.value), V(!0);
                                  },
                                  onFocus: () => V(!0),
                                  placeholder: "輸入中文名搜尋",
                                  disabled: c,
                                  className:
                                    "w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                s.jsx(Sn, {
                                  className:
                                    "absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none",
                                }),
                              ],
                            }),
                            M &&
                              b &&
                              H.length > 0 &&
                              s.jsxs("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto",
                                children: [
                                  H.slice(0, 50).map((N, z) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => w(N),
                                        className: `px-4 py-2 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 ${
                                          (v == null ? void 0 : v.CODE) ===
                                          N.CODE
                                            ? "bg-blue-50"
                                            : ""
                                        }`,
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: N.CHT_NAME,
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: [
                                              "藥碼: ",
                                              N.CODE,
                                              " | 料號: ",
                                              N.SKDIACODE,
                                            ],
                                          }),
                                        ],
                                      },
                                      z
                                    )
                                  ),
                                  H.length > 50 &&
                                    s.jsx("div", {
                                      className:
                                        "px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center",
                                      children:
                                        "僅顯示前 50 筆，請縮小搜尋範圍",
                                    }),
                                ],
                              }),
                            M &&
                              b &&
                              H.length === 0 &&
                              s.jsx("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg",
                                children: s.jsx("div", {
                                  className:
                                    "px-4 py-3 text-sm text-gray-500 text-center",
                                  children: "查無符合的藥品",
                                }),
                              }),
                          ],
                        }),
                        s.jsxs("div", {
                          ref: L,
                          className: "relative",
                          children: [
                            s.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "藥碼",
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("input", {
                                  type: "text",
                                  value: C,
                                  onChange: (N) => {
                                    f(N.target.value), F(!0);
                                  },
                                  onFocus: () => F(!0),
                                  placeholder: "輸入藥碼搜尋",
                                  disabled: c,
                                  className:
                                    "w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                s.jsx(Sn, {
                                  className:
                                    "absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none",
                                }),
                              ],
                            }),
                            D &&
                              C &&
                              G.length > 0 &&
                              s.jsxs("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto",
                                children: [
                                  G.slice(0, 50).map((N, z) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => w(N),
                                        className: `px-4 py-2 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 ${
                                          (v == null ? void 0 : v.CODE) ===
                                          N.CODE
                                            ? "bg-blue-50"
                                            : ""
                                        }`,
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: N.CODE,
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: [
                                              "藥名: ",
                                              N.NAME,
                                              " | 料號: ",
                                              N.SKDIACODE,
                                            ],
                                          }),
                                        ],
                                      },
                                      z
                                    )
                                  ),
                                  G.length > 50 &&
                                    s.jsx("div", {
                                      className:
                                        "px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center",
                                      children:
                                        "僅顯示前 50 筆，請縮小搜尋範圍",
                                    }),
                                ],
                              }),
                            D &&
                              C &&
                              G.length === 0 &&
                              s.jsx("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg",
                                children: s.jsx("div", {
                                  className:
                                    "px-4 py-3 text-sm text-gray-500 text-center",
                                  children: "查無符合的藥品",
                                }),
                              }),
                          ],
                        }),
                        s.jsxs("div", {
                          ref: Q,
                          className: "relative",
                          children: [
                            s.jsx("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "料號",
                            }),
                            s.jsxs("div", {
                              className: "relative",
                              children: [
                                s.jsx("input", {
                                  type: "text",
                                  value: d,
                                  onChange: (N) => {
                                    m(N.target.value), T(!0);
                                  },
                                  onFocus: () => T(!0),
                                  placeholder: "輸入料號搜尋",
                                  disabled: c,
                                  className:
                                    "w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                }),
                                s.jsx(Sn, {
                                  className:
                                    "absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none",
                                }),
                              ],
                            }),
                            P &&
                              d &&
                              ie.length > 0 &&
                              s.jsxs("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto",
                                children: [
                                  ie.slice(0, 50).map((N, z) =>
                                    s.jsxs(
                                      "div",
                                      {
                                        onClick: () => w(N),
                                        className: `px-4 py-2 cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0 ${
                                          (v == null ? void 0 : v.CODE) ===
                                          N.CODE
                                            ? "bg-blue-50"
                                            : ""
                                        }`,
                                        children: [
                                          s.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: N.SKDIACODE,
                                          }),
                                          s.jsxs("div", {
                                            className:
                                              "text-xs text-gray-500 mt-1",
                                            children: [
                                              "藥名: ",
                                              N.NAME,
                                              " | 藥碼: ",
                                              N.CODE,
                                            ],
                                          }),
                                        ],
                                      },
                                      z
                                    )
                                  ),
                                  ie.length > 50 &&
                                    s.jsx("div", {
                                      className:
                                        "px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center",
                                      children:
                                        "僅顯示前 50 筆，請縮小搜尋範圍",
                                    }),
                                ],
                              }),
                            P &&
                              d &&
                              ie.length === 0 &&
                              s.jsx("div", {
                                className:
                                  "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg",
                                children: s.jsx("div", {
                                  className:
                                    "px-4 py-3 text-sm text-gray-500 text-center",
                                  children: "查無符合的藥品",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  s.jsxs("div", {
                    className: "flex justify-end gap-3 mt-6",
                    children: [
                      s.jsx("button", {
                        type: "button",
                        onClick: t,
                        disabled: c,
                        className:
                          "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50",
                        children: "取消",
                      }),
                      s.jsx("button", {
                        type: "submit",
                        disabled: c || !C || i,
                        className:
                          "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: c ? "建立中..." : "確認建立",
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
  Pg = (e = {}) => {
    const { onMessage: t, autoConnect: n = !0 } = e;
    x.useEffect(() => {
      let a = null;
      return (
        (() => {
          try {
            n && bn.connect(), t && (a = bn.onMessage(t));
          } catch (u) {
            console.error("WebSocket initialization error:", u);
          }
        })(),
        () => {
          a && a();
        }
      );
    }, [t, n]);
    const r = x.useCallback(() => {
        try {
          bn.connect();
        } catch (a) {
          throw (console.error("WebSocket connect error:", a), a);
        }
      }, []),
      o = x.useCallback(() => {
        try {
          bn.disconnect();
        } catch (a) {
          throw (console.error("WebSocket disconnect error:", a), a);
        }
      }, []),
      l = x.useCallback(async () => {
        try {
          return await bn.sendMessage();
        } catch (a) {
          throw (console.error("WebSocket send message error:", a), a);
        }
      }, []),
      i = x.useCallback(() => bn.isConnected(), []);
    return { connect: r, disconnect: o, sendMessage: l, isConnected: i };
  },
  Mg = () => {
    const { t: e, language: t, toggleLanguage: n } = Ns(),
      { toasts: r, showToast: o, removeToast: l } = pf(),
      [i, a] = x.useState([]),
      [c, u] = x.useState([]),
      [h, p] = x.useState(!0),
      [g, y] = x.useState(null),
      [b, S] = x.useState(null),
      [C, f] = x.useState(!1),
      [d, m] = x.useState(!1),
      [v, _] = x.useState(!1),
      [k, R] = x.useState(!1),
      [M, V] = x.useState(!1),
      [D, F] = x.useState([]),
      [P, T] = x.useState(0),
      [B, K] = x.useState([]),
      [L, Q] = x.useState(""),
      [E, $] = x.useState(!1),
      [A, H] = x.useState([]),
      [G, ie] = x.useState(!1),
      [w, te] = x.useState(""),
      [N, z] = x.useState(!1),
      [U, q] = x.useState(!1),
      [se, ae] = x.useState(!1),
      [oe, Be] = x.useState(!1),
      [wr, br] = x.useState(!1),
      [Ho, Go] = x.useState(""),
      xn = x.useRef(null),
      Wo = () => {
        const Y = mi();
        Y != null && Y.homepage && (window.location.href = "../frontpage");
      },
      [zn, Nr] = x.useState(Ac()),
      [_r, jr] = zn;
    Pg({
      onMessage: (Y) => {
        console.log("=== Received WebSocket Message ==="),
          console.log("Message:", Y),
          $e(),
          yn();
      },
      autoConnect: !0,
    });
    const $e = async (Y, re) => {
        p(!0), y(null);
        try {
          const [xe, Re] = Y && re ? [Y, re] : zn,
            he = await tg(xe, Re);
          if ((console.log("Response Data:", he), he.Code === 200)) {
            a(he.Data);
            const _t = ng(he.Data, se);
            if ((u(_t), b)) {
              const Kt = _t.find(
                (qe) => qe.CODE === b.CODE && qe.SKDIACODE === b.SKDIACODE
              );
              Kt && S(Kt);
            }
          } else y(he.Result || "查詢失敗"), a([]), u([]);
        } catch (xe) {
          console.error("Failed to load inspections:", xe),
            y(xe instanceof Error ? xe.message : "系統錯誤，請稍後再試"),
            a([]),
            u([]);
        } finally {
          p(!1);
        }
      },
      yn = async () => {
        try {
          const re = new Date().toLocaleDateString("zh-TW", {
              timeZone: "Asia/Taipei",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            [xe, Re, he] = re.split("/"),
            _t = `${xe}-${Re.padStart(2, "0")}-${he.padStart(2, "0")} 00:00:00`,
            Kt = `${xe}-${Re.padStart(2, "0")}-${he.padStart(2, "0")} 23:59:59`,
            qe = await Lc(_t, Kt);
          qe.Code === 200
            ? (T(qe.Data.length), F(qe.Data), K(qe.Data))
            : (qe.Result && qe.Result.includes("查無此時間區域")
                ? console.warn("No inspection data found for today:", qe.Result)
                : console.error(
                    "Failed to load today inspection count:",
                    qe.Result
                  ),
              T(0),
              F([]),
              K([]));
        } catch (Y) {
          console.error("Failed to load today inspection count:", Y),
            T(0),
            F([]),
            K([]);
        }
      },
      Sr = async (Y, re) => {
        try {
          console.log("=== Custom Date Range Query ==="),
            console.log("Start Date:", Y),
            console.log("End Date:", re);
          const xe = await Lc(Y, re);
          xe.Code === 200
            ? (K(xe.Data),
              console.log("Custom query result:", xe.Data.length, "筆"))
            : (console.error("Custom date range query failed:", xe.Result),
              K([]));
        } catch (xe) {
          console.error("Custom date range query error:", xe), K([]);
        }
      },
      I = async (Y) => {
        if (!Array.isArray(c) || c.length === 0) {
          console.warn("驗收資料尚未載入完成，暫不執行條碼搜尋"), H([]), ie(!1);
          return;
        }
        if (!Y.trim()) {
          U || H(c), ie(!1);
          return;
        }
        $(!0), ie(!0);
        try {
          console.log("=== 開始條碼搜尋 ==="), console.log("搜尋條碼:", Y);
          const re = await Oc(Y);
          if (
            (console.log("條碼搜尋回應:", re),
            re.Code === 200 && re.Data && re.Data.length > 0)
          ) {
            console.log("API 回傳的完整資料:", re.Data);
            const xe = re.Data.map((he) => (he == null ? void 0 : he.CODE))
              .filter(Boolean)
              .map((he) => he.toLowerCase());
            console.log("搜尋到的藥品碼(小寫):", xe);
            const Re = c.filter((he) => {
              const _t =
                  typeof he.CODE == "string"
                    ? he.CODE.split(",")
                        .map(($t) => $t.trim())
                        .filter(Boolean)
                    : [],
                Kt = Array.isArray(he.items)
                  ? he.items
                      .map(($t) => ($t == null ? void 0 : $t.CODE))
                      .filter(Boolean)
                  : [],
                qe = [..._t].map(($t) => String($t).toLowerCase()),
                va = qe.some(($t) => xe.includes($t));
              return (
                console.log("驗收單資料", qe),
                va &&
                  console.log("✅ 找到匹配 group：", {
                    groupId: he.GUID || he.id,
                    codesInGroupLower: qe,
                  }),
                va
              );
            });
            console.log("篩選後的驗收資料:", Re.length, "筆"),
              H(Re),
              Re.length > 0
                ? o(`找到 ${Re.length} 筆相關藥品`, "success")
                : o("查無相關藥品資料", "warning");
          } else
            re.Code === -200 && re.Result === "查無資料"
              ? (console.log("查無條碼資料，開啟建立條碼彈窗"),
                Go(Y),
                br(!0),
                H([]),
                o("查無條碼資料", "warning"))
              : (console.log("查無相關藥品資料"),
                H([]),
                o("查無相關藥品資料", "warning"));
        } catch (re) {
          console.error("條碼搜尋失敗:", re), H([]), o("條碼搜尋失敗", "error");
        } finally {
          $(!1);
        }
      },
      J = (Y) => {
        if (!Y.trim()) {
          if (!G) H(c);
          else if (L.trim()) {
            I(L);
            return;
          }
          q(!1);
          return;
        }
        z(!0), q(!0);
        try {
          console.log("=== 開始單號搜尋 ==="), console.log("搜尋單號:", Y);
          const re = c.filter((xe) =>
            xe.items.some((Re) => {
              var he, _t;
              return (
                ((he = Re.IC_SN) == null
                  ? void 0
                  : he.toLowerCase().includes(Y.toLowerCase())) ||
                ((_t = Re.PON) == null
                  ? void 0
                  : _t.toLowerCase().includes(Y.toLowerCase()))
              );
            })
          );
          console.log("篩選後的驗收資料:", re.length, "筆"),
            H(re),
            re.length > 0
              ? o(`找到 ${re.length} 筆相關驗收單`, "success")
              : o("查無相關驗收單", "warning");
        } catch (re) {
          console.error("單號搜尋失敗:", re), H([]), o("單號搜尋失敗", "error");
        } finally {
          z(!1);
        }
      },
      X = (Y) => {
        Q(Y);
      },
      ee = (Y) => {
        Y.key === "Enter" && I(L);
      },
      ge = (Y) => {
        te(Y);
        const re = setTimeout(() => {
          J(Y);
        }, 300);
        return () => clearTimeout(re);
      },
      Z = x.useCallback(
        async (Y) => {
          console.log("=== 掃描到條碼 ==="),
            console.log("條碼:", Y),
            Q(Y),
            !Array.isArray(c) || c.length === 0
              ? (console.log("掃描時驗收資料為空，正在載入..."),
                (xn.current = Y),
                await $e())
              : I(Y);
        },
        [c]
      );
    x.useEffect(() => {
      $e(), yn();
    }, []),
      x.useEffect(() => {
        xn.current &&
          c.length > 0 &&
          (console.log("驗收資料已載入完成，執行待處理的條碼搜尋:", xn.current),
          I(xn.current),
          (xn.current = null));
      }, [c]),
      x.useEffect(() => {
        if (!G && !U) H(c);
        else if (G && L.trim() && c.length > 0)
          Oc(L).then((Y) => {
            if (Y.Code === 200 && Y.Data && Y.Data.length > 0) {
              const re = Y.Data.map((Re) => Re.CODE).filter(Boolean),
                xe = c.filter((Re) => re.includes(Re.CODE));
              H(xe);
            } else H([]);
          });
        else if (U && w.trim() && c.length > 0) {
          const Y = c.filter((re) => {
            var xe, Re, he;
            return (
              re.CODE.includes(w) ||
              ((xe = re.NAME_CH) == null ? void 0 : xe.includes(w)) ||
              ((Re = re.NAME_E) == null ? void 0 : Re.includes(w)) ||
              ((he = re.KSKLOT) == null
                ? void 0
                : he.some((_t) => {
                    var Kt;
                    return (Kt = _t.KS_num) == null ? void 0 : Kt.includes(w);
                  }))
            );
          });
          H(Y);
        }
      }, [c, G, U, L, w]),
      x.useEffect(() => {
        $e();
      }, [se]);
    const st = (Y, re) => {
        Nr([Y, re]);
      },
      ot = () => {
        $e(_r, jr);
      },
      lt = () => {
        const Y = Ac();
        Nr(Y), $e(Y[0], Y[1]);
      },
      gf = i.length,
      xf = G ? A.length : c.length,
      xa = at(),
      ya = fp();
    return s.jsxs("div", {
      className: "min-h-screen flex flex-col bg-white",
      children: [
        s.jsx("main", {
          className: "flex-1 p-4 md:p-6 lg:p-8 pb-24",
          children: s.jsxs("div", {
            className: "max-w-screen-xl mx-auto",
            children: [
              s.jsx("header", {
                className: "mb-8",
                children: s.jsxs("div", {
                  className: "flex items-center justify-between mb-1",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("button", {
                          onClick: Wo,
                          className:
                            "flex items-center justify-center w-12 h-12 hover:bg-slate-200 rounded-lg transition-colors",
                          children: s.jsx(Zm, {
                            size: 24,
                            className: "text-slate-700",
                          }),
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h1", {
                              className:
                                "text-2xl md:text-3xl font-semibold text-gray-800",
                              children: e("app.inspection"),
                            }),
                            s.jsx("p", {
                              className: "text-slate-600",
                              children: xa && ya ? `${xa}-${ya}` : "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsxs("button", {
                          onClick: n,
                          className:
                            "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                          children: [
                            s.jsx(Xm, { className: "w-4 h-4 mr-2" }),
                            e(`language.${t}`),
                          ],
                        }),
                        s.jsxs("button", {
                          onClick: () => {
                            sessionStorage.clear(), window.location.reload();
                          },
                          className:
                            "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                          children: [
                            s.jsx("svg", {
                              className: "w-4 h-4 mr-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                              }),
                            }),
                            e("logout"),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                children: [
                  s.jsx("div", {
                    className: "bg-white rounded-lg shadow-sm border p-6",
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-blue-100 rounded-lg",
                          children: s.jsx(An, {
                            className: "w-6 h-6 text-blue-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.drugs"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: xf,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border p-6 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-200",
                    onClick: () => R(!0),
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-green-100 rounded-lg",
                          children: s.jsx(rp, {
                            className: "w-6 h-6 text-green-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.total"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: gf,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border p-6 cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-200",
                    onClick: () => {
                      yn(), V(!0);
                    },
                    children: s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx("div", {
                          className: "p-2 bg-purple-100 rounded-lg",
                          children: s.jsx(An, {
                            className: "w-6 h-6 text-purple-600",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "ml-4",
                          children: [
                            s.jsx("p", {
                              className: "text-sm font-medium text-gray-600",
                              children: e("app.inspection.today"),
                            }),
                            s.jsx("p", {
                              className: "text-2xl font-semibold text-gray-900",
                              children: P,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              s.jsx(_g, {
                startDate: _r,
                endDate: jr,
                onDateChange: st,
                onSearch: ot,
                onReset: lt,
                loading: h,
              }),
              s.jsxs("div", {
                className: "mb-6",
                children: [
                  s.jsx("div", {
                    className: "mb-4",
                    children: s.jsxs("label", {
                      className: "inline-flex items-center",
                      children: [
                        s.jsx("input", {
                          type: "checkbox",
                          checked: se,
                          onChange: (Y) => ae(Y.target.checked),
                          className:
                            "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                        }),
                        s.jsx("span", {
                          className: "ml-2 text-sm text-gray-700",
                          children: "顯示已鎖定資料",
                        }),
                      ],
                    }),
                  }),
                  s.jsxs("div", {
                    className: "flex flex-col xl:flex-row gap-4 xl:items-end",
                    children: [
                      s.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                          s.jsxs("button", {
                            onClick: () => f(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: [
                              s.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: s.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                                }),
                              }),
                              e("app.inspection.batch_upload"),
                            ],
                          }),
                          s.jsxs("button", {
                            onClick: () => m(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            children: [
                              s.jsx("svg", {
                                className: "w-5 h-5 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: s.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                }),
                              }),
                              e("app.inspection.excel_upload"),
                            ],
                          }),
                          s.jsxs("button", {
                            onClick: () => _(!0),
                            className:
                              "inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",
                            children: [
                              s.jsx(mr, { className: "w-5 h-5 mr-2" }),
                              e("app.inspection.manual_create"),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-4 xl:flex-1 xl:justify-end",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-700 whitespace-nowrap",
                                children: [
                                  e("app.inspection.barcode_search"),
                                  ":",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "relative",
                                children: [
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: s.jsx(fs, {
                                      className: "h-5 w-5 text-gray-400",
                                    }),
                                  }),
                                  s.jsx("input", {
                                    type: "text",
                                    value: L,
                                    onChange: (Y) => X(Y.target.value),
                                    onKeyPress: ee,
                                    placeholder: e(
                                      "app.inspection.search_barcode_placeholder"
                                    ),
                                    className:
                                      "block w-full pl-10 pr-20 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                                  }),
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center",
                                    children: E
                                      ? s.jsx("div", {
                                          className: "pr-3",
                                          children: s.jsx("div", {
                                            className:
                                              "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600",
                                          }),
                                        })
                                      : s.jsx("button", {
                                          onClick: async () => {
                                            (!Array.isArray(c) ||
                                              c.length === 0) &&
                                              (console.log(
                                                "驗收資料尚未載入，正在載入..."
                                              ),
                                              await $e()),
                                              Be(!0);
                                          },
                                          className:
                                            "pr-3 flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors",
                                          title: "掃描條碼",
                                          children: s.jsx(di, {
                                            className: "h-5 w-5",
                                          }),
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsxs("label", {
                                className:
                                  "text-sm font-medium text-gray-700 whitespace-nowrap",
                                children: [
                                  e("app.inspection.number_search"),
                                  ":",
                                ],
                              }),
                              s.jsxs("div", {
                                className: "relative",
                                children: [
                                  s.jsx("div", {
                                    className:
                                      "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                    children: s.jsx(fs, {
                                      className: "h-5 w-5 text-gray-400",
                                    }),
                                  }),
                                  s.jsx("input", {
                                    type: "text",
                                    value: w,
                                    onChange: (Y) => ge(Y.target.value),
                                    placeholder: e(
                                      "app.inspection.search_number_placeholder"
                                    ),
                                    className:
                                      "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                                  }),
                                  N &&
                                    s.jsx("div", {
                                      className:
                                        "absolute inset-y-0 right-0 pr-3 flex items-center",
                                      children: s.jsx("div", {
                                        className:
                                          "animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600",
                                      }),
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
              g &&
                s.jsx("div", {
                  className:
                    "mb-6 p-4 bg-red-50 border border-red-200 rounded-md",
                  children: s.jsxs("div", {
                    className: "flex",
                    children: [
                      s.jsx(ut, { className: "h-5 w-5 text-red-400" }),
                      s.jsx("div", {
                        className: "ml-3",
                        children: s.jsx("p", {
                          className: "text-sm text-red-800",
                          children: g,
                        }),
                      }),
                    ],
                  }),
                }),
              s.jsx(mg, { data: A, loading: h, onRowClick: S }),
            ],
          }),
        }),
        s.jsx("footer", {
          className:
            "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
          children: "Copyright ©2025 鴻森智能科技",
        }),
        s.jsx(Ng, {
          groupedData: b,
          isOpen: !!b,
          onClose: () => S(null),
          onDataUpdate: () => $e(),
        }),
        s.jsx(Eg, {
          isOpen: C,
          onClose: () => f(!1),
          onDataUpdate: () => {
            $e(), yn();
          },
        }),
        s.jsx(Dg, {
          isOpen: d,
          onClose: () => m(!1),
          onDataUpdate: () => $e(),
        }),
        s.jsx(Tg, {
          isOpen: v,
          onClose: () => _(!1),
          onDataUpdate: () => $e(),
        }),
        s.jsx($c, {
          isOpen: k,
          onClose: () => R(!1),
          inspections: i,
          initialDateRange: zn,
          onDateRangeChange: (Y, re) => {
            Nr([Y, re]), $e(Y, re);
          },
          onDataUpdate: () => $e(),
        }),
        s.jsx($c, {
          isOpen: M,
          onClose: () => V(!1),
          inspections: B,
          title: "今日驗收單資料",
          isToday: !0,
          onDateRangeChange: Sr,
          onDataUpdate: () => {
            const [Y, re] = zn;
            $e(), Sr(Y, re);
          },
        }),
        s.jsx(Ig, { isOpen: oe, onClose: () => Be(!1), onBarcodeDetected: Z }),
        s.jsx(Rg, {
          isOpen: wr,
          onClose: () => br(!1),
          barcode: Ho,
          onSuccess: () => {
            br(!1), L && I(L);
          },
        }),
        s.jsx(mf, { toasts: r, onRemove: l }),
      ],
    });
  };
function Ag() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1),
    [o, l] = x.useState(!0);
  x.useEffect(() => {
    (async () => {
      try {
        await ws(), t(!0);
        const c = dp();
        r(c),
          console.log("Authentication check:", {
            authenticated: c,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (c) {
        console.error("Failed to load configuration:", c);
      } finally {
        l(!1);
      }
    })();
  }, []);
  const i = () => {
    r(!0);
  };
  return !e || o
    ? s.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: s.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : s.jsx(mp, { children: n ? s.jsx(Mg, {}) : s.jsx(pp, { onLogin: i }) });
}
Xd(document.getElementById("root")).render(
  s.jsx(x.StrictMode, { children: s.jsx(Ag, {}) })
);
//# sourceMappingURL=index-k_O_jiCm.js.map
